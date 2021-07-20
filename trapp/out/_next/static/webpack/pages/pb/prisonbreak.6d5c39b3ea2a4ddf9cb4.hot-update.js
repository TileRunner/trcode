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

  async function endPlayersTurn() {
    if (!isPlayValid()) {
      return;
    }

    let playinfo = await getPlayInfo();

    if (playinfo.invalidwords.length !== 0) {
      alert(`Invalid according to ENABLE2K lexicon: ${playinfo.invalidwords.join().replace(".", "?").toUpperCase()}`);
      return; // Do not apply the play
    }

    let newRescues = rescues;

    if (participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS) {
      let escapehatches = ["0-0", "0-" + middle, "0-" + edge, middle + "-0", middle + "-" + edge, edge + "-0", edge + "-" + middle, edge + "-" + edge]; // coords of escape hatches

      for (var i = 0; i < currentcoords.length; i++) {
        if (escapehatches.indexOf(currentcoords[i]) > -1) {
          newRescues = newRescues + 1;
        }
      }
    }

    let newPlayerTiles = participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? [...ptiles] : [...gtiles];
    let newTiles = [...tiles];

    while (newPlayerTiles.length < racksize && newTiles.length > 0) {
      let rand = Math.floor(Math.random() * newTiles.length);
      newPlayerTiles.push(newTiles[rand]);
      newTiles.splice(rand, 1);
    }

    newPlayerTiles.sort();
    let newWhoseturn = newPlayerTiles.length === 0 ? _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_GAMEOVER : participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_GUARDS : _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS;

    if (!(0,_lib_pb_anyUnusedEscapeHatches__WEBPACK_IMPORTED_MODULE_11__.anyUnusedEscapeHatches)(squareArray)) {
      newWhoseturn = _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_GAMEOVER; // No escape hatches left
    }

    let newMove = {
      by: participant,
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
    participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? setPtiles(newPlayerTiles) : setGtiles(newPlayerTiles);
    setTiles(newTiles);
    setMoves(newMoves);
    setRescues(newRescues);
    setSnapshot({
      squareArray: JSON.parse(JSON.stringify(squareArray)),
      // Deep copy
      ptiles: participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? [...newPlayerTiles] : [...ptiles],
      gtiles: participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? [...gtiles] : [...newPlayerTiles]
    });
    let jsend = {
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      func: participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? "ept" : "egt",
      // end prisoners or guards turn
      timestamp: newSyncstamp,
      // for data sync logic
      sender: participant,
      ptiles: newPlayerTiles,
      // we picked new tiles for prisoners rack
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      whoseturn: newWhoseturn,
      // may have ended the game
      move: newMove,
      // the move that was made
      rescues: newRescues // may have rescued another prisoner

    };
    participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? jsend.ptiles = newPlayerTiles : jsend.gtiles = newPlayerTiles;
    client.send(jsend);
  }

  ;

  const swapPlayersTiles = () => {
    if (tiles.length < racksize) {
      window.alert("Need " + racksize + " tiles in the bag to exchange");
      return;
    }

    let newPlayerTiles = [];
    let newTiles = [...tiles];

    while (newPlayerTiles.length < racksize && newTiles.length > 0) {
      let rand = Math.floor(Math.random() * newTiles.length);
      newPlayerTiles.push(newTiles[rand]);
      newTiles.splice(rand, 1);
    }

    newPlayerTiles.sort();
    participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? newTiles = [...newTiles, ...snapshot.ptiles] : newTiles = [...newTiles, ...snapshot.gtiles];
    newTiles.sort();
    let newMove = {
      by: participant,
      type: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.MOVE_TYPE_SWAP
    };
    let newMoves = [...moves, newMove];
    let newSyncstamp = Date.now();
    putAtMoveStart();
    setSyncstamp(newSyncstamp);
    setSquareArray(JSON.parse(JSON.stringify(snapshot.squareArray))); // Deep copy

    setWhoseturn(participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_GUARDS : _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_PRISONERS);
    participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? setPtiles(newPlayerTiles) : setGtiles(newPlayerTiles);
    setTiles(newTiles);
    setMoves(newMoves);
    setSnapshot({
      squareArray: JSON.parse(JSON.stringify(snapshot.squareArray)),
      // Deep copy
      ptiles: participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? [...newPlayerTiles] : [...ptiles],
      gtiles: participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? [...gtiles] : [...newPlayerTiles]
    });
    let jsend = {
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      func: participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? "ept" : "egt",
      // end prisoners or guards turn
      timestamp: newSyncstamp,
      // for data sync logic
      sender: participant,
      whoseturn: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_GUARDS,
      // swap never ends the game so go to opponent
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      move: newMove // the move that was made

    };
    participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? jsend.ptiles = newPlayerTiles : jsend.gtiles = newPlayerTiles;
    client.send(jsend);
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

    let invalidwords = await validateWords(mainword, extrawords);
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
    }); // Q can be Q or QU

    allwords = allwords.replace("Q", "QU?");
    let url =  true ? 'http://localhost:5000/ENABLE2K?validate=' : 0;
    const response = await fetch(url + allwords.toLocaleLowerCase());
    const jdata = await response.json();
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

  const playerPassTurn = () => {
    let newMove = {
      by: participant,
      type: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.MOVE_TYPE_PASS
    };
    let newMoves = [...moves, newMove];
    let newWhoseturn = (0,_lib_pb_isDoublePass__WEBPACK_IMPORTED_MODULE_13__.isDoublePass)(newMoves) ? _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_GAMEOVER : participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_GUARDS : _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_PRISONERS; // If both players pass then end the game

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
      func: participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? "ept" : "egt",
      // end prisoners or guards turn
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
      endPlayersTurn();
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
          lineNumber: 844,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 843,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-topleft w3-black topBarCorner commonFontFamily",
        children: ["Game id: ", gameid]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 846,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-bottomleft w3-orange topBarCorner commonFontFamily",
        children: ["Prisoners: ", participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? nickname : participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_GUARDS ? oppname : 'Secret']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 849,
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
              lineNumber: 858,
              columnNumber: 18
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 858,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 857,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 856,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-bottomright w3-orange topBarCorner commonFontFamily",
        children: ["Guards: ", participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? oppname : participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_GUARDS ? nickname : 'Secret']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 861,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 842,
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
          lineNumber: 871,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_movesSection__WEBPACK_IMPORTED_MODULE_6__.default, {
          moves: moves,
          onmoveclick: mi => handleMoveClick(mi)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 878,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 870,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col pbPlayerOuterSection",
        children: participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_playerSection__WEBPACK_IMPORTED_MODULE_3__.default, {
          racktiles: ptiles,
          whoseturn: whoseturn,
          selection: selection,
          onClick: ti => handleRackTileClick(ti),
          onClickFinishTurn: () => endPlayersTurn(),
          onClickTileRecall: () => recallTiles(),
          onClickTileExchange: () => swapPlayersTiles(),
          onClickPassPlay: () => playerPassTurn(),
          onClickUndoLastPlay: () => performRewind(),
          onClickAllowUndo: () => allowUndoLastTurn(),
          participant: participant,
          moves: moves,
          allowRewind: allowRewind
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 882,
          columnNumber: 15
        }, undefined) : participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_GUARDS ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_playerSection__WEBPACK_IMPORTED_MODULE_3__.default, {
          racktiles: gtiles,
          whoseturn: whoseturn,
          selection: selection,
          onClick: ti => handleRackTileClick(ti),
          onClickFinishTurn: () => endPlayersTurn(),
          onClickTileRecall: () => recallTiles(),
          onClickTileExchange: () => swapPlayersTiles(),
          onClickPassPlay: () => playerPassTurn(),
          onClickUndoLastPlay: () => performRewind(),
          onClickAllowUndo: () => allowUndoLastTurn(),
          participant: participant,
          moves: moves,
          allowRewind: allowRewind
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 898,
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
              lineNumber: 915,
              columnNumber: 48
            }, undefined), "\xA0", _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TITLE_PRISONERS, "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_ICON_PRISONERS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 915,
              columnNumber: 143
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 915,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbTilerack",
            children: ptiles && ptiles.map((t, ti) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ObserverRackTile, {
              participant: "P",
              tilevalue: t,
              tileindex: ti
            }, `ObserverPrisonersRackTile${ti}`, false, {
              fileName: _jsxFileName,
              lineNumber: 918,
              columnNumber: 23
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 916,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbPlayerTitle",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_ICON_GUARDS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 926,
              columnNumber: 48
            }, undefined), "\xA0", _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TITLE_GUARDS, "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_ICON_GUARDS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 926,
              columnNumber: 137
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 926,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbTilerack",
            children: gtiles && gtiles.map((t, ti) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ObserverRackTile, {
              participant: "G",
              tilevalue: t,
              tileindex: ti
            }, `ObserverGuardsRackTile${ti}`, false, {
              fileName: _jsxFileName,
              lineNumber: 929,
              columnNumber: 23
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 927,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 914,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 880,
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
            lineNumber: 943,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 942,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_board__WEBPACK_IMPORTED_MODULE_4__.default, {
            squareArray: squareArray,
            rcd: rcd,
            onClick: () => {}
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 951,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 950,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 940,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_rescuesSection__WEBPACK_IMPORTED_MODULE_7__.default, {
          rescues: rescues
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 960,
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
          lineNumber: 961,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 959,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 869,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-display-container w3-teal topBarHeight",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-middle commonFontFamily",
        children: whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_GAMEOVER ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Game Over!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 967,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.JOKE_ARRAY[jokeindex]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 969,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 965,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 964,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 841,
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
      lineNumber: 986,
      columnNumber: 11
    }, undefined)
  }, props.tileindex, false, {
    fileName: _jsxFileName,
    lineNumber: 982,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvZ2FtZS5qcyJdLCJuYW1lcyI6WyJHYW1lIiwiaXNyZWpvaW4iLCJwYXJ0aWNpcGFudCIsImdhbWVpZCIsIm5pY2tuYW1lIiwid3NtZXNzYWdlIiwiY2xpZW50IiwicmFja3NpemUiLCJzeW5jc3RhbXAiLCJzZXRTeW5jc3RhbXAiLCJ1c2VTdGF0ZSIsIm1pZGRsZSIsImVkZ2UiLCJpbml0aWFsdGlsZXMiLCJjIiwidGlsZXMiLCJzZXRUaWxlcyIsInB0aWxlcyIsInNldFB0aWxlcyIsImd0aWxlcyIsInNldEd0aWxlcyIsInNxdWFyZUFycmF5Iiwic2V0U3F1YXJlQXJyYXkiLCJzZWxlY3Rpb24iLCJzZXRTZWxlY3Rpb24iLCJ3aG9zZXR1cm4iLCJzZXRXaG9zZXR1cm4iLCJjdXJyZW50Y29vcmRzIiwic2V0Q3VycmVudGNvb3JkcyIsInJlc2N1ZXMiLCJzZXRSZXNjdWVzIiwicmNkIiwic2V0UmNkIiwibW92ZXMiLCJzZXRNb3ZlcyIsInNuYXBzaG90Iiwic2V0U25hcHNob3QiLCJqb2tlaW5kZXgiLCJzZXRKb2tlaW5kZXgiLCJhbGxvd1Jld2luZCIsInNldEFsbG93UmV3aW5kIiwib3BwbmFtZSIsInNldE9wcG5hbWUiLCJjaGF0bXNncyIsInNldENoYXRtc2dzIiwicHJldlJlc2N1ZXMiLCJ1c2VQcmV2aW91cyIsInVzZUVmZmVjdCIsImluaXRpYWxpemVSb3V0aW5lIiwibXNnIiwicHJvY2Vzc0dhbWVNZXNzYWdlIiwic2Nyb2xsVG9Cb3R0b20iLCJteWF1ZGlvIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwicGxheSIsIm5ld2ppIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInJlcXVlc3RTeW5jRGF0YSIsImNsZWFySW50ZXJ2YWwiLCJmaXJzdFNxdWFyZUFycmF5IiwiaW5pdGlhbFNxdWFyZUFycmF5IiwicmVqb2luR2FtZSIsInN0YXJ0R2FtZSIsImpvaW5HYW1lIiwic3RhcnRPYnNlcnZpbmdHYW1lIiwibmV3U3luY3N0YW1wIiwiRGF0ZSIsIm5vdyIsInRlbXBQVGlsZXMiLCJ0ZW1wR1RpbGVzIiwidGVtcFRpbGVzIiwibGVuZ3RoIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzcGxpY2UiLCJzb3J0Iiwic2VuZCIsInR5cGUiLCJmdW5jIiwidGltZXN0YW1wIiwic2VuZGVyIiwicG5hbWUiLCJnbmFtZSIsInB1dEF0TW92ZVN0YXJ0IiwibWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiSlNPTiIsInBhcnNlIiwiZ2QiLCJidWlsZEdhbWVkYXRhRnJvbUFwaWRhdGEiLCJhcGlkYXRhIiwibmV3U25hcHNob3QiLCJzdHJpbmdpZnkiLCJuZXdDaGF0bXNncyIsImZyb20iLCJzZW5kbXNnIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3RHYW1lRGF0YSIsImhhbmRsZUJvYXJkU3F1YXJlQ2xpY2siLCJyaSIsImNpIiwibmV3U2VsZWN0aW9uIiwibmV3UmNkIiwibmV3U3F1YXJlQXJyYXkiLCJuZXdTcXVhcmVBcnJheVJvdyIsIm5ld1NxdWFyZUFycmF5Q2VsbCIsIm5ld1B0aWxlcyIsIm5ld0d0aWxlcyIsIm5ld0N1cnJlbnRjb29yZHMiLCJjb29yZCIsIlN0cmluZyIsImNjaSIsImluZGV4T2YiLCJ1c2VkYnkiLCJzZWxlY3RlZFRpbGUiLCJsZXR0ZXIiLCJuZXdEaXJlY3Rpb24iLCJoYW5kbGVSYWNrVGlsZUNsaWNrIiwidGlsZWluZGV4IiwibmV3cmFjayIsIm1vdmVmcm9tIiwibW92ZXRpbGUiLCJtb3ZldG8iLCJlbmRQbGF5ZXJzVHVybiIsImlzUGxheVZhbGlkIiwicGxheWluZm8iLCJnZXRQbGF5SW5mbyIsImludmFsaWR3b3JkcyIsImFsZXJ0Iiwiam9pbiIsInJlcGxhY2UiLCJ0b1VwcGVyQ2FzZSIsIm5ld1Jlc2N1ZXMiLCJlc2NhcGVoYXRjaGVzIiwiaSIsIm5ld1BsYXllclRpbGVzIiwibmV3VGlsZXMiLCJuZXdXaG9zZXR1cm4iLCJhbnlVbnVzZWRFc2NhcGVIYXRjaGVzIiwibmV3TW92ZSIsImJ5IiwibWFpbndvcmQiLCJleHRyYXdvcmRzIiwicG9zIiwibmV3TW92ZXMiLCJqc2VuZCIsIm1vdmUiLCJzd2FwUGxheWVyc1RpbGVzIiwid2luZG93IiwiTU9WRV9UWVBFX1NXQVAiLCJmaXJzdFdvcmQiLCJudW1tb3ZlcyIsIm1vdmVpbmRleCIsIm51bWNvb3JkcyIsImxvd3JvdyIsImhpZ2hyb3ciLCJsb3djb2wiLCJoaWdoY29sIiwidGVtcHJvdyIsInBhcnNlSW50Iiwic3BsaXQiLCJ0ZW1wY29sIiwicGxheXRocnUiLCJob29rbWFkZSIsInRlbXBjb29yZCIsIndvcmRzdGFydGNvb3JkIiwibnVtcm93cyIsIm51bWNvbHMiLCJyb3ciLCJjb2wiLCJsb3dlc3Ryb3ciLCJoaWdoZXN0cm93IiwibG93ZXN0Y29sIiwiaGlnaGVzdGNvbCIsImV4dHJhd29yZCIsInZhbGlkYXRlV29yZHMiLCJhbGx3b3JkcyIsImZvckVhY2giLCJldyIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImpkYXRhIiwianNvbiIsImFsbG93VW5kb0xhc3RUdXJuIiwicGVyZm9ybVJld2luZCIsInJlY2FsbFRpbGVzIiwicGxheWVyUGFzc1R1cm4iLCJNT1ZFX1RZUEVfUEFTUyIsImlzRG91YmxlUGFzcyIsImhhbmRsZUtleURvd24iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwia2V5IiwibGV0dGVydGVzdCIsIm1hdGNoIiwicmFjayIsImRpciIsIm5ld2MiLCJuZXdyIiwicmV0dXJuZWRUaWxlIiwiaGFuZGxlTW92ZUNsaWNrIiwiX21pIiwibWkiLCJ0aSIsIlBBUlRZX0lDT05fUFJJU09ORVJTIiwibWFwIiwidCIsIlBBUlRZX0lDT05fR1VBUkRTIiwiT2JzZXJ2ZXJSYWNrVGlsZSIsInByb3BzIiwic2VsZWN0ZWRVbnNlbGVjdGVkIiwidU5vdFUiLCJ0aWxldmFsdWUiLCJ0aWxlY2xhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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a0JBQWtCLEdBQUcsYUFBM0I7QUFDQSxRQUFNQyxLQUFLLEdBQUdGLEtBQUssQ0FBQ0csU0FBTixLQUFvQixHQUFwQixHQUEwQixJQUExQixHQUFpQyxFQUEvQztBQUNBLFFBQU1DLFNBQVMsR0FBRyxrQkFBa0JILGtCQUFsQixHQUF1Q0MsS0FBdkMsR0FBK0NGLEtBQUssQ0FBQ3hOLFdBQXZFO0FBQ0Esc0JBQ0k7QUFFSSxhQUFTLEVBQUU0TixTQUZmO0FBQUEsMkJBSUk7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQSxnQkFBbUNKLEtBQUssQ0FBQ0c7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKLEtBQ1NILEtBQUssQ0FBQzdGLFNBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBUUQsQ0FaRDs7TUFBTTRGLGdCO0FBZUosK0RBQWV6TixJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BiL3ByaXNvbmJyZWFrLjZkNWMzOWIzZWEyYTRkZGY5Y2I0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFBsYXllclNlY3Rpb24gZnJvbSAnLi4vcGIvcGxheWVyU2VjdGlvbic7XHJcbmltcG9ydCBCb2FyZCBmcm9tICcuLi9wYi9ib2FyZCc7XHJcbmltcG9ydCBTaG93VW5zZWVuVGlsZXMgZnJvbSAnLi4vcGIvdW5zZWVuVGlsZXNTZWN0aW9uJztcclxuaW1wb3J0IFNob3dNb3ZlcyBmcm9tICcuLi9wYi9tb3Zlc1NlY3Rpb24nO1xyXG5pbXBvcnQgU2hvd1Jlc2N1ZXMgZnJvbSAnLi4vcGIvcmVzY3Vlc1NlY3Rpb24nO1xyXG5pbXBvcnQgQ2hhdCBmcm9tICcuLi9wYi9jaGF0U2VjdGlvbic7XHJcbmltcG9ydCAqIGFzIGMgZnJvbSAnLi4vLi4vbGliL3BiL3ByaXNvbkJyZWFrQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgaW5pdGlhbFNxdWFyZUFycmF5IH0gZnJvbSAnLi4vLi4vbGliL3BiL2luaXRpYWxTcXVhcmVBcnJheSc7XHJcbmltcG9ydCB7IGFueVVudXNlZEVzY2FwZUhhdGNoZXMgfSBmcm9tIFwiLi4vLi4vbGliL3BiL2FueVVudXNlZEVzY2FwZUhhdGNoZXNcIjtcclxuaW1wb3J0IHsgYnVpbGRHYW1lZGF0YUZyb21BcGlkYXRhIH0gZnJvbSBcIi4uLy4uL2xpYi9wYi9idWlsZEdhbWVkYXRhRnJvbUFwaWRhdGFcIjtcclxuaW1wb3J0IHsgaXNEb3VibGVQYXNzIH0gZnJvbSBcIi4uLy4uL2xpYi9wYi9pc0RvdWJsZVBhc3NcIjtcclxuaW1wb3J0IHsgc2Nyb2xsVG9Cb3R0b20gfSBmcm9tIFwiLi4vLi4vbGliL3Njcm9sbFRvQm90dG9tXCI7XHJcbmltcG9ydCB7IHVzZVByZXZpb3VzIH0gZnJvbSBcIi4uLy4uL2xpYi91c2VQcmV2aW91c1wiO1xyXG5cclxuY29uc3QgR2FtZSA9ICh7aXNyZWpvaW5cclxuICAgICwgcGFydGljaXBhbnQgLy8gUHJpc29uZXJzLCBHdWFyZHMsIG9yIE9ic2VydmVyIChub3QgaW1wbGVtZW50ZWQpXHJcbiAgICAsIGdhbWVpZFxyXG4gICAgLCBuaWNrbmFtZVxyXG4gICAgLCB3c21lc3NhZ2VcclxuICAgICwgY2xpZW50XHJcbiAgICAsIHJhY2tzaXplPTQgLy8gT3B0aW9uIGZvciByYWNrIHNpemUgKGdpdmUgaXQgYSBkZWZhdWx0IGZvciBCdWlsZClcclxuICAgIH0pID0+IHtcclxuICAgIGNvbnN0IFtzeW5jc3RhbXAsIHNldFN5bmNzdGFtcF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBtaWRkbGUgPSByYWNrc2l6ZTsgLy8gTWlkZGxlIGVsZW1lbnQgaW4gcm93IG9yIGNvbHVtbiBhcnJheVxyXG4gICAgY29uc3QgZWRnZSA9IHJhY2tzaXplICogMjsgLy8gTGFzdCBlbGVtZW50IGluIHJvdyBvciBjb2x1bW4gYXJyYXlcclxuICAgIGNvbnN0IGluaXRpYWx0aWxlcyA9IHJhY2tzaXplID09PSA2ID8gYy5USUxFQkFHNiA6IHJhY2tzaXplID09PSA3ID8gYy5USUxFQkFHNyA6IHJhY2tzaXplID09PSA1ID8gYy5USUxFQkFHNSA6IGMuVElMRUJBRzQ7XHJcbiAgICBjb25zdCBbdGlsZXMsIHNldFRpbGVzXSA9IHVzZVN0YXRlKFsuLi5pbml0aWFsdGlsZXNdKTtcclxuICAgIGNvbnN0IFtwdGlsZXMsIHNldFB0aWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZ3RpbGVzLCBzZXRHdGlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NxdWFyZUFycmF5LCBzZXRTcXVhcmVBcnJheV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0aW9uLCBzZXRTZWxlY3Rpb25dID0gdXNlU3RhdGUoLTEpOyAvLyByZWxhdGl2ZSB0byByYWNrIG9mIHBsYXllciBtYWtpbmcgYSBwbGF5XHJcbiAgICBjb25zdCBbd2hvc2V0dXJuLCBzZXRXaG9zZXR1cm5dID0gdXNlU3RhdGUoYy5XSE9TRV9UVVJOX1BSSVNPTkVSUyk7IC8vIGdhbWUgc3RhcnRzIHdpdGggcHJpc29uZXJzIHBsYXlcclxuICAgIGNvbnN0IFtjdXJyZW50Y29vcmRzLCBzZXRDdXJyZW50Y29vcmRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtyZXNjdWVzLCBzZXRSZXNjdWVzXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3JjZCwgc2V0UmNkXSA9IHVzZVN0YXRlKFstMSwtMSxjLkRJUl9OT05FXSk7XHJcbiAgICBjb25zdCBbbW92ZXMsIHNldE1vdmVzXSA9IHVzZVN0YXRlKFtdKTsgLy8gbW92ZSBoaXN0b3J5LCBlYWNoIGVsZW1lbnQgaXMgdGhlIGFycmF5IGlzIGEganNvbiBvYmplY3Qgb2YgaW5mbyBhYm91dCB0aGUgbW92ZVxyXG4gICAgY29uc3QgW3NuYXBzaG90LCBzZXRTbmFwc2hvdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgIHNxdWFyZUFycmF5OiBbXSxcclxuICAgICAgcHRpbGVzOiBbXSxcclxuICAgICAgZ3RpbGVzOiBbXSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2pva2VpbmRleCwgc2V0Sm9rZWluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2FsbG93UmV3aW5kLCBzZXRBbGxvd1Jld2luZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbb3BwbmFtZSwgc2V0T3BwbmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbY2hhdG1zZ3MsIHNldENoYXRtc2dzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IHByZXZSZXNjdWVzID0gdXNlUHJldmlvdXMocmVzY3Vlcyk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyAvLyBUaGlzIGNvZGUgZXhlY3V0ZXMgdGhlIGZpcnN0IHRpbWUgR2FtZSBpcyB1c2VkIG9ubHlcclxuICAgICAgaW5pdGlhbGl6ZVJvdXRpbmUoKTtcclxuICAgIH0sIFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGxldCBtc2cgPSB3c21lc3NhZ2U7XHJcbiAgICAgIGlmIChtc2cgIT09ICcnKSBwcm9jZXNzR2FtZU1lc3NhZ2UobXNnKTsgICAgICBcclxuICAgIH0sW3dzbWVzc2FnZV0pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzY3JvbGxUb0JvdHRvbShcIlNjcm9sbGFibGVNb3Zlc1wiKTtcclxuICAgIH0sW21vdmVzXSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHNjcm9sbFRvQm90dG9tKFwiU2Nyb2xsYWJsZUNoYXRcIik7XHJcbiAgICB9LFtjaGF0bXNnc10pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAocmVzY3VlcyA+IHByZXZSZXNjdWVzKSB7XHJcbiAgICAgICAgICB2YXIgbXlhdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcbiAgICAgICAgICAvLyBPYnNlcnZlcnMgaGVhciB5aXBwZWVcclxuICAgICAgICAgIG15YXVkaW8uc3JjID0gcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMgPyBcImh0dHBzOi8vdGlsZXJ1bm5lci5naXRodWIuaW8vT25lR290QXdheS5tNGFcIiA6IFwiaHR0cHM6Ly90aWxlcnVubmVyLmdpdGh1Yi5pby95aXBwZWUubTRhXCI7XHJcbiAgICAgICAgICBteWF1ZGlvLnBsYXkoKTtcclxuICAgICAgfVxyXG4gICAgfSwgW3Jlc2N1ZXNdKTsgLy8gUGxheSBhIHNvdW5kIHdoZW4gYSByZXNjdWUgaXMgbWFkZVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgbGV0IG5ld2ppID0gam9rZWluZGV4ICsgMTtcclxuICAgICAgaWYgKG5ld2ppID49IGMuSk9LRV9BUlJBWS5sZW5ndGgpIHtcclxuICAgICAgICBuZXdqaSA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgc2V0Sm9rZWluZGV4KG5ld2ppKTtcclxuICAgIH0sIFt3aG9zZXR1cm5dKTsgLy8gd2FudCB1cCB0byBkYXRlIHZhbHVlIG9mIHdob3NldHVybiB0byBkZWNpZGUgd2hldGhlciB0byBhc2sgZm9yIGFuIHVwZGF0ZVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwYXJ0aWNpcGFudCAhPT0gd2hvc2V0dXJuICYmIHdob3NldHVybiAhPT0gYy5XSE9TRV9UVVJOX0dBTUVPVkVSKSB7XHJcbiAgICAgICAgICByZXF1ZXN0U3luY0RhdGEoKTsgLy8gU2VuZCBhIHJlcXVlc3QgZm9yIHN5bmMgZGF0YSB3aGVuIHdhaXRpbmcgZm9yIHRoZWlyIG1vdmVcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU2VuZCBhIHJlcXVlc3QgZm9yIHRoZSB0aW1lc3RhbXAgb2YgdGhlIGxhc3QgZXZlbnQgKHN5bmNzdGFtcClcclxuICAgICAgICAvLyBTZXJ2ZXIgd2lsbCBzZW5kIGZ1bmM9cHJvdmlkZXN5bmNzdGFtcCB3aXRoIGEgc3luY3N0YW1wIHZhbHVlXHJcbiAgICAgICAgLy8gUHJvY2Vzc0dhbWVNZXNzYWdlIHdpbGwgY2hlY2sgc3luY3N0YW1wIGZyb20gdGhlIHNlcnZlciB0byBzeW5jc3RhbXAgaGVyZVxyXG4gICAgICAgIC8vIElmIGRpZmZlcmVudCBpdCB3aWxsIHNlbmQgZnVuYz1yZXF1ZXN0Z2FtZWRhdGEsIHNlcnZlciB3aWxsIHNlbmQgdXMgcHJvdmlkZWdhbWVkYXRhLCBhbmQgd2Ugc3luY1xyXG4gICAgICAgIH0sIGMuUElOR19JTlRFUlZBTCk7IC8vIHRoaXMgbWFueSBtaWxsaXNlY29uZHMgYmV0d2VlbiBhYm92ZSBjb2RlIGJsb2NrIGV4ZWN1dGlvbnNcclxuICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBpbml0aWFsaXplUm91dGluZSA9ICgpID0+IHtcclxuICAgICAgbGV0IGZpcnN0U3F1YXJlQXJyYXkgPSBpbml0aWFsU3F1YXJlQXJyYXkocmFja3NpemUpO1xyXG4gICAgICBzZXRTcXVhcmVBcnJheShmaXJzdFNxdWFyZUFycmF5KTtcclxuICAgICAgaWYgKGlzcmVqb2luKSB7XHJcbiAgICAgICAgcmVqb2luR2FtZSgpXHJcbiAgICAgIH0gZWxzZSBpZiAocGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMpIHtcclxuICAgICAgICBzdGFydEdhbWUoZmlyc3RTcXVhcmVBcnJheSk7IC8vIFByaXNvbmVycyBzdGFydGluZyB0aGUgZ2FtZVxyXG4gICAgICB9IGVsc2UgaWYgKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTKSB7XHJcbiAgICAgICAgam9pbkdhbWUoKTsgLy8gR3VhcmRzIGpvaW5pbmcgdGhlIGdhbWVcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGFydE9ic2VydmluZ0dhbWUoKTsgLy8gT2JzZXJ2ZXIgdmlld2luZyB0aGUgZ2FtZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzdGFydEdhbWUgPSAoZmlyc3RTcXVhcmVBcnJheSkgPT4ge1xyXG4gICAgICBsZXQgbmV3U3luY3N0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgbGV0IHRlbXBQVGlsZXMgPSBbXTtcclxuICAgICAgbGV0IHRlbXBHVGlsZXMgPSBbXTtcclxuICAgICAgbGV0IHRlbXBUaWxlcyA9IFsuLi5pbml0aWFsdGlsZXNdO1xyXG4gICAgICB3aGlsZSAodGVtcFBUaWxlcy5sZW5ndGggPCByYWNrc2l6ZSkge1xyXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVtcFRpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgdGVtcFBUaWxlcy5wdXNoKHRlbXBUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgdGVtcFRpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgICByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVtcFRpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgdGVtcEdUaWxlcy5wdXNoKHRlbXBUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgdGVtcFRpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgfVxyXG4gICAgICB0ZW1wUFRpbGVzLnNvcnQoKTtcclxuICAgICAgdGVtcEdUaWxlcy5zb3J0KCk7XHJcbiAgICAgIHNldFN5bmNzdGFtcChuZXdTeW5jc3RhbXApO1xyXG4gICAgICBzZXRHdGlsZXModGVtcEdUaWxlcyk7XHJcbiAgICAgIHNldFB0aWxlcyh0ZW1wUFRpbGVzKTtcclxuICAgICAgc2V0VGlsZXModGVtcFRpbGVzKTtcclxuICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgIHNxdWFyZUFycmF5OiBmaXJzdFNxdWFyZUFycmF5LFxyXG4gICAgICAgIHB0aWxlczogWy4uLnRlbXBQVGlsZXNdLFxyXG4gICAgICAgIGd0aWxlczogWy4uLnRlbXBHVGlsZXNdICAgIFxyXG4gICAgICB9KTtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLFxyXG4gICAgICAgICAgZnVuYzogXCJzdGFydGdhbWVcIixcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyBHYW1lIGlkXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ld1N5bmNzdGFtcCwgLy8gRm9yIHRlbGxpbmcgc2VydmVyIG15IGxhc3QgZGF0YSB0aW1lc3RhbXBcclxuICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gUmFjayBzaXplIG9wdGlvblxyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCwgLy8gVGhpcyB3aWxsIGJlIHByaXNvbmVycyBzaW5jZSBwcmlzb25lcnMgc3RhcnQgdGhlIGdhbWVcclxuICAgICAgICAgIHBuYW1lOiBuaWNrbmFtZSwgLy8gVGhpcyB3aWxsIGJlIHRoZSBwcmlzb25lcnMgbmlja25hbWUgc2luY2UgcHJpc29uZXJzIGFyZSBzZW5kaW5nIHRoaXNcclxuICAgICAgICAgIHRpbGVzOiB0ZW1wVGlsZXMsIC8vIFRpbGUgYmFnIGFmdGVyIGZpcnN0IHJhY2tzIHNlbGVjdGVkXHJcbiAgICAgICAgICBwdGlsZXM6IHRlbXBQVGlsZXMsIC8vIFByaXNvbmVycyBmaXJzdCByYWNrXHJcbiAgICAgICAgICBndGlsZXM6IHRlbXBHVGlsZXMgLy8gR3VhcmRzIGZpcnN0IHJhY2tcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBqb2luR2FtZSA9ICgpID0+IHtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIGduYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcImpvaW5nYW1lXCIsIC8vIGpvaW4gdGhlIGdhbWVcclxuICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQgLy8gdGhpcyB3aWxsIGViIGd1YXJkc1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlam9pbkdhbWUgPSAoKSA9PiB7XHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcInJlam9pbmdhbWVcIiwgLy8gam9pbiB0aGUgZ2FtZVxyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCAvLyBjb3VsZCBiZSBlaXRoZXIgcGxheWVyXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3RhcnRPYnNlcnZpbmdHYW1lID0gKCkgPT4ge1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICAgIHR5cGU6IFwicGJcIixcclxuICAgICAgICAgIGZ1bmM6IFwic3RhcnRPYnNlcnZpbmdcIlxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwdXRBdE1vdmVTdGFydCgpIHtcclxuICAgICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgICAgc2V0QWxsb3dSZXdpbmQoZmFsc2UpO1xyXG4gICAgICBzZXRSY2QoLTEsLTEsYy5ESVJfTk9ORSk7XHJcbiAgICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0dhbWVNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgbGV0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmdhbWVpZCA9PT0gZ2FtZWlkICYmIG1lc3NhZ2VEYXRhLnR5cGUgPT09IFwicGJcIikgeyAvLyBUaGlzIGluc3RhbmNlIG9mIGEgcHJpc29uIGJyZWFrIGdhbWVcclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJwcm92aWRlZ2FtZWRhdGFcIikge1xyXG4gICAgICAgICAgbGV0IGdkID0gYnVpbGRHYW1lZGF0YUZyb21BcGlkYXRhKG1lc3NhZ2VEYXRhLmFwaWRhdGEpO1xyXG4gICAgICAgICAgLy8gU2VydmVyIHByb3ZpZGluZyBnYW1lIGRhdGFcclxuICAgICAgICAgIHNldFN5bmNzdGFtcChnZC5zeW5jc3RhbXApO1xyXG4gICAgICAgICAgLy8gTm8gb3Bwb25lbnQgbmFtZSBmb3Igb2JzZXJ2ZXJzXHJcbiAgICAgICAgICBpZiAocGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMpIHtcclxuICAgICAgICAgICAgc2V0T3BwbmFtZShnZC5nbmFtZSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTKSB7XHJcbiAgICAgICAgICAgIHNldE9wcG5hbWUoZ2QucG5hbWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0VGlsZXMoZ2QudGlsZXMpO1xyXG4gICAgICAgICAgc2V0U3F1YXJlQXJyYXkoZ2Quc3F1YXJlQXJyYXkpO1xyXG4gICAgICAgICAgc2V0UHRpbGVzKGdkLnB0aWxlcyk7XHJcbiAgICAgICAgICBzZXRHdGlsZXMoZ2QuZ3RpbGVzKTtcclxuICAgICAgICAgIHNldFdob3NldHVybihnZC53aG9zZXR1cm4pO1xyXG4gICAgICAgICAgbGV0IG5ld1NuYXBzaG90ID0ge1xyXG4gICAgICAgICAgICBzcXVhcmVBcnJheTogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShnZC5zcXVhcmVBcnJheSkpLCAvLyBEZWVwIGNvcHlcclxuICAgICAgICAgICAgcHRpbGVzOiBbLi4uZ2QucHRpbGVzXSxcclxuICAgICAgICAgICAgZ3RpbGVzOiBbLi4uZ2QuZ3RpbGVzXVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHNldFNuYXBzaG90KG5ld1NuYXBzaG90KTtcclxuICAgICAgICAgIHNldE1vdmVzKGdkLm1vdmVzKTtcclxuICAgICAgICAgIHNldFJlc2N1ZXMoZ2QucmVzY3Vlcyk7XHJcbiAgICAgICAgICBzZXRBbGxvd1Jld2luZChnZC5hbGxvd1Jld2luZCk7XHJcbiAgICAgICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJwcm92aWRlZ25hbWVcIikge1xyXG4gICAgICAgICAgaWYgKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RJVExFX1BSSVNPTkVSUykge1xyXG4gICAgICAgICAgICBzZXRPcHBuYW1lKG1lc3NhZ2VEYXRhLmduYW1lKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiYWxsb3d1bmRvXCIpIHtcclxuICAgICAgICAgIC8vIE9wcG9uZW50IGNsaWNrZWQgYnV0dG9uIHRvIGFsbG93IHVuZG8gdHVyblxyXG4gICAgICAgICAgc2V0QWxsb3dSZXdpbmQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImNoYXRcIikgeyAvLyBTZXJ2ZXIgZGVjaWRlZCB3aGV0aGVyIHRoaXMgY2hhdCB3YXMgZm9yIG1lXHJcbiAgICAgICAgICBsZXQgbmV3Q2hhdG1zZ3MgPSBbLi4uY2hhdG1zZ3MsIHtmcm9tOiBtZXNzYWdlRGF0YS5uaWNrbmFtZSwgbXNnOiBtZXNzYWdlRGF0YS5zZW5kbXNnfV07XHJcbiAgICAgICAgICBzZXRDaGF0bXNncyhuZXdDaGF0bXNncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInByb3ZpZGVzeW5jZGF0YVwiKSB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgcHJvdmlkZXN5bmRhdGEgcGFzc2VkICR7bWVzc2FnZURhdGEuc3luY3N0YW1wfSBhbmQgSSBoYXZlICR7c3luY3N0YW1wfWApO1xyXG4gICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLnN5bmNzdGFtcCAhPT0gc3luY3N0YW1wKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBPdXQgb2Ygc3luYyAtIHJlcXVlc3RpbmcgbGF0ZXN0IGdhbWUgZGF0YWApO1xyXG4gICAgICAgICAgICByZXF1ZXN0R2FtZURhdGEoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQ2FsbGluZyBzZXRTZWxlY3Rpb24gKGZyb20gaGFuZGxlS2V5RG93bikgdGhlbiBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrIGRvZXMgbm90IGxldCBpdCByZWNvZ25pemUgc2VsZWN0aW9uIHdpdGggdGhlIG5ldyB2YWx1ZVxyXG4gICAgLy8gU28gSSBwYXNzIG5ld1NlbGVjdGlvbiB3aGVuIEkgd2FudCB0byBhbHNvIHNldCBpdCwgb3RoZXJ3aXNlIEkgcGFzcyAtMSB0byBpbnN0cnVjdCBpdCB0byB1c2UgY3VycmVudCB2YWx1ZSBvZiBzZWxlY3Rpb25cclxuICAgIC8vIEFsc28gcGFzc2luZyBuZXdSY2RcclxuICAgIGNvbnN0IGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2sgPSAocmksIGNpLCBuZXdTZWxlY3Rpb24sIG5ld1JjZCkgPT4ge1xyXG4gICAgICBsZXQgbmV3U3F1YXJlQXJyYXkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNxdWFyZUFycmF5KSk7IC8vIERlZXAgY29weVxyXG4gICAgICBsZXQgbmV3U3F1YXJlQXJyYXlSb3cgPSBbLi4ubmV3U3F1YXJlQXJyYXlbcmldXTsgLy8gVGhlIHJvdyBvZiBzcXVhcmVzIHRoZXkgY2xpY2tlZCBvblxyXG4gICAgICBsZXQgbmV3U3F1YXJlQXJyYXlDZWxsID0gbmV3U3F1YXJlQXJyYXlSb3dbY2ldOyAvLyBUaGUgc3F1YXJlIGluIHRoZSByb3cgdGhleSBjbGlja2VkIG9uXHJcbiAgICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgICBsZXQgbmV3Q3VycmVudGNvb3JkcyA9IFsuLi5jdXJyZW50Y29vcmRzXTtcclxuICAgICAgbGV0IGNvb3JkID0gU3RyaW5nKHJpKSArIFwiLVwiICsgU3RyaW5nKGNpKTtcclxuICAgICAgbGV0IGNjaSA9IGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCk7XHJcbiAgICAgIGlmIChuZXdTZWxlY3Rpb24gPT09IC0xKSB7XHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gc2VsZWN0aW9uO1xyXG4gICAgICAgIG5ld1JjZCA9IHJjZDtcclxuICAgICAgfVxyXG4gICAgICBpZiAobmV3U2VsZWN0aW9uID4gLTEgJiYgbmV3U3F1YXJlQXJyYXlDZWxsLnVzZWRieSA9PT0gYy5VU0VEX0JZX05PTkUpIHsgLy8gdGlsZSBpcyBzZWxlY3RlZCBmcm9tIHJhY2sgYW5kIGNsaWNrZWQgc3F1YXJlIGlzIG5vdCB1c2VkIHlldFxyXG4gICAgICAgIGxldCBzZWxlY3RlZFRpbGUgPSB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMgPyBuZXdQdGlsZXNbbmV3U2VsZWN0aW9uXSA6IG5ld0d0aWxlc1tuZXdTZWxlY3Rpb25dO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Q2VsbC5sZXR0ZXIgPSBzZWxlY3RlZFRpbGU7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlDZWxsLnVzZWRieSA9IHdob3NldHVybjtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheVJvd1tjaV0gPSBuZXdTcXVhcmVBcnJheUNlbGw7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlbcmldID0gWy4uLm5ld1NxdWFyZUFycmF5Um93XTtcclxuICAgICAgICB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlNcclxuICAgICAgICAgID8gbmV3UHRpbGVzLnNwbGljZShuZXdTZWxlY3Rpb24sIDEpXHJcbiAgICAgICAgICA6IG5ld0d0aWxlcy5zcGxpY2UobmV3U2VsZWN0aW9uLCAxKTtcclxuICAgICAgICBpZiAod2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTICYmIG5ld1NlbGVjdGlvbiA9PT0gbmV3UHRpbGVzLmxlbmd0aCkgeyBcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbiAtIDFcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX0dVQVJEUyAmJiBuZXdTZWxlY3Rpb24gPT09IG5ld0d0aWxlcy5sZW5ndGgpIHsgXHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdTZWxlY3Rpb24gLSAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24pO1xyXG4gICAgICAgIHNldFNxdWFyZUFycmF5KG5ld1NxdWFyZUFycmF5KTtcclxuICAgICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKFsuLi5jdXJyZW50Y29vcmRzLCBjb29yZF0pO1xyXG4gICAgICAgIHNldFJjZChuZXdSY2QpOyAvLyBrZXkgZG93biBoYW5kbGVyIGZpZ3VyZWQgaXQgb3V0XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjY2kgPiAtMSkgeyAvLyBjbGlja2VkIHNxdWFyZSBoYXMgYSB0aWxlIG9uIGl0IGZyb20gdGhlIGN1cnJlbnQgbW92ZSBpbiBwcm9ncmVzcywgc28gcHV0IGl0IGJhY2sgb24gdGhlIHBsYXllciByYWNrXHJcbiAgICAgICAgd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTXHJcbiAgICAgICAgICA/IG5ld1B0aWxlcy5wdXNoKG5ld1NxdWFyZUFycmF5Q2VsbC5sZXR0ZXIpXHJcbiAgICAgICAgICA6IG5ld0d0aWxlcy5wdXNoKG5ld1NxdWFyZUFycmF5Q2VsbC5sZXR0ZXIpO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Q2VsbC51c2VkYnkgPSBjLlVTRURfQllfTk9ORTtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheUNlbGwubGV0dGVyID0gYy5MRVRURVJfTk9ORTtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheVJvd1tjaV0gPSBuZXdTcXVhcmVBcnJheUNlbGw7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlbcmldID0gWy4uLm5ld1NxdWFyZUFycmF5Um93XTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24oXHJcbiAgICAgICAgICB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMgPyBuZXdQdGlsZXMubGVuZ3RoIC0gMSA6IG5ld0d0aWxlcy5sZW5ndGggLSAxXHJcbiAgICAgICAgKTtcclxuICAgICAgICBuZXdDdXJyZW50Y29vcmRzLnNwbGljZShjY2ksIDEpO1xyXG4gICAgICAgIHNldFNxdWFyZUFycmF5KG5ld1NxdWFyZUFycmF5KTtcclxuICAgICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKG5ld0N1cnJlbnRjb29yZHMpO1xyXG4gICAgICAgIHNldFJjZCgtMSwtMSxjLkRJUl9OT05FKTsgLy8gbWFrZSBwbGF5ZXIgY2xpY2sgYWdhaW4gdG8gc2V0IGRpcmVjdGlvblxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvLyBUaGV5IGRpZG4ndCBjbGljayBhIHNxdWFyZSB0byBwbGFjZSBhIHNlbGVjdGVkIHRpbGUgdGhlcmVcclxuICAgICAgLy8gVGhleSBkaWRuJ3QgY2xpY2sgYSBzcXVhcmUgdG8gcmVtb3ZlIGFuIGV4aXN0aW5nIHRpbGVcclxuICAgICAgaWYgKG5ld1NxdWFyZUFycmF5Q2VsbC51c2VkYnkgPT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgLy8gVGhlcmUgaXMgbm90aGluZyBvbiB0aGUgc3F1YXJlIHNvIHRoZXkgYXJlIHBpY2tpbmcgd2hlcmUgdG8gcGxhY2UgdGhlIG5leHQgdGlsZSB2aWEga2V5Ym9hcmRcclxuICAgICAgICBsZXQgbmV3RGlyZWN0aW9uID0gcmNkWzBdICE9PSByaSB8fCByY2RbMV0gIT09IGNpID8gYy5ESVJfUklHSFQgOiAvL2NsaWNrIG5ldyBzcXVhcmUsIHN0YXJ0IHdpdGggcmlnaHRcclxuICAgICAgICAgcmNkWzJdID09PSBjLkRJUl9SSUdIVCA/IGMuRElSX0RPV04gOiAvL2NsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIHJpZ2h0LCBjaGFuZ2UgdG8gZG93blxyXG4gICAgICAgICByY2RbMl0gPT09IGMuRElSX0RPV04gPyBjLkRJUl9OT05FIDogLy9jbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyBkb3duLCBjaGFuZ2UgdG8gbm8gZGlyZWN0aW9uXHJcbiAgICAgICAgIGMuRElSX1JJR0hUOyAvLyBjbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyBubyBkaXJlY3Rpb24sIGNoYW5nZSB0byByaWdodFxyXG4gICAgICAgIG5ld1JjZCA9IFtyaSxjaSxuZXdEaXJlY3Rpb25dO1xyXG4gICAgICAgIHNldFJjZChuZXdSY2QpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IGhhbmRsZVJhY2tUaWxlQ2xpY2sgPSAodGlsZWluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX09CU0VSVkVSKSB7cmV0dXJuO31cclxuICAgICAgLy8gSWYgbm8gdGlsZSBpcyBzZWxlY3RlZCBhbHJlYWR5IHRoZW4gc2V0IHRoZSBzZWxlY3Rpb25cclxuICAgICAgaWYgKHNlbGVjdGlvbiA9PT0gLTEpIHtcclxuICAgICAgICBzZXRTZWxlY3Rpb24odGlsZWluZGV4KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gSWYgdGhlIHNhbWUgdGlsZSBpcyBhbHJlYWR5IHNlbGVjdGVkIHRoZW4gdW5zZWxlY3RcclxuICAgICAgaWYgKHNlbGVjdGlvbiA9PT0gdGlsZWluZGV4KSB7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gQSB0aWxlIHdhcyBhbHJlYWR5IHNlbGVjdGVkIGFuZCB0aGV5IGNsaWNrZWQgYW5vdGhlciB0aWxlIC0gbW92ZSB0aGUgdGlsZVxyXG4gICAgICBsZXQgbmV3cmFjayA9IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gWy4uLnB0aWxlc10gOiBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IG1vdmVmcm9tID0gc2VsZWN0aW9uO1xyXG4gICAgICBsZXQgbW92ZXRpbGUgPSBuZXdyYWNrW21vdmVmcm9tXTtcclxuICAgICAgbGV0IG1vdmV0byA9IHRpbGVpbmRleDtcclxuICAgICAgbmV3cmFjay5zcGxpY2UobW92ZWZyb20sIDEpOyAvLyByZW1vdmUgdGlsZSBmcm9tIG9yaWdpbmFsIHNlbGVjdGVkIHBvc2l0aW9uXHJcbiAgICAgIG5ld3JhY2suc3BsaWNlKG1vdmV0bywwLG1vdmV0aWxlKTsgLy8gaW5zZXJ0IG1vdmVkIHRpbGUgYXQgdGhlIG5ld2x5IHNlbGVjdGVkIHBvc2l0aW9uXHJcbiAgICAgIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gc2V0UHRpbGVzKG5ld3JhY2spIDogc2V0R3RpbGVzKG5ld3JhY2spO1xyXG4gICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZW5kUGxheWVyc1R1cm4oKSB7XHJcbiAgICAgIGlmICghaXNQbGF5VmFsaWQoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgcGxheWluZm8gPSBhd2FpdCBnZXRQbGF5SW5mbygpO1xyXG4gICAgICBpZiAocGxheWluZm8uaW52YWxpZHdvcmRzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGFsZXJ0KGBJbnZhbGlkIGFjY29yZGluZyB0byBFTkFCTEUySyBsZXhpY29uOiAke3BsYXlpbmZvLmludmFsaWR3b3Jkcy5qb2luKCkucmVwbGFjZShcIi5cIixcIj9cIikudG9VcHBlckNhc2UoKX1gKTtcclxuICAgICAgICByZXR1cm47IC8vIERvIG5vdCBhcHBseSB0aGUgcGxheVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBuZXdSZXNjdWVzID0gcmVzY3VlcztcclxuICAgICAgaWYgKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTKSB7XHJcbiAgICAgICAgbGV0IGVzY2FwZWhhdGNoZXMgPSBbXHJcbiAgICAgICAgICBcIjAtMFwiLFxyXG4gICAgICAgICAgXCIwLVwiICsgbWlkZGxlLFxyXG4gICAgICAgICAgXCIwLVwiICsgZWRnZSxcclxuICAgICAgICAgIG1pZGRsZSsgXCItMFwiLFxyXG4gICAgICAgICAgbWlkZGxlICsgXCItXCIgKyBlZGdlLFxyXG4gICAgICAgICAgZWRnZSArIFwiLTBcIixcclxuICAgICAgICAgIGVkZ2UgKyBcIi1cIiArIG1pZGRsZSxcclxuICAgICAgICAgIGVkZ2UgKyBcIi1cIiArIGVkZ2VcclxuICAgICAgICBdOyAvLyBjb29yZHMgb2YgZXNjYXBlIGhhdGNoZXNcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRjb29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmIChlc2NhcGVoYXRjaGVzLmluZGV4T2YoY3VycmVudGNvb3Jkc1tpXSkgPiAtMSkge1xyXG4gICAgICAgICAgICBuZXdSZXNjdWVzID0gbmV3UmVzY3VlcyArIDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBuZXdQbGF5ZXJUaWxlcyA9IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gWy4uLnB0aWxlc10gOiBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgICAgd2hpbGUgKG5ld1BsYXllclRpbGVzLmxlbmd0aCA8IHJhY2tzaXplICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgbmV3UGxheWVyVGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIG5ld1BsYXllclRpbGVzLnNvcnQoKTtcclxuICAgICAgbGV0IG5ld1dob3NldHVybiA9IG5ld1BsYXllclRpbGVzLmxlbmd0aCA9PT0gMCA/IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUiA6IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gYy5XSE9TRV9UVVJOX0dVQVJEUyA6IGMuUEFSVFlfVFlQRV9QUklTT05FUlM7XHJcbiAgICAgIGlmICghYW55VW51c2VkRXNjYXBlSGF0Y2hlcyhzcXVhcmVBcnJheSkpIHtcclxuICAgICAgICBuZXdXaG9zZXR1cm4gPSBjLldIT1NFX1RVUk5fR0FNRU9WRVI7IC8vIE5vIGVzY2FwZSBoYXRjaGVzIGxlZnRcclxuICAgICAgfVxyXG4gICAgICBsZXQgbmV3TW92ZSA9IHtieTogcGFydGljaXBhbnQsIHR5cGU6IGMuTU9WRV9UWVBFX1BMQVksIG1haW53b3JkOiBwbGF5aW5mby5tYWlud29yZCwgZXh0cmF3b3JkczogcGxheWluZm8uZXh0cmF3b3JkcywgcG9zOiBwbGF5aW5mby5wb3N9O1xyXG4gICAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgICBsZXQgbmV3U3luY3N0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgc2V0U3luY3N0YW1wKG5ld1N5bmNzdGFtcCk7XHJcbiAgICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgICBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IHNldFB0aWxlcyhuZXdQbGF5ZXJUaWxlcykgOiBzZXRHdGlsZXMobmV3UGxheWVyVGlsZXMpO1xyXG4gICAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgICAgc2V0UmVzY3VlcyhuZXdSZXNjdWVzKTtcclxuICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgIHNxdWFyZUFycmF5OiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNxdWFyZUFycmF5KSksIC8vIERlZXAgY29weVxyXG4gICAgICAgIHB0aWxlczogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBbLi4ubmV3UGxheWVyVGlsZXNdIDogWy4uLnB0aWxlc10sXHJcbiAgICAgICAgZ3RpbGVzOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IFsuLi5ndGlsZXNdIDogWy4uLm5ld1BsYXllclRpbGVzXSxcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCBqc2VuZCA9IHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IFwiZXB0XCIgOiBcImVndFwiLCAvLyBlbmQgcHJpc29uZXJzIG9yIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgdGltZXN0YW1wOiBuZXdTeW5jc3RhbXAsIC8vIGZvciBkYXRhIHN5bmMgbG9naWNcclxuICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LFxyXG4gICAgICAgIHB0aWxlczogbmV3UGxheWVyVGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4sIC8vIG1heSBoYXZlIGVuZGVkIHRoZSBnYW1lXHJcbiAgICAgICAgbW92ZTogbmV3TW92ZSwgLy8gdGhlIG1vdmUgdGhhdCB3YXMgbWFkZVxyXG4gICAgICAgIHJlc2N1ZXM6IG5ld1Jlc2N1ZXMgLy8gbWF5IGhhdmUgcmVzY3VlZCBhbm90aGVyIHByaXNvbmVyXHJcbiAgICAgIH07XHJcbiAgICAgIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8ganNlbmQucHRpbGVzID0gbmV3UGxheWVyVGlsZXMgOiBqc2VuZC5ndGlsZXMgPSBuZXdQbGF5ZXJUaWxlcztcclxuICAgICAgY2xpZW50LnNlbmQoanNlbmQpO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IHN3YXBQbGF5ZXJzVGlsZXMgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSkge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcIk5lZWQgXCIgKyByYWNrc2l6ZSArIFwiIHRpbGVzIGluIHRoZSBiYWcgdG8gZXhjaGFuZ2VcIilcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgbGV0IG5ld1BsYXllclRpbGVzID0gW107XHJcbiAgICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICAgIHdoaWxlIChuZXdQbGF5ZXJUaWxlcy5sZW5ndGggPCByYWNrc2l6ZSAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIG5ld1BsYXllclRpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgfVxyXG4gICAgICBuZXdQbGF5ZXJUaWxlcy5zb3J0KCk7XHJcbiAgICAgIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gbmV3VGlsZXMgPSBbLi4ubmV3VGlsZXMsIC4uLnNuYXBzaG90LnB0aWxlc10gOiBuZXdUaWxlcyA9IFsuLi5uZXdUaWxlcywgLi4uc25hcHNob3QuZ3RpbGVzXTtcclxuICAgICAgbmV3VGlsZXMuc29ydCgpO1xyXG4gICAgICBsZXQgbmV3TW92ZSA9IHtieTogcGFydGljaXBhbnQsIHR5cGU6IGMuTU9WRV9UWVBFX1NXQVB9O1xyXG4gICAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgICBsZXQgbmV3U3luY3N0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgc2V0U3luY3N0YW1wKG5ld1N5bmNzdGFtcCk7XHJcbiAgICAgIHNldFNxdWFyZUFycmF5KEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc25hcHNob3Quc3F1YXJlQXJyYXkpKSk7IC8vIERlZXAgY29weVxyXG4gICAgICBzZXRXaG9zZXR1cm4ocGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBjLldIT1NFX1RVUk5fR1VBUkRTIDogYy5XSE9TRV9UVVJOX1BSSVNPTkVSUyk7XHJcbiAgICAgIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gc2V0UHRpbGVzKG5ld1BsYXllclRpbGVzKSA6IHNldEd0aWxlcyhuZXdQbGF5ZXJUaWxlcyk7XHJcbiAgICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgc3F1YXJlQXJyYXk6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc25hcHNob3Quc3F1YXJlQXJyYXkpKSwgLy8gRGVlcCBjb3B5XHJcbiAgICAgICAgcHRpbGVzOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IFsuLi5uZXdQbGF5ZXJUaWxlc10gOiBbLi4ucHRpbGVzXSxcclxuICAgICAgICBndGlsZXM6IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gWy4uLmd0aWxlc10gOiBbLi4ubmV3UGxheWVyVGlsZXNdLFxyXG4gICAgICB9KTtcclxuICAgICAgbGV0IGpzZW5kID0ge1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gXCJlcHRcIiA6IFwiZWd0XCIsIC8vIGVuZCBwcmlzb25lcnMgb3IgZ3VhcmRzIHR1cm5cclxuICAgICAgICB0aW1lc3RhbXA6IG5ld1N5bmNzdGFtcCwgLy8gZm9yIGRhdGEgc3luYyBsb2dpY1xyXG4gICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsXHJcbiAgICAgICAgd2hvc2V0dXJuOiBjLldIT1NFX1RVUk5fR1VBUkRTLCAvLyBzd2FwIG5ldmVyIGVuZHMgdGhlIGdhbWUgc28gZ28gdG8gb3Bwb25lbnRcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICBtb3ZlOiBuZXdNb3ZlIC8vIHRoZSBtb3ZlIHRoYXQgd2FzIG1hZGVcclxuICAgICAgfTtcclxuICAgICAgcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBqc2VuZC5wdGlsZXMgPSBuZXdQbGF5ZXJUaWxlcyA6IGpzZW5kLmd0aWxlcyA9IG5ld1BsYXllclRpbGVzO1xyXG4gICAgICBjbGllbnQuc2VuZChqc2VuZCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGlzUGxheVZhbGlkKCkge1xyXG4gICAgICAvLyBDaGVjayBpZiB0aGlzIGlzIHRoZSBmaXJzdCB3b3JkIHNpbmNlIGl0IGFmZmVjdHMgdGhlIHZhbGlkaXR5IHJ1bGVzXHJcbiAgICAgIGxldCBmaXJzdFdvcmQgPSB0cnVlO1xyXG4gICAgICBsZXQgbnVtbW92ZXMgPSBtb3Zlcy5sZW5ndGg7XHJcbiAgICAgIGZvciAodmFyIG1vdmVpbmRleCA9IDA7IGZpcnN0V29yZCAmJiAobW92ZWluZGV4IDwgbnVtbW92ZXMpOyArK21vdmVpbmRleCkge1xyXG4gICAgICAgIGlmIChtb3Zlc1ttb3ZlaW5kZXhdLnR5cGUgPT09IGMuTU9WRV9UWVBFX1BMQVkpIHtcclxuICAgICAgICAgIGZpcnN0V29yZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBGaXJzdCB3b3JkIG11c3QgaGl0IGNlbnRlciBzcXVhcmVcclxuICAgICAgaWYgKGZpcnN0V29yZCAmJiBzcXVhcmVBcnJheVttaWRkbGVdW21pZGRsZV0udXNlZGJ5ID09PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcIkZpcnN0IHBsYXkgbXVzdCBoaXQgY2VudGVyIHNxdWFyZVwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgLy8gQXQgbGVhc3QgMSB0aWxlIG11c3QgYmUgcGxheWVkXHJcbiAgICAgIGlmIChjdXJyZW50Y29vcmRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcIllvdSBkaWRuJ3QgcGxheSBhbnkgdGlsZXNcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIEdvIHRocm91Z2ggZWFjaCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgICAgTWFrZSBzdXJlIGl0IGlzIG5vdCBpc29sYXRlZCBmcm9tIGFsbCB0aGUgb3RoZXIgdGlsZXNcclxuICAgICAgICAgIERldGVybWluZSB0aGUgbG93ZXN0IGFuZCBoaWdoZXN0IHJvdyBhbmQgY29sdW1uIG51bWJlcnMgb2YgdGlsZXMgcGxheWVkIHRoaXMgbW92ZVxyXG4gICAgICAqL1xyXG4gICAgICBsZXQgbnVtY29vcmRzID0gY3VycmVudGNvb3Jkcy5sZW5ndGg7XHJcbiAgICAgIGxldCBsb3dyb3cgPSBlZGdlKzE7XHJcbiAgICAgIGxldCBoaWdocm93ID0gLTE7XHJcbiAgICAgIGxldCBsb3djb2wgPSBlZGdlKzE7XHJcbiAgICAgIGxldCBoaWdoY29sID0gLTE7XHJcbiAgICAgIGZvciAodmFyIGNvb3JkPTA7IGNvb3JkIDwgbnVtY29vcmRzOyArK2Nvb3JkKSB7IC8vIEVhY2ggdGlsZSBwbGF5ZWQgdGhpcyBtb3ZlXHJcbiAgICAgICAgbGV0IHRlbXByb3cgPSBwYXJzZUludChjdXJyZW50Y29vcmRzW2Nvb3JkXS5zcGxpdChcIi1cIilbMF0pO1xyXG4gICAgICAgIGxldCB0ZW1wY29sID0gcGFyc2VJbnQoY3VycmVudGNvb3Jkc1tjb29yZF0uc3BsaXQoXCItXCIpWzFdKTtcclxuICAgICAgICBpZiAodGVtcHJvdyA8IGxvd3JvdykgeyBsb3dyb3cgPSB0ZW1wcm93O31cclxuICAgICAgICBpZiAodGVtcHJvdyA+IGhpZ2hyb3cpIHsgaGlnaHJvdyA9IHRlbXByb3c7fVxyXG4gICAgICAgIGlmICh0ZW1wY29sIDwgbG93Y29sKSB7IGxvd2NvbCA9IHRlbXBjb2w7fVxyXG4gICAgICAgIGlmICh0ZW1wY29sID4gaGlnaGNvbCkgeyBoaWdoY29sID0gdGVtcGNvbDt9XHJcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoZXJlIGlzIGFub3RoZXIgdGlsZSBpbW1lZGlhdGVseSBhYm92ZSwgYmVsb3csIGxlZnQsIG9yIHJpZ2h0IChub3QgaXNvbGF0ZWQpXHJcbiAgICAgICAgaWYgKCEodGVtcHJvdyA+IDAgJiYgc3F1YXJlQXJyYXlbdGVtcHJvdy0xXVt0ZW1wY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSAmJlxyXG4gICAgICAgICAgISh0ZW1wY29sID4gMCAmJiBzcXVhcmVBcnJheVt0ZW1wcm93XVt0ZW1wY29sLTFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpICYmXHJcbiAgICAgICAgICAhKHRlbXByb3cgPCBlZGdlICYmIHNxdWFyZUFycmF5W3RlbXByb3crMV1bdGVtcGNvbF0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgJiZcclxuICAgICAgICAgICEodGVtcGNvbCA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbdGVtcHJvd11bdGVtcGNvbCsxXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIkVhY2ggcGxheWVkIHRpbGUgbXVzdCBiZSBwYXJ0IG9mIGEgd29yZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIFVzaW5nIHRoZSBoaWdoIGFuZCBsb3cgdmFsdWVzLCBjaGVjayBpZiB0aGUgcGxheSBpcyBpbiBhIHN0cmFpZ2h0IGxpbmVcclxuICAgICAgaWYgKGxvd3JvdyAhPT0gaGlnaHJvdyAmJiBsb3djb2wgIT09IGhpZ2hjb2wpIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJUaWxlcyBwbGF5ZWQgbXVzdCBiZSBpbiBhIHN0cmFpZ2h0IGxpbmVcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBwbGF5dGhydSA9IGZhbHNlO1xyXG4gICAgICBsZXQgaG9va21hZGUgPSBmYWxzZTtcclxuICAgICAgLyogVHJhdmVyc2UgZnJvbSBmaXJzdCBwbGF5ZWQgdGlsZSB0byBsYXN0IHBsYXllciB0aWxlXHJcbiAgICAgICAgICBNYWtlIHN1cmUgdGhlcmUgYXJlIG5vIHVudXNlZCBzcXVhcmVzIGluYmV0d2VlbiAoZ2FwcyBpbiB0aGUgcGxheWVkIHdvcmQpXHJcbiAgICAgICAgICBDaGVjayBpZiB3ZSBwbGF5ZWQgdGhyb3VnaCBleGlzdGluZyB0aWxlc1xyXG4gICAgICAgICAgQ2hlY2sgaWYgd2UgaG9va2VkIGV4aXN0aW5nIHRpbGVzL3dvcmRzXHJcbiAgICAgICovXHJcbiAgICAgIGZvciAodmFyIHRlbXByb3cgPSBsb3dyb3c7IHRlbXByb3cgPD0gaGlnaHJvdzsgKyt0ZW1wcm93KSB7XHJcbiAgICAgICAgZm9yICh2YXIgdGVtcGNvbCA9IGxvd2NvbDsgdGVtcGNvbCA8PSBoaWdoY29sOyArK3RlbXBjb2wpIHtcclxuICAgICAgICAgIGlmIChzcXVhcmVBcnJheVt0ZW1wcm93XVt0ZW1wY29sXS51c2VkYnkgPT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIlRoZXJlIGlzIGEgZ2FwIGluIHlvdXIgd29yZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCFmaXJzdFdvcmQpIHsgLy8gUGxheSB0aHJvdWdoIGFuZCBob29rIG5vdCBwb3NzaWJsZSBvbiBmaXJzdCBtb3ZlXHJcbiAgICAgICAgICAgIGxldCB0ZW1wY29vcmQgPSB0ZW1wcm93ICsgXCItXCIgKyB0ZW1wY29sO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudGNvb3Jkcy5pbmRleE9mKHRlbXBjb29yZCkgPCAwKSB7IC8vIFRpbGUgd2FzIG5vdCBwbGF5ZWQgdGhpcyBtb3ZlICh3YXMgYWxyZWFkeSBvbiB0aGUgYm9hcmQpXHJcbiAgICAgICAgICAgICAgcGxheXRocnUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgdGVtcHJvdyA+IDAgJiYgc3F1YXJlQXJyYXlbdGVtcHJvdy0xXVt0ZW1wY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgICAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIHRlbXByb3cgPCBlZGdlICYmIHNxdWFyZUFycmF5W3RlbXByb3crMV1bdGVtcGNvbF0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiB0ZW1wY29sID4gMCAmJiBzcXVhcmVBcnJheVt0ZW1wcm93XVt0ZW1wY29sLTFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgdGVtcGNvbCA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbdGVtcHJvd11bdGVtcGNvbCsxXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfSAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghZmlyc3RXb3JkKSB7XHJcbiAgICAgICAgLy8gV2UgYWxyZWFkeSBmb3VuZCBwbGF5IHRocm91Z2ggYSB0aWxlIGJldHdlZW4gZmlyc3QgYW5kIGxhc3QgcGxheWVkIHRpbGVcclxuICAgICAgICAvLyBOb3cgY2hlY2sgaWYgcGxheWVkIHdvcmQgaGFzIGEgdGlsZSBiZWZvcmUgZmlyc3Qgb3IgYWZ0ZXIgbGFzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgbG93Y29sID4gMCAmJiBzcXVhcmVBcnJheVtsb3dyb3ddW2xvd2NvbC0xXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgaGlnaGNvbCA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbbG93cm93XVtoaWdoY29sKzFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBsb3dyb3cgPiAwICYmIHNxdWFyZUFycmF5W2xvd3Jvdy0xXVtsb3djb2xdICE9PSBjLlVTRURfQllfTk9ORSkgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGhpZ2hyb3cgPCBlZGdlICYmIHNxdWFyZUFycmF5W2hpZ2hyb3crMV1bbG93Y29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgICAgIC8vIE5vdyB3ZSBoYXZlIGZ1bGx5IGlkZW50aWZpZWQgcGxheSB0aHJvdWdoIHdlIGNhbiBtYWtlIHN1cmUgdGhleSBwbGF5ZWQgdGhyb3VnaCBvciBtYWRlIGEgaG9va1xyXG4gICAgICAgIC8vIFRoaXMgaW4gbWFuZGF0b3J5IHNpbmNlIGl0IGlzIG5vdCB0aGUgZmlyc3QgbW92ZVxyXG4gICAgICAgIGlmICghcGxheXRocnUgJiYgIWhvb2ttYWRlKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJOZXcgd29yZHMgbXVzdCBleHRlbmQgYW4gZXhpc3Rpbmcgd29yZCBhbmQvb3IgaG9vayBleGlzdGluZyB3b3JkcyBvciB0aWxlc1wiKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRQbGF5SW5mbygpIHtcclxuICAgICAgbGV0IHBsYXlpbmZvID0ge307XHJcbiAgICAgIGxldCBtYWlud29yZCA9IFwiXCI7XHJcbiAgICAgIGxldCBleHRyYXdvcmRzID0gW107XHJcbiAgICAgIGxldCB3b3Jkc3RhcnRjb29yZCA9IFwiXCI7XHJcbiAgICAgIGxldCBudW1yb3dzID0gZWRnZSsxO1xyXG4gICAgICBsZXQgbnVtY29scyA9IGVkZ2UrMTtcclxuICAgICAgbGV0IGxvd3JvdyA9IG51bXJvd3M7XHJcbiAgICAgIGxldCBoaWdocm93ID0gLTE7XHJcbiAgICAgIGxldCBsb3djb2wgPSBudW1jb2xzO1xyXG4gICAgICBsZXQgaGlnaGNvbCA9IC0xO1xyXG4gICAgICBsZXQgbnVtY29vcmRzID0gY3VycmVudGNvb3Jkcy5sZW5ndGg7XHJcbiAgICAgIGZvciAodmFyIGNvb3JkPTA7IGNvb3JkIDwgbnVtY29vcmRzOyArK2Nvb3JkKSB7XHJcbiAgICAgICAgbGV0IHJvdyA9IHBhcnNlSW50KGN1cnJlbnRjb29yZHNbY29vcmRdLnNwbGl0KFwiLVwiKVswXSk7XHJcbiAgICAgICAgbGV0IGNvbCA9IHBhcnNlSW50KGN1cnJlbnRjb29yZHNbY29vcmRdLnNwbGl0KFwiLVwiKVsxXSk7XHJcbiAgICAgICAgaWYgKHJvdyA8IGxvd3Jvdykge1xyXG4gICAgICAgICAgbG93cm93ID0gcm93O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocm93ID4gaGlnaHJvdykge1xyXG4gICAgICAgICAgaGlnaHJvdyA9IHJvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbCA8IGxvd2NvbCkge1xyXG4gICAgICAgICAgbG93Y29sID0gY29sO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sID4gaGlnaGNvbCkge1xyXG4gICAgICAgICAgaGlnaGNvbCA9IGNvbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGxvd3JvdyA8IGhpZ2hyb3cgfHwgbnVtY29vcmRzID09PSAxKSB7IC8vIHRpbGVzIHBsYWNlZCBvbiBkaWZmZXJlbmNlIHJvd3Mgc28gcGxheSBpcyB2ZXJ0aWNhbCwgb3Igc2luZ2xlIHRpbGUgcGxheWVkXHJcbiAgICAgICAgbGV0IGNvbCA9IGxvd2NvbDsgLy8gbG93Y29sIGFuZCBoaWdoY29sIHdpbGwgaGF2ZSB0aGUgc2FtZSB2YWx1ZVxyXG4gICAgICAgIC8vIGZpbmQgdGhlIGxvd2VzdCByb3cgbnVtYmVyIG9mIHRoZSBtYWluIHdvcmQsIHdoaWNoIG1heSBiZSBsb3dlciB0aGFuIHRoYXQgb2YgdGhlIGZpcnN0IHBsYXllZCB0aWxlXHJcbiAgICAgICAgbGV0IGxvd2VzdHJvdyA9IGxvd3JvdztcclxuICAgICAgICB3aGlsZSAobG93ZXN0cm93ID4gMCAmJiBzcXVhcmVBcnJheVtsb3dlc3Ryb3ctMV1bY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICBsb3dlc3Ryb3cgPSBsb3dlc3Ryb3cgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmaW5kIHRoZSBoaWdoZXN0IHJvdyBudW1iZXIgb2YgdGhlIG1haW4gd29yZCwgd2hpY2ggbWF5IGJlIGhpZ2hlciB0aGFuIHRoYXQgb2YgdGhlIGxhc3QgcGxheWVkIHRpbGVcclxuICAgICAgICBsZXQgaGlnaGVzdHJvdyA9IGhpZ2hyb3c7XHJcbiAgICAgICAgd2hpbGUgKGhpZ2hlc3Ryb3cgPCBlZGdlICYmIHNxdWFyZUFycmF5W2hpZ2hlc3Ryb3crMV1bY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICBoaWdoZXN0cm93ID0gaGlnaGVzdHJvdyArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdvcmRzdGFydGNvb3JkID0gYy5CT0FSRF9DT0xfSEVBREVSU1tjb2xdICsgYy5CT0FSRF9ST1dfSEVBREVSU1tsb3dlc3Ryb3ddOyAvLyB2ZXJ0aWNhbCBwbGF5IGNvb3JkcyBzdGFydCB3aXRoIGNvbCBoZWFkZXJcclxuICAgICAgICBmb3IgKHZhciByb3cgPSBsb3dlc3Ryb3c7IHJvdyA8PSBoaWdoZXN0cm93OyArK3Jvdykge1xyXG4gICAgICAgICAgbWFpbndvcmQgPSBtYWlud29yZCArIHNxdWFyZUFycmF5W3Jvd11bY29sXS5sZXR0ZXI7XHJcbiAgICAgICAgICBsZXQgY29vcmQgPSByb3cgKyBcIi1cIiArIGNvbDtcclxuICAgICAgICAgIGlmIChjdXJyZW50Y29vcmRzLmluZGV4T2YoY29vcmQpID4gLTEpIHsgLy8gVGhpcyB0aWxlIHdhcyBwbGF5ZWQsIGNoZWNrIGZvciBob29rc1xyXG4gICAgICAgICAgICBsZXQgbG93ZXN0Y29sID0gY29sO1xyXG4gICAgICAgICAgICB3aGlsZSAobG93ZXN0Y29sID4gMCAmJiBzcXVhcmVBcnJheVtyb3ddW2xvd2VzdGNvbC0xXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICAgICAgbG93ZXN0Y29sID0gbG93ZXN0Y29sIC0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgaGlnaGVzdGNvbCA9IGNvbDtcclxuICAgICAgICAgICAgd2hpbGUgKGhpZ2hlc3Rjb2wgPCBlZGdlICYmIHNxdWFyZUFycmF5W3Jvd11baGlnaGVzdGNvbCsxXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICAgICAgaGlnaGVzdGNvbCA9IGhpZ2hlc3Rjb2wgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChsb3dlc3Rjb2wgPCBoaWdoZXN0Y29sKSB7IC8vIGhvb2sgd2FzIG1hZGVcclxuICAgICAgICAgICAgICBsZXQgZXh0cmF3b3JkID0gXCJcIjtcclxuICAgICAgICAgICAgICBmb3IgKHZhciB0ZW1wY29sID0gbG93ZXN0Y29sOyB0ZW1wY29sIDw9IGhpZ2hlc3Rjb2w7ICsrdGVtcGNvbCkge1xyXG4gICAgICAgICAgICAgICAgZXh0cmF3b3JkID0gZXh0cmF3b3JkICsgc3F1YXJlQXJyYXlbcm93XVt0ZW1wY29sXS5sZXR0ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGV4dHJhd29yZHMgPSBbLi4uZXh0cmF3b3JkcywgZXh0cmF3b3JkXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFpbndvcmQubGVuZ3RoIDwgMikgeyAvLyBIb3Jpem9udGFsIHBsYXkgb3Igc2luZ2xlIHRpbGUgZHJvcCB0aGF0IGNhbm5vdCBiZSBhIHZlcnRpY2FsIHBsYXlcclxuICAgICAgICBsZXQgcm93ID0gbG93cm93OyAvLyBsb3dyb3cgYW5kIGhpZ2hyb3cgd2lsbCBoYXZlIHRoZSBzYW1lIHZhbHVlXHJcbiAgICAgICAgLy8gZmluZCB0aGUgbG93ZXN0IGNvbCBudW1iZXIgb2YgdGhlIG1haW4gd29yZCwgd2hpY2ggbWF5IGJlIGxvd2VyIHRoYW4gdGhhdCBvZiB0aGUgZmlyc3QgcGxheWVkIHRpbGVcclxuICAgICAgICBsZXQgbG93ZXN0Y29sID0gbG93Y29sO1xyXG4gICAgICAgIHdoaWxlIChsb3dlc3Rjb2wgPiAwICYmIHNxdWFyZUFycmF5W3Jvd11bbG93ZXN0Y29sLTFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgIGxvd2VzdGNvbCA9IGxvd2VzdGNvbCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZpbmQgdGhlIGhpZ2hlc3QgY29sIG51bWJlciBvZiB0aGUgbWFpbiB3b3JkLCB3aGljaCBtYXkgYmUgaGlnaGVyIHRoYW4gdGhhdCBvZiB0aGUgbGFzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIGxldCBoaWdoZXN0Y29sID0gaGlnaGNvbDtcclxuICAgICAgICB3aGlsZSAoaGlnaGVzdGNvbCA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbcm93XVtoaWdoZXN0Y29sKzFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgIGhpZ2hlc3Rjb2wgPSBoaWdoZXN0Y29sICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd29yZHN0YXJ0Y29vcmQgPSBjLkJPQVJEX1JPV19IRUFERVJTW3Jvd10gKyBjLkJPQVJEX0NPTF9IRUFERVJTW2xvd2VzdGNvbF07IC8vIGhvcml6b250YWwgcGxheSBjb29yZHMgc3RhcnQgd2l0aCByb3cgaGVhZGVyXHJcbiAgICAgICAgbWFpbndvcmQgPSBcIlwiOyAvLyBJbiBjYXNlIHdlIGdvdCBhIDEgbGV0dGVyIG1haW53b3JkIGluIHRoZSBwcmV2aW91cyBibG9ja1xyXG4gICAgICAgIGV4dHJhd29yZHMgPSBbXTsgLy8gRGl0dG9cclxuICAgICAgICBmb3IgKHZhciBjb2wgPSBsb3dlc3Rjb2w7IGNvbCA8PSBoaWdoZXN0Y29sOyArK2NvbCkge1xyXG4gICAgICAgICAgbWFpbndvcmQgPSBtYWlud29yZCArIHNxdWFyZUFycmF5W3Jvd11bY29sXS5sZXR0ZXI7XHJcbiAgICAgICAgICBsZXQgY29vcmQgPSByb3cgKyBcIi1cIiArIGNvbDtcclxuICAgICAgICAgIGlmIChjdXJyZW50Y29vcmRzLmluZGV4T2YoY29vcmQpID4gLTEpIHsgLy8gVGhpcyB0aWxlIHdhcyBwbGF5ZWQsIGNoZWNrIGZvciBob29rc1xyXG4gICAgICAgICAgICBsZXQgbG93ZXN0cm93ID0gcm93O1xyXG4gICAgICAgICAgICB3aGlsZSAobG93ZXN0cm93ID4gMCAmJiBzcXVhcmVBcnJheVtsb3dlc3Ryb3ctMV1bY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICAgICAgbG93ZXN0cm93ID0gbG93ZXN0cm93IC0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgaGlnaGVzdHJvdyA9IHJvdztcclxuICAgICAgICAgICAgd2hpbGUgKGhpZ2hlc3Ryb3cgPCBlZGdlICYmIHNxdWFyZUFycmF5W2hpZ2hlc3Ryb3crMV1bY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICAgICAgaGlnaGVzdHJvdyA9IGhpZ2hlc3Ryb3cgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChsb3dlc3Ryb3cgPCBoaWdoZXN0cm93KSB7IC8vIGhvb2sgd2FzIG1hZGVcclxuICAgICAgICAgICAgICBsZXQgZXh0cmF3b3JkID0gXCJcIjtcclxuICAgICAgICAgICAgICBmb3IgKHZhciB0ZW1wcm93ID0gbG93ZXN0cm93OyB0ZW1wcm93IDw9IGhpZ2hlc3Ryb3c7ICsrdGVtcHJvdykge1xyXG4gICAgICAgICAgICAgICAgZXh0cmF3b3JkID0gZXh0cmF3b3JkICsgc3F1YXJlQXJyYXlbdGVtcHJvd11bY29sXS5sZXR0ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGV4dHJhd29yZHMgPSBbLi4uZXh0cmF3b3JkcywgZXh0cmF3b3JkXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsZXQgaW52YWxpZHdvcmRzID0gYXdhaXQgdmFsaWRhdGVXb3JkcyhtYWlud29yZCwgZXh0cmF3b3Jkcyk7XHJcbiAgICAgIHBsYXlpbmZvID0ge21haW53b3JkOiBtYWlud29yZCwgZXh0cmF3b3JkczogZXh0cmF3b3JkcywgcG9zOiB3b3Jkc3RhcnRjb29yZCwgaW52YWxpZHdvcmRzOiBpbnZhbGlkd29yZHN9O1xyXG4gICAgICByZXR1cm4gcGxheWluZm87XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVXb3JkcyhtYWlud29yZCwgZXh0cmF3b3Jkcykge1xyXG4gICAgICAvLyBCdWlsZCBjb21wbGV0ZSBsaXN0IG9mIG5ld2x5IGZvcm1lZCB3b3JkcyBmb3IgdmFsaWRhdGlvbiBhZ2FpbnN0IGxleGljb25cclxuICAgICAgbGV0IGFsbHdvcmRzID0gbWFpbndvcmQ7XHJcbiAgICAgIGV4dHJhd29yZHMuZm9yRWFjaCgoZXcpID0+IHtcclxuICAgICAgICBhbGx3b3JkcyA9IGFsbHdvcmRzICsgXCIsXCIgKyBldztcclxuICAgICAgfSlcclxuICAgICAgLy8gUSBjYW4gYmUgUSBvciBRVVxyXG4gICAgICBhbGx3b3JkcyA9IGFsbHdvcmRzLnJlcGxhY2UoXCJRXCIsIFwiUVU/XCIpO1xyXG4gICAgICBsZXQgdXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VOQUJMRTJLP3ZhbGlkYXRlPScgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20vRU5BQkxFMks/dmFsaWRhdGU9J1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGFsbHdvcmRzLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xyXG4gICAgICBjb25zdCBqZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGpkYXRhLmludmFsaWR3b3JkcztcclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIGFsbG93VW5kb0xhc3RUdXJuKCkge1xyXG4gICAgICBpZiAoIWFsbG93UmV3aW5kKSB7XHJcbiAgICAgICAgc2V0QWxsb3dSZXdpbmQodHJ1ZSk7XHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgICAgZnVuYzogXCJhbGxvd3VuZG9cIiwgLy8gYWxsb3cgdW5kbyBsYXN0IHR1cm5cclxuICAgICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCAvLyB3aG8gaXMgYWxsb3dpbmcgaXRcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBwZXJmb3JtUmV3aW5kKCkge1xyXG4gICAgICAvKiBTZW5kIHVuZG90dXJuIHRvIHNlcnZlciBhbmQgaXQgd2lsbCBzZW5kIHRoZSB1cGRhdGVkIGdhbWUgZGF0YSB0byBnYW1lIGNsaWVudHMsIGluY2x1ZGluZyB0aGlzIG9uZSAqL1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgZnVuYzogXCJ1bmRvdHVyblwiIC8vIHVuZG8gbGFzdCB0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgcmVjYWxsVGlsZXMgPSAoKSA9PiB7XHJcbiAgICAgIHNldFNxdWFyZUFycmF5KEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc25hcHNob3Quc3F1YXJlQXJyYXkpKSk7IC8vIERlZXAgY29weVxyXG4gICAgICBzZXRQdGlsZXMoWy4uLnNuYXBzaG90LnB0aWxlc10pO1xyXG4gICAgICBzZXRHdGlsZXMoWy4uLnNuYXBzaG90Lmd0aWxlc10pO1xyXG4gICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgICAgc2V0UmNkKFstMSwtMSxjLkRJUl9OT05FXSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgcGxheWVyUGFzc1R1cm4gPSAoKSA9PiB7XHJcbiAgICAgIGxldCBuZXdNb3ZlID0ge2J5OiBwYXJ0aWNpcGFudCwgdHlwZTogYy5NT1ZFX1RZUEVfUEFTU307XHJcbiAgICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICAgIGxldCBuZXdXaG9zZXR1cm4gPSBpc0RvdWJsZVBhc3MobmV3TW92ZXMpID8gYy5XSE9TRV9UVVJOX0dBTUVPVkVSIDogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBjLldIT1NFX1RVUk5fR1VBUkRTIDogYy5XSE9TRV9UVVJOX1BSSVNPTkVSUzsgLy8gSWYgYm90aCBwbGF5ZXJzIHBhc3MgdGhlbiBlbmQgdGhlIGdhbWVcclxuICAgICAgbGV0IG5ld1N5bmNzdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICAgIHJlY2FsbFRpbGVzKCk7IC8vIEluIGNhc2UgdGhleSBwdXQgc29tZSB0aWxlcyBvbiB0aGUgYm9hcmQgYmVmb3JlIGNsaWNraW5nIFBhc3NcclxuICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgc2V0U3luY3N0YW1wKG5ld1N5bmNzdGFtcCk7XHJcbiAgICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IFwiZXB0XCIgOiBcImVndFwiLCAvLyBlbmQgcHJpc29uZXJzIG9yIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ld1N5bmNzdGFtcCwgLy8gZm9yIGRhdGEgc3luYyBsb2dpY1xyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCwgLy8gd2hvIHBhc3NlZCB0aGVpciB0dXJuXHJcbiAgICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gZWl0aGVyIGl0IGlzIG5vdyBvcHBvbmVudHMgdHVybiBvciB0aGUgcGFzcyBlbmRlZCB0aGUgZ2FtZVxyXG4gICAgICAgICAgbW92ZTogbmV3TW92ZSAvLyB0aGUgbW92ZSB0aGF0IHdhcyBtYWRlXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcXVlc3RHYW1lRGF0YSA9ICgpID0+IHtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsXHJcbiAgICAgICAgICBmdW5jOiBcInJlcXVlc3RnYW1lZGF0YVwiLCAvLyByZXF1ZXN0IGdhbWUgZGF0YVxyXG4gICAgICAgICAgc3luY3N0YW1wOiBzeW5jc3RhbXAgLy8gc28gc2VydmVyIGNhbiBkZWNpZGUgd2hldGhlciBJIGFtIHVwIHRvIGRhdGVcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHJlcXVlc3RTeW5jRGF0YSA9ICgpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coYFNlbmQgcmVxdWVzdHN5bmNkYXRhICR7c3luY3N0YW1wfWApO1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgIGZ1bmM6IFwicmVxdWVzdHN5bmNkYXRhXCIgLy8gcmVxdWVzdCBzeW5jIGRhdGFcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKHBhcnRpY2lwYW50ICE9PSB3aG9zZXR1cm4pIHtyZXR1cm47fVxyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICBlbmRQbGF5ZXJzVHVybigpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgcmVjYWxsVGlsZXMoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGxldHRlcnRlc3QgPSAvXltBLVphLXpcXD9dJC87IC8vIHNpbmdsZSBsZXR0ZXIgb3IgcXVlc3Rpb24gbWFyayBrZXkgcHJlc3NlZFxyXG4gICAgICBpZiAoZXZlbnQua2V5Lm1hdGNoKGxldHRlcnRlc3QpKSB7XHJcbiAgICAgICAgbGV0IGxldHRlciA9IGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIGxldCByYWNrID0gd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTID8gcHRpbGVzIDogZ3RpbGVzO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3Rpb24gPSByYWNrLmluZGV4T2YobGV0dGVyKTtcclxuICAgICAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMSkge1xyXG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gcmFjay5pbmRleE9mKFwiP1wiKTsgLy8gVXNlIHRoZSBibGFuayBpZiB0aGV5IGhhdmUgb25lXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuZXdTZWxlY3Rpb24gPiAtMSkgeyAvLyBQcmVzc2VkIGxldHRlciBpcyBvbiB0aGUgcmFja1xyXG4gICAgICAgICAgbGV0IHJvdyA9IHJjZFswXTtcclxuICAgICAgICAgIGxldCBjb2wgPSByY2RbMV07XHJcbiAgICAgICAgICBsZXQgZGlyID0gcmNkWzJdO1xyXG4gICAgICAgICAgaWYgKHJvdyA+LTEgJiYgY29sID4gLTEgJiYgZGlyICE9PSBjLkRJUl9OT05FKSB7IC8vIHJvdywgY29sLCBkaXIgYXJlIHNldCB0byBhY2NlcHQga2V5c3Ryb2tlXHJcbiAgICAgICAgICAgIC8vIE5lZWQgdG8gZmlndXJlIG91dCBuZXh0IHNxYXVyZSB0byBhdXRvLXBsYWNlIGEgdGlsZVxyXG4gICAgICAgICAgICBsZXQgbmV3UmNkID0gcmNkO1xyXG4gICAgICAgICAgICBpZiAoZGlyID09PSBjLkRJUl9SSUdIVCkgeyAvLyBwbGF5aW5nIHJpZ2h0d2FyZHNcclxuICAgICAgICAgICAgICBsZXQgbmV3YyA9IC0xO1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIHRlbXBjb2wgPSBjb2wgKyAxOyB0ZW1wY29sIDwgZWRnZSArIDEgJiYgbmV3YyA9PT0gLTE7IHRlbXBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZUFycmF5W3Jvd11bdGVtcGNvbF0udXNlZGJ5ID09PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgICAgICAgICBuZXdjID0gdGVtcGNvbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKG5ld2MgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSY2QgPSBbLTEsLTEsYy5ESVJfTk9ORV07XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1JjZCA9IFtyb3csIG5ld2MsIGMuRElSX1JJR0hUXTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyb3csY29sLG5ld1NlbGVjdGlvbixuZXdSY2QpO1xyXG4gICAgICAgICAgICAgIHNldFNlbGVjdGlvbigtMSk7IC8vIHdoZW4gdGhleSBhcmUgdHlwaW5nIHRoZXkgYXJlIG5vdCBzZWxlY3RpbmcgcmFjayB0aWxlcyBieSBjbGlja2luZyB0aGVtIG9uIHRoZSByYWNrXHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkaXIgPT09IGMuRElSX0RPV04pIHsgLy8gcGxheWluZyBkb3dud2FyZHNcclxuICAgICAgICAgICAgICBsZXQgbmV3ciA9IC0xO1xyXG4gICAgICAgICAgICAgIGxldCBudW1yb3dzID0gKHJhY2tzaXplKjIpKzE7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgdGVtcHJvdyA9IHJvdyArIDE7IHRlbXByb3cgPCBudW1yb3dzICYmIG5ld3IgPT09IC0xOyB0ZW1wcm93KyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzcXVhcmVBcnJheVt0ZW1wcm93XVtjb2xdLnVzZWRieSA9PT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgICAgICAgbmV3ciA9IHRlbXByb3c7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChuZXdyID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgbmV3UmNkID0gWy0xLC0xLGMuRElSX05PTkVdO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSY2QgPSBbbmV3ciwgY29sLCBjLkRJUl9ET1dOXTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyb3csY29sLG5ld1NlbGVjdGlvbixuZXdSY2QpO1xyXG4gICAgICAgICAgICAgIHNldFNlbGVjdGlvbigtMSk7IC8vIHdoZW4gdGhleSBhcmUgdHlwaW5nIHRoZXkgYXJlIG5vdCBzZWxlY3RpbmcgcmFjayB0aWxlcyBieSBjbGlja2luZyB0aGVtIG9uIHRoZSByYWNrXHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkJhY2tzcGFjZVwiICYmIGN1cnJlbnRjb29yZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vIFNhbWUgYXMgY2xpY2tpbmcgb24gYSBwbGF5ZWQtdGhpcy1tb3ZlIHRpbGUgaW4gdGVybXMgb2YgcmV0dXJuaW5nIHRoZSB0aWxlIHRvIHRoZSByYWNrXHJcbiAgICAgICAgLy8gSG93ZXZlciB3ZSBhbHNvIHdhbnQgdG8gc2V0IHVwIHJjZCBzbyB0aGV5IGNhbiBwcmVzcyB0aGUga2V5IHRoZXkgbWVhbnQgYW5kIGNvbnRpbnVlXHJcbiAgICAgICAgbGV0IGNvb3JkID0gY3VycmVudGNvb3Jkc1tjdXJyZW50Y29vcmRzLmxlbmd0aCAtIDFdOyAvLyB0aWxlIHRvIHJldHVybiB0byByYWNrXHJcbiAgICAgICAgbGV0IHJvdyA9IHBhcnNlSW50KGNvb3JkLnNwbGl0KFwiLVwiKVswXSk7XHJcbiAgICAgICAgbGV0IGNvbCA9IHBhcnNlSW50KGNvb3JkLnNwbGl0KFwiLVwiKVsxXSk7XHJcbiAgICAgICAgbGV0IG5ld0N1cnJlbnRjb29yZHMgPSBbLi4uY3VycmVudGNvb3Jkc107XHJcbiAgICAgICAgbGV0IG5ld1B0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgICAgICBsZXQgbmV3U3F1YXJlQXJyYXkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNxdWFyZUFycmF5KSk7IC8vIERlZXAgY29weVxyXG4gICAgICAgIGxldCBuZXdTcXVhcmVBcnJheVJvdyA9IG5ld1NxdWFyZUFycmF5W3Jvd107XHJcbiAgICAgICAgbGV0IG5ld1NxdWFyZUFycmF5Q2VsbCA9IG5ld1NxdWFyZUFycmF5Um93W2NvbF07XHJcbiAgICAgICAgbGV0IG5ld1JjZCA9IFstMSwtMSxjLkRJUl9OT05FXTtcclxuICAgICAgICBsZXQgbmV3U2VsZWN0aW9uID0gc2VsZWN0aW9uO1xyXG4gICAgICAgIG5ld0N1cnJlbnRjb29yZHMuc3BsaWNlKGN1cnJlbnRjb29yZHMubGVuZ3RoLTEsMSk7XHJcbiAgICAgICAgbGV0IHJldHVybmVkVGlsZSA9IHNxdWFyZUFycmF5W3Jvd11bY29sXS5sZXR0ZXI7XHJcbiAgICAgICAgaWYgKHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX1BSSVNPTkVSUykge1xyXG4gICAgICAgICAgbmV3UHRpbGVzLnB1c2gocmV0dXJuZWRUaWxlKTtcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1B0aWxlcy5sZW5ndGgtMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmV3R3RpbGVzLnB1c2gocmV0dXJuZWRUaWxlKTtcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld0d0aWxlcy5sZW5ndGgtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlDZWxsLnVzZWRieSA9IGMuVVNFRF9CWV9OT05FO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Q2VsbC5sZXR0ZXIgPSBjLkxFVFRFUl9OT05FO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Um93W2NvbF0gPSBuZXdTcXVhcmVBcnJheUNlbGw7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlbcm93XSA9IFsuLi5uZXdTcXVhcmVBcnJheVJvd107XHJcbiAgICAgICAgbGV0IGRpciA9IHJjZFsyXTtcclxuICAgICAgICBpZiAoZGlyICE9PSBjLkRJUl9OT05FKSB7XHJcbiAgICAgICAgICAvLyBkaXJlY3Rpb24gd2FzIHNldCBzbyBrZWVwIGl0XHJcbiAgICAgICAgICBuZXdSY2QgPSBbcm93LGNvbCxkaXJdO1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IC0xOyAvLyBpZiB0aGV5IGJhY2tzcGFjZSBhbGwgdGhlIGxldHRlcnMgb2ZmIGxlYXZlIHJhY2sgdGlsZSB1bnNlbGVjdGVkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEN1cnJlbnRjb29yZHMobmV3Q3VycmVudGNvb3Jkcyk7XHJcbiAgICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgICAgc2V0U3F1YXJlQXJyYXkobmV3U3F1YXJlQXJyYXkpO1xyXG4gICAgICAgIHNldFJjZChuZXdSY2QpO1xyXG4gICAgICAgIHNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVNb3ZlQ2xpY2sgPSAoX21pKSA9PiB7fVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmlzb25icmVha1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1jb250YWluZXIgdzMtdGVhbCB0b3BCYXJIZWlnaHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1taWRkbGVcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm15SGVhZGluZ0ZvbnRcIj5Qcmlzb24gQnJlYWs8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktdG9wbGVmdCB3My1ibGFjayB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICBHYW1lIGlkOiB7Z2FtZWlkfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktYm90dG9tbGVmdCB3My1vcmFuZ2UgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgUHJpc29uZXJzOiB7XHJcbiAgICAgICAgICAgICAgcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBuaWNrbmFtZVxyXG4gICAgICAgICAgICAgIDogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMgPyBvcHBuYW1lXHJcbiAgICAgICAgICAgICAgOiAnU2VjcmV0J1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LXRvcHJpZ2h0IHczLWJsYWNrIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiLi4vLi4vXCJ9PlxyXG4gICAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT48L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWJvdHRvbXJpZ2h0IHczLW9yYW5nZSB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICBHdWFyZHM6IHtcclxuICAgICAgICAgICAgICBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IG9wcG5hbWVcclxuICAgICAgICAgICAgICA6IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTID8gbmlja25hbWVcclxuICAgICAgICAgICAgICA6ICdTZWNyZXQnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBiVGlsZUFuZE1vdmVzT3V0ZXJcIj5cclxuICAgICAgICAgICAgICA8U2hvd1Vuc2VlblRpbGVzXHJcbiAgICAgICAgICAgICAgICB0aWxlcz17dGlsZXN9XHJcbiAgICAgICAgICAgICAgICBvdGhlcnRpbGVzPXtcclxuICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBndGlsZXNcclxuICAgICAgICAgICAgICAgICAgOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUyA/IHB0aWxlc1xyXG4gICAgICAgICAgICAgICAgICA6IFtdfSAvLyBPYnNlcnZlcnMgc2VlIGJvdGggcmFja3Mgc28gbm90aGluZyB0byBleGNsdWRlIGZyb20gdGlsZWJhZyBhcyB1bnNlZW5cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFNob3dNb3ZlcyBtb3Zlcz17bW92ZXN9IG9ubW92ZWNsaWNrPXsobWkpID0+IGhhbmRsZU1vdmVDbGljayhtaSl9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGJQbGF5ZXJPdXRlclNlY3Rpb25cIj5cclxuICAgICAgICAgICAge3BhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID9cclxuICAgICAgICAgICAgICA8UGxheWVyU2VjdGlvblxyXG4gICAgICAgICAgICAgICAgcmFja3RpbGVzPXtwdGlsZXN9XHJcbiAgICAgICAgICAgICAgICB3aG9zZXR1cm49e3dob3NldHVybn1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KHRpKSA9PiBoYW5kbGVSYWNrVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tGaW5pc2hUdXJuPXsoKSA9PiBlbmRQbGF5ZXJzVHVybigpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1RpbGVSZWNhbGw9eygpID0+IHJlY2FsbFRpbGVzKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrVGlsZUV4Y2hhbmdlPXsoKSA9PiBzd2FwUGxheWVyc1RpbGVzKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrUGFzc1BsYXk9eygpID0+IHBsYXllclBhc3NUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrVW5kb0xhc3RQbGF5PXsoKSA9PiBwZXJmb3JtUmV3aW5kKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrQWxsb3dVbmRvPXsoKSA9PiBhbGxvd1VuZG9MYXN0VHVybigpfVxyXG4gICAgICAgICAgICAgICAgcGFydGljaXBhbnQ9e3BhcnRpY2lwYW50fVxyXG4gICAgICAgICAgICAgICAgbW92ZXM9e21vdmVzfVxyXG4gICAgICAgICAgICAgICAgYWxsb3dSZXdpbmQ9e2FsbG93UmV3aW5kfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDpwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUyA/XHJcbiAgICAgICAgICAgICAgPFBsYXllclNlY3Rpb25cclxuICAgICAgICAgICAgICAgIHJhY2t0aWxlcz17Z3RpbGVzfVxyXG4gICAgICAgICAgICAgICAgd2hvc2V0dXJuPXt3aG9zZXR1cm59XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb249e3NlbGVjdGlvbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyh0aSkgPT4gaGFuZGxlUmFja1RpbGVDbGljayh0aSl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrRmluaXNoVHVybj17KCkgPT4gZW5kUGxheWVyc1R1cm4oKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tUaWxlUmVjYWxsPXsoKSA9PiByZWNhbGxUaWxlcygpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1RpbGVFeGNoYW5nZT17KCkgPT4gc3dhcFBsYXllcnNUaWxlcygpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1Bhc3NQbGF5PXsoKSA9PiBwbGF5ZXJQYXNzVHVybigpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1VuZG9MYXN0UGxheT17KCkgPT4gcGVyZm9ybVJld2luZCgpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja0FsbG93VW5kbz17KCkgPT4gYWxsb3dVbmRvTGFzdFR1cm4oKX1cclxuICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50PXtwYXJ0aWNpcGFudH1cclxuICAgICAgICAgICAgICAgIG1vdmVzPXttb3Zlc31cclxuICAgICAgICAgICAgICAgIGFsbG93UmV3aW5kPXthbGxvd1Jld2luZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlBsYXllcklubmVyU2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlBsYXllclRpdGxlXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57Yy5QQVJUWV9JQ09OX1BSSVNPTkVSU308L2k+Jm5ic3A7e2MuUEFSVFlfVElUTEVfUFJJU09ORVJTfSZuYnNwOzxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+e2MuUEFSVFlfSUNPTl9QUklTT05FUlN9PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVyYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtwdGlsZXMgJiYgcHRpbGVzLm1hcCgodCwgdGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T2JzZXJ2ZXJSYWNrVGlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YE9ic2VydmVyUHJpc29uZXJzUmFja1RpbGUke3RpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnQ9J1AnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZXZhbHVlPXt0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVpbmRleD17dGl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUGxheWVyVGl0bGVcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntjLlBBUlRZX0lDT05fR1VBUkRTfTwvaT4mbmJzcDt7Yy5QQVJUWV9USVRMRV9HVUFSRFN9Jm5ic3A7PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57Yy5QQVJUWV9JQ09OX0dVQVJEU308L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAge2d0aWxlcyAmJiBndGlsZXMubWFwKCh0LCB0aSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxPYnNlcnZlclJhY2tUaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgT2JzZXJ2ZXJHdWFyZHNSYWNrVGlsZSR7dGl9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudD0nRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxldmFsdWU9e3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZWluZGV4PXt0aX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICB7cGFydGljaXBhbnQgPT09IHdob3NldHVybiA/XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBvbktleURvd25DYXB0dXJlPXtoYW5kbGVLZXlEb3dufT5cclxuICAgICAgICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICAgICAgICBzcXVhcmVBcnJheT17c3F1YXJlQXJyYXl9XHJcbiAgICAgICAgICAgICAgICAgIHJjZD17cmNkfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsocmksIGNpKSA9PiBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJpLCBjaSwgLTEsbnVsbCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICAgICAgICBzcXVhcmVBcnJheT17c3F1YXJlQXJyYXl9XHJcbiAgICAgICAgICAgICAgICAgIHJjZD17cmNkfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7fX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgPFNob3dSZXNjdWVzIHJlc2N1ZXM9e3Jlc2N1ZXN9IC8+XHJcbiAgICAgICAgICAgIDxDaGF0IGdhbWVpZD17Z2FtZWlkfSBjbGllbnQ9e2NsaWVudH0gbmlja25hbWU9e25pY2tuYW1lfSBtc2dzPXtjaGF0bXNnc30gc2V0TXNncz17c2V0Q2hhdG1zZ3N9IHBhcnRpY2lwYW50PXtwYXJ0aWNpcGFudH0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWNvbnRhaW5lciB3My10ZWFsIHRvcEJhckhlaWdodFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LW1pZGRsZSBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIHt3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUiA/XHJcbiAgICAgICAgICAgICAgPGgxPkdhbWUgT3ZlciE8L2gxPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgPHA+e2MuSk9LRV9BUlJBWVtqb2tlaW5kZXhdfTwvcD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuY29uc3QgT2JzZXJ2ZXJSYWNrVGlsZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkVW5zZWxlY3RlZCA9IFwiVW5zZWxlY3RlZCBcIjtcclxuICBjb25zdCB1Tm90VSA9IHByb3BzLnRpbGV2YWx1ZSA9PT0gXCJRXCIgPyBcInUgXCIgOiBcIlwiO1xyXG4gIGNvbnN0IHRpbGVjbGFzcyA9IFwicGJUaWxlT25SYWNrIFwiICsgc2VsZWN0ZWRVbnNlbGVjdGVkICsgdU5vdFUgKyBwcm9wcy5wYXJ0aWNpcGFudDtcclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgICBrZXk9e3Byb3BzLnRpbGVpbmRleH1cclxuICAgICAgICAgIGNsYXNzTmFtZT17dGlsZWNsYXNzfVxyXG4gICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZU9uUmFja1RleHRcIj57cHJvcHMudGlsZXZhbHVlfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBHYW1lOyJdLCJzb3VyY2VSb290IjoiIn0=