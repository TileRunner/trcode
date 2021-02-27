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
    <div>
      <p>In the lobby</p>
      <label>Game id:&nbsp;</label>
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
      {wsmsgs.map( (msg, inx) => (
        <li key={inx}>{msg}</li>
      ))}
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
  const usedbyclass =
    props.squareusedby === "P"
      ? "pbSquareUsedByPrisoners"
      : "pbSquareUsedByGuards";
  const tdclass =
    props.c !== "."
      ? usedbyclass
      : props.ri === 7 && props.ci === 7
      ? "pbSquareCenterSquare"
      : (props.ri === 0 || props.ri === 7 || props.ri === 14) &&
        (props.ci === 0 || props.ci === 7 || props.ci === 14)
      ? "pbSquareEscapeHatch"
      : props.ri % 2 === props.ci % 2
      ? "pbSquare"
      : "pbSquare2";
  const tdvalue =
    props.c !== "."
      ? props.c
      : tdclass === "pbSquareCenterSquare"
      ? "✰"
      : tdclass === "pbSquareEscapeHatch"
      ? "💫"
      : props.ri % 2 === props.ci % 2
      ? "☹"//"⎔"
      : "ꐕ";//"✦";
  return (
    <button className={tdclass} onClick={props.onClick}>
      {tdvalue}
    </button>
);
};

