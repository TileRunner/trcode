import React, { useState, useEffect } from "react";
import Link from "next/link";
import CustomSocket from "../../ws";
const movewaittime = 20000; // when waiting for opponent ping every this many milliseconds
const joke = 'Escapee: "I' + "'m free! I'm free!" + '". Little kid: "I'+ "'m four! I'm four!" + '"';
const joke2 = "Two peanuts were walking down a back alley. One was a salted.";
const jokes = [joke, joke2];
const initialtiles4 = [
  "A",  "A",  "A",
  "B",
  "C",
  "D",
  "E",  "E",  "E",  "E",
  "F",
  "G",
  "H",
  "I",  "I",  "I",
  "J",
  "K",
  "L",
  "M",
  "N",  "N",
  "O",  "O",  "O",
  "P",
  "Q",
  "R",  "R",
  "S",
  "T",  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "?",  "?",
]; // initial tile pool for 4 letter rack mode
const initialtiles5 = [
  "A",  "A",  "A",  "A",  "A",
  "B",
  "C",
  "D",  "D",
  "E",  "E",  "E",  "E",  "E",  "E",
  "F",
  "G",
  "H",
  "I",  "I",  "I",  "I",  "I",
  "J",
  "K",
  "L",  "L",
  "M",
  "N",  "N",  "N",
  "O",  "O",  "O",  "O",
  "P",
  "Q",
  "R",  "R",  "R",
  "S",  "S",
  "T",  "T",  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "?",  "?",
]; // initial tile pool for 5 letter rack mode
const initialtiles6 = [
  "A",  "A",  "A",  "A",  "A",  "A",  "A",
  "B",  "B",
  "C",  "C",
  "D",  "D",  "D",
  "E",  "E",  "E",  "E",  "E",  "E",  "E",  "E",  "E",
  "F",
  "G",  "G",
  "H",  "H",
  "I",  "I",  "I",  "I",  "I",  "I",  "I",
  "J",
  "K",
  "L",  "L",  "L",
  "M",  "M",
  "N",  "N",  "N",  "N",
  "O",  "O",  "O",  "O",  "O",  "O",
  "P",  "P",
  "Q",
  "R",  "R",  "R",  "R",  "R",
  "S",  "S",  "S",
  "T",  "T",  "T",  "T",
  "U",  "U",  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "?",  "?",
]; // initial tile pool for 6 letter rack mode
const initialtiles7 = [
  "A",  "A",  "A",  "A",  "A",  "A",  "A",  "A",  "A",
  "B",  "B",
  "C",  "C",
  "D",  "D",  "D",  "D",
  "E",  "E",  "E",  "E",  "E",  "E",  "E",  "E",  "E",  "E",  "E",  "E",
  "F",  "F",
  "G",  "G",  "G",
  "H",  "H",
  "I",  "I",  "I",  "I",  "I",  "I",  "I",  "I",  "I",
  "J",
  "K",
  "L",  "L",  "L",  "L",
  "M",  "M",
  "N",  "N",  "N",  "N",  "N",  "N",
  "O",  "O",  "O",  "O",  "O",  "O",  "O",  "O",
  "P",  "P",
  "Q",
  "R",  "R",  "R",  "R",  "R",  "R",
  "S",  "S",  "S",  "S",
  "T",  "T",  "T",  "T",  "T",  "T",
  "U",  "U",  "U",  "U",
  "V",  "V",
  "W",  "W",
  "X",
  "Y",  "Y",
  "Z",
  "?",  "?",
]; // initial tile pool for 7 letter rack mode
const squareunused = ".";
const usedbynoone = "";
const nodirection = "";
const availableActionNone = 0;
const availableActionStart = 1;
const availableActionJoin = 2;
const availableActionReconnect = 3;

export default function PrisonBreak() {
  const [isrejoin, setIsrejoin] = useState(false) // Used when player loses connection and rejoins
  const [gameid, setGameid] = useState('')
  const [nickname, setNickname] = useState('')
  const [prisonersOrGuards, setPrisonersOrGuards] = useState('')
  const [wsmessage, setWsmessage] = useState('') // Latest messages from the websocket
  const [upsidedownMode, setUpsidedownMode] = useState(false);
  const [racksize, setRacksize] = useState(4); // Default to 4 letter racks
  let host = process.env.NODE_ENV === 'production' ? 'wss://tilerunner.herokuapp.com' : 'ws://localhost:5000';
  const acceptMessage = (message) => {
    // React is hard to understand. If I reference prisonersOrGuards here it will always be the initial value.
    setWsmessage(message.data)
  }
  const [client] = useState(new CustomSocket(host, acceptMessage));
  useEffect(() => (
    client.connect()
  ),[]);
  return (
    prisonersOrGuards === '' ?
      <Lobby
        setIsrejoin={setIsrejoin}
        wsmessage={wsmessage}
        // client={client}
        gameid={gameid}
        setGameid={setGameid}
        nickname={nickname}
        setNickname={setNickname}
        setPrisonersOrGuards={setPrisonersOrGuards}
        upsidedownMode={upsidedownMode}
        setUpsidedownMode={setUpsidedownMode}
        racksize={racksize}
        setRacksize={setRacksize}
      />
    :
      <Game
        isrejoin={isrejoin}
        prisonersOrGuards={prisonersOrGuards}
        gameid={gameid}
        nickname={nickname}
        wsmessage={wsmessage}
        client={client}
        upsidedownMode={upsidedownMode}
        racksize={racksize}
      />
  )
}

