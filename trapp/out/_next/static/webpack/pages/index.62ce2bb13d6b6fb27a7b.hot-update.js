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
    newSnats.push(`Sending message: func=${jMessage.func} at ${Date.now().toString(2)}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvZ2FtZS5qcyJdLCJuYW1lcyI6WyJHYW1lIiwic2V0V2hlcmV0byIsImlzcmVqb2luIiwicGFydGljaXBhbnQiLCJnYW1laWQiLCJuaWNrbmFtZSIsIndzbWVzc2FnZSIsImNsaWVudCIsInJhY2tzaXplIiwic25hdHMiLCJzZXRTbmF0cyIsInVzZVN0YXRlIiwic3luY3N0YW1wIiwic2V0U3luY3N0YW1wIiwibWlkZGxlIiwiZWRnZSIsImluaXRpYWx0aWxlcyIsImMiLCJ0aWxlcyIsInNldFRpbGVzIiwicHRpbGVzIiwic2V0UHRpbGVzIiwiZ3RpbGVzIiwic2V0R3RpbGVzIiwic3F1YXJlQXJyYXkiLCJzZXRTcXVhcmVBcnJheSIsInNlbGVjdGlvbiIsInNldFNlbGVjdGlvbiIsIndob3NldHVybiIsInNldFdob3NldHVybiIsImN1cnJlbnRjb29yZHMiLCJzZXRDdXJyZW50Y29vcmRzIiwicmVzY3VlcyIsInNldFJlc2N1ZXMiLCJyY2QiLCJzZXRSY2QiLCJtb3ZlcyIsInNldE1vdmVzIiwic25hcHNob3QiLCJzZXRTbmFwc2hvdCIsImpva2VpbmRleCIsInNldEpva2VpbmRleCIsImFsbG93UmV3aW5kIiwic2V0QWxsb3dSZXdpbmQiLCJvcHBuYW1lIiwic2V0T3BwbmFtZSIsImNoYXRtc2dzIiwic2V0Q2hhdG1zZ3MiLCJwcmV2UmVzY3VlcyIsInVzZVByZXZpb3VzIiwidXNlRWZmZWN0IiwiaW5pdGlhbGl6ZVJvdXRpbmUiLCJtc2ciLCJwcm9jZXNzR2FtZU1lc3NhZ2UiLCJzY3JvbGxUb0JvdHRvbSIsIm15YXVkaW8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJwbGF5IiwibmV3amkiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwicmVxdWVzdFN5bmNEYXRhIiwiY2xlYXJJbnRlcnZhbCIsImZpcnN0U3F1YXJlQXJyYXkiLCJpbml0aWFsU3F1YXJlQXJyYXkiLCJyZWpvaW5HYW1lIiwic3RhcnRHYW1lIiwiam9pbkdhbWUiLCJzdGFydE9ic2VydmluZ0dhbWUiLCJzZW5kTmV4dE1lc3NhZ2UiLCJqTWVzc2FnZSIsIm5ld1NuYXRzIiwicHVzaCIsImZ1bmMiLCJEYXRlIiwibm93IiwidG9TdHJpbmciLCJzZW5kIiwibmV3U3luY3N0YW1wIiwidGVtcFBUaWxlcyIsInRlbXBHVGlsZXMiLCJ0ZW1wVGlsZXMiLCJsZW5ndGgiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic3BsaWNlIiwic29ydCIsInR5cGUiLCJ0aW1lc3RhbXAiLCJzZW5kZXIiLCJwbmFtZSIsImduYW1lIiwicHV0QXRNb3ZlU3RhcnQiLCJtZXNzYWdlIiwibWVzc2FnZURhdGEiLCJKU09OIiwicGFyc2UiLCJnZCIsImJ1aWxkR2FtZWRhdGFGcm9tQXBpZGF0YSIsImFwaWRhdGEiLCJuZXdTbmFwc2hvdCIsInN0cmluZ2lmeSIsIm5ld0NoYXRtc2dzIiwiZnJvbSIsInNlbmRtc2ciLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdEdhbWVEYXRhIiwiaGFuZGxlQm9hcmRTcXVhcmVDbGljayIsInJpIiwiY2kiLCJuZXdTZWxlY3Rpb24iLCJuZXdSY2QiLCJuZXdTcXVhcmVBcnJheSIsIm5ld1NxdWFyZUFycmF5Um93IiwibmV3U3F1YXJlQXJyYXlDZWxsIiwibmV3UHRpbGVzIiwibmV3R3RpbGVzIiwibmV3Q3VycmVudGNvb3JkcyIsImNvb3JkIiwiU3RyaW5nIiwiY2NpIiwiaW5kZXhPZiIsInVzZWRieSIsInNlbGVjdGVkVGlsZSIsImxldHRlciIsIm5ld0RpcmVjdGlvbiIsImhhbmRsZVJhY2tUaWxlQ2xpY2siLCJ0aWxlaW5kZXgiLCJuZXdyYWNrIiwibW92ZWZyb20iLCJtb3ZldGlsZSIsIm1vdmV0byIsImVuZFBsYXllcnNUdXJuIiwiaXNQbGF5VmFsaWQiLCJwbGF5aW5mbyIsImdldFBsYXlJbmZvIiwiaW52YWxpZHdvcmRzIiwiYWxlcnQiLCJqb2luIiwicmVwbGFjZSIsInRvVXBwZXJDYXNlIiwibmV3UmVzY3VlcyIsImVzY2FwZWhhdGNoZXMiLCJpIiwibmV3UGxheWVyVGlsZXMiLCJuZXdUaWxlcyIsIm5ld1dob3NldHVybiIsImFueVVudXNlZEVzY2FwZUhhdGNoZXMiLCJuZXdNb3ZlIiwiYnkiLCJtYWlud29yZCIsImV4dHJhd29yZHMiLCJwb3MiLCJuZXdNb3ZlcyIsImpzZW5kIiwibW92ZSIsInN3YXBQbGF5ZXJzVGlsZXMiLCJ3aW5kb3ciLCJzZXRTbmF0IiwiTU9WRV9UWVBFX1NXQVAiLCJmaXJzdFdvcmQiLCJudW1tb3ZlcyIsIm1vdmVpbmRleCIsIm51bWNvb3JkcyIsImxvd3JvdyIsImhpZ2hyb3ciLCJsb3djb2wiLCJoaWdoY29sIiwidGVtcHJvdyIsInBhcnNlSW50Iiwic3BsaXQiLCJ0ZW1wY29sIiwicGxheXRocnUiLCJob29rbWFkZSIsInRlbXBjb29yZCIsIndvcmRzdGFydGNvb3JkIiwibnVtcm93cyIsIm51bWNvbHMiLCJyb3ciLCJjb2wiLCJsb3dlc3Ryb3ciLCJoaWdoZXN0cm93IiwibG93ZXN0Y29sIiwiaGlnaGVzdGNvbCIsImV4dHJhd29yZCIsInZhbGlkYXRlV29yZHMiLCJhbGx3b3JkcyIsImZvckVhY2giLCJldyIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImpkYXRhIiwianNvbiIsImFsbG93VW5kb0xhc3RUdXJuIiwicGVyZm9ybVJld2luZCIsInJlY2FsbFRpbGVzIiwicGxheWVyUGFzc1R1cm4iLCJNT1ZFX1RZUEVfUEFTUyIsImlzRG91YmxlUGFzcyIsImhhbmRsZUtleURvd24iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwia2V5IiwibGV0dGVydGVzdCIsIm1hdGNoIiwicmFjayIsImRpciIsIm5ld2MiLCJuZXdyIiwicmV0dXJuZWRUaWxlIiwiaGFuZGxlTW92ZUNsaWNrIiwiX21pIiwibWkiLCJ0aSIsIlBBUlRZX0lDT05fUFJJU09ORVJTIiwibWFwIiwidCIsIlBBUlRZX0lDT05fR1VBUkRTIiwic3Vic3RyaW5nIiwic25hdCIsIk9ic2VydmVyUmFja1RpbGUiLCJwcm9wcyIsInNlbGVjdGVkVW5zZWxlY3RlZCIsInVOb3RVIiwidGlsZXZhbHVlIiwidGlsZWNsYXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQztBQUFDQyxZQUFEO0FBQ1JDLFVBRFE7QUFFUkMsYUFGUSxDQUVJO0FBRko7QUFHUkMsUUFIUTtBQUlSQyxVQUFRLEdBQUMsRUFKRCxDQUlJO0FBSko7QUFLUkMsV0FMUTtBQU1SQyxRQU5RO0FBT1JDLFVBQVEsR0FBQyxDQVBELENBT0c7O0FBUEgsQ0FBRCxLQVFIO0FBQUE7O0FBQ04sUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQywrQ0FBUSxDQUFDLENBQUMsOENBQUQsQ0FBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkYsK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQ0EsUUFBTUcsTUFBTSxHQUFHTixRQUFmLENBSE0sQ0FHbUI7O0FBQ3pCLFFBQU1PLElBQUksR0FBR1AsUUFBUSxHQUFHLENBQXhCLENBSk0sQ0FJcUI7O0FBQzNCLFFBQU1RLFlBQVksR0FBR1IsUUFBUSxLQUFLLENBQWIsR0FBaUJTLGtFQUFqQixHQUE4QlQsUUFBUSxLQUFLLENBQWIsR0FBaUJTLGtFQUFqQixHQUE4QlQsUUFBUSxLQUFLLENBQWIsR0FBaUJTLGtFQUFqQixHQUE4QkEsa0VBQS9HO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CUiwrQ0FBUSxDQUFDLENBQUMsR0FBR0ssWUFBSixDQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNJLE1BQUQ7QUFBQSxPQUFTQztBQUFU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QUFNQyxrQkFBa0IsR0FBRyxhQUEzQjtBQUNBLFFBQU1DLEtBQUssR0FBR0YsS0FBSyxDQUFDRyxTQUFOLEtBQW9CLEdBQXBCLEdBQTBCLElBQTFCLEdBQWlDLEVBQS9DO0FBQ0EsUUFBTUMsU0FBUyxHQUFHLGtCQUFrQkgsa0JBQWxCLEdBQXVDQyxLQUF2QyxHQUErQ0YsS0FBSyxDQUFDak8sV0FBdkU7QUFDQSxzQkFDSTtBQUVJLGFBQVMsRUFBRXFPLFNBRmY7QUFBQSwyQkFJSTtBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBLGdCQUFtQ0osS0FBSyxDQUFDRztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkosS0FDU0gsS0FBSyxDQUFDaEcsU0FEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFRRCxDQVpEOztNQUFNK0YsZ0I7QUFlTiwrREFBZW5PLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjJjZTJiYjEzZDZiNmZiMjdhN2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuLy9pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBQbGF5ZXJTZWN0aW9uIGZyb20gJy4uL3BiL3BsYXllclNlY3Rpb24nO1xyXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi4vcGIvYm9hcmQnO1xyXG5pbXBvcnQgU2hvd1Vuc2VlblRpbGVzIGZyb20gJy4uL3BiL3Vuc2VlblRpbGVzU2VjdGlvbic7XHJcbmltcG9ydCBTaG93TW92ZXMgZnJvbSAnLi4vcGIvbW92ZXNTZWN0aW9uJztcclxuaW1wb3J0IFNob3dSZXNjdWVzIGZyb20gJy4uL3BiL3Jlc2N1ZXNTZWN0aW9uJztcclxuaW1wb3J0IENoYXQgZnJvbSAnLi4vcGIvY2hhdFNlY3Rpb24nO1xyXG5pbXBvcnQgKiBhcyBjIGZyb20gJy4uLy4uL2xpYi9wYi9wcmlzb25CcmVha0NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGluaXRpYWxTcXVhcmVBcnJheSB9IGZyb20gJy4uLy4uL2xpYi9wYi9pbml0aWFsU3F1YXJlQXJyYXknO1xyXG5pbXBvcnQgeyBhbnlVbnVzZWRFc2NhcGVIYXRjaGVzIH0gZnJvbSBcIi4uLy4uL2xpYi9wYi9hbnlVbnVzZWRFc2NhcGVIYXRjaGVzXCI7XHJcbmltcG9ydCB7IGJ1aWxkR2FtZWRhdGFGcm9tQXBpZGF0YSB9IGZyb20gXCIuLi8uLi9saWIvcGIvYnVpbGRHYW1lZGF0YUZyb21BcGlkYXRhXCI7XHJcbmltcG9ydCB7IGlzRG91YmxlUGFzcyB9IGZyb20gXCIuLi8uLi9saWIvcGIvaXNEb3VibGVQYXNzXCI7XHJcbmltcG9ydCB7IHNjcm9sbFRvQm90dG9tIH0gZnJvbSBcIi4uLy4uL2xpYi9zY3JvbGxUb0JvdHRvbVwiO1xyXG5pbXBvcnQgeyB1c2VQcmV2aW91cyB9IGZyb20gXCIuLi8uLi9saWIvdXNlUHJldmlvdXNcIjtcclxuXHJcbmNvbnN0IEdhbWUgPSAoe3NldFdoZXJldG9cclxuICAgICwgaXNyZWpvaW5cclxuICAgICwgcGFydGljaXBhbnQgLy8gUHJpc29uZXJzLCBHdWFyZHMsIG9yIE9ic2VydmVyIChub3QgaW1wbGVtZW50ZWQpXHJcbiAgICAsIGdhbWVpZFxyXG4gICAgLCBuaWNrbmFtZT0nJyAvLyBHaXZlIGl0IGEgZGVmYXVsdCBmb3IgQnVpbGRcclxuICAgICwgd3NtZXNzYWdlXHJcbiAgICAsIGNsaWVudFxyXG4gICAgLCByYWNrc2l6ZT00IC8vIE9wdGlvbiBmb3IgcmFjayBzaXplIChnaXZlIGl0IGEgZGVmYXVsdCBmb3IgQnVpbGQpXHJcbiAgICB9KSA9PiB7XHJcbiAgICBjb25zdCBbc25hdHMsIHNldFNuYXRzXSA9IHVzZVN0YXRlKFsnSGVsbG8uIFRoaXMgc3BhY2UgaXMgZm9yIGRlYnVnZ2luZyBtZXNzYWdlcy4nXSk7XHJcbiAgICBjb25zdCBbc3luY3N0YW1wLCBzZXRTeW5jc3RhbXBdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgbWlkZGxlID0gcmFja3NpemU7IC8vIE1pZGRsZSBlbGVtZW50IGluIHJvdyBvciBjb2x1bW4gYXJyYXlcclxuICAgIGNvbnN0IGVkZ2UgPSByYWNrc2l6ZSAqIDI7IC8vIExhc3QgZWxlbWVudCBpbiByb3cgb3IgY29sdW1uIGFycmF5XHJcbiAgICBjb25zdCBpbml0aWFsdGlsZXMgPSByYWNrc2l6ZSA9PT0gNiA/IGMuVElMRUJBRzYgOiByYWNrc2l6ZSA9PT0gNyA/IGMuVElMRUJBRzcgOiByYWNrc2l6ZSA9PT0gNSA/IGMuVElMRUJBRzUgOiBjLlRJTEVCQUc0O1xyXG4gICAgY29uc3QgW3RpbGVzLCBzZXRUaWxlc10gPSB1c2VTdGF0ZShbLi4uaW5pdGlhbHRpbGVzXSk7XHJcbiAgICBjb25zdCBbcHRpbGVzLCBzZXRQdGlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2d0aWxlcywgc2V0R3RpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzcXVhcmVBcnJheSwgc2V0U3F1YXJlQXJyYXldID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGlvbiwgc2V0U2VsZWN0aW9uXSA9IHVzZVN0YXRlKC0xKTsgLy8gcmVsYXRpdmUgdG8gcmFjayBvZiBwbGF5ZXIgbWFraW5nIGEgcGxheVxyXG4gICAgY29uc3QgW3dob3NldHVybiwgc2V0V2hvc2V0dXJuXSA9IHVzZVN0YXRlKGMuV0hPU0VfVFVSTl9QUklTT05FUlMpOyAvLyBnYW1lIHN0YXJ0cyB3aXRoIHByaXNvbmVycyBwbGF5XHJcbiAgICBjb25zdCBbY3VycmVudGNvb3Jkcywgc2V0Q3VycmVudGNvb3Jkc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcmVzY3Vlcywgc2V0UmVzY3Vlc10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtyY2QsIHNldFJjZF0gPSB1c2VTdGF0ZShbLTEsLTEsYy5ESVJfTk9ORV0pO1xyXG4gICAgY29uc3QgW21vdmVzLCBzZXRNb3Zlc10gPSB1c2VTdGF0ZShbXSk7IC8vIG1vdmUgaGlzdG9yeSwgZWFjaCBlbGVtZW50IGlzIHRoZSBhcnJheSBpcyBhIGpzb24gb2JqZWN0IG9mIGluZm8gYWJvdXQgdGhlIG1vdmVcclxuICAgIGNvbnN0IFtzbmFwc2hvdCwgc2V0U25hcHNob3RdID0gdXNlU3RhdGUoe1xyXG4gICAgICBzcXVhcmVBcnJheTogW10sXHJcbiAgICAgIHB0aWxlczogW10sXHJcbiAgICAgIGd0aWxlczogW10sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtqb2tlaW5kZXgsIHNldEpva2VpbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFthbGxvd1Jld2luZCwgc2V0QWxsb3dSZXdpbmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW29wcG5hbWUsIHNldE9wcG5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2NoYXRtc2dzLCBzZXRDaGF0bXNnc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBwcmV2UmVzY3VlcyA9IHVzZVByZXZpb3VzKHJlc2N1ZXMpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgLy8gVGhpcyBjb2RlIGV4ZWN1dGVzIHRoZSBmaXJzdCB0aW1lIEdhbWUgaXMgdXNlZCBvbmx5XHJcbiAgICAgIGluaXRpYWxpemVSb3V0aW5lKCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBsZXQgbXNnID0gd3NtZXNzYWdlO1xyXG4gICAgICBpZiAobXNnICE9PSAnJykgcHJvY2Vzc0dhbWVNZXNzYWdlKG1zZyk7ICAgICAgXHJcbiAgICB9LFt3c21lc3NhZ2VdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2Nyb2xsVG9Cb3R0b20oXCJTY3JvbGxhYmxlTW92ZXNcIik7XHJcbiAgICB9LFttb3Zlc10pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzY3JvbGxUb0JvdHRvbShcIlNjcm9sbGFibGVDaGF0XCIpO1xyXG4gICAgfSxbY2hhdG1zZ3NdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYgKHJlc2N1ZXMgPiBwcmV2UmVzY3Vlcykge1xyXG4gICAgICAgICAgdmFyIG15YXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gICAgICAgICAgLy8gT2JzZXJ2ZXJzIGhlYXIgeWlwcGVlXHJcbiAgICAgICAgICBteWF1ZGlvLnNyYyA9IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTID8gXCJodHRwczovL3RpbGVydW5uZXIuZ2l0aHViLmlvL09uZUdvdEF3YXkubTRhXCIgOiBcImh0dHBzOi8vdGlsZXJ1bm5lci5naXRodWIuaW8veWlwcGVlLm00YVwiO1xyXG4gICAgICAgICAgbXlhdWRpby5wbGF5KCk7XHJcbiAgICAgIH1cclxuICAgIH0sIFtyZXNjdWVzXSk7IC8vIFBsYXkgYSBzb3VuZCB3aGVuIGEgcmVzY3VlIGlzIG1hZGVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGxldCBuZXdqaSA9IGpva2VpbmRleCArIDE7XHJcbiAgICAgIGlmIChuZXdqaSA+PSBjLkpPS0VfQVJSQVkubGVuZ3RoKSB7XHJcbiAgICAgICAgbmV3amkgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHNldEpva2VpbmRleChuZXdqaSk7XHJcbiAgICB9LCBbd2hvc2V0dXJuXSk7IC8vIHdhbnQgdXAgdG8gZGF0ZSB2YWx1ZSBvZiB3aG9zZXR1cm4gdG8gZGVjaWRlIHdoZXRoZXIgdG8gYXNrIGZvciBhbiB1cGRhdGVcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBpZiAocGFydGljaXBhbnQgIT09IHdob3NldHVybiAmJiB3aG9zZXR1cm4gIT09IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUikge1xyXG4gICAgICAgICAgcmVxdWVzdFN5bmNEYXRhKCk7IC8vIFNlbmQgYSByZXF1ZXN0IGZvciBzeW5jIGRhdGEgd2hlbiB3YWl0aW5nIGZvciB0aGVpciBtb3ZlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNlbmQgYSByZXF1ZXN0IGZvciB0aGUgdGltZXN0YW1wIG9mIHRoZSBsYXN0IGV2ZW50IChzeW5jc3RhbXApXHJcbiAgICAgICAgLy8gU2VydmVyIHdpbGwgc2VuZCBmdW5jPXByb3ZpZGVzeW5jc3RhbXAgd2l0aCBhIHN5bmNzdGFtcCB2YWx1ZVxyXG4gICAgICAgIC8vIFByb2Nlc3NHYW1lTWVzc2FnZSB3aWxsIGNoZWNrIHN5bmNzdGFtcCBmcm9tIHRoZSBzZXJ2ZXIgdG8gc3luY3N0YW1wIGhlcmVcclxuICAgICAgICAvLyBJZiBkaWZmZXJlbnQgaXQgd2lsbCBzZW5kIGZ1bmM9cmVxdWVzdGdhbWVkYXRhLCBzZXJ2ZXIgd2lsbCBzZW5kIHVzIHByb3ZpZGVnYW1lZGF0YSwgYW5kIHdlIHN5bmNcclxuICAgICAgICB9LCBjLlBJTkdfSU5URVJWQUwpOyAvLyB0aGlzIG1hbnkgbWlsbGlzZWNvbmRzIGJldHdlZW4gYWJvdmUgY29kZSBibG9jayBleGVjdXRpb25zXHJcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgaW5pdGlhbGl6ZVJvdXRpbmUgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBmaXJzdFNxdWFyZUFycmF5ID0gaW5pdGlhbFNxdWFyZUFycmF5KHJhY2tzaXplKTtcclxuICAgICAgc2V0U3F1YXJlQXJyYXkoZmlyc3RTcXVhcmVBcnJheSk7XHJcbiAgICAgIGlmIChpc3Jlam9pbikge1xyXG4gICAgICAgIHJlam9pbkdhbWUoKVxyXG4gICAgICB9IGVsc2UgaWYgKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTKSB7XHJcbiAgICAgICAgc3RhcnRHYW1lKGZpcnN0U3F1YXJlQXJyYXkpOyAvLyBQcmlzb25lcnMgc3RhcnRpbmcgdGhlIGdhbWVcclxuICAgICAgfSBlbHNlIGlmIChwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUykge1xyXG4gICAgICAgIGpvaW5HYW1lKCk7IC8vIEd1YXJkcyBqb2luaW5nIHRoZSBnYW1lXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhcnRPYnNlcnZpbmdHYW1lKCk7IC8vIE9ic2VydmVyIHZpZXdpbmcgdGhlIGdhbWVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlbmROZXh0TWVzc2FnZSA9IChqTWVzc2FnZSkgPT4ge1xyXG4gICAgICBsZXQgbmV3U25hdHMgPSBbLi4uc25hdHNdO1xyXG4gICAgICBuZXdTbmF0cy5wdXNoKGBTZW5kaW5nIG1lc3NhZ2U6IGZ1bmM9JHtqTWVzc2FnZS5mdW5jfSBhdCAke0RhdGUubm93KCkudG9TdHJpbmcoMil9YCk7XHJcbiAgICAgIGNsaWVudC5zZW5kKGpNZXNzYWdlKTtcclxuICAgICAgc2V0U25hdHMobmV3U25hdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0YXJ0R2FtZSA9IChmaXJzdFNxdWFyZUFycmF5KSA9PiB7XHJcbiAgICAgIGxldCBuZXdTeW5jc3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgICBsZXQgdGVtcFBUaWxlcyA9IFtdO1xyXG4gICAgICBsZXQgdGVtcEdUaWxlcyA9IFtdO1xyXG4gICAgICBsZXQgdGVtcFRpbGVzID0gWy4uLmluaXRpYWx0aWxlc107XHJcbiAgICAgIHdoaWxlICh0ZW1wUFRpbGVzLmxlbmd0aCA8IHJhY2tzaXplKSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZW1wVGlsZXMubGVuZ3RoKTtcclxuICAgICAgICB0ZW1wUFRpbGVzLnB1c2godGVtcFRpbGVzW3JhbmRdKTtcclxuICAgICAgICB0ZW1wVGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZW1wVGlsZXMubGVuZ3RoKTtcclxuICAgICAgICB0ZW1wR1RpbGVzLnB1c2godGVtcFRpbGVzW3JhbmRdKTtcclxuICAgICAgICB0ZW1wVGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRlbXBQVGlsZXMuc29ydCgpO1xyXG4gICAgICB0ZW1wR1RpbGVzLnNvcnQoKTtcclxuICAgICAgc2V0U3luY3N0YW1wKG5ld1N5bmNzdGFtcCk7XHJcbiAgICAgIHNldEd0aWxlcyh0ZW1wR1RpbGVzKTtcclxuICAgICAgc2V0UHRpbGVzKHRlbXBQVGlsZXMpO1xyXG4gICAgICBzZXRUaWxlcyh0ZW1wVGlsZXMpO1xyXG4gICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgc3F1YXJlQXJyYXk6IGZpcnN0U3F1YXJlQXJyYXksXHJcbiAgICAgICAgcHRpbGVzOiBbLi4udGVtcFBUaWxlc10sXHJcbiAgICAgICAgZ3RpbGVzOiBbLi4udGVtcEdUaWxlc10gICAgXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZW5kTmV4dE1lc3NhZ2Uoe1xyXG4gICAgICAgIHR5cGU6IFwicGJcIixcclxuICAgICAgICBmdW5jOiBcInN0YXJ0Z2FtZVwiLFxyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyBHYW1lIGlkXHJcbiAgICAgICAgdGltZXN0YW1wOiBuZXdTeW5jc3RhbXAsIC8vIEZvciB0ZWxsaW5nIHNlcnZlciBteSBsYXN0IGRhdGEgdGltZXN0YW1wXHJcbiAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyBSYWNrIHNpemUgb3B0aW9uXHJcbiAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCwgLy8gVGhpcyB3aWxsIGJlIHByaXNvbmVycyBzaW5jZSBwcmlzb25lcnMgc3RhcnQgdGhlIGdhbWVcclxuICAgICAgICBwbmFtZTogbmlja25hbWUsIC8vIFRoaXMgd2lsbCBiZSB0aGUgcHJpc29uZXJzIG5pY2tuYW1lIHNpbmNlIHByaXNvbmVycyBhcmUgc2VuZGluZyB0aGlzXHJcbiAgICAgICAgdGlsZXM6IHRlbXBUaWxlcywgLy8gVGlsZSBiYWcgYWZ0ZXIgZmlyc3QgcmFja3Mgc2VsZWN0ZWRcclxuICAgICAgICBwdGlsZXM6IHRlbXBQVGlsZXMsIC8vIFByaXNvbmVycyBmaXJzdCByYWNrXHJcbiAgICAgICAgZ3RpbGVzOiB0ZW1wR1RpbGVzIC8vIEd1YXJkcyBmaXJzdCByYWNrXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgam9pbkdhbWUgPSAoKSA9PiB7XHJcbiAgICAgIHNlbmROZXh0TWVzc2FnZSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICBnbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImpvaW5nYW1lXCIsIC8vIGpvaW4gdGhlIGdhbWVcclxuICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50IC8vIHRoaXMgd2lsbCBlYiBndWFyZHNcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZWpvaW5HYW1lID0gKCkgPT4ge1xyXG4gICAgICBzZW5kTmV4dE1lc3NhZ2Uoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwicmVqb2luZ2FtZVwiLCAvLyBqb2luIHRoZSBnYW1lXHJcbiAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCAvLyBjb3VsZCBiZSBlaXRoZXIgcGxheWVyXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3RhcnRPYnNlcnZpbmdHYW1lID0gKCkgPT4ge1xyXG4gICAgICBzZW5kTmV4dE1lc3NhZ2Uoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgIHR5cGU6IFwicGJcIixcclxuICAgICAgICBmdW5jOiBcInN0YXJ0T2JzZXJ2aW5nXCJcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHV0QXRNb3ZlU3RhcnQoKSB7XHJcbiAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICAgIHNldEFsbG93UmV3aW5kKGZhbHNlKTtcclxuICAgICAgc2V0UmNkKC0xLC0xLGMuRElSX05PTkUpO1xyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NHYW1lTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgIGxldCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5nYW1laWQgPT09IGdhbWVpZCAmJiBtZXNzYWdlRGF0YS50eXBlID09PSBcInBiXCIpIHsgLy8gVGhpcyBpbnN0YW5jZSBvZiBhIHByaXNvbiBicmVhayBnYW1lXHJcbiAgICAgICAgbGV0IG5ld1NuYXRzID0gWy4uLnNuYXRzXTtcclxuICAgICAgICBuZXdTbmF0cy5wdXNoKGBHZXR0aW5nIG1lc3NhZ2U6IGZ1bmM9JHttZXNzYWdlRGF0YS5mdW5jfWApO1xyXG4gICAgICAgIHNldFNuYXRzKG5ld1NuYXRzKTtcclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJwcm92aWRlZ2FtZWRhdGFcIikge1xyXG4gICAgICAgICAgbGV0IGdkID0gYnVpbGRHYW1lZGF0YUZyb21BcGlkYXRhKG1lc3NhZ2VEYXRhLmFwaWRhdGEpO1xyXG4gICAgICAgICAgLy8gU2VydmVyIHByb3ZpZGluZyBnYW1lIGRhdGFcclxuICAgICAgICAgIHNldFN5bmNzdGFtcChnZC5zeW5jc3RhbXApO1xyXG4gICAgICAgICAgLy8gTm8gb3Bwb25lbnQgbmFtZSBmb3Igb2JzZXJ2ZXJzXHJcbiAgICAgICAgICBpZiAocGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMpIHtcclxuICAgICAgICAgICAgc2V0T3BwbmFtZShnZC5nbmFtZSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTKSB7XHJcbiAgICAgICAgICAgIHNldE9wcG5hbWUoZ2QucG5hbWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0VGlsZXMoZ2QudGlsZXMpO1xyXG4gICAgICAgICAgc2V0U3F1YXJlQXJyYXkoZ2Quc3F1YXJlQXJyYXkpO1xyXG4gICAgICAgICAgc2V0UHRpbGVzKGdkLnB0aWxlcyk7XHJcbiAgICAgICAgICBzZXRHdGlsZXMoZ2QuZ3RpbGVzKTtcclxuICAgICAgICAgIHNldFdob3NldHVybihnZC53aG9zZXR1cm4pO1xyXG4gICAgICAgICAgbGV0IG5ld1NuYXBzaG90ID0ge1xyXG4gICAgICAgICAgICBzcXVhcmVBcnJheTogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShnZC5zcXVhcmVBcnJheSkpLCAvLyBEZWVwIGNvcHlcclxuICAgICAgICAgICAgcHRpbGVzOiBbLi4uZ2QucHRpbGVzXSxcclxuICAgICAgICAgICAgZ3RpbGVzOiBbLi4uZ2QuZ3RpbGVzXVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHNldFNuYXBzaG90KG5ld1NuYXBzaG90KTtcclxuICAgICAgICAgIHNldE1vdmVzKGdkLm1vdmVzKTtcclxuICAgICAgICAgIHNldFJlc2N1ZXMoZ2QucmVzY3Vlcyk7XHJcbiAgICAgICAgICBzZXRBbGxvd1Jld2luZChnZC5hbGxvd1Jld2luZCk7XHJcbiAgICAgICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJwcm92aWRlZ25hbWVcIikge1xyXG4gICAgICAgICAgaWYgKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RJVExFX1BSSVNPTkVSUykge1xyXG4gICAgICAgICAgICBzZXRPcHBuYW1lKG1lc3NhZ2VEYXRhLmduYW1lKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiYWxsb3d1bmRvXCIpIHtcclxuICAgICAgICAgIC8vIE9wcG9uZW50IGNsaWNrZWQgYnV0dG9uIHRvIGFsbG93IHVuZG8gdHVyblxyXG4gICAgICAgICAgc2V0QWxsb3dSZXdpbmQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImNoYXRcIikgeyAvLyBTZXJ2ZXIgZGVjaWRlZCB3aGV0aGVyIHRoaXMgY2hhdCB3YXMgZm9yIG1lXHJcbiAgICAgICAgICBsZXQgbmV3Q2hhdG1zZ3MgPSBbLi4uY2hhdG1zZ3MsIHtmcm9tOiBtZXNzYWdlRGF0YS5uaWNrbmFtZSwgbXNnOiBtZXNzYWdlRGF0YS5zZW5kbXNnfV07XHJcbiAgICAgICAgICBzZXRDaGF0bXNncyhuZXdDaGF0bXNncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInByb3ZpZGVzeW5jZGF0YVwiKSB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgcHJvdmlkZXN5bmRhdGEgcGFzc2VkICR7bWVzc2FnZURhdGEuc3luY3N0YW1wfSBhbmQgSSBoYXZlICR7c3luY3N0YW1wfWApO1xyXG4gICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLnN5bmNzdGFtcCAhPT0gc3luY3N0YW1wKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBPdXQgb2Ygc3luYyAtIHJlcXVlc3RpbmcgbGF0ZXN0IGdhbWUgZGF0YWApO1xyXG4gICAgICAgICAgICByZXF1ZXN0R2FtZURhdGEoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQ2FsbGluZyBzZXRTZWxlY3Rpb24gKGZyb20gaGFuZGxlS2V5RG93bikgdGhlbiBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrIGRvZXMgbm90IGxldCBpdCByZWNvZ25pemUgc2VsZWN0aW9uIHdpdGggdGhlIG5ldyB2YWx1ZVxyXG4gICAgLy8gU28gSSBwYXNzIG5ld1NlbGVjdGlvbiB3aGVuIEkgd2FudCB0byBhbHNvIHNldCBpdCwgb3RoZXJ3aXNlIEkgcGFzcyAtMSB0byBpbnN0cnVjdCBpdCB0byB1c2UgY3VycmVudCB2YWx1ZSBvZiBzZWxlY3Rpb25cclxuICAgIC8vIEFsc28gcGFzc2luZyBuZXdSY2RcclxuICAgIGNvbnN0IGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2sgPSAocmksIGNpLCBuZXdTZWxlY3Rpb24sIG5ld1JjZCkgPT4ge1xyXG4gICAgICBsZXQgbmV3U3F1YXJlQXJyYXkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNxdWFyZUFycmF5KSk7IC8vIERlZXAgY29weVxyXG4gICAgICBsZXQgbmV3U3F1YXJlQXJyYXlSb3cgPSBbLi4ubmV3U3F1YXJlQXJyYXlbcmldXTsgLy8gVGhlIHJvdyBvZiBzcXVhcmVzIHRoZXkgY2xpY2tlZCBvblxyXG4gICAgICBsZXQgbmV3U3F1YXJlQXJyYXlDZWxsID0gbmV3U3F1YXJlQXJyYXlSb3dbY2ldOyAvLyBUaGUgc3F1YXJlIGluIHRoZSByb3cgdGhleSBjbGlja2VkIG9uXHJcbiAgICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgICBsZXQgbmV3Q3VycmVudGNvb3JkcyA9IFsuLi5jdXJyZW50Y29vcmRzXTtcclxuICAgICAgbGV0IGNvb3JkID0gU3RyaW5nKHJpKSArIFwiLVwiICsgU3RyaW5nKGNpKTtcclxuICAgICAgbGV0IGNjaSA9IGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCk7XHJcbiAgICAgIGlmIChuZXdTZWxlY3Rpb24gPT09IC0xKSB7XHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gc2VsZWN0aW9uO1xyXG4gICAgICAgIG5ld1JjZCA9IHJjZDtcclxuICAgICAgfVxyXG4gICAgICBpZiAobmV3U2VsZWN0aW9uID4gLTEgJiYgbmV3U3F1YXJlQXJyYXlDZWxsLnVzZWRieSA9PT0gYy5VU0VEX0JZX05PTkUpIHsgLy8gdGlsZSBpcyBzZWxlY3RlZCBmcm9tIHJhY2sgYW5kIGNsaWNrZWQgc3F1YXJlIGlzIG5vdCB1c2VkIHlldFxyXG4gICAgICAgIGxldCBzZWxlY3RlZFRpbGUgPSB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMgPyBuZXdQdGlsZXNbbmV3U2VsZWN0aW9uXSA6IG5ld0d0aWxlc1tuZXdTZWxlY3Rpb25dO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Q2VsbC5sZXR0ZXIgPSBzZWxlY3RlZFRpbGU7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlDZWxsLnVzZWRieSA9IHdob3NldHVybjtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheVJvd1tjaV0gPSBuZXdTcXVhcmVBcnJheUNlbGw7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlbcmldID0gWy4uLm5ld1NxdWFyZUFycmF5Um93XTtcclxuICAgICAgICB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlNcclxuICAgICAgICAgID8gbmV3UHRpbGVzLnNwbGljZShuZXdTZWxlY3Rpb24sIDEpXHJcbiAgICAgICAgICA6IG5ld0d0aWxlcy5zcGxpY2UobmV3U2VsZWN0aW9uLCAxKTtcclxuICAgICAgICBpZiAod2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTICYmIG5ld1NlbGVjdGlvbiA9PT0gbmV3UHRpbGVzLmxlbmd0aCkgeyBcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbiAtIDFcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX0dVQVJEUyAmJiBuZXdTZWxlY3Rpb24gPT09IG5ld0d0aWxlcy5sZW5ndGgpIHsgXHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdTZWxlY3Rpb24gLSAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24pO1xyXG4gICAgICAgIHNldFNxdWFyZUFycmF5KG5ld1NxdWFyZUFycmF5KTtcclxuICAgICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKFsuLi5jdXJyZW50Y29vcmRzLCBjb29yZF0pO1xyXG4gICAgICAgIHNldFJjZChuZXdSY2QpOyAvLyBrZXkgZG93biBoYW5kbGVyIGZpZ3VyZWQgaXQgb3V0XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjY2kgPiAtMSkgeyAvLyBjbGlja2VkIHNxdWFyZSBoYXMgYSB0aWxlIG9uIGl0IGZyb20gdGhlIGN1cnJlbnQgbW92ZSBpbiBwcm9ncmVzcywgc28gcHV0IGl0IGJhY2sgb24gdGhlIHBsYXllciByYWNrXHJcbiAgICAgICAgd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTXHJcbiAgICAgICAgICA/IG5ld1B0aWxlcy5wdXNoKG5ld1NxdWFyZUFycmF5Q2VsbC5sZXR0ZXIpXHJcbiAgICAgICAgICA6IG5ld0d0aWxlcy5wdXNoKG5ld1NxdWFyZUFycmF5Q2VsbC5sZXR0ZXIpO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Q2VsbC51c2VkYnkgPSBjLlVTRURfQllfTk9ORTtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheUNlbGwubGV0dGVyID0gYy5MRVRURVJfTk9ORTtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheVJvd1tjaV0gPSBuZXdTcXVhcmVBcnJheUNlbGw7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlbcmldID0gWy4uLm5ld1NxdWFyZUFycmF5Um93XTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24oXHJcbiAgICAgICAgICB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMgPyBuZXdQdGlsZXMubGVuZ3RoIC0gMSA6IG5ld0d0aWxlcy5sZW5ndGggLSAxXHJcbiAgICAgICAgKTtcclxuICAgICAgICBuZXdDdXJyZW50Y29vcmRzLnNwbGljZShjY2ksIDEpO1xyXG4gICAgICAgIHNldFNxdWFyZUFycmF5KG5ld1NxdWFyZUFycmF5KTtcclxuICAgICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKG5ld0N1cnJlbnRjb29yZHMpO1xyXG4gICAgICAgIHNldFJjZCgtMSwtMSxjLkRJUl9OT05FKTsgLy8gbWFrZSBwbGF5ZXIgY2xpY2sgYWdhaW4gdG8gc2V0IGRpcmVjdGlvblxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvLyBUaGV5IGRpZG4ndCBjbGljayBhIHNxdWFyZSB0byBwbGFjZSBhIHNlbGVjdGVkIHRpbGUgdGhlcmVcclxuICAgICAgLy8gVGhleSBkaWRuJ3QgY2xpY2sgYSBzcXVhcmUgdG8gcmVtb3ZlIGFuIGV4aXN0aW5nIHRpbGVcclxuICAgICAgaWYgKG5ld1NxdWFyZUFycmF5Q2VsbC51c2VkYnkgPT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgLy8gVGhlcmUgaXMgbm90aGluZyBvbiB0aGUgc3F1YXJlIHNvIHRoZXkgYXJlIHBpY2tpbmcgd2hlcmUgdG8gcGxhY2UgdGhlIG5leHQgdGlsZSB2aWEga2V5Ym9hcmRcclxuICAgICAgICBsZXQgbmV3RGlyZWN0aW9uID0gcmNkWzBdICE9PSByaSB8fCByY2RbMV0gIT09IGNpID8gYy5ESVJfUklHSFQgOiAvL2NsaWNrIG5ldyBzcXVhcmUsIHN0YXJ0IHdpdGggcmlnaHRcclxuICAgICAgICAgcmNkWzJdID09PSBjLkRJUl9SSUdIVCA/IGMuRElSX0RPV04gOiAvL2NsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIHJpZ2h0LCBjaGFuZ2UgdG8gZG93blxyXG4gICAgICAgICByY2RbMl0gPT09IGMuRElSX0RPV04gPyBjLkRJUl9OT05FIDogLy9jbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyBkb3duLCBjaGFuZ2UgdG8gbm8gZGlyZWN0aW9uXHJcbiAgICAgICAgIGMuRElSX1JJR0hUOyAvLyBjbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyBubyBkaXJlY3Rpb24sIGNoYW5nZSB0byByaWdodFxyXG4gICAgICAgIG5ld1JjZCA9IFtyaSxjaSxuZXdEaXJlY3Rpb25dO1xyXG4gICAgICAgIHNldFJjZChuZXdSY2QpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IGhhbmRsZVJhY2tUaWxlQ2xpY2sgPSAodGlsZWluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX09CU0VSVkVSKSB7cmV0dXJuO31cclxuICAgICAgLy8gSWYgbm8gdGlsZSBpcyBzZWxlY3RlZCBhbHJlYWR5IHRoZW4gc2V0IHRoZSBzZWxlY3Rpb25cclxuICAgICAgaWYgKHNlbGVjdGlvbiA9PT0gLTEpIHtcclxuICAgICAgICBzZXRTZWxlY3Rpb24odGlsZWluZGV4KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gSWYgdGhlIHNhbWUgdGlsZSBpcyBhbHJlYWR5IHNlbGVjdGVkIHRoZW4gdW5zZWxlY3RcclxuICAgICAgaWYgKHNlbGVjdGlvbiA9PT0gdGlsZWluZGV4KSB7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gQSB0aWxlIHdhcyBhbHJlYWR5IHNlbGVjdGVkIGFuZCB0aGV5IGNsaWNrZWQgYW5vdGhlciB0aWxlIC0gbW92ZSB0aGUgdGlsZVxyXG4gICAgICBsZXQgbmV3cmFjayA9IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gWy4uLnB0aWxlc10gOiBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IG1vdmVmcm9tID0gc2VsZWN0aW9uO1xyXG4gICAgICBsZXQgbW92ZXRpbGUgPSBuZXdyYWNrW21vdmVmcm9tXTtcclxuICAgICAgbGV0IG1vdmV0byA9IHRpbGVpbmRleDtcclxuICAgICAgbmV3cmFjay5zcGxpY2UobW92ZWZyb20sIDEpOyAvLyByZW1vdmUgdGlsZSBmcm9tIG9yaWdpbmFsIHNlbGVjdGVkIHBvc2l0aW9uXHJcbiAgICAgIG5ld3JhY2suc3BsaWNlKG1vdmV0bywwLG1vdmV0aWxlKTsgLy8gaW5zZXJ0IG1vdmVkIHRpbGUgYXQgdGhlIG5ld2x5IHNlbGVjdGVkIHBvc2l0aW9uXHJcbiAgICAgIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gc2V0UHRpbGVzKG5ld3JhY2spIDogc2V0R3RpbGVzKG5ld3JhY2spO1xyXG4gICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZW5kUGxheWVyc1R1cm4oKSB7XHJcbiAgICAgIGlmICghaXNQbGF5VmFsaWQoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgcGxheWluZm8gPSBhd2FpdCBnZXRQbGF5SW5mbygpO1xyXG4gICAgICBpZiAocGxheWluZm8uaW52YWxpZHdvcmRzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGFsZXJ0KGBJbnZhbGlkIGFjY29yZGluZyB0byBFTkFCTEUySyBsZXhpY29uOiAke3BsYXlpbmZvLmludmFsaWR3b3Jkcy5qb2luKCkucmVwbGFjZShcIi5cIixcIj9cIikudG9VcHBlckNhc2UoKX1gKTtcclxuICAgICAgICByZXR1cm47IC8vIERvIG5vdCBhcHBseSB0aGUgcGxheVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBuZXdSZXNjdWVzID0gcmVzY3VlcztcclxuICAgICAgaWYgKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTKSB7XHJcbiAgICAgICAgbGV0IGVzY2FwZWhhdGNoZXMgPSBbXHJcbiAgICAgICAgICBcIjAtMFwiLFxyXG4gICAgICAgICAgXCIwLVwiICsgbWlkZGxlLFxyXG4gICAgICAgICAgXCIwLVwiICsgZWRnZSxcclxuICAgICAgICAgIG1pZGRsZSsgXCItMFwiLFxyXG4gICAgICAgICAgbWlkZGxlICsgXCItXCIgKyBlZGdlLFxyXG4gICAgICAgICAgZWRnZSArIFwiLTBcIixcclxuICAgICAgICAgIGVkZ2UgKyBcIi1cIiArIG1pZGRsZSxcclxuICAgICAgICAgIGVkZ2UgKyBcIi1cIiArIGVkZ2VcclxuICAgICAgICBdOyAvLyBjb29yZHMgb2YgZXNjYXBlIGhhdGNoZXNcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRjb29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmIChlc2NhcGVoYXRjaGVzLmluZGV4T2YoY3VycmVudGNvb3Jkc1tpXSkgPiAtMSkge1xyXG4gICAgICAgICAgICBuZXdSZXNjdWVzID0gbmV3UmVzY3VlcyArIDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBuZXdQbGF5ZXJUaWxlcyA9IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gWy4uLnB0aWxlc10gOiBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgICAgd2hpbGUgKG5ld1BsYXllclRpbGVzLmxlbmd0aCA8IHJhY2tzaXplICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgbmV3UGxheWVyVGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIG5ld1BsYXllclRpbGVzLnNvcnQoKTtcclxuICAgICAgbGV0IG5ld1dob3NldHVybiA9IG5ld1BsYXllclRpbGVzLmxlbmd0aCA9PT0gMCA/IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUiA6IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gYy5XSE9TRV9UVVJOX0dVQVJEUyA6IGMuUEFSVFlfVFlQRV9QUklTT05FUlM7XHJcbiAgICAgIGlmICghYW55VW51c2VkRXNjYXBlSGF0Y2hlcyhzcXVhcmVBcnJheSkpIHtcclxuICAgICAgICBuZXdXaG9zZXR1cm4gPSBjLldIT1NFX1RVUk5fR0FNRU9WRVI7IC8vIE5vIGVzY2FwZSBoYXRjaGVzIGxlZnRcclxuICAgICAgfVxyXG4gICAgICBsZXQgbmV3TW92ZSA9IHtieTogcGFydGljaXBhbnQsIHR5cGU6IGMuTU9WRV9UWVBFX1BMQVksIG1haW53b3JkOiBwbGF5aW5mby5tYWlud29yZCwgZXh0cmF3b3JkczogcGxheWluZm8uZXh0cmF3b3JkcywgcG9zOiBwbGF5aW5mby5wb3N9O1xyXG4gICAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgICBsZXQgbmV3U3luY3N0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgc2V0U3luY3N0YW1wKG5ld1N5bmNzdGFtcCk7XHJcbiAgICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgICBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IHNldFB0aWxlcyhuZXdQbGF5ZXJUaWxlcykgOiBzZXRHdGlsZXMobmV3UGxheWVyVGlsZXMpO1xyXG4gICAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgICAgc2V0UmVzY3VlcyhuZXdSZXNjdWVzKTtcclxuICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgIHNxdWFyZUFycmF5OiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNxdWFyZUFycmF5KSksIC8vIERlZXAgY29weVxyXG4gICAgICAgIHB0aWxlczogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBbLi4ubmV3UGxheWVyVGlsZXNdIDogWy4uLnB0aWxlc10sXHJcbiAgICAgICAgZ3RpbGVzOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IFsuLi5ndGlsZXNdIDogWy4uLm5ld1BsYXllclRpbGVzXSxcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCBqc2VuZCA9IHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IFwiZXB0XCIgOiBcImVndFwiLCAvLyBlbmQgcHJpc29uZXJzIG9yIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgdGltZXN0YW1wOiBuZXdTeW5jc3RhbXAsIC8vIGZvciBkYXRhIHN5bmMgbG9naWNcclxuICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LFxyXG4gICAgICAgIHB0aWxlczogbmV3UGxheWVyVGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4sIC8vIG1heSBoYXZlIGVuZGVkIHRoZSBnYW1lXHJcbiAgICAgICAgbW92ZTogbmV3TW92ZSwgLy8gdGhlIG1vdmUgdGhhdCB3YXMgbWFkZVxyXG4gICAgICAgIHJlc2N1ZXM6IG5ld1Jlc2N1ZXMgLy8gbWF5IGhhdmUgcmVzY3VlZCBhbm90aGVyIHByaXNvbmVyXHJcbiAgICAgIH07XHJcbiAgICAgIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8ganNlbmQucHRpbGVzID0gbmV3UGxheWVyVGlsZXMgOiBqc2VuZC5ndGlsZXMgPSBuZXdQbGF5ZXJUaWxlcztcclxuICAgICAgc2VuZE5leHRNZXNzYWdlKGpzZW5kKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBzd2FwUGxheWVyc1RpbGVzID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGlsZXMubGVuZ3RoIDwgcmFja3NpemUpIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJOZWVkIFwiICsgcmFja3NpemUgKyBcIiB0aWxlcyBpbiB0aGUgYmFnIHRvIGV4Y2hhbmdlXCIpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFNuYXQoYFN3YXBwaW5nIHJhY2suYCk7XHJcbiAgICAgIGxldCBuZXdQbGF5ZXJUaWxlcyA9IFtdO1xyXG4gICAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgICB3aGlsZSAobmV3UGxheWVyVGlsZXMubGVuZ3RoIDwgcmFja3NpemUgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgICBuZXdQbGF5ZXJUaWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgbmV3UGxheWVyVGlsZXMuc29ydCgpO1xyXG4gICAgICBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IG5ld1RpbGVzID0gWy4uLm5ld1RpbGVzLCAuLi5zbmFwc2hvdC5wdGlsZXNdIDogbmV3VGlsZXMgPSBbLi4ubmV3VGlsZXMsIC4uLnNuYXBzaG90Lmd0aWxlc107XHJcbiAgICAgIG5ld1RpbGVzLnNvcnQoKTtcclxuICAgICAgbGV0IG5ld01vdmUgPSB7Ynk6IHBhcnRpY2lwYW50LCB0eXBlOiBjLk1PVkVfVFlQRV9TV0FQfTtcclxuICAgICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgICAgbGV0IG5ld1N5bmNzdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgIHNldFN5bmNzdGFtcChuZXdTeW5jc3RhbXApO1xyXG4gICAgICBzZXRTcXVhcmVBcnJheShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNuYXBzaG90LnNxdWFyZUFycmF5KSkpOyAvLyBEZWVwIGNvcHlcclxuICAgICAgc2V0V2hvc2V0dXJuKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gYy5XSE9TRV9UVVJOX0dVQVJEUyA6IGMuV0hPU0VfVFVSTl9QUklTT05FUlMpO1xyXG4gICAgICBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IHNldFB0aWxlcyhuZXdQbGF5ZXJUaWxlcykgOiBzZXRHdGlsZXMobmV3UGxheWVyVGlsZXMpO1xyXG4gICAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgIHNxdWFyZUFycmF5OiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNuYXBzaG90LnNxdWFyZUFycmF5KSksIC8vIERlZXAgY29weVxyXG4gICAgICAgIHB0aWxlczogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBbLi4ubmV3UGxheWVyVGlsZXNdIDogWy4uLnB0aWxlc10sXHJcbiAgICAgICAgZ3RpbGVzOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IFsuLi5ndGlsZXNdIDogWy4uLm5ld1BsYXllclRpbGVzXSxcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCBqc2VuZCA9IHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IFwiZXB0XCIgOiBcImVndFwiLCAvLyBlbmQgcHJpc29uZXJzIG9yIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgdGltZXN0YW1wOiBuZXdTeW5jc3RhbXAsIC8vIGZvciBkYXRhIHN5bmMgbG9naWNcclxuICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LFxyXG4gICAgICAgIHdob3NldHVybjogYy5XSE9TRV9UVVJOX0dVQVJEUywgLy8gc3dhcCBuZXZlciBlbmRzIHRoZSBnYW1lIHNvIGdvIHRvIG9wcG9uZW50XHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgbW92ZTogbmV3TW92ZSAvLyB0aGUgbW92ZSB0aGF0IHdhcyBtYWRlXHJcbiAgICAgIH07XHJcbiAgICAgIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8ganNlbmQucHRpbGVzID0gbmV3UGxheWVyVGlsZXMgOiBqc2VuZC5ndGlsZXMgPSBuZXdQbGF5ZXJUaWxlcztcclxuICAgICAgc2VuZE5leHRNZXNzYWdlKGpzZW5kKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gaXNQbGF5VmFsaWQoKSB7XHJcbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHdvcmQgc2luY2UgaXQgYWZmZWN0cyB0aGUgdmFsaWRpdHkgcnVsZXNcclxuICAgICAgbGV0IGZpcnN0V29yZCA9IHRydWU7XHJcbiAgICAgIGxldCBudW1tb3ZlcyA9IG1vdmVzLmxlbmd0aDtcclxuICAgICAgZm9yICh2YXIgbW92ZWluZGV4ID0gMDsgZmlyc3RXb3JkICYmIChtb3ZlaW5kZXggPCBudW1tb3Zlcyk7ICsrbW92ZWluZGV4KSB7XHJcbiAgICAgICAgaWYgKG1vdmVzW21vdmVpbmRleF0udHlwZSA9PT0gYy5NT1ZFX1RZUEVfUExBWSkge1xyXG4gICAgICAgICAgZmlyc3RXb3JkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIEZpcnN0IHdvcmQgbXVzdCBoaXQgY2VudGVyIHNxdWFyZVxyXG4gICAgICBpZiAoZmlyc3RXb3JkICYmIHNxdWFyZUFycmF5W21pZGRsZV1bbWlkZGxlXS51c2VkYnkgPT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwiRmlyc3QgcGxheSBtdXN0IGhpdCBjZW50ZXIgc3F1YXJlXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICAvLyBBdCBsZWFzdCAxIHRpbGUgbXVzdCBiZSBwbGF5ZWRcclxuICAgICAgaWYgKGN1cnJlbnRjb29yZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwiWW91IGRpZG4ndCBwbGF5IGFueSB0aWxlc1wiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgLyogR28gdGhyb3VnaCBlYWNoIHBsYXllZCB0aWxlXHJcbiAgICAgICAgICBNYWtlIHN1cmUgaXQgaXMgbm90IGlzb2xhdGVkIGZyb20gYWxsIHRoZSBvdGhlciB0aWxlc1xyXG4gICAgICAgICAgRGV0ZXJtaW5lIHRoZSBsb3dlc3QgYW5kIGhpZ2hlc3Qgcm93IGFuZCBjb2x1bW4gbnVtYmVycyBvZiB0aWxlcyBwbGF5ZWQgdGhpcyBtb3ZlXHJcbiAgICAgICovXHJcbiAgICAgIGxldCBudW1jb29yZHMgPSBjdXJyZW50Y29vcmRzLmxlbmd0aDtcclxuICAgICAgbGV0IGxvd3JvdyA9IGVkZ2UrMTtcclxuICAgICAgbGV0IGhpZ2hyb3cgPSAtMTtcclxuICAgICAgbGV0IGxvd2NvbCA9IGVkZ2UrMTtcclxuICAgICAgbGV0IGhpZ2hjb2wgPSAtMTtcclxuICAgICAgZm9yICh2YXIgY29vcmQ9MDsgY29vcmQgPCBudW1jb29yZHM7ICsrY29vcmQpIHsgLy8gRWFjaCB0aWxlIHBsYXllZCB0aGlzIG1vdmVcclxuICAgICAgICBsZXQgdGVtcHJvdyA9IHBhcnNlSW50KGN1cnJlbnRjb29yZHNbY29vcmRdLnNwbGl0KFwiLVwiKVswXSk7XHJcbiAgICAgICAgbGV0IHRlbXBjb2wgPSBwYXJzZUludChjdXJyZW50Y29vcmRzW2Nvb3JkXS5zcGxpdChcIi1cIilbMV0pO1xyXG4gICAgICAgIGlmICh0ZW1wcm93IDwgbG93cm93KSB7IGxvd3JvdyA9IHRlbXByb3c7fVxyXG4gICAgICAgIGlmICh0ZW1wcm93ID4gaGlnaHJvdykgeyBoaWdocm93ID0gdGVtcHJvdzt9XHJcbiAgICAgICAgaWYgKHRlbXBjb2wgPCBsb3djb2wpIHsgbG93Y29sID0gdGVtcGNvbDt9XHJcbiAgICAgICAgaWYgKHRlbXBjb2wgPiBoaWdoY29sKSB7IGhpZ2hjb2wgPSB0ZW1wY29sO31cclxuICAgICAgICAvLyBNYWtlIHN1cmUgdGhlcmUgaXMgYW5vdGhlciB0aWxlIGltbWVkaWF0ZWx5IGFib3ZlLCBiZWxvdywgbGVmdCwgb3IgcmlnaHQgKG5vdCBpc29sYXRlZClcclxuICAgICAgICBpZiAoISh0ZW1wcm93ID4gMCAmJiBzcXVhcmVBcnJheVt0ZW1wcm93LTFdW3RlbXBjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpICYmXHJcbiAgICAgICAgICAhKHRlbXBjb2wgPiAwICYmIHNxdWFyZUFycmF5W3RlbXByb3ddW3RlbXBjb2wtMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgJiZcclxuICAgICAgICAgICEodGVtcHJvdyA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbdGVtcHJvdysxXVt0ZW1wY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSAmJlxyXG4gICAgICAgICAgISh0ZW1wY29sIDwgZWRnZSAmJiBzcXVhcmVBcnJheVt0ZW1wcm93XVt0ZW1wY29sKzFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiRWFjaCBwbGF5ZWQgdGlsZSBtdXN0IGJlIHBhcnQgb2YgYSB3b3JkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gVXNpbmcgdGhlIGhpZ2ggYW5kIGxvdyB2YWx1ZXMsIGNoZWNrIGlmIHRoZSBwbGF5IGlzIGluIGEgc3RyYWlnaHQgbGluZVxyXG4gICAgICBpZiAobG93cm93ICE9PSBoaWdocm93ICYmIGxvd2NvbCAhPT0gaGlnaGNvbCkge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcIlRpbGVzIHBsYXllZCBtdXN0IGJlIGluIGEgc3RyYWlnaHQgbGluZVwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHBsYXl0aHJ1ID0gZmFsc2U7XHJcbiAgICAgIGxldCBob29rbWFkZSA9IGZhbHNlO1xyXG4gICAgICAvKiBUcmF2ZXJzZSBmcm9tIGZpcnN0IHBsYXllZCB0aWxlIHRvIGxhc3QgcGxheWVyIHRpbGVcclxuICAgICAgICAgIE1ha2Ugc3VyZSB0aGVyZSBhcmUgbm8gdW51c2VkIHNxdWFyZXMgaW5iZXR3ZWVuIChnYXBzIGluIHRoZSBwbGF5ZWQgd29yZClcclxuICAgICAgICAgIENoZWNrIGlmIHdlIHBsYXllZCB0aHJvdWdoIGV4aXN0aW5nIHRpbGVzXHJcbiAgICAgICAgICBDaGVjayBpZiB3ZSBob29rZWQgZXhpc3RpbmcgdGlsZXMvd29yZHNcclxuICAgICAgKi9cclxuICAgICAgZm9yICh2YXIgdGVtcHJvdyA9IGxvd3JvdzsgdGVtcHJvdyA8PSBoaWdocm93OyArK3RlbXByb3cpIHtcclxuICAgICAgICBmb3IgKHZhciB0ZW1wY29sID0gbG93Y29sOyB0ZW1wY29sIDw9IGhpZ2hjb2w7ICsrdGVtcGNvbCkge1xyXG4gICAgICAgICAgaWYgKHNxdWFyZUFycmF5W3RlbXByb3ddW3RlbXBjb2xdLnVzZWRieSA9PT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiVGhlcmUgaXMgYSBnYXAgaW4geW91ciB3b3JkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIWZpcnN0V29yZCkgeyAvLyBQbGF5IHRocm91Z2ggYW5kIGhvb2sgbm90IHBvc3NpYmxlIG9uIGZpcnN0IG1vdmVcclxuICAgICAgICAgICAgbGV0IHRlbXBjb29yZCA9IHRlbXByb3cgKyBcIi1cIiArIHRlbXBjb2w7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50Y29vcmRzLmluZGV4T2YodGVtcGNvb3JkKSA8IDApIHsgLy8gVGlsZSB3YXMgbm90IHBsYXllZCB0aGlzIG1vdmUgKHdhcyBhbHJlYWR5IG9uIHRoZSBib2FyZClcclxuICAgICAgICAgICAgICBwbGF5dGhydSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiB0ZW1wcm93ID4gMCAmJiBzcXVhcmVBcnJheVt0ZW1wcm93LTFdW3RlbXBjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgdGVtcHJvdyA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbdGVtcHJvdysxXVt0ZW1wY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIHRlbXBjb2wgPiAwICYmIHNxdWFyZUFycmF5W3RlbXByb3ddW3RlbXBjb2wtMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiB0ZW1wY29sIDwgZWRnZSAmJiBzcXVhcmVBcnJheVt0ZW1wcm93XVt0ZW1wY29sKzFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgaG9va21hZGUgPSB0cnVlOyB9ICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFmaXJzdFdvcmQpIHtcclxuICAgICAgICAvLyBXZSBhbHJlYWR5IGZvdW5kIHBsYXkgdGhyb3VnaCBhIHRpbGUgYmV0d2VlbiBmaXJzdCBhbmQgbGFzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIC8vIE5vdyBjaGVjayBpZiBwbGF5ZWQgd29yZCBoYXMgYSB0aWxlIGJlZm9yZSBmaXJzdCBvciBhZnRlciBsYXN0IHBsYXllZCB0aWxlXHJcbiAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiBsb3djb2wgPiAwICYmIHNxdWFyZUFycmF5W2xvd3Jvd11bbG93Y29sLTFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiBoaWdoY29sIDwgZWRnZSAmJiBzcXVhcmVBcnJheVtsb3dyb3ddW2hpZ2hjb2wrMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGxvd3JvdyA+IDAgJiYgc3F1YXJlQXJyYXlbbG93cm93LTFdW2xvd2NvbF0gIT09IGMuVVNFRF9CWV9OT05FKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgaGlnaHJvdyA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbaGlnaHJvdysxXVtsb3djb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICAgICAgLy8gTm93IHdlIGhhdmUgZnVsbHkgaWRlbnRpZmllZCBwbGF5IHRocm91Z2ggd2UgY2FuIG1ha2Ugc3VyZSB0aGV5IHBsYXllZCB0aHJvdWdoIG9yIG1hZGUgYSBob29rXHJcbiAgICAgICAgLy8gVGhpcyBpbiBtYW5kYXRvcnkgc2luY2UgaXQgaXMgbm90IHRoZSBmaXJzdCBtb3ZlXHJcbiAgICAgICAgaWYgKCFwbGF5dGhydSAmJiAhaG9va21hZGUpIHtcclxuICAgICAgICAgIHdpbmRvdy5hbGVydChcIk5ldyB3b3JkcyBtdXN0IGV4dGVuZCBhbiBleGlzdGluZyB3b3JkIGFuZC9vciBob29rIGV4aXN0aW5nIHdvcmRzIG9yIHRpbGVzXCIpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFBsYXlJbmZvKCkge1xyXG4gICAgICBsZXQgcGxheWluZm8gPSB7fTtcclxuICAgICAgbGV0IG1haW53b3JkID0gXCJcIjtcclxuICAgICAgbGV0IGV4dHJhd29yZHMgPSBbXTtcclxuICAgICAgbGV0IHdvcmRzdGFydGNvb3JkID0gXCJcIjtcclxuICAgICAgbGV0IG51bXJvd3MgPSBlZGdlKzE7XHJcbiAgICAgIGxldCBudW1jb2xzID0gZWRnZSsxO1xyXG4gICAgICBsZXQgbG93cm93ID0gbnVtcm93cztcclxuICAgICAgbGV0IGhpZ2hyb3cgPSAtMTtcclxuICAgICAgbGV0IGxvd2NvbCA9IG51bWNvbHM7XHJcbiAgICAgIGxldCBoaWdoY29sID0gLTE7XHJcbiAgICAgIGxldCBudW1jb29yZHMgPSBjdXJyZW50Y29vcmRzLmxlbmd0aDtcclxuICAgICAgZm9yICh2YXIgY29vcmQ9MDsgY29vcmQgPCBudW1jb29yZHM7ICsrY29vcmQpIHtcclxuICAgICAgICBsZXQgcm93ID0gcGFyc2VJbnQoY3VycmVudGNvb3Jkc1tjb29yZF0uc3BsaXQoXCItXCIpWzBdKTtcclxuICAgICAgICBsZXQgY29sID0gcGFyc2VJbnQoY3VycmVudGNvb3Jkc1tjb29yZF0uc3BsaXQoXCItXCIpWzFdKTtcclxuICAgICAgICBpZiAocm93IDwgbG93cm93KSB7XHJcbiAgICAgICAgICBsb3dyb3cgPSByb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyb3cgPiBoaWdocm93KSB7XHJcbiAgICAgICAgICBoaWdocm93ID0gcm93O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sIDwgbG93Y29sKSB7XHJcbiAgICAgICAgICBsb3djb2wgPSBjb2w7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2wgPiBoaWdoY29sKSB7XHJcbiAgICAgICAgICBoaWdoY29sID0gY29sO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobG93cm93IDwgaGlnaHJvdyB8fCBudW1jb29yZHMgPT09IDEpIHsgLy8gdGlsZXMgcGxhY2VkIG9uIGRpZmZlcmVuY2Ugcm93cyBzbyBwbGF5IGlzIHZlcnRpY2FsLCBvciBzaW5nbGUgdGlsZSBwbGF5ZWRcclxuICAgICAgICBsZXQgY29sID0gbG93Y29sOyAvLyBsb3djb2wgYW5kIGhpZ2hjb2wgd2lsbCBoYXZlIHRoZSBzYW1lIHZhbHVlXHJcbiAgICAgICAgLy8gZmluZCB0aGUgbG93ZXN0IHJvdyBudW1iZXIgb2YgdGhlIG1haW4gd29yZCwgd2hpY2ggbWF5IGJlIGxvd2VyIHRoYW4gdGhhdCBvZiB0aGUgZmlyc3QgcGxheWVkIHRpbGVcclxuICAgICAgICBsZXQgbG93ZXN0cm93ID0gbG93cm93O1xyXG4gICAgICAgIHdoaWxlIChsb3dlc3Ryb3cgPiAwICYmIHNxdWFyZUFycmF5W2xvd2VzdHJvdy0xXVtjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgIGxvd2VzdHJvdyA9IGxvd2VzdHJvdyAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZpbmQgdGhlIGhpZ2hlc3Qgcm93IG51bWJlciBvZiB0aGUgbWFpbiB3b3JkLCB3aGljaCBtYXkgYmUgaGlnaGVyIHRoYW4gdGhhdCBvZiB0aGUgbGFzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIGxldCBoaWdoZXN0cm93ID0gaGlnaHJvdztcclxuICAgICAgICB3aGlsZSAoaGlnaGVzdHJvdyA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbaGlnaGVzdHJvdysxXVtjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgIGhpZ2hlc3Ryb3cgPSBoaWdoZXN0cm93ICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd29yZHN0YXJ0Y29vcmQgPSBjLkJPQVJEX0NPTF9IRUFERVJTW2NvbF0gKyBjLkJPQVJEX1JPV19IRUFERVJTW2xvd2VzdHJvd107IC8vIHZlcnRpY2FsIHBsYXkgY29vcmRzIHN0YXJ0IHdpdGggY29sIGhlYWRlclxyXG4gICAgICAgIGZvciAodmFyIHJvdyA9IGxvd2VzdHJvdzsgcm93IDw9IGhpZ2hlc3Ryb3c7ICsrcm93KSB7XHJcbiAgICAgICAgICBtYWlud29yZCA9IG1haW53b3JkICsgc3F1YXJlQXJyYXlbcm93XVtjb2xdLmxldHRlcjtcclxuICAgICAgICAgIGxldCBjb29yZCA9IHJvdyArIFwiLVwiICsgY29sO1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCkgPiAtMSkgeyAvLyBUaGlzIHRpbGUgd2FzIHBsYXllZCwgY2hlY2sgZm9yIGhvb2tzXHJcbiAgICAgICAgICAgIGxldCBsb3dlc3Rjb2wgPSBjb2w7XHJcbiAgICAgICAgICAgIHdoaWxlIChsb3dlc3Rjb2wgPiAwICYmIHNxdWFyZUFycmF5W3Jvd11bbG93ZXN0Y29sLTFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgICBsb3dlc3Rjb2wgPSBsb3dlc3Rjb2wgLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBoaWdoZXN0Y29sID0gY29sO1xyXG4gICAgICAgICAgICB3aGlsZSAoaGlnaGVzdGNvbCA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbcm93XVtoaWdoZXN0Y29sKzFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgICBoaWdoZXN0Y29sID0gaGlnaGVzdGNvbCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxvd2VzdGNvbCA8IGhpZ2hlc3Rjb2wpIHsgLy8gaG9vayB3YXMgbWFkZVxyXG4gICAgICAgICAgICAgIGxldCBleHRyYXdvcmQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIHRlbXBjb2wgPSBsb3dlc3Rjb2w7IHRlbXBjb2wgPD0gaGlnaGVzdGNvbDsgKyt0ZW1wY29sKSB7XHJcbiAgICAgICAgICAgICAgICBleHRyYXdvcmQgPSBleHRyYXdvcmQgKyBzcXVhcmVBcnJheVtyb3ddW3RlbXBjb2xdLmxldHRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZXh0cmF3b3JkcyA9IFsuLi5leHRyYXdvcmRzLCBleHRyYXdvcmRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYWlud29yZC5sZW5ndGggPCAyKSB7IC8vIEhvcml6b250YWwgcGxheSBvciBzaW5nbGUgdGlsZSBkcm9wIHRoYXQgY2Fubm90IGJlIGEgdmVydGljYWwgcGxheVxyXG4gICAgICAgIGxldCByb3cgPSBsb3dyb3c7IC8vIGxvd3JvdyBhbmQgaGlnaHJvdyB3aWxsIGhhdmUgdGhlIHNhbWUgdmFsdWVcclxuICAgICAgICAvLyBmaW5kIHRoZSBsb3dlc3QgY29sIG51bWJlciBvZiB0aGUgbWFpbiB3b3JkLCB3aGljaCBtYXkgYmUgbG93ZXIgdGhhbiB0aGF0IG9mIHRoZSBmaXJzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIGxldCBsb3dlc3Rjb2wgPSBsb3djb2w7XHJcbiAgICAgICAgd2hpbGUgKGxvd2VzdGNvbCA+IDAgJiYgc3F1YXJlQXJyYXlbcm93XVtsb3dlc3Rjb2wtMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgbG93ZXN0Y29sID0gbG93ZXN0Y29sIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZmluZCB0aGUgaGlnaGVzdCBjb2wgbnVtYmVyIG9mIHRoZSBtYWluIHdvcmQsIHdoaWNoIG1heSBiZSBoaWdoZXIgdGhhbiB0aGF0IG9mIHRoZSBsYXN0IHBsYXllZCB0aWxlXHJcbiAgICAgICAgbGV0IGhpZ2hlc3Rjb2wgPSBoaWdoY29sO1xyXG4gICAgICAgIHdoaWxlIChoaWdoZXN0Y29sIDwgZWRnZSAmJiBzcXVhcmVBcnJheVtyb3ddW2hpZ2hlc3Rjb2wrMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgaGlnaGVzdGNvbCA9IGhpZ2hlc3Rjb2wgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3b3Jkc3RhcnRjb29yZCA9IGMuQk9BUkRfUk9XX0hFQURFUlNbcm93XSArIGMuQk9BUkRfQ09MX0hFQURFUlNbbG93ZXN0Y29sXTsgLy8gaG9yaXpvbnRhbCBwbGF5IGNvb3JkcyBzdGFydCB3aXRoIHJvdyBoZWFkZXJcclxuICAgICAgICBtYWlud29yZCA9IFwiXCI7IC8vIEluIGNhc2Ugd2UgZ290IGEgMSBsZXR0ZXIgbWFpbndvcmQgaW4gdGhlIHByZXZpb3VzIGJsb2NrXHJcbiAgICAgICAgZXh0cmF3b3JkcyA9IFtdOyAvLyBEaXR0b1xyXG4gICAgICAgIGZvciAodmFyIGNvbCA9IGxvd2VzdGNvbDsgY29sIDw9IGhpZ2hlc3Rjb2w7ICsrY29sKSB7XHJcbiAgICAgICAgICBtYWlud29yZCA9IG1haW53b3JkICsgc3F1YXJlQXJyYXlbcm93XVtjb2xdLmxldHRlcjtcclxuICAgICAgICAgIGxldCBjb29yZCA9IHJvdyArIFwiLVwiICsgY29sO1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCkgPiAtMSkgeyAvLyBUaGlzIHRpbGUgd2FzIHBsYXllZCwgY2hlY2sgZm9yIGhvb2tzXHJcbiAgICAgICAgICAgIGxldCBsb3dlc3Ryb3cgPSByb3c7XHJcbiAgICAgICAgICAgIHdoaWxlIChsb3dlc3Ryb3cgPiAwICYmIHNxdWFyZUFycmF5W2xvd2VzdHJvdy0xXVtjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgICBsb3dlc3Ryb3cgPSBsb3dlc3Ryb3cgLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBoaWdoZXN0cm93ID0gcm93O1xyXG4gICAgICAgICAgICB3aGlsZSAoaGlnaGVzdHJvdyA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbaGlnaGVzdHJvdysxXVtjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgICBoaWdoZXN0cm93ID0gaGlnaGVzdHJvdyArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxvd2VzdHJvdyA8IGhpZ2hlc3Ryb3cpIHsgLy8gaG9vayB3YXMgbWFkZVxyXG4gICAgICAgICAgICAgIGxldCBleHRyYXdvcmQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIHRlbXByb3cgPSBsb3dlc3Ryb3c7IHRlbXByb3cgPD0gaGlnaGVzdHJvdzsgKyt0ZW1wcm93KSB7XHJcbiAgICAgICAgICAgICAgICBleHRyYXdvcmQgPSBleHRyYXdvcmQgKyBzcXVhcmVBcnJheVt0ZW1wcm93XVtjb2xdLmxldHRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZXh0cmF3b3JkcyA9IFsuLi5leHRyYXdvcmRzLCBleHRyYXdvcmRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBpbnZhbGlkd29yZHMgPSBhd2FpdCB2YWxpZGF0ZVdvcmRzKG1haW53b3JkLCBleHRyYXdvcmRzKTtcclxuICAgICAgcGxheWluZm8gPSB7bWFpbndvcmQ6IG1haW53b3JkLCBleHRyYXdvcmRzOiBleHRyYXdvcmRzLCBwb3M6IHdvcmRzdGFydGNvb3JkLCBpbnZhbGlkd29yZHM6IGludmFsaWR3b3Jkc307XHJcbiAgICAgIHJldHVybiBwbGF5aW5mbztcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZVdvcmRzKG1haW53b3JkLCBleHRyYXdvcmRzKSB7XHJcbiAgICAgIC8vIEJ1aWxkIGNvbXBsZXRlIGxpc3Qgb2YgbmV3bHkgZm9ybWVkIHdvcmRzIGZvciB2YWxpZGF0aW9uIGFnYWluc3QgbGV4aWNvblxyXG4gICAgICBsZXQgYWxsd29yZHMgPSBtYWlud29yZDtcclxuICAgICAgZXh0cmF3b3Jkcy5mb3JFYWNoKChldykgPT4ge1xyXG4gICAgICAgIGFsbHdvcmRzID0gYWxsd29yZHMgKyBcIixcIiArIGV3O1xyXG4gICAgICB9KVxyXG4gICAgICBsZXQgdXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VOQUJMRTJLP3ZhbGlkYXRlPScgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20vRU5BQkxFMks/dmFsaWRhdGU9J1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGFsbHdvcmRzLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xyXG4gICAgICBjb25zdCBqZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGpkYXRhLmludmFsaWR3b3JkcztcclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIGFsbG93VW5kb0xhc3RUdXJuKCkge1xyXG4gICAgICBpZiAoIWFsbG93UmV3aW5kKSB7XHJcbiAgICAgICAgc2V0QWxsb3dSZXdpbmQodHJ1ZSk7XHJcbiAgICAgICAgc2VuZE5leHRNZXNzYWdlKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICAgIGZ1bmM6IFwiYWxsb3d1bmRvXCIsIC8vIGFsbG93IHVuZG8gbGFzdCB0dXJuXHJcbiAgICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQgLy8gd2hvIGlzIGFsbG93aW5nIGl0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gcGVyZm9ybVJld2luZCgpIHtcclxuICAgICAgLyogU2VuZCB1bmRvdHVybiB0byBzZXJ2ZXIgYW5kIGl0IHdpbGwgc2VuZCB0aGUgdXBkYXRlZCBnYW1lIGRhdGEgdG8gZ2FtZSBjbGllbnRzLCBpbmNsdWRpbmcgdGhpcyBvbmUgKi9cclxuICAgICAgc2VuZE5leHRNZXNzYWdlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcInVuZG90dXJuXCIgLy8gdW5kbyBsYXN0IHR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCByZWNhbGxUaWxlcyA9ICgpID0+IHtcclxuICAgICAgc2V0U3F1YXJlQXJyYXkoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzbmFwc2hvdC5zcXVhcmVBcnJheSkpKTsgLy8gRGVlcCBjb3B5XHJcbiAgICAgIHNldFB0aWxlcyhbLi4uc25hcHNob3QucHRpbGVzXSk7XHJcbiAgICAgIHNldEd0aWxlcyhbLi4uc25hcHNob3QuZ3RpbGVzXSk7XHJcbiAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgICBzZXRSY2QoWy0xLC0xLGMuRElSX05PTkVdKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBwbGF5ZXJQYXNzVHVybiA9ICgpID0+IHtcclxuICAgICAgbGV0IG5ld01vdmUgPSB7Ynk6IHBhcnRpY2lwYW50LCB0eXBlOiBjLk1PVkVfVFlQRV9QQVNTfTtcclxuICAgICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgICAgbGV0IG5ld1dob3NldHVybiA9IGlzRG91YmxlUGFzcyhuZXdNb3ZlcykgPyBjLldIT1NFX1RVUk5fR0FNRU9WRVIgOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IGMuV0hPU0VfVFVSTl9HVUFSRFMgOiBjLldIT1NFX1RVUk5fUFJJU09ORVJTOyAvLyBJZiBib3RoIHBsYXllcnMgcGFzcyB0aGVuIGVuZCB0aGUgZ2FtZVxyXG4gICAgICBsZXQgbmV3U3luY3N0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgcmVjYWxsVGlsZXMoKTsgLy8gSW4gY2FzZSB0aGV5IHB1dCBzb21lIHRpbGVzIG9uIHRoZSBib2FyZCBiZWZvcmUgY2xpY2tpbmcgUGFzc1xyXG4gICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICBzZXRTeW5jc3RhbXAobmV3U3luY3N0YW1wKTtcclxuICAgICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgICAgc2VuZE5leHRNZXNzYWdlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IFwiZXB0XCIgOiBcImVndFwiLCAvLyBlbmQgcHJpc29uZXJzIG9yIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ld1N5bmNzdGFtcCwgLy8gZm9yIGRhdGEgc3luYyBsb2dpY1xyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCwgLy8gd2hvIHBhc3NlZCB0aGVpciB0dXJuXHJcbiAgICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gZWl0aGVyIGl0IGlzIG5vdyBvcHBvbmVudHMgdHVybiBvciB0aGUgcGFzcyBlbmRlZCB0aGUgZ2FtZVxyXG4gICAgICAgICAgbW92ZTogbmV3TW92ZSAvLyB0aGUgbW92ZSB0aGF0IHdhcyBtYWRlXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcXVlc3RHYW1lRGF0YSA9ICgpID0+IHtcclxuICAgICAgc2VuZE5leHRNZXNzYWdlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LFxyXG4gICAgICAgICAgZnVuYzogXCJyZXF1ZXN0Z2FtZWRhdGFcIiwgLy8gcmVxdWVzdCBnYW1lIGRhdGFcclxuICAgICAgICAgIHN5bmNzdGFtcDogc3luY3N0YW1wIC8vIHNvIHNlcnZlciBjYW4gZGVjaWRlIHdoZXRoZXIgSSBhbSB1cCB0byBkYXRlXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCByZXF1ZXN0U3luY0RhdGEgPSAoKSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGBTZW5kIHJlcXVlc3RzeW5jZGF0YSAke3N5bmNzdGFtcH1gKTtcclxuICAgICAgc2VuZE5leHRNZXNzYWdlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LFxyXG4gICAgICAgICAgZnVuYzogXCJyZXF1ZXN0c3luY2RhdGFcIiAvLyByZXF1ZXN0IHN5bmMgZGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAocGFydGljaXBhbnQgIT09IHdob3NldHVybikge3JldHVybjt9XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgIGVuZFBsYXllcnNUdXJuKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICByZWNhbGxUaWxlcygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgbGV0dGVydGVzdCA9IC9eW0EtWmEtelxcP10kLzsgLy8gc2luZ2xlIGxldHRlciBvciBxdWVzdGlvbiBtYXJrIGtleSBwcmVzc2VkXHJcbiAgICAgIGlmIChldmVudC5rZXkubWF0Y2gobGV0dGVydGVzdCkpIHtcclxuICAgICAgICBsZXQgbGV0dGVyID0gZXZlbnQua2V5LnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgbGV0IHJhY2sgPSB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMgPyBwdGlsZXMgOiBndGlsZXM7XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGlvbiA9IHJhY2suaW5kZXhPZihsZXR0ZXIpO1xyXG4gICAgICAgIGlmIChuZXdTZWxlY3Rpb24gPT09IC0xKSB7XHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSByYWNrLmluZGV4T2YoXCI/XCIpOyAvLyBVc2UgdGhlIGJsYW5rIGlmIHRoZXkgaGF2ZSBvbmVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5ld1NlbGVjdGlvbiA+IC0xKSB7IC8vIFByZXNzZWQgbGV0dGVyIGlzIG9uIHRoZSByYWNrXHJcbiAgICAgICAgICBsZXQgcm93ID0gcmNkWzBdO1xyXG4gICAgICAgICAgbGV0IGNvbCA9IHJjZFsxXTtcclxuICAgICAgICAgIGxldCBkaXIgPSByY2RbMl07XHJcbiAgICAgICAgICBpZiAocm93ID4tMSAmJiBjb2wgPiAtMSAmJiBkaXIgIT09IGMuRElSX05PTkUpIHsgLy8gcm93LCBjb2wsIGRpciBhcmUgc2V0IHRvIGFjY2VwdCBrZXlzdHJva2VcclxuICAgICAgICAgICAgLy8gTmVlZCB0byBmaWd1cmUgb3V0IG5leHQgc3FhdXJlIHRvIGF1dG8tcGxhY2UgYSB0aWxlXHJcbiAgICAgICAgICAgIGxldCBuZXdSY2QgPSByY2Q7XHJcbiAgICAgICAgICAgIGlmIChkaXIgPT09IGMuRElSX1JJR0hUKSB7IC8vIHBsYXlpbmcgcmlnaHR3YXJkc1xyXG4gICAgICAgICAgICAgIGxldCBuZXdjID0gLTE7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgdGVtcGNvbCA9IGNvbCArIDE7IHRlbXBjb2wgPCBlZGdlICsgMSAmJiBuZXdjID09PSAtMTsgdGVtcGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3F1YXJlQXJyYXlbcm93XVt0ZW1wY29sXS51c2VkYnkgPT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICAgICAgICAgIG5ld2MgPSB0ZW1wY29sO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAobmV3YyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIG5ld1JjZCA9IFstMSwtMSxjLkRJUl9OT05FXTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3UmNkID0gW3JvdywgbmV3YywgYy5ESVJfUklHSFRdO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJvdyxjb2wsbmV3U2VsZWN0aW9uLG5ld1JjZCk7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTsgLy8gd2hlbiB0aGV5IGFyZSB0eXBpbmcgdGhleSBhcmUgbm90IHNlbGVjdGluZyByYWNrIHRpbGVzIGJ5IGNsaWNraW5nIHRoZW0gb24gdGhlIHJhY2tcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRpciA9PT0gYy5ESVJfRE9XTikgeyAvLyBwbGF5aW5nIGRvd253YXJkc1xyXG4gICAgICAgICAgICAgIGxldCBuZXdyID0gLTE7XHJcbiAgICAgICAgICAgICAgbGV0IG51bXJvd3MgPSAocmFja3NpemUqMikrMTtcclxuICAgICAgICAgICAgICBmb3IgKHZhciB0ZW1wcm93ID0gcm93ICsgMTsgdGVtcHJvdyA8IG51bXJvd3MgJiYgbmV3ciA9PT0gLTE7IHRlbXByb3crKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZUFycmF5W3RlbXByb3ddW2NvbF0udXNlZGJ5ID09PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgICAgICAgICBuZXdyID0gdGVtcHJvdztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKG5ld3IgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSY2QgPSBbLTEsLTEsYy5ESVJfTk9ORV07XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1JjZCA9IFtuZXdyLCBjb2wsIGMuRElSX0RPV05dO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJvdyxjb2wsbmV3U2VsZWN0aW9uLG5ld1JjZCk7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTsgLy8gd2hlbiB0aGV5IGFyZSB0eXBpbmcgdGhleSBhcmUgbm90IHNlbGVjdGluZyByYWNrIHRpbGVzIGJ5IGNsaWNraW5nIHRoZW0gb24gdGhlIHJhY2tcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQmFja3NwYWNlXCIgJiYgY3VycmVudGNvb3Jkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gU2FtZSBhcyBjbGlja2luZyBvbiBhIHBsYXllZC10aGlzLW1vdmUgdGlsZSBpbiB0ZXJtcyBvZiByZXR1cm5pbmcgdGhlIHRpbGUgdG8gdGhlIHJhY2tcclxuICAgICAgICAvLyBIb3dldmVyIHdlIGFsc28gd2FudCB0byBzZXQgdXAgcmNkIHNvIHRoZXkgY2FuIHByZXNzIHRoZSBrZXkgdGhleSBtZWFudCBhbmQgY29udGludWVcclxuICAgICAgICBsZXQgY29vcmQgPSBjdXJyZW50Y29vcmRzW2N1cnJlbnRjb29yZHMubGVuZ3RoIC0gMV07IC8vIHRpbGUgdG8gcmV0dXJuIHRvIHJhY2tcclxuICAgICAgICBsZXQgcm93ID0gcGFyc2VJbnQoY29vcmQuc3BsaXQoXCItXCIpWzBdKTtcclxuICAgICAgICBsZXQgY29sID0gcGFyc2VJbnQoY29vcmQuc3BsaXQoXCItXCIpWzFdKTtcclxuICAgICAgICBsZXQgbmV3Q3VycmVudGNvb3JkcyA9IFsuLi5jdXJyZW50Y29vcmRzXTtcclxuICAgICAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICAgICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgICAgIGxldCBuZXdTcXVhcmVBcnJheSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3F1YXJlQXJyYXkpKTsgLy8gRGVlcCBjb3B5XHJcbiAgICAgICAgbGV0IG5ld1NxdWFyZUFycmF5Um93ID0gbmV3U3F1YXJlQXJyYXlbcm93XTtcclxuICAgICAgICBsZXQgbmV3U3F1YXJlQXJyYXlDZWxsID0gbmV3U3F1YXJlQXJyYXlSb3dbY29sXTtcclxuICAgICAgICBsZXQgbmV3UmNkID0gWy0xLC0xLGMuRElSX05PTkVdO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3Rpb24gPSBzZWxlY3Rpb247XHJcbiAgICAgICAgbmV3Q3VycmVudGNvb3Jkcy5zcGxpY2UoY3VycmVudGNvb3Jkcy5sZW5ndGgtMSwxKTtcclxuICAgICAgICBsZXQgcmV0dXJuZWRUaWxlID0gc3F1YXJlQXJyYXlbcm93XVtjb2xdLmxldHRlcjtcclxuICAgICAgICBpZiAod2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTKSB7XHJcbiAgICAgICAgICBuZXdQdGlsZXMucHVzaChyZXR1cm5lZFRpbGUpO1xyXG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3UHRpbGVzLmxlbmd0aC0xO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXdHdGlsZXMucHVzaChyZXR1cm5lZFRpbGUpO1xyXG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3R3RpbGVzLmxlbmd0aC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdTcXVhcmVBcnJheUNlbGwudXNlZGJ5ID0gYy5VU0VEX0JZX05PTkU7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlDZWxsLmxldHRlciA9IGMuTEVUVEVSX05PTkU7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlSb3dbY29sXSA9IG5ld1NxdWFyZUFycmF5Q2VsbDtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheVtyb3ddID0gWy4uLm5ld1NxdWFyZUFycmF5Um93XTtcclxuICAgICAgICBsZXQgZGlyID0gcmNkWzJdO1xyXG4gICAgICAgIGlmIChkaXIgIT09IGMuRElSX05PTkUpIHtcclxuICAgICAgICAgIC8vIGRpcmVjdGlvbiB3YXMgc2V0IHNvIGtlZXAgaXRcclxuICAgICAgICAgIG5ld1JjZCA9IFtyb3csY29sLGRpcl07XHJcbiAgICAgICAgICBpZiAoY3VycmVudGNvb3Jkcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0aW9uID0gLTE7IC8vIGlmIHRoZXkgYmFja3NwYWNlIGFsbCB0aGUgbGV0dGVycyBvZmYgbGVhdmUgcmFjayB0aWxlIHVuc2VsZWN0ZWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q3VycmVudGNvb3JkcyhuZXdDdXJyZW50Y29vcmRzKTtcclxuICAgICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgICBzZXRTcXVhcmVBcnJheShuZXdTcXVhcmVBcnJheSk7XHJcbiAgICAgICAgc2V0UmNkKG5ld1JjZCk7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZU1vdmVDbGljayA9IChfbWkpID0+IHt9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaXNvbmJyZWFrXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWNvbnRhaW5lciB3My10ZWFsIHRvcEJhckhlaWdodFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LW1pZGRsZVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXlIZWFkaW5nRm9udFwiPlByaXNvbiBCcmVhazwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS10b3BsZWZ0IHczLWJsYWNrIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIEdhbWUgaWQ6IHtnYW1laWR9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1ib3R0b21sZWZ0IHczLW9yYW5nZSB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICBQcmlzb25lcnM6IHtcclxuICAgICAgICAgICAgICBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IG5pY2tuYW1lXHJcbiAgICAgICAgICAgICAgOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUyA/IG9wcG5hbWVcclxuICAgICAgICAgICAgICA6ICdTZWNyZXQnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktdG9wcmlnaHQgdzMtYmxhY2sgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1ib3R0b21yaWdodCB3My1vcmFuZ2UgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgR3VhcmRzOiB7XHJcbiAgICAgICAgICAgICAgcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBvcHBuYW1lXHJcbiAgICAgICAgICAgICAgOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUyA/IG5pY2tuYW1lXHJcbiAgICAgICAgICAgICAgOiAnU2VjcmV0J1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwYlRpbGVBbmRNb3Zlc091dGVyXCI+XHJcbiAgICAgICAgICAgICAgPFNob3dVbnNlZW5UaWxlc1xyXG4gICAgICAgICAgICAgICAgdGlsZXM9e3RpbGVzfVxyXG4gICAgICAgICAgICAgICAgb3RoZXJ0aWxlcz17XHJcbiAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gZ3RpbGVzXHJcbiAgICAgICAgICAgICAgICAgIDogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMgPyBwdGlsZXNcclxuICAgICAgICAgICAgICAgICAgOiBbXX0gLy8gT2JzZXJ2ZXJzIHNlZSBib3RoIHJhY2tzIHNvIG5vdGhpbmcgdG8gZXhjbHVkZSBmcm9tIHRpbGViYWcgYXMgdW5zZWVuXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxTaG93TW92ZXMgbW92ZXM9e21vdmVzfSBvbm1vdmVjbGljaz17KG1pKSA9PiBoYW5kbGVNb3ZlQ2xpY2sobWkpfS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBiUGxheWVyT3V0ZXJTZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIHtwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/XHJcbiAgICAgICAgICAgICAgPFBsYXllclNlY3Rpb25cclxuICAgICAgICAgICAgICAgIHJhY2t0aWxlcz17cHRpbGVzfVxyXG4gICAgICAgICAgICAgICAgd2hvc2V0dXJuPXt3aG9zZXR1cm59XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb249e3NlbGVjdGlvbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyh0aSkgPT4gaGFuZGxlUmFja1RpbGVDbGljayh0aSl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrRmluaXNoVHVybj17KCkgPT4gZW5kUGxheWVyc1R1cm4oKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tUaWxlUmVjYWxsPXsoKSA9PiByZWNhbGxUaWxlcygpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1RpbGVFeGNoYW5nZT17KCkgPT4gc3dhcFBsYXllcnNUaWxlcygpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1Bhc3NQbGF5PXsoKSA9PiBwbGF5ZXJQYXNzVHVybigpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1VuZG9MYXN0UGxheT17KCkgPT4gcGVyZm9ybVJld2luZCgpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja0FsbG93VW5kbz17KCkgPT4gYWxsb3dVbmRvTGFzdFR1cm4oKX1cclxuICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50PXtwYXJ0aWNpcGFudH1cclxuICAgICAgICAgICAgICAgIG1vdmVzPXttb3Zlc31cclxuICAgICAgICAgICAgICAgIGFsbG93UmV3aW5kPXthbGxvd1Jld2luZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA6cGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMgP1xyXG4gICAgICAgICAgICAgIDxQbGF5ZXJTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICByYWNrdGlsZXM9e2d0aWxlc31cclxuICAgICAgICAgICAgICAgIHdob3NldHVybj17d2hvc2V0dXJufVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IGhhbmRsZVJhY2tUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja0ZpbmlzaFR1cm49eygpID0+IGVuZFBsYXllcnNUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrVGlsZVJlY2FsbD17KCkgPT4gcmVjYWxsVGlsZXMoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tUaWxlRXhjaGFuZ2U9eygpID0+IHN3YXBQbGF5ZXJzVGlsZXMoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tQYXNzUGxheT17KCkgPT4gcGxheWVyUGFzc1R1cm4oKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tVbmRvTGFzdFBsYXk9eygpID0+IHBlcmZvcm1SZXdpbmQoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tBbGxvd1VuZG89eygpID0+IGFsbG93VW5kb0xhc3RUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudD17cGFydGljaXBhbnR9XHJcbiAgICAgICAgICAgICAgICBtb3Zlcz17bW92ZXN9XHJcbiAgICAgICAgICAgICAgICBhbGxvd1Jld2luZD17YWxsb3dSZXdpbmR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJQbGF5ZXJJbm5lclNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJQbGF5ZXJUaXRsZVwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+e2MuUEFSVFlfSUNPTl9QUklTT05FUlN9PC9pPiZuYnNwO3tjLlBBUlRZX1RJVExFX1BSSVNPTkVSU30mbmJzcDs8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntjLlBBUlRZX0lDT05fUFJJU09ORVJTfTwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICB7cHRpbGVzICYmIHB0aWxlcy5tYXAoKHQsIHRpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE9ic2VydmVyUmFja1RpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BPYnNlcnZlclByaXNvbmVyc1JhY2tUaWxlJHt0aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50PSdQJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGV2YWx1ZT17dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlaW5kZXg9e3RpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlBsYXllclRpdGxlXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57Yy5QQVJUWV9JQ09OX0dVQVJEU308L2k+Jm5ic3A7e2MuUEFSVFlfVElUTEVfR1VBUkRTfSZuYnNwOzxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+e2MuUEFSVFlfSUNPTl9HVUFSRFN9PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVyYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtndGlsZXMgJiYgZ3RpbGVzLm1hcCgodCwgdGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T2JzZXJ2ZXJSYWNrVGlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YE9ic2VydmVyR3VhcmRzUmFja1RpbGUke3RpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnQ9J0cnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZXZhbHVlPXt0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVpbmRleD17dGl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAge3BhcnRpY2lwYW50ID09PSB3aG9zZXR1cm4gP1xyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgb25LZXlEb3duQ2FwdHVyZT17aGFuZGxlS2V5RG93bn0+XHJcbiAgICAgICAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgICAgICAgc3F1YXJlQXJyYXk9e3NxdWFyZUFycmF5fVxyXG4gICAgICAgICAgICAgICAgICByY2Q9e3JjZH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KHJpLCBjaSkgPT4gaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyaSwgY2ksIC0xLG51bGwpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgICAgICAgc3F1YXJlQXJyYXk9e3NxdWFyZUFycmF5fVxyXG4gICAgICAgICAgICAgICAgICByY2Q9e3JjZH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge319XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDxTaG93UmVzY3VlcyByZXNjdWVzPXtyZXNjdWVzfSAvPlxyXG4gICAgICAgICAgICA8Q2hhdCBnYW1laWQ9e2dhbWVpZH0gY2xpZW50PXtjbGllbnR9IG5pY2tuYW1lPXtuaWNrbmFtZX0gbXNncz17Y2hhdG1zZ3N9IHNldE1zZ3M9e3NldENoYXRtc2dzfSBwYXJ0aWNpcGFudD17cGFydGljaXBhbnR9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1jb250YWluZXIgdzMtdGVhbCB0b3BCYXJIZWlnaHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1taWRkbGUgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICB7d2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fR0FNRU9WRVIgP1xyXG4gICAgICAgICAgICAgIDxoMT5HYW1lIE92ZXIhPC9oMT5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIDxwPntjLkpPS0VfQVJSQVlbam9rZWluZGV4XX08L3A+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtuaWNrbmFtZSAmJiBuaWNrbmFtZS5sZW5ndGggPiAzICYmIG5pY2tuYW1lLnRvVXBwZXJDYXNlKCkuc3Vic3RyaW5nKDAsNCkgPT09ICdURVNUJyAmJlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1wdXJwbGUgdzMtbW9ub3NwYWNlXCI+XHJcbiAgICAgICAgICAgIDxwPlNuYXRzIGZvciBkZWJ1Z2dpbmc6ICh7c25hdHMubGVuZ3RofSk8L3A+XHJcbiAgICAgICAgICAgIHtzbmF0cy5tYXAoKHNuYXQsaSkgPT4gKFxyXG4gICAgICAgICAgICAgPHAga2V5PXtgc25hdCR7aX1gfT4mbmJzcDt7c25hdH08L3A+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbmNvbnN0IE9ic2VydmVyUmFja1RpbGUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBzZWxlY3RlZFVuc2VsZWN0ZWQgPSBcIlVuc2VsZWN0ZWQgXCI7XHJcbiAgY29uc3QgdU5vdFUgPSBwcm9wcy50aWxldmFsdWUgPT09IFwiUVwiID8gXCJ1IFwiIDogXCJcIjtcclxuICBjb25zdCB0aWxlY2xhc3MgPSBcInBiVGlsZU9uUmFjayBcIiArIHNlbGVjdGVkVW5zZWxlY3RlZCArIHVOb3RVICsgcHJvcHMucGFydGljaXBhbnQ7XHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgICAga2V5PXtwcm9wcy50aWxlaW5kZXh9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3RpbGVjbGFzc31cclxuICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVPblJhY2tUZXh0XCI+e3Byb3BzLnRpbGV2YWx1ZX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=