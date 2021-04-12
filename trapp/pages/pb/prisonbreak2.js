import React, { useState, useEffect } from "react";
import Link from "next/link";
import CustomSocket from "../../ws";
const boardColumnHeaders = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'];
const boardRowHeaders = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'];
const movewaittime = 20000; // when waiting for opponent ping every this many milliseconds
const jokes = [
  'Escapee: "I' + "'m free! I'm free!" + '". Little kid: "I'+ "'m four! I'm four!" + '"',
  'Two peanuts were walking down a back alley. One was a salted.',
  "The psychic dwarf escaped! There's a small medium at large!",
  'What do you call a vegetable who has escaped prison? An escapea!',
  "The prisoners fave punctuation is a period. It marks the end of a sentence!",
  "Prison is only one word, but to robbers it's a whole sentence."
];
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
        racksize={racksize}
      />
  )
}

const Lobby = ({setIsrejoin, wsmessage, gameid, setGameid, nickname, setNickname, setPrisonersOrGuards
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
  function selectRackSize(newRacksize) {
    setRacksize(newRacksize);
  }
  return <div className="container-fluid">
    <div className="row">
      <div className="col-10 pbtitle font-effect-fire">
        Prison Break Lobby
        <span className="material-icons">run_circle</span>
      </div>
      <div className="col-2 pbhomelink">
        <Link href={"../../"}>
          <a><i className="material-icons" data-toggle="tooltip" title="Home">home</i></a>
        </Link>
      </div>
    </div>
    <div className="row pbLobbyCommonInfoSection">
      <div className="col">
        <label className="pbLobbyNicknamePrompt">Nickname</label>
        <input className="pbLobbyNicknameInput"
          name="nickname"
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
          } } />
      </div>
    </div>
    <div className="row pbLobbyPrisonerSection">
      <div className="col">
        <span className="pbPlayerTitle">PRISONERS</span>
        <label className="pbLobbyGameIdPrompt">Game ID</label>
        <input className="pbLobbyGameIdInput"
          name="gameid"
          value={gameid}
          onChange={(e) => {
            setGameid(e.target.value);
          } } />
        <span className="pbLobbyRackSizePrompt"></span>
        <button id="selectracksize4" className={racksize === 4 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize"}
          onClick={() => selectRackSize(4)}
          data-toggle="tooltip" title="4 letter racks, 9 x 9 board"
          autoFocus
        >
          4
        </button>
        <button id="selectracksize5" className={racksize === 5 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize"}
          onClick={() => selectRackSize(5)}
          data-toggle="tooltip" title="5 letter racks, 11 x 11 board"
        >
          5
        </button>
        <button id="selectracksize6" className={racksize === 6 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize"}
          onClick={() => selectRackSize(6)}
          data-toggle="tooltip" title="6 letter racks, 13 x 13 board"
        >
          6
        </button>
        <button id="selectracksize7" className={racksize === 7 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize"}
          onClick={() => selectRackSize(7)}
          data-toggle="tooltip" title="7 letter racks, 15 x 15 board"
        >
          7
        </button>
        <span className="pbLobbyCellBlockInfo">{racksize} letter racks, {racksize*2+1} x {racksize*2+1} board.</span>
        <button id="startgame" className="pbLobbyActionButton"
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
    <div className="row pbLobbyGuardSection">
      <div className="col">
        <span className="pbPlayerTitle">GUARDS</span><span className="pbLobbyGuardInfo">Find and click the "Join Game" button for your game.</span>
        <p>If you lost connection, find and click the "Reconnect" button for your game id.</p>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h2 className="pbLobbyGameListTitle">Game list:</h2>
      </div>
    </div>
    <div className="row pbLobbyGameList">
      <div className="col offset-1">
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
  const tdclass =
    props.c !== squareunused
      ? "pbSquareInner PlayerTile"
      : props.rcd[0] === props.ri && props.rcd[1] === props.ci && props.rcd[2] === "r"
      ? "pbSquareInner RightArrow"
      : props.rcd[0] === props.ri && props.rcd[1] === props.ci && props.rcd[2] === "d"
      ? "pbSquareInner DownArrow"
      : props.ri === middle && props.ci === middle
      ? "pbSquareInner CenterSquare"
      : (props.ri === 0 || props.ri === middle || props.ri === edge) &&
        (props.ci === 0 || props.ci === middle || props.ci === edge)
      ? "pbSquareInner EscapeHatch"
      : props.ri % 2 === props.ci % 2
      ? "pbSquareInner style1" : "pbSquareInner style2"; // Alternating square styles
  const tdvalue =
    props.c !== squareunused
      ? props.c
      : tdclass.indexOf("RightArrow") > -1
      ? "➡"
      : tdclass.indexOf("DownArrow") > -1
      ? "⬇"
      : tdclass.indexOf("CenterSquare") > -1
      ? <i className="material-icons">stars</i>
      : "." /* If I put empty string or &nbsp; then it affects the display oddly  */
  return (
    tdclass.indexOf("EscapeHatch") > -1 ?
    <button className={tdclass} onClick={props.onClick}>
      <span className="material-icons">run_circle</span>
    </button>
    : props.c === squareunused ?
      <button className={tdclass} onClick={props.onClick}>
        {tdvalue}
      </button>
      :
      <button className={tdclass} onClick={props.onClick}>
        <div className={`pbSquareTileText ${props.squareusedby + (props.c === "Q" ? " u" : "")}`}>{tdvalue}</div>
      </button>
);
};

const Board = ({ onClick, squares, usedby, rcd, racksize }) => {
  const renderSquare = (ri, ci, c, squareusedby) => {
    return (
      <td key={`Square${ri}-${ci}`} className="pbSquareOuter">
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
        <td className="pbBoardRowHeader" id="BoardHeaderLeft">
          {boardRowHeaders[ri]}
        </td>
        {squares[ri].map((c, ci) => renderSquare(ri, ci, c, usedby[ri][ci]))}
        <td className="pbBoardRowHeader" id="BoardHeaderRight">
          {boardRowHeaders[ri]}
        </td>
      </tr>
    );
  };

  return (
    <table className="pbBoard">
      <tbody>
        <tr className="pbBoardColumnHeaderRow">
          <td className="pbBoardHeaderTopLeft">&nbsp;</td>
          {squares.map((_$,i) => (
            <td className="pbBoardColumnHeader" key={`TopColumnHeader${i}`}>
              {boardColumnHeaders[i]}
            </td>
          ))}
          <td className="pbBoardHeaderTopRight">&nbsp;</td>
        </tr>
        {squares.map((r, ri) => renderRow(ri))}
        <tr className="pbBoardColumnHeaderRow" id="BoardHeaderBottom">
          <td className="pbBoardHeaderBottomLeft">&nbsp;</td>
          {squares.map((_$,i) => (
            <td className="pbBoardColumnHeader" key={`BottomColumnHeader${i}`}>
              {boardColumnHeaders[i]}
            </td>
          ))}
          <td className="pbBoardHeaderBottomRight">&nbsp;</td>
        </tr>
      </tbody>
    </table>
  );
};

const Game = ({isrejoin, prisonersOrGuards, gameid, nickname, wsmessage, client
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
  const [moves, setMoves] = useState([]); // move history, each element is the array is a json object of info about the move
  const [snapshot, setSnapshot] = useState({
    squares: [...initialsquares],
    usedby: [...initialusedby],
    ptiles: [],
    gtiles: [],
  });
  const [jokeindex, setJokeindex] = useState(0);
  const [allowRewind, setAllowRewind] = useState(false);
  const [oppname, setOppname] = useState('');
  const [chatmsgs, setChatmsgs] = useState([]);

  useEffect(() => {
    let newji = jokeindex + 1;
    if (newji >= jokes.length) {
      newji = 0;
    }
    setJokeindex(newji);
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
  useEffect(() => {
    scrollToBottom("ScrollableMoves");
  },[moves])

  function putAtMoveStart() {
    setSelection(-1);
    setAllowRewind(false);
    setRcd(-1,-1,nodirection);
    setCurrentcoords([]);
  }

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
            snapshot: snapshot,
            passed: passed,
            moves: moves,
            rescues: rescues,
            racksize: racksize, // rack size option (lobby needs to know for when guards join game and they call Game)
            allowRewind: allowRewind
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
        setSnapshot(messageData.snapshot);
        setPassed(messageData.passed);
        setMoves(messageData.moves);
        setRescues(messageData.rescues);
        setAllowRewind(messageData.allowRewind);
      }
      if (messageData.func === "ept" && prisonersOrGuards === "G") { // Prisoners sent end prisoners turn, Guards pick it up
        putAtMoveStart();
        setWhoseturn(messageData.whoseturn);
        setSquares(messageData.squares);
        setUsedby(messageData.usedby);
        setPtiles(messageData.ptiles);
        setTiles(messageData.tiles);
        setPassed(messageData.passed);
        setMoves(messageData.moves);
        setRescues(messageData.rescues);
        setSnapshot({
          squares: [...messageData.squares],
          usedby: [...messageData.usedby],
          ptiles: [...messageData.ptiles],
          gtiles: [...gtiles],
        });
      }
      if (messageData.func === "egt" && prisonersOrGuards === "P") { // Guards sent end guards turn, Prisoners pick it up
        putAtMoveStart();
        setWhoseturn(messageData.whoseturn);
        setSquares(messageData.squares);
        setUsedby(messageData.usedby);
        setGtiles(messageData.gtiles);
        setTiles(messageData.tiles);
        setPassed(messageData.passed);
        setMoves(messageData.moves);
        setSnapshot({
          squares: [...messageData.squares],
          usedby: [...messageData.usedby],
          ptiles: [...ptiles],
          gtiles: [...messageData.gtiles],
        });       
      }
      if (messageData.func === "undoturn" && messageData.sender !== prisonersOrGuards) { 
        // opponent undid their last turn
        putAtMoveStart();
        setTiles(messageData.tiles);
        setPtiles(messageData.ptiles);
        setGtiles(messageData.gtiles);
        setSquares(messageData.squares);
        setUsedby(messageData.usedby);
        setWhoseturn(messageData.whoseturn);
        setRescues(messageData.rescues);
        setPassed(messageData.passed);
        setMoves(messageData.moves);
        setSnapshot(messageData.snapshot);
      }
      if (messageData.func === "allowundo" && messageData.sender !== prisonersOrGuards) {
        // Opponent clicked button to allow undo turn
        setAllowRewind(true);
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
      let newSelection = selection === tileindex ? -1 : tileindex;
      setSelection(newSelection);
    } else {
      alert("It is not your turn");
    }
  };

  const handleGuardTileClick = (tileindex) => {
    // the index of gtiles
    if (whoseturn === "G") {
      let newSelection = selection === tileindex ? -1 : tileindex;
      setSelection(newSelection);
    } else {
      alert("It is not your turn");
    }
  };

  const endPrisonersTurn = () => {
    if (!isPlayValid()) {
      return;
    }
    let rewindInfo = getRewindInfo();
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
    let playinfo = getPlayInfo();
    let newMove = {by: "P", type: "PLAY", rewindInfo: rewindInfo, mainword: playinfo.mainword, extrawords: playinfo.extrawords, pos: playinfo.pos};
    let newMoves = [...moves, newMove];
    putAtMoveStart();
    setWhoseturn(newWhoseturn);
    setPtiles(newPtiles);
    setTiles(newTiles);
    setPassed(false);
    setMoves(newMoves);
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
        moves: newMoves, // a move was made
        rescues: newRescues // may have rescued another prisoner
      })
    );
  };

  const endGuardsTurn = () => {
    if (!isPlayValid()) {
      return;
    }
    let rewindInfo = getRewindInfo();
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
    let playinfo = getPlayInfo();
    let newMove = {by: "G", type: "PLAY", rewindInfo: rewindInfo, mainword: playinfo.mainword, extrawords: playinfo.extrawords, pos: playinfo.pos};
    let newMoves = [...moves, newMove];
    putAtMoveStart();
    setWhoseturn(newWhoseturn);
    setGtiles(newGtiles);
    setTiles(newTiles);
    setPassed(false);
    setMoves(newMoves);
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
        moves: newMoves, // a move was made
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
    let rewindInfo = getRewindInfo();
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
    let newMove = {by: "P", type: "SWAP", rewindInfo: rewindInfo};
    let newMoves = [...moves, newMove];
    putAtMoveStart();
    setSquares([...snapshot.squares]);
    setUsedby([...snapshot.usedby]);
    setWhoseturn("G");
    setPtiles(newPtiles);
    setTiles(newTiles);
    setPassed(false);
    setMoves(newMoves);
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
        moves: newMoves, // a move was made
        rescues: rescues // no rescues on an exchange
      })
    );

  }
  
  const swapGuardsTiles = () => {
    if (tiles.length < racksize) {
      window.alert("Need " + racksize + " tiles in the bag to exchange")
      return;
    }
    let rewindInfo = getRewindInfo();
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
    let newMove = {by: "G", type: "SWAP", rewindInfo: rewindInfo};
    let newMoves = [...moves, newMove];
    putAtMoveStart();
    setSquares([...snapshot.squares]);
    setUsedby([...snapshot.usedby]);
    setWhoseturn("P");
    setGtiles(newGtiles);
    setTiles(newTiles);
    setPassed(false);
    setMoves(newMoves);
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
        passed: false, // did not just pass
        moves: newMoves // a move was made
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

  function getPlayInfo() {
    let playinfo = {};
    let mainword = "";
    let extrawords = [];
    let wordstartcoord = "";
    let numrows = edge+1;
    let numcols = edge+1;
    let lowrow = numrows;
    let highrow = -1;
    let lowcol = numcols;
    let highcol = -1;
    let numcoords = currentcoords.length;
    for (var coord=0; coord < numcoords; ++coord) {
      let row = parseInt(currentcoords[coord].split("-")[0]);
      let col = parseInt(currentcoords[coord].split("-")[1]);
      if (row < lowrow) {
        lowrow = row;
      }
      if (row > highrow) {
        highrow = row;
      }
      if (col < lowcol) {
        lowcol = col;
      }
      if (col > highcol) {
        highcol = col;
      }
    }
    if (lowrow < highrow || numcoords === 1) { // tiles placed on difference rows so play is vertical, or single tile played
      let col = lowcol; // lowcol and highcol will have the same value
      // find the lowest row number of the main word, which may be lower than that of the first played tile
      let lowestrow = lowrow;
      while (lowestrow > 0 && squares[lowestrow-1][col] !== squareunused) {
        lowestrow = lowestrow - 1;
      }
      // find the highest row number of the main word, which may be higher than that of the last played tile
      let highestrow = highrow;
      while (highestrow < edge && squares[highestrow+1][col] !== squareunused) {
        highestrow = highestrow + 1;
      }
      wordstartcoord = boardColumnHeaders[col] + boardRowHeaders[lowestrow]; // vertical play coords start with col header
      for (var row = lowestrow; row <= highestrow; ++row) {
        mainword = mainword + squares[row][col];
        let coord = row + "-" + col;
        if (currentcoords.indexOf(coord) > -1) { // This tile was played, check for hooks
          let lowestcol = col;
          while (lowestcol > 0 && squares[row][lowestcol-1] !== squareunused) {
            lowestcol = lowestcol - 1;
          }
          let highestcol = col;
          while (highestcol < edge && squares[row][highestcol+1] !== squareunused) {
            highestcol = highestcol + 1;
          }
          if (lowestcol < highestcol) { // hook was made
            let extraword = "";
            for (var c = lowestcol; c <= highestcol; ++c) {
              extraword = extraword + squares[row][c];
            }
            extrawords = [...extrawords, extraword];
          }
        }
      }
    }
    if (mainword.length < 2) { // Horizontal play or single tile drop that cannot be a vertical play
      let row = lowrow; // lowrow and highrow will have the same value
      // find the lowest col number of the main word, which may be lower than that of the first played tile
      let lowestcol = lowcol;
      while (lowestcol > 0 && squares[row][lowestcol-1] !== squareunused) {
        lowestcol = lowestcol - 1;
      }
      // find the highest col number of the main word, which may be higher than that of the last played tile
      let highestcol = highcol;
      while (highestcol < edge && squares[row][highestcol+1] !== squareunused) {
        highestcol = highestcol + 1;
      }
      wordstartcoord = boardRowHeaders[row] + boardColumnHeaders[lowestcol]; // horizontal play coords start with row header
      mainword = ""; // In case we got a 1 letter mainword in the previous block
      extrawords = []; // Ditto
      for (var col = lowestcol; col <= highestcol; ++col) {
        mainword = mainword + squares[row][col];
        let coord = row + "-" + col;
        if (currentcoords.indexOf(coord) > -1) { // This tile was played, check for hooks
          let lowestrow = row;
          while (lowestrow > 0 && squares[lowestrow-1][col] !== squareunused) {
            lowestrow = lowestrow - 1;
          }
          let highestrow = row;
          while (highestrow < edge && squares[highestrow+1][col] !== squareunused) {
            highestrow = highestrow + 1;
          }
          if (lowestrow < highestrow) { // hook was made
            let extraword = "";
            for (var r = lowestrow; r <= highestrow; ++r) {
              extraword = extraword + squares[r][col];
            }
            extrawords = [...extrawords, extraword];
          }
        }
      }
    }
    playinfo = {mainword: mainword, extrawords: extrawords, pos: wordstartcoord};
    return playinfo;
  }

  function getRewindInfo() { // Must be called before you start setting new values for stuff
    /* Rewind info is everything you need to reverse the move that we do not already have in the new move variable:
        squares: says what tile is on what square
        usedby: says who played what tile on what square (affects styling)
        rack: players rack before move was made 
        tiles: tile pool before picking new tiles
        rescues: rescue count
        passed: whether previous play was a pass
    */
    let rewindInfo = {
      squares: [...snapshot.squares],
      usedby: [...snapshot.usedby],
      rack: whoseturn === "G" ? [...snapshot.gtiles]: [...snapshot.ptiles],
      tiles: [...tiles],
      rescues: rescues,
      passed: passed
    };
    return rewindInfo;
  }
  function allowUndoLastTurn() {
    if (!allowRewind) {
      setAllowRewind(true);
      client.send(
        JSON.stringify({
          gameid: gameid, // the id for the game
          nickname: nickname, // player nickname
          type: "pb", // prisonbreak
          func: "allowundo", // allow undo last turn
          racksize: racksize, // rack size option (lobby needs to know for when guards join game and they call Game)
          sender: prisonersOrGuards // who is allowing it
          })
      );
    }
  }

  function performRewind() {
    /* Rewind the last move and take it off the end of the move list */
    let numMoves = moves.length;
    let lastMove = moves[moves.length-1];
    let newSquares = [...lastMove.rewindInfo.squares];
    let newUsedby = [...lastMove.rewindInfo.usedby];
    let newTiles = [...lastMove.rewindInfo.tiles];
    let newPtiles = lastMove.by === "P" ? [...lastMove.rewindInfo.rack] : [...ptiles];
    let newGtiles = lastMove.by === "G" ? [...lastMove.rewindInfo.rack] : [...gtiles];
    let newRescues = lastMove.rewindInfo.rescues;
    let newWhoseturn = lastMove.by; // Back to their turn
    let newMoves = [...moves];
    newMoves.splice(numMoves-1,1);
    let newSnapshot = {
      squares: [...newSquares],
      usedby: [...newUsedby],
      gtiles: [...newGtiles],
      ptiles: [...newPtiles]
    };
    let newPassed = lastMove.passed;
    putAtMoveStart();
    setTiles(newTiles);
    setPtiles(newPtiles);
    setGtiles(newGtiles);
    setSquares(newSquares);
    setUsedby(newUsedby);
    setWhoseturn(newWhoseturn);
    setRescues(newRescues);
    setPassed(newPassed);
    setMoves(newMoves);
    setSnapshot(newSnapshot);
    // Just send everything even though some could be hard coded in processMessage by opponent
    client.send(
      JSON.stringify({
        gameid: gameid, // the id for the game
        nickname: nickname, // player nickname
        type: "pb", // prisonbreak
        func: "undoturn", // undo last turn
        racksize: racksize, // rack size option (lobby needs to know for when guards join game and they call Game)
        sender: prisonersOrGuards,
        tiles: newTiles, // tile pool
        ptiles: newPtiles, // prisoners rack
        gtiles: newGtiles, // guards rack
        squares: newSquares, // revert to start of turn squares
        usedby: newUsedby, // revert to start of turn used by
        whoseturn: newWhoseturn, // swap never ends the game so go to opponent
        rescues: newRescues, // rescue count
        passed: newPassed, // whether previous play was a pass
        moves: newMoves, // a move was made
        snapshot: newSnapshot
      })
    );
  }

  const recallTiles = () => {
    setSquares([...snapshot.squares]);
    setUsedby([...snapshot.usedby]);
    setPtiles([...snapshot.ptiles]);
    setGtiles([...snapshot.gtiles]);
    setSelection(-1);
    setCurrentcoords([]);
    setRcd([-1,-1,nodirection]);
  };

  const prisonerPass = () => {
    let rewindInfo = getRewindInfo();
    let newWhoseturn = passed ? "X" : "G"; // If both players pass then end the game by using "X"
    let newMove = {by: "P", type: "PASS", rewindInfo: rewindInfo};
    let newMoves = [...moves, newMove];
    recallTiles(); // In case they put some tiles on the board before clicking Pass
    putAtMoveStart();
    setWhoseturn(newWhoseturn);
    setPassed(true);
    setMoves(newMoves);
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
        moves: newMoves, // a move was made
        rescues: rescues // no rescues on a pass
      })
    );
  }

  const guardsPass = () => {
    let rewindInfo = getRewindInfo();
    let newWhoseturn = passed ? "X" : "P"; // If both players pass then end the game by using "X"
    let newMove = {by: "G", type: "PASS", rewindInfo: rewindInfo};
    let newMoves = [...moves, newMove];
    recallTiles(); // In case they put some tiles on the board before clicking Pass
    putAtMoveStart();
    setWhoseturn(newWhoseturn);
    setPassed(true);
    setMoves(newMoves);
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
        passed: true,
        moves: newMoves // a move was made
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
    if (event.key === "Escape") {
      recallTiles();
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
        <div className="col-2 pbGameid formalinfo">
          Game id: {gameid}<br></br>
          Nickname: {nickname}
        </div>
        <div className="col-8 pbtitle font-effect-fire">
          Prison Break
          <span className="material-icons">run_circle</span>
        </div>
        <div className="col-2 pbhomelink formalinfo">
          <Link href={"../../"}>
            <a><i className="material-icons" data-toggle="tooltip" title="Home">home</i></a>
          </Link>
          <br></br>
          Opponent: {oppname}
        </div>
      </div>
      <div className="row">
        <div className="pbPlayerOuterSection">
          <Prisoners
            ptiles={ptiles}
            whoseturn={whoseturn}
            selection={selection}
            onClick={(ti) => handlePrisonerTileClick(ti)}
            onClickFinishTurn={() => endPrisonersTurn()}
            onClickTileRecall={() => recallTiles()}
            onClickTileExchange={() => swapPrisonersTiles()}
            onClickPassPlay={() => prisonerPass()}
            onClickUndoLastPlay={() => performRewind()}
            onClickAllowUndo={() => allowUndoLastTurn()}
            rescues={rescues}
            prisonersOrGuards={prisonersOrGuards}
            moves={moves}
            allowRewind={allowRewind}
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
            <div className="row">
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
              <p>{jokes[jokeindex]}</p>
            }
          </div>
        </div>
        <div className="pbPlayerOuterSection">
          <Guards
            gtiles={gtiles}
            whoseturn={whoseturn}
            selection={selection}
            onClick={(ti) => handleGuardTileClick(ti)}
            onClickFinishTurn={() => endGuardsTurn()}
            onClickTileRecall={() => recallTiles()}
            onClickTileExchange={() => swapGuardsTiles()}
            onClickPassPlay={() => guardsPass()}
            onClickUndoLastPlay={() => performRewind()}
            onClickAllowUndo={() => allowUndoLastTurn()}
            prisonersOrGuards={prisonersOrGuards}
            moves={moves}
            allowRewind={allowRewind}
          />
        </div>
        <div className="col pbTilesMovesChatOuter">
          <div className="row">
            <div className="col pbTileAndMovesOuter">
              <ShowUnseenTiles tiles={tiles} othertiles={prisonersOrGuards === "P" ? gtiles : ptiles}/>
              <ShowMoves moves={moves}/>
            </div>
            <div className="col">
              <Chat gameid={gameid} client={client} nickname={nickname} msgs={chatmsgs} setMsgs={setChatmsgs} prisonersOrGuards={prisonersOrGuards}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShowUnseenTiles = (props) => { // tiles = tiles in bag, othertiles = tiles on other players rack
  let unseenTiles = [...props.tiles, ...props.othertiles];
  // Sort the tiles then put the blanks at the end
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
      <div className="pbTilepoolTitle">TILES</div>
      {unseenTiles.map((t, ti) => (
        <span key={`tile${ti}`}>
          {ti > 0 && t !== unseenTiles[ti - 1] ? (
            <span className="pbTilepoolDivider"></span>
          ) : (
            <></>
          )}
          <span className={t === "Q" ? "pbTilepoolTile u" : "pbTilepoolTile"}>{t}</span>
        </span>
      ))}
    </div>
  );
};

