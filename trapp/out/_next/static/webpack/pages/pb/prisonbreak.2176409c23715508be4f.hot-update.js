webpackHotUpdate_N_E("pages/pb/prisonbreak",{

/***/ "./pages/pb/game.js":
/*!**************************!*\
  !*** ./pages/pb/game.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pb_playerSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pb/playerSection */ "./pages/pb/playerSection.js");
/* harmony import */ var _pb_board__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pb/board */ "./pages/pb/board.js");
/* harmony import */ var _pb_unseenTilesSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pb/unseenTilesSection */ "./pages/pb/unseenTilesSection.js");
/* harmony import */ var _pb_movesSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pb/movesSection */ "./pages/pb/movesSection.js");


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\pb\\game.js",
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();







const boardColumnHeaders = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];
const boardRowHeaders = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
const movewaittime = 20000; // when waiting for opponent ping every this many milliseconds

const jokes = ['Escapee: "I' + "'m free! I'm free!" + '". Little kid: "I' + "'m four! I'm four!" + '"', 'Two peanuts were walking down a back alley. One was a salted.', "The psychic dwarf escaped! There's a small medium at large!", 'What do you call a vegetable who has escaped prison? An escapea!', "The prisoners fave punctuation is a period. It marks the end of a sentence!", "Prison is only one word, but to robbers it's a whole sentence."];
const initialtiles4 = ["A", "A", "A", "B", "C", "D", "E", "E", "E", "E", "F", "G", "H", "I", "I", "I", "J", "K", "L", "M", "N", "N", "O", "O", "O", "P", "Q", "R", "R", "S", "T", "T", "U", "V", "W", "X", "Y", "Z", "?", "?"]; // initial tile pool for 4 letter rack mode

const initialtiles5 = ["A", "A", "A", "A", "A", "B", "C", "D", "D", "E", "E", "E", "E", "E", "E", "F", "G", "H", "I", "I", "I", "I", "I", "J", "K", "L", "L", "M", "N", "N", "N", "O", "O", "O", "O", "P", "Q", "R", "R", "R", "S", "S", "T", "T", "T", "U", "V", "W", "X", "Y", "Z", "?", "?"]; // initial tile pool for 5 letter rack mode

