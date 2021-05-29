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
/* harmony import */ var _pb_rescuesSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pb/rescuesSection */ "./pages/pb/rescuesSection.js");
/* harmony import */ var _pb_chatSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pb/chatSection */ "./pages/pb/chatSection.js");
/* harmony import */ var _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/pbcommon */ "./lib/pbcommon.js");
/* harmony import */ var next_dist_client_route_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/dist/client/route-loader */ "./node_modules/next/dist/client/route-loader.js");
/* harmony import */ var next_dist_client_route_loader__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_route_loader__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\pb\\game.js",
    _s2 = $RefreshSig$();












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
  _s2();

  var _s = $RefreshSig$();

  const middle = racksize; // Middle element in row or column array

  const edge = racksize * 2; // Last element in row or column array

  const initialtiles = racksize === 6 ? _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["TILEBAG6"] : racksize === 7 ? _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["TILEBAG7"] : racksize === 5 ? _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["TILEBAG5"] : _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["TILEBAG4"];
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
    0: squareArray,
    1: setSquareArray
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: selection,
    1: setSelection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(-1); // relative to rack of player making a play

  const {
    0: whoseturn,
    1: setWhoseturn
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["WHOSE_TURN_PRISONERS"]); // game starts with prisoners play

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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([-1, -1, _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["DIR_NONE"]]);
  const {
    0: moves,
    1: setMoves
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // move history, each element is the array is a json object of info about the move

  const {
    0: snapshot,
    1: setSnapshot
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    squareArray: [],
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
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
      myaudio.src = participant === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["PARTY_TYPE_GUARDS"] ? "https://tilerunner.github.io/OneGotAway.m4a" : "https://tilerunner.github.io/yippee.m4a";
      myaudio.play();
    }
  }, [rescues]); // Play a sound when a rescue is made

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let newji = jokeindex + 1;

    if (newji >= _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["JOKE_ARRAY"].length) {
      newji = 0;
    }

    setJokeindex(newji);
    const interval = setInterval(() => {
      // If it is not my turn && the game has not ended
      if (participant !== whoseturn && whoseturn !== _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["WHOSE_TURN_GAMEOVER"]) {
        // I am waiting for opponent move to come through but sometimes it gets missed (no idea why)
        requestGameData(); // Send a request for game data in case opponent moved and we missed the update
      }
    }, _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["PING_INTERVAL"]); // this many milliseconds between above code block executions

    return () => clearInterval(interval);
  }, [whoseturn]); // want up to date value of whoseturn to decide whether to ask for an update

  const initializeRoutine = () => {
    let firstSquareArray = _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["InitialSquareArray"](racksize);
    setSquareArray(firstSquareArray);

    if (!isrejoin && participant === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["PARTY_TYPE_PRISONERS"]) {
      startGame(firstSquareArray); // Prisoner is starting the game so pick racks
    } else {
      joinGame(); // Prisoner rejoin or guard join or guard rejoin
    }
  };

  const startGame = firstSquareArray => {
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
      squareArray: firstSquareArray,
      ptiles: [...tempPTiles],
      gtiles: [...tempGTiles]
    });
    client.send({
      type: "pb",
      func: "startgame",
      gameid: gameid,
      // Game id
      racksize: racksize,
      // Rack size option
      sender: participant,
      // This will be prisoners since prisoners start the game
      nickname: nickname,
      // This will be the prisoners nickname since prisoners are sending this
      squareArray: firstSquareArray,
      // This will be the initial square array since no moves have been made yet
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
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      func: "joingame",
      // join the game
      sender: participant
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // This code executes the first time Game is used only
    initializeRoutine();
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
    setRcd(-1, -1, _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["DIR_NONE"]);
    setCurrentcoords([]);
  }

  function processGameMessage(message) {
    let messageData = JSON.parse(message); // I want access to some updated values for checking missing rack tiles

    let newPtiles = [...ptiles];
    let newGtiles = [...gtiles];
    let newWhoseturn = whoseturn;

    if (messageData.sender === participant) {
      console.log(`pm: ${messageData.func} ${messageData.sender} ptiles=${messageData.ptiles} gtiles=${messageData.gtiles}`);
    }

    if (messageData.type === "pb" && messageData.func === "announce") {
      client.send({
        type: "pb",
        func: "hello",
        sender: participant,
        gameid: gameid,
        nickname: nickname,
        // player nickname
        whoseturn: whoseturn,
        racksize: racksize // rack size option (lobby needs to know for when guards join game and they call Game)

      });
    } else if (messageData.gameid === gameid && messageData.type === "pb") {
      // This instance of a prison break game
      if (messageData.sender != participant && oppname === "" && messageData.nickname && messageData.nickname.length > 0) {
        // Opponent sent a message including their nickname and I don't have their nickname yet
        setOppname(messageData.nickname);
      }

      if ((messageData.func === "requestgamedata" || messageData.func === "joingame") && messageData.sender !== participant) {
        // Opponent joined game or requested game info
        client.send({
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
          squareArray: squareArray,
          ptiles: ptiles,
          gtiles: gtiles,
          whoseturn: whoseturn,
          snapshot: snapshot,
          moves: moves,
          rescues: rescues,
          racksize: racksize,
          // rack size option (lobby needs to know for when guards join game and they call Game)
          allowRewind: allowRewind
        });
      }

      if (messageData.func === "providegamedata" && messageData.sender !== participant) {
        // Opponent provided game data but do we need it?
        // If they have a different move count then we need it (they may have undone a move)
        // If they have same move count but a different tile bag count then we need it (no moves made but tiles are picked)
        // If guards join after prisoners made a move then guards have no tiles ("ept" got processed which leaves gtiles alone)
        if (messageData.moves.length !== moves.length || messageData.tiles.length !== tiles.length || participant === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["PARTY_TYPE_GUARDS"] && gtiles.length === 0 && currentcoords.length === 0 || participant === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["PARTY_TYPE_PRISONERS"] && ptiles.length === 0 && currentcoords.length === 0 // Not sure I need it but...
        ) {
            newPtiles = [...messageData.ptiles];
            newGtiles = [...messageData.gtiles];
            newWhoseturn = messageData.whoseturn;
            setTiles(messageData.tiles);
            setSquareArray(messageData.squareArray);
            setPtiles(messageData.ptiles);
            setGtiles(messageData.gtiles);
            setWhoseturn(messageData.whoseturn);
            setSnapshot(messageData.snapshot);
            setMoves(messageData.moves);
            setRescues(messageData.rescues);
            setAllowRewind(messageData.allowRewind);
          }
      }

      if (messageData.func === "ept" && participant === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["PARTY_TYPE_GUARDS"]) {
        // Prisoners sent end prisoners turn, Guards pick it up
        putAtMoveStart();
        newPtiles = [...messageData.ptiles];
        newWhoseturn = messageData.whoseturn;
        setWhoseturn(messageData.whoseturn);
        setSquareArray(messageData.squareArray);
        setPtiles(messageData.ptiles);
        setTiles(messageData.tiles);
        setMoves(messageData.moves);
        setRescues(messageData.rescues);
        setSnapshot({
          squareArray: JSON.parse(JSON.stringify(messageData.squareArray)),
          // Deep copy
          ptiles: [...messageData.ptiles],
          gtiles: [...gtiles]
        });
      }

      if (messageData.func === "egt" && participant === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["PARTY_TYPE_PRISONERS"]) {
        // Guards sent end guards turn, Prisoners pick it up
        putAtMoveStart();
        newGtiles = [...messageData.gtiles];
        newWhoseturn = messageData.whoseturn;
        setWhoseturn(messageData.whoseturn);
        setSquareArray(messageData.squareArray);
        setGtiles(messageData.gtiles);
        setTiles(messageData.tiles);
        setMoves(messageData.moves);
        setSnapshot({
          squareArray: JSON.parse(JSON.stringify(messageData.squareArray)),
          // Deep copy
          ptiles: [...ptiles],
          gtiles: [...messageData.gtiles]
        });
      }

      if (messageData.func === "undoturn" && messageData.sender !== participant) {
        // opponent undid their last turn
        putAtMoveStart();
        newPtiles = [...messageData.ptiles];
        newGtiles = [...messageData.gtiles];
        newWhoseturn = messageData.whoseturn;
        setTiles(messageData.tiles);
        setPtiles(messageData.ptiles);
        setGtiles(messageData.gtiles);
        setSquareArray(messageData.squareArray);
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

    if (newPtiles.length === 0 && newWhoseturn === "P" && participant === "P") {
      alert("Prisoners turn with no tiles! Make Guards Pass to get your tiles. Sorry!");
    }

    if (newGtiles.length === 0 && newWhoseturn === "G" && participant === "G") {
      alert("Guards turn with no tiles! Make Prisoners Pass to get your tiles. Sorry!");
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

    if (newSelection > -1 && newSquareArrayCell.usedby === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"]) {
      // tile is selected from rack and clicked square is not used yet
      let selectedTile = whoseturn === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["WHOSE_TURN_PRISONERS"] ? newPtiles[newSelection] : newGtiles[newSelection];
      newSquareArrayCell.letter = selectedTile;
      newSquareArrayCell.usedby = whoseturn;
      newSquareArrayRow[ci] = newSquareArrayCell;
      newSquareArray[ri] = [...newSquareArrayRow];
      whoseturn === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["WHOSE_TURN_PRISONERS"] ? newPtiles.splice(newSelection, 1) : newGtiles.splice(newSelection, 1);

      if (whoseturn === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["WHOSE_TURN_PRISONERS"] && newSelection === newPtiles.length) {
        newSelection = newSelection - 1;
      }

      if (whoseturn === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["WHOSE_TURN_GUARDS"] && newSelection === newGtiles.length) {
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
      whoseturn === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["WHOSE_TURN_PRISONERS"] ? newPtiles.push(newSquareArrayCell.letter) : newGtiles.push(newSquareArrayCell.letter);
      newSquareArrayCell.usedby = _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"];
      newSquareArrayCell.letter = _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["LETTER_NONE"];
      newSquareArrayRow[ci] = newSquareArrayCell;
      newSquareArray[ri] = [...newSquareArrayRow];
      setSelection(whoseturn === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["WHOSE_TURN_PRISONERS"] ? newPtiles.length - 1 : newGtiles.length - 1);
      newCurrentcoords.splice(cci, 1);
      setSquareArray(newSquareArray);
      setPtiles(newPtiles);
      setGtiles(newGtiles);
      setCurrentcoords(newCurrentcoords);
      setRcd(-1, -1, _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["DIR_NONE"]); // make player click again to set direction

      return;
    } // They didn't click a square to place a selected tile there
    // They didn't click a square to remove an existing tile


    if (newSquareArrayCell.usedby === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"]) {
      // There is nothing on the square so they are picking where to place the next tile via keyboard
      let newDirection = rcd[0] !== ri || rcd[1] !== ci ? _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["DIR_RIGHT"] : //click new square, start with right
      rcd[2] === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["DIR_RIGHT"] ? _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["DIR_DOWN"] : //click same square that was right, change to down
      rcd[2] === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["DIR_DOWN"] ? _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["DIR_NONE"] : //click same square that was down, change to no direction
      _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["DIR_RIGHT"]; // click same square that was no direction, change to right

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


    let newrack = participant === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["PARTY_TYPE_PRISONERS"] ? [...ptiles] : [...gtiles];
    let movefrom = selection;
    let movetile = newrack[movefrom];
    let moveto = tileindex;
    newrack.splice(movefrom, 1); // remove tile from original selected position

    newrack.splice(moveto, 0, movetile); // insert moved tile at the newly selected position

    participant === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["PARTY_TYPE_PRISONERS"] ? setPtiles(newrack) : setGtiles(newrack);
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
    let newWhoseturn = newPtiles.length > 0 ? _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["WHOSE_TURN_GUARDS"] : _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["WHOSE_TURN_GAMEOVER"];

    if (!_lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["AnyUnusedEscapeHatches"](squareArray)) {
      newWhoseturn = _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["WHOSE_TURN_GAMEOVER"]; // No escape hatches left
    }

    let playinfo = getPlayInfo();
    let newMove = {
      by: _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["PARTY_TYPE_PRISONERS"],
      type: _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["MOVE_TYPE_PLAY"],
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
      squareArray: JSON.parse(JSON.stringify(squareArray)),
      // Deep copy
      ptiles: [...newPtiles],
      gtiles: [...gtiles]
    });
    client.send({
      gameid: gameid,
      // the id for the game
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      func: "ept",
      // end prisoners turn
      sender: participant,
      squareArray: squareArray,
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

    });
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
    let snapsquarearray = JSON.parse(JSON.stringify(squareArray)); // Deep copy

    let snapptiles = [...ptiles];
    let snapgtiles = [...gtiles];
    let newWhoseturn = newGtiles.length > 0 ? _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["WHOSE_TURN_PRISONERS"] : _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["WHOSE_TURN_GAMEOVER"];

    if (!_lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["AnyUnusedEscapeHatches"](squareArray)) {
      newWhoseturn = _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["WHOSE_TURN_GAMEOVER"]; // No escape hatches left
    }

    let playinfo = getPlayInfo();
    let newMove = {
      by: _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["PARTY_TYPE_GUARDS"],
      type: _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["MOVE_TYPE_PLAY"],
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
      squareArray: snapsquarearray,
      ptiles: snapptiles,
      gtiles: snapgtiles
    });
    client.send({
      gameid: gameid,
      // the id for the game
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      func: "egt",
      // end guards turn
      sender: participant,
      squareArray: squareArray,
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

    });
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
      by: _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["PARTY_TYPE_PRISONERS"],
      type: _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["MOVE_TYPE_SWAP"],
      rewindInfo: rewindInfo
    };
    let newMoves = [...moves, newMove];
    putAtMoveStart();
    setSquareArray(JSON.parse(JSON.stringify(snapshot.squareArray))); // Deep copy

    setWhoseturn(_lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["WHOSE_TURN_GUARDS"]);
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
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      func: "ept",
      // end prisoners turn
      sender: participant,
      whoseturn: _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["WHOSE_TURN_GUARDS"],
      // swap never ends the game so go to opponent
      racksize: racksize,
      // rack size option (lobby needs to know for when guards join game and they call Game)
      squareArray: snapshot.squareArray,
      // revert to start of turn squares
      ptiles: newPtiles,
      // we picked new tiles for prisoners rack
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      moves: newMoves,
      // a move was made
      rescues: rescues // no rescues on an exchange

    });
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
      by: _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["PARTY_TYPE_GUARDS"],
      type: _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["MOVE_TYPE_SWAP"],
      rewindInfo: rewindInfo
    };
    let newMoves = [...moves, newMove];
    putAtMoveStart();
    setSquareArray(JSON.parse(JSON.stringify(snapshot.squareArray))); // Deep copy

    setWhoseturn(_lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["WHOSE_TURN_PRISONERS"]);
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
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      func: "egt",
      // end guards turn
      sender: participant,
      whoseturn: _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["WHOSE_TURN_PRISONERS"],
      // swap never ends the game so go to opponent
      racksize: racksize,
      // rack size option (lobby needs to know for when guards join game and they call Game)
      squareArray: snapshot.squareArray,
      // revert to start of turn squares
      gtiles: newGtiles,
      // we picked new tiles for prisoners rack
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      moves: newMoves // a move was made

    });
  };

  function isPlayValid() {
    // Check if this is the first word since it affects the validity rules
    let firstWord = true;
    let nummoves = moves.length;

    for (var moveindex = 0; firstWord && moveindex < nummoves; ++moveindex) {
      if (moves[moveindex].type === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["MOVE_TYPE_PLAY"]) {
        firstWord = false;
      }
    } // First word must hit center square


    if (firstWord && squareArray[middle][middle].usedby === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"]) {
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


      if (!(temprow > 0 && squareArray[temprow - 1][tempcol].usedby !== _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"]) && !(tempcol > 0 && squareArray[temprow][tempcol - 1].usedby !== _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"]) && !(temprow < edge && squareArray[temprow + 1][tempcol].usedby !== _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"]) && !(tempcol < edge && squareArray[temprow][tempcol + 1].usedby !== _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"])) {
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
        if (squareArray[temprow][tempcol].usedby === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"]) {
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

          if (lowrow === highrow && temprow > 0 && squareArray[temprow - 1][tempcol].usedby !== _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"]) {
            hookmade = true;
          }

          if (lowrow === highrow && temprow < edge && squareArray[temprow + 1][tempcol].usedby !== _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"]) {
            hookmade = true;
          }

          if (lowcol === highcol && tempcol > 0 && squareArray[temprow][tempcol - 1].usedby !== _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"]) {
            hookmade = true;
          }

          if (lowcol === highcol && tempcol < edge && squareArray[temprow][tempcol + 1].usedby !== _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"]) {
            hookmade = true;
          }
        }
      }
    }

    if (!firstWord) {
      // We already found play through a tile between first and last played tile
      // Now check if played word has a tile before first or after last played tile
      if (lowrow === highrow && lowcol > 0 && squareArray[lowrow][lowcol - 1].usedby !== _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"]) {
        playthru = true;
      }

      if (lowrow === highrow && highcol < edge && squareArray[lowrow][highcol + 1].usedby !== _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"]) {
        playthru = true;
      }

      if (lowcol === highcol && lowrow > 0 && squareArray[lowrow - 1][lowcol] !== _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"]) {
        playthru = true;
      }

      if (lowcol === highcol && highrow < edge && squareArray[highrow + 1][lowcol].usedby !== _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"]) {
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

      while (lowestrow > 0 && squareArray[lowestrow - 1][col].usedby !== _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"]) {
        lowestrow = lowestrow - 1;
      } // find the highest row number of the main word, which may be higher than that of the last played tile


      let highestrow = highrow;

      while (highestrow < edge && squareArray[highestrow + 1][col].usedby !== _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"]) {
        highestrow = highestrow + 1;
      }

      wordstartcoord = _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["BOARD_COL_HEADERS"][col] + _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["BOARD_ROW_HEADERS"][lowestrow]; // vertical play coords start with col header

      for (var row = lowestrow; row <= highestrow; ++row) {
        mainword = mainword + squareArray[row][col].letter;
        let coord = row + "-" + col;

        if (currentcoords.indexOf(coord) > -1) {
          // This tile was played, check for hooks
          let lowestcol = col;

          while (lowestcol > 0 && squareArray[row][lowestcol - 1].usedby !== _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"]) {
            lowestcol = lowestcol - 1;
          }

          let highestcol = col;

          while (highestcol < edge && squareArray[row][highestcol + 1].usedby !== _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"]) {
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

      while (lowestcol > 0 && squareArray[row][lowestcol - 1].usedby !== _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"]) {
        lowestcol = lowestcol - 1;
      } // find the highest col number of the main word, which may be higher than that of the last played tile


      let highestcol = highcol;

      while (highestcol < edge && squareArray[row][highestcol + 1].usedby !== _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"]) {
        highestcol = highestcol + 1;
      }

      wordstartcoord = _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["BOARD_ROW_HEADERS"][row] + _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["BOARD_COL_HEADERS"][lowestcol]; // horizontal play coords start with row header

      mainword = ""; // In case we got a 1 letter mainword in the previous block

      extrawords = []; // Ditto

      for (var col = lowestcol; col <= highestcol; ++col) {
        mainword = mainword + squareArray[row][col].letter;
        let coord = row + "-" + col;

        if (currentcoords.indexOf(coord) > -1) {
          // This tile was played, check for hooks
          let lowestrow = row;

          while (lowestrow > 0 && squareArray[lowestrow - 1][col].usedby !== _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"]) {
            lowestrow = lowestrow - 1;
          }

          let highestrow = row;

          while (highestrow < edge && squareArray[highestrow + 1][col].usedby !== _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"]) {
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

  function getRewindInfo() {
    // Must be called before you start setting new values for stuff

    /* Rewind info is everything you need to reverse the move that we do not already have in the new move variable:
        squareArray: says what tile is on what square and who played it and what the row and col are
        rack: players rack before move was made 
        tiles: tile pool before picking new tiles
        rescues: rescue count
    */
    let rewindInfo = {
      squareArray: JSON.parse(JSON.stringify(snapshot.squareArray)),
      // Deep copy
      rack: whoseturn === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["WHOSE_TURN_GUARDS"] ? [...snapshot.gtiles] : [...snapshot.ptiles],
      tiles: [...tiles],
      rescues: rescues
    };
    return rewindInfo;
  }

  function allowUndoLastTurn() {
    if (!allowRewind) {
      setAllowRewind(true);
      client.send({
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

      });
    }
  }

  function performRewind() {
    /* Rewind the last move and take it off the end of the move list */
    let numMoves = moves.length;
    let lastMove = moves[moves.length - 1];
    let newSquareArray = JSON.parse(JSON.stringify(lastMove.rewindInfo.squareArray)); // Deep copy

    let newTiles = [...lastMove.rewindInfo.tiles];
    let newPtiles = lastMove.by === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["PARTY_TYPE_PRISONERS"] ? [...lastMove.rewindInfo.rack] : [...ptiles];
    let newGtiles = lastMove.by === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["PARTY_TYPE_GUARDS"] ? [...lastMove.rewindInfo.rack] : [...gtiles];
    let newRescues = lastMove.rewindInfo.rescues;
    let newWhoseturn = lastMove.by; // Back to their turn

    let newMoves = [...moves];
    newMoves.splice(numMoves - 1, 1);
    let newSnapshot = {
      squareArray: JSON.parse(JSON.stringify(newSquareArray)),
      // Deep copy
      gtiles: [...newGtiles],
      ptiles: [...newPtiles]
    };
    putAtMoveStart();
    setTiles(newTiles);
    setPtiles(newPtiles);
    setGtiles(newGtiles);
    setSquareArray(newSquareArray);
    setWhoseturn(newWhoseturn);
    setRescues(newRescues);
    setMoves(newMoves);
    setSnapshot(newSnapshot); // Just send everything even though some could be hard coded in processMessage by opponent

    client.send({
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
      squareArray: newSquareArray,
      // revert to start of turn squares
      whoseturn: newWhoseturn,
      // swap never ends the game so go to opponent
      rescues: newRescues,
      // rescue count
      moves: newMoves,
      // a move was made
      snapshot: newSnapshot
    });
  }

  const recallTiles = () => {
    setSquareArray(JSON.parse(JSON.stringify(snapshot.squareArray))); // Deep copy

    setPtiles([...snapshot.ptiles]);
    setGtiles([...snapshot.gtiles]);
    setSelection(-1);
    setCurrentcoords([]);
    setRcd([-1, -1, _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["DIR_NONE"]]);
  };

  const prisonerPass = () => {
    let rewindInfo = getRewindInfo();
    let newMove = {
      by: _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["PARTY_TYPE_PRISONERS"],
      type: _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["MOVE_TYPE_PASS"],
      rewindInfo: rewindInfo
    };
    let newMoves = [...moves, newMove];
    let newWhoseturn = isDoublePass(newMoves) ? _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["WHOSE_TURN_GAMEOVER"] : _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["WHOSE_TURN_GUARDS"]; // If both players pass then end the game

    recallTiles(); // In case they put some tiles on the board before clicking Pass

    putAtMoveStart();
    setWhoseturn(newWhoseturn);
    setMoves(newMoves);
    client.send({
      gameid: gameid,
      // the id for the game
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      func: "ept",
      // end prisoners turn
      sender: participant,
      squareArray: snapshot.squareArray,
      // revert to start of turn squares
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

    });
  };

  const guardsPass = () => {
    let rewindInfo = getRewindInfo();
    let newMove = {
      by: _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["PARTY_TYPE_GUARDS"],
      type: _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["MOVE_TYPE_PASS"],
      rewindInfo: rewindInfo
    };
    let newMoves = [...moves, newMove];
    let newWhoseturn = isDoublePass(newMoves) ? _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["WHOSE_TURN_GAMEOVER"] : _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["WHOSE_TURN_PRISONERS"]; // If both players pass then end the game

    recallTiles(); // In case they put some tiles on the board before clicking Pass

    putAtMoveStart();
    setWhoseturn(newWhoseturn);
    setMoves(newMoves);
    client.send({
      gameid: gameid,
      // the id for the game
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      func: "egt",
      // end guards turn
      sender: participant,
      squareArray: snapshot.squareArray,
      // revert to start of turn squares
      gtiles: snapshot.gtiles,
      // guards rack did not change
      tiles: tiles,
      // tile pool did not change
      whoseturn: newWhoseturn,
      // may have ended the game
      racksize: racksize,
      // rack size option (lobby needs to know for when guards join game and they call Game)
      moves: newMoves // a move was made

    });
  };

  function isDoublePass(movelist) {
    let last = movelist.length - 1;
    let secondlast = last - 1;
    return secondlast > -1 && movelist[secondlast].type === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["MOVE_TYPE_PASS"] && movelist[last].type === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["MOVE_TYPE_PASS"];
  }

  const requestGameData = () => {
    client.send({
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

    });
  };

  const handleKeyDown = event => {
    event.preventDefault();

    if (participant !== whoseturn) {
      return;
    }

    if (event.key === "Enter") {
      whoseturn === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["WHOSE_TURN_PRISONERS"] ? endPrisonersTurn() : endGuardsTurn();
      return;
    }

    if (event.key === "Escape") {
      recallTiles();
      return;
    }

    let lettertest = /^[A-Za-z\?]$/; // single letter or question mark key pressed

    if (event.key.match(lettertest)) {
      let letter = event.key.toUpperCase();
      let rack = whoseturn === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["WHOSE_TURN_PRISONERS"] ? ptiles : gtiles;
      let newSelection = rack.indexOf(letter);

      if (newSelection === -1) {
        newSelection = rack.indexOf("?"); // Use the blank if they have one
      }

      if (newSelection > -1) {
        // Pressed letter is on the rack
        let row = rcd[0];
        let col = rcd[1];
        let dir = rcd[2];

        if (row > -1 && col > -1 && dir !== _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["DIR_NONE"]) {
          // row, col, dir are set to accept keystroke
          // Need to figure out next sqaure to auto-place a tile
          let newRcd = rcd;

          if (dir === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["DIR_RIGHT"]) {
            // playing rightwards
            let newc = -1;

            for (var tempcol = col + 1; tempcol < edge + 1 && newc === -1; tempcol++) {
              if (squareArray[row][tempcol].usedby === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"]) {
                newc = tempcol;
              }
            }

            if (newc === -1) {
              newRcd = [-1, -1, _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["DIR_NONE"]];
            } else {
              newRcd = [row, newc, _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["DIR_RIGHT"]];
            }

            handleBoardSquareClick(row, col, newSelection, newRcd);
            setSelection(-1); // when they are typing they are not selecting rack tiles by clicking them on the rack

            return;
          }

          if (dir === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["DIR_DOWN"]) {
            // playing downwards
            let newr = -1;
            let numrows = racksize * 2 + 1;

            for (var temprow = row + 1; temprow < numrows && newr === -1; temprow++) {
              if (squareArray[temprow][col].usedby === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"]) {
                newr = temprow;
              }
            }

            if (newr === -1) {
              newRcd = [-1, -1, _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["DIR_NONE"]];
            } else {
              newRcd = [newr, col, _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["DIR_DOWN"]];
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
      let newRcd = [-1, -1, _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["DIR_NONE"]];
      let newSelection = selection;
      newCurrentcoords.splice(currentcoords.length - 1, 1);
      let returnedTile = squareArray[row][col].letter;

      if (whoseturn === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["WHOSE_TURN_PRISONERS"]) {
        newPtiles.push(returnedTile);
        newSelection = newPtiles.length - 1;
      } else {
        newGtiles.push(returnedTile);
        newSelection = newGtiles.length - 1;
      }

      newSquareArrayCell.usedby = _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["USED_BY_NONE"];
      newSquareArrayCell.letter = _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["LETTER_NONE"];
      newSquareArrayRow[col] = newSquareArrayCell;
      newSquareArray[row] = [...newSquareArrayRow];
      let dir = rcd[2];

      if (dir !== _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["DIR_NONE"]) {
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
          lineNumber: 1061,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1060,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-topleft w3-black topBarCorner commonFontFamily",
        children: ["Game id: ", gameid]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1063,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-bottomleft w3-orange topBarCorner commonFontFamily",
        children: ["Prisoners: ", participant === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["PARTY_TYPE_PRISONERS"] ? nickname : oppname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1066,
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
              lineNumber: 1071,
              columnNumber: 18
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1071,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1070,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1069,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-bottomright w3-orange topBarCorner commonFontFamily",
        children: ["Guards: ", participant === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["PARTY_TYPE_PRISONERS"] ? oppname : nickname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1074,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1059,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col pbTileAndMovesOuter",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_unseenTilesSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
          tiles: tiles,
          othertiles: participant === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["PARTY_TYPE_PRISONERS"] ? gtiles : ptiles
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1080,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_movesSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
          moves: moves
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1081,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1079,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col pbPlayerOuterSection",
        children: participant === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["PARTY_TYPE_PRISONERS"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_playerSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
          lineNumber: 1085,
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
          lineNumber: 1101,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1083,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: participant === whoseturn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          onKeyDownCapture: handleKeyDown,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_board__WEBPACK_IMPORTED_MODULE_4__["default"], {
            squareArray: squareArray,
            rcd: rcd,
            onClick: (ri, ci) => handleBoardSquareClick(ri, ci, -1, null)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1121,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1120,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_board__WEBPACK_IMPORTED_MODULE_4__["default"], {
            squareArray: squareArray,
            rcd: rcd,
            onClick: () => {}
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1129,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1128,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1118,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_rescuesSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
          rescues: rescues
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1138,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_chatSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
          gameid: gameid,
          client: client,
          nickname: nickname,
          msgs: chatmsgs,
          setMsgs: setChatmsgs,
          participant: participant
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1139,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1137,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1078,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-display-container w3-teal topBarHeight",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-middle commonFontFamily",
        children: whoseturn === _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["WHOSE_TURN_GAMEOVER"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Game Over!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1145,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: _lib_pbcommon__WEBPACK_IMPORTED_MODULE_9__["JOKE_ARRAY"][jokeindex]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1147,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1143,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1142,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1058,
    columnNumber: 7
  }, undefined);
};

_s2(Game, "b/NUyBdcAsgJ0rxpOXxsK7zj/V4=", true);

_c = Game;

const scrollToBottom = elementid => {
  const theElement = document.getElementById(elementid);
  theElement.scrollTop = theElement.scrollHeight;
};

/* harmony default export */ __webpack_exports__["default"] = (Game);

var _c;

$RefreshReg$(_c, "Game");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvZ2FtZS5qcyJdLCJuYW1lcyI6WyJHYW1lIiwiaXNyZWpvaW4iLCJwYXJ0aWNpcGFudCIsImdhbWVpZCIsIm5pY2tuYW1lIiwid3NtZXNzYWdlIiwiY2xpZW50IiwicmFja3NpemUiLCJtaWRkbGUiLCJlZGdlIiwiaW5pdGlhbHRpbGVzIiwiYyIsInRpbGVzIiwic2V0VGlsZXMiLCJ1c2VTdGF0ZSIsInB0aWxlcyIsInNldFB0aWxlcyIsImd0aWxlcyIsInNldEd0aWxlcyIsInNxdWFyZUFycmF5Iiwic2V0U3F1YXJlQXJyYXkiLCJzZWxlY3Rpb24iLCJzZXRTZWxlY3Rpb24iLCJ3aG9zZXR1cm4iLCJzZXRXaG9zZXR1cm4iLCJjdXJyZW50Y29vcmRzIiwic2V0Q3VycmVudGNvb3JkcyIsInJlc2N1ZXMiLCJzZXRSZXNjdWVzIiwicmNkIiwic2V0UmNkIiwibW92ZXMiLCJzZXRNb3ZlcyIsInNuYXBzaG90Iiwic2V0U25hcHNob3QiLCJqb2tlaW5kZXgiLCJzZXRKb2tlaW5kZXgiLCJhbGxvd1Jld2luZCIsInNldEFsbG93UmV3aW5kIiwib3BwbmFtZSIsInNldE9wcG5hbWUiLCJjaGF0bXNncyIsInNldENoYXRtc2dzIiwicHJldlJlc2N1ZXMiLCJ1c2VQcmV2aW91cyIsInZhbHVlIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsIm15YXVkaW8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJwbGF5IiwibmV3amkiLCJsZW5ndGgiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwicmVxdWVzdEdhbWVEYXRhIiwiY2xlYXJJbnRlcnZhbCIsImluaXRpYWxpemVSb3V0aW5lIiwiZmlyc3RTcXVhcmVBcnJheSIsInN0YXJ0R2FtZSIsImpvaW5HYW1lIiwidGVtcFBUaWxlcyIsInRlbXBHVGlsZXMiLCJ0ZW1wVGlsZXMiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHVzaCIsInNwbGljZSIsInNvcnQiLCJzZW5kIiwidHlwZSIsImZ1bmMiLCJzZW5kZXIiLCJtc2ciLCJwcm9jZXNzR2FtZU1lc3NhZ2UiLCJzY3JvbGxUb0JvdHRvbSIsInB1dEF0TW92ZVN0YXJ0IiwibWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiSlNPTiIsInBhcnNlIiwibmV3UHRpbGVzIiwibmV3R3RpbGVzIiwibmV3V2hvc2V0dXJuIiwiY29uc29sZSIsImxvZyIsInN0cmluZ2lmeSIsIm5ld0NoYXRtc2dzIiwiZnJvbSIsInNlbmRtc2ciLCJhbGVydCIsImhhbmRsZUJvYXJkU3F1YXJlQ2xpY2siLCJyaSIsImNpIiwibmV3U2VsZWN0aW9uIiwibmV3UmNkIiwibmV3U3F1YXJlQXJyYXkiLCJuZXdTcXVhcmVBcnJheVJvdyIsIm5ld1NxdWFyZUFycmF5Q2VsbCIsIm5ld0N1cnJlbnRjb29yZHMiLCJjb29yZCIsIlN0cmluZyIsImNjaSIsImluZGV4T2YiLCJ1c2VkYnkiLCJzZWxlY3RlZFRpbGUiLCJsZXR0ZXIiLCJuZXdEaXJlY3Rpb24iLCJoYW5kbGVSYWNrVGlsZUNsaWNrIiwidGlsZWluZGV4IiwibmV3cmFjayIsIm1vdmVmcm9tIiwibW92ZXRpbGUiLCJtb3ZldG8iLCJlbmRQcmlzb25lcnNUdXJuIiwiaXNQbGF5VmFsaWQiLCJyZXdpbmRJbmZvIiwiZ2V0UmV3aW5kSW5mbyIsIm5ld1Jlc2N1ZXMiLCJlc2NhcGVoYXRjaGVzIiwiaSIsIm5ld1RpbGVzIiwicGxheWluZm8iLCJnZXRQbGF5SW5mbyIsIm5ld01vdmUiLCJieSIsIm1haW53b3JkIiwiZXh0cmF3b3JkcyIsInBvcyIsIm5ld01vdmVzIiwiZW5kR3VhcmRzVHVybiIsInNuYXBzcXVhcmVhcnJheSIsInNuYXBwdGlsZXMiLCJzbmFwZ3RpbGVzIiwic3dhcFByaXNvbmVyc1RpbGVzIiwid2luZG93Iiwic3dhcEd1YXJkc1RpbGVzIiwiZmlyc3RXb3JkIiwibnVtbW92ZXMiLCJtb3ZlaW5kZXgiLCJudW1jb29yZHMiLCJsb3dyb3ciLCJoaWdocm93IiwibG93Y29sIiwiaGlnaGNvbCIsInRlbXByb3ciLCJwYXJzZUludCIsInNwbGl0IiwidGVtcGNvbCIsInBsYXl0aHJ1IiwiaG9va21hZGUiLCJ0ZW1wY29vcmQiLCJ3b3Jkc3RhcnRjb29yZCIsIm51bXJvd3MiLCJudW1jb2xzIiwicm93IiwiY29sIiwibG93ZXN0cm93IiwiaGlnaGVzdHJvdyIsImxvd2VzdGNvbCIsImhpZ2hlc3Rjb2wiLCJleHRyYXdvcmQiLCJyYWNrIiwiYWxsb3dVbmRvTGFzdFR1cm4iLCJwZXJmb3JtUmV3aW5kIiwibnVtTW92ZXMiLCJsYXN0TW92ZSIsIm5ld1NuYXBzaG90IiwicmVjYWxsVGlsZXMiLCJwcmlzb25lclBhc3MiLCJpc0RvdWJsZVBhc3MiLCJndWFyZHNQYXNzIiwibW92ZWxpc3QiLCJsYXN0Iiwic2Vjb25kbGFzdCIsImhhbmRsZUtleURvd24iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwia2V5IiwibGV0dGVydGVzdCIsIm1hdGNoIiwidG9VcHBlckNhc2UiLCJkaXIiLCJuZXdjIiwibmV3ciIsInJldHVybmVkVGlsZSIsInRpIiwiZWxlbWVudGlkIiwidGhlRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBQ0MsVUFBRDtBQUNSQyxhQURRLENBQ0k7QUFESjtBQUVSQyxRQUZRO0FBR1JDLFVBSFE7QUFJUkMsV0FKUTtBQUtSQyxRQUxRO0FBTVJDLFVBQVEsR0FBQyxDQU5ELENBTUc7O0FBTkgsQ0FBRCxLQU9IO0FBQUE7O0FBQUE7O0FBQ04sUUFBTUMsTUFBTSxHQUFHRCxRQUFmLENBRE0sQ0FDbUI7O0FBQ3pCLFFBQU1FLElBQUksR0FBR0YsUUFBUSxHQUFHLENBQXhC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QUFNLEVBQUV4QixNQUFkO0FBQXNCLGdCQUFNLEVBQUVHLE1BQTlCO0FBQXNDLGtCQUFRLEVBQUVGLFFBQWhEO0FBQTBELGNBQUksRUFBRXFDLFFBQWhFO0FBQTBFLGlCQUFPLEVBQUVDLFdBQW5GO0FBQWdHLHFCQUFXLEVBQUV4QztBQUE3RztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkEzREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBCRixlQW9GRTtBQUFLLGVBQVMsRUFBQywyQ0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxvQ0FBZjtBQUFBLGtCQUNHcUIsU0FBUyxLQUFLWixpRUFBZCxnQkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxnQkFHQztBQUFBLG9CQUFJQSx3REFBQSxDQUFhd0IsU0FBYjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFnR0QsQ0FybkNIOztJQUFNbkMsSTs7S0FBQUEsSTs7QUF1bkNKLE1BQU1pRixjQUFjLEdBQUlnSCxTQUFELElBQWU7QUFDcEMsUUFBTUMsVUFBVSxHQUFHL0ksUUFBUSxDQUFDZ0osY0FBVCxDQUF3QkYsU0FBeEIsQ0FBbkI7QUFDQUMsWUFBVSxDQUFDRSxTQUFYLEdBQXVCRixVQUFVLENBQUNHLFlBQWxDO0FBQ0QsQ0FIRDs7QUFLZXJNLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BiL3ByaXNvbmJyZWFrLjY5MTk0Zjk0YTUzMTZlNDhiOGY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFBsYXllclNlY3Rpb24gZnJvbSAnLi4vcGIvcGxheWVyU2VjdGlvbic7XHJcbmltcG9ydCBCb2FyZCBmcm9tICcuLi9wYi9ib2FyZCc7XHJcbmltcG9ydCBTaG93VW5zZWVuVGlsZXMgZnJvbSAnLi4vcGIvdW5zZWVuVGlsZXNTZWN0aW9uJztcclxuaW1wb3J0IFNob3dNb3ZlcyBmcm9tICcuLi9wYi9tb3Zlc1NlY3Rpb24nO1xyXG5pbXBvcnQgU2hvd1Jlc2N1ZXMgZnJvbSAnLi4vcGIvcmVzY3Vlc1NlY3Rpb24nO1xyXG5pbXBvcnQgQ2hhdCBmcm9tICcuLi9wYi9jaGF0U2VjdGlvbic7XHJcbmltcG9ydCAqIGFzIGMgZnJvbSAnLi4vLi4vbGliL3BiY29tbW9uJztcclxuaW1wb3J0IHsgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlclwiO1xyXG5cclxuY29uc3QgR2FtZSA9ICh7aXNyZWpvaW5cclxuICAgICwgcGFydGljaXBhbnQgLy8gUHJpc29uZXJzLCBHdWFyZHMsIG9yIE9ic2VydmVyIChub3QgaW1wbGVtZW50ZWQpXHJcbiAgICAsIGdhbWVpZFxyXG4gICAgLCBuaWNrbmFtZVxyXG4gICAgLCB3c21lc3NhZ2VcclxuICAgICwgY2xpZW50XHJcbiAgICAsIHJhY2tzaXplPTQgLy8gT3B0aW9uIGZvciByYWNrIHNpemUgKGdpdmUgaXQgYSBkZWZhdWx0IGZvciBCdWlsZClcclxuICAgIH0pID0+IHtcclxuICAgIGNvbnN0IG1pZGRsZSA9IHJhY2tzaXplOyAvLyBNaWRkbGUgZWxlbWVudCBpbiByb3cgb3IgY29sdW1uIGFycmF5XHJcbiAgICBjb25zdCBlZGdlID0gcmFja3NpemUgKiAyOyAvLyBMYXN0IGVsZW1lbnQgaW4gcm93IG9yIGNvbHVtbiBhcnJheVxyXG4gICAgY29uc3QgaW5pdGlhbHRpbGVzID0gcmFja3NpemUgPT09IDYgPyBjLlRJTEVCQUc2IDogcmFja3NpemUgPT09IDcgPyBjLlRJTEVCQUc3IDogcmFja3NpemUgPT09IDUgPyBjLlRJTEVCQUc1IDogYy5USUxFQkFHNDtcclxuICAgIGNvbnN0IFt0aWxlcywgc2V0VGlsZXNdID0gdXNlU3RhdGUoWy4uLmluaXRpYWx0aWxlc10pO1xyXG4gICAgY29uc3QgW3B0aWxlcywgc2V0UHRpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtndGlsZXMsIHNldEd0aWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc3F1YXJlQXJyYXksIHNldFNxdWFyZUFycmF5XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3Rpb24sIHNldFNlbGVjdGlvbl0gPSB1c2VTdGF0ZSgtMSk7IC8vIHJlbGF0aXZlIHRvIHJhY2sgb2YgcGxheWVyIG1ha2luZyBhIHBsYXlcclxuICAgIGNvbnN0IFt3aG9zZXR1cm4sIHNldFdob3NldHVybl0gPSB1c2VTdGF0ZShjLldIT1NFX1RVUk5fUFJJU09ORVJTKTsgLy8gZ2FtZSBzdGFydHMgd2l0aCBwcmlzb25lcnMgcGxheVxyXG4gICAgY29uc3QgW2N1cnJlbnRjb29yZHMsIHNldEN1cnJlbnRjb29yZHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3Jlc2N1ZXMsIHNldFJlc2N1ZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcmNkLCBzZXRSY2RdID0gdXNlU3RhdGUoWy0xLC0xLGMuRElSX05PTkVdKTtcclxuICAgIGNvbnN0IFttb3Zlcywgc2V0TW92ZXNdID0gdXNlU3RhdGUoW10pOyAvLyBtb3ZlIGhpc3RvcnksIGVhY2ggZWxlbWVudCBpcyB0aGUgYXJyYXkgaXMgYSBqc29uIG9iamVjdCBvZiBpbmZvIGFib3V0IHRoZSBtb3ZlXHJcbiAgICBjb25zdCBbc25hcHNob3QsIHNldFNuYXBzaG90XSA9IHVzZVN0YXRlKHtcclxuICAgICAgc3F1YXJlQXJyYXk6IFtdLFxyXG4gICAgICBwdGlsZXM6IFtdLFxyXG4gICAgICBndGlsZXM6IFtdLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbam9rZWluZGV4LCBzZXRKb2tlaW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbYWxsb3dSZXdpbmQsIHNldEFsbG93UmV3aW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtvcHBuYW1lLCBzZXRPcHBuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtjaGF0bXNncywgc2V0Q2hhdG1zZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgcHJldlJlc2N1ZXMgPSB1c2VQcmV2aW91cyhyZXNjdWVzKTtcclxuICAgIGZ1bmN0aW9uIHVzZVByZXZpb3VzKHZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xyXG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVmLmN1cnJlbnQ7XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAocmVzY3VlcyA+IHByZXZSZXNjdWVzKSB7XHJcbiAgICAgICAgICB2YXIgbXlhdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcbiAgICAgICAgICBteWF1ZGlvLnNyYyA9IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTID8gXCJodHRwczovL3RpbGVydW5uZXIuZ2l0aHViLmlvL09uZUdvdEF3YXkubTRhXCIgOiBcImh0dHBzOi8vdGlsZXJ1bm5lci5naXRodWIuaW8veWlwcGVlLm00YVwiO1xyXG4gICAgICAgICAgbXlhdWRpby5wbGF5KCk7XHJcbiAgICAgIH1cclxuICAgIH0sIFtyZXNjdWVzXSk7IC8vIFBsYXkgYSBzb3VuZCB3aGVuIGEgcmVzY3VlIGlzIG1hZGVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGxldCBuZXdqaSA9IGpva2VpbmRleCArIDE7XHJcbiAgICAgIGlmIChuZXdqaSA+PSBjLkpPS0VfQVJSQVkubGVuZ3RoKSB7XHJcbiAgICAgICAgbmV3amkgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHNldEpva2VpbmRleChuZXdqaSk7XHJcbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIC8vIElmIGl0IGlzIG5vdCBteSB0dXJuICYmIHRoZSBnYW1lIGhhcyBub3QgZW5kZWRcclxuICAgICAgICBpZiAocGFydGljaXBhbnQgIT09IHdob3NldHVybiAmJiB3aG9zZXR1cm4gIT09IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUikge1xyXG4gICAgICAgICAgLy8gSSBhbSB3YWl0aW5nIGZvciBvcHBvbmVudCBtb3ZlIHRvIGNvbWUgdGhyb3VnaCBidXQgc29tZXRpbWVzIGl0IGdldHMgbWlzc2VkIChubyBpZGVhIHdoeSlcclxuICAgICAgICAgIHJlcXVlc3RHYW1lRGF0YSgpOyAvLyBTZW5kIGEgcmVxdWVzdCBmb3IgZ2FtZSBkYXRhIGluIGNhc2Ugb3Bwb25lbnQgbW92ZWQgYW5kIHdlIG1pc3NlZCB0aGUgdXBkYXRlXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBjLlBJTkdfSU5URVJWQUwpOyAvLyB0aGlzIG1hbnkgbWlsbGlzZWNvbmRzIGJldHdlZW4gYWJvdmUgY29kZSBibG9jayBleGVjdXRpb25zXHJcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH0sIFt3aG9zZXR1cm5dKTsgLy8gd2FudCB1cCB0byBkYXRlIHZhbHVlIG9mIHdob3NldHVybiB0byBkZWNpZGUgd2hldGhlciB0byBhc2sgZm9yIGFuIHVwZGF0ZVxyXG5cclxuICAgIGNvbnN0IGluaXRpYWxpemVSb3V0aW5lID0gKCkgPT4ge1xyXG4gICAgICBsZXQgZmlyc3RTcXVhcmVBcnJheSA9IGMuSW5pdGlhbFNxdWFyZUFycmF5KHJhY2tzaXplKTtcclxuICAgICAgc2V0U3F1YXJlQXJyYXkoZmlyc3RTcXVhcmVBcnJheSk7XHJcbiAgICAgIGlmICghaXNyZWpvaW4gJiYgcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMpIHtcclxuICAgICAgICBzdGFydEdhbWUoZmlyc3RTcXVhcmVBcnJheSk7IC8vIFByaXNvbmVyIGlzIHN0YXJ0aW5nIHRoZSBnYW1lIHNvIHBpY2sgcmFja3NcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBqb2luR2FtZSgpOyAvLyBQcmlzb25lciByZWpvaW4gb3IgZ3VhcmQgam9pbiBvciBndWFyZCByZWpvaW5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3RhcnRHYW1lID0gKGZpcnN0U3F1YXJlQXJyYXkpID0+IHtcclxuICAgICAgbGV0IHRlbXBQVGlsZXMgPSBbXTtcclxuICAgICAgbGV0IHRlbXBHVGlsZXMgPSBbXTtcclxuICAgICAgbGV0IHRlbXBUaWxlcyA9IFsuLi5pbml0aWFsdGlsZXNdO1xyXG4gICAgICB3aGlsZSAodGVtcFBUaWxlcy5sZW5ndGggPCByYWNrc2l6ZSkge1xyXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVtcFRpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgdGVtcFBUaWxlcy5wdXNoKHRlbXBUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgdGVtcFRpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgICByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVtcFRpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgdGVtcEdUaWxlcy5wdXNoKHRlbXBUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgdGVtcFRpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgfVxyXG4gICAgICB0ZW1wUFRpbGVzLnNvcnQoKTtcclxuICAgICAgdGVtcEdUaWxlcy5zb3J0KCk7XHJcbiAgICAgIHNldEd0aWxlcyh0ZW1wR1RpbGVzKTtcclxuICAgICAgc2V0UHRpbGVzKHRlbXBQVGlsZXMpO1xyXG4gICAgICBzZXRUaWxlcyh0ZW1wVGlsZXMpO1xyXG4gICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgc3F1YXJlQXJyYXk6IGZpcnN0U3F1YXJlQXJyYXksXHJcbiAgICAgICAgcHRpbGVzOiBbLi4udGVtcFBUaWxlc10sXHJcbiAgICAgICAgZ3RpbGVzOiBbLi4udGVtcEdUaWxlc10gICAgXHJcbiAgICAgIH0pO1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsXHJcbiAgICAgICAgICBmdW5jOiBcInN0YXJ0Z2FtZVwiLFxyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIEdhbWUgaWRcclxuICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gUmFjayBzaXplIG9wdGlvblxyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCwgLy8gVGhpcyB3aWxsIGJlIHByaXNvbmVycyBzaW5jZSBwcmlzb25lcnMgc3RhcnQgdGhlIGdhbWVcclxuICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gVGhpcyB3aWxsIGJlIHRoZSBwcmlzb25lcnMgbmlja25hbWUgc2luY2UgcHJpc29uZXJzIGFyZSBzZW5kaW5nIHRoaXNcclxuICAgICAgICAgIHNxdWFyZUFycmF5OiBmaXJzdFNxdWFyZUFycmF5LCAgLy8gVGhpcyB3aWxsIGJlIHRoZSBpbml0aWFsIHNxdWFyZSBhcnJheSBzaW5jZSBubyBtb3ZlcyBoYXZlIGJlZW4gbWFkZSB5ZXRcclxuICAgICAgICAgIHRpbGVzOiB0ZW1wVGlsZXMsIC8vIFRpbGUgYmFnIGFmdGVyIGZpcnN0IHJhY2tzIHNlbGVjdGVkXHJcbiAgICAgICAgICBwdGlsZXM6IHRlbXBQVGlsZXMsIC8vIFByaXNvbmVycyBmaXJzdCByYWNrXHJcbiAgICAgICAgICBndGlsZXM6IHRlbXBHVGlsZXMgLy8gR3VhcmRzIGZpcnN0IHJhY2tcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBqb2luR2FtZSA9ICgpID0+IHtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcImpvaW5nYW1lXCIsIC8vIGpvaW4gdGhlIGdhbWVcclxuICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnRcclxuICAgICAgICB9XHJcbiAgICAgICk7ICAgIFxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgLy8gVGhpcyBjb2RlIGV4ZWN1dGVzIHRoZSBmaXJzdCB0aW1lIEdhbWUgaXMgdXNlZCBvbmx5XHJcbiAgICAgIGluaXRpYWxpemVSb3V0aW5lKCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBsZXQgbXNnID0gd3NtZXNzYWdlO1xyXG4gICAgICBpZiAobXNnICE9PSAnJykgcHJvY2Vzc0dhbWVNZXNzYWdlKG1zZyk7ICAgICAgXHJcbiAgICB9LFt3c21lc3NhZ2VdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2Nyb2xsVG9Cb3R0b20oXCJTY3JvbGxhYmxlTW92ZXNcIik7XHJcbiAgICB9LFttb3Zlc10pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzY3JvbGxUb0JvdHRvbShcIlNjcm9sbGFibGVDaGF0XCIpO1xyXG4gICAgfSxbY2hhdG1zZ3NdKVxyXG4gICAgZnVuY3Rpb24gcHV0QXRNb3ZlU3RhcnQoKSB7XHJcbiAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICAgIHNldEFsbG93UmV3aW5kKGZhbHNlKTtcclxuICAgICAgc2V0UmNkKC0xLC0xLGMuRElSX05PTkUpO1xyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NHYW1lTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgIGxldCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICAgIC8vIEkgd2FudCBhY2Nlc3MgdG8gc29tZSB1cGRhdGVkIHZhbHVlcyBmb3IgY2hlY2tpbmcgbWlzc2luZyByYWNrIHRpbGVzXHJcbiAgICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgICBsZXQgbmV3V2hvc2V0dXJuID0gd2hvc2V0dXJuO1xyXG4gICAgICBpZiAobWVzc2FnZURhdGEuc2VuZGVyID09PSBwYXJ0aWNpcGFudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBwbTogJHttZXNzYWdlRGF0YS5mdW5jfSAke21lc3NhZ2VEYXRhLnNlbmRlcn0gcHRpbGVzPSR7bWVzc2FnZURhdGEucHRpbGVzfSBndGlsZXM9JHttZXNzYWdlRGF0YS5ndGlsZXN9YCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLnR5cGUgPT09IFwicGJcIiAmJiBtZXNzYWdlRGF0YS5mdW5jID09PSBcImFubm91bmNlXCIpIHtcclxuICAgICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJwYlwiLFxyXG4gICAgICAgICAgICBmdW5jOiBcImhlbGxvXCIsXHJcbiAgICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsXHJcbiAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgICB3aG9zZXR1cm46IHdob3NldHVybixcclxuICAgICAgICAgICAgcmFja3NpemU6IHJhY2tzaXplIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChtZXNzYWdlRGF0YS5nYW1laWQgPT09IGdhbWVpZCAmJiBtZXNzYWdlRGF0YS50eXBlID09PSBcInBiXCIpIHsgLy8gVGhpcyBpbnN0YW5jZSBvZiBhIHByaXNvbiBicmVhayBnYW1lXHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLnNlbmRlciAhPSBwYXJ0aWNpcGFudCAmJiBvcHBuYW1lID09PSBcIlwiICYmIG1lc3NhZ2VEYXRhLm5pY2tuYW1lICYmIG1lc3NhZ2VEYXRhLm5pY2tuYW1lLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIC8vIE9wcG9uZW50IHNlbnQgYSBtZXNzYWdlIGluY2x1ZGluZyB0aGVpciBuaWNrbmFtZSBhbmQgSSBkb24ndCBoYXZlIHRoZWlyIG5pY2tuYW1lIHlldFxyXG4gICAgICAgICAgc2V0T3BwbmFtZShtZXNzYWdlRGF0YS5uaWNrbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJyZXF1ZXN0Z2FtZWRhdGFcIiB8fCBtZXNzYWdlRGF0YS5mdW5jID09PSBcImpvaW5nYW1lXCIpICYmIG1lc3NhZ2VEYXRhLnNlbmRlciAhPT0gcGFydGljaXBhbnQpIHsgLy8gT3Bwb25lbnQgam9pbmVkIGdhbWUgb3IgcmVxdWVzdGVkIGdhbWUgaW5mb1xyXG4gICAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgICAgIGZ1bmM6IFwicHJvdmlkZWdhbWVkYXRhXCIsIC8vIHByb3ZpZGUgZ2FtZSBkYXRhXHJcbiAgICAgICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgICAgICB0aWxlczogdGlsZXMsXHJcbiAgICAgICAgICAgICAgc3F1YXJlQXJyYXk6IHNxdWFyZUFycmF5LFxyXG4gICAgICAgICAgICAgIHB0aWxlczogcHRpbGVzLFxyXG4gICAgICAgICAgICAgIGd0aWxlczogZ3RpbGVzLFxyXG4gICAgICAgICAgICAgIHdob3NldHVybjogd2hvc2V0dXJuLFxyXG4gICAgICAgICAgICAgIHNuYXBzaG90OiBzbmFwc2hvdCxcclxuICAgICAgICAgICAgICBtb3ZlczogbW92ZXMsXHJcbiAgICAgICAgICAgICAgcmVzY3VlczogcmVzY3VlcyxcclxuICAgICAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgICAgICAgYWxsb3dSZXdpbmQ6IGFsbG93UmV3aW5kXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInByb3ZpZGVnYW1lZGF0YVwiICYmIG1lc3NhZ2VEYXRhLnNlbmRlciAhPT0gcGFydGljaXBhbnQpIHsgXHJcbiAgICAgICAgICAvLyBPcHBvbmVudCBwcm92aWRlZCBnYW1lIGRhdGEgYnV0IGRvIHdlIG5lZWQgaXQ/XHJcbiAgICAgICAgICAvLyBJZiB0aGV5IGhhdmUgYSBkaWZmZXJlbnQgbW92ZSBjb3VudCB0aGVuIHdlIG5lZWQgaXQgKHRoZXkgbWF5IGhhdmUgdW5kb25lIGEgbW92ZSlcclxuICAgICAgICAgIC8vIElmIHRoZXkgaGF2ZSBzYW1lIG1vdmUgY291bnQgYnV0IGEgZGlmZmVyZW50IHRpbGUgYmFnIGNvdW50IHRoZW4gd2UgbmVlZCBpdCAobm8gbW92ZXMgbWFkZSBidXQgdGlsZXMgYXJlIHBpY2tlZClcclxuICAgICAgICAgIC8vIElmIGd1YXJkcyBqb2luIGFmdGVyIHByaXNvbmVycyBtYWRlIGEgbW92ZSB0aGVuIGd1YXJkcyBoYXZlIG5vIHRpbGVzIChcImVwdFwiIGdvdCBwcm9jZXNzZWQgd2hpY2ggbGVhdmVzIGd0aWxlcyBhbG9uZSlcclxuICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS5tb3Zlcy5sZW5ndGggIT09IG1vdmVzLmxlbmd0aFxyXG4gICAgICAgICAgICAgfHwgbWVzc2FnZURhdGEudGlsZXMubGVuZ3RoICE9PSB0aWxlcy5sZW5ndGhcclxuICAgICAgICAgICAgIHx8IChwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUyAmJiBndGlsZXMubGVuZ3RoID09PSAwICYmIGN1cnJlbnRjb29yZHMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgfHwgKHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTICYmIHB0aWxlcy5sZW5ndGggPT09IDAgJiYgY3VycmVudGNvb3Jkcy5sZW5ndGggPT09IDApIC8vIE5vdCBzdXJlIEkgbmVlZCBpdCBidXQuLi5cclxuICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIG5ld1B0aWxlcyA9IFsuLi5tZXNzYWdlRGF0YS5wdGlsZXNdO1xyXG4gICAgICAgICAgICAgIG5ld0d0aWxlcyA9IFsuLi5tZXNzYWdlRGF0YS5ndGlsZXNdO1xyXG4gICAgICAgICAgICAgIG5ld1dob3NldHVybiA9IG1lc3NhZ2VEYXRhLndob3NldHVybjtcclxuICAgICAgICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgICAgICAgc2V0U3F1YXJlQXJyYXkobWVzc2FnZURhdGEuc3F1YXJlQXJyYXkpO1xyXG4gICAgICAgICAgICAgIHNldFB0aWxlcyhtZXNzYWdlRGF0YS5wdGlsZXMpO1xyXG4gICAgICAgICAgICAgIHNldEd0aWxlcyhtZXNzYWdlRGF0YS5ndGlsZXMpO1xyXG4gICAgICAgICAgICAgIHNldFdob3NldHVybihtZXNzYWdlRGF0YS53aG9zZXR1cm4pO1xyXG4gICAgICAgICAgICAgIHNldFNuYXBzaG90KG1lc3NhZ2VEYXRhLnNuYXBzaG90KTtcclxuICAgICAgICAgICAgICBzZXRNb3ZlcyhtZXNzYWdlRGF0YS5tb3Zlcyk7XHJcbiAgICAgICAgICAgICAgc2V0UmVzY3VlcyhtZXNzYWdlRGF0YS5yZXNjdWVzKTtcclxuICAgICAgICAgICAgICBzZXRBbGxvd1Jld2luZChtZXNzYWdlRGF0YS5hbGxvd1Jld2luZCk7ICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiZXB0XCIgJiYgcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMpIHsgLy8gUHJpc29uZXJzIHNlbnQgZW5kIHByaXNvbmVycyB0dXJuLCBHdWFyZHMgcGljayBpdCB1cFxyXG4gICAgICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgICAgIG5ld1B0aWxlcyA9IFsuLi5tZXNzYWdlRGF0YS5wdGlsZXNdO1xyXG4gICAgICAgICAgbmV3V2hvc2V0dXJuID0gbWVzc2FnZURhdGEud2hvc2V0dXJuO1xyXG4gICAgICAgICAgc2V0V2hvc2V0dXJuKG1lc3NhZ2VEYXRhLndob3NldHVybik7XHJcbiAgICAgICAgICBzZXRTcXVhcmVBcnJheShtZXNzYWdlRGF0YS5zcXVhcmVBcnJheSk7XHJcbiAgICAgICAgICBzZXRQdGlsZXMobWVzc2FnZURhdGEucHRpbGVzKTtcclxuICAgICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICAgIHNldE1vdmVzKG1lc3NhZ2VEYXRhLm1vdmVzKTtcclxuICAgICAgICAgIHNldFJlc2N1ZXMobWVzc2FnZURhdGEucmVzY3Vlcyk7XHJcbiAgICAgICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgICAgIHNxdWFyZUFycmF5OiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2VEYXRhLnNxdWFyZUFycmF5KSksIC8vIERlZXAgY29weVxyXG4gICAgICAgICAgICBwdGlsZXM6IFsuLi5tZXNzYWdlRGF0YS5wdGlsZXNdLFxyXG4gICAgICAgICAgICBndGlsZXM6IFsuLi5ndGlsZXNdLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImVndFwiICYmIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTKSB7IC8vIEd1YXJkcyBzZW50IGVuZCBndWFyZHMgdHVybiwgUHJpc29uZXJzIHBpY2sgaXQgdXBcclxuICAgICAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgICAgICBuZXdHdGlsZXMgPSBbLi4ubWVzc2FnZURhdGEuZ3RpbGVzXTtcclxuICAgICAgICAgIG5ld1dob3NldHVybiA9IG1lc3NhZ2VEYXRhLndob3NldHVybjtcclxuICAgICAgICAgIHNldFdob3NldHVybihtZXNzYWdlRGF0YS53aG9zZXR1cm4pO1xyXG4gICAgICAgICAgc2V0U3F1YXJlQXJyYXkobWVzc2FnZURhdGEuc3F1YXJlQXJyYXkpO1xyXG4gICAgICAgICAgc2V0R3RpbGVzKG1lc3NhZ2VEYXRhLmd0aWxlcyk7XHJcbiAgICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgICBzZXRNb3ZlcyhtZXNzYWdlRGF0YS5tb3Zlcyk7XHJcbiAgICAgICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgICAgIHNxdWFyZUFycmF5OiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2VEYXRhLnNxdWFyZUFycmF5KSksIC8vIERlZXAgY29weVxyXG4gICAgICAgICAgICBwdGlsZXM6IFsuLi5wdGlsZXNdLFxyXG4gICAgICAgICAgICBndGlsZXM6IFsuLi5tZXNzYWdlRGF0YS5ndGlsZXNdLFxyXG4gICAgICAgICAgfSk7ICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJ1bmRvdHVyblwiICYmIG1lc3NhZ2VEYXRhLnNlbmRlciAhPT0gcGFydGljaXBhbnQpIHtcclxuICAgICAgICAgIC8vIG9wcG9uZW50IHVuZGlkIHRoZWlyIGxhc3QgdHVyblxyXG4gICAgICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgICAgIG5ld1B0aWxlcyA9IFsuLi5tZXNzYWdlRGF0YS5wdGlsZXNdO1xyXG4gICAgICAgICAgbmV3R3RpbGVzID0gWy4uLm1lc3NhZ2VEYXRhLmd0aWxlc107XHJcbiAgICAgICAgICBuZXdXaG9zZXR1cm4gPSBtZXNzYWdlRGF0YS53aG9zZXR1cm47XHJcbiAgICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgICBzZXRQdGlsZXMobWVzc2FnZURhdGEucHRpbGVzKTtcclxuICAgICAgICAgIHNldEd0aWxlcyhtZXNzYWdlRGF0YS5ndGlsZXMpO1xyXG4gICAgICAgICAgc2V0U3F1YXJlQXJyYXkobWVzc2FnZURhdGEuc3F1YXJlQXJyYXkpO1xyXG4gICAgICAgICAgc2V0V2hvc2V0dXJuKG1lc3NhZ2VEYXRhLndob3NldHVybik7XHJcbiAgICAgICAgICBzZXRSZXNjdWVzKG1lc3NhZ2VEYXRhLnJlc2N1ZXMpO1xyXG4gICAgICAgICAgc2V0TW92ZXMobWVzc2FnZURhdGEubW92ZXMpO1xyXG4gICAgICAgICAgc2V0U25hcHNob3QobWVzc2FnZURhdGEuc25hcHNob3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJhbGxvd3VuZG9cIiAmJiBtZXNzYWdlRGF0YS5zZW5kZXIgIT09IHBhcnRpY2lwYW50KSB7XHJcbiAgICAgICAgICAvLyBPcHBvbmVudCBjbGlja2VkIGJ1dHRvbiB0byBhbGxvdyB1bmRvIHR1cm5cclxuICAgICAgICAgIHNldEFsbG93UmV3aW5kKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJjaGF0XCIgJiYgbWVzc2FnZURhdGEuc2VuZGVyICE9IHBhcnRpY2lwYW50KSB7IC8vIE9wcG9uZW50IGNoYXQgbWVzc2FnZVxyXG4gICAgICAgICAgbGV0IG5ld0NoYXRtc2dzID0gWy4uLmNoYXRtc2dzLCB7ZnJvbTogbWVzc2FnZURhdGEubmlja25hbWUsIG1zZzogbWVzc2FnZURhdGEuc2VuZG1zZ31dO1xyXG4gICAgICAgICAgc2V0Q2hhdG1zZ3MobmV3Q2hhdG1zZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobmV3UHRpbGVzLmxlbmd0aCA9PT0gMCAmJiBuZXdXaG9zZXR1cm4gPT09IFwiUFwiICYmIHBhcnRpY2lwYW50ID09PSBcIlBcIikge1xyXG4gICAgICAgIGFsZXJ0KFwiUHJpc29uZXJzIHR1cm4gd2l0aCBubyB0aWxlcyEgTWFrZSBHdWFyZHMgUGFzcyB0byBnZXQgeW91ciB0aWxlcy4gU29ycnkhXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChuZXdHdGlsZXMubGVuZ3RoID09PSAwICYmIG5ld1dob3NldHVybiA9PT0gXCJHXCIgJiYgcGFydGljaXBhbnQgPT09IFwiR1wiKSB7XHJcbiAgICAgICAgYWxlcnQoXCJHdWFyZHMgdHVybiB3aXRoIG5vIHRpbGVzISBNYWtlIFByaXNvbmVycyBQYXNzIHRvIGdldCB5b3VyIHRpbGVzLiBTb3JyeSFcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQ2FsbGluZyBzZXRTZWxlY3Rpb24gKGZyb20gaGFuZGxlS2V5RG93bikgdGhlbiBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrIGRvZXMgbm90IGxldCBpdCByZWNvZ25pemUgc2VsZWN0aW9uIHdpdGggdGhlIG5ldyB2YWx1ZVxyXG4gICAgLy8gU28gSSBwYXNzIG5ld1NlbGVjdGlvbiB3aGVuIEkgd2FudCB0byBhbHNvIHNldCBpdCwgb3RoZXJ3aXNlIEkgcGFzcyAtMSB0byBpbnN0cnVjdCBpdCB0byB1c2UgY3VycmVudCB2YWx1ZSBvZiBzZWxlY3Rpb25cclxuICAgIC8vIEFsc28gcGFzc2luZyBuZXdSY2RcclxuICAgIGNvbnN0IGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2sgPSAocmksIGNpLCBuZXdTZWxlY3Rpb24sIG5ld1JjZCkgPT4ge1xyXG4gICAgICBsZXQgbmV3U3F1YXJlQXJyYXkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNxdWFyZUFycmF5KSk7IC8vIERlZXAgY29weVxyXG4gICAgICBsZXQgbmV3U3F1YXJlQXJyYXlSb3cgPSBbLi4ubmV3U3F1YXJlQXJyYXlbcmldXTsgLy8gVGhlIHJvdyBvZiBzcXVhcmVzIHRoZXkgY2xpY2tlZCBvblxyXG4gICAgICBsZXQgbmV3U3F1YXJlQXJyYXlDZWxsID0gbmV3U3F1YXJlQXJyYXlSb3dbY2ldOyAvLyBUaGUgc3F1YXJlIGluIHRoZSByb3cgdGhleSBjbGlja2VkIG9uXHJcbiAgICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgICBsZXQgbmV3Q3VycmVudGNvb3JkcyA9IFsuLi5jdXJyZW50Y29vcmRzXTtcclxuICAgICAgbGV0IGNvb3JkID0gU3RyaW5nKHJpKSArIFwiLVwiICsgU3RyaW5nKGNpKTtcclxuICAgICAgbGV0IGNjaSA9IGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCk7XHJcbiAgICAgIGlmIChuZXdTZWxlY3Rpb24gPT09IC0xKSB7XHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gc2VsZWN0aW9uO1xyXG4gICAgICAgIG5ld1JjZCA9IHJjZDtcclxuICAgICAgfVxyXG4gICAgICBpZiAobmV3U2VsZWN0aW9uID4gLTEgJiYgbmV3U3F1YXJlQXJyYXlDZWxsLnVzZWRieSA9PT0gYy5VU0VEX0JZX05PTkUpIHsgLy8gdGlsZSBpcyBzZWxlY3RlZCBmcm9tIHJhY2sgYW5kIGNsaWNrZWQgc3F1YXJlIGlzIG5vdCB1c2VkIHlldFxyXG4gICAgICAgIGxldCBzZWxlY3RlZFRpbGUgPSB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMgPyBuZXdQdGlsZXNbbmV3U2VsZWN0aW9uXSA6IG5ld0d0aWxlc1tuZXdTZWxlY3Rpb25dO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Q2VsbC5sZXR0ZXIgPSBzZWxlY3RlZFRpbGU7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlDZWxsLnVzZWRieSA9IHdob3NldHVybjtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheVJvd1tjaV0gPSBuZXdTcXVhcmVBcnJheUNlbGw7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlbcmldID0gWy4uLm5ld1NxdWFyZUFycmF5Um93XTtcclxuICAgICAgICB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlNcclxuICAgICAgICAgID8gbmV3UHRpbGVzLnNwbGljZShuZXdTZWxlY3Rpb24sIDEpXHJcbiAgICAgICAgICA6IG5ld0d0aWxlcy5zcGxpY2UobmV3U2VsZWN0aW9uLCAxKTtcclxuICAgICAgICBpZiAod2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTICYmIG5ld1NlbGVjdGlvbiA9PT0gbmV3UHRpbGVzLmxlbmd0aCkgeyBcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbiAtIDFcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX0dVQVJEUyAmJiBuZXdTZWxlY3Rpb24gPT09IG5ld0d0aWxlcy5sZW5ndGgpIHsgXHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdTZWxlY3Rpb24gLSAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24pO1xyXG4gICAgICAgIHNldFNxdWFyZUFycmF5KG5ld1NxdWFyZUFycmF5KTtcclxuICAgICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKFsuLi5jdXJyZW50Y29vcmRzLCBjb29yZF0pO1xyXG4gICAgICAgIHNldFJjZChuZXdSY2QpOyAvLyBrZXkgZG93biBoYW5kbGVyIGZpZ3VyZWQgaXQgb3V0XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjY2kgPiAtMSkgeyAvLyBjbGlja2VkIHNxdWFyZSBoYXMgYSB0aWxlIG9uIGl0IGZyb20gdGhlIGN1cnJlbnQgbW92ZSBpbiBwcm9ncmVzcywgc28gcHV0IGl0IGJhY2sgb24gdGhlIHBsYXllciByYWNrXHJcbiAgICAgICAgd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTXHJcbiAgICAgICAgICA/IG5ld1B0aWxlcy5wdXNoKG5ld1NxdWFyZUFycmF5Q2VsbC5sZXR0ZXIpXHJcbiAgICAgICAgICA6IG5ld0d0aWxlcy5wdXNoKG5ld1NxdWFyZUFycmF5Q2VsbC5sZXR0ZXIpO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Q2VsbC51c2VkYnkgPSBjLlVTRURfQllfTk9ORTtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheUNlbGwubGV0dGVyID0gYy5MRVRURVJfTk9ORTtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheVJvd1tjaV0gPSBuZXdTcXVhcmVBcnJheUNlbGw7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlbcmldID0gWy4uLm5ld1NxdWFyZUFycmF5Um93XTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24oXHJcbiAgICAgICAgICB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMgPyBuZXdQdGlsZXMubGVuZ3RoIC0gMSA6IG5ld0d0aWxlcy5sZW5ndGggLSAxXHJcbiAgICAgICAgKTtcclxuICAgICAgICBuZXdDdXJyZW50Y29vcmRzLnNwbGljZShjY2ksIDEpO1xyXG4gICAgICAgIHNldFNxdWFyZUFycmF5KG5ld1NxdWFyZUFycmF5KTtcclxuICAgICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKG5ld0N1cnJlbnRjb29yZHMpO1xyXG4gICAgICAgIHNldFJjZCgtMSwtMSxjLkRJUl9OT05FKTsgLy8gbWFrZSBwbGF5ZXIgY2xpY2sgYWdhaW4gdG8gc2V0IGRpcmVjdGlvblxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvLyBUaGV5IGRpZG4ndCBjbGljayBhIHNxdWFyZSB0byBwbGFjZSBhIHNlbGVjdGVkIHRpbGUgdGhlcmVcclxuICAgICAgLy8gVGhleSBkaWRuJ3QgY2xpY2sgYSBzcXVhcmUgdG8gcmVtb3ZlIGFuIGV4aXN0aW5nIHRpbGVcclxuICAgICAgaWYgKG5ld1NxdWFyZUFycmF5Q2VsbC51c2VkYnkgPT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgLy8gVGhlcmUgaXMgbm90aGluZyBvbiB0aGUgc3F1YXJlIHNvIHRoZXkgYXJlIHBpY2tpbmcgd2hlcmUgdG8gcGxhY2UgdGhlIG5leHQgdGlsZSB2aWEga2V5Ym9hcmRcclxuICAgICAgICBsZXQgbmV3RGlyZWN0aW9uID0gcmNkWzBdICE9PSByaSB8fCByY2RbMV0gIT09IGNpID8gYy5ESVJfUklHSFQgOiAvL2NsaWNrIG5ldyBzcXVhcmUsIHN0YXJ0IHdpdGggcmlnaHRcclxuICAgICAgICAgcmNkWzJdID09PSBjLkRJUl9SSUdIVCA/IGMuRElSX0RPV04gOiAvL2NsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIHJpZ2h0LCBjaGFuZ2UgdG8gZG93blxyXG4gICAgICAgICByY2RbMl0gPT09IGMuRElSX0RPV04gPyBjLkRJUl9OT05FIDogLy9jbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyBkb3duLCBjaGFuZ2UgdG8gbm8gZGlyZWN0aW9uXHJcbiAgICAgICAgIGMuRElSX1JJR0hUOyAvLyBjbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyBubyBkaXJlY3Rpb24sIGNoYW5nZSB0byByaWdodFxyXG4gICAgICAgIG5ld1JjZCA9IFtyaSxjaSxuZXdEaXJlY3Rpb25dO1xyXG4gICAgICAgIHNldFJjZChuZXdSY2QpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IGhhbmRsZVJhY2tUaWxlQ2xpY2sgPSAodGlsZWluZGV4KSA9PiB7XHJcbiAgICAgIC8vIElmIG5vIHRpbGUgaXMgc2VsZWN0ZWQgYWxyZWFkeSB0aGVuIHNldCB0aGUgc2VsZWN0aW9uXHJcbiAgICAgIGlmIChzZWxlY3Rpb24gPT09IC0xKSB7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKHRpbGVpbmRleCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIElmIHRoZSBzYW1lIHRpbGUgaXMgYWxyZWFkeSBzZWxlY3RlZCB0aGVuIHVuc2VsZWN0XHJcbiAgICAgIGlmIChzZWxlY3Rpb24gPT09IHRpbGVpbmRleCkge1xyXG4gICAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEEgdGlsZSB3YXMgYWxyZWFkeSBzZWxlY3RlZCBhbmQgdGhleSBjbGlja2VkIGFub3RoZXIgdGlsZSAtIG1vdmUgdGhlIHRpbGVcclxuICAgICAgbGV0IG5ld3JhY2sgPSBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IFsuLi5wdGlsZXNdIDogWy4uLmd0aWxlc107XHJcbiAgICAgIGxldCBtb3ZlZnJvbSA9IHNlbGVjdGlvbjtcclxuICAgICAgbGV0IG1vdmV0aWxlID0gbmV3cmFja1ttb3ZlZnJvbV07XHJcbiAgICAgIGxldCBtb3ZldG8gPSB0aWxlaW5kZXg7XHJcbiAgICAgIG5ld3JhY2suc3BsaWNlKG1vdmVmcm9tLCAxKTsgLy8gcmVtb3ZlIHRpbGUgZnJvbSBvcmlnaW5hbCBzZWxlY3RlZCBwb3NpdGlvblxyXG4gICAgICBuZXdyYWNrLnNwbGljZShtb3ZldG8sMCxtb3ZldGlsZSk7IC8vIGluc2VydCBtb3ZlZCB0aWxlIGF0IHRoZSBuZXdseSBzZWxlY3RlZCBwb3NpdGlvblxyXG4gICAgICBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IHNldFB0aWxlcyhuZXdyYWNrKSA6IHNldEd0aWxlcyhuZXdyYWNrKTtcclxuICAgICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IGVuZFByaXNvbmVyc1R1cm4gPSAoKSA9PiB7XHJcbiAgICAgIGlmICghaXNQbGF5VmFsaWQoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgcmV3aW5kSW5mbyA9IGdldFJld2luZEluZm8oKTtcclxuICAgICAgbGV0IG5ld1Jlc2N1ZXMgPSByZXNjdWVzO1xyXG4gICAgICBsZXQgZXNjYXBlaGF0Y2hlcyA9IFtcclxuICAgICAgICBcIjAtMFwiLFxyXG4gICAgICAgIFwiMC1cIiArIG1pZGRsZSxcclxuICAgICAgICBcIjAtXCIgKyBlZGdlLFxyXG4gICAgICAgIG1pZGRsZSsgXCItMFwiLFxyXG4gICAgICAgIG1pZGRsZSArIFwiLVwiICsgZWRnZSxcclxuICAgICAgICBlZGdlICsgXCItMFwiLFxyXG4gICAgICAgIGVkZ2UgKyBcIi1cIiArIG1pZGRsZSxcclxuICAgICAgICBlZGdlICsgXCItXCIgKyBlZGdlXHJcbiAgICAgIF07IC8vIGNvb3JkcyBvZiBlc2NhcGUgaGF0Y2hlc1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRjb29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoZXNjYXBlaGF0Y2hlcy5pbmRleE9mKGN1cnJlbnRjb29yZHNbaV0pID4gLTEpIHtcclxuICAgICAgICAgIG5ld1Jlc2N1ZXMgPSBuZXdSZXNjdWVzICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGV0IG5ld1B0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgICB3aGlsZSAobmV3UHRpbGVzLmxlbmd0aCA8IHJhY2tzaXplICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgbmV3UHRpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgfVxyXG4gICAgICBuZXdQdGlsZXMuc29ydCgpO1xyXG4gICAgICBsZXQgbmV3V2hvc2V0dXJuID0gbmV3UHRpbGVzLmxlbmd0aCA+IDAgPyBjLldIT1NFX1RVUk5fR1VBUkRTIDogYy5XSE9TRV9UVVJOX0dBTUVPVkVSO1xyXG4gICAgICBpZiAoIWMuQW55VW51c2VkRXNjYXBlSGF0Y2hlcyhzcXVhcmVBcnJheSkpIHtcclxuICAgICAgICBuZXdXaG9zZXR1cm4gPSBjLldIT1NFX1RVUk5fR0FNRU9WRVI7IC8vIE5vIGVzY2FwZSBoYXRjaGVzIGxlZnRcclxuICAgICAgfVxyXG4gICAgICBsZXQgcGxheWluZm8gPSBnZXRQbGF5SW5mbygpO1xyXG4gICAgICBsZXQgbmV3TW92ZSA9IHtieTogYy5QQVJUWV9UWVBFX1BSSVNPTkVSUywgdHlwZTogYy5NT1ZFX1RZUEVfUExBWSwgcmV3aW5kSW5mbzogcmV3aW5kSW5mbywgbWFpbndvcmQ6IHBsYXlpbmZvLm1haW53b3JkLCBleHRyYXdvcmRzOiBwbGF5aW5mby5leHRyYXdvcmRzLCBwb3M6IHBsYXlpbmZvLnBvc307XHJcbiAgICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICAgIHNldFJlc2N1ZXMobmV3UmVzY3Vlcyk7XHJcbiAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICBzcXVhcmVBcnJheTogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzcXVhcmVBcnJheSkpLCAvLyBEZWVwIGNvcHlcclxuICAgICAgICBwdGlsZXM6IFsuLi5uZXdQdGlsZXNdLFxyXG4gICAgICAgIGd0aWxlczogWy4uLmd0aWxlc10sXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IFwiZXB0XCIsIC8vIGVuZCBwcmlzb25lcnMgdHVyblxyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgIHNxdWFyZUFycmF5OiBzcXVhcmVBcnJheSwgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICAgIHB0aWxlczogbmV3UHRpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gbWF5IGhhdmUgZW5kZWQgdGhlIGdhbWVcclxuICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgIG1vdmVzOiBuZXdNb3ZlcywgLy8gYSBtb3ZlIHdhcyBtYWRlXHJcbiAgICAgICAgICByZXNjdWVzOiBuZXdSZXNjdWVzIC8vIG1heSBoYXZlIHJlc2N1ZWQgYW5vdGhlciBwcmlzb25lclxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBlbmRHdWFyZHNUdXJuID0gKCkgPT4ge1xyXG4gICAgICBpZiAoIWlzUGxheVZhbGlkKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHJld2luZEluZm8gPSBnZXRSZXdpbmRJbmZvKCk7XHJcbiAgICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgICAgd2hpbGUgKG5ld0d0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIG5ld0d0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgbmV3R3RpbGVzLnNvcnQoKTtcclxuICAgICAgbGV0IHNuYXBzcXVhcmVhcnJheSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3F1YXJlQXJyYXkpKTsgLy8gRGVlcCBjb3B5XHJcbiAgICAgIGxldCBzbmFwcHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICAgIGxldCBzbmFwZ3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICAgIGxldCBuZXdXaG9zZXR1cm4gPSBuZXdHdGlsZXMubGVuZ3RoID4gMCA/IGMuV0hPU0VfVFVSTl9QUklTT05FUlMgOiBjLldIT1NFX1RVUk5fR0FNRU9WRVI7XHJcbiAgICAgIGlmICghYy5BbnlVbnVzZWRFc2NhcGVIYXRjaGVzKHNxdWFyZUFycmF5KSkge1xyXG4gICAgICAgIG5ld1dob3NldHVybiA9IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUjsgLy8gTm8gZXNjYXBlIGhhdGNoZXMgbGVmdFxyXG4gICAgICB9XHJcbiAgICAgIGxldCBwbGF5aW5mbyA9IGdldFBsYXlJbmZvKCk7XHJcbiAgICAgIGxldCBuZXdNb3ZlID0ge2J5OiBjLlBBUlRZX1RZUEVfR1VBUkRTLCB0eXBlOiBjLk1PVkVfVFlQRV9QTEFZLCByZXdpbmRJbmZvOiByZXdpbmRJbmZvLCBtYWlud29yZDogcGxheWluZm8ubWFpbndvcmQsIGV4dHJhd29yZHM6IHBsYXlpbmZvLmV4dHJhd29yZHMsIHBvczogcGxheWluZm8ucG9zfTtcclxuICAgICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgIHNxdWFyZUFycmF5OiBzbmFwc3F1YXJlYXJyYXksXHJcbiAgICAgICAgcHRpbGVzOiBzbmFwcHRpbGVzLFxyXG4gICAgICAgIGd0aWxlczogc25hcGd0aWxlcyxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgZnVuYzogXCJlZ3RcIiwgLy8gZW5kIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LFxyXG4gICAgICAgICAgc3F1YXJlQXJyYXk6IHNxdWFyZUFycmF5LCAvLyB0aGlzIHdhcyBiZWluZyBjaGFuZ2VkIGFzIHRoZSB0aWxlcyB3ZXJlIGJlaW5nIHBsYXllZFxyXG4gICAgICAgICAgZ3RpbGVzOiBuZXdHdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIGd1YXJkcyByYWNrXHJcbiAgICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICAgIG1vdmVzOiBuZXdNb3ZlcywgLy8gYSBtb3ZlIHdhcyBtYWRlXHJcbiAgICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gbWF5IGhhdmUgZW5kZWQgdGhlIGdhbWVcclxuICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBzd2FwUHJpc29uZXJzVGlsZXMgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSkge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcIk5lZWQgXCIgKyByYWNrc2l6ZSArIFwiIHRpbGVzIGluIHRoZSBiYWcgdG8gZXhjaGFuZ2VcIilcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHJld2luZEluZm8gPSBnZXRSZXdpbmRJbmZvKCk7XHJcbiAgICAgIGxldCBuZXdQdGlsZXMgPSBbXTtcclxuICAgICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgICAgd2hpbGUgKG5ld1B0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIG5ld1B0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgbmV3UHRpbGVzLnNvcnQoKTtcclxuICAgICAgbmV3VGlsZXMgPSBbLi4ubmV3VGlsZXMsIC4uLnNuYXBzaG90LnB0aWxlc107XHJcbiAgICAgIG5ld1RpbGVzLnNvcnQoKTtcclxuICAgICAgbGV0IG5ld01vdmUgPSB7Ynk6IGMuUEFSVFlfVFlQRV9QUklTT05FUlMsIHR5cGU6IGMuTU9WRV9UWVBFX1NXQVAsIHJld2luZEluZm86IHJld2luZEluZm99O1xyXG4gICAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICBzZXRTcXVhcmVBcnJheShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNuYXBzaG90LnNxdWFyZUFycmF5KSkpOyAvLyBEZWVwIGNvcHlcclxuICAgICAgc2V0V2hvc2V0dXJuKGMuV0hPU0VfVFVSTl9HVUFSRFMpO1xyXG4gICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICBzcXVhcmVBcnJheTogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzbmFwc2hvdC5zcXVhcmVBcnJheSkpLCAvLyBEZWVwIGNvcHlcclxuICAgICAgICBwdGlsZXM6IFsuLi5uZXdQdGlsZXNdLFxyXG4gICAgICAgIGd0aWxlczogWy4uLmd0aWxlc10sXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IFwiZXB0XCIsIC8vIGVuZCBwcmlzb25lcnMgdHVyblxyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgIHdob3NldHVybjogYy5XSE9TRV9UVVJOX0dVQVJEUywgLy8gc3dhcCBuZXZlciBlbmRzIHRoZSBnYW1lIHNvIGdvIHRvIG9wcG9uZW50XHJcbiAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgICBzcXVhcmVBcnJheTogc25hcHNob3Quc3F1YXJlQXJyYXksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICAgIHB0aWxlczogbmV3UHRpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgICBtb3ZlczogbmV3TW92ZXMsIC8vIGEgbW92ZSB3YXMgbWFkZVxyXG4gICAgICAgICAgcmVzY3VlczogcmVzY3VlcyAvLyBubyByZXNjdWVzIG9uIGFuIGV4Y2hhbmdlXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBzd2FwR3VhcmRzVGlsZXMgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSkge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcIk5lZWQgXCIgKyByYWNrc2l6ZSArIFwiIHRpbGVzIGluIHRoZSBiYWcgdG8gZXhjaGFuZ2VcIilcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHJld2luZEluZm8gPSBnZXRSZXdpbmRJbmZvKCk7XHJcbiAgICAgIGxldCBuZXdHdGlsZXMgPSBbXTtcclxuICAgICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgICAgd2hpbGUgKG5ld0d0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIG5ld0d0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgbmV3R3RpbGVzLnNvcnQoKTtcclxuICAgICAgbmV3VGlsZXMgPSBbLi4ubmV3VGlsZXMsIC4uLnNuYXBzaG90Lmd0aWxlc107XHJcbiAgICAgIG5ld1RpbGVzLnNvcnQoKTtcclxuICAgICAgbGV0IG5ld01vdmUgPSB7Ynk6IGMuUEFSVFlfVFlQRV9HVUFSRFMsIHR5cGU6IGMuTU9WRV9UWVBFX1NXQVAsIHJld2luZEluZm86IHJld2luZEluZm99O1xyXG4gICAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICBzZXRTcXVhcmVBcnJheShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNuYXBzaG90LnNxdWFyZUFycmF5KSkpOyAvLyBEZWVwIGNvcHlcclxuICAgICAgc2V0V2hvc2V0dXJuKGMuV0hPU0VfVFVSTl9QUklTT05FUlMpO1xyXG4gICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICBzcXVhcmVBcnJheTogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzbmFwc2hvdC5zcXVhcmVBcnJheSkpLCAvLyBEZWVwIGNvcHlcclxuICAgICAgICBwdGlsZXM6IFsuLi5wdGlsZXNdLFxyXG4gICAgICAgIGd0aWxlczogWy4uLm5ld0d0aWxlc10sXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgIHdob3NldHVybjogYy5XSE9TRV9UVVJOX1BSSVNPTkVSUywgLy8gc3dhcCBuZXZlciBlbmRzIHRoZSBnYW1lIHNvIGdvIHRvIG9wcG9uZW50XHJcbiAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgICBzcXVhcmVBcnJheTogc25hcHNob3Quc3F1YXJlQXJyYXksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICAgIGd0aWxlczogbmV3R3RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgICBtb3ZlczogbmV3TW92ZXMgLy8gYSBtb3ZlIHdhcyBtYWRlXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gaXNQbGF5VmFsaWQoKSB7XHJcbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHdvcmQgc2luY2UgaXQgYWZmZWN0cyB0aGUgdmFsaWRpdHkgcnVsZXNcclxuICAgICAgbGV0IGZpcnN0V29yZCA9IHRydWU7XHJcbiAgICAgIGxldCBudW1tb3ZlcyA9IG1vdmVzLmxlbmd0aDtcclxuICAgICAgZm9yICh2YXIgbW92ZWluZGV4ID0gMDsgZmlyc3RXb3JkICYmIChtb3ZlaW5kZXggPCBudW1tb3Zlcyk7ICsrbW92ZWluZGV4KSB7XHJcbiAgICAgICAgaWYgKG1vdmVzW21vdmVpbmRleF0udHlwZSA9PT0gYy5NT1ZFX1RZUEVfUExBWSkge1xyXG4gICAgICAgICAgZmlyc3RXb3JkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIEZpcnN0IHdvcmQgbXVzdCBoaXQgY2VudGVyIHNxdWFyZVxyXG4gICAgICBpZiAoZmlyc3RXb3JkICYmIHNxdWFyZUFycmF5W21pZGRsZV1bbWlkZGxlXS51c2VkYnkgPT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwiRmlyc3QgcGxheSBtdXN0IGhpdCBjZW50ZXIgc3F1YXJlXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICAvLyBBdCBsZWFzdCAxIHRpbGUgbXVzdCBiZSBwbGF5ZWRcclxuICAgICAgaWYgKGN1cnJlbnRjb29yZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwiWW91IGRpZG4ndCBwbGF5IGFueSB0aWxlc1wiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgLyogR28gdGhyb3VnaCBlYWNoIHBsYXllZCB0aWxlXHJcbiAgICAgICAgICBNYWtlIHN1cmUgaXQgaXMgbm90IGlzb2xhdGVkIGZyb20gYWxsIHRoZSBvdGhlciB0aWxlc1xyXG4gICAgICAgICAgRGV0ZXJtaW5lIHRoZSBsb3dlc3QgYW5kIGhpZ2hlc3Qgcm93IGFuZCBjb2x1bW4gbnVtYmVycyBvZiB0aWxlcyBwbGF5ZWQgdGhpcyBtb3ZlXHJcbiAgICAgICovXHJcbiAgICAgIGxldCBudW1jb29yZHMgPSBjdXJyZW50Y29vcmRzLmxlbmd0aDtcclxuICAgICAgbGV0IGxvd3JvdyA9IGVkZ2UrMTtcclxuICAgICAgbGV0IGhpZ2hyb3cgPSAtMTtcclxuICAgICAgbGV0IGxvd2NvbCA9IGVkZ2UrMTtcclxuICAgICAgbGV0IGhpZ2hjb2wgPSAtMTtcclxuICAgICAgZm9yICh2YXIgY29vcmQ9MDsgY29vcmQgPCBudW1jb29yZHM7ICsrY29vcmQpIHsgLy8gRWFjaCB0aWxlIHBsYXllZCB0aGlzIG1vdmVcclxuICAgICAgICBsZXQgdGVtcHJvdyA9IHBhcnNlSW50KGN1cnJlbnRjb29yZHNbY29vcmRdLnNwbGl0KFwiLVwiKVswXSk7XHJcbiAgICAgICAgbGV0IHRlbXBjb2wgPSBwYXJzZUludChjdXJyZW50Y29vcmRzW2Nvb3JkXS5zcGxpdChcIi1cIilbMV0pO1xyXG4gICAgICAgIGlmICh0ZW1wcm93IDwgbG93cm93KSB7IGxvd3JvdyA9IHRlbXByb3c7fVxyXG4gICAgICAgIGlmICh0ZW1wcm93ID4gaGlnaHJvdykgeyBoaWdocm93ID0gdGVtcHJvdzt9XHJcbiAgICAgICAgaWYgKHRlbXBjb2wgPCBsb3djb2wpIHsgbG93Y29sID0gdGVtcGNvbDt9XHJcbiAgICAgICAgaWYgKHRlbXBjb2wgPiBoaWdoY29sKSB7IGhpZ2hjb2wgPSB0ZW1wY29sO31cclxuICAgICAgICAvLyBNYWtlIHN1cmUgdGhlcmUgaXMgYW5vdGhlciB0aWxlIGltbWVkaWF0ZWx5IGFib3ZlLCBiZWxvdywgbGVmdCwgb3IgcmlnaHQgKG5vdCBpc29sYXRlZClcclxuICAgICAgICBpZiAoISh0ZW1wcm93ID4gMCAmJiBzcXVhcmVBcnJheVt0ZW1wcm93LTFdW3RlbXBjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpICYmXHJcbiAgICAgICAgICAhKHRlbXBjb2wgPiAwICYmIHNxdWFyZUFycmF5W3RlbXByb3ddW3RlbXBjb2wtMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgJiZcclxuICAgICAgICAgICEodGVtcHJvdyA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbdGVtcHJvdysxXVt0ZW1wY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSAmJlxyXG4gICAgICAgICAgISh0ZW1wY29sIDwgZWRnZSAmJiBzcXVhcmVBcnJheVt0ZW1wcm93XVt0ZW1wY29sKzFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiRWFjaCBwbGF5ZWQgdGlsZSBtdXN0IGJlIHBhcnQgb2YgYSB3b3JkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gVXNpbmcgdGhlIGhpZ2ggYW5kIGxvdyB2YWx1ZXMsIGNoZWNrIGlmIHRoZSBwbGF5IGlzIGluIGEgc3RyYWlnaHQgbGluZVxyXG4gICAgICBpZiAobG93cm93ICE9PSBoaWdocm93ICYmIGxvd2NvbCAhPT0gaGlnaGNvbCkge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcIlRpbGVzIHBsYXllZCBtdXN0IGJlIGluIGEgc3RyYWlnaHQgbGluZVwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHBsYXl0aHJ1ID0gZmFsc2U7XHJcbiAgICAgIGxldCBob29rbWFkZSA9IGZhbHNlO1xyXG4gICAgICAvKiBUcmF2ZXJzZSBmcm9tIGZpcnN0IHBsYXllZCB0aWxlIHRvIGxhc3QgcGxheWVyIHRpbGVcclxuICAgICAgICAgIE1ha2Ugc3VyZSB0aGVyZSBhcmUgbm8gdW51c2VkIHNxdWFyZXMgaW5iZXR3ZWVuIChnYXBzIGluIHRoZSBwbGF5ZWQgd29yZClcclxuICAgICAgICAgIENoZWNrIGlmIHdlIHBsYXllZCB0aHJvdWdoIGV4aXN0aW5nIHRpbGVzXHJcbiAgICAgICAgICBDaGVjayBpZiB3ZSBob29rZWQgZXhpc3RpbmcgdGlsZXMvd29yZHNcclxuICAgICAgKi9cclxuICAgICAgZm9yICh2YXIgdGVtcHJvdyA9IGxvd3JvdzsgdGVtcHJvdyA8PSBoaWdocm93OyArK3RlbXByb3cpIHtcclxuICAgICAgICBmb3IgKHZhciB0ZW1wY29sID0gbG93Y29sOyB0ZW1wY29sIDw9IGhpZ2hjb2w7ICsrdGVtcGNvbCkge1xyXG4gICAgICAgICAgaWYgKHNxdWFyZUFycmF5W3RlbXByb3ddW3RlbXBjb2xdLnVzZWRieSA9PT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiVGhlcmUgaXMgYSBnYXAgaW4geW91ciB3b3JkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIWZpcnN0V29yZCkgeyAvLyBQbGF5IHRocm91Z2ggYW5kIGhvb2sgbm90IHBvc3NpYmxlIG9uIGZpcnN0IG1vdmVcclxuICAgICAgICAgICAgbGV0IHRlbXBjb29yZCA9IHRlbXByb3cgKyBcIi1cIiArIHRlbXBjb2w7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50Y29vcmRzLmluZGV4T2YodGVtcGNvb3JkKSA8IDApIHsgLy8gVGlsZSB3YXMgbm90IHBsYXllZCB0aGlzIG1vdmUgKHdhcyBhbHJlYWR5IG9uIHRoZSBib2FyZClcclxuICAgICAgICAgICAgICBwbGF5dGhydSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiB0ZW1wcm93ID4gMCAmJiBzcXVhcmVBcnJheVt0ZW1wcm93LTFdW3RlbXBjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgdGVtcHJvdyA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbdGVtcHJvdysxXVt0ZW1wY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIHRlbXBjb2wgPiAwICYmIHNxdWFyZUFycmF5W3RlbXByb3ddW3RlbXBjb2wtMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiB0ZW1wY29sIDwgZWRnZSAmJiBzcXVhcmVBcnJheVt0ZW1wcm93XVt0ZW1wY29sKzFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgaG9va21hZGUgPSB0cnVlOyB9ICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFmaXJzdFdvcmQpIHtcclxuICAgICAgICAvLyBXZSBhbHJlYWR5IGZvdW5kIHBsYXkgdGhyb3VnaCBhIHRpbGUgYmV0d2VlbiBmaXJzdCBhbmQgbGFzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIC8vIE5vdyBjaGVjayBpZiBwbGF5ZWQgd29yZCBoYXMgYSB0aWxlIGJlZm9yZSBmaXJzdCBvciBhZnRlciBsYXN0IHBsYXllZCB0aWxlXHJcbiAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiBsb3djb2wgPiAwICYmIHNxdWFyZUFycmF5W2xvd3Jvd11bbG93Y29sLTFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiBoaWdoY29sIDwgZWRnZSAmJiBzcXVhcmVBcnJheVtsb3dyb3ddW2hpZ2hjb2wrMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGxvd3JvdyA+IDAgJiYgc3F1YXJlQXJyYXlbbG93cm93LTFdW2xvd2NvbF0gIT09IGMuVVNFRF9CWV9OT05FKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgaGlnaHJvdyA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbaGlnaHJvdysxXVtsb3djb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICAgICAgLy8gTm93IHdlIGhhdmUgZnVsbHkgaWRlbnRpZmllZCBwbGF5IHRocm91Z2ggd2UgY2FuIG1ha2Ugc3VyZSB0aGV5IHBsYXllZCB0aHJvdWdoIG9yIG1hZGUgYSBob29rXHJcbiAgICAgICAgLy8gVGhpcyBpbiBtYW5kYXRvcnkgc2luY2UgaXQgaXMgbm90IHRoZSBmaXJzdCBtb3ZlXHJcbiAgICAgICAgaWYgKCFwbGF5dGhydSAmJiAhaG9va21hZGUpIHtcclxuICAgICAgICAgIHdpbmRvdy5hbGVydChcIk5ldyB3b3JkcyBtdXN0IGV4dGVuZCBhbiBleGlzdGluZyB3b3JkIGFuZC9vciBob29rIGV4aXN0aW5nIHdvcmRzIG9yIHRpbGVzXCIpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIGdldFBsYXlJbmZvKCkge1xyXG4gICAgICBsZXQgcGxheWluZm8gPSB7fTtcclxuICAgICAgbGV0IG1haW53b3JkID0gXCJcIjtcclxuICAgICAgbGV0IGV4dHJhd29yZHMgPSBbXTtcclxuICAgICAgbGV0IHdvcmRzdGFydGNvb3JkID0gXCJcIjtcclxuICAgICAgbGV0IG51bXJvd3MgPSBlZGdlKzE7XHJcbiAgICAgIGxldCBudW1jb2xzID0gZWRnZSsxO1xyXG4gICAgICBsZXQgbG93cm93ID0gbnVtcm93cztcclxuICAgICAgbGV0IGhpZ2hyb3cgPSAtMTtcclxuICAgICAgbGV0IGxvd2NvbCA9IG51bWNvbHM7XHJcbiAgICAgIGxldCBoaWdoY29sID0gLTE7XHJcbiAgICAgIGxldCBudW1jb29yZHMgPSBjdXJyZW50Y29vcmRzLmxlbmd0aDtcclxuICAgICAgZm9yICh2YXIgY29vcmQ9MDsgY29vcmQgPCBudW1jb29yZHM7ICsrY29vcmQpIHtcclxuICAgICAgICBsZXQgcm93ID0gcGFyc2VJbnQoY3VycmVudGNvb3Jkc1tjb29yZF0uc3BsaXQoXCItXCIpWzBdKTtcclxuICAgICAgICBsZXQgY29sID0gcGFyc2VJbnQoY3VycmVudGNvb3Jkc1tjb29yZF0uc3BsaXQoXCItXCIpWzFdKTtcclxuICAgICAgICBpZiAocm93IDwgbG93cm93KSB7XHJcbiAgICAgICAgICBsb3dyb3cgPSByb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyb3cgPiBoaWdocm93KSB7XHJcbiAgICAgICAgICBoaWdocm93ID0gcm93O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sIDwgbG93Y29sKSB7XHJcbiAgICAgICAgICBsb3djb2wgPSBjb2w7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2wgPiBoaWdoY29sKSB7XHJcbiAgICAgICAgICBoaWdoY29sID0gY29sO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobG93cm93IDwgaGlnaHJvdyB8fCBudW1jb29yZHMgPT09IDEpIHsgLy8gdGlsZXMgcGxhY2VkIG9uIGRpZmZlcmVuY2Ugcm93cyBzbyBwbGF5IGlzIHZlcnRpY2FsLCBvciBzaW5nbGUgdGlsZSBwbGF5ZWRcclxuICAgICAgICBsZXQgY29sID0gbG93Y29sOyAvLyBsb3djb2wgYW5kIGhpZ2hjb2wgd2lsbCBoYXZlIHRoZSBzYW1lIHZhbHVlXHJcbiAgICAgICAgLy8gZmluZCB0aGUgbG93ZXN0IHJvdyBudW1iZXIgb2YgdGhlIG1haW4gd29yZCwgd2hpY2ggbWF5IGJlIGxvd2VyIHRoYW4gdGhhdCBvZiB0aGUgZmlyc3QgcGxheWVkIHRpbGVcclxuICAgICAgICBsZXQgbG93ZXN0cm93ID0gbG93cm93O1xyXG4gICAgICAgIHdoaWxlIChsb3dlc3Ryb3cgPiAwICYmIHNxdWFyZUFycmF5W2xvd2VzdHJvdy0xXVtjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgIGxvd2VzdHJvdyA9IGxvd2VzdHJvdyAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZpbmQgdGhlIGhpZ2hlc3Qgcm93IG51bWJlciBvZiB0aGUgbWFpbiB3b3JkLCB3aGljaCBtYXkgYmUgaGlnaGVyIHRoYW4gdGhhdCBvZiB0aGUgbGFzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIGxldCBoaWdoZXN0cm93ID0gaGlnaHJvdztcclxuICAgICAgICB3aGlsZSAoaGlnaGVzdHJvdyA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbaGlnaGVzdHJvdysxXVtjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgIGhpZ2hlc3Ryb3cgPSBoaWdoZXN0cm93ICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd29yZHN0YXJ0Y29vcmQgPSBjLkJPQVJEX0NPTF9IRUFERVJTW2NvbF0gKyBjLkJPQVJEX1JPV19IRUFERVJTW2xvd2VzdHJvd107IC8vIHZlcnRpY2FsIHBsYXkgY29vcmRzIHN0YXJ0IHdpdGggY29sIGhlYWRlclxyXG4gICAgICAgIGZvciAodmFyIHJvdyA9IGxvd2VzdHJvdzsgcm93IDw9IGhpZ2hlc3Ryb3c7ICsrcm93KSB7XHJcbiAgICAgICAgICBtYWlud29yZCA9IG1haW53b3JkICsgc3F1YXJlQXJyYXlbcm93XVtjb2xdLmxldHRlcjtcclxuICAgICAgICAgIGxldCBjb29yZCA9IHJvdyArIFwiLVwiICsgY29sO1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCkgPiAtMSkgeyAvLyBUaGlzIHRpbGUgd2FzIHBsYXllZCwgY2hlY2sgZm9yIGhvb2tzXHJcbiAgICAgICAgICAgIGxldCBsb3dlc3Rjb2wgPSBjb2w7XHJcbiAgICAgICAgICAgIHdoaWxlIChsb3dlc3Rjb2wgPiAwICYmIHNxdWFyZUFycmF5W3Jvd11bbG93ZXN0Y29sLTFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgICBsb3dlc3Rjb2wgPSBsb3dlc3Rjb2wgLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBoaWdoZXN0Y29sID0gY29sO1xyXG4gICAgICAgICAgICB3aGlsZSAoaGlnaGVzdGNvbCA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbcm93XVtoaWdoZXN0Y29sKzFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgICBoaWdoZXN0Y29sID0gaGlnaGVzdGNvbCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxvd2VzdGNvbCA8IGhpZ2hlc3Rjb2wpIHsgLy8gaG9vayB3YXMgbWFkZVxyXG4gICAgICAgICAgICAgIGxldCBleHRyYXdvcmQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIHRlbXBjb2wgPSBsb3dlc3Rjb2w7IHRlbXBjb2wgPD0gaGlnaGVzdGNvbDsgKyt0ZW1wY29sKSB7XHJcbiAgICAgICAgICAgICAgICBleHRyYXdvcmQgPSBleHRyYXdvcmQgKyBzcXVhcmVBcnJheVtyb3ddW3RlbXBjb2xdLmxldHRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZXh0cmF3b3JkcyA9IFsuLi5leHRyYXdvcmRzLCBleHRyYXdvcmRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYWlud29yZC5sZW5ndGggPCAyKSB7IC8vIEhvcml6b250YWwgcGxheSBvciBzaW5nbGUgdGlsZSBkcm9wIHRoYXQgY2Fubm90IGJlIGEgdmVydGljYWwgcGxheVxyXG4gICAgICAgIGxldCByb3cgPSBsb3dyb3c7IC8vIGxvd3JvdyBhbmQgaGlnaHJvdyB3aWxsIGhhdmUgdGhlIHNhbWUgdmFsdWVcclxuICAgICAgICAvLyBmaW5kIHRoZSBsb3dlc3QgY29sIG51bWJlciBvZiB0aGUgbWFpbiB3b3JkLCB3aGljaCBtYXkgYmUgbG93ZXIgdGhhbiB0aGF0IG9mIHRoZSBmaXJzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIGxldCBsb3dlc3Rjb2wgPSBsb3djb2w7XHJcbiAgICAgICAgd2hpbGUgKGxvd2VzdGNvbCA+IDAgJiYgc3F1YXJlQXJyYXlbcm93XVtsb3dlc3Rjb2wtMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgbG93ZXN0Y29sID0gbG93ZXN0Y29sIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZmluZCB0aGUgaGlnaGVzdCBjb2wgbnVtYmVyIG9mIHRoZSBtYWluIHdvcmQsIHdoaWNoIG1heSBiZSBoaWdoZXIgdGhhbiB0aGF0IG9mIHRoZSBsYXN0IHBsYXllZCB0aWxlXHJcbiAgICAgICAgbGV0IGhpZ2hlc3Rjb2wgPSBoaWdoY29sO1xyXG4gICAgICAgIHdoaWxlIChoaWdoZXN0Y29sIDwgZWRnZSAmJiBzcXVhcmVBcnJheVtyb3ddW2hpZ2hlc3Rjb2wrMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgaGlnaGVzdGNvbCA9IGhpZ2hlc3Rjb2wgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3b3Jkc3RhcnRjb29yZCA9IGMuQk9BUkRfUk9XX0hFQURFUlNbcm93XSArIGMuQk9BUkRfQ09MX0hFQURFUlNbbG93ZXN0Y29sXTsgLy8gaG9yaXpvbnRhbCBwbGF5IGNvb3JkcyBzdGFydCB3aXRoIHJvdyBoZWFkZXJcclxuICAgICAgICBtYWlud29yZCA9IFwiXCI7IC8vIEluIGNhc2Ugd2UgZ290IGEgMSBsZXR0ZXIgbWFpbndvcmQgaW4gdGhlIHByZXZpb3VzIGJsb2NrXHJcbiAgICAgICAgZXh0cmF3b3JkcyA9IFtdOyAvLyBEaXR0b1xyXG4gICAgICAgIGZvciAodmFyIGNvbCA9IGxvd2VzdGNvbDsgY29sIDw9IGhpZ2hlc3Rjb2w7ICsrY29sKSB7XHJcbiAgICAgICAgICBtYWlud29yZCA9IG1haW53b3JkICsgc3F1YXJlQXJyYXlbcm93XVtjb2xdLmxldHRlcjtcclxuICAgICAgICAgIGxldCBjb29yZCA9IHJvdyArIFwiLVwiICsgY29sO1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCkgPiAtMSkgeyAvLyBUaGlzIHRpbGUgd2FzIHBsYXllZCwgY2hlY2sgZm9yIGhvb2tzXHJcbiAgICAgICAgICAgIGxldCBsb3dlc3Ryb3cgPSByb3c7XHJcbiAgICAgICAgICAgIHdoaWxlIChsb3dlc3Ryb3cgPiAwICYmIHNxdWFyZUFycmF5W2xvd2VzdHJvdy0xXVtjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgICBsb3dlc3Ryb3cgPSBsb3dlc3Ryb3cgLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBoaWdoZXN0cm93ID0gcm93O1xyXG4gICAgICAgICAgICB3aGlsZSAoaGlnaGVzdHJvdyA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbaGlnaGVzdHJvdysxXVtjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgICBoaWdoZXN0cm93ID0gaGlnaGVzdHJvdyArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxvd2VzdHJvdyA8IGhpZ2hlc3Ryb3cpIHsgLy8gaG9vayB3YXMgbWFkZVxyXG4gICAgICAgICAgICAgIGxldCBleHRyYXdvcmQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIHRlbXByb3cgPSBsb3dlc3Ryb3c7IHRlbXByb3cgPD0gaGlnaGVzdHJvdzsgKyt0ZW1wcm93KSB7XHJcbiAgICAgICAgICAgICAgICBleHRyYXdvcmQgPSBleHRyYXdvcmQgKyBzcXVhcmVBcnJheVt0ZW1wcm93XVtjb2xdLmxldHRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZXh0cmF3b3JkcyA9IFsuLi5leHRyYXdvcmRzLCBleHRyYXdvcmRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHBsYXlpbmZvID0ge21haW53b3JkOiBtYWlud29yZCwgZXh0cmF3b3JkczogZXh0cmF3b3JkcywgcG9zOiB3b3Jkc3RhcnRjb29yZH07XHJcbiAgICAgIHJldHVybiBwbGF5aW5mbztcclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIGdldFJld2luZEluZm8oKSB7IC8vIE11c3QgYmUgY2FsbGVkIGJlZm9yZSB5b3Ugc3RhcnQgc2V0dGluZyBuZXcgdmFsdWVzIGZvciBzdHVmZlxyXG4gICAgICAvKiBSZXdpbmQgaW5mbyBpcyBldmVyeXRoaW5nIHlvdSBuZWVkIHRvIHJldmVyc2UgdGhlIG1vdmUgdGhhdCB3ZSBkbyBub3QgYWxyZWFkeSBoYXZlIGluIHRoZSBuZXcgbW92ZSB2YXJpYWJsZTpcclxuICAgICAgICAgIHNxdWFyZUFycmF5OiBzYXlzIHdoYXQgdGlsZSBpcyBvbiB3aGF0IHNxdWFyZSBhbmQgd2hvIHBsYXllZCBpdCBhbmQgd2hhdCB0aGUgcm93IGFuZCBjb2wgYXJlXHJcbiAgICAgICAgICByYWNrOiBwbGF5ZXJzIHJhY2sgYmVmb3JlIG1vdmUgd2FzIG1hZGUgXHJcbiAgICAgICAgICB0aWxlczogdGlsZSBwb29sIGJlZm9yZSBwaWNraW5nIG5ldyB0aWxlc1xyXG4gICAgICAgICAgcmVzY3VlczogcmVzY3VlIGNvdW50XHJcbiAgICAgICovXHJcbiAgICAgIGxldCByZXdpbmRJbmZvID0ge1xyXG4gICAgICAgIHNxdWFyZUFycmF5OiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNuYXBzaG90LnNxdWFyZUFycmF5KSksIC8vIERlZXAgY29weVxyXG4gICAgICAgIHJhY2s6IHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX0dVQVJEUyA/IFsuLi5zbmFwc2hvdC5ndGlsZXNdOiBbLi4uc25hcHNob3QucHRpbGVzXSxcclxuICAgICAgICB0aWxlczogWy4uLnRpbGVzXSxcclxuICAgICAgICByZXNjdWVzOiByZXNjdWVzXHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybiByZXdpbmRJbmZvO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWxsb3dVbmRvTGFzdFR1cm4oKSB7XHJcbiAgICAgIGlmICghYWxsb3dSZXdpbmQpIHtcclxuICAgICAgICBzZXRBbGxvd1Jld2luZCh0cnVlKTtcclxuICAgICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgICBmdW5jOiBcImFsbG93dW5kb1wiLCAvLyBhbGxvdyB1bmRvIGxhc3QgdHVyblxyXG4gICAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQgLy8gd2hvIGlzIGFsbG93aW5nIGl0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gcGVyZm9ybVJld2luZCgpIHtcclxuICAgICAgLyogUmV3aW5kIHRoZSBsYXN0IG1vdmUgYW5kIHRha2UgaXQgb2ZmIHRoZSBlbmQgb2YgdGhlIG1vdmUgbGlzdCAqL1xyXG4gICAgICBsZXQgbnVtTW92ZXMgPSBtb3Zlcy5sZW5ndGg7XHJcbiAgICAgIGxldCBsYXN0TW92ZSA9IG1vdmVzW21vdmVzLmxlbmd0aC0xXTtcclxuICAgICAgbGV0IG5ld1NxdWFyZUFycmF5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShsYXN0TW92ZS5yZXdpbmRJbmZvLnNxdWFyZUFycmF5KSk7IC8vIERlZXAgY29weVxyXG4gICAgICBsZXQgbmV3VGlsZXMgPSBbLi4ubGFzdE1vdmUucmV3aW5kSW5mby50aWxlc107XHJcbiAgICAgIGxldCBuZXdQdGlsZXMgPSBsYXN0TW92ZS5ieSA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IFsuLi5sYXN0TW92ZS5yZXdpbmRJbmZvLnJhY2tdIDogWy4uLnB0aWxlc107XHJcbiAgICAgIGxldCBuZXdHdGlsZXMgPSBsYXN0TW92ZS5ieSA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUyA/IFsuLi5sYXN0TW92ZS5yZXdpbmRJbmZvLnJhY2tdIDogWy4uLmd0aWxlc107XHJcbiAgICAgIGxldCBuZXdSZXNjdWVzID0gbGFzdE1vdmUucmV3aW5kSW5mby5yZXNjdWVzO1xyXG4gICAgICBsZXQgbmV3V2hvc2V0dXJuID0gbGFzdE1vdmUuYnk7IC8vIEJhY2sgdG8gdGhlaXIgdHVyblxyXG4gICAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXNdO1xyXG4gICAgICBuZXdNb3Zlcy5zcGxpY2UobnVtTW92ZXMtMSwxKTtcclxuICAgICAgbGV0IG5ld1NuYXBzaG90ID0ge1xyXG4gICAgICAgIHNxdWFyZUFycmF5OiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG5ld1NxdWFyZUFycmF5KSksIC8vIERlZXAgY29weVxyXG4gICAgICAgIGd0aWxlczogWy4uLm5ld0d0aWxlc10sXHJcbiAgICAgICAgcHRpbGVzOiBbLi4ubmV3UHRpbGVzXVxyXG4gICAgICB9O1xyXG4gICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgc2V0U3F1YXJlQXJyYXkobmV3U3F1YXJlQXJyYXkpO1xyXG4gICAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgICAgc2V0UmVzY3VlcyhuZXdSZXNjdWVzKTtcclxuICAgICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgICBzZXRTbmFwc2hvdChuZXdTbmFwc2hvdCk7XHJcbiAgICAgIC8vIEp1c3Qgc2VuZCBldmVyeXRoaW5nIGV2ZW4gdGhvdWdoIHNvbWUgY291bGQgYmUgaGFyZCBjb2RlZCBpbiBwcm9jZXNzTWVzc2FnZSBieSBvcHBvbmVudFxyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IFwidW5kb3R1cm5cIiwgLy8gdW5kbyBsYXN0IHR1cm5cclxuICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsXHJcbiAgICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHRpbGUgcG9vbFxyXG4gICAgICAgICAgcHRpbGVzOiBuZXdQdGlsZXMsIC8vIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgICBndGlsZXM6IG5ld0d0aWxlcywgLy8gZ3VhcmRzIHJhY2tcclxuICAgICAgICAgIHNxdWFyZUFycmF5OiBuZXdTcXVhcmVBcnJheSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4sIC8vIHN3YXAgbmV2ZXIgZW5kcyB0aGUgZ2FtZSBzbyBnbyB0byBvcHBvbmVudFxyXG4gICAgICAgICAgcmVzY3VlczogbmV3UmVzY3VlcywgLy8gcmVzY3VlIGNvdW50XHJcbiAgICAgICAgICBtb3ZlczogbmV3TW92ZXMsIC8vIGEgbW92ZSB3YXMgbWFkZVxyXG4gICAgICAgICAgc25hcHNob3Q6IG5ld1NuYXBzaG90XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgcmVjYWxsVGlsZXMgPSAoKSA9PiB7XHJcbiAgICAgIHNldFNxdWFyZUFycmF5KEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc25hcHNob3Quc3F1YXJlQXJyYXkpKSk7IC8vIERlZXAgY29weVxyXG4gICAgICBzZXRQdGlsZXMoWy4uLnNuYXBzaG90LnB0aWxlc10pO1xyXG4gICAgICBzZXRHdGlsZXMoWy4uLnNuYXBzaG90Lmd0aWxlc10pO1xyXG4gICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgICAgc2V0UmNkKFstMSwtMSxjLkRJUl9OT05FXSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgcHJpc29uZXJQYXNzID0gKCkgPT4ge1xyXG4gICAgICBsZXQgcmV3aW5kSW5mbyA9IGdldFJld2luZEluZm8oKTtcclxuICAgICAgbGV0IG5ld01vdmUgPSB7Ynk6IGMuUEFSVFlfVFlQRV9QUklTT05FUlMsIHR5cGU6IGMuTU9WRV9UWVBFX1BBU1MsIHJld2luZEluZm86IHJld2luZEluZm99O1xyXG4gICAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgICBsZXQgbmV3V2hvc2V0dXJuID0gaXNEb3VibGVQYXNzKG5ld01vdmVzKSA/IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUiA6IGMuV0hPU0VfVFVSTl9HVUFSRFM7IC8vIElmIGJvdGggcGxheWVycyBwYXNzIHRoZW4gZW5kIHRoZSBnYW1lXHJcbiAgICAgIHJlY2FsbFRpbGVzKCk7IC8vIEluIGNhc2UgdGhleSBwdXQgc29tZSB0aWxlcyBvbiB0aGUgYm9hcmQgYmVmb3JlIGNsaWNraW5nIFBhc3NcclxuICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcImVwdFwiLCAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsXHJcbiAgICAgICAgICBzcXVhcmVBcnJheTogc25hcHNob3Quc3F1YXJlQXJyYXksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICAgIHB0aWxlczogc25hcHNob3QucHRpbGVzLCAvLyBwcmlzb25lcnMgcmFjayBkaWQgbm90IGNoYW5nZVxyXG4gICAgICAgICAgdGlsZXM6IHRpbGVzLCAvLyB0aWxlIHBvb2wgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuLCAvLyBtYXkgaGF2ZSBlbmRlZCB0aGUgZ2FtZVxyXG4gICAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgICAgbW92ZXM6IG5ld01vdmVzLCAvLyBhIG1vdmUgd2FzIG1hZGVcclxuICAgICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXMgLy8gbm8gcmVzY3VlcyBvbiBhIHBhc3NcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBndWFyZHNQYXNzID0gKCkgPT4ge1xyXG4gICAgICBsZXQgcmV3aW5kSW5mbyA9IGdldFJld2luZEluZm8oKTtcclxuICAgICAgbGV0IG5ld01vdmUgPSB7Ynk6IGMuUEFSVFlfVFlQRV9HVUFSRFMsIHR5cGU6IGMuTU9WRV9UWVBFX1BBU1MsIHJld2luZEluZm86IHJld2luZEluZm99O1xyXG4gICAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgICBsZXQgbmV3V2hvc2V0dXJuID0gaXNEb3VibGVQYXNzKG5ld01vdmVzKSA/IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUiA6IGMuV0hPU0VfVFVSTl9QUklTT05FUlM7IC8vIElmIGJvdGggcGxheWVycyBwYXNzIHRoZW4gZW5kIHRoZSBnYW1lXHJcbiAgICAgIHJlY2FsbFRpbGVzKCk7IC8vIEluIGNhc2UgdGhleSBwdXQgc29tZSB0aWxlcyBvbiB0aGUgYm9hcmQgYmVmb3JlIGNsaWNraW5nIFBhc3NcclxuICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcImVndFwiLCAvLyBlbmQgZ3VhcmRzIHR1cm5cclxuICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsXHJcbiAgICAgICAgICBzcXVhcmVBcnJheTogc25hcHNob3Quc3F1YXJlQXJyYXksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICAgIGd0aWxlczogc25hcHNob3QuZ3RpbGVzLCAvLyBndWFyZHMgcmFjayBkaWQgbm90IGNoYW5nZVxyXG4gICAgICAgICAgdGlsZXM6IHRpbGVzLCAvLyB0aWxlIHBvb2wgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuLCAvLyBtYXkgaGF2ZSBlbmRlZCB0aGUgZ2FtZVxyXG4gICAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgICAgbW92ZXM6IG5ld01vdmVzIC8vIGEgbW92ZSB3YXMgbWFkZVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIGlzRG91YmxlUGFzcyhtb3ZlbGlzdCkge1xyXG4gICAgICAgIGxldCBsYXN0ID0gbW92ZWxpc3QubGVuZ3RoIC0gMTtcclxuICAgICAgICBsZXQgc2Vjb25kbGFzdCA9IGxhc3QgLSAxO1xyXG4gICAgICAgIHJldHVybiBzZWNvbmRsYXN0ID4gLTEgJiZcclxuICAgICAgICAgIG1vdmVsaXN0W3NlY29uZGxhc3RdLnR5cGUgPT09IGMuTU9WRV9UWVBFX1BBU1MgJiZcclxuICAgICAgICAgIG1vdmVsaXN0W2xhc3RdLnR5cGUgPT09IGMuTU9WRV9UWVBFX1BBU1M7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdEdhbWVEYXRhID0gKCkgPT4ge1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsXHJcbiAgICAgICAgICB3aG9zZXR1cm46IHdob3NldHVybiwgLy8gZm9yIGxvYmJ5IHRvIHBpY2sgdXAgdGhpcyBtZXNzYWdlXHJcbiAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgICBmdW5jOiBcInJlcXVlc3RnYW1lZGF0YVwiIC8vIHJlcXVlc3QgZ2FtZSBkYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmIChwYXJ0aWNpcGFudCAhPT0gd2hvc2V0dXJuKSB7cmV0dXJuO31cclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTID8gZW5kUHJpc29uZXJzVHVybigpIDogZW5kR3VhcmRzVHVybigpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgcmVjYWxsVGlsZXMoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGxldHRlcnRlc3QgPSAvXltBLVphLXpcXD9dJC87IC8vIHNpbmdsZSBsZXR0ZXIgb3IgcXVlc3Rpb24gbWFyayBrZXkgcHJlc3NlZFxyXG4gICAgICBpZiAoZXZlbnQua2V5Lm1hdGNoKGxldHRlcnRlc3QpKSB7XHJcbiAgICAgICAgbGV0IGxldHRlciA9IGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIGxldCByYWNrID0gd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTID8gcHRpbGVzIDogZ3RpbGVzO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3Rpb24gPSByYWNrLmluZGV4T2YobGV0dGVyKTtcclxuICAgICAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMSkge1xyXG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gcmFjay5pbmRleE9mKFwiP1wiKTsgLy8gVXNlIHRoZSBibGFuayBpZiB0aGV5IGhhdmUgb25lXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuZXdTZWxlY3Rpb24gPiAtMSkgeyAvLyBQcmVzc2VkIGxldHRlciBpcyBvbiB0aGUgcmFja1xyXG4gICAgICAgICAgbGV0IHJvdyA9IHJjZFswXTtcclxuICAgICAgICAgIGxldCBjb2wgPSByY2RbMV07XHJcbiAgICAgICAgICBsZXQgZGlyID0gcmNkWzJdO1xyXG4gICAgICAgICAgaWYgKHJvdyA+LTEgJiYgY29sID4gLTEgJiYgZGlyICE9PSBjLkRJUl9OT05FKSB7IC8vIHJvdywgY29sLCBkaXIgYXJlIHNldCB0byBhY2NlcHQga2V5c3Ryb2tlXHJcbiAgICAgICAgICAgIC8vIE5lZWQgdG8gZmlndXJlIG91dCBuZXh0IHNxYXVyZSB0byBhdXRvLXBsYWNlIGEgdGlsZVxyXG4gICAgICAgICAgICBsZXQgbmV3UmNkID0gcmNkO1xyXG4gICAgICAgICAgICBpZiAoZGlyID09PSBjLkRJUl9SSUdIVCkgeyAvLyBwbGF5aW5nIHJpZ2h0d2FyZHNcclxuICAgICAgICAgICAgICBsZXQgbmV3YyA9IC0xO1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIHRlbXBjb2wgPSBjb2wgKyAxOyB0ZW1wY29sIDwgZWRnZSArIDEgJiYgbmV3YyA9PT0gLTE7IHRlbXBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZUFycmF5W3Jvd11bdGVtcGNvbF0udXNlZGJ5ID09PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgICAgICAgICBuZXdjID0gdGVtcGNvbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKG5ld2MgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSY2QgPSBbLTEsLTEsYy5ESVJfTk9ORV07XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1JjZCA9IFtyb3csIG5ld2MsIGMuRElSX1JJR0hUXTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyb3csY29sLG5ld1NlbGVjdGlvbixuZXdSY2QpO1xyXG4gICAgICAgICAgICAgIHNldFNlbGVjdGlvbigtMSk7IC8vIHdoZW4gdGhleSBhcmUgdHlwaW5nIHRoZXkgYXJlIG5vdCBzZWxlY3RpbmcgcmFjayB0aWxlcyBieSBjbGlja2luZyB0aGVtIG9uIHRoZSByYWNrXHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkaXIgPT09IGMuRElSX0RPV04pIHsgLy8gcGxheWluZyBkb3dud2FyZHNcclxuICAgICAgICAgICAgICBsZXQgbmV3ciA9IC0xO1xyXG4gICAgICAgICAgICAgIGxldCBudW1yb3dzID0gKHJhY2tzaXplKjIpKzE7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgdGVtcHJvdyA9IHJvdyArIDE7IHRlbXByb3cgPCBudW1yb3dzICYmIG5ld3IgPT09IC0xOyB0ZW1wcm93KyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzcXVhcmVBcnJheVt0ZW1wcm93XVtjb2xdLnVzZWRieSA9PT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgICAgICAgbmV3ciA9IHRlbXByb3c7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChuZXdyID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgbmV3UmNkID0gWy0xLC0xLGMuRElSX05PTkVdO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSY2QgPSBbbmV3ciwgY29sLCBjLkRJUl9ET1dOXTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyb3csY29sLG5ld1NlbGVjdGlvbixuZXdSY2QpO1xyXG4gICAgICAgICAgICAgIHNldFNlbGVjdGlvbigtMSk7IC8vIHdoZW4gdGhleSBhcmUgdHlwaW5nIHRoZXkgYXJlIG5vdCBzZWxlY3RpbmcgcmFjayB0aWxlcyBieSBjbGlja2luZyB0aGVtIG9uIHRoZSByYWNrXHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkJhY2tzcGFjZVwiICYmIGN1cnJlbnRjb29yZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vIFNhbWUgYXMgY2xpY2tpbmcgb24gYSBwbGF5ZWQtdGhpcy1tb3ZlIHRpbGUgaW4gdGVybXMgb2YgcmV0dXJuaW5nIHRoZSB0aWxlIHRvIHRoZSByYWNrXHJcbiAgICAgICAgLy8gSG93ZXZlciB3ZSBhbHNvIHdhbnQgdG8gc2V0IHVwIHJjZCBzbyB0aGV5IGNhbiBwcmVzcyB0aGUga2V5IHRoZXkgbWVhbnQgYW5kIGNvbnRpbnVlXHJcbiAgICAgICAgbGV0IGNvb3JkID0gY3VycmVudGNvb3Jkc1tjdXJyZW50Y29vcmRzLmxlbmd0aCAtIDFdOyAvLyB0aWxlIHRvIHJldHVybiB0byByYWNrXHJcbiAgICAgICAgbGV0IHJvdyA9IHBhcnNlSW50KGNvb3JkLnNwbGl0KFwiLVwiKVswXSk7XHJcbiAgICAgICAgbGV0IGNvbCA9IHBhcnNlSW50KGNvb3JkLnNwbGl0KFwiLVwiKVsxXSk7XHJcbiAgICAgICAgbGV0IG5ld0N1cnJlbnRjb29yZHMgPSBbLi4uY3VycmVudGNvb3Jkc107XHJcbiAgICAgICAgbGV0IG5ld1B0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgICAgICBsZXQgbmV3U3F1YXJlQXJyYXkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNxdWFyZUFycmF5KSk7IC8vIERlZXAgY29weVxyXG4gICAgICAgIGxldCBuZXdTcXVhcmVBcnJheVJvdyA9IG5ld1NxdWFyZUFycmF5W3Jvd107XHJcbiAgICAgICAgbGV0IG5ld1NxdWFyZUFycmF5Q2VsbCA9IG5ld1NxdWFyZUFycmF5Um93W2NvbF07XHJcbiAgICAgICAgbGV0IG5ld1JjZCA9IFstMSwtMSxjLkRJUl9OT05FXTtcclxuICAgICAgICBsZXQgbmV3U2VsZWN0aW9uID0gc2VsZWN0aW9uO1xyXG4gICAgICAgIG5ld0N1cnJlbnRjb29yZHMuc3BsaWNlKGN1cnJlbnRjb29yZHMubGVuZ3RoLTEsMSk7XHJcbiAgICAgICAgbGV0IHJldHVybmVkVGlsZSA9IHNxdWFyZUFycmF5W3Jvd11bY29sXS5sZXR0ZXI7XHJcbiAgICAgICAgaWYgKHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX1BSSVNPTkVSUykge1xyXG4gICAgICAgICAgbmV3UHRpbGVzLnB1c2gocmV0dXJuZWRUaWxlKTtcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1B0aWxlcy5sZW5ndGgtMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmV3R3RpbGVzLnB1c2gocmV0dXJuZWRUaWxlKTtcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld0d0aWxlcy5sZW5ndGgtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlDZWxsLnVzZWRieSA9IGMuVVNFRF9CWV9OT05FO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Q2VsbC5sZXR0ZXIgPSBjLkxFVFRFUl9OT05FO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Um93W2NvbF0gPSBuZXdTcXVhcmVBcnJheUNlbGw7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlbcm93XSA9IFsuLi5uZXdTcXVhcmVBcnJheVJvd107XHJcbiAgICAgICAgbGV0IGRpciA9IHJjZFsyXTtcclxuICAgICAgICBpZiAoZGlyICE9PSBjLkRJUl9OT05FKSB7XHJcbiAgICAgICAgICAvLyBkaXJlY3Rpb24gd2FzIHNldCBzbyBrZWVwIGl0XHJcbiAgICAgICAgICBuZXdSY2QgPSBbcm93LGNvbCxkaXJdO1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IC0xOyAvLyBpZiB0aGV5IGJhY2tzcGFjZSBhbGwgdGhlIGxldHRlcnMgb2ZmIGxlYXZlIHJhY2sgdGlsZSB1bnNlbGVjdGVkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEN1cnJlbnRjb29yZHMobmV3Q3VycmVudGNvb3Jkcyk7XHJcbiAgICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgICAgc2V0U3F1YXJlQXJyYXkobmV3U3F1YXJlQXJyYXkpO1xyXG4gICAgICAgIHNldFJjZChuZXdSY2QpO1xyXG4gICAgICAgIHNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaXNvbmJyZWFrXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWNvbnRhaW5lciB3My10ZWFsIHRvcEJhckhlaWdodFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LW1pZGRsZVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXlIZWFkaW5nRm9udFwiPlByaXNvbiBCcmVhazwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS10b3BsZWZ0IHczLWJsYWNrIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIEdhbWUgaWQ6IHtnYW1laWR9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1ib3R0b21sZWZ0IHczLW9yYW5nZSB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICBQcmlzb25lcnM6IHtwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IG5pY2tuYW1lIDogb3BwbmFtZX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LXRvcHJpZ2h0IHczLWJsYWNrIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiLi4vLi4vXCJ9PlxyXG4gICAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT48L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWJvdHRvbXJpZ2h0IHczLW9yYW5nZSB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICBHdWFyZHM6IHtwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IG9wcG5hbWUgOiBuaWNrbmFtZX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwYlRpbGVBbmRNb3Zlc091dGVyXCI+XHJcbiAgICAgICAgICAgICAgPFNob3dVbnNlZW5UaWxlcyB0aWxlcz17dGlsZXN9IG90aGVydGlsZXM9e3BhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gZ3RpbGVzIDogcHRpbGVzfS8+XHJcbiAgICAgICAgICAgICAgPFNob3dNb3ZlcyBtb3Zlcz17bW92ZXN9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGJQbGF5ZXJPdXRlclNlY3Rpb25cIj5cclxuICAgICAgICAgICAge3BhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID9cclxuICAgICAgICAgICAgICA8UGxheWVyU2VjdGlvblxyXG4gICAgICAgICAgICAgICAgcmFja3RpbGVzPXtwdGlsZXN9XHJcbiAgICAgICAgICAgICAgICB3aG9zZXR1cm49e3dob3NldHVybn1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KHRpKSA9PiBoYW5kbGVSYWNrVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tGaW5pc2hUdXJuPXsoKSA9PiBlbmRQcmlzb25lcnNUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrVGlsZVJlY2FsbD17KCkgPT4gcmVjYWxsVGlsZXMoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tUaWxlRXhjaGFuZ2U9eygpID0+IHN3YXBQcmlzb25lcnNUaWxlcygpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1Bhc3NQbGF5PXsoKSA9PiBwcmlzb25lclBhc3MoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tVbmRvTGFzdFBsYXk9eygpID0+IHBlcmZvcm1SZXdpbmQoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tBbGxvd1VuZG89eygpID0+IGFsbG93VW5kb0xhc3RUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudD17cGFydGljaXBhbnR9XHJcbiAgICAgICAgICAgICAgICBtb3Zlcz17bW92ZXN9XHJcbiAgICAgICAgICAgICAgICBhbGxvd1Jld2luZD17YWxsb3dSZXdpbmR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIDxQbGF5ZXJTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICByYWNrdGlsZXM9e2d0aWxlc31cclxuICAgICAgICAgICAgICAgIHdob3NldHVybj17d2hvc2V0dXJufVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IGhhbmRsZVJhY2tUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja0ZpbmlzaFR1cm49eygpID0+IGVuZEd1YXJkc1R1cm4oKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tUaWxlUmVjYWxsPXsoKSA9PiByZWNhbGxUaWxlcygpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1RpbGVFeGNoYW5nZT17KCkgPT4gc3dhcEd1YXJkc1RpbGVzKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrUGFzc1BsYXk9eygpID0+IGd1YXJkc1Bhc3MoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tVbmRvTGFzdFBsYXk9eygpID0+IHBlcmZvcm1SZXdpbmQoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tBbGxvd1VuZG89eygpID0+IGFsbG93VW5kb0xhc3RUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudD17cGFydGljaXBhbnR9XHJcbiAgICAgICAgICAgICAgICBtb3Zlcz17bW92ZXN9XHJcbiAgICAgICAgICAgICAgICBhbGxvd1Jld2luZD17YWxsb3dSZXdpbmR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICB7cGFydGljaXBhbnQgPT09IHdob3NldHVybiA/XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBvbktleURvd25DYXB0dXJlPXtoYW5kbGVLZXlEb3dufT5cclxuICAgICAgICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICAgICAgICBzcXVhcmVBcnJheT17c3F1YXJlQXJyYXl9XHJcbiAgICAgICAgICAgICAgICAgIHJjZD17cmNkfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsocmksIGNpKSA9PiBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJpLCBjaSwgLTEsbnVsbCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICAgICAgICBzcXVhcmVBcnJheT17c3F1YXJlQXJyYXl9XHJcbiAgICAgICAgICAgICAgICAgIHJjZD17cmNkfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7fX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgPFNob3dSZXNjdWVzIHJlc2N1ZXM9e3Jlc2N1ZXN9IC8+XHJcbiAgICAgICAgICAgIDxDaGF0IGdhbWVpZD17Z2FtZWlkfSBjbGllbnQ9e2NsaWVudH0gbmlja25hbWU9e25pY2tuYW1lfSBtc2dzPXtjaGF0bXNnc30gc2V0TXNncz17c2V0Q2hhdG1zZ3N9IHBhcnRpY2lwYW50PXtwYXJ0aWNpcGFudH0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWNvbnRhaW5lciB3My10ZWFsIHRvcEJhckhlaWdodFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LW1pZGRsZSBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIHt3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUiA/XHJcbiAgICAgICAgICAgICAgPGgxPkdhbWUgT3ZlciE8L2gxPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgPHA+e2MuSk9LRV9BUlJBWVtqb2tlaW5kZXhdfTwvcD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IHNjcm9sbFRvQm90dG9tID0gKGVsZW1lbnRpZCkgPT4ge1xyXG4gICAgY29uc3QgdGhlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRpZCk7XHJcbiAgICB0aGVFbGVtZW50LnNjcm9sbFRvcCA9IHRoZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgR2FtZTsiXSwic291cmNlUm9vdCI6IiJ9