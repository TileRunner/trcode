import React, { useState, useEffect } from "react";
import Link from "next/link";
import CustomSocket from "../../ws";
const escapehatches = [
  "0-0",
  "0-7",
  "0-14",
  "7-0",
  "7-14",
  "14-0",
  "14-7",
  "14-14",
]; // coords of escape hatches
const initialtiles = [
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "B",
  "B",
  "C",
  "C",
  "D",
  "D",
  "D",
  "D",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "F",
  "F",
  "G",
  "G",
  "G",
  "H",
  "H",
  "I",
  "I",
  "I",
  "I",
  "I",
  "I",
  "I",
  "I",
  "I",
  "J",
  "K",
  "L",
  "L",
  "L",
  "L",
  "M",
  "M",
  "N",
  "N",
  "N",
  "N",
  "N",
  "N",
  "O",
  "O",
  "O",
  "O",
  "O",
  "O",
  "O",
  "O",
  "P",
  "P",
  "Q",
  "R",
  "R",
  "R",
  "R",
  "R",
  "R",
  "S",
  "S",
  "S",
  "S",
  "T",
  "T",
  "T",
  "T",
  "T",
  "T",
  "U",
  "U",
  "U",
  "U",
  "V",
  "V",
  "W",
  "W",
  "X",
  "Y",
  "Y",
  "Z",
  "?",
  "?",
]; // initial tile pool

export default function PrisonBreak() {
  const [inlobby, setInlobby] = useState(true)
  const [gameid, setGameid] = useState('')
  const [prisonersOrGuards, setPrisonersOrGuards] = useState('')
  const [wsmsgs, setWsmsgs] = useState([])
  const [msgid, setMsgid] = useState(0)
  let host = process.env.NODE_ENV === 'production' ? 'wss://tilerunner.herokuapp.com' : 'ws://localhost:5000';
  const acceptMessage = (message) => {
    setMsgid((curr) => curr + 1)
    setWsmsgs((curr) => [...curr, message.data]);
  }
  const removeMessage = (messageData) => {
    let i = wsmsgs.indexOf(messageData);
    let w = [...wsmsgs];
    w.splice(i,1);
    setWsmsgs(w);
  }
  const [client, setClient] = useState(new CustomSocket(host, acceptMessage));
  useEffect(() => (
    client.connect()
  ),[]);
  return (
    inlobby || prisonersOrGuards === '' ?
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 pbtitle">
            Prison Break Lobby
            <span className="material-icons">run_circle</span>
          </div>
          <div className="col-2 pbhomelink">
            <Link href={"../../"}>
              <a><i className="material-icons" data-toggle="tooltip" title="Home">home</i></a>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-11 offset-1">
            <h2>Prisoners: enter a game id and click "Start Game". Tell the Guards the id.</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-11 offset-1">
            <h2>Guards: get the game id from the Prisoners. Enter the game id and click "Join Game".</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-11 offset-1">
            <h2>Game id:
            <input
                name="gameid"
                value={gameid}
                onChange={(e) => {
                    setGameid(e.target.value)
                }}
            />
            <label>&nbsp;</label>
            <button id="startgame"
                onClick={function() {
                  if (gameid.length > 0) {
                    setPrisonersOrGuards('P');
                    setInlobby(false);
                  }
                }}
            >
                Start Game
            </button>
            <label>&nbsp;</label>
            <button id="joingame"
                onClick={function() {
                  if (gameid.length > 0) {
                    setPrisonersOrGuards('G');
                    setInlobby(false);
                  }
                }}
            >
                Join Game
            </button>
            </h2>
          </div>
        </div>
    </div>
    :
    <Game prisonersOrGuards={prisonersOrGuards}
      gameid={gameid}
      wsmsgs={wsmsgs}
      client={client}
      removeMessage={removeMessage}
      />
  )
}

