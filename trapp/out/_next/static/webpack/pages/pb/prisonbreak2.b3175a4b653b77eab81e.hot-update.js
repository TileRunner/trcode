webpackHotUpdate_N_E("pages/pb/prisonbreak2",{

/***/ "./pages/pb/prisonbreak2.js":
/*!**********************************!*\
  !*** ./pages/pb/prisonbreak2.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrisonBreak; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ws__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ws */ "./ws.js");



var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\pb\\prisonbreak2.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();




const escapehatches = ["0-0", "0-7", "0-14", "7-0", "7-14", "14-0", "14-7", "14-14"]; // coords of escape hatches

const initialtiles = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z", "?", "?"]; // initial tile pool

function PrisonBreak() {
  _s();

  const {
    0: inlobby,
    1: setInlobby
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: gameid,
    1: setGameid
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: prisonersOrGuards,
    1: setPrisonersOrGuards
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: wsmsgs,
    1: setWsmsgs
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: msgid,
    1: setMsgid
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  let host = false ? undefined : 'ws://localhost:5000';

  const acceptMessage = message => {
    setMsgid(curr => curr + 1);
    setWsmsgs(curr => [...curr, message.data]);
  };

  const removeMessage = messageData => {
    let i = wsmsgs.indexOf(messageData);
    let w = [...wsmsgs];
    w.splice(i, 1);
    setWsmsgs(w);
  };

  const {
    0: client,
    1: setClient
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new _ws__WEBPACK_IMPORTED_MODULE_3__["default"](host, acceptMessage));
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => client.connect(), []);
  return inlobby || prisonersOrGuards === '' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "In the lobby"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      children: "Game id:\xA0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      name: "gameid",
      value: gameid,
      onChange: e => {
        setGameid(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      children: "\xA0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      id: "startgame",
      onClick: function () {
        if (gameid.length > 0) {
          setPrisonersOrGuards('P');
          setInlobby(false);
        }
      },
      children: "Start Game"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      children: "\xA0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      id: "joingame",
      onClick: function () {
        if (gameid.length > 0) {
          setPrisonersOrGuards('G');
          setInlobby(false);
        }
      },
      children: "Join Game"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }, this), wsmsgs.map((msg, inx) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      children: msg
    }, inx, false, {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 9
    }, this))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 140,
    columnNumber: 5
  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Game, {
    prisonersOrGuards: prisonersOrGuards,
    gameid: gameid,
    wsmsgs: wsmsgs,
    client: client,
    removeMessage: removeMessage
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 177,
    columnNumber: 5
  }, this);
}

_s(PrisonBreak, "02EZRdjbwSyXc812yUxxy2bPaz4=");

_c = PrisonBreak;

const Square = props => {
  // squareusedby, ri, ci, c, onClick
  // need squareusedby to pick css className corresponding to who played the tile on the square
  // need ri, ci to display alternating characters on unused squares
  // need c to represent which tile is on the square, if any
  // need onClick to handle square click at a higher level
  const usedbyclass = props.squareusedby === "P" ? "pbSquareUsedByPrisoners" : "pbSquareUsedByGuards";
  const tdclass = props.c !== "." ? usedbyclass : props.ri === 7 && props.ci === 7 ? "pbSquareCenterSquare" : (props.ri === 0 || props.ri === 7 || props.ri === 14) && (props.ci === 0 || props.ci === 7 || props.ci === 14) ? "pbSquareEscapeHatch" : props.ri % 2 === props.ci % 2 ? "pbSquare" : "pbSquare2";
  const tdvalue = props.c !== "." ? props.c : tdclass === "pbSquareCenterSquare" ? "✰" : tdclass === "pbSquareEscapeHatch" ? "💫" : props.ri % 2 === props.ci % 2 ? "☹" //"⎔"
  : "ꐕ"; //"✦";

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: tdclass,
    onClick: props.onClick,
    children: tdvalue
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 218,
    columnNumber: 5
  }, undefined);
};

_c2 = Square;

const Board = ({
  onClick,
  squares,
  usedby
}) => {
  const renderSquare = (ri, ci, c, squareusedby) => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Square, {
        c: c,
        ci: ci,
        ri: ri,
        squareusedby: squareusedby,
        onClick: () => onClick(ri, ci)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 9
      }, undefined)
    }, `Square${ri}-${ci}`, false, {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 7
    }, undefined);
  };

  const renderRow = ri => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
      className: "row pbRow",
      children: squares[ri].map((c, ci) => renderSquare(ri, ci, c, usedby[ri][ci]))
    }, `BoardRow${ri}`, false, {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 7
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
    className: "pbBoard",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
      children: squares.map((r, ri) => renderRow(ri))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 247,
    columnNumber: 5
  }, undefined);
};

_c3 = Board;

