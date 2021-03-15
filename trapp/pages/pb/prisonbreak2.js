import React, { useState, useEffect } from "react";
import Link from "next/link";
import CustomSocket from "../../ws";
const numrows = 15;
const middlerow = 7;
const lastrow = numrows - 1;
const numcols = 15;
const middlecol = 7;
const lastcol = numcols - 1;
const racklen = 7;
const movewaittime = 20000; // when waiting for opponent ping every this many milliseconds

const escapehatches = [
  "0-0",
  "0-" + middlecol,
  "0-" + lastcol,
  middlerow + "-0",
  middlerow + "-" + lastcol,
  lastrow + "-0",
  lastrow + "-" + middlecol,
  lastrow + "-" + lastcol
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
const initialsquares = Array(numrows).fill(Array(numcols).fill("."));
const initialusedby = Array(numrows).fill(Array(numcols).fill(""));

export default function PrisonBreak() {
  const [isrejoin, setIsrejoin] = useState(false) // Used when player loses connection and rejoins
  const [gameid, setGameid] = useState('')
  const [prisonersOrGuards, setPrisonersOrGuards] = useState('')
  const [gameMessages, setGameMessages] = useState([]) // Messages for while playing the game
  const [lobbyMessages, setLobbyMessages] = useState([]) // Messages for while in the lobby
  let host = process.env.NODE_ENV === 'production' ? 'wss://tilerunner.herokuapp.com' : 'ws://localhost:5000';
  const acceptMessage = (message) => {
    // React is hard to understand. If I reference prisonersOrGuards here it will always be the initial value.
    // Hence I cannot selectively set lobby or game messages based on whether prisonersOrGuards is set yet.
    // However, setting the arrays below does somehow seem to get the message across.
    // Perhaps the arrays are always empty here and it only ever adds a value? I am confused about this.
    setLobbyMessages((curr) => [...curr, message.data])
    setGameMessages((curr) => [...curr, message.data])
  }
  const removeLobbyMessage = (messageData) => {
    let i = lobbyMessages.indexOf(messageData);
    let w = [...lobbyMessages];
    w.splice(i,1);
    setLobbyMessages(w);
  }
  const removeGameMessage = (messageData) => {
    let i = gameMessages.indexOf(messageData);
    let w = [...gameMessages];
    w.splice(i,1);
    setGameMessages(w);
  }
  const [client, setClient] = useState(new CustomSocket(host, acceptMessage));
  useEffect(() => (
    client.connect()
  ),[]);
  return (
    prisonersOrGuards === '' ?
      <Lobby
        setIsrejoin={setIsrejoin}
        lobbyMessages={lobbyMessages}
        removeLobbyMessage={removeLobbyMessage}
        // client={client}
        gameid={gameid}
        setGameid={setGameid}
        setPrisonersOrGuards={setPrisonersOrGuards}
      />
    :
      <Game
        prisonersOrGuards={prisonersOrGuards}
        gameid={gameid}
        gameMessages={gameMessages}
        client={client}
        removeGameMessage={removeGameMessage}
      />
  )
}

const Lobby = ({setIsrejoin, lobbyMessages, removeLobbyMessage, gameid, setGameid, setPrisonersOrGuards}) => {
  const [gamelist, setGamelist] = useState([]) // Game ids from other clients
  const [gamelistP, setGamelistP] = useState([]) // Prisoners game ids from other clients
  const [gamelistG, setGamelistG] = useState([]) // Guards game ids from other clients
  const [gamestatuslist, setGamestatuslist] = useState([]) // List of games statuses

  useEffect(() => {
    let msg = lobbyMessages[0];
    if (msg) processLobbyMessage(msg);
        
  },[lobbyMessages])

  function processLobbyMessage(message) {
    let messageData = JSON.parse(message);
    let sendergameid = messageData.gameid;
    let senderPG = messageData.sender;
    let newGamelist = [...gamelist];
    let newGamelistP = [...gamelistP];
    let newGamelistG = [...gamelistG];
    let newGamestatuslist = [...gamestatuslist];
    let anyUpdates = false;
    if (sendergameid && sendergameid.length > 0) {
      try {
        let wt = messageData.whoseturn;
        if (wt) {
          let foundgame = false;
          let gamestatus = "Unknown";
          if (wt === "X") {
            gamestatus = "Game over";
          } else if (wt === "P") {
            gamestatus = "Prisoners turn";
          } else if (wt === "G") {
            gamestatus = "Guards turn";
          }
          for(var i = 0; i < newGamestatuslist.length; ++i) {
            let gs = newGamestatuslist[i];
            if (gs.gameid === sendergameid) {
              foundgame = true;
              if (gs.status !== gamestatus) {
                anyUpdates = true;
                newGamestatuslist[i].status = gamestatus;
              }
            }
          }
          if (!foundgame) {
            newGamestatuslist = [...newGamestatuslist, {gameid: sendergameid, status: gamestatus}];
          }
        }
        if (newGamelist.indexOf(sendergameid) < 0) {
          anyUpdates = true;
          newGamelist = [...newGamelist, sendergameid];
        }
        if (senderPG === "P" && newGamelistP.indexOf(sendergameid) < 0) {
          anyUpdates = true;
          newGamelistP = [...newGamelistP, sendergameid];
        } else if (senderPG === "G" && newGamelistG.indexOf(sendergameid) < 0) {
          anyUpdates = true;
          newGamelistG = [...newGamelistG, sendergameid];
        }
      } catch {
        window.alert("Error handling game id arrays");
      }
      if (anyUpdates) {
        setGamelist(newGamelist);
        setGamelistP(newGamelistP);
        setGamelistG(newGamelistG);
        setGamestatuslist(newGamestatuslist);
      }
    }
    removeLobbyMessage(message);
  }
  function getGameStatus(gid) {
    for (var i = 0; i < gamestatuslist.length; ++i) {
      let gs = gamestatuslist[i];
      if (gs.gameid === gid) {
        return gs.status;
      }
    }
    return "Unknown";
  }
  return <div className="container-fluid">
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
        <h3>If you lost connection, find and click the "Reconnect" button for your game id and player type.</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-11 offset-1">
        <h2>Game id:
          <input
            name="gameid"
            value={gameid}
            onChange={(e) => {
              setGameid(e.target.value);
            } } />
          <label>&nbsp;</label>
          <button id="startgame" className="pbLobbyActionButton"
            onClick={function () {
              if (gameid.length > 0) {
                if (gamelistP.indexOf(gameid) > -1) {
                  window.alert("Prisoners already playing that game");
                } else {
                  setPrisonersOrGuards('P');
                }
              }
            } }
          >
            Start Game
          </button>
          <label>&nbsp;</label>
          <button id="joingame" className="pbLobbyActionButton"
            onClick={function () {
              if (gameid.length > 0) {
                if (gamelistG.indexOf(gameid) > -1) {
                  window.alert("Guards already playing that game");
                } else {
                  setPrisonersOrGuards('G');
                }
              }
            } }
          >
            Join Game
          </button>
        </h2>
      </div>
    </div>
    <div className="row">
      <div className="col offset-1">
        <h1>Games in progress:</h1>
      </div>
    </div>
    <div className="row">
      <div className="col offset-2">
        <table>
          <thead>
            <tr className="pbLobbyGamesHeader">
              <th className="pbLobbyGamesHeaderCol">Game ID<p>Click to select</p></th>
              <th className="pbLobbyGamesHeaderCol">Prisoners<p>Playing?</p></th>
              <th className="pbLobbyGamesHeaderCol">Available<p>Action</p></th>
              <th className="pbLobbyGamesHeaderCol">Guards<p>Playing?</p></th>
              <th className="pbLobbyGamesHeaderCol">Available<p>Action</p></th>
              <th className="pbLobbyGamesHeaderCol">Game status</th>
            </tr>
          </thead>
          <tbody>
            {gamelist.map((value, index) => (
              <tr key={`OtherGame${index}`} className="pbGamesInProgressRow">
                <td className="pbLobbyGameid" onClick={function(){setGameid(value)}}>{value}</td>
                <td className="pbLobbyPlayerIndicator"><span className="material-icons">{gamelistP.indexOf(value) > -1 ? "check_circle" : "cancel"}</span></td>
                {getGameStatus(value) === "Game over" ? <td className="pbLobbyActionNone">None</td> : gamelistP.indexOf(value) > -1 ?
                  <td id={`PrisonersRejoin${index}`}>
                    <button className="pbLobbyActionButton"
                      onClick={function () {
                        setIsrejoin(true);
                        setGameid(value);
                        setPrisonersOrGuards('P');
                      } }
                    >
                      Reconnect
                    </button>
                  </td>
                :
                  <td id={`PrisonersStart${index}`}>
                    <button className="pbLobbyActionButton"
                      onClick={function () {
                        setGameid(value);
                        setPrisonersOrGuards('P');
                      } }
                    >
                      Start Game
                    </button>
                  </td>
                }
                <td className="pbLobbyPlayerIndicator"><span className="material-icons">{gamelistG.indexOf(value) > -1 ? "check_circle" : "cancel"}</span></td>
                {getGameStatus(value) === "Game over" ? <td className="pbLobbyActionNone">None</td> : gamelistG.indexOf(value) > -1 ?
                  <td id={`GuardsRejoin${index}`}>
                    <button className="pbLobbyActionButton"
                      onClick={function () {
                        setIsrejoin(true);
                        setGameid(value);
                        setPrisonersOrGuards('G');
                      } }
                    >
                      Reconnect
                    </button>
                  </td>
                :
                  <td id={`GuardsJoin${index}`}>
                    <button className="pbLobbyActionButton"
                      onClick={function () {
                        setGameid(value);
                        setPrisonersOrGuards('G');
                      } }
                    >
                      Join Game
                    </button>
                  </td>
                }
                <td className="pbLobbyGameStatus">
                  {getGameStatus(value)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>;
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
      : props.ri === middlerow && props.ci === middlecol
      ? "pbSquareCenterSquare"
      : (props.ri === 0 || props.ri === middlerow || props.ri === lastrow) &&
        (props.ci === 0 || props.ci === middlecol || props.ci === lastcol)
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

const Game = ({isrejoin, prisonersOrGuards, gameid, gameMessages, client, removeGameMessage}) => {
  const [tiles, setTiles] = useState([...initialtiles]);
  const [ptiles, setPtiles] = useState([]);
  const [gtiles, setGtiles] = useState([]);
  const [squares, setSquares] = useState([...initialsquares]);
  const [usedby, setUsedby] = useState([...initialusedby]);
  const [selection, setSelection] = useState(-1); // relative to rack of player making a play
  const [whoseturn, setWhoseturn] = useState("P"); // game starts with prisoners play
  const [currentcoords, setCurrentcoords] = useState([]);
  const [rescues, setRescues] = useState(0);
  const [rcd, setRcd] = useState([-1,-1,""]);
  const [passed, setPassed] = useState(false); // true when opponent just passed; if both pass the game ends
  const [snapshot, setSnapshot] = useState({
    squares: [...initialsquares],
    usedby: [...initialusedby],
    ptiles: [],
    gtiles: [],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // If it is not my turn && the game has not ended
      if (prisonersOrGuards !== whoseturn && whoseturn !== "X") {
        // I am waiting for opponent move to come through but sometimes it gets missed (no idea why)
        console.log("Interval: prisonersOrGuards=" + prisonersOrGuards + " whoseturn=" + whoseturn + " at " + Date().toLocaleString());
        requestGameData(); // Send a request for game data in case opponent moved and we missed the update
      }
    }, movewaittime); // this many milliseconds between above code block executions
    return () => clearInterval(interval);
  }, [whoseturn]); // want up to date value of whoseturn to decide whether to ask for an update

  useEffect(() => { // This code executes first time Game is used only
    if (!isrejoin && prisonersOrGuards === "P") { // Prisoner is starting the game so pick racks
      let tempPTiles = [];
      let tempGTiles = [];
      let tempTiles = [...initialtiles];
      while (tempPTiles.length < racklen) {
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
        squares: [...initialsquares],
        usedby: [...initialusedby],
        ptiles: [...tempPTiles],
        gtiles: [...tempGTiles]    
      });
    }
    else
    {
      // Prisoner rejoin or guard join or guard rejoin
      try {
        client.send(
          JSON.stringify({
            gameid: gameid, // the id for the game
            type: "pb", // prisonbreak
            func: "requestgamedata", // request game data
            sender: prisonersOrGuards
        }));
      }
      catch {}
    }
  }, []);
  useEffect(() => {
    let msg = gameMessages[0];
    if (msg) processGameMessage(msg);
        
  },[gameMessages])

  function processGameMessage(message) {
    let messageData = JSON.parse(message);
    console.log("processGameMessage type=" + messageData.type + ", func=" + messageData.func);
    console.log(messageData.gameid + " vs " + gameid);
    console.log(messageData.sender + " vs " + prisonersOrGuards);
    if (messageData.type === "announce") {
      client.send(
        JSON.stringify({
          type: "pb",
          func: "hello",
          sender: prisonersOrGuards,
          gameid: gameid,
          whoseturn: whoseturn
        })
      );
    }
    else if (messageData.gameid === gameid && messageData.type === "pb") { // This instance of a prison break game
      if (messageData.func === "requestgamedata" && messageData.sender !== prisonersOrGuards) { // Opponent requested game info
        client.send(
          JSON.stringify({
            gameid: gameid, // the id for the game
            type: "pb", // prisonbreak
            func: "providegamedata", // provide game data
            sender: prisonersOrGuards,
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
    removeGameMessage(message);
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
    while (newPtiles.length < racklen && newTiles.length > 0) {
      let rand = Math.floor(Math.random() * newTiles.length);
      newPtiles.push(newTiles[rand]);
      newTiles.splice(rand, 1);
    }
    newPtiles.sort();
    let newWhoseturn = newPtiles.length > 0 ? "G" : "X"; // X = game over
    if (usedby[0][0] !== "" && usedby[0][middlecol] !== "" && usedby[0][lastcol] !== "" && usedby[middlerow][0] !== "" && usedby[middlerow][lastcol] !== "" && usedby[lastrow][0] !== "" && usedby[lastrow][middlecol] !== "" && usedby[lastrow][lastcol] !== "") {
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
        sender: prisonersOrGuards,
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
    while (newGtiles.length < racklen && newTiles.length > 0) {
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
    if (usedby[0][0] !== "" && usedby[0][middlecol] !== "" && usedby[0][lastcol] !== "" && usedby[middlerow][0] !== "" && usedby[middlerow][lastcol] !== "" && usedby[lastrow][0] !== "" && usedby[lastrow][middlecol] !== "" && usedby[lastrow][lastcol] !== "") {
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
        sender: prisonersOrGuards,
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
    if (tiles.length < racklen) {
      window.alert("Need " + $racklen + " tiles in the bag to exchange")
      return;
    }
    let newPtiles = [];
    let newTiles = [...tiles];
    while (newPtiles.length < racklen && newTiles.length > 0) {
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
        sender: prisonersOrGuards,
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
    if (tiles.length < racklen) {
      window.alert("Need " + $racklen + " tiles in the bag to exchange")
      return;
    }
    let newGtiles = [];
    let newTiles = [...tiles];
    while (newGtiles.length < racklen && newTiles.length > 0) {
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
        sender: prisonersOrGuards,
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
    if (squares[middlerow][middlecol] === ".") {
      window.alert("First play must hit center square");
      return false;
    }
    let lowrow = numrows;
    let highrow = -1;
    let lowcol = numcols;
    let highcol = -1;
    for (var r=0; r < numrows; ++r) {
      for (var c=0; c < numcols; ++c) {
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
    if (lowrow === numrows) {
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
    if (!playthru && !hookmade && snapshot.squares[middlerow][middlecol] !== ".") {
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
        sender: prisonersOrGuards,
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
        sender: prisonersOrGuards,
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
        sender: prisonersOrGuards,
        func: "requestgamedata" // request game data
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
            for (var c = col + 1; c < numcols && newc === -1; c++) {
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
            for (var r = row + 1; r < numrows && newr === -1; r++) {
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

