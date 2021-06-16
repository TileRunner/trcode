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
    console.log(`${messageData.gameid} ${messageData.func}`);

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
        console.log(`providesyndata passed ${messageData.syncstamp} and I have ${syncstamp}`);

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

  const endPrisonersTurn = () => {
    if (!isPlayValid()) {
      return;
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

    let playinfo = getPlayInfo();
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
    let snapsquarearray = JSON.parse(JSON.stringify(squareArray)); // Deep copy

    let snapptiles = [...ptiles];
    let snapgtiles = [...gtiles];
    let newWhoseturn = newGtiles.length > 0 ? _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_PRISONERS : _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_GAMEOVER;

    if (!(0,_lib_pb_anyUnusedEscapeHatches__WEBPACK_IMPORTED_MODULE_11__.anyUnusedEscapeHatches)(squareArray)) {
      newWhoseturn = _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_GAMEOVER; // No escape hatches left
    }

    let playinfo = getPlayInfo();
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
  };

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

    playinfo = {
      mainword: mainword,
      extrawords: extrawords,
      pos: wordstartcoord
    };
    return playinfo;
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
    console.log(`Send requestsyncdata ${syncstamp}`);
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
          lineNumber: 949,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 948,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-topleft w3-black topBarCorner commonFontFamily",
        children: ["Game id: ", gameid]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 951,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-bottomleft w3-orange topBarCorner commonFontFamily",
        children: ["Prisoners: ", participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? nickname : participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_GUARDS ? oppname : 'Secret']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 954,
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
              lineNumber: 963,
              columnNumber: 18
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 963,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 962,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 961,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-bottomright w3-orange topBarCorner commonFontFamily",
        children: ["Guards: ", participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? oppname : participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_GUARDS ? nickname : 'Secret']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 966,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 947,
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
          lineNumber: 976,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_movesSection__WEBPACK_IMPORTED_MODULE_6__.default, {
          moves: moves
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 983,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 975,
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
          lineNumber: 987,
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
          lineNumber: 1003,
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
              lineNumber: 1020,
              columnNumber: 48
            }, undefined), "\xA0", _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TITLE_PRISONERS, "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_ICON_PRISONERS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1020,
              columnNumber: 143
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1020,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbTilerack",
            children: ptiles && ptiles.map((t, ti) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ObserverRackTile, {
              participant: "P",
              tilevalue: t,
              tileindex: ti
            }, `ObserverPrisonersRackTile${ti}`, false, {
              fileName: _jsxFileName,
              lineNumber: 1023,
              columnNumber: 23
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1021,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbPlayerTitle",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_ICON_GUARDS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1031,
              columnNumber: 48
            }, undefined), "\xA0", _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TITLE_GUARDS, "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_ICON_GUARDS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1031,
              columnNumber: 137
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1031,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbTilerack",
            children: gtiles && gtiles.map((t, ti) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ObserverRackTile, {
              participant: "G",
              tilevalue: t,
              tileindex: ti
            }, `ObserverGuardsRackTile${ti}`, false, {
              fileName: _jsxFileName,
              lineNumber: 1034,
              columnNumber: 23
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1032,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 1019,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 985,
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
            lineNumber: 1048,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1047,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_board__WEBPACK_IMPORTED_MODULE_4__.default, {
            squareArray: squareArray,
            rcd: rcd,
            onClick: () => {}
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1056,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1055,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1045,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_rescuesSection__WEBPACK_IMPORTED_MODULE_7__.default, {
          rescues: rescues
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1065,
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
          lineNumber: 1066,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1064,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 974,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-display-container w3-teal topBarHeight",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-middle commonFontFamily",
        children: whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_GAMEOVER ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Game Over!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1072,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.JOKE_ARRAY[jokeindex]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1074,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1070,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1069,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 946,
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
      lineNumber: 1091,
      columnNumber: 11
    }, undefined)
  }, props.tileindex, false, {
    fileName: _jsxFileName,
    lineNumber: 1087,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvZ2FtZS5qcyJdLCJuYW1lcyI6WyJHYW1lIiwiaXNyZWpvaW4iLCJwYXJ0aWNpcGFudCIsImdhbWVpZCIsIm5pY2tuYW1lIiwid3NtZXNzYWdlIiwiY2xpZW50IiwicmFja3NpemUiLCJzeW5jc3RhbXAiLCJzZXRTeW5jc3RhbXAiLCJ1c2VTdGF0ZSIsIm1pZGRsZSIsImVkZ2UiLCJpbml0aWFsdGlsZXMiLCJjIiwidGlsZXMiLCJzZXRUaWxlcyIsInB0aWxlcyIsInNldFB0aWxlcyIsImd0aWxlcyIsInNldEd0aWxlcyIsInNxdWFyZUFycmF5Iiwic2V0U3F1YXJlQXJyYXkiLCJzZWxlY3Rpb24iLCJzZXRTZWxlY3Rpb24iLCJ3aG9zZXR1cm4iLCJzZXRXaG9zZXR1cm4iLCJjdXJyZW50Y29vcmRzIiwic2V0Q3VycmVudGNvb3JkcyIsInJlc2N1ZXMiLCJzZXRSZXNjdWVzIiwicmNkIiwic2V0UmNkIiwibW92ZXMiLCJzZXRNb3ZlcyIsInNuYXBzaG90Iiwic2V0U25hcHNob3QiLCJqb2tlaW5kZXgiLCJzZXRKb2tlaW5kZXgiLCJhbGxvd1Jld2luZCIsInNldEFsbG93UmV3aW5kIiwib3BwbmFtZSIsInNldE9wcG5hbWUiLCJjaGF0bXNncyIsInNldENoYXRtc2dzIiwicHJldlJlc2N1ZXMiLCJ1c2VQcmV2aW91cyIsInVzZUVmZmVjdCIsImluaXRpYWxpemVSb3V0aW5lIiwibXNnIiwicHJvY2Vzc0dhbWVNZXNzYWdlIiwic2Nyb2xsVG9Cb3R0b20iLCJteWF1ZGlvIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwicGxheSIsIm5ld2ppIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInJlcXVlc3RTeW5jRGF0YSIsImNsZWFySW50ZXJ2YWwiLCJmaXJzdFNxdWFyZUFycmF5IiwiaW5pdGlhbFNxdWFyZUFycmF5IiwicmVqb2luR2FtZSIsInN0YXJ0R2FtZSIsImpvaW5HYW1lIiwic3RhcnRPYnNlcnZpbmdHYW1lIiwibmV3U3luY3N0YW1wIiwiRGF0ZSIsIm5vdyIsInRlbXBQVGlsZXMiLCJ0ZW1wR1RpbGVzIiwidGVtcFRpbGVzIiwibGVuZ3RoIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzcGxpY2UiLCJzb3J0Iiwic2VuZCIsInR5cGUiLCJmdW5jIiwidGltZXN0YW1wIiwic2VuZGVyIiwicG5hbWUiLCJnbmFtZSIsInB1dEF0TW92ZVN0YXJ0IiwibWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsImdkIiwiYnVpbGRHYW1lZGF0YUZyb21BcGlkYXRhIiwiYXBpZGF0YSIsIm5ld1NuYXBzaG90Iiwic3RyaW5naWZ5IiwibmV3Q2hhdG1zZ3MiLCJmcm9tIiwic2VuZG1zZyIsInJlcXVlc3RHYW1lRGF0YSIsImhhbmRsZUJvYXJkU3F1YXJlQ2xpY2siLCJyaSIsImNpIiwibmV3U2VsZWN0aW9uIiwibmV3UmNkIiwibmV3U3F1YXJlQXJyYXkiLCJuZXdTcXVhcmVBcnJheVJvdyIsIm5ld1NxdWFyZUFycmF5Q2VsbCIsIm5ld1B0aWxlcyIsIm5ld0d0aWxlcyIsIm5ld0N1cnJlbnRjb29yZHMiLCJjb29yZCIsIlN0cmluZyIsImNjaSIsImluZGV4T2YiLCJ1c2VkYnkiLCJzZWxlY3RlZFRpbGUiLCJsZXR0ZXIiLCJuZXdEaXJlY3Rpb24iLCJoYW5kbGVSYWNrVGlsZUNsaWNrIiwidGlsZWluZGV4IiwibmV3cmFjayIsIm1vdmVmcm9tIiwibW92ZXRpbGUiLCJtb3ZldG8iLCJlbmRQcmlzb25lcnNUdXJuIiwiaXNQbGF5VmFsaWQiLCJuZXdSZXNjdWVzIiwiZXNjYXBlaGF0Y2hlcyIsImkiLCJuZXdUaWxlcyIsIm5ld1dob3NldHVybiIsImFueVVudXNlZEVzY2FwZUhhdGNoZXMiLCJwbGF5aW5mbyIsImdldFBsYXlJbmZvIiwibmV3TW92ZSIsImJ5IiwibWFpbndvcmQiLCJleHRyYXdvcmRzIiwicG9zIiwibmV3TW92ZXMiLCJtb3ZlIiwiZW5kR3VhcmRzVHVybiIsInNuYXBzcXVhcmVhcnJheSIsInNuYXBwdGlsZXMiLCJzbmFwZ3RpbGVzIiwic3dhcFByaXNvbmVyc1RpbGVzIiwid2luZG93IiwiYWxlcnQiLCJNT1ZFX1RZUEVfU1dBUCIsInN3YXBHdWFyZHNUaWxlcyIsImZpcnN0V29yZCIsIm51bW1vdmVzIiwibW92ZWluZGV4IiwibnVtY29vcmRzIiwibG93cm93IiwiaGlnaHJvdyIsImxvd2NvbCIsImhpZ2hjb2wiLCJ0ZW1wcm93IiwicGFyc2VJbnQiLCJzcGxpdCIsInRlbXBjb2wiLCJwbGF5dGhydSIsImhvb2ttYWRlIiwidGVtcGNvb3JkIiwid29yZHN0YXJ0Y29vcmQiLCJudW1yb3dzIiwibnVtY29scyIsInJvdyIsImNvbCIsImxvd2VzdHJvdyIsImhpZ2hlc3Ryb3ciLCJsb3dlc3Rjb2wiLCJoaWdoZXN0Y29sIiwiZXh0cmF3b3JkIiwiYWxsb3dVbmRvTGFzdFR1cm4iLCJwZXJmb3JtUmV3aW5kIiwicmVjYWxsVGlsZXMiLCJwcmlzb25lclBhc3MiLCJNT1ZFX1RZUEVfUEFTUyIsImlzRG91YmxlUGFzcyIsImd1YXJkc1Bhc3MiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImtleSIsImxldHRlcnRlc3QiLCJtYXRjaCIsInRvVXBwZXJDYXNlIiwicmFjayIsImRpciIsIm5ld2MiLCJuZXdyIiwicmV0dXJuZWRUaWxlIiwidGkiLCJQQVJUWV9JQ09OX1BSSVNPTkVSUyIsIm1hcCIsInQiLCJQQVJUWV9JQ09OX0dVQVJEUyIsIk9ic2VydmVyUmFja1RpbGUiLCJwcm9wcyIsInNlbGVjdGVkVW5zZWxlY3RlZCIsInVOb3RVIiwidGlsZXZhbHVlIiwidGlsZWNsYXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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cGFnZXMvcGIvcHJpc29uYnJlYWsuMzlmZjc3ZTU0MTk0ZWFlODc1MDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUGxheWVyU2VjdGlvbiBmcm9tICcuLi9wYi9wbGF5ZXJTZWN0aW9uJztcclxuaW1wb3J0IEJvYXJkIGZyb20gJy4uL3BiL2JvYXJkJztcclxuaW1wb3J0IFNob3dVbnNlZW5UaWxlcyBmcm9tICcuLi9wYi91bnNlZW5UaWxlc1NlY3Rpb24nO1xyXG5pbXBvcnQgU2hvd01vdmVzIGZyb20gJy4uL3BiL21vdmVzU2VjdGlvbic7XHJcbmltcG9ydCBTaG93UmVzY3VlcyBmcm9tICcuLi9wYi9yZXNjdWVzU2VjdGlvbic7XHJcbmltcG9ydCBDaGF0IGZyb20gJy4uL3BiL2NoYXRTZWN0aW9uJztcclxuaW1wb3J0ICogYXMgYyBmcm9tICcuLi8uLi9saWIvcGIvcHJpc29uQnJlYWtDb25zdGFudHMnO1xyXG5pbXBvcnQgeyBpbml0aWFsU3F1YXJlQXJyYXkgfSBmcm9tICcuLi8uLi9saWIvcGIvaW5pdGlhbFNxdWFyZUFycmF5JztcclxuaW1wb3J0IHsgYW55VW51c2VkRXNjYXBlSGF0Y2hlcyB9IGZyb20gXCIuLi8uLi9saWIvcGIvYW55VW51c2VkRXNjYXBlSGF0Y2hlc1wiO1xyXG5pbXBvcnQgeyBidWlsZEdhbWVkYXRhRnJvbUFwaWRhdGEgfSBmcm9tIFwiLi4vLi4vbGliL3BiL2J1aWxkR2FtZWRhdGFGcm9tQXBpZGF0YVwiO1xyXG5pbXBvcnQgeyBpc0RvdWJsZVBhc3MgfSBmcm9tIFwiLi4vLi4vbGliL3BiL2lzRG91YmxlUGFzc1wiO1xyXG5pbXBvcnQgeyBzY3JvbGxUb0JvdHRvbSB9IGZyb20gXCIuLi8uLi9saWIvc2Nyb2xsVG9Cb3R0b21cIjtcclxuaW1wb3J0IHsgdXNlUHJldmlvdXMgfSBmcm9tIFwiLi4vLi4vbGliL3VzZVByZXZpb3VzXCI7XHJcblxyXG5jb25zdCBHYW1lID0gKHtpc3Jlam9pblxyXG4gICAgLCBwYXJ0aWNpcGFudCAvLyBQcmlzb25lcnMsIEd1YXJkcywgb3IgT2JzZXJ2ZXIgKG5vdCBpbXBsZW1lbnRlZClcclxuICAgICwgZ2FtZWlkXHJcbiAgICAsIG5pY2tuYW1lXHJcbiAgICAsIHdzbWVzc2FnZVxyXG4gICAgLCBjbGllbnRcclxuICAgICwgcmFja3NpemU9NCAvLyBPcHRpb24gZm9yIHJhY2sgc2l6ZSAoZ2l2ZSBpdCBhIGRlZmF1bHQgZm9yIEJ1aWxkKVxyXG4gICAgfSkgPT4ge1xyXG4gICAgY29uc3QgW3N5bmNzdGFtcCwgc2V0U3luY3N0YW1wXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IG1pZGRsZSA9IHJhY2tzaXplOyAvLyBNaWRkbGUgZWxlbWVudCBpbiByb3cgb3IgY29sdW1uIGFycmF5XHJcbiAgICBjb25zdCBlZGdlID0gcmFja3NpemUgKiAyOyAvLyBMYXN0IGVsZW1lbnQgaW4gcm93IG9yIGNvbHVtbiBhcnJheVxyXG4gICAgY29uc3QgaW5pdGlhbHRpbGVzID0gcmFja3NpemUgPT09IDYgPyBjLlRJTEVCQUc2IDogcmFja3NpemUgPT09IDcgPyBjLlRJTEVCQUc3IDogcmFja3NpemUgPT09IDUgPyBjLlRJTEVCQUc1IDogYy5USUxFQkFHNDtcclxuICAgIGNvbnN0IFt0aWxlcywgc2V0VGlsZXNdID0gdXNlU3RhdGUoWy4uLmluaXRpYWx0aWxlc10pO1xyXG4gICAgY29uc3QgW3B0aWxlcywgc2V0UHRpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtndGlsZXMsIHNldEd0aWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc3F1YXJlQXJyYXksIHNldFNxdWFyZUFycmF5XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3Rpb24sIHNldFNlbGVjdGlvbl0gPSB1c2VTdGF0ZSgtMSk7IC8vIHJlbGF0aXZlIHRvIHJhY2sgb2YgcGxheWVyIG1ha2luZyBhIHBsYXlcclxuICAgIGNvbnN0IFt3aG9zZXR1cm4sIHNldFdob3NldHVybl0gPSB1c2VTdGF0ZShjLldIT1NFX1RVUk5fUFJJU09ORVJTKTsgLy8gZ2FtZSBzdGFydHMgd2l0aCBwcmlzb25lcnMgcGxheVxyXG4gICAgY29uc3QgW2N1cnJlbnRjb29yZHMsIHNldEN1cnJlbnRjb29yZHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3Jlc2N1ZXMsIHNldFJlc2N1ZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcmNkLCBzZXRSY2RdID0gdXNlU3RhdGUoWy0xLC0xLGMuRElSX05PTkVdKTtcclxuICAgIGNvbnN0IFttb3Zlcywgc2V0TW92ZXNdID0gdXNlU3RhdGUoW10pOyAvLyBtb3ZlIGhpc3RvcnksIGVhY2ggZWxlbWVudCBpcyB0aGUgYXJyYXkgaXMgYSBqc29uIG9iamVjdCBvZiBpbmZvIGFib3V0IHRoZSBtb3ZlXHJcbiAgICBjb25zdCBbc25hcHNob3QsIHNldFNuYXBzaG90XSA9IHVzZVN0YXRlKHtcclxuICAgICAgc3F1YXJlQXJyYXk6IFtdLFxyXG4gICAgICBwdGlsZXM6IFtdLFxyXG4gICAgICBndGlsZXM6IFtdLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbam9rZWluZGV4LCBzZXRKb2tlaW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbYWxsb3dSZXdpbmQsIHNldEFsbG93UmV3aW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtvcHBuYW1lLCBzZXRPcHBuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtjaGF0bXNncywgc2V0Q2hhdG1zZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgcHJldlJlc2N1ZXMgPSB1c2VQcmV2aW91cyhyZXNjdWVzKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IC8vIFRoaXMgY29kZSBleGVjdXRlcyB0aGUgZmlyc3QgdGltZSBHYW1lIGlzIHVzZWQgb25seVxyXG4gICAgICBpbml0aWFsaXplUm91dGluZSgpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgbGV0IG1zZyA9IHdzbWVzc2FnZTtcclxuICAgICAgaWYgKG1zZyAhPT0gJycpIHByb2Nlc3NHYW1lTWVzc2FnZShtc2cpOyAgICAgIFxyXG4gICAgfSxbd3NtZXNzYWdlXSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHNjcm9sbFRvQm90dG9tKFwiU2Nyb2xsYWJsZU1vdmVzXCIpO1xyXG4gICAgfSxbbW92ZXNdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2Nyb2xsVG9Cb3R0b20oXCJTY3JvbGxhYmxlQ2hhdFwiKTtcclxuICAgIH0sW2NoYXRtc2dzXSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmIChyZXNjdWVzID4gcHJldlJlc2N1ZXMpIHtcclxuICAgICAgICAgIHZhciBteWF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuICAgICAgICAgIC8vIE9ic2VydmVycyBoZWFyIHlpcHBlZVxyXG4gICAgICAgICAgbXlhdWRpby5zcmMgPSBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUyA/IFwiaHR0cHM6Ly90aWxlcnVubmVyLmdpdGh1Yi5pby9PbmVHb3RBd2F5Lm00YVwiIDogXCJodHRwczovL3RpbGVydW5uZXIuZ2l0aHViLmlvL3lpcHBlZS5tNGFcIjtcclxuICAgICAgICAgIG15YXVkaW8ucGxheSgpO1xyXG4gICAgICB9XHJcbiAgICB9LCBbcmVzY3Vlc10pOyAvLyBQbGF5IGEgc291bmQgd2hlbiBhIHJlc2N1ZSBpcyBtYWRlXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBsZXQgbmV3amkgPSBqb2tlaW5kZXggKyAxO1xyXG4gICAgICBpZiAobmV3amkgPj0gYy5KT0tFX0FSUkFZLmxlbmd0aCkge1xyXG4gICAgICAgIG5ld2ppID0gMDtcclxuICAgICAgfVxyXG4gICAgICBzZXRKb2tlaW5kZXgobmV3amkpO1xyXG4gICAgfSwgW3dob3NldHVybl0pOyAvLyB3YW50IHVwIHRvIGRhdGUgdmFsdWUgb2Ygd2hvc2V0dXJuIHRvIGRlY2lkZSB3aGV0aGVyIHRvIGFzayBmb3IgYW4gdXBkYXRlXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBhcnRpY2lwYW50ICE9PSB3aG9zZXR1cm4gJiYgd2hvc2V0dXJuICE9PSBjLldIT1NFX1RVUk5fR0FNRU9WRVIpIHtcclxuICAgICAgICAgIHJlcXVlc3RTeW5jRGF0YSgpOyAvLyBTZW5kIGEgcmVxdWVzdCBmb3Igc3luYyBkYXRhIHdoZW4gd2FpdGluZyBmb3IgdGhlaXIgbW92ZVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTZW5kIGEgcmVxdWVzdCBmb3IgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbGFzdCBldmVudCAoc3luY3N0YW1wKVxyXG4gICAgICAgIC8vIFNlcnZlciB3aWxsIHNlbmQgZnVuYz1wcm92aWRlc3luY3N0YW1wIHdpdGggYSBzeW5jc3RhbXAgdmFsdWVcclxuICAgICAgICAvLyBQcm9jZXNzR2FtZU1lc3NhZ2Ugd2lsbCBjaGVjayBzeW5jc3RhbXAgZnJvbSB0aGUgc2VydmVyIHRvIHN5bmNzdGFtcCBoZXJlXHJcbiAgICAgICAgLy8gSWYgZGlmZmVyZW50IGl0IHdpbGwgc2VuZCBmdW5jPXJlcXVlc3RnYW1lZGF0YSwgc2VydmVyIHdpbGwgc2VuZCB1cyBwcm92aWRlZ2FtZWRhdGEsIGFuZCB3ZSBzeW5jXHJcbiAgICAgICAgfSwgYy5QSU5HX0lOVEVSVkFMKTsgLy8gdGhpcyBtYW55IG1pbGxpc2Vjb25kcyBiZXR3ZWVuIGFib3ZlIGNvZGUgYmxvY2sgZXhlY3V0aW9uc1xyXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGluaXRpYWxpemVSb3V0aW5lID0gKCkgPT4ge1xyXG4gICAgICBsZXQgZmlyc3RTcXVhcmVBcnJheSA9IGluaXRpYWxTcXVhcmVBcnJheShyYWNrc2l6ZSk7XHJcbiAgICAgIHNldFNxdWFyZUFycmF5KGZpcnN0U3F1YXJlQXJyYXkpO1xyXG4gICAgICBpZiAoaXNyZWpvaW4pIHtcclxuICAgICAgICByZWpvaW5HYW1lKClcclxuICAgICAgfSBlbHNlIGlmIChwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUykge1xyXG4gICAgICAgIHN0YXJ0R2FtZShmaXJzdFNxdWFyZUFycmF5KTsgLy8gUHJpc29uZXJzIHN0YXJ0aW5nIHRoZSBnYW1lXHJcbiAgICAgIH0gZWxzZSBpZiAocGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMpIHtcclxuICAgICAgICBqb2luR2FtZSgpOyAvLyBHdWFyZHMgam9pbmluZyB0aGUgZ2FtZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0YXJ0T2JzZXJ2aW5nR2FtZSgpOyAvLyBPYnNlcnZlciB2aWV3aW5nIHRoZSBnYW1lXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHN0YXJ0R2FtZSA9IChmaXJzdFNxdWFyZUFycmF5KSA9PiB7XHJcbiAgICAgIGxldCBuZXdTeW5jc3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgICBsZXQgdGVtcFBUaWxlcyA9IFtdO1xyXG4gICAgICBsZXQgdGVtcEdUaWxlcyA9IFtdO1xyXG4gICAgICBsZXQgdGVtcFRpbGVzID0gWy4uLmluaXRpYWx0aWxlc107XHJcbiAgICAgIHdoaWxlICh0ZW1wUFRpbGVzLmxlbmd0aCA8IHJhY2tzaXplKSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZW1wVGlsZXMubGVuZ3RoKTtcclxuICAgICAgICB0ZW1wUFRpbGVzLnB1c2godGVtcFRpbGVzW3JhbmRdKTtcclxuICAgICAgICB0ZW1wVGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZW1wVGlsZXMubGVuZ3RoKTtcclxuICAgICAgICB0ZW1wR1RpbGVzLnB1c2godGVtcFRpbGVzW3JhbmRdKTtcclxuICAgICAgICB0ZW1wVGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRlbXBQVGlsZXMuc29ydCgpO1xyXG4gICAgICB0ZW1wR1RpbGVzLnNvcnQoKTtcclxuICAgICAgc2V0U3luY3N0YW1wKG5ld1N5bmNzdGFtcCk7XHJcbiAgICAgIHNldEd0aWxlcyh0ZW1wR1RpbGVzKTtcclxuICAgICAgc2V0UHRpbGVzKHRlbXBQVGlsZXMpO1xyXG4gICAgICBzZXRUaWxlcyh0ZW1wVGlsZXMpO1xyXG4gICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgc3F1YXJlQXJyYXk6IGZpcnN0U3F1YXJlQXJyYXksXHJcbiAgICAgICAgcHRpbGVzOiBbLi4udGVtcFBUaWxlc10sXHJcbiAgICAgICAgZ3RpbGVzOiBbLi4udGVtcEdUaWxlc10gICAgXHJcbiAgICAgIH0pO1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsXHJcbiAgICAgICAgICBmdW5jOiBcInN0YXJ0Z2FtZVwiLFxyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIEdhbWUgaWRcclxuICAgICAgICAgIHRpbWVzdGFtcDogbmV3U3luY3N0YW1wLCAvLyBGb3IgdGVsbGluZyBzZXJ2ZXIgbXkgbGFzdCBkYXRhIHRpbWVzdGFtcFxyXG4gICAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyBSYWNrIHNpemUgb3B0aW9uXHJcbiAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LCAvLyBUaGlzIHdpbGwgYmUgcHJpc29uZXJzIHNpbmNlIHByaXNvbmVycyBzdGFydCB0aGUgZ2FtZVxyXG4gICAgICAgICAgcG5hbWU6IG5pY2tuYW1lLCAvLyBUaGlzIHdpbGwgYmUgdGhlIHByaXNvbmVycyBuaWNrbmFtZSBzaW5jZSBwcmlzb25lcnMgYXJlIHNlbmRpbmcgdGhpc1xyXG4gICAgICAgICAgdGlsZXM6IHRlbXBUaWxlcywgLy8gVGlsZSBiYWcgYWZ0ZXIgZmlyc3QgcmFja3Mgc2VsZWN0ZWRcclxuICAgICAgICAgIHB0aWxlczogdGVtcFBUaWxlcywgLy8gUHJpc29uZXJzIGZpcnN0IHJhY2tcclxuICAgICAgICAgIGd0aWxlczogdGVtcEdUaWxlcyAvLyBHdWFyZHMgZmlyc3QgcmFja1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGpvaW5HYW1lID0gKCkgPT4ge1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgZ25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IFwiam9pbmdhbWVcIiwgLy8gam9pbiB0aGUgZ2FtZVxyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCAvLyB0aGlzIHdpbGwgZWIgZ3VhcmRzXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVqb2luR2FtZSA9ICgpID0+IHtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IFwicmVqb2luZ2FtZVwiLCAvLyBqb2luIHRoZSBnYW1lXHJcbiAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50IC8vIGNvdWxkIGJlIGVpdGhlciBwbGF5ZXJcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzdGFydE9ic2VydmluZ0dhbWUgPSAoKSA9PiB7XHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLFxyXG4gICAgICAgICAgZnVuYzogXCJzdGFydE9ic2VydmluZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHB1dEF0TW92ZVN0YXJ0KCkge1xyXG4gICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgICBzZXRBbGxvd1Jld2luZChmYWxzZSk7XHJcbiAgICAgIHNldFJjZCgtMSwtMSxjLkRJUl9OT05FKTtcclxuICAgICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBwcm9jZXNzR2FtZU1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgICBjb25zb2xlLmxvZyhgJHttZXNzYWdlRGF0YS5nYW1laWR9ICR7bWVzc2FnZURhdGEuZnVuY31gKTtcclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmdhbWVpZCA9PT0gZ2FtZWlkICYmIG1lc3NhZ2VEYXRhLnR5cGUgPT09IFwicGJcIikgeyAvLyBUaGlzIGluc3RhbmNlIG9mIGEgcHJpc29uIGJyZWFrIGdhbWVcclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJwcm92aWRlZ2FtZWRhdGFcIikge1xyXG4gICAgICAgICAgbGV0IGdkID0gYnVpbGRHYW1lZGF0YUZyb21BcGlkYXRhKG1lc3NhZ2VEYXRhLmFwaWRhdGEpO1xyXG4gICAgICAgICAgLy8gU2VydmVyIHByb3ZpZGluZyBnYW1lIGRhdGFcclxuICAgICAgICAgIHNldFN5bmNzdGFtcChnZC5zeW5jc3RhbXApO1xyXG4gICAgICAgICAgLy8gTm8gb3Bwb25lbnQgbmFtZSBmb3Igb2JzZXJ2ZXJzXHJcbiAgICAgICAgICBpZiAocGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMpIHtcclxuICAgICAgICAgICAgc2V0T3BwbmFtZShnZC5nbmFtZSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTKSB7XHJcbiAgICAgICAgICAgIHNldE9wcG5hbWUoZ2QucG5hbWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0VGlsZXMoZ2QudGlsZXMpO1xyXG4gICAgICAgICAgc2V0U3F1YXJlQXJyYXkoZ2Quc3F1YXJlQXJyYXkpO1xyXG4gICAgICAgICAgc2V0UHRpbGVzKGdkLnB0aWxlcyk7XHJcbiAgICAgICAgICBzZXRHdGlsZXMoZ2QuZ3RpbGVzKTtcclxuICAgICAgICAgIHNldFdob3NldHVybihnZC53aG9zZXR1cm4pO1xyXG4gICAgICAgICAgbGV0IG5ld1NuYXBzaG90ID0ge1xyXG4gICAgICAgICAgICBzcXVhcmVBcnJheTogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShnZC5zcXVhcmVBcnJheSkpLCAvLyBEZWVwIGNvcHlcclxuICAgICAgICAgICAgcHRpbGVzOiBbLi4uZ2QucHRpbGVzXSxcclxuICAgICAgICAgICAgZ3RpbGVzOiBbLi4uZ2QuZ3RpbGVzXVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHNldFNuYXBzaG90KG5ld1NuYXBzaG90KTtcclxuICAgICAgICAgIHNldE1vdmVzKGdkLm1vdmVzKTtcclxuICAgICAgICAgIHNldFJlc2N1ZXMoZ2QucmVzY3Vlcyk7XHJcbiAgICAgICAgICBzZXRBbGxvd1Jld2luZChnZC5hbGxvd1Jld2luZCk7XHJcbiAgICAgICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJwcm92aWRlZ25hbWVcIikge1xyXG4gICAgICAgICAgaWYgKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RJVExFX1BSSVNPTkVSUykge1xyXG4gICAgICAgICAgICBzZXRPcHBuYW1lKG1lc3NhZ2VEYXRhLmduYW1lKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiYWxsb3d1bmRvXCIpIHtcclxuICAgICAgICAgIC8vIE9wcG9uZW50IGNsaWNrZWQgYnV0dG9uIHRvIGFsbG93IHVuZG8gdHVyblxyXG4gICAgICAgICAgc2V0QWxsb3dSZXdpbmQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImNoYXRcIikgeyAvLyBTZXJ2ZXIgZGVjaWRlZCB3aGV0aGVyIHRoaXMgY2hhdCB3YXMgZm9yIG1lXHJcbiAgICAgICAgICBsZXQgbmV3Q2hhdG1zZ3MgPSBbLi4uY2hhdG1zZ3MsIHtmcm9tOiBtZXNzYWdlRGF0YS5uaWNrbmFtZSwgbXNnOiBtZXNzYWdlRGF0YS5zZW5kbXNnfV07XHJcbiAgICAgICAgICBzZXRDaGF0bXNncyhuZXdDaGF0bXNncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInByb3ZpZGVzeW5jZGF0YVwiKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgcHJvdmlkZXN5bmRhdGEgcGFzc2VkICR7bWVzc2FnZURhdGEuc3luY3N0YW1wfSBhbmQgSSBoYXZlICR7c3luY3N0YW1wfWApO1xyXG4gICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLnN5bmNzdGFtcCAhPT0gc3luY3N0YW1wKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBPdXQgb2Ygc3luYyAtIHJlcXVlc3RpbmcgbGF0ZXN0IGdhbWUgZGF0YWApO1xyXG4gICAgICAgICAgICByZXF1ZXN0R2FtZURhdGEoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQ2FsbGluZyBzZXRTZWxlY3Rpb24gKGZyb20gaGFuZGxlS2V5RG93bikgdGhlbiBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrIGRvZXMgbm90IGxldCBpdCByZWNvZ25pemUgc2VsZWN0aW9uIHdpdGggdGhlIG5ldyB2YWx1ZVxyXG4gICAgLy8gU28gSSBwYXNzIG5ld1NlbGVjdGlvbiB3aGVuIEkgd2FudCB0byBhbHNvIHNldCBpdCwgb3RoZXJ3aXNlIEkgcGFzcyAtMSB0byBpbnN0cnVjdCBpdCB0byB1c2UgY3VycmVudCB2YWx1ZSBvZiBzZWxlY3Rpb25cclxuICAgIC8vIEFsc28gcGFzc2luZyBuZXdSY2RcclxuICAgIGNvbnN0IGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2sgPSAocmksIGNpLCBuZXdTZWxlY3Rpb24sIG5ld1JjZCkgPT4ge1xyXG4gICAgICBsZXQgbmV3U3F1YXJlQXJyYXkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNxdWFyZUFycmF5KSk7IC8vIERlZXAgY29weVxyXG4gICAgICBsZXQgbmV3U3F1YXJlQXJyYXlSb3cgPSBbLi4ubmV3U3F1YXJlQXJyYXlbcmldXTsgLy8gVGhlIHJvdyBvZiBzcXVhcmVzIHRoZXkgY2xpY2tlZCBvblxyXG4gICAgICBsZXQgbmV3U3F1YXJlQXJyYXlDZWxsID0gbmV3U3F1YXJlQXJyYXlSb3dbY2ldOyAvLyBUaGUgc3F1YXJlIGluIHRoZSByb3cgdGhleSBjbGlja2VkIG9uXHJcbiAgICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgICBsZXQgbmV3Q3VycmVudGNvb3JkcyA9IFsuLi5jdXJyZW50Y29vcmRzXTtcclxuICAgICAgbGV0IGNvb3JkID0gU3RyaW5nKHJpKSArIFwiLVwiICsgU3RyaW5nKGNpKTtcclxuICAgICAgbGV0IGNjaSA9IGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCk7XHJcbiAgICAgIGlmIChuZXdTZWxlY3Rpb24gPT09IC0xKSB7XHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gc2VsZWN0aW9uO1xyXG4gICAgICAgIG5ld1JjZCA9IHJjZDtcclxuICAgICAgfVxyXG4gICAgICBpZiAobmV3U2VsZWN0aW9uID4gLTEgJiYgbmV3U3F1YXJlQXJyYXlDZWxsLnVzZWRieSA9PT0gYy5VU0VEX0JZX05PTkUpIHsgLy8gdGlsZSBpcyBzZWxlY3RlZCBmcm9tIHJhY2sgYW5kIGNsaWNrZWQgc3F1YXJlIGlzIG5vdCB1c2VkIHlldFxyXG4gICAgICAgIGxldCBzZWxlY3RlZFRpbGUgPSB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMgPyBuZXdQdGlsZXNbbmV3U2VsZWN0aW9uXSA6IG5ld0d0aWxlc1tuZXdTZWxlY3Rpb25dO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Q2VsbC5sZXR0ZXIgPSBzZWxlY3RlZFRpbGU7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlDZWxsLnVzZWRieSA9IHdob3NldHVybjtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheVJvd1tjaV0gPSBuZXdTcXVhcmVBcnJheUNlbGw7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlbcmldID0gWy4uLm5ld1NxdWFyZUFycmF5Um93XTtcclxuICAgICAgICB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlNcclxuICAgICAgICAgID8gbmV3UHRpbGVzLnNwbGljZShuZXdTZWxlY3Rpb24sIDEpXHJcbiAgICAgICAgICA6IG5ld0d0aWxlcy5zcGxpY2UobmV3U2VsZWN0aW9uLCAxKTtcclxuICAgICAgICBpZiAod2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTICYmIG5ld1NlbGVjdGlvbiA9PT0gbmV3UHRpbGVzLmxlbmd0aCkgeyBcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbiAtIDFcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX0dVQVJEUyAmJiBuZXdTZWxlY3Rpb24gPT09IG5ld0d0aWxlcy5sZW5ndGgpIHsgXHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdTZWxlY3Rpb24gLSAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24pO1xyXG4gICAgICAgIHNldFNxdWFyZUFycmF5KG5ld1NxdWFyZUFycmF5KTtcclxuICAgICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKFsuLi5jdXJyZW50Y29vcmRzLCBjb29yZF0pO1xyXG4gICAgICAgIHNldFJjZChuZXdSY2QpOyAvLyBrZXkgZG93biBoYW5kbGVyIGZpZ3VyZWQgaXQgb3V0XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjY2kgPiAtMSkgeyAvLyBjbGlja2VkIHNxdWFyZSBoYXMgYSB0aWxlIG9uIGl0IGZyb20gdGhlIGN1cnJlbnQgbW92ZSBpbiBwcm9ncmVzcywgc28gcHV0IGl0IGJhY2sgb24gdGhlIHBsYXllciByYWNrXHJcbiAgICAgICAgd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTXHJcbiAgICAgICAgICA/IG5ld1B0aWxlcy5wdXNoKG5ld1NxdWFyZUFycmF5Q2VsbC5sZXR0ZXIpXHJcbiAgICAgICAgICA6IG5ld0d0aWxlcy5wdXNoKG5ld1NxdWFyZUFycmF5Q2VsbC5sZXR0ZXIpO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Q2VsbC51c2VkYnkgPSBjLlVTRURfQllfTk9ORTtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheUNlbGwubGV0dGVyID0gYy5MRVRURVJfTk9ORTtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheVJvd1tjaV0gPSBuZXdTcXVhcmVBcnJheUNlbGw7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlbcmldID0gWy4uLm5ld1NxdWFyZUFycmF5Um93XTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24oXHJcbiAgICAgICAgICB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMgPyBuZXdQdGlsZXMubGVuZ3RoIC0gMSA6IG5ld0d0aWxlcy5sZW5ndGggLSAxXHJcbiAgICAgICAgKTtcclxuICAgICAgICBuZXdDdXJyZW50Y29vcmRzLnNwbGljZShjY2ksIDEpO1xyXG4gICAgICAgIHNldFNxdWFyZUFycmF5KG5ld1NxdWFyZUFycmF5KTtcclxuICAgICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKG5ld0N1cnJlbnRjb29yZHMpO1xyXG4gICAgICAgIHNldFJjZCgtMSwtMSxjLkRJUl9OT05FKTsgLy8gbWFrZSBwbGF5ZXIgY2xpY2sgYWdhaW4gdG8gc2V0IGRpcmVjdGlvblxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvLyBUaGV5IGRpZG4ndCBjbGljayBhIHNxdWFyZSB0byBwbGFjZSBhIHNlbGVjdGVkIHRpbGUgdGhlcmVcclxuICAgICAgLy8gVGhleSBkaWRuJ3QgY2xpY2sgYSBzcXVhcmUgdG8gcmVtb3ZlIGFuIGV4aXN0aW5nIHRpbGVcclxuICAgICAgaWYgKG5ld1NxdWFyZUFycmF5Q2VsbC51c2VkYnkgPT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgLy8gVGhlcmUgaXMgbm90aGluZyBvbiB0aGUgc3F1YXJlIHNvIHRoZXkgYXJlIHBpY2tpbmcgd2hlcmUgdG8gcGxhY2UgdGhlIG5leHQgdGlsZSB2aWEga2V5Ym9hcmRcclxuICAgICAgICBsZXQgbmV3RGlyZWN0aW9uID0gcmNkWzBdICE9PSByaSB8fCByY2RbMV0gIT09IGNpID8gYy5ESVJfUklHSFQgOiAvL2NsaWNrIG5ldyBzcXVhcmUsIHN0YXJ0IHdpdGggcmlnaHRcclxuICAgICAgICAgcmNkWzJdID09PSBjLkRJUl9SSUdIVCA/IGMuRElSX0RPV04gOiAvL2NsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIHJpZ2h0LCBjaGFuZ2UgdG8gZG93blxyXG4gICAgICAgICByY2RbMl0gPT09IGMuRElSX0RPV04gPyBjLkRJUl9OT05FIDogLy9jbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyBkb3duLCBjaGFuZ2UgdG8gbm8gZGlyZWN0aW9uXHJcbiAgICAgICAgIGMuRElSX1JJR0hUOyAvLyBjbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyBubyBkaXJlY3Rpb24sIGNoYW5nZSB0byByaWdodFxyXG4gICAgICAgIG5ld1JjZCA9IFtyaSxjaSxuZXdEaXJlY3Rpb25dO1xyXG4gICAgICAgIHNldFJjZChuZXdSY2QpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IGhhbmRsZVJhY2tUaWxlQ2xpY2sgPSAodGlsZWluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX09CU0VSVkVSKSB7cmV0dXJuO31cclxuICAgICAgLy8gSWYgbm8gdGlsZSBpcyBzZWxlY3RlZCBhbHJlYWR5IHRoZW4gc2V0IHRoZSBzZWxlY3Rpb25cclxuICAgICAgaWYgKHNlbGVjdGlvbiA9PT0gLTEpIHtcclxuICAgICAgICBzZXRTZWxlY3Rpb24odGlsZWluZGV4KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gSWYgdGhlIHNhbWUgdGlsZSBpcyBhbHJlYWR5IHNlbGVjdGVkIHRoZW4gdW5zZWxlY3RcclxuICAgICAgaWYgKHNlbGVjdGlvbiA9PT0gdGlsZWluZGV4KSB7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gQSB0aWxlIHdhcyBhbHJlYWR5IHNlbGVjdGVkIGFuZCB0aGV5IGNsaWNrZWQgYW5vdGhlciB0aWxlIC0gbW92ZSB0aGUgdGlsZVxyXG4gICAgICBsZXQgbmV3cmFjayA9IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gWy4uLnB0aWxlc10gOiBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IG1vdmVmcm9tID0gc2VsZWN0aW9uO1xyXG4gICAgICBsZXQgbW92ZXRpbGUgPSBuZXdyYWNrW21vdmVmcm9tXTtcclxuICAgICAgbGV0IG1vdmV0byA9IHRpbGVpbmRleDtcclxuICAgICAgbmV3cmFjay5zcGxpY2UobW92ZWZyb20sIDEpOyAvLyByZW1vdmUgdGlsZSBmcm9tIG9yaWdpbmFsIHNlbGVjdGVkIHBvc2l0aW9uXHJcbiAgICAgIG5ld3JhY2suc3BsaWNlKG1vdmV0bywwLG1vdmV0aWxlKTsgLy8gaW5zZXJ0IG1vdmVkIHRpbGUgYXQgdGhlIG5ld2x5IHNlbGVjdGVkIHBvc2l0aW9uXHJcbiAgICAgIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gc2V0UHRpbGVzKG5ld3JhY2spIDogc2V0R3RpbGVzKG5ld3JhY2spO1xyXG4gICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgZW5kUHJpc29uZXJzVHVybiA9ICgpID0+IHtcclxuICAgICAgaWYgKCFpc1BsYXlWYWxpZCgpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBuZXdSZXNjdWVzID0gcmVzY3VlcztcclxuICAgICAgbGV0IGVzY2FwZWhhdGNoZXMgPSBbXHJcbiAgICAgICAgXCIwLTBcIixcclxuICAgICAgICBcIjAtXCIgKyBtaWRkbGUsXHJcbiAgICAgICAgXCIwLVwiICsgZWRnZSxcclxuICAgICAgICBtaWRkbGUrIFwiLTBcIixcclxuICAgICAgICBtaWRkbGUgKyBcIi1cIiArIGVkZ2UsXHJcbiAgICAgICAgZWRnZSArIFwiLTBcIixcclxuICAgICAgICBlZGdlICsgXCItXCIgKyBtaWRkbGUsXHJcbiAgICAgICAgZWRnZSArIFwiLVwiICsgZWRnZVxyXG4gICAgICBdOyAvLyBjb29yZHMgb2YgZXNjYXBlIGhhdGNoZXNcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50Y29vcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGVzY2FwZWhhdGNoZXMuaW5kZXhPZihjdXJyZW50Y29vcmRzW2ldKSA+IC0xKSB7XHJcbiAgICAgICAgICBuZXdSZXNjdWVzID0gbmV3UmVzY3VlcyArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgICAgd2hpbGUgKG5ld1B0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIG5ld1B0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgbmV3UHRpbGVzLnNvcnQoKTtcclxuICAgICAgbGV0IG5ld1dob3NldHVybiA9IG5ld1B0aWxlcy5sZW5ndGggPiAwID8gYy5XSE9TRV9UVVJOX0dVQVJEUyA6IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUjtcclxuICAgICAgaWYgKCFhbnlVbnVzZWRFc2NhcGVIYXRjaGVzKHNxdWFyZUFycmF5KSkge1xyXG4gICAgICAgIG5ld1dob3NldHVybiA9IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUjsgLy8gTm8gZXNjYXBlIGhhdGNoZXMgbGVmdFxyXG4gICAgICB9XHJcbiAgICAgIGxldCBwbGF5aW5mbyA9IGdldFBsYXlJbmZvKCk7XHJcbiAgICAgIGxldCBuZXdNb3ZlID0ge2J5OiBjLlBBUlRZX1RZUEVfUFJJU09ORVJTLCB0eXBlOiBjLk1PVkVfVFlQRV9QTEFZLCBtYWlud29yZDogcGxheWluZm8ubWFpbndvcmQsIGV4dHJhd29yZHM6IHBsYXlpbmZvLmV4dHJhd29yZHMsIHBvczogcGxheWluZm8ucG9zfTtcclxuICAgICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgICAgbGV0IG5ld1N5bmNzdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgIHNldFN5bmNzdGFtcChuZXdTeW5jc3RhbXApO1xyXG4gICAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgICBzZXRSZXNjdWVzKG5ld1Jlc2N1ZXMpO1xyXG4gICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgc3F1YXJlQXJyYXk6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3F1YXJlQXJyYXkpKSwgLy8gRGVlcCBjb3B5XHJcbiAgICAgICAgcHRpbGVzOiBbLi4ubmV3UHRpbGVzXSxcclxuICAgICAgICBndGlsZXM6IFsuLi5ndGlsZXNdLFxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IFwiZXB0XCIsIC8vIGVuZCBwcmlzb25lcnMgdHVyblxyXG4gICAgICAgICAgdGltZXN0YW1wOiBuZXdTeW5jc3RhbXAsIC8vIGZvciBkYXRhIHN5bmMgbG9naWNcclxuICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsXHJcbiAgICAgICAgICBwdGlsZXM6IG5ld1B0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgcHJpc29uZXJzIHJhY2tcclxuICAgICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4sIC8vIG1heSBoYXZlIGVuZGVkIHRoZSBnYW1lXHJcbiAgICAgICAgICBtb3ZlOiBuZXdNb3ZlLCAvLyB0aGUgbW92ZSB0aGF0IHdhcyBtYWRlXHJcbiAgICAgICAgICByZXNjdWVzOiBuZXdSZXNjdWVzIC8vIG1heSBoYXZlIHJlc2N1ZWQgYW5vdGhlciBwcmlzb25lclxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBlbmRHdWFyZHNUdXJuID0gKCkgPT4ge1xyXG4gICAgICBpZiAoIWlzUGxheVZhbGlkKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgICB3aGlsZSAobmV3R3RpbGVzLmxlbmd0aCA8IHJhY2tzaXplICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgbmV3R3RpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgfVxyXG4gICAgICBuZXdHdGlsZXMuc29ydCgpO1xyXG4gICAgICBsZXQgc25hcHNxdWFyZWFycmF5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzcXVhcmVBcnJheSkpOyAvLyBEZWVwIGNvcHlcclxuICAgICAgbGV0IHNuYXBwdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgICAgbGV0IHNuYXBndGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IG5ld1dob3NldHVybiA9IG5ld0d0aWxlcy5sZW5ndGggPiAwID8gYy5XSE9TRV9UVVJOX1BSSVNPTkVSUyA6IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUjtcclxuICAgICAgaWYgKCFhbnlVbnVzZWRFc2NhcGVIYXRjaGVzKHNxdWFyZUFycmF5KSkge1xyXG4gICAgICAgIG5ld1dob3NldHVybiA9IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUjsgLy8gTm8gZXNjYXBlIGhhdGNoZXMgbGVmdFxyXG4gICAgICB9XHJcbiAgICAgIGxldCBwbGF5aW5mbyA9IGdldFBsYXlJbmZvKCk7XHJcbiAgICAgIGxldCBuZXdNb3ZlID0ge2J5OiBjLlBBUlRZX1RZUEVfR1VBUkRTLCB0eXBlOiBjLk1PVkVfVFlQRV9QTEFZLCBtYWlud29yZDogcGxheWluZm8ubWFpbndvcmQsIGV4dHJhd29yZHM6IHBsYXlpbmZvLmV4dHJhd29yZHMsIHBvczogcGxheWluZm8ucG9zfTtcclxuICAgICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgICAgbGV0IG5ld1N5bmNzdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgIHNldFN5bmNzdGFtcChuZXdTeW5jc3RhbXApO1xyXG4gICAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgc3F1YXJlQXJyYXk6IHNuYXBzcXVhcmVhcnJheSxcclxuICAgICAgICBwdGlsZXM6IHNuYXBwdGlsZXMsXHJcbiAgICAgICAgZ3RpbGVzOiBzbmFwZ3RpbGVzLFxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgICAgdGltZXN0YW1wOiBuZXdTeW5jc3RhbXAsIC8vIGZvciBkYXRhIHN5bmMgbG9naWNcclxuICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsXHJcbiAgICAgICAgICBndGlsZXM6IG5ld0d0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgZ3VhcmRzIHJhY2tcclxuICAgICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgICAgbW92ZTogbmV3TW92ZSwgLy8gdGhlIG1vdmUgdGhhdCB3YXMgbWFkZVxyXG4gICAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4sIC8vIG1heSBoYXZlIGVuZGVkIHRoZSBnYW1lXHJcbiAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9O1xyXG4gIFxyXG4gICAgY29uc3Qgc3dhcFByaXNvbmVyc1RpbGVzID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGlsZXMubGVuZ3RoIDwgcmFja3NpemUpIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJOZWVkIFwiICsgcmFja3NpemUgKyBcIiB0aWxlcyBpbiB0aGUgYmFnIHRvIGV4Y2hhbmdlXCIpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBuZXdQdGlsZXMgPSBbXTtcclxuICAgICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgICAgd2hpbGUgKG5ld1B0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIG5ld1B0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgbmV3UHRpbGVzLnNvcnQoKTtcclxuICAgICAgbmV3VGlsZXMgPSBbLi4ubmV3VGlsZXMsIC4uLnNuYXBzaG90LnB0aWxlc107XHJcbiAgICAgIG5ld1RpbGVzLnNvcnQoKTtcclxuICAgICAgbGV0IG5ld01vdmUgPSB7Ynk6IGMuUEFSVFlfVFlQRV9QUklTT05FUlMsIHR5cGU6IGMuTU9WRV9UWVBFX1NXQVB9O1xyXG4gICAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgICBsZXQgbmV3U3luY3N0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgc2V0U3luY3N0YW1wKG5ld1N5bmNzdGFtcCk7XHJcbiAgICAgIHNldFNxdWFyZUFycmF5KEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc25hcHNob3Quc3F1YXJlQXJyYXkpKSk7IC8vIERlZXAgY29weVxyXG4gICAgICBzZXRXaG9zZXR1cm4oYy5XSE9TRV9UVVJOX0dVQVJEUyk7XHJcbiAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgIHNxdWFyZUFycmF5OiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNuYXBzaG90LnNxdWFyZUFycmF5KSksIC8vIERlZXAgY29weVxyXG4gICAgICAgIHB0aWxlczogWy4uLm5ld1B0aWxlc10sXHJcbiAgICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcImVwdFwiLCAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICAgIHRpbWVzdGFtcDogbmV3U3luY3N0YW1wLCAvLyBmb3IgZGF0YSBzeW5jIGxvZ2ljXHJcbiAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LFxyXG4gICAgICAgICAgd2hvc2V0dXJuOiBjLldIT1NFX1RVUk5fR1VBUkRTLCAvLyBzd2FwIG5ldmVyIGVuZHMgdGhlIGdhbWUgc28gZ28gdG8gb3Bwb25lbnRcclxuICAgICAgICAgIHB0aWxlczogbmV3UHRpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgICBtb3ZlOiBuZXdNb3ZlIC8vIHRoZSBtb3ZlIHRoYXQgd2FzIG1hZGVcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHN3YXBHdWFyZHNUaWxlcyA9ICgpID0+IHtcclxuICAgICAgaWYgKHRpbGVzLmxlbmd0aCA8IHJhY2tzaXplKSB7XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwiTmVlZCBcIiArIHJhY2tzaXplICsgXCIgdGlsZXMgaW4gdGhlIGJhZyB0byBleGNoYW5nZVwiKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgbmV3R3RpbGVzID0gW107XHJcbiAgICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICAgIHdoaWxlIChuZXdHdGlsZXMubGVuZ3RoIDwgcmFja3NpemUgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgICBuZXdHdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIG5ld0d0aWxlcy5zb3J0KCk7XHJcbiAgICAgIG5ld1RpbGVzID0gWy4uLm5ld1RpbGVzLCAuLi5zbmFwc2hvdC5ndGlsZXNdO1xyXG4gICAgICBuZXdUaWxlcy5zb3J0KCk7XHJcbiAgICAgIGxldCBuZXdNb3ZlID0ge2J5OiBjLlBBUlRZX1RZUEVfR1VBUkRTLCB0eXBlOiBjLk1PVkVfVFlQRV9TV0FQfTtcclxuICAgICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgICAgbGV0IG5ld1N5bmNzdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgIHNldFN5bmNzdGFtcChuZXdTeW5jc3RhbXApO1xyXG4gICAgICBzZXRTcXVhcmVBcnJheShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNuYXBzaG90LnNxdWFyZUFycmF5KSkpOyAvLyBEZWVwIGNvcHlcclxuICAgICAgc2V0V2hvc2V0dXJuKGMuV0hPU0VfVFVSTl9QUklTT05FUlMpO1xyXG4gICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICBzcXVhcmVBcnJheTogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzbmFwc2hvdC5zcXVhcmVBcnJheSkpLCAvLyBEZWVwIGNvcHlcclxuICAgICAgICBwdGlsZXM6IFsuLi5wdGlsZXNdLFxyXG4gICAgICAgIGd0aWxlczogWy4uLm5ld0d0aWxlc10sXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgZnVuYzogXCJlZ3RcIiwgLy8gZW5kIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ld1N5bmNzdGFtcCwgLy8gZm9yIGRhdGEgc3luYyBsb2dpY1xyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgIHdob3NldHVybjogYy5XSE9TRV9UVVJOX1BSSVNPTkVSUywgLy8gc3dhcCBuZXZlciBlbmRzIHRoZSBnYW1lIHNvIGdvIHRvIG9wcG9uZW50XHJcbiAgICAgICAgICBndGlsZXM6IG5ld0d0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgcHJpc29uZXJzIHJhY2tcclxuICAgICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgICAgbW92ZTogbmV3TW92ZSAvLyB0aGUgbW92ZSB0aGF0IHdhcyBtYWRlXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gaXNQbGF5VmFsaWQoKSB7XHJcbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHdvcmQgc2luY2UgaXQgYWZmZWN0cyB0aGUgdmFsaWRpdHkgcnVsZXNcclxuICAgICAgbGV0IGZpcnN0V29yZCA9IHRydWU7XHJcbiAgICAgIGxldCBudW1tb3ZlcyA9IG1vdmVzLmxlbmd0aDtcclxuICAgICAgZm9yICh2YXIgbW92ZWluZGV4ID0gMDsgZmlyc3RXb3JkICYmIChtb3ZlaW5kZXggPCBudW1tb3Zlcyk7ICsrbW92ZWluZGV4KSB7XHJcbiAgICAgICAgaWYgKG1vdmVzW21vdmVpbmRleF0udHlwZSA9PT0gYy5NT1ZFX1RZUEVfUExBWSkge1xyXG4gICAgICAgICAgZmlyc3RXb3JkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIEZpcnN0IHdvcmQgbXVzdCBoaXQgY2VudGVyIHNxdWFyZVxyXG4gICAgICBpZiAoZmlyc3RXb3JkICYmIHNxdWFyZUFycmF5W21pZGRsZV1bbWlkZGxlXS51c2VkYnkgPT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwiRmlyc3QgcGxheSBtdXN0IGhpdCBjZW50ZXIgc3F1YXJlXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICAvLyBBdCBsZWFzdCAxIHRpbGUgbXVzdCBiZSBwbGF5ZWRcclxuICAgICAgaWYgKGN1cnJlbnRjb29yZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwiWW91IGRpZG4ndCBwbGF5IGFueSB0aWxlc1wiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgLyogR28gdGhyb3VnaCBlYWNoIHBsYXllZCB0aWxlXHJcbiAgICAgICAgICBNYWtlIHN1cmUgaXQgaXMgbm90IGlzb2xhdGVkIGZyb20gYWxsIHRoZSBvdGhlciB0aWxlc1xyXG4gICAgICAgICAgRGV0ZXJtaW5lIHRoZSBsb3dlc3QgYW5kIGhpZ2hlc3Qgcm93IGFuZCBjb2x1bW4gbnVtYmVycyBvZiB0aWxlcyBwbGF5ZWQgdGhpcyBtb3ZlXHJcbiAgICAgICovXHJcbiAgICAgIGxldCBudW1jb29yZHMgPSBjdXJyZW50Y29vcmRzLmxlbmd0aDtcclxuICAgICAgbGV0IGxvd3JvdyA9IGVkZ2UrMTtcclxuICAgICAgbGV0IGhpZ2hyb3cgPSAtMTtcclxuICAgICAgbGV0IGxvd2NvbCA9IGVkZ2UrMTtcclxuICAgICAgbGV0IGhpZ2hjb2wgPSAtMTtcclxuICAgICAgZm9yICh2YXIgY29vcmQ9MDsgY29vcmQgPCBudW1jb29yZHM7ICsrY29vcmQpIHsgLy8gRWFjaCB0aWxlIHBsYXllZCB0aGlzIG1vdmVcclxuICAgICAgICBsZXQgdGVtcHJvdyA9IHBhcnNlSW50KGN1cnJlbnRjb29yZHNbY29vcmRdLnNwbGl0KFwiLVwiKVswXSk7XHJcbiAgICAgICAgbGV0IHRlbXBjb2wgPSBwYXJzZUludChjdXJyZW50Y29vcmRzW2Nvb3JkXS5zcGxpdChcIi1cIilbMV0pO1xyXG4gICAgICAgIGlmICh0ZW1wcm93IDwgbG93cm93KSB7IGxvd3JvdyA9IHRlbXByb3c7fVxyXG4gICAgICAgIGlmICh0ZW1wcm93ID4gaGlnaHJvdykgeyBoaWdocm93ID0gdGVtcHJvdzt9XHJcbiAgICAgICAgaWYgKHRlbXBjb2wgPCBsb3djb2wpIHsgbG93Y29sID0gdGVtcGNvbDt9XHJcbiAgICAgICAgaWYgKHRlbXBjb2wgPiBoaWdoY29sKSB7IGhpZ2hjb2wgPSB0ZW1wY29sO31cclxuICAgICAgICAvLyBNYWtlIHN1cmUgdGhlcmUgaXMgYW5vdGhlciB0aWxlIGltbWVkaWF0ZWx5IGFib3ZlLCBiZWxvdywgbGVmdCwgb3IgcmlnaHQgKG5vdCBpc29sYXRlZClcclxuICAgICAgICBpZiAoISh0ZW1wcm93ID4gMCAmJiBzcXVhcmVBcnJheVt0ZW1wcm93LTFdW3RlbXBjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpICYmXHJcbiAgICAgICAgICAhKHRlbXBjb2wgPiAwICYmIHNxdWFyZUFycmF5W3RlbXByb3ddW3RlbXBjb2wtMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgJiZcclxuICAgICAgICAgICEodGVtcHJvdyA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbdGVtcHJvdysxXVt0ZW1wY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSAmJlxyXG4gICAgICAgICAgISh0ZW1wY29sIDwgZWRnZSAmJiBzcXVhcmVBcnJheVt0ZW1wcm93XVt0ZW1wY29sKzFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiRWFjaCBwbGF5ZWQgdGlsZSBtdXN0IGJlIHBhcnQgb2YgYSB3b3JkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gVXNpbmcgdGhlIGhpZ2ggYW5kIGxvdyB2YWx1ZXMsIGNoZWNrIGlmIHRoZSBwbGF5IGlzIGluIGEgc3RyYWlnaHQgbGluZVxyXG4gICAgICBpZiAobG93cm93ICE9PSBoaWdocm93ICYmIGxvd2NvbCAhPT0gaGlnaGNvbCkge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcIlRpbGVzIHBsYXllZCBtdXN0IGJlIGluIGEgc3RyYWlnaHQgbGluZVwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHBsYXl0aHJ1ID0gZmFsc2U7XHJcbiAgICAgIGxldCBob29rbWFkZSA9IGZhbHNlO1xyXG4gICAgICAvKiBUcmF2ZXJzZSBmcm9tIGZpcnN0IHBsYXllZCB0aWxlIHRvIGxhc3QgcGxheWVyIHRpbGVcclxuICAgICAgICAgIE1ha2Ugc3VyZSB0aGVyZSBhcmUgbm8gdW51c2VkIHNxdWFyZXMgaW5iZXR3ZWVuIChnYXBzIGluIHRoZSBwbGF5ZWQgd29yZClcclxuICAgICAgICAgIENoZWNrIGlmIHdlIHBsYXllZCB0aHJvdWdoIGV4aXN0aW5nIHRpbGVzXHJcbiAgICAgICAgICBDaGVjayBpZiB3ZSBob29rZWQgZXhpc3RpbmcgdGlsZXMvd29yZHNcclxuICAgICAgKi9cclxuICAgICAgZm9yICh2YXIgdGVtcHJvdyA9IGxvd3JvdzsgdGVtcHJvdyA8PSBoaWdocm93OyArK3RlbXByb3cpIHtcclxuICAgICAgICBmb3IgKHZhciB0ZW1wY29sID0gbG93Y29sOyB0ZW1wY29sIDw9IGhpZ2hjb2w7ICsrdGVtcGNvbCkge1xyXG4gICAgICAgICAgaWYgKHNxdWFyZUFycmF5W3RlbXByb3ddW3RlbXBjb2xdLnVzZWRieSA9PT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiVGhlcmUgaXMgYSBnYXAgaW4geW91ciB3b3JkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIWZpcnN0V29yZCkgeyAvLyBQbGF5IHRocm91Z2ggYW5kIGhvb2sgbm90IHBvc3NpYmxlIG9uIGZpcnN0IG1vdmVcclxuICAgICAgICAgICAgbGV0IHRlbXBjb29yZCA9IHRlbXByb3cgKyBcIi1cIiArIHRlbXBjb2w7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50Y29vcmRzLmluZGV4T2YodGVtcGNvb3JkKSA8IDApIHsgLy8gVGlsZSB3YXMgbm90IHBsYXllZCB0aGlzIG1vdmUgKHdhcyBhbHJlYWR5IG9uIHRoZSBib2FyZClcclxuICAgICAgICAgICAgICBwbGF5dGhydSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiB0ZW1wcm93ID4gMCAmJiBzcXVhcmVBcnJheVt0ZW1wcm93LTFdW3RlbXBjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgdGVtcHJvdyA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbdGVtcHJvdysxXVt0ZW1wY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIHRlbXBjb2wgPiAwICYmIHNxdWFyZUFycmF5W3RlbXByb3ddW3RlbXBjb2wtMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiB0ZW1wY29sIDwgZWRnZSAmJiBzcXVhcmVBcnJheVt0ZW1wcm93XVt0ZW1wY29sKzFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgaG9va21hZGUgPSB0cnVlOyB9ICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFmaXJzdFdvcmQpIHtcclxuICAgICAgICAvLyBXZSBhbHJlYWR5IGZvdW5kIHBsYXkgdGhyb3VnaCBhIHRpbGUgYmV0d2VlbiBmaXJzdCBhbmQgbGFzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIC8vIE5vdyBjaGVjayBpZiBwbGF5ZWQgd29yZCBoYXMgYSB0aWxlIGJlZm9yZSBmaXJzdCBvciBhZnRlciBsYXN0IHBsYXllZCB0aWxlXHJcbiAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiBsb3djb2wgPiAwICYmIHNxdWFyZUFycmF5W2xvd3Jvd11bbG93Y29sLTFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiBoaWdoY29sIDwgZWRnZSAmJiBzcXVhcmVBcnJheVtsb3dyb3ddW2hpZ2hjb2wrMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGxvd3JvdyA+IDAgJiYgc3F1YXJlQXJyYXlbbG93cm93LTFdW2xvd2NvbF0gIT09IGMuVVNFRF9CWV9OT05FKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgaGlnaHJvdyA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbaGlnaHJvdysxXVtsb3djb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICAgICAgLy8gTm93IHdlIGhhdmUgZnVsbHkgaWRlbnRpZmllZCBwbGF5IHRocm91Z2ggd2UgY2FuIG1ha2Ugc3VyZSB0aGV5IHBsYXllZCB0aHJvdWdoIG9yIG1hZGUgYSBob29rXHJcbiAgICAgICAgLy8gVGhpcyBpbiBtYW5kYXRvcnkgc2luY2UgaXQgaXMgbm90IHRoZSBmaXJzdCBtb3ZlXHJcbiAgICAgICAgaWYgKCFwbGF5dGhydSAmJiAhaG9va21hZGUpIHtcclxuICAgICAgICAgIHdpbmRvdy5hbGVydChcIk5ldyB3b3JkcyBtdXN0IGV4dGVuZCBhbiBleGlzdGluZyB3b3JkIGFuZC9vciBob29rIGV4aXN0aW5nIHdvcmRzIG9yIHRpbGVzXCIpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIGdldFBsYXlJbmZvKCkge1xyXG4gICAgICBsZXQgcGxheWluZm8gPSB7fTtcclxuICAgICAgbGV0IG1haW53b3JkID0gXCJcIjtcclxuICAgICAgbGV0IGV4dHJhd29yZHMgPSBbXTtcclxuICAgICAgbGV0IHdvcmRzdGFydGNvb3JkID0gXCJcIjtcclxuICAgICAgbGV0IG51bXJvd3MgPSBlZGdlKzE7XHJcbiAgICAgIGxldCBudW1jb2xzID0gZWRnZSsxO1xyXG4gICAgICBsZXQgbG93cm93ID0gbnVtcm93cztcclxuICAgICAgbGV0IGhpZ2hyb3cgPSAtMTtcclxuICAgICAgbGV0IGxvd2NvbCA9IG51bWNvbHM7XHJcbiAgICAgIGxldCBoaWdoY29sID0gLTE7XHJcbiAgICAgIGxldCBudW1jb29yZHMgPSBjdXJyZW50Y29vcmRzLmxlbmd0aDtcclxuICAgICAgZm9yICh2YXIgY29vcmQ9MDsgY29vcmQgPCBudW1jb29yZHM7ICsrY29vcmQpIHtcclxuICAgICAgICBsZXQgcm93ID0gcGFyc2VJbnQoY3VycmVudGNvb3Jkc1tjb29yZF0uc3BsaXQoXCItXCIpWzBdKTtcclxuICAgICAgICBsZXQgY29sID0gcGFyc2VJbnQoY3VycmVudGNvb3Jkc1tjb29yZF0uc3BsaXQoXCItXCIpWzFdKTtcclxuICAgICAgICBpZiAocm93IDwgbG93cm93KSB7XHJcbiAgICAgICAgICBsb3dyb3cgPSByb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyb3cgPiBoaWdocm93KSB7XHJcbiAgICAgICAgICBoaWdocm93ID0gcm93O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sIDwgbG93Y29sKSB7XHJcbiAgICAgICAgICBsb3djb2wgPSBjb2w7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2wgPiBoaWdoY29sKSB7XHJcbiAgICAgICAgICBoaWdoY29sID0gY29sO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobG93cm93IDwgaGlnaHJvdyB8fCBudW1jb29yZHMgPT09IDEpIHsgLy8gdGlsZXMgcGxhY2VkIG9uIGRpZmZlcmVuY2Ugcm93cyBzbyBwbGF5IGlzIHZlcnRpY2FsLCBvciBzaW5nbGUgdGlsZSBwbGF5ZWRcclxuICAgICAgICBsZXQgY29sID0gbG93Y29sOyAvLyBsb3djb2wgYW5kIGhpZ2hjb2wgd2lsbCBoYXZlIHRoZSBzYW1lIHZhbHVlXHJcbiAgICAgICAgLy8gZmluZCB0aGUgbG93ZXN0IHJvdyBudW1iZXIgb2YgdGhlIG1haW4gd29yZCwgd2hpY2ggbWF5IGJlIGxvd2VyIHRoYW4gdGhhdCBvZiB0aGUgZmlyc3QgcGxheWVkIHRpbGVcclxuICAgICAgICBsZXQgbG93ZXN0cm93ID0gbG93cm93O1xyXG4gICAgICAgIHdoaWxlIChsb3dlc3Ryb3cgPiAwICYmIHNxdWFyZUFycmF5W2xvd2VzdHJvdy0xXVtjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgIGxvd2VzdHJvdyA9IGxvd2VzdHJvdyAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZpbmQgdGhlIGhpZ2hlc3Qgcm93IG51bWJlciBvZiB0aGUgbWFpbiB3b3JkLCB3aGljaCBtYXkgYmUgaGlnaGVyIHRoYW4gdGhhdCBvZiB0aGUgbGFzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIGxldCBoaWdoZXN0cm93ID0gaGlnaHJvdztcclxuICAgICAgICB3aGlsZSAoaGlnaGVzdHJvdyA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbaGlnaGVzdHJvdysxXVtjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgIGhpZ2hlc3Ryb3cgPSBoaWdoZXN0cm93ICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd29yZHN0YXJ0Y29vcmQgPSBjLkJPQVJEX0NPTF9IRUFERVJTW2NvbF0gKyBjLkJPQVJEX1JPV19IRUFERVJTW2xvd2VzdHJvd107IC8vIHZlcnRpY2FsIHBsYXkgY29vcmRzIHN0YXJ0IHdpdGggY29sIGhlYWRlclxyXG4gICAgICAgIGZvciAodmFyIHJvdyA9IGxvd2VzdHJvdzsgcm93IDw9IGhpZ2hlc3Ryb3c7ICsrcm93KSB7XHJcbiAgICAgICAgICBtYWlud29yZCA9IG1haW53b3JkICsgc3F1YXJlQXJyYXlbcm93XVtjb2xdLmxldHRlcjtcclxuICAgICAgICAgIGxldCBjb29yZCA9IHJvdyArIFwiLVwiICsgY29sO1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCkgPiAtMSkgeyAvLyBUaGlzIHRpbGUgd2FzIHBsYXllZCwgY2hlY2sgZm9yIGhvb2tzXHJcbiAgICAgICAgICAgIGxldCBsb3dlc3Rjb2wgPSBjb2w7XHJcbiAgICAgICAgICAgIHdoaWxlIChsb3dlc3Rjb2wgPiAwICYmIHNxdWFyZUFycmF5W3Jvd11bbG93ZXN0Y29sLTFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgICBsb3dlc3Rjb2wgPSBsb3dlc3Rjb2wgLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBoaWdoZXN0Y29sID0gY29sO1xyXG4gICAgICAgICAgICB3aGlsZSAoaGlnaGVzdGNvbCA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbcm93XVtoaWdoZXN0Y29sKzFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgICBoaWdoZXN0Y29sID0gaGlnaGVzdGNvbCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxvd2VzdGNvbCA8IGhpZ2hlc3Rjb2wpIHsgLy8gaG9vayB3YXMgbWFkZVxyXG4gICAgICAgICAgICAgIGxldCBleHRyYXdvcmQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIHRlbXBjb2wgPSBsb3dlc3Rjb2w7IHRlbXBjb2wgPD0gaGlnaGVzdGNvbDsgKyt0ZW1wY29sKSB7XHJcbiAgICAgICAgICAgICAgICBleHRyYXdvcmQgPSBleHRyYXdvcmQgKyBzcXVhcmVBcnJheVtyb3ddW3RlbXBjb2xdLmxldHRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZXh0cmF3b3JkcyA9IFsuLi5leHRyYXdvcmRzLCBleHRyYXdvcmRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYWlud29yZC5sZW5ndGggPCAyKSB7IC8vIEhvcml6b250YWwgcGxheSBvciBzaW5nbGUgdGlsZSBkcm9wIHRoYXQgY2Fubm90IGJlIGEgdmVydGljYWwgcGxheVxyXG4gICAgICAgIGxldCByb3cgPSBsb3dyb3c7IC8vIGxvd3JvdyBhbmQgaGlnaHJvdyB3aWxsIGhhdmUgdGhlIHNhbWUgdmFsdWVcclxuICAgICAgICAvLyBmaW5kIHRoZSBsb3dlc3QgY29sIG51bWJlciBvZiB0aGUgbWFpbiB3b3JkLCB3aGljaCBtYXkgYmUgbG93ZXIgdGhhbiB0aGF0IG9mIHRoZSBmaXJzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIGxldCBsb3dlc3Rjb2wgPSBsb3djb2w7XHJcbiAgICAgICAgd2hpbGUgKGxvd2VzdGNvbCA+IDAgJiYgc3F1YXJlQXJyYXlbcm93XVtsb3dlc3Rjb2wtMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgbG93ZXN0Y29sID0gbG93ZXN0Y29sIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZmluZCB0aGUgaGlnaGVzdCBjb2wgbnVtYmVyIG9mIHRoZSBtYWluIHdvcmQsIHdoaWNoIG1heSBiZSBoaWdoZXIgdGhhbiB0aGF0IG9mIHRoZSBsYXN0IHBsYXllZCB0aWxlXHJcbiAgICAgICAgbGV0IGhpZ2hlc3Rjb2wgPSBoaWdoY29sO1xyXG4gICAgICAgIHdoaWxlIChoaWdoZXN0Y29sIDwgZWRnZSAmJiBzcXVhcmVBcnJheVtyb3ddW2hpZ2hlc3Rjb2wrMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgaGlnaGVzdGNvbCA9IGhpZ2hlc3Rjb2wgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3b3Jkc3RhcnRjb29yZCA9IGMuQk9BUkRfUk9XX0hFQURFUlNbcm93XSArIGMuQk9BUkRfQ09MX0hFQURFUlNbbG93ZXN0Y29sXTsgLy8gaG9yaXpvbnRhbCBwbGF5IGNvb3JkcyBzdGFydCB3aXRoIHJvdyBoZWFkZXJcclxuICAgICAgICBtYWlud29yZCA9IFwiXCI7IC8vIEluIGNhc2Ugd2UgZ290IGEgMSBsZXR0ZXIgbWFpbndvcmQgaW4gdGhlIHByZXZpb3VzIGJsb2NrXHJcbiAgICAgICAgZXh0cmF3b3JkcyA9IFtdOyAvLyBEaXR0b1xyXG4gICAgICAgIGZvciAodmFyIGNvbCA9IGxvd2VzdGNvbDsgY29sIDw9IGhpZ2hlc3Rjb2w7ICsrY29sKSB7XHJcbiAgICAgICAgICBtYWlud29yZCA9IG1haW53b3JkICsgc3F1YXJlQXJyYXlbcm93XVtjb2xdLmxldHRlcjtcclxuICAgICAgICAgIGxldCBjb29yZCA9IHJvdyArIFwiLVwiICsgY29sO1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCkgPiAtMSkgeyAvLyBUaGlzIHRpbGUgd2FzIHBsYXllZCwgY2hlY2sgZm9yIGhvb2tzXHJcbiAgICAgICAgICAgIGxldCBsb3dlc3Ryb3cgPSByb3c7XHJcbiAgICAgICAgICAgIHdoaWxlIChsb3dlc3Ryb3cgPiAwICYmIHNxdWFyZUFycmF5W2xvd2VzdHJvdy0xXVtjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgICBsb3dlc3Ryb3cgPSBsb3dlc3Ryb3cgLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBoaWdoZXN0cm93ID0gcm93O1xyXG4gICAgICAgICAgICB3aGlsZSAoaGlnaGVzdHJvdyA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbaGlnaGVzdHJvdysxXVtjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgICBoaWdoZXN0cm93ID0gaGlnaGVzdHJvdyArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxvd2VzdHJvdyA8IGhpZ2hlc3Ryb3cpIHsgLy8gaG9vayB3YXMgbWFkZVxyXG4gICAgICAgICAgICAgIGxldCBleHRyYXdvcmQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIHRlbXByb3cgPSBsb3dlc3Ryb3c7IHRlbXByb3cgPD0gaGlnaGVzdHJvdzsgKyt0ZW1wcm93KSB7XHJcbiAgICAgICAgICAgICAgICBleHRyYXdvcmQgPSBleHRyYXdvcmQgKyBzcXVhcmVBcnJheVt0ZW1wcm93XVtjb2xdLmxldHRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZXh0cmF3b3JkcyA9IFsuLi5leHRyYXdvcmRzLCBleHRyYXdvcmRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHBsYXlpbmZvID0ge21haW53b3JkOiBtYWlud29yZCwgZXh0cmF3b3JkczogZXh0cmF3b3JkcywgcG9zOiB3b3Jkc3RhcnRjb29yZH07XHJcbiAgICAgIHJldHVybiBwbGF5aW5mbztcclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIGFsbG93VW5kb0xhc3RUdXJuKCkge1xyXG4gICAgICBpZiAoIWFsbG93UmV3aW5kKSB7XHJcbiAgICAgICAgc2V0QWxsb3dSZXdpbmQodHJ1ZSk7XHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgICAgZnVuYzogXCJhbGxvd3VuZG9cIiwgLy8gYWxsb3cgdW5kbyBsYXN0IHR1cm5cclxuICAgICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCAvLyB3aG8gaXMgYWxsb3dpbmcgaXRcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBwZXJmb3JtUmV3aW5kKCkge1xyXG4gICAgICAvKiBTZW5kIHVuZG90dXJuIHRvIHNlcnZlciBhbmQgaXQgd2lsbCBzZW5kIHRoZSB1cGRhdGVkIGdhbWUgZGF0YSB0byBnYW1lIGNsaWVudHMsIGluY2x1ZGluZyB0aGlzIG9uZSAqL1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgZnVuYzogXCJ1bmRvdHVyblwiIC8vIHVuZG8gbGFzdCB0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgcmVjYWxsVGlsZXMgPSAoKSA9PiB7XHJcbiAgICAgIHNldFNxdWFyZUFycmF5KEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc25hcHNob3Quc3F1YXJlQXJyYXkpKSk7IC8vIERlZXAgY29weVxyXG4gICAgICBzZXRQdGlsZXMoWy4uLnNuYXBzaG90LnB0aWxlc10pO1xyXG4gICAgICBzZXRHdGlsZXMoWy4uLnNuYXBzaG90Lmd0aWxlc10pO1xyXG4gICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgICAgc2V0UmNkKFstMSwtMSxjLkRJUl9OT05FXSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgcHJpc29uZXJQYXNzID0gKCkgPT4ge1xyXG4gICAgICBsZXQgbmV3TW92ZSA9IHtieTogYy5QQVJUWV9UWVBFX1BSSVNPTkVSUywgdHlwZTogYy5NT1ZFX1RZUEVfUEFTU307XHJcbiAgICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICAgIGxldCBuZXdXaG9zZXR1cm4gPSBpc0RvdWJsZVBhc3MobmV3TW92ZXMpID8gYy5XSE9TRV9UVVJOX0dBTUVPVkVSIDogYy5XSE9TRV9UVVJOX0dVQVJEUzsgLy8gSWYgYm90aCBwbGF5ZXJzIHBhc3MgdGhlbiBlbmQgdGhlIGdhbWVcclxuICAgICAgbGV0IG5ld1N5bmNzdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICAgIHJlY2FsbFRpbGVzKCk7IC8vIEluIGNhc2UgdGhleSBwdXQgc29tZSB0aWxlcyBvbiB0aGUgYm9hcmQgYmVmb3JlIGNsaWNraW5nIFBhc3NcclxuICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgc2V0U3luY3N0YW1wKG5ld1N5bmNzdGFtcCk7XHJcbiAgICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcImVwdFwiLCAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICAgIHRpbWVzdGFtcDogbmV3U3luY3N0YW1wLCAvLyBmb3IgZGF0YSBzeW5jIGxvZ2ljXHJcbiAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LCAvLyB3aG8gcGFzc2VkIHRoZWlyIHR1cm5cclxuICAgICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuLCAvLyBlaXRoZXIgaXQgaXMgbm93IG9wcG9uZW50cyB0dXJuIG9yIHRoZSBwYXNzIGVuZGVkIHRoZSBnYW1lXHJcbiAgICAgICAgICBtb3ZlOiBuZXdNb3ZlIC8vIHRoZSBtb3ZlIHRoYXQgd2FzIG1hZGVcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBndWFyZHNQYXNzID0gKCkgPT4ge1xyXG4gICAgICBsZXQgbmV3TW92ZSA9IHtieTogYy5QQVJUWV9UWVBFX0dVQVJEUywgdHlwZTogYy5NT1ZFX1RZUEVfUEFTU307XHJcbiAgICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICAgIGxldCBuZXdXaG9zZXR1cm4gPSBpc0RvdWJsZVBhc3MobmV3TW92ZXMpID8gYy5XSE9TRV9UVVJOX0dBTUVPVkVSIDogYy5XSE9TRV9UVVJOX1BSSVNPTkVSUzsgLy8gSWYgYm90aCBwbGF5ZXJzIHBhc3MgdGhlbiBlbmQgdGhlIGdhbWVcclxuICAgICAgbGV0IG5ld1N5bmNzdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICAgIHJlY2FsbFRpbGVzKCk7IC8vIEluIGNhc2UgdGhleSBwdXQgc29tZSB0aWxlcyBvbiB0aGUgYm9hcmQgYmVmb3JlIGNsaWNraW5nIFBhc3NcclxuICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgc2V0U3luY3N0YW1wKG5ld1N5bmNzdGFtcCk7XHJcbiAgICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcImVndFwiLCAvLyBlbmQgZ3VhcmRzIHR1cm5cclxuICAgICAgICAgIHRpbWVzdGFtcDogbmV3U3luY3N0YW1wLCAvLyBmb3IgZGF0YSBzeW5jIGxvZ2ljXHJcbiAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LCAvLyB3aG8gcGFzc2VkIHRoZWlyIHR1cm5cclxuICAgICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuLCAvLyBlaXRoZXIgaXQgaXMgbm93IG9wcG9uZW50cyB0dXJuIG9yIHRoZSBwYXNzIGVuZGVkIHRoZSBnYW1lXHJcbiAgICAgICAgICBtb3ZlOiBuZXdNb3ZlIC8vIHRoZSBtb3ZlIHRoYXQgd2FzIG1hZGVcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcblxyXG4gICAgY29uc3QgcmVxdWVzdEdhbWVEYXRhID0gKCkgPT4ge1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgIGZ1bmM6IFwicmVxdWVzdGdhbWVkYXRhXCIsIC8vIHJlcXVlc3QgZ2FtZSBkYXRhXHJcbiAgICAgICAgICBzeW5jc3RhbXA6IHN5bmNzdGFtcCAvLyBzbyBzZXJ2ZXIgY2FuIGRlY2lkZSB3aGV0aGVyIEkgYW0gdXAgdG8gZGF0ZVxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgcmVxdWVzdFN5bmNEYXRhID0gKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgU2VuZCByZXF1ZXN0c3luY2RhdGEgJHtzeW5jc3RhbXB9YCk7XHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LFxyXG4gICAgICAgICAgZnVuYzogXCJyZXF1ZXN0c3luY2RhdGFcIiAvLyByZXF1ZXN0IHN5bmMgZGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAocGFydGljaXBhbnQgIT09IHdob3NldHVybikge3JldHVybjt9XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgIHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX1BSSVNPTkVSUyA/IGVuZFByaXNvbmVyc1R1cm4oKSA6IGVuZEd1YXJkc1R1cm4oKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICAgIHJlY2FsbFRpbGVzKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBsZXR0ZXJ0ZXN0ID0gL15bQS1aYS16XFw/XSQvOyAvLyBzaW5nbGUgbGV0dGVyIG9yIHF1ZXN0aW9uIG1hcmsga2V5IHByZXNzZWRcclxuICAgICAgaWYgKGV2ZW50LmtleS5tYXRjaChsZXR0ZXJ0ZXN0KSkge1xyXG4gICAgICAgIGxldCBsZXR0ZXIgPSBldmVudC5rZXkudG9VcHBlckNhc2UoKTtcclxuICAgICAgICBsZXQgcmFjayA9IHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX1BSSVNPTkVSUyA/IHB0aWxlcyA6IGd0aWxlcztcclxuICAgICAgICBsZXQgbmV3U2VsZWN0aW9uID0gcmFjay5pbmRleE9mKGxldHRlcik7XHJcbiAgICAgICAgaWYgKG5ld1NlbGVjdGlvbiA9PT0gLTEpIHtcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IHJhY2suaW5kZXhPZihcIj9cIik7IC8vIFVzZSB0aGUgYmxhbmsgaWYgdGhleSBoYXZlIG9uZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmV3U2VsZWN0aW9uID4gLTEpIHsgLy8gUHJlc3NlZCBsZXR0ZXIgaXMgb24gdGhlIHJhY2tcclxuICAgICAgICAgIGxldCByb3cgPSByY2RbMF07XHJcbiAgICAgICAgICBsZXQgY29sID0gcmNkWzFdO1xyXG4gICAgICAgICAgbGV0IGRpciA9IHJjZFsyXTtcclxuICAgICAgICAgIGlmIChyb3cgPi0xICYmIGNvbCA+IC0xICYmIGRpciAhPT0gYy5ESVJfTk9ORSkgeyAvLyByb3csIGNvbCwgZGlyIGFyZSBzZXQgdG8gYWNjZXB0IGtleXN0cm9rZVxyXG4gICAgICAgICAgICAvLyBOZWVkIHRvIGZpZ3VyZSBvdXQgbmV4dCBzcWF1cmUgdG8gYXV0by1wbGFjZSBhIHRpbGVcclxuICAgICAgICAgICAgbGV0IG5ld1JjZCA9IHJjZDtcclxuICAgICAgICAgICAgaWYgKGRpciA9PT0gYy5ESVJfUklHSFQpIHsgLy8gcGxheWluZyByaWdodHdhcmRzXHJcbiAgICAgICAgICAgICAgbGV0IG5ld2MgPSAtMTtcclxuICAgICAgICAgICAgICBmb3IgKHZhciB0ZW1wY29sID0gY29sICsgMTsgdGVtcGNvbCA8IGVkZ2UgKyAxICYmIG5ld2MgPT09IC0xOyB0ZW1wY29sKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzcXVhcmVBcnJheVtyb3ddW3RlbXBjb2xdLnVzZWRieSA9PT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgICAgICAgbmV3YyA9IHRlbXBjb2w7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChuZXdjID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgbmV3UmNkID0gWy0xLC0xLGMuRElSX05PTkVdO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSY2QgPSBbcm93LCBuZXdjLCBjLkRJUl9SSUdIVF07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socm93LGNvbCxuZXdTZWxlY3Rpb24sbmV3UmNkKTtcclxuICAgICAgICAgICAgICBzZXRTZWxlY3Rpb24oLTEpOyAvLyB3aGVuIHRoZXkgYXJlIHR5cGluZyB0aGV5IGFyZSBub3Qgc2VsZWN0aW5nIHJhY2sgdGlsZXMgYnkgY2xpY2tpbmcgdGhlbSBvbiB0aGUgcmFja1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGlyID09PSBjLkRJUl9ET1dOKSB7IC8vIHBsYXlpbmcgZG93bndhcmRzXHJcbiAgICAgICAgICAgICAgbGV0IG5ld3IgPSAtMTtcclxuICAgICAgICAgICAgICBsZXQgbnVtcm93cyA9IChyYWNrc2l6ZSoyKSsxO1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIHRlbXByb3cgPSByb3cgKyAxOyB0ZW1wcm93IDwgbnVtcm93cyAmJiBuZXdyID09PSAtMTsgdGVtcHJvdysrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3F1YXJlQXJyYXlbdGVtcHJvd11bY29sXS51c2VkYnkgPT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICAgICAgICAgIG5ld3IgPSB0ZW1wcm93O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAobmV3ciA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIG5ld1JjZCA9IFstMSwtMSxjLkRJUl9OT05FXTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3UmNkID0gW25ld3IsIGNvbCwgYy5ESVJfRE9XTl07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socm93LGNvbCxuZXdTZWxlY3Rpb24sbmV3UmNkKTtcclxuICAgICAgICAgICAgICBzZXRTZWxlY3Rpb24oLTEpOyAvLyB3aGVuIHRoZXkgYXJlIHR5cGluZyB0aGV5IGFyZSBub3Qgc2VsZWN0aW5nIHJhY2sgdGlsZXMgYnkgY2xpY2tpbmcgdGhlbSBvbiB0aGUgcmFja1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJCYWNrc3BhY2VcIiAmJiBjdXJyZW50Y29vcmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvLyBTYW1lIGFzIGNsaWNraW5nIG9uIGEgcGxheWVkLXRoaXMtbW92ZSB0aWxlIGluIHRlcm1zIG9mIHJldHVybmluZyB0aGUgdGlsZSB0byB0aGUgcmFja1xyXG4gICAgICAgIC8vIEhvd2V2ZXIgd2UgYWxzbyB3YW50IHRvIHNldCB1cCByY2Qgc28gdGhleSBjYW4gcHJlc3MgdGhlIGtleSB0aGV5IG1lYW50IGFuZCBjb250aW51ZVxyXG4gICAgICAgIGxldCBjb29yZCA9IGN1cnJlbnRjb29yZHNbY3VycmVudGNvb3Jkcy5sZW5ndGggLSAxXTsgLy8gdGlsZSB0byByZXR1cm4gdG8gcmFja1xyXG4gICAgICAgIGxldCByb3cgPSBwYXJzZUludChjb29yZC5zcGxpdChcIi1cIilbMF0pO1xyXG4gICAgICAgIGxldCBjb2wgPSBwYXJzZUludChjb29yZC5zcGxpdChcIi1cIilbMV0pO1xyXG4gICAgICAgIGxldCBuZXdDdXJyZW50Y29vcmRzID0gWy4uLmN1cnJlbnRjb29yZHNdO1xyXG4gICAgICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgICAgICBsZXQgbmV3R3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICAgICAgbGV0IG5ld1NxdWFyZUFycmF5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzcXVhcmVBcnJheSkpOyAvLyBEZWVwIGNvcHlcclxuICAgICAgICBsZXQgbmV3U3F1YXJlQXJyYXlSb3cgPSBuZXdTcXVhcmVBcnJheVtyb3ddO1xyXG4gICAgICAgIGxldCBuZXdTcXVhcmVBcnJheUNlbGwgPSBuZXdTcXVhcmVBcnJheVJvd1tjb2xdO1xyXG4gICAgICAgIGxldCBuZXdSY2QgPSBbLTEsLTEsYy5ESVJfTk9ORV07XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGlvbiA9IHNlbGVjdGlvbjtcclxuICAgICAgICBuZXdDdXJyZW50Y29vcmRzLnNwbGljZShjdXJyZW50Y29vcmRzLmxlbmd0aC0xLDEpO1xyXG4gICAgICAgIGxldCByZXR1cm5lZFRpbGUgPSBzcXVhcmVBcnJheVtyb3ddW2NvbF0ubGV0dGVyO1xyXG4gICAgICAgIGlmICh3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMpIHtcclxuICAgICAgICAgIG5ld1B0aWxlcy5wdXNoKHJldHVybmVkVGlsZSk7XHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdQdGlsZXMubGVuZ3RoLTE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5ld0d0aWxlcy5wdXNoKHJldHVybmVkVGlsZSk7XHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdHdGlsZXMubGVuZ3RoLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Q2VsbC51c2VkYnkgPSBjLlVTRURfQllfTk9ORTtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheUNlbGwubGV0dGVyID0gYy5MRVRURVJfTk9ORTtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheVJvd1tjb2xdID0gbmV3U3F1YXJlQXJyYXlDZWxsO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5W3Jvd10gPSBbLi4ubmV3U3F1YXJlQXJyYXlSb3ddO1xyXG4gICAgICAgIGxldCBkaXIgPSByY2RbMl07XHJcbiAgICAgICAgaWYgKGRpciAhPT0gYy5ESVJfTk9ORSkge1xyXG4gICAgICAgICAgLy8gZGlyZWN0aW9uIHdhcyBzZXQgc28ga2VlcCBpdFxyXG4gICAgICAgICAgbmV3UmNkID0gW3Jvdyxjb2wsZGlyXTtcclxuICAgICAgICAgIGlmIChjdXJyZW50Y29vcmRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3Rpb24gPSAtMTsgLy8gaWYgdGhleSBiYWNrc3BhY2UgYWxsIHRoZSBsZXR0ZXJzIG9mZiBsZWF2ZSByYWNrIHRpbGUgdW5zZWxlY3RlZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKG5ld0N1cnJlbnRjb29yZHMpO1xyXG4gICAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICAgIHNldFNxdWFyZUFycmF5KG5ld1NxdWFyZUFycmF5KTtcclxuICAgICAgICBzZXRSY2QobmV3UmNkKTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24obmV3U2VsZWN0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmlzb25icmVha1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1jb250YWluZXIgdzMtdGVhbCB0b3BCYXJIZWlnaHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1taWRkbGVcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm15SGVhZGluZ0ZvbnRcIj5Qcmlzb24gQnJlYWs8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktdG9wbGVmdCB3My1ibGFjayB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICBHYW1lIGlkOiB7Z2FtZWlkfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktYm90dG9tbGVmdCB3My1vcmFuZ2UgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgUHJpc29uZXJzOiB7XHJcbiAgICAgICAgICAgICAgcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBuaWNrbmFtZVxyXG4gICAgICAgICAgICAgIDogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMgPyBvcHBuYW1lXHJcbiAgICAgICAgICAgICAgOiAnU2VjcmV0J1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LXRvcHJpZ2h0IHczLWJsYWNrIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiLi4vLi4vXCJ9PlxyXG4gICAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT48L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWJvdHRvbXJpZ2h0IHczLW9yYW5nZSB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICBHdWFyZHM6IHtcclxuICAgICAgICAgICAgICBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IG9wcG5hbWVcclxuICAgICAgICAgICAgICA6IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTID8gbmlja25hbWVcclxuICAgICAgICAgICAgICA6ICdTZWNyZXQnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBiVGlsZUFuZE1vdmVzT3V0ZXJcIj5cclxuICAgICAgICAgICAgICA8U2hvd1Vuc2VlblRpbGVzXHJcbiAgICAgICAgICAgICAgICB0aWxlcz17dGlsZXN9XHJcbiAgICAgICAgICAgICAgICBvdGhlcnRpbGVzPXtcclxuICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBndGlsZXNcclxuICAgICAgICAgICAgICAgICAgOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUyA/IHB0aWxlc1xyXG4gICAgICAgICAgICAgICAgICA6IFtdfSAvLyBPYnNlcnZlcnMgc2VlIGJvdGggcmFja3Mgc28gbm90aGluZyB0byBleGNsdWRlIGZyb20gdGlsZWJhZyBhcyB1bnNlZW5cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFNob3dNb3ZlcyBtb3Zlcz17bW92ZXN9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGJQbGF5ZXJPdXRlclNlY3Rpb25cIj5cclxuICAgICAgICAgICAge3BhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID9cclxuICAgICAgICAgICAgICA8UGxheWVyU2VjdGlvblxyXG4gICAgICAgICAgICAgICAgcmFja3RpbGVzPXtwdGlsZXN9XHJcbiAgICAgICAgICAgICAgICB3aG9zZXR1cm49e3dob3NldHVybn1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KHRpKSA9PiBoYW5kbGVSYWNrVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tGaW5pc2hUdXJuPXsoKSA9PiBlbmRQcmlzb25lcnNUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrVGlsZVJlY2FsbD17KCkgPT4gcmVjYWxsVGlsZXMoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tUaWxlRXhjaGFuZ2U9eygpID0+IHN3YXBQcmlzb25lcnNUaWxlcygpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1Bhc3NQbGF5PXsoKSA9PiBwcmlzb25lclBhc3MoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tVbmRvTGFzdFBsYXk9eygpID0+IHBlcmZvcm1SZXdpbmQoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tBbGxvd1VuZG89eygpID0+IGFsbG93VW5kb0xhc3RUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudD17cGFydGljaXBhbnR9XHJcbiAgICAgICAgICAgICAgICBtb3Zlcz17bW92ZXN9XHJcbiAgICAgICAgICAgICAgICBhbGxvd1Jld2luZD17YWxsb3dSZXdpbmR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgOnBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTID9cclxuICAgICAgICAgICAgICA8UGxheWVyU2VjdGlvblxyXG4gICAgICAgICAgICAgICAgcmFja3RpbGVzPXtndGlsZXN9XHJcbiAgICAgICAgICAgICAgICB3aG9zZXR1cm49e3dob3NldHVybn1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KHRpKSA9PiBoYW5kbGVSYWNrVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tGaW5pc2hUdXJuPXsoKSA9PiBlbmRHdWFyZHNUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrVGlsZVJlY2FsbD17KCkgPT4gcmVjYWxsVGlsZXMoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tUaWxlRXhjaGFuZ2U9eygpID0+IHN3YXBHdWFyZHNUaWxlcygpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1Bhc3NQbGF5PXsoKSA9PiBndWFyZHNQYXNzKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrVW5kb0xhc3RQbGF5PXsoKSA9PiBwZXJmb3JtUmV3aW5kKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrQWxsb3dVbmRvPXsoKSA9PiBhbGxvd1VuZG9MYXN0VHVybigpfVxyXG4gICAgICAgICAgICAgICAgcGFydGljaXBhbnQ9e3BhcnRpY2lwYW50fVxyXG4gICAgICAgICAgICAgICAgbW92ZXM9e21vdmVzfVxyXG4gICAgICAgICAgICAgICAgYWxsb3dSZXdpbmQ9e2FsbG93UmV3aW5kfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUGxheWVySW5uZXJTZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUGxheWVyVGl0bGVcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntjLlBBUlRZX0lDT05fUFJJU09ORVJTfTwvaT4mbmJzcDt7Yy5QQVJUWV9USVRMRV9QUklTT05FUlN9Jm5ic3A7PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57Yy5QQVJUWV9JQ09OX1BSSVNPTkVSU308L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAge3B0aWxlcyAmJiBwdGlsZXMubWFwKCh0LCB0aSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxPYnNlcnZlclJhY2tUaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgT2JzZXJ2ZXJQcmlzb25lcnNSYWNrVGlsZSR7dGl9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudD0nUCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxldmFsdWU9e3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZWluZGV4PXt0aX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJQbGF5ZXJUaXRsZVwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+e2MuUEFSVFlfSUNPTl9HVUFSRFN9PC9pPiZuYnNwO3tjLlBBUlRZX1RJVExFX0dVQVJEU30mbmJzcDs8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntjLlBBUlRZX0lDT05fR1VBUkRTfTwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICB7Z3RpbGVzICYmIGd0aWxlcy5tYXAoKHQsIHRpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE9ic2VydmVyUmFja1RpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BPYnNlcnZlckd1YXJkc1JhY2tUaWxlJHt0aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50PSdHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGV2YWx1ZT17dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlaW5kZXg9e3RpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIHtwYXJ0aWNpcGFudCA9PT0gd2hvc2V0dXJuID9cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIG9uS2V5RG93bkNhcHR1cmU9e2hhbmRsZUtleURvd259PlxyXG4gICAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICAgIHNxdWFyZUFycmF5PXtzcXVhcmVBcnJheX1cclxuICAgICAgICAgICAgICAgICAgcmNkPXtyY2R9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhyaSwgY2kpID0+IGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socmksIGNpLCAtMSxudWxsKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICAgIHNxdWFyZUFycmF5PXtzcXVhcmVBcnJheX1cclxuICAgICAgICAgICAgICAgICAgcmNkPXtyY2R9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICA8U2hvd1Jlc2N1ZXMgcmVzY3Vlcz17cmVzY3Vlc30gLz5cclxuICAgICAgICAgICAgPENoYXQgZ2FtZWlkPXtnYW1laWR9IGNsaWVudD17Y2xpZW50fSBuaWNrbmFtZT17bmlja25hbWV9IG1zZ3M9e2NoYXRtc2dzfSBzZXRNc2dzPXtzZXRDaGF0bXNnc30gcGFydGljaXBhbnQ9e3BhcnRpY2lwYW50fS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktY29udGFpbmVyIHczLXRlYWwgdG9wQmFySGVpZ2h0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktbWlkZGxlIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAge3dob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX0dBTUVPVkVSID9cclxuICAgICAgICAgICAgICA8aDE+R2FtZSBPdmVyITwvaDE+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICA8cD57Yy5KT0tFX0FSUkFZW2pva2VpbmRleF19PC9wPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG5jb25zdCBPYnNlcnZlclJhY2tUaWxlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRVbnNlbGVjdGVkID0gXCJVbnNlbGVjdGVkIFwiO1xyXG4gIGNvbnN0IHVOb3RVID0gcHJvcHMudGlsZXZhbHVlID09PSBcIlFcIiA/IFwidSBcIiA6IFwiXCI7XHJcbiAgY29uc3QgdGlsZWNsYXNzID0gXCJwYlRpbGVPblJhY2sgXCIgKyBzZWxlY3RlZFVuc2VsZWN0ZWQgKyB1Tm90VSArIHByb3BzLnBhcnRpY2lwYW50O1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICAgIGtleT17cHJvcHMudGlsZWluZGV4fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXt0aWxlY2xhc3N9XHJcbiAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlT25SYWNrVGV4dFwiPntwcm9wcy50aWxldmFsdWV9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IEdhbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==