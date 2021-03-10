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
        children: ["Prison Break Lobby", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "material-icons",
          children: "run_circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
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
              lineNumber: 148,
              columnNumber: 18
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
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
          lineNumber: 154,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-11 offset-1",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Guards: get the game id from the Prisoners. Enter the game id and click \"Join Game\"."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-11 offset-1",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: ["Game id:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            name: "gameid",
            value: gameid,
            onChange: e => {
              setGameid(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
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
            lineNumber: 173,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 13
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
            lineNumber: 184,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
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
    lineNumber: 199,
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
  const tdclass = props.c !== "." ? usedbyclass : props.rcd[0] === props.ri && props.rcd[1] === props.ci && props.rcd[2] === "r" ? "pbSquareRightArrow" : props.rcd[0] === props.ri && props.rcd[1] === props.ci && props.rcd[2] === "d" ? "pbSquareDownArrow" : props.ri === 7 && props.ci === 7 ? "pbSquareCenterSquare" : (props.ri === 0 || props.ri === 7 || props.ri === 14) && (props.ci === 0 || props.ci === 7 || props.ci === 14) ? "pbSquareEscapeHatch" : props.ri % 2 === props.ci % 2 ? "pbSquare1" : "pbSquare2";
  const tdvalue = props.c !== "." ? props.c : tdclass === "pbSquareRightArrow" ? "➡" : tdclass === "pbSquareDownArrow" ? "⬇" : tdclass === "pbSquareCenterSquare" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
    className: "material-icons",
    children: "stars"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 242,
    columnNumber: 9
  }, undefined) : tdclass === "pbSquareEscapeHatch" ? "ꐕ" //💫
  : props.ri % 2 === props.ci % 2 ? "." //"☹"//"⎔"
  : "."; //"ꐕ";//"✦";

  return tdclass === "pbSquareEscapeHatch" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: tdclass,
    onClick: props.onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "material-icons",
      children: "run_circle"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 250,
    columnNumber: 5
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: tdclass,
    onClick: props.onClick,
    children: tdvalue
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 254,
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
      className: "pbSquare",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Square, {
        c: c,
        ci: ci,
        ri: ri,
        squareusedby: squareusedby,
        rcd: rcd,
        onClick: () => onClick(ri, ci)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 9
      }, undefined)
    }, `Square${ri}-${ci}`, false, {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 7
    }, undefined);
  };

  const renderRow = ri => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
      className: "pbRow",
      children: squares[ri].map((c, ci) => renderSquare(ri, ci, c, usedby[ri][ci]))
    }, `BoardRow${ri}`, false, {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 7
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
    className: "pbBoard",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
      children: squares.map((r, ri) => renderRow(ri))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 284,
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
    0: passed,
    1: setPassed
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); // true when opponent just passed; if both pass the game ends

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
    const interval = setInterval(() => {
      // If it is not my turn && the game has not ended
      if (prisonersOrGuards !== whoseturn && whoseturn !== "X") {
        // I am waiting for opponent move to come through but sometimes it gets missed (no idea why)
        console.log("Interval: prisonersOrGuards=" + prisonersOrGuards + " whoseturn=" + whoseturn + " at " + Date().toLocaleString());
        requestGameData(); // Send a request for game data in case opponent moved and we missed the update
      }
    }, 120000); // this many milliseconds between above code block executions

    return () => clearInterval(interval);
  }, [whoseturn]); // want up to date value of whoseturn to decide whether to ask for an update

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
          passed: passed,
          rescues: rescues
        }));
      }

      if (messageData.func === "providegamedata" && messageData.sender !== prisonersOrGuards && whoseturn !== prisonersOrGuards && whoseturn !== "X") {
        // opponent provided game data and this player is still waiting to see opponent move
        setTiles(messageData.tiles);
        setSquares(messageData.squares);
        setPtiles(messageData.ptiles);
        setGtiles(messageData.gtiles);
        setUsedby(messageData.usedby);
        setWhoseturn(messageData.whoseturn);
        setSelection(messageData.selection);
        setCurrentcoords(messageData.currentcoords);
        setSnapshot(messageData.snapshot);
        setPassed(messageData.passed);
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
          passed: passed,
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
        setPassed(messageData.passed);
        setRescues(messageData.rescues);
      }

      if (messageData.func === "ept") {
        // end prisoners turn
        setWhoseturn(messageData.whoseturn);
        setSelection(-1);
        setRcd(-1, -1, "");
        setCurrentcoords([]);
        setSquares(messageData.squares);
        setUsedby(messageData.usedby);
        setPtiles(messageData.ptiles);
        setTiles(messageData.tiles);
        setPassed(messageData.passed);
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
        setWhoseturn(messageData.whoseturn);
        setSelection(-1);
        setRcd(-1, -1, "");
        setCurrentcoords([]);
        setSquares(messageData.squares);
        setUsedby(messageData.usedby);
        setGtiles(messageData.gtiles);
        setTiles(messageData.tiles);
        setPassed(messageData.passed);
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
    let newWhoseturn = newPtiles.length > 0 ? "G" : "X"; // X = game over

    if (usedby[0][0] !== "" && useby[0][7] !== "" && useby[0][14] !== "" && useby[7][0] !== "" && useby[7][14] !== "" && usedby[14][0] !== "" && useby[14][7] !== "" && useby[14][14] !== "") {
      newWhoseturn = "X"; // No escape hatches left
    }

    setWhoseturn(newWhoseturn);
    setSelection(-1);
    setCurrentcoords([]);
    setPtiles(newPtiles);
    setTiles(newTiles);
    setPassed(false);
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
      whoseturn: newWhoseturn,
      // may have ended the game (whoseturn=X)
      passed: false,
      // did not just pass
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
    let newWhoseturn = newGtiles.length > 0 ? "P" : "X"; // X = game over

    if (usedby[0][0] !== "" && useby[0][7] !== "" && useby[0][14] !== "" && useby[7][0] !== "" && useby[7][14] !== "" && usedby[14][0] !== "" && useby[14][7] !== "" && useby[14][14] !== "") {
      newWhoseturn = "X"; // No escape hatches left
    }

    setWhoseturn(newWhoseturn);
    setSelection(-1);
    setCurrentcoords([]);
    setGtiles(newGtiles);
    setTiles(newTiles);
    setPassed(false);
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
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      passed: false,
      // did not just pass
      whoseturn: newWhoseturn // may have ended the game (whoseturn=X)

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
    setSquares([...snapshot.squares]);
    setUsedby([...snapshot.usedby]);
    setWhoseturn("G");
    setSelection(-1);
    setCurrentcoords([]);
    setPtiles(newPtiles);
    setTiles(newTiles);
    setPassed(false);
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
      whoseturn: "G",
      // swap never ends the game so go to opponent
      squares: snapshot.squares,
      // revert to start of turn squares
      usedby: snapshot.usedby,
      // revert to start of turn used by
      ptiles: newPtiles,
      // we picked new tiles for prisoners rack
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      passed: false,
      // did not just pass
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
    setPassed(false);
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
      whoseturn: "P",
      // swap never ends the game so go to opponent
      squares: snapshot.squares,
      // revert to start of turn squares
      usedby: snapshot.usedby,
      // revert to start of turn used by
      gtiles: newGtiles,
      // we picked new tiles for prisoners rack
      tiles: newTiles,
      // we picked new tiles so tile pool changed
      passed: false // did not just pass

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

    let newWhoseturn = passed ? "X" : "G"; // If both players pass then end the game by using "X"

    setWhoseturn(newWhoseturn);
    setPassed(true);
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
      whoseturn: newWhoseturn,
      // may have ended the game
      passed: true,
      rescues: rescues // no rescues on a pass

    }));
  };

  const guardsPass = () => {
    recallTiles(); // In case they put some tiles on the board before clicking Pass

    let newWhoseturn = passed ? "X" : "P"; // If both players pass then end the game by using "X"

    setWhoseturn(newWhoseturn);
    setPassed(true);
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
      tiles: tiles,
      // tile pool did not change
      whoseturn: newWhoseturn,
      // may have ended the game
      passed: true
    }));
  };

  const requestGameData = () => {
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
        className: "col-1 pbGameid",
        children: ["Game id: ", gameid]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 990,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-10 pbtitle",
        children: ["Prison Break", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "material-icons",
          children: "run_circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 995,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 993,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-1 pbhomelink",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          id: "requestGameData",
          "data-toggle": "tooltip",
          title: "Sync with opponent",
          onClick: function () {
            requestGameData();
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "material-icons",
            children: "sync"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1004,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 998,
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
              lineNumber: 1007,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1007,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1006,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 997,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 989,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col pbPrisoners",
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
          lineNumber: 1013,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1012,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: prisonersOrGuards === whoseturn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {
            squares: squares,
            usedby: usedby,
            rcd: rcd,
            onClick: (ri, ci) => handleBoardSquareClick(ri, ci, -1, null)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1029,
            columnNumber: 15
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {
            squares: squares,
            usedby: usedby,
            rcd: rcd,
            onClick: () => {}
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1036,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1027,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row pbUnderboard",
          children: whoseturn === "X" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Game Over!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1045,
            columnNumber: 34
          }, undefined) : prisonersOrGuards === whoseturn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Two peanuts were walking down a back alley. One was a salted."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1046,
            columnNumber: 15
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["If you do not see your opponents last move then click the\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              id: "requestGameData2",
              "data-toggle": "tooltip",
              title: "Sync with opponent",
              onClick: function () {
                requestGameData();
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "material-icons",
                children: "sync"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1055,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1049,
              columnNumber: 17
            }, undefined), "\xA0button"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1048,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1044,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1026,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col pbGuards",
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
          lineNumber: 1063,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1062,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowUnseenTiles, {
          tiles: tiles,
          othertiles: prisonersOrGuards === "P" ? gtiles : ptiles
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1076,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1075,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1011,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 988,
    columnNumber: 5
  }, undefined);
};

_s2(Game, "YKhEkAAcNR6O8t9QKqPqcNEu6ns=");

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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "pbTilepoolTitle",
      children: "TILES"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1096,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pbTilepoolDivider"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1097,
      columnNumber: 7
    }, undefined), unseenTiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [ti > 0 && t !== unseenTiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pbTilepoolDivider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1101,
        columnNumber: 13
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbTilepoolTile",
        children: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1105,
        columnNumber: 11
      }, undefined)]
    }, `tile${ti}`, true, {
      fileName: _jsxFileName,
      lineNumber: 1099,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1095,
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
    lineNumber: 1114,
    columnNumber: 5
  }, undefined);
};

_c6 = RackTile;

const FinishTurnButton = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "pbActionButton",
    onClick: props.onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "pbActionButtonText",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "check"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1123,
        columnNumber: 44
      }, undefined), "\xA0Finish Turn"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1123,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1122,
    columnNumber: 5
  }, undefined);
};

_c7 = FinishTurnButton;

const TileRecallButton = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "pbActionButton",
    onClick: props.onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "pbActionButtonText",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "undo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1131,
        columnNumber: 44
      }, undefined), "\xA0Recall Tiles"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1131,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1130,
    columnNumber: 5
  }, undefined);
};

_c8 = TileRecallButton;

const TileExchangeButton = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "pbActionButton",
    onClick: props.onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "pbActionButtonText",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "cached"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1139,
        columnNumber: 44
      }, undefined), "\xA0Swap Tiles"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1139,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1138,
    columnNumber: 5
  }, undefined);
};

_c9 = TileExchangeButton;

const PassPlayButton = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "pbActionButton",
    onClick: props.onClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "pbActionButtonText",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "not_interested"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1147,
        columnNumber: 44
      }, undefined), "\xA0Pass Turn"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1147,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1146,
    columnNumber: 5
  }, undefined);
};

_c10 = PassPlayButton;

const Prisoners = props => {
  const renderTile = renderPlayerTile(props);

  const renderFreedPrisoners = count => {
    let dumb = Array(count).fill("nonsense");
    return dumb.map((value, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      "data-toggle": "tooltip",
      title: "I'm free! I'm free!",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/breakfree.png",
        alt: "I'm free! I'm free!",
        width: "100",
        height: "100"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1159,
        columnNumber: 9
      }, undefined)
    }, value + String(index), false, {
      fileName: _jsxFileName,
      lineNumber: 1158,
      columnNumber: 7
    }, undefined));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbPlayerTitle",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "run_circle run_circle run_circle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1171,
        columnNumber: 36
      }, undefined), "\xA0PRISONERS\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "run_circle run_circle run_circle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1171,
        columnNumber: 123
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1171,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilerack",
      children: props.ptiles.map((t, ti) => renderTile(props.whoseturn === "P" && props.selection === ti ? "pbTileOnRackSelectedP" : "pbTileOnRackP", ti, props.prisonersOrGuards === "P" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1172,
      columnNumber: 7
    }, undefined), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? showActionButtons(props) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Rescues made: ", props.rescues, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1189,
        columnNumber: 9
      }, undefined), renderFreedPrisoners(props.rescues)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1187,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1170,
    columnNumber: 5
  }, undefined);
};

_c11 = Prisoners;

const Guards = props => {
  const renderTile = renderPlayerTile(props);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbPlayerTitle",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "security security security"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1201,
        columnNumber: 36
      }, undefined), "\xA0GUARDS\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "security security security"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1201,
        columnNumber: 114
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1201,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilerack",
      children: props.gtiles.map((t, ti) => renderTile(props.whoseturn === "G" && props.selection === ti ? "pbTileOnRackSelectedG" : "pbTileOnRackG", ti, props.prisonersOrGuards === "G" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1202,
      columnNumber: 7
    }, undefined), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? showActionButtons(props) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1200,
    columnNumber: 5
  }, undefined);
};

