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
    newSnats.push(`Sending message: func=${jMessage.func} at ${Date.now().toString()}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvZ2FtZS5qcyJdLCJuYW1lcyI6WyJHYW1lIiwic2V0V2hlcmV0byIsImlzcmVqb2luIiwicGFydGljaXBhbnQiLCJnYW1laWQiLCJuaWNrbmFtZSIsIndzbWVzc2FnZSIsImNsaWVudCIsInJhY2tzaXplIiwic25hdHMiLCJzZXRTbmF0cyIsInVzZVN0YXRlIiwic3luY3N0YW1wIiwic2V0U3luY3N0YW1wIiwibWlkZGxlIiwiZWRnZSIsImluaXRpYWx0aWxlcyIsImMiLCJ0aWxlcyIsInNldFRpbGVzIiwicHRpbGVzIiwic2V0UHRpbGVzIiwiZ3RpbGVzIiwic2V0R3RpbGVzIiwic3F1YXJlQXJyYXkiLCJzZXRTcXVhcmVBcnJheSIsInNlbGVjdGlvbiIsInNldFNlbGVjdGlvbiIsIndob3NldHVybiIsInNldFdob3NldHVybiIsImN1cnJlbnRjb29yZHMiLCJzZXRDdXJyZW50Y29vcmRzIiwicmVzY3VlcyIsInNldFJlc2N1ZXMiLCJyY2QiLCJzZXRSY2QiLCJtb3ZlcyIsInNldE1vdmVzIiwic25hcHNob3QiLCJzZXRTbmFwc2hvdCIsImpva2VpbmRleCIsInNldEpva2VpbmRleCIsImFsbG93UmV3aW5kIiwic2V0QWxsb3dSZXdpbmQiLCJvcHBuYW1lIiwic2V0T3BwbmFtZSIsImNoYXRtc2dzIiwic2V0Q2hhdG1zZ3MiLCJwcmV2UmVzY3VlcyIsInVzZVByZXZpb3VzIiwidXNlRWZmZWN0IiwiaW5pdGlhbGl6ZVJvdXRpbmUiLCJtc2ciLCJwcm9jZXNzR2FtZU1lc3NhZ2UiLCJzY3JvbGxUb0JvdHRvbSIsIm15YXVkaW8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJwbGF5IiwibmV3amkiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwicmVxdWVzdFN5bmNEYXRhIiwiY2xlYXJJbnRlcnZhbCIsImZpcnN0U3F1YXJlQXJyYXkiLCJpbml0aWFsU3F1YXJlQXJyYXkiLCJyZWpvaW5HYW1lIiwic3RhcnRHYW1lIiwiam9pbkdhbWUiLCJzdGFydE9ic2VydmluZ0dhbWUiLCJzZW5kTmV4dE1lc3NhZ2UiLCJqTWVzc2FnZSIsIm5ld1NuYXRzIiwicHVzaCIsImZ1bmMiLCJEYXRlIiwibm93IiwidG9TdHJpbmciLCJzZW5kIiwibmV3U3luY3N0YW1wIiwidGVtcFBUaWxlcyIsInRlbXBHVGlsZXMiLCJ0ZW1wVGlsZXMiLCJsZW5ndGgiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic3BsaWNlIiwic29ydCIsInR5cGUiLCJ0aW1lc3RhbXAiLCJzZW5kZXIiLCJwbmFtZSIsImduYW1lIiwicHV0QXRNb3ZlU3RhcnQiLCJtZXNzYWdlIiwibWVzc2FnZURhdGEiLCJKU09OIiwicGFyc2UiLCJnZCIsImJ1aWxkR2FtZWRhdGFGcm9tQXBpZGF0YSIsImFwaWRhdGEiLCJuZXdTbmFwc2hvdCIsInN0cmluZ2lmeSIsIm5ld0NoYXRtc2dzIiwiZnJvbSIsInNlbmRtc2ciLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdEdhbWVEYXRhIiwiaGFuZGxlQm9hcmRTcXVhcmVDbGljayIsInJpIiwiY2kiLCJuZXdTZWxlY3Rpb24iLCJuZXdSY2QiLCJuZXdTcXVhcmVBcnJheSIsIm5ld1NxdWFyZUFycmF5Um93IiwibmV3U3F1YXJlQXJyYXlDZWxsIiwibmV3UHRpbGVzIiwibmV3R3RpbGVzIiwibmV3Q3VycmVudGNvb3JkcyIsImNvb3JkIiwiU3RyaW5nIiwiY2NpIiwiaW5kZXhPZiIsInVzZWRieSIsInNlbGVjdGVkVGlsZSIsImxldHRlciIsIm5ld0RpcmVjdGlvbiIsImhhbmRsZVJhY2tUaWxlQ2xpY2siLCJ0aWxlaW5kZXgiLCJuZXdyYWNrIiwibW92ZWZyb20iLCJtb3ZldGlsZSIsIm1vdmV0byIsImVuZFBsYXllcnNUdXJuIiwiaXNQbGF5VmFsaWQiLCJwbGF5aW5mbyIsImdldFBsYXlJbmZvIiwiaW52YWxpZHdvcmRzIiwiYWxlcnQiLCJqb2luIiwicmVwbGFjZSIsInRvVXBwZXJDYXNlIiwibmV3UmVzY3VlcyIsImVzY2FwZWhhdGNoZXMiLCJpIiwibmV3UGxheWVyVGlsZXMiLCJuZXdUaWxlcyIsIm5ld1dob3NldHVybiIsImFueVVudXNlZEVzY2FwZUhhdGNoZXMiLCJuZXdNb3ZlIiwiYnkiLCJtYWlud29yZCIsImV4dHJhd29yZHMiLCJwb3MiLCJuZXdNb3ZlcyIsImpzZW5kIiwibW92ZSIsInN3YXBQbGF5ZXJzVGlsZXMiLCJ3aW5kb3ciLCJzZXRTbmF0IiwiTU9WRV9UWVBFX1NXQVAiLCJmaXJzdFdvcmQiLCJudW1tb3ZlcyIsIm1vdmVpbmRleCIsIm51bWNvb3JkcyIsImxvd3JvdyIsImhpZ2hyb3ciLCJsb3djb2wiLCJoaWdoY29sIiwidGVtcHJvdyIsInBhcnNlSW50Iiwic3BsaXQiLCJ0ZW1wY29sIiwicGxheXRocnUiLCJob29rbWFkZSIsInRlbXBjb29yZCIsIndvcmRzdGFydGNvb3JkIiwibnVtcm93cyIsIm51bWNvbHMiLCJyb3ciLCJjb2wiLCJsb3dlc3Ryb3ciLCJoaWdoZXN0cm93IiwibG93ZXN0Y29sIiwiaGlnaGVzdGNvbCIsImV4dHJhd29yZCIsInZhbGlkYXRlV29yZHMiLCJhbGx3b3JkcyIsImZvckVhY2giLCJldyIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImpkYXRhIiwianNvbiIsImFsbG93VW5kb0xhc3RUdXJuIiwicGVyZm9ybVJld2luZCIsInJlY2FsbFRpbGVzIiwicGxheWVyUGFzc1R1cm4iLCJNT1ZFX1RZUEVfUEFTUyIsImlzRG91YmxlUGFzcyIsImhhbmRsZUtleURvd24iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwia2V5IiwibGV0dGVydGVzdCIsIm1hdGNoIiwicmFjayIsImRpciIsIm5ld2MiLCJuZXdyIiwicmV0dXJuZWRUaWxlIiwiaGFuZGxlTW92ZUNsaWNrIiwiX21pIiwibWkiLCJ0aSIsIlBBUlRZX0lDT05fUFJJU09ORVJTIiwibWFwIiwidCIsIlBBUlRZX0lDT05fR1VBUkRTIiwic3Vic3RyaW5nIiwic25hdCIsIk9ic2VydmVyUmFja1RpbGUiLCJwcm9wcyIsInNlbGVjdGVkVW5zZWxlY3RlZCIsInVOb3RVIiwidGlsZXZhbHVlIiwidGlsZWNsYXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQztBQUFDQyxZQUFEO0FBQ1JDLFVBRFE7QUFFUkMsYUFGUSxDQUVJO0FBRko7QUFHUkMsUUFIUTtBQUlSQyxVQUFRLEdBQUMsRUFKRCxDQUlJO0FBSko7QUFLUkMsV0FMUTtBQU1SQyxRQU5RO0FBT1JDLFVBQVEsR0FBQyxDQVBELENBT0c7O0FBUEgsQ0FBRCxLQVFIO0FBQUE7O0FBQ04sUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQywrQ0FBUSxDQUFDLENBQUMsOENBQUQsQ0FBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkYsK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQ0EsUUFBTUcsTUFBTSxHQUFHTixRQUFmLENBSE0sQ0FHbUI7O0FBQ3pCLFFBQU1PLElBQUksR0FBR1AsUUFBUSxHQUFHLENBQXhCLENBSk0sQ0FJcUI7O0FBQzNCLFFBQU1RLFlBQVksR0FBR1IsUUFBUSxLQUFLLENBQWIsR0FBaUJTLGtFQUFqQixHQUE4QlQsUUFBUSxLQUFLLENBQWIsR0FBaUJTLGtFQUFqQixHQUE4QlQsUUFBUSxLQUFLLENBQWIsR0FBaUJTLGtFQUFqQixHQUE4QkEsa0VBQS9HO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CUiwrQ0FBUSxDQUFDLENBQUMsR0FBR0ssWUFBSixDQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNJLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCViwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ1csTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JaLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUNBLFFBQU07QUFBQSxPQUFDYSxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ2QsK0NBQVEsQ0FBQyxFQUFELENBQTlDO0FBQ0EsUUFBTTtBQUFBLE9BQUNlLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCaEIsK0NBQVEsQ0FBQyxDQUFDLENBQUYsQ0FBMUMsQ0FWTSxDQVUwQzs7QUFDaEQsUUFBTTtBQUFBLE9BQUNpQixTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QmxCLCtDQUFRLENBQUNNLDhFQUFELENBQTFDLENBWE0sQ0FXOEQ7O0FBQ3BFLFFBQU07QUFBQSxPQUFDYSxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DcEIsK0NBQVEsQ0FBQyxFQUFELENBQWxEO0FBQ0EsUUFBTTtBQUFBLE9BQUNxQixPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QnRCLCtDQUFRLENBQUMsQ0FBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDdUIsR0FBRDtBQUFBLE9BQU1DO0FBQU4sTUFBZ0J4QiwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFGLEVBQUksQ0FBQyxDQUFMLEVBQU9NLGtFQUFQLENBQUQsQ0FBOUI7QUFDQSxRQUFNO0FBQUEsT0FBQ21CLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CMUIsK0NBQVEsQ0FBQyxFQUFELENBQWxDLENBZk0sQ0Fla0M7O0FBQ3hDLFFBQU07QUFBQSxPQUFDMkIsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEI1QiwrQ0FBUSxDQUFDO0FBQ3ZDYSxlQUFXLEVBQUUsRUFEMEI7QUFFdkNKLFVBQU0sRUFBRSxFQUYrQjtBQUd2Q0UsVUFBTSxFQUFFO0FBSCtCLEdBQUQsQ0FBeEM7QUFLQSxRQUFNO0FBQUEsT0FBQ2tCLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCOUIsK0NBQVEsQ0FBQyxDQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUMrQixXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ2hDLCtDQUFRLENBQUMsS0FBRCxDQUE5QztBQUNBLFFBQU07QUFBQSxPQUFDaUMsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JsQywrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ21DLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCcEMsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTXFDLFdBQVcsR0FBR0MsOERBQVcsQ0FBQ2pCLE9BQUQsQ0FBL0I7QUFDQWtCLGtEQUFTLENBQUMsTUFBTTtBQUFFO0FBQ2hCQyxxQkFBaUI7QUFDbEIsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBRCxrREFBUyxDQUFDLE1BQU07QUFDZCxRQUFJRSxHQUFHLEdBQUc5QyxTQUFWO0FBQ0EsUUFBSThDLEdBQUcsS0FBSyxFQUFaLEVBQWdCQyxrQkFBa0IsQ0FBQ0QsR0FBRCxDQUFsQjtBQUNqQixHQUhRLEVBR1AsQ0FBQzlDLFNBQUQsQ0FITyxDQUFUO0FBSUE0QyxrREFBUyxDQUFDLE1BQU07QUFDZEksd0VBQWMsQ0FBQyxpQkFBRCxDQUFkO0FBQ0QsR0FGUSxFQUVQLENBQUNsQixLQUFELENBRk8sQ0FBVDtBQUdBYyxrREFBUyxDQUFDLE1BQU07QUFDZEksd0VBQWMsQ0FBQyxnQkFBRCxDQUFkO0FBQ0QsR0FGUSxFQUVQLENBQUNSLFFBQUQsQ0FGTyxDQUFUO0FBR0FJLGtEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUlsQixPQUFPLEdBQUdnQixXQUFkLEVBQTJCO0FBQ3ZCLFVBQUlPLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWQsQ0FEdUIsQ0FFdkI7O0FBQ0FGLGFBQU8sQ0FBQ0csR0FBUixHQUFjdkQsV0FBVyxLQUFLYywyRUFBaEIsR0FBc0MsNkNBQXRDLEdBQXNGLHlDQUFwRztBQUNBc0MsYUFBTyxDQUFDSSxJQUFSO0FBQ0g7QUFDRixHQVBRLEVBT04sQ0FBQzNCLE9BQUQsQ0FQTSxDQUFULENBdkNNLENBOENTOztBQUNma0Isa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSVUsS0FBSyxHQUFHcEIsU0FBUyxHQUFHLENBQXhCOztBQUNBLFFBQUlvQixLQUFLLElBQUkzQywyRUFBYixFQUFrQztBQUNoQzJDLFdBQUssR0FBRyxDQUFSO0FBQ0Q7O0FBQ0RuQixnQkFBWSxDQUFDbUIsS0FBRCxDQUFaO0FBQ0QsR0FOUSxFQU1OLENBQUNoQyxTQUFELENBTk0sQ0FBVCxDQS9DTSxDQXFEVzs7QUFFakJzQixrREFBUyxDQUFDLE1BQU07QUFDZCxVQUFNVyxRQUFRLEdBQUdDLFdBQVcsQ0FBQyxNQUFNO0FBQ2pDLFVBQUkzRCxXQUFXLEtBQUt5QixTQUFoQixJQUE2QkEsU0FBUyxLQUFLWCw2RUFBL0MsRUFBc0U7QUFDcEU4Qyx1QkFBZSxHQURxRCxDQUNqRDtBQUNwQixPQUhnQyxDQUlqQztBQUNBO0FBQ0E7QUFDQTs7QUFDQyxLQVJ5QixFQVF2QjlDLHVFQVJ1QixDQUE1QixDQURjLENBU1M7O0FBQ3ZCLFdBQU8sTUFBTStDLGFBQWEsQ0FBQ0gsUUFBRCxDQUExQjtBQUNELEdBWFEsQ0FBVDs7QUFZQSxRQUFNVixpQkFBaUIsR0FBRyxNQUFNO0FBQzlCLFFBQUljLGdCQUFnQixHQUFHQyw4RUFBa0IsQ0FBQzFELFFBQUQsQ0FBekM7QUFDQWlCLGtCQUFjLENBQUN3QyxnQkFBRCxDQUFkOztBQUNBLFFBQUkvRCxRQUFKLEVBQWM7QUFDWmlFLGdCQUFVO0FBQ1gsS0FGRCxNQUVPLElBQUloRSxXQUFXLEtBQUtjLDhFQUFwQixFQUE0QztBQUNqRG1ELGVBQVMsQ0FBQ0gsZ0JBQUQsQ0FBVCxDQURpRCxDQUNwQjtBQUM5QixLQUZNLE1BRUEsSUFBSTlELFdBQVcsS0FBS2MsMkVBQXBCLEVBQXlDO0FBQzlDb0QsY0FBUSxHQURzQyxDQUNsQztBQUNiLEtBRk0sTUFFQTtBQUNMQyx3QkFBa0IsR0FEYixDQUNpQjtBQUN2QjtBQUNGLEdBWkQ7O0FBY0EsUUFBTUMsZUFBZSxHQUFJQyxRQUFELElBQWM7QUFDcEMsUUFBSUMsUUFBUSxHQUFHLENBQUMsR0FBR2hFLEtBQUosQ0FBZjtBQUNBZ0UsWUFBUSxDQUFDQyxJQUFULENBQWUseUJBQXdCRixRQUFRLENBQUNHLElBQUssT0FBTUMsSUFBSSxDQUFDQyxHQUFMLEdBQVdDLFFBQVgsRUFBc0IsRUFBakY7QUFDQXZFLFVBQU0sQ0FBQ3dFLElBQVAsQ0FBWVAsUUFBWjtBQUNBOUQsWUFBUSxDQUFDK0QsUUFBRCxDQUFSO0FBQ0QsR0FMRDs7QUFPQSxRQUFNTCxTQUFTLEdBQUlILGdCQUFELElBQXNCO0FBQ3RDLFFBQUllLFlBQVksR0FBR0osSUFBSSxDQUFDQyxHQUFMLEVBQW5CO0FBQ0EsUUFBSUksVUFBVSxHQUFHLEVBQWpCO0FBQ0EsUUFBSUMsVUFBVSxHQUFHLEVBQWpCO0FBQ0EsUUFBSUMsU0FBUyxHQUFHLENBQUMsR0FBR25FLFlBQUosQ0FBaEI7O0FBQ0EsV0FBT2lFLFVBQVUsQ0FBQ0csTUFBWCxHQUFvQjVFLFFBQTNCLEVBQXFDO0FBQ25DLFVBQUk2RSxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JMLFNBQVMsQ0FBQ0MsTUFBckMsQ0FBWDtBQUNBSCxnQkFBVSxDQUFDUCxJQUFYLENBQWdCUyxTQUFTLENBQUNFLElBQUQsQ0FBekI7QUFDQUYsZUFBUyxDQUFDTSxNQUFWLENBQWlCSixJQUFqQixFQUF1QixDQUF2QjtBQUNBQSxVQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JMLFNBQVMsQ0FBQ0MsTUFBckMsQ0FBUDtBQUNBRixnQkFBVSxDQUFDUixJQUFYLENBQWdCUyxTQUFTLENBQUNFLElBQUQsQ0FBekI7QUFDQUYsZUFBUyxDQUFDTSxNQUFWLENBQWlCSixJQUFqQixFQUF1QixDQUF2QjtBQUNEOztBQUNESixjQUFVLENBQUNTLElBQVg7QUFDQVIsY0FBVSxDQUFDUSxJQUFYO0FBQ0E3RSxnQkFBWSxDQUFDbUUsWUFBRCxDQUFaO0FBQ0F6RCxhQUFTLENBQUMyRCxVQUFELENBQVQ7QUFDQTdELGFBQVMsQ0FBQzRELFVBQUQsQ0FBVDtBQUNBOUQsWUFBUSxDQUFDZ0UsU0FBRCxDQUFSO0FBQ0E1QyxlQUFXLENBQUM7QUFDVmYsaUJBQVcsRUFBRXlDLGdCQURIO0FBRVY3QyxZQUFNLEVBQUUsQ0FBQyxHQUFHNkQsVUFBSixDQUZFO0FBR1YzRCxZQUFNLEVBQUUsQ0FBQyxHQUFHNEQsVUFBSjtBQUhFLEtBQUQsQ0FBWDtBQUtBWCxtQkFBZSxDQUFDO0FBQ2RvQixVQUFJLEVBQUUsSUFEUTtBQUVkaEIsVUFBSSxFQUFFLFdBRlE7QUFHZHZFLFlBQU0sRUFBRUEsTUFITTtBQUdFO0FBQ2hCd0YsZUFBUyxFQUFFWixZQUpHO0FBSVc7QUFDekJ4RSxjQUFRLEVBQUVBLFFBTEk7QUFLTTtBQUNwQnFGLFlBQU0sRUFBRTFGLFdBTk07QUFNTztBQUNyQjJGLFdBQUssRUFBRXpGLFFBUE87QUFPRztBQUNqQmEsV0FBSyxFQUFFaUUsU0FSTztBQVFJO0FBQ2xCL0QsWUFBTSxFQUFFNkQsVUFUTTtBQVNNO0FBQ3BCM0QsWUFBTSxFQUFFNEQsVUFWTSxDQVVLOztBQVZMLEtBQUQsQ0FBZjtBQVlELEdBcENEOztBQXFDQSxRQUFNYixRQUFRLEdBQUcsTUFBTTtBQUNyQkUsbUJBQWUsQ0FBQztBQUNkbkUsWUFBTSxFQUFFQSxNQURNO0FBQ0U7QUFDaEIyRixXQUFLLEVBQUUxRixRQUZPO0FBRUc7QUFDakJzRixVQUFJLEVBQUUsSUFIUTtBQUdGO0FBQ1poQixVQUFJLEVBQUUsVUFKUTtBQUlJO0FBQ2xCa0IsWUFBTSxFQUFFMUYsV0FMTSxDQUtNOztBQUxOLEtBQUQsQ0FBZjtBQU9ELEdBUkQ7O0FBU0EsUUFBTWdFLFVBQVUsR0FBRyxNQUFNO0FBQ3ZCSSxtQkFBZSxDQUFDO0FBQ2RuRSxZQUFNLEVBQUVBLE1BRE07QUFDRTtBQUNoQnVGLFVBQUksRUFBRSxJQUZRO0FBRUY7QUFDWmhCLFVBQUksRUFBRSxZQUhRO0FBR007QUFDcEJrQixZQUFNLEVBQUUxRixXQUpNLENBSU07O0FBSk4sS0FBRCxDQUFmO0FBTUQsR0FQRDs7QUFRQSxRQUFNbUUsa0JBQWtCLEdBQUcsTUFBTTtBQUMvQkMsbUJBQWUsQ0FBQztBQUNkbkUsWUFBTSxFQUFFQSxNQURNO0FBRWR1RixVQUFJLEVBQUUsSUFGUTtBQUdkaEIsVUFBSSxFQUFFO0FBSFEsS0FBRCxDQUFmO0FBS0QsR0FORDs7QUFRQSxXQUFTcUIsY0FBVCxHQUEwQjtBQUN4QnJFLGdCQUFZLENBQUMsQ0FBQyxDQUFGLENBQVo7QUFDQWdCLGtCQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0FSLFVBQU0sQ0FBQyxDQUFDLENBQUYsRUFBSSxDQUFDLENBQUwsRUFBT2xCLGtFQUFQLENBQU47QUFDQWMsb0JBQWdCLENBQUMsRUFBRCxDQUFoQjtBQUNEOztBQUVELFdBQVNzQixrQkFBVCxDQUE0QjRDLE9BQTVCLEVBQXFDO0FBQ25DLFFBQUlDLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILE9BQVgsQ0FBbEI7O0FBQ0EsUUFBSUMsV0FBVyxDQUFDOUYsTUFBWixLQUF1QkEsTUFBdkIsSUFBaUM4RixXQUFXLENBQUNQLElBQVosS0FBcUIsSUFBMUQsRUFBZ0U7QUFBRTtBQUNoRSxVQUFJbEIsUUFBUSxHQUFHLENBQUMsR0FBR2hFLEtBQUosQ0FBZjtBQUNBZ0UsY0FBUSxDQUFDQyxJQUFULENBQWUseUJBQXdCd0IsV0FBVyxDQUFDdkIsSUFBSyxFQUF4RDtBQUNBakUsY0FBUSxDQUFDK0QsUUFBRCxDQUFSOztBQUNBLFVBQUl5QixXQUFXLENBQUN2QixJQUFaLEtBQXFCLGlCQUF6QixFQUE0QztBQUMxQyxZQUFJMEIsRUFBRSxHQUFHQywyRkFBd0IsQ0FBQ0osV0FBVyxDQUFDSyxPQUFiLENBQWpDLENBRDBDLENBRTFDOztBQUNBMUYsb0JBQVksQ0FBQ3dGLEVBQUUsQ0FBQ3pGLFNBQUosQ0FBWixDQUgwQyxDQUkxQzs7QUFDQSxZQUFJVCxXQUFXLEtBQUtjLDhFQUFwQixFQUE0QztBQUMxQzRCLG9CQUFVLENBQUN3RCxFQUFFLENBQUNOLEtBQUosQ0FBVjtBQUNELFNBRkQsTUFFTyxJQUFJNUYsV0FBVyxLQUFLYywyRUFBcEIsRUFBeUM7QUFDOUM0QixvQkFBVSxDQUFDd0QsRUFBRSxDQUFDUCxLQUFKLENBQVY7QUFDRDs7QUFDRDNFLGdCQUFRLENBQUNrRixFQUFFLENBQUNuRixLQUFKLENBQVI7QUFDQU8sc0JBQWMsQ0FBQzRFLEVBQUUsQ0FBQzdFLFdBQUosQ0FBZDtBQUNBSCxpQkFBUyxDQUFDZ0YsRUFBRSxDQUFDakYsTUFBSixDQUFUO0FBQ0FHLGlCQUFTLENBQUM4RSxFQUFFLENBQUMvRSxNQUFKLENBQVQ7QUFDQU8sb0JBQVksQ0FBQ3dFLEVBQUUsQ0FBQ3pFLFNBQUosQ0FBWjtBQUNBLFlBQUk0RSxXQUFXLEdBQUc7QUFDaEJoRixxQkFBVyxFQUFFMkUsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ00sU0FBTCxDQUFlSixFQUFFLENBQUM3RSxXQUFsQixDQUFYLENBREc7QUFDeUM7QUFDekRKLGdCQUFNLEVBQUUsQ0FBQyxHQUFHaUYsRUFBRSxDQUFDakYsTUFBUCxDQUZRO0FBR2hCRSxnQkFBTSxFQUFFLENBQUMsR0FBRytFLEVBQUUsQ0FBQy9FLE1BQVA7QUFIUSxTQUFsQjtBQUtBaUIsbUJBQVcsQ0FBQ2lFLFdBQUQsQ0FBWDtBQUNBbkUsZ0JBQVEsQ0FBQ2dFLEVBQUUsQ0FBQ2pFLEtBQUosQ0FBUjtBQUNBSCxrQkFBVSxDQUFDb0UsRUFBRSxDQUFDckUsT0FBSixDQUFWO0FBQ0FXLHNCQUFjLENBQUMwRCxFQUFFLENBQUMzRCxXQUFKLENBQWQ7QUFDQXNELHNCQUFjO0FBQ2Y7O0FBQ0QsVUFBSUUsV0FBVyxDQUFDdkIsSUFBWixLQUFxQixjQUF6QixFQUF5QztBQUN2QyxZQUFJeEUsV0FBVyxLQUFLYywrRUFBcEIsRUFBNkM7QUFDM0M0QixvQkFBVSxDQUFDcUQsV0FBVyxDQUFDSCxLQUFiLENBQVY7QUFDRDtBQUNGOztBQUNELFVBQUlHLFdBQVcsQ0FBQ3ZCLElBQVosS0FBcUIsV0FBekIsRUFBc0M7QUFDcEM7QUFDQWhDLHNCQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0Q7O0FBQ0QsVUFBSXVELFdBQVcsQ0FBQ3ZCLElBQVosS0FBcUIsTUFBekIsRUFBaUM7QUFBRTtBQUNqQyxZQUFJK0IsV0FBVyxHQUFHLENBQUMsR0FBRzVELFFBQUosRUFBYztBQUFDNkQsY0FBSSxFQUFFVCxXQUFXLENBQUM3RixRQUFuQjtBQUE2QitDLGFBQUcsRUFBRThDLFdBQVcsQ0FBQ1U7QUFBOUMsU0FBZCxDQUFsQjtBQUNBN0QsbUJBQVcsQ0FBQzJELFdBQUQsQ0FBWDtBQUNEOztBQUNELFVBQUlSLFdBQVcsQ0FBQ3ZCLElBQVosS0FBcUIsaUJBQXpCLEVBQTRDO0FBQzFDO0FBQ0EsWUFBSXVCLFdBQVcsQ0FBQ3RGLFNBQVosS0FBMEJBLFNBQTlCLEVBQXlDO0FBQ3ZDaUcsaUJBQU8sQ0FBQ0MsR0FBUixDQUFhLDJDQUFiO0FBQ0FDLHlCQUFlO0FBQ2hCO0FBQ0Y7QUFDRjtBQUNGLEdBbE5LLENBb05OO0FBQ0E7QUFDQTs7O0FBQ0EsUUFBTUMsc0JBQXNCLEdBQUcsQ0FBQ0MsRUFBRCxFQUFLQyxFQUFMLEVBQVNDLFlBQVQsRUFBdUJDLE1BQXZCLEtBQWtDO0FBQy9ELFFBQUlDLGNBQWMsR0FBR2xCLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNNLFNBQUwsQ0FBZWpGLFdBQWYsQ0FBWCxDQUFyQixDQUQrRCxDQUNEOztBQUM5RCxRQUFJOEYsaUJBQWlCLEdBQUcsQ0FBQyxHQUFHRCxjQUFjLENBQUNKLEVBQUQsQ0FBbEIsQ0FBeEIsQ0FGK0QsQ0FFZDs7QUFDakQsUUFBSU0sa0JBQWtCLEdBQUdELGlCQUFpQixDQUFDSixFQUFELENBQTFDLENBSCtELENBR2Y7O0FBQ2hELFFBQUlNLFNBQVMsR0FBRyxDQUFDLEdBQUdwRyxNQUFKLENBQWhCO0FBQ0EsUUFBSXFHLFNBQVMsR0FBRyxDQUFDLEdBQUduRyxNQUFKLENBQWhCO0FBQ0EsUUFBSW9HLGdCQUFnQixHQUFHLENBQUMsR0FBRzVGLGFBQUosQ0FBdkI7QUFDQSxRQUFJNkYsS0FBSyxHQUFHQyxNQUFNLENBQUNYLEVBQUQsQ0FBTixHQUFhLEdBQWIsR0FBbUJXLE1BQU0sQ0FBQ1YsRUFBRCxDQUFyQztBQUNBLFFBQUlXLEdBQUcsR0FBRy9GLGFBQWEsQ0FBQ2dHLE9BQWQsQ0FBc0JILEtBQXRCLENBQVY7O0FBQ0EsUUFBSVIsWUFBWSxLQUFLLENBQUMsQ0FBdEIsRUFBeUI7QUFDdkJBLGtCQUFZLEdBQUd6RixTQUFmO0FBQ0EwRixZQUFNLEdBQUdsRixHQUFUO0FBQ0Q7O0FBQ0QsUUFBSWlGLFlBQVksR0FBRyxDQUFDLENBQWhCLElBQXFCSSxrQkFBa0IsQ0FBQ1EsTUFBbkIsS0FBOEI5RyxzRUFBdkQsRUFBdUU7QUFBRTtBQUN2RSxVQUFJK0csWUFBWSxHQUFHcEcsU0FBUyxLQUFLWCw4RUFBZCxHQUF1Q3VHLFNBQVMsQ0FBQ0wsWUFBRCxDQUFoRCxHQUFpRU0sU0FBUyxDQUFDTixZQUFELENBQTdGO0FBQ0FJLHdCQUFrQixDQUFDVSxNQUFuQixHQUE0QkQsWUFBNUI7QUFDQVQsd0JBQWtCLENBQUNRLE1BQW5CLEdBQTRCbkcsU0FBNUI7QUFDQTBGLHVCQUFpQixDQUFDSixFQUFELENBQWpCLEdBQXdCSyxrQkFBeEI7QUFDQUYsb0JBQWMsQ0FBQ0osRUFBRCxDQUFkLEdBQXFCLENBQUMsR0FBR0ssaUJBQUosQ0FBckI7QUFDQTFGLGVBQVMsS0FBS1gsOEVBQWQsR0FDSXVHLFNBQVMsQ0FBQy9CLE1BQVYsQ0FBaUIwQixZQUFqQixFQUErQixDQUEvQixDQURKLEdBRUlNLFNBQVMsQ0FBQ2hDLE1BQVYsQ0FBaUIwQixZQUFqQixFQUErQixDQUEvQixDQUZKOztBQUdBLFVBQUl2RixTQUFTLEtBQUtYLDhFQUFkLElBQXdDa0csWUFBWSxLQUFLSyxTQUFTLENBQUNwQyxNQUF2RSxFQUErRTtBQUM3RStCLG9CQUFZLEdBQUdBLFlBQVksR0FBRyxDQUE5QjtBQUNEOztBQUNELFVBQUl2RixTQUFTLEtBQUtYLDJFQUFkLElBQXFDa0csWUFBWSxLQUFLTSxTQUFTLENBQUNyQyxNQUFwRSxFQUE0RTtBQUMxRStCLG9CQUFZLEdBQUdBLFlBQVksR0FBRyxDQUE5QjtBQUNEOztBQUNEeEYsa0JBQVksQ0FBQ3dGLFlBQUQsQ0FBWjtBQUNBMUYsb0JBQWMsQ0FBQzRGLGNBQUQsQ0FBZDtBQUNBaEcsZUFBUyxDQUFDbUcsU0FBRCxDQUFUO0FBQ0FqRyxlQUFTLENBQUNrRyxTQUFELENBQVQ7QUFDQTFGLHNCQUFnQixDQUFDLENBQUMsR0FBR0QsYUFBSixFQUFtQjZGLEtBQW5CLENBQUQsQ0FBaEI7QUFDQXhGLFlBQU0sQ0FBQ2lGLE1BQUQsQ0FBTixDQXBCcUUsQ0FvQnJEOztBQUNoQjtBQUNEOztBQUNELFFBQUlTLEdBQUcsR0FBRyxDQUFDLENBQVgsRUFBYztBQUFFO0FBQ2RqRyxlQUFTLEtBQUtYLDhFQUFkLEdBQ0l1RyxTQUFTLENBQUM5QyxJQUFWLENBQWU2QyxrQkFBa0IsQ0FBQ1UsTUFBbEMsQ0FESixHQUVJUixTQUFTLENBQUMvQyxJQUFWLENBQWU2QyxrQkFBa0IsQ0FBQ1UsTUFBbEMsQ0FGSjtBQUdBVix3QkFBa0IsQ0FBQ1EsTUFBbkIsR0FBNEI5RyxzRUFBNUI7QUFDQXNHLHdCQUFrQixDQUFDVSxNQUFuQixHQUE0QmhILHFFQUE1QjtBQUNBcUcsdUJBQWlCLENBQUNKLEVBQUQsQ0FBakIsR0FBd0JLLGtCQUF4QjtBQUNBRixvQkFBYyxDQUFDSixFQUFELENBQWQsR0FBcUIsQ0FBQyxHQUFHSyxpQkFBSixDQUFyQjtBQUNBM0Ysa0JBQVksQ0FDVkMsU0FBUyxLQUFLWCw4RUFBZCxHQUF1Q3VHLFNBQVMsQ0FBQ3BDLE1BQVYsR0FBbUIsQ0FBMUQsR0FBOERxQyxTQUFTLENBQUNyQyxNQUFWLEdBQW1CLENBRHZFLENBQVo7QUFHQXNDLHNCQUFnQixDQUFDakMsTUFBakIsQ0FBd0JvQyxHQUF4QixFQUE2QixDQUE3QjtBQUNBcEcsb0JBQWMsQ0FBQzRGLGNBQUQsQ0FBZDtBQUNBaEcsZUFBUyxDQUFDbUcsU0FBRCxDQUFUO0FBQ0FqRyxlQUFTLENBQUNrRyxTQUFELENBQVQ7QUFDQTFGLHNCQUFnQixDQUFDMkYsZ0JBQUQsQ0FBaEI7QUFDQXZGLFlBQU0sQ0FBQyxDQUFDLENBQUYsRUFBSSxDQUFDLENBQUwsRUFBT2xCLGtFQUFQLENBQU4sQ0FoQlksQ0FnQmM7O0FBQzFCO0FBQ0QsS0F0RDhELENBdUQvRDtBQUNBOzs7QUFDQSxRQUFJc0csa0JBQWtCLENBQUNRLE1BQW5CLEtBQThCOUcsc0VBQWxDLEVBQWtEO0FBQ2hEO0FBQ0EsVUFBSWlILFlBQVksR0FBR2hHLEdBQUcsQ0FBQyxDQUFELENBQUgsS0FBVytFLEVBQVgsSUFBaUIvRSxHQUFHLENBQUMsQ0FBRCxDQUFILEtBQVdnRixFQUE1QixHQUFpQ2pHLG1FQUFqQyxHQUErQztBQUNqRWlCLFNBQUcsQ0FBQyxDQUFELENBQUgsS0FBV2pCLG1FQUFYLEdBQXlCQSxrRUFBekIsR0FBc0M7QUFDdENpQixTQUFHLENBQUMsQ0FBRCxDQUFILEtBQVdqQixrRUFBWCxHQUF3QkEsa0VBQXhCLEdBQXFDO0FBQ3JDQSx5RUFIRCxDQUZnRCxDQUtsQzs7QUFDZG1HLFlBQU0sR0FBRyxDQUFDSCxFQUFELEVBQUlDLEVBQUosRUFBT2dCLFlBQVAsQ0FBVDtBQUNBL0YsWUFBTSxDQUFDaUYsTUFBRCxDQUFOO0FBQ0E7QUFDRDtBQUNGLEdBbkVEOztBQXFFQSxRQUFNZSxtQkFBbUIsR0FBSUMsU0FBRCxJQUFlO0FBQ3pDLFFBQUlqSSxXQUFXLEtBQUtjLDZFQUFwQixFQUEyQztBQUFDO0FBQVEsS0FEWCxDQUV6Qzs7O0FBQ0EsUUFBSVMsU0FBUyxLQUFLLENBQUMsQ0FBbkIsRUFBc0I7QUFDcEJDLGtCQUFZLENBQUN5RyxTQUFELENBQVo7QUFDQTtBQUNELEtBTndDLENBT3pDOzs7QUFDQSxRQUFJMUcsU0FBUyxLQUFLMEcsU0FBbEIsRUFBNkI7QUFDM0J6RyxrQkFBWSxDQUFDLENBQUMsQ0FBRixDQUFaO0FBQ0E7QUFDRCxLQVh3QyxDQVl6Qzs7O0FBQ0EsUUFBSTBHLE9BQU8sR0FBR2xJLFdBQVcsS0FBS2MsOEVBQWhCLEdBQXlDLENBQUMsR0FBR0csTUFBSixDQUF6QyxHQUF1RCxDQUFDLEdBQUdFLE1BQUosQ0FBckU7QUFDQSxRQUFJZ0gsUUFBUSxHQUFHNUcsU0FBZjtBQUNBLFFBQUk2RyxRQUFRLEdBQUdGLE9BQU8sQ0FBQ0MsUUFBRCxDQUF0QjtBQUNBLFFBQUlFLE1BQU0sR0FBR0osU0FBYjtBQUNBQyxXQUFPLENBQUM1QyxNQUFSLENBQWU2QyxRQUFmLEVBQXlCLENBQXpCLEVBakJ5QyxDQWlCWjs7QUFDN0JELFdBQU8sQ0FBQzVDLE1BQVIsQ0FBZStDLE1BQWYsRUFBc0IsQ0FBdEIsRUFBd0JELFFBQXhCLEVBbEJ5QyxDQWtCTjs7QUFDbkNwSSxlQUFXLEtBQUtjLDhFQUFoQixHQUF5Q0ksU0FBUyxDQUFDZ0gsT0FBRCxDQUFsRCxHQUE4RDlHLFNBQVMsQ0FBQzhHLE9BQUQsQ0FBdkU7QUFDQTFHLGdCQUFZLENBQUMsQ0FBQyxDQUFGLENBQVo7QUFDRCxHQXJCRDs7QUF1QkEsaUJBQWU4RyxjQUFmLEdBQWdDO0FBQzlCLFFBQUksQ0FBQ0MsV0FBVyxFQUFoQixFQUFvQjtBQUNsQjtBQUNEOztBQUNELFFBQUlDLFFBQVEsR0FBRyxNQUFNQyxXQUFXLEVBQWhDOztBQUNBLFFBQUlELFFBQVEsQ0FBQ0UsWUFBVCxDQUFzQnpELE1BQXRCLEtBQWlDLENBQXJDLEVBQXdDO0FBQ3RDMEQsV0FBSyxDQUFFLDBDQUF5Q0gsUUFBUSxDQUFDRSxZQUFULENBQXNCRSxJQUF0QixHQUE2QkMsT0FBN0IsQ0FBcUMsR0FBckMsRUFBeUMsR0FBekMsRUFBOENDLFdBQTlDLEVBQTRELEVBQXZHLENBQUw7QUFDQSxhQUZzQyxDQUU5QjtBQUNUOztBQUNELFFBQUlDLFVBQVUsR0FBR2xILE9BQWpCOztBQUNBLFFBQUk3QixXQUFXLEtBQUtjLDhFQUFwQixFQUE0QztBQUMxQyxVQUFJa0ksYUFBYSxHQUFHLENBQ2xCLEtBRGtCLEVBRWxCLE9BQU9ySSxNQUZXLEVBR2xCLE9BQU9DLElBSFcsRUFJbEJELE1BQU0sR0FBRSxJQUpVLEVBS2xCQSxNQUFNLEdBQUcsR0FBVCxHQUFlQyxJQUxHLEVBTWxCQSxJQUFJLEdBQUcsSUFOVyxFQU9sQkEsSUFBSSxHQUFHLEdBQVAsR0FBYUQsTUFQSyxFQVFsQkMsSUFBSSxHQUFHLEdBQVAsR0FBYUEsSUFSSyxDQUFwQixDQUQwQyxDQVV2Qzs7QUFDSCxXQUFLLElBQUlxSSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHdEgsYUFBYSxDQUFDc0QsTUFBbEMsRUFBMENnRSxDQUFDLEVBQTNDLEVBQStDO0FBQzdDLFlBQUlELGFBQWEsQ0FBQ3JCLE9BQWQsQ0FBc0JoRyxhQUFhLENBQUNzSCxDQUFELENBQW5DLElBQTBDLENBQUMsQ0FBL0MsRUFBa0Q7QUFDaERGLG9CQUFVLEdBQUdBLFVBQVUsR0FBRyxDQUExQjtBQUNEO0FBQ0Y7QUFDRjs7QUFDRCxRQUFJRyxjQUFjLEdBQUdsSixXQUFXLEtBQUtjLDhFQUFoQixHQUF5QyxDQUFDLEdBQUdHLE1BQUosQ0FBekMsR0FBdUQsQ0FBQyxHQUFHRSxNQUFKLENBQTVFO0FBQ0EsUUFBSWdJLFFBQVEsR0FBRyxDQUFDLEdBQUdwSSxLQUFKLENBQWY7O0FBQ0EsV0FBT21JLGNBQWMsQ0FBQ2pFLE1BQWYsR0FBd0I1RSxRQUF4QixJQUFvQzhJLFFBQVEsQ0FBQ2xFLE1BQVQsR0FBa0IsQ0FBN0QsRUFBZ0U7QUFDOUQsVUFBSUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCOEQsUUFBUSxDQUFDbEUsTUFBcEMsQ0FBWDtBQUNBaUUsb0JBQWMsQ0FBQzNFLElBQWYsQ0FBb0I0RSxRQUFRLENBQUNqRSxJQUFELENBQTVCO0FBQ0FpRSxjQUFRLENBQUM3RCxNQUFULENBQWdCSixJQUFoQixFQUFzQixDQUF0QjtBQUNEOztBQUNEZ0Usa0JBQWMsQ0FBQzNELElBQWY7QUFDQSxRQUFJNkQsWUFBWSxHQUFHRixjQUFjLENBQUNqRSxNQUFmLEtBQTBCLENBQTFCLEdBQThCbkUsNkVBQTlCLEdBQXNEZCxXQUFXLEtBQUtjLDhFQUFoQixHQUF5Q0EsMkVBQXpDLEdBQStEQSw4RUFBeEk7O0FBQ0EsUUFBSSxDQUFDdUksdUZBQXNCLENBQUNoSSxXQUFELENBQTNCLEVBQTBDO0FBQ3hDK0gsa0JBQVksR0FBR3RJLDZFQUFmLENBRHdDLENBQ0Y7QUFDdkM7O0FBQ0QsUUFBSXdJLE9BQU8sR0FBRztBQUFDQyxRQUFFLEVBQUV2SixXQUFMO0FBQWtCd0YsVUFBSSxFQUFFMUUsd0VBQXhCO0FBQTBDMEksY0FBUSxFQUFFaEIsUUFBUSxDQUFDZ0IsUUFBN0Q7QUFBdUVDLGdCQUFVLEVBQUVqQixRQUFRLENBQUNpQixVQUE1RjtBQUF3R0MsU0FBRyxFQUFFbEIsUUFBUSxDQUFDa0I7QUFBdEgsS0FBZDtBQUNBLFFBQUlDLFFBQVEsR0FBRyxDQUFDLEdBQUcxSCxLQUFKLEVBQVdxSCxPQUFYLENBQWY7QUFDQSxRQUFJekUsWUFBWSxHQUFHSixJQUFJLENBQUNDLEdBQUwsRUFBbkI7QUFDQW1CLGtCQUFjO0FBQ2RuRixnQkFBWSxDQUFDbUUsWUFBRCxDQUFaO0FBQ0FuRCxnQkFBWSxDQUFDMEgsWUFBRCxDQUFaO0FBQ0FwSixlQUFXLEtBQUtjLDhFQUFoQixHQUF5Q0ksU0FBUyxDQUFDZ0ksY0FBRCxDQUFsRCxHQUFxRTlILFNBQVMsQ0FBQzhILGNBQUQsQ0FBOUU7QUFDQWxJLFlBQVEsQ0FBQ21JLFFBQUQsQ0FBUjtBQUNBakgsWUFBUSxDQUFDeUgsUUFBRCxDQUFSO0FBQ0E3SCxjQUFVLENBQUNpSCxVQUFELENBQVY7QUFDQTNHLGVBQVcsQ0FBQztBQUNWZixpQkFBVyxFQUFFMkUsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ00sU0FBTCxDQUFlakYsV0FBZixDQUFYLENBREg7QUFDNEM7QUFDdERKLFlBQU0sRUFBRWpCLFdBQVcsS0FBS2MsOEVBQWhCLEdBQXlDLENBQUMsR0FBR29JLGNBQUosQ0FBekMsR0FBK0QsQ0FBQyxHQUFHakksTUFBSixDQUY3RDtBQUdWRSxZQUFNLEVBQUVuQixXQUFXLEtBQUtjLDhFQUFoQixHQUF5QyxDQUFDLEdBQUdLLE1BQUosQ0FBekMsR0FBdUQsQ0FBQyxHQUFHK0gsY0FBSjtBQUhyRCxLQUFELENBQVg7QUFLQSxRQUFJVSxLQUFLLEdBQUc7QUFDVjNKLFlBQU0sRUFBRUEsTUFERTtBQUNNO0FBQ2hCdUYsVUFBSSxFQUFFLElBRkk7QUFFRTtBQUNaaEIsVUFBSSxFQUFFeEUsV0FBVyxLQUFLYyw4RUFBaEIsR0FBeUMsS0FBekMsR0FBaUQsS0FIN0M7QUFHb0Q7QUFDOUQyRSxlQUFTLEVBQUVaLFlBSkQ7QUFJZTtBQUN6QmEsWUFBTSxFQUFFMUYsV0FMRTtBQU1WaUIsWUFBTSxFQUFFaUksY0FORTtBQU1jO0FBQ3hCbkksV0FBSyxFQUFFb0ksUUFQRztBQU9PO0FBQ2pCMUgsZUFBUyxFQUFFMkgsWUFSRDtBQVFlO0FBQ3pCUyxVQUFJLEVBQUVQLE9BVEk7QUFTSztBQUNmekgsYUFBTyxFQUFFa0gsVUFWQyxDQVVVOztBQVZWLEtBQVo7QUFZQS9JLGVBQVcsS0FBS2MsOEVBQWhCLEdBQXlDOEksS0FBSyxDQUFDM0ksTUFBTixHQUFlaUksY0FBeEQsR0FBeUVVLEtBQUssQ0FBQ3pJLE1BQU4sR0FBZStILGNBQXhGO0FBQ0E5RSxtQkFBZSxDQUFDd0YsS0FBRCxDQUFmO0FBQ0Q7O0FBQUE7O0FBRUQsUUFBTUUsZ0JBQWdCLEdBQUcsTUFBTTtBQUM3QixRQUFJL0ksS0FBSyxDQUFDa0UsTUFBTixHQUFlNUUsUUFBbkIsRUFBNkI7QUFDM0IwSixZQUFNLENBQUNwQixLQUFQLENBQWEsVUFBVXRJLFFBQVYsR0FBcUIsK0JBQWxDO0FBQ0E7QUFDRDs7QUFDRDJKLFdBQU8sQ0FBRSxnQkFBRixDQUFQO0FBQ0EsUUFBSWQsY0FBYyxHQUFHLEVBQXJCO0FBQ0EsUUFBSUMsUUFBUSxHQUFHLENBQUMsR0FBR3BJLEtBQUosQ0FBZjs7QUFDQSxXQUFPbUksY0FBYyxDQUFDakUsTUFBZixHQUF3QjVFLFFBQXhCLElBQW9DOEksUUFBUSxDQUFDbEUsTUFBVCxHQUFrQixDQUE3RCxFQUFnRTtBQUM5RCxVQUFJQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0I4RCxRQUFRLENBQUNsRSxNQUFwQyxDQUFYO0FBQ0FpRSxvQkFBYyxDQUFDM0UsSUFBZixDQUFvQjRFLFFBQVEsQ0FBQ2pFLElBQUQsQ0FBNUI7QUFDQWlFLGNBQVEsQ0FBQzdELE1BQVQsQ0FBZ0JKLElBQWhCLEVBQXNCLENBQXRCO0FBQ0Q7O0FBQ0RnRSxrQkFBYyxDQUFDM0QsSUFBZjtBQUNBdkYsZUFBVyxLQUFLYyw4RUFBaEIsR0FBeUNxSSxRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFKLEVBQWMsR0FBR2hILFFBQVEsQ0FBQ2xCLE1BQTFCLENBQXBELEdBQXdGa0ksUUFBUSxHQUFHLENBQUMsR0FBR0EsUUFBSixFQUFjLEdBQUdoSCxRQUFRLENBQUNoQixNQUExQixDQUFuRztBQUNBZ0ksWUFBUSxDQUFDNUQsSUFBVDtBQUNBLFFBQUkrRCxPQUFPLEdBQUc7QUFBQ0MsUUFBRSxFQUFFdkosV0FBTDtBQUFrQndGLFVBQUksRUFBRTFFLHdFQUFnQm1KO0FBQXhDLEtBQWQ7QUFDQSxRQUFJTixRQUFRLEdBQUcsQ0FBQyxHQUFHMUgsS0FBSixFQUFXcUgsT0FBWCxDQUFmO0FBQ0EsUUFBSXpFLFlBQVksR0FBR0osSUFBSSxDQUFDQyxHQUFMLEVBQW5CO0FBQ0FtQixrQkFBYztBQUNkbkYsZ0JBQVksQ0FBQ21FLFlBQUQsQ0FBWjtBQUNBdkQsa0JBQWMsQ0FBQzBFLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNNLFNBQUwsQ0FBZW5FLFFBQVEsQ0FBQ2QsV0FBeEIsQ0FBWCxDQUFELENBQWQsQ0FyQjZCLENBcUJxQzs7QUFDbEVLLGdCQUFZLENBQUMxQixXQUFXLEtBQUtjLDhFQUFoQixHQUF5Q0EsMkVBQXpDLEdBQStEQSw4RUFBaEUsQ0FBWjtBQUNBZCxlQUFXLEtBQUtjLDhFQUFoQixHQUF5Q0ksU0FBUyxDQUFDZ0ksY0FBRCxDQUFsRCxHQUFxRTlILFNBQVMsQ0FBQzhILGNBQUQsQ0FBOUU7QUFDQWxJLFlBQVEsQ0FBQ21JLFFBQUQsQ0FBUjtBQUNBakgsWUFBUSxDQUFDeUgsUUFBRCxDQUFSO0FBQ0F2SCxlQUFXLENBQUM7QUFDVmYsaUJBQVcsRUFBRTJFLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNNLFNBQUwsQ0FBZW5FLFFBQVEsQ0FBQ2QsV0FBeEIsQ0FBWCxDQURIO0FBQ3FEO0FBQy9ESixZQUFNLEVBQUVqQixXQUFXLEtBQUtjLDhFQUFoQixHQUF5QyxDQUFDLEdBQUdvSSxjQUFKLENBQXpDLEdBQStELENBQUMsR0FBR2pJLE1BQUosQ0FGN0Q7QUFHVkUsWUFBTSxFQUFFbkIsV0FBVyxLQUFLYyw4RUFBaEIsR0FBeUMsQ0FBQyxHQUFHSyxNQUFKLENBQXpDLEdBQXVELENBQUMsR0FBRytILGNBQUo7QUFIckQsS0FBRCxDQUFYO0FBS0EsUUFBSVUsS0FBSyxHQUFHO0FBQ1YzSixZQUFNLEVBQUVBLE1BREU7QUFDTTtBQUNoQnVGLFVBQUksRUFBRSxJQUZJO0FBRUU7QUFDWmhCLFVBQUksRUFBRXhFLFdBQVcsS0FBS2MsOEVBQWhCLEdBQXlDLEtBQXpDLEdBQWlELEtBSDdDO0FBR29EO0FBQzlEMkUsZUFBUyxFQUFFWixZQUpEO0FBSWU7QUFDekJhLFlBQU0sRUFBRTFGLFdBTEU7QUFNVnlCLGVBQVMsRUFBRVgsMkVBTkQ7QUFNc0I7QUFDaENDLFdBQUssRUFBRW9JLFFBUEc7QUFPTztBQUNqQlUsVUFBSSxFQUFFUCxPQVJJLENBUUk7O0FBUkosS0FBWjtBQVVBdEosZUFBVyxLQUFLYyw4RUFBaEIsR0FBeUM4SSxLQUFLLENBQUMzSSxNQUFOLEdBQWVpSSxjQUF4RCxHQUF5RVUsS0FBSyxDQUFDekksTUFBTixHQUFlK0gsY0FBeEY7QUFDQTlFLG1CQUFlLENBQUN3RixLQUFELENBQWY7QUFDRCxHQTNDRDs7QUE2Q0EsV0FBU3JCLFdBQVQsR0FBdUI7QUFDckI7QUFDQSxRQUFJMkIsU0FBUyxHQUFHLElBQWhCO0FBQ0EsUUFBSUMsUUFBUSxHQUFHbEksS0FBSyxDQUFDZ0QsTUFBckI7O0FBQ0EsU0FBSyxJQUFJbUYsU0FBUyxHQUFHLENBQXJCLEVBQXdCRixTQUFTLElBQUtFLFNBQVMsR0FBR0QsUUFBbEQsRUFBNkQsRUFBRUMsU0FBL0QsRUFBMEU7QUFDeEUsVUFBSW5JLEtBQUssQ0FBQ21JLFNBQUQsQ0FBTCxDQUFpQjVFLElBQWpCLEtBQTBCMUUsd0VBQTlCLEVBQWdEO0FBQzlDb0osaUJBQVMsR0FBRyxLQUFaO0FBQ0Q7QUFDRixLQVJvQixDQVNyQjs7O0FBQ0EsUUFBSUEsU0FBUyxJQUFJN0ksV0FBVyxDQUFDVixNQUFELENBQVgsQ0FBb0JBLE1BQXBCLEVBQTRCaUgsTUFBNUIsS0FBdUM5RyxzRUFBeEQsRUFBd0U7QUFDdEVpSixZQUFNLENBQUNwQixLQUFQLENBQWEsbUNBQWI7QUFDQSxhQUFPLEtBQVA7QUFDRCxLQWJvQixDQWNyQjs7O0FBQ0EsUUFBSWhILGFBQWEsQ0FBQ3NELE1BQWQsS0FBeUIsQ0FBN0IsRUFBZ0M7QUFDOUI4RSxZQUFNLENBQUNwQixLQUFQLENBQWEsMkJBQWI7QUFDQSxhQUFPLEtBQVA7QUFDRDtBQUNEO0FBQ047QUFDQTtBQUNBOzs7QUFDTSxRQUFJMEIsU0FBUyxHQUFHMUksYUFBYSxDQUFDc0QsTUFBOUI7QUFDQSxRQUFJcUYsTUFBTSxHQUFHMUosSUFBSSxHQUFDLENBQWxCO0FBQ0EsUUFBSTJKLE9BQU8sR0FBRyxDQUFDLENBQWY7QUFDQSxRQUFJQyxNQUFNLEdBQUc1SixJQUFJLEdBQUMsQ0FBbEI7QUFDQSxRQUFJNkosT0FBTyxHQUFHLENBQUMsQ0FBZjs7QUFDQSxTQUFLLElBQUlqRCxLQUFLLEdBQUMsQ0FBZixFQUFrQkEsS0FBSyxHQUFHNkMsU0FBMUIsRUFBcUMsRUFBRTdDLEtBQXZDLEVBQThDO0FBQUU7QUFDOUMsVUFBSWtELE9BQU8sR0FBR0MsUUFBUSxDQUFDaEosYUFBYSxDQUFDNkYsS0FBRCxDQUFiLENBQXFCb0QsS0FBckIsQ0FBMkIsR0FBM0IsRUFBZ0MsQ0FBaEMsQ0FBRCxDQUF0QjtBQUNBLFVBQUlDLE9BQU8sR0FBR0YsUUFBUSxDQUFDaEosYUFBYSxDQUFDNkYsS0FBRCxDQUFiLENBQXFCb0QsS0FBckIsQ0FBMkIsR0FBM0IsRUFBZ0MsQ0FBaEMsQ0FBRCxDQUF0Qjs7QUFDQSxVQUFJRixPQUFPLEdBQUdKLE1BQWQsRUFBc0I7QUFBRUEsY0FBTSxHQUFHSSxPQUFUO0FBQWtCOztBQUMxQyxVQUFJQSxPQUFPLEdBQUdILE9BQWQsRUFBdUI7QUFBRUEsZUFBTyxHQUFHRyxPQUFWO0FBQW1COztBQUM1QyxVQUFJRyxPQUFPLEdBQUdMLE1BQWQsRUFBc0I7QUFBRUEsY0FBTSxHQUFHSyxPQUFUO0FBQWtCOztBQUMxQyxVQUFJQSxPQUFPLEdBQUdKLE9BQWQsRUFBdUI7QUFBRUEsZUFBTyxHQUFHSSxPQUFWO0FBQW1CLE9BTkEsQ0FPNUM7OztBQUNBLFVBQUksRUFBRUgsT0FBTyxHQUFHLENBQVYsSUFBZXJKLFdBQVcsQ0FBQ3FKLE9BQU8sR0FBQyxDQUFULENBQVgsQ0FBdUJHLE9BQXZCLEVBQWdDakQsTUFBaEMsS0FBMkM5RyxzRUFBNUQsS0FDRixFQUFFK0osT0FBTyxHQUFHLENBQVYsSUFBZXhKLFdBQVcsQ0FBQ3FKLE9BQUQsQ0FBWCxDQUFxQkcsT0FBTyxHQUFDLENBQTdCLEVBQWdDakQsTUFBaEMsS0FBMkM5RyxzRUFBNUQsQ0FERSxJQUVGLEVBQUU0SixPQUFPLEdBQUc5SixJQUFWLElBQWtCUyxXQUFXLENBQUNxSixPQUFPLEdBQUMsQ0FBVCxDQUFYLENBQXVCRyxPQUF2QixFQUFnQ2pELE1BQWhDLEtBQTJDOUcsc0VBQS9ELENBRkUsSUFHRixFQUFFK0osT0FBTyxHQUFHakssSUFBVixJQUFrQlMsV0FBVyxDQUFDcUosT0FBRCxDQUFYLENBQXFCRyxPQUFPLEdBQUMsQ0FBN0IsRUFBZ0NqRCxNQUFoQyxLQUEyQzlHLHNFQUEvRCxDQUhGLEVBSUk7QUFDQWlKLGNBQU0sQ0FBQ3BCLEtBQVAsQ0FBYSx5Q0FBYjtBQUNBLGVBQU8sS0FBUDtBQUNEO0FBQ0osS0E1Q29CLENBNkNyQjs7O0FBQ0EsUUFBSTJCLE1BQU0sS0FBS0MsT0FBWCxJQUFzQkMsTUFBTSxLQUFLQyxPQUFyQyxFQUE4QztBQUM1Q1YsWUFBTSxDQUFDcEIsS0FBUCxDQUFhLHlDQUFiO0FBQ0EsYUFBTyxLQUFQO0FBQ0Q7O0FBQ0QsUUFBSW1DLFFBQVEsR0FBRyxLQUFmO0FBQ0EsUUFBSUMsUUFBUSxHQUFHLEtBQWY7QUFDQTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUNNLFNBQUssSUFBSUwsT0FBTyxHQUFHSixNQUFuQixFQUEyQkksT0FBTyxJQUFJSCxPQUF0QyxFQUErQyxFQUFFRyxPQUFqRCxFQUEwRDtBQUN4RCxXQUFLLElBQUlHLE9BQU8sR0FBR0wsTUFBbkIsRUFBMkJLLE9BQU8sSUFBSUosT0FBdEMsRUFBK0MsRUFBRUksT0FBakQsRUFBMEQ7QUFDeEQsWUFBSXhKLFdBQVcsQ0FBQ3FKLE9BQUQsQ0FBWCxDQUFxQkcsT0FBckIsRUFBOEJqRCxNQUE5QixLQUF5QzlHLHNFQUE3QyxFQUE2RDtBQUMzRGlKLGdCQUFNLENBQUNwQixLQUFQLENBQWEsNkJBQWI7QUFDQSxpQkFBTyxLQUFQO0FBQ0Q7O0FBQ0QsWUFBSSxDQUFDdUIsU0FBTCxFQUFnQjtBQUFFO0FBQ2hCLGNBQUljLFNBQVMsR0FBR04sT0FBTyxHQUFHLEdBQVYsR0FBZ0JHLE9BQWhDOztBQUNBLGNBQUlsSixhQUFhLENBQUNnRyxPQUFkLENBQXNCcUQsU0FBdEIsSUFBbUMsQ0FBdkMsRUFBMEM7QUFBRTtBQUMxQ0Ysb0JBQVEsR0FBRyxJQUFYO0FBQ0Q7O0FBQ0QsY0FBSVIsTUFBTSxLQUFLQyxPQUFYLElBQXNCRyxPQUFPLEdBQUcsQ0FBaEMsSUFBcUNySixXQUFXLENBQUNxSixPQUFPLEdBQUMsQ0FBVCxDQUFYLENBQXVCRyxPQUF2QixFQUFnQ2pELE1BQWhDLEtBQTJDOUcsc0VBQXBGLEVBQW9HO0FBQUVpSyxvQkFBUSxHQUFHLElBQVg7QUFBa0I7O0FBQ3hILGNBQUlULE1BQU0sS0FBS0MsT0FBWCxJQUFzQkcsT0FBTyxHQUFHOUosSUFBaEMsSUFBd0NTLFdBQVcsQ0FBQ3FKLE9BQU8sR0FBQyxDQUFULENBQVgsQ0FBdUJHLE9BQXZCLEVBQWdDakQsTUFBaEMsS0FBMkM5RyxzRUFBdkYsRUFBdUc7QUFBRWlLLG9CQUFRLEdBQUcsSUFBWDtBQUFrQjs7QUFDM0gsY0FBSVAsTUFBTSxLQUFLQyxPQUFYLElBQXNCSSxPQUFPLEdBQUcsQ0FBaEMsSUFBcUN4SixXQUFXLENBQUNxSixPQUFELENBQVgsQ0FBcUJHLE9BQU8sR0FBQyxDQUE3QixFQUFnQ2pELE1BQWhDLEtBQTJDOUcsc0VBQXBGLEVBQW9HO0FBQUVpSyxvQkFBUSxHQUFHLElBQVg7QUFBa0I7O0FBQ3hILGNBQUlQLE1BQU0sS0FBS0MsT0FBWCxJQUFzQkksT0FBTyxHQUFHakssSUFBaEMsSUFBd0NTLFdBQVcsQ0FBQ3FKLE9BQUQsQ0FBWCxDQUFxQkcsT0FBTyxHQUFDLENBQTdCLEVBQWdDakQsTUFBaEMsS0FBMkM5RyxzRUFBdkYsRUFBdUc7QUFBRWlLLG9CQUFRLEdBQUcsSUFBWDtBQUFrQjtBQUM1SDtBQUNGO0FBQ0Y7O0FBQ0QsUUFBSSxDQUFDYixTQUFMLEVBQWdCO0FBQ2Q7QUFDQTtBQUNBLFVBQUlJLE1BQU0sS0FBS0MsT0FBWCxJQUFzQkMsTUFBTSxHQUFHLENBQS9CLElBQW9DbkosV0FBVyxDQUFDaUosTUFBRCxDQUFYLENBQW9CRSxNQUFNLEdBQUMsQ0FBM0IsRUFBOEI1QyxNQUE5QixLQUF5QzlHLHNFQUFqRixFQUFpRztBQUFFZ0ssZ0JBQVEsR0FBRyxJQUFYO0FBQWtCOztBQUNySCxVQUFJUixNQUFNLEtBQUtDLE9BQVgsSUFBc0JFLE9BQU8sR0FBRzdKLElBQWhDLElBQXdDUyxXQUFXLENBQUNpSixNQUFELENBQVgsQ0FBb0JHLE9BQU8sR0FBQyxDQUE1QixFQUErQjdDLE1BQS9CLEtBQTBDOUcsc0VBQXRGLEVBQXNHO0FBQUVnSyxnQkFBUSxHQUFHLElBQVg7QUFBa0I7O0FBQzFILFVBQUlOLE1BQU0sS0FBS0MsT0FBWCxJQUFzQkgsTUFBTSxHQUFHLENBQS9CLElBQW9DakosV0FBVyxDQUFDaUosTUFBTSxHQUFDLENBQVIsQ0FBWCxDQUFzQkUsTUFBdEIsTUFBa0MxSixzRUFBMUUsRUFBMEY7QUFBRWdLLGdCQUFRLEdBQUcsSUFBWDtBQUFrQjs7QUFDOUcsVUFBSU4sTUFBTSxLQUFLQyxPQUFYLElBQXNCRixPQUFPLEdBQUczSixJQUFoQyxJQUF3Q1MsV0FBVyxDQUFDa0osT0FBTyxHQUFDLENBQVQsQ0FBWCxDQUF1QkMsTUFBdkIsRUFBK0I1QyxNQUEvQixLQUEwQzlHLHNFQUF0RixFQUFzRztBQUFFZ0ssZ0JBQVEsR0FBRyxJQUFYO0FBQWtCLE9BTjVHLENBT2Q7QUFDQTs7O0FBQ0EsVUFBSSxDQUFDQSxRQUFELElBQWEsQ0FBQ0MsUUFBbEIsRUFBNEI7QUFDMUJoQixjQUFNLENBQUNwQixLQUFQLENBQWEsNEVBQWI7QUFDQSxlQUFPLEtBQVA7QUFDRDtBQUNGOztBQUNELFdBQU8sSUFBUDtBQUNEOztBQUVELGlCQUFlRixXQUFmLEdBQTZCO0FBQzNCLFFBQUlELFFBQVEsR0FBRyxFQUFmO0FBQ0EsUUFBSWdCLFFBQVEsR0FBRyxFQUFmO0FBQ0EsUUFBSUMsVUFBVSxHQUFHLEVBQWpCO0FBQ0EsUUFBSXdCLGNBQWMsR0FBRyxFQUFyQjtBQUNBLFFBQUlDLE9BQU8sR0FBR3RLLElBQUksR0FBQyxDQUFuQjtBQUNBLFFBQUl1SyxPQUFPLEdBQUd2SyxJQUFJLEdBQUMsQ0FBbkI7QUFDQSxRQUFJMEosTUFBTSxHQUFHWSxPQUFiO0FBQ0EsUUFBSVgsT0FBTyxHQUFHLENBQUMsQ0FBZjtBQUNBLFFBQUlDLE1BQU0sR0FBR1csT0FBYjtBQUNBLFFBQUlWLE9BQU8sR0FBRyxDQUFDLENBQWY7QUFDQSxRQUFJSixTQUFTLEdBQUcxSSxhQUFhLENBQUNzRCxNQUE5Qjs7QUFDQSxTQUFLLElBQUl1QyxLQUFLLEdBQUMsQ0FBZixFQUFrQkEsS0FBSyxHQUFHNkMsU0FBMUIsRUFBcUMsRUFBRTdDLEtBQXZDLEVBQThDO0FBQzVDLFVBQUk0RCxHQUFHLEdBQUdULFFBQVEsQ0FBQ2hKLGFBQWEsQ0FBQzZGLEtBQUQsQ0FBYixDQUFxQm9ELEtBQXJCLENBQTJCLEdBQTNCLEVBQWdDLENBQWhDLENBQUQsQ0FBbEI7QUFDQSxVQUFJUyxHQUFHLEdBQUdWLFFBQVEsQ0FBQ2hKLGFBQWEsQ0FBQzZGLEtBQUQsQ0FBYixDQUFxQm9ELEtBQXJCLENBQTJCLEdBQTNCLEVBQWdDLENBQWhDLENBQUQsQ0FBbEI7O0FBQ0EsVUFBSVEsR0FBRyxHQUFHZCxNQUFWLEVBQWtCO0FBQ2hCQSxjQUFNLEdBQUdjLEdBQVQ7QUFDRDs7QUFDRCxVQUFJQSxHQUFHLEdBQUdiLE9BQVYsRUFBbUI7QUFDakJBLGVBQU8sR0FBR2EsR0FBVjtBQUNEOztBQUNELFVBQUlDLEdBQUcsR0FBR2IsTUFBVixFQUFrQjtBQUNoQkEsY0FBTSxHQUFHYSxHQUFUO0FBQ0Q7O0FBQ0QsVUFBSUEsR0FBRyxHQUFHWixPQUFWLEVBQW1CO0FBQ2pCQSxlQUFPLEdBQUdZLEdBQVY7QUFDRDtBQUNGOztBQUNELFFBQUlmLE1BQU0sR0FBR0MsT0FBVCxJQUFvQkYsU0FBUyxLQUFLLENBQXRDLEVBQXlDO0FBQUU7QUFDekMsVUFBSWdCLEdBQUcsR0FBR2IsTUFBVixDQUR1QyxDQUNyQjtBQUNsQjs7QUFDQSxVQUFJYyxTQUFTLEdBQUdoQixNQUFoQjs7QUFDQSxhQUFPZ0IsU0FBUyxHQUFHLENBQVosSUFBaUJqSyxXQUFXLENBQUNpSyxTQUFTLEdBQUMsQ0FBWCxDQUFYLENBQXlCRCxHQUF6QixFQUE4QnpELE1BQTlCLEtBQXlDOUcsc0VBQWpFLEVBQWlGO0FBQy9Fd0ssaUJBQVMsR0FBR0EsU0FBUyxHQUFHLENBQXhCO0FBQ0QsT0FOc0MsQ0FPdkM7OztBQUNBLFVBQUlDLFVBQVUsR0FBR2hCLE9BQWpCOztBQUNBLGFBQU9nQixVQUFVLEdBQUczSyxJQUFiLElBQXFCUyxXQUFXLENBQUNrSyxVQUFVLEdBQUMsQ0FBWixDQUFYLENBQTBCRixHQUExQixFQUErQnpELE1BQS9CLEtBQTBDOUcsc0VBQXRFLEVBQXNGO0FBQ3BGeUssa0JBQVUsR0FBR0EsVUFBVSxHQUFHLENBQTFCO0FBQ0Q7O0FBQ0ROLG9CQUFjLEdBQUduSywyRUFBQSxDQUFvQnVLLEdBQXBCLElBQTJCdkssMkVBQUEsQ0FBb0J3SyxTQUFwQixDQUE1QyxDQVp1QyxDQVlxQzs7QUFDNUUsV0FBSyxJQUFJRixHQUFHLEdBQUdFLFNBQWYsRUFBMEJGLEdBQUcsSUFBSUcsVUFBakMsRUFBNkMsRUFBRUgsR0FBL0MsRUFBb0Q7QUFDbEQ1QixnQkFBUSxHQUFHQSxRQUFRLEdBQUduSSxXQUFXLENBQUMrSixHQUFELENBQVgsQ0FBaUJDLEdBQWpCLEVBQXNCdkQsTUFBNUM7QUFDQSxZQUFJTixLQUFLLEdBQUc0RCxHQUFHLEdBQUcsR0FBTixHQUFZQyxHQUF4Qjs7QUFDQSxZQUFJMUosYUFBYSxDQUFDZ0csT0FBZCxDQUFzQkgsS0FBdEIsSUFBK0IsQ0FBQyxDQUFwQyxFQUF1QztBQUFFO0FBQ3ZDLGNBQUlnRSxTQUFTLEdBQUdILEdBQWhCOztBQUNBLGlCQUFPRyxTQUFTLEdBQUcsQ0FBWixJQUFpQm5LLFdBQVcsQ0FBQytKLEdBQUQsQ0FBWCxDQUFpQkksU0FBUyxHQUFDLENBQTNCLEVBQThCNUQsTUFBOUIsS0FBeUM5RyxzRUFBakUsRUFBaUY7QUFDL0UwSyxxQkFBUyxHQUFHQSxTQUFTLEdBQUcsQ0FBeEI7QUFDRDs7QUFDRCxjQUFJQyxVQUFVLEdBQUdKLEdBQWpCOztBQUNBLGlCQUFPSSxVQUFVLEdBQUc3SyxJQUFiLElBQXFCUyxXQUFXLENBQUMrSixHQUFELENBQVgsQ0FBaUJLLFVBQVUsR0FBQyxDQUE1QixFQUErQjdELE1BQS9CLEtBQTBDOUcsc0VBQXRFLEVBQXNGO0FBQ3BGMkssc0JBQVUsR0FBR0EsVUFBVSxHQUFHLENBQTFCO0FBQ0Q7O0FBQ0QsY0FBSUQsU0FBUyxHQUFHQyxVQUFoQixFQUE0QjtBQUFFO0FBQzVCLGdCQUFJQyxTQUFTLEdBQUcsRUFBaEI7O0FBQ0EsaUJBQUssSUFBSWIsT0FBTyxHQUFHVyxTQUFuQixFQUE4QlgsT0FBTyxJQUFJWSxVQUF6QyxFQUFxRCxFQUFFWixPQUF2RCxFQUFnRTtBQUM5RGEsdUJBQVMsR0FBR0EsU0FBUyxHQUFHckssV0FBVyxDQUFDK0osR0FBRCxDQUFYLENBQWlCUCxPQUFqQixFQUEwQi9DLE1BQWxEO0FBQ0Q7O0FBQ0QyQixzQkFBVSxHQUFHLENBQUMsR0FBR0EsVUFBSixFQUFnQmlDLFNBQWhCLENBQWI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFDRCxRQUFJbEMsUUFBUSxDQUFDdkUsTUFBVCxHQUFrQixDQUF0QixFQUF5QjtBQUFFO0FBQ3pCLFVBQUltRyxHQUFHLEdBQUdkLE1BQVYsQ0FEdUIsQ0FDTDtBQUNsQjs7QUFDQSxVQUFJa0IsU0FBUyxHQUFHaEIsTUFBaEI7O0FBQ0EsYUFBT2dCLFNBQVMsR0FBRyxDQUFaLElBQWlCbkssV0FBVyxDQUFDK0osR0FBRCxDQUFYLENBQWlCSSxTQUFTLEdBQUMsQ0FBM0IsRUFBOEI1RCxNQUE5QixLQUF5QzlHLHNFQUFqRSxFQUFpRjtBQUMvRTBLLGlCQUFTLEdBQUdBLFNBQVMsR0FBRyxDQUF4QjtBQUNELE9BTnNCLENBT3ZCOzs7QUFDQSxVQUFJQyxVQUFVLEdBQUdoQixPQUFqQjs7QUFDQSxhQUFPZ0IsVUFBVSxHQUFHN0ssSUFBYixJQUFxQlMsV0FBVyxDQUFDK0osR0FBRCxDQUFYLENBQWlCSyxVQUFVLEdBQUMsQ0FBNUIsRUFBK0I3RCxNQUEvQixLQUEwQzlHLHNFQUF0RSxFQUFzRjtBQUNwRjJLLGtCQUFVLEdBQUdBLFVBQVUsR0FBRyxDQUExQjtBQUNEOztBQUNEUixvQkFBYyxHQUFHbkssMkVBQUEsQ0FBb0JzSyxHQUFwQixJQUEyQnRLLDJFQUFBLENBQW9CMEssU0FBcEIsQ0FBNUMsQ0FadUIsQ0FZcUQ7O0FBQzVFaEMsY0FBUSxHQUFHLEVBQVgsQ0FidUIsQ0FhUjs7QUFDZkMsZ0JBQVUsR0FBRyxFQUFiLENBZHVCLENBY047O0FBQ2pCLFdBQUssSUFBSTRCLEdBQUcsR0FBR0csU0FBZixFQUEwQkgsR0FBRyxJQUFJSSxVQUFqQyxFQUE2QyxFQUFFSixHQUEvQyxFQUFvRDtBQUNsRDdCLGdCQUFRLEdBQUdBLFFBQVEsR0FBR25JLFdBQVcsQ0FBQytKLEdBQUQsQ0FBWCxDQUFpQkMsR0FBakIsRUFBc0J2RCxNQUE1QztBQUNBLFlBQUlOLEtBQUssR0FBRzRELEdBQUcsR0FBRyxHQUFOLEdBQVlDLEdBQXhCOztBQUNBLFlBQUkxSixhQUFhLENBQUNnRyxPQUFkLENBQXNCSCxLQUF0QixJQUErQixDQUFDLENBQXBDLEVBQXVDO0FBQUU7QUFDdkMsY0FBSThELFNBQVMsR0FBR0YsR0FBaEI7O0FBQ0EsaUJBQU9FLFNBQVMsR0FBRyxDQUFaLElBQWlCakssV0FBVyxDQUFDaUssU0FBUyxHQUFDLENBQVgsQ0FBWCxDQUF5QkQsR0FBekIsRUFBOEJ6RCxNQUE5QixLQUF5QzlHLHNFQUFqRSxFQUFpRjtBQUMvRXdLLHFCQUFTLEdBQUdBLFNBQVMsR0FBRyxDQUF4QjtBQUNEOztBQUNELGNBQUlDLFVBQVUsR0FBR0gsR0FBakI7O0FBQ0EsaUJBQU9HLFVBQVUsR0FBRzNLLElBQWIsSUFBcUJTLFdBQVcsQ0FBQ2tLLFVBQVUsR0FBQyxDQUFaLENBQVgsQ0FBMEJGLEdBQTFCLEVBQStCekQsTUFBL0IsS0FBMEM5RyxzRUFBdEUsRUFBc0Y7QUFDcEZ5SyxzQkFBVSxHQUFHQSxVQUFVLEdBQUcsQ0FBMUI7QUFDRDs7QUFDRCxjQUFJRCxTQUFTLEdBQUdDLFVBQWhCLEVBQTRCO0FBQUU7QUFDNUIsZ0JBQUlHLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxpQkFBSyxJQUFJaEIsT0FBTyxHQUFHWSxTQUFuQixFQUE4QlosT0FBTyxJQUFJYSxVQUF6QyxFQUFxRCxFQUFFYixPQUF2RCxFQUFnRTtBQUM5RGdCLHVCQUFTLEdBQUdBLFNBQVMsR0FBR3JLLFdBQVcsQ0FBQ3FKLE9BQUQsQ0FBWCxDQUFxQlcsR0FBckIsRUFBMEJ2RCxNQUFsRDtBQUNEOztBQUNEMkIsc0JBQVUsR0FBRyxDQUFDLEdBQUdBLFVBQUosRUFBZ0JpQyxTQUFoQixDQUFiO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBQ0QsUUFBSWhELFlBQVksR0FBRyxNQUFNaUQsYUFBYSxDQUFDbkMsUUFBRCxFQUFXQyxVQUFYLENBQXRDO0FBQ0FqQixZQUFRLEdBQUc7QUFBQ2dCLGNBQVEsRUFBRUEsUUFBWDtBQUFxQkMsZ0JBQVUsRUFBRUEsVUFBakM7QUFBNkNDLFNBQUcsRUFBRXVCLGNBQWxEO0FBQWtFdkMsa0JBQVksRUFBRUE7QUFBaEYsS0FBWDtBQUNBLFdBQU9GLFFBQVA7QUFDRDs7QUFFRCxpQkFBZW1ELGFBQWYsQ0FBNkJuQyxRQUE3QixFQUF1Q0MsVUFBdkMsRUFBbUQ7QUFDakQ7QUFDQSxRQUFJbUMsUUFBUSxHQUFHcEMsUUFBZjtBQUNBQyxjQUFVLENBQUNvQyxPQUFYLENBQW9CQyxFQUFELElBQVE7QUFDekJGLGNBQVEsR0FBR0EsUUFBUSxHQUFHLEdBQVgsR0FBaUJFLEVBQTVCO0FBQ0QsS0FGRDtBQUdBLFFBQUlDLEdBQUcsR0FBSSxLQUFELEdBQW9FLDBDQUFwRSxHQUFpSCxDQUEzSDtBQUNBLFVBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUcsR0FBR0gsUUFBUSxDQUFDTSxpQkFBVCxFQUFQLENBQTVCO0FBQ0EsVUFBTUMsS0FBSyxHQUFHLE1BQU1ILFFBQVEsQ0FBQ0ksSUFBVCxFQUFwQjtBQUNBLFdBQU9ELEtBQUssQ0FBQ3pELFlBQWI7QUFDRDs7QUFFRCxXQUFTMkQsaUJBQVQsR0FBNkI7QUFDM0IsUUFBSSxDQUFDOUosV0FBTCxFQUFrQjtBQUNoQkMsb0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDQTRCLHFCQUFlLENBQ2I7QUFDRW5FLGNBQU0sRUFBRUEsTUFEVjtBQUNrQjtBQUNoQnVGLFlBQUksRUFBRSxJQUZSO0FBRWM7QUFDWmhCLFlBQUksRUFBRSxXQUhSO0FBR3FCO0FBQ25Ca0IsY0FBTSxFQUFFMUYsV0FKVixDQUlzQjs7QUFKdEIsT0FEYSxDQUFmO0FBUUQ7QUFDRjs7QUFFRCxXQUFTc00sYUFBVCxHQUF5QjtBQUN2QjtBQUNBbEksbUJBQWUsQ0FDYjtBQUNFbkUsWUFBTSxFQUFFQSxNQURWO0FBQ2tCO0FBQ2hCdUYsVUFBSSxFQUFFLElBRlI7QUFFYztBQUNaaEIsVUFBSSxFQUFFLFVBSFIsQ0FHbUI7O0FBSG5CLEtBRGEsQ0FBZjtBQU9EOztBQUVELFFBQU0rSCxXQUFXLEdBQUcsTUFBTTtBQUN4QmpMLGtCQUFjLENBQUMwRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDTSxTQUFMLENBQWVuRSxRQUFRLENBQUNkLFdBQXhCLENBQVgsQ0FBRCxDQUFkLENBRHdCLENBQzBDOztBQUNsRUgsYUFBUyxDQUFDLENBQUMsR0FBR2lCLFFBQVEsQ0FBQ2xCLE1BQWIsQ0FBRCxDQUFUO0FBQ0FHLGFBQVMsQ0FBQyxDQUFDLEdBQUdlLFFBQVEsQ0FBQ2hCLE1BQWIsQ0FBRCxDQUFUO0FBQ0FLLGdCQUFZLENBQUMsQ0FBQyxDQUFGLENBQVo7QUFDQUksb0JBQWdCLENBQUMsRUFBRCxDQUFoQjtBQUNBSSxVQUFNLENBQUMsQ0FBQyxDQUFDLENBQUYsRUFBSSxDQUFDLENBQUwsRUFBT2xCLGtFQUFQLENBQUQsQ0FBTjtBQUNELEdBUEQ7O0FBU0EsUUFBTTBMLGNBQWMsR0FBRyxNQUFNO0FBQzNCLFFBQUlsRCxPQUFPLEdBQUc7QUFBQ0MsUUFBRSxFQUFFdkosV0FBTDtBQUFrQndGLFVBQUksRUFBRTFFLHdFQUFnQjJMO0FBQXhDLEtBQWQ7QUFDQSxRQUFJOUMsUUFBUSxHQUFHLENBQUMsR0FBRzFILEtBQUosRUFBV3FILE9BQVgsQ0FBZjtBQUNBLFFBQUlGLFlBQVksR0FBR3NELG1FQUFZLENBQUMvQyxRQUFELENBQVosR0FBeUI3SSw2RUFBekIsR0FBaURkLFdBQVcsS0FBS2MsOEVBQWhCLEdBQXlDQSwyRUFBekMsR0FBK0RBLDhFQUFuSSxDQUgyQixDQUdnSTs7QUFDM0osUUFBSStELFlBQVksR0FBR0osSUFBSSxDQUFDQyxHQUFMLEVBQW5CO0FBQ0E2SCxlQUFXLEdBTGdCLENBS1o7O0FBQ2YxRyxrQkFBYztBQUNkbkYsZ0JBQVksQ0FBQ21FLFlBQUQsQ0FBWjtBQUNBbkQsZ0JBQVksQ0FBQzBILFlBQUQsQ0FBWjtBQUNBbEgsWUFBUSxDQUFDeUgsUUFBRCxDQUFSO0FBQ0F2RixtQkFBZSxDQUNiO0FBQ0VuRSxZQUFNLEVBQUVBLE1BRFY7QUFDa0I7QUFDaEJ1RixVQUFJLEVBQUUsSUFGUjtBQUVjO0FBQ1poQixVQUFJLEVBQUV4RSxXQUFXLEtBQUtjLDhFQUFoQixHQUF5QyxLQUF6QyxHQUFpRCxLQUh6RDtBQUdnRTtBQUM5RDJFLGVBQVMsRUFBRVosWUFKYjtBQUkyQjtBQUN6QmEsWUFBTSxFQUFFMUYsV0FMVjtBQUt1QjtBQUNyQnlCLGVBQVMsRUFBRTJILFlBTmI7QUFNMkI7QUFDekJTLFVBQUksRUFBRVAsT0FQUixDQU9nQjs7QUFQaEIsS0FEYSxDQUFmO0FBV0QsR0FyQkQ7O0FBdUJBLFFBQU0xQyxlQUFlLEdBQUcsTUFBTTtBQUM1QnhDLG1CQUFlLENBQ2I7QUFDRW5FLFlBQU0sRUFBRUEsTUFEVjtBQUNrQjtBQUNoQnVGLFVBQUksRUFBRSxJQUZSO0FBRWM7QUFDWkUsWUFBTSxFQUFFMUYsV0FIVjtBQUlFd0UsVUFBSSxFQUFFLGlCQUpSO0FBSTJCO0FBQ3pCL0QsZUFBUyxFQUFFQSxTQUxiLENBS3VCOztBQUx2QixLQURhLENBQWY7QUFTRCxHQVZEOztBQVlBLFFBQU1tRCxlQUFlLEdBQUcsTUFBTTtBQUM1QjtBQUNBUSxtQkFBZSxDQUNiO0FBQ0VuRSxZQUFNLEVBQUVBLE1BRFY7QUFDa0I7QUFDaEJ1RixVQUFJLEVBQUUsSUFGUjtBQUVjO0FBQ1pFLFlBQU0sRUFBRTFGLFdBSFY7QUFJRXdFLFVBQUksRUFBRSxpQkFKUixDQUkwQjs7QUFKMUIsS0FEYSxDQUFmO0FBUUQsR0FWRDs7QUFZQSxRQUFNbUksYUFBYSxHQUFJQyxLQUFELElBQVc7QUFDL0JBLFNBQUssQ0FBQ0MsY0FBTjs7QUFDQSxRQUFJN00sV0FBVyxLQUFLeUIsU0FBcEIsRUFBK0I7QUFBQztBQUFROztBQUN4QyxRQUFJbUwsS0FBSyxDQUFDRSxHQUFOLEtBQWMsT0FBbEIsRUFBMkI7QUFDekJ4RSxvQkFBYztBQUNkO0FBQ0Q7O0FBQ0QsUUFBSXNFLEtBQUssQ0FBQ0UsR0FBTixLQUFjLFFBQWxCLEVBQTRCO0FBQzFCUCxpQkFBVztBQUNYO0FBQ0Q7O0FBQ0QsUUFBSVEsVUFBVSxHQUFHLGNBQWpCLENBWCtCLENBV0U7O0FBQ2pDLFFBQUlILEtBQUssQ0FBQ0UsR0FBTixDQUFVRSxLQUFWLENBQWdCRCxVQUFoQixDQUFKLEVBQWlDO0FBQy9CLFVBQUlqRixNQUFNLEdBQUc4RSxLQUFLLENBQUNFLEdBQU4sQ0FBVWhFLFdBQVYsRUFBYjtBQUNBLFVBQUltRSxJQUFJLEdBQUd4TCxTQUFTLEtBQUtYLDhFQUFkLEdBQXVDRyxNQUF2QyxHQUFnREUsTUFBM0Q7QUFDQSxVQUFJNkYsWUFBWSxHQUFHaUcsSUFBSSxDQUFDdEYsT0FBTCxDQUFhRyxNQUFiLENBQW5COztBQUNBLFVBQUlkLFlBQVksS0FBSyxDQUFDLENBQXRCLEVBQXlCO0FBQ3ZCQSxvQkFBWSxHQUFHaUcsSUFBSSxDQUFDdEYsT0FBTCxDQUFhLEdBQWIsQ0FBZixDQUR1QixDQUNXO0FBQ25DOztBQUNELFVBQUlYLFlBQVksR0FBRyxDQUFDLENBQXBCLEVBQXVCO0FBQUU7QUFDdkIsWUFBSW9FLEdBQUcsR0FBR3JKLEdBQUcsQ0FBQyxDQUFELENBQWI7QUFDQSxZQUFJc0osR0FBRyxHQUFHdEosR0FBRyxDQUFDLENBQUQsQ0FBYjtBQUNBLFlBQUltTCxHQUFHLEdBQUduTCxHQUFHLENBQUMsQ0FBRCxDQUFiOztBQUNBLFlBQUlxSixHQUFHLEdBQUUsQ0FBQyxDQUFOLElBQVdDLEdBQUcsR0FBRyxDQUFDLENBQWxCLElBQXVCNkIsR0FBRyxLQUFLcE0sa0VBQW5DLEVBQStDO0FBQUU7QUFDL0M7QUFDQSxjQUFJbUcsTUFBTSxHQUFHbEYsR0FBYjs7QUFDQSxjQUFJbUwsR0FBRyxLQUFLcE0sbUVBQVosRUFBeUI7QUFBRTtBQUN6QixnQkFBSXFNLElBQUksR0FBRyxDQUFDLENBQVo7O0FBQ0EsaUJBQUssSUFBSXRDLE9BQU8sR0FBR1EsR0FBRyxHQUFHLENBQXpCLEVBQTRCUixPQUFPLEdBQUdqSyxJQUFJLEdBQUcsQ0FBakIsSUFBc0J1TSxJQUFJLEtBQUssQ0FBQyxDQUE1RCxFQUErRHRDLE9BQU8sRUFBdEUsRUFBMEU7QUFDeEUsa0JBQUl4SixXQUFXLENBQUMrSixHQUFELENBQVgsQ0FBaUJQLE9BQWpCLEVBQTBCakQsTUFBMUIsS0FBcUM5RyxzRUFBekMsRUFBeUQ7QUFDdkRxTSxvQkFBSSxHQUFHdEMsT0FBUDtBQUNEO0FBQ0Y7O0FBQ0QsZ0JBQUlzQyxJQUFJLEtBQUssQ0FBQyxDQUFkLEVBQWlCO0FBQ2ZsRyxvQkFBTSxHQUFHLENBQUMsQ0FBQyxDQUFGLEVBQUksQ0FBQyxDQUFMLEVBQU9uRyxrRUFBUCxDQUFUO0FBQ0QsYUFGRCxNQUVPO0FBQ0xtRyxvQkFBTSxHQUFHLENBQUNtRSxHQUFELEVBQU0rQixJQUFOLEVBQVlyTSxtRUFBWixDQUFUO0FBQ0Q7O0FBQ0QrRixrQ0FBc0IsQ0FBQ3VFLEdBQUQsRUFBS0MsR0FBTCxFQUFTckUsWUFBVCxFQUFzQkMsTUFBdEIsQ0FBdEI7QUFDQXpGLHdCQUFZLENBQUMsQ0FBQyxDQUFGLENBQVosQ0FidUIsQ0FhTDs7QUFDbEI7QUFDRDs7QUFDRCxjQUFJMEwsR0FBRyxLQUFLcE0sa0VBQVosRUFBd0I7QUFBRTtBQUN4QixnQkFBSXNNLElBQUksR0FBRyxDQUFDLENBQVo7QUFDQSxnQkFBSWxDLE9BQU8sR0FBSTdLLFFBQVEsR0FBQyxDQUFWLEdBQWEsQ0FBM0I7O0FBQ0EsaUJBQUssSUFBSXFLLE9BQU8sR0FBR1UsR0FBRyxHQUFHLENBQXpCLEVBQTRCVixPQUFPLEdBQUdRLE9BQVYsSUFBcUJrQyxJQUFJLEtBQUssQ0FBQyxDQUEzRCxFQUE4RDFDLE9BQU8sRUFBckUsRUFBeUU7QUFDdkUsa0JBQUlySixXQUFXLENBQUNxSixPQUFELENBQVgsQ0FBcUJXLEdBQXJCLEVBQTBCekQsTUFBMUIsS0FBcUM5RyxzRUFBekMsRUFBeUQ7QUFDdkRzTSxvQkFBSSxHQUFHMUMsT0FBUDtBQUNEO0FBQ0Y7O0FBQ0QsZ0JBQUkwQyxJQUFJLEtBQUssQ0FBQyxDQUFkLEVBQWlCO0FBQ2ZuRyxvQkFBTSxHQUFHLENBQUMsQ0FBQyxDQUFGLEVBQUksQ0FBQyxDQUFMLEVBQU9uRyxrRUFBUCxDQUFUO0FBQ0QsYUFGRCxNQUVPO0FBQ0xtRyxvQkFBTSxHQUFHLENBQUNtRyxJQUFELEVBQU8vQixHQUFQLEVBQVl2SyxrRUFBWixDQUFUO0FBQ0Q7O0FBQ0QrRixrQ0FBc0IsQ0FBQ3VFLEdBQUQsRUFBS0MsR0FBTCxFQUFTckUsWUFBVCxFQUFzQkMsTUFBdEIsQ0FBdEI7QUFDQXpGLHdCQUFZLENBQUMsQ0FBQyxDQUFGLENBQVosQ0Fkc0IsQ0FjSjs7QUFDbEI7QUFDRDtBQUNGO0FBQ0Y7O0FBQ0Q7QUFDRDs7QUFDRCxRQUFJb0wsS0FBSyxDQUFDRSxHQUFOLEtBQWMsV0FBZCxJQUE2Qm5MLGFBQWEsQ0FBQ3NELE1BQWQsR0FBdUIsQ0FBeEQsRUFBMkQ7QUFDekQ7QUFDQTtBQUNBLFVBQUl1QyxLQUFLLEdBQUc3RixhQUFhLENBQUNBLGFBQWEsQ0FBQ3NELE1BQWQsR0FBdUIsQ0FBeEIsQ0FBekIsQ0FIeUQsQ0FHSjs7QUFDckQsVUFBSW1HLEdBQUcsR0FBR1QsUUFBUSxDQUFDbkQsS0FBSyxDQUFDb0QsS0FBTixDQUFZLEdBQVosRUFBaUIsQ0FBakIsQ0FBRCxDQUFsQjtBQUNBLFVBQUlTLEdBQUcsR0FBR1YsUUFBUSxDQUFDbkQsS0FBSyxDQUFDb0QsS0FBTixDQUFZLEdBQVosRUFBaUIsQ0FBakIsQ0FBRCxDQUFsQjtBQUNBLFVBQUlyRCxnQkFBZ0IsR0FBRyxDQUFDLEdBQUc1RixhQUFKLENBQXZCO0FBQ0EsVUFBSTBGLFNBQVMsR0FBRyxDQUFDLEdBQUdwRyxNQUFKLENBQWhCO0FBQ0EsVUFBSXFHLFNBQVMsR0FBRyxDQUFDLEdBQUduRyxNQUFKLENBQWhCO0FBQ0EsVUFBSStGLGNBQWMsR0FBR2xCLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNNLFNBQUwsQ0FBZWpGLFdBQWYsQ0FBWCxDQUFyQixDQVR5RCxDQVNLOztBQUM5RCxVQUFJOEYsaUJBQWlCLEdBQUdELGNBQWMsQ0FBQ2tFLEdBQUQsQ0FBdEM7QUFDQSxVQUFJaEUsa0JBQWtCLEdBQUdELGlCQUFpQixDQUFDa0UsR0FBRCxDQUExQztBQUNBLFVBQUlwRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUYsRUFBSSxDQUFDLENBQUwsRUFBT25HLGtFQUFQLENBQWI7QUFDQSxVQUFJa0csWUFBWSxHQUFHekYsU0FBbkI7QUFDQWdHLHNCQUFnQixDQUFDakMsTUFBakIsQ0FBd0IzRCxhQUFhLENBQUNzRCxNQUFkLEdBQXFCLENBQTdDLEVBQStDLENBQS9DO0FBQ0EsVUFBSW9JLFlBQVksR0FBR2hNLFdBQVcsQ0FBQytKLEdBQUQsQ0FBWCxDQUFpQkMsR0FBakIsRUFBc0J2RCxNQUF6Qzs7QUFDQSxVQUFJckcsU0FBUyxLQUFLWCw4RUFBbEIsRUFBMEM7QUFDeEN1RyxpQkFBUyxDQUFDOUMsSUFBVixDQUFlOEksWUFBZjtBQUNBckcsb0JBQVksR0FBR0ssU0FBUyxDQUFDcEMsTUFBVixHQUFpQixDQUFoQztBQUNELE9BSEQsTUFHTztBQUNMcUMsaUJBQVMsQ0FBQy9DLElBQVYsQ0FBZThJLFlBQWY7QUFDQXJHLG9CQUFZLEdBQUdNLFNBQVMsQ0FBQ3JDLE1BQVYsR0FBaUIsQ0FBaEM7QUFDRDs7QUFDRG1DLHdCQUFrQixDQUFDUSxNQUFuQixHQUE0QjlHLHNFQUE1QjtBQUNBc0csd0JBQWtCLENBQUNVLE1BQW5CLEdBQTRCaEgscUVBQTVCO0FBQ0FxRyx1QkFBaUIsQ0FBQ2tFLEdBQUQsQ0FBakIsR0FBeUJqRSxrQkFBekI7QUFDQUYsb0JBQWMsQ0FBQ2tFLEdBQUQsQ0FBZCxHQUFzQixDQUFDLEdBQUdqRSxpQkFBSixDQUF0QjtBQUNBLFVBQUkrRixHQUFHLEdBQUduTCxHQUFHLENBQUMsQ0FBRCxDQUFiOztBQUNBLFVBQUltTCxHQUFHLEtBQUtwTSxrRUFBWixFQUF3QjtBQUN0QjtBQUNBbUcsY0FBTSxHQUFHLENBQUNtRSxHQUFELEVBQUtDLEdBQUwsRUFBUzZCLEdBQVQsQ0FBVDs7QUFDQSxZQUFJdkwsYUFBYSxDQUFDc0QsTUFBZCxLQUF5QixDQUE3QixFQUFnQztBQUM5QitCLHNCQUFZLEdBQUcsQ0FBQyxDQUFoQixDQUQ4QixDQUNYO0FBQ3BCO0FBQ0Y7O0FBQ0RwRixzQkFBZ0IsQ0FBQzJGLGdCQUFELENBQWhCO0FBQ0FuRyxlQUFTLENBQUNrRyxTQUFELENBQVQ7QUFDQXBHLGVBQVMsQ0FBQ21HLFNBQUQsQ0FBVDtBQUNBL0Ysb0JBQWMsQ0FBQzRGLGNBQUQsQ0FBZDtBQUNBbEYsWUFBTSxDQUFDaUYsTUFBRCxDQUFOO0FBQ0F6RixrQkFBWSxDQUFDd0YsWUFBRCxDQUFaO0FBQ0Q7QUFDRixHQXpHRDs7QUEwR0EsUUFBTXNHLGVBQWUsR0FBSUMsR0FBRCxJQUFTLENBQUUsQ0FBbkM7O0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLDJDQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQUEsK0JBQ0U7QUFBSSxtQkFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFDLDJEQUFmO0FBQUEsZ0NBQ1l0TixNQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixlQU9FO0FBQUssaUJBQVMsRUFBQywrREFBZjtBQUFBLGtDQUVJRCxXQUFXLEtBQUtjLDhFQUFoQixHQUF5Q1osUUFBekMsR0FDRUYsV0FBVyxLQUFLYywyRUFBaEIsR0FBc0MyQixPQUF0QyxHQUNBLFFBSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGLGVBY0U7QUFBSyxpQkFBUyxFQUFDLDREQUFmO0FBQUEsK0JBQ0U7QUFBUSxtQkFBUyxFQUFDLFdBQWxCO0FBQThCLGlCQUFPLEVBQUUsTUFBTTtBQUFDM0Msc0JBQVUsQ0FBQyxNQUFELENBQVY7QUFBb0IsV0FBbEU7QUFBQSxpQ0FDRTtBQUFHLHFCQUFTLEVBQUMsZ0JBQWI7QUFBOEIsMkJBQVksU0FBMUM7QUFBb0QsaUJBQUssRUFBQyxNQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWRGLGVBbUJFO0FBQUssaUJBQVMsRUFBQyxnRUFBZjtBQUFBLCtCQUVJRSxXQUFXLEtBQUtjLDhFQUFoQixHQUF5QzJCLE9BQXpDLEdBQ0V6QyxXQUFXLEtBQUtjLDJFQUFoQixHQUFzQ1osUUFBdEMsR0FDQSxRQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBNEJFO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMseUJBQWY7QUFBQSxnQ0FDSSw4REFBQywyREFBRDtBQUNFLGVBQUssRUFBRWEsS0FEVDtBQUVFLG9CQUFVLEVBQ1JmLFdBQVcsS0FBS2MsOEVBQWhCLEdBQXlDSyxNQUF6QyxHQUNFbkIsV0FBVyxLQUFLYywyRUFBaEIsR0FBc0NHLE1BQXRDLEdBQ0EsRUFMTixDQUtVOztBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFRSSw4REFBQyxxREFBRDtBQUFXLGVBQUssRUFBRWdCLEtBQWxCO0FBQXlCLHFCQUFXLEVBQUd1TCxFQUFELElBQVFGLGVBQWUsQ0FBQ0UsRUFBRDtBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVdFO0FBQUssaUJBQVMsRUFBQywwQkFBZjtBQUFBLGtCQUNHeE4sV0FBVyxLQUFLYyw4RUFBaEIsZ0JBQ0MsOERBQUMsc0RBQUQ7QUFDRSxtQkFBUyxFQUFFRyxNQURiO0FBRUUsbUJBQVMsRUFBRVEsU0FGYjtBQUdFLG1CQUFTLEVBQUVGLFNBSGI7QUFJRSxpQkFBTyxFQUFHa00sRUFBRCxJQUFRekYsbUJBQW1CLENBQUN5RixFQUFELENBSnRDO0FBS0UsMkJBQWlCLEVBQUUsTUFBTW5GLGNBQWMsRUFMekM7QUFNRSwyQkFBaUIsRUFBRSxNQUFNaUUsV0FBVyxFQU50QztBQU9FLDZCQUFtQixFQUFFLE1BQU16QyxnQkFBZ0IsRUFQN0M7QUFRRSx5QkFBZSxFQUFFLE1BQU0wQyxjQUFjLEVBUnZDO0FBU0UsNkJBQW1CLEVBQUUsTUFBTUYsYUFBYSxFQVQxQztBQVVFLDBCQUFnQixFQUFFLE1BQU1ELGlCQUFpQixFQVYzQztBQVdFLHFCQUFXLEVBQUVyTSxXQVhmO0FBWUUsZUFBSyxFQUFFaUMsS0FaVDtBQWFFLHFCQUFXLEVBQUVNO0FBYmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxHQWdCQXZDLFdBQVcsS0FBS2MsMkVBQWhCLGdCQUNDLDhEQUFDLHNEQUFEO0FBQ0UsbUJBQVMsRUFBRUssTUFEYjtBQUVFLG1CQUFTLEVBQUVNLFNBRmI7QUFHRSxtQkFBUyxFQUFFRixTQUhiO0FBSUUsaUJBQU8sRUFBR2tNLEVBQUQsSUFBUXpGLG1CQUFtQixDQUFDeUYsRUFBRCxDQUp0QztBQUtFLDJCQUFpQixFQUFFLE1BQU1uRixjQUFjLEVBTHpDO0FBTUUsMkJBQWlCLEVBQUUsTUFBTWlFLFdBQVcsRUFOdEM7QUFPRSw2QkFBbUIsRUFBRSxNQUFNekMsZ0JBQWdCLEVBUDdDO0FBUUUseUJBQWUsRUFBRSxNQUFNMEMsY0FBYyxFQVJ2QztBQVNFLDZCQUFtQixFQUFFLE1BQU1GLGFBQWEsRUFUMUM7QUFVRSwwQkFBZ0IsRUFBRSxNQUFNRCxpQkFBaUIsRUFWM0M7QUFXRSxxQkFBVyxFQUFFck0sV0FYZjtBQVlFLGVBQUssRUFBRWlDLEtBWlQ7QUFhRSxxQkFBVyxFQUFFTTtBQWJmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZ0JBaUJDO0FBQUssbUJBQVMsRUFBQyxzQkFBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxlQUFmO0FBQUEsb0NBQStCO0FBQUcsdUJBQVMsRUFBQyxnQkFBYjtBQUFBLHdCQUErQnpCLDhFQUFzQjRNO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQS9CLFVBQWdHNU0sK0VBQWhHLHVCQUE4SDtBQUFHLHVCQUFTLEVBQUMsZ0JBQWI7QUFBQSx3QkFBK0JBLDhFQUFzQjRNO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQTlIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUsscUJBQVMsRUFBQyxZQUFmO0FBQUEsc0JBQ0d6TSxNQUFNLElBQUlBLE1BQU0sQ0FBQzBNLEdBQVAsQ0FBVyxDQUFDQyxDQUFELEVBQUlILEVBQUosa0JBQ2xCLDhEQUFDLGdCQUFEO0FBRUkseUJBQVcsRUFBQyxHQUZoQjtBQUdJLHVCQUFTLEVBQUVHLENBSGY7QUFJSSx1QkFBUyxFQUFFSDtBQUpmLGVBQ1UsNEJBQTJCQSxFQUFHLEVBRHhDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRE87QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGLGVBWUU7QUFBSyxxQkFBUyxFQUFDLGVBQWY7QUFBQSxvQ0FBK0I7QUFBRyx1QkFBUyxFQUFDLGdCQUFiO0FBQUEsd0JBQStCM00sMkVBQW1CK007QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBL0IsVUFBNkYvTSw0RUFBN0YsdUJBQXdIO0FBQUcsdUJBQVMsRUFBQyxnQkFBYjtBQUFBLHdCQUErQkEsMkVBQW1CK007QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBeEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVpGLGVBYUU7QUFBSyxxQkFBUyxFQUFDLFlBQWY7QUFBQSxzQkFDRzFNLE1BQU0sSUFBSUEsTUFBTSxDQUFDd00sR0FBUCxDQUFXLENBQUNDLENBQUQsRUFBSUgsRUFBSixrQkFDbEIsOERBQUMsZ0JBQUQ7QUFFSSx5QkFBVyxFQUFDLEdBRmhCO0FBR0ksdUJBQVMsRUFBRUcsQ0FIZjtBQUlJLHVCQUFTLEVBQUVIO0FBSmYsZUFDVSx5QkFBd0JBLEVBQUcsRUFEckM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFETztBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbENKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEYsZUF1RUU7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxrQkFDR3pOLFdBQVcsS0FBS3lCLFNBQWhCLGdCQUNDO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQXFCLDBCQUFnQixFQUFFa0wsYUFBdkM7QUFBQSxpQ0FDRSw4REFBQyw4Q0FBRDtBQUNFLHVCQUFXLEVBQUV0TCxXQURmO0FBRUUsZUFBRyxFQUFFVSxHQUZQO0FBR0UsbUJBQU8sRUFBRSxDQUFDK0UsRUFBRCxFQUFLQyxFQUFMLEtBQVlGLHNCQUFzQixDQUFDQyxFQUFELEVBQUtDLEVBQUwsRUFBUyxDQUFDLENBQVYsRUFBWSxJQUFaO0FBSDdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGdCQVNDO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsaUNBQ0UsOERBQUMsOENBQUQ7QUFDRSx1QkFBVyxFQUFFMUYsV0FEZjtBQUVFLGVBQUcsRUFBRVUsR0FGUDtBQUdFLG1CQUFPLEVBQUUsTUFBTSxDQUFFO0FBSG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVko7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF2RUYsZUEwRkU7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxnQ0FDRSw4REFBQyx1REFBRDtBQUFhLGlCQUFPLEVBQUVGO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSw4REFBQyxvREFBRDtBQUFNLGdCQUFNLEVBQUU1QixNQUFkO0FBQXNCLGdCQUFNLEVBQUVHLE1BQTlCO0FBQXNDLGtCQUFRLEVBQUVGLFFBQWhEO0FBQTBELGNBQUksRUFBRXlDLFFBQWhFO0FBQTBFLGlCQUFPLEVBQUVDLFdBQW5GO0FBQWdHLHFCQUFXLEVBQUU1QztBQUE3RztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkExRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTVCRixlQTJIRTtBQUFLLGVBQVMsRUFBQywyQ0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxvQ0FBZjtBQUFBLGtCQUNHeUIsU0FBUyxLQUFLWCw2RUFBZCxnQkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxnQkFHQztBQUFBLG9CQUFJQSxvRUFBQSxDQUFhdUIsU0FBYjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzSEYsRUFvSUduQyxRQUFRLElBQUlBLFFBQVEsQ0FBQytFLE1BQVQsR0FBa0IsQ0FBOUIsSUFBbUMvRSxRQUFRLENBQUM0SSxXQUFULEdBQXVCZ0YsU0FBdkIsQ0FBaUMsQ0FBakMsRUFBbUMsQ0FBbkMsTUFBMEMsTUFBN0UsaUJBQ0M7QUFBSyxlQUFTLEVBQUMsd0JBQWY7QUFBQSw4QkFDRTtBQUFBLDZDQUEwQnhOLEtBQUssQ0FBQzJFLE1BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVHM0UsS0FBSyxDQUFDcU4sR0FBTixDQUFVLENBQUNJLElBQUQsRUFBTTlFLENBQU4sa0JBQ1Y7QUFBQSwyQkFBMkI4RSxJQUEzQjtBQUFBLFNBQVMsT0FBTTlFLENBQUUsRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQSxDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFySUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUErSUQsQ0ExOEJIOztHQUFNcEosSTtVQWlDa0JpRCwwRDs7O0tBakNsQmpELEk7O0FBNDhCTixNQUFNbU8sZ0JBQWdCLEdBQUlDLEtBQUQsSUFBVztBQUNsQyxRQUFNQyxrQkFBa0IsR0FBRyxhQUEzQjtBQUNBLFFBQU1DLEtBQUssR0FBR0YsS0FBSyxDQUFDRyxTQUFOLEtBQW9CLEdBQXBCLEdBQTBCLElBQTFCLEdBQWlDLEVBQS9DO0FBQ0EsUUFBTUMsU0FBUyxHQUFHLGtCQUFrQkgsa0JBQWxCLEdBQXVDQyxLQUF2QyxHQUErQ0YsS0FBSyxDQUFDak8sV0FBdkU7QUFDQSxzQkFDSTtBQUVJLGFBQVMsRUFBRXFPLFNBRmY7QUFBQSwyQkFJSTtBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBLGdCQUFtQ0osS0FBSyxDQUFDRztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkosS0FDU0gsS0FBSyxDQUFDaEcsU0FEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFRRCxDQVpEOztNQUFNK0YsZ0I7QUFlTiwrREFBZW5PLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjU3OGQ1YmRlMTY4NmIzY2UzZDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuLy9pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBQbGF5ZXJTZWN0aW9uIGZyb20gJy4uL3BiL3BsYXllclNlY3Rpb24nO1xyXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi4vcGIvYm9hcmQnO1xyXG5pbXBvcnQgU2hvd1Vuc2VlblRpbGVzIGZyb20gJy4uL3BiL3Vuc2VlblRpbGVzU2VjdGlvbic7XHJcbmltcG9ydCBTaG93TW92ZXMgZnJvbSAnLi4vcGIvbW92ZXNTZWN0aW9uJztcclxuaW1wb3J0IFNob3dSZXNjdWVzIGZyb20gJy4uL3BiL3Jlc2N1ZXNTZWN0aW9uJztcclxuaW1wb3J0IENoYXQgZnJvbSAnLi4vcGIvY2hhdFNlY3Rpb24nO1xyXG5pbXBvcnQgKiBhcyBjIGZyb20gJy4uLy4uL2xpYi9wYi9wcmlzb25CcmVha0NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGluaXRpYWxTcXVhcmVBcnJheSB9IGZyb20gJy4uLy4uL2xpYi9wYi9pbml0aWFsU3F1YXJlQXJyYXknO1xyXG5pbXBvcnQgeyBhbnlVbnVzZWRFc2NhcGVIYXRjaGVzIH0gZnJvbSBcIi4uLy4uL2xpYi9wYi9hbnlVbnVzZWRFc2NhcGVIYXRjaGVzXCI7XHJcbmltcG9ydCB7IGJ1aWxkR2FtZWRhdGFGcm9tQXBpZGF0YSB9IGZyb20gXCIuLi8uLi9saWIvcGIvYnVpbGRHYW1lZGF0YUZyb21BcGlkYXRhXCI7XHJcbmltcG9ydCB7IGlzRG91YmxlUGFzcyB9IGZyb20gXCIuLi8uLi9saWIvcGIvaXNEb3VibGVQYXNzXCI7XHJcbmltcG9ydCB7IHNjcm9sbFRvQm90dG9tIH0gZnJvbSBcIi4uLy4uL2xpYi9zY3JvbGxUb0JvdHRvbVwiO1xyXG5pbXBvcnQgeyB1c2VQcmV2aW91cyB9IGZyb20gXCIuLi8uLi9saWIvdXNlUHJldmlvdXNcIjtcclxuXHJcbmNvbnN0IEdhbWUgPSAoe3NldFdoZXJldG9cclxuICAgICwgaXNyZWpvaW5cclxuICAgICwgcGFydGljaXBhbnQgLy8gUHJpc29uZXJzLCBHdWFyZHMsIG9yIE9ic2VydmVyIChub3QgaW1wbGVtZW50ZWQpXHJcbiAgICAsIGdhbWVpZFxyXG4gICAgLCBuaWNrbmFtZT0nJyAvLyBHaXZlIGl0IGEgZGVmYXVsdCBmb3IgQnVpbGRcclxuICAgICwgd3NtZXNzYWdlXHJcbiAgICAsIGNsaWVudFxyXG4gICAgLCByYWNrc2l6ZT00IC8vIE9wdGlvbiBmb3IgcmFjayBzaXplIChnaXZlIGl0IGEgZGVmYXVsdCBmb3IgQnVpbGQpXHJcbiAgICB9KSA9PiB7XHJcbiAgICBjb25zdCBbc25hdHMsIHNldFNuYXRzXSA9IHVzZVN0YXRlKFsnSGVsbG8uIFRoaXMgc3BhY2UgaXMgZm9yIGRlYnVnZ2luZyBtZXNzYWdlcy4nXSk7XHJcbiAgICBjb25zdCBbc3luY3N0YW1wLCBzZXRTeW5jc3RhbXBdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgbWlkZGxlID0gcmFja3NpemU7IC8vIE1pZGRsZSBlbGVtZW50IGluIHJvdyBvciBjb2x1bW4gYXJyYXlcclxuICAgIGNvbnN0IGVkZ2UgPSByYWNrc2l6ZSAqIDI7IC8vIExhc3QgZWxlbWVudCBpbiByb3cgb3IgY29sdW1uIGFycmF5XHJcbiAgICBjb25zdCBpbml0aWFsdGlsZXMgPSByYWNrc2l6ZSA9PT0gNiA/IGMuVElMRUJBRzYgOiByYWNrc2l6ZSA9PT0gNyA/IGMuVElMRUJBRzcgOiByYWNrc2l6ZSA9PT0gNSA/IGMuVElMRUJBRzUgOiBjLlRJTEVCQUc0O1xyXG4gICAgY29uc3QgW3RpbGVzLCBzZXRUaWxlc10gPSB1c2VTdGF0ZShbLi4uaW5pdGlhbHRpbGVzXSk7XHJcbiAgICBjb25zdCBbcHRpbGVzLCBzZXRQdGlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2d0aWxlcywgc2V0R3RpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzcXVhcmVBcnJheSwgc2V0U3F1YXJlQXJyYXldID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGlvbiwgc2V0U2VsZWN0aW9uXSA9IHVzZVN0YXRlKC0xKTsgLy8gcmVsYXRpdmUgdG8gcmFjayBvZiBwbGF5ZXIgbWFraW5nIGEgcGxheVxyXG4gICAgY29uc3QgW3dob3NldHVybiwgc2V0V2hvc2V0dXJuXSA9IHVzZVN0YXRlKGMuV0hPU0VfVFVSTl9QUklTT05FUlMpOyAvLyBnYW1lIHN0YXJ0cyB3aXRoIHByaXNvbmVycyBwbGF5XHJcbiAgICBjb25zdCBbY3VycmVudGNvb3Jkcywgc2V0Q3VycmVudGNvb3Jkc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcmVzY3Vlcywgc2V0UmVzY3Vlc10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtyY2QsIHNldFJjZF0gPSB1c2VTdGF0ZShbLTEsLTEsYy5ESVJfTk9ORV0pO1xyXG4gICAgY29uc3QgW21vdmVzLCBzZXRNb3Zlc10gPSB1c2VTdGF0ZShbXSk7IC8vIG1vdmUgaGlzdG9yeSwgZWFjaCBlbGVtZW50IGlzIHRoZSBhcnJheSBpcyBhIGpzb24gb2JqZWN0IG9mIGluZm8gYWJvdXQgdGhlIG1vdmVcclxuICAgIGNvbnN0IFtzbmFwc2hvdCwgc2V0U25hcHNob3RdID0gdXNlU3RhdGUoe1xyXG4gICAgICBzcXVhcmVBcnJheTogW10sXHJcbiAgICAgIHB0aWxlczogW10sXHJcbiAgICAgIGd0aWxlczogW10sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtqb2tlaW5kZXgsIHNldEpva2VpbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFthbGxvd1Jld2luZCwgc2V0QWxsb3dSZXdpbmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW29wcG5hbWUsIHNldE9wcG5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2NoYXRtc2dzLCBzZXRDaGF0bXNnc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBwcmV2UmVzY3VlcyA9IHVzZVByZXZpb3VzKHJlc2N1ZXMpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgLy8gVGhpcyBjb2RlIGV4ZWN1dGVzIHRoZSBmaXJzdCB0aW1lIEdhbWUgaXMgdXNlZCBvbmx5XHJcbiAgICAgIGluaXRpYWxpemVSb3V0aW5lKCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBsZXQgbXNnID0gd3NtZXNzYWdlO1xyXG4gICAgICBpZiAobXNnICE9PSAnJykgcHJvY2Vzc0dhbWVNZXNzYWdlKG1zZyk7ICAgICAgXHJcbiAgICB9LFt3c21lc3NhZ2VdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2Nyb2xsVG9Cb3R0b20oXCJTY3JvbGxhYmxlTW92ZXNcIik7XHJcbiAgICB9LFttb3Zlc10pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzY3JvbGxUb0JvdHRvbShcIlNjcm9sbGFibGVDaGF0XCIpO1xyXG4gICAgfSxbY2hhdG1zZ3NdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYgKHJlc2N1ZXMgPiBwcmV2UmVzY3Vlcykge1xyXG4gICAgICAgICAgdmFyIG15YXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gICAgICAgICAgLy8gT2JzZXJ2ZXJzIGhlYXIgeWlwcGVlXHJcbiAgICAgICAgICBteWF1ZGlvLnNyYyA9IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTID8gXCJodHRwczovL3RpbGVydW5uZXIuZ2l0aHViLmlvL09uZUdvdEF3YXkubTRhXCIgOiBcImh0dHBzOi8vdGlsZXJ1bm5lci5naXRodWIuaW8veWlwcGVlLm00YVwiO1xyXG4gICAgICAgICAgbXlhdWRpby5wbGF5KCk7XHJcbiAgICAgIH1cclxuICAgIH0sIFtyZXNjdWVzXSk7IC8vIFBsYXkgYSBzb3VuZCB3aGVuIGEgcmVzY3VlIGlzIG1hZGVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGxldCBuZXdqaSA9IGpva2VpbmRleCArIDE7XHJcbiAgICAgIGlmIChuZXdqaSA+PSBjLkpPS0VfQVJSQVkubGVuZ3RoKSB7XHJcbiAgICAgICAgbmV3amkgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHNldEpva2VpbmRleChuZXdqaSk7XHJcbiAgICB9LCBbd2hvc2V0dXJuXSk7IC8vIHdhbnQgdXAgdG8gZGF0ZSB2YWx1ZSBvZiB3aG9zZXR1cm4gdG8gZGVjaWRlIHdoZXRoZXIgdG8gYXNrIGZvciBhbiB1cGRhdGVcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBpZiAocGFydGljaXBhbnQgIT09IHdob3NldHVybiAmJiB3aG9zZXR1cm4gIT09IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUikge1xyXG4gICAgICAgICAgcmVxdWVzdFN5bmNEYXRhKCk7IC8vIFNlbmQgYSByZXF1ZXN0IGZvciBzeW5jIGRhdGEgd2hlbiB3YWl0aW5nIGZvciB0aGVpciBtb3ZlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNlbmQgYSByZXF1ZXN0IGZvciB0aGUgdGltZXN0YW1wIG9mIHRoZSBsYXN0IGV2ZW50IChzeW5jc3RhbXApXHJcbiAgICAgICAgLy8gU2VydmVyIHdpbGwgc2VuZCBmdW5jPXByb3ZpZGVzeW5jc3RhbXAgd2l0aCBhIHN5bmNzdGFtcCB2YWx1ZVxyXG4gICAgICAgIC8vIFByb2Nlc3NHYW1lTWVzc2FnZSB3aWxsIGNoZWNrIHN5bmNzdGFtcCBmcm9tIHRoZSBzZXJ2ZXIgdG8gc3luY3N0YW1wIGhlcmVcclxuICAgICAgICAvLyBJZiBkaWZmZXJlbnQgaXQgd2lsbCBzZW5kIGZ1bmM9cmVxdWVzdGdhbWVkYXRhLCBzZXJ2ZXIgd2lsbCBzZW5kIHVzIHByb3ZpZGVnYW1lZGF0YSwgYW5kIHdlIHN5bmNcclxuICAgICAgICB9LCBjLlBJTkdfSU5URVJWQUwpOyAvLyB0aGlzIG1hbnkgbWlsbGlzZWNvbmRzIGJldHdlZW4gYWJvdmUgY29kZSBibG9jayBleGVjdXRpb25zXHJcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgaW5pdGlhbGl6ZVJvdXRpbmUgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBmaXJzdFNxdWFyZUFycmF5ID0gaW5pdGlhbFNxdWFyZUFycmF5KHJhY2tzaXplKTtcclxuICAgICAgc2V0U3F1YXJlQXJyYXkoZmlyc3RTcXVhcmVBcnJheSk7XHJcbiAgICAgIGlmIChpc3Jlam9pbikge1xyXG4gICAgICAgIHJlam9pbkdhbWUoKVxyXG4gICAgICB9IGVsc2UgaWYgKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTKSB7XHJcbiAgICAgICAgc3RhcnRHYW1lKGZpcnN0U3F1YXJlQXJyYXkpOyAvLyBQcmlzb25lcnMgc3RhcnRpbmcgdGhlIGdhbWVcclxuICAgICAgfSBlbHNlIGlmIChwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUykge1xyXG4gICAgICAgIGpvaW5HYW1lKCk7IC8vIEd1YXJkcyBqb2luaW5nIHRoZSBnYW1lXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhcnRPYnNlcnZpbmdHYW1lKCk7IC8vIE9ic2VydmVyIHZpZXdpbmcgdGhlIGdhbWVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlbmROZXh0TWVzc2FnZSA9IChqTWVzc2FnZSkgPT4ge1xyXG4gICAgICBsZXQgbmV3U25hdHMgPSBbLi4uc25hdHNdO1xyXG4gICAgICBuZXdTbmF0cy5wdXNoKGBTZW5kaW5nIG1lc3NhZ2U6IGZ1bmM9JHtqTWVzc2FnZS5mdW5jfSBhdCAke0RhdGUubm93KCkudG9TdHJpbmcoKX1gKTtcclxuICAgICAgY2xpZW50LnNlbmQoak1lc3NhZ2UpO1xyXG4gICAgICBzZXRTbmF0cyhuZXdTbmF0cyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RhcnRHYW1lID0gKGZpcnN0U3F1YXJlQXJyYXkpID0+IHtcclxuICAgICAgbGV0IG5ld1N5bmNzdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICAgIGxldCB0ZW1wUFRpbGVzID0gW107XHJcbiAgICAgIGxldCB0ZW1wR1RpbGVzID0gW107XHJcbiAgICAgIGxldCB0ZW1wVGlsZXMgPSBbLi4uaW5pdGlhbHRpbGVzXTtcclxuICAgICAgd2hpbGUgKHRlbXBQVGlsZXMubGVuZ3RoIDwgcmFja3NpemUpIHtcclxuICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRlbXBUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIHRlbXBQVGlsZXMucHVzaCh0ZW1wVGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIHRlbXBUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgICAgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRlbXBUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIHRlbXBHVGlsZXMucHVzaCh0ZW1wVGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIHRlbXBUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgdGVtcFBUaWxlcy5zb3J0KCk7XHJcbiAgICAgIHRlbXBHVGlsZXMuc29ydCgpO1xyXG4gICAgICBzZXRTeW5jc3RhbXAobmV3U3luY3N0YW1wKTtcclxuICAgICAgc2V0R3RpbGVzKHRlbXBHVGlsZXMpO1xyXG4gICAgICBzZXRQdGlsZXModGVtcFBUaWxlcyk7XHJcbiAgICAgIHNldFRpbGVzKHRlbXBUaWxlcyk7XHJcbiAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICBzcXVhcmVBcnJheTogZmlyc3RTcXVhcmVBcnJheSxcclxuICAgICAgICBwdGlsZXM6IFsuLi50ZW1wUFRpbGVzXSxcclxuICAgICAgICBndGlsZXM6IFsuLi50ZW1wR1RpbGVzXSAgICBcclxuICAgICAgfSk7XHJcbiAgICAgIHNlbmROZXh0TWVzc2FnZSh7XHJcbiAgICAgICAgdHlwZTogXCJwYlwiLFxyXG4gICAgICAgIGZ1bmM6IFwic3RhcnRnYW1lXCIsXHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIEdhbWUgaWRcclxuICAgICAgICB0aW1lc3RhbXA6IG5ld1N5bmNzdGFtcCwgLy8gRm9yIHRlbGxpbmcgc2VydmVyIG15IGxhc3QgZGF0YSB0aW1lc3RhbXBcclxuICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIFJhY2sgc2l6ZSBvcHRpb25cclxuICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LCAvLyBUaGlzIHdpbGwgYmUgcHJpc29uZXJzIHNpbmNlIHByaXNvbmVycyBzdGFydCB0aGUgZ2FtZVxyXG4gICAgICAgIHBuYW1lOiBuaWNrbmFtZSwgLy8gVGhpcyB3aWxsIGJlIHRoZSBwcmlzb25lcnMgbmlja25hbWUgc2luY2UgcHJpc29uZXJzIGFyZSBzZW5kaW5nIHRoaXNcclxuICAgICAgICB0aWxlczogdGVtcFRpbGVzLCAvLyBUaWxlIGJhZyBhZnRlciBmaXJzdCByYWNrcyBzZWxlY3RlZFxyXG4gICAgICAgIHB0aWxlczogdGVtcFBUaWxlcywgLy8gUHJpc29uZXJzIGZpcnN0IHJhY2tcclxuICAgICAgICBndGlsZXM6IHRlbXBHVGlsZXMgLy8gR3VhcmRzIGZpcnN0IHJhY2tcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBqb2luR2FtZSA9ICgpID0+IHtcclxuICAgICAgc2VuZE5leHRNZXNzYWdlKHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIGduYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiam9pbmdhbWVcIiwgLy8gam9pbiB0aGUgZ2FtZVxyXG4gICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQgLy8gdGhpcyB3aWxsIGViIGd1YXJkc1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlam9pbkdhbWUgPSAoKSA9PiB7XHJcbiAgICAgIHNlbmROZXh0TWVzc2FnZSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJyZWpvaW5nYW1lXCIsIC8vIGpvaW4gdGhlIGdhbWVcclxuICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50IC8vIGNvdWxkIGJlIGVpdGhlciBwbGF5ZXJcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzdGFydE9ic2VydmluZ0dhbWUgPSAoKSA9PiB7XHJcbiAgICAgIHNlbmROZXh0TWVzc2FnZSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLFxyXG4gICAgICAgIGZ1bmM6IFwic3RhcnRPYnNlcnZpbmdcIlxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwdXRBdE1vdmVTdGFydCgpIHtcclxuICAgICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgICAgc2V0QWxsb3dSZXdpbmQoZmFsc2UpO1xyXG4gICAgICBzZXRSY2QoLTEsLTEsYy5ESVJfTk9ORSk7XHJcbiAgICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0dhbWVNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgbGV0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmdhbWVpZCA9PT0gZ2FtZWlkICYmIG1lc3NhZ2VEYXRhLnR5cGUgPT09IFwicGJcIikgeyAvLyBUaGlzIGluc3RhbmNlIG9mIGEgcHJpc29uIGJyZWFrIGdhbWVcclxuICAgICAgICBsZXQgbmV3U25hdHMgPSBbLi4uc25hdHNdO1xyXG4gICAgICAgIG5ld1NuYXRzLnB1c2goYEdldHRpbmcgbWVzc2FnZTogZnVuYz0ke21lc3NhZ2VEYXRhLmZ1bmN9YCk7XHJcbiAgICAgICAgc2V0U25hdHMobmV3U25hdHMpO1xyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInByb3ZpZGVnYW1lZGF0YVwiKSB7XHJcbiAgICAgICAgICBsZXQgZ2QgPSBidWlsZEdhbWVkYXRhRnJvbUFwaWRhdGEobWVzc2FnZURhdGEuYXBpZGF0YSk7XHJcbiAgICAgICAgICAvLyBTZXJ2ZXIgcHJvdmlkaW5nIGdhbWUgZGF0YVxyXG4gICAgICAgICAgc2V0U3luY3N0YW1wKGdkLnN5bmNzdGFtcCk7XHJcbiAgICAgICAgICAvLyBObyBvcHBvbmVudCBuYW1lIGZvciBvYnNlcnZlcnNcclxuICAgICAgICAgIGlmIChwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUykge1xyXG4gICAgICAgICAgICBzZXRPcHBuYW1lKGdkLmduYW1lKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAocGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMpIHtcclxuICAgICAgICAgICAgc2V0T3BwbmFtZShnZC5wbmFtZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRUaWxlcyhnZC50aWxlcyk7XHJcbiAgICAgICAgICBzZXRTcXVhcmVBcnJheShnZC5zcXVhcmVBcnJheSk7XHJcbiAgICAgICAgICBzZXRQdGlsZXMoZ2QucHRpbGVzKTtcclxuICAgICAgICAgIHNldEd0aWxlcyhnZC5ndGlsZXMpO1xyXG4gICAgICAgICAgc2V0V2hvc2V0dXJuKGdkLndob3NldHVybik7XHJcbiAgICAgICAgICBsZXQgbmV3U25hcHNob3QgPSB7XHJcbiAgICAgICAgICAgIHNxdWFyZUFycmF5OiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdkLnNxdWFyZUFycmF5KSksIC8vIERlZXAgY29weVxyXG4gICAgICAgICAgICBwdGlsZXM6IFsuLi5nZC5wdGlsZXNdLFxyXG4gICAgICAgICAgICBndGlsZXM6IFsuLi5nZC5ndGlsZXNdXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgc2V0U25hcHNob3QobmV3U25hcHNob3QpO1xyXG4gICAgICAgICAgc2V0TW92ZXMoZ2QubW92ZXMpO1xyXG4gICAgICAgICAgc2V0UmVzY3VlcyhnZC5yZXNjdWVzKTtcclxuICAgICAgICAgIHNldEFsbG93UmV3aW5kKGdkLmFsbG93UmV3aW5kKTtcclxuICAgICAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInByb3ZpZGVnbmFtZVwiKSB7XHJcbiAgICAgICAgICBpZiAocGFydGljaXBhbnQgPT09IGMuUEFSVFlfVElUTEVfUFJJU09ORVJTKSB7XHJcbiAgICAgICAgICAgIHNldE9wcG5hbWUobWVzc2FnZURhdGEuZ25hbWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJhbGxvd3VuZG9cIikge1xyXG4gICAgICAgICAgLy8gT3Bwb25lbnQgY2xpY2tlZCBidXR0b24gdG8gYWxsb3cgdW5kbyB0dXJuXHJcbiAgICAgICAgICBzZXRBbGxvd1Jld2luZCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiY2hhdFwiKSB7IC8vIFNlcnZlciBkZWNpZGVkIHdoZXRoZXIgdGhpcyBjaGF0IHdhcyBmb3IgbWVcclxuICAgICAgICAgIGxldCBuZXdDaGF0bXNncyA9IFsuLi5jaGF0bXNncywge2Zyb206IG1lc3NhZ2VEYXRhLm5pY2tuYW1lLCBtc2c6IG1lc3NhZ2VEYXRhLnNlbmRtc2d9XTtcclxuICAgICAgICAgIHNldENoYXRtc2dzKG5ld0NoYXRtc2dzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwicHJvdmlkZXN5bmNkYXRhXCIpIHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBwcm92aWRlc3luZGF0YSBwYXNzZWQgJHttZXNzYWdlRGF0YS5zeW5jc3RhbXB9IGFuZCBJIGhhdmUgJHtzeW5jc3RhbXB9YCk7XHJcbiAgICAgICAgICBpZiAobWVzc2FnZURhdGEuc3luY3N0YW1wICE9PSBzeW5jc3RhbXApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYE91dCBvZiBzeW5jIC0gcmVxdWVzdGluZyBsYXRlc3QgZ2FtZSBkYXRhYCk7XHJcbiAgICAgICAgICAgIHJlcXVlc3RHYW1lRGF0YSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBDYWxsaW5nIHNldFNlbGVjdGlvbiAoZnJvbSBoYW5kbGVLZXlEb3duKSB0aGVuIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2sgZG9lcyBub3QgbGV0IGl0IHJlY29nbml6ZSBzZWxlY3Rpb24gd2l0aCB0aGUgbmV3IHZhbHVlXHJcbiAgICAvLyBTbyBJIHBhc3MgbmV3U2VsZWN0aW9uIHdoZW4gSSB3YW50IHRvIGFsc28gc2V0IGl0LCBvdGhlcndpc2UgSSBwYXNzIC0xIHRvIGluc3RydWN0IGl0IHRvIHVzZSBjdXJyZW50IHZhbHVlIG9mIHNlbGVjdGlvblxyXG4gICAgLy8gQWxzbyBwYXNzaW5nIG5ld1JjZFxyXG4gICAgY29uc3QgaGFuZGxlQm9hcmRTcXVhcmVDbGljayA9IChyaSwgY2ksIG5ld1NlbGVjdGlvbiwgbmV3UmNkKSA9PiB7XHJcbiAgICAgIGxldCBuZXdTcXVhcmVBcnJheSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3F1YXJlQXJyYXkpKTsgLy8gRGVlcCBjb3B5XHJcbiAgICAgIGxldCBuZXdTcXVhcmVBcnJheVJvdyA9IFsuLi5uZXdTcXVhcmVBcnJheVtyaV1dOyAvLyBUaGUgcm93IG9mIHNxdWFyZXMgdGhleSBjbGlja2VkIG9uXHJcbiAgICAgIGxldCBuZXdTcXVhcmVBcnJheUNlbGwgPSBuZXdTcXVhcmVBcnJheVJvd1tjaV07IC8vIFRoZSBzcXVhcmUgaW4gdGhlIHJvdyB0aGV5IGNsaWNrZWQgb25cclxuICAgICAgbGV0IG5ld1B0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgICBsZXQgbmV3R3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICAgIGxldCBuZXdDdXJyZW50Y29vcmRzID0gWy4uLmN1cnJlbnRjb29yZHNdO1xyXG4gICAgICBsZXQgY29vcmQgPSBTdHJpbmcocmkpICsgXCItXCIgKyBTdHJpbmcoY2kpO1xyXG4gICAgICBsZXQgY2NpID0gY3VycmVudGNvb3Jkcy5pbmRleE9mKGNvb3JkKTtcclxuICAgICAgaWYgKG5ld1NlbGVjdGlvbiA9PT0gLTEpIHtcclxuICAgICAgICBuZXdTZWxlY3Rpb24gPSBzZWxlY3Rpb247XHJcbiAgICAgICAgbmV3UmNkID0gcmNkO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChuZXdTZWxlY3Rpb24gPiAtMSAmJiBuZXdTcXVhcmVBcnJheUNlbGwudXNlZGJ5ID09PSBjLlVTRURfQllfTk9ORSkgeyAvLyB0aWxlIGlzIHNlbGVjdGVkIGZyb20gcmFjayBhbmQgY2xpY2tlZCBzcXVhcmUgaXMgbm90IHVzZWQgeWV0XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkVGlsZSA9IHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX1BSSVNPTkVSUyA/IG5ld1B0aWxlc1tuZXdTZWxlY3Rpb25dIDogbmV3R3RpbGVzW25ld1NlbGVjdGlvbl07XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlDZWxsLmxldHRlciA9IHNlbGVjdGVkVGlsZTtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheUNlbGwudXNlZGJ5ID0gd2hvc2V0dXJuO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Um93W2NpXSA9IG5ld1NxdWFyZUFycmF5Q2VsbDtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheVtyaV0gPSBbLi4ubmV3U3F1YXJlQXJyYXlSb3ddO1xyXG4gICAgICAgIHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX1BSSVNPTkVSU1xyXG4gICAgICAgICAgPyBuZXdQdGlsZXMuc3BsaWNlKG5ld1NlbGVjdGlvbiwgMSlcclxuICAgICAgICAgIDogbmV3R3RpbGVzLnNwbGljZShuZXdTZWxlY3Rpb24sIDEpO1xyXG4gICAgICAgIGlmICh3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMgJiYgbmV3U2VsZWN0aW9uID09PSBuZXdQdGlsZXMubGVuZ3RoKSB7IFxyXG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3U2VsZWN0aW9uIC0gMVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAod2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fR1VBUkRTICYmIG5ld1NlbGVjdGlvbiA9PT0gbmV3R3RpbGVzLmxlbmd0aCkgeyBcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbiAtIDFcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbik7XHJcbiAgICAgICAgc2V0U3F1YXJlQXJyYXkobmV3U3F1YXJlQXJyYXkpO1xyXG4gICAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICAgIHNldEN1cnJlbnRjb29yZHMoWy4uLmN1cnJlbnRjb29yZHMsIGNvb3JkXSk7XHJcbiAgICAgICAgc2V0UmNkKG5ld1JjZCk7IC8vIGtleSBkb3duIGhhbmRsZXIgZmlndXJlZCBpdCBvdXRcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNjaSA+IC0xKSB7IC8vIGNsaWNrZWQgc3F1YXJlIGhhcyBhIHRpbGUgb24gaXQgZnJvbSB0aGUgY3VycmVudCBtb3ZlIGluIHByb2dyZXNzLCBzbyBwdXQgaXQgYmFjayBvbiB0aGUgcGxheWVyIHJhY2tcclxuICAgICAgICB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlNcclxuICAgICAgICAgID8gbmV3UHRpbGVzLnB1c2gobmV3U3F1YXJlQXJyYXlDZWxsLmxldHRlcilcclxuICAgICAgICAgIDogbmV3R3RpbGVzLnB1c2gobmV3U3F1YXJlQXJyYXlDZWxsLmxldHRlcik7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlDZWxsLnVzZWRieSA9IGMuVVNFRF9CWV9OT05FO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Q2VsbC5sZXR0ZXIgPSBjLkxFVFRFUl9OT05FO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Um93W2NpXSA9IG5ld1NxdWFyZUFycmF5Q2VsbDtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheVtyaV0gPSBbLi4ubmV3U3F1YXJlQXJyYXlSb3ddO1xyXG4gICAgICAgIHNldFNlbGVjdGlvbihcclxuICAgICAgICAgIHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX1BSSVNPTkVSUyA/IG5ld1B0aWxlcy5sZW5ndGggLSAxIDogbmV3R3RpbGVzLmxlbmd0aCAtIDFcclxuICAgICAgICApO1xyXG4gICAgICAgIG5ld0N1cnJlbnRjb29yZHMuc3BsaWNlKGNjaSwgMSk7XHJcbiAgICAgICAgc2V0U3F1YXJlQXJyYXkobmV3U3F1YXJlQXJyYXkpO1xyXG4gICAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICAgIHNldEN1cnJlbnRjb29yZHMobmV3Q3VycmVudGNvb3Jkcyk7XHJcbiAgICAgICAgc2V0UmNkKC0xLC0xLGMuRElSX05PTkUpOyAvLyBtYWtlIHBsYXllciBjbGljayBhZ2FpbiB0byBzZXQgZGlyZWN0aW9uXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFRoZXkgZGlkbid0IGNsaWNrIGEgc3F1YXJlIHRvIHBsYWNlIGEgc2VsZWN0ZWQgdGlsZSB0aGVyZVxyXG4gICAgICAvLyBUaGV5IGRpZG4ndCBjbGljayBhIHNxdWFyZSB0byByZW1vdmUgYW4gZXhpc3RpbmcgdGlsZVxyXG4gICAgICBpZiAobmV3U3F1YXJlQXJyYXlDZWxsLnVzZWRieSA9PT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAvLyBUaGVyZSBpcyBub3RoaW5nIG9uIHRoZSBzcXVhcmUgc28gdGhleSBhcmUgcGlja2luZyB3aGVyZSB0byBwbGFjZSB0aGUgbmV4dCB0aWxlIHZpYSBrZXlib2FyZFxyXG4gICAgICAgIGxldCBuZXdEaXJlY3Rpb24gPSByY2RbMF0gIT09IHJpIHx8IHJjZFsxXSAhPT0gY2kgPyBjLkRJUl9SSUdIVCA6IC8vY2xpY2sgbmV3IHNxdWFyZSwgc3RhcnQgd2l0aCByaWdodFxyXG4gICAgICAgICByY2RbMl0gPT09IGMuRElSX1JJR0hUID8gYy5ESVJfRE9XTiA6IC8vY2xpY2sgc2FtZSBzcXVhcmUgdGhhdCB3YXMgcmlnaHQsIGNoYW5nZSB0byBkb3duXHJcbiAgICAgICAgIHJjZFsyXSA9PT0gYy5ESVJfRE9XTiA/IGMuRElSX05PTkUgOiAvL2NsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIGRvd24sIGNoYW5nZSB0byBubyBkaXJlY3Rpb25cclxuICAgICAgICAgYy5ESVJfUklHSFQ7IC8vIGNsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIG5vIGRpcmVjdGlvbiwgY2hhbmdlIHRvIHJpZ2h0XHJcbiAgICAgICAgbmV3UmNkID0gW3JpLGNpLG5ld0RpcmVjdGlvbl07XHJcbiAgICAgICAgc2V0UmNkKG5ld1JjZCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlUmFja1RpbGVDbGljayA9ICh0aWxlaW5kZXgpID0+IHtcclxuICAgICAgaWYgKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfT0JTRVJWRVIpIHtyZXR1cm47fVxyXG4gICAgICAvLyBJZiBubyB0aWxlIGlzIHNlbGVjdGVkIGFscmVhZHkgdGhlbiBzZXQgdGhlIHNlbGVjdGlvblxyXG4gICAgICBpZiAoc2VsZWN0aW9uID09PSAtMSkge1xyXG4gICAgICAgIHNldFNlbGVjdGlvbih0aWxlaW5kZXgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvLyBJZiB0aGUgc2FtZSB0aWxlIGlzIGFscmVhZHkgc2VsZWN0ZWQgdGhlbiB1bnNlbGVjdFxyXG4gICAgICBpZiAoc2VsZWN0aW9uID09PSB0aWxlaW5kZXgpIHtcclxuICAgICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvLyBBIHRpbGUgd2FzIGFscmVhZHkgc2VsZWN0ZWQgYW5kIHRoZXkgY2xpY2tlZCBhbm90aGVyIHRpbGUgLSBtb3ZlIHRoZSB0aWxlXHJcbiAgICAgIGxldCBuZXdyYWNrID0gcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBbLi4ucHRpbGVzXSA6IFsuLi5ndGlsZXNdO1xyXG4gICAgICBsZXQgbW92ZWZyb20gPSBzZWxlY3Rpb247XHJcbiAgICAgIGxldCBtb3ZldGlsZSA9IG5ld3JhY2tbbW92ZWZyb21dO1xyXG4gICAgICBsZXQgbW92ZXRvID0gdGlsZWluZGV4O1xyXG4gICAgICBuZXdyYWNrLnNwbGljZShtb3ZlZnJvbSwgMSk7IC8vIHJlbW92ZSB0aWxlIGZyb20gb3JpZ2luYWwgc2VsZWN0ZWQgcG9zaXRpb25cclxuICAgICAgbmV3cmFjay5zcGxpY2UobW92ZXRvLDAsbW92ZXRpbGUpOyAvLyBpbnNlcnQgbW92ZWQgdGlsZSBhdCB0aGUgbmV3bHkgc2VsZWN0ZWQgcG9zaXRpb25cclxuICAgICAgcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBzZXRQdGlsZXMobmV3cmFjaykgOiBzZXRHdGlsZXMobmV3cmFjayk7XHJcbiAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBhc3luYyBmdW5jdGlvbiBlbmRQbGF5ZXJzVHVybigpIHtcclxuICAgICAgaWYgKCFpc1BsYXlWYWxpZCgpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBwbGF5aW5mbyA9IGF3YWl0IGdldFBsYXlJbmZvKCk7XHJcbiAgICAgIGlmIChwbGF5aW5mby5pbnZhbGlkd29yZHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgYWxlcnQoYEludmFsaWQgYWNjb3JkaW5nIHRvIEVOQUJMRTJLIGxleGljb246ICR7cGxheWluZm8uaW52YWxpZHdvcmRzLmpvaW4oKS5yZXBsYWNlKFwiLlwiLFwiP1wiKS50b1VwcGVyQ2FzZSgpfWApO1xyXG4gICAgICAgIHJldHVybjsgLy8gRG8gbm90IGFwcGx5IHRoZSBwbGF5XHJcbiAgICAgIH1cclxuICAgICAgbGV0IG5ld1Jlc2N1ZXMgPSByZXNjdWVzO1xyXG4gICAgICBpZiAocGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMpIHtcclxuICAgICAgICBsZXQgZXNjYXBlaGF0Y2hlcyA9IFtcclxuICAgICAgICAgIFwiMC0wXCIsXHJcbiAgICAgICAgICBcIjAtXCIgKyBtaWRkbGUsXHJcbiAgICAgICAgICBcIjAtXCIgKyBlZGdlLFxyXG4gICAgICAgICAgbWlkZGxlKyBcIi0wXCIsXHJcbiAgICAgICAgICBtaWRkbGUgKyBcIi1cIiArIGVkZ2UsXHJcbiAgICAgICAgICBlZGdlICsgXCItMFwiLFxyXG4gICAgICAgICAgZWRnZSArIFwiLVwiICsgbWlkZGxlLFxyXG4gICAgICAgICAgZWRnZSArIFwiLVwiICsgZWRnZVxyXG4gICAgICAgIF07IC8vIGNvb3JkcyBvZiBlc2NhcGUgaGF0Y2hlc1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudGNvb3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKGVzY2FwZWhhdGNoZXMuaW5kZXhPZihjdXJyZW50Y29vcmRzW2ldKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIG5ld1Jlc2N1ZXMgPSBuZXdSZXNjdWVzICsgMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGV0IG5ld1BsYXllclRpbGVzID0gcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBbLi4ucHRpbGVzXSA6IFsuLi5ndGlsZXNdO1xyXG4gICAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgICB3aGlsZSAobmV3UGxheWVyVGlsZXMubGVuZ3RoIDwgcmFja3NpemUgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgICBuZXdQbGF5ZXJUaWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgbmV3UGxheWVyVGlsZXMuc29ydCgpO1xyXG4gICAgICBsZXQgbmV3V2hvc2V0dXJuID0gbmV3UGxheWVyVGlsZXMubGVuZ3RoID09PSAwID8gYy5XSE9TRV9UVVJOX0dBTUVPVkVSIDogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBjLldIT1NFX1RVUk5fR1VBUkRTIDogYy5QQVJUWV9UWVBFX1BSSVNPTkVSUztcclxuICAgICAgaWYgKCFhbnlVbnVzZWRFc2NhcGVIYXRjaGVzKHNxdWFyZUFycmF5KSkge1xyXG4gICAgICAgIG5ld1dob3NldHVybiA9IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUjsgLy8gTm8gZXNjYXBlIGhhdGNoZXMgbGVmdFxyXG4gICAgICB9XHJcbiAgICAgIGxldCBuZXdNb3ZlID0ge2J5OiBwYXJ0aWNpcGFudCwgdHlwZTogYy5NT1ZFX1RZUEVfUExBWSwgbWFpbndvcmQ6IHBsYXlpbmZvLm1haW53b3JkLCBleHRyYXdvcmRzOiBwbGF5aW5mby5leHRyYXdvcmRzLCBwb3M6IHBsYXlpbmZvLnBvc307XHJcbiAgICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICAgIGxldCBuZXdTeW5jc3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICBzZXRTeW5jc3RhbXAobmV3U3luY3N0YW1wKTtcclxuICAgICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICAgIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gc2V0UHRpbGVzKG5ld1BsYXllclRpbGVzKSA6IHNldEd0aWxlcyhuZXdQbGF5ZXJUaWxlcyk7XHJcbiAgICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgICBzZXRSZXNjdWVzKG5ld1Jlc2N1ZXMpO1xyXG4gICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgc3F1YXJlQXJyYXk6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3F1YXJlQXJyYXkpKSwgLy8gRGVlcCBjb3B5XHJcbiAgICAgICAgcHRpbGVzOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IFsuLi5uZXdQbGF5ZXJUaWxlc10gOiBbLi4ucHRpbGVzXSxcclxuICAgICAgICBndGlsZXM6IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gWy4uLmd0aWxlc10gOiBbLi4ubmV3UGxheWVyVGlsZXNdLFxyXG4gICAgICB9KTtcclxuICAgICAgbGV0IGpzZW5kID0ge1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gXCJlcHRcIiA6IFwiZWd0XCIsIC8vIGVuZCBwcmlzb25lcnMgb3IgZ3VhcmRzIHR1cm5cclxuICAgICAgICB0aW1lc3RhbXA6IG5ld1N5bmNzdGFtcCwgLy8gZm9yIGRhdGEgc3luYyBsb2dpY1xyXG4gICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsXHJcbiAgICAgICAgcHRpbGVzOiBuZXdQbGF5ZXJUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgcHJpc29uZXJzIHJhY2tcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gbWF5IGhhdmUgZW5kZWQgdGhlIGdhbWVcclxuICAgICAgICBtb3ZlOiBuZXdNb3ZlLCAvLyB0aGUgbW92ZSB0aGF0IHdhcyBtYWRlXHJcbiAgICAgICAgcmVzY3VlczogbmV3UmVzY3VlcyAvLyBtYXkgaGF2ZSByZXNjdWVkIGFub3RoZXIgcHJpc29uZXJcclxuICAgICAgfTtcclxuICAgICAgcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBqc2VuZC5wdGlsZXMgPSBuZXdQbGF5ZXJUaWxlcyA6IGpzZW5kLmd0aWxlcyA9IG5ld1BsYXllclRpbGVzO1xyXG4gICAgICBzZW5kTmV4dE1lc3NhZ2UoanNlbmQpO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IHN3YXBQbGF5ZXJzVGlsZXMgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSkge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcIk5lZWQgXCIgKyByYWNrc2l6ZSArIFwiIHRpbGVzIGluIHRoZSBiYWcgdG8gZXhjaGFuZ2VcIilcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgc2V0U25hdChgU3dhcHBpbmcgcmFjay5gKTtcclxuICAgICAgbGV0IG5ld1BsYXllclRpbGVzID0gW107XHJcbiAgICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICAgIHdoaWxlIChuZXdQbGF5ZXJUaWxlcy5sZW5ndGggPCByYWNrc2l6ZSAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIG5ld1BsYXllclRpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgfVxyXG4gICAgICBuZXdQbGF5ZXJUaWxlcy5zb3J0KCk7XHJcbiAgICAgIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gbmV3VGlsZXMgPSBbLi4ubmV3VGlsZXMsIC4uLnNuYXBzaG90LnB0aWxlc10gOiBuZXdUaWxlcyA9IFsuLi5uZXdUaWxlcywgLi4uc25hcHNob3QuZ3RpbGVzXTtcclxuICAgICAgbmV3VGlsZXMuc29ydCgpO1xyXG4gICAgICBsZXQgbmV3TW92ZSA9IHtieTogcGFydGljaXBhbnQsIHR5cGU6IGMuTU9WRV9UWVBFX1NXQVB9O1xyXG4gICAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgICBsZXQgbmV3U3luY3N0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgc2V0U3luY3N0YW1wKG5ld1N5bmNzdGFtcCk7XHJcbiAgICAgIHNldFNxdWFyZUFycmF5KEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc25hcHNob3Quc3F1YXJlQXJyYXkpKSk7IC8vIERlZXAgY29weVxyXG4gICAgICBzZXRXaG9zZXR1cm4ocGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBjLldIT1NFX1RVUk5fR1VBUkRTIDogYy5XSE9TRV9UVVJOX1BSSVNPTkVSUyk7XHJcbiAgICAgIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gc2V0UHRpbGVzKG5ld1BsYXllclRpbGVzKSA6IHNldEd0aWxlcyhuZXdQbGF5ZXJUaWxlcyk7XHJcbiAgICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgc3F1YXJlQXJyYXk6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc25hcHNob3Quc3F1YXJlQXJyYXkpKSwgLy8gRGVlcCBjb3B5XHJcbiAgICAgICAgcHRpbGVzOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IFsuLi5uZXdQbGF5ZXJUaWxlc10gOiBbLi4ucHRpbGVzXSxcclxuICAgICAgICBndGlsZXM6IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gWy4uLmd0aWxlc10gOiBbLi4ubmV3UGxheWVyVGlsZXNdLFxyXG4gICAgICB9KTtcclxuICAgICAgbGV0IGpzZW5kID0ge1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gXCJlcHRcIiA6IFwiZWd0XCIsIC8vIGVuZCBwcmlzb25lcnMgb3IgZ3VhcmRzIHR1cm5cclxuICAgICAgICB0aW1lc3RhbXA6IG5ld1N5bmNzdGFtcCwgLy8gZm9yIGRhdGEgc3luYyBsb2dpY1xyXG4gICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsXHJcbiAgICAgICAgd2hvc2V0dXJuOiBjLldIT1NFX1RVUk5fR1VBUkRTLCAvLyBzd2FwIG5ldmVyIGVuZHMgdGhlIGdhbWUgc28gZ28gdG8gb3Bwb25lbnRcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICBtb3ZlOiBuZXdNb3ZlIC8vIHRoZSBtb3ZlIHRoYXQgd2FzIG1hZGVcclxuICAgICAgfTtcclxuICAgICAgcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBqc2VuZC5wdGlsZXMgPSBuZXdQbGF5ZXJUaWxlcyA6IGpzZW5kLmd0aWxlcyA9IG5ld1BsYXllclRpbGVzO1xyXG4gICAgICBzZW5kTmV4dE1lc3NhZ2UoanNlbmQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBpc1BsYXlWYWxpZCgpIHtcclxuICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBpcyB0aGUgZmlyc3Qgd29yZCBzaW5jZSBpdCBhZmZlY3RzIHRoZSB2YWxpZGl0eSBydWxlc1xyXG4gICAgICBsZXQgZmlyc3RXb3JkID0gdHJ1ZTtcclxuICAgICAgbGV0IG51bW1vdmVzID0gbW92ZXMubGVuZ3RoO1xyXG4gICAgICBmb3IgKHZhciBtb3ZlaW5kZXggPSAwOyBmaXJzdFdvcmQgJiYgKG1vdmVpbmRleCA8IG51bW1vdmVzKTsgKyttb3ZlaW5kZXgpIHtcclxuICAgICAgICBpZiAobW92ZXNbbW92ZWluZGV4XS50eXBlID09PSBjLk1PVkVfVFlQRV9QTEFZKSB7XHJcbiAgICAgICAgICBmaXJzdFdvcmQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gRmlyc3Qgd29yZCBtdXN0IGhpdCBjZW50ZXIgc3F1YXJlXHJcbiAgICAgIGlmIChmaXJzdFdvcmQgJiYgc3F1YXJlQXJyYXlbbWlkZGxlXVttaWRkbGVdLnVzZWRieSA9PT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJGaXJzdCBwbGF5IG11c3QgaGl0IGNlbnRlciBzcXVhcmVcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEF0IGxlYXN0IDEgdGlsZSBtdXN0IGJlIHBsYXllZFxyXG4gICAgICBpZiAoY3VycmVudGNvb3Jkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJZb3UgZGlkbid0IHBsYXkgYW55IHRpbGVzXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICAvKiBHbyB0aHJvdWdoIGVhY2ggcGxheWVkIHRpbGVcclxuICAgICAgICAgIE1ha2Ugc3VyZSBpdCBpcyBub3QgaXNvbGF0ZWQgZnJvbSBhbGwgdGhlIG90aGVyIHRpbGVzXHJcbiAgICAgICAgICBEZXRlcm1pbmUgdGhlIGxvd2VzdCBhbmQgaGlnaGVzdCByb3cgYW5kIGNvbHVtbiBudW1iZXJzIG9mIHRpbGVzIHBsYXllZCB0aGlzIG1vdmVcclxuICAgICAgKi9cclxuICAgICAgbGV0IG51bWNvb3JkcyA9IGN1cnJlbnRjb29yZHMubGVuZ3RoO1xyXG4gICAgICBsZXQgbG93cm93ID0gZWRnZSsxO1xyXG4gICAgICBsZXQgaGlnaHJvdyA9IC0xO1xyXG4gICAgICBsZXQgbG93Y29sID0gZWRnZSsxO1xyXG4gICAgICBsZXQgaGlnaGNvbCA9IC0xO1xyXG4gICAgICBmb3IgKHZhciBjb29yZD0wOyBjb29yZCA8IG51bWNvb3JkczsgKytjb29yZCkgeyAvLyBFYWNoIHRpbGUgcGxheWVkIHRoaXMgbW92ZVxyXG4gICAgICAgIGxldCB0ZW1wcm93ID0gcGFyc2VJbnQoY3VycmVudGNvb3Jkc1tjb29yZF0uc3BsaXQoXCItXCIpWzBdKTtcclxuICAgICAgICBsZXQgdGVtcGNvbCA9IHBhcnNlSW50KGN1cnJlbnRjb29yZHNbY29vcmRdLnNwbGl0KFwiLVwiKVsxXSk7XHJcbiAgICAgICAgaWYgKHRlbXByb3cgPCBsb3dyb3cpIHsgbG93cm93ID0gdGVtcHJvdzt9XHJcbiAgICAgICAgaWYgKHRlbXByb3cgPiBoaWdocm93KSB7IGhpZ2hyb3cgPSB0ZW1wcm93O31cclxuICAgICAgICBpZiAodGVtcGNvbCA8IGxvd2NvbCkgeyBsb3djb2wgPSB0ZW1wY29sO31cclxuICAgICAgICBpZiAodGVtcGNvbCA+IGhpZ2hjb2wpIHsgaGlnaGNvbCA9IHRlbXBjb2w7fVxyXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGVyZSBpcyBhbm90aGVyIHRpbGUgaW1tZWRpYXRlbHkgYWJvdmUsIGJlbG93LCBsZWZ0LCBvciByaWdodCAobm90IGlzb2xhdGVkKVxyXG4gICAgICAgIGlmICghKHRlbXByb3cgPiAwICYmIHNxdWFyZUFycmF5W3RlbXByb3ctMV1bdGVtcGNvbF0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgJiZcclxuICAgICAgICAgICEodGVtcGNvbCA+IDAgJiYgc3F1YXJlQXJyYXlbdGVtcHJvd11bdGVtcGNvbC0xXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSAmJlxyXG4gICAgICAgICAgISh0ZW1wcm93IDwgZWRnZSAmJiBzcXVhcmVBcnJheVt0ZW1wcm93KzFdW3RlbXBjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpICYmXHJcbiAgICAgICAgICAhKHRlbXBjb2wgPCBlZGdlICYmIHNxdWFyZUFycmF5W3RlbXByb3ddW3RlbXBjb2wrMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSlcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJFYWNoIHBsYXllZCB0aWxlIG11c3QgYmUgcGFydCBvZiBhIHdvcmRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBVc2luZyB0aGUgaGlnaCBhbmQgbG93IHZhbHVlcywgY2hlY2sgaWYgdGhlIHBsYXkgaXMgaW4gYSBzdHJhaWdodCBsaW5lXHJcbiAgICAgIGlmIChsb3dyb3cgIT09IGhpZ2hyb3cgJiYgbG93Y29sICE9PSBoaWdoY29sKSB7XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwiVGlsZXMgcGxheWVkIG11c3QgYmUgaW4gYSBzdHJhaWdodCBsaW5lXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgcGxheXRocnUgPSBmYWxzZTtcclxuICAgICAgbGV0IGhvb2ttYWRlID0gZmFsc2U7XHJcbiAgICAgIC8qIFRyYXZlcnNlIGZyb20gZmlyc3QgcGxheWVkIHRpbGUgdG8gbGFzdCBwbGF5ZXIgdGlsZVxyXG4gICAgICAgICAgTWFrZSBzdXJlIHRoZXJlIGFyZSBubyB1bnVzZWQgc3F1YXJlcyBpbmJldHdlZW4gKGdhcHMgaW4gdGhlIHBsYXllZCB3b3JkKVxyXG4gICAgICAgICAgQ2hlY2sgaWYgd2UgcGxheWVkIHRocm91Z2ggZXhpc3RpbmcgdGlsZXNcclxuICAgICAgICAgIENoZWNrIGlmIHdlIGhvb2tlZCBleGlzdGluZyB0aWxlcy93b3Jkc1xyXG4gICAgICAqL1xyXG4gICAgICBmb3IgKHZhciB0ZW1wcm93ID0gbG93cm93OyB0ZW1wcm93IDw9IGhpZ2hyb3c7ICsrdGVtcHJvdykge1xyXG4gICAgICAgIGZvciAodmFyIHRlbXBjb2wgPSBsb3djb2w7IHRlbXBjb2wgPD0gaGlnaGNvbDsgKyt0ZW1wY29sKSB7XHJcbiAgICAgICAgICBpZiAoc3F1YXJlQXJyYXlbdGVtcHJvd11bdGVtcGNvbF0udXNlZGJ5ID09PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJUaGVyZSBpcyBhIGdhcCBpbiB5b3VyIHdvcmRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghZmlyc3RXb3JkKSB7IC8vIFBsYXkgdGhyb3VnaCBhbmQgaG9vayBub3QgcG9zc2libGUgb24gZmlyc3QgbW92ZVxyXG4gICAgICAgICAgICBsZXQgdGVtcGNvb3JkID0gdGVtcHJvdyArIFwiLVwiICsgdGVtcGNvbDtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMuaW5kZXhPZih0ZW1wY29vcmQpIDwgMCkgeyAvLyBUaWxlIHdhcyBub3QgcGxheWVkIHRoaXMgbW92ZSAod2FzIGFscmVhZHkgb24gdGhlIGJvYXJkKVxyXG4gICAgICAgICAgICAgIHBsYXl0aHJ1ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIHRlbXByb3cgPiAwICYmIHNxdWFyZUFycmF5W3RlbXByb3ctMV1bdGVtcGNvbF0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiB0ZW1wcm93IDwgZWRnZSAmJiBzcXVhcmVBcnJheVt0ZW1wcm93KzFdW3RlbXBjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgdGVtcGNvbCA+IDAgJiYgc3F1YXJlQXJyYXlbdGVtcHJvd11bdGVtcGNvbC0xXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIHRlbXBjb2wgPCBlZGdlICYmIHNxdWFyZUFycmF5W3RlbXByb3ddW3RlbXBjb2wrMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgeyBob29rbWFkZSA9IHRydWU7IH0gIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoIWZpcnN0V29yZCkge1xyXG4gICAgICAgIC8vIFdlIGFscmVhZHkgZm91bmQgcGxheSB0aHJvdWdoIGEgdGlsZSBiZXR3ZWVuIGZpcnN0IGFuZCBsYXN0IHBsYXllZCB0aWxlXHJcbiAgICAgICAgLy8gTm93IGNoZWNrIGlmIHBsYXllZCB3b3JkIGhhcyBhIHRpbGUgYmVmb3JlIGZpcnN0IG9yIGFmdGVyIGxhc3QgcGxheWVkIHRpbGVcclxuICAgICAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIGxvd2NvbCA+IDAgJiYgc3F1YXJlQXJyYXlbbG93cm93XVtsb3djb2wtMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIGhpZ2hjb2wgPCBlZGdlICYmIHNxdWFyZUFycmF5W2xvd3Jvd11baGlnaGNvbCsxXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgbG93cm93ID4gMCAmJiBzcXVhcmVBcnJheVtsb3dyb3ctMV1bbG93Y29sXSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBoaWdocm93IDwgZWRnZSAmJiBzcXVhcmVBcnJheVtoaWdocm93KzFdW2xvd2NvbF0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgICAgICAvLyBOb3cgd2UgaGF2ZSBmdWxseSBpZGVudGlmaWVkIHBsYXkgdGhyb3VnaCB3ZSBjYW4gbWFrZSBzdXJlIHRoZXkgcGxheWVkIHRocm91Z2ggb3IgbWFkZSBhIGhvb2tcclxuICAgICAgICAvLyBUaGlzIGluIG1hbmRhdG9yeSBzaW5jZSBpdCBpcyBub3QgdGhlIGZpcnN0IG1vdmVcclxuICAgICAgICBpZiAoIXBsYXl0aHJ1ICYmICFob29rbWFkZSkge1xyXG4gICAgICAgICAgd2luZG93LmFsZXJ0KFwiTmV3IHdvcmRzIG11c3QgZXh0ZW5kIGFuIGV4aXN0aW5nIHdvcmQgYW5kL29yIGhvb2sgZXhpc3Rpbmcgd29yZHMgb3IgdGlsZXNcIik7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UGxheUluZm8oKSB7XHJcbiAgICAgIGxldCBwbGF5aW5mbyA9IHt9O1xyXG4gICAgICBsZXQgbWFpbndvcmQgPSBcIlwiO1xyXG4gICAgICBsZXQgZXh0cmF3b3JkcyA9IFtdO1xyXG4gICAgICBsZXQgd29yZHN0YXJ0Y29vcmQgPSBcIlwiO1xyXG4gICAgICBsZXQgbnVtcm93cyA9IGVkZ2UrMTtcclxuICAgICAgbGV0IG51bWNvbHMgPSBlZGdlKzE7XHJcbiAgICAgIGxldCBsb3dyb3cgPSBudW1yb3dzO1xyXG4gICAgICBsZXQgaGlnaHJvdyA9IC0xO1xyXG4gICAgICBsZXQgbG93Y29sID0gbnVtY29scztcclxuICAgICAgbGV0IGhpZ2hjb2wgPSAtMTtcclxuICAgICAgbGV0IG51bWNvb3JkcyA9IGN1cnJlbnRjb29yZHMubGVuZ3RoO1xyXG4gICAgICBmb3IgKHZhciBjb29yZD0wOyBjb29yZCA8IG51bWNvb3JkczsgKytjb29yZCkge1xyXG4gICAgICAgIGxldCByb3cgPSBwYXJzZUludChjdXJyZW50Y29vcmRzW2Nvb3JkXS5zcGxpdChcIi1cIilbMF0pO1xyXG4gICAgICAgIGxldCBjb2wgPSBwYXJzZUludChjdXJyZW50Y29vcmRzW2Nvb3JkXS5zcGxpdChcIi1cIilbMV0pO1xyXG4gICAgICAgIGlmIChyb3cgPCBsb3dyb3cpIHtcclxuICAgICAgICAgIGxvd3JvdyA9IHJvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvdyA+IGhpZ2hyb3cpIHtcclxuICAgICAgICAgIGhpZ2hyb3cgPSByb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2wgPCBsb3djb2wpIHtcclxuICAgICAgICAgIGxvd2NvbCA9IGNvbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbCA+IGhpZ2hjb2wpIHtcclxuICAgICAgICAgIGhpZ2hjb2wgPSBjb2w7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChsb3dyb3cgPCBoaWdocm93IHx8IG51bWNvb3JkcyA9PT0gMSkgeyAvLyB0aWxlcyBwbGFjZWQgb24gZGlmZmVyZW5jZSByb3dzIHNvIHBsYXkgaXMgdmVydGljYWwsIG9yIHNpbmdsZSB0aWxlIHBsYXllZFxyXG4gICAgICAgIGxldCBjb2wgPSBsb3djb2w7IC8vIGxvd2NvbCBhbmQgaGlnaGNvbCB3aWxsIGhhdmUgdGhlIHNhbWUgdmFsdWVcclxuICAgICAgICAvLyBmaW5kIHRoZSBsb3dlc3Qgcm93IG51bWJlciBvZiB0aGUgbWFpbiB3b3JkLCB3aGljaCBtYXkgYmUgbG93ZXIgdGhhbiB0aGF0IG9mIHRoZSBmaXJzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIGxldCBsb3dlc3Ryb3cgPSBsb3dyb3c7XHJcbiAgICAgICAgd2hpbGUgKGxvd2VzdHJvdyA+IDAgJiYgc3F1YXJlQXJyYXlbbG93ZXN0cm93LTFdW2NvbF0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgbG93ZXN0cm93ID0gbG93ZXN0cm93IC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZmluZCB0aGUgaGlnaGVzdCByb3cgbnVtYmVyIG9mIHRoZSBtYWluIHdvcmQsIHdoaWNoIG1heSBiZSBoaWdoZXIgdGhhbiB0aGF0IG9mIHRoZSBsYXN0IHBsYXllZCB0aWxlXHJcbiAgICAgICAgbGV0IGhpZ2hlc3Ryb3cgPSBoaWdocm93O1xyXG4gICAgICAgIHdoaWxlIChoaWdoZXN0cm93IDwgZWRnZSAmJiBzcXVhcmVBcnJheVtoaWdoZXN0cm93KzFdW2NvbF0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgaGlnaGVzdHJvdyA9IGhpZ2hlc3Ryb3cgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3b3Jkc3RhcnRjb29yZCA9IGMuQk9BUkRfQ09MX0hFQURFUlNbY29sXSArIGMuQk9BUkRfUk9XX0hFQURFUlNbbG93ZXN0cm93XTsgLy8gdmVydGljYWwgcGxheSBjb29yZHMgc3RhcnQgd2l0aCBjb2wgaGVhZGVyXHJcbiAgICAgICAgZm9yICh2YXIgcm93ID0gbG93ZXN0cm93OyByb3cgPD0gaGlnaGVzdHJvdzsgKytyb3cpIHtcclxuICAgICAgICAgIG1haW53b3JkID0gbWFpbndvcmQgKyBzcXVhcmVBcnJheVtyb3ddW2NvbF0ubGV0dGVyO1xyXG4gICAgICAgICAgbGV0IGNvb3JkID0gcm93ICsgXCItXCIgKyBjb2w7XHJcbiAgICAgICAgICBpZiAoY3VycmVudGNvb3Jkcy5pbmRleE9mKGNvb3JkKSA+IC0xKSB7IC8vIFRoaXMgdGlsZSB3YXMgcGxheWVkLCBjaGVjayBmb3IgaG9va3NcclxuICAgICAgICAgICAgbGV0IGxvd2VzdGNvbCA9IGNvbDtcclxuICAgICAgICAgICAgd2hpbGUgKGxvd2VzdGNvbCA+IDAgJiYgc3F1YXJlQXJyYXlbcm93XVtsb3dlc3Rjb2wtMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgICAgIGxvd2VzdGNvbCA9IGxvd2VzdGNvbCAtIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGhpZ2hlc3Rjb2wgPSBjb2w7XHJcbiAgICAgICAgICAgIHdoaWxlIChoaWdoZXN0Y29sIDwgZWRnZSAmJiBzcXVhcmVBcnJheVtyb3ddW2hpZ2hlc3Rjb2wrMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgICAgIGhpZ2hlc3Rjb2wgPSBoaWdoZXN0Y29sICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobG93ZXN0Y29sIDwgaGlnaGVzdGNvbCkgeyAvLyBob29rIHdhcyBtYWRlXHJcbiAgICAgICAgICAgICAgbGV0IGV4dHJhd29yZCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgdGVtcGNvbCA9IGxvd2VzdGNvbDsgdGVtcGNvbCA8PSBoaWdoZXN0Y29sOyArK3RlbXBjb2wpIHtcclxuICAgICAgICAgICAgICAgIGV4dHJhd29yZCA9IGV4dHJhd29yZCArIHNxdWFyZUFycmF5W3Jvd11bdGVtcGNvbF0ubGV0dGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBleHRyYXdvcmRzID0gWy4uLmV4dHJhd29yZHMsIGV4dHJhd29yZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1haW53b3JkLmxlbmd0aCA8IDIpIHsgLy8gSG9yaXpvbnRhbCBwbGF5IG9yIHNpbmdsZSB0aWxlIGRyb3AgdGhhdCBjYW5ub3QgYmUgYSB2ZXJ0aWNhbCBwbGF5XHJcbiAgICAgICAgbGV0IHJvdyA9IGxvd3JvdzsgLy8gbG93cm93IGFuZCBoaWdocm93IHdpbGwgaGF2ZSB0aGUgc2FtZSB2YWx1ZVxyXG4gICAgICAgIC8vIGZpbmQgdGhlIGxvd2VzdCBjb2wgbnVtYmVyIG9mIHRoZSBtYWluIHdvcmQsIHdoaWNoIG1heSBiZSBsb3dlciB0aGFuIHRoYXQgb2YgdGhlIGZpcnN0IHBsYXllZCB0aWxlXHJcbiAgICAgICAgbGV0IGxvd2VzdGNvbCA9IGxvd2NvbDtcclxuICAgICAgICB3aGlsZSAobG93ZXN0Y29sID4gMCAmJiBzcXVhcmVBcnJheVtyb3ddW2xvd2VzdGNvbC0xXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICBsb3dlc3Rjb2wgPSBsb3dlc3Rjb2wgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmaW5kIHRoZSBoaWdoZXN0IGNvbCBudW1iZXIgb2YgdGhlIG1haW4gd29yZCwgd2hpY2ggbWF5IGJlIGhpZ2hlciB0aGFuIHRoYXQgb2YgdGhlIGxhc3QgcGxheWVkIHRpbGVcclxuICAgICAgICBsZXQgaGlnaGVzdGNvbCA9IGhpZ2hjb2w7XHJcbiAgICAgICAgd2hpbGUgKGhpZ2hlc3Rjb2wgPCBlZGdlICYmIHNxdWFyZUFycmF5W3Jvd11baGlnaGVzdGNvbCsxXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICBoaWdoZXN0Y29sID0gaGlnaGVzdGNvbCArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdvcmRzdGFydGNvb3JkID0gYy5CT0FSRF9ST1dfSEVBREVSU1tyb3ddICsgYy5CT0FSRF9DT0xfSEVBREVSU1tsb3dlc3Rjb2xdOyAvLyBob3Jpem9udGFsIHBsYXkgY29vcmRzIHN0YXJ0IHdpdGggcm93IGhlYWRlclxyXG4gICAgICAgIG1haW53b3JkID0gXCJcIjsgLy8gSW4gY2FzZSB3ZSBnb3QgYSAxIGxldHRlciBtYWlud29yZCBpbiB0aGUgcHJldmlvdXMgYmxvY2tcclxuICAgICAgICBleHRyYXdvcmRzID0gW107IC8vIERpdHRvXHJcbiAgICAgICAgZm9yICh2YXIgY29sID0gbG93ZXN0Y29sOyBjb2wgPD0gaGlnaGVzdGNvbDsgKytjb2wpIHtcclxuICAgICAgICAgIG1haW53b3JkID0gbWFpbndvcmQgKyBzcXVhcmVBcnJheVtyb3ddW2NvbF0ubGV0dGVyO1xyXG4gICAgICAgICAgbGV0IGNvb3JkID0gcm93ICsgXCItXCIgKyBjb2w7XHJcbiAgICAgICAgICBpZiAoY3VycmVudGNvb3Jkcy5pbmRleE9mKGNvb3JkKSA+IC0xKSB7IC8vIFRoaXMgdGlsZSB3YXMgcGxheWVkLCBjaGVjayBmb3IgaG9va3NcclxuICAgICAgICAgICAgbGV0IGxvd2VzdHJvdyA9IHJvdztcclxuICAgICAgICAgICAgd2hpbGUgKGxvd2VzdHJvdyA+IDAgJiYgc3F1YXJlQXJyYXlbbG93ZXN0cm93LTFdW2NvbF0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgICAgIGxvd2VzdHJvdyA9IGxvd2VzdHJvdyAtIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGhpZ2hlc3Ryb3cgPSByb3c7XHJcbiAgICAgICAgICAgIHdoaWxlIChoaWdoZXN0cm93IDwgZWRnZSAmJiBzcXVhcmVBcnJheVtoaWdoZXN0cm93KzFdW2NvbF0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgICAgIGhpZ2hlc3Ryb3cgPSBoaWdoZXN0cm93ICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobG93ZXN0cm93IDwgaGlnaGVzdHJvdykgeyAvLyBob29rIHdhcyBtYWRlXHJcbiAgICAgICAgICAgICAgbGV0IGV4dHJhd29yZCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgdGVtcHJvdyA9IGxvd2VzdHJvdzsgdGVtcHJvdyA8PSBoaWdoZXN0cm93OyArK3RlbXByb3cpIHtcclxuICAgICAgICAgICAgICAgIGV4dHJhd29yZCA9IGV4dHJhd29yZCArIHNxdWFyZUFycmF5W3RlbXByb3ddW2NvbF0ubGV0dGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBleHRyYXdvcmRzID0gWy4uLmV4dHJhd29yZHMsIGV4dHJhd29yZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGludmFsaWR3b3JkcyA9IGF3YWl0IHZhbGlkYXRlV29yZHMobWFpbndvcmQsIGV4dHJhd29yZHMpO1xyXG4gICAgICBwbGF5aW5mbyA9IHttYWlud29yZDogbWFpbndvcmQsIGV4dHJhd29yZHM6IGV4dHJhd29yZHMsIHBvczogd29yZHN0YXJ0Y29vcmQsIGludmFsaWR3b3JkczogaW52YWxpZHdvcmRzfTtcclxuICAgICAgcmV0dXJuIHBsYXlpbmZvO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlV29yZHMobWFpbndvcmQsIGV4dHJhd29yZHMpIHtcclxuICAgICAgLy8gQnVpbGQgY29tcGxldGUgbGlzdCBvZiBuZXdseSBmb3JtZWQgd29yZHMgZm9yIHZhbGlkYXRpb24gYWdhaW5zdCBsZXhpY29uXHJcbiAgICAgIGxldCBhbGx3b3JkcyA9IG1haW53b3JkO1xyXG4gICAgICBleHRyYXdvcmRzLmZvckVhY2goKGV3KSA9PiB7XHJcbiAgICAgICAgYWxsd29yZHMgPSBhbGx3b3JkcyArIFwiLFwiICsgZXc7XHJcbiAgICAgIH0pXHJcbiAgICAgIGxldCB1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvRU5BQkxFMks/dmFsaWRhdGU9JyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbS9FTkFCTEUySz92YWxpZGF0ZT0nXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgYWxsd29yZHMudG9Mb2NhbGVMb3dlckNhc2UoKSk7XHJcbiAgICAgIGNvbnN0IGpkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gamRhdGEuaW52YWxpZHdvcmRzO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gYWxsb3dVbmRvTGFzdFR1cm4oKSB7XHJcbiAgICAgIGlmICghYWxsb3dSZXdpbmQpIHtcclxuICAgICAgICBzZXRBbGxvd1Jld2luZCh0cnVlKTtcclxuICAgICAgICBzZW5kTmV4dE1lc3NhZ2UoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgICAgZnVuYzogXCJhbGxvd3VuZG9cIiwgLy8gYWxsb3cgdW5kbyBsYXN0IHR1cm5cclxuICAgICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCAvLyB3aG8gaXMgYWxsb3dpbmcgaXRcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBwZXJmb3JtUmV3aW5kKCkge1xyXG4gICAgICAvKiBTZW5kIHVuZG90dXJuIHRvIHNlcnZlciBhbmQgaXQgd2lsbCBzZW5kIHRoZSB1cGRhdGVkIGdhbWUgZGF0YSB0byBnYW1lIGNsaWVudHMsIGluY2x1ZGluZyB0aGlzIG9uZSAqL1xyXG4gICAgICBzZW5kTmV4dE1lc3NhZ2UoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IFwidW5kb3R1cm5cIiAvLyB1bmRvIGxhc3QgdHVyblxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHJlY2FsbFRpbGVzID0gKCkgPT4ge1xyXG4gICAgICBzZXRTcXVhcmVBcnJheShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNuYXBzaG90LnNxdWFyZUFycmF5KSkpOyAvLyBEZWVwIGNvcHlcclxuICAgICAgc2V0UHRpbGVzKFsuLi5zbmFwc2hvdC5wdGlsZXNdKTtcclxuICAgICAgc2V0R3RpbGVzKFsuLi5zbmFwc2hvdC5ndGlsZXNdKTtcclxuICAgICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICAgIHNldFJjZChbLTEsLTEsYy5ESVJfTk9ORV0pO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IHBsYXllclBhc3NUdXJuID0gKCkgPT4ge1xyXG4gICAgICBsZXQgbmV3TW92ZSA9IHtieTogcGFydGljaXBhbnQsIHR5cGU6IGMuTU9WRV9UWVBFX1BBU1N9O1xyXG4gICAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgICBsZXQgbmV3V2hvc2V0dXJuID0gaXNEb3VibGVQYXNzKG5ld01vdmVzKSA/IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUiA6IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gYy5XSE9TRV9UVVJOX0dVQVJEUyA6IGMuV0hPU0VfVFVSTl9QUklTT05FUlM7IC8vIElmIGJvdGggcGxheWVycyBwYXNzIHRoZW4gZW5kIHRoZSBnYW1lXHJcbiAgICAgIGxldCBuZXdTeW5jc3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgICByZWNhbGxUaWxlcygpOyAvLyBJbiBjYXNlIHRoZXkgcHV0IHNvbWUgdGlsZXMgb24gdGhlIGJvYXJkIGJlZm9yZSBjbGlja2luZyBQYXNzXHJcbiAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgIHNldFN5bmNzdGFtcChuZXdTeW5jc3RhbXApO1xyXG4gICAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgICBzZW5kTmV4dE1lc3NhZ2UoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gXCJlcHRcIiA6IFwiZWd0XCIsIC8vIGVuZCBwcmlzb25lcnMgb3IgZ3VhcmRzIHR1cm5cclxuICAgICAgICAgIHRpbWVzdGFtcDogbmV3U3luY3N0YW1wLCAvLyBmb3IgZGF0YSBzeW5jIGxvZ2ljXHJcbiAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LCAvLyB3aG8gcGFzc2VkIHRoZWlyIHR1cm5cclxuICAgICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuLCAvLyBlaXRoZXIgaXQgaXMgbm93IG9wcG9uZW50cyB0dXJuIG9yIHRoZSBwYXNzIGVuZGVkIHRoZSBnYW1lXHJcbiAgICAgICAgICBtb3ZlOiBuZXdNb3ZlIC8vIHRoZSBtb3ZlIHRoYXQgd2FzIG1hZGVcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdEdhbWVEYXRhID0gKCkgPT4ge1xyXG4gICAgICBzZW5kTmV4dE1lc3NhZ2UoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsXHJcbiAgICAgICAgICBmdW5jOiBcInJlcXVlc3RnYW1lZGF0YVwiLCAvLyByZXF1ZXN0IGdhbWUgZGF0YVxyXG4gICAgICAgICAgc3luY3N0YW1wOiBzeW5jc3RhbXAgLy8gc28gc2VydmVyIGNhbiBkZWNpZGUgd2hldGhlciBJIGFtIHVwIHRvIGRhdGVcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHJlcXVlc3RTeW5jRGF0YSA9ICgpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coYFNlbmQgcmVxdWVzdHN5bmNkYXRhICR7c3luY3N0YW1wfWApO1xyXG4gICAgICBzZW5kTmV4dE1lc3NhZ2UoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsXHJcbiAgICAgICAgICBmdW5jOiBcInJlcXVlc3RzeW5jZGF0YVwiIC8vIHJlcXVlc3Qgc3luYyBkYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmIChwYXJ0aWNpcGFudCAhPT0gd2hvc2V0dXJuKSB7cmV0dXJuO31cclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgZW5kUGxheWVyc1R1cm4oKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICAgIHJlY2FsbFRpbGVzKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBsZXR0ZXJ0ZXN0ID0gL15bQS1aYS16XFw/XSQvOyAvLyBzaW5nbGUgbGV0dGVyIG9yIHF1ZXN0aW9uIG1hcmsga2V5IHByZXNzZWRcclxuICAgICAgaWYgKGV2ZW50LmtleS5tYXRjaChsZXR0ZXJ0ZXN0KSkge1xyXG4gICAgICAgIGxldCBsZXR0ZXIgPSBldmVudC5rZXkudG9VcHBlckNhc2UoKTtcclxuICAgICAgICBsZXQgcmFjayA9IHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX1BSSVNPTkVSUyA/IHB0aWxlcyA6IGd0aWxlcztcclxuICAgICAgICBsZXQgbmV3U2VsZWN0aW9uID0gcmFjay5pbmRleE9mKGxldHRlcik7XHJcbiAgICAgICAgaWYgKG5ld1NlbGVjdGlvbiA9PT0gLTEpIHtcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IHJhY2suaW5kZXhPZihcIj9cIik7IC8vIFVzZSB0aGUgYmxhbmsgaWYgdGhleSBoYXZlIG9uZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmV3U2VsZWN0aW9uID4gLTEpIHsgLy8gUHJlc3NlZCBsZXR0ZXIgaXMgb24gdGhlIHJhY2tcclxuICAgICAgICAgIGxldCByb3cgPSByY2RbMF07XHJcbiAgICAgICAgICBsZXQgY29sID0gcmNkWzFdO1xyXG4gICAgICAgICAgbGV0IGRpciA9IHJjZFsyXTtcclxuICAgICAgICAgIGlmIChyb3cgPi0xICYmIGNvbCA+IC0xICYmIGRpciAhPT0gYy5ESVJfTk9ORSkgeyAvLyByb3csIGNvbCwgZGlyIGFyZSBzZXQgdG8gYWNjZXB0IGtleXN0cm9rZVxyXG4gICAgICAgICAgICAvLyBOZWVkIHRvIGZpZ3VyZSBvdXQgbmV4dCBzcWF1cmUgdG8gYXV0by1wbGFjZSBhIHRpbGVcclxuICAgICAgICAgICAgbGV0IG5ld1JjZCA9IHJjZDtcclxuICAgICAgICAgICAgaWYgKGRpciA9PT0gYy5ESVJfUklHSFQpIHsgLy8gcGxheWluZyByaWdodHdhcmRzXHJcbiAgICAgICAgICAgICAgbGV0IG5ld2MgPSAtMTtcclxuICAgICAgICAgICAgICBmb3IgKHZhciB0ZW1wY29sID0gY29sICsgMTsgdGVtcGNvbCA8IGVkZ2UgKyAxICYmIG5ld2MgPT09IC0xOyB0ZW1wY29sKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzcXVhcmVBcnJheVtyb3ddW3RlbXBjb2xdLnVzZWRieSA9PT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgICAgICAgbmV3YyA9IHRlbXBjb2w7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChuZXdjID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgbmV3UmNkID0gWy0xLC0xLGMuRElSX05PTkVdO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSY2QgPSBbcm93LCBuZXdjLCBjLkRJUl9SSUdIVF07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socm93LGNvbCxuZXdTZWxlY3Rpb24sbmV3UmNkKTtcclxuICAgICAgICAgICAgICBzZXRTZWxlY3Rpb24oLTEpOyAvLyB3aGVuIHRoZXkgYXJlIHR5cGluZyB0aGV5IGFyZSBub3Qgc2VsZWN0aW5nIHJhY2sgdGlsZXMgYnkgY2xpY2tpbmcgdGhlbSBvbiB0aGUgcmFja1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGlyID09PSBjLkRJUl9ET1dOKSB7IC8vIHBsYXlpbmcgZG93bndhcmRzXHJcbiAgICAgICAgICAgICAgbGV0IG5ld3IgPSAtMTtcclxuICAgICAgICAgICAgICBsZXQgbnVtcm93cyA9IChyYWNrc2l6ZSoyKSsxO1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIHRlbXByb3cgPSByb3cgKyAxOyB0ZW1wcm93IDwgbnVtcm93cyAmJiBuZXdyID09PSAtMTsgdGVtcHJvdysrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3F1YXJlQXJyYXlbdGVtcHJvd11bY29sXS51c2VkYnkgPT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICAgICAgICAgIG5ld3IgPSB0ZW1wcm93O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAobmV3ciA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIG5ld1JjZCA9IFstMSwtMSxjLkRJUl9OT05FXTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3UmNkID0gW25ld3IsIGNvbCwgYy5ESVJfRE9XTl07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socm93LGNvbCxuZXdTZWxlY3Rpb24sbmV3UmNkKTtcclxuICAgICAgICAgICAgICBzZXRTZWxlY3Rpb24oLTEpOyAvLyB3aGVuIHRoZXkgYXJlIHR5cGluZyB0aGV5IGFyZSBub3Qgc2VsZWN0aW5nIHJhY2sgdGlsZXMgYnkgY2xpY2tpbmcgdGhlbSBvbiB0aGUgcmFja1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJCYWNrc3BhY2VcIiAmJiBjdXJyZW50Y29vcmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvLyBTYW1lIGFzIGNsaWNraW5nIG9uIGEgcGxheWVkLXRoaXMtbW92ZSB0aWxlIGluIHRlcm1zIG9mIHJldHVybmluZyB0aGUgdGlsZSB0byB0aGUgcmFja1xyXG4gICAgICAgIC8vIEhvd2V2ZXIgd2UgYWxzbyB3YW50IHRvIHNldCB1cCByY2Qgc28gdGhleSBjYW4gcHJlc3MgdGhlIGtleSB0aGV5IG1lYW50IGFuZCBjb250aW51ZVxyXG4gICAgICAgIGxldCBjb29yZCA9IGN1cnJlbnRjb29yZHNbY3VycmVudGNvb3Jkcy5sZW5ndGggLSAxXTsgLy8gdGlsZSB0byByZXR1cm4gdG8gcmFja1xyXG4gICAgICAgIGxldCByb3cgPSBwYXJzZUludChjb29yZC5zcGxpdChcIi1cIilbMF0pO1xyXG4gICAgICAgIGxldCBjb2wgPSBwYXJzZUludChjb29yZC5zcGxpdChcIi1cIilbMV0pO1xyXG4gICAgICAgIGxldCBuZXdDdXJyZW50Y29vcmRzID0gWy4uLmN1cnJlbnRjb29yZHNdO1xyXG4gICAgICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgICAgICBsZXQgbmV3R3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICAgICAgbGV0IG5ld1NxdWFyZUFycmF5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzcXVhcmVBcnJheSkpOyAvLyBEZWVwIGNvcHlcclxuICAgICAgICBsZXQgbmV3U3F1YXJlQXJyYXlSb3cgPSBuZXdTcXVhcmVBcnJheVtyb3ddO1xyXG4gICAgICAgIGxldCBuZXdTcXVhcmVBcnJheUNlbGwgPSBuZXdTcXVhcmVBcnJheVJvd1tjb2xdO1xyXG4gICAgICAgIGxldCBuZXdSY2QgPSBbLTEsLTEsYy5ESVJfTk9ORV07XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGlvbiA9IHNlbGVjdGlvbjtcclxuICAgICAgICBuZXdDdXJyZW50Y29vcmRzLnNwbGljZShjdXJyZW50Y29vcmRzLmxlbmd0aC0xLDEpO1xyXG4gICAgICAgIGxldCByZXR1cm5lZFRpbGUgPSBzcXVhcmVBcnJheVtyb3ddW2NvbF0ubGV0dGVyO1xyXG4gICAgICAgIGlmICh3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMpIHtcclxuICAgICAgICAgIG5ld1B0aWxlcy5wdXNoKHJldHVybmVkVGlsZSk7XHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdQdGlsZXMubGVuZ3RoLTE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5ld0d0aWxlcy5wdXNoKHJldHVybmVkVGlsZSk7XHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdHdGlsZXMubGVuZ3RoLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Q2VsbC51c2VkYnkgPSBjLlVTRURfQllfTk9ORTtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheUNlbGwubGV0dGVyID0gYy5MRVRURVJfTk9ORTtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheVJvd1tjb2xdID0gbmV3U3F1YXJlQXJyYXlDZWxsO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5W3Jvd10gPSBbLi4ubmV3U3F1YXJlQXJyYXlSb3ddO1xyXG4gICAgICAgIGxldCBkaXIgPSByY2RbMl07XHJcbiAgICAgICAgaWYgKGRpciAhPT0gYy5ESVJfTk9ORSkge1xyXG4gICAgICAgICAgLy8gZGlyZWN0aW9uIHdhcyBzZXQgc28ga2VlcCBpdFxyXG4gICAgICAgICAgbmV3UmNkID0gW3Jvdyxjb2wsZGlyXTtcclxuICAgICAgICAgIGlmIChjdXJyZW50Y29vcmRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3Rpb24gPSAtMTsgLy8gaWYgdGhleSBiYWNrc3BhY2UgYWxsIHRoZSBsZXR0ZXJzIG9mZiBsZWF2ZSByYWNrIHRpbGUgdW5zZWxlY3RlZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKG5ld0N1cnJlbnRjb29yZHMpO1xyXG4gICAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICAgIHNldFNxdWFyZUFycmF5KG5ld1NxdWFyZUFycmF5KTtcclxuICAgICAgICBzZXRSY2QobmV3UmNkKTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24obmV3U2VsZWN0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlTW92ZUNsaWNrID0gKF9taSkgPT4ge31cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpc29uYnJlYWtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktY29udGFpbmVyIHczLXRlYWwgdG9wQmFySGVpZ2h0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktbWlkZGxlXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJteUhlYWRpbmdGb250XCI+UHJpc29uIEJyZWFrPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LXRvcGxlZnQgdzMtYmxhY2sgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgR2FtZSBpZDoge2dhbWVpZH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWJvdHRvbWxlZnQgdzMtb3JhbmdlIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIFByaXNvbmVyczoge1xyXG4gICAgICAgICAgICAgIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gbmlja25hbWVcclxuICAgICAgICAgICAgICA6IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTID8gb3BwbmFtZVxyXG4gICAgICAgICAgICAgIDogJ1NlY3JldCdcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS10b3ByaWdodCB3My1ibGFjayB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInczLWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWJvdHRvbXJpZ2h0IHczLW9yYW5nZSB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICBHdWFyZHM6IHtcclxuICAgICAgICAgICAgICBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IG9wcG5hbWVcclxuICAgICAgICAgICAgICA6IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTID8gbmlja25hbWVcclxuICAgICAgICAgICAgICA6ICdTZWNyZXQnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBiVGlsZUFuZE1vdmVzT3V0ZXJcIj5cclxuICAgICAgICAgICAgICA8U2hvd1Vuc2VlblRpbGVzXHJcbiAgICAgICAgICAgICAgICB0aWxlcz17dGlsZXN9XHJcbiAgICAgICAgICAgICAgICBvdGhlcnRpbGVzPXtcclxuICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBndGlsZXNcclxuICAgICAgICAgICAgICAgICAgOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUyA/IHB0aWxlc1xyXG4gICAgICAgICAgICAgICAgICA6IFtdfSAvLyBPYnNlcnZlcnMgc2VlIGJvdGggcmFja3Mgc28gbm90aGluZyB0byBleGNsdWRlIGZyb20gdGlsZWJhZyBhcyB1bnNlZW5cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFNob3dNb3ZlcyBtb3Zlcz17bW92ZXN9IG9ubW92ZWNsaWNrPXsobWkpID0+IGhhbmRsZU1vdmVDbGljayhtaSl9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGJQbGF5ZXJPdXRlclNlY3Rpb25cIj5cclxuICAgICAgICAgICAge3BhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID9cclxuICAgICAgICAgICAgICA8UGxheWVyU2VjdGlvblxyXG4gICAgICAgICAgICAgICAgcmFja3RpbGVzPXtwdGlsZXN9XHJcbiAgICAgICAgICAgICAgICB3aG9zZXR1cm49e3dob3NldHVybn1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KHRpKSA9PiBoYW5kbGVSYWNrVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tGaW5pc2hUdXJuPXsoKSA9PiBlbmRQbGF5ZXJzVHVybigpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1RpbGVSZWNhbGw9eygpID0+IHJlY2FsbFRpbGVzKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrVGlsZUV4Y2hhbmdlPXsoKSA9PiBzd2FwUGxheWVyc1RpbGVzKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrUGFzc1BsYXk9eygpID0+IHBsYXllclBhc3NUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrVW5kb0xhc3RQbGF5PXsoKSA9PiBwZXJmb3JtUmV3aW5kKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrQWxsb3dVbmRvPXsoKSA9PiBhbGxvd1VuZG9MYXN0VHVybigpfVxyXG4gICAgICAgICAgICAgICAgcGFydGljaXBhbnQ9e3BhcnRpY2lwYW50fVxyXG4gICAgICAgICAgICAgICAgbW92ZXM9e21vdmVzfVxyXG4gICAgICAgICAgICAgICAgYWxsb3dSZXdpbmQ9e2FsbG93UmV3aW5kfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDpwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUyA/XHJcbiAgICAgICAgICAgICAgPFBsYXllclNlY3Rpb25cclxuICAgICAgICAgICAgICAgIHJhY2t0aWxlcz17Z3RpbGVzfVxyXG4gICAgICAgICAgICAgICAgd2hvc2V0dXJuPXt3aG9zZXR1cm59XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb249e3NlbGVjdGlvbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyh0aSkgPT4gaGFuZGxlUmFja1RpbGVDbGljayh0aSl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrRmluaXNoVHVybj17KCkgPT4gZW5kUGxheWVyc1R1cm4oKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tUaWxlUmVjYWxsPXsoKSA9PiByZWNhbGxUaWxlcygpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1RpbGVFeGNoYW5nZT17KCkgPT4gc3dhcFBsYXllcnNUaWxlcygpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1Bhc3NQbGF5PXsoKSA9PiBwbGF5ZXJQYXNzVHVybigpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1VuZG9MYXN0UGxheT17KCkgPT4gcGVyZm9ybVJld2luZCgpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja0FsbG93VW5kbz17KCkgPT4gYWxsb3dVbmRvTGFzdFR1cm4oKX1cclxuICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50PXtwYXJ0aWNpcGFudH1cclxuICAgICAgICAgICAgICAgIG1vdmVzPXttb3Zlc31cclxuICAgICAgICAgICAgICAgIGFsbG93UmV3aW5kPXthbGxvd1Jld2luZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlBsYXllcklubmVyU2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlBsYXllclRpdGxlXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57Yy5QQVJUWV9JQ09OX1BSSVNPTkVSU308L2k+Jm5ic3A7e2MuUEFSVFlfVElUTEVfUFJJU09ORVJTfSZuYnNwOzxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+e2MuUEFSVFlfSUNPTl9QUklTT05FUlN9PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVyYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtwdGlsZXMgJiYgcHRpbGVzLm1hcCgodCwgdGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T2JzZXJ2ZXJSYWNrVGlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YE9ic2VydmVyUHJpc29uZXJzUmFja1RpbGUke3RpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnQ9J1AnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZXZhbHVlPXt0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVpbmRleD17dGl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUGxheWVyVGl0bGVcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntjLlBBUlRZX0lDT05fR1VBUkRTfTwvaT4mbmJzcDt7Yy5QQVJUWV9USVRMRV9HVUFSRFN9Jm5ic3A7PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57Yy5QQVJUWV9JQ09OX0dVQVJEU308L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAge2d0aWxlcyAmJiBndGlsZXMubWFwKCh0LCB0aSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxPYnNlcnZlclJhY2tUaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgT2JzZXJ2ZXJHdWFyZHNSYWNrVGlsZSR7dGl9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudD0nRydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxldmFsdWU9e3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZWluZGV4PXt0aX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICB7cGFydGljaXBhbnQgPT09IHdob3NldHVybiA/XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBvbktleURvd25DYXB0dXJlPXtoYW5kbGVLZXlEb3dufT5cclxuICAgICAgICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICAgICAgICBzcXVhcmVBcnJheT17c3F1YXJlQXJyYXl9XHJcbiAgICAgICAgICAgICAgICAgIHJjZD17cmNkfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsocmksIGNpKSA9PiBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJpLCBjaSwgLTEsbnVsbCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICAgICAgICBzcXVhcmVBcnJheT17c3F1YXJlQXJyYXl9XHJcbiAgICAgICAgICAgICAgICAgIHJjZD17cmNkfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7fX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgPFNob3dSZXNjdWVzIHJlc2N1ZXM9e3Jlc2N1ZXN9IC8+XHJcbiAgICAgICAgICAgIDxDaGF0IGdhbWVpZD17Z2FtZWlkfSBjbGllbnQ9e2NsaWVudH0gbmlja25hbWU9e25pY2tuYW1lfSBtc2dzPXtjaGF0bXNnc30gc2V0TXNncz17c2V0Q2hhdG1zZ3N9IHBhcnRpY2lwYW50PXtwYXJ0aWNpcGFudH0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWNvbnRhaW5lciB3My10ZWFsIHRvcEJhckhlaWdodFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LW1pZGRsZSBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIHt3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUiA/XHJcbiAgICAgICAgICAgICAgPGgxPkdhbWUgT3ZlciE8L2gxPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgPHA+e2MuSk9LRV9BUlJBWVtqb2tlaW5kZXhdfTwvcD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge25pY2tuYW1lICYmIG5pY2tuYW1lLmxlbmd0aCA+IDMgJiYgbmlja25hbWUudG9VcHBlckNhc2UoKS5zdWJzdHJpbmcoMCw0KSA9PT0gJ1RFU1QnICYmXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLXB1cnBsZSB3My1tb25vc3BhY2VcIj5cclxuICAgICAgICAgICAgPHA+U25hdHMgZm9yIGRlYnVnZ2luZzogKHtzbmF0cy5sZW5ndGh9KTwvcD5cclxuICAgICAgICAgICAge3NuYXRzLm1hcCgoc25hdCxpKSA9PiAoXHJcbiAgICAgICAgICAgICA8cCBrZXk9e2BzbmF0JHtpfWB9PiZuYnNwO3tzbmF0fTwvcD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuY29uc3QgT2JzZXJ2ZXJSYWNrVGlsZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkVW5zZWxlY3RlZCA9IFwiVW5zZWxlY3RlZCBcIjtcclxuICBjb25zdCB1Tm90VSA9IHByb3BzLnRpbGV2YWx1ZSA9PT0gXCJRXCIgPyBcInUgXCIgOiBcIlwiO1xyXG4gIGNvbnN0IHRpbGVjbGFzcyA9IFwicGJUaWxlT25SYWNrIFwiICsgc2VsZWN0ZWRVbnNlbGVjdGVkICsgdU5vdFUgKyBwcm9wcy5wYXJ0aWNpcGFudDtcclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgICBrZXk9e3Byb3BzLnRpbGVpbmRleH1cclxuICAgICAgICAgIGNsYXNzTmFtZT17dGlsZWNsYXNzfVxyXG4gICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZU9uUmFja1RleHRcIj57cHJvcHMudGlsZXZhbHVlfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==