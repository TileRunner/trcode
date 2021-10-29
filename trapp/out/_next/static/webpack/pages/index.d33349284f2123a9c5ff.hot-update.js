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
    addSnat(`Sending message: func=${jMessage.func}`);
    client.send(jMessage);
  };

  const addSnat = snat => {
    let newSnats = [...snats];
    let current_datetime = new Date();
    let current_hours = current_datetime.getHours();
    let current_minutes = current_datetime.getMinutes();
    let current_seconds = current_datetime.getSeconds();
    let formatted_date = `${current_hours < 10 ? '0' : ''}${current_hours}:${current_minutes < 10 ? '0' : ''}${current_minutes}:${current_seconds < 10 ? '0' : ''}${current_seconds}`;
    newSnats.push(`${formatted_date}: ${snat}`);
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
      addSnat(`Getting message: func=${messageData.func}`);

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
          lineNumber: 855,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 854,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-topleft w3-black topBarCorner commonFontFamily",
        children: ["Game id: ", gameid]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 857,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-bottomleft w3-orange topBarCorner commonFontFamily",
        children: ["Prisoners: ", participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS ? nickname : participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_GUARDS ? oppname : 'Secret']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 860,
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
            lineNumber: 869,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 868,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 867,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-bottomright w3-orange topBarCorner commonFontFamily",
        children: ["Guards: ", participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS ? oppname : participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_GUARDS ? nickname : 'Secret']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 872,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 853,
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
          lineNumber: 882,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_movesSection__WEBPACK_IMPORTED_MODULE_5__.default, {
          moves: moves,
          onmoveclick: mi => handleMoveClick(mi)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 889,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 881,
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
          lineNumber: 893,
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
          lineNumber: 909,
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
              lineNumber: 926,
              columnNumber: 48
            }, undefined), "\xA0", _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TITLE_PRISONERS, "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_ICON_PRISONERS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 926,
              columnNumber: 143
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 926,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbTilerack",
            children: ptiles && ptiles.map((t, ti) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ObserverRackTile, {
              participant: "P",
              tilevalue: t,
              tileindex: ti
            }, `ObserverPrisonersRackTile${ti}`, false, {
              fileName: _jsxFileName,
              lineNumber: 929,
              columnNumber: 23
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 927,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbPlayerTitle",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_ICON_GUARDS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 937,
              columnNumber: 48
            }, undefined), "\xA0", _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TITLE_GUARDS, "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_ICON_GUARDS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 937,
              columnNumber: 137
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 937,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbTilerack",
            children: gtiles && gtiles.map((t, ti) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ObserverRackTile, {
              participant: "G",
              tilevalue: t,
              tileindex: ti
            }, `ObserverGuardsRackTile${ti}`, false, {
              fileName: _jsxFileName,
              lineNumber: 940,
              columnNumber: 23
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 938,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 925,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 891,
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
            lineNumber: 954,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 953,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_board__WEBPACK_IMPORTED_MODULE_3__.default, {
            squareArray: squareArray,
            rcd: rcd,
            onClick: () => {}
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 962,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 961,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 951,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_rescuesSection__WEBPACK_IMPORTED_MODULE_6__.default, {
          rescues: rescues
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 971,
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
          lineNumber: 972,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 970,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 880,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-display-container w3-teal topBarHeight",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-middle commonFontFamily",
        children: whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.WHOSE_TURN_GAMEOVER ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Game Over!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 978,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.JOKE_ARRAY[jokeindex]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 980,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 976,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 975,
      columnNumber: 9
    }, undefined), nickname && nickname.length > 3 && nickname.toUpperCase().substring(0, 4) === 'TEST' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "pbSnatDiv",
      children: snats.map((snat, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "pbSnat",
        children: snat
      }, `snat${i}`, false, {
        fileName: _jsxFileName,
        lineNumber: 987,
        columnNumber: 14
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 985,
      columnNumber: 11
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 852,
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
      lineNumber: 1004,
      columnNumber: 11
    }, undefined)
  }, props.tileindex, false, {
    fileName: _jsxFileName,
    lineNumber: 1000,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvZ2FtZS5qcyJdLCJuYW1lcyI6WyJHYW1lIiwic2V0V2hlcmV0byIsImlzcmVqb2luIiwicGFydGljaXBhbnQiLCJnYW1laWQiLCJuaWNrbmFtZSIsIndzbWVzc2FnZSIsImNsaWVudCIsInJhY2tzaXplIiwic25hdHMiLCJzZXRTbmF0cyIsInVzZVN0YXRlIiwic3luY3N0YW1wIiwic2V0U3luY3N0YW1wIiwibWlkZGxlIiwiZWRnZSIsImluaXRpYWx0aWxlcyIsImMiLCJ0aWxlcyIsInNldFRpbGVzIiwicHRpbGVzIiwic2V0UHRpbGVzIiwiZ3RpbGVzIiwic2V0R3RpbGVzIiwic3F1YXJlQXJyYXkiLCJzZXRTcXVhcmVBcnJheSIsInNlbGVjdGlvbiIsInNldFNlbGVjdGlvbiIsIndob3NldHVybiIsInNldFdob3NldHVybiIsImN1cnJlbnRjb29yZHMiLCJzZXRDdXJyZW50Y29vcmRzIiwicmVzY3VlcyIsInNldFJlc2N1ZXMiLCJyY2QiLCJzZXRSY2QiLCJtb3ZlcyIsInNldE1vdmVzIiwic25hcHNob3QiLCJzZXRTbmFwc2hvdCIsImpva2VpbmRleCIsInNldEpva2VpbmRleCIsImFsbG93UmV3aW5kIiwic2V0QWxsb3dSZXdpbmQiLCJvcHBuYW1lIiwic2V0T3BwbmFtZSIsImNoYXRtc2dzIiwic2V0Q2hhdG1zZ3MiLCJwcmV2UmVzY3VlcyIsInVzZVByZXZpb3VzIiwidXNlRWZmZWN0IiwiaW5pdGlhbGl6ZVJvdXRpbmUiLCJtc2ciLCJwcm9jZXNzR2FtZU1lc3NhZ2UiLCJzY3JvbGxUb0JvdHRvbSIsIm15YXVkaW8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJwbGF5IiwibmV3amkiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwicmVxdWVzdFN5bmNEYXRhIiwiY2xlYXJJbnRlcnZhbCIsImZpcnN0U3F1YXJlQXJyYXkiLCJpbml0aWFsU3F1YXJlQXJyYXkiLCJyZWpvaW5HYW1lIiwic3RhcnRHYW1lIiwiam9pbkdhbWUiLCJzdGFydE9ic2VydmluZ0dhbWUiLCJzZW5kTmV4dE1lc3NhZ2UiLCJqTWVzc2FnZSIsImFkZFNuYXQiLCJmdW5jIiwic2VuZCIsInNuYXQiLCJuZXdTbmF0cyIsImN1cnJlbnRfZGF0ZXRpbWUiLCJEYXRlIiwiY3VycmVudF9ob3VycyIsImdldEhvdXJzIiwiY3VycmVudF9taW51dGVzIiwiZ2V0TWludXRlcyIsImN1cnJlbnRfc2Vjb25kcyIsImdldFNlY29uZHMiLCJmb3JtYXR0ZWRfZGF0ZSIsInB1c2giLCJuZXdTeW5jc3RhbXAiLCJub3ciLCJ0ZW1wUFRpbGVzIiwidGVtcEdUaWxlcyIsInRlbXBUaWxlcyIsImxlbmd0aCIsInJhbmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzcGxpY2UiLCJzb3J0IiwidHlwZSIsInRpbWVzdGFtcCIsInNlbmRlciIsInBuYW1lIiwiZ25hbWUiLCJwdXRBdE1vdmVTdGFydCIsIm1lc3NhZ2UiLCJtZXNzYWdlRGF0YSIsIkpTT04iLCJwYXJzZSIsImdkIiwiYnVpbGRHYW1lZGF0YUZyb21BcGlkYXRhIiwiYXBpZGF0YSIsIm5ld1NuYXBzaG90Iiwic3RyaW5naWZ5IiwibmV3Q2hhdG1zZ3MiLCJmcm9tIiwic2VuZG1zZyIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0R2FtZURhdGEiLCJoYW5kbGVCb2FyZFNxdWFyZUNsaWNrIiwicmkiLCJjaSIsIm5ld1NlbGVjdGlvbiIsIm5ld1JjZCIsIm5ld1NxdWFyZUFycmF5IiwibmV3U3F1YXJlQXJyYXlSb3ciLCJuZXdTcXVhcmVBcnJheUNlbGwiLCJuZXdQdGlsZXMiLCJuZXdHdGlsZXMiLCJuZXdDdXJyZW50Y29vcmRzIiwiY29vcmQiLCJTdHJpbmciLCJjY2kiLCJpbmRleE9mIiwidXNlZGJ5Iiwic2VsZWN0ZWRUaWxlIiwibGV0dGVyIiwibmV3RGlyZWN0aW9uIiwiaGFuZGxlUmFja1RpbGVDbGljayIsInRpbGVpbmRleCIsIm5ld3JhY2siLCJtb3ZlZnJvbSIsIm1vdmV0aWxlIiwibW92ZXRvIiwiZW5kUGxheWVyc1R1cm4iLCJpc1BsYXlWYWxpZCIsInBsYXlpbmZvIiwiZ2V0UGxheUluZm8iLCJpbnZhbGlkd29yZHMiLCJhbGVydCIsImpvaW4iLCJyZXBsYWNlIiwidG9VcHBlckNhc2UiLCJuZXdSZXNjdWVzIiwiZXNjYXBlaGF0Y2hlcyIsImkiLCJuZXdQbGF5ZXJUaWxlcyIsIm5ld1RpbGVzIiwibmV3V2hvc2V0dXJuIiwiYW55VW51c2VkRXNjYXBlSGF0Y2hlcyIsIm5ld01vdmUiLCJieSIsIm1haW53b3JkIiwiZXh0cmF3b3JkcyIsInBvcyIsIm5ld01vdmVzIiwianNlbmQiLCJtb3ZlIiwic3dhcFBsYXllcnNUaWxlcyIsIndpbmRvdyIsInNldFNuYXQiLCJNT1ZFX1RZUEVfU1dBUCIsImZpcnN0V29yZCIsIm51bW1vdmVzIiwibW92ZWluZGV4IiwibnVtY29vcmRzIiwibG93cm93IiwiaGlnaHJvdyIsImxvd2NvbCIsImhpZ2hjb2wiLCJ0ZW1wcm93IiwicGFyc2VJbnQiLCJzcGxpdCIsInRlbXBjb2wiLCJwbGF5dGhydSIsImhvb2ttYWRlIiwidGVtcGNvb3JkIiwid29yZHN0YXJ0Y29vcmQiLCJudW1yb3dzIiwibnVtY29scyIsInJvdyIsImNvbCIsImxvd2VzdHJvdyIsImhpZ2hlc3Ryb3ciLCJsb3dlc3Rjb2wiLCJoaWdoZXN0Y29sIiwiZXh0cmF3b3JkIiwidmFsaWRhdGVXb3JkcyIsImFsbHdvcmRzIiwiZm9yRWFjaCIsImV3IiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsInRvTG9jYWxlTG93ZXJDYXNlIiwiamRhdGEiLCJqc29uIiwiYWxsb3dVbmRvTGFzdFR1cm4iLCJwZXJmb3JtUmV3aW5kIiwicmVjYWxsVGlsZXMiLCJwbGF5ZXJQYXNzVHVybiIsIk1PVkVfVFlQRV9QQVNTIiwiaXNEb3VibGVQYXNzIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJrZXkiLCJsZXR0ZXJ0ZXN0IiwibWF0Y2giLCJyYWNrIiwiZGlyIiwibmV3YyIsIm5ld3IiLCJyZXR1cm5lZFRpbGUiLCJoYW5kbGVNb3ZlQ2xpY2siLCJfbWkiLCJtaSIsInRpIiwiUEFSVFlfSUNPTl9QUklTT05FUlMiLCJtYXAiLCJ0IiwiUEFSVFlfSUNPTl9HVUFSRFMiLCJzdWJzdHJpbmciLCJPYnNlcnZlclJhY2tUaWxlIiwicHJvcHMiLCJzZWxlY3RlZFVuc2VsZWN0ZWQiLCJ1Tm90VSIsInRpbGV2YWx1ZSIsInRpbGVjbGFzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBQ0MsWUFBRDtBQUNSQyxVQURRO0FBRVJDLGFBRlEsQ0FFSTtBQUZKO0FBR1JDLFFBSFE7QUFJUkMsVUFBUSxHQUFDLEVBSkQsQ0FJSTtBQUpKO0FBS1JDLFdBTFE7QUFNUkMsUUFOUTtBQU9SQyxVQUFRLEdBQUMsQ0FQRCxDQU9HOztBQVBILENBQUQsS0FRSDtBQUFBOztBQUNOLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsK0NBQVEsQ0FBQyxDQUFDLDhDQUFELENBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJGLCtDQUFRLENBQUMsRUFBRCxDQUExQztBQUNBLFFBQU1HLE1BQU0sR0FBR04sUUFBZixDQUhNLENBR21COztBQUN6QixRQUFNTyxJQUFJLEdBQUdQLFFBQVEsR0FBRyxDQUF4QixDQUpNLENBSXFCOztBQUMzQixRQUFNUSxZQUFZLEdBQUdSLFFBQVEsS0FBSyxDQUFiLEdBQWlCUyxrRUFBakIsR0FBOEJULFFBQVEsS0FBSyxDQUFiLEdBQWlCUyxrRUFBakIsR0FBOEJULFFBQVEsS0FBSyxDQUFiLEdBQWlCUyxrRUFBakIsR0FBOEJBLGtFQUEvRztBQUNB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SUFBbUN4RixRQUFRLENBQUNxSixXQUFULEdBQXVCZ0YsU0FBdkIsQ0FBaUMsQ0FBakMsRUFBbUMsQ0FBbkMsTUFBMEMsTUFBN0UsaUJBQ0M7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLGdCQUNHak8sS0FBSyxDQUFDOE4sR0FBTixDQUFVLENBQUMzSixJQUFELEVBQU1pRixDQUFOLGtCQUNWO0FBQW9CLGlCQUFTLEVBQUMsUUFBOUI7QUFBQSxrQkFBd0NqRjtBQUF4QyxTQUFTLE9BQU1pRixDQUFFLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJJSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQThJRCxDQWg5Qkg7O0dBQU03SixJO1VBaUNrQmlELDBEOzs7S0FqQ2xCakQsSTs7QUFrOUJOLE1BQU0yTyxnQkFBZ0IsR0FBSUMsS0FBRCxJQUFXO0FBQ2xDLFFBQU1DLGtCQUFrQixHQUFHLGFBQTNCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHRixLQUFLLENBQUNHLFNBQU4sS0FBb0IsR0FBcEIsR0FBMEIsSUFBMUIsR0FBaUMsRUFBL0M7QUFDQSxRQUFNQyxTQUFTLEdBQUcsa0JBQWtCSCxrQkFBbEIsR0FBdUNDLEtBQXZDLEdBQStDRixLQUFLLENBQUN6TyxXQUF2RTtBQUNBLHNCQUNJO0FBRUksYUFBUyxFQUFFNk8sU0FGZjtBQUFBLDJCQUlJO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsZ0JBQW1DSixLQUFLLENBQUNHO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSixLQUNTSCxLQUFLLENBQUMvRixTQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVFELENBWkQ7O01BQU04RixnQjtBQWVOLCtEQUFlM08sSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMzMzNDkyODRmMjEyM2E5YzVmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG4vL2ltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFBsYXllclNlY3Rpb24gZnJvbSAnLi4vcGIvcGxheWVyU2VjdGlvbic7XHJcbmltcG9ydCBCb2FyZCBmcm9tICcuLi9wYi9ib2FyZCc7XHJcbmltcG9ydCBTaG93VW5zZWVuVGlsZXMgZnJvbSAnLi4vcGIvdW5zZWVuVGlsZXNTZWN0aW9uJztcclxuaW1wb3J0IFNob3dNb3ZlcyBmcm9tICcuLi9wYi9tb3Zlc1NlY3Rpb24nO1xyXG5pbXBvcnQgU2hvd1Jlc2N1ZXMgZnJvbSAnLi4vcGIvcmVzY3Vlc1NlY3Rpb24nO1xyXG5pbXBvcnQgQ2hhdCBmcm9tICcuLi9wYi9jaGF0U2VjdGlvbic7XHJcbmltcG9ydCAqIGFzIGMgZnJvbSAnLi4vLi4vbGliL3BiL3ByaXNvbkJyZWFrQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgaW5pdGlhbFNxdWFyZUFycmF5IH0gZnJvbSAnLi4vLi4vbGliL3BiL2luaXRpYWxTcXVhcmVBcnJheSc7XHJcbmltcG9ydCB7IGFueVVudXNlZEVzY2FwZUhhdGNoZXMgfSBmcm9tIFwiLi4vLi4vbGliL3BiL2FueVVudXNlZEVzY2FwZUhhdGNoZXNcIjtcclxuaW1wb3J0IHsgYnVpbGRHYW1lZGF0YUZyb21BcGlkYXRhIH0gZnJvbSBcIi4uLy4uL2xpYi9wYi9idWlsZEdhbWVkYXRhRnJvbUFwaWRhdGFcIjtcclxuaW1wb3J0IHsgaXNEb3VibGVQYXNzIH0gZnJvbSBcIi4uLy4uL2xpYi9wYi9pc0RvdWJsZVBhc3NcIjtcclxuaW1wb3J0IHsgc2Nyb2xsVG9Cb3R0b20gfSBmcm9tIFwiLi4vLi4vbGliL3Njcm9sbFRvQm90dG9tXCI7XHJcbmltcG9ydCB7IHVzZVByZXZpb3VzIH0gZnJvbSBcIi4uLy4uL2xpYi91c2VQcmV2aW91c1wiO1xyXG5cclxuY29uc3QgR2FtZSA9ICh7c2V0V2hlcmV0b1xyXG4gICAgLCBpc3Jlam9pblxyXG4gICAgLCBwYXJ0aWNpcGFudCAvLyBQcmlzb25lcnMsIEd1YXJkcywgb3IgT2JzZXJ2ZXIgKG5vdCBpbXBsZW1lbnRlZClcclxuICAgICwgZ2FtZWlkXHJcbiAgICAsIG5pY2tuYW1lPScnIC8vIEdpdmUgaXQgYSBkZWZhdWx0IGZvciBCdWlsZFxyXG4gICAgLCB3c21lc3NhZ2VcclxuICAgICwgY2xpZW50XHJcbiAgICAsIHJhY2tzaXplPTQgLy8gT3B0aW9uIGZvciByYWNrIHNpemUgKGdpdmUgaXQgYSBkZWZhdWx0IGZvciBCdWlsZClcclxuICAgIH0pID0+IHtcclxuICAgIGNvbnN0IFtzbmF0cywgc2V0U25hdHNdID0gdXNlU3RhdGUoWydIZWxsby4gVGhpcyBzcGFjZSBpcyBmb3IgZGVidWdnaW5nIG1lc3NhZ2VzLiddKTtcclxuICAgIGNvbnN0IFtzeW5jc3RhbXAsIHNldFN5bmNzdGFtcF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBtaWRkbGUgPSByYWNrc2l6ZTsgLy8gTWlkZGxlIGVsZW1lbnQgaW4gcm93IG9yIGNvbHVtbiBhcnJheVxyXG4gICAgY29uc3QgZWRnZSA9IHJhY2tzaXplICogMjsgLy8gTGFzdCBlbGVtZW50IGluIHJvdyBvciBjb2x1bW4gYXJyYXlcclxuICAgIGNvbnN0IGluaXRpYWx0aWxlcyA9IHJhY2tzaXplID09PSA2ID8gYy5USUxFQkFHNiA6IHJhY2tzaXplID09PSA3ID8gYy5USUxFQkFHNyA6IHJhY2tzaXplID09PSA1ID8gYy5USUxFQkFHNSA6IGMuVElMRUJBRzQ7XHJcbiAgICBjb25zdCBbdGlsZXMsIHNldFRpbGVzXSA9IHVzZVN0YXRlKFsuLi5pbml0aWFsdGlsZXNdKTtcclxuICAgIGNvbnN0IFtwdGlsZXMsIHNldFB0aWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZ3RpbGVzLCBzZXRHdGlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NxdWFyZUFycmF5LCBzZXRTcXVhcmVBcnJheV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0aW9uLCBzZXRTZWxlY3Rpb25dID0gdXNlU3RhdGUoLTEpOyAvLyByZWxhdGl2ZSB0byByYWNrIG9mIHBsYXllciBtYWtpbmcgYSBwbGF5XHJcbiAgICBjb25zdCBbd2hvc2V0dXJuLCBzZXRXaG9zZXR1cm5dID0gdXNlU3RhdGUoYy5XSE9TRV9UVVJOX1BSSVNPTkVSUyk7IC8vIGdhbWUgc3RhcnRzIHdpdGggcHJpc29uZXJzIHBsYXlcclxuICAgIGNvbnN0IFtjdXJyZW50Y29vcmRzLCBzZXRDdXJyZW50Y29vcmRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtyZXNjdWVzLCBzZXRSZXNjdWVzXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3JjZCwgc2V0UmNkXSA9IHVzZVN0YXRlKFstMSwtMSxjLkRJUl9OT05FXSk7XHJcbiAgICBjb25zdCBbbW92ZXMsIHNldE1vdmVzXSA9IHVzZVN0YXRlKFtdKTsgLy8gbW92ZSBoaXN0b3J5LCBlYWNoIGVsZW1lbnQgaXMgdGhlIGFycmF5IGlzIGEganNvbiBvYmplY3Qgb2YgaW5mbyBhYm91dCB0aGUgbW92ZVxyXG4gICAgY29uc3QgW3NuYXBzaG90LCBzZXRTbmFwc2hvdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgIHNxdWFyZUFycmF5OiBbXSxcclxuICAgICAgcHRpbGVzOiBbXSxcclxuICAgICAgZ3RpbGVzOiBbXSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2pva2VpbmRleCwgc2V0Sm9rZWluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2FsbG93UmV3aW5kLCBzZXRBbGxvd1Jld2luZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbb3BwbmFtZSwgc2V0T3BwbmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbY2hhdG1zZ3MsIHNldENoYXRtc2dzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IHByZXZSZXNjdWVzID0gdXNlUHJldmlvdXMocmVzY3Vlcyk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyAvLyBUaGlzIGNvZGUgZXhlY3V0ZXMgdGhlIGZpcnN0IHRpbWUgR2FtZSBpcyB1c2VkIG9ubHlcclxuICAgICAgaW5pdGlhbGl6ZVJvdXRpbmUoKTtcclxuICAgIH0sIFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGxldCBtc2cgPSB3c21lc3NhZ2U7XHJcbiAgICAgIGlmIChtc2cgIT09ICcnKSBwcm9jZXNzR2FtZU1lc3NhZ2UobXNnKTsgICAgICBcclxuICAgIH0sW3dzbWVzc2FnZV0pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzY3JvbGxUb0JvdHRvbShcIlNjcm9sbGFibGVNb3Zlc1wiKTtcclxuICAgIH0sW21vdmVzXSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHNjcm9sbFRvQm90dG9tKFwiU2Nyb2xsYWJsZUNoYXRcIik7XHJcbiAgICB9LFtjaGF0bXNnc10pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAocmVzY3VlcyA+IHByZXZSZXNjdWVzKSB7XHJcbiAgICAgICAgICB2YXIgbXlhdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcbiAgICAgICAgICAvLyBPYnNlcnZlcnMgaGVhciB5aXBwZWVcclxuICAgICAgICAgIG15YXVkaW8uc3JjID0gcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMgPyBcImh0dHBzOi8vdGlsZXJ1bm5lci5naXRodWIuaW8vT25lR290QXdheS5tNGFcIiA6IFwiaHR0cHM6Ly90aWxlcnVubmVyLmdpdGh1Yi5pby95aXBwZWUubTRhXCI7XHJcbiAgICAgICAgICBteWF1ZGlvLnBsYXkoKTtcclxuICAgICAgfVxyXG4gICAgfSwgW3Jlc2N1ZXNdKTsgLy8gUGxheSBhIHNvdW5kIHdoZW4gYSByZXNjdWUgaXMgbWFkZVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgbGV0IG5ld2ppID0gam9rZWluZGV4ICsgMTtcclxuICAgICAgaWYgKG5ld2ppID49IGMuSk9LRV9BUlJBWS5sZW5ndGgpIHtcclxuICAgICAgICBuZXdqaSA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgc2V0Sm9rZWluZGV4KG5ld2ppKTtcclxuICAgIH0sIFt3aG9zZXR1cm5dKTsgLy8gd2FudCB1cCB0byBkYXRlIHZhbHVlIG9mIHdob3NldHVybiB0byBkZWNpZGUgd2hldGhlciB0byBhc2sgZm9yIGFuIHVwZGF0ZVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwYXJ0aWNpcGFudCAhPT0gd2hvc2V0dXJuICYmIHdob3NldHVybiAhPT0gYy5XSE9TRV9UVVJOX0dBTUVPVkVSKSB7XHJcbiAgICAgICAgICByZXF1ZXN0U3luY0RhdGEoKTsgLy8gU2VuZCBhIHJlcXVlc3QgZm9yIHN5bmMgZGF0YSB3aGVuIHdhaXRpbmcgZm9yIHRoZWlyIG1vdmVcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU2VuZCBhIHJlcXVlc3QgZm9yIHRoZSB0aW1lc3RhbXAgb2YgdGhlIGxhc3QgZXZlbnQgKHN5bmNzdGFtcClcclxuICAgICAgICAvLyBTZXJ2ZXIgd2lsbCBzZW5kIGZ1bmM9cHJvdmlkZXN5bmNzdGFtcCB3aXRoIGEgc3luY3N0YW1wIHZhbHVlXHJcbiAgICAgICAgLy8gUHJvY2Vzc0dhbWVNZXNzYWdlIHdpbGwgY2hlY2sgc3luY3N0YW1wIGZyb20gdGhlIHNlcnZlciB0byBzeW5jc3RhbXAgaGVyZVxyXG4gICAgICAgIC8vIElmIGRpZmZlcmVudCBpdCB3aWxsIHNlbmQgZnVuYz1yZXF1ZXN0Z2FtZWRhdGEsIHNlcnZlciB3aWxsIHNlbmQgdXMgcHJvdmlkZWdhbWVkYXRhLCBhbmQgd2Ugc3luY1xyXG4gICAgICAgIH0sIGMuUElOR19JTlRFUlZBTCk7IC8vIHRoaXMgbWFueSBtaWxsaXNlY29uZHMgYmV0d2VlbiBhYm92ZSBjb2RlIGJsb2NrIGV4ZWN1dGlvbnNcclxuICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBpbml0aWFsaXplUm91dGluZSA9ICgpID0+IHtcclxuICAgICAgbGV0IGZpcnN0U3F1YXJlQXJyYXkgPSBpbml0aWFsU3F1YXJlQXJyYXkocmFja3NpemUpO1xyXG4gICAgICBzZXRTcXVhcmVBcnJheShmaXJzdFNxdWFyZUFycmF5KTtcclxuICAgICAgaWYgKGlzcmVqb2luKSB7XHJcbiAgICAgICAgcmVqb2luR2FtZSgpXHJcbiAgICAgIH0gZWxzZSBpZiAocGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMpIHtcclxuICAgICAgICBzdGFydEdhbWUoZmlyc3RTcXVhcmVBcnJheSk7IC8vIFByaXNvbmVycyBzdGFydGluZyB0aGUgZ2FtZVxyXG4gICAgICB9IGVsc2UgaWYgKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTKSB7XHJcbiAgICAgICAgam9pbkdhbWUoKTsgLy8gR3VhcmRzIGpvaW5pbmcgdGhlIGdhbWVcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGFydE9ic2VydmluZ0dhbWUoKTsgLy8gT2JzZXJ2ZXIgdmlld2luZyB0aGUgZ2FtZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VuZE5leHRNZXNzYWdlID0gKGpNZXNzYWdlKSA9PiB7XHJcbiAgICAgIGFkZFNuYXQoYFNlbmRpbmcgbWVzc2FnZTogZnVuYz0ke2pNZXNzYWdlLmZ1bmN9YCk7XHJcbiAgICAgIGNsaWVudC5zZW5kKGpNZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRTbmF0ID0gKHNuYXQpID0+IHtcclxuICAgICAgbGV0IG5ld1NuYXRzID0gWy4uLnNuYXRzXTtcclxuICAgICAgbGV0IGN1cnJlbnRfZGF0ZXRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBsZXQgY3VycmVudF9ob3VycyA9IGN1cnJlbnRfZGF0ZXRpbWUuZ2V0SG91cnMoKTtcclxuICAgICAgbGV0IGN1cnJlbnRfbWludXRlcyA9IGN1cnJlbnRfZGF0ZXRpbWUuZ2V0TWludXRlcygpO1xyXG4gICAgICBsZXQgY3VycmVudF9zZWNvbmRzID0gY3VycmVudF9kYXRldGltZS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgIGxldCBmb3JtYXR0ZWRfZGF0ZSA9IGAke2N1cnJlbnRfaG91cnMgPCAxMCA/ICcwJyA6ICcnfSR7Y3VycmVudF9ob3Vyc306JHtjdXJyZW50X21pbnV0ZXMgPCAxMCA/ICcwJyA6ICcnfSR7Y3VycmVudF9taW51dGVzfToke2N1cnJlbnRfc2Vjb25kcyA8IDEwID8gJzAnIDogJyd9JHtjdXJyZW50X3NlY29uZHN9YDtcclxuICAgICAgbmV3U25hdHMucHVzaChgJHtmb3JtYXR0ZWRfZGF0ZX06ICR7c25hdH1gKTtcclxuICAgICAgc2V0U25hdHMobmV3U25hdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0YXJ0R2FtZSA9IChmaXJzdFNxdWFyZUFycmF5KSA9PiB7XHJcbiAgICAgIGxldCBuZXdTeW5jc3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgICBsZXQgdGVtcFBUaWxlcyA9IFtdO1xyXG4gICAgICBsZXQgdGVtcEdUaWxlcyA9IFtdO1xyXG4gICAgICBsZXQgdGVtcFRpbGVzID0gWy4uLmluaXRpYWx0aWxlc107XHJcbiAgICAgIHdoaWxlICh0ZW1wUFRpbGVzLmxlbmd0aCA8IHJhY2tzaXplKSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZW1wVGlsZXMubGVuZ3RoKTtcclxuICAgICAgICB0ZW1wUFRpbGVzLnB1c2godGVtcFRpbGVzW3JhbmRdKTtcclxuICAgICAgICB0ZW1wVGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZW1wVGlsZXMubGVuZ3RoKTtcclxuICAgICAgICB0ZW1wR1RpbGVzLnB1c2godGVtcFRpbGVzW3JhbmRdKTtcclxuICAgICAgICB0ZW1wVGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRlbXBQVGlsZXMuc29ydCgpO1xyXG4gICAgICB0ZW1wR1RpbGVzLnNvcnQoKTtcclxuICAgICAgc2V0U3luY3N0YW1wKG5ld1N5bmNzdGFtcCk7XHJcbiAgICAgIHNldEd0aWxlcyh0ZW1wR1RpbGVzKTtcclxuICAgICAgc2V0UHRpbGVzKHRlbXBQVGlsZXMpO1xyXG4gICAgICBzZXRUaWxlcyh0ZW1wVGlsZXMpO1xyXG4gICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgc3F1YXJlQXJyYXk6IGZpcnN0U3F1YXJlQXJyYXksXHJcbiAgICAgICAgcHRpbGVzOiBbLi4udGVtcFBUaWxlc10sXHJcbiAgICAgICAgZ3RpbGVzOiBbLi4udGVtcEdUaWxlc10gICAgXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZW5kTmV4dE1lc3NhZ2Uoe1xyXG4gICAgICAgIHR5cGU6IFwicGJcIixcclxuICAgICAgICBmdW5jOiBcInN0YXJ0Z2FtZVwiLFxyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyBHYW1lIGlkXHJcbiAgICAgICAgdGltZXN0YW1wOiBuZXdTeW5jc3RhbXAsIC8vIEZvciB0ZWxsaW5nIHNlcnZlciBteSBsYXN0IGRhdGEgdGltZXN0YW1wXHJcbiAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyBSYWNrIHNpemUgb3B0aW9uXHJcbiAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCwgLy8gVGhpcyB3aWxsIGJlIHByaXNvbmVycyBzaW5jZSBwcmlzb25lcnMgc3RhcnQgdGhlIGdhbWVcclxuICAgICAgICBwbmFtZTogbmlja25hbWUsIC8vIFRoaXMgd2lsbCBiZSB0aGUgcHJpc29uZXJzIG5pY2tuYW1lIHNpbmNlIHByaXNvbmVycyBhcmUgc2VuZGluZyB0aGlzXHJcbiAgICAgICAgdGlsZXM6IHRlbXBUaWxlcywgLy8gVGlsZSBiYWcgYWZ0ZXIgZmlyc3QgcmFja3Mgc2VsZWN0ZWRcclxuICAgICAgICBwdGlsZXM6IHRlbXBQVGlsZXMsIC8vIFByaXNvbmVycyBmaXJzdCByYWNrXHJcbiAgICAgICAgZ3RpbGVzOiB0ZW1wR1RpbGVzIC8vIEd1YXJkcyBmaXJzdCByYWNrXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgam9pbkdhbWUgPSAoKSA9PiB7XHJcbiAgICAgIHNlbmROZXh0TWVzc2FnZSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICBnbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImpvaW5nYW1lXCIsIC8vIGpvaW4gdGhlIGdhbWVcclxuICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50IC8vIHRoaXMgd2lsbCBlYiBndWFyZHNcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZWpvaW5HYW1lID0gKCkgPT4ge1xyXG4gICAgICBzZW5kTmV4dE1lc3NhZ2Uoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwicmVqb2luZ2FtZVwiLCAvLyBqb2luIHRoZSBnYW1lXHJcbiAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCAvLyBjb3VsZCBiZSBlaXRoZXIgcGxheWVyXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3RhcnRPYnNlcnZpbmdHYW1lID0gKCkgPT4ge1xyXG4gICAgICBzZW5kTmV4dE1lc3NhZ2Uoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgIHR5cGU6IFwicGJcIixcclxuICAgICAgICBmdW5jOiBcInN0YXJ0T2JzZXJ2aW5nXCJcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHV0QXRNb3ZlU3RhcnQoKSB7XHJcbiAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICAgIHNldEFsbG93UmV3aW5kKGZhbHNlKTtcclxuICAgICAgc2V0UmNkKC0xLC0xLGMuRElSX05PTkUpO1xyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NHYW1lTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgIGxldCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5nYW1laWQgPT09IGdhbWVpZCAmJiBtZXNzYWdlRGF0YS50eXBlID09PSBcInBiXCIpIHsgLy8gVGhpcyBpbnN0YW5jZSBvZiBhIHByaXNvbiBicmVhayBnYW1lXHJcbiAgICAgICAgYWRkU25hdChgR2V0dGluZyBtZXNzYWdlOiBmdW5jPSR7bWVzc2FnZURhdGEuZnVuY31gKTtcclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJwcm92aWRlZ2FtZWRhdGFcIikge1xyXG4gICAgICAgICAgbGV0IGdkID0gYnVpbGRHYW1lZGF0YUZyb21BcGlkYXRhKG1lc3NhZ2VEYXRhLmFwaWRhdGEpO1xyXG4gICAgICAgICAgLy8gU2VydmVyIHByb3ZpZGluZyBnYW1lIGRhdGFcclxuICAgICAgICAgIHNldFN5bmNzdGFtcChnZC5zeW5jc3RhbXApO1xyXG4gICAgICAgICAgLy8gTm8gb3Bwb25lbnQgbmFtZSBmb3Igb2JzZXJ2ZXJzXHJcbiAgICAgICAgICBpZiAocGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMpIHtcclxuICAgICAgICAgICAgc2V0T3BwbmFtZShnZC5nbmFtZSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTKSB7XHJcbiAgICAgICAgICAgIHNldE9wcG5hbWUoZ2QucG5hbWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0VGlsZXMoZ2QudGlsZXMpO1xyXG4gICAgICAgICAgc2V0U3F1YXJlQXJyYXkoZ2Quc3F1YXJlQXJyYXkpO1xyXG4gICAgICAgICAgc2V0UHRpbGVzKGdkLnB0aWxlcyk7XHJcbiAgICAgICAgICBzZXRHdGlsZXMoZ2QuZ3RpbGVzKTtcclxuICAgICAgICAgIHNldFdob3NldHVybihnZC53aG9zZXR1cm4pO1xyXG4gICAgICAgICAgbGV0IG5ld1NuYXBzaG90ID0ge1xyXG4gICAgICAgICAgICBzcXVhcmVBcnJheTogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShnZC5zcXVhcmVBcnJheSkpLCAvLyBEZWVwIGNvcHlcclxuICAgICAgICAgICAgcHRpbGVzOiBbLi4uZ2QucHRpbGVzXSxcclxuICAgICAgICAgICAgZ3RpbGVzOiBbLi4uZ2QuZ3RpbGVzXVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHNldFNuYXBzaG90KG5ld1NuYXBzaG90KTtcclxuICAgICAgICAgIHNldE1vdmVzKGdkLm1vdmVzKTtcclxuICAgICAgICAgIHNldFJlc2N1ZXMoZ2QucmVzY3Vlcyk7XHJcbiAgICAgICAgICBzZXRBbGxvd1Jld2luZChnZC5hbGxvd1Jld2luZCk7XHJcbiAgICAgICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJwcm92aWRlZ25hbWVcIikge1xyXG4gICAgICAgICAgaWYgKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RJVExFX1BSSVNPTkVSUykge1xyXG4gICAgICAgICAgICBzZXRPcHBuYW1lKG1lc3NhZ2VEYXRhLmduYW1lKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiYWxsb3d1bmRvXCIpIHtcclxuICAgICAgICAgIC8vIE9wcG9uZW50IGNsaWNrZWQgYnV0dG9uIHRvIGFsbG93IHVuZG8gdHVyblxyXG4gICAgICAgICAgc2V0QWxsb3dSZXdpbmQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImNoYXRcIikgeyAvLyBTZXJ2ZXIgZGVjaWRlZCB3aGV0aGVyIHRoaXMgY2hhdCB3YXMgZm9yIG1lXHJcbiAgICAgICAgICBsZXQgbmV3Q2hhdG1zZ3MgPSBbLi4uY2hhdG1zZ3MsIHtmcm9tOiBtZXNzYWdlRGF0YS5uaWNrbmFtZSwgbXNnOiBtZXNzYWdlRGF0YS5zZW5kbXNnfV07XHJcbiAgICAgICAgICBzZXRDaGF0bXNncyhuZXdDaGF0bXNncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInByb3ZpZGVzeW5jZGF0YVwiKSB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgcHJvdmlkZXN5bmRhdGEgcGFzc2VkICR7bWVzc2FnZURhdGEuc3luY3N0YW1wfSBhbmQgSSBoYXZlICR7c3luY3N0YW1wfWApO1xyXG4gICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLnN5bmNzdGFtcCAhPT0gc3luY3N0YW1wKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBPdXQgb2Ygc3luYyAtIHJlcXVlc3RpbmcgbGF0ZXN0IGdhbWUgZGF0YWApO1xyXG4gICAgICAgICAgICByZXF1ZXN0R2FtZURhdGEoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQ2FsbGluZyBzZXRTZWxlY3Rpb24gKGZyb20gaGFuZGxlS2V5RG93bikgdGhlbiBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrIGRvZXMgbm90IGxldCBpdCByZWNvZ25pemUgc2VsZWN0aW9uIHdpdGggdGhlIG5ldyB2YWx1ZVxyXG4gICAgLy8gU28gSSBwYXNzIG5ld1NlbGVjdGlvbiB3aGVuIEkgd2FudCB0byBhbHNvIHNldCBpdCwgb3RoZXJ3aXNlIEkgcGFzcyAtMSB0byBpbnN0cnVjdCBpdCB0byB1c2UgY3VycmVudCB2YWx1ZSBvZiBzZWxlY3Rpb25cclxuICAgIC8vIEFsc28gcGFzc2luZyBuZXdSY2RcclxuICAgIGNvbnN0IGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2sgPSAocmksIGNpLCBuZXdTZWxlY3Rpb24sIG5ld1JjZCkgPT4ge1xyXG4gICAgICBsZXQgbmV3U3F1YXJlQXJyYXkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNxdWFyZUFycmF5KSk7IC8vIERlZXAgY29weVxyXG4gICAgICBsZXQgbmV3U3F1YXJlQXJyYXlSb3cgPSBbLi4ubmV3U3F1YXJlQXJyYXlbcmldXTsgLy8gVGhlIHJvdyBvZiBzcXVhcmVzIHRoZXkgY2xpY2tlZCBvblxyXG4gICAgICBsZXQgbmV3U3F1YXJlQXJyYXlDZWxsID0gbmV3U3F1YXJlQXJyYXlSb3dbY2ldOyAvLyBUaGUgc3F1YXJlIGluIHRoZSByb3cgdGhleSBjbGlja2VkIG9uXHJcbiAgICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgICBsZXQgbmV3Q3VycmVudGNvb3JkcyA9IFsuLi5jdXJyZW50Y29vcmRzXTtcclxuICAgICAgbGV0IGNvb3JkID0gU3RyaW5nKHJpKSArIFwiLVwiICsgU3RyaW5nKGNpKTtcclxuICAgICAgbGV0IGNjaSA9IGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCk7XHJcbiAgICAgIGlmIChuZXdTZWxlY3Rpb24gPT09IC0xKSB7XHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gc2VsZWN0aW9uO1xyXG4gICAgICAgIG5ld1JjZCA9IHJjZDtcclxuICAgICAgfVxyXG4gICAgICBpZiAobmV3U2VsZWN0aW9uID4gLTEgJiYgbmV3U3F1YXJlQXJyYXlDZWxsLnVzZWRieSA9PT0gYy5VU0VEX0JZX05PTkUpIHsgLy8gdGlsZSBpcyBzZWxlY3RlZCBmcm9tIHJhY2sgYW5kIGNsaWNrZWQgc3F1YXJlIGlzIG5vdCB1c2VkIHlldFxyXG4gICAgICAgIGxldCBzZWxlY3RlZFRpbGUgPSB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMgPyBuZXdQdGlsZXNbbmV3U2VsZWN0aW9uXSA6IG5ld0d0aWxlc1tuZXdTZWxlY3Rpb25dO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Q2VsbC5sZXR0ZXIgPSBzZWxlY3RlZFRpbGU7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlDZWxsLnVzZWRieSA9IHdob3NldHVybjtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheVJvd1tjaV0gPSBuZXdTcXVhcmVBcnJheUNlbGw7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlbcmldID0gWy4uLm5ld1NxdWFyZUFycmF5Um93XTtcclxuICAgICAgICB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlNcclxuICAgICAgICAgID8gbmV3UHRpbGVzLnNwbGljZShuZXdTZWxlY3Rpb24sIDEpXHJcbiAgICAgICAgICA6IG5ld0d0aWxlcy5zcGxpY2UobmV3U2VsZWN0aW9uLCAxKTtcclxuICAgICAgICBpZiAod2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTICYmIG5ld1NlbGVjdGlvbiA9PT0gbmV3UHRpbGVzLmxlbmd0aCkgeyBcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbiAtIDFcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX0dVQVJEUyAmJiBuZXdTZWxlY3Rpb24gPT09IG5ld0d0aWxlcy5sZW5ndGgpIHsgXHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdTZWxlY3Rpb24gLSAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24pO1xyXG4gICAgICAgIHNldFNxdWFyZUFycmF5KG5ld1NxdWFyZUFycmF5KTtcclxuICAgICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKFsuLi5jdXJyZW50Y29vcmRzLCBjb29yZF0pO1xyXG4gICAgICAgIHNldFJjZChuZXdSY2QpOyAvLyBrZXkgZG93biBoYW5kbGVyIGZpZ3VyZWQgaXQgb3V0XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjY2kgPiAtMSkgeyAvLyBjbGlja2VkIHNxdWFyZSBoYXMgYSB0aWxlIG9uIGl0IGZyb20gdGhlIGN1cnJlbnQgbW92ZSBpbiBwcm9ncmVzcywgc28gcHV0IGl0IGJhY2sgb24gdGhlIHBsYXllciByYWNrXHJcbiAgICAgICAgd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTXHJcbiAgICAgICAgICA/IG5ld1B0aWxlcy5wdXNoKG5ld1NxdWFyZUFycmF5Q2VsbC5sZXR0ZXIpXHJcbiAgICAgICAgICA6IG5ld0d0aWxlcy5wdXNoKG5ld1NxdWFyZUFycmF5Q2VsbC5sZXR0ZXIpO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Q2VsbC51c2VkYnkgPSBjLlVTRURfQllfTk9ORTtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheUNlbGwubGV0dGVyID0gYy5MRVRURVJfTk9ORTtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheVJvd1tjaV0gPSBuZXdTcXVhcmVBcnJheUNlbGw7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlbcmldID0gWy4uLm5ld1NxdWFyZUFycmF5Um93XTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24oXHJcbiAgICAgICAgICB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMgPyBuZXdQdGlsZXMubGVuZ3RoIC0gMSA6IG5ld0d0aWxlcy5sZW5ndGggLSAxXHJcbiAgICAgICAgKTtcclxuICAgICAgICBuZXdDdXJyZW50Y29vcmRzLnNwbGljZShjY2ksIDEpO1xyXG4gICAgICAgIHNldFNxdWFyZUFycmF5KG5ld1NxdWFyZUFycmF5KTtcclxuICAgICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKG5ld0N1cnJlbnRjb29yZHMpO1xyXG4gICAgICAgIHNldFJjZCgtMSwtMSxjLkRJUl9OT05FKTsgLy8gbWFrZSBwbGF5ZXIgY2xpY2sgYWdhaW4gdG8gc2V0IGRpcmVjdGlvblxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvLyBUaGV5IGRpZG4ndCBjbGljayBhIHNxdWFyZSB0byBwbGFjZSBhIHNlbGVjdGVkIHRpbGUgdGhlcmVcclxuICAgICAgLy8gVGhleSBkaWRuJ3QgY2xpY2sgYSBzcXVhcmUgdG8gcmVtb3ZlIGFuIGV4aXN0aW5nIHRpbGVcclxuICAgICAgaWYgKG5ld1NxdWFyZUFycmF5Q2VsbC51c2VkYnkgPT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgLy8gVGhlcmUgaXMgbm90aGluZyBvbiB0aGUgc3F1YXJlIHNvIHRoZXkgYXJlIHBpY2tpbmcgd2hlcmUgdG8gcGxhY2UgdGhlIG5leHQgdGlsZSB2aWEga2V5Ym9hcmRcclxuICAgICAgICBsZXQgbmV3RGlyZWN0aW9uID0gcmNkWzBdICE9PSByaSB8fCByY2RbMV0gIT09IGNpID8gYy5ESVJfUklHSFQgOiAvL2NsaWNrIG5ldyBzcXVhcmUsIHN0YXJ0IHdpdGggcmlnaHRcclxuICAgICAgICAgcmNkWzJdID09PSBjLkRJUl9SSUdIVCA/IGMuRElSX0RPV04gOiAvL2NsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIHJpZ2h0LCBjaGFuZ2UgdG8gZG93blxyXG4gICAgICAgICByY2RbMl0gPT09IGMuRElSX0RPV04gPyBjLkRJUl9OT05FIDogLy9jbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyBkb3duLCBjaGFuZ2UgdG8gbm8gZGlyZWN0aW9uXHJcbiAgICAgICAgIGMuRElSX1JJR0hUOyAvLyBjbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyBubyBkaXJlY3Rpb24sIGNoYW5nZSB0byByaWdodFxyXG4gICAgICAgIG5ld1JjZCA9IFtyaSxjaSxuZXdEaXJlY3Rpb25dO1xyXG4gICAgICAgIHNldFJjZChuZXdSY2QpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IGhhbmRsZVJhY2tUaWxlQ2xpY2sgPSAodGlsZWluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX09CU0VSVkVSKSB7cmV0dXJuO31cclxuICAgICAgLy8gSWYgbm8gdGlsZSBpcyBzZWxlY3RlZCBhbHJlYWR5IHRoZW4gc2V0IHRoZSBzZWxlY3Rpb25cclxuICAgICAgaWYgKHNlbGVjdGlvbiA9PT0gLTEpIHtcclxuICAgICAgICBzZXRTZWxlY3Rpb24odGlsZWluZGV4KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gSWYgdGhlIHNhbWUgdGlsZSBpcyBhbHJlYWR5IHNlbGVjdGVkIHRoZW4gdW5zZWxlY3RcclxuICAgICAgaWYgKHNlbGVjdGlvbiA9PT0gdGlsZWluZGV4KSB7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gQSB0aWxlIHdhcyBhbHJlYWR5IHNlbGVjdGVkIGFuZCB0aGV5IGNsaWNrZWQgYW5vdGhlciB0aWxlIC0gbW92ZSB0aGUgdGlsZVxyXG4gICAgICBsZXQgbmV3cmFjayA9IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gWy4uLnB0aWxlc10gOiBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IG1vdmVmcm9tID0gc2VsZWN0aW9uO1xyXG4gICAgICBsZXQgbW92ZXRpbGUgPSBuZXdyYWNrW21vdmVmcm9tXTtcclxuICAgICAgbGV0IG1vdmV0byA9IHRpbGVpbmRleDtcclxuICAgICAgbmV3cmFjay5zcGxpY2UobW92ZWZyb20sIDEpOyAvLyByZW1vdmUgdGlsZSBmcm9tIG9yaWdpbmFsIHNlbGVjdGVkIHBvc2l0aW9uXHJcbiAgICAgIG5ld3JhY2suc3BsaWNlKG1vdmV0bywwLG1vdmV0aWxlKTsgLy8gaW5zZXJ0IG1vdmVkIHRpbGUgYXQgdGhlIG5ld2x5IHNlbGVjdGVkIHBvc2l0aW9uXHJcbiAgICAgIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gc2V0UHRpbGVzKG5ld3JhY2spIDogc2V0R3RpbGVzKG5ld3JhY2spO1xyXG4gICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZW5kUGxheWVyc1R1cm4oKSB7XHJcbiAgICAgIGlmICghaXNQbGF5VmFsaWQoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgcGxheWluZm8gPSBhd2FpdCBnZXRQbGF5SW5mbygpO1xyXG4gICAgICBpZiAocGxheWluZm8uaW52YWxpZHdvcmRzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGFsZXJ0KGBJbnZhbGlkIGFjY29yZGluZyB0byBFTkFCTEUySyBsZXhpY29uOiAke3BsYXlpbmZvLmludmFsaWR3b3Jkcy5qb2luKCkucmVwbGFjZShcIi5cIixcIj9cIikudG9VcHBlckNhc2UoKX1gKTtcclxuICAgICAgICByZXR1cm47IC8vIERvIG5vdCBhcHBseSB0aGUgcGxheVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBuZXdSZXNjdWVzID0gcmVzY3VlcztcclxuICAgICAgaWYgKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTKSB7XHJcbiAgICAgICAgbGV0IGVzY2FwZWhhdGNoZXMgPSBbXHJcbiAgICAgICAgICBcIjAtMFwiLFxyXG4gICAgICAgICAgXCIwLVwiICsgbWlkZGxlLFxyXG4gICAgICAgICAgXCIwLVwiICsgZWRnZSxcclxuICAgICAgICAgIG1pZGRsZSsgXCItMFwiLFxyXG4gICAgICAgICAgbWlkZGxlICsgXCItXCIgKyBlZGdlLFxyXG4gICAgICAgICAgZWRnZSArIFwiLTBcIixcclxuICAgICAgICAgIGVkZ2UgKyBcIi1cIiArIG1pZGRsZSxcclxuICAgICAgICAgIGVkZ2UgKyBcIi1cIiArIGVkZ2VcclxuICAgICAgICBdOyAvLyBjb29yZHMgb2YgZXNjYXBlIGhhdGNoZXNcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRjb29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmIChlc2NhcGVoYXRjaGVzLmluZGV4T2YoY3VycmVudGNvb3Jkc1tpXSkgPiAtMSkge1xyXG4gICAgICAgICAgICBuZXdSZXNjdWVzID0gbmV3UmVzY3VlcyArIDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBuZXdQbGF5ZXJUaWxlcyA9IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gWy4uLnB0aWxlc10gOiBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgICAgd2hpbGUgKG5ld1BsYXllclRpbGVzLmxlbmd0aCA8IHJhY2tzaXplICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgbmV3UGxheWVyVGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIG5ld1BsYXllclRpbGVzLnNvcnQoKTtcclxuICAgICAgbGV0IG5ld1dob3NldHVybiA9IG5ld1BsYXllclRpbGVzLmxlbmd0aCA9PT0gMCA/IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUiA6IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gYy5XSE9TRV9UVVJOX0dVQVJEUyA6IGMuUEFSVFlfVFlQRV9QUklTT05FUlM7XHJcbiAgICAgIGlmICghYW55VW51c2VkRXNjYXBlSGF0Y2hlcyhzcXVhcmVBcnJheSkpIHtcclxuICAgICAgICBuZXdXaG9zZXR1cm4gPSBjLldIT1NFX1RVUk5fR0FNRU9WRVI7IC8vIE5vIGVzY2FwZSBoYXRjaGVzIGxlZnRcclxuICAgICAgfVxyXG4gICAgICBsZXQgbmV3TW92ZSA9IHtieTogcGFydGljaXBhbnQsIHR5cGU6IGMuTU9WRV9UWVBFX1BMQVksIG1haW53b3JkOiBwbGF5aW5mby5tYWlud29yZCwgZXh0cmF3b3JkczogcGxheWluZm8uZXh0cmF3b3JkcywgcG9zOiBwbGF5aW5mby5wb3N9O1xyXG4gICAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgICBsZXQgbmV3U3luY3N0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgc2V0U3luY3N0YW1wKG5ld1N5bmNzdGFtcCk7XHJcbiAgICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgICBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IHNldFB0aWxlcyhuZXdQbGF5ZXJUaWxlcykgOiBzZXRHdGlsZXMobmV3UGxheWVyVGlsZXMpO1xyXG4gICAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgICAgc2V0UmVzY3VlcyhuZXdSZXNjdWVzKTtcclxuICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgIHNxdWFyZUFycmF5OiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNxdWFyZUFycmF5KSksIC8vIERlZXAgY29weVxyXG4gICAgICAgIHB0aWxlczogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBbLi4ubmV3UGxheWVyVGlsZXNdIDogWy4uLnB0aWxlc10sXHJcbiAgICAgICAgZ3RpbGVzOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IFsuLi5ndGlsZXNdIDogWy4uLm5ld1BsYXllclRpbGVzXSxcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCBqc2VuZCA9IHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IFwiZXB0XCIgOiBcImVndFwiLCAvLyBlbmQgcHJpc29uZXJzIG9yIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgdGltZXN0YW1wOiBuZXdTeW5jc3RhbXAsIC8vIGZvciBkYXRhIHN5bmMgbG9naWNcclxuICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LFxyXG4gICAgICAgIHB0aWxlczogbmV3UGxheWVyVGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4sIC8vIG1heSBoYXZlIGVuZGVkIHRoZSBnYW1lXHJcbiAgICAgICAgbW92ZTogbmV3TW92ZSwgLy8gdGhlIG1vdmUgdGhhdCB3YXMgbWFkZVxyXG4gICAgICAgIHJlc2N1ZXM6IG5ld1Jlc2N1ZXMgLy8gbWF5IGhhdmUgcmVzY3VlZCBhbm90aGVyIHByaXNvbmVyXHJcbiAgICAgIH07XHJcbiAgICAgIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8ganNlbmQucHRpbGVzID0gbmV3UGxheWVyVGlsZXMgOiBqc2VuZC5ndGlsZXMgPSBuZXdQbGF5ZXJUaWxlcztcclxuICAgICAgc2VuZE5leHRNZXNzYWdlKGpzZW5kKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBzd2FwUGxheWVyc1RpbGVzID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGlsZXMubGVuZ3RoIDwgcmFja3NpemUpIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJOZWVkIFwiICsgcmFja3NpemUgKyBcIiB0aWxlcyBpbiB0aGUgYmFnIHRvIGV4Y2hhbmdlXCIpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFNuYXQoYFN3YXBwaW5nIHJhY2suYCk7XHJcbiAgICAgIGxldCBuZXdQbGF5ZXJUaWxlcyA9IFtdO1xyXG4gICAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgICB3aGlsZSAobmV3UGxheWVyVGlsZXMubGVuZ3RoIDwgcmFja3NpemUgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgICBuZXdQbGF5ZXJUaWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgbmV3UGxheWVyVGlsZXMuc29ydCgpO1xyXG4gICAgICBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IG5ld1RpbGVzID0gWy4uLm5ld1RpbGVzLCAuLi5zbmFwc2hvdC5wdGlsZXNdIDogbmV3VGlsZXMgPSBbLi4ubmV3VGlsZXMsIC4uLnNuYXBzaG90Lmd0aWxlc107XHJcbiAgICAgIG5ld1RpbGVzLnNvcnQoKTtcclxuICAgICAgbGV0IG5ld01vdmUgPSB7Ynk6IHBhcnRpY2lwYW50LCB0eXBlOiBjLk1PVkVfVFlQRV9TV0FQfTtcclxuICAgICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgICAgbGV0IG5ld1N5bmNzdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgIHNldFN5bmNzdGFtcChuZXdTeW5jc3RhbXApO1xyXG4gICAgICBzZXRTcXVhcmVBcnJheShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNuYXBzaG90LnNxdWFyZUFycmF5KSkpOyAvLyBEZWVwIGNvcHlcclxuICAgICAgc2V0V2hvc2V0dXJuKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gYy5XSE9TRV9UVVJOX0dVQVJEUyA6IGMuV0hPU0VfVFVSTl9QUklTT05FUlMpO1xyXG4gICAgICBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IHNldFB0aWxlcyhuZXdQbGF5ZXJUaWxlcykgOiBzZXRHdGlsZXMobmV3UGxheWVyVGlsZXMpO1xyXG4gICAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgIHNxdWFyZUFycmF5OiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNuYXBzaG90LnNxdWFyZUFycmF5KSksIC8vIERlZXAgY29weVxyXG4gICAgICAgIHB0aWxlczogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBbLi4ubmV3UGxheWVyVGlsZXNdIDogWy4uLnB0aWxlc10sXHJcbiAgICAgICAgZ3RpbGVzOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IFsuLi5ndGlsZXNdIDogWy4uLm5ld1BsYXllclRpbGVzXSxcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCBqc2VuZCA9IHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IFwiZXB0XCIgOiBcImVndFwiLCAvLyBlbmQgcHJpc29uZXJzIG9yIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgdGltZXN0YW1wOiBuZXdTeW5jc3RhbXAsIC8vIGZvciBkYXRhIHN5bmMgbG9naWNcclxuICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LFxyXG4gICAgICAgIHdob3NldHVybjogYy5XSE9TRV9UVVJOX0dVQVJEUywgLy8gc3dhcCBuZXZlciBlbmRzIHRoZSBnYW1lIHNvIGdvIHRvIG9wcG9uZW50XHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgbW92ZTogbmV3TW92ZSAvLyB0aGUgbW92ZSB0aGF0IHdhcyBtYWRlXHJcbiAgICAgIH07XHJcbiAgICAgIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8ganNlbmQucHRpbGVzID0gbmV3UGxheWVyVGlsZXMgOiBqc2VuZC5ndGlsZXMgPSBuZXdQbGF5ZXJUaWxlcztcclxuICAgICAgc2VuZE5leHRNZXNzYWdlKGpzZW5kKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gaXNQbGF5VmFsaWQoKSB7XHJcbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHdvcmQgc2luY2UgaXQgYWZmZWN0cyB0aGUgdmFsaWRpdHkgcnVsZXNcclxuICAgICAgbGV0IGZpcnN0V29yZCA9IHRydWU7XHJcbiAgICAgIGxldCBudW1tb3ZlcyA9IG1vdmVzLmxlbmd0aDtcclxuICAgICAgZm9yICh2YXIgbW92ZWluZGV4ID0gMDsgZmlyc3RXb3JkICYmIChtb3ZlaW5kZXggPCBudW1tb3Zlcyk7ICsrbW92ZWluZGV4KSB7XHJcbiAgICAgICAgaWYgKG1vdmVzW21vdmVpbmRleF0udHlwZSA9PT0gYy5NT1ZFX1RZUEVfUExBWSkge1xyXG4gICAgICAgICAgZmlyc3RXb3JkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIEZpcnN0IHdvcmQgbXVzdCBoaXQgY2VudGVyIHNxdWFyZVxyXG4gICAgICBpZiAoZmlyc3RXb3JkICYmIHNxdWFyZUFycmF5W21pZGRsZV1bbWlkZGxlXS51c2VkYnkgPT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwiRmlyc3QgcGxheSBtdXN0IGhpdCBjZW50ZXIgc3F1YXJlXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICAvLyBBdCBsZWFzdCAxIHRpbGUgbXVzdCBiZSBwbGF5ZWRcclxuICAgICAgaWYgKGN1cnJlbnRjb29yZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwiWW91IGRpZG4ndCBwbGF5IGFueSB0aWxlc1wiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgLyogR28gdGhyb3VnaCBlYWNoIHBsYXllZCB0aWxlXHJcbiAgICAgICAgICBNYWtlIHN1cmUgaXQgaXMgbm90IGlzb2xhdGVkIGZyb20gYWxsIHRoZSBvdGhlciB0aWxlc1xyXG4gICAgICAgICAgRGV0ZXJtaW5lIHRoZSBsb3dlc3QgYW5kIGhpZ2hlc3Qgcm93IGFuZCBjb2x1bW4gbnVtYmVycyBvZiB0aWxlcyBwbGF5ZWQgdGhpcyBtb3ZlXHJcbiAgICAgICovXHJcbiAgICAgIGxldCBudW1jb29yZHMgPSBjdXJyZW50Y29vcmRzLmxlbmd0aDtcclxuICAgICAgbGV0IGxvd3JvdyA9IGVkZ2UrMTtcclxuICAgICAgbGV0IGhpZ2hyb3cgPSAtMTtcclxuICAgICAgbGV0IGxvd2NvbCA9IGVkZ2UrMTtcclxuICAgICAgbGV0IGhpZ2hjb2wgPSAtMTtcclxuICAgICAgZm9yICh2YXIgY29vcmQ9MDsgY29vcmQgPCBudW1jb29yZHM7ICsrY29vcmQpIHsgLy8gRWFjaCB0aWxlIHBsYXllZCB0aGlzIG1vdmVcclxuICAgICAgICBsZXQgdGVtcHJvdyA9IHBhcnNlSW50KGN1cnJlbnRjb29yZHNbY29vcmRdLnNwbGl0KFwiLVwiKVswXSk7XHJcbiAgICAgICAgbGV0IHRlbXBjb2wgPSBwYXJzZUludChjdXJyZW50Y29vcmRzW2Nvb3JkXS5zcGxpdChcIi1cIilbMV0pO1xyXG4gICAgICAgIGlmICh0ZW1wcm93IDwgbG93cm93KSB7IGxvd3JvdyA9IHRlbXByb3c7fVxyXG4gICAgICAgIGlmICh0ZW1wcm93ID4gaGlnaHJvdykgeyBoaWdocm93ID0gdGVtcHJvdzt9XHJcbiAgICAgICAgaWYgKHRlbXBjb2wgPCBsb3djb2wpIHsgbG93Y29sID0gdGVtcGNvbDt9XHJcbiAgICAgICAgaWYgKHRlbXBjb2wgPiBoaWdoY29sKSB7IGhpZ2hjb2wgPSB0ZW1wY29sO31cclxuICAgICAgICAvLyBNYWtlIHN1cmUgdGhlcmUgaXMgYW5vdGhlciB0aWxlIGltbWVkaWF0ZWx5IGFib3ZlLCBiZWxvdywgbGVmdCwgb3IgcmlnaHQgKG5vdCBpc29sYXRlZClcclxuICAgICAgICBpZiAoISh0ZW1wcm93ID4gMCAmJiBzcXVhcmVBcnJheVt0ZW1wcm93LTFdW3RlbXBjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpICYmXHJcbiAgICAgICAgICAhKHRlbXBjb2wgPiAwICYmIHNxdWFyZUFycmF5W3RlbXByb3ddW3RlbXBjb2wtMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgJiZcclxuICAgICAgICAgICEodGVtcHJvdyA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbdGVtcHJvdysxXVt0ZW1wY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSAmJlxyXG4gICAgICAgICAgISh0ZW1wY29sIDwgZWRnZSAmJiBzcXVhcmVBcnJheVt0ZW1wcm93XVt0ZW1wY29sKzFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiRWFjaCBwbGF5ZWQgdGlsZSBtdXN0IGJlIHBhcnQgb2YgYSB3b3JkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gVXNpbmcgdGhlIGhpZ2ggYW5kIGxvdyB2YWx1ZXMsIGNoZWNrIGlmIHRoZSBwbGF5IGlzIGluIGEgc3RyYWlnaHQgbGluZVxyXG4gICAgICBpZiAobG93cm93ICE9PSBoaWdocm93ICYmIGxvd2NvbCAhPT0gaGlnaGNvbCkge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcIlRpbGVzIHBsYXllZCBtdXN0IGJlIGluIGEgc3RyYWlnaHQgbGluZVwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHBsYXl0aHJ1ID0gZmFsc2U7XHJcbiAgICAgIGxldCBob29rbWFkZSA9IGZhbHNlO1xyXG4gICAgICAvKiBUcmF2ZXJzZSBmcm9tIGZpcnN0IHBsYXllZCB0aWxlIHRvIGxhc3QgcGxheWVyIHRpbGVcclxuICAgICAgICAgIE1ha2Ugc3VyZSB0aGVyZSBhcmUgbm8gdW51c2VkIHNxdWFyZXMgaW5iZXR3ZWVuIChnYXBzIGluIHRoZSBwbGF5ZWQgd29yZClcclxuICAgICAgICAgIENoZWNrIGlmIHdlIHBsYXllZCB0aHJvdWdoIGV4aXN0aW5nIHRpbGVzXHJcbiAgICAgICAgICBDaGVjayBpZiB3ZSBob29rZWQgZXhpc3RpbmcgdGlsZXMvd29yZHNcclxuICAgICAgKi9cclxuICAgICAgZm9yICh2YXIgdGVtcHJvdyA9IGxvd3JvdzsgdGVtcHJvdyA8PSBoaWdocm93OyArK3RlbXByb3cpIHtcclxuICAgICAgICBmb3IgKHZhciB0ZW1wY29sID0gbG93Y29sOyB0ZW1wY29sIDw9IGhpZ2hjb2w7ICsrdGVtcGNvbCkge1xyXG4gICAgICAgICAgaWYgKHNxdWFyZUFycmF5W3RlbXByb3ddW3RlbXBjb2xdLnVzZWRieSA9PT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiVGhlcmUgaXMgYSBnYXAgaW4geW91ciB3b3JkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIWZpcnN0V29yZCkgeyAvLyBQbGF5IHRocm91Z2ggYW5kIGhvb2sgbm90IHBvc3NpYmxlIG9uIGZpcnN0IG1vdmVcclxuICAgICAgICAgICAgbGV0IHRlbXBjb29yZCA9IHRlbXByb3cgKyBcIi1cIiArIHRlbXBjb2w7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50Y29vcmRzLmluZGV4T2YodGVtcGNvb3JkKSA8IDApIHsgLy8gVGlsZSB3YXMgbm90IHBsYXllZCB0aGlzIG1vdmUgKHdhcyBhbHJlYWR5IG9uIHRoZSBib2FyZClcclxuICAgICAgICAgICAgICBwbGF5dGhydSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiB0ZW1wcm93ID4gMCAmJiBzcXVhcmVBcnJheVt0ZW1wcm93LTFdW3RlbXBjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgdGVtcHJvdyA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbdGVtcHJvdysxXVt0ZW1wY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIHRlbXBjb2wgPiAwICYmIHNxdWFyZUFycmF5W3RlbXByb3ddW3RlbXBjb2wtMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiB0ZW1wY29sIDwgZWRnZSAmJiBzcXVhcmVBcnJheVt0ZW1wcm93XVt0ZW1wY29sKzFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgaG9va21hZGUgPSB0cnVlOyB9ICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFmaXJzdFdvcmQpIHtcclxuICAgICAgICAvLyBXZSBhbHJlYWR5IGZvdW5kIHBsYXkgdGhyb3VnaCBhIHRpbGUgYmV0d2VlbiBmaXJzdCBhbmQgbGFzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIC8vIE5vdyBjaGVjayBpZiBwbGF5ZWQgd29yZCBoYXMgYSB0aWxlIGJlZm9yZSBmaXJzdCBvciBhZnRlciBsYXN0IHBsYXllZCB0aWxlXHJcbiAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiBsb3djb2wgPiAwICYmIHNxdWFyZUFycmF5W2xvd3Jvd11bbG93Y29sLTFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiBoaWdoY29sIDwgZWRnZSAmJiBzcXVhcmVBcnJheVtsb3dyb3ddW2hpZ2hjb2wrMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGxvd3JvdyA+IDAgJiYgc3F1YXJlQXJyYXlbbG93cm93LTFdW2xvd2NvbF0gIT09IGMuVVNFRF9CWV9OT05FKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgaGlnaHJvdyA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbaGlnaHJvdysxXVtsb3djb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICAgICAgLy8gTm93IHdlIGhhdmUgZnVsbHkgaWRlbnRpZmllZCBwbGF5IHRocm91Z2ggd2UgY2FuIG1ha2Ugc3VyZSB0aGV5IHBsYXllZCB0aHJvdWdoIG9yIG1hZGUgYSBob29rXHJcbiAgICAgICAgLy8gVGhpcyBpbiBtYW5kYXRvcnkgc2luY2UgaXQgaXMgbm90IHRoZSBmaXJzdCBtb3ZlXHJcbiAgICAgICAgaWYgKCFwbGF5dGhydSAmJiAhaG9va21hZGUpIHtcclxuICAgICAgICAgIHdpbmRvdy5hbGVydChcIk5ldyB3b3JkcyBtdXN0IGV4dGVuZCBhbiBleGlzdGluZyB3b3JkIGFuZC9vciBob29rIGV4aXN0aW5nIHdvcmRzIG9yIHRpbGVzXCIpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFBsYXlJbmZvKCkge1xyXG4gICAgICBsZXQgcGxheWluZm8gPSB7fTtcclxuICAgICAgbGV0IG1haW53b3JkID0gXCJcIjtcclxuICAgICAgbGV0IGV4dHJhd29yZHMgPSBbXTtcclxuICAgICAgbGV0IHdvcmRzdGFydGNvb3JkID0gXCJcIjtcclxuICAgICAgbGV0IG51bXJvd3MgPSBlZGdlKzE7XHJcbiAgICAgIGxldCBudW1jb2xzID0gZWRnZSsxO1xyXG4gICAgICBsZXQgbG93cm93ID0gbnVtcm93cztcclxuICAgICAgbGV0IGhpZ2hyb3cgPSAtMTtcclxuICAgICAgbGV0IGxvd2NvbCA9IG51bWNvbHM7XHJcbiAgICAgIGxldCBoaWdoY29sID0gLTE7XHJcbiAgICAgIGxldCBudW1jb29yZHMgPSBjdXJyZW50Y29vcmRzLmxlbmd0aDtcclxuICAgICAgZm9yICh2YXIgY29vcmQ9MDsgY29vcmQgPCBudW1jb29yZHM7ICsrY29vcmQpIHtcclxuICAgICAgICBsZXQgcm93ID0gcGFyc2VJbnQoY3VycmVudGNvb3Jkc1tjb29yZF0uc3BsaXQoXCItXCIpWzBdKTtcclxuICAgICAgICBsZXQgY29sID0gcGFyc2VJbnQoY3VycmVudGNvb3Jkc1tjb29yZF0uc3BsaXQoXCItXCIpWzFdKTtcclxuICAgICAgICBpZiAocm93IDwgbG93cm93KSB7XHJcbiAgICAgICAgICBsb3dyb3cgPSByb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyb3cgPiBoaWdocm93KSB7XHJcbiAgICAgICAgICBoaWdocm93ID0gcm93O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sIDwgbG93Y29sKSB7XHJcbiAgICAgICAgICBsb3djb2wgPSBjb2w7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2wgPiBoaWdoY29sKSB7XHJcbiAgICAgICAgICBoaWdoY29sID0gY29sO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobG93cm93IDwgaGlnaHJvdyB8fCBudW1jb29yZHMgPT09IDEpIHsgLy8gdGlsZXMgcGxhY2VkIG9uIGRpZmZlcmVuY2Ugcm93cyBzbyBwbGF5IGlzIHZlcnRpY2FsLCBvciBzaW5nbGUgdGlsZSBwbGF5ZWRcclxuICAgICAgICBsZXQgY29sID0gbG93Y29sOyAvLyBsb3djb2wgYW5kIGhpZ2hjb2wgd2lsbCBoYXZlIHRoZSBzYW1lIHZhbHVlXHJcbiAgICAgICAgLy8gZmluZCB0aGUgbG93ZXN0IHJvdyBudW1iZXIgb2YgdGhlIG1haW4gd29yZCwgd2hpY2ggbWF5IGJlIGxvd2VyIHRoYW4gdGhhdCBvZiB0aGUgZmlyc3QgcGxheWVkIHRpbGVcclxuICAgICAgICBsZXQgbG93ZXN0cm93ID0gbG93cm93O1xyXG4gICAgICAgIHdoaWxlIChsb3dlc3Ryb3cgPiAwICYmIHNxdWFyZUFycmF5W2xvd2VzdHJvdy0xXVtjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgIGxvd2VzdHJvdyA9IGxvd2VzdHJvdyAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZpbmQgdGhlIGhpZ2hlc3Qgcm93IG51bWJlciBvZiB0aGUgbWFpbiB3b3JkLCB3aGljaCBtYXkgYmUgaGlnaGVyIHRoYW4gdGhhdCBvZiB0aGUgbGFzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIGxldCBoaWdoZXN0cm93ID0gaGlnaHJvdztcclxuICAgICAgICB3aGlsZSAoaGlnaGVzdHJvdyA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbaGlnaGVzdHJvdysxXVtjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgIGhpZ2hlc3Ryb3cgPSBoaWdoZXN0cm93ICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd29yZHN0YXJ0Y29vcmQgPSBjLkJPQVJEX0NPTF9IRUFERVJTW2NvbF0gKyBjLkJPQVJEX1JPV19IRUFERVJTW2xvd2VzdHJvd107IC8vIHZlcnRpY2FsIHBsYXkgY29vcmRzIHN0YXJ0IHdpdGggY29sIGhlYWRlclxyXG4gICAgICAgIGZvciAodmFyIHJvdyA9IGxvd2VzdHJvdzsgcm93IDw9IGhpZ2hlc3Ryb3c7ICsrcm93KSB7XHJcbiAgICAgICAgICBtYWlud29yZCA9IG1haW53b3JkICsgc3F1YXJlQXJyYXlbcm93XVtjb2xdLmxldHRlcjtcclxuICAgICAgICAgIGxldCBjb29yZCA9IHJvdyArIFwiLVwiICsgY29sO1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCkgPiAtMSkgeyAvLyBUaGlzIHRpbGUgd2FzIHBsYXllZCwgY2hlY2sgZm9yIGhvb2tzXHJcbiAgICAgICAgICAgIGxldCBsb3dlc3Rjb2wgPSBjb2w7XHJcbiAgICAgICAgICAgIHdoaWxlIChsb3dlc3Rjb2wgPiAwICYmIHNxdWFyZUFycmF5W3Jvd11bbG93ZXN0Y29sLTFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgICBsb3dlc3Rjb2wgPSBsb3dlc3Rjb2wgLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBoaWdoZXN0Y29sID0gY29sO1xyXG4gICAgICAgICAgICB3aGlsZSAoaGlnaGVzdGNvbCA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbcm93XVtoaWdoZXN0Y29sKzFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgICBoaWdoZXN0Y29sID0gaGlnaGVzdGNvbCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxvd2VzdGNvbCA8IGhpZ2hlc3Rjb2wpIHsgLy8gaG9vayB3YXMgbWFkZVxyXG4gICAgICAgICAgICAgIGxldCBleHRyYXdvcmQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIHRlbXBjb2wgPSBsb3dlc3Rjb2w7IHRlbXBjb2wgPD0gaGlnaGVzdGNvbDsgKyt0ZW1wY29sKSB7XHJcbiAgICAgICAgICAgICAgICBleHRyYXdvcmQgPSBleHRyYXdvcmQgKyBzcXVhcmVBcnJheVtyb3ddW3RlbXBjb2xdLmxldHRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZXh0cmF3b3JkcyA9IFsuLi5leHRyYXdvcmRzLCBleHRyYXdvcmRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYWlud29yZC5sZW5ndGggPCAyKSB7IC8vIEhvcml6b250YWwgcGxheSBvciBzaW5nbGUgdGlsZSBkcm9wIHRoYXQgY2Fubm90IGJlIGEgdmVydGljYWwgcGxheVxyXG4gICAgICAgIGxldCByb3cgPSBsb3dyb3c7IC8vIGxvd3JvdyBhbmQgaGlnaHJvdyB3aWxsIGhhdmUgdGhlIHNhbWUgdmFsdWVcclxuICAgICAgICAvLyBmaW5kIHRoZSBsb3dlc3QgY29sIG51bWJlciBvZiB0aGUgbWFpbiB3b3JkLCB3aGljaCBtYXkgYmUgbG93ZXIgdGhhbiB0aGF0IG9mIHRoZSBmaXJzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIGxldCBsb3dlc3Rjb2wgPSBsb3djb2w7XHJcbiAgICAgICAgd2hpbGUgKGxvd2VzdGNvbCA+IDAgJiYgc3F1YXJlQXJyYXlbcm93XVtsb3dlc3Rjb2wtMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgbG93ZXN0Y29sID0gbG93ZXN0Y29sIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZmluZCB0aGUgaGlnaGVzdCBjb2wgbnVtYmVyIG9mIHRoZSBtYWluIHdvcmQsIHdoaWNoIG1heSBiZSBoaWdoZXIgdGhhbiB0aGF0IG9mIHRoZSBsYXN0IHBsYXllZCB0aWxlXHJcbiAgICAgICAgbGV0IGhpZ2hlc3Rjb2wgPSBoaWdoY29sO1xyXG4gICAgICAgIHdoaWxlIChoaWdoZXN0Y29sIDwgZWRnZSAmJiBzcXVhcmVBcnJheVtyb3ddW2hpZ2hlc3Rjb2wrMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgaGlnaGVzdGNvbCA9IGhpZ2hlc3Rjb2wgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3b3Jkc3RhcnRjb29yZCA9IGMuQk9BUkRfUk9XX0hFQURFUlNbcm93XSArIGMuQk9BUkRfQ09MX0hFQURFUlNbbG93ZXN0Y29sXTsgLy8gaG9yaXpvbnRhbCBwbGF5IGNvb3JkcyBzdGFydCB3aXRoIHJvdyBoZWFkZXJcclxuICAgICAgICBtYWlud29yZCA9IFwiXCI7IC8vIEluIGNhc2Ugd2UgZ290IGEgMSBsZXR0ZXIgbWFpbndvcmQgaW4gdGhlIHByZXZpb3VzIGJsb2NrXHJcbiAgICAgICAgZXh0cmF3b3JkcyA9IFtdOyAvLyBEaXR0b1xyXG4gICAgICAgIGZvciAodmFyIGNvbCA9IGxvd2VzdGNvbDsgY29sIDw9IGhpZ2hlc3Rjb2w7ICsrY29sKSB7XHJcbiAgICAgICAgICBtYWlud29yZCA9IG1haW53b3JkICsgc3F1YXJlQXJyYXlbcm93XVtjb2xdLmxldHRlcjtcclxuICAgICAgICAgIGxldCBjb29yZCA9IHJvdyArIFwiLVwiICsgY29sO1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCkgPiAtMSkgeyAvLyBUaGlzIHRpbGUgd2FzIHBsYXllZCwgY2hlY2sgZm9yIGhvb2tzXHJcbiAgICAgICAgICAgIGxldCBsb3dlc3Ryb3cgPSByb3c7XHJcbiAgICAgICAgICAgIHdoaWxlIChsb3dlc3Ryb3cgPiAwICYmIHNxdWFyZUFycmF5W2xvd2VzdHJvdy0xXVtjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgICBsb3dlc3Ryb3cgPSBsb3dlc3Ryb3cgLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBoaWdoZXN0cm93ID0gcm93O1xyXG4gICAgICAgICAgICB3aGlsZSAoaGlnaGVzdHJvdyA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbaGlnaGVzdHJvdysxXVtjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgICBoaWdoZXN0cm93ID0gaGlnaGVzdHJvdyArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxvd2VzdHJvdyA8IGhpZ2hlc3Ryb3cpIHsgLy8gaG9vayB3YXMgbWFkZVxyXG4gICAgICAgICAgICAgIGxldCBleHRyYXdvcmQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIHRlbXByb3cgPSBsb3dlc3Ryb3c7IHRlbXByb3cgPD0gaGlnaGVzdHJvdzsgKyt0ZW1wcm93KSB7XHJcbiAgICAgICAgICAgICAgICBleHRyYXdvcmQgPSBleHRyYXdvcmQgKyBzcXVhcmVBcnJheVt0ZW1wcm93XVtjb2xdLmxldHRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZXh0cmF3b3JkcyA9IFsuLi5leHRyYXdvcmRzLCBleHRyYXdvcmRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBpbnZhbGlkd29yZHMgPSBhd2FpdCB2YWxpZGF0ZVdvcmRzKG1haW53b3JkLCBleHRyYXdvcmRzKTtcclxuICAgICAgcGxheWluZm8gPSB7bWFpbndvcmQ6IG1haW53b3JkLCBleHRyYXdvcmRzOiBleHRyYXdvcmRzLCBwb3M6IHdvcmRzdGFydGNvb3JkLCBpbnZhbGlkd29yZHM6IGludmFsaWR3b3Jkc307XHJcbiAgICAgIHJldHVybiBwbGF5aW5mbztcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZVdvcmRzKG1haW53b3JkLCBleHRyYXdvcmRzKSB7XHJcbiAgICAgIC8vIEJ1aWxkIGNvbXBsZXRlIGxpc3Qgb2YgbmV3bHkgZm9ybWVkIHdvcmRzIGZvciB2YWxpZGF0aW9uIGFnYWluc3QgbGV4aWNvblxyXG4gICAgICBsZXQgYWxsd29yZHMgPSBtYWlud29yZDtcclxuICAgICAgZXh0cmF3b3Jkcy5mb3JFYWNoKChldykgPT4ge1xyXG4gICAgICAgIGFsbHdvcmRzID0gYWxsd29yZHMgKyBcIixcIiArIGV3O1xyXG4gICAgICB9KVxyXG4gICAgICBsZXQgdXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VOQUJMRTJLP3ZhbGlkYXRlPScgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20vRU5BQkxFMks/dmFsaWRhdGU9J1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGFsbHdvcmRzLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xyXG4gICAgICBjb25zdCBqZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGpkYXRhLmludmFsaWR3b3JkcztcclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIGFsbG93VW5kb0xhc3RUdXJuKCkge1xyXG4gICAgICBpZiAoIWFsbG93UmV3aW5kKSB7XHJcbiAgICAgICAgc2V0QWxsb3dSZXdpbmQodHJ1ZSk7XHJcbiAgICAgICAgc2VuZE5leHRNZXNzYWdlKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICAgIGZ1bmM6IFwiYWxsb3d1bmRvXCIsIC8vIGFsbG93IHVuZG8gbGFzdCB0dXJuXHJcbiAgICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQgLy8gd2hvIGlzIGFsbG93aW5nIGl0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gcGVyZm9ybVJld2luZCgpIHtcclxuICAgICAgLyogU2VuZCB1bmRvdHVybiB0byBzZXJ2ZXIgYW5kIGl0IHdpbGwgc2VuZCB0aGUgdXBkYXRlZCBnYW1lIGRhdGEgdG8gZ2FtZSBjbGllbnRzLCBpbmNsdWRpbmcgdGhpcyBvbmUgKi9cclxuICAgICAgc2VuZE5leHRNZXNzYWdlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcInVuZG90dXJuXCIgLy8gdW5kbyBsYXN0IHR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCByZWNhbGxUaWxlcyA9ICgpID0+IHtcclxuICAgICAgc2V0U3F1YXJlQXJyYXkoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzbmFwc2hvdC5zcXVhcmVBcnJheSkpKTsgLy8gRGVlcCBjb3B5XHJcbiAgICAgIHNldFB0aWxlcyhbLi4uc25hcHNob3QucHRpbGVzXSk7XHJcbiAgICAgIHNldEd0aWxlcyhbLi4uc25hcHNob3QuZ3RpbGVzXSk7XHJcbiAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgICBzZXRSY2QoWy0xLC0xLGMuRElSX05PTkVdKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBwbGF5ZXJQYXNzVHVybiA9ICgpID0+IHtcclxuICAgICAgbGV0IG5ld01vdmUgPSB7Ynk6IHBhcnRpY2lwYW50LCB0eXBlOiBjLk1PVkVfVFlQRV9QQVNTfTtcclxuICAgICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgICAgbGV0IG5ld1dob3NldHVybiA9IGlzRG91YmxlUGFzcyhuZXdNb3ZlcykgPyBjLldIT1NFX1RVUk5fR0FNRU9WRVIgOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IGMuV0hPU0VfVFVSTl9HVUFSRFMgOiBjLldIT1NFX1RVUk5fUFJJU09ORVJTOyAvLyBJZiBib3RoIHBsYXllcnMgcGFzcyB0aGVuIGVuZCB0aGUgZ2FtZVxyXG4gICAgICBsZXQgbmV3U3luY3N0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgcmVjYWxsVGlsZXMoKTsgLy8gSW4gY2FzZSB0aGV5IHB1dCBzb21lIHRpbGVzIG9uIHRoZSBib2FyZCBiZWZvcmUgY2xpY2tpbmcgUGFzc1xyXG4gICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICBzZXRTeW5jc3RhbXAobmV3U3luY3N0YW1wKTtcclxuICAgICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgICAgc2VuZE5leHRNZXNzYWdlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IFwiZXB0XCIgOiBcImVndFwiLCAvLyBlbmQgcHJpc29uZXJzIG9yIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ld1N5bmNzdGFtcCwgLy8gZm9yIGRhdGEgc3luYyBsb2dpY1xyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCwgLy8gd2hvIHBhc3NlZCB0aGVpciB0dXJuXHJcbiAgICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gZWl0aGVyIGl0IGlzIG5vdyBvcHBvbmVudHMgdHVybiBvciB0aGUgcGFzcyBlbmRlZCB0aGUgZ2FtZVxyXG4gICAgICAgICAgbW92ZTogbmV3TW92ZSAvLyB0aGUgbW92ZSB0aGF0IHdhcyBtYWRlXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcXVlc3RHYW1lRGF0YSA9ICgpID0+IHtcclxuICAgICAgc2VuZE5leHRNZXNzYWdlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LFxyXG4gICAgICAgICAgZnVuYzogXCJyZXF1ZXN0Z2FtZWRhdGFcIiwgLy8gcmVxdWVzdCBnYW1lIGRhdGFcclxuICAgICAgICAgIHN5bmNzdGFtcDogc3luY3N0YW1wIC8vIHNvIHNlcnZlciBjYW4gZGVjaWRlIHdoZXRoZXIgSSBhbSB1cCB0byBkYXRlXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCByZXF1ZXN0U3luY0RhdGEgPSAoKSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGBTZW5kIHJlcXVlc3RzeW5jZGF0YSAke3N5bmNzdGFtcH1gKTtcclxuICAgICAgc2VuZE5leHRNZXNzYWdlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LFxyXG4gICAgICAgICAgZnVuYzogXCJyZXF1ZXN0c3luY2RhdGFcIiAvLyByZXF1ZXN0IHN5bmMgZGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAocGFydGljaXBhbnQgIT09IHdob3NldHVybikge3JldHVybjt9XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgIGVuZFBsYXllcnNUdXJuKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICByZWNhbGxUaWxlcygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgbGV0dGVydGVzdCA9IC9eW0EtWmEtelxcP10kLzsgLy8gc2luZ2xlIGxldHRlciBvciBxdWVzdGlvbiBtYXJrIGtleSBwcmVzc2VkXHJcbiAgICAgIGlmIChldmVudC5rZXkubWF0Y2gobGV0dGVydGVzdCkpIHtcclxuICAgICAgICBsZXQgbGV0dGVyID0gZXZlbnQua2V5LnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgbGV0IHJhY2sgPSB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMgPyBwdGlsZXMgOiBndGlsZXM7XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGlvbiA9IHJhY2suaW5kZXhPZihsZXR0ZXIpO1xyXG4gICAgICAgIGlmIChuZXdTZWxlY3Rpb24gPT09IC0xKSB7XHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSByYWNrLmluZGV4T2YoXCI/XCIpOyAvLyBVc2UgdGhlIGJsYW5rIGlmIHRoZXkgaGF2ZSBvbmVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5ld1NlbGVjdGlvbiA+IC0xKSB7IC8vIFByZXNzZWQgbGV0dGVyIGlzIG9uIHRoZSByYWNrXHJcbiAgICAgICAgICBsZXQgcm93ID0gcmNkWzBdO1xyXG4gICAgICAgICAgbGV0IGNvbCA9IHJjZFsxXTtcclxuICAgICAgICAgIGxldCBkaXIgPSByY2RbMl07XHJcbiAgICAgICAgICBpZiAocm93ID4tMSAmJiBjb2wgPiAtMSAmJiBkaXIgIT09IGMuRElSX05PTkUpIHsgLy8gcm93LCBjb2wsIGRpciBhcmUgc2V0IHRvIGFjY2VwdCBrZXlzdHJva2VcclxuICAgICAgICAgICAgLy8gTmVlZCB0byBmaWd1cmUgb3V0IG5leHQgc3FhdXJlIHRvIGF1dG8tcGxhY2UgYSB0aWxlXHJcbiAgICAgICAgICAgIGxldCBuZXdSY2QgPSByY2Q7XHJcbiAgICAgICAgICAgIGlmIChkaXIgPT09IGMuRElSX1JJR0hUKSB7IC8vIHBsYXlpbmcgcmlnaHR3YXJkc1xyXG4gICAgICAgICAgICAgIGxldCBuZXdjID0gLTE7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgdGVtcGNvbCA9IGNvbCArIDE7IHRlbXBjb2wgPCBlZGdlICsgMSAmJiBuZXdjID09PSAtMTsgdGVtcGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3F1YXJlQXJyYXlbcm93XVt0ZW1wY29sXS51c2VkYnkgPT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICAgICAgICAgIG5ld2MgPSB0ZW1wY29sO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAobmV3YyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIG5ld1JjZCA9IFstMSwtMSxjLkRJUl9OT05FXTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3UmNkID0gW3JvdywgbmV3YywgYy5ESVJfUklHSFRdO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJvdyxjb2wsbmV3U2VsZWN0aW9uLG5ld1JjZCk7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTsgLy8gd2hlbiB0aGV5IGFyZSB0eXBpbmcgdGhleSBhcmUgbm90IHNlbGVjdGluZyByYWNrIHRpbGVzIGJ5IGNsaWNraW5nIHRoZW0gb24gdGhlIHJhY2tcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRpciA9PT0gYy5ESVJfRE9XTikgeyAvLyBwbGF5aW5nIGRvd253YXJkc1xyXG4gICAgICAgICAgICAgIGxldCBuZXdyID0gLTE7XHJcbiAgICAgICAgICAgICAgbGV0IG51bXJvd3MgPSAocmFja3NpemUqMikrMTtcclxuICAgICAgICAgICAgICBmb3IgKHZhciB0ZW1wcm93ID0gcm93ICsgMTsgdGVtcHJvdyA8IG51bXJvd3MgJiYgbmV3ciA9PT0gLTE7IHRlbXByb3crKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZUFycmF5W3RlbXByb3ddW2NvbF0udXNlZGJ5ID09PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgICAgICAgICBuZXdyID0gdGVtcHJvdztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKG5ld3IgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSY2QgPSBbLTEsLTEsYy5ESVJfTk9ORV07XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1JjZCA9IFtuZXdyLCBjb2wsIGMuRElSX0RPV05dO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJvdyxjb2wsbmV3U2VsZWN0aW9uLG5ld1JjZCk7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTsgLy8gd2hlbiB0aGV5IGFyZSB0eXBpbmcgdGhleSBhcmUgbm90IHNlbGVjdGluZyByYWNrIHRpbGVzIGJ5IGNsaWNraW5nIHRoZW0gb24gdGhlIHJhY2tcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQmFja3NwYWNlXCIgJiYgY3VycmVudGNvb3Jkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gU2FtZSBhcyBjbGlja2luZyBvbiBhIHBsYXllZC10aGlzLW1vdmUgdGlsZSBpbiB0ZXJtcyBvZiByZXR1cm5pbmcgdGhlIHRpbGUgdG8gdGhlIHJhY2tcclxuICAgICAgICAvLyBIb3dldmVyIHdlIGFsc28gd2FudCB0byBzZXQgdXAgcmNkIHNvIHRoZXkgY2FuIHByZXNzIHRoZSBrZXkgdGhleSBtZWFudCBhbmQgY29udGludWVcclxuICAgICAgICBsZXQgY29vcmQgPSBjdXJyZW50Y29vcmRzW2N1cnJlbnRjb29yZHMubGVuZ3RoIC0gMV07IC8vIHRpbGUgdG8gcmV0dXJuIHRvIHJhY2tcclxuICAgICAgICBsZXQgcm93ID0gcGFyc2VJbnQoY29vcmQuc3BsaXQoXCItXCIpWzBdKTtcclxuICAgICAgICBsZXQgY29sID0gcGFyc2VJbnQoY29vcmQuc3BsaXQoXCItXCIpWzFdKTtcclxuICAgICAgICBsZXQgbmV3Q3VycmVudGNvb3JkcyA9IFsuLi5jdXJyZW50Y29vcmRzXTtcclxuICAgICAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICAgICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgICAgIGxldCBuZXdTcXVhcmVBcnJheSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3F1YXJlQXJyYXkpKTsgLy8gRGVlcCBjb3B5XHJcbiAgICAgICAgbGV0IG5ld1NxdWFyZUFycmF5Um93ID0gbmV3U3F1YXJlQXJyYXlbcm93XTtcclxuICAgICAgICBsZXQgbmV3U3F1YXJlQXJyYXlDZWxsID0gbmV3U3F1YXJlQXJyYXlSb3dbY29sXTtcclxuICAgICAgICBsZXQgbmV3UmNkID0gWy0xLC0xLGMuRElSX05PTkVdO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3Rpb24gPSBzZWxlY3Rpb247XHJcbiAgICAgICAgbmV3Q3VycmVudGNvb3Jkcy5zcGxpY2UoY3VycmVudGNvb3Jkcy5sZW5ndGgtMSwxKTtcclxuICAgICAgICBsZXQgcmV0dXJuZWRUaWxlID0gc3F1YXJlQXJyYXlbcm93XVtjb2xdLmxldHRlcjtcclxuICAgICAgICBpZiAod2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTKSB7XHJcbiAgICAgICAgICBuZXdQdGlsZXMucHVzaChyZXR1cm5lZFRpbGUpO1xyXG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3UHRpbGVzLmxlbmd0aC0xO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXdHdGlsZXMucHVzaChyZXR1cm5lZFRpbGUpO1xyXG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3R3RpbGVzLmxlbmd0aC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdTcXVhcmVBcnJheUNlbGwudXNlZGJ5ID0gYy5VU0VEX0JZX05PTkU7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlDZWxsLmxldHRlciA9IGMuTEVUVEVSX05PTkU7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlSb3dbY29sXSA9IG5ld1NxdWFyZUFycmF5Q2VsbDtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheVtyb3ddID0gWy4uLm5ld1NxdWFyZUFycmF5Um93XTtcclxuICAgICAgICBsZXQgZGlyID0gcmNkWzJdO1xyXG4gICAgICAgIGlmIChkaXIgIT09IGMuRElSX05PTkUpIHtcclxuICAgICAgICAgIC8vIGRpcmVjdGlvbiB3YXMgc2V0IHNvIGtlZXAgaXRcclxuICAgICAgICAgIG5ld1JjZCA9IFtyb3csY29sLGRpcl07XHJcbiAgICAgICAgICBpZiAoY3VycmVudGNvb3Jkcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0aW9uID0gLTE7IC8vIGlmIHRoZXkgYmFja3NwYWNlIGFsbCB0aGUgbGV0dGVycyBvZmYgbGVhdmUgcmFjayB0aWxlIHVuc2VsZWN0ZWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q3VycmVudGNvb3JkcyhuZXdDdXJyZW50Y29vcmRzKTtcclxuICAgICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgICBzZXRTcXVhcmVBcnJheShuZXdTcXVhcmVBcnJheSk7XHJcbiAgICAgICAgc2V0UmNkKG5ld1JjZCk7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZU1vdmVDbGljayA9IChfbWkpID0+IHt9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaXNvbmJyZWFrXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWNvbnRhaW5lciB3My10ZWFsIHRvcEJhckhlaWdodFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LW1pZGRsZVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXlIZWFkaW5nRm9udFwiPlByaXNvbiBCcmVhazwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS10b3BsZWZ0IHczLWJsYWNrIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIEdhbWUgaWQ6IHtnYW1laWR9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1ib3R0b21sZWZ0IHczLW9yYW5nZSB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICBQcmlzb25lcnM6IHtcclxuICAgICAgICAgICAgICBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IG5pY2tuYW1lXHJcbiAgICAgICAgICAgICAgOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUyA/IG9wcG5hbWVcclxuICAgICAgICAgICAgICA6ICdTZWNyZXQnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktdG9wcmlnaHQgdzMtYmxhY2sgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1ib3R0b21yaWdodCB3My1vcmFuZ2UgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgR3VhcmRzOiB7XHJcbiAgICAgICAgICAgICAgcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBvcHBuYW1lXHJcbiAgICAgICAgICAgICAgOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUyA/IG5pY2tuYW1lXHJcbiAgICAgICAgICAgICAgOiAnU2VjcmV0J1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwYlRpbGVBbmRNb3Zlc091dGVyXCI+XHJcbiAgICAgICAgICAgICAgPFNob3dVbnNlZW5UaWxlc1xyXG4gICAgICAgICAgICAgICAgdGlsZXM9e3RpbGVzfVxyXG4gICAgICAgICAgICAgICAgb3RoZXJ0aWxlcz17XHJcbiAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gZ3RpbGVzXHJcbiAgICAgICAgICAgICAgICAgIDogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMgPyBwdGlsZXNcclxuICAgICAgICAgICAgICAgICAgOiBbXX0gLy8gT2JzZXJ2ZXJzIHNlZSBib3RoIHJhY2tzIHNvIG5vdGhpbmcgdG8gZXhjbHVkZSBmcm9tIHRpbGViYWcgYXMgdW5zZWVuXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxTaG93TW92ZXMgbW92ZXM9e21vdmVzfSBvbm1vdmVjbGljaz17KG1pKSA9PiBoYW5kbGVNb3ZlQ2xpY2sobWkpfS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBiUGxheWVyT3V0ZXJTZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIHtwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/XHJcbiAgICAgICAgICAgICAgPFBsYXllclNlY3Rpb25cclxuICAgICAgICAgICAgICAgIHJhY2t0aWxlcz17cHRpbGVzfVxyXG4gICAgICAgICAgICAgICAgd2hvc2V0dXJuPXt3aG9zZXR1cm59XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb249e3NlbGVjdGlvbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyh0aSkgPT4gaGFuZGxlUmFja1RpbGVDbGljayh0aSl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrRmluaXNoVHVybj17KCkgPT4gZW5kUGxheWVyc1R1cm4oKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tUaWxlUmVjYWxsPXsoKSA9PiByZWNhbGxUaWxlcygpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1RpbGVFeGNoYW5nZT17KCkgPT4gc3dhcFBsYXllcnNUaWxlcygpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1Bhc3NQbGF5PXsoKSA9PiBwbGF5ZXJQYXNzVHVybigpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1VuZG9MYXN0UGxheT17KCkgPT4gcGVyZm9ybVJld2luZCgpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja0FsbG93VW5kbz17KCkgPT4gYWxsb3dVbmRvTGFzdFR1cm4oKX1cclxuICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50PXtwYXJ0aWNpcGFudH1cclxuICAgICAgICAgICAgICAgIG1vdmVzPXttb3Zlc31cclxuICAgICAgICAgICAgICAgIGFsbG93UmV3aW5kPXthbGxvd1Jld2luZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA6cGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMgP1xyXG4gICAgICAgICAgICAgIDxQbGF5ZXJTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICByYWNrdGlsZXM9e2d0aWxlc31cclxuICAgICAgICAgICAgICAgIHdob3NldHVybj17d2hvc2V0dXJufVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IGhhbmRsZVJhY2tUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja0ZpbmlzaFR1cm49eygpID0+IGVuZFBsYXllcnNUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrVGlsZVJlY2FsbD17KCkgPT4gcmVjYWxsVGlsZXMoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tUaWxlRXhjaGFuZ2U9eygpID0+IHN3YXBQbGF5ZXJzVGlsZXMoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tQYXNzUGxheT17KCkgPT4gcGxheWVyUGFzc1R1cm4oKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tVbmRvTGFzdFBsYXk9eygpID0+IHBlcmZvcm1SZXdpbmQoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tBbGxvd1VuZG89eygpID0+IGFsbG93VW5kb0xhc3RUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudD17cGFydGljaXBhbnR9XHJcbiAgICAgICAgICAgICAgICBtb3Zlcz17bW92ZXN9XHJcbiAgICAgICAgICAgICAgICBhbGxvd1Jld2luZD17YWxsb3dSZXdpbmR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJQbGF5ZXJJbm5lclNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJQbGF5ZXJUaXRsZVwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+e2MuUEFSVFlfSUNPTl9QUklTT05FUlN9PC9pPiZuYnNwO3tjLlBBUlRZX1RJVExFX1BSSVNPTkVSU30mbmJzcDs8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntjLlBBUlRZX0lDT05fUFJJU09ORVJTfTwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICB7cHRpbGVzICYmIHB0aWxlcy5tYXAoKHQsIHRpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE9ic2VydmVyUmFja1RpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BPYnNlcnZlclByaXNvbmVyc1JhY2tUaWxlJHt0aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50PSdQJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGV2YWx1ZT17dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlaW5kZXg9e3RpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlBsYXllclRpdGxlXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57Yy5QQVJUWV9JQ09OX0dVQVJEU308L2k+Jm5ic3A7e2MuUEFSVFlfVElUTEVfR1VBUkRTfSZuYnNwOzxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+e2MuUEFSVFlfSUNPTl9HVUFSRFN9PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVyYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtndGlsZXMgJiYgZ3RpbGVzLm1hcCgodCwgdGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T2JzZXJ2ZXJSYWNrVGlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YE9ic2VydmVyR3VhcmRzUmFja1RpbGUke3RpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnQ9J0cnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZXZhbHVlPXt0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVpbmRleD17dGl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAge3BhcnRpY2lwYW50ID09PSB3aG9zZXR1cm4gP1xyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgb25LZXlEb3duQ2FwdHVyZT17aGFuZGxlS2V5RG93bn0+XHJcbiAgICAgICAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgICAgICAgc3F1YXJlQXJyYXk9e3NxdWFyZUFycmF5fVxyXG4gICAgICAgICAgICAgICAgICByY2Q9e3JjZH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KHJpLCBjaSkgPT4gaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyaSwgY2ksIC0xLG51bGwpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgICAgICAgc3F1YXJlQXJyYXk9e3NxdWFyZUFycmF5fVxyXG4gICAgICAgICAgICAgICAgICByY2Q9e3JjZH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge319XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDxTaG93UmVzY3VlcyByZXNjdWVzPXtyZXNjdWVzfSAvPlxyXG4gICAgICAgICAgICA8Q2hhdCBnYW1laWQ9e2dhbWVpZH0gY2xpZW50PXtjbGllbnR9IG5pY2tuYW1lPXtuaWNrbmFtZX0gbXNncz17Y2hhdG1zZ3N9IHNldE1zZ3M9e3NldENoYXRtc2dzfSBwYXJ0aWNpcGFudD17cGFydGljaXBhbnR9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1jb250YWluZXIgdzMtdGVhbCB0b3BCYXJIZWlnaHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1taWRkbGUgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICB7d2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fR0FNRU9WRVIgP1xyXG4gICAgICAgICAgICAgIDxoMT5HYW1lIE92ZXIhPC9oMT5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIDxwPntjLkpPS0VfQVJSQVlbam9rZWluZGV4XX08L3A+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtuaWNrbmFtZSAmJiBuaWNrbmFtZS5sZW5ndGggPiAzICYmIG5pY2tuYW1lLnRvVXBwZXJDYXNlKCkuc3Vic3RyaW5nKDAsNCkgPT09ICdURVNUJyAmJlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlNuYXREaXZcIj5cclxuICAgICAgICAgICAge3NuYXRzLm1hcCgoc25hdCxpKSA9PiAoXHJcbiAgICAgICAgICAgICA8cCBrZXk9e2BzbmF0JHtpfWB9IGNsYXNzTmFtZT1cInBiU25hdFwiPntzbmF0fTwvcD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuY29uc3QgT2JzZXJ2ZXJSYWNrVGlsZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkVW5zZWxlY3RlZCA9IFwiVW5zZWxlY3RlZCBcIjtcclxuICBjb25zdCB1Tm90VSA9IHByb3BzLnRpbGV2YWx1ZSA9PT0gXCJRXCIgPyBcInUgXCIgOiBcIlwiO1xyXG4gIGNvbnN0IHRpbGVjbGFzcyA9IFwicGJUaWxlT25SYWNrIFwiICsgc2VsZWN0ZWRVbnNlbGVjdGVkICsgdU5vdFUgKyBwcm9wcy5wYXJ0aWNpcGFudDtcclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgICBrZXk9e3Byb3BzLnRpbGVpbmRleH1cclxuICAgICAgICAgIGNsYXNzTmFtZT17dGlsZWNsYXNzfVxyXG4gICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZU9uUmFja1RleHRcIj57cHJvcHMudGlsZXZhbHVlfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==