const ShowMoves = (props) => { // show moves made
  return (
    <div className="pbMoves">
      <div className="pbMovesTitle">MOVES</div>
      <div className="pbMovesScrollable" id="ScrollableMoves">
        {props.moves.map((m, mi) => (
          <div key={`move${mi}`} className="pbMove">
            <span className="pbMove by">{m.by}</span>
            :
            <span className={`pbMove ${m.type}`}>
              {m.type === "PLAY" ?
                <>{m.pos} {m.mainword.replace("Q","Qu")}
                  {m.extrawords?.map((w) => (
                    <>
                      ,&nbsp;
                      {w.replace("Q","Qu")}
                    </>
                  ))}
                </>
              :
                <></>
              }
            </span>
          </div>
          ))}
      </div>
    </div>
  )
}
const RackTile = (props) => {
  return (
    <div className={props.tileclass} onClick={props.onClick}>
      {props.tilevalue}
    </div>
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

const AllowUndoLastPlay = (props) => {
  return (
    <button className="pbActionButtonSevere" onClick={props.onClick}>
      <span className="pbActionButtonSevereText"><i className="material-icons">report_problem</i>
        &nbsp;Allow Undo Turn
        {props.alreadyAllowed ?
          <span className="pbActionButtonSevereText2">Allow undo is now enabled</span>
        :
          <span className="pbActionButtonSevereText2">Click to let opponent undo</span>
        }
      </span>
    </button>
  )
}

const UndoLastPlay = (props) => {
  return (
    <button className="pbActionButtonSevere" onClick={props.onClick}>
      <span className="pbActionButtonSevereText"><i className="material-icons">delete_forever</i>
        &nbsp;Undo My Turn
        <span className="pbActionButtonSevereText2">Opponent has allowed undo</span>
      </span>
    </button>
  )
}

const Prisoners = (props) => {
  const renderTile = renderPlayerTile(props);

  const renderFreedPrisoners = (count) => {
    let dumb = Array(count).fill("nonsense");
    return dumb.map((value, index) => (
      <span key={value + String(index)} data-toggle="tooltip" title="I'm free! I'm free!">
        <img className="pbRescuee"
          src="/breakfree.png"
          alt="I'm free! I'm free!"
          />
      </span>
    ));
  };

  return (
    <div className="pbPlayerInnerSection">
      <div className={`pbPlayerTitle ${props.prisonersOrGuards}`}><i className="material-icons">run_circle</i>&nbsp;PRISONERS&nbsp;<i className="material-icons">run_circle</i></div>
      <div className="pbTilerack">
        {props.ptiles.map((t, ti) =>
          renderTile(
            props.whoseturn === "P" && props.selection === ti
            ? t === "Q" && props.prisonersOrGuards === "P" ? "pbTileOnRack Selected P u" : "pbTileOnRack Selected P"
            : t === "Q" && props.prisonersOrGuards === "P" ? "pbTileOnRack Unselected P u" :  "pbTileOnRack Unselected P",
            ti,
            props.prisonersOrGuards === "P" ? t : "*"
          )
        )}
      </div>
      {props.whoseturn === "P" && props.prisonersOrGuards === "P" ? 
        showActionButtons(props)
        : props.prisonersOrGuards === "P" && props.moves.length > 0 && props.allowRewind && props.moves[props.moves.length-1].by === "P" ?
        showActionButtonUndoLastPlay(props)
        :
        <></>
      }
      {props.prisonersOrGuards === "P" && props.moves.length > 0 && props.moves[props.moves.length-1].by === "G" ?
        showActionButtonAllowUndo(props)
        :
        <></>
      }
      <div className="pbRescuesMade">
        Rescues made: {props.rescues}
        <br></br>
        {renderFreedPrisoners(props.rescues)}
      </div>
    </div>
  );
};

const Guards = (props) => {
  const renderTile = renderPlayerTile(props);

  return (
    <div className="pbPlayerInnerSection">
      <div className="pbPlayerTitle"><i className="material-icons">security</i>&nbsp;GUARDS&nbsp;<i className="material-icons">security</i></div>
      <div className="pbTilerack">
        {props.gtiles.map((t, ti) =>
          renderTile(
            props.whoseturn === "G" && props.selection === ti
              ? t === "Q" && props.prisonersOrGuards === "G" ? "pbTileOnRack Selected G u" : "pbTileOnRack Selected G"
              : t === "Q" && props.prisonersOrGuards === "G" ? "pbTileOnRack Unselected G u" :  "pbTileOnRack Unselected G",
            ti,
            props.prisonersOrGuards === "G" ? t : "*"
          )
        )}
      </div>
      {props.whoseturn === "G" && props.prisonersOrGuards === "G" ? 
        showActionButtons(props)
        : props.prisonersOrGuards === "G" && props.moves.length > 0 && props.allowRewind && props.moves[props.moves.length-1].by === "G" ?
        showActionButtonUndoLastPlay(props)
        :
        <></>
      }
      {props.prisonersOrGuards === "G" && props.moves.length > 0 && props.moves[props.moves.length-1].by === "P" ?
        showActionButtonAllowUndo(props)
        :
        <></>
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
function showActionButtonAllowUndo(props) {
  return <div className="pbActionButtonDiv">
    <p>
      <AllowUndoLastPlay onClick={() => props.onClickAllowUndo()} alreadyAllowed={props.allowRewind}/>
    </p>
  </div>
}
function showActionButtonUndoLastPlay(props) {
  return <div className="pbActionButtonDiv">
    <p>
      <UndoLastPlay onClick={() => props.onClickUndoLastPlay()} />
    </p>
  </div>
}
const Chat = ({gameid, client, nickname, msgs, setMsgs, prisonersOrGuards}) => {
  const [nextmsg, setNextmsg] = useState('');
 
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && nextmsg.length > 0) {
      event.preventDefault();
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
    // let chartest = /^[A-Za-z0-9 \.,\(\)\?:!'"]$/; // Allow letter, number, space, period, comma, round brackets, question mark, colon, exclamation mark, quote, double quote
    // if (event.key.match(chartest)) {
    //   let newNextmsg = nextmsg + event.key;
    //   setNextmsg(newNextmsg);
    // }
    if (event.key === "Backspace" && nextmsg.length > 0) {
      event.preventDefault();
      let newNextmsg = nextmsg.slice(0,nextmsg.length-1);
      setNextmsg(newNextmsg);
    }
  }

  return (
    <div className="pbChat">
      <span className="pbChatTitle">CHAT</span>
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
                value={nextmsg}
                onChange={(e) => {setNextmsg(e.target.value);}}
                onKeyDownCapture={handleKeyDown}
              />
            </td>
          </tr>
        </tbody>
      </table>
   </div>
  )
}

const scrollToBottom = (elementid) => {
  const theElement = document.getElementById(elementid);
  theElement.scrollTop = theElement.scrollHeight;
}