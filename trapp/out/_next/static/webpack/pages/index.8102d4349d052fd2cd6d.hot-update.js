self["webpackHotUpdate_N_E"]("pages/index",{

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
/* harmony import */ var _pb_playerSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pb/playerSection */ "./pages/pb/playerSection.js");
/* harmony import */ var _pb_board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pb/board */ "./pages/pb/board.js");
/* harmony import */ var _pb_unseenTilesSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pb/unseenTilesSection */ "./pages/pb/unseenTilesSection.js");
/* harmony import */ var _pb_movesSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pb/movesSection */ "./pages/pb/movesSection.js");
/* harmony import */ var _pb_rescuesSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pb/rescuesSection */ "./pages/pb/rescuesSection.js");
/* harmony import */ var _pb_chatSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pb/chatSection */ "./pages/pb/chatSection.js");
/* harmony import */ var _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/pb/prisonBreakConstants */ "./lib/pb/prisonBreakConstants.js");
/* harmony import */ var _lib_pb_initialSquareArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/pb/initialSquareArray */ "./lib/pb/initialSquareArray.js");
/* harmony import */ var _lib_pb_anyUnusedEscapeHatches__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/pb/anyUnusedEscapeHatches */ "./lib/pb/anyUnusedEscapeHatches.js");
/* harmony import */ var _lib_pb_buildGamedataFromApidata__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib/pb/buildGamedataFromApidata */ "./lib/pb/buildGamedataFromApidata.js");
/* harmony import */ var _lib_pb_isDoublePass__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../lib/pb/isDoublePass */ "./lib/pb/isDoublePass.js");
/* harmony import */ var _lib_scrollToBottom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../lib/scrollToBottom */ "./lib/scrollToBottom.js");
/* harmony import */ var _lib_usePrevious__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../lib/usePrevious */ "./lib/usePrevious.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\pb\\game.js",
    _s = $RefreshSig$();

 //import Link from "next/link";