const Square = (props) => {
  // squareusedby, ri, ci, c, onClick
  // need squareusedby to pick css className corresponding to who played the tile on the square
  // need ri, ci to display alternating characters on unused squares
  // need c to represent which tile is on the square, if any
  // need onClick to handle square click at a higher level
  // need rcd to display selected direction arrow when appropriate
  const usedbyclass =
    props.squareusedby === "P"
      ? "pbSquareUsedByPrisoners"
      : "pbSquareUsedByGuards";
  const tdclass = 
    props.c !== "."
      ? usedbyclass
      : props.rcd[0] === props.ri && props.rcd[1] === props.ci && props.rcd[2] === "r"
      ? "pbSquareRightArrow"
      : props.rcd[0] === props.ri && props.rcd[1] === props.ci && props.rcd[2] === "d"
      ? "pbSquareDownArrow"
      : props.ri === 7 && props.ci === 7
      ? "pbSquareCenterSquare"
      : (props.ri === 0 || props.ri === 7 || props.ri === 14) &&
        (props.ci === 0 || props.ci === 7 || props.ci === 14)
      ? "pbSquareEscapeHatch"
      : props.ri % 2 === props.ci % 2
      ? "pbSquare1"
      : "pbSquare2";
  const tdvalue =
    props.c !== "."
      ? props.c
      : tdclass === "pbSquareRightArrow"
      ? "➡"
      : tdclass === "pbSquareDownArrow"
      ? "⬇"
      : tdclass === "pbSquareCenterSquare"
      ? <i className="material-icons">stars</i>
      : tdclass === "pbSquareEscapeHatch"
      ? "ꐕ" //💫
      : props.ri % 2 === props.ci % 2
      ? "."//"☹"//"⎔"
      : ".";//"ꐕ";//"✦";
  return (
    tdclass === "pbSquareEscapeHatch" ?
    <button className={tdclass} onClick={props.onClick}>
      <span className="material-icons">run_circle</span>
    </button>
    :
    <button className={tdclass} onClick={props.onClick}>
      {tdvalue}
    </button>
);
};

const Board = ({ onClick, squares, usedby, rcd }) => {
  const renderSquare = (ri, ci, c, squareusedby) => {
    return (
      <td key={`Square${ri}-${ci}`} className="pbSquare">
        <Square
          c={c}
          ci={ci}
          ri={ri}
          squareusedby={squareusedby}
          rcd={rcd}
          onClick={() => onClick(ri, ci)}
        />
      </td>
    );
  };
  const renderRow = (ri) => {
    return (
      <tr key={`BoardRow${ri}`} className="pbRow">
        {squares[ri].map((c, ci) => renderSquare(ri, ci, c, usedby[ri][ci]))}
      </tr>
    );
  };

  return (
    <table className="pbBoard">
      <tbody>{squares.map((r, ri) => renderRow(ri))}</tbody>
    </table>
  );
};

