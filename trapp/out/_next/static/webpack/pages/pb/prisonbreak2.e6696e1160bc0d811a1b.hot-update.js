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
  // need rcd to display selected direction arrow when appropriate
  const usedbyclass = props.squareusedby === "P" ? "pbSquareUsedByPrisoners" : "pbSquareUsedByGuards";
  const tdclass = props.c !== "." ? usedbyclass : props.rcd[0] === props.ri && props.rcd[1] === props.ci && props.rcd[2] === "r" ? "pbSquareRightArrow" : props.rcd[0] === props.ri && props.rcd[1] === props.ci && props.rcd[2] === "d" ? "pbSquareDownArrow" : props.ri === 7 && props.ci === 7 ? "pbSquareCenterSquare" : (props.ri === 0 || props.ri === 7 || props.ri === 14) && (props.ci === 0 || props.ci === 7 || props.ci === 14) ? "pbSquareEscapeHatch" : props.ri % 2 === props.ci % 2 ? "pbSquare" : "pbSquare2";
  const tdvalue = props.c !== "." ? props.c : tdclass === "pbSquareRightArrow" ? "➡" : tdclass === "pbSquareDownArrow" ? "⬇" : tdclass === "pbSquareCenterSquare" ? "✰" : tdclass === "pbSquareEscapeHatch" ? "💫" : props.ri % 2 === props.ci % 2 ? "☹" //"⎔"
  : "ꐕ"; //"✦";

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: tdclass,
    onClick: props.onClick,
    children: tdvalue
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 227,
    columnNumber: 5
  }, undefined);
};

_c2 = Square;

