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
    className: "container-fluid",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-10 pbtitle",
        children: "Prison Break Lobby"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-2 pbhomelink",
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
              lineNumber: 145,
              columnNumber: 18
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-11 offset-1",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Prisoners: enter a game id and click \"Start Game\". Tell the Guards the id."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-11 offset-1",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Guards: get the game id from the Prisoners. Enter the game id and click \"Join Game\"."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: "Game id:\xA0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        name: "gameid",
        value: gameid,
        onChange: e => {
          setGameid(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: "\xA0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 11
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
        lineNumber: 169,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: "\xA0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 11
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
        lineNumber: 180,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 140,
    columnNumber: 7
  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Game, {
    prisonersOrGuards: prisonersOrGuards,
    gameid: gameid,
    wsmsgs: wsmsgs,
    client: client,
    removeMessage: removeMessage
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 193,
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
    lineNumber: 243,
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
        lineNumber: 253,
        columnNumber: 9
      }, undefined)
    }, `Square${ri}-${ci}`, false, {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 7
    }, undefined);
  };

  const renderRow = ri => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
      className: "row pbRow",
      children: squares[ri].map((c, ci) => renderSquare(ri, ci, c, usedby[ri][ci]))
    }, `BoardRow${ri}`, false, {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 7
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
    className: "pbBoard",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
      children: squares.map((r, ri) => renderRow(ri))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 273,
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

      if (newSelection === -1) {
        newSelection = rack.indexOf("?"); // Use the blank if they have one
      }

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

          if (dir === "d") {
            // playing downwards
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

      return;
    }

    if (event.key === "Backspace" && currentcoords.length > 0) {
      // Same as clicking on a played-this-move tile in terms of returning the tile to the rack
      // However we also want to set up rcd so they can press the key they meant and continue
      let coord = currentcoords[currentcoords.length - 1]; // tile to return to rack

      let newCurrentcoords = [...currentcoords];
      let newPtiles = [...ptiles];
      let newGtiles = [...gtiles];
      let newUsedby = [...usedby];
      let newSquares = [...squares];
      let newRcd = [-1, -1, ""];
      let newSelection = selection;
      newCurrentcoords.splice(currentcoords.length - 1, 1);
      let row = parseInt(coord.split("-")[0]);
      let col = parseInt(coord.split("-")[1]);
      let returnedTile = squares[row][col];

      if (whoseturn === "P") {
        newPtiles.push(returnedTile);
        newSelection = newPtiles.length - 1;
      } else {
        newGtiles.push(returnedTile);
        newSelection = newGtiles.length - 1;
      }

      newUsedby[row][col] = "";
      newSquares[row][col] = ".";
      let dir = rcd[2];

      if (dir !== "") {
        // direction was set so keep it
        newRcd = [row, col, dir];

        if (currentcoords.length === 1) {
          newSelection = -1; // if they backspace all the letters off leave rack tile unselected
        }
      }

      setCurrentcoords(newCurrentcoords);
      setGtiles(newGtiles);
      setPtiles(newPtiles);
      setSquares(newSquares);
      setUsedby(newUsedby);
      setRcd(newRcd);
      setSelection(newSelection);
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
        lineNumber: 938,
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
            lineNumber: 946,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 940,
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
              lineNumber: 949,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 949,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 948,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 939,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 937,
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
          lineNumber: 955,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 954,
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
          lineNumber: 970,
          columnNumber: 11
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {
          squares: squares,
          usedby: usedby,
          rcd: rcd
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 977,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 968,
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
          lineNumber: 985,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 984,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowUnseenTiles, {
          tiles: tiles,
          othertiles: prisonersOrGuards === "P" ? gtiles : ptiles
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 998,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 997,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 953,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 936,
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
      lineNumber: 1018,
      columnNumber: 7
    }, undefined), unseenTiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [ti > 0 && t !== unseenTiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pbTilepoolDivider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1022,
        columnNumber: 13
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbTilepoolTile",
        children: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1026,
        columnNumber: 11
      }, undefined)]
    }, `tile${ti}`, true, {
      fileName: _jsxFileName,
      lineNumber: 1020,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1017,
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
    lineNumber: 1035,
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
      lineNumber: 1044,
      columnNumber: 7
    }, undefined), "Finish Turn"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1043,
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
      lineNumber: 1052,
      columnNumber: 7
    }, undefined), "Recall Tiles"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1051,
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
      lineNumber: 1060,
      columnNumber: 7
    }, undefined), "Exchange Tiles"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1059,
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
      lineNumber: 1068,
      columnNumber: 7
    }, undefined), "Pass"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1067,
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
      lineNumber: 1077,
      columnNumber: 7
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
      tileclass: tileclass,
      tilevalue: tilevalue,
      onClick: () => window.alert("No peeking!")
    }, tileclass + String(tileindex), false, {
      fileName: _jsxFileName,
      lineNumber: 1084,
      columnNumber: 7
    }, undefined);
  };

  const renderFinishTurn = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
        onClick: () => props.onClickFinishTurn()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1094,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1094,
      columnNumber: 12
    }, undefined);
  };

  const renderRecallTiles = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
        onClick: () => props.onClickTileRecall()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1098,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1098,
      columnNumber: 12
    }, undefined);
  };

  const renderExchangeTiles = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileExchangeButton, {
        onClick: () => props.onClickTileExchange()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1102,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1102,
      columnNumber: 12
    }, undefined);
  };

  const renderPassPlay = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PassPlayButton, {
        onClick: () => props.onClickPassPlay()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1106,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1106,
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
        lineNumber: 1113,
        columnNumber: 9
      }, undefined)
    }, value + String(index), false, {
      fileName: _jsxFileName,
      lineNumber: 1112,
      columnNumber: 7
    }, undefined));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "PRISONERS"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1125,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilerack",
      children: props.ptiles.map((t, ti) => renderTile(props.whoseturn === "P" && props.selection === ti ? "pbTileOnRackSelectedP" : "pbTileOnRackP", ti, props.prisonersOrGuards === "P" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1126,
      columnNumber: 7
    }, undefined), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderRecallTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderExchangeTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderPassPlay() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Rescues made: ", props.rescues, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1143,
        columnNumber: 9
      }, undefined), renderFreedPrisoners(props.rescues)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1141,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1124,
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
      lineNumber: 1154,
      columnNumber: 7
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
      tileclass: tileclass,
      tilevalue: tilevalue,
      onClick: () => window.alert("No peeking!")
    }, tileclass + String(tileindex), false, {
      fileName: _jsxFileName,
      lineNumber: 1161,
      columnNumber: 7
    }, undefined);
  };

  const renderFinishTurn = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
      onClick: () => props.onClickFinishTurn()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1171,
      columnNumber: 12
    }, undefined);
  };

  const renderRecallTiles = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
      onClick: () => props.onClickTileRecall()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1175,
      columnNumber: 12
    }, undefined);
  };

  const renderExchangeTiles = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileExchangeButton, {
      onClick: () => props.onClickTileExchange()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1179,
      columnNumber: 12
    }, undefined);
  };

  const renderPassPlay = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PassPlayButton, {
      onClick: () => props.onClickPassPlay()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1183,
      columnNumber: 12
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "GUARDS"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1188,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilerack",
      children: props.gtiles.map((t, ti) => renderTile(props.whoseturn === "G" && props.selection === ti ? "pbTileOnRackSelectedG" : "pbTileOnRackG", ti, props.prisonersOrGuards === "G" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1189,
      columnNumber: 7
    }, undefined), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderRecallTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderExchangeTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderPassPlay() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1187,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsyLmpzIl0sIm5hbWVzIjpbImVzY2FwZWhhdGNoZXMiLCJpbml0aWFsdGlsZXMiLCJQcmlzb25CcmVhayIsImlubG9iYnkiLCJzZXRJbmxvYmJ5IiwidXNlU3RhdGUiLCJnYW1laWQiLCJzZXRHYW1laWQiLCJwcmlzb25lcnNPckd1YXJkcyIsInNldFByaXNvbmVyc09yR3VhcmRzIiwid3Ntc2dzIiwic2V0V3Ntc2dzIiwibXNnaWQiLCJzZXRNc2dpZCIsImhvc3QiLCJhY2NlcHRNZXNzYWdlIiwibWVzc2FnZSIsImN1cnIiLCJkYXRhIiwicmVtb3ZlTWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiaSIsImluZGV4T2YiLCJ3Iiwic3BsaWNlIiwiY2xpZW50Iiwic2V0Q2xpZW50IiwiQ3VzdG9tU29ja2V0IiwidXNlRWZmZWN0IiwiY29ubmVjdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsIlNxdWFyZSIsInByb3BzIiwidXNlZGJ5Y2xhc3MiLCJzcXVhcmV1c2VkYnkiLCJ0ZGNsYXNzIiwiYyIsInJjZCIsInJpIiwiY2kiLCJ0ZHZhbHVlIiwib25DbGljayIsIkJvYXJkIiwic3F1YXJlcyIsInVzZWRieSIsInJlbmRlclNxdWFyZSIsInJlbmRlclJvdyIsIm1hcCIsInIiLCJHYW1lIiwidGlsZXMiLCJzZXRUaWxlcyIsInB0aWxlcyIsInNldFB0aWxlcyIsImd0aWxlcyIsInNldEd0aWxlcyIsInNldFNxdWFyZXMiLCJBcnJheSIsImZpbGwiLCJzZXRVc2VkYnkiLCJzZWxlY3Rpb24iLCJzZXRTZWxlY3Rpb24iLCJ3aG9zZXR1cm4iLCJzZXRXaG9zZXR1cm4iLCJjdXJyZW50Y29vcmRzIiwic2V0Q3VycmVudGNvb3JkcyIsInJlc2N1ZXMiLCJzZXRSZXNjdWVzIiwic2V0UmNkIiwic25hcHNob3QiLCJzZXRTbmFwc2hvdCIsInRlbXBQVGlsZXMiLCJ0ZW1wR1RpbGVzIiwidGVtcFRpbGVzIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzb3J0IiwiY29uc29sZSIsImxvZyIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsImZ1bmMiLCJtc2ciLCJwcm9jZXNzTWVzc2FnZSIsInBhcnNlIiwicmVxdWVzdG9yIiwic2VuZGVyIiwiaGFuZGxlQm9hcmRTcXVhcmVDbGljayIsIm5ld1NlbGVjdGlvbiIsIm5ld1JjZCIsIm5ld1NxdWFyZXMiLCJuZXdVc2VkYnkiLCJuZXdQdGlsZXMiLCJuZXdHdGlsZXMiLCJuZXdSb3ciLCJzcXVhcmV2YWx1ZSIsIm5ld0N1cnJlbnRjb29yZHMiLCJjb29yZCIsIlN0cmluZyIsImNjaSIsIm5ld1VzZWRieVJvdyIsIm5ld0RpcmVjdGlvbiIsImhhbmRsZVByaXNvbmVyVGlsZUNsaWNrIiwidGlsZWluZGV4IiwiYWxlcnQiLCJoYW5kbGVHdWFyZFRpbGVDbGljayIsImVuZFByaXNvbmVyc1R1cm4iLCJpc1BsYXlWYWxpZCIsIm5ld1Jlc2N1ZXMiLCJuZXdUaWxlcyIsImVuZEd1YXJkc1R1cm4iLCJzbmFwc3F1YXJlcyIsInNuYXB1c2VkYnkiLCJzbmFwcHRpbGVzIiwic25hcGd0aWxlcyIsInN3YXBQcmlzb25lcnNUaWxlcyIsIndpbmRvdyIsInN3YXBHdWFyZHNUaWxlcyIsImxvd3JvdyIsImhpZ2hyb3ciLCJsb3djb2wiLCJoaWdoY29sIiwicGxheXRocnUiLCJob29rbWFkZSIsInJlY2FsbFRpbGVzIiwicHJpc29uZXJQYXNzIiwiZ3VhcmRzUGFzcyIsInJlcXVlc3RHYW1lRGF0YSIsInBsYXllcnR5cGUiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImtleSIsImxldHRlcnRlc3QiLCJtYXRjaCIsImxldHRlciIsInRvVXBwZXJDYXNlIiwicmFjayIsInJvdyIsImNvbCIsImRpciIsIm5ld2MiLCJuZXdyIiwicGFyc2VJbnQiLCJzcGxpdCIsInJldHVybmVkVGlsZSIsInRpIiwiU2hvd1Vuc2VlblRpbGVzIiwidW5zZWVuVGlsZXMiLCJvdGhlcnRpbGVzIiwidCIsIlJhY2tUaWxlIiwidGlsZWNsYXNzIiwidGlsZXZhbHVlIiwiRmluaXNoVHVybkJ1dHRvbiIsIlRpbGVSZWNhbGxCdXR0b24iLCJUaWxlRXhjaGFuZ2VCdXR0b24iLCJQYXNzUGxheUJ1dHRvbiIsIlByaXNvbmVycyIsInJlbmRlclRpbGUiLCJyZW5kZXJGaW5pc2hUdXJuIiwib25DbGlja0ZpbmlzaFR1cm4iLCJyZW5kZXJSZWNhbGxUaWxlcyIsIm9uQ2xpY2tUaWxlUmVjYWxsIiwicmVuZGVyRXhjaGFuZ2VUaWxlcyIsIm9uQ2xpY2tUaWxlRXhjaGFuZ2UiLCJyZW5kZXJQYXNzUGxheSIsIm9uQ2xpY2tQYXNzUGxheSIsInJlbmRlckZyZWVkUHJpc29uZXJzIiwiY291bnQiLCJkdW1iIiwiaW5kZXgiLCJHdWFyZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsYUFBYSxHQUFHLENBQ3BCLEtBRG9CLEVBRXBCLEtBRm9CLEVBR3BCLE1BSG9CLEVBSXBCLEtBSm9CLEVBS3BCLE1BTG9CLEVBTXBCLE1BTm9CLEVBT3BCLE1BUG9CLEVBUXBCLE9BUm9CLENBQXRCLEMsQ0FTRzs7QUFDSCxNQUFNQyxZQUFZLEdBQUcsQ0FDbkIsR0FEbUIsRUFFbkIsR0FGbUIsRUFHbkIsR0FIbUIsRUFJbkIsR0FKbUIsRUFLbkIsR0FMbUIsRUFNbkIsR0FObUIsRUFPbkIsR0FQbUIsRUFRbkIsR0FSbUIsRUFTbkIsR0FUbUIsRUFVbkIsR0FWbUIsRUFXbkIsR0FYbUIsRUFZbkIsR0FabUIsRUFhbkIsR0FibUIsRUFjbkIsR0FkbUIsRUFlbkIsR0FmbUIsRUFnQm5CLEdBaEJtQixFQWlCbkIsR0FqQm1CLEVBa0JuQixHQWxCbUIsRUFtQm5CLEdBbkJtQixFQW9CbkIsR0FwQm1CLEVBcUJuQixHQXJCbUIsRUFzQm5CLEdBdEJtQixFQXVCbkIsR0F2Qm1CLEVBd0JuQixH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ckksS0FBSyxDQUFDOEIsU0FBTixLQUFvQixHQUFwQixJQUEyQjlCLEtBQUssQ0FBQzNCLGlCQUFOLEtBQTRCLEdBQXZELEdBQTZEa0ssaUJBQWlCLEVBQTlFLGdCQUFtRix1SkFkdEYsRUFlR3ZJLEtBQUssQ0FBQzhCLFNBQU4sS0FBb0IsR0FBcEIsSUFBMkI5QixLQUFLLENBQUMzQixpQkFBTixLQUE0QixHQUF2RCxHQUE2RG9LLG1CQUFtQixFQUFoRixnQkFBcUYsdUpBZnhGLEVBZ0JHekksS0FBSyxDQUFDOEIsU0FBTixLQUFvQixHQUFwQixJQUEyQjlCLEtBQUssQ0FBQzNCLGlCQUFOLEtBQTRCLEdBQXZELEdBQTZEc0ssY0FBYyxFQUEzRSxnQkFBZ0YsdUpBaEJuRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQW9CRCxDQXhERDs7T0FBTU0sTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYi9wcmlzb25icmVhazIuYTI2YjI0OWIyN2MzNzc5MzY1ZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEN1c3RvbVNvY2tldCBmcm9tIFwiLi4vLi4vd3NcIjtcclxuY29uc3QgZXNjYXBlaGF0Y2hlcyA9IFtcclxuICBcIjAtMFwiLFxyXG4gIFwiMC03XCIsXHJcbiAgXCIwLTE0XCIsXHJcbiAgXCI3LTBcIixcclxuICBcIjctMTRcIixcclxuICBcIjE0LTBcIixcclxuICBcIjE0LTdcIixcclxuICBcIjE0LTE0XCIsXHJcbl07IC8vIGNvb3JkcyBvZiBlc2NhcGUgaGF0Y2hlc1xyXG5jb25zdCBpbml0aWFsdGlsZXMgPSBbXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJBXCIsXHJcbiAgXCJCXCIsXHJcbiAgXCJCXCIsXHJcbiAgXCJDXCIsXHJcbiAgXCJDXCIsXHJcbiAgXCJEXCIsXHJcbiAgXCJEXCIsXHJcbiAgXCJEXCIsXHJcbiAgXCJEXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJFXCIsXHJcbiAgXCJGXCIsXHJcbiAgXCJGXCIsXHJcbiAgXCJHXCIsXHJcbiAgXCJHXCIsXHJcbiAgXCJHXCIsXHJcbiAgXCJIXCIsXHJcbiAgXCJIXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJJXCIsXHJcbiAgXCJKXCIsXHJcbiAgXCJLXCIsXHJcbiAgXCJMXCIsXHJcbiAgXCJMXCIsXHJcbiAgXCJMXCIsXHJcbiAgXCJMXCIsXHJcbiAgXCJNXCIsXHJcbiAgXCJNXCIsXHJcbiAgXCJOXCIsXHJcbiAgXCJOXCIsXHJcbiAgXCJOXCIsXHJcbiAgXCJOXCIsXHJcbiAgXCJOXCIsXHJcbiAgXCJOXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJPXCIsXHJcbiAgXCJQXCIsXHJcbiAgXCJQXCIsXHJcbiAgXCJRXCIsXHJcbiAgXCJSXCIsXHJcbiAgXCJSXCIsXHJcbiAgXCJSXCIsXHJcbiAgXCJSXCIsXHJcbiAgXCJSXCIsXHJcbiAgXCJSXCIsXHJcbiAgXCJTXCIsXHJcbiAgXCJTXCIsXHJcbiAgXCJTXCIsXHJcbiAgXCJTXCIsXHJcbiAgXCJUXCIsXHJcbiAgXCJUXCIsXHJcbiAgXCJUXCIsXHJcbiAgXCJUXCIsXHJcbiAgXCJUXCIsXHJcbiAgXCJUXCIsXHJcbiAgXCJVXCIsXHJcbiAgXCJVXCIsXHJcbiAgXCJVXCIsXHJcbiAgXCJVXCIsXHJcbiAgXCJWXCIsXHJcbiAgXCJWXCIsXHJcbiAgXCJXXCIsXHJcbiAgXCJXXCIsXHJcbiAgXCJYXCIsXHJcbiAgXCJZXCIsXHJcbiAgXCJZXCIsXHJcbiAgXCJaXCIsXHJcbiAgXCI/XCIsXHJcbiAgXCI/XCIsXHJcbl07IC8vIGluaXRpYWwgdGlsZSBwb29sXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmlzb25CcmVhaygpIHtcclxuICBjb25zdCBbaW5sb2JieSwgc2V0SW5sb2JieV0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IFtnYW1laWQsIHNldEdhbWVpZF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbcHJpc29uZXJzT3JHdWFyZHMsIHNldFByaXNvbmVyc09yR3VhcmRzXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFt3c21zZ3MsIHNldFdzbXNnc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbbXNnaWQsIHNldE1zZ2lkXSA9IHVzZVN0YXRlKDApXHJcbiAgbGV0IGhvc3QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJ3dzczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbScgOiAnd3M6Ly9sb2NhbGhvc3Q6NTAwMCc7XHJcbiAgY29uc3QgYWNjZXB0TWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICBzZXRNc2dpZCgoY3VycikgPT4gY3VyciArIDEpXHJcbiAgICBzZXRXc21zZ3MoKGN1cnIpID0+IFsuLi5jdXJyLCBtZXNzYWdlLmRhdGFdKTtcclxuICB9XHJcbiAgY29uc3QgcmVtb3ZlTWVzc2FnZSA9IChtZXNzYWdlRGF0YSkgPT4ge1xyXG4gICAgbGV0IGkgPSB3c21zZ3MuaW5kZXhPZihtZXNzYWdlRGF0YSk7XHJcbiAgICBsZXQgdyA9IFsuLi53c21zZ3NdO1xyXG4gICAgdy5zcGxpY2UoaSwxKTtcclxuICAgIHNldFdzbXNncyh3KTtcclxuICB9XHJcbiAgY29uc3QgW2NsaWVudCwgc2V0Q2xpZW50XSA9IHVzZVN0YXRlKG5ldyBDdXN0b21Tb2NrZXQoaG9zdCwgYWNjZXB0TWVzc2FnZSkpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiAoXHJcbiAgICBjbGllbnQuY29ubmVjdCgpXHJcbiAgKSxbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIGlubG9iYnkgfHwgcHJpc29uZXJzT3JHdWFyZHMgPT09ICcnID9cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgcGJ0aXRsZVwiPlByaXNvbiBCcmVhayBMb2JieTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMiBwYmhvbWVsaW5rXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiLi4vLi4vXCJ9PlxyXG4gICAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT48L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMSBvZmZzZXQtMVwiPlxyXG4gICAgICAgICAgICA8aDI+UHJpc29uZXJzOiBlbnRlciBhIGdhbWUgaWQgYW5kIGNsaWNrIFwiU3RhcnQgR2FtZVwiLiBUZWxsIHRoZSBHdWFyZHMgdGhlIGlkLjwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTEgb2Zmc2V0LTFcIj5cclxuICAgICAgICAgICAgPGgyPkd1YXJkczogZ2V0IHRoZSBnYW1lIGlkIGZyb20gdGhlIFByaXNvbmVycy4gRW50ZXIgdGhlIGdhbWUgaWQgYW5kIGNsaWNrIFwiSm9pbiBHYW1lXCIuPC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8bGFiZWw+R2FtZSBpZDombmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgbmFtZT1cImdhbWVpZFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2dhbWVpZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxhYmVsPiZuYnNwOzwvbGFiZWw+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwic3RhcnRnYW1lXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmIChnYW1laWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICBzZXRQcmlzb25lcnNPckd1YXJkcygnUCcpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRJbmxvYmJ5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFN0YXJ0IEdhbWVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGxhYmVsPiZuYnNwOzwvbGFiZWw+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwiam9pbmdhbWVcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdhbWVpZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzKCdHJyk7XHJcbiAgICAgICAgICAgICAgICAgIHNldElubG9iYnkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgSm9pbiBHYW1lXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgOlxyXG4gICAgPEdhbWUgcHJpc29uZXJzT3JHdWFyZHM9e3ByaXNvbmVyc09yR3VhcmRzfVxyXG4gICAgICBnYW1laWQ9e2dhbWVpZH1cclxuICAgICAgd3Ntc2dzPXt3c21zZ3N9XHJcbiAgICAgIGNsaWVudD17Y2xpZW50fVxyXG4gICAgICByZW1vdmVNZXNzYWdlPXtyZW1vdmVNZXNzYWdlfVxyXG4gICAgICAvPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgU3F1YXJlID0gKHByb3BzKSA9PiB7XHJcbiAgLy8gc3F1YXJldXNlZGJ5LCByaSwgY2ksIGMsIG9uQ2xpY2tcclxuICAvLyBuZWVkIHNxdWFyZXVzZWRieSB0byBwaWNrIGNzcyBjbGFzc05hbWUgY29ycmVzcG9uZGluZyB0byB3aG8gcGxheWVkIHRoZSB0aWxlIG9uIHRoZSBzcXVhcmVcclxuICAvLyBuZWVkIHJpLCBjaSB0byBkaXNwbGF5IGFsdGVybmF0aW5nIGNoYXJhY3RlcnMgb24gdW51c2VkIHNxdWFyZXNcclxuICAvLyBuZWVkIGMgdG8gcmVwcmVzZW50IHdoaWNoIHRpbGUgaXMgb24gdGhlIHNxdWFyZSwgaWYgYW55XHJcbiAgLy8gbmVlZCBvbkNsaWNrIHRvIGhhbmRsZSBzcXVhcmUgY2xpY2sgYXQgYSBoaWdoZXIgbGV2ZWxcclxuICAvLyBuZWVkIHJjZCB0byBkaXNwbGF5IHNlbGVjdGVkIGRpcmVjdGlvbiBhcnJvdyB3aGVuIGFwcHJvcHJpYXRlXHJcbiAgY29uc3QgdXNlZGJ5Y2xhc3MgPVxyXG4gICAgcHJvcHMuc3F1YXJldXNlZGJ5ID09PSBcIlBcIlxyXG4gICAgICA/IFwicGJTcXVhcmVVc2VkQnlQcmlzb25lcnNcIlxyXG4gICAgICA6IFwicGJTcXVhcmVVc2VkQnlHdWFyZHNcIjtcclxuICBjb25zdCB0ZGNsYXNzID1cclxuICAgIHByb3BzLmMgIT09IFwiLlwiXHJcbiAgICAgID8gdXNlZGJ5Y2xhc3NcclxuICAgICAgOiBwcm9wcy5yY2RbMF0gPT09IHByb3BzLnJpICYmIHByb3BzLnJjZFsxXSA9PT0gcHJvcHMuY2kgJiYgcHJvcHMucmNkWzJdID09PSBcInJcIlxyXG4gICAgICA/IFwicGJTcXVhcmVSaWdodEFycm93XCJcclxuICAgICAgOiBwcm9wcy5yY2RbMF0gPT09IHByb3BzLnJpICYmIHByb3BzLnJjZFsxXSA9PT0gcHJvcHMuY2kgJiYgcHJvcHMucmNkWzJdID09PSBcImRcIlxyXG4gICAgICA/IFwicGJTcXVhcmVEb3duQXJyb3dcIlxyXG4gICAgICA6IHByb3BzLnJpID09PSA3ICYmIHByb3BzLmNpID09PSA3XHJcbiAgICAgID8gXCJwYlNxdWFyZUNlbnRlclNxdWFyZVwiXHJcbiAgICAgIDogKHByb3BzLnJpID09PSAwIHx8IHByb3BzLnJpID09PSA3IHx8IHByb3BzLnJpID09PSAxNCkgJiZcclxuICAgICAgICAocHJvcHMuY2kgPT09IDAgfHwgcHJvcHMuY2kgPT09IDcgfHwgcHJvcHMuY2kgPT09IDE0KVxyXG4gICAgICA/IFwicGJTcXVhcmVFc2NhcGVIYXRjaFwiXHJcbiAgICAgIDogcHJvcHMucmkgJSAyID09PSBwcm9wcy5jaSAlIDJcclxuICAgICAgPyBcInBiU3F1YXJlXCJcclxuICAgICAgOiBcInBiU3F1YXJlMlwiO1xyXG4gIGNvbnN0IHRkdmFsdWUgPVxyXG4gICAgcHJvcHMuYyAhPT0gXCIuXCJcclxuICAgICAgPyBwcm9wcy5jXHJcbiAgICAgIDogdGRjbGFzcyA9PT0gXCJwYlNxdWFyZVJpZ2h0QXJyb3dcIlxyXG4gICAgICA/IFwi4p6hXCJcclxuICAgICAgOiB0ZGNsYXNzID09PSBcInBiU3F1YXJlRG93bkFycm93XCJcclxuICAgICAgPyBcIuKsh1wiXHJcbiAgICAgIDogdGRjbGFzcyA9PT0gXCJwYlNxdWFyZUNlbnRlclNxdWFyZVwiXHJcbiAgICAgID8gXCLinLBcIlxyXG4gICAgICA6IHRkY2xhc3MgPT09IFwicGJTcXVhcmVFc2NhcGVIYXRjaFwiXHJcbiAgICAgID8gXCLwn5KrXCJcclxuICAgICAgOiBwcm9wcy5yaSAlIDIgPT09IHByb3BzLmNpICUgMlxyXG4gICAgICA/IFwi4pi5XCIvL1wi4o6UXCJcclxuICAgICAgOiBcIuqQlVwiOy8vXCLinKZcIjtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RkY2xhc3N9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICB7dGR2YWx1ZX1cclxuICAgIDwvYnV0dG9uPlxyXG4pO1xyXG59O1xyXG5cclxuY29uc3QgQm9hcmQgPSAoeyBvbkNsaWNrLCBzcXVhcmVzLCB1c2VkYnksIHJjZCB9KSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyU3F1YXJlID0gKHJpLCBjaSwgYywgc3F1YXJldXNlZGJ5KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dGQga2V5PXtgU3F1YXJlJHtyaX0tJHtjaX1gfT5cclxuICAgICAgICA8U3F1YXJlXHJcbiAgICAgICAgICBjPXtjfVxyXG4gICAgICAgICAgY2k9e2NpfVxyXG4gICAgICAgICAgcmk9e3JpfVxyXG4gICAgICAgICAgc3F1YXJldXNlZGJ5PXtzcXVhcmV1c2VkYnl9XHJcbiAgICAgICAgICByY2Q9e3JjZH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2socmksIGNpKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L3RkPlxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlclJvdyA9IChyaSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRyIGtleT17YEJvYXJkUm93JHtyaX1gfSBjbGFzc05hbWU9XCJyb3cgcGJSb3dcIj5cclxuICAgICAgICB7c3F1YXJlc1tyaV0ubWFwKChjLCBjaSkgPT4gcmVuZGVyU3F1YXJlKHJpLCBjaSwgYywgdXNlZGJ5W3JpXVtjaV0pKX1cclxuICAgICAgPC90cj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDx0YWJsZSBjbGFzc05hbWU9XCJwYkJvYXJkXCI+XHJcbiAgICAgIDx0Ym9keT57c3F1YXJlcy5tYXAoKHIsIHJpKSA9PiByZW5kZXJSb3cocmkpKX08L3Rib2R5PlxyXG4gICAgPC90YWJsZT5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgR2FtZSA9ICh7cHJpc29uZXJzT3JHdWFyZHMsIGdhbWVpZCwgd3Ntc2dzLCBjbGllbnQsIHJlbW92ZU1lc3NhZ2V9KSA9PiB7XHJcbiAgY29uc3QgW3RpbGVzLCBzZXRUaWxlc10gPSB1c2VTdGF0ZShbLi4uaW5pdGlhbHRpbGVzXSk7XHJcbiAgY29uc3QgW3B0aWxlcywgc2V0UHRpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZ3RpbGVzLCBzZXRHdGlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzcXVhcmVzLCBzZXRTcXVhcmVzXSA9IHVzZVN0YXRlKEFycmF5KDE1KS5maWxsKEFycmF5KDE1KS5maWxsKFwiLlwiKSkpO1xyXG4gIGNvbnN0IFt1c2VkYnksIHNldFVzZWRieV0gPSB1c2VTdGF0ZShBcnJheSgxNSkuZmlsbChBcnJheSgxNSkuZmlsbChcIlwiKSkpO1xyXG4gIGNvbnN0IFtzZWxlY3Rpb24sIHNldFNlbGVjdGlvbl0gPSB1c2VTdGF0ZSgtMSk7IC8vIHJlbGF0aXZlIHRvIHJhY2sgb2YgcGxheWVyIG1ha2luZyBhIHBsYXlcclxuICBjb25zdCBbd2hvc2V0dXJuLCBzZXRXaG9zZXR1cm5dID0gdXNlU3RhdGUoXCJQXCIpOyAvLyBnYW1lIHN0YXJ0cyB3aXRoIHByaXNvbmVycyBwbGF5XHJcbiAgY29uc3QgW2N1cnJlbnRjb29yZHMsIHNldEN1cnJlbnRjb29yZHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtyZXNjdWVzLCBzZXRSZXNjdWVzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtyY2QsIHNldFJjZF0gPSB1c2VTdGF0ZShbLTEsLTEsXCJcIl0pO1xyXG4gIGNvbnN0IFtzbmFwc2hvdCwgc2V0U25hcHNob3RdID0gdXNlU3RhdGUoe1xyXG4gICAgc3F1YXJlczogWy4uLnNxdWFyZXNdLFxyXG4gICAgdXNlZGJ5OiBbLi4udXNlZGJ5XSxcclxuICAgIHB0aWxlczogWy4uLnB0aWxlc10sXHJcbiAgICBndGlsZXM6IFsuLi5ndGlsZXNdLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIikge1xyXG4gICAgICBsZXQgdGVtcFBUaWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgICBsZXQgdGVtcEdUaWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgICBsZXQgdGVtcFRpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgICAgd2hpbGUgKHRlbXBQVGlsZXMubGVuZ3RoIDwgNykge1xyXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVtcFRpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgdGVtcFBUaWxlcy5wdXNoKHRlbXBUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgdGVtcFRpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgICByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVtcFRpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgdGVtcEdUaWxlcy5wdXNoKHRlbXBUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgdGVtcFRpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgfVxyXG4gICAgICB0ZW1wUFRpbGVzLnNvcnQoKTtcclxuICAgICAgdGVtcEdUaWxlcy5zb3J0KCk7XHJcbiAgICAgIHNldEd0aWxlcyh0ZW1wR1RpbGVzKTtcclxuICAgICAgc2V0UHRpbGVzKHRlbXBQVGlsZXMpO1xyXG4gICAgICBzZXRUaWxlcyh0ZW1wVGlsZXMpO1xyXG4gICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgc3F1YXJlczogWy4uLnNxdWFyZXNdLFxyXG4gICAgICAgIHVzZWRieTogWy4uLnVzZWRieV0sXHJcbiAgICAgICAgcHRpbGVzOiBbLi4udGVtcFBUaWxlc10sXHJcbiAgICAgICAgZ3RpbGVzOiBbLi4udGVtcEdUaWxlc10gICAgXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VuZGluZyBnZ2RcIilcclxuICAgICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgICBmdW5jOiBcImdnZFwiIC8vIGdldCBnYW1lIGRhdGFcclxuICAgICAgICB9KSk7XHJcbiAgICAgIH1cclxuICAgICAgY2F0Y2gge31cclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBtc2cgPSB3c21zZ3NbMF07XHJcbiAgICBpZiAobXNnKSBwcm9jZXNzTWVzc2FnZShtc2cpO1xyXG4gICAgICAgIFxyXG4gIH0sW3dzbXNnc10pXHJcblxyXG4gIGZ1bmN0aW9uIHByb2Nlc3NNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgIGxldCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZSk7IC8vIHdhcyBtZXNzYWdlLmRhdGFcclxuICAgIGlmIChtZXNzYWdlRGF0YS5nYW1laWQgPT09IGdhbWVpZCAmJiBtZXNzYWdlRGF0YS50eXBlID09PSBcInBiXCIpIHsgLy8gVGhpcyBpbnN0YW5jZSBvZiBhIHByaXNvbiBicmVhayBnYW1lXHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInJlcXVlc3RnYW1lZGF0YVwiICYmIG1lc3NhZ2VEYXRhLnJlcXVlc3RvciAhPT0gcHJpc29uZXJzT3JHdWFyZHMpIHsgLy8gT3Bwb25lbnQgcmVxdWVzdGVkIGdhbWUgaW5mb1xyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICAgIGZ1bmM6IFwicHJvdmlkZWdhbWVkYXRhXCIsIC8vIHByb3ZpZGUgZ2FtZSBkYXRhXHJcbiAgICAgICAgICAgIHNlbmRlcjogcHJpc29uZXJzT3JHdWFyZHMsIC8vIHdobyBzZW50IHRoZSBkYXRhXHJcbiAgICAgICAgICAgIHRpbGVzOiB0aWxlcyxcclxuICAgICAgICAgICAgc3F1YXJlczogc3F1YXJlcyxcclxuICAgICAgICAgICAgcHRpbGVzOiBwdGlsZXMsXHJcbiAgICAgICAgICAgIGd0aWxlczogZ3RpbGVzLFxyXG4gICAgICAgICAgICB1c2VkYnk6IHVzZWRieSxcclxuICAgICAgICAgICAgd2hvc2V0dXJuOiB3aG9zZXR1cm4sXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbjogc2VsZWN0aW9uLFxyXG4gICAgICAgICAgICBjdXJyZW50Y29vcmRzOiBjdXJyZW50Y29vcmRzLFxyXG4gICAgICAgICAgICBzbmFwc2hvdDogc25hcHNob3QsXHJcbiAgICAgICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXNcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJwcm92aWRlZ2FtZWRhdGFcIiAmJiBtZXNzYWdlRGF0YS5zZW5kZXIgIT09IHByaXNvbmVyc09yR3VhcmRzKSB7IC8vIG9wcG9uZW50IHByb3ZpZGVkIGdhbWUgZGF0YVxyXG4gICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgIHNldFB0aWxlcyhtZXNzYWdlRGF0YS5wdGlsZXMpO1xyXG4gICAgICAgIHNldEd0aWxlcyhtZXNzYWdlRGF0YS5ndGlsZXMpO1xyXG4gICAgICAgIHNldFVzZWRieShtZXNzYWdlRGF0YS51c2VkYnkpO1xyXG4gICAgICAgIHNldFdob3NldHVybihtZXNzYWdlRGF0YS53aG9zZXR1cm4pO1xyXG4gICAgICAgIHNldFNlbGVjdGlvbihtZXNzYWdlRGF0YS5zZWxlY3Rpb24pO1xyXG4gICAgICAgIHNldEN1cnJlbnRjb29yZHMobWVzc2FnZURhdGEuY3VycmVudGNvb3Jkcyk7XHJcbiAgICAgICAgc2V0U25hcHNob3QobWVzc2FnZURhdGEuc25hcHNob3QpO1xyXG4gICAgICAgIHNldFJlc2N1ZXMobWVzc2FnZURhdGEucmVzY3Vlcyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gd2hlbiBndWFyZHMgam9pbiBnYW1lIHRoZXkgc2VuZCBnZ2QsIGFuZCBwcmlzb25lciBwaWNrcyBpdCB1cCBhbmQgc2VuZHMgc2dkLCB0aGVuIGd1YXJkcyBwaWNrIHRoYXQgdXAgYW5kIHRha2UgdGhlIGRhdGFcclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiZ2dkXCIgJiYgcHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiKSB7IC8vIGdldCBnYW1lIGRhdGEgKHNlbnQgYnkgZ3VhcmRzLCBwcmlzb25lcnMgcmVzcG9uZCBoZXJlKVxyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICAgIGZ1bmM6IFwic2dkXCIsIC8vIHNlbmQgZ2FtZSBkYXRhXHJcbiAgICAgICAgICAgIHRpbGVzOiB0aWxlcyxcclxuICAgICAgICAgICAgc3F1YXJlczogc3F1YXJlcyxcclxuICAgICAgICAgICAgcHRpbGVzOiBwdGlsZXMsXHJcbiAgICAgICAgICAgIGd0aWxlczogZ3RpbGVzLFxyXG4gICAgICAgICAgICB1c2VkYnk6IHVzZWRieSxcclxuICAgICAgICAgICAgd2hvc2V0dXJuOiB3aG9zZXR1cm4sXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbjogc2VsZWN0aW9uLFxyXG4gICAgICAgICAgICBjdXJyZW50Y29vcmRzOiBjdXJyZW50Y29vcmRzLFxyXG4gICAgICAgICAgICBzbmFwc2hvdDogc25hcHNob3QsXHJcbiAgICAgICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXMgLy8gbWF5IGhhdmUgcmVzY3VlZCBhbm90aGVyIHByaXNvbmVyXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwic2dkXCIgJiYgcHJpc29uZXJzT3JHdWFyZHMgPT09IFwiR1wiKSB7IC8vIHNlbmQgZ2FtZSBkYXRhIChwcmlzb25lcnMgc2VudCBpdCwgZ3VhcmRzIG5vdyBnZXQgaXQpXHJcbiAgICAgICAgc2V0VGlsZXMobWVzc2FnZURhdGEudGlsZXMpO1xyXG4gICAgICAgIHNldFNxdWFyZXMobWVzc2FnZURhdGEuc3F1YXJlcyk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG1lc3NhZ2VEYXRhLnB0aWxlcyk7XHJcbiAgICAgICAgc2V0R3RpbGVzKG1lc3NhZ2VEYXRhLmd0aWxlcyk7XHJcbiAgICAgICAgc2V0VXNlZGJ5KG1lc3NhZ2VEYXRhLnVzZWRieSk7XHJcbiAgICAgICAgc2V0V2hvc2V0dXJuKG1lc3NhZ2VEYXRhLndob3NldHVybik7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKG1lc3NhZ2VEYXRhLnNlbGVjdGlvbik7XHJcbiAgICAgICAgc2V0Q3VycmVudGNvb3JkcyhtZXNzYWdlRGF0YS5jdXJyZW50Y29vcmRzKTtcclxuICAgICAgICBzZXRTbmFwc2hvdChtZXNzYWdlRGF0YS5zbmFwc2hvdCk7XHJcbiAgICAgICAgc2V0UmVzY3VlcyhtZXNzYWdlRGF0YS5yZXNjdWVzKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJlcHRcIikgeyAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICBzZXRXaG9zZXR1cm4oXCJHXCIpO1xyXG4gICAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICAgICAgc2V0UmNkKC0xLC0xLFwiXCIpO1xyXG4gICAgICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgICAgIHNldFNxdWFyZXMobWVzc2FnZURhdGEuc3F1YXJlcyk7XHJcbiAgICAgICAgc2V0VXNlZGJ5KG1lc3NhZ2VEYXRhLnVzZWRieSk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG1lc3NhZ2VEYXRhLnB0aWxlcyk7XHJcbiAgICAgICAgc2V0VGlsZXMobWVzc2FnZURhdGEudGlsZXMpO1xyXG4gICAgICAgIHNldFJlc2N1ZXMobWVzc2FnZURhdGEucmVzY3Vlcyk7XHJcbiAgICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgICAgc3F1YXJlczogWy4uLm1lc3NhZ2VEYXRhLnNxdWFyZXNdLFxyXG4gICAgICAgICAgdXNlZGJ5OiBbLi4ubWVzc2FnZURhdGEudXNlZGJ5XSxcclxuICAgICAgICAgIHB0aWxlczogWy4uLm1lc3NhZ2VEYXRhLnB0aWxlc10sXHJcbiAgICAgICAgICBndGlsZXM6IFsuLi5ndGlsZXNdLFxyXG4gICAgICAgIH0pOyAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJlZ3RcIikgeyAvLyBlbmQgZ3VhcmRzIHR1cm5cclxuICAgICAgICBzZXRXaG9zZXR1cm4oXCJQXCIpO1xyXG4gICAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICAgICAgc2V0UmNkKC0xLC0xLFwiXCIpO1xyXG4gICAgICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgICAgIHNldFNxdWFyZXMobWVzc2FnZURhdGEuc3F1YXJlcyk7XHJcbiAgICAgICAgc2V0VXNlZGJ5KG1lc3NhZ2VEYXRhLnVzZWRieSk7XHJcbiAgICAgICAgc2V0R3RpbGVzKG1lc3NhZ2VEYXRhLmd0aWxlcyk7XHJcbiAgICAgICAgc2V0VGlsZXMobWVzc2FnZURhdGEudGlsZXMpO1xyXG4gICAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICAgIHNxdWFyZXM6IFsuLi5tZXNzYWdlRGF0YS5zcXVhcmVzXSxcclxuICAgICAgICAgIHVzZWRieTogWy4uLm1lc3NhZ2VEYXRhLnVzZWRieV0sXHJcbiAgICAgICAgICBwdGlsZXM6IFsuLi5wdGlsZXNdLFxyXG4gICAgICAgICAgZ3RpbGVzOiBbLi4ubWVzc2FnZURhdGEuZ3RpbGVzXSxcclxuICAgICAgICB9KTsgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZU1lc3NhZ2UobWVzc2FnZSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIENhbGxpbmcgc2V0U2VsZWN0aW9uIChmcm9tIGhhbmRsZUtleURvd24pIHRoZW4gaGFuZGxlQm9hcmRTcXVhcmVDbGljayBkb2VzIG5vdCBsZXQgaXQgcmVjb2duaXplIHNlbGVjdGlvbiB3aXRoIHRoZSBuZXcgdmFsdWVcclxuICAvLyBTbyBJIHBhc3MgbmV3U2VsZWN0aW9uIHdoZW4gSSB3YW50IHRvIGFsc28gc2V0IGl0LCBvdGhlcndpc2UgSSBwYXNzIC0xIHRvIGluc3RydWN0IGl0IHRvIHVzZSBjdXJyZW50IHZhbHVlIG9mIHNlbGVjdGlvblxyXG4gIC8vIEFsc28gcGFzc2luZyBuZXdSY2RcclxuICBjb25zdCBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrID0gKHJpLCBjaSwgbmV3U2VsZWN0aW9uLCBuZXdSY2QpID0+IHtcclxuICAgIGxldCBuZXdTcXVhcmVzID0gWy4uLnNxdWFyZXNdO1xyXG4gICAgbGV0IG5ld1VzZWRieSA9IFsuLi51c2VkYnldO1xyXG4gICAgbGV0IG5ld1B0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgbGV0IG5ld1JvdyA9IFsuLi5zcXVhcmVzW3JpXV07XHJcbiAgICBsZXQgc3F1YXJldmFsdWUgPSBzcXVhcmVzW3JpXVtjaV07XHJcbiAgICBsZXQgbmV3Q3VycmVudGNvb3JkcyA9IFsuLi5jdXJyZW50Y29vcmRzXTtcclxuICAgIGxldCBjb29yZCA9IFN0cmluZyhyaSkgKyBcIi1cIiArIFN0cmluZyhjaSk7XHJcbiAgICBsZXQgY2NpID0gY3VycmVudGNvb3Jkcy5pbmRleE9mKGNvb3JkKTtcclxuICAgIGlmIChuZXdTZWxlY3Rpb24gPT09IC0xKSB7XHJcbiAgICAgIG5ld1NlbGVjdGlvbiA9IHNlbGVjdGlvbjtcclxuICAgICAgbmV3UmNkID0gcmNkO1xyXG4gICAgfVxyXG4gICAgaWYgKG5ld1NlbGVjdGlvbiA+IC0xICYmIHNxdWFyZXZhbHVlID09PSBcIi5cIikgeyAvLyB0aWxlIGlzIHNlbGVjdGVkIGZyb20gcmFjayBhbmQgY2xpY2tlZCBzcXVhcmUgaXMgbm90IHVzZWQgeWV0XHJcbiAgICAgIG5ld1Jvd1tjaV0gPVxyXG4gICAgICAgIHdob3NldHVybiA9PT0gXCJQXCIgPyBuZXdQdGlsZXNbbmV3U2VsZWN0aW9uXSA6IG5ld0d0aWxlc1tuZXdTZWxlY3Rpb25dO1xyXG4gICAgICBuZXdTcXVhcmVzW3JpXSA9IFsuLi5uZXdSb3ddO1xyXG4gICAgICB3aG9zZXR1cm4gPT09IFwiUFwiXHJcbiAgICAgICAgPyBuZXdQdGlsZXMuc3BsaWNlKG5ld1NlbGVjdGlvbiwgMSlcclxuICAgICAgICA6IG5ld0d0aWxlcy5zcGxpY2UobmV3U2VsZWN0aW9uLCAxKTtcclxuICAgICAgbGV0IG5ld1VzZWRieVJvdyA9IFsuLi5uZXdVc2VkYnlbcmldXTtcclxuICAgICAgbmV3VXNlZGJ5Um93W2NpXSA9IHdob3NldHVybjtcclxuICAgICAgbmV3VXNlZGJ5W3JpXSA9IFsuLi5uZXdVc2VkYnlSb3ddO1xyXG4gICAgICBpZiAod2hvc2V0dXJuID09PSBcIlBcIiAmJiBuZXdTZWxlY3Rpb24gPT09IG5ld1B0aWxlcy5sZW5ndGgpIHsgXHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3U2VsZWN0aW9uIC0gMVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh3aG9zZXR1cm4gPT09IFwiR1wiICYmIG5ld1NlbGVjdGlvbiA9PT0gbmV3R3RpbGVzLmxlbmd0aCkgeyBcclxuICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdTZWxlY3Rpb24gLSAxXHJcbiAgICAgIH1cclxuICAgICAgc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbik7XHJcbiAgICAgIHNldFNxdWFyZXMobmV3U3F1YXJlcyk7XHJcbiAgICAgIHNldFVzZWRieShuZXdVc2VkYnkpO1xyXG4gICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgIHNldEN1cnJlbnRjb29yZHMoWy4uLmN1cnJlbnRjb29yZHMsIGNvb3JkXSk7XHJcbiAgICAgIHNldFJjZChuZXdSY2QpOyAvLyBrZXkgZG93biBoYW5kbGVyIGZpZ3VyZWQgaXQgb3V0XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChjY2kgPiAtMSkgeyAvLyBjbGlja2VkIHNxdWFyZSBoYXMgYSB0aWxlIG9uIGl0IGZyb20gdGhlIGN1cnJlbnQgbW92ZSBpbiBwcm9ncmVzc1xyXG4gICAgICB3aG9zZXR1cm4gPT09IFwiUFwiXHJcbiAgICAgICAgPyBuZXdQdGlsZXMucHVzaChzcXVhcmV2YWx1ZSlcclxuICAgICAgICA6IG5ld0d0aWxlcy5wdXNoKHNxdWFyZXZhbHVlKTtcclxuICAgICAgbGV0IG5ld1JvdyA9IFsuLi5uZXdTcXVhcmVzW3JpXV07XHJcbiAgICAgIG5ld1Jvd1tjaV0gPSBcIi5cIjtcclxuICAgICAgbmV3U3F1YXJlc1tyaV0gPSBbLi4ubmV3Um93XTtcclxuICAgICAgbGV0IG5ld1VzZWRieVJvdyA9IFsuLi5uZXdVc2VkYnlbcmldXTtcclxuICAgICAgbmV3VXNlZGJ5Um93W2NpXSA9IFwiXCI7XHJcbiAgICAgIG5ld1VzZWRieVtyaV0gPSBbLi4ubmV3VXNlZGJ5Um93XTtcclxuICAgICAgc2V0U2VsZWN0aW9uKFxyXG4gICAgICAgIHdob3NldHVybiA9PT0gXCJQXCIgPyBuZXdQdGlsZXMubGVuZ3RoIC0gMSA6IG5ld0d0aWxlcy5sZW5ndGggLSAxXHJcbiAgICAgICk7XHJcbiAgICAgIG5ld0N1cnJlbnRjb29yZHMuc3BsaWNlKGNjaSwgMSk7XHJcblxyXG4gICAgICBzZXRTcXVhcmVzKG5ld1NxdWFyZXMpO1xyXG4gICAgICBzZXRVc2VkYnkobmV3VXNlZGJ5KTtcclxuICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKG5ld0N1cnJlbnRjb29yZHMpO1xyXG4gICAgICBzZXRSY2QoLTEsLTEsXCJcIik7IC8vIG1ha2UgcGxheXJlIGNsaWNrIGFnYWluIHRvIHNldCBkaXJlY3Rpb25cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gVGhleSBkaWRuJ3QgY2xpY2sgYSBzcXVhcmUgdG8gcGxhY2UgYSBzZWxlY3RlZCB0aWxlIHRoZXJlXHJcbiAgICAvLyBUaGV5IGRpZG4ndCBjbGljayBhIHNxdWFyZSB0byByZW1vdmUgYW4gZXhpc3RpbmcgdGlsZVxyXG4gICAgaWYgKHNxdWFyZXNbcmldW2NpXSA9PT0gXCIuXCIpIHtcclxuICAgICAgLy8gVGhlcmUgaXMgbm90aGluZyBvbiB0aGUgc3F1YXJlIHNvIHRoZXkgYXJlIHBpY2tpbmcgd2hlcmUgdG8gcGxhY2UgdGhlIG5leHQgdGlsZSB2aWEga2V5Ym9hcmRcclxuICAgICAgbGV0IG5ld0RpcmVjdGlvbiA9IHJjZFswXSAhPT0gcmkgfHwgcmNkWzFdICE9PSBjaSA/IFwiclwiIDogLy9jbGljayBuZXcgc3F1YXJlLCBzdGFydCB3aXRoIFwiclwiXHJcbiAgICAgICByY2RbMl0gPT09IFwiclwiID8gXCJkXCIgOiAvL2NsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIFwiclwiLCBjaGFuZ2UgdG8gXCJkXCJcclxuICAgICAgIHJjZFsyXSA9PT0gXCJkXCIgPyBcIlwiIDogLy9jbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyBcImRcIiwgY2hhbmdlIHRvIFwiXCJcclxuICAgICAgIFwiclwiOyAvLyBjbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyBcIlwiLCBjaGFuZ2UgdG8gXCJyXCJcclxuICAgICAgbmV3UmNkID0gW3JpLGNpLG5ld0RpcmVjdGlvbl07XHJcbiAgICAgIHNldFJjZChuZXdSY2QpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJpc29uZXJUaWxlQ2xpY2sgPSAodGlsZWluZGV4KSA9PiB7XHJcbiAgICAvLyB0aGUgaW5kZXggb2YgcHRpbGVzXHJcbiAgICBpZiAod2hvc2V0dXJuID09PSBcIlBcIikge1xyXG4gICAgICBzZXRTZWxlY3Rpb24odGlsZWluZGV4KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwiSXQgaXMgbm90IHlvdXIgdHVyblwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVHdWFyZFRpbGVDbGljayA9ICh0aWxlaW5kZXgpID0+IHtcclxuICAgIC8vIHRoZSBpbmRleCBvZiBndGlsZXNcclxuICAgIGlmICh3aG9zZXR1cm4gPT09IFwiR1wiKSB7XHJcbiAgICAgIHNldFNlbGVjdGlvbih0aWxlaW5kZXgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoXCJJdCBpcyBub3QgeW91ciB0dXJuXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGVuZFByaXNvbmVyc1R1cm4gPSAoKSA9PiB7XHJcbiAgICBpZiAoIWlzUGxheVZhbGlkKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IG5ld1Jlc2N1ZXMgPSByZXNjdWVzO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50Y29vcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChlc2NhcGVoYXRjaGVzLmluZGV4T2YoY3VycmVudGNvb3Jkc1tpXSkgPiAtMSkge1xyXG4gICAgICAgIG5ld1Jlc2N1ZXMgPSBuZXdSZXNjdWVzICsgMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IG5ld1B0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgIHdoaWxlIChuZXdQdGlsZXMubGVuZ3RoIDwgNyAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgbmV3UHRpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICB9XHJcbiAgICBuZXdQdGlsZXMuc29ydCgpO1xyXG4gICAgc2V0V2hvc2V0dXJuKFwiR1wiKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0UmVzY3VlcyhuZXdSZXNjdWVzKTtcclxuICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgc3F1YXJlczogWy4uLnNxdWFyZXNdLFxyXG4gICAgICB1c2VkYnk6IFsuLi51c2VkYnldLFxyXG4gICAgICBwdGlsZXM6IFsuLi5uZXdQdGlsZXNdLFxyXG4gICAgICBndGlsZXM6IFsuLi5ndGlsZXNdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVwdFwiLCAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLCAvLyB0aGlzIHdhcyBiZWluZyBjaGFuZ2VkIGFzIHRoZSB0aWxlcyB3ZXJlIGJlaW5nIHBsYXllZFxyXG4gICAgICAgIHVzZWRieTogdXNlZGJ5LCAvLyB0aGlzIHdhcyBiZWluZyBjaGFuZ2VkIGFzIHRoZSB0aWxlcyB3ZXJlIGJlaW5nIHBsYXllZFxyXG4gICAgICAgIHB0aWxlczogbmV3UHRpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgIHJlc2N1ZXM6IG5ld1Jlc2N1ZXMgLy8gbWF5IGhhdmUgcmVzY3VlZCBhbm90aGVyIHByaXNvbmVyXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGVuZEd1YXJkc1R1cm4gPSAoKSA9PiB7XHJcbiAgICBpZiAoIWlzUGxheVZhbGlkKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IG5ld0d0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgIHdoaWxlIChuZXdHdGlsZXMubGVuZ3RoIDwgNyAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgbmV3R3RpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICB9XHJcbiAgICBuZXdHdGlsZXMuc29ydCgpO1xyXG4gICAgbGV0IHNuYXBzcXVhcmVzID0gWy4uLnNxdWFyZXNdO1xyXG4gICAgbGV0IHNuYXB1c2VkYnkgPSBbLi4udXNlZGJ5XTtcclxuICAgIGxldCBzbmFwcHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICBsZXQgc25hcGd0aWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgc2V0V2hvc2V0dXJuKFwiUFwiKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICBzcXVhcmVzOiBzbmFwc3F1YXJlcyxcclxuICAgICAgdXNlZGJ5OiBzbmFwdXNlZGJ5LFxyXG4gICAgICBwdGlsZXM6IHNuYXBwdGlsZXMsXHJcbiAgICAgIGd0aWxlczogc25hcGd0aWxlcyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlZ3RcIiwgLy8gZW5kIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgc3F1YXJlczogc3F1YXJlcywgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICB1c2VkYnk6IHVzZWRieSwgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICBndGlsZXM6IG5ld0d0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgZ3VhcmRzIHJhY2tcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICBjb25zdCBzd2FwUHJpc29uZXJzVGlsZXMgPSAoKSA9PiB7XHJcbiAgICBpZiAodGlsZXMubGVuZ3RoIDwgNykge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJOZWVkIDcgaW4gdGhlIGJhZyB0byBleGNoYW5nZVwiKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3UHRpbGVzID0gW107XHJcbiAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgd2hpbGUgKG5ld1B0aWxlcy5sZW5ndGggPCA3ICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICBuZXdQdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgIH1cclxuICAgIG5ld1B0aWxlcy5zb3J0KCk7XHJcbiAgICBuZXdUaWxlcyA9IFsuLi5uZXdUaWxlcywgLi4uc25hcHNob3QucHRpbGVzXTtcclxuICAgIG5ld1RpbGVzLnNvcnQoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRXhjaGFuZ2UgcHRpbGVzXCIpXHJcbiAgICBjb25zb2xlLmxvZyhzbmFwc2hvdC5wdGlsZXMpXHJcbiAgICBjb25zb2xlLmxvZyhwdGlsZXMpXHJcbiAgICBjb25zb2xlLmxvZyhuZXdQdGlsZXMpXHJcbiAgICBjb25zb2xlLmxvZyh0aWxlcylcclxuICAgIGNvbnNvbGUubG9nKG5ld1RpbGVzKVxyXG4gICAgc2V0U3F1YXJlcyhbLi4uc25hcHNob3Quc3F1YXJlc10pO1xyXG4gICAgc2V0VXNlZGJ5KFsuLi5zbmFwc2hvdC51c2VkYnldKTtcclxuICAgIHNldFdob3NldHVybihcIkdcIik7XHJcbiAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgc3F1YXJlczogWy4uLnNuYXBzaG90LnNxdWFyZXNdLFxyXG4gICAgICB1c2VkYnk6IFsuLi5zbmFwc2hvdC51c2VkYnldLFxyXG4gICAgICBwdGlsZXM6IFsuLi5uZXdQdGlsZXNdLFxyXG4gICAgICBndGlsZXM6IFsuLi5ndGlsZXNdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVwdFwiLCAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICBzcXVhcmVzOiBzbmFwc2hvdC5zcXVhcmVzLCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiBzcXVhcmVzXHJcbiAgICAgICAgdXNlZGJ5OiBzbmFwc2hvdC51c2VkYnksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHVzZWQgYnlcclxuICAgICAgICBwdGlsZXM6IG5ld1B0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgcHJpc29uZXJzIHJhY2tcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICByZXNjdWVzOiByZXNjdWVzIC8vIG5vIHJlc2N1ZXMgb24gYW4gZXhjaGFuZ2VcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gIH1cclxuICBcclxuICBjb25zdCBzd2FwR3VhcmRzVGlsZXMgPSAoKSA9PiB7XHJcbiAgICBpZiAodGlsZXMubGVuZ3RoIDwgNykge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJOZWVkIDcgaW4gdGhlIGJhZyB0byBleGNoYW5nZVwiKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3R3RpbGVzID0gW107XHJcbiAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgd2hpbGUgKG5ld0d0aWxlcy5sZW5ndGggPCA3ICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICBuZXdHdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgIH1cclxuICAgIG5ld0d0aWxlcy5zb3J0KCk7XHJcbiAgICBuZXdUaWxlcyA9IFsuLi5uZXdUaWxlcywgLi4uc25hcHNob3QuZ3RpbGVzXTtcclxuICAgIG5ld1RpbGVzLnNvcnQoKTtcclxuICAgIHNldFNxdWFyZXMoWy4uLnNuYXBzaG90LnNxdWFyZXNdKTtcclxuICAgIHNldFVzZWRieShbLi4uc25hcHNob3QudXNlZGJ5XSk7XHJcbiAgICBzZXRXaG9zZXR1cm4oXCJQXCIpO1xyXG4gICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgIHNxdWFyZXM6IFsuLi5zbmFwc2hvdC5zcXVhcmVzXSxcclxuICAgICAgdXNlZGJ5OiBbLi4uc25hcHNob3QudXNlZGJ5XSxcclxuICAgICAgcHRpbGVzOiBbLi4ucHRpbGVzXSxcclxuICAgICAgZ3RpbGVzOiBbLi4ubmV3R3RpbGVzXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlZ3RcIiwgLy8gZW5kIGd1YXJkcyB0dXJuXHJcbiAgICAgICAgc3F1YXJlczogc25hcHNob3Quc3F1YXJlcywgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgZ3RpbGVzOiBuZXdHdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaXNQbGF5VmFsaWQoKSB7XHJcbiAgICBpZiAoc3F1YXJlc1s3XVs3XSA9PT0gXCIuXCIpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiRmlyc3QgcGxheSBtdXN0IGhpdCBjZW50ZXIgc3F1YXJlXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQgbG93cm93ID0gMTU7XHJcbiAgICBsZXQgaGlnaHJvdyA9IC0xO1xyXG4gICAgbGV0IGxvd2NvbCA9IDE1O1xyXG4gICAgbGV0IGhpZ2hjb2wgPSAtMTtcclxuICAgIGZvciAodmFyIHI9MDsgciA8IDE1OyArK3IpIHtcclxuICAgICAgZm9yICh2YXIgYz0wOyBjIDwgMTU7ICsrYykge1xyXG4gICAgICAgIGlmIChzcXVhcmVzW3JdW2NdICE9PSBcIi5cIikge1xyXG4gICAgICAgICAgaWYgKCEociA+IDAgJiYgc3F1YXJlc1tyLTFdW2NdICE9PSBcIi5cIikgJiZcclxuICAgICAgICAgICAhKGMgPiAwICYmIHNxdWFyZXNbcl1bYy0xXSAhPT0gXCIuXCIpICYmXHJcbiAgICAgICAgICAgIShyIDwgMTQgJiYgc3F1YXJlc1tyKzFdW2NdICE9PSBcIi5cIikgJiZcclxuICAgICAgICAgICAhKGMgPCAxNCAmJiBzcXVhcmVzW3JdW2MrMV0gIT09IFwiLlwiKVxyXG4gICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJFYWNoIHBsYXllZCB0aWxlIG11c3QgYmUgcGFydCBvZiBhIHdvcmRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgaWYgKHNuYXBzaG90LnNxdWFyZXNbcl1bY10gPT09IFwiLlwiKSB7XHJcbiAgICAgICAgICAgICAvLyBUaGlzIHNxdWFyZSB3YXMgcGxheWVkIG9uIHRoaXMgdHVyblxyXG4gICAgICAgICAgICAgaWYgKHIgPCBsb3dyb3cpIHsgbG93cm93ID0gcjt9XHJcbiAgICAgICAgICAgICBpZiAociA+IGhpZ2hyb3cpIHsgaGlnaHJvdyA9IHI7fVxyXG4gICAgICAgICAgICAgaWYgKGMgPCBsb3djb2wpIHsgbG93Y29sID0gYzt9XHJcbiAgICAgICAgICAgICBpZiAoYyA+IGhpZ2hjb2wpIHsgaGlnaGNvbCA9IGM7fVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGxvd3JvdyA9PT0gMTUpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiWW91IGRpZG4ndCBwbGF5IGFueSB0aWxlc1wiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvd3JvdyAhPT0gaGlnaHJvdyAmJiBsb3djb2wgIT09IGhpZ2hjb2wpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiVGlsZXMgcGxheWVkIG11c3QgYmUgaW4gYSBzdHJhaWdodCBsaW5lXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQgcGxheXRocnUgPSBmYWxzZTtcclxuICAgIGxldCBob29rbWFkZSA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgciA9IGxvd3JvdzsgciA8PSBoaWdocm93OyArK3IpIHtcclxuICAgICAgZm9yICh2YXIgYyA9IGxvd2NvbDsgYyA8PSBoaWdoY29sOyArK2MpIHtcclxuICAgICAgICBpZiAoc3F1YXJlc1tyXVtjXSA9PT0gXCIuXCIpIHtcclxuICAgICAgICAgIHdpbmRvdy5hbGVydChcIlRoZXJlIGlzIGEgZ2FwIGluIHlvdXIgd29yZFwiKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNuYXBzaG90LnNxdWFyZXNbcl1bY10gIT09IFwiLlwiKSB7XHJcbiAgICAgICAgICBwbGF5dGhydSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgciA+IDAgJiYgc3F1YXJlc1tyLTFdW2NdICE9PSBcIi5cIikgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIHIgPCAxNCAmJiBzcXVhcmVzW3IrMV1bY10gIT09IFwiLlwiKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgYyA+IDAgJiYgc3F1YXJlc1tyXVtjLTFdICE9PSBcIi5cIikgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGMgPCAxNCAmJiBzcXVhcmVzW3JdW2MrMV0gIT09IFwiLlwiKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBDaGVjayBwbGF5IHRvIG9yIGZyb20gYSB0aWxlIChwbGF5IHRocm91Z2ggYnV0IG5vdCBlaXRoZXIgc2lkZSlcclxuICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgbG93Y29sID4gMCAmJiBzbmFwc2hvdC5zcXVhcmVzW2xvd3Jvd11bbG93Y29sLTFdICE9PSBcIi5cIikgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgaGlnaGNvbCA8IDE0ICYmIHNuYXBzaG90LnNxdWFyZXNbbG93cm93XVtoaWdoY29sKzFdICE9PSBcIi5cIikgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgbG93cm93ID4gMCAmJiBzbmFwc2hvdC5zcXVhcmVzW2xvd3Jvdy0xXVtsb3djb2xdICE9PSBcIi5cIikgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgaGlnaHJvdyA8IDE0ICYmIHNuYXBzaG90LnNxdWFyZXNbaGlnaHJvdysxXVtsb3djb2xdICE9PSBcIi5cIikgeyBwbGF5dGhydSA9IHRydWU7IH1cclxuICAgIGlmICghcGxheXRocnUgJiYgIWhvb2ttYWRlICYmIHNuYXBzaG90LnNxdWFyZXNbN11bN10gIT09IFwiLlwiKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIldvcmRzIG11c3QgYmUgY29ubmVjdGVkXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlY2FsbFRpbGVzID0gKCkgPT4ge1xyXG4gICAgc2V0U3F1YXJlcyhbLi4uc25hcHNob3Quc3F1YXJlc10pO1xyXG4gICAgc2V0VXNlZGJ5KFsuLi5zbmFwc2hvdC51c2VkYnldKTtcclxuICAgIHNldFB0aWxlcyhbLi4uc25hcHNob3QucHRpbGVzXSk7XHJcbiAgICBzZXRHdGlsZXMoWy4uLnNuYXBzaG90Lmd0aWxlc10pO1xyXG4gICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByaXNvbmVyUGFzcyA9ICgpID0+IHtcclxuICAgIHJlY2FsbFRpbGVzKCk7IC8vIEluIGNhc2UgdGhleSBwdXQgc29tZSB0aWxlcyBvbiB0aGUgYm9hcmQgYmVmb3JlIGNsaWNraW5nIFBhc3NcclxuICAgIHNldFdob3NldHVybihcIkdcIik7XHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZXB0XCIsIC8vIGVuZCBwcmlzb25lcnMgdHVyblxyXG4gICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICB1c2VkYnk6IHNuYXBzaG90LnVzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgIHB0aWxlczogc25hcHNob3QucHRpbGVzLCAvLyBwcmlzb25lcnMgcmFjayBkaWQgbm90IGNoYW5nZVxyXG4gICAgICAgIHRpbGVzOiB0aWxlcywgLy8gdGlsZSBwb29sIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgcmVzY3VlczogcmVzY3VlcyAvLyBubyByZXNjdWVzIG9uIGEgcGFzc1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGd1YXJkc1Bhc3MgPSAoKSA9PiB7XHJcbiAgICByZWNhbGxUaWxlcygpOyAvLyBJbiBjYXNlIHRoZXkgcHV0IHNvbWUgdGlsZXMgb24gdGhlIGJvYXJkIGJlZm9yZSBjbGlja2luZyBQYXNzXHJcbiAgICBzZXRXaG9zZXR1cm4oXCJQXCIpO1xyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVndFwiLCAvLyBlbmQgZ3VhcmRzIHR1cm5cclxuICAgICAgICBzcXVhcmVzOiBzbmFwc2hvdC5zcXVhcmVzLCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiBzcXVhcmVzXHJcbiAgICAgICAgdXNlZGJ5OiBzbmFwc2hvdC51c2VkYnksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHVzZWQgYnlcclxuICAgICAgICBndGlsZXM6IHNuYXBzaG90Lmd0aWxlcywgLy8gZ3VhcmRzIHJhY2sgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICB0aWxlczogdGlsZXMgLy8gdGlsZSBwb29sIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVxdWVzdEdhbWVEYXRhID0gKHBsYXllcnR5cGUpID0+IHtcclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJyZXF1ZXN0Z2FtZWRhdGFcIiwgLy8gcmVxdWVzdCBnYW1lIGRhdGFcclxuICAgICAgICByZXF1ZXN0b3I6IHByaXNvbmVyc09yR3VhcmRzXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHByaXNvbmVyc09yR3VhcmRzICE9PSB3aG9zZXR1cm4pIHtyZXR1cm47fVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgIHdob3NldHVybiA9PT0gXCJQXCIgPyBlbmRQcmlzb25lcnNUdXJuKCkgOiBlbmRHdWFyZHNUdXJuKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBsZXR0ZXJ0ZXN0ID0gL15bQS1aYS16XFw/XSQvOyAvLyBzaW5nbGUgbGV0dGVyIG9yIHF1ZXN0aW9uIG1hcmsga2V5IHByZXNzZWRcclxuICAgIGlmIChldmVudC5rZXkubWF0Y2gobGV0dGVydGVzdCkpIHtcclxuICAgICAgbGV0IGxldHRlciA9IGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICBsZXQgcmFjayA9IHdob3NldHVybiA9PT0gXCJQXCIgPyBwdGlsZXMgOiBndGlsZXM7XHJcbiAgICAgIGxldCBuZXdTZWxlY3Rpb24gPSByYWNrLmluZGV4T2YobGV0dGVyKTtcclxuICAgICAgaWYgKG5ld1NlbGVjdGlvbiA9PT0gLTEpIHtcclxuICAgICAgICBuZXdTZWxlY3Rpb24gPSByYWNrLmluZGV4T2YoXCI/XCIpOyAvLyBVc2UgdGhlIGJsYW5rIGlmIHRoZXkgaGF2ZSBvbmVcclxuICAgICAgfVxyXG4gICAgICBpZiAobmV3U2VsZWN0aW9uID4gLTEpIHsgLy8gUHJlc3NlZCBsZXR0ZXIgaXMgb24gdGhlIHJhY2tcclxuICAgICAgICBsZXQgcm93ID0gcmNkWzBdO1xyXG4gICAgICAgIGxldCBjb2wgPSByY2RbMV07XHJcbiAgICAgICAgbGV0IGRpciA9IHJjZFsyXTtcclxuICAgICAgICBpZiAocm93ID4tMSAmJiBjb2wgPiAtMSAmJiBkaXIgIT09IFwiXCIpIHsgLy8gcm93LCBjb2wsIGRpciBhcmUgc2V0IHRvIGFjY2VwdCBrZXlzdHJva2VcclxuICAgICAgICAgIC8vIE5lZWQgdG8gZmlndXJlIG91dCBuZXh0IHNxYXVyZSB0byBhdXRvLXBsYWNlIGEgdGlsZVxyXG4gICAgICAgICAgbGV0IG5ld1JjZCA9IHJjZDtcclxuICAgICAgICAgIGlmIChkaXIgPT09IFwiclwiKSB7IC8vIHBsYXlpbmcgcmlnaHR3YXJkc1xyXG4gICAgICAgICAgICBsZXQgbmV3YyA9IC0xO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBjID0gY29sICsgMTsgYyA8IDE1ICYmIG5ld2MgPT09IC0xOyBjKyspIHtcclxuICAgICAgICAgICAgICBpZiAoc3F1YXJlc1tyb3ddW2NdID09PSBcIi5cIikge25ld2MgPSBjO31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobmV3YyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICBuZXdSY2QgPSBbLTEsLTEsXCJcIl07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbmV3UmNkID0gW3JvdywgbmV3YywgXCJyXCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socm93LGNvbCxuZXdTZWxlY3Rpb24sbmV3UmNkKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGRpciA9PT0gXCJkXCIpIHsgLy8gcGxheWluZyBkb3dud2FyZHNcclxuICAgICAgICAgICAgbGV0IG5ld3IgPSAtMTtcclxuICAgICAgICAgICAgZm9yICh2YXIgciA9IHJvdyArIDE7IHIgPCAxNSAmJiBuZXdyID09PSAtMTsgcisrKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHNxdWFyZXNbcl1bY29sXSA9PT0gXCIuXCIpIHtuZXdyID0gcjt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5ld3IgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgbmV3UmNkID0gWy0xLC0xLFwiXCJdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG5ld1JjZCA9IFtuZXdyLCBjb2wsIFwiZFwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJvdyxjb2wsbmV3U2VsZWN0aW9uLG5ld1JjZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJCYWNrc3BhY2VcIiAmJiBjdXJyZW50Y29vcmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgLy8gU2FtZSBhcyBjbGlja2luZyBvbiBhIHBsYXllZC10aGlzLW1vdmUgdGlsZSBpbiB0ZXJtcyBvZiByZXR1cm5pbmcgdGhlIHRpbGUgdG8gdGhlIHJhY2tcclxuICAgICAgLy8gSG93ZXZlciB3ZSBhbHNvIHdhbnQgdG8gc2V0IHVwIHJjZCBzbyB0aGV5IGNhbiBwcmVzcyB0aGUga2V5IHRoZXkgbWVhbnQgYW5kIGNvbnRpbnVlXHJcbiAgICAgIGxldCBjb29yZCA9IGN1cnJlbnRjb29yZHNbY3VycmVudGNvb3Jkcy5sZW5ndGggLSAxXTsgLy8gdGlsZSB0byByZXR1cm4gdG8gcmFja1xyXG4gICAgICBsZXQgbmV3Q3VycmVudGNvb3JkcyA9IFsuLi5jdXJyZW50Y29vcmRzXTtcclxuICAgICAgbGV0IG5ld1B0aWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgICBsZXQgbmV3R3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICAgIGxldCBuZXdVc2VkYnkgPSBbLi4udXNlZGJ5XTtcclxuICAgICAgbGV0IG5ld1NxdWFyZXMgPSBbLi4uc3F1YXJlc107XHJcbiAgICAgIGxldCBuZXdSY2QgPSBbLTEsLTEsXCJcIl07XHJcbiAgICAgIGxldCBuZXdTZWxlY3Rpb24gPSBzZWxlY3Rpb247XHJcbiAgICAgIG5ld0N1cnJlbnRjb29yZHMuc3BsaWNlKGN1cnJlbnRjb29yZHMubGVuZ3RoLTEsMSk7XHJcbiAgICAgIGxldCByb3cgPSBwYXJzZUludChjb29yZC5zcGxpdChcIi1cIilbMF0pO1xyXG4gICAgICBsZXQgY29sID0gcGFyc2VJbnQoY29vcmQuc3BsaXQoXCItXCIpWzFdKTtcclxuICAgICAgbGV0IHJldHVybmVkVGlsZSA9IHNxdWFyZXNbcm93XVtjb2xdO1xyXG4gICAgICBpZiAod2hvc2V0dXJuID09PSBcIlBcIikge1xyXG4gICAgICAgIG5ld1B0aWxlcy5wdXNoKHJldHVybmVkVGlsZSk7XHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3UHRpbGVzLmxlbmd0aC0xO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld0d0aWxlcy5wdXNoKHJldHVybmVkVGlsZSk7XHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3R3RpbGVzLmxlbmd0aC0xO1xyXG4gICAgICB9XHJcbiAgICAgIG5ld1VzZWRieVtyb3ddW2NvbF0gPSBcIlwiO1xyXG4gICAgICBuZXdTcXVhcmVzW3Jvd11bY29sXSA9IFwiLlwiO1xyXG4gICAgICBsZXQgZGlyID0gcmNkWzJdO1xyXG4gICAgICBpZiAoZGlyICE9PSBcIlwiKSB7XHJcbiAgICAgICAgLy8gZGlyZWN0aW9uIHdhcyBzZXQgc28ga2VlcCBpdFxyXG4gICAgICAgIG5ld1JjZCA9IFtyb3csY29sLGRpcl07XHJcbiAgICAgICAgaWYgKGN1cnJlbnRjb29yZHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSAtMTsgLy8gaWYgdGhleSBiYWNrc3BhY2UgYWxsIHRoZSBsZXR0ZXJzIG9mZiBsZWF2ZSByYWNrIHRpbGUgdW5zZWxlY3RlZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKG5ld0N1cnJlbnRjb29yZHMpO1xyXG4gICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgIHNldFNxdWFyZXMobmV3U3F1YXJlcyk7XHJcbiAgICAgIHNldFVzZWRieShuZXdVc2VkYnkpO1xyXG4gICAgICBzZXRSY2QobmV3UmNkKTtcclxuICAgICAgc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwcmlzb25icmVha1wiIG9uS2V5RG93bkNhcHR1cmU9e2hhbmRsZUtleURvd259PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIHBidGl0bGVcIj5Qcmlzb24gQnJlYWs8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yIHBiaG9tZWxpbmtcIj5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJyZXF1ZXN0R2FtZURhdGFcIlxyXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlN5bmMgd2l0aCBvcHBvbmVudFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIHJlcXVlc3RHYW1lRGF0YShwcmlzb25lcnNPckd1YXJkcyk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5zeW5jPC9pPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi4uLy4uL1wifT5cclxuICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPjwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMiBwYlByaXNvbmVyc1wiPlxyXG4gICAgICAgICAgPFByaXNvbmVyc1xyXG4gICAgICAgICAgICBwdGlsZXM9e3B0aWxlc31cclxuICAgICAgICAgICAgd2hvc2V0dXJuPXt3aG9zZXR1cm59XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0aW9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IGhhbmRsZVByaXNvbmVyVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgb25DbGlja0ZpbmlzaFR1cm49eygpID0+IGVuZFByaXNvbmVyc1R1cm4oKX1cclxuICAgICAgICAgICAgb25DbGlja1RpbGVSZWNhbGw9eygpID0+IHJlY2FsbFRpbGVzKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tUaWxlRXhjaGFuZ2U9eygpID0+IHN3YXBQcmlzb25lcnNUaWxlcygpfVxyXG4gICAgICAgICAgICBvbkNsaWNrUGFzc1BsYXk9eygpID0+IHByaXNvbmVyUGFzcygpfVxyXG4gICAgICAgICAgICByZXNjdWVzPXtyZXNjdWVzfVxyXG4gICAgICAgICAgICBwcmlzb25lcnNPckd1YXJkcz17cHJpc29uZXJzT3JHdWFyZHN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAge3ByaXNvbmVyc09yR3VhcmRzID09PSB3aG9zZXR1cm4gP1xyXG4gICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgIHNxdWFyZXM9e3NxdWFyZXN9XHJcbiAgICAgICAgICAgIHVzZWRieT17dXNlZGJ5fVxyXG4gICAgICAgICAgICByY2Q9e3JjZH1cclxuICAgICAgICAgICAgb25DbGljaz17KHJpLCBjaSkgPT4gaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyaSwgY2ksIC0xLG51bGwpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDpcclxuICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICBzcXVhcmVzPXtzcXVhcmVzfVxyXG4gICAgICAgICAgICB1c2VkYnk9e3VzZWRieX1cclxuICAgICAgICAgICAgcmNkPXtyY2R9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTIgcGJHdWFyZHNcIj5cclxuICAgICAgICAgIDxHdWFyZHNcclxuICAgICAgICAgICAgZ3RpbGVzPXtndGlsZXN9XHJcbiAgICAgICAgICAgIHdob3NldHVybj17d2hvc2V0dXJufVxyXG4gICAgICAgICAgICBzZWxlY3Rpb249e3NlbGVjdGlvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KHRpKSA9PiBoYW5kbGVHdWFyZFRpbGVDbGljayh0aSl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tGaW5pc2hUdXJuPXsoKSA9PiBlbmRHdWFyZHNUdXJuKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tUaWxlUmVjYWxsPXsoKSA9PiByZWNhbGxUaWxlcygpfVxyXG4gICAgICAgICAgICBvbkNsaWNrVGlsZUV4Y2hhbmdlPXsoKSA9PiBzd2FwR3VhcmRzVGlsZXMoKX1cclxuICAgICAgICAgICAgb25DbGlja1Bhc3NQbGF5PXsoKSA9PiBndWFyZHNQYXNzKCl9XHJcbiAgICAgICAgICAgIHByaXNvbmVyc09yR3VhcmRzPXtwcmlzb25lcnNPckd1YXJkc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxyXG4gICAgICAgICAgPFNob3dVbnNlZW5UaWxlcyB0aWxlcz17dGlsZXN9IG90aGVydGlsZXM9e3ByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IGd0aWxlcyA6IHB0aWxlc30vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTaG93VW5zZWVuVGlsZXMgPSAocHJvcHMpID0+IHsgLy8gdGlsZXMgPSB0aWxlcyBpbiBiYWcsIG90aGVydGlsZXMgPSB0aWxlcyBvbiBvdGhlciBwbGF5ZXJzIHJhY2tcclxuICBsZXQgdW5zZWVuVGlsZXMgPSBbLi4ucHJvcHMudGlsZXMsIC4uLnByb3BzLm90aGVydGlsZXNdO1xyXG4gIHVuc2VlblRpbGVzLnNvcnQoKTtcclxuICBpZiAodW5zZWVuVGlsZXNbMF0gPT09IFwiP1wiKSB7XHJcbiAgICAgIHVuc2VlblRpbGVzLnNwbGljZSgwLDEpXHJcbiAgICAgIHVuc2VlblRpbGVzLnB1c2goXCI/XCIpXHJcbiAgfVxyXG4gIGlmICh1bnNlZW5UaWxlc1swXSA9PT0gXCI/XCIpIHtcclxuICAgICAgdW5zZWVuVGlsZXMuc3BsaWNlKDAsMSlcclxuICAgICAgdW5zZWVuVGlsZXMucHVzaChcIj9cIilcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcG9vbFwiPlxyXG4gICAgICA8aDM+VElMRVM8L2gzPlxyXG4gICAgICB7dW5zZWVuVGlsZXMubWFwKCh0LCB0aSkgPT4gKFxyXG4gICAgICAgIDxzcGFuIGtleT17YHRpbGUke3RpfWB9PlxyXG4gICAgICAgICAge3RpID4gMCAmJiB0ICE9PSB1bnNlZW5UaWxlc1t0aSAtIDFdID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXBvb2xEaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiVGlsZXBvb2xUaWxlXCI+e3R9PC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUmFja1RpbGUgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPXtwcm9wcy50aWxlY2xhc3N9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICB7cHJvcHMudGlsZXZhbHVlfVxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBGaW5pc2hUdXJuQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJGaW5pc2hUdXJuXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+Y2hlY2s8L2k+RmluaXNoIFR1cm5cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBUaWxlUmVjYWxsQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJSZWNhbGxUaWxlc1wiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnVuZG88L2k+UmVjYWxsIFRpbGVzXHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVGlsZUV4Y2hhbmdlQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJFeGNoYW5nZVRpbGVzXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c2VudGltZW50X3ZlcnlfZGlzc2F0aXNmaWVkPC9pPkV4Y2hhbmdlIFRpbGVzXHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUGFzc1BsYXlCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYlBhc3NQbGF5XCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c2VudGltZW50X25ldXRyYWw8L2k+UGFzc1xyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFByaXNvbmVycyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJlbmRlclRpbGUgPSAodGlsZWNsYXNzLCB0aWxlaW5kZXgsIHRpbGV2YWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID9cclxuICAgICAgPFJhY2tUaWxlXHJcbiAgICAgICAga2V5PXt0aWxlY2xhc3MgKyBTdHJpbmcodGlsZWluZGV4KX1cclxuICAgICAgICB0aWxlY2xhc3M9e3RpbGVjbGFzc31cclxuICAgICAgICB0aWxldmFsdWU9e3RpbGV2YWx1ZX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrKHRpbGVpbmRleCl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDpcclxuICAgICAgPFJhY2tUaWxlXHJcbiAgICAgICAga2V5PXt0aWxlY2xhc3MgKyBTdHJpbmcodGlsZWluZGV4KX1cclxuICAgICAgICB0aWxlY2xhc3M9e3RpbGVjbGFzc31cclxuICAgICAgICB0aWxldmFsdWU9e3RpbGV2YWx1ZX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cuYWxlcnQoXCJObyBwZWVraW5nIVwiKX1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRmluaXNoVHVybiA9ICgpID0+IHtcclxuICAgIHJldHVybiA8cD48RmluaXNoVHVybkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrRmluaXNoVHVybigpfSAvPjwvcD47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUmVjYWxsVGlsZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPHA+PFRpbGVSZWNhbGxCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1RpbGVSZWNhbGwoKX0gLz48L3A+O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckV4Y2hhbmdlVGlsZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPHA+PFRpbGVFeGNoYW5nZUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrVGlsZUV4Y2hhbmdlKCl9IC8+PC9wPjtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJQYXNzUGxheSA9ICgpID0+IHtcclxuICAgIHJldHVybiA8cD48UGFzc1BsYXlCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1Bhc3NQbGF5KCl9IC8+PC9wPjtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJGcmVlZFByaXNvbmVycyA9IChjb3VudCkgPT4ge1xyXG4gICAgbGV0IGR1bWIgPSBBcnJheShjb3VudCkuZmlsbChcIm5vbnNlbnNlXCIpO1xyXG4gICAgcmV0dXJuIGR1bWIubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgPHNwYW4ga2V5PXt2YWx1ZSArIFN0cmluZyhpbmRleCl9PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cIi9icmVha2ZyZWUucG5nXCJcclxuICAgICAgICAgIGFsdD1cIkknbSBmcmVlISBJJ20gZnJlZSFcIlxyXG4gICAgICAgICAgd2lkdGg9XCIxMDBcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMTAwXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICApKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHA+UFJJU09ORVJTPC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJwYlRpbGVyYWNrXCI+XHJcbiAgICAgICAge3Byb3BzLnB0aWxlcy5tYXAoKHQsIHRpKSA9PlxyXG4gICAgICAgICAgcmVuZGVyVGlsZShcclxuICAgICAgICAgICAgcHJvcHMud2hvc2V0dXJuID09PSBcIlBcIiAmJiBwcm9wcy5zZWxlY3Rpb24gPT09IHRpXHJcbiAgICAgICAgICAgICAgPyBcInBiVGlsZU9uUmFja1NlbGVjdGVkUFwiXHJcbiAgICAgICAgICAgICAgOiBcInBiVGlsZU9uUmFja1BcIixcclxuICAgICAgICAgICAgdGksXHJcbiAgICAgICAgICAgIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IHQgOiBcIipcIlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvcD5cclxuICAgICAge3Byb3BzLndob3NldHVybiA9PT0gXCJQXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gcmVuZGVyRmluaXNoVHVybigpIDogPD48Lz59XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiUFwiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IHJlbmRlclJlY2FsbFRpbGVzKCkgOiA8PjwvPn1cclxuICAgICAge3Byb3BzLndob3NldHVybiA9PT0gXCJQXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gcmVuZGVyRXhjaGFuZ2VUaWxlcygpIDogPD48Lz59XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiUFwiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IHJlbmRlclBhc3NQbGF5KCkgOiA8PjwvPn1cclxuICAgICAgPHA+XHJcbiAgICAgICAgUmVzY3VlcyBtYWRlOiB7cHJvcHMucmVzY3Vlc31cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICB7cmVuZGVyRnJlZWRQcmlzb25lcnMocHJvcHMucmVzY3Vlcyl9XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBHdWFyZHMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByZW5kZXJUaWxlID0gKHRpbGVjbGFzcywgdGlsZWluZGV4LCB0aWxldmFsdWUpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiA/XHJcbiAgICAgIDxSYWNrVGlsZVxyXG4gICAgICAgIGtleT17dGlsZWNsYXNzICsgU3RyaW5nKHRpbGVpbmRleCl9XHJcbiAgICAgICAgdGlsZWNsYXNzPXt0aWxlY2xhc3N9XHJcbiAgICAgICAgdGlsZXZhbHVlPXt0aWxldmFsdWV9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMub25DbGljayh0aWxlaW5kZXgpfVxyXG4gICAgICAvPlxyXG4gICAgICA6XHJcbiAgICAgIDxSYWNrVGlsZVxyXG4gICAgICAgIGtleT17dGlsZWNsYXNzICsgU3RyaW5nKHRpbGVpbmRleCl9XHJcbiAgICAgICAgdGlsZWNsYXNzPXt0aWxlY2xhc3N9XHJcbiAgICAgICAgdGlsZXZhbHVlPXt0aWxldmFsdWV9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93LmFsZXJ0KFwiTm8gcGVla2luZyFcIil9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckZpbmlzaFR1cm4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPEZpbmlzaFR1cm5CdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja0ZpbmlzaFR1cm4oKX0gLz47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUmVjYWxsVGlsZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPFRpbGVSZWNhbGxCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1RpbGVSZWNhbGwoKX0gLz47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRXhjaGFuZ2VUaWxlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiA8VGlsZUV4Y2hhbmdlQnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tUaWxlRXhjaGFuZ2UoKX0gLz47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUGFzc1BsYXkgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPFBhc3NQbGF5QnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tQYXNzUGxheSgpfSAvPjtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHA+R1VBUkRTPC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJwYlRpbGVyYWNrXCI+XHJcbiAgICAgICAge3Byb3BzLmd0aWxlcy5tYXAoKHQsIHRpKSA9PlxyXG4gICAgICAgICAgcmVuZGVyVGlsZShcclxuICAgICAgICAgICAgcHJvcHMud2hvc2V0dXJuID09PSBcIkdcIiAmJiBwcm9wcy5zZWxlY3Rpb24gPT09IHRpXHJcbiAgICAgICAgICAgICAgPyBcInBiVGlsZU9uUmFja1NlbGVjdGVkR1wiXHJcbiAgICAgICAgICAgICAgOiBcInBiVGlsZU9uUmFja0dcIixcclxuICAgICAgICAgICAgdGksXHJcbiAgICAgICAgICAgIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiA/IHQgOiBcIipcIlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvcD5cclxuICAgICAge3Byb3BzLndob3NldHVybiA9PT0gXCJHXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiR1wiID8gcmVuZGVyRmluaXNoVHVybigpIDogPD48Lz59XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiR1wiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiA/IHJlbmRlclJlY2FsbFRpbGVzKCkgOiA8PjwvPn1cclxuICAgICAge3Byb3BzLndob3NldHVybiA9PT0gXCJHXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiR1wiID8gcmVuZGVyRXhjaGFuZ2VUaWxlcygpIDogPD48Lz59XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiR1wiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiA/IHJlbmRlclBhc3NQbGF5KCkgOiA8PjwvPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=