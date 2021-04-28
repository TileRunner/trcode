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
/* harmony import */ var _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/pbconstants */ "./lib/pbconstants.js");


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\pb\\game.js",
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();








const movewaittime = 20000; // when waiting for opponent ping every this many milliseconds

const jokes = ['Escapee: "I' + "'m free! I'm free!" + '". Little kid: "I' + "'m four! I'm four!" + '"', 'Two peanuts were walking down a back alley. One was a salted.', "The psychic dwarf escaped! There's a small medium at large!", 'What do you call a vegetable who has escaped prison? An escapea!', "The prisoners fave punctuation is a period. It marks the end of a sentence!", "Prison is only one word, but to robbers it's a whole sentence."];
const initialtiles4 = ["A", "A", "A", "B", "C", "D", "E", "E", "E", "E", "F", "G", "H", "I", "I", "I", "J", "K", "L", "M", "N", "N", "O", "O", "O", "P", "Q", "R", "R", "S", "T", "T", "U", "V", "W", "X", "Y", "Z", "?", "?"]; // initial tile pool for 4 letter rack mode

const initialtiles5 = ["A", "A", "A", "A", "A", "B", "C", "D", "D", "E", "E", "E", "E", "E", "E", "F", "G", "H", "I", "I", "I", "I", "I", "J", "K", "L", "L", "M", "N", "N", "N", "O", "O", "O", "O", "P", "Q", "R", "R", "R", "S", "S", "T", "T", "T", "U", "V", "W", "X", "Y", "Z", "?", "?"]; // initial tile pool for 5 letter rack mode