const Board = ({
  onClick,
  squares,
  usedby,
  rcd
}) => {
  const renderSquare = (ri, ci, c, squareusedby) => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Square, {
        c: c,
        ci: ci,
        ri: ri,
        squareusedby: squareusedby,
        rcd: rcd,
        onClick: () => onClick(ri, ci)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 9
      }, undefined)
    }, `Square${ri}-${ci}`, false, {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 7
    }, undefined);
  };

  const renderRow = ri => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
      className: "row pbRow",
      children: squares[ri].map((c, ci) => renderSquare(ri, ci, c, usedby[ri][ci]))
    }, `BoardRow${ri}`, false, {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 7
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
    className: "pbBoard",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
      children: squares.map((r, ri) => renderRow(ri))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 257,
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(-1); // relative to rack of player making a play

  const {
    0: whoseturn,
    1: setWhoseturn
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("P"); // game starts with prisoners play

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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([-1, -1, ""]);
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
        setRcd(-1, -1, "");
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
        setRcd(-1, -1, "");
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
  } // Calling setSelection (from handleKeyDown) then handleBoardSquareClick does not let it recognize selection with the new value
  // So I pass newSelection when I want to also set it, otherwise I pass -1 to instruct it to use current value of selection
  // Also passing newRcd


  const handleBoardSquareClick = (ri, ci, newSelection, newRcd) => {
    let newSquares = [...squares];
    let newUsedby = [...usedby];
    let newPtiles = [...ptiles];
    let newGtiles = [...gtiles];
    let newRow = [...squares[ri]];
    let squarevalue = squares[ri][ci];
    let newCurrentcoords = [...currentcoords];
    let coord = String(ri) + "-" + String(ci);
    let cci = currentcoords.indexOf(coord);

    if (newSelection === -1) {
      newSelection = selection;
      newRcd = rcd;
    }

    if (newSelection > -1 && squarevalue === ".") {
      // tile is selected from rack and clicked square is not used yet
      newRow[ci] = whoseturn === "P" ? newPtiles[newSelection] : newGtiles[newSelection];
      newSquares[ri] = [...newRow];
      whoseturn === "P" ? newPtiles.splice(newSelection, 1) : newGtiles.splice(newSelection, 1);
      let newUsedbyRow = [...newUsedby[ri]];
      newUsedbyRow[ci] = whoseturn;
      newUsedby[ri] = [...newUsedbyRow];

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
      setRcd(newRcd); // key down handler figured it out

      return;
    }

    if (cci > -1) {
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
      setRcd(-1, -1, ""); // make playre click again to set direction

      return;
    } // They didn't click a square to place a selected tile there
    // They didn't click a square to remove an existing tile


    if (squares[ri][ci] === ".") {
      // There is nothing on the square so they are picking where to place the next tile via keyboard
      let newDirection = rcd[0] !== ri || rcd[1] !== ci ? "r" : //click new square, start with "r"
      rcd[2] === "r" ? "d" : //click same square that was "r", change to "d"
      rcd[2] === "d" ? "" : //click same square that was "d", change to ""
      "r"; // click same square that was "", change to "r"

      newRcd = [ri, ci, newDirection];
      setRcd(newRcd);
      return;
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

  const handleKeyDown = event => {
    event.preventDefault();

    if (prisonersOrGuards !== whoseturn) {
      return;
    }

    if (event.key === "Enter") {
      whoseturn === "P" ? endPrisonersTurn() : endGuardsTurn();
      return;
    }

    let lettertest = /^[A-Za-z\?]$/; // single letter or question mark key pressed

    if (event.key.match(lettertest)) {
      let letter = event.key.toUpperCase();
      let rack = whoseturn === "P" ? ptiles : gtiles;
      let newSelection = rack.indexOf(letter);

      if (newSelection > -1) {
        // Pressed letter is on the rack
        let row = rcd[0];
        let col = rcd[1];
        let dir = rcd[2];

        if (row > -1 && col > -1 && dir !== "") {
          // row, col, dir are set to accept keystroke
          // Need to figure out next sqaure to auto-place a tile
          let newRcd = rcd;

          if (dir === "r" && col < 14) {
            // playing rightwards and there may be room
            let newc = -1;

            for (var c = col + 1; c < 15 && newc === -1; c++) {
              if (squares[row][c] === ".") {
                newc = c;
              }
            }

            if (newc === -1) {
              newRcd = [-1, -1, ""];
            } else {
              newRcd = [row, newc, "r"];
            }

            handleBoardSquareClick(row, col, newSelection, newRcd);
            return;
          }

          if (dir === "d" && row < 14) {
            // playing downwards and there amay be room
            let newr = -1;

            for (var r = row + 1; r < 15 && newr === -1; r++) {
              if (squares[r][col] === ".") {
                newr = r;
              }
            }

            if (newr === -1) {
              newRcd = [-1, -1, ""];
            } else {
              newRcd = [newr, col, "d"];
            }

            handleBoardSquareClick(row, col, newSelection, newRcd);
            return;
          }
        }
      }
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container-fluid prisonbreak",
    onKeyDownCapture: handleKeyDown,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-10 pbtitle",
        children: "Prison Break"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 878,
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
            lineNumber: 886,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 880,
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
              lineNumber: 889,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 889,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 888,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 879,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 877,
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
          lineNumber: 895,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 894,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-6",
        align: "center",
        children: prisonersOrGuards === whoseturn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {
          squares: squares,
          usedby: usedby,
          rcd: rcd,
          onClick: (ri, ci) => handleBoardSquareClick(ri, ci, -1, null)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 910,
          columnNumber: 11
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {
          squares: squares,
          usedby: usedby
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 917,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 908,
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
          lineNumber: 924,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 923,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowUnseenTiles, {
          tiles: tiles,
          othertiles: prisonersOrGuards === "P" ? gtiles : ptiles
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 937,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 936,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 893,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 876,
    columnNumber: 5
  }, undefined);
};

_s2(Game, "ZePShSXWdX28vy6kQWqVuT04MdE=");

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
      lineNumber: 957,
      columnNumber: 7
    }, undefined), unseenTiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [ti > 0 && t !== unseenTiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pbTilepoolDivider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 961,
        columnNumber: 13
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbTilepoolTile",
        children: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 965,
        columnNumber: 11
      }, undefined)]
    }, `tile${ti}`, true, {
      fileName: _jsxFileName,
      lineNumber: 959,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 956,
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
    lineNumber: 974,
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
      lineNumber: 983,
      columnNumber: 7
    }, undefined), "Finish Turn"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 982,
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
      lineNumber: 991,
      columnNumber: 7
    }, undefined), "Recall Tiles"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 990,
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
      children: "sentiment_very_dissatisfied"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 999,
      columnNumber: 7
    }, undefined), "Exchange Tiles"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 998,
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
      lineNumber: 1007,
      columnNumber: 7
    }, undefined), "Pass"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1006,
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
      lineNumber: 1016,
      columnNumber: 7
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
      tileclass: tileclass,
      tilevalue: tilevalue,
      onClick: () => window.alert("No peeking!")
    }, tileclass + String(tileindex), false, {
      fileName: _jsxFileName,
      lineNumber: 1023,
      columnNumber: 7
    }, undefined);
  };

  const renderFinishTurn = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
        onClick: () => props.onClickFinishTurn()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1033,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1033,
      columnNumber: 12
    }, undefined);
  };

  const renderRecallTiles = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
        onClick: () => props.onClickTileRecall()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1037,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1037,
      columnNumber: 12
    }, undefined);
  };

  const renderExchangeTiles = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileExchangeButton, {
        onClick: () => props.onClickTileExchange()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1041,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1041,
      columnNumber: 12
    }, undefined);
  };

  const renderPassPlay = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PassPlayButton, {
        onClick: () => props.onClickPassPlay()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1045,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1045,
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
        lineNumber: 1052,
        columnNumber: 9
      }, undefined)
    }, value + String(index), false, {
      fileName: _jsxFileName,
      lineNumber: 1051,
      columnNumber: 7
    }, undefined));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "PRISONERS"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1064,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilerack",
      children: props.ptiles.map((t, ti) => renderTile(props.whoseturn === "P" && props.selection === ti ? "pbTileOnRackSelectedP" : "pbTileOnRackP", ti, props.prisonersOrGuards === "P" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1065,
      columnNumber: 7
    }, undefined), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderRecallTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderExchangeTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderPassPlay() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Rescues made: ", props.rescues, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1082,
        columnNumber: 9
      }, undefined), renderFreedPrisoners(props.rescues)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1080,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1063,
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
      lineNumber: 1093,
      columnNumber: 7
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
      tileclass: tileclass,
      tilevalue: tilevalue,
      onClick: () => window.alert("No peeking!")
    }, tileclass + String(tileindex), false, {
      fileName: _jsxFileName,
      lineNumber: 1100,
      columnNumber: 7
    }, undefined);
  };

  const renderFinishTurn = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
      onClick: () => props.onClickFinishTurn()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1110,
      columnNumber: 12
    }, undefined);
  };

  const renderRecallTiles = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
      onClick: () => props.onClickTileRecall()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1114,
      columnNumber: 12
    }, undefined);
  };

  const renderExchangeTiles = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileExchangeButton, {
      onClick: () => props.onClickTileExchange()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1118,
      columnNumber: 12
    }, undefined);
  };

  const renderPassPlay = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PassPlayButton, {
      onClick: () => props.onClickPassPlay()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1122,
      columnNumber: 12
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "GUARDS"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1127,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilerack",
      children: props.gtiles.map((t, ti) => renderTile(props.whoseturn === "G" && props.selection === ti ? "pbTileOnRackSelectedG" : "pbTileOnRackG", ti, props.prisonersOrGuards === "G" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1128,
      columnNumber: 7
    }, undefined), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderRecallTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderExchangeTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderPassPlay() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1126,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsyLmpzIl0sIm5hbWVzIjpbImVzY2FwZWhhdGNoZXMiLCJpbml0aWFsdGlsZXMiLCJQcmlzb25CcmVhayIsImlubG9iYnkiLCJzZXRJbmxvYmJ5IiwidXNlU3RhdGUiLCJnYW1laWQiLCJzZXRHYW1laWQiLCJwcmlzb25lcnNPckd1YXJkcyIsInNldFByaXNvbmVyc09yR3VhcmRzIiwid3Ntc2dzIiwic2V0V3Ntc2dzIiwibXNnaWQiLCJzZXRNc2dpZCIsImhvc3QiLCJhY2NlcHRNZXNzYWdlIiwibWVzc2FnZSIsImN1cnIiLCJkYXRhIiwicmVtb3ZlTWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiaSIsImluZGV4T2YiLCJ3Iiwic3BsaWNlIiwiY2xpZW50Iiwic2V0Q2xpZW50IiwiQ3VzdG9tU29ja2V0IiwidXNlRWZmZWN0IiwiY29ubmVjdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsIm1hcCIsIm1zZyIsImlueCIsIlNxdWFyZSIsInByb3BzIiwidXNlZGJ5Y2xhc3MiLCJzcXVhcmV1c2VkYnkiLCJ0ZGNsYXNzIiwiYyIsInJjZCIsInJpIiwiY2kiLCJ0ZHZhbHVlIiwib25DbGljayIsIkJvYXJkIiwic3F1YXJlcyIsInVzZWRieSIsInJlbmRlclNxdWFyZSIsInJlbmRlclJvdyIsInIiLCJHYW1lIiwidGlsZXMiLCJzZXRUaWxlcyIsInB0aWxlcyIsInNldFB0aWxlcyIsImd0aWxlcyIsInNldEd0aWxlcyIsInNldFNxdWFyZXMiLCJBcnJheSIsImZpbGwiLCJzZXRVc2VkYnkiLCJzZWxlY3Rpb24iLCJzZXRTZWxlY3Rpb24iLCJ3aG9zZXR1cm4iLCJzZXRXaG9zZXR1cm4iLCJjdXJyZW50Y29vcmRzIiwic2V0Q3VycmVudGNvb3JkcyIsInJlc2N1ZXMiLCJzZXRSZXNjdWVzIiwic2V0UmNkIiwic25hcHNob3QiLCJzZXRTbmFwc2hvdCIsInRlbXBQVGlsZXMiLCJ0ZW1wR1RpbGVzIiwidGVtcFRpbGVzIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzb3J0IiwiY29uc29sZSIsImxvZyIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsImZ1bmMiLCJwcm9jZXNzTWVzc2FnZSIsInBhcnNlIiwicmVxdWVzdG9yIiwic2VuZGVyIiwiaGFuZGxlQm9hcmRTcXVhcmVDbGljayIsIm5ld1NlbGVjdGlvbiIsIm5ld1JjZCIsIm5ld1NxdWFyZXMiLCJuZXdVc2VkYnkiLCJuZXdQdGlsZXMiLCJuZXdHdGlsZXMiLCJuZXdSb3ciLCJzcXVhcmV2YWx1ZSIsIm5ld0N1cnJlbnRjb29yZHMiLCJjb29yZCIsIlN0cmluZyIsImNjaSIsIm5ld1VzZWRieVJvdyIsIm5ld0RpcmVjdGlvbiIsImhhbmRsZVByaXNvbmVyVGlsZUNsaWNrIiwidGlsZWluZGV4IiwiYWxlcnQiLCJoYW5kbGVHdWFyZFRpbGVDbGljayIsImVuZFByaXNvbmVyc1R1cm4iLCJpc1BsYXlWYWxpZCIsIm5ld1Jlc2N1ZXMiLCJuZXdUaWxlcyIsImVuZEd1YXJkc1R1cm4iLCJzbmFwc3F1YXJlcyIsInNuYXB1c2VkYnkiLCJzbmFwcHRpbGVzIiwic25hcGd0aWxlcyIsInN3YXBQcmlzb25lcnNUaWxlcyIsIndpbmRvdyIsInN3YXBHdWFyZHNUaWxlcyIsImxvd3JvdyIsImhpZ2hyb3ciLCJsb3djb2wiLCJoaWdoY29sIiwicGxheXRocnUiLCJob29rbWFkZSIsInJlY2FsbFRpbGVzIiwicHJpc29uZXJQYXNzIiwiZ3VhcmRzUGFzcyIsInJlcXVlc3RHYW1lRGF0YSIsInBsYXllcnR5cGUiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImtleSIsImxldHRlcnRlc3QiLCJtYXRjaCIsImxldHRlciIsInRvVXBwZXJDYXNlIiwicmFjayIsInJvdyIsImNvbCIsImRpciIsIm5ld2MiLCJuZXdyIiwidGkiLCJTaG93VW5zZWVuVGlsZXMiLCJ1bnNlZW5UaWxlcyIsIm90aGVydGlsZXMiLCJ0IiwiUmFja1RpbGUiLCJ0aWxlY2xhc3MiLCJ0aWxldmFsdWUiLCJGaW5pc2hUdXJuQnV0dG9uIiwiVGlsZVJlY2FsbEJ1dHRvbiIsIlRpbGVFeGNoYW5nZUJ1dHRvbiIsIlBhc3NQbGF5QnV0dG9uIiwiUHJpc29uZXJzIiwicmVuZGVyVGlsZSIsInJlbmRlckZpbmlzaFR1cm4iLCJvbkNsaWNrRmluaXNoVHVybiIsInJlbmRlclJlY2FsbFRpbGVzIiwib25DbGlja1RpbGVSZWNhbGwiLCJyZW5kZXJFeGNoYW5nZVRpbGVzIiwib25DbGlja1RpbGVFeGNoYW5nZSIsInJlbmRlclBhc3NQbGF5Iiwib25DbGlja1Bhc3NQbGF5IiwicmVuZGVyRnJlZWRQcmlzb25lcnMiLCJjb3VudCIsImR1bWIiLCJpbmRleCIsIkd1YXJkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxhQUFhLEdBQUcsQ0FDcEIsS0FEb0IsRUFFcEIsS0FGb0IsRUFHcEIsTUFIb0IsRUFJcEIsS0FKb0IsRUFLcEIsTUFMb0IsRUFNcEIsTUFOb0IsRUFPcEIsTUFQb0IsRUFRcEIsT0FSb0IsQ0FBdEIsQyxDQVNHOztBQUNILE1BQU1DLFlBQVksR0FBRyxDQUNuQixHQURtQixFQUVuQixHQUZtQixFQUduQixHQUhtQixFQUluQixHQUptQixFQUtuQixHQUxtQixFQU1uQixHQU5tQixFQU9uQixHQVBtQixFQVFuQixHQVJtQixFQVNuQixHQVRtQixFQVVuQixHQVZtQixFQVduQixHQVhtQixFQVluQixHQVptQixFQWFuQixHQWJtQixFQWNuQixHQWRtQixFQWVuQixHQWZtQixFQWdCbkIsR0FoQm1CLEVBaUJuQixHQWpCbUIsRUFrQm5CLEdBbEJtQixFQW1CbkIsR0FuQm1CLEVBb0JuQixHQXBCbUIsRUFxQm5CLEdBckJtQixFQXNCbkIsR0F0Qm1CLEVBdUJuQixHQXZCbUIsRUF3Qm5CLEdBeEJtQixFQXlCbkIsR0F6Qm1CLEVBMEJuQixH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QUFpQixDQUFDMEgsQ0FBRCxFQUFJSixFQUFKLEtBQ2hCYSxVQUFVLENBQ1IvSCxLQUFLLENBQUM2QixTQUFOLEtBQW9CLEdBQXBCLElBQTJCN0IsS0FBSyxDQUFDMkIsU0FBTixLQUFvQnVGLEVBQS9DLEdBQ0ksdUJBREosR0FFSSxlQUhJLEVBSVJBLEVBSlEsRUFLUmxILEtBQUssQ0FBQzlCLGlCQUFOLEtBQTRCLEdBQTVCLEdBQWtDb0osQ0FBbEMsR0FBc0MsR0FMOUIsQ0FEWDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsRUFhR3RILEtBQUssQ0FBQzZCLFNBQU4sS0FBb0IsR0FBcEIsSUFBMkI3QixLQUFLLENBQUM5QixpQkFBTixLQUE0QixHQUF2RCxHQUE2RDhKLGdCQUFnQixFQUE3RSxnQkFBa0YsdUpBYnJGLEVBY0doSSxLQUFLLENBQUM2QixTQUFOLEtBQW9CLEdBQXBCLElBQTJCN0IsS0FBSyxDQUFDOUIsaUJBQU4sS0FBNEIsR0FBdkQsR0FBNkRnSyxpQkFBaUIsRUFBOUUsZ0JBQW1GLHVKQWR0RixFQWVHbEksS0FBSyxDQUFDNkIsU0FBTixLQUFvQixHQUFwQixJQUEyQjdCLEtBQUssQ0FBQzlCLGlCQUFOLEtBQTRCLEdBQXZELEdBQTZEa0ssbUJBQW1CLEVBQWhGLGdCQUFxRix1SkFmeEYsRUFnQkdwSSxLQUFLLENBQUM2QixTQUFOLEtBQW9CLEdBQXBCLElBQTJCN0IsS0FBSyxDQUFDOUIsaUJBQU4sS0FBNEIsR0FBdkQsR0FBNkRvSyxjQUFjLEVBQTNFLGdCQUFnRix1SkFoQm5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBb0JELENBeEREOztPQUFNTSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BiL3ByaXNvbmJyZWFrMi5lNjY5NmUxMTYwYmMwZDgxMWExYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQ3VzdG9tU29ja2V0IGZyb20gXCIuLi8uLi93c1wiO1xyXG5jb25zdCBlc2NhcGVoYXRjaGVzID0gW1xyXG4gIFwiMC0wXCIsXHJcbiAgXCIwLTdcIixcclxuICBcIjAtMTRcIixcclxuICBcIjctMFwiLFxyXG4gIFwiNy0xNFwiLFxyXG4gIFwiMTQtMFwiLFxyXG4gIFwiMTQtN1wiLFxyXG4gIFwiMTQtMTRcIixcclxuXTsgLy8gY29vcmRzIG9mIGVzY2FwZSBoYXRjaGVzXHJcbmNvbnN0IGluaXRpYWx0aWxlcyA9IFtcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkJcIixcclxuICBcIkJcIixcclxuICBcIkNcIixcclxuICBcIkNcIixcclxuICBcIkRcIixcclxuICBcIkRcIixcclxuICBcIkRcIixcclxuICBcIkRcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkZcIixcclxuICBcIkZcIixcclxuICBcIkdcIixcclxuICBcIkdcIixcclxuICBcIkdcIixcclxuICBcIkhcIixcclxuICBcIkhcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIkpcIixcclxuICBcIktcIixcclxuICBcIkxcIixcclxuICBcIkxcIixcclxuICBcIkxcIixcclxuICBcIkxcIixcclxuICBcIk1cIixcclxuICBcIk1cIixcclxuICBcIk5cIixcclxuICBcIk5cIixcclxuICBcIk5cIixcclxuICBcIk5cIixcclxuICBcIk5cIixcclxuICBcIk5cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIlBcIixcclxuICBcIlBcIixcclxuICBcIlFcIixcclxuICBcIlJcIixcclxuICBcIlJcIixcclxuICBcIlJcIixcclxuICBcIlJcIixcclxuICBcIlJcIixcclxuICBcIlJcIixcclxuICBcIlNcIixcclxuICBcIlNcIixcclxuICBcIlNcIixcclxuICBcIlNcIixcclxuICBcIlRcIixcclxuICBcIlRcIixcclxuICBcIlRcIixcclxuICBcIlRcIixcclxuICBcIlRcIixcclxuICBcIlRcIixcclxuICBcIlVcIixcclxuICBcIlVcIixcclxuICBcIlVcIixcclxuICBcIlVcIixcclxuICBcIlZcIixcclxuICBcIlZcIixcclxuICBcIldcIixcclxuICBcIldcIixcclxuICBcIlhcIixcclxuICBcIllcIixcclxuICBcIllcIixcclxuICBcIlpcIixcclxuICBcIj9cIixcclxuICBcIj9cIixcclxuXTsgLy8gaW5pdGlhbCB0aWxlIHBvb2xcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaXNvbkJyZWFrKCkge1xyXG4gIGNvbnN0IFtpbmxvYmJ5LCBzZXRJbmxvYmJ5XSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW2dhbWVpZCwgc2V0R2FtZWlkXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtwcmlzb25lcnNPckd1YXJkcywgc2V0UHJpc29uZXJzT3JHdWFyZHNdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3dzbXNncywgc2V0V3Ntc2dzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFttc2dpZCwgc2V0TXNnaWRdID0gdXNlU3RhdGUoMClcclxuICBsZXQgaG9zdCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAnd3NzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tJyA6ICd3czovL2xvY2FsaG9zdDo1MDAwJztcclxuICBjb25zdCBhY2NlcHRNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcclxuICAgIHNldE1zZ2lkKChjdXJyKSA9PiBjdXJyICsgMSlcclxuICAgIHNldFdzbXNncygoY3VycikgPT4gWy4uLmN1cnIsIG1lc3NhZ2UuZGF0YV0pO1xyXG4gIH1cclxuICBjb25zdCByZW1vdmVNZXNzYWdlID0gKG1lc3NhZ2VEYXRhKSA9PiB7XHJcbiAgICBsZXQgaSA9IHdzbXNncy5pbmRleE9mKG1lc3NhZ2VEYXRhKTtcclxuICAgIGxldCB3ID0gWy4uLndzbXNnc107XHJcbiAgICB3LnNwbGljZShpLDEpO1xyXG4gICAgc2V0V3Ntc2dzKHcpO1xyXG4gIH1cclxuICBjb25zdCBbY2xpZW50LCBzZXRDbGllbnRdID0gdXNlU3RhdGUobmV3IEN1c3RvbVNvY2tldChob3N0LCBhY2NlcHRNZXNzYWdlKSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IChcclxuICAgIGNsaWVudC5jb25uZWN0KClcclxuICApLFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgaW5sb2JieSB8fCBwcmlzb25lcnNPckd1YXJkcyA9PT0gJycgP1xyXG4gICAgPGRpdj5cclxuICAgICAgPHA+SW4gdGhlIGxvYmJ5PC9wPlxyXG4gICAgICA8bGFiZWw+R2FtZSBpZDombmJzcDs8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICAgIG5hbWU9XCJnYW1laWRcIlxyXG4gICAgICAgICAgdmFsdWU9e2dhbWVpZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEdhbWVpZChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxsYWJlbD4mbmJzcDs8L2xhYmVsPlxyXG4gICAgICA8YnV0dG9uIGlkPVwic3RhcnRnYW1lXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZWlkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICBzZXRQcmlzb25lcnNPckd1YXJkcygnUCcpO1xyXG4gICAgICAgICAgICAgIHNldElubG9iYnkoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgICBTdGFydCBHYW1lXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8bGFiZWw+Jm5ic3A7PC9sYWJlbD5cclxuICAgICAgPGJ1dHRvbiBpZD1cImpvaW5nYW1lXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZWlkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICBzZXRQcmlzb25lcnNPckd1YXJkcygnRycpO1xyXG4gICAgICAgICAgICAgIHNldElubG9iYnkoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgICBKb2luIEdhbWVcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHt3c21zZ3MubWFwKCAobXNnLCBpbngpID0+IChcclxuICAgICAgICA8bGkga2V5PXtpbnh9Pnttc2d9PC9saT5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICAgIDpcclxuICAgIDxHYW1lIHByaXNvbmVyc09yR3VhcmRzPXtwcmlzb25lcnNPckd1YXJkc31cclxuICAgICAgZ2FtZWlkPXtnYW1laWR9XHJcbiAgICAgIHdzbXNncz17d3Ntc2dzfVxyXG4gICAgICBjbGllbnQ9e2NsaWVudH1cclxuICAgICAgcmVtb3ZlTWVzc2FnZT17cmVtb3ZlTWVzc2FnZX1cclxuICAgICAgLz5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IFNxdWFyZSA9IChwcm9wcykgPT4ge1xyXG4gIC8vIHNxdWFyZXVzZWRieSwgcmksIGNpLCBjLCBvbkNsaWNrXHJcbiAgLy8gbmVlZCBzcXVhcmV1c2VkYnkgdG8gcGljayBjc3MgY2xhc3NOYW1lIGNvcnJlc3BvbmRpbmcgdG8gd2hvIHBsYXllZCB0aGUgdGlsZSBvbiB0aGUgc3F1YXJlXHJcbiAgLy8gbmVlZCByaSwgY2kgdG8gZGlzcGxheSBhbHRlcm5hdGluZyBjaGFyYWN0ZXJzIG9uIHVudXNlZCBzcXVhcmVzXHJcbiAgLy8gbmVlZCBjIHRvIHJlcHJlc2VudCB3aGljaCB0aWxlIGlzIG9uIHRoZSBzcXVhcmUsIGlmIGFueVxyXG4gIC8vIG5lZWQgb25DbGljayB0byBoYW5kbGUgc3F1YXJlIGNsaWNrIGF0IGEgaGlnaGVyIGxldmVsXHJcbiAgLy8gbmVlZCByY2QgdG8gZGlzcGxheSBzZWxlY3RlZCBkaXJlY3Rpb24gYXJyb3cgd2hlbiBhcHByb3ByaWF0ZVxyXG4gIGNvbnN0IHVzZWRieWNsYXNzID1cclxuICAgIHByb3BzLnNxdWFyZXVzZWRieSA9PT0gXCJQXCJcclxuICAgICAgPyBcInBiU3F1YXJlVXNlZEJ5UHJpc29uZXJzXCJcclxuICAgICAgOiBcInBiU3F1YXJlVXNlZEJ5R3VhcmRzXCI7XHJcbiAgY29uc3QgdGRjbGFzcyA9XHJcbiAgICBwcm9wcy5jICE9PSBcIi5cIlxyXG4gICAgICA/IHVzZWRieWNsYXNzXHJcbiAgICAgIDogcHJvcHMucmNkWzBdID09PSBwcm9wcy5yaSAmJiBwcm9wcy5yY2RbMV0gPT09IHByb3BzLmNpICYmIHByb3BzLnJjZFsyXSA9PT0gXCJyXCJcclxuICAgICAgPyBcInBiU3F1YXJlUmlnaHRBcnJvd1wiXHJcbiAgICAgIDogcHJvcHMucmNkWzBdID09PSBwcm9wcy5yaSAmJiBwcm9wcy5yY2RbMV0gPT09IHByb3BzLmNpICYmIHByb3BzLnJjZFsyXSA9PT0gXCJkXCJcclxuICAgICAgPyBcInBiU3F1YXJlRG93bkFycm93XCJcclxuICAgICAgOiBwcm9wcy5yaSA9PT0gNyAmJiBwcm9wcy5jaSA9PT0gN1xyXG4gICAgICA/IFwicGJTcXVhcmVDZW50ZXJTcXVhcmVcIlxyXG4gICAgICA6IChwcm9wcy5yaSA9PT0gMCB8fCBwcm9wcy5yaSA9PT0gNyB8fCBwcm9wcy5yaSA9PT0gMTQpICYmXHJcbiAgICAgICAgKHByb3BzLmNpID09PSAwIHx8IHByb3BzLmNpID09PSA3IHx8IHByb3BzLmNpID09PSAxNClcclxuICAgICAgPyBcInBiU3F1YXJlRXNjYXBlSGF0Y2hcIlxyXG4gICAgICA6IHByb3BzLnJpICUgMiA9PT0gcHJvcHMuY2kgJSAyXHJcbiAgICAgID8gXCJwYlNxdWFyZVwiXHJcbiAgICAgIDogXCJwYlNxdWFyZTJcIjtcclxuICBjb25zdCB0ZHZhbHVlID1cclxuICAgIHByb3BzLmMgIT09IFwiLlwiXHJcbiAgICAgID8gcHJvcHMuY1xyXG4gICAgICA6IHRkY2xhc3MgPT09IFwicGJTcXVhcmVSaWdodEFycm93XCJcclxuICAgICAgPyBcIuKeoVwiXHJcbiAgICAgIDogdGRjbGFzcyA9PT0gXCJwYlNxdWFyZURvd25BcnJvd1wiXHJcbiAgICAgID8gXCLirIdcIlxyXG4gICAgICA6IHRkY2xhc3MgPT09IFwicGJTcXVhcmVDZW50ZXJTcXVhcmVcIlxyXG4gICAgICA/IFwi4pywXCJcclxuICAgICAgOiB0ZGNsYXNzID09PSBcInBiU3F1YXJlRXNjYXBlSGF0Y2hcIlxyXG4gICAgICA/IFwi8J+Sq1wiXHJcbiAgICAgIDogcHJvcHMucmkgJSAyID09PSBwcm9wcy5jaSAlIDJcclxuICAgICAgPyBcIuKYuVwiLy9cIuKOlFwiXHJcbiAgICAgIDogXCLqkJVcIjsvL1wi4pymXCI7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXt0ZGNsYXNzfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAge3RkdmFsdWV9XHJcbiAgICA8L2J1dHRvbj5cclxuKTtcclxufTtcclxuXHJcbmNvbnN0IEJvYXJkID0gKHsgb25DbGljaywgc3F1YXJlcywgdXNlZGJ5LCByY2QgfSkgPT4ge1xyXG4gIGNvbnN0IHJlbmRlclNxdWFyZSA9IChyaSwgY2ksIGMsIHNxdWFyZXVzZWRieSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRkIGtleT17YFNxdWFyZSR7cml9LSR7Y2l9YH0+XHJcbiAgICAgICAgPFNxdWFyZVxyXG4gICAgICAgICAgYz17Y31cclxuICAgICAgICAgIGNpPXtjaX1cclxuICAgICAgICAgIHJpPXtyaX1cclxuICAgICAgICAgIHNxdWFyZXVzZWRieT17c3F1YXJldXNlZGJ5fVxyXG4gICAgICAgICAgcmNkPXtyY2R9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKHJpLCBjaSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC90ZD5cclxuICAgICk7XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJSb3cgPSAocmkpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0ciBrZXk9e2BCb2FyZFJvdyR7cml9YH0gY2xhc3NOYW1lPVwicm93IHBiUm93XCI+XHJcbiAgICAgICAge3NxdWFyZXNbcmldLm1hcCgoYywgY2kpID0+IHJlbmRlclNxdWFyZShyaSwgY2ksIGMsIHVzZWRieVtyaV1bY2ldKSl9XHJcbiAgICAgIDwvdHI+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dGFibGUgY2xhc3NOYW1lPVwicGJCb2FyZFwiPlxyXG4gICAgICA8dGJvZHk+e3NxdWFyZXMubWFwKChyLCByaSkgPT4gcmVuZGVyUm93KHJpKSl9PC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEdhbWUgPSAoe3ByaXNvbmVyc09yR3VhcmRzLCBnYW1laWQsIHdzbXNncywgY2xpZW50LCByZW1vdmVNZXNzYWdlfSkgPT4ge1xyXG4gIGNvbnN0IFt0aWxlcywgc2V0VGlsZXNdID0gdXNlU3RhdGUoWy4uLmluaXRpYWx0aWxlc10pO1xyXG4gIGNvbnN0IFtwdGlsZXMsIHNldFB0aWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2d0aWxlcywgc2V0R3RpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc3F1YXJlcywgc2V0U3F1YXJlc10gPSB1c2VTdGF0ZShBcnJheSgxNSkuZmlsbChBcnJheSgxNSkuZmlsbChcIi5cIikpKTtcclxuICBjb25zdCBbdXNlZGJ5LCBzZXRVc2VkYnldID0gdXNlU3RhdGUoQXJyYXkoMTUpLmZpbGwoQXJyYXkoMTUpLmZpbGwoXCJcIikpKTtcclxuICBjb25zdCBbc2VsZWN0aW9uLCBzZXRTZWxlY3Rpb25dID0gdXNlU3RhdGUoLTEpOyAvLyByZWxhdGl2ZSB0byByYWNrIG9mIHBsYXllciBtYWtpbmcgYSBwbGF5XHJcbiAgY29uc3QgW3dob3NldHVybiwgc2V0V2hvc2V0dXJuXSA9IHVzZVN0YXRlKFwiUFwiKTsgLy8gZ2FtZSBzdGFydHMgd2l0aCBwcmlzb25lcnMgcGxheVxyXG4gIGNvbnN0IFtjdXJyZW50Y29vcmRzLCBzZXRDdXJyZW50Y29vcmRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcmVzY3Vlcywgc2V0UmVzY3Vlc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcmNkLCBzZXRSY2RdID0gdXNlU3RhdGUoWy0xLC0xLFwiXCJdKTtcclxuICBjb25zdCBbc25hcHNob3QsIHNldFNuYXBzaG90XSA9IHVzZVN0YXRlKHtcclxuICAgIHNxdWFyZXM6IFsuLi5zcXVhcmVzXSxcclxuICAgIHVzZWRieTogWy4uLnVzZWRieV0sXHJcbiAgICBwdGlsZXM6IFsuLi5wdGlsZXNdLFxyXG4gICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIpIHtcclxuICAgICAgbGV0IHRlbXBQVGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgICAgbGV0IHRlbXBHVGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IHRlbXBUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICAgIHdoaWxlICh0ZW1wUFRpbGVzLmxlbmd0aCA8IDcpIHtcclxuICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRlbXBUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIHRlbXBQVGlsZXMucHVzaCh0ZW1wVGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIHRlbXBUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgICAgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRlbXBUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIHRlbXBHVGlsZXMucHVzaCh0ZW1wVGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIHRlbXBUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgdGVtcFBUaWxlcy5zb3J0KCk7XHJcbiAgICAgIHRlbXBHVGlsZXMuc29ydCgpO1xyXG4gICAgICBzZXRHdGlsZXModGVtcEdUaWxlcyk7XHJcbiAgICAgIHNldFB0aWxlcyh0ZW1wUFRpbGVzKTtcclxuICAgICAgc2V0VGlsZXModGVtcFRpbGVzKTtcclxuICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgIHNxdWFyZXM6IFsuLi5zcXVhcmVzXSxcclxuICAgICAgICB1c2VkYnk6IFsuLi51c2VkYnldLFxyXG4gICAgICAgIHB0aWxlczogWy4uLnRlbXBQVGlsZXNdLFxyXG4gICAgICAgIGd0aWxlczogWy4uLnRlbXBHVGlsZXNdICAgIFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbmRpbmcgZ2dkXCIpXHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgICAgZnVuYzogXCJnZ2RcIiAvLyBnZXQgZ2FtZSBkYXRhXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhdGNoIHt9XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgbXNnID0gd3Ntc2dzWzBdO1xyXG4gICAgaWYgKG1zZykgcHJvY2Vzc01lc3NhZ2UobXNnKTtcclxuICAgICAgICBcclxuICB9LFt3c21zZ3NdKVxyXG5cclxuICBmdW5jdGlvbiBwcm9jZXNzTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpOyAvLyB3YXMgbWVzc2FnZS5kYXRhXHJcbiAgICBpZiAobWVzc2FnZURhdGEuZ2FtZWlkID09PSBnYW1laWQgJiYgbWVzc2FnZURhdGEudHlwZSA9PT0gXCJwYlwiKSB7IC8vIFRoaXMgaW5zdGFuY2Ugb2YgYSBwcmlzb24gYnJlYWsgZ2FtZVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJyZXF1ZXN0Z2FtZWRhdGFcIiAmJiBtZXNzYWdlRGF0YS5yZXF1ZXN0b3IgIT09IHByaXNvbmVyc09yR3VhcmRzKSB7IC8vIE9wcG9uZW50IHJlcXVlc3RlZCBnYW1lIGluZm9cclxuICAgICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgICBmdW5jOiBcInByb3ZpZGVnYW1lZGF0YVwiLCAvLyBwcm92aWRlIGdhbWUgZGF0YVxyXG4gICAgICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLCAvLyB3aG8gc2VudCB0aGUgZGF0YVxyXG4gICAgICAgICAgICB0aWxlczogdGlsZXMsXHJcbiAgICAgICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsXHJcbiAgICAgICAgICAgIHB0aWxlczogcHRpbGVzLFxyXG4gICAgICAgICAgICBndGlsZXM6IGd0aWxlcyxcclxuICAgICAgICAgICAgdXNlZGJ5OiB1c2VkYnksXHJcbiAgICAgICAgICAgIHdob3NldHVybjogd2hvc2V0dXJuLFxyXG4gICAgICAgICAgICBzZWxlY3Rpb246IHNlbGVjdGlvbixcclxuICAgICAgICAgICAgY3VycmVudGNvb3JkczogY3VycmVudGNvb3JkcyxcclxuICAgICAgICAgICAgc25hcHNob3Q6IHNuYXBzaG90LFxyXG4gICAgICAgICAgICByZXNjdWVzOiByZXNjdWVzXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwicHJvdmlkZWdhbWVkYXRhXCIgJiYgbWVzc2FnZURhdGEuc2VuZGVyICE9PSBwcmlzb25lcnNPckd1YXJkcykgeyAvLyBvcHBvbmVudCBwcm92aWRlZCBnYW1lIGRhdGFcclxuICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgc2V0U3F1YXJlcyhtZXNzYWdlRGF0YS5zcXVhcmVzKTtcclxuICAgICAgICBzZXRQdGlsZXMobWVzc2FnZURhdGEucHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobWVzc2FnZURhdGEuZ3RpbGVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobWVzc2FnZURhdGEudXNlZGJ5KTtcclxuICAgICAgICBzZXRXaG9zZXR1cm4obWVzc2FnZURhdGEud2hvc2V0dXJuKTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24obWVzc2FnZURhdGEuc2VsZWN0aW9uKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKG1lc3NhZ2VEYXRhLmN1cnJlbnRjb29yZHMpO1xyXG4gICAgICAgIHNldFNuYXBzaG90KG1lc3NhZ2VEYXRhLnNuYXBzaG90KTtcclxuICAgICAgICBzZXRSZXNjdWVzKG1lc3NhZ2VEYXRhLnJlc2N1ZXMpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSB0aGV5IHNlbmQgZ2dkLCBhbmQgcHJpc29uZXIgcGlja3MgaXQgdXAgYW5kIHNlbmRzIHNnZCwgdGhlbiBndWFyZHMgcGljayB0aGF0IHVwIGFuZCB0YWtlIHRoZSBkYXRhXHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImdnZFwiICYmIHByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIikgeyAvLyBnZXQgZ2FtZSBkYXRhIChzZW50IGJ5IGd1YXJkcywgcHJpc29uZXJzIHJlc3BvbmQgaGVyZSlcclxuICAgICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgICBmdW5jOiBcInNnZFwiLCAvLyBzZW5kIGdhbWUgZGF0YVxyXG4gICAgICAgICAgICB0aWxlczogdGlsZXMsXHJcbiAgICAgICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsXHJcbiAgICAgICAgICAgIHB0aWxlczogcHRpbGVzLFxyXG4gICAgICAgICAgICBndGlsZXM6IGd0aWxlcyxcclxuICAgICAgICAgICAgdXNlZGJ5OiB1c2VkYnksXHJcbiAgICAgICAgICAgIHdob3NldHVybjogd2hvc2V0dXJuLFxyXG4gICAgICAgICAgICBzZWxlY3Rpb246IHNlbGVjdGlvbixcclxuICAgICAgICAgICAgY3VycmVudGNvb3JkczogY3VycmVudGNvb3JkcyxcclxuICAgICAgICAgICAgc25hcHNob3Q6IHNuYXBzaG90LFxyXG4gICAgICAgICAgICByZXNjdWVzOiByZXNjdWVzIC8vIG1heSBoYXZlIHJlc2N1ZWQgYW5vdGhlciBwcmlzb25lclxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInNnZFwiICYmIHByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIikgeyAvLyBzZW5kIGdhbWUgZGF0YSAocHJpc29uZXJzIHNlbnQgaXQsIGd1YXJkcyBub3cgZ2V0IGl0KVxyXG4gICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgIHNldFB0aWxlcyhtZXNzYWdlRGF0YS5wdGlsZXMpO1xyXG4gICAgICAgIHNldEd0aWxlcyhtZXNzYWdlRGF0YS5ndGlsZXMpO1xyXG4gICAgICAgIHNldFVzZWRieShtZXNzYWdlRGF0YS51c2VkYnkpO1xyXG4gICAgICAgIHNldFdob3NldHVybihtZXNzYWdlRGF0YS53aG9zZXR1cm4pO1xyXG4gICAgICAgIHNldFNlbGVjdGlvbihtZXNzYWdlRGF0YS5zZWxlY3Rpb24pO1xyXG4gICAgICAgIHNldEN1cnJlbnRjb29yZHMobWVzc2FnZURhdGEuY3VycmVudGNvb3Jkcyk7XHJcbiAgICAgICAgc2V0U25hcHNob3QobWVzc2FnZURhdGEuc25hcHNob3QpO1xyXG4gICAgICAgIHNldFJlc2N1ZXMobWVzc2FnZURhdGEucmVzY3Vlcyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiZXB0XCIpIHsgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgc2V0V2hvc2V0dXJuKFwiR1wiKTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgICAgIHNldFJjZCgtMSwtMSxcIlwiKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgIHNldFVzZWRieShtZXNzYWdlRGF0YS51c2VkYnkpO1xyXG4gICAgICAgIHNldFB0aWxlcyhtZXNzYWdlRGF0YS5wdGlsZXMpO1xyXG4gICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICBzZXRSZXNjdWVzKG1lc3NhZ2VEYXRhLnJlc2N1ZXMpO1xyXG4gICAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICAgIHNxdWFyZXM6IFsuLi5tZXNzYWdlRGF0YS5zcXVhcmVzXSxcclxuICAgICAgICAgIHVzZWRieTogWy4uLm1lc3NhZ2VEYXRhLnVzZWRieV0sXHJcbiAgICAgICAgICBwdGlsZXM6IFsuLi5tZXNzYWdlRGF0YS5wdGlsZXNdLFxyXG4gICAgICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICAgICAgICB9KTsgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiZWd0XCIpIHsgLy8gZW5kIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgc2V0V2hvc2V0dXJuKFwiUFwiKTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgICAgIHNldFJjZCgtMSwtMSxcIlwiKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgIHNldFVzZWRieShtZXNzYWdlRGF0YS51c2VkYnkpO1xyXG4gICAgICAgIHNldEd0aWxlcyhtZXNzYWdlRGF0YS5ndGlsZXMpO1xyXG4gICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgICBzcXVhcmVzOiBbLi4ubWVzc2FnZURhdGEuc3F1YXJlc10sXHJcbiAgICAgICAgICB1c2VkYnk6IFsuLi5tZXNzYWdlRGF0YS51c2VkYnldLFxyXG4gICAgICAgICAgcHRpbGVzOiBbLi4ucHRpbGVzXSxcclxuICAgICAgICAgIGd0aWxlczogWy4uLm1lc3NhZ2VEYXRhLmd0aWxlc10sXHJcbiAgICAgICAgfSk7ICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVNZXNzYWdlKG1lc3NhZ2UpO1xyXG4gIH1cclxuICBcclxuICAvLyBDYWxsaW5nIHNldFNlbGVjdGlvbiAoZnJvbSBoYW5kbGVLZXlEb3duKSB0aGVuIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2sgZG9lcyBub3QgbGV0IGl0IHJlY29nbml6ZSBzZWxlY3Rpb24gd2l0aCB0aGUgbmV3IHZhbHVlXHJcbiAgLy8gU28gSSBwYXNzIG5ld1NlbGVjdGlvbiB3aGVuIEkgd2FudCB0byBhbHNvIHNldCBpdCwgb3RoZXJ3aXNlIEkgcGFzcyAtMSB0byBpbnN0cnVjdCBpdCB0byB1c2UgY3VycmVudCB2YWx1ZSBvZiBzZWxlY3Rpb25cclxuICAvLyBBbHNvIHBhc3NpbmcgbmV3UmNkXHJcbiAgY29uc3QgaGFuZGxlQm9hcmRTcXVhcmVDbGljayA9IChyaSwgY2ksIG5ld1NlbGVjdGlvbiwgbmV3UmNkKSA9PiB7XHJcbiAgICBsZXQgbmV3U3F1YXJlcyA9IFsuLi5zcXVhcmVzXTtcclxuICAgIGxldCBuZXdVc2VkYnkgPSBbLi4udXNlZGJ5XTtcclxuICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgIGxldCBuZXdSb3cgPSBbLi4uc3F1YXJlc1tyaV1dO1xyXG4gICAgbGV0IHNxdWFyZXZhbHVlID0gc3F1YXJlc1tyaV1bY2ldO1xyXG4gICAgbGV0IG5ld0N1cnJlbnRjb29yZHMgPSBbLi4uY3VycmVudGNvb3Jkc107XHJcbiAgICBsZXQgY29vcmQgPSBTdHJpbmcocmkpICsgXCItXCIgKyBTdHJpbmcoY2kpO1xyXG4gICAgbGV0IGNjaSA9IGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCk7XHJcbiAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMSkge1xyXG4gICAgICBuZXdTZWxlY3Rpb24gPSBzZWxlY3Rpb247XHJcbiAgICAgIG5ld1JjZCA9IHJjZDtcclxuICAgIH1cclxuICAgIGlmIChuZXdTZWxlY3Rpb24gPiAtMSAmJiBzcXVhcmV2YWx1ZSA9PT0gXCIuXCIpIHsgLy8gdGlsZSBpcyBzZWxlY3RlZCBmcm9tIHJhY2sgYW5kIGNsaWNrZWQgc3F1YXJlIGlzIG5vdCB1c2VkIHlldFxyXG4gICAgICBuZXdSb3dbY2ldID1cclxuICAgICAgICB3aG9zZXR1cm4gPT09IFwiUFwiID8gbmV3UHRpbGVzW25ld1NlbGVjdGlvbl0gOiBuZXdHdGlsZXNbbmV3U2VsZWN0aW9uXTtcclxuICAgICAgbmV3U3F1YXJlc1tyaV0gPSBbLi4ubmV3Um93XTtcclxuICAgICAgd2hvc2V0dXJuID09PSBcIlBcIlxyXG4gICAgICAgID8gbmV3UHRpbGVzLnNwbGljZShuZXdTZWxlY3Rpb24sIDEpXHJcbiAgICAgICAgOiBuZXdHdGlsZXMuc3BsaWNlKG5ld1NlbGVjdGlvbiwgMSk7XHJcbiAgICAgIGxldCBuZXdVc2VkYnlSb3cgPSBbLi4ubmV3VXNlZGJ5W3JpXV07XHJcbiAgICAgIG5ld1VzZWRieVJvd1tjaV0gPSB3aG9zZXR1cm47XHJcbiAgICAgIG5ld1VzZWRieVtyaV0gPSBbLi4ubmV3VXNlZGJ5Um93XTtcclxuICAgICAgaWYgKHdob3NldHVybiA9PT0gXCJQXCIgJiYgbmV3U2VsZWN0aW9uID09PSBuZXdQdGlsZXMubGVuZ3RoKSB7IFxyXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbiAtIDFcclxuICAgICAgfVxyXG4gICAgICBpZiAod2hvc2V0dXJuID09PSBcIkdcIiAmJiBuZXdTZWxlY3Rpb24gPT09IG5ld0d0aWxlcy5sZW5ndGgpIHsgXHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3U2VsZWN0aW9uIC0gMVxyXG4gICAgICB9XHJcbiAgICAgIHNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24pO1xyXG4gICAgICBzZXRTcXVhcmVzKG5ld1NxdWFyZXMpO1xyXG4gICAgICBzZXRVc2VkYnkobmV3VXNlZGJ5KTtcclxuICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKFsuLi5jdXJyZW50Y29vcmRzLCBjb29yZF0pO1xyXG4gICAgICBzZXRSY2QobmV3UmNkKTsgLy8ga2V5IGRvd24gaGFuZGxlciBmaWd1cmVkIGl0IG91dFxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoY2NpID4gLTEpIHsgLy8gY2xpY2tlZCBzcXVhcmUgaGFzIGEgdGlsZSBvbiBpdCBmcm9tIHRoZSBjdXJyZW50IG1vdmUgaW4gcHJvZ3Jlc3NcclxuICAgICAgd2hvc2V0dXJuID09PSBcIlBcIlxyXG4gICAgICAgID8gbmV3UHRpbGVzLnB1c2goc3F1YXJldmFsdWUpXHJcbiAgICAgICAgOiBuZXdHdGlsZXMucHVzaChzcXVhcmV2YWx1ZSk7XHJcbiAgICAgIGxldCBuZXdSb3cgPSBbLi4ubmV3U3F1YXJlc1tyaV1dO1xyXG4gICAgICBuZXdSb3dbY2ldID0gXCIuXCI7XHJcbiAgICAgIG5ld1NxdWFyZXNbcmldID0gWy4uLm5ld1Jvd107XHJcbiAgICAgIGxldCBuZXdVc2VkYnlSb3cgPSBbLi4ubmV3VXNlZGJ5W3JpXV07XHJcbiAgICAgIG5ld1VzZWRieVJvd1tjaV0gPSBcIlwiO1xyXG4gICAgICBuZXdVc2VkYnlbcmldID0gWy4uLm5ld1VzZWRieVJvd107XHJcbiAgICAgIHNldFNlbGVjdGlvbihcclxuICAgICAgICB3aG9zZXR1cm4gPT09IFwiUFwiID8gbmV3UHRpbGVzLmxlbmd0aCAtIDEgOiBuZXdHdGlsZXMubGVuZ3RoIC0gMVxyXG4gICAgICApO1xyXG4gICAgICBuZXdDdXJyZW50Y29vcmRzLnNwbGljZShjY2ksIDEpO1xyXG5cclxuICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKTtcclxuICAgICAgc2V0VXNlZGJ5KG5ld1VzZWRieSk7XHJcbiAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgc2V0Q3VycmVudGNvb3JkcyhuZXdDdXJyZW50Y29vcmRzKTtcclxuICAgICAgc2V0UmNkKC0xLC0xLFwiXCIpOyAvLyBtYWtlIHBsYXlyZSBjbGljayBhZ2FpbiB0byBzZXQgZGlyZWN0aW9uXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIFRoZXkgZGlkbid0IGNsaWNrIGEgc3F1YXJlIHRvIHBsYWNlIGEgc2VsZWN0ZWQgdGlsZSB0aGVyZVxyXG4gICAgLy8gVGhleSBkaWRuJ3QgY2xpY2sgYSBzcXVhcmUgdG8gcmVtb3ZlIGFuIGV4aXN0aW5nIHRpbGVcclxuICAgIGlmIChzcXVhcmVzW3JpXVtjaV0gPT09IFwiLlwiKSB7XHJcbiAgICAgIC8vIFRoZXJlIGlzIG5vdGhpbmcgb24gdGhlIHNxdWFyZSBzbyB0aGV5IGFyZSBwaWNraW5nIHdoZXJlIHRvIHBsYWNlIHRoZSBuZXh0IHRpbGUgdmlhIGtleWJvYXJkXHJcbiAgICAgIGxldCBuZXdEaXJlY3Rpb24gPSByY2RbMF0gIT09IHJpIHx8IHJjZFsxXSAhPT0gY2kgPyBcInJcIiA6IC8vY2xpY2sgbmV3IHNxdWFyZSwgc3RhcnQgd2l0aCBcInJcIlxyXG4gICAgICAgcmNkWzJdID09PSBcInJcIiA/IFwiZFwiIDogLy9jbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyBcInJcIiwgY2hhbmdlIHRvIFwiZFwiXHJcbiAgICAgICByY2RbMl0gPT09IFwiZFwiID8gXCJcIiA6IC8vY2xpY2sgc2FtZSBzcXVhcmUgdGhhdCB3YXMgXCJkXCIsIGNoYW5nZSB0byBcIlwiXHJcbiAgICAgICBcInJcIjsgLy8gY2xpY2sgc2FtZSBzcXVhcmUgdGhhdCB3YXMgXCJcIiwgY2hhbmdlIHRvIFwiclwiXHJcbiAgICAgIG5ld1JjZCA9IFtyaSxjaSxuZXdEaXJlY3Rpb25dO1xyXG4gICAgICBzZXRSY2QobmV3UmNkKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByaXNvbmVyVGlsZUNsaWNrID0gKHRpbGVpbmRleCkgPT4ge1xyXG4gICAgLy8gdGhlIGluZGV4IG9mIHB0aWxlc1xyXG4gICAgaWYgKHdob3NldHVybiA9PT0gXCJQXCIpIHtcclxuICAgICAgc2V0U2VsZWN0aW9uKHRpbGVpbmRleCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIkl0IGlzIG5vdCB5b3VyIHR1cm5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlR3VhcmRUaWxlQ2xpY2sgPSAodGlsZWluZGV4KSA9PiB7XHJcbiAgICAvLyB0aGUgaW5kZXggb2YgZ3RpbGVzXHJcbiAgICBpZiAod2hvc2V0dXJuID09PSBcIkdcIikge1xyXG4gICAgICBzZXRTZWxlY3Rpb24odGlsZWluZGV4KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwiSXQgaXMgbm90IHlvdXIgdHVyblwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBlbmRQcmlzb25lcnNUdXJuID0gKCkgPT4ge1xyXG4gICAgaWYgKCFpc1BsYXlWYWxpZCgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBuZXdSZXNjdWVzID0gcmVzY3VlcztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudGNvb3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoZXNjYXBlaGF0Y2hlcy5pbmRleE9mKGN1cnJlbnRjb29yZHNbaV0pID4gLTEpIHtcclxuICAgICAgICBuZXdSZXNjdWVzID0gbmV3UmVzY3VlcyArIDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICB3aGlsZSAobmV3UHRpbGVzLmxlbmd0aCA8IDcgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgIG5ld1B0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgfVxyXG4gICAgbmV3UHRpbGVzLnNvcnQoKTtcclxuICAgIHNldFdob3NldHVybihcIkdcIik7XHJcbiAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgIHNldFJlc2N1ZXMobmV3UmVzY3Vlcyk7XHJcbiAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgIHNxdWFyZXM6IFsuLi5zcXVhcmVzXSxcclxuICAgICAgdXNlZGJ5OiBbLi4udXNlZGJ5XSxcclxuICAgICAgcHRpbGVzOiBbLi4ubmV3UHRpbGVzXSxcclxuICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlcHRcIiwgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgc3F1YXJlczogc3F1YXJlcywgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICB1c2VkYnk6IHVzZWRieSwgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICBwdGlsZXM6IG5ld1B0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgcHJpc29uZXJzIHJhY2tcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICByZXNjdWVzOiBuZXdSZXNjdWVzIC8vIG1heSBoYXZlIHJlc2N1ZWQgYW5vdGhlciBwcmlzb25lclxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBlbmRHdWFyZHNUdXJuID0gKCkgPT4ge1xyXG4gICAgaWYgKCFpc1BsYXlWYWxpZCgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICB3aGlsZSAobmV3R3RpbGVzLmxlbmd0aCA8IDcgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgIG5ld0d0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgfVxyXG4gICAgbmV3R3RpbGVzLnNvcnQoKTtcclxuICAgIGxldCBzbmFwc3F1YXJlcyA9IFsuLi5zcXVhcmVzXTtcclxuICAgIGxldCBzbmFwdXNlZGJ5ID0gWy4uLnVzZWRieV07XHJcbiAgICBsZXQgc25hcHB0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgbGV0IHNuYXBndGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgIHNldFdob3NldHVybihcIlBcIik7XHJcbiAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgc3F1YXJlczogc25hcHNxdWFyZXMsXHJcbiAgICAgIHVzZWRieTogc25hcHVzZWRieSxcclxuICAgICAgcHRpbGVzOiBzbmFwcHRpbGVzLFxyXG4gICAgICBndGlsZXM6IHNuYXBndGlsZXMsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgdXNlZGJ5OiB1c2VkYnksIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgZ3RpbGVzOiBuZXdHdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIGd1YXJkcyByYWNrXHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgY29uc3Qgc3dhcFByaXNvbmVyc1RpbGVzID0gKCkgPT4ge1xyXG4gICAgaWYgKHRpbGVzLmxlbmd0aCA8IDcpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiTmVlZCA3IGluIHRoZSBiYWcgdG8gZXhjaGFuZ2VcIilcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IG5ld1B0aWxlcyA9IFtdO1xyXG4gICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgIHdoaWxlIChuZXdQdGlsZXMubGVuZ3RoIDwgNyAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgbmV3UHRpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICB9XHJcbiAgICBuZXdQdGlsZXMuc29ydCgpO1xyXG4gICAgbmV3VGlsZXMgPSBbLi4ubmV3VGlsZXMsIC4uLnNuYXBzaG90LnB0aWxlc107XHJcbiAgICBuZXdUaWxlcy5zb3J0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkV4Y2hhbmdlIHB0aWxlc1wiKVxyXG4gICAgY29uc29sZS5sb2coc25hcHNob3QucHRpbGVzKVxyXG4gICAgY29uc29sZS5sb2cocHRpbGVzKVxyXG4gICAgY29uc29sZS5sb2cobmV3UHRpbGVzKVxyXG4gICAgY29uc29sZS5sb2codGlsZXMpXHJcbiAgICBjb25zb2xlLmxvZyhuZXdUaWxlcylcclxuICAgIHNldFNxdWFyZXMoWy4uLnNuYXBzaG90LnNxdWFyZXNdKTtcclxuICAgIHNldFVzZWRieShbLi4uc25hcHNob3QudXNlZGJ5XSk7XHJcbiAgICBzZXRXaG9zZXR1cm4oXCJHXCIpO1xyXG4gICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgIHNxdWFyZXM6IFsuLi5zbmFwc2hvdC5zcXVhcmVzXSxcclxuICAgICAgdXNlZGJ5OiBbLi4uc25hcHNob3QudXNlZGJ5XSxcclxuICAgICAgcHRpbGVzOiBbLi4ubmV3UHRpbGVzXSxcclxuICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlcHRcIiwgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgc3F1YXJlczogc25hcHNob3Quc3F1YXJlcywgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgcHRpbGVzOiBuZXdQdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgcmVzY3VlczogcmVzY3VlcyAvLyBubyByZXNjdWVzIG9uIGFuIGV4Y2hhbmdlXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgY29uc3Qgc3dhcEd1YXJkc1RpbGVzID0gKCkgPT4ge1xyXG4gICAgaWYgKHRpbGVzLmxlbmd0aCA8IDcpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiTmVlZCA3IGluIHRoZSBiYWcgdG8gZXhjaGFuZ2VcIilcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IG5ld0d0aWxlcyA9IFtdO1xyXG4gICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgIHdoaWxlIChuZXdHdGlsZXMubGVuZ3RoIDwgNyAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgbmV3R3RpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICB9XHJcbiAgICBuZXdHdGlsZXMuc29ydCgpO1xyXG4gICAgbmV3VGlsZXMgPSBbLi4ubmV3VGlsZXMsIC4uLnNuYXBzaG90Lmd0aWxlc107XHJcbiAgICBuZXdUaWxlcy5zb3J0KCk7XHJcbiAgICBzZXRTcXVhcmVzKFsuLi5zbmFwc2hvdC5zcXVhcmVzXSk7XHJcbiAgICBzZXRVc2VkYnkoWy4uLnNuYXBzaG90LnVzZWRieV0pO1xyXG4gICAgc2V0V2hvc2V0dXJuKFwiUFwiKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICBzcXVhcmVzOiBbLi4uc25hcHNob3Quc3F1YXJlc10sXHJcbiAgICAgIHVzZWRieTogWy4uLnNuYXBzaG90LnVzZWRieV0sXHJcbiAgICAgIHB0aWxlczogWy4uLnB0aWxlc10sXHJcbiAgICAgIGd0aWxlczogWy4uLm5ld0d0aWxlc10sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICB1c2VkYnk6IHNuYXBzaG90LnVzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgIGd0aWxlczogbmV3R3RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcyAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzUGxheVZhbGlkKCkge1xyXG4gICAgaWYgKHNxdWFyZXNbN11bN10gPT09IFwiLlwiKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIkZpcnN0IHBsYXkgbXVzdCBoaXQgY2VudGVyIHNxdWFyZVwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IGxvd3JvdyA9IDE1O1xyXG4gICAgbGV0IGhpZ2hyb3cgPSAtMTtcclxuICAgIGxldCBsb3djb2wgPSAxNTtcclxuICAgIGxldCBoaWdoY29sID0gLTE7XHJcbiAgICBmb3IgKHZhciByPTA7IHIgPCAxNTsgKytyKSB7XHJcbiAgICAgIGZvciAodmFyIGM9MDsgYyA8IDE1OyArK2MpIHtcclxuICAgICAgICBpZiAoc3F1YXJlc1tyXVtjXSAhPT0gXCIuXCIpIHtcclxuICAgICAgICAgIGlmICghKHIgPiAwICYmIHNxdWFyZXNbci0xXVtjXSAhPT0gXCIuXCIpICYmXHJcbiAgICAgICAgICAgIShjID4gMCAmJiBzcXVhcmVzW3JdW2MtMV0gIT09IFwiLlwiKSAmJlxyXG4gICAgICAgICAgICEociA8IDE0ICYmIHNxdWFyZXNbcisxXVtjXSAhPT0gXCIuXCIpICYmXHJcbiAgICAgICAgICAgIShjIDwgMTQgJiYgc3F1YXJlc1tyXVtjKzFdICE9PSBcIi5cIilcclxuICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiRWFjaCBwbGF5ZWQgdGlsZSBtdXN0IGJlIHBhcnQgb2YgYSB3b3JkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIGlmIChzbmFwc2hvdC5zcXVhcmVzW3JdW2NdID09PSBcIi5cIikge1xyXG4gICAgICAgICAgICAgLy8gVGhpcyBzcXVhcmUgd2FzIHBsYXllZCBvbiB0aGlzIHR1cm5cclxuICAgICAgICAgICAgIGlmIChyIDwgbG93cm93KSB7IGxvd3JvdyA9IHI7fVxyXG4gICAgICAgICAgICAgaWYgKHIgPiBoaWdocm93KSB7IGhpZ2hyb3cgPSByO31cclxuICAgICAgICAgICAgIGlmIChjIDwgbG93Y29sKSB7IGxvd2NvbCA9IGM7fVxyXG4gICAgICAgICAgICAgaWYgKGMgPiBoaWdoY29sKSB7IGhpZ2hjb2wgPSBjO31cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChsb3dyb3cgPT09IDE1KSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIllvdSBkaWRuJ3QgcGxheSBhbnkgdGlsZXNcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChsb3dyb3cgIT09IGhpZ2hyb3cgJiYgbG93Y29sICE9PSBoaWdoY29sKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIlRpbGVzIHBsYXllZCBtdXN0IGJlIGluIGEgc3RyYWlnaHQgbGluZVwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IHBsYXl0aHJ1ID0gZmFsc2U7XHJcbiAgICBsZXQgaG9va21hZGUgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIHIgPSBsb3dyb3c7IHIgPD0gaGlnaHJvdzsgKytyKSB7XHJcbiAgICAgIGZvciAodmFyIGMgPSBsb3djb2w7IGMgPD0gaGlnaGNvbDsgKytjKSB7XHJcbiAgICAgICAgaWYgKHNxdWFyZXNbcl1bY10gPT09IFwiLlwiKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJUaGVyZSBpcyBhIGdhcCBpbiB5b3VyIHdvcmRcIik7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzbmFwc2hvdC5zcXVhcmVzW3JdW2NdICE9PSBcIi5cIikge1xyXG4gICAgICAgICAgcGxheXRocnUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIHIgPiAwICYmIHNxdWFyZXNbci0xXVtjXSAhPT0gXCIuXCIpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiByIDwgMTQgJiYgc3F1YXJlc1tyKzFdW2NdICE9PSBcIi5cIikgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGMgPiAwICYmIHNxdWFyZXNbcl1bYy0xXSAhPT0gXCIuXCIpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBjIDwgMTQgJiYgc3F1YXJlc1tyXVtjKzFdICE9PSBcIi5cIikgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gQ2hlY2sgcGxheSB0byBvciBmcm9tIGEgdGlsZSAocGxheSB0aHJvdWdoIGJ1dCBub3QgZWl0aGVyIHNpZGUpXHJcbiAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIGxvd2NvbCA+IDAgJiYgc25hcHNob3Quc3F1YXJlc1tsb3dyb3ddW2xvd2NvbC0xXSAhPT0gXCIuXCIpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIGhpZ2hjb2wgPCAxNCAmJiBzbmFwc2hvdC5zcXVhcmVzW2xvd3Jvd11baGlnaGNvbCsxXSAhPT0gXCIuXCIpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGxvd3JvdyA+IDAgJiYgc25hcHNob3Quc3F1YXJlc1tsb3dyb3ctMV1bbG93Y29sXSAhPT0gXCIuXCIpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGhpZ2hyb3cgPCAxNCAmJiBzbmFwc2hvdC5zcXVhcmVzW2hpZ2hyb3crMV1bbG93Y29sXSAhPT0gXCIuXCIpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAoIXBsYXl0aHJ1ICYmICFob29rbWFkZSAmJiBzbmFwc2hvdC5zcXVhcmVzWzddWzddICE9PSBcIi5cIikge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJXb3JkcyBtdXN0IGJlIGNvbm5lY3RlZFwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZWNhbGxUaWxlcyA9ICgpID0+IHtcclxuICAgIHNldFNxdWFyZXMoWy4uLnNuYXBzaG90LnNxdWFyZXNdKTtcclxuICAgIHNldFVzZWRieShbLi4uc25hcHNob3QudXNlZGJ5XSk7XHJcbiAgICBzZXRQdGlsZXMoWy4uLnNuYXBzaG90LnB0aWxlc10pO1xyXG4gICAgc2V0R3RpbGVzKFsuLi5zbmFwc2hvdC5ndGlsZXNdKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwcmlzb25lclBhc3MgPSAoKSA9PiB7XHJcbiAgICByZWNhbGxUaWxlcygpOyAvLyBJbiBjYXNlIHRoZXkgcHV0IHNvbWUgdGlsZXMgb24gdGhlIGJvYXJkIGJlZm9yZSBjbGlja2luZyBQYXNzXHJcbiAgICBzZXRXaG9zZXR1cm4oXCJHXCIpO1xyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVwdFwiLCAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICBzcXVhcmVzOiBzbmFwc2hvdC5zcXVhcmVzLCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiBzcXVhcmVzXHJcbiAgICAgICAgdXNlZGJ5OiBzbmFwc2hvdC51c2VkYnksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHVzZWQgYnlcclxuICAgICAgICBwdGlsZXM6IHNuYXBzaG90LnB0aWxlcywgLy8gcHJpc29uZXJzIHJhY2sgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICB0aWxlczogdGlsZXMsIC8vIHRpbGUgcG9vbCBkaWQgbm90IGNoYW5nZVxyXG4gICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXMgLy8gbm8gcmVzY3VlcyBvbiBhIHBhc3NcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBndWFyZHNQYXNzID0gKCkgPT4ge1xyXG4gICAgcmVjYWxsVGlsZXMoKTsgLy8gSW4gY2FzZSB0aGV5IHB1dCBzb21lIHRpbGVzIG9uIHRoZSBib2FyZCBiZWZvcmUgY2xpY2tpbmcgUGFzc1xyXG4gICAgc2V0V2hvc2V0dXJuKFwiUFwiKTtcclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlZ3RcIiwgLy8gZW5kIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgc3F1YXJlczogc25hcHNob3Quc3F1YXJlcywgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgZ3RpbGVzOiBzbmFwc2hvdC5ndGlsZXMsIC8vIGd1YXJkcyByYWNrIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgdGlsZXM6IHRpbGVzIC8vIHRpbGUgcG9vbCBkaWQgbm90IGNoYW5nZVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlcXVlc3RHYW1lRGF0YSA9IChwbGF5ZXJ0eXBlKSA9PiB7XHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwicmVxdWVzdGdhbWVkYXRhXCIsIC8vIHJlcXVlc3QgZ2FtZSBkYXRhXHJcbiAgICAgICAgcmVxdWVzdG9yOiBwcmlzb25lcnNPckd1YXJkc1xyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChwcmlzb25lcnNPckd1YXJkcyAhPT0gd2hvc2V0dXJuKSB7cmV0dXJuO31cclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICB3aG9zZXR1cm4gPT09IFwiUFwiID8gZW5kUHJpc29uZXJzVHVybigpIDogZW5kR3VhcmRzVHVybigpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgbGV0dGVydGVzdCA9IC9eW0EtWmEtelxcP10kLzsgLy8gc2luZ2xlIGxldHRlciBvciBxdWVzdGlvbiBtYXJrIGtleSBwcmVzc2VkXHJcbiAgICBpZiAoZXZlbnQua2V5Lm1hdGNoKGxldHRlcnRlc3QpKSB7XHJcbiAgICAgIGxldCBsZXR0ZXIgPSBldmVudC5rZXkudG9VcHBlckNhc2UoKTtcclxuICAgICAgbGV0IHJhY2sgPSB3aG9zZXR1cm4gPT09IFwiUFwiID8gcHRpbGVzIDogZ3RpbGVzO1xyXG4gICAgICBsZXQgbmV3U2VsZWN0aW9uID0gcmFjay5pbmRleE9mKGxldHRlcik7XHJcbiAgICAgIGlmIChuZXdTZWxlY3Rpb24gPiAtMSkgeyAvLyBQcmVzc2VkIGxldHRlciBpcyBvbiB0aGUgcmFja1xyXG4gICAgICAgIGxldCByb3cgPSByY2RbMF07XHJcbiAgICAgICAgbGV0IGNvbCA9IHJjZFsxXTtcclxuICAgICAgICBsZXQgZGlyID0gcmNkWzJdO1xyXG4gICAgICAgIGlmIChyb3cgPi0xICYmIGNvbCA+IC0xICYmIGRpciAhPT0gXCJcIikgeyAvLyByb3csIGNvbCwgZGlyIGFyZSBzZXQgdG8gYWNjZXB0IGtleXN0cm9rZVxyXG4gICAgICAgICAgLy8gTmVlZCB0byBmaWd1cmUgb3V0IG5leHQgc3FhdXJlIHRvIGF1dG8tcGxhY2UgYSB0aWxlXHJcbiAgICAgICAgICBsZXQgbmV3UmNkID0gcmNkO1xyXG4gICAgICAgICAgaWYgKGRpciA9PT0gXCJyXCIgJiYgY29sIDwgMTQpIHsgLy8gcGxheWluZyByaWdodHdhcmRzIGFuZCB0aGVyZSBtYXkgYmUgcm9vbVxyXG4gICAgICAgICAgICBsZXQgbmV3YyA9IC0xO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBjID0gY29sICsgMTsgYyA8IDE1ICYmIG5ld2MgPT09IC0xOyBjKyspIHtcclxuICAgICAgICAgICAgICBpZiAoc3F1YXJlc1tyb3ddW2NdID09PSBcIi5cIikge25ld2MgPSBjO31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobmV3YyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICBuZXdSY2QgPSBbLTEsLTEsXCJcIl07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbmV3UmNkID0gW3JvdywgbmV3YywgXCJyXCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socm93LGNvbCxuZXdTZWxlY3Rpb24sbmV3UmNkKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGRpciA9PT0gXCJkXCIgJiYgcm93IDwgMTQpIHsgLy8gcGxheWluZyBkb3dud2FyZHMgYW5kIHRoZXJlIGFtYXkgYmUgcm9vbVxyXG4gICAgICAgICAgICBsZXQgbmV3ciA9IC0xO1xyXG4gICAgICAgICAgICBmb3IgKHZhciByID0gcm93ICsgMTsgciA8IDE1ICYmIG5ld3IgPT09IC0xOyByKyspIHtcclxuICAgICAgICAgICAgICBpZiAoc3F1YXJlc1tyXVtjb2xdID09PSBcIi5cIikge25ld3IgPSByO31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobmV3ciA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICBuZXdSY2QgPSBbLTEsLTEsXCJcIl07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbmV3UmNkID0gW25ld3IsIGNvbCwgXCJkXCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socm93LGNvbCxuZXdTZWxlY3Rpb24sbmV3UmNkKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcHJpc29uYnJlYWtcIiBvbktleURvd25DYXB0dXJlPXtoYW5kbGVLZXlEb3dufT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBwYnRpdGxlXCI+UHJpc29uIEJyZWFrPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMiBwYmhvbWVsaW5rXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwicmVxdWVzdEdhbWVEYXRhXCJcclxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJTeW5jIHdpdGggb3Bwb25lbnRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICByZXF1ZXN0R2FtZURhdGEocHJpc29uZXJzT3JHdWFyZHMpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c3luYzwvaT5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17XCIuLi8uLi9cIn0+XHJcbiAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT48L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTIgcGJQcmlzb25lcnNcIj5cclxuICAgICAgICAgIDxQcmlzb25lcnNcclxuICAgICAgICAgICAgcHRpbGVzPXtwdGlsZXN9XHJcbiAgICAgICAgICAgIHdob3NldHVybj17d2hvc2V0dXJufVxyXG4gICAgICAgICAgICBzZWxlY3Rpb249e3NlbGVjdGlvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KHRpKSA9PiBoYW5kbGVQcmlzb25lclRpbGVDbGljayh0aSl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tGaW5pc2hUdXJuPXsoKSA9PiBlbmRQcmlzb25lcnNUdXJuKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tUaWxlUmVjYWxsPXsoKSA9PiByZWNhbGxUaWxlcygpfVxyXG4gICAgICAgICAgICBvbkNsaWNrVGlsZUV4Y2hhbmdlPXsoKSA9PiBzd2FwUHJpc29uZXJzVGlsZXMoKX1cclxuICAgICAgICAgICAgb25DbGlja1Bhc3NQbGF5PXsoKSA9PiBwcmlzb25lclBhc3MoKX1cclxuICAgICAgICAgICAgcmVzY3Vlcz17cmVzY3Vlc31cclxuICAgICAgICAgICAgcHJpc29uZXJzT3JHdWFyZHM9e3ByaXNvbmVyc09yR3VhcmRzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgIHtwcmlzb25lcnNPckd1YXJkcyA9PT0gd2hvc2V0dXJuID9cclxuICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICBzcXVhcmVzPXtzcXVhcmVzfVxyXG4gICAgICAgICAgICB1c2VkYnk9e3VzZWRieX1cclxuICAgICAgICAgICAgcmNkPXtyY2R9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhyaSwgY2kpID0+IGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socmksIGNpLCAtMSxudWxsKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgc3F1YXJlcz17c3F1YXJlc31cclxuICAgICAgICAgICAgdXNlZGJ5PXt1c2VkYnl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTIgcGJHdWFyZHNcIj5cclxuICAgICAgICAgIDxHdWFyZHNcclxuICAgICAgICAgICAgZ3RpbGVzPXtndGlsZXN9XHJcbiAgICAgICAgICAgIHdob3NldHVybj17d2hvc2V0dXJufVxyXG4gICAgICAgICAgICBzZWxlY3Rpb249e3NlbGVjdGlvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KHRpKSA9PiBoYW5kbGVHdWFyZFRpbGVDbGljayh0aSl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tGaW5pc2hUdXJuPXsoKSA9PiBlbmRHdWFyZHNUdXJuKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tUaWxlUmVjYWxsPXsoKSA9PiByZWNhbGxUaWxlcygpfVxyXG4gICAgICAgICAgICBvbkNsaWNrVGlsZUV4Y2hhbmdlPXsoKSA9PiBzd2FwR3VhcmRzVGlsZXMoKX1cclxuICAgICAgICAgICAgb25DbGlja1Bhc3NQbGF5PXsoKSA9PiBndWFyZHNQYXNzKCl9XHJcbiAgICAgICAgICAgIHByaXNvbmVyc09yR3VhcmRzPXtwcmlzb25lcnNPckd1YXJkc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxyXG4gICAgICAgICAgPFNob3dVbnNlZW5UaWxlcyB0aWxlcz17dGlsZXN9IG90aGVydGlsZXM9e3ByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IGd0aWxlcyA6IHB0aWxlc30vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTaG93VW5zZWVuVGlsZXMgPSAocHJvcHMpID0+IHsgLy8gdGlsZXMgPSB0aWxlcyBpbiBiYWcsIG90aGVydGlsZXMgPSB0aWxlcyBvbiBvdGhlciBwbGF5ZXJzIHJhY2tcclxuICBsZXQgdW5zZWVuVGlsZXMgPSBbLi4ucHJvcHMudGlsZXMsIC4uLnByb3BzLm90aGVydGlsZXNdO1xyXG4gIHVuc2VlblRpbGVzLnNvcnQoKTtcclxuICBpZiAodW5zZWVuVGlsZXNbMF0gPT09IFwiP1wiKSB7XHJcbiAgICAgIHVuc2VlblRpbGVzLnNwbGljZSgwLDEpXHJcbiAgICAgIHVuc2VlblRpbGVzLnB1c2goXCI/XCIpXHJcbiAgfVxyXG4gIGlmICh1bnNlZW5UaWxlc1swXSA9PT0gXCI/XCIpIHtcclxuICAgICAgdW5zZWVuVGlsZXMuc3BsaWNlKDAsMSlcclxuICAgICAgdW5zZWVuVGlsZXMucHVzaChcIj9cIilcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcG9vbFwiPlxyXG4gICAgICA8aDM+VElMRVM8L2gzPlxyXG4gICAgICB7dW5zZWVuVGlsZXMubWFwKCh0LCB0aSkgPT4gKFxyXG4gICAgICAgIDxzcGFuIGtleT17YHRpbGUke3RpfWB9PlxyXG4gICAgICAgICAge3RpID4gMCAmJiB0ICE9PSB1bnNlZW5UaWxlc1t0aSAtIDFdID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXBvb2xEaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiVGlsZXBvb2xUaWxlXCI+e3R9PC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUmFja1RpbGUgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPXtwcm9wcy50aWxlY2xhc3N9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICB7cHJvcHMudGlsZXZhbHVlfVxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBGaW5pc2hUdXJuQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJGaW5pc2hUdXJuXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+Y2hlY2s8L2k+RmluaXNoIFR1cm5cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBUaWxlUmVjYWxsQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJSZWNhbGxUaWxlc1wiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnVuZG88L2k+UmVjYWxsIFRpbGVzXHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVGlsZUV4Y2hhbmdlQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJFeGNoYW5nZVRpbGVzXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c2VudGltZW50X3ZlcnlfZGlzc2F0aXNmaWVkPC9pPkV4Y2hhbmdlIFRpbGVzXHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUGFzc1BsYXlCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYlBhc3NQbGF5XCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c2VudGltZW50X25ldXRyYWw8L2k+UGFzc1xyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFByaXNvbmVycyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJlbmRlclRpbGUgPSAodGlsZWNsYXNzLCB0aWxlaW5kZXgsIHRpbGV2YWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID9cclxuICAgICAgPFJhY2tUaWxlXHJcbiAgICAgICAga2V5PXt0aWxlY2xhc3MgKyBTdHJpbmcodGlsZWluZGV4KX1cclxuICAgICAgICB0aWxlY2xhc3M9e3RpbGVjbGFzc31cclxuICAgICAgICB0aWxldmFsdWU9e3RpbGV2YWx1ZX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrKHRpbGVpbmRleCl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDpcclxuICAgICAgPFJhY2tUaWxlXHJcbiAgICAgICAga2V5PXt0aWxlY2xhc3MgKyBTdHJpbmcodGlsZWluZGV4KX1cclxuICAgICAgICB0aWxlY2xhc3M9e3RpbGVjbGFzc31cclxuICAgICAgICB0aWxldmFsdWU9e3RpbGV2YWx1ZX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cuYWxlcnQoXCJObyBwZWVraW5nIVwiKX1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRmluaXNoVHVybiA9ICgpID0+IHtcclxuICAgIHJldHVybiA8cD48RmluaXNoVHVybkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrRmluaXNoVHVybigpfSAvPjwvcD47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUmVjYWxsVGlsZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPHA+PFRpbGVSZWNhbGxCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1RpbGVSZWNhbGwoKX0gLz48L3A+O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckV4Y2hhbmdlVGlsZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPHA+PFRpbGVFeGNoYW5nZUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrVGlsZUV4Y2hhbmdlKCl9IC8+PC9wPjtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJQYXNzUGxheSA9ICgpID0+IHtcclxuICAgIHJldHVybiA8cD48UGFzc1BsYXlCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1Bhc3NQbGF5KCl9IC8+PC9wPjtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJGcmVlZFByaXNvbmVycyA9IChjb3VudCkgPT4ge1xyXG4gICAgbGV0IGR1bWIgPSBBcnJheShjb3VudCkuZmlsbChcIm5vbnNlbnNlXCIpO1xyXG4gICAgcmV0dXJuIGR1bWIubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgPHNwYW4ga2V5PXt2YWx1ZSArIFN0cmluZyhpbmRleCl9PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cIi9icmVha2ZyZWUucG5nXCJcclxuICAgICAgICAgIGFsdD1cIkknbSBmcmVlISBJJ20gZnJlZSFcIlxyXG4gICAgICAgICAgd2lkdGg9XCIxMDBcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMTAwXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICApKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHA+UFJJU09ORVJTPC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJwYlRpbGVyYWNrXCI+XHJcbiAgICAgICAge3Byb3BzLnB0aWxlcy5tYXAoKHQsIHRpKSA9PlxyXG4gICAgICAgICAgcmVuZGVyVGlsZShcclxuICAgICAgICAgICAgcHJvcHMud2hvc2V0dXJuID09PSBcIlBcIiAmJiBwcm9wcy5zZWxlY3Rpb24gPT09IHRpXHJcbiAgICAgICAgICAgICAgPyBcInBiVGlsZU9uUmFja1NlbGVjdGVkUFwiXHJcbiAgICAgICAgICAgICAgOiBcInBiVGlsZU9uUmFja1BcIixcclxuICAgICAgICAgICAgdGksXHJcbiAgICAgICAgICAgIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IHQgOiBcIipcIlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvcD5cclxuICAgICAge3Byb3BzLndob3NldHVybiA9PT0gXCJQXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gcmVuZGVyRmluaXNoVHVybigpIDogPD48Lz59XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiUFwiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IHJlbmRlclJlY2FsbFRpbGVzKCkgOiA8PjwvPn1cclxuICAgICAge3Byb3BzLndob3NldHVybiA9PT0gXCJQXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gcmVuZGVyRXhjaGFuZ2VUaWxlcygpIDogPD48Lz59XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiUFwiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IHJlbmRlclBhc3NQbGF5KCkgOiA8PjwvPn1cclxuICAgICAgPHA+XHJcbiAgICAgICAgUmVzY3VlcyBtYWRlOiB7cHJvcHMucmVzY3Vlc31cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICB7cmVuZGVyRnJlZWRQcmlzb25lcnMocHJvcHMucmVzY3Vlcyl9XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBHdWFyZHMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByZW5kZXJUaWxlID0gKHRpbGVjbGFzcywgdGlsZWluZGV4LCB0aWxldmFsdWUpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiA/XHJcbiAgICAgIDxSYWNrVGlsZVxyXG4gICAgICAgIGtleT17dGlsZWNsYXNzICsgU3RyaW5nKHRpbGVpbmRleCl9XHJcbiAgICAgICAgdGlsZWNsYXNzPXt0aWxlY2xhc3N9XHJcbiAgICAgICAgdGlsZXZhbHVlPXt0aWxldmFsdWV9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMub25DbGljayh0aWxlaW5kZXgpfVxyXG4gICAgICAvPlxyXG4gICAgICA6XHJcbiAgICAgIDxSYWNrVGlsZVxyXG4gICAgICAgIGtleT17dGlsZWNsYXNzICsgU3RyaW5nKHRpbGVpbmRleCl9XHJcbiAgICAgICAgdGlsZWNsYXNzPXt0aWxlY2xhc3N9XHJcbiAgICAgICAgdGlsZXZhbHVlPXt0aWxldmFsdWV9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93LmFsZXJ0KFwiTm8gcGVla2luZyFcIil9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckZpbmlzaFR1cm4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPEZpbmlzaFR1cm5CdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja0ZpbmlzaFR1cm4oKX0gLz47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUmVjYWxsVGlsZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPFRpbGVSZWNhbGxCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1RpbGVSZWNhbGwoKX0gLz47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRXhjaGFuZ2VUaWxlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiA8VGlsZUV4Y2hhbmdlQnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tUaWxlRXhjaGFuZ2UoKX0gLz47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUGFzc1BsYXkgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPFBhc3NQbGF5QnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tQYXNzUGxheSgpfSAvPjtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHA+R1VBUkRTPC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJwYlRpbGVyYWNrXCI+XHJcbiAgICAgICAge3Byb3BzLmd0aWxlcy5tYXAoKHQsIHRpKSA9PlxyXG4gICAgICAgICAgcmVuZGVyVGlsZShcclxuICAgICAgICAgICAgcHJvcHMud2hvc2V0dXJuID09PSBcIkdcIiAmJiBwcm9wcy5zZWxlY3Rpb24gPT09IHRpXHJcbiAgICAgICAgICAgICAgPyBcInBiVGlsZU9uUmFja1NlbGVjdGVkR1wiXHJcbiAgICAgICAgICAgICAgOiBcInBiVGlsZU9uUmFja0dcIixcclxuICAgICAgICAgICAgdGksXHJcbiAgICAgICAgICAgIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiA/IHQgOiBcIipcIlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvcD5cclxuICAgICAge3Byb3BzLndob3NldHVybiA9PT0gXCJHXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiR1wiID8gcmVuZGVyRmluaXNoVHVybigpIDogPD48Lz59XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiR1wiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiA/IHJlbmRlclJlY2FsbFRpbGVzKCkgOiA8PjwvPn1cclxuICAgICAge3Byb3BzLndob3NldHVybiA9PT0gXCJHXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiR1wiID8gcmVuZGVyRXhjaGFuZ2VUaWxlcygpIDogPD48Lz59XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiR1wiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiA/IHJlbmRlclBhc3NQbGF5KCkgOiA8PjwvPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=