const Game = ({
  setWhereto,
  isrejoin,
  participant // Prisoners, Guards, or Observer (not implemented)
  ,
  gameid,
  nickname = '' // Give it a default for Build
  ,
  wsmessage,
  client,
  racksize = 4 // Option for rack size (give it a default for Build)

}) => {
  _s();

  const {
    0: snats,
    1: setSnats
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(['Hello. This space is for debugging messages.']);
  const {
    0: syncstamp,
    1: setSyncstamp
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const middle = racksize; // Middle element in row or column array

  const edge = racksize * 2; // Last element in row or column array

  const initialtiles = racksize === 6 ? _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.TILEBAG6 : racksize === 7 ? _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.TILEBAG7 : racksize === 5 ? _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.TILEBAG5 : _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.TILEBAG4;
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
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.WHOSE_TURN_PRISONERS); // game starts with prisoners play

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
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([-1, -1, _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.DIR_NONE]);
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
  const prevRescues = (0,_lib_usePrevious__WEBPACK_IMPORTED_MODULE_14__.usePrevious)(rescues);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // This code executes the first time Game is used only
    initializeRoutine();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let msg = wsmessage;
    if (msg !== '') processGameMessage(msg);
  }, [wsmessage]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_lib_scrollToBottom__WEBPACK_IMPORTED_MODULE_13__.scrollToBottom)("ScrollableMoves");
  }, [moves]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_lib_scrollToBottom__WEBPACK_IMPORTED_MODULE_13__.scrollToBottom)("ScrollableChat");
  }, [chatmsgs]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (rescues > prevRescues) {
      var myaudio = document.createElement('audio'); // Observers hear yippee

      myaudio.src = participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_GUARDS ? "https://tilerunner.github.io/OneGotAway.m4a" : "https://tilerunner.github.io/yippee.m4a";
      myaudio.play();
    }
  }, [rescues]); // Play a sound when a rescue is made

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let newji = jokeindex + 1;

    if (newji >= _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.JOKE_ARRAY.length) {
      newji = 0;
    }

    setJokeindex(newji);
  }, [whoseturn]); // want up to date value of whoseturn to decide whether to ask for an update

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const interval = setInterval(() => {
      if (participant !== whoseturn && whoseturn !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.WHOSE_TURN_GAMEOVER) {
        requestSyncData(); // Send a request for sync data when waiting for their move
      } // Send a request for the timestamp of the last event (syncstamp)
      // Server will send func=providesyncstamp with a syncstamp value
      // ProcessGameMessage will check syncstamp from the server to syncstamp here
      // If different it will send func=requestgamedata, server will send us providegamedata, and we sync

    }, _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PING_INTERVAL); // this many milliseconds between above code block executions

    return () => clearInterval(interval);
  });

  const initializeRoutine = () => {
    let firstSquareArray = (0,_lib_pb_initialSquareArray__WEBPACK_IMPORTED_MODULE_9__.initialSquareArray)(racksize);
    setSquareArray(firstSquareArray);

    if (isrejoin) {
      rejoinGame();
    } else if (participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS) {
      startGame(firstSquareArray); // Prisoners starting the game
    } else if (participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_GUARDS) {
      joinGame(); // Guards joining the game
    } else {
      startObservingGame(); // Observer viewing the game
    }
  };

  const sendNextMessage = jMessage => {
    let newSnats = [...snats];
    newSnats.push(`Sending message: func=${jMessage.func} at ${Date.now().format('h:MM:ss')}`);
    client.send(jMessage);
    setSnats(newSnats);
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
    sendNextMessage({
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
    sendNextMessage({
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
    sendNextMessage({
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
    sendNextMessage({
      gameid: gameid,
      type: "pb",
      func: "startObserving"
    });
  };

  function putAtMoveStart() {
    setSelection(-1);
    setAllowRewind(false);
    setRcd(-1, -1, _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.DIR_NONE);
    setCurrentcoords([]);
  }

  function processGameMessage(message) {
    let messageData = JSON.parse(message);

    if (messageData.gameid === gameid && messageData.type === "pb") {
      // This instance of a prison break game
      let newSnats = [...snats];
      newSnats.push(`Getting message: func=${messageData.func}`);
      setSnats(newSnats);

      if (messageData.func === "providegamedata") {
        let gd = (0,_lib_pb_buildGamedataFromApidata__WEBPACK_IMPORTED_MODULE_11__.buildGamedataFromApidata)(messageData.apidata); // Server providing game data

        setSyncstamp(gd.syncstamp); // No opponent name for observers

        if (participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS) {
          setOppname(gd.gname);
        } else if (participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_GUARDS) {
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
        if (participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TITLE_PRISONERS) {
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

    if (newSelection > -1 && newSquareArrayCell.usedby === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE) {
      // tile is selected from rack and clicked square is not used yet
      let selectedTile = whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.WHOSE_TURN_PRISONERS ? newPtiles[newSelection] : newGtiles[newSelection];
      newSquareArrayCell.letter = selectedTile;
      newSquareArrayCell.usedby = whoseturn;
      newSquareArrayRow[ci] = newSquareArrayCell;
      newSquareArray[ri] = [...newSquareArrayRow];
      whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.WHOSE_TURN_PRISONERS ? newPtiles.splice(newSelection, 1) : newGtiles.splice(newSelection, 1);

      if (whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.WHOSE_TURN_PRISONERS && newSelection === newPtiles.length) {
        newSelection = newSelection - 1;
      }

      if (whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.WHOSE_TURN_GUARDS && newSelection === newGtiles.length) {
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
      whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.WHOSE_TURN_PRISONERS ? newPtiles.push(newSquareArrayCell.letter) : newGtiles.push(newSquareArrayCell.letter);
      newSquareArrayCell.usedby = _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE;
      newSquareArrayCell.letter = _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.LETTER_NONE;
      newSquareArrayRow[ci] = newSquareArrayCell;
      newSquareArray[ri] = [...newSquareArrayRow];
      setSelection(whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.WHOSE_TURN_PRISONERS ? newPtiles.length - 1 : newGtiles.length - 1);
      newCurrentcoords.splice(cci, 1);
      setSquareArray(newSquareArray);
      setPtiles(newPtiles);
      setGtiles(newGtiles);
      setCurrentcoords(newCurrentcoords);
      setRcd(-1, -1, _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.DIR_NONE); // make player click again to set direction

      return;
    } // They didn't click a square to place a selected tile there
    // They didn't click a square to remove an existing tile


    if (newSquareArrayCell.usedby === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE) {
      // There is nothing on the square so they are picking where to place the next tile via keyboard
      let newDirection = rcd[0] !== ri || rcd[1] !== ci ? _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.DIR_RIGHT : //click new square, start with right
      rcd[2] === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.DIR_RIGHT ? _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.DIR_DOWN : //click same square that was right, change to down
      rcd[2] === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.DIR_DOWN ? _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.DIR_NONE : //click same square that was down, change to no direction
      _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.DIR_RIGHT; // click same square that was no direction, change to right

      newRcd = [ri, ci, newDirection];
      setRcd(newRcd);
      return;
    }
  };

  const handleRackTileClick = tileindex => {
    if (participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_OBSERVER) {
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


    let newrack = participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS ? [...ptiles] : [...gtiles];
    let movefrom = selection;
    let movetile = newrack[movefrom];
    let moveto = tileindex;
    newrack.splice(movefrom, 1); // remove tile from original selected position

    newrack.splice(moveto, 0, movetile); // insert moved tile at the newly selected position

    participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS ? setPtiles(newrack) : setGtiles(newrack);
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

    if (participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS) {
      let escapehatches = ["0-0", "0-" + middle, "0-" + edge, middle + "-0", middle + "-" + edge, edge + "-0", edge + "-" + middle, edge + "-" + edge]; // coords of escape hatches

      for (var i = 0; i < currentcoords.length; i++) {
        if (escapehatches.indexOf(currentcoords[i]) > -1) {
          newRescues = newRescues + 1;
        }
      }
    }

    let newPlayerTiles = participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS ? [...ptiles] : [...gtiles];
    let newTiles = [...tiles];

    while (newPlayerTiles.length < racksize && newTiles.length > 0) {
      let rand = Math.floor(Math.random() * newTiles.length);
      newPlayerTiles.push(newTiles[rand]);
      newTiles.splice(rand, 1);
    }

    newPlayerTiles.sort();
    let newWhoseturn = newPlayerTiles.length === 0 ? _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.WHOSE_TURN_GAMEOVER : participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS ? _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.WHOSE_TURN_GUARDS : _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS;

    if (!(0,_lib_pb_anyUnusedEscapeHatches__WEBPACK_IMPORTED_MODULE_10__.anyUnusedEscapeHatches)(squareArray)) {
      newWhoseturn = _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.WHOSE_TURN_GAMEOVER; // No escape hatches left
    }

    let newMove = {
      by: participant,
      type: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.MOVE_TYPE_PLAY,
      mainword: playinfo.mainword,
      extrawords: playinfo.extrawords,
      pos: playinfo.pos
    };
    let newMoves = [...moves, newMove];
    let newSyncstamp = Date.now();
    putAtMoveStart();
    setSyncstamp(newSyncstamp);
    setWhoseturn(newWhoseturn);
    participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS ? setPtiles(newPlayerTiles) : setGtiles(newPlayerTiles);
    setTiles(newTiles);
    setMoves(newMoves);
    setRescues(newRescues);
    setSnapshot({
      squareArray: JSON.parse(JSON.stringify(squareArray)),
      // Deep copy
      ptiles: participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS ? [...newPlayerTiles] : [...ptiles],
      gtiles: participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS ? [...gtiles] : [...newPlayerTiles]
    });
    let jsend = {
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      func: participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS ? "ept" : "egt",
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
    participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS ? jsend.ptiles = newPlayerTiles : jsend.gtiles = newPlayerTiles;
    sendNextMessage(jsend);
  }

  ;

  const swapPlayersTiles = () => {
    if (tiles.length < racksize) {
      window.alert("Need " + racksize + " tiles in the bag to exchange");
      return;
    }

    setSnat(`Swapping rack.`);
    let newPlayerTiles = [];
    let newTiles = [...tiles];

    while (newPlayerTiles.length < racksize && newTiles.length > 0) {
      let rand = Math.floor(Math.random() * newTiles.length);
      newPlayerTiles.push(newTiles[rand]);
      newTiles.splice(rand, 1);
    }

    newPlayerTiles.sort();
    participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS ? newTiles = [...newTiles, ...snapshot.ptiles] : newTiles = [...newTiles, ...snapshot.gtiles];
    newTiles.sort();
    let newMove = {
      by: participant,
      type: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.MOVE_TYPE_SWAP
    };
    let newMoves = [...moves, newMove];
    let newSyncstamp = Date.now();
    putAtMoveStart();
    setSyncstamp(newSyncstamp);
    setSquareArray(JSON.parse(JSON.stringify(snapshot.squareArray))); // Deep copy

    setWhoseturn(participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS ? _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.WHOSE_TURN_GUARDS : _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.WHOSE_TURN_PRISONERS);
    participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS ? setPtiles(newPlayerTiles) : setGtiles(newPlayerTiles);
    setTiles(newTiles);
    setMoves(newMoves);
    setSnapshot({
      squareArray: JSON.parse(JSON.stringify(snapshot.squareArray)),
      // Deep copy
      ptiles: participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS ? [...newPlayerTiles] : [...ptiles],
      gtiles: participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS ? [...gtiles] : [...newPlayerTiles]
    });
    let jsend = {
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      func: participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS ? "ept" : "egt",
      // end prisoners or guards turn
      timestamp: newSyncstamp,
      // for data sync logic
      sender: participant,
      whoseturn: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.WHOSE_TURN_GUARDS,
      // swap never ends the game so go to opponent
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      move: newMove // the move that was made

    };
    participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS ? jsend.ptiles = newPlayerTiles : jsend.gtiles = newPlayerTiles;
    sendNextMessage(jsend);
  };

  function isPlayValid() {
    // Check if this is the first word since it affects the validity rules
    let firstWord = true;
    let nummoves = moves.length;

    for (var moveindex = 0; firstWord && moveindex < nummoves; ++moveindex) {
      if (moves[moveindex].type === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.MOVE_TYPE_PLAY) {
        firstWord = false;
      }
    } // First word must hit center square


    if (firstWord && squareArray[middle][middle].usedby === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE) {
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


      if (!(temprow > 0 && squareArray[temprow - 1][tempcol].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE) && !(tempcol > 0 && squareArray[temprow][tempcol - 1].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE) && !(temprow < edge && squareArray[temprow + 1][tempcol].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE) && !(tempcol < edge && squareArray[temprow][tempcol + 1].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE)) {
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
        if (squareArray[temprow][tempcol].usedby === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE) {
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

          if (lowrow === highrow && temprow > 0 && squareArray[temprow - 1][tempcol].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE) {
            hookmade = true;
          }

          if (lowrow === highrow && temprow < edge && squareArray[temprow + 1][tempcol].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE) {
            hookmade = true;
          }

          if (lowcol === highcol && tempcol > 0 && squareArray[temprow][tempcol - 1].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE) {
            hookmade = true;
          }

          if (lowcol === highcol && tempcol < edge && squareArray[temprow][tempcol + 1].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE) {
            hookmade = true;
          }
        }
      }
    }

    if (!firstWord) {
      // We already found play through a tile between first and last played tile
      // Now check if played word has a tile before first or after last played tile
      if (lowrow === highrow && lowcol > 0 && squareArray[lowrow][lowcol - 1].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE) {
        playthru = true;
      }

      if (lowrow === highrow && highcol < edge && squareArray[lowrow][highcol + 1].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE) {
        playthru = true;
      }

      if (lowcol === highcol && lowrow > 0 && squareArray[lowrow - 1][lowcol] !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE) {
        playthru = true;
      }

      if (lowcol === highcol && highrow < edge && squareArray[highrow + 1][lowcol].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE) {
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

      while (lowestrow > 0 && squareArray[lowestrow - 1][col].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE) {
        lowestrow = lowestrow - 1;
      } // find the highest row number of the main word, which may be higher than that of the last played tile


      let highestrow = highrow;

      while (highestrow < edge && squareArray[highestrow + 1][col].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE) {
        highestrow = highestrow + 1;
      }

      wordstartcoord = _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.BOARD_COL_HEADERS[col] + _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.BOARD_ROW_HEADERS[lowestrow]; // vertical play coords start with col header

      for (var row = lowestrow; row <= highestrow; ++row) {
        mainword = mainword + squareArray[row][col].letter;
        let coord = row + "-" + col;

        if (currentcoords.indexOf(coord) > -1) {
          // This tile was played, check for hooks
          let lowestcol = col;

          while (lowestcol > 0 && squareArray[row][lowestcol - 1].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE) {
            lowestcol = lowestcol - 1;
          }

          let highestcol = col;

          while (highestcol < edge && squareArray[row][highestcol + 1].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE) {
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

      while (lowestcol > 0 && squareArray[row][lowestcol - 1].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE) {
        lowestcol = lowestcol - 1;
      } // find the highest col number of the main word, which may be higher than that of the last played tile


      let highestcol = highcol;

      while (highestcol < edge && squareArray[row][highestcol + 1].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE) {
        highestcol = highestcol + 1;
      }

      wordstartcoord = _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.BOARD_ROW_HEADERS[row] + _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.BOARD_COL_HEADERS[lowestcol]; // horizontal play coords start with row header

      mainword = ""; // In case we got a 1 letter mainword in the previous block

      extrawords = []; // Ditto

      for (var col = lowestcol; col <= highestcol; ++col) {
        mainword = mainword + squareArray[row][col].letter;
        let coord = row + "-" + col;

        if (currentcoords.indexOf(coord) > -1) {
          // This tile was played, check for hooks
          let lowestrow = row;

          while (lowestrow > 0 && squareArray[lowestrow - 1][col].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE) {
            lowestrow = lowestrow - 1;
          }

          let highestrow = row;

          while (highestrow < edge && squareArray[highestrow + 1][col].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE) {
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
      sendNextMessage({
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
    sendNextMessage({
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
    setRcd([-1, -1, _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.DIR_NONE]);
  };

  const playerPassTurn = () => {
    let newMove = {
      by: participant,
      type: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.MOVE_TYPE_PASS
    };
    let newMoves = [...moves, newMove];
    let newWhoseturn = (0,_lib_pb_isDoublePass__WEBPACK_IMPORTED_MODULE_12__.isDoublePass)(newMoves) ? _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.WHOSE_TURN_GAMEOVER : participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS ? _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.WHOSE_TURN_GUARDS : _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.WHOSE_TURN_PRISONERS; // If both players pass then end the game

    let newSyncstamp = Date.now();
    recallTiles(); // In case they put some tiles on the board before clicking Pass

    putAtMoveStart();
    setSyncstamp(newSyncstamp);
    setWhoseturn(newWhoseturn);
    setMoves(newMoves);
    sendNextMessage({
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      func: participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS ? "ept" : "egt",
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
    sendNextMessage({
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
    sendNextMessage({
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
      let rack = whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.WHOSE_TURN_PRISONERS ? ptiles : gtiles;
      let newSelection = rack.indexOf(letter);

      if (newSelection === -1) {
        newSelection = rack.indexOf("?"); // Use the blank if they have one
      }

      if (newSelection > -1) {
        // Pressed letter is on the rack
        let row = rcd[0];
        let col = rcd[1];
        let dir = rcd[2];

        if (row > -1 && col > -1 && dir !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.DIR_NONE) {
          // row, col, dir are set to accept keystroke
          // Need to figure out next sqaure to auto-place a tile
          let newRcd = rcd;

          if (dir === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.DIR_RIGHT) {
            // playing rightwards
            let newc = -1;

            for (var tempcol = col + 1; tempcol < edge + 1 && newc === -1; tempcol++) {
              if (squareArray[row][tempcol].usedby === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE) {
                newc = tempcol;
              }
            }

            if (newc === -1) {
              newRcd = [-1, -1, _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.DIR_NONE];
            } else {
              newRcd = [row, newc, _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.DIR_RIGHT];
            }

            handleBoardSquareClick(row, col, newSelection, newRcd);
            setSelection(-1); // when they are typing they are not selecting rack tiles by clicking them on the rack

            return;
          }

          if (dir === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.DIR_DOWN) {
            // playing downwards
            let newr = -1;
            let numrows = racksize * 2 + 1;

            for (var temprow = row + 1; temprow < numrows && newr === -1; temprow++) {
              if (squareArray[temprow][col].usedby === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE) {
                newr = temprow;
              }
            }

            if (newr === -1) {
              newRcd = [-1, -1, _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.DIR_NONE];
            } else {
              newRcd = [newr, col, _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.DIR_DOWN];
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
      let newRcd = [-1, -1, _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.DIR_NONE];
      let newSelection = selection;
      newCurrentcoords.splice(currentcoords.length - 1, 1);
      let returnedTile = squareArray[row][col].letter;

      if (whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.WHOSE_TURN_PRISONERS) {
        newPtiles.push(returnedTile);
        newSelection = newPtiles.length - 1;
      } else {
        newGtiles.push(returnedTile);
        newSelection = newGtiles.length - 1;
      }

      newSquareArrayCell.usedby = _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE;
      newSquareArrayCell.letter = _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.LETTER_NONE;
      newSquareArrayRow[col] = newSquareArrayCell;
      newSquareArray[row] = [...newSquareArrayRow];
      let dir = rcd[2];

      if (dir !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.DIR_NONE) {
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
          lineNumber: 848,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 847,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-topleft w3-black topBarCorner commonFontFamily",
        children: ["Game id: ", gameid]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 850,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-bottomleft w3-orange topBarCorner commonFontFamily",
        children: ["Prisoners: ", participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS ? nickname : participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_GUARDS ? oppname : 'Secret']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 853,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-topright w3-black topBarCorner commonFontFamily",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "w3-button",
          onClick: () => {
            setWhereto('menu');
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "material-icons",
            "data-toggle": "tooltip",
            title: "Home",
            children: "home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 862,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 861,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 860,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-bottomright w3-orange topBarCorner commonFontFamily",
        children: ["Guards: ", participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS ? oppname : participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_GUARDS ? nickname : 'Secret']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 865,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 846,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col pbTileAndMovesOuter",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_unseenTilesSection__WEBPACK_IMPORTED_MODULE_4__.default, {
          tiles: tiles,
          othertiles: participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS ? gtiles : participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_GUARDS ? ptiles : [] // Observers see both racks so nothing to exclude from tilebag as unseen

        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 875,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_movesSection__WEBPACK_IMPORTED_MODULE_5__.default, {
          moves: moves,
          onmoveclick: mi => handleMoveClick(mi)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 882,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 874,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col pbPlayerOuterSection",
        children: participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_playerSection__WEBPACK_IMPORTED_MODULE_2__.default, {
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
          lineNumber: 886,
          columnNumber: 15
        }, undefined) : participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_GUARDS ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_playerSection__WEBPACK_IMPORTED_MODULE_2__.default, {
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
          lineNumber: 902,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "pbPlayerInnerSection",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbPlayerTitle",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_ICON_PRISONERS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 919,
              columnNumber: 48
            }, undefined), "\xA0", _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TITLE_PRISONERS, "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_ICON_PRISONERS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 919,
              columnNumber: 143
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 919,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbTilerack",
            children: ptiles && ptiles.map((t, ti) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ObserverRackTile, {
              participant: "P",
              tilevalue: t,
              tileindex: ti
            }, `ObserverPrisonersRackTile${ti}`, false, {
              fileName: _jsxFileName,
              lineNumber: 922,
              columnNumber: 23
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 920,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbPlayerTitle",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_ICON_GUARDS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 930,
              columnNumber: 48
            }, undefined), "\xA0", _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TITLE_GUARDS, "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_ICON_GUARDS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 930,
              columnNumber: 137
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 930,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbTilerack",
            children: gtiles && gtiles.map((t, ti) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ObserverRackTile, {
              participant: "G",
              tilevalue: t,
              tileindex: ti
            }, `ObserverGuardsRackTile${ti}`, false, {
              fileName: _jsxFileName,
              lineNumber: 933,
              columnNumber: 23
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 931,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 918,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 884,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        children: participant === whoseturn ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          onKeyDownCapture: handleKeyDown,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_board__WEBPACK_IMPORTED_MODULE_3__.default, {
            squareArray: squareArray,
            rcd: rcd,
            onClick: (ri, ci) => handleBoardSquareClick(ri, ci, -1, null)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 947,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 946,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_board__WEBPACK_IMPORTED_MODULE_3__.default, {
            squareArray: squareArray,
            rcd: rcd,
            onClick: () => {}
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 955,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 954,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 944,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_rescuesSection__WEBPACK_IMPORTED_MODULE_6__.default, {
          rescues: rescues
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 964,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_chatSection__WEBPACK_IMPORTED_MODULE_7__.default, {
          gameid: gameid,
          client: client,
          nickname: nickname,
          msgs: chatmsgs,
          setMsgs: setChatmsgs,
          participant: participant
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 965,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 963,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 873,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-display-container w3-teal topBarHeight",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-middle commonFontFamily",
        children: whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.WHOSE_TURN_GAMEOVER ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Game Over!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 971,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.JOKE_ARRAY[jokeindex]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 973,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 969,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 968,
      columnNumber: 9
    }, undefined), nickname && nickname.length > 3 && nickname.toUpperCase().substring(0, 4) === 'TEST' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-purple w3-monospace",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Snats for debugging: (", snats.length, ")"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 979,
        columnNumber: 13
      }, undefined), snats.map((snat, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["\xA0", snat]
      }, `snat${i}`, true, {
        fileName: _jsxFileName,
        lineNumber: 981,
        columnNumber: 14
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 978,
      columnNumber: 11
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 845,
    columnNumber: 7
  }, undefined);
};

_s(Game, "AyAwnqqAIHu6u8BJYF8bVc7LzX0=", false, function () {
  return [_lib_usePrevious__WEBPACK_IMPORTED_MODULE_14__.usePrevious];
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
      lineNumber: 998,
      columnNumber: 11
    }, undefined)
  }, props.tileindex, false, {
    fileName: _jsxFileName,
    lineNumber: 994,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvZ2FtZS5qcyJdLCJuYW1lcyI6WyJHYW1lIiwic2V0V2hlcmV0byIsImlzcmVqb2luIiwicGFydGljaXBhbnQiLCJnYW1laWQiLCJuaWNrbmFtZSIsIndzbWVzc2FnZSIsImNsaWVudCIsInJhY2tzaXplIiwic25hdHMiLCJzZXRTbmF0cyIsInVzZVN0YXRlIiwic3luY3N0YW1wIiwic2V0U3luY3N0YW1wIiwibWlkZGxlIiwiZWRnZSIsImluaXRpYWx0aWxlcyIsImMiLCJ0aWxlcyIsInNldFRpbGVzIiwicHRpbGVzIiwic2V0UHRpbGVzIiwiZ3RpbGVzIiwic2V0R3RpbGVzIiwic3F1YXJlQXJyYXkiLCJzZXRTcXVhcmVBcnJheSIsInNlbGVjdGlvbiIsInNldFNlbGVjdGlvbiIsIndob3NldHVybiIsInNldFdob3NldHVybiIsImN1cnJlbnRjb29yZHMiLCJzZXRDdXJyZW50Y29vcmRzIiwicmVzY3VlcyIsInNldFJlc2N1ZXMiLCJyY2QiLCJzZXRSY2QiLCJtb3ZlcyIsInNldE1vdmVzIiwic25hcHNob3QiLCJzZXRTbmFwc2hvdCIsImpva2VpbmRleCIsInNldEpva2VpbmRleCIsImFsbG93UmV3aW5kIiwic2V0QWxsb3dSZXdpbmQiLCJvcHBuYW1lIiwic2V0T3BwbmFtZSIsImNoYXRtc2dzIiwic2V0Q2hhdG1zZ3MiLCJwcmV2UmVzY3VlcyIsInVzZVByZXZpb3VzIiwidXNlRWZmZWN0IiwiaW5pdGlhbGl6ZVJvdXRpbmUiLCJtc2ciLCJwcm9jZXNzR2FtZU1lc3NhZ2UiLCJzY3JvbGxUb0JvdHRvbSIsIm15YXVkaW8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJwbGF5IiwibmV3amkiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwicmVxdWVzdFN5bmNEYXRhIiwiY2xlYXJJbnRlcnZhbCIsImZpcnN0U3F1YXJlQXJyYXkiLCJpbml0aWFsU3F1YXJlQXJyYXkiLCJyZWpvaW5HYW1lIiwic3RhcnRHYW1lIiwiam9pbkdhbWUiLCJzdGFydE9ic2VydmluZ0dhbWUiLCJzZW5kTmV4dE1lc3NhZ2UiLCJqTWVzc2FnZSIsIm5ld1NuYXRzIiwicHVzaCIsImZ1bmMiLCJEYXRlIiwibm93IiwiZm9ybWF0Iiwic2VuZCIsIm5ld1N5bmNzdGFtcCIsInRlbXBQVGlsZXMiLCJ0ZW1wR1RpbGVzIiwidGVtcFRpbGVzIiwibGVuZ3RoIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNwbGljZSIsInNvcnQiLCJ0eXBlIiwidGltZXN0YW1wIiwic2VuZGVyIiwicG5hbWUiLCJnbmFtZSIsInB1dEF0TW92ZVN0YXJ0IiwibWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiSlNPTiIsInBhcnNlIiwiZ2QiLCJidWlsZEdhbWVkYXRhRnJvbUFwaWRhdGEiLCJhcGlkYXRhIiwibmV3U25hcHNob3QiLCJzdHJpbmdpZnkiLCJuZXdDaGF0bXNncyIsImZyb20iLCJzZW5kbXNnIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3RHYW1lRGF0YSIsImhhbmRsZUJvYXJkU3F1YXJlQ2xpY2siLCJyaSIsImNpIiwibmV3U2VsZWN0aW9uIiwibmV3UmNkIiwibmV3U3F1YXJlQXJyYXkiLCJuZXdTcXVhcmVBcnJheVJvdyIsIm5ld1NxdWFyZUFycmF5Q2VsbCIsIm5ld1B0aWxlcyIsIm5ld0d0aWxlcyIsIm5ld0N1cnJlbnRjb29yZHMiLCJjb29yZCIsIlN0cmluZyIsImNjaSIsImluZGV4T2YiLCJ1c2VkYnkiLCJzZWxlY3RlZFRpbGUiLCJsZXR0ZXIiLCJuZXdEaXJlY3Rpb24iLCJoYW5kbGVSYWNrVGlsZUNsaWNrIiwidGlsZWluZGV4IiwibmV3cmFjayIsIm1vdmVmcm9tIiwibW92ZXRpbGUiLCJtb3ZldG8iLCJlbmRQbGF5ZXJzVHVybiIsImlzUGxheVZhbGlkIiwicGxheWluZm8iLCJnZXRQbGF5SW5mbyIsImludmFsaWR3b3JkcyIsImFsZXJ0Iiwiam9pbiIsInJlcGxhY2UiLCJ0b1VwcGVyQ2FzZSIsIm5ld1Jlc2N1ZXMiLCJlc2NhcGVoYXRjaGVzIiwiaSIsIm5ld1BsYXllclRpbGVzIiwibmV3VGlsZXMiLCJuZXdXaG9zZXR1cm4iLCJhbnlVbnVzZWRFc2NhcGVIYXRjaGVzIiwibmV3TW92ZSIsImJ5IiwibWFpbndvcmQiLCJleHRyYXdvcmRzIiwicG9zIiwibmV3TW92ZXMiLCJqc2VuZCIsIm1vdmUiLCJzd2FwUGxheWVyc1RpbGVzIiwid2luZG93Iiwic2V0U25hdCIsIk1PVkVfVFlQRV9TV0FQIiwiZmlyc3RXb3JkIiwibnVtbW92ZXMiLCJtb3ZlaW5kZXgiLCJudW1jb29yZHMiLCJsb3dyb3ciLCJoaWdocm93IiwibG93Y29sIiwiaGlnaGNvbCIsInRlbXByb3ciLCJwYXJzZUludCIsInNwbGl0IiwidGVtcGNvbCIsInBsYXl0aHJ1IiwiaG9va21hZGUiLCJ0ZW1wY29vcmQiLCJ3b3Jkc3RhcnRjb29yZCIsIm51bXJvd3MiLCJudW1jb2xzIiwicm93IiwiY29sIiwibG93ZXN0cm93IiwiaGlnaGVzdHJvdyIsImxvd2VzdGNvbCIsImhpZ2hlc3Rjb2wiLCJleHRyYXdvcmQiLCJ2YWxpZGF0ZVdvcmRzIiwiYWxsd29yZHMiLCJmb3JFYWNoIiwiZXciLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJqZGF0YSIsImpzb24iLCJhbGxvd1VuZG9MYXN0VHVybiIsInBlcmZvcm1SZXdpbmQiLCJyZWNhbGxUaWxlcyIsInBsYXllclBhc3NUdXJuIiwiTU9WRV9UWVBFX1BBU1MiLCJpc0RvdWJsZVBhc3MiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImtleSIsImxldHRlcnRlc3QiLCJtYXRjaCIsInJhY2siLCJkaXIiLCJuZXdjIiwibmV3ciIsInJldHVybmVkVGlsZSIsImhhbmRsZU1vdmVDbGljayIsIl9taSIsIm1pIiwidGkiLCJQQVJUWV9JQ09OX1BSSVNPTkVSUyIsIm1hcCIsInQiLCJQQVJUWV9JQ09OX0dVQVJEUyIsInN1YnN0cmluZyIsInNuYXQiLCJPYnNlcnZlclJhY2tUaWxlIiwicHJvcHMiLCJzZWxlY3RlZFVuc2VsZWN0ZWQiLCJ1Tm90VSIsInRpbGV2YWx1ZSIsInRpbGVjbGFzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBQ0MsWUFBRDtBQUNSQyxVQURRO0FBRVJDLGFBRlEsQ0FFSTtBQUZKO0FBR1JDLFFBSFE7QUFJUkMsVUFBUSxHQUFDLEVBSkQsQ0FJSTtBQUpKO0FBS1JDLFdBTFE7QUFNUkMsUUFOUTtBQU9SQyxVQUFRLEdBQUMsQ0FQRCxDQU9HOztBQVBILENBQUQsS0FRSDtBQUFBOztBQUNOLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsK0NBQVEsQ0FBQyxDQUFDLDhDQUFELENBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJGLCtDQUFRLENBQUMsRUFBRCxDQUExQztBQUNBLFFBQU1HLE1BQU0sR0FBR04sUUFBZixDQUhNLENBR21COztBQUN6QixRQUFNTyxJQUFJLEdBQUdQLFFBQVEsR0FBRyxDQUF4QixDQUpNLENBSXFCOztBQUMzQixRQUFNUSxZQUFZLEdBQUdSLFFBQVEsS0FBSyxDQUFiLEdBQWlCUyxrRUFBakIsR0FBOEJULFFBQVEsS0FBSyxDQUFiLEdBQWlCUyxrRUFBakIsR0FBOEJULFFBQVEsS0FBSyxDQUFiLEdBQWlCUyxrRUFBakIsR0FBOEJBLGtFQUEvRztBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQlIsK0NBQVEsQ0FBQyxDQUFDLEdBQUdLLFlBQUosQ0FBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDSSxNQUFEO0FBQUEsT0FBU0M7QUFBVCxN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TUMsa0JBQWtCLEdBQUcsYUFBM0I7QUFDQSxRQUFNQyxLQUFLLEdBQUdGLEtBQUssQ0FBQ0csU0FBTixLQUFvQixHQUFwQixHQUEwQixJQUExQixHQUFpQyxFQUEvQztBQUNBLFFBQU1DLFNBQVMsR0FBRyxrQkFBa0JILGtCQUFsQixHQUF1Q0MsS0FBdkMsR0FBK0NGLEtBQUssQ0FBQ2pPLFdBQXZFO0FBQ0Esc0JBQ0k7QUFFSSxhQUFTLEVBQUVxTyxTQUZmO0FBQUEsMkJBSUk7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQSxnQkFBbUNKLEtBQUssQ0FBQ0c7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKLEtBQ1NILEtBQUssQ0FBQ2hHLFNBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBUUQsQ0FaRDs7TUFBTStGLGdCO0FBZU4sK0RBQWVuTyxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjgxMDJkNDM0OWQwNTJmZDJjZDZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUGxheWVyU2VjdGlvbiBmcm9tICcuLi9wYi9wbGF5ZXJTZWN0aW9uJztcclxuaW1wb3J0IEJvYXJkIGZyb20gJy4uL3BiL2JvYXJkJztcclxuaW1wb3J0IFNob3dVbnNlZW5UaWxlcyBmcm9tICcuLi9wYi91bnNlZW5UaWxlc1NlY3Rpb24nO1xyXG5pbXBvcnQgU2hvd01vdmVzIGZyb20gJy4uL3BiL21vdmVzU2VjdGlvbic7XHJcbmltcG9ydCBTaG93UmVzY3VlcyBmcm9tICcuLi9wYi9yZXNjdWVzU2VjdGlvbic7XHJcbmltcG9ydCBDaGF0IGZyb20gJy4uL3BiL2NoYXRTZWN0aW9uJztcclxuaW1wb3J0ICogYXMgYyBmcm9tICcuLi8uLi9saWIvcGIvcHJpc29uQnJlYWtDb25zdGFudHMnO1xyXG5pbXBvcnQgeyBpbml0aWFsU3F1YXJlQXJyYXkgfSBmcm9tICcuLi8uLi9saWIvcGIvaW5pdGlhbFNxdWFyZUFycmF5JztcclxuaW1wb3J0IHsgYW55VW51c2VkRXNjYXBlSGF0Y2hlcyB9IGZyb20gXCIuLi8uLi9saWIvcGIvYW55VW51c2VkRXNjYXBlSGF0Y2hlc1wiO1xyXG5pbXBvcnQgeyBidWlsZEdhbWVkYXRhRnJvbUFwaWRhdGEgfSBmcm9tIFwiLi4vLi4vbGliL3BiL2J1aWxkR2FtZWRhdGFGcm9tQXBpZGF0YVwiO1xyXG5pbXBvcnQgeyBpc0RvdWJsZVBhc3MgfSBmcm9tIFwiLi4vLi4vbGliL3BiL2lzRG91YmxlUGFzc1wiO1xyXG5pbXBvcnQgeyBzY3JvbGxUb0JvdHRvbSB9IGZyb20gXCIuLi8uLi9saWIvc2Nyb2xsVG9Cb3R0b21cIjtcclxuaW1wb3J0IHsgdXNlUHJldmlvdXMgfSBmcm9tIFwiLi4vLi4vbGliL3VzZVByZXZpb3VzXCI7XHJcblxyXG5jb25zdCBHYW1lID0gKHtzZXRXaGVyZXRvXHJcbiAgICAsIGlzcmVqb2luXHJcbiAgICAsIHBhcnRpY2lwYW50IC8vIFByaXNvbmVycywgR3VhcmRzLCBvciBPYnNlcnZlciAobm90IGltcGxlbWVudGVkKVxyXG4gICAgLCBnYW1laWRcclxuICAgICwgbmlja25hbWU9JycgLy8gR2l2ZSBpdCBhIGRlZmF1bHQgZm9yIEJ1aWxkXHJcbiAgICAsIHdzbWVzc2FnZVxyXG4gICAgLCBjbGllbnRcclxuICAgICwgcmFja3NpemU9NCAvLyBPcHRpb24gZm9yIHJhY2sgc2l6ZSAoZ2l2ZSBpdCBhIGRlZmF1bHQgZm9yIEJ1aWxkKVxyXG4gICAgfSkgPT4ge1xyXG4gICAgY29uc3QgW3NuYXRzLCBzZXRTbmF0c10gPSB1c2VTdGF0ZShbJ0hlbGxvLiBUaGlzIHNwYWNlIGlzIGZvciBkZWJ1Z2dpbmcgbWVzc2FnZXMuJ10pO1xyXG4gICAgY29uc3QgW3N5bmNzdGFtcCwgc2V0U3luY3N0YW1wXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IG1pZGRsZSA9IHJhY2tzaXplOyAvLyBNaWRkbGUgZWxlbWVudCBpbiByb3cgb3IgY29sdW1uIGFycmF5XHJcbiAgICBjb25zdCBlZGdlID0gcmFja3NpemUgKiAyOyAvLyBMYXN0IGVsZW1lbnQgaW4gcm93IG9yIGNvbHVtbiBhcnJheVxyXG4gICAgY29uc3QgaW5pdGlhbHRpbGVzID0gcmFja3NpemUgPT09IDYgPyBjLlRJTEVCQUc2IDogcmFja3NpemUgPT09IDcgPyBjLlRJTEVCQUc3IDogcmFja3NpemUgPT09IDUgPyBjLlRJTEVCQUc1IDogYy5USUxFQkFHNDtcclxuICAgIGNvbnN0IFt0aWxlcywgc2V0VGlsZXNdID0gdXNlU3RhdGUoWy4uLmluaXRpYWx0aWxlc10pO1xyXG4gICAgY29uc3QgW3B0aWxlcywgc2V0UHRpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtndGlsZXMsIHNldEd0aWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc3F1YXJlQXJyYXksIHNldFNxdWFyZUFycmF5XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3Rpb24sIHNldFNlbGVjdGlvbl0gPSB1c2VTdGF0ZSgtMSk7IC8vIHJlbGF0aXZlIHRvIHJhY2sgb2YgcGxheWVyIG1ha2luZyBhIHBsYXlcclxuICAgIGNvbnN0IFt3aG9zZXR1cm4sIHNldFdob3NldHVybl0gPSB1c2VTdGF0ZShjLldIT1NFX1RVUk5fUFJJU09ORVJTKTsgLy8gZ2FtZSBzdGFydHMgd2l0aCBwcmlzb25lcnMgcGxheVxyXG4gICAgY29uc3QgW2N1cnJlbnRjb29yZHMsIHNldEN1cnJlbnRjb29yZHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3Jlc2N1ZXMsIHNldFJlc2N1ZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcmNkLCBzZXRSY2RdID0gdXNlU3RhdGUoWy0xLC0xLGMuRElSX05PTkVdKTtcclxuICAgIGNvbnN0IFttb3Zlcywgc2V0TW92ZXNdID0gdXNlU3RhdGUoW10pOyAvLyBtb3ZlIGhpc3RvcnksIGVhY2ggZWxlbWVudCBpcyB0aGUgYXJyYXkgaXMgYSBqc29uIG9iamVjdCBvZiBpbmZvIGFib3V0IHRoZSBtb3ZlXHJcbiAgICBjb25zdCBbc25hcHNob3QsIHNldFNuYXBzaG90XSA9IHVzZVN0YXRlKHtcclxuICAgICAgc3F1YXJlQXJyYXk6IFtdLFxyXG4gICAgICBwdGlsZXM6IFtdLFxyXG4gICAgICBndGlsZXM6IFtdLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbam9rZWluZGV4LCBzZXRKb2tlaW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbYWxsb3dSZXdpbmQsIHNldEFsbG93UmV3aW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtvcHBuYW1lLCBzZXRPcHBuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtjaGF0bXNncywgc2V0Q2hhdG1zZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgcHJldlJlc2N1ZXMgPSB1c2VQcmV2aW91cyhyZXNjdWVzKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IC8vIFRoaXMgY29kZSBleGVjdXRlcyB0aGUgZmlyc3QgdGltZSBHYW1lIGlzIHVzZWQgb25seVxyXG4gICAgICBpbml0aWFsaXplUm91dGluZSgpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgbGV0IG1zZyA9IHdzbWVzc2FnZTtcclxuICAgICAgaWYgKG1zZyAhPT0gJycpIHByb2Nlc3NHYW1lTWVzc2FnZShtc2cpOyAgICAgIFxyXG4gICAgfSxbd3NtZXNzYWdlXSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHNjcm9sbFRvQm90dG9tKFwiU2Nyb2xsYWJsZU1vdmVzXCIpO1xyXG4gICAgfSxbbW92ZXNdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2Nyb2xsVG9Cb3R0b20oXCJTY3JvbGxhYmxlQ2hhdFwiKTtcclxuICAgIH0sW2NoYXRtc2dzXSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmIChyZXNjdWVzID4gcHJldlJlc2N1ZXMpIHtcclxuICAgICAgICAgIHZhciBteWF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuICAgICAgICAgIC8vIE9ic2VydmVycyBoZWFyIHlpcHBlZVxyXG4gICAgICAgICAgbXlhdWRpby5zcmMgPSBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUyA/IFwiaHR0cHM6Ly90aWxlcnVubmVyLmdpdGh1Yi5pby9PbmVHb3RBd2F5Lm00YVwiIDogXCJodHRwczovL3RpbGVydW5uZXIuZ2l0aHViLmlvL3lpcHBlZS5tNGFcIjtcclxuICAgICAgICAgIG15YXVkaW8ucGxheSgpO1xyXG4gICAgICB9XHJcbiAgICB9LCBbcmVzY3Vlc10pOyAvLyBQbGF5IGEgc291bmQgd2hlbiBhIHJlc2N1ZSBpcyBtYWRlXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBsZXQgbmV3amkgPSBqb2tlaW5kZXggKyAxO1xyXG4gICAgICBpZiAobmV3amkgPj0gYy5KT0tFX0FSUkFZLmxlbmd0aCkge1xyXG4gICAgICAgIG5ld2ppID0gMDtcclxuICAgICAgfVxyXG4gICAgICBzZXRKb2tlaW5kZXgobmV3amkpO1xyXG4gICAgfSwgW3dob3NldHVybl0pOyAvLyB3YW50IHVwIHRvIGRhdGUgdmFsdWUgb2Ygd2hvc2V0dXJuIHRvIGRlY2lkZSB3aGV0aGVyIHRvIGFzayBmb3IgYW4gdXBkYXRlXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBhcnRpY2lwYW50ICE9PSB3aG9zZXR1cm4gJiYgd2hvc2V0dXJuICE9PSBjLldIT1NFX1RVUk5fR0FNRU9WRVIpIHtcclxuICAgICAgICAgIHJlcXVlc3RTeW5jRGF0YSgpOyAvLyBTZW5kIGEgcmVxdWVzdCBmb3Igc3luYyBkYXRhIHdoZW4gd2FpdGluZyBmb3IgdGhlaXIgbW92ZVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTZW5kIGEgcmVxdWVzdCBmb3IgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbGFzdCBldmVudCAoc3luY3N0YW1wKVxyXG4gICAgICAgIC8vIFNlcnZlciB3aWxsIHNlbmQgZnVuYz1wcm92aWRlc3luY3N0YW1wIHdpdGggYSBzeW5jc3RhbXAgdmFsdWVcclxuICAgICAgICAvLyBQcm9jZXNzR2FtZU1lc3NhZ2Ugd2lsbCBjaGVjayBzeW5jc3RhbXAgZnJvbSB0aGUgc2VydmVyIHRvIHN5bmNzdGFtcCBoZXJlXHJcbiAgICAgICAgLy8gSWYgZGlmZmVyZW50IGl0IHdpbGwgc2VuZCBmdW5jPXJlcXVlc3RnYW1lZGF0YSwgc2VydmVyIHdpbGwgc2VuZCB1cyBwcm92aWRlZ2FtZWRhdGEsIGFuZCB3ZSBzeW5jXHJcbiAgICAgICAgfSwgYy5QSU5HX0lOVEVSVkFMKTsgLy8gdGhpcyBtYW55IG1pbGxpc2Vjb25kcyBiZXR3ZWVuIGFib3ZlIGNvZGUgYmxvY2sgZXhlY3V0aW9uc1xyXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGluaXRpYWxpemVSb3V0aW5lID0gKCkgPT4ge1xyXG4gICAgICBsZXQgZmlyc3RTcXVhcmVBcnJheSA9IGluaXRpYWxTcXVhcmVBcnJheShyYWNrc2l6ZSk7XHJcbiAgICAgIHNldFNxdWFyZUFycmF5KGZpcnN0U3F1YXJlQXJyYXkpO1xyXG4gICAgICBpZiAoaXNyZWpvaW4pIHtcclxuICAgICAgICByZWpvaW5HYW1lKClcclxuICAgICAgfSBlbHNlIGlmIChwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUykge1xyXG4gICAgICAgIHN0YXJ0R2FtZShmaXJzdFNxdWFyZUFycmF5KTsgLy8gUHJpc29uZXJzIHN0YXJ0aW5nIHRoZSBnYW1lXHJcbiAgICAgIH0gZWxzZSBpZiAocGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMpIHtcclxuICAgICAgICBqb2luR2FtZSgpOyAvLyBHdWFyZHMgam9pbmluZyB0aGUgZ2FtZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0YXJ0T2JzZXJ2aW5nR2FtZSgpOyAvLyBPYnNlcnZlciB2aWV3aW5nIHRoZSBnYW1lXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZW5kTmV4dE1lc3NhZ2UgPSAoak1lc3NhZ2UpID0+IHtcclxuICAgICAgbGV0IG5ld1NuYXRzID0gWy4uLnNuYXRzXTtcclxuICAgICAgbmV3U25hdHMucHVzaChgU2VuZGluZyBtZXNzYWdlOiBmdW5jPSR7ak1lc3NhZ2UuZnVuY30gYXQgJHtEYXRlLm5vdygpLmZvcm1hdCgnaDpNTTpzcycpfWApO1xyXG4gICAgICBjbGllbnQuc2VuZChqTWVzc2FnZSk7XHJcbiAgICAgIHNldFNuYXRzKG5ld1NuYXRzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGFydEdhbWUgPSAoZmlyc3RTcXVhcmVBcnJheSkgPT4ge1xyXG4gICAgICBsZXQgbmV3U3luY3N0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgbGV0IHRlbXBQVGlsZXMgPSBbXTtcclxuICAgICAgbGV0IHRlbXBHVGlsZXMgPSBbXTtcclxuICAgICAgbGV0IHRlbXBUaWxlcyA9IFsuLi5pbml0aWFsdGlsZXNdO1xyXG4gICAgICB3aGlsZSAodGVtcFBUaWxlcy5sZW5ndGggPCByYWNrc2l6ZSkge1xyXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVtcFRpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgdGVtcFBUaWxlcy5wdXNoKHRlbXBUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgdGVtcFRpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgICByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVtcFRpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgdGVtcEdUaWxlcy5wdXNoKHRlbXBUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgdGVtcFRpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgfVxyXG4gICAgICB0ZW1wUFRpbGVzLnNvcnQoKTtcclxuICAgICAgdGVtcEdUaWxlcy5zb3J0KCk7XHJcbiAgICAgIHNldFN5bmNzdGFtcChuZXdTeW5jc3RhbXApO1xyXG4gICAgICBzZXRHdGlsZXModGVtcEdUaWxlcyk7XHJcbiAgICAgIHNldFB0aWxlcyh0ZW1wUFRpbGVzKTtcclxuICAgICAgc2V0VGlsZXModGVtcFRpbGVzKTtcclxuICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgIHNxdWFyZUFycmF5OiBmaXJzdFNxdWFyZUFycmF5LFxyXG4gICAgICAgIHB0aWxlczogWy4uLnRlbXBQVGlsZXNdLFxyXG4gICAgICAgIGd0aWxlczogWy4uLnRlbXBHVGlsZXNdICAgIFxyXG4gICAgICB9KTtcclxuICAgICAgc2VuZE5leHRNZXNzYWdlKHtcclxuICAgICAgICB0eXBlOiBcInBiXCIsXHJcbiAgICAgICAgZnVuYzogXCJzdGFydGdhbWVcIixcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gR2FtZSBpZFxyXG4gICAgICAgIHRpbWVzdGFtcDogbmV3U3luY3N0YW1wLCAvLyBGb3IgdGVsbGluZyBzZXJ2ZXIgbXkgbGFzdCBkYXRhIHRpbWVzdGFtcFxyXG4gICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gUmFjayBzaXplIG9wdGlvblxyXG4gICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsIC8vIFRoaXMgd2lsbCBiZSBwcmlzb25lcnMgc2luY2UgcHJpc29uZXJzIHN0YXJ0IHRoZSBnYW1lXHJcbiAgICAgICAgcG5hbWU6IG5pY2tuYW1lLCAvLyBUaGlzIHdpbGwgYmUgdGhlIHByaXNvbmVycyBuaWNrbmFtZSBzaW5jZSBwcmlzb25lcnMgYXJlIHNlbmRpbmcgdGhpc1xyXG4gICAgICAgIHRpbGVzOiB0ZW1wVGlsZXMsIC8vIFRpbGUgYmFnIGFmdGVyIGZpcnN0IHJhY2tzIHNlbGVjdGVkXHJcbiAgICAgICAgcHRpbGVzOiB0ZW1wUFRpbGVzLCAvLyBQcmlzb25lcnMgZmlyc3QgcmFja1xyXG4gICAgICAgIGd0aWxlczogdGVtcEdUaWxlcyAvLyBHdWFyZHMgZmlyc3QgcmFja1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IGpvaW5HYW1lID0gKCkgPT4ge1xyXG4gICAgICBzZW5kTmV4dE1lc3NhZ2Uoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgZ25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJqb2luZ2FtZVwiLCAvLyBqb2luIHRoZSBnYW1lXHJcbiAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCAvLyB0aGlzIHdpbGwgZWIgZ3VhcmRzXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVqb2luR2FtZSA9ICgpID0+IHtcclxuICAgICAgc2VuZE5leHRNZXNzYWdlKHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcInJlam9pbmdhbWVcIiwgLy8gam9pbiB0aGUgZ2FtZVxyXG4gICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQgLy8gY291bGQgYmUgZWl0aGVyIHBsYXllclxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHN0YXJ0T2JzZXJ2aW5nR2FtZSA9ICgpID0+IHtcclxuICAgICAgc2VuZE5leHRNZXNzYWdlKHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICB0eXBlOiBcInBiXCIsXHJcbiAgICAgICAgZnVuYzogXCJzdGFydE9ic2VydmluZ1wiXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHB1dEF0TW92ZVN0YXJ0KCkge1xyXG4gICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgICBzZXRBbGxvd1Jld2luZChmYWxzZSk7XHJcbiAgICAgIHNldFJjZCgtMSwtMSxjLkRJUl9OT05FKTtcclxuICAgICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBwcm9jZXNzR2FtZU1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZ2FtZWlkID09PSBnYW1laWQgJiYgbWVzc2FnZURhdGEudHlwZSA9PT0gXCJwYlwiKSB7IC8vIFRoaXMgaW5zdGFuY2Ugb2YgYSBwcmlzb24gYnJlYWsgZ2FtZVxyXG4gICAgICAgIGxldCBuZXdTbmF0cyA9IFsuLi5zbmF0c107XHJcbiAgICAgICAgbmV3U25hdHMucHVzaChgR2V0dGluZyBtZXNzYWdlOiBmdW5jPSR7bWVzc2FnZURhdGEuZnVuY31gKTtcclxuICAgICAgICBzZXRTbmF0cyhuZXdTbmF0cyk7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwicHJvdmlkZWdhbWVkYXRhXCIpIHtcclxuICAgICAgICAgIGxldCBnZCA9IGJ1aWxkR2FtZWRhdGFGcm9tQXBpZGF0YShtZXNzYWdlRGF0YS5hcGlkYXRhKTtcclxuICAgICAgICAgIC8vIFNlcnZlciBwcm92aWRpbmcgZ2FtZSBkYXRhXHJcbiAgICAgICAgICBzZXRTeW5jc3RhbXAoZ2Quc3luY3N0YW1wKTtcclxuICAgICAgICAgIC8vIE5vIG9wcG9uZW50IG5hbWUgZm9yIG9ic2VydmVyc1xyXG4gICAgICAgICAgaWYgKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTKSB7XHJcbiAgICAgICAgICAgIHNldE9wcG5hbWUoZ2QuZ25hbWUpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUykge1xyXG4gICAgICAgICAgICBzZXRPcHBuYW1lKGdkLnBuYW1lKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFRpbGVzKGdkLnRpbGVzKTtcclxuICAgICAgICAgIHNldFNxdWFyZUFycmF5KGdkLnNxdWFyZUFycmF5KTtcclxuICAgICAgICAgIHNldFB0aWxlcyhnZC5wdGlsZXMpO1xyXG4gICAgICAgICAgc2V0R3RpbGVzKGdkLmd0aWxlcyk7XHJcbiAgICAgICAgICBzZXRXaG9zZXR1cm4oZ2Qud2hvc2V0dXJuKTtcclxuICAgICAgICAgIGxldCBuZXdTbmFwc2hvdCA9IHtcclxuICAgICAgICAgICAgc3F1YXJlQXJyYXk6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ2Quc3F1YXJlQXJyYXkpKSwgLy8gRGVlcCBjb3B5XHJcbiAgICAgICAgICAgIHB0aWxlczogWy4uLmdkLnB0aWxlc10sXHJcbiAgICAgICAgICAgIGd0aWxlczogWy4uLmdkLmd0aWxlc11cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBzZXRTbmFwc2hvdChuZXdTbmFwc2hvdCk7XHJcbiAgICAgICAgICBzZXRNb3ZlcyhnZC5tb3Zlcyk7XHJcbiAgICAgICAgICBzZXRSZXNjdWVzKGdkLnJlc2N1ZXMpO1xyXG4gICAgICAgICAgc2V0QWxsb3dSZXdpbmQoZ2QuYWxsb3dSZXdpbmQpO1xyXG4gICAgICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwicHJvdmlkZWduYW1lXCIpIHtcclxuICAgICAgICAgIGlmIChwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9USVRMRV9QUklTT05FUlMpIHtcclxuICAgICAgICAgICAgc2V0T3BwbmFtZShtZXNzYWdlRGF0YS5nbmFtZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImFsbG93dW5kb1wiKSB7XHJcbiAgICAgICAgICAvLyBPcHBvbmVudCBjbGlja2VkIGJ1dHRvbiB0byBhbGxvdyB1bmRvIHR1cm5cclxuICAgICAgICAgIHNldEFsbG93UmV3aW5kKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJjaGF0XCIpIHsgLy8gU2VydmVyIGRlY2lkZWQgd2hldGhlciB0aGlzIGNoYXQgd2FzIGZvciBtZVxyXG4gICAgICAgICAgbGV0IG5ld0NoYXRtc2dzID0gWy4uLmNoYXRtc2dzLCB7ZnJvbTogbWVzc2FnZURhdGEubmlja25hbWUsIG1zZzogbWVzc2FnZURhdGEuc2VuZG1zZ31dO1xyXG4gICAgICAgICAgc2V0Q2hhdG1zZ3MobmV3Q2hhdG1zZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJwcm92aWRlc3luY2RhdGFcIikge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coYHByb3ZpZGVzeW5kYXRhIHBhc3NlZCAke21lc3NhZ2VEYXRhLnN5bmNzdGFtcH0gYW5kIEkgaGF2ZSAke3N5bmNzdGFtcH1gKTtcclxuICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS5zeW5jc3RhbXAgIT09IHN5bmNzdGFtcCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgT3V0IG9mIHN5bmMgLSByZXF1ZXN0aW5nIGxhdGVzdCBnYW1lIGRhdGFgKTtcclxuICAgICAgICAgICAgcmVxdWVzdEdhbWVEYXRhKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIENhbGxpbmcgc2V0U2VsZWN0aW9uIChmcm9tIGhhbmRsZUtleURvd24pIHRoZW4gaGFuZGxlQm9hcmRTcXVhcmVDbGljayBkb2VzIG5vdCBsZXQgaXQgcmVjb2duaXplIHNlbGVjdGlvbiB3aXRoIHRoZSBuZXcgdmFsdWVcclxuICAgIC8vIFNvIEkgcGFzcyBuZXdTZWxlY3Rpb24gd2hlbiBJIHdhbnQgdG8gYWxzbyBzZXQgaXQsIG90aGVyd2lzZSBJIHBhc3MgLTEgdG8gaW5zdHJ1Y3QgaXQgdG8gdXNlIGN1cnJlbnQgdmFsdWUgb2Ygc2VsZWN0aW9uXHJcbiAgICAvLyBBbHNvIHBhc3NpbmcgbmV3UmNkXHJcbiAgICBjb25zdCBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrID0gKHJpLCBjaSwgbmV3U2VsZWN0aW9uLCBuZXdSY2QpID0+IHtcclxuICAgICAgbGV0IG5ld1NxdWFyZUFycmF5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzcXVhcmVBcnJheSkpOyAvLyBEZWVwIGNvcHlcclxuICAgICAgbGV0IG5ld1NxdWFyZUFycmF5Um93ID0gWy4uLm5ld1NxdWFyZUFycmF5W3JpXV07IC8vIFRoZSByb3cgb2Ygc3F1YXJlcyB0aGV5IGNsaWNrZWQgb25cclxuICAgICAgbGV0IG5ld1NxdWFyZUFycmF5Q2VsbCA9IG5ld1NxdWFyZUFycmF5Um93W2NpXTsgLy8gVGhlIHNxdWFyZSBpbiB0aGUgcm93IHRoZXkgY2xpY2tlZCBvblxyXG4gICAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IG5ld0N1cnJlbnRjb29yZHMgPSBbLi4uY3VycmVudGNvb3Jkc107XHJcbiAgICAgIGxldCBjb29yZCA9IFN0cmluZyhyaSkgKyBcIi1cIiArIFN0cmluZyhjaSk7XHJcbiAgICAgIGxldCBjY2kgPSBjdXJyZW50Y29vcmRzLmluZGV4T2YoY29vcmQpO1xyXG4gICAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMSkge1xyXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IHNlbGVjdGlvbjtcclxuICAgICAgICBuZXdSY2QgPSByY2Q7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5ld1NlbGVjdGlvbiA+IC0xICYmIG5ld1NxdWFyZUFycmF5Q2VsbC51c2VkYnkgPT09IGMuVVNFRF9CWV9OT05FKSB7IC8vIHRpbGUgaXMgc2VsZWN0ZWQgZnJvbSByYWNrIGFuZCBjbGlja2VkIHNxdWFyZSBpcyBub3QgdXNlZCB5ZXRcclxuICAgICAgICBsZXQgc2VsZWN0ZWRUaWxlID0gd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTID8gbmV3UHRpbGVzW25ld1NlbGVjdGlvbl0gOiBuZXdHdGlsZXNbbmV3U2VsZWN0aW9uXTtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheUNlbGwubGV0dGVyID0gc2VsZWN0ZWRUaWxlO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Q2VsbC51c2VkYnkgPSB3aG9zZXR1cm47XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlSb3dbY2ldID0gbmV3U3F1YXJlQXJyYXlDZWxsO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5W3JpXSA9IFsuLi5uZXdTcXVhcmVBcnJheVJvd107XHJcbiAgICAgICAgd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTXHJcbiAgICAgICAgICA/IG5ld1B0aWxlcy5zcGxpY2UobmV3U2VsZWN0aW9uLCAxKVxyXG4gICAgICAgICAgOiBuZXdHdGlsZXMuc3BsaWNlKG5ld1NlbGVjdGlvbiwgMSk7XHJcbiAgICAgICAgaWYgKHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX1BSSVNPTkVSUyAmJiBuZXdTZWxlY3Rpb24gPT09IG5ld1B0aWxlcy5sZW5ndGgpIHsgXHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdTZWxlY3Rpb24gLSAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9HVUFSRFMgJiYgbmV3U2VsZWN0aW9uID09PSBuZXdHdGlsZXMubGVuZ3RoKSB7IFxyXG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3U2VsZWN0aW9uIC0gMVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3Rpb24obmV3U2VsZWN0aW9uKTtcclxuICAgICAgICBzZXRTcXVhcmVBcnJheShuZXdTcXVhcmVBcnJheSk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgICAgc2V0Q3VycmVudGNvb3JkcyhbLi4uY3VycmVudGNvb3JkcywgY29vcmRdKTtcclxuICAgICAgICBzZXRSY2QobmV3UmNkKTsgLy8ga2V5IGRvd24gaGFuZGxlciBmaWd1cmVkIGl0IG91dFxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY2NpID4gLTEpIHsgLy8gY2xpY2tlZCBzcXVhcmUgaGFzIGEgdGlsZSBvbiBpdCBmcm9tIHRoZSBjdXJyZW50IG1vdmUgaW4gcHJvZ3Jlc3MsIHNvIHB1dCBpdCBiYWNrIG9uIHRoZSBwbGF5ZXIgcmFja1xyXG4gICAgICAgIHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX1BSSVNPTkVSU1xyXG4gICAgICAgICAgPyBuZXdQdGlsZXMucHVzaChuZXdTcXVhcmVBcnJheUNlbGwubGV0dGVyKVxyXG4gICAgICAgICAgOiBuZXdHdGlsZXMucHVzaChuZXdTcXVhcmVBcnJheUNlbGwubGV0dGVyKTtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheUNlbGwudXNlZGJ5ID0gYy5VU0VEX0JZX05PTkU7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlDZWxsLmxldHRlciA9IGMuTEVUVEVSX05PTkU7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlSb3dbY2ldID0gbmV3U3F1YXJlQXJyYXlDZWxsO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5W3JpXSA9IFsuLi5uZXdTcXVhcmVBcnJheVJvd107XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKFxyXG4gICAgICAgICAgd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTID8gbmV3UHRpbGVzLmxlbmd0aCAtIDEgOiBuZXdHdGlsZXMubGVuZ3RoIC0gMVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbmV3Q3VycmVudGNvb3Jkcy5zcGxpY2UoY2NpLCAxKTtcclxuICAgICAgICBzZXRTcXVhcmVBcnJheShuZXdTcXVhcmVBcnJheSk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgICAgc2V0Q3VycmVudGNvb3JkcyhuZXdDdXJyZW50Y29vcmRzKTtcclxuICAgICAgICBzZXRSY2QoLTEsLTEsYy5ESVJfTk9ORSk7IC8vIG1ha2UgcGxheWVyIGNsaWNrIGFnYWluIHRvIHNldCBkaXJlY3Rpb25cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gVGhleSBkaWRuJ3QgY2xpY2sgYSBzcXVhcmUgdG8gcGxhY2UgYSBzZWxlY3RlZCB0aWxlIHRoZXJlXHJcbiAgICAgIC8vIFRoZXkgZGlkbid0IGNsaWNrIGEgc3F1YXJlIHRvIHJlbW92ZSBhbiBleGlzdGluZyB0aWxlXHJcbiAgICAgIGlmIChuZXdTcXVhcmVBcnJheUNlbGwudXNlZGJ5ID09PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgIC8vIFRoZXJlIGlzIG5vdGhpbmcgb24gdGhlIHNxdWFyZSBzbyB0aGV5IGFyZSBwaWNraW5nIHdoZXJlIHRvIHBsYWNlIHRoZSBuZXh0IHRpbGUgdmlhIGtleWJvYXJkXHJcbiAgICAgICAgbGV0IG5ld0RpcmVjdGlvbiA9IHJjZFswXSAhPT0gcmkgfHwgcmNkWzFdICE9PSBjaSA/IGMuRElSX1JJR0hUIDogLy9jbGljayBuZXcgc3F1YXJlLCBzdGFydCB3aXRoIHJpZ2h0XHJcbiAgICAgICAgIHJjZFsyXSA9PT0gYy5ESVJfUklHSFQgPyBjLkRJUl9ET1dOIDogLy9jbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyByaWdodCwgY2hhbmdlIHRvIGRvd25cclxuICAgICAgICAgcmNkWzJdID09PSBjLkRJUl9ET1dOID8gYy5ESVJfTk9ORSA6IC8vY2xpY2sgc2FtZSBzcXVhcmUgdGhhdCB3YXMgZG93biwgY2hhbmdlIHRvIG5vIGRpcmVjdGlvblxyXG4gICAgICAgICBjLkRJUl9SSUdIVDsgLy8gY2xpY2sgc2FtZSBzcXVhcmUgdGhhdCB3YXMgbm8gZGlyZWN0aW9uLCBjaGFuZ2UgdG8gcmlnaHRcclxuICAgICAgICBuZXdSY2QgPSBbcmksY2ksbmV3RGlyZWN0aW9uXTtcclxuICAgICAgICBzZXRSY2QobmV3UmNkKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBoYW5kbGVSYWNrVGlsZUNsaWNrID0gKHRpbGVpbmRleCkgPT4ge1xyXG4gICAgICBpZiAocGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9PQlNFUlZFUikge3JldHVybjt9XHJcbiAgICAgIC8vIElmIG5vIHRpbGUgaXMgc2VsZWN0ZWQgYWxyZWFkeSB0aGVuIHNldCB0aGUgc2VsZWN0aW9uXHJcbiAgICAgIGlmIChzZWxlY3Rpb24gPT09IC0xKSB7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKHRpbGVpbmRleCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIElmIHRoZSBzYW1lIHRpbGUgaXMgYWxyZWFkeSBzZWxlY3RlZCB0aGVuIHVuc2VsZWN0XHJcbiAgICAgIGlmIChzZWxlY3Rpb24gPT09IHRpbGVpbmRleCkge1xyXG4gICAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEEgdGlsZSB3YXMgYWxyZWFkeSBzZWxlY3RlZCBhbmQgdGhleSBjbGlja2VkIGFub3RoZXIgdGlsZSAtIG1vdmUgdGhlIHRpbGVcclxuICAgICAgbGV0IG5ld3JhY2sgPSBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IFsuLi5wdGlsZXNdIDogWy4uLmd0aWxlc107XHJcbiAgICAgIGxldCBtb3ZlZnJvbSA9IHNlbGVjdGlvbjtcclxuICAgICAgbGV0IG1vdmV0aWxlID0gbmV3cmFja1ttb3ZlZnJvbV07XHJcbiAgICAgIGxldCBtb3ZldG8gPSB0aWxlaW5kZXg7XHJcbiAgICAgIG5ld3JhY2suc3BsaWNlKG1vdmVmcm9tLCAxKTsgLy8gcmVtb3ZlIHRpbGUgZnJvbSBvcmlnaW5hbCBzZWxlY3RlZCBwb3NpdGlvblxyXG4gICAgICBuZXdyYWNrLnNwbGljZShtb3ZldG8sMCxtb3ZldGlsZSk7IC8vIGluc2VydCBtb3ZlZCB0aWxlIGF0IHRoZSBuZXdseSBzZWxlY3RlZCBwb3NpdGlvblxyXG4gICAgICBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IHNldFB0aWxlcyhuZXdyYWNrKSA6IHNldEd0aWxlcyhuZXdyYWNrKTtcclxuICAgICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgIH1cclxuICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGVuZFBsYXllcnNUdXJuKCkge1xyXG4gICAgICBpZiAoIWlzUGxheVZhbGlkKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHBsYXlpbmZvID0gYXdhaXQgZ2V0UGxheUluZm8oKTtcclxuICAgICAgaWYgKHBsYXlpbmZvLmludmFsaWR3b3Jkcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBhbGVydChgSW52YWxpZCBhY2NvcmRpbmcgdG8gRU5BQkxFMksgbGV4aWNvbjogJHtwbGF5aW5mby5pbnZhbGlkd29yZHMuam9pbigpLnJlcGxhY2UoXCIuXCIsXCI/XCIpLnRvVXBwZXJDYXNlKCl9YCk7XHJcbiAgICAgICAgcmV0dXJuOyAvLyBEbyBub3QgYXBwbHkgdGhlIHBsYXlcclxuICAgICAgfVxyXG4gICAgICBsZXQgbmV3UmVzY3VlcyA9IHJlc2N1ZXM7XHJcbiAgICAgIGlmIChwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUykge1xyXG4gICAgICAgIGxldCBlc2NhcGVoYXRjaGVzID0gW1xyXG4gICAgICAgICAgXCIwLTBcIixcclxuICAgICAgICAgIFwiMC1cIiArIG1pZGRsZSxcclxuICAgICAgICAgIFwiMC1cIiArIGVkZ2UsXHJcbiAgICAgICAgICBtaWRkbGUrIFwiLTBcIixcclxuICAgICAgICAgIG1pZGRsZSArIFwiLVwiICsgZWRnZSxcclxuICAgICAgICAgIGVkZ2UgKyBcIi0wXCIsXHJcbiAgICAgICAgICBlZGdlICsgXCItXCIgKyBtaWRkbGUsXHJcbiAgICAgICAgICBlZGdlICsgXCItXCIgKyBlZGdlXHJcbiAgICAgICAgXTsgLy8gY29vcmRzIG9mIGVzY2FwZSBoYXRjaGVzXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50Y29vcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAoZXNjYXBlaGF0Y2hlcy5pbmRleE9mKGN1cnJlbnRjb29yZHNbaV0pID4gLTEpIHtcclxuICAgICAgICAgICAgbmV3UmVzY3VlcyA9IG5ld1Jlc2N1ZXMgKyAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsZXQgbmV3UGxheWVyVGlsZXMgPSBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IFsuLi5wdGlsZXNdIDogWy4uLmd0aWxlc107XHJcbiAgICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICAgIHdoaWxlIChuZXdQbGF5ZXJUaWxlcy5sZW5ndGggPCByYWNrc2l6ZSAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIG5ld1BsYXllclRpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgfVxyXG4gICAgICBuZXdQbGF5ZXJUaWxlcy5zb3J0KCk7XHJcbiAgICAgIGxldCBuZXdXaG9zZXR1cm4gPSBuZXdQbGF5ZXJUaWxlcy5sZW5ndGggPT09IDAgPyBjLldIT1NFX1RVUk5fR0FNRU9WRVIgOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IGMuV0hPU0VfVFVSTl9HVUFSRFMgOiBjLlBBUlRZX1RZUEVfUFJJU09ORVJTO1xyXG4gICAgICBpZiAoIWFueVVudXNlZEVzY2FwZUhhdGNoZXMoc3F1YXJlQXJyYXkpKSB7XHJcbiAgICAgICAgbmV3V2hvc2V0dXJuID0gYy5XSE9TRV9UVVJOX0dBTUVPVkVSOyAvLyBObyBlc2NhcGUgaGF0Y2hlcyBsZWZ0XHJcbiAgICAgIH1cclxuICAgICAgbGV0IG5ld01vdmUgPSB7Ynk6IHBhcnRpY2lwYW50LCB0eXBlOiBjLk1PVkVfVFlQRV9QTEFZLCBtYWlud29yZDogcGxheWluZm8ubWFpbndvcmQsIGV4dHJhd29yZHM6IHBsYXlpbmZvLmV4dHJhd29yZHMsIHBvczogcGxheWluZm8ucG9zfTtcclxuICAgICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgICAgbGV0IG5ld1N5bmNzdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgIHNldFN5bmNzdGFtcChuZXdTeW5jc3RhbXApO1xyXG4gICAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgICAgcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBzZXRQdGlsZXMobmV3UGxheWVyVGlsZXMpIDogc2V0R3RpbGVzKG5ld1BsYXllclRpbGVzKTtcclxuICAgICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICAgIHNldFJlc2N1ZXMobmV3UmVzY3Vlcyk7XHJcbiAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICBzcXVhcmVBcnJheTogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzcXVhcmVBcnJheSkpLCAvLyBEZWVwIGNvcHlcclxuICAgICAgICBwdGlsZXM6IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gWy4uLm5ld1BsYXllclRpbGVzXSA6IFsuLi5wdGlsZXNdLFxyXG4gICAgICAgIGd0aWxlczogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBbLi4uZ3RpbGVzXSA6IFsuLi5uZXdQbGF5ZXJUaWxlc10sXHJcbiAgICAgIH0pO1xyXG4gICAgICBsZXQganNlbmQgPSB7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBcImVwdFwiIDogXCJlZ3RcIiwgLy8gZW5kIHByaXNvbmVycyBvciBndWFyZHMgdHVyblxyXG4gICAgICAgIHRpbWVzdGFtcDogbmV3U3luY3N0YW1wLCAvLyBmb3IgZGF0YSBzeW5jIGxvZ2ljXHJcbiAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICBwdGlsZXM6IG5ld1BsYXllclRpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuLCAvLyBtYXkgaGF2ZSBlbmRlZCB0aGUgZ2FtZVxyXG4gICAgICAgIG1vdmU6IG5ld01vdmUsIC8vIHRoZSBtb3ZlIHRoYXQgd2FzIG1hZGVcclxuICAgICAgICByZXNjdWVzOiBuZXdSZXNjdWVzIC8vIG1heSBoYXZlIHJlc2N1ZWQgYW5vdGhlciBwcmlzb25lclxyXG4gICAgICB9O1xyXG4gICAgICBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IGpzZW5kLnB0aWxlcyA9IG5ld1BsYXllclRpbGVzIDoganNlbmQuZ3RpbGVzID0gbmV3UGxheWVyVGlsZXM7XHJcbiAgICAgIHNlbmROZXh0TWVzc2FnZShqc2VuZCk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3Qgc3dhcFBsYXllcnNUaWxlcyA9ICgpID0+IHtcclxuICAgICAgaWYgKHRpbGVzLmxlbmd0aCA8IHJhY2tzaXplKSB7XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwiTmVlZCBcIiArIHJhY2tzaXplICsgXCIgdGlsZXMgaW4gdGhlIGJhZyB0byBleGNoYW5nZVwiKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBzZXRTbmF0KGBTd2FwcGluZyByYWNrLmApO1xyXG4gICAgICBsZXQgbmV3UGxheWVyVGlsZXMgPSBbXTtcclxuICAgICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgICAgd2hpbGUgKG5ld1BsYXllclRpbGVzLmxlbmd0aCA8IHJhY2tzaXplICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgbmV3UGxheWVyVGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIG5ld1BsYXllclRpbGVzLnNvcnQoKTtcclxuICAgICAgcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBuZXdUaWxlcyA9IFsuLi5uZXdUaWxlcywgLi4uc25hcHNob3QucHRpbGVzXSA6IG5ld1RpbGVzID0gWy4uLm5ld1RpbGVzLCAuLi5zbmFwc2hvdC5ndGlsZXNdO1xyXG4gICAgICBuZXdUaWxlcy5zb3J0KCk7XHJcbiAgICAgIGxldCBuZXdNb3ZlID0ge2J5OiBwYXJ0aWNpcGFudCwgdHlwZTogYy5NT1ZFX1RZUEVfU1dBUH07XHJcbiAgICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICAgIGxldCBuZXdTeW5jc3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICBzZXRTeW5jc3RhbXAobmV3U3luY3N0YW1wKTtcclxuICAgICAgc2V0U3F1YXJlQXJyYXkoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzbmFwc2hvdC5zcXVhcmVBcnJheSkpKTsgLy8gRGVlcCBjb3B5XHJcbiAgICAgIHNldFdob3NldHVybihwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IGMuV0hPU0VfVFVSTl9HVUFSRFMgOiBjLldIT1NFX1RVUk5fUFJJU09ORVJTKTtcclxuICAgICAgcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBzZXRQdGlsZXMobmV3UGxheWVyVGlsZXMpIDogc2V0R3RpbGVzKG5ld1BsYXllclRpbGVzKTtcclxuICAgICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICBzcXVhcmVBcnJheTogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzbmFwc2hvdC5zcXVhcmVBcnJheSkpLCAvLyBEZWVwIGNvcHlcclxuICAgICAgICBwdGlsZXM6IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gWy4uLm5ld1BsYXllclRpbGVzXSA6IFsuLi5wdGlsZXNdLFxyXG4gICAgICAgIGd0aWxlczogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBbLi4uZ3RpbGVzXSA6IFsuLi5uZXdQbGF5ZXJUaWxlc10sXHJcbiAgICAgIH0pO1xyXG4gICAgICBsZXQganNlbmQgPSB7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBcImVwdFwiIDogXCJlZ3RcIiwgLy8gZW5kIHByaXNvbmVycyBvciBndWFyZHMgdHVyblxyXG4gICAgICAgIHRpbWVzdGFtcDogbmV3U3luY3N0YW1wLCAvLyBmb3IgZGF0YSBzeW5jIGxvZ2ljXHJcbiAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICB3aG9zZXR1cm46IGMuV0hPU0VfVFVSTl9HVUFSRFMsIC8vIHN3YXAgbmV2ZXIgZW5kcyB0aGUgZ2FtZSBzbyBnbyB0byBvcHBvbmVudFxyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgIG1vdmU6IG5ld01vdmUgLy8gdGhlIG1vdmUgdGhhdCB3YXMgbWFkZVxyXG4gICAgICB9O1xyXG4gICAgICBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IGpzZW5kLnB0aWxlcyA9IG5ld1BsYXllclRpbGVzIDoganNlbmQuZ3RpbGVzID0gbmV3UGxheWVyVGlsZXM7XHJcbiAgICAgIHNlbmROZXh0TWVzc2FnZShqc2VuZCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGlzUGxheVZhbGlkKCkge1xyXG4gICAgICAvLyBDaGVjayBpZiB0aGlzIGlzIHRoZSBmaXJzdCB3b3JkIHNpbmNlIGl0IGFmZmVjdHMgdGhlIHZhbGlkaXR5IHJ1bGVzXHJcbiAgICAgIGxldCBmaXJzdFdvcmQgPSB0cnVlO1xyXG4gICAgICBsZXQgbnVtbW92ZXMgPSBtb3Zlcy5sZW5ndGg7XHJcbiAgICAgIGZvciAodmFyIG1vdmVpbmRleCA9IDA7IGZpcnN0V29yZCAmJiAobW92ZWluZGV4IDwgbnVtbW92ZXMpOyArK21vdmVpbmRleCkge1xyXG4gICAgICAgIGlmIChtb3Zlc1ttb3ZlaW5kZXhdLnR5cGUgPT09IGMuTU9WRV9UWVBFX1BMQVkpIHtcclxuICAgICAgICAgIGZpcnN0V29yZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBGaXJzdCB3b3JkIG11c3QgaGl0IGNlbnRlciBzcXVhcmVcclxuICAgICAgaWYgKGZpcnN0V29yZCAmJiBzcXVhcmVBcnJheVttaWRkbGVdW21pZGRsZV0udXNlZGJ5ID09PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcIkZpcnN0IHBsYXkgbXVzdCBoaXQgY2VudGVyIHNxdWFyZVwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgLy8gQXQgbGVhc3QgMSB0aWxlIG11c3QgYmUgcGxheWVkXHJcbiAgICAgIGlmIChjdXJyZW50Y29vcmRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcIllvdSBkaWRuJ3QgcGxheSBhbnkgdGlsZXNcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIEdvIHRocm91Z2ggZWFjaCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgICAgTWFrZSBzdXJlIGl0IGlzIG5vdCBpc29sYXRlZCBmcm9tIGFsbCB0aGUgb3RoZXIgdGlsZXNcclxuICAgICAgICAgIERldGVybWluZSB0aGUgbG93ZXN0IGFuZCBoaWdoZXN0IHJvdyBhbmQgY29sdW1uIG51bWJlcnMgb2YgdGlsZXMgcGxheWVkIHRoaXMgbW92ZVxyXG4gICAgICAqL1xyXG4gICAgICBsZXQgbnVtY29vcmRzID0gY3VycmVudGNvb3Jkcy5sZW5ndGg7XHJcbiAgICAgIGxldCBsb3dyb3cgPSBlZGdlKzE7XHJcbiAgICAgIGxldCBoaWdocm93ID0gLTE7XHJcbiAgICAgIGxldCBsb3djb2wgPSBlZGdlKzE7XHJcbiAgICAgIGxldCBoaWdoY29sID0gLTE7XHJcbiAgICAgIGZvciAodmFyIGNvb3JkPTA7IGNvb3JkIDwgbnVtY29vcmRzOyArK2Nvb3JkKSB7IC8vIEVhY2ggdGlsZSBwbGF5ZWQgdGhpcyBtb3ZlXHJcbiAgICAgICAgbGV0IHRlbXByb3cgPSBwYXJzZUludChjdXJyZW50Y29vcmRzW2Nvb3JkXS5zcGxpdChcIi1cIilbMF0pO1xyXG4gICAgICAgIGxldCB0ZW1wY29sID0gcGFyc2VJbnQoY3VycmVudGNvb3Jkc1tjb29yZF0uc3BsaXQoXCItXCIpWzFdKTtcclxuICAgICAgICBpZiAodGVtcHJvdyA8IGxvd3JvdykgeyBsb3dyb3cgPSB0ZW1wcm93O31cclxuICAgICAgICBpZiAodGVtcHJvdyA+IGhpZ2hyb3cpIHsgaGlnaHJvdyA9IHRlbXByb3c7fVxyXG4gICAgICAgIGlmICh0ZW1wY29sIDwgbG93Y29sKSB7IGxvd2NvbCA9IHRlbXBjb2w7fVxyXG4gICAgICAgIGlmICh0ZW1wY29sID4gaGlnaGNvbCkgeyBoaWdoY29sID0gdGVtcGNvbDt9XHJcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoZXJlIGlzIGFub3RoZXIgdGlsZSBpbW1lZGlhdGVseSBhYm92ZSwgYmVsb3csIGxlZnQsIG9yIHJpZ2h0IChub3QgaXNvbGF0ZWQpXHJcbiAgICAgICAgaWYgKCEodGVtcHJvdyA+IDAgJiYgc3F1YXJlQXJyYXlbdGVtcHJvdy0xXVt0ZW1wY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSAmJlxyXG4gICAgICAgICAgISh0ZW1wY29sID4gMCAmJiBzcXVhcmVBcnJheVt0ZW1wcm93XVt0ZW1wY29sLTFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpICYmXHJcbiAgICAgICAgICAhKHRlbXByb3cgPCBlZGdlICYmIHNxdWFyZUFycmF5W3RlbXByb3crMV1bdGVtcGNvbF0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgJiZcclxuICAgICAgICAgICEodGVtcGNvbCA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbdGVtcHJvd11bdGVtcGNvbCsxXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIkVhY2ggcGxheWVkIHRpbGUgbXVzdCBiZSBwYXJ0IG9mIGEgd29yZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIFVzaW5nIHRoZSBoaWdoIGFuZCBsb3cgdmFsdWVzLCBjaGVjayBpZiB0aGUgcGxheSBpcyBpbiBhIHN0cmFpZ2h0IGxpbmVcclxuICAgICAgaWYgKGxvd3JvdyAhPT0gaGlnaHJvdyAmJiBsb3djb2wgIT09IGhpZ2hjb2wpIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJUaWxlcyBwbGF5ZWQgbXVzdCBiZSBpbiBhIHN0cmFpZ2h0IGxpbmVcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBwbGF5dGhydSA9IGZhbHNlO1xyXG4gICAgICBsZXQgaG9va21hZGUgPSBmYWxzZTtcclxuICAgICAgLyogVHJhdmVyc2UgZnJvbSBmaXJzdCBwbGF5ZWQgdGlsZSB0byBsYXN0IHBsYXllciB0aWxlXHJcbiAgICAgICAgICBNYWtlIHN1cmUgdGhlcmUgYXJlIG5vIHVudXNlZCBzcXVhcmVzIGluYmV0d2VlbiAoZ2FwcyBpbiB0aGUgcGxheWVkIHdvcmQpXHJcbiAgICAgICAgICBDaGVjayBpZiB3ZSBwbGF5ZWQgdGhyb3VnaCBleGlzdGluZyB0aWxlc1xyXG4gICAgICAgICAgQ2hlY2sgaWYgd2UgaG9va2VkIGV4aXN0aW5nIHRpbGVzL3dvcmRzXHJcbiAgICAgICovXHJcbiAgICAgIGZvciAodmFyIHRlbXByb3cgPSBsb3dyb3c7IHRlbXByb3cgPD0gaGlnaHJvdzsgKyt0ZW1wcm93KSB7XHJcbiAgICAgICAgZm9yICh2YXIgdGVtcGNvbCA9IGxvd2NvbDsgdGVtcGNvbCA8PSBoaWdoY29sOyArK3RlbXBjb2wpIHtcclxuICAgICAgICAgIGlmIChzcXVhcmVBcnJheVt0ZW1wcm93XVt0ZW1wY29sXS51c2VkYnkgPT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIlRoZXJlIGlzIGEgZ2FwIGluIHlvdXIgd29yZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCFmaXJzdFdvcmQpIHsgLy8gUGxheSB0aHJvdWdoIGFuZCBob29rIG5vdCBwb3NzaWJsZSBvbiBmaXJzdCBtb3ZlXHJcbiAgICAgICAgICAgIGxldCB0ZW1wY29vcmQgPSB0ZW1wcm93ICsgXCItXCIgKyB0ZW1wY29sO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudGNvb3Jkcy5pbmRleE9mKHRlbXBjb29yZCkgPCAwKSB7IC8vIFRpbGUgd2FzIG5vdCBwbGF5ZWQgdGhpcyBtb3ZlICh3YXMgYWxyZWFkeSBvbiB0aGUgYm9hcmQpXHJcbiAgICAgICAgICAgICAgcGxheXRocnUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgdGVtcHJvdyA+IDAgJiYgc3F1YXJlQXJyYXlbdGVtcHJvdy0xXVt0ZW1wY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgICAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIHRlbXByb3cgPCBlZGdlICYmIHNxdWFyZUFycmF5W3RlbXByb3crMV1bdGVtcGNvbF0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiB0ZW1wY29sID4gMCAmJiBzcXVhcmVBcnJheVt0ZW1wcm93XVt0ZW1wY29sLTFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgdGVtcGNvbCA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbdGVtcHJvd11bdGVtcGNvbCsxXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfSAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghZmlyc3RXb3JkKSB7XHJcbiAgICAgICAgLy8gV2UgYWxyZWFkeSBmb3VuZCBwbGF5IHRocm91Z2ggYSB0aWxlIGJldHdlZW4gZmlyc3QgYW5kIGxhc3QgcGxheWVkIHRpbGVcclxuICAgICAgICAvLyBOb3cgY2hlY2sgaWYgcGxheWVkIHdvcmQgaGFzIGEgdGlsZSBiZWZvcmUgZmlyc3Qgb3IgYWZ0ZXIgbGFzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgbG93Y29sID4gMCAmJiBzcXVhcmVBcnJheVtsb3dyb3ddW2xvd2NvbC0xXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgaGlnaGNvbCA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbbG93cm93XVtoaWdoY29sKzFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBsb3dyb3cgPiAwICYmIHNxdWFyZUFycmF5W2xvd3Jvdy0xXVtsb3djb2xdICE9PSBjLlVTRURfQllfTk9ORSkgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGhpZ2hyb3cgPCBlZGdlICYmIHNxdWFyZUFycmF5W2hpZ2hyb3crMV1bbG93Y29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgICAgIC8vIE5vdyB3ZSBoYXZlIGZ1bGx5IGlkZW50aWZpZWQgcGxheSB0aHJvdWdoIHdlIGNhbiBtYWtlIHN1cmUgdGhleSBwbGF5ZWQgdGhyb3VnaCBvciBtYWRlIGEgaG9va1xyXG4gICAgICAgIC8vIFRoaXMgaW4gbWFuZGF0b3J5IHNpbmNlIGl0IGlzIG5vdCB0aGUgZmlyc3QgbW92ZVxyXG4gICAgICAgIGlmICghcGxheXRocnUgJiYgIWhvb2ttYWRlKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJOZXcgd29yZHMgbXVzdCBleHRlbmQgYW4gZXhpc3Rpbmcgd29yZCBhbmQvb3IgaG9vayBleGlzdGluZyB3b3JkcyBvciB0aWxlc1wiKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRQbGF5SW5mbygpIHtcclxuICAgICAgbGV0IHBsYXlpbmZvID0ge307XHJcbiAgICAgIGxldCBtYWlud29yZCA9IFwiXCI7XHJcbiAgICAgIGxldCBleHRyYXdvcmRzID0gW107XHJcbiAgICAgIGxldCB3b3Jkc3RhcnRjb29yZCA9IFwiXCI7XHJcbiAgICAgIGxldCBudW1yb3dzID0gZWRnZSsxO1xyXG4gICAgICBsZXQgbnVtY29scyA9IGVkZ2UrMTtcclxuICAgICAgbGV0IGxvd3JvdyA9IG51bXJvd3M7XHJcbiAgICAgIGxldCBoaWdocm93ID0gLTE7XHJcbiAgICAgIGxldCBsb3djb2wgPSBudW1jb2xzO1xyXG4gICAgICBsZXQgaGlnaGNvbCA9IC0xO1xyXG4gICAgICBsZXQgbnVtY29vcmRzID0gY3VycmVudGNvb3Jkcy5sZW5ndGg7XHJcbiAgICAgIGZvciAodmFyIGNvb3JkPTA7IGNvb3JkIDwgbnVtY29vcmRzOyArK2Nvb3JkKSB7XHJcbiAgICAgICAgbGV0IHJvdyA9IHBhcnNlSW50KGN1cnJlbnRjb29yZHNbY29vcmRdLnNwbGl0KFwiLVwiKVswXSk7XHJcbiAgICAgICAgbGV0IGNvbCA9IHBhcnNlSW50KGN1cnJlbnRjb29yZHNbY29vcmRdLnNwbGl0KFwiLVwiKVsxXSk7XHJcbiAgICAgICAgaWYgKHJvdyA8IGxvd3Jvdykge1xyXG4gICAgICAgICAgbG93cm93ID0gcm93O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocm93ID4gaGlnaHJvdykge1xyXG4gICAgICAgICAgaGlnaHJvdyA9IHJvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbCA8IGxvd2NvbCkge1xyXG4gICAgICAgICAgbG93Y29sID0gY29sO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sID4gaGlnaGNvbCkge1xyXG4gICAgICAgICAgaGlnaGNvbCA9IGNvbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGxvd3JvdyA8IGhpZ2hyb3cgfHwgbnVtY29vcmRzID09PSAxKSB7IC8vIHRpbGVzIHBsYWNlZCBvbiBkaWZmZXJlbmNlIHJvd3Mgc28gcGxheSBpcyB2ZXJ0aWNhbCwgb3Igc2luZ2xlIHRpbGUgcGxheWVkXHJcbiAgICAgICAgbGV0IGNvbCA9IGxvd2NvbDsgLy8gbG93Y29sIGFuZCBoaWdoY29sIHdpbGwgaGF2ZSB0aGUgc2FtZSB2YWx1ZVxyXG4gICAgICAgIC8vIGZpbmQgdGhlIGxvd2VzdCByb3cgbnVtYmVyIG9mIHRoZSBtYWluIHdvcmQsIHdoaWNoIG1heSBiZSBsb3dlciB0aGFuIHRoYXQgb2YgdGhlIGZpcnN0IHBsYXllZCB0aWxlXHJcbiAgICAgICAgbGV0IGxvd2VzdHJvdyA9IGxvd3JvdztcclxuICAgICAgICB3aGlsZSAobG93ZXN0cm93ID4gMCAmJiBzcXVhcmVBcnJheVtsb3dlc3Ryb3ctMV1bY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICBsb3dlc3Ryb3cgPSBsb3dlc3Ryb3cgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmaW5kIHRoZSBoaWdoZXN0IHJvdyBudW1iZXIgb2YgdGhlIG1haW4gd29yZCwgd2hpY2ggbWF5IGJlIGhpZ2hlciB0aGFuIHRoYXQgb2YgdGhlIGxhc3QgcGxheWVkIHRpbGVcclxuICAgICAgICBsZXQgaGlnaGVzdHJvdyA9IGhpZ2hyb3c7XHJcbiAgICAgICAgd2hpbGUgKGhpZ2hlc3Ryb3cgPCBlZGdlICYmIHNxdWFyZUFycmF5W2hpZ2hlc3Ryb3crMV1bY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICBoaWdoZXN0cm93ID0gaGlnaGVzdHJvdyArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdvcmRzdGFydGNvb3JkID0gYy5CT0FSRF9DT0xfSEVBREVSU1tjb2xdICsgYy5CT0FSRF9ST1dfSEVBREVSU1tsb3dlc3Ryb3ddOyAvLyB2ZXJ0aWNhbCBwbGF5IGNvb3JkcyBzdGFydCB3aXRoIGNvbCBoZWFkZXJcclxuICAgICAgICBmb3IgKHZhciByb3cgPSBsb3dlc3Ryb3c7IHJvdyA8PSBoaWdoZXN0cm93OyArK3Jvdykge1xyXG4gICAgICAgICAgbWFpbndvcmQgPSBtYWlud29yZCArIHNxdWFyZUFycmF5W3Jvd11bY29sXS5sZXR0ZXI7XHJcbiAgICAgICAgICBsZXQgY29vcmQgPSByb3cgKyBcIi1cIiArIGNvbDtcclxuICAgICAgICAgIGlmIChjdXJyZW50Y29vcmRzLmluZGV4T2YoY29vcmQpID4gLTEpIHsgLy8gVGhpcyB0aWxlIHdhcyBwbGF5ZWQsIGNoZWNrIGZvciBob29rc1xyXG4gICAgICAgICAgICBsZXQgbG93ZXN0Y29sID0gY29sO1xyXG4gICAgICAgICAgICB3aGlsZSAobG93ZXN0Y29sID4gMCAmJiBzcXVhcmVBcnJheVtyb3ddW2xvd2VzdGNvbC0xXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICAgICAgbG93ZXN0Y29sID0gbG93ZXN0Y29sIC0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgaGlnaGVzdGNvbCA9IGNvbDtcclxuICAgICAgICAgICAgd2hpbGUgKGhpZ2hlc3Rjb2wgPCBlZGdlICYmIHNxdWFyZUFycmF5W3Jvd11baGlnaGVzdGNvbCsxXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICAgICAgaGlnaGVzdGNvbCA9IGhpZ2hlc3Rjb2wgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChsb3dlc3Rjb2wgPCBoaWdoZXN0Y29sKSB7IC8vIGhvb2sgd2FzIG1hZGVcclxuICAgICAgICAgICAgICBsZXQgZXh0cmF3b3JkID0gXCJcIjtcclxuICAgICAgICAgICAgICBmb3IgKHZhciB0ZW1wY29sID0gbG93ZXN0Y29sOyB0ZW1wY29sIDw9IGhpZ2hlc3Rjb2w7ICsrdGVtcGNvbCkge1xyXG4gICAgICAgICAgICAgICAgZXh0cmF3b3JkID0gZXh0cmF3b3JkICsgc3F1YXJlQXJyYXlbcm93XVt0ZW1wY29sXS5sZXR0ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGV4dHJhd29yZHMgPSBbLi4uZXh0cmF3b3JkcywgZXh0cmF3b3JkXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFpbndvcmQubGVuZ3RoIDwgMikgeyAvLyBIb3Jpem9udGFsIHBsYXkgb3Igc2luZ2xlIHRpbGUgZHJvcCB0aGF0IGNhbm5vdCBiZSBhIHZlcnRpY2FsIHBsYXlcclxuICAgICAgICBsZXQgcm93ID0gbG93cm93OyAvLyBsb3dyb3cgYW5kIGhpZ2hyb3cgd2lsbCBoYXZlIHRoZSBzYW1lIHZhbHVlXHJcbiAgICAgICAgLy8gZmluZCB0aGUgbG93ZXN0IGNvbCBudW1iZXIgb2YgdGhlIG1haW4gd29yZCwgd2hpY2ggbWF5IGJlIGxvd2VyIHRoYW4gdGhhdCBvZiB0aGUgZmlyc3QgcGxheWVkIHRpbGVcclxuICAgICAgICBsZXQgbG93ZXN0Y29sID0gbG93Y29sO1xyXG4gICAgICAgIHdoaWxlIChsb3dlc3Rjb2wgPiAwICYmIHNxdWFyZUFycmF5W3Jvd11bbG93ZXN0Y29sLTFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgIGxvd2VzdGNvbCA9IGxvd2VzdGNvbCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZpbmQgdGhlIGhpZ2hlc3QgY29sIG51bWJlciBvZiB0aGUgbWFpbiB3b3JkLCB3aGljaCBtYXkgYmUgaGlnaGVyIHRoYW4gdGhhdCBvZiB0aGUgbGFzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIGxldCBoaWdoZXN0Y29sID0gaGlnaGNvbDtcclxuICAgICAgICB3aGlsZSAoaGlnaGVzdGNvbCA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbcm93XVtoaWdoZXN0Y29sKzFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgIGhpZ2hlc3Rjb2wgPSBoaWdoZXN0Y29sICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd29yZHN0YXJ0Y29vcmQgPSBjLkJPQVJEX1JPV19IRUFERVJTW3Jvd10gKyBjLkJPQVJEX0NPTF9IRUFERVJTW2xvd2VzdGNvbF07IC8vIGhvcml6b250YWwgcGxheSBjb29yZHMgc3RhcnQgd2l0aCByb3cgaGVhZGVyXHJcbiAgICAgICAgbWFpbndvcmQgPSBcIlwiOyAvLyBJbiBjYXNlIHdlIGdvdCBhIDEgbGV0dGVyIG1haW53b3JkIGluIHRoZSBwcmV2aW91cyBibG9ja1xyXG4gICAgICAgIGV4dHJhd29yZHMgPSBbXTsgLy8gRGl0dG9cclxuICAgICAgICBmb3IgKHZhciBjb2wgPSBsb3dlc3Rjb2w7IGNvbCA8PSBoaWdoZXN0Y29sOyArK2NvbCkge1xyXG4gICAgICAgICAgbWFpbndvcmQgPSBtYWlud29yZCArIHNxdWFyZUFycmF5W3Jvd11bY29sXS5sZXR0ZXI7XHJcbiAgICAgICAgICBsZXQgY29vcmQgPSByb3cgKyBcIi1cIiArIGNvbDtcclxuICAgICAgICAgIGlmIChjdXJyZW50Y29vcmRzLmluZGV4T2YoY29vcmQpID4gLTEpIHsgLy8gVGhpcyB0aWxlIHdhcyBwbGF5ZWQsIGNoZWNrIGZvciBob29rc1xyXG4gICAgICAgICAgICBsZXQgbG93ZXN0cm93ID0gcm93O1xyXG4gICAgICAgICAgICB3aGlsZSAobG93ZXN0cm93ID4gMCAmJiBzcXVhcmVBcnJheVtsb3dlc3Ryb3ctMV1bY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICAgICAgbG93ZXN0cm93ID0gbG93ZXN0cm93IC0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgaGlnaGVzdHJvdyA9IHJvdztcclxuICAgICAgICAgICAgd2hpbGUgKGhpZ2hlc3Ryb3cgPCBlZGdlICYmIHNxdWFyZUFycmF5W2hpZ2hlc3Ryb3crMV1bY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICAgICAgaGlnaGVzdHJvdyA9IGhpZ2hlc3Ryb3cgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChsb3dlc3Ryb3cgPCBoaWdoZXN0cm93KSB7IC8vIGhvb2sgd2FzIG1hZGVcclxuICAgICAgICAgICAgICBsZXQgZXh0cmF3b3JkID0gXCJcIjtcclxuICAgICAgICAgICAgICBmb3IgKHZhciB0ZW1wcm93ID0gbG93ZXN0cm93OyB0ZW1wcm93IDw9IGhpZ2hlc3Ryb3c7ICsrdGVtcHJvdykge1xyXG4gICAgICAgICAgICAgICAgZXh0cmF3b3JkID0gZXh0cmF3b3JkICsgc3F1YXJlQXJyYXlbdGVtcHJvd11bY29sXS5sZXR0ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGV4dHJhd29yZHMgPSBbLi4uZXh0cmF3b3JkcywgZXh0cmF3b3JkXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsZXQgaW52YWxpZHdvcmRzID0gYXdhaXQgdmFsaWRhdGVXb3JkcyhtYWlud29yZCwgZXh0cmF3b3Jkcyk7XHJcbiAgICAgIHBsYXlpbmZvID0ge21haW53b3JkOiBtYWlud29yZCwgZXh0cmF3b3JkczogZXh0cmF3b3JkcywgcG9zOiB3b3Jkc3RhcnRjb29yZCwgaW52YWxpZHdvcmRzOiBpbnZhbGlkd29yZHN9O1xyXG4gICAgICByZXR1cm4gcGxheWluZm87XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVXb3JkcyhtYWlud29yZCwgZXh0cmF3b3Jkcykge1xyXG4gICAgICAvLyBCdWlsZCBjb21wbGV0ZSBsaXN0IG9mIG5ld2x5IGZvcm1lZCB3b3JkcyBmb3IgdmFsaWRhdGlvbiBhZ2FpbnN0IGxleGljb25cclxuICAgICAgbGV0IGFsbHdvcmRzID0gbWFpbndvcmQ7XHJcbiAgICAgIGV4dHJhd29yZHMuZm9yRWFjaCgoZXcpID0+IHtcclxuICAgICAgICBhbGx3b3JkcyA9IGFsbHdvcmRzICsgXCIsXCIgKyBldztcclxuICAgICAgfSlcclxuICAgICAgbGV0IHVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FTkFCTEUySz92YWxpZGF0ZT0nIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tL0VOQUJMRTJLP3ZhbGlkYXRlPSdcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBhbGx3b3Jkcy50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgICAgY29uc3QgamRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHJldHVybiBqZGF0YS5pbnZhbGlkd29yZHM7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBhbGxvd1VuZG9MYXN0VHVybigpIHtcclxuICAgICAgaWYgKCFhbGxvd1Jld2luZCkge1xyXG4gICAgICAgIHNldEFsbG93UmV3aW5kKHRydWUpO1xyXG4gICAgICAgIHNlbmROZXh0TWVzc2FnZShcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgICBmdW5jOiBcImFsbG93dW5kb1wiLCAvLyBhbGxvdyB1bmRvIGxhc3QgdHVyblxyXG4gICAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50IC8vIHdobyBpcyBhbGxvd2luZyBpdFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIHBlcmZvcm1SZXdpbmQoKSB7XHJcbiAgICAgIC8qIFNlbmQgdW5kb3R1cm4gdG8gc2VydmVyIGFuZCBpdCB3aWxsIHNlbmQgdGhlIHVwZGF0ZWQgZ2FtZSBkYXRhIHRvIGdhbWUgY2xpZW50cywgaW5jbHVkaW5nIHRoaXMgb25lICovXHJcbiAgICAgIHNlbmROZXh0TWVzc2FnZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgZnVuYzogXCJ1bmRvdHVyblwiIC8vIHVuZG8gbGFzdCB0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgcmVjYWxsVGlsZXMgPSAoKSA9PiB7XHJcbiAgICAgIHNldFNxdWFyZUFycmF5KEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc25hcHNob3Quc3F1YXJlQXJyYXkpKSk7IC8vIERlZXAgY29weVxyXG4gICAgICBzZXRQdGlsZXMoWy4uLnNuYXBzaG90LnB0aWxlc10pO1xyXG4gICAgICBzZXRHdGlsZXMoWy4uLnNuYXBzaG90Lmd0aWxlc10pO1xyXG4gICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgICAgc2V0UmNkKFstMSwtMSxjLkRJUl9OT05FXSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgcGxheWVyUGFzc1R1cm4gPSAoKSA9PiB7XHJcbiAgICAgIGxldCBuZXdNb3ZlID0ge2J5OiBwYXJ0aWNpcGFudCwgdHlwZTogYy5NT1ZFX1RZUEVfUEFTU307XHJcbiAgICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICAgIGxldCBuZXdXaG9zZXR1cm4gPSBpc0RvdWJsZVBhc3MobmV3TW92ZXMpID8gYy5XSE9TRV9UVVJOX0dBTUVPVkVSIDogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBjLldIT1NFX1RVUk5fR1VBUkRTIDogYy5XSE9TRV9UVVJOX1BSSVNPTkVSUzsgLy8gSWYgYm90aCBwbGF5ZXJzIHBhc3MgdGhlbiBlbmQgdGhlIGdhbWVcclxuICAgICAgbGV0IG5ld1N5bmNzdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICAgIHJlY2FsbFRpbGVzKCk7IC8vIEluIGNhc2UgdGhleSBwdXQgc29tZSB0aWxlcyBvbiB0aGUgYm9hcmQgYmVmb3JlIGNsaWNraW5nIFBhc3NcclxuICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgc2V0U3luY3N0YW1wKG5ld1N5bmNzdGFtcCk7XHJcbiAgICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICAgIHNlbmROZXh0TWVzc2FnZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgZnVuYzogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBcImVwdFwiIDogXCJlZ3RcIiwgLy8gZW5kIHByaXNvbmVycyBvciBndWFyZHMgdHVyblxyXG4gICAgICAgICAgdGltZXN0YW1wOiBuZXdTeW5jc3RhbXAsIC8vIGZvciBkYXRhIHN5bmMgbG9naWNcclxuICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsIC8vIHdobyBwYXNzZWQgdGhlaXIgdHVyblxyXG4gICAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4sIC8vIGVpdGhlciBpdCBpcyBub3cgb3Bwb25lbnRzIHR1cm4gb3IgdGhlIHBhc3MgZW5kZWQgdGhlIGdhbWVcclxuICAgICAgICAgIG1vdmU6IG5ld01vdmUgLy8gdGhlIG1vdmUgdGhhdCB3YXMgbWFkZVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXF1ZXN0R2FtZURhdGEgPSAoKSA9PiB7XHJcbiAgICAgIHNlbmROZXh0TWVzc2FnZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgIGZ1bmM6IFwicmVxdWVzdGdhbWVkYXRhXCIsIC8vIHJlcXVlc3QgZ2FtZSBkYXRhXHJcbiAgICAgICAgICBzeW5jc3RhbXA6IHN5bmNzdGFtcCAvLyBzbyBzZXJ2ZXIgY2FuIGRlY2lkZSB3aGV0aGVyIEkgYW0gdXAgdG8gZGF0ZVxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgcmVxdWVzdFN5bmNEYXRhID0gKCkgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhgU2VuZCByZXF1ZXN0c3luY2RhdGEgJHtzeW5jc3RhbXB9YCk7XHJcbiAgICAgIHNlbmROZXh0TWVzc2FnZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgIGZ1bmM6IFwicmVxdWVzdHN5bmNkYXRhXCIgLy8gcmVxdWVzdCBzeW5jIGRhdGFcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKHBhcnRpY2lwYW50ICE9PSB3aG9zZXR1cm4pIHtyZXR1cm47fVxyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICBlbmRQbGF5ZXJzVHVybigpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgcmVjYWxsVGlsZXMoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGxldHRlcnRlc3QgPSAvXltBLVphLXpcXD9dJC87IC8vIHNpbmdsZSBsZXR0ZXIgb3IgcXVlc3Rpb24gbWFyayBrZXkgcHJlc3NlZFxyXG4gICAgICBpZiAoZXZlbnQua2V5Lm1hdGNoKGxldHRlcnRlc3QpKSB7XHJcbiAgICAgICAgbGV0IGxldHRlciA9IGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIGxldCByYWNrID0gd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTID8gcHRpbGVzIDogZ3RpbGVzO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3Rpb24gPSByYWNrLmluZGV4T2YobGV0dGVyKTtcclxuICAgICAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMSkge1xyXG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gcmFjay5pbmRleE9mKFwiP1wiKTsgLy8gVXNlIHRoZSBibGFuayBpZiB0aGV5IGhhdmUgb25lXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuZXdTZWxlY3Rpb24gPiAtMSkgeyAvLyBQcmVzc2VkIGxldHRlciBpcyBvbiB0aGUgcmFja1xyXG4gICAgICAgICAgbGV0IHJvdyA9IHJjZFswXTtcclxuICAgICAgICAgIGxldCBjb2wgPSByY2RbMV07XHJcbiAgICAgICAgICBsZXQgZGlyID0gcmNkWzJdO1xyXG4gICAgICAgICAgaWYgKHJvdyA+LTEgJiYgY29sID4gLTEgJiYgZGlyICE9PSBjLkRJUl9OT05FKSB7IC8vIHJvdywgY29sLCBkaXIgYXJlIHNldCB0byBhY2NlcHQga2V5c3Ryb2tlXHJcbiAgICAgICAgICAgIC8vIE5lZWQgdG8gZmlndXJlIG91dCBuZXh0IHNxYXVyZSB0byBhdXRvLXBsYWNlIGEgdGlsZVxyXG4gICAgICAgICAgICBsZXQgbmV3UmNkID0gcmNkO1xyXG4gICAgICAgICAgICBpZiAoZGlyID09PSBjLkRJUl9SSUdIVCkgeyAvLyBwbGF5aW5nIHJpZ2h0d2FyZHNcclxuICAgICAgICAgICAgICBsZXQgbmV3YyA9IC0xO1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIHRlbXBjb2wgPSBjb2wgKyAxOyB0ZW1wY29sIDwgZWRnZSArIDEgJiYgbmV3YyA9PT0gLTE7IHRlbXBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZUFycmF5W3Jvd11bdGVtcGNvbF0udXNlZGJ5ID09PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgICAgICAgICBuZXdjID0gdGVtcGNvbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKG5ld2MgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSY2QgPSBbLTEsLTEsYy5ESVJfTk9ORV07XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1JjZCA9IFtyb3csIG5ld2MsIGMuRElSX1JJR0hUXTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyb3csY29sLG5ld1NlbGVjdGlvbixuZXdSY2QpO1xyXG4gICAgICAgICAgICAgIHNldFNlbGVjdGlvbigtMSk7IC8vIHdoZW4gdGhleSBhcmUgdHlwaW5nIHRoZXkgYXJlIG5vdCBzZWxlY3RpbmcgcmFjayB0aWxlcyBieSBjbGlja2luZyB0aGVtIG9uIHRoZSByYWNrXHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkaXIgPT09IGMuRElSX0RPV04pIHsgLy8gcGxheWluZyBkb3dud2FyZHNcclxuICAgICAgICAgICAgICBsZXQgbmV3ciA9IC0xO1xyXG4gICAgICAgICAgICAgIGxldCBudW1yb3dzID0gKHJhY2tzaXplKjIpKzE7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgdGVtcHJvdyA9IHJvdyArIDE7IHRlbXByb3cgPCBudW1yb3dzICYmIG5ld3IgPT09IC0xOyB0ZW1wcm93KyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzcXVhcmVBcnJheVt0ZW1wcm93XVtjb2xdLnVzZWRieSA9PT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgICAgICAgbmV3ciA9IHRlbXByb3c7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChuZXdyID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgbmV3UmNkID0gWy0xLC0xLGMuRElSX05PTkVdO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSY2QgPSBbbmV3ciwgY29sLCBjLkRJUl9ET1dOXTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyb3csY29sLG5ld1NlbGVjdGlvbixuZXdSY2QpO1xyXG4gICAgICAgICAgICAgIHNldFNlbGVjdGlvbigtMSk7IC8vIHdoZW4gdGhleSBhcmUgdHlwaW5nIHRoZXkgYXJlIG5vdCBzZWxlY3RpbmcgcmFjayB0aWxlcyBieSBjbGlja2luZyB0aGVtIG9uIHRoZSByYWNrXHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkJhY2tzcGFjZVwiICYmIGN1cnJlbnRjb29yZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vIFNhbWUgYXMgY2xpY2tpbmcgb24gYSBwbGF5ZWQtdGhpcy1tb3ZlIHRpbGUgaW4gdGVybXMgb2YgcmV0dXJuaW5nIHRoZSB0aWxlIHRvIHRoZSByYWNrXHJcbiAgICAgICAgLy8gSG93ZXZlciB3ZSBhbHNvIHdhbnQgdG8gc2V0IHVwIHJjZCBzbyB0aGV5IGNhbiBwcmVzcyB0aGUga2V5IHRoZXkgbWVhbnQgYW5kIGNvbnRpbnVlXHJcbiAgICAgICAgbGV0IGNvb3JkID0gY3VycmVudGNvb3Jkc1tjdXJyZW50Y29vcmRzLmxlbmd0aCAtIDFdOyAvLyB0aWxlIHRvIHJldHVybiB0byByYWNrXHJcbiAgICAgICAgbGV0IHJvdyA9IHBhcnNlSW50KGNvb3JkLnNwbGl0KFwiLVwiKVswXSk7XHJcbiAgICAgICAgbGV0IGNvbCA9IHBhcnNlSW50KGNvb3JkLnNwbGl0KFwiLVwiKVsxXSk7XHJcbiAgICAgICAgbGV0IG5ld0N1cnJlbnRjb29yZHMgPSBbLi4uY3VycmVudGNvb3Jkc107XHJcbiAgICAgICAgbGV0IG5ld1B0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgICAgICBsZXQgbmV3U3F1YXJlQXJyYXkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNxdWFyZUFycmF5KSk7IC8vIERlZXAgY29weVxyXG4gICAgICAgIGxldCBuZXdTcXVhcmVBcnJheVJvdyA9IG5ld1NxdWFyZUFycmF5W3Jvd107XHJcbiAgICAgICAgbGV0IG5ld1NxdWFyZUFycmF5Q2VsbCA9IG5ld1NxdWFyZUFycmF5Um93W2NvbF07XHJcbiAgICAgICAgbGV0IG5ld1JjZCA9IFstMSwtMSxjLkRJUl9OT05FXTtcclxuICAgICAgICBsZXQgbmV3U2VsZWN0aW9uID0gc2VsZWN0aW9uO1xyXG4gICAgICAgIG5ld0N1cnJlbnRjb29yZHMuc3BsaWNlKGN1cnJlbnRjb29yZHMubGVuZ3RoLTEsMSk7XHJcbiAgICAgICAgbGV0IHJldHVybmVkVGlsZSA9IHNxdWFyZUFycmF5W3Jvd11bY29sXS5sZXR0ZXI7XHJcbiAgICAgICAgaWYgKHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX1BSSVNPTkVSUykge1xyXG4gICAgICAgICAgbmV3UHRpbGVzLnB1c2gocmV0dXJuZWRUaWxlKTtcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1B0aWxlcy5sZW5ndGgtMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmV3R3RpbGVzLnB1c2gocmV0dXJuZWRUaWxlKTtcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld0d0aWxlcy5sZW5ndGgtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlDZWxsLnVzZWRieSA9IGMuVVNFRF9CWV9OT05FO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Q2VsbC5sZXR0ZXIgPSBjLkxFVFRFUl9OT05FO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Um93W2NvbF0gPSBuZXdTcXVhcmVBcnJheUNlbGw7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlbcm93XSA9IFsuLi5uZXdTcXVhcmVBcnJheVJvd107XHJcbiAgICAgICAgbGV0IGRpciA9IHJjZFsyXTtcclxuICAgICAgICBpZiAoZGlyICE9PSBjLkRJUl9OT05FKSB7XHJcbiAgICAgICAgICAvLyBkaXJlY3Rpb24gd2FzIHNldCBzbyBrZWVwIGl0XHJcbiAgICAgICAgICBuZXdSY2QgPSBbcm93LGNvbCxkaXJdO1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IC0xOyAvLyBpZiB0aGV5IGJhY2tzcGFjZSBhbGwgdGhlIGxldHRlcnMgb2ZmIGxlYXZlIHJhY2sgdGlsZSB1bnNlbGVjdGVkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEN1cnJlbnRjb29yZHMobmV3Q3VycmVudGNvb3Jkcyk7XHJcbiAgICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgICAgc2V0U3F1YXJlQXJyYXkobmV3U3F1YXJlQXJyYXkpO1xyXG4gICAgICAgIHNldFJjZChuZXdSY2QpO1xyXG4gICAgICAgIHNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVNb3ZlQ2xpY2sgPSAoX21pKSA9PiB7fVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmlzb25icmVha1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1jb250YWluZXIgdzMtdGVhbCB0b3BCYXJIZWlnaHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1taWRkbGVcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm15SGVhZGluZ0ZvbnRcIj5Qcmlzb24gQnJlYWs8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktdG9wbGVmdCB3My1ibGFjayB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICBHYW1lIGlkOiB7Z2FtZWlkfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktYm90dG9tbGVmdCB3My1vcmFuZ2UgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgUHJpc29uZXJzOiB7XHJcbiAgICAgICAgICAgICAgcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBuaWNrbmFtZVxyXG4gICAgICAgICAgICAgIDogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMgPyBvcHBuYW1lXHJcbiAgICAgICAgICAgICAgOiAnU2VjcmV0J1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LXRvcHJpZ2h0IHczLWJsYWNrIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktYm90dG9tcmlnaHQgdzMtb3JhbmdlIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIEd1YXJkczoge1xyXG4gICAgICAgICAgICAgIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gb3BwbmFtZVxyXG4gICAgICAgICAgICAgIDogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMgPyBuaWNrbmFtZVxyXG4gICAgICAgICAgICAgIDogJ1NlY3JldCdcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGJUaWxlQW5kTW92ZXNPdXRlclwiPlxyXG4gICAgICAgICAgICAgIDxTaG93VW5zZWVuVGlsZXNcclxuICAgICAgICAgICAgICAgIHRpbGVzPXt0aWxlc31cclxuICAgICAgICAgICAgICAgIG90aGVydGlsZXM9e1xyXG4gICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IGd0aWxlc1xyXG4gICAgICAgICAgICAgICAgICA6IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTID8gcHRpbGVzXHJcbiAgICAgICAgICAgICAgICAgIDogW119IC8vIE9ic2VydmVycyBzZWUgYm90aCByYWNrcyBzbyBub3RoaW5nIHRvIGV4Y2x1ZGUgZnJvbSB0aWxlYmFnIGFzIHVuc2VlblxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8U2hvd01vdmVzIG1vdmVzPXttb3Zlc30gb25tb3ZlY2xpY2s9eyhtaSkgPT4gaGFuZGxlTW92ZUNsaWNrKG1pKX0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwYlBsYXllck91dGVyU2VjdGlvblwiPlxyXG4gICAgICAgICAgICB7cGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgP1xyXG4gICAgICAgICAgICAgIDxQbGF5ZXJTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICByYWNrdGlsZXM9e3B0aWxlc31cclxuICAgICAgICAgICAgICAgIHdob3NldHVybj17d2hvc2V0dXJufVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IGhhbmRsZVJhY2tUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja0ZpbmlzaFR1cm49eygpID0+IGVuZFBsYXllcnNUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrVGlsZVJlY2FsbD17KCkgPT4gcmVjYWxsVGlsZXMoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tUaWxlRXhjaGFuZ2U9eygpID0+IHN3YXBQbGF5ZXJzVGlsZXMoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tQYXNzUGxheT17KCkgPT4gcGxheWVyUGFzc1R1cm4oKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tVbmRvTGFzdFBsYXk9eygpID0+IHBlcmZvcm1SZXdpbmQoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tBbGxvd1VuZG89eygpID0+IGFsbG93VW5kb0xhc3RUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudD17cGFydGljaXBhbnR9XHJcbiAgICAgICAgICAgICAgICBtb3Zlcz17bW92ZXN9XHJcbiAgICAgICAgICAgICAgICBhbGxvd1Jld2luZD17YWxsb3dSZXdpbmR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgOnBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTID9cclxuICAgICAgICAgICAgICA8UGxheWVyU2VjdGlvblxyXG4gICAgICAgICAgICAgICAgcmFja3RpbGVzPXtndGlsZXN9XHJcbiAgICAgICAgICAgICAgICB3aG9zZXR1cm49e3dob3NldHVybn1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KHRpKSA9PiBoYW5kbGVSYWNrVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tGaW5pc2hUdXJuPXsoKSA9PiBlbmRQbGF5ZXJzVHVybigpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1RpbGVSZWNhbGw9eygpID0+IHJlY2FsbFRpbGVzKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrVGlsZUV4Y2hhbmdlPXsoKSA9PiBzd2FwUGxheWVyc1RpbGVzKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrUGFzc1BsYXk9eygpID0+IHBsYXllclBhc3NUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrVW5kb0xhc3RQbGF5PXsoKSA9PiBwZXJmb3JtUmV3aW5kKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrQWxsb3dVbmRvPXsoKSA9PiBhbGxvd1VuZG9MYXN0VHVybigpfVxyXG4gICAgICAgICAgICAgICAgcGFydGljaXBhbnQ9e3BhcnRpY2lwYW50fVxyXG4gICAgICAgICAgICAgICAgbW92ZXM9e21vdmVzfVxyXG4gICAgICAgICAgICAgICAgYWxsb3dSZXdpbmQ9e2FsbG93UmV3aW5kfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUGxheWVySW5uZXJTZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUGxheWVyVGl0bGVcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntjLlBBUlRZX0lDT05fUFJJU09ORVJTfTwvaT4mbmJzcDt7Yy5QQVJUWV9USVRMRV9QUklTT05FUlN9Jm5ic3A7PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57Yy5QQVJUWV9JQ09OX1BSSVNPTkVSU308L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAge3B0aWxlcyAmJiBwdGlsZXMubWFwKCh0LCB0aSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxPYnNlcnZlclJhY2tUaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgT2JzZXJ2ZXJQcmlzb25lcnNSYWNrVGlsZSR7dGl9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudD0nUCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxldmFsdWU9e3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZWluZGV4PXt0aX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJQbGF5ZXJUaXRsZVwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+e2MuUEFSVFlfSUNPTl9HVUFSRFN9PC9pPiZuYnNwO3tjLlBBUlRZX1RJVExFX0dVQVJEU30mbmJzcDs8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntjLlBBUlRZX0lDT05fR1VBUkRTfTwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICB7Z3RpbGVzICYmIGd0aWxlcy5tYXAoKHQsIHRpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE9ic2VydmVyUmFja1RpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BPYnNlcnZlckd1YXJkc1JhY2tUaWxlJHt0aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50PSdHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGV2YWx1ZT17dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlaW5kZXg9e3RpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIHtwYXJ0aWNpcGFudCA9PT0gd2hvc2V0dXJuID9cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIG9uS2V5RG93bkNhcHR1cmU9e2hhbmRsZUtleURvd259PlxyXG4gICAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICAgIHNxdWFyZUFycmF5PXtzcXVhcmVBcnJheX1cclxuICAgICAgICAgICAgICAgICAgcmNkPXtyY2R9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhyaSwgY2kpID0+IGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socmksIGNpLCAtMSxudWxsKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICAgIHNxdWFyZUFycmF5PXtzcXVhcmVBcnJheX1cclxuICAgICAgICAgICAgICAgICAgcmNkPXtyY2R9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICA8U2hvd1Jlc2N1ZXMgcmVzY3Vlcz17cmVzY3Vlc30gLz5cclxuICAgICAgICAgICAgPENoYXQgZ2FtZWlkPXtnYW1laWR9IGNsaWVudD17Y2xpZW50fSBuaWNrbmFtZT17bmlja25hbWV9IG1zZ3M9e2NoYXRtc2dzfSBzZXRNc2dzPXtzZXRDaGF0bXNnc30gcGFydGljaXBhbnQ9e3BhcnRpY2lwYW50fS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktY29udGFpbmVyIHczLXRlYWwgdG9wQmFySGVpZ2h0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktbWlkZGxlIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAge3dob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX0dBTUVPVkVSID9cclxuICAgICAgICAgICAgICA8aDE+R2FtZSBPdmVyITwvaDE+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICA8cD57Yy5KT0tFX0FSUkFZW2pva2VpbmRleF19PC9wPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7bmlja25hbWUgJiYgbmlja25hbWUubGVuZ3RoID4gMyAmJiBuaWNrbmFtZS50b1VwcGVyQ2FzZSgpLnN1YnN0cmluZygwLDQpID09PSAnVEVTVCcgJiZcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtcHVycGxlIHczLW1vbm9zcGFjZVwiPlxyXG4gICAgICAgICAgICA8cD5TbmF0cyBmb3IgZGVidWdnaW5nOiAoe3NuYXRzLmxlbmd0aH0pPC9wPlxyXG4gICAgICAgICAgICB7c25hdHMubWFwKChzbmF0LGkpID0+IChcclxuICAgICAgICAgICAgIDxwIGtleT17YHNuYXQke2l9YH0+Jm5ic3A7e3NuYXR9PC9wPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG5jb25zdCBPYnNlcnZlclJhY2tUaWxlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRVbnNlbGVjdGVkID0gXCJVbnNlbGVjdGVkIFwiO1xyXG4gIGNvbnN0IHVOb3RVID0gcHJvcHMudGlsZXZhbHVlID09PSBcIlFcIiA/IFwidSBcIiA6IFwiXCI7XHJcbiAgY29uc3QgdGlsZWNsYXNzID0gXCJwYlRpbGVPblJhY2sgXCIgKyBzZWxlY3RlZFVuc2VsZWN0ZWQgKyB1Tm90VSArIHByb3BzLnBhcnRpY2lwYW50O1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICAgIGtleT17cHJvcHMudGlsZWluZGV4fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXt0aWxlY2xhc3N9XHJcbiAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlT25SYWNrVGV4dFwiPntwcm9wcy50aWxldmFsdWV9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9