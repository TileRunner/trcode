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
    });
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
          lineNumber: 842,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 841,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-topleft w3-black topBarCorner commonFontFamily",
        children: ["Game id: ", gameid]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 844,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-bottomleft w3-orange topBarCorner commonFontFamily",
        children: ["Prisoners: ", participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? nickname : participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_GUARDS ? oppname : 'Secret']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 847,
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
              lineNumber: 856,
              columnNumber: 18
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 856,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 855,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 854,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-bottomright w3-orange topBarCorner commonFontFamily",
        children: ["Guards: ", participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_PRISONERS ? oppname : participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TYPE_GUARDS ? nickname : 'Secret']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 859,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 840,
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
          lineNumber: 869,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_movesSection__WEBPACK_IMPORTED_MODULE_6__.default, {
          moves: moves,
          onmoveclick: mi => handleMoveClick(mi)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 876,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 868,
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
          lineNumber: 880,
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
          lineNumber: 896,
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
              lineNumber: 913,
              columnNumber: 48
            }, undefined), "\xA0", _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TITLE_PRISONERS, "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_ICON_PRISONERS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 913,
              columnNumber: 143
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 913,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbTilerack",
            children: ptiles && ptiles.map((t, ti) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ObserverRackTile, {
              participant: "P",
              tilevalue: t,
              tileindex: ti
            }, `ObserverPrisonersRackTile${ti}`, false, {
              fileName: _jsxFileName,
              lineNumber: 916,
              columnNumber: 23
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 914,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbPlayerTitle",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_ICON_GUARDS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 924,
              columnNumber: 48
            }, undefined), "\xA0", _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_TITLE_GUARDS, "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.PARTY_ICON_GUARDS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 924,
              columnNumber: 137
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 924,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbTilerack",
            children: gtiles && gtiles.map((t, ti) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ObserverRackTile, {
              participant: "G",
              tilevalue: t,
              tileindex: ti
            }, `ObserverGuardsRackTile${ti}`, false, {
              fileName: _jsxFileName,
              lineNumber: 927,
              columnNumber: 23
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 925,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 912,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 878,
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
            lineNumber: 941,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 940,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_board__WEBPACK_IMPORTED_MODULE_4__.default, {
            squareArray: squareArray,
            rcd: rcd,
            onClick: () => {}
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 949,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 948,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 938,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_rescuesSection__WEBPACK_IMPORTED_MODULE_7__.default, {
          rescues: rescues
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 958,
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
          lineNumber: 959,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 957,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 867,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-display-container w3-teal topBarHeight",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-middle commonFontFamily",
        children: whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.WHOSE_TURN_GAMEOVER ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Game Over!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 965,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_9__.JOKE_ARRAY[jokeindex]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 967,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 963,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 962,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 839,
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
      lineNumber: 984,
      columnNumber: 11
    }, undefined)
  }, props.tileindex, false, {
    fileName: _jsxFileName,
    lineNumber: 980,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvZ2FtZS5qcyJdLCJuYW1lcyI6WyJHYW1lIiwiaXNyZWpvaW4iLCJwYXJ0aWNpcGFudCIsImdhbWVpZCIsIm5pY2tuYW1lIiwid3NtZXNzYWdlIiwiY2xpZW50IiwicmFja3NpemUiLCJzeW5jc3RhbXAiLCJzZXRTeW5jc3RhbXAiLCJ1c2VTdGF0ZSIsIm1pZGRsZSIsImVkZ2UiLCJpbml0aWFsdGlsZXMiLCJjIiwidGlsZXMiLCJzZXRUaWxlcyIsInB0aWxlcyIsInNldFB0aWxlcyIsImd0aWxlcyIsInNldEd0aWxlcyIsInNxdWFyZUFycmF5Iiwic2V0U3F1YXJlQXJyYXkiLCJzZWxlY3Rpb24iLCJzZXRTZWxlY3Rpb24iLCJ3aG9zZXR1cm4iLCJzZXRXaG9zZXR1cm4iLCJjdXJyZW50Y29vcmRzIiwic2V0Q3VycmVudGNvb3JkcyIsInJlc2N1ZXMiLCJzZXRSZXNjdWVzIiwicmNkIiwic2V0UmNkIiwibW92ZXMiLCJzZXRNb3ZlcyIsInNuYXBzaG90Iiwic2V0U25hcHNob3QiLCJqb2tlaW5kZXgiLCJzZXRKb2tlaW5kZXgiLCJhbGxvd1Jld2luZCIsInNldEFsbG93UmV3aW5kIiwib3BwbmFtZSIsInNldE9wcG5hbWUiLCJjaGF0bXNncyIsInNldENoYXRtc2dzIiwicHJldlJlc2N1ZXMiLCJ1c2VQcmV2aW91cyIsInVzZUVmZmVjdCIsImluaXRpYWxpemVSb3V0aW5lIiwibXNnIiwicHJvY2Vzc0dhbWVNZXNzYWdlIiwic2Nyb2xsVG9Cb3R0b20iLCJteWF1ZGlvIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwicGxheSIsIm5ld2ppIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInJlcXVlc3RTeW5jRGF0YSIsImNsZWFySW50ZXJ2YWwiLCJmaXJzdFNxdWFyZUFycmF5IiwiaW5pdGlhbFNxdWFyZUFycmF5IiwicmVqb2luR2FtZSIsInN0YXJ0R2FtZSIsImpvaW5HYW1lIiwic3RhcnRPYnNlcnZpbmdHYW1lIiwibmV3U3luY3N0YW1wIiwiRGF0ZSIsIm5vdyIsInRlbXBQVGlsZXMiLCJ0ZW1wR1RpbGVzIiwidGVtcFRpbGVzIiwibGVuZ3RoIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzcGxpY2UiLCJzb3J0Iiwic2VuZCIsInR5cGUiLCJmdW5jIiwidGltZXN0YW1wIiwic2VuZGVyIiwicG5hbWUiLCJnbmFtZSIsInB1dEF0TW92ZVN0YXJ0IiwibWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiSlNPTiIsInBhcnNlIiwiZ2QiLCJidWlsZEdhbWVkYXRhRnJvbUFwaWRhdGEiLCJhcGlkYXRhIiwibmV3U25hcHNob3QiLCJzdHJpbmdpZnkiLCJuZXdDaGF0bXNncyIsImZyb20iLCJzZW5kbXNnIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3RHYW1lRGF0YSIsImhhbmRsZUJvYXJkU3F1YXJlQ2xpY2siLCJyaSIsImNpIiwibmV3U2VsZWN0aW9uIiwibmV3UmNkIiwibmV3U3F1YXJlQXJyYXkiLCJuZXdTcXVhcmVBcnJheVJvdyIsIm5ld1NxdWFyZUFycmF5Q2VsbCIsIm5ld1B0aWxlcyIsIm5ld0d0aWxlcyIsIm5ld0N1cnJlbnRjb29yZHMiLCJjb29yZCIsIlN0cmluZyIsImNjaSIsImluZGV4T2YiLCJ1c2VkYnkiLCJzZWxlY3RlZFRpbGUiLCJsZXR0ZXIiLCJuZXdEaXJlY3Rpb24iLCJoYW5kbGVSYWNrVGlsZUNsaWNrIiwidGlsZWluZGV4IiwibmV3cmFjayIsIm1vdmVmcm9tIiwibW92ZXRpbGUiLCJtb3ZldG8iLCJlbmRQbGF5ZXJzVHVybiIsImlzUGxheVZhbGlkIiwicGxheWluZm8iLCJnZXRQbGF5SW5mbyIsImludmFsaWR3b3JkcyIsImFsZXJ0Iiwiam9pbiIsInJlcGxhY2UiLCJ0b1VwcGVyQ2FzZSIsIm5ld1Jlc2N1ZXMiLCJlc2NhcGVoYXRjaGVzIiwiaSIsIm5ld1BsYXllclRpbGVzIiwibmV3VGlsZXMiLCJuZXdXaG9zZXR1cm4iLCJhbnlVbnVzZWRFc2NhcGVIYXRjaGVzIiwibmV3TW92ZSIsImJ5IiwibWFpbndvcmQiLCJleHRyYXdvcmRzIiwicG9zIiwibmV3TW92ZXMiLCJqc2VuZCIsIm1vdmUiLCJzd2FwUGxheWVyc1RpbGVzIiwid2luZG93IiwiTU9WRV9UWVBFX1NXQVAiLCJmaXJzdFdvcmQiLCJudW1tb3ZlcyIsIm1vdmVpbmRleCIsIm51bWNvb3JkcyIsImxvd3JvdyIsImhpZ2hyb3ciLCJsb3djb2wiLCJoaWdoY29sIiwidGVtcHJvdyIsInBhcnNlSW50Iiwic3BsaXQiLCJ0ZW1wY29sIiwicGxheXRocnUiLCJob29rbWFkZSIsInRlbXBjb29yZCIsIndvcmRzdGFydGNvb3JkIiwibnVtcm93cyIsIm51bWNvbHMiLCJyb3ciLCJjb2wiLCJsb3dlc3Ryb3ciLCJoaWdoZXN0cm93IiwibG93ZXN0Y29sIiwiaGlnaGVzdGNvbCIsImV4dHJhd29yZCIsInZhbGlkYXRlV29yZHMiLCJhbGx3b3JkcyIsImZvckVhY2giLCJldyIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImpkYXRhIiwianNvbiIsImFsbG93VW5kb0xhc3RUdXJuIiwicGVyZm9ybVJld2luZCIsInJlY2FsbFRpbGVzIiwicGxheWVyUGFzc1R1cm4iLCJNT1ZFX1RZUEVfUEFTUyIsImlzRG91YmxlUGFzcyIsImhhbmRsZUtleURvd24iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwia2V5IiwibGV0dGVydGVzdCIsIm1hdGNoIiwicmFjayIsImRpciIsIm5ld2MiLCJuZXdyIiwicmV0dXJuZWRUaWxlIiwiaGFuZGxlTW92ZUNsaWNrIiwiX21pIiwibWkiLCJ0aSIsIlBBUlRZX0lDT05fUFJJU09ORVJTIiwibWFwIiwidCIsIlBBUlRZX0lDT05fR1VBUkRTIiwiT2JzZXJ2ZXJSYWNrVGlsZSIsInByb3BzIiwic2VsZWN0ZWRVbnNlbGVjdGVkIiwidU5vdFUiLCJ0aWxldmFsdWUiLCJ0aWxlY2xhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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MUIsR0FBaUMsRUFBL0M7QUFDQSxRQUFNQyxTQUFTLEdBQUcsa0JBQWtCSCxrQkFBbEIsR0FBdUNDLEtBQXZDLEdBQStDRixLQUFLLENBQUN4TixXQUF2RTtBQUNBLHNCQUNJO0FBRUksYUFBUyxFQUFFNE4sU0FGZjtBQUFBLDJCQUlJO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsZ0JBQW1DSixLQUFLLENBQUNHO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSixLQUNTSCxLQUFLLENBQUM3RixTQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVFELENBWkQ7O01BQU00RixnQjtBQWVKLCtEQUFlek4sSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYi9wcmlzb25icmVhay5iYzM1MzhkZjgxNmY5N2E0YzEzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBQbGF5ZXJTZWN0aW9uIGZyb20gJy4uL3BiL3BsYXllclNlY3Rpb24nO1xyXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi4vcGIvYm9hcmQnO1xyXG5pbXBvcnQgU2hvd1Vuc2VlblRpbGVzIGZyb20gJy4uL3BiL3Vuc2VlblRpbGVzU2VjdGlvbic7XHJcbmltcG9ydCBTaG93TW92ZXMgZnJvbSAnLi4vcGIvbW92ZXNTZWN0aW9uJztcclxuaW1wb3J0IFNob3dSZXNjdWVzIGZyb20gJy4uL3BiL3Jlc2N1ZXNTZWN0aW9uJztcclxuaW1wb3J0IENoYXQgZnJvbSAnLi4vcGIvY2hhdFNlY3Rpb24nO1xyXG5pbXBvcnQgKiBhcyBjIGZyb20gJy4uLy4uL2xpYi9wYi9wcmlzb25CcmVha0NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGluaXRpYWxTcXVhcmVBcnJheSB9IGZyb20gJy4uLy4uL2xpYi9wYi9pbml0aWFsU3F1YXJlQXJyYXknO1xyXG5pbXBvcnQgeyBhbnlVbnVzZWRFc2NhcGVIYXRjaGVzIH0gZnJvbSBcIi4uLy4uL2xpYi9wYi9hbnlVbnVzZWRFc2NhcGVIYXRjaGVzXCI7XHJcbmltcG9ydCB7IGJ1aWxkR2FtZWRhdGFGcm9tQXBpZGF0YSB9IGZyb20gXCIuLi8uLi9saWIvcGIvYnVpbGRHYW1lZGF0YUZyb21BcGlkYXRhXCI7XHJcbmltcG9ydCB7IGlzRG91YmxlUGFzcyB9IGZyb20gXCIuLi8uLi9saWIvcGIvaXNEb3VibGVQYXNzXCI7XHJcbmltcG9ydCB7IHNjcm9sbFRvQm90dG9tIH0gZnJvbSBcIi4uLy4uL2xpYi9zY3JvbGxUb0JvdHRvbVwiO1xyXG5pbXBvcnQgeyB1c2VQcmV2aW91cyB9IGZyb20gXCIuLi8uLi9saWIvdXNlUHJldmlvdXNcIjtcclxuXHJcbmNvbnN0IEdhbWUgPSAoe2lzcmVqb2luXHJcbiAgICAsIHBhcnRpY2lwYW50IC8vIFByaXNvbmVycywgR3VhcmRzLCBvciBPYnNlcnZlciAobm90IGltcGxlbWVudGVkKVxyXG4gICAgLCBnYW1laWRcclxuICAgICwgbmlja25hbWVcclxuICAgICwgd3NtZXNzYWdlXHJcbiAgICAsIGNsaWVudFxyXG4gICAgLCByYWNrc2l6ZT00IC8vIE9wdGlvbiBmb3IgcmFjayBzaXplIChnaXZlIGl0IGEgZGVmYXVsdCBmb3IgQnVpbGQpXHJcbiAgICB9KSA9PiB7XHJcbiAgICBjb25zdCBbc3luY3N0YW1wLCBzZXRTeW5jc3RhbXBdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgbWlkZGxlID0gcmFja3NpemU7IC8vIE1pZGRsZSBlbGVtZW50IGluIHJvdyBvciBjb2x1bW4gYXJyYXlcclxuICAgIGNvbnN0IGVkZ2UgPSByYWNrc2l6ZSAqIDI7IC8vIExhc3QgZWxlbWVudCBpbiByb3cgb3IgY29sdW1uIGFycmF5XHJcbiAgICBjb25zdCBpbml0aWFsdGlsZXMgPSByYWNrc2l6ZSA9PT0gNiA/IGMuVElMRUJBRzYgOiByYWNrc2l6ZSA9PT0gNyA/IGMuVElMRUJBRzcgOiByYWNrc2l6ZSA9PT0gNSA/IGMuVElMRUJBRzUgOiBjLlRJTEVCQUc0O1xyXG4gICAgY29uc3QgW3RpbGVzLCBzZXRUaWxlc10gPSB1c2VTdGF0ZShbLi4uaW5pdGlhbHRpbGVzXSk7XHJcbiAgICBjb25zdCBbcHRpbGVzLCBzZXRQdGlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2d0aWxlcywgc2V0R3RpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzcXVhcmVBcnJheSwgc2V0U3F1YXJlQXJyYXldID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGlvbiwgc2V0U2VsZWN0aW9uXSA9IHVzZVN0YXRlKC0xKTsgLy8gcmVsYXRpdmUgdG8gcmFjayBvZiBwbGF5ZXIgbWFraW5nIGEgcGxheVxyXG4gICAgY29uc3QgW3dob3NldHVybiwgc2V0V2hvc2V0dXJuXSA9IHVzZVN0YXRlKGMuV0hPU0VfVFVSTl9QUklTT05FUlMpOyAvLyBnYW1lIHN0YXJ0cyB3aXRoIHByaXNvbmVycyBwbGF5XHJcbiAgICBjb25zdCBbY3VycmVudGNvb3Jkcywgc2V0Q3VycmVudGNvb3Jkc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcmVzY3Vlcywgc2V0UmVzY3Vlc10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtyY2QsIHNldFJjZF0gPSB1c2VTdGF0ZShbLTEsLTEsYy5ESVJfTk9ORV0pO1xyXG4gICAgY29uc3QgW21vdmVzLCBzZXRNb3Zlc10gPSB1c2VTdGF0ZShbXSk7IC8vIG1vdmUgaGlzdG9yeSwgZWFjaCBlbGVtZW50IGlzIHRoZSBhcnJheSBpcyBhIGpzb24gb2JqZWN0IG9mIGluZm8gYWJvdXQgdGhlIG1vdmVcclxuICAgIGNvbnN0IFtzbmFwc2hvdCwgc2V0U25hcHNob3RdID0gdXNlU3RhdGUoe1xyXG4gICAgICBzcXVhcmVBcnJheTogW10sXHJcbiAgICAgIHB0aWxlczogW10sXHJcbiAgICAgIGd0aWxlczogW10sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtqb2tlaW5kZXgsIHNldEpva2VpbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFthbGxvd1Jld2luZCwgc2V0QWxsb3dSZXdpbmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW29wcG5hbWUsIHNldE9wcG5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2NoYXRtc2dzLCBzZXRDaGF0bXNnc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBwcmV2UmVzY3VlcyA9IHVzZVByZXZpb3VzKHJlc2N1ZXMpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgLy8gVGhpcyBjb2RlIGV4ZWN1dGVzIHRoZSBmaXJzdCB0aW1lIEdhbWUgaXMgdXNlZCBvbmx5XHJcbiAgICAgIGluaXRpYWxpemVSb3V0aW5lKCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBsZXQgbXNnID0gd3NtZXNzYWdlO1xyXG4gICAgICBpZiAobXNnICE9PSAnJykgcHJvY2Vzc0dhbWVNZXNzYWdlKG1zZyk7ICAgICAgXHJcbiAgICB9LFt3c21lc3NhZ2VdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2Nyb2xsVG9Cb3R0b20oXCJTY3JvbGxhYmxlTW92ZXNcIik7XHJcbiAgICB9LFttb3Zlc10pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzY3JvbGxUb0JvdHRvbShcIlNjcm9sbGFibGVDaGF0XCIpO1xyXG4gICAgfSxbY2hhdG1zZ3NdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYgKHJlc2N1ZXMgPiBwcmV2UmVzY3Vlcykge1xyXG4gICAgICAgICAgdmFyIG15YXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gICAgICAgICAgLy8gT2JzZXJ2ZXJzIGhlYXIgeWlwcGVlXHJcbiAgICAgICAgICBteWF1ZGlvLnNyYyA9IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTID8gXCJodHRwczovL3RpbGVydW5uZXIuZ2l0aHViLmlvL09uZUdvdEF3YXkubTRhXCIgOiBcImh0dHBzOi8vdGlsZXJ1bm5lci5naXRodWIuaW8veWlwcGVlLm00YVwiO1xyXG4gICAgICAgICAgbXlhdWRpby5wbGF5KCk7XHJcbiAgICAgIH1cclxuICAgIH0sIFtyZXNjdWVzXSk7IC8vIFBsYXkgYSBzb3VuZCB3aGVuIGEgcmVzY3VlIGlzIG1hZGVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGxldCBuZXdqaSA9IGpva2VpbmRleCArIDE7XHJcbiAgICAgIGlmIChuZXdqaSA+PSBjLkpPS0VfQVJSQVkubGVuZ3RoKSB7XHJcbiAgICAgICAgbmV3amkgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHNldEpva2VpbmRleChuZXdqaSk7XHJcbiAgICB9LCBbd2hvc2V0dXJuXSk7IC8vIHdhbnQgdXAgdG8gZGF0ZSB2YWx1ZSBvZiB3aG9zZXR1cm4gdG8gZGVjaWRlIHdoZXRoZXIgdG8gYXNrIGZvciBhbiB1cGRhdGVcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBpZiAocGFydGljaXBhbnQgIT09IHdob3NldHVybiAmJiB3aG9zZXR1cm4gIT09IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUikge1xyXG4gICAgICAgICAgcmVxdWVzdFN5bmNEYXRhKCk7IC8vIFNlbmQgYSByZXF1ZXN0IGZvciBzeW5jIGRhdGEgd2hlbiB3YWl0aW5nIGZvciB0aGVpciBtb3ZlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNlbmQgYSByZXF1ZXN0IGZvciB0aGUgdGltZXN0YW1wIG9mIHRoZSBsYXN0IGV2ZW50IChzeW5jc3RhbXApXHJcbiAgICAgICAgLy8gU2VydmVyIHdpbGwgc2VuZCBmdW5jPXByb3ZpZGVzeW5jc3RhbXAgd2l0aCBhIHN5bmNzdGFtcCB2YWx1ZVxyXG4gICAgICAgIC8vIFByb2Nlc3NHYW1lTWVzc2FnZSB3aWxsIGNoZWNrIHN5bmNzdGFtcCBmcm9tIHRoZSBzZXJ2ZXIgdG8gc3luY3N0YW1wIGhlcmVcclxuICAgICAgICAvLyBJZiBkaWZmZXJlbnQgaXQgd2lsbCBzZW5kIGZ1bmM9cmVxdWVzdGdhbWVkYXRhLCBzZXJ2ZXIgd2lsbCBzZW5kIHVzIHByb3ZpZGVnYW1lZGF0YSwgYW5kIHdlIHN5bmNcclxuICAgICAgICB9LCBjLlBJTkdfSU5URVJWQUwpOyAvLyB0aGlzIG1hbnkgbWlsbGlzZWNvbmRzIGJldHdlZW4gYWJvdmUgY29kZSBibG9jayBleGVjdXRpb25zXHJcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgaW5pdGlhbGl6ZVJvdXRpbmUgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBmaXJzdFNxdWFyZUFycmF5ID0gaW5pdGlhbFNxdWFyZUFycmF5KHJhY2tzaXplKTtcclxuICAgICAgc2V0U3F1YXJlQXJyYXkoZmlyc3RTcXVhcmVBcnJheSk7XHJcbiAgICAgIGlmIChpc3Jlam9pbikge1xyXG4gICAgICAgIHJlam9pbkdhbWUoKVxyXG4gICAgICB9IGVsc2UgaWYgKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTKSB7XHJcbiAgICAgICAgc3RhcnRHYW1lKGZpcnN0U3F1YXJlQXJyYXkpOyAvLyBQcmlzb25lcnMgc3RhcnRpbmcgdGhlIGdhbWVcclxuICAgICAgfSBlbHNlIGlmIChwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUykge1xyXG4gICAgICAgIGpvaW5HYW1lKCk7IC8vIEd1YXJkcyBqb2luaW5nIHRoZSBnYW1lXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhcnRPYnNlcnZpbmdHYW1lKCk7IC8vIE9ic2VydmVyIHZpZXdpbmcgdGhlIGdhbWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3RhcnRHYW1lID0gKGZpcnN0U3F1YXJlQXJyYXkpID0+IHtcclxuICAgICAgbGV0IG5ld1N5bmNzdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICAgIGxldCB0ZW1wUFRpbGVzID0gW107XHJcbiAgICAgIGxldCB0ZW1wR1RpbGVzID0gW107XHJcbiAgICAgIGxldCB0ZW1wVGlsZXMgPSBbLi4uaW5pdGlhbHRpbGVzXTtcclxuICAgICAgd2hpbGUgKHRlbXBQVGlsZXMubGVuZ3RoIDwgcmFja3NpemUpIHtcclxuICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRlbXBUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIHRlbXBQVGlsZXMucHVzaCh0ZW1wVGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIHRlbXBUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgICAgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRlbXBUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIHRlbXBHVGlsZXMucHVzaCh0ZW1wVGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIHRlbXBUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgdGVtcFBUaWxlcy5zb3J0KCk7XHJcbiAgICAgIHRlbXBHVGlsZXMuc29ydCgpO1xyXG4gICAgICBzZXRTeW5jc3RhbXAobmV3U3luY3N0YW1wKTtcclxuICAgICAgc2V0R3RpbGVzKHRlbXBHVGlsZXMpO1xyXG4gICAgICBzZXRQdGlsZXModGVtcFBUaWxlcyk7XHJcbiAgICAgIHNldFRpbGVzKHRlbXBUaWxlcyk7XHJcbiAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICBzcXVhcmVBcnJheTogZmlyc3RTcXVhcmVBcnJheSxcclxuICAgICAgICBwdGlsZXM6IFsuLi50ZW1wUFRpbGVzXSxcclxuICAgICAgICBndGlsZXM6IFsuLi50ZW1wR1RpbGVzXSAgICBcclxuICAgICAgfSk7XHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6IFwicGJcIixcclxuICAgICAgICAgIGZ1bmM6IFwic3RhcnRnYW1lXCIsXHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gR2FtZSBpZFxyXG4gICAgICAgICAgdGltZXN0YW1wOiBuZXdTeW5jc3RhbXAsIC8vIEZvciB0ZWxsaW5nIHNlcnZlciBteSBsYXN0IGRhdGEgdGltZXN0YW1wXHJcbiAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIFJhY2sgc2l6ZSBvcHRpb25cclxuICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsIC8vIFRoaXMgd2lsbCBiZSBwcmlzb25lcnMgc2luY2UgcHJpc29uZXJzIHN0YXJ0IHRoZSBnYW1lXHJcbiAgICAgICAgICBwbmFtZTogbmlja25hbWUsIC8vIFRoaXMgd2lsbCBiZSB0aGUgcHJpc29uZXJzIG5pY2tuYW1lIHNpbmNlIHByaXNvbmVycyBhcmUgc2VuZGluZyB0aGlzXHJcbiAgICAgICAgICB0aWxlczogdGVtcFRpbGVzLCAvLyBUaWxlIGJhZyBhZnRlciBmaXJzdCByYWNrcyBzZWxlY3RlZFxyXG4gICAgICAgICAgcHRpbGVzOiB0ZW1wUFRpbGVzLCAvLyBQcmlzb25lcnMgZmlyc3QgcmFja1xyXG4gICAgICAgICAgZ3RpbGVzOiB0ZW1wR1RpbGVzIC8vIEd1YXJkcyBmaXJzdCByYWNrXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgam9pbkdhbWUgPSAoKSA9PiB7XHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICBnbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgZnVuYzogXCJqb2luZ2FtZVwiLCAvLyBqb2luIHRoZSBnYW1lXHJcbiAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50IC8vIHRoaXMgd2lsbCBlYiBndWFyZHNcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZWpvaW5HYW1lID0gKCkgPT4ge1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgZnVuYzogXCJyZWpvaW5nYW1lXCIsIC8vIGpvaW4gdGhlIGdhbWVcclxuICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQgLy8gY291bGQgYmUgZWl0aGVyIHBsYXllclxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHN0YXJ0T2JzZXJ2aW5nR2FtZSA9ICgpID0+IHtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsXHJcbiAgICAgICAgICBmdW5jOiBcInN0YXJ0T2JzZXJ2aW5nXCJcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHV0QXRNb3ZlU3RhcnQoKSB7XHJcbiAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICAgIHNldEFsbG93UmV3aW5kKGZhbHNlKTtcclxuICAgICAgc2V0UmNkKC0xLC0xLGMuRElSX05PTkUpO1xyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NHYW1lTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgIGxldCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5nYW1laWQgPT09IGdhbWVpZCAmJiBtZXNzYWdlRGF0YS50eXBlID09PSBcInBiXCIpIHsgLy8gVGhpcyBpbnN0YW5jZSBvZiBhIHByaXNvbiBicmVhayBnYW1lXHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwicHJvdmlkZWdhbWVkYXRhXCIpIHtcclxuICAgICAgICAgIGxldCBnZCA9IGJ1aWxkR2FtZWRhdGFGcm9tQXBpZGF0YShtZXNzYWdlRGF0YS5hcGlkYXRhKTtcclxuICAgICAgICAgIC8vIFNlcnZlciBwcm92aWRpbmcgZ2FtZSBkYXRhXHJcbiAgICAgICAgICBzZXRTeW5jc3RhbXAoZ2Quc3luY3N0YW1wKTtcclxuICAgICAgICAgIC8vIE5vIG9wcG9uZW50IG5hbWUgZm9yIG9ic2VydmVyc1xyXG4gICAgICAgICAgaWYgKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTKSB7XHJcbiAgICAgICAgICAgIHNldE9wcG5hbWUoZ2QuZ25hbWUpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUykge1xyXG4gICAgICAgICAgICBzZXRPcHBuYW1lKGdkLnBuYW1lKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFRpbGVzKGdkLnRpbGVzKTtcclxuICAgICAgICAgIHNldFNxdWFyZUFycmF5KGdkLnNxdWFyZUFycmF5KTtcclxuICAgICAgICAgIHNldFB0aWxlcyhnZC5wdGlsZXMpO1xyXG4gICAgICAgICAgc2V0R3RpbGVzKGdkLmd0aWxlcyk7XHJcbiAgICAgICAgICBzZXRXaG9zZXR1cm4oZ2Qud2hvc2V0dXJuKTtcclxuICAgICAgICAgIGxldCBuZXdTbmFwc2hvdCA9IHtcclxuICAgICAgICAgICAgc3F1YXJlQXJyYXk6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ2Quc3F1YXJlQXJyYXkpKSwgLy8gRGVlcCBjb3B5XHJcbiAgICAgICAgICAgIHB0aWxlczogWy4uLmdkLnB0aWxlc10sXHJcbiAgICAgICAgICAgIGd0aWxlczogWy4uLmdkLmd0aWxlc11cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBzZXRTbmFwc2hvdChuZXdTbmFwc2hvdCk7XHJcbiAgICAgICAgICBzZXRNb3ZlcyhnZC5tb3Zlcyk7XHJcbiAgICAgICAgICBzZXRSZXNjdWVzKGdkLnJlc2N1ZXMpO1xyXG4gICAgICAgICAgc2V0QWxsb3dSZXdpbmQoZ2QuYWxsb3dSZXdpbmQpO1xyXG4gICAgICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwicHJvdmlkZWduYW1lXCIpIHtcclxuICAgICAgICAgIGlmIChwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9USVRMRV9QUklTT05FUlMpIHtcclxuICAgICAgICAgICAgc2V0T3BwbmFtZShtZXNzYWdlRGF0YS5nbmFtZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImFsbG93dW5kb1wiKSB7XHJcbiAgICAgICAgICAvLyBPcHBvbmVudCBjbGlja2VkIGJ1dHRvbiB0byBhbGxvdyB1bmRvIHR1cm5cclxuICAgICAgICAgIHNldEFsbG93UmV3aW5kKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJjaGF0XCIpIHsgLy8gU2VydmVyIGRlY2lkZWQgd2hldGhlciB0aGlzIGNoYXQgd2FzIGZvciBtZVxyXG4gICAgICAgICAgbGV0IG5ld0NoYXRtc2dzID0gWy4uLmNoYXRtc2dzLCB7ZnJvbTogbWVzc2FnZURhdGEubmlja25hbWUsIG1zZzogbWVzc2FnZURhdGEuc2VuZG1zZ31dO1xyXG4gICAgICAgICAgc2V0Q2hhdG1zZ3MobmV3Q2hhdG1zZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJwcm92aWRlc3luY2RhdGFcIikge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coYHByb3ZpZGVzeW5kYXRhIHBhc3NlZCAke21lc3NhZ2VEYXRhLnN5bmNzdGFtcH0gYW5kIEkgaGF2ZSAke3N5bmNzdGFtcH1gKTtcclxuICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS5zeW5jc3RhbXAgIT09IHN5bmNzdGFtcCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgT3V0IG9mIHN5bmMgLSByZXF1ZXN0aW5nIGxhdGVzdCBnYW1lIGRhdGFgKTtcclxuICAgICAgICAgICAgcmVxdWVzdEdhbWVEYXRhKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIENhbGxpbmcgc2V0U2VsZWN0aW9uIChmcm9tIGhhbmRsZUtleURvd24pIHRoZW4gaGFuZGxlQm9hcmRTcXVhcmVDbGljayBkb2VzIG5vdCBsZXQgaXQgcmVjb2duaXplIHNlbGVjdGlvbiB3aXRoIHRoZSBuZXcgdmFsdWVcclxuICAgIC8vIFNvIEkgcGFzcyBuZXdTZWxlY3Rpb24gd2hlbiBJIHdhbnQgdG8gYWxzbyBzZXQgaXQsIG90aGVyd2lzZSBJIHBhc3MgLTEgdG8gaW5zdHJ1Y3QgaXQgdG8gdXNlIGN1cnJlbnQgdmFsdWUgb2Ygc2VsZWN0aW9uXHJcbiAgICAvLyBBbHNvIHBhc3NpbmcgbmV3UmNkXHJcbiAgICBjb25zdCBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrID0gKHJpLCBjaSwgbmV3U2VsZWN0aW9uLCBuZXdSY2QpID0+IHtcclxuICAgICAgbGV0IG5ld1NxdWFyZUFycmF5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzcXVhcmVBcnJheSkpOyAvLyBEZWVwIGNvcHlcclxuICAgICAgbGV0IG5ld1NxdWFyZUFycmF5Um93ID0gWy4uLm5ld1NxdWFyZUFycmF5W3JpXV07IC8vIFRoZSByb3cgb2Ygc3F1YXJlcyB0aGV5IGNsaWNrZWQgb25cclxuICAgICAgbGV0IG5ld1NxdWFyZUFycmF5Q2VsbCA9IG5ld1NxdWFyZUFycmF5Um93W2NpXTsgLy8gVGhlIHNxdWFyZSBpbiB0aGUgcm93IHRoZXkgY2xpY2tlZCBvblxyXG4gICAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IG5ld0N1cnJlbnRjb29yZHMgPSBbLi4uY3VycmVudGNvb3Jkc107XHJcbiAgICAgIGxldCBjb29yZCA9IFN0cmluZyhyaSkgKyBcIi1cIiArIFN0cmluZyhjaSk7XHJcbiAgICAgIGxldCBjY2kgPSBjdXJyZW50Y29vcmRzLmluZGV4T2YoY29vcmQpO1xyXG4gICAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMSkge1xyXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IHNlbGVjdGlvbjtcclxuICAgICAgICBuZXdSY2QgPSByY2Q7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5ld1NlbGVjdGlvbiA+IC0xICYmIG5ld1NxdWFyZUFycmF5Q2VsbC51c2VkYnkgPT09IGMuVVNFRF9CWV9OT05FKSB7IC8vIHRpbGUgaXMgc2VsZWN0ZWQgZnJvbSByYWNrIGFuZCBjbGlja2VkIHNxdWFyZSBpcyBub3QgdXNlZCB5ZXRcclxuICAgICAgICBsZXQgc2VsZWN0ZWRUaWxlID0gd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTID8gbmV3UHRpbGVzW25ld1NlbGVjdGlvbl0gOiBuZXdHdGlsZXNbbmV3U2VsZWN0aW9uXTtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheUNlbGwubGV0dGVyID0gc2VsZWN0ZWRUaWxlO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Q2VsbC51c2VkYnkgPSB3aG9zZXR1cm47XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlSb3dbY2ldID0gbmV3U3F1YXJlQXJyYXlDZWxsO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5W3JpXSA9IFsuLi5uZXdTcXVhcmVBcnJheVJvd107XHJcbiAgICAgICAgd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTXHJcbiAgICAgICAgICA/IG5ld1B0aWxlcy5zcGxpY2UobmV3U2VsZWN0aW9uLCAxKVxyXG4gICAgICAgICAgOiBuZXdHdGlsZXMuc3BsaWNlKG5ld1NlbGVjdGlvbiwgMSk7XHJcbiAgICAgICAgaWYgKHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX1BSSVNPTkVSUyAmJiBuZXdTZWxlY3Rpb24gPT09IG5ld1B0aWxlcy5sZW5ndGgpIHsgXHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdTZWxlY3Rpb24gLSAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9HVUFSRFMgJiYgbmV3U2VsZWN0aW9uID09PSBuZXdHdGlsZXMubGVuZ3RoKSB7IFxyXG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3U2VsZWN0aW9uIC0gMVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3Rpb24obmV3U2VsZWN0aW9uKTtcclxuICAgICAgICBzZXRTcXVhcmVBcnJheShuZXdTcXVhcmVBcnJheSk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgICAgc2V0Q3VycmVudGNvb3JkcyhbLi4uY3VycmVudGNvb3JkcywgY29vcmRdKTtcclxuICAgICAgICBzZXRSY2QobmV3UmNkKTsgLy8ga2V5IGRvd24gaGFuZGxlciBmaWd1cmVkIGl0IG91dFxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY2NpID4gLTEpIHsgLy8gY2xpY2tlZCBzcXVhcmUgaGFzIGEgdGlsZSBvbiBpdCBmcm9tIHRoZSBjdXJyZW50IG1vdmUgaW4gcHJvZ3Jlc3MsIHNvIHB1dCBpdCBiYWNrIG9uIHRoZSBwbGF5ZXIgcmFja1xyXG4gICAgICAgIHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX1BSSVNPTkVSU1xyXG4gICAgICAgICAgPyBuZXdQdGlsZXMucHVzaChuZXdTcXVhcmVBcnJheUNlbGwubGV0dGVyKVxyXG4gICAgICAgICAgOiBuZXdHdGlsZXMucHVzaChuZXdTcXVhcmVBcnJheUNlbGwubGV0dGVyKTtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheUNlbGwudXNlZGJ5ID0gYy5VU0VEX0JZX05PTkU7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlDZWxsLmxldHRlciA9IGMuTEVUVEVSX05PTkU7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlSb3dbY2ldID0gbmV3U3F1YXJlQXJyYXlDZWxsO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5W3JpXSA9IFsuLi5uZXdTcXVhcmVBcnJheVJvd107XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKFxyXG4gICAgICAgICAgd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTID8gbmV3UHRpbGVzLmxlbmd0aCAtIDEgOiBuZXdHdGlsZXMubGVuZ3RoIC0gMVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbmV3Q3VycmVudGNvb3Jkcy5zcGxpY2UoY2NpLCAxKTtcclxuICAgICAgICBzZXRTcXVhcmVBcnJheShuZXdTcXVhcmVBcnJheSk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgICAgc2V0Q3VycmVudGNvb3JkcyhuZXdDdXJyZW50Y29vcmRzKTtcclxuICAgICAgICBzZXRSY2QoLTEsLTEsYy5ESVJfTk9ORSk7IC8vIG1ha2UgcGxheWVyIGNsaWNrIGFnYWluIHRvIHNldCBkaXJlY3Rpb25cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gVGhleSBkaWRuJ3QgY2xpY2sgYSBzcXVhcmUgdG8gcGxhY2UgYSBzZWxlY3RlZCB0aWxlIHRoZXJlXHJcbiAgICAgIC8vIFRoZXkgZGlkbid0IGNsaWNrIGEgc3F1YXJlIHRvIHJlbW92ZSBhbiBleGlzdGluZyB0aWxlXHJcbiAgICAgIGlmIChuZXdTcXVhcmVBcnJheUNlbGwudXNlZGJ5ID09PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgIC8vIFRoZXJlIGlzIG5vdGhpbmcgb24gdGhlIHNxdWFyZSBzbyB0aGV5IGFyZSBwaWNraW5nIHdoZXJlIHRvIHBsYWNlIHRoZSBuZXh0IHRpbGUgdmlhIGtleWJvYXJkXHJcbiAgICAgICAgbGV0IG5ld0RpcmVjdGlvbiA9IHJjZFswXSAhPT0gcmkgfHwgcmNkWzFdICE9PSBjaSA/IGMuRElSX1JJR0hUIDogLy9jbGljayBuZXcgc3F1YXJlLCBzdGFydCB3aXRoIHJpZ2h0XHJcbiAgICAgICAgIHJjZFsyXSA9PT0gYy5ESVJfUklHSFQgPyBjLkRJUl9ET1dOIDogLy9jbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyByaWdodCwgY2hhbmdlIHRvIGRvd25cclxuICAgICAgICAgcmNkWzJdID09PSBjLkRJUl9ET1dOID8gYy5ESVJfTk9ORSA6IC8vY2xpY2sgc2FtZSBzcXVhcmUgdGhhdCB3YXMgZG93biwgY2hhbmdlIHRvIG5vIGRpcmVjdGlvblxyXG4gICAgICAgICBjLkRJUl9SSUdIVDsgLy8gY2xpY2sgc2FtZSBzcXVhcmUgdGhhdCB3YXMgbm8gZGlyZWN0aW9uLCBjaGFuZ2UgdG8gcmlnaHRcclxuICAgICAgICBuZXdSY2QgPSBbcmksY2ksbmV3RGlyZWN0aW9uXTtcclxuICAgICAgICBzZXRSY2QobmV3UmNkKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBoYW5kbGVSYWNrVGlsZUNsaWNrID0gKHRpbGVpbmRleCkgPT4ge1xyXG4gICAgICBpZiAocGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9PQlNFUlZFUikge3JldHVybjt9XHJcbiAgICAgIC8vIElmIG5vIHRpbGUgaXMgc2VsZWN0ZWQgYWxyZWFkeSB0aGVuIHNldCB0aGUgc2VsZWN0aW9uXHJcbiAgICAgIGlmIChzZWxlY3Rpb24gPT09IC0xKSB7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKHRpbGVpbmRleCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIElmIHRoZSBzYW1lIHRpbGUgaXMgYWxyZWFkeSBzZWxlY3RlZCB0aGVuIHVuc2VsZWN0XHJcbiAgICAgIGlmIChzZWxlY3Rpb24gPT09IHRpbGVpbmRleCkge1xyXG4gICAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEEgdGlsZSB3YXMgYWxyZWFkeSBzZWxlY3RlZCBhbmQgdGhleSBjbGlja2VkIGFub3RoZXIgdGlsZSAtIG1vdmUgdGhlIHRpbGVcclxuICAgICAgbGV0IG5ld3JhY2sgPSBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IFsuLi5wdGlsZXNdIDogWy4uLmd0aWxlc107XHJcbiAgICAgIGxldCBtb3ZlZnJvbSA9IHNlbGVjdGlvbjtcclxuICAgICAgbGV0IG1vdmV0aWxlID0gbmV3cmFja1ttb3ZlZnJvbV07XHJcbiAgICAgIGxldCBtb3ZldG8gPSB0aWxlaW5kZXg7XHJcbiAgICAgIG5ld3JhY2suc3BsaWNlKG1vdmVmcm9tLCAxKTsgLy8gcmVtb3ZlIHRpbGUgZnJvbSBvcmlnaW5hbCBzZWxlY3RlZCBwb3NpdGlvblxyXG4gICAgICBuZXdyYWNrLnNwbGljZShtb3ZldG8sMCxtb3ZldGlsZSk7IC8vIGluc2VydCBtb3ZlZCB0aWxlIGF0IHRoZSBuZXdseSBzZWxlY3RlZCBwb3NpdGlvblxyXG4gICAgICBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IHNldFB0aWxlcyhuZXdyYWNrKSA6IHNldEd0aWxlcyhuZXdyYWNrKTtcclxuICAgICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgIH1cclxuICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGVuZFBsYXllcnNUdXJuKCkge1xyXG4gICAgICBpZiAoIWlzUGxheVZhbGlkKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHBsYXlpbmZvID0gYXdhaXQgZ2V0UGxheUluZm8oKTtcclxuICAgICAgaWYgKHBsYXlpbmZvLmludmFsaWR3b3Jkcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBhbGVydChgSW52YWxpZCBhY2NvcmRpbmcgdG8gRU5BQkxFMksgbGV4aWNvbjogJHtwbGF5aW5mby5pbnZhbGlkd29yZHMuam9pbigpLnJlcGxhY2UoXCIuXCIsXCI/XCIpLnRvVXBwZXJDYXNlKCl9YCk7XHJcbiAgICAgICAgcmV0dXJuOyAvLyBEbyBub3QgYXBwbHkgdGhlIHBsYXlcclxuICAgICAgfVxyXG4gICAgICBsZXQgbmV3UmVzY3VlcyA9IHJlc2N1ZXM7XHJcbiAgICAgIGlmIChwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUykge1xyXG4gICAgICAgIGxldCBlc2NhcGVoYXRjaGVzID0gW1xyXG4gICAgICAgICAgXCIwLTBcIixcclxuICAgICAgICAgIFwiMC1cIiArIG1pZGRsZSxcclxuICAgICAgICAgIFwiMC1cIiArIGVkZ2UsXHJcbiAgICAgICAgICBtaWRkbGUrIFwiLTBcIixcclxuICAgICAgICAgIG1pZGRsZSArIFwiLVwiICsgZWRnZSxcclxuICAgICAgICAgIGVkZ2UgKyBcIi0wXCIsXHJcbiAgICAgICAgICBlZGdlICsgXCItXCIgKyBtaWRkbGUsXHJcbiAgICAgICAgICBlZGdlICsgXCItXCIgKyBlZGdlXHJcbiAgICAgICAgXTsgLy8gY29vcmRzIG9mIGVzY2FwZSBoYXRjaGVzXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50Y29vcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAoZXNjYXBlaGF0Y2hlcy5pbmRleE9mKGN1cnJlbnRjb29yZHNbaV0pID4gLTEpIHtcclxuICAgICAgICAgICAgbmV3UmVzY3VlcyA9IG5ld1Jlc2N1ZXMgKyAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsZXQgbmV3UGxheWVyVGlsZXMgPSBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IFsuLi5wdGlsZXNdIDogWy4uLmd0aWxlc107XHJcbiAgICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICAgIHdoaWxlIChuZXdQbGF5ZXJUaWxlcy5sZW5ndGggPCByYWNrc2l6ZSAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIG5ld1BsYXllclRpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgfVxyXG4gICAgICBuZXdQbGF5ZXJUaWxlcy5zb3J0KCk7XHJcbiAgICAgIGxldCBuZXdXaG9zZXR1cm4gPSBuZXdQbGF5ZXJUaWxlcy5sZW5ndGggPT09IDAgPyBjLldIT1NFX1RVUk5fR0FNRU9WRVIgOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IGMuV0hPU0VfVFVSTl9HVUFSRFMgOiBjLlBBUlRZX1RZUEVfUFJJU09ORVJTO1xyXG4gICAgICBpZiAoIWFueVVudXNlZEVzY2FwZUhhdGNoZXMoc3F1YXJlQXJyYXkpKSB7XHJcbiAgICAgICAgbmV3V2hvc2V0dXJuID0gYy5XSE9TRV9UVVJOX0dBTUVPVkVSOyAvLyBObyBlc2NhcGUgaGF0Y2hlcyBsZWZ0XHJcbiAgICAgIH1cclxuICAgICAgbGV0IG5ld01vdmUgPSB7Ynk6IHBhcnRpY2lwYW50LCB0eXBlOiBjLk1PVkVfVFlQRV9QTEFZLCBtYWlud29yZDogcGxheWluZm8ubWFpbndvcmQsIGV4dHJhd29yZHM6IHBsYXlpbmZvLmV4dHJhd29yZHMsIHBvczogcGxheWluZm8ucG9zfTtcclxuICAgICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgICAgbGV0IG5ld1N5bmNzdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgIHNldFN5bmNzdGFtcChuZXdTeW5jc3RhbXApO1xyXG4gICAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgICAgcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBzZXRQdGlsZXMobmV3UGxheWVyVGlsZXMpIDogc2V0R3RpbGVzKG5ld1BsYXllclRpbGVzKTtcclxuICAgICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICAgIHNldFJlc2N1ZXMobmV3UmVzY3Vlcyk7XHJcbiAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICBzcXVhcmVBcnJheTogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzcXVhcmVBcnJheSkpLCAvLyBEZWVwIGNvcHlcclxuICAgICAgICBwdGlsZXM6IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gWy4uLm5ld1BsYXllclRpbGVzXSA6IFsuLi5wdGlsZXNdLFxyXG4gICAgICAgIGd0aWxlczogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBbLi4uZ3RpbGVzXSA6IFsuLi5uZXdQbGF5ZXJUaWxlc10sXHJcbiAgICAgIH0pO1xyXG4gICAgICBsZXQganNlbmQgPSB7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBcImVwdFwiIDogXCJlZ3RcIiwgLy8gZW5kIHByaXNvbmVycyBvciBndWFyZHMgdHVyblxyXG4gICAgICAgIHRpbWVzdGFtcDogbmV3U3luY3N0YW1wLCAvLyBmb3IgZGF0YSBzeW5jIGxvZ2ljXHJcbiAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICBwdGlsZXM6IG5ld1BsYXllclRpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuLCAvLyBtYXkgaGF2ZSBlbmRlZCB0aGUgZ2FtZVxyXG4gICAgICAgIG1vdmU6IG5ld01vdmUsIC8vIHRoZSBtb3ZlIHRoYXQgd2FzIG1hZGVcclxuICAgICAgICByZXNjdWVzOiBuZXdSZXNjdWVzIC8vIG1heSBoYXZlIHJlc2N1ZWQgYW5vdGhlciBwcmlzb25lclxyXG4gICAgICB9O1xyXG4gICAgICBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IGpzZW5kLnB0aWxlcyA9IG5ld1BsYXllclRpbGVzIDoganNlbmQuZ3RpbGVzID0gbmV3UGxheWVyVGlsZXM7XHJcbiAgICAgIGNsaWVudC5zZW5kKGpzZW5kKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBzd2FwUGxheWVyc1RpbGVzID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGlsZXMubGVuZ3RoIDwgcmFja3NpemUpIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJOZWVkIFwiICsgcmFja3NpemUgKyBcIiB0aWxlcyBpbiB0aGUgYmFnIHRvIGV4Y2hhbmdlXCIpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBuZXdQbGF5ZXJUaWxlcyA9IFtdO1xyXG4gICAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgICB3aGlsZSAobmV3UGxheWVyVGlsZXMubGVuZ3RoIDwgcmFja3NpemUgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgICBuZXdQbGF5ZXJUaWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgbmV3UGxheWVyVGlsZXMuc29ydCgpO1xyXG4gICAgICBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IG5ld1RpbGVzID0gWy4uLm5ld1RpbGVzLCAuLi5zbmFwc2hvdC5wdGlsZXNdIDogbmV3VGlsZXMgPSBbLi4ubmV3VGlsZXMsIC4uLnNuYXBzaG90Lmd0aWxlc107XHJcbiAgICAgIG5ld1RpbGVzLnNvcnQoKTtcclxuICAgICAgbGV0IG5ld01vdmUgPSB7Ynk6IHBhcnRpY2lwYW50LCB0eXBlOiBjLk1PVkVfVFlQRV9TV0FQfTtcclxuICAgICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgICAgbGV0IG5ld1N5bmNzdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgIHNldFN5bmNzdGFtcChuZXdTeW5jc3RhbXApO1xyXG4gICAgICBzZXRTcXVhcmVBcnJheShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNuYXBzaG90LnNxdWFyZUFycmF5KSkpOyAvLyBEZWVwIGNvcHlcclxuICAgICAgc2V0V2hvc2V0dXJuKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gYy5XSE9TRV9UVVJOX0dVQVJEUyA6IGMuV0hPU0VfVFVSTl9QUklTT05FUlMpO1xyXG4gICAgICBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IHNldFB0aWxlcyhuZXdQbGF5ZXJUaWxlcykgOiBzZXRHdGlsZXMobmV3UGxheWVyVGlsZXMpO1xyXG4gICAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgIHNxdWFyZUFycmF5OiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNuYXBzaG90LnNxdWFyZUFycmF5KSksIC8vIERlZXAgY29weVxyXG4gICAgICAgIHB0aWxlczogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBbLi4ubmV3UGxheWVyVGlsZXNdIDogWy4uLnB0aWxlc10sXHJcbiAgICAgICAgZ3RpbGVzOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IFsuLi5ndGlsZXNdIDogWy4uLm5ld1BsYXllclRpbGVzXSxcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCBqc2VuZCA9IHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IFwiZXB0XCIgOiBcImVndFwiLCAvLyBlbmQgcHJpc29uZXJzIG9yIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgdGltZXN0YW1wOiBuZXdTeW5jc3RhbXAsIC8vIGZvciBkYXRhIHN5bmMgbG9naWNcclxuICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LFxyXG4gICAgICAgIHdob3NldHVybjogYy5XSE9TRV9UVVJOX0dVQVJEUywgLy8gc3dhcCBuZXZlciBlbmRzIHRoZSBnYW1lIHNvIGdvIHRvIG9wcG9uZW50XHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgbW92ZTogbmV3TW92ZSAvLyB0aGUgbW92ZSB0aGF0IHdhcyBtYWRlXHJcbiAgICAgIH07XHJcbiAgICAgIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8ganNlbmQucHRpbGVzID0gbmV3UGxheWVyVGlsZXMgOiBqc2VuZC5ndGlsZXMgPSBuZXdQbGF5ZXJUaWxlcztcclxuICAgICAgY2xpZW50LnNlbmQoanNlbmQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBpc1BsYXlWYWxpZCgpIHtcclxuICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBpcyB0aGUgZmlyc3Qgd29yZCBzaW5jZSBpdCBhZmZlY3RzIHRoZSB2YWxpZGl0eSBydWxlc1xyXG4gICAgICBsZXQgZmlyc3RXb3JkID0gdHJ1ZTtcclxuICAgICAgbGV0IG51bW1vdmVzID0gbW92ZXMubGVuZ3RoO1xyXG4gICAgICBmb3IgKHZhciBtb3ZlaW5kZXggPSAwOyBmaXJzdFdvcmQgJiYgKG1vdmVpbmRleCA8IG51bW1vdmVzKTsgKyttb3ZlaW5kZXgpIHtcclxuICAgICAgICBpZiAobW92ZXNbbW92ZWluZGV4XS50eXBlID09PSBjLk1PVkVfVFlQRV9QTEFZKSB7XHJcbiAgICAgICAgICBmaXJzdFdvcmQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gRmlyc3Qgd29yZCBtdXN0IGhpdCBjZW50ZXIgc3F1YXJlXHJcbiAgICAgIGlmIChmaXJzdFdvcmQgJiYgc3F1YXJlQXJyYXlbbWlkZGxlXVttaWRkbGVdLnVzZWRieSA9PT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJGaXJzdCBwbGF5IG11c3QgaGl0IGNlbnRlciBzcXVhcmVcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEF0IGxlYXN0IDEgdGlsZSBtdXN0IGJlIHBsYXllZFxyXG4gICAgICBpZiAoY3VycmVudGNvb3Jkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJZb3UgZGlkbid0IHBsYXkgYW55IHRpbGVzXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICAvKiBHbyB0aHJvdWdoIGVhY2ggcGxheWVkIHRpbGVcclxuICAgICAgICAgIE1ha2Ugc3VyZSBpdCBpcyBub3QgaXNvbGF0ZWQgZnJvbSBhbGwgdGhlIG90aGVyIHRpbGVzXHJcbiAgICAgICAgICBEZXRlcm1pbmUgdGhlIGxvd2VzdCBhbmQgaGlnaGVzdCByb3cgYW5kIGNvbHVtbiBudW1iZXJzIG9mIHRpbGVzIHBsYXllZCB0aGlzIG1vdmVcclxuICAgICAgKi9cclxuICAgICAgbGV0IG51bWNvb3JkcyA9IGN1cnJlbnRjb29yZHMubGVuZ3RoO1xyXG4gICAgICBsZXQgbG93cm93ID0gZWRnZSsxO1xyXG4gICAgICBsZXQgaGlnaHJvdyA9IC0xO1xyXG4gICAgICBsZXQgbG93Y29sID0gZWRnZSsxO1xyXG4gICAgICBsZXQgaGlnaGNvbCA9IC0xO1xyXG4gICAgICBmb3IgKHZhciBjb29yZD0wOyBjb29yZCA8IG51bWNvb3JkczsgKytjb29yZCkgeyAvLyBFYWNoIHRpbGUgcGxheWVkIHRoaXMgbW92ZVxyXG4gICAgICAgIGxldCB0ZW1wcm93ID0gcGFyc2VJbnQoY3VycmVudGNvb3Jkc1tjb29yZF0uc3BsaXQoXCItXCIpWzBdKTtcclxuICAgICAgICBsZXQgdGVtcGNvbCA9IHBhcnNlSW50KGN1cnJlbnRjb29yZHNbY29vcmRdLnNwbGl0KFwiLVwiKVsxXSk7XHJcbiAgICAgICAgaWYgKHRlbXByb3cgPCBsb3dyb3cpIHsgbG93cm93ID0gdGVtcHJvdzt9XHJcbiAgICAgICAgaWYgKHRlbXByb3cgPiBoaWdocm93KSB7IGhpZ2hyb3cgPSB0ZW1wcm93O31cclxuICAgICAgICBpZiAodGVtcGNvbCA8IGxvd2NvbCkgeyBsb3djb2wgPSB0ZW1wY29sO31cclxuICAgICAgICBpZiAodGVtcGNvbCA+IGhpZ2hjb2wpIHsgaGlnaGNvbCA9IHRlbXBjb2w7fVxyXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGVyZSBpcyBhbm90aGVyIHRpbGUgaW1tZWRpYXRlbHkgYWJvdmUsIGJlbG93LCBsZWZ0LCBvciByaWdodCAobm90IGlzb2xhdGVkKVxyXG4gICAgICAgIGlmICghKHRlbXByb3cgPiAwICYmIHNxdWFyZUFycmF5W3RlbXByb3ctMV1bdGVtcGNvbF0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgJiZcclxuICAgICAgICAgICEodGVtcGNvbCA+IDAgJiYgc3F1YXJlQXJyYXlbdGVtcHJvd11bdGVtcGNvbC0xXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSAmJlxyXG4gICAgICAgICAgISh0ZW1wcm93IDwgZWRnZSAmJiBzcXVhcmVBcnJheVt0ZW1wcm93KzFdW3RlbXBjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpICYmXHJcbiAgICAgICAgICAhKHRlbXBjb2wgPCBlZGdlICYmIHNxdWFyZUFycmF5W3RlbXByb3ddW3RlbXBjb2wrMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSlcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJFYWNoIHBsYXllZCB0aWxlIG11c3QgYmUgcGFydCBvZiBhIHdvcmRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBVc2luZyB0aGUgaGlnaCBhbmQgbG93IHZhbHVlcywgY2hlY2sgaWYgdGhlIHBsYXkgaXMgaW4gYSBzdHJhaWdodCBsaW5lXHJcbiAgICAgIGlmIChsb3dyb3cgIT09IGhpZ2hyb3cgJiYgbG93Y29sICE9PSBoaWdoY29sKSB7XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwiVGlsZXMgcGxheWVkIG11c3QgYmUgaW4gYSBzdHJhaWdodCBsaW5lXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgcGxheXRocnUgPSBmYWxzZTtcclxuICAgICAgbGV0IGhvb2ttYWRlID0gZmFsc2U7XHJcbiAgICAgIC8qIFRyYXZlcnNlIGZyb20gZmlyc3QgcGxheWVkIHRpbGUgdG8gbGFzdCBwbGF5ZXIgdGlsZVxyXG4gICAgICAgICAgTWFrZSBzdXJlIHRoZXJlIGFyZSBubyB1bnVzZWQgc3F1YXJlcyBpbmJldHdlZW4gKGdhcHMgaW4gdGhlIHBsYXllZCB3b3JkKVxyXG4gICAgICAgICAgQ2hlY2sgaWYgd2UgcGxheWVkIHRocm91Z2ggZXhpc3RpbmcgdGlsZXNcclxuICAgICAgICAgIENoZWNrIGlmIHdlIGhvb2tlZCBleGlzdGluZyB0aWxlcy93b3Jkc1xyXG4gICAgICAqL1xyXG4gICAgICBmb3IgKHZhciB0ZW1wcm93ID0gbG93cm93OyB0ZW1wcm93IDw9IGhpZ2hyb3c7ICsrdGVtcHJvdykge1xyXG4gICAgICAgIGZvciAodmFyIHRlbXBjb2wgPSBsb3djb2w7IHRlbXBjb2wgPD0gaGlnaGNvbDsgKyt0ZW1wY29sKSB7XHJcbiAgICAgICAgICBpZiAoc3F1YXJlQXJyYXlbdGVtcHJvd11bdGVtcGNvbF0udXNlZGJ5ID09PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJUaGVyZSBpcyBhIGdhcCBpbiB5b3VyIHdvcmRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghZmlyc3RXb3JkKSB7IC8vIFBsYXkgdGhyb3VnaCBhbmQgaG9vayBub3QgcG9zc2libGUgb24gZmlyc3QgbW92ZVxyXG4gICAgICAgICAgICBsZXQgdGVtcGNvb3JkID0gdGVtcHJvdyArIFwiLVwiICsgdGVtcGNvbDtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMuaW5kZXhPZih0ZW1wY29vcmQpIDwgMCkgeyAvLyBUaWxlIHdhcyBub3QgcGxheWVkIHRoaXMgbW92ZSAod2FzIGFscmVhZHkgb24gdGhlIGJvYXJkKVxyXG4gICAgICAgICAgICAgIHBsYXl0aHJ1ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIHRlbXByb3cgPiAwICYmIHNxdWFyZUFycmF5W3RlbXByb3ctMV1bdGVtcGNvbF0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiB0ZW1wcm93IDwgZWRnZSAmJiBzcXVhcmVBcnJheVt0ZW1wcm93KzFdW3RlbXBjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgdGVtcGNvbCA+IDAgJiYgc3F1YXJlQXJyYXlbdGVtcHJvd11bdGVtcGNvbC0xXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIHRlbXBjb2wgPCBlZGdlICYmIHNxdWFyZUFycmF5W3RlbXByb3ddW3RlbXBjb2wrMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgeyBob29rbWFkZSA9IHRydWU7IH0gIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoIWZpcnN0V29yZCkge1xyXG4gICAgICAgIC8vIFdlIGFscmVhZHkgZm91bmQgcGxheSB0aHJvdWdoIGEgdGlsZSBiZXR3ZWVuIGZpcnN0IGFuZCBsYXN0IHBsYXllZCB0aWxlXHJcbiAgICAgICAgLy8gTm93IGNoZWNrIGlmIHBsYXllZCB3b3JkIGhhcyBhIHRpbGUgYmVmb3JlIGZpcnN0IG9yIGFmdGVyIGxhc3QgcGxheWVkIHRpbGVcclxuICAgICAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIGxvd2NvbCA+IDAgJiYgc3F1YXJlQXJyYXlbbG93cm93XVtsb3djb2wtMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIGhpZ2hjb2wgPCBlZGdlICYmIHNxdWFyZUFycmF5W2xvd3Jvd11baGlnaGNvbCsxXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgbG93cm93ID4gMCAmJiBzcXVhcmVBcnJheVtsb3dyb3ctMV1bbG93Y29sXSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBoaWdocm93IDwgZWRnZSAmJiBzcXVhcmVBcnJheVtoaWdocm93KzFdW2xvd2NvbF0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgICAgICAvLyBOb3cgd2UgaGF2ZSBmdWxseSBpZGVudGlmaWVkIHBsYXkgdGhyb3VnaCB3ZSBjYW4gbWFrZSBzdXJlIHRoZXkgcGxheWVkIHRocm91Z2ggb3IgbWFkZSBhIGhvb2tcclxuICAgICAgICAvLyBUaGlzIGluIG1hbmRhdG9yeSBzaW5jZSBpdCBpcyBub3QgdGhlIGZpcnN0IG1vdmVcclxuICAgICAgICBpZiAoIXBsYXl0aHJ1ICYmICFob29rbWFkZSkge1xyXG4gICAgICAgICAgd2luZG93LmFsZXJ0KFwiTmV3IHdvcmRzIG11c3QgZXh0ZW5kIGFuIGV4aXN0aW5nIHdvcmQgYW5kL29yIGhvb2sgZXhpc3Rpbmcgd29yZHMgb3IgdGlsZXNcIik7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UGxheUluZm8oKSB7XHJcbiAgICAgIGxldCBwbGF5aW5mbyA9IHt9O1xyXG4gICAgICBsZXQgbWFpbndvcmQgPSBcIlwiO1xyXG4gICAgICBsZXQgZXh0cmF3b3JkcyA9IFtdO1xyXG4gICAgICBsZXQgd29yZHN0YXJ0Y29vcmQgPSBcIlwiO1xyXG4gICAgICBsZXQgbnVtcm93cyA9IGVkZ2UrMTtcclxuICAgICAgbGV0IG51bWNvbHMgPSBlZGdlKzE7XHJcbiAgICAgIGxldCBsb3dyb3cgPSBudW1yb3dzO1xyXG4gICAgICBsZXQgaGlnaHJvdyA9IC0xO1xyXG4gICAgICBsZXQgbG93Y29sID0gbnVtY29scztcclxuICAgICAgbGV0IGhpZ2hjb2wgPSAtMTtcclxuICAgICAgbGV0IG51bWNvb3JkcyA9IGN1cnJlbnRjb29yZHMubGVuZ3RoO1xyXG4gICAgICBmb3IgKHZhciBjb29yZD0wOyBjb29yZCA8IG51bWNvb3JkczsgKytjb29yZCkge1xyXG4gICAgICAgIGxldCByb3cgPSBwYXJzZUludChjdXJyZW50Y29vcmRzW2Nvb3JkXS5zcGxpdChcIi1cIilbMF0pO1xyXG4gICAgICAgIGxldCBjb2wgPSBwYXJzZUludChjdXJyZW50Y29vcmRzW2Nvb3JkXS5zcGxpdChcIi1cIilbMV0pO1xyXG4gICAgICAgIGlmIChyb3cgPCBsb3dyb3cpIHtcclxuICAgICAgICAgIGxvd3JvdyA9IHJvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvdyA+IGhpZ2hyb3cpIHtcclxuICAgICAgICAgIGhpZ2hyb3cgPSByb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2wgPCBsb3djb2wpIHtcclxuICAgICAgICAgIGxvd2NvbCA9IGNvbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbCA+IGhpZ2hjb2wpIHtcclxuICAgICAgICAgIGhpZ2hjb2wgPSBjb2w7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChsb3dyb3cgPCBoaWdocm93IHx8IG51bWNvb3JkcyA9PT0gMSkgeyAvLyB0aWxlcyBwbGFjZWQgb24gZGlmZmVyZW5jZSByb3dzIHNvIHBsYXkgaXMgdmVydGljYWwsIG9yIHNpbmdsZSB0aWxlIHBsYXllZFxyXG4gICAgICAgIGxldCBjb2wgPSBsb3djb2w7IC8vIGxvd2NvbCBhbmQgaGlnaGNvbCB3aWxsIGhhdmUgdGhlIHNhbWUgdmFsdWVcclxuICAgICAgICAvLyBmaW5kIHRoZSBsb3dlc3Qgcm93IG51bWJlciBvZiB0aGUgbWFpbiB3b3JkLCB3aGljaCBtYXkgYmUgbG93ZXIgdGhhbiB0aGF0IG9mIHRoZSBmaXJzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIGxldCBsb3dlc3Ryb3cgPSBsb3dyb3c7XHJcbiAgICAgICAgd2hpbGUgKGxvd2VzdHJvdyA+IDAgJiYgc3F1YXJlQXJyYXlbbG93ZXN0cm93LTFdW2NvbF0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgbG93ZXN0cm93ID0gbG93ZXN0cm93IC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZmluZCB0aGUgaGlnaGVzdCByb3cgbnVtYmVyIG9mIHRoZSBtYWluIHdvcmQsIHdoaWNoIG1heSBiZSBoaWdoZXIgdGhhbiB0aGF0IG9mIHRoZSBsYXN0IHBsYXllZCB0aWxlXHJcbiAgICAgICAgbGV0IGhpZ2hlc3Ryb3cgPSBoaWdocm93O1xyXG4gICAgICAgIHdoaWxlIChoaWdoZXN0cm93IDwgZWRnZSAmJiBzcXVhcmVBcnJheVtoaWdoZXN0cm93KzFdW2NvbF0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgaGlnaGVzdHJvdyA9IGhpZ2hlc3Ryb3cgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3b3Jkc3RhcnRjb29yZCA9IGMuQk9BUkRfQ09MX0hFQURFUlNbY29sXSArIGMuQk9BUkRfUk9XX0hFQURFUlNbbG93ZXN0cm93XTsgLy8gdmVydGljYWwgcGxheSBjb29yZHMgc3RhcnQgd2l0aCBjb2wgaGVhZGVyXHJcbiAgICAgICAgZm9yICh2YXIgcm93ID0gbG93ZXN0cm93OyByb3cgPD0gaGlnaGVzdHJvdzsgKytyb3cpIHtcclxuICAgICAgICAgIG1haW53b3JkID0gbWFpbndvcmQgKyBzcXVhcmVBcnJheVtyb3ddW2NvbF0ubGV0dGVyO1xyXG4gICAgICAgICAgbGV0IGNvb3JkID0gcm93ICsgXCItXCIgKyBjb2w7XHJcbiAgICAgICAgICBpZiAoY3VycmVudGNvb3Jkcy5pbmRleE9mKGNvb3JkKSA+IC0xKSB7IC8vIFRoaXMgdGlsZSB3YXMgcGxheWVkLCBjaGVjayBmb3IgaG9va3NcclxuICAgICAgICAgICAgbGV0IGxvd2VzdGNvbCA9IGNvbDtcclxuICAgICAgICAgICAgd2hpbGUgKGxvd2VzdGNvbCA+IDAgJiYgc3F1YXJlQXJyYXlbcm93XVtsb3dlc3Rjb2wtMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgICAgIGxvd2VzdGNvbCA9IGxvd2VzdGNvbCAtIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGhpZ2hlc3Rjb2wgPSBjb2w7XHJcbiAgICAgICAgICAgIHdoaWxlIChoaWdoZXN0Y29sIDwgZWRnZSAmJiBzcXVhcmVBcnJheVtyb3ddW2hpZ2hlc3Rjb2wrMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgICAgIGhpZ2hlc3Rjb2wgPSBoaWdoZXN0Y29sICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobG93ZXN0Y29sIDwgaGlnaGVzdGNvbCkgeyAvLyBob29rIHdhcyBtYWRlXHJcbiAgICAgICAgICAgICAgbGV0IGV4dHJhd29yZCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgdGVtcGNvbCA9IGxvd2VzdGNvbDsgdGVtcGNvbCA8PSBoaWdoZXN0Y29sOyArK3RlbXBjb2wpIHtcclxuICAgICAgICAgICAgICAgIGV4dHJhd29yZCA9IGV4dHJhd29yZCArIHNxdWFyZUFycmF5W3Jvd11bdGVtcGNvbF0ubGV0dGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBleHRyYXdvcmRzID0gWy4uLmV4dHJhd29yZHMsIGV4dHJhd29yZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1haW53b3JkLmxlbmd0aCA8IDIpIHsgLy8gSG9yaXpvbnRhbCBwbGF5IG9yIHNpbmdsZSB0aWxlIGRyb3AgdGhhdCBjYW5ub3QgYmUgYSB2ZXJ0aWNhbCBwbGF5XHJcbiAgICAgICAgbGV0IHJvdyA9IGxvd3JvdzsgLy8gbG93cm93IGFuZCBoaWdocm93IHdpbGwgaGF2ZSB0aGUgc2FtZSB2YWx1ZVxyXG4gICAgICAgIC8vIGZpbmQgdGhlIGxvd2VzdCBjb2wgbnVtYmVyIG9mIHRoZSBtYWluIHdvcmQsIHdoaWNoIG1heSBiZSBsb3dlciB0aGFuIHRoYXQgb2YgdGhlIGZpcnN0IHBsYXllZCB0aWxlXHJcbiAgICAgICAgbGV0IGxvd2VzdGNvbCA9IGxvd2NvbDtcclxuICAgICAgICB3aGlsZSAobG93ZXN0Y29sID4gMCAmJiBzcXVhcmVBcnJheVtyb3ddW2xvd2VzdGNvbC0xXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICBsb3dlc3Rjb2wgPSBsb3dlc3Rjb2wgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmaW5kIHRoZSBoaWdoZXN0IGNvbCBudW1iZXIgb2YgdGhlIG1haW4gd29yZCwgd2hpY2ggbWF5IGJlIGhpZ2hlciB0aGFuIHRoYXQgb2YgdGhlIGxhc3QgcGxheWVkIHRpbGVcclxuICAgICAgICBsZXQgaGlnaGVzdGNvbCA9IGhpZ2hjb2w7XHJcbiAgICAgICAgd2hpbGUgKGhpZ2hlc3Rjb2wgPCBlZGdlICYmIHNxdWFyZUFycmF5W3Jvd11baGlnaGVzdGNvbCsxXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICBoaWdoZXN0Y29sID0gaGlnaGVzdGNvbCArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdvcmRzdGFydGNvb3JkID0gYy5CT0FSRF9ST1dfSEVBREVSU1tyb3ddICsgYy5CT0FSRF9DT0xfSEVBREVSU1tsb3dlc3Rjb2xdOyAvLyBob3Jpem9udGFsIHBsYXkgY29vcmRzIHN0YXJ0IHdpdGggcm93IGhlYWRlclxyXG4gICAgICAgIG1haW53b3JkID0gXCJcIjsgLy8gSW4gY2FzZSB3ZSBnb3QgYSAxIGxldHRlciBtYWlud29yZCBpbiB0aGUgcHJldmlvdXMgYmxvY2tcclxuICAgICAgICBleHRyYXdvcmRzID0gW107IC8vIERpdHRvXHJcbiAgICAgICAgZm9yICh2YXIgY29sID0gbG93ZXN0Y29sOyBjb2wgPD0gaGlnaGVzdGNvbDsgKytjb2wpIHtcclxuICAgICAgICAgIG1haW53b3JkID0gbWFpbndvcmQgKyBzcXVhcmVBcnJheVtyb3ddW2NvbF0ubGV0dGVyO1xyXG4gICAgICAgICAgbGV0IGNvb3JkID0gcm93ICsgXCItXCIgKyBjb2w7XHJcbiAgICAgICAgICBpZiAoY3VycmVudGNvb3Jkcy5pbmRleE9mKGNvb3JkKSA+IC0xKSB7IC8vIFRoaXMgdGlsZSB3YXMgcGxheWVkLCBjaGVjayBmb3IgaG9va3NcclxuICAgICAgICAgICAgbGV0IGxvd2VzdHJvdyA9IHJvdztcclxuICAgICAgICAgICAgd2hpbGUgKGxvd2VzdHJvdyA+IDAgJiYgc3F1YXJlQXJyYXlbbG93ZXN0cm93LTFdW2NvbF0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgICAgIGxvd2VzdHJvdyA9IGxvd2VzdHJvdyAtIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGhpZ2hlc3Ryb3cgPSByb3c7XHJcbiAgICAgICAgICAgIHdoaWxlIChoaWdoZXN0cm93IDwgZWRnZSAmJiBzcXVhcmVBcnJheVtoaWdoZXN0cm93KzFdW2NvbF0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgICAgIGhpZ2hlc3Ryb3cgPSBoaWdoZXN0cm93ICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobG93ZXN0cm93IDwgaGlnaGVzdHJvdykgeyAvLyBob29rIHdhcyBtYWRlXHJcbiAgICAgICAgICAgICAgbGV0IGV4dHJhd29yZCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgdGVtcHJvdyA9IGxvd2VzdHJvdzsgdGVtcHJvdyA8PSBoaWdoZXN0cm93OyArK3RlbXByb3cpIHtcclxuICAgICAgICAgICAgICAgIGV4dHJhd29yZCA9IGV4dHJhd29yZCArIHNxdWFyZUFycmF5W3RlbXByb3ddW2NvbF0ubGV0dGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBleHRyYXdvcmRzID0gWy4uLmV4dHJhd29yZHMsIGV4dHJhd29yZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGludmFsaWR3b3JkcyA9IGF3YWl0IHZhbGlkYXRlV29yZHMobWFpbndvcmQsIGV4dHJhd29yZHMpO1xyXG4gICAgICBwbGF5aW5mbyA9IHttYWlud29yZDogbWFpbndvcmQsIGV4dHJhd29yZHM6IGV4dHJhd29yZHMsIHBvczogd29yZHN0YXJ0Y29vcmQsIGludmFsaWR3b3JkczogaW52YWxpZHdvcmRzfTtcclxuICAgICAgcmV0dXJuIHBsYXlpbmZvO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlV29yZHMobWFpbndvcmQsIGV4dHJhd29yZHMpIHtcclxuICAgICAgLy8gQnVpbGQgY29tcGxldGUgbGlzdCBvZiBuZXdseSBmb3JtZWQgd29yZHMgZm9yIHZhbGlkYXRpb24gYWdhaW5zdCBsZXhpY29uXHJcbiAgICAgIGxldCBhbGx3b3JkcyA9IG1haW53b3JkO1xyXG4gICAgICBleHRyYXdvcmRzLmZvckVhY2goKGV3KSA9PiB7XHJcbiAgICAgICAgYWxsd29yZHMgPSBhbGx3b3JkcyArIFwiLFwiICsgZXc7XHJcbiAgICAgIH0pXHJcbiAgICAgIGxldCB1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvRU5BQkxFMks/dmFsaWRhdGU9JyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbS9FTkFCTEUySz92YWxpZGF0ZT0nXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgYWxsd29yZHMudG9Mb2NhbGVMb3dlckNhc2UoKSk7XHJcbiAgICAgIGNvbnN0IGpkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gamRhdGEuaW52YWxpZHdvcmRzO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gYWxsb3dVbmRvTGFzdFR1cm4oKSB7XHJcbiAgICAgIGlmICghYWxsb3dSZXdpbmQpIHtcclxuICAgICAgICBzZXRBbGxvd1Jld2luZCh0cnVlKTtcclxuICAgICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgICBmdW5jOiBcImFsbG93dW5kb1wiLCAvLyBhbGxvdyB1bmRvIGxhc3QgdHVyblxyXG4gICAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50IC8vIHdobyBpcyBhbGxvd2luZyBpdFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIHBlcmZvcm1SZXdpbmQoKSB7XHJcbiAgICAgIC8qIFNlbmQgdW5kb3R1cm4gdG8gc2VydmVyIGFuZCBpdCB3aWxsIHNlbmQgdGhlIHVwZGF0ZWQgZ2FtZSBkYXRhIHRvIGdhbWUgY2xpZW50cywgaW5jbHVkaW5nIHRoaXMgb25lICovXHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcInVuZG90dXJuXCIgLy8gdW5kbyBsYXN0IHR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCByZWNhbGxUaWxlcyA9ICgpID0+IHtcclxuICAgICAgc2V0U3F1YXJlQXJyYXkoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzbmFwc2hvdC5zcXVhcmVBcnJheSkpKTsgLy8gRGVlcCBjb3B5XHJcbiAgICAgIHNldFB0aWxlcyhbLi4uc25hcHNob3QucHRpbGVzXSk7XHJcbiAgICAgIHNldEd0aWxlcyhbLi4uc25hcHNob3QuZ3RpbGVzXSk7XHJcbiAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgICBzZXRSY2QoWy0xLC0xLGMuRElSX05PTkVdKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBwbGF5ZXJQYXNzVHVybiA9ICgpID0+IHtcclxuICAgICAgbGV0IG5ld01vdmUgPSB7Ynk6IHBhcnRpY2lwYW50LCB0eXBlOiBjLk1PVkVfVFlQRV9QQVNTfTtcclxuICAgICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgICAgbGV0IG5ld1dob3NldHVybiA9IGlzRG91YmxlUGFzcyhuZXdNb3ZlcykgPyBjLldIT1NFX1RVUk5fR0FNRU9WRVIgOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IGMuV0hPU0VfVFVSTl9HVUFSRFMgOiBjLldIT1NFX1RVUk5fUFJJU09ORVJTOyAvLyBJZiBib3RoIHBsYXllcnMgcGFzcyB0aGVuIGVuZCB0aGUgZ2FtZVxyXG4gICAgICBsZXQgbmV3U3luY3N0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgcmVjYWxsVGlsZXMoKTsgLy8gSW4gY2FzZSB0aGV5IHB1dCBzb21lIHRpbGVzIG9uIHRoZSBib2FyZCBiZWZvcmUgY2xpY2tpbmcgUGFzc1xyXG4gICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICBzZXRTeW5jc3RhbXAobmV3U3luY3N0YW1wKTtcclxuICAgICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gXCJlcHRcIiA6IFwiZWd0XCIsIC8vIGVuZCBwcmlzb25lcnMgb3IgZ3VhcmRzIHR1cm5cclxuICAgICAgICAgIHRpbWVzdGFtcDogbmV3U3luY3N0YW1wLCAvLyBmb3IgZGF0YSBzeW5jIGxvZ2ljXHJcbiAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LCAvLyB3aG8gcGFzc2VkIHRoZWlyIHR1cm5cclxuICAgICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuLCAvLyBlaXRoZXIgaXQgaXMgbm93IG9wcG9uZW50cyB0dXJuIG9yIHRoZSBwYXNzIGVuZGVkIHRoZSBnYW1lXHJcbiAgICAgICAgICBtb3ZlOiBuZXdNb3ZlIC8vIHRoZSBtb3ZlIHRoYXQgd2FzIG1hZGVcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdEdhbWVEYXRhID0gKCkgPT4ge1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgIGZ1bmM6IFwicmVxdWVzdGdhbWVkYXRhXCIsIC8vIHJlcXVlc3QgZ2FtZSBkYXRhXHJcbiAgICAgICAgICBzeW5jc3RhbXA6IHN5bmNzdGFtcCAvLyBzbyBzZXJ2ZXIgY2FuIGRlY2lkZSB3aGV0aGVyIEkgYW0gdXAgdG8gZGF0ZVxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgcmVxdWVzdFN5bmNEYXRhID0gKCkgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhgU2VuZCByZXF1ZXN0c3luY2RhdGEgJHtzeW5jc3RhbXB9YCk7XHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LFxyXG4gICAgICAgICAgZnVuYzogXCJyZXF1ZXN0c3luY2RhdGFcIiAvLyByZXF1ZXN0IHN5bmMgZGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAocGFydGljaXBhbnQgIT09IHdob3NldHVybikge3JldHVybjt9XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgIGVuZFBsYXllcnNUdXJuKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICByZWNhbGxUaWxlcygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgbGV0dGVydGVzdCA9IC9eW0EtWmEtelxcP10kLzsgLy8gc2luZ2xlIGxldHRlciBvciBxdWVzdGlvbiBtYXJrIGtleSBwcmVzc2VkXHJcbiAgICAgIGlmIChldmVudC5rZXkubWF0Y2gobGV0dGVydGVzdCkpIHtcclxuICAgICAgICBsZXQgbGV0dGVyID0gZXZlbnQua2V5LnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgbGV0IHJhY2sgPSB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMgPyBwdGlsZXMgOiBndGlsZXM7XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGlvbiA9IHJhY2suaW5kZXhPZihsZXR0ZXIpO1xyXG4gICAgICAgIGlmIChuZXdTZWxlY3Rpb24gPT09IC0xKSB7XHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSByYWNrLmluZGV4T2YoXCI/XCIpOyAvLyBVc2UgdGhlIGJsYW5rIGlmIHRoZXkgaGF2ZSBvbmVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5ld1NlbGVjdGlvbiA+IC0xKSB7IC8vIFByZXNzZWQgbGV0dGVyIGlzIG9uIHRoZSByYWNrXHJcbiAgICAgICAgICBsZXQgcm93ID0gcmNkWzBdO1xyXG4gICAgICAgICAgbGV0IGNvbCA9IHJjZFsxXTtcclxuICAgICAgICAgIGxldCBkaXIgPSByY2RbMl07XHJcbiAgICAgICAgICBpZiAocm93ID4tMSAmJiBjb2wgPiAtMSAmJiBkaXIgIT09IGMuRElSX05PTkUpIHsgLy8gcm93LCBjb2wsIGRpciBhcmUgc2V0IHRvIGFjY2VwdCBrZXlzdHJva2VcclxuICAgICAgICAgICAgLy8gTmVlZCB0byBmaWd1cmUgb3V0IG5leHQgc3FhdXJlIHRvIGF1dG8tcGxhY2UgYSB0aWxlXHJcbiAgICAgICAgICAgIGxldCBuZXdSY2QgPSByY2Q7XHJcbiAgICAgICAgICAgIGlmIChkaXIgPT09IGMuRElSX1JJR0hUKSB7IC8vIHBsYXlpbmcgcmlnaHR3YXJkc1xyXG4gICAgICAgICAgICAgIGxldCBuZXdjID0gLTE7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgdGVtcGNvbCA9IGNvbCArIDE7IHRlbXBjb2wgPCBlZGdlICsgMSAmJiBuZXdjID09PSAtMTsgdGVtcGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3F1YXJlQXJyYXlbcm93XVt0ZW1wY29sXS51c2VkYnkgPT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICAgICAgICAgIG5ld2MgPSB0ZW1wY29sO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAobmV3YyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIG5ld1JjZCA9IFstMSwtMSxjLkRJUl9OT05FXTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3UmNkID0gW3JvdywgbmV3YywgYy5ESVJfUklHSFRdO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJvdyxjb2wsbmV3U2VsZWN0aW9uLG5ld1JjZCk7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTsgLy8gd2hlbiB0aGV5IGFyZSB0eXBpbmcgdGhleSBhcmUgbm90IHNlbGVjdGluZyByYWNrIHRpbGVzIGJ5IGNsaWNraW5nIHRoZW0gb24gdGhlIHJhY2tcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRpciA9PT0gYy5ESVJfRE9XTikgeyAvLyBwbGF5aW5nIGRvd253YXJkc1xyXG4gICAgICAgICAgICAgIGxldCBuZXdyID0gLTE7XHJcbiAgICAgICAgICAgICAgbGV0IG51bXJvd3MgPSAocmFja3NpemUqMikrMTtcclxuICAgICAgICAgICAgICBmb3IgKHZhciB0ZW1wcm93ID0gcm93ICsgMTsgdGVtcHJvdyA8IG51bXJvd3MgJiYgbmV3ciA9PT0gLTE7IHRlbXByb3crKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZUFycmF5W3RlbXByb3ddW2NvbF0udXNlZGJ5ID09PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgICAgICAgICBuZXdyID0gdGVtcHJvdztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKG5ld3IgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSY2QgPSBbLTEsLTEsYy5ESVJfTk9ORV07XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1JjZCA9IFtuZXdyLCBjb2wsIGMuRElSX0RPV05dO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJvdyxjb2wsbmV3U2VsZWN0aW9uLG5ld1JjZCk7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTsgLy8gd2hlbiB0aGV5IGFyZSB0eXBpbmcgdGhleSBhcmUgbm90IHNlbGVjdGluZyByYWNrIHRpbGVzIGJ5IGNsaWNraW5nIHRoZW0gb24gdGhlIHJhY2tcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQmFja3NwYWNlXCIgJiYgY3VycmVudGNvb3Jkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gU2FtZSBhcyBjbGlja2luZyBvbiBhIHBsYXllZC10aGlzLW1vdmUgdGlsZSBpbiB0ZXJtcyBvZiByZXR1cm5pbmcgdGhlIHRpbGUgdG8gdGhlIHJhY2tcclxuICAgICAgICAvLyBIb3dldmVyIHdlIGFsc28gd2FudCB0byBzZXQgdXAgcmNkIHNvIHRoZXkgY2FuIHByZXNzIHRoZSBrZXkgdGhleSBtZWFudCBhbmQgY29udGludWVcclxuICAgICAgICBsZXQgY29vcmQgPSBjdXJyZW50Y29vcmRzW2N1cnJlbnRjb29yZHMubGVuZ3RoIC0gMV07IC8vIHRpbGUgdG8gcmV0dXJuIHRvIHJhY2tcclxuICAgICAgICBsZXQgcm93ID0gcGFyc2VJbnQoY29vcmQuc3BsaXQoXCItXCIpWzBdKTtcclxuICAgICAgICBsZXQgY29sID0gcGFyc2VJbnQoY29vcmQuc3BsaXQoXCItXCIpWzFdKTtcclxuICAgICAgICBsZXQgbmV3Q3VycmVudGNvb3JkcyA9IFsuLi5jdXJyZW50Y29vcmRzXTtcclxuICAgICAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICAgICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgICAgIGxldCBuZXdTcXVhcmVBcnJheSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3F1YXJlQXJyYXkpKTsgLy8gRGVlcCBjb3B5XHJcbiAgICAgICAgbGV0IG5ld1NxdWFyZUFycmF5Um93ID0gbmV3U3F1YXJlQXJyYXlbcm93XTtcclxuICAgICAgICBsZXQgbmV3U3F1YXJlQXJyYXlDZWxsID0gbmV3U3F1YXJlQXJyYXlSb3dbY29sXTtcclxuICAgICAgICBsZXQgbmV3UmNkID0gWy0xLC0xLGMuRElSX05PTkVdO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3Rpb24gPSBzZWxlY3Rpb247XHJcbiAgICAgICAgbmV3Q3VycmVudGNvb3Jkcy5zcGxpY2UoY3VycmVudGNvb3Jkcy5sZW5ndGgtMSwxKTtcclxuICAgICAgICBsZXQgcmV0dXJuZWRUaWxlID0gc3F1YXJlQXJyYXlbcm93XVtjb2xdLmxldHRlcjtcclxuICAgICAgICBpZiAod2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTKSB7XHJcbiAgICAgICAgICBuZXdQdGlsZXMucHVzaChyZXR1cm5lZFRpbGUpO1xyXG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3UHRpbGVzLmxlbmd0aC0xO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXdHdGlsZXMucHVzaChyZXR1cm5lZFRpbGUpO1xyXG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3R3RpbGVzLmxlbmd0aC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdTcXVhcmVBcnJheUNlbGwudXNlZGJ5ID0gYy5VU0VEX0JZX05PTkU7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlDZWxsLmxldHRlciA9IGMuTEVUVEVSX05PTkU7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlSb3dbY29sXSA9IG5ld1NxdWFyZUFycmF5Q2VsbDtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheVtyb3ddID0gWy4uLm5ld1NxdWFyZUFycmF5Um93XTtcclxuICAgICAgICBsZXQgZGlyID0gcmNkWzJdO1xyXG4gICAgICAgIGlmIChkaXIgIT09IGMuRElSX05PTkUpIHtcclxuICAgICAgICAgIC8vIGRpcmVjdGlvbiB3YXMgc2V0IHNvIGtlZXAgaXRcclxuICAgICAgICAgIG5ld1JjZCA9IFtyb3csY29sLGRpcl07XHJcbiAgICAgICAgICBpZiAoY3VycmVudGNvb3Jkcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0aW9uID0gLTE7IC8vIGlmIHRoZXkgYmFja3NwYWNlIGFsbCB0aGUgbGV0dGVycyBvZmYgbGVhdmUgcmFjayB0aWxlIHVuc2VsZWN0ZWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q3VycmVudGNvb3JkcyhuZXdDdXJyZW50Y29vcmRzKTtcclxuICAgICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgICBzZXRTcXVhcmVBcnJheShuZXdTcXVhcmVBcnJheSk7XHJcbiAgICAgICAgc2V0UmNkKG5ld1JjZCk7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZU1vdmVDbGljayA9IChfbWkpID0+IHt9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaXNvbmJyZWFrXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWNvbnRhaW5lciB3My10ZWFsIHRvcEJhckhlaWdodFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LW1pZGRsZVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXlIZWFkaW5nRm9udFwiPlByaXNvbiBCcmVhazwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS10b3BsZWZ0IHczLWJsYWNrIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIEdhbWUgaWQ6IHtnYW1laWR9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1ib3R0b21sZWZ0IHczLW9yYW5nZSB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICBQcmlzb25lcnM6IHtcclxuICAgICAgICAgICAgICBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IG5pY2tuYW1lXHJcbiAgICAgICAgICAgICAgOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUyA/IG9wcG5hbWVcclxuICAgICAgICAgICAgICA6ICdTZWNyZXQnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktdG9wcmlnaHQgdzMtYmxhY2sgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIuLi8uLi9cIn0+XHJcbiAgICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktYm90dG9tcmlnaHQgdzMtb3JhbmdlIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIEd1YXJkczoge1xyXG4gICAgICAgICAgICAgIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gb3BwbmFtZVxyXG4gICAgICAgICAgICAgIDogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMgPyBuaWNrbmFtZVxyXG4gICAgICAgICAgICAgIDogJ1NlY3JldCdcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGJUaWxlQW5kTW92ZXNPdXRlclwiPlxyXG4gICAgICAgICAgICAgIDxTaG93VW5zZWVuVGlsZXNcclxuICAgICAgICAgICAgICAgIHRpbGVzPXt0aWxlc31cclxuICAgICAgICAgICAgICAgIG90aGVydGlsZXM9e1xyXG4gICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IGd0aWxlc1xyXG4gICAgICAgICAgICAgICAgICA6IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTID8gcHRpbGVzXHJcbiAgICAgICAgICAgICAgICAgIDogW119IC8vIE9ic2VydmVycyBzZWUgYm90aCByYWNrcyBzbyBub3RoaW5nIHRvIGV4Y2x1ZGUgZnJvbSB0aWxlYmFnIGFzIHVuc2VlblxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8U2hvd01vdmVzIG1vdmVzPXttb3Zlc30gb25tb3ZlY2xpY2s9eyhtaSkgPT4gaGFuZGxlTW92ZUNsaWNrKG1pKX0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwYlBsYXllck91dGVyU2VjdGlvblwiPlxyXG4gICAgICAgICAgICB7cGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgP1xyXG4gICAgICAgICAgICAgIDxQbGF5ZXJTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICByYWNrdGlsZXM9e3B0aWxlc31cclxuICAgICAgICAgICAgICAgIHdob3NldHVybj17d2hvc2V0dXJufVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IGhhbmRsZVJhY2tUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja0ZpbmlzaFR1cm49eygpID0+IGVuZFBsYXllcnNUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrVGlsZVJlY2FsbD17KCkgPT4gcmVjYWxsVGlsZXMoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tUaWxlRXhjaGFuZ2U9eygpID0+IHN3YXBQbGF5ZXJzVGlsZXMoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tQYXNzUGxheT17KCkgPT4gcGxheWVyUGFzc1R1cm4oKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tVbmRvTGFzdFBsYXk9eygpID0+IHBlcmZvcm1SZXdpbmQoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tBbGxvd1VuZG89eygpID0+IGFsbG93VW5kb0xhc3RUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudD17cGFydGljaXBhbnR9XHJcbiAgICAgICAgICAgICAgICBtb3Zlcz17bW92ZXN9XHJcbiAgICAgICAgICAgICAgICBhbGxvd1Jld2luZD17YWxsb3dSZXdpbmR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgOnBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTID9cclxuICAgICAgICAgICAgICA8UGxheWVyU2VjdGlvblxyXG4gICAgICAgICAgICAgICAgcmFja3RpbGVzPXtndGlsZXN9XHJcbiAgICAgICAgICAgICAgICB3aG9zZXR1cm49e3dob3NldHVybn1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KHRpKSA9PiBoYW5kbGVSYWNrVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tGaW5pc2hUdXJuPXsoKSA9PiBlbmRQbGF5ZXJzVHVybigpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1RpbGVSZWNhbGw9eygpID0+IHJlY2FsbFRpbGVzKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrVGlsZUV4Y2hhbmdlPXsoKSA9PiBzd2FwUGxheWVyc1RpbGVzKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrUGFzc1BsYXk9eygpID0+IHBsYXllclBhc3NUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrVW5kb0xhc3RQbGF5PXsoKSA9PiBwZXJmb3JtUmV3aW5kKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrQWxsb3dVbmRvPXsoKSA9PiBhbGxvd1VuZG9MYXN0VHVybigpfVxyXG4gICAgICAgICAgICAgICAgcGFydGljaXBhbnQ9e3BhcnRpY2lwYW50fVxyXG4gICAgICAgICAgICAgICAgbW92ZXM9e21vdmVzfVxyXG4gICAgICAgICAgICAgICAgYWxsb3dSZXdpbmQ9e2FsbG93UmV3aW5kfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUGxheWVySW5uZXJTZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUGxheWVyVGl0bGVcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntjLlBBUlRZX0lDT05fUFJJU09ORVJTfTwvaT4mbmJzcDt7Yy5QQVJUWV9USVRMRV9QUklTT05FUlN9Jm5ic3A7PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57Yy5QQVJUWV9JQ09OX1BSSVNPTkVSU308L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAge3B0aWxlcyAmJiBwdGlsZXMubWFwKCh0LCB0aSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxPYnNlcnZlclJhY2tUaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgT2JzZXJ2ZXJQcmlzb25lcnNSYWNrVGlsZSR7dGl9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudD0nUCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxldmFsdWU9e3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZWluZGV4PXt0aX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJQbGF5ZXJUaXRsZVwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+e2MuUEFSVFlfSUNPTl9HVUFSRFN9PC9pPiZuYnNwO3tjLlBBUlRZX1RJVExFX0dVQVJEU30mbmJzcDs8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntjLlBBUlRZX0lDT05fR1VBUkRTfTwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICB7Z3RpbGVzICYmIGd0aWxlcy5tYXAoKHQsIHRpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE9ic2VydmVyUmFja1RpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BPYnNlcnZlckd1YXJkc1JhY2tUaWxlJHt0aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50PSdHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGV2YWx1ZT17dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlaW5kZXg9e3RpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIHtwYXJ0aWNpcGFudCA9PT0gd2hvc2V0dXJuID9cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIG9uS2V5RG93bkNhcHR1cmU9e2hhbmRsZUtleURvd259PlxyXG4gICAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICAgIHNxdWFyZUFycmF5PXtzcXVhcmVBcnJheX1cclxuICAgICAgICAgICAgICAgICAgcmNkPXtyY2R9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhyaSwgY2kpID0+IGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socmksIGNpLCAtMSxudWxsKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICAgIHNxdWFyZUFycmF5PXtzcXVhcmVBcnJheX1cclxuICAgICAgICAgICAgICAgICAgcmNkPXtyY2R9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICA8U2hvd1Jlc2N1ZXMgcmVzY3Vlcz17cmVzY3Vlc30gLz5cclxuICAgICAgICAgICAgPENoYXQgZ2FtZWlkPXtnYW1laWR9IGNsaWVudD17Y2xpZW50fSBuaWNrbmFtZT17bmlja25hbWV9IG1zZ3M9e2NoYXRtc2dzfSBzZXRNc2dzPXtzZXRDaGF0bXNnc30gcGFydGljaXBhbnQ9e3BhcnRpY2lwYW50fS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktY29udGFpbmVyIHczLXRlYWwgdG9wQmFySGVpZ2h0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktbWlkZGxlIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAge3dob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX0dBTUVPVkVSID9cclxuICAgICAgICAgICAgICA8aDE+R2FtZSBPdmVyITwvaDE+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICA8cD57Yy5KT0tFX0FSUkFZW2pva2VpbmRleF19PC9wPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG5jb25zdCBPYnNlcnZlclJhY2tUaWxlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRVbnNlbGVjdGVkID0gXCJVbnNlbGVjdGVkIFwiO1xyXG4gIGNvbnN0IHVOb3RVID0gcHJvcHMudGlsZXZhbHVlID09PSBcIlFcIiA/IFwidSBcIiA6IFwiXCI7XHJcbiAgY29uc3QgdGlsZWNsYXNzID0gXCJwYlRpbGVPblJhY2sgXCIgKyBzZWxlY3RlZFVuc2VsZWN0ZWQgKyB1Tm90VSArIHByb3BzLnBhcnRpY2lwYW50O1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICAgIGtleT17cHJvcHMudGlsZWluZGV4fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXt0aWxlY2xhc3N9XHJcbiAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlT25SYWNrVGV4dFwiPntwcm9wcy50aWxldmFsdWV9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IEdhbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==