const Game = ({
  prisonersOrGuards,
  gameid,
  wsmsgs,
  client,
  removeMessage
}) => {
  _s2();

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
    0: squares,
    1: setSquares
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Array(15).fill(Array(15).fill(".")));
  const {
    0: usedby,
    1: setUsedby
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Array(15).fill(Array(15).fill("")));
  const {
    0: selection,
    1: setSelection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(-1);
  const {
    0: whoseturn,
    1: setWhoseturn
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("P");
  const {
    0: currentcoords,
    1: setCurrentcoords
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: rescues,
    1: setRescues
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: snapshot,
    1: setSnapshot
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    squares: [...squares],
    usedby: [...usedby],
    ptiles: [...ptiles],
    gtiles: [...gtiles]
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (prisonersOrGuards === "P") {
      let tempPTiles = [...ptiles];
      let tempGTiles = [...gtiles];
      let tempTiles = [...tiles];

      while (tempPTiles.length < 7) {
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
        squares: [...squares],
        usedby: [...usedby],
        ptiles: [...tempPTiles],
        gtiles: [...tempGTiles]
      });
    } else {
      try {
        console.log("Sending ggd");
        client.send(JSON.stringify({
          gameid: gameid,
          // the id for the game
          type: "pb",
          // prisonbreak
          func: "ggd" // get game data

        }));
      } catch {}
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let msg = wsmsgs[0];
    if (msg) processMessage(msg);
  }, [wsmsgs]);

  function processMessage(message) {
    let messageData = JSON.parse(message); // was message.data

    if (messageData.gameid === gameid && messageData.type === "pb") {
      // This instance of a prison break game
      if (messageData.func === "requestgamedata" && messageData.requestor !== prisonersOrGuards) {
        // Opponent requested game info
        client.send(JSON.stringify({
          gameid: gameid,
          // the id for the game
          type: "pb",
          // prisonbreak
          func: "providegamedata",
          // provide game data
          sender: prisonersOrGuards,
          // who sent the data
          tiles: tiles,
          squares: squares,
          ptiles: ptiles,
          gtiles: gtiles,
          usedby: usedby,
          whoseturn: whoseturn,
          selection: selection,
          currentcoords: currentcoords,
          snapshot: snapshot,
          rescues: rescues
        }));
      }

      if (messageData.func === "providegamedata" && messageData.sender !== prisonersOrGuards) {
        // opponent provided game data
        setTiles(messageData.tiles);
        setSquares(messageData.squares);
        setPtiles(messageData.ptiles);
        setGtiles(messageData.gtiles);
        setUsedby(messageData.usedby);
        setWhoseturn(messageData.whoseturn);
        setSelection(messageData.selection);
        setCurrentcoords(messageData.currentcoords);
        setSnapshot(messageData.snapshot);
        setRescues(messageData.rescues);
      } // when guards join game they send ggd, and prisoner picks it up and sends sgd, then guards pick that up and take the data


      if (messageData.func === "ggd" && prisonersOrGuards === "P") {
        // get game data (sent by guards, prisoners respond here)
        client.send(JSON.stringify({
          gameid: gameid,
          // the id for the game
          type: "pb",
          // prisonbreak
          func: "sgd",
          // send game data
          tiles: tiles,
          squares: squares,
          ptiles: ptiles,
          gtiles: gtiles,
          usedby: usedby,
          whoseturn: whoseturn,
          selection: selection,
          currentcoords: currentcoords,
          snapshot: snapshot,
          rescues: rescues // may have rescued another prisoner

        }));
      }

      if (messageData.func === "sgd" && prisonersOrGuards === "G") {
        // send game data (prisoners sent it, guards now get it)
        setTiles(messageData.tiles);
        setSquares(messageData.squares);
        setPtiles(messageData.ptiles);
        setGtiles(messageData.gtiles);
        setUsedby(messageData.usedby);
        setWhoseturn(messageData.whoseturn);
        setSelection(messageData.selection);
        setCurrentcoords(messageData.currentcoords);
        setSnapshot(messageData.snapshot);
        setRescues(messageData.rescues);
      }

      if (messageData.func === "ept") {
        // end prisoners turn
        setWhoseturn("G");
        setSelection(-1);
        setCurrentcoords([]);
        setSquares(messageData.squares);
        setUsedby(messageData.usedby);
        setPtiles(messageData.ptiles);
        setTiles(messageData.tiles);
        setRescues(messageData.rescues);
        setSnapshot({
          squares: [...messageData.squares],
          usedby: [...messageData.usedby],
          ptiles: [...messageData.ptiles],
          gtiles: [...gtiles]
        });
      }

      if (messageData.func === "egt") {
        // end guards turn
        setWhoseturn("P");
        setSelection(-1);
        setCurrentcoords([]);
        setSquares(messageData.squares);
        setUsedby(messageData.usedby);
        setGtiles(messageData.gtiles);
        setTiles(messageData.tiles);
        setSnapshot({
          squares: [...messageData.squares],
          usedby: [...messageData.usedby],
          ptiles: [...ptiles],
          gtiles: [...messageData.gtiles]
        });
      }
    }

    removeMessage(message);
  }

  const handleBoardSquareClick = (ri, ci) => {
    let newSquares = [...squares];
    let newUsedby = [...usedby];
    let newPtiles = [...ptiles];
    let newGtiles = [...gtiles];
    let newRow = [...squares[ri]];
    let squarevalue = squares[ri][ci];
    let newCurrentcoords = [...currentcoords];
    let coord = String(ri) + "-" + String(ci);
    let cci = currentcoords.indexOf(coord);

    if (selection > -1 && squarevalue === ".") {
      // tile is selected from rack and clicked square is not used yet
      newRow[ci] = whoseturn === "P" ? newPtiles[selection] : newGtiles[selection];
      newSquares[ri] = [...newRow];
      whoseturn === "P" ? newPtiles.splice(selection, 1) : newGtiles.splice(selection, 1);
      let newUsedbyRow = [...newUsedby[ri]];
      newUsedbyRow[ci] = whoseturn;
      newUsedby[ri] = [...newUsedbyRow];
      let newSelection = selection;

      if (whoseturn === "P" && newSelection === newPtiles.length) {
        newSelection = newSelection - 1;
      }

      if (whoseturn === "G" && newSelection === newGtiles.length) {
        newSelection = newSelection - 1;
      }

      setSelection(newSelection);
      setSquares(newSquares);
      setUsedby(newUsedby);
      setPtiles(newPtiles);
      setGtiles(newGtiles);
      setCurrentcoords([...currentcoords, coord]);
    } else if (cci > -1) {
      // clicked square has a tile on it from the current move in progress
      whoseturn === "P" ? newPtiles.push(squarevalue) : newGtiles.push(squarevalue);
      let newRow = [...newSquares[ri]];
      newRow[ci] = ".";
      newSquares[ri] = [...newRow];
      let newUsedbyRow = [...newUsedby[ri]];
      newUsedbyRow[ci] = "";
      newUsedby[ri] = [...newUsedbyRow];
      setSelection(whoseturn === "P" ? newPtiles.length - 1 : newGtiles.length - 1);
      newCurrentcoords.splice(cci, 1);
      setSquares(newSquares);
      setUsedby(newUsedby);
      setPtiles(newPtiles);
      setGtiles(newGtiles);
      setCurrentcoords(newCurrentcoords);
    }
  };

  const handlePrisonerTileClick = tileindex => {
    // the index of ptiles
    if (whoseturn === "P") {
      setSelection(tileindex);
    } else {
      alert("It is not your turn");
    }
  };

  const handleGuardTileClick = tileindex => {
    // the index of gtiles
    if (whoseturn === "G") {
      setSelection(tileindex);
    } else {
      alert("It is not your turn");
    }
  };

  const endPrisonersTurn = () => {
    if (!isPlayValid()) {
      return;
    }

    let newRescues = rescues;

    for (var i = 0; i < currentcoords.length; i++) {
      if (escapehatches.indexOf(currentcoords[i]) > -1) {
        newRescues = newRescues + 1;
      }
    }

    let newPtiles = [...ptiles];
    let newTiles = [...tiles];

    while (newPtiles.length < 7 && newTiles.length > 0) {
      let rand = Math.floor(Math.random() * newTiles.length);
      newPtiles.push(newTiles[rand]);
      newTiles.splice(rand, 1);
    }

    newPtiles.sort();
    setWhoseturn("G");
    setSelection(-1);
    setCurrentcoords([]);
    setPtiles(newPtiles);
    setTiles(newTiles);
    setRescues(newRescues);
    setSnapshot({
      squares: [...squares],
      usedby: [...usedby],
      ptiles: [...newPtiles],
      gtiles: [...gtiles]
    });
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      func: "ept",
      // end prisoners turn
      squares: squares,
      // this was being changed as the tiles were being played
      usedby: usedby,
      // this was being changed as the tiles were being played
      ptiles: newPtiles,
      // we picked new tiles for prisoners rack
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      rescues: newRescues // may have rescued another prisoner

    }));
  };

  const endGuardsTurn = () => {
    if (!isPlayValid()) {
      return;
    }

    let newGtiles = [...gtiles];
    let newTiles = [...tiles];

    while (newGtiles.length < 7 && newTiles.length > 0) {
      let rand = Math.floor(Math.random() * newTiles.length);
      newGtiles.push(newTiles[rand]);
      newTiles.splice(rand, 1);
    }

    newGtiles.sort();
    let snapsquares = [...squares];
    let snapusedby = [...usedby];
    let snapptiles = [...ptiles];
    let snapgtiles = [...gtiles];
    setWhoseturn("P");
    setSelection(-1);
    setCurrentcoords([]);
    setGtiles(newGtiles);
    setTiles(newTiles);
    setSnapshot({
      squares: snapsquares,
      usedby: snapusedby,
      ptiles: snapptiles,
      gtiles: snapgtiles
    });
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      func: "egt",
      // end guards turn
      squares: squares,
      // this was being changed as the tiles were being played
      usedby: usedby,
      // this was being changed as the tiles were being played
      gtiles: newGtiles,
      // we picked new tiles for guards rack
      tiles: newTiles // we picked new tiles so tile pool changed

    }));
  };

  const swapPrisonersTiles = () => {
    if (tiles.length < 7) {
      window.alert("Need 7 in the bag to exchange");
      return;
    }

    let newPtiles = [];
    let newTiles = [...tiles];

    while (newPtiles.length < 7 && newTiles.length > 0) {
      let rand = Math.floor(Math.random() * newTiles.length);
      newPtiles.push(newTiles[rand]);
      newTiles.splice(rand, 1);
    }

    newPtiles.sort();
    newTiles = [...newTiles, ...snapshot.ptiles];
    newTiles.sort();
    console.log("Exchange ptiles");
    console.log(snapshot.ptiles);
    console.log(ptiles);
    console.log(newPtiles);
    console.log(tiles);
    console.log(newTiles);
    setSquares([...snapshot.squares]);
    setUsedby([...snapshot.usedby]);
    setWhoseturn("G");
    setSelection(-1);
    setCurrentcoords([]);
    setPtiles(newPtiles);
    setTiles(newTiles);
    setSnapshot({
      squares: [...snapshot.squares],
      usedby: [...snapshot.usedby],
      ptiles: [...newPtiles],
      gtiles: [...gtiles]
    });
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      func: "ept",
      // end prisoners turn
      squares: snapshot.squares,
      // revert to start of turn squares
      usedby: snapshot.usedby,
      // revert to start of turn used by
      ptiles: newPtiles,
      // we picked new tiles for prisoners rack
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      rescues: rescues // no rescues on an exchange

    }));
  };

  const swapGuardsTiles = () => {
    if (tiles.length < 7) {
      window.alert("Need 7 in the bag to exchange");
      return;
    }

    let newGtiles = [];
    let newTiles = [...tiles];

    while (newGtiles.length < 7 && newTiles.length > 0) {
      let rand = Math.floor(Math.random() * newTiles.length);
      newGtiles.push(newTiles[rand]);
      newTiles.splice(rand, 1);
    }

    newGtiles.sort();
    newTiles = [...newTiles, ...snapshot.gtiles];
    newTiles.sort();
    setSquares([...snapshot.squares]);
    setUsedby([...snapshot.usedby]);
    setWhoseturn("P");
    setSelection(-1);
    setCurrentcoords([]);
    setGtiles(newGtiles);
    setTiles(newTiles);
    setSnapshot({
      squares: [...snapshot.squares],
      usedby: [...snapshot.usedby],
      ptiles: [...ptiles],
      gtiles: [...newGtiles]
    });
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      func: "egt",
      // end prisoners turn
      squares: snapshot.squares,
      // revert to start of turn squares
      usedby: snapshot.usedby,
      // revert to start of turn used by
      gtiles: newGtiles,
      // we picked new tiles for prisoners rack
      tiles: newTiles // we picked new tiles so tile pool changed

    }));
  };

  function isPlayValid() {
    if (squares[7][7] === ".") {
      window.alert("First play must hit center square");
      return false;
    }

    let lowrow = 15;
    let highrow = -1;
    let lowcol = 15;
    let highcol = -1;

    for (var r = 0; r < 15; ++r) {
      for (var c = 0; c < 15; ++c) {
        if (squares[r][c] !== ".") {
          if (!(r > 0 && squares[r - 1][c] !== ".") && !(c > 0 && squares[r][c - 1] !== ".") && !(r < 14 && squares[r + 1][c] !== ".") && !(c < 14 && squares[r][c + 1] !== ".")) {
            window.alert("Each played tile must be part of a word");
            return false;
          }

          if (snapshot.squares[r][c] === ".") {
            // This square was played on this turn
            if (r < lowrow) {
              lowrow = r;
            }

            if (r > highrow) {
              highrow = r;
            }

            if (c < lowcol) {
              lowcol = c;
            }

            if (c > highcol) {
              highcol = c;
            }
          }
        }
      }
    }

    if (lowrow === 15) {
      window.alert("You didn't play any tiles");
      return false;
    }

    if (lowrow !== highrow && lowcol !== highcol) {
      window.alert("Tiles played must be in a straight line");
      return false;
    }

    let playthru = false;
    let hookmade = false;

    for (var r = lowrow; r <= highrow; ++r) {
      for (var c = lowcol; c <= highcol; ++c) {
        if (squares[r][c] === ".") {
          window.alert("There is a gap in your word");
          return false;
        }

        if (snapshot.squares[r][c] !== ".") {
          playthru = true;
        }

        if (lowrow === highrow && r > 0 && squares[r - 1][c] !== ".") {
          hookmade = true;
        }

        if (lowrow === highrow && r < 14 && squares[r + 1][c] !== ".") {
          hookmade = true;
        }

        if (lowcol === highcol && c > 0 && squares[r][c - 1] !== ".") {
          hookmade = true;
        }

        if (lowcol === highcol && c < 14 && squares[r][c + 1] !== ".") {
          hookmade = true;
        }
      }
    } // Check play to or from a tile (play through but not either side)


    if (lowrow === highrow && lowcol > 0 && snapshot.squares[lowrow][lowcol - 1] !== ".") {
      playthru = true;
    }

    if (lowrow === highrow && highcol < 14 && snapshot.squares[lowrow][highcol + 1] !== ".") {
      playthru = true;
    }

    if (lowcol === highcol && lowrow > 0 && snapshot.squares[lowrow - 1][lowcol] !== ".") {
      playthru = true;
    }

    if (lowcol === highcol && highrow < 14 && snapshot.squares[highrow + 1][lowcol] !== ".") {
      playthru = true;
    }

    if (!playthru && !hookmade && snapshot.squares[7][7] !== ".") {
      window.alert("Words must be connected");
      return false;
    }

    return true;
  }

  const recallTiles = () => {
    setSquares([...snapshot.squares]);
    setUsedby([...snapshot.usedby]);
    setPtiles([...snapshot.ptiles]);
    setGtiles([...snapshot.gtiles]);
    setSelection(-1);
    setCurrentcoords([]);
  };

  const requestGameData = playertype => {
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      func: "requestgamedata",
      // request game data
      requestor: prisonersOrGuards
    }));
  };

  const handleKeyPress = event => {
    window.alert("You pressed " + event.key);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container-fluid prisonbreak",
    onKeyPress: handleKeyPress,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-10 pbtitle",
        children: "Prison Break"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 764,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-2 pbhomelink",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          id: "requestGameData",
          "data-toggle": "tooltip",
          title: "Sync with opponent",
          onClick: function () {
            requestGameData(prisonersOrGuards);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "material-icons",
            children: "sync"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 772,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 766,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "../../",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "material-icons",
              "data-toggle": "tooltip",
              title: "Home",
              children: "home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 775,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 775,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 774,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 765,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 763,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-2 pbPrisoners",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Prisoners, {
          ptiles: ptiles,
          whoseturn: whoseturn,
          selection: selection,
          onClick: ti => handlePrisonerTileClick(ti),
          onClickFinishTurn: () => endPrisonersTurn(),
          onClickTileRecall: () => recallTiles(),
          onClickTileExchange: () => swapPrisonersTiles(),
          rescues: rescues,
          prisonersOrGuards: prisonersOrGuards
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 781,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 780,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-6",
        align: "center",
        children: prisonersOrGuards === whoseturn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {
          squares: squares,
          usedby: usedby,
          onClick: (ri, ci) => handleBoardSquareClick(ri, ci)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 795,
          columnNumber: 11
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {
          squares: squares,
          usedby: usedby,
          onClick: () => window.alert("That tickles!")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 801,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 793,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-2 pbGuards",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Guards, {
          gtiles: gtiles,
          whoseturn: whoseturn,
          selection: selection,
          onClick: ti => handleGuardTileClick(ti),
          onClickFinishTurn: () => endGuardsTurn(),
          onClickTileRecall: () => recallTiles(),
          onClickTileExchange: () => swapGuardsTiles(),
          prisonersOrGuards: prisonersOrGuards
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 809,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 808,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowUnseenTiles, {
          tiles: tiles,
          othertiles: prisonersOrGuards === "P" ? gtiles : ptiles
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 821,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 820,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 779,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 762,
    columnNumber: 5
  }, undefined);
};

_s2(Game, "44//9mkzGwYN9ebIgVnwnwdr5Xo=");

_c4 = Game;

const ShowUnseenTiles = props => {
  // tiles = tiles in bag, othertiles = tiles on other players rack
  let unseenTiles = [...props.tiles, ...props.othertiles];
  unseenTiles.sort();

  if (unseenTiles[0] === "?") {
    unseenTiles.splice(0, 1);
    unseenTiles.push("?");
  }

  if (unseenTiles[0] === "?") {
    unseenTiles.splice(0, 1);
    unseenTiles.push("?");
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pbTilepool",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "TILES"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 841,
      columnNumber: 7
    }, undefined), unseenTiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [ti > 0 && t !== unseenTiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pbTilepoolDivider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 845,
        columnNumber: 13
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbTilepoolTile",
        children: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 849,
        columnNumber: 11
      }, undefined)]
    }, `tile${ti}`, true, {
      fileName: _jsxFileName,
      lineNumber: 843,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 840,
    columnNumber: 5
  }, undefined);
};

_c5 = ShowUnseenTiles;

const RackTile = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    className: props.tileclass,
    onClick: props.onClick,
    children: props.tilevalue
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 858,
    columnNumber: 5
  }, undefined);
};

_c6 = RackTile;

const FinishTurnButton = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "pbFinishTurn",
    onClick: props.onClick,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      className: "material-icons",
      children: "check"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 867,
      columnNumber: 7
    }, undefined), "Finish Turn"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 866,
    columnNumber: 5
  }, undefined);
};

