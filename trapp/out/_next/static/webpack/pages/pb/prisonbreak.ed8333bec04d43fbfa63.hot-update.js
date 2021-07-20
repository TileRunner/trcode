self["webpackHotUpdate_N_E"]("pages/pb/prisonbreak",{

/***/ "./pages/pb/game.js":
/*!**************************!*\
  !*** ./pages/pb/game.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pb_playerSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pb/playerSection */ "./pages/pb/playerSection.js");
/* harmony import */ var _pb_board__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pb/board */ "./pages/pb/board.js");
/* harmony import */ var _pb_unseenTilesSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pb/unseenTilesSection */ "./pages/pb/unseenTilesSection.js");
/* harmony import */ var _pb_movesSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pb/movesSection */ "./pages/pb/movesSection.js");
/* harmony import */ var _pb_rescuesSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pb/rescuesSection */ "./pages/pb/rescuesSection.js");
/* harmony import */ var _pb_chatSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pb/chatSection */ "./pages/pb/chatSection.js");
/* harmony import */ var _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/pb/prisonBreakConstants */ "./lib/pb/prisonBreakConstants.js");
/* harmony import */ var _lib_pb_initialSquareArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/pb/initialSquareArray */ "./lib/pb/initialSquareArray.js");
/* harmony import */ var _lib_pb_anyUnusedEscapeHatches__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib/pb/anyUnusedEscapeHatches */ "./lib/pb/anyUnusedEscapeHatches.js");
/* harmony import */ var _lib_pb_buildGamedataFromApidata__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../lib/pb/buildGamedataFromApidata */ "./lib/pb/buildGamedataFromApidata.js");
/* harmony import */ var _lib_pb_isDoublePass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../lib/pb/isDoublePass */ "./lib/pb/isDoublePass.js");
/* harmony import */ var _lib_scrollToBottom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../lib/scrollToBottom */ "./lib/scrollToBottom.js");
/* harmony import */ var _lib_usePrevious__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../lib/usePrevious */ "./lib/usePrevious.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\pb\\game.js",
    _s = $RefreshSig$();

