const Game = ({prisonersOrGuards, gameid, wsmsgs, client, removeMessage}) => {
  const [tiles, setTiles] = useState([...initialtiles]);
  const [ptiles, setPtiles] = useState([]);
  const [gtiles, setGtiles] = useState([]);
  const [squares, setSquares] = useState(Array(15).fill(Array(15).fill(".")));
  const [usedby, setUsedby] = useState(Array(15).fill(Array(15).fill("")));
  const [selection, setSelection] = useState(-1); // relative to rack of player making a play
  const [whoseturn, setWhoseturn] = useState("P"); // game starts with prisoners play
  const [currentcoords, setCurrentcoords] = useState([]);
  const [rescues, setRescues] = useState(0);
  const [rcd, setRcd] = useState([-1,-1,""]);
  const [passed, setPassed] = useState(false); // true when opponent just passed; if both pass the game ends
  const [snapshot, setSnapshot] = useState({
    squares: [...squares],
    usedby: [...usedby],
    ptiles: [...ptiles],
    gtiles: [...gtiles],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // If it is not my turn && the game has not ended
      if (prisonersOrGuards !== whoseturn && whoseturn !== "X") {
        // I am waiting for opponent move to come through but sometimes it gets missed (no idea why)
        console.log("Interval: prisonersOrGuards=" + prisonersOrGuards + " whoseturn=" + whoseturn + " at " + Date().toLocaleString());
        requestGameData(); // Send a request for game data in case opponent moved and we missed the update
      }
    }, 120000); // this many milliseconds between above code block executions
    return () => clearInterval(interval);
  }, [whoseturn]); // want up to date value of whoseturn to decide whether to ask for an update

  useEffect(() => {
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
      setSnapshot({
        squares: [...squares],
        usedby: [...usedby],
        ptiles: [...tempPTiles],
        gtiles: [...tempGTiles]    
      });
    }
    else
    {
      try {
        client.send(
          JSON.stringify({
            gameid: gameid, // the id for the game
            type: "pb", // prisonbreak
            func: "ggd" // get game data
        }));
      }
      catch {}
    }
  }, []);
  useEffect(() => {
    let msg = wsmsgs[0];
    if (msg) processMessage(msg);
        
  },[wsmsgs])

  function processMessage(message) {
    let messageData = JSON.parse(message); // was message.data
    if (messageData.gameid === gameid && messageData.type === "pb") { // This instance of a prison break game
      if (messageData.func === "requestgamedata" && messageData.requestor !== prisonersOrGuards) { // Opponent requested game info
        client.send(
          JSON.stringify({
            gameid: gameid, // the id for the game
            type: "pb", // prisonbreak
            func: "providegamedata", // provide game data
            sender: prisonersOrGuards, // who sent the data
            tiles: tiles,
            squares: squares,
            ptiles: ptiles,
            gtiles: gtiles,
            usedby: usedby,
            whoseturn: whoseturn,
            selection: selection,
            currentcoords: currentcoords,
            snapshot: snapshot,
            passed: passed,
            rescues: rescues
          })
        );
      }
      if (messageData.func === "providegamedata" && messageData.sender !== prisonersOrGuards && whoseturn !== prisonersOrGuards && whoseturn !== "X") { 
        // opponent provided game data and this player is still waiting to see opponent move
        setTiles(messageData.tiles);
        setSquares(messageData.squares);
        setPtiles(messageData.ptiles);
        setGtiles(messageData.gtiles);
        setUsedby(messageData.usedby);
        setWhoseturn(messageData.whoseturn);
        setSelection(messageData.selection);
        setCurrentcoords(messageData.currentcoords);
        setSnapshot(messageData.snapshot);
        setPassed(messageData.passed);
        setRescues(messageData.rescues);
      }
      // when guards join game they send ggd, and prisoner picks it up and sends sgd, then guards pick that up and take the data
      if (messageData.func === "ggd" && prisonersOrGuards === "P") { // get game data (sent by guards, prisoners respond here)
        client.send(
          JSON.stringify({
            gameid: gameid, // the id for the game
            type: "pb", // prisonbreak
            func: "sgd", // send game data
            tiles: tiles,
            squares: squares,
            ptiles: ptiles,
            gtiles: gtiles,
            usedby: usedby,
            whoseturn: whoseturn,
            selection: selection,
            currentcoords: currentcoords,
            snapshot: snapshot,
            passed: passed,
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
        setPassed(messageData.passed);
        setRescues(messageData.rescues);
      }
      if (messageData.func === "ept") { // end prisoners turn
        setWhoseturn(messageData.whoseturn);
        setSelection(-1);
        setRcd(-1,-1,"");
        setCurrentcoords([]);
        setSquares(messageData.squares);
        setUsedby(messageData.usedby);
        setPtiles(messageData.ptiles);
        setTiles(messageData.tiles);
        setPassed(messageData.passed);
        setRescues(messageData.rescues);
        setSnapshot({
          squares: [...messageData.squares],
          usedby: [...messageData.usedby],
          ptiles: [...messageData.ptiles],
          gtiles: [...gtiles],
        });       
      }
      if (messageData.func === "egt") { // end guards turn
        setWhoseturn(messageData.whoseturn);
        setSelection(-1);
        setRcd(-1,-1,"");
        setCurrentcoords([]);
        setSquares(messageData.squares);
        setUsedby(messageData.usedby);
        setGtiles(messageData.gtiles);
        setTiles(messageData.tiles);
        setPassed(messageData.passed);
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
  
  // Calling setSelection (from handleKeyDown) then handleBoardSquareClick does not let it recognize selection with the new value
  // So I pass newSelection when I want to also set it, otherwise I pass -1 to instruct it to use current value of selection
  // Also passing newRcd
  const handleBoardSquareClick = (ri, ci, newSelection, newRcd) => {
    let newSquares = [...squares];
    let newUsedby = [...usedby];
    let newPtiles = [...ptiles];
    let newGtiles = [...gtiles];
    let newRow = [...squares[ri]];
    let squarevalue = squares[ri][ci];
    let newCurrentcoords = [...currentcoords];
    let coord = String(ri) + "-" + String(ci);
    let cci = currentcoords.indexOf(coord);
    if (newSelection === -1) {
      newSelection = selection;
      newRcd = rcd;
    }
    if (newSelection > -1 && squarevalue === ".") { // tile is selected from rack and clicked square is not used yet
      newRow[ci] =
        whoseturn === "P" ? newPtiles[newSelection] : newGtiles[newSelection];
      newSquares[ri] = [...newRow];
      whoseturn === "P"
        ? newPtiles.splice(newSelection, 1)
        : newGtiles.splice(newSelection, 1);
      let newUsedbyRow = [...newUsedby[ri]];
      newUsedbyRow[ci] = whoseturn;
      newUsedby[ri] = [...newUsedbyRow];
      if (whoseturn === "P" && newSelection === newPtiles.length) { 
        newSelection = newSelection - 1
      }
      if (whoseturn === "G" && newSelection === newGtiles.length) { 
        newSelection = newSelection - 1
      }
      setSelection(newSelection);
      setSquares(newSquares);
      setUsedby(newUsedby);
      setPtiles(newPtiles);
      setGtiles(newGtiles);
      setCurrentcoords([...currentcoords, coord]);
      setRcd(newRcd); // key down handler figured it out
      return;
    }
    if (cci > -1) { // clicked square has a tile on it from the current move in progress
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
      setRcd(-1,-1,""); // make playre click again to set direction
      return;
    }
    // They didn't click a square to place a selected tile there
    // They didn't click a square to remove an existing tile
    if (squares[ri][ci] === ".") {
      // There is nothing on the square so they are picking where to place the next tile via keyboard
      let newDirection = rcd[0] !== ri || rcd[1] !== ci ? "r" : //click new square, start with "r"
       rcd[2] === "r" ? "d" : //click same square that was "r", change to "d"
       rcd[2] === "d" ? "" : //click same square that was "d", change to ""
       "r"; // click same square that was "", change to "r"
      newRcd = [ri,ci,newDirection];
      setRcd(newRcd);
      return;
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
    if (!isPlayValid()) {
      return;
    }
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
    let newWhoseturn = newPtiles.length > 0 ? "G" : "X"; // X = game over
    if (usedby[0][0] !== "" && usedby[0][7] !== "" && usedby[0][14] !== "" && usedby[7][0] !== "" && usedby[7][14] !== "" && usedby[14][0] !== "" && usedby[14][7] !== "" && usedby[14][14] !== "") {
      newWhoseturn = "X"; // No escape hatches left
    }
    setWhoseturn(newWhoseturn);
    setSelection(-1);
    setCurrentcoords([]);
    setPtiles(newPtiles);
    setTiles(newTiles);
    setPassed(false);
    setRescues(newRescues);
    setSnapshot({
      squares: [...squares],
      usedby: [...usedby],
      ptiles: [...newPtiles],
      gtiles: [...gtiles],
    });

    client.send(
      JSON.stringify({
        gameid: gameid, // the id for the game
        type: "pb", // prisonbreak
        func: "ept", // end prisoners turn
        squares: squares, // this was being changed as the tiles were being played
        usedby: usedby, // this was being changed as the tiles were being played
        ptiles: newPtiles, // we picked new tiles for prisoners rack
        tiles: newTiles, // we picked new tiles so tile pool changed
        whoseturn: newWhoseturn, // may have ended the game (whoseturn=X)
        passed: false, // did not just pass
        rescues: newRescues // may have rescued another prisoner
      })
    );
  };

  const endGuardsTurn = () => {
    if (!isPlayValid()) {
      return;
    }
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
    let newWhoseturn = newGtiles.length > 0 ? "P" : "X"; // X = game over
    if (usedby[0][0] !== "" && usedby[0][7] !== "" && usedby[0][14] !== "" && usedby[7][0] !== "" && usedby[7][14] !== "" && usedby[14][0] !== "" && usedby[14][7] !== "" && usedby[14][14] !== "") {
      newWhoseturn = "X"; // No escape hatches left
    }
    setWhoseturn(newWhoseturn);
    setSelection(-1);
    setCurrentcoords([]);
    setGtiles(newGtiles);
    setTiles(newTiles);
    setPassed(false);
    setSnapshot({
      squares: snapsquares,
      usedby: snapusedby,
      ptiles: snapptiles,
      gtiles: snapgtiles,
    });

    client.send(
      JSON.stringify({
        gameid: gameid, // the id for the game
        type: "pb", // prisonbreak
        func: "egt", // end guards turn
        squares: squares, // this was being changed as the tiles were being played
        usedby: usedby, // this was being changed as the tiles were being played
        gtiles: newGtiles, // we picked new tiles for guards rack
        tiles: newTiles, // we picked new tiles so tile pool changed
        passed: false, // did not just pass
        whoseturn: newWhoseturn // may have ended the game (whoseturn=X)
        })
      );
    };

  const swapPrisonersTiles = () => {
    if (tiles.length < 7) {
      window.alert("Need 7 in the bag to exchange")
      return;
    }
    let newPtiles = [];
    let newTiles = [...tiles];
    while (newPtiles.length < 7 && newTiles.length > 0) {
      let rand = Math.floor(Math.random() * newTiles.length);
      newPtiles.push(newTiles[rand]);
      newTiles.splice(rand, 1);
    }
    newPtiles.sort();
    newTiles = [...newTiles, ...snapshot.ptiles];
    newTiles.sort();
    setSquares([...snapshot.squares]);
    setUsedby([...snapshot.usedby]);
    setWhoseturn("G");
    setSelection(-1);
    setCurrentcoords([]);
    setPtiles(newPtiles);
    setTiles(newTiles);
    setPassed(false);
    setSnapshot({
      squares: [...snapshot.squares],
      usedby: [...snapshot.usedby],
      ptiles: [...newPtiles],
      gtiles: [...gtiles],
    });

    client.send(
      JSON.stringify({
        gameid: gameid, // the id for the game
        type: "pb", // prisonbreak
        func: "ept", // end prisoners turn
        whoseturn: "G", // swap never ends the game so go to opponent
        squares: snapshot.squares, // revert to start of turn squares
        usedby: snapshot.usedby, // revert to start of turn used by
        ptiles: newPtiles, // we picked new tiles for prisoners rack
        tiles: newTiles, // we picked new tiles so tile pool changed
        passed: false, // did not just pass
        rescues: rescues // no rescues on an exchange
      })
    );

  }
  
  const swapGuardsTiles = () => {
    if (tiles.length < 7) {
      window.alert("Need 7 in the bag to exchange")
      return;
    }
    let newGtiles = [];
    let newTiles = [...tiles];
    while (newGtiles.length < 7 && newTiles.length > 0) {
      let rand = Math.floor(Math.random() * newTiles.length);
      newGtiles.push(newTiles[rand]);
      newTiles.splice(rand, 1);
    }
    newGtiles.sort();
    newTiles = [...newTiles, ...snapshot.gtiles];
    newTiles.sort();
    setSquares([...snapshot.squares]);
    setUsedby([...snapshot.usedby]);
    setWhoseturn("P");
    setSelection(-1);
    setCurrentcoords([]);
    setGtiles(newGtiles);
    setTiles(newTiles);
    setPassed(false);
    setSnapshot({
      squares: [...snapshot.squares],
      usedby: [...snapshot.usedby],
      ptiles: [...ptiles],
      gtiles: [...newGtiles],
    });

    client.send(
      JSON.stringify({
        gameid: gameid, // the id for the game
        type: "pb", // prisonbreak
        func: "egt", // end guards turn
        whoseturn: "P", // swap never ends the game so go to opponent
        squares: snapshot.squares, // revert to start of turn squares
        usedby: snapshot.usedby, // revert to start of turn used by
        gtiles: newGtiles, // we picked new tiles for prisoners rack
        tiles: newTiles, // we picked new tiles so tile pool changed
        passed: false // did not just pass
      })
    );

  }

  function isPlayValid() {
    if (squares[7][7] === ".") {
      window.alert("First play must hit center square");
      return false;
    }
    let lowrow = 15;
    let highrow = -1;
    let lowcol = 15;
    let highcol = -1;
    for (var r=0; r < 15; ++r) {
      for (var c=0; c < 15; ++c) {
        if (squares[r][c] !== ".") {
          if (!(r > 0 && squares[r-1][c] !== ".") &&
           !(c > 0 && squares[r][c-1] !== ".") &&
           !(r < 14 && squares[r+1][c] !== ".") &&
           !(c < 14 && squares[r][c+1] !== ".")
           ) {
            window.alert("Each played tile must be part of a word");
            return false;
           }
           if (snapshot.squares[r][c] === ".") {
             // This square was played on this turn
             if (r < lowrow) { lowrow = r;}
             if (r > highrow) { highrow = r;}
             if (c < lowcol) { lowcol = c;}
             if (c > highcol) { highcol = c;}
           }
        }        
      }
    }
    if (lowrow === 15) {
      window.alert("You didn't play any tiles");
      return false;
    }
    if (lowrow !== highrow && lowcol !== highcol) {
      window.alert("Tiles played must be in a straight line");
      return false;
    }
    let playthru = false;
    let hookmade = false;
    for (var r = lowrow; r <= highrow; ++r) {
      for (var c = lowcol; c <= highcol; ++c) {
        if (squares[r][c] === ".") {
          window.alert("There is a gap in your word");
          return false;
        }
        if (snapshot.squares[r][c] !== ".") {
          playthru = true;
        }
        if (lowrow === highrow && r > 0 && squares[r-1][c] !== ".") { hookmade = true; }
        if (lowrow === highrow && r < 14 && squares[r+1][c] !== ".") { hookmade = true; }
        if (lowcol === highcol && c > 0 && squares[r][c-1] !== ".") { hookmade = true; }
        if (lowcol === highcol && c < 14 && squares[r][c+1] !== ".") { hookmade = true; }
      }
    }
    // Check play to or from a tile (play through but not either side)
    if (lowrow === highrow && lowcol > 0 && snapshot.squares[lowrow][lowcol-1] !== ".") { playthru = true; }
    if (lowrow === highrow && highcol < 14 && snapshot.squares[lowrow][highcol+1] !== ".") { playthru = true; }
    if (lowcol === highcol && lowrow > 0 && snapshot.squares[lowrow-1][lowcol] !== ".") { playthru = true; }
    if (lowcol === highcol && highrow < 14 && snapshot.squares[highrow+1][lowcol] !== ".") { playthru = true; }
    if (!playthru && !hookmade && snapshot.squares[7][7] !== ".") {
      window.alert("Words must be connected");
      return false;
    }
    return true;
  }

  const recallTiles = () => {
    setSquares([...snapshot.squares]);
    setUsedby([...snapshot.usedby]);
    setPtiles([...snapshot.ptiles]);
    setGtiles([...snapshot.gtiles]);
    setSelection(-1);
    setCurrentcoords([]);
  };

  const prisonerPass = () => {
    recallTiles(); // In case they put some tiles on the board before clicking Pass
    let newWhoseturn = passed ? "X" : "G"; // If both players pass then end the game by using "X"
    setWhoseturn(newWhoseturn);
    setPassed(true);
    client.send(
      JSON.stringify({
        gameid: gameid, // the id for the game
        type: "pb", // prisonbreak
        func: "ept", // end prisoners turn
        squares: snapshot.squares, // revert to start of turn squares
        usedby: snapshot.usedby, // revert to start of turn used by
        ptiles: snapshot.ptiles, // prisoners rack did not change
        tiles: tiles, // tile pool did not change
        whoseturn: newWhoseturn, // may have ended the game
        passed: true,
        rescues: rescues // no rescues on a pass
      })
    );
  }

  const guardsPass = () => {
    recallTiles(); // In case they put some tiles on the board before clicking Pass
    let newWhoseturn = passed ? "X" : "P"; // If both players pass then end the game by using "X"
    setWhoseturn(newWhoseturn);
    setPassed(true);
    client.send(
      JSON.stringify({
        gameid: gameid, // the id for the game
        type: "pb", // prisonbreak
        func: "egt", // end guards turn
        squares: snapshot.squares, // revert to start of turn squares
        usedby: snapshot.usedby, // revert to start of turn used by
        gtiles: snapshot.gtiles, // guards rack did not change
        tiles: tiles, // tile pool did not change
        whoseturn: newWhoseturn, // may have ended the game
        passed: true
      })
    );
  }

  const requestGameData = () => {
    client.send(
      JSON.stringify({
        gameid: gameid, // the id for the game
        type: "pb", // prisonbreak
        func: "requestgamedata", // request game data
        requestor: prisonersOrGuards
      })
    )
  }

  const handleKeyDown = (event) => {
    event.preventDefault();
    if (prisonersOrGuards !== whoseturn) {return;}
    if (event.key === "Enter") {
      whoseturn === "P" ? endPrisonersTurn() : endGuardsTurn();
      return;
    }
    let lettertest = /^[A-Za-z\?]$/; // single letter or question mark key pressed
    if (event.key.match(lettertest)) {
      let letter = event.key.toUpperCase();
      let rack = whoseturn === "P" ? ptiles : gtiles;
      let newSelection = rack.indexOf(letter);
      if (newSelection === -1) {
        newSelection = rack.indexOf("?"); // Use the blank if they have one
      }
      if (newSelection > -1) { // Pressed letter is on the rack
        let row = rcd[0];
        let col = rcd[1];
        let dir = rcd[2];
        if (row >-1 && col > -1 && dir !== "") { // row, col, dir are set to accept keystroke
          // Need to figure out next sqaure to auto-place a tile
          let newRcd = rcd;
          if (dir === "r") { // playing rightwards
            let newc = -1;
            for (var c = col + 1; c < 15 && newc === -1; c++) {
              if (squares[row][c] === ".") {newc = c;}
            }
            if (newc === -1) {
              newRcd = [-1,-1,""];
            } else {
              newRcd = [row, newc, "r"];
            }
            handleBoardSquareClick(row,col,newSelection,newRcd);
            return;
          }
          if (dir === "d") { // playing downwards
            let newr = -1;
            for (var r = row + 1; r < 15 && newr === -1; r++) {
              if (squares[r][col] === ".") {newr = r;}
            }
            if (newr === -1) {
              newRcd = [-1,-1,""];
            } else {
              newRcd = [newr, col, "d"];
            }
            handleBoardSquareClick(row,col,newSelection,newRcd);
            return;
          }
        }
      }
      return;
    }
    if (event.key === "Backspace" && currentcoords.length > 0) {
      // Same as clicking on a played-this-move tile in terms of returning the tile to the rack
      // However we also want to set up rcd so they can press the key they meant and continue
      let coord = currentcoords[currentcoords.length - 1]; // tile to return to rack
      let newCurrentcoords = [...currentcoords];
      let newPtiles = [...ptiles];
      let newGtiles = [...gtiles];
      let newUsedby = [...usedby];
      let newSquares = [...squares];
      let newRcd = [-1,-1,""];
      let newSelection = selection;
      newCurrentcoords.splice(currentcoords.length-1,1);
      let row = parseInt(coord.split("-")[0]);
      let col = parseInt(coord.split("-")[1]);
      let returnedTile = squares[row][col];
      if (whoseturn === "P") {
        newPtiles.push(returnedTile);
        newSelection = newPtiles.length-1;
      } else {
        newGtiles.push(returnedTile);
        newSelection = newGtiles.length-1;
      }
      newUsedby[row][col] = "";
      newSquares[row][col] = ".";
      let dir = rcd[2];
      if (dir !== "") {
        // direction was set so keep it
        newRcd = [row,col,dir];
        if (currentcoords.length === 1) {
          newSelection = -1; // if they backspace all the letters off leave rack tile unselected
        }
      }
      setCurrentcoords(newCurrentcoords);
      setGtiles(newGtiles);
      setPtiles(newPtiles);
      setSquares(newSquares);
      setUsedby(newUsedby);
      setRcd(newRcd);
      setSelection(newSelection);
    }
  }
  return (
    <div className="container-fluid prisonbreak" onKeyDownCapture={handleKeyDown}>
      <div className="row">
        <div className="col-1 pbGameid">
          Game id: {gameid}
        </div>
        <div className="col-10 pbtitle">
          Prison Break
          <span className="material-icons">run_circle</span>
        </div>
        <div className="col-1 pbhomelink">
          <Link href={"../../"}>
            <a><i className="material-icons" data-toggle="tooltip" title="Home">home</i></a>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col pbPrisoners">
          <Prisoners
            ptiles={ptiles}
            whoseturn={whoseturn}
            selection={selection}
            onClick={(ti) => handlePrisonerTileClick(ti)}
            onClickFinishTurn={() => endPrisonersTurn()}
            onClickTileRecall={() => recallTiles()}
            onClickTileExchange={() => swapPrisonersTiles()}
            onClickPassPlay={() => prisonerPass()}
            rescues={rescues}
            prisonersOrGuards={prisonersOrGuards}
          />
        </div>
        <div className="col">
          <div className="row">
            {prisonersOrGuards === whoseturn ?
              <Board
                squares={squares}
                usedby={usedby}
                rcd={rcd}
                onClick={(ri, ci) => handleBoardSquareClick(ri, ci, -1,null)}
              />
              :
              <Board
                squares={squares}
                usedby={usedby}
                rcd={rcd}
                onClick={() => {}}
              />
            }
          </div>
          <div className="row pbUnderboard">
            {whoseturn === "X" ?
              <h1>Game Over!</h1>
            :
              <p>Two peanuts were walking down a back alley. One was a salted.</p>
            }
          </div>
        </div>
        <div className="col pbGuards">
          <Guards
            gtiles={gtiles}
            whoseturn={whoseturn}
            selection={selection}
            onClick={(ti) => handleGuardTileClick(ti)}
            onClickFinishTurn={() => endGuardsTurn()}
            onClickTileRecall={() => recallTiles()}
            onClickTileExchange={() => swapGuardsTiles()}
            onClickPassPlay={() => guardsPass()}
            prisonersOrGuards={prisonersOrGuards}
          />
        </div>
        <div className="col">
          <ShowUnseenTiles tiles={tiles} othertiles={prisonersOrGuards === "P" ? gtiles : ptiles}/>
        </div>
      </div>
    </div>
  );
};

const ShowUnseenTiles = (props) => { // tiles = tiles in bag, othertiles = tiles on other players rack
  let unseenTiles = [...props.tiles, ...props.othertiles];
  unseenTiles.sort();
  if (unseenTiles[0] === "?") {
      unseenTiles.splice(0,1)
      unseenTiles.push("?")
  }
  if (unseenTiles[0] === "?") {
      unseenTiles.splice(0,1)
      unseenTiles.push("?")
  }
  return (
    <div className="pbTilepool">
      <span className="pbTilepoolTitle">TILES</span>
      <div className="pbTilepoolDivider"></div>
      {unseenTiles.map((t, ti) => (
        <span key={`tile${ti}`}>
          {ti > 0 && t !== unseenTiles[ti - 1] ? (
            <div className="pbTilepoolDivider"></div>
          ) : (
            <></>
          )}
          <span className="pbTilepoolTile">{t}</span>
        </span>
      ))}
    </div>
  );
};

const RackTile = (props) => {
  return (
    <span className={props.tileclass} onClick={props.onClick}>
      {props.tilevalue}
    </span>
  );
};

const FinishTurnButton = (props) => {
  return (
    <button className="pbActionButton" onClick={props.onClick}>
      <span className="pbActionButtonText"><i className="material-icons">check</i>&nbsp;Finish Turn</span>
    </button>
  );
};

const TileRecallButton = (props) => {
  return (
    <button className="pbActionButton" onClick={props.onClick}>
      <span className="pbActionButtonText"><i className="material-icons">undo</i>&nbsp;Recall Tiles</span>
    </button>
  );
};

const TileExchangeButton = (props) => {
  return (
    <button className="pbActionButton" onClick={props.onClick}>
      <span className="pbActionButtonText"><i className="material-icons">cached</i>&nbsp;Swap Tiles</span>
    </button>
  );
};

const PassPlayButton = (props) => {
  return (
    <button className="pbActionButton" onClick={props.onClick}>
      <span className="pbActionButtonText"><i className="material-icons">not_interested</i>&nbsp;Pass Turn</span>
    </button>
  );
};

const Prisoners = (props) => {
  const renderTile = renderPlayerTile(props);

  const renderFreedPrisoners = (count) => {
    let dumb = Array(count).fill("nonsense");
    return dumb.map((value, index) => (
      <span key={value + String(index)} data-toggle="tooltip" title="I'm free! I'm free!">
        <img
          src="/breakfree.png"
          alt="I'm free! I'm free!"
          width="100"
          height="100"
        />
      </span>
    ));
  };

  return (
    <div>
      <p className="pbPlayerTitle"><i className="material-icons">run_circle run_circle run_circle</i>&nbsp;PRISONERS&nbsp;<i className="material-icons">run_circle run_circle run_circle</i></p>
      <p className="pbTilerack">
        {props.ptiles.map((t, ti) =>
          renderTile(
            props.whoseturn === "P" && props.selection === ti
              ? "pbTileOnRackSelectedP"
              : "pbTileOnRackP",
            ti,
            props.prisonersOrGuards === "P" ? t : "*"
          )
        )}
      </p>
      {props.whoseturn === "P" && props.prisonersOrGuards === "P" ? 
        showActionButtons(props)
      : <></>
      }
      <p>
        Rescues made: {props.rescues}
        <br></br>
        {renderFreedPrisoners(props.rescues)}
      </p>
    </div>
  );
};

const Guards = (props) => {
  const renderTile = renderPlayerTile(props);

  return (
    <div>
      <p className="pbPlayerTitle"><i className="material-icons">security security security</i>&nbsp;GUARDS&nbsp;<i className="material-icons">security security security</i></p>
      <p className="pbTilerack">
        {props.gtiles.map((t, ti) =>
          renderTile(
            props.whoseturn === "G" && props.selection === ti
              ? "pbTileOnRackSelectedG"
              : "pbTileOnRackG",
            ti,
            props.prisonersOrGuards === "G" ? t : "*"
          )
        )}
      </p>
      {props.whoseturn === "G" && props.prisonersOrGuards === "G" ? 
        showActionButtons(props)
      : <></>
      }
    </div>
  );
};

function renderPlayerTile(props) {
  return (tileclass, tileindex, tilevalue) => {
    return (
      tilevalue !== "*" ? // this tile is for this player, allow click
        <RackTile
          key={tileclass + String(tileindex)}
          tileclass={tileclass}
          tilevalue={tilevalue}
          onClick={() => props.onClick(tileindex)} />
        : // this tile is for opponent, do not allow click
        <RackTile
          key={tileclass + String(tileindex)}
          tileclass={tileclass}
          tilevalue={tilevalue}
          onClick={() => window.alert("No peeking!")} />
    );
  };
}

function showActionButtons(props) {
  return <div className="pbActionButtonDiv">
    <p>
      <FinishTurnButton onClick={() => props.onClickFinishTurn()} />
    </p>
    <p>
      <TileRecallButton onClick={() => props.onClickTileRecall()} />
    </p>
    <p>
      <TileExchangeButton onClick={() => props.onClickTileExchange()} />
    </p>
    <p>
      <PassPlayButton onClick={() => props.onClickPassPlay()} />
    </p>
  </div>;
}

