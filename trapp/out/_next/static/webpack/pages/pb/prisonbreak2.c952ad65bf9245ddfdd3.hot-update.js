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
      children: "sentiment_dissatisfied"
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
        lineNumber: 964,
        columnNumber: 9
      }, undefined)
    }, value + String(index), false, {
      fileName: _jsxFileName,
      lineNumber: 963,
      columnNumber: 7
    }, undefined));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "PRISONERS"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 976,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilerack",
      children: props.ptiles.map((t, ti) => renderTile(props.whoseturn === "P" && props.selection === ti ? "pbTileOnRackSelectedP" : "pbTileOnRackP", ti, props.prisonersOrGuards === "P" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 977,
      columnNumber: 7
    }, undefined), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderRecallTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderExchangeTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Rescues made: ", props.rescues, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 993,
        columnNumber: 9
      }, undefined), renderFreedPrisoners(props.rescues)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 991,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 975,
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
      lineNumber: 1004,
      columnNumber: 7
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
      tileclass: tileclass,
      tilevalue: tilevalue,
      onClick: () => window.alert("No peeking!")
    }, tileclass + String(tileindex), false, {
      fileName: _jsxFileName,
      lineNumber: 1011,
      columnNumber: 7
    }, undefined);
  };

  const renderFinishTurn = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
      onClick: () => props.onClickFinishTurn()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1021,
      columnNumber: 12
    }, undefined);
  };

  const renderRecallTiles = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
      onClick: () => props.onClickTileRecall()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1025,
      columnNumber: 12
    }, undefined);
  };

  const renderExchangeTiles = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileExchangeButton, {
      onClick: () => props.onClickTileExchange()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1029,
      columnNumber: 12
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "GUARDS"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1034,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilerack",
      children: props.gtiles.map((t, ti) => renderTile(props.whoseturn === "G" && props.selection === ti ? "pbTileOnRackSelectedG" : "pbTileOnRackG", ti, props.prisonersOrGuards === "G" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1035,
      columnNumber: 7
    }, undefined), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderRecallTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderExchangeTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1033,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsyLmpzIl0sIm5hbWVzIjpbImVzY2FwZWhhdGNoZXMiLCJpbml0aWFsdGlsZXMiLCJQcmlzb25CcmVhayIsImlubG9iYnkiLCJzZXRJbmxvYmJ5IiwidXNlU3RhdGUiLCJnYW1laWQiLCJzZXRHYW1laWQiLCJwcmlzb25lcnNPckd1YXJkcyIsInNldFByaXNvbmVyc09yR3VhcmRzIiwid3Ntc2dzIiwic2V0V3Ntc2dzIiwibXNnaWQiLCJzZXRNc2dpZCIsImhvc3QiLCJhY2NlcHRNZXNzYWdlIiwibWVzc2FnZSIsImN1cnIiLCJkYXRhIiwicmVtb3ZlTWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiaSIsImluZGV4T2YiLCJ3Iiwic3BsaWNlIiwiY2xpZW50Iiwic2V0Q2xpZW50IiwiQ3VzdG9tU29ja2V0IiwidXNlRWZmZWN0IiwiY29ubmVjdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsIm1hcCIsIm1zZyIsImlueCIsIlNxdWFyZSIsInByb3BzIiwidXNlZGJ5Y2xhc3MiLCJzcXVhcmV1c2VkYnkiLCJ0ZGNsYXNzIiwiYyIsInJpIiwiY2kiLCJ0ZHZhbHVlIiwib25DbGljayIsIkJvYXJkIiwic3F1YXJlcyIsInVzZWRieSIsInJlbmRlclNxdWFyZSIsInJlbmRlclJvdyIsInIiLCJHYW1lIiwidGlsZXMiLCJzZXRUaWxlcyIsInB0aWxlcyIsInNldFB0aWxlcyIsImd0aWxlcyIsInNldEd0aWxlcyIsInNldFNxdWFyZXMiLCJBcnJheSIsImZpbGwiLCJzZXRVc2VkYnkiLCJzZWxlY3Rpb24iLCJzZXRTZWxlY3Rpb24iLCJ3aG9zZXR1cm4iLCJzZXRXaG9zZXR1cm4iLCJjdXJyZW50Y29vcmRzIiwic2V0Q3VycmVudGNvb3JkcyIsInJlc2N1ZXMiLCJzZXRSZXNjdWVzIiwic25hcHNob3QiLCJzZXRTbmFwc2hvdCIsInRlbXBQVGlsZXMiLCJ0ZW1wR1RpbGVzIiwidGVtcFRpbGVzIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzb3J0IiwiY29uc29sZSIsImxvZyIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsImZ1bmMiLCJwcm9jZXNzTWVzc2FnZSIsInBhcnNlIiwicmVxdWVzdG9yIiwic2VuZGVyIiwiaGFuZGxlQm9hcmRTcXVhcmVDbGljayIsIm5ld1NxdWFyZXMiLCJuZXdVc2VkYnkiLCJuZXdQdGlsZXMiLCJuZXdHdGlsZXMiLCJuZXdSb3ciLCJzcXVhcmV2YWx1ZSIsIm5ld0N1cnJlbnRjb29yZHMiLCJjb29yZCIsIlN0cmluZyIsImNjaSIsIm5ld1VzZWRieVJvdyIsIm5ld1NlbGVjdGlvbiIsImhhbmRsZVByaXNvbmVyVGlsZUNsaWNrIiwidGlsZWluZGV4IiwiYWxlcnQiLCJoYW5kbGVHdWFyZFRpbGVDbGljayIsImVuZFByaXNvbmVyc1R1cm4iLCJpc1BsYXlWYWxpZCIsIm5ld1Jlc2N1ZXMiLCJuZXdUaWxlcyIsImVuZEd1YXJkc1R1cm4iLCJzbmFwc3F1YXJlcyIsInNuYXB1c2VkYnkiLCJzbmFwcHRpbGVzIiwic25hcGd0aWxlcyIsInN3YXBQcmlzb25lcnNUaWxlcyIsIndpbmRvdyIsInN3YXBHdWFyZHNUaWxlcyIsImxvd3JvdyIsImhpZ2hyb3ciLCJsb3djb2wiLCJoaWdoY29sIiwicGxheXRocnUiLCJob29rbWFkZSIsInJlY2FsbFRpbGVzIiwicHJpc29uZXJQYXNzIiwiZ3VhcmRzUGFzcyIsInJlcXVlc3RHYW1lRGF0YSIsInBsYXllcnR5cGUiLCJ0aSIsIlNob3dVbnNlZW5UaWxlcyIsInVuc2VlblRpbGVzIiwib3RoZXJ0aWxlcyIsInQiLCJSYWNrVGlsZSIsInRpbGVjbGFzcyIsInRpbGV2YWx1ZSIsIkZpbmlzaFR1cm5CdXR0b24iLCJUaWxlUmVjYWxsQnV0dG9uIiwiVGlsZUV4Y2hhbmdlQnV0dG9uIiwiUGFzc1BsYXlCdXR0b24iLCJQcmlzb25lcnMiLCJyZW5kZXJUaWxlIiwicmVuZGVyRmluaXNoVHVybiIsIm9uQ2xpY2tGaW5pc2hUdXJuIiwicmVuZGVyUmVjYWxsVGlsZXMiLCJvbkNsaWNrVGlsZVJlY2FsbCIsInJlbmRlckV4Y2hhbmdlVGlsZXMiLCJvbkNsaWNrVGlsZUV4Y2hhbmdlIiwicmVuZGVyRnJlZWRQcmlzb25lcnMiLCJjb3VudCIsImR1bWIiLCJpbmRleCIsIkd1YXJkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxhQUFhLEdBQUcsQ0FDcEIsS0FEb0IsRUFFcEIsS0FGb0IsRUFHcEIsTUFIb0IsRUFJcEIsS0FKb0IsRUFLcEIsTUFMb0IsRUFNcEIsTUFOb0IsRUFPcEIsTUFQb0IsRUFRcEIsT0FSb0IsQ0FBdEIsQyxDQVNHOztBQUNILE1BQU1DLFlBQVksR0FBRyxDQUNuQixHQURtQixFQUVuQixHQUZtQixFQUduQixHQUhtQixFQUluQixHQUptQixFQUtuQixHQUxtQixFQU1uQixHQU5tQixFQU9uQixHQVBtQixFQVFuQixHQVJtQixFQVNuQixHQVRtQixFQVVuQixHQVZtQixFQVduQixHQVhtQixFQVluQixHQVptQixFQWFuQixHQWJtQixFQWNuQixHQWRtQixFQWVuQixHQWZtQixFQWdCbkIsR0FoQm1CLEVBaUJuQixHQWpCbUIsRUFrQm5CLEdBbEJtQixFQW1CbkIsR0FuQm1CLEVBb0JuQixHQXBCbUIsRUFxQm5CLEdBckJtQixFQXNCbkIsR0F0Qm1CLEVBdUJuQixHQXZCbUIsRUF3Qm5CLEdBeEJtQixFQXlCbkIsR0F6Qm1CLEVBMEJuQixHQTFCbUIsRUEyQm5CLEdBM0JtQixFQTRCbkIsR0E1Qm1CLEVBNkJuQixHQTdCbUIsRUE4Qm5CLEdBOUJtQixFQStCbkIsR0EvQm1CLEVBZ0NuQixHQWhDbUIsRUFpQ25CLEdBakNtQixFQWtDbkIsR0FsQ21CLEVBbUNuQixHQW5DbUIsRUFvQ25CLEdBcENtQixFQXFDbkIsR0FyQ21CLEVBc0NuQixHQXRDbUIsRUF1Q25CLEdBdkNtQixFQXdDbkIsR0F4Q21CLEVB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QU4sS0FBb0IsR0FBcEIsSUFBMkI1QixLQUFLLENBQUM5QixpQkFBTixLQUE0QixHQUF2RCxHQUE2RDhJLGlCQUFpQixFQUE5RSxnQkFBbUYsdUpBZHRGLEVBZUdoSCxLQUFLLENBQUM0QixTQUFOLEtBQW9CLEdBQXBCLElBQTJCNUIsS0FBSyxDQUFDOUIsaUJBQU4sS0FBNEIsR0FBdkQsR0FBNkRnSixtQkFBbUIsRUFBaEYsZ0JBQXFGLHVKQWZ4RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQW1CRCxDQW5ERDs7T0FBTU0sTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYi9wcmlzb25icmVhazIuYzk1MmFkNjViZjkyNDVkZGZkZDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEN1c3RvbVNvY2tldCBmcm9tIFwiLi4vLi4vd3NcIjtcclxuY29uc3QgZXNjYXBlaGF0Y2hlcyA9IFtcclxuICBcIjAtMFwiLFxyXG4gIFwiMC03XCIsXHJcbiAgXCIwLTE0XCIsXHJcbiAgXCI3LTBcIixcclxuICBcIjctMTRcIixcclxuICBcIjE0LTBcIixcclxuICBcIjE0LTdcIixcclxuICBcIjE0LTE0XCIsXHJcbl07IC8vIGNvb3JkcyBvZiBlc2NhcGUgaGF0Y2hlc1xyXG5jb25zdCBpbml0aWFsdGlsZXMgPSBbXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJCXCIsXHJcbiAgXCJCXCIsXHJcbiAgXCJDXCIsXHJcbiAgXCJDXCIsXHJcbiAgXCJEXCIsXHJcbiAgXCJEXCIsXHJcbiAgXCJEXCIsXHJcbiAgXCJEXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJGXCIsXHJcbiAgXCJGXCIsXHJcbiAgXCJHXCIsXHJcbiAgXCJHXCIsXHJcbiAgXCJHXCIsXHJcbiAgXCJIXCIsXHJcbiAgXCJIXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJKXCIsXHJcbiAgXCJLXCIsXHJcbiAgXCJMXCIsXHJcbiAgXCJMXCIsXHJcbiAgXCJMXCIsXHJcbiAgXCJMXCIsXHJcbiAgXCJNXCIsXHJcbiAgXCJNXCIsXHJcbiAgXCJOXCIsXHJcbiAgXCJOXCIsXHJcbiAgXCJOXCIsXHJcbiAgXCJOXCIsXHJcbiAgXCJOXCIsXHJcbiAgXCJOXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJQXCIsXHJcbiAgXCJQXCIsXHJcbiAgXCJRXCIsXHJcbiAgXCJSXCIsXHJcbiAgXCJSXCIsXHJcbiAgXCJSXCIsXHJcbiAgXCJSXCIsXHJcbiAgXCJSXCIsXHJcbiAgXCJSXCIsXHJcbiAgXCJTXCIsXHJcbiAgXCJTXCIsXHJcbiAgXCJTXCIsXHJcbiAgXCJTXCIsXHJcbiAgXCJUXCIsXHJcbiAgXCJUXCIsXHJcbiAgXCJUXCIsXHJcbiAgXCJUXCIsXHJcbiAgXCJUXCIsXHJcbiAgXCJUXCIsXHJcbiAgXCJVXCIsXHJcbiAgXCJVXCIsXHJcbiAgXCJVXCIsXHJcbiAgXCJVXCIsXHJcbiAgXCJWXCIsXHJcbiAgXCJWXCIsXHJcbiAgXCJXXCIsXHJcbiAgXCJXXCIsXHJcbiAgXCJYXCIsXHJcbiAgXCJZXCIsXHJcbiAgXCJZXCIsXHJcbiAgXCJaXCIsXHJcbiAgXCI/XCIsXHJcbiAgXCI/XCIsXHJcbl07IC8vIGluaXRpYWwgdGlsZSBwb29sXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmlzb25CcmVhaygpIHtcclxuICBjb25zdCBbaW5sb2JieSwgc2V0SW5sb2JieV0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IFtnYW1laWQsIHNldEdhbWVpZF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbcHJpc29uZXJzT3JHdWFyZHMsIHNldFByaXNvbmVyc09yR3VhcmRzXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFt3c21zZ3MsIHNldFdzbXNnc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbbXNnaWQsIHNldE1zZ2lkXSA9IHVzZVN0YXRlKDApXHJcbiAgbGV0IGhvc3QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJ3dzczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbScgOiAnd3M6Ly9sb2NhbGhvc3Q6NTAwMCc7XHJcbiAgY29uc3QgYWNjZXB0TWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICBzZXRNc2dpZCgoY3VycikgPT4gY3VyciArIDEpXHJcbiAgICBzZXRXc21zZ3MoKGN1cnIpID0+IFsuLi5jdXJyLCBtZXNzYWdlLmRhdGFdKTtcclxuICB9XHJcbiAgY29uc3QgcmVtb3ZlTWVzc2FnZSA9IChtZXNzYWdlRGF0YSkgPT4ge1xyXG4gICAgbGV0IGkgPSB3c21zZ3MuaW5kZXhPZihtZXNzYWdlRGF0YSk7XHJcbiAgICBsZXQgdyA9IFsuLi53c21zZ3NdO1xyXG4gICAgdy5zcGxpY2UoaSwxKTtcclxuICAgIHNldFdzbXNncyh3KTtcclxuICB9XHJcbiAgY29uc3QgW2NsaWVudCwgc2V0Q2xpZW50XSA9IHVzZVN0YXRlKG5ldyBDdXN0b21Tb2NrZXQoaG9zdCwgYWNjZXB0TWVzc2FnZSkpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiAoXHJcbiAgICBjbGllbnQuY29ubmVjdCgpXHJcbiAgKSxbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIGlubG9iYnkgfHwgcHJpc29uZXJzT3JHdWFyZHMgPT09ICcnID9cclxuICAgIDxkaXY+XHJcbiAgICAgIDxwPkluIHRoZSBsb2JieTwvcD5cclxuICAgICAgPGxhYmVsPkdhbWUgaWQ6Jm5ic3A7PC9sYWJlbD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgICBuYW1lPVwiZ2FtZWlkXCJcclxuICAgICAgICAgIHZhbHVlPXtnYW1laWR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRHYW1laWQoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8bGFiZWw+Jm5ic3A7PC9sYWJlbD5cclxuICAgICAgPGJ1dHRvbiBpZD1cInN0YXJ0Z2FtZVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKGdhbWVpZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgc2V0UHJpc29uZXJzT3JHdWFyZHMoJ1AnKTtcclxuICAgICAgICAgICAgICBzZXRJbmxvYmJ5KGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgICAgU3RhcnQgR2FtZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGxhYmVsPiZuYnNwOzwvbGFiZWw+XHJcbiAgICAgIDxidXR0b24gaWQ9XCJqb2luZ2FtZVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKGdhbWVpZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgc2V0UHJpc29uZXJzT3JHdWFyZHMoJ0cnKTtcclxuICAgICAgICAgICAgICBzZXRJbmxvYmJ5KGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgICAgSm9pbiBHYW1lXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICB7d3Ntc2dzLm1hcCggKG1zZywgaW54KSA9PiAoXHJcbiAgICAgICAgPGxpIGtleT17aW54fT57bXNnfTwvbGk+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgICA6XHJcbiAgICA8R2FtZSBwcmlzb25lcnNPckd1YXJkcz17cHJpc29uZXJzT3JHdWFyZHN9XHJcbiAgICAgIGdhbWVpZD17Z2FtZWlkfVxyXG4gICAgICB3c21zZ3M9e3dzbXNnc31cclxuICAgICAgY2xpZW50PXtjbGllbnR9XHJcbiAgICAgIHJlbW92ZU1lc3NhZ2U9e3JlbW92ZU1lc3NhZ2V9XHJcbiAgICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBTcXVhcmUgPSAocHJvcHMpID0+IHtcclxuICAvLyBzcXVhcmV1c2VkYnksIHJpLCBjaSwgYywgb25DbGlja1xyXG4gIC8vIG5lZWQgc3F1YXJldXNlZGJ5IHRvIHBpY2sgY3NzIGNsYXNzTmFtZSBjb3JyZXNwb25kaW5nIHRvIHdobyBwbGF5ZWQgdGhlIHRpbGUgb24gdGhlIHNxdWFyZVxyXG4gIC8vIG5lZWQgcmksIGNpIHRvIGRpc3BsYXkgYWx0ZXJuYXRpbmcgY2hhcmFjdGVycyBvbiB1bnVzZWQgc3F1YXJlc1xyXG4gIC8vIG5lZWQgYyB0byByZXByZXNlbnQgd2hpY2ggdGlsZSBpcyBvbiB0aGUgc3F1YXJlLCBpZiBhbnlcclxuICAvLyBuZWVkIG9uQ2xpY2sgdG8gaGFuZGxlIHNxdWFyZSBjbGljayBhdCBhIGhpZ2hlciBsZXZlbFxyXG4gIGNvbnN0IHVzZWRieWNsYXNzID1cclxuICAgIHByb3BzLnNxdWFyZXVzZWRieSA9PT0gXCJQXCJcclxuICAgICAgPyBcInBiU3F1YXJlVXNlZEJ5UHJpc29uZXJzXCJcclxuICAgICAgOiBcInBiU3F1YXJlVXNlZEJ5R3VhcmRzXCI7XHJcbiAgY29uc3QgdGRjbGFzcyA9XHJcbiAgICBwcm9wcy5jICE9PSBcIi5cIlxyXG4gICAgICA/IHVzZWRieWNsYXNzXHJcbiAgICAgIDogcHJvcHMucmkgPT09IDcgJiYgcHJvcHMuY2kgPT09IDdcclxuICAgICAgPyBcInBiU3F1YXJlQ2VudGVyU3F1YXJlXCJcclxuICAgICAgOiAocHJvcHMucmkgPT09IDAgfHwgcHJvcHMucmkgPT09IDcgfHwgcHJvcHMucmkgPT09IDE0KSAmJlxyXG4gICAgICAgIChwcm9wcy5jaSA9PT0gMCB8fCBwcm9wcy5jaSA9PT0gNyB8fCBwcm9wcy5jaSA9PT0gMTQpXHJcbiAgICAgID8gXCJwYlNxdWFyZUVzY2FwZUhhdGNoXCJcclxuICAgICAgOiBwcm9wcy5yaSAlIDIgPT09IHByb3BzLmNpICUgMlxyXG4gICAgICA/IFwicGJTcXVhcmVcIlxyXG4gICAgICA6IFwicGJTcXVhcmUyXCI7XHJcbiAgY29uc3QgdGR2YWx1ZSA9XHJcbiAgICBwcm9wcy5jICE9PSBcIi5cIlxyXG4gICAgICA/IHByb3BzLmNcclxuICAgICAgOiB0ZGNsYXNzID09PSBcInBiU3F1YXJlQ2VudGVyU3F1YXJlXCJcclxuICAgICAgPyBcIuKcsFwiXHJcbiAgICAgIDogdGRjbGFzcyA9PT0gXCJwYlNxdWFyZUVzY2FwZUhhdGNoXCJcclxuICAgICAgPyBcIvCfkqtcIlxyXG4gICAgICA6IHByb3BzLnJpICUgMiA9PT0gcHJvcHMuY2kgJSAyXHJcbiAgICAgID8gXCLimLlcIi8vXCLijpRcIlxyXG4gICAgICA6IFwi6pCVXCI7Ly9cIuKcplwiO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGRjbGFzc30gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIHt0ZHZhbHVlfVxyXG4gICAgPC9idXR0b24+XHJcbik7XHJcbn07XHJcblxyXG5jb25zdCBCb2FyZCA9ICh7IG9uQ2xpY2ssIHNxdWFyZXMsIHVzZWRieSB9KSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyU3F1YXJlID0gKHJpLCBjaSwgYywgc3F1YXJldXNlZGJ5KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dGQga2V5PXtgU3F1YXJlJHtyaX0tJHtjaX1gfT5cclxuICAgICAgICA8U3F1YXJlXHJcbiAgICAgICAgICBjPXtjfVxyXG4gICAgICAgICAgY2k9e2NpfVxyXG4gICAgICAgICAgcmk9e3JpfVxyXG4gICAgICAgICAgc3F1YXJldXNlZGJ5PXtzcXVhcmV1c2VkYnl9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKHJpLCBjaSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC90ZD5cclxuICAgICk7XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJSb3cgPSAocmkpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0ciBrZXk9e2BCb2FyZFJvdyR7cml9YH0gY2xhc3NOYW1lPVwicm93IHBiUm93XCI+XHJcbiAgICAgICAge3NxdWFyZXNbcmldLm1hcCgoYywgY2kpID0+IHJlbmRlclNxdWFyZShyaSwgY2ksIGMsIHVzZWRieVtyaV1bY2ldKSl9XHJcbiAgICAgIDwvdHI+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dGFibGUgY2xhc3NOYW1lPVwicGJCb2FyZFwiPlxyXG4gICAgICA8dGJvZHk+e3NxdWFyZXMubWFwKChyLCByaSkgPT4gcmVuZGVyUm93KHJpKSl9PC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEdhbWUgPSAoe3ByaXNvbmVyc09yR3VhcmRzLCBnYW1laWQsIHdzbXNncywgY2xpZW50LCByZW1vdmVNZXNzYWdlfSkgPT4ge1xyXG4gIGNvbnN0IFt0aWxlcywgc2V0VGlsZXNdID0gdXNlU3RhdGUoWy4uLmluaXRpYWx0aWxlc10pO1xyXG4gIGNvbnN0IFtwdGlsZXMsIHNldFB0aWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2d0aWxlcywgc2V0R3RpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc3F1YXJlcywgc2V0U3F1YXJlc10gPSB1c2VTdGF0ZShBcnJheSgxNSkuZmlsbChBcnJheSgxNSkuZmlsbChcIi5cIikpKTtcclxuICBjb25zdCBbdXNlZGJ5LCBzZXRVc2VkYnldID0gdXNlU3RhdGUoQXJyYXkoMTUpLmZpbGwoQXJyYXkoMTUpLmZpbGwoXCJcIikpKTtcclxuICBjb25zdCBbc2VsZWN0aW9uLCBzZXRTZWxlY3Rpb25dID0gdXNlU3RhdGUoLTEpO1xyXG4gIGNvbnN0IFt3aG9zZXR1cm4sIHNldFdob3NldHVybl0gPSB1c2VTdGF0ZShcIlBcIik7XHJcbiAgY29uc3QgW2N1cnJlbnRjb29yZHMsIHNldEN1cnJlbnRjb29yZHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtyZXNjdWVzLCBzZXRSZXNjdWVzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzbmFwc2hvdCwgc2V0U25hcHNob3RdID0gdXNlU3RhdGUoe1xyXG4gICAgc3F1YXJlczogWy4uLnNxdWFyZXNdLFxyXG4gICAgdXNlZGJ5OiBbLi4udXNlZGJ5XSxcclxuICAgIHB0aWxlczogWy4uLnB0aWxlc10sXHJcbiAgICBndGlsZXM6IFsuLi5ndGlsZXNdLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIikge1xyXG4gICAgICBsZXQgdGVtcFBUaWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgICBsZXQgdGVtcEdUaWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgICBsZXQgdGVtcFRpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgICAgd2hpbGUgKHRlbXBQVGlsZXMubGVuZ3RoIDwgNykge1xyXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVtcFRpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgdGVtcFBUaWxlcy5wdXNoKHRlbXBUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgdGVtcFRpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgICByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVtcFRpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgdGVtcEdUaWxlcy5wdXNoKHRlbXBUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgdGVtcFRpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgfVxyXG4gICAgICB0ZW1wUFRpbGVzLnNvcnQoKTtcclxuICAgICAgdGVtcEdUaWxlcy5zb3J0KCk7XHJcbiAgICAgIHNldEd0aWxlcyh0ZW1wR1RpbGVzKTtcclxuICAgICAgc2V0UHRpbGVzKHRlbXBQVGlsZXMpO1xyXG4gICAgICBzZXRUaWxlcyh0ZW1wVGlsZXMpO1xyXG4gICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgc3F1YXJlczogWy4uLnNxdWFyZXNdLFxyXG4gICAgICAgIHVzZWRieTogWy4uLnVzZWRieV0sXHJcbiAgICAgICAgcHRpbGVzOiBbLi4udGVtcFBUaWxlc10sXHJcbiAgICAgICAgZ3RpbGVzOiBbLi4udGVtcEdUaWxlc10gICAgXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VuZGluZyBnZ2RcIilcclxuICAgICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgICBmdW5jOiBcImdnZFwiIC8vIGdldCBnYW1lIGRhdGFcclxuICAgICAgICB9KSk7XHJcbiAgICAgIH1cclxuICAgICAgY2F0Y2gge31cclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBtc2cgPSB3c21zZ3NbMF07XHJcbiAgICBpZiAobXNnKSBwcm9jZXNzTWVzc2FnZShtc2cpO1xyXG4gICAgICAgIFxyXG4gIH0sW3dzbXNnc10pXHJcblxyXG4gIGZ1bmN0aW9uIHByb2Nlc3NNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgIGxldCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZSk7IC8vIHdhcyBtZXNzYWdlLmRhdGFcclxuICAgIGlmIChtZXNzYWdlRGF0YS5nYW1laWQgPT09IGdhbWVpZCAmJiBtZXNzYWdlRGF0YS50eXBlID09PSBcInBiXCIpIHsgLy8gVGhpcyBpbnN0YW5jZSBvZiBhIHByaXNvbiBicmVhayBnYW1lXHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInJlcXVlc3RnYW1lZGF0YVwiICYmIG1lc3NhZ2VEYXRhLnJlcXVlc3RvciAhPT0gcHJpc29uZXJzT3JHdWFyZHMpIHsgLy8gT3Bwb25lbnQgcmVxdWVzdGVkIGdhbWUgaW5mb1xyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICAgIGZ1bmM6IFwicHJvdmlkZWdhbWVkYXRhXCIsIC8vIHByb3ZpZGUgZ2FtZSBkYXRhXHJcbiAgICAgICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsIC8vIHdobyBzZW50IHRoZSBkYXRhXHJcbiAgICAgICAgICAgIHRpbGVzOiB0aWxlcyxcclxuICAgICAgICAgICAgc3F1YXJlczogc3F1YXJlcyxcclxuICAgICAgICAgICAgcHRpbGVzOiBwdGlsZXMsXHJcbiAgICAgICAgICAgIGd0aWxlczogZ3RpbGVzLFxyXG4gICAgICAgICAgICB1c2VkYnk6IHVzZWRieSxcclxuICAgICAgICAgICAgd2hvc2V0dXJuOiB3aG9zZXR1cm4sXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbjogc2VsZWN0aW9uLFxyXG4gICAgICAgICAgICBjdXJyZW50Y29vcmRzOiBjdXJyZW50Y29vcmRzLFxyXG4gICAgICAgICAgICBzbmFwc2hvdDogc25hcHNob3QsXHJcbiAgICAgICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXNcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJwcm92aWRlZ2FtZWRhdGFcIiAmJiBtZXNzYWdlRGF0YS5zZW5kZXIgIT09IHByaXNvbmVyc09yR3VhcmRzKSB7IC8vIG9wcG9uZW50IHByb3ZpZGVkIGdhbWUgZGF0YVxyXG4gICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgIHNldFB0aWxlcyhtZXNzYWdlRGF0YS5wdGlsZXMpO1xyXG4gICAgICAgIHNldEd0aWxlcyhtZXNzYWdlRGF0YS5ndGlsZXMpO1xyXG4gICAgICAgIHNldFVzZWRieShtZXNzYWdlRGF0YS51c2VkYnkpO1xyXG4gICAgICAgIHNldFdob3NldHVybihtZXNzYWdlRGF0YS53aG9zZXR1cm4pO1xyXG4gICAgICAgIHNldFNlbGVjdGlvbihtZXNzYWdlRGF0YS5zZWxlY3Rpb24pO1xyXG4gICAgICAgIHNldEN1cnJlbnRjb29yZHMobWVzc2FnZURhdGEuY3VycmVudGNvb3Jkcyk7XHJcbiAgICAgICAgc2V0U25hcHNob3QobWVzc2FnZURhdGEuc25hcHNob3QpO1xyXG4gICAgICAgIHNldFJlc2N1ZXMobWVzc2FnZURhdGEucmVzY3Vlcyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gd2hlbiBndWFyZHMgam9pbiBnYW1lIHRoZXkgc2VuZCBnZ2QsIGFuZCBwcmlzb25lciBwaWNrcyBpdCB1cCBhbmQgc2VuZHMgc2dkLCB0aGVuIGd1YXJkcyBwaWNrIHRoYXQgdXAgYW5kIHRha2UgdGhlIGRhdGFcclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiZ2dkXCIgJiYgcHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiKSB7IC8vIGdldCBnYW1lIGRhdGEgKHNlbnQgYnkgZ3VhcmRzLCBwcmlzb25lcnMgcmVzcG9uZCBoZXJlKVxyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICAgIGZ1bmM6IFwic2dkXCIsIC8vIHNlbmQgZ2FtZSBkYXRhXHJcbiAgICAgICAgICAgIHRpbGVzOiB0aWxlcyxcclxuICAgICAgICAgICAgc3F1YXJlczogc3F1YXJlcyxcclxuICAgICAgICAgICAgcHRpbGVzOiBwdGlsZXMsXHJcbiAgICAgICAgICAgIGd0aWxlczogZ3RpbGVzLFxyXG4gICAgICAgICAgICB1c2VkYnk6IHVzZWRieSxcclxuICAgICAgICAgICAgd2hvc2V0dXJuOiB3aG9zZXR1cm4sXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbjogc2VsZWN0aW9uLFxyXG4gICAgICAgICAgICBjdXJyZW50Y29vcmRzOiBjdXJyZW50Y29vcmRzLFxyXG4gICAgICAgICAgICBzbmFwc2hvdDogc25hcHNob3QsXHJcbiAgICAgICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXMgLy8gbWF5IGhhdmUgcmVzY3VlZCBhbm90aGVyIHByaXNvbmVyXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwic2dkXCIgJiYgcHJpc29uZXJzT3JHdWFyZHMgPT09IFwiR1wiKSB7IC8vIHNlbmQgZ2FtZSBkYXRhIChwcmlzb25lcnMgc2VudCBpdCwgZ3VhcmRzIG5vdyBnZXQgaXQpXHJcbiAgICAgICAgc2V0VGlsZXMobWVzc2FnZURhdGEudGlsZXMpO1xyXG4gICAgICAgIHNldFNxdWFyZXMobWVzc2FnZURhdGEuc3F1YXJlcyk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG1lc3NhZ2VEYXRhLnB0aWxlcyk7XHJcbiAgICAgICAgc2V0R3RpbGVzKG1lc3NhZ2VEYXRhLmd0aWxlcyk7XHJcbiAgICAgICAgc2V0VXNlZGJ5KG1lc3NhZ2VEYXRhLnVzZWRieSk7XHJcbiAgICAgICAgc2V0V2hvc2V0dXJuKG1lc3NhZ2VEYXRhLndob3NldHVybik7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKG1lc3NhZ2VEYXRhLnNlbGVjdGlvbik7XHJcbiAgICAgICAgc2V0Q3VycmVudGNvb3JkcyhtZXNzYWdlRGF0YS5jdXJyZW50Y29vcmRzKTtcclxuICAgICAgICBzZXRTbmFwc2hvdChtZXNzYWdlRGF0YS5zbmFwc2hvdCk7XHJcbiAgICAgICAgc2V0UmVzY3VlcyhtZXNzYWdlRGF0YS5yZXNjdWVzKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJlcHRcIikgeyAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICBzZXRXaG9zZXR1cm4oXCJHXCIpO1xyXG4gICAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICAgICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICAgICAgc2V0U3F1YXJlcyhtZXNzYWdlRGF0YS5zcXVhcmVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobWVzc2FnZURhdGEudXNlZGJ5KTtcclxuICAgICAgICBzZXRQdGlsZXMobWVzc2FnZURhdGEucHRpbGVzKTtcclxuICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgc2V0UmVzY3VlcyhtZXNzYWdlRGF0YS5yZXNjdWVzKTtcclxuICAgICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgICBzcXVhcmVzOiBbLi4ubWVzc2FnZURhdGEuc3F1YXJlc10sXHJcbiAgICAgICAgICB1c2VkYnk6IFsuLi5tZXNzYWdlRGF0YS51c2VkYnldLFxyXG4gICAgICAgICAgcHRpbGVzOiBbLi4ubWVzc2FnZURhdGEucHRpbGVzXSxcclxuICAgICAgICAgIGd0aWxlczogWy4uLmd0aWxlc10sXHJcbiAgICAgICAgfSk7ICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImVndFwiKSB7IC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgIHNldFdob3NldHVybihcIlBcIik7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgIHNldFVzZWRieShtZXNzYWdlRGF0YS51c2VkYnkpO1xyXG4gICAgICAgIHNldEd0aWxlcyhtZXNzYWdlRGF0YS5ndGlsZXMpO1xyXG4gICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgICBzcXVhcmVzOiBbLi4ubWVzc2FnZURhdGEuc3F1YXJlc10sXHJcbiAgICAgICAgICB1c2VkYnk6IFsuLi5tZXNzYWdlRGF0YS51c2VkYnldLFxyXG4gICAgICAgICAgcHRpbGVzOiBbLi4ucHRpbGVzXSxcclxuICAgICAgICAgIGd0aWxlczogWy4uLm1lc3NhZ2VEYXRhLmd0aWxlc10sXHJcbiAgICAgICAgfSk7ICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVNZXNzYWdlKG1lc3NhZ2UpO1xyXG4gIH1cclxuICBcclxuICBjb25zdCBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrID0gKHJpLCBjaSkgPT4ge1xyXG4gICAgbGV0IG5ld1NxdWFyZXMgPSBbLi4uc3F1YXJlc107XHJcbiAgICBsZXQgbmV3VXNlZGJ5ID0gWy4uLnVzZWRieV07XHJcbiAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICBsZXQgbmV3R3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICBsZXQgbmV3Um93ID0gWy4uLnNxdWFyZXNbcmldXTtcclxuICAgIGxldCBzcXVhcmV2YWx1ZSA9IHNxdWFyZXNbcmldW2NpXTtcclxuICAgIGxldCBuZXdDdXJyZW50Y29vcmRzID0gWy4uLmN1cnJlbnRjb29yZHNdO1xyXG5cclxuICAgIGxldCBjb29yZCA9IFN0cmluZyhyaSkgKyBcIi1cIiArIFN0cmluZyhjaSk7XHJcbiAgICBsZXQgY2NpID0gY3VycmVudGNvb3Jkcy5pbmRleE9mKGNvb3JkKTtcclxuICAgIGlmIChzZWxlY3Rpb24gPiAtMSAmJiBzcXVhcmV2YWx1ZSA9PT0gXCIuXCIpIHsgLy8gdGlsZSBpcyBzZWxlY3RlZCBmcm9tIHJhY2sgYW5kIGNsaWNrZWQgc3F1YXJlIGlzIG5vdCB1c2VkIHlldFxyXG4gICAgICBuZXdSb3dbY2ldID1cclxuICAgICAgICB3aG9zZXR1cm4gPT09IFwiUFwiID8gbmV3UHRpbGVzW3NlbGVjdGlvbl0gOiBuZXdHdGlsZXNbc2VsZWN0aW9uXTtcclxuICAgICAgbmV3U3F1YXJlc1tyaV0gPSBbLi4ubmV3Um93XTtcclxuICAgICAgd2hvc2V0dXJuID09PSBcIlBcIlxyXG4gICAgICAgID8gbmV3UHRpbGVzLnNwbGljZShzZWxlY3Rpb24sIDEpXHJcbiAgICAgICAgOiBuZXdHdGlsZXMuc3BsaWNlKHNlbGVjdGlvbiwgMSk7XHJcbiAgICAgIGxldCBuZXdVc2VkYnlSb3cgPSBbLi4ubmV3VXNlZGJ5W3JpXV07XHJcbiAgICAgIG5ld1VzZWRieVJvd1tjaV0gPSB3aG9zZXR1cm47XHJcbiAgICAgIG5ld1VzZWRieVtyaV0gPSBbLi4ubmV3VXNlZGJ5Um93XTtcclxuICAgICAgbGV0IG5ld1NlbGVjdGlvbiA9IHNlbGVjdGlvbjtcclxuICAgICAgaWYgKHdob3NldHVybiA9PT0gXCJQXCIgJiYgbmV3U2VsZWN0aW9uID09PSBuZXdQdGlsZXMubGVuZ3RoKSB7IFxyXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbiAtIDFcclxuICAgICAgfVxyXG4gICAgICBpZiAod2hvc2V0dXJuID09PSBcIkdcIiAmJiBuZXdTZWxlY3Rpb24gPT09IG5ld0d0aWxlcy5sZW5ndGgpIHsgXHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3U2VsZWN0aW9uIC0gMVxyXG4gICAgICB9XHJcbiAgICAgIHNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24pO1xyXG4gICAgICBzZXRTcXVhcmVzKG5ld1NxdWFyZXMpO1xyXG4gICAgICBzZXRVc2VkYnkobmV3VXNlZGJ5KTtcclxuICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKFsuLi5jdXJyZW50Y29vcmRzLCBjb29yZF0pO1xyXG4gICAgfSBlbHNlIGlmIChjY2kgPiAtMSkgeyAvLyBjbGlja2VkIHNxdWFyZSBoYXMgYSB0aWxlIG9uIGl0IGZyb20gdGhlIGN1cnJlbnQgbW92ZSBpbiBwcm9ncmVzc1xyXG4gICAgICB3aG9zZXR1cm4gPT09IFwiUFwiXHJcbiAgICAgICAgPyBuZXdQdGlsZXMucHVzaChzcXVhcmV2YWx1ZSlcclxuICAgICAgICA6IG5ld0d0aWxlcy5wdXNoKHNxdWFyZXZhbHVlKTtcclxuICAgICAgbGV0IG5ld1JvdyA9IFsuLi5uZXdTcXVhcmVzW3JpXV07XHJcbiAgICAgIG5ld1Jvd1tjaV0gPSBcIi5cIjtcclxuICAgICAgbmV3U3F1YXJlc1tyaV0gPSBbLi4ubmV3Um93XTtcclxuICAgICAgbGV0IG5ld1VzZWRieVJvdyA9IFsuLi5uZXdVc2VkYnlbcmldXTtcclxuICAgICAgbmV3VXNlZGJ5Um93W2NpXSA9IFwiXCI7XHJcbiAgICAgIG5ld1VzZWRieVtyaV0gPSBbLi4ubmV3VXNlZGJ5Um93XTtcclxuICAgICAgc2V0U2VsZWN0aW9uKFxyXG4gICAgICAgIHdob3NldHVybiA9PT0gXCJQXCIgPyBuZXdQdGlsZXMubGVuZ3RoIC0gMSA6IG5ld0d0aWxlcy5sZW5ndGggLSAxXHJcbiAgICAgICk7XHJcbiAgICAgIG5ld0N1cnJlbnRjb29yZHMuc3BsaWNlKGNjaSwgMSk7XHJcblxyXG4gICAgICBzZXRTcXVhcmVzKG5ld1NxdWFyZXMpO1xyXG4gICAgICBzZXRVc2VkYnkobmV3VXNlZGJ5KTtcclxuICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKG5ld0N1cnJlbnRjb29yZHMpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByaXNvbmVyVGlsZUNsaWNrID0gKHRpbGVpbmRleCkgPT4ge1xyXG4gICAgLy8gdGhlIGluZGV4IG9mIHB0aWxlc1xyXG4gICAgaWYgKHdob3NldHVybiA9PT0gXCJQXCIpIHtcclxuICAgICAgc2V0U2VsZWN0aW9uKHRpbGVpbmRleCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIkl0IGlzIG5vdCB5b3VyIHR1cm5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlR3VhcmRUaWxlQ2xpY2sgPSAodGlsZWluZGV4KSA9PiB7XHJcbiAgICAvLyB0aGUgaW5kZXggb2YgZ3RpbGVzXHJcbiAgICBpZiAod2hvc2V0dXJuID09PSBcIkdcIikge1xyXG4gICAgICBzZXRTZWxlY3Rpb24odGlsZWluZGV4KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwiSXQgaXMgbm90IHlvdXIgdHVyblwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBlbmRQcmlzb25lcnNUdXJuID0gKCkgPT4ge1xyXG4gICAgaWYgKCFpc1BsYXlWYWxpZCgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBuZXdSZXNjdWVzID0gcmVzY3VlcztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudGNvb3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoZXNjYXBlaGF0Y2hlcy5pbmRleE9mKGN1cnJlbnRjb29yZHNbaV0pID4gLTEpIHtcclxuICAgICAgICBuZXdSZXNjdWVzID0gbmV3UmVzY3VlcyArIDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICB3aGlsZSAobmV3UHRpbGVzLmxlbmd0aCA8IDcgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgIG5ld1B0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgfVxyXG4gICAgbmV3UHRpbGVzLnNvcnQoKTtcclxuICAgIHNldFdob3NldHVybihcIkdcIik7XHJcbiAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgIHNldFJlc2N1ZXMobmV3UmVzY3Vlcyk7XHJcbiAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgIHNxdWFyZXM6IFsuLi5zcXVhcmVzXSxcclxuICAgICAgdXNlZGJ5OiBbLi4udXNlZGJ5XSxcclxuICAgICAgcHRpbGVzOiBbLi4ubmV3UHRpbGVzXSxcclxuICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlcHRcIiwgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgc3F1YXJlczogc3F1YXJlcywgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICB1c2VkYnk6IHVzZWRieSwgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICBwdGlsZXM6IG5ld1B0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgcHJpc29uZXJzIHJhY2tcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICByZXNjdWVzOiBuZXdSZXNjdWVzIC8vIG1heSBoYXZlIHJlc2N1ZWQgYW5vdGhlciBwcmlzb25lclxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBlbmRHdWFyZHNUdXJuID0gKCkgPT4ge1xyXG4gICAgaWYgKCFpc1BsYXlWYWxpZCgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICB3aGlsZSAobmV3R3RpbGVzLmxlbmd0aCA8IDcgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgIG5ld0d0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgfVxyXG4gICAgbmV3R3RpbGVzLnNvcnQoKTtcclxuICAgIGxldCBzbmFwc3F1YXJlcyA9IFsuLi5zcXVhcmVzXTtcclxuICAgIGxldCBzbmFwdXNlZGJ5ID0gWy4uLnVzZWRieV07XHJcbiAgICBsZXQgc25hcHB0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgbGV0IHNuYXBndGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgIHNldFdob3NldHVybihcIlBcIik7XHJcbiAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgc3F1YXJlczogc25hcHNxdWFyZXMsXHJcbiAgICAgIHVzZWRieTogc25hcHVzZWRieSxcclxuICAgICAgcHRpbGVzOiBzbmFwcHRpbGVzLFxyXG4gICAgICBndGlsZXM6IHNuYXBndGlsZXMsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgdXNlZGJ5OiB1c2VkYnksIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgZ3RpbGVzOiBuZXdHdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIGd1YXJkcyByYWNrXHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgY29uc3Qgc3dhcFByaXNvbmVyc1RpbGVzID0gKCkgPT4ge1xyXG4gICAgaWYgKHRpbGVzLmxlbmd0aCA8IDcpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiTmVlZCA3IGluIHRoZSBiYWcgdG8gZXhjaGFuZ2VcIilcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IG5ld1B0aWxlcyA9IFtdO1xyXG4gICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgIHdoaWxlIChuZXdQdGlsZXMubGVuZ3RoIDwgNyAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgbmV3UHRpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICB9XHJcbiAgICBuZXdQdGlsZXMuc29ydCgpO1xyXG4gICAgbmV3VGlsZXMgPSBbLi4ubmV3VGlsZXMsIC4uLnNuYXBzaG90LnB0aWxlc107XHJcbiAgICBuZXdUaWxlcy5zb3J0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkV4Y2hhbmdlIHB0aWxlc1wiKVxyXG4gICAgY29uc29sZS5sb2coc25hcHNob3QucHRpbGVzKVxyXG4gICAgY29uc29sZS5sb2cocHRpbGVzKVxyXG4gICAgY29uc29sZS5sb2cobmV3UHRpbGVzKVxyXG4gICAgY29uc29sZS5sb2codGlsZXMpXHJcbiAgICBjb25zb2xlLmxvZyhuZXdUaWxlcylcclxuICAgIHNldFNxdWFyZXMoWy4uLnNuYXBzaG90LnNxdWFyZXNdKTtcclxuICAgIHNldFVzZWRieShbLi4uc25hcHNob3QudXNlZGJ5XSk7XHJcbiAgICBzZXRXaG9zZXR1cm4oXCJHXCIpO1xyXG4gICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgIHNxdWFyZXM6IFsuLi5zbmFwc2hvdC5zcXVhcmVzXSxcclxuICAgICAgdXNlZGJ5OiBbLi4uc25hcHNob3QudXNlZGJ5XSxcclxuICAgICAgcHRpbGVzOiBbLi4ubmV3UHRpbGVzXSxcclxuICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlcHRcIiwgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgc3F1YXJlczogc25hcHNob3Quc3F1YXJlcywgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgcHRpbGVzOiBuZXdQdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgcmVzY3VlczogcmVzY3VlcyAvLyBubyByZXNjdWVzIG9uIGFuIGV4Y2hhbmdlXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgY29uc3Qgc3dhcEd1YXJkc1RpbGVzID0gKCkgPT4ge1xyXG4gICAgaWYgKHRpbGVzLmxlbmd0aCA8IDcpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiTmVlZCA3IGluIHRoZSBiYWcgdG8gZXhjaGFuZ2VcIilcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IG5ld0d0aWxlcyA9IFtdO1xyXG4gICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgIHdoaWxlIChuZXdHdGlsZXMubGVuZ3RoIDwgNyAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgbmV3R3RpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICB9XHJcbiAgICBuZXdHdGlsZXMuc29ydCgpO1xyXG4gICAgbmV3VGlsZXMgPSBbLi4ubmV3VGlsZXMsIC4uLnNuYXBzaG90Lmd0aWxlc107XHJcbiAgICBuZXdUaWxlcy5zb3J0KCk7XHJcbiAgICBzZXRTcXVhcmVzKFsuLi5zbmFwc2hvdC5zcXVhcmVzXSk7XHJcbiAgICBzZXRVc2VkYnkoWy4uLnNuYXBzaG90LnVzZWRieV0pO1xyXG4gICAgc2V0V2hvc2V0dXJuKFwiUFwiKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICBzcXVhcmVzOiBbLi4uc25hcHNob3Quc3F1YXJlc10sXHJcbiAgICAgIHVzZWRieTogWy4uLnNuYXBzaG90LnVzZWRieV0sXHJcbiAgICAgIHB0aWxlczogWy4uLnB0aWxlc10sXHJcbiAgICAgIGd0aWxlczogWy4uLm5ld0d0aWxlc10sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICB1c2VkYnk6IHNuYXBzaG90LnVzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgIGd0aWxlczogbmV3R3RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcyAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzUGxheVZhbGlkKCkge1xyXG4gICAgaWYgKHNxdWFyZXNbN11bN10gPT09IFwiLlwiKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIkZpcnN0IHBsYXkgbXVzdCBoaXQgY2VudGVyIHNxdWFyZVwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IGxvd3JvdyA9IDE1O1xyXG4gICAgbGV0IGhpZ2hyb3cgPSAtMTtcclxuICAgIGxldCBsb3djb2wgPSAxNTtcclxuICAgIGxldCBoaWdoY29sID0gLTE7XHJcbiAgICBmb3IgKHZhciByPTA7IHIgPCAxNTsgKytyKSB7XHJcbiAgICAgIGZvciAodmFyIGM9MDsgYyA8IDE1OyArK2MpIHtcclxuICAgICAgICBpZiAoc3F1YXJlc1tyXVtjXSAhPT0gXCIuXCIpIHtcclxuICAgICAgICAgIGlmICghKHIgPiAwICYmIHNxdWFyZXNbci0xXVtjXSAhPT0gXCIuXCIpICYmXHJcbiAgICAgICAgICAgIShjID4gMCAmJiBzcXVhcmVzW3JdW2MtMV0gIT09IFwiLlwiKSAmJlxyXG4gICAgICAgICAgICEociA8IDE0ICYmIHNxdWFyZXNbcisxXVtjXSAhPT0gXCIuXCIpICYmXHJcbiAgICAgICAgICAgIShjIDwgMTQgJiYgc3F1YXJlc1tyXVtjKzFdICE9PSBcIi5cIilcclxuICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiRWFjaCBwbGF5ZWQgdGlsZSBtdXN0IGJlIHBhcnQgb2YgYSB3b3JkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIGlmIChzbmFwc2hvdC5zcXVhcmVzW3JdW2NdID09PSBcIi5cIikge1xyXG4gICAgICAgICAgICAgLy8gVGhpcyBzcXVhcmUgd2FzIHBsYXllZCBvbiB0aGlzIHR1cm5cclxuICAgICAgICAgICAgIGlmIChyIDwgbG93cm93KSB7IGxvd3JvdyA9IHI7fVxyXG4gICAgICAgICAgICAgaWYgKHIgPiBoaWdocm93KSB7IGhpZ2hyb3cgPSByO31cclxuICAgICAgICAgICAgIGlmIChjIDwgbG93Y29sKSB7IGxvd2NvbCA9IGM7fVxyXG4gICAgICAgICAgICAgaWYgKGMgPiBoaWdoY29sKSB7IGhpZ2hjb2wgPSBjO31cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChsb3dyb3cgPT09IDE1KSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIllvdSBkaWRuJ3QgcGxheSBhbnkgdGlsZXNcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChsb3dyb3cgIT09IGhpZ2hyb3cgJiYgbG93Y29sICE9PSBoaWdoY29sKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIlRpbGVzIHBsYXllZCBtdXN0IGJlIGluIGEgc3RyYWlnaHQgbGluZVwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IHBsYXl0aHJ1ID0gZmFsc2U7XHJcbiAgICBsZXQgaG9va21hZGUgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIHIgPSBsb3dyb3c7IHIgPD0gaGlnaHJvdzsgKytyKSB7XHJcbiAgICAgIGZvciAodmFyIGMgPSBsb3djb2w7IGMgPD0gaGlnaGNvbDsgKytjKSB7XHJcbiAgICAgICAgaWYgKHNxdWFyZXNbcl1bY10gPT09IFwiLlwiKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJUaGVyZSBpcyBhIGdhcCBpbiB5b3VyIHdvcmRcIik7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzbmFwc2hvdC5zcXVhcmVzW3JdW2NdICE9PSBcIi5cIikge1xyXG4gICAgICAgICAgcGxheXRocnUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIHIgPiAwICYmIHNxdWFyZXNbci0xXVtjXSAhPT0gXCIuXCIpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiByIDwgMTQgJiYgc3F1YXJlc1tyKzFdW2NdICE9PSBcIi5cIikgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGMgPiAwICYmIHNxdWFyZXNbcl1bYy0xXSAhPT0gXCIuXCIpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBjIDwgMTQgJiYgc3F1YXJlc1tyXVtjKzFdICE9PSBcIi5cIikgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gQ2hlY2sgcGxheSB0byBvciBmcm9tIGEgdGlsZSAocGxheSB0aHJvdWdoIGJ1dCBub3QgZWl0aGVyIHNpZGUpXHJcbiAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIGxvd2NvbCA+IDAgJiYgc25hcHNob3Quc3F1YXJlc1tsb3dyb3ddW2xvd2NvbC0xXSAhPT0gXCIuXCIpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIGhpZ2hjb2wgPCAxNCAmJiBzbmFwc2hvdC5zcXVhcmVzW2xvd3Jvd11baGlnaGNvbCsxXSAhPT0gXCIuXCIpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGxvd3JvdyA+IDAgJiYgc25hcHNob3Quc3F1YXJlc1tsb3dyb3ctMV1bbG93Y29sXSAhPT0gXCIuXCIpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGhpZ2hyb3cgPCAxNCAmJiBzbmFwc2hvdC5zcXVhcmVzW2hpZ2hyb3crMV1bbG93Y29sXSAhPT0gXCIuXCIpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAoIXBsYXl0aHJ1ICYmICFob29rbWFkZSAmJiBzbmFwc2hvdC5zcXVhcmVzWzddWzddICE9PSBcIi5cIikge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJXb3JkcyBtdXN0IGJlIGNvbm5lY3RlZFwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZWNhbGxUaWxlcyA9ICgpID0+IHtcclxuICAgIHNldFNxdWFyZXMoWy4uLnNuYXBzaG90LnNxdWFyZXNdKTtcclxuICAgIHNldFVzZWRieShbLi4uc25hcHNob3QudXNlZGJ5XSk7XHJcbiAgICBzZXRQdGlsZXMoWy4uLnNuYXBzaG90LnB0aWxlc10pO1xyXG4gICAgc2V0R3RpbGVzKFsuLi5zbmFwc2hvdC5ndGlsZXNdKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwcmlzb25lclBhc3MgPSAoKSA9PiB7XHJcbiAgICByZWNhbGxUaWxlcygpOyAvLyBJbiBjYXNlIHRoZXkgcHV0IHNvbWUgdGlsZXMgb24gdGhlIGJvYXJkIGJlZm9yZSBjbGlja2luZyBQYXNzXHJcbiAgICBzZXRXaG9zZXR1cm4oXCJHXCIpO1xyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVwdFwiLCAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICBzcXVhcmVzOiBzbmFwc2hvdC5zcXVhcmVzLCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiBzcXVhcmVzXHJcbiAgICAgICAgdXNlZGJ5OiBzbmFwc2hvdC51c2VkYnksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHVzZWQgYnlcclxuICAgICAgICBwdGlsZXM6IHNuYXBzaG90LnB0aWxlcywgLy8gcHJpc29uZXJzIHJhY2sgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICB0aWxlczogdGlsZXMsIC8vIHRpbGUgcG9vbCBkaWQgbm90IGNoYW5nZVxyXG4gICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXMgLy8gbm8gcmVzY3VlcyBvbiBhIHBhc3NcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBndWFyZHNQYXNzID0gKCkgPT4ge1xyXG4gICAgcmVjYWxsVGlsZXMoKTsgLy8gSW4gY2FzZSB0aGV5IHB1dCBzb21lIHRpbGVzIG9uIHRoZSBib2FyZCBiZWZvcmUgY2xpY2tpbmcgUGFzc1xyXG4gICAgc2V0V2hvc2V0dXJuKFwiUFwiKTtcclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlZ3RcIiwgLy8gZW5kIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgc3F1YXJlczogc25hcHNob3Quc3F1YXJlcywgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgZ3RpbGVzOiBzbmFwc2hvdC5ndGlsZXMsIC8vIGd1YXJkcyByYWNrIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgdGlsZXM6IHRpbGVzIC8vIHRpbGUgcG9vbCBkaWQgbm90IGNoYW5nZVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlcXVlc3RHYW1lRGF0YSA9IChwbGF5ZXJ0eXBlKSA9PiB7XHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwicmVxdWVzdGdhbWVkYXRhXCIsIC8vIHJlcXVlc3QgZ2FtZSBkYXRhXHJcbiAgICAgICAgcmVxdWVzdG9yOiBwcmlzb25lcnNPckd1YXJkc1xyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHByaXNvbmJyZWFrXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgcGJ0aXRsZVwiPlByaXNvbiBCcmVhazwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTIgcGJob21lbGlua1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cInJlcXVlc3RHYW1lRGF0YVwiXHJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiU3luYyB3aXRoIG9wcG9uZW50XCJcclxuICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgcmVxdWVzdEdhbWVEYXRhKHByaXNvbmVyc09yR3VhcmRzKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnN5bmM8L2k+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiLi4vLi4vXCJ9PlxyXG4gICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yIHBiUHJpc29uZXJzXCI+XHJcbiAgICAgICAgICA8UHJpc29uZXJzXHJcbiAgICAgICAgICAgIHB0aWxlcz17cHRpbGVzfVxyXG4gICAgICAgICAgICB3aG9zZXR1cm49e3dob3NldHVybn1cclxuICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyh0aSkgPT4gaGFuZGxlUHJpc29uZXJUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICBvbkNsaWNrRmluaXNoVHVybj17KCkgPT4gZW5kUHJpc29uZXJzVHVybigpfVxyXG4gICAgICAgICAgICBvbkNsaWNrVGlsZVJlY2FsbD17KCkgPT4gcmVjYWxsVGlsZXMoKX1cclxuICAgICAgICAgICAgb25DbGlja1RpbGVFeGNoYW5nZT17KCkgPT4gc3dhcFByaXNvbmVyc1RpbGVzKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tQYXNzUGxheT17KCkgPT4gcHJpc29uZXJQYXNzKCl9XHJcbiAgICAgICAgICAgIHJlc2N1ZXM9e3Jlc2N1ZXN9XHJcbiAgICAgICAgICAgIHByaXNvbmVyc09yR3VhcmRzPXtwcmlzb25lcnNPckd1YXJkc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICB7cHJpc29uZXJzT3JHdWFyZHMgPT09IHdob3NldHVybiA/XHJcbiAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgc3F1YXJlcz17c3F1YXJlc31cclxuICAgICAgICAgICAgdXNlZGJ5PXt1c2VkYnl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhyaSwgY2kpID0+IGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socmksIGNpKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgc3F1YXJlcz17c3F1YXJlc31cclxuICAgICAgICAgICAgdXNlZGJ5PXt1c2VkYnl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5hbGVydChcIlRoYXQgdGlja2xlcyFcIil9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTIgcGJHdWFyZHNcIj5cclxuICAgICAgICAgIDxHdWFyZHNcclxuICAgICAgICAgICAgZ3RpbGVzPXtndGlsZXN9XHJcbiAgICAgICAgICAgIHdob3NldHVybj17d2hvc2V0dXJufVxyXG4gICAgICAgICAgICBzZWxlY3Rpb249e3NlbGVjdGlvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KHRpKSA9PiBoYW5kbGVHdWFyZFRpbGVDbGljayh0aSl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tGaW5pc2hUdXJuPXsoKSA9PiBlbmRHdWFyZHNUdXJuKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tUaWxlUmVjYWxsPXsoKSA9PiByZWNhbGxUaWxlcygpfVxyXG4gICAgICAgICAgICBvbkNsaWNrVGlsZUV4Y2hhbmdlPXsoKSA9PiBzd2FwR3VhcmRzVGlsZXMoKX1cclxuICAgICAgICAgICAgb25DbGlja1Bhc3NQbGF5PXsoKSA9PiBndWFyZHNQYXNzKCl9XHJcbiAgICAgICAgICAgIHByaXNvbmVyc09yR3VhcmRzPXtwcmlzb25lcnNPckd1YXJkc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxyXG4gICAgICAgICAgPFNob3dVbnNlZW5UaWxlcyB0aWxlcz17dGlsZXN9IG90aGVydGlsZXM9e3ByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IGd0aWxlcyA6IHB0aWxlc30vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTaG93VW5zZWVuVGlsZXMgPSAocHJvcHMpID0+IHsgLy8gdGlsZXMgPSB0aWxlcyBpbiBiYWcsIG90aGVydGlsZXMgPSB0aWxlcyBvbiBvdGhlciBwbGF5ZXJzIHJhY2tcclxuICBsZXQgdW5zZWVuVGlsZXMgPSBbLi4ucHJvcHMudGlsZXMsIC4uLnByb3BzLm90aGVydGlsZXNdO1xyXG4gIHVuc2VlblRpbGVzLnNvcnQoKTtcclxuICBpZiAodW5zZWVuVGlsZXNbMF0gPT09IFwiP1wiKSB7XHJcbiAgICAgIHVuc2VlblRpbGVzLnNwbGljZSgwLDEpXHJcbiAgICAgIHVuc2VlblRpbGVzLnB1c2goXCI/XCIpXHJcbiAgfVxyXG4gIGlmICh1bnNlZW5UaWxlc1swXSA9PT0gXCI/XCIpIHtcclxuICAgICAgdW5zZWVuVGlsZXMuc3BsaWNlKDAsMSlcclxuICAgICAgdW5zZWVuVGlsZXMucHVzaChcIj9cIilcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcG9vbFwiPlxyXG4gICAgICA8aDM+VElMRVM8L2gzPlxyXG4gICAgICB7dW5zZWVuVGlsZXMubWFwKCh0LCB0aSkgPT4gKFxyXG4gICAgICAgIDxzcGFuIGtleT17YHRpbGUke3RpfWB9PlxyXG4gICAgICAgICAge3RpID4gMCAmJiB0ICE9PSB1bnNlZW5UaWxlc1t0aSAtIDFdID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXBvb2xEaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiVGlsZXBvb2xUaWxlXCI+e3R9PC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUmFja1RpbGUgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPXtwcm9wcy50aWxlY2xhc3N9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICB7cHJvcHMudGlsZXZhbHVlfVxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBGaW5pc2hUdXJuQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJGaW5pc2hUdXJuXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+Y2hlY2s8L2k+RmluaXNoIFR1cm5cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBUaWxlUmVjYWxsQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJSZWNhbGxUaWxlc1wiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnVuZG88L2k+UmVjYWxsIFRpbGVzXHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVGlsZUV4Y2hhbmdlQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJFeGNoYW5nZVRpbGVzXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c2VudGltZW50X2Rpc3NhdGlzZmllZDwvaT5FeGNoYW5nZSBUaWxlc1xyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFBhc3NQbGF5QnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJQYXNzUGxheVwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnNlbnRpbWVudF9kaXNzYXRpc2ZpZWQ8L2k+UGFzc1xyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFByaXNvbmVycyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJlbmRlclRpbGUgPSAodGlsZWNsYXNzLCB0aWxlaW5kZXgsIHRpbGV2YWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID9cclxuICAgICAgPFJhY2tUaWxlXHJcbiAgICAgICAga2V5PXt0aWxlY2xhc3MgKyBTdHJpbmcodGlsZWluZGV4KX1cclxuICAgICAgICB0aWxlY2xhc3M9e3RpbGVjbGFzc31cclxuICAgICAgICB0aWxldmFsdWU9e3RpbGV2YWx1ZX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrKHRpbGVpbmRleCl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDpcclxuICAgICAgPFJhY2tUaWxlXHJcbiAgICAgICAga2V5PXt0aWxlY2xhc3MgKyBTdHJpbmcodGlsZWluZGV4KX1cclxuICAgICAgICB0aWxlY2xhc3M9e3RpbGVjbGFzc31cclxuICAgICAgICB0aWxldmFsdWU9e3RpbGV2YWx1ZX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cuYWxlcnQoXCJObyBwZWVraW5nIVwiKX1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRmluaXNoVHVybiA9ICgpID0+IHtcclxuICAgIHJldHVybiA8cD48RmluaXNoVHVybkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrRmluaXNoVHVybigpfSAvPjwvcD47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUmVjYWxsVGlsZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPHA+PFRpbGVSZWNhbGxCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1RpbGVSZWNhbGwoKX0gLz48L3A+O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckV4Y2hhbmdlVGlsZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPHA+PFRpbGVFeGNoYW5nZUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrVGlsZUV4Y2hhbmdlKCl9IC8+PC9wPjtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJGcmVlZFByaXNvbmVycyA9IChjb3VudCkgPT4ge1xyXG4gICAgbGV0IGR1bWIgPSBBcnJheShjb3VudCkuZmlsbChcIm5vbnNlbnNlXCIpO1xyXG4gICAgcmV0dXJuIGR1bWIubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgPHNwYW4ga2V5PXt2YWx1ZSArIFN0cmluZyhpbmRleCl9PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cIi9icmVha2ZyZWUucG5nXCJcclxuICAgICAgICAgIGFsdD1cIkknbSBmcmVlISBJJ20gZnJlZSFcIlxyXG4gICAgICAgICAgd2lkdGg9XCIxMDBcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMTAwXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICApKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHA+UFJJU09ORVJTPC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJwYlRpbGVyYWNrXCI+XHJcbiAgICAgICAge3Byb3BzLnB0aWxlcy5tYXAoKHQsIHRpKSA9PlxyXG4gICAgICAgICAgcmVuZGVyVGlsZShcclxuICAgICAgICAgICAgcHJvcHMud2hvc2V0dXJuID09PSBcIlBcIiAmJiBwcm9wcy5zZWxlY3Rpb24gPT09IHRpXHJcbiAgICAgICAgICAgICAgPyBcInBiVGlsZU9uUmFja1NlbGVjdGVkUFwiXHJcbiAgICAgICAgICAgICAgOiBcInBiVGlsZU9uUmFja1BcIixcclxuICAgICAgICAgICAgdGksXHJcbiAgICAgICAgICAgIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IHQgOiBcIipcIlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvcD5cclxuICAgICAge3Byb3BzLndob3NldHVybiA9PT0gXCJQXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gcmVuZGVyRmluaXNoVHVybigpIDogPD48Lz59XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiUFwiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IHJlbmRlclJlY2FsbFRpbGVzKCkgOiA8PjwvPn1cclxuICAgICAge3Byb3BzLndob3NldHVybiA9PT0gXCJQXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gcmVuZGVyRXhjaGFuZ2VUaWxlcygpIDogPD48Lz59XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFJlc2N1ZXMgbWFkZToge3Byb3BzLnJlc2N1ZXN9XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAge3JlbmRlckZyZWVkUHJpc29uZXJzKHByb3BzLnJlc2N1ZXMpfVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgR3VhcmRzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyVGlsZSA9ICh0aWxlY2xhc3MsIHRpbGVpbmRleCwgdGlsZXZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJHXCIgP1xyXG4gICAgICA8UmFja1RpbGVcclxuICAgICAgICBrZXk9e3RpbGVjbGFzcyArIFN0cmluZyh0aWxlaW5kZXgpfVxyXG4gICAgICAgIHRpbGVjbGFzcz17dGlsZWNsYXNzfVxyXG4gICAgICAgIHRpbGV2YWx1ZT17dGlsZXZhbHVlfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2sodGlsZWluZGV4KX1cclxuICAgICAgLz5cclxuICAgICAgOlxyXG4gICAgICA8UmFja1RpbGVcclxuICAgICAgICBrZXk9e3RpbGVjbGFzcyArIFN0cmluZyh0aWxlaW5kZXgpfVxyXG4gICAgICAgIHRpbGVjbGFzcz17dGlsZWNsYXNzfVxyXG4gICAgICAgIHRpbGV2YWx1ZT17dGlsZXZhbHVlfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5hbGVydChcIk5vIHBlZWtpbmchXCIpfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJGaW5pc2hUdXJuID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxGaW5pc2hUdXJuQnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tGaW5pc2hUdXJuKCl9IC8+O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclJlY2FsbFRpbGVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxUaWxlUmVjYWxsQnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tUaWxlUmVjYWxsKCl9IC8+O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckV4Y2hhbmdlVGlsZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPFRpbGVFeGNoYW5nZUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrVGlsZUV4Y2hhbmdlKCl9IC8+O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cD5HVUFSRFM8L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInBiVGlsZXJhY2tcIj5cclxuICAgICAgICB7cHJvcHMuZ3RpbGVzLm1hcCgodCwgdGkpID0+XHJcbiAgICAgICAgICByZW5kZXJUaWxlKFxyXG4gICAgICAgICAgICBwcm9wcy53aG9zZXR1cm4gPT09IFwiR1wiICYmIHByb3BzLnNlbGVjdGlvbiA9PT0gdGlcclxuICAgICAgICAgICAgICA/IFwicGJUaWxlT25SYWNrU2VsZWN0ZWRHXCJcclxuICAgICAgICAgICAgICA6IFwicGJUaWxlT25SYWNrR1wiLFxyXG4gICAgICAgICAgICB0aSxcclxuICAgICAgICAgICAgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiR1wiID8gdCA6IFwiKlwiXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9wPlxyXG4gICAgICB7cHJvcHMud2hvc2V0dXJuID09PSBcIkdcIiAmJiBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJHXCIgPyByZW5kZXJGaW5pc2hUdXJuKCkgOiA8PjwvPn1cclxuICAgICAge3Byb3BzLndob3NldHVybiA9PT0gXCJHXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiR1wiID8gcmVuZGVyUmVjYWxsVGlsZXMoKSA6IDw+PC8+fVxyXG4gICAgICB7cHJvcHMud2hvc2V0dXJuID09PSBcIkdcIiAmJiBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJHXCIgPyByZW5kZXJFeGNoYW5nZVRpbGVzKCkgOiA8PjwvPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=