const Board = ({ onClick, squares, usedby }) => {
  const renderSquare = (ri, ci, c, squareusedby) => {
    return (
      <td key={`Square${ri}-${ci}`}>
        <Square
          c={c}
          ci={ci}
          ri={ri}
          squareusedby={squareusedby}
          onClick={() => onClick(ri, ci)}
        />
      </td>
    );
  };
  const renderRow = (ri) => {
    return (
      <tr key={`BoardRow${ri}`} className="row pbRow">
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
        console.log("Sending ggd")
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
  const logMessageFromWS = (messageData) => {
    console.log("Message being received by " + prisonersOrGuards);
    console.log("func : " + messageData.func);
    console.log("ptiles : " + JSON.stringify(ptiles) + " -> " + messageData.ptiles);
    console.log("gtiles : " + JSON.stringify(gtiles) + " -> " + messageData.gtiles);
  }

  function processMessage(message) {
    let messageData = JSON.parse(message); // was message.data
    logMessageFromWS(messageData);
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
            rescues: rescues
          })
        );
      }
      if (messageData.func === "providegamedata" && messageData.sender !== prisonersOrGuards) { // opponent provided game data
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
      if (
        (whoseturn === "P" && newPtiles.length < 7) ||
        (whoseturn === "G" && newGtiles.length < 7)
      ) {
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
        gameid: gameid, // the id for the game
        type: "pb", // prisonbreak
        func: "ept", // end prisoners turn
        squares: squares, // this was being changed as the tiles were being played
        usedby: usedby, // this was being changed as the tiles were being played
        ptiles: newPtiles, // we picked new tiles for prisoners rack
        tiles: newTiles, // we picked new tiles so tile pool changed
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
        gameid: gameid, // the id for the game
        type: "pb", // prisonbreak
        func: "egt", // end guards turn
        squares: squares, // this was being changed as the tiles were being played
        usedby: usedby, // this was being changed as the tiles were being played
        gtiles: newGtiles, // we picked new tiles for guards rack
        tiles: newTiles // we picked new tiles so tile pool changed
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
    console.log("Exchange ptiles")
    console.log(snapshot.ptiles)
    console.log(ptiles)
    console.log(newPtiles)
    console.log(tiles)
    console.log(newTiles)
    setSquares([...snapshot.squares]);
    setUsedby([...snapshot.usedby]);
    setWhoseturn("G");
    setSelection(-1);
    setCurrentcoords([]);
    setPtiles(newPtiles);
    setTiles(newTiles);
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
        squares: snapshot.squares, // revert to start of turn squares
        usedby: snapshot.usedby, // revert to start of turn used by
        ptiles: newPtiles, // we picked new tiles for prisoners rack
        tiles: newTiles, // we picked new tiles so tile pool changed
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
        func: "egt", // end prisoners turn
        squares: snapshot.squares, // revert to start of turn squares
        usedby: snapshot.usedby, // revert to start of turn used by
        gtiles: newGtiles, // we picked new tiles for prisoners rack
        tiles: newTiles // we picked new tiles so tile pool changed
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

  const requestGameData = (playertype) => {
    client.send(
      JSON.stringify({
        gameid: gameid, // the id for the game
        type: "pb", // prisonbreak
        func: "requestgamedata", // request game data
        requestor: prisonersOrGuards
      })
    )
  }

  return (
    <div className="container-fluid prisonbreak">
      <div className="row">
        <div className="col-10 pbtitle">Prison Break</div>
        <div className="col-2 pbhomelink">
          <button id="requestGameData"
            data-toggle="tooltip" title="Sync with opponent"
            onClick={function() {
              requestGameData(prisonersOrGuards);
              }}
          >
            <i className="material-icons">sync</i>
          </button>
          <Link href={"../../"}>
            <a><i className="material-icons" data-toggle="tooltip" title="Home">home</i></a>
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
            onClickTileExchange={() => swapPrisonersTiles()}
            rescues={rescues}
            prisonersOrGuards={prisonersOrGuards}
          />
        </div>
        <div className="col-6" align="center">
          <Board
            squares={squares}
            usedby={usedby}
            onClick={(ri, ci) => handleBoardSquareClick(ri, ci)}
          />
        </div>
        <div className="col-2 pbGuards">
          <Guards
            gtiles={gtiles}
            whoseturn={whoseturn}
            selection={selection}
            onClick={(ti) => handleGuardTileClick(ti)}
            onClickFinishTurn={() => endGuardsTurn()}
            onClickTileRecall={() => recallTiles()}
            onClickTileExchange={() => swapGuardsTiles()}
            prisonersOrGuards={prisonersOrGuards}
          />
        </div>
        <div className="col-2">
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
      <h3>TILES</h3>
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
    <button className="pbFinishTurn" onClick={props.onClick}>
      <i className="material-icons">check</i>Finish Turn
    </button>
  );
};

const TileRecallButton = (props) => {
  return (
    <button className="pbRecallTiles" onClick={props.onClick}>
      <i className="material-icons">undo</i>Recall Tiles
    </button>
  );
};

const TileExchangeButton = (props) => {
  return (
    <button className="pbExchangeTiles" onClick={props.onClick}>
      <i className="material-icons">sentiment_dissatisfied</i>Exchange Tiles
    </button>
  );
};

const Prisoners = (props) => {
  const renderTile = (tileclass, tileindex, tilevalue) => {
    return (
      props.prisonersOrGuards === "P" ?
      <RackTile
        key={tileclass + String(tileindex)}
        tileclass={tileclass}
        tilevalue={tilevalue}
        onClick={() => props.onClick(tileindex)}
      />
      :
      <RackTile
        key={tileclass + String(tileindex)}
        tileclass={tileclass}
        tilevalue={tilevalue}
        onClick={() => window.alert("No peeking!")}
      />
    );
  };

  const renderFinishTurn = () => {
    return <p><FinishTurnButton onClick={() => props.onClickFinishTurn()} /></p>;
  };

  const renderRecallTiles = () => {
    return <p><TileRecallButton onClick={() => props.onClickTileRecall()} /></p>;
  };

  const renderExchangeTiles = () => {
    return <p><TileExchangeButton onClick={() => props.onClickTileExchange()} /></p>;
  };

  const renderFreedPrisoners = (count) => {
    let dumb = Array(count).fill("nonsense");
    return dumb.map((value, index) => (
      <span key={value + String(index)}>
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
      <p>PRISONERS</p>
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
      {props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderFinishTurn() : <></>}
      {props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderRecallTiles() : <></>}
      {props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderExchangeTiles() : <></>}
      <p>
        Rescues made: {props.rescues}
        <br></br>
        {renderFreedPrisoners(props.rescues)}
      </p>
    </div>
  );
};

const Guards = (props) => {
  const renderTile = (tileclass, tileindex, tilevalue) => {
    return (
      props.prisonersOrGuards === "G" ?
      <RackTile
        key={tileclass + String(tileindex)}
        tileclass={tileclass}
        tilevalue={tilevalue}
        onClick={() => props.onClick(tileindex)}
      />
      :
      <RackTile
        key={tileclass + String(tileindex)}
        tileclass={tileclass}
        tilevalue={tilevalue}
        onClick={() => window.alert("No peeking!")}
      />
    );
  };

  const renderFinishTurn = () => {
    return <FinishTurnButton onClick={() => props.onClickFinishTurn()} />;
  };

  const renderRecallTiles = () => {
    return <TileRecallButton onClick={() => props.onClickTileRecall()} />;
  };

  const renderExchangeTiles = () => {
    return <TileExchangeButton onClick={() => props.onClickTileExchange()} />;
  };

  return (
    <div>
      <p>GUARDS</p>
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
      {props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderFinishTurn() : <></>}
      {props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderRecallTiles() : <></>}
      {props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderExchangeTiles() : <></>}
    </div>
  );
};
