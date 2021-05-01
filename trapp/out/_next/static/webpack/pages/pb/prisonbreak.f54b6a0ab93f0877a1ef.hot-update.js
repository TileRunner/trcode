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
/* harmony import */ var _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/pbconstants */ "./lib/pbconstants.js");


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\pb\\game.js",
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();









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

  const initialtiles = racksize === 6 ? _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["TILEBAG6"] : racksize === 7 ? _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["TILEBAG7"] : racksize === 5 ? _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["TILEBAG5"] : _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["TILEBAG4"];
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"]); // game starts with prisoners play

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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([-1, -1, _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_NONE"]]);
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
      myaudio.src = participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_GUARDS"] ? "https://tilerunner.github.io/OneGotAway.m4a" : "https://tilerunner.github.io/yippee.m4a";
      myaudio.play(); // rescueSound.play()
    }
  }, [rescues]); // Play a sound when a rescue is made

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let newji = jokeindex + 1;

    if (newji >= _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["JOKE_ARRAY"].length) {
      newji = 0;
    }

    setJokeindex(newji);
    const interval = setInterval(() => {
      // If it is not my turn && the game has not ended
      if (participant !== whoseturn && whoseturn !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GAMEOVER"]) {
        // I am waiting for opponent move to come through but sometimes it gets missed (no idea why)
        requestGameData(); // Send a request for game data in case opponent moved and we missed the update
      }
    }, _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PING_INTERVAL"]); // this many milliseconds between above code block executions

    return () => clearInterval(interval);
  }, [whoseturn]); // want up to date value of whoseturn to decide whether to ask for an update

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // This code executes first time Game is used only
    let firstSquareArray = _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["InitialSquareArray"](racksize);
    setSquareArray([...firstSquareArray]);

    if (!isrejoin && participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"]) {
      // Prisoner is starting the game so pick racks
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
        squareArray: [...firstSquareArray],
        ptiles: [...tempPTiles],
        gtiles: [...tempGTiles]
      });
      client.send(JSON.stringify({
        type: "pb",
        func: "hello",
        sender: participant,
        gameid: gameid,
        nickname: nickname,
        // player nickname
        whoseturn: whoseturn,
        racksize: racksize // rack size option (lobby needs to know for when guards join game and they call Game)

      }));
    } else {
      // Prisoner rejoin or guard join or guard rejoin
      client.send(JSON.stringify({
        gameid: gameid,
        // the id for the game
        nickname: nickname,
        // player nickname
        type: "pb",
        // prisonbreak
        func: "requestgamedata",
        // request game data
        sender: participant
      }));
    }
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
    setRcd(-1, -1, _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_NONE"]);
    setCurrentcoords([]);
  }

  function processGameMessage(message) {
    let messageData = JSON.parse(message);

    if (messageData.type === "announce") {
      client.send(JSON.stringify({
        type: "pb",
        func: "hello",
        sender: participant,
        gameid: gameid,
        nickname: nickname,
        // player nickname
        whoseturn: whoseturn,
        racksize: racksize // rack size option (lobby needs to know for when guards join game and they call Game)

      }));
    } else if (messageData.gameid === gameid && messageData.type === "pb") {
      // This instance of a prison break game
      if (messageData.sender != participant && oppname === "" && messageData.nickname && messageData.nickname.length > 0) {
        // Opponent sent a message including their nickname and I don't have their nickname yet
        setOppname(messageData.nickname);
      }

      if (messageData.func === "requestgamedata" && messageData.sender !== participant) {
        // Opponent requested game info
        client.send(JSON.stringify({
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
        }));
      }

      if (messageData.func === "providegamedata" && messageData.sender !== participant) {
        // Opponent provided game data but do we need it?
        // If they have a different move count then we need it (they may have undone a move)
        // If they have same move count but a different tile bag count then we need it (no moves made but tiles are picked)
        // If guards join after prisoners made a move then guards have no tiles ("ept" got processed which leaves gtiles alone)
        if (messageData.moves.length !== moves.length || messageData.tiles.length !== tiles.length || participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_GUARDS"] && gtiles.length === 0 && currentcoords.length === 0 || participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"] && ptiles.length === 0 && currentcoords.length === 0 // Not sure I need it but...
        ) {
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

      if (messageData.func === "ept" && participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_GUARDS"]) {
        // Prisoners sent end prisoners turn, Guards pick it up
        putAtMoveStart();
        setWhoseturn(messageData.whoseturn);
        setSquareArray(messageData.squareArray);
        setPtiles(messageData.ptiles);
        setTiles(messageData.tiles);
        setMoves(messageData.moves);
        setRescues(messageData.rescues);
        setSnapshot({
          squareArray: JSON.parse(JSON.stringify(messageData.squareArray)),
          ptiles: [...messageData.ptiles],
          gtiles: [...gtiles]
        });
      }

      if (messageData.func === "egt" && participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"]) {
        // Guards sent end guards turn, Prisoners pick it up
        putAtMoveStart();
        setWhoseturn(messageData.whoseturn);
        setSquareArray(messageData.squareArray);
        setGtiles(messageData.gtiles);
        setTiles(messageData.tiles);
        setMoves(messageData.moves);
        setSnapshot({
          squareArray: JSON.parse(JSON.stringify(messageData.squareArray)),
          ptiles: [...ptiles],
          gtiles: [...messageData.gtiles]
        });
      }

      if (messageData.func === "undoturn" && messageData.sender !== participant) {
        // opponent undid their last turn
        putAtMoveStart();
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
  } // Calling setSelection (from handleKeyDown) then handleBoardSquareClick does not let it recognize selection with the new value
  // So I pass newSelection when I want to also set it, otherwise I pass -1 to instruct it to use current value of selection
  // Also passing newRcd


  const handleBoardSquareClick = (ri, ci, newSelection, newRcd) => {
    let newSquareArray = JSON.parse(JSON.stringify(squareArray));
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

    if (newSelection > -1 && newSquareArrayCell.usedby === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
      // tile is selected from rack and clicked square is not used yet
      let selectedTile = whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"] ? newPtiles[newSelection] : newGtiles[newSelection];
      newSquareArrayCell.letter = selectedTile;
      newSquareArrayCell.usedby = whoseturn;
      newSquareArrayRow[ci] = newSquareArrayCell;
      newSquareArray[ri] = [...newSquareArrayRow];
      whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"] ? newPtiles.splice(newSelection, 1) : newGtiles.splice(newSelection, 1);

      if (whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"] && newSelection === newPtiles.length) {
        newSelection = newSelection - 1;
      }

      if (whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GUARDS"] && newSelection === newGtiles.length) {
        newSelection = newSelection - 1;
      }

      setSelection(newSelection);
      setSquareArray([...newSquareArray]);
      setPtiles(newPtiles);
      setGtiles(newGtiles);
      setCurrentcoords([...currentcoords, coord]);
      setRcd(newRcd); // key down handler figured it out

      return;
    }

    if (cci > -1) {
      // clicked square has a tile on it from the current move in progress, so put it back on the player rack
      whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"] ? newPtiles.push(newSquareArrayCell.letter) : newGtiles.push(newSquareArrayCell.letter);
      newSquareArrayCell.usedby = _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"];
      newSquareArrayCell.letter = _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["LETTER_NONE"];
      newSquareArrayRow[ci] = newSquareArrayCell;
      newSquareArray[ri] = [...newSquareArrayRow];
      setSelection(whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"] ? newPtiles.length - 1 : newGtiles.length - 1);
      newCurrentcoords.splice(cci, 1);
      setSquareArray([...newSquareArray]);
      setPtiles(newPtiles);
      setGtiles(newGtiles);
      setCurrentcoords(newCurrentcoords);
      setRcd(-1, -1, _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_NONE"]); // make player click again to set direction

      return;
    } // They didn't click a square to place a selected tile there
    // They didn't click a square to remove an existing tile


    if (newSquareArrayCell.usedby === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
      // There is nothing on the square so they are picking where to place the next tile via keyboard
      let newDirection = rcd[0] !== ri || rcd[1] !== ci ? _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_RIGHT"] : //click new square, start with right
      rcd[2] === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_RIGHT"] ? _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_DOWN"] : //click same square that was right, change to down
      rcd[2] === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_DOWN"] ? _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_NONE"] : //click same square that was down, change to no direction
      _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_RIGHT"]; // click same square that was no direction, change to right

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


    let newrack = participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"] ? [...ptiles] : [...gtiles];
    let movefrom = selection;
    let movetile = newrack[movefrom];
    let moveto = tileindex;
    newrack.splice(movefrom, 1); // remove tile from original selected position

    newrack.splice(moveto, 0, movetile); // insert moved tile at the newly selected position

    participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"] ? setPtiles(newrack) : setGtiles(newrack);
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
    let newWhoseturn = newPtiles.length > 0 ? _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GUARDS"] : _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GAMEOVER"];

    if (squareArray[0][0].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && squareArray[0][middle].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && squareArray[0][edge].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && squareArray[middle][0].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && squareArray[middle][edge].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && squareArray[edge][0].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && squareArray[edge][middle].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && squareArray[edge][edge].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
      newWhoseturn = _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GAMEOVER"]; // No escape hatches left
    }

    let playinfo = getPlayInfo();
    let newMove = {
      by: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"],
      type: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["MOVE_TYPE_PLAY"],
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
      ptiles: [...newPtiles],
      gtiles: [...gtiles]
    });
    client.send(JSON.stringify({
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

    }));
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
    let snapsquarearray = JSON.parse(JSON.stringify(squareArray));
    let snapptiles = [...ptiles];
    let snapgtiles = [...gtiles];
    let newWhoseturn = newGtiles.length > 0 ? _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"] : _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GAMEOVER"];

    if (squareArray[0][0].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && squareArray[0][middle].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && squareArray[0][edge].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && squareArray[middle][0].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && squareArray[middle][edge].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && squareArray[edge][0].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && squareArray[edge][middle].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"] && squareArray[edge][edge].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
      newWhoseturn = _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GAMEOVER"]; // No escape hatches left
    }

    let playinfo = getPlayInfo();
    let newMove = {
      by: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_GUARDS"],
      type: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["MOVE_TYPE_PLAY"],
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
    client.send(JSON.stringify({
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

    }));
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
      by: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"],
      type: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["MOVE_TYPE_SWAP"],
      rewindInfo: rewindInfo
    };
    let newMoves = [...moves, newMove];
    putAtMoveStart();
    setSquareArray([...snapshot.squareArray]);
    setWhoseturn(_lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GUARDS"]);
    setPtiles(newPtiles);
    setTiles(newTiles);
    setMoves(newMoves);
    setSnapshot({
      squareArray: [...snapshot.squareArray],
      ptiles: [...newPtiles],
      gtiles: [...gtiles]
    });
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      func: "ept",
      // end prisoners turn
      sender: participant,
      whoseturn: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GUARDS"],
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

    }));
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
      by: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_GUARDS"],
      type: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["MOVE_TYPE_SWAP"],
      rewindInfo: rewindInfo
    };
    let newMoves = [...moves, newMove];
    putAtMoveStart();
    setSquareArray([...snapshot.squareArray]);
    setWhoseturn(_lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"]);
    setGtiles(newGtiles);
    setTiles(newTiles);
    setMoves(newMoves);
    setSnapshot({
      squareArray: [...snapshot.squareArray],
      ptiles: [...ptiles],
      gtiles: [...newGtiles]
    });
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      nickname: nickname,
      // player nickname
      type: "pb",
      // prisonbreak
      func: "egt",
      // end guards turn
      sender: participant,
      whoseturn: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"],
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

    }));
  };

  function isPlayValid() {
    if (squareArray[middle][middle].usedby === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
      window.alert("First play must hit center square");
      return false;
    }

    let numrows = edge + 1;
    let numcols = edge + 1;
    let lowrow = numrows;
    let highrow = -1;
    let lowcol = numcols;
    let highcol = -1;

    for (var temprow = 0; temprow < numrows; ++temprow) {
      for (var tempcol = 0; tempcol < numcols; ++tempcol) {
        if (squareArray[temprow][tempcol].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
          if (!(temprow > 0 && squareArray[temprow - 1][tempcol].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) && !(tempcol > 0 && squareArray[temprow][tempcol - 1].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) && !(temprow < edge && squareArray[temprow + 1][tempcol].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) && !(tempcol < edge && squareArray[temprow][tempcol + 1].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"])) {
            window.alert("Each played tile must be part of a word");
            return false;
          }

          if (snapshot.squareArray[temprow][tempcol].usedby === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
            // This square was played on this turn
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
            }
          }
        }
      }
    }

    if (lowrow === numrows) {
      window.alert("You didn't play any tiles");
      return false;
    }

    if (lowrow !== highrow && lowcol !== highcol) {
      window.alert("Tiles played must be in a straight line");
      return false;
    }

    let playthru = false;
    let hookmade = false;

    for (var temprow = lowrow; temprow <= highrow; ++temprow) {
      for (var tempcol = lowcol; tempcol <= highcol; ++tempcol) {
        if (squareArray[temprow][tempcol].usedby === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
          window.alert("There is a gap in your word");
          return false;
        }

        if (snapshot.squareArray[temprow][tempcol].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
          playthru = true;
        }

        if (lowrow === highrow && temprow > 0 && squareArray[temprow - 1][tempcol].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
          hookmade = true;
        }

        if (lowrow === highrow && temprow < edge && squareArray[temprow + 1][tempcol].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
          hookmade = true;
        }

        if (lowcol === highcol && tempcol > 0 && squareArray[temprow][tempcol - 1].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
          hookmade = true;
        }

        if (lowcol === highcol && tempcol < edge && squareArray[temprow][tempcol + 1].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
          hookmade = true;
        }
      }
    } // Check play to or from a tile (play through but not either side)


    if (lowrow === highrow && lowcol > 0 && snapshot.squareArray[lowrow][lowcol - 1].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
      playthru = true;
    }

    if (lowrow === highrow && highcol < edge && snapshot.squareArray[lowrow][highcol + 1].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
      playthru = true;
    }

    if (lowcol === highcol && lowrow > 0 && snapshot.squareArray[lowrow - 1][lowcol] !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
      playthru = true;
    }

    if (lowcol === highcol && highrow < edge && snapshot.squareArray[highrow + 1][lowcol].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
      playthru = true;
    }

    if (!playthru && !hookmade && snapshot.squareArray[middle][middle].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
      window.alert("Words must be connected");
      return false;
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

      while (lowestrow > 0 && squareArray[lowestrow - 1][col].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
        lowestrow = lowestrow - 1;
      } // find the highest row number of the main word, which may be higher than that of the last played tile


      let highestrow = highrow;

      while (highestrow < edge && squareArray[highestrow + 1][col].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
        highestrow = highestrow + 1;
      }

      wordstartcoord = _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["BOARD_COL_HEADERS"][col] + _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["BOARD_ROW_HEADERS"][lowestrow]; // vertical play coords start with col header

      for (var row = lowestrow; row <= highestrow; ++row) {
        mainword = mainword + squareArray[row][col].letter;
        let coord = row + "-" + col;

        if (currentcoords.indexOf(coord) > -1) {
          // This tile was played, check for hooks
          let lowestcol = col;

          while (lowestcol > 0 && squareArray[row][lowestcol - 1].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
            lowestcol = lowestcol - 1;
          }

          let highestcol = col;

          while (highestcol < edge && squareArray[row][highestcol + 1].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
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

      while (lowestcol > 0 && squareArray[row][lowestcol - 1].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
        lowestcol = lowestcol - 1;
      } // find the highest col number of the main word, which may be higher than that of the last played tile


      let highestcol = highcol;

      while (highestcol < edge && squareArray[row][highestcol + 1].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
        highestcol = highestcol + 1;
      }

      wordstartcoord = _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["BOARD_ROW_HEADERS"][row] + _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["BOARD_COL_HEADERS"][lowestcol]; // horizontal play coords start with row header

      mainword = ""; // In case we got a 1 letter mainword in the previous block

      extrawords = []; // Ditto

      for (var col = lowestcol; col <= highestcol; ++col) {
        mainword = mainword + squareArray[row][col].letter;
        let coord = row + "-" + col;

        if (currentcoords.indexOf(coord) > -1) {
          // This tile was played, check for hooks
          let lowestrow = row;

          while (lowestrow > 0 && squareArray[lowestrow - 1][col].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
            lowestrow = lowestrow - 1;
          }

          let highestrow = row;

          while (highestrow < edge && squareArray[highestrow + 1][col].usedby !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
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
      squareArray: [...snapshot.squareArray],
      rack: whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GUARDS"] ? [...snapshot.gtiles] : [...snapshot.ptiles],
      tiles: [...tiles],
      rescues: rescues
    };
    return rewindInfo;
  }

  function allowUndoLastTurn() {
    if (!allowRewind) {
      setAllowRewind(true);
      client.send(JSON.stringify({
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

      }));
    }
  }

  function performRewind() {
    /* Rewind the last move and take it off the end of the move list */
    let numMoves = moves.length;
    let lastMove = moves[moves.length - 1];
    let newSquareArray = [...lastMove.rewindInfo.squareArray];
    let newTiles = [...lastMove.rewindInfo.tiles];
    let newPtiles = lastMove.by === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"] ? [...lastMove.rewindInfo.rack] : [...ptiles];
    let newGtiles = lastMove.by === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_GUARDS"] ? [...lastMove.rewindInfo.rack] : [...gtiles];
    let newRescues = lastMove.rewindInfo.rescues;
    let newWhoseturn = lastMove.by; // Back to their turn

    let newMoves = [...moves];
    newMoves.splice(numMoves - 1, 1);
    let newSnapshot = {
      squareArray: [...newSquareArray],
      gtiles: [...newGtiles],
      ptiles: [...newPtiles]
    };
    putAtMoveStart();
    setTiles(newTiles);
    setPtiles(newPtiles);
    setGtiles(newGtiles);
    setSquareArray([...newSquareArray]);
    setWhoseturn(newWhoseturn);
    setRescues(newRescues);
    setMoves(newMoves);
    setSnapshot(newSnapshot); // Just send everything even though some could be hard coded in processMessage by opponent

    client.send(JSON.stringify({
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
    }));
  }

  const recallTiles = () => {
    setSquareArray([...snapshot.squareArray]);
    setPtiles([...snapshot.ptiles]);
    setGtiles([...snapshot.gtiles]);
    setSelection(-1);
    setCurrentcoords([]);
    setRcd([-1, -1, _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_NONE"]]);
  };

  const prisonerPass = () => {
    let rewindInfo = getRewindInfo();
    let newMove = {
      by: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"],
      type: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["MOVE_TYPE_PASS"],
      rewindInfo: rewindInfo
    };
    let newMoves = [...moves, newMove];
    let newWhoseturn = isDoublePass(newMoves) ? _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GAMEOVER"] : _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GUARDS"]; // If both players pass then end the game

    recallTiles(); // In case they put some tiles on the board before clicking Pass

    putAtMoveStart();
    setWhoseturn(newWhoseturn);
    setMoves(newMoves);
    client.send(JSON.stringify({
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

    }));
  };

  const guardsPass = () => {
    let rewindInfo = getRewindInfo();
    let newMove = {
      by: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_GUARDS"],
      type: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["MOVE_TYPE_PASS"],
      rewindInfo: rewindInfo
    };
    let newMoves = [...moves, newMove];
    let newWhoseturn = isDoublePass(newMoves) ? _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GAMEOVER"] : _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"]; // If both players pass then end the game

    recallTiles(); // In case they put some tiles on the board before clicking Pass

    putAtMoveStart();
    setWhoseturn(newWhoseturn);
    setMoves(newMoves);
    client.send(JSON.stringify({
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

    }));
  };

  function isDoublePass(movelist) {
    let last = movelist.length - 1;
    let secondlast = last - 1;
    return secondlast > -1 && movelist[secondlast].type === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["MOVE_TYPE_PASS"] && movelist[last].type === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["MOVE_TYPE_PASS"];
  }

  const requestGameData = () => {
    client.send(JSON.stringify({
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

    }));
  };

  const handleKeyDown = event => {
    event.preventDefault();

    if (participant !== whoseturn) {
      return;
    }

    if (event.key === "Enter") {
      whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"] ? endPrisonersTurn() : endGuardsTurn();
      return;
    }

    if (event.key === "Escape") {
      recallTiles();
      return;
    }

    let lettertest = /^[A-Za-z\?]$/; // single letter or question mark key pressed

    if (event.key.match(lettertest)) {
      let letter = event.key.toUpperCase();
      let rack = whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"] ? ptiles : gtiles;
      let newSelection = rack.indexOf(letter);

      if (newSelection === -1) {
        newSelection = rack.indexOf("?"); // Use the blank if they have one
      }

      if (newSelection > -1) {
        // Pressed letter is on the rack
        let row = rcd[0];
        let col = rcd[1];
        let dir = rcd[2];

        if (row > -1 && col > -1 && dir !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_NONE"]) {
          // row, col, dir are set to accept keystroke
          // Need to figure out next sqaure to auto-place a tile
          let newRcd = rcd;

          if (dir === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_RIGHT"]) {
            // playing rightwards
            let newc = -1;

            for (var tempcol = col + 1; tempcol < edge + 1 && newc === -1; tempcol++) {
              if (squareArray[row][tempcol].usedby === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
                newc = tempcol;
              }
            }

            if (newc === -1) {
              newRcd = [-1, -1, _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_NONE"]];
            } else {
              newRcd = [row, newc, _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_RIGHT"]];
            }

            handleBoardSquareClick(row, col, newSelection, newRcd);
            setSelection(-1); // when they are typing they are not selecting rack tiles by clicking them on the rack

            return;
          }

          if (dir === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_DOWN"]) {
            // playing downwards
            let newr = -1;
            let numrows = racksize * 2 + 1;

            for (var temprow = row + 1; temprow < numrows && newr === -1; temprow++) {
              if (squareArray[temprow][col].usedby === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"]) {
                newr = temprow;
              }
            }

            if (newr === -1) {
              newRcd = [-1, -1, _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_NONE"]];
            } else {
              newRcd = [newr, col, _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_DOWN"]];
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
      let newSquareArray = JSON.parse(JSON.stringify(squareArray));
      let newSquareArrayRow = newSquareArray[row];
      let newSquareArrayCell = newSquareArrayRow[col];
      let newRcd = [-1, -1, _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_NONE"]];
      let newSelection = selection;
      newCurrentcoords.splice(currentcoords.length - 1, 1);
      let returnedTile = squareArray[row][col].letter;

      if (whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_PRISONERS"]) {
        newPtiles.push(returnedTile);
        newSelection = newPtiles.length - 1;
      } else {
        newGtiles.push(returnedTile);
        newSelection = newGtiles.length - 1;
      }

      newSquareArrayCell.usedby = _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["USED_BY_NONE"];
      newSquareArrayCell.letter = _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["LETTER_NONE"];
      newSquareArrayRow[col] = newSquareArrayCell;
      newSquareArray[row] = [...newSquareArrayRow];
      let dir = rcd[2];

      if (dir !== _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["DIR_NONE"]) {
        // direction was set so keep it
        newRcd = [row, col, dir];

        if (currentcoords.length === 1) {
          newSelection = -1; // if they backspace all the letters off leave rack tile unselected
        }
      }

      setCurrentcoords(newCurrentcoords);
      setGtiles(newGtiles);
      setPtiles(newPtiles);
      setSquareArray([...newSquareArray]);
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
          lineNumber: 1017,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1016,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-topleft w3-black topBarCorner commonFontFamily",
        children: ["Game id: ", gameid]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1019,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-bottomleft w3-orange topBarCorner commonFontFamily",
        children: ["Prisoners: ", participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"] ? nickname : oppname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1022,
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
              lineNumber: 1027,
              columnNumber: 18
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1027,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1026,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1025,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-bottomright w3-orange topBarCorner commonFontFamily",
        children: ["Guards: ", participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"] ? oppname : nickname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1030,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1015,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col pbTileAndMovesOuter",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_unseenTilesSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
          tiles: tiles,
          othertiles: participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"] ? gtiles : ptiles
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1036,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_movesSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
          moves: moves
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1037,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1035,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col pbPlayerOuterSection",
        children: participant === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["PARTY_TYPE_PRISONERS"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_playerSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
          lineNumber: 1041,
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
          lineNumber: 1057,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1039,
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
            lineNumber: 1077,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1076,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_board__WEBPACK_IMPORTED_MODULE_4__["default"], {
            squareArray: squareArray,
            rcd: rcd,
            onClick: () => {}
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1085,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1084,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1074,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowRescues, {
          rescues: rescues
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1094,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Chat, {
          gameid: gameid,
          client: client,
          nickname: nickname,
          msgs: chatmsgs,
          setMsgs: setChatmsgs,
          participant: participant
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1095,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1093,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1034,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-display-container w3-teal topBarHeight",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-display-middle commonFontFamily",
        children: whoseturn === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["WHOSE_TURN_GAMEOVER"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Game Over!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1101,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: _lib_pbconstants__WEBPACK_IMPORTED_MODULE_7__["JOKE_ARRAY"][jokeindex]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1103,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1099,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1098,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1014,
    columnNumber: 7
  }, undefined);
};

_s2(Game, "b/NUyBdcAsgJ0rxpOXxsK7zj/V4=", true);

_c = Game;

const ShowRescues = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pbRescuesMade",
    children: ["Rescues made: ", props.rescues]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1113,
    columnNumber: 7
  }, undefined);
};

_c2 = ShowRescues;

const Chat = ({
  gameid,
  client,
  nickname,
  msgs,
  setMsgs,
  participant
}) => {
  _s3();

  const {
    0: nextmsg,
    1: setNextmsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const handleKeyDown = event => {
    if (event.key === "Enter" && nextmsg.length > 0) {
      event.preventDefault();
      let newMsgs = [...msgs, {
        from: nickname,
        msg: nextmsg
      }];
      let sendmsg = nextmsg;
      setMsgs(newMsgs);
      setNextmsg('');
      client.send(JSON.stringify({
        gameid: gameid,
        // the id for the game
        nickname: nickname,
        // player nickname
        type: "pb",
        // prisonbreak
        func: "chat",
        // send chat message
        sender: participant,
        // who sent it
        sendmsg: sendmsg // the message typed in the chat

      }));
      return;
    } // let chartest = /^[A-Za-z0-9 \.,\(\)\?:!'"]$/; // Allow letter, number, space, period, comma, round brackets, question mark, colon, exclamation mark, quote, double quote
    // if (event.key.match(chartest)) {
    //   let newNextmsg = nextmsg + event.key;
    //   setNextmsg(newNextmsg);
    // }


    if (event.key === "Backspace" && nextmsg.length > 0) {
      event.preventDefault();
      let newNextmsg = nextmsg.slice(0, nextmsg.length - 1);
      setNextmsg(newNextmsg);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "ScrollableChat",
    className: "pbChat",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      className: "pbChatTable",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: [msgs.map((value, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            className: "pbChatFrom",
            children: value.from
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1159,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            className: "pbChatMsg",
            children: value.msg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1160,
            columnNumber: 17
          }, undefined)]
        }, `ChatMessage${index}`, true, {
          fileName: _jsxFileName,
          lineNumber: 1158,
          columnNumber: 15
        }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            colSpan: "2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              className: nextmsg === "" ? "pbChatInputEmpty" : "pbChatInput",
              name: "nextmsgInputArea",
              value: nextmsg,
              onChange: e => {
                setNextmsg(e.target.value);
              },
              onKeyDownCapture: handleKeyDown,
              placeholder: "chat..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1165,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1164,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1163,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1156,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1155,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1154,
    columnNumber: 7
  }, undefined);
};

_s3(Chat, "PlpOat0wYANdTrVq2/HpQ7Z/6HY=");

_c3 = Chat;

const scrollToBottom = elementid => {
  const theElement = document.getElementById(elementid);
  theElement.scrollTop = theElement.scrollHeight;
};

/* harmony default export */ __webpack_exports__["default"] = (Game);

var _c, _c2, _c3;

$RefreshReg$(_c, "Game");
$RefreshReg$(_c2, "ShowRescues");
$RefreshReg$(_c3, "Chat");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvZ2FtZS5qcyJdLCJuYW1lcyI6WyJHYW1lIiwiaXNyZWpvaW4iLCJwYXJ0aWNpcGFudCIsImdhbWVpZCIsIm5pY2tuYW1lIiwid3NtZXNzYWdlIiwiY2xpZW50IiwicmFja3NpemUiLCJtaWRkbGUiLCJlZGdlIiwiaW5pdGlhbHRpbGVzIiwiYyIsInRpbGVzIiwic2V0VGlsZXMiLCJ1c2VTdGF0ZSIsInB0aWxlcyIsInNldFB0aWxlcyIsImd0aWxlcyIsInNldEd0aWxlcyIsInNxdWFyZUFycmF5Iiwic2V0U3F1YXJlQXJyYXkiLCJzZWxlY3Rpb24iLCJzZXRTZWxlY3Rpb24iLCJ3aG9zZXR1cm4iLCJzZXRXaG9zZXR1cm4iLCJjdXJyZW50Y29vcmRzIiwic2V0Q3VycmVudGNvb3JkcyIsInJlc2N1ZXMiLCJzZXRSZXNjdWVzIiwicmNkIiwic2V0UmNkIiwibW92ZXMiLCJzZXRNb3ZlcyIsInNuYXBzaG90Iiwic2V0U25hcHNob3QiLCJqb2tlaW5kZXgiLCJzZXRKb2tlaW5kZXgiLCJhbGxvd1Jld2luZCIsInNldEFsbG93UmV3aW5kIiwib3BwbmFtZSIsInNldE9wcG5hbWUiLCJjaGF0bXNncyIsInNldENoYXRtc2dzIiwicHJldlJlc2N1ZXMiLCJ1c2VQcmV2aW91cyIsInZhbHVlIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsIm15YXVkaW8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJwbGF5IiwibmV3amkiLCJsZW5ndGgiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwicmVxdWVzdEdhbWVEYXRhIiwiY2xlYXJJbnRlcnZhbCIsImZpcnN0U3F1YXJlQXJyYXkiLCJ0ZW1wUFRpbGVzIiwidGVtcEdUaWxlcyIsInRlbXBUaWxlcyIsInJhbmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwdXNoIiwic3BsaWNlIiwic29ydCIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsImZ1bmMiLCJzZW5kZXIiLCJtc2ciLCJwcm9jZXNzR2FtZU1lc3NhZ2UiLCJzY3JvbGxUb0JvdHRvbSIsInB1dEF0TW92ZVN0YXJ0IiwibWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwicGFyc2UiLCJuZXdDaGF0bXNncyIsImZyb20iLCJzZW5kbXNnIiwiaGFuZGxlQm9hcmRTcXVhcmVDbGljayIsInJpIiwiY2kiLCJuZXdTZWxlY3Rpb24iLCJuZXdSY2QiLCJuZXdTcXVhcmVBcnJheSIsIm5ld1NxdWFyZUFycmF5Um93IiwibmV3U3F1YXJlQXJyYXlDZWxsIiwibmV3UHRpbGVzIiwibmV3R3RpbGVzIiwibmV3Q3VycmVudGNvb3JkcyIsImNvb3JkIiwiU3RyaW5nIiwiY2NpIiwiaW5kZXhPZiIsInVzZWRieSIsInNlbGVjdGVkVGlsZSIsImxldHRlciIsIm5ld0RpcmVjdGlvbiIsImhhbmRsZVJhY2tUaWxlQ2xpY2siLCJ0aWxlaW5kZXgiLCJuZXdyYWNrIiwibW92ZWZyb20iLCJtb3ZldGlsZSIsIm1vdmV0byIsImVuZFByaXNvbmVyc1R1cm4iLCJpc1BsYXlWYWxpZCIsInJld2luZEluZm8iLCJnZXRSZXdpbmRJbmZvIiwibmV3UmVzY3VlcyIsImVzY2FwZWhhdGNoZXMiLCJpIiwibmV3VGlsZXMiLCJuZXdXaG9zZXR1cm4iLCJwbGF5aW5mbyIsImdldFBsYXlJbmZvIiwibmV3TW92ZSIsImJ5IiwibWFpbndvcmQiLCJleHRyYXdvcmRzIiwicG9zIiwibmV3TW92ZXMiLCJlbmRHdWFyZHNUdXJuIiwic25hcHNxdWFyZWFycmF5Iiwic25hcHB0aWxlcyIsInNuYXBndGlsZXMiLCJzd2FwUHJpc29uZXJzVGlsZXMiLCJ3aW5kb3ciLCJhbGVydCIsInN3YXBHdWFyZHNUaWxlcyIsIm51bXJvd3MiLCJudW1jb2xzIiwibG93cm93IiwiaGlnaHJvdyIsImxvd2NvbCIsImhpZ2hjb2wiLCJ0ZW1wcm93IiwidGVtcGNvbCIsInBsYXl0aHJ1IiwiaG9va21hZGUiLCJ3b3Jkc3RhcnRjb29yZCIsIm51bWNvb3JkcyIsInJvdyIsInBhcnNlSW50Iiwic3BsaXQiLCJjb2wiLCJsb3dlc3Ryb3ciLCJoaWdoZXN0cm93IiwibG93ZXN0Y29sIiwiaGlnaGVzdGNvbCIsImV4dHJhd29yZCIsInJhY2siLCJhbGxvd1VuZG9MYXN0VHVybiIsInBlcmZvcm1SZXdpbmQiLCJudW1Nb3ZlcyIsImxhc3RNb3ZlIiwibmV3U25hcHNob3QiLCJyZWNhbGxUaWxlcyIsInByaXNvbmVyUGFzcyIsImlzRG91YmxlUGFzcyIsImd1YXJkc1Bhc3MiLCJtb3ZlbGlzdCIsImxhc3QiLCJzZWNvbmRsYXN0IiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJrZXkiLCJsZXR0ZXJ0ZXN0IiwibWF0Y2giLCJ0b1VwcGVyQ2FzZSIsImRpciIsIm5ld2MiLCJuZXdyIiwicmV0dXJuZWRUaWxlIiwidGkiLCJTaG93UmVzY3VlcyIsInByb3BzIiwiQ2hhdCIsIm1zZ3MiLCJzZXRNc2dzIiwibmV4dG1zZyIsInNldE5leHRtc2ciLCJuZXdNc2dzIiwibmV3TmV4dG1zZyIsInNsaWNlIiwibWFwIiwiaW5kZXgiLCJlIiwidGFyZ2V0IiwiZWxlbWVudGlkIiwidGhlRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBQ0MsVUFBRDtBQUNSQyxhQURRLENBQ0k7QUFESjtBQUVSQyxRQUZRO0FBR1JDLFVBSFE7QUFJUkMsV0FKUTtBQUtSQyxRQUxRO0FBTVJDLFVBQVEsR0FBQyxDQU5ELENBTUc7O0FBTkgsQ0FBRCxLQU9IO0FBQUE7O0FBQUE7O0FBQ04sUUFBTUMsTUFBTSxHQUFHRCxRQUFmLENBRE0sQ0FDbUI7O0FBQ3pCLFFBQU1FLElBQUksR0FBR0YsUUFBUSxHQUFHLENB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SUFBZTtBQUNwQyxRQUFNQyxVQUFVLEdBQUdwSixRQUFRLENBQUNxSixjQUFULENBQXdCRixTQUF4QixDQUFuQjtBQUNBQyxZQUFVLENBQUNFLFNBQVgsR0FBdUJGLFVBQVUsQ0FBQ0csWUFBbEM7QUFDRCxDQUhEOztBQUtlMU0sbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGIvcHJpc29uYnJlYWsuZjU0YjZhMGFiOTNmMDg3N2ExZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUGxheWVyU2VjdGlvbiBmcm9tICcuLi9wYi9wbGF5ZXJTZWN0aW9uJztcclxuaW1wb3J0IEJvYXJkIGZyb20gJy4uL3BiL2JvYXJkJztcclxuaW1wb3J0IFNob3dVbnNlZW5UaWxlcyBmcm9tICcuLi9wYi91bnNlZW5UaWxlc1NlY3Rpb24nO1xyXG5pbXBvcnQgU2hvd01vdmVzIGZyb20gJy4uL3BiL21vdmVzU2VjdGlvbic7XHJcbmltcG9ydCAqIGFzIGMgZnJvbSAnLi4vLi4vbGliL3BiY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IEdhbWUgPSAoe2lzcmVqb2luXHJcbiAgICAsIHBhcnRpY2lwYW50IC8vIFByaXNvbmVycywgR3VhcmRzLCBvciBPYnNlcnZlciAobm90IGltcGxlbWVudGVkKVxyXG4gICAgLCBnYW1laWRcclxuICAgICwgbmlja25hbWVcclxuICAgICwgd3NtZXNzYWdlXHJcbiAgICAsIGNsaWVudFxyXG4gICAgLCByYWNrc2l6ZT00IC8vIE9wdGlvbiBmb3IgcmFjayBzaXplIChnaXZlIGl0IGEgZGVmYXVsdCBmb3IgQnVpbGQpXHJcbiAgICB9KSA9PiB7XHJcbiAgICBjb25zdCBtaWRkbGUgPSByYWNrc2l6ZTsgLy8gTWlkZGxlIGVsZW1lbnQgaW4gcm93IG9yIGNvbHVtbiBhcnJheVxyXG4gICAgY29uc3QgZWRnZSA9IHJhY2tzaXplICogMjsgLy8gTGFzdCBlbGVtZW50IGluIHJvdyBvciBjb2x1bW4gYXJyYXlcclxuICAgIGNvbnN0IGluaXRpYWx0aWxlcyA9IHJhY2tzaXplID09PSA2ID8gYy5USUxFQkFHNiA6IHJhY2tzaXplID09PSA3ID8gYy5USUxFQkFHNyA6IHJhY2tzaXplID09PSA1ID8gYy5USUxFQkFHNSA6IGMuVElMRUJBRzQ7XHJcbiAgICBjb25zdCBbdGlsZXMsIHNldFRpbGVzXSA9IHVzZVN0YXRlKFsuLi5pbml0aWFsdGlsZXNdKTtcclxuICAgIGNvbnN0IFtwdGlsZXMsIHNldFB0aWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZ3RpbGVzLCBzZXRHdGlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NxdWFyZUFycmF5LCBzZXRTcXVhcmVBcnJheV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0aW9uLCBzZXRTZWxlY3Rpb25dID0gdXNlU3RhdGUoLTEpOyAvLyByZWxhdGl2ZSB0byByYWNrIG9mIHBsYXllciBtYWtpbmcgYSBwbGF5XHJcbiAgICBjb25zdCBbd2hvc2V0dXJuLCBzZXRXaG9zZXR1cm5dID0gdXNlU3RhdGUoYy5XSE9TRV9UVVJOX1BSSVNPTkVSUyk7IC8vIGdhbWUgc3RhcnRzIHdpdGggcHJpc29uZXJzIHBsYXlcclxuICAgIGNvbnN0IFtjdXJyZW50Y29vcmRzLCBzZXRDdXJyZW50Y29vcmRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtyZXNjdWVzLCBzZXRSZXNjdWVzXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3JjZCwgc2V0UmNkXSA9IHVzZVN0YXRlKFstMSwtMSxjLkRJUl9OT05FXSk7XHJcbiAgICBjb25zdCBbbW92ZXMsIHNldE1vdmVzXSA9IHVzZVN0YXRlKFtdKTsgLy8gbW92ZSBoaXN0b3J5LCBlYWNoIGVsZW1lbnQgaXMgdGhlIGFycmF5IGlzIGEganNvbiBvYmplY3Qgb2YgaW5mbyBhYm91dCB0aGUgbW92ZVxyXG4gICAgY29uc3QgW3NuYXBzaG90LCBzZXRTbmFwc2hvdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgIHNxdWFyZUFycmF5OiBbXSxcclxuICAgICAgcHRpbGVzOiBbXSxcclxuICAgICAgZ3RpbGVzOiBbXSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2pva2VpbmRleCwgc2V0Sm9rZWluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2FsbG93UmV3aW5kLCBzZXRBbGxvd1Jld2luZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbb3BwbmFtZSwgc2V0T3BwbmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbY2hhdG1zZ3MsIHNldENoYXRtc2dzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IHByZXZSZXNjdWVzID0gdXNlUHJldmlvdXMocmVzY3Vlcyk7XHJcbiAgICBmdW5jdGlvbiB1c2VQcmV2aW91cyh2YWx1ZSkge1xyXG4gICAgICBjb25zdCByZWYgPSB1c2VSZWYoKTtcclxuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICByZWYuY3VycmVudCA9IHZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlZi5jdXJyZW50O1xyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYgKHJlc2N1ZXMgPiBwcmV2UmVzY3Vlcykge1xyXG4gICAgICAgICAgdmFyIG15YXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gICAgICAgICAgbXlhdWRpby5zcmMgPSBwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUyA/IFwiaHR0cHM6Ly90aWxlcnVubmVyLmdpdGh1Yi5pby9PbmVHb3RBd2F5Lm00YVwiIDogXCJodHRwczovL3RpbGVydW5uZXIuZ2l0aHViLmlvL3lpcHBlZS5tNGFcIjtcclxuICAgICAgICAgIG15YXVkaW8ucGxheSgpO1xyXG4gICAgICAgIC8vIHJlc2N1ZVNvdW5kLnBsYXkoKVxyXG4gICAgICB9XHJcbiAgICB9LCBbcmVzY3Vlc10pOyAvLyBQbGF5IGEgc291bmQgd2hlbiBhIHJlc2N1ZSBpcyBtYWRlXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBsZXQgbmV3amkgPSBqb2tlaW5kZXggKyAxO1xyXG4gICAgICBpZiAobmV3amkgPj0gYy5KT0tFX0FSUkFZLmxlbmd0aCkge1xyXG4gICAgICAgIG5ld2ppID0gMDtcclxuICAgICAgfVxyXG4gICAgICBzZXRKb2tlaW5kZXgobmV3amkpO1xyXG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAvLyBJZiBpdCBpcyBub3QgbXkgdHVybiAmJiB0aGUgZ2FtZSBoYXMgbm90IGVuZGVkXHJcbiAgICAgICAgaWYgKHBhcnRpY2lwYW50ICE9PSB3aG9zZXR1cm4gJiYgd2hvc2V0dXJuICE9PSBjLldIT1NFX1RVUk5fR0FNRU9WRVIpIHtcclxuICAgICAgICAgIC8vIEkgYW0gd2FpdGluZyBmb3Igb3Bwb25lbnQgbW92ZSB0byBjb21lIHRocm91Z2ggYnV0IHNvbWV0aW1lcyBpdCBnZXRzIG1pc3NlZCAobm8gaWRlYSB3aHkpXHJcbiAgICAgICAgICByZXF1ZXN0R2FtZURhdGEoKTsgLy8gU2VuZCBhIHJlcXVlc3QgZm9yIGdhbWUgZGF0YSBpbiBjYXNlIG9wcG9uZW50IG1vdmVkIGFuZCB3ZSBtaXNzZWQgdGhlIHVwZGF0ZVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgYy5QSU5HX0lOVEVSVkFMKTsgLy8gdGhpcyBtYW55IG1pbGxpc2Vjb25kcyBiZXR3ZWVuIGFib3ZlIGNvZGUgYmxvY2sgZXhlY3V0aW9uc1xyXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9LCBbd2hvc2V0dXJuXSk7IC8vIHdhbnQgdXAgdG8gZGF0ZSB2YWx1ZSBvZiB3aG9zZXR1cm4gdG8gZGVjaWRlIHdoZXRoZXIgdG8gYXNrIGZvciBhbiB1cGRhdGVcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IC8vIFRoaXMgY29kZSBleGVjdXRlcyBmaXJzdCB0aW1lIEdhbWUgaXMgdXNlZCBvbmx5XHJcbiAgICAgIGxldCBmaXJzdFNxdWFyZUFycmF5ID0gYy5Jbml0aWFsU3F1YXJlQXJyYXkocmFja3NpemUpO1xyXG4gICAgICBzZXRTcXVhcmVBcnJheShbLi4uZmlyc3RTcXVhcmVBcnJheV0pO1xyXG4gICAgICBpZiAoIWlzcmVqb2luICYmIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTKSB7IC8vIFByaXNvbmVyIGlzIHN0YXJ0aW5nIHRoZSBnYW1lIHNvIHBpY2sgcmFja3NcclxuICAgICAgICBsZXQgdGVtcFBUaWxlcyA9IFtdO1xyXG4gICAgICAgIGxldCB0ZW1wR1RpbGVzID0gW107XHJcbiAgICAgICAgbGV0IHRlbXBUaWxlcyA9IFsuLi5pbml0aWFsdGlsZXNdO1xyXG4gICAgICAgIHdoaWxlICh0ZW1wUFRpbGVzLmxlbmd0aCA8IHJhY2tzaXplKSB7XHJcbiAgICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRlbXBUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgdGVtcFBUaWxlcy5wdXNoKHRlbXBUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgICB0ZW1wVGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICAgICAgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRlbXBUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgdGVtcEdUaWxlcy5wdXNoKHRlbXBUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgICB0ZW1wVGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZW1wUFRpbGVzLnNvcnQoKTtcclxuICAgICAgICB0ZW1wR1RpbGVzLnNvcnQoKTtcclxuICAgICAgICBzZXRHdGlsZXModGVtcEdUaWxlcyk7XHJcbiAgICAgICAgc2V0UHRpbGVzKHRlbXBQVGlsZXMpO1xyXG4gICAgICAgIHNldFRpbGVzKHRlbXBUaWxlcyk7XHJcbiAgICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgICAgc3F1YXJlQXJyYXk6IFsuLi5maXJzdFNxdWFyZUFycmF5XSxcclxuICAgICAgICAgIHB0aWxlczogWy4uLnRlbXBQVGlsZXNdLFxyXG4gICAgICAgICAgZ3RpbGVzOiBbLi4udGVtcEdUaWxlc10gICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwicGJcIixcclxuICAgICAgICAgICAgZnVuYzogXCJoZWxsb1wiLFxyXG4gICAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LFxyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCxcclxuICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgICAgd2hvc2V0dXJuOiB3aG9zZXR1cm4sXHJcbiAgICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2VcclxuICAgICAge1xyXG4gICAgICAgIC8vIFByaXNvbmVyIHJlam9pbiBvciBndWFyZCBqb2luIG9yIGd1YXJkIHJlam9pblxyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICAgIGZ1bmM6IFwicmVxdWVzdGdhbWVkYXRhXCIsIC8vIHJlcXVlc3QgZ2FtZSBkYXRhXHJcbiAgICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnRcclxuICAgICAgICB9KSk7XHJcbiAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGxldCBtc2cgPSB3c21lc3NhZ2U7XHJcbiAgICAgIGlmIChtc2cgIT09ICcnKSBwcm9jZXNzR2FtZU1lc3NhZ2UobXNnKTsgICAgICBcclxuICAgIH0sW3dzbWVzc2FnZV0pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzY3JvbGxUb0JvdHRvbShcIlNjcm9sbGFibGVNb3Zlc1wiKTtcclxuICAgIH0sW21vdmVzXSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHNjcm9sbFRvQm90dG9tKFwiU2Nyb2xsYWJsZUNoYXRcIik7XHJcbiAgICB9LFtjaGF0bXNnc10pXHJcbiAgICBmdW5jdGlvbiBwdXRBdE1vdmVTdGFydCgpIHtcclxuICAgICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgICAgc2V0QWxsb3dSZXdpbmQoZmFsc2UpO1xyXG4gICAgICBzZXRSY2QoLTEsLTEsYy5ESVJfTk9ORSk7XHJcbiAgICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0dhbWVNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgbGV0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLnR5cGUgPT09IFwiYW5ub3VuY2VcIikge1xyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICB0eXBlOiBcInBiXCIsXHJcbiAgICAgICAgICAgIGZ1bmM6IFwiaGVsbG9cIixcclxuICAgICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgICAgZ2FtZWlkOiBnYW1laWQsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICAgIHdob3NldHVybjogd2hvc2V0dXJuLFxyXG4gICAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChtZXNzYWdlRGF0YS5nYW1laWQgPT09IGdhbWVpZCAmJiBtZXNzYWdlRGF0YS50eXBlID09PSBcInBiXCIpIHsgLy8gVGhpcyBpbnN0YW5jZSBvZiBhIHByaXNvbiBicmVhayBnYW1lXHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLnNlbmRlciAhPSBwYXJ0aWNpcGFudCAmJiBvcHBuYW1lID09PSBcIlwiICYmIG1lc3NhZ2VEYXRhLm5pY2tuYW1lICYmIG1lc3NhZ2VEYXRhLm5pY2tuYW1lLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIC8vIE9wcG9uZW50IHNlbnQgYSBtZXNzYWdlIGluY2x1ZGluZyB0aGVpciBuaWNrbmFtZSBhbmQgSSBkb24ndCBoYXZlIHRoZWlyIG5pY2tuYW1lIHlldFxyXG4gICAgICAgICAgc2V0T3BwbmFtZShtZXNzYWdlRGF0YS5uaWNrbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInJlcXVlc3RnYW1lZGF0YVwiICYmIG1lc3NhZ2VEYXRhLnNlbmRlciAhPT0gcGFydGljaXBhbnQpIHsgLy8gT3Bwb25lbnQgcmVxdWVzdGVkIGdhbWUgaW5mb1xyXG4gICAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgICAgIGZ1bmM6IFwicHJvdmlkZWdhbWVkYXRhXCIsIC8vIHByb3ZpZGUgZ2FtZSBkYXRhXHJcbiAgICAgICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgICAgICB0aWxlczogdGlsZXMsXHJcbiAgICAgICAgICAgICAgc3F1YXJlQXJyYXk6IHNxdWFyZUFycmF5LFxyXG4gICAgICAgICAgICAgIHB0aWxlczogcHRpbGVzLFxyXG4gICAgICAgICAgICAgIGd0aWxlczogZ3RpbGVzLFxyXG4gICAgICAgICAgICAgIHdob3NldHVybjogd2hvc2V0dXJuLFxyXG4gICAgICAgICAgICAgIHNuYXBzaG90OiBzbmFwc2hvdCxcclxuICAgICAgICAgICAgICBtb3ZlczogbW92ZXMsXHJcbiAgICAgICAgICAgICAgcmVzY3VlczogcmVzY3VlcyxcclxuICAgICAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgICAgICAgYWxsb3dSZXdpbmQ6IGFsbG93UmV3aW5kXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJwcm92aWRlZ2FtZWRhdGFcIiAmJiBtZXNzYWdlRGF0YS5zZW5kZXIgIT09IHBhcnRpY2lwYW50KSB7IFxyXG4gICAgICAgICAgLy8gT3Bwb25lbnQgcHJvdmlkZWQgZ2FtZSBkYXRhIGJ1dCBkbyB3ZSBuZWVkIGl0P1xyXG4gICAgICAgICAgLy8gSWYgdGhleSBoYXZlIGEgZGlmZmVyZW50IG1vdmUgY291bnQgdGhlbiB3ZSBuZWVkIGl0ICh0aGV5IG1heSBoYXZlIHVuZG9uZSBhIG1vdmUpXHJcbiAgICAgICAgICAvLyBJZiB0aGV5IGhhdmUgc2FtZSBtb3ZlIGNvdW50IGJ1dCBhIGRpZmZlcmVudCB0aWxlIGJhZyBjb3VudCB0aGVuIHdlIG5lZWQgaXQgKG5vIG1vdmVzIG1hZGUgYnV0IHRpbGVzIGFyZSBwaWNrZWQpXHJcbiAgICAgICAgICAvLyBJZiBndWFyZHMgam9pbiBhZnRlciBwcmlzb25lcnMgbWFkZSBhIG1vdmUgdGhlbiBndWFyZHMgaGF2ZSBubyB0aWxlcyAoXCJlcHRcIiBnb3QgcHJvY2Vzc2VkIHdoaWNoIGxlYXZlcyBndGlsZXMgYWxvbmUpXHJcbiAgICAgICAgICBpZiAobWVzc2FnZURhdGEubW92ZXMubGVuZ3RoICE9PSBtb3Zlcy5sZW5ndGhcclxuICAgICAgICAgICAgIHx8IG1lc3NhZ2VEYXRhLnRpbGVzLmxlbmd0aCAhPT0gdGlsZXMubGVuZ3RoXHJcbiAgICAgICAgICAgICB8fCAocGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMgJiYgZ3RpbGVzLmxlbmd0aCA9PT0gMCAmJiBjdXJyZW50Y29vcmRzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgIHx8IChwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyAmJiBwdGlsZXMubGVuZ3RoID09PSAwICYmIGN1cnJlbnRjb29yZHMubGVuZ3RoID09PSAwKSAvLyBOb3Qgc3VyZSBJIG5lZWQgaXQgYnV0Li4uXHJcbiAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgc2V0VGlsZXMobWVzc2FnZURhdGEudGlsZXMpO1xyXG4gICAgICAgICAgICBzZXRTcXVhcmVBcnJheShtZXNzYWdlRGF0YS5zcXVhcmVBcnJheSk7XHJcbiAgICAgICAgICAgIHNldFB0aWxlcyhtZXNzYWdlRGF0YS5wdGlsZXMpO1xyXG4gICAgICAgICAgICBzZXRHdGlsZXMobWVzc2FnZURhdGEuZ3RpbGVzKTtcclxuICAgICAgICAgICAgc2V0V2hvc2V0dXJuKG1lc3NhZ2VEYXRhLndob3NldHVybik7XHJcbiAgICAgICAgICAgIHNldFNuYXBzaG90KG1lc3NhZ2VEYXRhLnNuYXBzaG90KTtcclxuICAgICAgICAgICAgc2V0TW92ZXMobWVzc2FnZURhdGEubW92ZXMpO1xyXG4gICAgICAgICAgICBzZXRSZXNjdWVzKG1lc3NhZ2VEYXRhLnJlc2N1ZXMpO1xyXG4gICAgICAgICAgICBzZXRBbGxvd1Jld2luZChtZXNzYWdlRGF0YS5hbGxvd1Jld2luZCk7ICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiZXB0XCIgJiYgcGFydGljaXBhbnQgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMpIHsgLy8gUHJpc29uZXJzIHNlbnQgZW5kIHByaXNvbmVycyB0dXJuLCBHdWFyZHMgcGljayBpdCB1cFxyXG4gICAgICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgICAgIHNldFdob3NldHVybihtZXNzYWdlRGF0YS53aG9zZXR1cm4pO1xyXG4gICAgICAgICAgc2V0U3F1YXJlQXJyYXkobWVzc2FnZURhdGEuc3F1YXJlQXJyYXkpO1xyXG4gICAgICAgICAgc2V0UHRpbGVzKG1lc3NhZ2VEYXRhLnB0aWxlcyk7XHJcbiAgICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgICBzZXRNb3ZlcyhtZXNzYWdlRGF0YS5tb3Zlcyk7XHJcbiAgICAgICAgICBzZXRSZXNjdWVzKG1lc3NhZ2VEYXRhLnJlc2N1ZXMpO1xyXG4gICAgICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgICAgICBzcXVhcmVBcnJheTogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShtZXNzYWdlRGF0YS5zcXVhcmVBcnJheSkpLFxyXG4gICAgICAgICAgICBwdGlsZXM6IFsuLi5tZXNzYWdlRGF0YS5wdGlsZXNdLFxyXG4gICAgICAgICAgICBndGlsZXM6IFsuLi5ndGlsZXNdLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImVndFwiICYmIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTKSB7IC8vIEd1YXJkcyBzZW50IGVuZCBndWFyZHMgdHVybiwgUHJpc29uZXJzIHBpY2sgaXQgdXBcclxuICAgICAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgICAgICBzZXRXaG9zZXR1cm4obWVzc2FnZURhdGEud2hvc2V0dXJuKTtcclxuICAgICAgICAgIHNldFNxdWFyZUFycmF5KG1lc3NhZ2VEYXRhLnNxdWFyZUFycmF5KTtcclxuICAgICAgICAgIHNldEd0aWxlcyhtZXNzYWdlRGF0YS5ndGlsZXMpO1xyXG4gICAgICAgICAgc2V0VGlsZXMobWVzc2FnZURhdGEudGlsZXMpO1xyXG4gICAgICAgICAgc2V0TW92ZXMobWVzc2FnZURhdGEubW92ZXMpO1xyXG4gICAgICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgICAgICBzcXVhcmVBcnJheTogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShtZXNzYWdlRGF0YS5zcXVhcmVBcnJheSkpLFxyXG4gICAgICAgICAgICBwdGlsZXM6IFsuLi5wdGlsZXNdLFxyXG4gICAgICAgICAgICBndGlsZXM6IFsuLi5tZXNzYWdlRGF0YS5ndGlsZXNdLFxyXG4gICAgICAgICAgfSk7ICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJ1bmRvdHVyblwiICYmIG1lc3NhZ2VEYXRhLnNlbmRlciAhPT0gcGFydGljaXBhbnQpIHsgXHJcbiAgICAgICAgICAvLyBvcHBvbmVudCB1bmRpZCB0aGVpciBsYXN0IHR1cm5cclxuICAgICAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgICBzZXRQdGlsZXMobWVzc2FnZURhdGEucHRpbGVzKTtcclxuICAgICAgICAgIHNldEd0aWxlcyhtZXNzYWdlRGF0YS5ndGlsZXMpO1xyXG4gICAgICAgICAgc2V0U3F1YXJlQXJyYXkobWVzc2FnZURhdGEuc3F1YXJlQXJyYXkpO1xyXG4gICAgICAgICAgc2V0V2hvc2V0dXJuKG1lc3NhZ2VEYXRhLndob3NldHVybik7XHJcbiAgICAgICAgICBzZXRSZXNjdWVzKG1lc3NhZ2VEYXRhLnJlc2N1ZXMpO1xyXG4gICAgICAgICAgc2V0TW92ZXMobWVzc2FnZURhdGEubW92ZXMpO1xyXG4gICAgICAgICAgc2V0U25hcHNob3QobWVzc2FnZURhdGEuc25hcHNob3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJhbGxvd3VuZG9cIiAmJiBtZXNzYWdlRGF0YS5zZW5kZXIgIT09IHBhcnRpY2lwYW50KSB7XHJcbiAgICAgICAgICAvLyBPcHBvbmVudCBjbGlja2VkIGJ1dHRvbiB0byBhbGxvdyB1bmRvIHR1cm5cclxuICAgICAgICAgIHNldEFsbG93UmV3aW5kKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJjaGF0XCIgJiYgbWVzc2FnZURhdGEuc2VuZGVyICE9IHBhcnRpY2lwYW50KSB7IC8vIE9wcG9uZW50IGNoYXQgbWVzc2FnZVxyXG4gICAgICAgICAgbGV0IG5ld0NoYXRtc2dzID0gWy4uLmNoYXRtc2dzLCB7ZnJvbTogbWVzc2FnZURhdGEubmlja25hbWUsIG1zZzogbWVzc2FnZURhdGEuc2VuZG1zZ31dO1xyXG4gICAgICAgICAgc2V0Q2hhdG1zZ3MobmV3Q2hhdG1zZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBDYWxsaW5nIHNldFNlbGVjdGlvbiAoZnJvbSBoYW5kbGVLZXlEb3duKSB0aGVuIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2sgZG9lcyBub3QgbGV0IGl0IHJlY29nbml6ZSBzZWxlY3Rpb24gd2l0aCB0aGUgbmV3IHZhbHVlXHJcbiAgICAvLyBTbyBJIHBhc3MgbmV3U2VsZWN0aW9uIHdoZW4gSSB3YW50IHRvIGFsc28gc2V0IGl0LCBvdGhlcndpc2UgSSBwYXNzIC0xIHRvIGluc3RydWN0IGl0IHRvIHVzZSBjdXJyZW50IHZhbHVlIG9mIHNlbGVjdGlvblxyXG4gICAgLy8gQWxzbyBwYXNzaW5nIG5ld1JjZFxyXG4gICAgY29uc3QgaGFuZGxlQm9hcmRTcXVhcmVDbGljayA9IChyaSwgY2ksIG5ld1NlbGVjdGlvbiwgbmV3UmNkKSA9PiB7XHJcbiAgICAgIGxldCBuZXdTcXVhcmVBcnJheSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3F1YXJlQXJyYXkpKTtcclxuICAgICAgbGV0IG5ld1NxdWFyZUFycmF5Um93ID0gWy4uLm5ld1NxdWFyZUFycmF5W3JpXV07IC8vIFRoZSByb3cgb2Ygc3F1YXJlcyB0aGV5IGNsaWNrZWQgb25cclxuICAgICAgbGV0IG5ld1NxdWFyZUFycmF5Q2VsbCA9IG5ld1NxdWFyZUFycmF5Um93W2NpXTsgLy8gVGhlIHNxdWFyZSBpbiB0aGUgcm93IHRoZXkgY2xpY2tlZCBvblxyXG4gICAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IG5ld0N1cnJlbnRjb29yZHMgPSBbLi4uY3VycmVudGNvb3Jkc107XHJcbiAgICAgIGxldCBjb29yZCA9IFN0cmluZyhyaSkgKyBcIi1cIiArIFN0cmluZyhjaSk7XHJcbiAgICAgIGxldCBjY2kgPSBjdXJyZW50Y29vcmRzLmluZGV4T2YoY29vcmQpO1xyXG4gICAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMSkge1xyXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IHNlbGVjdGlvbjtcclxuICAgICAgICBuZXdSY2QgPSByY2Q7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5ld1NlbGVjdGlvbiA+IC0xICYmIG5ld1NxdWFyZUFycmF5Q2VsbC51c2VkYnkgPT09IGMuVVNFRF9CWV9OT05FKSB7IC8vIHRpbGUgaXMgc2VsZWN0ZWQgZnJvbSByYWNrIGFuZCBjbGlja2VkIHNxdWFyZSBpcyBub3QgdXNlZCB5ZXRcclxuICAgICAgICBsZXQgc2VsZWN0ZWRUaWxlID0gd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTID8gbmV3UHRpbGVzW25ld1NlbGVjdGlvbl0gOiBuZXdHdGlsZXNbbmV3U2VsZWN0aW9uXTtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheUNlbGwubGV0dGVyID0gc2VsZWN0ZWRUaWxlO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Q2VsbC51c2VkYnkgPSB3aG9zZXR1cm47XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlSb3dbY2ldID0gbmV3U3F1YXJlQXJyYXlDZWxsO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5W3JpXSA9IFsuLi5uZXdTcXVhcmVBcnJheVJvd107XHJcbiAgICAgICAgd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTXHJcbiAgICAgICAgICA/IG5ld1B0aWxlcy5zcGxpY2UobmV3U2VsZWN0aW9uLCAxKVxyXG4gICAgICAgICAgOiBuZXdHdGlsZXMuc3BsaWNlKG5ld1NlbGVjdGlvbiwgMSk7XHJcbiAgICAgICAgaWYgKHdob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX1BSSVNPTkVSUyAmJiBuZXdTZWxlY3Rpb24gPT09IG5ld1B0aWxlcy5sZW5ndGgpIHsgXHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdTZWxlY3Rpb24gLSAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9HVUFSRFMgJiYgbmV3U2VsZWN0aW9uID09PSBuZXdHdGlsZXMubGVuZ3RoKSB7IFxyXG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3U2VsZWN0aW9uIC0gMVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3Rpb24obmV3U2VsZWN0aW9uKTtcclxuICAgICAgICBzZXRTcXVhcmVBcnJheShbLi4ubmV3U3F1YXJlQXJyYXldKTtcclxuICAgICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKFsuLi5jdXJyZW50Y29vcmRzLCBjb29yZF0pO1xyXG4gICAgICAgIHNldFJjZChuZXdSY2QpOyAvLyBrZXkgZG93biBoYW5kbGVyIGZpZ3VyZWQgaXQgb3V0XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjY2kgPiAtMSkgeyAvLyBjbGlja2VkIHNxdWFyZSBoYXMgYSB0aWxlIG9uIGl0IGZyb20gdGhlIGN1cnJlbnQgbW92ZSBpbiBwcm9ncmVzcywgc28gcHV0IGl0IGJhY2sgb24gdGhlIHBsYXllciByYWNrXHJcbiAgICAgICAgd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTXHJcbiAgICAgICAgICA/IG5ld1B0aWxlcy5wdXNoKG5ld1NxdWFyZUFycmF5Q2VsbC5sZXR0ZXIpXHJcbiAgICAgICAgICA6IG5ld0d0aWxlcy5wdXNoKG5ld1NxdWFyZUFycmF5Q2VsbC5sZXR0ZXIpO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Q2VsbC51c2VkYnkgPSBjLlVTRURfQllfTk9ORTtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheUNlbGwubGV0dGVyID0gYy5MRVRURVJfTk9ORTtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheVJvd1tjaV0gPSBuZXdTcXVhcmVBcnJheUNlbGw7XHJcbiAgICAgICAgbmV3U3F1YXJlQXJyYXlbcmldID0gWy4uLm5ld1NxdWFyZUFycmF5Um93XTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24oXHJcbiAgICAgICAgICB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMgPyBuZXdQdGlsZXMubGVuZ3RoIC0gMSA6IG5ld0d0aWxlcy5sZW5ndGggLSAxXHJcbiAgICAgICAgKTtcclxuICAgICAgICBuZXdDdXJyZW50Y29vcmRzLnNwbGljZShjY2ksIDEpO1xyXG4gICAgICAgIHNldFNxdWFyZUFycmF5KFsuLi5uZXdTcXVhcmVBcnJheV0pO1xyXG4gICAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICAgIHNldEN1cnJlbnRjb29yZHMobmV3Q3VycmVudGNvb3Jkcyk7XHJcbiAgICAgICAgc2V0UmNkKC0xLC0xLGMuRElSX05PTkUpOyAvLyBtYWtlIHBsYXllciBjbGljayBhZ2FpbiB0byBzZXQgZGlyZWN0aW9uXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFRoZXkgZGlkbid0IGNsaWNrIGEgc3F1YXJlIHRvIHBsYWNlIGEgc2VsZWN0ZWQgdGlsZSB0aGVyZVxyXG4gICAgICAvLyBUaGV5IGRpZG4ndCBjbGljayBhIHNxdWFyZSB0byByZW1vdmUgYW4gZXhpc3RpbmcgdGlsZVxyXG4gICAgICBpZiAobmV3U3F1YXJlQXJyYXlDZWxsLnVzZWRieSA9PT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAvLyBUaGVyZSBpcyBub3RoaW5nIG9uIHRoZSBzcXVhcmUgc28gdGhleSBhcmUgcGlja2luZyB3aGVyZSB0byBwbGFjZSB0aGUgbmV4dCB0aWxlIHZpYSBrZXlib2FyZFxyXG4gICAgICAgIGxldCBuZXdEaXJlY3Rpb24gPSByY2RbMF0gIT09IHJpIHx8IHJjZFsxXSAhPT0gY2kgPyBjLkRJUl9SSUdIVCA6IC8vY2xpY2sgbmV3IHNxdWFyZSwgc3RhcnQgd2l0aCByaWdodFxyXG4gICAgICAgICByY2RbMl0gPT09IGMuRElSX1JJR0hUID8gYy5ESVJfRE9XTiA6IC8vY2xpY2sgc2FtZSBzcXVhcmUgdGhhdCB3YXMgcmlnaHQsIGNoYW5nZSB0byBkb3duXHJcbiAgICAgICAgIHJjZFsyXSA9PT0gYy5ESVJfRE9XTiA/IGMuRElSX05PTkUgOiAvL2NsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIGRvd24sIGNoYW5nZSB0byBubyBkaXJlY3Rpb25cclxuICAgICAgICAgYy5ESVJfUklHSFQ7IC8vIGNsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIG5vIGRpcmVjdGlvbiwgY2hhbmdlIHRvIHJpZ2h0XHJcbiAgICAgICAgbmV3UmNkID0gW3JpLGNpLG5ld0RpcmVjdGlvbl07XHJcbiAgICAgICAgc2V0UmNkKG5ld1JjZCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlUmFja1RpbGVDbGljayA9ICh0aWxlaW5kZXgpID0+IHtcclxuICAgICAgLy8gSWYgbm8gdGlsZSBpcyBzZWxlY3RlZCBhbHJlYWR5IHRoZW4gc2V0IHRoZSBzZWxlY3Rpb25cclxuICAgICAgaWYgKHNlbGVjdGlvbiA9PT0gLTEpIHtcclxuICAgICAgICBzZXRTZWxlY3Rpb24odGlsZWluZGV4KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gSWYgdGhlIHNhbWUgdGlsZSBpcyBhbHJlYWR5IHNlbGVjdGVkIHRoZW4gdW5zZWxlY3RcclxuICAgICAgaWYgKHNlbGVjdGlvbiA9PT0gdGlsZWluZGV4KSB7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gQSB0aWxlIHdhcyBhbHJlYWR5IHNlbGVjdGVkIGFuZCB0aGV5IGNsaWNrZWQgYW5vdGhlciB0aWxlIC0gbW92ZSB0aGUgdGlsZVxyXG4gICAgICBsZXQgbmV3cmFjayA9IHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gWy4uLnB0aWxlc10gOiBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IG1vdmVmcm9tID0gc2VsZWN0aW9uO1xyXG4gICAgICBsZXQgbW92ZXRpbGUgPSBuZXdyYWNrW21vdmVmcm9tXTtcclxuICAgICAgbGV0IG1vdmV0byA9IHRpbGVpbmRleDtcclxuICAgICAgbmV3cmFjay5zcGxpY2UobW92ZWZyb20sIDEpOyAvLyByZW1vdmUgdGlsZSBmcm9tIG9yaWdpbmFsIHNlbGVjdGVkIHBvc2l0aW9uXHJcbiAgICAgIG5ld3JhY2suc3BsaWNlKG1vdmV0bywwLG1vdmV0aWxlKTsgLy8gaW5zZXJ0IG1vdmVkIHRpbGUgYXQgdGhlIG5ld2x5IHNlbGVjdGVkIHBvc2l0aW9uXHJcbiAgICAgIHBhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gc2V0UHRpbGVzKG5ld3JhY2spIDogc2V0R3RpbGVzKG5ld3JhY2spO1xyXG4gICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgZW5kUHJpc29uZXJzVHVybiA9ICgpID0+IHtcclxuICAgICAgaWYgKCFpc1BsYXlWYWxpZCgpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCByZXdpbmRJbmZvID0gZ2V0UmV3aW5kSW5mbygpO1xyXG4gICAgICBsZXQgbmV3UmVzY3VlcyA9IHJlc2N1ZXM7XHJcbiAgICAgIGxldCBlc2NhcGVoYXRjaGVzID0gW1xyXG4gICAgICAgIFwiMC0wXCIsXHJcbiAgICAgICAgXCIwLVwiICsgbWlkZGxlLFxyXG4gICAgICAgIFwiMC1cIiArIGVkZ2UsXHJcbiAgICAgICAgbWlkZGxlKyBcIi0wXCIsXHJcbiAgICAgICAgbWlkZGxlICsgXCItXCIgKyBlZGdlLFxyXG4gICAgICAgIGVkZ2UgKyBcIi0wXCIsXHJcbiAgICAgICAgZWRnZSArIFwiLVwiICsgbWlkZGxlLFxyXG4gICAgICAgIGVkZ2UgKyBcIi1cIiArIGVkZ2VcclxuICAgICAgXTsgLy8gY29vcmRzIG9mIGVzY2FwZSBoYXRjaGVzXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudGNvb3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChlc2NhcGVoYXRjaGVzLmluZGV4T2YoY3VycmVudGNvb3Jkc1tpXSkgPiAtMSkge1xyXG4gICAgICAgICAgbmV3UmVzY3VlcyA9IG5ld1Jlc2N1ZXMgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICAgIHdoaWxlIChuZXdQdGlsZXMubGVuZ3RoIDwgcmFja3NpemUgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgICBuZXdQdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIG5ld1B0aWxlcy5zb3J0KCk7XHJcbiAgICAgIGxldCBuZXdXaG9zZXR1cm4gPSBuZXdQdGlsZXMubGVuZ3RoID4gMCA/IGMuV0hPU0VfVFVSTl9HVUFSRFMgOiBjLldIT1NFX1RVUk5fR0FNRU9WRVI7XHJcbiAgICAgIGlmIChzcXVhcmVBcnJheVswXVswXS51c2VkYnkgICAgICAgICAhPT0gYy5VU0VEX0JZX05PTkUgJiZcclxuICAgICAgICAgIHNxdWFyZUFycmF5WzBdW21pZGRsZV0udXNlZGJ5ICAgICE9PSBjLlVTRURfQllfTk9ORSAmJlxyXG4gICAgICAgICAgc3F1YXJlQXJyYXlbMF1bZWRnZV0udXNlZGJ5ICAgICAgIT09IGMuVVNFRF9CWV9OT05FICYmXHJcbiAgICAgICAgICBzcXVhcmVBcnJheVttaWRkbGVdWzBdLnVzZWRieSAgICAhPT0gYy5VU0VEX0JZX05PTkUgJiZcclxuICAgICAgICAgIHNxdWFyZUFycmF5W21pZGRsZV1bZWRnZV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSAmJlxyXG4gICAgICAgICAgc3F1YXJlQXJyYXlbZWRnZV1bMF0udXNlZGJ5ICAgICAgIT09IGMuVVNFRF9CWV9OT05FICYmXHJcbiAgICAgICAgICBzcXVhcmVBcnJheVtlZGdlXVttaWRkbGVdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUgJiZcclxuICAgICAgICAgIHNxdWFyZUFycmF5W2VkZ2VdW2VkZ2VdLnVzZWRieSAgICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgIG5ld1dob3NldHVybiA9IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUjsgLy8gTm8gZXNjYXBlIGhhdGNoZXMgbGVmdFxyXG4gICAgICB9XHJcbiAgICAgIGxldCBwbGF5aW5mbyA9IGdldFBsYXlJbmZvKCk7XHJcbiAgICAgIGxldCBuZXdNb3ZlID0ge2J5OiBjLlBBUlRZX1RZUEVfUFJJU09ORVJTLCB0eXBlOiBjLk1PVkVfVFlQRV9QTEFZLCByZXdpbmRJbmZvOiByZXdpbmRJbmZvLCBtYWlud29yZDogcGxheWluZm8ubWFpbndvcmQsIGV4dHJhd29yZHM6IHBsYXlpbmZvLmV4dHJhd29yZHMsIHBvczogcGxheWluZm8ucG9zfTtcclxuICAgICAgbGV0IG5ld01vdmVzID0gWy4uLm1vdmVzLCBuZXdNb3ZlXTtcclxuICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgICAgc2V0UmVzY3VlcyhuZXdSZXNjdWVzKTtcclxuICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgIHNxdWFyZUFycmF5OiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNxdWFyZUFycmF5KSksXHJcbiAgICAgICAgcHRpbGVzOiBbLi4ubmV3UHRpbGVzXSxcclxuICAgICAgICBndGlsZXM6IFsuLi5ndGlsZXNdLFxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcImVwdFwiLCAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsXHJcbiAgICAgICAgICBzcXVhcmVBcnJheTogc3F1YXJlQXJyYXksIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgICBwdGlsZXM6IG5ld1B0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgcHJpc29uZXJzIHJhY2tcclxuICAgICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4sIC8vIG1heSBoYXZlIGVuZGVkIHRoZSBnYW1lXHJcbiAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgICBtb3ZlczogbmV3TW92ZXMsIC8vIGEgbW92ZSB3YXMgbWFkZVxyXG4gICAgICAgICAgcmVzY3VlczogbmV3UmVzY3VlcyAvLyBtYXkgaGF2ZSByZXNjdWVkIGFub3RoZXIgcHJpc29uZXJcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IGVuZEd1YXJkc1R1cm4gPSAoKSA9PiB7XHJcbiAgICAgIGlmICghaXNQbGF5VmFsaWQoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgcmV3aW5kSW5mbyA9IGdldFJld2luZEluZm8oKTtcclxuICAgICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgICB3aGlsZSAobmV3R3RpbGVzLmxlbmd0aCA8IHJhY2tzaXplICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgbmV3R3RpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgfVxyXG4gICAgICBuZXdHdGlsZXMuc29ydCgpO1xyXG4gICAgICBsZXQgc25hcHNxdWFyZWFycmF5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzcXVhcmVBcnJheSkpO1xyXG4gICAgICBsZXQgc25hcHB0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgICBsZXQgc25hcGd0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgICBsZXQgbmV3V2hvc2V0dXJuID0gbmV3R3RpbGVzLmxlbmd0aCA+IDAgPyBjLldIT1NFX1RVUk5fUFJJU09ORVJTIDogYy5XSE9TRV9UVVJOX0dBTUVPVkVSO1xyXG4gICAgICBpZiAoc3F1YXJlQXJyYXlbMF1bMF0udXNlZGJ5ICAgICAgICAgIT09IGMuVVNFRF9CWV9OT05FICYmXHJcbiAgICAgICAgICBzcXVhcmVBcnJheVswXVttaWRkbGVdLnVzZWRieSAgICAhPT0gYy5VU0VEX0JZX05PTkUgJiZcclxuICAgICAgICAgIHNxdWFyZUFycmF5WzBdW2VkZ2VdLnVzZWRieSAgICAgICE9PSBjLlVTRURfQllfTk9ORSAmJlxyXG4gICAgICAgICAgc3F1YXJlQXJyYXlbbWlkZGxlXVswXS51c2VkYnkgICAgIT09IGMuVVNFRF9CWV9OT05FICYmXHJcbiAgICAgICAgICBzcXVhcmVBcnJheVttaWRkbGVdW2VkZ2VdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUgJiZcclxuICAgICAgICAgIHNxdWFyZUFycmF5W2VkZ2VdWzBdLnVzZWRieSAgICAgICE9PSBjLlVTRURfQllfTk9ORSAmJlxyXG4gICAgICAgICAgc3F1YXJlQXJyYXlbZWRnZV1bbWlkZGxlXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FICYmXHJcbiAgICAgICAgICBzcXVhcmVBcnJheVtlZGdlXVtlZGdlXS51c2VkYnkgICAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICBuZXdXaG9zZXR1cm4gPSBjLldIT1NFX1RVUk5fR0FNRU9WRVI7IC8vIE5vIGVzY2FwZSBoYXRjaGVzIGxlZnRcclxuICAgICAgfVxyXG4gICAgICBsZXQgcGxheWluZm8gPSBnZXRQbGF5SW5mbygpO1xyXG4gICAgICBsZXQgbmV3TW92ZSA9IHtieTogYy5QQVJUWV9UWVBFX0dVQVJEUywgdHlwZTogYy5NT1ZFX1RZUEVfUExBWSwgcmV3aW5kSW5mbzogcmV3aW5kSW5mbywgbWFpbndvcmQ6IHBsYXlpbmZvLm1haW53b3JkLCBleHRyYXdvcmRzOiBwbGF5aW5mby5leHRyYXdvcmRzLCBwb3M6IHBsYXlpbmZvLnBvc307XHJcbiAgICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICBzcXVhcmVBcnJheTogc25hcHNxdWFyZWFycmF5LFxyXG4gICAgICAgIHB0aWxlczogc25hcHB0aWxlcyxcclxuICAgICAgICBndGlsZXM6IHNuYXBndGlsZXMsXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgIHNxdWFyZUFycmF5OiBzcXVhcmVBcnJheSwgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICAgIGd0aWxlczogbmV3R3RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBndWFyZHMgcmFja1xyXG4gICAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgICBtb3ZlczogbmV3TW92ZXMsIC8vIGEgbW92ZSB3YXMgbWFkZVxyXG4gICAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4sIC8vIG1heSBoYXZlIGVuZGVkIHRoZSBnYW1lXHJcbiAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfTtcclxuICBcclxuICAgIGNvbnN0IHN3YXBQcmlzb25lcnNUaWxlcyA9ICgpID0+IHtcclxuICAgICAgaWYgKHRpbGVzLmxlbmd0aCA8IHJhY2tzaXplKSB7XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwiTmVlZCBcIiArIHJhY2tzaXplICsgXCIgdGlsZXMgaW4gdGhlIGJhZyB0byBleGNoYW5nZVwiKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgcmV3aW5kSW5mbyA9IGdldFJld2luZEluZm8oKTtcclxuICAgICAgbGV0IG5ld1B0aWxlcyA9IFtdO1xyXG4gICAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgICB3aGlsZSAobmV3UHRpbGVzLmxlbmd0aCA8IHJhY2tzaXplICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgbmV3UHRpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgfVxyXG4gICAgICBuZXdQdGlsZXMuc29ydCgpO1xyXG4gICAgICBuZXdUaWxlcyA9IFsuLi5uZXdUaWxlcywgLi4uc25hcHNob3QucHRpbGVzXTtcclxuICAgICAgbmV3VGlsZXMuc29ydCgpO1xyXG4gICAgICBsZXQgbmV3TW92ZSA9IHtieTogYy5QQVJUWV9UWVBFX1BSSVNPTkVSUywgdHlwZTogYy5NT1ZFX1RZUEVfU1dBUCwgcmV3aW5kSW5mbzogcmV3aW5kSW5mb307XHJcbiAgICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgIHNldFNxdWFyZUFycmF5KFsuLi5zbmFwc2hvdC5zcXVhcmVBcnJheV0pO1xyXG4gICAgICBzZXRXaG9zZXR1cm4oYy5XSE9TRV9UVVJOX0dVQVJEUyk7XHJcbiAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgIHNxdWFyZUFycmF5OiBbLi4uc25hcHNob3Quc3F1YXJlQXJyYXldLFxyXG4gICAgICAgIHB0aWxlczogWy4uLm5ld1B0aWxlc10sXHJcbiAgICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgZnVuYzogXCJlcHRcIiwgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LFxyXG4gICAgICAgICAgd2hvc2V0dXJuOiBjLldIT1NFX1RVUk5fR1VBUkRTLCAvLyBzd2FwIG5ldmVyIGVuZHMgdGhlIGdhbWUgc28gZ28gdG8gb3Bwb25lbnRcclxuICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgIHNxdWFyZUFycmF5OiBzbmFwc2hvdC5zcXVhcmVBcnJheSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgICAgcHRpbGVzOiBuZXdQdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICAgIG1vdmVzOiBuZXdNb3ZlcywgLy8gYSBtb3ZlIHdhcyBtYWRlXHJcbiAgICAgICAgICByZXNjdWVzOiByZXNjdWVzIC8vIG5vIHJlc2N1ZXMgb24gYW4gZXhjaGFuZ2VcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBzd2FwR3VhcmRzVGlsZXMgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSkge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcIk5lZWQgXCIgKyByYWNrc2l6ZSArIFwiIHRpbGVzIGluIHRoZSBiYWcgdG8gZXhjaGFuZ2VcIilcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHJld2luZEluZm8gPSBnZXRSZXdpbmRJbmZvKCk7XHJcbiAgICAgIGxldCBuZXdHdGlsZXMgPSBbXTtcclxuICAgICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgICAgd2hpbGUgKG5ld0d0aWxlcy5sZW5ndGggPCByYWNrc2l6ZSAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIG5ld0d0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgbmV3R3RpbGVzLnNvcnQoKTtcclxuICAgICAgbmV3VGlsZXMgPSBbLi4ubmV3VGlsZXMsIC4uLnNuYXBzaG90Lmd0aWxlc107XHJcbiAgICAgIG5ld1RpbGVzLnNvcnQoKTtcclxuICAgICAgbGV0IG5ld01vdmUgPSB7Ynk6IGMuUEFSVFlfVFlQRV9HVUFSRFMsIHR5cGU6IGMuTU9WRV9UWVBFX1NXQVAsIHJld2luZEluZm86IHJld2luZEluZm99O1xyXG4gICAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICBzZXRTcXVhcmVBcnJheShbLi4uc25hcHNob3Quc3F1YXJlQXJyYXldKTtcclxuICAgICAgc2V0V2hvc2V0dXJuKGMuV0hPU0VfVFVSTl9QUklTT05FUlMpO1xyXG4gICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgICBzZXRNb3ZlcyhuZXdNb3Zlcyk7XHJcbiAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICBzcXVhcmVBcnJheTogWy4uLnNuYXBzaG90LnNxdWFyZUFycmF5XSxcclxuICAgICAgICBwdGlsZXM6IFsuLi5wdGlsZXNdLFxyXG4gICAgICAgIGd0aWxlczogWy4uLm5ld0d0aWxlc10sXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgIHdob3NldHVybjogYy5XSE9TRV9UVVJOX1BSSVNPTkVSUywgLy8gc3dhcCBuZXZlciBlbmRzIHRoZSBnYW1lIHNvIGdvIHRvIG9wcG9uZW50XHJcbiAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgICBzcXVhcmVBcnJheTogc25hcHNob3Quc3F1YXJlQXJyYXksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICAgIGd0aWxlczogbmV3R3RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgICBtb3ZlczogbmV3TW92ZXMgLy8gYSBtb3ZlIHdhcyBtYWRlXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICBcclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIGlzUGxheVZhbGlkKCkge1xyXG4gICAgICBpZiAoc3F1YXJlQXJyYXlbbWlkZGxlXVttaWRkbGVdLnVzZWRieSA9PT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJGaXJzdCBwbGF5IG11c3QgaGl0IGNlbnRlciBzcXVhcmVcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBudW1yb3dzID0gZWRnZSsxO1xyXG4gICAgICBsZXQgbnVtY29scyA9IGVkZ2UrMTtcclxuICAgICAgbGV0IGxvd3JvdyA9IG51bXJvd3M7XHJcbiAgICAgIGxldCBoaWdocm93ID0gLTE7XHJcbiAgICAgIGxldCBsb3djb2wgPSBudW1jb2xzO1xyXG4gICAgICBsZXQgaGlnaGNvbCA9IC0xO1xyXG4gICAgICBmb3IgKHZhciB0ZW1wcm93PTA7IHRlbXByb3cgPCBudW1yb3dzOyArK3RlbXByb3cpIHtcclxuICAgICAgICBmb3IgKHZhciB0ZW1wY29sPTA7IHRlbXBjb2wgPCBudW1jb2xzOyArK3RlbXBjb2wpIHtcclxuICAgICAgICAgIGlmIChzcXVhcmVBcnJheVt0ZW1wcm93XVt0ZW1wY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICAgIGlmICghKHRlbXByb3cgPiAwICYmIHNxdWFyZUFycmF5W3RlbXByb3ctMV1bdGVtcGNvbF0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgJiZcclxuICAgICAgICAgICAgICEodGVtcGNvbCA+IDAgJiYgc3F1YXJlQXJyYXlbdGVtcHJvd11bdGVtcGNvbC0xXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSAmJlxyXG4gICAgICAgICAgICAgISh0ZW1wcm93IDwgZWRnZSAmJiBzcXVhcmVBcnJheVt0ZW1wcm93KzFdW3RlbXBjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpICYmXHJcbiAgICAgICAgICAgICAhKHRlbXBjb2wgPCBlZGdlICYmIHNxdWFyZUFycmF5W3RlbXByb3ddW3RlbXBjb2wrMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSlcclxuICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIkVhY2ggcGxheWVkIHRpbGUgbXVzdCBiZSBwYXJ0IG9mIGEgd29yZFwiKTtcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBpZiAoc25hcHNob3Quc3F1YXJlQXJyYXlbdGVtcHJvd11bdGVtcGNvbF0udXNlZGJ5ID09PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgICAgICAvLyBUaGlzIHNxdWFyZSB3YXMgcGxheWVkIG9uIHRoaXMgdHVyblxyXG4gICAgICAgICAgICAgICBpZiAodGVtcHJvdyA8IGxvd3JvdykgeyBsb3dyb3cgPSB0ZW1wcm93O31cclxuICAgICAgICAgICAgICAgaWYgKHRlbXByb3cgPiBoaWdocm93KSB7IGhpZ2hyb3cgPSB0ZW1wcm93O31cclxuICAgICAgICAgICAgICAgaWYgKHRlbXBjb2wgPCBsb3djb2wpIHsgbG93Y29sID0gdGVtcGNvbDt9XHJcbiAgICAgICAgICAgICAgIGlmICh0ZW1wY29sID4gaGlnaGNvbCkgeyBoaWdoY29sID0gdGVtcGNvbDt9XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChsb3dyb3cgPT09IG51bXJvd3MpIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXCJZb3UgZGlkbid0IHBsYXkgYW55IHRpbGVzXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobG93cm93ICE9PSBoaWdocm93ICYmIGxvd2NvbCAhPT0gaGlnaGNvbCkge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcIlRpbGVzIHBsYXllZCBtdXN0IGJlIGluIGEgc3RyYWlnaHQgbGluZVwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHBsYXl0aHJ1ID0gZmFsc2U7XHJcbiAgICAgIGxldCBob29rbWFkZSA9IGZhbHNlO1xyXG4gICAgICBmb3IgKHZhciB0ZW1wcm93ID0gbG93cm93OyB0ZW1wcm93IDw9IGhpZ2hyb3c7ICsrdGVtcHJvdykge1xyXG4gICAgICAgIGZvciAodmFyIHRlbXBjb2wgPSBsb3djb2w7IHRlbXBjb2wgPD0gaGlnaGNvbDsgKyt0ZW1wY29sKSB7XHJcbiAgICAgICAgICBpZiAoc3F1YXJlQXJyYXlbdGVtcHJvd11bdGVtcGNvbF0udXNlZGJ5ID09PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJUaGVyZSBpcyBhIGdhcCBpbiB5b3VyIHdvcmRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChzbmFwc2hvdC5zcXVhcmVBcnJheVt0ZW1wcm93XVt0ZW1wY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICAgIHBsYXl0aHJ1ID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgdGVtcHJvdyA+IDAgJiYgc3F1YXJlQXJyYXlbdGVtcHJvdy0xXVt0ZW1wY29sXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiB0ZW1wcm93IDwgZWRnZSAmJiBzcXVhcmVBcnJheVt0ZW1wcm93KzFdW3RlbXBjb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIHRlbXBjb2wgPiAwICYmIHNxdWFyZUFycmF5W3RlbXByb3ddW3RlbXBjb2wtMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgdGVtcGNvbCA8IGVkZ2UgJiYgc3F1YXJlQXJyYXlbdGVtcHJvd11bdGVtcGNvbCsxXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBDaGVjayBwbGF5IHRvIG9yIGZyb20gYSB0aWxlIChwbGF5IHRocm91Z2ggYnV0IG5vdCBlaXRoZXIgc2lkZSlcclxuICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiBsb3djb2wgPiAwICYmIHNuYXBzaG90LnNxdWFyZUFycmF5W2xvd3Jvd11bbG93Y29sLTFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgaGlnaGNvbCA8IGVkZ2UgJiYgc25hcHNob3Quc3F1YXJlQXJyYXlbbG93cm93XVtoaWdoY29sKzFdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgbG93cm93ID4gMCAmJiBzbmFwc2hvdC5zcXVhcmVBcnJheVtsb3dyb3ctMV1bbG93Y29sXSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgaGlnaHJvdyA8IGVkZ2UgJiYgc25hcHNob3Quc3F1YXJlQXJyYXlbaGlnaHJvdysxXVtsb3djb2xdLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICAgIGlmICghcGxheXRocnUgJiYgIWhvb2ttYWRlICYmIHNuYXBzaG90LnNxdWFyZUFycmF5W21pZGRsZV1bbWlkZGxlXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwiV29yZHMgbXVzdCBiZSBjb25uZWN0ZWRcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gZ2V0UGxheUluZm8oKSB7XHJcbiAgICAgIGxldCBwbGF5aW5mbyA9IHt9O1xyXG4gICAgICBsZXQgbWFpbndvcmQgPSBcIlwiO1xyXG4gICAgICBsZXQgZXh0cmF3b3JkcyA9IFtdO1xyXG4gICAgICBsZXQgd29yZHN0YXJ0Y29vcmQgPSBcIlwiO1xyXG4gICAgICBsZXQgbnVtcm93cyA9IGVkZ2UrMTtcclxuICAgICAgbGV0IG51bWNvbHMgPSBlZGdlKzE7XHJcbiAgICAgIGxldCBsb3dyb3cgPSBudW1yb3dzO1xyXG4gICAgICBsZXQgaGlnaHJvdyA9IC0xO1xyXG4gICAgICBsZXQgbG93Y29sID0gbnVtY29scztcclxuICAgICAgbGV0IGhpZ2hjb2wgPSAtMTtcclxuICAgICAgbGV0IG51bWNvb3JkcyA9IGN1cnJlbnRjb29yZHMubGVuZ3RoO1xyXG4gICAgICBmb3IgKHZhciBjb29yZD0wOyBjb29yZCA8IG51bWNvb3JkczsgKytjb29yZCkge1xyXG4gICAgICAgIGxldCByb3cgPSBwYXJzZUludChjdXJyZW50Y29vcmRzW2Nvb3JkXS5zcGxpdChcIi1cIilbMF0pO1xyXG4gICAgICAgIGxldCBjb2wgPSBwYXJzZUludChjdXJyZW50Y29vcmRzW2Nvb3JkXS5zcGxpdChcIi1cIilbMV0pO1xyXG4gICAgICAgIGlmIChyb3cgPCBsb3dyb3cpIHtcclxuICAgICAgICAgIGxvd3JvdyA9IHJvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvdyA+IGhpZ2hyb3cpIHtcclxuICAgICAgICAgIGhpZ2hyb3cgPSByb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2wgPCBsb3djb2wpIHtcclxuICAgICAgICAgIGxvd2NvbCA9IGNvbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbCA+IGhpZ2hjb2wpIHtcclxuICAgICAgICAgIGhpZ2hjb2wgPSBjb2w7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChsb3dyb3cgPCBoaWdocm93IHx8IG51bWNvb3JkcyA9PT0gMSkgeyAvLyB0aWxlcyBwbGFjZWQgb24gZGlmZmVyZW5jZSByb3dzIHNvIHBsYXkgaXMgdmVydGljYWwsIG9yIHNpbmdsZSB0aWxlIHBsYXllZFxyXG4gICAgICAgIGxldCBjb2wgPSBsb3djb2w7IC8vIGxvd2NvbCBhbmQgaGlnaGNvbCB3aWxsIGhhdmUgdGhlIHNhbWUgdmFsdWVcclxuICAgICAgICAvLyBmaW5kIHRoZSBsb3dlc3Qgcm93IG51bWJlciBvZiB0aGUgbWFpbiB3b3JkLCB3aGljaCBtYXkgYmUgbG93ZXIgdGhhbiB0aGF0IG9mIHRoZSBmaXJzdCBwbGF5ZWQgdGlsZVxyXG4gICAgICAgIGxldCBsb3dlc3Ryb3cgPSBsb3dyb3c7XHJcbiAgICAgICAgd2hpbGUgKGxvd2VzdHJvdyA+IDAgJiYgc3F1YXJlQXJyYXlbbG93ZXN0cm93LTFdW2NvbF0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgbG93ZXN0cm93ID0gbG93ZXN0cm93IC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZmluZCB0aGUgaGlnaGVzdCByb3cgbnVtYmVyIG9mIHRoZSBtYWluIHdvcmQsIHdoaWNoIG1heSBiZSBoaWdoZXIgdGhhbiB0aGF0IG9mIHRoZSBsYXN0IHBsYXllZCB0aWxlXHJcbiAgICAgICAgbGV0IGhpZ2hlc3Ryb3cgPSBoaWdocm93O1xyXG4gICAgICAgIHdoaWxlIChoaWdoZXN0cm93IDwgZWRnZSAmJiBzcXVhcmVBcnJheVtoaWdoZXN0cm93KzFdW2NvbF0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgaGlnaGVzdHJvdyA9IGhpZ2hlc3Ryb3cgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3b3Jkc3RhcnRjb29yZCA9IGMuQk9BUkRfQ09MX0hFQURFUlNbY29sXSArIGMuQk9BUkRfUk9XX0hFQURFUlNbbG93ZXN0cm93XTsgLy8gdmVydGljYWwgcGxheSBjb29yZHMgc3RhcnQgd2l0aCBjb2wgaGVhZGVyXHJcbiAgICAgICAgZm9yICh2YXIgcm93ID0gbG93ZXN0cm93OyByb3cgPD0gaGlnaGVzdHJvdzsgKytyb3cpIHtcclxuICAgICAgICAgIG1haW53b3JkID0gbWFpbndvcmQgKyBzcXVhcmVBcnJheVtyb3ddW2NvbF0ubGV0dGVyO1xyXG4gICAgICAgICAgbGV0IGNvb3JkID0gcm93ICsgXCItXCIgKyBjb2w7XHJcbiAgICAgICAgICBpZiAoY3VycmVudGNvb3Jkcy5pbmRleE9mKGNvb3JkKSA+IC0xKSB7IC8vIFRoaXMgdGlsZSB3YXMgcGxheWVkLCBjaGVjayBmb3IgaG9va3NcclxuICAgICAgICAgICAgbGV0IGxvd2VzdGNvbCA9IGNvbDtcclxuICAgICAgICAgICAgd2hpbGUgKGxvd2VzdGNvbCA+IDAgJiYgc3F1YXJlQXJyYXlbcm93XVtsb3dlc3Rjb2wtMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgICAgIGxvd2VzdGNvbCA9IGxvd2VzdGNvbCAtIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGhpZ2hlc3Rjb2wgPSBjb2w7XHJcbiAgICAgICAgICAgIHdoaWxlIChoaWdoZXN0Y29sIDwgZWRnZSAmJiBzcXVhcmVBcnJheVtyb3ddW2hpZ2hlc3Rjb2wrMV0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgICAgIGhpZ2hlc3Rjb2wgPSBoaWdoZXN0Y29sICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobG93ZXN0Y29sIDwgaGlnaGVzdGNvbCkgeyAvLyBob29rIHdhcyBtYWRlXHJcbiAgICAgICAgICAgICAgbGV0IGV4dHJhd29yZCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgdGVtcGNvbCA9IGxvd2VzdGNvbDsgdGVtcGNvbCA8PSBoaWdoZXN0Y29sOyArK3RlbXBjb2wpIHtcclxuICAgICAgICAgICAgICAgIGV4dHJhd29yZCA9IGV4dHJhd29yZCArIHNxdWFyZUFycmF5W3Jvd11bdGVtcGNvbF0ubGV0dGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBleHRyYXdvcmRzID0gWy4uLmV4dHJhd29yZHMsIGV4dHJhd29yZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1haW53b3JkLmxlbmd0aCA8IDIpIHsgLy8gSG9yaXpvbnRhbCBwbGF5IG9yIHNpbmdsZSB0aWxlIGRyb3AgdGhhdCBjYW5ub3QgYmUgYSB2ZXJ0aWNhbCBwbGF5XHJcbiAgICAgICAgbGV0IHJvdyA9IGxvd3JvdzsgLy8gbG93cm93IGFuZCBoaWdocm93IHdpbGwgaGF2ZSB0aGUgc2FtZSB2YWx1ZVxyXG4gICAgICAgIC8vIGZpbmQgdGhlIGxvd2VzdCBjb2wgbnVtYmVyIG9mIHRoZSBtYWluIHdvcmQsIHdoaWNoIG1heSBiZSBsb3dlciB0aGFuIHRoYXQgb2YgdGhlIGZpcnN0IHBsYXllZCB0aWxlXHJcbiAgICAgICAgbGV0IGxvd2VzdGNvbCA9IGxvd2NvbDtcclxuICAgICAgICB3aGlsZSAobG93ZXN0Y29sID4gMCAmJiBzcXVhcmVBcnJheVtyb3ddW2xvd2VzdGNvbC0xXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICBsb3dlc3Rjb2wgPSBsb3dlc3Rjb2wgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmaW5kIHRoZSBoaWdoZXN0IGNvbCBudW1iZXIgb2YgdGhlIG1haW4gd29yZCwgd2hpY2ggbWF5IGJlIGhpZ2hlciB0aGFuIHRoYXQgb2YgdGhlIGxhc3QgcGxheWVkIHRpbGVcclxuICAgICAgICBsZXQgaGlnaGVzdGNvbCA9IGhpZ2hjb2w7XHJcbiAgICAgICAgd2hpbGUgKGhpZ2hlc3Rjb2wgPCBlZGdlICYmIHNxdWFyZUFycmF5W3Jvd11baGlnaGVzdGNvbCsxXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICBoaWdoZXN0Y29sID0gaGlnaGVzdGNvbCArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdvcmRzdGFydGNvb3JkID0gYy5CT0FSRF9ST1dfSEVBREVSU1tyb3ddICsgYy5CT0FSRF9DT0xfSEVBREVSU1tsb3dlc3Rjb2xdOyAvLyBob3Jpem9udGFsIHBsYXkgY29vcmRzIHN0YXJ0IHdpdGggcm93IGhlYWRlclxyXG4gICAgICAgIG1haW53b3JkID0gXCJcIjsgLy8gSW4gY2FzZSB3ZSBnb3QgYSAxIGxldHRlciBtYWlud29yZCBpbiB0aGUgcHJldmlvdXMgYmxvY2tcclxuICAgICAgICBleHRyYXdvcmRzID0gW107IC8vIERpdHRvXHJcbiAgICAgICAgZm9yICh2YXIgY29sID0gbG93ZXN0Y29sOyBjb2wgPD0gaGlnaGVzdGNvbDsgKytjb2wpIHtcclxuICAgICAgICAgIG1haW53b3JkID0gbWFpbndvcmQgKyBzcXVhcmVBcnJheVtyb3ddW2NvbF0ubGV0dGVyO1xyXG4gICAgICAgICAgbGV0IGNvb3JkID0gcm93ICsgXCItXCIgKyBjb2w7XHJcbiAgICAgICAgICBpZiAoY3VycmVudGNvb3Jkcy5pbmRleE9mKGNvb3JkKSA+IC0xKSB7IC8vIFRoaXMgdGlsZSB3YXMgcGxheWVkLCBjaGVjayBmb3IgaG9va3NcclxuICAgICAgICAgICAgbGV0IGxvd2VzdHJvdyA9IHJvdztcclxuICAgICAgICAgICAgd2hpbGUgKGxvd2VzdHJvdyA+IDAgJiYgc3F1YXJlQXJyYXlbbG93ZXN0cm93LTFdW2NvbF0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgICAgIGxvd2VzdHJvdyA9IGxvd2VzdHJvdyAtIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGhpZ2hlc3Ryb3cgPSByb3c7XHJcbiAgICAgICAgICAgIHdoaWxlIChoaWdoZXN0cm93IDwgZWRnZSAmJiBzcXVhcmVBcnJheVtoaWdoZXN0cm93KzFdW2NvbF0udXNlZGJ5ICE9PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgICAgIGhpZ2hlc3Ryb3cgPSBoaWdoZXN0cm93ICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobG93ZXN0cm93IDwgaGlnaGVzdHJvdykgeyAvLyBob29rIHdhcyBtYWRlXHJcbiAgICAgICAgICAgICAgbGV0IGV4dHJhd29yZCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgdGVtcHJvdyA9IGxvd2VzdHJvdzsgdGVtcHJvdyA8PSBoaWdoZXN0cm93OyArK3RlbXByb3cpIHtcclxuICAgICAgICAgICAgICAgIGV4dHJhd29yZCA9IGV4dHJhd29yZCArIHNxdWFyZUFycmF5W3RlbXByb3ddW2NvbF0ubGV0dGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBleHRyYXdvcmRzID0gWy4uLmV4dHJhd29yZHMsIGV4dHJhd29yZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcGxheWluZm8gPSB7bWFpbndvcmQ6IG1haW53b3JkLCBleHRyYXdvcmRzOiBleHRyYXdvcmRzLCBwb3M6IHdvcmRzdGFydGNvb3JkfTtcclxuICAgICAgcmV0dXJuIHBsYXlpbmZvO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gZ2V0UmV3aW5kSW5mbygpIHsgLy8gTXVzdCBiZSBjYWxsZWQgYmVmb3JlIHlvdSBzdGFydCBzZXR0aW5nIG5ldyB2YWx1ZXMgZm9yIHN0dWZmXHJcbiAgICAgIC8qIFJld2luZCBpbmZvIGlzIGV2ZXJ5dGhpbmcgeW91IG5lZWQgdG8gcmV2ZXJzZSB0aGUgbW92ZSB0aGF0IHdlIGRvIG5vdCBhbHJlYWR5IGhhdmUgaW4gdGhlIG5ldyBtb3ZlIHZhcmlhYmxlOlxyXG4gICAgICAgICAgc3F1YXJlQXJyYXk6IHNheXMgd2hhdCB0aWxlIGlzIG9uIHdoYXQgc3F1YXJlIGFuZCB3aG8gcGxheWVkIGl0IGFuZCB3aGF0IHRoZSByb3cgYW5kIGNvbCBhcmVcclxuICAgICAgICAgIHJhY2s6IHBsYXllcnMgcmFjayBiZWZvcmUgbW92ZSB3YXMgbWFkZSBcclxuICAgICAgICAgIHRpbGVzOiB0aWxlIHBvb2wgYmVmb3JlIHBpY2tpbmcgbmV3IHRpbGVzXHJcbiAgICAgICAgICByZXNjdWVzOiByZXNjdWUgY291bnRcclxuICAgICAgKi9cclxuICAgICAgbGV0IHJld2luZEluZm8gPSB7XHJcbiAgICAgICAgc3F1YXJlQXJyYXk6IFsuLi5zbmFwc2hvdC5zcXVhcmVBcnJheV0sXHJcbiAgICAgICAgcmFjazogd2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fR1VBUkRTID8gWy4uLnNuYXBzaG90Lmd0aWxlc106IFsuLi5zbmFwc2hvdC5wdGlsZXNdLFxyXG4gICAgICAgIHRpbGVzOiBbLi4udGlsZXNdLFxyXG4gICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXNcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuIHJld2luZEluZm87XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhbGxvd1VuZG9MYXN0VHVybigpIHtcclxuICAgICAgaWYgKCFhbGxvd1Jld2luZCkge1xyXG4gICAgICAgIHNldEFsbG93UmV3aW5kKHRydWUpO1xyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICAgIGZ1bmM6IFwiYWxsb3d1bmRvXCIsIC8vIGFsbG93IHVuZG8gbGFzdCB0dXJuXHJcbiAgICAgICAgICAgIHJhY2tzaXplOiByYWNrc2l6ZSwgLy8gcmFjayBzaXplIG9wdGlvbiAobG9iYnkgbmVlZHMgdG8ga25vdyBmb3Igd2hlbiBndWFyZHMgam9pbiBnYW1lIGFuZCB0aGV5IGNhbGwgR2FtZSlcclxuICAgICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCAvLyB3aG8gaXMgYWxsb3dpbmcgaXRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBwZXJmb3JtUmV3aW5kKCkge1xyXG4gICAgICAvKiBSZXdpbmQgdGhlIGxhc3QgbW92ZSBhbmQgdGFrZSBpdCBvZmYgdGhlIGVuZCBvZiB0aGUgbW92ZSBsaXN0ICovXHJcbiAgICAgIGxldCBudW1Nb3ZlcyA9IG1vdmVzLmxlbmd0aDtcclxuICAgICAgbGV0IGxhc3RNb3ZlID0gbW92ZXNbbW92ZXMubGVuZ3RoLTFdO1xyXG4gICAgICBsZXQgbmV3U3F1YXJlQXJyYXkgPSBbLi4ubGFzdE1vdmUucmV3aW5kSW5mby5zcXVhcmVBcnJheV07XHJcbiAgICAgIGxldCBuZXdUaWxlcyA9IFsuLi5sYXN0TW92ZS5yZXdpbmRJbmZvLnRpbGVzXTtcclxuICAgICAgbGV0IG5ld1B0aWxlcyA9IGxhc3RNb3ZlLmJ5ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gWy4uLmxhc3RNb3ZlLnJld2luZEluZm8ucmFja10gOiBbLi4ucHRpbGVzXTtcclxuICAgICAgbGV0IG5ld0d0aWxlcyA9IGxhc3RNb3ZlLmJ5ID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTID8gWy4uLmxhc3RNb3ZlLnJld2luZEluZm8ucmFja10gOiBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IG5ld1Jlc2N1ZXMgPSBsYXN0TW92ZS5yZXdpbmRJbmZvLnJlc2N1ZXM7XHJcbiAgICAgIGxldCBuZXdXaG9zZXR1cm4gPSBsYXN0TW92ZS5ieTsgLy8gQmFjayB0byB0aGVpciB0dXJuXHJcbiAgICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3Zlc107XHJcbiAgICAgIG5ld01vdmVzLnNwbGljZShudW1Nb3Zlcy0xLDEpO1xyXG4gICAgICBsZXQgbmV3U25hcHNob3QgPSB7XHJcbiAgICAgICAgc3F1YXJlQXJyYXk6IFsuLi5uZXdTcXVhcmVBcnJheV0sXHJcbiAgICAgICAgZ3RpbGVzOiBbLi4ubmV3R3RpbGVzXSxcclxuICAgICAgICBwdGlsZXM6IFsuLi5uZXdQdGlsZXNdXHJcbiAgICAgIH07XHJcbiAgICAgIHB1dEF0TW92ZVN0YXJ0KCk7XHJcbiAgICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICBzZXRTcXVhcmVBcnJheShbLi4ubmV3U3F1YXJlQXJyYXldKTtcclxuICAgICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICAgIHNldFJlc2N1ZXMobmV3UmVzY3Vlcyk7XHJcbiAgICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgICAgc2V0U25hcHNob3QobmV3U25hcHNob3QpO1xyXG4gICAgICAvLyBKdXN0IHNlbmQgZXZlcnl0aGluZyBldmVuIHRob3VnaCBzb21lIGNvdWxkIGJlIGhhcmQgY29kZWQgaW4gcHJvY2Vzc01lc3NhZ2UgYnkgb3Bwb25lbnRcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcInVuZG90dXJuXCIsIC8vIHVuZG8gbGFzdCB0dXJuXHJcbiAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LFxyXG4gICAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB0aWxlIHBvb2xcclxuICAgICAgICAgIHB0aWxlczogbmV3UHRpbGVzLCAvLyBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgICAgZ3RpbGVzOiBuZXdHdGlsZXMsIC8vIGd1YXJkcyByYWNrXHJcbiAgICAgICAgICBzcXVhcmVBcnJheTogbmV3U3F1YXJlQXJyYXksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuLCAvLyBzd2FwIG5ldmVyIGVuZHMgdGhlIGdhbWUgc28gZ28gdG8gb3Bwb25lbnRcclxuICAgICAgICAgIHJlc2N1ZXM6IG5ld1Jlc2N1ZXMsIC8vIHJlc2N1ZSBjb3VudFxyXG4gICAgICAgICAgbW92ZXM6IG5ld01vdmVzLCAvLyBhIG1vdmUgd2FzIG1hZGVcclxuICAgICAgICAgIHNuYXBzaG90OiBuZXdTbmFwc2hvdFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCByZWNhbGxUaWxlcyA9ICgpID0+IHtcclxuICAgICAgc2V0U3F1YXJlQXJyYXkoWy4uLnNuYXBzaG90LnNxdWFyZUFycmF5XSk7XHJcbiAgICAgIHNldFB0aWxlcyhbLi4uc25hcHNob3QucHRpbGVzXSk7XHJcbiAgICAgIHNldEd0aWxlcyhbLi4uc25hcHNob3QuZ3RpbGVzXSk7XHJcbiAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgICBzZXRSY2QoWy0xLC0xLGMuRElSX05PTkVdKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBwcmlzb25lclBhc3MgPSAoKSA9PiB7XHJcbiAgICAgIGxldCByZXdpbmRJbmZvID0gZ2V0UmV3aW5kSW5mbygpO1xyXG4gICAgICBsZXQgbmV3TW92ZSA9IHtieTogYy5QQVJUWV9UWVBFX1BSSVNPTkVSUywgdHlwZTogYy5NT1ZFX1RZUEVfUEFTUywgcmV3aW5kSW5mbzogcmV3aW5kSW5mb307XHJcbiAgICAgIGxldCBuZXdNb3ZlcyA9IFsuLi5tb3ZlcywgbmV3TW92ZV07XHJcbiAgICAgIGxldCBuZXdXaG9zZXR1cm4gPSBpc0RvdWJsZVBhc3MobmV3TW92ZXMpID8gYy5XSE9TRV9UVVJOX0dBTUVPVkVSIDogYy5XSE9TRV9UVVJOX0dVQVJEUzsgLy8gSWYgYm90aCBwbGF5ZXJzIHBhc3MgdGhlbiBlbmQgdGhlIGdhbWVcclxuICAgICAgcmVjYWxsVGlsZXMoKTsgLy8gSW4gY2FzZSB0aGV5IHB1dCBzb21lIHRpbGVzIG9uIHRoZSBib2FyZCBiZWZvcmUgY2xpY2tpbmcgUGFzc1xyXG4gICAgICBwdXRBdE1vdmVTdGFydCgpO1xyXG4gICAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgICAgc2V0TW92ZXMobmV3TW92ZXMpO1xyXG4gICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLCAvLyBwbGF5ZXIgbmlja25hbWVcclxuICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgIGZ1bmM6IFwiZXB0XCIsIC8vIGVuZCBwcmlzb25lcnMgdHVyblxyXG4gICAgICAgICAgc2VuZGVyOiBwYXJ0aWNpcGFudCxcclxuICAgICAgICAgIHNxdWFyZUFycmF5OiBzbmFwc2hvdC5zcXVhcmVBcnJheSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgICAgcHRpbGVzOiBzbmFwc2hvdC5wdGlsZXMsIC8vIHByaXNvbmVycyByYWNrIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgICB0aWxlczogdGlsZXMsIC8vIHRpbGUgcG9vbCBkaWQgbm90IGNoYW5nZVxyXG4gICAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4sIC8vIG1heSBoYXZlIGVuZGVkIHRoZSBnYW1lXHJcbiAgICAgICAgICByYWNrc2l6ZTogcmFja3NpemUsIC8vIHJhY2sgc2l6ZSBvcHRpb24gKGxvYmJ5IG5lZWRzIHRvIGtub3cgZm9yIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSBhbmQgdGhleSBjYWxsIEdhbWUpXHJcbiAgICAgICAgICBtb3ZlczogbmV3TW92ZXMsIC8vIGEgbW92ZSB3YXMgbWFkZVxyXG4gICAgICAgICAgcmVzY3VlczogcmVzY3VlcyAvLyBubyByZXNjdWVzIG9uIGEgcGFzc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBndWFyZHNQYXNzID0gKCkgPT4ge1xyXG4gICAgICBsZXQgcmV3aW5kSW5mbyA9IGdldFJld2luZEluZm8oKTtcclxuICAgICAgbGV0IG5ld01vdmUgPSB7Ynk6IGMuUEFSVFlfVFlQRV9HVUFSRFMsIHR5cGU6IGMuTU9WRV9UWVBFX1BBU1MsIHJld2luZEluZm86IHJld2luZEluZm99O1xyXG4gICAgICBsZXQgbmV3TW92ZXMgPSBbLi4ubW92ZXMsIG5ld01vdmVdO1xyXG4gICAgICBsZXQgbmV3V2hvc2V0dXJuID0gaXNEb3VibGVQYXNzKG5ld01vdmVzKSA/IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUiA6IGMuV0hPU0VfVFVSTl9QUklTT05FUlM7IC8vIElmIGJvdGggcGxheWVycyBwYXNzIHRoZW4gZW5kIHRoZSBnYW1lXHJcbiAgICAgIHJlY2FsbFRpbGVzKCk7IC8vIEluIGNhc2UgdGhleSBwdXQgc29tZSB0aWxlcyBvbiB0aGUgYm9hcmQgYmVmb3JlIGNsaWNraW5nIFBhc3NcclxuICAgICAgcHV0QXRNb3ZlU3RhcnQoKTtcclxuICAgICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICAgIHNldE1vdmVzKG5ld01vdmVzKTtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBmdW5jOiBcImVndFwiLCAvLyBlbmQgZ3VhcmRzIHR1cm5cclxuICAgICAgICAgIHNlbmRlcjogcGFydGljaXBhbnQsXHJcbiAgICAgICAgICBzcXVhcmVBcnJheTogc25hcHNob3Quc3F1YXJlQXJyYXksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICAgIGd0aWxlczogc25hcHNob3QuZ3RpbGVzLCAvLyBndWFyZHMgcmFjayBkaWQgbm90IGNoYW5nZVxyXG4gICAgICAgICAgdGlsZXM6IHRpbGVzLCAvLyB0aWxlIHBvb2wgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuLCAvLyBtYXkgaGF2ZSBlbmRlZCB0aGUgZ2FtZVxyXG4gICAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgICAgbW92ZXM6IG5ld01vdmVzIC8vIGEgbW92ZSB3YXMgbWFkZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBpc0RvdWJsZVBhc3MobW92ZWxpc3QpIHtcclxuICAgICAgICBsZXQgbGFzdCA9IG1vdmVsaXN0Lmxlbmd0aCAtIDE7XHJcbiAgICAgICAgbGV0IHNlY29uZGxhc3QgPSBsYXN0IC0gMTtcclxuICAgICAgICByZXR1cm4gc2Vjb25kbGFzdCA+IC0xICYmXHJcbiAgICAgICAgICBtb3ZlbGlzdFtzZWNvbmRsYXN0XS50eXBlID09PSBjLk1PVkVfVFlQRV9QQVNTICYmXHJcbiAgICAgICAgICBtb3ZlbGlzdFtsYXN0XS50eXBlID09PSBjLk1PVkVfVFlQRV9QQVNTO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcXVlc3RHYW1lRGF0YSA9ICgpID0+IHtcclxuICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSwgLy8gcGxheWVyIG5pY2tuYW1lXHJcbiAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LFxyXG4gICAgICAgICAgd2hvc2V0dXJuOiB3aG9zZXR1cm4sIC8vIGZvciBsb2JieSB0byBwaWNrIHVwIHRoaXMgbWVzc2FnZVxyXG4gICAgICAgICAgcmFja3NpemU6IHJhY2tzaXplLCAvLyByYWNrIHNpemUgb3B0aW9uIChsb2JieSBuZWVkcyB0byBrbm93IGZvciB3aGVuIGd1YXJkcyBqb2luIGdhbWUgYW5kIHRoZXkgY2FsbCBHYW1lKVxyXG4gICAgICAgICAgZnVuYzogXCJyZXF1ZXN0Z2FtZWRhdGFcIiAvLyByZXF1ZXN0IGdhbWUgZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKHBhcnRpY2lwYW50ICE9PSB3aG9zZXR1cm4pIHtyZXR1cm47fVxyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMgPyBlbmRQcmlzb25lcnNUdXJuKCkgOiBlbmRHdWFyZHNUdXJuKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICByZWNhbGxUaWxlcygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgbGV0dGVydGVzdCA9IC9eW0EtWmEtelxcP10kLzsgLy8gc2luZ2xlIGxldHRlciBvciBxdWVzdGlvbiBtYXJrIGtleSBwcmVzc2VkXHJcbiAgICAgIGlmIChldmVudC5rZXkubWF0Y2gobGV0dGVydGVzdCkpIHtcclxuICAgICAgICBsZXQgbGV0dGVyID0gZXZlbnQua2V5LnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgbGV0IHJhY2sgPSB3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMgPyBwdGlsZXMgOiBndGlsZXM7XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGlvbiA9IHJhY2suaW5kZXhPZihsZXR0ZXIpO1xyXG4gICAgICAgIGlmIChuZXdTZWxlY3Rpb24gPT09IC0xKSB7XHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSByYWNrLmluZGV4T2YoXCI/XCIpOyAvLyBVc2UgdGhlIGJsYW5rIGlmIHRoZXkgaGF2ZSBvbmVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5ld1NlbGVjdGlvbiA+IC0xKSB7IC8vIFByZXNzZWQgbGV0dGVyIGlzIG9uIHRoZSByYWNrXHJcbiAgICAgICAgICBsZXQgcm93ID0gcmNkWzBdO1xyXG4gICAgICAgICAgbGV0IGNvbCA9IHJjZFsxXTtcclxuICAgICAgICAgIGxldCBkaXIgPSByY2RbMl07XHJcbiAgICAgICAgICBpZiAocm93ID4tMSAmJiBjb2wgPiAtMSAmJiBkaXIgIT09IGMuRElSX05PTkUpIHsgLy8gcm93LCBjb2wsIGRpciBhcmUgc2V0IHRvIGFjY2VwdCBrZXlzdHJva2VcclxuICAgICAgICAgICAgLy8gTmVlZCB0byBmaWd1cmUgb3V0IG5leHQgc3FhdXJlIHRvIGF1dG8tcGxhY2UgYSB0aWxlXHJcbiAgICAgICAgICAgIGxldCBuZXdSY2QgPSByY2Q7XHJcbiAgICAgICAgICAgIGlmIChkaXIgPT09IGMuRElSX1JJR0hUKSB7IC8vIHBsYXlpbmcgcmlnaHR3YXJkc1xyXG4gICAgICAgICAgICAgIGxldCBuZXdjID0gLTE7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgdGVtcGNvbCA9IGNvbCArIDE7IHRlbXBjb2wgPCBlZGdlICsgMSAmJiBuZXdjID09PSAtMTsgdGVtcGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3F1YXJlQXJyYXlbcm93XVt0ZW1wY29sXS51c2VkYnkgPT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICAgICAgICAgIG5ld2MgPSB0ZW1wY29sO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAobmV3YyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIG5ld1JjZCA9IFstMSwtMSxjLkRJUl9OT05FXTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3UmNkID0gW3JvdywgbmV3YywgYy5ESVJfUklHSFRdO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJvdyxjb2wsbmV3U2VsZWN0aW9uLG5ld1JjZCk7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTsgLy8gd2hlbiB0aGV5IGFyZSB0eXBpbmcgdGhleSBhcmUgbm90IHNlbGVjdGluZyByYWNrIHRpbGVzIGJ5IGNsaWNraW5nIHRoZW0gb24gdGhlIHJhY2tcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRpciA9PT0gYy5ESVJfRE9XTikgeyAvLyBwbGF5aW5nIGRvd253YXJkc1xyXG4gICAgICAgICAgICAgIGxldCBuZXdyID0gLTE7XHJcbiAgICAgICAgICAgICAgbGV0IG51bXJvd3MgPSAocmFja3NpemUqMikrMTtcclxuICAgICAgICAgICAgICBmb3IgKHZhciB0ZW1wcm93ID0gcm93ICsgMTsgdGVtcHJvdyA8IG51bXJvd3MgJiYgbmV3ciA9PT0gLTE7IHRlbXByb3crKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZUFycmF5W3RlbXByb3ddW2NvbF0udXNlZGJ5ID09PSBjLlVTRURfQllfTk9ORSkge1xyXG4gICAgICAgICAgICAgICAgICBuZXdyID0gdGVtcHJvdztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKG5ld3IgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSY2QgPSBbLTEsLTEsYy5ESVJfTk9ORV07XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1JjZCA9IFtuZXdyLCBjb2wsIGMuRElSX0RPV05dO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJvdyxjb2wsbmV3U2VsZWN0aW9uLG5ld1JjZCk7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTsgLy8gd2hlbiB0aGV5IGFyZSB0eXBpbmcgdGhleSBhcmUgbm90IHNlbGVjdGluZyByYWNrIHRpbGVzIGJ5IGNsaWNraW5nIHRoZW0gb24gdGhlIHJhY2tcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQmFja3NwYWNlXCIgJiYgY3VycmVudGNvb3Jkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gU2FtZSBhcyBjbGlja2luZyBvbiBhIHBsYXllZC10aGlzLW1vdmUgdGlsZSBpbiB0ZXJtcyBvZiByZXR1cm5pbmcgdGhlIHRpbGUgdG8gdGhlIHJhY2tcclxuICAgICAgICAvLyBIb3dldmVyIHdlIGFsc28gd2FudCB0byBzZXQgdXAgcmNkIHNvIHRoZXkgY2FuIHByZXNzIHRoZSBrZXkgdGhleSBtZWFudCBhbmQgY29udGludWVcclxuICAgICAgICBsZXQgY29vcmQgPSBjdXJyZW50Y29vcmRzW2N1cnJlbnRjb29yZHMubGVuZ3RoIC0gMV07IC8vIHRpbGUgdG8gcmV0dXJuIHRvIHJhY2tcclxuICAgICAgICBsZXQgcm93ID0gcGFyc2VJbnQoY29vcmQuc3BsaXQoXCItXCIpWzBdKTtcclxuICAgICAgICBsZXQgY29sID0gcGFyc2VJbnQoY29vcmQuc3BsaXQoXCItXCIpWzFdKTtcclxuICAgICAgICBsZXQgbmV3Q3VycmVudGNvb3JkcyA9IFsuLi5jdXJyZW50Y29vcmRzXTtcclxuICAgICAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICAgICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgICAgIGxldCBuZXdTcXVhcmVBcnJheSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3F1YXJlQXJyYXkpKTtcclxuICAgICAgICBsZXQgbmV3U3F1YXJlQXJyYXlSb3cgPSBuZXdTcXVhcmVBcnJheVtyb3ddO1xyXG4gICAgICAgIGxldCBuZXdTcXVhcmVBcnJheUNlbGwgPSBuZXdTcXVhcmVBcnJheVJvd1tjb2xdO1xyXG4gICAgICAgIGxldCBuZXdSY2QgPSBbLTEsLTEsYy5ESVJfTk9ORV07XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGlvbiA9IHNlbGVjdGlvbjtcclxuICAgICAgICBuZXdDdXJyZW50Y29vcmRzLnNwbGljZShjdXJyZW50Y29vcmRzLmxlbmd0aC0xLDEpO1xyXG4gICAgICAgIGxldCByZXR1cm5lZFRpbGUgPSBzcXVhcmVBcnJheVtyb3ddW2NvbF0ubGV0dGVyO1xyXG4gICAgICAgIGlmICh3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMpIHtcclxuICAgICAgICAgIG5ld1B0aWxlcy5wdXNoKHJldHVybmVkVGlsZSk7XHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdQdGlsZXMubGVuZ3RoLTE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5ld0d0aWxlcy5wdXNoKHJldHVybmVkVGlsZSk7XHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdHdGlsZXMubGVuZ3RoLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5Q2VsbC51c2VkYnkgPSBjLlVTRURfQllfTk9ORTtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheUNlbGwubGV0dGVyID0gYy5MRVRURVJfTk9ORTtcclxuICAgICAgICBuZXdTcXVhcmVBcnJheVJvd1tjb2xdID0gbmV3U3F1YXJlQXJyYXlDZWxsO1xyXG4gICAgICAgIG5ld1NxdWFyZUFycmF5W3Jvd10gPSBbLi4ubmV3U3F1YXJlQXJyYXlSb3ddO1xyXG4gICAgICAgIGxldCBkaXIgPSByY2RbMl07XHJcbiAgICAgICAgaWYgKGRpciAhPT0gYy5ESVJfTk9ORSkge1xyXG4gICAgICAgICAgLy8gZGlyZWN0aW9uIHdhcyBzZXQgc28ga2VlcCBpdFxyXG4gICAgICAgICAgbmV3UmNkID0gW3Jvdyxjb2wsZGlyXTtcclxuICAgICAgICAgIGlmIChjdXJyZW50Y29vcmRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3Rpb24gPSAtMTsgLy8gaWYgdGhleSBiYWNrc3BhY2UgYWxsIHRoZSBsZXR0ZXJzIG9mZiBsZWF2ZSByYWNrIHRpbGUgdW5zZWxlY3RlZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKG5ld0N1cnJlbnRjb29yZHMpO1xyXG4gICAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICAgIHNldFNxdWFyZUFycmF5KFsuLi5uZXdTcXVhcmVBcnJheV0pO1xyXG4gICAgICAgIHNldFJjZChuZXdSY2QpO1xyXG4gICAgICAgIHNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaXNvbmJyZWFrXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWNvbnRhaW5lciB3My10ZWFsIHRvcEJhckhlaWdodFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LW1pZGRsZVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXlIZWFkaW5nRm9udFwiPlByaXNvbiBCcmVhazwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS10b3BsZWZ0IHczLWJsYWNrIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIEdhbWUgaWQ6IHtnYW1laWR9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1ib3R0b21sZWZ0IHczLW9yYW5nZSB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICBQcmlzb25lcnM6IHtwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IG5pY2tuYW1lIDogb3BwbmFtZX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LXRvcHJpZ2h0IHczLWJsYWNrIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiLi4vLi4vXCJ9PlxyXG4gICAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT48L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWJvdHRvbXJpZ2h0IHczLW9yYW5nZSB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICBHdWFyZHM6IHtwYXJ0aWNpcGFudCA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IG9wcG5hbWUgOiBuaWNrbmFtZX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwYlRpbGVBbmRNb3Zlc091dGVyXCI+XHJcbiAgICAgICAgICAgICAgPFNob3dVbnNlZW5UaWxlcyB0aWxlcz17dGlsZXN9IG90aGVydGlsZXM9e3BhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID8gZ3RpbGVzIDogcHRpbGVzfS8+XHJcbiAgICAgICAgICAgICAgPFNob3dNb3ZlcyBtb3Zlcz17bW92ZXN9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGJQbGF5ZXJPdXRlclNlY3Rpb25cIj5cclxuICAgICAgICAgICAge3BhcnRpY2lwYW50ID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTID9cclxuICAgICAgICAgICAgICA8UGxheWVyU2VjdGlvblxyXG4gICAgICAgICAgICAgICAgcmFja3RpbGVzPXtwdGlsZXN9XHJcbiAgICAgICAgICAgICAgICB3aG9zZXR1cm49e3dob3NldHVybn1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KHRpKSA9PiBoYW5kbGVSYWNrVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tGaW5pc2hUdXJuPXsoKSA9PiBlbmRQcmlzb25lcnNUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrVGlsZVJlY2FsbD17KCkgPT4gcmVjYWxsVGlsZXMoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tUaWxlRXhjaGFuZ2U9eygpID0+IHN3YXBQcmlzb25lcnNUaWxlcygpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1Bhc3NQbGF5PXsoKSA9PiBwcmlzb25lclBhc3MoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tVbmRvTGFzdFBsYXk9eygpID0+IHBlcmZvcm1SZXdpbmQoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tBbGxvd1VuZG89eygpID0+IGFsbG93VW5kb0xhc3RUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudD17cGFydGljaXBhbnR9XHJcbiAgICAgICAgICAgICAgICBtb3Zlcz17bW92ZXN9XHJcbiAgICAgICAgICAgICAgICBhbGxvd1Jld2luZD17YWxsb3dSZXdpbmR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIDxQbGF5ZXJTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICByYWNrdGlsZXM9e2d0aWxlc31cclxuICAgICAgICAgICAgICAgIHdob3NldHVybj17d2hvc2V0dXJufVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IGhhbmRsZVJhY2tUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja0ZpbmlzaFR1cm49eygpID0+IGVuZEd1YXJkc1R1cm4oKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tUaWxlUmVjYWxsPXsoKSA9PiByZWNhbGxUaWxlcygpfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1RpbGVFeGNoYW5nZT17KCkgPT4gc3dhcEd1YXJkc1RpbGVzKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrUGFzc1BsYXk9eygpID0+IGd1YXJkc1Bhc3MoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tVbmRvTGFzdFBsYXk9eygpID0+IHBlcmZvcm1SZXdpbmQoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tBbGxvd1VuZG89eygpID0+IGFsbG93VW5kb0xhc3RUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudD17cGFydGljaXBhbnR9XHJcbiAgICAgICAgICAgICAgICBtb3Zlcz17bW92ZXN9XHJcbiAgICAgICAgICAgICAgICBhbGxvd1Jld2luZD17YWxsb3dSZXdpbmR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICB7cGFydGljaXBhbnQgPT09IHdob3NldHVybiA/XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBvbktleURvd25DYXB0dXJlPXtoYW5kbGVLZXlEb3dufT5cclxuICAgICAgICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICAgICAgICBzcXVhcmVBcnJheT17c3F1YXJlQXJyYXl9XHJcbiAgICAgICAgICAgICAgICAgIHJjZD17cmNkfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsocmksIGNpKSA9PiBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJpLCBjaSwgLTEsbnVsbCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICAgICAgICBzcXVhcmVBcnJheT17c3F1YXJlQXJyYXl9XHJcbiAgICAgICAgICAgICAgICAgIHJjZD17cmNkfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7fX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgPFNob3dSZXNjdWVzIHJlc2N1ZXM9e3Jlc2N1ZXN9IC8+XHJcbiAgICAgICAgICAgIDxDaGF0IGdhbWVpZD17Z2FtZWlkfSBjbGllbnQ9e2NsaWVudH0gbmlja25hbWU9e25pY2tuYW1lfSBtc2dzPXtjaGF0bXNnc30gc2V0TXNncz17c2V0Q2hhdG1zZ3N9IHBhcnRpY2lwYW50PXtwYXJ0aWNpcGFudH0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWNvbnRhaW5lciB3My10ZWFsIHRvcEJhckhlaWdodFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LW1pZGRsZSBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIHt3aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9HQU1FT1ZFUiA/XHJcbiAgICAgICAgICAgICAgPGgxPkdhbWUgT3ZlciE8L2gxPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgPHA+e2MuSk9LRV9BUlJBWVtqb2tlaW5kZXhdfTwvcD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IFNob3dSZXNjdWVzID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUmVzY3Vlc01hZGVcIj5cclxuICAgICAgICBSZXNjdWVzIG1hZGU6IHtwcm9wcy5yZXNjdWVzfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCBDaGF0ID0gKHtnYW1laWQsIGNsaWVudCwgbmlja25hbWUsIG1zZ3MsIHNldE1zZ3MsIHBhcnRpY2lwYW50fSkgPT4ge1xyXG4gICAgY29uc3QgW25leHRtc2csIHNldE5leHRtc2ddID0gdXNlU3RhdGUoJycpO1xyXG4gICBcclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiICYmIG5leHRtc2cubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IG5ld01zZ3MgPSBbLi4ubXNncywge2Zyb206IG5pY2tuYW1lLCBtc2c6IG5leHRtc2d9XVxyXG4gICAgICAgIGxldCBzZW5kbXNnID0gbmV4dG1zZztcclxuICAgICAgICBzZXRNc2dzKG5ld01zZ3MpO1xyXG4gICAgICAgIHNldE5leHRtc2coJycpO1xyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsIC8vIHBsYXllciBuaWNrbmFtZVxyXG4gICAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICAgIGZ1bmM6IFwiY2hhdFwiLCAvLyBzZW5kIGNoYXQgbWVzc2FnZVxyXG4gICAgICAgICAgICBzZW5kZXI6IHBhcnRpY2lwYW50LCAvLyB3aG8gc2VudCBpdFxyXG4gICAgICAgICAgICBzZW5kbXNnOiBzZW5kbXNnIC8vIHRoZSBtZXNzYWdlIHR5cGVkIGluIHRoZSBjaGF0XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGxldCBjaGFydGVzdCA9IC9eW0EtWmEtejAtOSBcXC4sXFwoXFwpXFw/OiEnXCJdJC87IC8vIEFsbG93IGxldHRlciwgbnVtYmVyLCBzcGFjZSwgcGVyaW9kLCBjb21tYSwgcm91bmQgYnJhY2tldHMsIHF1ZXN0aW9uIG1hcmssIGNvbG9uLCBleGNsYW1hdGlvbiBtYXJrLCBxdW90ZSwgZG91YmxlIHF1b3RlXHJcbiAgICAgIC8vIGlmIChldmVudC5rZXkubWF0Y2goY2hhcnRlc3QpKSB7XHJcbiAgICAgIC8vICAgbGV0IG5ld05leHRtc2cgPSBuZXh0bXNnICsgZXZlbnQua2V5O1xyXG4gICAgICAvLyAgIHNldE5leHRtc2cobmV3TmV4dG1zZyk7XHJcbiAgICAgIC8vIH1cclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJCYWNrc3BhY2VcIiAmJiBuZXh0bXNnLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBuZXdOZXh0bXNnID0gbmV4dG1zZy5zbGljZSgwLG5leHRtc2cubGVuZ3RoLTEpO1xyXG4gICAgICAgIHNldE5leHRtc2cobmV3TmV4dG1zZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJTY3JvbGxhYmxlQ2hhdFwiIGNsYXNzTmFtZT1cInBiQ2hhdFwiPlxyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJwYkNoYXRUYWJsZVwiPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7bXNncy5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2BDaGF0TWVzc2FnZSR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJDaGF0RnJvbVwiPnt2YWx1ZS5mcm9tfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGJDaGF0TXNnXCI+e3ZhbHVlLm1zZ308L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCIyXCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPXtuZXh0bXNnID09PSBcIlwiID8gXCJwYkNoYXRJbnB1dEVtcHR5XCIgOiBcInBiQ2hhdElucHV0XCJ9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJuZXh0bXNnSW5wdXRBcmVhXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e25leHRtc2d9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3NldE5leHRtc2coZS50YXJnZXQudmFsdWUpO319XHJcbiAgICAgICAgICAgICAgICAgIG9uS2V5RG93bkNhcHR1cmU9e2hhbmRsZUtleURvd259XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY2hhdC4uLlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IHNjcm9sbFRvQm90dG9tID0gKGVsZW1lbnRpZCkgPT4ge1xyXG4gICAgY29uc3QgdGhlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRpZCk7XHJcbiAgICB0aGVFbGVtZW50LnNjcm9sbFRvcCA9IHRoZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgR2FtZTsiXSwic291cmNlUm9vdCI6IiJ9