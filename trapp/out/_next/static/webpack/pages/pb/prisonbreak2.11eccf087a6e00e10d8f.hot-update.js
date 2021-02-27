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
      // end guards turn
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

  const prisonerPass = () => {
    recallTiles(); // In case they put some tiles on the board before clicking Pass

    setWhoseturn("G");
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
      ptiles: snapshot.ptiles,
      // prisoners rack did not change
      tiles: tiles,
      // tile pool did not change
      rescues: rescues // no rescues on a pass

    }));
  };

  const guardsPass = () => {
    recallTiles(); // In case they put some tiles on the board before clicking Pass

    setWhoseturn("P");
    client.send(JSON.stringify({
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      func: "egt",
      // end guards turn
      squares: snapshot.squares,
      // revert to start of turn squares
      usedby: snapshot.usedby,
      // revert to start of turn used by
      gtiles: snapshot.gtiles,
      // guards rack did not change
      tiles: tiles // tile pool did not change

    }));
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container-fluid prisonbreak",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-10 pbtitle",
        children: "Prison Break"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 794,
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
            lineNumber: 802,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 796,
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
              lineNumber: 805,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 805,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 804,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 795,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 793,
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
          onClickPassPlay: () => prisonerPass(),
          rescues: rescues,
          prisonersOrGuards: prisonersOrGuards
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 811,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 810,
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
          lineNumber: 826,
          columnNumber: 11
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {
          squares: squares,
          usedby: usedby,
          onClick: () => window.alert("That tickles!")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 832,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 824,
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
          onClickPassPlay: () => guardsPass(),
          prisonersOrGuards: prisonersOrGuards
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 840,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 839,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowUnseenTiles, {
          tiles: tiles,
          othertiles: prisonersOrGuards === "P" ? gtiles : ptiles
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 853,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 852,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 809,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 792,
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
      lineNumber: 873,
      columnNumber: 7
    }, undefined), unseenTiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [ti > 0 && t !== unseenTiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pbTilepoolDivider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 877,
        columnNumber: 13
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbTilepoolTile",
        children: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 881,
        columnNumber: 11
      }, undefined)]
    }, `tile${ti}`, true, {
      fileName: _jsxFileName,
      lineNumber: 875,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 872,
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
    lineNumber: 890,
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
      lineNumber: 899,
      columnNumber: 7
    }, undefined), "Finish Turn"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 898,
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
      lineNumber: 907,
      columnNumber: 7
    }, undefined), "Recall Tiles"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 906,
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
      lineNumber: 915,
      columnNumber: 7
    }, undefined), "Exchange Tiles"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 914,
    columnNumber: 5
  }, undefined);
};

_c9 = TileExchangeButton;

const PassPlayButton = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "pbPassPlay",
    onClick: props.onClick,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      className: "material-icons",
      children: "sentiment_neutral"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 923,
      columnNumber: 7
    }, undefined), "Pass"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 922,
    columnNumber: 5
  }, undefined);
};

_c10 = PassPlayButton;

const Prisoners = props => {
  const renderTile = (tileclass, tileindex, tilevalue) => {
    return props.prisonersOrGuards === "P" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
      tileclass: tileclass,
      tilevalue: tilevalue,
      onClick: () => props.onClick(tileindex)
    }, tileclass + String(tileindex), false, {
      fileName: _jsxFileName,
      lineNumber: 932,
      columnNumber: 7
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
      tileclass: tileclass,
      tilevalue: tilevalue,
      onClick: () => window.alert("No peeking!")
    }, tileclass + String(tileindex), false, {
      fileName: _jsxFileName,
      lineNumber: 939,
      columnNumber: 7
    }, undefined);
  };

  const renderFinishTurn = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
        onClick: () => props.onClickFinishTurn()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 949,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 949,
      columnNumber: 12
    }, undefined);
  };

  const renderRecallTiles = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
        onClick: () => props.onClickTileRecall()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 953,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 953,
      columnNumber: 12
    }, undefined);
  };

  const renderExchangeTiles = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileExchangeButton, {
        onClick: () => props.onClickTileExchange()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 957,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 957,
      columnNumber: 12
    }, undefined);
  };

  const renderPassPlay = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PassPlayButton, {
        onClick: () => props.onClickPassPlay()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 961,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 961,
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
        lineNumber: 968,
        columnNumber: 9
      }, undefined)
    }, value + String(index), false, {
      fileName: _jsxFileName,
      lineNumber: 967,
      columnNumber: 7
    }, undefined));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "PRISONERS"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 980,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilerack",
      children: props.ptiles.map((t, ti) => renderTile(props.whoseturn === "P" && props.selection === ti ? "pbTileOnRackSelectedP" : "pbTileOnRackP", ti, props.prisonersOrGuards === "P" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 981,
      columnNumber: 7
    }, undefined), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderRecallTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderExchangeTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderPassPlay() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Rescues made: ", props.rescues, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 998,
        columnNumber: 9
      }, undefined), renderFreedPrisoners(props.rescues)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 996,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 979,
    columnNumber: 5
  }, undefined);
};

_c11 = Prisoners;

const Guards = props => {
  const renderTile = (tileclass, tileindex, tilevalue) => {
    return props.prisonersOrGuards === "G" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
      tileclass: tileclass,
      tilevalue: tilevalue,
      onClick: () => props.onClick(tileindex)
    }, tileclass + String(tileindex), false, {
      fileName: _jsxFileName,
      lineNumber: 1009,
      columnNumber: 7
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
      tileclass: tileclass,
      tilevalue: tilevalue,
      onClick: () => window.alert("No peeking!")
    }, tileclass + String(tileindex), false, {
      fileName: _jsxFileName,
      lineNumber: 1016,
      columnNumber: 7
    }, undefined);
  };

  const renderFinishTurn = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
      onClick: () => props.onClickFinishTurn()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1026,
      columnNumber: 12
    }, undefined);
  };

  const renderRecallTiles = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
      onClick: () => props.onClickTileRecall()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1030,
      columnNumber: 12
    }, undefined);
  };

  const renderExchangeTiles = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileExchangeButton, {
      onClick: () => props.onClickTileExchange()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1034,
      columnNumber: 12
    }, undefined);
  };

  const renderPassPlay = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PassPlayButton, {
      onClick: () => props.onClickPassPlay()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1038,
      columnNumber: 12
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "GUARDS"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1043,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilerack",
      children: props.gtiles.map((t, ti) => renderTile(props.whoseturn === "G" && props.selection === ti ? "pbTileOnRackSelectedG" : "pbTileOnRackG", ti, props.prisonersOrGuards === "G" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1044,
      columnNumber: 7
    }, undefined), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderRecallTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderExchangeTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderPassPlay() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1042,
    columnNumber: 5
  }, undefined);
};

_c12 = Guards;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;