_c12 = Guards;

function renderPlayerTile(props) {
  return (tileclass, tileindex, tilevalue) => {
    return tilevalue !== "*" ?
    /*#__PURE__*/
    // this tile is for this player, allow click
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
      tileclass: tileclass,
      tilevalue: tilevalue,
      onClick: () => props.onClick(tileindex)
    }, tileclass + String(tileindex), false, {
      fileName: _jsxFileName,
      lineNumber: 1225,
      columnNumber: 9
    }, this) :
    /*#__PURE__*/
    // this tile is for opponent, do not allow click
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
      tileclass: tileclass,
      tilevalue: tilevalue,
      onClick: () => window.alert("No peeking!")
    }, tileclass + String(tileindex), false, {
      fileName: _jsxFileName,
      lineNumber: 1231,
      columnNumber: 9
    }, this);
  };
}

function showActionButtons(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pbActionButtonDiv",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
        onClick: () => props.onClickFinishTurn()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1243,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1242,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
        onClick: () => props.onClickTileRecall()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1246,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1245,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileExchangeButton, {
        onClick: () => props.onClickTileExchange()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1249,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1248,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PassPlayButton, {
        onClick: () => props.onClickPassPlay()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1252,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1251,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1241,
    columnNumber: 10
  }, this);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsyLmpzIl0sIm5hbWVzIjpbImVzY2FwZWhhdGNoZXMiLCJpbml0aWFsdGlsZXMiLCJQcmlzb25CcmVhayIsImlubG9iYnkiLCJzZXRJbmxvYmJ5IiwidXNlU3RhdGUiLCJnYW1laWQiLCJzZXRHYW1laWQiLCJwcmlzb25lcnNPckd1YXJkcyIsInNldFByaXNvbmVyc09yR3VhcmRzIiwid3Ntc2dzIiwic2V0V3Ntc2dzIiwibXNnaWQiLCJzZXRNc2dpZCIsImhvc3QiLCJhY2NlcHRNZXNzYWdlIiwibWVzc2FnZSIsImN1cnIiLCJkYXRhIiwicmVtb3ZlTWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiaSIsImluZGV4T2YiLCJ3Iiwic3BsaWNlIiwiY2xpZW50Iiwic2V0Q2xpZW50IiwiQ3VzdG9tU29ja2V0IiwidXNlRWZmZWN0IiwiY29ubmVjdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsIlNxdWFyZSIsInByb3BzIiwidXNlZGJ5Y2xhc3MiLCJzcXVhcmV1c2VkYnkiLCJ0ZGNsYXNzIiwiYyIsInJjZCIsInJpIiwiY2kiLCJ0ZHZhbHVlIiwib25DbGljayIsIkJvYXJkIiwic3F1YXJlcyIsInVzZWRieSIsInJlbmRlclNxdWFyZSIsInJlbmRlclJvdyIsIm1hcCIsInIiLCJHYW1lIiwidGlsZXMiLCJzZXRUaWxlcyIsInB0aWxlcyIsInNldFB0aWxlcyIsImd0aWxlcyIsInNldEd0aWxlcyIsInNldFNxdWFyZXMiLCJBcnJheSIsImZpbGwiLCJzZXRVc2VkYnkiLCJzZWxlY3Rpb24iLCJzZXRTZWxlY3Rpb24iLCJ3aG9zZXR1cm4iLCJzZXRXaG9zZXR1cm4iLCJjdXJyZW50Y29vcmRzIiwic2V0Q3VycmVudGNvb3JkcyIsInJlc2N1ZXMiLCJzZXRSZXNjdWVzIiwic2V0UmNkIiwicGFzc2VkIiwic2V0UGFzc2VkIiwic25hcHNob3QiLCJzZXRTbmFwc2hvdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwicmVxdWVzdEdhbWVEYXRhIiwiY2xlYXJJbnRlcnZhbCIsInRlbXBQVGlsZXMiLCJ0ZW1wR1RpbGVzIiwidGVtcFRpbGVzIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzb3J0Iiwic2VuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwiZnVuYyIsIm1zZyIsInByb2Nlc3NNZXNzYWdlIiwicGFyc2UiLCJyZXF1ZXN0b3IiLCJzZW5kZXIiLCJoYW5kbGVCb2FyZFNxdWFyZUNsaWNrIiwibmV3U2VsZWN0aW9uIiwibmV3UmNkIiwibmV3U3F1YXJlcyIsIm5ld1VzZWRieSIsIm5ld1B0aWxlcyIsIm5ld0d0aWxlcyIsIm5ld1JvdyIsInNxdWFyZXZhbHVlIiwibmV3Q3VycmVudGNvb3JkcyIsImNvb3JkIiwiU3RyaW5nIiwiY2NpIiwibmV3VXNlZGJ5Um93IiwibmV3RGlyZWN0aW9uIiwiaGFuZGxlUHJpc29uZXJUaWxlQ2xpY2siLCJ0aWxlaW5kZXgiLCJhbGVydCIsImhhbmRsZUd1YXJkVGlsZUNsaWNrIiwiZW5kUHJpc29uZXJzVHVybiIsImlzUGxheVZhbGlkIiwibmV3UmVzY3VlcyIsIm5ld1RpbGVzIiwibmV3V2hvc2V0dXJuIiwidXNlYnkiLCJlbmRHdWFyZHNUdXJuIiwic25hcHNxdWFyZXMiLCJzbmFwdXNlZGJ5Iiwic25hcHB0aWxlcyIsInNuYXBndGlsZXMiLCJzd2FwUHJpc29uZXJzVGlsZXMiLCJ3aW5kb3ciLCJzd2FwR3VhcmRzVGlsZXMiLCJsb3dyb3ciLCJoaWdocm93IiwibG93Y29sIiwiaGlnaGNvbCIsInBsYXl0aHJ1IiwiaG9va21hZGUiLCJyZWNhbGxUaWxlcyIsInByaXNvbmVyUGFzcyIsImd1YXJkc1Bhc3MiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImtleSIsImxldHRlcnRlc3QiLCJtYXRjaCIsImxldHRlciIsInRvVXBwZXJDYXNlIiwicmFjayIsInJvdyIsImNvbCIsImRpciIsIm5ld2MiLCJuZXdyIiwicGFyc2VJbnQiLCJzcGxpdCIsInJldHVybmVkVGlsZSIsInRpIiwiU2hvd1Vuc2VlblRpbGVzIiwidW5zZWVuVGlsZXMiLCJvdGhlcnRpbGVzIiwidCIsIlJhY2tUaWxlIiwidGlsZWNsYXNzIiwidGlsZXZhbHVlIiwiRmluaXNoVHVybkJ1dHRvbiIsIlRpbGVSZWNhbGxCdXR0b24iLCJUaWxlRXhjaGFuZ2VCdXR0b24iLCJQYXNzUGxheUJ1dHRvbiIsIlByaXNvbmVycyIsInJlbmRlclRpbGUiLCJyZW5kZXJQbGF5ZXJUaWxlIiwicmVuZGVyRnJlZWRQcmlzb25lcnMiLCJjb3VudCIsImR1bWIiLCJpbmRleCIsInNob3dBY3Rpb25CdXR0b25zIiwiR3VhcmRzIiwib25DbGlja0ZpbmlzaFR1cm4iLCJvbkNsaWNrVGlsZVJlY2FsbCIsIm9uQ2xpY2tUaWxlRXhjaGFuZ2UiLCJvbkNsaWNrUGFzc1BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsYUFBYSxHQUFHLENBQ3BCLEtBRG9CLEVBRXBCLEtBRm9CLEVBR3BCLE1BSG9CLEVBSXBCLEtBSm9CLEVBS3BCLE1BTG9CLEVBTXBCLE1BTm9CLEVBT3BCLE1BUG9CLEVBUXBCLE9BUm9CLENBQXRCLEMsQ0FTRzs7QUFDSCxNQUFNQyxZQUFZLEdBQUcsQ0FDbkIsR0FEbUIsRUFFbkIsR0FGbUIsRUFHbkIsR0FIbUIsRUFJbkIsR0FKbUIsRUFLbkIsR0FMbUIsRUFNbkIsR0FObUIsRUFPbkIsR0FQbUIsRUFRbkIsR0FSbUIsRUFTbkIsR0FUbUIsRUFVbkIsR0FWbUIsRUFXbkIsR0FYbUIsRUFZbkIsR0FabUIsRUFhbkIsR0FibUIsRUFjbkIsR0FkbUIsRUFlbkIsR0FmbUIsRUFnQm5CLEdBaEJtQixFQWlCbkIsR0FqQm1CLEVBa0JuQixHQWxCbUIsRUFtQm5CLEdBbkJtQixFQW9CbkIs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O0FBQUEsWUFWSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQWNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BiL3ByaXNvbmJyZWFrMi5hZGNlMTcxOGUyZDYxYmQ3YWNiOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQ3VzdG9tU29ja2V0IGZyb20gXCIuLi8uLi93c1wiO1xyXG5jb25zdCBlc2NhcGVoYXRjaGVzID0gW1xyXG4gIFwiMC0wXCIsXHJcbiAgXCIwLTdcIixcclxuICBcIjAtMTRcIixcclxuICBcIjctMFwiLFxyXG4gIFwiNy0xNFwiLFxyXG4gIFwiMTQtMFwiLFxyXG4gIFwiMTQtN1wiLFxyXG4gIFwiMTQtMTRcIixcclxuXTsgLy8gY29vcmRzIG9mIGVzY2FwZSBoYXRjaGVzXHJcbmNvbnN0IGluaXRpYWx0aWxlcyA9IFtcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkJcIixcclxuICBcIkJcIixcclxuICBcIkNcIixcclxuICBcIkNcIixcclxuICBcIkRcIixcclxuICBcIkRcIixcclxuICBcIkRcIixcclxuICBcIkRcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkZcIixcclxuICBcIkZcIixcclxuICBcIkdcIixcclxuICBcIkdcIixcclxuICBcIkdcIixcclxuICBcIkhcIixcclxuICBcIkhcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIkpcIixcclxuICBcIktcIixcclxuICBcIkxcIixcclxuICBcIkxcIixcclxuICBcIkxcIixcclxuICBcIkxcIixcclxuICBcIk1cIixcclxuICBcIk1cIixcclxuICBcIk5cIixcclxuICBcIk5cIixcclxuICBcIk5cIixcclxuICBcIk5cIixcclxuICBcIk5cIixcclxuICBcIk5cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIlBcIixcclxuICBcIlBcIixcclxuICBcIlFcIixcclxuICBcIlJcIixcclxuICBcIlJcIixcclxuICBcIlJcIixcclxuICBcIlJcIixcclxuICBcIlJcIixcclxuICBcIlJcIixcclxuICBcIlNcIixcclxuICBcIlNcIixcclxuICBcIlNcIixcclxuICBcIlNcIixcclxuICBcIlRcIixcclxuICBcIlRcIixcclxuICBcIlRcIixcclxuICBcIlRcIixcclxuICBcIlRcIixcclxuICBcIlRcIixcclxuICBcIlVcIixcclxuICBcIlVcIixcclxuICBcIlVcIixcclxuICBcIlVcIixcclxuICBcIlZcIixcclxuICBcIlZcIixcclxuICBcIldcIixcclxuICBcIldcIixcclxuICBcIlhcIixcclxuICBcIllcIixcclxuICBcIllcIixcclxuICBcIlpcIixcclxuICBcIj9cIixcclxuICBcIj9cIixcclxuXTsgLy8gaW5pdGlhbCB0aWxlIHBvb2xcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaXNvbkJyZWFrKCkge1xyXG4gIGNvbnN0IFtpbmxvYmJ5LCBzZXRJbmxvYmJ5XSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW2dhbWVpZCwgc2V0R2FtZWlkXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtwcmlzb25lcnNPckd1YXJkcywgc2V0UHJpc29uZXJzT3JHdWFyZHNdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3dzbXNncywgc2V0V3Ntc2dzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFttc2dpZCwgc2V0TXNnaWRdID0gdXNlU3RhdGUoMClcclxuICBsZXQgaG9zdCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAnd3NzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tJyA6ICd3czovL2xvY2FsaG9zdDo1MDAwJztcclxuICBjb25zdCBhY2NlcHRNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcclxuICAgIHNldE1zZ2lkKChjdXJyKSA9PiBjdXJyICsgMSlcclxuICAgIHNldFdzbXNncygoY3VycikgPT4gWy4uLmN1cnIsIG1lc3NhZ2UuZGF0YV0pO1xyXG4gIH1cclxuICBjb25zdCByZW1vdmVNZXNzYWdlID0gKG1lc3NhZ2VEYXRhKSA9PiB7XHJcbiAgICBsZXQgaSA9IHdzbXNncy5pbmRleE9mKG1lc3NhZ2VEYXRhKTtcclxuICAgIGxldCB3ID0gWy4uLndzbXNnc107XHJcbiAgICB3LnNwbGljZShpLDEpO1xyXG4gICAgc2V0V3Ntc2dzKHcpO1xyXG4gIH1cclxuICBjb25zdCBbY2xpZW50LCBzZXRDbGllbnRdID0gdXNlU3RhdGUobmV3IEN1c3RvbVNvY2tldChob3N0LCBhY2NlcHRNZXNzYWdlKSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IChcclxuICAgIGNsaWVudC5jb25uZWN0KClcclxuICApLFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgaW5sb2JieSB8fCBwcmlzb25lcnNPckd1YXJkcyA9PT0gJycgP1xyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBwYnRpdGxlXCI+XHJcbiAgICAgICAgICAgIFByaXNvbiBCcmVhayBMb2JieVxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnJ1bl9jaXJjbGU8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTIgcGJob21lbGlua1wiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi4uLy4uL1wifT5cclxuICAgICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTEgb2Zmc2V0LTFcIj5cclxuICAgICAgICAgICAgPGgyPlByaXNvbmVyczogZW50ZXIgYSBnYW1lIGlkIGFuZCBjbGljayBcIlN0YXJ0IEdhbWVcIi4gVGVsbCB0aGUgR3VhcmRzIHRoZSBpZC48L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTExIG9mZnNldC0xXCI+XHJcbiAgICAgICAgICAgIDxoMj5HdWFyZHM6IGdldCB0aGUgZ2FtZSBpZCBmcm9tIHRoZSBQcmlzb25lcnMuIEVudGVyIHRoZSBnYW1lIGlkIGFuZCBjbGljayBcIkpvaW4gR2FtZVwiLjwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTEgb2Zmc2V0LTFcIj5cclxuICAgICAgICAgICAgPGgyPkdhbWUgaWQ6XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImdhbWVpZFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Z2FtZWlkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxhYmVsPiZuYnNwOzwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdGFydGdhbWVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChnYW1laWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzKCdQJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW5sb2JieShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFN0YXJ0IEdhbWVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxsYWJlbD4mbmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiam9pbmdhbWVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChnYW1laWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzKCdHJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW5sb2JieShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEpvaW4gR2FtZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA6XHJcbiAgICA8R2FtZSBwcmlzb25lcnNPckd1YXJkcz17cHJpc29uZXJzT3JHdWFyZHN9XHJcbiAgICAgIGdhbWVpZD17Z2FtZWlkfVxyXG4gICAgICB3c21zZ3M9e3dzbXNnc31cclxuICAgICAgY2xpZW50PXtjbGllbnR9XHJcbiAgICAgIHJlbW92ZU1lc3NhZ2U9e3JlbW92ZU1lc3NhZ2V9XHJcbiAgICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBTcXVhcmUgPSAocHJvcHMpID0+IHtcclxuICAvLyBzcXVhcmV1c2VkYnksIHJpLCBjaSwgYywgb25DbGlja1xyXG4gIC8vIG5lZWQgc3F1YXJldXNlZGJ5IHRvIHBpY2sgY3NzIGNsYXNzTmFtZSBjb3JyZXNwb25kaW5nIHRvIHdobyBwbGF5ZWQgdGhlIHRpbGUgb24gdGhlIHNxdWFyZVxyXG4gIC8vIG5lZWQgcmksIGNpIHRvIGRpc3BsYXkgYWx0ZXJuYXRpbmcgY2hhcmFjdGVycyBvbiB1bnVzZWQgc3F1YXJlc1xyXG4gIC8vIG5lZWQgYyB0byByZXByZXNlbnQgd2hpY2ggdGlsZSBpcyBvbiB0aGUgc3F1YXJlLCBpZiBhbnlcclxuICAvLyBuZWVkIG9uQ2xpY2sgdG8gaGFuZGxlIHNxdWFyZSBjbGljayBhdCBhIGhpZ2hlciBsZXZlbFxyXG4gIC8vIG5lZWQgcmNkIHRvIGRpc3BsYXkgc2VsZWN0ZWQgZGlyZWN0aW9uIGFycm93IHdoZW4gYXBwcm9wcmlhdGVcclxuICBjb25zdCB1c2VkYnljbGFzcyA9XHJcbiAgICBwcm9wcy5zcXVhcmV1c2VkYnkgPT09IFwiUFwiXHJcbiAgICAgID8gXCJwYlNxdWFyZVVzZWRCeVByaXNvbmVyc1wiXHJcbiAgICAgIDogXCJwYlNxdWFyZVVzZWRCeUd1YXJkc1wiO1xyXG4gIGNvbnN0IHRkY2xhc3MgPSBcclxuICAgIHByb3BzLmMgIT09IFwiLlwiXHJcbiAgICAgID8gdXNlZGJ5Y2xhc3NcclxuICAgICAgOiBwcm9wcy5yY2RbMF0gPT09IHByb3BzLnJpICYmIHByb3BzLnJjZFsxXSA9PT0gcHJvcHMuY2kgJiYgcHJvcHMucmNkWzJdID09PSBcInJcIlxyXG4gICAgICA/IFwicGJTcXVhcmVSaWdodEFycm93XCJcclxuICAgICAgOiBwcm9wcy5yY2RbMF0gPT09IHByb3BzLnJpICYmIHByb3BzLnJjZFsxXSA9PT0gcHJvcHMuY2kgJiYgcHJvcHMucmNkWzJdID09PSBcImRcIlxyXG4gICAgICA/IFwicGJTcXVhcmVEb3duQXJyb3dcIlxyXG4gICAgICA6IHByb3BzLnJpID09PSA3ICYmIHByb3BzLmNpID09PSA3XHJcbiAgICAgID8gXCJwYlNxdWFyZUNlbnRlclNxdWFyZVwiXHJcbiAgICAgIDogKHByb3BzLnJpID09PSAwIHx8IHByb3BzLnJpID09PSA3IHx8IHByb3BzLnJpID09PSAxNCkgJiZcclxuICAgICAgICAocHJvcHMuY2kgPT09IDAgfHwgcHJvcHMuY2kgPT09IDcgfHwgcHJvcHMuY2kgPT09IDE0KVxyXG4gICAgICA/IFwicGJTcXVhcmVFc2NhcGVIYXRjaFwiXHJcbiAgICAgIDogcHJvcHMucmkgJSAyID09PSBwcm9wcy5jaSAlIDJcclxuICAgICAgPyBcInBiU3F1YXJlMVwiXHJcbiAgICAgIDogXCJwYlNxdWFyZTJcIjtcclxuICBjb25zdCB0ZHZhbHVlID1cclxuICAgIHByb3BzLmMgIT09IFwiLlwiXHJcbiAgICAgID8gcHJvcHMuY1xyXG4gICAgICA6IHRkY2xhc3MgPT09IFwicGJTcXVhcmVSaWdodEFycm93XCJcclxuICAgICAgPyBcIuKeoVwiXHJcbiAgICAgIDogdGRjbGFzcyA9PT0gXCJwYlNxdWFyZURvd25BcnJvd1wiXHJcbiAgICAgID8gXCLirIdcIlxyXG4gICAgICA6IHRkY2xhc3MgPT09IFwicGJTcXVhcmVDZW50ZXJTcXVhcmVcIlxyXG4gICAgICA/IDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c3RhcnM8L2k+XHJcbiAgICAgIDogdGRjbGFzcyA9PT0gXCJwYlNxdWFyZUVzY2FwZUhhdGNoXCJcclxuICAgICAgPyBcIuqQlVwiIC8v8J+Sq1xyXG4gICAgICA6IHByb3BzLnJpICUgMiA9PT0gcHJvcHMuY2kgJSAyXHJcbiAgICAgID8gXCIuXCIvL1wi4pi5XCIvL1wi4o6UXCJcclxuICAgICAgOiBcIi5cIjsvL1wi6pCVXCI7Ly9cIuKcplwiO1xyXG4gIHJldHVybiAoXHJcbiAgICB0ZGNsYXNzID09PSBcInBiU3F1YXJlRXNjYXBlSGF0Y2hcIiA/XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGRjbGFzc30gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cnVuX2NpcmNsZTwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgOlxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RkY2xhc3N9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICB7dGR2YWx1ZX1cclxuICAgIDwvYnV0dG9uPlxyXG4pO1xyXG59O1xyXG5cclxuY29uc3QgQm9hcmQgPSAoeyBvbkNsaWNrLCBzcXVhcmVzLCB1c2VkYnksIHJjZCB9KSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyU3F1YXJlID0gKHJpLCBjaSwgYywgc3F1YXJldXNlZGJ5KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dGQga2V5PXtgU3F1YXJlJHtyaX0tJHtjaX1gfSBjbGFzc05hbWU9XCJwYlNxdWFyZVwiPlxyXG4gICAgICAgIDxTcXVhcmVcclxuICAgICAgICAgIGM9e2N9XHJcbiAgICAgICAgICBjaT17Y2l9XHJcbiAgICAgICAgICByaT17cml9XHJcbiAgICAgICAgICBzcXVhcmV1c2VkYnk9e3NxdWFyZXVzZWRieX1cclxuICAgICAgICAgIHJjZD17cmNkfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhyaSwgY2kpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyUm93ID0gKHJpKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dHIga2V5PXtgQm9hcmRSb3cke3JpfWB9IGNsYXNzTmFtZT1cInBiUm93XCI+XHJcbiAgICAgICAge3NxdWFyZXNbcmldLm1hcCgoYywgY2kpID0+IHJlbmRlclNxdWFyZShyaSwgY2ksIGMsIHVzZWRieVtyaV1bY2ldKSl9XHJcbiAgICAgIDwvdHI+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dGFibGUgY2xhc3NOYW1lPVwicGJCb2FyZFwiPlxyXG4gICAgICA8dGJvZHk+e3NxdWFyZXMubWFwKChyLCByaSkgPT4gcmVuZGVyUm93KHJpKSl9PC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEdhbWUgPSAoe3ByaXNvbmVyc09yR3VhcmRzLCBnYW1laWQsIHdzbXNncywgY2xpZW50LCByZW1vdmVNZXNzYWdlfSkgPT4ge1xyXG4gIGNvbnN0IFt0aWxlcywgc2V0VGlsZXNdID0gdXNlU3RhdGUoWy4uLmluaXRpYWx0aWxlc10pO1xyXG4gIGNvbnN0IFtwdGlsZXMsIHNldFB0aWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2d0aWxlcywgc2V0R3RpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc3F1YXJlcywgc2V0U3F1YXJlc10gPSB1c2VTdGF0ZShBcnJheSgxNSkuZmlsbChBcnJheSgxNSkuZmlsbChcIi5cIikpKTtcclxuICBjb25zdCBbdXNlZGJ5LCBzZXRVc2VkYnldID0gdXNlU3RhdGUoQXJyYXkoMTUpLmZpbGwoQXJyYXkoMTUpLmZpbGwoXCJcIikpKTtcclxuICBjb25zdCBbc2VsZWN0aW9uLCBzZXRTZWxlY3Rpb25dID0gdXNlU3RhdGUoLTEpOyAvLyByZWxhdGl2ZSB0byByYWNrIG9mIHBsYXllciBtYWtpbmcgYSBwbGF5XHJcbiAgY29uc3QgW3dob3NldHVybiwgc2V0V2hvc2V0dXJuXSA9IHVzZVN0YXRlKFwiUFwiKTsgLy8gZ2FtZSBzdGFydHMgd2l0aCBwcmlzb25lcnMgcGxheVxyXG4gIGNvbnN0IFtjdXJyZW50Y29vcmRzLCBzZXRDdXJyZW50Y29vcmRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcmVzY3Vlcywgc2V0UmVzY3Vlc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcmNkLCBzZXRSY2RdID0gdXNlU3RhdGUoWy0xLC0xLFwiXCJdKTtcclxuICBjb25zdCBbcGFzc2VkLCBzZXRQYXNzZWRdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyB0cnVlIHdoZW4gb3Bwb25lbnQganVzdCBwYXNzZWQ7IGlmIGJvdGggcGFzcyB0aGUgZ2FtZSBlbmRzXHJcbiAgY29uc3QgW3NuYXBzaG90LCBzZXRTbmFwc2hvdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICBzcXVhcmVzOiBbLi4uc3F1YXJlc10sXHJcbiAgICB1c2VkYnk6IFsuLi51c2VkYnldLFxyXG4gICAgcHRpbGVzOiBbLi4ucHRpbGVzXSxcclxuICAgIGd0aWxlczogWy4uLmd0aWxlc10sXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgLy8gSWYgaXQgaXMgbm90IG15IHR1cm4gJiYgdGhlIGdhbWUgaGFzIG5vdCBlbmRlZFxyXG4gICAgICBpZiAocHJpc29uZXJzT3JHdWFyZHMgIT09IHdob3NldHVybiAmJiB3aG9zZXR1cm4gIT09IFwiWFwiKSB7XHJcbiAgICAgICAgLy8gSSBhbSB3YWl0aW5nIGZvciBvcHBvbmVudCBtb3ZlIHRvIGNvbWUgdGhyb3VnaCBidXQgc29tZXRpbWVzIGl0IGdldHMgbWlzc2VkIChubyBpZGVhIHdoeSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkludGVydmFsOiBwcmlzb25lcnNPckd1YXJkcz1cIiArIHByaXNvbmVyc09yR3VhcmRzICsgXCIgd2hvc2V0dXJuPVwiICsgd2hvc2V0dXJuICsgXCIgYXQgXCIgKyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICAgICAgcmVxdWVzdEdhbWVEYXRhKCk7IC8vIFNlbmQgYSByZXF1ZXN0IGZvciBnYW1lIGRhdGEgaW4gY2FzZSBvcHBvbmVudCBtb3ZlZCBhbmQgd2UgbWlzc2VkIHRoZSB1cGRhdGVcclxuICAgICAgfVxyXG4gICAgfSwgMTIwMDAwKTsgLy8gdGhpcyBtYW55IG1pbGxpc2Vjb25kcyBiZXR3ZWVuIGFib3ZlIGNvZGUgYmxvY2sgZXhlY3V0aW9uc1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFt3aG9zZXR1cm5dKTsgLy8gd2FudCB1cCB0byBkYXRlIHZhbHVlIG9mIHdob3NldHVybiB0byBkZWNpZGUgd2hldGhlciB0byBhc2sgZm9yIGFuIHVwZGF0ZVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIikge1xyXG4gICAgICBsZXQgdGVtcFBUaWxlcyA9IFsuLi5wdGlsZXNdO1xyXG4gICAgICBsZXQgdGVtcEdUaWxlcyA9IFsuLi5ndGlsZXNdO1xyXG4gICAgICBsZXQgdGVtcFRpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgICAgd2hpbGUgKHRlbXBQVGlsZXMubGVuZ3RoIDwgNykge1xyXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVtcFRpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgdGVtcFBUaWxlcy5wdXNoKHRlbXBUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgdGVtcFRpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgICByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVtcFRpbGVzLmxlbmd0aCk7XHJcbiAgICAgICAgdGVtcEdUaWxlcy5wdXNoKHRlbXBUaWxlc1tyYW5kXSk7XHJcbiAgICAgICAgdGVtcFRpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgICAgfVxyXG4gICAgICB0ZW1wUFRpbGVzLnNvcnQoKTtcclxuICAgICAgdGVtcEdUaWxlcy5zb3J0KCk7XHJcbiAgICAgIHNldEd0aWxlcyh0ZW1wR1RpbGVzKTtcclxuICAgICAgc2V0UHRpbGVzKHRlbXBQVGlsZXMpO1xyXG4gICAgICBzZXRUaWxlcyh0ZW1wVGlsZXMpO1xyXG4gICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgc3F1YXJlczogWy4uLnNxdWFyZXNdLFxyXG4gICAgICAgIHVzZWRieTogWy4uLnVzZWRieV0sXHJcbiAgICAgICAgcHRpbGVzOiBbLi4udGVtcFBUaWxlc10sXHJcbiAgICAgICAgZ3RpbGVzOiBbLi4udGVtcEdUaWxlc10gICAgXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICAgIGZ1bmM6IFwiZ2dkXCIgLy8gZ2V0IGdhbWUgZGF0YVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgfVxyXG4gICAgICBjYXRjaCB7fVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IG1zZyA9IHdzbXNnc1swXTtcclxuICAgIGlmIChtc2cpIHByb2Nlc3NNZXNzYWdlKG1zZyk7XHJcbiAgICAgICAgXHJcbiAgfSxbd3Ntc2dzXSlcclxuXHJcbiAgZnVuY3Rpb24gcHJvY2Vzc01lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgbGV0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTsgLy8gd2FzIG1lc3NhZ2UuZGF0YVxyXG4gICAgaWYgKG1lc3NhZ2VEYXRhLmdhbWVpZCA9PT0gZ2FtZWlkICYmIG1lc3NhZ2VEYXRhLnR5cGUgPT09IFwicGJcIikgeyAvLyBUaGlzIGluc3RhbmNlIG9mIGEgcHJpc29uIGJyZWFrIGdhbWVcclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwicmVxdWVzdGdhbWVkYXRhXCIgJiYgbWVzc2FnZURhdGEucmVxdWVzdG9yICE9PSBwcmlzb25lcnNPckd1YXJkcykgeyAvLyBPcHBvbmVudCByZXF1ZXN0ZWQgZ2FtZSBpbmZvXHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgICAgZnVuYzogXCJwcm92aWRlZ2FtZWRhdGFcIiwgLy8gcHJvdmlkZSBnYW1lIGRhdGFcclxuICAgICAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcywgLy8gd2hvIHNlbnQgdGhlIGRhdGFcclxuICAgICAgICAgICAgdGlsZXM6IHRpbGVzLFxyXG4gICAgICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLFxyXG4gICAgICAgICAgICBwdGlsZXM6IHB0aWxlcyxcclxuICAgICAgICAgICAgZ3RpbGVzOiBndGlsZXMsXHJcbiAgICAgICAgICAgIHVzZWRieTogdXNlZGJ5LFxyXG4gICAgICAgICAgICB3aG9zZXR1cm46IHdob3NldHVybixcclxuICAgICAgICAgICAgc2VsZWN0aW9uOiBzZWxlY3Rpb24sXHJcbiAgICAgICAgICAgIGN1cnJlbnRjb29yZHM6IGN1cnJlbnRjb29yZHMsXHJcbiAgICAgICAgICAgIHNuYXBzaG90OiBzbmFwc2hvdCxcclxuICAgICAgICAgICAgcGFzc2VkOiBwYXNzZWQsXHJcbiAgICAgICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXNcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJwcm92aWRlZ2FtZWRhdGFcIiAmJiBtZXNzYWdlRGF0YS5zZW5kZXIgIT09IHByaXNvbmVyc09yR3VhcmRzICYmIHdob3NldHVybiAhPT0gcHJpc29uZXJzT3JHdWFyZHMgJiYgd2hvc2V0dXJuICE9PSBcIlhcIikgeyBcclxuICAgICAgICAvLyBvcHBvbmVudCBwcm92aWRlZCBnYW1lIGRhdGEgYW5kIHRoaXMgcGxheWVyIGlzIHN0aWxsIHdhaXRpbmcgdG8gc2VlIG9wcG9uZW50IG1vdmVcclxuICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgc2V0U3F1YXJlcyhtZXNzYWdlRGF0YS5zcXVhcmVzKTtcclxuICAgICAgICBzZXRQdGlsZXMobWVzc2FnZURhdGEucHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobWVzc2FnZURhdGEuZ3RpbGVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobWVzc2FnZURhdGEudXNlZGJ5KTtcclxuICAgICAgICBzZXRXaG9zZXR1cm4obWVzc2FnZURhdGEud2hvc2V0dXJuKTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24obWVzc2FnZURhdGEuc2VsZWN0aW9uKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKG1lc3NhZ2VEYXRhLmN1cnJlbnRjb29yZHMpO1xyXG4gICAgICAgIHNldFNuYXBzaG90KG1lc3NhZ2VEYXRhLnNuYXBzaG90KTtcclxuICAgICAgICBzZXRQYXNzZWQobWVzc2FnZURhdGEucGFzc2VkKTtcclxuICAgICAgICBzZXRSZXNjdWVzKG1lc3NhZ2VEYXRhLnJlc2N1ZXMpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHdoZW4gZ3VhcmRzIGpvaW4gZ2FtZSB0aGV5IHNlbmQgZ2dkLCBhbmQgcHJpc29uZXIgcGlja3MgaXQgdXAgYW5kIHNlbmRzIHNnZCwgdGhlbiBndWFyZHMgcGljayB0aGF0IHVwIGFuZCB0YWtlIHRoZSBkYXRhXHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImdnZFwiICYmIHByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIikgeyAvLyBnZXQgZ2FtZSBkYXRhIChzZW50IGJ5IGd1YXJkcywgcHJpc29uZXJzIHJlc3BvbmQgaGVyZSlcclxuICAgICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgICBmdW5jOiBcInNnZFwiLCAvLyBzZW5kIGdhbWUgZGF0YVxyXG4gICAgICAgICAgICB0aWxlczogdGlsZXMsXHJcbiAgICAgICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsXHJcbiAgICAgICAgICAgIHB0aWxlczogcHRpbGVzLFxyXG4gICAgICAgICAgICBndGlsZXM6IGd0aWxlcyxcclxuICAgICAgICAgICAgdXNlZGJ5OiB1c2VkYnksXHJcbiAgICAgICAgICAgIHdob3NldHVybjogd2hvc2V0dXJuLFxyXG4gICAgICAgICAgICBzZWxlY3Rpb246IHNlbGVjdGlvbixcclxuICAgICAgICAgICAgY3VycmVudGNvb3JkczogY3VycmVudGNvb3JkcyxcclxuICAgICAgICAgICAgc25hcHNob3Q6IHNuYXBzaG90LFxyXG4gICAgICAgICAgICBwYXNzZWQ6IHBhc3NlZCxcclxuICAgICAgICAgICAgcmVzY3VlczogcmVzY3VlcyAvLyBtYXkgaGF2ZSByZXNjdWVkIGFub3RoZXIgcHJpc29uZXJcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJzZ2RcIiAmJiBwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJHXCIpIHsgLy8gc2VuZCBnYW1lIGRhdGEgKHByaXNvbmVycyBzZW50IGl0LCBndWFyZHMgbm93IGdldCBpdClcclxuICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgc2V0U3F1YXJlcyhtZXNzYWdlRGF0YS5zcXVhcmVzKTtcclxuICAgICAgICBzZXRQdGlsZXMobWVzc2FnZURhdGEucHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobWVzc2FnZURhdGEuZ3RpbGVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobWVzc2FnZURhdGEudXNlZGJ5KTtcclxuICAgICAgICBzZXRXaG9zZXR1cm4obWVzc2FnZURhdGEud2hvc2V0dXJuKTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24obWVzc2FnZURhdGEuc2VsZWN0aW9uKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKG1lc3NhZ2VEYXRhLmN1cnJlbnRjb29yZHMpO1xyXG4gICAgICAgIHNldFNuYXBzaG90KG1lc3NhZ2VEYXRhLnNuYXBzaG90KTtcclxuICAgICAgICBzZXRQYXNzZWQobWVzc2FnZURhdGEucGFzc2VkKTtcclxuICAgICAgICBzZXRSZXNjdWVzKG1lc3NhZ2VEYXRhLnJlc2N1ZXMpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImVwdFwiKSB7IC8vIGVuZCBwcmlzb25lcnMgdHVyblxyXG4gICAgICAgIHNldFdob3NldHVybihtZXNzYWdlRGF0YS53aG9zZXR1cm4pO1xyXG4gICAgICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICAgICAgc2V0UmNkKC0xLC0xLFwiXCIpO1xyXG4gICAgICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgICAgIHNldFNxdWFyZXMobWVzc2FnZURhdGEuc3F1YXJlcyk7XHJcbiAgICAgICAgc2V0VXNlZGJ5KG1lc3NhZ2VEYXRhLnVzZWRieSk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG1lc3NhZ2VEYXRhLnB0aWxlcyk7XHJcbiAgICAgICAgc2V0VGlsZXMobWVzc2FnZURhdGEudGlsZXMpO1xyXG4gICAgICAgIHNldFBhc3NlZChtZXNzYWdlRGF0YS5wYXNzZWQpO1xyXG4gICAgICAgIHNldFJlc2N1ZXMobWVzc2FnZURhdGEucmVzY3Vlcyk7XHJcbiAgICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgICAgc3F1YXJlczogWy4uLm1lc3NhZ2VEYXRhLnNxdWFyZXNdLFxyXG4gICAgICAgICAgdXNlZGJ5OiBbLi4ubWVzc2FnZURhdGEudXNlZGJ5XSxcclxuICAgICAgICAgIHB0aWxlczogWy4uLm1lc3NhZ2VEYXRhLnB0aWxlc10sXHJcbiAgICAgICAgICBndGlsZXM6IFsuLi5ndGlsZXNdLFxyXG4gICAgICAgIH0pOyAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJlZ3RcIikgeyAvLyBlbmQgZ3VhcmRzIHR1cm5cclxuICAgICAgICBzZXRXaG9zZXR1cm4obWVzc2FnZURhdGEud2hvc2V0dXJuKTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgICAgIHNldFJjZCgtMSwtMSxcIlwiKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgICAgICBzZXRTcXVhcmVzKG1lc3NhZ2VEYXRhLnNxdWFyZXMpO1xyXG4gICAgICAgIHNldFVzZWRieShtZXNzYWdlRGF0YS51c2VkYnkpO1xyXG4gICAgICAgIHNldEd0aWxlcyhtZXNzYWdlRGF0YS5ndGlsZXMpO1xyXG4gICAgICAgIHNldFRpbGVzKG1lc3NhZ2VEYXRhLnRpbGVzKTtcclxuICAgICAgICBzZXRQYXNzZWQobWVzc2FnZURhdGEucGFzc2VkKTtcclxuICAgICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgICBzcXVhcmVzOiBbLi4ubWVzc2FnZURhdGEuc3F1YXJlc10sXHJcbiAgICAgICAgICB1c2VkYnk6IFsuLi5tZXNzYWdlRGF0YS51c2VkYnldLFxyXG4gICAgICAgICAgcHRpbGVzOiBbLi4ucHRpbGVzXSxcclxuICAgICAgICAgIGd0aWxlczogWy4uLm1lc3NhZ2VEYXRhLmd0aWxlc10sXHJcbiAgICAgICAgfSk7ICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVNZXNzYWdlKG1lc3NhZ2UpO1xyXG4gIH1cclxuICBcclxuICAvLyBDYWxsaW5nIHNldFNlbGVjdGlvbiAoZnJvbSBoYW5kbGVLZXlEb3duKSB0aGVuIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2sgZG9lcyBub3QgbGV0IGl0IHJlY29nbml6ZSBzZWxlY3Rpb24gd2l0aCB0aGUgbmV3IHZhbHVlXHJcbiAgLy8gU28gSSBwYXNzIG5ld1NlbGVjdGlvbiB3aGVuIEkgd2FudCB0byBhbHNvIHNldCBpdCwgb3RoZXJ3aXNlIEkgcGFzcyAtMSB0byBpbnN0cnVjdCBpdCB0byB1c2UgY3VycmVudCB2YWx1ZSBvZiBzZWxlY3Rpb25cclxuICAvLyBBbHNvIHBhc3NpbmcgbmV3UmNkXHJcbiAgY29uc3QgaGFuZGxlQm9hcmRTcXVhcmVDbGljayA9IChyaSwgY2ksIG5ld1NlbGVjdGlvbiwgbmV3UmNkKSA9PiB7XHJcbiAgICBsZXQgbmV3U3F1YXJlcyA9IFsuLi5zcXVhcmVzXTtcclxuICAgIGxldCBuZXdVc2VkYnkgPSBbLi4udXNlZGJ5XTtcclxuICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgIGxldCBuZXdSb3cgPSBbLi4uc3F1YXJlc1tyaV1dO1xyXG4gICAgbGV0IHNxdWFyZXZhbHVlID0gc3F1YXJlc1tyaV1bY2ldO1xyXG4gICAgbGV0IG5ld0N1cnJlbnRjb29yZHMgPSBbLi4uY3VycmVudGNvb3Jkc107XHJcbiAgICBsZXQgY29vcmQgPSBTdHJpbmcocmkpICsgXCItXCIgKyBTdHJpbmcoY2kpO1xyXG4gICAgbGV0IGNjaSA9IGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZCk7XHJcbiAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMSkge1xyXG4gICAgICBuZXdTZWxlY3Rpb24gPSBzZWxlY3Rpb247XHJcbiAgICAgIG5ld1JjZCA9IHJjZDtcclxuICAgIH1cclxuICAgIGlmIChuZXdTZWxlY3Rpb24gPiAtMSAmJiBzcXVhcmV2YWx1ZSA9PT0gXCIuXCIpIHsgLy8gdGlsZSBpcyBzZWxlY3RlZCBmcm9tIHJhY2sgYW5kIGNsaWNrZWQgc3F1YXJlIGlzIG5vdCB1c2VkIHlldFxyXG4gICAgICBuZXdSb3dbY2ldID1cclxuICAgICAgICB3aG9zZXR1cm4gPT09IFwiUFwiID8gbmV3UHRpbGVzW25ld1NlbGVjdGlvbl0gOiBuZXdHdGlsZXNbbmV3U2VsZWN0aW9uXTtcclxuICAgICAgbmV3U3F1YXJlc1tyaV0gPSBbLi4ubmV3Um93XTtcclxuICAgICAgd2hvc2V0dXJuID09PSBcIlBcIlxyXG4gICAgICAgID8gbmV3UHRpbGVzLnNwbGljZShuZXdTZWxlY3Rpb24sIDEpXHJcbiAgICAgICAgOiBuZXdHdGlsZXMuc3BsaWNlKG5ld1NlbGVjdGlvbiwgMSk7XHJcbiAgICAgIGxldCBuZXdVc2VkYnlSb3cgPSBbLi4ubmV3VXNlZGJ5W3JpXV07XHJcbiAgICAgIG5ld1VzZWRieVJvd1tjaV0gPSB3aG9zZXR1cm47XHJcbiAgICAgIG5ld1VzZWRieVtyaV0gPSBbLi4ubmV3VXNlZGJ5Um93XTtcclxuICAgICAgaWYgKHdob3NldHVybiA9PT0gXCJQXCIgJiYgbmV3U2VsZWN0aW9uID09PSBuZXdQdGlsZXMubGVuZ3RoKSB7IFxyXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbiAtIDFcclxuICAgICAgfVxyXG4gICAgICBpZiAod2hvc2V0dXJuID09PSBcIkdcIiAmJiBuZXdTZWxlY3Rpb24gPT09IG5ld0d0aWxlcy5sZW5ndGgpIHsgXHJcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gbmV3U2VsZWN0aW9uIC0gMVxyXG4gICAgICB9XHJcbiAgICAgIHNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24pO1xyXG4gICAgICBzZXRTcXVhcmVzKG5ld1NxdWFyZXMpO1xyXG4gICAgICBzZXRVc2VkYnkobmV3VXNlZGJ5KTtcclxuICAgICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICBzZXRDdXJyZW50Y29vcmRzKFsuLi5jdXJyZW50Y29vcmRzLCBjb29yZF0pO1xyXG4gICAgICBzZXRSY2QobmV3UmNkKTsgLy8ga2V5IGRvd24gaGFuZGxlciBmaWd1cmVkIGl0IG91dFxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoY2NpID4gLTEpIHsgLy8gY2xpY2tlZCBzcXVhcmUgaGFzIGEgdGlsZSBvbiBpdCBmcm9tIHRoZSBjdXJyZW50IG1vdmUgaW4gcHJvZ3Jlc3NcclxuICAgICAgd2hvc2V0dXJuID09PSBcIlBcIlxyXG4gICAgICAgID8gbmV3UHRpbGVzLnB1c2goc3F1YXJldmFsdWUpXHJcbiAgICAgICAgOiBuZXdHdGlsZXMucHVzaChzcXVhcmV2YWx1ZSk7XHJcbiAgICAgIGxldCBuZXdSb3cgPSBbLi4ubmV3U3F1YXJlc1tyaV1dO1xyXG4gICAgICBuZXdSb3dbY2ldID0gXCIuXCI7XHJcbiAgICAgIG5ld1NxdWFyZXNbcmldID0gWy4uLm5ld1Jvd107XHJcbiAgICAgIGxldCBuZXdVc2VkYnlSb3cgPSBbLi4ubmV3VXNlZGJ5W3JpXV07XHJcbiAgICAgIG5ld1VzZWRieVJvd1tjaV0gPSBcIlwiO1xyXG4gICAgICBuZXdVc2VkYnlbcmldID0gWy4uLm5ld1VzZWRieVJvd107XHJcbiAgICAgIHNldFNlbGVjdGlvbihcclxuICAgICAgICB3aG9zZXR1cm4gPT09IFwiUFwiID8gbmV3UHRpbGVzLmxlbmd0aCAtIDEgOiBuZXdHdGlsZXMubGVuZ3RoIC0gMVxyXG4gICAgICApO1xyXG4gICAgICBuZXdDdXJyZW50Y29vcmRzLnNwbGljZShjY2ksIDEpO1xyXG5cclxuICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKTtcclxuICAgICAgc2V0VXNlZGJ5KG5ld1VzZWRieSk7XHJcbiAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgc2V0Q3VycmVudGNvb3JkcyhuZXdDdXJyZW50Y29vcmRzKTtcclxuICAgICAgc2V0UmNkKC0xLC0xLFwiXCIpOyAvLyBtYWtlIHBsYXlyZSBjbGljayBhZ2FpbiB0byBzZXQgZGlyZWN0aW9uXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIFRoZXkgZGlkbid0IGNsaWNrIGEgc3F1YXJlIHRvIHBsYWNlIGEgc2VsZWN0ZWQgdGlsZSB0aGVyZVxyXG4gICAgLy8gVGhleSBkaWRuJ3QgY2xpY2sgYSBzcXVhcmUgdG8gcmVtb3ZlIGFuIGV4aXN0aW5nIHRpbGVcclxuICAgIGlmIChzcXVhcmVzW3JpXVtjaV0gPT09IFwiLlwiKSB7XHJcbiAgICAgIC8vIFRoZXJlIGlzIG5vdGhpbmcgb24gdGhlIHNxdWFyZSBzbyB0aGV5IGFyZSBwaWNraW5nIHdoZXJlIHRvIHBsYWNlIHRoZSBuZXh0IHRpbGUgdmlhIGtleWJvYXJkXHJcbiAgICAgIGxldCBuZXdEaXJlY3Rpb24gPSByY2RbMF0gIT09IHJpIHx8IHJjZFsxXSAhPT0gY2kgPyBcInJcIiA6IC8vY2xpY2sgbmV3IHNxdWFyZSwgc3RhcnQgd2l0aCBcInJcIlxyXG4gICAgICAgcmNkWzJdID09PSBcInJcIiA/IFwiZFwiIDogLy9jbGljayBzYW1lIHNxdWFyZSB0aGF0IHdhcyBcInJcIiwgY2hhbmdlIHRvIFwiZFwiXHJcbiAgICAgICByY2RbMl0gPT09IFwiZFwiID8gXCJcIiA6IC8vY2xpY2sgc2FtZSBzcXVhcmUgdGhhdCB3YXMgXCJkXCIsIGNoYW5nZSB0byBcIlwiXHJcbiAgICAgICBcInJcIjsgLy8gY2xpY2sgc2FtZSBzcXVhcmUgdGhhdCB3YXMgXCJcIiwgY2hhbmdlIHRvIFwiclwiXHJcbiAgICAgIG5ld1JjZCA9IFtyaSxjaSxuZXdEaXJlY3Rpb25dO1xyXG4gICAgICBzZXRSY2QobmV3UmNkKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByaXNvbmVyVGlsZUNsaWNrID0gKHRpbGVpbmRleCkgPT4ge1xyXG4gICAgLy8gdGhlIGluZGV4IG9mIHB0aWxlc1xyXG4gICAgaWYgKHdob3NldHVybiA9PT0gXCJQXCIpIHtcclxuICAgICAgc2V0U2VsZWN0aW9uKHRpbGVpbmRleCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIkl0IGlzIG5vdCB5b3VyIHR1cm5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlR3VhcmRUaWxlQ2xpY2sgPSAodGlsZWluZGV4KSA9PiB7XHJcbiAgICAvLyB0aGUgaW5kZXggb2YgZ3RpbGVzXHJcbiAgICBpZiAod2hvc2V0dXJuID09PSBcIkdcIikge1xyXG4gICAgICBzZXRTZWxlY3Rpb24odGlsZWluZGV4KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwiSXQgaXMgbm90IHlvdXIgdHVyblwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBlbmRQcmlzb25lcnNUdXJuID0gKCkgPT4ge1xyXG4gICAgaWYgKCFpc1BsYXlWYWxpZCgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBuZXdSZXNjdWVzID0gcmVzY3VlcztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudGNvb3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoZXNjYXBlaGF0Y2hlcy5pbmRleE9mKGN1cnJlbnRjb29yZHNbaV0pID4gLTEpIHtcclxuICAgICAgICBuZXdSZXNjdWVzID0gbmV3UmVzY3VlcyArIDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBuZXdQdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICB3aGlsZSAobmV3UHRpbGVzLmxlbmd0aCA8IDcgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgIG5ld1B0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgfVxyXG4gICAgbmV3UHRpbGVzLnNvcnQoKTtcclxuICAgIGxldCBuZXdXaG9zZXR1cm4gPSBuZXdQdGlsZXMubGVuZ3RoID4gMCA/IFwiR1wiIDogXCJYXCI7IC8vIFggPSBnYW1lIG92ZXJcclxuICAgIGlmICh1c2VkYnlbMF1bMF0gIT09IFwiXCIgJiYgdXNlYnlbMF1bN10gIT09IFwiXCIgJiYgdXNlYnlbMF1bMTRdICE9PSBcIlwiICYmIHVzZWJ5WzddWzBdICE9PSBcIlwiICYmIHVzZWJ5WzddWzE0XSAhPT0gXCJcIiAmJiB1c2VkYnlbMTRdWzBdICE9PSBcIlwiICYmIHVzZWJ5WzE0XVs3XSAhPT0gXCJcIiAmJiB1c2VieVsxNF1bMTRdICE9PSBcIlwiKSB7XHJcbiAgICAgIG5ld1dob3NldHVybiA9IFwiWFwiOyAvLyBObyBlc2NhcGUgaGF0Y2hlcyBsZWZ0XHJcbiAgICB9XHJcbiAgICBzZXRXaG9zZXR1cm4obmV3V2hvc2V0dXJuKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0UGFzc2VkKGZhbHNlKTtcclxuICAgIHNldFJlc2N1ZXMobmV3UmVzY3Vlcyk7XHJcbiAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgIHNxdWFyZXM6IFsuLi5zcXVhcmVzXSxcclxuICAgICAgdXNlZGJ5OiBbLi4udXNlZGJ5XSxcclxuICAgICAgcHRpbGVzOiBbLi4ubmV3UHRpbGVzXSxcclxuICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlcHRcIiwgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgc3F1YXJlczogc3F1YXJlcywgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICB1c2VkYnk6IHVzZWRieSwgLy8gdGhpcyB3YXMgYmVpbmcgY2hhbmdlZCBhcyB0aGUgdGlsZXMgd2VyZSBiZWluZyBwbGF5ZWRcclxuICAgICAgICBwdGlsZXM6IG5ld1B0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgcHJpc29uZXJzIHJhY2tcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICB3aG9zZXR1cm46IG5ld1dob3NldHVybiwgLy8gbWF5IGhhdmUgZW5kZWQgdGhlIGdhbWUgKHdob3NldHVybj1YKVxyXG4gICAgICAgIHBhc3NlZDogZmFsc2UsIC8vIGRpZCBub3QganVzdCBwYXNzXHJcbiAgICAgICAgcmVzY3VlczogbmV3UmVzY3VlcyAvLyBtYXkgaGF2ZSByZXNjdWVkIGFub3RoZXIgcHJpc29uZXJcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZW5kR3VhcmRzVHVybiA9ICgpID0+IHtcclxuICAgIGlmICghaXNQbGF5VmFsaWQoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3R3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgd2hpbGUgKG5ld0d0aWxlcy5sZW5ndGggPCA3ICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICBuZXdHdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgIH1cclxuICAgIG5ld0d0aWxlcy5zb3J0KCk7XHJcbiAgICBsZXQgc25hcHNxdWFyZXMgPSBbLi4uc3F1YXJlc107XHJcbiAgICBsZXQgc25hcHVzZWRieSA9IFsuLi51c2VkYnldO1xyXG4gICAgbGV0IHNuYXBwdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgIGxldCBzbmFwZ3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICBsZXQgbmV3V2hvc2V0dXJuID0gbmV3R3RpbGVzLmxlbmd0aCA+IDAgPyBcIlBcIiA6IFwiWFwiOyAvLyBYID0gZ2FtZSBvdmVyXHJcbiAgICBpZiAodXNlZGJ5WzBdWzBdICE9PSBcIlwiICYmIHVzZWJ5WzBdWzddICE9PSBcIlwiICYmIHVzZWJ5WzBdWzE0XSAhPT0gXCJcIiAmJiB1c2VieVs3XVswXSAhPT0gXCJcIiAmJiB1c2VieVs3XVsxNF0gIT09IFwiXCIgJiYgdXNlZGJ5WzE0XVswXSAhPT0gXCJcIiAmJiB1c2VieVsxNF1bN10gIT09IFwiXCIgJiYgdXNlYnlbMTRdWzE0XSAhPT0gXCJcIikge1xyXG4gICAgICBuZXdXaG9zZXR1cm4gPSBcIlhcIjsgLy8gTm8gZXNjYXBlIGhhdGNoZXMgbGVmdFxyXG4gICAgfVxyXG4gICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgIHNldFBhc3NlZChmYWxzZSk7XHJcbiAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgIHNxdWFyZXM6IHNuYXBzcXVhcmVzLFxyXG4gICAgICB1c2VkYnk6IHNuYXB1c2VkYnksXHJcbiAgICAgIHB0aWxlczogc25hcHB0aWxlcyxcclxuICAgICAgZ3RpbGVzOiBzbmFwZ3RpbGVzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVndFwiLCAvLyBlbmQgZ3VhcmRzIHR1cm5cclxuICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLCAvLyB0aGlzIHdhcyBiZWluZyBjaGFuZ2VkIGFzIHRoZSB0aWxlcyB3ZXJlIGJlaW5nIHBsYXllZFxyXG4gICAgICAgIHVzZWRieTogdXNlZGJ5LCAvLyB0aGlzIHdhcyBiZWluZyBjaGFuZ2VkIGFzIHRoZSB0aWxlcyB3ZXJlIGJlaW5nIHBsYXllZFxyXG4gICAgICAgIGd0aWxlczogbmV3R3RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBndWFyZHMgcmFja1xyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgIHBhc3NlZDogZmFsc2UsIC8vIGRpZCBub3QganVzdCBwYXNzXHJcbiAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4gLy8gbWF5IGhhdmUgZW5kZWQgdGhlIGdhbWUgKHdob3NldHVybj1YKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICBjb25zdCBzd2FwUHJpc29uZXJzVGlsZXMgPSAoKSA9PiB7XHJcbiAgICBpZiAodGlsZXMubGVuZ3RoIDwgNykge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJOZWVkIDcgaW4gdGhlIGJhZyB0byBleGNoYW5nZVwiKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3UHRpbGVzID0gW107XHJcbiAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgd2hpbGUgKG5ld1B0aWxlcy5sZW5ndGggPCA3ICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICBuZXdQdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgIH1cclxuICAgIG5ld1B0aWxlcy5zb3J0KCk7XHJcbiAgICBuZXdUaWxlcyA9IFsuLi5uZXdUaWxlcywgLi4uc25hcHNob3QucHRpbGVzXTtcclxuICAgIG5ld1RpbGVzLnNvcnQoKTtcclxuICAgIHNldFNxdWFyZXMoWy4uLnNuYXBzaG90LnNxdWFyZXNdKTtcclxuICAgIHNldFVzZWRieShbLi4uc25hcHNob3QudXNlZGJ5XSk7XHJcbiAgICBzZXRXaG9zZXR1cm4oXCJHXCIpO1xyXG4gICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICBzZXRQYXNzZWQoZmFsc2UpO1xyXG4gICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICBzcXVhcmVzOiBbLi4uc25hcHNob3Quc3F1YXJlc10sXHJcbiAgICAgIHVzZWRieTogWy4uLnNuYXBzaG90LnVzZWRieV0sXHJcbiAgICAgIHB0aWxlczogWy4uLm5ld1B0aWxlc10sXHJcbiAgICAgIGd0aWxlczogWy4uLmd0aWxlc10sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZXB0XCIsIC8vIGVuZCBwcmlzb25lcnMgdHVyblxyXG4gICAgICAgIHdob3NldHVybjogXCJHXCIsIC8vIHN3YXAgbmV2ZXIgZW5kcyB0aGUgZ2FtZSBzbyBnbyB0byBvcHBvbmVudFxyXG4gICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICB1c2VkYnk6IHNuYXBzaG90LnVzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgIHB0aWxlczogbmV3UHRpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgIHBhc3NlZDogZmFsc2UsIC8vIGRpZCBub3QganVzdCBwYXNzXHJcbiAgICAgICAgcmVzY3VlczogcmVzY3VlcyAvLyBubyByZXNjdWVzIG9uIGFuIGV4Y2hhbmdlXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgY29uc3Qgc3dhcEd1YXJkc1RpbGVzID0gKCkgPT4ge1xyXG4gICAgaWYgKHRpbGVzLmxlbmd0aCA8IDcpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiTmVlZCA3IGluIHRoZSBiYWcgdG8gZXhjaGFuZ2VcIilcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IG5ld0d0aWxlcyA9IFtdO1xyXG4gICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXTtcclxuICAgIHdoaWxlIChuZXdHdGlsZXMubGVuZ3RoIDwgNyAmJiBuZXdUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3VGlsZXMubGVuZ3RoKTtcclxuICAgICAgbmV3R3RpbGVzLnB1c2gobmV3VGlsZXNbcmFuZF0pO1xyXG4gICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwgMSk7XHJcbiAgICB9XHJcbiAgICBuZXdHdGlsZXMuc29ydCgpO1xyXG4gICAgbmV3VGlsZXMgPSBbLi4ubmV3VGlsZXMsIC4uLnNuYXBzaG90Lmd0aWxlc107XHJcbiAgICBuZXdUaWxlcy5zb3J0KCk7XHJcbiAgICBzZXRTcXVhcmVzKFsuLi5zbmFwc2hvdC5zcXVhcmVzXSk7XHJcbiAgICBzZXRVc2VkYnkoWy4uLnNuYXBzaG90LnVzZWRieV0pO1xyXG4gICAgc2V0V2hvc2V0dXJuKFwiUFwiKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0UGFzc2VkKGZhbHNlKTtcclxuICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgc3F1YXJlczogWy4uLnNuYXBzaG90LnNxdWFyZXNdLFxyXG4gICAgICB1c2VkYnk6IFsuLi5zbmFwc2hvdC51c2VkYnldLFxyXG4gICAgICBwdGlsZXM6IFsuLi5wdGlsZXNdLFxyXG4gICAgICBndGlsZXM6IFsuLi5uZXdHdGlsZXNdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVndFwiLCAvLyBlbmQgZ3VhcmRzIHR1cm5cclxuICAgICAgICB3aG9zZXR1cm46IFwiUFwiLCAvLyBzd2FwIG5ldmVyIGVuZHMgdGhlIGdhbWUgc28gZ28gdG8gb3Bwb25lbnRcclxuICAgICAgICBzcXVhcmVzOiBzbmFwc2hvdC5zcXVhcmVzLCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiBzcXVhcmVzXHJcbiAgICAgICAgdXNlZGJ5OiBzbmFwc2hvdC51c2VkYnksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHVzZWQgYnlcclxuICAgICAgICBndGlsZXM6IG5ld0d0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgcHJpc29uZXJzIHJhY2tcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgc28gdGlsZSBwb29sIGNoYW5nZWRcclxuICAgICAgICBwYXNzZWQ6IGZhbHNlIC8vIGRpZCBub3QganVzdCBwYXNzXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzUGxheVZhbGlkKCkge1xyXG4gICAgaWYgKHNxdWFyZXNbN11bN10gPT09IFwiLlwiKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIkZpcnN0IHBsYXkgbXVzdCBoaXQgY2VudGVyIHNxdWFyZVwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IGxvd3JvdyA9IDE1O1xyXG4gICAgbGV0IGhpZ2hyb3cgPSAtMTtcclxuICAgIGxldCBsb3djb2wgPSAxNTtcclxuICAgIGxldCBoaWdoY29sID0gLTE7XHJcbiAgICBmb3IgKHZhciByPTA7IHIgPCAxNTsgKytyKSB7XHJcbiAgICAgIGZvciAodmFyIGM9MDsgYyA8IDE1OyArK2MpIHtcclxuICAgICAgICBpZiAoc3F1YXJlc1tyXVtjXSAhPT0gXCIuXCIpIHtcclxuICAgICAgICAgIGlmICghKHIgPiAwICYmIHNxdWFyZXNbci0xXVtjXSAhPT0gXCIuXCIpICYmXHJcbiAgICAgICAgICAgIShjID4gMCAmJiBzcXVhcmVzW3JdW2MtMV0gIT09IFwiLlwiKSAmJlxyXG4gICAgICAgICAgICEociA8IDE0ICYmIHNxdWFyZXNbcisxXVtjXSAhPT0gXCIuXCIpICYmXHJcbiAgICAgICAgICAgIShjIDwgMTQgJiYgc3F1YXJlc1tyXVtjKzFdICE9PSBcIi5cIilcclxuICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiRWFjaCBwbGF5ZWQgdGlsZSBtdXN0IGJlIHBhcnQgb2YgYSB3b3JkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIGlmIChzbmFwc2hvdC5zcXVhcmVzW3JdW2NdID09PSBcIi5cIikge1xyXG4gICAgICAgICAgICAgLy8gVGhpcyBzcXVhcmUgd2FzIHBsYXllZCBvbiB0aGlzIHR1cm5cclxuICAgICAgICAgICAgIGlmIChyIDwgbG93cm93KSB7IGxvd3JvdyA9IHI7fVxyXG4gICAgICAgICAgICAgaWYgKHIgPiBoaWdocm93KSB7IGhpZ2hyb3cgPSByO31cclxuICAgICAgICAgICAgIGlmIChjIDwgbG93Y29sKSB7IGxvd2NvbCA9IGM7fVxyXG4gICAgICAgICAgICAgaWYgKGMgPiBoaWdoY29sKSB7IGhpZ2hjb2wgPSBjO31cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChsb3dyb3cgPT09IDE1KSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIllvdSBkaWRuJ3QgcGxheSBhbnkgdGlsZXNcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChsb3dyb3cgIT09IGhpZ2hyb3cgJiYgbG93Y29sICE9PSBoaWdoY29sKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIlRpbGVzIHBsYXllZCBtdXN0IGJlIGluIGEgc3RyYWlnaHQgbGluZVwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IHBsYXl0aHJ1ID0gZmFsc2U7XHJcbiAgICBsZXQgaG9va21hZGUgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIHIgPSBsb3dyb3c7IHIgPD0gaGlnaHJvdzsgKytyKSB7XHJcbiAgICAgIGZvciAodmFyIGMgPSBsb3djb2w7IGMgPD0gaGlnaGNvbDsgKytjKSB7XHJcbiAgICAgICAgaWYgKHNxdWFyZXNbcl1bY10gPT09IFwiLlwiKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJUaGVyZSBpcyBhIGdhcCBpbiB5b3VyIHdvcmRcIik7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzbmFwc2hvdC5zcXVhcmVzW3JdW2NdICE9PSBcIi5cIikge1xyXG4gICAgICAgICAgcGxheXRocnUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIHIgPiAwICYmIHNxdWFyZXNbci0xXVtjXSAhPT0gXCIuXCIpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiByIDwgMTQgJiYgc3F1YXJlc1tyKzFdW2NdICE9PSBcIi5cIikgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGMgPiAwICYmIHNxdWFyZXNbcl1bYy0xXSAhPT0gXCIuXCIpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBjIDwgMTQgJiYgc3F1YXJlc1tyXVtjKzFdICE9PSBcIi5cIikgeyBob29rbWFkZSA9IHRydWU7IH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gQ2hlY2sgcGxheSB0byBvciBmcm9tIGEgdGlsZSAocGxheSB0aHJvdWdoIGJ1dCBub3QgZWl0aGVyIHNpZGUpXHJcbiAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIGxvd2NvbCA+IDAgJiYgc25hcHNob3Quc3F1YXJlc1tsb3dyb3ddW2xvd2NvbC0xXSAhPT0gXCIuXCIpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAobG93cm93ID09PSBoaWdocm93ICYmIGhpZ2hjb2wgPCAxNCAmJiBzbmFwc2hvdC5zcXVhcmVzW2xvd3Jvd11baGlnaGNvbCsxXSAhPT0gXCIuXCIpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGxvd3JvdyA+IDAgJiYgc25hcHNob3Quc3F1YXJlc1tsb3dyb3ctMV1bbG93Y29sXSAhPT0gXCIuXCIpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAobG93Y29sID09PSBoaWdoY29sICYmIGhpZ2hyb3cgPCAxNCAmJiBzbmFwc2hvdC5zcXVhcmVzW2hpZ2hyb3crMV1bbG93Y29sXSAhPT0gXCIuXCIpIHsgcGxheXRocnUgPSB0cnVlOyB9XHJcbiAgICBpZiAoIXBsYXl0aHJ1ICYmICFob29rbWFkZSAmJiBzbmFwc2hvdC5zcXVhcmVzWzddWzddICE9PSBcIi5cIikge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJXb3JkcyBtdXN0IGJlIGNvbm5lY3RlZFwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZWNhbGxUaWxlcyA9ICgpID0+IHtcclxuICAgIHNldFNxdWFyZXMoWy4uLnNuYXBzaG90LnNxdWFyZXNdKTtcclxuICAgIHNldFVzZWRieShbLi4uc25hcHNob3QudXNlZGJ5XSk7XHJcbiAgICBzZXRQdGlsZXMoWy4uLnNuYXBzaG90LnB0aWxlc10pO1xyXG4gICAgc2V0R3RpbGVzKFsuLi5zbmFwc2hvdC5ndGlsZXNdKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwcmlzb25lclBhc3MgPSAoKSA9PiB7XHJcbiAgICByZWNhbGxUaWxlcygpOyAvLyBJbiBjYXNlIHRoZXkgcHV0IHNvbWUgdGlsZXMgb24gdGhlIGJvYXJkIGJlZm9yZSBjbGlja2luZyBQYXNzXHJcbiAgICBsZXQgbmV3V2hvc2V0dXJuID0gcGFzc2VkID8gXCJYXCIgOiBcIkdcIjsgLy8gSWYgYm90aCBwbGF5ZXJzIHBhc3MgdGhlbiBlbmQgdGhlIGdhbWUgYnkgdXNpbmcgXCJYXCJcclxuICAgIHNldFdob3NldHVybihuZXdXaG9zZXR1cm4pO1xyXG4gICAgc2V0UGFzc2VkKHRydWUpO1xyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVwdFwiLCAvLyBlbmQgcHJpc29uZXJzIHR1cm5cclxuICAgICAgICBzcXVhcmVzOiBzbmFwc2hvdC5zcXVhcmVzLCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiBzcXVhcmVzXHJcbiAgICAgICAgdXNlZGJ5OiBzbmFwc2hvdC51c2VkYnksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHVzZWQgYnlcclxuICAgICAgICBwdGlsZXM6IHNuYXBzaG90LnB0aWxlcywgLy8gcHJpc29uZXJzIHJhY2sgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICB0aWxlczogdGlsZXMsIC8vIHRpbGUgcG9vbCBkaWQgbm90IGNoYW5nZVxyXG4gICAgICAgIHdob3NldHVybjogbmV3V2hvc2V0dXJuLCAvLyBtYXkgaGF2ZSBlbmRlZCB0aGUgZ2FtZVxyXG4gICAgICAgIHBhc3NlZDogdHJ1ZSxcclxuICAgICAgICByZXNjdWVzOiByZXNjdWVzIC8vIG5vIHJlc2N1ZXMgb24gYSBwYXNzXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ3VhcmRzUGFzcyA9ICgpID0+IHtcclxuICAgIHJlY2FsbFRpbGVzKCk7IC8vIEluIGNhc2UgdGhleSBwdXQgc29tZSB0aWxlcyBvbiB0aGUgYm9hcmQgYmVmb3JlIGNsaWNraW5nIFBhc3NcclxuICAgIGxldCBuZXdXaG9zZXR1cm4gPSBwYXNzZWQgPyBcIlhcIiA6IFwiUFwiOyAvLyBJZiBib3RoIHBsYXllcnMgcGFzcyB0aGVuIGVuZCB0aGUgZ2FtZSBieSB1c2luZyBcIlhcIlxyXG4gICAgc2V0V2hvc2V0dXJuKG5ld1dob3NldHVybik7XHJcbiAgICBzZXRQYXNzZWQodHJ1ZSk7XHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICB1c2VkYnk6IHNuYXBzaG90LnVzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgIGd0aWxlczogc25hcHNob3QuZ3RpbGVzLCAvLyBndWFyZHMgcmFjayBkaWQgbm90IGNoYW5nZVxyXG4gICAgICAgIHRpbGVzOiB0aWxlcywgLy8gdGlsZSBwb29sIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgd2hvc2V0dXJuOiBuZXdXaG9zZXR1cm4sIC8vIG1heSBoYXZlIGVuZGVkIHRoZSBnYW1lXHJcbiAgICAgICAgcGFzc2VkOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVxdWVzdEdhbWVEYXRhID0gKCkgPT4ge1xyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcInJlcXVlc3RnYW1lZGF0YVwiLCAvLyByZXF1ZXN0IGdhbWUgZGF0YVxyXG4gICAgICAgIHJlcXVlc3RvcjogcHJpc29uZXJzT3JHdWFyZHNcclxuICAgICAgfSlcclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAocHJpc29uZXJzT3JHdWFyZHMgIT09IHdob3NldHVybikge3JldHVybjt9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgd2hvc2V0dXJuID09PSBcIlBcIiA/IGVuZFByaXNvbmVyc1R1cm4oKSA6IGVuZEd1YXJkc1R1cm4oKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGxldHRlcnRlc3QgPSAvXltBLVphLXpcXD9dJC87IC8vIHNpbmdsZSBsZXR0ZXIgb3IgcXVlc3Rpb24gbWFyayBrZXkgcHJlc3NlZFxyXG4gICAgaWYgKGV2ZW50LmtleS5tYXRjaChsZXR0ZXJ0ZXN0KSkge1xyXG4gICAgICBsZXQgbGV0dGVyID0gZXZlbnQua2V5LnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgIGxldCByYWNrID0gd2hvc2V0dXJuID09PSBcIlBcIiA/IHB0aWxlcyA6IGd0aWxlcztcclxuICAgICAgbGV0IG5ld1NlbGVjdGlvbiA9IHJhY2suaW5kZXhPZihsZXR0ZXIpO1xyXG4gICAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMSkge1xyXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IHJhY2suaW5kZXhPZihcIj9cIik7IC8vIFVzZSB0aGUgYmxhbmsgaWYgdGhleSBoYXZlIG9uZVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChuZXdTZWxlY3Rpb24gPiAtMSkgeyAvLyBQcmVzc2VkIGxldHRlciBpcyBvbiB0aGUgcmFja1xyXG4gICAgICAgIGxldCByb3cgPSByY2RbMF07XHJcbiAgICAgICAgbGV0IGNvbCA9IHJjZFsxXTtcclxuICAgICAgICBsZXQgZGlyID0gcmNkWzJdO1xyXG4gICAgICAgIGlmIChyb3cgPi0xICYmIGNvbCA+IC0xICYmIGRpciAhPT0gXCJcIikgeyAvLyByb3csIGNvbCwgZGlyIGFyZSBzZXQgdG8gYWNjZXB0IGtleXN0cm9rZVxyXG4gICAgICAgICAgLy8gTmVlZCB0byBmaWd1cmUgb3V0IG5leHQgc3FhdXJlIHRvIGF1dG8tcGxhY2UgYSB0aWxlXHJcbiAgICAgICAgICBsZXQgbmV3UmNkID0gcmNkO1xyXG4gICAgICAgICAgaWYgKGRpciA9PT0gXCJyXCIpIHsgLy8gcGxheWluZyByaWdodHdhcmRzXHJcbiAgICAgICAgICAgIGxldCBuZXdjID0gLTE7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGMgPSBjb2wgKyAxOyBjIDwgMTUgJiYgbmV3YyA9PT0gLTE7IGMrKykge1xyXG4gICAgICAgICAgICAgIGlmIChzcXVhcmVzW3Jvd11bY10gPT09IFwiLlwiKSB7bmV3YyA9IGM7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuZXdjID09PSAtMSkge1xyXG4gICAgICAgICAgICAgIG5ld1JjZCA9IFstMSwtMSxcIlwiXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBuZXdSY2QgPSBbcm93LCBuZXdjLCBcInJcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyb3csY29sLG5ld1NlbGVjdGlvbixuZXdSY2QpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZGlyID09PSBcImRcIikgeyAvLyBwbGF5aW5nIGRvd253YXJkc1xyXG4gICAgICAgICAgICBsZXQgbmV3ciA9IC0xO1xyXG4gICAgICAgICAgICBmb3IgKHZhciByID0gcm93ICsgMTsgciA8IDE1ICYmIG5ld3IgPT09IC0xOyByKyspIHtcclxuICAgICAgICAgICAgICBpZiAoc3F1YXJlc1tyXVtjb2xdID09PSBcIi5cIikge25ld3IgPSByO31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobmV3ciA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICBuZXdSY2QgPSBbLTEsLTEsXCJcIl07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbmV3UmNkID0gW25ld3IsIGNvbCwgXCJkXCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socm93LGNvbCxuZXdTZWxlY3Rpb24sbmV3UmNkKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkJhY2tzcGFjZVwiICYmIGN1cnJlbnRjb29yZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAvLyBTYW1lIGFzIGNsaWNraW5nIG9uIGEgcGxheWVkLXRoaXMtbW92ZSB0aWxlIGluIHRlcm1zIG9mIHJldHVybmluZyB0aGUgdGlsZSB0byB0aGUgcmFja1xyXG4gICAgICAvLyBIb3dldmVyIHdlIGFsc28gd2FudCB0byBzZXQgdXAgcmNkIHNvIHRoZXkgY2FuIHByZXNzIHRoZSBrZXkgdGhleSBtZWFudCBhbmQgY29udGludWVcclxuICAgICAgbGV0IGNvb3JkID0gY3VycmVudGNvb3Jkc1tjdXJyZW50Y29vcmRzLmxlbmd0aCAtIDFdOyAvLyB0aWxlIHRvIHJldHVybiB0byByYWNrXHJcbiAgICAgIGxldCBuZXdDdXJyZW50Y29vcmRzID0gWy4uLmN1cnJlbnRjb29yZHNdO1xyXG4gICAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IG5ld1VzZWRieSA9IFsuLi51c2VkYnldO1xyXG4gICAgICBsZXQgbmV3U3F1YXJlcyA9IFsuLi5zcXVhcmVzXTtcclxuICAgICAgbGV0IG5ld1JjZCA9IFstMSwtMSxcIlwiXTtcclxuICAgICAgbGV0IG5ld1NlbGVjdGlvbiA9IHNlbGVjdGlvbjtcclxuICAgICAgbmV3Q3VycmVudGNvb3Jkcy5zcGxpY2UoY3VycmVudGNvb3Jkcy5sZW5ndGgtMSwxKTtcclxuICAgICAgbGV0IHJvdyA9IHBhcnNlSW50KGNvb3JkLnNwbGl0KFwiLVwiKVswXSk7XHJcbiAgICAgIGxldCBjb2wgPSBwYXJzZUludChjb29yZC5zcGxpdChcIi1cIilbMV0pO1xyXG4gICAgICBsZXQgcmV0dXJuZWRUaWxlID0gc3F1YXJlc1tyb3ddW2NvbF07XHJcbiAgICAgIGlmICh3aG9zZXR1cm4gPT09IFwiUFwiKSB7XHJcbiAgICAgICAgbmV3UHRpbGVzLnB1c2gocmV0dXJuZWRUaWxlKTtcclxuICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdQdGlsZXMubGVuZ3RoLTE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3R3RpbGVzLnB1c2gocmV0dXJuZWRUaWxlKTtcclxuICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdHdGlsZXMubGVuZ3RoLTE7XHJcbiAgICAgIH1cclxuICAgICAgbmV3VXNlZGJ5W3Jvd11bY29sXSA9IFwiXCI7XHJcbiAgICAgIG5ld1NxdWFyZXNbcm93XVtjb2xdID0gXCIuXCI7XHJcbiAgICAgIGxldCBkaXIgPSByY2RbMl07XHJcbiAgICAgIGlmIChkaXIgIT09IFwiXCIpIHtcclxuICAgICAgICAvLyBkaXJlY3Rpb24gd2FzIHNldCBzbyBrZWVwIGl0XHJcbiAgICAgICAgbmV3UmNkID0gW3Jvdyxjb2wsZGlyXTtcclxuICAgICAgICBpZiAoY3VycmVudGNvb3Jkcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IC0xOyAvLyBpZiB0aGV5IGJhY2tzcGFjZSBhbGwgdGhlIGxldHRlcnMgb2ZmIGxlYXZlIHJhY2sgdGlsZSB1bnNlbGVjdGVkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNldEN1cnJlbnRjb29yZHMobmV3Q3VycmVudGNvb3Jkcyk7XHJcbiAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKTtcclxuICAgICAgc2V0VXNlZGJ5KG5ld1VzZWRieSk7XHJcbiAgICAgIHNldFJjZChuZXdSY2QpO1xyXG4gICAgICBzZXRTZWxlY3Rpb24obmV3U2VsZWN0aW9uKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHByaXNvbmJyZWFrXCIgb25LZXlEb3duQ2FwdHVyZT17aGFuZGxlS2V5RG93bn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMSBwYkdhbWVpZFwiPlxyXG4gICAgICAgICAgR2FtZSBpZDoge2dhbWVpZH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBwYnRpdGxlXCI+XHJcbiAgICAgICAgICBQcmlzb24gQnJlYWtcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cnVuX2NpcmNsZTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xIHBiaG9tZWxpbmtcIj5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJyZXF1ZXN0R2FtZURhdGFcIlxyXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlN5bmMgd2l0aCBvcHBvbmVudFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIHJlcXVlc3RHYW1lRGF0YSgpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c3luYzwvaT5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17XCIuLi8uLi9cIn0+XHJcbiAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT48L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBiUHJpc29uZXJzXCI+XHJcbiAgICAgICAgICA8UHJpc29uZXJzXHJcbiAgICAgICAgICAgIHB0aWxlcz17cHRpbGVzfVxyXG4gICAgICAgICAgICB3aG9zZXR1cm49e3dob3NldHVybn1cclxuICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyh0aSkgPT4gaGFuZGxlUHJpc29uZXJUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICBvbkNsaWNrRmluaXNoVHVybj17KCkgPT4gZW5kUHJpc29uZXJzVHVybigpfVxyXG4gICAgICAgICAgICBvbkNsaWNrVGlsZVJlY2FsbD17KCkgPT4gcmVjYWxsVGlsZXMoKX1cclxuICAgICAgICAgICAgb25DbGlja1RpbGVFeGNoYW5nZT17KCkgPT4gc3dhcFByaXNvbmVyc1RpbGVzKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tQYXNzUGxheT17KCkgPT4gcHJpc29uZXJQYXNzKCl9XHJcbiAgICAgICAgICAgIHJlc2N1ZXM9e3Jlc2N1ZXN9XHJcbiAgICAgICAgICAgIHByaXNvbmVyc09yR3VhcmRzPXtwcmlzb25lcnNPckd1YXJkc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIHtwcmlzb25lcnNPckd1YXJkcyA9PT0gd2hvc2V0dXJuID9cclxuICAgICAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgICAgIHNxdWFyZXM9e3NxdWFyZXN9XHJcbiAgICAgICAgICAgICAgICB1c2VkYnk9e3VzZWRieX1cclxuICAgICAgICAgICAgICAgIHJjZD17cmNkfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KHJpLCBjaSkgPT4gaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyaSwgY2ksIC0xLG51bGwpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICAgICAgc3F1YXJlcz17c3F1YXJlc31cclxuICAgICAgICAgICAgICAgIHVzZWRieT17dXNlZGJ5fVxyXG4gICAgICAgICAgICAgICAgcmNkPXtyY2R9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7fX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHBiVW5kZXJib2FyZFwiPlxyXG4gICAgICAgICAgICB7d2hvc2V0dXJuID09PSBcIlhcIiA/IDxoMT5HYW1lIE92ZXIhPC9oMT4gOiBwcmlzb25lcnNPckd1YXJkcyA9PT0gd2hvc2V0dXJuID9cclxuICAgICAgICAgICAgICA8cD5Ud28gcGVhbnV0cyB3ZXJlIHdhbGtpbmcgZG93biBhIGJhY2sgYWxsZXkuIE9uZSB3YXMgYSBzYWx0ZWQuPC9wPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgPHA+SWYgeW91IGRvIG5vdCBzZWUgeW91ciBvcHBvbmVudHMgbGFzdCBtb3ZlIHRoZW4gY2xpY2sgdGhlJm5ic3A7XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicmVxdWVzdEdhbWVEYXRhMlwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiU3luYyB3aXRoIG9wcG9uZW50XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEdhbWVEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5zeW5jPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAmbmJzcDtidXR0b25cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBiR3VhcmRzXCI+XHJcbiAgICAgICAgICA8R3VhcmRzXHJcbiAgICAgICAgICAgIGd0aWxlcz17Z3RpbGVzfVxyXG4gICAgICAgICAgICB3aG9zZXR1cm49e3dob3NldHVybn1cclxuICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyh0aSkgPT4gaGFuZGxlR3VhcmRUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICBvbkNsaWNrRmluaXNoVHVybj17KCkgPT4gZW5kR3VhcmRzVHVybigpfVxyXG4gICAgICAgICAgICBvbkNsaWNrVGlsZVJlY2FsbD17KCkgPT4gcmVjYWxsVGlsZXMoKX1cclxuICAgICAgICAgICAgb25DbGlja1RpbGVFeGNoYW5nZT17KCkgPT4gc3dhcEd1YXJkc1RpbGVzKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tQYXNzUGxheT17KCkgPT4gZ3VhcmRzUGFzcygpfVxyXG4gICAgICAgICAgICBwcmlzb25lcnNPckd1YXJkcz17cHJpc29uZXJzT3JHdWFyZHN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICA8U2hvd1Vuc2VlblRpbGVzIHRpbGVzPXt0aWxlc30gb3RoZXJ0aWxlcz17cHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gZ3RpbGVzIDogcHRpbGVzfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFNob3dVbnNlZW5UaWxlcyA9IChwcm9wcykgPT4geyAvLyB0aWxlcyA9IHRpbGVzIGluIGJhZywgb3RoZXJ0aWxlcyA9IHRpbGVzIG9uIG90aGVyIHBsYXllcnMgcmFja1xyXG4gIGxldCB1bnNlZW5UaWxlcyA9IFsuLi5wcm9wcy50aWxlcywgLi4ucHJvcHMub3RoZXJ0aWxlc107XHJcbiAgdW5zZWVuVGlsZXMuc29ydCgpO1xyXG4gIGlmICh1bnNlZW5UaWxlc1swXSA9PT0gXCI/XCIpIHtcclxuICAgICAgdW5zZWVuVGlsZXMuc3BsaWNlKDAsMSlcclxuICAgICAgdW5zZWVuVGlsZXMucHVzaChcIj9cIilcclxuICB9XHJcbiAgaWYgKHVuc2VlblRpbGVzWzBdID09PSBcIj9cIikge1xyXG4gICAgICB1bnNlZW5UaWxlcy5zcGxpY2UoMCwxKVxyXG4gICAgICB1bnNlZW5UaWxlcy5wdXNoKFwiP1wiKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVwb29sXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiVGlsZXBvb2xUaXRsZVwiPlRJTEVTPC9zcGFuPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXBvb2xEaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgIHt1bnNlZW5UaWxlcy5tYXAoKHQsIHRpKSA9PiAoXHJcbiAgICAgICAgPHNwYW4ga2V5PXtgdGlsZSR7dGl9YH0+XHJcbiAgICAgICAgICB7dGkgPiAwICYmIHQgIT09IHVuc2VlblRpbGVzW3RpIC0gMV0gPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcG9vbERpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJUaWxlcG9vbFRpbGVcIj57dH08L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBSYWNrVGlsZSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9e3Byb3BzLnRpbGVjbGFzc30gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIHtwcm9wcy50aWxldmFsdWV9XHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEZpbmlzaFR1cm5CdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNoZWNrPC9pPiZuYnNwO0ZpbmlzaCBUdXJuPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRpbGVSZWNhbGxCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnVuZG88L2k+Jm5ic3A7UmVjYWxsIFRpbGVzPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRpbGVFeGNoYW5nZUJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uVGV4dFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+Y2FjaGVkPC9pPiZuYnNwO1N3YXAgVGlsZXM8L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUGFzc1BsYXlCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblRleHRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPm5vdF9pbnRlcmVzdGVkPC9pPiZuYnNwO1Bhc3MgVHVybjwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBQcmlzb25lcnMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByZW5kZXJUaWxlID0gcmVuZGVyUGxheWVyVGlsZShwcm9wcyk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckZyZWVkUHJpc29uZXJzID0gKGNvdW50KSA9PiB7XHJcbiAgICBsZXQgZHVtYiA9IEFycmF5KGNvdW50KS5maWxsKFwibm9uc2Vuc2VcIik7XHJcbiAgICByZXR1cm4gZHVtYi5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICA8c3BhbiBrZXk9e3ZhbHVlICsgU3RyaW5nKGluZGV4KX0gZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJJJ20gZnJlZSEgSSdtIGZyZWUhXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiL2JyZWFrZnJlZS5wbmdcIlxyXG4gICAgICAgICAgYWx0PVwiSSdtIGZyZWUhIEknbSBmcmVlIVwiXHJcbiAgICAgICAgICB3aWR0aD1cIjEwMFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJwYlBsYXllclRpdGxlXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5ydW5fY2lyY2xlIHJ1bl9jaXJjbGUgcnVuX2NpcmNsZTwvaT4mbmJzcDtQUklTT05FUlMmbmJzcDs8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnJ1bl9jaXJjbGUgcnVuX2NpcmNsZSBydW5fY2lyY2xlPC9pPjwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgIHtwcm9wcy5wdGlsZXMubWFwKCh0LCB0aSkgPT5cclxuICAgICAgICAgIHJlbmRlclRpbGUoXHJcbiAgICAgICAgICAgIHByb3BzLndob3NldHVybiA9PT0gXCJQXCIgJiYgcHJvcHMuc2VsZWN0aW9uID09PSB0aVxyXG4gICAgICAgICAgICAgID8gXCJwYlRpbGVPblJhY2tTZWxlY3RlZFBcIlxyXG4gICAgICAgICAgICAgIDogXCJwYlRpbGVPblJhY2tQXCIsXHJcbiAgICAgICAgICAgIHRpLFxyXG4gICAgICAgICAgICBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgPyB0IDogXCIqXCJcclxuICAgICAgICAgIClcclxuICAgICAgICApfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiUFwiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IFxyXG4gICAgICAgIHNob3dBY3Rpb25CdXR0b25zKHByb3BzKVxyXG4gICAgICA6IDw+PC8+XHJcbiAgICAgIH1cclxuICAgICAgPHA+XHJcbiAgICAgICAgUmVzY3VlcyBtYWRlOiB7cHJvcHMucmVzY3Vlc31cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICB7cmVuZGVyRnJlZWRQcmlzb25lcnMocHJvcHMucmVzY3Vlcyl9XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBHdWFyZHMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByZW5kZXJUaWxlID0gcmVuZGVyUGxheWVyVGlsZShwcm9wcyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJwYlBsYXllclRpdGxlXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5zZWN1cml0eSBzZWN1cml0eSBzZWN1cml0eTwvaT4mbmJzcDtHVUFSRFMmbmJzcDs8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnNlY3VyaXR5IHNlY3VyaXR5IHNlY3VyaXR5PC9pPjwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgIHtwcm9wcy5ndGlsZXMubWFwKCh0LCB0aSkgPT5cclxuICAgICAgICAgIHJlbmRlclRpbGUoXHJcbiAgICAgICAgICAgIHByb3BzLndob3NldHVybiA9PT0gXCJHXCIgJiYgcHJvcHMuc2VsZWN0aW9uID09PSB0aVxyXG4gICAgICAgICAgICAgID8gXCJwYlRpbGVPblJhY2tTZWxlY3RlZEdcIlxyXG4gICAgICAgICAgICAgIDogXCJwYlRpbGVPblJhY2tHXCIsXHJcbiAgICAgICAgICAgIHRpLFxyXG4gICAgICAgICAgICBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJHXCIgPyB0IDogXCIqXCJcclxuICAgICAgICAgIClcclxuICAgICAgICApfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiR1wiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiA/IFxyXG4gICAgICAgIHNob3dBY3Rpb25CdXR0b25zKHByb3BzKVxyXG4gICAgICA6IDw+PC8+XHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQbGF5ZXJUaWxlKHByb3BzKSB7XHJcbiAgcmV0dXJuICh0aWxlY2xhc3MsIHRpbGVpbmRleCwgdGlsZXZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aWxldmFsdWUgIT09IFwiKlwiID8gLy8gdGhpcyB0aWxlIGlzIGZvciB0aGlzIHBsYXllciwgYWxsb3cgY2xpY2tcclxuICAgICAgICA8UmFja1RpbGVcclxuICAgICAgICAgIGtleT17dGlsZWNsYXNzICsgU3RyaW5nKHRpbGVpbmRleCl9XHJcbiAgICAgICAgICB0aWxlY2xhc3M9e3RpbGVjbGFzc31cclxuICAgICAgICAgIHRpbGV2YWx1ZT17dGlsZXZhbHVlfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMub25DbGljayh0aWxlaW5kZXgpfSAvPlxyXG4gICAgICAgIDogLy8gdGhpcyB0aWxlIGlzIGZvciBvcHBvbmVudCwgZG8gbm90IGFsbG93IGNsaWNrXHJcbiAgICAgICAgPFJhY2tUaWxlXHJcbiAgICAgICAgICBrZXk9e3RpbGVjbGFzcyArIFN0cmluZyh0aWxlaW5kZXgpfVxyXG4gICAgICAgICAgdGlsZWNsYXNzPXt0aWxlY2xhc3N9XHJcbiAgICAgICAgICB0aWxldmFsdWU9e3RpbGV2YWx1ZX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5hbGVydChcIk5vIHBlZWtpbmchXCIpfSAvPlxyXG4gICAgKTtcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93QWN0aW9uQnV0dG9ucyhwcm9wcykge1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBiQWN0aW9uQnV0dG9uRGl2XCI+XHJcbiAgICA8cD5cclxuICAgICAgPEZpbmlzaFR1cm5CdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja0ZpbmlzaFR1cm4oKX0gLz5cclxuICAgIDwvcD5cclxuICAgIDxwPlxyXG4gICAgICA8VGlsZVJlY2FsbEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrVGlsZVJlY2FsbCgpfSAvPlxyXG4gICAgPC9wPlxyXG4gICAgPHA+XHJcbiAgICAgIDxUaWxlRXhjaGFuZ2VCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1RpbGVFeGNoYW5nZSgpfSAvPlxyXG4gICAgPC9wPlxyXG4gICAgPHA+XHJcbiAgICAgIDxQYXNzUGxheUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrUGFzc1BsYXkoKX0gLz5cclxuICAgIDwvcD5cclxuICA8L2Rpdj47XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=