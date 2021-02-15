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
      lineNumber: 143,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      children: "Game id:\xA0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      name: "gameid",
      value: gameid,
      onChange: e => {
        setGameid(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      children: "\xA0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 152,
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
      lineNumber: 153,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      children: "\xA0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 163,
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
      lineNumber: 164,
      columnNumber: 7
    }, this), wsmsgs.map((msg, inx) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      children: msg
    }, inx, false, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }, this))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 142,
    columnNumber: 5
  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Game, {
    prisonersOrGuards: prisonersOrGuards,
    gameid: gameid,
    msgid: msgid,
    wsmsgs: wsmsgs,
    client: client,
    removeMessage: removeMessage
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 179,
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
  const tdvalue = props.c !== "." ? props.c : tdclass === "pbSquareCenterSquare" ? "✰" : tdclass === "pbSquareEscapeHatch" ? "💫" : props.ri % 2 === props.ci % 2 ? "⎔" : "✦";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: tdclass,
    onClick: props.onClick,
    children: tdvalue
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 221,
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
        lineNumber: 231,
        columnNumber: 9
      }, undefined)
    }, `Square${ri}-${ci}`, false, {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 7
    }, undefined);
  };

  const renderRow = ri => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
      className: "row pbRow",
      children: squares[ri].map((c, ci) => renderSquare(ri, ci, c, usedby[ri][ci]))
    }, `BoardRow${ri}`, false, {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 7
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
    className: "pbBoard",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
      children: squares.map((r, ri) => renderRow(ri))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 250,
    columnNumber: 5
  }, undefined);
};

_c3 = Board;

const Game = ({
  prisonersOrGuards,
  gameid,
  msgid,
  wsmsgs,
  client,
  removeMessage
}) => {
  _s2();

  const {
    0: lastmsgid,
    1: setLastmsgid
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
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
  }); // let host = process.env.NODE_ENV === 'production' ? 'wss://tilerunner.herokuapp.com' : 'ws://localhost:5000';
  // const [client, setClient] = useState(new CustomSocket(host, processMessage));

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // client.connect();
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

  const logMessageFromWS = messageData => {
    console.log("Message being received by " + prisonersOrGuards);
    console.log("func : " + messageData.func);
    console.log("ptiles : " + JSON.stringify(ptiles) + " -> " + messageData.ptiles);
    console.log("gtiles : " + JSON.stringify(gtiles) + " -> " + messageData.gtiles);
  };

  function processMessage(message) {
    let messageData = JSON.parse(message); // was message.data

    logMessageFromWS(messageData);

    if (messageData.gameid === gameid && messageData.type === "pb") {
      // This instance of a prison break game
      // when guards join game they send ggd, and prisoner picks it up and sends sgd, then guards pick that up and take the data
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
    let newGtiles = [...gtiles]; // tile is selected from rack and clicked square is not used yet

    let newRow = [...squares[ri]];
    let squarevalue = squares[ri][ci];
    let newCurrentcoords = [...currentcoords];
    let coord = String(ri) + "-" + String(ci);
    let cci = currentcoords.indexOf(coord);

    if (selection > -1 && squarevalue === ".") {
      newRow[ci] = whoseturn === "P" ? newPtiles[selection] : newGtiles[selection];
      newSquares[ri] = [...newRow];
      whoseturn === "P" ? newPtiles.splice(selection, 1) : newGtiles.splice(selection, 1);
      let newUsedbyRow = [...newUsedby[ri]];
      newUsedbyRow[ci] = whoseturn;
      newUsedby[ri] = [...newUsedbyRow];
      setSelection(curr => curr - 1);
      setSquares(newSquares);
      setUsedby(newUsedby);
      setPtiles(newPtiles);
      setGtiles(newGtiles);
      setCurrentcoords([...currentcoords, coord]);
    } else if (squarevalue !== "." && cci > -1) {
      // clicked square has a tile on it from the current move in progress
      // Assuming some good will from the users to click a tile they played
      if (whoseturn === "P" && newPtiles.length < 7 || whoseturn === "G" && newGtiles.length < 7) {
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

  const recallTiles = () => {
    setSquares([...snapshot.squares]);
    setUsedby([...snapshot.usedby]);
    setPtiles([...snapshot.ptiles]);
    setGtiles([...snapshot.gtiles]);
    setSelection(-1);
    setCurrentcoords([]);
  };

  return wsmsgs.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    id: "processNextMessage",
    onClick: processMessage(undefined, wsmsgs[0]),
    children: "Click to get update"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 556,
    columnNumber: 5
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container-fluid prisonbreak",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-11 pbtitle",
        children: "Prison Break"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 564,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-1 pbhomelink",
        "data-toggle": "tooltip",
        title: "Home",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "../../",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "\uD83C\uDFE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 567,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 566,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 565,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 563,
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
          rescues: rescues,
          prisonersOrGuards: prisonersOrGuards
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 573,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 572,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-6",
        align: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {
          squares: squares,
          usedby: usedby,
          onClick: (ri, ci) => handleBoardSquareClick(ri, ci)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 585,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 584,
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
          prisonersOrGuards: prisonersOrGuards
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 592,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 591,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Tiles, {
          tiles: tiles
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 603,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 602,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 562,
    columnNumber: 5
  }, undefined);
};

_s2(Game, "DRu/IRiipT4NmZRiOCLCGcBN2SU=");

_c4 = Game;

const Tiles = props => {
  // there is a better way ^^^
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pbTilepool",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "TILE POOL"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 614,
      columnNumber: 7
    }, undefined), props.tiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [ti > 0 && t !== props.tiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pbTilepoolDivider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 618,
        columnNumber: 13
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbTilepoolTile",
        children: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 622,
        columnNumber: 11
      }, undefined)]
    }, `tile${ti}`, true, {
      fileName: _jsxFileName,
      lineNumber: 616,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 613,
    columnNumber: 5
  }, undefined);
};

_c5 = Tiles;

const RackTile = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    className: props.tileclass,
    onClick: props.onClick,
    children: props.tilevalue
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 631,
    columnNumber: 5
  }, undefined);
};

_c6 = RackTile;

const FinishTurnButton = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "pbFinishTurn",
    onClick: props.onClick,
    children: "Finish Turn"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 639,
    columnNumber: 5
  }, undefined);
};

_c7 = FinishTurnButton;

const TileRecallButton = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "pbRecallTiles",
    onClick: props.onClick,
    children: "Recall Tiles"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 647,
    columnNumber: 5
  }, undefined);
};

_c8 = TileRecallButton;

const Prisoners = props => {
  const renderTile = (tileclass, tileindex, tilevalue) => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
      tileclass: tileclass,
      tilevalue: tilevalue,
      onClick: () => props.onClick(tileindex)
    }, tileclass + String(tileindex), false, {
      fileName: _jsxFileName,
      lineNumber: 656,
      columnNumber: 7
    }, undefined);
  };

  const renderFinishTurn = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
      onClick: () => props.onClickFinishTurn()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 666,
      columnNumber: 12
    }, undefined);
  };

  const renderRecallTiles = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
      onClick: () => props.onClickTileRecall()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 670,
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
        lineNumber: 677,
        columnNumber: 9
      }, undefined)
    }, value + String(index), false, {
      fileName: _jsxFileName,
      lineNumber: 676,
      columnNumber: 7
    }, undefined));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "PRISONERS"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 689,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilerack",
      children: props.ptiles.map((t, ti) => renderTile(props.whoseturn === "P" && props.selection === ti ? "pbTileOnRackSelectedP" : "pbTileOnRackP", ti, props.prisonersOrGuards === "P" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 690,
      columnNumber: 7
    }, undefined), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderRecallTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Rescues made: ", props.rescues, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 705,
        columnNumber: 9
      }, undefined), renderFreedPrisoners(props.rescues)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 703,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 688,
    columnNumber: 5
  }, undefined);
};

_c9 = Prisoners;

const Guards = props => {
  const renderTile = (tileclass, tileindex, tilevalue) => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
      tileclass: tileclass,
      tilevalue: tilevalue,
      onClick: () => props.onClick(tileindex)
    }, tileclass + String(tileindex), false, {
      fileName: _jsxFileName,
      lineNumber: 715,
      columnNumber: 7
    }, undefined);
  };

  const renderFinishTurn = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
      onClick: () => props.onClickFinishTurn()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 725,
      columnNumber: 12
    }, undefined);
  };

  const renderRecallTiles = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
      onClick: () => props.onClickTileRecall()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 729,
      columnNumber: 12
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "GUARDS"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 734,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilerack",
      children: props.gtiles.map((t, ti) => renderTile(props.whoseturn === "G" && props.selection === ti ? "pbTileOnRackSelectedG" : "pbTileOnRackG", ti, props.prisonersOrGuards === "G" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 735,
      columnNumber: 7
    }, undefined), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderRecallTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 733,
    columnNumber: 5
  }, undefined);
};

_c10 = Guards;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;