const Game = ({
  isrejoin,
  participant // Prisoners, Guards, or Observer (not implemented)
  ,
  gameid,
  nickname,
  wsmessage,
  client,
  racksize = 4 // Option for rack size (give it a default for Build)

}) => {
  _s();

  const {
    0: syncstamp,
    1: setSyncstamp
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const middle = racksize; // Middle element in row or column array

  const edge = racksize * 2; // Last element in row or column array

  const initialtiles = racksize === 6 ? _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.TILEBAG6 : racksize === 7 ? _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.TILEBAG7 : racksize === 5 ? _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.TILEBAG5 : _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.TILEBAG4;
  const {
    0: tiles,
    1: setTiles
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([...initialtiles]);
  const {
    0: ptiles,
    1: setPtiles
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: gtiles,
    1: setGtiles
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: squareArray,
    1: setSquareArray
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: selection,
    1: setSelection
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1); // relative to rack of player making a play

  const {
    0: whoseturn,
    1: setWhoseturn
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_PRISONERS); // game starts with prisoners play

  const {
    0: currentcoords,
    1: setCurrentcoords
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: rescues,
    1: setRescues
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: rcd,
    1: setRcd
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([-1, -1, _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.DIR_NONE]);
  const {
    0: moves,
    1: setMoves
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // move history, each element is the array is a json object of info about the move

  const {
    0: snapshot,
    1: setSnapshot
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    squareArray: [],
    ptiles: [],
    gtiles: []
  });
  const {
    0: jokeindex,
    1: setJokeindex
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: allowRewind,
    1: setAllowRewind
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: oppname,
    1: setOppname
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: chatmsgs,
    1: setChatmsgs
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const prevRescues = (0,_lib_usePrevious__WEBPACK_IMPORTED_MODULE_15__.usePrevious)(rescues);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // This code executes the first time Game is used only
    initializeRoutine();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let msg = wsmessage;
    if (msg !== '') processGameMessage(msg);
  }, [wsmessage]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_lib_scrollToBottom__WEBPACK_IMPORTED_MODULE_14__.scrollToBottom)("ScrollableMoves");
  }, [moves]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_lib_scrollToBottom__WEBPACK_IMPORTED_MODULE_14__.scrollToBottom)("ScrollableChat");
  }, [chatmsgs]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (rescues > prevRescues) {
      var myaudio = document.createElement('audio'); // Observers hear yippee

      myaudio.src = participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_GUARDS ? "https://tilerunner.github.io/OneGotAway.m4a" : "https://tilerunner.github.io/yippee.m4a";
      myaudio.play();
    }
  }, [rescues]); // Play a sound when a rescue is made

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let newji = jokeindex + 1;

    if (newji >= _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.JOKE_ARRAY.length) {
      newji = 0;
    }

    setJokeindex(newji);
  }, [whoseturn]); // want up to date value of whoseturn to decide whether to ask for an update

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const interval = setInterval(() => {
      if (participant !== whoseturn && whoseturn !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_GAMEOVER) {
        requestSyncData(); // Send a request for sync data when waiting for their move
      } // Send a request for the timestamp of the last event (syncstamp)
      // Server will send func=providesyncstamp with a syncstamp value
      // ProcessGameMessage will check syncstamp from the server to syncstamp here
      // If different it will send func=requestgamedata, server will send us providegamedata, and we sync

    }, _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PING_INTERVAL); // this many milliseconds between above code block executions

    return () => clearInterval(interval);
  });

  const initializeRoutine = () => {
    let firstSquareArray = (0,_lib_pb_initialSquareArray__WEBPACK_IMPORTED_MODULE_10__.initialSquareArray)(racksize);
    setSquareArray(firstSquareArray);

    if (isrejoin) {
      rejoinGame();
    } else if (participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS) {
      startGame(firstSquareArray); // Prisoners starting the game
    } else if (participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_GUARDS) {
      joinGame(); // Guards joining the game
    } else {
      startObservingGame(); // Observer viewing the game
    }
  };

  const startGame = firstSquareArray => {
    let newSyncstamp = Date.now();
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
    setSyncstamp(newSyncstamp);
    setGtiles(tempGTiles);
    setPtiles(tempPTiles);
    setTiles(tempTiles);
    setSnapshot({
      squareArray: firstSquareArray,
      ptiles: [...tempPTiles],
      gtiles: [...tempGTiles]
    });
    client.send({
      type: "pb",
      func: "startgame",
      gameid: gameid,
      // Game id
      timestamp: newSyncstamp,
      // For telling server my last data timestamp
      racksize: racksize,
      // Rack size option
      sender: participant,
      // This will be prisoners since prisoners start the game
      pname: nickname,
      // This will be the prisoners nickname since prisoners are sending this
      tiles: tempTiles,
      // Tile bag after first racks selected
      ptiles: tempPTiles,
      // Prisoners first rack
      gtiles: tempGTiles // Guards first rack

    });
  };

  const joinGame = () => {
    client.send({
      gameid: gameid,
      // the id for the game
      gname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      func: "joingame",
      // join the game
      sender: participant // this will eb guards

    });
  };

  const rejoinGame = () => {
    client.send({
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      func: "rejoingame",
      // join the game
      sender: participant // could be either player

    });
  };

  const startObservingGame = () => {
    client.send({
      gameid: gameid,
      type: "pb",
      func: "startObserving"
    });
  };

  function putAtMoveStart() {
    setSelection(-1);
    setAllowRewind(false);
    setRcd(-1, -1, _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.DIR_NONE);
    setCurrentcoords([]);
  }

  function processGameMessage(message) {
    let messageData = JSON.parse(message);

    if (messageData.gameid === gameid && messageData.type === "pb") {
      // This instance of a prison break game
      if (messageData.func === "providegamedata") {
        let gd = (0,_lib_pb_buildGamedataFromApidata__WEBPACK_IMPORTED_MODULE_12__.buildGamedataFromApidata)(messageData.apidata); // Server providing game data

        setSyncstamp(gd.syncstamp); // No opponent name for observers

        if (participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS) {
          setOppname(gd.gname);
        } else if (participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_GUARDS) {
          setOppname(gd.pname);
        }

        setTiles(gd.tiles);
        setSquareArray(gd.squareArray);
        setPtiles(gd.ptiles);
        setGtiles(gd.gtiles);
        setWhoseturn(gd.whoseturn);
        let newSnapshot = {
          squareArray: JSON.parse(JSON.stringify(gd.squareArray)),
          // Deep copy
          ptiles: [...gd.ptiles],
          gtiles: [...gd.gtiles]
        };
        setSnapshot(newSnapshot);
        setMoves(gd.moves);
        setRescues(gd.rescues);
        setAllowRewind(gd.allowRewind);
        putAtMoveStart();
      }

      if (messageData.func === "providegname") {
        if (participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TITLE_PRISONERS) {
          setOppname(messageData.gname);
        }
      }

      if (messageData.func === "allowundo") {
        // Opponent clicked button to allow undo turn
        setAllowRewind(true);
      }

      if (messageData.func === "chat") {
        // Server decided whether this chat was for me
        let newChatmsgs = [...chatmsgs, {
          from: messageData.nickname,
          msg: messageData.sendmsg
        }];
        setChatmsgs(newChatmsgs);
      }

      if (messageData.func === "providesyncdata") {
        // console.log(`providesyndata passed ${messageData.syncstamp} and I have ${syncstamp}`);
        if (messageData.syncstamp !== syncstamp) {
          console.log(`Out of sync - requesting latest game data`);
          requestGameData();
        }
      }
    }
  } // Calling setSelection (from handleKeyDown) then handleBoardSquareClick does not let it recognize selection with the new value
  // So I pass newSelection when I want to also set it, otherwise I pass -1 to instruct it to use current value of selection
  // Also passing newRcd


  const handleBoardSquareClick = (ri, ci, newSelection, newRcd) => {
    let newSquareArray = JSON.parse(JSON.stringify(squareArray)); // Deep copy

    let newSquareArrayRow = [...newSquareArray[ri]]; // The row of squares they clicked on

    let newSquareArrayCell = newSquareArrayRow[ci]; // The square in the row they clicked on

    let newPtiles = [...ptiles];
    let newGtiles = [...gtiles];
    let newCurrentcoords = [...currentcoords];
    let coord = String(ri) + "-" + String(ci);
    let cci = currentcoords.indexOf(coord);

    if (newSelection === -1) {
      newSelection = selection;
      newRcd = rcd;
    }

    if (newSelection > -1 && newSquareArrayCell.usedby === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE) {
      // tile is selected from rack and clicked square is not used yet
      let selectedTile = whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_PRISONERS ? newPtiles[newSelection] : newGtiles[newSelection];
      newSquareArrayCell.letter = selectedTile;
      newSquareArrayCell.usedby = whoseturn;
      newSquareArrayRow[ci] = newSquareArrayCell;
      newSquareArray[ri] = [...newSquareArrayRow];
      whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_PRISONERS ? newPtiles.splice(newSelection, 1) : newGtiles.splice(newSelection, 1);

      if (whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_PRISONERS && newSelection === newPtiles.length) {
        newSelection = newSelection - 1;
      }

      if (whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_GUARDS && newSelection === newGtiles.length) {
        newSelection = newSelection - 1;
      }

      setSelection(newSelection);
      setSquareArray(newSquareArray);
      setPtiles(newPtiles);
      setGtiles(newGtiles);
      setCurrentcoords([...currentcoords, coord]);
      setRcd(newRcd); // key down handler figured it out

      return;
    }

    if (cci > -1) {
      // clicked square has a tile on it from the current move in progress, so put it back on the player rack
      whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_PRISONERS ? newPtiles.push(newSquareArrayCell.letter) : newGtiles.push(newSquareArrayCell.letter);
      newSquareArrayCell.usedby = _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE;
      newSquareArrayCell.letter = _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.LETTER_NONE;
      newSquareArrayRow[ci] = newSquareArrayCell;
      newSquareArray[ri] = [...newSquareArrayRow];
      setSelection(whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_PRISONERS ? newPtiles.length - 1 : newGtiles.length - 1);
      newCurrentcoords.splice(cci, 1);
      setSquareArray(newSquareArray);
      setPtiles(newPtiles);
      setGtiles(newGtiles);
      setCurrentcoords(newCurrentcoords);
      setRcd(-1, -1, _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.DIR_NONE); // make player click again to set direction

      return;
    } // They didn't click a square to place a selected tile there
    // They didn't click a square to remove an existing tile


    if (newSquareArrayCell.usedby === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE) {
      // There is nothing on the square so they are picking where to place the next tile via keyboard
      let newDirection = rcd[0] !== ri || rcd[1] !== ci ? _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.DIR_RIGHT : //click new square, start with right
      rcd[2] === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.DIR_RIGHT ? _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.DIR_DOWN : //click same square that was right, change to down
      rcd[2] === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.DIR_DOWN ? _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.DIR_NONE : //click same square that was down, change to no direction
      _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.DIR_RIGHT; // click same square that was no direction, change to right

      newRcd = [ri, ci, newDirection];
      setRcd(newRcd);
      return;
    }
  };

  const handleRackTileClick = tileindex => {
    if (participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_OBSERVER) {
      return;
    } // If no tile is selected already then set the selection


    if (selection === -1) {
      setSelection(tileindex);
      return;
    } // If the same tile is already selected then unselect


    if (selection === tileindex) {
      setSelection(-1);
      return;
    } // A tile was already selected and they clicked another tile - move the tile


    let newrack = participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? [...ptiles] : [...gtiles];
    let movefrom = selection;
    let movetile = newrack[movefrom];
    let moveto = tileindex;
    newrack.splice(movefrom, 1); // remove tile from original selected position

    newrack.splice(moveto, 0, movetile); // insert moved tile at the newly selected position

    participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? setPtiles(newrack) : setGtiles(newrack);
    setSelection(-1);
  };

  async function endPrisonersTurn() {
    if (!isPlayValid()) {
      return;
    }

    let playinfo = await getPlayInfo();

    if (playinfo.invalidwords.length !== 0) {
      alert(`Invalid according to ENABLE2K lexicon: ${playinfo.invalidwords.join().replace(".", "?").toUpperCase()}`);
      return; // Do not apply the play
    }

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
    let newWhoseturn = newPtiles.length > 0 ? _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_GUARDS : _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_GAMEOVER;

    if (!(0,_lib_pb_anyUnusedEscapeHatches__WEBPACK_IMPORTED_MODULE_11__.anyUnusedEscapeHatches)(squareArray)) {
      newWhoseturn = _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_GAMEOVER; // No escape hatches left
    }

    let newMove = {
      by: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS,
      type: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.MOVE_TYPE_PLAY,
      mainword: playinfo.mainword,
      extrawords: playinfo.extrawords,
      pos: playinfo.pos
    };
    let newMoves = [...moves, newMove];
    let newSyncstamp = Date.now();
    putAtMoveStart();
    setSyncstamp(newSyncstamp);
    setWhoseturn(newWhoseturn);
    setPtiles(newPtiles);
    setTiles(newTiles);
    setMoves(newMoves);
    setRescues(newRescues);
    setSnapshot({
      squareArray: JSON.parse(JSON.stringify(squareArray)),
      // Deep copy
      ptiles: [...newPtiles],
      gtiles: [...gtiles]
    });
    client.send({
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      func: "ept",
      // end prisoners turn
      timestamp: newSyncstamp,
      // for data sync logic
      sender: participant,
      ptiles: newPtiles,
      // we picked new tiles for prisoners rack
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      whoseturn: newWhoseturn,
      // may have ended the game
      move: newMove,
      // the move that was made
      rescues: newRescues // may have rescued another prisoner

    });
  }

  ;

  async function endGuardsTurn() {
    if (!isPlayValid()) {
      return;
    }

    let playinfo = await getPlayInfo();

    if (playinfo.invalidwords.length !== 0) {
      alert(`Invalid according to ENABLE2K lexicon: ${playinfo.invalidwords.join().replace(".", "?").toUpperCase()}`);
      return; // Do not apply the play
    }

    let newGtiles = [...gtiles];
    let newTiles = [...tiles];

    while (newGtiles.length < racksize && newTiles.length > 0) {
      let rand = Math.floor(Math.random() * newTiles.length);
      newGtiles.push(newTiles[rand]);
      newTiles.splice(rand, 1);
    }

    newGtiles.sort();
    let snapsquarearray = JSON.parse(JSON.stringify(squareArray)); // Deep copy

    let snapptiles = [...ptiles];
    let snapgtiles = [...gtiles];
    let newWhoseturn = newGtiles.length > 0 ? _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_PRISONERS : _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_GAMEOVER;

    if (!(0,_lib_pb_anyUnusedEscapeHatches__WEBPACK_IMPORTED_MODULE_11__.anyUnusedEscapeHatches)(squareArray)) {
      newWhoseturn = _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_GAMEOVER; // No escape hatches left
    }

    let newMove = {
      by: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_GUARDS,
      type: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.MOVE_TYPE_PLAY,
      mainword: playinfo.mainword,
      extrawords: playinfo.extrawords,
      pos: playinfo.pos
    };
    let newMoves = [...moves, newMove];
    let newSyncstamp = Date.now();
    putAtMoveStart();
    setSyncstamp(newSyncstamp);
    setWhoseturn(newWhoseturn);
    setGtiles(newGtiles);
    setTiles(newTiles);
    setMoves(newMoves);
    setSnapshot({
      squareArray: snapsquarearray,
      ptiles: snapptiles,
      gtiles: snapgtiles
    });
    client.send({
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      func: "egt",
      // end guards turn
      timestamp: newSyncstamp,
      // for data sync logic
      sender: participant,
      gtiles: newGtiles,
      // we picked new tiles for guards rack
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      move: newMove,
      // the move that was made
      whoseturn: newWhoseturn,
      // may have ended the game
      racksize: racksize // rack size option (lobby needs to know for when guards join game and they call Game)

    });
  }

  ;

  const swapPrisonersTiles = () => {
    if (tiles.length < racksize) {
      window.alert("Need " + racksize + " tiles in the bag to exchange");
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
    let newMove = {
      by: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS,
      type: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.MOVE_TYPE_SWAP
    };
    let newMoves = [...moves, newMove];
    let newSyncstamp = Date.now();
    putAtMoveStart();
    setSyncstamp(newSyncstamp);
    setSquareArray(JSON.parse(JSON.stringify(snapshot.squareArray))); // Deep copy

    setWhoseturn(_lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_GUARDS);
    setPtiles(newPtiles);
    setTiles(newTiles);
    setMoves(newMoves);
    setSnapshot({
      squareArray: JSON.parse(JSON.stringify(snapshot.squareArray)),
      // Deep copy
      ptiles: [...newPtiles],
      gtiles: [...gtiles]
    });
    client.send({
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      func: "ept",
      // end prisoners turn
      timestamp: newSyncstamp,
      // for data sync logic
      sender: participant,
      whoseturn: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_GUARDS,
      // swap never ends the game so go to opponent
      ptiles: newPtiles,
      // we picked new tiles for prisoners rack
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      move: newMove // the move that was made

    });
  };

  const swapGuardsTiles = () => {
    if (tiles.length < racksize) {
      window.alert("Need " + racksize + " tiles in the bag to exchange");
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
    let newMove = {
      by: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_GUARDS,
      type: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.MOVE_TYPE_SWAP
    };
    let newMoves = [...moves, newMove];
    let newSyncstamp = Date.now();
    putAtMoveStart();
    setSyncstamp(newSyncstamp);
    setSquareArray(JSON.parse(JSON.stringify(snapshot.squareArray))); // Deep copy

    setWhoseturn(_lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_PRISONERS);
    setGtiles(newGtiles);
    setTiles(newTiles);
    setMoves(newMoves);
    setSnapshot({
      squareArray: JSON.parse(JSON.stringify(snapshot.squareArray)),
      // Deep copy
      ptiles: [...ptiles],
      gtiles: [...newGtiles]
    });
    client.send({
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      func: "egt",
      // end guards turn
      timestamp: newSyncstamp,
      // for data sync logic
      sender: participant,
      whoseturn: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_PRISONERS,
      // swap never ends the game so go to opponent
      gtiles: newGtiles,
      // we picked new tiles for prisoners rack
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      move: newMove // the move that was made

    });
  };

  function isPlayValid() {
    // Check if this is the first word since it affects the validity rules
    let firstWord = true;
    let nummoves = moves.length;

    for (var moveindex = 0; firstWord && moveindex < nummoves; ++moveindex) {
      if (moves[moveindex].type === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.MOVE_TYPE_PLAY) {
        firstWord = false;
      }
    } // First word must hit center square


    if (firstWord && squareArray[middle][middle].usedby === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE) {
      window.alert("First play must hit center square");
      return false;
    } // At least 1 tile must be played


    if (currentcoords.length === 0) {
      window.alert("You didn't play any tiles");
      return false;
    }
    /* Go through each played tile
        Make sure it is not isolated from all the other tiles
        Determine the lowest and highest row and column numbers of tiles played this move
    */


    let numcoords = currentcoords.length;
    let lowrow = edge + 1;
    let highrow = -1;
    let lowcol = edge + 1;
    let highcol = -1;

    for (var coord = 0; coord < numcoords; ++coord) {
      // Each tile played this move
      let temprow = parseInt(currentcoords[coord].split("-")[0]);
      let tempcol = parseInt(currentcoords[coord].split("-")[1]);

      if (temprow < lowrow) {
        lowrow = temprow;
      }

      if (temprow > highrow) {
        highrow = temprow;
      }

      if (tempcol < lowcol) {
        lowcol = tempcol;
      }

      if (tempcol > highcol) {
        highcol = tempcol;
      } // Make sure there is another tile immediately above, below, left, or right (not isolated)


      if (!(temprow > 0 && squareArray[temprow - 1][tempcol].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE) && !(tempcol > 0 && squareArray[temprow][tempcol - 1].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE) && !(temprow < edge && squareArray[temprow + 1][tempcol].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE) && !(tempcol < edge && squareArray[temprow][tempcol + 1].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE)) {
        window.alert("Each played tile must be part of a word");
        return false;
      }
    } // Using the high and low values, check if the play is in a straight line


    if (lowrow !== highrow && lowcol !== highcol) {
      window.alert("Tiles played must be in a straight line");
      return false;
    }

    let playthru = false;
    let hookmade = false;
    /* Traverse from first played tile to last player tile
        Make sure there are no unused squares inbetween (gaps in the played word)
        Check if we played through existing tiles
        Check if we hooked existing tiles/words
    */

    for (var temprow = lowrow; temprow <= highrow; ++temprow) {
      for (var tempcol = lowcol; tempcol <= highcol; ++tempcol) {
        if (squareArray[temprow][tempcol].usedby === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE) {
          window.alert("There is a gap in your word");
          return false;
        }

        if (!firstWord) {
          // Play through and hook not possible on first move
          let tempcoord = temprow + "-" + tempcol;

          if (currentcoords.indexOf(tempcoord) < 0) {
            // Tile was not played this move (was already on the board)
            playthru = true;
          }

          if (lowrow === highrow && temprow > 0 && squareArray[temprow - 1][tempcol].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE) {
            hookmade = true;
          }

          if (lowrow === highrow && temprow < edge && squareArray[temprow + 1][tempcol].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE) {
            hookmade = true;
          }

          if (lowcol === highcol && tempcol > 0 && squareArray[temprow][tempcol - 1].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE) {
            hookmade = true;
          }

          if (lowcol === highcol && tempcol < edge && squareArray[temprow][tempcol + 1].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE) {
            hookmade = true;
          }
        }
      }
    }

    if (!firstWord) {
      // We already found play through a tile between first and last played tile
      // Now check if played word has a tile before first or after last played tile
      if (lowrow === highrow && lowcol > 0 && squareArray[lowrow][lowcol - 1].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE) {
        playthru = true;
      }

      if (lowrow === highrow && highcol < edge && squareArray[lowrow][highcol + 1].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE) {
        playthru = true;
      }

      if (lowcol === highcol && lowrow > 0 && squareArray[lowrow - 1][lowcol] !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE) {
        playthru = true;
      }

      if (lowcol === highcol && highrow < edge && squareArray[highrow + 1][lowcol].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE) {
        playthru = true;
      } // Now we have fully identified play through we can make sure they played through or made a hook
      // This in mandatory since it is not the first move


      if (!playthru && !hookmade) {
        window.alert("New words must extend an existing word and/or hook existing words or tiles");
        return false;
      }
    }

    return true;
  }

  async function getPlayInfo() {
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

      while (lowestrow > 0 && squareArray[lowestrow - 1][col].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE) {
        lowestrow = lowestrow - 1;
      } // find the highest row number of the main word, which may be higher than that of the last played tile


      let highestrow = highrow;

      while (highestrow < edge && squareArray[highestrow + 1][col].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE) {
        highestrow = highestrow + 1;
      }

      wordstartcoord = _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.BOARD_COL_HEADERS[col] + _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.BOARD_ROW_HEADERS[lowestrow]; // vertical play coords start with col header

      for (var row = lowestrow; row <= highestrow; ++row) {
        mainword = mainword + squareArray[row][col].letter;
        let coord = row + "-" + col;

        if (currentcoords.indexOf(coord) > -1) {
          // This tile was played, check for hooks
          let lowestcol = col;

          while (lowestcol > 0 && squareArray[row][lowestcol - 1].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE) {
            lowestcol = lowestcol - 1;
          }

          let highestcol = col;

          while (highestcol < edge && squareArray[row][highestcol + 1].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE) {
            highestcol = highestcol + 1;
          }

          if (lowestcol < highestcol) {
            // hook was made
            let extraword = "";

            for (var tempcol = lowestcol; tempcol <= highestcol; ++tempcol) {
              extraword = extraword + squareArray[row][tempcol].letter;
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

      while (lowestcol > 0 && squareArray[row][lowestcol - 1].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE) {
        lowestcol = lowestcol - 1;
      } // find the highest col number of the main word, which may be higher than that of the last played tile


      let highestcol = highcol;

      while (highestcol < edge && squareArray[row][highestcol + 1].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE) {
        highestcol = highestcol + 1;
      }

      wordstartcoord = _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.BOARD_ROW_HEADERS[row] + _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.BOARD_COL_HEADERS[lowestcol]; // horizontal play coords start with row header

      mainword = ""; // In case we got a 1 letter mainword in the previous block

      extrawords = []; // Ditto

      for (var col = lowestcol; col <= highestcol; ++col) {
        mainword = mainword + squareArray[row][col].letter;
        let coord = row + "-" + col;

        if (currentcoords.indexOf(coord) > -1) {
          // This tile was played, check for hooks
          let lowestrow = row;

          while (lowestrow > 0 && squareArray[lowestrow - 1][col].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE) {
            lowestrow = lowestrow - 1;
          }

          let highestrow = row;

          while (highestrow < edge && squareArray[highestrow + 1][col].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE) {
            highestrow = highestrow + 1;
          }

          if (lowestrow < highestrow) {
            // hook was made
            let extraword = "";

            for (var temprow = lowestrow; temprow <= highestrow; ++temprow) {
              extraword = extraword + squareArray[temprow][col].letter;
            }

            extrawords = [...extrawords, extraword];
          }
        }
      }
    }

    console.log(`Before fetch`);
    let invalidwords = await validateWords(mainword, extrawords);
    console.log(`After fetch, invalidwords=${invalidwords}`);
    playinfo = {
      mainword: mainword,
      extrawords: extrawords,
      pos: wordstartcoord,
      invalidwords: invalidwords
    };
    return playinfo;
  }

  async function validateWords(mainword, extrawords) {
    // Build complete list of newly formed words for validation against lexicon
    let allwords = mainword;
    extrawords.forEach(ew => {
      allwords = allwords + "," + ew;
    });
    let url =  true ? 'http://localhost:5000/ENABLE2K?validate=' : 0;
    const response = await fetch(url + allwords.toLocaleLowerCase());
    const jdata = await response.json();
    console.log(`Inside validateWords, jdata=${JSON.stringify(jdata)}`);
    return jdata.invalidwords;
  }

  function allowUndoLastTurn() {
    if (!allowRewind) {
      setAllowRewind(true);
      client.send({
        gameid: gameid,
        // the id for the game
        type: "pb",
        // prisonbreak
        func: "allowundo",
        // allow undo last turn
        sender: participant // who is allowing it

      });
    }
  }

  function performRewind() {
    /* Send undoturn to server and it will send the updated game data to game clients, including this one */
    client.send({
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      func: "undoturn" // undo last turn

    });
  }

  const recallTiles = () => {
    setSquareArray(JSON.parse(JSON.stringify(snapshot.squareArray))); // Deep copy

    setPtiles([...snapshot.ptiles]);
    setGtiles([...snapshot.gtiles]);
    setSelection(-1);
    setCurrentcoords([]);
    setRcd([-1, -1, _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.DIR_NONE]);
  };

  const prisonerPass = () => {
    let newMove = {
      by: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS,
      type: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.MOVE_TYPE_PASS
    };
    let newMoves = [...moves, newMove];
    let newWhoseturn = (0,_lib_pb_isDoublePass__WEBPACK_IMPORTED_MODULE_13__.isDoublePass)(newMoves) ? _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_GAMEOVER : _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_GUARDS; // If both players pass then end the game

    let newSyncstamp = Date.now();
    recallTiles(); // In case they put some tiles on the board before clicking Pass

    putAtMoveStart();
    setSyncstamp(newSyncstamp);
    setWhoseturn(newWhoseturn);
    setMoves(newMoves);
    client.send({
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      func: "ept",
      // end prisoners turn
      timestamp: newSyncstamp,
      // for data sync logic
      sender: participant,
      // who passed their turn
      whoseturn: newWhoseturn,
      // either it is now opponents turn or the pass ended the game
      move: newMove // the move that was made

    });
  };

  const guardsPass = () => {
    let newMove = {
      by: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_GUARDS,
      type: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.MOVE_TYPE_PASS
    };
    let newMoves = [...moves, newMove];
    let newWhoseturn = (0,_lib_pb_isDoublePass__WEBPACK_IMPORTED_MODULE_13__.isDoublePass)(newMoves) ? _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_GAMEOVER : _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_PRISONERS; // If both players pass then end the game

    let newSyncstamp = Date.now();
    recallTiles(); // In case they put some tiles on the board before clicking Pass

    putAtMoveStart();
    setSyncstamp(newSyncstamp);
    setWhoseturn(newWhoseturn);
    setMoves(newMoves);
    client.send({
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      func: "egt",
      // end guards turn
      timestamp: newSyncstamp,
      // for data sync logic
      sender: participant,
      // who passed their turn
      whoseturn: newWhoseturn,
      // either it is now opponents turn or the pass ended the game
      move: newMove // the move that was made

    });
  };

  const requestGameData = () => {
    client.send({
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      sender: participant,
      func: "requestgamedata",
      // request game data
      syncstamp: syncstamp // so server can decide whether I am up to date

    });
  };

  const requestSyncData = () => {
    // console.log(`Send requestsyncdata ${syncstamp}`);
    client.send({
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      sender: participant,
      func: "requestsyncdata" // request sync data

    });
  };

  const handleKeyDown = event => {
    event.preventDefault();

    if (participant !== whoseturn) {
      return;
    }

    if (event.key === "Enter") {
      whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_PRISONERS ? endPrisonersTurn() : endGuardsTurn();
      return;
    }

    if (event.key === "Escape") {
      recallTiles();
      return;
    }

    let lettertest = /^[A-Za-z\?]$/; // single letter or question mark key pressed

    if (event.key.match(lettertest)) {
      let letter = event.key.toUpperCase();
      let rack = whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_PRISONERS ? ptiles : gtiles;
      let newSelection = rack.indexOf(letter);

      if (newSelection === -1) {
        newSelection = rack.indexOf("?"); // Use the blank if they have one
      }

      if (newSelection > -1) {
        // Pressed letter is on the rack
        let row = rcd[0];
        let col = rcd[1];
        let dir = rcd[2];

        if (row > -1 && col > -1 && dir !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.DIR_NONE) {
          // row, col, dir are set to accept keystroke
          // Need to figure out next sqaure to auto-place a tile
          let newRcd = rcd;

          if (dir === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.DIR_RIGHT) {
            // playing rightwards
            let newc = -1;

            for (var tempcol = col + 1; tempcol < edge + 1 && newc === -1; tempcol++) {
              if (squareArray[row][tempcol].usedby === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE) {
                newc = tempcol;
              }
            }

            if (newc === -1) {
              newRcd = [-1, -1, _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.DIR_NONE];
            } else {
              newRcd = [row, newc, _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.DIR_RIGHT];
            }

            handleBoardSquareClick(row, col, newSelection, newRcd);
            setSelection(-1); // when they are typing they are not selecting rack tiles by clicking them on the rack

            return;
          }

          if (dir === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.DIR_DOWN) {
            // playing downwards
            let newr = -1;
            let numrows = racksize * 2 + 1;

            for (var temprow = row + 1; temprow < numrows && newr === -1; temprow++) {
              if (squareArray[temprow][col].usedby === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE) {
                newr = temprow;
              }
            }

            if (newr === -1) {
              newRcd = [-1, -1, _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.DIR_NONE];
            } else {
              newRcd = [newr, col, _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.DIR_DOWN];
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

      let row = parseInt(coord.split("-")[0]);
      let col = parseInt(coord.split("-")[1]);
      let newCurrentcoords = [...currentcoords];
      let newPtiles = [...ptiles];
      let newGtiles = [...gtiles];
      let newSquareArray = JSON.parse(JSON.stringify(squareArray)); // Deep copy

      let newSquareArrayRow = newSquareArray[row];
      let newSquareArrayCell = newSquareArrayRow[col];
      let newRcd = [-1, -1, _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.DIR_NONE];
      let newSelection = selection;
      newCurrentcoords.splice(currentcoords.length - 1, 1);
      let returnedTile = squareArray[row][col].letter;

      if (whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_PRISONERS) {
        newPtiles.push(returnedTile);
        newSelection = newPtiles.length - 1;
      } else {
        newGtiles.push(returnedTile);
        newSelection = newGtiles.length - 1;
      }

      newSquareArrayCell.usedby = _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.USED_BY_NONE;
      newSquareArrayCell.letter = _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.LETTER_NONE;
      newSquareArrayRow[col] = newSquareArrayCell;
      newSquareArray[row] = [...newSquareArrayRow];
      let dir = rcd[2];

      if (dir !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.DIR_NONE) {
        // direction was set so keep it
        newRcd = [row, col, dir];

        if (currentcoords.length === 1) {
          newSelection = -1; // if they backspace all the letters off leave rack tile unselected
        }
      }

      setCurrentcoords(newCurrentcoords);
      setGtiles(newGtiles);
      setPtiles(newPtiles);
      setSquareArray(newSquareArray);
      setRcd(newRcd);
      setSelection(newSelection);
    }
  };

  const handleMoveClick = _mi => {};

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "prisonbreak",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-display-container w3-teal topBarHeight",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-middle",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "myHeadingFont",
          children: "Prison Break"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 973,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 972,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-topleft w3-black topBarCorner commonFontFamily",
        children: ["Game id: ", gameid]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 975,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-bottomleft w3-orange topBarCorner commonFontFamily",
        children: ["Prisoners: ", participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? nickname : participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_GUARDS ? oppname : 'Secret']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 978,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-topright w3-black topBarCorner commonFontFamily",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "../../",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              "data-toggle": "tooltip",
              title: "Home",
              children: "home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 987,
              columnNumber: 18
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 987,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 986,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 985,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-bottomright w3-orange topBarCorner commonFontFamily",
        children: ["Guards: ", participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? oppname : participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_GUARDS ? nickname : 'Secret']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 990,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 971,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col pbTileAndMovesOuter",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_unseenTilesSection__WEBPACK_IMPORTED_MODULE_5__.default, {
          tiles: tiles,
          othertiles: participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? gtiles : participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_GUARDS ? ptiles : [] // Observers see both racks so nothing to exclude from tilebag as unseen

        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1000,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_movesSection__WEBPACK_IMPORTED_MODULE_6__.default, {
          moves: moves,
          onmoveclick: mi => handleMoveClick(mi)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1007,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 999,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col pbPlayerOuterSection",
        children: participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_playerSection__WEBPACK_IMPORTED_MODULE_3__.default, {
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
          lineNumber: 1011,
          columnNumber: 15
        }, undefined) : participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_GUARDS ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_playerSection__WEBPACK_IMPORTED_MODULE_3__.default, {
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
          lineNumber: 1027,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "pbPlayerInnerSection",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbPlayerTitle",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_ICON_PRISONERS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1044,
              columnNumber: 48
            }, undefined), "\xA0", _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TITLE_PRISONERS, "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_ICON_PRISONERS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1044,
              columnNumber: 143
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1044,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbTilerack",
            children: ptiles && ptiles.map((t, ti) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ObserverRackTile, {
              participant: "P",
              tilevalue: t,
              tileindex: ti
            }, `ObserverPrisonersRackTile${ti}`, false, {
              fileName: _jsxFileName,
              lineNumber: 1047,
              columnNumber: 23
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1045,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbPlayerTitle",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_ICON_GUARDS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1055,
              columnNumber: 48
            }, undefined), "\xA0", _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TITLE_GUARDS, "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_ICON_GUARDS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1055,
              columnNumber: 137
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1055,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbTilerack",
            children: gtiles && gtiles.map((t, ti) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ObserverRackTile, {
              participant: "G",
              tilevalue: t,
              tileindex: ti
            }, `ObserverGuardsRackTile${ti}`, false, {
              fileName: _jsxFileName,
              lineNumber: 1058,
              columnNumber: 23
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1056,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 1043,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1009,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        children: participant === whoseturn ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          onKeyDownCapture: handleKeyDown,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_board__WEBPACK_IMPORTED_MODULE_4__.default, {
            squareArray: squareArray,
            rcd: rcd,
            onClick: (ri, ci) => handleBoardSquareClick(ri, ci, -1, null)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1072,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1071,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_board__WEBPACK_IMPORTED_MODULE_4__.default, {
            squareArray: squareArray,
            rcd: rcd,
            onClick: () => {}
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1080,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1079,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1069,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_rescuesSection__WEBPACK_IMPORTED_MODULE_7__.default, {
          rescues: rescues
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1089,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_chatSection__WEBPACK_IMPORTED_MODULE_8__.default, {
          gameid: gameid,
          client: client,
          nickname: nickname,
          msgs: chatmsgs,
          setMsgs: setChatmsgs,
          participant: participant
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1090,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1088,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 998,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-display-container w3-teal topBarHeight",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-middle commonFontFamily",
        children: whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_GAMEOVER ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Game Over!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1096,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.JOKE_ARRAY[jokeindex]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1098,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1094,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1093,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 970,
    columnNumber: 7
  }, undefined);
};

_s(Game, "F59tHzoJXIEcF4jBgNhoME6BO0Y=", false, function () {
  return [_lib_usePrevious__WEBPACK_IMPORTED_MODULE_15__.usePrevious];
});

_c = Game;

const ObserverRackTile = props => {
  const selectedUnselected = "Unselected ";
  const uNotU = props.tilevalue === "Q" ? "u " : "";
  const tileclass = "pbTileOnRack " + selectedUnselected + uNotU + props.participant;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: tileclass,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "pbTileOnRackText",
      children: props.tilevalue
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1115,
      columnNumber: 11
    }, undefined)
  }, props.tileindex, false, {
    fileName: _jsxFileName,
    lineNumber: 1111,
    columnNumber: 7
  }, undefined);
};

_c2 = ObserverRackTile;
/* harmony default export */ __webpack_exports__["default"] = (Game);

var _c, _c2;

$RefreshReg$(_c, "Game");
$RefreshReg$(_c2, "ObserverRackTile");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvZ2FtZS5qcyJdLCJuYW1lcyI6WyJHYW1lIiwiaXNyZWpvaW4iLCJwYXJ0aWNpcGFudCIsImdhbWVpZCIsIm5pY2tuYW1lIiwid3NtZXNzYWdlIiwiY2xpZW50IiwicmFja3NpemUiLCJzeW5jc3RhbXAiLCJzZXRTeW5jc3RhbXAiLCJ1c2VTdGF0ZSIsIm1pZGRsZSIsImVkZ2UiLCJpbml0aWFsdGlsZXMiLCJjIiwidGlsZXMiLCJzZXRUaWxlcyIsInB0aWxlcyIsInNldFB0aWxlcyIsImd0aWxlcyIsInNldEd0aWxlcyIsInNxdWFyZUFycmF5Iiwic2V0U3F1YXJlQXJyYXkiLCJzZWxlY3Rpb24iLCJzZXRTZWxlY3Rpb24iLCJ3aG9zZXR1cm4iLCJzZXRXaG9zZXR1cm4iLCJjdXJyZW50Y29vcmRzIiwic2V0Q3VycmVudGNvb3JkcyIsInJlc2N1ZXMiLCJzZXRSZXNjdWVzIiwicmNkIiwic2V0UmNkIiwibW92ZXMiLCJzZXRNb3ZlcyIsInNuYXBzaG90Iiwic2V0U25hcHNob3QiLCJqb2tlaW5kZXgiLCJzZXRKb2tlaW5kZXgiLCJhbGxvd1Jld2luZCIsInNldEFsbG93UmV3aW5kIiwib3BwbmFtZSIsInNldE9wcG5hbWUiLCJjaGF0bXNncyIsInNldENoYXRtc2dzIiwicHJldlJlc2N1ZXMiLCJ1c2VQcmV2aW91cyIsInVzZUVmZmVjdCIsImluaXRpYWxpemVSb3V0aW5lIiwibXNnIiwicHJvY2Vzc0dhbWVNZXNzYWdlIiwic2Nyb2xsVG9Cb3R0b20iLCJteWF1ZGlvIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwicGxheSIsIm5ld2ppIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInJlcXVlc3RTeW5jRGF0YSIsImNsZWFySW50ZXJ2YWwiLCJmaXJzdFNxdWFyZUFycmF5IiwiaW5pdGlhbFNxdWFyZUFycmF5IiwicmVqb2luR2FtZSIsInN0YXJ0R2FtZSIsImpvaW5HYW1lIiwic3RhcnRPYnNlcnZpbmdHYW1lIiwibmV3U3luY3N0YW1wIiwiRGF0ZSIsIm5vdyIsInRlbXBQVGlsZXMiLCJ0ZW1wR1RpbGVzIiwidGVtcFRpbGVzIiwibGVuZ3RoIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzcGxpY2UiLCJzb3J0Iiwic2VuZCIsInR5cGUiLCJmdW5jIiwidGltZXN0YW1wIiwic2VuZGVyIiwicG5hbWUiLCJnbmFtZSIsInB1dEF0TW92ZVN0YXJ0IiwibWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiSlNPTiIsInBhcnNlIiwiZ2QiLCJidWlsZEdhbWVkYXRhRnJvbUFwaWRhdGEiLCJhcGlkYXRhIiwibmV3U25hcHNob3QiLCJzdHJpbmdpZnkiLCJuZXdDaGF0bXNncyIsImZyb20iLCJzZW5kbXNnIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3RHYW1lRGF0YSIsImhhbmRsZUJvYXJkU3F1YXJlQ2xpY2siLCJyaSIsImNpIiwibmV3U2VsZWN0aW9uIiwibmV3UmNkIiwibmV3U3F1YXJlQXJyYXkiLCJuZXdTcXVhcmVBcnJheVJvdyIsIm5ld1NxdWFyZUFycmF5Q2VsbCIsIm5ld1B0aWxlcyIsIm5ld0d0aWxlcyIsIm5ld0N1cnJlbnRjb29yZHMiLCJjb29yZCIsIlN0cmluZyIsImNjaSIsImluZGV4T2YiLCJ1c2VkYnkiLCJzZWxlY3RlZFRpbGUiLCJsZXR0ZXIiLCJuZXdEaXJlY3Rpb24iLCJoYW5kbGVSYWNrVGlsZUNsaWNrIiwidGlsZWluZGV4IiwibmV3cmFjayIsIm1vdmVmcm9tIiwibW92ZXRpbGUiLCJtb3ZldG8iLCJlbmRQcmlzb25lcnNUdXJuIiwiaXNQbGF5VmFsaWQiLCJwbGF5aW5mbyIsImdldFBsYXlJbmZvIiwiaW52YWxpZHdvcmRzIiwiYWxlcnQiLCJqb2luIiwicmVwbGFjZSIsInRvVXBwZXJDYXNlIiwibmV3UmVzY3VlcyIsImVzY2FwZWhhdGNoZXMiLCJpIiwibmV3VGlsZXMiLCJuZXdXaG9zZXR1cm4iLCJhbnlVbnVzZWRFc2NhcGVIYXRjaGVzIiwibmV3TW92ZSIsImJ5IiwibWFpbndvcmQiLCJleHRyYXdvcmRzIiwicG9zIiwibmV3TW92ZXMiLCJtb3ZlIiwiZW5kR3VhcmRzVHVybiIsInNuYXBzcXVhcmVhcnJheSIsInNuYXBwdGlsZXMiLCJzbmFwZ3RpbGVzIiwic3dhcFByaXNvbmVyc1RpbGVzIiwid2luZG93IiwiTU9WRV9UWVBFX1NXQVAiLCJzd2FwR3VhcmRzVGlsZXMiLCJmaXJzdFdvcmQiLCJudW1tb3ZlcyIsIm1vdmVpbmRleCIsIm51bWNvb3JkcyIsImxvd3JvdyIsImhpZ2hyb3ciLCJsb3djb2wiLCJoaWdoY29sIiwidGVtcHJvdyIsInBhcnNlSW50Iiwic3BsaXQiLCJ0ZW1wY29sIiwicGxheXRocnUiLCJob29rbWFkZSIsInRlbXBjb29yZCIsIndvcmRzdGFydGNvb3JkIiwibnVtcm93cyIsIm51bWNvbHMiLCJyb3ciLCJjb2wiLCJsb3dlc3Ryb3ciLCJoaWdoZXN0cm93IiwibG93ZXN0Y29sIiwiaGlnaGVzdGNvbCIsImV4dHJhd29yZCIsInZhbGlkYXRlV29yZHMiLCJhbGx3b3JkcyIsImZvckVhY2giLCJldyIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImpkYXRhIiwianNvbiIsImFsbG93VW5kb0xhc3RUdXJuIiwicGVyZm9ybVJld2luZCIsInJlY2FsbFRpbGVzIiwicHJpc29uZXJQYXNzIiwiTU9WRV9UWVBFX1BBU1MiLCJpc0RvdWJsZVBhc3MiLCJndWFyZHNQYXNzIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJrZXkiLCJsZXR0ZXJ0ZXN0IiwibWF0Y2giLCJyYWNrIiwiZGlyIiwibmV3YyIsIm5ld3IiLCJyZXR1cm5lZFRpbGUiLCJoYW5kbGVNb3ZlQ2xpY2siLCJfbWkiLCJtaSIsInRpIiwiUEFSVFlfSUNPTl9QUklTT05FUlMiLCJtYXAiLCJ0IiwiUEFSVFlfSUNPTl9HVUFSRFMiLCJPYnNlcnZlclJhY2tUaWxlIiwicHJvcHMiLCJzZWxl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QUssQ0FBQzVOLFdBQXZFO0FBQ0Esc0JBQ0k7QUFFSSxhQUFTLEVBQUVnTyxTQUZmO0FBQUEsMkJBSUk7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQSxnQkFBbUNKLEtBQUssQ0FBQ0c7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKLEtBQ1NILEtBQUssQ0FBQ2pHLFNBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBUUQsQ0FaRDs7TUFBTWdHLGdCO0FBZUosK0RBQWU3TixJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BiL3ByaXNvbmJyZWFrLmVkODMzM2JlYzA0ZDQzZmJmYTYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFBsYXllclNlY3Rpb24gZnJvbSAnLi4vcGIvcGxheWVyU2VjdGlvbic7XHJcbmltcG9ydCBCb2FyZCBmcm9tICcuLi9wYi9ib2FyZCc7XHJcbmltcG9ydCBTaG93VW5zZWVuVGlsZXMgZnJvbSAnLi4vcGIvdW5zZWVuVGlsZXNTZWN0aW9uJztcclxuaW1wb3J0IFNob3dNb3ZlcyBmcm9tICcuLi9wYi9tb3Zlc1NlY3Rpb24nO1xyXG5pbXBvcnQgU2hvd1Jlc2N1ZXMgZnJvbSAnLi4vcGIvcmVzY3Vlc1NlY3Rpb24nO1xyXG5pbXBvcnQgQ2hhdCBmcm9tICcuLi9wYi9jaGF0U2VjdGlvbic7XHJcbmltcG9ydCAqIGFzIGMgZnJvbSAnLi4vLi4vbGliL3BiL3ByaXNvbkJyZWFrQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgaW5pdGlhbFNxdWFyZUFycmF5IH0gZnJvbSAnLi4vLi4vbGliL3BiL2luaXRpYWxTcXVhcmVBcnJheSc7XHJcbmltcG9ydCB7IGFueVVudXNlZEVzY2FwZUhhdGNoZXMgfSBmcm9tIFwiLi4vLi4vbGliL3BiL2FueVVudXNlZEVzY2FwZUhhdGNoZXNcIjtcclxuaW1wb3J0IHsgYnVpbGRHYW1lZGF0YUZyb21BcGlkYXRhIH0gZnJvbSBcIi4uLy4uL2xpYi9wYi9idWlsZEdhbWVkYXRhRnJvbUFwaWRhdGFcIjtcclxuaW1wb3J0IHsgaXNEb3VibGVQYXNzIH0gZnJvbSBcIi4uLy4uL2xpYi9wYi9pc0RvdWJsZVBhc3NcIjtcclxuaW1wb3J0IHsgc2Nyb2xsVG9Cb3R0b20gfSBmcm9tIFwiLi4vLi4vbGliL3Njcm9sbFRvQm90dG9tXCI7XHJcbmltcG9ydCB7IHVzZVByZXZpb3VzIH0gZnJvbSBcIi4uLy4uL2xpYi91c2VQcmV2aW91c1wiO1xyXG5cclxuY29uc3QgR2FtZSA9ICh7aXNyZWpvaW5cclxuICAgICwgcGFydGljaXBhbnQgLy8gUHJpc29uZXJzLCBHdWFyZHMsIG9yIE9ic2VydmVyIChub3QgaW1wbGVtZW50ZWQpXHJcbiAgICAsIGdhbWVpZFxyXG4gICAgLCBuaWNrbmFtZVxyXG4gICAgLCB3c21lc3NhZ2VcclxuICAgICwgY2xpZW50XHJcbiAgICAsIHJhY2tzaXplPTQgLy8gT3B0aW9uIGZvciByYWNrIHNpemUgKGdpdmUgaXQgYSBkZWZhdWx0IGZvciBCdWlsZClcclxuICAgIH0pID0+IHtcclxuICAgIGNvbnN0IFtzeW5jc3RhbXAsIHNldFN5bmNzdGFtcF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBtaWRkbGUgPSByYWNrc2l6ZTsgLy8gTWlkZGxlIGVsZW1lbnQgaW4gcm93IG9yIGNvbHVtbiBhcnJheVxyXG4gICAgY29uc3QgZWRnZSA9IHJhY2tzaXplICogMjsgLy8gTGFzdCBlbGVtZW50IGluIHJvdyBvciBjb2x1bW4gYXJyYXlcclxuICAgIGNvbnN0IGluaXRpYWx0aWxlcyA9IHJhY2tzaXplID09PSA2ID8gYy5USUxFQkFHNiA6IHJhY2tzaXplID09PSA3ID8gYy5USUxFQkFHNyA6IHJhY2tzaXplID09PSA1ID8gYy5USUxFQkFHNSA6IGMuVElMRUJBRzQ7XHJcbiAgICBjb25zdCBbdGlsZXMsIHNldFRpbGVzXSA9IHVzZVN0YXRlKFsuLi5pbml0aWFsdGlsZXNdKTtcclxuICAgIGNvbnN0IFtwdGlsZXMsIHNldFB0aWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZ3RpbGVzLCBzZXRHdGlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NxdWFyZUFycmF5LCBzZXRTcXVhcmVBcnJheV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0aW9uLCBzZXRTZWxlY3Rpb25dID0gdXNlU3RhdGUoLTEpOyAvLyByZWxhdGl2ZSB0byByYWNrIG9mIHBsYXllciBtYWtpbmcgYSBwbGF5XHJcbiAgICBjb25zdCBbd2hvc2V0dXJuLCBzZXRXaG9zZXR1cm5dID0gdXNlU3RhdGUoYy5XSE9TRV9UVVJOX1BSSVNPTkVSUyk7IC8vIGdhbWUgc3RhcnRzIHdpdGggcHJpc29uZXJzIHBsYXlcclxuICAgIGNvbnN0IFtjdXJyZW50Y29vcmRzLCBzZXRDdXJyZW50Y29vcmRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtyZXNjdWVzLCBzZXRSZXNjdWVzXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3JjZCwgc2V0UmNkXSA9IHVzZVN0YXRlKFstMSwtMSxjLkRJUl9OT05FXSk7XHJcbiAgICBjb25zdCBbbW92ZXMsIHNldE1vdmVzXSA9IHVzZVN0YXRlKFtdKTsgLy8gbW92ZSBoaXN0b3J5LCBlYWNoIGVsZW1lbnQgaXMgdGhlIGFycmF5IGlzIGEganNvbiBvYmplY3Qgb2YgaW5mbyBhYm91dCB0aGUgbW92ZVxyXG4gICAgY29uc3QgW3NuYXBzaG90LCBzZXRTbmFwc2hvdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgIHNxdWFyZUFycmF5OiBbXSxcclxuICAgICAgcHRpbGVzOiBbXSxcclxuICAgICAgZ3RpbGVzOiBbXSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2pva2VpbmRleCwgc2V0Sm9rZWluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2FsbG93UmV3aW5kLCBzZXRBbGxvd1Jld2luZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbb3BwbmFtZSwgc2V0T3BwbmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbY2hhdG1zZ3MsIHNldENoYXRtc2dzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IHByZXZSZXNjdWVzID0gdXNlUHJldmlvdXMocmVzY3Vlcyk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyAvLyBUaGlzIGNvZGUgZXhlY3V0ZXMgdGhlIGZpcnN0IHRpbWUgR2FtZSBpcyB1c2VkIG9ubHlcclxuICAgICAgaW5pdGlhbGl6ZVJvdXRpbmUoKTtcclxuICAgIH0sIFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGxldCBtc2cgPSB3c21lc3NhZ2U7XHJcbiAgICAgIGlmIChtc2cgIT09ICcnKSBwcm9jZXNzR2FtZU1lc3NhZ2UobXNnKTsgICAgICBcclxuICAgIH0sW3dzbWVzc2FnZV0pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzY3JvbGxUb0JvdHRvbShcIlNjcm9sbGFibGVNb3Zlc1wiKTtcclxuICAgIH0sW21vdmVzXSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHNjcm9sbFRvQm90dG9tKFwiU2Nyb2xsYWJsZUNoYXRcIik7XHJcbiAgICB9LFtjaGF0bXNnc10pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAocmVzY3VlcyA+IHByZXZSZXNjdWVzKSB7XHJcbiAgICAgICAgICB2YXIgbXlhdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcbiAgICAgICAgICAvLyBPYnNlcnZlcnMgaGVhciB5aXBwZWVcclxuICAgICAgICAgIG15YXVkaW8uc3JjID0gcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMgPyBcImh0dHBzOi8vdGlsZXJ1bm5lci5naXRodWIuaW8vT25lR290QXdheS5tNGFcIiA6IFwiaHR0cHM6Ly90aWxlcnVubmVyLmdpdGh1Yi5pby95aXBwZWUubTRhXCI7XHJcbiAgICAgICAgICBteWF1ZGlvLnBsYXkoKTtcclxuICAgICAgfVxyXG4gICAgfSwgW3Jlc2N1ZXNdKTsgLy8gUGxheSBhIHNvdW5kIHdoZW4gYSByZXNjdWUgaXMgbWFkZVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgbGV0IG5ld2ppID0gam9rZWluZGV4ICsgMTtcclxuICAgICAgaWYgKG5ld2ppID49IGMuSk9LRV9BUlJBWS5sZW5ndGgpIHtcclxuICAgICAgICBuZXdqaSA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgc2V0Sm9rZWluZGV4KG5ld2ppKTtcclxuICAgIH0sIFt3aG9zZXR1cm5dKTsgLy8gd2FudCB1cCB0byBkYXRlIHZhbHVlIG9mIHdob3NldHVybiB0byBkZWNpZGUgd2hldGhlciB0byBhc2sgZm9yIGFuIHVwZGF0ZVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwYXJ0aWNpcGFudCAhPT0gd2hvc2V0dXJuICYmIHdob3NldHVybiAhPT0gYy5XSE9TRV9UVVJOX0dBTUVPVkVSKSB7XHJcbiAgICAgICAgICByZXF1ZXN0U3luY0RhdGEoKTsgLy8gU2VuZCBhIHJlcXVlc3QgZm9yIHN5bmMgZGF0YSB3aGVuIHdhaXRpbmcgZm9yIHRoZWlyIG1vdmVcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU2VuZCBhIHJlcXVlc3QgZm9yIHRoZSB0aW1lc3RhbXAgb2YgdGhlIGxhc3QgZXZlbnQgKHN5bmNzdGFtcClcclxuICAgICAgICAvLyBTZXJ2ZXIgd2lsbCBzZW5kIGZ1bmM9cHJvdmlkZXN5bmNzdGFtcCB3aXRoIGEgc3luY3N0YW1wIHZhbHVlXHJcbiAgICAgICAgLy8gUHJvY2Vzc0dhbWVNZXNzYWdlIHdpbGwgY2hlY2sgc3luY3N0YW1wIGZyb20gdGhlIHNlcnZlciB0byBzeW5jc3RhbXAgaGVyZVxyXG4gICAgICAgIC8vIElmIGRpZmZlcmVudCBpdCB3aWxsIHNlbmQgZnVuYz1yZXF1ZXN0Z2FtZWRhdGEsIHNlcnZlciB3aWxsIHNlbmQgdXMgcHJvdmlkZWdhbWVkYXRhLCBhbmQgd2Ugc3luY1xyXG4gICAgICAgIH0sIGMuUElOR19JTlRFUlZBTCk7IC8vIHRoaXMgbWFueSBtaWxsaXNlY29uZHMgYmV0d2VlbiBhYm92ZSBjb2RlIGJsb2NrIGV4ZWN1dGlvbnNcclxuICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBpbml0aWFsaXplUm91dGluZSA9ICgpID0+IHtcclxuICAgICAgbGV0IGZpcnN0U3F1YXJlQXJyYXkgPSBpbml0aWFsU3F1YXJlQXJyYXkocmFja3NpemUpO1xyXG4gICAgICBzZXRTcXVhcmVBcnJheShmaXJzdFNxdWFyZUFycmF5KTtcclxuICAgICAgaWYgKGlzcmVqb2luKSB7XHJcbiAgICAgICAgcmVqb2luR2FtZSgpXHJcbiAgICAgIH0gZWxzZSBpZiAocGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMpIHtcclxuICAgICAgICBzdGFydEdhbWUoZmlyc3RTcXVhcmVBcnJheSk7IC8vIFByaXNvbmVycyBzdGFydGluZyB0aGUgZ2FtZVxyXG4gICAgICB9IGVsc2UgaWYgKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTKSB7XHJcbiAgICAgICAgam9pbkdhbWUoKTsgLy8gR3VhcmRzIGpvaW5pbmcgdGhlIGdhbWVcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGFydE9ic2VydmluZ0dhbWUoKTsgLy8gT2JzZXJ2ZXIgdmlld2luZyB0aGUgZ2FtZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzdGFydEdhbWUgPSAoZmlyc3RTcXVhcmVBcnJheSkgPT4ge1xyXG4gICAgICBsZXQgbmV3U3luY3N0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgbGV0IHRlbXBQVGlsZXMgPSBbXTtcclxuICAgICAgbGV0IHRlbXBHVGlsZXMgPSBbXTtcclxuICAgICAgbGV0IHRlbXBUaWxlcyA9IFsuLi5pbml0aWFsdGlsZXNdO1xyXG4gICAgICB3aGlsZSAodGVtcFBUaWxlcy5sZW5ndGggPCByYWNrc2l6ZSkge1xyXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVtcFRpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgdGVtcFBUaWxlcy5wdXNoKHRlbXBUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgdGVtcFRpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgICByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVtcFRpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgdGVtcEdUaWxlcy5wdXNoKHRlbXBUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgdGVtcFRpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgfVxyXG4gICAgICB0ZW1wUFRpbGVzLnNvcnQoKTtcclxuICAgICAgdGVtcEdUaWxlcy5zb3J0KCk7XHJcbiAgICAgIHNldFN5bmNzdGFtcChuZXdTeW5jc3RhbXApO1xyXG4gICAgICBzZXRHdGlsZXModGVtcEdUaWxlcyk7XHJcbiAgICAgIHNldFB0aWxlcyh0ZW1wUFRpbGVzKTtcclxuICAgICAgc2V0VGlsZXModGVtcFRpbGVzKTtcclxuICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgIHNxdWFyZUFycmF5OiBmaXJzdFNxdWFyZUFycmF5LFxyXG4gICAgICAgIHB0aWxlczogWy4uLnRlbXBQVGlsZXNdLFxyXG4gICAgICAgIGd0aWxlczogWy4uLnRlbXBHVGlsZXNdICAgIFxyXG4gICAgICB9KTtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLFxyXG4gICAgICAgICAgZnVuYzogXCJzdGFydGdhbWVcIixcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyBHYW1lIGlkXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ld1N5bmNzdGFtcCwgLy8gRm9yIHRlbGxpbmcgc2VydmVyIG15IGxhc3QgZGF0YSB0aW1lc3RhbXBcclxuICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gUmFjayBzaXplIG9wdGlvblxyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCwgLy8gVGhpcyB3aWxsIGJlIHByaXNvbmVycyBzaW5jZSBwcmlzb25lcnMgc3RhcnQgdGhlIGdhbWVcclxuICAgICAgICAgIHBuYW1lOiBuaWNrbmFtZSwgLy8gVGhpcyB3aWxsIGJlIHRoZSBwcmlzb25lcnMgbmlja25hbWUgc2luY2UgcHJpc29uZXJzIGFyZSBzZW5kaW5nIHRoaXNcclxuICAgICAgICAgIHRpbGVzOiB0ZW1wVGlsZXMsIC8vIFRpbGUgYmFnIGFmdGVyIGZpcnN0IHJhY2tzIHNlbGVjdGVkXHJcbiAgICAgICAgICBwdGlsZXM6IHRlbXBQVGlsZXMsIC8vIFByaXNvbmVycyBmaXJzdCByYWNrXHJcbiAgICAgICAgICBndGlsZXM6IHRlbXBHVGlsZXMgLy8gR3VhcmRzIGZpcnN0IHJhY2tcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBqb2luR2FtZSA9ICgpID0+IHtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIGduYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcImpvaW5nYW1lXCIsIC8vIGpvaW4gdGhlIGdhbWVcclxuICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQgLy8gdGhpcyB3aWxsIGViIGd1YXJkc1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlam9pbkdhbWUgPSAoKSA9PiB7XHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcInJlam9pbmdhbWVcIiwgLy8gam9pbiB0aGUgZ2FtZVxyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCAvLyBjb3VsZCBiZSBlaXRoZXIgcGxheWVyXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3RhcnRPYnNlcnZpbmdHYW1lID0gKCkgPT4ge1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICAgIHR5cGU6IFwicGJcIixcclxuICAgICAgICAgIGZ1bmM6IFwic3RhcnRPYnNlcnZpbmdcIlxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwdXRBdE1vdmVTdGFydCgpIHtcclxuICAgICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgICAgc2V0QWxsb3dSZXdpbmQoZmFsc2UpO1xyXG4gICAgICBzZXRSY2QoLTEsLTEsYy5ESVJfTk9ORSk7XHJcbiAgICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0dhbWVNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgbGV0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmdhbWVpZCA9PT0gZ2FtZWlkICYmIG1lc3NhZ2VEYXRhLnR5cGUgPT09IFwicGJcIikgeyAvLyBUaGlzIGluc3RhbmNlIG9mIGEgcHJpc29uIGJyZWFrIGdhbWVcclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJwcm92aWRlZ2FtZWRhdGFcIikge1xyXG4gICAgICAgICAgbGV0IGdkID0gYnVpbGRHYW1lZGF0YUZyb21BcGlkYXRhKG1lc3NhZ2VEYXRhLmFwaWRhdGEpO1xyXG4gICAgICAgICAgLy8gU2VydmVyIHByb3ZpZGluZyBnYW1lIGRhdGFcclxuICAgICAgICAgIHNldFN5bmNzdGFtcChnZC5zeW5jc3RhbXApO1xyXG4gICAgICAgICAgLy8gTm8gb3Bwb25lbnQgbmFtZSBmb3Igb2JzZXJ2ZXJzXHJcbiAgICAgICAgICBpZiAocGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMpIHtcclxuICAgICAgICAgICAgc2V0T3BwbmFtZShnZC5nbmFtZSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTKSB7XHJcbiAgICAgICAgICAgIHNldE9wcG5hbWUoZ2QucG5hbWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0VGlsZXMoZ2QudGlsZXMpO1xyXG4gICAgICAgICAgc2V0U3F1YXJlQXJyYXkoZ2Quc3F1YXJlQXJyYXkpO1xyXG4gICAgICAgICAgc2V0UHRpbGVzKGdkLnB0aWxlcyk7XHJcbiAgICAgICAgICBzZXRHdGlsZXMoZ2QuZ3RpbGVzKTtcclxuICAgICAgICAgIHNldFdob3NldHVybihnZC53aG9zZXR1cm4pO1xyXG4gICAgICAgICAgbGV0IG5ld1NuYXBzaG90ID0ge1xyXG4gICAgICAgICAgICBzcXVhcmVBcnJheTogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShnZC5zcXVhcmVBcnJheSkpLCAvLyBEZWVwIGNvcHlcclxuICAgICAgICAgICAgcHRpbGVzOiBbLi4uZ2QucHRpbGVzXSxcclxuICAgICAgICAgICAgZ3RpbGVzOiBbLi4uZ2QuZ3RpbGVzXVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHNldFNuYXBzaG90KG5ld1NuYXBzaG90KTtcclxuICAgICAgICAgIHNldE1vdmVzKGdkLm1vdmVzKTtcclxuICAgICAgICAgIHNldFJlc2N1ZXMoZ2QucmVzY3Vlcyk7XHJcbiAgICAgICAgICBzZXRBbGxvd1Jld2luZChnZC5hbGxvd1Jld2luZCk7XHJcbiAgICAgICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJwcm92aWRlZ25hbWVcIikge1xyXG4gICAgICAgICAgaWYgKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RJVExFX1BSSVNPTkVSUykge1xyXG4gICAgICAgICAgICBzZXRPcHBuYW1lKG1lc3NhZ2VEYXRhLmduYW1lKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiYWxsb3d1bmRvXCIpIHtcclxuICAgICAgICAgIC8vIE9wcG9uZW50IGNsaWNrZWQgYnV0dG9uIHRvIGFsbG93IHVuZG8gdHVyblxyXG4gICAgICAgICAgc2V0QWxsb3dSZXdpbmQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImNoYXRcIikgeyAvLyBTZXJ2ZXIgZGVjaWRlZCB3aGV0aGVyIHRoaXMgY2hhdCB3YXMgZm9yIG1lXHJcbiAgICAgICAgICBsZXQgbmV3Q2hhdG1zZ3MgPSBbLi4uY2hhdG1zZ3MsIHtmcm9tOiBtZXNzYWdlRGF0YS5uaWNrbmFtZSwgbXNnOiBtZXNzYWdlRGF0YS5zZW5kbXNnfV07XHJcbiAgICAgICAgICBzZXRDaGF0bXNncyhuZXdDaGF0bXNncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInByb3ZpZGVzeW5jZGF0YVwiKSB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgcHJvdmlkZXN5bmRhdGEgcGFzc2VkICR7bWVzc2FnZURhdGEuc3luY3N0YW1wfSBhbmQgSSBoYXZlICR7c3luY3N0YW1wfWApO1xyXG4gICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLnN5bmNzdGFtcCAhPT0gc3luY3N0YW1wKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBPdXQgb2Ygc3luYyAtIHJlcXVlc3RpbmcgbGF0ZXN0IGdhbWUgZGF0YWApO1xyXG4gICAgICAgICAgICByZXF1ZXN0R2FtZURhdGEoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQ2FsbGluZyBzZXRTZWxlY3Rpb24gKGZyb20gaGFuZGxlS2V5RG93bikgdGhlbiBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrIGRvZXMgbm90IGxldCBpdCByZWNvZ25pemUgc2VsZWN0aW9uIHdpdGggdGhlIG5ldyB2YWx1ZVxyXG4gICAgLy8gU28gSSBwYXNzIG5ld1NlbGVjdGlvbiB3aGVuIEkgd2FudCB0byBhbHNvIHNldCBpdCwgb3RoZXJ3aXNlIEkgcGFzcyAtMSB0byBpbnN0cnVjdCBpdCB0byB1c2UgY3VycmVudCB2YWx1ZSBvZiBzZWxlY3Rpb25cclxuICAgIC8vIEFsc28gcGFzc2luZyBuZXdSY2RcclxuICAgIGNvbnN0IGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2sgPSAocmksIGNpLCBuZXdTZWxlY3Rpb24sIG5ld1JjZCkgPT4ge1xyXG4gICAgICBsZXQgbmV3U3F1YXJlQXJyYXkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNxdWFyZUFycmF5KSk7IC8vIERlZXAgY29weVxyXG4gICAgICBsZXQgbmV3U3F1YXJlQXJyYXlSb3cgPSBbLi4ubmV3U3F1YXJlQXJyYXlbcmldXTsgLy8gVGhlIHJvdyBvZiBzcXVhcmVzIHRoZXkgY2xpY2tlZCBvblxyXG4gICAgICBsZXQgbmV3U3F1YXJlQXJyYXlDZWxsID0gbmV3U3F1YXJlQXJyYXlSb3dbY2ldOyAvLyBUaGUgc3F1YXJlIGluIHRoZSByb3cgdGhleSBjbGlja2VkIG9uXHJcbiAgICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgICBsZXQgbmV3Q3VycmVudGNvb3JkcyA9IFsuLi5jdXJyZW50Y29vcmRzXTtcclxuICAgICAgbGV0IGNvb3JkID0gU3RyaW5nKHJpKSArIFwiLVwiICsgU3RyaW5nKGNpKTtcclxuICAgICAgbGV0IGNjaSA9IGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCk7XHJcbiAgICAgIGlmIChuZXdTZWxlY3Rpb24gPT09IC0xKSB7XHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gc2VsZWN0aW9uO1xyXG4gICAgICAgIG5ld1JjZCA9IHJjZDtcclxuICAgICAgfVxyXG4gICAgICBpZiAobmV3U2VsZWN0aW9uID4gLTEgJiYgbmV3U3F1YXJlQXJyYXlDZWxsLnVzZWRieSA9PT0gYy5VU0VEX0JZX05PTkUpIHsgLy8gdGlsZSBpcyBzZWxlY3RlZCBmcm9tIHJhY2sgYW5kIGNsaWNrZWQgc3F1YXJlIGlzIG5vdCB1c2VkIHlldFxyXG4gICAgICAgIGxldCBzZWxlY3RlZFRpbGUgPSB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMgPyBuZXdQdGlsZXNbbmV3U2VsZWN0aW9uXSA6IG5ld0d0aWxlc1tuZXdTZWxlY3Rpb25dO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Q2VsbC5sZXR0ZXIgPSBzZWxlY3RlZFRpbGU7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlDZWxsLnVzZWRieSA9IHdob3NldHVybjtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheVJvd1tjaV0gPSBuZXdTcXVhcmVBcnJheUNlbGw7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlbcmldID0gWy4uLm5ld1NxdWFyZUFycmF5Um93XTtcclxuICAgICAgICB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlNcclxuICAgICAgICAgID8gbmV3UHRpbGVzLnNwbGljZShuZXdTZWxlY3Rpb24sIDEpXHJcbiAgICAgICAgICA6IG5ld0d0aWxlcy5zcGxpY2UobmV3U2VsZWN0aW9uLCAxKTtcclxuICAgICAgICBpZiAod2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTICYmIG5ld1NlbGVjdGlvbiA9PT0gbmV3UHRpbGVzLmxlbmd0aCkgeyBcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbiAtIDFcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX0dVQVJEUyAmJiBuZXdTZWxlY3Rpb24gPT09IG5ld0d0aWxlcy5sZW5ndGgpIHsgXHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdTZWxlY3Rpb24gLSAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24pO1xyXG4gICAgICAgIHNldFNxdWFyZUFycmF5KG5ld1NxdWFyZUFycmF5KTtcclxuICAgICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKFsuLi5jdXJyZW50Y29vcmRzLCBjb29yZF0pO1xyXG4gICAgICAgIHNldFJjZChuZXdSY2QpOyAvLyBrZXkgZG93biBoYW5kbGVyIGZpZ3VyZWQgaXQgb3V0XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjY2kgPiAtMSkgeyAvLyBjbGlja2VkIHNxdWFyZSBoYXMgYSB0aWxlIG9uIGl0IGZyb20gdGhlIGN1cnJlbnQgbW92ZSBpbiBwcm9ncmVzcywgc28gcHV0IGl0IGJhY2sgb24gdGhlIHBsYXllciByYWNrXHJcbiAgICAgICAgd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTXHJcbiAgICAgICAgICA/IG5ld1B0aWxlcy5wdXNoKG5ld1NxdWFyZUFycmF5Q2VsbC5sZXR0ZXIpXHJcbiAgICAgICAgICA6IG5ld0d0aWxlcy5wdXNoKG5ld1NxdWFyZUFycmF5Q2VsbC5sZXR0ZXIpO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Q2VsbC51c2VkYnkgPSBjLlVTRURfQllfTk9ORTtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheUNlbGwubGV0dGVyID0gYy5MRVRURVJfTk9ORTtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheVJvd1tjaV0gPSBuZXdTcXVhcmVBcnJheUNlbGw7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlbcmldID0gWy4uLm5ld1NxdWFyZUFycmF5Um93XTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24oXHJcbiAgICAgICAgICB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMgPyBuZXdQdGlsZXMubGVuZ3RoIC0gMSA6IG5ld0d0aWxlcy5sZW5ndGggLSAxXHJcbiAgICAgICAgKTtcclxuICAgICAgICBuZXdDdXJyZW50Y29vcmRzLnNwbGljZShjY2ksIDEpO1xyXG4gICAgICAgIHNldFNxdWFyZUFycmF5KG5ld1NxdWFyZUFycmF5KTtcclxuICAgICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKG5ld0N1cnJlbnRjb29yZHMpO1xyXG4gICAgICAgIHNldFJjZCgtMSwtMSxjLkRJUl9OT05FKTsgLy8gbWFrZSBwbGF5ZXIgY2xpY2sgYWdhaW4gdG8gc2V0IGRpcmVjdGlvblxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvLyBUaGV5IGRpZG4ndCBjbGljayBhIHNxdWFyZSB0byBwbGFjZSBhIHNlbGVjdGVkIHRpbGUgdGhlcmVcclxuICAgICAgLy8gVGhleSBkaWRuJ3QgY2xpY2sgYSBzcXVhcmUgdG8gcmVtb3ZlIGFuIGV4aXN0aW5nIHRpbGVcclxuICAgICAgaWYgKG5ld1NxdWFyZUFycmF5Q2VsbC51c2VkYnkgPT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgLy8gVGhlcmUgaXMgbm90aGluZyBvbiB0aGUgc3F1YXJlIHNvIHRoZXkgYXJlIHBpY2tpbmcgd2hlcmUgdG8gcGxhY2UgdGhlIG5leHQgdGlsZSB2aWEga2V5Ym9hcmRcclxuICAgICAgICBsZXQgbmV3RGlyZWN0aW9uID0gcmNkWzBdICE9PSByaSB8fCByY2RbMV0gIT09IGNpID8gYy5ESVJfUklHSFQgOiAvL2NsaWNrIG5ldyBzcXVhcmUsIHN0YXJ0IHdpdGggcmlnaHRcclxuICAgICAgICAgcmNkWzJdID09PSBjLkRJUl9SSUdIVCA/IGMuRElSX0RPV04gOiAvL2NsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIHJpZ2h0LCBjaGFuZ2UgdG8gZG93blxyXG4gICAgICAgICByY2RbMl0gPT09IGMuRElSX0RPV04gPyBjLkRJUl9OT05FIDogLy9jbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyBkb3duLCBjaGFuZ2UgdG8gbm8gZGlyZWN0aW9uXHJcbiAgICAgICAgIGMuRElSX1JJR0hUOyAvLyBjbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyBubyBkaXJlY3Rpb24sIGNoYW5nZSB0byByaWdodFxyXG4gICAgICAgIG5ld1JjZCA9IFtyaSxjaSxuZXdEaXJlY3Rpb25dO1xyXG4gICAgICAgIHNldFJjZChuZXdSY2QpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IGhhbmRsZVJhY2tUaWxlQ2xpY2sgPSAodGlsZWluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX09CU0VSVkVSKSB7cmV0dXJuO31cclxuICAgICAgLy8gSWYgbm8gdGlsZSBpcyBzZWxlY3RlZCBhbHJlYWR5IHRoZW4gc2V0IHRoZSBzZWxlY3Rpb25cclxuICAgICAgaWYgKHNlbGVjdGlvbiA9PT0gLTEpIHtcclxuICAgICAgICBzZXRTZWxlY3Rpb24odGlsZWluZGV4KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gSWYgdGhlIHNhbWUgdGlsZSBpcyBhbHJlYWR5IHNlbGVjdGVkIHRoZW4gdW5zZWxlY3RcclxuICAgICAgaWYgKHNlbGVjdGlvbiA9PT0gdGlsZWluZGV4KSB7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gQSB0aWxlIHdhcyBhbHJlYWR5IHNlbGVjdGVkIGFuZCB0aGV5IGNsaWNrZWQgYW5vdGhlciB0aWxlIC0gbW92ZSB0aGUgdGlsZVxyXG4gICAgICBsZXQgbmV3cmFjayA9IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gWy4uLnB0aWxlc10gOiBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IG1vdmVmcm9tID0gc2VsZWN0aW9uO1xyXG4gICAgICBsZXQgbW92ZXRpbGUgPSBuZXdyYWNrW21vdmVmcm9tXTtcclxuICAgICAgbGV0IG1vdmV0byA9IHRpbGVpbmRleDtcclxuICAgICAgbmV3cmFjay5zcGxpY2UobW92ZWZyb20sIDEpOyAvLyByZW1vdmUgdGlsZSBmcm9tIG9yaWdpbmFsIHNlbGVjdGVkIHBvc2l0aW9uXHJcbiAgICAgIG5ld3JhY2suc3BsaWNlKG1vdmV0bywwLG1vdmV0aWxlKTsgLy8gaW5zZXJ0IG1vdmVkIHRpbGUgYXQgdGhlIG5ld2x5IHNlbGVjdGVkIHBvc2l0aW9uXHJcbiAgICAgIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gc2V0UHRpbGVzKG5ld3JhY2spIDogc2V0R3RpbGVzKG5ld3JhY2spO1xyXG4gICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZW5kUHJpc29uZXJzVHVybigpIHtcclxuICAgICAgaWYgKCFpc1BsYXlWYWxpZCgpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBwbGF5aW5mbyA9IGF3YWl0IGdldFBsYXlJbmZvKCk7XHJcbiAgICAgIGlmIChwbGF5aW5mby5pbnZhbGlkd29yZHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgYWxlcnQoYEludmFsaWQgYWNjb3JkaW5nIHRvIEVOQUJMRTJLIGxleGljb246ICR7cGxheWluZm8uaW52YWxpZHdvcmRzLmpvaW4oKS5yZXBsYWNlKFwiLlwiLFwiP1wiKS50b1VwcGVyQ2FzZSgpfWApO1xyXG4gICAgICAgIHJldHVybjsgLy8gRG8gbm90IGFwcGx5IHRoZSBwbGF5XHJcbiAgICAgIH1cclxuICAgICAgbGV0IG5ld1Jlc2N1ZXMgPSByZXNjdWVzO1xyXG4gICAgICBsZXQgZXNjYXBlaGF0Y2hlcyA9IFtcclxuICAgICAgICBcIjAtMFwiLFxyXG4gICAgICAgIFwiMC1cIiArIG1pZGRsZSxcclxuICAgICAgICBcIjAtXCIgKyBlZGdlLFxyXG4gICAgICAgIG1pZGRsZSsgXCItMFwiLFxyXG4gICAgICAgIG1pZGRsZSArIFwiLVwiICsgZWRnZSxcclxuICAgICAgICBlZGdlICsgXCItMFwiLFxyXG4gICAgICAgIGVkZ2UgKyBcIi1cIiArIG1pZGRsZSxcclxuICAgICAgICBlZGdlICsgXCItXCIgKyBlZGdlXHJcbiAgICAgIF07IC8vIGNvb3JkcyBvZiBlc2NhcGUgaGF0Y2hlc1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRjb29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoZXNjYXBlaGF0Y2hlcy5pbmRleE9mKGN1cnJlbnRjb29yZHNbaV0pID4gLTEpIHtcclxuICAgICAgICAgIG5ld1Jlc2N1ZXMgPSBuZXdSZXNjdWVzICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGV0IG5ld1B0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgICB3aGlsZSAobmV3UHRpbGVzLmxlbmd0aCA8IHJhY2tzaXplICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgbmV3UHRpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgfVxyXG4gICAgICBuZXdQdGlsZXMuc29ydCgpO1xyXG4gICAgICBsZXQgbmV3V2hvc2V0dXJuID0gbmV3UHRpbGVzLmxlbmd0aCA+IDAgPyBjLldIT1NFX1RVUk5fR1VBUkRTIDogYy5XSE9TRV9UVVJOX0dBTUVPVkVSO1xyXG4gICAgICBpZiAoIWFueVVudXNlZEVzY2FwZUhhdGNoZXMoc3F1YXJlQXJyYXkpKSB7XHJcbiAgICAgICAgbmV3V2hvc2V0dXJuID0gYy5XSE9TRV9UVVJOX0dBTUVPVkVSOyAvLyBObyBlc2NhcGUgaGF0Y2hlcyBsZWZ0XHJcbiAgICAgIH1cclxuICAgICAgbGV0IG5ld01vdmUgPSB7Ynk6IGMuUEFSVFlfVFlQRV9QUklTT05FUlMsIHR5cGU6IGMuTU9WRV9UWVBFX1BMQVksIG1haW53b3JkOiBwbGF5aW5mby5tYWlud29yZCwgZXh0cmF3b3JkczogcGxheWluZm8uZXh0cmF3b3JkcywgcG9zOiBwbGF5aW5mby5wb3N9O1xyXG4gICAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgICBsZXQgbmV3U3luY3N0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgc2V0U3luY3N0YW1wKG5ld1N5bmNzdGFtcCk7XHJcbiAgICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICAgIHNldFJlc2N1ZXMobmV3UmVzY3Vlcyk7XHJcbiAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICBzcXVhcmVBcnJheTogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzcXVhcmVBcnJheSkpLCAvLyBEZWVwIGNvcHlcclxuICAgICAgICBwdGlsZXM6IFsuLi5uZXdQdGlsZXNdLFxyXG4gICAgICAgIGd0aWxlczogWy4uLmd0aWxlc10sXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgZnVuYzogXCJlcHRcIiwgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ld1N5bmNzdGFtcCwgLy8gZm9yIGRhdGEgc3luYyBsb2dpY1xyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgIHB0aWxlczogbmV3UHRpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gbWF5IGhhdmUgZW5kZWQgdGhlIGdhbWVcclxuICAgICAgICAgIG1vdmU6IG5ld01vdmUsIC8vIHRoZSBtb3ZlIHRoYXQgd2FzIG1hZGVcclxuICAgICAgICAgIHJlc2N1ZXM6IG5ld1Jlc2N1ZXMgLy8gbWF5IGhhdmUgcmVzY3VlZCBhbm90aGVyIHByaXNvbmVyXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGVuZEd1YXJkc1R1cm4oKSB7XHJcbiAgICAgIGlmICghaXNQbGF5VmFsaWQoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgcGxheWluZm8gPSBhd2FpdCBnZXRQbGF5SW5mbygpO1xyXG4gICAgICBpZiAocGxheWluZm8uaW52YWxpZHdvcmRzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGFsZXJ0KGBJbnZhbGlkIGFjY29yZGluZyB0byBFTkFCTEUySyBsZXhpY29uOiAke3BsYXlpbmZvLmludmFsaWR3b3Jkcy5qb2luKCkucmVwbGFjZShcIi5cIixcIj9cIikudG9VcHBlckNhc2UoKX1gKTtcclxuICAgICAgICByZXR1cm47IC8vIERvIG5vdCBhcHBseSB0aGUgcGxheVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgICAgd2hpbGUgKG5ld0d0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIG5ld0d0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgbmV3R3RpbGVzLnNvcnQoKTtcclxuICAgICAgbGV0IHNuYXBzcXVhcmVhcnJheSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3F1YXJlQXJyYXkpKTsgLy8gRGVlcCBjb3B5XHJcbiAgICAgIGxldCBzbmFwcHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICAgIGxldCBzbmFwZ3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICAgIGxldCBuZXdXaG9zZXR1cm4gPSBuZXdHdGlsZXMubGVuZ3RoID4gMCA/IGMuV0hPU0VfVFVSTl9QUklTT05FUlMgOiBjLldIT1NFX1RVUk5fR0FNRU9WRVI7XHJcbiAgICAgIGlmICghYW55VW51c2VkRXNjYXBlSGF0Y2hlcyhzcXVhcmVBcnJheSkpIHtcclxuICAgICAgICBuZXdXaG9zZXR1cm4gPSBjLldIT1NFX1RVUk5fR0FNRU9WRVI7IC8vIE5vIGVzY2FwZSBoYXRjaGVzIGxlZnRcclxuICAgICAgfVxyXG4gICAgICBsZXQgbmV3TW92ZSA9IHtieTogYy5QQVJUWV9UWVBFX0dVQVJEUywgdHlwZTogYy5NT1ZFX1RZUEVfUExBWSwgbWFpbndvcmQ6IHBsYXlpbmZvLm1haW53b3JkLCBleHRyYXdvcmRzOiBwbGF5aW5mby5leHRyYXdvcmRzLCBwb3M6IHBsYXlpbmZvLnBvc307XHJcbiAgICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICAgIGxldCBuZXdTeW5jc3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICBzZXRTeW5jc3RhbXAobmV3U3luY3N0YW1wKTtcclxuICAgICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgIHNxdWFyZUFycmF5OiBzbmFwc3F1YXJlYXJyYXksXHJcbiAgICAgICAgcHRpbGVzOiBzbmFwcHRpbGVzLFxyXG4gICAgICAgIGd0aWxlczogc25hcGd0aWxlcyxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcImVndFwiLCAvLyBlbmQgZ3VhcmRzIHR1cm5cclxuICAgICAgICAgIHRpbWVzdGFtcDogbmV3U3luY3N0YW1wLCAvLyBmb3IgZGF0YSBzeW5jIGxvZ2ljXHJcbiAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LFxyXG4gICAgICAgICAgZ3RpbGVzOiBuZXdHdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIGd1YXJkcyByYWNrXHJcbiAgICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICAgIG1vdmU6IG5ld01vdmUsIC8vIHRoZSBtb3ZlIHRoYXQgd2FzIG1hZGVcclxuICAgICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuLCAvLyBtYXkgaGF2ZSBlbmRlZCB0aGUgZ2FtZVxyXG4gICAgICAgICAgcmFja3NpemU6IHJhY2tzaXplIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfTtcclxuICBcclxuICAgIGNvbnN0IHN3YXBQcmlzb25lcnNUaWxlcyA9ICgpID0+IHtcclxuICAgICAgaWYgKHRpbGVzLmxlbmd0aCA8IHJhY2tzaXplKSB7XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwiTmVlZCBcIiArIHJhY2tzaXplICsgXCIgdGlsZXMgaW4gdGhlIGJhZyB0byBleGNoYW5nZVwiKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgbmV3UHRpbGVzID0gW107XHJcbiAgICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICAgIHdoaWxlIChuZXdQdGlsZXMubGVuZ3RoIDwgcmFja3NpemUgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgICBuZXdQdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIG5ld1B0aWxlcy5zb3J0KCk7XHJcbiAgICAgIG5ld1RpbGVzID0gWy4uLm5ld1RpbGVzLCAuLi5zbmFwc2hvdC5wdGlsZXNdO1xyXG4gICAgICBuZXdUaWxlcy5zb3J0KCk7XHJcbiAgICAgIGxldCBuZXdNb3ZlID0ge2J5OiBjLlBBUlRZX1RZUEVfUFJJU09ORVJTLCB0eXBlOiBjLk1PVkVfVFlQRV9TV0FQfTtcclxuICAgICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgICAgbGV0IG5ld1N5bmNzdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgIHNldFN5bmNzdGFtcChuZXdTeW5jc3RhbXApO1xyXG4gICAgICBzZXRTcXVhcmVBcnJheShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNuYXBzaG90LnNxdWFyZUFycmF5KSkpOyAvLyBEZWVwIGNvcHlcclxuICAgICAgc2V0V2hvc2V0dXJuKGMuV0hPU0VfVFVSTl9HVUFSRFMpO1xyXG4gICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICBzcXVhcmVBcnJheTogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzbmFwc2hvdC5zcXVhcmVBcnJheSkpLCAvLyBEZWVwIGNvcHlcclxuICAgICAgICBwdGlsZXM6IFsuLi5uZXdQdGlsZXNdLFxyXG4gICAgICAgIGd0aWxlczogWy4uLmd0aWxlc10sXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgZnVuYzogXCJlcHRcIiwgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ld1N5bmNzdGFtcCwgLy8gZm9yIGRhdGEgc3luYyBsb2dpY1xyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgIHdob3NldHVybjogYy5XSE9TRV9UVVJOX0dVQVJEUywgLy8gc3dhcCBuZXZlciBlbmRzIHRoZSBnYW1lIHNvIGdvIHRvIG9wcG9uZW50XHJcbiAgICAgICAgICBwdGlsZXM6IG5ld1B0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgcHJpc29uZXJzIHJhY2tcclxuICAgICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgICAgbW92ZTogbmV3TW92ZSAvLyB0aGUgbW92ZSB0aGF0IHdhcyBtYWRlXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBzd2FwR3VhcmRzVGlsZXMgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSkge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcIk5lZWQgXCIgKyByYWNrc2l6ZSArIFwiIHRpbGVzIGluIHRoZSBiYWcgdG8gZXhjaGFuZ2VcIilcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgbGV0IG5ld0d0aWxlcyA9IFtdO1xyXG4gICAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgICB3aGlsZSAobmV3R3RpbGVzLmxlbmd0aCA8IHJhY2tzaXplICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgbmV3R3RpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgfVxyXG4gICAgICBuZXdHdGlsZXMuc29ydCgpO1xyXG4gICAgICBuZXdUaWxlcyA9IFsuLi5uZXdUaWxlcywgLi4uc25hcHNob3QuZ3RpbGVzXTtcclxuICAgICAgbmV3VGlsZXMuc29ydCgpO1xyXG4gICAgICBsZXQgbmV3TW92ZSA9IHtieTogYy5QQVJUWV9UWVBFX0dVQVJEUywgdHlwZTogYy5NT1ZFX1RZUEVfU1dBUH07XHJcbiAgICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICAgIGxldCBuZXdTeW5jc3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICBzZXRTeW5jc3RhbXAobmV3U3luY3N0YW1wKTtcclxuICAgICAgc2V0U3F1YXJlQXJyYXkoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzbmFwc2hvdC5zcXVhcmVBcnJheSkpKTsgLy8gRGVlcCBjb3B5XHJcbiAgICAgIHNldFdob3NldHVybihjLldIT1NFX1RVUk5fUFJJU09ORVJTKTtcclxuICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgc3F1YXJlQXJyYXk6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc25hcHNob3Quc3F1YXJlQXJyYXkpKSwgLy8gRGVlcCBjb3B5XHJcbiAgICAgICAgcHRpbGVzOiBbLi4ucHRpbGVzXSxcclxuICAgICAgICBndGlsZXM6IFsuLi5uZXdHdGlsZXNdLFxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgICAgdGltZXN0YW1wOiBuZXdTeW5jc3RhbXAsIC8vIGZvciBkYXRhIHN5bmMgbG9naWNcclxuICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsXHJcbiAgICAgICAgICB3aG9zZXR1cm46IGMuV0hPU0VfVFVSTl9QUklTT05FUlMsIC8vIHN3YXAgbmV2ZXIgZW5kcyB0aGUgZ2FtZSBzbyBnbyB0byBvcHBvbmVudFxyXG4gICAgICAgICAgZ3RpbGVzOiBuZXdHdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICAgIG1vdmU6IG5ld01vdmUgLy8gdGhlIG1vdmUgdGhhdCB3YXMgbWFkZVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICBcclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIGlzUGxheVZhbGlkKCkge1xyXG4gICAgICAvLyBDaGVjayBpZiB0aGlzIGlzIHRoZSBmaXJzdCB3b3JkIHNpbmNlIGl0IGFmZmVjdHMgdGhlIHZhbGlkaXR5IHJ1bGVzXHJcbiAgICAgIGxldCBmaXJzdFdvcmQgPSB0cnVlO1xyXG4gICAgICBsZXQgbnVtbW92ZXMgPSBtb3Zlcy5sZW5ndGg7XHJcbiAgICAgIGZvciAodmFyIG1vdmVpbmRleCA9IDA7IGZpcnN0V29yZCAmJiAobW92ZWluZGV4IDwgbnVtbW92ZXMpOyArK21vdmVpbmRleCkge1xyXG4gICAgICAgIGlmIChtb3Zlc1ttb3ZlaW5kZXhdLnR5cGUgPT09IGMuTU9WRV9UWVBFX1BMQVkpIHtcclxuICAgICAgICAgIGZpcnN0V29yZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBGaXJzdCB3b3JkIG11c3QgaGl0IGNlbnRlciBzcXVhcmVcclxuICAgICAgaWYgKGZpcnN0V29yZCAmJiBzcXVhcmVBcnJheVttaWRkbGVdW21pZGRsZV0udXNlZGJ5ID09PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcIkZpcnN0IHBsYXkgbXVzdCBoaXQgY2VudGVyIHNxdWFyZVwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgLy8gQXQgbGVhc3QgMSB0aWxlIG11c3QgYmUgcGxheWVkXHJcbiAgICAgIGlmIChjdXJyZW50Y29vcmRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcIllvdSBkaWRuJ3QgcGxheSBhbnkgdGlsZXNcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIEdvIHRocm91Z2ggZWFjaCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgICAgTWFrZSBzdXJlIGl0IGlzIG5vdCBpc29sYXRlZCBmcm9tIGFsbCB0aGUgb3RoZXIgdGlsZXNcclxuICAgICAgICAgIERldGVybWluZSB0aGUgbG93ZXN0IGFuZCBoaWdoZXN0IHJvdyBhbmQgY29sdW1uIG51bWJlcnMgb2YgdGlsZXMgcGxheWVkIHRoaXMgbW92ZVxyXG4gICAgICAqL1xyXG4gICAgICBsZXQgbnVtY29vcmRzID0gY3VycmVudGNvb3Jkcy5sZW5ndGg7XHJcbiAgICAgIGxldCBsb3dyb3cgPSBlZGdlKzE7XHJcbiAgICAgIGxldCBoaWdocm93ID0gLTE7XHJcbiAgICAgIGxldCBsb3djb2wgPSBlZGdlKzE7XHJcbiAgICAgIGxldCBoaWdoY29sID0gLTE7XHJcbiAgICAgIGZvciAodmFyIGNvb3JkPTA7IGNvb3JkIDwgbnVtY29vcmRzOyArK2Nvb3JkKSB7IC8vIEVhY2ggdGlsZSBwbGF5ZWQgdGhpcyBtb3ZlXHJcbiAgICAgICAgbGV0IHRlbXByb3cgPSBwYXJzZUludChjdXJyZW50Y29vcmRzW2Nvb3JkXS5zcGxpdChcIi1cIilbMF0pO1xyXG4gICAgICAgIGxldCB0ZW1wY29sID0gcGFyc2VJbnQoY3VycmVudGNvb3Jkc1tjb29yZF0uc3BsaXQoXCItXCIpWzFdKTtcclxuICAgICAgICBpZiAodGVtcHJvdyA8IGxvd3JvdykgeyBsb3dyb3cgPSB0ZW1wcm93O31cclxuICAgICAgICBpZiAodGVtcHJvdyA+IGhpZ2hyb3cpIHsgaGlnaHJvdyA9IHRlbXByb3c7fVxyXG4gICAgICAgIGlmICh0ZW1wY29sIDwgbG93Y29sKSB7IGxvd2NvbCA9IHRlbXBjb2w7fVxyXG4gICAgICAgIGlmICh0ZW1wY29sID4gaGlnaGNvbCkgeyBoaWdoY29sID0gdGVtcGNvbDt9XHJcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoZXJlIGlzIGFub3RoZXIgdGlsZSBpbW1lZGlhdGVseSBhYm92ZSwgYmVsb3csIGxlZnQsIG9yIHJpZ2h0IChub3QgaXNvbGF0ZWQpXHJcbiAgICAgICAgaWYgKCEodGVtcHJvdyA+IDAgJiYgc3F1YXJlQXJyYXlbdGVtcHJvdy0xXVt0ZW1wY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSAmJlxyXG4gICAgICAgICAgISh0ZW1wY29sID4gMCAmJiBzcXVhcmVBcnJheVt0ZW1wcm93XVt0ZW1wY29sLTFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpICYmXHJcbiAgICAgICAgICAhKHRlbXByb3cgPCBlZGdlICYmIHNxdWFyZUFycmF5W3RlbXByb3crMV1bdGVtcGNvbF0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgJiZcclxuICAgICAgICAgICEodGVtcGNvbCA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbdGVtcHJvd11bdGVtcGNvbCsxXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIkVhY2ggcGxheWVkIHRpbGUgbXVzdCBiZSBwYXJ0IG9mIGEgd29yZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIFVzaW5nIHRoZSBoaWdoIGFuZCBsb3cgdmFsdWVzLCBjaGVjayBpZiB0aGUgcGxheSBpcyBpbiBhIHN0cmFpZ2h0IGxpbmVcclxuICAgICAgaWYgKGxvd3JvdyAhPT0gaGlnaHJvdyAmJiBsb3djb2wgIT09IGhpZ2hjb2wpIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJUaWxlcyBwbGF5ZWQgbXVzdCBiZSBpbiBhIHN0cmFpZ2h0IGxpbmVcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBwbGF5dGhydSA9IGZhbHNlO1xyXG4gICAgICBsZXQgaG9va21hZGUgPSBmYWxzZTtcclxuICAgICAgLyogVHJhdmVyc2UgZnJvbSBmaXJzdCBwbGF5ZWQgdGlsZSB0byBsYXN0IHBsYXllciB0aWxlXHJcbiAgICAgICAgICBNYWtlIHN1cmUgdGhlcmUgYXJlIG5vIHVudXNlZCBzcXVhcmVzIGluYmV0d2VlbiAoZ2FwcyBpbiB0aGUgcGxheWVkIHdvcmQpXHJcbiAgICAgICAgICBDaGVjayBpZiB3ZSBwbGF5ZWQgdGhyb3VnaCBleGlzdGluZyB0aWxlc1xyXG4gICAgICAgICAgQ2hlY2sgaWYgd2UgaG9va2VkIGV4aXN0aW5nIHRpbGVzL3dvcmRzXHJcbiAgICAgICovXHJcbiAgICAgIGZvciAodmFyIHRlbXByb3cgPSBsb3dyb3c7IHRlbXByb3cgPD0gaGlnaHJvdzsgKyt0ZW1wcm93KSB7XHJcbiAgICAgICAgZm9yICh2YXIgdGVtcGNvbCA9IGxvd2NvbDsgdGVtcGNvbCA8PSBoaWdoY29sOyArK3RlbXBjb2wpIHtcclxuICAgICAgICAgIGlmIChzcXVhcmVBcnJheVt0ZW1wcm93XVt0ZW1wY29sXS51c2VkYnkgPT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIlRoZXJlIGlzIGEgZ2FwIGluIHlvdXIgd29yZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCFmaXJzdFdvcmQpIHsgLy8gUGxheSB0aHJvdWdoIGFuZCBob29rIG5vdCBwb3NzaWJsZSBvbiBmaXJzdCBtb3ZlXHJcbiAgICAgICAgICAgIGxldCB0ZW1wY29vcmQgPSB0ZW1wcm93ICsgXCItXCIgKyB0ZW1wY29sO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudGNvb3Jkcy5pbmRleE9mKHRlbXBjb29yZCkgPCAwKSB7IC8vIFRpbGUgd2FzIG5vdCBwbGF5ZWQgdGhpcyBtb3ZlICh3YXMgYWxyZWFkeSBvbiB0aGUgYm9hcmQpXHJcbiAgICAgICAgICAgICAgcGxheXRocnUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgdGVtcHJvdyA+IDAgJiYgc3F1YXJlQXJyYXlbdGVtcHJvdy0xXVt0ZW1wY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgICAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIHRlbXByb3cgPCBlZGdlICYmIHNxdWFyZUFycmF5W3RlbXByb3crMV1bdGVtcGNvbF0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiB0ZW1wY29sID4gMCAmJiBzcXVhcmVBcnJheVt0ZW1wcm93XVt0ZW1wY29sLTFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgdGVtcGNvbCA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbdGVtcHJvd11bdGVtcGNvbCsxXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfSAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghZmlyc3RXb3JkKSB7XHJcbiAgICAgICAgLy8gV2UgYWxyZWFkeSBmb3VuZCBwbGF5IHRocm91Z2ggYSB0aWxlIGJldHdlZW4gZmlyc3QgYW5kIGxhc3QgcGxheWVkIHRpbGVcclxuICAgICAgICAvLyBOb3cgY2hlY2sgaWYgcGxheWVkIHdvcmQgaGFzIGEgdGlsZSBiZWZvcmUgZmlyc3Qgb3IgYWZ0ZXIgbGFzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgbG93Y29sID4gMCAmJiBzcXVhcmVBcnJheVtsb3dyb3ddW2xvd2NvbC0xXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgaGlnaGNvbCA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbbG93cm93XVtoaWdoY29sKzFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBsb3dyb3cgPiAwICYmIHNxdWFyZUFycmF5W2xvd3Jvdy0xXVtsb3djb2xdICE9PSBjLlVTRURfQllfTk9ORSkgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGhpZ2hyb3cgPCBlZGdlICYmIHNxdWFyZUFycmF5W2hpZ2hyb3crMV1bbG93Y29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgICAgIC8vIE5vdyB3ZSBoYXZlIGZ1bGx5IGlkZW50aWZpZWQgcGxheSB0aHJvdWdoIHdlIGNhbiBtYWtlIHN1cmUgdGhleSBwbGF5ZWQgdGhyb3VnaCBvciBtYWRlIGEgaG9va1xyXG4gICAgICAgIC8vIFRoaXMgaW4gbWFuZGF0b3J5IHNpbmNlIGl0IGlzIG5vdCB0aGUgZmlyc3QgbW92ZVxyXG4gICAgICAgIGlmICghcGxheXRocnUgJiYgIWhvb2ttYWRlKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJOZXcgd29yZHMgbXVzdCBleHRlbmQgYW4gZXhpc3Rpbmcgd29yZCBhbmQvb3IgaG9vayBleGlzdGluZyB3b3JkcyBvciB0aWxlc1wiKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRQbGF5SW5mbygpIHtcclxuICAgICAgbGV0IHBsYXlpbmZvID0ge307XHJcbiAgICAgIGxldCBtYWlud29yZCA9IFwiXCI7XHJcbiAgICAgIGxldCBleHRyYXdvcmRzID0gW107XHJcbiAgICAgIGxldCB3b3Jkc3RhcnRjb29yZCA9IFwiXCI7XHJcbiAgICAgIGxldCBudW1yb3dzID0gZWRnZSsxO1xyXG4gICAgICBsZXQgbnVtY29scyA9IGVkZ2UrMTtcclxuICAgICAgbGV0IGxvd3JvdyA9IG51bXJvd3M7XHJcbiAgICAgIGxldCBoaWdocm93ID0gLTE7XHJcbiAgICAgIGxldCBsb3djb2wgPSBudW1jb2xzO1xyXG4gICAgICBsZXQgaGlnaGNvbCA9IC0xO1xyXG4gICAgICBsZXQgbnVtY29vcmRzID0gY3VycmVudGNvb3Jkcy5sZW5ndGg7XHJcbiAgICAgIGZvciAodmFyIGNvb3JkPTA7IGNvb3JkIDwgbnVtY29vcmRzOyArK2Nvb3JkKSB7XHJcbiAgICAgICAgbGV0IHJvdyA9IHBhcnNlSW50KGN1cnJlbnRjb29yZHNbY29vcmRdLnNwbGl0KFwiLVwiKVswXSk7XHJcbiAgICAgICAgbGV0IGNvbCA9IHBhcnNlSW50KGN1cnJlbnRjb29yZHNbY29vcmRdLnNwbGl0KFwiLVwiKVsxXSk7XHJcbiAgICAgICAgaWYgKHJvdyA8IGxvd3Jvdykge1xyXG4gICAgICAgICAgbG93cm93ID0gcm93O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocm93ID4gaGlnaHJvdykge1xyXG4gICAgICAgICAgaGlnaHJvdyA9IHJvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbCA8IGxvd2NvbCkge1xyXG4gICAgICAgICAgbG93Y29sID0gY29sO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sID4gaGlnaGNvbCkge1xyXG4gICAgICAgICAgaGlnaGNvbCA9IGNvbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGxvd3JvdyA8IGhpZ2hyb3cgfHwgbnVtY29vcmRzID09PSAxKSB7IC8vIHRpbGVzIHBsYWNlZCBvbiBkaWZmZXJlbmNlIHJvd3Mgc28gcGxheSBpcyB2ZXJ0aWNhbCwgb3Igc2luZ2xlIHRpbGUgcGxheWVkXHJcbiAgICAgICAgbGV0IGNvbCA9IGxvd2NvbDsgLy8gbG93Y29sIGFuZCBoaWdoY29sIHdpbGwgaGF2ZSB0aGUgc2FtZSB2YWx1ZVxyXG4gICAgICAgIC8vIGZpbmQgdGhlIGxvd2VzdCByb3cgbnVtYmVyIG9mIHRoZSBtYWluIHdvcmQsIHdoaWNoIG1heSBiZSBsb3dlciB0aGFuIHRoYXQgb2YgdGhlIGZpcnN0IHBsYXllZCB0aWxlXHJcbiAgICAgICAgbGV0IGxvd2VzdHJvdyA9IGxvd3JvdztcclxuICAgICAgICB3aGlsZSAobG93ZXN0cm93ID4gMCAmJiBzcXVhcmVBcnJheVtsb3dlc3Ryb3ctMV1bY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICBsb3dlc3Ryb3cgPSBsb3dlc3Ryb3cgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmaW5kIHRoZSBoaWdoZXN0IHJvdyBudW1iZXIgb2YgdGhlIG1haW4gd29yZCwgd2hpY2ggbWF5IGJlIGhpZ2hlciB0aGFuIHRoYXQgb2YgdGhlIGxhc3QgcGxheWVkIHRpbGVcclxuICAgICAgICBsZXQgaGlnaGVzdHJvdyA9IGhpZ2hyb3c7XHJcbiAgICAgICAgd2hpbGUgKGhpZ2hlc3Ryb3cgPCBlZGdlICYmIHNxdWFyZUFycmF5W2hpZ2hlc3Ryb3crMV1bY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICBoaWdoZXN0cm93ID0gaGlnaGVzdHJvdyArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdvcmRzdGFydGNvb3JkID0gYy5CT0FSRF9DT0xfSEVBREVSU1tjb2xdICsgYy5CT0FSRF9ST1dfSEVBREVSU1tsb3dlc3Ryb3ddOyAvLyB2ZXJ0aWNhbCBwbGF5IGNvb3JkcyBzdGFydCB3aXRoIGNvbCBoZWFkZXJcclxuICAgICAgICBmb3IgKHZhciByb3cgPSBsb3dlc3Ryb3c7IHJvdyA8PSBoaWdoZXN0cm93OyArK3Jvdykge1xyXG4gICAgICAgICAgbWFpbndvcmQgPSBtYWlud29yZCArIHNxdWFyZUFycmF5W3Jvd11bY29sXS5sZXR0ZXI7XHJcbiAgICAgICAgICBsZXQgY29vcmQgPSByb3cgKyBcIi1cIiArIGNvbDtcclxuICAgICAgICAgIGlmIChjdXJyZW50Y29vcmRzLmluZGV4T2YoY29vcmQpID4gLTEpIHsgLy8gVGhpcyB0aWxlIHdhcyBwbGF5ZWQsIGNoZWNrIGZvciBob29rc1xyXG4gICAgICAgICAgICBsZXQgbG93ZXN0Y29sID0gY29sO1xyXG4gICAgICAgICAgICB3aGlsZSAobG93ZXN0Y29sID4gMCAmJiBzcXVhcmVBcnJheVtyb3ddW2xvd2VzdGNvbC0xXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICAgICAgbG93ZXN0Y29sID0gbG93ZXN0Y29sIC0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgaGlnaGVzdGNvbCA9IGNvbDtcclxuICAgICAgICAgICAgd2hpbGUgKGhpZ2hlc3Rjb2wgPCBlZGdlICYmIHNxdWFyZUFycmF5W3Jvd11baGlnaGVzdGNvbCsxXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICAgICAgaGlnaGVzdGNvbCA9IGhpZ2hlc3Rjb2wgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChsb3dlc3Rjb2wgPCBoaWdoZXN0Y29sKSB7IC8vIGhvb2sgd2FzIG1hZGVcclxuICAgICAgICAgICAgICBsZXQgZXh0cmF3b3JkID0gXCJcIjtcclxuICAgICAgICAgICAgICBmb3IgKHZhciB0ZW1wY29sID0gbG93ZXN0Y29sOyB0ZW1wY29sIDw9IGhpZ2hlc3Rjb2w7ICsrdGVtcGNvbCkge1xyXG4gICAgICAgICAgICAgICAgZXh0cmF3b3JkID0gZXh0cmF3b3JkICsgc3F1YXJlQXJyYXlbcm93XVt0ZW1wY29sXS5sZXR0ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGV4dHJhd29yZHMgPSBbLi4uZXh0cmF3b3JkcywgZXh0cmF3b3JkXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFpbndvcmQubGVuZ3RoIDwgMikgeyAvLyBIb3Jpem9udGFsIHBsYXkgb3Igc2luZ2xlIHRpbGUgZHJvcCB0aGF0IGNhbm5vdCBiZSBhIHZlcnRpY2FsIHBsYXlcclxuICAgICAgICBsZXQgcm93ID0gbG93cm93OyAvLyBsb3dyb3cgYW5kIGhpZ2hyb3cgd2lsbCBoYXZlIHRoZSBzYW1lIHZhbHVlXHJcbiAgICAgICAgLy8gZmluZCB0aGUgbG93ZXN0IGNvbCBudW1iZXIgb2YgdGhlIG1haW4gd29yZCwgd2hpY2ggbWF5IGJlIGxvd2VyIHRoYW4gdGhhdCBvZiB0aGUgZmlyc3QgcGxheWVkIHRpbGVcclxuICAgICAgICBsZXQgbG93ZXN0Y29sID0gbG93Y29sO1xyXG4gICAgICAgIHdoaWxlIChsb3dlc3Rjb2wgPiAwICYmIHNxdWFyZUFycmF5W3Jvd11bbG93ZXN0Y29sLTFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgIGxvd2VzdGNvbCA9IGxvd2VzdGNvbCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZpbmQgdGhlIGhpZ2hlc3QgY29sIG51bWJlciBvZiB0aGUgbWFpbiB3b3JkLCB3aGljaCBtYXkgYmUgaGlnaGVyIHRoYW4gdGhhdCBvZiB0aGUgbGFzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIGxldCBoaWdoZXN0Y29sID0gaGlnaGNvbDtcclxuICAgICAgICB3aGlsZSAoaGlnaGVzdGNvbCA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbcm93XVtoaWdoZXN0Y29sKzFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgIGhpZ2hlc3Rjb2wgPSBoaWdoZXN0Y29sICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd29yZHN0YXJ0Y29vcmQgPSBjLkJPQVJEX1JPV19IRUFERVJTW3Jvd10gKyBjLkJPQVJEX0NPTF9IRUFERVJTW2xvd2VzdGNvbF07IC8vIGhvcml6b250YWwgcGxheSBjb29yZHMgc3RhcnQgd2l0aCByb3cgaGVhZGVyXHJcbiAgICAgICAgbWFpbndvcmQgPSBcIlwiOyAvLyBJbiBjYXNlIHdlIGdvdCBhIDEgbGV0dGVyIG1haW53b3JkIGluIHRoZSBwcmV2aW91cyBibG9ja1xyXG4gICAgICAgIGV4dHJhd29yZHMgPSBbXTsgLy8gRGl0dG9cclxuICAgICAgICBmb3IgKHZhciBjb2wgPSBsb3dlc3Rjb2w7IGNvbCA8PSBoaWdoZXN0Y29sOyArK2NvbCkge1xyXG4gICAgICAgICAgbWFpbndvcmQgPSBtYWlud29yZCArIHNxdWFyZUFycmF5W3Jvd11bY29sXS5sZXR0ZXI7XHJcbiAgICAgICAgICBsZXQgY29vcmQgPSByb3cgKyBcIi1cIiArIGNvbDtcclxuICAgICAgICAgIGlmIChjdXJyZW50Y29vcmRzLmluZGV4T2YoY29vcmQpID4gLTEpIHsgLy8gVGhpcyB0aWxlIHdhcyBwbGF5ZWQsIGNoZWNrIGZvciBob29rc1xyXG4gICAgICAgICAgICBsZXQgbG93ZXN0cm93ID0gcm93O1xyXG4gICAgICAgICAgICB3aGlsZSAobG93ZXN0cm93ID4gMCAmJiBzcXVhcmVBcnJheVtsb3dlc3Ryb3ctMV1bY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICAgICAgbG93ZXN0cm93ID0gbG93ZXN0cm93IC0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgaGlnaGVzdHJvdyA9IHJvdztcclxuICAgICAgICAgICAgd2hpbGUgKGhpZ2hlc3Ryb3cgPCBlZGdlICYmIHNxdWFyZUFycmF5W2hpZ2hlc3Ryb3crMV1bY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICAgICAgaGlnaGVzdHJvdyA9IGhpZ2hlc3Ryb3cgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChsb3dlc3Ryb3cgPCBoaWdoZXN0cm93KSB7IC8vIGhvb2sgd2FzIG1hZGVcclxuICAgICAgICAgICAgICBsZXQgZXh0cmF3b3JkID0gXCJcIjtcclxuICAgICAgICAgICAgICBmb3IgKHZhciB0ZW1wcm93ID0gbG93ZXN0cm93OyB0ZW1wcm93IDw9IGhpZ2hlc3Ryb3c7ICsrdGVtcHJvdykge1xyXG4gICAgICAgICAgICAgICAgZXh0cmF3b3JkID0gZXh0cmF3b3JkICsgc3F1YXJlQXJyYXlbdGVtcHJvd11bY29sXS5sZXR0ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGV4dHJhd29yZHMgPSBbLi4uZXh0cmF3b3JkcywgZXh0cmF3b3JkXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhgQmVmb3JlIGZldGNoYCk7XHJcbiAgICAgIGxldCBpbnZhbGlkd29yZHMgPSBhd2FpdCB2YWxpZGF0ZVdvcmRzKG1haW53b3JkLCBleHRyYXdvcmRzKTtcclxuICAgICAgY29uc29sZS5sb2coYEFmdGVyIGZldGNoLCBpbnZhbGlkd29yZHM9JHtpbnZhbGlkd29yZHN9YCk7XHJcbiAgICAgIHBsYXlpbmZvID0ge21haW53b3JkOiBtYWlud29yZCwgZXh0cmF3b3JkczogZXh0cmF3b3JkcywgcG9zOiB3b3Jkc3RhcnRjb29yZCwgaW52YWxpZHdvcmRzOiBpbnZhbGlkd29yZHN9O1xyXG4gICAgICByZXR1cm4gcGxheWluZm87XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVXb3JkcyhtYWlud29yZCwgZXh0cmF3b3Jkcykge1xyXG4gICAgICAvLyBCdWlsZCBjb21wbGV0ZSBsaXN0IG9mIG5ld2x5IGZvcm1lZCB3b3JkcyBmb3IgdmFsaWRhdGlvbiBhZ2FpbnN0IGxleGljb25cclxuICAgICAgbGV0IGFsbHdvcmRzID0gbWFpbndvcmQ7XHJcbiAgICAgIGV4dHJhd29yZHMuZm9yRWFjaCgoZXcpID0+IHtcclxuICAgICAgICBhbGx3b3JkcyA9IGFsbHdvcmRzICsgXCIsXCIgKyBldztcclxuICAgICAgfSlcclxuICAgICAgbGV0IHVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FTkFCTEUySz92YWxpZGF0ZT0nIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tL0VOQUJMRTJLP3ZhbGlkYXRlPSdcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBhbGx3b3Jkcy50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgICAgY29uc3QgamRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBJbnNpZGUgdmFsaWRhdGVXb3JkcywgamRhdGE9JHtKU09OLnN0cmluZ2lmeShqZGF0YSl9YCk7XHJcbiAgICAgIHJldHVybiBqZGF0YS5pbnZhbGlkd29yZHM7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBhbGxvd1VuZG9MYXN0VHVybigpIHtcclxuICAgICAgaWYgKCFhbGxvd1Jld2luZCkge1xyXG4gICAgICAgIHNldEFsbG93UmV3aW5kKHRydWUpO1xyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICAgIGZ1bmM6IFwiYWxsb3d1bmRvXCIsIC8vIGFsbG93IHVuZG8gbGFzdCB0dXJuXHJcbiAgICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQgLy8gd2hvIGlzIGFsbG93aW5nIGl0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gcGVyZm9ybVJld2luZCgpIHtcclxuICAgICAgLyogU2VuZCB1bmRvdHVybiB0byBzZXJ2ZXIgYW5kIGl0IHdpbGwgc2VuZCB0aGUgdXBkYXRlZCBnYW1lIGRhdGEgdG8gZ2FtZSBjbGllbnRzLCBpbmNsdWRpbmcgdGhpcyBvbmUgKi9cclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IFwidW5kb3R1cm5cIiAvLyB1bmRvIGxhc3QgdHVyblxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHJlY2FsbFRpbGVzID0gKCkgPT4ge1xyXG4gICAgICBzZXRTcXVhcmVBcnJheShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNuYXBzaG90LnNxdWFyZUFycmF5KSkpOyAvLyBEZWVwIGNvcHlcclxuICAgICAgc2V0UHRpbGVzKFsuLi5zbmFwc2hvdC5wdGlsZXNdKTtcclxuICAgICAgc2V0R3RpbGVzKFsuLi5zbmFwc2hvdC5ndGlsZXNdKTtcclxuICAgICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICAgIHNldFJjZChbLTEsLTEsYy5ESVJfTk9ORV0pO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IHByaXNvbmVyUGFzcyA9ICgpID0+IHtcclxuICAgICAgbGV0IG5ld01vdmUgPSB7Ynk6IGMuUEFSVFlfVFlQRV9QUklTT05FUlMsIHR5cGU6IGMuTU9WRV9UWVBFX1BBU1N9O1xyXG4gICAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgICBsZXQgbmV3V2hvc2V0dXJuID0gaXNEb3VibGVQYXNzKG5ld01vdmVzKSA/IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUiA6IGMuV0hPU0VfVFVSTl9HVUFSRFM7IC8vIElmIGJvdGggcGxheWVycyBwYXNzIHRoZW4gZW5kIHRoZSBnYW1lXHJcbiAgICAgIGxldCBuZXdTeW5jc3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgICByZWNhbGxUaWxlcygpOyAvLyBJbiBjYXNlIHRoZXkgcHV0IHNvbWUgdGlsZXMgb24gdGhlIGJvYXJkIGJlZm9yZSBjbGlja2luZyBQYXNzXHJcbiAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgIHNldFN5bmNzdGFtcChuZXdTeW5jc3RhbXApO1xyXG4gICAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgZnVuYzogXCJlcHRcIiwgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ld1N5bmNzdGFtcCwgLy8gZm9yIGRhdGEgc3luYyBsb2dpY1xyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCwgLy8gd2hvIHBhc3NlZCB0aGVpciB0dXJuXHJcbiAgICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gZWl0aGVyIGl0IGlzIG5vdyBvcHBvbmVudHMgdHVybiBvciB0aGUgcGFzcyBlbmRlZCB0aGUgZ2FtZVxyXG4gICAgICAgICAgbW92ZTogbmV3TW92ZSAvLyB0aGUgbW92ZSB0aGF0IHdhcyBtYWRlXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgZ3VhcmRzUGFzcyA9ICgpID0+IHtcclxuICAgICAgbGV0IG5ld01vdmUgPSB7Ynk6IGMuUEFSVFlfVFlQRV9HVUFSRFMsIHR5cGU6IGMuTU9WRV9UWVBFX1BBU1N9O1xyXG4gICAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgICBsZXQgbmV3V2hvc2V0dXJuID0gaXNEb3VibGVQYXNzKG5ld01vdmVzKSA/IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUiA6IGMuV0hPU0VfVFVSTl9QUklTT05FUlM7IC8vIElmIGJvdGggcGxheWVycyBwYXNzIHRoZW4gZW5kIHRoZSBnYW1lXHJcbiAgICAgIGxldCBuZXdTeW5jc3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgICByZWNhbGxUaWxlcygpOyAvLyBJbiBjYXNlIHRoZXkgcHV0IHNvbWUgdGlsZXMgb24gdGhlIGJvYXJkIGJlZm9yZSBjbGlja2luZyBQYXNzXHJcbiAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgIHNldFN5bmNzdGFtcChuZXdTeW5jc3RhbXApO1xyXG4gICAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgZnVuYzogXCJlZ3RcIiwgLy8gZW5kIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ld1N5bmNzdGFtcCwgLy8gZm9yIGRhdGEgc3luYyBsb2dpY1xyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCwgLy8gd2hvIHBhc3NlZCB0aGVpciB0dXJuXHJcbiAgICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gZWl0aGVyIGl0IGlzIG5vdyBvcHBvbmVudHMgdHVybiBvciB0aGUgcGFzcyBlbmRlZCB0aGUgZ2FtZVxyXG4gICAgICAgICAgbW92ZTogbmV3TW92ZSAvLyB0aGUgbW92ZSB0aGF0IHdhcyBtYWRlXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG5cclxuICAgIGNvbnN0IHJlcXVlc3RHYW1lRGF0YSA9ICgpID0+IHtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsXHJcbiAgICAgICAgICBmdW5jOiBcInJlcXVlc3RnYW1lZGF0YVwiLCAvLyByZXF1ZXN0IGdhbWUgZGF0YVxyXG4gICAgICAgICAgc3luY3N0YW1wOiBzeW5jc3RhbXAgLy8gc28gc2VydmVyIGNhbiBkZWNpZGUgd2hldGhlciBJIGFtIHVwIHRvIGRhdGVcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHJlcXVlc3RTeW5jRGF0YSA9ICgpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coYFNlbmQgcmVxdWVzdHN5bmNkYXRhICR7c3luY3N0YW1wfWApO1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgIGZ1bmM6IFwicmVxdWVzdHN5bmNkYXRhXCIgLy8gcmVxdWVzdCBzeW5jIGRhdGFcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKHBhcnRpY2lwYW50ICE9PSB3aG9zZXR1cm4pIHtyZXR1cm47fVxyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMgPyBlbmRQcmlzb25lcnNUdXJuKCkgOiBlbmRHdWFyZHNUdXJuKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICByZWNhbGxUaWxlcygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgbGV0dGVydGVzdCA9IC9eW0EtWmEtelxcP10kLzsgLy8gc2luZ2xlIGxldHRlciBvciBxdWVzdGlvbiBtYXJrIGtleSBwcmVzc2VkXHJcbiAgICAgIGlmIChldmVudC5rZXkubWF0Y2gobGV0dGVydGVzdCkpIHtcclxuICAgICAgICBsZXQgbGV0dGVyID0gZXZlbnQua2V5LnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgbGV0IHJhY2sgPSB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMgPyBwdGlsZXMgOiBndGlsZXM7XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGlvbiA9IHJhY2suaW5kZXhPZihsZXR0ZXIpO1xyXG4gICAgICAgIGlmIChuZXdTZWxlY3Rpb24gPT09IC0xKSB7XHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSByYWNrLmluZGV4T2YoXCI/XCIpOyAvLyBVc2UgdGhlIGJsYW5rIGlmIHRoZXkgaGF2ZSBvbmVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5ld1NlbGVjdGlvbiA+IC0xKSB7IC8vIFByZXNzZWQgbGV0dGVyIGlzIG9uIHRoZSByYWNrXHJcbiAgICAgICAgICBsZXQgcm93ID0gcmNkWzBdO1xyXG4gICAgICAgICAgbGV0IGNvbCA9IHJjZFsxXTtcclxuICAgICAgICAgIGxldCBkaXIgPSByY2RbMl07XHJcbiAgICAgICAgICBpZiAocm93ID4tMSAmJiBjb2wgPiAtMSAmJiBkaXIgIT09IGMuRElSX05PTkUpIHsgLy8gcm93LCBjb2wsIGRpciBhcmUgc2V0IHRvIGFjY2VwdCBrZXlzdHJva2VcclxuICAgICAgICAgICAgLy8gTmVlZCB0byBmaWd1cmUgb3V0IG5leHQgc3FhdXJlIHRvIGF1dG8tcGxhY2UgYSB0aWxlXHJcbiAgICAgICAgICAgIGxldCBuZXdSY2QgPSByY2Q7XHJcbiAgICAgICAgICAgIGlmIChkaXIgPT09IGMuRElSX1JJR0hUKSB7IC8vIHBsYXlpbmcgcmlnaHR3YXJkc1xyXG4gICAgICAgICAgICAgIGxldCBuZXdjID0gLTE7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgdGVtcGNvbCA9IGNvbCArIDE7IHRlbXBjb2wgPCBlZGdlICsgMSAmJiBuZXdjID09PSAtMTsgdGVtcGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3F1YXJlQXJyYXlbcm93XVt0ZW1wY29sXS51c2VkYnkgPT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICAgICAgICAgIG5ld2MgPSB0ZW1wY29sO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAobmV3YyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIG5ld1JjZCA9IFstMSwtMSxjLkRJUl9OT05FXTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3UmNkID0gW3JvdywgbmV3YywgYy5ESVJfUklHSFRdO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJvdyxjb2wsbmV3U2VsZWN0aW9uLG5ld1JjZCk7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTsgLy8gd2hlbiB0aGV5IGFyZSB0eXBpbmcgdGhleSBhcmUgbm90IHNlbGVjdGluZyByYWNrIHRpbGVzIGJ5IGNsaWNraW5nIHRoZW0gb24gdGhlIHJhY2tcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRpciA9PT0gYy5ESVJfRE9XTikgeyAvLyBwbGF5aW5nIGRvd253YXJkc1xyXG4gICAgICAgICAgICAgIGxldCBuZXdyID0gLTE7XHJcbiAgICAgICAgICAgICAgbGV0IG51bXJvd3MgPSAocmFja3NpemUqMikrMTtcclxuICAgICAgICAgICAgICBmb3IgKHZhciB0ZW1wcm93ID0gcm93ICsgMTsgdGVtcHJvdyA8IG51bXJvd3MgJiYgbmV3ciA9PT0gLTE7IHRlbXByb3crKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZUFycmF5W3RlbXByb3ddW2NvbF0udXNlZGJ5ID09PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgICAgICAgICBuZXdyID0gdGVtcHJvdztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKG5ld3IgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSY2QgPSBbLTEsLTEsYy5ESVJfTk9ORV07XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1JjZCA9IFtuZXdyLCBjb2wsIGMuRElSX0RPV05dO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJvdyxjb2wsbmV3U2VsZWN0aW9uLG5ld1JjZCk7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTsgLy8gd2hlbiB0aGV5IGFyZSB0eXBpbmcgdGhleSBhcmUgbm90IHNlbGVjdGluZyByYWNrIHRpbGVzIGJ5IGNsaWNraW5nIHRoZW0gb24gdGhlIHJhY2tcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQmFja3NwYWNlXCIgJiYgY3VycmVudGNvb3Jkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gU2FtZSBhcyBjbGlja2luZyBvbiBhIHBsYXllZC10aGlzLW1vdmUgdGlsZSBpbiB0ZXJtcyBvZiByZXR1cm5pbmcgdGhlIHRpbGUgdG8gdGhlIHJhY2tcclxuICAgICAgICAvLyBIb3dldmVyIHdlIGFsc28gd2FudCB0byBzZXQgdXAgcmNkIHNvIHRoZXkgY2FuIHByZXNzIHRoZSBrZXkgdGhleSBtZWFudCBhbmQgY29udGludWVcclxuICAgICAgICBsZXQgY29vcmQgPSBjdXJyZW50Y29vcmRzW2N1cnJlbnRjb29yZHMubGVuZ3RoIC0gMV07IC8vIHRpbGUgdG8gcmV0dXJuIHRvIHJhY2tcclxuICAgICAgICBsZXQgcm93ID0gcGFyc2VJbnQoY29vcmQuc3BsaXQoXCItXCIpWzBdKTtcclxuICAgICAgICBsZXQgY29sID0gcGFyc2VJbnQoY29vcmQuc3BsaXQoXCItXCIpWzFdKTtcclxuICAgICAgICBsZXQgbmV3Q3VycmVudGNvb3JkcyA9IFsuLi5jdXJyZW50Y29vcmRzXTtcclxuICAgICAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICAgICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgICAgIGxldCBuZXdTcXVhcmVBcnJheSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3F1YXJlQXJyYXkpKTsgLy8gRGVlcCBjb3B5XHJcbiAgICAgICAgbGV0IG5ld1NxdWFyZUFycmF5Um93ID0gbmV3U3F1YXJlQXJyYXlbcm93XTtcclxuICAgICAgICBsZXQgbmV3U3F1YXJlQXJyYXlDZWxsID0gbmV3U3F1YXJlQXJyYXlSb3dbY29sXTtcclxuICAgICAgICBsZXQgbmV3UmNkID0gWy0xLC0xLGMuRElSX05PTkVdO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3Rpb24gPSBzZWxlY3Rpb247XHJcbiAgICAgICAgbmV3Q3VycmVudGNvb3Jkcy5zcGxpY2UoY3VycmVudGNvb3Jkcy5sZW5ndGgtMSwxKTtcclxuICAgICAgICBsZXQgcmV0dXJuZWRUaWxlID0gc3F1YXJlQXJyYXlbcm93XVtjb2xdLmxldHRlcjtcclxuICAgICAgICBpZiAod2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTKSB7XHJcbiAgICAgICAgICBuZXdQdGlsZXMucHVzaChyZXR1cm5lZFRpbGUpO1xyXG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3UHRpbGVzLmxlbmd0aC0xO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXdHdGlsZXMucHVzaChyZXR1cm5lZFRpbGUpO1xyXG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3R3RpbGVzLmxlbmd0aC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdTcXVhcmVBcnJheUNlbGwudXNlZGJ5ID0gYy5VU0VEX0JZX05PTkU7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlDZWxsLmxldHRlciA9IGMuTEVUVEVSX05PTkU7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlSb3dbY29sXSA9IG5ld1NxdWFyZUFycmF5Q2VsbDtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheVtyb3ddID0gWy4uLm5ld1NxdWFyZUFycmF5Um93XTtcclxuICAgICAgICBsZXQgZGlyID0gcmNkWzJdO1xyXG4gICAgICAgIGlmIChkaXIgIT09IGMuRElSX05PTkUpIHtcclxuICAgICAgICAgIC8vIGRpcmVjdGlvbiB3YXMgc2V0IHNvIGtlZXAgaXRcclxuICAgICAgICAgIG5ld1JjZCA9IFtyb3csY29sLGRpcl07XHJcbiAgICAgICAgICBpZiAoY3VycmVudGNvb3Jkcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0aW9uID0gLTE7IC8vIGlmIHRoZXkgYmFja3NwYWNlIGFsbCB0aGUgbGV0dGVycyBvZmYgbGVhdmUgcmFjayB0aWxlIHVuc2VsZWN0ZWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q3VycmVudGNvb3JkcyhuZXdDdXJyZW50Y29vcmRzKTtcclxuICAgICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgICBzZXRTcXVhcmVBcnJheShuZXdTcXVhcmVBcnJheSk7XHJcbiAgICAgICAgc2V0UmNkKG5ld1JjZCk7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZU1vdmVDbGljayA9IChfbWkpID0+IHt9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaXNvbmJyZWFrXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWNvbnRhaW5lciB3My10ZWFsIHRvcEJhckhlaWdodFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LW1pZGRsZVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXlIZWFkaW5nRm9udFwiPlByaXNvbiBCcmVhazwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS10b3BsZWZ0IHczLWJsYWNrIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIEdhbWUgaWQ6IHtnYW1laWR9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1ib3R0b21sZWZ0IHczLW9yYW5nZSB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICBQcmlzb25lcnM6IHtcclxuICAgICAgICAgICAgICBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IG5pY2tuYW1lXHJcbiAgICAgICAgICAgICAgOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUyA/IG9wcG5hbWVcclxuICAgICAgICAgICAgICA6ICdTZWNyZXQnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktdG9wcmlnaHQgdzMtYmxhY2sgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIuLi8uLi9cIn0+XHJcbiAgICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktYm90dG9tcmlnaHQgdzMtb3JhbmdlIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIEd1YXJkczoge1xyXG4gICAgICAgICAgICAgIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gb3BwbmFtZVxyXG4gICAgICAgICAgICAgIDogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMgPyBuaWNrbmFtZVxyXG4gICAgICAgICAgICAgIDogJ1NlY3JldCdcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGJUaWxlQW5kTW92ZXNPdXRlclwiPlxyXG4gICAgICAgICAgICAgIDxTaG93VW5zZWVuVGlsZXNcclxuICAgICAgICAgICAgICAgIHRpbGVzPXt0aWxlc31cclxuICAgICAgICAgICAgICAgIG90aGVydGlsZXM9e1xyXG4gICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IGd0aWxlc1xyXG4gICAgICAgICAgICAgICAgICA6IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTID8gcHRpbGVzXHJcbiAgICAgICAgICAgICAgICAgIDogW119IC8vIE9ic2VydmVycyBzZWUgYm90aCByYWNrcyBzbyBub3RoaW5nIHRvIGV4Y2x1ZGUgZnJvbSB0aWxlYmFnIGFzIHVuc2VlblxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8U2hvd01vdmVzIG1vdmVzPXttb3Zlc30gb25tb3ZlY2xpY2s9eyhtaSkgPT4gaGFuZGxlTW92ZUNsaWNrKG1pKX0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwYlBsYXllck91dGVyU2VjdGlvblwiPlxyXG4gICAgICAgICAgICB7cGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgP1xyXG4gICAgICAgICAgICAgIDxQbGF5ZXJTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICByYWNrdGlsZXM9e3B0aWxlc31cclxuICAgICAgICAgICAgICAgIHdob3NldHVybj17d2hvc2V0dXJufVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IGhhbmRsZVJhY2tUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja0ZpbmlzaFR1cm49eygpID0+IGVuZFByaXNvbmVyc1R1cm4oKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tUaWxlUmVjYWxsPXsoKSA9PiByZWNhbGxUaWxlcygpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1RpbGVFeGNoYW5nZT17KCkgPT4gc3dhcFByaXNvbmVyc1RpbGVzKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrUGFzc1BsYXk9eygpID0+IHByaXNvbmVyUGFzcygpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1VuZG9MYXN0UGxheT17KCkgPT4gcGVyZm9ybVJld2luZCgpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja0FsbG93VW5kbz17KCkgPT4gYWxsb3dVbmRvTGFzdFR1cm4oKX1cclxuICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50PXtwYXJ0aWNpcGFudH1cclxuICAgICAgICAgICAgICAgIG1vdmVzPXttb3Zlc31cclxuICAgICAgICAgICAgICAgIGFsbG93UmV3aW5kPXthbGxvd1Jld2luZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA6cGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMgP1xyXG4gICAgICAgICAgICAgIDxQbGF5ZXJTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICByYWNrdGlsZXM9e2d0aWxlc31cclxuICAgICAgICAgICAgICAgIHdob3NldHVybj17d2hvc2V0dXJufVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IGhhbmRsZVJhY2tUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja0ZpbmlzaFR1cm49eygpID0+IGVuZEd1YXJkc1R1cm4oKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tUaWxlUmVjYWxsPXsoKSA9PiByZWNhbGxUaWxlcygpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1RpbGVFeGNoYW5nZT17KCkgPT4gc3dhcEd1YXJkc1RpbGVzKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrUGFzc1BsYXk9eygpID0+IGd1YXJkc1Bhc3MoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tVbmRvTGFzdFBsYXk9eygpID0+IHBlcmZvcm1SZXdpbmQoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tBbGxvd1VuZG89eygpID0+IGFsbG93VW5kb0xhc3RUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudD17cGFydGljaXBhbnR9XHJcbiAgICAgICAgICAgICAgICBtb3Zlcz17bW92ZXN9XHJcbiAgICAgICAgICAgICAgICBhbGxvd1Jld2luZD17YWxsb3dSZXdpbmR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJQbGF5ZXJJbm5lclNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJQbGF5ZXJUaXRsZVwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+e2MuUEFSVFlfSUNPTl9QUklTT05FUlN9PC9pPiZuYnNwO3tjLlBBUlRZX1RJVExFX1BSSVNPTkVSU30mbmJzcDs8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntjLlBBUlRZX0lDT05fUFJJU09ORVJTfTwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICB7cHRpbGVzICYmIHB0aWxlcy5tYXAoKHQsIHRpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE9ic2VydmVyUmFja1RpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BPYnNlcnZlclByaXNvbmVyc1JhY2tUaWxlJHt0aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50PSdQJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGV2YWx1ZT17dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlaW5kZXg9e3RpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlBsYXllclRpdGxlXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57Yy5QQVJUWV9JQ09OX0dVQVJEU308L2k+Jm5ic3A7e2MuUEFSVFlfVElUTEVfR1VBUkRTfSZuYnNwOzxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+e2MuUEFSVFlfSUNPTl9HVUFSRFN9PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVyYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtndGlsZXMgJiYgZ3RpbGVzLm1hcCgodCwgdGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T2JzZXJ2ZXJSYWNrVGlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YE9ic2VydmVyR3VhcmRzUmFja1RpbGUke3RpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnQ9J0cnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZXZhbHVlPXt0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVpbmRleD17dGl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAge3BhcnRpY2lwYW50ID09PSB3aG9zZXR1cm4gP1xyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgb25LZXlEb3duQ2FwdHVyZT17aGFuZGxlS2V5RG93bn0+XHJcbiAgICAgICAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgICAgICAgc3F1YXJlQXJyYXk9e3NxdWFyZUFycmF5fVxyXG4gICAgICAgICAgICAgICAgICByY2Q9e3JjZH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KHJpLCBjaSkgPT4gaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyaSwgY2ksIC0xLG51bGwpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgICAgICAgc3F1YXJlQXJyYXk9e3NxdWFyZUFycmF5fVxyXG4gICAgICAgICAgICAgICAgICByY2Q9e3JjZH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge319XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDxTaG93UmVzY3VlcyByZXNjdWVzPXtyZXNjdWVzfSAvPlxyXG4gICAgICAgICAgICA8Q2hhdCBnYW1laWQ9e2dhbWVpZH0gY2xpZW50PXtjbGllbnR9IG5pY2tuYW1lPXtuaWNrbmFtZX0gbXNncz17Y2hhdG1zZ3N9IHNldE1zZ3M9e3NldENoYXRtc2dzfSBwYXJ0aWNpcGFudD17cGFydGljaXBhbnR9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1jb250YWluZXIgdzMtdGVhbCB0b3BCYXJIZWlnaHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1taWRkbGUgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICB7d2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fR0FNRU9WRVIgP1xyXG4gICAgICAgICAgICAgIDxoMT5HYW1lIE92ZXIhPC9oMT5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIDxwPntjLkpPS0VfQVJSQVlbam9rZWluZGV4XX08L3A+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbmNvbnN0IE9ic2VydmVyUmFja1RpbGUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBzZWxlY3RlZFVuc2VsZWN0ZWQgPSBcIlVuc2VsZWN0ZWQgXCI7XHJcbiAgY29uc3QgdU5vdFUgPSBwcm9wcy50aWxldmFsdWUgPT09IFwiUVwiID8gXCJ1IFwiIDogXCJcIjtcclxuICBjb25zdCB0aWxlY2xhc3MgPSBcInBiVGlsZU9uUmFjayBcIiArIHNlbGVjdGVkVW5zZWxlY3RlZCArIHVOb3RVICsgcHJvcHMucGFydGljaXBhbnQ7XHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgICAga2V5PXtwcm9wcy50aWxlaW5kZXh9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3RpbGVjbGFzc31cclxuICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVPblJhY2tUZXh0XCI+e3Byb3BzLnRpbGV2YWx1ZX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgR2FtZTsiXSwic291cmNlUm9vdCI6IiJ9