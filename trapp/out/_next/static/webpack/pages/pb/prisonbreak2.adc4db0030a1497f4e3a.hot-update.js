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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([7, 7, "r"]); // default to selecting centre square and playing to the right

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
      setRcd(newRcd); // let key down handler figure it out

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
      setRcd(-1, -1, ""); // let key down handler figure it out

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

          if (dir === "r") {
            // playing rightwards
            let newc = -1;

            for (var c = col; c < 15 && newc === -1; ++c) {
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

          if (dir === "d") {
            // playing downwards
            let newr = -1;

            for (var r = row; r < 15 && newr === -1; ++r) {
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

_s2(Game, "uTrVg/qNQGqtxRaFfAsdwobuyKc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsyLmpzIl0sIm5hbWVzIjpbImVzY2FwZWhhdGNoZXMiLCJpbml0aWFsdGlsZXMiLCJQcmlzb25CcmVhayIsImlubG9iYnkiLCJzZXRJbmxvYmJ5IiwidXNlU3RhdGUiLCJnYW1laWQiLCJzZXRHYW1laWQiLCJwcmlzb25lcnNPckd1YXJkcyIsInNldFByaXNvbmVyc09yR3VhcmRzIiwid3Ntc2dzIiwic2V0V3Ntc2dzIiwibXNnaWQiLCJzZXRNc2dpZCIsImhvc3QiLCJhY2NlcHRNZXNzYWdlIiwibWVzc2FnZSIsImN1cnIiLCJkYXRhIiwicmVtb3ZlTWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiaSIsImluZGV4T2YiLCJ3Iiwic3BsaWNlIiwiY2xpZW50Iiwic2V0Q2xpZW50IiwiQ3VzdG9tU29ja2V0IiwidXNlRWZmZWN0IiwiY29ubmVjdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsIm1hcCIsIm1zZyIsImlueCIsIlNxdWFyZSIsInByb3BzIiwidXNlZGJ5Y2xhc3MiLCJzcXVhcmV1c2VkYnkiLCJ0ZGNsYXNzIiwiYyIsInJjZCIsInJpIiwiY2kiLCJ0ZHZhbHVlIiwib25DbGljayIsIkJvYXJkIiwic3F1YXJlcyIsInVzZWRieSIsInJlbmRlclNxdWFyZSIsInJlbmRlclJvdyIsInIiLCJHYW1lIiwidGlsZXMiLCJzZXRUaWxlcyIsInB0aWxlcyIsInNldFB0aWxlcyIsImd0aWxlcyIsInNldEd0aWxlcyIsInNldFNxdWFyZXMiLCJBcnJheSIsImZpbGwiLCJzZXRVc2VkYnkiLCJzZWxlY3Rpb24iLCJzZXRTZWxlY3Rpb24iLCJ3aG9zZXR1cm4iLCJzZXRXaG9zZXR1cm4iLCJjdXJyZW50Y29vcmRzIiwic2V0Q3VycmVudGNvb3JkcyIsInJlc2N1ZXMiLCJzZXRSZXNjdWVzIiwic2V0UmNkIiwic25hcHNob3QiLCJzZXRTbmFwc2hvdCIsInRlbXBQVGlsZXMiLCJ0ZW1wR1RpbGVzIiwidGVtcFRpbGVzIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzb3J0IiwiY29uc29sZSIsImxvZyIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsImZ1bmMiLCJwcm9jZXNzTWVzc2FnZSIsInBhcnNlIiwicmVxdWVzdG9yIiwic2VuZGVyIiwiaGFuZGxlQm9hcmRTcXVhcmVDbGljayIsIm5ld1NlbGVjdGlvbiIsIm5ld1JjZCIsIm5ld1NxdWFyZXMiLCJuZXdVc2VkYnkiLCJuZXdQdGlsZXMiLCJuZXdHdGlsZXMiLCJuZXdSb3ciLCJzcXVhcmV2YWx1ZSIsIm5ld0N1cnJlbnRjb29yZHMiLCJjb29yZCIsIlN0cmluZyIsImNjaSIsIm5ld1VzZWRieVJvdyIsIm5ld0RpcmVjdGlvbiIsImhhbmRsZVByaXNvbmVyVGlsZUNsaWNrIiwidGlsZWluZGV4IiwiYWxlcnQiLCJoYW5kbGVHdWFyZFRpbGVDbGljayIsImVuZFByaXNvbmVyc1R1cm4iLCJpc1BsYXlWYWxpZCIsIm5ld1Jlc2N1ZXMiLCJuZXdUaWxlcyIsImVuZEd1YXJkc1R1cm4iLCJzbmFwc3F1YXJlcyIsInNuYXB1c2VkYnkiLCJzbmFwcHRpbGVzIiwic25hcGd0aWxlcyIsInN3YXBQcmlzb25lcnNUaWxlcyIsIndpbmRvdyIsInN3YXBHdWFyZHNUaWxlcyIsImxvd3JvdyIsImhpZ2hyb3ciLCJsb3djb2wiLCJoaWdoY29sIiwicGxheXRocnUiLCJob29rbWFkZSIsInJlY2FsbFRpbGVzIiwicHJpc29uZXJQYXNzIiwiZ3VhcmRzUGFzcyIsInJlcXVlc3RHYW1lRGF0YSIsInBsYXllcnR5cGUiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImtleSIsImxldHRlcnRlc3QiLCJtYXRjaCIsImxldHRlciIsInRvVXBwZXJDYXNlIiwicmFjayIsInJvdyIsImNvbCIsImRpciIsIm5ld2MiLCJuZXdyIiwidGkiLCJTaG93VW5zZWVuVGlsZXMiLCJ1bnNlZW5UaWxlcyIsIm90aGVydGlsZXMiLCJ0IiwiUmFja1RpbGUiLCJ0aWxlY2xhc3MiLCJ0aWxldmFsdWUiLCJGaW5pc2hUdXJuQnV0dG9uIiwiVGlsZVJlY2FsbEJ1dHRvbiIsIlRpbGVFeGNoYW5nZUJ1dHRvbiIsIlBhc3NQbGF5QnV0dG9uIiwiUHJpc29uZXJzIiwicmVuZGVyVGlsZSIsInJlbmRlckZpbmlzaFR1cm4iLCJvbkNsaWNrRmluaXNoVHVybiIsInJlbmRlclJlY2FsbFRpbGVzIiwib25DbGlja1RpbGVSZWNhbGwiLCJyZW5kZXJFeGNoYW5nZVRpbGVzIiwib25DbGlja1RpbGVFeGNoYW5nZSIsInJlbmRlclBhc3NQbGF5Iiwib25DbGlja1Bhc3NQbGF5IiwicmVuZGVyRnJlZWRQcmlzb25lcnMiLCJjb3VudCIsImR1bWIiLCJpbmRleCIsIkd1YXJkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxhQUFhLEdBQUcsQ0FDcEIsS0FEb0IsRUFFcEIsS0FGb0IsRUFHcEIsTUFIb0IsRUFJcEIsS0FKb0IsRUFLcEIsTUFMb0IsRUFNcEIsTUFOb0IsRUFPcEIsTUFQb0IsRUFRcEIsT0FSb0IsQ0FBdEIsQyxDQVNHOztBQUNILE1BQU1DLFlBQVksR0FBRyxDQUNuQixHQURtQixFQUVuQixHQUZtQixFQUduQixHQUhtQixFQUluQixHQUptQixFQUtuQixHQUxtQixFQU1uQixHQU5tQixFQU9uQixHQVBtQixFQVFuQixHQVJtQixFQVNuQixHQVRtQixFQVVuQixHQVZtQixFQVduQixHQVhtQixFQVluQixHQVptQixFQWFuQixHQWJtQixFQWNuQixHQWRtQixFQWVuQixHQWZtQixFQWdCbkIsR0FoQm1CLEVBaUJuQixHQWpCbUIsRUFrQm5CLEdBbEJtQixFQW1CbkIsR0FuQm1CLEVBb0JuQixHQXBCbUIsRUFxQm5CLEdBckJtQixFQXNCbkIsR0F0Qm1CLEVBdUJuQixHQXZCbUIsRUF3Qm5CLEdBeEJtQixFQXlCbkIsR0F6Qm1CLEVBMEJuQixH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TixLQUFvQixHQUFwQixJQUEyQjdCLEtBQUssQ0FBQzJCLFNBQU4sS0FBb0J1RixFQUEvQyxHQUNJLHVCQURKLEdBRUksZUFISSxFQUlSQSxFQUpRLEVBS1JsSCxLQUFLLENBQUM5QixpQkFBTixLQUE0QixHQUE1QixHQUFrQ29KLENBQWxDLEdBQXNDLEdBTDlCLENBRFg7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLEVBYUd0SCxLQUFLLENBQUM2QixTQUFOLEtBQW9CLEdBQXBCLElBQTJCN0IsS0FBSyxDQUFDOUIsaUJBQU4sS0FBNEIsR0FBdkQsR0FBNkQ4SixnQkFBZ0IsRUFBN0UsZ0JBQWtGLHVKQWJyRixFQWNHaEksS0FBSyxDQUFDNkIsU0FBTixLQUFvQixHQUFwQixJQUEyQjdCLEtBQUssQ0FBQzlCLGlCQUFOLEtBQTRCLEdBQXZELEdBQTZEZ0ssaUJBQWlCLEVBQTlFLGdCQUFtRix1SkFkdEYsRUFlR2xJLEtBQUssQ0FBQzZCLFNBQU4sS0FBb0IsR0FBcEIsSUFBMkI3QixLQUFLLENBQUM5QixpQkFBTixLQUE0QixHQUF2RCxHQUE2RGtLLG1CQUFtQixFQUFoRixnQkFBcUYsdUpBZnhGLEVBZ0JHcEksS0FBSyxDQUFDNkIsU0FBTixLQUFvQixHQUFwQixJQUEyQjdCLEtBQUssQ0FBQzlCLGlCQUFOLEtBQTRCLEdBQXZELEdBQTZEb0ssY0FBYyxFQUEzRSxnQkFBZ0YsdUpBaEJuRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQW9CRCxDQXhERDs7T0FBTU0sTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYi9wcmlzb25icmVhazIuYWRjNGRiMDAzMGExNDk3ZjRlM2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEN1c3RvbVNvY2tldCBmcm9tIFwiLi4vLi4vd3NcIjtcclxuY29uc3QgZXNjYXBlaGF0Y2hlcyA9IFtcclxuICBcIjAtMFwiLFxyXG4gIFwiMC03XCIsXHJcbiAgXCIwLTE0XCIsXHJcbiAgXCI3LTBcIixcclxuICBcIjctMTRcIixcclxuICBcIjE0LTBcIixcclxuICBcIjE0LTdcIixcclxuICBcIjE0LTE0XCIsXHJcbl07IC8vIGNvb3JkcyBvZiBlc2NhcGUgaGF0Y2hlc1xyXG5jb25zdCBpbml0aWFsdGlsZXMgPSBbXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJCXCIsXHJcbiAgXCJCXCIsXHJcbiAgXCJDXCIsXHJcbiAgXCJDXCIsXHJcbiAgXCJEXCIsXHJcbiAgXCJEXCIsXHJcbiAgXCJEXCIsXHJcbiAgXCJEXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJGXCIsXHJcbiAgXCJGXCIsXHJcbiAgXCJHXCIsXHJcbiAgXCJHXCIsXHJcbiAgXCJHXCIsXHJcbiAgXCJIXCIsXHJcbiAgXCJIXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJKXCIsXHJcbiAgXCJLXCIsXHJcbiAgXCJMXCIsXHJcbiAgXCJMXCIsXHJcbiAgXCJMXCIsXHJcbiAgXCJMXCIsXHJcbiAgXCJNXCIsXHJcbiAgXCJNXCIsXHJcbiAgXCJOXCIsXHJcbiAgXCJOXCIsXHJcbiAgXCJOXCIsXHJcbiAgXCJOXCIsXHJcbiAgXCJOXCIsXHJcbiAgXCJOXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJQXCIsXHJcbiAgXCJQXCIsXHJcbiAgXCJRXCIsXHJcbiAgXCJSXCIsXHJcbiAgXCJSXCIsXHJcbiAgXCJSXCIsXHJcbiAgXCJSXCIsXHJcbiAgXCJSXCIsXHJcbiAgXCJSXCIsXHJcbiAgXCJTXCIsXHJcbiAgXCJTXCIsXHJcbiAgXCJTXCIsXHJcbiAgXCJTXCIsXHJcbiAgXCJUXCIsXHJcbiAgXCJUXCIsXHJcbiAgXCJUXCIsXHJcbiAgXCJUXCIsXHJcbiAgXCJUXCIsXHJcbiAgXCJUXCIsXHJcbiAgXCJVXCIsXHJcbiAgXCJVXCIsXHJcbiAgXCJVXCIsXHJcbiAgXCJVXCIsXHJcbiAgXCJWXCIsXHJcbiAgXCJWXCIsXHJcbiAgXCJXXCIsXHJcbiAgXCJXXCIsXHJcbiAgXCJYXCIsXHJcbiAgXCJZXCIsXHJcbiAgXCJZXCIsXHJcbiAgXCJaXCIsXHJcbiAgXCI/XCIsXHJcbiAgXCI/XCIsXHJcbl07IC8vIGluaXRpYWwgdGlsZSBwb29sXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmlzb25CcmVhaygpIHtcclxuICBjb25zdCBbaW5sb2JieSwgc2V0SW5sb2JieV0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IFtnYW1laWQsIHNldEdhbWVpZF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbcHJpc29uZXJzT3JHdWFyZHMsIHNldFByaXNvbmVyc09yR3VhcmRzXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFt3c21zZ3MsIHNldFdzbXNnc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbbXNnaWQsIHNldE1zZ2lkXSA9IHVzZVN0YXRlKDApXHJcbiAgbGV0IGhvc3QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJ3dzczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbScgOiAnd3M6Ly9sb2NhbGhvc3Q6NTAwMCc7XHJcbiAgY29uc3QgYWNjZXB0TWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICBzZXRNc2dpZCgoY3VycikgPT4gY3VyciArIDEpXHJcbiAgICBzZXRXc21zZ3MoKGN1cnIpID0+IFsuLi5jdXJyLCBtZXNzYWdlLmRhdGFdKTtcclxuICB9XHJcbiAgY29uc3QgcmVtb3ZlTWVzc2FnZSA9IChtZXNzYWdlRGF0YSkgPT4ge1xyXG4gICAgbGV0IGkgPSB3c21zZ3MuaW5kZXhPZihtZXNzYWdlRGF0YSk7XHJcbiAgICBsZXQgdyA9IFsuLi53c21zZ3NdO1xyXG4gICAgdy5zcGxpY2UoaSwxKTtcclxuICAgIHNldFdzbXNncyh3KTtcclxuICB9XHJcbiAgY29uc3QgW2NsaWVudCwgc2V0Q2xpZW50XSA9IHVzZVN0YXRlKG5ldyBDdXN0b21Tb2NrZXQoaG9zdCwgYWNjZXB0TWVzc2FnZSkpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiAoXHJcbiAgICBjbGllbnQuY29ubmVjdCgpXHJcbiAgKSxbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIGlubG9iYnkgfHwgcHJpc29uZXJzT3JHdWFyZHMgPT09ICcnID9cclxuICAgIDxkaXY+XHJcbiAgICAgIDxwPkluIHRoZSBsb2JieTwvcD5cclxuICAgICAgPGxhYmVsPkdhbWUgaWQ6Jm5ic3A7PC9sYWJlbD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgICBuYW1lPVwiZ2FtZWlkXCJcclxuICAgICAgICAgIHZhbHVlPXtnYW1laWR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRHYW1laWQoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8bGFiZWw+Jm5ic3A7PC9sYWJlbD5cclxuICAgICAgPGJ1dHRvbiBpZD1cInN0YXJ0Z2FtZVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKGdhbWVpZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgc2V0UHJpc29uZXJzT3JHdWFyZHMoJ1AnKTtcclxuICAgICAgICAgICAgICBzZXRJbmxvYmJ5KGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgICAgU3RhcnQgR2FtZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGxhYmVsPiZuYnNwOzwvbGFiZWw+XHJcbiAgICAgIDxidXR0b24gaWQ9XCJqb2luZ2FtZVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKGdhbWVpZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgc2V0UHJpc29uZXJzT3JHdWFyZHMoJ0cnKTtcclxuICAgICAgICAgICAgICBzZXRJbmxvYmJ5KGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgICAgSm9pbiBHYW1lXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICB7d3Ntc2dzLm1hcCggKG1zZywgaW54KSA9PiAoXHJcbiAgICAgICAgPGxpIGtleT17aW54fT57bXNnfTwvbGk+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgICA6XHJcbiAgICA8R2FtZSBwcmlzb25lcnNPckd1YXJkcz17cHJpc29uZXJzT3JHdWFyZHN9XHJcbiAgICAgIGdhbWVpZD17Z2FtZWlkfVxyXG4gICAgICB3c21zZ3M9e3dzbXNnc31cclxuICAgICAgY2xpZW50PXtjbGllbnR9XHJcbiAgICAgIHJlbW92ZU1lc3NhZ2U9e3JlbW92ZU1lc3NhZ2V9XHJcbiAgICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBTcXVhcmUgPSAocHJvcHMpID0+IHtcclxuICAvLyBzcXVhcmV1c2VkYnksIHJpLCBjaSwgYywgb25DbGlja1xyXG4gIC8vIG5lZWQgc3F1YXJldXNlZGJ5IHRvIHBpY2sgY3NzIGNsYXNzTmFtZSBjb3JyZXNwb25kaW5nIHRvIHdobyBwbGF5ZWQgdGhlIHRpbGUgb24gdGhlIHNxdWFyZVxyXG4gIC8vIG5lZWQgcmksIGNpIHRvIGRpc3BsYXkgYWx0ZXJuYXRpbmcgY2hhcmFjdGVycyBvbiB1bnVzZWQgc3F1YXJlc1xyXG4gIC8vIG5lZWQgYyB0byByZXByZXNlbnQgd2hpY2ggdGlsZSBpcyBvbiB0aGUgc3F1YXJlLCBpZiBhbnlcclxuICAvLyBuZWVkIG9uQ2xpY2sgdG8gaGFuZGxlIHNxdWFyZSBjbGljayBhdCBhIGhpZ2hlciBsZXZlbFxyXG4gIC8vIG5lZWQgcmNkIHRvIGRpc3BsYXkgc2VsZWN0ZWQgZGlyZWN0aW9uIGFycm93IHdoZW4gYXBwcm9wcmlhdGVcclxuICBjb25zdCB1c2VkYnljbGFzcyA9XHJcbiAgICBwcm9wcy5zcXVhcmV1c2VkYnkgPT09IFwiUFwiXHJcbiAgICAgID8gXCJwYlNxdWFyZVVzZWRCeVByaXNvbmVyc1wiXHJcbiAgICAgIDogXCJwYlNxdWFyZVVzZWRCeUd1YXJkc1wiO1xyXG4gIGNvbnN0IHRkY2xhc3MgPVxyXG4gICAgcHJvcHMuYyAhPT0gXCIuXCJcclxuICAgICAgPyB1c2VkYnljbGFzc1xyXG4gICAgICA6IHByb3BzLnJjZFswXSA9PT0gcHJvcHMucmkgJiYgcHJvcHMucmNkWzFdID09PSBwcm9wcy5jaSAmJiBwcm9wcy5yY2RbMl0gPT09IFwiclwiXHJcbiAgICAgID8gXCJwYlNxdWFyZVJpZ2h0QXJyb3dcIlxyXG4gICAgICA6IHByb3BzLnJjZFswXSA9PT0gcHJvcHMucmkgJiYgcHJvcHMucmNkWzFdID09PSBwcm9wcy5jaSAmJiBwcm9wcy5yY2RbMl0gPT09IFwiZFwiXHJcbiAgICAgID8gXCJwYlNxdWFyZURvd25BcnJvd1wiXHJcbiAgICAgIDogcHJvcHMucmkgPT09IDcgJiYgcHJvcHMuY2kgPT09IDdcclxuICAgICAgPyBcInBiU3F1YXJlQ2VudGVyU3F1YXJlXCJcclxuICAgICAgOiAocHJvcHMucmkgPT09IDAgfHwgcHJvcHMucmkgPT09IDcgfHwgcHJvcHMucmkgPT09IDE0KSAmJlxyXG4gICAgICAgIChwcm9wcy5jaSA9PT0gMCB8fCBwcm9wcy5jaSA9PT0gNyB8fCBwcm9wcy5jaSA9PT0gMTQpXHJcbiAgICAgID8gXCJwYlNxdWFyZUVzY2FwZUhhdGNoXCJcclxuICAgICAgOiBwcm9wcy5yaSAlIDIgPT09IHByb3BzLmNpICUgMlxyXG4gICAgICA/IFwicGJTcXVhcmVcIlxyXG4gICAgICA6IFwicGJTcXVhcmUyXCI7XHJcbiAgY29uc3QgdGR2YWx1ZSA9XHJcbiAgICBwcm9wcy5jICE9PSBcIi5cIlxyXG4gICAgICA/IHByb3BzLmNcclxuICAgICAgOiB0ZGNsYXNzID09PSBcInBiU3F1YXJlUmlnaHRBcnJvd1wiXHJcbiAgICAgID8gXCLinqFcIlxyXG4gICAgICA6IHRkY2xhc3MgPT09IFwicGJTcXVhcmVEb3duQXJyb3dcIlxyXG4gICAgICA/IFwi4qyHXCJcclxuICAgICAgOiB0ZGNsYXNzID09PSBcInBiU3F1YXJlQ2VudGVyU3F1YXJlXCJcclxuICAgICAgPyBcIuKcsFwiXHJcbiAgICAgIDogdGRjbGFzcyA9PT0gXCJwYlNxdWFyZUVzY2FwZUhhdGNoXCJcclxuICAgICAgPyBcIvCfkqtcIlxyXG4gICAgICA6IHByb3BzLnJpICUgMiA9PT0gcHJvcHMuY2kgJSAyXHJcbiAgICAgID8gXCLimLlcIi8vXCLijpRcIlxyXG4gICAgICA6IFwi6pCVXCI7Ly9cIuKcplwiO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGRjbGFzc30gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIHt0ZHZhbHVlfVxyXG4gICAgPC9idXR0b24+XHJcbik7XHJcbn07XHJcblxyXG5jb25zdCBCb2FyZCA9ICh7IG9uQ2xpY2ssIHNxdWFyZXMsIHVzZWRieSwgcmNkIH0pID0+IHtcclxuICBjb25zdCByZW5kZXJTcXVhcmUgPSAocmksIGNpLCBjLCBzcXVhcmV1c2VkYnkpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0ZCBrZXk9e2BTcXVhcmUke3JpfS0ke2NpfWB9PlxyXG4gICAgICAgIDxTcXVhcmVcclxuICAgICAgICAgIGM9e2N9XHJcbiAgICAgICAgICBjaT17Y2l9XHJcbiAgICAgICAgICByaT17cml9XHJcbiAgICAgICAgICBzcXVhcmV1c2VkYnk9e3NxdWFyZXVzZWRieX1cclxuICAgICAgICAgIHJjZD17cmNkfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhyaSwgY2kpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyUm93ID0gKHJpKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dHIga2V5PXtgQm9hcmRSb3cke3JpfWB9IGNsYXNzTmFtZT1cInJvdyBwYlJvd1wiPlxyXG4gICAgICAgIHtzcXVhcmVzW3JpXS5tYXAoKGMsIGNpKSA9PiByZW5kZXJTcXVhcmUocmksIGNpLCBjLCB1c2VkYnlbcmldW2NpXSkpfVxyXG4gICAgICA8L3RyPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHRhYmxlIGNsYXNzTmFtZT1cInBiQm9hcmRcIj5cclxuICAgICAgPHRib2R5PntzcXVhcmVzLm1hcCgociwgcmkpID0+IHJlbmRlclJvdyhyaSkpfTwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBHYW1lID0gKHtwcmlzb25lcnNPckd1YXJkcywgZ2FtZWlkLCB3c21zZ3MsIGNsaWVudCwgcmVtb3ZlTWVzc2FnZX0pID0+IHtcclxuICBjb25zdCBbdGlsZXMsIHNldFRpbGVzXSA9IHVzZVN0YXRlKFsuLi5pbml0aWFsdGlsZXNdKTtcclxuICBjb25zdCBbcHRpbGVzLCBzZXRQdGlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtndGlsZXMsIHNldEd0aWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NxdWFyZXMsIHNldFNxdWFyZXNdID0gdXNlU3RhdGUoQXJyYXkoMTUpLmZpbGwoQXJyYXkoMTUpLmZpbGwoXCIuXCIpKSk7XHJcbiAgY29uc3QgW3VzZWRieSwgc2V0VXNlZGJ5XSA9IHVzZVN0YXRlKEFycmF5KDE1KS5maWxsKEFycmF5KDE1KS5maWxsKFwiXCIpKSk7XHJcbiAgY29uc3QgW3NlbGVjdGlvbiwgc2V0U2VsZWN0aW9uXSA9IHVzZVN0YXRlKC0xKTsgLy8gcmVsYXRpdmUgdG8gcmFjayBvZiBwbGF5ZXIgbWFraW5nIGEgcGxheVxyXG4gIGNvbnN0IFt3aG9zZXR1cm4sIHNldFdob3NldHVybl0gPSB1c2VTdGF0ZShcIlBcIik7IC8vIGdhbWUgc3RhcnRzIHdpdGggcHJpc29uZXJzIHBsYXlcclxuICBjb25zdCBbY3VycmVudGNvb3Jkcywgc2V0Q3VycmVudGNvb3Jkc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Jlc2N1ZXMsIHNldFJlc2N1ZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3JjZCwgc2V0UmNkXSA9IHVzZVN0YXRlKFs3LDcsXCJyXCJdKTsgLy8gZGVmYXVsdCB0byBzZWxlY3RpbmcgY2VudHJlIHNxdWFyZSBhbmQgcGxheWluZyB0byB0aGUgcmlnaHRcclxuICBjb25zdCBbc25hcHNob3QsIHNldFNuYXBzaG90XSA9IHVzZVN0YXRlKHtcclxuICAgIHNxdWFyZXM6IFsuLi5zcXVhcmVzXSxcclxuICAgIHVzZWRieTogWy4uLnVzZWRieV0sXHJcbiAgICBwdGlsZXM6IFsuLi5wdGlsZXNdLFxyXG4gICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIpIHtcclxuICAgICAgbGV0IHRlbXBQVGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgICAgbGV0IHRlbXBHVGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IHRlbXBUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICAgIHdoaWxlICh0ZW1wUFRpbGVzLmxlbmd0aCA8IDcpIHtcclxuICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRlbXBUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIHRlbXBQVGlsZXMucHVzaCh0ZW1wVGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIHRlbXBUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgICAgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRlbXBUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgIHRlbXBHVGlsZXMucHVzaCh0ZW1wVGlsZXNbcmFuZF0pO1xyXG4gICAgICAgIHRlbXBUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgdGVtcFBUaWxlcy5zb3J0KCk7XHJcbiAgICAgIHRlbXBHVGlsZXMuc29ydCgpO1xyXG4gICAgICBzZXRHdGlsZXModGVtcEdUaWxlcyk7XHJcbiAgICAgIHNldFB0aWxlcyh0ZW1wUFRpbGVzKTtcclxuICAgICAgc2V0VGlsZXModGVtcFRpbGVzKTtcclxuICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgIHNxdWFyZXM6IFsuLi5zcXVhcmVzXSxcclxuICAgICAgICB1c2VkYnk6IFsuLi51c2VkYnldLFxyXG4gICAgICAgIHB0aWxlczogWy4uLnRlbXBQVGlsZXNdLFxyXG4gICAgICAgIGd0aWxlczogWy4uLnRlbXBHVGlsZXNdICAgIFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbmRpbmcgZ2dkXCIpXHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgICAgZnVuYzogXCJnZ2RcIiAvLyBnZXQgZ2FtZSBkYXRhXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhdGNoIHt9XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgbXNnID0gd3Ntc2dzWzBdO1xyXG4gICAgaWYgKG1zZykgcHJvY2Vzc01lc3NhZ2UobXNnKTtcclxuICAgICAgICBcclxuICB9LFt3c21zZ3NdKVxyXG5cclxuICBmdW5jdGlvbiBwcm9jZXNzTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpOyAvLyB3YXMgbWVzc2FnZS5kYXRhXHJcbiAgICBpZiAobWVzc2FnZURhdGEuZ2FtZWlkID09PSBnYW1laWQgJiYgbWVzc2FnZURhdGEudHlwZSA9PT0gXCJwYlwiKSB7IC8vIFRoaXMgaW5zdGFuY2Ugb2YgYSBwcmlzb24gYnJlYWsgZ2FtZVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJyZXF1ZXN0Z2FtZWRhdGFcIiAmJiBtZXNzYWdlRGF0YS5yZXF1ZXN0b3IgIT09IHByaXNvbmVyc09yR3VhcmRzKSB7IC8vIE9wcG9uZW50IHJlcXVlc3RlZCBnYW1lIGluZm9cclxuICAgICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgICBmdW5jOiBcInByb3ZpZGVnYW1lZGF0YVwiLCAvLyBwcm92aWRlIGdhbWUgZGF0YVxyXG4gICAgICAgICAgICBzZW5kZXI6IHByaXNvbmVyc09yR3VhcmRzLCAvLyB3aG8gc2VudCB0aGUgZGF0YVxyXG4gICAgICAgICAgICB0aWxlczogdGlsZXMsXHJcbiAgICAgICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsXHJcbiAgICAgICAgICAgIHB0aWxlczogcHRpbGVzLFxyXG4gICAgICAgICAgICBndGlsZXM6IGd0aWxlcyxcclxuICAgICAgICAgICAgdXNlZGJ5OiB1c2VkYnksXHJcbiAgICAgICAgICAgIHdob3NldHVybjogd2hvc2V0dXJuLFxyXG4gICAgICAgICAgICBzZWxlY3Rpb246IHNlbGVjdGlvbixcclxuICAgICAgICAgICAgY3VycmVudGNvb3JkczogY3VycmVudGNvb3JkcyxcclxuICAgICAgICAgICAgc25hcHNob3Q6IHNuYXBzaG90LFxyXG4gICAgICAgICAgICByZXNjdWVzOiByZXNjdWVzXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwicHJvdmlkZWdhbWVkYXRhXCIgJiYgbWVzc2FnZURhdGEuc2VuZGVyICE9PSBwcmlzb25lcnNPckd1YXJkcykgeyAvLyBvcHBvbmVudCBwcm92aWRlZCBnYW1lIGRhdGFcclxuICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgc2V0U3F1YXJlcyhtZXNzYWdlRGF0YS5zcXVhcmVzKTtcclxuICAgICAgICBzZXRQdGlsZXMobWVzc2FnZURhdGEucHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobWVzc2FnZURhdGEuZ3RpbGVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobWVzc2FnZURhdGEudXNlZGJ5KTtcclxuICAgICAgICBzZXRXaG9zZXR1cm4obWVzc2FnZURhdGEud2hvc2V0dXJuKTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24obWVzc2FnZURhdGEuc2VsZWN0aW9uKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKG1lc3NhZ2VEYXRhLmN1cnJlbnRjb29yZHMpO1xyXG4gICAgICAgIHNldFNuYXBzaG90KG1lc3NhZ2VEYXRhLnNuYXBzaG90KTtcclxuICAgICAgICBzZXRSZXNjdWVzKG1lc3NhZ2VEYXRhLnJlc2N1ZXMpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSB0aGV5IHNlbmQgZ2dkLCBhbmQgcHJpc29uZXIgcGlja3MgaXQgdXAgYW5kIHNlbmRzIHNnZCwgdGhlbiBndWFyZHMgcGljayB0aGF0IHVwIGFuZCB0YWtlIHRoZSBkYXRhXHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImdnZFwiICYmIHByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIikgeyAvLyBnZXQgZ2FtZSBkYXRhIChzZW50IGJ5IGd1YXJkcywgcHJpc29uZXJzIHJlc3BvbmQgaGVyZSlcclxuICAgICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgICBmdW5jOiBcInNnZFwiLCAvLyBzZW5kIGdhbWUgZGF0YVxyXG4gICAgICAgICAgICB0aWxlczogdGlsZXMsXHJcbiAgICAgICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsXHJcbiAgICAgICAgICAgIHB0aWxlczogcHRpbGVzLFxyXG4gICAgICAgICAgICBndGlsZXM6IGd0aWxlcyxcclxuICAgICAgICAgICAgdXNlZGJ5OiB1c2VkYnksXHJcbiAgICAgICAgICAgIHdob3NldHVybjogd2hvc2V0dXJuLFxyXG4gICAgICAgICAgICBzZWxlY3Rpb246IHNlbGVjdGlvbixcclxuICAgICAgICAgICAgY3VycmVudGNvb3JkczogY3VycmVudGNvb3JkcyxcclxuICAgICAgICAgICAgc25hcHNob3Q6IHNuYXBzaG90LFxyXG4gICAgICAgICAgICByZXNjdWVzOiByZXNjdWVzIC8vIG1heSBoYXZlIHJlc2N1ZWQgYW5vdGhlciBwcmlzb25lclxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInNnZFwiICYmIHByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIikgeyAvLyBzZW5kIGdhbWUgZGF0YSAocHJpc29uZXJzIHNlbnQgaXQsIGd1YXJkcyBub3cgZ2V0IGl0KVxyXG4gICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgIHNldFB0aWxlcyhtZXNzYWdlRGF0YS5wdGlsZXMpO1xyXG4gICAgICAgIHNldEd0aWxlcyhtZXNzYWdlRGF0YS5ndGlsZXMpO1xyXG4gICAgICAgIHNldFVzZWRieShtZXNzYWdlRGF0YS51c2VkYnkpO1xyXG4gICAgICAgIHNldFdob3NldHVybihtZXNzYWdlRGF0YS53aG9zZXR1cm4pO1xyXG4gICAgICAgIHNldFNlbGVjdGlvbihtZXNzYWdlRGF0YS5zZWxlY3Rpb24pO1xyXG4gICAgICAgIHNldEN1cnJlbnRjb29yZHMobWVzc2FnZURhdGEuY3VycmVudGNvb3Jkcyk7XHJcbiAgICAgICAgc2V0U25hcHNob3QobWVzc2FnZURhdGEuc25hcHNob3QpO1xyXG4gICAgICAgIHNldFJlc2N1ZXMobWVzc2FnZURhdGEucmVzY3Vlcyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiZXB0XCIpIHsgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgc2V0V2hvc2V0dXJuKFwiR1wiKTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgICAgIHNldFJjZCgtMSwtMSxcIlwiKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgIHNldFVzZWRieShtZXNzYWdlRGF0YS51c2VkYnkpO1xyXG4gICAgICAgIHNldFB0aWxlcyhtZXNzYWdlRGF0YS5wdGlsZXMpO1xyXG4gICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICBzZXRSZXNjdWVzKG1lc3NhZ2VEYXRhLnJlc2N1ZXMpO1xyXG4gICAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICAgIHNxdWFyZXM6IFsuLi5tZXNzYWdlRGF0YS5zcXVhcmVzXSxcclxuICAgICAgICAgIHVzZWRieTogWy4uLm1lc3NhZ2VEYXRhLnVzZWRieV0sXHJcbiAgICAgICAgICBwdGlsZXM6IFsuLi5tZXNzYWdlRGF0YS5wdGlsZXNdLFxyXG4gICAgICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICAgICAgICB9KTsgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiZWd0XCIpIHsgLy8gZW5kIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgc2V0V2hvc2V0dXJuKFwiUFwiKTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgICAgIHNldFJjZCgtMSwtMSxcIlwiKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgIHNldFVzZWRieShtZXNzYWdlRGF0YS51c2VkYnkpO1xyXG4gICAgICAgIHNldEd0aWxlcyhtZXNzYWdlRGF0YS5ndGlsZXMpO1xyXG4gICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgICBzcXVhcmVzOiBbLi4ubWVzc2FnZURhdGEuc3F1YXJlc10sXHJcbiAgICAgICAgICB1c2VkYnk6IFsuLi5tZXNzYWdlRGF0YS51c2VkYnldLFxyXG4gICAgICAgICAgcHRpbGVzOiBbLi4ucHRpbGVzXSxcclxuICAgICAgICAgIGd0aWxlczogWy4uLm1lc3NhZ2VEYXRhLmd0aWxlc10sXHJcbiAgICAgICAgfSk7ICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVNZXNzYWdlKG1lc3NhZ2UpO1xyXG4gIH1cclxuICBcclxuICAvLyBDYWxsaW5nIHNldFNlbGVjdGlvbiAoZnJvbSBoYW5kbGVLZXlEb3duKSB0aGVuIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2sgZG9lcyBub3QgbGV0IGl0IHJlY29nbml6ZSBzZWxlY3Rpb24gd2l0aCB0aGUgbmV3IHZhbHVlXHJcbiAgLy8gU28gSSBwYXNzIG5ld1NlbGVjdGlvbiB3aGVuIEkgd2FudCB0byBhbHNvIHNldCBpdCwgb3RoZXJ3aXNlIEkgcGFzcyAtMSB0byBpbnN0cnVjdCBpdCB0byB1c2UgY3VycmVudCB2YWx1ZSBvZiBzZWxlY3Rpb25cclxuICAvLyBBbHNvIHBhc3NpbmcgbmV3UmNkXHJcbiAgY29uc3QgaGFuZGxlQm9hcmRTcXVhcmVDbGljayA9IChyaSwgY2ksIG5ld1NlbGVjdGlvbiwgbmV3UmNkKSA9PiB7XHJcbiAgICBsZXQgbmV3U3F1YXJlcyA9IFsuLi5zcXVhcmVzXTtcclxuICAgIGxldCBuZXdVc2VkYnkgPSBbLi4udXNlZGJ5XTtcclxuICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgIGxldCBuZXdSb3cgPSBbLi4uc3F1YXJlc1tyaV1dO1xyXG4gICAgbGV0IHNxdWFyZXZhbHVlID0gc3F1YXJlc1tyaV1bY2ldO1xyXG4gICAgbGV0IG5ld0N1cnJlbnRjb29yZHMgPSBbLi4uY3VycmVudGNvb3Jkc107XHJcbiAgICBsZXQgY29vcmQgPSBTdHJpbmcocmkpICsgXCItXCIgKyBTdHJpbmcoY2kpO1xyXG4gICAgbGV0IGNjaSA9IGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCk7XHJcbiAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMSkge1xyXG4gICAgICBuZXdTZWxlY3Rpb24gPSBzZWxlY3Rpb247XHJcbiAgICAgIG5ld1JjZCA9IHJjZDtcclxuICAgIH1cclxuICAgIGlmIChuZXdTZWxlY3Rpb24gPiAtMSAmJiBzcXVhcmV2YWx1ZSA9PT0gXCIuXCIpIHsgLy8gdGlsZSBpcyBzZWxlY3RlZCBmcm9tIHJhY2sgYW5kIGNsaWNrZWQgc3F1YXJlIGlzIG5vdCB1c2VkIHlldFxyXG4gICAgICBuZXdSb3dbY2ldID1cclxuICAgICAgICB3aG9zZXR1cm4gPT09IFwiUFwiID8gbmV3UHRpbGVzW25ld1NlbGVjdGlvbl0gOiBuZXdHdGlsZXNbbmV3U2VsZWN0aW9uXTtcclxuICAgICAgbmV3U3F1YXJlc1tyaV0gPSBbLi4ubmV3Um93XTtcclxuICAgICAgd2hvc2V0dXJuID09PSBcIlBcIlxyXG4gICAgICAgID8gbmV3UHRpbGVzLnNwbGljZShuZXdTZWxlY3Rpb24sIDEpXHJcbiAgICAgICAgOiBuZXdHdGlsZXMuc3BsaWNlKG5ld1NlbGVjdGlvbiwgMSk7XHJcbiAgICAgIGxldCBuZXdVc2VkYnlSb3cgPSBbLi4ubmV3VXNlZGJ5W3JpXV07XHJcbiAgICAgIG5ld1VzZWRieVJvd1tjaV0gPSB3aG9zZXR1cm47XHJcbiAgICAgIG5ld1VzZWRieVtyaV0gPSBbLi4ubmV3VXNlZGJ5Um93XTtcclxuICAgICAgaWYgKHdob3NldHVybiA9PT0gXCJQXCIgJiYgbmV3U2VsZWN0aW9uID09PSBuZXdQdGlsZXMubGVuZ3RoKSB7IFxyXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbiAtIDFcclxuICAgICAgfVxyXG4gICAgICBpZiAod2hvc2V0dXJuID09PSBcIkdcIiAmJiBuZXdTZWxlY3Rpb24gPT09IG5ld0d0aWxlcy5sZW5ndGgpIHsgXHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3U2VsZWN0aW9uIC0gMVxyXG4gICAgICB9XHJcbiAgICAgIHNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24pO1xyXG4gICAgICBzZXRTcXVhcmVzKG5ld1NxdWFyZXMpO1xyXG4gICAgICBzZXRVc2VkYnkobmV3VXNlZGJ5KTtcclxuICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKFsuLi5jdXJyZW50Y29vcmRzLCBjb29yZF0pO1xyXG4gICAgICBzZXRSY2QobmV3UmNkKTsgLy8gbGV0IGtleSBkb3duIGhhbmRsZXIgZmlndXJlIGl0IG91dFxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoY2NpID4gLTEpIHsgLy8gY2xpY2tlZCBzcXVhcmUgaGFzIGEgdGlsZSBvbiBpdCBmcm9tIHRoZSBjdXJyZW50IG1vdmUgaW4gcHJvZ3Jlc3NcclxuICAgICAgd2hvc2V0dXJuID09PSBcIlBcIlxyXG4gICAgICAgID8gbmV3UHRpbGVzLnB1c2goc3F1YXJldmFsdWUpXHJcbiAgICAgICAgOiBuZXdHdGlsZXMucHVzaChzcXVhcmV2YWx1ZSk7XHJcbiAgICAgIGxldCBuZXdSb3cgPSBbLi4ubmV3U3F1YXJlc1tyaV1dO1xyXG4gICAgICBuZXdSb3dbY2ldID0gXCIuXCI7XHJcbiAgICAgIG5ld1NxdWFyZXNbcmldID0gWy4uLm5ld1Jvd107XHJcbiAgICAgIGxldCBuZXdVc2VkYnlSb3cgPSBbLi4ubmV3VXNlZGJ5W3JpXV07XHJcbiAgICAgIG5ld1VzZWRieVJvd1tjaV0gPSBcIlwiO1xyXG4gICAgICBuZXdVc2VkYnlbcmldID0gWy4uLm5ld1VzZWRieVJvd107XHJcbiAgICAgIHNldFNlbGVjdGlvbihcclxuICAgICAgICB3aG9zZXR1cm4gPT09IFwiUFwiID8gbmV3UHRpbGVzLmxlbmd0aCAtIDEgOiBuZXdHdGlsZXMubGVuZ3RoIC0gMVxyXG4gICAgICApO1xyXG4gICAgICBuZXdDdXJyZW50Y29vcmRzLnNwbGljZShjY2ksIDEpO1xyXG5cclxuICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKTtcclxuICAgICAgc2V0VXNlZGJ5KG5ld1VzZWRieSk7XHJcbiAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgc2V0Q3VycmVudGNvb3JkcyhuZXdDdXJyZW50Y29vcmRzKTtcclxuICAgICAgc2V0UmNkKC0xLC0xLFwiXCIpOyAvLyBsZXQga2V5IGRvd24gaGFuZGxlciBmaWd1cmUgaXQgb3V0XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIFRoZXkgZGlkbid0IGNsaWNrIGEgc3F1YXJlIHRvIHBsYWNlIGEgc2VsZWN0ZWQgdGlsZSB0aGVyZVxyXG4gICAgLy8gVGhleSBkaWRuJ3QgY2xpY2sgYSBzcXVhcmUgdG8gcmVtb3ZlIGFuIGV4aXN0aW5nIHRpbGVcclxuICAgIGlmIChzcXVhcmVzW3JpXVtjaV0gPT09IFwiLlwiKSB7XHJcbiAgICAgIC8vIFRoZXJlIGlzIG5vdGhpbmcgb24gdGhlIHNxdWFyZSBzbyB0aGV5IGFyZSBwaWNraW5nIHdoZXJlIHRvIHBsYWNlIHRoZSBuZXh0IHRpbGUgdmlhIGtleWJvYXJkXHJcbiAgICAgIGxldCBuZXdEaXJlY3Rpb24gPSByY2RbMF0gIT09IHJpIHx8IHJjZFsxXSAhPT0gY2kgPyBcInJcIiA6IC8vY2xpY2sgbmV3IHNxdWFyZSwgc3RhcnQgd2l0aCBcInJcIlxyXG4gICAgICAgcmNkWzJdID09PSBcInJcIiA/IFwiZFwiIDogLy9jbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyBcInJcIiwgY2hhbmdlIHRvIFwiZFwiXHJcbiAgICAgICByY2RbMl0gPT09IFwiZFwiID8gXCJcIiA6IC8vY2xpY2sgc2FtZSBzcXVhcmUgdGhhdCB3YXMgXCJkXCIsIGNoYW5nZSB0byBcIlwiXHJcbiAgICAgICBcInJcIjsgLy8gY2xpY2sgc2FtZSBzcXVhcmUgdGhhdCB3YXMgXCJcIiwgY2hhbmdlIHRvIFwiclwiXHJcbiAgICAgIG5ld1JjZCA9IFtyaSxjaSxuZXdEaXJlY3Rpb25dO1xyXG4gICAgICBzZXRSY2QobmV3UmNkKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByaXNvbmVyVGlsZUNsaWNrID0gKHRpbGVpbmRleCkgPT4ge1xyXG4gICAgLy8gdGhlIGluZGV4IG9mIHB0aWxlc1xyXG4gICAgaWYgKHdob3NldHVybiA9PT0gXCJQXCIpIHtcclxuICAgICAgc2V0U2VsZWN0aW9uKHRpbGVpbmRleCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIkl0IGlzIG5vdCB5b3VyIHR1cm5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlR3VhcmRUaWxlQ2xpY2sgPSAodGlsZWluZGV4KSA9PiB7XHJcbiAgICAvLyB0aGUgaW5kZXggb2YgZ3RpbGVzXHJcbiAgICBpZiAod2hvc2V0dXJuID09PSBcIkdcIikge1xyXG4gICAgICBzZXRTZWxlY3Rpb24odGlsZWluZGV4KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwiSXQgaXMgbm90IHlvdXIgdHVyblwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBlbmRQcmlzb25lcnNUdXJuID0gKCkgPT4ge1xyXG4gICAgaWYgKCFpc1BsYXlWYWxpZCgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBuZXdSZXNjdWVzID0gcmVzY3VlcztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudGNvb3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoZXNjYXBlaGF0Y2hlcy5pbmRleE9mKGN1cnJlbnRjb29yZHNbaV0pID4gLTEpIHtcclxuICAgICAgICBuZXdSZXNjdWVzID0gbmV3UmVzY3VlcyArIDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICB3aGlsZSAobmV3UHRpbGVzLmxlbmd0aCA8IDcgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgIG5ld1B0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgfVxyXG4gICAgbmV3UHRpbGVzLnNvcnQoKTtcclxuICAgIHNldFdob3NldHVybihcIkdcIik7XHJcbiAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgIHNldFJlc2N1ZXMobmV3UmVzY3Vlcyk7XHJcbiAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgIHNxdWFyZXM6IFsuLi5zcXVhcmVzXSxcclxuICAgICAgdXNlZGJ5OiBbLi4udXNlZGJ5XSxcclxuICAgICAgcHRpbGVzOiBbLi4ubmV3UHRpbGVzXSxcclxuICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlcHRcIiwgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgc3F1YXJlczogc3F1YXJlcywgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICB1c2VkYnk6IHVzZWRieSwgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICBwdGlsZXM6IG5ld1B0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgcHJpc29uZXJzIHJhY2tcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICByZXNjdWVzOiBuZXdSZXNjdWVzIC8vIG1heSBoYXZlIHJlc2N1ZWQgYW5vdGhlciBwcmlzb25lclxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBlbmRHdWFyZHNUdXJuID0gKCkgPT4ge1xyXG4gICAgaWYgKCFpc1BsYXlWYWxpZCgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICB3aGlsZSAobmV3R3RpbGVzLmxlbmd0aCA8IDcgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgIG5ld0d0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgfVxyXG4gICAgbmV3R3RpbGVzLnNvcnQoKTtcclxuICAgIGxldCBzbmFwc3F1YXJlcyA9IFsuLi5zcXVhcmVzXTtcclxuICAgIGxldCBzbmFwdXNlZGJ5ID0gWy4uLnVzZWRieV07XHJcbiAgICBsZXQgc25hcHB0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgbGV0IHNuYXBndGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgIHNldFdob3NldHVybihcIlBcIik7XHJcbiAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgc3F1YXJlczogc25hcHNxdWFyZXMsXHJcbiAgICAgIHVzZWRieTogc25hcHVzZWRieSxcclxuICAgICAgcHRpbGVzOiBzbmFwcHRpbGVzLFxyXG4gICAgICBndGlsZXM6IHNuYXBndGlsZXMsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgdXNlZGJ5OiB1c2VkYnksIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgZ3RpbGVzOiBuZXdHdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIGd1YXJkcyByYWNrXHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgY29uc3Qgc3dhcFByaXNvbmVyc1RpbGVzID0gKCkgPT4ge1xyXG4gICAgaWYgKHRpbGVzLmxlbmd0aCA8IDcpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiTmVlZCA3IGluIHRoZSBiYWcgdG8gZXhjaGFuZ2VcIilcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IG5ld1B0aWxlcyA9IFtdO1xyXG4gICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgIHdoaWxlIChuZXdQdGlsZXMubGVuZ3RoIDwgNyAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgbmV3UHRpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICB9XHJcbiAgICBuZXdQdGlsZXMuc29ydCgpO1xyXG4gICAgbmV3VGlsZXMgPSBbLi4ubmV3VGlsZXMsIC4uLnNuYXBzaG90LnB0aWxlc107XHJcbiAgICBuZXdUaWxlcy5zb3J0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkV4Y2hhbmdlIHB0aWxlc1wiKVxyXG4gICAgY29uc29sZS5sb2coc25hcHNob3QucHRpbGVzKVxyXG4gICAgY29uc29sZS5sb2cocHRpbGVzKVxyXG4gICAgY29uc29sZS5sb2cobmV3UHRpbGVzKVxyXG4gICAgY29uc29sZS5sb2codGlsZXMpXHJcbiAgICBjb25zb2xlLmxvZyhuZXdUaWxlcylcclxuICAgIHNldFNxdWFyZXMoWy4uLnNuYXBzaG90LnNxdWFyZXNdKTtcclxuICAgIHNldFVzZWRieShbLi4uc25hcHNob3QudXNlZGJ5XSk7XHJcbiAgICBzZXRXaG9zZXR1cm4oXCJHXCIpO1xyXG4gICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgIHNxdWFyZXM6IFsuLi5zbmFwc2hvdC5zcXVhcmVzXSxcclxuICAgICAgdXNlZGJ5OiBbLi4uc25hcHNob3QudXNlZGJ5XSxcclxuICAgICAgcHRpbGVzOiBbLi4ubmV3UHRpbGVzXSxcclxuICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlcHRcIiwgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgc3F1YXJlczogc25hcHNob3Quc3F1YXJlcywgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgcHRpbGVzOiBuZXdQdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgcmVzY3VlczogcmVzY3VlcyAvLyBubyByZXNjdWVzIG9uIGFuIGV4Y2hhbmdlXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgY29uc3Qgc3dhcEd1YXJkc1RpbGVzID0gKCkgPT4ge1xyXG4gICAgaWYgKHRpbGVzLmxlbmd0aCA8IDcpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiTmVlZCA3IGluIHRoZSBiYWcgdG8gZXhjaGFuZ2VcIilcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IG5ld0d0aWxlcyA9IFtdO1xyXG4gICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgIHdoaWxlIChuZXdHdGlsZXMubGVuZ3RoIDwgNyAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgbmV3R3RpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICB9XHJcbiAgICBuZXdHdGlsZXMuc29ydCgpO1xyXG4gICAgbmV3VGlsZXMgPSBbLi4ubmV3VGlsZXMsIC4uLnNuYXBzaG90Lmd0aWxlc107XHJcbiAgICBuZXdUaWxlcy5zb3J0KCk7XHJcbiAgICBzZXRTcXVhcmVzKFsuLi5zbmFwc2hvdC5zcXVhcmVzXSk7XHJcbiAgICBzZXRVc2VkYnkoWy4uLnNuYXBzaG90LnVzZWRieV0pO1xyXG4gICAgc2V0V2hvc2V0dXJuKFwiUFwiKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICBzcXVhcmVzOiBbLi4uc25hcHNob3Quc3F1YXJlc10sXHJcbiAgICAgIHVzZWRieTogWy4uLnNuYXBzaG90LnVzZWRieV0sXHJcbiAgICAgIHB0aWxlczogWy4uLnB0aWxlc10sXHJcbiAgICAgIGd0aWxlczogWy4uLm5ld0d0aWxlc10sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICB1c2VkYnk6IHNuYXBzaG90LnVzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgIGd0aWxlczogbmV3R3RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcyAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzUGxheVZhbGlkKCkge1xyXG4gICAgaWYgKHNxdWFyZXNbN11bN10gPT09IFwiLlwiKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIkZpcnN0IHBsYXkgbXVzdCBoaXQgY2VudGVyIHNxdWFyZVwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IGxvd3JvdyA9IDE1O1xyXG4gICAgbGV0IGhpZ2hyb3cgPSAtMTtcclxuICAgIGxldCBsb3djb2wgPSAxNTtcclxuICAgIGxldCBoaWdoY29sID0gLTE7XHJcbiAgICBmb3IgKHZhciByPTA7IHIgPCAxNTsgKytyKSB7XHJcbiAgICAgIGZvciAodmFyIGM9MDsgYyA8IDE1OyArK2MpIHtcclxuICAgICAgICBpZiAoc3F1YXJlc1tyXVtjXSAhPT0gXCIuXCIpIHtcclxuICAgICAgICAgIGlmICghKHIgPiAwICYmIHNxdWFyZXNbci0xXVtjXSAhPT0gXCIuXCIpICYmXHJcbiAgICAgICAgICAgIShjID4gMCAmJiBzcXVhcmVzW3JdW2MtMV0gIT09IFwiLlwiKSAmJlxyXG4gICAgICAgICAgICEociA8IDE0ICYmIHNxdWFyZXNbcisxXVtjXSAhPT0gXCIuXCIpICYmXHJcbiAgICAgICAgICAgIShjIDwgMTQgJiYgc3F1YXJlc1tyXVtjKzFdICE9PSBcIi5cIilcclxuICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiRWFjaCBwbGF5ZWQgdGlsZSBtdXN0IGJlIHBhcnQgb2YgYSB3b3JkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIGlmIChzbmFwc2hvdC5zcXVhcmVzW3JdW2NdID09PSBcIi5cIikge1xyXG4gICAgICAgICAgICAgLy8gVGhpcyBzcXVhcmUgd2FzIHBsYXllZCBvbiB0aGlzIHR1cm5cclxuICAgICAgICAgICAgIGlmIChyIDwgbG93cm93KSB7IGxvd3JvdyA9IHI7fVxyXG4gICAgICAgICAgICAgaWYgKHIgPiBoaWdocm93KSB7IGhpZ2hyb3cgPSByO31cclxuICAgICAgICAgICAgIGlmIChjIDwgbG93Y29sKSB7IGxvd2NvbCA9IGM7fVxyXG4gICAgICAgICAgICAgaWYgKGMgPiBoaWdoY29sKSB7IGhpZ2hjb2wgPSBjO31cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChsb3dyb3cgPT09IDE1KSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIllvdSBkaWRuJ3QgcGxheSBhbnkgdGlsZXNcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChsb3dyb3cgIT09IGhpZ2hyb3cgJiYgbG93Y29sICE9PSBoaWdoY29sKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIlRpbGVzIHBsYXllZCBtdXN0IGJlIGluIGEgc3RyYWlnaHQgbGluZVwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IHBsYXl0aHJ1ID0gZmFsc2U7XHJcbiAgICBsZXQgaG9va21hZGUgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIHIgPSBsb3dyb3c7IHIgPD0gaGlnaHJvdzsgKytyKSB7XHJcbiAgICAgIGZvciAodmFyIGMgPSBsb3djb2w7IGMgPD0gaGlnaGNvbDsgKytjKSB7XHJcbiAgICAgICAgaWYgKHNxdWFyZXNbcl1bY10gPT09IFwiLlwiKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJUaGVyZSBpcyBhIGdhcCBpbiB5b3VyIHdvcmRcIik7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzbmFwc2hvdC5zcXVhcmVzW3JdW2NdICE9PSBcIi5cIikge1xyXG4gICAgICAgICAgcGxheXRocnUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIHIgPiAwICYmIHNxdWFyZXNbci0xXVtjXSAhPT0gXCIuXCIpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiByIDwgMTQgJiYgc3F1YXJlc1tyKzFdW2NdICE9PSBcIi5cIikgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGMgPiAwICYmIHNxdWFyZXNbcl1bYy0xXSAhPT0gXCIuXCIpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBjIDwgMTQgJiYgc3F1YXJlc1tyXVtjKzFdICE9PSBcIi5cIikgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gQ2hlY2sgcGxheSB0byBvciBmcm9tIGEgdGlsZSAocGxheSB0aHJvdWdoIGJ1dCBub3QgZWl0aGVyIHNpZGUpXHJcbiAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIGxvd2NvbCA+IDAgJiYgc25hcHNob3Quc3F1YXJlc1tsb3dyb3ddW2xvd2NvbC0xXSAhPT0gXCIuXCIpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIGhpZ2hjb2wgPCAxNCAmJiBzbmFwc2hvdC5zcXVhcmVzW2xvd3Jvd11baGlnaGNvbCsxXSAhPT0gXCIuXCIpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGxvd3JvdyA+IDAgJiYgc25hcHNob3Quc3F1YXJlc1tsb3dyb3ctMV1bbG93Y29sXSAhPT0gXCIuXCIpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGhpZ2hyb3cgPCAxNCAmJiBzbmFwc2hvdC5zcXVhcmVzW2hpZ2hyb3crMV1bbG93Y29sXSAhPT0gXCIuXCIpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAoIXBsYXl0aHJ1ICYmICFob29rbWFkZSAmJiBzbmFwc2hvdC5zcXVhcmVzWzddWzddICE9PSBcIi5cIikge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJXb3JkcyBtdXN0IGJlIGNvbm5lY3RlZFwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZWNhbGxUaWxlcyA9ICgpID0+IHtcclxuICAgIHNldFNxdWFyZXMoWy4uLnNuYXBzaG90LnNxdWFyZXNdKTtcclxuICAgIHNldFVzZWRieShbLi4uc25hcHNob3QudXNlZGJ5XSk7XHJcbiAgICBzZXRQdGlsZXMoWy4uLnNuYXBzaG90LnB0aWxlc10pO1xyXG4gICAgc2V0R3RpbGVzKFsuLi5zbmFwc2hvdC5ndGlsZXNdKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwcmlzb25lclBhc3MgPSAoKSA9PiB7XHJcbiAgICByZWNhbGxUaWxlcygpOyAvLyBJbiBjYXNlIHRoZXkgcHV0IHNvbWUgdGlsZXMgb24gdGhlIGJvYXJkIGJlZm9yZSBjbGlja2luZyBQYXNzXHJcbiAgICBzZXRXaG9zZXR1cm4oXCJHXCIpO1xyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVwdFwiLCAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICBzcXVhcmVzOiBzbmFwc2hvdC5zcXVhcmVzLCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiBzcXVhcmVzXHJcbiAgICAgICAgdXNlZGJ5OiBzbmFwc2hvdC51c2VkYnksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHVzZWQgYnlcclxuICAgICAgICBwdGlsZXM6IHNuYXBzaG90LnB0aWxlcywgLy8gcHJpc29uZXJzIHJhY2sgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICB0aWxlczogdGlsZXMsIC8vIHRpbGUgcG9vbCBkaWQgbm90IGNoYW5nZVxyXG4gICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXMgLy8gbm8gcmVzY3VlcyBvbiBhIHBhc3NcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBndWFyZHNQYXNzID0gKCkgPT4ge1xyXG4gICAgcmVjYWxsVGlsZXMoKTsgLy8gSW4gY2FzZSB0aGV5IHB1dCBzb21lIHRpbGVzIG9uIHRoZSBib2FyZCBiZWZvcmUgY2xpY2tpbmcgUGFzc1xyXG4gICAgc2V0V2hvc2V0dXJuKFwiUFwiKTtcclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlZ3RcIiwgLy8gZW5kIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgc3F1YXJlczogc25hcHNob3Quc3F1YXJlcywgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgZ3RpbGVzOiBzbmFwc2hvdC5ndGlsZXMsIC8vIGd1YXJkcyByYWNrIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgdGlsZXM6IHRpbGVzIC8vIHRpbGUgcG9vbCBkaWQgbm90IGNoYW5nZVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlcXVlc3RHYW1lRGF0YSA9IChwbGF5ZXJ0eXBlKSA9PiB7XHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwicmVxdWVzdGdhbWVkYXRhXCIsIC8vIHJlcXVlc3QgZ2FtZSBkYXRhXHJcbiAgICAgICAgcmVxdWVzdG9yOiBwcmlzb25lcnNPckd1YXJkc1xyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChwcmlzb25lcnNPckd1YXJkcyAhPT0gd2hvc2V0dXJuKSB7cmV0dXJuO31cclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICB3aG9zZXR1cm4gPT09IFwiUFwiID8gZW5kUHJpc29uZXJzVHVybigpIDogZW5kR3VhcmRzVHVybigpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgbGV0dGVydGVzdCA9IC9eW0EtWmEtelxcP10kLzsgLy8gc2luZ2xlIGxldHRlciBvciBxdWVzdGlvbiBtYXJrIGtleSBwcmVzc2VkXHJcbiAgICBpZiAoZXZlbnQua2V5Lm1hdGNoKGxldHRlcnRlc3QpKSB7XHJcbiAgICAgIGxldCBsZXR0ZXIgPSBldmVudC5rZXkudG9VcHBlckNhc2UoKTtcclxuICAgICAgbGV0IHJhY2sgPSB3aG9zZXR1cm4gPT09IFwiUFwiID8gcHRpbGVzIDogZ3RpbGVzO1xyXG4gICAgICBsZXQgbmV3U2VsZWN0aW9uID0gcmFjay5pbmRleE9mKGxldHRlcik7XHJcbiAgICAgIGlmIChuZXdTZWxlY3Rpb24gPiAtMSkgeyAvLyBQcmVzc2VkIGxldHRlciBpcyBvbiB0aGUgcmFja1xyXG4gICAgICAgIGxldCByb3cgPSByY2RbMF07XHJcbiAgICAgICAgbGV0IGNvbCA9IHJjZFsxXTtcclxuICAgICAgICBsZXQgZGlyID0gcmNkWzJdO1xyXG4gICAgICAgIGlmIChyb3cgPi0xICYmIGNvbCA+IC0xICYmIGRpciAhPT0gXCJcIikgeyAvLyByb3csIGNvbCwgZGlyIGFyZSBzZXQgdG8gYWNjZXB0IGtleXN0cm9rZVxyXG4gICAgICAgICAgLy8gTmVlZCB0byBmaWd1cmUgb3V0IG5leHQgc3FhdXJlIHRvIGF1dG8tcGxhY2UgYSB0aWxlXHJcbiAgICAgICAgICBsZXQgbmV3UmNkID0gcmNkO1xyXG4gICAgICAgICAgaWYgKGRpciA9PT0gXCJyXCIpIHsgLy8gcGxheWluZyByaWdodHdhcmRzXHJcbiAgICAgICAgICAgIGxldCBuZXdjID0gLTE7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGMgPSBjb2w7IGMgPCAxNSAmJiBuZXdjID09PSAtMTsgKytjKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHNxdWFyZXNbcm93XVtjXSA9PT0gXCIuXCIpIHtuZXdjID0gYzt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5ld2MgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgbmV3UmNkID0gWy0xLC0xLFwiXCJdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG5ld1JjZCA9IFtyb3csIG5ld2MsIFwiclwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJvdyxjb2wsbmV3U2VsZWN0aW9uLG5ld1JjZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChkaXIgPT09IFwiZFwiKSB7IC8vIHBsYXlpbmcgZG93bndhcmRzXHJcbiAgICAgICAgICAgIGxldCBuZXdyID0gLTE7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHIgPSByb3c7IHIgPCAxNSAmJiBuZXdyID09PSAtMTsgKytyKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHNxdWFyZXNbcl1bY29sXSA9PT0gXCIuXCIpIHtuZXdyID0gcjt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5ld3IgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgbmV3UmNkID0gWy0xLC0xLFwiXCJdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG5ld1JjZCA9IFtuZXdyLCBjb2wsIFwiZFwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJvdyxjb2wsbmV3U2VsZWN0aW9uLG5ld1JjZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHByaXNvbmJyZWFrXCIgb25LZXlEb3duQ2FwdHVyZT17aGFuZGxlS2V5RG93bn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgcGJ0aXRsZVwiPlByaXNvbiBCcmVhazwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTIgcGJob21lbGlua1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cInJlcXVlc3RHYW1lRGF0YVwiXHJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiU3luYyB3aXRoIG9wcG9uZW50XCJcclxuICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgcmVxdWVzdEdhbWVEYXRhKHByaXNvbmVyc09yR3VhcmRzKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnN5bmM8L2k+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiLi4vLi4vXCJ9PlxyXG4gICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yIHBiUHJpc29uZXJzXCI+XHJcbiAgICAgICAgICA8UHJpc29uZXJzXHJcbiAgICAgICAgICAgIHB0aWxlcz17cHRpbGVzfVxyXG4gICAgICAgICAgICB3aG9zZXR1cm49e3dob3NldHVybn1cclxuICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyh0aSkgPT4gaGFuZGxlUHJpc29uZXJUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICBvbkNsaWNrRmluaXNoVHVybj17KCkgPT4gZW5kUHJpc29uZXJzVHVybigpfVxyXG4gICAgICAgICAgICBvbkNsaWNrVGlsZVJlY2FsbD17KCkgPT4gcmVjYWxsVGlsZXMoKX1cclxuICAgICAgICAgICAgb25DbGlja1RpbGVFeGNoYW5nZT17KCkgPT4gc3dhcFByaXNvbmVyc1RpbGVzKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tQYXNzUGxheT17KCkgPT4gcHJpc29uZXJQYXNzKCl9XHJcbiAgICAgICAgICAgIHJlc2N1ZXM9e3Jlc2N1ZXN9XHJcbiAgICAgICAgICAgIHByaXNvbmVyc09yR3VhcmRzPXtwcmlzb25lcnNPckd1YXJkc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICB7cHJpc29uZXJzT3JHdWFyZHMgPT09IHdob3NldHVybiA/XHJcbiAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgc3F1YXJlcz17c3F1YXJlc31cclxuICAgICAgICAgICAgdXNlZGJ5PXt1c2VkYnl9XHJcbiAgICAgICAgICAgIHJjZD17cmNkfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsocmksIGNpKSA9PiBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJpLCBjaSwgLTEsbnVsbCl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgIHNxdWFyZXM9e3NxdWFyZXN9XHJcbiAgICAgICAgICAgIHVzZWRieT17dXNlZGJ5fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yIHBiR3VhcmRzXCI+XHJcbiAgICAgICAgICA8R3VhcmRzXHJcbiAgICAgICAgICAgIGd0aWxlcz17Z3RpbGVzfVxyXG4gICAgICAgICAgICB3aG9zZXR1cm49e3dob3NldHVybn1cclxuICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyh0aSkgPT4gaGFuZGxlR3VhcmRUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICBvbkNsaWNrRmluaXNoVHVybj17KCkgPT4gZW5kR3VhcmRzVHVybigpfVxyXG4gICAgICAgICAgICBvbkNsaWNrVGlsZVJlY2FsbD17KCkgPT4gcmVjYWxsVGlsZXMoKX1cclxuICAgICAgICAgICAgb25DbGlja1RpbGVFeGNoYW5nZT17KCkgPT4gc3dhcEd1YXJkc1RpbGVzKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tQYXNzUGxheT17KCkgPT4gZ3VhcmRzUGFzcygpfVxyXG4gICAgICAgICAgICBwcmlzb25lcnNPckd1YXJkcz17cHJpc29uZXJzT3JHdWFyZHN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cclxuICAgICAgICAgIDxTaG93VW5zZWVuVGlsZXMgdGlsZXM9e3RpbGVzfSBvdGhlcnRpbGVzPXtwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyBndGlsZXMgOiBwdGlsZXN9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU2hvd1Vuc2VlblRpbGVzID0gKHByb3BzKSA9PiB7IC8vIHRpbGVzID0gdGlsZXMgaW4gYmFnLCBvdGhlcnRpbGVzID0gdGlsZXMgb24gb3RoZXIgcGxheWVycyByYWNrXHJcbiAgbGV0IHVuc2VlblRpbGVzID0gWy4uLnByb3BzLnRpbGVzLCAuLi5wcm9wcy5vdGhlcnRpbGVzXTtcclxuICB1bnNlZW5UaWxlcy5zb3J0KCk7XHJcbiAgaWYgKHVuc2VlblRpbGVzWzBdID09PSBcIj9cIikge1xyXG4gICAgICB1bnNlZW5UaWxlcy5zcGxpY2UoMCwxKVxyXG4gICAgICB1bnNlZW5UaWxlcy5wdXNoKFwiP1wiKVxyXG4gIH1cclxuICBpZiAodW5zZWVuVGlsZXNbMF0gPT09IFwiP1wiKSB7XHJcbiAgICAgIHVuc2VlblRpbGVzLnNwbGljZSgwLDEpXHJcbiAgICAgIHVuc2VlblRpbGVzLnB1c2goXCI/XCIpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXBvb2xcIj5cclxuICAgICAgPGgzPlRJTEVTPC9oMz5cclxuICAgICAge3Vuc2VlblRpbGVzLm1hcCgodCwgdGkpID0+IChcclxuICAgICAgICA8c3BhbiBrZXk9e2B0aWxlJHt0aX1gfT5cclxuICAgICAgICAgIHt0aSA+IDAgJiYgdCAhPT0gdW5zZWVuVGlsZXNbdGkgLSAxXSA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVwb29sRGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYlRpbGVwb29sVGlsZVwiPnt0fTwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFJhY2tUaWxlID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuIGNsYXNzTmFtZT17cHJvcHMudGlsZWNsYXNzfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAge3Byb3BzLnRpbGV2YWx1ZX1cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgRmluaXNoVHVybkJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiRmluaXNoVHVyblwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNoZWNrPC9pPkZpbmlzaCBUdXJuXHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVGlsZVJlY2FsbEJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiUmVjYWxsVGlsZXNcIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj51bmRvPC9pPlJlY2FsbCBUaWxlc1xyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRpbGVFeGNoYW5nZUJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiRXhjaGFuZ2VUaWxlc1wiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnNlbnRpbWVudF92ZXJ5X2Rpc3NhdGlzZmllZDwvaT5FeGNoYW5nZSBUaWxlc1xyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFBhc3NQbGF5QnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJQYXNzUGxheVwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnNlbnRpbWVudF9uZXV0cmFsPC9pPlBhc3NcclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBQcmlzb25lcnMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByZW5kZXJUaWxlID0gKHRpbGVjbGFzcywgdGlsZWluZGV4LCB0aWxldmFsdWUpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/XHJcbiAgICAgIDxSYWNrVGlsZVxyXG4gICAgICAgIGtleT17dGlsZWNsYXNzICsgU3RyaW5nKHRpbGVpbmRleCl9XHJcbiAgICAgICAgdGlsZWNsYXNzPXt0aWxlY2xhc3N9XHJcbiAgICAgICAgdGlsZXZhbHVlPXt0aWxldmFsdWV9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMub25DbGljayh0aWxlaW5kZXgpfVxyXG4gICAgICAvPlxyXG4gICAgICA6XHJcbiAgICAgIDxSYWNrVGlsZVxyXG4gICAgICAgIGtleT17dGlsZWNsYXNzICsgU3RyaW5nKHRpbGVpbmRleCl9XHJcbiAgICAgICAgdGlsZWNsYXNzPXt0aWxlY2xhc3N9XHJcbiAgICAgICAgdGlsZXZhbHVlPXt0aWxldmFsdWV9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93LmFsZXJ0KFwiTm8gcGVla2luZyFcIil9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckZpbmlzaFR1cm4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPHA+PEZpbmlzaFR1cm5CdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja0ZpbmlzaFR1cm4oKX0gLz48L3A+O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclJlY2FsbFRpbGVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxwPjxUaWxlUmVjYWxsQnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tUaWxlUmVjYWxsKCl9IC8+PC9wPjtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJFeGNoYW5nZVRpbGVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxwPjxUaWxlRXhjaGFuZ2VCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1RpbGVFeGNoYW5nZSgpfSAvPjwvcD47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUGFzc1BsYXkgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPHA+PFBhc3NQbGF5QnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tQYXNzUGxheSgpfSAvPjwvcD47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRnJlZWRQcmlzb25lcnMgPSAoY291bnQpID0+IHtcclxuICAgIGxldCBkdW1iID0gQXJyYXkoY291bnQpLmZpbGwoXCJub25zZW5zZVwiKTtcclxuICAgIHJldHVybiBkdW1iLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgIDxzcGFuIGtleT17dmFsdWUgKyBTdHJpbmcoaW5kZXgpfT5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCIvYnJlYWtmcmVlLnBuZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJJJ20gZnJlZSEgSSdtIGZyZWUhXCJcclxuICAgICAgICAgIHdpZHRoPVwiMTAwXCJcclxuICAgICAgICAgIGhlaWdodD1cIjEwMFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxwPlBSSVNPTkVSUzwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgIHtwcm9wcy5wdGlsZXMubWFwKCh0LCB0aSkgPT5cclxuICAgICAgICAgIHJlbmRlclRpbGUoXHJcbiAgICAgICAgICAgIHByb3BzLndob3NldHVybiA9PT0gXCJQXCIgJiYgcHJvcHMuc2VsZWN0aW9uID09PSB0aVxyXG4gICAgICAgICAgICAgID8gXCJwYlRpbGVPblJhY2tTZWxlY3RlZFBcIlxyXG4gICAgICAgICAgICAgIDogXCJwYlRpbGVPblJhY2tQXCIsXHJcbiAgICAgICAgICAgIHRpLFxyXG4gICAgICAgICAgICBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyB0IDogXCIqXCJcclxuICAgICAgICAgIClcclxuICAgICAgICApfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiUFwiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IHJlbmRlckZpbmlzaFR1cm4oKSA6IDw+PC8+fVxyXG4gICAgICB7cHJvcHMud2hvc2V0dXJuID09PSBcIlBcIiAmJiBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyByZW5kZXJSZWNhbGxUaWxlcygpIDogPD48Lz59XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiUFwiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IHJlbmRlckV4Y2hhbmdlVGlsZXMoKSA6IDw+PC8+fVxyXG4gICAgICB7cHJvcHMud2hvc2V0dXJuID09PSBcIlBcIiAmJiBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyByZW5kZXJQYXNzUGxheSgpIDogPD48Lz59XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFJlc2N1ZXMgbWFkZToge3Byb3BzLnJlc2N1ZXN9XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAge3JlbmRlckZyZWVkUHJpc29uZXJzKHByb3BzLnJlc2N1ZXMpfVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgR3VhcmRzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyVGlsZSA9ICh0aWxlY2xhc3MsIHRpbGVpbmRleCwgdGlsZXZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJHXCIgP1xyXG4gICAgICA8UmFja1RpbGVcclxuICAgICAgICBrZXk9e3RpbGVjbGFzcyArIFN0cmluZyh0aWxlaW5kZXgpfVxyXG4gICAgICAgIHRpbGVjbGFzcz17dGlsZWNsYXNzfVxyXG4gICAgICAgIHRpbGV2YWx1ZT17dGlsZXZhbHVlfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2sodGlsZWluZGV4KX1cclxuICAgICAgLz5cclxuICAgICAgOlxyXG4gICAgICA8UmFja1RpbGVcclxuICAgICAgICBrZXk9e3RpbGVjbGFzcyArIFN0cmluZyh0aWxlaW5kZXgpfVxyXG4gICAgICAgIHRpbGVjbGFzcz17dGlsZWNsYXNzfVxyXG4gICAgICAgIHRpbGV2YWx1ZT17dGlsZXZhbHVlfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5hbGVydChcIk5vIHBlZWtpbmchXCIpfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJGaW5pc2hUdXJuID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxGaW5pc2hUdXJuQnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tGaW5pc2hUdXJuKCl9IC8+O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclJlY2FsbFRpbGVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxUaWxlUmVjYWxsQnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tUaWxlUmVjYWxsKCl9IC8+O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckV4Y2hhbmdlVGlsZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPFRpbGVFeGNoYW5nZUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrVGlsZUV4Y2hhbmdlKCl9IC8+O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclBhc3NQbGF5ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxQYXNzUGxheUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrUGFzc1BsYXkoKX0gLz47XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxwPkdVQVJEUzwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgIHtwcm9wcy5ndGlsZXMubWFwKCh0LCB0aSkgPT5cclxuICAgICAgICAgIHJlbmRlclRpbGUoXHJcbiAgICAgICAgICAgIHByb3BzLndob3NldHVybiA9PT0gXCJHXCIgJiYgcHJvcHMuc2VsZWN0aW9uID09PSB0aVxyXG4gICAgICAgICAgICAgID8gXCJwYlRpbGVPblJhY2tTZWxlY3RlZEdcIlxyXG4gICAgICAgICAgICAgIDogXCJwYlRpbGVPblJhY2tHXCIsXHJcbiAgICAgICAgICAgIHRpLFxyXG4gICAgICAgICAgICBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJHXCIgPyB0IDogXCIqXCJcclxuICAgICAgICAgIClcclxuICAgICAgICApfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiR1wiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiA/IHJlbmRlckZpbmlzaFR1cm4oKSA6IDw+PC8+fVxyXG4gICAgICB7cHJvcHMud2hvc2V0dXJuID09PSBcIkdcIiAmJiBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJHXCIgPyByZW5kZXJSZWNhbGxUaWxlcygpIDogPD48Lz59XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiR1wiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiA/IHJlbmRlckV4Y2hhbmdlVGlsZXMoKSA6IDw+PC8+fVxyXG4gICAgICB7cHJvcHMud2hvc2V0dXJuID09PSBcIkdcIiAmJiBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJHXCIgPyByZW5kZXJQYXNzUGxheSgpIDogPD48Lz59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9