const initialtiles6 = ["A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "M", "M", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "S", "S", "S", "T", "T", "T", "T", "U", "U", "U", "V", "W", "X", "Y", "Z", "?", "?"]; // initial tile pool for 6 letter rack mode

const initialtiles7 = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z", "?", "?"]; // initial tile pool for 7 letter rack mode

const usedbynoone = "";
const nodirection = "";

const Game = ({
  isrejoin,
  participant // Prisoners, Guards, or Observer
  ,
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
  const initialsquares = Array(edge + 1).fill(Array(edge + 1).fill(_lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]));
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"]); // game starts with prisoners play

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
      var myaudio = document.createElement('audio');
      myaudio.src = "https://tilerunner.github.io/yippee.m4a";
      myaudio.play(); // rescueSound.play()
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
      if (participant !== whoseturn && whoseturn !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GAMEOVER"]) {
        // I am waiting for opponent move to come through but sometimes it gets missed (no idea why)
        requestGameData(); // Send a request for game data in case opponent moved and we missed the update
      }
    }, movewaittime); // this many milliseconds between above code block executions

    return () => clearInterval(interval);
  }, [whoseturn]); // want up to date value of whoseturn to decide whether to ask for an update

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // This code executes first time Game is used only
    if (!isrejoin && participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"]) {
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
        sender: participant,
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
          sender: participant
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
        sender: participant,
        gameid: gameid,
        nickname: nickname,
        // player nickname
        whoseturn: whoseturn,
        racksize: racksize // rack size option (lobby needs to know for when guards join game and they call Game)

      }));
    } else if (messageData.gameid === gameid && messageData.type === "pb") {
      // This instance of a prison break game
      if (messageData.sender != participant && oppname === "" && messageData.nickname && messageData.nickname.length > 0) {
        // Opponent sent a message including their nickname and I don't have their nickname yet
        setOppname(messageData.nickname);
      }

      if (messageData.func === "requestgamedata" && messageData.sender !== participant) {
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
          sender: participant,
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

      if (messageData.func === "providegamedata" && messageData.sender !== participant) {
        // Opponent provided game data but do we need it?
        // If they have a different move count then we need it (they may have undone a move)
        // If they have same move count but a different tile bag count then we need it (no moves made but tiles are picked)
        // If guards join after prisoners made a move then guards have no tiles ("ept" got processed which leaves gtiles alone)
        if (messageData.moves.length !== moves.length || messageData.tiles.length !== tiles.length || participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_GUARDS"] && gtiles.length === 0 && currentcoords.length === 0 || participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"] && ptiles.length === 0 && currentcoords.length === 0 // Not sure I need it but...
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

      if (messageData.func === "ept" && participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_GUARDS"]) {
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

      if (messageData.func === "egt" && participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"]) {
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

      if (messageData.func === "undoturn" && messageData.sender !== participant) {
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

      if (messageData.func === "allowundo" && messageData.sender !== participant) {
        // Opponent clicked button to allow undo turn
        setAllowRewind(true);
      }

      if (messageData.func === "chat" && messageData.sender != participant) {
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

    if (newSelection > -1 && squarevalue === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
      // tile is selected from rack and clicked square is not used yet
      newRow[ci] = whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"] ? newPtiles[newSelection] : newGtiles[newSelection];
      newSquares[ri] = [...newRow];
      whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"] ? newPtiles.splice(newSelection, 1) : newGtiles.splice(newSelection, 1);
      let newUsedbyRow = [...newUsedby[ri]];
      newUsedbyRow[ci] = whoseturn;
      newUsedby[ri] = [...newUsedbyRow];

      if (whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"] && newSelection === newPtiles.length) {
        newSelection = newSelection - 1;
      }

      if (whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GUARDS"] && newSelection === newGtiles.length) {
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
      whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"] ? newPtiles.push(squarevalue) : newGtiles.push(squarevalue);
      let newRow = [...newSquares[ri]];
      newRow[ci] = _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"];
      newSquares[ri] = [...newRow];
      let newUsedbyRow = [...newUsedby[ri]];
      newUsedbyRow[ci] = usedbynoone;
      newUsedby[ri] = [...newUsedbyRow];
      setSelection(whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"] ? newPtiles.length - 1 : newGtiles.length - 1);
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


    if (squares[ri][ci] === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
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


    let newrack = participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"] ? [...ptiles] : [...gtiles];
    let movefrom = selection;
    let movetile = newrack[movefrom];
    let moveto = tileindex;
    newrack.splice(movefrom, 1); // remove tile from original selected position

    newrack.splice(moveto, 0, movetile); // insert moved tile at the newly selected position

    participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"] ? setPtiles(newrack) : setGtiles(newrack);
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
    let newWhoseturn = newPtiles.length > 0 ? _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GUARDS"] : _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GAMEOVER"];

    if (usedby[0][0] !== usedbynoone && usedby[0][middle] !== usedbynoone && usedby[0][edge] !== usedbynoone && usedby[middle][0] !== usedbynoone && usedby[middle][edge] !== usedbynoone && usedby[edge][0] !== usedbynoone && usedby[edge][middle] !== usedbynoone && usedby[edge][edge] !== usedbynoone) {
      newWhoseturn = _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GAMEOVER"]; // No escape hatches left
    }

    let playinfo = getPlayInfo();
    let newMove = {
      by: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"],
      type: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["MOVE_TYPE_PLAY"],
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
      sender: participant,
      squares: squares,
      // this was being changed as the tiles were being played
      usedby: usedby,
      // this was being changed as the tiles were being played
      ptiles: newPtiles,
      // we picked new tiles for prisoners rack
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      whoseturn: newWhoseturn,
      // may have ended the game
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
    let newWhoseturn = newGtiles.length > 0 ? _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"] : _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GAMEOVER"];

    if (usedby[0][0] !== usedbynoone && usedby[0][middle] !== usedbynoone && usedby[0][edge] !== usedbynoone && usedby[middle][0] !== usedbynoone && usedby[middle][edge] !== usedbynoone && usedby[edge][0] !== usedbynoone && usedby[edge][middle] !== usedbynoone && usedby[edge][edge] !== usedbynoone) {
      newWhoseturn = _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GAMEOVER"]; // No escape hatches left
    }

    let playinfo = getPlayInfo();
    let newMove = {
      by: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_GUARDS"],
      type: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["MOVE_TYPE_PLAY"],
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
      sender: participant,
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
      // may have ended the game
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
      by: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"],
      type: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["MOVE_TYPE_SWAP"],
      rewindInfo: rewindInfo
    };
    let newMoves = [...moves, newMove];
    putAtMoveStart();
    setSquares([...snapshot.squares]);
    setUsedby([...snapshot.usedby]);
    setWhoseturn(_lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GUARDS"]);
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
      sender: participant,
      whoseturn: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GUARDS"],
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
      by: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_GUARDS"],
      type: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["MOVE_TYPE_SWAP"],
      rewindInfo: rewindInfo
    };
    let newMoves = [...moves, newMove];
    putAtMoveStart();
    setSquares([...snapshot.squares]);
    setUsedby([...snapshot.usedby]);
    setWhoseturn(_lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"]);
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
      sender: participant,
      whoseturn: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"],
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
    if (squares[middle][middle] === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
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
      for (var tempcol = 0; tempcol < numcols; ++tempcol) {
        if (squares[r][tempcol] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
          if (!(r > 0 && squares[r - 1][tempcol] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) && !(tempcol > 0 && squares[r][tempcol - 1] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) && !(r < edge && squares[r + 1][tempcol] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) && !(tempcol < edge && squares[r][tempcol + 1] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"])) {
            window.alert("Each played tile must be part of a word");
            return false;
          }

          if (snapshot.squares[r][tempcol] === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
            // This square was played on this turn
            if (r < lowrow) {
              lowrow = r;
            }

            if (r > highrow) {
              highrow = r;
            }

            if (tempcol < lowcol) {
              lowcol = tempcol;
            }

            if (tempcol > highcol) {
              highcol = tempcol;
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
      for (var tempcol = lowcol; tempcol <= highcol; ++tempcol) {
        if (squares[r][tempcol] === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
          window.alert("There is a gap in your word");
          return false;
        }

        if (snapshot.squares[r][tempcol] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
          playthru = true;
        }

        if (lowrow === highrow && r > 0 && squares[r - 1][tempcol] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
          hookmade = true;
        }

        if (lowrow === highrow && r < edge && squares[r + 1][tempcol] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
          hookmade = true;
        }

        if (lowcol === highcol && tempcol > 0 && squares[r][tempcol - 1] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
          hookmade = true;
        }

        if (lowcol === highcol && tempcol < edge && squares[r][tempcol + 1] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
          hookmade = true;
        }
      }
    } // Check play to or from a tile (play through but not either side)


    if (lowrow === highrow && lowcol > 0 && snapshot.squares[lowrow][lowcol - 1] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
      playthru = true;
    }

    if (lowrow === highrow && highcol < edge && snapshot.squares[lowrow][highcol + 1] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
      playthru = true;
    }

    if (lowcol === highcol && lowrow > 0 && snapshot.squares[lowrow - 1][lowcol] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
      playthru = true;
    }

    if (lowcol === highcol && highrow < edge && snapshot.squares[highrow + 1][lowcol] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
      playthru = true;
    }

    if (!playthru && !hookmade && snapshot.squares[middle][middle] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["SQUARE_UNUSED"]) {
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

      while (lowestrow > 0 && squares[lowestrow - 1][col] !== c.SQUARE_UNUSED) {
        lowestrow = lowestrow - 1;
      } // find the highest row number of the main word, which may be higher than that of the last played tile


      let highestrow = highrow;

      while (highestrow < edge && squares[highestrow + 1][col] !== c.SQUARE_UNUSED) {
        highestrow = highestrow + 1;
      }

      wordstartcoord = c.BOARD_COL_HEADERS[col] + c.BOARD_ROW_HEADERS[lowestrow]; // vertical play coords start with col header

      for (var row = lowestrow; row <= highestrow; ++row) {
        mainword = mainword + squares[row][col];
        let coord = row + "-" + col;

        if (currentcoords.indexOf(coord) > -1) {
          // This tile was played, check for hooks
          let lowestcol = col;

          while (lowestcol > 0 && squares[row][lowestcol - 1] !== c.SQUARE_UNUSED) {
            lowestcol = lowestcol - 1;
          }

          let highestcol = col;

          while (highestcol < edge && squares[row][highestcol + 1] !== c.SQUARE_UNUSED) {
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

      while (lowestcol > 0 && squares[row][lowestcol - 1] !== c.SQUARE_UNUSED) {
        lowestcol = lowestcol - 1;
      } // find the highest col number of the main word, which may be higher than that of the last played tile


      let highestcol = highcol;

      while (highestcol < edge && squares[row][highestcol + 1] !== c.SQUARE_UNUSED) {
        highestcol = highestcol + 1;
      }

      wordstartcoord = c.BOARD_ROW_HEADERS[row] + c.BOARD_COL_HEADERS[lowestcol]; // horizontal play coords start with row header

      mainword = ""; // In case we got a 1 letter mainword in the previous block

      extrawords = []; // Ditto

      for (var col = lowestcol; col <= highestcol; ++col) {
        mainword = mainword + squares[row][col];
        let coord = row + "-" + col;

        if (currentcoords.indexOf(coord) > -1) {
          // This tile was played, check for hooks
          let lowestrow = row;

          while (lowestrow > 0 && squares[lowestrow - 1][col] !== c.SQUARE_UNUSED) {
            lowestrow = lowestrow - 1;
          }

          let highestrow = row;

          while (highestrow < edge && squares[highestrow + 1][col] !== c.SQUARE_UNUSED) {
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
      rack: whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GUARDS"] ? [...snapshot.gtiles] : [...snapshot.ptiles],
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
        sender: participant // who is allowing it

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
    let newPtiles = lastMove.by === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"] ? [...lastMove.rewindInfo.rack] : [...ptiles];
    let newGtiles = lastMove.by === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_GUARDS"] ? [...lastMove.rewindInfo.rack] : [...gtiles];
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
      sender: participant,
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
      by: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"],
      type: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["MOVE_TYPE_PASS"],
      rewindInfo: rewindInfo
    };
    let newMoves = [...moves, newMove];
    let newWhoseturn = isDoublePass(newMoves) ? _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GAMEOVER"] : _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GUARDS"]; // If both players pass then end the game

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
      sender: participant,
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
      by: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_GUARDS"],
      type: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["MOVE_TYPE_PASS"],
      rewindInfo: rewindInfo
    };
    let newMoves = [...moves, newMove];
    let newWhoseturn = isDoublePass(newMoves) ? _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GAMEOVER"] : _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"]; // If both players pass then end the game

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
      sender: participant,
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
    return secondlast > -1 && movelist[secondlast].type === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["MOVE_TYPE_PASS"] && movelist[last].type === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["MOVE_TYPE_PASS"];
  }

  const requestGameData = () => {
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      sender: participant,
      whoseturn: whoseturn,
      // for lobby to pick up this message
      racksize: racksize,
      // rack size option (lobby needs to know for when guards join game and they call Game)
      func: "requestgamedata" // request game data

    }));
  };

  const handleKeyDown = event => {
    event.preventDefault();

    if (participant !== whoseturn) {
      return;
    }

    if (event.key === "Enter") {
      whoseturn === c.WHOSE_TURN_PRISONERS ? endPrisonersTurn() : endGuardsTurn();
      return;
    }

    if (event.key === "Escape") {
      recallTiles();
      return;
    }

    let lettertest = /^[A-Za-z\?]$/; // single letter or question mark key pressed

    if (event.key.match(lettertest)) {
      let letter = event.key.toUpperCase();
      let rack = whoseturn === c.WHOSE_TURN_PRISONERS ? ptiles : gtiles;
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
              if (squares[row][c] === c.SQUARE_UNUSED) {
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
              if (squares[r][col] === c.SQUARE_UNUSED) {
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

      if (whoseturn === c.WHOSE_TURN_PRISONERS) {
        newPtiles.push(returnedTile);
        newSelection = newPtiles.length - 1;
      } else {
        newGtiles.push(returnedTile);
        newSelection = newGtiles.length - 1;
      }

      newUsedby[row][col] = usedbynoone;
      newSquares[row][col] = c.SQUARE_UNUSED;
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
          lineNumber: 1182,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1181,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-topleft w3-black topBarCorner commonFontFamily",
        children: ["Game id: ", gameid]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1184,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-bottomleft w3-orange topBarCorner commonFontFamily",
        children: ["Prisoners: ", participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"] ? nickname : oppname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1187,
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
              lineNumber: 1192,
              columnNumber: 18
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1192,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1191,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1190,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-bottomright w3-orange topBarCorner commonFontFamily",
        children: ["Guards: ", participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"] ? oppname : nickname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1195,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1180,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col pbTileAndMovesOuter",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_unseenTilesSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
          tiles: tiles,
          othertiles: participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"] ? gtiles : ptiles
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1201,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_movesSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
          moves: moves
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1202,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1200,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col pbPlayerOuterSection",
        children: participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_playerSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
          participant: participant,
          moves: moves,
          allowRewind: allowRewind
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1206,
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
          participant: participant,
          moves: moves,
          allowRewind: allowRewind
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1222,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1204,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: participant === whoseturn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
            lineNumber: 1242,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1241,
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
            lineNumber: 1252,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1251,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1239,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowRescues, {
          rescues: rescues
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1263,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Chat, {
          gameid: gameid,
          client: client,
          nickname: nickname,
          msgs: chatmsgs,
          setMsgs: setChatmsgs,
          participant: participant
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1264,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1262,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1199,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-display-container w3-teal topBarHeight",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-middle commonFontFamily",
        children: whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GAMEOVER"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Game Over!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1270,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: jokes[jokeindex]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1272,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1268,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1267,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1179,
    columnNumber: 7
  }, undefined);
};

_s2(Game, "4t3zxbWkpjvRmB+ngzrXHdwCuAY=", true);

_c = Game;

const ShowRescues = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pbRescuesMade",
    children: ["Rescues made: ", props.rescues]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1282,
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
  participant
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
        sender: participant,
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
            lineNumber: 1328,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            className: "pbChatMsg",
            children: value.msg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1329,
            columnNumber: 17
          }, undefined)]
        }, `ChatMessage${index}`, true, {
          fileName: _jsxFileName,
          lineNumber: 1327,
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
              lineNumber: 1334,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1333,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1332,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1325,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1324,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1323,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvZ2FtZS5qcyJdLCJuYW1lcyI6WyJtb3Zld2FpdHRpbWUiLCJqb2tlcyIsImluaXRpYWx0aWxlczQiLCJpbml0aWFsdGlsZXM1IiwiaW5pdGlhbHRpbGVzNiIsImluaXRpYWx0aWxlczciLCJ1c2VkYnlub29uZSIsIm5vZGlyZWN0aW9uIiwiR2FtZSIsImlzcmVqb2luIiwicGFydGljaXBhbnQiLCJnYW1laWQiLCJuaWNrbmFtZSIsIndzbWVzc2FnZSIsImNsaWVudCIsInJhY2tzaXplIiwibWlkZGxlIiwiZWRnZSIsImluaXRpYWx0aWxlcyIsImluaXRpYWxzcXVhcmVzIiwiQXJyYXkiLCJmaWxsIiwiYyIsImluaXRpYWx1c2VkYnkiLCJ0aWxlcyIsInNldFRpbGVzIiwidXNlU3RhdGUiLCJwdGlsZXMiLCJzZXRQdGlsZXMiLCJndGlsZXMiLCJzZXRHdGlsZXMiLCJzcXVhcmVzIiwic2V0U3F1YXJlcyIsInVzZWRieSIsInNldFVzZWRieSIsInNlbGVjdGlvbiIsInNldFNlbGVjdGlvbiIsIndob3NldHVybiIsInNldFdob3NldHVybiIsImN1cnJlbnRjb29yZHMiLCJzZXRDdXJyZW50Y29vcmRzIiwicmVzY3VlcyIsInNldFJlc2N1ZXMiLCJyY2QiLCJzZXRSY2QiLCJtb3ZlcyIsInNldE1vdmVzIiwic25hcHNob3QiLCJzZXRTbmFwc2hvdCIsImpva2VpbmRleCIsInNldEpva2VpbmRleCIsImFsbG93UmV3aW5kIiwic2V0QWxsb3dSZXdpbmQiLCJvcHBuYW1lIiwic2V0T3BwbmFtZSIsImNoYXRtc2dzIiwic2V0Q2hhdG1zZ3MiLCJwcmV2UmVzY3VlcyIsInVzZVByZXZpb3VzIiwidmFsdWUiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwibXlhdWRpbyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsInBsYXkiLCJuZXdqaSIsImxlbmd0aCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJyZXF1ZXN0R2FtZURhdGEiLCJjbGVhckludGVydmFsIiwidGVtcFBUaWxlcyIsInRlbXBHVGlsZXMiLCJ0ZW1wVGlsZXMiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHVzaCIsInNwbGljZSIsInNvcnQiLCJzZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInR5cGUiLCJmdW5jIiwic2VuZGVyIiwibXNnIiwicHJvY2Vzc0dhbWVNZXNzYWdlIiwic2Nyb2xsVG9Cb3R0b20iLCJwdXRBdE1vdmVTdGFydCIsIm1lc3NhZ2UiLCJtZXNzYWdlRGF0YSIsInBhcnNlIiwibmV3Q2hhdG1zZ3MiLCJmcm9tIiwic2VuZG1zZyIsImhhbmRsZUJvYXJkU3F1YXJlQ2xpY2siLCJyaSIsImNpIiwibmV3U2VsZWN0aW9uIiwibmV3UmNkIiwibmV3U3F1YXJlcyIsIm5ld1VzZWRieSIsIm5ld1B0aWxlcyIsIm5ld0d0aWxlcyIsIm5ld1JvdyIsInNxdWFyZXZhbHVlIiwibmV3Q3VycmVudGNvb3JkcyIsImNvb3JkIiwiU3RyaW5nIiwiY2NpIiwiaW5kZXhPZiIsIm5ld1VzZWRieVJvdyIsIm5ld0RpcmVjdGlvbiIsImhhbmRsZVJhY2tUaWxlQ2xpY2siLCJ0aWxlaW5kZXgiLCJuZXdyYWNrIiwibW92ZWZyb20iLCJtb3ZldGlsZSIsIm1vdmV0byIsImVuZFByaXNvbmVyc1R1cm4iLCJpc1BsYXlWYWxpZCIsInJld2luZEluZm8iLCJnZXRSZXdpbmRJbmZvIiwibmV3UmVzY3VlcyIsImVzY2FwZWhhdGNoZXMiLCJpIiwibmV3VGlsZXMiLCJuZXdXaG9zZXR1cm4iLCJwbGF5aW5mbyIsImdldFBsYXlJbmZvIiwibmV3TW92ZSIsImJ5IiwibWFpbndvcmQiLCJleHRyYXdvcmRzIiwicG9zIiwibmV3TW92ZXMiLCJlbmRHdWFyZHNUdXJuIiwic25hcHNxdWFyZXMiLCJzbmFwdXNlZGJ5Iiwic25hcHB0aWxlcyIsInNuYXBndGlsZXMiLCJzd2FwUHJpc29uZXJzVGlsZXMiLCJ3aW5kb3ciLCJhbGVydCIsInN3YXBHdWFyZHNUaWxlcyIsIm51bXJvd3MiLCJudW1jb2xzIiwibG93cm93IiwiaGlnaHJvdyIsImxvd2NvbCIsImhpZ2hjb2wiLCJyIiwidGVtcGNvbCIsInBsYXl0aHJ1IiwiaG9va21hZGUiLCJ3b3Jkc3RhcnRjb29yZCIsIm51bWNvb3JkcyIsInJvdyIsInBhcnNlSW50Iiwic3BsaXQiLCJjb2wiLCJsb3dlc3Ryb3ciLCJTUVVBUkVfVU5VU0VEIiwiaGlnaGVzdHJvdyIsIkJPQVJEX0NPTF9IRUFERVJTIiwiQk9BUkRfUk9XX0hFQURFUlMiLCJsb3dlc3Rjb2wiLCJoaWdoZXN0Y29sIiwiZXh0cmF3b3JkIiwicmFjayIsImFsbG93VW5kb0xhc3RUdXJuIiwicGVyZm9ybVJld2luZCIsIm51bU1vdmVzIiwibGFzdE1vdmUiLCJuZXdTbmFwc2hvdCIsInJlY2FsbFRpbGVzIiwicHJpc29uZXJQYXNzIiwiaXNEb3VibGVQYXNzIiwiZ3VhcmRzUGFzcyIsIm1vdmVsaXN0IiwibGFzdCIsInNlY29uZGxhc3QiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImtleSIsIldIT1NFX1RVUk5fUFJJU09ORVJTIiwibGV0dGVydGVzdCIsIm1hdGNoIiwibGV0dGVyIiwidG9VcHBlckNhc2UiLCJkaXIiLCJuZXdjIiwibmV3ciIsInJldHVybmVkVGlsZSIsInRpIiwiU2hvd1Jlc2N1ZXMiLCJwcm9wcyIsIkNoYXQiLCJtc2dzIiwic2V0TXNncyIsIm5leHRtc2ciLCJzZXROZXh0bXNnIiwibmV3TXNncyIsIm5ld05leHRtc2ciLCJzbGljZSIsIm1hcCIsImluZGV4IiwiZSIsInRhcmdldCIsImVsZW1lbnRpZCIsInRoZUVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEs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QUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBeUJELENBM0REOztJQUFNZ0IsSTs7TUFBQUEsSTs7QUE2RE4sTUFBTS9HLGNBQWMsR0FBSTJILFNBQUQsSUFBZTtBQUNwQyxRQUFNQyxVQUFVLEdBQUd4SixRQUFRLENBQUN5SixjQUFULENBQXdCRixTQUF4QixDQUFuQjtBQUNBQyxZQUFVLENBQUNFLFNBQVgsR0FBdUJGLFVBQVUsQ0FBQ0csWUFBbEM7QUFDRCxDQUhEOztBQUtlcE4sbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGIvcHJpc29uYnJlYWsuNTRhMzA3NzgzY2QzZjI0OTM1Y2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUGxheWVyU2VjdGlvbiBmcm9tICcuLi9wYi9wbGF5ZXJTZWN0aW9uJztcclxuaW1wb3J0IEJvYXJkIGZyb20gJy4uL3BiL2JvYXJkJztcclxuaW1wb3J0IFNob3dVbnNlZW5UaWxlcyBmcm9tICcuLi9wYi91bnNlZW5UaWxlc1NlY3Rpb24nO1xyXG5pbXBvcnQgU2hvd01vdmVzIGZyb20gJy4uL3BiL21vdmVzU2VjdGlvbic7XHJcbmltcG9ydCAqIGFzIGMgZnJvbSAnLi4vLi4vbGliL3BiY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IG1vdmV3YWl0dGltZSA9IDIwMDAwOyAvLyB3aGVuIHdhaXRpbmcgZm9yIG9wcG9uZW50IHBpbmcgZXZlcnkgdGhpcyBtYW55IG1pbGxpc2Vjb25kc1xyXG5jb25zdCBqb2tlcyA9IFtcclxuICAnRXNjYXBlZTogXCJJJyArIFwiJ20gZnJlZSEgSSdtIGZyZWUhXCIgKyAnXCIuIExpdHRsZSBraWQ6IFwiSScrIFwiJ20gZm91ciEgSSdtIGZvdXIhXCIgKyAnXCInLFxyXG4gICdUd28gcGVhbnV0cyB3ZXJlIHdhbGtpbmcgZG93biBhIGJhY2sgYWxsZXkuIE9uZSB3YXMgYSBzYWx0ZWQuJyxcclxuICBcIlRoZSBwc3ljaGljIGR3YXJmIGVzY2FwZWQhIFRoZXJlJ3MgYSBzbWFsbCBtZWRpdW0gYXQgbGFyZ2UhXCIsXHJcbiAgJ1doYXQgZG8geW91IGNhbGwgYSB2ZWdldGFibGUgd2hvIGhhcyBlc2NhcGVkIHByaXNvbj8gQW4gZXNjYXBlYSEnLFxyXG4gIFwiVGhlIHByaXNvbmVycyBmYXZlIHB1bmN0dWF0aW9uIGlzIGEgcGVyaW9kLiBJdCBtYXJrcyB0aGUgZW5kIG9mIGEgc2VudGVuY2UhXCIsXHJcbiAgXCJQcmlzb24gaXMgb25seSBvbmUgd29yZCwgYnV0IHRvIHJvYmJlcnMgaXQncyBhIHdob2xlIHNlbnRlbmNlLlwiXHJcbl07XHJcbmNvbnN0IGluaXRpYWx0aWxlczQgPSBbXHJcbiAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLFxyXG4gIFwiQlwiLFxyXG4gIFwiQ1wiLFxyXG4gIFwiRFwiLFxyXG4gIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLFxyXG4gIFwiRlwiLFxyXG4gIFwiR1wiLFxyXG4gIFwiSFwiLFxyXG4gIFwiSVwiLCAgXCJJXCIsICBcIklcIixcclxuICBcIkpcIixcclxuICBcIktcIixcclxuICBcIkxcIixcclxuICBcIk1cIixcclxuICBcIk5cIiwgIFwiTlwiLFxyXG4gIFwiT1wiLCAgXCJPXCIsICBcIk9cIixcclxuICBcIlBcIixcclxuICBcIlFcIixcclxuICBcIlJcIiwgIFwiUlwiLFxyXG4gIFwiU1wiLFxyXG4gIFwiVFwiLCAgXCJUXCIsXHJcbiAgXCJVXCIsXHJcbiAgXCJWXCIsXHJcbiAgXCJXXCIsXHJcbiAgXCJYXCIsXHJcbiAgXCJZXCIsXHJcbiAgXCJaXCIsXHJcbiAgXCI/XCIsICBcIj9cIixcclxuXTsgLy8gaW5pdGlhbCB0aWxlIHBvb2wgZm9yIDQgbGV0dGVyIHJhY2sgbW9kZVxyXG5jb25zdCBpbml0aWFsdGlsZXM1ID0gW1xyXG4gIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsXHJcbiAgXCJCXCIsXHJcbiAgXCJDXCIsXHJcbiAgXCJEXCIsICBcIkRcIixcclxuICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsXHJcbiAgXCJGXCIsXHJcbiAgXCJHXCIsXHJcbiAgXCJIXCIsXHJcbiAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIixcclxuICBcIkpcIixcclxuICBcIktcIixcclxuICBcIkxcIiwgIFwiTFwiLFxyXG4gIFwiTVwiLFxyXG4gIFwiTlwiLCAgXCJOXCIsICBcIk5cIixcclxuICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIixcclxuICBcIlBcIixcclxuICBcIlFcIixcclxuICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsXHJcbiAgXCJTXCIsICBcIlNcIixcclxuICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsXHJcbiAgXCJVXCIsXHJcbiAgXCJWXCIsXHJcbiAgXCJXXCIsXHJcbiAgXCJYXCIsXHJcbiAgXCJZXCIsXHJcbiAgXCJaXCIsXHJcbiAgXCI/XCIsICBcIj9cIixcclxuXTsgLy8gaW5pdGlhbCB0aWxlIHBvb2wgZm9yIDUgbGV0dGVyIHJhY2sgbW9kZVxyXG5jb25zdCBpbml0aWFsdGlsZXM2ID0gW1xyXG4gIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLFxyXG4gIFwiQlwiLCAgXCJCXCIsXHJcbiAgXCJDXCIsICBcIkNcIixcclxuICBcIkRcIiwgIFwiRFwiLCAgXCJEXCIsXHJcbiAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLFxyXG4gIFwiRlwiLFxyXG4gIFwiR1wiLCAgXCJHXCIsXHJcbiAgXCJIXCIsICBcIkhcIixcclxuICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIixcclxuICBcIkpcIixcclxuICBcIktcIixcclxuICBcIkxcIiwgIFwiTFwiLCAgXCJMXCIsXHJcbiAgXCJNXCIsICBcIk1cIixcclxuICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsICBcIk5cIixcclxuICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsXHJcbiAgXCJQXCIsICBcIlBcIixcclxuICBcIlFcIixcclxuICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLFxyXG4gIFwiU1wiLCAgXCJTXCIsICBcIlNcIixcclxuICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsICBcIlRcIixcclxuICBcIlVcIiwgIFwiVVwiLCAgXCJVXCIsXHJcbiAgXCJWXCIsXHJcbiAgXCJXXCIsXHJcbiAgXCJYXCIsXHJcbiAgXCJZXCIsXHJcbiAgXCJaXCIsXHJcbiAgXCI/XCIsICBcIj9cIixcclxuXTsgLy8gaW5pdGlhbCB0aWxlIHBvb2wgZm9yIDYgbGV0dGVyIHJhY2sgbW9kZVxyXG5jb25zdCBpbml0aWFsdGlsZXM3ID0gW1xyXG4gIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIixcclxuICBcIkJcIiwgIFwiQlwiLFxyXG4gIFwiQ1wiLCAgXCJDXCIsXHJcbiAgXCJEXCIsICBcIkRcIiwgIFwiRFwiLCAgXCJEXCIsXHJcbiAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLFxyXG4gIFwiRlwiLCAgXCJGXCIsXHJcbiAgXCJHXCIsICBcIkdcIiwgIFwiR1wiLFxyXG4gIFwiSFwiLCAgXCJIXCIsXHJcbiAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLFxyXG4gIFwiSlwiLFxyXG4gIFwiS1wiLFxyXG4gIFwiTFwiLCAgXCJMXCIsICBcIkxcIiwgIFwiTFwiLFxyXG4gIFwiTVwiLCAgXCJNXCIsXHJcbiAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLFxyXG4gIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsXHJcbiAgXCJQXCIsICBcIlBcIixcclxuICBcIlFcIixcclxuICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsXHJcbiAgXCJTXCIsICBcIlNcIiwgIFwiU1wiLCAgXCJTXCIsXHJcbiAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLFxyXG4gIFwiVVwiLCAgXCJVXCIsICBcIlVcIiwgIFwiVVwiLFxyXG4gIFwiVlwiLCAgXCJWXCIsXHJcbiAgXCJXXCIsICBcIldcIixcclxuICBcIlhcIixcclxuICBcIllcIiwgIFwiWVwiLFxyXG4gIFwiWlwiLFxyXG4gIFwiP1wiLCAgXCI/XCIsXHJcbl07IC8vIGluaXRpYWwgdGlsZSBwb29sIGZvciA3IGxldHRlciByYWNrIG1vZGVcclxuY29uc3QgdXNlZGJ5bm9vbmUgPSBcIlwiO1xyXG5jb25zdCBub2RpcmVjdGlvbiA9IFwiXCI7XHJcblxyXG5cclxuY29uc3QgR2FtZSA9ICh7aXNyZWpvaW5cclxuICAgICwgcGFydGljaXBhbnQgLy8gUHJpc29uZXJzLCBHdWFyZHMsIG9yIE9ic2VydmVyXHJcbiAgICAsIGdhbWVpZFxyXG4gICAgLCBuaWNrbmFtZVxyXG4gICAgLCB3c21lc3NhZ2VcclxuICAgICwgY2xpZW50XHJcbiAgICAsIHJhY2tzaXplPTQgLy8gT3B0aW9uIGZvciByYWNrIHNpemUgKGdpdmUgaXQgYSBkZWZhdWx0IGZvciBCdWlsZClcclxuICAgIH0pID0+IHtcclxuICAgIGNvbnN0IG1pZGRsZSA9IHJhY2tzaXplOyAvLyBNaWRkbGUgZWxlbWVudCBpbiByb3cgb3IgY29sdW1uIGFycmF5XHJcbiAgICBjb25zdCBlZGdlID0gcmFja3NpemUgKiAyOyAvLyBMYXN0IGVsZW1lbnQgaW4gcm93IG9yIGNvbHVtbiBhcnJheVxyXG4gICAgY29uc3QgaW5pdGlhbHRpbGVzID0gcmFja3NpemUgPT09IDYgPyBpbml0aWFsdGlsZXM2IDogcmFja3NpemUgPT09IDcgPyBpbml0aWFsdGlsZXM3IDogcmFja3NpemUgPT09IDUgPyBpbml0aWFsdGlsZXM1IDogaW5pdGlhbHRpbGVzNDtcclxuICAgIGNvbnN0IGluaXRpYWxzcXVhcmVzID0gQXJyYXkoZWRnZSsxKS5maWxsKEFycmF5KGVkZ2UrMSkuZmlsbChjLlNRVUFSRV9VTlVTRUQpKTtcclxuICAgIGNvbnN0IGluaXRpYWx1c2VkYnkgPSBBcnJheShlZGdlKzEpLmZpbGwoQXJyYXkoZWRnZSsxKS5maWxsKHVzZWRieW5vb25lKSk7XHJcbiAgICBjb25zdCBbdGlsZXMsIHNldFRpbGVzXSA9IHVzZVN0YXRlKFsuLi5pbml0aWFsdGlsZXNdKTtcclxuICAgIGNvbnN0IFtwdGlsZXMsIHNldFB0aWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZ3RpbGVzLCBzZXRHdGlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NxdWFyZXMsIHNldFNxdWFyZXNdID0gdXNlU3RhdGUoWy4uLmluaXRpYWxzcXVhcmVzXSk7XHJcbiAgICBjb25zdCBbdXNlZGJ5LCBzZXRVc2VkYnldID0gdXNlU3RhdGUoWy4uLmluaXRpYWx1c2VkYnldKTtcclxuICAgIGNvbnN0IFtzZWxlY3Rpb24sIHNldFNlbGVjdGlvbl0gPSB1c2VTdGF0ZSgtMSk7IC8vIHJlbGF0aXZlIHRvIHJhY2sgb2YgcGxheWVyIG1ha2luZyBhIHBsYXlcclxuICAgIGNvbnN0IFt3aG9zZXR1cm4sIHNldFdob3NldHVybl0gPSB1c2VTdGF0ZShjLldIT1NFX1RVUk5fUFJJU09ORVJTKTsgLy8gZ2FtZSBzdGFydHMgd2l0aCBwcmlzb25lcnMgcGxheVxyXG4gICAgY29uc3QgW2N1cnJlbnRjb29yZHMsIHNldEN1cnJlbnRjb29yZHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3Jlc2N1ZXMsIHNldFJlc2N1ZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcmNkLCBzZXRSY2RdID0gdXNlU3RhdGUoWy0xLC0xLG5vZGlyZWN0aW9uXSk7XHJcbiAgICBjb25zdCBbbW92ZXMsIHNldE1vdmVzXSA9IHVzZVN0YXRlKFtdKTsgLy8gbW92ZSBoaXN0b3J5LCBlYWNoIGVsZW1lbnQgaXMgdGhlIGFycmF5IGlzIGEganNvbiBvYmplY3Qgb2YgaW5mbyBhYm91dCB0aGUgbW92ZVxyXG4gICAgY29uc3QgW3NuYXBzaG90LCBzZXRTbmFwc2hvdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgIHNxdWFyZXM6IFsuLi5pbml0aWFsc3F1YXJlc10sXHJcbiAgICAgIHVzZWRieTogWy4uLmluaXRpYWx1c2VkYnldLFxyXG4gICAgICBwdGlsZXM6IFtdLFxyXG4gICAgICBndGlsZXM6IFtdLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbam9rZWluZGV4LCBzZXRKb2tlaW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbYWxsb3dSZXdpbmQsIHNldEFsbG93UmV3aW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtvcHBuYW1lLCBzZXRPcHBuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtjaGF0bXNncywgc2V0Q2hhdG1zZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgLy8gY29uc3QgcmVzY3VlU291bmQgPSBuZXcgQXVkaW8oXCJodHRwczovL3RpbGVydW5uZXIuZ2l0aHViLmlvL3lpcHBlZS5tNGFcIik7IC8vIEkgY291bGRuJ3QgZ2V0IHRoZSBzeW50YXggcmlnaHQgdG8gcmVhZCBpdCBmcm9tIHBiIGZvbGRlclxyXG4gICAgY29uc3QgcHJldlJlc2N1ZXMgPSB1c2VQcmV2aW91cyhyZXNjdWVzKTtcclxuICAgIGZ1bmN0aW9uIHVzZVByZXZpb3VzKHZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xyXG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVmLmN1cnJlbnQ7XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAocmVzY3VlcyA+IHByZXZSZXNjdWVzKSB7XHJcbiAgICAgICAgICB2YXIgbXlhdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcbiAgICAgICAgICBteWF1ZGlvLnNyYyA9IFwiaHR0cHM6Ly90aWxlcnVubmVyLmdpdGh1Yi5pby95aXBwZWUubTRhXCI7XHJcbiAgICAgICAgICBteWF1ZGlvLnBsYXkoKTtcclxuICAgICAgICAvLyByZXNjdWVTb3VuZC5wbGF5KClcclxuICAgICAgfVxyXG4gICAgfSwgW3Jlc2N1ZXNdKTsgLy8gUGxheSBhIHNvdW5kIHdoZW4gYSByZXNjdWUgaXMgbWFkZVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgbGV0IG5ld2ppID0gam9rZWluZGV4ICsgMTtcclxuICAgICAgaWYgKG5ld2ppID49IGpva2VzLmxlbmd0aCkge1xyXG4gICAgICAgIG5ld2ppID0gMDtcclxuICAgICAgfVxyXG4gICAgICBzZXRKb2tlaW5kZXgobmV3amkpO1xyXG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAvLyBJZiBpdCBpcyBub3QgbXkgdHVybiAmJiB0aGUgZ2FtZSBoYXMgbm90IGVuZGVkXHJcbiAgICAgICAgaWYgKHBhcnRpY2lwYW50ICE9PSB3aG9zZXR1cm4gJiYgd2hvc2V0dXJuICE9PSBjLldIT1NFX1RVUk5fR0FNRU9WRVIpIHtcclxuICAgICAgICAgIC8vIEkgYW0gd2FpdGluZyBmb3Igb3Bwb25lbnQgbW92ZSB0byBjb21lIHRocm91Z2ggYnV0IHNvbWV0aW1lcyBpdCBnZXRzIG1pc3NlZCAobm8gaWRlYSB3aHkpXHJcbiAgICAgICAgICByZXF1ZXN0R2FtZURhdGEoKTsgLy8gU2VuZCBhIHJlcXVlc3QgZm9yIGdhbWUgZGF0YSBpbiBjYXNlIG9wcG9uZW50IG1vdmVkIGFuZCB3ZSBtaXNzZWQgdGhlIHVwZGF0ZVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgbW92ZXdhaXR0aW1lKTsgLy8gdGhpcyBtYW55IG1pbGxpc2Vjb25kcyBiZXR3ZWVuIGFib3ZlIGNvZGUgYmxvY2sgZXhlY3V0aW9uc1xyXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9LCBbd2hvc2V0dXJuXSk7IC8vIHdhbnQgdXAgdG8gZGF0ZSB2YWx1ZSBvZiB3aG9zZXR1cm4gdG8gZGVjaWRlIHdoZXRoZXIgdG8gYXNrIGZvciBhbiB1cGRhdGVcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IC8vIFRoaXMgY29kZSBleGVjdXRlcyBmaXJzdCB0aW1lIEdhbWUgaXMgdXNlZCBvbmx5XHJcbiAgICAgIGlmICghaXNyZWpvaW4gJiYgcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMpIHsgLy8gUHJpc29uZXIgaXMgc3RhcnRpbmcgdGhlIGdhbWUgc28gcGljayByYWNrc1xyXG4gICAgICAgIGxldCB0ZW1wUFRpbGVzID0gW107XHJcbiAgICAgICAgbGV0IHRlbXBHVGlsZXMgPSBbXTtcclxuICAgICAgICBsZXQgdGVtcFRpbGVzID0gWy4uLmluaXRpYWx0aWxlc107XHJcbiAgICAgICAgd2hpbGUgKHRlbXBQVGlsZXMubGVuZ3RoIDwgcmFja3NpemUpIHtcclxuICAgICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVtcFRpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgICB0ZW1wUFRpbGVzLnB1c2godGVtcFRpbGVzW3JhbmRdKTtcclxuICAgICAgICAgIHRlbXBUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgICAgICByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVtcFRpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgICB0ZW1wR1RpbGVzLnB1c2godGVtcFRpbGVzW3JhbmRdKTtcclxuICAgICAgICAgIHRlbXBUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRlbXBQVGlsZXMuc29ydCgpO1xyXG4gICAgICAgIHRlbXBHVGlsZXMuc29ydCgpO1xyXG4gICAgICAgIHNldEd0aWxlcyh0ZW1wR1RpbGVzKTtcclxuICAgICAgICBzZXRQdGlsZXModGVtcFBUaWxlcyk7XHJcbiAgICAgICAgc2V0VGlsZXModGVtcFRpbGVzKTtcclxuICAgICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgICBzcXVhcmVzOiBbLi4uaW5pdGlhbHNxdWFyZXNdLFxyXG4gICAgICAgICAgdXNlZGJ5OiBbLi4uaW5pdGlhbHVzZWRieV0sXHJcbiAgICAgICAgICBwdGlsZXM6IFsuLi50ZW1wUFRpbGVzXSxcclxuICAgICAgICAgIGd0aWxlczogWy4uLnRlbXBHVGlsZXNdICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICB0eXBlOiBcInBiXCIsXHJcbiAgICAgICAgICAgIGZ1bmM6IFwiaGVsbG9cIixcclxuICAgICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgICAgZ2FtZWlkOiBnYW1laWQsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICAgIHdob3NldHVybjogd2hvc2V0dXJuLFxyXG4gICAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICAvLyBQcmlzb25lciByZWpvaW4gb3IgZ3VhcmQgam9pbiBvciBndWFyZCByZWpvaW5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgICAgIGZ1bmM6IFwicmVxdWVzdGdhbWVkYXRhXCIsIC8vIHJlcXVlc3QgZ2FtZSBkYXRhXHJcbiAgICAgICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudFxyXG4gICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCB7fVxyXG4gICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBsZXQgbXNnID0gd3NtZXNzYWdlO1xyXG4gICAgICBpZiAobXNnICE9PSAnJykgcHJvY2Vzc0dhbWVNZXNzYWdlKG1zZyk7ICAgICAgXHJcbiAgICB9LFt3c21lc3NhZ2VdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2Nyb2xsVG9Cb3R0b20oXCJTY3JvbGxhYmxlTW92ZXNcIik7XHJcbiAgICB9LFttb3Zlc10pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzY3JvbGxUb0JvdHRvbShcIlNjcm9sbGFibGVDaGF0XCIpO1xyXG4gICAgfSxbY2hhdG1zZ3NdKVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gcHV0QXRNb3ZlU3RhcnQoKSB7XHJcbiAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICAgIHNldEFsbG93UmV3aW5kKGZhbHNlKTtcclxuICAgICAgc2V0UmNkKC0xLC0xLG5vZGlyZWN0aW9uKTtcclxuICAgICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBwcm9jZXNzR2FtZU1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgICBpZiAobWVzc2FnZURhdGEudHlwZSA9PT0gXCJhbm5vdW5jZVwiKSB7XHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwicGJcIixcclxuICAgICAgICAgICAgZnVuYzogXCJoZWxsb1wiLFxyXG4gICAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LFxyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgICAgd2hvc2V0dXJuOiB3aG9zZXR1cm4sXHJcbiAgICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKG1lc3NhZ2VEYXRhLmdhbWVpZCA9PT0gZ2FtZWlkICYmIG1lc3NhZ2VEYXRhLnR5cGUgPT09IFwicGJcIikgeyAvLyBUaGlzIGluc3RhbmNlIG9mIGEgcHJpc29uIGJyZWFrIGdhbWVcclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuc2VuZGVyICE9IHBhcnRpY2lwYW50ICYmIG9wcG5hbWUgPT09IFwiXCIgJiYgbWVzc2FnZURhdGEubmlja25hbWUgJiYgbWVzc2FnZURhdGEubmlja25hbWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgLy8gT3Bwb25lbnQgc2VudCBhIG1lc3NhZ2UgaW5jbHVkaW5nIHRoZWlyIG5pY2tuYW1lIGFuZCBJIGRvbid0IGhhdmUgdGhlaXIgbmlja25hbWUgeWV0XHJcbiAgICAgICAgICBzZXRPcHBuYW1lKG1lc3NhZ2VEYXRhLm5pY2tuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwicmVxdWVzdGdhbWVkYXRhXCIgJiYgbWVzc2FnZURhdGEuc2VuZGVyICE9PSBwYXJ0aWNpcGFudCkgeyAvLyBPcHBvbmVudCByZXF1ZXN0ZWQgZ2FtZSBpbmZvXHJcbiAgICAgICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICAgICAgZnVuYzogXCJwcm92aWRlZ2FtZWRhdGFcIiwgLy8gcHJvdmlkZSBnYW1lIGRhdGFcclxuICAgICAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LFxyXG4gICAgICAgICAgICAgIHRpbGVzOiB0aWxlcyxcclxuICAgICAgICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLFxyXG4gICAgICAgICAgICAgIHB0aWxlczogcHRpbGVzLFxyXG4gICAgICAgICAgICAgIGd0aWxlczogZ3RpbGVzLFxyXG4gICAgICAgICAgICAgIHVzZWRieTogdXNlZGJ5LFxyXG4gICAgICAgICAgICAgIHdob3NldHVybjogd2hvc2V0dXJuLFxyXG4gICAgICAgICAgICAgIHNuYXBzaG90OiBzbmFwc2hvdCxcclxuICAgICAgICAgICAgICBtb3ZlczogbW92ZXMsXHJcbiAgICAgICAgICAgICAgcmVzY3VlczogcmVzY3VlcyxcclxuICAgICAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgICAgICAgYWxsb3dSZXdpbmQ6IGFsbG93UmV3aW5kXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJwcm92aWRlZ2FtZWRhdGFcIiAmJiBtZXNzYWdlRGF0YS5zZW5kZXIgIT09IHBhcnRpY2lwYW50KSB7IFxyXG4gICAgICAgICAgLy8gT3Bwb25lbnQgcHJvdmlkZWQgZ2FtZSBkYXRhIGJ1dCBkbyB3ZSBuZWVkIGl0P1xyXG4gICAgICAgICAgLy8gSWYgdGhleSBoYXZlIGEgZGlmZmVyZW50IG1vdmUgY291bnQgdGhlbiB3ZSBuZWVkIGl0ICh0aGV5IG1heSBoYXZlIHVuZG9uZSBhIG1vdmUpXHJcbiAgICAgICAgICAvLyBJZiB0aGV5IGhhdmUgc2FtZSBtb3ZlIGNvdW50IGJ1dCBhIGRpZmZlcmVudCB0aWxlIGJhZyBjb3VudCB0aGVuIHdlIG5lZWQgaXQgKG5vIG1vdmVzIG1hZGUgYnV0IHRpbGVzIGFyZSBwaWNrZWQpXHJcbiAgICAgICAgICAvLyBJZiBndWFyZHMgam9pbiBhZnRlciBwcmlzb25lcnMgbWFkZSBhIG1vdmUgdGhlbiBndWFyZHMgaGF2ZSBubyB0aWxlcyAoXCJlcHRcIiBnb3QgcHJvY2Vzc2VkIHdoaWNoIGxlYXZlcyBndGlsZXMgYWxvbmUpXHJcbiAgICAgICAgICBpZiAobWVzc2FnZURhdGEubW92ZXMubGVuZ3RoICE9PSBtb3Zlcy5sZW5ndGhcclxuICAgICAgICAgICAgIHx8IG1lc3NhZ2VEYXRhLnRpbGVzLmxlbmd0aCAhPT0gdGlsZXMubGVuZ3RoXHJcbiAgICAgICAgICAgICB8fCAocGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMgJiYgZ3RpbGVzLmxlbmd0aCA9PT0gMCAmJiBjdXJyZW50Y29vcmRzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgIHx8IChwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyAmJiBwdGlsZXMubGVuZ3RoID09PSAwICYmIGN1cnJlbnRjb29yZHMubGVuZ3RoID09PSAwKSAvLyBOb3Qgc3VyZSBJIG5lZWQgaXQgYnV0Li4uXHJcbiAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgc2V0VGlsZXMobWVzc2FnZURhdGEudGlsZXMpO1xyXG4gICAgICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgICAgICBzZXRQdGlsZXMobWVzc2FnZURhdGEucHRpbGVzKTtcclxuICAgICAgICAgICAgc2V0R3RpbGVzKG1lc3NhZ2VEYXRhLmd0aWxlcyk7XHJcbiAgICAgICAgICAgIHNldFVzZWRieShtZXNzYWdlRGF0YS51c2VkYnkpO1xyXG4gICAgICAgICAgICBzZXRXaG9zZXR1cm4obWVzc2FnZURhdGEud2hvc2V0dXJuKTtcclxuICAgICAgICAgICAgc2V0U25hcHNob3QobWVzc2FnZURhdGEuc25hcHNob3QpO1xyXG4gICAgICAgICAgICBzZXRNb3ZlcyhtZXNzYWdlRGF0YS5tb3Zlcyk7XHJcbiAgICAgICAgICAgIHNldFJlc2N1ZXMobWVzc2FnZURhdGEucmVzY3Vlcyk7XHJcbiAgICAgICAgICAgIHNldEFsbG93UmV3aW5kKG1lc3NhZ2VEYXRhLmFsbG93UmV3aW5kKTsgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJlcHRcIiAmJiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUykgeyAvLyBQcmlzb25lcnMgc2VudCBlbmQgcHJpc29uZXJzIHR1cm4sIEd1YXJkcyBwaWNrIGl0IHVwXHJcbiAgICAgICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICAgICAgc2V0V2hvc2V0dXJuKG1lc3NhZ2VEYXRhLndob3NldHVybik7XHJcbiAgICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgICAgc2V0VXNlZGJ5KG1lc3NhZ2VEYXRhLnVzZWRieSk7XHJcbiAgICAgICAgICBzZXRQdGlsZXMobWVzc2FnZURhdGEucHRpbGVzKTtcclxuICAgICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICAgIHNldE1vdmVzKG1lc3NhZ2VEYXRhLm1vdmVzKTtcclxuICAgICAgICAgIHNldFJlc2N1ZXMobWVzc2FnZURhdGEucmVzY3Vlcyk7XHJcbiAgICAgICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgICAgIHNxdWFyZXM6IFsuLi5tZXNzYWdlRGF0YS5zcXVhcmVzXSxcclxuICAgICAgICAgICAgdXNlZGJ5OiBbLi4ubWVzc2FnZURhdGEudXNlZGJ5XSxcclxuICAgICAgICAgICAgcHRpbGVzOiBbLi4ubWVzc2FnZURhdGEucHRpbGVzXSxcclxuICAgICAgICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJlZ3RcIiAmJiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUykgeyAvLyBHdWFyZHMgc2VudCBlbmQgZ3VhcmRzIHR1cm4sIFByaXNvbmVycyBwaWNrIGl0IHVwXHJcbiAgICAgICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICAgICAgc2V0V2hvc2V0dXJuKG1lc3NhZ2VEYXRhLndob3NldHVybik7XHJcbiAgICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgICAgc2V0VXNlZGJ5KG1lc3NhZ2VEYXRhLnVzZWRieSk7XHJcbiAgICAgICAgICBzZXRHdGlsZXMobWVzc2FnZURhdGEuZ3RpbGVzKTtcclxuICAgICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICAgIHNldE1vdmVzKG1lc3NhZ2VEYXRhLm1vdmVzKTtcclxuICAgICAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICAgICAgc3F1YXJlczogWy4uLm1lc3NhZ2VEYXRhLnNxdWFyZXNdLFxyXG4gICAgICAgICAgICB1c2VkYnk6IFsuLi5tZXNzYWdlRGF0YS51c2VkYnldLFxyXG4gICAgICAgICAgICBwdGlsZXM6IFsuLi5wdGlsZXNdLFxyXG4gICAgICAgICAgICBndGlsZXM6IFsuLi5tZXNzYWdlRGF0YS5ndGlsZXNdLFxyXG4gICAgICAgICAgfSk7ICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJ1bmRvdHVyblwiICYmIG1lc3NhZ2VEYXRhLnNlbmRlciAhPT0gcGFydGljaXBhbnQpIHsgXHJcbiAgICAgICAgICAvLyBvcHBvbmVudCB1bmRpZCB0aGVpciBsYXN0IHR1cm5cclxuICAgICAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgICBzZXRQdGlsZXMobWVzc2FnZURhdGEucHRpbGVzKTtcclxuICAgICAgICAgIHNldEd0aWxlcyhtZXNzYWdlRGF0YS5ndGlsZXMpO1xyXG4gICAgICAgICAgc2V0U3F1YXJlcyhtZXNzYWdlRGF0YS5zcXVhcmVzKTtcclxuICAgICAgICAgIHNldFVzZWRieShtZXNzYWdlRGF0YS51c2VkYnkpO1xyXG4gICAgICAgICAgc2V0V2hvc2V0dXJuKG1lc3NhZ2VEYXRhLndob3NldHVybik7XHJcbiAgICAgICAgICBzZXRSZXNjdWVzKG1lc3NhZ2VEYXRhLnJlc2N1ZXMpO1xyXG4gICAgICAgICAgc2V0TW92ZXMobWVzc2FnZURhdGEubW92ZXMpO1xyXG4gICAgICAgICAgc2V0U25hcHNob3QobWVzc2FnZURhdGEuc25hcHNob3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJhbGxvd3VuZG9cIiAmJiBtZXNzYWdlRGF0YS5zZW5kZXIgIT09IHBhcnRpY2lwYW50KSB7XHJcbiAgICAgICAgICAvLyBPcHBvbmVudCBjbGlja2VkIGJ1dHRvbiB0byBhbGxvdyB1bmRvIHR1cm5cclxuICAgICAgICAgIHNldEFsbG93UmV3aW5kKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJjaGF0XCIgJiYgbWVzc2FnZURhdGEuc2VuZGVyICE9IHBhcnRpY2lwYW50KSB7IC8vIE9wcG9uZW50IGNoYXQgbWVzc2FnZVxyXG4gICAgICAgICAgbGV0IG5ld0NoYXRtc2dzID0gWy4uLmNoYXRtc2dzLCB7ZnJvbTogbWVzc2FnZURhdGEubmlja25hbWUsIG1zZzogbWVzc2FnZURhdGEuc2VuZG1zZ31dO1xyXG4gICAgICAgICAgc2V0Q2hhdG1zZ3MobmV3Q2hhdG1zZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBDYWxsaW5nIHNldFNlbGVjdGlvbiAoZnJvbSBoYW5kbGVLZXlEb3duKSB0aGVuIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2sgZG9lcyBub3QgbGV0IGl0IHJlY29nbml6ZSBzZWxlY3Rpb24gd2l0aCB0aGUgbmV3IHZhbHVlXHJcbiAgICAvLyBTbyBJIHBhc3MgbmV3U2VsZWN0aW9uIHdoZW4gSSB3YW50IHRvIGFsc28gc2V0IGl0LCBvdGhlcndpc2UgSSBwYXNzIC0xIHRvIGluc3RydWN0IGl0IHRvIHVzZSBjdXJyZW50IHZhbHVlIG9mIHNlbGVjdGlvblxyXG4gICAgLy8gQWxzbyBwYXNzaW5nIG5ld1JjZFxyXG4gICAgY29uc3QgaGFuZGxlQm9hcmRTcXVhcmVDbGljayA9IChyaSwgY2ksIG5ld1NlbGVjdGlvbiwgbmV3UmNkKSA9PiB7XHJcbiAgICAgIGxldCBuZXdTcXVhcmVzID0gWy4uLnNxdWFyZXNdO1xyXG4gICAgICBsZXQgbmV3VXNlZGJ5ID0gWy4uLnVzZWRieV07XHJcbiAgICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgICBsZXQgbmV3Um93ID0gWy4uLnNxdWFyZXNbcmldXTtcclxuICAgICAgbGV0IHNxdWFyZXZhbHVlID0gc3F1YXJlc1tyaV1bY2ldO1xyXG4gICAgICBsZXQgbmV3Q3VycmVudGNvb3JkcyA9IFsuLi5jdXJyZW50Y29vcmRzXTtcclxuICAgICAgbGV0IGNvb3JkID0gU3RyaW5nKHJpKSArIFwiLVwiICsgU3RyaW5nKGNpKTtcclxuICAgICAgbGV0IGNjaSA9IGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCk7XHJcbiAgICAgIGlmIChuZXdTZWxlY3Rpb24gPT09IC0xKSB7XHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gc2VsZWN0aW9uO1xyXG4gICAgICAgIG5ld1JjZCA9IHJjZDtcclxuICAgICAgfVxyXG4gICAgICBpZiAobmV3U2VsZWN0aW9uID4gLTEgJiYgc3F1YXJldmFsdWUgPT09IGMuU1FVQVJFX1VOVVNFRCkgeyAvLyB0aWxlIGlzIHNlbGVjdGVkIGZyb20gcmFjayBhbmQgY2xpY2tlZCBzcXVhcmUgaXMgbm90IHVzZWQgeWV0XHJcbiAgICAgICAgbmV3Um93W2NpXSA9XHJcbiAgICAgICAgICB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMgPyBuZXdQdGlsZXNbbmV3U2VsZWN0aW9uXSA6IG5ld0d0aWxlc1tuZXdTZWxlY3Rpb25dO1xyXG4gICAgICAgIG5ld1NxdWFyZXNbcmldID0gWy4uLm5ld1Jvd107XHJcbiAgICAgICAgd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTXHJcbiAgICAgICAgICA/IG5ld1B0aWxlcy5zcGxpY2UobmV3U2VsZWN0aW9uLCAxKVxyXG4gICAgICAgICAgOiBuZXdHdGlsZXMuc3BsaWNlKG5ld1NlbGVjdGlvbiwgMSk7XHJcbiAgICAgICAgbGV0IG5ld1VzZWRieVJvdyA9IFsuLi5uZXdVc2VkYnlbcmldXTtcclxuICAgICAgICBuZXdVc2VkYnlSb3dbY2ldID0gd2hvc2V0dXJuO1xyXG4gICAgICAgIG5ld1VzZWRieVtyaV0gPSBbLi4ubmV3VXNlZGJ5Um93XTtcclxuICAgICAgICBpZiAod2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTICYmIG5ld1NlbGVjdGlvbiA9PT0gbmV3UHRpbGVzLmxlbmd0aCkgeyBcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbiAtIDFcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX0dVQVJEUyAmJiBuZXdTZWxlY3Rpb24gPT09IG5ld0d0aWxlcy5sZW5ndGgpIHsgXHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdTZWxlY3Rpb24gLSAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24pO1xyXG4gICAgICAgIHNldFNxdWFyZXMobmV3U3F1YXJlcyk7XHJcbiAgICAgICAgc2V0VXNlZGJ5KG5ld1VzZWRieSk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgICAgc2V0Q3VycmVudGNvb3JkcyhbLi4uY3VycmVudGNvb3JkcywgY29vcmRdKTtcclxuICAgICAgICBzZXRSY2QobmV3UmNkKTsgLy8ga2V5IGRvd24gaGFuZGxlciBmaWd1cmVkIGl0IG91dFxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY2NpID4gLTEpIHsgLy8gY2xpY2tlZCBzcXVhcmUgaGFzIGEgdGlsZSBvbiBpdCBmcm9tIHRoZSBjdXJyZW50IG1vdmUgaW4gcHJvZ3Jlc3NcclxuICAgICAgICB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlNcclxuICAgICAgICAgID8gbmV3UHRpbGVzLnB1c2goc3F1YXJldmFsdWUpXHJcbiAgICAgICAgICA6IG5ld0d0aWxlcy5wdXNoKHNxdWFyZXZhbHVlKTtcclxuICAgICAgICBsZXQgbmV3Um93ID0gWy4uLm5ld1NxdWFyZXNbcmldXTtcclxuICAgICAgICBuZXdSb3dbY2ldID0gYy5TUVVBUkVfVU5VU0VEO1xyXG4gICAgICAgIG5ld1NxdWFyZXNbcmldID0gWy4uLm5ld1Jvd107XHJcbiAgICAgICAgbGV0IG5ld1VzZWRieVJvdyA9IFsuLi5uZXdVc2VkYnlbcmldXTtcclxuICAgICAgICBuZXdVc2VkYnlSb3dbY2ldID0gdXNlZGJ5bm9vbmU7XHJcbiAgICAgICAgbmV3VXNlZGJ5W3JpXSA9IFsuLi5uZXdVc2VkYnlSb3ddO1xyXG4gICAgICAgIHNldFNlbGVjdGlvbihcclxuICAgICAgICAgIHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX1BSSVNPTkVSUyA/IG5ld1B0aWxlcy5sZW5ndGggLSAxIDogbmV3R3RpbGVzLmxlbmd0aCAtIDFcclxuICAgICAgICApO1xyXG4gICAgICAgIG5ld0N1cnJlbnRjb29yZHMuc3BsaWNlKGNjaSwgMSk7XHJcbiAgXHJcbiAgICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobmV3VXNlZGJ5KTtcclxuICAgICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKG5ld0N1cnJlbnRjb29yZHMpO1xyXG4gICAgICAgIHNldFJjZCgtMSwtMSxub2RpcmVjdGlvbik7IC8vIG1ha2UgcGxheWVyIGNsaWNrIGFnYWluIHRvIHNldCBkaXJlY3Rpb25cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gVGhleSBkaWRuJ3QgY2xpY2sgYSBzcXVhcmUgdG8gcGxhY2UgYSBzZWxlY3RlZCB0aWxlIHRoZXJlXHJcbiAgICAgIC8vIFRoZXkgZGlkbid0IGNsaWNrIGEgc3F1YXJlIHRvIHJlbW92ZSBhbiBleGlzdGluZyB0aWxlXHJcbiAgICAgIGlmIChzcXVhcmVzW3JpXVtjaV0gPT09IGMuU1FVQVJFX1VOVVNFRCkge1xyXG4gICAgICAgIC8vIFRoZXJlIGlzIG5vdGhpbmcgb24gdGhlIHNxdWFyZSBzbyB0aGV5IGFyZSBwaWNraW5nIHdoZXJlIHRvIHBsYWNlIHRoZSBuZXh0IHRpbGUgdmlhIGtleWJvYXJkXHJcbiAgICAgICAgbGV0IG5ld0RpcmVjdGlvbiA9IHJjZFswXSAhPT0gcmkgfHwgcmNkWzFdICE9PSBjaSA/IFwiclwiIDogLy9jbGljayBuZXcgc3F1YXJlLCBzdGFydCB3aXRoIFwiclwiXHJcbiAgICAgICAgIHJjZFsyXSA9PT0gXCJyXCIgPyBcImRcIiA6IC8vY2xpY2sgc2FtZSBzcXVhcmUgdGhhdCB3YXMgXCJyXCIsIGNoYW5nZSB0byBcImRcIlxyXG4gICAgICAgICByY2RbMl0gPT09IFwiZFwiID8gbm9kaXJlY3Rpb24gOiAvL2NsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIFwiZFwiLCBjaGFuZ2UgdG8gbm9kaXJlY3Rpb25cclxuICAgICAgICAgXCJyXCI7IC8vIGNsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIG5vZGlyZWN0aW9uLCBjaGFuZ2UgdG8gXCJyXCJcclxuICAgICAgICBuZXdSY2QgPSBbcmksY2ksbmV3RGlyZWN0aW9uXTtcclxuICAgICAgICBzZXRSY2QobmV3UmNkKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBoYW5kbGVSYWNrVGlsZUNsaWNrID0gKHRpbGVpbmRleCkgPT4ge1xyXG4gICAgICAvLyBJZiBubyB0aWxlIGlzIHNlbGVjdGVkIGFscmVhZHkgdGhlbiBzZXQgdGhlIHNlbGVjdGlvblxyXG4gICAgICBpZiAoc2VsZWN0aW9uID09PSAtMSkge1xyXG4gICAgICAgIHNldFNlbGVjdGlvbih0aWxlaW5kZXgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvLyBJZiB0aGUgc2FtZSB0aWxlIGlzIGFscmVhZHkgc2VsZWN0ZWQgdGhlbiB1bnNlbGVjdFxyXG4gICAgICBpZiAoc2VsZWN0aW9uID09PSB0aWxlaW5kZXgpIHtcclxuICAgICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvLyBBIHRpbGUgd2FzIGFscmVhZHkgc2VsZWN0ZWQgYW5kIHRoZXkgY2xpY2tlZCBhbm90aGVyIHRpbGUgLSBtb3ZlIHRoZSB0aWxlXHJcbiAgICAgIGxldCBuZXdyYWNrID0gcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBbLi4ucHRpbGVzXSA6IFsuLi5ndGlsZXNdO1xyXG4gICAgICBsZXQgbW92ZWZyb20gPSBzZWxlY3Rpb247XHJcbiAgICAgIGxldCBtb3ZldGlsZSA9IG5ld3JhY2tbbW92ZWZyb21dO1xyXG4gICAgICBsZXQgbW92ZXRvID0gdGlsZWluZGV4O1xyXG4gICAgICBuZXdyYWNrLnNwbGljZShtb3ZlZnJvbSwgMSk7IC8vIHJlbW92ZSB0aWxlIGZyb20gb3JpZ2luYWwgc2VsZWN0ZWQgcG9zaXRpb25cclxuICAgICAgbmV3cmFjay5zcGxpY2UobW92ZXRvLDAsbW92ZXRpbGUpOyAvLyBpbnNlcnQgbW92ZWQgdGlsZSBhdCB0aGUgbmV3bHkgc2VsZWN0ZWQgcG9zaXRpb25cclxuICAgICAgcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBzZXRQdGlsZXMobmV3cmFjaykgOiBzZXRHdGlsZXMobmV3cmFjayk7XHJcbiAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBlbmRQcmlzb25lcnNUdXJuID0gKCkgPT4ge1xyXG4gICAgICBpZiAoIWlzUGxheVZhbGlkKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHJld2luZEluZm8gPSBnZXRSZXdpbmRJbmZvKCk7XHJcbiAgICAgIGxldCBuZXdSZXNjdWVzID0gcmVzY3VlcztcclxuICAgICAgbGV0IGVzY2FwZWhhdGNoZXMgPSBbXHJcbiAgICAgICAgXCIwLTBcIixcclxuICAgICAgICBcIjAtXCIgKyBtaWRkbGUsXHJcbiAgICAgICAgXCIwLVwiICsgZWRnZSxcclxuICAgICAgICBtaWRkbGUrIFwiLTBcIixcclxuICAgICAgICBtaWRkbGUgKyBcIi1cIiArIGVkZ2UsXHJcbiAgICAgICAgZWRnZSArIFwiLTBcIixcclxuICAgICAgICBlZGdlICsgXCItXCIgKyBtaWRkbGUsXHJcbiAgICAgICAgZWRnZSArIFwiLVwiICsgZWRnZVxyXG4gICAgICBdOyAvLyBjb29yZHMgb2YgZXNjYXBlIGhhdGNoZXNcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50Y29vcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGVzY2FwZWhhdGNoZXMuaW5kZXhPZihjdXJyZW50Y29vcmRzW2ldKSA+IC0xKSB7XHJcbiAgICAgICAgICBuZXdSZXNjdWVzID0gbmV3UmVzY3VlcyArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgICAgd2hpbGUgKG5ld1B0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIG5ld1B0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgbmV3UHRpbGVzLnNvcnQoKTtcclxuICAgICAgbGV0IG5ld1dob3NldHVybiA9IG5ld1B0aWxlcy5sZW5ndGggPiAwID8gYy5XSE9TRV9UVVJOX0dVQVJEUyA6IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUjtcclxuICAgICAgaWYgKHVzZWRieVswXVswXSAgICAgICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgICAgdXNlZGJ5WzBdW21pZGRsZV0gICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgICB1c2VkYnlbMF1bZWRnZV0gICAgICAhPT0gdXNlZGJ5bm9vbmUgJiZcclxuICAgICAgICAgIHVzZWRieVttaWRkbGVdWzBdICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgICAgdXNlZGJ5W21pZGRsZV1bZWRnZV0gIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgICB1c2VkYnlbZWRnZV1bMF0gICAgICAhPT0gdXNlZGJ5bm9vbmUgJiZcclxuICAgICAgICAgIHVzZWRieVtlZGdlXVttaWRkbGVdICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgICAgdXNlZGJ5W2VkZ2VdW2VkZ2VdICAgIT09IHVzZWRieW5vb25lKSB7XHJcbiAgICAgICAgbmV3V2hvc2V0dXJuID0gYy5XSE9TRV9UVVJOX0dBTUVPVkVSOyAvLyBObyBlc2NhcGUgaGF0Y2hlcyBsZWZ0XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHBsYXlpbmZvID0gZ2V0UGxheUluZm8oKTtcclxuICAgICAgbGV0IG5ld01vdmUgPSB7Ynk6IGMuUEFSVFlfVFlQRV9QUklTT05FUlMsIHR5cGU6IGMuTU9WRV9UWVBFX1BMQVksIHJld2luZEluZm86IHJld2luZEluZm8sIG1haW53b3JkOiBwbGF5aW5mby5tYWlud29yZCwgZXh0cmF3b3JkczogcGxheWluZm8uZXh0cmF3b3JkcywgcG9zOiBwbGF5aW5mby5wb3N9O1xyXG4gICAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgICBzZXRSZXNjdWVzKG5ld1Jlc2N1ZXMpO1xyXG4gICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgc3F1YXJlczogWy4uLnNxdWFyZXNdLFxyXG4gICAgICAgIHVzZWRieTogWy4uLnVzZWRieV0sXHJcbiAgICAgICAgcHRpbGVzOiBbLi4ubmV3UHRpbGVzXSxcclxuICAgICAgICBndGlsZXM6IFsuLi5ndGlsZXNdLFxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcImVwdFwiLCAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsXHJcbiAgICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLCAvLyB0aGlzIHdhcyBiZWluZyBjaGFuZ2VkIGFzIHRoZSB0aWxlcyB3ZXJlIGJlaW5nIHBsYXllZFxyXG4gICAgICAgICAgdXNlZGJ5OiB1c2VkYnksIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgICBwdGlsZXM6IG5ld1B0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgcHJpc29uZXJzIHJhY2tcclxuICAgICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4sIC8vIG1heSBoYXZlIGVuZGVkIHRoZSBnYW1lXHJcbiAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgICBtb3ZlczogbmV3TW92ZXMsIC8vIGEgbW92ZSB3YXMgbWFkZVxyXG4gICAgICAgICAgcmVzY3VlczogbmV3UmVzY3VlcyAvLyBtYXkgaGF2ZSByZXNjdWVkIGFub3RoZXIgcHJpc29uZXJcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IGVuZEd1YXJkc1R1cm4gPSAoKSA9PiB7XHJcbiAgICAgIGlmICghaXNQbGF5VmFsaWQoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgcmV3aW5kSW5mbyA9IGdldFJld2luZEluZm8oKTtcclxuICAgICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgICB3aGlsZSAobmV3R3RpbGVzLmxlbmd0aCA8IHJhY2tzaXplICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgbmV3R3RpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgfVxyXG4gICAgICBuZXdHdGlsZXMuc29ydCgpO1xyXG4gICAgICBsZXQgc25hcHNxdWFyZXMgPSBbLi4uc3F1YXJlc107XHJcbiAgICAgIGxldCBzbmFwdXNlZGJ5ID0gWy4uLnVzZWRieV07XHJcbiAgICAgIGxldCBzbmFwcHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICAgIGxldCBzbmFwZ3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICAgIGxldCBuZXdXaG9zZXR1cm4gPSBuZXdHdGlsZXMubGVuZ3RoID4gMCA/IGMuV0hPU0VfVFVSTl9QUklTT05FUlMgOiBjLldIT1NFX1RVUk5fR0FNRU9WRVI7XHJcbiAgICAgIGlmICh1c2VkYnlbMF1bMF0gICAgICAgICAhPT0gdXNlZGJ5bm9vbmUgJiZcclxuICAgICAgICAgIHVzZWRieVswXVttaWRkbGVdICAgICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgICAgdXNlZGJ5WzBdW2VkZ2VdICAgICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgICB1c2VkYnlbbWlkZGxlXVswXSAgICAhPT0gdXNlZGJ5bm9vbmUgJiZcclxuICAgICAgICAgIHVzZWRieVttaWRkbGVdW2VkZ2VdICE9PSB1c2VkYnlub29uZSAmJlxyXG4gICAgICAgICAgdXNlZGJ5W2VkZ2VdWzBdICAgICAgIT09IHVzZWRieW5vb25lICYmXHJcbiAgICAgICAgICB1c2VkYnlbZWRnZV1bbWlkZGxlXSAhPT0gdXNlZGJ5bm9vbmUgJiZcclxuICAgICAgICAgIHVzZWRieVtlZGdlXVtlZGdlXSAgICE9PSB1c2VkYnlub29uZSkge1xyXG4gICAgICAgIG5ld1dob3NldHVybiA9IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUjsgLy8gTm8gZXNjYXBlIGhhdGNoZXMgbGVmdFxyXG4gICAgICB9XHJcbiAgICAgIGxldCBwbGF5aW5mbyA9IGdldFBsYXlJbmZvKCk7XHJcbiAgICAgIGxldCBuZXdNb3ZlID0ge2J5OiBjLlBBUlRZX1RZUEVfR1VBUkRTLCB0eXBlOiBjLk1PVkVfVFlQRV9QTEFZLCByZXdpbmRJbmZvOiByZXdpbmRJbmZvLCBtYWlud29yZDogcGxheWluZm8ubWFpbndvcmQsIGV4dHJhd29yZHM6IHBsYXlpbmZvLmV4dHJhd29yZHMsIHBvczogcGxheWluZm8ucG9zfTtcclxuICAgICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgIHNxdWFyZXM6IHNuYXBzcXVhcmVzLFxyXG4gICAgICAgIHVzZWRieTogc25hcHVzZWRieSxcclxuICAgICAgICBwdGlsZXM6IHNuYXBwdGlsZXMsXHJcbiAgICAgICAgZ3RpbGVzOiBzbmFwZ3RpbGVzLFxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcImVndFwiLCAvLyBlbmQgZ3VhcmRzIHR1cm5cclxuICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsXHJcbiAgICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLCAvLyB0aGlzIHdhcyBiZWluZyBjaGFuZ2VkIGFzIHRoZSB0aWxlcyB3ZXJlIGJlaW5nIHBsYXllZFxyXG4gICAgICAgICAgdXNlZGJ5OiB1c2VkYnksIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgICBndGlsZXM6IG5ld0d0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgZ3VhcmRzIHJhY2tcclxuICAgICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgICAgbW92ZXM6IG5ld01vdmVzLCAvLyBhIG1vdmUgd2FzIG1hZGVcclxuICAgICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuLCAvLyBtYXkgaGF2ZSBlbmRlZCB0aGUgZ2FtZVxyXG4gICAgICAgICAgcmFja3NpemU6IHJhY2tzaXplIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBzd2FwUHJpc29uZXJzVGlsZXMgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSkge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcIk5lZWQgXCIgKyByYWNrc2l6ZSArIFwiIHRpbGVzIGluIHRoZSBiYWcgdG8gZXhjaGFuZ2VcIilcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHJld2luZEluZm8gPSBnZXRSZXdpbmRJbmZvKCk7XHJcbiAgICAgIGxldCBuZXdQdGlsZXMgPSBbXTtcclxuICAgICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgICAgd2hpbGUgKG5ld1B0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIG5ld1B0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgbmV3UHRpbGVzLnNvcnQoKTtcclxuICAgICAgbmV3VGlsZXMgPSBbLi4ubmV3VGlsZXMsIC4uLnNuYXBzaG90LnB0aWxlc107XHJcbiAgICAgIG5ld1RpbGVzLnNvcnQoKTtcclxuICAgICAgbGV0IG5ld01vdmUgPSB7Ynk6IGMuUEFSVFlfVFlQRV9QUklTT05FUlMsIHR5cGU6IGMuTU9WRV9UWVBFX1NXQVAsIHJld2luZEluZm86IHJld2luZEluZm99O1xyXG4gICAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICBzZXRTcXVhcmVzKFsuLi5zbmFwc2hvdC5zcXVhcmVzXSk7XHJcbiAgICAgIHNldFVzZWRieShbLi4uc25hcHNob3QudXNlZGJ5XSk7XHJcbiAgICAgIHNldFdob3NldHVybihjLldIT1NFX1RVUk5fR1VBUkRTKTtcclxuICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgc3F1YXJlczogWy4uLnNuYXBzaG90LnNxdWFyZXNdLFxyXG4gICAgICAgIHVzZWRieTogWy4uLnNuYXBzaG90LnVzZWRieV0sXHJcbiAgICAgICAgcHRpbGVzOiBbLi4ubmV3UHRpbGVzXSxcclxuICAgICAgICBndGlsZXM6IFsuLi5ndGlsZXNdLFxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcImVwdFwiLCAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsXHJcbiAgICAgICAgICB3aG9zZXR1cm46IGMuV0hPU0VfVFVSTl9HVUFSRFMsIC8vIHN3YXAgbmV2ZXIgZW5kcyB0aGUgZ2FtZSBzbyBnbyB0byBvcHBvbmVudFxyXG4gICAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgICAgc3F1YXJlczogc25hcHNob3Quc3F1YXJlcywgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgICAgdXNlZGJ5OiBzbmFwc2hvdC51c2VkYnksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHVzZWQgYnlcclxuICAgICAgICAgIHB0aWxlczogbmV3UHRpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgICBtb3ZlczogbmV3TW92ZXMsIC8vIGEgbW92ZSB3YXMgbWFkZVxyXG4gICAgICAgICAgcmVzY3VlczogcmVzY3VlcyAvLyBubyByZXNjdWVzIG9uIGFuIGV4Y2hhbmdlXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3Qgc3dhcEd1YXJkc1RpbGVzID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGlsZXMubGVuZ3RoIDwgcmFja3NpemUpIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJOZWVkIFwiICsgcmFja3NpemUgKyBcIiB0aWxlcyBpbiB0aGUgYmFnIHRvIGV4Y2hhbmdlXCIpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCByZXdpbmRJbmZvID0gZ2V0UmV3aW5kSW5mbygpO1xyXG4gICAgICBsZXQgbmV3R3RpbGVzID0gW107XHJcbiAgICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICAgIHdoaWxlIChuZXdHdGlsZXMubGVuZ3RoIDwgcmFja3NpemUgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgICBuZXdHdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIG5ld0d0aWxlcy5zb3J0KCk7XHJcbiAgICAgIG5ld1RpbGVzID0gWy4uLm5ld1RpbGVzLCAuLi5zbmFwc2hvdC5ndGlsZXNdO1xyXG4gICAgICBuZXdUaWxlcy5zb3J0KCk7XHJcbiAgICAgIGxldCBuZXdNb3ZlID0ge2J5OiBjLlBBUlRZX1RZUEVfR1VBUkRTLCB0eXBlOiBjLk1PVkVfVFlQRV9TV0FQLCByZXdpbmRJbmZvOiByZXdpbmRJbmZvfTtcclxuICAgICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgc2V0U3F1YXJlcyhbLi4uc25hcHNob3Quc3F1YXJlc10pO1xyXG4gICAgICBzZXRVc2VkYnkoWy4uLnNuYXBzaG90LnVzZWRieV0pO1xyXG4gICAgICBzZXRXaG9zZXR1cm4oYy5XSE9TRV9UVVJOX1BSSVNPTkVSUyk7XHJcbiAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgIHNxdWFyZXM6IFsuLi5zbmFwc2hvdC5zcXVhcmVzXSxcclxuICAgICAgICB1c2VkYnk6IFsuLi5zbmFwc2hvdC51c2VkYnldLFxyXG4gICAgICAgIHB0aWxlczogWy4uLnB0aWxlc10sXHJcbiAgICAgICAgZ3RpbGVzOiBbLi4ubmV3R3RpbGVzXSxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgZnVuYzogXCJlZ3RcIiwgLy8gZW5kIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LFxyXG4gICAgICAgICAgd2hvc2V0dXJuOiBjLldIT1NFX1RVUk5fUFJJU09ORVJTLCAvLyBzd2FwIG5ldmVyIGVuZHMgdGhlIGdhbWUgc28gZ28gdG8gb3Bwb25lbnRcclxuICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgICBndGlsZXM6IG5ld0d0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgcHJpc29uZXJzIHJhY2tcclxuICAgICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgICAgbW92ZXM6IG5ld01vdmVzIC8vIGEgbW92ZSB3YXMgbWFkZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBpc1BsYXlWYWxpZCgpIHtcclxuICAgICAgaWYgKHNxdWFyZXNbbWlkZGxlXVttaWRkbGVdID09PSBjLlNRVUFSRV9VTlVTRUQpIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJGaXJzdCBwbGF5IG11c3QgaGl0IGNlbnRlciBzcXVhcmVcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBudW1yb3dzID0gZWRnZSsxO1xyXG4gICAgICBsZXQgbnVtY29scyA9IGVkZ2UrMTtcclxuICAgICAgbGV0IGxvd3JvdyA9IG51bXJvd3M7XHJcbiAgICAgIGxldCBoaWdocm93ID0gLTE7XHJcbiAgICAgIGxldCBsb3djb2wgPSBudW1jb2xzO1xyXG4gICAgICBsZXQgaGlnaGNvbCA9IC0xO1xyXG4gICAgICBmb3IgKHZhciByPTA7IHIgPCBudW1yb3dzOyArK3IpIHtcclxuICAgICAgICBmb3IgKHZhciB0ZW1wY29sPTA7IHRlbXBjb2wgPCBudW1jb2xzOyArK3RlbXBjb2wpIHtcclxuICAgICAgICAgIGlmIChzcXVhcmVzW3JdW3RlbXBjb2xdICE9PSBjLlNRVUFSRV9VTlVTRUQpIHtcclxuICAgICAgICAgICAgaWYgKCEociA+IDAgJiYgc3F1YXJlc1tyLTFdW3RlbXBjb2xdICE9PSBjLlNRVUFSRV9VTlVTRUQpICYmXHJcbiAgICAgICAgICAgICAhKHRlbXBjb2wgPiAwICYmIHNxdWFyZXNbcl1bdGVtcGNvbC0xXSAhPT0gYy5TUVVBUkVfVU5VU0VEKSAmJlxyXG4gICAgICAgICAgICAgIShyIDwgZWRnZSAmJiBzcXVhcmVzW3IrMV1bdGVtcGNvbF0gIT09IGMuU1FVQVJFX1VOVVNFRCkgJiZcclxuICAgICAgICAgICAgICEodGVtcGNvbCA8IGVkZ2UgJiYgc3F1YXJlc1tyXVt0ZW1wY29sKzFdICE9PSBjLlNRVUFSRV9VTlVTRUQpXHJcbiAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJFYWNoIHBsYXllZCB0aWxlIG11c3QgYmUgcGFydCBvZiBhIHdvcmRcIik7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgaWYgKHNuYXBzaG90LnNxdWFyZXNbcl1bdGVtcGNvbF0gPT09IGMuU1FVQVJFX1VOVVNFRCkge1xyXG4gICAgICAgICAgICAgICAvLyBUaGlzIHNxdWFyZSB3YXMgcGxheWVkIG9uIHRoaXMgdHVyblxyXG4gICAgICAgICAgICAgICBpZiAociA8IGxvd3JvdykgeyBsb3dyb3cgPSByO31cclxuICAgICAgICAgICAgICAgaWYgKHIgPiBoaWdocm93KSB7IGhpZ2hyb3cgPSByO31cclxuICAgICAgICAgICAgICAgaWYgKHRlbXBjb2wgPCBsb3djb2wpIHsgbG93Y29sID0gdGVtcGNvbDt9XHJcbiAgICAgICAgICAgICAgIGlmICh0ZW1wY29sID4gaGlnaGNvbCkgeyBoaWdoY29sID0gdGVtcGNvbDt9XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChsb3dyb3cgPT09IG51bXJvd3MpIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJZb3UgZGlkbid0IHBsYXkgYW55IHRpbGVzXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobG93cm93ICE9PSBoaWdocm93ICYmIGxvd2NvbCAhPT0gaGlnaGNvbCkge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcIlRpbGVzIHBsYXllZCBtdXN0IGJlIGluIGEgc3RyYWlnaHQgbGluZVwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHBsYXl0aHJ1ID0gZmFsc2U7XHJcbiAgICAgIGxldCBob29rbWFkZSA9IGZhbHNlO1xyXG4gICAgICBmb3IgKHZhciByID0gbG93cm93OyByIDw9IGhpZ2hyb3c7ICsrcikge1xyXG4gICAgICAgIGZvciAodmFyIHRlbXBjb2wgPSBsb3djb2w7IHRlbXBjb2wgPD0gaGlnaGNvbDsgKyt0ZW1wY29sKSB7XHJcbiAgICAgICAgICBpZiAoc3F1YXJlc1tyXVt0ZW1wY29sXSA9PT0gYy5TUVVBUkVfVU5VU0VEKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIlRoZXJlIGlzIGEgZ2FwIGluIHlvdXIgd29yZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHNuYXBzaG90LnNxdWFyZXNbcl1bdGVtcGNvbF0gIT09IGMuU1FVQVJFX1VOVVNFRCkge1xyXG4gICAgICAgICAgICBwbGF5dGhydSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIHIgPiAwICYmIHNxdWFyZXNbci0xXVt0ZW1wY29sXSAhPT0gYy5TUVVBUkVfVU5VU0VEKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiByIDwgZWRnZSAmJiBzcXVhcmVzW3IrMV1bdGVtcGNvbF0gIT09IGMuU1FVQVJFX1VOVVNFRCkgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgdGVtcGNvbCA+IDAgJiYgc3F1YXJlc1tyXVt0ZW1wY29sLTFdICE9PSBjLlNRVUFSRV9VTlVTRUQpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIHRlbXBjb2wgPCBlZGdlICYmIHNxdWFyZXNbcl1bdGVtcGNvbCsxXSAhPT0gYy5TUVVBUkVfVU5VU0VEKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBDaGVjayBwbGF5IHRvIG9yIGZyb20gYSB0aWxlIChwbGF5IHRocm91Z2ggYnV0IG5vdCBlaXRoZXIgc2lkZSlcclxuICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiBsb3djb2wgPiAwICYmIHNuYXBzaG90LnNxdWFyZXNbbG93cm93XVtsb3djb2wtMV0gIT09IGMuU1FVQVJFX1VOVVNFRCkgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiBoaWdoY29sIDwgZWRnZSAmJiBzbmFwc2hvdC5zcXVhcmVzW2xvd3Jvd11baGlnaGNvbCsxXSAhPT0gYy5TUVVBUkVfVU5VU0VEKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGxvd3JvdyA+IDAgJiYgc25hcHNob3Quc3F1YXJlc1tsb3dyb3ctMV1bbG93Y29sXSAhPT0gYy5TUVVBUkVfVU5VU0VEKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGhpZ2hyb3cgPCBlZGdlICYmIHNuYXBzaG90LnNxdWFyZXNbaGlnaHJvdysxXVtsb3djb2xdICE9PSBjLlNRVUFSRV9VTlVTRUQpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICAgIGlmICghcGxheXRocnUgJiYgIWhvb2ttYWRlICYmIHNuYXBzaG90LnNxdWFyZXNbbWlkZGxlXVttaWRkbGVdICE9PSBjLlNRVUFSRV9VTlVTRUQpIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJXb3JkcyBtdXN0IGJlIGNvbm5lY3RlZFwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBnZXRQbGF5SW5mbygpIHtcclxuICAgICAgbGV0IHBsYXlpbmZvID0ge307XHJcbiAgICAgIGxldCBtYWlud29yZCA9IFwiXCI7XHJcbiAgICAgIGxldCBleHRyYXdvcmRzID0gW107XHJcbiAgICAgIGxldCB3b3Jkc3RhcnRjb29yZCA9IFwiXCI7XHJcbiAgICAgIGxldCBudW1yb3dzID0gZWRnZSsxO1xyXG4gICAgICBsZXQgbnVtY29scyA9IGVkZ2UrMTtcclxuICAgICAgbGV0IGxvd3JvdyA9IG51bXJvd3M7XHJcbiAgICAgIGxldCBoaWdocm93ID0gLTE7XHJcbiAgICAgIGxldCBsb3djb2wgPSBudW1jb2xzO1xyXG4gICAgICBsZXQgaGlnaGNvbCA9IC0xO1xyXG4gICAgICBsZXQgbnVtY29vcmRzID0gY3VycmVudGNvb3Jkcy5sZW5ndGg7XHJcbiAgICAgIGZvciAodmFyIGNvb3JkPTA7IGNvb3JkIDwgbnVtY29vcmRzOyArK2Nvb3JkKSB7XHJcbiAgICAgICAgbGV0IHJvdyA9IHBhcnNlSW50KGN1cnJlbnRjb29yZHNbY29vcmRdLnNwbGl0KFwiLVwiKVswXSk7XHJcbiAgICAgICAgbGV0IGNvbCA9IHBhcnNlSW50KGN1cnJlbnRjb29yZHNbY29vcmRdLnNwbGl0KFwiLVwiKVsxXSk7XHJcbiAgICAgICAgaWYgKHJvdyA8IGxvd3Jvdykge1xyXG4gICAgICAgICAgbG93cm93ID0gcm93O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocm93ID4gaGlnaHJvdykge1xyXG4gICAgICAgICAgaGlnaHJvdyA9IHJvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbCA8IGxvd2NvbCkge1xyXG4gICAgICAgICAgbG93Y29sID0gY29sO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sID4gaGlnaGNvbCkge1xyXG4gICAgICAgICAgaGlnaGNvbCA9IGNvbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGxvd3JvdyA8IGhpZ2hyb3cgfHwgbnVtY29vcmRzID09PSAxKSB7IC8vIHRpbGVzIHBsYWNlZCBvbiBkaWZmZXJlbmNlIHJvd3Mgc28gcGxheSBpcyB2ZXJ0aWNhbCwgb3Igc2luZ2xlIHRpbGUgcGxheWVkXHJcbiAgICAgICAgbGV0IGNvbCA9IGxvd2NvbDsgLy8gbG93Y29sIGFuZCBoaWdoY29sIHdpbGwgaGF2ZSB0aGUgc2FtZSB2YWx1ZVxyXG4gICAgICAgIC8vIGZpbmQgdGhlIGxvd2VzdCByb3cgbnVtYmVyIG9mIHRoZSBtYWluIHdvcmQsIHdoaWNoIG1heSBiZSBsb3dlciB0aGFuIHRoYXQgb2YgdGhlIGZpcnN0IHBsYXllZCB0aWxlXHJcbiAgICAgICAgbGV0IGxvd2VzdHJvdyA9IGxvd3JvdztcclxuICAgICAgICB3aGlsZSAobG93ZXN0cm93ID4gMCAmJiBzcXVhcmVzW2xvd2VzdHJvdy0xXVtjb2xdICE9PSBjLlNRVUFSRV9VTlVTRUQpIHtcclxuICAgICAgICAgIGxvd2VzdHJvdyA9IGxvd2VzdHJvdyAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZpbmQgdGhlIGhpZ2hlc3Qgcm93IG51bWJlciBvZiB0aGUgbWFpbiB3b3JkLCB3aGljaCBtYXkgYmUgaGlnaGVyIHRoYW4gdGhhdCBvZiB0aGUgbGFzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIGxldCBoaWdoZXN0cm93ID0gaGlnaHJvdztcclxuICAgICAgICB3aGlsZSAoaGlnaGVzdHJvdyA8IGVkZ2UgJiYgc3F1YXJlc1toaWdoZXN0cm93KzFdW2NvbF0gIT09IGMuU1FVQVJFX1VOVVNFRCkge1xyXG4gICAgICAgICAgaGlnaGVzdHJvdyA9IGhpZ2hlc3Ryb3cgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3b3Jkc3RhcnRjb29yZCA9IGMuQk9BUkRfQ09MX0hFQURFUlNbY29sXSArIGMuQk9BUkRfUk9XX0hFQURFUlNbbG93ZXN0cm93XTsgLy8gdmVydGljYWwgcGxheSBjb29yZHMgc3RhcnQgd2l0aCBjb2wgaGVhZGVyXHJcbiAgICAgICAgZm9yICh2YXIgcm93ID0gbG93ZXN0cm93OyByb3cgPD0gaGlnaGVzdHJvdzsgKytyb3cpIHtcclxuICAgICAgICAgIG1haW53b3JkID0gbWFpbndvcmQgKyBzcXVhcmVzW3Jvd11bY29sXTtcclxuICAgICAgICAgIGxldCBjb29yZCA9IHJvdyArIFwiLVwiICsgY29sO1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCkgPiAtMSkgeyAvLyBUaGlzIHRpbGUgd2FzIHBsYXllZCwgY2hlY2sgZm9yIGhvb2tzXHJcbiAgICAgICAgICAgIGxldCBsb3dlc3Rjb2wgPSBjb2w7XHJcbiAgICAgICAgICAgIHdoaWxlIChsb3dlc3Rjb2wgPiAwICYmIHNxdWFyZXNbcm93XVtsb3dlc3Rjb2wtMV0gIT09IGMuU1FVQVJFX1VOVVNFRCkge1xyXG4gICAgICAgICAgICAgIGxvd2VzdGNvbCA9IGxvd2VzdGNvbCAtIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGhpZ2hlc3Rjb2wgPSBjb2w7XHJcbiAgICAgICAgICAgIHdoaWxlIChoaWdoZXN0Y29sIDwgZWRnZSAmJiBzcXVhcmVzW3Jvd11baGlnaGVzdGNvbCsxXSAhPT0gYy5TUVVBUkVfVU5VU0VEKSB7XHJcbiAgICAgICAgICAgICAgaGlnaGVzdGNvbCA9IGhpZ2hlc3Rjb2wgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChsb3dlc3Rjb2wgPCBoaWdoZXN0Y29sKSB7IC8vIGhvb2sgd2FzIG1hZGVcclxuICAgICAgICAgICAgICBsZXQgZXh0cmF3b3JkID0gXCJcIjtcclxuICAgICAgICAgICAgICBmb3IgKHZhciBjID0gbG93ZXN0Y29sOyBjIDw9IGhpZ2hlc3Rjb2w7ICsrYykge1xyXG4gICAgICAgICAgICAgICAgZXh0cmF3b3JkID0gZXh0cmF3b3JkICsgc3F1YXJlc1tyb3ddW2NdO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBleHRyYXdvcmRzID0gWy4uLmV4dHJhd29yZHMsIGV4dHJhd29yZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1haW53b3JkLmxlbmd0aCA8IDIpIHsgLy8gSG9yaXpvbnRhbCBwbGF5IG9yIHNpbmdsZSB0aWxlIGRyb3AgdGhhdCBjYW5ub3QgYmUgYSB2ZXJ0aWNhbCBwbGF5XHJcbiAgICAgICAgbGV0IHJvdyA9IGxvd3JvdzsgLy8gbG93cm93IGFuZCBoaWdocm93IHdpbGwgaGF2ZSB0aGUgc2FtZSB2YWx1ZVxyXG4gICAgICAgIC8vIGZpbmQgdGhlIGxvd2VzdCBjb2wgbnVtYmVyIG9mIHRoZSBtYWluIHdvcmQsIHdoaWNoIG1heSBiZSBsb3dlciB0aGFuIHRoYXQgb2YgdGhlIGZpcnN0IHBsYXllZCB0aWxlXHJcbiAgICAgICAgbGV0IGxvd2VzdGNvbCA9IGxvd2NvbDtcclxuICAgICAgICB3aGlsZSAobG93ZXN0Y29sID4gMCAmJiBzcXVhcmVzW3Jvd11bbG93ZXN0Y29sLTFdICE9PSBjLlNRVUFSRV9VTlVTRUQpIHtcclxuICAgICAgICAgIGxvd2VzdGNvbCA9IGxvd2VzdGNvbCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZpbmQgdGhlIGhpZ2hlc3QgY29sIG51bWJlciBvZiB0aGUgbWFpbiB3b3JkLCB3aGljaCBtYXkgYmUgaGlnaGVyIHRoYW4gdGhhdCBvZiB0aGUgbGFzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIGxldCBoaWdoZXN0Y29sID0gaGlnaGNvbDtcclxuICAgICAgICB3aGlsZSAoaGlnaGVzdGNvbCA8IGVkZ2UgJiYgc3F1YXJlc1tyb3ddW2hpZ2hlc3Rjb2wrMV0gIT09IGMuU1FVQVJFX1VOVVNFRCkge1xyXG4gICAgICAgICAgaGlnaGVzdGNvbCA9IGhpZ2hlc3Rjb2wgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3b3Jkc3RhcnRjb29yZCA9IGMuQk9BUkRfUk9XX0hFQURFUlNbcm93XSArIGMuQk9BUkRfQ09MX0hFQURFUlNbbG93ZXN0Y29sXTsgLy8gaG9yaXpvbnRhbCBwbGF5IGNvb3JkcyBzdGFydCB3aXRoIHJvdyBoZWFkZXJcclxuICAgICAgICBtYWlud29yZCA9IFwiXCI7IC8vIEluIGNhc2Ugd2UgZ290IGEgMSBsZXR0ZXIgbWFpbndvcmQgaW4gdGhlIHByZXZpb3VzIGJsb2NrXHJcbiAgICAgICAgZXh0cmF3b3JkcyA9IFtdOyAvLyBEaXR0b1xyXG4gICAgICAgIGZvciAodmFyIGNvbCA9IGxvd2VzdGNvbDsgY29sIDw9IGhpZ2hlc3Rjb2w7ICsrY29sKSB7XHJcbiAgICAgICAgICBtYWlud29yZCA9IG1haW53b3JkICsgc3F1YXJlc1tyb3ddW2NvbF07XHJcbiAgICAgICAgICBsZXQgY29vcmQgPSByb3cgKyBcIi1cIiArIGNvbDtcclxuICAgICAgICAgIGlmIChjdXJyZW50Y29vcmRzLmluZGV4T2YoY29vcmQpID4gLTEpIHsgLy8gVGhpcyB0aWxlIHdhcyBwbGF5ZWQsIGNoZWNrIGZvciBob29rc1xyXG4gICAgICAgICAgICBsZXQgbG93ZXN0cm93ID0gcm93O1xyXG4gICAgICAgICAgICB3aGlsZSAobG93ZXN0cm93ID4gMCAmJiBzcXVhcmVzW2xvd2VzdHJvdy0xXVtjb2xdICE9PSBjLlNRVUFSRV9VTlVTRUQpIHtcclxuICAgICAgICAgICAgICBsb3dlc3Ryb3cgPSBsb3dlc3Ryb3cgLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBoaWdoZXN0cm93ID0gcm93O1xyXG4gICAgICAgICAgICB3aGlsZSAoaGlnaGVzdHJvdyA8IGVkZ2UgJiYgc3F1YXJlc1toaWdoZXN0cm93KzFdW2NvbF0gIT09IGMuU1FVQVJFX1VOVVNFRCkge1xyXG4gICAgICAgICAgICAgIGhpZ2hlc3Ryb3cgPSBoaWdoZXN0cm93ICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobG93ZXN0cm93IDwgaGlnaGVzdHJvdykgeyAvLyBob29rIHdhcyBtYWRlXHJcbiAgICAgICAgICAgICAgbGV0IGV4dHJhd29yZCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgciA9IGxvd2VzdHJvdzsgciA8PSBoaWdoZXN0cm93OyArK3IpIHtcclxuICAgICAgICAgICAgICAgIGV4dHJhd29yZCA9IGV4dHJhd29yZCArIHNxdWFyZXNbcl1bY29sXTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZXh0cmF3b3JkcyA9IFsuLi5leHRyYXdvcmRzLCBleHRyYXdvcmRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHBsYXlpbmZvID0ge21haW53b3JkOiBtYWlud29yZCwgZXh0cmF3b3JkczogZXh0cmF3b3JkcywgcG9zOiB3b3Jkc3RhcnRjb29yZH07XHJcbiAgICAgIHJldHVybiBwbGF5aW5mbztcclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIGdldFJld2luZEluZm8oKSB7IC8vIE11c3QgYmUgY2FsbGVkIGJlZm9yZSB5b3Ugc3RhcnQgc2V0dGluZyBuZXcgdmFsdWVzIGZvciBzdHVmZlxyXG4gICAgICAvKiBSZXdpbmQgaW5mbyBpcyBldmVyeXRoaW5nIHlvdSBuZWVkIHRvIHJldmVyc2UgdGhlIG1vdmUgdGhhdCB3ZSBkbyBub3QgYWxyZWFkeSBoYXZlIGluIHRoZSBuZXcgbW92ZSB2YXJpYWJsZTpcclxuICAgICAgICAgIHNxdWFyZXM6IHNheXMgd2hhdCB0aWxlIGlzIG9uIHdoYXQgc3F1YXJlXHJcbiAgICAgICAgICB1c2VkYnk6IHNheXMgd2hvIHBsYXllZCB3aGF0IHRpbGUgb24gd2hhdCBzcXVhcmUgKGFmZmVjdHMgc3R5bGluZylcclxuICAgICAgICAgIHJhY2s6IHBsYXllcnMgcmFjayBiZWZvcmUgbW92ZSB3YXMgbWFkZSBcclxuICAgICAgICAgIHRpbGVzOiB0aWxlIHBvb2wgYmVmb3JlIHBpY2tpbmcgbmV3IHRpbGVzXHJcbiAgICAgICAgICByZXNjdWVzOiByZXNjdWUgY291bnRcclxuICAgICAgKi9cclxuICAgICAgbGV0IHJld2luZEluZm8gPSB7XHJcbiAgICAgICAgc3F1YXJlczogWy4uLnNuYXBzaG90LnNxdWFyZXNdLFxyXG4gICAgICAgIHVzZWRieTogWy4uLnNuYXBzaG90LnVzZWRieV0sXHJcbiAgICAgICAgcmFjazogd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fR1VBUkRTID8gWy4uLnNuYXBzaG90Lmd0aWxlc106IFsuLi5zbmFwc2hvdC5wdGlsZXNdLFxyXG4gICAgICAgIHRpbGVzOiBbLi4udGlsZXNdLFxyXG4gICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXNcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuIHJld2luZEluZm87XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhbGxvd1VuZG9MYXN0VHVybigpIHtcclxuICAgICAgaWYgKCFhbGxvd1Jld2luZCkge1xyXG4gICAgICAgIHNldEFsbG93UmV3aW5kKHRydWUpO1xyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICAgIGZ1bmM6IFwiYWxsb3d1bmRvXCIsIC8vIGFsbG93IHVuZG8gbGFzdCB0dXJuXHJcbiAgICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCAvLyB3aG8gaXMgYWxsb3dpbmcgaXRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBwZXJmb3JtUmV3aW5kKCkge1xyXG4gICAgICAvKiBSZXdpbmQgdGhlIGxhc3QgbW92ZSBhbmQgdGFrZSBpdCBvZmYgdGhlIGVuZCBvZiB0aGUgbW92ZSBsaXN0ICovXHJcbiAgICAgIGxldCBudW1Nb3ZlcyA9IG1vdmVzLmxlbmd0aDtcclxuICAgICAgbGV0IGxhc3RNb3ZlID0gbW92ZXNbbW92ZXMubGVuZ3RoLTFdO1xyXG4gICAgICBsZXQgbmV3U3F1YXJlcyA9IFsuLi5sYXN0TW92ZS5yZXdpbmRJbmZvLnNxdWFyZXNdO1xyXG4gICAgICBsZXQgbmV3VXNlZGJ5ID0gWy4uLmxhc3RNb3ZlLnJld2luZEluZm8udXNlZGJ5XTtcclxuICAgICAgbGV0IG5ld1RpbGVzID0gWy4uLmxhc3RNb3ZlLnJld2luZEluZm8udGlsZXNdO1xyXG4gICAgICBsZXQgbmV3UHRpbGVzID0gbGFzdE1vdmUuYnkgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBbLi4ubGFzdE1vdmUucmV3aW5kSW5mby5yYWNrXSA6IFsuLi5wdGlsZXNdO1xyXG4gICAgICBsZXQgbmV3R3RpbGVzID0gbGFzdE1vdmUuYnkgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMgPyBbLi4ubGFzdE1vdmUucmV3aW5kSW5mby5yYWNrXSA6IFsuLi5ndGlsZXNdO1xyXG4gICAgICBsZXQgbmV3UmVzY3VlcyA9IGxhc3RNb3ZlLnJld2luZEluZm8ucmVzY3VlcztcclxuICAgICAgbGV0IG5ld1dob3NldHVybiA9IGxhc3RNb3ZlLmJ5OyAvLyBCYWNrIHRvIHRoZWlyIHR1cm5cclxuICAgICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzXTtcclxuICAgICAgbmV3TW92ZXMuc3BsaWNlKG51bU1vdmVzLTEsMSk7XHJcbiAgICAgIGxldCBuZXdTbmFwc2hvdCA9IHtcclxuICAgICAgICBzcXVhcmVzOiBbLi4ubmV3U3F1YXJlc10sXHJcbiAgICAgICAgdXNlZGJ5OiBbLi4ubmV3VXNlZGJ5XSxcclxuICAgICAgICBndGlsZXM6IFsuLi5uZXdHdGlsZXNdLFxyXG4gICAgICAgIHB0aWxlczogWy4uLm5ld1B0aWxlc11cclxuICAgICAgfTtcclxuICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgIHNldFNxdWFyZXMobmV3U3F1YXJlcyk7XHJcbiAgICAgIHNldFVzZWRieShuZXdVc2VkYnkpO1xyXG4gICAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgICAgc2V0UmVzY3VlcyhuZXdSZXNjdWVzKTtcclxuICAgICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgICBzZXRTbmFwc2hvdChuZXdTbmFwc2hvdCk7XHJcbiAgICAgIC8vIEp1c3Qgc2VuZCBldmVyeXRoaW5nIGV2ZW4gdGhvdWdoIHNvbWUgY291bGQgYmUgaGFyZCBjb2RlZCBpbiBwcm9jZXNzTWVzc2FnZSBieSBvcHBvbmVudFxyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IFwidW5kb3R1cm5cIiwgLy8gdW5kbyBsYXN0IHR1cm5cclxuICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsXHJcbiAgICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHRpbGUgcG9vbFxyXG4gICAgICAgICAgcHRpbGVzOiBuZXdQdGlsZXMsIC8vIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgICBndGlsZXM6IG5ld0d0aWxlcywgLy8gZ3VhcmRzIHJhY2tcclxuICAgICAgICAgIHNxdWFyZXM6IG5ld1NxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICAgIHVzZWRieTogbmV3VXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gc3dhcCBuZXZlciBlbmRzIHRoZSBnYW1lIHNvIGdvIHRvIG9wcG9uZW50XHJcbiAgICAgICAgICByZXNjdWVzOiBuZXdSZXNjdWVzLCAvLyByZXNjdWUgY291bnRcclxuICAgICAgICAgIG1vdmVzOiBuZXdNb3ZlcywgLy8gYSBtb3ZlIHdhcyBtYWRlXHJcbiAgICAgICAgICBzbmFwc2hvdDogbmV3U25hcHNob3RcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgcmVjYWxsVGlsZXMgPSAoKSA9PiB7XHJcbiAgICAgIHNldFNxdWFyZXMoWy4uLnNuYXBzaG90LnNxdWFyZXNdKTtcclxuICAgICAgc2V0VXNlZGJ5KFsuLi5zbmFwc2hvdC51c2VkYnldKTtcclxuICAgICAgc2V0UHRpbGVzKFsuLi5zbmFwc2hvdC5wdGlsZXNdKTtcclxuICAgICAgc2V0R3RpbGVzKFsuLi5zbmFwc2hvdC5ndGlsZXNdKTtcclxuICAgICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICAgIHNldFJjZChbLTEsLTEsbm9kaXJlY3Rpb25dKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBwcmlzb25lclBhc3MgPSAoKSA9PiB7XHJcbiAgICAgIGxldCByZXdpbmRJbmZvID0gZ2V0UmV3aW5kSW5mbygpO1xyXG4gICAgICBsZXQgbmV3TW92ZSA9IHtieTogYy5QQVJUWV9UWVBFX1BSSVNPTkVSUywgdHlwZTogYy5NT1ZFX1RZUEVfUEFTUywgcmV3aW5kSW5mbzogcmV3aW5kSW5mb307XHJcbiAgICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICAgIGxldCBuZXdXaG9zZXR1cm4gPSBpc0RvdWJsZVBhc3MobmV3TW92ZXMpID8gYy5XSE9TRV9UVVJOX0dBTUVPVkVSIDogYy5XSE9TRV9UVVJOX0dVQVJEUzsgLy8gSWYgYm90aCBwbGF5ZXJzIHBhc3MgdGhlbiBlbmQgdGhlIGdhbWVcclxuICAgICAgcmVjYWxsVGlsZXMoKTsgLy8gSW4gY2FzZSB0aGV5IHB1dCBzb21lIHRpbGVzIG9uIHRoZSBib2FyZCBiZWZvcmUgY2xpY2tpbmcgUGFzc1xyXG4gICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IFwiZXB0XCIsIC8vIGVuZCBwcmlzb25lcnMgdHVyblxyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgICBwdGlsZXM6IHNuYXBzaG90LnB0aWxlcywgLy8gcHJpc29uZXJzIHJhY2sgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICAgIHRpbGVzOiB0aWxlcywgLy8gdGlsZSBwb29sIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gbWF5IGhhdmUgZW5kZWQgdGhlIGdhbWVcclxuICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgIG1vdmVzOiBuZXdNb3ZlcywgLy8gYSBtb3ZlIHdhcyBtYWRlXHJcbiAgICAgICAgICByZXNjdWVzOiByZXNjdWVzIC8vIG5vIHJlc2N1ZXMgb24gYSBwYXNzXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IGd1YXJkc1Bhc3MgPSAoKSA9PiB7XHJcbiAgICAgIGxldCByZXdpbmRJbmZvID0gZ2V0UmV3aW5kSW5mbygpO1xyXG4gICAgICBsZXQgbmV3TW92ZSA9IHtieTogYy5QQVJUWV9UWVBFX0dVQVJEUywgdHlwZTogYy5NT1ZFX1RZUEVfUEFTUywgcmV3aW5kSW5mbzogcmV3aW5kSW5mb307XHJcbiAgICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICAgIGxldCBuZXdXaG9zZXR1cm4gPSBpc0RvdWJsZVBhc3MobmV3TW92ZXMpID8gYy5XSE9TRV9UVVJOX0dBTUVPVkVSIDogYy5XSE9TRV9UVVJOX1BSSVNPTkVSUzsgLy8gSWYgYm90aCBwbGF5ZXJzIHBhc3MgdGhlbiBlbmQgdGhlIGdhbWVcclxuICAgICAgcmVjYWxsVGlsZXMoKTsgLy8gSW4gY2FzZSB0aGV5IHB1dCBzb21lIHRpbGVzIG9uIHRoZSBib2FyZCBiZWZvcmUgY2xpY2tpbmcgUGFzc1xyXG4gICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgICBndGlsZXM6IHNuYXBzaG90Lmd0aWxlcywgLy8gZ3VhcmRzIHJhY2sgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICAgIHRpbGVzOiB0aWxlcywgLy8gdGlsZSBwb29sIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gbWF5IGhhdmUgZW5kZWQgdGhlIGdhbWVcclxuICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgIG1vdmVzOiBuZXdNb3ZlcyAvLyBhIG1vdmUgd2FzIG1hZGVcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gaXNEb3VibGVQYXNzKG1vdmVsaXN0KSB7XHJcbiAgICAgICAgbGV0IGxhc3QgPSBtb3ZlbGlzdC5sZW5ndGggLSAxO1xyXG4gICAgICAgIGxldCBzZWNvbmRsYXN0ID0gbGFzdCAtIDE7XHJcbiAgICAgICAgcmV0dXJuIHNlY29uZGxhc3QgPiAtMSAmJlxyXG4gICAgICAgICAgbW92ZWxpc3Rbc2Vjb25kbGFzdF0udHlwZSA9PT0gYy5NT1ZFX1RZUEVfUEFTUyAmJlxyXG4gICAgICAgICAgbW92ZWxpc3RbbGFzdF0udHlwZSA9PT0gYy5NT1ZFX1RZUEVfUEFTUztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXF1ZXN0R2FtZURhdGEgPSAoKSA9PiB7XHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgIHdob3NldHVybjogd2hvc2V0dXJuLCAvLyBmb3IgbG9iYnkgdG8gcGljayB1cCB0aGlzIG1lc3NhZ2VcclxuICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgIGZ1bmM6IFwicmVxdWVzdGdhbWVkYXRhXCIgLy8gcmVxdWVzdCBnYW1lIGRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmIChwYXJ0aWNpcGFudCAhPT0gd2hvc2V0dXJuKSB7cmV0dXJuO31cclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTID8gZW5kUHJpc29uZXJzVHVybigpIDogZW5kR3VhcmRzVHVybigpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgcmVjYWxsVGlsZXMoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGxldHRlcnRlc3QgPSAvXltBLVphLXpcXD9dJC87IC8vIHNpbmdsZSBsZXR0ZXIgb3IgcXVlc3Rpb24gbWFyayBrZXkgcHJlc3NlZFxyXG4gICAgICBpZiAoZXZlbnQua2V5Lm1hdGNoKGxldHRlcnRlc3QpKSB7XHJcbiAgICAgICAgbGV0IGxldHRlciA9IGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIGxldCByYWNrID0gd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTID8gcHRpbGVzIDogZ3RpbGVzO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3Rpb24gPSByYWNrLmluZGV4T2YobGV0dGVyKTtcclxuICAgICAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMSkge1xyXG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gcmFjay5pbmRleE9mKFwiP1wiKTsgLy8gVXNlIHRoZSBibGFuayBpZiB0aGV5IGhhdmUgb25lXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuZXdTZWxlY3Rpb24gPiAtMSkgeyAvLyBQcmVzc2VkIGxldHRlciBpcyBvbiB0aGUgcmFja1xyXG4gICAgICAgICAgbGV0IHJvdyA9IHJjZFswXTtcclxuICAgICAgICAgIGxldCBjb2wgPSByY2RbMV07XHJcbiAgICAgICAgICBsZXQgZGlyID0gcmNkWzJdO1xyXG4gICAgICAgICAgaWYgKHJvdyA+LTEgJiYgY29sID4gLTEgJiYgZGlyICE9PSBub2RpcmVjdGlvbikgeyAvLyByb3csIGNvbCwgZGlyIGFyZSBzZXQgdG8gYWNjZXB0IGtleXN0cm9rZVxyXG4gICAgICAgICAgICAvLyBOZWVkIHRvIGZpZ3VyZSBvdXQgbmV4dCBzcWF1cmUgdG8gYXV0by1wbGFjZSBhIHRpbGVcclxuICAgICAgICAgICAgbGV0IG5ld1JjZCA9IHJjZDtcclxuICAgICAgICAgICAgaWYgKGRpciA9PT0gXCJyXCIpIHsgLy8gcGxheWluZyByaWdodHdhcmRzXHJcbiAgICAgICAgICAgICAgbGV0IG5ld2MgPSAtMTtcclxuICAgICAgICAgICAgICBmb3IgKHZhciBjID0gY29sICsgMTsgYyA8IGVkZ2UgKyAxICYmIG5ld2MgPT09IC0xOyBjKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzcXVhcmVzW3Jvd11bY10gPT09IGMuU1FVQVJFX1VOVVNFRCkge25ld2MgPSBjO31cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKG5ld2MgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSY2QgPSBbLTEsLTEsbm9kaXJlY3Rpb25dO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSY2QgPSBbcm93LCBuZXdjLCBcInJcIl07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socm93LGNvbCxuZXdTZWxlY3Rpb24sbmV3UmNkKTtcclxuICAgICAgICAgICAgICBzZXRTZWxlY3Rpb24oLTEpOyAvLyB3aGVuIHRoZXkgYXJlIHR5cGluZyB0aGV5IGFyZSBub3Qgc2VsZWN0aW5nIHJhY2sgdGlsZXMgYnkgY2xpY2tpbmcgdGhlbSBvbiB0aGUgcmFja1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGlyID09PSBcImRcIikgeyAvLyBwbGF5aW5nIGRvd253YXJkc1xyXG4gICAgICAgICAgICAgIGxldCBuZXdyID0gLTE7XHJcbiAgICAgICAgICAgICAgbGV0IG51bXJvd3MgPSAocmFja3NpemUqMikrMTtcclxuICAgICAgICAgICAgICBmb3IgKHZhciByID0gcm93ICsgMTsgciA8IG51bXJvd3MgJiYgbmV3ciA9PT0gLTE7IHIrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZXNbcl1bY29sXSA9PT0gYy5TUVVBUkVfVU5VU0VEKSB7bmV3ciA9IHI7fVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAobmV3ciA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIG5ld1JjZCA9IFstMSwtMSxub2RpcmVjdGlvbl07XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1JjZCA9IFtuZXdyLCBjb2wsIFwiZFwiXTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyb3csY29sLG5ld1NlbGVjdGlvbixuZXdSY2QpO1xyXG4gICAgICAgICAgICAgIHNldFNlbGVjdGlvbigtMSk7IC8vIHdoZW4gdGhleSBhcmUgdHlwaW5nIHRoZXkgYXJlIG5vdCBzZWxlY3RpbmcgcmFjayB0aWxlcyBieSBjbGlja2luZyB0aGVtIG9uIHRoZSByYWNrXHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkJhY2tzcGFjZVwiICYmIGN1cnJlbnRjb29yZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vIFNhbWUgYXMgY2xpY2tpbmcgb24gYSBwbGF5ZWQtdGhpcy1tb3ZlIHRpbGUgaW4gdGVybXMgb2YgcmV0dXJuaW5nIHRoZSB0aWxlIHRvIHRoZSByYWNrXHJcbiAgICAgICAgLy8gSG93ZXZlciB3ZSBhbHNvIHdhbnQgdG8gc2V0IHVwIHJjZCBzbyB0aGV5IGNhbiBwcmVzcyB0aGUga2V5IHRoZXkgbWVhbnQgYW5kIGNvbnRpbnVlXHJcbiAgICAgICAgbGV0IGNvb3JkID0gY3VycmVudGNvb3Jkc1tjdXJyZW50Y29vcmRzLmxlbmd0aCAtIDFdOyAvLyB0aWxlIHRvIHJldHVybiB0byByYWNrXHJcbiAgICAgICAgbGV0IG5ld0N1cnJlbnRjb29yZHMgPSBbLi4uY3VycmVudGNvb3Jkc107XHJcbiAgICAgICAgbGV0IG5ld1B0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgICAgICBsZXQgbmV3VXNlZGJ5ID0gWy4uLnVzZWRieV07XHJcbiAgICAgICAgbGV0IG5ld1NxdWFyZXMgPSBbLi4uc3F1YXJlc107XHJcbiAgICAgICAgbGV0IG5ld1JjZCA9IFstMSwtMSxub2RpcmVjdGlvbl07XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGlvbiA9IHNlbGVjdGlvbjtcclxuICAgICAgICBuZXdDdXJyZW50Y29vcmRzLnNwbGljZShjdXJyZW50Y29vcmRzLmxlbmd0aC0xLDEpO1xyXG4gICAgICAgIGxldCByb3cgPSBwYXJzZUludChjb29yZC5zcGxpdChcIi1cIilbMF0pO1xyXG4gICAgICAgIGxldCBjb2wgPSBwYXJzZUludChjb29yZC5zcGxpdChcIi1cIilbMV0pO1xyXG4gICAgICAgIGxldCByZXR1cm5lZFRpbGUgPSBzcXVhcmVzW3Jvd11bY29sXTtcclxuICAgICAgICBpZiAod2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTKSB7XHJcbiAgICAgICAgICBuZXdQdGlsZXMucHVzaChyZXR1cm5lZFRpbGUpO1xyXG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3UHRpbGVzLmxlbmd0aC0xO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXdHdGlsZXMucHVzaChyZXR1cm5lZFRpbGUpO1xyXG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3R3RpbGVzLmxlbmd0aC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdVc2VkYnlbcm93XVtjb2xdID0gdXNlZGJ5bm9vbmU7XHJcbiAgICAgICAgbmV3U3F1YXJlc1tyb3ddW2NvbF0gPSBjLlNRVUFSRV9VTlVTRUQ7XHJcbiAgICAgICAgbGV0IGRpciA9IHJjZFsyXTtcclxuICAgICAgICBpZiAoZGlyICE9PSBub2RpcmVjdGlvbikge1xyXG4gICAgICAgICAgLy8gZGlyZWN0aW9uIHdhcyBzZXQgc28ga2VlcCBpdFxyXG4gICAgICAgICAgbmV3UmNkID0gW3Jvdyxjb2wsZGlyXTtcclxuICAgICAgICAgIGlmIChjdXJyZW50Y29vcmRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3Rpb24gPSAtMTsgLy8gaWYgdGhleSBiYWNrc3BhY2UgYWxsIHRoZSBsZXR0ZXJzIG9mZiBsZWF2ZSByYWNrIHRpbGUgdW5zZWxlY3RlZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKG5ld0N1cnJlbnRjb29yZHMpO1xyXG4gICAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICAgIHNldFNxdWFyZXMobmV3U3F1YXJlcyk7XHJcbiAgICAgICAgc2V0VXNlZGJ5KG5ld1VzZWRieSk7XHJcbiAgICAgICAgc2V0UmNkKG5ld1JjZCk7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpc29uYnJlYWtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktY29udGFpbmVyIHczLXRlYWwgdG9wQmFySGVpZ2h0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktbWlkZGxlXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJteUhlYWRpbmdGb250XCI+UHJpc29uIEJyZWFrPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LXRvcGxlZnQgdzMtYmxhY2sgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgR2FtZSBpZDoge2dhbWVpZH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWJvdHRvbWxlZnQgdzMtb3JhbmdlIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIFByaXNvbmVyczoge3BhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gbmlja25hbWUgOiBvcHBuYW1lfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktdG9wcmlnaHQgdzMtYmxhY2sgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIuLi8uLi9cIn0+XHJcbiAgICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktYm90dG9tcmlnaHQgdzMtb3JhbmdlIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIEd1YXJkczoge3BhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gb3BwbmFtZSA6IG5pY2tuYW1lfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBiVGlsZUFuZE1vdmVzT3V0ZXJcIj5cclxuICAgICAgICAgICAgICA8U2hvd1Vuc2VlblRpbGVzIHRpbGVzPXt0aWxlc30gb3RoZXJ0aWxlcz17cGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBndGlsZXMgOiBwdGlsZXN9Lz5cclxuICAgICAgICAgICAgICA8U2hvd01vdmVzIG1vdmVzPXttb3Zlc30vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwYlBsYXllck91dGVyU2VjdGlvblwiPlxyXG4gICAgICAgICAgICB7cGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgP1xyXG4gICAgICAgICAgICAgIDxQbGF5ZXJTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICByYWNrdGlsZXM9e3B0aWxlc31cclxuICAgICAgICAgICAgICAgIHdob3NldHVybj17d2hvc2V0dXJufVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IGhhbmRsZVJhY2tUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja0ZpbmlzaFR1cm49eygpID0+IGVuZFByaXNvbmVyc1R1cm4oKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tUaWxlUmVjYWxsPXsoKSA9PiByZWNhbGxUaWxlcygpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1RpbGVFeGNoYW5nZT17KCkgPT4gc3dhcFByaXNvbmVyc1RpbGVzKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrUGFzc1BsYXk9eygpID0+IHByaXNvbmVyUGFzcygpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1VuZG9MYXN0UGxheT17KCkgPT4gcGVyZm9ybVJld2luZCgpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja0FsbG93VW5kbz17KCkgPT4gYWxsb3dVbmRvTGFzdFR1cm4oKX1cclxuICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50PXtwYXJ0aWNpcGFudH1cclxuICAgICAgICAgICAgICAgIG1vdmVzPXttb3Zlc31cclxuICAgICAgICAgICAgICAgIGFsbG93UmV3aW5kPXthbGxvd1Jld2luZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgPFBsYXllclNlY3Rpb25cclxuICAgICAgICAgICAgICAgIHJhY2t0aWxlcz17Z3RpbGVzfVxyXG4gICAgICAgICAgICAgICAgd2hvc2V0dXJuPXt3aG9zZXR1cm59XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb249e3NlbGVjdGlvbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyh0aSkgPT4gaGFuZGxlUmFja1RpbGVDbGljayh0aSl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrRmluaXNoVHVybj17KCkgPT4gZW5kR3VhcmRzVHVybigpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1RpbGVSZWNhbGw9eygpID0+IHJlY2FsbFRpbGVzKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrVGlsZUV4Y2hhbmdlPXsoKSA9PiBzd2FwR3VhcmRzVGlsZXMoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tQYXNzUGxheT17KCkgPT4gZ3VhcmRzUGFzcygpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1VuZG9MYXN0UGxheT17KCkgPT4gcGVyZm9ybVJld2luZCgpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja0FsbG93VW5kbz17KCkgPT4gYWxsb3dVbmRvTGFzdFR1cm4oKX1cclxuICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50PXtwYXJ0aWNpcGFudH1cclxuICAgICAgICAgICAgICAgIG1vdmVzPXttb3Zlc31cclxuICAgICAgICAgICAgICAgIGFsbG93UmV3aW5kPXthbGxvd1Jld2luZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIHtwYXJ0aWNpcGFudCA9PT0gd2hvc2V0dXJuID9cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIG9uS2V5RG93bkNhcHR1cmU9e2hhbmRsZUtleURvd259PlxyXG4gICAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICAgIHNxdWFyZXM9e3NxdWFyZXN9XHJcbiAgICAgICAgICAgICAgICAgIHVzZWRieT17dXNlZGJ5fVxyXG4gICAgICAgICAgICAgICAgICByY2Q9e3JjZH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KHJpLCBjaSkgPT4gaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyaSwgY2ksIC0xLG51bGwpfVxyXG4gICAgICAgICAgICAgICAgICByYWNrc2l6ZT17cmFja3NpemV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICAgICAgICBzcXVhcmVzPXtzcXVhcmVzfVxyXG4gICAgICAgICAgICAgICAgICB1c2VkYnk9e3VzZWRieX1cclxuICAgICAgICAgICAgICAgICAgcmNkPXtyY2R9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt9fVxyXG4gICAgICAgICAgICAgICAgICByYWNrc2l6ZT17cmFja3NpemV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDxTaG93UmVzY3VlcyByZXNjdWVzPXtyZXNjdWVzfSAvPlxyXG4gICAgICAgICAgICA8Q2hhdCBnYW1laWQ9e2dhbWVpZH0gY2xpZW50PXtjbGllbnR9IG5pY2tuYW1lPXtuaWNrbmFtZX0gbXNncz17Y2hhdG1zZ3N9IHNldE1zZ3M9e3NldENoYXRtc2dzfSBwYXJ0aWNpcGFudD17cGFydGljaXBhbnR9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1jb250YWluZXIgdzMtdGVhbCB0b3BCYXJIZWlnaHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1taWRkbGUgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICB7d2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fR0FNRU9WRVIgP1xyXG4gICAgICAgICAgICAgIDxoMT5HYW1lIE92ZXIhPC9oMT5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIDxwPntqb2tlc1tqb2tlaW5kZXhdfTwvcD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IFNob3dSZXNjdWVzID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUmVzY3Vlc01hZGVcIj5cclxuICAgICAgICBSZXNjdWVzIG1hZGU6IHtwcm9wcy5yZXNjdWVzfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCBDaGF0ID0gKHtnYW1laWQsIGNsaWVudCwgbmlja25hbWUsIG1zZ3MsIHNldE1zZ3MsIHBhcnRpY2lwYW50fSkgPT4ge1xyXG4gICAgY29uc3QgW25leHRtc2csIHNldE5leHRtc2ddID0gdXNlU3RhdGUoJycpO1xyXG4gICBcclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiICYmIG5leHRtc2cubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IG5ld01zZ3MgPSBbLi4ubXNncywge2Zyb206IG5pY2tuYW1lLCBtc2c6IG5leHRtc2d9XVxyXG4gICAgICAgIGxldCBzZW5kbXNnID0gbmV4dG1zZztcclxuICAgICAgICBzZXRNc2dzKG5ld01zZ3MpO1xyXG4gICAgICAgIHNldE5leHRtc2coJycpO1xyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICAgIGZ1bmM6IFwiY2hhdFwiLCAvLyBzZW5kIGNoYXQgbWVzc2FnZVxyXG4gICAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LCAvLyB3aG8gc2VudCBpdFxyXG4gICAgICAgICAgICBzZW5kbXNnOiBzZW5kbXNnIC8vIHRoZSBtZXNzYWdlIHR5cGVkIGluIHRoZSBjaGF0XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGxldCBjaGFydGVzdCA9IC9eW0EtWmEtejAtOSBcXC4sXFwoXFwpXFw/OiEnXCJdJC87IC8vIEFsbG93IGxldHRlciwgbnVtYmVyLCBzcGFjZSwgcGVyaW9kLCBjb21tYSwgcm91bmQgYnJhY2tldHMsIHF1ZXN0aW9uIG1hcmssIGNvbG9uLCBleGNsYW1hdGlvbiBtYXJrLCBxdW90ZSwgZG91YmxlIHF1b3RlXHJcbiAgICAgIC8vIGlmIChldmVudC5rZXkubWF0Y2goY2hhcnRlc3QpKSB7XHJcbiAgICAgIC8vICAgbGV0IG5ld05leHRtc2cgPSBuZXh0bXNnICsgZXZlbnQua2V5O1xyXG4gICAgICAvLyAgIHNldE5leHRtc2cobmV3TmV4dG1zZyk7XHJcbiAgICAgIC8vIH1cclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJCYWNrc3BhY2VcIiAmJiBuZXh0bXNnLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBuZXdOZXh0bXNnID0gbmV4dG1zZy5zbGljZSgwLG5leHRtc2cubGVuZ3RoLTEpO1xyXG4gICAgICAgIHNldE5leHRtc2cobmV3TmV4dG1zZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJTY3JvbGxhYmxlQ2hhdFwiIGNsYXNzTmFtZT1cInBiQ2hhdFwiPlxyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJwYkNoYXRUYWJsZVwiPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7bXNncy5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2BDaGF0TWVzc2FnZSR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJDaGF0RnJvbVwiPnt2YWx1ZS5mcm9tfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJDaGF0TXNnXCI+e3ZhbHVlLm1zZ308L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCIyXCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPXtuZXh0bXNnID09PSBcIlwiID8gXCJwYkNoYXRJbnB1dEVtcHR5XCIgOiBcInBiQ2hhdElucHV0XCJ9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJuZXh0bXNnSW5wdXRBcmVhXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e25leHRtc2d9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3NldE5leHRtc2coZS50YXJnZXQudmFsdWUpO319XHJcbiAgICAgICAgICAgICAgICAgIG9uS2V5RG93bkNhcHR1cmU9e2hhbmRsZUtleURvd259XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY2hhdC4uLlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IHNjcm9sbFRvQm90dG9tID0gKGVsZW1lbnRpZCkgPT4ge1xyXG4gICAgY29uc3QgdGhlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRpZCk7XHJcbiAgICB0aGVFbGVtZW50LnNjcm9sbFRvcCA9IHRoZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgR2FtZTsiXSwic291cmNlUm9vdCI6IiJ9