const Lobby = ({setIsrejoin, wsmessage, gameid, setGameid, nickname, setNickname, setPrisonersOrGuards
  , upsidedownMode, setUpsidedownMode // Option for upside down mode
  , racksize, setRacksize // Option for rack size
  }) => {
  const [gamelist, setGamelist] = useState([]) // Game info by game id

  useEffect(() => {
    let msg = wsmessage;
    if (msg !== '') processLobbyMessage(msg);
  },[wsmessage])

  function processLobbyMessage(message) {
    try {
      let messageData = JSON.parse(message);
      let sendergameid = messageData.gameid;
      let sendernickname = messageData.nickname;
      let wt = messageData.whoseturn;
      let rs = messageData.racksize;
      if (sendergameid && sendergameid.length > 0 && rs && wt && wt.length > 0) {
        let anyUpdates = false;
        let senderPG = messageData.sender;
        let newGamelist = [...gamelist];
        let gi = getGamelistIndex(sendergameid);
        let newPlayingP = senderPG === "P" ? true : gi > -1 ? gamelist[gi].playingP : false;
        let newPlayingG = senderPG === "G" ? true : gi > -1 ? gamelist[gi].playingG : false;
        let newRacksize = rs;

        let newgamestatus = "Unknown";
        if (wt === "X") {
          newgamestatus = "Game over";
        } else if (wt === "P") {
          newgamestatus = "Prisoners turn";
        } else if (wt === "G") {
          newgamestatus = "Guards turn";
        }

        let newgamedata = {
          gameid: sendergameid,
          nicknameP: senderPG === "P" ? sendernickname : gi > -1 ? gamelist[gi].nicknameP : "",
          nicknameG: senderPG === "G" ? sendernickname : gi > -1 ? gamelist[gi].nicknameG : "",
          gamestatus: newgamestatus,
          playingP: newPlayingP,
          playingG: newPlayingG,
          racksize: newRacksize
        }
        if (gi < 0) { // Game not in list yet, put it in the list
          anyUpdates = true;
          newGamelist = [...newGamelist, newgamedata];
        }
        else { // Game is in the list, check for needed updates
          let oldgamedata = gamelist[gi];
          if (oldgamedata.nicknameP !== newgamedata.nicknameP ||
              oldgamedata.nicknameG !== newgamedata.nicknameG ||
              oldgamedata.gamestatus !== newgamedata.gamestatus ||
              oldgamedata.playingP !== newgamedata.playingP ||
              oldgamedata.playingG !== newgamedata.playingG ||
              oldgamedata.racksize !== newgamedata.racksize
            ) {
              anyUpdates = true;
              newGamelist[gi] = newgamedata;
            }
        }
        if (anyUpdates) {
          setGamelist(newGamelist);
        }
      }  
    } catch {
      window.alert("Error processing lobby message");
    }
  }
  function getGamelistIndex(gid) {
    for (var i = 0; i < gamelist.length; ++i) {
      if (gamelist[i].gameid === gid) {
        return i;
      }
    }
    return -1;
  }
  function isPlayingP(gid) {
    let gi = getGamelistIndex(gid);
    return gi < 0 ? false : gamelist[gi].playingP;
  }
  function availableActionP(gd) {
    if (nickname.length === 0 || gd.gamestatus === "Game over") { return availableActionNone; }
    if (!gd.playingP) { return availableActionStart; }
    if (gd.nicknameP === nickname) { return availableActionReconnect; }
    return availableActionNone;
  }
  function availableActionG(gd) {
    if (nickname.length === 0 || gd.gamestatus === "Game over") { return availableActionNone; }
    if (!gd.playingG) { return availableActionJoin; }
    if (gd.nicknameG === nickname) { return availableActionReconnect; }
    return availableActionNone;
  }
  function togglerUpsidedownMode() {
    setUpsidedownMode((curr) => !curr);
  }
  function selectRackSize(newRacksize) {
    setRacksize(newRacksize);
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
      <div className="col-10 offset-1">
        <label className="h2">*Nickname:&nbsp;</label>
        <input className="h2 pbNicknameInput"
              name="nickname"
              value={nickname}
              onChange={(e) => {
                setNickname(e.target.value);
              } } />
        <span className="h2">&nbsp;(*required)</span>
      </div>
      <div class="custom-control custom-checkbox h3 col offset-2">
        <input type="checkbox" id="upsidedownModeCheckbox" className="custom-control-input"
          value={upsidedownMode}
          onChange={() => togglerUpsidedownMode()}
        />
        <label className="custom-control-label" for="upsidedownModeCheckbox">&nbsp;Upside board on opponents turn</label>
      </div>
    </div>
    <div className="row">
      <div className="col-7 offset-1">
        <hr></hr>
        <span className="pbPlayerTitle h2">&nbsp;PRISONERS&nbsp;</span><span className="h3">&nbsp;&nbsp;Enter a game id, select a cell block, and then click "Start Game".</span>
      </div>
    </div>
    <div className="row">
      <div className="col-7 offset-1">
        <span className="h2 pbGameIdPrompt">Game ID:</span>
        <input className="h2 pbGameIdInput"
          name="gameid"
          value={gameid}
          onChange={(e) => {
            setGameid(e.target.value);
          } } />
        <button id="startgame" className="pbLobbyActionButton h2"
          onClick={function () {
            if (nickname.length === 0) {
              window.alert("Please enter nickname before starting a game");
            } else if (gameid.length > 0) {
              if (isPlayingP(gameid)) {
                window.alert("Prisoners already playing that game");
              } else {
                setPrisonersOrGuards('P');
              }
            } else {
              window.alert("Please enter Game ID before starting a game");
            }
          } }
        >
          Start Game
        </button>
      </div>
    </div>
    <div className="row">
      <div className="col offset-1">
        <span className="h2 pbRackSizePrompt"></span>
        <button id="selectracksize4" className={racksize === 4 ? "pbLobbyRackSizeSelected4" : "pbLobbyRackSize4"}
          onClick={() => selectRackSize(4)}
          data-toggle="tooltip" title="4 letter racks, 9 x 9 board"
          autoFocus
        >
          4
        </button>
        <button id="selectracksize5" className={racksize === 5 ? "pbLobbyRackSizeSelected5" : "pbLobbyRackSize5"}
          onClick={() => selectRackSize(5)}
          data-toggle="tooltip" title="5 letter racks, 11 x 11 board"
        >
          5
        </button>
        <button id="selectracksize6" className={racksize === 6 ? "pbLobbyRackSizeSelected6" : "pbLobbyRackSize6"}
          onClick={() => selectRackSize(6)}
          data-toggle="tooltip" title="6 letter racks, 13 x 13 board"
        >
          6
        </button>
        <button id="selectracksize7" className={racksize === 7 ? "pbLobbyRackSizeSelected7" : "pbLobbyRackSize7"}
          onClick={() => selectRackSize(7)}
          data-toggle="tooltip" title="7 letter racks, 15 x 15 board"
        >
          7
        </button>
        <span className="h2">{racksize} letter racks, {racksize*2+1} x {racksize*2+1} board.</span>
      </div>
    </div>
    <div className="row">
      <div className="col-7 offset-1">
        <hr></hr>
        <span className="pbPlayerTitle h2"><i className="material-icons">security</i>GUARDS<i className="material-icons">security</i></span><span className="h3">&nbsp;&nbsp;Find and click the "Join Game" button for your game.</span>
        <hr></hr>
        <h3>If you lost connection, find and click the "Reconnect" button for your game id.</h3>
      </div>
    </div>
    <div className="row">
      <div className="col offset-1">
        <h1>Game list:</h1>
      </div>
    </div>
    <div className="row">
      <div className="col offset-2">
        <table>
          <thead>
            <tr className="pbLobbyGamesHeader">
              <th className="pbLobbyGamesHeaderCol">Game ID</th>
              <th className="pbLobbyGamesHeaderCol" colSpan="2">Prisoners</th>
              <th className="pbLobbyGamesHeaderCol" colSpan="2">Guards</th>
              <th className="pbLobbyGamesHeaderCol">Cell Block</th>
              <th className="pbLobbyGamesHeaderCol">Game Status</th>
            </tr>
          </thead>
          <tbody>
            {gamelist.map((value, index) => (
              <tr key={`OtherGame${index}`} className="pbGamesInProgressRow">
                <td className="pbLobbyGameid">{value.gameid}</td>
                <td className="pbLobbyPlayerIndicator"><span className="material-icons">{value.playingP ? "check_circle" : "cancel"}</span></td>
                {availableActionP(value) === availableActionNone ?
                  <td className="pbLobbyActionNone">No action available</td>
                : availableActionP(value) === availableActionReconnect ?
                  <td id={`PrisonersRejoin${index}`}>
                    <button className="pbLobbyActionButton"
                      onClick={function () {
                        setIsrejoin(true);
                        setGameid(value.gameid);
                        setPrisonersOrGuards('P');
                        setRacksize(value.racksize);
                      } }
                    >
                      Reconnect
                    </button>
                  </td>
                  :
                  <td id={`PrisonersStart${index}`}>
                    <button className="pbLobbyActionButton"
                      onClick={function () {
                        setGameid(value.gameid);
                        setPrisonersOrGuards('P');
                      } }
                    >
                      Start Game
                    </button>
                  </td>
                }
                <td className="pbLobbyPlayerIndicator"><span className="material-icons">{value.playingG ? "check_circle" : "cancel"}</span></td>
                {availableActionG(value) === availableActionNone ?
                  <td className="pbLobbyActionNone">No action available</td>
                : availableActionG(value) === availableActionReconnect ?
                  <td id={`GuardsRejoin${index}`}>
                    <button className="pbLobbyActionButton"
                      onClick={function () {
                        setIsrejoin(true);
                        setGameid(value.gameid);
                        setPrisonersOrGuards('G');
                        setRacksize(value.racksize);
                      } }
                    >
                      Reconnect
                    </button>
                  </td>
                  :
                  <td id={`GuardsJoin${index}`}>
                    <button className="pbLobbyActionButton"
                      onClick={function () {
                        setGameid(value.gameid);
                        setPrisonersOrGuards('G');
                        setRacksize(value.racksize);
                      } }
                    >
                      Join Game
                    </button>
                  </td>
                }
                <td className="pbLobbyGameRacksize">
                  {value.racksize}
                </td>
                <td className="pbLobbyGameStatus">
                  {value.gamestatus}
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
  // need ri, ci to display alternating backgrounds on unused squares
  // need c to represent which tile is on the square, if any
  // need onClick to handle square click at a higher level
  // need rcd to display selected direction arrow when appropriate
  // need racksize to determine centre and board aarry edge positions
  const edge = (props.racksize * 2);
  const middle = props.racksize;
  const addu = props.c === "Q" ? " u" : "";
  const usedbyclass =
    props.squareusedby === "P"
      ? "pbSquareUsedByPrisoners" + addu
      : "pbSquareUsedByGuards" + addu;
  const tdclass = 
    props.c !== squareunused
      ? usedbyclass
      : props.rcd[0] === props.ri && props.rcd[1] === props.ci && props.rcd[2] === "r"
      ? "pbSquareRightArrow"
      : props.rcd[0] === props.ri && props.rcd[1] === props.ci && props.rcd[2] === "d"
      ? "pbSquareDownArrow"
      : props.ri === middle && props.ci === middle
      ? "pbSquareCenterSquare"
      : (props.ri === 0 || props.ri === middle || props.ri === edge) &&
        (props.ci === 0 || props.ci === middle || props.ci === edge)
      ? "pbSquareEscapeHatch"
      : props.ri % 2 === props.ci % 2
      ? "pbSquare1"
      : "pbSquare2";
  const tdvalue =
    props.c !== squareunused
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
      ? "."// Display truly mucked up if I use empty string
      : ".";// Ditto. The dot blends in with the background image.
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

const Board = ({ onClick, squares, usedby, rcd, racksize }) => {
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
          racksize={racksize}
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

const Game = ({isrejoin, prisonersOrGuards, gameid, nickname, wsmessage, client
  , upsidedownMode // Option for upside down mode
  , racksize // Option for rack size
  }) => {
  const middle = racksize; // Middle element in row or column array
  const edge = racksize * 2; // Last element in row or column array
  const initialtiles = racksize === 6 ? initialtiles6 : racksize === 7 ? initialtiles7 : racksize === 5 ? initialtiles5 : initialtiles4;
  const initialsquares = Array(edge+1).fill(Array(edge+1).fill(squareunused));
  const initialusedby = Array(edge+1).fill(Array(edge+1).fill(usedbynoone));
  const [tiles, setTiles] = useState([...initialtiles]);
  const [ptiles, setPtiles] = useState([]);
  const [gtiles, setGtiles] = useState([]);
  const [squares, setSquares] = useState([...initialsquares]);
  const [usedby, setUsedby] = useState([...initialusedby]);
  const [selection, setSelection] = useState(-1); // relative to rack of player making a play
  const [whoseturn, setWhoseturn] = useState("P"); // game starts with prisoners play
  const [currentcoords, setCurrentcoords] = useState([]);
  const [rescues, setRescues] = useState(0);
  const [rcd, setRcd] = useState([-1,-1,nodirection]);
  const [passed, setPassed] = useState(false); // true when opponent just passed; if both pass the game ends
  const [snapshot, setSnapshot] = useState({
    squares: [...initialsquares],
    usedby: [...initialusedby],
    ptiles: [],
    gtiles: [],
  });
  const [oppname, setOppname] = useState('');
  const [chatmsgs, setChatmsgs] = useState([{from: 'Author', msg: 'email: justchrissykes@gmail.com'}]);

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
      while (tempPTiles.length < racksize) {
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
      client.send(
        JSON.stringify({
          type: "pb",
          func: "hello",
          sender: prisonersOrGuards,
          gameid: gameid,
          nickname: nickname, // player nickname
          whoseturn: whoseturn,
          racksize: racksize // rack size option (lobby needs to know for when guards join game and they call Game)
        })
      );
    }
    else
    {
      // Prisoner rejoin or guard join or guard rejoin
      try {
        client.send(
          JSON.stringify({
            gameid: gameid, // the id for the game
            nickname: nickname, // player nickname
            type: "pb", // prisonbreak
            func: "requestgamedata", // request game data
            sender: prisonersOrGuards
        }));
      }
      catch {}
    }
  }, []);
  useEffect(() => {
    let msg = wsmessage;
    if (msg !== '') processGameMessage(msg);      
  },[wsmessage])

  function processGameMessage(message) {
    let messageData = JSON.parse(message);
    if (messageData.type === "announce") {
      client.send(
        JSON.stringify({
          type: "pb",
          func: "hello",
          sender: prisonersOrGuards,
          gameid: gameid,
          nickname: nickname, // player nickname
          whoseturn: whoseturn,
          racksize: racksize // rack size option (lobby needs to know for when guards join game and they call Game)
        })
      );
    }
    else if (messageData.gameid === gameid && messageData.type === "pb") { // This instance of a prison break game
      if (messageData.sender != prisonersOrGuards && oppname === "" && messageData.nickname && messageData.nickname.length > 0) {
        // Opponent sent a message including their nickname and I don't have their nickname yet
        setOppname(messageData.nickname);
      }
      if (messageData.func === "requestgamedata" && messageData.sender !== prisonersOrGuards) { // Opponent requested game info
        client.send(
          JSON.stringify({
            gameid: gameid, // the id for the game
            nickname: nickname, // player nickname
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
            rescues: rescues,
            racksize: racksize // rack size option (lobby needs to know for when guards join game and they call Game)
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
        setRcd(-1,-1,nodirection);
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
        setRcd(-1,-1,nodirection);
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
      if (messageData.func === "chat" && messageData.sender != prisonersOrGuards) { // Opponent chat message
        let newChatmsgs = [...chatmsgs, {from: messageData.nickname, msg: messageData.sendmsg}];
        setChatmsgs(newChatmsgs);
      }
    }
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
    if (newSelection > -1 && squarevalue === squareunused) { // tile is selected from rack and clicked square is not used yet
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
      newRow[ci] = squareunused;
      newSquares[ri] = [...newRow];
      let newUsedbyRow = [...newUsedby[ri]];
      newUsedbyRow[ci] = usedbynoone;
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
      setRcd(-1,-1,nodirection); // make player click again to set direction
      return;
    }
    // They didn't click a square to place a selected tile there
    // They didn't click a square to remove an existing tile
    if (squares[ri][ci] === squareunused) {
      // There is nothing on the square so they are picking where to place the next tile via keyboard
      let newDirection = rcd[0] !== ri || rcd[1] !== ci ? "r" : //click new square, start with "r"
       rcd[2] === "r" ? "d" : //click same square that was "r", change to "d"
       rcd[2] === "d" ? nodirection : //click same square that was "d", change to nodirection
       "r"; // click same square that was nodirection, change to "r"
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
    let escapehatches = [
      "0-0",
      "0-" + middle,
      "0-" + edge,
      middle+ "-0",
      middle + "-" + edge,
      edge + "-0",
      edge + "-" + middle,
      edge + "-" + edge
    ]; // coords of escape hatches
    for (var i = 0; i < currentcoords.length; i++) {
      if (escapehatches.indexOf(currentcoords[i]) > -1) {
        newRescues = newRescues + 1;
      }
    }
    let newPtiles = [...ptiles];
    let newTiles = [...tiles];
    while (newPtiles.length < racksize && newTiles.length > 0) {
      let rand = Math.floor(Math.random() * newTiles.length);
      newPtiles.push(newTiles[rand]);
      newTiles.splice(rand, 1);
    }
    newPtiles.sort();
    let newWhoseturn = newPtiles.length > 0 ? "G" : "X"; // X = game over
    if (usedby[0][0]         !== usedbynoone &&
        usedby[0][middle]    !== usedbynoone &&
        usedby[0][edge]      !== usedbynoone &&
        usedby[middle][0]    !== usedbynoone &&
        usedby[middle][edge] !== usedbynoone &&
        usedby[edge][0]      !== usedbynoone &&
        usedby[edge][middle] !== usedbynoone &&
        usedby[edge][edge]   !== usedbynoone) {
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
        nickname: nickname, // player nickname
        type: "pb", // prisonbreak
        func: "ept", // end prisoners turn
        sender: prisonersOrGuards,
        squares: squares, // this was being changed as the tiles were being played
        usedby: usedby, // this was being changed as the tiles were being played
        ptiles: newPtiles, // we picked new tiles for prisoners rack
        tiles: newTiles, // we picked new tiles so tile pool changed
        whoseturn: newWhoseturn, // may have ended the game (whoseturn=X)
        racksize: racksize, // rack size option (lobby needs to know for when guards join game and they call Game)
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
    while (newGtiles.length < racksize && newTiles.length > 0) {
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
    if (usedby[0][0]         !== usedbynoone &&
        usedby[0][middle]    !== usedbynoone &&
        usedby[0][edge]      !== usedbynoone &&
        usedby[middle][0]    !== usedbynoone &&
        usedby[middle][edge] !== usedbynoone &&
        usedby[edge][0]      !== usedbynoone &&
        usedby[edge][middle] !== usedbynoone &&
        usedby[edge][edge]   !== usedbynoone) {
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
        nickname: nickname, // player nickname
        type: "pb", // prisonbreak
        func: "egt", // end guards turn
        sender: prisonersOrGuards,
        squares: squares, // this was being changed as the tiles were being played
        usedby: usedby, // this was being changed as the tiles were being played
        gtiles: newGtiles, // we picked new tiles for guards rack
        tiles: newTiles, // we picked new tiles so tile pool changed
        passed: false, // did not just pass
        whoseturn: newWhoseturn, // may have ended the game (whoseturn=X)
        racksize: racksize // rack size option (lobby needs to know for when guards join game and they call Game)
        })
      );
    };

  const swapPrisonersTiles = () => {
    if (tiles.length < racksize) {
      window.alert("Need " + racksize + " tiles in the bag to exchange")
      return;
    }
    let newPtiles = [];
    let newTiles = [...tiles];
    while (newPtiles.length < racksize && newTiles.length > 0) {
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
        nickname: nickname, // player nickname
        type: "pb", // prisonbreak
        func: "ept", // end prisoners turn
        sender: prisonersOrGuards,
        whoseturn: "G", // swap never ends the game so go to opponent
        racksize: racksize, // rack size option (lobby needs to know for when guards join game and they call Game)
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
    if (tiles.length < racksize) {
      window.alert("Need " + racksize + " tiles in the bag to exchange")
      return;
    }
    let newGtiles = [];
    let newTiles = [...tiles];
    while (newGtiles.length < racksize && newTiles.length > 0) {
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
        nickname: nickname, // player nickname
        type: "pb", // prisonbreak
        func: "egt", // end guards turn
        sender: prisonersOrGuards,
        whoseturn: "P", // swap never ends the game so go to opponent
        racksize: racksize, // rack size option (lobby needs to know for when guards join game and they call Game)
        squares: snapshot.squares, // revert to start of turn squares
        usedby: snapshot.usedby, // revert to start of turn used by
        gtiles: newGtiles, // we picked new tiles for prisoners rack
        tiles: newTiles, // we picked new tiles so tile pool changed
        passed: false // did not just pass
      })
    );

  }

  function isPlayValid() {
    if (squares[middle][middle] === squareunused) {
      window.alert("First play must hit center square");
      return false;
    }
    let numrows = edge+1;
    let numcols = edge+1;
    let lowrow = numrows;
    let highrow = -1;
    let lowcol = numcols;
    let highcol = -1;
    for (var r=0; r < numrows; ++r) {
      for (var c=0; c < numcols; ++c) {
        if (squares[r][c] !== squareunused) {
          if (!(r > 0 && squares[r-1][c] !== squareunused) &&
           !(c > 0 && squares[r][c-1] !== squareunused) &&
           !(r < edge && squares[r+1][c] !== squareunused) &&
           !(c < edge && squares[r][c+1] !== squareunused)
           ) {
            window.alert("Each played tile must be part of a word");
            return false;
           }
           if (snapshot.squares[r][c] === squareunused) {
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
        if (squares[r][c] === squareunused) {
          window.alert("There is a gap in your word");
          return false;
        }
        if (snapshot.squares[r][c] !== squareunused) {
          playthru = true;
        }
        if (lowrow === highrow && r > 0 && squares[r-1][c] !== squareunused) { hookmade = true; }
        if (lowrow === highrow && r < edge && squares[r+1][c] !== squareunused) { hookmade = true; }
        if (lowcol === highcol && c > 0 && squares[r][c-1] !== squareunused) { hookmade = true; }
        if (lowcol === highcol && c < edge && squares[r][c+1] !== squareunused) { hookmade = true; }
      }
    }
    // Check play to or from a tile (play through but not either side)
    if (lowrow === highrow && lowcol > 0 && snapshot.squares[lowrow][lowcol-1] !== squareunused) { playthru = true; }
    if (lowrow === highrow && highcol < edge && snapshot.squares[lowrow][highcol+1] !== squareunused) { playthru = true; }
    if (lowcol === highcol && lowrow > 0 && snapshot.squares[lowrow-1][lowcol] !== squareunused) { playthru = true; }
    if (lowcol === highcol && highrow < edge && snapshot.squares[highrow+1][lowcol] !== squareunused) { playthru = true; }
    if (!playthru && !hookmade && snapshot.squares[middle][middle] !== squareunused) {
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
        nickname: nickname, // player nickname
        type: "pb", // prisonbreak
        func: "ept", // end prisoners turn
        sender: prisonersOrGuards,
        squares: snapshot.squares, // revert to start of turn squares
        usedby: snapshot.usedby, // revert to start of turn used by
        ptiles: snapshot.ptiles, // prisoners rack did not change
        tiles: tiles, // tile pool did not change
        whoseturn: newWhoseturn, // may have ended the game
        racksize: racksize, // rack size option (lobby needs to know for when guards join game and they call Game)
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
        nickname: nickname, // player nickname
        type: "pb", // prisonbreak
        func: "egt", // end guards turn
        sender: prisonersOrGuards,
        squares: snapshot.squares, // revert to start of turn squares
        usedby: snapshot.usedby, // revert to start of turn used by
        gtiles: snapshot.gtiles, // guards rack did not change
        tiles: tiles, // tile pool did not change
        whoseturn: newWhoseturn, // may have ended the game
        racksize: racksize, // rack size option (lobby needs to know for when guards join game and they call Game)
        passed: true
      })
    );
  }

  const requestGameData = () => {
    client.send(
      JSON.stringify({
        gameid: gameid, // the id for the game
        nickname: nickname, // player nickname
        type: "pb", // prisonbreak
        sender: prisonersOrGuards,
        whoseturn: whoseturn, // for lobby to pick up this message
        racksize: racksize, // rack size option (lobby needs to know for when guards join game and they call Game)
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
        if (row >-1 && col > -1 && dir !== nodirection) { // row, col, dir are set to accept keystroke
          // Need to figure out next sqaure to auto-place a tile
          let newRcd = rcd;
          if (dir === "r") { // playing rightwards
            let newc = -1;
            for (var c = col + 1; c < edge + 1 && newc === -1; c++) {
              if (squares[row][c] === squareunused) {newc = c;}
            }
            if (newc === -1) {
              newRcd = [-1,-1,nodirection];
            } else {
              newRcd = [row, newc, "r"];
            }
            handleBoardSquareClick(row,col,newSelection,newRcd);
            return;
          }
          if (dir === "d") { // playing downwards
            let newr = -1;
            let numrows = (racksize*2)+1;
            for (var r = row + 1; r < numrows && newr === -1; r++) {
              if (squares[r][col] === squareunused) {newr = r;}
            }
            if (newr === -1) {
              newRcd = [-1,-1,nodirection];
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
      let newRcd = [-1,-1,nodirection];
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
      newUsedby[row][col] = usedbynoone;
      newSquares[row][col] = squareunused;
      let dir = rcd[2];
      if (dir !== nodirection) {
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
    <div className="container-fluid prisonbreak">
      <div className="row">
        <div className="col-2 pbGameid">
          Game id: {gameid}<br></br>
          Nickname: {nickname}
        </div>
        <div className="col-8 pbtitle">
          Prison Break
          <span className="material-icons">run_circle</span>
        </div>
        <div className="col-2 pbhomelink">
          <Link href={"../../"}>
            <a><i className="material-icons" data-toggle="tooltip" title="Home">home</i></a>
          </Link>
          <br></br>
          Opponent: {oppname}
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
            onClickPassPlay={() => prisonerPass()}
            rescues={rescues}
            prisonersOrGuards={prisonersOrGuards}
          />
        </div>
        <div className="col pbBoardPlusUnderboard">
          {prisonersOrGuards === whoseturn ?
            <div className="row" onKeyDownCapture={handleKeyDown}>
              <Board
                squares={squares}
                usedby={usedby}
                rcd={rcd}
                onClick={(ri, ci) => handleBoardSquareClick(ri, ci, -1,null)}
                racksize={racksize}
              />
            </div>
          :
            whoseturn === "X" || !upsidedownMode ?
              <div className="row">
                <Board
                  squares={squares}
                  usedby={usedby}
                  rcd={rcd}
                  onClick={() => {}}
                  racksize={racksize}
                />
              </div>
            :
              <div className="row upsidedown">
                <Board
                  squares={squares}
                  usedby={usedby}
                  rcd={rcd}
                  onClick={() => {}}
                  racksize={racksize}
                />
              </div>
          }
          <div className="pbUnderboard">
            {whoseturn === "X" ?
              <h1>Game Over!</h1>
            :
              <p>{whoseturn === "P" ? jokes[0] : jokes[1]}</p>
            }
          </div>
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
            onClickPassPlay={() => guardsPass()}
            prisonersOrGuards={prisonersOrGuards}
          />
        </div>
        <div className="col-1">
          <ShowUnseenTiles tiles={tiles} othertiles={prisonersOrGuards === "P" ? gtiles : ptiles}/>
        </div>
        <div className="col-3">
          <Chat gameid={gameid} client={client} nickname={nickname} msgs={chatmsgs} setMsgs={setChatmsgs} prisonersOrGuards={prisonersOrGuards}/>
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
          <span className={t === "Q" ? "pbTilepoolTile u" : "pbTilepoolTile"}>{t}</span>
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
            ? t === "Q" && props.prisonersOrGuards === "P" ? "pbTileOnRackSelectedP u" : "pbTileOnRackSelectedP"
            : t === "Q" && props.prisonersOrGuards === "P" ? "pbTileOnRackP u" :  "pbTileOnRackP",
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
              ? t === "Q" && props.prisonersOrGuards === "G" ? "pbTileOnRackSelectedG u" : "pbTileOnRackSelectedG"
              : t === "Q" && props.prisonersOrGuards === "G" ? "pbTileOnRackG u" :  "pbTileOnRackG",
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

const Chat = ({gameid, client, nickname, msgs, setMsgs, prisonersOrGuards}) => {
  const [nextmsg, setNextmsg] = useState('');
 
  const handleKeyDown = (event) => {
    event.preventDefault();
    if (event.key === "Enter" && nextmsg.length > 0) {
      let newMsgs = [...msgs, {from: nickname, msg: nextmsg}]
      let sendmsg = nextmsg;
      setMsgs(newMsgs);
      setNextmsg('');
      client.send(
        JSON.stringify({
          gameid: gameid, // the id for the game
          nickname: nickname, // player nickname
          type: "pb", // prisonbreak
          func: "chat", // send chat message
          sender: prisonersOrGuards, // who sent it
          sendmsg: sendmsg // the message typed in the chat
        })
      );
      return;
    }
    let chartest = /^[A-Za-z0-9 \.,\(\)\?:!'"]$/; // Allow letter, number, space, period, comma, round brackets, question mark, colon, exclamation mark, quote, double quote
    if (event.key.match(chartest)) {
      let newNextmsg = nextmsg + event.key;
      setNextmsg(newNextmsg);
    }
    if (event.key === "Backspace" && nextmsg.length > 0) {
      let newNextmsg = nextmsg.slice(0,nextmsg.length-1);
      setNextmsg(newNextmsg);
    }
  }

  return (
    <div className="pbChat">
      <span className="pbChatTitle">Chat with opponent</span>
      <table className="pbChatTable">
        <tbody>
          {msgs.filter((value, index) => msgs.length - index < 15).map((value, index) => (
            <tr key={`ChatMessage${index}`}>
              <td className="pbChatFrom">{value.from}</td>
              <td className="pbChatMsg">{value.msg}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="2">
              <textarea className={nextmsg === "" ? "pbChatInputEmpty" : "pbChatInput"}
                name="nextmsgInputArea"
                value={nextmsg === "" ? "[type here then hit enter]" : nextmsg}
                onKeyDownCapture={handleKeyDown}
              />
            </td>
          </tr>
        </tbody>
      </table>
   </div>
  )
}