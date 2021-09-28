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
    setRcd(-1, -1, _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.DIR_NONE);
    setCurrentcoords([]);
  }

  function processGameMessage(message) {
    let messageData = JSON.parse(message);

    if (messageData.gameid === gameid && messageData.type === "pb") {
      // This instance of a prison break game
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
    client.send(jsend);
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
    client.send({
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
          lineNumber: 843,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 842,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-topleft w3-black topBarCorner commonFontFamily",
        children: ["Game id: ", gameid]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 845,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-bottomleft w3-orange topBarCorner commonFontFamily",
        children: ["Prisoners: ", participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS ? nickname : participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_GUARDS ? oppname : 'Secret']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 848,
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
            lineNumber: 857,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 856,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 855,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-bottomright w3-orange topBarCorner commonFontFamily",
        children: ["Guards: ", participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS ? oppname : participant === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_GUARDS ? nickname : 'Secret']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 860,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 841,
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
          lineNumber: 870,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_movesSection__WEBPACK_IMPORTED_MODULE_5__.default, {
          moves: moves,
          onmoveclick: mi => handleMoveClick(mi)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 877,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 869,
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
          lineNumber: 881,
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
          lineNumber: 897,
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
              lineNumber: 914,
              columnNumber: 48
            }, undefined), "\xA0", _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TITLE_PRISONERS, "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_ICON_PRISONERS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 914,
              columnNumber: 143
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 914,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbTilerack",
            children: ptiles && ptiles.map((t, ti) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ObserverRackTile, {
              participant: "P",
              tilevalue: t,
              tileindex: ti
            }, `ObserverPrisonersRackTile${ti}`, false, {
              fileName: _jsxFileName,
              lineNumber: 917,
              columnNumber: 23
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 915,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbPlayerTitle",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_ICON_GUARDS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 925,
              columnNumber: 48
            }, undefined), "\xA0", _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TITLE_GUARDS, "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_ICON_GUARDS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 925,
              columnNumber: 137
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 925,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbTilerack",
            children: gtiles && gtiles.map((t, ti) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ObserverRackTile, {
              participant: "G",
              tilevalue: t,
              tileindex: ti
            }, `ObserverGuardsRackTile${ti}`, false, {
              fileName: _jsxFileName,
              lineNumber: 928,
              columnNumber: 23
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 926,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 913,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 879,
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
            lineNumber: 942,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 941,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_board__WEBPACK_IMPORTED_MODULE_3__.default, {
            squareArray: squareArray,
            rcd: rcd,
            onClick: () => {}
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 950,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 949,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 939,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_rescuesSection__WEBPACK_IMPORTED_MODULE_6__.default, {
          rescues: rescues
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 959,
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
          lineNumber: 960,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 958,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 868,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-display-container w3-teal topBarHeight",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-middle commonFontFamily",
        children: whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.WHOSE_TURN_GAMEOVER ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Game Over!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 966,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.JOKE_ARRAY[jokeindex]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 968,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 964,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 963,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 840,
    columnNumber: 7
  }, undefined);
};

_s(Game, "F59tHzoJXIEcF4jBgNhoME6BO0Y=", false, function () {
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
      lineNumber: 985,
      columnNumber: 11
    }, undefined)
  }, props.tileindex, false, {
    fileName: _jsxFileName,
    lineNumber: 981,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvZ2FtZS5qcyJdLCJuYW1lcyI6WyJHYW1lIiwic2V0V2hlcmV0byIsImlzcmVqb2luIiwicGFydGljaXBhbnQiLCJnYW1laWQiLCJuaWNrbmFtZSIsIndzbWVzc2FnZSIsImNsaWVudCIsInJhY2tzaXplIiwic3luY3N0YW1wIiwic2V0U3luY3N0YW1wIiwidXNlU3RhdGUiLCJtaWRkbGUiLCJlZGdlIiwiaW5pdGlhbHRpbGVzIiwiYyIsInRpbGVzIiwic2V0VGlsZXMiLCJwdGlsZXMiLCJzZXRQdGlsZXMiLCJndGlsZXMiLCJzZXRHdGlsZXMiLCJzcXVhcmVBcnJheSIsInNldFNxdWFyZUFycmF5Iiwic2VsZWN0aW9uIiwic2V0U2VsZWN0aW9uIiwid2hvc2V0dXJuIiwic2V0V2hvc2V0dXJuIiwiY3VycmVudGNvb3JkcyIsInNldEN1cnJlbnRjb29yZHMiLCJyZXNjdWVzIiwic2V0UmVzY3VlcyIsInJjZCIsInNldFJjZCIsIm1vdmVzIiwic2V0TW92ZXMiLCJzbmFwc2hvdCIsInNldFNuYXBzaG90Iiwiam9rZWluZGV4Iiwic2V0Sm9rZWluZGV4IiwiYWxsb3dSZXdpbmQiLCJzZXRBbGxvd1Jld2luZCIsIm9wcG5hbWUiLCJzZXRPcHBuYW1lIiwiY2hhdG1zZ3MiLCJzZXRDaGF0bXNncyIsInByZXZSZXNjdWVzIiwidXNlUHJldmlvdXMiLCJ1c2VFZmZlY3QiLCJpbml0aWFsaXplUm91dGluZSIsIm1zZyIsInByb2Nlc3NHYW1lTWVzc2FnZSIsInNjcm9sbFRvQm90dG9tIiwibXlhdWRpbyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsInBsYXkiLCJuZXdqaSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJyZXF1ZXN0U3luY0RhdGEiLCJjbGVhckludGVydmFsIiwiZmlyc3RTcXVhcmVBcnJheSIsImluaXRpYWxTcXVhcmVBcnJheSIsInJlam9pbkdhbWUiLCJzdGFydEdhbWUiLCJqb2luR2FtZSIsInN0YXJ0T2JzZXJ2aW5nR2FtZSIsIm5ld1N5bmNzdGFtcCIsIkRhdGUiLCJub3ciLCJ0ZW1wUFRpbGVzIiwidGVtcEdUaWxlcyIsInRlbXBUaWxlcyIsImxlbmd0aCIsInJhbmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwdXNoIiwic3BsaWNlIiwic29ydCIsInNlbmQiLCJ0eXBlIiwiZnVuYyIsInRpbWVzdGFtcCIsInNlbmRlciIsInBuYW1lIiwiZ25hbWUiLCJwdXRBdE1vdmVTdGFydCIsIm1lc3NhZ2UiLCJtZXNzYWdlRGF0YSIsIkpTT04iLCJwYXJzZSIsImdkIiwiYnVpbGRHYW1lZGF0YUZyb21BcGlkYXRhIiwiYXBpZGF0YSIsIm5ld1NuYXBzaG90Iiwic3RyaW5naWZ5IiwibmV3Q2hhdG1zZ3MiLCJmcm9tIiwic2VuZG1zZyIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0R2FtZURhdGEiLCJoYW5kbGVCb2FyZFNxdWFyZUNsaWNrIiwicmkiLCJjaSIsIm5ld1NlbGVjdGlvbiIsIm5ld1JjZCIsIm5ld1NxdWFyZUFycmF5IiwibmV3U3F1YXJlQXJyYXlSb3ciLCJuZXdTcXVhcmVBcnJheUNlbGwiLCJuZXdQdGlsZXMiLCJuZXdHdGlsZXMiLCJuZXdDdXJyZW50Y29vcmRzIiwiY29vcmQiLCJTdHJpbmciLCJjY2kiLCJpbmRleE9mIiwidXNlZGJ5Iiwic2VsZWN0ZWRUaWxlIiwibGV0dGVyIiwibmV3RGlyZWN0aW9uIiwiaGFuZGxlUmFja1RpbGVDbGljayIsInRpbGVpbmRleCIsIm5ld3JhY2siLCJtb3ZlZnJvbSIsIm1vdmV0aWxlIiwibW92ZXRvIiwiZW5kUGxheWVyc1R1cm4iLCJpc1BsYXlWYWxpZCIsInBsYXlpbmZvIiwiZ2V0UGxheUluZm8iLCJpbnZhbGlkd29yZHMiLCJhbGVydCIsImpvaW4iLCJyZXBsYWNlIiwidG9VcHBlckNhc2UiLCJuZXdSZXNjdWVzIiwiZXNjYXBlaGF0Y2hlcyIsImkiLCJuZXdQbGF5ZXJUaWxlcyIsIm5ld1RpbGVzIiwibmV3V2hvc2V0dXJuIiwiYW55VW51c2VkRXNjYXBlSGF0Y2hlcyIsIm5ld01vdmUiLCJieSIsIm1haW53b3JkIiwiZXh0cmF3b3JkcyIsInBvcyIsIm5ld01vdmVzIiwianNlbmQiLCJtb3ZlIiwic3dhcFBsYXllcnNUaWxlcyIsIndpbmRvdyIsIk1PVkVfVFlQRV9TV0FQIiwiZmlyc3RXb3JkIiwibnVtbW92ZXMiLCJtb3ZlaW5kZXgiLCJudW1jb29yZHMiLCJsb3dyb3ciLCJoaWdocm93IiwibG93Y29sIiwiaGlnaGNvbCIsInRlbXByb3ciLCJwYXJzZUludCIsInNwbGl0IiwidGVtcGNvbCIsInBsYXl0aHJ1IiwiaG9va21hZGUiLCJ0ZW1wY29vcmQiLCJ3b3Jkc3RhcnRjb29yZCIsIm51bXJvd3MiLCJudW1jb2xzIiwicm93IiwiY29sIiwibG93ZXN0cm93IiwiaGlnaGVzdHJvdyIsImxvd2VzdGNvbCIsImhpZ2hlc3Rjb2wiLCJleHRyYXdvcmQiLCJ2YWxpZGF0ZVdvcmRzIiwiYWxsd29yZHMiLCJmb3JFYWNoIiwiZXciLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJqZGF0YSIsImpzb24iLCJhbGxvd1VuZG9MYXN0VHVybiIsInBlcmZvcm1SZXdpbmQiLCJyZWNhbGxUaWxlcyIsInBsYXllclBhc3NUdXJuIiwiTU9WRV9UWVBFX1BBU1MiLCJpc0RvdWJsZVBhc3MiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImtleSIsImxldHRlcnRlc3QiLCJtYXRjaCIsInJhY2siLCJkaXIiLCJuZXdjIiwibmV3ciIsInJldHVybmVkVGlsZSIsImhhbmRsZU1vdmVDbGljayIsIl9taSIsIm1pIiwidGkiLCJQQVJUWV9JQ09OX1BSSVNPTkVSUyIsIm1hcCIsInQiLCJQQVJUWV9JQ09OX0dVQVJEUyIsIk9ic2VydmVyUmFja1RpbGUiLCJwcm9wcyIsInNlbGVjdGVkVW5zZWxlY3RlZCIsInVOb3RVIiwidGlsZXZhbHVlIiwidGlsZWNsYXNzIl0sIm1hcHBp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LENBQUNHLFNBQU4sS0FBb0IsR0FBcEIsR0FBMEIsSUFBMUIsR0FBaUMsRUFBL0M7QUFDQSxRQUFNQyxTQUFTLEdBQUcsa0JBQWtCSCxrQkFBbEIsR0FBdUNDLEtBQXZDLEdBQStDRixLQUFLLENBQUN4TixXQUF2RTtBQUNBLHNCQUNJO0FBRUksYUFBUyxFQUFFNE4sU0FGZjtBQUFBLDJCQUlJO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsZ0JBQW1DSixLQUFLLENBQUNHO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSixLQUNTSCxLQUFLLENBQUM3RixTQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVFELENBWkQ7O01BQU00RixnQjtBQWVKLCtEQUFlMU4sSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jNDg0Yzk1NWM5NWY0YmU2MDdmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG4vL2ltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFBsYXllclNlY3Rpb24gZnJvbSAnLi4vcGIvcGxheWVyU2VjdGlvbic7XHJcbmltcG9ydCBCb2FyZCBmcm9tICcuLi9wYi9ib2FyZCc7XHJcbmltcG9ydCBTaG93VW5zZWVuVGlsZXMgZnJvbSAnLi4vcGIvdW5zZWVuVGlsZXNTZWN0aW9uJztcclxuaW1wb3J0IFNob3dNb3ZlcyBmcm9tICcuLi9wYi9tb3Zlc1NlY3Rpb24nO1xyXG5pbXBvcnQgU2hvd1Jlc2N1ZXMgZnJvbSAnLi4vcGIvcmVzY3Vlc1NlY3Rpb24nO1xyXG5pbXBvcnQgQ2hhdCBmcm9tICcuLi9wYi9jaGF0U2VjdGlvbic7XHJcbmltcG9ydCAqIGFzIGMgZnJvbSAnLi4vLi4vbGliL3BiL3ByaXNvbkJyZWFrQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgaW5pdGlhbFNxdWFyZUFycmF5IH0gZnJvbSAnLi4vLi4vbGliL3BiL2luaXRpYWxTcXVhcmVBcnJheSc7XHJcbmltcG9ydCB7IGFueVVudXNlZEVzY2FwZUhhdGNoZXMgfSBmcm9tIFwiLi4vLi4vbGliL3BiL2FueVVudXNlZEVzY2FwZUhhdGNoZXNcIjtcclxuaW1wb3J0IHsgYnVpbGRHYW1lZGF0YUZyb21BcGlkYXRhIH0gZnJvbSBcIi4uLy4uL2xpYi9wYi9idWlsZEdhbWVkYXRhRnJvbUFwaWRhdGFcIjtcclxuaW1wb3J0IHsgaXNEb3VibGVQYXNzIH0gZnJvbSBcIi4uLy4uL2xpYi9wYi9pc0RvdWJsZVBhc3NcIjtcclxuaW1wb3J0IHsgc2Nyb2xsVG9Cb3R0b20gfSBmcm9tIFwiLi4vLi4vbGliL3Njcm9sbFRvQm90dG9tXCI7XHJcbmltcG9ydCB7IHVzZVByZXZpb3VzIH0gZnJvbSBcIi4uLy4uL2xpYi91c2VQcmV2aW91c1wiO1xyXG5cclxuY29uc3QgR2FtZSA9ICh7c2V0V2hlcmV0b1xyXG4gICAgLCBpc3Jlam9pblxyXG4gICAgLCBwYXJ0aWNpcGFudCAvLyBQcmlzb25lcnMsIEd1YXJkcywgb3IgT2JzZXJ2ZXIgKG5vdCBpbXBsZW1lbnRlZClcclxuICAgICwgZ2FtZWlkXHJcbiAgICAsIG5pY2tuYW1lXHJcbiAgICAsIHdzbWVzc2FnZVxyXG4gICAgLCBjbGllbnRcclxuICAgICwgcmFja3NpemU9NCAvLyBPcHRpb24gZm9yIHJhY2sgc2l6ZSAoZ2l2ZSBpdCBhIGRlZmF1bHQgZm9yIEJ1aWxkKVxyXG4gICAgfSkgPT4ge1xyXG4gICAgY29uc3QgW3N5bmNzdGFtcCwgc2V0U3luY3N0YW1wXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IG1pZGRsZSA9IHJhY2tzaXplOyAvLyBNaWRkbGUgZWxlbWVudCBpbiByb3cgb3IgY29sdW1uIGFycmF5XHJcbiAgICBjb25zdCBlZGdlID0gcmFja3NpemUgKiAyOyAvLyBMYXN0IGVsZW1lbnQgaW4gcm93IG9yIGNvbHVtbiBhcnJheVxyXG4gICAgY29uc3QgaW5pdGlhbHRpbGVzID0gcmFja3NpemUgPT09IDYgPyBjLlRJTEVCQUc2IDogcmFja3NpemUgPT09IDcgPyBjLlRJTEVCQUc3IDogcmFja3NpemUgPT09IDUgPyBjLlRJTEVCQUc1IDogYy5USUxFQkFHNDtcclxuICAgIGNvbnN0IFt0aWxlcywgc2V0VGlsZXNdID0gdXNlU3RhdGUoWy4uLmluaXRpYWx0aWxlc10pO1xyXG4gICAgY29uc3QgW3B0aWxlcywgc2V0UHRpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtndGlsZXMsIHNldEd0aWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc3F1YXJlQXJyYXksIHNldFNxdWFyZUFycmF5XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3Rpb24sIHNldFNlbGVjdGlvbl0gPSB1c2VTdGF0ZSgtMSk7IC8vIHJlbGF0aXZlIHRvIHJhY2sgb2YgcGxheWVyIG1ha2luZyBhIHBsYXlcclxuICAgIGNvbnN0IFt3aG9zZXR1cm4sIHNldFdob3NldHVybl0gPSB1c2VTdGF0ZShjLldIT1NFX1RVUk5fUFJJU09ORVJTKTsgLy8gZ2FtZSBzdGFydHMgd2l0aCBwcmlzb25lcnMgcGxheVxyXG4gICAgY29uc3QgW2N1cnJlbnRjb29yZHMsIHNldEN1cnJlbnRjb29yZHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3Jlc2N1ZXMsIHNldFJlc2N1ZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcmNkLCBzZXRSY2RdID0gdXNlU3RhdGUoWy0xLC0xLGMuRElSX05PTkVdKTtcclxuICAgIGNvbnN0IFttb3Zlcywgc2V0TW92ZXNdID0gdXNlU3RhdGUoW10pOyAvLyBtb3ZlIGhpc3RvcnksIGVhY2ggZWxlbWVudCBpcyB0aGUgYXJyYXkgaXMgYSBqc29uIG9iamVjdCBvZiBpbmZvIGFib3V0IHRoZSBtb3ZlXHJcbiAgICBjb25zdCBbc25hcHNob3QsIHNldFNuYXBzaG90XSA9IHVzZVN0YXRlKHtcclxuICAgICAgc3F1YXJlQXJyYXk6IFtdLFxyXG4gICAgICBwdGlsZXM6IFtdLFxyXG4gICAgICBndGlsZXM6IFtdLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbam9rZWluZGV4LCBzZXRKb2tlaW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbYWxsb3dSZXdpbmQsIHNldEFsbG93UmV3aW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtvcHBuYW1lLCBzZXRPcHBuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtjaGF0bXNncywgc2V0Q2hhdG1zZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgcHJldlJlc2N1ZXMgPSB1c2VQcmV2aW91cyhyZXNjdWVzKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IC8vIFRoaXMgY29kZSBleGVjdXRlcyB0aGUgZmlyc3QgdGltZSBHYW1lIGlzIHVzZWQgb25seVxyXG4gICAgICBpbml0aWFsaXplUm91dGluZSgpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgbGV0IG1zZyA9IHdzbWVzc2FnZTtcclxuICAgICAgaWYgKG1zZyAhPT0gJycpIHByb2Nlc3NHYW1lTWVzc2FnZShtc2cpOyAgICAgIFxyXG4gICAgfSxbd3NtZXNzYWdlXSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHNjcm9sbFRvQm90dG9tKFwiU2Nyb2xsYWJsZU1vdmVzXCIpO1xyXG4gICAgfSxbbW92ZXNdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2Nyb2xsVG9Cb3R0b20oXCJTY3JvbGxhYmxlQ2hhdFwiKTtcclxuICAgIH0sW2NoYXRtc2dzXSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmIChyZXNjdWVzID4gcHJldlJlc2N1ZXMpIHtcclxuICAgICAgICAgIHZhciBteWF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuICAgICAgICAgIC8vIE9ic2VydmVycyBoZWFyIHlpcHBlZVxyXG4gICAgICAgICAgbXlhdWRpby5zcmMgPSBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUyA/IFwiaHR0cHM6Ly90aWxlcnVubmVyLmdpdGh1Yi5pby9PbmVHb3RBd2F5Lm00YVwiIDogXCJodHRwczovL3RpbGVydW5uZXIuZ2l0aHViLmlvL3lpcHBlZS5tNGFcIjtcclxuICAgICAgICAgIG15YXVkaW8ucGxheSgpO1xyXG4gICAgICB9XHJcbiAgICB9LCBbcmVzY3Vlc10pOyAvLyBQbGF5IGEgc291bmQgd2hlbiBhIHJlc2N1ZSBpcyBtYWRlXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBsZXQgbmV3amkgPSBqb2tlaW5kZXggKyAxO1xyXG4gICAgICBpZiAobmV3amkgPj0gYy5KT0tFX0FSUkFZLmxlbmd0aCkge1xyXG4gICAgICAgIG5ld2ppID0gMDtcclxuICAgICAgfVxyXG4gICAgICBzZXRKb2tlaW5kZXgobmV3amkpO1xyXG4gICAgfSwgW3dob3NldHVybl0pOyAvLyB3YW50IHVwIHRvIGRhdGUgdmFsdWUgb2Ygd2hvc2V0dXJuIHRvIGRlY2lkZSB3aGV0aGVyIHRvIGFzayBmb3IgYW4gdXBkYXRlXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBhcnRpY2lwYW50ICE9PSB3aG9zZXR1cm4gJiYgd2hvc2V0dXJuICE9PSBjLldIT1NFX1RVUk5fR0FNRU9WRVIpIHtcclxuICAgICAgICAgIHJlcXVlc3RTeW5jRGF0YSgpOyAvLyBTZW5kIGEgcmVxdWVzdCBmb3Igc3luYyBkYXRhIHdoZW4gd2FpdGluZyBmb3IgdGhlaXIgbW92ZVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTZW5kIGEgcmVxdWVzdCBmb3IgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbGFzdCBldmVudCAoc3luY3N0YW1wKVxyXG4gICAgICAgIC8vIFNlcnZlciB3aWxsIHNlbmQgZnVuYz1wcm92aWRlc3luY3N0YW1wIHdpdGggYSBzeW5jc3RhbXAgdmFsdWVcclxuICAgICAgICAvLyBQcm9jZXNzR2FtZU1lc3NhZ2Ugd2lsbCBjaGVjayBzeW5jc3RhbXAgZnJvbSB0aGUgc2VydmVyIHRvIHN5bmNzdGFtcCBoZXJlXHJcbiAgICAgICAgLy8gSWYgZGlmZmVyZW50IGl0IHdpbGwgc2VuZCBmdW5jPXJlcXVlc3RnYW1lZGF0YSwgc2VydmVyIHdpbGwgc2VuZCB1cyBwcm92aWRlZ2FtZWRhdGEsIGFuZCB3ZSBzeW5jXHJcbiAgICAgICAgfSwgYy5QSU5HX0lOVEVSVkFMKTsgLy8gdGhpcyBtYW55IG1pbGxpc2Vjb25kcyBiZXR3ZWVuIGFib3ZlIGNvZGUgYmxvY2sgZXhlY3V0aW9uc1xyXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGluaXRpYWxpemVSb3V0aW5lID0gKCkgPT4ge1xyXG4gICAgICBsZXQgZmlyc3RTcXVhcmVBcnJheSA9IGluaXRpYWxTcXVhcmVBcnJheShyYWNrc2l6ZSk7XHJcbiAgICAgIHNldFNxdWFyZUFycmF5KGZpcnN0U3F1YXJlQXJyYXkpO1xyXG4gICAgICBpZiAoaXNyZWpvaW4pIHtcclxuICAgICAgICByZWpvaW5HYW1lKClcclxuICAgICAgfSBlbHNlIGlmIChwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUykge1xyXG4gICAgICAgIHN0YXJ0R2FtZShmaXJzdFNxdWFyZUFycmF5KTsgLy8gUHJpc29uZXJzIHN0YXJ0aW5nIHRoZSBnYW1lXHJcbiAgICAgIH0gZWxzZSBpZiAocGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMpIHtcclxuICAgICAgICBqb2luR2FtZSgpOyAvLyBHdWFyZHMgam9pbmluZyB0aGUgZ2FtZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0YXJ0T2JzZXJ2aW5nR2FtZSgpOyAvLyBPYnNlcnZlciB2aWV3aW5nIHRoZSBnYW1lXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHN0YXJ0R2FtZSA9IChmaXJzdFNxdWFyZUFycmF5KSA9PiB7XHJcbiAgICAgIGxldCBuZXdTeW5jc3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgICBsZXQgdGVtcFBUaWxlcyA9IFtdO1xyXG4gICAgICBsZXQgdGVtcEdUaWxlcyA9IFtdO1xyXG4gICAgICBsZXQgdGVtcFRpbGVzID0gWy4uLmluaXRpYWx0aWxlc107XHJcbiAgICAgIHdoaWxlICh0ZW1wUFRpbGVzLmxlbmd0aCA8IHJhY2tzaXplKSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZW1wVGlsZXMubGVuZ3RoKTtcclxuICAgICAgICB0ZW1wUFRpbGVzLnB1c2godGVtcFRpbGVzW3JhbmRdKTtcclxuICAgICAgICB0ZW1wVGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZW1wVGlsZXMubGVuZ3RoKTtcclxuICAgICAgICB0ZW1wR1RpbGVzLnB1c2godGVtcFRpbGVzW3JhbmRdKTtcclxuICAgICAgICB0ZW1wVGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRlbXBQVGlsZXMuc29ydCgpO1xyXG4gICAgICB0ZW1wR1RpbGVzLnNvcnQoKTtcclxuICAgICAgc2V0U3luY3N0YW1wKG5ld1N5bmNzdGFtcCk7XHJcbiAgICAgIHNldEd0aWxlcyh0ZW1wR1RpbGVzKTtcclxuICAgICAgc2V0UHRpbGVzKHRlbXBQVGlsZXMpO1xyXG4gICAgICBzZXRUaWxlcyh0ZW1wVGlsZXMpO1xyXG4gICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgc3F1YXJlQXJyYXk6IGZpcnN0U3F1YXJlQXJyYXksXHJcbiAgICAgICAgcHRpbGVzOiBbLi4udGVtcFBUaWxlc10sXHJcbiAgICAgICAgZ3RpbGVzOiBbLi4udGVtcEdUaWxlc10gICAgXHJcbiAgICAgIH0pO1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsXHJcbiAgICAgICAgICBmdW5jOiBcInN0YXJ0Z2FtZVwiLFxyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIEdhbWUgaWRcclxuICAgICAgICAgIHRpbWVzdGFtcDogbmV3U3luY3N0YW1wLCAvLyBGb3IgdGVsbGluZyBzZXJ2ZXIgbXkgbGFzdCBkYXRhIHRpbWVzdGFtcFxyXG4gICAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyBSYWNrIHNpemUgb3B0aW9uXHJcbiAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LCAvLyBUaGlzIHdpbGwgYmUgcHJpc29uZXJzIHNpbmNlIHByaXNvbmVycyBzdGFydCB0aGUgZ2FtZVxyXG4gICAgICAgICAgcG5hbWU6IG5pY2tuYW1lLCAvLyBUaGlzIHdpbGwgYmUgdGhlIHByaXNvbmVycyBuaWNrbmFtZSBzaW5jZSBwcmlzb25lcnMgYXJlIHNlbmRpbmcgdGhpc1xyXG4gICAgICAgICAgdGlsZXM6IHRlbXBUaWxlcywgLy8gVGlsZSBiYWcgYWZ0ZXIgZmlyc3QgcmFja3Mgc2VsZWN0ZWRcclxuICAgICAgICAgIHB0aWxlczogdGVtcFBUaWxlcywgLy8gUHJpc29uZXJzIGZpcnN0IHJhY2tcclxuICAgICAgICAgIGd0aWxlczogdGVtcEdUaWxlcyAvLyBHdWFyZHMgZmlyc3QgcmFja1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGpvaW5HYW1lID0gKCkgPT4ge1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgZ25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IFwiam9pbmdhbWVcIiwgLy8gam9pbiB0aGUgZ2FtZVxyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCAvLyB0aGlzIHdpbGwgZWIgZ3VhcmRzXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVqb2luR2FtZSA9ICgpID0+IHtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IFwicmVqb2luZ2FtZVwiLCAvLyBqb2luIHRoZSBnYW1lXHJcbiAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50IC8vIGNvdWxkIGJlIGVpdGhlciBwbGF5ZXJcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzdGFydE9ic2VydmluZ0dhbWUgPSAoKSA9PiB7XHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLFxyXG4gICAgICAgICAgZnVuYzogXCJzdGFydE9ic2VydmluZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHB1dEF0TW92ZVN0YXJ0KCkge1xyXG4gICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgICBzZXRBbGxvd1Jld2luZChmYWxzZSk7XHJcbiAgICAgIHNldFJjZCgtMSwtMSxjLkRJUl9OT05FKTtcclxuICAgICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBwcm9jZXNzR2FtZU1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZ2FtZWlkID09PSBnYW1laWQgJiYgbWVzc2FnZURhdGEudHlwZSA9PT0gXCJwYlwiKSB7IC8vIFRoaXMgaW5zdGFuY2Ugb2YgYSBwcmlzb24gYnJlYWsgZ2FtZVxyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInByb3ZpZGVnYW1lZGF0YVwiKSB7XHJcbiAgICAgICAgICBsZXQgZ2QgPSBidWlsZEdhbWVkYXRhRnJvbUFwaWRhdGEobWVzc2FnZURhdGEuYXBpZGF0YSk7XHJcbiAgICAgICAgICAvLyBTZXJ2ZXIgcHJvdmlkaW5nIGdhbWUgZGF0YVxyXG4gICAgICAgICAgc2V0U3luY3N0YW1wKGdkLnN5bmNzdGFtcCk7XHJcbiAgICAgICAgICAvLyBObyBvcHBvbmVudCBuYW1lIGZvciBvYnNlcnZlcnNcclxuICAgICAgICAgIGlmIChwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUykge1xyXG4gICAgICAgICAgICBzZXRPcHBuYW1lKGdkLmduYW1lKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAocGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMpIHtcclxuICAgICAgICAgICAgc2V0T3BwbmFtZShnZC5wbmFtZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRUaWxlcyhnZC50aWxlcyk7XHJcbiAgICAgICAgICBzZXRTcXVhcmVBcnJheShnZC5zcXVhcmVBcnJheSk7XHJcbiAgICAgICAgICBzZXRQdGlsZXMoZ2QucHRpbGVzKTtcclxuICAgICAgICAgIHNldEd0aWxlcyhnZC5ndGlsZXMpO1xyXG4gICAgICAgICAgc2V0V2hvc2V0dXJuKGdkLndob3NldHVybik7XHJcbiAgICAgICAgICBsZXQgbmV3U25hcHNob3QgPSB7XHJcbiAgICAgICAgICAgIHNxdWFyZUFycmF5OiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdkLnNxdWFyZUFycmF5KSksIC8vIERlZXAgY29weVxyXG4gICAgICAgICAgICBwdGlsZXM6IFsuLi5nZC5wdGlsZXNdLFxyXG4gICAgICAgICAgICBndGlsZXM6IFsuLi5nZC5ndGlsZXNdXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgc2V0U25hcHNob3QobmV3U25hcHNob3QpO1xyXG4gICAgICAgICAgc2V0TW92ZXMoZ2QubW92ZXMpO1xyXG4gICAgICAgICAgc2V0UmVzY3VlcyhnZC5yZXNjdWVzKTtcclxuICAgICAgICAgIHNldEFsbG93UmV3aW5kKGdkLmFsbG93UmV3aW5kKTtcclxuICAgICAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInByb3ZpZGVnbmFtZVwiKSB7XHJcbiAgICAgICAgICBpZiAocGFydGljaXBhbnQgPT09IGMuUEFSVFlfVElUTEVfUFJJU09ORVJTKSB7XHJcbiAgICAgICAgICAgIHNldE9wcG5hbWUobWVzc2FnZURhdGEuZ25hbWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJhbGxvd3VuZG9cIikge1xyXG4gICAgICAgICAgLy8gT3Bwb25lbnQgY2xpY2tlZCBidXR0b24gdG8gYWxsb3cgdW5kbyB0dXJuXHJcbiAgICAgICAgICBzZXRBbGxvd1Jld2luZCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiY2hhdFwiKSB7IC8vIFNlcnZlciBkZWNpZGVkIHdoZXRoZXIgdGhpcyBjaGF0IHdhcyBmb3IgbWVcclxuICAgICAgICAgIGxldCBuZXdDaGF0bXNncyA9IFsuLi5jaGF0bXNncywge2Zyb206IG1lc3NhZ2VEYXRhLm5pY2tuYW1lLCBtc2c6IG1lc3NhZ2VEYXRhLnNlbmRtc2d9XTtcclxuICAgICAgICAgIHNldENoYXRtc2dzKG5ld0NoYXRtc2dzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwicHJvdmlkZXN5bmNkYXRhXCIpIHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBwcm92aWRlc3luZGF0YSBwYXNzZWQgJHttZXNzYWdlRGF0YS5zeW5jc3RhbXB9IGFuZCBJIGhhdmUgJHtzeW5jc3RhbXB9YCk7XHJcbiAgICAgICAgICBpZiAobWVzc2FnZURhdGEuc3luY3N0YW1wICE9PSBzeW5jc3RhbXApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYE91dCBvZiBzeW5jIC0gcmVxdWVzdGluZyBsYXRlc3QgZ2FtZSBkYXRhYCk7XHJcbiAgICAgICAgICAgIHJlcXVlc3RHYW1lRGF0YSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBDYWxsaW5nIHNldFNlbGVjdGlvbiAoZnJvbSBoYW5kbGVLZXlEb3duKSB0aGVuIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2sgZG9lcyBub3QgbGV0IGl0IHJlY29nbml6ZSBzZWxlY3Rpb24gd2l0aCB0aGUgbmV3IHZhbHVlXHJcbiAgICAvLyBTbyBJIHBhc3MgbmV3U2VsZWN0aW9uIHdoZW4gSSB3YW50IHRvIGFsc28gc2V0IGl0LCBvdGhlcndpc2UgSSBwYXNzIC0xIHRvIGluc3RydWN0IGl0IHRvIHVzZSBjdXJyZW50IHZhbHVlIG9mIHNlbGVjdGlvblxyXG4gICAgLy8gQWxzbyBwYXNzaW5nIG5ld1JjZFxyXG4gICAgY29uc3QgaGFuZGxlQm9hcmRTcXVhcmVDbGljayA9IChyaSwgY2ksIG5ld1NlbGVjdGlvbiwgbmV3UmNkKSA9PiB7XHJcbiAgICAgIGxldCBuZXdTcXVhcmVBcnJheSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3F1YXJlQXJyYXkpKTsgLy8gRGVlcCBjb3B5XHJcbiAgICAgIGxldCBuZXdTcXVhcmVBcnJheVJvdyA9IFsuLi5uZXdTcXVhcmVBcnJheVtyaV1dOyAvLyBUaGUgcm93IG9mIHNxdWFyZXMgdGhleSBjbGlja2VkIG9uXHJcbiAgICAgIGxldCBuZXdTcXVhcmVBcnJheUNlbGwgPSBuZXdTcXVhcmVBcnJheVJvd1tjaV07IC8vIFRoZSBzcXVhcmUgaW4gdGhlIHJvdyB0aGV5IGNsaWNrZWQgb25cclxuICAgICAgbGV0IG5ld1B0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgICBsZXQgbmV3R3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICAgIGxldCBuZXdDdXJyZW50Y29vcmRzID0gWy4uLmN1cnJlbnRjb29yZHNdO1xyXG4gICAgICBsZXQgY29vcmQgPSBTdHJpbmcocmkpICsgXCItXCIgKyBTdHJpbmcoY2kpO1xyXG4gICAgICBsZXQgY2NpID0gY3VycmVudGNvb3Jkcy5pbmRleE9mKGNvb3JkKTtcclxuICAgICAgaWYgKG5ld1NlbGVjdGlvbiA9PT0gLTEpIHtcclxuICAgICAgICBuZXdTZWxlY3Rpb24gPSBzZWxlY3Rpb247XHJcbiAgICAgICAgbmV3UmNkID0gcmNkO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChuZXdTZWxlY3Rpb24gPiAtMSAmJiBuZXdTcXVhcmVBcnJheUNlbGwudXNlZGJ5ID09PSBjLlVTRURfQllfTk9ORSkgeyAvLyB0aWxlIGlzIHNlbGVjdGVkIGZyb20gcmFjayBhbmQgY2xpY2tlZCBzcXVhcmUgaXMgbm90IHVzZWQgeWV0XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkVGlsZSA9IHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX1BSSVNPTkVSUyA/IG5ld1B0aWxlc1tuZXdTZWxlY3Rpb25dIDogbmV3R3RpbGVzW25ld1NlbGVjdGlvbl07XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlDZWxsLmxldHRlciA9IHNlbGVjdGVkVGlsZTtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheUNlbGwudXNlZGJ5ID0gd2hvc2V0dXJuO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Um93W2NpXSA9IG5ld1NxdWFyZUFycmF5Q2VsbDtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheVtyaV0gPSBbLi4ubmV3U3F1YXJlQXJyYXlSb3ddO1xyXG4gICAgICAgIHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX1BSSVNPTkVSU1xyXG4gICAgICAgICAgPyBuZXdQdGlsZXMuc3BsaWNlKG5ld1NlbGVjdGlvbiwgMSlcclxuICAgICAgICAgIDogbmV3R3RpbGVzLnNwbGljZShuZXdTZWxlY3Rpb24sIDEpO1xyXG4gICAgICAgIGlmICh3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMgJiYgbmV3U2VsZWN0aW9uID09PSBuZXdQdGlsZXMubGVuZ3RoKSB7IFxyXG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3U2VsZWN0aW9uIC0gMVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAod2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fR1VBUkRTICYmIG5ld1NlbGVjdGlvbiA9PT0gbmV3R3RpbGVzLmxlbmd0aCkgeyBcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbiAtIDFcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbik7XHJcbiAgICAgICAgc2V0U3F1YXJlQXJyYXkobmV3U3F1YXJlQXJyYXkpO1xyXG4gICAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICAgIHNldEN1cnJlbnRjb29yZHMoWy4uLmN1cnJlbnRjb29yZHMsIGNvb3JkXSk7XHJcbiAgICAgICAgc2V0UmNkKG5ld1JjZCk7IC8vIGtleSBkb3duIGhhbmRsZXIgZmlndXJlZCBpdCBvdXRcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNjaSA+IC0xKSB7IC8vIGNsaWNrZWQgc3F1YXJlIGhhcyBhIHRpbGUgb24gaXQgZnJvbSB0aGUgY3VycmVudCBtb3ZlIGluIHByb2dyZXNzLCBzbyBwdXQgaXQgYmFjayBvbiB0aGUgcGxheWVyIHJhY2tcclxuICAgICAgICB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlNcclxuICAgICAgICAgID8gbmV3UHRpbGVzLnB1c2gobmV3U3F1YXJlQXJyYXlDZWxsLmxldHRlcilcclxuICAgICAgICAgIDogbmV3R3RpbGVzLnB1c2gobmV3U3F1YXJlQXJyYXlDZWxsLmxldHRlcik7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlDZWxsLnVzZWRieSA9IGMuVVNFRF9CWV9OT05FO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Q2VsbC5sZXR0ZXIgPSBjLkxFVFRFUl9OT05FO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Um93W2NpXSA9IG5ld1NxdWFyZUFycmF5Q2VsbDtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheVtyaV0gPSBbLi4ubmV3U3F1YXJlQXJyYXlSb3ddO1xyXG4gICAgICAgIHNldFNlbGVjdGlvbihcclxuICAgICAgICAgIHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX1BSSVNPTkVSUyA/IG5ld1B0aWxlcy5sZW5ndGggLSAxIDogbmV3R3RpbGVzLmxlbmd0aCAtIDFcclxuICAgICAgICApO1xyXG4gICAgICAgIG5ld0N1cnJlbnRjb29yZHMuc3BsaWNlKGNjaSwgMSk7XHJcbiAgICAgICAgc2V0U3F1YXJlQXJyYXkobmV3U3F1YXJlQXJyYXkpO1xyXG4gICAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICAgIHNldEN1cnJlbnRjb29yZHMobmV3Q3VycmVudGNvb3Jkcyk7XHJcbiAgICAgICAgc2V0UmNkKC0xLC0xLGMuRElSX05PTkUpOyAvLyBtYWtlIHBsYXllciBjbGljayBhZ2FpbiB0byBzZXQgZGlyZWN0aW9uXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFRoZXkgZGlkbid0IGNsaWNrIGEgc3F1YXJlIHRvIHBsYWNlIGEgc2VsZWN0ZWQgdGlsZSB0aGVyZVxyXG4gICAgICAvLyBUaGV5IGRpZG4ndCBjbGljayBhIHNxdWFyZSB0byByZW1vdmUgYW4gZXhpc3RpbmcgdGlsZVxyXG4gICAgICBpZiAobmV3U3F1YXJlQXJyYXlDZWxsLnVzZWRieSA9PT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAvLyBUaGVyZSBpcyBub3RoaW5nIG9uIHRoZSBzcXVhcmUgc28gdGhleSBhcmUgcGlja2luZyB3aGVyZSB0byBwbGFjZSB0aGUgbmV4dCB0aWxlIHZpYSBrZXlib2FyZFxyXG4gICAgICAgIGxldCBuZXdEaXJlY3Rpb24gPSByY2RbMF0gIT09IHJpIHx8IHJjZFsxXSAhPT0gY2kgPyBjLkRJUl9SSUdIVCA6IC8vY2xpY2sgbmV3IHNxdWFyZSwgc3RhcnQgd2l0aCByaWdodFxyXG4gICAgICAgICByY2RbMl0gPT09IGMuRElSX1JJR0hUID8gYy5ESVJfRE9XTiA6IC8vY2xpY2sgc2FtZSBzcXVhcmUgdGhhdCB3YXMgcmlnaHQsIGNoYW5nZSB0byBkb3duXHJcbiAgICAgICAgIHJjZFsyXSA9PT0gYy5ESVJfRE9XTiA/IGMuRElSX05PTkUgOiAvL2NsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIGRvd24sIGNoYW5nZSB0byBubyBkaXJlY3Rpb25cclxuICAgICAgICAgYy5ESVJfUklHSFQ7IC8vIGNsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIG5vIGRpcmVjdGlvbiwgY2hhbmdlIHRvIHJpZ2h0XHJcbiAgICAgICAgbmV3UmNkID0gW3JpLGNpLG5ld0RpcmVjdGlvbl07XHJcbiAgICAgICAgc2V0UmNkKG5ld1JjZCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlUmFja1RpbGVDbGljayA9ICh0aWxlaW5kZXgpID0+IHtcclxuICAgICAgaWYgKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfT0JTRVJWRVIpIHtyZXR1cm47fVxyXG4gICAgICAvLyBJZiBubyB0aWxlIGlzIHNlbGVjdGVkIGFscmVhZHkgdGhlbiBzZXQgdGhlIHNlbGVjdGlvblxyXG4gICAgICBpZiAoc2VsZWN0aW9uID09PSAtMSkge1xyXG4gICAgICAgIHNldFNlbGVjdGlvbih0aWxlaW5kZXgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvLyBJZiB0aGUgc2FtZSB0aWxlIGlzIGFscmVhZHkgc2VsZWN0ZWQgdGhlbiB1bnNlbGVjdFxyXG4gICAgICBpZiAoc2VsZWN0aW9uID09PSB0aWxlaW5kZXgpIHtcclxuICAgICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvLyBBIHRpbGUgd2FzIGFscmVhZHkgc2VsZWN0ZWQgYW5kIHRoZXkgY2xpY2tlZCBhbm90aGVyIHRpbGUgLSBtb3ZlIHRoZSB0aWxlXHJcbiAgICAgIGxldCBuZXdyYWNrID0gcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBbLi4ucHRpbGVzXSA6IFsuLi5ndGlsZXNdO1xyXG4gICAgICBsZXQgbW92ZWZyb20gPSBzZWxlY3Rpb247XHJcbiAgICAgIGxldCBtb3ZldGlsZSA9IG5ld3JhY2tbbW92ZWZyb21dO1xyXG4gICAgICBsZXQgbW92ZXRvID0gdGlsZWluZGV4O1xyXG4gICAgICBuZXdyYWNrLnNwbGljZShtb3ZlZnJvbSwgMSk7IC8vIHJlbW92ZSB0aWxlIGZyb20gb3JpZ2luYWwgc2VsZWN0ZWQgcG9zaXRpb25cclxuICAgICAgbmV3cmFjay5zcGxpY2UobW92ZXRvLDAsbW92ZXRpbGUpOyAvLyBpbnNlcnQgbW92ZWQgdGlsZSBhdCB0aGUgbmV3bHkgc2VsZWN0ZWQgcG9zaXRpb25cclxuICAgICAgcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBzZXRQdGlsZXMobmV3cmFjaykgOiBzZXRHdGlsZXMobmV3cmFjayk7XHJcbiAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBhc3luYyBmdW5jdGlvbiBlbmRQbGF5ZXJzVHVybigpIHtcclxuICAgICAgaWYgKCFpc1BsYXlWYWxpZCgpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBwbGF5aW5mbyA9IGF3YWl0IGdldFBsYXlJbmZvKCk7XHJcbiAgICAgIGlmIChwbGF5aW5mby5pbnZhbGlkd29yZHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgYWxlcnQoYEludmFsaWQgYWNjb3JkaW5nIHRvIEVOQUJMRTJLIGxleGljb246ICR7cGxheWluZm8uaW52YWxpZHdvcmRzLmpvaW4oKS5yZXBsYWNlKFwiLlwiLFwiP1wiKS50b1VwcGVyQ2FzZSgpfWApO1xyXG4gICAgICAgIHJldHVybjsgLy8gRG8gbm90IGFwcGx5IHRoZSBwbGF5XHJcbiAgICAgIH1cclxuICAgICAgbGV0IG5ld1Jlc2N1ZXMgPSByZXNjdWVzO1xyXG4gICAgICBpZiAocGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMpIHtcclxuICAgICAgICBsZXQgZXNjYXBlaGF0Y2hlcyA9IFtcclxuICAgICAgICAgIFwiMC0wXCIsXHJcbiAgICAgICAgICBcIjAtXCIgKyBtaWRkbGUsXHJcbiAgICAgICAgICBcIjAtXCIgKyBlZGdlLFxyXG4gICAgICAgICAgbWlkZGxlKyBcIi0wXCIsXHJcbiAgICAgICAgICBtaWRkbGUgKyBcIi1cIiArIGVkZ2UsXHJcbiAgICAgICAgICBlZGdlICsgXCItMFwiLFxyXG4gICAgICAgICAgZWRnZSArIFwiLVwiICsgbWlkZGxlLFxyXG4gICAgICAgICAgZWRnZSArIFwiLVwiICsgZWRnZVxyXG4gICAgICAgIF07IC8vIGNvb3JkcyBvZiBlc2NhcGUgaGF0Y2hlc1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudGNvb3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKGVzY2FwZWhhdGNoZXMuaW5kZXhPZihjdXJyZW50Y29vcmRzW2ldKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIG5ld1Jlc2N1ZXMgPSBuZXdSZXNjdWVzICsgMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGV0IG5ld1BsYXllclRpbGVzID0gcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBbLi4ucHRpbGVzXSA6IFsuLi5ndGlsZXNdO1xyXG4gICAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgICB3aGlsZSAobmV3UGxheWVyVGlsZXMubGVuZ3RoIDwgcmFja3NpemUgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgICBuZXdQbGF5ZXJUaWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgbmV3UGxheWVyVGlsZXMuc29ydCgpO1xyXG4gICAgICBsZXQgbmV3V2hvc2V0dXJuID0gbmV3UGxheWVyVGlsZXMubGVuZ3RoID09PSAwID8gYy5XSE9TRV9UVVJOX0dBTUVPVkVSIDogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBjLldIT1NFX1RVUk5fR1VBUkRTIDogYy5QQVJUWV9UWVBFX1BSSVNPTkVSUztcclxuICAgICAgaWYgKCFhbnlVbnVzZWRFc2NhcGVIYXRjaGVzKHNxdWFyZUFycmF5KSkge1xyXG4gICAgICAgIG5ld1dob3NldHVybiA9IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUjsgLy8gTm8gZXNjYXBlIGhhdGNoZXMgbGVmdFxyXG4gICAgICB9XHJcbiAgICAgIGxldCBuZXdNb3ZlID0ge2J5OiBwYXJ0aWNpcGFudCwgdHlwZTogYy5NT1ZFX1RZUEVfUExBWSwgbWFpbndvcmQ6IHBsYXlpbmZvLm1haW53b3JkLCBleHRyYXdvcmRzOiBwbGF5aW5mby5leHRyYXdvcmRzLCBwb3M6IHBsYXlpbmZvLnBvc307XHJcbiAgICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICAgIGxldCBuZXdTeW5jc3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICBzZXRTeW5jc3RhbXAobmV3U3luY3N0YW1wKTtcclxuICAgICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICAgIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gc2V0UHRpbGVzKG5ld1BsYXllclRpbGVzKSA6IHNldEd0aWxlcyhuZXdQbGF5ZXJUaWxlcyk7XHJcbiAgICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgICBzZXRSZXNjdWVzKG5ld1Jlc2N1ZXMpO1xyXG4gICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgc3F1YXJlQXJyYXk6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3F1YXJlQXJyYXkpKSwgLy8gRGVlcCBjb3B5XHJcbiAgICAgICAgcHRpbGVzOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IFsuLi5uZXdQbGF5ZXJUaWxlc10gOiBbLi4ucHRpbGVzXSxcclxuICAgICAgICBndGlsZXM6IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gWy4uLmd0aWxlc10gOiBbLi4ubmV3UGxheWVyVGlsZXNdLFxyXG4gICAgICB9KTtcclxuICAgICAgbGV0IGpzZW5kID0ge1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gXCJlcHRcIiA6IFwiZWd0XCIsIC8vIGVuZCBwcmlzb25lcnMgb3IgZ3VhcmRzIHR1cm5cclxuICAgICAgICB0aW1lc3RhbXA6IG5ld1N5bmNzdGFtcCwgLy8gZm9yIGRhdGEgc3luYyBsb2dpY1xyXG4gICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsXHJcbiAgICAgICAgcHRpbGVzOiBuZXdQbGF5ZXJUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgcHJpc29uZXJzIHJhY2tcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gbWF5IGhhdmUgZW5kZWQgdGhlIGdhbWVcclxuICAgICAgICBtb3ZlOiBuZXdNb3ZlLCAvLyB0aGUgbW92ZSB0aGF0IHdhcyBtYWRlXHJcbiAgICAgICAgcmVzY3VlczogbmV3UmVzY3VlcyAvLyBtYXkgaGF2ZSByZXNjdWVkIGFub3RoZXIgcHJpc29uZXJcclxuICAgICAgfTtcclxuICAgICAgcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBqc2VuZC5wdGlsZXMgPSBuZXdQbGF5ZXJUaWxlcyA6IGpzZW5kLmd0aWxlcyA9IG5ld1BsYXllclRpbGVzO1xyXG4gICAgICBjbGllbnQuc2VuZChqc2VuZCk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3Qgc3dhcFBsYXllcnNUaWxlcyA9ICgpID0+IHtcclxuICAgICAgaWYgKHRpbGVzLmxlbmd0aCA8IHJhY2tzaXplKSB7XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwiTmVlZCBcIiArIHJhY2tzaXplICsgXCIgdGlsZXMgaW4gdGhlIGJhZyB0byBleGNoYW5nZVwiKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgbmV3UGxheWVyVGlsZXMgPSBbXTtcclxuICAgICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgICAgd2hpbGUgKG5ld1BsYXllclRpbGVzLmxlbmd0aCA8IHJhY2tzaXplICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgbmV3UGxheWVyVGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIG5ld1BsYXllclRpbGVzLnNvcnQoKTtcclxuICAgICAgcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBuZXdUaWxlcyA9IFsuLi5uZXdUaWxlcywgLi4uc25hcHNob3QucHRpbGVzXSA6IG5ld1RpbGVzID0gWy4uLm5ld1RpbGVzLCAuLi5zbmFwc2hvdC5ndGlsZXNdO1xyXG4gICAgICBuZXdUaWxlcy5zb3J0KCk7XHJcbiAgICAgIGxldCBuZXdNb3ZlID0ge2J5OiBwYXJ0aWNpcGFudCwgdHlwZTogYy5NT1ZFX1RZUEVfU1dBUH07XHJcbiAgICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICAgIGxldCBuZXdTeW5jc3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICBzZXRTeW5jc3RhbXAobmV3U3luY3N0YW1wKTtcclxuICAgICAgc2V0U3F1YXJlQXJyYXkoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzbmFwc2hvdC5zcXVhcmVBcnJheSkpKTsgLy8gRGVlcCBjb3B5XHJcbiAgICAgIHNldFdob3NldHVybihwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IGMuV0hPU0VfVFVSTl9HVUFSRFMgOiBjLldIT1NFX1RVUk5fUFJJU09ORVJTKTtcclxuICAgICAgcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBzZXRQdGlsZXMobmV3UGxheWVyVGlsZXMpIDogc2V0R3RpbGVzKG5ld1BsYXllclRpbGVzKTtcclxuICAgICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICBzcXVhcmVBcnJheTogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzbmFwc2hvdC5zcXVhcmVBcnJheSkpLCAvLyBEZWVwIGNvcHlcclxuICAgICAgICBwdGlsZXM6IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gWy4uLm5ld1BsYXllclRpbGVzXSA6IFsuLi5wdGlsZXNdLFxyXG4gICAgICAgIGd0aWxlczogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBbLi4uZ3RpbGVzXSA6IFsuLi5uZXdQbGF5ZXJUaWxlc10sXHJcbiAgICAgIH0pO1xyXG4gICAgICBsZXQganNlbmQgPSB7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBcImVwdFwiIDogXCJlZ3RcIiwgLy8gZW5kIHByaXNvbmVycyBvciBndWFyZHMgdHVyblxyXG4gICAgICAgIHRpbWVzdGFtcDogbmV3U3luY3N0YW1wLCAvLyBmb3IgZGF0YSBzeW5jIGxvZ2ljXHJcbiAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICB3aG9zZXR1cm46IGMuV0hPU0VfVFVSTl9HVUFSRFMsIC8vIHN3YXAgbmV2ZXIgZW5kcyB0aGUgZ2FtZSBzbyBnbyB0byBvcHBvbmVudFxyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgIG1vdmU6IG5ld01vdmUgLy8gdGhlIG1vdmUgdGhhdCB3YXMgbWFkZVxyXG4gICAgICB9O1xyXG4gICAgICBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IGpzZW5kLnB0aWxlcyA9IG5ld1BsYXllclRpbGVzIDoganNlbmQuZ3RpbGVzID0gbmV3UGxheWVyVGlsZXM7XHJcbiAgICAgIGNsaWVudC5zZW5kKGpzZW5kKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gaXNQbGF5VmFsaWQoKSB7XHJcbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHdvcmQgc2luY2UgaXQgYWZmZWN0cyB0aGUgdmFsaWRpdHkgcnVsZXNcclxuICAgICAgbGV0IGZpcnN0V29yZCA9IHRydWU7XHJcbiAgICAgIGxldCBudW1tb3ZlcyA9IG1vdmVzLmxlbmd0aDtcclxuICAgICAgZm9yICh2YXIgbW92ZWluZGV4ID0gMDsgZmlyc3RXb3JkICYmIChtb3ZlaW5kZXggPCBudW1tb3Zlcyk7ICsrbW92ZWluZGV4KSB7XHJcbiAgICAgICAgaWYgKG1vdmVzW21vdmVpbmRleF0udHlwZSA9PT0gYy5NT1ZFX1RZUEVfUExBWSkge1xyXG4gICAgICAgICAgZmlyc3RXb3JkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIEZpcnN0IHdvcmQgbXVzdCBoaXQgY2VudGVyIHNxdWFyZVxyXG4gICAgICBpZiAoZmlyc3RXb3JkICYmIHNxdWFyZUFycmF5W21pZGRsZV1bbWlkZGxlXS51c2VkYnkgPT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwiRmlyc3QgcGxheSBtdXN0IGhpdCBjZW50ZXIgc3F1YXJlXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICAvLyBBdCBsZWFzdCAxIHRpbGUgbXVzdCBiZSBwbGF5ZWRcclxuICAgICAgaWYgKGN1cnJlbnRjb29yZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwiWW91IGRpZG4ndCBwbGF5IGFueSB0aWxlc1wiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgLyogR28gdGhyb3VnaCBlYWNoIHBsYXllZCB0aWxlXHJcbiAgICAgICAgICBNYWtlIHN1cmUgaXQgaXMgbm90IGlzb2xhdGVkIGZyb20gYWxsIHRoZSBvdGhlciB0aWxlc1xyXG4gICAgICAgICAgRGV0ZXJtaW5lIHRoZSBsb3dlc3QgYW5kIGhpZ2hlc3Qgcm93IGFuZCBjb2x1bW4gbnVtYmVycyBvZiB0aWxlcyBwbGF5ZWQgdGhpcyBtb3ZlXHJcbiAgICAgICovXHJcbiAgICAgIGxldCBudW1jb29yZHMgPSBjdXJyZW50Y29vcmRzLmxlbmd0aDtcclxuICAgICAgbGV0IGxvd3JvdyA9IGVkZ2UrMTtcclxuICAgICAgbGV0IGhpZ2hyb3cgPSAtMTtcclxuICAgICAgbGV0IGxvd2NvbCA9IGVkZ2UrMTtcclxuICAgICAgbGV0IGhpZ2hjb2wgPSAtMTtcclxuICAgICAgZm9yICh2YXIgY29vcmQ9MDsgY29vcmQgPCBudW1jb29yZHM7ICsrY29vcmQpIHsgLy8gRWFjaCB0aWxlIHBsYXllZCB0aGlzIG1vdmVcclxuICAgICAgICBsZXQgdGVtcHJvdyA9IHBhcnNlSW50KGN1cnJlbnRjb29yZHNbY29vcmRdLnNwbGl0KFwiLVwiKVswXSk7XHJcbiAgICAgICAgbGV0IHRlbXBjb2wgPSBwYXJzZUludChjdXJyZW50Y29vcmRzW2Nvb3JkXS5zcGxpdChcIi1cIilbMV0pO1xyXG4gICAgICAgIGlmICh0ZW1wcm93IDwgbG93cm93KSB7IGxvd3JvdyA9IHRlbXByb3c7fVxyXG4gICAgICAgIGlmICh0ZW1wcm93ID4gaGlnaHJvdykgeyBoaWdocm93ID0gdGVtcHJvdzt9XHJcbiAgICAgICAgaWYgKHRlbXBjb2wgPCBsb3djb2wpIHsgbG93Y29sID0gdGVtcGNvbDt9XHJcbiAgICAgICAgaWYgKHRlbXBjb2wgPiBoaWdoY29sKSB7IGhpZ2hjb2wgPSB0ZW1wY29sO31cclxuICAgICAgICAvLyBNYWtlIHN1cmUgdGhlcmUgaXMgYW5vdGhlciB0aWxlIGltbWVkaWF0ZWx5IGFib3ZlLCBiZWxvdywgbGVmdCwgb3IgcmlnaHQgKG5vdCBpc29sYXRlZClcclxuICAgICAgICBpZiAoISh0ZW1wcm93ID4gMCAmJiBzcXVhcmVBcnJheVt0ZW1wcm93LTFdW3RlbXBjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpICYmXHJcbiAgICAgICAgICAhKHRlbXBjb2wgPiAwICYmIHNxdWFyZUFycmF5W3RlbXByb3ddW3RlbXBjb2wtMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgJiZcclxuICAgICAgICAgICEodGVtcHJvdyA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbdGVtcHJvdysxXVt0ZW1wY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSAmJlxyXG4gICAgICAgICAgISh0ZW1wY29sIDwgZWRnZSAmJiBzcXVhcmVBcnJheVt0ZW1wcm93XVt0ZW1wY29sKzFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiRWFjaCBwbGF5ZWQgdGlsZSBtdXN0IGJlIHBhcnQgb2YgYSB3b3JkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gVXNpbmcgdGhlIGhpZ2ggYW5kIGxvdyB2YWx1ZXMsIGNoZWNrIGlmIHRoZSBwbGF5IGlzIGluIGEgc3RyYWlnaHQgbGluZVxyXG4gICAgICBpZiAobG93cm93ICE9PSBoaWdocm93ICYmIGxvd2NvbCAhPT0gaGlnaGNvbCkge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcIlRpbGVzIHBsYXllZCBtdXN0IGJlIGluIGEgc3RyYWlnaHQgbGluZVwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHBsYXl0aHJ1ID0gZmFsc2U7XHJcbiAgICAgIGxldCBob29rbWFkZSA9IGZhbHNlO1xyXG4gICAgICAvKiBUcmF2ZXJzZSBmcm9tIGZpcnN0IHBsYXllZCB0aWxlIHRvIGxhc3QgcGxheWVyIHRpbGVcclxuICAgICAgICAgIE1ha2Ugc3VyZSB0aGVyZSBhcmUgbm8gdW51c2VkIHNxdWFyZXMgaW5iZXR3ZWVuIChnYXBzIGluIHRoZSBwbGF5ZWQgd29yZClcclxuICAgICAgICAgIENoZWNrIGlmIHdlIHBsYXllZCB0aHJvdWdoIGV4aXN0aW5nIHRpbGVzXHJcbiAgICAgICAgICBDaGVjayBpZiB3ZSBob29rZWQgZXhpc3RpbmcgdGlsZXMvd29yZHNcclxuICAgICAgKi9cclxuICAgICAgZm9yICh2YXIgdGVtcHJvdyA9IGxvd3JvdzsgdGVtcHJvdyA8PSBoaWdocm93OyArK3RlbXByb3cpIHtcclxuICAgICAgICBmb3IgKHZhciB0ZW1wY29sID0gbG93Y29sOyB0ZW1wY29sIDw9IGhpZ2hjb2w7ICsrdGVtcGNvbCkge1xyXG4gICAgICAgICAgaWYgKHNxdWFyZUFycmF5W3RlbXByb3ddW3RlbXBjb2xdLnVzZWRieSA9PT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiVGhlcmUgaXMgYSBnYXAgaW4geW91ciB3b3JkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIWZpcnN0V29yZCkgeyAvLyBQbGF5IHRocm91Z2ggYW5kIGhvb2sgbm90IHBvc3NpYmxlIG9uIGZpcnN0IG1vdmVcclxuICAgICAgICAgICAgbGV0IHRlbXBjb29yZCA9IHRlbXByb3cgKyBcIi1cIiArIHRlbXBjb2w7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50Y29vcmRzLmluZGV4T2YodGVtcGNvb3JkKSA8IDApIHsgLy8gVGlsZSB3YXMgbm90IHBsYXllZCB0aGlzIG1vdmUgKHdhcyBhbHJlYWR5IG9uIHRoZSBib2FyZClcclxuICAgICAgICAgICAgICBwbGF5dGhydSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiB0ZW1wcm93ID4gMCAmJiBzcXVhcmVBcnJheVt0ZW1wcm93LTFdW3RlbXBjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgdGVtcHJvdyA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbdGVtcHJvdysxXVt0ZW1wY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIHRlbXBjb2wgPiAwICYmIHNxdWFyZUFycmF5W3RlbXByb3ddW3RlbXBjb2wtMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiB0ZW1wY29sIDwgZWRnZSAmJiBzcXVhcmVBcnJheVt0ZW1wcm93XVt0ZW1wY29sKzFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgaG9va21hZGUgPSB0cnVlOyB9ICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFmaXJzdFdvcmQpIHtcclxuICAgICAgICAvLyBXZSBhbHJlYWR5IGZvdW5kIHBsYXkgdGhyb3VnaCBhIHRpbGUgYmV0d2VlbiBmaXJzdCBhbmQgbGFzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIC8vIE5vdyBjaGVjayBpZiBwbGF5ZWQgd29yZCBoYXMgYSB0aWxlIGJlZm9yZSBmaXJzdCBvciBhZnRlciBsYXN0IHBsYXllZCB0aWxlXHJcbiAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiBsb3djb2wgPiAwICYmIHNxdWFyZUFycmF5W2xvd3Jvd11bbG93Y29sLTFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiBoaWdoY29sIDwgZWRnZSAmJiBzcXVhcmVBcnJheVtsb3dyb3ddW2hpZ2hjb2wrMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGxvd3JvdyA+IDAgJiYgc3F1YXJlQXJyYXlbbG93cm93LTFdW2xvd2NvbF0gIT09IGMuVVNFRF9CWV9OT05FKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgaGlnaHJvdyA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbaGlnaHJvdysxXVtsb3djb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICAgICAgLy8gTm93IHdlIGhhdmUgZnVsbHkgaWRlbnRpZmllZCBwbGF5IHRocm91Z2ggd2UgY2FuIG1ha2Ugc3VyZSB0aGV5IHBsYXllZCB0aHJvdWdoIG9yIG1hZGUgYSBob29rXHJcbiAgICAgICAgLy8gVGhpcyBpbiBtYW5kYXRvcnkgc2luY2UgaXQgaXMgbm90IHRoZSBmaXJzdCBtb3ZlXHJcbiAgICAgICAgaWYgKCFwbGF5dGhydSAmJiAhaG9va21hZGUpIHtcclxuICAgICAgICAgIHdpbmRvdy5hbGVydChcIk5ldyB3b3JkcyBtdXN0IGV4dGVuZCBhbiBleGlzdGluZyB3b3JkIGFuZC9vciBob29rIGV4aXN0aW5nIHdvcmRzIG9yIHRpbGVzXCIpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFBsYXlJbmZvKCkge1xyXG4gICAgICBsZXQgcGxheWluZm8gPSB7fTtcclxuICAgICAgbGV0IG1haW53b3JkID0gXCJcIjtcclxuICAgICAgbGV0IGV4dHJhd29yZHMgPSBbXTtcclxuICAgICAgbGV0IHdvcmRzdGFydGNvb3JkID0gXCJcIjtcclxuICAgICAgbGV0IG51bXJvd3MgPSBlZGdlKzE7XHJcbiAgICAgIGxldCBudW1jb2xzID0gZWRnZSsxO1xyXG4gICAgICBsZXQgbG93cm93ID0gbnVtcm93cztcclxuICAgICAgbGV0IGhpZ2hyb3cgPSAtMTtcclxuICAgICAgbGV0IGxvd2NvbCA9IG51bWNvbHM7XHJcbiAgICAgIGxldCBoaWdoY29sID0gLTE7XHJcbiAgICAgIGxldCBudW1jb29yZHMgPSBjdXJyZW50Y29vcmRzLmxlbmd0aDtcclxuICAgICAgZm9yICh2YXIgY29vcmQ9MDsgY29vcmQgPCBudW1jb29yZHM7ICsrY29vcmQpIHtcclxuICAgICAgICBsZXQgcm93ID0gcGFyc2VJbnQoY3VycmVudGNvb3Jkc1tjb29yZF0uc3BsaXQoXCItXCIpWzBdKTtcclxuICAgICAgICBsZXQgY29sID0gcGFyc2VJbnQoY3VycmVudGNvb3Jkc1tjb29yZF0uc3BsaXQoXCItXCIpWzFdKTtcclxuICAgICAgICBpZiAocm93IDwgbG93cm93KSB7XHJcbiAgICAgICAgICBsb3dyb3cgPSByb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyb3cgPiBoaWdocm93KSB7XHJcbiAgICAgICAgICBoaWdocm93ID0gcm93O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sIDwgbG93Y29sKSB7XHJcbiAgICAgICAgICBsb3djb2wgPSBjb2w7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2wgPiBoaWdoY29sKSB7XHJcbiAgICAgICAgICBoaWdoY29sID0gY29sO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobG93cm93IDwgaGlnaHJvdyB8fCBudW1jb29yZHMgPT09IDEpIHsgLy8gdGlsZXMgcGxhY2VkIG9uIGRpZmZlcmVuY2Ugcm93cyBzbyBwbGF5IGlzIHZlcnRpY2FsLCBvciBzaW5nbGUgdGlsZSBwbGF5ZWRcclxuICAgICAgICBsZXQgY29sID0gbG93Y29sOyAvLyBsb3djb2wgYW5kIGhpZ2hjb2wgd2lsbCBoYXZlIHRoZSBzYW1lIHZhbHVlXHJcbiAgICAgICAgLy8gZmluZCB0aGUgbG93ZXN0IHJvdyBudW1iZXIgb2YgdGhlIG1haW4gd29yZCwgd2hpY2ggbWF5IGJlIGxvd2VyIHRoYW4gdGhhdCBvZiB0aGUgZmlyc3QgcGxheWVkIHRpbGVcclxuICAgICAgICBsZXQgbG93ZXN0cm93ID0gbG93cm93O1xyXG4gICAgICAgIHdoaWxlIChsb3dlc3Ryb3cgPiAwICYmIHNxdWFyZUFycmF5W2xvd2VzdHJvdy0xXVtjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgIGxvd2VzdHJvdyA9IGxvd2VzdHJvdyAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZpbmQgdGhlIGhpZ2hlc3Qgcm93IG51bWJlciBvZiB0aGUgbWFpbiB3b3JkLCB3aGljaCBtYXkgYmUgaGlnaGVyIHRoYW4gdGhhdCBvZiB0aGUgbGFzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIGxldCBoaWdoZXN0cm93ID0gaGlnaHJvdztcclxuICAgICAgICB3aGlsZSAoaGlnaGVzdHJvdyA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbaGlnaGVzdHJvdysxXVtjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgIGhpZ2hlc3Ryb3cgPSBoaWdoZXN0cm93ICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd29yZHN0YXJ0Y29vcmQgPSBjLkJPQVJEX0NPTF9IRUFERVJTW2NvbF0gKyBjLkJPQVJEX1JPV19IRUFERVJTW2xvd2VzdHJvd107IC8vIHZlcnRpY2FsIHBsYXkgY29vcmRzIHN0YXJ0IHdpdGggY29sIGhlYWRlclxyXG4gICAgICAgIGZvciAodmFyIHJvdyA9IGxvd2VzdHJvdzsgcm93IDw9IGhpZ2hlc3Ryb3c7ICsrcm93KSB7XHJcbiAgICAgICAgICBtYWlud29yZCA9IG1haW53b3JkICsgc3F1YXJlQXJyYXlbcm93XVtjb2xdLmxldHRlcjtcclxuICAgICAgICAgIGxldCBjb29yZCA9IHJvdyArIFwiLVwiICsgY29sO1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCkgPiAtMSkgeyAvLyBUaGlzIHRpbGUgd2FzIHBsYXllZCwgY2hlY2sgZm9yIGhvb2tzXHJcbiAgICAgICAgICAgIGxldCBsb3dlc3Rjb2wgPSBjb2w7XHJcbiAgICAgICAgICAgIHdoaWxlIChsb3dlc3Rjb2wgPiAwICYmIHNxdWFyZUFycmF5W3Jvd11bbG93ZXN0Y29sLTFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgICBsb3dlc3Rjb2wgPSBsb3dlc3Rjb2wgLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBoaWdoZXN0Y29sID0gY29sO1xyXG4gICAgICAgICAgICB3aGlsZSAoaGlnaGVzdGNvbCA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbcm93XVtoaWdoZXN0Y29sKzFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgICBoaWdoZXN0Y29sID0gaGlnaGVzdGNvbCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxvd2VzdGNvbCA8IGhpZ2hlc3Rjb2wpIHsgLy8gaG9vayB3YXMgbWFkZVxyXG4gICAgICAgICAgICAgIGxldCBleHRyYXdvcmQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIHRlbXBjb2wgPSBsb3dlc3Rjb2w7IHRlbXBjb2wgPD0gaGlnaGVzdGNvbDsgKyt0ZW1wY29sKSB7XHJcbiAgICAgICAgICAgICAgICBleHRyYXdvcmQgPSBleHRyYXdvcmQgKyBzcXVhcmVBcnJheVtyb3ddW3RlbXBjb2xdLmxldHRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZXh0cmF3b3JkcyA9IFsuLi5leHRyYXdvcmRzLCBleHRyYXdvcmRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYWlud29yZC5sZW5ndGggPCAyKSB7IC8vIEhvcml6b250YWwgcGxheSBvciBzaW5nbGUgdGlsZSBkcm9wIHRoYXQgY2Fubm90IGJlIGEgdmVydGljYWwgcGxheVxyXG4gICAgICAgIGxldCByb3cgPSBsb3dyb3c7IC8vIGxvd3JvdyBhbmQgaGlnaHJvdyB3aWxsIGhhdmUgdGhlIHNhbWUgdmFsdWVcclxuICAgICAgICAvLyBmaW5kIHRoZSBsb3dlc3QgY29sIG51bWJlciBvZiB0aGUgbWFpbiB3b3JkLCB3aGljaCBtYXkgYmUgbG93ZXIgdGhhbiB0aGF0IG9mIHRoZSBmaXJzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIGxldCBsb3dlc3Rjb2wgPSBsb3djb2w7XHJcbiAgICAgICAgd2hpbGUgKGxvd2VzdGNvbCA+IDAgJiYgc3F1YXJlQXJyYXlbcm93XVtsb3dlc3Rjb2wtMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgbG93ZXN0Y29sID0gbG93ZXN0Y29sIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZmluZCB0aGUgaGlnaGVzdCBjb2wgbnVtYmVyIG9mIHRoZSBtYWluIHdvcmQsIHdoaWNoIG1heSBiZSBoaWdoZXIgdGhhbiB0aGF0IG9mIHRoZSBsYXN0IHBsYXllZCB0aWxlXHJcbiAgICAgICAgbGV0IGhpZ2hlc3Rjb2wgPSBoaWdoY29sO1xyXG4gICAgICAgIHdoaWxlIChoaWdoZXN0Y29sIDwgZWRnZSAmJiBzcXVhcmVBcnJheVtyb3ddW2hpZ2hlc3Rjb2wrMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgaGlnaGVzdGNvbCA9IGhpZ2hlc3Rjb2wgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3b3Jkc3RhcnRjb29yZCA9IGMuQk9BUkRfUk9XX0hFQURFUlNbcm93XSArIGMuQk9BUkRfQ09MX0hFQURFUlNbbG93ZXN0Y29sXTsgLy8gaG9yaXpvbnRhbCBwbGF5IGNvb3JkcyBzdGFydCB3aXRoIHJvdyBoZWFkZXJcclxuICAgICAgICBtYWlud29yZCA9IFwiXCI7IC8vIEluIGNhc2Ugd2UgZ290IGEgMSBsZXR0ZXIgbWFpbndvcmQgaW4gdGhlIHByZXZpb3VzIGJsb2NrXHJcbiAgICAgICAgZXh0cmF3b3JkcyA9IFtdOyAvLyBEaXR0b1xyXG4gICAgICAgIGZvciAodmFyIGNvbCA9IGxvd2VzdGNvbDsgY29sIDw9IGhpZ2hlc3Rjb2w7ICsrY29sKSB7XHJcbiAgICAgICAgICBtYWlud29yZCA9IG1haW53b3JkICsgc3F1YXJlQXJyYXlbcm93XVtjb2xdLmxldHRlcjtcclxuICAgICAgICAgIGxldCBjb29yZCA9IHJvdyArIFwiLVwiICsgY29sO1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCkgPiAtMSkgeyAvLyBUaGlzIHRpbGUgd2FzIHBsYXllZCwgY2hlY2sgZm9yIGhvb2tzXHJcbiAgICAgICAgICAgIGxldCBsb3dlc3Ryb3cgPSByb3c7XHJcbiAgICAgICAgICAgIHdoaWxlIChsb3dlc3Ryb3cgPiAwICYmIHNxdWFyZUFycmF5W2xvd2VzdHJvdy0xXVtjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgICBsb3dlc3Ryb3cgPSBsb3dlc3Ryb3cgLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBoaWdoZXN0cm93ID0gcm93O1xyXG4gICAgICAgICAgICB3aGlsZSAoaGlnaGVzdHJvdyA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbaGlnaGVzdHJvdysxXVtjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgICBoaWdoZXN0cm93ID0gaGlnaGVzdHJvdyArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxvd2VzdHJvdyA8IGhpZ2hlc3Ryb3cpIHsgLy8gaG9vayB3YXMgbWFkZVxyXG4gICAgICAgICAgICAgIGxldCBleHRyYXdvcmQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIHRlbXByb3cgPSBsb3dlc3Ryb3c7IHRlbXByb3cgPD0gaGlnaGVzdHJvdzsgKyt0ZW1wcm93KSB7XHJcbiAgICAgICAgICAgICAgICBleHRyYXdvcmQgPSBleHRyYXdvcmQgKyBzcXVhcmVBcnJheVt0ZW1wcm93XVtjb2xdLmxldHRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZXh0cmF3b3JkcyA9IFsuLi5leHRyYXdvcmRzLCBleHRyYXdvcmRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBpbnZhbGlkd29yZHMgPSBhd2FpdCB2YWxpZGF0ZVdvcmRzKG1haW53b3JkLCBleHRyYXdvcmRzKTtcclxuICAgICAgcGxheWluZm8gPSB7bWFpbndvcmQ6IG1haW53b3JkLCBleHRyYXdvcmRzOiBleHRyYXdvcmRzLCBwb3M6IHdvcmRzdGFydGNvb3JkLCBpbnZhbGlkd29yZHM6IGludmFsaWR3b3Jkc307XHJcbiAgICAgIHJldHVybiBwbGF5aW5mbztcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZVdvcmRzKG1haW53b3JkLCBleHRyYXdvcmRzKSB7XHJcbiAgICAgIC8vIEJ1aWxkIGNvbXBsZXRlIGxpc3Qgb2YgbmV3bHkgZm9ybWVkIHdvcmRzIGZvciB2YWxpZGF0aW9uIGFnYWluc3QgbGV4aWNvblxyXG4gICAgICBsZXQgYWxsd29yZHMgPSBtYWlud29yZDtcclxuICAgICAgZXh0cmF3b3Jkcy5mb3JFYWNoKChldykgPT4ge1xyXG4gICAgICAgIGFsbHdvcmRzID0gYWxsd29yZHMgKyBcIixcIiArIGV3O1xyXG4gICAgICB9KVxyXG4gICAgICBsZXQgdXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VOQUJMRTJLP3ZhbGlkYXRlPScgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20vRU5BQkxFMks/dmFsaWRhdGU9J1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGFsbHdvcmRzLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xyXG4gICAgICBjb25zdCBqZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGpkYXRhLmludmFsaWR3b3JkcztcclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIGFsbG93VW5kb0xhc3RUdXJuKCkge1xyXG4gICAgICBpZiAoIWFsbG93UmV3aW5kKSB7XHJcbiAgICAgICAgc2V0QWxsb3dSZXdpbmQodHJ1ZSk7XHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgICAgZnVuYzogXCJhbGxvd3VuZG9cIiwgLy8gYWxsb3cgdW5kbyBsYXN0IHR1cm5cclxuICAgICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCAvLyB3aG8gaXMgYWxsb3dpbmcgaXRcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBwZXJmb3JtUmV3aW5kKCkge1xyXG4gICAgICAvKiBTZW5kIHVuZG90dXJuIHRvIHNlcnZlciBhbmQgaXQgd2lsbCBzZW5kIHRoZSB1cGRhdGVkIGdhbWUgZGF0YSB0byBnYW1lIGNsaWVudHMsIGluY2x1ZGluZyB0aGlzIG9uZSAqL1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgZnVuYzogXCJ1bmRvdHVyblwiIC8vIHVuZG8gbGFzdCB0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgcmVjYWxsVGlsZXMgPSAoKSA9PiB7XHJcbiAgICAgIHNldFNxdWFyZUFycmF5KEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc25hcHNob3Quc3F1YXJlQXJyYXkpKSk7IC8vIERlZXAgY29weVxyXG4gICAgICBzZXRQdGlsZXMoWy4uLnNuYXBzaG90LnB0aWxlc10pO1xyXG4gICAgICBzZXRHdGlsZXMoWy4uLnNuYXBzaG90Lmd0aWxlc10pO1xyXG4gICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgICAgc2V0UmNkKFstMSwtMSxjLkRJUl9OT05FXSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgcGxheWVyUGFzc1R1cm4gPSAoKSA9PiB7XHJcbiAgICAgIGxldCBuZXdNb3ZlID0ge2J5OiBwYXJ0aWNpcGFudCwgdHlwZTogYy5NT1ZFX1RZUEVfUEFTU307XHJcbiAgICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICAgIGxldCBuZXdXaG9zZXR1cm4gPSBpc0RvdWJsZVBhc3MobmV3TW92ZXMpID8gYy5XSE9TRV9UVVJOX0dBTUVPVkVSIDogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBjLldIT1NFX1RVUk5fR1VBUkRTIDogYy5XSE9TRV9UVVJOX1BSSVNPTkVSUzsgLy8gSWYgYm90aCBwbGF5ZXJzIHBhc3MgdGhlbiBlbmQgdGhlIGdhbWVcclxuICAgICAgbGV0IG5ld1N5bmNzdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICAgIHJlY2FsbFRpbGVzKCk7IC8vIEluIGNhc2UgdGhleSBwdXQgc29tZSB0aWxlcyBvbiB0aGUgYm9hcmQgYmVmb3JlIGNsaWNraW5nIFBhc3NcclxuICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgc2V0U3luY3N0YW1wKG5ld1N5bmNzdGFtcCk7XHJcbiAgICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IFwiZXB0XCIgOiBcImVndFwiLCAvLyBlbmQgcHJpc29uZXJzIG9yIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ld1N5bmNzdGFtcCwgLy8gZm9yIGRhdGEgc3luYyBsb2dpY1xyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCwgLy8gd2hvIHBhc3NlZCB0aGVpciB0dXJuXHJcbiAgICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gZWl0aGVyIGl0IGlzIG5vdyBvcHBvbmVudHMgdHVybiBvciB0aGUgcGFzcyBlbmRlZCB0aGUgZ2FtZVxyXG4gICAgICAgICAgbW92ZTogbmV3TW92ZSAvLyB0aGUgbW92ZSB0aGF0IHdhcyBtYWRlXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcXVlc3RHYW1lRGF0YSA9ICgpID0+IHtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsXHJcbiAgICAgICAgICBmdW5jOiBcInJlcXVlc3RnYW1lZGF0YVwiLCAvLyByZXF1ZXN0IGdhbWUgZGF0YVxyXG4gICAgICAgICAgc3luY3N0YW1wOiBzeW5jc3RhbXAgLy8gc28gc2VydmVyIGNhbiBkZWNpZGUgd2hldGhlciBJIGFtIHVwIHRvIGRhdGVcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHJlcXVlc3RTeW5jRGF0YSA9ICgpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coYFNlbmQgcmVxdWVzdHN5bmNkYXRhICR7c3luY3N0YW1wfWApO1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgIGZ1bmM6IFwicmVxdWVzdHN5bmNkYXRhXCIgLy8gcmVxdWVzdCBzeW5jIGRhdGFcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKHBhcnRpY2lwYW50ICE9PSB3aG9zZXR1cm4pIHtyZXR1cm47fVxyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICBlbmRQbGF5ZXJzVHVybigpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgcmVjYWxsVGlsZXMoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGxldHRlcnRlc3QgPSAvXltBLVphLXpcXD9dJC87IC8vIHNpbmdsZSBsZXR0ZXIgb3IgcXVlc3Rpb24gbWFyayBrZXkgcHJlc3NlZFxyXG4gICAgICBpZiAoZXZlbnQua2V5Lm1hdGNoKGxldHRlcnRlc3QpKSB7XHJcbiAgICAgICAgbGV0IGxldHRlciA9IGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIGxldCByYWNrID0gd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTID8gcHRpbGVzIDogZ3RpbGVzO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3Rpb24gPSByYWNrLmluZGV4T2YobGV0dGVyKTtcclxuICAgICAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMSkge1xyXG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gcmFjay5pbmRleE9mKFwiP1wiKTsgLy8gVXNlIHRoZSBibGFuayBpZiB0aGV5IGhhdmUgb25lXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuZXdTZWxlY3Rpb24gPiAtMSkgeyAvLyBQcmVzc2VkIGxldHRlciBpcyBvbiB0aGUgcmFja1xyXG4gICAgICAgICAgbGV0IHJvdyA9IHJjZFswXTtcclxuICAgICAgICAgIGxldCBjb2wgPSByY2RbMV07XHJcbiAgICAgICAgICBsZXQgZGlyID0gcmNkWzJdO1xyXG4gICAgICAgICAgaWYgKHJvdyA+LTEgJiYgY29sID4gLTEgJiYgZGlyICE9PSBjLkRJUl9OT05FKSB7IC8vIHJvdywgY29sLCBkaXIgYXJlIHNldCB0byBhY2NlcHQga2V5c3Ryb2tlXHJcbiAgICAgICAgICAgIC8vIE5lZWQgdG8gZmlndXJlIG91dCBuZXh0IHNxYXVyZSB0byBhdXRvLXBsYWNlIGEgdGlsZVxyXG4gICAgICAgICAgICBsZXQgbmV3UmNkID0gcmNkO1xyXG4gICAgICAgICAgICBpZiAoZGlyID09PSBjLkRJUl9SSUdIVCkgeyAvLyBwbGF5aW5nIHJpZ2h0d2FyZHNcclxuICAgICAgICAgICAgICBsZXQgbmV3YyA9IC0xO1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIHRlbXBjb2wgPSBjb2wgKyAxOyB0ZW1wY29sIDwgZWRnZSArIDEgJiYgbmV3YyA9PT0gLTE7IHRlbXBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZUFycmF5W3Jvd11bdGVtcGNvbF0udXNlZGJ5ID09PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgICAgICAgICBuZXdjID0gdGVtcGNvbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKG5ld2MgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSY2QgPSBbLTEsLTEsYy5ESVJfTk9ORV07XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1JjZCA9IFtyb3csIG5ld2MsIGMuRElSX1JJR0hUXTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyb3csY29sLG5ld1NlbGVjdGlvbixuZXdSY2QpO1xyXG4gICAgICAgICAgICAgIHNldFNlbGVjdGlvbigtMSk7IC8vIHdoZW4gdGhleSBhcmUgdHlwaW5nIHRoZXkgYXJlIG5vdCBzZWxlY3RpbmcgcmFjayB0aWxlcyBieSBjbGlja2luZyB0aGVtIG9uIHRoZSByYWNrXHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkaXIgPT09IGMuRElSX0RPV04pIHsgLy8gcGxheWluZyBkb3dud2FyZHNcclxuICAgICAgICAgICAgICBsZXQgbmV3ciA9IC0xO1xyXG4gICAgICAgICAgICAgIGxldCBudW1yb3dzID0gKHJhY2tzaXplKjIpKzE7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgdGVtcHJvdyA9IHJvdyArIDE7IHRlbXByb3cgPCBudW1yb3dzICYmIG5ld3IgPT09IC0xOyB0ZW1wcm93KyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzcXVhcmVBcnJheVt0ZW1wcm93XVtjb2xdLnVzZWRieSA9PT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgICAgICAgbmV3ciA9IHRlbXByb3c7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChuZXdyID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgbmV3UmNkID0gWy0xLC0xLGMuRElSX05PTkVdO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSY2QgPSBbbmV3ciwgY29sLCBjLkRJUl9ET1dOXTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyb3csY29sLG5ld1NlbGVjdGlvbixuZXdSY2QpO1xyXG4gICAgICAgICAgICAgIHNldFNlbGVjdGlvbigtMSk7IC8vIHdoZW4gdGhleSBhcmUgdHlwaW5nIHRoZXkgYXJlIG5vdCBzZWxlY3RpbmcgcmFjayB0aWxlcyBieSBjbGlja2luZyB0aGVtIG9uIHRoZSByYWNrXHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkJhY2tzcGFjZVwiICYmIGN1cnJlbnRjb29yZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vIFNhbWUgYXMgY2xpY2tpbmcgb24gYSBwbGF5ZWQtdGhpcy1tb3ZlIHRpbGUgaW4gdGVybXMgb2YgcmV0dXJuaW5nIHRoZSB0aWxlIHRvIHRoZSByYWNrXHJcbiAgICAgICAgLy8gSG93ZXZlciB3ZSBhbHNvIHdhbnQgdG8gc2V0IHVwIHJjZCBzbyB0aGV5IGNhbiBwcmVzcyB0aGUga2V5IHRoZXkgbWVhbnQgYW5kIGNvbnRpbnVlXHJcbiAgICAgICAgbGV0IGNvb3JkID0gY3VycmVudGNvb3Jkc1tjdXJyZW50Y29vcmRzLmxlbmd0aCAtIDFdOyAvLyB0aWxlIHRvIHJldHVybiB0byByYWNrXHJcbiAgICAgICAgbGV0IHJvdyA9IHBhcnNlSW50KGNvb3JkLnNwbGl0KFwiLVwiKVswXSk7XHJcbiAgICAgICAgbGV0IGNvbCA9IHBhcnNlSW50KGNvb3JkLnNwbGl0KFwiLVwiKVsxXSk7XHJcbiAgICAgICAgbGV0IG5ld0N1cnJlbnRjb29yZHMgPSBbLi4uY3VycmVudGNvb3Jkc107XHJcbiAgICAgICAgbGV0IG5ld1B0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgICAgICBsZXQgbmV3U3F1YXJlQXJyYXkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNxdWFyZUFycmF5KSk7IC8vIERlZXAgY29weVxyXG4gICAgICAgIGxldCBuZXdTcXVhcmVBcnJheVJvdyA9IG5ld1NxdWFyZUFycmF5W3Jvd107XHJcbiAgICAgICAgbGV0IG5ld1NxdWFyZUFycmF5Q2VsbCA9IG5ld1NxdWFyZUFycmF5Um93W2NvbF07XHJcbiAgICAgICAgbGV0IG5ld1JjZCA9IFstMSwtMSxjLkRJUl9OT05FXTtcclxuICAgICAgICBsZXQgbmV3U2VsZWN0aW9uID0gc2VsZWN0aW9uO1xyXG4gICAgICAgIG5ld0N1cnJlbnRjb29yZHMuc3BsaWNlKGN1cnJlbnRjb29yZHMubGVuZ3RoLTEsMSk7XHJcbiAgICAgICAgbGV0IHJldHVybmVkVGlsZSA9IHNxdWFyZUFycmF5W3Jvd11bY29sXS5sZXR0ZXI7XHJcbiAgICAgICAgaWYgKHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX1BSSVNPTkVSUykge1xyXG4gICAgICAgICAgbmV3UHRpbGVzLnB1c2gocmV0dXJuZWRUaWxlKTtcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1B0aWxlcy5sZW5ndGgtMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmV3R3RpbGVzLnB1c2gocmV0dXJuZWRUaWxlKTtcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld0d0aWxlcy5sZW5ndGgtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlDZWxsLnVzZWRieSA9IGMuVVNFRF9CWV9OT05FO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Q2VsbC5sZXR0ZXIgPSBjLkxFVFRFUl9OT05FO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Um93W2NvbF0gPSBuZXdTcXVhcmVBcnJheUNlbGw7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlbcm93XSA9IFsuLi5uZXdTcXVhcmVBcnJheVJvd107XHJcbiAgICAgICAgbGV0IGRpciA9IHJjZFsyXTtcclxuICAgICAgICBpZiAoZGlyICE9PSBjLkRJUl9OT05FKSB7XHJcbiAgICAgICAgICAvLyBkaXJlY3Rpb24gd2FzIHNldCBzbyBrZWVwIGl0XHJcbiAgICAgICAgICBuZXdSY2QgPSBbcm93LGNvbCxkaXJdO1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IC0xOyAvLyBpZiB0aGV5IGJhY2tzcGFjZSBhbGwgdGhlIGxldHRlcnMgb2ZmIGxlYXZlIHJhY2sgdGlsZSB1bnNlbGVjdGVkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEN1cnJlbnRjb29yZHMobmV3Q3VycmVudGNvb3Jkcyk7XHJcbiAgICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgICAgc2V0U3F1YXJlQXJyYXkobmV3U3F1YXJlQXJyYXkpO1xyXG4gICAgICAgIHNldFJjZChuZXdSY2QpO1xyXG4gICAgICAgIHNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVNb3ZlQ2xpY2sgPSAoX21pKSA9PiB7fVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmlzb25icmVha1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1jb250YWluZXIgdzMtdGVhbCB0b3BCYXJIZWlnaHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1taWRkbGVcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm15SGVhZGluZ0ZvbnRcIj5Qcmlzb24gQnJlYWs8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktdG9wbGVmdCB3My1ibGFjayB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICBHYW1lIGlkOiB7Z2FtZWlkfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktYm90dG9tbGVmdCB3My1vcmFuZ2UgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgUHJpc29uZXJzOiB7XHJcbiAgICAgICAgICAgICAgcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBuaWNrbmFtZVxyXG4gICAgICAgICAgICAgIDogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMgPyBvcHBuYW1lXHJcbiAgICAgICAgICAgICAgOiAnU2VjcmV0J1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LXRvcHJpZ2h0IHczLWJsYWNrIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktYm90dG9tcmlnaHQgdzMtb3JhbmdlIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIEd1YXJkczoge1xyXG4gICAgICAgICAgICAgIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gb3BwbmFtZVxyXG4gICAgICAgICAgICAgIDogcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMgPyBuaWNrbmFtZVxyXG4gICAgICAgICAgICAgIDogJ1NlY3JldCdcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGJUaWxlQW5kTW92ZXNPdXRlclwiPlxyXG4gICAgICAgICAgICAgIDxTaG93VW5zZWVuVGlsZXNcclxuICAgICAgICAgICAgICAgIHRpbGVzPXt0aWxlc31cclxuICAgICAgICAgICAgICAgIG90aGVydGlsZXM9e1xyXG4gICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IGd0aWxlc1xyXG4gICAgICAgICAgICAgICAgICA6IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTID8gcHRpbGVzXHJcbiAgICAgICAgICAgICAgICAgIDogW119IC8vIE9ic2VydmVycyBzZWUgYm90aCByYWNrcyBzbyBub3RoaW5nIHRvIGV4Y2x1ZGUgZnJvbSB0aWxlYmFnIGFzIHVuc2VlblxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8U2hvd01vdmVzIG1vdmVzPXttb3Zlc30gb25tb3ZlY2xpY2s9eyhtaSkgPT4gaGFuZGxlTW92ZUNsaWNrKG1pKX0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwYlBsYXllck91dGVyU2VjdGlvblwiPlxyXG4gICAgICAgICAgICB7cGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgP1xyXG4gICAgICAgICAgICAgIDxQbGF5ZXJTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICByYWNrdGlsZXM9e3B0aWxlc31cclxuICAgICAgICAgICAgICAgIHdob3NldHVybj17d2hvc2V0dXJufVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IGhhbmRsZVJhY2tUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja0ZpbmlzaFR1cm49eygpID0+IGVuZFBsYXllcnNUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrVGlsZVJlY2FsbD17KCkgPT4gcmVjYWxsVGlsZXMoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tUaWxlRXhjaGFuZ2U9eygpID0+IHN3YXBQbGF5ZXJzVGlsZXMoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tQYXNzUGxheT17KCkgPT4gcGxheWVyUGFzc1R1cm4oKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tVbmRvTGFzdFBsYXk9eygpID0+IHBlcmZvcm1SZXdpbmQoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tBbGxvd1VuZG89eygpID0+IGFsbG93VW5kb0xhc3RUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudD17cGFydGljaXBhbnR9XHJcbiAgICAgICAgICAgICAgICBtb3Zlcz17bW92ZXN9XHJcbiAgICAgICAgICAgICAgICBhbGxvd1Jld2luZD17YWxsb3dSZXdpbmR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgOnBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTID9cclxuICAgICAgICAgICAgICA8UGxheWVyU2VjdGlvblxyXG4gICAgICAgICAgICAgICAgcmFja3RpbGVzPXtndGlsZXN9XHJcbiAgICAgICAgICAgICAgICB3aG9zZXR1cm49e3dob3NldHVybn1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KHRpKSA9PiBoYW5kbGVSYWNrVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tGaW5pc2hUdXJuPXsoKSA9PiBlbmRQbGF5ZXJzVHVybigpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1RpbGVSZWNhbGw9eygpID0+IHJlY2FsbFRpbGVzKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrVGlsZUV4Y2hhbmdlPXsoKSA9PiBzd2FwUGxheWVyc1RpbGVzKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrUGFzc1BsYXk9eygpID0+IHBsYXllclBhc3NUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrVW5kb0xhc3RQbGF5PXsoKSA9PiBwZXJmb3JtUmV3aW5kKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrQWxsb3dVbmRvPXsoKSA9PiBhbGxvd1VuZG9MYXN0VHVybigpfVxyXG4gICAgICAgICAgICAgICAgcGFydGljaXBhbnQ9e3BhcnRpY2lwYW50fVxyXG4gICAgICAgICAgICAgICAgbW92ZXM9e21vdmVzfVxyXG4gICAgICAgICAgICAgICAgYWxsb3dSZXdpbmQ9e2FsbG93UmV3aW5kfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUGxheWVySW5uZXJTZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUGxheWVyVGl0bGVcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntjLlBBUlRZX0lDT05fUFJJU09ORVJTfTwvaT4mbmJzcDt7Yy5QQVJUWV9USVRMRV9QUklTT05FUlN9Jm5ic3A7PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57Yy5QQVJUWV9JQ09OX1BSSVNPTkVSU308L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAge3B0aWxlcyAmJiBwdGlsZXMubWFwKCh0LCB0aSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxPYnNlcnZlclJhY2tUaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgT2JzZXJ2ZXJQcmlzb25lcnNSYWNrVGlsZSR7dGl9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudD0nUCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxldmFsdWU9e3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZWluZGV4PXt0aX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJQbGF5ZXJUaXRsZVwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+e2MuUEFSVFlfSUNPTl9HVUFSRFN9PC9pPiZuYnNwO3tjLlBBUlRZX1RJVExFX0dVQVJEU30mbmJzcDs8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntjLlBBUlRZX0lDT05fR1VBUkRTfTwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICB7Z3RpbGVzICYmIGd0aWxlcy5tYXAoKHQsIHRpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE9ic2VydmVyUmFja1RpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BPYnNlcnZlckd1YXJkc1JhY2tUaWxlJHt0aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50PSdHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGV2YWx1ZT17dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlaW5kZXg9e3RpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIHtwYXJ0aWNpcGFudCA9PT0gd2hvc2V0dXJuID9cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIG9uS2V5RG93bkNhcHR1cmU9e2hhbmRsZUtleURvd259PlxyXG4gICAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICAgIHNxdWFyZUFycmF5PXtzcXVhcmVBcnJheX1cclxuICAgICAgICAgICAgICAgICAgcmNkPXtyY2R9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhyaSwgY2kpID0+IGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socmksIGNpLCAtMSxudWxsKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICAgIHNxdWFyZUFycmF5PXtzcXVhcmVBcnJheX1cclxuICAgICAgICAgICAgICAgICAgcmNkPXtyY2R9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICA8U2hvd1Jlc2N1ZXMgcmVzY3Vlcz17cmVzY3Vlc30gLz5cclxuICAgICAgICAgICAgPENoYXQgZ2FtZWlkPXtnYW1laWR9IGNsaWVudD17Y2xpZW50fSBuaWNrbmFtZT17bmlja25hbWV9IG1zZ3M9e2NoYXRtc2dzfSBzZXRNc2dzPXtzZXRDaGF0bXNnc30gcGFydGljaXBhbnQ9e3BhcnRpY2lwYW50fS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktY29udGFpbmVyIHczLXRlYWwgdG9wQmFySGVpZ2h0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktbWlkZGxlIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAge3dob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX0dBTUVPVkVSID9cclxuICAgICAgICAgICAgICA8aDE+R2FtZSBPdmVyITwvaDE+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICA8cD57Yy5KT0tFX0FSUkFZW2pva2VpbmRleF19PC9wPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG5jb25zdCBPYnNlcnZlclJhY2tUaWxlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRVbnNlbGVjdGVkID0gXCJVbnNlbGVjdGVkIFwiO1xyXG4gIGNvbnN0IHVOb3RVID0gcHJvcHMudGlsZXZhbHVlID09PSBcIlFcIiA/IFwidSBcIiA6IFwiXCI7XHJcbiAgY29uc3QgdGlsZWNsYXNzID0gXCJwYlRpbGVPblJhY2sgXCIgKyBzZWxlY3RlZFVuc2VsZWN0ZWQgKyB1Tm90VSArIHByb3BzLnBhcnRpY2lwYW50O1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICAgIGtleT17cHJvcHMudGlsZWluZGV4fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXt0aWxlY2xhc3N9XHJcbiAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlT25SYWNrVGV4dFwiPntwcm9wcy50aWxldmFsdWV9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IEdhbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==