const initialtiles6 = ["A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "M", "M", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "S", "S", "S", "T", "T", "T", "T", "U", "U", "U", "V", "W", "X", "Y", "Z", "?", "?"]; // initial tile pool for 6 letter rack mode

const initialtiles7 = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z", "?", "?"]; // initial tile pool for 7 letter rack mode

const squareunused = ".";
const usedbynoone = "";
const nodirection = "";

const Game = ({
  isrejoin,
  prisonersOrGuards,
  gameid,
  nickname,
  wsmessage,
  client,
  racksize = 4 // Option for rack size (give it a default for Build)

}) => {
  _s2();

  var _s = $RefreshSig$();

  const middle = racksize; // Middle element in row or column array

  const edge = racksize * 2; // Last element in row or column array

  const initialtiles = racksize === 6 ? initialtiles6 : racksize === 7 ? initialtiles7 : racksize === 5 ? initialtiles5 : initialtiles4;
  const initialsquares = Array(edge + 1).fill(Array(edge + 1).fill(squareunused));
  const initialusedby = Array(edge + 1).fill(Array(edge + 1).fill(usedbynoone));
  const {
    0: tiles,
    1: setTiles
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([...initialtiles]);
  const {
    0: ptiles,
    1: setPtiles
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: gtiles,
    1: setGtiles
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: squares,
    1: setSquares
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([...initialsquares]);
  const {
    0: usedby,
    1: setUsedby
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([...initialusedby]);
  const {
    0: selection,
    1: setSelection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(-1); // relative to rack of player making a play

  const {
    0: whoseturn,
    1: setWhoseturn
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("P"); // game starts with prisoners play

  const {
    0: currentcoords,
    1: setCurrentcoords
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: rescues,
    1: setRescues
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: rcd,
    1: setRcd
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([-1, -1, nodirection]);
  const {
    0: moves,
    1: setMoves
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // move history, each element is the array is a json object of info about the move

  const {
    0: snapshot,
    1: setSnapshot
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    squares: [...initialsquares],
    usedby: [...initialusedby],
    ptiles: [],
    gtiles: []
  });
  const {
    0: jokeindex,
    1: setJokeindex
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: allowRewind,
    1: setAllowRewind
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: oppname,
    1: setOppname
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: chatmsgs,
    1: setChatmsgs
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // const rescueSound = new Audio("https://tilerunner.github.io/yippee.m4a"); // I couldn't get the syntax right to read it from pb folder

  const prevRescues = usePrevious(rescues);

  function usePrevious(value) {
    _s();

    const ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
      ref.current = value;
    });
    return ref.current;
  }

  _s(usePrevious, "8uVE59eA/r6b92xF80p7sH8rXLk=");

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (rescues > prevRescues) {
      var c = document.createElement('audio');
      c.src = "https://tilerunner.github.io/yippee.m4a";
      c.play(); // rescueSound.play()
    }
  }, [rescues]); // Play a sound when a rescue is made

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let newji = jokeindex + 1;

    if (newji >= jokes.length) {
      newji = 0;
    }

    setJokeindex(newji);
    const interval = setInterval(() => {
      // If it is not my turn && the game has not ended
      if (prisonersOrGuards !== whoseturn && whoseturn !== "X") {
        // I am waiting for opponent move to come through but sometimes it gets missed (no idea why)
        requestGameData(); // Send a request for game data in case opponent moved and we missed the update
      }
    }, movewaittime); // this many milliseconds between above code block executions

    return () => clearInterval(interval);
  }, [whoseturn]); // want up to date value of whoseturn to decide whether to ask for an update

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // This code executes first time Game is used only
    if (!isrejoin && prisonersOrGuards === "P") {
      // Prisoner is starting the game so pick racks
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
      client.send(JSON.stringify({
        type: "pb",
        func: "hello",
        sender: prisonersOrGuards,
        gameid: gameid,
        nickname: nickname,
        // player nickname
        whoseturn: whoseturn,
        racksize: racksize // rack size option (lobby needs to know for when guards join game and they call Game)

      }));
    } else {
      // Prisoner rejoin or guard join or guard rejoin
      try {
        client.send(JSON.stringify({
          gameid: gameid,
          // the id for the game
          nickname: nickname,
          // player nickname
          type: "pb",
          // prisonbreak
          func: "requestgamedata",
          // request game data
          sender: prisonersOrGuards
        }));
      } catch {}
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let msg = wsmessage;
    if (msg !== '') processGameMessage(msg);
  }, [wsmessage]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    scrollToBottom("ScrollableMoves");
  }, [moves]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    scrollToBottom("ScrollableChat");
  }, [chatmsgs]);

  function putAtMoveStart() {
    setSelection(-1);
    setAllowRewind(false);
    setRcd(-1, -1, nodirection);
    setCurrentcoords([]);
  }

  function processGameMessage(message) {
    let messageData = JSON.parse(message);

    if (messageData.type === "announce") {
      client.send(JSON.stringify({
        type: "pb",
        func: "hello",
        sender: prisonersOrGuards,
        gameid: gameid,
        nickname: nickname,
        // player nickname
        whoseturn: whoseturn,
        racksize: racksize // rack size option (lobby needs to know for when guards join game and they call Game)

      }));
    } else if (messageData.gameid === gameid && messageData.type === "pb") {
      // This instance of a prison break game
      if (messageData.sender != prisonersOrGuards && oppname === "" && messageData.nickname && messageData.nickname.length > 0) {
        // Opponent sent a message including their nickname and I don't have their nickname yet
        setOppname(messageData.nickname);
      }

      if (messageData.func === "requestgamedata" && messageData.sender !== prisonersOrGuards) {
        // Opponent requested game info
        client.send(JSON.stringify({
          gameid: gameid,
          // the id for the game
          nickname: nickname,
          // player nickname
          type: "pb",
          // prisonbreak
          func: "providegamedata",
          // provide game data
          sender: prisonersOrGuards,
          tiles: tiles,
          squares: squares,
          ptiles: ptiles,
          gtiles: gtiles,
          usedby: usedby,
          whoseturn: whoseturn,
          snapshot: snapshot,
          moves: moves,
          rescues: rescues,
          racksize: racksize,
          // rack size option (lobby needs to know for when guards join game and they call Game)
          allowRewind: allowRewind
        }));
      }

      if (messageData.func === "providegamedata" && messageData.sender !== prisonersOrGuards) {
        // Opponent provided game data but do we need it?
        // If they have a different move count then we need it (they may have undone a move)
        // If they have same move count but a different tile bag count then we need it (no moves made but tiles are picked)
        // If guards join after prisoners made a move then guards have no tiles ("ept" got processed which leaves gtiles alone)
        if (messageData.moves.length !== moves.length || messageData.tiles.length !== tiles.length || prisonersOrGuards === "G" && gtiles.length === 0 && currentcoords.length === 0 || prisonersOrGuards === "P" && ptiles.length === 0 && currentcoords.length === 0 // Not sure I need it but...
        ) {
            setTiles(messageData.tiles);
            setSquares(messageData.squares);
            setPtiles(messageData.ptiles);
            setGtiles(messageData.gtiles);
            setUsedby(messageData.usedby);
            setWhoseturn(messageData.whoseturn);
            setSnapshot(messageData.snapshot);
            setMoves(messageData.moves);
            setRescues(messageData.rescues);
            setAllowRewind(messageData.allowRewind);
          }
      }

      if (messageData.func === "ept" && prisonersOrGuards === "G") {
        // Prisoners sent end prisoners turn, Guards pick it up
        putAtMoveStart();
        setWhoseturn(messageData.whoseturn);
        setSquares(messageData.squares);
        setUsedby(messageData.usedby);
        setPtiles(messageData.ptiles);
        setTiles(messageData.tiles);
        setMoves(messageData.moves);
        setRescues(messageData.rescues);
        setSnapshot({
          squares: [...messageData.squares],
          usedby: [...messageData.usedby],
          ptiles: [...messageData.ptiles],
          gtiles: [...gtiles]
        });
      }

      if (messageData.func === "egt" && prisonersOrGuards === "P") {
        // Guards sent end guards turn, Prisoners pick it up
        putAtMoveStart();
        setWhoseturn(messageData.whoseturn);
        setSquares(messageData.squares);
        setUsedby(messageData.usedby);
        setGtiles(messageData.gtiles);
        setTiles(messageData.tiles);
        setMoves(messageData.moves);
        setSnapshot({
          squares: [...messageData.squares],
          usedby: [...messageData.usedby],
          ptiles: [...ptiles],
          gtiles: [...messageData.gtiles]
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
        setMoves(messageData.moves);
        setSnapshot(messageData.snapshot);
      }

      if (messageData.func === "allowundo" && messageData.sender !== prisonersOrGuards) {
        // Opponent clicked button to allow undo turn
        setAllowRewind(true);
      }

      if (messageData.func === "chat" && messageData.sender != prisonersOrGuards) {
        // Opponent chat message
        let newChatmsgs = [...chatmsgs, {
          from: messageData.nickname,
          msg: messageData.sendmsg
        }];
        setChatmsgs(newChatmsgs);
      }
    }
  } // Calling setSelection (from handleKeyDown) then handleBoardSquareClick does not let it recognize selection with the new value
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

    if (newSelection > -1 && squarevalue === squareunused) {
      // tile is selected from rack and clicked square is not used yet
      newRow[ci] = whoseturn === "P" ? newPtiles[newSelection] : newGtiles[newSelection];
      newSquares[ri] = [...newRow];
      whoseturn === "P" ? newPtiles.splice(newSelection, 1) : newGtiles.splice(newSelection, 1);
      let newUsedbyRow = [...newUsedby[ri]];
      newUsedbyRow[ci] = whoseturn;
      newUsedby[ri] = [...newUsedbyRow];

      if (whoseturn === "P" && newSelection === newPtiles.length) {
        newSelection = newSelection - 1;
      }

      if (whoseturn === "G" && newSelection === newGtiles.length) {
        newSelection = newSelection - 1;
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

    if (cci > -1) {
      // clicked square has a tile on it from the current move in progress
      whoseturn === "P" ? newPtiles.push(squarevalue) : newGtiles.push(squarevalue);
      let newRow = [...newSquares[ri]];
      newRow[ci] = squareunused;
      newSquares[ri] = [...newRow];
      let newUsedbyRow = [...newUsedby[ri]];
      newUsedbyRow[ci] = usedbynoone;
      newUsedby[ri] = [...newUsedbyRow];
      setSelection(whoseturn === "P" ? newPtiles.length - 1 : newGtiles.length - 1);
      newCurrentcoords.splice(cci, 1);
      setSquares(newSquares);
      setUsedby(newUsedby);
      setPtiles(newPtiles);
      setGtiles(newGtiles);
      setCurrentcoords(newCurrentcoords);
      setRcd(-1, -1, nodirection); // make player click again to set direction

      return;
    } // They didn't click a square to place a selected tile there
    // They didn't click a square to remove an existing tile


    if (squares[ri][ci] === squareunused) {
      // There is nothing on the square so they are picking where to place the next tile via keyboard
      let newDirection = rcd[0] !== ri || rcd[1] !== ci ? "r" : //click new square, start with "r"
      rcd[2] === "r" ? "d" : //click same square that was "r", change to "d"
      rcd[2] === "d" ? nodirection : //click same square that was "d", change to nodirection
      "r"; // click same square that was nodirection, change to "r"

      newRcd = [ri, ci, newDirection];
      setRcd(newRcd);
      return;
    }
  };

  const handleRackTileClick = tileindex => {
    // If no tile is selected already then set the selection
    if (selection === -1) {
      setSelection(tileindex);
      return;
    } // If the same tile is already selected then unselect


    if (selection === tileindex) {
      setSelection(-1);
      return;
    } // A tile was already selected and they clicked another tile - move the tile


    let newrack = prisonersOrGuards === "P" ? [...ptiles] : [...gtiles];
    let movefrom = selection;
    let movetile = newrack[movefrom];
    let moveto = tileindex;
    newrack.splice(movefrom, 1); // remove tile from original selected position

    newrack.splice(moveto, 0, movetile); // insert moved tile at the newly selected position

    prisonersOrGuards === "P" ? setPtiles(newrack) : setGtiles(newrack);
    setSelection(-1);
  };

  const endPrisonersTurn = () => {
    if (!isPlayValid()) {
      return;
    }

    let rewindInfo = getRewindInfo();
    let newRescues = rescues;
    let escapehatches = ["0-0", "0-" + middle, "0-" + edge, middle + "-0", middle + "-" + edge, edge + "-0", edge + "-" + middle, edge + "-" + edge]; // coords of escape hatches

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

    if (usedby[0][0] !== usedbynoone && usedby[0][middle] !== usedbynoone && usedby[0][edge] !== usedbynoone && usedby[middle][0] !== usedbynoone && usedby[middle][edge] !== usedbynoone && usedby[edge][0] !== usedbynoone && usedby[edge][middle] !== usedbynoone && usedby[edge][edge] !== usedbynoone) {
      newWhoseturn = "X"; // No escape hatches left
    }

    let playinfo = getPlayInfo();
    let newMove = {
      by: "P",
      type: "PLAY",
      rewindInfo: rewindInfo,
      mainword: playinfo.mainword,
      extrawords: playinfo.extrawords,
      pos: playinfo.pos
    };
    let newMoves = [...moves, newMove];
    putAtMoveStart();
    setWhoseturn(newWhoseturn);
    setPtiles(newPtiles);
    setTiles(newTiles);
    setMoves(newMoves);
    setRescues(newRescues);
    setSnapshot({
      squares: [...squares],
      usedby: [...usedby],
      ptiles: [...newPtiles],
      gtiles: [...gtiles]
    });
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      func: "ept",
      // end prisoners turn
      sender: prisonersOrGuards,
      squares: squares,
      // this was being changed as the tiles were being played
      usedby: usedby,
      // this was being changed as the tiles were being played
      ptiles: newPtiles,
      // we picked new tiles for prisoners rack
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      whoseturn: newWhoseturn,
      // may have ended the game (whoseturn=X)
      racksize: racksize,
      // rack size option (lobby needs to know for when guards join game and they call Game)
      moves: newMoves,
      // a move was made
      rescues: newRescues // may have rescued another prisoner

    }));
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

    if (usedby[0][0] !== usedbynoone && usedby[0][middle] !== usedbynoone && usedby[0][edge] !== usedbynoone && usedby[middle][0] !== usedbynoone && usedby[middle][edge] !== usedbynoone && usedby[edge][0] !== usedbynoone && usedby[edge][middle] !== usedbynoone && usedby[edge][edge] !== usedbynoone) {
      newWhoseturn = "X"; // No escape hatches left
    }

    let playinfo = getPlayInfo();
    let newMove = {
      by: "G",
      type: "PLAY",
      rewindInfo: rewindInfo,
      mainword: playinfo.mainword,
      extrawords: playinfo.extrawords,
      pos: playinfo.pos
    };
    let newMoves = [...moves, newMove];
    putAtMoveStart();
    setWhoseturn(newWhoseturn);
    setGtiles(newGtiles);
    setTiles(newTiles);
    setMoves(newMoves);
    setSnapshot({
      squares: snapsquares,
      usedby: snapusedby,
      ptiles: snapptiles,
      gtiles: snapgtiles
    });
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      func: "egt",
      // end guards turn
      sender: prisonersOrGuards,
      squares: squares,
      // this was being changed as the tiles were being played
      usedby: usedby,
      // this was being changed as the tiles were being played
      gtiles: newGtiles,
      // we picked new tiles for guards rack
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      moves: newMoves,
      // a move was made
      whoseturn: newWhoseturn,
      // may have ended the game (whoseturn=X)
      racksize: racksize // rack size option (lobby needs to know for when guards join game and they call Game)

    }));
  };

  const swapPrisonersTiles = () => {
    if (tiles.length < racksize) {
      window.alert("Need " + racksize + " tiles in the bag to exchange");
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
    let newMove = {
      by: "P",
      type: "SWAP",
      rewindInfo: rewindInfo
    };
    let newMoves = [...moves, newMove];
    putAtMoveStart();
    setSquares([...snapshot.squares]);
    setUsedby([...snapshot.usedby]);
    setWhoseturn("G");
    setPtiles(newPtiles);
    setTiles(newTiles);
    setMoves(newMoves);
    setSnapshot({
      squares: [...snapshot.squares],
      usedby: [...snapshot.usedby],
      ptiles: [...newPtiles],
      gtiles: [...gtiles]
    });
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      func: "ept",
      // end prisoners turn
      sender: prisonersOrGuards,
      whoseturn: "G",
      // swap never ends the game so go to opponent
      racksize: racksize,
      // rack size option (lobby needs to know for when guards join game and they call Game)
      squares: snapshot.squares,
      // revert to start of turn squares
      usedby: snapshot.usedby,
      // revert to start of turn used by
      ptiles: newPtiles,
      // we picked new tiles for prisoners rack
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      moves: newMoves,
      // a move was made
      rescues: rescues // no rescues on an exchange

    }));
  };

  const swapGuardsTiles = () => {
    if (tiles.length < racksize) {
      window.alert("Need " + racksize + " tiles in the bag to exchange");
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
    let newMove = {
      by: "G",
      type: "SWAP",
      rewindInfo: rewindInfo
    };
    let newMoves = [...moves, newMove];
    putAtMoveStart();
    setSquares([...snapshot.squares]);
    setUsedby([...snapshot.usedby]);
    setWhoseturn("P");
    setGtiles(newGtiles);
    setTiles(newTiles);
    setMoves(newMoves);
    setSnapshot({
      squares: [...snapshot.squares],
      usedby: [...snapshot.usedby],
      ptiles: [...ptiles],
      gtiles: [...newGtiles]
    });
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      func: "egt",
      // end guards turn
      sender: prisonersOrGuards,
      whoseturn: "P",
      // swap never ends the game so go to opponent
      racksize: racksize,
      // rack size option (lobby needs to know for when guards join game and they call Game)
      squares: snapshot.squares,
      // revert to start of turn squares
      usedby: snapshot.usedby,
      // revert to start of turn used by
      gtiles: newGtiles,
      // we picked new tiles for prisoners rack
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      moves: newMoves // a move was made

    }));
  };

  function isPlayValid() {
    if (squares[middle][middle] === squareunused) {
      window.alert("First play must hit center square");
      return false;
    }

    let numrows = edge + 1;
    let numcols = edge + 1;
    let lowrow = numrows;
    let highrow = -1;
    let lowcol = numcols;
    let highcol = -1;

    for (var r = 0; r < numrows; ++r) {
      for (var c = 0; c < numcols; ++c) {
        if (squares[r][c] !== squareunused) {
          if (!(r > 0 && squares[r - 1][c] !== squareunused) && !(c > 0 && squares[r][c - 1] !== squareunused) && !(r < edge && squares[r + 1][c] !== squareunused) && !(c < edge && squares[r][c + 1] !== squareunused)) {
            window.alert("Each played tile must be part of a word");
            return false;
          }

          if (snapshot.squares[r][c] === squareunused) {
            // This square was played on this turn
            if (r < lowrow) {
              lowrow = r;
            }

            if (r > highrow) {
              highrow = r;
            }

            if (c < lowcol) {
              lowcol = c;
            }

            if (c > highcol) {
              highcol = c;
            }
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

        if (lowrow === highrow && r > 0 && squares[r - 1][c] !== squareunused) {
          hookmade = true;
        }

        if (lowrow === highrow && r < edge && squares[r + 1][c] !== squareunused) {
          hookmade = true;
        }

        if (lowcol === highcol && c > 0 && squares[r][c - 1] !== squareunused) {
          hookmade = true;
        }

        if (lowcol === highcol && c < edge && squares[r][c + 1] !== squareunused) {
          hookmade = true;
        }
      }
    } // Check play to or from a tile (play through but not either side)


    if (lowrow === highrow && lowcol > 0 && snapshot.squares[lowrow][lowcol - 1] !== squareunused) {
      playthru = true;
    }

    if (lowrow === highrow && highcol < edge && snapshot.squares[lowrow][highcol + 1] !== squareunused) {
      playthru = true;
    }

    if (lowcol === highcol && lowrow > 0 && snapshot.squares[lowrow - 1][lowcol] !== squareunused) {
      playthru = true;
    }

    if (lowcol === highcol && highrow < edge && snapshot.squares[highrow + 1][lowcol] !== squareunused) {
      playthru = true;
    }

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
    let numrows = edge + 1;
    let numcols = edge + 1;
    let lowrow = numrows;
    let highrow = -1;
    let lowcol = numcols;
    let highcol = -1;
    let numcoords = currentcoords.length;

    for (var coord = 0; coord < numcoords; ++coord) {
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

    if (lowrow < highrow || numcoords === 1) {
      // tiles placed on difference rows so play is vertical, or single tile played
      let col = lowcol; // lowcol and highcol will have the same value
      // find the lowest row number of the main word, which may be lower than that of the first played tile

      let lowestrow = lowrow;

      while (lowestrow > 0 && squares[lowestrow - 1][col] !== squareunused) {
        lowestrow = lowestrow - 1;
      } // find the highest row number of the main word, which may be higher than that of the last played tile


      let highestrow = highrow;

      while (highestrow < edge && squares[highestrow + 1][col] !== squareunused) {
        highestrow = highestrow + 1;
      }

      wordstartcoord = boardColumnHeaders[col] + boardRowHeaders[lowestrow]; // vertical play coords start with col header

      for (var row = lowestrow; row <= highestrow; ++row) {
        mainword = mainword + squares[row][col];
        let coord = row + "-" + col;

        if (currentcoords.indexOf(coord) > -1) {
          // This tile was played, check for hooks
          let lowestcol = col;

          while (lowestcol > 0 && squares[row][lowestcol - 1] !== squareunused) {
            lowestcol = lowestcol - 1;
          }

          let highestcol = col;

          while (highestcol < edge && squares[row][highestcol + 1] !== squareunused) {
            highestcol = highestcol + 1;
          }

          if (lowestcol < highestcol) {
            // hook was made
            let extraword = "";

            for (var c = lowestcol; c <= highestcol; ++c) {
              extraword = extraword + squares[row][c];
            }

            extrawords = [...extrawords, extraword];
          }
        }
      }
    }

    if (mainword.length < 2) {
      // Horizontal play or single tile drop that cannot be a vertical play
      let row = lowrow; // lowrow and highrow will have the same value
      // find the lowest col number of the main word, which may be lower than that of the first played tile

      let lowestcol = lowcol;

      while (lowestcol > 0 && squares[row][lowestcol - 1] !== squareunused) {
        lowestcol = lowestcol - 1;
      } // find the highest col number of the main word, which may be higher than that of the last played tile


      let highestcol = highcol;

      while (highestcol < edge && squares[row][highestcol + 1] !== squareunused) {
        highestcol = highestcol + 1;
      }

      wordstartcoord = boardRowHeaders[row] + boardColumnHeaders[lowestcol]; // horizontal play coords start with row header

      mainword = ""; // In case we got a 1 letter mainword in the previous block

      extrawords = []; // Ditto

      for (var col = lowestcol; col <= highestcol; ++col) {
        mainword = mainword + squares[row][col];
        let coord = row + "-" + col;

        if (currentcoords.indexOf(coord) > -1) {
          // This tile was played, check for hooks
          let lowestrow = row;

          while (lowestrow > 0 && squares[lowestrow - 1][col] !== squareunused) {
            lowestrow = lowestrow - 1;
          }

          let highestrow = row;

          while (highestrow < edge && squares[highestrow + 1][col] !== squareunused) {
            highestrow = highestrow + 1;
          }

          if (lowestrow < highestrow) {
            // hook was made
            let extraword = "";

            for (var r = lowestrow; r <= highestrow; ++r) {
              extraword = extraword + squares[r][col];
            }

            extrawords = [...extrawords, extraword];
          }
        }
      }
    }

    playinfo = {
      mainword: mainword,
      extrawords: extrawords,
      pos: wordstartcoord
    };
    return playinfo;
  }

  function getRewindInfo() {
    // Must be called before you start setting new values for stuff

    /* Rewind info is everything you need to reverse the move that we do not already have in the new move variable:
        squares: says what tile is on what square
        usedby: says who played what tile on what square (affects styling)
        rack: players rack before move was made 
        tiles: tile pool before picking new tiles
        rescues: rescue count
    */
    let rewindInfo = {
      squares: [...snapshot.squares],
      usedby: [...snapshot.usedby],
      rack: whoseturn === "G" ? [...snapshot.gtiles] : [...snapshot.ptiles],
      tiles: [...tiles],
      rescues: rescues
    };
    return rewindInfo;
  }

  function allowUndoLastTurn() {
    if (!allowRewind) {
      setAllowRewind(true);
      client.send(JSON.stringify({
        gameid: gameid,
        // the id for the game
        nickname: nickname,
        // player nickname
        type: "pb",
        // prisonbreak
        func: "allowundo",
        // allow undo last turn
        racksize: racksize,
        // rack size option (lobby needs to know for when guards join game and they call Game)
        sender: prisonersOrGuards // who is allowing it

      }));
    }
  }

  function performRewind() {
    /* Rewind the last move and take it off the end of the move list */
    let numMoves = moves.length;
    let lastMove = moves[moves.length - 1];
    let newSquares = [...lastMove.rewindInfo.squares];
    let newUsedby = [...lastMove.rewindInfo.usedby];
    let newTiles = [...lastMove.rewindInfo.tiles];
    let newPtiles = lastMove.by === "P" ? [...lastMove.rewindInfo.rack] : [...ptiles];
    let newGtiles = lastMove.by === "G" ? [...lastMove.rewindInfo.rack] : [...gtiles];
    let newRescues = lastMove.rewindInfo.rescues;
    let newWhoseturn = lastMove.by; // Back to their turn

    let newMoves = [...moves];
    newMoves.splice(numMoves - 1, 1);
    let newSnapshot = {
      squares: [...newSquares],
      usedby: [...newUsedby],
      gtiles: [...newGtiles],
      ptiles: [...newPtiles]
    };
    putAtMoveStart();
    setTiles(newTiles);
    setPtiles(newPtiles);
    setGtiles(newGtiles);
    setSquares(newSquares);
    setUsedby(newUsedby);
    setWhoseturn(newWhoseturn);
    setRescues(newRescues);
    setMoves(newMoves);
    setSnapshot(newSnapshot); // Just send everything even though some could be hard coded in processMessage by opponent

    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      func: "undoturn",
      // undo last turn
      racksize: racksize,
      // rack size option (lobby needs to know for when guards join game and they call Game)
      sender: prisonersOrGuards,
      tiles: newTiles,
      // tile pool
      ptiles: newPtiles,
      // prisoners rack
      gtiles: newGtiles,
      // guards rack
      squares: newSquares,
      // revert to start of turn squares
      usedby: newUsedby,
      // revert to start of turn used by
      whoseturn: newWhoseturn,
      // swap never ends the game so go to opponent
      rescues: newRescues,
      // rescue count
      moves: newMoves,
      // a move was made
      snapshot: newSnapshot
    }));
  }

  const recallTiles = () => {
    setSquares([...snapshot.squares]);
    setUsedby([...snapshot.usedby]);
    setPtiles([...snapshot.ptiles]);
    setGtiles([...snapshot.gtiles]);
    setSelection(-1);
    setCurrentcoords([]);
    setRcd([-1, -1, nodirection]);
  };

  const prisonerPass = () => {
    let rewindInfo = getRewindInfo();
    let newMove = {
      by: "P",
      type: "PASS",
      rewindInfo: rewindInfo
    };
    let newMoves = [...moves, newMove];
    let newWhoseturn = isDoublePass(newMoves) ? "X" : "G"; // If both players pass then end the game by using "X"

    recallTiles(); // In case they put some tiles on the board before clicking Pass

    putAtMoveStart();
    setWhoseturn(newWhoseturn);
    setMoves(newMoves);
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      func: "ept",
      // end prisoners turn
      sender: prisonersOrGuards,
      squares: snapshot.squares,
      // revert to start of turn squares
      usedby: snapshot.usedby,
      // revert to start of turn used by
      ptiles: snapshot.ptiles,
      // prisoners rack did not change
      tiles: tiles,
      // tile pool did not change
      whoseturn: newWhoseturn,
      // may have ended the game
      racksize: racksize,
      // rack size option (lobby needs to know for when guards join game and they call Game)
      moves: newMoves,
      // a move was made
      rescues: rescues // no rescues on a pass

    }));
  };

  const guardsPass = () => {
    let rewindInfo = getRewindInfo();
    let newMove = {
      by: "G",
      type: "PASS",
      rewindInfo: rewindInfo
    };
    let newMoves = [...moves, newMove];
    let newWhoseturn = isDoublePass(newMoves) ? "X" : "P"; // If both players pass then end the game by using "X"

    recallTiles(); // In case they put some tiles on the board before clicking Pass

    putAtMoveStart();
    setWhoseturn(newWhoseturn);
    setMoves(newMoves);
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      func: "egt",
      // end guards turn
      sender: prisonersOrGuards,
      squares: snapshot.squares,
      // revert to start of turn squares
      usedby: snapshot.usedby,
      // revert to start of turn used by
      gtiles: snapshot.gtiles,
      // guards rack did not change
      tiles: tiles,
      // tile pool did not change
      whoseturn: newWhoseturn,
      // may have ended the game
      racksize: racksize,
      // rack size option (lobby needs to know for when guards join game and they call Game)
      moves: newMoves // a move was made

    }));
  };

  function isDoublePass(movelist) {
    let last = movelist.length - 1;
    let secondlast = last - 1;
    return secondlast > -1 && movelist[secondlast].type === "PASS" && movelist[last].type === "PASS";
  }

  const requestGameData = () => {
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      sender: prisonersOrGuards,
      whoseturn: whoseturn,
      // for lobby to pick up this message
      racksize: racksize,
      // rack size option (lobby needs to know for when guards join game and they call Game)
      func: "requestgamedata" // request game data

    }));
  };

  const handleKeyDown = event => {
    event.preventDefault();

    if (prisonersOrGuards !== whoseturn) {
      return;
    }

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

      if (newSelection > -1) {
        // Pressed letter is on the rack
        let row = rcd[0];
        let col = rcd[1];
        let dir = rcd[2];

        if (row > -1 && col > -1 && dir !== nodirection) {
          // row, col, dir are set to accept keystroke
          // Need to figure out next sqaure to auto-place a tile
          let newRcd = rcd;

          if (dir === "r") {
            // playing rightwards
            let newc = -1;

            for (var c = col + 1; c < edge + 1 && newc === -1; c++) {
              if (squares[row][c] === squareunused) {
                newc = c;
              }
            }

            if (newc === -1) {
              newRcd = [-1, -1, nodirection];
            } else {
              newRcd = [row, newc, "r"];
            }

            handleBoardSquareClick(row, col, newSelection, newRcd);
            setSelection(-1); // when they are typing they are not selecting rack tiles by clicking them on the rack

            return;
          }

          if (dir === "d") {
            // playing downwards
            let newr = -1;
            let numrows = racksize * 2 + 1;

            for (var r = row + 1; r < numrows && newr === -1; r++) {
              if (squares[r][col] === squareunused) {
                newr = r;
              }
            }

            if (newr === -1) {
              newRcd = [-1, -1, nodirection];
            } else {
              newRcd = [newr, col, "d"];
            }

            handleBoardSquareClick(row, col, newSelection, newRcd);
            setSelection(-1); // when they are typing they are not selecting rack tiles by clicking them on the rack

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
      let newRcd = [-1, -1, nodirection];
      let newSelection = selection;
      newCurrentcoords.splice(currentcoords.length - 1, 1);
      let row = parseInt(coord.split("-")[0]);
      let col = parseInt(coord.split("-")[1]);
      let returnedTile = squares[row][col];

      if (whoseturn === "P") {
        newPtiles.push(returnedTile);
        newSelection = newPtiles.length - 1;
      } else {
        newGtiles.push(returnedTile);
        newSelection = newGtiles.length - 1;
      }

      newUsedby[row][col] = usedbynoone;
      newSquares[row][col] = squareunused;
      let dir = rcd[2];

      if (dir !== nodirection) {
        // direction was set so keep it
        newRcd = [row, col, dir];

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
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "prisonbreak",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-display-container w3-teal topBarHeight",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-middle",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "myHeadingFont",
          children: "Prison Break"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1184,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1183,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-topleft w3-black topBarCorner commonFontFamily",
        children: ["Game id: ", gameid]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1186,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-bottomleft w3-orange topBarCorner commonFontFamily",
        children: ["Prisoners: ", prisonersOrGuards === "P" ? nickname : oppname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1189,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-topright w3-black topBarCorner commonFontFamily",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "../../",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "material-icons",
              "data-toggle": "tooltip",
              title: "Home",
              children: "home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1194,
              columnNumber: 18
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1194,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1193,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1192,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-bottomright w3-orange topBarCorner commonFontFamily",
        children: ["Guards: ", prisonersOrGuards === "P" ? oppname : nickname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1197,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1182,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col pbTileAndMovesOuter",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_unseenTilesSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
          tiles: tiles,
          othertiles: prisonersOrGuards === "P" ? gtiles : ptiles
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1203,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_movesSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
          moves: moves
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1204,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1202,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col pbPlayerOuterSection",
        children: prisonersOrGuards === "P" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_playerSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
          racktiles: ptiles,
          whoseturn: whoseturn,
          selection: selection,
          onClick: ti => handleRackTileClick(ti),
          onClickFinishTurn: () => endPrisonersTurn(),
          onClickTileRecall: () => recallTiles(),
          onClickTileExchange: () => swapPrisonersTiles(),
          onClickPassPlay: () => prisonerPass(),
          onClickUndoLastPlay: () => performRewind(),
          onClickAllowUndo: () => allowUndoLastTurn(),
          prisonersOrGuards: prisonersOrGuards,
          moves: moves,
          allowRewind: allowRewind
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1208,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_playerSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
          racktiles: gtiles,
          whoseturn: whoseturn,
          selection: selection,
          onClick: ti => handleRackTileClick(ti),
          onClickFinishTurn: () => endGuardsTurn(),
          onClickTileRecall: () => recallTiles(),
          onClickTileExchange: () => swapGuardsTiles(),
          onClickPassPlay: () => guardsPass(),
          onClickUndoLastPlay: () => performRewind(),
          onClickAllowUndo: () => allowUndoLastTurn(),
          prisonersOrGuards: prisonersOrGuards,
          moves: moves,
          allowRewind: allowRewind
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1224,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1206,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: prisonersOrGuards === whoseturn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          onKeyDownCapture: handleKeyDown,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_board__WEBPACK_IMPORTED_MODULE_4__["default"], {
            squares: squares,
            usedby: usedby,
            rcd: rcd,
            onClick: (ri, ci) => handleBoardSquareClick(ri, ci, -1, null),
            racksize: racksize
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1244,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1243,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_board__WEBPACK_IMPORTED_MODULE_4__["default"], {
            squares: squares,
            usedby: usedby,
            rcd: rcd,
            onClick: () => {},
            racksize: racksize
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1254,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1253,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1241,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowRescues, {
          rescues: rescues
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1265,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Chat, {
          gameid: gameid,
          client: client,
          nickname: nickname,
          msgs: chatmsgs,
          setMsgs: setChatmsgs,
          prisonersOrGuards: prisonersOrGuards
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1266,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1264,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1201,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-display-container w3-teal topBarHeight",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-middle commonFontFamily",
        children: whoseturn === "X" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Game Over!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1272,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: jokes[jokeindex]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1274,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1270,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1269,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1181,
    columnNumber: 7
  }, undefined);
};

_s2(Game, "Y0V4VEmTkPgz/FCjTGN3FHou4Ps=", true);

_c = Game;

const ShowRescues = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pbRescuesMade",
    children: ["Rescues made: ", props.rescues]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1284,
    columnNumber: 7
  }, undefined);
};

_c2 = ShowRescues;

const Chat = ({
  gameid,
  client,
  nickname,
  msgs,
  setMsgs,
  prisonersOrGuards
}) => {
  _s3();

  const {
    0: nextmsg,
    1: setNextmsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const handleKeyDown = event => {
    if (event.key === "Enter" && nextmsg.length > 0) {
      event.preventDefault();
      let newMsgs = [...msgs, {
        from: nickname,
        msg: nextmsg
      }];
      let sendmsg = nextmsg;
      setMsgs(newMsgs);
      setNextmsg('');
      client.send(JSON.stringify({
        gameid: gameid,
        // the id for the game
        nickname: nickname,
        // player nickname
        type: "pb",
        // prisonbreak
        func: "chat",
        // send chat message
        sender: prisonersOrGuards,
        // who sent it
        sendmsg: sendmsg // the message typed in the chat

      }));
      return;
    } // let chartest = /^[A-Za-z0-9 \.,\(\)\?:!'"]$/; // Allow letter, number, space, period, comma, round brackets, question mark, colon, exclamation mark, quote, double quote
    // if (event.key.match(chartest)) {
    //   let newNextmsg = nextmsg + event.key;
    //   setNextmsg(newNextmsg);
    // }


    if (event.key === "Backspace" && nextmsg.length > 0) {
      event.preventDefault();
      let newNextmsg = nextmsg.slice(0, nextmsg.length - 1);
      setNextmsg(newNextmsg);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "ScrollableChat",
    className: "pbChat",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      className: "pbChatTable",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: [msgs.map((value, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            className: "pbChatFrom",
            children: value.from
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1330,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            className: "pbChatMsg",
            children: value.msg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1331,
            columnNumber: 17
          }, undefined)]
        }, `ChatMessage${index}`, true, {
          fileName: _jsxFileName,
          lineNumber: 1329,
          columnNumber: 15
        }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            colSpan: "2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              className: nextmsg === "" ? "pbChatInputEmpty" : "pbChatInput",
              name: "nextmsgInputArea",
              value: nextmsg,
              onChange: e => {
                setNextmsg(e.target.value);
              },
              onKeyDownCapture: handleKeyDown,
              placeholder: "chat..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1336,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1335,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1334,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1327,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1326,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1325,
    columnNumber: 7
  }, undefined);
};

_s3(Chat, "PlpOat0wYANdTrVq2/HpQ7Z/6HY=");

_c3 = Chat;

const scrollToBottom = elementid => {
  const theElement = document.getElementById(elementid);
  theElement.scrollTop = theElement.scrollHeight;
};

/* harmony default export */ __webpack_exports__["default"] = (Game);

var _c, _c2, _c3;

$RefreshReg$(_c, "Game");
$RefreshReg$(_c2, "ShowRescues");
$RefreshReg$(_c3, "Chat");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvZ2FtZS5qcyJdLCJuYW1lcyI6WyJib2FyZENvbHVtbkhlYWRlcnMiLCJib2FyZFJvd0hlYWRlcnMiLCJtb3Zld2FpdHRpbWUiLCJqb2tlcyIsImluaXRpYWx0aWxlczQiLCJpbml0aWFsdGlsZXM1IiwiaW5pdGlhbHRpbGVzNiIsImluaXRpYWx0aWxlczciLCJzcXVhcmV1bnVzZWQiLCJ1c2VkYnlub29uZSIsIm5vZGlyZWN0aW9uIiwiR2FtZSIsImlzcmVqb2luIiwicHJpc29uZXJzT3JHdWFyZHMiLCJnYW1laWQiLCJuaWNrbmFtZSIsIndzbWVzc2FnZSIsImNsaWVudCIsInJhY2tzaXplIiwibWlkZGxlIiwiZWRnZSIsImluaXRpYWx0aWxlcyIsImluaXRpYWxzcXVhcmVzIiwiQXJyYXkiLCJmaWxsIiwiaW5pdGlhbHVzZWRieSIsInRpbGVzIiwic2V0VGlsZXMiLCJ1c2VTdGF0ZSIsInB0aWxlcyIsInNldFB0aWxlcyIsImd0aWxlcyIsInNldEd0aWxlcyIsInNxdWFyZXMiLCJzZXRTcXVhcmVzIiwidXNlZGJ5Iiwic2V0VXNlZGJ5Iiwic2VsZWN0aW9uIiwic2V0U2VsZWN0aW9uIiwid2hvc2V0dXJuIiwic2V0V2hvc2V0dXJuIiwiY3VycmVudGNvb3JkcyIsInNldEN1cnJlbnRjb29yZHMiLCJyZXNjdWVzIiwic2V0UmVzY3VlcyIsInJjZCIsInNldFJjZCIsIm1vdmVzIiwic2V0TW92ZXMiLCJzbmFwc2hvdCIsInNldFNuYXBzaG90Iiwiam9rZWluZGV4Iiwic2V0Sm9rZWluZGV4IiwiYWxsb3dSZXdpbmQiLCJzZXRBbGxvd1Jld2luZCIsIm9wcG5hbWUiLCJzZXRPcHBuYW1lIiwiY2hhdG1zZ3MiLCJzZXRDaGF0bXNncyIsInByZXZSZXNjdWVzIiwidXNlUHJldmlvdXMiLCJ2YWx1ZSIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJjIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwicGxheSIsIm5ld2ppIiwibGVuZ3RoIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInJlcXVlc3RHYW1lRGF0YSIsImNsZWFySW50ZXJ2YWwiLCJ0ZW1wUFRpbGVzIiwidGVtcEdUaWxlcyIsInRlbXBUaWxlcyIsInJhbmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwdXNoIiwic3BsaWNlIiwic29ydCIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsImZ1bmMiLCJzZW5kZXIiLCJtc2ciLCJwcm9jZXNzR2FtZU1lc3NhZ2UiLCJzY3JvbGxUb0JvdHRvbSIsInB1dEF0TW92ZVN0YXJ0IiwibWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwicGFyc2UiLCJuZXdDaGF0bXNncyIsImZyb20iLCJzZW5kbXNnIiwiaGFuZGxlQm9hcmRTcXVhcmVDbGljayIsInJpIiwiY2kiLCJuZXdTZWxlY3Rpb24iLCJuZXdSY2QiLCJuZXdTcXVhcmVzIiwibmV3VXNlZGJ5IiwibmV3UHRpbGVzIiwibmV3R3RpbGVzIiwibmV3Um93Iiwic3F1YXJldmFsdWUiLCJuZXdDdXJyZW50Y29vcmRzIiwiY29vcmQiLCJTdHJpbmciLCJjY2kiLCJpbmRleE9mIiwibmV3VXNlZGJ5Um93IiwibmV3RGlyZWN0aW9uIiwiaGFuZGxlUmFja1RpbGVDbGljayIsInRpbGVpbmRleCIsIm5ld3JhY2siLCJtb3ZlZnJvbSIsIm1vdmV0aWxlIiwibW92ZXRvIiwiZW5kUHJpc29uZXJzVHVybiIsImlzUGxheVZhbGlkIiwicmV3aW5kSW5mbyIsImdldFJld2luZEluZm8iLCJuZXdSZXNjdWVzIiwiZXNjYXBlaGF0Y2hlcyIsImkiLCJuZXdUaWxlcyIsIm5ld1dob3NldHVybiIsInBsYXlpbmZvIiwiZ2V0UGxheUluZm8iLCJuZXdNb3ZlIiwiYnkiLCJtYWlud29yZCIsImV4dHJhd29yZHMiLCJwb3MiLCJuZXdNb3ZlcyIsImVuZEd1YXJkc1R1cm4iLCJzbmFwc3F1YXJlcyIsInNuYXB1c2VkYnkiLCJzbmFwcHRpbGVzIiwic25hcGd0aWxlcyIsInN3YXBQcmlzb25lcnNUaWxlcyIsIndpbmRvdyIsImFsZXJ0Iiwic3dhcEd1YXJkc1RpbGVzIiwibnVtcm93cyIsIm51bWNvbHMiLCJsb3dyb3ciLCJoaWdocm93IiwibG93Y29sIiwiaGlnaGNvbCIsInIiLCJwbGF5dGhydSIsImhvb2ttYWRlIiwid29yZHN0YXJ0Y29vcmQiLCJudW1jb29yZHMiLCJyb3ciLCJwYXJzZUludCIsInNwbGl0IiwiY29sIiwibG93ZXN0cm93IiwiaGlnaGVzdHJvdyIsImxvd2VzdGNvbCIsImhpZ2hlc3Rjb2wiLCJleHRyYXdvcmQiLCJyYWNrIiwiYWxsb3dVbmRvTGFzdFR1cm4iLCJwZXJmb3JtUmV3aW5kIiwibnVtTW92ZXMiLCJsYXN0TW92ZSIsIm5ld1NuYXBzaG90IiwicmVjYWxsVGlsZXMiLCJwcmlzb25lclBhc3MiLCJpc0RvdWJsZVBhc3MiLCJndWFyZHNQYXNzIiwibW92ZWxpc3QiLCJsYXN0Iiwic2Vjb25kbGFzdCIsImhhbmRsZUtleURvd24iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwia2V5IiwibGV0dGVydGVzdCIsIm1hdGNoIiwibGV0dGVyIiwidG9VcHBlckNhc2UiLCJkaXIiLCJuZXdjIiwibmV3ciIsInJldHVybmVkVGlsZSIsInRpIiwiU2hvd1Jlc2N1ZXMiLCJwcm9wcyIsIkNoYXQiLCJtc2dzIiwic2V0TXNncyIsIm5leHRtc2ciLCJzZXROZXh0bXNnIiwibmV3TXNncyIsIm5ld05leHRtc2ciLCJzbGljZSIsIm1hcCIsImluZGV4IiwiZSIsInRhcmdldCIsImVsZW1lbnRpZCIsInRoZUVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsa0JBQWtCLEdBQUcsQ0FBQyxHQUFELEVBQUssR0FBTCxFQUFTLEdBQVQsRUFBYSxHQUFiLEVBQWlCLEdBQWpCLEVBQXFCLEdBQXJCLEVBQXlCLEdBQXpCLEVBQTZCLEdBQTdCLEVBQWlDLEdBQWpDLEVBQXFDLEdBQXJDLEVBQXlDLEdBQXpDLEVBQTZDLEdBQTdDLEVBQWlELEdBQWpELEVBQXFELEdBQXJELEVBQXlELEdBQXpELENBQTNCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLENBQUMsR0FBRCxFQUFLLEdBQUwsRUFBUyxHQUFULEVBQWEsR0FBYixFQUFpQixHQUFqQixFQUFxQixHQUFyQixFQUF5QixHQUF6QixFQUE2QixHQUE3QixFQUFpQyxHQUFqQyxFQUFxQyxJQUFyQyxFQUEwQyxJQUExQyxFQUErQyxJQUEvQyxFQUFvRCxJQUFwRCxFQUF5RCxJQUF6RCxFQUE4RCxJQUE5RCxDQUF4QjtBQUNBLE1BQU1DLFlBQVksR0FBRyxLQUFyQixDLENBQTRCOztBQUM1QixNQUFNQyxLQUFLLEdBQUcsQ0FDWixnQkFBZ0Isb0JBQWhCLEdBQXVDLG1CQUF2QyxHQUE0RCxvQkFBNUQsR0FBbUYsR0FEdkUsRUFFWiwrREFGWSxFQUdaLDZEQUhZLEVBSVosa0VBSlksRUFLWiw2RUFMWSxFQU1aLGdFQU5ZLENBQWQ7QUFRQSxNQUFNQyxhQUFhLEdBQUcsQ0FDcEIsR0FEb0IsRUFDZCxHQURjLEVBQ1IsR0FEUSxFQUVwQixHQUZvQixFQUdwQixHQUhvQixFQUlwQixHQUpvQixFQUtwQixHQUxvQixFQUtkLEdBTGMsRUFLUixHQUxRLEVBS0YsR0FMRSxFQU1wQixHQU5vQixFQU9wQixHQVBvQixFQVFwQixHQVJvQixFQVNwQixHQVRvQixFQVNkLEdBVGMsRUFTUixHQVRRLEVBVXBCLEdBVm9CLEVBV3BCLEdBWG9CLEVBWXBCLEdBWm9CLEVBYXBCLEdBYm9CLEVBY3BCLEdBZG9CLEVBY2QsR0FkYyxFQWVwQixHQWZvQixFQWVkLEdBZmMsRUFlUixHQWZRLEVBZ0JwQixHQWhCb0IsRUFpQnBCLEdBakJvQixFQWtCcEIsR0FsQm9CLEVBa0JkLEdBbEJjLEVBbUJwQixHQW5Cb0IsRUFvQnBCLEdBcEJvQixFQW9CZCxHQXBCYyxFQXFCcEIsR0FyQm9CLEVBc0JwQixHQXRCb0IsRUF1QnBCLEdBdkJvQixFQXdCcEIsR0F4Qm9CLEVBeUJwQixHQXpCb0IsRUEwQnBCLEdBMUJvQixFQTJCcEIsR0EzQm9CLEVBMkJkLEdBM0JjLENBQXRCLEMsQ0E0Qkc7O0FBQ0gsTUFBTUMsYUFBYSxHQUFHLENBQ3BCLEdBRG9CLEVBQ2QsR0FEYyxFQUNSLEdBRFEsRUFDRixHQURFLEVBQ0ksR0FESixFQUVwQixHQUZvQixFQUdwQixHQUhvQixFQUlwQixHQUpvQixFQUlkLEdBSmMsRUFLcEIsR0FMb0IsRUFLZCxHQUxjLEVBS1IsR0FMUSxFQUtGLEdBTEUsRUFLSSxHQUxKLEVBS1UsR0FMVixFQU1wQixHQU5vQixFQU9wQixHQVBvQixFQVFwQixHQVJvQixFQVNwQixHQVRvQixFQVNkLEdBVGMsRUFTUixHQVRRLEVBU0YsR0FURSxFQVNJLEdBVEosRUFVcEIsR0FWb0IsRUFXcEIsR0FYb0IsRUFZcEIsR0Fab0IsRUFZZCxHQVpjLEVBYXBCLEdBYm9CLEVBY3BCLEdBZG9CLEVBY2QsR0FkYyxFQWNSLEdBZFEsRUFlcEIsR0Fmb0IsRUFlZCxHQWZjLEVBZVIsR0FmUSxFQWVGLEdBZkUsRUFnQnBCLEdBaEJvQixFQWlCcEIsR0FqQm9CLEVBa0JwQixHQWxCb0IsRUFrQmQsR0FsQmMsRUFrQlIsR0FsQlEsRUFtQnBCLEdBbkJvQixFQW1CZCxHQW5CYyxFQW9CcEIsR0FwQm9CLEVBb0JkLEdBcEJjLEVBb0JSLEdBcEJRLEVBcUJwQixHQXJCb0IsRUFzQnBCLEdBdEJvQixFQXVCcEIsR0F2Qm9CLEVBd0JwQixHQXhCb0IsRUF5QnBCLEdBekJvQixFQTBCcEIsR0ExQm9CLEVBMkJwQixHQTNCb0IsRUEyQmQsR0EzQmMsQ0FBdEIsQyxDQTRCRzs7QUFDSCxNQUFNQyxhQUFhLEdBQUcsQ0FDcEIsR0FEb0IsRUFDZCxHQURjLEVBQ1IsR0FEUSxFQUNGLEdBREUsRUFDSSxHQURKLEVBQ1UsR0FEVixFQUNnQixHQURoQixFQUVwQixHQUZvQixFQUVkLEdBRmMsRUFHcEIsR0FIb0IsRUFHZCxHQUhjLEVBSXBCLEdBSm9CLEVBSWQsR0FKYyxFQUlSLEdBSlEsRUFLcEIsR0FMb0IsRUFLZCxHQUxjLEVBS1IsR0FMUSxFQUtGLEdBTEUsRUFLSSxHQUxKLEVBS1UsR0FMVixFQUtnQixHQUxoQixFQUtzQixHQUx0QixFQUs0QixHQUw1QixFQU1wQixHQU5vQixFQU9wQixHQVBvQixFQU9kLEdBUGMsRUFRcEIsR0FSb0IsRUFRZCxHQVJjLEVBU3BCLEdBVG9CLEVBU2QsR0FUYyxFQVNSLEdBVFEsRUFTRixHQVRFLEVBU0ksR0FUSixFQVNVLEdBVFYsRUFTZ0IsR0FUaEIsRUFVcEIsR0FWb0IsRUFXcEIsR0FYb0IsRUFZcEIsR0Fab0IsRUFZZCxHQVpjLEVBWVIsR0FaUSxFQWFwQixHQWJvQixFQWFkLEdBYmMsRUFjcEIsR0Fkb0IsRUFjZCxHQWRjLEVBY1IsR0FkUSxFQWNGLEdBZEUsRUFlcEIsR0Fmb0IsRUFlZCxHQWZjLEVBZVIsR0FmUSxFQWVGLEdBZkUsRUFlSSxHQWZKLEVBZVUsR0FmVixFQWdCcEIsR0FoQm9CLEVBZ0JkLEdBaEJjLEVBaUJwQixHQWpCb0IsRUFrQnBCLEdBbEJvQixFQWtCZCxHQWxCYyxFQWtCUixHQWxCUSxFQWtCRixHQWxCRSxFQWtCSSxHQWxCSixFQW1CcEIsR0FuQm9CLEVBbUJkLEdBbkJjLEVBbUJSLEdBbkJRLEVBb0JwQixHQXBCb0IsRUFvQmQsR0FwQmMsRUFvQlIsR0FwQlEsRUFvQkYsR0FwQkUsRUFxQnBCLEdBckJvQixFQXFCZCxHQXJCYyxFQXFCUixHQXJCUSxFQXNCcEIsR0F0Qm9CLEVBdUJwQixHQXZCb0IsRUF3QnBCLEdBeEJvQixFQXlCcEIsR0F6Qm9CLEVBMEJwQixHQTFCb0IsRUEyQnBCLEdBM0JvQixFQTJCZCxHQTNCYyxDQUF0QixDLENBNEJHOztBQUNILE1BQU1DLGFBQWEsR0FBRyxDQUNwQixHQURvQixFQUNkLEdBRGMsRUFDUixHQURRLEVBQ0YsR0FERSxFQUNJLEdBREosRUFDVSxHQURWLEVBQ2dCLEdBRGhCLEVBQ3NCLEdBRHRCLEVBQzRCLEdBRDVCLEVBRXBCLEdBRm9CLEVBRWQsR0FGYyxFQUdwQixHQUhvQixFQUdkLEdBSGMsRUFJcEIsR0FKb0IsRUFJZCxHQUpjLEVBSVIsR0FKUSxFQUlGLEdBSkUsRUFLcEIsR0FMb0IsRUFLZCxHQUxjLEVBS1IsR0FMUSxFQUtGLEdBTEUsRUFLSSxHQUxKLEVBS1UsR0FMVixFQUtnQixHQUxoQixFQUtzQixHQUx0QixFQUs0QixHQUw1QixFQUtrQyxHQUxsQyxFQUt3QyxHQUx4QyxFQUs4QyxHQUw5QyxFQU1wQixHQU5vQixFQU1kLEdBTmMsRUFPcEIsR0FQb0IsRUFPZCxHQVBjLEVBT1IsR0FQUSxFQVFwQixHQVJvQixFQVFkLEdBUmMsRUFTcEIsR0FUb0IsRUFTZCxHQVRjLEVBU1IsR0FUUSxFQVNGLEdBVEUsRUFTSSxHQVRKLEVBU1UsR0FUVixFQVNnQixHQVRoQixFQVNzQixHQVR0QixFQVM0QixHQVQ1QixFQVVwQixHQVZvQixFQVdwQixHQVhvQixFQVlwQixHQVpvQixFQVlkLEdBWmMsRUFZUixHQVpRLEVBWUYsR0FaRSxFQWFwQixHQWJvQixFQWFkLEdBYmMsRUFjcEIsR0Fkb0IsRUFjZCxHQWRjLEVBY1IsR0FkUSxFQWNGLEdBZEUsRUFjSSxHQWRKLEVBY1UsR0FkVixFQWVwQixHQWZvQixFQWVkLEdBZmMsRUFlUixHQWZRLEVBZUYsR0FmRSxFQWVJLEdBZkosRUFlVSxHQWZWLEVBZWdCLEdBZmhCLEVBZXNCLEdBZnRCLEVBZ0JwQixHQWhCb0IsRUFnQmQsR0FoQmMsRUFpQnBCLEdBakJvQixFQWtCcEIsR0FsQm9CLEVBa0JkLEdBbEJjLEVBa0JSLEdBbEJRLEVBa0JGLEdBbEJFLEVBa0JJLEdBbEJKLEVBa0JVLEdBbEJWLEVBbUJwQixHQW5Cb0IsRUFtQmQsR0FuQmMsRUFtQlIsR0FuQlEsRUFtQkYsR0FuQkUsRUFvQnBCLEdBcEJvQixFQW9CZCxHQXBCYyxFQW9CUixHQXBCUSxFQW9CRixHQXBCRSxFQW9CSSxHQXBCSixFQW9CVSxHQXBCVixFQXFCcEIsR0FyQm9CLEVBcUJkLEdBckJjLEVBcUJSLEdBckJRLEVBcUJGLEdBckJFLEVBc0JwQixHQXRCb0IsRUFzQmQsR0F0QmMsRUF1QnBCLEdBdkJvQixFQXVCZCxHQXZCYyxFQXdCcEIsR0F4Qm9CLEVBeUJwQixHQXpCb0IsRUF5QmQsR0F6QmMsRUEwQnBCLEdBMUJvQixFQTJCcEIsR0EzQm9CLEVBMkJkLEdBM0JjLENBQXRCLEMsQ0E0Qkc7O0FBQ0gsTUFBTUMsWUFBWSxHQUFHLEdBQXJCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLEVBQXBCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLEVBQXBCOztBQUdBLE1BQU1DLElBQUksR0FBRyxDQUFDO0FBQUNDLFVBQUQ7QUFDUkMsbUJBRFE7QUFFUkMsUUFGUTtBQUdSQyxVQUhRO0FBSVJDLFdBSlE7QUFLUkMsUUFMUTtBQU1SQyxVQUFRLEdBQUMsQ0FORCxDQU1HOztBQU5ILENBQUQsS0FPSDtBQUFBOztBQUFBOztBQUNOLFFBQU1DLE1BQU0sR0FBR0QsUUFBZixDQURNLENBQ21COztBQUN6QixRQUFNRSxJQUFJLEdBQUdGLFFBQVEsR0FBRyxDQUF4QixDQUZNLENBRXFCOztBQUMzQixRQUFNRyxZQUFZLEdBQUdILFFBQVEsS0FBSyxDQUFiLEdBQWlCWixhQUFqQixHQUFpQ1ksUUFBUSxLQUFLLENBQWIsR0FBaUJYLGFBQWpCLEdBQWlDVyxRQUFRLEtBQUssQ0FBYixHQUFpQmIsYUFBakIsR0FBaUNELGFBQXhIO0FBQ0EsUUFBTWtCLGNBQWMsR0FBR0MsS0FBSyxDQUFDSCxJQUFJLEdBQUMsQ0FBTixDQUFMLENBQWNJLElBQWQsQ0FBbUJELEtBQUssQ0FBQ0gsSUFBSSxHQUFDLENBQU4sQ0FBTCxDQUFjSSxJQUFkLENBQW1CaEIsWUFBbkIsQ0FBbkIsQ0FBdkI7QUFDQSxRQUFNaUIsYUFBYSxHQUFHRixLQUFLLENBQUNILElBQUksR0FBQyxDQUFOLENBQUwsQ0FBY0ksSUFBZCxDQUFtQkQsS0FBSyxDQUFDSCxJQUFJLEdBQUMsQ0FBTixDQUFMLENBQWNJLElBQWQsQ0FBbUJmLFdBQW5CLENBQW5CLENBQXRCO0FBQ0EsUUFBTTtBQUFBLE9BQUNpQixLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxDQUFDLEdBQUdQLFlBQUosQ0FBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDUSxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkYsc0RBQVEsQ0FBQyxFQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCSixzREFBUSxDQUFDLEVBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JOLHNEQUFRLENBQUMsQ0FBQyxHQUFHTixjQUFKLENBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ2EsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JSLHNEQUFRLENBQUMsQ0FBQyxHQUFHSCxhQUFKLENBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ1ksU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJWLHNEQUFRLENBQUMsQ0FBQyxDQUFGLENBQTFDLENBWE0sQ0FXMEM7O0FBQ2hELFFBQU07QUFBQSxPQUFDVyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0Qlosc0RBQVEsQ0FBQyxHQUFELENBQTFDLENBWk0sQ0FZMkM7O0FBQ2pELFFBQU07QUFBQSxPQUFDYSxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DZCxzREFBUSxDQUFDLEVBQUQsQ0FBbEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ2UsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JoQixzREFBUSxDQUFDLENBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ2lCLEdBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWdCbEIsc0RBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBRixFQUFJLENBQUMsQ0FBTCxFQUFPbEIsV0FBUCxDQUFELENBQTlCO0FBQ0EsUUFBTTtBQUFBLE9BQUNxQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQnBCLHNEQUFRLENBQUMsRUFBRCxDQUFsQyxDQWhCTSxDQWdCa0M7O0FBQ3hDLFFBQU07QUFBQSxPQUFDcUIsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJ0QixzREFBUSxDQUFDO0FBQ3ZDSyxXQUFPLEVBQUUsQ0FBQyxHQUFHWCxjQUFKLENBRDhCO0FBRXZDYSxVQUFNLEVBQUUsQ0FBQyxHQUFHVixhQUFKLENBRitCO0FBR3ZDSSxVQUFNLEVBQUUsRUFIK0I7QUFJdkNFLFVBQU0sRUFBRTtBQUorQixHQUFELENBQXhDO0FBTUEsUUFBTTtBQUFBLE9BQUNvQixTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QnhCLHNEQUFRLENBQUMsQ0FBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDeUIsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0MxQixzREFBUSxDQUFDLEtBQUQsQ0FBOUM7QUFDQSxRQUFNO0FBQUEsT0FBQzJCLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCNUIsc0RBQVEsQ0FBQyxFQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUM2QixRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQjlCLHNEQUFRLENBQUMsRUFBRCxDQUF4QyxDQTFCTSxDQTJCTjs7QUFDQSxRQUFNK0IsV0FBVyxHQUFHQyxXQUFXLENBQUNqQixPQUFELENBQS9COztBQUNBLFdBQVNpQixXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUFBOztBQUMxQixVQUFNQyxHQUFHLEdBQUdDLG9EQUFNLEVBQWxCO0FBQ0FDLDJEQUFTLENBQUMsTUFBTTtBQUNkRixTQUFHLENBQUNHLE9BQUosR0FBY0osS0FBZDtBQUNELEtBRlEsQ0FBVDtBQUdBLFdBQU9DLEdBQUcsQ0FBQ0csT0FBWDtBQUNEOztBQW5DSyxLQTZCR0wsV0E3Qkg7O0FBb0NOSSx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJckIsT0FBTyxHQUFHZ0IsV0FBZCxFQUEyQjtBQUN2QixVQUFJTyxDQUFDLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFSO0FBQ0FGLE9BQUMsQ0FBQ0csR0FBRixHQUFRLHlDQUFSO0FBQ0FILE9BQUMsQ0FBQ0ksSUFBRixHQUh1QixDQUl6QjtBQUNEO0FBQ0YsR0FQUSxFQU9OLENBQUMzQixPQUFELENBUE0sQ0FBVCxDQXBDTSxDQTJDUzs7QUFDZnFCLHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUlPLEtBQUssR0FBR3BCLFNBQVMsR0FBRyxDQUF4Qjs7QUFDQSxRQUFJb0IsS0FBSyxJQUFJcEUsS0FBSyxDQUFDcUUsTUFBbkIsRUFBMkI7QUFDekJELFdBQUssR0FBRyxDQUFSO0FBQ0Q7O0FBQ0RuQixnQkFBWSxDQUFDbUIsS0FBRCxDQUFaO0FBQ0EsVUFBTUUsUUFBUSxHQUFHQyxXQUFXLENBQUMsTUFBTTtBQUNqQztBQUNBLFVBQUk3RCxpQkFBaUIsS0FBSzBCLFNBQXRCLElBQW1DQSxTQUFTLEtBQUssR0FBckQsRUFBMEQ7QUFDeEQ7QUFDQW9DLHVCQUFlLEdBRnlDLENBRXJDO0FBQ3BCO0FBQ0YsS0FOMkIsRUFNekJ6RSxZQU55QixDQUE1QixDQU5jLENBWUk7O0FBQ2xCLFdBQU8sTUFBTTBFLGFBQWEsQ0FBQ0gsUUFBRCxDQUExQjtBQUNELEdBZFEsRUFjTixDQUFDbEMsU0FBRCxDQWRNLENBQVQsQ0E1Q00sQ0EwRFc7O0FBRWpCeUIseURBQVMsQ0FBQyxNQUFNO0FBQUU7QUFDaEIsUUFBSSxDQUFDcEQsUUFBRCxJQUFhQyxpQkFBaUIsS0FBSyxHQUF2QyxFQUE0QztBQUFFO0FBQzVDLFVBQUlnRSxVQUFVLEdBQUcsRUFBakI7QUFDQSxVQUFJQyxVQUFVLEdBQUcsRUFBakI7QUFDQSxVQUFJQyxTQUFTLEdBQUcsQ0FBQyxHQUFHMUQsWUFBSixDQUFoQjs7QUFDQSxhQUFPd0QsVUFBVSxDQUFDTCxNQUFYLEdBQW9CdEQsUUFBM0IsRUFBcUM7QUFDbkMsWUFBSThELElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkosU0FBUyxDQUFDUCxNQUFyQyxDQUFYO0FBQ0FLLGtCQUFVLENBQUNPLElBQVgsQ0FBZ0JMLFNBQVMsQ0FBQ0MsSUFBRCxDQUF6QjtBQUNBRCxpQkFBUyxDQUFDTSxNQUFWLENBQWlCTCxJQUFqQixFQUF1QixDQUF2QjtBQUNBQSxZQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JKLFNBQVMsQ0FBQ1AsTUFBckMsQ0FBUDtBQUNBTSxrQkFBVSxDQUFDTSxJQUFYLENBQWdCTCxTQUFTLENBQUNDLElBQUQsQ0FBekI7QUFDQUQsaUJBQVMsQ0FBQ00sTUFBVixDQUFpQkwsSUFBakIsRUFBdUIsQ0FBdkI7QUFDRDs7QUFDREgsZ0JBQVUsQ0FBQ1MsSUFBWDtBQUNBUixnQkFBVSxDQUFDUSxJQUFYO0FBQ0F0RCxlQUFTLENBQUM4QyxVQUFELENBQVQ7QUFDQWhELGVBQVMsQ0FBQytDLFVBQUQsQ0FBVDtBQUNBbEQsY0FBUSxDQUFDb0QsU0FBRCxDQUFSO0FBQ0E3QixpQkFBVyxDQUFDO0FBQ1ZqQixlQUFPLEVBQUUsQ0FBQyxHQUFHWCxjQUFKLENBREM7QUFFVmEsY0FBTSxFQUFFLENBQUMsR0FBR1YsYUFBSixDQUZFO0FBR1ZJLGNBQU0sRUFBRSxDQUFDLEdBQUdnRCxVQUFKLENBSEU7QUFJVjlDLGNBQU0sRUFBRSxDQUFDLEdBQUcrQyxVQUFKO0FBSkUsT0FBRCxDQUFYO0FBTUE3RCxZQUFNLENBQUNzRSxJQUFQLENBQ0VDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ2JDLFlBQUksRUFBRSxJQURPO0FBRWJDLFlBQUksRUFBRSxPQUZPO0FBR2JDLGNBQU0sRUFBRS9FLGlCQUhLO0FBSWJDLGNBQU0sRUFBRUEsTUFKSztBQUtiQyxnQkFBUSxFQUFFQSxRQUxHO0FBS087QUFDcEJ3QixpQkFBUyxFQUFFQSxTQU5FO0FBT2JyQixnQkFBUSxFQUFFQSxRQVBHLENBT007O0FBUE4sT0FBZixDQURGO0FBV0QsS0FsQ0QsTUFvQ0E7QUFDRTtBQUNBLFVBQUk7QUFDRkQsY0FBTSxDQUFDc0UsSUFBUCxDQUNFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNiM0UsZ0JBQU0sRUFBRUEsTUFESztBQUNHO0FBQ2hCQyxrQkFBUSxFQUFFQSxRQUZHO0FBRU87QUFDcEIyRSxjQUFJLEVBQUUsSUFITztBQUdEO0FBQ1pDLGNBQUksRUFBRSxpQkFKTztBQUlZO0FBQ3pCQyxnQkFBTSxFQUFFL0U7QUFMSyxTQUFmLENBREY7QUFRRCxPQVRELENBVUEsTUFBTSxDQUFFO0FBQ1Q7QUFDRixHQW5EUSxFQW1ETixFQW5ETSxDQUFUO0FBb0RBbUQseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSTZCLEdBQUcsR0FBRzdFLFNBQVY7QUFDQSxRQUFJNkUsR0FBRyxLQUFLLEVBQVosRUFBZ0JDLGtCQUFrQixDQUFDRCxHQUFELENBQWxCO0FBQ2pCLEdBSFEsRUFHUCxDQUFDN0UsU0FBRCxDQUhPLENBQVQ7QUFJQWdELHlEQUFTLENBQUMsTUFBTTtBQUNkK0Isa0JBQWMsQ0FBQyxpQkFBRCxDQUFkO0FBQ0QsR0FGUSxFQUVQLENBQUNoRCxLQUFELENBRk8sQ0FBVDtBQUdBaUIseURBQVMsQ0FBQyxNQUFNO0FBQ2QrQixrQkFBYyxDQUFDLGdCQUFELENBQWQ7QUFDRCxHQUZRLEVBRVAsQ0FBQ3RDLFFBQUQsQ0FGTyxDQUFUOztBQUlBLFdBQVN1QyxjQUFULEdBQTBCO0FBQ3hCMUQsZ0JBQVksQ0FBQyxDQUFDLENBQUYsQ0FBWjtBQUNBZ0Isa0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDQVIsVUFBTSxDQUFDLENBQUMsQ0FBRixFQUFJLENBQUMsQ0FBTCxFQUFPcEMsV0FBUCxDQUFOO0FBQ0FnQyxvQkFBZ0IsQ0FBQyxFQUFELENBQWhCO0FBQ0Q7O0FBRUQsV0FBU29ELGtCQUFULENBQTRCRyxPQUE1QixFQUFxQztBQUNuQyxRQUFJQyxXQUFXLEdBQUdWLElBQUksQ0FBQ1csS0FBTCxDQUFXRixPQUFYLENBQWxCOztBQUNBLFFBQUlDLFdBQVcsQ0FBQ1IsSUFBWixLQUFxQixVQUF6QixFQUFxQztBQUNuQ3pFLFlBQU0sQ0FBQ3NFLElBQVAsQ0FDRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDYkMsWUFBSSxFQUFFLElBRE87QUFFYkMsWUFBSSxFQUFFLE9BRk87QUFHYkMsY0FBTSxFQUFFL0UsaUJBSEs7QUFJYkMsY0FBTSxFQUFFQSxNQUpLO0FBS2JDLGdCQUFRLEVBQUVBLFFBTEc7QUFLTztBQUNwQndCLGlCQUFTLEVBQUVBLFNBTkU7QUFPYnJCLGdCQUFRLEVBQUVBLFFBUEcsQ0FPTTs7QUFQTixPQUFmLENBREY7QUFXRCxLQVpELE1BYUssSUFBSWdGLFdBQVcsQ0FBQ3BGLE1BQVosS0FBdUJBLE1BQXZCLElBQWlDb0YsV0FBVyxDQUFDUixJQUFaLEtBQXFCLElBQTFELEVBQWdFO0FBQUU7QUFDckUsVUFBSVEsV0FBVyxDQUFDTixNQUFaLElBQXNCL0UsaUJBQXRCLElBQTJDMEMsT0FBTyxLQUFLLEVBQXZELElBQTZEMkMsV0FBVyxDQUFDbkYsUUFBekUsSUFBcUZtRixXQUFXLENBQUNuRixRQUFaLENBQXFCeUQsTUFBckIsR0FBOEIsQ0FBdkgsRUFBMEg7QUFDeEg7QUFDQWhCLGtCQUFVLENBQUMwQyxXQUFXLENBQUNuRixRQUFiLENBQVY7QUFDRDs7QUFDRCxVQUFJbUYsV0FBVyxDQUFDUCxJQUFaLEtBQXFCLGlCQUFyQixJQUEwQ08sV0FBVyxDQUFDTixNQUFaLEtBQXVCL0UsaUJBQXJFLEVBQXdGO0FBQUU7QUFDeEZJLGNBQU0sQ0FBQ3NFLElBQVAsQ0FDRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDYjNFLGdCQUFNLEVBQUVBLE1BREs7QUFDRztBQUNoQkMsa0JBQVEsRUFBRUEsUUFGRztBQUVPO0FBQ3BCMkUsY0FBSSxFQUFFLElBSE87QUFHRDtBQUNaQyxjQUFJLEVBQUUsaUJBSk87QUFJWTtBQUN6QkMsZ0JBQU0sRUFBRS9FLGlCQUxLO0FBTWJhLGVBQUssRUFBRUEsS0FOTTtBQU9iTyxpQkFBTyxFQUFFQSxPQVBJO0FBUWJKLGdCQUFNLEVBQUVBLE1BUks7QUFTYkUsZ0JBQU0sRUFBRUEsTUFUSztBQVViSSxnQkFBTSxFQUFFQSxNQVZLO0FBV2JJLG1CQUFTLEVBQUVBLFNBWEU7QUFZYlUsa0JBQVEsRUFBRUEsUUFaRztBQWFiRixlQUFLLEVBQUVBLEtBYk07QUFjYkosaUJBQU8sRUFBRUEsT0FkSTtBQWViekIsa0JBQVEsRUFBRUEsUUFmRztBQWVPO0FBQ3BCbUMscUJBQVcsRUFBRUE7QUFoQkEsU0FBZixDQURGO0FBb0JEOztBQUNELFVBQUk2QyxXQUFXLENBQUNQLElBQVosS0FBcUIsaUJBQXJCLElBQTBDTyxXQUFXLENBQUNOLE1BQVosS0FBdUIvRSxpQkFBckUsRUFBd0Y7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJcUYsV0FBVyxDQUFDbkQsS0FBWixDQUFrQnlCLE1BQWxCLEtBQTZCekIsS0FBSyxDQUFDeUIsTUFBbkMsSUFDRTBCLFdBQVcsQ0FBQ3hFLEtBQVosQ0FBa0I4QyxNQUFsQixLQUE2QjlDLEtBQUssQ0FBQzhDLE1BRHJDLElBRUczRCxpQkFBaUIsS0FBSyxHQUF0QixJQUE2QmtCLE1BQU0sQ0FBQ3lDLE1BQVAsS0FBa0IsQ0FBL0MsSUFBb0QvQixhQUFhLENBQUMrQixNQUFkLEtBQXlCLENBRmhGLElBR0czRCxpQkFBaUIsS0FBSyxHQUF0QixJQUE2QmdCLE1BQU0sQ0FBQzJDLE1BQVAsS0FBa0IsQ0FBL0MsSUFBb0QvQixhQUFhLENBQUMrQixNQUFkLEtBQXlCLENBSHBGLENBR3VGO0FBSHZGLFVBSUs7QUFDSDdDLG9CQUFRLENBQUN1RSxXQUFXLENBQUN4RSxLQUFiLENBQVI7QUFDQVEsc0JBQVUsQ0FBQ2dFLFdBQVcsQ0FBQ2pFLE9BQWIsQ0FBVjtBQUNBSCxxQkFBUyxDQUFDb0UsV0FBVyxDQUFDckUsTUFBYixDQUFUO0FBQ0FHLHFCQUFTLENBQUNrRSxXQUFXLENBQUNuRSxNQUFiLENBQVQ7QUFDQUsscUJBQVMsQ0FBQzhELFdBQVcsQ0FBQy9ELE1BQWIsQ0FBVDtBQUNBSyx3QkFBWSxDQUFDMEQsV0FBVyxDQUFDM0QsU0FBYixDQUFaO0FBQ0FXLHVCQUFXLENBQUNnRCxXQUFXLENBQUNqRCxRQUFiLENBQVg7QUFDQUQsb0JBQVEsQ0FBQ2tELFdBQVcsQ0FBQ25ELEtBQWIsQ0FBUjtBQUNBSCxzQkFBVSxDQUFDc0QsV0FBVyxDQUFDdkQsT0FBYixDQUFWO0FBQ0FXLDBCQUFjLENBQUM0QyxXQUFXLENBQUM3QyxXQUFiLENBQWQ7QUFDRDtBQUNGOztBQUNELFVBQUk2QyxXQUFXLENBQUNQLElBQVosS0FBcUIsS0FBckIsSUFBOEI5RSxpQkFBaUIsS0FBSyxHQUF4RCxFQUE2RDtBQUFFO0FBQzdEbUYsc0JBQWM7QUFDZHhELG9CQUFZLENBQUMwRCxXQUFXLENBQUMzRCxTQUFiLENBQVo7QUFDQUwsa0JBQVUsQ0FBQ2dFLFdBQVcsQ0FBQ2pFLE9BQWIsQ0FBVjtBQUNBRyxpQkFBUyxDQUFDOEQsV0FBVyxDQUFDL0QsTUFBYixDQUFUO0FBQ0FMLGlCQUFTLENBQUNvRSxXQUFXLENBQUNyRSxNQUFiLENBQVQ7QUFDQUYsZ0JBQVEsQ0FBQ3VFLFdBQVcsQ0FBQ3hFLEtBQWIsQ0FBUjtBQUNBc0IsZ0JBQVEsQ0FBQ2tELFdBQVcsQ0FBQ25ELEtBQWIsQ0FBUjtBQUNBSCxrQkFBVSxDQUFDc0QsV0FBVyxDQUFDdkQsT0FBYixDQUFWO0FBQ0FPLG1CQUFXLENBQUM7QUFDVmpCLGlCQUFPLEVBQUUsQ0FBQyxHQUFHaUUsV0FBVyxDQUFDakUsT0FBaEIsQ0FEQztBQUVWRSxnQkFBTSxFQUFFLENBQUMsR0FBRytELFdBQVcsQ0FBQy9ELE1BQWhCLENBRkU7QUFHVk4sZ0JBQU0sRUFBRSxDQUFDLEdBQUdxRSxXQUFXLENBQUNyRSxNQUFoQixDQUhFO0FBSVZFLGdCQUFNLEVBQUUsQ0FBQyxHQUFHQSxNQUFKO0FBSkUsU0FBRCxDQUFYO0FBTUQ7O0FBQ0QsVUFBSW1FLFdBQVcsQ0FBQ1AsSUFBWixLQUFxQixLQUFyQixJQUE4QjlFLGlCQUFpQixLQUFLLEdBQXhELEVBQTZEO0FBQUU7QUFDN0RtRixzQkFBYztBQUNkeEQsb0JBQVksQ0FBQzBELFdBQVcsQ0FBQzNELFNBQWIsQ0FBWjtBQUNBTCxrQkFBVSxDQUFDZ0UsV0FBVyxDQUFDakUsT0FBYixDQUFWO0FBQ0FHLGlCQUFTLENBQUM4RCxXQUFXLENBQUMvRCxNQUFiLENBQVQ7QUFDQUgsaUJBQVMsQ0FBQ2tFLFdBQVcsQ0FBQ25FLE1BQWIsQ0FBVDtBQUNBSixnQkFBUSxDQUFDdUUsV0FBVyxDQUFDeEUsS0FBYixDQUFSO0FBQ0FzQixnQkFBUSxDQUFDa0QsV0FBVyxDQUFDbkQsS0FBYixDQUFSO0FBQ0FHLG1CQUFXLENBQUM7QUFDVmpCLGlCQUFPLEVBQUUsQ0FBQyxHQUFHaUUsV0FBVyxDQUFDakUsT0FBaEIsQ0FEQztBQUVWRSxnQkFBTSxFQUFFLENBQUMsR0FBRytELFdBQVcsQ0FBQy9ELE1BQWhCLENBRkU7QUFHVk4sZ0JBQU0sRUFBRSxDQUFDLEdBQUdBLE1BQUosQ0FIRTtBQUlWRSxnQkFBTSxFQUFFLENBQUMsR0FBR21FLFdBQVcsQ0FBQ25FLE1BQWhCO0FBSkUsU0FBRCxDQUFYO0FBTUQ7O0FBQ0QsVUFBSW1FLFdBQVcsQ0FBQ1AsSUFBWixLQUFxQixVQUFyQixJQUFtQ08sV0FBVyxDQUFDTixNQUFaLEtBQXVCL0UsaUJBQTlELEVBQWlGO0FBQy9FO0FBQ0FtRixzQkFBYztBQUNkckUsZ0JBQVEsQ0FBQ3VFLFdBQVcsQ0FBQ3hFLEtBQWIsQ0FBUjtBQUNBSSxpQkFBUyxDQUFDb0UsV0FBVyxDQUFDckUsTUFBYixDQUFUO0FBQ0FHLGlCQUFTLENBQUNrRSxXQUFXLENBQUNuRSxNQUFiLENBQVQ7QUFDQUcsa0JBQVUsQ0FBQ2dFLFdBQVcsQ0FBQ2pFLE9BQWIsQ0FBVjtBQUNBRyxpQkFBUyxDQUFDOEQsV0FBVyxDQUFDL0QsTUFBYixDQUFUO0FBQ0FLLG9CQUFZLENBQUMwRCxXQUFXLENBQUMzRCxTQUFiLENBQVo7QUFDQUssa0JBQVUsQ0FBQ3NELFdBQVcsQ0FBQ3ZELE9BQWIsQ0FBVjtBQUNBSyxnQkFBUSxDQUFDa0QsV0FBVyxDQUFDbkQsS0FBYixDQUFSO0FBQ0FHLG1CQUFXLENBQUNnRCxXQUFXLENBQUNqRCxRQUFiLENBQVg7QUFDRDs7QUFDRCxVQUFJaUQsV0FBVyxDQUFDUCxJQUFaLEtBQXFCLFdBQXJCLElBQW9DTyxXQUFXLENBQUNOLE1BQVosS0FBdUIvRSxpQkFBL0QsRUFBa0Y7QUFDaEY7QUFDQXlDLHNCQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0Q7O0FBQ0QsVUFBSTRDLFdBQVcsQ0FBQ1AsSUFBWixLQUFxQixNQUFyQixJQUErQk8sV0FBVyxDQUFDTixNQUFaLElBQXNCL0UsaUJBQXpELEVBQTRFO0FBQUU7QUFDNUUsWUFBSXVGLFdBQVcsR0FBRyxDQUFDLEdBQUczQyxRQUFKLEVBQWM7QUFBQzRDLGNBQUksRUFBRUgsV0FBVyxDQUFDbkYsUUFBbkI7QUFBNkI4RSxhQUFHLEVBQUVLLFdBQVcsQ0FBQ0k7QUFBOUMsU0FBZCxDQUFsQjtBQUNBNUMsbUJBQVcsQ0FBQzBDLFdBQUQsQ0FBWDtBQUNEO0FBQ0Y7QUFDRixHQXZQSyxDQXlQTjtBQUNBO0FBQ0E7OztBQUNBLFFBQU1HLHNCQUFzQixHQUFHLENBQUNDLEVBQUQsRUFBS0MsRUFBTCxFQUFTQyxZQUFULEVBQXVCQyxNQUF2QixLQUFrQztBQUMvRCxRQUFJQyxVQUFVLEdBQUcsQ0FBQyxHQUFHM0UsT0FBSixDQUFqQjtBQUNBLFFBQUk0RSxTQUFTLEdBQUcsQ0FBQyxHQUFHMUUsTUFBSixDQUFoQjtBQUNBLFFBQUkyRSxTQUFTLEdBQUcsQ0FBQyxHQUFHakYsTUFBSixDQUFoQjtBQUNBLFFBQUlrRixTQUFTLEdBQUcsQ0FBQyxHQUFHaEYsTUFBSixDQUFoQjtBQUNBLFFBQUlpRixNQUFNLEdBQUcsQ0FBQyxHQUFHL0UsT0FBTyxDQUFDdUUsRUFBRCxDQUFYLENBQWI7QUFDQSxRQUFJUyxXQUFXLEdBQUdoRixPQUFPLENBQUN1RSxFQUFELENBQVAsQ0FBWUMsRUFBWixDQUFsQjtBQUNBLFFBQUlTLGdCQUFnQixHQUFHLENBQUMsR0FBR3pFLGFBQUosQ0FBdkI7QUFDQSxRQUFJMEUsS0FBSyxHQUFHQyxNQUFNLENBQUNaLEVBQUQsQ0FBTixHQUFhLEdBQWIsR0FBbUJZLE1BQU0sQ0FBQ1gsRUFBRCxDQUFyQztBQUNBLFFBQUlZLEdBQUcsR0FBRzVFLGFBQWEsQ0FBQzZFLE9BQWQsQ0FBc0JILEtBQXRCLENBQVY7O0FBQ0EsUUFBSVQsWUFBWSxLQUFLLENBQUMsQ0FBdEIsRUFBeUI7QUFDdkJBLGtCQUFZLEdBQUdyRSxTQUFmO0FBQ0FzRSxZQUFNLEdBQUc5RCxHQUFUO0FBQ0Q7O0FBQ0QsUUFBSTZELFlBQVksR0FBRyxDQUFDLENBQWhCLElBQXFCTyxXQUFXLEtBQUt6RyxZQUF6QyxFQUF1RDtBQUFFO0FBQ3ZEd0csWUFBTSxDQUFDUCxFQUFELENBQU4sR0FDRWxFLFNBQVMsS0FBSyxHQUFkLEdBQW9CdUUsU0FBUyxDQUFDSixZQUFELENBQTdCLEdBQThDSyxTQUFTLENBQUNMLFlBQUQsQ0FEekQ7QUFFQUUsZ0JBQVUsQ0FBQ0osRUFBRCxDQUFWLEdBQWlCLENBQUMsR0FBR1EsTUFBSixDQUFqQjtBQUNBekUsZUFBUyxLQUFLLEdBQWQsR0FDSXVFLFNBQVMsQ0FBQ3pCLE1BQVYsQ0FBaUJxQixZQUFqQixFQUErQixDQUEvQixDQURKLEdBRUlLLFNBQVMsQ0FBQzFCLE1BQVYsQ0FBaUJxQixZQUFqQixFQUErQixDQUEvQixDQUZKO0FBR0EsVUFBSWEsWUFBWSxHQUFHLENBQUMsR0FBR1YsU0FBUyxDQUFDTCxFQUFELENBQWIsQ0FBbkI7QUFDQWUsa0JBQVksQ0FBQ2QsRUFBRCxDQUFaLEdBQW1CbEUsU0FBbkI7QUFDQXNFLGVBQVMsQ0FBQ0wsRUFBRCxDQUFULEdBQWdCLENBQUMsR0FBR2UsWUFBSixDQUFoQjs7QUFDQSxVQUFJaEYsU0FBUyxLQUFLLEdBQWQsSUFBcUJtRSxZQUFZLEtBQUtJLFNBQVMsQ0FBQ3RDLE1BQXBELEVBQTREO0FBQzFEa0Msb0JBQVksR0FBR0EsWUFBWSxHQUFHLENBQTlCO0FBQ0Q7O0FBQ0QsVUFBSW5FLFNBQVMsS0FBSyxHQUFkLElBQXFCbUUsWUFBWSxLQUFLSyxTQUFTLENBQUN2QyxNQUFwRCxFQUE0RDtBQUMxRGtDLG9CQUFZLEdBQUdBLFlBQVksR0FBRyxDQUE5QjtBQUNEOztBQUNEcEUsa0JBQVksQ0FBQ29FLFlBQUQsQ0FBWjtBQUNBeEUsZ0JBQVUsQ0FBQzBFLFVBQUQsQ0FBVjtBQUNBeEUsZUFBUyxDQUFDeUUsU0FBRCxDQUFUO0FBQ0EvRSxlQUFTLENBQUNnRixTQUFELENBQVQ7QUFDQTlFLGVBQVMsQ0FBQytFLFNBQUQsQ0FBVDtBQUNBckUsc0JBQWdCLENBQUMsQ0FBQyxHQUFHRCxhQUFKLEVBQW1CMEUsS0FBbkIsQ0FBRCxDQUFoQjtBQUNBckUsWUFBTSxDQUFDNkQsTUFBRCxDQUFOLENBdEJxRCxDQXNCckM7O0FBQ2hCO0FBQ0Q7O0FBQ0QsUUFBSVUsR0FBRyxHQUFHLENBQUMsQ0FBWCxFQUFjO0FBQUU7QUFDZDlFLGVBQVMsS0FBSyxHQUFkLEdBQ0l1RSxTQUFTLENBQUMxQixJQUFWLENBQWU2QixXQUFmLENBREosR0FFSUYsU0FBUyxDQUFDM0IsSUFBVixDQUFlNkIsV0FBZixDQUZKO0FBR0EsVUFBSUQsTUFBTSxHQUFHLENBQUMsR0FBR0osVUFBVSxDQUFDSixFQUFELENBQWQsQ0FBYjtBQUNBUSxZQUFNLENBQUNQLEVBQUQsQ0FBTixHQUFhakcsWUFBYjtBQUNBb0csZ0JBQVUsQ0FBQ0osRUFBRCxDQUFWLEdBQWlCLENBQUMsR0FBR1EsTUFBSixDQUFqQjtBQUNBLFVBQUlPLFlBQVksR0FBRyxDQUFDLEdBQUdWLFNBQVMsQ0FBQ0wsRUFBRCxDQUFiLENBQW5CO0FBQ0FlLGtCQUFZLENBQUNkLEVBQUQsQ0FBWixHQUFtQmhHLFdBQW5CO0FBQ0FvRyxlQUFTLENBQUNMLEVBQUQsQ0FBVCxHQUFnQixDQUFDLEdBQUdlLFlBQUosQ0FBaEI7QUFDQWpGLGtCQUFZLENBQ1ZDLFNBQVMsS0FBSyxHQUFkLEdBQW9CdUUsU0FBUyxDQUFDdEMsTUFBVixHQUFtQixDQUF2QyxHQUEyQ3VDLFNBQVMsQ0FBQ3ZDLE1BQVYsR0FBbUIsQ0FEcEQsQ0FBWjtBQUdBMEMsc0JBQWdCLENBQUM3QixNQUFqQixDQUF3QmdDLEdBQXhCLEVBQTZCLENBQTdCO0FBRUFuRixnQkFBVSxDQUFDMEUsVUFBRCxDQUFWO0FBQ0F4RSxlQUFTLENBQUN5RSxTQUFELENBQVQ7QUFDQS9FLGVBQVMsQ0FBQ2dGLFNBQUQsQ0FBVDtBQUNBOUUsZUFBUyxDQUFDK0UsU0FBRCxDQUFUO0FBQ0FyRSxzQkFBZ0IsQ0FBQ3dFLGdCQUFELENBQWhCO0FBQ0FwRSxZQUFNLENBQUMsQ0FBQyxDQUFGLEVBQUksQ0FBQyxDQUFMLEVBQU9wQyxXQUFQLENBQU4sQ0FwQlksQ0FvQmU7O0FBQzNCO0FBQ0QsS0E3RDhELENBOEQvRDtBQUNBOzs7QUFDQSxRQUFJdUIsT0FBTyxDQUFDdUUsRUFBRCxDQUFQLENBQVlDLEVBQVosTUFBb0JqRyxZQUF4QixFQUFzQztBQUNwQztBQUNBLFVBQUlnSCxZQUFZLEdBQUczRSxHQUFHLENBQUMsQ0FBRCxDQUFILEtBQVcyRCxFQUFYLElBQWlCM0QsR0FBRyxDQUFDLENBQUQsQ0FBSCxLQUFXNEQsRUFBNUIsR0FBaUMsR0FBakMsR0FBdUM7QUFDekQ1RCxTQUFHLENBQUMsQ0FBRCxDQUFILEtBQVcsR0FBWCxHQUFpQixHQUFqQixHQUF1QjtBQUN2QkEsU0FBRyxDQUFDLENBQUQsQ0FBSCxLQUFXLEdBQVgsR0FBaUJuQyxXQUFqQixHQUErQjtBQUMvQixTQUhELENBRm9DLENBSzlCOztBQUNOaUcsWUFBTSxHQUFHLENBQUNILEVBQUQsRUFBSUMsRUFBSixFQUFPZSxZQUFQLENBQVQ7QUFDQTFFLFlBQU0sQ0FBQzZELE1BQUQsQ0FBTjtBQUNBO0FBQ0Q7QUFDRixHQTFFRDs7QUE0RUEsUUFBTWMsbUJBQW1CLEdBQUlDLFNBQUQsSUFBZTtBQUN6QztBQUNBLFFBQUlyRixTQUFTLEtBQUssQ0FBQyxDQUFuQixFQUFzQjtBQUNwQkMsa0JBQVksQ0FBQ29GLFNBQUQsQ0FBWjtBQUNBO0FBQ0QsS0FMd0MsQ0FNekM7OztBQUNBLFFBQUlyRixTQUFTLEtBQUtxRixTQUFsQixFQUE2QjtBQUMzQnBGLGtCQUFZLENBQUMsQ0FBQyxDQUFGLENBQVo7QUFDQTtBQUNELEtBVndDLENBV3pDOzs7QUFDQSxRQUFJcUYsT0FBTyxHQUFHOUcsaUJBQWlCLEtBQUssR0FBdEIsR0FBNEIsQ0FBQyxHQUFHZ0IsTUFBSixDQUE1QixHQUEwQyxDQUFDLEdBQUdFLE1BQUosQ0FBeEQ7QUFDQSxRQUFJNkYsUUFBUSxHQUFHdkYsU0FBZjtBQUNBLFFBQUl3RixRQUFRLEdBQUdGLE9BQU8sQ0FBQ0MsUUFBRCxDQUF0QjtBQUNBLFFBQUlFLE1BQU0sR0FBR0osU0FBYjtBQUNBQyxXQUFPLENBQUN0QyxNQUFSLENBQWV1QyxRQUFmLEVBQXlCLENBQXpCLEVBaEJ5QyxDQWdCWjs7QUFDN0JELFdBQU8sQ0FBQ3RDLE1BQVIsQ0FBZXlDLE1BQWYsRUFBc0IsQ0FBdEIsRUFBd0JELFFBQXhCLEVBakJ5QyxDQWlCTjs7QUFDbkNoSCxxQkFBaUIsS0FBSyxHQUF0QixHQUE0QmlCLFNBQVMsQ0FBQzZGLE9BQUQsQ0FBckMsR0FBaUQzRixTQUFTLENBQUMyRixPQUFELENBQTFEO0FBQ0FyRixnQkFBWSxDQUFDLENBQUMsQ0FBRixDQUFaO0FBQ0QsR0FwQkQ7O0FBc0JBLFFBQU15RixnQkFBZ0IsR0FBRyxNQUFNO0FBQzdCLFFBQUksQ0FBQ0MsV0FBVyxFQUFoQixFQUFvQjtBQUNsQjtBQUNEOztBQUNELFFBQUlDLFVBQVUsR0FBR0MsYUFBYSxFQUE5QjtBQUNBLFFBQUlDLFVBQVUsR0FBR3hGLE9BQWpCO0FBQ0EsUUFBSXlGLGFBQWEsR0FBRyxDQUNsQixLQURrQixFQUVsQixPQUFPakgsTUFGVyxFQUdsQixPQUFPQyxJQUhXLEVBSWxCRCxNQUFNLEdBQUUsSUFKVSxFQUtsQkEsTUFBTSxHQUFHLEdBQVQsR0FBZUMsSUFMRyxFQU1sQkEsSUFBSSxHQUFHLElBTlcsRUFPbEJBLElBQUksR0FBRyxHQUFQLEdBQWFELE1BUEssRUFRbEJDLElBQUksR0FBRyxHQUFQLEdBQWFBLElBUkssQ0FBcEIsQ0FONkIsQ0FlMUI7O0FBQ0gsU0FBSyxJQUFJaUgsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzVGLGFBQWEsQ0FBQytCLE1BQWxDLEVBQTBDNkQsQ0FBQyxFQUEzQyxFQUErQztBQUM3QyxVQUFJRCxhQUFhLENBQUNkLE9BQWQsQ0FBc0I3RSxhQUFhLENBQUM0RixDQUFELENBQW5DLElBQTBDLENBQUMsQ0FBL0MsRUFBa0Q7QUFDaERGLGtCQUFVLEdBQUdBLFVBQVUsR0FBRyxDQUExQjtBQUNEO0FBQ0Y7O0FBQ0QsUUFBSXJCLFNBQVMsR0FBRyxDQUFDLEdBQUdqRixNQUFKLENBQWhCO0FBQ0EsUUFBSXlHLFFBQVEsR0FBRyxDQUFDLEdBQUc1RyxLQUFKLENBQWY7O0FBQ0EsV0FBT29GLFNBQVMsQ0FBQ3RDLE1BQVYsR0FBbUJ0RCxRQUFuQixJQUErQm9ILFFBQVEsQ0FBQzlELE1BQVQsR0FBa0IsQ0FBeEQsRUFBMkQ7QUFDekQsVUFBSVEsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCbUQsUUFBUSxDQUFDOUQsTUFBcEMsQ0FBWDtBQUNBc0MsZUFBUyxDQUFDMUIsSUFBVixDQUFla0QsUUFBUSxDQUFDdEQsSUFBRCxDQUF2QjtBQUNBc0QsY0FBUSxDQUFDakQsTUFBVCxDQUFnQkwsSUFBaEIsRUFBc0IsQ0FBdEI7QUFDRDs7QUFDRDhCLGFBQVMsQ0FBQ3hCLElBQVY7QUFDQSxRQUFJaUQsWUFBWSxHQUFHekIsU0FBUyxDQUFDdEMsTUFBVixHQUFtQixDQUFuQixHQUF1QixHQUF2QixHQUE2QixHQUFoRCxDQTdCNkIsQ0E2QndCOztBQUNyRCxRQUFJckMsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsTUFBeUIxQixXQUF6QixJQUNBMEIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVaEIsTUFBVixNQUF5QlYsV0FEekIsSUFFQTBCLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVWYsSUFBVixNQUF5QlgsV0FGekIsSUFHQTBCLE1BQU0sQ0FBQ2hCLE1BQUQsQ0FBTixDQUFlLENBQWYsTUFBeUJWLFdBSHpCLElBSUEwQixNQUFNLENBQUNoQixNQUFELENBQU4sQ0FBZUMsSUFBZixNQUF5QlgsV0FKekIsSUFLQTBCLE1BQU0sQ0FBQ2YsSUFBRCxDQUFOLENBQWEsQ0FBYixNQUF5QlgsV0FMekIsSUFNQTBCLE1BQU0sQ0FBQ2YsSUFBRCxDQUFOLENBQWFELE1BQWIsTUFBeUJWLFdBTnpCLElBT0EwQixNQUFNLENBQUNmLElBQUQsQ0FBTixDQUFhQSxJQUFiLE1BQXlCWCxXQVA3QixFQU8wQztBQUN4QzhILGtCQUFZLEdBQUcsR0FBZixDQUR3QyxDQUNwQjtBQUNyQjs7QUFDRCxRQUFJQyxRQUFRLEdBQUdDLFdBQVcsRUFBMUI7QUFDQSxRQUFJQyxPQUFPLEdBQUc7QUFBQ0MsUUFBRSxFQUFFLEdBQUw7QUFBVWpELFVBQUksRUFBRSxNQUFoQjtBQUF3QnVDLGdCQUFVLEVBQUVBLFVBQXBDO0FBQWdEVyxjQUFRLEVBQUVKLFFBQVEsQ0FBQ0ksUUFBbkU7QUFBNkVDLGdCQUFVLEVBQUVMLFFBQVEsQ0FBQ0ssVUFBbEc7QUFBOEdDLFNBQUcsRUFBRU4sUUFBUSxDQUFDTTtBQUE1SCxLQUFkO0FBQ0EsUUFBSUMsUUFBUSxHQUFHLENBQUMsR0FBR2hHLEtBQUosRUFBVzJGLE9BQVgsQ0FBZjtBQUNBMUMsa0JBQWM7QUFDZHhELGdCQUFZLENBQUMrRixZQUFELENBQVo7QUFDQXpHLGFBQVMsQ0FBQ2dGLFNBQUQsQ0FBVDtBQUNBbkYsWUFBUSxDQUFDMkcsUUFBRCxDQUFSO0FBQ0F0RixZQUFRLENBQUMrRixRQUFELENBQVI7QUFDQW5HLGNBQVUsQ0FBQ3VGLFVBQUQsQ0FBVjtBQUNBakYsZUFBVyxDQUFDO0FBQ1ZqQixhQUFPLEVBQUUsQ0FBQyxHQUFHQSxPQUFKLENBREM7QUFFVkUsWUFBTSxFQUFFLENBQUMsR0FBR0EsTUFBSixDQUZFO0FBR1ZOLFlBQU0sRUFBRSxDQUFDLEdBQUdpRixTQUFKLENBSEU7QUFJVi9FLFlBQU0sRUFBRSxDQUFDLEdBQUdBLE1BQUo7QUFKRSxLQUFELENBQVg7QUFPQWQsVUFBTSxDQUFDc0UsSUFBUCxDQUNFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNiM0UsWUFBTSxFQUFFQSxNQURLO0FBQ0c7QUFDaEJDLGNBQVEsRUFBRUEsUUFGRztBQUVPO0FBQ3BCMkUsVUFBSSxFQUFFLElBSE87QUFHRDtBQUNaQyxVQUFJLEVBQUUsS0FKTztBQUlBO0FBQ2JDLFlBQU0sRUFBRS9FLGlCQUxLO0FBTWJvQixhQUFPLEVBQUVBLE9BTkk7QUFNSztBQUNsQkUsWUFBTSxFQUFFQSxNQVBLO0FBT0c7QUFDaEJOLFlBQU0sRUFBRWlGLFNBUks7QUFRTTtBQUNuQnBGLFdBQUssRUFBRTRHLFFBVE07QUFTSTtBQUNqQi9GLGVBQVMsRUFBRWdHLFlBVkU7QUFVWTtBQUN6QnJILGNBQVEsRUFBRUEsUUFYRztBQVdPO0FBQ3BCNkIsV0FBSyxFQUFFZ0csUUFaTTtBQVlJO0FBQ2pCcEcsYUFBTyxFQUFFd0YsVUFiSSxDQWFPOztBQWJQLEtBQWYsQ0FERjtBQWlCRCxHQXpFRDs7QUEyRUEsUUFBTWEsYUFBYSxHQUFHLE1BQU07QUFDMUIsUUFBSSxDQUFDaEIsV0FBVyxFQUFoQixFQUFvQjtBQUNsQjtBQUNEOztBQUNELFFBQUlDLFVBQVUsR0FBR0MsYUFBYSxFQUE5QjtBQUNBLFFBQUluQixTQUFTLEdBQUcsQ0FBQyxHQUFHaEYsTUFBSixDQUFoQjtBQUNBLFFBQUl1RyxRQUFRLEdBQUcsQ0FBQyxHQUFHNUcsS0FBSixDQUFmOztBQUNBLFdBQU9xRixTQUFTLENBQUN2QyxNQUFWLEdBQW1CdEQsUUFBbkIsSUFBK0JvSCxRQUFRLENBQUM5RCxNQUFULEdBQWtCLENBQXhELEVBQTJEO0FBQ3pELFVBQUlRLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQm1ELFFBQVEsQ0FBQzlELE1BQXBDLENBQVg7QUFDQXVDLGVBQVMsQ0FBQzNCLElBQVYsQ0FBZWtELFFBQVEsQ0FBQ3RELElBQUQsQ0FBdkI7QUFDQXNELGNBQVEsQ0FBQ2pELE1BQVQsQ0FBZ0JMLElBQWhCLEVBQXNCLENBQXRCO0FBQ0Q7O0FBQ0QrQixhQUFTLENBQUN6QixJQUFWO0FBQ0EsUUFBSTJELFdBQVcsR0FBRyxDQUFDLEdBQUdoSCxPQUFKLENBQWxCO0FBQ0EsUUFBSWlILFVBQVUsR0FBRyxDQUFDLEdBQUcvRyxNQUFKLENBQWpCO0FBQ0EsUUFBSWdILFVBQVUsR0FBRyxDQUFDLEdBQUd0SCxNQUFKLENBQWpCO0FBQ0EsUUFBSXVILFVBQVUsR0FBRyxDQUFDLEdBQUdySCxNQUFKLENBQWpCO0FBQ0EsUUFBSXdHLFlBQVksR0FBR3hCLFNBQVMsQ0FBQ3ZDLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUIsR0FBdkIsR0FBNkIsR0FBaEQsQ0FqQjBCLENBaUIyQjs7QUFDckQsUUFBSXJDLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLE1BQXlCMUIsV0FBekIsSUFDQTBCLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVWhCLE1BQVYsTUFBeUJWLFdBRHpCLElBRUEwQixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVmLElBQVYsTUFBeUJYLFdBRnpCLElBR0EwQixNQUFNLENBQUNoQixNQUFELENBQU4sQ0FBZSxDQUFmLE1BQXlCVixXQUh6QixJQUlBMEIsTUFBTSxDQUFDaEIsTUFBRCxDQUFOLENBQWVDLElBQWYsTUFBeUJYLFdBSnpCLElBS0EwQixNQUFNLENBQUNmLElBQUQsQ0FBTixDQUFhLENBQWIsTUFBeUJYLFdBTHpCLElBTUEwQixNQUFNLENBQUNmLElBQUQsQ0FBTixDQUFhRCxNQUFiLE1BQXlCVixXQU56QixJQU9BMEIsTUFBTSxDQUFDZixJQUFELENBQU4sQ0FBYUEsSUFBYixNQUF5QlgsV0FQN0IsRUFPMEM7QUFDeEM4SCxrQkFBWSxHQUFHLEdBQWYsQ0FEd0MsQ0FDcEI7QUFDckI7O0FBQ0QsUUFBSUMsUUFBUSxHQUFHQyxXQUFXLEVBQTFCO0FBQ0EsUUFBSUMsT0FBTyxHQUFHO0FBQUNDLFFBQUUsRUFBRSxHQUFMO0FBQVVqRCxVQUFJLEVBQUUsTUFBaEI7QUFBd0J1QyxnQkFBVSxFQUFFQSxVQUFwQztBQUFnRFcsY0FBUSxFQUFFSixRQUFRLENBQUNJLFFBQW5FO0FBQTZFQyxnQkFBVSxFQUFFTCxRQUFRLENBQUNLLFVBQWxHO0FBQThHQyxTQUFHLEVBQUVOLFFBQVEsQ0FBQ007QUFBNUgsS0FBZDtBQUNBLFFBQUlDLFFBQVEsR0FBRyxDQUFDLEdBQUdoRyxLQUFKLEVBQVcyRixPQUFYLENBQWY7QUFDQTFDLGtCQUFjO0FBQ2R4RCxnQkFBWSxDQUFDK0YsWUFBRCxDQUFaO0FBQ0F2RyxhQUFTLENBQUMrRSxTQUFELENBQVQ7QUFDQXBGLFlBQVEsQ0FBQzJHLFFBQUQsQ0FBUjtBQUNBdEYsWUFBUSxDQUFDK0YsUUFBRCxDQUFSO0FBQ0E3RixlQUFXLENBQUM7QUFDVmpCLGFBQU8sRUFBRWdILFdBREM7QUFFVjlHLFlBQU0sRUFBRStHLFVBRkU7QUFHVnJILFlBQU0sRUFBRXNILFVBSEU7QUFJVnBILFlBQU0sRUFBRXFIO0FBSkUsS0FBRCxDQUFYO0FBT0FuSSxVQUFNLENBQUNzRSxJQUFQLENBQ0VDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ2IzRSxZQUFNLEVBQUVBLE1BREs7QUFDRztBQUNoQkMsY0FBUSxFQUFFQSxRQUZHO0FBRU87QUFDcEIyRSxVQUFJLEVBQUUsSUFITztBQUdEO0FBQ1pDLFVBQUksRUFBRSxLQUpPO0FBSUE7QUFDYkMsWUFBTSxFQUFFL0UsaUJBTEs7QUFNYm9CLGFBQU8sRUFBRUEsT0FOSTtBQU1LO0FBQ2xCRSxZQUFNLEVBQUVBLE1BUEs7QUFPRztBQUNoQkosWUFBTSxFQUFFZ0YsU0FSSztBQVFNO0FBQ25CckYsV0FBSyxFQUFFNEcsUUFUTTtBQVNJO0FBQ2pCdkYsV0FBSyxFQUFFZ0csUUFWTTtBQVVJO0FBQ2pCeEcsZUFBUyxFQUFFZ0csWUFYRTtBQVdZO0FBQ3pCckgsY0FBUSxFQUFFQSxRQVpHLENBWU07O0FBWk4sS0FBZixDQURGO0FBZ0JDLEdBM0RIOztBQTZEQSxRQUFNbUksa0JBQWtCLEdBQUcsTUFBTTtBQUMvQixRQUFJM0gsS0FBSyxDQUFDOEMsTUFBTixHQUFldEQsUUFBbkIsRUFBNkI7QUFDM0JvSSxZQUFNLENBQUNDLEtBQVAsQ0FBYSxVQUFVckksUUFBVixHQUFxQiwrQkFBbEM7QUFDQTtBQUNEOztBQUNELFFBQUkrRyxVQUFVLEdBQUdDLGFBQWEsRUFBOUI7QUFDQSxRQUFJcEIsU0FBUyxHQUFHLEVBQWhCO0FBQ0EsUUFBSXdCLFFBQVEsR0FBRyxDQUFDLEdBQUc1RyxLQUFKLENBQWY7O0FBQ0EsV0FBT29GLFNBQVMsQ0FBQ3RDLE1BQVYsR0FBbUJ0RCxRQUFuQixJQUErQm9ILFFBQVEsQ0FBQzlELE1BQVQsR0FBa0IsQ0FBeEQsRUFBMkQ7QUFDekQsVUFBSVEsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCbUQsUUFBUSxDQUFDOUQsTUFBcEMsQ0FBWDtBQUNBc0MsZUFBUyxDQUFDMUIsSUFBVixDQUFla0QsUUFBUSxDQUFDdEQsSUFBRCxDQUF2QjtBQUNBc0QsY0FBUSxDQUFDakQsTUFBVCxDQUFnQkwsSUFBaEIsRUFBc0IsQ0FBdEI7QUFDRDs7QUFDRDhCLGFBQVMsQ0FBQ3hCLElBQVY7QUFDQWdELFlBQVEsR0FBRyxDQUFDLEdBQUdBLFFBQUosRUFBYyxHQUFHckYsUUFBUSxDQUFDcEIsTUFBMUIsQ0FBWDtBQUNBeUcsWUFBUSxDQUFDaEQsSUFBVDtBQUNBLFFBQUlvRCxPQUFPLEdBQUc7QUFBQ0MsUUFBRSxFQUFFLEdBQUw7QUFBVWpELFVBQUksRUFBRSxNQUFoQjtBQUF3QnVDLGdCQUFVLEVBQUVBO0FBQXBDLEtBQWQ7QUFDQSxRQUFJYyxRQUFRLEdBQUcsQ0FBQyxHQUFHaEcsS0FBSixFQUFXMkYsT0FBWCxDQUFmO0FBQ0ExQyxrQkFBYztBQUNkOUQsY0FBVSxDQUFDLENBQUMsR0FBR2UsUUFBUSxDQUFDaEIsT0FBYixDQUFELENBQVY7QUFDQUcsYUFBUyxDQUFDLENBQUMsR0FBR2EsUUFBUSxDQUFDZCxNQUFiLENBQUQsQ0FBVDtBQUNBSyxnQkFBWSxDQUFDLEdBQUQsQ0FBWjtBQUNBVixhQUFTLENBQUNnRixTQUFELENBQVQ7QUFDQW5GLFlBQVEsQ0FBQzJHLFFBQUQsQ0FBUjtBQUNBdEYsWUFBUSxDQUFDK0YsUUFBRCxDQUFSO0FBQ0E3RixlQUFXLENBQUM7QUFDVmpCLGFBQU8sRUFBRSxDQUFDLEdBQUdnQixRQUFRLENBQUNoQixPQUFiLENBREM7QUFFVkUsWUFBTSxFQUFFLENBQUMsR0FBR2MsUUFBUSxDQUFDZCxNQUFiLENBRkU7QUFHVk4sWUFBTSxFQUFFLENBQUMsR0FBR2lGLFNBQUosQ0FIRTtBQUlWL0UsWUFBTSxFQUFFLENBQUMsR0FBR0EsTUFBSjtBQUpFLEtBQUQsQ0FBWDtBQU9BZCxVQUFNLENBQUNzRSxJQUFQLENBQ0VDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ2IzRSxZQUFNLEVBQUVBLE1BREs7QUFDRztBQUNoQkMsY0FBUSxFQUFFQSxRQUZHO0FBRU87QUFDcEIyRSxVQUFJLEVBQUUsSUFITztBQUdEO0FBQ1pDLFVBQUksRUFBRSxLQUpPO0FBSUE7QUFDYkMsWUFBTSxFQUFFL0UsaUJBTEs7QUFNYjBCLGVBQVMsRUFBRSxHQU5FO0FBTUc7QUFDaEJyQixjQUFRLEVBQUVBLFFBUEc7QUFPTztBQUNwQmUsYUFBTyxFQUFFZ0IsUUFBUSxDQUFDaEIsT0FSTDtBQVFjO0FBQzNCRSxZQUFNLEVBQUVjLFFBQVEsQ0FBQ2QsTUFUSjtBQVNZO0FBQ3pCTixZQUFNLEVBQUVpRixTQVZLO0FBVU07QUFDbkJwRixXQUFLLEVBQUU0RyxRQVhNO0FBV0k7QUFDakJ2RixXQUFLLEVBQUVnRyxRQVpNO0FBWUk7QUFDakJwRyxhQUFPLEVBQUVBLE9BYkksQ0FhSTs7QUFiSixLQUFmLENBREY7QUFrQkQsR0FsREQ7O0FBb0RBLFFBQU02RyxlQUFlLEdBQUcsTUFBTTtBQUM1QixRQUFJOUgsS0FBSyxDQUFDOEMsTUFBTixHQUFldEQsUUFBbkIsRUFBNkI7QUFDM0JvSSxZQUFNLENBQUNDLEtBQVAsQ0FBYSxVQUFVckksUUFBVixHQUFxQiwrQkFBbEM7QUFDQTtBQUNEOztBQUNELFFBQUkrRyxVQUFVLEdBQUdDLGFBQWEsRUFBOUI7QUFDQSxRQUFJbkIsU0FBUyxHQUFHLEVBQWhCO0FBQ0EsUUFBSXVCLFFBQVEsR0FBRyxDQUFDLEdBQUc1RyxLQUFKLENBQWY7O0FBQ0EsV0FBT3FGLFNBQVMsQ0FBQ3ZDLE1BQVYsR0FBbUJ0RCxRQUFuQixJQUErQm9ILFFBQVEsQ0FBQzlELE1BQVQsR0FBa0IsQ0FBeEQsRUFBMkQ7QUFDekQsVUFBSVEsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCbUQsUUFBUSxDQUFDOUQsTUFBcEMsQ0FBWDtBQUNBdUMsZUFBUyxDQUFDM0IsSUFBVixDQUFla0QsUUFBUSxDQUFDdEQsSUFBRCxDQUF2QjtBQUNBc0QsY0FBUSxDQUFDakQsTUFBVCxDQUFnQkwsSUFBaEIsRUFBc0IsQ0FBdEI7QUFDRDs7QUFDRCtCLGFBQVMsQ0FBQ3pCLElBQVY7QUFDQWdELFlBQVEsR0FBRyxDQUFDLEdBQUdBLFFBQUosRUFBYyxHQUFHckYsUUFBUSxDQUFDbEIsTUFBMUIsQ0FBWDtBQUNBdUcsWUFBUSxDQUFDaEQsSUFBVDtBQUNBLFFBQUlvRCxPQUFPLEdBQUc7QUFBQ0MsUUFBRSxFQUFFLEdBQUw7QUFBVWpELFVBQUksRUFBRSxNQUFoQjtBQUF3QnVDLGdCQUFVLEVBQUVBO0FBQXBDLEtBQWQ7QUFDQSxRQUFJYyxRQUFRLEdBQUcsQ0FBQyxHQUFHaEcsS0FBSixFQUFXMkYsT0FBWCxDQUFmO0FBQ0ExQyxrQkFBYztBQUNkOUQsY0FBVSxDQUFDLENBQUMsR0FBR2UsUUFBUSxDQUFDaEIsT0FBYixDQUFELENBQVY7QUFDQUcsYUFBUyxDQUFDLENBQUMsR0FBR2EsUUFBUSxDQUFDZCxNQUFiLENBQUQsQ0FBVDtBQUNBSyxnQkFBWSxDQUFDLEdBQUQsQ0FBWjtBQUNBUixhQUFTLENBQUMrRSxTQUFELENBQVQ7QUFDQXBGLFlBQVEsQ0FBQzJHLFFBQUQsQ0FBUjtBQUNBdEYsWUFBUSxDQUFDK0YsUUFBRCxDQUFSO0FBQ0E3RixlQUFXLENBQUM7QUFDVmpCLGFBQU8sRUFBRSxDQUFDLEdBQUdnQixRQUFRLENBQUNoQixPQUFiLENBREM7QUFFVkUsWUFBTSxFQUFFLENBQUMsR0FBR2MsUUFBUSxDQUFDZCxNQUFiLENBRkU7QUFHVk4sWUFBTSxFQUFFLENBQUMsR0FBR0EsTUFBSixDQUhFO0FBSVZFLFlBQU0sRUFBRSxDQUFDLEdBQUdnRixTQUFKO0FBSkUsS0FBRCxDQUFYO0FBT0E5RixVQUFNLENBQUNzRSxJQUFQLENBQ0VDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ2IzRSxZQUFNLEVBQUVBLE1BREs7QUFDRztBQUNoQkMsY0FBUSxFQUFFQSxRQUZHO0FBRU87QUFDcEIyRSxVQUFJLEVBQUUsSUFITztBQUdEO0FBQ1pDLFVBQUksRUFBRSxLQUpPO0FBSUE7QUFDYkMsWUFBTSxFQUFFL0UsaUJBTEs7QUFNYjBCLGVBQVMsRUFBRSxHQU5FO0FBTUc7QUFDaEJyQixjQUFRLEVBQUVBLFFBUEc7QUFPTztBQUNwQmUsYUFBTyxFQUFFZ0IsUUFBUSxDQUFDaEIsT0FSTDtBQVFjO0FBQzNCRSxZQUFNLEVBQUVjLFFBQVEsQ0FBQ2QsTUFUSjtBQVNZO0FBQ3pCSixZQUFNLEVBQUVnRixTQVZLO0FBVU07QUFDbkJyRixXQUFLLEVBQUU0RyxRQVhNO0FBV0k7QUFDakJ2RixXQUFLLEVBQUVnRyxRQVpNLENBWUc7O0FBWkgsS0FBZixDQURGO0FBaUJELEdBakREOztBQW1EQSxXQUFTZixXQUFULEdBQXVCO0FBQ3JCLFFBQUkvRixPQUFPLENBQUNkLE1BQUQsQ0FBUCxDQUFnQkEsTUFBaEIsTUFBNEJYLFlBQWhDLEVBQThDO0FBQzVDOEksWUFBTSxDQUFDQyxLQUFQLENBQWEsbUNBQWI7QUFDQSxhQUFPLEtBQVA7QUFDRDs7QUFDRCxRQUFJRSxPQUFPLEdBQUdySSxJQUFJLEdBQUMsQ0FBbkI7QUFDQSxRQUFJc0ksT0FBTyxHQUFHdEksSUFBSSxHQUFDLENBQW5CO0FBQ0EsUUFBSXVJLE1BQU0sR0FBR0YsT0FBYjtBQUNBLFFBQUlHLE9BQU8sR0FBRyxDQUFDLENBQWY7QUFDQSxRQUFJQyxNQUFNLEdBQUdILE9BQWI7QUFDQSxRQUFJSSxPQUFPLEdBQUcsQ0FBQyxDQUFmOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFHTixPQUFsQixFQUEyQixFQUFFTSxDQUE3QixFQUFnQztBQUM5QixXQUFLLElBQUk3RixDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUd3RixPQUFsQixFQUEyQixFQUFFeEYsQ0FBN0IsRUFBZ0M7QUFDOUIsWUFBSWpDLE9BQU8sQ0FBQzhILENBQUQsQ0FBUCxDQUFXN0YsQ0FBWCxNQUFrQjFELFlBQXRCLEVBQW9DO0FBQ2xDLGNBQUksRUFBRXVKLENBQUMsR0FBRyxDQUFKLElBQVM5SCxPQUFPLENBQUM4SCxDQUFDLEdBQUMsQ0FBSCxDQUFQLENBQWE3RixDQUFiLE1BQW9CMUQsWUFBL0IsS0FDSCxFQUFFMEQsQ0FBQyxHQUFHLENBQUosSUFBU2pDLE9BQU8sQ0FBQzhILENBQUQsQ0FBUCxDQUFXN0YsQ0FBQyxHQUFDLENBQWIsTUFBb0IxRCxZQUEvQixDQURHLElBRUgsRUFBRXVKLENBQUMsR0FBRzNJLElBQUosSUFBWWEsT0FBTyxDQUFDOEgsQ0FBQyxHQUFDLENBQUgsQ0FBUCxDQUFhN0YsQ0FBYixNQUFvQjFELFlBQWxDLENBRkcsSUFHSCxFQUFFMEQsQ0FBQyxHQUFHOUMsSUFBSixJQUFZYSxPQUFPLENBQUM4SCxDQUFELENBQVAsQ0FBVzdGLENBQUMsR0FBQyxDQUFiLE1BQW9CMUQsWUFBbEMsQ0FIRCxFQUlHO0FBQ0Q4SSxrQkFBTSxDQUFDQyxLQUFQLENBQWEseUNBQWI7QUFDQSxtQkFBTyxLQUFQO0FBQ0E7O0FBQ0QsY0FBSXRHLFFBQVEsQ0FBQ2hCLE9BQVQsQ0FBaUI4SCxDQUFqQixFQUFvQjdGLENBQXBCLE1BQTJCMUQsWUFBL0IsRUFBNkM7QUFDM0M7QUFDQSxnQkFBSXVKLENBQUMsR0FBR0osTUFBUixFQUFnQjtBQUFFQSxvQkFBTSxHQUFHSSxDQUFUO0FBQVk7O0FBQzlCLGdCQUFJQSxDQUFDLEdBQUdILE9BQVIsRUFBaUI7QUFBRUEscUJBQU8sR0FBR0csQ0FBVjtBQUFhOztBQUNoQyxnQkFBSTdGLENBQUMsR0FBRzJGLE1BQVIsRUFBZ0I7QUFBRUEsb0JBQU0sR0FBRzNGLENBQVQ7QUFBWTs7QUFDOUIsZ0JBQUlBLENBQUMsR0FBRzRGLE9BQVIsRUFBaUI7QUFBRUEscUJBQU8sR0FBRzVGLENBQVY7QUFBYTtBQUNqQztBQUNIO0FBQ0Y7QUFDRjs7QUFDRCxRQUFJeUYsTUFBTSxLQUFLRixPQUFmLEVBQXdCO0FBQ3RCSCxZQUFNLENBQUNDLEtBQVAsQ0FBYSwyQkFBYjtBQUNBLGFBQU8sS0FBUDtBQUNEOztBQUNELFFBQUlJLE1BQU0sS0FBS0MsT0FBWCxJQUFzQkMsTUFBTSxLQUFLQyxPQUFyQyxFQUE4QztBQUM1Q1IsWUFBTSxDQUFDQyxLQUFQLENBQWEseUNBQWI7QUFDQSxhQUFPLEtBQVA7QUFDRDs7QUFDRCxRQUFJUyxRQUFRLEdBQUcsS0FBZjtBQUNBLFFBQUlDLFFBQVEsR0FBRyxLQUFmOztBQUNBLFNBQUssSUFBSUYsQ0FBQyxHQUFHSixNQUFiLEVBQXFCSSxDQUFDLElBQUlILE9BQTFCLEVBQW1DLEVBQUVHLENBQXJDLEVBQXdDO0FBQ3RDLFdBQUssSUFBSTdGLENBQUMsR0FBRzJGLE1BQWIsRUFBcUIzRixDQUFDLElBQUk0RixPQUExQixFQUFtQyxFQUFFNUYsQ0FBckMsRUFBd0M7QUFDdEMsWUFBSWpDLE9BQU8sQ0FBQzhILENBQUQsQ0FBUCxDQUFXN0YsQ0FBWCxNQUFrQjFELFlBQXRCLEVBQW9DO0FBQ2xDOEksZ0JBQU0sQ0FBQ0MsS0FBUCxDQUFhLDZCQUFiO0FBQ0EsaUJBQU8sS0FBUDtBQUNEOztBQUNELFlBQUl0RyxRQUFRLENBQUNoQixPQUFULENBQWlCOEgsQ0FBakIsRUFBb0I3RixDQUFwQixNQUEyQjFELFlBQS9CLEVBQTZDO0FBQzNDd0osa0JBQVEsR0FBRyxJQUFYO0FBQ0Q7O0FBQ0QsWUFBSUwsTUFBTSxLQUFLQyxPQUFYLElBQXNCRyxDQUFDLEdBQUcsQ0FBMUIsSUFBK0I5SCxPQUFPLENBQUM4SCxDQUFDLEdBQUMsQ0FBSCxDQUFQLENBQWE3RixDQUFiLE1BQW9CMUQsWUFBdkQsRUFBcUU7QUFBRXlKLGtCQUFRLEdBQUcsSUFBWDtBQUFrQjs7QUFDekYsWUFBSU4sTUFBTSxLQUFLQyxPQUFYLElBQXNCRyxDQUFDLEdBQUczSSxJQUExQixJQUFrQ2EsT0FBTyxDQUFDOEgsQ0FBQyxHQUFDLENBQUgsQ0FBUCxDQUFhN0YsQ0FBYixNQUFvQjFELFlBQTFELEVBQXdFO0FBQUV5SixrQkFBUSxHQUFHLElBQVg7QUFBa0I7O0FBQzVGLFlBQUlKLE1BQU0sS0FBS0MsT0FBWCxJQUFzQjVGLENBQUMsR0FBRyxDQUExQixJQUErQmpDLE9BQU8sQ0FBQzhILENBQUQsQ0FBUCxDQUFXN0YsQ0FBQyxHQUFDLENBQWIsTUFBb0IxRCxZQUF2RCxFQUFxRTtBQUFFeUosa0JBQVEsR0FBRyxJQUFYO0FBQWtCOztBQUN6RixZQUFJSixNQUFNLEtBQUtDLE9BQVgsSUFBc0I1RixDQUFDLEdBQUc5QyxJQUExQixJQUFrQ2EsT0FBTyxDQUFDOEgsQ0FBRCxDQUFQLENBQVc3RixDQUFDLEdBQUMsQ0FBYixNQUFvQjFELFlBQTFELEVBQXdFO0FBQUV5SixrQkFBUSxHQUFHLElBQVg7QUFBa0I7QUFDN0Y7QUFDRixLQXhEb0IsQ0F5RHJCOzs7QUFDQSxRQUFJTixNQUFNLEtBQUtDLE9BQVgsSUFBc0JDLE1BQU0sR0FBRyxDQUEvQixJQUFvQzVHLFFBQVEsQ0FBQ2hCLE9BQVQsQ0FBaUIwSCxNQUFqQixFQUF5QkUsTUFBTSxHQUFDLENBQWhDLE1BQXVDckosWUFBL0UsRUFBNkY7QUFBRXdKLGNBQVEsR0FBRyxJQUFYO0FBQWtCOztBQUNqSCxRQUFJTCxNQUFNLEtBQUtDLE9BQVgsSUFBc0JFLE9BQU8sR0FBRzFJLElBQWhDLElBQXdDNkIsUUFBUSxDQUFDaEIsT0FBVCxDQUFpQjBILE1BQWpCLEVBQXlCRyxPQUFPLEdBQUMsQ0FBakMsTUFBd0N0SixZQUFwRixFQUFrRztBQUFFd0osY0FBUSxHQUFHLElBQVg7QUFBa0I7O0FBQ3RILFFBQUlILE1BQU0sS0FBS0MsT0FBWCxJQUFzQkgsTUFBTSxHQUFHLENBQS9CLElBQW9DMUcsUUFBUSxDQUFDaEIsT0FBVCxDQUFpQjBILE1BQU0sR0FBQyxDQUF4QixFQUEyQkUsTUFBM0IsTUFBdUNySixZQUEvRSxFQUE2RjtBQUFFd0osY0FBUSxHQUFHLElBQVg7QUFBa0I7O0FBQ2pILFFBQUlILE1BQU0sS0FBS0MsT0FBWCxJQUFzQkYsT0FBTyxHQUFHeEksSUFBaEMsSUFBd0M2QixRQUFRLENBQUNoQixPQUFULENBQWlCMkgsT0FBTyxHQUFDLENBQXpCLEVBQTRCQyxNQUE1QixNQUF3Q3JKLFlBQXBGLEVBQWtHO0FBQUV3SixjQUFRLEdBQUcsSUFBWDtBQUFrQjs7QUFDdEgsUUFBSSxDQUFDQSxRQUFELElBQWEsQ0FBQ0MsUUFBZCxJQUEwQmhILFFBQVEsQ0FBQ2hCLE9BQVQsQ0FBaUJkLE1BQWpCLEVBQXlCQSxNQUF6QixNQUFxQ1gsWUFBbkUsRUFBaUY7QUFDL0U4SSxZQUFNLENBQUNDLEtBQVAsQ0FBYSx5QkFBYjtBQUNBLGFBQU8sS0FBUDtBQUNEOztBQUNELFdBQU8sSUFBUDtBQUNEOztBQUVELFdBQVNkLFdBQVQsR0FBdUI7QUFDckIsUUFBSUQsUUFBUSxHQUFHLEVBQWY7QUFDQSxRQUFJSSxRQUFRLEdBQUcsRUFBZjtBQUNBLFFBQUlDLFVBQVUsR0FBRyxFQUFqQjtBQUNBLFFBQUlxQixjQUFjLEdBQUcsRUFBckI7QUFDQSxRQUFJVCxPQUFPLEdBQUdySSxJQUFJLEdBQUMsQ0FBbkI7QUFDQSxRQUFJc0ksT0FBTyxHQUFHdEksSUFBSSxHQUFDLENBQW5CO0FBQ0EsUUFBSXVJLE1BQU0sR0FBR0YsT0FBYjtBQUNBLFFBQUlHLE9BQU8sR0FBRyxDQUFDLENBQWY7QUFDQSxRQUFJQyxNQUFNLEdBQUdILE9BQWI7QUFDQSxRQUFJSSxPQUFPLEdBQUcsQ0FBQyxDQUFmO0FBQ0EsUUFBSUssU0FBUyxHQUFHMUgsYUFBYSxDQUFDK0IsTUFBOUI7O0FBQ0EsU0FBSyxJQUFJMkMsS0FBSyxHQUFDLENBQWYsRUFBa0JBLEtBQUssR0FBR2dELFNBQTFCLEVBQXFDLEVBQUVoRCxLQUF2QyxFQUE4QztBQUM1QyxVQUFJaUQsR0FBRyxHQUFHQyxRQUFRLENBQUM1SCxhQUFhLENBQUMwRSxLQUFELENBQWIsQ0FBcUJtRCxLQUFyQixDQUEyQixHQUEzQixFQUFnQyxDQUFoQyxDQUFELENBQWxCO0FBQ0EsVUFBSUMsR0FBRyxHQUFHRixRQUFRLENBQUM1SCxhQUFhLENBQUMwRSxLQUFELENBQWIsQ0FBcUJtRCxLQUFyQixDQUEyQixHQUEzQixFQUFnQyxDQUFoQyxDQUFELENBQWxCOztBQUNBLFVBQUlGLEdBQUcsR0FBR1QsTUFBVixFQUFrQjtBQUNoQkEsY0FBTSxHQUFHUyxHQUFUO0FBQ0Q7O0FBQ0QsVUFBSUEsR0FBRyxHQUFHUixPQUFWLEVBQW1CO0FBQ2pCQSxlQUFPLEdBQUdRLEdBQVY7QUFDRDs7QUFDRCxVQUFJRyxHQUFHLEdBQUdWLE1BQVYsRUFBa0I7QUFDaEJBLGNBQU0sR0FBR1UsR0FBVDtBQUNEOztBQUNELFVBQUlBLEdBQUcsR0FBR1QsT0FBVixFQUFtQjtBQUNqQkEsZUFBTyxHQUFHUyxHQUFWO0FBQ0Q7QUFDRjs7QUFDRCxRQUFJWixNQUFNLEdBQUdDLE9BQVQsSUFBb0JPLFNBQVMsS0FBSyxDQUF0QyxFQUF5QztBQUFFO0FBQ3pDLFVBQUlJLEdBQUcsR0FBR1YsTUFBVixDQUR1QyxDQUNyQjtBQUNsQjs7QUFDQSxVQUFJVyxTQUFTLEdBQUdiLE1BQWhCOztBQUNBLGFBQU9hLFNBQVMsR0FBRyxDQUFaLElBQWlCdkksT0FBTyxDQUFDdUksU0FBUyxHQUFDLENBQVgsQ0FBUCxDQUFxQkQsR0FBckIsTUFBOEIvSixZQUF0RCxFQUFvRTtBQUNsRWdLLGlCQUFTLEdBQUdBLFNBQVMsR0FBRyxDQUF4QjtBQUNELE9BTnNDLENBT3ZDOzs7QUFDQSxVQUFJQyxVQUFVLEdBQUdiLE9BQWpCOztBQUNBLGFBQU9hLFVBQVUsR0FBR3JKLElBQWIsSUFBcUJhLE9BQU8sQ0FBQ3dJLFVBQVUsR0FBQyxDQUFaLENBQVAsQ0FBc0JGLEdBQXRCLE1BQStCL0osWUFBM0QsRUFBeUU7QUFDdkVpSyxrQkFBVSxHQUFHQSxVQUFVLEdBQUcsQ0FBMUI7QUFDRDs7QUFDRFAsb0JBQWMsR0FBR2xLLGtCQUFrQixDQUFDdUssR0FBRCxDQUFsQixHQUEwQnRLLGVBQWUsQ0FBQ3VLLFNBQUQsQ0FBMUQsQ0FadUMsQ0FZZ0M7O0FBQ3ZFLFdBQUssSUFBSUosR0FBRyxHQUFHSSxTQUFmLEVBQTBCSixHQUFHLElBQUlLLFVBQWpDLEVBQTZDLEVBQUVMLEdBQS9DLEVBQW9EO0FBQ2xEeEIsZ0JBQVEsR0FBR0EsUUFBUSxHQUFHM0csT0FBTyxDQUFDbUksR0FBRCxDQUFQLENBQWFHLEdBQWIsQ0FBdEI7QUFDQSxZQUFJcEQsS0FBSyxHQUFHaUQsR0FBRyxHQUFHLEdBQU4sR0FBWUcsR0FBeEI7O0FBQ0EsWUFBSTlILGFBQWEsQ0FBQzZFLE9BQWQsQ0FBc0JILEtBQXRCLElBQStCLENBQUMsQ0FBcEMsRUFBdUM7QUFBRTtBQUN2QyxjQUFJdUQsU0FBUyxHQUFHSCxHQUFoQjs7QUFDQSxpQkFBT0csU0FBUyxHQUFHLENBQVosSUFBaUJ6SSxPQUFPLENBQUNtSSxHQUFELENBQVAsQ0FBYU0sU0FBUyxHQUFDLENBQXZCLE1BQThCbEssWUFBdEQsRUFBb0U7QUFDbEVrSyxxQkFBUyxHQUFHQSxTQUFTLEdBQUcsQ0FBeEI7QUFDRDs7QUFDRCxjQUFJQyxVQUFVLEdBQUdKLEdBQWpCOztBQUNBLGlCQUFPSSxVQUFVLEdBQUd2SixJQUFiLElBQXFCYSxPQUFPLENBQUNtSSxHQUFELENBQVAsQ0FBYU8sVUFBVSxHQUFDLENBQXhCLE1BQStCbkssWUFBM0QsRUFBeUU7QUFDdkVtSyxzQkFBVSxHQUFHQSxVQUFVLEdBQUcsQ0FBMUI7QUFDRDs7QUFDRCxjQUFJRCxTQUFTLEdBQUdDLFVBQWhCLEVBQTRCO0FBQUU7QUFDNUIsZ0JBQUlDLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxpQkFBSyxJQUFJMUcsQ0FBQyxHQUFHd0csU0FBYixFQUF3QnhHLENBQUMsSUFBSXlHLFVBQTdCLEVBQXlDLEVBQUV6RyxDQUEzQyxFQUE4QztBQUM1QzBHLHVCQUFTLEdBQUdBLFNBQVMsR0FBRzNJLE9BQU8sQ0FBQ21JLEdBQUQsQ0FBUCxDQUFhbEcsQ0FBYixDQUF4QjtBQUNEOztBQUNEMkUsc0JBQVUsR0FBRyxDQUFDLEdBQUdBLFVBQUosRUFBZ0IrQixTQUFoQixDQUFiO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBQ0QsUUFBSWhDLFFBQVEsQ0FBQ3BFLE1BQVQsR0FBa0IsQ0FBdEIsRUFBeUI7QUFBRTtBQUN6QixVQUFJNEYsR0FBRyxHQUFHVCxNQUFWLENBRHVCLENBQ0w7QUFDbEI7O0FBQ0EsVUFBSWUsU0FBUyxHQUFHYixNQUFoQjs7QUFDQSxhQUFPYSxTQUFTLEdBQUcsQ0FBWixJQUFpQnpJLE9BQU8sQ0FBQ21JLEdBQUQsQ0FBUCxDQUFhTSxTQUFTLEdBQUMsQ0FBdkIsTUFBOEJsSyxZQUF0RCxFQUFvRTtBQUNsRWtLLGlCQUFTLEdBQUdBLFNBQVMsR0FBRyxDQUF4QjtBQUNELE9BTnNCLENBT3ZCOzs7QUFDQSxVQUFJQyxVQUFVLEdBQUdiLE9BQWpCOztBQUNBLGFBQU9hLFVBQVUsR0FBR3ZKLElBQWIsSUFBcUJhLE9BQU8sQ0FBQ21JLEdBQUQsQ0FBUCxDQUFhTyxVQUFVLEdBQUMsQ0FBeEIsTUFBK0JuSyxZQUEzRCxFQUF5RTtBQUN2RW1LLGtCQUFVLEdBQUdBLFVBQVUsR0FBRyxDQUExQjtBQUNEOztBQUNEVCxvQkFBYyxHQUFHakssZUFBZSxDQUFDbUssR0FBRCxDQUFmLEdBQXVCcEssa0JBQWtCLENBQUMwSyxTQUFELENBQTFELENBWnVCLENBWWdEOztBQUN2RTlCLGNBQVEsR0FBRyxFQUFYLENBYnVCLENBYVI7O0FBQ2ZDLGdCQUFVLEdBQUcsRUFBYixDQWR1QixDQWNOOztBQUNqQixXQUFLLElBQUkwQixHQUFHLEdBQUdHLFNBQWYsRUFBMEJILEdBQUcsSUFBSUksVUFBakMsRUFBNkMsRUFBRUosR0FBL0MsRUFBb0Q7QUFDbEQzQixnQkFBUSxHQUFHQSxRQUFRLEdBQUczRyxPQUFPLENBQUNtSSxHQUFELENBQVAsQ0FBYUcsR0FBYixDQUF0QjtBQUNBLFlBQUlwRCxLQUFLLEdBQUdpRCxHQUFHLEdBQUcsR0FBTixHQUFZRyxHQUF4Qjs7QUFDQSxZQUFJOUgsYUFBYSxDQUFDNkUsT0FBZCxDQUFzQkgsS0FBdEIsSUFBK0IsQ0FBQyxDQUFwQyxFQUF1QztBQUFFO0FBQ3ZDLGNBQUlxRCxTQUFTLEdBQUdKLEdBQWhCOztBQUNBLGlCQUFPSSxTQUFTLEdBQUcsQ0FBWixJQUFpQnZJLE9BQU8sQ0FBQ3VJLFNBQVMsR0FBQyxDQUFYLENBQVAsQ0FBcUJELEdBQXJCLE1BQThCL0osWUFBdEQsRUFBb0U7QUFDbEVnSyxxQkFBUyxHQUFHQSxTQUFTLEdBQUcsQ0FBeEI7QUFDRDs7QUFDRCxjQUFJQyxVQUFVLEdBQUdMLEdBQWpCOztBQUNBLGlCQUFPSyxVQUFVLEdBQUdySixJQUFiLElBQXFCYSxPQUFPLENBQUN3SSxVQUFVLEdBQUMsQ0FBWixDQUFQLENBQXNCRixHQUF0QixNQUErQi9KLFlBQTNELEVBQXlFO0FBQ3ZFaUssc0JBQVUsR0FBR0EsVUFBVSxHQUFHLENBQTFCO0FBQ0Q7O0FBQ0QsY0FBSUQsU0FBUyxHQUFHQyxVQUFoQixFQUE0QjtBQUFFO0FBQzVCLGdCQUFJRyxTQUFTLEdBQUcsRUFBaEI7O0FBQ0EsaUJBQUssSUFBSWIsQ0FBQyxHQUFHUyxTQUFiLEVBQXdCVCxDQUFDLElBQUlVLFVBQTdCLEVBQXlDLEVBQUVWLENBQTNDLEVBQThDO0FBQzVDYSx1QkFBUyxHQUFHQSxTQUFTLEdBQUczSSxPQUFPLENBQUM4SCxDQUFELENBQVAsQ0FBV1EsR0FBWCxDQUF4QjtBQUNEOztBQUNEMUIsc0JBQVUsR0FBRyxDQUFDLEdBQUdBLFVBQUosRUFBZ0IrQixTQUFoQixDQUFiO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBQ0RwQyxZQUFRLEdBQUc7QUFBQ0ksY0FBUSxFQUFFQSxRQUFYO0FBQXFCQyxnQkFBVSxFQUFFQSxVQUFqQztBQUE2Q0MsU0FBRyxFQUFFb0I7QUFBbEQsS0FBWDtBQUNBLFdBQU8xQixRQUFQO0FBQ0Q7O0FBRUQsV0FBU04sYUFBVCxHQUF5QjtBQUFFOztBQUN6QjtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNNLFFBQUlELFVBQVUsR0FBRztBQUNmaEcsYUFBTyxFQUFFLENBQUMsR0FBR2dCLFFBQVEsQ0FBQ2hCLE9BQWIsQ0FETTtBQUVmRSxZQUFNLEVBQUUsQ0FBQyxHQUFHYyxRQUFRLENBQUNkLE1BQWIsQ0FGTztBQUdmMEksVUFBSSxFQUFFdEksU0FBUyxLQUFLLEdBQWQsR0FBb0IsQ0FBQyxHQUFHVSxRQUFRLENBQUNsQixNQUFiLENBQXBCLEdBQTBDLENBQUMsR0FBR2tCLFFBQVEsQ0FBQ3BCLE1BQWIsQ0FIakM7QUFJZkgsV0FBSyxFQUFFLENBQUMsR0FBR0EsS0FBSixDQUpRO0FBS2ZpQixhQUFPLEVBQUVBO0FBTE0sS0FBakI7QUFPQSxXQUFPc0YsVUFBUDtBQUNEOztBQUNELFdBQVM2QyxpQkFBVCxHQUE2QjtBQUMzQixRQUFJLENBQUN6SCxXQUFMLEVBQWtCO0FBQ2hCQyxvQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNBckMsWUFBTSxDQUFDc0UsSUFBUCxDQUNFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNiM0UsY0FBTSxFQUFFQSxNQURLO0FBQ0c7QUFDaEJDLGdCQUFRLEVBQUVBLFFBRkc7QUFFTztBQUNwQjJFLFlBQUksRUFBRSxJQUhPO0FBR0Q7QUFDWkMsWUFBSSxFQUFFLFdBSk87QUFJTTtBQUNuQnpFLGdCQUFRLEVBQUVBLFFBTEc7QUFLTztBQUNwQjBFLGNBQU0sRUFBRS9FLGlCQU5LLENBTWE7O0FBTmIsT0FBZixDQURGO0FBVUQ7QUFDRjs7QUFFRCxXQUFTa0ssYUFBVCxHQUF5QjtBQUN2QjtBQUNBLFFBQUlDLFFBQVEsR0FBR2pJLEtBQUssQ0FBQ3lCLE1BQXJCO0FBQ0EsUUFBSXlHLFFBQVEsR0FBR2xJLEtBQUssQ0FBQ0EsS0FBSyxDQUFDeUIsTUFBTixHQUFhLENBQWQsQ0FBcEI7QUFDQSxRQUFJb0MsVUFBVSxHQUFHLENBQUMsR0FBR3FFLFFBQVEsQ0FBQ2hELFVBQVQsQ0FBb0JoRyxPQUF4QixDQUFqQjtBQUNBLFFBQUk0RSxTQUFTLEdBQUcsQ0FBQyxHQUFHb0UsUUFBUSxDQUFDaEQsVUFBVCxDQUFvQjlGLE1BQXhCLENBQWhCO0FBQ0EsUUFBSW1HLFFBQVEsR0FBRyxDQUFDLEdBQUcyQyxRQUFRLENBQUNoRCxVQUFULENBQW9CdkcsS0FBeEIsQ0FBZjtBQUNBLFFBQUlvRixTQUFTLEdBQUdtRSxRQUFRLENBQUN0QyxFQUFULEtBQWdCLEdBQWhCLEdBQXNCLENBQUMsR0FBR3NDLFFBQVEsQ0FBQ2hELFVBQVQsQ0FBb0I0QyxJQUF4QixDQUF0QixHQUFzRCxDQUFDLEdBQUdoSixNQUFKLENBQXRFO0FBQ0EsUUFBSWtGLFNBQVMsR0FBR2tFLFFBQVEsQ0FBQ3RDLEVBQVQsS0FBZ0IsR0FBaEIsR0FBc0IsQ0FBQyxHQUFHc0MsUUFBUSxDQUFDaEQsVUFBVCxDQUFvQjRDLElBQXhCLENBQXRCLEdBQXNELENBQUMsR0FBRzlJLE1BQUosQ0FBdEU7QUFDQSxRQUFJb0csVUFBVSxHQUFHOEMsUUFBUSxDQUFDaEQsVUFBVCxDQUFvQnRGLE9BQXJDO0FBQ0EsUUFBSTRGLFlBQVksR0FBRzBDLFFBQVEsQ0FBQ3RDLEVBQTVCLENBVnVCLENBVVM7O0FBQ2hDLFFBQUlJLFFBQVEsR0FBRyxDQUFDLEdBQUdoRyxLQUFKLENBQWY7QUFDQWdHLFlBQVEsQ0FBQzFELE1BQVQsQ0FBZ0IyRixRQUFRLEdBQUMsQ0FBekIsRUFBMkIsQ0FBM0I7QUFDQSxRQUFJRSxXQUFXLEdBQUc7QUFDaEJqSixhQUFPLEVBQUUsQ0FBQyxHQUFHMkUsVUFBSixDQURPO0FBRWhCekUsWUFBTSxFQUFFLENBQUMsR0FBRzBFLFNBQUosQ0FGUTtBQUdoQjlFLFlBQU0sRUFBRSxDQUFDLEdBQUdnRixTQUFKLENBSFE7QUFJaEJsRixZQUFNLEVBQUUsQ0FBQyxHQUFHaUYsU0FBSjtBQUpRLEtBQWxCO0FBTUFkLGtCQUFjO0FBQ2RyRSxZQUFRLENBQUMyRyxRQUFELENBQVI7QUFDQXhHLGFBQVMsQ0FBQ2dGLFNBQUQsQ0FBVDtBQUNBOUUsYUFBUyxDQUFDK0UsU0FBRCxDQUFUO0FBQ0E3RSxjQUFVLENBQUMwRSxVQUFELENBQVY7QUFDQXhFLGFBQVMsQ0FBQ3lFLFNBQUQsQ0FBVDtBQUNBckUsZ0JBQVksQ0FBQytGLFlBQUQsQ0FBWjtBQUNBM0YsY0FBVSxDQUFDdUYsVUFBRCxDQUFWO0FBQ0FuRixZQUFRLENBQUMrRixRQUFELENBQVI7QUFDQTdGLGVBQVcsQ0FBQ2dJLFdBQUQsQ0FBWCxDQTVCdUIsQ0E2QnZCOztBQUNBakssVUFBTSxDQUFDc0UsSUFBUCxDQUNFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNiM0UsWUFBTSxFQUFFQSxNQURLO0FBQ0c7QUFDaEJDLGNBQVEsRUFBRUEsUUFGRztBQUVPO0FBQ3BCMkUsVUFBSSxFQUFFLElBSE87QUFHRDtBQUNaQyxVQUFJLEVBQUUsVUFKTztBQUlLO0FBQ2xCekUsY0FBUSxFQUFFQSxRQUxHO0FBS087QUFDcEIwRSxZQUFNLEVBQUUvRSxpQkFOSztBQU9iYSxXQUFLLEVBQUU0RyxRQVBNO0FBT0k7QUFDakJ6RyxZQUFNLEVBQUVpRixTQVJLO0FBUU07QUFDbkIvRSxZQUFNLEVBQUVnRixTQVRLO0FBU007QUFDbkI5RSxhQUFPLEVBQUUyRSxVQVZJO0FBVVE7QUFDckJ6RSxZQUFNLEVBQUUwRSxTQVhLO0FBV007QUFDbkJ0RSxlQUFTLEVBQUVnRyxZQVpFO0FBWVk7QUFDekI1RixhQUFPLEVBQUV3RixVQWJJO0FBYVE7QUFDckJwRixXQUFLLEVBQUVnRyxRQWRNO0FBY0k7QUFDakI5RixjQUFRLEVBQUVpSTtBQWZHLEtBQWYsQ0FERjtBQW1CRDs7QUFFRCxRQUFNQyxXQUFXLEdBQUcsTUFBTTtBQUN4QmpKLGNBQVUsQ0FBQyxDQUFDLEdBQUdlLFFBQVEsQ0FBQ2hCLE9BQWIsQ0FBRCxDQUFWO0FBQ0FHLGFBQVMsQ0FBQyxDQUFDLEdBQUdhLFFBQVEsQ0FBQ2QsTUFBYixDQUFELENBQVQ7QUFDQUwsYUFBUyxDQUFDLENBQUMsR0FBR21CLFFBQVEsQ0FBQ3BCLE1BQWIsQ0FBRCxDQUFUO0FBQ0FHLGFBQVMsQ0FBQyxDQUFDLEdBQUdpQixRQUFRLENBQUNsQixNQUFiLENBQUQsQ0FBVDtBQUNBTyxnQkFBWSxDQUFDLENBQUMsQ0FBRixDQUFaO0FBQ0FJLG9CQUFnQixDQUFDLEVBQUQsQ0FBaEI7QUFDQUksVUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFGLEVBQUksQ0FBQyxDQUFMLEVBQU9wQyxXQUFQLENBQUQsQ0FBTjtBQUNELEdBUkQ7O0FBVUEsUUFBTTBLLFlBQVksR0FBRyxNQUFNO0FBQ3pCLFFBQUluRCxVQUFVLEdBQUdDLGFBQWEsRUFBOUI7QUFDQSxRQUFJUSxPQUFPLEdBQUc7QUFBQ0MsUUFBRSxFQUFFLEdBQUw7QUFBVWpELFVBQUksRUFBRSxNQUFoQjtBQUF3QnVDLGdCQUFVLEVBQUVBO0FBQXBDLEtBQWQ7QUFDQSxRQUFJYyxRQUFRLEdBQUcsQ0FBQyxHQUFHaEcsS0FBSixFQUFXMkYsT0FBWCxDQUFmO0FBQ0EsUUFBSUgsWUFBWSxHQUFHOEMsWUFBWSxDQUFDdEMsUUFBRCxDQUFaLEdBQXlCLEdBQXpCLEdBQStCLEdBQWxELENBSnlCLENBSThCOztBQUN2RG9DLGVBQVcsR0FMYyxDQUtWOztBQUNmbkYsa0JBQWM7QUFDZHhELGdCQUFZLENBQUMrRixZQUFELENBQVo7QUFDQXZGLFlBQVEsQ0FBQytGLFFBQUQsQ0FBUjtBQUNBOUgsVUFBTSxDQUFDc0UsSUFBUCxDQUNFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNiM0UsWUFBTSxFQUFFQSxNQURLO0FBQ0c7QUFDaEJDLGNBQVEsRUFBRUEsUUFGRztBQUVPO0FBQ3BCMkUsVUFBSSxFQUFFLElBSE87QUFHRDtBQUNaQyxVQUFJLEVBQUUsS0FKTztBQUlBO0FBQ2JDLFlBQU0sRUFBRS9FLGlCQUxLO0FBTWJvQixhQUFPLEVBQUVnQixRQUFRLENBQUNoQixPQU5MO0FBTWM7QUFDM0JFLFlBQU0sRUFBRWMsUUFBUSxDQUFDZCxNQVBKO0FBT1k7QUFDekJOLFlBQU0sRUFBRW9CLFFBQVEsQ0FBQ3BCLE1BUko7QUFRWTtBQUN6QkgsV0FBSyxFQUFFQSxLQVRNO0FBU0M7QUFDZGEsZUFBUyxFQUFFZ0csWUFWRTtBQVVZO0FBQ3pCckgsY0FBUSxFQUFFQSxRQVhHO0FBV087QUFDcEI2QixXQUFLLEVBQUVnRyxRQVpNO0FBWUk7QUFDakJwRyxhQUFPLEVBQUVBLE9BYkksQ0FhSTs7QUFiSixLQUFmLENBREY7QUFpQkQsR0ExQkQ7O0FBNEJBLFFBQU0ySSxVQUFVLEdBQUcsTUFBTTtBQUN2QixRQUFJckQsVUFBVSxHQUFHQyxhQUFhLEVBQTlCO0FBQ0EsUUFBSVEsT0FBTyxHQUFHO0FBQUNDLFFBQUUsRUFBRSxHQUFMO0FBQVVqRCxVQUFJLEVBQUUsTUFBaEI7QUFBd0J1QyxnQkFBVSxFQUFFQTtBQUFwQyxLQUFkO0FBQ0EsUUFBSWMsUUFBUSxHQUFHLENBQUMsR0FBR2hHLEtBQUosRUFBVzJGLE9BQVgsQ0FBZjtBQUNBLFFBQUlILFlBQVksR0FBRzhDLFlBQVksQ0FBQ3RDLFFBQUQsQ0FBWixHQUF5QixHQUF6QixHQUErQixHQUFsRCxDQUp1QixDQUlnQzs7QUFDdkRvQyxlQUFXLEdBTFksQ0FLUjs7QUFDZm5GLGtCQUFjO0FBQ2R4RCxnQkFBWSxDQUFDK0YsWUFBRCxDQUFaO0FBQ0F2RixZQUFRLENBQUMrRixRQUFELENBQVI7QUFDQTlILFVBQU0sQ0FBQ3NFLElBQVAsQ0FDRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDYjNFLFlBQU0sRUFBRUEsTUFESztBQUNHO0FBQ2hCQyxjQUFRLEVBQUVBLFFBRkc7QUFFTztBQUNwQjJFLFVBQUksRUFBRSxJQUhPO0FBR0Q7QUFDWkMsVUFBSSxFQUFFLEtBSk87QUFJQTtBQUNiQyxZQUFNLEVBQUUvRSxpQkFMSztBQU1ib0IsYUFBTyxFQUFFZ0IsUUFBUSxDQUFDaEIsT0FOTDtBQU1jO0FBQzNCRSxZQUFNLEVBQUVjLFFBQVEsQ0FBQ2QsTUFQSjtBQU9ZO0FBQ3pCSixZQUFNLEVBQUVrQixRQUFRLENBQUNsQixNQVJKO0FBUVk7QUFDekJMLFdBQUssRUFBRUEsS0FUTTtBQVNDO0FBQ2RhLGVBQVMsRUFBRWdHLFlBVkU7QUFVWTtBQUN6QnJILGNBQVEsRUFBRUEsUUFYRztBQVdPO0FBQ3BCNkIsV0FBSyxFQUFFZ0csUUFaTSxDQVlHOztBQVpILEtBQWYsQ0FERjtBQWdCRCxHQXpCRDs7QUEyQkEsV0FBU3NDLFlBQVQsQ0FBc0JFLFFBQXRCLEVBQWdDO0FBQzVCLFFBQUlDLElBQUksR0FBR0QsUUFBUSxDQUFDL0csTUFBVCxHQUFrQixDQUE3QjtBQUNBLFFBQUlpSCxVQUFVLEdBQUdELElBQUksR0FBRyxDQUF4QjtBQUNBLFdBQU9DLFVBQVUsR0FBRyxDQUFDLENBQWQsSUFDTEYsUUFBUSxDQUFDRSxVQUFELENBQVIsQ0FBcUIvRixJQUFyQixLQUE4QixNQUR6QixJQUVMNkYsUUFBUSxDQUFDQyxJQUFELENBQVIsQ0FBZTlGLElBQWYsS0FBd0IsTUFGMUI7QUFHSDs7QUFFRCxRQUFNZixlQUFlLEdBQUcsTUFBTTtBQUM1QjFELFVBQU0sQ0FBQ3NFLElBQVAsQ0FDRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDYjNFLFlBQU0sRUFBRUEsTUFESztBQUNHO0FBQ2hCQyxjQUFRLEVBQUVBLFFBRkc7QUFFTztBQUNwQjJFLFVBQUksRUFBRSxJQUhPO0FBR0Q7QUFDWkUsWUFBTSxFQUFFL0UsaUJBSks7QUFLYjBCLGVBQVMsRUFBRUEsU0FMRTtBQUtTO0FBQ3RCckIsY0FBUSxFQUFFQSxRQU5HO0FBTU87QUFDcEJ5RSxVQUFJLEVBQUUsaUJBUE8sQ0FPVzs7QUFQWCxLQUFmLENBREY7QUFXRCxHQVpEOztBQWNBLFFBQU0rRixhQUFhLEdBQUlDLEtBQUQsSUFBVztBQUMvQkEsU0FBSyxDQUFDQyxjQUFOOztBQUNBLFFBQUkvSyxpQkFBaUIsS0FBSzBCLFNBQTFCLEVBQXFDO0FBQUM7QUFBUTs7QUFDOUMsUUFBSW9KLEtBQUssQ0FBQ0UsR0FBTixLQUFjLE9BQWxCLEVBQTJCO0FBQ3pCdEosZUFBUyxLQUFLLEdBQWQsR0FBb0J3RixnQkFBZ0IsRUFBcEMsR0FBeUNpQixhQUFhLEVBQXREO0FBQ0E7QUFDRDs7QUFDRCxRQUFJMkMsS0FBSyxDQUFDRSxHQUFOLEtBQWMsUUFBbEIsRUFBNEI7QUFDMUJWLGlCQUFXO0FBQ1g7QUFDRDs7QUFDRCxRQUFJVyxVQUFVLEdBQUcsY0FBakIsQ0FYK0IsQ0FXRTs7QUFDakMsUUFBSUgsS0FBSyxDQUFDRSxHQUFOLENBQVVFLEtBQVYsQ0FBZ0JELFVBQWhCLENBQUosRUFBaUM7QUFDL0IsVUFBSUUsTUFBTSxHQUFHTCxLQUFLLENBQUNFLEdBQU4sQ0FBVUksV0FBVixFQUFiO0FBQ0EsVUFBSXBCLElBQUksR0FBR3RJLFNBQVMsS0FBSyxHQUFkLEdBQW9CVixNQUFwQixHQUE2QkUsTUFBeEM7QUFDQSxVQUFJMkUsWUFBWSxHQUFHbUUsSUFBSSxDQUFDdkQsT0FBTCxDQUFhMEUsTUFBYixDQUFuQjs7QUFDQSxVQUFJdEYsWUFBWSxLQUFLLENBQUMsQ0FBdEIsRUFBeUI7QUFDdkJBLG9CQUFZLEdBQUdtRSxJQUFJLENBQUN2RCxPQUFMLENBQWEsR0FBYixDQUFmLENBRHVCLENBQ1c7QUFDbkM7O0FBQ0QsVUFBSVosWUFBWSxHQUFHLENBQUMsQ0FBcEIsRUFBdUI7QUFBRTtBQUN2QixZQUFJMEQsR0FBRyxHQUFHdkgsR0FBRyxDQUFDLENBQUQsQ0FBYjtBQUNBLFlBQUkwSCxHQUFHLEdBQUcxSCxHQUFHLENBQUMsQ0FBRCxDQUFiO0FBQ0EsWUFBSXFKLEdBQUcsR0FBR3JKLEdBQUcsQ0FBQyxDQUFELENBQWI7O0FBQ0EsWUFBSXVILEdBQUcsR0FBRSxDQUFDLENBQU4sSUFBV0csR0FBRyxHQUFHLENBQUMsQ0FBbEIsSUFBdUIyQixHQUFHLEtBQUt4TCxXQUFuQyxFQUFnRDtBQUFFO0FBQ2hEO0FBQ0EsY0FBSWlHLE1BQU0sR0FBRzlELEdBQWI7O0FBQ0EsY0FBSXFKLEdBQUcsS0FBSyxHQUFaLEVBQWlCO0FBQUU7QUFDakIsZ0JBQUlDLElBQUksR0FBRyxDQUFDLENBQVo7O0FBQ0EsaUJBQUssSUFBSWpJLENBQUMsR0FBR3FHLEdBQUcsR0FBRyxDQUFuQixFQUFzQnJHLENBQUMsR0FBRzlDLElBQUksR0FBRyxDQUFYLElBQWdCK0ssSUFBSSxLQUFLLENBQUMsQ0FBaEQsRUFBbURqSSxDQUFDLEVBQXBELEVBQXdEO0FBQ3RELGtCQUFJakMsT0FBTyxDQUFDbUksR0FBRCxDQUFQLENBQWFsRyxDQUFiLE1BQW9CMUQsWUFBeEIsRUFBc0M7QUFBQzJMLG9CQUFJLEdBQUdqSSxDQUFQO0FBQVU7QUFDbEQ7O0FBQ0QsZ0JBQUlpSSxJQUFJLEtBQUssQ0FBQyxDQUFkLEVBQWlCO0FBQ2Z4RixvQkFBTSxHQUFHLENBQUMsQ0FBQyxDQUFGLEVBQUksQ0FBQyxDQUFMLEVBQU9qRyxXQUFQLENBQVQ7QUFDRCxhQUZELE1BRU87QUFDTGlHLG9CQUFNLEdBQUcsQ0FBQ3lELEdBQUQsRUFBTStCLElBQU4sRUFBWSxHQUFaLENBQVQ7QUFDRDs7QUFDRDVGLGtDQUFzQixDQUFDNkQsR0FBRCxFQUFLRyxHQUFMLEVBQVM3RCxZQUFULEVBQXNCQyxNQUF0QixDQUF0QjtBQUNBckUsd0JBQVksQ0FBQyxDQUFDLENBQUYsQ0FBWixDQVhlLENBV0c7O0FBQ2xCO0FBQ0Q7O0FBQ0QsY0FBSTRKLEdBQUcsS0FBSyxHQUFaLEVBQWlCO0FBQUU7QUFDakIsZ0JBQUlFLElBQUksR0FBRyxDQUFDLENBQVo7QUFDQSxnQkFBSTNDLE9BQU8sR0FBSXZJLFFBQVEsR0FBQyxDQUFWLEdBQWEsQ0FBM0I7O0FBQ0EsaUJBQUssSUFBSTZJLENBQUMsR0FBR0ssR0FBRyxHQUFHLENBQW5CLEVBQXNCTCxDQUFDLEdBQUdOLE9BQUosSUFBZTJDLElBQUksS0FBSyxDQUFDLENBQS9DLEVBQWtEckMsQ0FBQyxFQUFuRCxFQUF1RDtBQUNyRCxrQkFBSTlILE9BQU8sQ0FBQzhILENBQUQsQ0FBUCxDQUFXUSxHQUFYLE1BQW9CL0osWUFBeEIsRUFBc0M7QUFBQzRMLG9CQUFJLEdBQUdyQyxDQUFQO0FBQVU7QUFDbEQ7O0FBQ0QsZ0JBQUlxQyxJQUFJLEtBQUssQ0FBQyxDQUFkLEVBQWlCO0FBQ2Z6RixvQkFBTSxHQUFHLENBQUMsQ0FBQyxDQUFGLEVBQUksQ0FBQyxDQUFMLEVBQU9qRyxXQUFQLENBQVQ7QUFDRCxhQUZELE1BRU87QUFDTGlHLG9CQUFNLEdBQUcsQ0FBQ3lGLElBQUQsRUFBTzdCLEdBQVAsRUFBWSxHQUFaLENBQVQ7QUFDRDs7QUFDRGhFLGtDQUFzQixDQUFDNkQsR0FBRCxFQUFLRyxHQUFMLEVBQVM3RCxZQUFULEVBQXNCQyxNQUF0QixDQUF0QjtBQUNBckUsd0JBQVksQ0FBQyxDQUFDLENBQUYsQ0FBWixDQVplLENBWUc7O0FBQ2xCO0FBQ0Q7QUFDRjtBQUNGOztBQUNEO0FBQ0Q7O0FBQ0QsUUFBSXFKLEtBQUssQ0FBQ0UsR0FBTixLQUFjLFdBQWQsSUFBNkJwSixhQUFhLENBQUMrQixNQUFkLEdBQXVCLENBQXhELEVBQTJEO0FBQ3pEO0FBQ0E7QUFDQSxVQUFJMkMsS0FBSyxHQUFHMUUsYUFBYSxDQUFDQSxhQUFhLENBQUMrQixNQUFkLEdBQXVCLENBQXhCLENBQXpCLENBSHlELENBR0o7O0FBQ3JELFVBQUkwQyxnQkFBZ0IsR0FBRyxDQUFDLEdBQUd6RSxhQUFKLENBQXZCO0FBQ0EsVUFBSXFFLFNBQVMsR0FBRyxDQUFDLEdBQUdqRixNQUFKLENBQWhCO0FBQ0EsVUFBSWtGLFNBQVMsR0FBRyxDQUFDLEdBQUdoRixNQUFKLENBQWhCO0FBQ0EsVUFBSThFLFNBQVMsR0FBRyxDQUFDLEdBQUcxRSxNQUFKLENBQWhCO0FBQ0EsVUFBSXlFLFVBQVUsR0FBRyxDQUFDLEdBQUczRSxPQUFKLENBQWpCO0FBQ0EsVUFBSTBFLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBRixFQUFJLENBQUMsQ0FBTCxFQUFPakcsV0FBUCxDQUFiO0FBQ0EsVUFBSWdHLFlBQVksR0FBR3JFLFNBQW5CO0FBQ0E2RSxzQkFBZ0IsQ0FBQzdCLE1BQWpCLENBQXdCNUMsYUFBYSxDQUFDK0IsTUFBZCxHQUFxQixDQUE3QyxFQUErQyxDQUEvQztBQUNBLFVBQUk0RixHQUFHLEdBQUdDLFFBQVEsQ0FBQ2xELEtBQUssQ0FBQ21ELEtBQU4sQ0FBWSxHQUFaLEVBQWlCLENBQWpCLENBQUQsQ0FBbEI7QUFDQSxVQUFJQyxHQUFHLEdBQUdGLFFBQVEsQ0FBQ2xELEtBQUssQ0FBQ21ELEtBQU4sQ0FBWSxHQUFaLEVBQWlCLENBQWpCLENBQUQsQ0FBbEI7QUFDQSxVQUFJK0IsWUFBWSxHQUFHcEssT0FBTyxDQUFDbUksR0FBRCxDQUFQLENBQWFHLEdBQWIsQ0FBbkI7O0FBQ0EsVUFBSWhJLFNBQVMsS0FBSyxHQUFsQixFQUF1QjtBQUNyQnVFLGlCQUFTLENBQUMxQixJQUFWLENBQWVpSCxZQUFmO0FBQ0EzRixvQkFBWSxHQUFHSSxTQUFTLENBQUN0QyxNQUFWLEdBQWlCLENBQWhDO0FBQ0QsT0FIRCxNQUdPO0FBQ0x1QyxpQkFBUyxDQUFDM0IsSUFBVixDQUFlaUgsWUFBZjtBQUNBM0Ysb0JBQVksR0FBR0ssU0FBUyxDQUFDdkMsTUFBVixHQUFpQixDQUFoQztBQUNEOztBQUNEcUMsZUFBUyxDQUFDdUQsR0FBRCxDQUFULENBQWVHLEdBQWYsSUFBc0I5SixXQUF0QjtBQUNBbUcsZ0JBQVUsQ0FBQ3dELEdBQUQsQ0FBVixDQUFnQkcsR0FBaEIsSUFBdUIvSixZQUF2QjtBQUNBLFVBQUkwTCxHQUFHLEdBQUdySixHQUFHLENBQUMsQ0FBRCxDQUFiOztBQUNBLFVBQUlxSixHQUFHLEtBQUt4TCxXQUFaLEVBQXlCO0FBQ3ZCO0FBQ0FpRyxjQUFNLEdBQUcsQ0FBQ3lELEdBQUQsRUFBS0csR0FBTCxFQUFTMkIsR0FBVCxDQUFUOztBQUNBLFlBQUl6SixhQUFhLENBQUMrQixNQUFkLEtBQXlCLENBQTdCLEVBQWdDO0FBQzlCa0Msc0JBQVksR0FBRyxDQUFDLENBQWhCLENBRDhCLENBQ1g7QUFDcEI7QUFDRjs7QUFDRGhFLHNCQUFnQixDQUFDd0UsZ0JBQUQsQ0FBaEI7QUFDQWxGLGVBQVMsQ0FBQytFLFNBQUQsQ0FBVDtBQUNBakYsZUFBUyxDQUFDZ0YsU0FBRCxDQUFUO0FBQ0E1RSxnQkFBVSxDQUFDMEUsVUFBRCxDQUFWO0FBQ0F4RSxlQUFTLENBQUN5RSxTQUFELENBQVQ7QUFDQS9ELFlBQU0sQ0FBQzZELE1BQUQsQ0FBTjtBQUNBckUsa0JBQVksQ0FBQ29FLFlBQUQsQ0FBWjtBQUNEO0FBQ0YsR0FuR0Q7O0FBb0dBLHNCQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQywyQ0FBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBLCtCQUNFO0FBQUksbUJBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFO0FBQUssaUJBQVMsRUFBQywyREFBZjtBQUFBLGdDQUNZNUYsTUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFPRTtBQUFLLGlCQUFTLEVBQUMsK0RBQWY7QUFBQSxrQ0FDY0QsaUJBQWlCLEtBQUssR0FBdEIsR0FBNEJFLFFBQTVCLEdBQXVDd0MsT0FEckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGLGVBVUU7QUFBSyxpQkFBUyxFQUFDLDREQUFmO0FBQUEsK0JBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUUsUUFBWjtBQUFBLGlDQUNFO0FBQUEsbUNBQUc7QUFBRyx1QkFBUyxFQUFDLGdCQUFiO0FBQThCLDZCQUFZLFNBQTFDO0FBQW9ELG1CQUFLLEVBQUMsTUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkYsZUFlRTtBQUFLLGlCQUFTLEVBQUMsZ0VBQWY7QUFBQSwrQkFDVzFDLGlCQUFpQixLQUFLLEdBQXRCLEdBQTRCMEMsT0FBNUIsR0FBc0N4QyxRQURqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBb0JFO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMseUJBQWY7QUFBQSxnQ0FDSSxxRUFBQyw4REFBRDtBQUFpQixlQUFLLEVBQUVXLEtBQXhCO0FBQStCLG9CQUFVLEVBQUViLGlCQUFpQixLQUFLLEdBQXRCLEdBQTRCa0IsTUFBNUIsR0FBcUNGO0FBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSSxxRUFBQyx3REFBRDtBQUFXLGVBQUssRUFBRWtCO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBS0U7QUFBSyxpQkFBUyxFQUFDLDBCQUFmO0FBQUEsa0JBQ0dsQyxpQkFBaUIsS0FBSyxHQUF0QixnQkFDQyxxRUFBQyx5REFBRDtBQUNFLG1CQUFTLEVBQUVnQixNQURiO0FBRUUsbUJBQVMsRUFBRVUsU0FGYjtBQUdFLG1CQUFTLEVBQUVGLFNBSGI7QUFJRSxpQkFBTyxFQUFHaUssRUFBRCxJQUFRN0UsbUJBQW1CLENBQUM2RSxFQUFELENBSnRDO0FBS0UsMkJBQWlCLEVBQUUsTUFBTXZFLGdCQUFnQixFQUwzQztBQU1FLDJCQUFpQixFQUFFLE1BQU1vRCxXQUFXLEVBTnRDO0FBT0UsNkJBQW1CLEVBQUUsTUFBTTlCLGtCQUFrQixFQVAvQztBQVFFLHlCQUFlLEVBQUUsTUFBTStCLFlBQVksRUFSckM7QUFTRSw2QkFBbUIsRUFBRSxNQUFNTCxhQUFhLEVBVDFDO0FBVUUsMEJBQWdCLEVBQUUsTUFBTUQsaUJBQWlCLEVBVjNDO0FBV0UsMkJBQWlCLEVBQUVqSyxpQkFYckI7QUFZRSxlQUFLLEVBQUVrQyxLQVpUO0FBYUUscUJBQVcsRUFBRU07QUFiZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGdCQWlCQyxxRUFBQyx5REFBRDtBQUNFLG1CQUFTLEVBQUV0QixNQURiO0FBRUUsbUJBQVMsRUFBRVEsU0FGYjtBQUdFLG1CQUFTLEVBQUVGLFNBSGI7QUFJRSxpQkFBTyxFQUFHaUssRUFBRCxJQUFRN0UsbUJBQW1CLENBQUM2RSxFQUFELENBSnRDO0FBS0UsMkJBQWlCLEVBQUUsTUFBTXRELGFBQWEsRUFMeEM7QUFNRSwyQkFBaUIsRUFBRSxNQUFNbUMsV0FBVyxFQU50QztBQU9FLDZCQUFtQixFQUFFLE1BQU0zQixlQUFlLEVBUDVDO0FBUUUseUJBQWUsRUFBRSxNQUFNOEIsVUFBVSxFQVJuQztBQVNFLDZCQUFtQixFQUFFLE1BQU1QLGFBQWEsRUFUMUM7QUFVRSwwQkFBZ0IsRUFBRSxNQUFNRCxpQkFBaUIsRUFWM0M7QUFXRSwyQkFBaUIsRUFBRWpLLGlCQVhyQjtBQVlFLGVBQUssRUFBRWtDLEtBWlQ7QUFhRSxxQkFBVyxFQUFFTTtBQWJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRixlQXdDRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGtCQUNHeEMsaUJBQWlCLEtBQUswQixTQUF0QixnQkFDQztBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFxQiwwQkFBZ0IsRUFBRW1KLGFBQXZDO0FBQUEsaUNBQ0UscUVBQUMsaURBQUQ7QUFDRSxtQkFBTyxFQUFFekosT0FEWDtBQUVFLGtCQUFNLEVBQUVFLE1BRlY7QUFHRSxlQUFHLEVBQUVVLEdBSFA7QUFJRSxtQkFBTyxFQUFFLENBQUMyRCxFQUFELEVBQUtDLEVBQUwsS0FBWUYsc0JBQXNCLENBQUNDLEVBQUQsRUFBS0MsRUFBTCxFQUFTLENBQUMsQ0FBVixFQUFZLElBQVosQ0FKN0M7QUFLRSxvQkFBUSxFQUFFdkY7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxnQkFXQztBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGlDQUNFLHFFQUFDLGlEQUFEO0FBQ0UsbUJBQU8sRUFBRWUsT0FEWDtBQUVFLGtCQUFNLEVBQUVFLE1BRlY7QUFHRSxlQUFHLEVBQUVVLEdBSFA7QUFJRSxtQkFBTyxFQUFFLE1BQU0sQ0FBRSxDQUpuQjtBQUtFLG9CQUFRLEVBQUUzQjtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWko7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF4Q0YsZUErREU7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxnQ0FDRSxxRUFBQyxXQUFEO0FBQWEsaUJBQU8sRUFBRXlCO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSxxRUFBQyxJQUFEO0FBQU0sZ0JBQU0sRUFBRTdCLE1BQWQ7QUFBc0IsZ0JBQU0sRUFBRUcsTUFBOUI7QUFBc0Msa0JBQVEsRUFBRUYsUUFBaEQ7QUFBMEQsY0FBSSxFQUFFMEMsUUFBaEU7QUFBMEUsaUJBQU8sRUFBRUMsV0FBbkY7QUFBZ0csMkJBQWlCLEVBQUU3QztBQUFuSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkEvREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBCRixlQXdGRTtBQUFLLGVBQVMsRUFBQywyQ0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxvQ0FBZjtBQUFBLGtCQUNHMEIsU0FBUyxLQUFLLEdBQWQsZ0JBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZ0JBR0M7QUFBQSxvQkFBSXBDLEtBQUssQ0FBQ2dELFNBQUQ7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeEZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBb0dELENBcG5DSDs7SUFBTXhDLEk7O0tBQUFBLEk7O0FBc25DSixNQUFNNEwsV0FBVyxHQUFJQyxLQUFELElBQVc7QUFDN0Isc0JBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLGlDQUNpQkEsS0FBSyxDQUFDN0osT0FEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQU5EOztNQUFNNEosVzs7QUFRTixNQUFNRSxJQUFJLEdBQUcsQ0FBQztBQUFDM0wsUUFBRDtBQUFTRyxRQUFUO0FBQWlCRixVQUFqQjtBQUEyQjJMLE1BQTNCO0FBQWlDQyxTQUFqQztBQUEwQzlMO0FBQTFDLENBQUQsS0FBa0U7QUFBQTs7QUFDN0UsUUFBTTtBQUFBLE9BQUMrTCxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QmpMLHNEQUFRLENBQUMsRUFBRCxDQUF0Qzs7QUFFQSxRQUFNOEosYUFBYSxHQUFJQyxLQUFELElBQVc7QUFDL0IsUUFBSUEsS0FBSyxDQUFDRSxHQUFOLEtBQWMsT0FBZCxJQUF5QmUsT0FBTyxDQUFDcEksTUFBUixHQUFpQixDQUE5QyxFQUFpRDtBQUMvQ21ILFdBQUssQ0FBQ0MsY0FBTjtBQUNBLFVBQUlrQixPQUFPLEdBQUcsQ0FBQyxHQUFHSixJQUFKLEVBQVU7QUFBQ3JHLFlBQUksRUFBRXRGLFFBQVA7QUFBaUI4RSxXQUFHLEVBQUUrRztBQUF0QixPQUFWLENBQWQ7QUFDQSxVQUFJdEcsT0FBTyxHQUFHc0csT0FBZDtBQUNBRCxhQUFPLENBQUNHLE9BQUQsQ0FBUDtBQUNBRCxnQkFBVSxDQUFDLEVBQUQsQ0FBVjtBQUNBNUwsWUFBTSxDQUFDc0UsSUFBUCxDQUNFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNiM0UsY0FBTSxFQUFFQSxNQURLO0FBQ0c7QUFDaEJDLGdCQUFRLEVBQUVBLFFBRkc7QUFFTztBQUNwQjJFLFlBQUksRUFBRSxJQUhPO0FBR0Q7QUFDWkMsWUFBSSxFQUFFLE1BSk87QUFJQztBQUNkQyxjQUFNLEVBQUUvRSxpQkFMSztBQUtjO0FBQzNCeUYsZUFBTyxFQUFFQSxPQU5JLENBTUk7O0FBTkosT0FBZixDQURGO0FBVUE7QUFDRCxLQWxCOEIsQ0FtQi9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFFBQUlxRixLQUFLLENBQUNFLEdBQU4sS0FBYyxXQUFkLElBQTZCZSxPQUFPLENBQUNwSSxNQUFSLEdBQWlCLENBQWxELEVBQXFEO0FBQ25EbUgsV0FBSyxDQUFDQyxjQUFOO0FBQ0EsVUFBSW1CLFVBQVUsR0FBR0gsT0FBTyxDQUFDSSxLQUFSLENBQWMsQ0FBZCxFQUFnQkosT0FBTyxDQUFDcEksTUFBUixHQUFlLENBQS9CLENBQWpCO0FBQ0FxSSxnQkFBVSxDQUFDRSxVQUFELENBQVY7QUFDRDtBQUNGLEdBN0JEOztBQStCQSxzQkFDRTtBQUFLLE1BQUUsRUFBQyxnQkFBUjtBQUF5QixhQUFTLEVBQUMsUUFBbkM7QUFBQSwyQkFDRTtBQUFPLGVBQVMsRUFBQyxhQUFqQjtBQUFBLDZCQUNFO0FBQUEsbUJBQ0dMLElBQUksQ0FBQ08sR0FBTCxDQUFTLENBQUNwSixLQUFELEVBQVFxSixLQUFSLGtCQUNSO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFDLFlBQWQ7QUFBQSxzQkFBNEJySixLQUFLLENBQUN3QztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUU7QUFBSSxxQkFBUyxFQUFDLFdBQWQ7QUFBQSxzQkFBMkJ4QyxLQUFLLENBQUNnQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUEsV0FBVSxjQUFhcUgsS0FBTSxFQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELENBREgsZUFPRTtBQUFBLGlDQUNFO0FBQUksbUJBQU8sRUFBQyxHQUFaO0FBQUEsbUNBQ0U7QUFBVSx1QkFBUyxFQUFFTixPQUFPLEtBQUssRUFBWixHQUFpQixrQkFBakIsR0FBc0MsYUFBM0Q7QUFDRSxrQkFBSSxFQUFDLGtCQURQO0FBRUUsbUJBQUssRUFBRUEsT0FGVDtBQUdFLHNCQUFRLEVBQUdPLENBQUQsSUFBTztBQUFDTiwwQkFBVSxDQUFDTSxDQUFDLENBQUNDLE1BQUYsQ0FBU3ZKLEtBQVYsQ0FBVjtBQUE0QixlQUhoRDtBQUlFLDhCQUFnQixFQUFFNkgsYUFKcEI7QUFLRSx5QkFBVyxFQUFDO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF5QkQsQ0EzREQ7O0lBQU1lLEk7O01BQUFBLEk7O0FBNkROLE1BQU0xRyxjQUFjLEdBQUlzSCxTQUFELElBQWU7QUFDcEMsUUFBTUMsVUFBVSxHQUFHbkosUUFBUSxDQUFDb0osY0FBVCxDQUF3QkYsU0FBeEIsQ0FBbkI7QUFDQUMsWUFBVSxDQUFDRSxTQUFYLEdBQXVCRixVQUFVLENBQUNHLFlBQWxDO0FBQ0QsQ0FIRDs7QUFLZTlNLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BiL3ByaXNvbmJyZWFrLjIxNzY0MDljMjM3MTU1MDhiZTRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFBsYXllclNlY3Rpb24gZnJvbSAnLi4vcGIvcGxheWVyU2VjdGlvbic7XHJcbmltcG9ydCBCb2FyZCBmcm9tICcuLi9wYi9ib2FyZCc7XHJcbmltcG9ydCBTaG93VW5zZWVuVGlsZXMgZnJvbSAnLi4vcGIvdW5zZWVuVGlsZXNTZWN0aW9uJztcclxuaW1wb3J0IFNob3dNb3ZlcyBmcm9tICcuLi9wYi9tb3Zlc1NlY3Rpb24nO1xyXG5cclxuY29uc3QgYm9hcmRDb2x1bW5IZWFkZXJzID0gWydBJywnQicsJ0MnLCdEJywnRScsJ0YnLCdHJywnSCcsJ0knLCdKJywnSycsJ0wnLCdNJywnTicsJ08nXTtcclxuY29uc3QgYm9hcmRSb3dIZWFkZXJzID0gWycxJywnMicsJzMnLCc0JywnNScsJzYnLCc3JywnOCcsJzknLCcxMCcsJzExJywnMTInLCcxMycsJzE0JywnMTUnXTtcclxuY29uc3QgbW92ZXdhaXR0aW1lID0gMjAwMDA7IC8vIHdoZW4gd2FpdGluZyBmb3Igb3Bwb25lbnQgcGluZyBldmVyeSB0aGlzIG1hbnkgbWlsbGlzZWNvbmRzXHJcbmNvbnN0IGpva2VzID0gW1xyXG4gICdFc2NhcGVlOiBcIkknICsgXCInbSBmcmVlISBJJ20gZnJlZSFcIiArICdcIi4gTGl0dGxlIGtpZDogXCJJJysgXCInbSBmb3VyISBJJ20gZm91ciFcIiArICdcIicsXHJcbiAgJ1R3byBwZWFudXRzIHdlcmUgd2Fsa2luZyBkb3duIGEgYmFjayBhbGxleS4gT25lIHdhcyBhIHNhbHRlZC4nLFxyXG4gIFwiVGhlIHBzeWNoaWMgZHdhcmYgZXNjYXBlZCEgVGhlcmUncyBhIHNtYWxsIG1lZGl1bSBhdCBsYXJnZSFcIixcclxuICAnV2hhdCBkbyB5b3UgY2FsbCBhIHZlZ2V0YWJsZSB3aG8gaGFzIGVzY2FwZWQgcHJpc29uPyBBbiBlc2NhcGVhIScsXHJcbiAgXCJUaGUgcHJpc29uZXJzIGZhdmUgcHVuY3R1YXRpb24gaXMgYSBwZXJpb2QuIEl0IG1hcmtzIHRoZSBlbmQgb2YgYSBzZW50ZW5jZSFcIixcclxuICBcIlByaXNvbiBpcyBvbmx5IG9uZSB3b3JkLCBidXQgdG8gcm9iYmVycyBpdCdzIGEgd2hvbGUgc2VudGVuY2UuXCJcclxuXTtcclxuY29uc3QgaW5pdGlhbHRpbGVzNCA9IFtcclxuICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsXHJcbiAgXCJCXCIsXHJcbiAgXCJDXCIsXHJcbiAgXCJEXCIsXHJcbiAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsXHJcbiAgXCJGXCIsXHJcbiAgXCJHXCIsXHJcbiAgXCJIXCIsXHJcbiAgXCJJXCIsICBcIklcIiwgIFwiSVwiLFxyXG4gIFwiSlwiLFxyXG4gIFwiS1wiLFxyXG4gIFwiTFwiLFxyXG4gIFwiTVwiLFxyXG4gIFwiTlwiLCAgXCJOXCIsXHJcbiAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLFxyXG4gIFwiUFwiLFxyXG4gIFwiUVwiLFxyXG4gIFwiUlwiLCAgXCJSXCIsXHJcbiAgXCJTXCIsXHJcbiAgXCJUXCIsICBcIlRcIixcclxuICBcIlVcIixcclxuICBcIlZcIixcclxuICBcIldcIixcclxuICBcIlhcIixcclxuICBcIllcIixcclxuICBcIlpcIixcclxuICBcIj9cIiwgIFwiP1wiLFxyXG5dOyAvLyBpbml0aWFsIHRpbGUgcG9vbCBmb3IgNCBsZXR0ZXIgcmFjayBtb2RlXHJcbmNvbnN0IGluaXRpYWx0aWxlczUgPSBbXHJcbiAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIixcclxuICBcIkJcIixcclxuICBcIkNcIixcclxuICBcIkRcIiwgIFwiRFwiLFxyXG4gIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIixcclxuICBcIkZcIixcclxuICBcIkdcIixcclxuICBcIkhcIixcclxuICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLFxyXG4gIFwiSlwiLFxyXG4gIFwiS1wiLFxyXG4gIFwiTFwiLCAgXCJMXCIsXHJcbiAgXCJNXCIsXHJcbiAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLFxyXG4gIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLFxyXG4gIFwiUFwiLFxyXG4gIFwiUVwiLFxyXG4gIFwiUlwiLCAgXCJSXCIsICBcIlJcIixcclxuICBcIlNcIiwgIFwiU1wiLFxyXG4gIFwiVFwiLCAgXCJUXCIsICBcIlRcIixcclxuICBcIlVcIixcclxuICBcIlZcIixcclxuICBcIldcIixcclxuICBcIlhcIixcclxuICBcIllcIixcclxuICBcIlpcIixcclxuICBcIj9cIiwgIFwiP1wiLFxyXG5dOyAvLyBpbml0aWFsIHRpbGUgcG9vbCBmb3IgNSBsZXR0ZXIgcmFjayBtb2RlXHJcbmNvbnN0IGluaXRpYWx0aWxlczYgPSBbXHJcbiAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsXHJcbiAgXCJCXCIsICBcIkJcIixcclxuICBcIkNcIiwgIFwiQ1wiLFxyXG4gIFwiRFwiLCAgXCJEXCIsICBcIkRcIixcclxuICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsXHJcbiAgXCJGXCIsXHJcbiAgXCJHXCIsICBcIkdcIixcclxuICBcIkhcIiwgIFwiSFwiLFxyXG4gIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLFxyXG4gIFwiSlwiLFxyXG4gIFwiS1wiLFxyXG4gIFwiTFwiLCAgXCJMXCIsICBcIkxcIixcclxuICBcIk1cIiwgIFwiTVwiLFxyXG4gIFwiTlwiLCAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLFxyXG4gIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIixcclxuICBcIlBcIiwgIFwiUFwiLFxyXG4gIFwiUVwiLFxyXG4gIFwiUlwiLCAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsXHJcbiAgXCJTXCIsICBcIlNcIiwgIFwiU1wiLFxyXG4gIFwiVFwiLCAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLFxyXG4gIFwiVVwiLCAgXCJVXCIsICBcIlVcIixcclxuICBcIlZcIixcclxuICBcIldcIixcclxuICBcIlhcIixcclxuICBcIllcIixcclxuICBcIlpcIixcclxuICBcIj9cIiwgIFwiP1wiLFxyXG5dOyAvLyBpbml0aWFsIHRpbGUgcG9vbCBmb3IgNiBsZXR0ZXIgcmFjayBtb2RlXHJcbmNvbnN0IGluaXRpYWx0aWxlczcgPSBbXHJcbiAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLFxyXG4gIFwiQlwiLCAgXCJCXCIsXHJcbiAgXCJDXCIsICBcIkNcIixcclxuICBcIkRcIiwgIFwiRFwiLCAgXCJEXCIsICBcIkRcIixcclxuICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsXHJcbiAgXCJGXCIsICBcIkZcIixcclxuICBcIkdcIiwgIFwiR1wiLCAgXCJHXCIsXHJcbiAgXCJIXCIsICBcIkhcIixcclxuICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsXHJcbiAgXCJKXCIsXHJcbiAgXCJLXCIsXHJcbiAgXCJMXCIsICBcIkxcIiwgIFwiTFwiLCAgXCJMXCIsXHJcbiAgXCJNXCIsICBcIk1cIixcclxuICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsXHJcbiAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIixcclxuICBcIlBcIiwgIFwiUFwiLFxyXG4gIFwiUVwiLFxyXG4gIFwiUlwiLCAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsICBcIlJcIixcclxuICBcIlNcIiwgIFwiU1wiLCAgXCJTXCIsICBcIlNcIixcclxuICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsXHJcbiAgXCJVXCIsICBcIlVcIiwgIFwiVVwiLCAgXCJVXCIsXHJcbiAgXCJWXCIsICBcIlZcIixcclxuICBcIldcIiwgIFwiV1wiLFxyXG4gIFwiWFwiLFxyXG4gIFwiWVwiLCAgXCJZXCIsXHJcbiAgXCJaXCIsXHJcbiAgXCI/XCIsICBcIj9cIixcclxuXTsgLy8gaW5pdGlhbCB0aWxlIHBvb2wgZm9yIDcgbGV0dGVyIHJhY2sgbW9kZVxyXG5jb25zdCBzcXVhcmV1bnVzZWQgPSBcIi5cIjtcclxuY29uc3QgdXNlZGJ5bm9vbmUgPSBcIlwiO1xyXG5jb25zdCBub2RpcmVjdGlvbiA9IFwiXCI7XHJcblxyXG5cclxuY29uc3QgR2FtZSA9ICh7aXNyZWpvaW5cclxuICAgICwgcHJpc29uZXJzT3JHdWFyZHNcclxuICAgICwgZ2FtZWlkXHJcbiAgICAsIG5pY2tuYW1lXHJcbiAgICAsIHdzbWVzc2FnZVxyXG4gICAgLCBjbGllbnRcclxuICAgICwgcmFja3NpemU9NCAvLyBPcHRpb24gZm9yIHJhY2sgc2l6ZSAoZ2l2ZSBpdCBhIGRlZmF1bHQgZm9yIEJ1aWxkKVxyXG4gICAgfSkgPT4ge1xyXG4gICAgY29uc3QgbWlkZGxlID0gcmFja3NpemU7IC8vIE1pZGRsZSBlbGVtZW50IGluIHJvdyBvciBjb2x1bW4gYXJyYXlcclxuICAgIGNvbnN0IGVkZ2UgPSByYWNrc2l6ZSAqIDI7IC8vIExhc3QgZWxlbWVudCBpbiByb3cgb3IgY29sdW1uIGFycmF5XHJcbiAgICBjb25zdCBpbml0aWFsdGlsZXMgPSByYWNrc2l6ZSA9PT0gNiA/IGluaXRpYWx0aWxlczYgOiByYWNrc2l6ZSA9PT0gNyA/IGluaXRpYWx0aWxlczcgOiByYWNrc2l6ZSA9PT0gNSA/IGluaXRpYWx0aWxlczUgOiBpbml0aWFsdGlsZXM0O1xyXG4gICAgY29uc3QgaW5pdGlhbHNxdWFyZXMgPSBBcnJheShlZGdlKzEpLmZpbGwoQXJyYXkoZWRnZSsxKS5maWxsKHNxdWFyZXVudXNlZCkpO1xyXG4gICAgY29uc3QgaW5pdGlhbHVzZWRieSA9IEFycmF5KGVkZ2UrMSkuZmlsbChBcnJheShlZGdlKzEpLmZpbGwodXNlZGJ5bm9vbmUpKTtcclxuICAgIGNvbnN0IFt0aWxlcywgc2V0VGlsZXNdID0gdXNlU3RhdGUoWy4uLmluaXRpYWx0aWxlc10pO1xyXG4gICAgY29uc3QgW3B0aWxlcywgc2V0UHRpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtndGlsZXMsIHNldEd0aWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc3F1YXJlcywgc2V0U3F1YXJlc10gPSB1c2VTdGF0ZShbLi4uaW5pdGlhbHNxdWFyZXNdKTtcclxuICAgIGNvbnN0IFt1c2VkYnksIHNldFVzZWRieV0gPSB1c2VTdGF0ZShbLi4uaW5pdGlhbHVzZWRieV0pO1xyXG4gICAgY29uc3QgW3NlbGVjdGlvbiwgc2V0U2VsZWN0aW9uXSA9IHVzZVN0YXRlKC0xKTsgLy8gcmVsYXRpdmUgdG8gcmFjayBvZiBwbGF5ZXIgbWFraW5nIGEgcGxheVxyXG4gICAgY29uc3QgW3dob3NldHVybiwgc2V0V2hvc2V0dXJuXSA9IHVzZVN0YXRlKFwiUFwiKTsgLy8gZ2FtZSBzdGFydHMgd2l0aCBwcmlzb25lcnMgcGxheVxyXG4gICAgY29uc3QgW2N1cnJlbnRjb29yZHMsIHNldEN1cnJlbnRjb29yZHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3Jlc2N1ZXMsIHNldFJlc2N1ZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcmNkLCBzZXRSY2RdID0gdXNlU3RhdGUoWy0xLC0xLG5vZGlyZWN0aW9uXSk7XHJcbiAgICBjb25zdCBbbW92ZXMsIHNldE1vdmVzXSA9IHVzZVN0YXRlKFtdKTsgLy8gbW92ZSBoaXN0b3J5LCBlYWNoIGVsZW1lbnQgaXMgdGhlIGFycmF5IGlzIGEganNvbiBvYmplY3Qgb2YgaW5mbyBhYm91dCB0aGUgbW92ZVxyXG4gICAgY29uc3QgW3NuYXBzaG90LCBzZXRTbmFwc2hvdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgIHNxdWFyZXM6IFsuLi5pbml0aWFsc3F1YXJlc10sXHJcbiAgICAgIHVzZWRieTogWy4uLmluaXRpYWx1c2VkYnldLFxyXG4gICAgICBwdGlsZXM6IFtdLFxyXG4gICAgICBndGlsZXM6IFtdLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbam9rZWluZGV4LCBzZXRKb2tlaW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbYWxsb3dSZXdpbmQsIHNldEFsbG93UmV3aW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtvcHBuYW1lLCBzZXRPcHBuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtjaGF0bXNncywgc2V0Q2hhdG1zZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgLy8gY29uc3QgcmVzY3VlU291bmQgPSBuZXcgQXVkaW8oXCJodHRwczovL3RpbGVydW5uZXIuZ2l0aHViLmlvL3lpcHBlZS5tNGFcIik7IC8vIEkgY291bGRuJ3QgZ2V0IHRoZSBzeW50YXggcmlnaHQgdG8gcmVhZCBpdCBmcm9tIHBiIGZvbGRlclxyXG4gICAgY29uc3QgcHJldlJlc2N1ZXMgPSB1c2VQcmV2aW91cyhyZXNjdWVzKTtcclxuICAgIGZ1bmN0aW9uIHVzZVByZXZpb3VzKHZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xyXG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVmLmN1cnJlbnQ7XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAocmVzY3VlcyA+IHByZXZSZXNjdWVzKSB7XHJcbiAgICAgICAgICB2YXIgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcbiAgICAgICAgICBjLnNyYyA9IFwiaHR0cHM6Ly90aWxlcnVubmVyLmdpdGh1Yi5pby95aXBwZWUubTRhXCI7XHJcbiAgICAgICAgICBjLnBsYXkoKTtcclxuICAgICAgICAvLyByZXNjdWVTb3VuZC5wbGF5KClcclxuICAgICAgfVxyXG4gICAgfSwgW3Jlc2N1ZXNdKTsgLy8gUGxheSBhIHNvdW5kIHdoZW4gYSByZXNjdWUgaXMgbWFkZVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgbGV0IG5ld2ppID0gam9rZWluZGV4ICsgMTtcclxuICAgICAgaWYgKG5ld2ppID49IGpva2VzLmxlbmd0aCkge1xyXG4gICAgICAgIG5ld2ppID0gMDtcclxuICAgICAgfVxyXG4gICAgICBzZXRKb2tlaW5kZXgobmV3amkpO1xyXG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAvLyBJZiBpdCBpcyBub3QgbXkgdHVybiAmJiB0aGUgZ2FtZSBoYXMgbm90IGVuZGVkXHJcbiAgICAgICAgaWYgKHByaXNvbmVyc09yR3VhcmRzICE9PSB3aG9zZXR1cm4gJiYgd2hvc2V0dXJuICE9PSBcIlhcIikge1xyXG4gICAgICAgICAgLy8gSSBhbSB3YWl0aW5nIGZvciBvcHBvbmVudCBtb3ZlIHRvIGNvbWUgdGhyb3VnaCBidXQgc29tZXRpbWVzIGl0IGdldHMgbWlzc2VkIChubyBpZGVhIHdoeSlcclxuICAgICAgICAgIHJlcXVlc3RHYW1lRGF0YSgpOyAvLyBTZW5kIGEgcmVxdWVzdCBmb3IgZ2FtZSBkYXRhIGluIGNhc2Ugb3Bwb25lbnQgbW92ZWQgYW5kIHdlIG1pc3NlZCB0aGUgdXBkYXRlXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBtb3Zld2FpdHRpbWUpOyAvLyB0aGlzIG1hbnkgbWlsbGlzZWNvbmRzIGJldHdlZW4gYWJvdmUgY29kZSBibG9jayBleGVjdXRpb25zXHJcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH0sIFt3aG9zZXR1cm5dKTsgLy8gd2FudCB1cCB0byBkYXRlIHZhbHVlIG9mIHdob3NldHVybiB0byBkZWNpZGUgd2hldGhlciB0byBhc2sgZm9yIGFuIHVwZGF0ZVxyXG4gIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgLy8gVGhpcyBjb2RlIGV4ZWN1dGVzIGZpcnN0IHRpbWUgR2FtZSBpcyB1c2VkIG9ubHlcclxuICAgICAgaWYgKCFpc3Jlam9pbiAmJiBwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIpIHsgLy8gUHJpc29uZXIgaXMgc3RhcnRpbmcgdGhlIGdhbWUgc28gcGljayByYWNrc1xyXG4gICAgICAgIGxldCB0ZW1wUFRpbGVzID0gW107XHJcbiAgICAgICAgbGV0IHRlbXBHVGlsZXMgPSBbXTtcclxuICAgICAgICBsZXQgdGVtcFRpbGVzID0gWy4uLmluaXRpYWx0aWxlc107XHJcbiAgICAgICAgd2hpbGUgKHRlbXBQVGlsZXMubGVuZ3RoIDwgcmFja3NpemUpIHtcclxuICAgICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVtcFRpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgICB0ZW1wUFRpbGVzLnB1c2godGVtcFRpbGVzW3JhbmRdKTtcclxuICAgICAgICAgIHRlbXBUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgICAgICByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVtcFRpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgICB0ZW1wR1RpbGVzLnB1c2godGVtcFRpbGVzW3JhbmRdKTtcclxuICAgICAgICAgIHRlbXBUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRlbXBQVGlsZXMuc29ydCgpO1xyXG4gICAgICAgIHRlbXBHVGlsZXMuc29ydCgpO1xyXG4gICAgICAgIHNldEd0aWxlcyh0ZW1wR1RpbGVzKTtcclxuICAgICAgICBzZXRQdGlsZXModGVtcFBUaWxlcyk7XHJcbiAgICAgICAgc2V0VGlsZXModGVtcFRpbGVzKTtcclxuICAgICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgICBzcXVhcmVzOiBbLi4uaW5pdGlhbHNxdWFyZXNdLFxyXG4gICAgICAgICAgdXNlZGJ5OiBbLi4uaW5pdGlhbHVzZWRieV0sXHJcbiAgICAgICAgICBwdGlsZXM6IFsuLi50ZW1wUFRpbGVzXSxcclxuICAgICAgICAgIGd0aWxlczogWy4uLnRlbXBHVGlsZXNdICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICB0eXBlOiBcInBiXCIsXHJcbiAgICAgICAgICAgIGZ1bmM6IFwiaGVsbG9cIixcclxuICAgICAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICAgICAgZ2FtZWlkOiBnYW1laWQsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICAgIHdob3NldHVybjogd2hvc2V0dXJuLFxyXG4gICAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICAvLyBQcmlzb25lciByZWpvaW4gb3IgZ3VhcmQgam9pbiBvciBndWFyZCByZWpvaW5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgICAgIGZ1bmM6IFwicmVxdWVzdGdhbWVkYXRhXCIsIC8vIHJlcXVlc3QgZ2FtZSBkYXRhXHJcbiAgICAgICAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkc1xyXG4gICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCB7fVxyXG4gICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBsZXQgbXNnID0gd3NtZXNzYWdlO1xyXG4gICAgICBpZiAobXNnICE9PSAnJykgcHJvY2Vzc0dhbWVNZXNzYWdlKG1zZyk7ICAgICAgXHJcbiAgICB9LFt3c21lc3NhZ2VdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2Nyb2xsVG9Cb3R0b20oXCJTY3JvbGxhYmxlTW92ZXNcIik7XHJcbiAgICB9LFttb3Zlc10pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzY3JvbGxUb0JvdHRvbShcIlNjcm9sbGFibGVDaGF0XCIpO1xyXG4gICAgfSxbY2hhdG1zZ3NdKVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gcHV0QXRNb3ZlU3RhcnQoKSB7XHJcbiAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICAgIHNldEFsbG93UmV3aW5kKGZhbHNlKTtcclxuICAgICAgc2V0UmNkKC0xLC0xLG5vZGlyZWN0aW9uKTtcclxuICAgICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBwcm9jZXNzR2FtZU1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgICBpZiAobWVzc2FnZURhdGEudHlwZSA9PT0gXCJhbm5vdW5jZVwiKSB7XHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwicGJcIixcclxuICAgICAgICAgICAgZnVuYzogXCJoZWxsb1wiLFxyXG4gICAgICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgICAgd2hvc2V0dXJuOiB3aG9zZXR1cm4sXHJcbiAgICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKG1lc3NhZ2VEYXRhLmdhbWVpZCA9PT0gZ2FtZWlkICYmIG1lc3NhZ2VEYXRhLnR5cGUgPT09IFwicGJcIikgeyAvLyBUaGlzIGluc3RhbmNlIG9mIGEgcHJpc29uIGJyZWFrIGdhbWVcclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuc2VuZGVyICE9IHByaXNvbmVyc09yR3VhcmRzICYmIG9wcG5hbWUgPT09IFwiXCIgJiYgbWVzc2FnZURhdGEubmlja25hbWUgJiYgbWVzc2FnZURhdGEubmlja25hbWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgLy8gT3Bwb25lbnQgc2VudCBhIG1lc3NhZ2UgaW5jbHVkaW5nIHRoZWlyIG5pY2tuYW1lIGFuZCBJIGRvbid0IGhhdmUgdGhlaXIgbmlja25hbWUgeWV0XHJcbiAgICAgICAgICBzZXRPcHBuYW1lKG1lc3NhZ2VEYXRhLm5pY2tuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwicmVxdWVzdGdhbWVkYXRhXCIgJiYgbWVzc2FnZURhdGEuc2VuZGVyICE9PSBwcmlzb25lcnNPckd1YXJkcykgeyAvLyBPcHBvbmVudCByZXF1ZXN0ZWQgZ2FtZSBpbmZvXHJcbiAgICAgICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICAgICAgZnVuYzogXCJwcm92aWRlZ2FtZWRhdGFcIiwgLy8gcHJvdmlkZSBnYW1lIGRhdGFcclxuICAgICAgICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgICAgICAgIHRpbGVzOiB0aWxlcyxcclxuICAgICAgICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLFxyXG4gICAgICAgICAgICAgIHB0aWxlczogcHRpbGVzLFxyXG4gICAgICAgICAgICAgIGd0aWxlczogZ3RpbGVzLFxyXG4gICAgICAgICAgICAgIHVzZWRieTogdXNlZGJ5LFxyXG4gICAgICAgICAgICAgIHdob3NldHVybjogd2hvc2V0dXJuLFxyXG4gICAgICAgICAgICAgIHNuYXBzaG90OiBzbmFwc2hvdCxcclxuICAgICAgICAgICAgICBtb3ZlczogbW92ZXMsXHJcbiAgICAgICAgICAgICAgcmVzY3VlczogcmVzY3VlcyxcclxuICAgICAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgICAgICAgYWxsb3dSZXdpbmQ6IGFsbG93UmV3aW5kXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJwcm92aWRlZ2FtZWRhdGFcIiAmJiBtZXNzYWdlRGF0YS5zZW5kZXIgIT09IHByaXNvbmVyc09yR3VhcmRzKSB7IFxyXG4gICAgICAgICAgLy8gT3Bwb25lbnQgcHJvdmlkZWQgZ2FtZSBkYXRhIGJ1dCBkbyB3ZSBuZWVkIGl0P1xyXG4gICAgICAgICAgLy8gSWYgdGhleSBoYXZlIGEgZGlmZmVyZW50IG1vdmUgY291bnQgdGhlbiB3ZSBuZWVkIGl0ICh0aGV5IG1heSBoYXZlIHVuZG9uZSBhIG1vdmUpXHJcbiAgICAgICAgICAvLyBJZiB0aGV5IGhhdmUgc2FtZSBtb3ZlIGNvdW50IGJ1dCBhIGRpZmZlcmVudCB0aWxlIGJhZyBjb3VudCB0aGVuIHdlIG5lZWQgaXQgKG5vIG1vdmVzIG1hZGUgYnV0IHRpbGVzIGFyZSBwaWNrZWQpXHJcbiAgICAgICAgICAvLyBJZiBndWFyZHMgam9pbiBhZnRlciBwcmlzb25lcnMgbWFkZSBhIG1vdmUgdGhlbiBndWFyZHMgaGF2ZSBubyB0aWxlcyAoXCJlcHRcIiBnb3QgcHJvY2Vzc2VkIHdoaWNoIGxlYXZlcyBndGlsZXMgYWxvbmUpXHJcbiAgICAgICAgICBpZiAobWVzc2FnZURhdGEubW92ZXMubGVuZ3RoICE9PSBtb3Zlcy5sZW5ndGhcclxuICAgICAgICAgICAgIHx8IG1lc3NhZ2VEYXRhLnRpbGVzLmxlbmd0aCAhPT0gdGlsZXMubGVuZ3RoXHJcbiAgICAgICAgICAgICB8fCAocHJpc29uZXJzT3JHdWFyZHMgPT09IFwiR1wiICYmIGd0aWxlcy5sZW5ndGggPT09IDAgJiYgY3VycmVudGNvb3Jkcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICB8fCAocHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiICYmIHB0aWxlcy5sZW5ndGggPT09IDAgJiYgY3VycmVudGNvb3Jkcy5sZW5ndGggPT09IDApIC8vIE5vdCBzdXJlIEkgbmVlZCBpdCBidXQuLi5cclxuICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgICAgIHNldFNxdWFyZXMobWVzc2FnZURhdGEuc3F1YXJlcyk7XHJcbiAgICAgICAgICAgIHNldFB0aWxlcyhtZXNzYWdlRGF0YS5wdGlsZXMpO1xyXG4gICAgICAgICAgICBzZXRHdGlsZXMobWVzc2FnZURhdGEuZ3RpbGVzKTtcclxuICAgICAgICAgICAgc2V0VXNlZGJ5KG1lc3NhZ2VEYXRhLnVzZWRieSk7XHJcbiAgICAgICAgICAgIHNldFdob3NldHVybihtZXNzYWdlRGF0YS53aG9zZXR1cm4pO1xyXG4gICAgICAgICAgICBzZXRTbmFwc2hvdChtZXNzYWdlRGF0YS5zbmFwc2hvdCk7XHJcbiAgICAgICAgICAgIHNldE1vdmVzKG1lc3NhZ2VEYXRhLm1vdmVzKTtcclxuICAgICAgICAgICAgc2V0UmVzY3VlcyhtZXNzYWdlRGF0YS5yZXNjdWVzKTtcclxuICAgICAgICAgICAgc2V0QWxsb3dSZXdpbmQobWVzc2FnZURhdGEuYWxsb3dSZXdpbmQpOyAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImVwdFwiICYmIHByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIikgeyAvLyBQcmlzb25lcnMgc2VudCBlbmQgcHJpc29uZXJzIHR1cm4sIEd1YXJkcyBwaWNrIGl0IHVwXHJcbiAgICAgICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICAgICAgc2V0V2hvc2V0dXJuKG1lc3NhZ2VEYXRhLndob3NldHVybik7XHJcbiAgICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgICAgc2V0VXNlZGJ5KG1lc3NhZ2VEYXRhLnVzZWRieSk7XHJcbiAgICAgICAgICBzZXRQdGlsZXMobWVzc2FnZURhdGEucHRpbGVzKTtcclxuICAgICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICAgIHNldE1vdmVzKG1lc3NhZ2VEYXRhLm1vdmVzKTtcclxuICAgICAgICAgIHNldFJlc2N1ZXMobWVzc2FnZURhdGEucmVzY3Vlcyk7XHJcbiAgICAgICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgICAgIHNxdWFyZXM6IFsuLi5tZXNzYWdlRGF0YS5zcXVhcmVzXSxcclxuICAgICAgICAgICAgdXNlZGJ5OiBbLi4ubWVzc2FnZURhdGEudXNlZGJ5XSxcclxuICAgICAgICAgICAgcHRpbGVzOiBbLi4ubWVzc2FnZURhdGEucHRpbGVzXSxcclxuICAgICAgICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJlZ3RcIiAmJiBwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIpIHsgLy8gR3VhcmRzIHNlbnQgZW5kIGd1YXJkcyB0dXJuLCBQcmlzb25lcnMgcGljayBpdCB1cFxyXG4gICAgICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgICAgIHNldFdob3NldHVybihtZXNzYWdlRGF0YS53aG9zZXR1cm4pO1xyXG4gICAgICAgICAgc2V0U3F1YXJlcyhtZXNzYWdlRGF0YS5zcXVhcmVzKTtcclxuICAgICAgICAgIHNldFVzZWRieShtZXNzYWdlRGF0YS51c2VkYnkpO1xyXG4gICAgICAgICAgc2V0R3RpbGVzKG1lc3NhZ2VEYXRhLmd0aWxlcyk7XHJcbiAgICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgICBzZXRNb3ZlcyhtZXNzYWdlRGF0YS5tb3Zlcyk7XHJcbiAgICAgICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgICAgIHNxdWFyZXM6IFsuLi5tZXNzYWdlRGF0YS5zcXVhcmVzXSxcclxuICAgICAgICAgICAgdXNlZGJ5OiBbLi4ubWVzc2FnZURhdGEudXNlZGJ5XSxcclxuICAgICAgICAgICAgcHRpbGVzOiBbLi4ucHRpbGVzXSxcclxuICAgICAgICAgICAgZ3RpbGVzOiBbLi4ubWVzc2FnZURhdGEuZ3RpbGVzXSxcclxuICAgICAgICAgIH0pOyAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwidW5kb3R1cm5cIiAmJiBtZXNzYWdlRGF0YS5zZW5kZXIgIT09IHByaXNvbmVyc09yR3VhcmRzKSB7IFxyXG4gICAgICAgICAgLy8gb3Bwb25lbnQgdW5kaWQgdGhlaXIgbGFzdCB0dXJuXHJcbiAgICAgICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICAgICAgc2V0VGlsZXMobWVzc2FnZURhdGEudGlsZXMpO1xyXG4gICAgICAgICAgc2V0UHRpbGVzKG1lc3NhZ2VEYXRhLnB0aWxlcyk7XHJcbiAgICAgICAgICBzZXRHdGlsZXMobWVzc2FnZURhdGEuZ3RpbGVzKTtcclxuICAgICAgICAgIHNldFNxdWFyZXMobWVzc2FnZURhdGEuc3F1YXJlcyk7XHJcbiAgICAgICAgICBzZXRVc2VkYnkobWVzc2FnZURhdGEudXNlZGJ5KTtcclxuICAgICAgICAgIHNldFdob3NldHVybihtZXNzYWdlRGF0YS53aG9zZXR1cm4pO1xyXG4gICAgICAgICAgc2V0UmVzY3VlcyhtZXNzYWdlRGF0YS5yZXNjdWVzKTtcclxuICAgICAgICAgIHNldE1vdmVzKG1lc3NhZ2VEYXRhLm1vdmVzKTtcclxuICAgICAgICAgIHNldFNuYXBzaG90KG1lc3NhZ2VEYXRhLnNuYXBzaG90KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiYWxsb3d1bmRvXCIgJiYgbWVzc2FnZURhdGEuc2VuZGVyICE9PSBwcmlzb25lcnNPckd1YXJkcykge1xyXG4gICAgICAgICAgLy8gT3Bwb25lbnQgY2xpY2tlZCBidXR0b24gdG8gYWxsb3cgdW5kbyB0dXJuXHJcbiAgICAgICAgICBzZXRBbGxvd1Jld2luZCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiY2hhdFwiICYmIG1lc3NhZ2VEYXRhLnNlbmRlciAhPSBwcmlzb25lcnNPckd1YXJkcykgeyAvLyBPcHBvbmVudCBjaGF0IG1lc3NhZ2VcclxuICAgICAgICAgIGxldCBuZXdDaGF0bXNncyA9IFsuLi5jaGF0bXNncywge2Zyb206IG1lc3NhZ2VEYXRhLm5pY2tuYW1lLCBtc2c6IG1lc3NhZ2VEYXRhLnNlbmRtc2d9XTtcclxuICAgICAgICAgIHNldENoYXRtc2dzKG5ld0NoYXRtc2dzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQ2FsbGluZyBzZXRTZWxlY3Rpb24gKGZyb20gaGFuZGxlS2V5RG93bikgdGhlbiBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrIGRvZXMgbm90IGxldCBpdCByZWNvZ25pemUgc2VsZWN0aW9uIHdpdGggdGhlIG5ldyB2YWx1ZVxyXG4gICAgLy8gU28gSSBwYXNzIG5ld1NlbGVjdGlvbiB3aGVuIEkgd2FudCB0byBhbHNvIHNldCBpdCwgb3RoZXJ3aXNlIEkgcGFzcyAtMSB0byBpbnN0cnVjdCBpdCB0byB1c2UgY3VycmVudCB2YWx1ZSBvZiBzZWxlY3Rpb25cclxuICAgIC8vIEFsc28gcGFzc2luZyBuZXdSY2RcclxuICAgIGNvbnN0IGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2sgPSAocmksIGNpLCBuZXdTZWxlY3Rpb24sIG5ld1JjZCkgPT4ge1xyXG4gICAgICBsZXQgbmV3U3F1YXJlcyA9IFsuLi5zcXVhcmVzXTtcclxuICAgICAgbGV0IG5ld1VzZWRieSA9IFsuLi51c2VkYnldO1xyXG4gICAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IG5ld1JvdyA9IFsuLi5zcXVhcmVzW3JpXV07XHJcbiAgICAgIGxldCBzcXVhcmV2YWx1ZSA9IHNxdWFyZXNbcmldW2NpXTtcclxuICAgICAgbGV0IG5ld0N1cnJlbnRjb29yZHMgPSBbLi4uY3VycmVudGNvb3Jkc107XHJcbiAgICAgIGxldCBjb29yZCA9IFN0cmluZyhyaSkgKyBcIi1cIiArIFN0cmluZyhjaSk7XHJcbiAgICAgIGxldCBjY2kgPSBjdXJyZW50Y29vcmRzLmluZGV4T2YoY29vcmQpO1xyXG4gICAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMSkge1xyXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IHNlbGVjdGlvbjtcclxuICAgICAgICBuZXdSY2QgPSByY2Q7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5ld1NlbGVjdGlvbiA+IC0xICYmIHNxdWFyZXZhbHVlID09PSBzcXVhcmV1bnVzZWQpIHsgLy8gdGlsZSBpcyBzZWxlY3RlZCBmcm9tIHJhY2sgYW5kIGNsaWNrZWQgc3F1YXJlIGlzIG5vdCB1c2VkIHlldFxyXG4gICAgICAgIG5ld1Jvd1tjaV0gPVxyXG4gICAgICAgICAgd2hvc2V0dXJuID09PSBcIlBcIiA/IG5ld1B0aWxlc1tuZXdTZWxlY3Rpb25dIDogbmV3R3RpbGVzW25ld1NlbGVjdGlvbl07XHJcbiAgICAgICAgbmV3U3F1YXJlc1tyaV0gPSBbLi4ubmV3Um93XTtcclxuICAgICAgICB3aG9zZXR1cm4gPT09IFwiUFwiXHJcbiAgICAgICAgICA/IG5ld1B0aWxlcy5zcGxpY2UobmV3U2VsZWN0aW9uLCAxKVxyXG4gICAgICAgICAgOiBuZXdHdGlsZXMuc3BsaWNlKG5ld1NlbGVjdGlvbiwgMSk7XHJcbiAgICAgICAgbGV0IG5ld1VzZWRieVJvdyA9IFsuLi5uZXdVc2VkYnlbcmldXTtcclxuICAgICAgICBuZXdVc2VkYnlSb3dbY2ldID0gd2hvc2V0dXJuO1xyXG4gICAgICAgIG5ld1VzZWRieVtyaV0gPSBbLi4ubmV3VXNlZGJ5Um93XTtcclxuICAgICAgICBpZiAod2hvc2V0dXJuID09PSBcIlBcIiAmJiBuZXdTZWxlY3Rpb24gPT09IG5ld1B0aWxlcy5sZW5ndGgpIHsgXHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdTZWxlY3Rpb24gLSAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh3aG9zZXR1cm4gPT09IFwiR1wiICYmIG5ld1NlbGVjdGlvbiA9PT0gbmV3R3RpbGVzLmxlbmd0aCkgeyBcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbiAtIDFcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbik7XHJcbiAgICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobmV3VXNlZGJ5KTtcclxuICAgICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKFsuLi5jdXJyZW50Y29vcmRzLCBjb29yZF0pO1xyXG4gICAgICAgIHNldFJjZChuZXdSY2QpOyAvLyBrZXkgZG93biBoYW5kbGVyIGZpZ3VyZWQgaXQgb3V0XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjY2kgPiAtMSkgeyAvLyBjbGlja2VkIHNxdWFyZSBoYXMgYSB0aWxlIG9uIGl0IGZyb20gdGhlIGN1cnJlbnQgbW92ZSBpbiBwcm9ncmVzc1xyXG4gICAgICAgIHdob3NldHVybiA9PT0gXCJQXCJcclxuICAgICAgICAgID8gbmV3UHRpbGVzLnB1c2goc3F1YXJldmFsdWUpXHJcbiAgICAgICAgICA6IG5ld0d0aWxlcy5wdXNoKHNxdWFyZXZhbHVlKTtcclxuICAgICAgICBsZXQgbmV3Um93ID0gWy4uLm5ld1NxdWFyZXNbcmldXTtcclxuICAgICAgICBuZXdSb3dbY2ldID0gc3F1YXJldW51c2VkO1xyXG4gICAgICAgIG5ld1NxdWFyZXNbcmldID0gWy4uLm5ld1Jvd107XHJcbiAgICAgICAgbGV0IG5ld1VzZWRieVJvdyA9IFsuLi5uZXdVc2VkYnlbcmldXTtcclxuICAgICAgICBuZXdVc2VkYnlSb3dbY2ldID0gdXNlZGJ5bm9vbmU7XHJcbiAgICAgICAgbmV3VXNlZGJ5W3JpXSA9IFsuLi5uZXdVc2VkYnlSb3ddO1xyXG4gICAgICAgIHNldFNlbGVjdGlvbihcclxuICAgICAgICAgIHdob3NldHVybiA9PT0gXCJQXCIgPyBuZXdQdGlsZXMubGVuZ3RoIC0gMSA6IG5ld0d0aWxlcy5sZW5ndGggLSAxXHJcbiAgICAgICAgKTtcclxuICAgICAgICBuZXdDdXJyZW50Y29vcmRzLnNwbGljZShjY2ksIDEpO1xyXG4gIFxyXG4gICAgICAgIHNldFNxdWFyZXMobmV3U3F1YXJlcyk7XHJcbiAgICAgICAgc2V0VXNlZGJ5KG5ld1VzZWRieSk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgICAgc2V0Q3VycmVudGNvb3JkcyhuZXdDdXJyZW50Y29vcmRzKTtcclxuICAgICAgICBzZXRSY2QoLTEsLTEsbm9kaXJlY3Rpb24pOyAvLyBtYWtlIHBsYXllciBjbGljayBhZ2FpbiB0byBzZXQgZGlyZWN0aW9uXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFRoZXkgZGlkbid0IGNsaWNrIGEgc3F1YXJlIHRvIHBsYWNlIGEgc2VsZWN0ZWQgdGlsZSB0aGVyZVxyXG4gICAgICAvLyBUaGV5IGRpZG4ndCBjbGljayBhIHNxdWFyZSB0byByZW1vdmUgYW4gZXhpc3RpbmcgdGlsZVxyXG4gICAgICBpZiAoc3F1YXJlc1tyaV1bY2ldID09PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICAvLyBUaGVyZSBpcyBub3RoaW5nIG9uIHRoZSBzcXVhcmUgc28gdGhleSBhcmUgcGlja2luZyB3aGVyZSB0byBwbGFjZSB0aGUgbmV4dCB0aWxlIHZpYSBrZXlib2FyZFxyXG4gICAgICAgIGxldCBuZXdEaXJlY3Rpb24gPSByY2RbMF0gIT09IHJpIHx8IHJjZFsxXSAhPT0gY2kgPyBcInJcIiA6IC8vY2xpY2sgbmV3IHNxdWFyZSwgc3RhcnQgd2l0aCBcInJcIlxyXG4gICAgICAgICByY2RbMl0gPT09IFwiclwiID8gXCJkXCIgOiAvL2NsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIFwiclwiLCBjaGFuZ2UgdG8gXCJkXCJcclxuICAgICAgICAgcmNkWzJdID09PSBcImRcIiA/IG5vZGlyZWN0aW9uIDogLy9jbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyBcImRcIiwgY2hhbmdlIHRvIG5vZGlyZWN0aW9uXHJcbiAgICAgICAgIFwiclwiOyAvLyBjbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyBub2RpcmVjdGlvbiwgY2hhbmdlIHRvIFwiclwiXHJcbiAgICAgICAgbmV3UmNkID0gW3JpLGNpLG5ld0RpcmVjdGlvbl07XHJcbiAgICAgICAgc2V0UmNkKG5ld1JjZCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlUmFja1RpbGVDbGljayA9ICh0aWxlaW5kZXgpID0+IHtcclxuICAgICAgLy8gSWYgbm8gdGlsZSBpcyBzZWxlY3RlZCBhbHJlYWR5IHRoZW4gc2V0IHRoZSBzZWxlY3Rpb25cclxuICAgICAgaWYgKHNlbGVjdGlvbiA9PT0gLTEpIHtcclxuICAgICAgICBzZXRTZWxlY3Rpb24odGlsZWluZGV4KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gSWYgdGhlIHNhbWUgdGlsZSBpcyBhbHJlYWR5IHNlbGVjdGVkIHRoZW4gdW5zZWxlY3RcclxuICAgICAgaWYgKHNlbGVjdGlvbiA9PT0gdGlsZWluZGV4KSB7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gQSB0aWxlIHdhcyBhbHJlYWR5IHNlbGVjdGVkIGFuZCB0aGV5IGNsaWNrZWQgYW5vdGhlciB0aWxlIC0gbW92ZSB0aGUgdGlsZVxyXG4gICAgICBsZXQgbmV3cmFjayA9IHByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IFsuLi5wdGlsZXNdIDogWy4uLmd0aWxlc107XHJcbiAgICAgIGxldCBtb3ZlZnJvbSA9IHNlbGVjdGlvbjtcclxuICAgICAgbGV0IG1vdmV0aWxlID0gbmV3cmFja1ttb3ZlZnJvbV07XHJcbiAgICAgIGxldCBtb3ZldG8gPSB0aWxlaW5kZXg7XHJcbiAgICAgIG5ld3JhY2suc3BsaWNlKG1vdmVmcm9tLCAxKTsgLy8gcmVtb3ZlIHRpbGUgZnJvbSBvcmlnaW5hbCBzZWxlY3RlZCBwb3NpdGlvblxyXG4gICAgICBuZXdyYWNrLnNwbGljZShtb3ZldG8sMCxtb3ZldGlsZSk7IC8vIGluc2VydCBtb3ZlZCB0aWxlIGF0IHRoZSBuZXdseSBzZWxlY3RlZCBwb3NpdGlvblxyXG4gICAgICBwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyBzZXRQdGlsZXMobmV3cmFjaykgOiBzZXRHdGlsZXMobmV3cmFjayk7XHJcbiAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBlbmRQcmlzb25lcnNUdXJuID0gKCkgPT4ge1xyXG4gICAgICBpZiAoIWlzUGxheVZhbGlkKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHJld2luZEluZm8gPSBnZXRSZXdpbmRJbmZvKCk7XHJcbiAgICAgIGxldCBuZXdSZXNjdWVzID0gcmVzY3VlcztcclxuICAgICAgbGV0IGVzY2FwZWhhdGNoZXMgPSBbXHJcbiAgICAgICAgXCIwLTBcIixcclxuICAgICAgICBcIjAtXCIgKyBtaWRkbGUsXHJcbiAgICAgICAgXCIwLVwiICsgZWRnZSxcclxuICAgICAgICBtaWRkbGUrIFwiLTBcIixcclxuICAgICAgICBtaWRkbGUgKyBcIi1cIiArIGVkZ2UsXHJcbiAgICAgICAgZWRnZSArIFwiLTBcIixcclxuICAgICAgICBlZGdlICsgXCItXCIgKyBtaWRkbGUsXHJcbiAgICAgICAgZWRnZSArIFwiLVwiICsgZWRnZVxyXG4gICAgICBdOyAvLyBjb29yZHMgb2YgZXNjYXBlIGhhdGNoZXNcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50Y29vcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGVzY2FwZWhhdGNoZXMuaW5kZXhPZihjdXJyZW50Y29vcmRzW2ldKSA+IC0xKSB7XHJcbiAgICAgICAgICBuZXdSZXNjdWVzID0gbmV3UmVzY3VlcyArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgICAgd2hpbGUgKG5ld1B0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIG5ld1B0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgbmV3UHRpbGVzLnNvcnQoKTtcclxuICAgICAgbGV0IG5ld1dob3NldHVybiA9IG5ld1B0aWxlcy5sZW5ndGggPiAwID8gXCJHXCIgOiBcIlhcIjsgLy8gWCA9IGdhbWUgb3ZlclxyXG4gICAgICBpZiAodXNlZGJ5WzBdWzBdICAgICAgICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgICB1c2VkYnlbMF1bbWlkZGxlXSAgICAhPT0gdXNlZGJ5bm9vbmUgJiZcclxuICAgICAgICAgIHVzZWRieVswXVtlZGdlXSAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgICAgdXNlZGJ5W21pZGRsZV1bMF0gICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgICB1c2VkYnlbbWlkZGxlXVtlZGdlXSAhPT0gdXNlZGJ5bm9vbmUgJiZcclxuICAgICAgICAgIHVzZWRieVtlZGdlXVswXSAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgICAgdXNlZGJ5W2VkZ2VdW21pZGRsZV0gIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgICB1c2VkYnlbZWRnZV1bZWRnZV0gICAhPT0gdXNlZGJ5bm9vbmUpIHtcclxuICAgICAgICBuZXdXaG9zZXR1cm4gPSBcIlhcIjsgLy8gTm8gZXNjYXBlIGhhdGNoZXMgbGVmdFxyXG4gICAgICB9XHJcbiAgICAgIGxldCBwbGF5aW5mbyA9IGdldFBsYXlJbmZvKCk7XHJcbiAgICAgIGxldCBuZXdNb3ZlID0ge2J5OiBcIlBcIiwgdHlwZTogXCJQTEFZXCIsIHJld2luZEluZm86IHJld2luZEluZm8sIG1haW53b3JkOiBwbGF5aW5mby5tYWlud29yZCwgZXh0cmF3b3JkczogcGxheWluZm8uZXh0cmF3b3JkcywgcG9zOiBwbGF5aW5mby5wb3N9O1xyXG4gICAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgICBzZXRSZXNjdWVzKG5ld1Jlc2N1ZXMpO1xyXG4gICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgc3F1YXJlczogWy4uLnNxdWFyZXNdLFxyXG4gICAgICAgIHVzZWRieTogWy4uLnVzZWRieV0sXHJcbiAgICAgICAgcHRpbGVzOiBbLi4ubmV3UHRpbGVzXSxcclxuICAgICAgICBndGlsZXM6IFsuLi5ndGlsZXNdLFxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcImVwdFwiLCAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLCAvLyB0aGlzIHdhcyBiZWluZyBjaGFuZ2VkIGFzIHRoZSB0aWxlcyB3ZXJlIGJlaW5nIHBsYXllZFxyXG4gICAgICAgICAgdXNlZGJ5OiB1c2VkYnksIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgICBwdGlsZXM6IG5ld1B0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgcHJpc29uZXJzIHJhY2tcclxuICAgICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4sIC8vIG1heSBoYXZlIGVuZGVkIHRoZSBnYW1lICh3aG9zZXR1cm49WClcclxuICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgIG1vdmVzOiBuZXdNb3ZlcywgLy8gYSBtb3ZlIHdhcyBtYWRlXHJcbiAgICAgICAgICByZXNjdWVzOiBuZXdSZXNjdWVzIC8vIG1heSBoYXZlIHJlc2N1ZWQgYW5vdGhlciBwcmlzb25lclxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgZW5kR3VhcmRzVHVybiA9ICgpID0+IHtcclxuICAgICAgaWYgKCFpc1BsYXlWYWxpZCgpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCByZXdpbmRJbmZvID0gZ2V0UmV3aW5kSW5mbygpO1xyXG4gICAgICBsZXQgbmV3R3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICAgIHdoaWxlIChuZXdHdGlsZXMubGVuZ3RoIDwgcmFja3NpemUgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgICBuZXdHdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIG5ld0d0aWxlcy5zb3J0KCk7XHJcbiAgICAgIGxldCBzbmFwc3F1YXJlcyA9IFsuLi5zcXVhcmVzXTtcclxuICAgICAgbGV0IHNuYXB1c2VkYnkgPSBbLi4udXNlZGJ5XTtcclxuICAgICAgbGV0IHNuYXBwdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgICAgbGV0IHNuYXBndGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IG5ld1dob3NldHVybiA9IG5ld0d0aWxlcy5sZW5ndGggPiAwID8gXCJQXCIgOiBcIlhcIjsgLy8gWCA9IGdhbWUgb3ZlclxyXG4gICAgICBpZiAodXNlZGJ5WzBdWzBdICAgICAgICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgICB1c2VkYnlbMF1bbWlkZGxlXSAgICAhPT0gdXNlZGJ5bm9vbmUgJiZcclxuICAgICAgICAgIHVzZWRieVswXVtlZGdlXSAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgICAgdXNlZGJ5W21pZGRsZV1bMF0gICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgICB1c2VkYnlbbWlkZGxlXVtlZGdlXSAhPT0gdXNlZGJ5bm9vbmUgJiZcclxuICAgICAgICAgIHVzZWRieVtlZGdlXVswXSAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgICAgdXNlZGJ5W2VkZ2VdW21pZGRsZV0gIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgICB1c2VkYnlbZWRnZV1bZWRnZV0gICAhPT0gdXNlZGJ5bm9vbmUpIHtcclxuICAgICAgICBuZXdXaG9zZXR1cm4gPSBcIlhcIjsgLy8gTm8gZXNjYXBlIGhhdGNoZXMgbGVmdFxyXG4gICAgICB9XHJcbiAgICAgIGxldCBwbGF5aW5mbyA9IGdldFBsYXlJbmZvKCk7XHJcbiAgICAgIGxldCBuZXdNb3ZlID0ge2J5OiBcIkdcIiwgdHlwZTogXCJQTEFZXCIsIHJld2luZEluZm86IHJld2luZEluZm8sIG1haW53b3JkOiBwbGF5aW5mby5tYWlud29yZCwgZXh0cmF3b3JkczogcGxheWluZm8uZXh0cmF3b3JkcywgcG9zOiBwbGF5aW5mby5wb3N9O1xyXG4gICAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgc3F1YXJlczogc25hcHNxdWFyZXMsXHJcbiAgICAgICAgdXNlZGJ5OiBzbmFwdXNlZGJ5LFxyXG4gICAgICAgIHB0aWxlczogc25hcHB0aWxlcyxcclxuICAgICAgICBndGlsZXM6IHNuYXBndGlsZXMsXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgICB1c2VkYnk6IHVzZWRieSwgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICAgIGd0aWxlczogbmV3R3RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBndWFyZHMgcmFja1xyXG4gICAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgICBtb3ZlczogbmV3TW92ZXMsIC8vIGEgbW92ZSB3YXMgbWFkZVxyXG4gICAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4sIC8vIG1heSBoYXZlIGVuZGVkIHRoZSBnYW1lICh3aG9zZXR1cm49WClcclxuICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9O1xyXG4gIFxyXG4gICAgY29uc3Qgc3dhcFByaXNvbmVyc1RpbGVzID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGlsZXMubGVuZ3RoIDwgcmFja3NpemUpIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJOZWVkIFwiICsgcmFja3NpemUgKyBcIiB0aWxlcyBpbiB0aGUgYmFnIHRvIGV4Y2hhbmdlXCIpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCByZXdpbmRJbmZvID0gZ2V0UmV3aW5kSW5mbygpO1xyXG4gICAgICBsZXQgbmV3UHRpbGVzID0gW107XHJcbiAgICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICAgIHdoaWxlIChuZXdQdGlsZXMubGVuZ3RoIDwgcmFja3NpemUgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgICBuZXdQdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIG5ld1B0aWxlcy5zb3J0KCk7XHJcbiAgICAgIG5ld1RpbGVzID0gWy4uLm5ld1RpbGVzLCAuLi5zbmFwc2hvdC5wdGlsZXNdO1xyXG4gICAgICBuZXdUaWxlcy5zb3J0KCk7XHJcbiAgICAgIGxldCBuZXdNb3ZlID0ge2J5OiBcIlBcIiwgdHlwZTogXCJTV0FQXCIsIHJld2luZEluZm86IHJld2luZEluZm99O1xyXG4gICAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICBzZXRTcXVhcmVzKFsuLi5zbmFwc2hvdC5zcXVhcmVzXSk7XHJcbiAgICAgIHNldFVzZWRieShbLi4uc25hcHNob3QudXNlZGJ5XSk7XHJcbiAgICAgIHNldFdob3NldHVybihcIkdcIik7XHJcbiAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgIHNxdWFyZXM6IFsuLi5zbmFwc2hvdC5zcXVhcmVzXSxcclxuICAgICAgICB1c2VkYnk6IFsuLi5zbmFwc2hvdC51c2VkYnldLFxyXG4gICAgICAgIHB0aWxlczogWy4uLm5ld1B0aWxlc10sXHJcbiAgICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgZnVuYzogXCJlcHRcIiwgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgICAgd2hvc2V0dXJuOiBcIkdcIiwgLy8gc3dhcCBuZXZlciBlbmRzIHRoZSBnYW1lIHNvIGdvIHRvIG9wcG9uZW50XHJcbiAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgICBzcXVhcmVzOiBzbmFwc2hvdC5zcXVhcmVzLCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiBzcXVhcmVzXHJcbiAgICAgICAgICB1c2VkYnk6IHNuYXBzaG90LnVzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgICAgcHRpbGVzOiBuZXdQdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICAgIG1vdmVzOiBuZXdNb3ZlcywgLy8gYSBtb3ZlIHdhcyBtYWRlXHJcbiAgICAgICAgICByZXNjdWVzOiByZXNjdWVzIC8vIG5vIHJlc2N1ZXMgb24gYW4gZXhjaGFuZ2VcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBzd2FwR3VhcmRzVGlsZXMgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSkge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcIk5lZWQgXCIgKyByYWNrc2l6ZSArIFwiIHRpbGVzIGluIHRoZSBiYWcgdG8gZXhjaGFuZ2VcIilcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHJld2luZEluZm8gPSBnZXRSZXdpbmRJbmZvKCk7XHJcbiAgICAgIGxldCBuZXdHdGlsZXMgPSBbXTtcclxuICAgICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgICAgd2hpbGUgKG5ld0d0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIG5ld0d0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgbmV3R3RpbGVzLnNvcnQoKTtcclxuICAgICAgbmV3VGlsZXMgPSBbLi4ubmV3VGlsZXMsIC4uLnNuYXBzaG90Lmd0aWxlc107XHJcbiAgICAgIG5ld1RpbGVzLnNvcnQoKTtcclxuICAgICAgbGV0IG5ld01vdmUgPSB7Ynk6IFwiR1wiLCB0eXBlOiBcIlNXQVBcIiwgcmV3aW5kSW5mbzogcmV3aW5kSW5mb307XHJcbiAgICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgIHNldFNxdWFyZXMoWy4uLnNuYXBzaG90LnNxdWFyZXNdKTtcclxuICAgICAgc2V0VXNlZGJ5KFsuLi5zbmFwc2hvdC51c2VkYnldKTtcclxuICAgICAgc2V0V2hvc2V0dXJuKFwiUFwiKTtcclxuICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgc3F1YXJlczogWy4uLnNuYXBzaG90LnNxdWFyZXNdLFxyXG4gICAgICAgIHVzZWRieTogWy4uLnNuYXBzaG90LnVzZWRieV0sXHJcbiAgICAgICAgcHRpbGVzOiBbLi4ucHRpbGVzXSxcclxuICAgICAgICBndGlsZXM6IFsuLi5uZXdHdGlsZXNdLFxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcImVndFwiLCAvLyBlbmQgZ3VhcmRzIHR1cm5cclxuICAgICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgICB3aG9zZXR1cm46IFwiUFwiLCAvLyBzd2FwIG5ldmVyIGVuZHMgdGhlIGdhbWUgc28gZ28gdG8gb3Bwb25lbnRcclxuICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgICBndGlsZXM6IG5ld0d0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgcHJpc29uZXJzIHJhY2tcclxuICAgICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgICAgbW92ZXM6IG5ld01vdmVzIC8vIGEgbW92ZSB3YXMgbWFkZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBpc1BsYXlWYWxpZCgpIHtcclxuICAgICAgaWYgKHNxdWFyZXNbbWlkZGxlXVttaWRkbGVdID09PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJGaXJzdCBwbGF5IG11c3QgaGl0IGNlbnRlciBzcXVhcmVcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBudW1yb3dzID0gZWRnZSsxO1xyXG4gICAgICBsZXQgbnVtY29scyA9IGVkZ2UrMTtcclxuICAgICAgbGV0IGxvd3JvdyA9IG51bXJvd3M7XHJcbiAgICAgIGxldCBoaWdocm93ID0gLTE7XHJcbiAgICAgIGxldCBsb3djb2wgPSBudW1jb2xzO1xyXG4gICAgICBsZXQgaGlnaGNvbCA9IC0xO1xyXG4gICAgICBmb3IgKHZhciByPTA7IHIgPCBudW1yb3dzOyArK3IpIHtcclxuICAgICAgICBmb3IgKHZhciBjPTA7IGMgPCBudW1jb2xzOyArK2MpIHtcclxuICAgICAgICAgIGlmIChzcXVhcmVzW3JdW2NdICE9PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICAgICAgaWYgKCEociA+IDAgJiYgc3F1YXJlc1tyLTFdW2NdICE9PSBzcXVhcmV1bnVzZWQpICYmXHJcbiAgICAgICAgICAgICAhKGMgPiAwICYmIHNxdWFyZXNbcl1bYy0xXSAhPT0gc3F1YXJldW51c2VkKSAmJlxyXG4gICAgICAgICAgICAgIShyIDwgZWRnZSAmJiBzcXVhcmVzW3IrMV1bY10gIT09IHNxdWFyZXVudXNlZCkgJiZcclxuICAgICAgICAgICAgICEoYyA8IGVkZ2UgJiYgc3F1YXJlc1tyXVtjKzFdICE9PSBzcXVhcmV1bnVzZWQpXHJcbiAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJFYWNoIHBsYXllZCB0aWxlIG11c3QgYmUgcGFydCBvZiBhIHdvcmRcIik7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgaWYgKHNuYXBzaG90LnNxdWFyZXNbcl1bY10gPT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAgICAgICAgICAvLyBUaGlzIHNxdWFyZSB3YXMgcGxheWVkIG9uIHRoaXMgdHVyblxyXG4gICAgICAgICAgICAgICBpZiAociA8IGxvd3JvdykgeyBsb3dyb3cgPSByO31cclxuICAgICAgICAgICAgICAgaWYgKHIgPiBoaWdocm93KSB7IGhpZ2hyb3cgPSByO31cclxuICAgICAgICAgICAgICAgaWYgKGMgPCBsb3djb2wpIHsgbG93Y29sID0gYzt9XHJcbiAgICAgICAgICAgICAgIGlmIChjID4gaGlnaGNvbCkgeyBoaWdoY29sID0gYzt9XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChsb3dyb3cgPT09IG51bXJvd3MpIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJZb3UgZGlkbid0IHBsYXkgYW55IHRpbGVzXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobG93cm93ICE9PSBoaWdocm93ICYmIGxvd2NvbCAhPT0gaGlnaGNvbCkge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcIlRpbGVzIHBsYXllZCBtdXN0IGJlIGluIGEgc3RyYWlnaHQgbGluZVwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHBsYXl0aHJ1ID0gZmFsc2U7XHJcbiAgICAgIGxldCBob29rbWFkZSA9IGZhbHNlO1xyXG4gICAgICBmb3IgKHZhciByID0gbG93cm93OyByIDw9IGhpZ2hyb3c7ICsrcikge1xyXG4gICAgICAgIGZvciAodmFyIGMgPSBsb3djb2w7IGMgPD0gaGlnaGNvbDsgKytjKSB7XHJcbiAgICAgICAgICBpZiAoc3F1YXJlc1tyXVtjXSA9PT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIlRoZXJlIGlzIGEgZ2FwIGluIHlvdXIgd29yZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHNuYXBzaG90LnNxdWFyZXNbcl1bY10gIT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAgICAgICBwbGF5dGhydSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIHIgPiAwICYmIHNxdWFyZXNbci0xXVtjXSAhPT0gc3F1YXJldW51c2VkKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiByIDwgZWRnZSAmJiBzcXVhcmVzW3IrMV1bY10gIT09IHNxdWFyZXVudXNlZCkgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgYyA+IDAgJiYgc3F1YXJlc1tyXVtjLTFdICE9PSBzcXVhcmV1bnVzZWQpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGMgPCBlZGdlICYmIHNxdWFyZXNbcl1bYysxXSAhPT0gc3F1YXJldW51c2VkKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBDaGVjayBwbGF5IHRvIG9yIGZyb20gYSB0aWxlIChwbGF5IHRocm91Z2ggYnV0IG5vdCBlaXRoZXIgc2lkZSlcclxuICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiBsb3djb2wgPiAwICYmIHNuYXBzaG90LnNxdWFyZXNbbG93cm93XVtsb3djb2wtMV0gIT09IHNxdWFyZXVudXNlZCkgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiBoaWdoY29sIDwgZWRnZSAmJiBzbmFwc2hvdC5zcXVhcmVzW2xvd3Jvd11baGlnaGNvbCsxXSAhPT0gc3F1YXJldW51c2VkKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGxvd3JvdyA+IDAgJiYgc25hcHNob3Quc3F1YXJlc1tsb3dyb3ctMV1bbG93Y29sXSAhPT0gc3F1YXJldW51c2VkKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGhpZ2hyb3cgPCBlZGdlICYmIHNuYXBzaG90LnNxdWFyZXNbaGlnaHJvdysxXVtsb3djb2xdICE9PSBzcXVhcmV1bnVzZWQpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICAgIGlmICghcGxheXRocnUgJiYgIWhvb2ttYWRlICYmIHNuYXBzaG90LnNxdWFyZXNbbWlkZGxlXVttaWRkbGVdICE9PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJXb3JkcyBtdXN0IGJlIGNvbm5lY3RlZFwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBnZXRQbGF5SW5mbygpIHtcclxuICAgICAgbGV0IHBsYXlpbmZvID0ge307XHJcbiAgICAgIGxldCBtYWlud29yZCA9IFwiXCI7XHJcbiAgICAgIGxldCBleHRyYXdvcmRzID0gW107XHJcbiAgICAgIGxldCB3b3Jkc3RhcnRjb29yZCA9IFwiXCI7XHJcbiAgICAgIGxldCBudW1yb3dzID0gZWRnZSsxO1xyXG4gICAgICBsZXQgbnVtY29scyA9IGVkZ2UrMTtcclxuICAgICAgbGV0IGxvd3JvdyA9IG51bXJvd3M7XHJcbiAgICAgIGxldCBoaWdocm93ID0gLTE7XHJcbiAgICAgIGxldCBsb3djb2wgPSBudW1jb2xzO1xyXG4gICAgICBsZXQgaGlnaGNvbCA9IC0xO1xyXG4gICAgICBsZXQgbnVtY29vcmRzID0gY3VycmVudGNvb3Jkcy5sZW5ndGg7XHJcbiAgICAgIGZvciAodmFyIGNvb3JkPTA7IGNvb3JkIDwgbnVtY29vcmRzOyArK2Nvb3JkKSB7XHJcbiAgICAgICAgbGV0IHJvdyA9IHBhcnNlSW50KGN1cnJlbnRjb29yZHNbY29vcmRdLnNwbGl0KFwiLVwiKVswXSk7XHJcbiAgICAgICAgbGV0IGNvbCA9IHBhcnNlSW50KGN1cnJlbnRjb29yZHNbY29vcmRdLnNwbGl0KFwiLVwiKVsxXSk7XHJcbiAgICAgICAgaWYgKHJvdyA8IGxvd3Jvdykge1xyXG4gICAgICAgICAgbG93cm93ID0gcm93O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocm93ID4gaGlnaHJvdykge1xyXG4gICAgICAgICAgaGlnaHJvdyA9IHJvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbCA8IGxvd2NvbCkge1xyXG4gICAgICAgICAgbG93Y29sID0gY29sO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sID4gaGlnaGNvbCkge1xyXG4gICAgICAgICAgaGlnaGNvbCA9IGNvbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGxvd3JvdyA8IGhpZ2hyb3cgfHwgbnVtY29vcmRzID09PSAxKSB7IC8vIHRpbGVzIHBsYWNlZCBvbiBkaWZmZXJlbmNlIHJvd3Mgc28gcGxheSBpcyB2ZXJ0aWNhbCwgb3Igc2luZ2xlIHRpbGUgcGxheWVkXHJcbiAgICAgICAgbGV0IGNvbCA9IGxvd2NvbDsgLy8gbG93Y29sIGFuZCBoaWdoY29sIHdpbGwgaGF2ZSB0aGUgc2FtZSB2YWx1ZVxyXG4gICAgICAgIC8vIGZpbmQgdGhlIGxvd2VzdCByb3cgbnVtYmVyIG9mIHRoZSBtYWluIHdvcmQsIHdoaWNoIG1heSBiZSBsb3dlciB0aGFuIHRoYXQgb2YgdGhlIGZpcnN0IHBsYXllZCB0aWxlXHJcbiAgICAgICAgbGV0IGxvd2VzdHJvdyA9IGxvd3JvdztcclxuICAgICAgICB3aGlsZSAobG93ZXN0cm93ID4gMCAmJiBzcXVhcmVzW2xvd2VzdHJvdy0xXVtjb2xdICE9PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICAgIGxvd2VzdHJvdyA9IGxvd2VzdHJvdyAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZpbmQgdGhlIGhpZ2hlc3Qgcm93IG51bWJlciBvZiB0aGUgbWFpbiB3b3JkLCB3aGljaCBtYXkgYmUgaGlnaGVyIHRoYW4gdGhhdCBvZiB0aGUgbGFzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIGxldCBoaWdoZXN0cm93ID0gaGlnaHJvdztcclxuICAgICAgICB3aGlsZSAoaGlnaGVzdHJvdyA8IGVkZ2UgJiYgc3F1YXJlc1toaWdoZXN0cm93KzFdW2NvbF0gIT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAgICAgaGlnaGVzdHJvdyA9IGhpZ2hlc3Ryb3cgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3b3Jkc3RhcnRjb29yZCA9IGJvYXJkQ29sdW1uSGVhZGVyc1tjb2xdICsgYm9hcmRSb3dIZWFkZXJzW2xvd2VzdHJvd107IC8vIHZlcnRpY2FsIHBsYXkgY29vcmRzIHN0YXJ0IHdpdGggY29sIGhlYWRlclxyXG4gICAgICAgIGZvciAodmFyIHJvdyA9IGxvd2VzdHJvdzsgcm93IDw9IGhpZ2hlc3Ryb3c7ICsrcm93KSB7XHJcbiAgICAgICAgICBtYWlud29yZCA9IG1haW53b3JkICsgc3F1YXJlc1tyb3ddW2NvbF07XHJcbiAgICAgICAgICBsZXQgY29vcmQgPSByb3cgKyBcIi1cIiArIGNvbDtcclxuICAgICAgICAgIGlmIChjdXJyZW50Y29vcmRzLmluZGV4T2YoY29vcmQpID4gLTEpIHsgLy8gVGhpcyB0aWxlIHdhcyBwbGF5ZWQsIGNoZWNrIGZvciBob29rc1xyXG4gICAgICAgICAgICBsZXQgbG93ZXN0Y29sID0gY29sO1xyXG4gICAgICAgICAgICB3aGlsZSAobG93ZXN0Y29sID4gMCAmJiBzcXVhcmVzW3Jvd11bbG93ZXN0Y29sLTFdICE9PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICAgICAgICBsb3dlc3Rjb2wgPSBsb3dlc3Rjb2wgLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBoaWdoZXN0Y29sID0gY29sO1xyXG4gICAgICAgICAgICB3aGlsZSAoaGlnaGVzdGNvbCA8IGVkZ2UgJiYgc3F1YXJlc1tyb3ddW2hpZ2hlc3Rjb2wrMV0gIT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAgICAgICAgIGhpZ2hlc3Rjb2wgPSBoaWdoZXN0Y29sICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobG93ZXN0Y29sIDwgaGlnaGVzdGNvbCkgeyAvLyBob29rIHdhcyBtYWRlXHJcbiAgICAgICAgICAgICAgbGV0IGV4dHJhd29yZCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgYyA9IGxvd2VzdGNvbDsgYyA8PSBoaWdoZXN0Y29sOyArK2MpIHtcclxuICAgICAgICAgICAgICAgIGV4dHJhd29yZCA9IGV4dHJhd29yZCArIHNxdWFyZXNbcm93XVtjXTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZXh0cmF3b3JkcyA9IFsuLi5leHRyYXdvcmRzLCBleHRyYXdvcmRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYWlud29yZC5sZW5ndGggPCAyKSB7IC8vIEhvcml6b250YWwgcGxheSBvciBzaW5nbGUgdGlsZSBkcm9wIHRoYXQgY2Fubm90IGJlIGEgdmVydGljYWwgcGxheVxyXG4gICAgICAgIGxldCByb3cgPSBsb3dyb3c7IC8vIGxvd3JvdyBhbmQgaGlnaHJvdyB3aWxsIGhhdmUgdGhlIHNhbWUgdmFsdWVcclxuICAgICAgICAvLyBmaW5kIHRoZSBsb3dlc3QgY29sIG51bWJlciBvZiB0aGUgbWFpbiB3b3JkLCB3aGljaCBtYXkgYmUgbG93ZXIgdGhhbiB0aGF0IG9mIHRoZSBmaXJzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIGxldCBsb3dlc3Rjb2wgPSBsb3djb2w7XHJcbiAgICAgICAgd2hpbGUgKGxvd2VzdGNvbCA+IDAgJiYgc3F1YXJlc1tyb3ddW2xvd2VzdGNvbC0xXSAhPT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgICAgICBsb3dlc3Rjb2wgPSBsb3dlc3Rjb2wgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmaW5kIHRoZSBoaWdoZXN0IGNvbCBudW1iZXIgb2YgdGhlIG1haW4gd29yZCwgd2hpY2ggbWF5IGJlIGhpZ2hlciB0aGFuIHRoYXQgb2YgdGhlIGxhc3QgcGxheWVkIHRpbGVcclxuICAgICAgICBsZXQgaGlnaGVzdGNvbCA9IGhpZ2hjb2w7XHJcbiAgICAgICAgd2hpbGUgKGhpZ2hlc3Rjb2wgPCBlZGdlICYmIHNxdWFyZXNbcm93XVtoaWdoZXN0Y29sKzFdICE9PSBzcXVhcmV1bnVzZWQpIHtcclxuICAgICAgICAgIGhpZ2hlc3Rjb2wgPSBoaWdoZXN0Y29sICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd29yZHN0YXJ0Y29vcmQgPSBib2FyZFJvd0hlYWRlcnNbcm93XSArIGJvYXJkQ29sdW1uSGVhZGVyc1tsb3dlc3Rjb2xdOyAvLyBob3Jpem9udGFsIHBsYXkgY29vcmRzIHN0YXJ0IHdpdGggcm93IGhlYWRlclxyXG4gICAgICAgIG1haW53b3JkID0gXCJcIjsgLy8gSW4gY2FzZSB3ZSBnb3QgYSAxIGxldHRlciBtYWlud29yZCBpbiB0aGUgcHJldmlvdXMgYmxvY2tcclxuICAgICAgICBleHRyYXdvcmRzID0gW107IC8vIERpdHRvXHJcbiAgICAgICAgZm9yICh2YXIgY29sID0gbG93ZXN0Y29sOyBjb2wgPD0gaGlnaGVzdGNvbDsgKytjb2wpIHtcclxuICAgICAgICAgIG1haW53b3JkID0gbWFpbndvcmQgKyBzcXVhcmVzW3Jvd11bY29sXTtcclxuICAgICAgICAgIGxldCBjb29yZCA9IHJvdyArIFwiLVwiICsgY29sO1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCkgPiAtMSkgeyAvLyBUaGlzIHRpbGUgd2FzIHBsYXllZCwgY2hlY2sgZm9yIGhvb2tzXHJcbiAgICAgICAgICAgIGxldCBsb3dlc3Ryb3cgPSByb3c7XHJcbiAgICAgICAgICAgIHdoaWxlIChsb3dlc3Ryb3cgPiAwICYmIHNxdWFyZXNbbG93ZXN0cm93LTFdW2NvbF0gIT09IHNxdWFyZXVudXNlZCkge1xyXG4gICAgICAgICAgICAgIGxvd2VzdHJvdyA9IGxvd2VzdHJvdyAtIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGhpZ2hlc3Ryb3cgPSByb3c7XHJcbiAgICAgICAgICAgIHdoaWxlIChoaWdoZXN0cm93IDwgZWRnZSAmJiBzcXVhcmVzW2hpZ2hlc3Ryb3crMV1bY29sXSAhPT0gc3F1YXJldW51c2VkKSB7XHJcbiAgICAgICAgICAgICAgaGlnaGVzdHJvdyA9IGhpZ2hlc3Ryb3cgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChsb3dlc3Ryb3cgPCBoaWdoZXN0cm93KSB7IC8vIGhvb2sgd2FzIG1hZGVcclxuICAgICAgICAgICAgICBsZXQgZXh0cmF3b3JkID0gXCJcIjtcclxuICAgICAgICAgICAgICBmb3IgKHZhciByID0gbG93ZXN0cm93OyByIDw9IGhpZ2hlc3Ryb3c7ICsrcikge1xyXG4gICAgICAgICAgICAgICAgZXh0cmF3b3JkID0gZXh0cmF3b3JkICsgc3F1YXJlc1tyXVtjb2xdO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBleHRyYXdvcmRzID0gWy4uLmV4dHJhd29yZHMsIGV4dHJhd29yZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcGxheWluZm8gPSB7bWFpbndvcmQ6IG1haW53b3JkLCBleHRyYXdvcmRzOiBleHRyYXdvcmRzLCBwb3M6IHdvcmRzdGFydGNvb3JkfTtcclxuICAgICAgcmV0dXJuIHBsYXlpbmZvO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gZ2V0UmV3aW5kSW5mbygpIHsgLy8gTXVzdCBiZSBjYWxsZWQgYmVmb3JlIHlvdSBzdGFydCBzZXR0aW5nIG5ldyB2YWx1ZXMgZm9yIHN0dWZmXHJcbiAgICAgIC8qIFJld2luZCBpbmZvIGlzIGV2ZXJ5dGhpbmcgeW91IG5lZWQgdG8gcmV2ZXJzZSB0aGUgbW92ZSB0aGF0IHdlIGRvIG5vdCBhbHJlYWR5IGhhdmUgaW4gdGhlIG5ldyBtb3ZlIHZhcmlhYmxlOlxyXG4gICAgICAgICAgc3F1YXJlczogc2F5cyB3aGF0IHRpbGUgaXMgb24gd2hhdCBzcXVhcmVcclxuICAgICAgICAgIHVzZWRieTogc2F5cyB3aG8gcGxheWVkIHdoYXQgdGlsZSBvbiB3aGF0IHNxdWFyZSAoYWZmZWN0cyBzdHlsaW5nKVxyXG4gICAgICAgICAgcmFjazogcGxheWVycyByYWNrIGJlZm9yZSBtb3ZlIHdhcyBtYWRlIFxyXG4gICAgICAgICAgdGlsZXM6IHRpbGUgcG9vbCBiZWZvcmUgcGlja2luZyBuZXcgdGlsZXNcclxuICAgICAgICAgIHJlc2N1ZXM6IHJlc2N1ZSBjb3VudFxyXG4gICAgICAqL1xyXG4gICAgICBsZXQgcmV3aW5kSW5mbyA9IHtcclxuICAgICAgICBzcXVhcmVzOiBbLi4uc25hcHNob3Quc3F1YXJlc10sXHJcbiAgICAgICAgdXNlZGJ5OiBbLi4uc25hcHNob3QudXNlZGJ5XSxcclxuICAgICAgICByYWNrOiB3aG9zZXR1cm4gPT09IFwiR1wiID8gWy4uLnNuYXBzaG90Lmd0aWxlc106IFsuLi5zbmFwc2hvdC5wdGlsZXNdLFxyXG4gICAgICAgIHRpbGVzOiBbLi4udGlsZXNdLFxyXG4gICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXNcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuIHJld2luZEluZm87XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhbGxvd1VuZG9MYXN0VHVybigpIHtcclxuICAgICAgaWYgKCFhbGxvd1Jld2luZCkge1xyXG4gICAgICAgIHNldEFsbG93UmV3aW5kKHRydWUpO1xyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICAgIGZ1bmM6IFwiYWxsb3d1bmRvXCIsIC8vIGFsbG93IHVuZG8gbGFzdCB0dXJuXHJcbiAgICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyAvLyB3aG8gaXMgYWxsb3dpbmcgaXRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBwZXJmb3JtUmV3aW5kKCkge1xyXG4gICAgICAvKiBSZXdpbmQgdGhlIGxhc3QgbW92ZSBhbmQgdGFrZSBpdCBvZmYgdGhlIGVuZCBvZiB0aGUgbW92ZSBsaXN0ICovXHJcbiAgICAgIGxldCBudW1Nb3ZlcyA9IG1vdmVzLmxlbmd0aDtcclxuICAgICAgbGV0IGxhc3RNb3ZlID0gbW92ZXNbbW92ZXMubGVuZ3RoLTFdO1xyXG4gICAgICBsZXQgbmV3U3F1YXJlcyA9IFsuLi5sYXN0TW92ZS5yZXdpbmRJbmZvLnNxdWFyZXNdO1xyXG4gICAgICBsZXQgbmV3VXNlZGJ5ID0gWy4uLmxhc3RNb3ZlLnJld2luZEluZm8udXNlZGJ5XTtcclxuICAgICAgbGV0IG5ld1RpbGVzID0gWy4uLmxhc3RNb3ZlLnJld2luZEluZm8udGlsZXNdO1xyXG4gICAgICBsZXQgbmV3UHRpbGVzID0gbGFzdE1vdmUuYnkgPT09IFwiUFwiID8gWy4uLmxhc3RNb3ZlLnJld2luZEluZm8ucmFja10gOiBbLi4ucHRpbGVzXTtcclxuICAgICAgbGV0IG5ld0d0aWxlcyA9IGxhc3RNb3ZlLmJ5ID09PSBcIkdcIiA/IFsuLi5sYXN0TW92ZS5yZXdpbmRJbmZvLnJhY2tdIDogWy4uLmd0aWxlc107XHJcbiAgICAgIGxldCBuZXdSZXNjdWVzID0gbGFzdE1vdmUucmV3aW5kSW5mby5yZXNjdWVzO1xyXG4gICAgICBsZXQgbmV3V2hvc2V0dXJuID0gbGFzdE1vdmUuYnk7IC8vIEJhY2sgdG8gdGhlaXIgdHVyblxyXG4gICAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXNdO1xyXG4gICAgICBuZXdNb3Zlcy5zcGxpY2UobnVtTW92ZXMtMSwxKTtcclxuICAgICAgbGV0IG5ld1NuYXBzaG90ID0ge1xyXG4gICAgICAgIHNxdWFyZXM6IFsuLi5uZXdTcXVhcmVzXSxcclxuICAgICAgICB1c2VkYnk6IFsuLi5uZXdVc2VkYnldLFxyXG4gICAgICAgIGd0aWxlczogWy4uLm5ld0d0aWxlc10sXHJcbiAgICAgICAgcHRpbGVzOiBbLi4ubmV3UHRpbGVzXVxyXG4gICAgICB9O1xyXG4gICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKTtcclxuICAgICAgc2V0VXNlZGJ5KG5ld1VzZWRieSk7XHJcbiAgICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgICBzZXRSZXNjdWVzKG5ld1Jlc2N1ZXMpO1xyXG4gICAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICAgIHNldFNuYXBzaG90KG5ld1NuYXBzaG90KTtcclxuICAgICAgLy8gSnVzdCBzZW5kIGV2ZXJ5dGhpbmcgZXZlbiB0aG91Z2ggc29tZSBjb3VsZCBiZSBoYXJkIGNvZGVkIGluIHByb2Nlc3NNZXNzYWdlIGJ5IG9wcG9uZW50XHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgZnVuYzogXCJ1bmRvdHVyblwiLCAvLyB1bmRvIGxhc3QgdHVyblxyXG4gICAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gdGlsZSBwb29sXHJcbiAgICAgICAgICBwdGlsZXM6IG5ld1B0aWxlcywgLy8gcHJpc29uZXJzIHJhY2tcclxuICAgICAgICAgIGd0aWxlczogbmV3R3RpbGVzLCAvLyBndWFyZHMgcmFja1xyXG4gICAgICAgICAgc3F1YXJlczogbmV3U3F1YXJlcywgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgICAgdXNlZGJ5OiBuZXdVc2VkYnksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHVzZWQgYnlcclxuICAgICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuLCAvLyBzd2FwIG5ldmVyIGVuZHMgdGhlIGdhbWUgc28gZ28gdG8gb3Bwb25lbnRcclxuICAgICAgICAgIHJlc2N1ZXM6IG5ld1Jlc2N1ZXMsIC8vIHJlc2N1ZSBjb3VudFxyXG4gICAgICAgICAgbW92ZXM6IG5ld01vdmVzLCAvLyBhIG1vdmUgd2FzIG1hZGVcclxuICAgICAgICAgIHNuYXBzaG90OiBuZXdTbmFwc2hvdFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCByZWNhbGxUaWxlcyA9ICgpID0+IHtcclxuICAgICAgc2V0U3F1YXJlcyhbLi4uc25hcHNob3Quc3F1YXJlc10pO1xyXG4gICAgICBzZXRVc2VkYnkoWy4uLnNuYXBzaG90LnVzZWRieV0pO1xyXG4gICAgICBzZXRQdGlsZXMoWy4uLnNuYXBzaG90LnB0aWxlc10pO1xyXG4gICAgICBzZXRHdGlsZXMoWy4uLnNuYXBzaG90Lmd0aWxlc10pO1xyXG4gICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgICAgc2V0UmNkKFstMSwtMSxub2RpcmVjdGlvbl0pO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IHByaXNvbmVyUGFzcyA9ICgpID0+IHtcclxuICAgICAgbGV0IHJld2luZEluZm8gPSBnZXRSZXdpbmRJbmZvKCk7XHJcbiAgICAgIGxldCBuZXdNb3ZlID0ge2J5OiBcIlBcIiwgdHlwZTogXCJQQVNTXCIsIHJld2luZEluZm86IHJld2luZEluZm99O1xyXG4gICAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgICBsZXQgbmV3V2hvc2V0dXJuID0gaXNEb3VibGVQYXNzKG5ld01vdmVzKSA/IFwiWFwiIDogXCJHXCI7IC8vIElmIGJvdGggcGxheWVycyBwYXNzIHRoZW4gZW5kIHRoZSBnYW1lIGJ5IHVzaW5nIFwiWFwiXHJcbiAgICAgIHJlY2FsbFRpbGVzKCk7IC8vIEluIGNhc2UgdGhleSBwdXQgc29tZSB0aWxlcyBvbiB0aGUgYm9hcmQgYmVmb3JlIGNsaWNraW5nIFBhc3NcclxuICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcImVwdFwiLCAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsXHJcbiAgICAgICAgICBzcXVhcmVzOiBzbmFwc2hvdC5zcXVhcmVzLCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiBzcXVhcmVzXHJcbiAgICAgICAgICB1c2VkYnk6IHNuYXBzaG90LnVzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgICAgcHRpbGVzOiBzbmFwc2hvdC5wdGlsZXMsIC8vIHByaXNvbmVycyByYWNrIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgICB0aWxlczogdGlsZXMsIC8vIHRpbGUgcG9vbCBkaWQgbm90IGNoYW5nZVxyXG4gICAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4sIC8vIG1heSBoYXZlIGVuZGVkIHRoZSBnYW1lXHJcbiAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgICBtb3ZlczogbmV3TW92ZXMsIC8vIGEgbW92ZSB3YXMgbWFkZVxyXG4gICAgICAgICAgcmVzY3VlczogcmVzY3VlcyAvLyBubyByZXNjdWVzIG9uIGEgcGFzc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBndWFyZHNQYXNzID0gKCkgPT4ge1xyXG4gICAgICBsZXQgcmV3aW5kSW5mbyA9IGdldFJld2luZEluZm8oKTtcclxuICAgICAgbGV0IG5ld01vdmUgPSB7Ynk6IFwiR1wiLCB0eXBlOiBcIlBBU1NcIiwgcmV3aW5kSW5mbzogcmV3aW5kSW5mb307XHJcbiAgICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICAgIGxldCBuZXdXaG9zZXR1cm4gPSBpc0RvdWJsZVBhc3MobmV3TW92ZXMpID8gXCJYXCIgOiBcIlBcIjsgLy8gSWYgYm90aCBwbGF5ZXJzIHBhc3MgdGhlbiBlbmQgdGhlIGdhbWUgYnkgdXNpbmcgXCJYXCJcclxuICAgICAgcmVjYWxsVGlsZXMoKTsgLy8gSW4gY2FzZSB0aGV5IHB1dCBzb21lIHRpbGVzIG9uIHRoZSBib2FyZCBiZWZvcmUgY2xpY2tpbmcgUGFzc1xyXG4gICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcyxcclxuICAgICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgICBndGlsZXM6IHNuYXBzaG90Lmd0aWxlcywgLy8gZ3VhcmRzIHJhY2sgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICAgIHRpbGVzOiB0aWxlcywgLy8gdGlsZSBwb29sIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gbWF5IGhhdmUgZW5kZWQgdGhlIGdhbWVcclxuICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgIG1vdmVzOiBuZXdNb3ZlcyAvLyBhIG1vdmUgd2FzIG1hZGVcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gaXNEb3VibGVQYXNzKG1vdmVsaXN0KSB7XHJcbiAgICAgICAgbGV0IGxhc3QgPSBtb3ZlbGlzdC5sZW5ndGggLSAxO1xyXG4gICAgICAgIGxldCBzZWNvbmRsYXN0ID0gbGFzdCAtIDE7XHJcbiAgICAgICAgcmV0dXJuIHNlY29uZGxhc3QgPiAtMSAmJlxyXG4gICAgICAgICAgbW92ZWxpc3Rbc2Vjb25kbGFzdF0udHlwZSA9PT0gXCJQQVNTXCIgJiZcclxuICAgICAgICAgIG1vdmVsaXN0W2xhc3RdLnR5cGUgPT09IFwiUEFTU1wiO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcXVlc3RHYW1lRGF0YSA9ICgpID0+IHtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLFxyXG4gICAgICAgICAgd2hvc2V0dXJuOiB3aG9zZXR1cm4sIC8vIGZvciBsb2JieSB0byBwaWNrIHVwIHRoaXMgbWVzc2FnZVxyXG4gICAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgICAgZnVuYzogXCJyZXF1ZXN0Z2FtZWRhdGFcIiAvLyByZXF1ZXN0IGdhbWUgZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKHByaXNvbmVyc09yR3VhcmRzICE9PSB3aG9zZXR1cm4pIHtyZXR1cm47fVxyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICB3aG9zZXR1cm4gPT09IFwiUFwiID8gZW5kUHJpc29uZXJzVHVybigpIDogZW5kR3VhcmRzVHVybigpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgcmVjYWxsVGlsZXMoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGxldHRlcnRlc3QgPSAvXltBLVphLXpcXD9dJC87IC8vIHNpbmdsZSBsZXR0ZXIgb3IgcXVlc3Rpb24gbWFyayBrZXkgcHJlc3NlZFxyXG4gICAgICBpZiAoZXZlbnQua2V5Lm1hdGNoKGxldHRlcnRlc3QpKSB7XHJcbiAgICAgICAgbGV0IGxldHRlciA9IGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIGxldCByYWNrID0gd2hvc2V0dXJuID09PSBcIlBcIiA/IHB0aWxlcyA6IGd0aWxlcztcclxuICAgICAgICBsZXQgbmV3U2VsZWN0aW9uID0gcmFjay5pbmRleE9mKGxldHRlcik7XHJcbiAgICAgICAgaWYgKG5ld1NlbGVjdGlvbiA9PT0gLTEpIHtcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IHJhY2suaW5kZXhPZihcIj9cIik7IC8vIFVzZSB0aGUgYmxhbmsgaWYgdGhleSBoYXZlIG9uZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmV3U2VsZWN0aW9uID4gLTEpIHsgLy8gUHJlc3NlZCBsZXR0ZXIgaXMgb24gdGhlIHJhY2tcclxuICAgICAgICAgIGxldCByb3cgPSByY2RbMF07XHJcbiAgICAgICAgICBsZXQgY29sID0gcmNkWzFdO1xyXG4gICAgICAgICAgbGV0IGRpciA9IHJjZFsyXTtcclxuICAgICAgICAgIGlmIChyb3cgPi0xICYmIGNvbCA+IC0xICYmIGRpciAhPT0gbm9kaXJlY3Rpb24pIHsgLy8gcm93LCBjb2wsIGRpciBhcmUgc2V0IHRvIGFjY2VwdCBrZXlzdHJva2VcclxuICAgICAgICAgICAgLy8gTmVlZCB0byBmaWd1cmUgb3V0IG5leHQgc3FhdXJlIHRvIGF1dG8tcGxhY2UgYSB0aWxlXHJcbiAgICAgICAgICAgIGxldCBuZXdSY2QgPSByY2Q7XHJcbiAgICAgICAgICAgIGlmIChkaXIgPT09IFwiclwiKSB7IC8vIHBsYXlpbmcgcmlnaHR3YXJkc1xyXG4gICAgICAgICAgICAgIGxldCBuZXdjID0gLTE7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgYyA9IGNvbCArIDE7IGMgPCBlZGdlICsgMSAmJiBuZXdjID09PSAtMTsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3F1YXJlc1tyb3ddW2NdID09PSBzcXVhcmV1bnVzZWQpIHtuZXdjID0gYzt9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChuZXdjID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgbmV3UmNkID0gWy0xLC0xLG5vZGlyZWN0aW9uXTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3UmNkID0gW3JvdywgbmV3YywgXCJyXCJdO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJvdyxjb2wsbmV3U2VsZWN0aW9uLG5ld1JjZCk7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTsgLy8gd2hlbiB0aGV5IGFyZSB0eXBpbmcgdGhleSBhcmUgbm90IHNlbGVjdGluZyByYWNrIHRpbGVzIGJ5IGNsaWNraW5nIHRoZW0gb24gdGhlIHJhY2tcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRpciA9PT0gXCJkXCIpIHsgLy8gcGxheWluZyBkb3dud2FyZHNcclxuICAgICAgICAgICAgICBsZXQgbmV3ciA9IC0xO1xyXG4gICAgICAgICAgICAgIGxldCBudW1yb3dzID0gKHJhY2tzaXplKjIpKzE7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgciA9IHJvdyArIDE7IHIgPCBudW1yb3dzICYmIG5ld3IgPT09IC0xOyByKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzcXVhcmVzW3JdW2NvbF0gPT09IHNxdWFyZXVudXNlZCkge25ld3IgPSByO31cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKG5ld3IgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSY2QgPSBbLTEsLTEsbm9kaXJlY3Rpb25dO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSY2QgPSBbbmV3ciwgY29sLCBcImRcIl07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socm93LGNvbCxuZXdTZWxlY3Rpb24sbmV3UmNkKTtcclxuICAgICAgICAgICAgICBzZXRTZWxlY3Rpb24oLTEpOyAvLyB3aGVuIHRoZXkgYXJlIHR5cGluZyB0aGV5IGFyZSBub3Qgc2VsZWN0aW5nIHJhY2sgdGlsZXMgYnkgY2xpY2tpbmcgdGhlbSBvbiB0aGUgcmFja1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJCYWNrc3BhY2VcIiAmJiBjdXJyZW50Y29vcmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvLyBTYW1lIGFzIGNsaWNraW5nIG9uIGEgcGxheWVkLXRoaXMtbW92ZSB0aWxlIGluIHRlcm1zIG9mIHJldHVybmluZyB0aGUgdGlsZSB0byB0aGUgcmFja1xyXG4gICAgICAgIC8vIEhvd2V2ZXIgd2UgYWxzbyB3YW50IHRvIHNldCB1cCByY2Qgc28gdGhleSBjYW4gcHJlc3MgdGhlIGtleSB0aGV5IG1lYW50IGFuZCBjb250aW51ZVxyXG4gICAgICAgIGxldCBjb29yZCA9IGN1cnJlbnRjb29yZHNbY3VycmVudGNvb3Jkcy5sZW5ndGggLSAxXTsgLy8gdGlsZSB0byByZXR1cm4gdG8gcmFja1xyXG4gICAgICAgIGxldCBuZXdDdXJyZW50Y29vcmRzID0gWy4uLmN1cnJlbnRjb29yZHNdO1xyXG4gICAgICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgICAgICBsZXQgbmV3R3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICAgICAgbGV0IG5ld1VzZWRieSA9IFsuLi51c2VkYnldO1xyXG4gICAgICAgIGxldCBuZXdTcXVhcmVzID0gWy4uLnNxdWFyZXNdO1xyXG4gICAgICAgIGxldCBuZXdSY2QgPSBbLTEsLTEsbm9kaXJlY3Rpb25dO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3Rpb24gPSBzZWxlY3Rpb247XHJcbiAgICAgICAgbmV3Q3VycmVudGNvb3Jkcy5zcGxpY2UoY3VycmVudGNvb3Jkcy5sZW5ndGgtMSwxKTtcclxuICAgICAgICBsZXQgcm93ID0gcGFyc2VJbnQoY29vcmQuc3BsaXQoXCItXCIpWzBdKTtcclxuICAgICAgICBsZXQgY29sID0gcGFyc2VJbnQoY29vcmQuc3BsaXQoXCItXCIpWzFdKTtcclxuICAgICAgICBsZXQgcmV0dXJuZWRUaWxlID0gc3F1YXJlc1tyb3ddW2NvbF07XHJcbiAgICAgICAgaWYgKHdob3NldHVybiA9PT0gXCJQXCIpIHtcclxuICAgICAgICAgIG5ld1B0aWxlcy5wdXNoKHJldHVybmVkVGlsZSk7XHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdQdGlsZXMubGVuZ3RoLTE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5ld0d0aWxlcy5wdXNoKHJldHVybmVkVGlsZSk7XHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdHdGlsZXMubGVuZ3RoLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld1VzZWRieVtyb3ddW2NvbF0gPSB1c2VkYnlub29uZTtcclxuICAgICAgICBuZXdTcXVhcmVzW3Jvd11bY29sXSA9IHNxdWFyZXVudXNlZDtcclxuICAgICAgICBsZXQgZGlyID0gcmNkWzJdO1xyXG4gICAgICAgIGlmIChkaXIgIT09IG5vZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAvLyBkaXJlY3Rpb24gd2FzIHNldCBzbyBrZWVwIGl0XHJcbiAgICAgICAgICBuZXdSY2QgPSBbcm93LGNvbCxkaXJdO1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IC0xOyAvLyBpZiB0aGV5IGJhY2tzcGFjZSBhbGwgdGhlIGxldHRlcnMgb2ZmIGxlYXZlIHJhY2sgdGlsZSB1bnNlbGVjdGVkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEN1cnJlbnRjb29yZHMobmV3Q3VycmVudGNvb3Jkcyk7XHJcbiAgICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobmV3VXNlZGJ5KTtcclxuICAgICAgICBzZXRSY2QobmV3UmNkKTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24obmV3U2VsZWN0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmlzb25icmVha1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1jb250YWluZXIgdzMtdGVhbCB0b3BCYXJIZWlnaHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1taWRkbGVcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm15SGVhZGluZ0ZvbnRcIj5Qcmlzb24gQnJlYWs8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktdG9wbGVmdCB3My1ibGFjayB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICBHYW1lIGlkOiB7Z2FtZWlkfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktYm90dG9tbGVmdCB3My1vcmFuZ2UgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgUHJpc29uZXJzOiB7cHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gbmlja25hbWUgOiBvcHBuYW1lfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktdG9wcmlnaHQgdzMtYmxhY2sgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIuLi8uLi9cIn0+XHJcbiAgICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktYm90dG9tcmlnaHQgdzMtb3JhbmdlIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIEd1YXJkczoge3ByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IG9wcG5hbWUgOiBuaWNrbmFtZX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwYlRpbGVBbmRNb3Zlc091dGVyXCI+XHJcbiAgICAgICAgICAgICAgPFNob3dVbnNlZW5UaWxlcyB0aWxlcz17dGlsZXN9IG90aGVydGlsZXM9e3ByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IGd0aWxlcyA6IHB0aWxlc30vPlxyXG4gICAgICAgICAgICAgIDxTaG93TW92ZXMgbW92ZXM9e21vdmVzfS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBiUGxheWVyT3V0ZXJTZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIHtwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgP1xyXG4gICAgICAgICAgICAgIDxQbGF5ZXJTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICByYWNrdGlsZXM9e3B0aWxlc31cclxuICAgICAgICAgICAgICAgIHdob3NldHVybj17d2hvc2V0dXJufVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IGhhbmRsZVJhY2tUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja0ZpbmlzaFR1cm49eygpID0+IGVuZFByaXNvbmVyc1R1cm4oKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tUaWxlUmVjYWxsPXsoKSA9PiByZWNhbGxUaWxlcygpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1RpbGVFeGNoYW5nZT17KCkgPT4gc3dhcFByaXNvbmVyc1RpbGVzKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrUGFzc1BsYXk9eygpID0+IHByaXNvbmVyUGFzcygpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1VuZG9MYXN0UGxheT17KCkgPT4gcGVyZm9ybVJld2luZCgpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja0FsbG93VW5kbz17KCkgPT4gYWxsb3dVbmRvTGFzdFR1cm4oKX1cclxuICAgICAgICAgICAgICAgIHByaXNvbmVyc09yR3VhcmRzPXtwcmlzb25lcnNPckd1YXJkc31cclxuICAgICAgICAgICAgICAgIG1vdmVzPXttb3Zlc31cclxuICAgICAgICAgICAgICAgIGFsbG93UmV3aW5kPXthbGxvd1Jld2luZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgPFBsYXllclNlY3Rpb25cclxuICAgICAgICAgICAgICAgIHJhY2t0aWxlcz17Z3RpbGVzfVxyXG4gICAgICAgICAgICAgICAgd2hvc2V0dXJuPXt3aG9zZXR1cm59XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb249e3NlbGVjdGlvbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyh0aSkgPT4gaGFuZGxlUmFja1RpbGVDbGljayh0aSl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrRmluaXNoVHVybj17KCkgPT4gZW5kR3VhcmRzVHVybigpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1RpbGVSZWNhbGw9eygpID0+IHJlY2FsbFRpbGVzKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrVGlsZUV4Y2hhbmdlPXsoKSA9PiBzd2FwR3VhcmRzVGlsZXMoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tQYXNzUGxheT17KCkgPT4gZ3VhcmRzUGFzcygpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1VuZG9MYXN0UGxheT17KCkgPT4gcGVyZm9ybVJld2luZCgpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja0FsbG93VW5kbz17KCkgPT4gYWxsb3dVbmRvTGFzdFR1cm4oKX1cclxuICAgICAgICAgICAgICAgIHByaXNvbmVyc09yR3VhcmRzPXtwcmlzb25lcnNPckd1YXJkc31cclxuICAgICAgICAgICAgICAgIG1vdmVzPXttb3Zlc31cclxuICAgICAgICAgICAgICAgIGFsbG93UmV3aW5kPXthbGxvd1Jld2luZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIHtwcmlzb25lcnNPckd1YXJkcyA9PT0gd2hvc2V0dXJuID9cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIG9uS2V5RG93bkNhcHR1cmU9e2hhbmRsZUtleURvd259PlxyXG4gICAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICAgIHNxdWFyZXM9e3NxdWFyZXN9XHJcbiAgICAgICAgICAgICAgICAgIHVzZWRieT17dXNlZGJ5fVxyXG4gICAgICAgICAgICAgICAgICByY2Q9e3JjZH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KHJpLCBjaSkgPT4gaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyaSwgY2ksIC0xLG51bGwpfVxyXG4gICAgICAgICAgICAgICAgICByYWNrc2l6ZT17cmFja3NpemV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICAgICAgICBzcXVhcmVzPXtzcXVhcmVzfVxyXG4gICAgICAgICAgICAgICAgICB1c2VkYnk9e3VzZWRieX1cclxuICAgICAgICAgICAgICAgICAgcmNkPXtyY2R9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt9fVxyXG4gICAgICAgICAgICAgICAgICByYWNrc2l6ZT17cmFja3NpemV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDxTaG93UmVzY3VlcyByZXNjdWVzPXtyZXNjdWVzfSAvPlxyXG4gICAgICAgICAgICA8Q2hhdCBnYW1laWQ9e2dhbWVpZH0gY2xpZW50PXtjbGllbnR9IG5pY2tuYW1lPXtuaWNrbmFtZX0gbXNncz17Y2hhdG1zZ3N9IHNldE1zZ3M9e3NldENoYXRtc2dzfSBwcmlzb25lcnNPckd1YXJkcz17cHJpc29uZXJzT3JHdWFyZHN9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1jb250YWluZXIgdzMtdGVhbCB0b3BCYXJIZWlnaHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1taWRkbGUgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICB7d2hvc2V0dXJuID09PSBcIlhcIiA/XHJcbiAgICAgICAgICAgICAgPGgxPkdhbWUgT3ZlciE8L2gxPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgPHA+e2pva2VzW2pva2VpbmRleF19PC9wPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgXHJcbiAgY29uc3QgU2hvd1Jlc2N1ZXMgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJSZXNjdWVzTWFkZVwiPlxyXG4gICAgICAgIFJlc2N1ZXMgbWFkZToge3Byb3BzLnJlc2N1ZXN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IENoYXQgPSAoe2dhbWVpZCwgY2xpZW50LCBuaWNrbmFtZSwgbXNncywgc2V0TXNncywgcHJpc29uZXJzT3JHdWFyZHN9KSA9PiB7XHJcbiAgICBjb25zdCBbbmV4dG1zZywgc2V0TmV4dG1zZ10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgIFxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIgJiYgbmV4dG1zZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgbmV3TXNncyA9IFsuLi5tc2dzLCB7ZnJvbTogbmlja25hbWUsIG1zZzogbmV4dG1zZ31dXHJcbiAgICAgICAgbGV0IHNlbmRtc2cgPSBuZXh0bXNnO1xyXG4gICAgICAgIHNldE1zZ3MobmV3TXNncyk7XHJcbiAgICAgICAgc2V0TmV4dG1zZygnJyk7XHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgICAgZnVuYzogXCJjaGF0XCIsIC8vIHNlbmQgY2hhdCBtZXNzYWdlXHJcbiAgICAgICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsIC8vIHdobyBzZW50IGl0XHJcbiAgICAgICAgICAgIHNlbmRtc2c6IHNlbmRtc2cgLy8gdGhlIG1lc3NhZ2UgdHlwZWQgaW4gdGhlIGNoYXRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gbGV0IGNoYXJ0ZXN0ID0gL15bQS1aYS16MC05IFxcLixcXChcXClcXD86ISdcIl0kLzsgLy8gQWxsb3cgbGV0dGVyLCBudW1iZXIsIHNwYWNlLCBwZXJpb2QsIGNvbW1hLCByb3VuZCBicmFja2V0cywgcXVlc3Rpb24gbWFyaywgY29sb24sIGV4Y2xhbWF0aW9uIG1hcmssIHF1b3RlLCBkb3VibGUgcXVvdGVcclxuICAgICAgLy8gaWYgKGV2ZW50LmtleS5tYXRjaChjaGFydGVzdCkpIHtcclxuICAgICAgLy8gICBsZXQgbmV3TmV4dG1zZyA9IG5leHRtc2cgKyBldmVudC5rZXk7XHJcbiAgICAgIC8vICAgc2V0TmV4dG1zZyhuZXdOZXh0bXNnKTtcclxuICAgICAgLy8gfVxyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkJhY2tzcGFjZVwiICYmIG5leHRtc2cubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IG5ld05leHRtc2cgPSBuZXh0bXNnLnNsaWNlKDAsbmV4dG1zZy5sZW5ndGgtMSk7XHJcbiAgICAgICAgc2V0TmV4dG1zZyhuZXdOZXh0bXNnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD1cIlNjcm9sbGFibGVDaGF0XCIgY2xhc3NOYW1lPVwicGJDaGF0XCI+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInBiQ2hhdFRhYmxlXCI+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHttc2dzLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPHRyIGtleT17YENoYXRNZXNzYWdlJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkNoYXRGcm9tXCI+e3ZhbHVlLmZyb219PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYkNoYXRNc2dcIj57dmFsdWUubXNnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjJcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9e25leHRtc2cgPT09IFwiXCIgPyBcInBiQ2hhdElucHV0RW1wdHlcIiA6IFwicGJDaGF0SW5wdXRcIn1cclxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5leHRtc2dJbnB1dEFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bmV4dG1zZ31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0TmV4dG1zZyhlLnRhcmdldC52YWx1ZSk7fX1cclxuICAgICAgICAgICAgICAgICAgb25LZXlEb3duQ2FwdHVyZT17aGFuZGxlS2V5RG93bn1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjaGF0Li4uXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgY29uc3Qgc2Nyb2xsVG9Cb3R0b20gPSAoZWxlbWVudGlkKSA9PiB7XHJcbiAgICBjb25zdCB0aGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudGlkKTtcclxuICAgIHRoZUVsZW1lbnQuc2Nyb2xsVG9wID0gdGhlRWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBHYW1lOyJdLCJzb3VyY2VSb290IjoiIn0=