$RefreshReg$(_c, "PrisonBreak");
$RefreshReg$(_c2, "Square");
$RefreshReg$(_c3, "Board");
$RefreshReg$(_c4, "Game");
$RefreshReg$(_c5, "Tiles");
$RefreshReg$(_c6, "RackTile");
$RefreshReg$(_c7, "FinishTurnButton");
$RefreshReg$(_c8, "TileRecallButton");
$RefreshReg$(_c9, "Prisoners");
$RefreshReg$(_c10, "Guards");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsyLmpzIl0sIm5hbWVzIjpbImVzY2FwZWhhdGNoZXMiLCJpbml0aWFsdGlsZXMiLCJQcmlzb25CcmVhayIsImlubG9iYnkiLCJzZXRJbmxvYmJ5IiwidXNlU3RhdGUiLCJnYW1laWQiLCJzZXRHYW1laWQiLCJwcmlzb25lcnNPckd1YXJkcyIsInNldFByaXNvbmVyc09yR3VhcmRzIiwid3Ntc2dzIiwic2V0V3Ntc2dzIiwibXNnaWQiLCJzZXRNc2dpZCIsImhvc3QiLCJhY2NlcHRNZXNzYWdlIiwibWVzc2FnZSIsImN1cnIiLCJkYXRhIiwicmVtb3ZlTWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiaSIsImluZGV4T2YiLCJ3Iiwic3BsaWNlIiwiY2xpZW50Iiwic2V0Q2xpZW50IiwiQ3VzdG9tU29ja2V0IiwidXNlRWZmZWN0IiwiY29ubmVjdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsIm1hcCIsIm1zZyIsImlueCIsIlNxdWFyZSIsInByb3BzIiwidXNlZGJ5Y2xhc3MiLCJzcXVhcmV1c2VkYnkiLCJ0ZGNsYXNzIiwiYyIsInJpIiwiY2kiLCJ0ZHZhbHVlIiwib25DbGljayIsIkJvYXJkIiwic3F1YXJlcyIsInVzZWRieSIsInJlbmRlclNxdWFyZSIsInJlbmRlclJvdyIsInIiLCJHYW1lIiwibGFzdG1zZ2lkIiwic2V0TGFzdG1zZ2lkIiwidGlsZXMiLCJzZXRUaWxlcyIsInB0aWxlcyIsInNldFB0aWxlcyIsImd0aWxlcyIsInNldEd0aWxlcyIsInNldFNxdWFyZXMiLCJBcnJheSIsImZpbGwiLCJzZXRVc2VkYnkiLCJzZWxlY3Rpb24iLCJzZXRTZWxlY3Rpb24iLCJ3aG9zZXR1cm4iLCJzZXRXaG9zZXR1cm4iLCJjdXJyZW50Y29vcmRzIiwic2V0Q3VycmVudGNvb3JkcyIsInJlc2N1ZXMiLCJzZXRSZXNjdWVzIiwic25hcHNob3QiLCJzZXRTbmFwc2hvdCIsInRlbXBQVGlsZXMiLCJ0ZW1wR1RpbGVzIiwidGVtcFRpbGVzIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzb3J0IiwiY29uc29sZSIsImxvZyIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsImZ1bmMiLCJsb2dNZXNzYWdlRnJvbVdTIiwicHJvY2Vzc01lc3NhZ2UiLCJwYXJzZSIsImhhbmRsZUJvYXJkU3F1YXJlQ2xpY2siLCJuZXdTcXVhcmVzIiwibmV3VXNlZGJ5IiwibmV3UHRpbGVzIiwibmV3R3RpbGVzIiwibmV3Um93Iiwic3F1YXJldmFsdWUiLCJuZXdDdXJyZW50Y29vcmRzIiwiY29vcmQiLCJTdHJpbmciLCJjY2kiLCJuZXdVc2VkYnlSb3ciLCJoYW5kbGVQcmlzb25lclRpbGVDbGljayIsInRpbGVpbmRleCIsImFsZXJ0IiwiaGFuZGxlR3VhcmRUaWxlQ2xpY2siLCJlbmRQcmlzb25lcnNUdXJuIiwibmV3UmVzY3VlcyIsIm5ld1RpbGVzIiwiZW5kR3VhcmRzVHVybiIsInNuYXBzcXVhcmVzIiwic25hcHVzZWRieSIsInNuYXBwdGlsZXMiLCJzbmFwZ3RpbGVzIiwicmVjYWxsVGlsZXMiLCJ0aSIsIlRpbGVzIiwidCIsIlJhY2tUaWxlIiwidGlsZWNsYXNzIiwidGlsZXZhbHVlIiwiRmluaXNoVHVybkJ1dHRvbiIsIlRpbGVSZWNhbGxCdXR0b24iLCJQcmlzb25lcnMiLCJyZW5kZXJUaWxlIiwicmVuZGVyRmluaXNoVHVybiIsIm9uQ2xpY2tGaW5pc2hUdXJuIiwicmVuZGVyUmVjYWxsVGlsZXMiLCJvbkNsaWNrVGlsZVJlY2FsbCIsInJlbmRlckZyZWVkUHJpc29uZXJzIiwiY291bnQiLCJkdW1iIiwiaW5kZXgiLCJHdWFyZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0EsTUFBTUEsYUFBYSxHQUFHLENBQ3BCLEtBRG9CLEVBRXBCLEtBRm9CLEVBR3BCLE1BSG9CLEVBSXBCLEtBSm9CLEVBS3BCLE1BTG9CLEVBTXBCLE1BTm9CLEVBT3BCLE1BUG9CLEVBUXBCLE9BUm9CLENBQXRCLEMsQ0FTRzs7QUFDSCxNQUFNQyxZQUFZLEdBQUcsQ0FDbkIsR0FEbUIsRUFFbkIsR0FGbUIsRUFHbkIsR0FIbUIsRUFJbkIsR0FKbUIsRUFLbkIsR0FMbUIsRUFNbkIsR0FObUIsRUFPbkIsR0FQbUIsRUFRbkIsR0FSbUIsRUFTbkIsR0FUbUIsRUFVbkIsR0FWbUIsRUFXbkIsR0FYbUIsRUFZbkIsR0FabUIsRUFhbkIsR0FibUIsRUFjbkIsR0FkbUIsRUFlbkIsR0FmbUIsRUFnQm5CLEdBaEJtQixFQWlCbkIsR0FqQm1CLEVBa0JuQixHQWxCbUIsRUFtQm5CLEdBbkJtQixFQW9CbkIsR0FwQm1CLEVBcUJuQixHQXJCbUIsRUFzQm5CLEdBdEJtQixFQXVCbkIsR0F2Qm1CLEVBd0JuQixHQXhCbUIsRUF5Qm5CLEdBekJtQixFQTBCbkIsR0ExQm1CLEVBMkJuQixHQTNCbUIsRUE0Qm5CLEdBNUJtQixFQTZCbkIsR0E3Qm1CLEVBOEJuQixHQTlCbUIsRUErQm5CLEdBL0JtQixFQWdDbkIsR0FoQ21CLEVBaUNuQixHQWpDbUIsRUFrQ25CLEdBbENtQixFQW1DbkIsR0FuQ21CLEVBb0NuQixHQXBDbUIsRUFxQ25CLEdBckNtQixFQXNDbkIsR0F0Q21CLEVBdUNuQixHQXZDbUIsRUF3Q25CLEdBeENtQixFQXlDbkIsR0F6Q21CLEVBMENuQixHQTFDbUIsRUEyQ25CLEdBM0NtQixFQTRDbkIsR0E1Q21CLEVBNkNuQixHQTdDbUIsRUE4Q25CLEdBOUNtQixFQStDbkIsR0EvQ21CLEVBZ0RuQixHQWhEbUIsRUFpRG5CLEdBakRtQixFQWtEbkIsR0FsRG1CLEVBbURuQixHQW5EbUIsRUFvRG5CLEdBcERtQixFQXFEbkIsR0FyRG1CLEVBc0RuQixHQXREbUIsRUF1RG5CLEdBdkRtQixFQXdEbkIsR0F4RG1CLEVBeURuQixHQXpEbUIsRUEwRG5CLEdBMURtQixFQTJEbkIsR0EzRG1CLEVBNERuQixHQTVEbUIsRUE2RG5CLEdBN0RtQixFQThEbkIsR0E5RG1CLEVBK0RuQixHQS9EbUIsRUFnRW5CLEdBaEVtQixFQWlFbkIsR0FqRW1CLEVBa0VuQixHQWxFbUIsRUFtRW5CLEdBbkVtQixFQW9FbkIsR0FwRW1CLEVBcUVuQixHQXJFbUIsRUFzRW5CLEdBdEVtQixFQXVFbkIsR0F2RW1CLEVBd0VuQixHQXhFbUIsRUF5RW5CLEdBekVtQixFQTBFbkIsR0ExRW1CLEVBMkVuQixHQTNFbUIsRUE0RW5CLEdBNUVtQixFQTZFbkIsR0E3RW1CLEVBOEVuQixHQTlFbUIsRUErRW5CLEdBL0VtQixFQWdGbkIsR0FoRm1CLEVBaUZuQixHQWpGbUIsRUFrRm5CLEdBbEZtQixFQW1GbkIsR0FuRm1CLEVBb0ZuQixHQXBGbUIsRUFxRm5CLEdBckZtQixFQXNGbkIsR0F0Rm1CLEVBdUZuQixHQXZGbUIsRUF3Rm5CLEdBeEZtQixFQXlGbkIsR0F6Rm1CLEVBMEZuQixHQTFGbUIsRUEyRm5CLEdBM0ZtQixFQTRGbkIsR0E1Rm1CLEVBNkZuQixHQTdGbUIsRUE4Rm5CLEdBOUZtQixFQStGbkIsR0EvRm1CLEVBZ0duQixHQWhHbUIsRUFpR25CLEdBakdtQixFQWtHbkIsR0FsR21CLEVBbUduQixHQW5HbUIsRUFvR25CLEdBcEdtQixDQUFyQixDLENBcUdHOztBQUVZLFNBQVNDLFdBQVQsR0FBdUI7QUFBQTs7QUFDcEMsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLElBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JGLHNEQUFRLENBQUMsRUFBRCxDQUFwQztBQUNBLFFBQU07QUFBQSxPQUFDRyxpQkFBRDtBQUFBLE9BQW9CQztBQUFwQixNQUE0Q0osc0RBQVEsQ0FBQyxFQUFELENBQTFEO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCTixzREFBUSxDQUFDLEVBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ08sS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JSLHNEQUFRLENBQUMsQ0FBRCxDQUFsQztBQUNBLE1BQUlTLElBQUksR0FBRyxRQUF3QyxTQUF4QyxHQUEyRSxxQkFBdEY7O0FBQ0EsUUFBTUMsYUFBYSxHQUFJQyxPQUFELElBQWE7QUFDakNILFlBQVEsQ0FBRUksSUFBRCxJQUFVQSxJQUFJLEdBQUcsQ0FBbEIsQ0FBUjtBQUNBTixhQUFTLENBQUVNLElBQUQsSUFBVSxDQUFDLEdBQUdBLElBQUosRUFBVUQsT0FBTyxDQUFDRSxJQUFsQixDQUFYLENBQVQ7QUFDRCxHQUhEOztBQUlBLFFBQU1DLGFBQWEsR0FBSUMsV0FBRCxJQUFpQjtBQUNyQyxRQUFJQyxDQUFDLEdBQUdYLE1BQU0sQ0FBQ1ksT0FBUCxDQUFlRixXQUFmLENBQVI7QUFDQSxRQUFJRyxDQUFDLEdBQUcsQ0FBQyxHQUFHYixNQUFKLENBQVI7QUFDQWEsS0FBQyxDQUFDQyxNQUFGLENBQVNILENBQVQsRUFBVyxDQUFYO0FBQ0FWLGFBQVMsQ0FBQ1ksQ0FBRCxDQUFUO0FBQ0QsR0FMRDs7QUFNQSxRQUFNO0FBQUEsT0FBQ0UsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JyQixzREFBUSxDQUFDLElBQUlzQiwyQ0FBSixDQUFpQmIsSUFBakIsRUFBdUJDLGFBQXZCLENBQUQsQ0FBcEM7QUFDQWEseURBQVMsQ0FBQyxNQUNSSCxNQUFNLENBQUNJLE9BQVAsRUFETyxFQUVQLEVBRk8sQ0FBVDtBQUdBLFNBQ0UxQixPQUFPLElBQUlLLGlCQUFpQixLQUFLLEVBQWpDLGdCQUNBO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUNJLFVBQUksRUFBQyxRQURUO0FBRUksV0FBSyxFQUFFRixNQUZYO0FBR0ksY0FBUSxFQUFHd0IsQ0FBRCxJQUFPO0FBQ2J2QixpQkFBUyxDQUFDdUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBVDtBQUNIO0FBTEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixlQVdFO0FBQVEsUUFBRSxFQUFDLFdBQVg7QUFDSSxhQUFPLEVBQUUsWUFBVztBQUNsQixZQUFJMUIsTUFBTSxDQUFDMkIsTUFBUCxHQUFnQixDQUFwQixFQUF1QjtBQUNyQnhCLDhCQUFvQixDQUFDLEdBQUQsQ0FBcEI7QUFDQUwsb0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRDtBQUNGLE9BTkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRixlQXFCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJCRixlQXNCRTtBQUFRLFFBQUUsRUFBQyxVQUFYO0FBQ0ksYUFBTyxFQUFFLFlBQVc7QUFDbEIsWUFBSUUsTUFBTSxDQUFDMkIsTUFBUCxHQUFnQixDQUFwQixFQUF1QjtBQUNyQnhCLDhCQUFvQixDQUFDLEdBQUQsQ0FBcEI7QUFDQUwsb0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRDtBQUNGLE9BTkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0QkYsRUFnQ0dNLE1BQU0sQ0FBQ3dCLEdBQVAsQ0FBWSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sa0JBQ1g7QUFBQSxnQkFBZUQ7QUFBZixPQUFTQyxHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxDQWhDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQSxnQkFzQ0EscUVBQUMsSUFBRDtBQUFNLHFCQUFpQixFQUFFNUIsaUJBQXpCO0FBQ0UsVUFBTSxFQUFFRixNQURWO0FBRUUsU0FBSyxFQUFFTSxLQUZUO0FBR0UsVUFBTSxFQUFFRixNQUhWO0FBSUUsVUFBTSxFQUFFZSxNQUpWO0FBS0UsaUJBQWEsRUFBRU47QUFMakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQXZDRjtBQStDRDs7R0FwRXVCakIsVzs7S0FBQUEsVzs7QUFzRXhCLE1BQU1tQyxNQUFNLEdBQUlDLEtBQUQsSUFBVztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTUMsV0FBVyxHQUNmRCxLQUFLLENBQUNFLFlBQU4sS0FBdUIsR0FBdkIsR0FDSSx5QkFESixHQUVJLHNCQUhOO0FBSUEsUUFBTUMsT0FBTyxHQUNYSCxLQUFLLENBQUNJLENBQU4sS0FBWSxHQUFaLEdBQ0lILFdBREosR0FFSUQsS0FBSyxDQUFDSyxFQUFOLEtBQWEsQ0FBYixJQUFrQkwsS0FBSyxDQUFDTSxFQUFOLEtBQWEsQ0FBL0IsR0FDQSxzQkFEQSxHQUVBLENBQUNOLEtBQUssQ0FBQ0ssRUFBTixLQUFhLENBQWIsSUFBa0JMLEtBQUssQ0FBQ0ssRUFBTixLQUFhLENBQS9CLElBQW9DTCxLQUFLLENBQUNLLEVBQU4sS0FBYSxFQUFsRCxNQUNDTCxLQUFLLENBQUNNLEVBQU4sS0FBYSxDQUFiLElBQWtCTixLQUFLLENBQUNNLEVBQU4sS0FBYSxDQUEvQixJQUFvQ04sS0FBSyxDQUFDTSxFQUFOLEtBQWEsRUFEbEQsSUFFQSxxQkFGQSxHQUdBTixLQUFLLENBQUNLLEVBQU4sR0FBVyxDQUFYLEtBQWlCTCxLQUFLLENBQUNNLEVBQU4sR0FBVyxDQUE1QixHQUNBLFVBREEsR0FFQSxXQVZOO0FBV0EsUUFBTUMsT0FBTyxHQUNYUCxLQUFLLENBQUNJLENBQU4sS0FBWSxHQUFaLEdBQ0lKLEtBQUssQ0FBQ0ksQ0FEVixHQUVJRCxPQUFPLEtBQUssc0JBQVosR0FDQSxHQURBLEdBRUFBLE9BQU8sS0FBSyxxQkFBWixHQUNBLElBREEsR0FFQUgsS0FBSyxDQUFDSyxFQUFOLEdBQVcsQ0FBWCxLQUFpQkwsS0FBSyxDQUFDTSxFQUFOLEdBQVcsQ0FBNUIsR0FDQSxHQURBLEdBRUEsR0FUTjtBQVVBLHNCQUNFO0FBQVEsYUFBUyxFQUFFSCxPQUFuQjtBQUE0QixXQUFPLEVBQUVILEtBQUssQ0FBQ1EsT0FBM0M7QUFBQSxjQUNHRDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBcENEOztNQUFNUixNOztBQXNDTixNQUFNVSxLQUFLLEdBQUcsQ0FBQztBQUFFRCxTQUFGO0FBQVdFLFNBQVg7QUFBb0JDO0FBQXBCLENBQUQsS0FBa0M7QUFDOUMsUUFBTUMsWUFBWSxHQUFHLENBQUNQLEVBQUQsRUFBS0MsRUFBTCxFQUFTRixDQUFULEVBQVlGLFlBQVosS0FBNkI7QUFDaEQsd0JBQ0U7QUFBQSw2QkFDRSxxRUFBQyxNQUFEO0FBQ0UsU0FBQyxFQUFFRSxDQURMO0FBRUUsVUFBRSxFQUFFRSxFQUZOO0FBR0UsVUFBRSxFQUFFRCxFQUhOO0FBSUUsb0JBQVksRUFBRUgsWUFKaEI7QUFLRSxlQUFPLEVBQUUsTUFBTU0sT0FBTyxDQUFDSCxFQUFELEVBQUtDLEVBQUw7QUFMeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLE9BQVUsU0FBUUQsRUFBRyxJQUFHQyxFQUFHLEVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFXRCxHQVpEOztBQWFBLFFBQU1PLFNBQVMsR0FBSVIsRUFBRCxJQUFRO0FBQ3hCLHdCQUNFO0FBQTBCLGVBQVMsRUFBQyxXQUFwQztBQUFBLGdCQUNHSyxPQUFPLENBQUNMLEVBQUQsQ0FBUCxDQUFZVCxHQUFaLENBQWdCLENBQUNRLENBQUQsRUFBSUUsRUFBSixLQUFXTSxZQUFZLENBQUNQLEVBQUQsRUFBS0MsRUFBTCxFQUFTRixDQUFULEVBQVlPLE1BQU0sQ0FBQ04sRUFBRCxDQUFOLENBQVdDLEVBQVgsQ0FBWixDQUF2QztBQURILE9BQVUsV0FBVUQsRUFBRyxFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBS0QsR0FORDs7QUFRQSxzQkFDRTtBQUFPLGFBQVMsRUFBQyxTQUFqQjtBQUFBLDJCQUNFO0FBQUEsZ0JBQVFLLE9BQU8sQ0FBQ2QsR0FBUixDQUFZLENBQUNrQixDQUFELEVBQUlULEVBQUosS0FBV1EsU0FBUyxDQUFDUixFQUFELENBQWhDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBM0JEOztNQUFNSSxLOztBQTZCTixNQUFNTSxJQUFJLEdBQUcsQ0FBQztBQUFDN0MsbUJBQUQ7QUFBb0JGLFFBQXBCO0FBQTRCTSxPQUE1QjtBQUFtQ0YsUUFBbkM7QUFBMkNlLFFBQTNDO0FBQW1ETjtBQUFuRCxDQUFELEtBQXVFO0FBQUE7O0FBQ2xGLFFBQU07QUFBQSxPQUFDbUMsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJsRCxzREFBUSxDQUFDLENBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ21ELEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CcEQsc0RBQVEsQ0FBQyxDQUFDLEdBQUdKLFlBQUosQ0FBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDeUQsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0J0RCxzREFBUSxDQUFDLEVBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ3VELE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCeEQsc0RBQVEsQ0FBQyxFQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUMyQyxPQUFEO0FBQUEsT0FBVWM7QUFBVixNQUF3QnpELHNEQUFRLENBQUMwRCxLQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLElBQVYsQ0FBZUQsS0FBSyxDQUFDLEVBQUQsQ0FBTCxDQUFVQyxJQUFWLENBQWUsR0FBZixDQUFmLENBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ2YsTUFBRDtBQUFBLE9BQVNnQjtBQUFULE1BQXNCNUQsc0RBQVEsQ0FBQzBELEtBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsSUFBVixDQUFlRCxLQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLElBQVYsQ0FBZSxFQUFmLENBQWYsQ0FBRCxDQUFwQztBQUNBLFFBQU07QUFBQSxPQUFDRSxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QjlELHNEQUFRLENBQUMsQ0FBQyxDQUFGLENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUMrRCxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QmhFLHNEQUFRLENBQUMsR0FBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDaUUsYUFBRDtBQUFBLE9BQWdCQztBQUFoQixNQUFvQ2xFLHNEQUFRLENBQUMsRUFBRCxDQUFsRDtBQUNBLFFBQU07QUFBQSxPQUFDbUUsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JwRSxzREFBUSxDQUFDLENBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ3FFLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCdEUsc0RBQVEsQ0FBQztBQUN2QzJDLFdBQU8sRUFBRSxDQUFDLEdBQUdBLE9BQUosQ0FEOEI7QUFFdkNDLFVBQU0sRUFBRSxDQUFDLEdBQUdBLE1BQUosQ0FGK0I7QUFHdkNTLFVBQU0sRUFBRSxDQUFDLEdBQUdBLE1BQUosQ0FIK0I7QUFJdkNFLFVBQU0sRUFBRSxDQUFDLEdBQUdBLE1BQUo7QUFKK0IsR0FBRCxDQUF4QyxDQVhrRixDQWtCbEY7QUFDQTs7QUFDQWhDLHlEQUFTLENBQUMsTUFBTTtBQUNkO0FBQ0EsUUFBSXBCLGlCQUFpQixLQUFLLEdBQTFCLEVBQStCO0FBQzdCLFVBQUlvRSxVQUFVLEdBQUcsQ0FBQyxHQUFHbEIsTUFBSixDQUFqQjtBQUNBLFVBQUltQixVQUFVLEdBQUcsQ0FBQyxHQUFHakIsTUFBSixDQUFqQjtBQUNBLFVBQUlrQixTQUFTLEdBQUcsQ0FBQyxHQUFHdEIsS0FBSixDQUFoQjs7QUFDQSxhQUFPb0IsVUFBVSxDQUFDM0MsTUFBWCxHQUFvQixDQUEzQixFQUE4QjtBQUM1QixZQUFJOEMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCSixTQUFTLENBQUM3QyxNQUFyQyxDQUFYO0FBQ0EyQyxrQkFBVSxDQUFDTyxJQUFYLENBQWdCTCxTQUFTLENBQUNDLElBQUQsQ0FBekI7QUFDQUQsaUJBQVMsQ0FBQ3RELE1BQVYsQ0FBaUJ1RCxJQUFqQixFQUF1QixDQUF2QjtBQUNBQSxZQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JKLFNBQVMsQ0FBQzdDLE1BQXJDLENBQVA7QUFDQTRDLGtCQUFVLENBQUNNLElBQVgsQ0FBZ0JMLFNBQVMsQ0FBQ0MsSUFBRCxDQUF6QjtBQUNBRCxpQkFBUyxDQUFDdEQsTUFBVixDQUFpQnVELElBQWpCLEVBQXVCLENBQXZCO0FBQ0Q7O0FBQ0RILGdCQUFVLENBQUNRLElBQVg7QUFDQVAsZ0JBQVUsQ0FBQ08sSUFBWDtBQUNBdkIsZUFBUyxDQUFDZ0IsVUFBRCxDQUFUO0FBQ0FsQixlQUFTLENBQUNpQixVQUFELENBQVQ7QUFDQW5CLGNBQVEsQ0FBQ3FCLFNBQUQsQ0FBUjtBQUNELEtBakJELE1BbUJBO0FBQ0UsVUFBSTtBQUNGTyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0E3RCxjQUFNLENBQUM4RCxJQUFQLENBQ0VDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ2JuRixnQkFBTSxFQUFFQSxNQURLO0FBQ0c7QUFDaEJvRixjQUFJLEVBQUUsSUFGTztBQUVEO0FBQ1pDLGNBQUksRUFBRSxLQUhPLENBR0Q7O0FBSEMsU0FBZixDQURGO0FBTUQsT0FSRCxDQVNBLE1BQU0sQ0FBRTtBQUNUO0FBQ0YsR0FqQ1EsRUFpQ04sRUFqQ00sQ0FBVDs7QUFtQ0EsUUFBTUMsZ0JBQWdCLEdBQUl4RSxXQUFELElBQWlCO0FBQ3hDaUUsV0FBTyxDQUFDQyxHQUFSLENBQVksK0JBQStCOUUsaUJBQTNDO0FBQ0E2RSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFZbEUsV0FBVyxDQUFDdUUsSUFBcEM7QUFDQU4sV0FBTyxDQUFDQyxHQUFSLENBQVksY0FBY0UsSUFBSSxDQUFDQyxTQUFMLENBQWUvQixNQUFmLENBQWQsR0FBdUMsTUFBdkMsR0FBZ0R0QyxXQUFXLENBQUNzQyxNQUF4RTtBQUNBMkIsV0FBTyxDQUFDQyxHQUFSLENBQVksY0FBY0UsSUFBSSxDQUFDQyxTQUFMLENBQWU3QixNQUFmLENBQWQsR0FBdUMsTUFBdkMsR0FBZ0R4QyxXQUFXLENBQUN3QyxNQUF4RTtBQUNELEdBTEQ7O0FBT0EsV0FBU2lDLGNBQVQsQ0FBd0I3RSxPQUF4QixFQUFpQztBQUMvQixRQUFJSSxXQUFXLEdBQUdvRSxJQUFJLENBQUNNLEtBQUwsQ0FBVzlFLE9BQVgsQ0FBbEIsQ0FEK0IsQ0FDUTs7QUFDdkM0RSxvQkFBZ0IsQ0FBQ3hFLFdBQUQsQ0FBaEI7O0FBQ0EsUUFBSUEsV0FBVyxDQUFDZCxNQUFaLEtBQXVCQSxNQUF2QixJQUFpQ2MsV0FBVyxDQUFDc0UsSUFBWixLQUFxQixJQUExRCxFQUFnRTtBQUFFO0FBQ2hFO0FBQ0EsVUFBSXRFLFdBQVcsQ0FBQ3VFLElBQVosS0FBcUIsS0FBckIsSUFBOEJuRixpQkFBaUIsS0FBSyxHQUF4RCxFQUE2RDtBQUFFO0FBQzdEaUIsY0FBTSxDQUFDOEQsSUFBUCxDQUNFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNibkYsZ0JBQU0sRUFBRUEsTUFESztBQUNHO0FBQ2hCb0YsY0FBSSxFQUFFLElBRk87QUFFRDtBQUNaQyxjQUFJLEVBQUUsS0FITztBQUdBO0FBQ2JuQyxlQUFLLEVBQUVBLEtBSk07QUFLYlIsaUJBQU8sRUFBRUEsT0FMSTtBQU1iVSxnQkFBTSxFQUFFQSxNQU5LO0FBT2JFLGdCQUFNLEVBQUVBLE1BUEs7QUFRYlgsZ0JBQU0sRUFBRUEsTUFSSztBQVNibUIsbUJBQVMsRUFBRUEsU0FURTtBQVViRixtQkFBUyxFQUFFQSxTQVZFO0FBV2JJLHVCQUFhLEVBQUVBLGFBWEY7QUFZYkksa0JBQVEsRUFBRUEsUUFaRztBQWFiRixpQkFBTyxFQUFFQSxPQWJJLENBYUk7O0FBYkosU0FBZixDQURGO0FBaUJEOztBQUNELFVBQUlwRCxXQUFXLENBQUN1RSxJQUFaLEtBQXFCLEtBQXJCLElBQThCbkYsaUJBQWlCLEtBQUssR0FBeEQsRUFBNkQ7QUFBRTtBQUM3RGlELGdCQUFRLENBQUNyQyxXQUFXLENBQUNvQyxLQUFiLENBQVI7QUFDQU0sa0JBQVUsQ0FBQzFDLFdBQVcsQ0FBQzRCLE9BQWIsQ0FBVjtBQUNBVyxpQkFBUyxDQUFDdkMsV0FBVyxDQUFDc0MsTUFBYixDQUFUO0FBQ0FHLGlCQUFTLENBQUN6QyxXQUFXLENBQUN3QyxNQUFiLENBQVQ7QUFDQUssaUJBQVMsQ0FBQzdDLFdBQVcsQ0FBQzZCLE1BQWIsQ0FBVDtBQUNBb0Isb0JBQVksQ0FBQ2pELFdBQVcsQ0FBQ2dELFNBQWIsQ0FBWjtBQUNBRCxvQkFBWSxDQUFDL0MsV0FBVyxDQUFDOEMsU0FBYixDQUFaO0FBQ0FLLHdCQUFnQixDQUFDbkQsV0FBVyxDQUFDa0QsYUFBYixDQUFoQjtBQUNBSyxtQkFBVyxDQUFDdkQsV0FBVyxDQUFDc0QsUUFBYixDQUFYO0FBQ0FELGtCQUFVLENBQUNyRCxXQUFXLENBQUNvRCxPQUFiLENBQVY7QUFDRDs7QUFDRCxVQUFJcEQsV0FBVyxDQUFDdUUsSUFBWixLQUFxQixLQUF6QixFQUFnQztBQUFFO0FBQ2hDdEIsb0JBQVksQ0FBQyxHQUFELENBQVo7QUFDQUYsb0JBQVksQ0FBQyxDQUFDLENBQUYsQ0FBWjtBQUNBSSx3QkFBZ0IsQ0FBQyxFQUFELENBQWhCO0FBQ0FULGtCQUFVLENBQUMxQyxXQUFXLENBQUM0QixPQUFiLENBQVY7QUFDQWlCLGlCQUFTLENBQUM3QyxXQUFXLENBQUM2QixNQUFiLENBQVQ7QUFDQVUsaUJBQVMsQ0FBQ3ZDLFdBQVcsQ0FBQ3NDLE1BQWIsQ0FBVDtBQUNBRCxnQkFBUSxDQUFDckMsV0FBVyxDQUFDb0MsS0FBYixDQUFSO0FBQ0FpQixrQkFBVSxDQUFDckQsV0FBVyxDQUFDb0QsT0FBYixDQUFWO0FBQ0FHLG1CQUFXLENBQUM7QUFDVjNCLGlCQUFPLEVBQUUsQ0FBQyxHQUFHNUIsV0FBVyxDQUFDNEIsT0FBaEIsQ0FEQztBQUVWQyxnQkFBTSxFQUFFLENBQUMsR0FBRzdCLFdBQVcsQ0FBQzZCLE1BQWhCLENBRkU7QUFHVlMsZ0JBQU0sRUFBRSxDQUFDLEdBQUd0QyxXQUFXLENBQUNzQyxNQUFoQixDQUhFO0FBSVZFLGdCQUFNLEVBQUUsQ0FBQyxHQUFHQSxNQUFKO0FBSkUsU0FBRCxDQUFYO0FBTUQ7O0FBQ0QsVUFBSXhDLFdBQVcsQ0FBQ3VFLElBQVosS0FBcUIsS0FBekIsRUFBZ0M7QUFBRTtBQUNoQ3RCLG9CQUFZLENBQUMsR0FBRCxDQUFaO0FBQ0FGLG9CQUFZLENBQUMsQ0FBQyxDQUFGLENBQVo7QUFDQUksd0JBQWdCLENBQUMsRUFBRCxDQUFoQjtBQUNBVCxrQkFBVSxDQUFDMUMsV0FBVyxDQUFDNEIsT0FBYixDQUFWO0FBQ0FpQixpQkFBUyxDQUFDN0MsV0FBVyxDQUFDNkIsTUFBYixDQUFUO0FBQ0FZLGlCQUFTLENBQUN6QyxXQUFXLENBQUN3QyxNQUFiLENBQVQ7QUFDQUgsZ0JBQVEsQ0FBQ3JDLFdBQVcsQ0FBQ29DLEtBQWIsQ0FBUjtBQUNBbUIsbUJBQVcsQ0FBQztBQUNWM0IsaUJBQU8sRUFBRSxDQUFDLEdBQUc1QixXQUFXLENBQUM0QixPQUFoQixDQURDO0FBRVZDLGdCQUFNLEVBQUUsQ0FBQyxHQUFHN0IsV0FBVyxDQUFDNkIsTUFBaEIsQ0FGRTtBQUdWUyxnQkFBTSxFQUFFLENBQUMsR0FBR0EsTUFBSixDQUhFO0FBSVZFLGdCQUFNLEVBQUUsQ0FBQyxHQUFHeEMsV0FBVyxDQUFDd0MsTUFBaEI7QUFKRSxTQUFELENBQVg7QUFNRDtBQUNGOztBQUNEekMsaUJBQWEsQ0FBQ0gsT0FBRCxDQUFiO0FBQ0Q7O0FBRUQsUUFBTStFLHNCQUFzQixHQUFHLENBQUNwRCxFQUFELEVBQUtDLEVBQUwsS0FBWTtBQUN6QyxRQUFJb0QsVUFBVSxHQUFHLENBQUMsR0FBR2hELE9BQUosQ0FBakI7QUFDQSxRQUFJaUQsU0FBUyxHQUFHLENBQUMsR0FBR2hELE1BQUosQ0FBaEI7QUFDQSxRQUFJaUQsU0FBUyxHQUFHLENBQUMsR0FBR3hDLE1BQUosQ0FBaEI7QUFDQSxRQUFJeUMsU0FBUyxHQUFHLENBQUMsR0FBR3ZDLE1BQUosQ0FBaEIsQ0FKeUMsQ0FJWjs7QUFDN0IsUUFBSXdDLE1BQU0sR0FBRyxDQUFDLEdBQUdwRCxPQUFPLENBQUNMLEVBQUQsQ0FBWCxDQUFiO0FBQ0EsUUFBSTBELFdBQVcsR0FBR3JELE9BQU8sQ0FBQ0wsRUFBRCxDQUFQLENBQVlDLEVBQVosQ0FBbEI7QUFDQSxRQUFJMEQsZ0JBQWdCLEdBQUcsQ0FBQyxHQUFHaEMsYUFBSixDQUF2QjtBQUVBLFFBQUlpQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQzdELEVBQUQsQ0FBTixHQUFhLEdBQWIsR0FBbUI2RCxNQUFNLENBQUM1RCxFQUFELENBQXJDO0FBQ0EsUUFBSTZELEdBQUcsR0FBR25DLGFBQWEsQ0FBQ2hELE9BQWQsQ0FBc0JpRixLQUF0QixDQUFWOztBQUNBLFFBQUlyQyxTQUFTLEdBQUcsQ0FBQyxDQUFiLElBQWtCbUMsV0FBVyxLQUFLLEdBQXRDLEVBQTJDO0FBQ3pDRCxZQUFNLENBQUN4RCxFQUFELENBQU4sR0FDRXdCLFNBQVMsS0FBSyxHQUFkLEdBQW9COEIsU0FBUyxDQUFDaEMsU0FBRCxDQUE3QixHQUEyQ2lDLFNBQVMsQ0FBQ2pDLFNBQUQsQ0FEdEQ7QUFFQThCLGdCQUFVLENBQUNyRCxFQUFELENBQVYsR0FBaUIsQ0FBQyxHQUFHeUQsTUFBSixDQUFqQjtBQUNBaEMsZUFBUyxLQUFLLEdBQWQsR0FDSThCLFNBQVMsQ0FBQzFFLE1BQVYsQ0FBaUIwQyxTQUFqQixFQUE0QixDQUE1QixDQURKLEdBRUlpQyxTQUFTLENBQUMzRSxNQUFWLENBQWlCMEMsU0FBakIsRUFBNEIsQ0FBNUIsQ0FGSjtBQUdBLFVBQUl3QyxZQUFZLEdBQUcsQ0FBQyxHQUFHVCxTQUFTLENBQUN0RCxFQUFELENBQWIsQ0FBbkI7QUFDQStELGtCQUFZLENBQUM5RCxFQUFELENBQVosR0FBbUJ3QixTQUFuQjtBQUNBNkIsZUFBUyxDQUFDdEQsRUFBRCxDQUFULEdBQWdCLENBQUMsR0FBRytELFlBQUosQ0FBaEI7QUFFQXZDLGtCQUFZLENBQUVsRCxJQUFELElBQVVBLElBQUksR0FBRyxDQUFsQixDQUFaO0FBQ0E2QyxnQkFBVSxDQUFDa0MsVUFBRCxDQUFWO0FBQ0EvQixlQUFTLENBQUNnQyxTQUFELENBQVQ7QUFDQXRDLGVBQVMsQ0FBQ3VDLFNBQUQsQ0FBVDtBQUNBckMsZUFBUyxDQUFDc0MsU0FBRCxDQUFUO0FBQ0E1QixzQkFBZ0IsQ0FBQyxDQUFDLEdBQUdELGFBQUosRUFBbUJpQyxLQUFuQixDQUFELENBQWhCO0FBQ0QsS0FqQkQsTUFpQk8sSUFBSUYsV0FBVyxLQUFLLEdBQWhCLElBQXVCSSxHQUFHLEdBQUcsQ0FBQyxDQUFsQyxFQUFxQztBQUMxQztBQUNBO0FBQ0EsVUFDR3JDLFNBQVMsS0FBSyxHQUFkLElBQXFCOEIsU0FBUyxDQUFDakUsTUFBVixHQUFtQixDQUF6QyxJQUNDbUMsU0FBUyxLQUFLLEdBQWQsSUFBcUIrQixTQUFTLENBQUNsRSxNQUFWLEdBQW1CLENBRjNDLEVBR0U7QUFDQW1DLGlCQUFTLEtBQUssR0FBZCxHQUNJOEIsU0FBUyxDQUFDZixJQUFWLENBQWVrQixXQUFmLENBREosR0FFSUYsU0FBUyxDQUFDaEIsSUFBVixDQUFla0IsV0FBZixDQUZKO0FBR0EsWUFBSUQsTUFBTSxHQUFHLENBQUMsR0FBR0osVUFBVSxDQUFDckQsRUFBRCxDQUFkLENBQWI7QUFDQXlELGNBQU0sQ0FBQ3hELEVBQUQsQ0FBTixHQUFhLEdBQWI7QUFDQW9ELGtCQUFVLENBQUNyRCxFQUFELENBQVYsR0FBaUIsQ0FBQyxHQUFHeUQsTUFBSixDQUFqQjtBQUNBLFlBQUlNLFlBQVksR0FBRyxDQUFDLEdBQUdULFNBQVMsQ0FBQ3RELEVBQUQsQ0FBYixDQUFuQjtBQUNBK0Qsb0JBQVksQ0FBQzlELEVBQUQsQ0FBWixHQUFtQixFQUFuQjtBQUNBcUQsaUJBQVMsQ0FBQ3RELEVBQUQsQ0FBVCxHQUFnQixDQUFDLEdBQUcrRCxZQUFKLENBQWhCO0FBQ0F2QyxvQkFBWSxDQUNWQyxTQUFTLEtBQUssR0FBZCxHQUFvQjhCLFNBQVMsQ0FBQ2pFLE1BQVYsR0FBbUIsQ0FBdkMsR0FBMkNrRSxTQUFTLENBQUNsRSxNQUFWLEdBQW1CLENBRHBELENBQVo7QUFHQXFFLHdCQUFnQixDQUFDOUUsTUFBakIsQ0FBd0JpRixHQUF4QixFQUE2QixDQUE3QjtBQUVBM0Msa0JBQVUsQ0FBQ2tDLFVBQUQsQ0FBVjtBQUNBL0IsaUJBQVMsQ0FBQ2dDLFNBQUQsQ0FBVDtBQUNBdEMsaUJBQVMsQ0FBQ3VDLFNBQUQsQ0FBVDtBQUNBckMsaUJBQVMsQ0FBQ3NDLFNBQUQsQ0FBVDtBQUVBNUIsd0JBQWdCLENBQUMrQixnQkFBRCxDQUFoQjtBQUNEO0FBQ0Y7QUFDRixHQXpERDs7QUEyREEsUUFBTUssdUJBQXVCLEdBQUlDLFNBQUQsSUFBZTtBQUM3QztBQUNBLFFBQUl4QyxTQUFTLEtBQUssR0FBbEIsRUFBdUI7QUFDckJELGtCQUFZLENBQUN5QyxTQUFELENBQVo7QUFDRCxLQUZELE1BRU87QUFDTEMsV0FBSyxDQUFDLHFCQUFELENBQUw7QUFDRDtBQUNGLEdBUEQ7O0FBU0EsUUFBTUMsb0JBQW9CLEdBQUlGLFNBQUQsSUFBZTtBQUMxQztBQUNBLFFBQUl4QyxTQUFTLEtBQUssR0FBbEIsRUFBdUI7QUFDckJELGtCQUFZLENBQUN5QyxTQUFELENBQVo7QUFDRCxLQUZELE1BRU87QUFDTEMsV0FBSyxDQUFDLHFCQUFELENBQUw7QUFDRDtBQUNGLEdBUEQ7O0FBU0EsUUFBTUUsZ0JBQWdCLEdBQUcsTUFBTTtBQUM3QixRQUFJQyxVQUFVLEdBQUd4QyxPQUFqQjs7QUFDQSxTQUFLLElBQUluRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHaUQsYUFBYSxDQUFDckMsTUFBbEMsRUFBMENaLENBQUMsRUFBM0MsRUFBK0M7QUFDN0MsVUFBSXJCLGFBQWEsQ0FBQ3NCLE9BQWQsQ0FBc0JnRCxhQUFhLENBQUNqRCxDQUFELENBQW5DLElBQTBDLENBQUMsQ0FBL0MsRUFBa0Q7QUFDaEQyRixrQkFBVSxHQUFHQSxVQUFVLEdBQUcsQ0FBMUI7QUFDRDtBQUNGOztBQUNELFFBQUlkLFNBQVMsR0FBRyxDQUFDLEdBQUd4QyxNQUFKLENBQWhCO0FBQ0EsUUFBSXVELFFBQVEsR0FBRyxDQUFDLEdBQUd6RCxLQUFKLENBQWY7O0FBQ0EsV0FBTzBDLFNBQVMsQ0FBQ2pFLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0JnRixRQUFRLENBQUNoRixNQUFULEdBQWtCLENBQWpELEVBQW9EO0FBQ2xELFVBQUk4QyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IrQixRQUFRLENBQUNoRixNQUFwQyxDQUFYO0FBQ0FpRSxlQUFTLENBQUNmLElBQVYsQ0FBZThCLFFBQVEsQ0FBQ2xDLElBQUQsQ0FBdkI7QUFDQWtDLGNBQVEsQ0FBQ3pGLE1BQVQsQ0FBZ0J1RCxJQUFoQixFQUFzQixDQUF0QjtBQUNEOztBQUNEbUIsYUFBUyxDQUFDZCxJQUFWO0FBQ0FmLGdCQUFZLENBQUMsR0FBRCxDQUFaO0FBQ0FGLGdCQUFZLENBQUMsQ0FBQyxDQUFGLENBQVo7QUFDQUksb0JBQWdCLENBQUMsRUFBRCxDQUFoQjtBQUNBWixhQUFTLENBQUN1QyxTQUFELENBQVQ7QUFDQXpDLFlBQVEsQ0FBQ3dELFFBQUQsQ0FBUjtBQUNBeEMsY0FBVSxDQUFDdUMsVUFBRCxDQUFWO0FBQ0FyQyxlQUFXLENBQUM7QUFDVjNCLGFBQU8sRUFBRSxDQUFDLEdBQUdBLE9BQUosQ0FEQztBQUVWQyxZQUFNLEVBQUUsQ0FBQyxHQUFHQSxNQUFKLENBRkU7QUFHVlMsWUFBTSxFQUFFLENBQUMsR0FBR3dDLFNBQUosQ0FIRTtBQUlWdEMsWUFBTSxFQUFFLENBQUMsR0FBR0EsTUFBSjtBQUpFLEtBQUQsQ0FBWDtBQU9BbkMsVUFBTSxDQUFDOEQsSUFBUCxDQUNFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNibkYsWUFBTSxFQUFFQSxNQURLO0FBQ0c7QUFDaEJvRixVQUFJLEVBQUUsSUFGTztBQUVEO0FBQ1pDLFVBQUksRUFBRSxLQUhPO0FBR0E7QUFDYjNDLGFBQU8sRUFBRUEsT0FKSTtBQUlLO0FBQ2xCQyxZQUFNLEVBQUVBLE1BTEs7QUFLRztBQUNoQlMsWUFBTSxFQUFFd0MsU0FOSztBQU1NO0FBQ25CMUMsV0FBSyxFQUFFeUQsUUFQTTtBQU9JO0FBQ2pCekMsYUFBTyxFQUFFd0MsVUFSSSxDQVFPOztBQVJQLEtBQWYsQ0FERjtBQVlELEdBeENEOztBQXlDQSxRQUFNRSxhQUFhLEdBQUcsTUFBTTtBQUMxQixRQUFJZixTQUFTLEdBQUcsQ0FBQyxHQUFHdkMsTUFBSixDQUFoQjtBQUNBLFFBQUlxRCxRQUFRLEdBQUcsQ0FBQyxHQUFHekQsS0FBSixDQUFmOztBQUNBLFdBQU8yQyxTQUFTLENBQUNsRSxNQUFWLEdBQW1CLENBQW5CLElBQXdCZ0YsUUFBUSxDQUFDaEYsTUFBVCxHQUFrQixDQUFqRCxFQUFvRDtBQUNsRCxVQUFJOEMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCK0IsUUFBUSxDQUFDaEYsTUFBcEMsQ0FBWDtBQUNBa0UsZUFBUyxDQUFDaEIsSUFBVixDQUFlOEIsUUFBUSxDQUFDbEMsSUFBRCxDQUF2QjtBQUNBa0MsY0FBUSxDQUFDekYsTUFBVCxDQUFnQnVELElBQWhCLEVBQXNCLENBQXRCO0FBQ0Q7O0FBQ0RvQixhQUFTLENBQUNmLElBQVY7QUFDQSxRQUFJK0IsV0FBVyxHQUFHLENBQUMsR0FBR25FLE9BQUosQ0FBbEI7QUFDQSxRQUFJb0UsVUFBVSxHQUFHLENBQUMsR0FBR25FLE1BQUosQ0FBakI7QUFDQSxRQUFJb0UsVUFBVSxHQUFHLENBQUMsR0FBRzNELE1BQUosQ0FBakI7QUFDQSxRQUFJNEQsVUFBVSxHQUFHLENBQUMsR0FBRzFELE1BQUosQ0FBakI7QUFDQVMsZ0JBQVksQ0FBQyxHQUFELENBQVo7QUFDQUYsZ0JBQVksQ0FBQyxDQUFDLENBQUYsQ0FBWjtBQUNBSSxvQkFBZ0IsQ0FBQyxFQUFELENBQWhCO0FBQ0FWLGFBQVMsQ0FBQ3NDLFNBQUQsQ0FBVDtBQUNBMUMsWUFBUSxDQUFDd0QsUUFBRCxDQUFSO0FBQ0F0QyxlQUFXLENBQUM7QUFDVjNCLGFBQU8sRUFBRW1FLFdBREM7QUFFVmxFLFlBQU0sRUFBRW1FLFVBRkU7QUFHVjFELFlBQU0sRUFBRTJELFVBSEU7QUFJVnpELFlBQU0sRUFBRTBEO0FBSkUsS0FBRCxDQUFYO0FBT0E3RixVQUFNLENBQUM4RCxJQUFQLENBQ0VDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ2JuRixZQUFNLEVBQUVBLE1BREs7QUFDRztBQUNoQm9GLFVBQUksRUFBRSxJQUZPO0FBRUQ7QUFDWkMsVUFBSSxFQUFFLEtBSE87QUFHQTtBQUNiM0MsYUFBTyxFQUFFQSxPQUpJO0FBSUs7QUFDbEJDLFlBQU0sRUFBRUEsTUFMSztBQUtHO0FBQ2hCVyxZQUFNLEVBQUV1QyxTQU5LO0FBTU07QUFDbkIzQyxXQUFLLEVBQUV5RCxRQVBNLENBT0c7O0FBUEgsS0FBZixDQURGO0FBV0MsR0FwQ0g7O0FBc0NBLFFBQU1NLFdBQVcsR0FBRyxNQUFNO0FBQ3hCekQsY0FBVSxDQUFDLENBQUMsR0FBR1ksUUFBUSxDQUFDMUIsT0FBYixDQUFELENBQVY7QUFDQWlCLGFBQVMsQ0FBQyxDQUFDLEdBQUdTLFFBQVEsQ0FBQ3pCLE1BQWIsQ0FBRCxDQUFUO0FBQ0FVLGFBQVMsQ0FBQyxDQUFDLEdBQUdlLFFBQVEsQ0FBQ2hCLE1BQWIsQ0FBRCxDQUFUO0FBQ0FHLGFBQVMsQ0FBQyxDQUFDLEdBQUdhLFFBQVEsQ0FBQ2QsTUFBYixDQUFELENBQVQ7QUFDQU8sZ0JBQVksQ0FBQyxDQUFDLENBQUYsQ0FBWjtBQUNBSSxvQkFBZ0IsQ0FBQyxFQUFELENBQWhCO0FBQ0QsR0FQRDs7QUFTQSxTQUNFN0QsTUFBTSxDQUFDdUIsTUFBUCxHQUFnQixDQUFoQixnQkFDQTtBQUFRLE1BQUUsRUFBQyxvQkFBWDtBQUNFLFdBQU8sRUFBRTRELGNBQWMsQ0FBQyxTQUFELEVBQU9uRixNQUFNLENBQUMsQ0FBRCxDQUFiLENBRHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsZ0JBT0E7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQWtDLHVCQUFZLFNBQTlDO0FBQXdELGFBQUssRUFBQyxNQUE5RDtBQUFBLCtCQUNFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFFLFFBQVo7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVNFO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsbUJBQWY7QUFBQSwrQkFDRSxxRUFBQyxTQUFEO0FBQ0UsZ0JBQU0sRUFBRWdELE1BRFY7QUFFRSxtQkFBUyxFQUFFVSxTQUZiO0FBR0UsbUJBQVMsRUFBRUYsU0FIYjtBQUlFLGlCQUFPLEVBQUdzRCxFQUFELElBQVFiLHVCQUF1QixDQUFDYSxFQUFELENBSjFDO0FBS0UsMkJBQWlCLEVBQUUsTUFBTVQsZ0JBQWdCLEVBTDNDO0FBTUUsMkJBQWlCLEVBQUUsTUFBTVEsV0FBVyxFQU50QztBQU9FLGlCQUFPLEVBQUUvQyxPQVBYO0FBUUUsMkJBQWlCLEVBQUVoRTtBQVJyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQWFFO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQXVCLGFBQUssRUFBQyxRQUE3QjtBQUFBLCtCQUNFLHFFQUFDLEtBQUQ7QUFDRSxpQkFBTyxFQUFFd0MsT0FEWDtBQUVFLGdCQUFNLEVBQUVDLE1BRlY7QUFHRSxpQkFBTyxFQUFFLENBQUNOLEVBQUQsRUFBS0MsRUFBTCxLQUFZbUQsc0JBQXNCLENBQUNwRCxFQUFELEVBQUtDLEVBQUw7QUFIN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBYkYsZUFvQkU7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUEsK0JBQ0UscUVBQUMsTUFBRDtBQUNFLGdCQUFNLEVBQUVnQixNQURWO0FBRUUsbUJBQVMsRUFBRVEsU0FGYjtBQUdFLG1CQUFTLEVBQUVGLFNBSGI7QUFJRSxpQkFBTyxFQUFHc0QsRUFBRCxJQUFRVixvQkFBb0IsQ0FBQ1UsRUFBRCxDQUp2QztBQUtFLDJCQUFpQixFQUFFLE1BQU1OLGFBQWEsRUFMeEM7QUFNRSwyQkFBaUIsRUFBRSxNQUFNSyxXQUFXLEVBTnRDO0FBT0UsMkJBQWlCLEVBQUUvRztBQVByQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFwQkYsZUErQkU7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQSwrQkFDRSxxRUFBQyxLQUFEO0FBQU8sZUFBSyxFQUFFZ0Q7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGO0FBc0RELENBaFdEOztJQUFNSCxJOztNQUFBQSxJOztBQWtXTixNQUFNb0UsS0FBSyxHQUFJbkYsS0FBRCxJQUFXO0FBQ3ZCO0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUdBLEtBQUssQ0FBQ2tCLEtBQU4sQ0FBWXRCLEdBQVosQ0FBZ0IsQ0FBQ3dGLENBQUQsRUFBSUYsRUFBSixrQkFDZjtBQUFBLGlCQUNHQSxFQUFFLEdBQUcsQ0FBTCxJQUFVRSxDQUFDLEtBQUtwRixLQUFLLENBQUNrQixLQUFOLENBQVlnRSxFQUFFLEdBQUcsQ0FBakIsQ0FBaEIsZ0JBQ0M7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxnQkFHQyx1SkFKSixlQU1FO0FBQU0saUJBQVMsRUFBQyxnQkFBaEI7QUFBQSxrQkFBa0NFO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkY7QUFBQSxPQUFZLE9BQU1GLEVBQUcsRUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZUQsQ0FqQkQ7O01BQU1DLEs7O0FBbUJOLE1BQU1FLFFBQVEsR0FBSXJGLEtBQUQsSUFBVztBQUMxQixzQkFDRTtBQUFNLGFBQVMsRUFBRUEsS0FBSyxDQUFDc0YsU0FBdkI7QUFBa0MsV0FBTyxFQUFFdEYsS0FBSyxDQUFDUSxPQUFqRDtBQUFBLGNBQ0dSLEtBQUssQ0FBQ3VGO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsQ0FORDs7TUFBTUYsUTs7QUFRTixNQUFNRyxnQkFBZ0IsR0FBSXhGLEtBQUQsSUFBVztBQUNsQyxzQkFDRTtBQUFRLGFBQVMsRUFBQyxjQUFsQjtBQUFpQyxXQUFPLEVBQUVBLEtBQUssQ0FBQ1EsT0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBTkQ7O01BQU1nRixnQjs7QUFRTixNQUFNQyxnQkFBZ0IsR0FBSXpGLEtBQUQsSUFBVztBQUNsQyxzQkFDRTtBQUFRLGFBQVMsRUFBQyxlQUFsQjtBQUFrQyxXQUFPLEVBQUVBLEtBQUssQ0FBQ1EsT0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBTkQ7O01BQU1pRixnQjs7QUFRTixNQUFNQyxTQUFTLEdBQUkxRixLQUFELElBQVc7QUFDM0IsUUFBTTJGLFVBQVUsR0FBRyxDQUFDTCxTQUFELEVBQVloQixTQUFaLEVBQXVCaUIsU0FBdkIsS0FBcUM7QUFDdEQsd0JBQ0UscUVBQUMsUUFBRDtBQUVFLGVBQVMsRUFBRUQsU0FGYjtBQUdFLGVBQVMsRUFBRUMsU0FIYjtBQUlFLGFBQU8sRUFBRSxNQUFNdkYsS0FBSyxDQUFDUSxPQUFOLENBQWM4RCxTQUFkO0FBSmpCLE9BQ09nQixTQUFTLEdBQUdwQixNQUFNLENBQUNJLFNBQUQsQ0FEekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQVFELEdBVEQ7O0FBV0EsUUFBTXNCLGdCQUFnQixHQUFHLE1BQU07QUFDN0Isd0JBQU8scUVBQUMsZ0JBQUQ7QUFBa0IsYUFBTyxFQUFFLE1BQU01RixLQUFLLENBQUM2RixpQkFBTjtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0QsR0FGRDs7QUFJQSxRQUFNQyxpQkFBaUIsR0FBRyxNQUFNO0FBQzlCLHdCQUFPLHFFQUFDLGdCQUFEO0FBQWtCLGFBQU8sRUFBRSxNQUFNOUYsS0FBSyxDQUFDK0YsaUJBQU47QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNELEdBRkQ7O0FBSUEsUUFBTUMsb0JBQW9CLEdBQUlDLEtBQUQsSUFBVztBQUN0QyxRQUFJQyxJQUFJLEdBQUd6RSxLQUFLLENBQUN3RSxLQUFELENBQUwsQ0FBYXZFLElBQWIsQ0FBa0IsVUFBbEIsQ0FBWDtBQUNBLFdBQU93RSxJQUFJLENBQUN0RyxHQUFMLENBQVMsQ0FBQ0YsS0FBRCxFQUFReUcsS0FBUixrQkFDZDtBQUFBLDZCQUNFO0FBQ0UsV0FBRyxFQUFDLGdCQUROO0FBRUUsV0FBRyxFQUFDLHFCQUZOO0FBR0UsYUFBSyxFQUFDLEtBSFI7QUFJRSxjQUFNLEVBQUM7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsT0FBV3pHLEtBQUssR0FBR3dFLE1BQU0sQ0FBQ2lDLEtBQUQsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESyxDQUFQO0FBVUQsR0FaRDs7QUFjQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBRyxlQUFTLEVBQUMsWUFBYjtBQUFBLGdCQUNHbkcsS0FBSyxDQUFDb0IsTUFBTixDQUFheEIsR0FBYixDQUFpQixDQUFDd0YsQ0FBRCxFQUFJRixFQUFKLEtBQ2hCUyxVQUFVLENBQ1IzRixLQUFLLENBQUM4QixTQUFOLEtBQW9CLEdBQXBCLElBQTJCOUIsS0FBSyxDQUFDNEIsU0FBTixLQUFvQnNELEVBQS9DLEdBQ0ksdUJBREosR0FFSSxlQUhJLEVBSVJBLEVBSlEsRUFLUmxGLEtBQUssQ0FBQzlCLGlCQUFOLEtBQTRCLEdBQTVCLEdBQWtDa0gsQ0FBbEMsR0FBc0MsR0FMOUIsQ0FEWDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsRUFhR3BGLEtBQUssQ0FBQzhCLFNBQU4sS0FBb0IsR0FBcEIsSUFBMkI5QixLQUFLLENBQUM5QixpQkFBTixLQUE0QixHQUF2RCxHQUE2RDBILGdCQUFnQixFQUE3RSxnQkFBa0YsdUpBYnJGLEVBY0c1RixLQUFLLENBQUM4QixTQUFOLEtBQW9CLEdBQXBCLElBQTJCOUIsS0FBSyxDQUFDOUIsaUJBQU4sS0FBNEIsR0FBdkQsR0FBNkQ0SCxpQkFBaUIsRUFBOUUsZ0JBQW1GLHVKQWR0RixlQWVFO0FBQUEsbUNBQ2lCOUYsS0FBSyxDQUFDa0MsT0FEdkIsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLEVBR0c4RCxvQkFBb0IsQ0FBQ2hHLEtBQUssQ0FBQ2tDLE9BQVAsQ0FIdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBdUJELENBekREOztNQUFNd0QsUzs7QUEyRE4sTUFBTVUsTUFBTSxHQUFJcEcsS0FBRCxJQUFXO0FBQ3hCLFFBQU0yRixVQUFVLEdBQUcsQ0FBQ0wsU0FBRCxFQUFZaEIsU0FBWixFQUF1QmlCLFNBQXZCLEtBQXFDO0FBQ3RELHdCQUNFLHFFQUFDLFFBQUQ7QUFFRSxlQUFTLEVBQUVELFNBRmI7QUFHRSxlQUFTLEVBQUVDLFNBSGI7QUFJRSxhQUFPLEVBQUUsTUFBTXZGLEtBQUssQ0FBQ1EsT0FBTixDQUFjOEQsU0FBZDtBQUpqQixPQUNPZ0IsU0FBUyxHQUFHcEIsTUFBTSxDQUFDSSxTQUFELENBRHpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFRRCxHQVREOztBQVdBLFFBQU1zQixnQkFBZ0IsR0FBRyxNQUFNO0FBQzdCLHdCQUFPLHFFQUFDLGdCQUFEO0FBQWtCLGFBQU8sRUFBRSxNQUFNNUYsS0FBSyxDQUFDNkYsaUJBQU47QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNELEdBRkQ7O0FBSUEsUUFBTUMsaUJBQWlCLEdBQUcsTUFBTTtBQUM5Qix3QkFBTyxxRUFBQyxnQkFBRDtBQUFrQixhQUFPLEVBQUUsTUFBTTlGLEtBQUssQ0FBQytGLGlCQUFOO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFHLGVBQVMsRUFBQyxZQUFiO0FBQUEsZ0JBQ0cvRixLQUFLLENBQUNzQixNQUFOLENBQWExQixHQUFiLENBQWlCLENBQUN3RixDQUFELEVBQUlGLEVBQUosS0FDaEJTLFVBQVUsQ0FDUjNGLEtBQUssQ0FBQzhCLFNBQU4sS0FBb0IsR0FBcEIsSUFBMkI5QixLQUFLLENBQUM0QixTQUFOLEtBQW9Cc0QsRUFBL0MsR0FDSSx1QkFESixHQUVJLGVBSEksRUFJUkEsRUFKUSxFQUtSbEYsS0FBSyxDQUFDOUIsaUJBQU4sS0FBNEIsR0FBNUIsR0FBa0NrSCxDQUFsQyxHQUFzQyxHQUw5QixDQURYO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixFQWFHcEYsS0FBSyxDQUFDOEIsU0FBTixLQUFvQixHQUFwQixJQUEyQjlCLEtBQUssQ0FBQzlCLGlCQUFOLEtBQTRCLEdBQXZELEdBQTZEMEgsZ0JBQWdCLEVBQTdFLGdCQUFrRix1SkFickYsRUFjRzVGLEtBQUssQ0FBQzhCLFNBQU4sS0FBb0IsR0FBcEIsSUFBMkI5QixLQUFLLENBQUM5QixpQkFBTixLQUE0QixHQUF2RCxHQUE2RDRILGlCQUFpQixFQUE5RSxnQkFBbUYsdUpBZHRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBa0JELENBdENEOztPQUFNTSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BiL3ByaXNvbmJyZWFrMi5jMmJlOTljZTYxODM5YzIxMDllOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQ3VzdG9tU29ja2V0IGZyb20gXCIuLi8uLi93c1wiO1xyXG5cclxuXHJcbmNvbnN0IGVzY2FwZWhhdGNoZXMgPSBbXHJcbiAgXCIwLTBcIixcclxuICBcIjAtN1wiLFxyXG4gIFwiMC0xNFwiLFxyXG4gIFwiNy0wXCIsXHJcbiAgXCI3LTE0XCIsXHJcbiAgXCIxNC0wXCIsXHJcbiAgXCIxNC03XCIsXHJcbiAgXCIxNC0xNFwiLFxyXG5dOyAvLyBjb29yZHMgb2YgZXNjYXBlIGhhdGNoZXNcclxuY29uc3QgaW5pdGlhbHRpbGVzID0gW1xyXG4gIFwiQVwiLFxyXG4gIFwiQVwiLFxyXG4gIFwiQVwiLFxyXG4gIFwiQVwiLFxyXG4gIFwiQVwiLFxyXG4gIFwiQVwiLFxyXG4gIFwiQVwiLFxyXG4gIFwiQVwiLFxyXG4gIFwiQVwiLFxyXG4gIFwiQlwiLFxyXG4gIFwiQlwiLFxyXG4gIFwiQ1wiLFxyXG4gIFwiQ1wiLFxyXG4gIFwiRFwiLFxyXG4gIFwiRFwiLFxyXG4gIFwiRFwiLFxyXG4gIFwiRFwiLFxyXG4gIFwiRVwiLFxyXG4gIFwiRVwiLFxyXG4gIFwiRVwiLFxyXG4gIFwiRVwiLFxyXG4gIFwiRVwiLFxyXG4gIFwiRVwiLFxyXG4gIFwiRVwiLFxyXG4gIFwiRVwiLFxyXG4gIFwiRVwiLFxyXG4gIFwiRVwiLFxyXG4gIFwiRVwiLFxyXG4gIFwiRVwiLFxyXG4gIFwiRlwiLFxyXG4gIFwiRlwiLFxyXG4gIFwiR1wiLFxyXG4gIFwiR1wiLFxyXG4gIFwiR1wiLFxyXG4gIFwiSFwiLFxyXG4gIFwiSFwiLFxyXG4gIFwiSVwiLFxyXG4gIFwiSVwiLFxyXG4gIFwiSVwiLFxyXG4gIFwiSVwiLFxyXG4gIFwiSVwiLFxyXG4gIFwiSVwiLFxyXG4gIFwiSVwiLFxyXG4gIFwiSVwiLFxyXG4gIFwiSVwiLFxyXG4gIFwiSlwiLFxyXG4gIFwiS1wiLFxyXG4gIFwiTFwiLFxyXG4gIFwiTFwiLFxyXG4gIFwiTFwiLFxyXG4gIFwiTFwiLFxyXG4gIFwiTVwiLFxyXG4gIFwiTVwiLFxyXG4gIFwiTlwiLFxyXG4gIFwiTlwiLFxyXG4gIFwiTlwiLFxyXG4gIFwiTlwiLFxyXG4gIFwiTlwiLFxyXG4gIFwiTlwiLFxyXG4gIFwiT1wiLFxyXG4gIFwiT1wiLFxyXG4gIFwiT1wiLFxyXG4gIFwiT1wiLFxyXG4gIFwiT1wiLFxyXG4gIFwiT1wiLFxyXG4gIFwiT1wiLFxyXG4gIFwiT1wiLFxyXG4gIFwiUFwiLFxyXG4gIFwiUFwiLFxyXG4gIFwiUVwiLFxyXG4gIFwiUlwiLFxyXG4gIFwiUlwiLFxyXG4gIFwiUlwiLFxyXG4gIFwiUlwiLFxyXG4gIFwiUlwiLFxyXG4gIFwiUlwiLFxyXG4gIFwiU1wiLFxyXG4gIFwiU1wiLFxyXG4gIFwiU1wiLFxyXG4gIFwiU1wiLFxyXG4gIFwiVFwiLFxyXG4gIFwiVFwiLFxyXG4gIFwiVFwiLFxyXG4gIFwiVFwiLFxyXG4gIFwiVFwiLFxyXG4gIFwiVFwiLFxyXG4gIFwiVVwiLFxyXG4gIFwiVVwiLFxyXG4gIFwiVVwiLFxyXG4gIFwiVVwiLFxyXG4gIFwiVlwiLFxyXG4gIFwiVlwiLFxyXG4gIFwiV1wiLFxyXG4gIFwiV1wiLFxyXG4gIFwiWFwiLFxyXG4gIFwiWVwiLFxyXG4gIFwiWVwiLFxyXG4gIFwiWlwiLFxyXG4gIFwiP1wiLFxyXG4gIFwiP1wiLFxyXG5dOyAvLyBpbml0aWFsIHRpbGUgcG9vbFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpc29uQnJlYWsoKSB7XHJcbiAgY29uc3QgW2lubG9iYnksIHNldElubG9iYnldID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbZ2FtZWlkLCBzZXRHYW1laWRdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3ByaXNvbmVyc09yR3VhcmRzLCBzZXRQcmlzb25lcnNPckd1YXJkc10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbd3Ntc2dzLCBzZXRXc21zZ3NdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW21zZ2lkLCBzZXRNc2dpZF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGxldCBob3N0ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICd3c3M6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20nIDogJ3dzOi8vbG9jYWxob3N0OjUwMDAnO1xyXG4gIGNvbnN0IGFjY2VwdE1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgc2V0TXNnaWQoKGN1cnIpID0+IGN1cnIgKyAxKVxyXG4gICAgc2V0V3Ntc2dzKChjdXJyKSA9PiBbLi4uY3VyciwgbWVzc2FnZS5kYXRhXSk7XHJcbiAgfVxyXG4gIGNvbnN0IHJlbW92ZU1lc3NhZ2UgPSAobWVzc2FnZURhdGEpID0+IHtcclxuICAgIGxldCBpID0gd3Ntc2dzLmluZGV4T2YobWVzc2FnZURhdGEpO1xyXG4gICAgbGV0IHcgPSBbLi4ud3Ntc2dzXTtcclxuICAgIHcuc3BsaWNlKGksMSk7XHJcbiAgICBzZXRXc21zZ3Modyk7XHJcbiAgfVxyXG4gIGNvbnN0IFtjbGllbnQsIHNldENsaWVudF0gPSB1c2VTdGF0ZShuZXcgQ3VzdG9tU29ja2V0KGhvc3QsIGFjY2VwdE1lc3NhZ2UpKTtcclxuICB1c2VFZmZlY3QoKCkgPT4gKFxyXG4gICAgY2xpZW50LmNvbm5lY3QoKVxyXG4gICksW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICBpbmxvYmJ5IHx8IHByaXNvbmVyc09yR3VhcmRzID09PSAnJyA/XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cD5JbiB0aGUgbG9iYnk8L3A+XHJcbiAgICAgIDxsYWJlbD5HYW1lIGlkOiZuYnNwOzwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgbmFtZT1cImdhbWVpZFwiXHJcbiAgICAgICAgICB2YWx1ZT17Z2FtZWlkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0R2FtZWlkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPGxhYmVsPiZuYnNwOzwvbGFiZWw+XHJcbiAgICAgIDxidXR0b24gaWQ9XCJzdGFydGdhbWVcIlxyXG4gICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmIChnYW1laWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzKCdQJyk7XHJcbiAgICAgICAgICAgICAgc2V0SW5sb2JieShmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAgIFN0YXJ0IEdhbWVcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxsYWJlbD4mbmJzcDs8L2xhYmVsPlxyXG4gICAgICA8YnV0dG9uIGlkPVwiam9pbmdhbWVcIlxyXG4gICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmIChnYW1laWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzKCdHJyk7XHJcbiAgICAgICAgICAgICAgc2V0SW5sb2JieShmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAgIEpvaW4gR2FtZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAge3dzbXNncy5tYXAoIChtc2csIGlueCkgPT4gKFxyXG4gICAgICAgIDxsaSBrZXk9e2lueH0+e21zZ308L2xpPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICAgOlxyXG4gICAgPEdhbWUgcHJpc29uZXJzT3JHdWFyZHM9e3ByaXNvbmVyc09yR3VhcmRzfVxyXG4gICAgICBnYW1laWQ9e2dhbWVpZH1cclxuICAgICAgbXNnaWQ9e21zZ2lkfSBcclxuICAgICAgd3Ntc2dzPXt3c21zZ3N9XHJcbiAgICAgIGNsaWVudD17Y2xpZW50fVxyXG4gICAgICByZW1vdmVNZXNzYWdlPXtyZW1vdmVNZXNzYWdlfVxyXG4gICAgICAvPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgU3F1YXJlID0gKHByb3BzKSA9PiB7XHJcbiAgLy8gc3F1YXJldXNlZGJ5LCByaSwgY2ksIGMsIG9uQ2xpY2tcclxuICAvLyBuZWVkIHNxdWFyZXVzZWRieSB0byBwaWNrIGNzcyBjbGFzc05hbWUgY29ycmVzcG9uZGluZyB0byB3aG8gcGxheWVkIHRoZSB0aWxlIG9uIHRoZSBzcXVhcmVcclxuICAvLyBuZWVkIHJpLCBjaSB0byBkaXNwbGF5IGFsdGVybmF0aW5nIGNoYXJhY3RlcnMgb24gdW51c2VkIHNxdWFyZXNcclxuICAvLyBuZWVkIGMgdG8gcmVwcmVzZW50IHdoaWNoIHRpbGUgaXMgb24gdGhlIHNxdWFyZSwgaWYgYW55XHJcbiAgLy8gbmVlZCBvbkNsaWNrIHRvIGhhbmRsZSBzcXVhcmUgY2xpY2sgYXQgYSBoaWdoZXIgbGV2ZWxcclxuICBjb25zdCB1c2VkYnljbGFzcyA9XHJcbiAgICBwcm9wcy5zcXVhcmV1c2VkYnkgPT09IFwiUFwiXHJcbiAgICAgID8gXCJwYlNxdWFyZVVzZWRCeVByaXNvbmVyc1wiXHJcbiAgICAgIDogXCJwYlNxdWFyZVVzZWRCeUd1YXJkc1wiO1xyXG4gIGNvbnN0IHRkY2xhc3MgPVxyXG4gICAgcHJvcHMuYyAhPT0gXCIuXCJcclxuICAgICAgPyB1c2VkYnljbGFzc1xyXG4gICAgICA6IHByb3BzLnJpID09PSA3ICYmIHByb3BzLmNpID09PSA3XHJcbiAgICAgID8gXCJwYlNxdWFyZUNlbnRlclNxdWFyZVwiXHJcbiAgICAgIDogKHByb3BzLnJpID09PSAwIHx8IHByb3BzLnJpID09PSA3IHx8IHByb3BzLnJpID09PSAxNCkgJiZcclxuICAgICAgICAocHJvcHMuY2kgPT09IDAgfHwgcHJvcHMuY2kgPT09IDcgfHwgcHJvcHMuY2kgPT09IDE0KVxyXG4gICAgICA/IFwicGJTcXVhcmVFc2NhcGVIYXRjaFwiXHJcbiAgICAgIDogcHJvcHMucmkgJSAyID09PSBwcm9wcy5jaSAlIDJcclxuICAgICAgPyBcInBiU3F1YXJlXCJcclxuICAgICAgOiBcInBiU3F1YXJlMlwiO1xyXG4gIGNvbnN0IHRkdmFsdWUgPVxyXG4gICAgcHJvcHMuYyAhPT0gXCIuXCJcclxuICAgICAgPyBwcm9wcy5jXHJcbiAgICAgIDogdGRjbGFzcyA9PT0gXCJwYlNxdWFyZUNlbnRlclNxdWFyZVwiXHJcbiAgICAgID8gXCLinLBcIlxyXG4gICAgICA6IHRkY2xhc3MgPT09IFwicGJTcXVhcmVFc2NhcGVIYXRjaFwiXHJcbiAgICAgID8gXCLwn5KrXCJcclxuICAgICAgOiBwcm9wcy5yaSAlIDIgPT09IHByb3BzLmNpICUgMlxyXG4gICAgICA/IFwi4o6UXCJcclxuICAgICAgOiBcIuKcplwiO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGRjbGFzc30gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIHt0ZHZhbHVlfVxyXG4gICAgPC9idXR0b24+XHJcbik7XHJcbn07XHJcblxyXG5jb25zdCBCb2FyZCA9ICh7IG9uQ2xpY2ssIHNxdWFyZXMsIHVzZWRieSB9KSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyU3F1YXJlID0gKHJpLCBjaSwgYywgc3F1YXJldXNlZGJ5KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dGQga2V5PXtgU3F1YXJlJHtyaX0tJHtjaX1gfT5cclxuICAgICAgICA8U3F1YXJlXHJcbiAgICAgICAgICBjPXtjfVxyXG4gICAgICAgICAgY2k9e2NpfVxyXG4gICAgICAgICAgcmk9e3JpfVxyXG4gICAgICAgICAgc3F1YXJldXNlZGJ5PXtzcXVhcmV1c2VkYnl9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKHJpLCBjaSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC90ZD5cclxuICAgICk7XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJSb3cgPSAocmkpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0ciBrZXk9e2BCb2FyZFJvdyR7cml9YH0gY2xhc3NOYW1lPVwicm93IHBiUm93XCI+XHJcbiAgICAgICAge3NxdWFyZXNbcmldLm1hcCgoYywgY2kpID0+IHJlbmRlclNxdWFyZShyaSwgY2ksIGMsIHVzZWRieVtyaV1bY2ldKSl9XHJcbiAgICAgIDwvdHI+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dGFibGUgY2xhc3NOYW1lPVwicGJCb2FyZFwiPlxyXG4gICAgICA8dGJvZHk+e3NxdWFyZXMubWFwKChyLCByaSkgPT4gcmVuZGVyUm93KHJpKSl9PC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEdhbWUgPSAoe3ByaXNvbmVyc09yR3VhcmRzLCBnYW1laWQsIG1zZ2lkLCB3c21zZ3MsIGNsaWVudCwgcmVtb3ZlTWVzc2FnZX0pID0+IHtcclxuICBjb25zdCBbbGFzdG1zZ2lkLCBzZXRMYXN0bXNnaWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3RpbGVzLCBzZXRUaWxlc10gPSB1c2VTdGF0ZShbLi4uaW5pdGlhbHRpbGVzXSk7XHJcbiAgY29uc3QgW3B0aWxlcywgc2V0UHRpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZ3RpbGVzLCBzZXRHdGlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzcXVhcmVzLCBzZXRTcXVhcmVzXSA9IHVzZVN0YXRlKEFycmF5KDE1KS5maWxsKEFycmF5KDE1KS5maWxsKFwiLlwiKSkpO1xyXG4gIGNvbnN0IFt1c2VkYnksIHNldFVzZWRieV0gPSB1c2VTdGF0ZShBcnJheSgxNSkuZmlsbChBcnJheSgxNSkuZmlsbChcIlwiKSkpO1xyXG4gIGNvbnN0IFtzZWxlY3Rpb24sIHNldFNlbGVjdGlvbl0gPSB1c2VTdGF0ZSgtMSk7XHJcbiAgY29uc3QgW3dob3NldHVybiwgc2V0V2hvc2V0dXJuXSA9IHVzZVN0YXRlKFwiUFwiKTtcclxuICBjb25zdCBbY3VycmVudGNvb3Jkcywgc2V0Q3VycmVudGNvb3Jkc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Jlc2N1ZXMsIHNldFJlc2N1ZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3NuYXBzaG90LCBzZXRTbmFwc2hvdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICBzcXVhcmVzOiBbLi4uc3F1YXJlc10sXHJcbiAgICB1c2VkYnk6IFsuLi51c2VkYnldLFxyXG4gICAgcHRpbGVzOiBbLi4ucHRpbGVzXSxcclxuICAgIGd0aWxlczogWy4uLmd0aWxlc10sXHJcbiAgfSk7XHJcblxyXG4gIC8vIGxldCBob3N0ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICd3c3M6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20nIDogJ3dzOi8vbG9jYWxob3N0OjUwMDAnO1xyXG4gIC8vIGNvbnN0IFtjbGllbnQsIHNldENsaWVudF0gPSB1c2VTdGF0ZShuZXcgQ3VzdG9tU29ja2V0KGhvc3QsIHByb2Nlc3NNZXNzYWdlKSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGNsaWVudC5jb25uZWN0KCk7XHJcbiAgICBpZiAocHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiKSB7XHJcbiAgICAgIGxldCB0ZW1wUFRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICAgIGxldCB0ZW1wR1RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICAgIGxldCB0ZW1wVGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgICB3aGlsZSAodGVtcFBUaWxlcy5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZW1wVGlsZXMubGVuZ3RoKTtcclxuICAgICAgICB0ZW1wUFRpbGVzLnB1c2godGVtcFRpbGVzW3JhbmRdKTtcclxuICAgICAgICB0ZW1wVGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZW1wVGlsZXMubGVuZ3RoKTtcclxuICAgICAgICB0ZW1wR1RpbGVzLnB1c2godGVtcFRpbGVzW3JhbmRdKTtcclxuICAgICAgICB0ZW1wVGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRlbXBQVGlsZXMuc29ydCgpO1xyXG4gICAgICB0ZW1wR1RpbGVzLnNvcnQoKTtcclxuICAgICAgc2V0R3RpbGVzKHRlbXBHVGlsZXMpO1xyXG4gICAgICBzZXRQdGlsZXModGVtcFBUaWxlcyk7XHJcbiAgICAgIHNldFRpbGVzKHRlbXBUaWxlcyk7ICBcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbmRpbmcgZ2dkXCIpXHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgICAgZnVuYzogXCJnZ2RcIiAvLyBnZXQgZ2FtZSBkYXRhXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhdGNoIHt9XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBsb2dNZXNzYWdlRnJvbVdTID0gKG1lc3NhZ2VEYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIk1lc3NhZ2UgYmVpbmcgcmVjZWl2ZWQgYnkgXCIgKyBwcmlzb25lcnNPckd1YXJkcyk7XHJcbiAgICBjb25zb2xlLmxvZyhcImZ1bmMgOiBcIiArIG1lc3NhZ2VEYXRhLmZ1bmMpO1xyXG4gICAgY29uc29sZS5sb2coXCJwdGlsZXMgOiBcIiArIEpTT04uc3RyaW5naWZ5KHB0aWxlcykgKyBcIiAtPiBcIiArIG1lc3NhZ2VEYXRhLnB0aWxlcyk7XHJcbiAgICBjb25zb2xlLmxvZyhcImd0aWxlcyA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZ3RpbGVzKSArIFwiIC0+IFwiICsgbWVzc2FnZURhdGEuZ3RpbGVzKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHByb2Nlc3NNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgIGxldCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZSk7IC8vIHdhcyBtZXNzYWdlLmRhdGFcclxuICAgIGxvZ01lc3NhZ2VGcm9tV1MobWVzc2FnZURhdGEpO1xyXG4gICAgaWYgKG1lc3NhZ2VEYXRhLmdhbWVpZCA9PT0gZ2FtZWlkICYmIG1lc3NhZ2VEYXRhLnR5cGUgPT09IFwicGJcIikgeyAvLyBUaGlzIGluc3RhbmNlIG9mIGEgcHJpc29uIGJyZWFrIGdhbWVcclxuICAgICAgLy8gd2hlbiBndWFyZHMgam9pbiBnYW1lIHRoZXkgc2VuZCBnZ2QsIGFuZCBwcmlzb25lciBwaWNrcyBpdCB1cCBhbmQgc2VuZHMgc2dkLCB0aGVuIGd1YXJkcyBwaWNrIHRoYXQgdXAgYW5kIHRha2UgdGhlIGRhdGFcclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiZ2dkXCIgJiYgcHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiKSB7IC8vIGdldCBnYW1lIGRhdGEgKHNlbnQgYnkgZ3VhcmRzLCBwcmlzb25lcnMgcmVzcG9uZCBoZXJlKVxyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICAgIGZ1bmM6IFwic2dkXCIsIC8vIHNlbmQgZ2FtZSBkYXRhXHJcbiAgICAgICAgICAgIHRpbGVzOiB0aWxlcyxcclxuICAgICAgICAgICAgc3F1YXJlczogc3F1YXJlcyxcclxuICAgICAgICAgICAgcHRpbGVzOiBwdGlsZXMsXHJcbiAgICAgICAgICAgIGd0aWxlczogZ3RpbGVzLFxyXG4gICAgICAgICAgICB1c2VkYnk6IHVzZWRieSxcclxuICAgICAgICAgICAgd2hvc2V0dXJuOiB3aG9zZXR1cm4sXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbjogc2VsZWN0aW9uLFxyXG4gICAgICAgICAgICBjdXJyZW50Y29vcmRzOiBjdXJyZW50Y29vcmRzLFxyXG4gICAgICAgICAgICBzbmFwc2hvdDogc25hcHNob3QsXHJcbiAgICAgICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXMgLy8gbWF5IGhhdmUgcmVzY3VlZCBhbm90aGVyIHByaXNvbmVyXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwic2dkXCIgJiYgcHJpc29uZXJzT3JHdWFyZHMgPT09IFwiR1wiKSB7IC8vIHNlbmQgZ2FtZSBkYXRhIChwcmlzb25lcnMgc2VudCBpdCwgZ3VhcmRzIG5vdyBnZXQgaXQpXHJcbiAgICAgICAgc2V0VGlsZXMobWVzc2FnZURhdGEudGlsZXMpO1xyXG4gICAgICAgIHNldFNxdWFyZXMobWVzc2FnZURhdGEuc3F1YXJlcyk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG1lc3NhZ2VEYXRhLnB0aWxlcyk7XHJcbiAgICAgICAgc2V0R3RpbGVzKG1lc3NhZ2VEYXRhLmd0aWxlcyk7XHJcbiAgICAgICAgc2V0VXNlZGJ5KG1lc3NhZ2VEYXRhLnVzZWRieSk7XHJcbiAgICAgICAgc2V0V2hvc2V0dXJuKG1lc3NhZ2VEYXRhLndob3NldHVybik7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKG1lc3NhZ2VEYXRhLnNlbGVjdGlvbik7XHJcbiAgICAgICAgc2V0Q3VycmVudGNvb3JkcyhtZXNzYWdlRGF0YS5jdXJyZW50Y29vcmRzKTtcclxuICAgICAgICBzZXRTbmFwc2hvdChtZXNzYWdlRGF0YS5zbmFwc2hvdCk7XHJcbiAgICAgICAgc2V0UmVzY3VlcyhtZXNzYWdlRGF0YS5yZXNjdWVzKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJlcHRcIikgeyAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICBzZXRXaG9zZXR1cm4oXCJHXCIpO1xyXG4gICAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICAgICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICAgICAgc2V0U3F1YXJlcyhtZXNzYWdlRGF0YS5zcXVhcmVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobWVzc2FnZURhdGEudXNlZGJ5KTtcclxuICAgICAgICBzZXRQdGlsZXMobWVzc2FnZURhdGEucHRpbGVzKTtcclxuICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgc2V0UmVzY3VlcyhtZXNzYWdlRGF0YS5yZXNjdWVzKTtcclxuICAgICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgICBzcXVhcmVzOiBbLi4ubWVzc2FnZURhdGEuc3F1YXJlc10sXHJcbiAgICAgICAgICB1c2VkYnk6IFsuLi5tZXNzYWdlRGF0YS51c2VkYnldLFxyXG4gICAgICAgICAgcHRpbGVzOiBbLi4ubWVzc2FnZURhdGEucHRpbGVzXSxcclxuICAgICAgICAgIGd0aWxlczogWy4uLmd0aWxlc10sXHJcbiAgICAgICAgfSk7ICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImVndFwiKSB7IC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgIHNldFdob3NldHVybihcIlBcIik7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgIHNldFVzZWRieShtZXNzYWdlRGF0YS51c2VkYnkpO1xyXG4gICAgICAgIHNldEd0aWxlcyhtZXNzYWdlRGF0YS5ndGlsZXMpO1xyXG4gICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgICBzcXVhcmVzOiBbLi4ubWVzc2FnZURhdGEuc3F1YXJlc10sXHJcbiAgICAgICAgICB1c2VkYnk6IFsuLi5tZXNzYWdlRGF0YS51c2VkYnldLFxyXG4gICAgICAgICAgcHRpbGVzOiBbLi4ucHRpbGVzXSxcclxuICAgICAgICAgIGd0aWxlczogWy4uLm1lc3NhZ2VEYXRhLmd0aWxlc10sXHJcbiAgICAgICAgfSk7ICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVNZXNzYWdlKG1lc3NhZ2UpO1xyXG4gIH1cclxuICBcclxuICBjb25zdCBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrID0gKHJpLCBjaSkgPT4ge1xyXG4gICAgbGV0IG5ld1NxdWFyZXMgPSBbLi4uc3F1YXJlc107XHJcbiAgICBsZXQgbmV3VXNlZGJ5ID0gWy4uLnVzZWRieV07XHJcbiAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICBsZXQgbmV3R3RpbGVzID0gWy4uLmd0aWxlc107IC8vIHRpbGUgaXMgc2VsZWN0ZWQgZnJvbSByYWNrIGFuZCBjbGlja2VkIHNxdWFyZSBpcyBub3QgdXNlZCB5ZXRcclxuICAgIGxldCBuZXdSb3cgPSBbLi4uc3F1YXJlc1tyaV1dO1xyXG4gICAgbGV0IHNxdWFyZXZhbHVlID0gc3F1YXJlc1tyaV1bY2ldO1xyXG4gICAgbGV0IG5ld0N1cnJlbnRjb29yZHMgPSBbLi4uY3VycmVudGNvb3Jkc107XHJcblxyXG4gICAgbGV0IGNvb3JkID0gU3RyaW5nKHJpKSArIFwiLVwiICsgU3RyaW5nKGNpKTtcclxuICAgIGxldCBjY2kgPSBjdXJyZW50Y29vcmRzLmluZGV4T2YoY29vcmQpO1xyXG4gICAgaWYgKHNlbGVjdGlvbiA+IC0xICYmIHNxdWFyZXZhbHVlID09PSBcIi5cIikge1xyXG4gICAgICBuZXdSb3dbY2ldID1cclxuICAgICAgICB3aG9zZXR1cm4gPT09IFwiUFwiID8gbmV3UHRpbGVzW3NlbGVjdGlvbl0gOiBuZXdHdGlsZXNbc2VsZWN0aW9uXTtcclxuICAgICAgbmV3U3F1YXJlc1tyaV0gPSBbLi4ubmV3Um93XTtcclxuICAgICAgd2hvc2V0dXJuID09PSBcIlBcIlxyXG4gICAgICAgID8gbmV3UHRpbGVzLnNwbGljZShzZWxlY3Rpb24sIDEpXHJcbiAgICAgICAgOiBuZXdHdGlsZXMuc3BsaWNlKHNlbGVjdGlvbiwgMSk7XHJcbiAgICAgIGxldCBuZXdVc2VkYnlSb3cgPSBbLi4ubmV3VXNlZGJ5W3JpXV07XHJcbiAgICAgIG5ld1VzZWRieVJvd1tjaV0gPSB3aG9zZXR1cm47XHJcbiAgICAgIG5ld1VzZWRieVtyaV0gPSBbLi4ubmV3VXNlZGJ5Um93XTtcclxuXHJcbiAgICAgIHNldFNlbGVjdGlvbigoY3VycikgPT4gY3VyciAtIDEpO1xyXG4gICAgICBzZXRTcXVhcmVzKG5ld1NxdWFyZXMpO1xyXG4gICAgICBzZXRVc2VkYnkobmV3VXNlZGJ5KTtcclxuICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKFsuLi5jdXJyZW50Y29vcmRzLCBjb29yZF0pO1xyXG4gICAgfSBlbHNlIGlmIChzcXVhcmV2YWx1ZSAhPT0gXCIuXCIgJiYgY2NpID4gLTEpIHtcclxuICAgICAgLy8gY2xpY2tlZCBzcXVhcmUgaGFzIGEgdGlsZSBvbiBpdCBmcm9tIHRoZSBjdXJyZW50IG1vdmUgaW4gcHJvZ3Jlc3NcclxuICAgICAgLy8gQXNzdW1pbmcgc29tZSBnb29kIHdpbGwgZnJvbSB0aGUgdXNlcnMgdG8gY2xpY2sgYSB0aWxlIHRoZXkgcGxheWVkXHJcbiAgICAgIGlmIChcclxuICAgICAgICAod2hvc2V0dXJuID09PSBcIlBcIiAmJiBuZXdQdGlsZXMubGVuZ3RoIDwgNykgfHxcclxuICAgICAgICAod2hvc2V0dXJuID09PSBcIkdcIiAmJiBuZXdHdGlsZXMubGVuZ3RoIDwgNylcclxuICAgICAgKSB7XHJcbiAgICAgICAgd2hvc2V0dXJuID09PSBcIlBcIlxyXG4gICAgICAgICAgPyBuZXdQdGlsZXMucHVzaChzcXVhcmV2YWx1ZSlcclxuICAgICAgICAgIDogbmV3R3RpbGVzLnB1c2goc3F1YXJldmFsdWUpO1xyXG4gICAgICAgIGxldCBuZXdSb3cgPSBbLi4ubmV3U3F1YXJlc1tyaV1dO1xyXG4gICAgICAgIG5ld1Jvd1tjaV0gPSBcIi5cIjtcclxuICAgICAgICBuZXdTcXVhcmVzW3JpXSA9IFsuLi5uZXdSb3ddO1xyXG4gICAgICAgIGxldCBuZXdVc2VkYnlSb3cgPSBbLi4ubmV3VXNlZGJ5W3JpXV07XHJcbiAgICAgICAgbmV3VXNlZGJ5Um93W2NpXSA9IFwiXCI7XHJcbiAgICAgICAgbmV3VXNlZGJ5W3JpXSA9IFsuLi5uZXdVc2VkYnlSb3ddO1xyXG4gICAgICAgIHNldFNlbGVjdGlvbihcclxuICAgICAgICAgIHdob3NldHVybiA9PT0gXCJQXCIgPyBuZXdQdGlsZXMubGVuZ3RoIC0gMSA6IG5ld0d0aWxlcy5sZW5ndGggLSAxXHJcbiAgICAgICAgKTtcclxuICAgICAgICBuZXdDdXJyZW50Y29vcmRzLnNwbGljZShjY2ksIDEpO1xyXG5cclxuICAgICAgICBzZXRTcXVhcmVzKG5ld1NxdWFyZXMpO1xyXG4gICAgICAgIHNldFVzZWRieShuZXdVc2VkYnkpO1xyXG4gICAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG5cclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKG5ld0N1cnJlbnRjb29yZHMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJpc29uZXJUaWxlQ2xpY2sgPSAodGlsZWluZGV4KSA9PiB7XHJcbiAgICAvLyB0aGUgaW5kZXggb2YgcHRpbGVzXHJcbiAgICBpZiAod2hvc2V0dXJuID09PSBcIlBcIikge1xyXG4gICAgICBzZXRTZWxlY3Rpb24odGlsZWluZGV4KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwiSXQgaXMgbm90IHlvdXIgdHVyblwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVHdWFyZFRpbGVDbGljayA9ICh0aWxlaW5kZXgpID0+IHtcclxuICAgIC8vIHRoZSBpbmRleCBvZiBndGlsZXNcclxuICAgIGlmICh3aG9zZXR1cm4gPT09IFwiR1wiKSB7XHJcbiAgICAgIHNldFNlbGVjdGlvbih0aWxlaW5kZXgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoXCJJdCBpcyBub3QgeW91ciB0dXJuXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGVuZFByaXNvbmVyc1R1cm4gPSAoKSA9PiB7XHJcbiAgICBsZXQgbmV3UmVzY3VlcyA9IHJlc2N1ZXM7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRjb29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGVzY2FwZWhhdGNoZXMuaW5kZXhPZihjdXJyZW50Y29vcmRzW2ldKSA+IC0xKSB7XHJcbiAgICAgICAgbmV3UmVzY3VlcyA9IG5ld1Jlc2N1ZXMgKyAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgd2hpbGUgKG5ld1B0aWxlcy5sZW5ndGggPCA3ICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICBuZXdQdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgIH1cclxuICAgIG5ld1B0aWxlcy5zb3J0KCk7XHJcbiAgICBzZXRXaG9zZXR1cm4oXCJHXCIpO1xyXG4gICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICBzZXRSZXNjdWVzKG5ld1Jlc2N1ZXMpO1xyXG4gICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICBzcXVhcmVzOiBbLi4uc3F1YXJlc10sXHJcbiAgICAgIHVzZWRieTogWy4uLnVzZWRieV0sXHJcbiAgICAgIHB0aWxlczogWy4uLm5ld1B0aWxlc10sXHJcbiAgICAgIGd0aWxlczogWy4uLmd0aWxlc10sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZXB0XCIsIC8vIGVuZCBwcmlzb25lcnMgdHVyblxyXG4gICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgdXNlZGJ5OiB1c2VkYnksIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgcHRpbGVzOiBuZXdQdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgcmVzY3VlczogbmV3UmVzY3VlcyAvLyBtYXkgaGF2ZSByZXNjdWVkIGFub3RoZXIgcHJpc29uZXJcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfTtcclxuICBjb25zdCBlbmRHdWFyZHNUdXJuID0gKCkgPT4ge1xyXG4gICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgIHdoaWxlIChuZXdHdGlsZXMubGVuZ3RoIDwgNyAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgbmV3R3RpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICB9XHJcbiAgICBuZXdHdGlsZXMuc29ydCgpO1xyXG4gICAgbGV0IHNuYXBzcXVhcmVzID0gWy4uLnNxdWFyZXNdO1xyXG4gICAgbGV0IHNuYXB1c2VkYnkgPSBbLi4udXNlZGJ5XTtcclxuICAgIGxldCBzbmFwcHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICBsZXQgc25hcGd0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgc2V0V2hvc2V0dXJuKFwiUFwiKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICBzcXVhcmVzOiBzbmFwc3F1YXJlcyxcclxuICAgICAgdXNlZGJ5OiBzbmFwdXNlZGJ5LFxyXG4gICAgICBwdGlsZXM6IHNuYXBwdGlsZXMsXHJcbiAgICAgIGd0aWxlczogc25hcGd0aWxlcyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlZ3RcIiwgLy8gZW5kIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgc3F1YXJlczogc3F1YXJlcywgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICB1c2VkYnk6IHVzZWRieSwgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICBndGlsZXM6IG5ld0d0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgZ3VhcmRzIHJhY2tcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICBjb25zdCByZWNhbGxUaWxlcyA9ICgpID0+IHtcclxuICAgIHNldFNxdWFyZXMoWy4uLnNuYXBzaG90LnNxdWFyZXNdKTtcclxuICAgIHNldFVzZWRieShbLi4uc25hcHNob3QudXNlZGJ5XSk7XHJcbiAgICBzZXRQdGlsZXMoWy4uLnNuYXBzaG90LnB0aWxlc10pO1xyXG4gICAgc2V0R3RpbGVzKFsuLi5zbmFwc2hvdC5ndGlsZXNdKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgd3Ntc2dzLmxlbmd0aCA+IDAgP1xyXG4gICAgPGJ1dHRvbiBpZD1cInByb2Nlc3NOZXh0TWVzc2FnZVwiXHJcbiAgICAgIG9uQ2xpY2s9e3Byb2Nlc3NNZXNzYWdlKHRoaXMsIHdzbXNnc1swXSl9XHJcbiAgICA+XHJcbiAgICAgIENsaWNrIHRvIGdldCB1cGRhdGVcclxuICAgIDwvYnV0dG9uPlxyXG4gICAgOlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcHJpc29uYnJlYWtcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMSBwYnRpdGxlXCI+UHJpc29uIEJyZWFrPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMSBwYmhvbWVsaW5rXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi4uLy4uL1wifT5cclxuICAgICAgICAgICAgPGE+8J+PoDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMiBwYlByaXNvbmVyc1wiPlxyXG4gICAgICAgICAgPFByaXNvbmVyc1xyXG4gICAgICAgICAgICBwdGlsZXM9e3B0aWxlc31cclxuICAgICAgICAgICAgd2hvc2V0dXJuPXt3aG9zZXR1cm59XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0aW9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IGhhbmRsZVByaXNvbmVyVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgb25DbGlja0ZpbmlzaFR1cm49eygpID0+IGVuZFByaXNvbmVyc1R1cm4oKX1cclxuICAgICAgICAgICAgb25DbGlja1RpbGVSZWNhbGw9eygpID0+IHJlY2FsbFRpbGVzKCl9XHJcbiAgICAgICAgICAgIHJlc2N1ZXM9e3Jlc2N1ZXN9XHJcbiAgICAgICAgICAgIHByaXNvbmVyc09yR3VhcmRzPXtwcmlzb25lcnNPckd1YXJkc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgc3F1YXJlcz17c3F1YXJlc31cclxuICAgICAgICAgICAgdXNlZGJ5PXt1c2VkYnl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhyaSwgY2kpID0+IGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socmksIGNpKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMiBwYkd1YXJkc1wiPlxyXG4gICAgICAgICAgPEd1YXJkc1xyXG4gICAgICAgICAgICBndGlsZXM9e2d0aWxlc31cclxuICAgICAgICAgICAgd2hvc2V0dXJuPXt3aG9zZXR1cm59XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0aW9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IGhhbmRsZUd1YXJkVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgb25DbGlja0ZpbmlzaFR1cm49eygpID0+IGVuZEd1YXJkc1R1cm4oKX1cclxuICAgICAgICAgICAgb25DbGlja1RpbGVSZWNhbGw9eygpID0+IHJlY2FsbFRpbGVzKCl9XHJcbiAgICAgICAgICAgIHByaXNvbmVyc09yR3VhcmRzPXtwcmlzb25lcnNPckd1YXJkc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxyXG4gICAgICAgICAgPFRpbGVzIHRpbGVzPXt0aWxlc30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVGlsZXMgPSAocHJvcHMpID0+IHtcclxuICAvLyB0aGVyZSBpcyBhIGJldHRlciB3YXkgXl5eXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcG9vbFwiPlxyXG4gICAgICA8aDM+VElMRSBQT09MPC9oMz5cclxuICAgICAge3Byb3BzLnRpbGVzLm1hcCgodCwgdGkpID0+IChcclxuICAgICAgICA8c3BhbiBrZXk9e2B0aWxlJHt0aX1gfT5cclxuICAgICAgICAgIHt0aSA+IDAgJiYgdCAhPT0gcHJvcHMudGlsZXNbdGkgLSAxXSA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVwb29sRGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYlRpbGVwb29sVGlsZVwiPnt0fTwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFJhY2tUaWxlID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuIGNsYXNzTmFtZT17cHJvcHMudGlsZWNsYXNzfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAge3Byb3BzLnRpbGV2YWx1ZX1cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgRmluaXNoVHVybkJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiRmluaXNoVHVyblwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICBGaW5pc2ggVHVyblxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRpbGVSZWNhbGxCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYlJlY2FsbFRpbGVzXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIFJlY2FsbCBUaWxlc1xyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFByaXNvbmVycyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJlbmRlclRpbGUgPSAodGlsZWNsYXNzLCB0aWxlaW5kZXgsIHRpbGV2YWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJhY2tUaWxlXHJcbiAgICAgICAga2V5PXt0aWxlY2xhc3MgKyBTdHJpbmcodGlsZWluZGV4KX1cclxuICAgICAgICB0aWxlY2xhc3M9e3RpbGVjbGFzc31cclxuICAgICAgICB0aWxldmFsdWU9e3RpbGV2YWx1ZX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrKHRpbGVpbmRleCl9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckZpbmlzaFR1cm4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPEZpbmlzaFR1cm5CdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja0ZpbmlzaFR1cm4oKX0gLz47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUmVjYWxsVGlsZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPFRpbGVSZWNhbGxCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1RpbGVSZWNhbGwoKX0gLz47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRnJlZWRQcmlzb25lcnMgPSAoY291bnQpID0+IHtcclxuICAgIGxldCBkdW1iID0gQXJyYXkoY291bnQpLmZpbGwoXCJub25zZW5zZVwiKTtcclxuICAgIHJldHVybiBkdW1iLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgIDxzcGFuIGtleT17dmFsdWUgKyBTdHJpbmcoaW5kZXgpfT5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCIvYnJlYWtmcmVlLnBuZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJJJ20gZnJlZSEgSSdtIGZyZWUhXCJcclxuICAgICAgICAgIHdpZHRoPVwiMTAwXCJcclxuICAgICAgICAgIGhlaWdodD1cIjEwMFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxwPlBSSVNPTkVSUzwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgIHtwcm9wcy5wdGlsZXMubWFwKCh0LCB0aSkgPT5cclxuICAgICAgICAgIHJlbmRlclRpbGUoXHJcbiAgICAgICAgICAgIHByb3BzLndob3NldHVybiA9PT0gXCJQXCIgJiYgcHJvcHMuc2VsZWN0aW9uID09PSB0aVxyXG4gICAgICAgICAgICAgID8gXCJwYlRpbGVPblJhY2tTZWxlY3RlZFBcIlxyXG4gICAgICAgICAgICAgIDogXCJwYlRpbGVPblJhY2tQXCIsXHJcbiAgICAgICAgICAgIHRpLFxyXG4gICAgICAgICAgICBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyB0IDogXCIqXCJcclxuICAgICAgICAgIClcclxuICAgICAgICApfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiUFwiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IHJlbmRlckZpbmlzaFR1cm4oKSA6IDw+PC8+fVxyXG4gICAgICB7cHJvcHMud2hvc2V0dXJuID09PSBcIlBcIiAmJiBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyByZW5kZXJSZWNhbGxUaWxlcygpIDogPD48Lz59XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFJlc2N1ZXMgbWFkZToge3Byb3BzLnJlc2N1ZXN9XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAge3JlbmRlckZyZWVkUHJpc29uZXJzKHByb3BzLnJlc2N1ZXMpfVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgR3VhcmRzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyVGlsZSA9ICh0aWxlY2xhc3MsIHRpbGVpbmRleCwgdGlsZXZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmFja1RpbGVcclxuICAgICAgICBrZXk9e3RpbGVjbGFzcyArIFN0cmluZyh0aWxlaW5kZXgpfVxyXG4gICAgICAgIHRpbGVjbGFzcz17dGlsZWNsYXNzfVxyXG4gICAgICAgIHRpbGV2YWx1ZT17dGlsZXZhbHVlfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2sodGlsZWluZGV4KX1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRmluaXNoVHVybiA9ICgpID0+IHtcclxuICAgIHJldHVybiA8RmluaXNoVHVybkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrRmluaXNoVHVybigpfSAvPjtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJSZWNhbGxUaWxlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiA8VGlsZVJlY2FsbEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrVGlsZVJlY2FsbCgpfSAvPjtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHA+R1VBUkRTPC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJwYlRpbGVyYWNrXCI+XHJcbiAgICAgICAge3Byb3BzLmd0aWxlcy5tYXAoKHQsIHRpKSA9PlxyXG4gICAgICAgICAgcmVuZGVyVGlsZShcclxuICAgICAgICAgICAgcHJvcHMud2hvc2V0dXJuID09PSBcIkdcIiAmJiBwcm9wcy5zZWxlY3Rpb24gPT09IHRpXHJcbiAgICAgICAgICAgICAgPyBcInBiVGlsZU9uUmFja1NlbGVjdGVkR1wiXHJcbiAgICAgICAgICAgICAgOiBcInBiVGlsZU9uUmFja0dcIixcclxuICAgICAgICAgICAgdGksXHJcbiAgICAgICAgICAgIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiA/IHQgOiBcIipcIlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvcD5cclxuICAgICAge3Byb3BzLndob3NldHVybiA9PT0gXCJHXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiR1wiID8gcmVuZGVyRmluaXNoVHVybigpIDogPD48Lz59XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiR1wiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiA/IHJlbmRlclJlY2FsbFRpbGVzKCkgOiA8PjwvPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=