_c7 = FinishTurnButton;

const TileRecallButton = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "pbRecallTiles",
    onClick: props.onClick,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      className: "material-icons",
      children: "undo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 875,
      columnNumber: 7
    }, undefined), "Recall Tiles"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 874,
    columnNumber: 5
  }, undefined);
};

_c8 = TileRecallButton;

const TileExchangeButton = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "pbExchangeTiles",
    onClick: props.onClick,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      className: "material-icons",
      children: "sentiment_dissatisfied"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 883,
      columnNumber: 7
    }, undefined), "Exchange Tiles"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 882,
    columnNumber: 5
  }, undefined);
};

_c9 = TileExchangeButton;

const Prisoners = props => {
  const renderTile = (tileclass, tileindex, tilevalue) => {
    return props.prisonersOrGuards === "P" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
      tileclass: tileclass,
      tilevalue: tilevalue,
      onClick: () => props.onClick(tileindex)
    }, tileclass + String(tileindex), false, {
      fileName: _jsxFileName,
      lineNumber: 892,
      columnNumber: 7
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
      tileclass: tileclass,
      tilevalue: tilevalue,
      onClick: () => window.alert("No peeking!")
    }, tileclass + String(tileindex), false, {
      fileName: _jsxFileName,
      lineNumber: 899,
      columnNumber: 7
    }, undefined);
  };

  const renderFinishTurn = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
        onClick: () => props.onClickFinishTurn()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 909,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 909,
      columnNumber: 12
    }, undefined);
  };

  const renderRecallTiles = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
        onClick: () => props.onClickTileRecall()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 913,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 913,
      columnNumber: 12
    }, undefined);
  };

  const renderExchangeTiles = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileExchangeButton, {
        onClick: () => props.onClickTileExchange()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 917,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 917,
      columnNumber: 12
    }, undefined);
  };

  const renderFreedPrisoners = count => {
    let dumb = Array(count).fill("nonsense");
    return dumb.map((value, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/breakfree.png",
        alt: "I'm free! I'm free!",
        width: "100",
        height: "100"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 924,
        columnNumber: 9
      }, undefined)
    }, value + String(index), false, {
      fileName: _jsxFileName,
      lineNumber: 923,
      columnNumber: 7
    }, undefined));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "PRISONERS"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 936,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilerack",
      children: props.ptiles.map((t, ti) => renderTile(props.whoseturn === "P" && props.selection === ti ? "pbTileOnRackSelectedP" : "pbTileOnRackP", ti, props.prisonersOrGuards === "P" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 937,
      columnNumber: 7
    }, undefined), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderRecallTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderExchangeTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Rescues made: ", props.rescues, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 953,
        columnNumber: 9
      }, undefined), renderFreedPrisoners(props.rescues)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 951,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 935,
    columnNumber: 5
  }, undefined);
};

_c10 = Prisoners;

const Guards = props => {
  const renderTile = (tileclass, tileindex, tilevalue) => {
    return props.prisonersOrGuards === "G" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
      tileclass: tileclass,
      tilevalue: tilevalue,
      onClick: () => props.onClick(tileindex)
    }, tileclass + String(tileindex), false, {
      fileName: _jsxFileName,
      lineNumber: 964,
      columnNumber: 7
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
      tileclass: tileclass,
      tilevalue: tilevalue,
      onClick: () => window.alert("No peeking!")
    }, tileclass + String(tileindex), false, {
      fileName: _jsxFileName,
      lineNumber: 971,
      columnNumber: 7
    }, undefined);
  };

  const renderFinishTurn = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
      onClick: () => props.onClickFinishTurn()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 981,
      columnNumber: 12
    }, undefined);
  };

  const renderRecallTiles = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
      onClick: () => props.onClickTileRecall()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 985,
      columnNumber: 12
    }, undefined);
  };

  const renderExchangeTiles = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileExchangeButton, {
      onClick: () => props.onClickTileExchange()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 989,
      columnNumber: 12
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "GUARDS"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 994,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilerack",
      children: props.gtiles.map((t, ti) => renderTile(props.whoseturn === "G" && props.selection === ti ? "pbTileOnRackSelectedG" : "pbTileOnRackG", ti, props.prisonersOrGuards === "G" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 995,
      columnNumber: 7
    }, undefined), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderRecallTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderExchangeTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 993,
    columnNumber: 5
  }, undefined);
};