$RefreshReg$(_c, "PrisonBreak");
$RefreshReg$(_c2, "Square");
$RefreshReg$(_c3, "Board");
$RefreshReg$(_c4, "Game");
$RefreshReg$(_c5, "ShowUnseenTiles");
$RefreshReg$(_c6, "RackTile");
$RefreshReg$(_c7, "FinishTurnButton");
$RefreshReg$(_c8, "TileRecallButton");
$RefreshReg$(_c9, "TileExchangeButton");
$RefreshReg$(_c10, "PassPlayButton");
$RefreshReg$(_c11, "Prisoners");
$RefreshReg$(_c12, "Guards");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsyLmpzIl0sIm5hbWVzIjpbImVzY2FwZWhhdGNoZXMiLCJpbml0aWFsdGlsZXMiLCJQcmlzb25CcmVhayIsImlubG9iYnkiLCJzZXRJbmxvYmJ5IiwidXNlU3RhdGUiLCJnYW1laWQiLCJzZXRHYW1laWQiLCJwcmlzb25lcnNPckd1YXJkcyIsInNldFByaXNvbmVyc09yR3VhcmRzIiwid3Ntc2dzIiwic2V0V3Ntc2dzIiwibXNnaWQiLCJzZXRNc2dpZCIsImhvc3QiLCJhY2NlcHRNZXNzYWdlIiwibWVzc2FnZSIsImN1cnIiLCJkYXRhIiwicmVtb3ZlTWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiaSIsImluZGV4T2YiLCJ3Iiwic3BsaWNlIiwiY2xpZW50Iiwic2V0Q2xpZW50IiwiQ3VzdG9tU29ja2V0IiwidXNlRWZmZWN0IiwiY29ubmVjdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsIm1hcCIsIm1zZyIsImlueCIsIlNxdWFyZSIsInByb3BzIiwidXNlZGJ5Y2xhc3MiLCJzcXVhcmV1c2VkYnkiLCJ0ZGNsYXNzIiwiYyIsInJpIiwiY2kiLCJ0ZHZhbHVlIiwib25DbGljayIsIkJvYXJkIiwic3F1YXJlcyIsInVzZWRieSIsInJlbmRlclNxdWFyZSIsInJlbmRlclJvdyIsInIiLCJHYW1lIiwidGlsZXMiLCJzZXRUaWxlcyIsInB0aWxlcyIsInNldFB0aWxlcyIsImd0aWxlcyIsInNldEd0aWxlcyIsInNldFNxdWFyZXMiLCJBcnJheSIsImZpbGwiLCJzZXRVc2VkYnkiLCJzZWxlY3Rpb24iLCJzZXRTZWxlY3Rpb24iLCJ3aG9zZXR1cm4iLCJzZXRXaG9zZXR1cm4iLCJjdXJyZW50Y29vcmRzIiwic2V0Q3VycmVudGNvb3JkcyIsInJlc2N1ZXMiLCJzZXRSZXNjdWVzIiwic25hcHNob3QiLCJzZXRTbmFwc2hvdCIsInRlbXBQVGlsZXMiLCJ0ZW1wR1RpbGVzIiwidGVtcFRpbGVzIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzb3J0IiwiY29uc29sZSIsImxvZyIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsImZ1bmMiLCJwcm9jZXNzTWVzc2FnZSIsInBhcnNlIiwicmVxdWVzdG9yIiwic2VuZGVyIiwiaGFuZGxlQm9hcmRTcXVhcmVDbGljayIsIm5ld1NxdWFyZXMiLCJuZXdVc2VkYnkiLCJuZXdQdGlsZXMiLCJuZXdHdGlsZXMiLCJuZXdSb3ciLCJzcXVhcmV2YWx1ZSIsIm5ld0N1cnJlbnRjb29yZHMiLCJjb29yZCIsIlN0cmluZyIsImNjaSIsIm5ld1VzZWRieVJvdyIsIm5ld1NlbGVjdGlvbiIsImhhbmRsZVByaXNvbmVyVGlsZUNsaWNrIiwidGlsZWluZGV4IiwiYWxlcnQiLCJoYW5kbGVHdWFyZFRpbGVDbGljayIsImVuZFByaXNvbmVyc1R1cm4iLCJpc1BsYXlWYWxpZCIsIm5ld1Jlc2N1ZXMiLCJuZXdUaWxlcyIsImVuZEd1YXJkc1R1cm4iLCJzbmFwc3F1YXJlcyIsInNuYXB1c2VkYnkiLCJzbmFwcHRpbGVzIiwic25hcGd0aWxlcyIsInN3YXBQcmlzb25lcnNUaWxlcyIsIndpbmRvdyIsInN3YXBHdWFyZHNUaWxlcyIsImxvd3JvdyIsImhpZ2hyb3ciLCJsb3djb2wiLCJoaWdoY29sIiwicGxheXRocnUiLCJob29rbWFkZSIsInJlY2FsbFRpbGVzIiwicHJpc29uZXJQYXNzIiwiZ3VhcmRzUGFzcyIsInJlcXVlc3RHYW1lRGF0YSIsInBsYXllcnR5cGUiLCJ0aSIsIlNob3dVbnNlZW5UaWxlcyIsInVuc2VlblRpbGVzIiwib3RoZXJ0aWxlcyIsInQiLCJSYWNrVGlsZSIsInRpbGVjbGFzcyIsInRpbGV2YWx1ZSIsIkZpbmlzaFR1cm5CdXR0b24iLCJUaWxlUmVjYWxsQnV0dG9uIiwiVGlsZUV4Y2hhbmdlQnV0dG9uIiwiUGFzc1BsYXlCdXR0b24iLCJQcmlzb25lcnMiLCJyZW5kZXJUaWxlIiwicmVuZGVyRmluaXNoVHVybiIsIm9uQ2xpY2tGaW5pc2hUdXJuIiwicmVuZGVyUmVjYWxsVGlsZXMiLCJvbkNsaWNrVGlsZVJlY2FsbCIsInJlbmRlckV4Y2hhbmdlVGlsZXMiLCJvbkNsaWNrVGlsZUV4Y2hhbmdlIiwicmVuZGVyUGFzc1BsYXkiLCJvbkNsaWNrUGFzc1BsYXkiLCJyZW5kZXJGcmVlZFByaXNvbmVycyIsImNvdW50IiwiZHVtYiIsImluZGV4IiwiR3VhcmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLGFBQWEsR0FBRyxDQUNwQixLQURvQixFQUVwQixLQUZvQixFQUdwQixNQUhvQixFQUlwQixLQUpvQixFQUtwQixNQUxvQixFQU1wQixNQU5vQixFQU9wQixNQVBvQixFQVFwQixPQVJvQixDQUF0QixDLENBU0c7O0FBQ0gsTUFBTUMsWUFBWSxHQUFHLENBQ25CLEdBRG1CLEVBRW5CLEdBRm1CLEVBR25CLEdBSG1CLEVBSW5CLEdBSm1CLEVBS25CLEdBTG1CLEVBTW5CLEdBTm1CLEVBT25CLEdBUG1CLEVBUW5CLEdBUm1CLEVBU25CLEdBVG1CLEVBVW5CLEdBVm1CLEVBV25CLEdBWG1CLEVBWW5CLEdBWm1CLEVBYW5CLEdBYm1CLEVBY25CLEdBZG1CLEVBZW5CLEdBZm1CLEVBZ0JuQixHQWhCbUIsRUFpQm5CLEdBakJtQixFQWtCbkIsR0FsQm1CLEVBbUJuQixHQW5CbUIsRUFvQm5CLEdBcEJtQixFQXFCbkIsR0FyQm1CLEVBc0JuQixHQXRCbUIsRUF1Qm5CLEdBdkJtQixFQXdCbkIsR0F4Qm1CLEVBeUJuQixHQXpCbUIsRUEwQm5CLEdBMUJtQixFQTJCbkIsR0EzQm1CLEVBNEJuQixHQTVCbUIsRUE2Qm5CLEdBN0JtQixFQThCbkIsR0E5Qm1CLEVBK0JuQixHQS9CbUIsRUFnQ25CLEdBaENtQixFQWlDbkIsR0FqQ21CLEVBa0NuQixHQWxDbUIsRUFtQ25CLEdBbkNtQixFQW9DbkIsR0FwQ21CLEVBcUNuQixHQXJDbUIsRUFzQ25CLEdB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ZUFFRTtBQUFHLGVBQVMsRUFBQyxZQUFiO0FBQUEsZ0JBQ0dySCxLQUFLLENBQUNvQixNQUFOLENBQWF4QixHQUFiLENBQWlCLENBQUN3RyxDQUFELEVBQUlKLEVBQUosS0FDaEJhLFVBQVUsQ0FDUjdHLEtBQUssQ0FBQzRCLFNBQU4sS0FBb0IsR0FBcEIsSUFBMkI1QixLQUFLLENBQUMwQixTQUFOLEtBQW9Cc0UsRUFBL0MsR0FDSSx1QkFESixHQUVJLGVBSEksRUFJUkEsRUFKUSxFQUtSaEcsS0FBSyxDQUFDOUIsaUJBQU4sS0FBNEIsR0FBNUIsR0FBa0NrSSxDQUFsQyxHQUFzQyxHQUw5QixDQURYO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixFQWFHcEcsS0FBSyxDQUFDNEIsU0FBTixLQUFvQixHQUFwQixJQUEyQjVCLEtBQUssQ0FBQzlCLGlCQUFOLEtBQTRCLEdBQXZELEdBQTZENEksZ0JBQWdCLEVBQTdFLGdCQUFrRix1SkFickYsRUFjRzlHLEtBQUssQ0FBQzRCLFNBQU4sS0FBb0IsR0FBcEIsSUFBMkI1QixLQUFLLENBQUM5QixpQkFBTixLQUE0QixHQUF2RCxHQUE2RDhJLGlCQUFpQixFQUE5RSxnQkFBbUYsdUpBZHRGLEVBZUdoSCxLQUFLLENBQUM0QixTQUFOLEtBQW9CLEdBQXBCLElBQTJCNUIsS0FBSyxDQUFDOUIsaUJBQU4sS0FBNEIsR0FBdkQsR0FBNkRnSixtQkFBbUIsRUFBaEYsZ0JBQXFGLHVKQWZ4RixFQWdCR2xILEtBQUssQ0FBQzRCLFNBQU4sS0FBb0IsR0FBcEIsSUFBMkI1QixLQUFLLENBQUM5QixpQkFBTixLQUE0QixHQUF2RCxHQUE2RGtKLGNBQWMsRUFBM0UsZ0JBQWdGLHVKQWhCbkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFvQkQsQ0F4REQ7O09BQU1NLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGIvcHJpc29uYnJlYWsyLjExZWNjZjA4N2E2ZTAwZTEwZDhmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBDdXN0b21Tb2NrZXQgZnJvbSBcIi4uLy4uL3dzXCI7XHJcbmNvbnN0IGVzY2FwZWhhdGNoZXMgPSBbXHJcbiAgXCIwLTBcIixcclxuICBcIjAtN1wiLFxyXG4gIFwiMC0xNFwiLFxyXG4gIFwiNy0wXCIsXHJcbiAgXCI3LTE0XCIsXHJcbiAgXCIxNC0wXCIsXHJcbiAgXCIxNC03XCIsXHJcbiAgXCIxNC0xNFwiLFxyXG5dOyAvLyBjb29yZHMgb2YgZXNjYXBlIGhhdGNoZXNcclxuY29uc3QgaW5pdGlhbHRpbGVzID0gW1xyXG4gIFwiQVwiLFxyXG4gIFwiQVwiLFxyXG4gIFwiQVwiLFxyXG4gIFwiQVwiLFxyXG4gIFwiQVwiLFxyXG4gIFwiQVwiLFxyXG4gIFwiQVwiLFxyXG4gIFwiQVwiLFxyXG4gIFwiQVwiLFxyXG4gIFwiQlwiLFxyXG4gIFwiQlwiLFxyXG4gIFwiQ1wiLFxyXG4gIFwiQ1wiLFxyXG4gIFwiRFwiLFxyXG4gIFwiRFwiLFxyXG4gIFwiRFwiLFxyXG4gIFwiRFwiLFxyXG4gIFwiRVwiLFxyXG4gIFwiRVwiLFxyXG4gIFwiRVwiLFxyXG4gIFwiRVwiLFxyXG4gIFwiRVwiLFxyXG4gIFwiRVwiLFxyXG4gIFwiRVwiLFxyXG4gIFwiRVwiLFxyXG4gIFwiRVwiLFxyXG4gIFwiRVwiLFxyXG4gIFwiRVwiLFxyXG4gIFwiRVwiLFxyXG4gIFwiRlwiLFxyXG4gIFwiRlwiLFxyXG4gIFwiR1wiLFxyXG4gIFwiR1wiLFxyXG4gIFwiR1wiLFxyXG4gIFwiSFwiLFxyXG4gIFwiSFwiLFxyXG4gIFwiSVwiLFxyXG4gIFwiSVwiLFxyXG4gIFwiSVwiLFxyXG4gIFwiSVwiLFxyXG4gIFwiSVwiLFxyXG4gIFwiSVwiLFxyXG4gIFwiSVwiLFxyXG4gIFwiSVwiLFxyXG4gIFwiSVwiLFxyXG4gIFwiSlwiLFxyXG4gIFwiS1wiLFxyXG4gIFwiTFwiLFxyXG4gIFwiTFwiLFxyXG4gIFwiTFwiLFxyXG4gIFwiTFwiLFxyXG4gIFwiTVwiLFxyXG4gIFwiTVwiLFxyXG4gIFwiTlwiLFxyXG4gIFwiTlwiLFxyXG4gIFwiTlwiLFxyXG4gIFwiTlwiLFxyXG4gIFwiTlwiLFxyXG4gIFwiTlwiLFxyXG4gIFwiT1wiLFxyXG4gIFwiT1wiLFxyXG4gIFwiT1wiLFxyXG4gIFwiT1wiLFxyXG4gIFwiT1wiLFxyXG4gIFwiT1wiLFxyXG4gIFwiT1wiLFxyXG4gIFwiT1wiLFxyXG4gIFwiUFwiLFxyXG4gIFwiUFwiLFxyXG4gIFwiUVwiLFxyXG4gIFwiUlwiLFxyXG4gIFwiUlwiLFxyXG4gIFwiUlwiLFxyXG4gIFwiUlwiLFxyXG4gIFwiUlwiLFxyXG4gIFwiUlwiLFxyXG4gIFwiU1wiLFxyXG4gIFwiU1wiLFxyXG4gIFwiU1wiLFxyXG4gIFwiU1wiLFxyXG4gIFwiVFwiLFxyXG4gIFwiVFwiLFxyXG4gIFwiVFwiLFxyXG4gIFwiVFwiLFxyXG4gIFwiVFwiLFxyXG4gIFwiVFwiLFxyXG4gIFwiVVwiLFxyXG4gIFwiVVwiLFxyXG4gIFwiVVwiLFxyXG4gIFwiVVwiLFxyXG4gIFwiVlwiLFxyXG4gIFwiVlwiLFxyXG4gIFwiV1wiLFxyXG4gIFwiV1wiLFxyXG4gIFwiWFwiLFxyXG4gIFwiWVwiLFxyXG4gIFwiWVwiLFxyXG4gIFwiWlwiLFxyXG4gIFwiP1wiLFxyXG4gIFwiP1wiLFxyXG5dOyAvLyBpbml0aWFsIHRpbGUgcG9vbFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpc29uQnJlYWsoKSB7XHJcbiAgY29uc3QgW2lubG9iYnksIHNldElubG9iYnldID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbZ2FtZWlkLCBzZXRHYW1laWRdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3ByaXNvbmVyc09yR3VhcmRzLCBzZXRQcmlzb25lcnNPckd1YXJkc10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbd3Ntc2dzLCBzZXRXc21zZ3NdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW21zZ2lkLCBzZXRNc2dpZF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGxldCBob3N0ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICd3c3M6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20nIDogJ3dzOi8vbG9jYWxob3N0OjUwMDAnO1xyXG4gIGNvbnN0IGFjY2VwdE1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgc2V0TXNnaWQoKGN1cnIpID0+IGN1cnIgKyAxKVxyXG4gICAgc2V0V3Ntc2dzKChjdXJyKSA9PiBbLi4uY3VyciwgbWVzc2FnZS5kYXRhXSk7XHJcbiAgfVxyXG4gIGNvbnN0IHJlbW92ZU1lc3NhZ2UgPSAobWVzc2FnZURhdGEpID0+IHtcclxuICAgIGxldCBpID0gd3Ntc2dzLmluZGV4T2YobWVzc2FnZURhdGEpO1xyXG4gICAgbGV0IHcgPSBbLi4ud3Ntc2dzXTtcclxuICAgIHcuc3BsaWNlKGksMSk7XHJcbiAgICBzZXRXc21zZ3Modyk7XHJcbiAgfVxyXG4gIGNvbnN0IFtjbGllbnQsIHNldENsaWVudF0gPSB1c2VTdGF0ZShuZXcgQ3VzdG9tU29ja2V0KGhvc3QsIGFjY2VwdE1lc3NhZ2UpKTtcclxuICB1c2VFZmZlY3QoKCkgPT4gKFxyXG4gICAgY2xpZW50LmNvbm5lY3QoKVxyXG4gICksW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICBpbmxvYmJ5IHx8IHByaXNvbmVyc09yR3VhcmRzID09PSAnJyA/XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cD5JbiB0aGUgbG9iYnk8L3A+XHJcbiAgICAgIDxsYWJlbD5HYW1lIGlkOiZuYnNwOzwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgbmFtZT1cImdhbWVpZFwiXHJcbiAgICAgICAgICB2YWx1ZT17Z2FtZWlkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0R2FtZWlkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPGxhYmVsPiZuYnNwOzwvbGFiZWw+XHJcbiAgICAgIDxidXR0b24gaWQ9XCJzdGFydGdhbWVcIlxyXG4gICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmIChnYW1laWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzKCdQJyk7XHJcbiAgICAgICAgICAgICAgc2V0SW5sb2JieShmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAgIFN0YXJ0IEdhbWVcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxsYWJlbD4mbmJzcDs8L2xhYmVsPlxyXG4gICAgICA8YnV0dG9uIGlkPVwiam9pbmdhbWVcIlxyXG4gICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmIChnYW1laWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzKCdHJyk7XHJcbiAgICAgICAgICAgICAgc2V0SW5sb2JieShmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAgIEpvaW4gR2FtZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAge3dzbXNncy5tYXAoIChtc2csIGlueCkgPT4gKFxyXG4gICAgICAgIDxsaSBrZXk9e2lueH0+e21zZ308L2xpPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICAgOlxyXG4gICAgPEdhbWUgcHJpc29uZXJzT3JHdWFyZHM9e3ByaXNvbmVyc09yR3VhcmRzfVxyXG4gICAgICBnYW1laWQ9e2dhbWVpZH1cclxuICAgICAgd3Ntc2dzPXt3c21zZ3N9XHJcbiAgICAgIGNsaWVudD17Y2xpZW50fVxyXG4gICAgICByZW1vdmVNZXNzYWdlPXtyZW1vdmVNZXNzYWdlfVxyXG4gICAgICAvPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgU3F1YXJlID0gKHByb3BzKSA9PiB7XHJcbiAgLy8gc3F1YXJldXNlZGJ5LCByaSwgY2ksIGMsIG9uQ2xpY2tcclxuICAvLyBuZWVkIHNxdWFyZXVzZWRieSB0byBwaWNrIGNzcyBjbGFzc05hbWUgY29ycmVzcG9uZGluZyB0byB3aG8gcGxheWVkIHRoZSB0aWxlIG9uIHRoZSBzcXVhcmVcclxuICAvLyBuZWVkIHJpLCBjaSB0byBkaXNwbGF5IGFsdGVybmF0aW5nIGNoYXJhY3RlcnMgb24gdW51c2VkIHNxdWFyZXNcclxuICAvLyBuZWVkIGMgdG8gcmVwcmVzZW50IHdoaWNoIHRpbGUgaXMgb24gdGhlIHNxdWFyZSwgaWYgYW55XHJcbiAgLy8gbmVlZCBvbkNsaWNrIHRvIGhhbmRsZSBzcXVhcmUgY2xpY2sgYXQgYSBoaWdoZXIgbGV2ZWxcclxuICBjb25zdCB1c2VkYnljbGFzcyA9XHJcbiAgICBwcm9wcy5zcXVhcmV1c2VkYnkgPT09IFwiUFwiXHJcbiAgICAgID8gXCJwYlNxdWFyZVVzZWRCeVByaXNvbmVyc1wiXHJcbiAgICAgIDogXCJwYlNxdWFyZVVzZWRCeUd1YXJkc1wiO1xyXG4gIGNvbnN0IHRkY2xhc3MgPVxyXG4gICAgcHJvcHMuYyAhPT0gXCIuXCJcclxuICAgICAgPyB1c2VkYnljbGFzc1xyXG4gICAgICA6IHByb3BzLnJpID09PSA3ICYmIHByb3BzLmNpID09PSA3XHJcbiAgICAgID8gXCJwYlNxdWFyZUNlbnRlclNxdWFyZVwiXHJcbiAgICAgIDogKHByb3BzLnJpID09PSAwIHx8IHByb3BzLnJpID09PSA3IHx8IHByb3BzLnJpID09PSAxNCkgJiZcclxuICAgICAgICAocHJvcHMuY2kgPT09IDAgfHwgcHJvcHMuY2kgPT09IDcgfHwgcHJvcHMuY2kgPT09IDE0KVxyXG4gICAgICA/IFwicGJTcXVhcmVFc2NhcGVIYXRjaFwiXHJcbiAgICAgIDogcHJvcHMucmkgJSAyID09PSBwcm9wcy5jaSAlIDJcclxuICAgICAgPyBcInBiU3F1YXJlXCJcclxuICAgICAgOiBcInBiU3F1YXJlMlwiO1xyXG4gIGNvbnN0IHRkdmFsdWUgPVxyXG4gICAgcHJvcHMuYyAhPT0gXCIuXCJcclxuICAgICAgPyBwcm9wcy5jXHJcbiAgICAgIDogdGRjbGFzcyA9PT0gXCJwYlNxdWFyZUNlbnRlclNxdWFyZVwiXHJcbiAgICAgID8gXCLinLBcIlxyXG4gICAgICA6IHRkY2xhc3MgPT09IFwicGJTcXVhcmVFc2NhcGVIYXRjaFwiXHJcbiAgICAgID8gXCLwn5KrXCJcclxuICAgICAgOiBwcm9wcy5yaSAlIDIgPT09IHByb3BzLmNpICUgMlxyXG4gICAgICA/IFwi4pi5XCIvL1wi4o6UXCJcclxuICAgICAgOiBcIuqQlVwiOy8vXCLinKZcIjtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RkY2xhc3N9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICB7dGR2YWx1ZX1cclxuICAgIDwvYnV0dG9uPlxyXG4pO1xyXG59O1xyXG5cclxuY29uc3QgQm9hcmQgPSAoeyBvbkNsaWNrLCBzcXVhcmVzLCB1c2VkYnkgfSkgPT4ge1xyXG4gIGNvbnN0IHJlbmRlclNxdWFyZSA9IChyaSwgY2ksIGMsIHNxdWFyZXVzZWRieSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRkIGtleT17YFNxdWFyZSR7cml9LSR7Y2l9YH0+XHJcbiAgICAgICAgPFNxdWFyZVxyXG4gICAgICAgICAgYz17Y31cclxuICAgICAgICAgIGNpPXtjaX1cclxuICAgICAgICAgIHJpPXtyaX1cclxuICAgICAgICAgIHNxdWFyZXVzZWRieT17c3F1YXJldXNlZGJ5fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhyaSwgY2kpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyUm93ID0gKHJpKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dHIga2V5PXtgQm9hcmRSb3cke3JpfWB9IGNsYXNzTmFtZT1cInJvdyBwYlJvd1wiPlxyXG4gICAgICAgIHtzcXVhcmVzW3JpXS5tYXAoKGMsIGNpKSA9PiByZW5kZXJTcXVhcmUocmksIGNpLCBjLCB1c2VkYnlbcmldW2NpXSkpfVxyXG4gICAgICA8L3RyPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHRhYmxlIGNsYXNzTmFtZT1cInBiQm9hcmRcIj5cclxuICAgICAgPHRib2R5PntzcXVhcmVzLm1hcCgociwgcmkpID0+IHJlbmRlclJvdyhyaSkpfTwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBHYW1lID0gKHtwcmlzb25lcnNPckd1YXJkcywgZ2FtZWlkLCB3c21zZ3MsIGNsaWVudCwgcmVtb3ZlTWVzc2FnZX0pID0+IHtcclxuICBjb25zdCBbdGlsZXMsIHNldFRpbGVzXSA9IHVzZVN0YXRlKFsuLi5pbml0aWFsdGlsZXNdKTtcclxuICBjb25zdCBbcHRpbGVzLCBzZXRQdGlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtndGlsZXMsIHNldEd0aWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NxdWFyZXMsIHNldFNxdWFyZXNdID0gdXNlU3RhdGUoQXJyYXkoMTUpLmZpbGwoQXJyYXkoMTUpLmZpbGwoXCIuXCIpKSk7XHJcbiAgY29uc3QgW3VzZWRieSwgc2V0VXNlZGJ5XSA9IHVzZVN0YXRlKEFycmF5KDE1KS5maWxsKEFycmF5KDE1KS5maWxsKFwiXCIpKSk7XHJcbiAgY29uc3QgW3NlbGVjdGlvbiwgc2V0U2VsZWN0aW9uXSA9IHVzZVN0YXRlKC0xKTtcclxuICBjb25zdCBbd2hvc2V0dXJuLCBzZXRXaG9zZXR1cm5dID0gdXNlU3RhdGUoXCJQXCIpO1xyXG4gIGNvbnN0IFtjdXJyZW50Y29vcmRzLCBzZXRDdXJyZW50Y29vcmRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcmVzY3Vlcywgc2V0UmVzY3Vlc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc25hcHNob3QsIHNldFNuYXBzaG90XSA9IHVzZVN0YXRlKHtcclxuICAgIHNxdWFyZXM6IFsuLi5zcXVhcmVzXSxcclxuICAgIHVzZWRieTogWy4uLnVzZWRieV0sXHJcbiAgICBwdGlsZXM6IFsuLi5wdGlsZXNdLFxyXG4gICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIpIHtcclxuICAgICAgbGV0IHRlbXBQVGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgICAgbGV0IHRlbXBHVGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IHRlbXBUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICAgIHdoaWxlICh0ZW1wUFRpbGVzLmxlbmd0aCA8IDcpIHtcclxuICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRlbXBUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIHRlbXBQVGlsZXMucHVzaCh0ZW1wVGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIHRlbXBUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgICAgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRlbXBUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIHRlbXBHVGlsZXMucHVzaCh0ZW1wVGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIHRlbXBUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgdGVtcFBUaWxlcy5zb3J0KCk7XHJcbiAgICAgIHRlbXBHVGlsZXMuc29ydCgpO1xyXG4gICAgICBzZXRHdGlsZXModGVtcEdUaWxlcyk7XHJcbiAgICAgIHNldFB0aWxlcyh0ZW1wUFRpbGVzKTtcclxuICAgICAgc2V0VGlsZXModGVtcFRpbGVzKTtcclxuICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgIHNxdWFyZXM6IFsuLi5zcXVhcmVzXSxcclxuICAgICAgICB1c2VkYnk6IFsuLi51c2VkYnldLFxyXG4gICAgICAgIHB0aWxlczogWy4uLnRlbXBQVGlsZXNdLFxyXG4gICAgICAgIGd0aWxlczogWy4uLnRlbXBHVGlsZXNdICAgIFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbmRpbmcgZ2dkXCIpXHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgICAgZnVuYzogXCJnZ2RcIiAvLyBnZXQgZ2FtZSBkYXRhXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhdGNoIHt9XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgbXNnID0gd3Ntc2dzWzBdO1xyXG4gICAgaWYgKG1zZykgcHJvY2Vzc01lc3NhZ2UobXNnKTtcclxuICAgICAgICBcclxuICB9LFt3c21zZ3NdKVxyXG5cclxuICBmdW5jdGlvbiBwcm9jZXNzTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpOyAvLyB3YXMgbWVzc2FnZS5kYXRhXHJcbiAgICBpZiAobWVzc2FnZURhdGEuZ2FtZWlkID09PSBnYW1laWQgJiYgbWVzc2FnZURhdGEudHlwZSA9PT0gXCJwYlwiKSB7IC8vIFRoaXMgaW5zdGFuY2Ugb2YgYSBwcmlzb24gYnJlYWsgZ2FtZVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJyZXF1ZXN0Z2FtZWRhdGFcIiAmJiBtZXNzYWdlRGF0YS5yZXF1ZXN0b3IgIT09IHByaXNvbmVyc09yR3VhcmRzKSB7IC8vIE9wcG9uZW50IHJlcXVlc3RlZCBnYW1lIGluZm9cclxuICAgICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgICBmdW5jOiBcInByb3ZpZGVnYW1lZGF0YVwiLCAvLyBwcm92aWRlIGdhbWUgZGF0YVxyXG4gICAgICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLCAvLyB3aG8gc2VudCB0aGUgZGF0YVxyXG4gICAgICAgICAgICB0aWxlczogdGlsZXMsXHJcbiAgICAgICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsXHJcbiAgICAgICAgICAgIHB0aWxlczogcHRpbGVzLFxyXG4gICAgICAgICAgICBndGlsZXM6IGd0aWxlcyxcclxuICAgICAgICAgICAgdXNlZGJ5OiB1c2VkYnksXHJcbiAgICAgICAgICAgIHdob3NldHVybjogd2hvc2V0dXJuLFxyXG4gICAgICAgICAgICBzZWxlY3Rpb246IHNlbGVjdGlvbixcclxuICAgICAgICAgICAgY3VycmVudGNvb3JkczogY3VycmVudGNvb3JkcyxcclxuICAgICAgICAgICAgc25hcHNob3Q6IHNuYXBzaG90LFxyXG4gICAgICAgICAgICByZXNjdWVzOiByZXNjdWVzXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwicHJvdmlkZWdhbWVkYXRhXCIgJiYgbWVzc2FnZURhdGEuc2VuZGVyICE9PSBwcmlzb25lcnNPckd1YXJkcykgeyAvLyBvcHBvbmVudCBwcm92aWRlZCBnYW1lIGRhdGFcclxuICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgc2V0U3F1YXJlcyhtZXNzYWdlRGF0YS5zcXVhcmVzKTtcclxuICAgICAgICBzZXRQdGlsZXMobWVzc2FnZURhdGEucHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobWVzc2FnZURhdGEuZ3RpbGVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobWVzc2FnZURhdGEudXNlZGJ5KTtcclxuICAgICAgICBzZXRXaG9zZXR1cm4obWVzc2FnZURhdGEud2hvc2V0dXJuKTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24obWVzc2FnZURhdGEuc2VsZWN0aW9uKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKG1lc3NhZ2VEYXRhLmN1cnJlbnRjb29yZHMpO1xyXG4gICAgICAgIHNldFNuYXBzaG90KG1lc3NhZ2VEYXRhLnNuYXBzaG90KTtcclxuICAgICAgICBzZXRSZXNjdWVzKG1lc3NhZ2VEYXRhLnJlc2N1ZXMpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSB0aGV5IHNlbmQgZ2dkLCBhbmQgcHJpc29uZXIgcGlja3MgaXQgdXAgYW5kIHNlbmRzIHNnZCwgdGhlbiBndWFyZHMgcGljayB0aGF0IHVwIGFuZCB0YWtlIHRoZSBkYXRhXHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImdnZFwiICYmIHByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIikgeyAvLyBnZXQgZ2FtZSBkYXRhIChzZW50IGJ5IGd1YXJkcywgcHJpc29uZXJzIHJlc3BvbmQgaGVyZSlcclxuICAgICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgICBmdW5jOiBcInNnZFwiLCAvLyBzZW5kIGdhbWUgZGF0YVxyXG4gICAgICAgICAgICB0aWxlczogdGlsZXMsXHJcbiAgICAgICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsXHJcbiAgICAgICAgICAgIHB0aWxlczogcHRpbGVzLFxyXG4gICAgICAgICAgICBndGlsZXM6IGd0aWxlcyxcclxuICAgICAgICAgICAgdXNlZGJ5OiB1c2VkYnksXHJcbiAgICAgICAgICAgIHdob3NldHVybjogd2hvc2V0dXJuLFxyXG4gICAgICAgICAgICBzZWxlY3Rpb246IHNlbGVjdGlvbixcclxuICAgICAgICAgICAgY3VycmVudGNvb3JkczogY3VycmVudGNvb3JkcyxcclxuICAgICAgICAgICAgc25hcHNob3Q6IHNuYXBzaG90LFxyXG4gICAgICAgICAgICByZXNjdWVzOiByZXNjdWVzIC8vIG1heSBoYXZlIHJlc2N1ZWQgYW5vdGhlciBwcmlzb25lclxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInNnZFwiICYmIHByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIikgeyAvLyBzZW5kIGdhbWUgZGF0YSAocHJpc29uZXJzIHNlbnQgaXQsIGd1YXJkcyBub3cgZ2V0IGl0KVxyXG4gICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgIHNldFB0aWxlcyhtZXNzYWdlRGF0YS5wdGlsZXMpO1xyXG4gICAgICAgIHNldEd0aWxlcyhtZXNzYWdlRGF0YS5ndGlsZXMpO1xyXG4gICAgICAgIHNldFVzZWRieShtZXNzYWdlRGF0YS51c2VkYnkpO1xyXG4gICAgICAgIHNldFdob3NldHVybihtZXNzYWdlRGF0YS53aG9zZXR1cm4pO1xyXG4gICAgICAgIHNldFNlbGVjdGlvbihtZXNzYWdlRGF0YS5zZWxlY3Rpb24pO1xyXG4gICAgICAgIHNldEN1cnJlbnRjb29yZHMobWVzc2FnZURhdGEuY3VycmVudGNvb3Jkcyk7XHJcbiAgICAgICAgc2V0U25hcHNob3QobWVzc2FnZURhdGEuc25hcHNob3QpO1xyXG4gICAgICAgIHNldFJlc2N1ZXMobWVzc2FnZURhdGEucmVzY3Vlcyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiZXB0XCIpIHsgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgc2V0V2hvc2V0dXJuKFwiR1wiKTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgICAgIHNldFNxdWFyZXMobWVzc2FnZURhdGEuc3F1YXJlcyk7XHJcbiAgICAgICAgc2V0VXNlZGJ5KG1lc3NhZ2VEYXRhLnVzZWRieSk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG1lc3NhZ2VEYXRhLnB0aWxlcyk7XHJcbiAgICAgICAgc2V0VGlsZXMobWVzc2FnZURhdGEudGlsZXMpO1xyXG4gICAgICAgIHNldFJlc2N1ZXMobWVzc2FnZURhdGEucmVzY3Vlcyk7XHJcbiAgICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgICAgc3F1YXJlczogWy4uLm1lc3NhZ2VEYXRhLnNxdWFyZXNdLFxyXG4gICAgICAgICAgdXNlZGJ5OiBbLi4ubWVzc2FnZURhdGEudXNlZGJ5XSxcclxuICAgICAgICAgIHB0aWxlczogWy4uLm1lc3NhZ2VEYXRhLnB0aWxlc10sXHJcbiAgICAgICAgICBndGlsZXM6IFsuLi5ndGlsZXNdLFxyXG4gICAgICAgIH0pOyAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJlZ3RcIikgeyAvLyBlbmQgZ3VhcmRzIHR1cm5cclxuICAgICAgICBzZXRXaG9zZXR1cm4oXCJQXCIpO1xyXG4gICAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICAgICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICAgICAgc2V0U3F1YXJlcyhtZXNzYWdlRGF0YS5zcXVhcmVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobWVzc2FnZURhdGEudXNlZGJ5KTtcclxuICAgICAgICBzZXRHdGlsZXMobWVzc2FnZURhdGEuZ3RpbGVzKTtcclxuICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgICAgc3F1YXJlczogWy4uLm1lc3NhZ2VEYXRhLnNxdWFyZXNdLFxyXG4gICAgICAgICAgdXNlZGJ5OiBbLi4ubWVzc2FnZURhdGEudXNlZGJ5XSxcclxuICAgICAgICAgIHB0aWxlczogWy4uLnB0aWxlc10sXHJcbiAgICAgICAgICBndGlsZXM6IFsuLi5tZXNzYWdlRGF0YS5ndGlsZXNdLFxyXG4gICAgICAgIH0pOyAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlTWVzc2FnZShtZXNzYWdlKTtcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlQm9hcmRTcXVhcmVDbGljayA9IChyaSwgY2kpID0+IHtcclxuICAgIGxldCBuZXdTcXVhcmVzID0gWy4uLnNxdWFyZXNdO1xyXG4gICAgbGV0IG5ld1VzZWRieSA9IFsuLi51c2VkYnldO1xyXG4gICAgbGV0IG5ld1B0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgbGV0IG5ld1JvdyA9IFsuLi5zcXVhcmVzW3JpXV07XHJcbiAgICBsZXQgc3F1YXJldmFsdWUgPSBzcXVhcmVzW3JpXVtjaV07XHJcbiAgICBsZXQgbmV3Q3VycmVudGNvb3JkcyA9IFsuLi5jdXJyZW50Y29vcmRzXTtcclxuXHJcbiAgICBsZXQgY29vcmQgPSBTdHJpbmcocmkpICsgXCItXCIgKyBTdHJpbmcoY2kpO1xyXG4gICAgbGV0IGNjaSA9IGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCk7XHJcbiAgICBpZiAoc2VsZWN0aW9uID4gLTEgJiYgc3F1YXJldmFsdWUgPT09IFwiLlwiKSB7IC8vIHRpbGUgaXMgc2VsZWN0ZWQgZnJvbSByYWNrIGFuZCBjbGlja2VkIHNxdWFyZSBpcyBub3QgdXNlZCB5ZXRcclxuICAgICAgbmV3Um93W2NpXSA9XHJcbiAgICAgICAgd2hvc2V0dXJuID09PSBcIlBcIiA/IG5ld1B0aWxlc1tzZWxlY3Rpb25dIDogbmV3R3RpbGVzW3NlbGVjdGlvbl07XHJcbiAgICAgIG5ld1NxdWFyZXNbcmldID0gWy4uLm5ld1Jvd107XHJcbiAgICAgIHdob3NldHVybiA9PT0gXCJQXCJcclxuICAgICAgICA/IG5ld1B0aWxlcy5zcGxpY2Uoc2VsZWN0aW9uLCAxKVxyXG4gICAgICAgIDogbmV3R3RpbGVzLnNwbGljZShzZWxlY3Rpb24sIDEpO1xyXG4gICAgICBsZXQgbmV3VXNlZGJ5Um93ID0gWy4uLm5ld1VzZWRieVtyaV1dO1xyXG4gICAgICBuZXdVc2VkYnlSb3dbY2ldID0gd2hvc2V0dXJuO1xyXG4gICAgICBuZXdVc2VkYnlbcmldID0gWy4uLm5ld1VzZWRieVJvd107XHJcbiAgICAgIGxldCBuZXdTZWxlY3Rpb24gPSBzZWxlY3Rpb247XHJcbiAgICAgIGlmICh3aG9zZXR1cm4gPT09IFwiUFwiICYmIG5ld1NlbGVjdGlvbiA9PT0gbmV3UHRpbGVzLmxlbmd0aCkgeyBcclxuICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdTZWxlY3Rpb24gLSAxXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHdob3NldHVybiA9PT0gXCJHXCIgJiYgbmV3U2VsZWN0aW9uID09PSBuZXdHdGlsZXMubGVuZ3RoKSB7IFxyXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbiAtIDFcclxuICAgICAgfVxyXG4gICAgICBzZXRTZWxlY3Rpb24obmV3U2VsZWN0aW9uKTtcclxuICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKTtcclxuICAgICAgc2V0VXNlZGJ5KG5ld1VzZWRieSk7XHJcbiAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgc2V0Q3VycmVudGNvb3JkcyhbLi4uY3VycmVudGNvb3JkcywgY29vcmRdKTtcclxuICAgIH0gZWxzZSBpZiAoY2NpID4gLTEpIHsgLy8gY2xpY2tlZCBzcXVhcmUgaGFzIGEgdGlsZSBvbiBpdCBmcm9tIHRoZSBjdXJyZW50IG1vdmUgaW4gcHJvZ3Jlc3NcclxuICAgICAgd2hvc2V0dXJuID09PSBcIlBcIlxyXG4gICAgICAgID8gbmV3UHRpbGVzLnB1c2goc3F1YXJldmFsdWUpXHJcbiAgICAgICAgOiBuZXdHdGlsZXMucHVzaChzcXVhcmV2YWx1ZSk7XHJcbiAgICAgIGxldCBuZXdSb3cgPSBbLi4ubmV3U3F1YXJlc1tyaV1dO1xyXG4gICAgICBuZXdSb3dbY2ldID0gXCIuXCI7XHJcbiAgICAgIG5ld1NxdWFyZXNbcmldID0gWy4uLm5ld1Jvd107XHJcbiAgICAgIGxldCBuZXdVc2VkYnlSb3cgPSBbLi4ubmV3VXNlZGJ5W3JpXV07XHJcbiAgICAgIG5ld1VzZWRieVJvd1tjaV0gPSBcIlwiO1xyXG4gICAgICBuZXdVc2VkYnlbcmldID0gWy4uLm5ld1VzZWRieVJvd107XHJcbiAgICAgIHNldFNlbGVjdGlvbihcclxuICAgICAgICB3aG9zZXR1cm4gPT09IFwiUFwiID8gbmV3UHRpbGVzLmxlbmd0aCAtIDEgOiBuZXdHdGlsZXMubGVuZ3RoIC0gMVxyXG4gICAgICApO1xyXG4gICAgICBuZXdDdXJyZW50Y29vcmRzLnNwbGljZShjY2ksIDEpO1xyXG5cclxuICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKTtcclxuICAgICAgc2V0VXNlZGJ5KG5ld1VzZWRieSk7XHJcbiAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgc2V0Q3VycmVudGNvb3JkcyhuZXdDdXJyZW50Y29vcmRzKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQcmlzb25lclRpbGVDbGljayA9ICh0aWxlaW5kZXgpID0+IHtcclxuICAgIC8vIHRoZSBpbmRleCBvZiBwdGlsZXNcclxuICAgIGlmICh3aG9zZXR1cm4gPT09IFwiUFwiKSB7XHJcbiAgICAgIHNldFNlbGVjdGlvbih0aWxlaW5kZXgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoXCJJdCBpcyBub3QgeW91ciB0dXJuXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUd1YXJkVGlsZUNsaWNrID0gKHRpbGVpbmRleCkgPT4ge1xyXG4gICAgLy8gdGhlIGluZGV4IG9mIGd0aWxlc1xyXG4gICAgaWYgKHdob3NldHVybiA9PT0gXCJHXCIpIHtcclxuICAgICAgc2V0U2VsZWN0aW9uKHRpbGVpbmRleCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIkl0IGlzIG5vdCB5b3VyIHR1cm5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZW5kUHJpc29uZXJzVHVybiA9ICgpID0+IHtcclxuICAgIGlmICghaXNQbGF5VmFsaWQoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3UmVzY3VlcyA9IHJlc2N1ZXM7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRjb29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGVzY2FwZWhhdGNoZXMuaW5kZXhPZihjdXJyZW50Y29vcmRzW2ldKSA+IC0xKSB7XHJcbiAgICAgICAgbmV3UmVzY3VlcyA9IG5ld1Jlc2N1ZXMgKyAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgd2hpbGUgKG5ld1B0aWxlcy5sZW5ndGggPCA3ICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICBuZXdQdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgIH1cclxuICAgIG5ld1B0aWxlcy5zb3J0KCk7XHJcbiAgICBzZXRXaG9zZXR1cm4oXCJHXCIpO1xyXG4gICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICBzZXRSZXNjdWVzKG5ld1Jlc2N1ZXMpO1xyXG4gICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICBzcXVhcmVzOiBbLi4uc3F1YXJlc10sXHJcbiAgICAgIHVzZWRieTogWy4uLnVzZWRieV0sXHJcbiAgICAgIHB0aWxlczogWy4uLm5ld1B0aWxlc10sXHJcbiAgICAgIGd0aWxlczogWy4uLmd0aWxlc10sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZXB0XCIsIC8vIGVuZCBwcmlzb25lcnMgdHVyblxyXG4gICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgdXNlZGJ5OiB1c2VkYnksIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgcHRpbGVzOiBuZXdQdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgcmVzY3VlczogbmV3UmVzY3VlcyAvLyBtYXkgaGF2ZSByZXNjdWVkIGFub3RoZXIgcHJpc29uZXJcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZW5kR3VhcmRzVHVybiA9ICgpID0+IHtcclxuICAgIGlmICghaXNQbGF5VmFsaWQoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3R3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgd2hpbGUgKG5ld0d0aWxlcy5sZW5ndGggPCA3ICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICBuZXdHdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgIH1cclxuICAgIG5ld0d0aWxlcy5zb3J0KCk7XHJcbiAgICBsZXQgc25hcHNxdWFyZXMgPSBbLi4uc3F1YXJlc107XHJcbiAgICBsZXQgc25hcHVzZWRieSA9IFsuLi51c2VkYnldO1xyXG4gICAgbGV0IHNuYXBwdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgIGxldCBzbmFwZ3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICBzZXRXaG9zZXR1cm4oXCJQXCIpO1xyXG4gICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgIHNxdWFyZXM6IHNuYXBzcXVhcmVzLFxyXG4gICAgICB1c2VkYnk6IHNuYXB1c2VkYnksXHJcbiAgICAgIHB0aWxlczogc25hcHB0aWxlcyxcclxuICAgICAgZ3RpbGVzOiBzbmFwZ3RpbGVzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVndFwiLCAvLyBlbmQgZ3VhcmRzIHR1cm5cclxuICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLCAvLyB0aGlzIHdhcyBiZWluZyBjaGFuZ2VkIGFzIHRoZSB0aWxlcyB3ZXJlIGJlaW5nIHBsYXllZFxyXG4gICAgICAgIHVzZWRieTogdXNlZGJ5LCAvLyB0aGlzIHdhcyBiZWluZyBjaGFuZ2VkIGFzIHRoZSB0aWxlcyB3ZXJlIGJlaW5nIHBsYXllZFxyXG4gICAgICAgIGd0aWxlczogbmV3R3RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBndWFyZHMgcmFja1xyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcyAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gIGNvbnN0IHN3YXBQcmlzb25lcnNUaWxlcyA9ICgpID0+IHtcclxuICAgIGlmICh0aWxlcy5sZW5ndGggPCA3KSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIk5lZWQgNyBpbiB0aGUgYmFnIHRvIGV4Y2hhbmdlXCIpXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBuZXdQdGlsZXMgPSBbXTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICB3aGlsZSAobmV3UHRpbGVzLmxlbmd0aCA8IDcgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgIG5ld1B0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgfVxyXG4gICAgbmV3UHRpbGVzLnNvcnQoKTtcclxuICAgIG5ld1RpbGVzID0gWy4uLm5ld1RpbGVzLCAuLi5zbmFwc2hvdC5wdGlsZXNdO1xyXG4gICAgbmV3VGlsZXMuc29ydCgpO1xyXG4gICAgY29uc29sZS5sb2coXCJFeGNoYW5nZSBwdGlsZXNcIilcclxuICAgIGNvbnNvbGUubG9nKHNuYXBzaG90LnB0aWxlcylcclxuICAgIGNvbnNvbGUubG9nKHB0aWxlcylcclxuICAgIGNvbnNvbGUubG9nKG5ld1B0aWxlcylcclxuICAgIGNvbnNvbGUubG9nKHRpbGVzKVxyXG4gICAgY29uc29sZS5sb2cobmV3VGlsZXMpXHJcbiAgICBzZXRTcXVhcmVzKFsuLi5zbmFwc2hvdC5zcXVhcmVzXSk7XHJcbiAgICBzZXRVc2VkYnkoWy4uLnNuYXBzaG90LnVzZWRieV0pO1xyXG4gICAgc2V0V2hvc2V0dXJuKFwiR1wiKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICBzcXVhcmVzOiBbLi4uc25hcHNob3Quc3F1YXJlc10sXHJcbiAgICAgIHVzZWRieTogWy4uLnNuYXBzaG90LnVzZWRieV0sXHJcbiAgICAgIHB0aWxlczogWy4uLm5ld1B0aWxlc10sXHJcbiAgICAgIGd0aWxlczogWy4uLmd0aWxlc10sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZXB0XCIsIC8vIGVuZCBwcmlzb25lcnMgdHVyblxyXG4gICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICB1c2VkYnk6IHNuYXBzaG90LnVzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgIHB0aWxlczogbmV3UHRpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXMgLy8gbm8gcmVzY3VlcyBvbiBhbiBleGNoYW5nZVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IHN3YXBHdWFyZHNUaWxlcyA9ICgpID0+IHtcclxuICAgIGlmICh0aWxlcy5sZW5ndGggPCA3KSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIk5lZWQgNyBpbiB0aGUgYmFnIHRvIGV4Y2hhbmdlXCIpXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBuZXdHdGlsZXMgPSBbXTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICB3aGlsZSAobmV3R3RpbGVzLmxlbmd0aCA8IDcgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgIG5ld0d0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgfVxyXG4gICAgbmV3R3RpbGVzLnNvcnQoKTtcclxuICAgIG5ld1RpbGVzID0gWy4uLm5ld1RpbGVzLCAuLi5zbmFwc2hvdC5ndGlsZXNdO1xyXG4gICAgbmV3VGlsZXMuc29ydCgpO1xyXG4gICAgc2V0U3F1YXJlcyhbLi4uc25hcHNob3Quc3F1YXJlc10pO1xyXG4gICAgc2V0VXNlZGJ5KFsuLi5zbmFwc2hvdC51c2VkYnldKTtcclxuICAgIHNldFdob3NldHVybihcIlBcIik7XHJcbiAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgc3F1YXJlczogWy4uLnNuYXBzaG90LnNxdWFyZXNdLFxyXG4gICAgICB1c2VkYnk6IFsuLi5zbmFwc2hvdC51c2VkYnldLFxyXG4gICAgICBwdGlsZXM6IFsuLi5wdGlsZXNdLFxyXG4gICAgICBndGlsZXM6IFsuLi5uZXdHdGlsZXNdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVndFwiLCAvLyBlbmQgZ3VhcmRzIHR1cm5cclxuICAgICAgICBzcXVhcmVzOiBzbmFwc2hvdC5zcXVhcmVzLCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiBzcXVhcmVzXHJcbiAgICAgICAgdXNlZGJ5OiBzbmFwc2hvdC51c2VkYnksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHVzZWQgYnlcclxuICAgICAgICBndGlsZXM6IG5ld0d0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgcHJpc29uZXJzIHJhY2tcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpc1BsYXlWYWxpZCgpIHtcclxuICAgIGlmIChzcXVhcmVzWzddWzddID09PSBcIi5cIikge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJGaXJzdCBwbGF5IG11c3QgaGl0IGNlbnRlciBzcXVhcmVcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBsb3dyb3cgPSAxNTtcclxuICAgIGxldCBoaWdocm93ID0gLTE7XHJcbiAgICBsZXQgbG93Y29sID0gMTU7XHJcbiAgICBsZXQgaGlnaGNvbCA9IC0xO1xyXG4gICAgZm9yICh2YXIgcj0wOyByIDwgMTU7ICsrcikge1xyXG4gICAgICBmb3IgKHZhciBjPTA7IGMgPCAxNTsgKytjKSB7XHJcbiAgICAgICAgaWYgKHNxdWFyZXNbcl1bY10gIT09IFwiLlwiKSB7XHJcbiAgICAgICAgICBpZiAoIShyID4gMCAmJiBzcXVhcmVzW3ItMV1bY10gIT09IFwiLlwiKSAmJlxyXG4gICAgICAgICAgICEoYyA+IDAgJiYgc3F1YXJlc1tyXVtjLTFdICE9PSBcIi5cIikgJiZcclxuICAgICAgICAgICAhKHIgPCAxNCAmJiBzcXVhcmVzW3IrMV1bY10gIT09IFwiLlwiKSAmJlxyXG4gICAgICAgICAgICEoYyA8IDE0ICYmIHNxdWFyZXNbcl1bYysxXSAhPT0gXCIuXCIpXHJcbiAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIkVhY2ggcGxheWVkIHRpbGUgbXVzdCBiZSBwYXJ0IG9mIGEgd29yZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICBpZiAoc25hcHNob3Quc3F1YXJlc1tyXVtjXSA9PT0gXCIuXCIpIHtcclxuICAgICAgICAgICAgIC8vIFRoaXMgc3F1YXJlIHdhcyBwbGF5ZWQgb24gdGhpcyB0dXJuXHJcbiAgICAgICAgICAgICBpZiAociA8IGxvd3JvdykgeyBsb3dyb3cgPSByO31cclxuICAgICAgICAgICAgIGlmIChyID4gaGlnaHJvdykgeyBoaWdocm93ID0gcjt9XHJcbiAgICAgICAgICAgICBpZiAoYyA8IGxvd2NvbCkgeyBsb3djb2wgPSBjO31cclxuICAgICAgICAgICAgIGlmIChjID4gaGlnaGNvbCkgeyBoaWdoY29sID0gYzt9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobG93cm93ID09PSAxNSkge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJZb3UgZGlkbid0IHBsYXkgYW55IHRpbGVzXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAobG93cm93ICE9PSBoaWdocm93ICYmIGxvd2NvbCAhPT0gaGlnaGNvbCkge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJUaWxlcyBwbGF5ZWQgbXVzdCBiZSBpbiBhIHN0cmFpZ2h0IGxpbmVcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBwbGF5dGhydSA9IGZhbHNlO1xyXG4gICAgbGV0IGhvb2ttYWRlID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciByID0gbG93cm93OyByIDw9IGhpZ2hyb3c7ICsrcikge1xyXG4gICAgICBmb3IgKHZhciBjID0gbG93Y29sOyBjIDw9IGhpZ2hjb2w7ICsrYykge1xyXG4gICAgICAgIGlmIChzcXVhcmVzW3JdW2NdID09PSBcIi5cIikge1xyXG4gICAgICAgICAgd2luZG93LmFsZXJ0KFwiVGhlcmUgaXMgYSBnYXAgaW4geW91ciB3b3JkXCIpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc25hcHNob3Quc3F1YXJlc1tyXVtjXSAhPT0gXCIuXCIpIHtcclxuICAgICAgICAgIHBsYXl0aHJ1ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiByID4gMCAmJiBzcXVhcmVzW3ItMV1bY10gIT09IFwiLlwiKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgciA8IDE0ICYmIHNxdWFyZXNbcisxXVtjXSAhPT0gXCIuXCIpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBjID4gMCAmJiBzcXVhcmVzW3JdW2MtMV0gIT09IFwiLlwiKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgYyA8IDE0ICYmIHNxdWFyZXNbcl1bYysxXSAhPT0gXCIuXCIpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIENoZWNrIHBsYXkgdG8gb3IgZnJvbSBhIHRpbGUgKHBsYXkgdGhyb3VnaCBidXQgbm90IGVpdGhlciBzaWRlKVxyXG4gICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiBsb3djb2wgPiAwICYmIHNuYXBzaG90LnNxdWFyZXNbbG93cm93XVtsb3djb2wtMV0gIT09IFwiLlwiKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiBoaWdoY29sIDwgMTQgJiYgc25hcHNob3Quc3F1YXJlc1tsb3dyb3ddW2hpZ2hjb2wrMV0gIT09IFwiLlwiKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBsb3dyb3cgPiAwICYmIHNuYXBzaG90LnNxdWFyZXNbbG93cm93LTFdW2xvd2NvbF0gIT09IFwiLlwiKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBoaWdocm93IDwgMTQgJiYgc25hcHNob3Quc3F1YXJlc1toaWdocm93KzFdW2xvd2NvbF0gIT09IFwiLlwiKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgaWYgKCFwbGF5dGhydSAmJiAhaG9va21hZGUgJiYgc25hcHNob3Quc3F1YXJlc1s3XVs3XSAhPT0gXCIuXCIpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiV29yZHMgbXVzdCBiZSBjb25uZWN0ZWRcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVjYWxsVGlsZXMgPSAoKSA9PiB7XHJcbiAgICBzZXRTcXVhcmVzKFsuLi5zbmFwc2hvdC5zcXVhcmVzXSk7XHJcbiAgICBzZXRVc2VkYnkoWy4uLnNuYXBzaG90LnVzZWRieV0pO1xyXG4gICAgc2V0UHRpbGVzKFsuLi5zbmFwc2hvdC5wdGlsZXNdKTtcclxuICAgIHNldEd0aWxlcyhbLi4uc25hcHNob3QuZ3RpbGVzXSk7XHJcbiAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHJpc29uZXJQYXNzID0gKCkgPT4ge1xyXG4gICAgcmVjYWxsVGlsZXMoKTsgLy8gSW4gY2FzZSB0aGV5IHB1dCBzb21lIHRpbGVzIG9uIHRoZSBib2FyZCBiZWZvcmUgY2xpY2tpbmcgUGFzc1xyXG4gICAgc2V0V2hvc2V0dXJuKFwiR1wiKTtcclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlcHRcIiwgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgc3F1YXJlczogc25hcHNob3Quc3F1YXJlcywgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgcHRpbGVzOiBzbmFwc2hvdC5wdGlsZXMsIC8vIHByaXNvbmVycyByYWNrIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgdGlsZXM6IHRpbGVzLCAvLyB0aWxlIHBvb2wgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICByZXNjdWVzOiByZXNjdWVzIC8vIG5vIHJlc2N1ZXMgb24gYSBwYXNzXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ3VhcmRzUGFzcyA9ICgpID0+IHtcclxuICAgIHJlY2FsbFRpbGVzKCk7IC8vIEluIGNhc2UgdGhleSBwdXQgc29tZSB0aWxlcyBvbiB0aGUgYm9hcmQgYmVmb3JlIGNsaWNraW5nIFBhc3NcclxuICAgIHNldFdob3NldHVybihcIlBcIik7XHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICB1c2VkYnk6IHNuYXBzaG90LnVzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgIGd0aWxlczogc25hcHNob3QuZ3RpbGVzLCAvLyBndWFyZHMgcmFjayBkaWQgbm90IGNoYW5nZVxyXG4gICAgICAgIHRpbGVzOiB0aWxlcyAvLyB0aWxlIHBvb2wgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXF1ZXN0R2FtZURhdGEgPSAocGxheWVydHlwZSkgPT4ge1xyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcInJlcXVlc3RnYW1lZGF0YVwiLCAvLyByZXF1ZXN0IGdhbWUgZGF0YVxyXG4gICAgICAgIHJlcXVlc3RvcjogcHJpc29uZXJzT3JHdWFyZHNcclxuICAgICAgfSlcclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwcmlzb25icmVha1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIHBidGl0bGVcIj5Qcmlzb24gQnJlYWs8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yIHBiaG9tZWxpbmtcIj5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJyZXF1ZXN0R2FtZURhdGFcIlxyXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlN5bmMgd2l0aCBvcHBvbmVudFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIHJlcXVlc3RHYW1lRGF0YShwcmlzb25lcnNPckd1YXJkcyk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5zeW5jPC9pPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi4uLy4uL1wifT5cclxuICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPjwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMiBwYlByaXNvbmVyc1wiPlxyXG4gICAgICAgICAgPFByaXNvbmVyc1xyXG4gICAgICAgICAgICBwdGlsZXM9e3B0aWxlc31cclxuICAgICAgICAgICAgd2hvc2V0dXJuPXt3aG9zZXR1cm59XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0aW9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IGhhbmRsZVByaXNvbmVyVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgb25DbGlja0ZpbmlzaFR1cm49eygpID0+IGVuZFByaXNvbmVyc1R1cm4oKX1cclxuICAgICAgICAgICAgb25DbGlja1RpbGVSZWNhbGw9eygpID0+IHJlY2FsbFRpbGVzKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tUaWxlRXhjaGFuZ2U9eygpID0+IHN3YXBQcmlzb25lcnNUaWxlcygpfVxyXG4gICAgICAgICAgICBvbkNsaWNrUGFzc1BsYXk9eygpID0+IHByaXNvbmVyUGFzcygpfVxyXG4gICAgICAgICAgICByZXNjdWVzPXtyZXNjdWVzfVxyXG4gICAgICAgICAgICBwcmlzb25lcnNPckd1YXJkcz17cHJpc29uZXJzT3JHdWFyZHN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAge3ByaXNvbmVyc09yR3VhcmRzID09PSB3aG9zZXR1cm4gP1xyXG4gICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgIHNxdWFyZXM9e3NxdWFyZXN9XHJcbiAgICAgICAgICAgIHVzZWRieT17dXNlZGJ5fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsocmksIGNpKSA9PiBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJpLCBjaSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgIHNxdWFyZXM9e3NxdWFyZXN9XHJcbiAgICAgICAgICAgIHVzZWRieT17dXNlZGJ5fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cuYWxlcnQoXCJUaGF0IHRpY2tsZXMhXCIpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yIHBiR3VhcmRzXCI+XHJcbiAgICAgICAgICA8R3VhcmRzXHJcbiAgICAgICAgICAgIGd0aWxlcz17Z3RpbGVzfVxyXG4gICAgICAgICAgICB3aG9zZXR1cm49e3dob3NldHVybn1cclxuICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyh0aSkgPT4gaGFuZGxlR3VhcmRUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICBvbkNsaWNrRmluaXNoVHVybj17KCkgPT4gZW5kR3VhcmRzVHVybigpfVxyXG4gICAgICAgICAgICBvbkNsaWNrVGlsZVJlY2FsbD17KCkgPT4gcmVjYWxsVGlsZXMoKX1cclxuICAgICAgICAgICAgb25DbGlja1RpbGVFeGNoYW5nZT17KCkgPT4gc3dhcEd1YXJkc1RpbGVzKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tQYXNzUGxheT17KCkgPT4gZ3VhcmRzUGFzcygpfVxyXG4gICAgICAgICAgICBwcmlzb25lcnNPckd1YXJkcz17cHJpc29uZXJzT3JHdWFyZHN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cclxuICAgICAgICAgIDxTaG93VW5zZWVuVGlsZXMgdGlsZXM9e3RpbGVzfSBvdGhlcnRpbGVzPXtwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyBndGlsZXMgOiBwdGlsZXN9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU2hvd1Vuc2VlblRpbGVzID0gKHByb3BzKSA9PiB7IC8vIHRpbGVzID0gdGlsZXMgaW4gYmFnLCBvdGhlcnRpbGVzID0gdGlsZXMgb24gb3RoZXIgcGxheWVycyByYWNrXHJcbiAgbGV0IHVuc2VlblRpbGVzID0gWy4uLnByb3BzLnRpbGVzLCAuLi5wcm9wcy5vdGhlcnRpbGVzXTtcclxuICB1bnNlZW5UaWxlcy5zb3J0KCk7XHJcbiAgaWYgKHVuc2VlblRpbGVzWzBdID09PSBcIj9cIikge1xyXG4gICAgICB1bnNlZW5UaWxlcy5zcGxpY2UoMCwxKVxyXG4gICAgICB1bnNlZW5UaWxlcy5wdXNoKFwiP1wiKVxyXG4gIH1cclxuICBpZiAodW5zZWVuVGlsZXNbMF0gPT09IFwiP1wiKSB7XHJcbiAgICAgIHVuc2VlblRpbGVzLnNwbGljZSgwLDEpXHJcbiAgICAgIHVuc2VlblRpbGVzLnB1c2goXCI/XCIpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXBvb2xcIj5cclxuICAgICAgPGgzPlRJTEVTPC9oMz5cclxuICAgICAge3Vuc2VlblRpbGVzLm1hcCgodCwgdGkpID0+IChcclxuICAgICAgICA8c3BhbiBrZXk9e2B0aWxlJHt0aX1gfT5cclxuICAgICAgICAgIHt0aSA+IDAgJiYgdCAhPT0gdW5zZWVuVGlsZXNbdGkgLSAxXSA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVwb29sRGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYlRpbGVwb29sVGlsZVwiPnt0fTwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFJhY2tUaWxlID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuIGNsYXNzTmFtZT17cHJvcHMudGlsZWNsYXNzfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAge3Byb3BzLnRpbGV2YWx1ZX1cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgRmluaXNoVHVybkJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiRmluaXNoVHVyblwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNoZWNrPC9pPkZpbmlzaCBUdXJuXHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVGlsZVJlY2FsbEJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiUmVjYWxsVGlsZXNcIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj51bmRvPC9pPlJlY2FsbCBUaWxlc1xyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRpbGVFeGNoYW5nZUJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiRXhjaGFuZ2VUaWxlc1wiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnNlbnRpbWVudF9kaXNzYXRpc2ZpZWQ8L2k+RXhjaGFuZ2UgVGlsZXNcclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBQYXNzUGxheUJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiUGFzc1BsYXlcIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5zZW50aW1lbnRfbmV1dHJhbDwvaT5QYXNzXHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUHJpc29uZXJzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyVGlsZSA9ICh0aWxlY2xhc3MsIHRpbGVpbmRleCwgdGlsZXZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgP1xyXG4gICAgICA8UmFja1RpbGVcclxuICAgICAgICBrZXk9e3RpbGVjbGFzcyArIFN0cmluZyh0aWxlaW5kZXgpfVxyXG4gICAgICAgIHRpbGVjbGFzcz17dGlsZWNsYXNzfVxyXG4gICAgICAgIHRpbGV2YWx1ZT17dGlsZXZhbHVlfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2sodGlsZWluZGV4KX1cclxuICAgICAgLz5cclxuICAgICAgOlxyXG4gICAgICA8UmFja1RpbGVcclxuICAgICAgICBrZXk9e3RpbGVjbGFzcyArIFN0cmluZyh0aWxlaW5kZXgpfVxyXG4gICAgICAgIHRpbGVjbGFzcz17dGlsZWNsYXNzfVxyXG4gICAgICAgIHRpbGV2YWx1ZT17dGlsZXZhbHVlfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5hbGVydChcIk5vIHBlZWtpbmchXCIpfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJGaW5pc2hUdXJuID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxwPjxGaW5pc2hUdXJuQnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tGaW5pc2hUdXJuKCl9IC8+PC9wPjtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJSZWNhbGxUaWxlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiA8cD48VGlsZVJlY2FsbEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrVGlsZVJlY2FsbCgpfSAvPjwvcD47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRXhjaGFuZ2VUaWxlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiA8cD48VGlsZUV4Y2hhbmdlQnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tUaWxlRXhjaGFuZ2UoKX0gLz48L3A+O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclBhc3NQbGF5ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxwPjxQYXNzUGxheUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrUGFzc1BsYXkoKX0gLz48L3A+O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckZyZWVkUHJpc29uZXJzID0gKGNvdW50KSA9PiB7XHJcbiAgICBsZXQgZHVtYiA9IEFycmF5KGNvdW50KS5maWxsKFwibm9uc2Vuc2VcIik7XHJcbiAgICByZXR1cm4gZHVtYi5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICA8c3BhbiBrZXk9e3ZhbHVlICsgU3RyaW5nKGluZGV4KX0+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiL2JyZWFrZnJlZS5wbmdcIlxyXG4gICAgICAgICAgYWx0PVwiSSdtIGZyZWUhIEknbSBmcmVlIVwiXHJcbiAgICAgICAgICB3aWR0aD1cIjEwMFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cD5QUklTT05FUlM8L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInBiVGlsZXJhY2tcIj5cclxuICAgICAgICB7cHJvcHMucHRpbGVzLm1hcCgodCwgdGkpID0+XHJcbiAgICAgICAgICByZW5kZXJUaWxlKFxyXG4gICAgICAgICAgICBwcm9wcy53aG9zZXR1cm4gPT09IFwiUFwiICYmIHByb3BzLnNlbGVjdGlvbiA9PT0gdGlcclxuICAgICAgICAgICAgICA/IFwicGJUaWxlT25SYWNrU2VsZWN0ZWRQXCJcclxuICAgICAgICAgICAgICA6IFwicGJUaWxlT25SYWNrUFwiLFxyXG4gICAgICAgICAgICB0aSxcclxuICAgICAgICAgICAgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gdCA6IFwiKlwiXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9wPlxyXG4gICAgICB7cHJvcHMud2hvc2V0dXJuID09PSBcIlBcIiAmJiBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyByZW5kZXJGaW5pc2hUdXJuKCkgOiA8PjwvPn1cclxuICAgICAge3Byb3BzLndob3NldHVybiA9PT0gXCJQXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gcmVuZGVyUmVjYWxsVGlsZXMoKSA6IDw+PC8+fVxyXG4gICAgICB7cHJvcHMud2hvc2V0dXJuID09PSBcIlBcIiAmJiBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyByZW5kZXJFeGNoYW5nZVRpbGVzKCkgOiA8PjwvPn1cclxuICAgICAge3Byb3BzLndob3NldHVybiA9PT0gXCJQXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gcmVuZGVyUGFzc1BsYXkoKSA6IDw+PC8+fVxyXG4gICAgICA8cD5cclxuICAgICAgICBSZXNjdWVzIG1hZGU6IHtwcm9wcy5yZXNjdWVzfVxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIHtyZW5kZXJGcmVlZFByaXNvbmVycyhwcm9wcy5yZXNjdWVzKX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEd1YXJkcyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJlbmRlclRpbGUgPSAodGlsZWNsYXNzLCB0aWxlaW5kZXgsIHRpbGV2YWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiR1wiID9cclxuICAgICAgPFJhY2tUaWxlXHJcbiAgICAgICAga2V5PXt0aWxlY2xhc3MgKyBTdHJpbmcodGlsZWluZGV4KX1cclxuICAgICAgICB0aWxlY2xhc3M9e3RpbGVjbGFzc31cclxuICAgICAgICB0aWxldmFsdWU9e3RpbGV2YWx1ZX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrKHRpbGVpbmRleCl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDpcclxuICAgICAgPFJhY2tUaWxlXHJcbiAgICAgICAga2V5PXt0aWxlY2xhc3MgKyBTdHJpbmcodGlsZWluZGV4KX1cclxuICAgICAgICB0aWxlY2xhc3M9e3RpbGVjbGFzc31cclxuICAgICAgICB0aWxldmFsdWU9e3RpbGV2YWx1ZX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cuYWxlcnQoXCJObyBwZWVraW5nIVwiKX1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRmluaXNoVHVybiA9ICgpID0+IHtcclxuICAgIHJldHVybiA8RmluaXNoVHVybkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrRmluaXNoVHVybigpfSAvPjtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJSZWNhbGxUaWxlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiA8VGlsZVJlY2FsbEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrVGlsZVJlY2FsbCgpfSAvPjtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJFeGNoYW5nZVRpbGVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxUaWxlRXhjaGFuZ2VCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1RpbGVFeGNoYW5nZSgpfSAvPjtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJQYXNzUGxheSA9ICgpID0+IHtcclxuICAgIHJldHVybiA8UGFzc1BsYXlCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1Bhc3NQbGF5KCl9IC8+O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cD5HVUFSRFM8L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInBiVGlsZXJhY2tcIj5cclxuICAgICAgICB7cHJvcHMuZ3RpbGVzLm1hcCgodCwgdGkpID0+XHJcbiAgICAgICAgICByZW5kZXJUaWxlKFxyXG4gICAgICAgICAgICBwcm9wcy53aG9zZXR1cm4gPT09IFwiR1wiICYmIHByb3BzLnNlbGVjdGlvbiA9PT0gdGlcclxuICAgICAgICAgICAgICA/IFwicGJUaWxlT25SYWNrU2VsZWN0ZWRHXCJcclxuICAgICAgICAgICAgICA6IFwicGJUaWxlT25SYWNrR1wiLFxyXG4gICAgICAgICAgICB0aSxcclxuICAgICAgICAgICAgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiR1wiID8gdCA6IFwiKlwiXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9wPlxyXG4gICAgICB7cHJvcHMud2hvc2V0dXJuID09PSBcIkdcIiAmJiBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJHXCIgPyByZW5kZXJGaW5pc2hUdXJuKCkgOiA8PjwvPn1cclxuICAgICAge3Byb3BzLndob3NldHVybiA9PT0gXCJHXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiR1wiID8gcmVuZGVyUmVjYWxsVGlsZXMoKSA6IDw+PC8+fVxyXG4gICAgICB7cHJvcHMud2hvc2V0dXJuID09PSBcIkdcIiAmJiBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJHXCIgPyByZW5kZXJFeGNoYW5nZVRpbGVzKCkgOiA8PjwvPn1cclxuICAgICAge3Byb3BzLndob3NldHVybiA9PT0gXCJHXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiR1wiID8gcmVuZGVyUGFzc1BsYXkoKSA6IDw+PC8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==