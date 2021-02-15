import React, { useState, useEffect } from "react";
import Link from "next/link";
import { escapehatches } from "../constants/escapehatches";
import { initialtiles } from "../constants/initialtiles";
import { Board } from "./Board";
import { Guards } from "./Guards";
import { Prisoners } from "./Prisoners";
import { Tiles } from "./Tiles";

export const Game = ({ prisonersOrGuards, gameid, msgid, wsmsgs, client, removeMessage }) => {
  const [lastmsgid, setLastmsgid] = useState(0);
  const [tiles, setTiles] = useState([...initialtiles]);
  const [ptiles, setPtiles] = useState([]);
  const [gtiles, setGtiles] = useState([]);
  const [squares, setSquares] = useState(Array(15).fill(Array(15).fill(".")));
  const [usedby, setUsedby] = useState(Array(15).fill(Array(15).fill("")));
  const [selection, setSelection] = useState(-1);
  const [whoseturn, setWhoseturn] = useState("P");
  const [currentcoords, setCurrentcoords] = useState([]);
  const [rescues, setRescues] = useState(0);
  const [snapshot, setSnapshot] = useState({
    squares: [...squares],
    usedby: [...usedby],
    ptiles: [...ptiles],
    gtiles: [...gtiles],
  });

  // let host = process.env.NODE_ENV === 'production' ? 'wss://tilerunner.herokuapp.com' : 'ws://localhost:5000';
  // const [client, setClient] = useState(new CustomSocket(host, processMessage));
  useEffect(() => {
    // client.connect();
    if (prisonersOrGuards === "P") {
      let tempPTiles = [...ptiles];
      let tempGTiles = [...gtiles];
      let tempTiles = [...tiles];
      while (tempPTiles.length < 7) {
        let rand = Math.floor(Math.random() * tempTiles.length);
        tempPTiles.push(tempTiles[rand]);
        tempTiles.splice(rand, 1);
        rand = Math.floor(Math.random() * tempTiles.length);
        tempGTiles.push(tempTiles[rand]);
        tempTiles.splice(rand, 1);
      }
      tempPTiles.sort();
      tempGTiles.sort();
      setGtiles(tempGTiles);
      setPtiles(tempPTiles);
      setTiles(tempTiles);
    }

    else {
      try {
        console.log("Sending ggd");
        client.send(
          JSON.stringify({
            gameid: gameid,
            type: "pb",
            func: "ggd" // get game data
          }));
      }
      catch { }
    }
  }, []);
  useEffect(() => {
    let msg = wsmsgs[0];
    if (msg)
      processMessage(msg);

  }, [wsmsgs]);
  const logMessageFromWS = (messageData) => {
    console.log("Message being received by " + prisonersOrGuards);
    console.log("func : " + messageData.func);
    console.log("ptiles : " + JSON.stringify(ptiles) + " -> " + messageData.ptiles);
    console.log("gtiles : " + JSON.stringify(gtiles) + " -> " + messageData.gtiles);
  };

  function processMessage(message) {
    let messageData = JSON.parse(message); // was message.data
    logMessageFromWS(messageData);
    if (messageData.gameid === gameid && messageData.type === "pb") { // This instance of a prison break game
      // when guards join game they send ggd, and prisoner picks it up and sends sgd, then guards pick that up and take the data
      if (messageData.func === "ggd" && prisonersOrGuards === "P") { // get game data (sent by guards, prisoners respond here)
        client.send(
          JSON.stringify({
            gameid: gameid,
            type: "pb",
            func: "sgd",
            tiles: tiles,
            squares: squares,
            ptiles: ptiles,
            gtiles: gtiles,
            usedby: usedby,
            whoseturn: whoseturn,
            selection: selection,
            currentcoords: currentcoords,
            snapshot: snapshot,
            rescues: rescues // may have rescued another prisoner
          })
        );
      }
      if (messageData.func === "sgd" && prisonersOrGuards === "G") { // send game data (prisoners sent it, guards now get it)
        setTiles(messageData.tiles);
        setSquares(messageData.squares);
        setPtiles(messageData.ptiles);
        setGtiles(messageData.gtiles);
        setUsedby(messageData.usedby);
        setWhoseturn(messageData.whoseturn);
        setSelection(messageData.selection);
        setCurrentcoords(messageData.currentcoords);
        setSnapshot(messageData.snapshot);
        setRescues(messageData.rescues);
      }
      if (messageData.func === "ept") { // end prisoners turn
        setWhoseturn("G");
        setSelection(-1);
        setCurrentcoords([]);
        setSquares(messageData.squares);
        setUsedby(messageData.usedby);
        setPtiles(messageData.ptiles);
        setTiles(messageData.tiles);
        setRescues(messageData.rescues);
        setSnapshot({
          squares: [...messageData.squares],
          usedby: [...messageData.usedby],
          ptiles: [...messageData.ptiles],
          gtiles: [...gtiles],
        });
      }
      if (messageData.func === "egt") { // end guards turn
        setWhoseturn("P");
        setSelection(-1);
        setCurrentcoords([]);
        setSquares(messageData.squares);
        setUsedby(messageData.usedby);
        setGtiles(messageData.gtiles);
        setTiles(messageData.tiles);
        setSnapshot({
          squares: [...messageData.squares],
          usedby: [...messageData.usedby],
          ptiles: [...ptiles],
          gtiles: [...messageData.gtiles],
        });
      }
    }
    removeMessage(message);
  }

  const handleBoardSquareClick = (ri, ci) => {
    let newSquares = [...squares];
    let newUsedby = [...usedby];
    let newPtiles = [...ptiles];
    let newGtiles = [...gtiles]; // tile is selected from rack and clicked square is not used yet
    let newRow = [...squares[ri]];
    let squarevalue = squares[ri][ci];
    let newCurrentcoords = [...currentcoords];

    let coord = String(ri) + "-" + String(ci);
    let cci = currentcoords.indexOf(coord);
    if (selection > -1 && squarevalue === ".") {
      newRow[ci] =
        whoseturn === "P" ? newPtiles[selection] : newGtiles[selection];
      newSquares[ri] = [...newRow];
      whoseturn === "P"
        ? newPtiles.splice(selection, 1)
        : newGtiles.splice(selection, 1);
      let newUsedbyRow = [...newUsedby[ri]];
      newUsedbyRow[ci] = whoseturn;
      newUsedby[ri] = [...newUsedbyRow];

      setSelection((curr) => curr - 1);
      setSquares(newSquares);
      setUsedby(newUsedby);
      setPtiles(newPtiles);
      setGtiles(newGtiles);
      setCurrentcoords([...currentcoords, coord]);
    } else if (squarevalue !== "." && cci > -1) {
      // clicked square has a tile on it from the current move in progress
      // Assuming some good will from the users to click a tile they played
      if ((whoseturn === "P" && newPtiles.length < 7) ||
        (whoseturn === "G" && newGtiles.length < 7)) {
        whoseturn === "P"
          ? newPtiles.push(squarevalue)
          : newGtiles.push(squarevalue);
        let newRow = [...newSquares[ri]];
        newRow[ci] = ".";
        newSquares[ri] = [...newRow];
        let newUsedbyRow = [...newUsedby[ri]];
        newUsedbyRow[ci] = "";
        newUsedby[ri] = [...newUsedbyRow];
        setSelection(
          whoseturn === "P" ? newPtiles.length - 1 : newGtiles.length - 1
        );
        newCurrentcoords.splice(cci, 1);

        setSquares(newSquares);
        setUsedby(newUsedby);
        setPtiles(newPtiles);
        setGtiles(newGtiles);

        setCurrentcoords(newCurrentcoords);
      }
    }
  };

  const handlePrisonerTileClick = (tileindex) => {
    // the index of ptiles
    if (whoseturn === "P") {
      setSelection(tileindex);
    } else {
      alert("It is not your turn");
    }
  };

  const handleGuardTileClick = (tileindex) => {
    // the index of gtiles
    if (whoseturn === "G") {
      setSelection(tileindex);
    } else {
      alert("It is not your turn");
    }
  };

  const endPrisonersTurn = () => {
    let newRescues = rescues;
    for (var i = 0; i < currentcoords.length; i++) {
      if (escapehatches.indexOf(currentcoords[i]) > -1) {
        newRescues = newRescues + 1;
      }
    }
    let newPtiles = [...ptiles];
    let newTiles = [...tiles];
    while (newPtiles.length < 7 && newTiles.length > 0) {
      let rand = Math.floor(Math.random() * newTiles.length);
      newPtiles.push(newTiles[rand]);
      newTiles.splice(rand, 1);
    }
    newPtiles.sort();
    setWhoseturn("G");
    setSelection(-1);
    setCurrentcoords([]);
    setPtiles(newPtiles);
    setTiles(newTiles);
    setRescues(newRescues);
    setSnapshot({
      squares: [...squares],
      usedby: [...usedby],
      ptiles: [...newPtiles],
      gtiles: [...gtiles],
    });

    client.send(
      JSON.stringify({
        gameid: gameid,
        type: "pb",
        func: "ept",
        squares: squares,
        usedby: usedby,
        ptiles: newPtiles,
        tiles: newTiles,
        rescues: newRescues // may have rescued another prisoner
      })
    );
  };
  const endGuardsTurn = () => {
    let newGtiles = [...gtiles];
    let newTiles = [...tiles];
    while (newGtiles.length < 7 && newTiles.length > 0) {
      let rand = Math.floor(Math.random() * newTiles.length);
      newGtiles.push(newTiles[rand]);
      newTiles.splice(rand, 1);
    }
    newGtiles.sort();
    let snapsquares = [...squares];
    let snapusedby = [...usedby];
    let snapptiles = [...ptiles];
    let snapgtiles = [...gtiles];
    setWhoseturn("P");
    setSelection(-1);
    setCurrentcoords([]);
    setGtiles(newGtiles);
    setTiles(newTiles);
    setSnapshot({
      squares: snapsquares,
      usedby: snapusedby,
      ptiles: snapptiles,
      gtiles: snapgtiles,
    });

    client.send(
      JSON.stringify({
        gameid: gameid,
        type: "pb",
        func: "egt",
        squares: squares,
        usedby: usedby,
        gtiles: newGtiles,
        tiles: newTiles // we picked new tiles so tile pool changed
      })
    );
  };

  const recallTiles = () => {
    setSquares([...snapshot.squares]);
    setUsedby([...snapshot.usedby]);
    setPtiles([...snapshot.ptiles]);
    setGtiles([...snapshot.gtiles]);
    setSelection(-1);
    setCurrentcoords([]);
  };

  return (
    <div className="container-fluid prisonbreak">
      <div className="row">
        <div className="col-11 pbtitle">Prison Break</div>
        <div className="col-1 pbhomelink" data-toggle="tooltip" title="Home">
          <Link href={"../../"}>
            <a>🏠</a>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-2 pbPrisoners">
          <Prisoners
            ptiles={ptiles}
            whoseturn={whoseturn}
            selection={selection}
            onClick={(ti) => handlePrisonerTileClick(ti)}
            onClickFinishTurn={() => endPrisonersTurn()}
            onClickTileRecall={() => recallTiles()}
            rescues={rescues}
            prisonersOrGuards={prisonersOrGuards} />
        </div>
        <div className="col-6" align="center">
          <Board
            squares={squares}
            usedby={usedby}
            onClick={(ri, ci) => handleBoardSquareClick(ri, ci)} />
        </div>
        <div className="col-2 pbGuards">
          <Guards
            gtiles={gtiles}
            whoseturn={whoseturn}
            selection={selection}
            onClick={(ti) => handleGuardTileClick(ti)}
            onClickFinishTurn={() => endGuardsTurn()}
            onClickTileRecall={() => recallTiles()}
            prisonersOrGuards={prisonersOrGuards} />
        </div>
        <div className="col-2">
          <Tiles tiles={tiles} />
        </div>
      </div>
    </div>
  );
};