_c11 = Guards;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "PrisonBreak");
$RefreshReg$(_c2, "Square");
$RefreshReg$(_c3, "Board");
$RefreshReg$(_c4, "Game");
$RefreshReg$(_c5, "ShowUnseenTiles");
$RefreshReg$(_c6, "RackTile");
$RefreshReg$(_c7, "FinishTurnButton");
$RefreshReg$(_c8, "TileRecallButton");
$RefreshReg$(_c9, "TileExchangeButton");
$RefreshReg$(_c10, "Prisoners");
$RefreshReg$(_c11, "Guards");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsyLmpzIl0sIm5hbWVzIjpbImVzY2FwZWhhdGNoZXMiLCJpbml0aWFsdGlsZXMiLCJQcmlzb25CcmVhayIsImlubG9iYnkiLCJzZXRJbmxvYmJ5IiwidXNlU3RhdGUiLCJnYW1laWQiLCJzZXRHYW1laWQiLCJwcmlzb25lcnNPckd1YXJkcyIsInNldFByaXNvbmVyc09yR3VhcmRzIiwid3Ntc2dzIiwic2V0V3Ntc2dzIiwibXNnaWQiLCJzZXRNc2dpZCIsImhvc3QiLCJhY2NlcHRNZXNzYWdlIiwibWVzc2FnZSIsImN1cnIiLCJkYXRhIiwicmVtb3ZlTWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiaSIsImluZGV4T2YiLCJ3Iiwic3BsaWNlIiwiY2xpZW50Iiwic2V0Q2xpZW50IiwiQ3VzdG9tU29ja2V0IiwidXNlRWZmZWN0IiwiY29ubmVjdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsIm1hcCIsIm1zZyIsImlueCIsIlNxdWFyZSIsInByb3BzIiwidXNlZGJ5Y2xhc3MiLCJzcXVhcmV1c2VkYnkiLCJ0ZGNsYXNzIiwiYyIsInJpIiwiY2kiLCJ0ZHZhbHVlIiwib25DbGljayIsIkJvYXJkIiwic3F1YXJlcyIsInVzZWRieSIsInJlbmRlclNxdWFyZSIsInJlbmRlclJvdyIsInIiLCJHYW1lIiwidGlsZXMiLCJzZXRUaWxlcyIsInB0aWxlcyIsInNldFB0aWxlcyIsImd0aWxlcyIsInNldEd0aWxlcyIsInNldFNxdWFyZXMiLCJBcnJheSIsImZpbGwiLCJzZXRVc2VkYnkiLCJzZWxlY3Rpb24iLCJzZXRTZWxlY3Rpb24iLCJ3aG9zZXR1cm4iLCJzZXRXaG9zZXR1cm4iLCJjdXJyZW50Y29vcmRzIiwic2V0Q3VycmVudGNvb3JkcyIsInJlc2N1ZXMiLCJzZXRSZXNjdWVzIiwic25hcHNob3QiLCJzZXRTbmFwc2hvdCIsInRlbXBQVGlsZXMiLCJ0ZW1wR1RpbGVzIiwidGVtcFRpbGVzIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzb3J0IiwiY29uc29sZSIsImxvZyIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsImZ1bmMiLCJwcm9jZXNzTWVzc2FnZSIsInBhcnNlIiwicmVxdWVzdG9yIiwic2VuZGVyIiwiaGFuZGxlQm9hcmRTcXVhcmVDbGljayIsIm5ld1NxdWFyZXMiLCJuZXdVc2VkYnkiLCJuZXdQdGlsZXMiLCJuZXdHdGlsZXMiLCJuZXdSb3ciLCJzcXVhcmV2YWx1ZSIsIm5ld0N1cnJlbnRjb29yZHMiLCJjb29yZCIsIlN0cmluZyIsImNjaSIsIm5ld1VzZWRieVJvdyIsIm5ld1NlbGVjdGlvbiIsImhhbmRsZVByaXNvbmVyVGlsZUNsaWNrIiwidGlsZWluZGV4IiwiYWxlcnQiLCJoYW5kbGVHdWFyZFRpbGVDbGljayIsImVuZFByaXNvbmVyc1R1cm4iLCJpc1BsYXlWYWxpZCIsIm5ld1Jlc2N1ZXMiLCJuZXdUaWxlcyIsImVuZEd1YXJkc1R1cm4iLCJzbmFwc3F1YXJlcyIsInNuYXB1c2VkYnkiLCJzbmFwcHRpbGVzIiwic25hcGd0aWxlcyIsInN3YXBQcmlzb25lcnNUaWxlcyIsIndpbmRvdyIsInN3YXBHdWFyZHNUaWxlcyIsImxvd3JvdyIsImhpZ2hyb3ciLCJsb3djb2wiLCJoaWdoY29sIiwicGxheXRocnUiLCJob29rbWFkZSIsInJlY2FsbFRpbGVzIiwicmVxdWVzdEdhbWVEYXRhIiwicGxheWVydHlwZSIsImhhbmRsZUtleVByZXNzIiwiZXZlbnQiLCJrZXkiLCJ0aSIsIlNob3dVbnNlZW5UaWxlcyIsInVuc2VlblRpbGVzIiwib3RoZXJ0aWxlcyIsInQiLCJSYWNrVGlsZSIsInRpbGVjbGFzcyIsInRpbGV2YWx1ZSIsIkZpbmlzaFR1cm5CdXR0b24iLCJUaWxlUmVjYWxsQnV0dG9uIiwiVGlsZUV4Y2hhbmdlQnV0dG9uIiwiUHJpc29uZXJzIiwicmVuZGVyVGlsZSIsInJlbmRlckZpbmlzaFR1cm4iLCJvbkNsaWNrRmluaXNoVHVybiIsInJlbmRlclJlY2FsbFRpbGVzIiwib25DbGlja1RpbGVSZWNhbGwiLCJyZW5kZXJFeGNoYW5nZVRpbGVzIiwib25DbGlja1RpbGVFeGNoYW5nZSIsInJlbmRlckZyZWVkUHJpc29uZXJzIiwiY291bnQiLCJkdW1iIiwiaW5kZXgiLCJHdWFyZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsYUFBYSxHQUFHLENBQ3BCLEtBRG9CLEVBRXBCLEtBRm9CLEVBR3BCLE1BSG9CLEVBSXBCLEtBSm9CLEVBS3BCLE1BTG9CLEVBTXBCLE1BTm9CLEVBT3BCLE1BUG9CLEVBUXBCLE9BUm9CLENBQXRCLEMsQ0FTRzs7QUFDSCxNQUFNQyxZQUFZLEdBQUcsQ0FDbkIsR0FEbUIsRUFFbkIsR0FGbUIsRUFHbkIsR0FIbUIsRUFJbkIsR0FKbUIsRUFLbkIsR0FMbUIsRUFNbkIsR0FObUIsRUFPbkIsR0FQbUIsRUFRbkIsR0FSbUIsRUFTbkIsR0FUbUIsRUFVbkIsR0FWbUIsRUFXbkIsR0FYbUIsRUFZbkIsR0FabUIsRUFhbkIsR0FibUIsRUFjbkIsR0FkbUIsRUFlbkIsR0FmbUIsRUFnQm5CLEdBaEJtQixFQWlCbkIsR0FqQm1CLEVBa0JuQixHQWxCbUIsRUFtQm5CLEdBbkJtQixFQW9CbkIsR0FwQm1CLEVBcUJuQixHQXJCbUIsRUFzQm5CLEdBdEJtQixFQXVCbkIsR0F2Qm1CLEVBd0JuQixHQXhCbUIsRUF5Qm5CLEdBekJtQixFQTBCbkIsR0ExQm1CLEVBMkJuQixHQTNCbUIsRUE0Qm5CLEdBNUJtQixFQTZCbkIsR0E3Qm1CLEVBOEJuQixHQTlCbUIsRUErQm5CLEdBL0JtQixFQWdDbkIsR0FoQ21CLEVBaUNuQixHQWpDbUIsRUFrQ25CLEdBbENtQixFQW1DbkIsR0FuQ21CLEVBb0NuQixHQXBDbUIsRUFxQ25CLEdBckNtQixFQXNDbkIsR0F0Q21CLEVBdUNuQixHQXZDbUIsRUF3Q25CLEdBeENtQixFQXlDbkIsR0F6Q21CLEVB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dEYsRUFlR2hILEtBQUssQ0FBQzRCLFNBQU4sS0FBb0IsR0FBcEIsSUFBMkI1QixLQUFLLENBQUM5QixpQkFBTixLQUE0QixHQUF2RCxHQUE2RGdKLG1CQUFtQixFQUFoRixnQkFBcUYsdUpBZnhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBbUJELENBbkREOztPQUFNTSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BiL3ByaXNvbmJyZWFrMi5iMzE3NWE0YjY1M2I3N2VhYjgxZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQ3VzdG9tU29ja2V0IGZyb20gXCIuLi8uLi93c1wiO1xyXG5jb25zdCBlc2NhcGVoYXRjaGVzID0gW1xyXG4gIFwiMC0wXCIsXHJcbiAgXCIwLTdcIixcclxuICBcIjAtMTRcIixcclxuICBcIjctMFwiLFxyXG4gIFwiNy0xNFwiLFxyXG4gIFwiMTQtMFwiLFxyXG4gIFwiMTQtN1wiLFxyXG4gIFwiMTQtMTRcIixcclxuXTsgLy8gY29vcmRzIG9mIGVzY2FwZSBoYXRjaGVzXHJcbmNvbnN0IGluaXRpYWx0aWxlcyA9IFtcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkJcIixcclxuICBcIkJcIixcclxuICBcIkNcIixcclxuICBcIkNcIixcclxuICBcIkRcIixcclxuICBcIkRcIixcclxuICBcIkRcIixcclxuICBcIkRcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkZcIixcclxuICBcIkZcIixcclxuICBcIkdcIixcclxuICBcIkdcIixcclxuICBcIkdcIixcclxuICBcIkhcIixcclxuICBcIkhcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIkpcIixcclxuICBcIktcIixcclxuICBcIkxcIixcclxuICBcIkxcIixcclxuICBcIkxcIixcclxuICBcIkxcIixcclxuICBcIk1cIixcclxuICBcIk1cIixcclxuICBcIk5cIixcclxuICBcIk5cIixcclxuICBcIk5cIixcclxuICBcIk5cIixcclxuICBcIk5cIixcclxuICBcIk5cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIlBcIixcclxuICBcIlBcIixcclxuICBcIlFcIixcclxuICBcIlJcIixcclxuICBcIlJcIixcclxuICBcIlJcIixcclxuICBcIlJcIixcclxuICBcIlJcIixcclxuICBcIlJcIixcclxuICBcIlNcIixcclxuICBcIlNcIixcclxuICBcIlNcIixcclxuICBcIlNcIixcclxuICBcIlRcIixcclxuICBcIlRcIixcclxuICBcIlRcIixcclxuICBcIlRcIixcclxuICBcIlRcIixcclxuICBcIlRcIixcclxuICBcIlVcIixcclxuICBcIlVcIixcclxuICBcIlVcIixcclxuICBcIlVcIixcclxuICBcIlZcIixcclxuICBcIlZcIixcclxuICBcIldcIixcclxuICBcIldcIixcclxuICBcIlhcIixcclxuICBcIllcIixcclxuICBcIllcIixcclxuICBcIlpcIixcclxuICBcIj9cIixcclxuICBcIj9cIixcclxuXTsgLy8gaW5pdGlhbCB0aWxlIHBvb2xcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaXNvbkJyZWFrKCkge1xyXG4gIGNvbnN0IFtpbmxvYmJ5LCBzZXRJbmxvYmJ5XSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW2dhbWVpZCwgc2V0R2FtZWlkXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtwcmlzb25lcnNPckd1YXJkcywgc2V0UHJpc29uZXJzT3JHdWFyZHNdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3dzbXNncywgc2V0V3Ntc2dzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFttc2dpZCwgc2V0TXNnaWRdID0gdXNlU3RhdGUoMClcclxuICBsZXQgaG9zdCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAnd3NzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tJyA6ICd3czovL2xvY2FsaG9zdDo1MDAwJztcclxuICBjb25zdCBhY2NlcHRNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcclxuICAgIHNldE1zZ2lkKChjdXJyKSA9PiBjdXJyICsgMSlcclxuICAgIHNldFdzbXNncygoY3VycikgPT4gWy4uLmN1cnIsIG1lc3NhZ2UuZGF0YV0pO1xyXG4gIH1cclxuICBjb25zdCByZW1vdmVNZXNzYWdlID0gKG1lc3NhZ2VEYXRhKSA9PiB7XHJcbiAgICBsZXQgaSA9IHdzbXNncy5pbmRleE9mKG1lc3NhZ2VEYXRhKTtcclxuICAgIGxldCB3ID0gWy4uLndzbXNnc107XHJcbiAgICB3LnNwbGljZShpLDEpO1xyXG4gICAgc2V0V3Ntc2dzKHcpO1xyXG4gIH1cclxuICBjb25zdCBbY2xpZW50LCBzZXRDbGllbnRdID0gdXNlU3RhdGUobmV3IEN1c3RvbVNvY2tldChob3N0LCBhY2NlcHRNZXNzYWdlKSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IChcclxuICAgIGNsaWVudC5jb25uZWN0KClcclxuICApLFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgaW5sb2JieSB8fCBwcmlzb25lcnNPckd1YXJkcyA9PT0gJycgP1xyXG4gICAgPGRpdj5cclxuICAgICAgPHA+SW4gdGhlIGxvYmJ5PC9wPlxyXG4gICAgICA8bGFiZWw+R2FtZSBpZDombmJzcDs8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICAgIG5hbWU9XCJnYW1laWRcIlxyXG4gICAgICAgICAgdmFsdWU9e2dhbWVpZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEdhbWVpZChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxsYWJlbD4mbmJzcDs8L2xhYmVsPlxyXG4gICAgICA8YnV0dG9uIGlkPVwic3RhcnRnYW1lXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZWlkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICBzZXRQcmlzb25lcnNPckd1YXJkcygnUCcpO1xyXG4gICAgICAgICAgICAgIHNldElubG9iYnkoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgICBTdGFydCBHYW1lXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8bGFiZWw+Jm5ic3A7PC9sYWJlbD5cclxuICAgICAgPGJ1dHRvbiBpZD1cImpvaW5nYW1lXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZWlkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICBzZXRQcmlzb25lcnNPckd1YXJkcygnRycpO1xyXG4gICAgICAgICAgICAgIHNldElubG9iYnkoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgICBKb2luIEdhbWVcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHt3c21zZ3MubWFwKCAobXNnLCBpbngpID0+IChcclxuICAgICAgICA8bGkga2V5PXtpbnh9Pnttc2d9PC9saT5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICAgIDpcclxuICAgIDxHYW1lIHByaXNvbmVyc09yR3VhcmRzPXtwcmlzb25lcnNPckd1YXJkc31cclxuICAgICAgZ2FtZWlkPXtnYW1laWR9XHJcbiAgICAgIHdzbXNncz17d3Ntc2dzfVxyXG4gICAgICBjbGllbnQ9e2NsaWVudH1cclxuICAgICAgcmVtb3ZlTWVzc2FnZT17cmVtb3ZlTWVzc2FnZX1cclxuICAgICAgLz5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IFNxdWFyZSA9IChwcm9wcykgPT4ge1xyXG4gIC8vIHNxdWFyZXVzZWRieSwgcmksIGNpLCBjLCBvbkNsaWNrXHJcbiAgLy8gbmVlZCBzcXVhcmV1c2VkYnkgdG8gcGljayBjc3MgY2xhc3NOYW1lIGNvcnJlc3BvbmRpbmcgdG8gd2hvIHBsYXllZCB0aGUgdGlsZSBvbiB0aGUgc3F1YXJlXHJcbiAgLy8gbmVlZCByaSwgY2kgdG8gZGlzcGxheSBhbHRlcm5hdGluZyBjaGFyYWN0ZXJzIG9uIHVudXNlZCBzcXVhcmVzXHJcbiAgLy8gbmVlZCBjIHRvIHJlcHJlc2VudCB3aGljaCB0aWxlIGlzIG9uIHRoZSBzcXVhcmUsIGlmIGFueVxyXG4gIC8vIG5lZWQgb25DbGljayB0byBoYW5kbGUgc3F1YXJlIGNsaWNrIGF0IGEgaGlnaGVyIGxldmVsXHJcbiAgY29uc3QgdXNlZGJ5Y2xhc3MgPVxyXG4gICAgcHJvcHMuc3F1YXJldXNlZGJ5ID09PSBcIlBcIlxyXG4gICAgICA/IFwicGJTcXVhcmVVc2VkQnlQcmlzb25lcnNcIlxyXG4gICAgICA6IFwicGJTcXVhcmVVc2VkQnlHdWFyZHNcIjtcclxuICBjb25zdCB0ZGNsYXNzID1cclxuICAgIHByb3BzLmMgIT09IFwiLlwiXHJcbiAgICAgID8gdXNlZGJ5Y2xhc3NcclxuICAgICAgOiBwcm9wcy5yaSA9PT0gNyAmJiBwcm9wcy5jaSA9PT0gN1xyXG4gICAgICA/IFwicGJTcXVhcmVDZW50ZXJTcXVhcmVcIlxyXG4gICAgICA6IChwcm9wcy5yaSA9PT0gMCB8fCBwcm9wcy5yaSA9PT0gNyB8fCBwcm9wcy5yaSA9PT0gMTQpICYmXHJcbiAgICAgICAgKHByb3BzLmNpID09PSAwIHx8IHByb3BzLmNpID09PSA3IHx8IHByb3BzLmNpID09PSAxNClcclxuICAgICAgPyBcInBiU3F1YXJlRXNjYXBlSGF0Y2hcIlxyXG4gICAgICA6IHByb3BzLnJpICUgMiA9PT0gcHJvcHMuY2kgJSAyXHJcbiAgICAgID8gXCJwYlNxdWFyZVwiXHJcbiAgICAgIDogXCJwYlNxdWFyZTJcIjtcclxuICBjb25zdCB0ZHZhbHVlID1cclxuICAgIHByb3BzLmMgIT09IFwiLlwiXHJcbiAgICAgID8gcHJvcHMuY1xyXG4gICAgICA6IHRkY2xhc3MgPT09IFwicGJTcXVhcmVDZW50ZXJTcXVhcmVcIlxyXG4gICAgICA/IFwi4pywXCJcclxuICAgICAgOiB0ZGNsYXNzID09PSBcInBiU3F1YXJlRXNjYXBlSGF0Y2hcIlxyXG4gICAgICA/IFwi8J+Sq1wiXHJcbiAgICAgIDogcHJvcHMucmkgJSAyID09PSBwcm9wcy5jaSAlIDJcclxuICAgICAgPyBcIuKYuVwiLy9cIuKOlFwiXHJcbiAgICAgIDogXCLqkJVcIjsvL1wi4pymXCI7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXt0ZGNsYXNzfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAge3RkdmFsdWV9XHJcbiAgICA8L2J1dHRvbj5cclxuKTtcclxufTtcclxuXHJcbmNvbnN0IEJvYXJkID0gKHsgb25DbGljaywgc3F1YXJlcywgdXNlZGJ5IH0pID0+IHtcclxuICBjb25zdCByZW5kZXJTcXVhcmUgPSAocmksIGNpLCBjLCBzcXVhcmV1c2VkYnkpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0ZCBrZXk9e2BTcXVhcmUke3JpfS0ke2NpfWB9PlxyXG4gICAgICAgIDxTcXVhcmVcclxuICAgICAgICAgIGM9e2N9XHJcbiAgICAgICAgICBjaT17Y2l9XHJcbiAgICAgICAgICByaT17cml9XHJcbiAgICAgICAgICBzcXVhcmV1c2VkYnk9e3NxdWFyZXVzZWRieX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2socmksIGNpKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L3RkPlxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlclJvdyA9IChyaSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRyIGtleT17YEJvYXJkUm93JHtyaX1gfSBjbGFzc05hbWU9XCJyb3cgcGJSb3dcIj5cclxuICAgICAgICB7c3F1YXJlc1tyaV0ubWFwKChjLCBjaSkgPT4gcmVuZGVyU3F1YXJlKHJpLCBjaSwgYywgdXNlZGJ5W3JpXVtjaV0pKX1cclxuICAgICAgPC90cj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDx0YWJsZSBjbGFzc05hbWU9XCJwYkJvYXJkXCI+XHJcbiAgICAgIDx0Ym9keT57c3F1YXJlcy5tYXAoKHIsIHJpKSA9PiByZW5kZXJSb3cocmkpKX08L3Rib2R5PlxyXG4gICAgPC90YWJsZT5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgR2FtZSA9ICh7cHJpc29uZXJzT3JHdWFyZHMsIGdhbWVpZCwgd3Ntc2dzLCBjbGllbnQsIHJlbW92ZU1lc3NhZ2V9KSA9PiB7XHJcbiAgY29uc3QgW3RpbGVzLCBzZXRUaWxlc10gPSB1c2VTdGF0ZShbLi4uaW5pdGlhbHRpbGVzXSk7XHJcbiAgY29uc3QgW3B0aWxlcywgc2V0UHRpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZ3RpbGVzLCBzZXRHdGlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzcXVhcmVzLCBzZXRTcXVhcmVzXSA9IHVzZVN0YXRlKEFycmF5KDE1KS5maWxsKEFycmF5KDE1KS5maWxsKFwiLlwiKSkpO1xyXG4gIGNvbnN0IFt1c2VkYnksIHNldFVzZWRieV0gPSB1c2VTdGF0ZShBcnJheSgxNSkuZmlsbChBcnJheSgxNSkuZmlsbChcIlwiKSkpO1xyXG4gIGNvbnN0IFtzZWxlY3Rpb24sIHNldFNlbGVjdGlvbl0gPSB1c2VTdGF0ZSgtMSk7XHJcbiAgY29uc3QgW3dob3NldHVybiwgc2V0V2hvc2V0dXJuXSA9IHVzZVN0YXRlKFwiUFwiKTtcclxuICBjb25zdCBbY3VycmVudGNvb3Jkcywgc2V0Q3VycmVudGNvb3Jkc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Jlc2N1ZXMsIHNldFJlc2N1ZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3NuYXBzaG90LCBzZXRTbmFwc2hvdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICBzcXVhcmVzOiBbLi4uc3F1YXJlc10sXHJcbiAgICB1c2VkYnk6IFsuLi51c2VkYnldLFxyXG4gICAgcHRpbGVzOiBbLi4ucHRpbGVzXSxcclxuICAgIGd0aWxlczogWy4uLmd0aWxlc10sXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiKSB7XHJcbiAgICAgIGxldCB0ZW1wUFRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICAgIGxldCB0ZW1wR1RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICAgIGxldCB0ZW1wVGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgICB3aGlsZSAodGVtcFBUaWxlcy5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZW1wVGlsZXMubGVuZ3RoKTtcclxuICAgICAgICB0ZW1wUFRpbGVzLnB1c2godGVtcFRpbGVzW3JhbmRdKTtcclxuICAgICAgICB0ZW1wVGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZW1wVGlsZXMubGVuZ3RoKTtcclxuICAgICAgICB0ZW1wR1RpbGVzLnB1c2godGVtcFRpbGVzW3JhbmRdKTtcclxuICAgICAgICB0ZW1wVGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRlbXBQVGlsZXMuc29ydCgpO1xyXG4gICAgICB0ZW1wR1RpbGVzLnNvcnQoKTtcclxuICAgICAgc2V0R3RpbGVzKHRlbXBHVGlsZXMpO1xyXG4gICAgICBzZXRQdGlsZXModGVtcFBUaWxlcyk7XHJcbiAgICAgIHNldFRpbGVzKHRlbXBUaWxlcyk7XHJcbiAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICBzcXVhcmVzOiBbLi4uc3F1YXJlc10sXHJcbiAgICAgICAgdXNlZGJ5OiBbLi4udXNlZGJ5XSxcclxuICAgICAgICBwdGlsZXM6IFsuLi50ZW1wUFRpbGVzXSxcclxuICAgICAgICBndGlsZXM6IFsuLi50ZW1wR1RpbGVzXSAgICBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIGdnZFwiKVxyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICAgIGZ1bmM6IFwiZ2dkXCIgLy8gZ2V0IGdhbWUgZGF0YVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgfVxyXG4gICAgICBjYXRjaCB7fVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IG1zZyA9IHdzbXNnc1swXTtcclxuICAgIGlmIChtc2cpIHByb2Nlc3NNZXNzYWdlKG1zZyk7XHJcbiAgICAgICAgXHJcbiAgfSxbd3Ntc2dzXSlcclxuXHJcbiAgZnVuY3Rpb24gcHJvY2Vzc01lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgbGV0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTsgLy8gd2FzIG1lc3NhZ2UuZGF0YVxyXG4gICAgaWYgKG1lc3NhZ2VEYXRhLmdhbWVpZCA9PT0gZ2FtZWlkICYmIG1lc3NhZ2VEYXRhLnR5cGUgPT09IFwicGJcIikgeyAvLyBUaGlzIGluc3RhbmNlIG9mIGEgcHJpc29uIGJyZWFrIGdhbWVcclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwicmVxdWVzdGdhbWVkYXRhXCIgJiYgbWVzc2FnZURhdGEucmVxdWVzdG9yICE9PSBwcmlzb25lcnNPckd1YXJkcykgeyAvLyBPcHBvbmVudCByZXF1ZXN0ZWQgZ2FtZSBpbmZvXHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgICAgZnVuYzogXCJwcm92aWRlZ2FtZWRhdGFcIiwgLy8gcHJvdmlkZSBnYW1lIGRhdGFcclxuICAgICAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcywgLy8gd2hvIHNlbnQgdGhlIGRhdGFcclxuICAgICAgICAgICAgdGlsZXM6IHRpbGVzLFxyXG4gICAgICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLFxyXG4gICAgICAgICAgICBwdGlsZXM6IHB0aWxlcyxcclxuICAgICAgICAgICAgZ3RpbGVzOiBndGlsZXMsXHJcbiAgICAgICAgICAgIHVzZWRieTogdXNlZGJ5LFxyXG4gICAgICAgICAgICB3aG9zZXR1cm46IHdob3NldHVybixcclxuICAgICAgICAgICAgc2VsZWN0aW9uOiBzZWxlY3Rpb24sXHJcbiAgICAgICAgICAgIGN1cnJlbnRjb29yZHM6IGN1cnJlbnRjb29yZHMsXHJcbiAgICAgICAgICAgIHNuYXBzaG90OiBzbmFwc2hvdCxcclxuICAgICAgICAgICAgcmVzY3VlczogcmVzY3Vlc1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInByb3ZpZGVnYW1lZGF0YVwiICYmIG1lc3NhZ2VEYXRhLnNlbmRlciAhPT0gcHJpc29uZXJzT3JHdWFyZHMpIHsgLy8gb3Bwb25lbnQgcHJvdmlkZWQgZ2FtZSBkYXRhXHJcbiAgICAgICAgc2V0VGlsZXMobWVzc2FnZURhdGEudGlsZXMpO1xyXG4gICAgICAgIHNldFNxdWFyZXMobWVzc2FnZURhdGEuc3F1YXJlcyk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG1lc3NhZ2VEYXRhLnB0aWxlcyk7XHJcbiAgICAgICAgc2V0R3RpbGVzKG1lc3NhZ2VEYXRhLmd0aWxlcyk7XHJcbiAgICAgICAgc2V0VXNlZGJ5KG1lc3NhZ2VEYXRhLnVzZWRieSk7XHJcbiAgICAgICAgc2V0V2hvc2V0dXJuKG1lc3NhZ2VEYXRhLndob3NldHVybik7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKG1lc3NhZ2VEYXRhLnNlbGVjdGlvbik7XHJcbiAgICAgICAgc2V0Q3VycmVudGNvb3JkcyhtZXNzYWdlRGF0YS5jdXJyZW50Y29vcmRzKTtcclxuICAgICAgICBzZXRTbmFwc2hvdChtZXNzYWdlRGF0YS5zbmFwc2hvdCk7XHJcbiAgICAgICAgc2V0UmVzY3VlcyhtZXNzYWdlRGF0YS5yZXNjdWVzKTtcclxuICAgICAgfVxyXG4gICAgICAvLyB3aGVuIGd1YXJkcyBqb2luIGdhbWUgdGhleSBzZW5kIGdnZCwgYW5kIHByaXNvbmVyIHBpY2tzIGl0IHVwIGFuZCBzZW5kcyBzZ2QsIHRoZW4gZ3VhcmRzIHBpY2sgdGhhdCB1cCBhbmQgdGFrZSB0aGUgZGF0YVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJnZ2RcIiAmJiBwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIpIHsgLy8gZ2V0IGdhbWUgZGF0YSAoc2VudCBieSBndWFyZHMsIHByaXNvbmVycyByZXNwb25kIGhlcmUpXHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgICAgZnVuYzogXCJzZ2RcIiwgLy8gc2VuZCBnYW1lIGRhdGFcclxuICAgICAgICAgICAgdGlsZXM6IHRpbGVzLFxyXG4gICAgICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLFxyXG4gICAgICAgICAgICBwdGlsZXM6IHB0aWxlcyxcclxuICAgICAgICAgICAgZ3RpbGVzOiBndGlsZXMsXHJcbiAgICAgICAgICAgIHVzZWRieTogdXNlZGJ5LFxyXG4gICAgICAgICAgICB3aG9zZXR1cm46IHdob3NldHVybixcclxuICAgICAgICAgICAgc2VsZWN0aW9uOiBzZWxlY3Rpb24sXHJcbiAgICAgICAgICAgIGN1cnJlbnRjb29yZHM6IGN1cnJlbnRjb29yZHMsXHJcbiAgICAgICAgICAgIHNuYXBzaG90OiBzbmFwc2hvdCxcclxuICAgICAgICAgICAgcmVzY3VlczogcmVzY3VlcyAvLyBtYXkgaGF2ZSByZXNjdWVkIGFub3RoZXIgcHJpc29uZXJcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJzZ2RcIiAmJiBwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJHXCIpIHsgLy8gc2VuZCBnYW1lIGRhdGEgKHByaXNvbmVycyBzZW50IGl0LCBndWFyZHMgbm93IGdldCBpdClcclxuICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgc2V0U3F1YXJlcyhtZXNzYWdlRGF0YS5zcXVhcmVzKTtcclxuICAgICAgICBzZXRQdGlsZXMobWVzc2FnZURhdGEucHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobWVzc2FnZURhdGEuZ3RpbGVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobWVzc2FnZURhdGEudXNlZGJ5KTtcclxuICAgICAgICBzZXRXaG9zZXR1cm4obWVzc2FnZURhdGEud2hvc2V0dXJuKTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24obWVzc2FnZURhdGEuc2VsZWN0aW9uKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKG1lc3NhZ2VEYXRhLmN1cnJlbnRjb29yZHMpO1xyXG4gICAgICAgIHNldFNuYXBzaG90KG1lc3NhZ2VEYXRhLnNuYXBzaG90KTtcclxuICAgICAgICBzZXRSZXNjdWVzKG1lc3NhZ2VEYXRhLnJlc2N1ZXMpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImVwdFwiKSB7IC8vIGVuZCBwcmlzb25lcnMgdHVyblxyXG4gICAgICAgIHNldFdob3NldHVybihcIkdcIik7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgIHNldFVzZWRieShtZXNzYWdlRGF0YS51c2VkYnkpO1xyXG4gICAgICAgIHNldFB0aWxlcyhtZXNzYWdlRGF0YS5wdGlsZXMpO1xyXG4gICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICBzZXRSZXNjdWVzKG1lc3NhZ2VEYXRhLnJlc2N1ZXMpO1xyXG4gICAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICAgIHNxdWFyZXM6IFsuLi5tZXNzYWdlRGF0YS5zcXVhcmVzXSxcclxuICAgICAgICAgIHVzZWRieTogWy4uLm1lc3NhZ2VEYXRhLnVzZWRieV0sXHJcbiAgICAgICAgICBwdGlsZXM6IFsuLi5tZXNzYWdlRGF0YS5wdGlsZXNdLFxyXG4gICAgICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICAgICAgICB9KTsgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiZWd0XCIpIHsgLy8gZW5kIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgc2V0V2hvc2V0dXJuKFwiUFwiKTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgICAgIHNldFNxdWFyZXMobWVzc2FnZURhdGEuc3F1YXJlcyk7XHJcbiAgICAgICAgc2V0VXNlZGJ5KG1lc3NhZ2VEYXRhLnVzZWRieSk7XHJcbiAgICAgICAgc2V0R3RpbGVzKG1lc3NhZ2VEYXRhLmd0aWxlcyk7XHJcbiAgICAgICAgc2V0VGlsZXMobWVzc2FnZURhdGEudGlsZXMpO1xyXG4gICAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICAgIHNxdWFyZXM6IFsuLi5tZXNzYWdlRGF0YS5zcXVhcmVzXSxcclxuICAgICAgICAgIHVzZWRieTogWy4uLm1lc3NhZ2VEYXRhLnVzZWRieV0sXHJcbiAgICAgICAgICBwdGlsZXM6IFsuLi5wdGlsZXNdLFxyXG4gICAgICAgICAgZ3RpbGVzOiBbLi4ubWVzc2FnZURhdGEuZ3RpbGVzXSxcclxuICAgICAgICB9KTsgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZU1lc3NhZ2UobWVzc2FnZSk7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2sgPSAocmksIGNpKSA9PiB7XHJcbiAgICBsZXQgbmV3U3F1YXJlcyA9IFsuLi5zcXVhcmVzXTtcclxuICAgIGxldCBuZXdVc2VkYnkgPSBbLi4udXNlZGJ5XTtcclxuICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgIGxldCBuZXdSb3cgPSBbLi4uc3F1YXJlc1tyaV1dO1xyXG4gICAgbGV0IHNxdWFyZXZhbHVlID0gc3F1YXJlc1tyaV1bY2ldO1xyXG4gICAgbGV0IG5ld0N1cnJlbnRjb29yZHMgPSBbLi4uY3VycmVudGNvb3Jkc107XHJcblxyXG4gICAgbGV0IGNvb3JkID0gU3RyaW5nKHJpKSArIFwiLVwiICsgU3RyaW5nKGNpKTtcclxuICAgIGxldCBjY2kgPSBjdXJyZW50Y29vcmRzLmluZGV4T2YoY29vcmQpO1xyXG4gICAgaWYgKHNlbGVjdGlvbiA+IC0xICYmIHNxdWFyZXZhbHVlID09PSBcIi5cIikgeyAvLyB0aWxlIGlzIHNlbGVjdGVkIGZyb20gcmFjayBhbmQgY2xpY2tlZCBzcXVhcmUgaXMgbm90IHVzZWQgeWV0XHJcbiAgICAgIG5ld1Jvd1tjaV0gPVxyXG4gICAgICAgIHdob3NldHVybiA9PT0gXCJQXCIgPyBuZXdQdGlsZXNbc2VsZWN0aW9uXSA6IG5ld0d0aWxlc1tzZWxlY3Rpb25dO1xyXG4gICAgICBuZXdTcXVhcmVzW3JpXSA9IFsuLi5uZXdSb3ddO1xyXG4gICAgICB3aG9zZXR1cm4gPT09IFwiUFwiXHJcbiAgICAgICAgPyBuZXdQdGlsZXMuc3BsaWNlKHNlbGVjdGlvbiwgMSlcclxuICAgICAgICA6IG5ld0d0aWxlcy5zcGxpY2Uoc2VsZWN0aW9uLCAxKTtcclxuICAgICAgbGV0IG5ld1VzZWRieVJvdyA9IFsuLi5uZXdVc2VkYnlbcmldXTtcclxuICAgICAgbmV3VXNlZGJ5Um93W2NpXSA9IHdob3NldHVybjtcclxuICAgICAgbmV3VXNlZGJ5W3JpXSA9IFsuLi5uZXdVc2VkYnlSb3ddO1xyXG4gICAgICBsZXQgbmV3U2VsZWN0aW9uID0gc2VsZWN0aW9uO1xyXG4gICAgICBpZiAod2hvc2V0dXJuID09PSBcIlBcIiAmJiBuZXdTZWxlY3Rpb24gPT09IG5ld1B0aWxlcy5sZW5ndGgpIHsgXHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3U2VsZWN0aW9uIC0gMVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh3aG9zZXR1cm4gPT09IFwiR1wiICYmIG5ld1NlbGVjdGlvbiA9PT0gbmV3R3RpbGVzLmxlbmd0aCkgeyBcclxuICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdTZWxlY3Rpb24gLSAxXHJcbiAgICAgIH1cclxuICAgICAgc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbik7XHJcbiAgICAgIHNldFNxdWFyZXMobmV3U3F1YXJlcyk7XHJcbiAgICAgIHNldFVzZWRieShuZXdVc2VkYnkpO1xyXG4gICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgIHNldEN1cnJlbnRjb29yZHMoWy4uLmN1cnJlbnRjb29yZHMsIGNvb3JkXSk7XHJcbiAgICB9IGVsc2UgaWYgKGNjaSA+IC0xKSB7IC8vIGNsaWNrZWQgc3F1YXJlIGhhcyBhIHRpbGUgb24gaXQgZnJvbSB0aGUgY3VycmVudCBtb3ZlIGluIHByb2dyZXNzXHJcbiAgICAgIHdob3NldHVybiA9PT0gXCJQXCJcclxuICAgICAgICA/IG5ld1B0aWxlcy5wdXNoKHNxdWFyZXZhbHVlKVxyXG4gICAgICAgIDogbmV3R3RpbGVzLnB1c2goc3F1YXJldmFsdWUpO1xyXG4gICAgICBsZXQgbmV3Um93ID0gWy4uLm5ld1NxdWFyZXNbcmldXTtcclxuICAgICAgbmV3Um93W2NpXSA9IFwiLlwiO1xyXG4gICAgICBuZXdTcXVhcmVzW3JpXSA9IFsuLi5uZXdSb3ddO1xyXG4gICAgICBsZXQgbmV3VXNlZGJ5Um93ID0gWy4uLm5ld1VzZWRieVtyaV1dO1xyXG4gICAgICBuZXdVc2VkYnlSb3dbY2ldID0gXCJcIjtcclxuICAgICAgbmV3VXNlZGJ5W3JpXSA9IFsuLi5uZXdVc2VkYnlSb3ddO1xyXG4gICAgICBzZXRTZWxlY3Rpb24oXHJcbiAgICAgICAgd2hvc2V0dXJuID09PSBcIlBcIiA/IG5ld1B0aWxlcy5sZW5ndGggLSAxIDogbmV3R3RpbGVzLmxlbmd0aCAtIDFcclxuICAgICAgKTtcclxuICAgICAgbmV3Q3VycmVudGNvb3Jkcy5zcGxpY2UoY2NpLCAxKTtcclxuXHJcbiAgICAgIHNldFNxdWFyZXMobmV3U3F1YXJlcyk7XHJcbiAgICAgIHNldFVzZWRieShuZXdVc2VkYnkpO1xyXG4gICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgIHNldEN1cnJlbnRjb29yZHMobmV3Q3VycmVudGNvb3Jkcyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJpc29uZXJUaWxlQ2xpY2sgPSAodGlsZWluZGV4KSA9PiB7XHJcbiAgICAvLyB0aGUgaW5kZXggb2YgcHRpbGVzXHJcbiAgICBpZiAod2hvc2V0dXJuID09PSBcIlBcIikge1xyXG4gICAgICBzZXRTZWxlY3Rpb24odGlsZWluZGV4KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwiSXQgaXMgbm90IHlvdXIgdHVyblwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVHdWFyZFRpbGVDbGljayA9ICh0aWxlaW5kZXgpID0+IHtcclxuICAgIC8vIHRoZSBpbmRleCBvZiBndGlsZXNcclxuICAgIGlmICh3aG9zZXR1cm4gPT09IFwiR1wiKSB7XHJcbiAgICAgIHNldFNlbGVjdGlvbih0aWxlaW5kZXgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoXCJJdCBpcyBub3QgeW91ciB0dXJuXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGVuZFByaXNvbmVyc1R1cm4gPSAoKSA9PiB7XHJcbiAgICBpZiAoIWlzUGxheVZhbGlkKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IG5ld1Jlc2N1ZXMgPSByZXNjdWVzO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50Y29vcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChlc2NhcGVoYXRjaGVzLmluZGV4T2YoY3VycmVudGNvb3Jkc1tpXSkgPiAtMSkge1xyXG4gICAgICAgIG5ld1Jlc2N1ZXMgPSBuZXdSZXNjdWVzICsgMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IG5ld1B0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgIHdoaWxlIChuZXdQdGlsZXMubGVuZ3RoIDwgNyAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgbmV3UHRpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICB9XHJcbiAgICBuZXdQdGlsZXMuc29ydCgpO1xyXG4gICAgc2V0V2hvc2V0dXJuKFwiR1wiKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0UmVzY3VlcyhuZXdSZXNjdWVzKTtcclxuICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgc3F1YXJlczogWy4uLnNxdWFyZXNdLFxyXG4gICAgICB1c2VkYnk6IFsuLi51c2VkYnldLFxyXG4gICAgICBwdGlsZXM6IFsuLi5uZXdQdGlsZXNdLFxyXG4gICAgICBndGlsZXM6IFsuLi5ndGlsZXNdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVwdFwiLCAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLCAvLyB0aGlzIHdhcyBiZWluZyBjaGFuZ2VkIGFzIHRoZSB0aWxlcyB3ZXJlIGJlaW5nIHBsYXllZFxyXG4gICAgICAgIHVzZWRieTogdXNlZGJ5LCAvLyB0aGlzIHdhcyBiZWluZyBjaGFuZ2VkIGFzIHRoZSB0aWxlcyB3ZXJlIGJlaW5nIHBsYXllZFxyXG4gICAgICAgIHB0aWxlczogbmV3UHRpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgIHJlc2N1ZXM6IG5ld1Jlc2N1ZXMgLy8gbWF5IGhhdmUgcmVzY3VlZCBhbm90aGVyIHByaXNvbmVyXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGVuZEd1YXJkc1R1cm4gPSAoKSA9PiB7XHJcbiAgICBpZiAoIWlzUGxheVZhbGlkKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgIHdoaWxlIChuZXdHdGlsZXMubGVuZ3RoIDwgNyAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgbmV3R3RpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICB9XHJcbiAgICBuZXdHdGlsZXMuc29ydCgpO1xyXG4gICAgbGV0IHNuYXBzcXVhcmVzID0gWy4uLnNxdWFyZXNdO1xyXG4gICAgbGV0IHNuYXB1c2VkYnkgPSBbLi4udXNlZGJ5XTtcclxuICAgIGxldCBzbmFwcHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICBsZXQgc25hcGd0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgc2V0V2hvc2V0dXJuKFwiUFwiKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICBzcXVhcmVzOiBzbmFwc3F1YXJlcyxcclxuICAgICAgdXNlZGJ5OiBzbmFwdXNlZGJ5LFxyXG4gICAgICBwdGlsZXM6IHNuYXBwdGlsZXMsXHJcbiAgICAgIGd0aWxlczogc25hcGd0aWxlcyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlZ3RcIiwgLy8gZW5kIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgc3F1YXJlczogc3F1YXJlcywgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICB1c2VkYnk6IHVzZWRieSwgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICBndGlsZXM6IG5ld0d0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgZ3VhcmRzIHJhY2tcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICBjb25zdCBzd2FwUHJpc29uZXJzVGlsZXMgPSAoKSA9PiB7XHJcbiAgICBpZiAodGlsZXMubGVuZ3RoIDwgNykge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJOZWVkIDcgaW4gdGhlIGJhZyB0byBleGNoYW5nZVwiKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3UHRpbGVzID0gW107XHJcbiAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgd2hpbGUgKG5ld1B0aWxlcy5sZW5ndGggPCA3ICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICBuZXdQdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgIH1cclxuICAgIG5ld1B0aWxlcy5zb3J0KCk7XHJcbiAgICBuZXdUaWxlcyA9IFsuLi5uZXdUaWxlcywgLi4uc25hcHNob3QucHRpbGVzXTtcclxuICAgIG5ld1RpbGVzLnNvcnQoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRXhjaGFuZ2UgcHRpbGVzXCIpXHJcbiAgICBjb25zb2xlLmxvZyhzbmFwc2hvdC5wdGlsZXMpXHJcbiAgICBjb25zb2xlLmxvZyhwdGlsZXMpXHJcbiAgICBjb25zb2xlLmxvZyhuZXdQdGlsZXMpXHJcbiAgICBjb25zb2xlLmxvZyh0aWxlcylcclxuICAgIGNvbnNvbGUubG9nKG5ld1RpbGVzKVxyXG4gICAgc2V0U3F1YXJlcyhbLi4uc25hcHNob3Quc3F1YXJlc10pO1xyXG4gICAgc2V0VXNlZGJ5KFsuLi5zbmFwc2hvdC51c2VkYnldKTtcclxuICAgIHNldFdob3NldHVybihcIkdcIik7XHJcbiAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgc3F1YXJlczogWy4uLnNuYXBzaG90LnNxdWFyZXNdLFxyXG4gICAgICB1c2VkYnk6IFsuLi5zbmFwc2hvdC51c2VkYnldLFxyXG4gICAgICBwdGlsZXM6IFsuLi5uZXdQdGlsZXNdLFxyXG4gICAgICBndGlsZXM6IFsuLi5ndGlsZXNdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVwdFwiLCAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICBzcXVhcmVzOiBzbmFwc2hvdC5zcXVhcmVzLCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiBzcXVhcmVzXHJcbiAgICAgICAgdXNlZGJ5OiBzbmFwc2hvdC51c2VkYnksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHVzZWQgYnlcclxuICAgICAgICBwdGlsZXM6IG5ld1B0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgcHJpc29uZXJzIHJhY2tcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICByZXNjdWVzOiByZXNjdWVzIC8vIG5vIHJlc2N1ZXMgb24gYW4gZXhjaGFuZ2VcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gIH1cclxuICBcclxuICBjb25zdCBzd2FwR3VhcmRzVGlsZXMgPSAoKSA9PiB7XHJcbiAgICBpZiAodGlsZXMubGVuZ3RoIDwgNykge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJOZWVkIDcgaW4gdGhlIGJhZyB0byBleGNoYW5nZVwiKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3R3RpbGVzID0gW107XHJcbiAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgd2hpbGUgKG5ld0d0aWxlcy5sZW5ndGggPCA3ICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICBuZXdHdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgIH1cclxuICAgIG5ld0d0aWxlcy5zb3J0KCk7XHJcbiAgICBuZXdUaWxlcyA9IFsuLi5uZXdUaWxlcywgLi4uc25hcHNob3QuZ3RpbGVzXTtcclxuICAgIG5ld1RpbGVzLnNvcnQoKTtcclxuICAgIHNldFNxdWFyZXMoWy4uLnNuYXBzaG90LnNxdWFyZXNdKTtcclxuICAgIHNldFVzZWRieShbLi4uc25hcHNob3QudXNlZGJ5XSk7XHJcbiAgICBzZXRXaG9zZXR1cm4oXCJQXCIpO1xyXG4gICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgIHNxdWFyZXM6IFsuLi5zbmFwc2hvdC5zcXVhcmVzXSxcclxuICAgICAgdXNlZGJ5OiBbLi4uc25hcHNob3QudXNlZGJ5XSxcclxuICAgICAgcHRpbGVzOiBbLi4ucHRpbGVzXSxcclxuICAgICAgZ3RpbGVzOiBbLi4ubmV3R3RpbGVzXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlZ3RcIiwgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgc3F1YXJlczogc25hcHNob3Quc3F1YXJlcywgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgZ3RpbGVzOiBuZXdHdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaXNQbGF5VmFsaWQoKSB7XHJcbiAgICBpZiAoc3F1YXJlc1s3XVs3XSA9PT0gXCIuXCIpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiRmlyc3QgcGxheSBtdXN0IGhpdCBjZW50ZXIgc3F1YXJlXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQgbG93cm93ID0gMTU7XHJcbiAgICBsZXQgaGlnaHJvdyA9IC0xO1xyXG4gICAgbGV0IGxvd2NvbCA9IDE1O1xyXG4gICAgbGV0IGhpZ2hjb2wgPSAtMTtcclxuICAgIGZvciAodmFyIHI9MDsgciA8IDE1OyArK3IpIHtcclxuICAgICAgZm9yICh2YXIgYz0wOyBjIDwgMTU7ICsrYykge1xyXG4gICAgICAgIGlmIChzcXVhcmVzW3JdW2NdICE9PSBcIi5cIikge1xyXG4gICAgICAgICAgaWYgKCEociA+IDAgJiYgc3F1YXJlc1tyLTFdW2NdICE9PSBcIi5cIikgJiZcclxuICAgICAgICAgICAhKGMgPiAwICYmIHNxdWFyZXNbcl1bYy0xXSAhPT0gXCIuXCIpICYmXHJcbiAgICAgICAgICAgIShyIDwgMTQgJiYgc3F1YXJlc1tyKzFdW2NdICE9PSBcIi5cIikgJiZcclxuICAgICAgICAgICAhKGMgPCAxNCAmJiBzcXVhcmVzW3JdW2MrMV0gIT09IFwiLlwiKVxyXG4gICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJFYWNoIHBsYXllZCB0aWxlIG11c3QgYmUgcGFydCBvZiBhIHdvcmRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgaWYgKHNuYXBzaG90LnNxdWFyZXNbcl1bY10gPT09IFwiLlwiKSB7XHJcbiAgICAgICAgICAgICAvLyBUaGlzIHNxdWFyZSB3YXMgcGxheWVkIG9uIHRoaXMgdHVyblxyXG4gICAgICAgICAgICAgaWYgKHIgPCBsb3dyb3cpIHsgbG93cm93ID0gcjt9XHJcbiAgICAgICAgICAgICBpZiAociA+IGhpZ2hyb3cpIHsgaGlnaHJvdyA9IHI7fVxyXG4gICAgICAgICAgICAgaWYgKGMgPCBsb3djb2wpIHsgbG93Y29sID0gYzt9XHJcbiAgICAgICAgICAgICBpZiAoYyA+IGhpZ2hjb2wpIHsgaGlnaGNvbCA9IGM7fVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGxvd3JvdyA9PT0gMTUpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiWW91IGRpZG4ndCBwbGF5IGFueSB0aWxlc1wiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvd3JvdyAhPT0gaGlnaHJvdyAmJiBsb3djb2wgIT09IGhpZ2hjb2wpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiVGlsZXMgcGxheWVkIG11c3QgYmUgaW4gYSBzdHJhaWdodCBsaW5lXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQgcGxheXRocnUgPSBmYWxzZTtcclxuICAgIGxldCBob29rbWFkZSA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgciA9IGxvd3JvdzsgciA8PSBoaWdocm93OyArK3IpIHtcclxuICAgICAgZm9yICh2YXIgYyA9IGxvd2NvbDsgYyA8PSBoaWdoY29sOyArK2MpIHtcclxuICAgICAgICBpZiAoc3F1YXJlc1tyXVtjXSA9PT0gXCIuXCIpIHtcclxuICAgICAgICAgIHdpbmRvdy5hbGVydChcIlRoZXJlIGlzIGEgZ2FwIGluIHlvdXIgd29yZFwiKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNuYXBzaG90LnNxdWFyZXNbcl1bY10gIT09IFwiLlwiKSB7XHJcbiAgICAgICAgICBwbGF5dGhydSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgciA+IDAgJiYgc3F1YXJlc1tyLTFdW2NdICE9PSBcIi5cIikgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIHIgPCAxNCAmJiBzcXVhcmVzW3IrMV1bY10gIT09IFwiLlwiKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgYyA+IDAgJiYgc3F1YXJlc1tyXVtjLTFdICE9PSBcIi5cIikgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGMgPCAxNCAmJiBzcXVhcmVzW3JdW2MrMV0gIT09IFwiLlwiKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBDaGVjayBwbGF5IHRvIG9yIGZyb20gYSB0aWxlIChwbGF5IHRocm91Z2ggYnV0IG5vdCBlaXRoZXIgc2lkZSlcclxuICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgbG93Y29sID4gMCAmJiBzbmFwc2hvdC5zcXVhcmVzW2xvd3Jvd11bbG93Y29sLTFdICE9PSBcIi5cIikgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgaGlnaGNvbCA8IDE0ICYmIHNuYXBzaG90LnNxdWFyZXNbbG93cm93XVtoaWdoY29sKzFdICE9PSBcIi5cIikgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgbG93cm93ID4gMCAmJiBzbmFwc2hvdC5zcXVhcmVzW2xvd3Jvdy0xXVtsb3djb2xdICE9PSBcIi5cIikgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgaGlnaHJvdyA8IDE0ICYmIHNuYXBzaG90LnNxdWFyZXNbaGlnaHJvdysxXVtsb3djb2xdICE9PSBcIi5cIikgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgIGlmICghcGxheXRocnUgJiYgIWhvb2ttYWRlICYmIHNuYXBzaG90LnNxdWFyZXNbN11bN10gIT09IFwiLlwiKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIldvcmRzIG11c3QgYmUgY29ubmVjdGVkXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlY2FsbFRpbGVzID0gKCkgPT4ge1xyXG4gICAgc2V0U3F1YXJlcyhbLi4uc25hcHNob3Quc3F1YXJlc10pO1xyXG4gICAgc2V0VXNlZGJ5KFsuLi5zbmFwc2hvdC51c2VkYnldKTtcclxuICAgIHNldFB0aWxlcyhbLi4uc25hcHNob3QucHRpbGVzXSk7XHJcbiAgICBzZXRHdGlsZXMoWy4uLnNuYXBzaG90Lmd0aWxlc10pO1xyXG4gICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlcXVlc3RHYW1lRGF0YSA9IChwbGF5ZXJ0eXBlKSA9PiB7XHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwicmVxdWVzdGdhbWVkYXRhXCIsIC8vIHJlcXVlc3QgZ2FtZSBkYXRhXHJcbiAgICAgICAgcmVxdWVzdG9yOiBwcmlzb25lcnNPckd1YXJkc1xyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSAoZXZlbnQpID0+IHtcclxuICAgIHdpbmRvdy5hbGVydChcIllvdSBwcmVzc2VkIFwiICsgZXZlbnQua2V5KVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcHJpc29uYnJlYWtcIiBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgcGJ0aXRsZVwiPlByaXNvbiBCcmVhazwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTIgcGJob21lbGlua1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cInJlcXVlc3RHYW1lRGF0YVwiXHJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiU3luYyB3aXRoIG9wcG9uZW50XCJcclxuICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgcmVxdWVzdEdhbWVEYXRhKHByaXNvbmVyc09yR3VhcmRzKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnN5bmM8L2k+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiLi4vLi4vXCJ9PlxyXG4gICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yIHBiUHJpc29uZXJzXCI+XHJcbiAgICAgICAgICA8UHJpc29uZXJzXHJcbiAgICAgICAgICAgIHB0aWxlcz17cHRpbGVzfVxyXG4gICAgICAgICAgICB3aG9zZXR1cm49e3dob3NldHVybn1cclxuICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyh0aSkgPT4gaGFuZGxlUHJpc29uZXJUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICBvbkNsaWNrRmluaXNoVHVybj17KCkgPT4gZW5kUHJpc29uZXJzVHVybigpfVxyXG4gICAgICAgICAgICBvbkNsaWNrVGlsZVJlY2FsbD17KCkgPT4gcmVjYWxsVGlsZXMoKX1cclxuICAgICAgICAgICAgb25DbGlja1RpbGVFeGNoYW5nZT17KCkgPT4gc3dhcFByaXNvbmVyc1RpbGVzKCl9XHJcbiAgICAgICAgICAgIHJlc2N1ZXM9e3Jlc2N1ZXN9XHJcbiAgICAgICAgICAgIHByaXNvbmVyc09yR3VhcmRzPXtwcmlzb25lcnNPckd1YXJkc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICB7cHJpc29uZXJzT3JHdWFyZHMgPT09IHdob3NldHVybiA/XHJcbiAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgc3F1YXJlcz17c3F1YXJlc31cclxuICAgICAgICAgICAgdXNlZGJ5PXt1c2VkYnl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhyaSwgY2kpID0+IGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socmksIGNpKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgc3F1YXJlcz17c3F1YXJlc31cclxuICAgICAgICAgICAgdXNlZGJ5PXt1c2VkYnl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5hbGVydChcIlRoYXQgdGlja2xlcyFcIil9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTIgcGJHdWFyZHNcIj5cclxuICAgICAgICAgIDxHdWFyZHNcclxuICAgICAgICAgICAgZ3RpbGVzPXtndGlsZXN9XHJcbiAgICAgICAgICAgIHdob3NldHVybj17d2hvc2V0dXJufVxyXG4gICAgICAgICAgICBzZWxlY3Rpb249e3NlbGVjdGlvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KHRpKSA9PiBoYW5kbGVHdWFyZFRpbGVDbGljayh0aSl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tGaW5pc2hUdXJuPXsoKSA9PiBlbmRHdWFyZHNUdXJuKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tUaWxlUmVjYWxsPXsoKSA9PiByZWNhbGxUaWxlcygpfVxyXG4gICAgICAgICAgICBvbkNsaWNrVGlsZUV4Y2hhbmdlPXsoKSA9PiBzd2FwR3VhcmRzVGlsZXMoKX1cclxuICAgICAgICAgICAgcHJpc29uZXJzT3JHdWFyZHM9e3ByaXNvbmVyc09yR3VhcmRzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yXCI+XHJcbiAgICAgICAgICA8U2hvd1Vuc2VlblRpbGVzIHRpbGVzPXt0aWxlc30gb3RoZXJ0aWxlcz17cHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gZ3RpbGVzIDogcHRpbGVzfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFNob3dVbnNlZW5UaWxlcyA9IChwcm9wcykgPT4geyAvLyB0aWxlcyA9IHRpbGVzIGluIGJhZywgb3RoZXJ0aWxlcyA9IHRpbGVzIG9uIG90aGVyIHBsYXllcnMgcmFja1xyXG4gIGxldCB1bnNlZW5UaWxlcyA9IFsuLi5wcm9wcy50aWxlcywgLi4ucHJvcHMub3RoZXJ0aWxlc107XHJcbiAgdW5zZWVuVGlsZXMuc29ydCgpO1xyXG4gIGlmICh1bnNlZW5UaWxlc1swXSA9PT0gXCI/XCIpIHtcclxuICAgICAgdW5zZWVuVGlsZXMuc3BsaWNlKDAsMSlcclxuICAgICAgdW5zZWVuVGlsZXMucHVzaChcIj9cIilcclxuICB9XHJcbiAgaWYgKHVuc2VlblRpbGVzWzBdID09PSBcIj9cIikge1xyXG4gICAgICB1bnNlZW5UaWxlcy5zcGxpY2UoMCwxKVxyXG4gICAgICB1bnNlZW5UaWxlcy5wdXNoKFwiP1wiKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVwb29sXCI+XHJcbiAgICAgIDxoMz5USUxFUzwvaDM+XHJcbiAgICAgIHt1bnNlZW5UaWxlcy5tYXAoKHQsIHRpKSA9PiAoXHJcbiAgICAgICAgPHNwYW4ga2V5PXtgdGlsZSR7dGl9YH0+XHJcbiAgICAgICAgICB7dGkgPiAwICYmIHQgIT09IHVuc2VlblRpbGVzW3RpIC0gMV0gPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcG9vbERpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJUaWxlcG9vbFRpbGVcIj57dH08L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBSYWNrVGlsZSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9e3Byb3BzLnRpbGVjbGFzc30gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIHtwcm9wcy50aWxldmFsdWV9XHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEZpbmlzaFR1cm5CdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkZpbmlzaFR1cm5cIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5jaGVjazwvaT5GaW5pc2ggVHVyblxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRpbGVSZWNhbGxCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYlJlY2FsbFRpbGVzXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+dW5kbzwvaT5SZWNhbGwgVGlsZXNcclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBUaWxlRXhjaGFuZ2VCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkV4Y2hhbmdlVGlsZXNcIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5zZW50aW1lbnRfZGlzc2F0aXNmaWVkPC9pPkV4Y2hhbmdlIFRpbGVzXHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUHJpc29uZXJzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyVGlsZSA9ICh0aWxlY2xhc3MsIHRpbGVpbmRleCwgdGlsZXZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgP1xyXG4gICAgICA8UmFja1RpbGVcclxuICAgICAgICBrZXk9e3RpbGVjbGFzcyArIFN0cmluZyh0aWxlaW5kZXgpfVxyXG4gICAgICAgIHRpbGVjbGFzcz17dGlsZWNsYXNzfVxyXG4gICAgICAgIHRpbGV2YWx1ZT17dGlsZXZhbHVlfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2sodGlsZWluZGV4KX1cclxuICAgICAgLz5cclxuICAgICAgOlxyXG4gICAgICA8UmFja1RpbGVcclxuICAgICAgICBrZXk9e3RpbGVjbGFzcyArIFN0cmluZyh0aWxlaW5kZXgpfVxyXG4gICAgICAgIHRpbGVjbGFzcz17dGlsZWNsYXNzfVxyXG4gICAgICAgIHRpbGV2YWx1ZT17dGlsZXZhbHVlfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5hbGVydChcIk5vIHBlZWtpbmchXCIpfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJGaW5pc2hUdXJuID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxwPjxGaW5pc2hUdXJuQnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tGaW5pc2hUdXJuKCl9IC8+PC9wPjtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJSZWNhbGxUaWxlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiA8cD48VGlsZVJlY2FsbEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrVGlsZVJlY2FsbCgpfSAvPjwvcD47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRXhjaGFuZ2VUaWxlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiA8cD48VGlsZUV4Y2hhbmdlQnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tUaWxlRXhjaGFuZ2UoKX0gLz48L3A+O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckZyZWVkUHJpc29uZXJzID0gKGNvdW50KSA9PiB7XHJcbiAgICBsZXQgZHVtYiA9IEFycmF5KGNvdW50KS5maWxsKFwibm9uc2Vuc2VcIik7XHJcbiAgICByZXR1cm4gZHVtYi5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICA8c3BhbiBrZXk9e3ZhbHVlICsgU3RyaW5nKGluZGV4KX0+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiL2JyZWFrZnJlZS5wbmdcIlxyXG4gICAgICAgICAgYWx0PVwiSSdtIGZyZWUhIEknbSBmcmVlIVwiXHJcbiAgICAgICAgICB3aWR0aD1cIjEwMFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cD5QUklTT05FUlM8L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInBiVGlsZXJhY2tcIj5cclxuICAgICAgICB7cHJvcHMucHRpbGVzLm1hcCgodCwgdGkpID0+XHJcbiAgICAgICAgICByZW5kZXJUaWxlKFxyXG4gICAgICAgICAgICBwcm9wcy53aG9zZXR1cm4gPT09IFwiUFwiICYmIHByb3BzLnNlbGVjdGlvbiA9PT0gdGlcclxuICAgICAgICAgICAgICA/IFwicGJUaWxlT25SYWNrU2VsZWN0ZWRQXCJcclxuICAgICAgICAgICAgICA6IFwicGJUaWxlT25SYWNrUFwiLFxyXG4gICAgICAgICAgICB0aSxcclxuICAgICAgICAgICAgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gdCA6IFwiKlwiXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9wPlxyXG4gICAgICB7cHJvcHMud2hvc2V0dXJuID09PSBcIlBcIiAmJiBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyByZW5kZXJGaW5pc2hUdXJuKCkgOiA8PjwvPn1cclxuICAgICAge3Byb3BzLndob3NldHVybiA9PT0gXCJQXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gcmVuZGVyUmVjYWxsVGlsZXMoKSA6IDw+PC8+fVxyXG4gICAgICB7cHJvcHMud2hvc2V0dXJuID09PSBcIlBcIiAmJiBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyByZW5kZXJFeGNoYW5nZVRpbGVzKCkgOiA8PjwvPn1cclxuICAgICAgPHA+XHJcbiAgICAgICAgUmVzY3VlcyBtYWRlOiB7cHJvcHMucmVzY3Vlc31cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICB7cmVuZGVyRnJlZWRQcmlzb25lcnMocHJvcHMucmVzY3Vlcyl9XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBHdWFyZHMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByZW5kZXJUaWxlID0gKHRpbGVjbGFzcywgdGlsZWluZGV4LCB0aWxldmFsdWUpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiA/XHJcbiAgICAgIDxSYWNrVGlsZVxyXG4gICAgICAgIGtleT17dGlsZWNsYXNzICsgU3RyaW5nKHRpbGVpbmRleCl9XHJcbiAgICAgICAgdGlsZWNsYXNzPXt0aWxlY2xhc3N9XHJcbiAgICAgICAgdGlsZXZhbHVlPXt0aWxldmFsdWV9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMub25DbGljayh0aWxlaW5kZXgpfVxyXG4gICAgICAvPlxyXG4gICAgICA6XHJcbiAgICAgIDxSYWNrVGlsZVxyXG4gICAgICAgIGtleT17dGlsZWNsYXNzICsgU3RyaW5nKHRpbGVpbmRleCl9XHJcbiAgICAgICAgdGlsZWNsYXNzPXt0aWxlY2xhc3N9XHJcbiAgICAgICAgdGlsZXZhbHVlPXt0aWxldmFsdWV9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93LmFsZXJ0KFwiTm8gcGVla2luZyFcIil9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckZpbmlzaFR1cm4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPEZpbmlzaFR1cm5CdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja0ZpbmlzaFR1cm4oKX0gLz47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUmVjYWxsVGlsZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPFRpbGVSZWNhbGxCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1RpbGVSZWNhbGwoKX0gLz47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRXhjaGFuZ2VUaWxlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiA8VGlsZUV4Y2hhbmdlQnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tUaWxlRXhjaGFuZ2UoKX0gLz47XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxwPkdVQVJEUzwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgIHtwcm9wcy5ndGlsZXMubWFwKCh0LCB0aSkgPT5cclxuICAgICAgICAgIHJlbmRlclRpbGUoXHJcbiAgICAgICAgICAgIHByb3BzLndob3NldHVybiA9PT0gXCJHXCIgJiYgcHJvcHMuc2VsZWN0aW9uID09PSB0aVxyXG4gICAgICAgICAgICAgID8gXCJwYlRpbGVPblJhY2tTZWxlY3RlZEdcIlxyXG4gICAgICAgICAgICAgIDogXCJwYlRpbGVPblJhY2tHXCIsXHJcbiAgICAgICAgICAgIHRpLFxyXG4gICAgICAgICAgICBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJHXCIgPyB0IDogXCIqXCJcclxuICAgICAgICAgIClcclxuICAgICAgICApfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiR1wiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiA/IHJlbmRlckZpbmlzaFR1cm4oKSA6IDw+PC8+fVxyXG4gICAgICB7cHJvcHMud2hvc2V0dXJuID09PSBcIkdcIiAmJiBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJHXCIgPyByZW5kZXJSZWNhbGxUaWxlcygpIDogPD48Lz59XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiR1wiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiA/IHJlbmRlckV4Y2hhbmdlVGlsZXMoKSA6IDw+PC8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==