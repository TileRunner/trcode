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
  const tdvalue = props.c !== "." ? props.c : tdclass === "pbSquareRightArrow" ? "➡" : tdclass === "pbSquareDownArrow" ? "⬇" : tdclass === "pbSquareCenterSquare" ? "✰" : tdclass === "pbSquareEscapeHatch" ? "ꐕ" //💫
  : props.ri % 2 === props.ci % 2 ? "." //"☹"//"⎔"
  : "."; //"ꐕ";//"✦";

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: tdclass,
    onClick: props.onClick,
    children: tdvalue
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 249,
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
        lineNumber: 259,
        columnNumber: 9
      }, undefined)
    }, `Square${ri}-${ci}`, false, {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 7
    }, undefined);
  };

  const renderRow = ri => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
      className: "pbRow",
      children: squares[ri].map((c, ci) => renderSquare(ri, ci, c, usedby[ri][ci]))
    }, `BoardRow${ri}`, false, {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 7
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
    className: "pbBoard",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
      children: squares.map((r, ri) => renderRow(ri))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 279,
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
        className: "col-1 gameid",
        children: ["Game id: ", gameid]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 944,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-10 pbtitle",
        children: ["Prison Break", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "material-icons",
          children: "run_circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 949,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 947,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-1 pbhomelink",
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
            lineNumber: 958,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 952,
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
              lineNumber: 961,
              columnNumber: 16
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 961,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 960,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 951,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 943,
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
          lineNumber: 967,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 966,
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
          lineNumber: 982,
          columnNumber: 11
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {
          squares: squares,
          usedby: usedby,
          rcd: rcd,
          onClick: () => {}
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 989,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 980,
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
          lineNumber: 998,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 997,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowUnseenTiles, {
          tiles: tiles,
          othertiles: prisonersOrGuards === "P" ? gtiles : ptiles
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1011,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1010,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 965,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 942,
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
      lineNumber: 1031,
      columnNumber: 7
    }, undefined), unseenTiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [ti > 0 && t !== unseenTiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pbTilepoolDivider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1035,
        columnNumber: 13
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbTilepoolTile",
        children: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1039,
        columnNumber: 11
      }, undefined)]
    }, `tile${ti}`, true, {
      fileName: _jsxFileName,
      lineNumber: 1033,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1030,
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
    lineNumber: 1048,
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
      lineNumber: 1057,
      columnNumber: 7
    }, undefined), "Finish Turn"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1056,
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
      lineNumber: 1065,
      columnNumber: 7
    }, undefined), "Recall Tiles"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1064,
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
      lineNumber: 1073,
      columnNumber: 7
    }, undefined), "Exchange Tiles"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1072,
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
      lineNumber: 1081,
      columnNumber: 7
    }, undefined), "Pass"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1080,
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
      lineNumber: 1090,
      columnNumber: 7
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
      tileclass: tileclass,
      tilevalue: tilevalue,
      onClick: () => window.alert("No peeking!")
    }, tileclass + String(tileindex), false, {
      fileName: _jsxFileName,
      lineNumber: 1097,
      columnNumber: 7
    }, undefined);
  };

  const renderFinishTurn = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
        onClick: () => props.onClickFinishTurn()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1107,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1107,
      columnNumber: 12
    }, undefined);
  };

  const renderRecallTiles = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
        onClick: () => props.onClickTileRecall()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1111,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1111,
      columnNumber: 12
    }, undefined);
  };

  const renderExchangeTiles = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileExchangeButton, {
        onClick: () => props.onClickTileExchange()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1115,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1115,
      columnNumber: 12
    }, undefined);
  };

  const renderPassPlay = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PassPlayButton, {
        onClick: () => props.onClickPassPlay()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1119,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1119,
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
        lineNumber: 1126,
        columnNumber: 9
      }, undefined)
    }, value + String(index), false, {
      fileName: _jsxFileName,
      lineNumber: 1125,
      columnNumber: 7
    }, undefined));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "playerTitle",
      children: ["PRISONERS", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "run_circle run_circle run_circle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1138,
        columnNumber: 43
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1138,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilerack",
      children: props.ptiles.map((t, ti) => renderTile(props.whoseturn === "P" && props.selection === ti ? "pbTileOnRackSelectedP" : "pbTileOnRackP", ti, props.prisonersOrGuards === "P" ? t : "*"))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1139,
      columnNumber: 7
    }, undefined), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderRecallTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderExchangeTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "P" && props.prisonersOrGuards === "P" ? renderPassPlay() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Rescues made: ", props.rescues, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1156,
        columnNumber: 9
      }, undefined), renderFreedPrisoners(props.rescues)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1154,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1137,
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
      lineNumber: 1167,
      columnNumber: 7
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
      tileclass: tileclass,
      tilevalue: tilevalue,
      onClick: () => window.alert("No peeking!")
    }, tileclass + String(tileindex), false, {
      fileName: _jsxFileName,
      lineNumber: 1174,
      columnNumber: 7
    }, undefined);
  };

  const renderFinishTurn = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
      onClick: () => props.onClickFinishTurn()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1184,
      columnNumber: 12
    }, undefined);
  };

  const renderRecallTiles = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
      onClick: () => props.onClickTileRecall()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1188,
      columnNumber: 12
    }, undefined);
  };

  const renderExchangeTiles = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileExchangeButton, {
      onClick: () => props.onClickTileExchange()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1192,
      columnNumber: 12
    }, undefined);
  };

  const renderPassPlay = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PassPlayButton, {
      onClick: () => props.onClickPassPlay()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1196,
      columnNumber: 12
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "playerTitle",
      children: ["GUARDS", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "material-icons",
        children: "security security security"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1201,
        columnNumber: 40
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
    }, undefined), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderRecallTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderExchangeTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.whoseturn === "G" && props.prisonersOrGuards === "G" ? renderPassPlay() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1200,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsyLmpzIl0sIm5hbWVzIjpbImVzY2FwZWhhdGNoZXMiLCJpbml0aWFsdGlsZXMiLCJQcmlzb25CcmVhayIsImlubG9iYnkiLCJzZXRJbmxvYmJ5IiwidXNlU3RhdGUiLCJnYW1laWQiLCJzZXRHYW1laWQiLCJwcmlzb25lcnNPckd1YXJkcyIsInNldFByaXNvbmVyc09yR3VhcmRzIiwid3Ntc2dzIiwic2V0V3Ntc2dzIiwibXNnaWQiLCJzZXRNc2dpZCIsImhvc3QiLCJhY2NlcHRNZXNzYWdlIiwibWVzc2FnZSIsImN1cnIiLCJkYXRhIiwicmVtb3ZlTWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiaSIsImluZGV4T2YiLCJ3Iiwic3BsaWNlIiwiY2xpZW50Iiwic2V0Q2xpZW50IiwiQ3VzdG9tU29ja2V0IiwidXNlRWZmZWN0IiwiY29ubmVjdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsIlNxdWFyZSIsInByb3BzIiwidXNlZGJ5Y2xhc3MiLCJzcXVhcmV1c2VkYnkiLCJ0ZGNsYXNzIiwiYyIsInJjZCIsInJpIiwiY2kiLCJ0ZHZhbHVlIiwib25DbGljayIsIkJvYXJkIiwic3F1YXJlcyIsInVzZWRieSIsInJlbmRlclNxdWFyZSIsInJlbmRlclJvdyIsIm1hcCIsInIiLCJHYW1lIiwidGlsZXMiLCJzZXRUaWxlcyIsInB0aWxlcyIsInNldFB0aWxlcyIsImd0aWxlcyIsInNldEd0aWxlcyIsInNldFNxdWFyZXMiLCJBcnJheSIsImZpbGwiLCJzZXRVc2VkYnkiLCJzZWxlY3Rpb24iLCJzZXRTZWxlY3Rpb24iLCJ3aG9zZXR1cm4iLCJzZXRXaG9zZXR1cm4iLCJjdXJyZW50Y29vcmRzIiwic2V0Q3VycmVudGNvb3JkcyIsInJlc2N1ZXMiLCJzZXRSZXNjdWVzIiwic2V0UmNkIiwic25hcHNob3QiLCJzZXRTbmFwc2hvdCIsInRlbXBQVGlsZXMiLCJ0ZW1wR1RpbGVzIiwidGVtcFRpbGVzIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzb3J0IiwiY29uc29sZSIsImxvZyIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsImZ1bmMiLCJtc2ciLCJwcm9jZXNzTWVzc2FnZSIsInBhcnNlIiwicmVxdWVzdG9yIiwic2VuZGVyIiwiaGFuZGxlQm9hcmRTcXVhcmVDbGljayIsIm5ld1NlbGVjdGlvbiIsIm5ld1JjZCIsIm5ld1NxdWFyZXMiLCJuZXdVc2VkYnkiLCJuZXdQdGlsZXMiLCJuZXdHdGlsZXMiLCJuZXdSb3ciLCJzcXVhcmV2YWx1ZSIsIm5ld0N1cnJlbnRjb29yZHMiLCJjb29yZCIsIlN0cmluZyIsImNjaSIsIm5ld1VzZWRieVJvdyIsIm5ld0RpcmVjdGlvbiIsImhhbmRsZVByaXNvbmVyVGlsZUNsaWNrIiwidGlsZWluZGV4IiwiYWxlcnQiLCJoYW5kbGVHdWFyZFRpbGVDbGljayIsImVuZFByaXNvbmVyc1R1cm4iLCJpc1BsYXlWYWxpZCIsIm5ld1Jlc2N1ZXMiLCJuZXdUaWxlcyIsImVuZEd1YXJkc1R1cm4iLCJzbmFwc3F1YXJlcyIsInNuYXB1c2VkYnkiLCJzbmFwcHRpbGVzIiwic25hcGd0aWxlcyIsInN3YXBQcmlzb25lcnNUaWxlcyIsIndpbmRvdyIsInN3YXBHdWFyZHNUaWxlcyIsImxvd3JvdyIsImhpZ2hyb3ciLCJsb3djb2wiLCJoaWdoY29sIiwicGxheXRocnUiLCJob29rbWFkZSIsInJlY2FsbFRpbGVzIiwicHJpc29uZXJQYXNzIiwiZ3VhcmRzUGFzcyIsInJlcXVlc3RHYW1lRGF0YSIsInBsYXllcnR5cGUiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImtleSIsImxldHRlcnRlc3QiLCJtYXRjaCIsImxldHRlciIsInRvVXBwZXJDYXNlIiwicmFjayIsInJvdyIsImNvbCIsImRpciIsIm5ld2MiLCJuZXdyIiwicGFyc2VJbnQiLCJzcGxpdCIsInJldHVybmVkVGlsZSIsInRpIiwiU2hvd1Vuc2VlblRpbGVzIiwidW5zZWVuVGlsZXMiLCJvdGhlcnRpbGVzIiwidCIsIlJhY2tUaWxlIiwidGlsZWNsYXNzIiwidGlsZXZhbHVlIiwiRmluaXNoVHVybkJ1dHRvbiIsIlRpbGVSZWNhbGxCdXR0b24iLCJUaWxlRXhjaGFuZ2VCdXR0b24iLCJQYXNzUGxheUJ1dHRvbiIsIlByaXNvbmVycyIsInJlbmRlclRpbGUiLCJyZW5kZXJGaW5pc2hUdXJuIiwib25DbGlja0ZpbmlzaFR1cm4iLCJyZW5kZXJSZWNhbGxUaWxlcyIsIm9uQ2xpY2tUaWxlUmVjYWxsIiwicmVuZGVyRXhjaGFuZ2VUaWxlcyIsIm9uQ2xpY2tUaWxlRXhjaGFuZ2UiLCJyZW5kZXJQYXNzUGxheSIsIm9uQ2xpY2tQYXNzUGxheSIsInJlbmRlckZyZWVkUHJpc29uZXJzIiwiY291bnQiLCJkdW1iIiwiaW5kZXgiLCJHdWFyZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsYUFBYSxHQUFHLENBQ3BCLEtBRG9CLEVBRXBCLEtBRm9CLEVBR3BCLE1BSG9CLEVBSXBCLEtBSm9CLEVBS3BCLE1BTG9CLEVBTXBCLE1BTm9CLEVBT3BCLE1BUG9CLEVBUXBCLE9BUm9CLENBQXRCLEMsQ0FTRzs7QUFDSCxNQUFNQyxZQUFZLEdBQUcsQ0FDbkIsR0FEbUIsRUFFbkIsR0FGbUIsRUFHbkIsR0FIbUIsRUFJbkIsR0FKbUIsRUFLbkIsR0FMbUIsRUFNbkIsR0FObUIsRUFPbkIsR0FQbUIsRUFRbkIsR0FSbUIsRUFTbkIsR0FUbUIsRUFVbkIsR0FWbUIsRUFXbkIsR0FYbUIsRUFZbkIsR0FabUIsRUFhbkIsR0FibUIsRUFjbkIsR0FkbUIsRUFlbkIsR0FmbUIsRUFnQm5CLEdBaEJtQixFQWlCbkIsR0FqQm1CLEVBa0JuQixHQWxCbUIsRUFtQm5CLEdBbkJtQixFQW9CbkIsR0FwQm1CLEVBcUJuQixHQXJCbUIsRUFzQm5CLEdBdEJtQixFQXVCbkIsR0F2Qm1CLEVBd0JuQixH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ZWJwYWNrL3BhZ2VzL3BiL3ByaXNvbmJyZWFrMi5mNzRiYTVkNmI4NjBjMzgxYTk1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQ3VzdG9tU29ja2V0IGZyb20gXCIuLi8uLi93c1wiO1xyXG5jb25zdCBlc2NhcGVoYXRjaGVzID0gW1xyXG4gIFwiMC0wXCIsXHJcbiAgXCIwLTdcIixcclxuICBcIjAtMTRcIixcclxuICBcIjctMFwiLFxyXG4gIFwiNy0xNFwiLFxyXG4gIFwiMTQtMFwiLFxyXG4gIFwiMTQtN1wiLFxyXG4gIFwiMTQtMTRcIixcclxuXTsgLy8gY29vcmRzIG9mIGVzY2FwZSBoYXRjaGVzXHJcbmNvbnN0IGluaXRpYWx0aWxlcyA9IFtcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkFcIixcclxuICBcIkJcIixcclxuICBcIkJcIixcclxuICBcIkNcIixcclxuICBcIkNcIixcclxuICBcIkRcIixcclxuICBcIkRcIixcclxuICBcIkRcIixcclxuICBcIkRcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkVcIixcclxuICBcIkZcIixcclxuICBcIkZcIixcclxuICBcIkdcIixcclxuICBcIkdcIixcclxuICBcIkdcIixcclxuICBcIkhcIixcclxuICBcIkhcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIklcIixcclxuICBcIkpcIixcclxuICBcIktcIixcclxuICBcIkxcIixcclxuICBcIkxcIixcclxuICBcIkxcIixcclxuICBcIkxcIixcclxuICBcIk1cIixcclxuICBcIk1cIixcclxuICBcIk5cIixcclxuICBcIk5cIixcclxuICBcIk5cIixcclxuICBcIk5cIixcclxuICBcIk5cIixcclxuICBcIk5cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIk9cIixcclxuICBcIlBcIixcclxuICBcIlBcIixcclxuICBcIlFcIixcclxuICBcIlJcIixcclxuICBcIlJcIixcclxuICBcIlJcIixcclxuICBcIlJcIixcclxuICBcIlJcIixcclxuICBcIlJcIixcclxuICBcIlNcIixcclxuICBcIlNcIixcclxuICBcIlNcIixcclxuICBcIlNcIixcclxuICBcIlRcIixcclxuICBcIlRcIixcclxuICBcIlRcIixcclxuICBcIlRcIixcclxuICBcIlRcIixcclxuICBcIlRcIixcclxuICBcIlVcIixcclxuICBcIlVcIixcclxuICBcIlVcIixcclxuICBcIlVcIixcclxuICBcIlZcIixcclxuICBcIlZcIixcclxuICBcIldcIixcclxuICBcIldcIixcclxuICBcIlhcIixcclxuICBcIllcIixcclxuICBcIllcIixcclxuICBcIlpcIixcclxuICBcIj9cIixcclxuICBcIj9cIixcclxuXTsgLy8gaW5pdGlhbCB0aWxlIHBvb2xcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaXNvbkJyZWFrKCkge1xyXG4gIGNvbnN0IFtpbmxvYmJ5LCBzZXRJbmxvYmJ5XSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW2dhbWVpZCwgc2V0R2FtZWlkXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtwcmlzb25lcnNPckd1YXJkcywgc2V0UHJpc29uZXJzT3JHdWFyZHNdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3dzbXNncywgc2V0V3Ntc2dzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFttc2dpZCwgc2V0TXNnaWRdID0gdXNlU3RhdGUoMClcclxuICBsZXQgaG9zdCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAnd3NzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tJyA6ICd3czovL2xvY2FsaG9zdDo1MDAwJztcclxuICBjb25zdCBhY2NlcHRNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcclxuICAgIHNldE1zZ2lkKChjdXJyKSA9PiBjdXJyICsgMSlcclxuICAgIHNldFdzbXNncygoY3VycikgPT4gWy4uLmN1cnIsIG1lc3NhZ2UuZGF0YV0pO1xyXG4gIH1cclxuICBjb25zdCByZW1vdmVNZXNzYWdlID0gKG1lc3NhZ2VEYXRhKSA9PiB7XHJcbiAgICBsZXQgaSA9IHdzbXNncy5pbmRleE9mKG1lc3NhZ2VEYXRhKTtcclxuICAgIGxldCB3ID0gWy4uLndzbXNnc107XHJcbiAgICB3LnNwbGljZShpLDEpO1xyXG4gICAgc2V0V3Ntc2dzKHcpO1xyXG4gIH1cclxuICBjb25zdCBbY2xpZW50LCBzZXRDbGllbnRdID0gdXNlU3RhdGUobmV3IEN1c3RvbVNvY2tldChob3N0LCBhY2NlcHRNZXNzYWdlKSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IChcclxuICAgIGNsaWVudC5jb25uZWN0KClcclxuICApLFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgaW5sb2JieSB8fCBwcmlzb25lcnNPckd1YXJkcyA9PT0gJycgP1xyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBwYnRpdGxlXCI+XHJcbiAgICAgICAgICAgIFByaXNvbiBCcmVhayBMb2JieVxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnJ1bl9jaXJjbGU8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTIgcGJob21lbGlua1wiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi4uLy4uL1wifT5cclxuICAgICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTEgb2Zmc2V0LTFcIj5cclxuICAgICAgICAgICAgPGgyPlByaXNvbmVyczogZW50ZXIgYSBnYW1lIGlkIGFuZCBjbGljayBcIlN0YXJ0IEdhbWVcIi4gVGVsbCB0aGUgR3VhcmRzIHRoZSBpZC48L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTExIG9mZnNldC0xXCI+XHJcbiAgICAgICAgICAgIDxoMj5HdWFyZHM6IGdldCB0aGUgZ2FtZSBpZCBmcm9tIHRoZSBQcmlzb25lcnMuIEVudGVyIHRoZSBnYW1lIGlkIGFuZCBjbGljayBcIkpvaW4gR2FtZVwiLjwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTEgb2Zmc2V0LTFcIj5cclxuICAgICAgICAgICAgPGgyPkdhbWUgaWQ6XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImdhbWVpZFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Z2FtZWlkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxhYmVsPiZuYnNwOzwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdGFydGdhbWVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChnYW1laWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzKCdQJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW5sb2JieShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFN0YXJ0IEdhbWVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxsYWJlbD4mbmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiam9pbmdhbWVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChnYW1laWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByaXNvbmVyc09yR3VhcmRzKCdHJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW5sb2JieShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEpvaW4gR2FtZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA6XHJcbiAgICA8R2FtZSBwcmlzb25lcnNPckd1YXJkcz17cHJpc29uZXJzT3JHdWFyZHN9XHJcbiAgICAgIGdhbWVpZD17Z2FtZWlkfVxyXG4gICAgICB3c21zZ3M9e3dzbXNnc31cclxuICAgICAgY2xpZW50PXtjbGllbnR9XHJcbiAgICAgIHJlbW92ZU1lc3NhZ2U9e3JlbW92ZU1lc3NhZ2V9XHJcbiAgICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBTcXVhcmUgPSAocHJvcHMpID0+IHtcclxuICAvLyBzcXVhcmV1c2VkYnksIHJpLCBjaSwgYywgb25DbGlja1xyXG4gIC8vIG5lZWQgc3F1YXJldXNlZGJ5IHRvIHBpY2sgY3NzIGNsYXNzTmFtZSBjb3JyZXNwb25kaW5nIHRvIHdobyBwbGF5ZWQgdGhlIHRpbGUgb24gdGhlIHNxdWFyZVxyXG4gIC8vIG5lZWQgcmksIGNpIHRvIGRpc3BsYXkgYWx0ZXJuYXRpbmcgY2hhcmFjdGVycyBvbiB1bnVzZWQgc3F1YXJlc1xyXG4gIC8vIG5lZWQgYyB0byByZXByZXNlbnQgd2hpY2ggdGlsZSBpcyBvbiB0aGUgc3F1YXJlLCBpZiBhbnlcclxuICAvLyBuZWVkIG9uQ2xpY2sgdG8gaGFuZGxlIHNxdWFyZSBjbGljayBhdCBhIGhpZ2hlciBsZXZlbFxyXG4gIC8vIG5lZWQgcmNkIHRvIGRpc3BsYXkgc2VsZWN0ZWQgZGlyZWN0aW9uIGFycm93IHdoZW4gYXBwcm9wcmlhdGVcclxuICBjb25zdCB1c2VkYnljbGFzcyA9XHJcbiAgICBwcm9wcy5zcXVhcmV1c2VkYnkgPT09IFwiUFwiXHJcbiAgICAgID8gXCJwYlNxdWFyZVVzZWRCeVByaXNvbmVyc1wiXHJcbiAgICAgIDogXCJwYlNxdWFyZVVzZWRCeUd1YXJkc1wiO1xyXG4gIGNvbnN0IHRkY2xhc3MgPSBcclxuICAgIHByb3BzLmMgIT09IFwiLlwiXHJcbiAgICAgID8gdXNlZGJ5Y2xhc3NcclxuICAgICAgOiBwcm9wcy5yY2RbMF0gPT09IHByb3BzLnJpICYmIHByb3BzLnJjZFsxXSA9PT0gcHJvcHMuY2kgJiYgcHJvcHMucmNkWzJdID09PSBcInJcIlxyXG4gICAgICA/IFwicGJTcXVhcmVSaWdodEFycm93XCJcclxuICAgICAgOiBwcm9wcy5yY2RbMF0gPT09IHByb3BzLnJpICYmIHByb3BzLnJjZFsxXSA9PT0gcHJvcHMuY2kgJiYgcHJvcHMucmNkWzJdID09PSBcImRcIlxyXG4gICAgICA/IFwicGJTcXVhcmVEb3duQXJyb3dcIlxyXG4gICAgICA6IHByb3BzLnJpID09PSA3ICYmIHByb3BzLmNpID09PSA3XHJcbiAgICAgID8gXCJwYlNxdWFyZUNlbnRlclNxdWFyZVwiXHJcbiAgICAgIDogKHByb3BzLnJpID09PSAwIHx8IHByb3BzLnJpID09PSA3IHx8IHByb3BzLnJpID09PSAxNCkgJiZcclxuICAgICAgICAocHJvcHMuY2kgPT09IDAgfHwgcHJvcHMuY2kgPT09IDcgfHwgcHJvcHMuY2kgPT09IDE0KVxyXG4gICAgICA/IFwicGJTcXVhcmVFc2NhcGVIYXRjaFwiXHJcbiAgICAgIDogcHJvcHMucmkgJSAyID09PSBwcm9wcy5jaSAlIDJcclxuICAgICAgPyBcInBiU3F1YXJlMVwiXHJcbiAgICAgIDogXCJwYlNxdWFyZTJcIjtcclxuICBjb25zdCB0ZHZhbHVlID1cclxuICAgIHByb3BzLmMgIT09IFwiLlwiXHJcbiAgICAgID8gcHJvcHMuY1xyXG4gICAgICA6IHRkY2xhc3MgPT09IFwicGJTcXVhcmVSaWdodEFycm93XCJcclxuICAgICAgPyBcIuKeoVwiXHJcbiAgICAgIDogdGRjbGFzcyA9PT0gXCJwYlNxdWFyZURvd25BcnJvd1wiXHJcbiAgICAgID8gXCLirIdcIlxyXG4gICAgICA6IHRkY2xhc3MgPT09IFwicGJTcXVhcmVDZW50ZXJTcXVhcmVcIlxyXG4gICAgICA/IFwi4pywXCJcclxuICAgICAgOiB0ZGNsYXNzID09PSBcInBiU3F1YXJlRXNjYXBlSGF0Y2hcIlxyXG4gICAgICA/IFwi6pCVXCIgLy/wn5KrXHJcbiAgICAgIDogcHJvcHMucmkgJSAyID09PSBwcm9wcy5jaSAlIDJcclxuICAgICAgPyBcIi5cIi8vXCLimLlcIi8vXCLijpRcIlxyXG4gICAgICA6IFwiLlwiOy8vXCLqkJVcIjsvL1wi4pymXCI7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXt0ZGNsYXNzfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAge3RkdmFsdWV9XHJcbiAgICA8L2J1dHRvbj5cclxuKTtcclxufTtcclxuXHJcbmNvbnN0IEJvYXJkID0gKHsgb25DbGljaywgc3F1YXJlcywgdXNlZGJ5LCByY2QgfSkgPT4ge1xyXG4gIGNvbnN0IHJlbmRlclNxdWFyZSA9IChyaSwgY2ksIGMsIHNxdWFyZXVzZWRieSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRkIGtleT17YFNxdWFyZSR7cml9LSR7Y2l9YH0gY2xhc3NOYW1lPVwicGJTcXVhcmVcIj5cclxuICAgICAgICA8U3F1YXJlXHJcbiAgICAgICAgICBjPXtjfVxyXG4gICAgICAgICAgY2k9e2NpfVxyXG4gICAgICAgICAgcmk9e3JpfVxyXG4gICAgICAgICAgc3F1YXJldXNlZGJ5PXtzcXVhcmV1c2VkYnl9XHJcbiAgICAgICAgICByY2Q9e3JjZH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2socmksIGNpKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L3RkPlxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlclJvdyA9IChyaSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRyIGtleT17YEJvYXJkUm93JHtyaX1gfSBjbGFzc05hbWU9XCJwYlJvd1wiPlxyXG4gICAgICAgIHtzcXVhcmVzW3JpXS5tYXAoKGMsIGNpKSA9PiByZW5kZXJTcXVhcmUocmksIGNpLCBjLCB1c2VkYnlbcmldW2NpXSkpfVxyXG4gICAgICA8L3RyPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHRhYmxlIGNsYXNzTmFtZT1cInBiQm9hcmRcIj5cclxuICAgICAgPHRib2R5PntzcXVhcmVzLm1hcCgociwgcmkpID0+IHJlbmRlclJvdyhyaSkpfTwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBHYW1lID0gKHtwcmlzb25lcnNPckd1YXJkcywgZ2FtZWlkLCB3c21zZ3MsIGNsaWVudCwgcmVtb3ZlTWVzc2FnZX0pID0+IHtcclxuICBjb25zdCBbdGlsZXMsIHNldFRpbGVzXSA9IHVzZVN0YXRlKFsuLi5pbml0aWFsdGlsZXNdKTtcclxuICBjb25zdCBbcHRpbGVzLCBzZXRQdGlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtndGlsZXMsIHNldEd0aWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NxdWFyZXMsIHNldFNxdWFyZXNdID0gdXNlU3RhdGUoQXJyYXkoMTUpLmZpbGwoQXJyYXkoMTUpLmZpbGwoXCIuXCIpKSk7XHJcbiAgY29uc3QgW3VzZWRieSwgc2V0VXNlZGJ5XSA9IHVzZVN0YXRlKEFycmF5KDE1KS5maWxsKEFycmF5KDE1KS5maWxsKFwiXCIpKSk7XHJcbiAgY29uc3QgW3NlbGVjdGlvbiwgc2V0U2VsZWN0aW9uXSA9IHVzZVN0YXRlKC0xKTsgLy8gcmVsYXRpdmUgdG8gcmFjayBvZiBwbGF5ZXIgbWFraW5nIGEgcGxheVxyXG4gIGNvbnN0IFt3aG9zZXR1cm4sIHNldFdob3NldHVybl0gPSB1c2VTdGF0ZShcIlBcIik7IC8vIGdhbWUgc3RhcnRzIHdpdGggcHJpc29uZXJzIHBsYXlcclxuICBjb25zdCBbY3VycmVudGNvb3Jkcywgc2V0Q3VycmVudGNvb3Jkc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Jlc2N1ZXMsIHNldFJlc2N1ZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3JjZCwgc2V0UmNkXSA9IHVzZVN0YXRlKFstMSwtMSxcIlwiXSk7XHJcbiAgY29uc3QgW3NuYXBzaG90LCBzZXRTbmFwc2hvdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICBzcXVhcmVzOiBbLi4uc3F1YXJlc10sXHJcbiAgICB1c2VkYnk6IFsuLi51c2VkYnldLFxyXG4gICAgcHRpbGVzOiBbLi4ucHRpbGVzXSxcclxuICAgIGd0aWxlczogWy4uLmd0aWxlc10sXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiKSB7XHJcbiAgICAgIGxldCB0ZW1wUFRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICAgIGxldCB0ZW1wR1RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICAgIGxldCB0ZW1wVGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgICB3aGlsZSAodGVtcFBUaWxlcy5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZW1wVGlsZXMubGVuZ3RoKTtcclxuICAgICAgICB0ZW1wUFRpbGVzLnB1c2godGVtcFRpbGVzW3JhbmRdKTtcclxuICAgICAgICB0ZW1wVGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZW1wVGlsZXMubGVuZ3RoKTtcclxuICAgICAgICB0ZW1wR1RpbGVzLnB1c2godGVtcFRpbGVzW3JhbmRdKTtcclxuICAgICAgICB0ZW1wVGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRlbXBQVGlsZXMuc29ydCgpO1xyXG4gICAgICB0ZW1wR1RpbGVzLnNvcnQoKTtcclxuICAgICAgc2V0R3RpbGVzKHRlbXBHVGlsZXMpO1xyXG4gICAgICBzZXRQdGlsZXModGVtcFBUaWxlcyk7XHJcbiAgICAgIHNldFRpbGVzKHRlbXBUaWxlcyk7XHJcbiAgICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgICBzcXVhcmVzOiBbLi4uc3F1YXJlc10sXHJcbiAgICAgICAgdXNlZGJ5OiBbLi4udXNlZGJ5XSxcclxuICAgICAgICBwdGlsZXM6IFsuLi50ZW1wUFRpbGVzXSxcclxuICAgICAgICBndGlsZXM6IFsuLi50ZW1wR1RpbGVzXSAgICBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIGdnZFwiKVxyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICAgIGZ1bmM6IFwiZ2dkXCIgLy8gZ2V0IGdhbWUgZGF0YVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgfVxyXG4gICAgICBjYXRjaCB7fVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IG1zZyA9IHdzbXNnc1swXTtcclxuICAgIGlmIChtc2cpIHByb2Nlc3NNZXNzYWdlKG1zZyk7XHJcbiAgICAgICAgXHJcbiAgfSxbd3Ntc2dzXSlcclxuXHJcbiAgZnVuY3Rpb24gcHJvY2Vzc01lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgbGV0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTsgLy8gd2FzIG1lc3NhZ2UuZGF0YVxyXG4gICAgaWYgKG1lc3NhZ2VEYXRhLmdhbWVpZCA9PT0gZ2FtZWlkICYmIG1lc3NhZ2VEYXRhLnR5cGUgPT09IFwicGJcIikgeyAvLyBUaGlzIGluc3RhbmNlIG9mIGEgcHJpc29uIGJyZWFrIGdhbWVcclxuICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwicmVxdWVzdGdhbWVkYXRhXCIgJiYgbWVzc2FnZURhdGEucmVxdWVzdG9yICE9PSBwcmlzb25lcnNPckd1YXJkcykgeyAvLyBPcHBvbmVudCByZXF1ZXN0ZWQgZ2FtZSBpbmZvXHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgICAgZnVuYzogXCJwcm92aWRlZ2FtZWRhdGFcIiwgLy8gcHJvdmlkZSBnYW1lIGRhdGFcclxuICAgICAgICAgICAgc2VuZGVyOiBwcmlzb25lcnNPckd1YXJkcywgLy8gd2hvIHNlbnQgdGhlIGRhdGFcclxuICAgICAgICAgICAgdGlsZXM6IHRpbGVzLFxyXG4gICAgICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLFxyXG4gICAgICAgICAgICBwdGlsZXM6IHB0aWxlcyxcclxuICAgICAgICAgICAgZ3RpbGVzOiBndGlsZXMsXHJcbiAgICAgICAgICAgIHVzZWRieTogdXNlZGJ5LFxyXG4gICAgICAgICAgICB3aG9zZXR1cm46IHdob3NldHVybixcclxuICAgICAgICAgICAgc2VsZWN0aW9uOiBzZWxlY3Rpb24sXHJcbiAgICAgICAgICAgIGN1cnJlbnRjb29yZHM6IGN1cnJlbnRjb29yZHMsXHJcbiAgICAgICAgICAgIHNuYXBzaG90OiBzbmFwc2hvdCxcclxuICAgICAgICAgICAgcmVzY3VlczogcmVzY3Vlc1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInByb3ZpZGVnYW1lZGF0YVwiICYmIG1lc3NhZ2VEYXRhLnNlbmRlciAhPT0gcHJpc29uZXJzT3JHdWFyZHMpIHsgLy8gb3Bwb25lbnQgcHJvdmlkZWQgZ2FtZSBkYXRhXHJcbiAgICAgICAgc2V0VGlsZXMobWVzc2FnZURhdGEudGlsZXMpO1xyXG4gICAgICAgIHNldFNxdWFyZXMobWVzc2FnZURhdGEuc3F1YXJlcyk7XHJcbiAgICAgICAgc2V0UHRpbGVzKG1lc3NhZ2VEYXRhLnB0aWxlcyk7XHJcbiAgICAgICAgc2V0R3RpbGVzKG1lc3NhZ2VEYXRhLmd0aWxlcyk7XHJcbiAgICAgICAgc2V0VXNlZGJ5KG1lc3NhZ2VEYXRhLnVzZWRieSk7XHJcbiAgICAgICAgc2V0V2hvc2V0dXJuKG1lc3NhZ2VEYXRhLndob3NldHVybik7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKG1lc3NhZ2VEYXRhLnNlbGVjdGlvbik7XHJcbiAgICAgICAgc2V0Q3VycmVudGNvb3JkcyhtZXNzYWdlRGF0YS5jdXJyZW50Y29vcmRzKTtcclxuICAgICAgICBzZXRTbmFwc2hvdChtZXNzYWdlRGF0YS5zbmFwc2hvdCk7XHJcbiAgICAgICAgc2V0UmVzY3VlcyhtZXNzYWdlRGF0YS5yZXNjdWVzKTtcclxuICAgICAgfVxyXG4gICAgICAvLyB3aGVuIGd1YXJkcyBqb2luIGdhbWUgdGhleSBzZW5kIGdnZCwgYW5kIHByaXNvbmVyIHBpY2tzIGl0IHVwIGFuZCBzZW5kcyBzZ2QsIHRoZW4gZ3VhcmRzIHBpY2sgdGhhdCB1cCBhbmQgdGFrZSB0aGUgZGF0YVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJnZ2RcIiAmJiBwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIpIHsgLy8gZ2V0IGdhbWUgZGF0YSAoc2VudCBieSBndWFyZHMsIHByaXNvbmVycyByZXNwb25kIGhlcmUpXHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgICAgZnVuYzogXCJzZ2RcIiwgLy8gc2VuZCBnYW1lIGRhdGFcclxuICAgICAgICAgICAgdGlsZXM6IHRpbGVzLFxyXG4gICAgICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLFxyXG4gICAgICAgICAgICBwdGlsZXM6IHB0aWxlcyxcclxuICAgICAgICAgICAgZ3RpbGVzOiBndGlsZXMsXHJcbiAgICAgICAgICAgIHVzZWRieTogdXNlZGJ5LFxyXG4gICAgICAgICAgICB3aG9zZXR1cm46IHdob3NldHVybixcclxuICAgICAgICAgICAgc2VsZWN0aW9uOiBzZWxlY3Rpb24sXHJcbiAgICAgICAgICAgIGN1cnJlbnRjb29yZHM6IGN1cnJlbnRjb29yZHMsXHJcbiAgICAgICAgICAgIHNuYXBzaG90OiBzbmFwc2hvdCxcclxuICAgICAgICAgICAgcmVzY3VlczogcmVzY3VlcyAvLyBtYXkgaGF2ZSByZXNjdWVkIGFub3RoZXIgcHJpc29uZXJcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJzZ2RcIiAmJiBwcmlzb25lcnNPckd1YXJkcyA9PT0gXCJHXCIpIHsgLy8gc2VuZCBnYW1lIGRhdGEgKHByaXNvbmVycyBzZW50IGl0LCBndWFyZHMgbm93IGdldCBpdClcclxuICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgc2V0U3F1YXJlcyhtZXNzYWdlRGF0YS5zcXVhcmVzKTtcclxuICAgICAgICBzZXRQdGlsZXMobWVzc2FnZURhdGEucHRpbGVzKTtcclxuICAgICAgICBzZXRHdGlsZXMobWVzc2FnZURhdGEuZ3RpbGVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobWVzc2FnZURhdGEudXNlZGJ5KTtcclxuICAgICAgICBzZXRXaG9zZXR1cm4obWVzc2FnZURhdGEud2hvc2V0dXJuKTtcclxuICAgICAgICBzZXRTZWxlY3Rpb24obWVzc2FnZURhdGEuc2VsZWN0aW9uKTtcclxuICAgICAgICBzZXRDdXJyZW50Y29vcmRzKG1lc3NhZ2VEYXRhLmN1cnJlbnRjb29yZHMpO1xyXG4gICAgICAgIHNldFNuYXBzaG90KG1lc3NhZ2VEYXRhLnNuYXBzaG90KTtcclxuICAgICAgICBzZXRSZXNjdWVzKG1lc3NhZ2VEYXRhLnJlc2N1ZXMpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImVwdFwiKSB7IC8vIGVuZCBwcmlzb25lcnMgdHVyblxyXG4gICAgICAgIHNldFdob3NldHVybihcIkdcIik7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgICAgICBzZXRSY2QoLTEsLTEsXCJcIik7XHJcbiAgICAgICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICAgICAgc2V0U3F1YXJlcyhtZXNzYWdlRGF0YS5zcXVhcmVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobWVzc2FnZURhdGEudXNlZGJ5KTtcclxuICAgICAgICBzZXRQdGlsZXMobWVzc2FnZURhdGEucHRpbGVzKTtcclxuICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgc2V0UmVzY3VlcyhtZXNzYWdlRGF0YS5yZXNjdWVzKTtcclxuICAgICAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgICAgICBzcXVhcmVzOiBbLi4ubWVzc2FnZURhdGEuc3F1YXJlc10sXHJcbiAgICAgICAgICB1c2VkYnk6IFsuLi5tZXNzYWdlRGF0YS51c2VkYnldLFxyXG4gICAgICAgICAgcHRpbGVzOiBbLi4ubWVzc2FnZURhdGEucHRpbGVzXSxcclxuICAgICAgICAgIGd0aWxlczogWy4uLmd0aWxlc10sXHJcbiAgICAgICAgfSk7ICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImVndFwiKSB7IC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgIHNldFdob3NldHVybihcIlBcIik7XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgICAgICBzZXRSY2QoLTEsLTEsXCJcIik7XHJcbiAgICAgICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICAgICAgc2V0U3F1YXJlcyhtZXNzYWdlRGF0YS5zcXVhcmVzKTtcclxuICAgICAgICBzZXRVc2VkYnkobWVzc2FnZURhdGEudXNlZGJ5KTtcclxuICAgICAgICBzZXRHdGlsZXMobWVzc2FnZURhdGEuZ3RpbGVzKTtcclxuICAgICAgICBzZXRUaWxlcyhtZXNzYWdlRGF0YS50aWxlcyk7XHJcbiAgICAgICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICAgICAgc3F1YXJlczogWy4uLm1lc3NhZ2VEYXRhLnNxdWFyZXNdLFxyXG4gICAgICAgICAgdXNlZGJ5OiBbLi4ubWVzc2FnZURhdGEudXNlZGJ5XSxcclxuICAgICAgICAgIHB0aWxlczogWy4uLnB0aWxlc10sXHJcbiAgICAgICAgICBndGlsZXM6IFsuLi5tZXNzYWdlRGF0YS5ndGlsZXNdLFxyXG4gICAgICAgIH0pOyAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlTWVzc2FnZShtZXNzYWdlKTtcclxuICB9XHJcbiAgXHJcbiAgLy8gQ2FsbGluZyBzZXRTZWxlY3Rpb24gKGZyb20gaGFuZGxlS2V5RG93bikgdGhlbiBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrIGRvZXMgbm90IGxldCBpdCByZWNvZ25pemUgc2VsZWN0aW9uIHdpdGggdGhlIG5ldyB2YWx1ZVxyXG4gIC8vIFNvIEkgcGFzcyBuZXdTZWxlY3Rpb24gd2hlbiBJIHdhbnQgdG8gYWxzbyBzZXQgaXQsIG90aGVyd2lzZSBJIHBhc3MgLTEgdG8gaW5zdHJ1Y3QgaXQgdG8gdXNlIGN1cnJlbnQgdmFsdWUgb2Ygc2VsZWN0aW9uXHJcbiAgLy8gQWxzbyBwYXNzaW5nIG5ld1JjZFxyXG4gIGNvbnN0IGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2sgPSAocmksIGNpLCBuZXdTZWxlY3Rpb24sIG5ld1JjZCkgPT4ge1xyXG4gICAgbGV0IG5ld1NxdWFyZXMgPSBbLi4uc3F1YXJlc107XHJcbiAgICBsZXQgbmV3VXNlZGJ5ID0gWy4uLnVzZWRieV07XHJcbiAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICBsZXQgbmV3R3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICBsZXQgbmV3Um93ID0gWy4uLnNxdWFyZXNbcmldXTtcclxuICAgIGxldCBzcXVhcmV2YWx1ZSA9IHNxdWFyZXNbcmldW2NpXTtcclxuICAgIGxldCBuZXdDdXJyZW50Y29vcmRzID0gWy4uLmN1cnJlbnRjb29yZHNdO1xyXG4gICAgbGV0IGNvb3JkID0gU3RyaW5nKHJpKSArIFwiLVwiICsgU3RyaW5nKGNpKTtcclxuICAgIGxldCBjY2kgPSBjdXJyZW50Y29vcmRzLmluZGV4T2YoY29vcmQpO1xyXG4gICAgaWYgKG5ld1NlbGVjdGlvbiA9PT0gLTEpIHtcclxuICAgICAgbmV3U2VsZWN0aW9uID0gc2VsZWN0aW9uO1xyXG4gICAgICBuZXdSY2QgPSByY2Q7XHJcbiAgICB9XHJcbiAgICBpZiAobmV3U2VsZWN0aW9uID4gLTEgJiYgc3F1YXJldmFsdWUgPT09IFwiLlwiKSB7IC8vIHRpbGUgaXMgc2VsZWN0ZWQgZnJvbSByYWNrIGFuZCBjbGlja2VkIHNxdWFyZSBpcyBub3QgdXNlZCB5ZXRcclxuICAgICAgbmV3Um93W2NpXSA9XHJcbiAgICAgICAgd2hvc2V0dXJuID09PSBcIlBcIiA/IG5ld1B0aWxlc1tuZXdTZWxlY3Rpb25dIDogbmV3R3RpbGVzW25ld1NlbGVjdGlvbl07XHJcbiAgICAgIG5ld1NxdWFyZXNbcmldID0gWy4uLm5ld1Jvd107XHJcbiAgICAgIHdob3NldHVybiA9PT0gXCJQXCJcclxuICAgICAgICA/IG5ld1B0aWxlcy5zcGxpY2UobmV3U2VsZWN0aW9uLCAxKVxyXG4gICAgICAgIDogbmV3R3RpbGVzLnNwbGljZShuZXdTZWxlY3Rpb24sIDEpO1xyXG4gICAgICBsZXQgbmV3VXNlZGJ5Um93ID0gWy4uLm5ld1VzZWRieVtyaV1dO1xyXG4gICAgICBuZXdVc2VkYnlSb3dbY2ldID0gd2hvc2V0dXJuO1xyXG4gICAgICBuZXdVc2VkYnlbcmldID0gWy4uLm5ld1VzZWRieVJvd107XHJcbiAgICAgIGlmICh3aG9zZXR1cm4gPT09IFwiUFwiICYmIG5ld1NlbGVjdGlvbiA9PT0gbmV3UHRpbGVzLmxlbmd0aCkgeyBcclxuICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdTZWxlY3Rpb24gLSAxXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHdob3NldHVybiA9PT0gXCJHXCIgJiYgbmV3U2VsZWN0aW9uID09PSBuZXdHdGlsZXMubGVuZ3RoKSB7IFxyXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbiAtIDFcclxuICAgICAgfVxyXG4gICAgICBzZXRTZWxlY3Rpb24obmV3U2VsZWN0aW9uKTtcclxuICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKTtcclxuICAgICAgc2V0VXNlZGJ5KG5ld1VzZWRieSk7XHJcbiAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgICAgc2V0Q3VycmVudGNvb3JkcyhbLi4uY3VycmVudGNvb3JkcywgY29vcmRdKTtcclxuICAgICAgc2V0UmNkKG5ld1JjZCk7IC8vIGtleSBkb3duIGhhbmRsZXIgZmlndXJlZCBpdCBvdXRcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGNjaSA+IC0xKSB7IC8vIGNsaWNrZWQgc3F1YXJlIGhhcyBhIHRpbGUgb24gaXQgZnJvbSB0aGUgY3VycmVudCBtb3ZlIGluIHByb2dyZXNzXHJcbiAgICAgIHdob3NldHVybiA9PT0gXCJQXCJcclxuICAgICAgICA/IG5ld1B0aWxlcy5wdXNoKHNxdWFyZXZhbHVlKVxyXG4gICAgICAgIDogbmV3R3RpbGVzLnB1c2goc3F1YXJldmFsdWUpO1xyXG4gICAgICBsZXQgbmV3Um93ID0gWy4uLm5ld1NxdWFyZXNbcmldXTtcclxuICAgICAgbmV3Um93W2NpXSA9IFwiLlwiO1xyXG4gICAgICBuZXdTcXVhcmVzW3JpXSA9IFsuLi5uZXdSb3ddO1xyXG4gICAgICBsZXQgbmV3VXNlZGJ5Um93ID0gWy4uLm5ld1VzZWRieVtyaV1dO1xyXG4gICAgICBuZXdVc2VkYnlSb3dbY2ldID0gXCJcIjtcclxuICAgICAgbmV3VXNlZGJ5W3JpXSA9IFsuLi5uZXdVc2VkYnlSb3ddO1xyXG4gICAgICBzZXRTZWxlY3Rpb24oXHJcbiAgICAgICAgd2hvc2V0dXJuID09PSBcIlBcIiA/IG5ld1B0aWxlcy5sZW5ndGggLSAxIDogbmV3R3RpbGVzLmxlbmd0aCAtIDFcclxuICAgICAgKTtcclxuICAgICAgbmV3Q3VycmVudGNvb3Jkcy5zcGxpY2UoY2NpLCAxKTtcclxuXHJcbiAgICAgIHNldFNxdWFyZXMobmV3U3F1YXJlcyk7XHJcbiAgICAgIHNldFVzZWRieShuZXdVc2VkYnkpO1xyXG4gICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICAgIHNldEN1cnJlbnRjb29yZHMobmV3Q3VycmVudGNvb3Jkcyk7XHJcbiAgICAgIHNldFJjZCgtMSwtMSxcIlwiKTsgLy8gbWFrZSBwbGF5cmUgY2xpY2sgYWdhaW4gdG8gc2V0IGRpcmVjdGlvblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBUaGV5IGRpZG4ndCBjbGljayBhIHNxdWFyZSB0byBwbGFjZSBhIHNlbGVjdGVkIHRpbGUgdGhlcmVcclxuICAgIC8vIFRoZXkgZGlkbid0IGNsaWNrIGEgc3F1YXJlIHRvIHJlbW92ZSBhbiBleGlzdGluZyB0aWxlXHJcbiAgICBpZiAoc3F1YXJlc1tyaV1bY2ldID09PSBcIi5cIikge1xyXG4gICAgICAvLyBUaGVyZSBpcyBub3RoaW5nIG9uIHRoZSBzcXVhcmUgc28gdGhleSBhcmUgcGlja2luZyB3aGVyZSB0byBwbGFjZSB0aGUgbmV4dCB0aWxlIHZpYSBrZXlib2FyZFxyXG4gICAgICBsZXQgbmV3RGlyZWN0aW9uID0gcmNkWzBdICE9PSByaSB8fCByY2RbMV0gIT09IGNpID8gXCJyXCIgOiAvL2NsaWNrIG5ldyBzcXVhcmUsIHN0YXJ0IHdpdGggXCJyXCJcclxuICAgICAgIHJjZFsyXSA9PT0gXCJyXCIgPyBcImRcIiA6IC8vY2xpY2sgc2FtZSBzcXVhcmUgdGhhdCB3YXMgXCJyXCIsIGNoYW5nZSB0byBcImRcIlxyXG4gICAgICAgcmNkWzJdID09PSBcImRcIiA/IFwiXCIgOiAvL2NsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIFwiZFwiLCBjaGFuZ2UgdG8gXCJcIlxyXG4gICAgICAgXCJyXCI7IC8vIGNsaWNrIHNhbWUgc3F1YXJlIHRoYXQgd2FzIFwiXCIsIGNoYW5nZSB0byBcInJcIlxyXG4gICAgICBuZXdSY2QgPSBbcmksY2ksbmV3RGlyZWN0aW9uXTtcclxuICAgICAgc2V0UmNkKG5ld1JjZCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQcmlzb25lclRpbGVDbGljayA9ICh0aWxlaW5kZXgpID0+IHtcclxuICAgIC8vIHRoZSBpbmRleCBvZiBwdGlsZXNcclxuICAgIGlmICh3aG9zZXR1cm4gPT09IFwiUFwiKSB7XHJcbiAgICAgIHNldFNlbGVjdGlvbih0aWxlaW5kZXgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoXCJJdCBpcyBub3QgeW91ciB0dXJuXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUd1YXJkVGlsZUNsaWNrID0gKHRpbGVpbmRleCkgPT4ge1xyXG4gICAgLy8gdGhlIGluZGV4IG9mIGd0aWxlc1xyXG4gICAgaWYgKHdob3NldHVybiA9PT0gXCJHXCIpIHtcclxuICAgICAgc2V0U2VsZWN0aW9uKHRpbGVpbmRleCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIkl0IGlzIG5vdCB5b3VyIHR1cm5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZW5kUHJpc29uZXJzVHVybiA9ICgpID0+IHtcclxuICAgIGlmICghaXNQbGF5VmFsaWQoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3UmVzY3VlcyA9IHJlc2N1ZXM7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRjb29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGVzY2FwZWhhdGNoZXMuaW5kZXhPZihjdXJyZW50Y29vcmRzW2ldKSA+IC0xKSB7XHJcbiAgICAgICAgbmV3UmVzY3VlcyA9IG5ld1Jlc2N1ZXMgKyAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgd2hpbGUgKG5ld1B0aWxlcy5sZW5ndGggPCA3ICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICBuZXdQdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgIH1cclxuICAgIG5ld1B0aWxlcy5zb3J0KCk7XHJcbiAgICBzZXRXaG9zZXR1cm4oXCJHXCIpO1xyXG4gICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgc2V0UHRpbGVzKG5ld1B0aWxlcyk7XHJcbiAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICBzZXRSZXNjdWVzKG5ld1Jlc2N1ZXMpO1xyXG4gICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICBzcXVhcmVzOiBbLi4uc3F1YXJlc10sXHJcbiAgICAgIHVzZWRieTogWy4uLnVzZWRieV0sXHJcbiAgICAgIHB0aWxlczogWy4uLm5ld1B0aWxlc10sXHJcbiAgICAgIGd0aWxlczogWy4uLmd0aWxlc10sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZXB0XCIsIC8vIGVuZCBwcmlzb25lcnMgdHVyblxyXG4gICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgdXNlZGJ5OiB1c2VkYnksIC8vIHRoaXMgd2FzIGJlaW5nIGNoYW5nZWQgYXMgdGhlIHRpbGVzIHdlcmUgYmVpbmcgcGxheWVkXHJcbiAgICAgICAgcHRpbGVzOiBuZXdQdGlsZXMsIC8vIHdlIHBpY2tlZCBuZXcgdGlsZXMgZm9yIHByaXNvbmVycyByYWNrXHJcbiAgICAgICAgdGlsZXM6IG5ld1RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgcmVzY3VlczogbmV3UmVzY3VlcyAvLyBtYXkgaGF2ZSByZXNjdWVkIGFub3RoZXIgcHJpc29uZXJcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZW5kR3VhcmRzVHVybiA9ICgpID0+IHtcclxuICAgIGlmICghaXNQbGF5VmFsaWQoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3R3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdO1xyXG4gICAgd2hpbGUgKG5ld0d0aWxlcy5sZW5ndGggPCA3ICYmIG5ld1RpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuZXdUaWxlcy5sZW5ndGgpO1xyXG4gICAgICBuZXdHdGlsZXMucHVzaChuZXdUaWxlc1tyYW5kXSk7XHJcbiAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLCAxKTtcclxuICAgIH1cclxuICAgIG5ld0d0aWxlcy5zb3J0KCk7XHJcbiAgICBsZXQgc25hcHNxdWFyZXMgPSBbLi4uc3F1YXJlc107XHJcbiAgICBsZXQgc25hcHVzZWRieSA9IFsuLi51c2VkYnldO1xyXG4gICAgbGV0IHNuYXBwdGlsZXMgPSBbLi4ucHRpbGVzXTtcclxuICAgIGxldCBzbmFwZ3RpbGVzID0gWy4uLmd0aWxlc107XHJcbiAgICBzZXRXaG9zZXR1cm4oXCJQXCIpO1xyXG4gICAgc2V0U2VsZWN0aW9uKC0xKTtcclxuICAgIHNldEN1cnJlbnRjb29yZHMoW10pO1xyXG4gICAgc2V0R3RpbGVzKG5ld0d0aWxlcyk7XHJcbiAgICBzZXRUaWxlcyhuZXdUaWxlcyk7XHJcbiAgICBzZXRTbmFwc2hvdCh7XHJcbiAgICAgIHNxdWFyZXM6IHNuYXBzcXVhcmVzLFxyXG4gICAgICB1c2VkYnk6IHNuYXB1c2VkYnksXHJcbiAgICAgIHB0aWxlczogc25hcHB0aWxlcyxcclxuICAgICAgZ3RpbGVzOiBzbmFwZ3RpbGVzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVndFwiLCAvLyBlbmQgZ3VhcmRzIHR1cm5cclxuICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLCAvLyB0aGlzIHdhcyBiZWluZyBjaGFuZ2VkIGFzIHRoZSB0aWxlcyB3ZXJlIGJlaW5nIHBsYXllZFxyXG4gICAgICAgIHVzZWRieTogdXNlZGJ5LCAvLyB0aGlzIHdhcyBiZWluZyBjaGFuZ2VkIGFzIHRoZSB0aWxlcyB3ZXJlIGJlaW5nIHBsYXllZFxyXG4gICAgICAgIGd0aWxlczogbmV3R3RpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBndWFyZHMgcmFja1xyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcyAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIHNvIHRpbGUgcG9vbCBjaGFuZ2VkXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gIGNvbnN0IHN3YXBQcmlzb25lcnNUaWxlcyA9ICgpID0+IHtcclxuICAgIGlmICh0aWxlcy5sZW5ndGggPCA3KSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIk5lZWQgNyBpbiB0aGUgYmFnIHRvIGV4Y2hhbmdlXCIpXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBuZXdQdGlsZXMgPSBbXTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICB3aGlsZSAobmV3UHRpbGVzLmxlbmd0aCA8IDcgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgIG5ld1B0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgfVxyXG4gICAgbmV3UHRpbGVzLnNvcnQoKTtcclxuICAgIG5ld1RpbGVzID0gWy4uLm5ld1RpbGVzLCAuLi5zbmFwc2hvdC5wdGlsZXNdO1xyXG4gICAgbmV3VGlsZXMuc29ydCgpO1xyXG4gICAgY29uc29sZS5sb2coXCJFeGNoYW5nZSBwdGlsZXNcIilcclxuICAgIGNvbnNvbGUubG9nKHNuYXBzaG90LnB0aWxlcylcclxuICAgIGNvbnNvbGUubG9nKHB0aWxlcylcclxuICAgIGNvbnNvbGUubG9nKG5ld1B0aWxlcylcclxuICAgIGNvbnNvbGUubG9nKHRpbGVzKVxyXG4gICAgY29uc29sZS5sb2cobmV3VGlsZXMpXHJcbiAgICBzZXRTcXVhcmVzKFsuLi5zbmFwc2hvdC5zcXVhcmVzXSk7XHJcbiAgICBzZXRVc2VkYnkoWy4uLnNuYXBzaG90LnVzZWRieV0pO1xyXG4gICAgc2V0V2hvc2V0dXJuKFwiR1wiKTtcclxuICAgIHNldFNlbGVjdGlvbigtMSk7XHJcbiAgICBzZXRDdXJyZW50Y29vcmRzKFtdKTtcclxuICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpO1xyXG4gICAgc2V0VGlsZXMobmV3VGlsZXMpO1xyXG4gICAgc2V0U25hcHNob3Qoe1xyXG4gICAgICBzcXVhcmVzOiBbLi4uc25hcHNob3Quc3F1YXJlc10sXHJcbiAgICAgIHVzZWRieTogWy4uLnNuYXBzaG90LnVzZWRieV0sXHJcbiAgICAgIHB0aWxlczogWy4uLm5ld1B0aWxlc10sXHJcbiAgICAgIGd0aWxlczogWy4uLmd0aWxlc10sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZXB0XCIsIC8vIGVuZCBwcmlzb25lcnMgdHVyblxyXG4gICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICB1c2VkYnk6IHNuYXBzaG90LnVzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgIHB0aWxlczogbmV3UHRpbGVzLCAvLyB3ZSBwaWNrZWQgbmV3IHRpbGVzIGZvciBwcmlzb25lcnMgcmFja1xyXG4gICAgICAgIHRpbGVzOiBuZXdUaWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXMgLy8gbm8gcmVzY3VlcyBvbiBhbiBleGNoYW5nZVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IHN3YXBHdWFyZHNUaWxlcyA9ICgpID0+IHtcclxuICAgIGlmICh0aWxlcy5sZW5ndGggPCA3KSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIk5lZWQgNyBpbiB0aGUgYmFnIHRvIGV4Y2hhbmdlXCIpXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBuZXdHdGlsZXMgPSBbXTtcclxuICAgIGxldCBuZXdUaWxlcyA9IFsuLi50aWxlc107XHJcbiAgICB3aGlsZSAobmV3R3RpbGVzLmxlbmd0aCA8IDcgJiYgbmV3VGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ld1RpbGVzLmxlbmd0aCk7XHJcbiAgICAgIG5ld0d0aWxlcy5wdXNoKG5ld1RpbGVzW3JhbmRdKTtcclxuICAgICAgbmV3VGlsZXMuc3BsaWNlKHJhbmQsIDEpO1xyXG4gICAgfVxyXG4gICAgbmV3R3RpbGVzLnNvcnQoKTtcclxuICAgIG5ld1RpbGVzID0gWy4uLm5ld1RpbGVzLCAuLi5zbmFwc2hvdC5ndGlsZXNdO1xyXG4gICAgbmV3VGlsZXMuc29ydCgpO1xyXG4gICAgc2V0U3F1YXJlcyhbLi4uc25hcHNob3Quc3F1YXJlc10pO1xyXG4gICAgc2V0VXNlZGJ5KFsuLi5zbmFwc2hvdC51c2VkYnldKTtcclxuICAgIHNldFdob3NldHVybihcIlBcIik7XHJcbiAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgICBzZXRHdGlsZXMobmV3R3RpbGVzKTtcclxuICAgIHNldFRpbGVzKG5ld1RpbGVzKTtcclxuICAgIHNldFNuYXBzaG90KHtcclxuICAgICAgc3F1YXJlczogWy4uLnNuYXBzaG90LnNxdWFyZXNdLFxyXG4gICAgICB1c2VkYnk6IFsuLi5zbmFwc2hvdC51c2VkYnldLFxyXG4gICAgICBwdGlsZXM6IFsuLi5wdGlsZXNdLFxyXG4gICAgICBndGlsZXM6IFsuLi5uZXdHdGlsZXNdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcImVndFwiLCAvLyBlbmQgZ3VhcmRzIHR1cm5cclxuICAgICAgICBzcXVhcmVzOiBzbmFwc2hvdC5zcXVhcmVzLCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiBzcXVhcmVzXHJcbiAgICAgICAgdXNlZGJ5OiBzbmFwc2hvdC51c2VkYnksIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHVzZWQgYnlcclxuICAgICAgICBndGlsZXM6IG5ld0d0aWxlcywgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBmb3IgcHJpc29uZXJzIHJhY2tcclxuICAgICAgICB0aWxlczogbmV3VGlsZXMgLy8gd2UgcGlja2VkIG5ldyB0aWxlcyBzbyB0aWxlIHBvb2wgY2hhbmdlZFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpc1BsYXlWYWxpZCgpIHtcclxuICAgIGlmIChzcXVhcmVzWzddWzddID09PSBcIi5cIikge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJGaXJzdCBwbGF5IG11c3QgaGl0IGNlbnRlciBzcXVhcmVcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBsb3dyb3cgPSAxNTtcclxuICAgIGxldCBoaWdocm93ID0gLTE7XHJcbiAgICBsZXQgbG93Y29sID0gMTU7XHJcbiAgICBsZXQgaGlnaGNvbCA9IC0xO1xyXG4gICAgZm9yICh2YXIgcj0wOyByIDwgMTU7ICsrcikge1xyXG4gICAgICBmb3IgKHZhciBjPTA7IGMgPCAxNTsgKytjKSB7XHJcbiAgICAgICAgaWYgKHNxdWFyZXNbcl1bY10gIT09IFwiLlwiKSB7XHJcbiAgICAgICAgICBpZiAoIShyID4gMCAmJiBzcXVhcmVzW3ItMV1bY10gIT09IFwiLlwiKSAmJlxyXG4gICAgICAgICAgICEoYyA+IDAgJiYgc3F1YXJlc1tyXVtjLTFdICE9PSBcIi5cIikgJiZcclxuICAgICAgICAgICAhKHIgPCAxNCAmJiBzcXVhcmVzW3IrMV1bY10gIT09IFwiLlwiKSAmJlxyXG4gICAgICAgICAgICEoYyA8IDE0ICYmIHNxdWFyZXNbcl1bYysxXSAhPT0gXCIuXCIpXHJcbiAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIkVhY2ggcGxheWVkIHRpbGUgbXVzdCBiZSBwYXJ0IG9mIGEgd29yZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICBpZiAoc25hcHNob3Quc3F1YXJlc1tyXVtjXSA9PT0gXCIuXCIpIHtcclxuICAgICAgICAgICAgIC8vIFRoaXMgc3F1YXJlIHdhcyBwbGF5ZWQgb24gdGhpcyB0dXJuXHJcbiAgICAgICAgICAgICBpZiAociA8IGxvd3JvdykgeyBsb3dyb3cgPSByO31cclxuICAgICAgICAgICAgIGlmIChyID4gaGlnaHJvdykgeyBoaWdocm93ID0gcjt9XHJcbiAgICAgICAgICAgICBpZiAoYyA8IGxvd2NvbCkgeyBsb3djb2wgPSBjO31cclxuICAgICAgICAgICAgIGlmIChjID4gaGlnaGNvbCkgeyBoaWdoY29sID0gYzt9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobG93cm93ID09PSAxNSkge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJZb3UgZGlkbid0IHBsYXkgYW55IHRpbGVzXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAobG93cm93ICE9PSBoaWdocm93ICYmIGxvd2NvbCAhPT0gaGlnaGNvbCkge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJUaWxlcyBwbGF5ZWQgbXVzdCBiZSBpbiBhIHN0cmFpZ2h0IGxpbmVcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBwbGF5dGhydSA9IGZhbHNlO1xyXG4gICAgbGV0IGhvb2ttYWRlID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciByID0gbG93cm93OyByIDw9IGhpZ2hyb3c7ICsrcikge1xyXG4gICAgICBmb3IgKHZhciBjID0gbG93Y29sOyBjIDw9IGhpZ2hjb2w7ICsrYykge1xyXG4gICAgICAgIGlmIChzcXVhcmVzW3JdW2NdID09PSBcIi5cIikge1xyXG4gICAgICAgICAgd2luZG93LmFsZXJ0KFwiVGhlcmUgaXMgYSBnYXAgaW4geW91ciB3b3JkXCIpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc25hcHNob3Quc3F1YXJlc1tyXVtjXSAhPT0gXCIuXCIpIHtcclxuICAgICAgICAgIHBsYXl0aHJ1ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiByID4gMCAmJiBzcXVhcmVzW3ItMV1bY10gIT09IFwiLlwiKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChsb3dyb3cgPT09IGhpZ2hyb3cgJiYgciA8IDE0ICYmIHNxdWFyZXNbcisxXVtjXSAhPT0gXCIuXCIpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBjID4gMCAmJiBzcXVhcmVzW3JdW2MtMV0gIT09IFwiLlwiKSB7IGhvb2ttYWRlID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChsb3djb2wgPT09IGhpZ2hjb2wgJiYgYyA8IDE0ICYmIHNxdWFyZXNbcl1bYysxXSAhPT0gXCIuXCIpIHsgaG9va21hZGUgPSB0cnVlOyB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIENoZWNrIHBsYXkgdG8gb3IgZnJvbSBhIHRpbGUgKHBsYXkgdGhyb3VnaCBidXQgbm90IGVpdGhlciBzaWRlKVxyXG4gICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiBsb3djb2wgPiAwICYmIHNuYXBzaG90LnNxdWFyZXNbbG93cm93XVtsb3djb2wtMV0gIT09IFwiLlwiKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgaWYgKGxvd3JvdyA9PT0gaGlnaHJvdyAmJiBoaWdoY29sIDwgMTQgJiYgc25hcHNob3Quc3F1YXJlc1tsb3dyb3ddW2hpZ2hjb2wrMV0gIT09IFwiLlwiKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBsb3dyb3cgPiAwICYmIHNuYXBzaG90LnNxdWFyZXNbbG93cm93LTFdW2xvd2NvbF0gIT09IFwiLlwiKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgaWYgKGxvd2NvbCA9PT0gaGlnaGNvbCAmJiBoaWdocm93IDwgMTQgJiYgc25hcHNob3Quc3F1YXJlc1toaWdocm93KzFdW2xvd2NvbF0gIT09IFwiLlwiKSB7IHBsYXl0aHJ1ID0gdHJ1ZTsgfVxyXG4gICAgaWYgKCFwbGF5dGhydSAmJiAhaG9va21hZGUgJiYgc25hcHNob3Quc3F1YXJlc1s3XVs3XSAhPT0gXCIuXCIpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiV29yZHMgbXVzdCBiZSBjb25uZWN0ZWRcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVjYWxsVGlsZXMgPSAoKSA9PiB7XHJcbiAgICBzZXRTcXVhcmVzKFsuLi5zbmFwc2hvdC5zcXVhcmVzXSk7XHJcbiAgICBzZXRVc2VkYnkoWy4uLnNuYXBzaG90LnVzZWRieV0pO1xyXG4gICAgc2V0UHRpbGVzKFsuLi5zbmFwc2hvdC5wdGlsZXNdKTtcclxuICAgIHNldEd0aWxlcyhbLi4uc25hcHNob3QuZ3RpbGVzXSk7XHJcbiAgICBzZXRTZWxlY3Rpb24oLTEpO1xyXG4gICAgc2V0Q3VycmVudGNvb3JkcyhbXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHJpc29uZXJQYXNzID0gKCkgPT4ge1xyXG4gICAgcmVjYWxsVGlsZXMoKTsgLy8gSW4gY2FzZSB0aGV5IHB1dCBzb21lIHRpbGVzIG9uIHRoZSBib2FyZCBiZWZvcmUgY2xpY2tpbmcgUGFzc1xyXG4gICAgc2V0V2hvc2V0dXJuKFwiR1wiKTtcclxuICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgZnVuYzogXCJlcHRcIiwgLy8gZW5kIHByaXNvbmVycyB0dXJuXHJcbiAgICAgICAgc3F1YXJlczogc25hcHNob3Quc3F1YXJlcywgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gc3F1YXJlc1xyXG4gICAgICAgIHVzZWRieTogc25hcHNob3QudXNlZGJ5LCAvLyByZXZlcnQgdG8gc3RhcnQgb2YgdHVybiB1c2VkIGJ5XHJcbiAgICAgICAgcHRpbGVzOiBzbmFwc2hvdC5wdGlsZXMsIC8vIHByaXNvbmVycyByYWNrIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgdGlsZXM6IHRpbGVzLCAvLyB0aWxlIHBvb2wgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICByZXNjdWVzOiByZXNjdWVzIC8vIG5vIHJlc2N1ZXMgb24gYSBwYXNzXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ3VhcmRzUGFzcyA9ICgpID0+IHtcclxuICAgIHJlY2FsbFRpbGVzKCk7IC8vIEluIGNhc2UgdGhleSBwdXQgc29tZSB0aWxlcyBvbiB0aGUgYm9hcmQgYmVmb3JlIGNsaWNraW5nIFBhc3NcclxuICAgIHNldFdob3NldHVybihcIlBcIik7XHJcbiAgICBjbGllbnQuc2VuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgIGZ1bmM6IFwiZWd0XCIsIC8vIGVuZCBndWFyZHMgdHVyblxyXG4gICAgICAgIHNxdWFyZXM6IHNuYXBzaG90LnNxdWFyZXMsIC8vIHJldmVydCB0byBzdGFydCBvZiB0dXJuIHNxdWFyZXNcclxuICAgICAgICB1c2VkYnk6IHNuYXBzaG90LnVzZWRieSwgLy8gcmV2ZXJ0IHRvIHN0YXJ0IG9mIHR1cm4gdXNlZCBieVxyXG4gICAgICAgIGd0aWxlczogc25hcHNob3QuZ3RpbGVzLCAvLyBndWFyZHMgcmFjayBkaWQgbm90IGNoYW5nZVxyXG4gICAgICAgIHRpbGVzOiB0aWxlcyAvLyB0aWxlIHBvb2wgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXF1ZXN0R2FtZURhdGEgPSAocGxheWVydHlwZSkgPT4ge1xyXG4gICAgY2xpZW50LnNlbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICBmdW5jOiBcInJlcXVlc3RnYW1lZGF0YVwiLCAvLyByZXF1ZXN0IGdhbWUgZGF0YVxyXG4gICAgICAgIHJlcXVlc3RvcjogcHJpc29uZXJzT3JHdWFyZHNcclxuICAgICAgfSlcclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAocHJpc29uZXJzT3JHdWFyZHMgIT09IHdob3NldHVybikge3JldHVybjt9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgd2hvc2V0dXJuID09PSBcIlBcIiA/IGVuZFByaXNvbmVyc1R1cm4oKSA6IGVuZEd1YXJkc1R1cm4oKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGxldHRlcnRlc3QgPSAvXltBLVphLXpcXD9dJC87IC8vIHNpbmdsZSBsZXR0ZXIgb3IgcXVlc3Rpb24gbWFyayBrZXkgcHJlc3NlZFxyXG4gICAgaWYgKGV2ZW50LmtleS5tYXRjaChsZXR0ZXJ0ZXN0KSkge1xyXG4gICAgICBsZXQgbGV0dGVyID0gZXZlbnQua2V5LnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgIGxldCByYWNrID0gd2hvc2V0dXJuID09PSBcIlBcIiA/IHB0aWxlcyA6IGd0aWxlcztcclxuICAgICAgbGV0IG5ld1NlbGVjdGlvbiA9IHJhY2suaW5kZXhPZihsZXR0ZXIpO1xyXG4gICAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMSkge1xyXG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IHJhY2suaW5kZXhPZihcIj9cIik7IC8vIFVzZSB0aGUgYmxhbmsgaWYgdGhleSBoYXZlIG9uZVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChuZXdTZWxlY3Rpb24gPiAtMSkgeyAvLyBQcmVzc2VkIGxldHRlciBpcyBvbiB0aGUgcmFja1xyXG4gICAgICAgIGxldCByb3cgPSByY2RbMF07XHJcbiAgICAgICAgbGV0IGNvbCA9IHJjZFsxXTtcclxuICAgICAgICBsZXQgZGlyID0gcmNkWzJdO1xyXG4gICAgICAgIGlmIChyb3cgPi0xICYmIGNvbCA+IC0xICYmIGRpciAhPT0gXCJcIikgeyAvLyByb3csIGNvbCwgZGlyIGFyZSBzZXQgdG8gYWNjZXB0IGtleXN0cm9rZVxyXG4gICAgICAgICAgLy8gTmVlZCB0byBmaWd1cmUgb3V0IG5leHQgc3FhdXJlIHRvIGF1dG8tcGxhY2UgYSB0aWxlXHJcbiAgICAgICAgICBsZXQgbmV3UmNkID0gcmNkO1xyXG4gICAgICAgICAgaWYgKGRpciA9PT0gXCJyXCIpIHsgLy8gcGxheWluZyByaWdodHdhcmRzXHJcbiAgICAgICAgICAgIGxldCBuZXdjID0gLTE7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGMgPSBjb2wgKyAxOyBjIDwgMTUgJiYgbmV3YyA9PT0gLTE7IGMrKykge1xyXG4gICAgICAgICAgICAgIGlmIChzcXVhcmVzW3Jvd11bY10gPT09IFwiLlwiKSB7bmV3YyA9IGM7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuZXdjID09PSAtMSkge1xyXG4gICAgICAgICAgICAgIG5ld1JjZCA9IFstMSwtMSxcIlwiXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBuZXdSY2QgPSBbcm93LCBuZXdjLCBcInJcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyb3csY29sLG5ld1NlbGVjdGlvbixuZXdSY2QpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZGlyID09PSBcImRcIikgeyAvLyBwbGF5aW5nIGRvd253YXJkc1xyXG4gICAgICAgICAgICBsZXQgbmV3ciA9IC0xO1xyXG4gICAgICAgICAgICBmb3IgKHZhciByID0gcm93ICsgMTsgciA8IDE1ICYmIG5ld3IgPT09IC0xOyByKyspIHtcclxuICAgICAgICAgICAgICBpZiAoc3F1YXJlc1tyXVtjb2xdID09PSBcIi5cIikge25ld3IgPSByO31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobmV3ciA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICBuZXdSY2QgPSBbLTEsLTEsXCJcIl07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbmV3UmNkID0gW25ld3IsIGNvbCwgXCJkXCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socm93LGNvbCxuZXdTZWxlY3Rpb24sbmV3UmNkKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkJhY2tzcGFjZVwiICYmIGN1cnJlbnRjb29yZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAvLyBTYW1lIGFzIGNsaWNraW5nIG9uIGEgcGxheWVkLXRoaXMtbW92ZSB0aWxlIGluIHRlcm1zIG9mIHJldHVybmluZyB0aGUgdGlsZSB0byB0aGUgcmFja1xyXG4gICAgICAvLyBIb3dldmVyIHdlIGFsc28gd2FudCB0byBzZXQgdXAgcmNkIHNvIHRoZXkgY2FuIHByZXNzIHRoZSBrZXkgdGhleSBtZWFudCBhbmQgY29udGludWVcclxuICAgICAgbGV0IGNvb3JkID0gY3VycmVudGNvb3Jkc1tjdXJyZW50Y29vcmRzLmxlbmd0aCAtIDFdOyAvLyB0aWxlIHRvIHJldHVybiB0byByYWNrXHJcbiAgICAgIGxldCBuZXdDdXJyZW50Y29vcmRzID0gWy4uLmN1cnJlbnRjb29yZHNdO1xyXG4gICAgICBsZXQgbmV3UHRpbGVzID0gWy4uLnB0aWxlc107XHJcbiAgICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzXTtcclxuICAgICAgbGV0IG5ld1VzZWRieSA9IFsuLi51c2VkYnldO1xyXG4gICAgICBsZXQgbmV3U3F1YXJlcyA9IFsuLi5zcXVhcmVzXTtcclxuICAgICAgbGV0IG5ld1JjZCA9IFstMSwtMSxcIlwiXTtcclxuICAgICAgbGV0IG5ld1NlbGVjdGlvbiA9IHNlbGVjdGlvbjtcclxuICAgICAgbmV3Q3VycmVudGNvb3Jkcy5zcGxpY2UoY3VycmVudGNvb3Jkcy5sZW5ndGgtMSwxKTtcclxuICAgICAgbGV0IHJvdyA9IHBhcnNlSW50KGNvb3JkLnNwbGl0KFwiLVwiKVswXSk7XHJcbiAgICAgIGxldCBjb2wgPSBwYXJzZUludChjb29yZC5zcGxpdChcIi1cIilbMV0pO1xyXG4gICAgICBsZXQgcmV0dXJuZWRUaWxlID0gc3F1YXJlc1tyb3ddW2NvbF07XHJcbiAgICAgIGlmICh3aG9zZXR1cm4gPT09IFwiUFwiKSB7XHJcbiAgICAgICAgbmV3UHRpbGVzLnB1c2gocmV0dXJuZWRUaWxlKTtcclxuICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdQdGlsZXMubGVuZ3RoLTE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3R3RpbGVzLnB1c2gocmV0dXJuZWRUaWxlKTtcclxuICAgICAgICBuZXdTZWxlY3Rpb24gPSBuZXdHdGlsZXMubGVuZ3RoLTE7XHJcbiAgICAgIH1cclxuICAgICAgbmV3VXNlZGJ5W3Jvd11bY29sXSA9IFwiXCI7XHJcbiAgICAgIG5ld1NxdWFyZXNbcm93XVtjb2xdID0gXCIuXCI7XHJcbiAgICAgIGxldCBkaXIgPSByY2RbMl07XHJcbiAgICAgIGlmIChkaXIgIT09IFwiXCIpIHtcclxuICAgICAgICAvLyBkaXJlY3Rpb24gd2FzIHNldCBzbyBrZWVwIGl0XHJcbiAgICAgICAgbmV3UmNkID0gW3Jvdyxjb2wsZGlyXTtcclxuICAgICAgICBpZiAoY3VycmVudGNvb3Jkcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IC0xOyAvLyBpZiB0aGV5IGJhY2tzcGFjZSBhbGwgdGhlIGxldHRlcnMgb2ZmIGxlYXZlIHJhY2sgdGlsZSB1bnNlbGVjdGVkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNldEN1cnJlbnRjb29yZHMobmV3Q3VycmVudGNvb3Jkcyk7XHJcbiAgICAgIHNldEd0aWxlcyhuZXdHdGlsZXMpO1xyXG4gICAgICBzZXRQdGlsZXMobmV3UHRpbGVzKTtcclxuICAgICAgc2V0U3F1YXJlcyhuZXdTcXVhcmVzKTtcclxuICAgICAgc2V0VXNlZGJ5KG5ld1VzZWRieSk7XHJcbiAgICAgIHNldFJjZChuZXdSY2QpO1xyXG4gICAgICBzZXRTZWxlY3Rpb24obmV3U2VsZWN0aW9uKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHByaXNvbmJyZWFrXCIgb25LZXlEb3duQ2FwdHVyZT17aGFuZGxlS2V5RG93bn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMSBnYW1laWRcIj5cclxuICAgICAgICAgIEdhbWUgaWQ6IHtnYW1laWR9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgcGJ0aXRsZVwiPlxyXG4gICAgICAgICAgUHJpc29uIEJyZWFrXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnJ1bl9jaXJjbGU8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMSBwYmhvbWVsaW5rXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwicmVxdWVzdEdhbWVEYXRhXCJcclxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJTeW5jIHdpdGggb3Bwb25lbnRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICByZXF1ZXN0R2FtZURhdGEocHJpc29uZXJzT3JHdWFyZHMpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c3luYzwvaT5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17XCIuLi8uLi9cIn0+XHJcbiAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT48L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTIgcGJQcmlzb25lcnNcIj5cclxuICAgICAgICAgIDxQcmlzb25lcnNcclxuICAgICAgICAgICAgcHRpbGVzPXtwdGlsZXN9XHJcbiAgICAgICAgICAgIHdob3NldHVybj17d2hvc2V0dXJufVxyXG4gICAgICAgICAgICBzZWxlY3Rpb249e3NlbGVjdGlvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KHRpKSA9PiBoYW5kbGVQcmlzb25lclRpbGVDbGljayh0aSl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tGaW5pc2hUdXJuPXsoKSA9PiBlbmRQcmlzb25lcnNUdXJuKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tUaWxlUmVjYWxsPXsoKSA9PiByZWNhbGxUaWxlcygpfVxyXG4gICAgICAgICAgICBvbkNsaWNrVGlsZUV4Y2hhbmdlPXsoKSA9PiBzd2FwUHJpc29uZXJzVGlsZXMoKX1cclxuICAgICAgICAgICAgb25DbGlja1Bhc3NQbGF5PXsoKSA9PiBwcmlzb25lclBhc3MoKX1cclxuICAgICAgICAgICAgcmVzY3Vlcz17cmVzY3Vlc31cclxuICAgICAgICAgICAgcHJpc29uZXJzT3JHdWFyZHM9e3ByaXNvbmVyc09yR3VhcmRzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgIHtwcmlzb25lcnNPckd1YXJkcyA9PT0gd2hvc2V0dXJuID9cclxuICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICBzcXVhcmVzPXtzcXVhcmVzfVxyXG4gICAgICAgICAgICB1c2VkYnk9e3VzZWRieX1cclxuICAgICAgICAgICAgcmNkPXtyY2R9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhyaSwgY2kpID0+IGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socmksIGNpLCAtMSxudWxsKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgc3F1YXJlcz17c3F1YXJlc31cclxuICAgICAgICAgICAgdXNlZGJ5PXt1c2VkYnl9XHJcbiAgICAgICAgICAgIHJjZD17cmNkfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7fX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMiBwYkd1YXJkc1wiPlxyXG4gICAgICAgICAgPEd1YXJkc1xyXG4gICAgICAgICAgICBndGlsZXM9e2d0aWxlc31cclxuICAgICAgICAgICAgd2hvc2V0dXJuPXt3aG9zZXR1cm59XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0aW9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IGhhbmRsZUd1YXJkVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgb25DbGlja0ZpbmlzaFR1cm49eygpID0+IGVuZEd1YXJkc1R1cm4oKX1cclxuICAgICAgICAgICAgb25DbGlja1RpbGVSZWNhbGw9eygpID0+IHJlY2FsbFRpbGVzKCl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tUaWxlRXhjaGFuZ2U9eygpID0+IHN3YXBHdWFyZHNUaWxlcygpfVxyXG4gICAgICAgICAgICBvbkNsaWNrUGFzc1BsYXk9eygpID0+IGd1YXJkc1Bhc3MoKX1cclxuICAgICAgICAgICAgcHJpc29uZXJzT3JHdWFyZHM9e3ByaXNvbmVyc09yR3VhcmRzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yXCI+XHJcbiAgICAgICAgICA8U2hvd1Vuc2VlblRpbGVzIHRpbGVzPXt0aWxlc30gb3RoZXJ0aWxlcz17cHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gZ3RpbGVzIDogcHRpbGVzfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFNob3dVbnNlZW5UaWxlcyA9IChwcm9wcykgPT4geyAvLyB0aWxlcyA9IHRpbGVzIGluIGJhZywgb3RoZXJ0aWxlcyA9IHRpbGVzIG9uIG90aGVyIHBsYXllcnMgcmFja1xyXG4gIGxldCB1bnNlZW5UaWxlcyA9IFsuLi5wcm9wcy50aWxlcywgLi4ucHJvcHMub3RoZXJ0aWxlc107XHJcbiAgdW5zZWVuVGlsZXMuc29ydCgpO1xyXG4gIGlmICh1bnNlZW5UaWxlc1swXSA9PT0gXCI/XCIpIHtcclxuICAgICAgdW5zZWVuVGlsZXMuc3BsaWNlKDAsMSlcclxuICAgICAgdW5zZWVuVGlsZXMucHVzaChcIj9cIilcclxuICB9XHJcbiAgaWYgKHVuc2VlblRpbGVzWzBdID09PSBcIj9cIikge1xyXG4gICAgICB1bnNlZW5UaWxlcy5zcGxpY2UoMCwxKVxyXG4gICAgICB1bnNlZW5UaWxlcy5wdXNoKFwiP1wiKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVwb29sXCI+XHJcbiAgICAgIDxoMz5USUxFUzwvaDM+XHJcbiAgICAgIHt1bnNlZW5UaWxlcy5tYXAoKHQsIHRpKSA9PiAoXHJcbiAgICAgICAgPHNwYW4ga2V5PXtgdGlsZSR7dGl9YH0+XHJcbiAgICAgICAgICB7dGkgPiAwICYmIHQgIT09IHVuc2VlblRpbGVzW3RpIC0gMV0gPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcG9vbERpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJUaWxlcG9vbFRpbGVcIj57dH08L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBSYWNrVGlsZSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9e3Byb3BzLnRpbGVjbGFzc30gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIHtwcm9wcy50aWxldmFsdWV9XHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEZpbmlzaFR1cm5CdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkZpbmlzaFR1cm5cIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5jaGVjazwvaT5GaW5pc2ggVHVyblxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRpbGVSZWNhbGxCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYlJlY2FsbFRpbGVzXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+dW5kbzwvaT5SZWNhbGwgVGlsZXNcclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBUaWxlRXhjaGFuZ2VCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkV4Y2hhbmdlVGlsZXNcIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5zZW50aW1lbnRfdmVyeV9kaXNzYXRpc2ZpZWQ8L2k+RXhjaGFuZ2UgVGlsZXNcclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBQYXNzUGxheUJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiUGFzc1BsYXlcIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5zZW50aW1lbnRfbmV1dHJhbDwvaT5QYXNzXHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUHJpc29uZXJzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyVGlsZSA9ICh0aWxlY2xhc3MsIHRpbGVpbmRleCwgdGlsZXZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJQXCIgP1xyXG4gICAgICA8UmFja1RpbGVcclxuICAgICAgICBrZXk9e3RpbGVjbGFzcyArIFN0cmluZyh0aWxlaW5kZXgpfVxyXG4gICAgICAgIHRpbGVjbGFzcz17dGlsZWNsYXNzfVxyXG4gICAgICAgIHRpbGV2YWx1ZT17dGlsZXZhbHVlfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2sodGlsZWluZGV4KX1cclxuICAgICAgLz5cclxuICAgICAgOlxyXG4gICAgICA8UmFja1RpbGVcclxuICAgICAgICBrZXk9e3RpbGVjbGFzcyArIFN0cmluZyh0aWxlaW5kZXgpfVxyXG4gICAgICAgIHRpbGVjbGFzcz17dGlsZWNsYXNzfVxyXG4gICAgICAgIHRpbGV2YWx1ZT17dGlsZXZhbHVlfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5hbGVydChcIk5vIHBlZWtpbmchXCIpfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJGaW5pc2hUdXJuID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxwPjxGaW5pc2hUdXJuQnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tGaW5pc2hUdXJuKCl9IC8+PC9wPjtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJSZWNhbGxUaWxlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiA8cD48VGlsZVJlY2FsbEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrVGlsZVJlY2FsbCgpfSAvPjwvcD47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRXhjaGFuZ2VUaWxlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiA8cD48VGlsZUV4Y2hhbmdlQnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tUaWxlRXhjaGFuZ2UoKX0gLz48L3A+O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclBhc3NQbGF5ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxwPjxQYXNzUGxheUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrUGFzc1BsYXkoKX0gLz48L3A+O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckZyZWVkUHJpc29uZXJzID0gKGNvdW50KSA9PiB7XHJcbiAgICBsZXQgZHVtYiA9IEFycmF5KGNvdW50KS5maWxsKFwibm9uc2Vuc2VcIik7XHJcbiAgICByZXR1cm4gZHVtYi5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICA8c3BhbiBrZXk9e3ZhbHVlICsgU3RyaW5nKGluZGV4KX0+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiL2JyZWFrZnJlZS5wbmdcIlxyXG4gICAgICAgICAgYWx0PVwiSSdtIGZyZWUhIEknbSBmcmVlIVwiXHJcbiAgICAgICAgICB3aWR0aD1cIjEwMFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJwbGF5ZXJUaXRsZVwiPlBSSVNPTkVSUzxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cnVuX2NpcmNsZSBydW5fY2lyY2xlIHJ1bl9jaXJjbGU8L2k+PC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJwYlRpbGVyYWNrXCI+XHJcbiAgICAgICAge3Byb3BzLnB0aWxlcy5tYXAoKHQsIHRpKSA9PlxyXG4gICAgICAgICAgcmVuZGVyVGlsZShcclxuICAgICAgICAgICAgcHJvcHMud2hvc2V0dXJuID09PSBcIlBcIiAmJiBwcm9wcy5zZWxlY3Rpb24gPT09IHRpXHJcbiAgICAgICAgICAgICAgPyBcInBiVGlsZU9uUmFja1NlbGVjdGVkUFwiXHJcbiAgICAgICAgICAgICAgOiBcInBiVGlsZU9uUmFja1BcIixcclxuICAgICAgICAgICAgdGksXHJcbiAgICAgICAgICAgIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IHQgOiBcIipcIlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvcD5cclxuICAgICAge3Byb3BzLndob3NldHVybiA9PT0gXCJQXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gcmVuZGVyRmluaXNoVHVybigpIDogPD48Lz59XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiUFwiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IHJlbmRlclJlY2FsbFRpbGVzKCkgOiA8PjwvPn1cclxuICAgICAge3Byb3BzLndob3NldHVybiA9PT0gXCJQXCIgJiYgcHJvcHMucHJpc29uZXJzT3JHdWFyZHMgPT09IFwiUFwiID8gcmVuZGVyRXhjaGFuZ2VUaWxlcygpIDogPD48Lz59XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiUFwiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIlBcIiA/IHJlbmRlclBhc3NQbGF5KCkgOiA8PjwvPn1cclxuICAgICAgPHA+XHJcbiAgICAgICAgUmVzY3VlcyBtYWRlOiB7cHJvcHMucmVzY3Vlc31cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICB7cmVuZGVyRnJlZWRQcmlzb25lcnMocHJvcHMucmVzY3Vlcyl9XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBHdWFyZHMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByZW5kZXJUaWxlID0gKHRpbGVjbGFzcywgdGlsZWluZGV4LCB0aWxldmFsdWUpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiA/XHJcbiAgICAgIDxSYWNrVGlsZVxyXG4gICAgICAgIGtleT17dGlsZWNsYXNzICsgU3RyaW5nKHRpbGVpbmRleCl9XHJcbiAgICAgICAgdGlsZWNsYXNzPXt0aWxlY2xhc3N9XHJcbiAgICAgICAgdGlsZXZhbHVlPXt0aWxldmFsdWV9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMub25DbGljayh0aWxlaW5kZXgpfVxyXG4gICAgICAvPlxyXG4gICAgICA6XHJcbiAgICAgIDxSYWNrVGlsZVxyXG4gICAgICAgIGtleT17dGlsZWNsYXNzICsgU3RyaW5nKHRpbGVpbmRleCl9XHJcbiAgICAgICAgdGlsZWNsYXNzPXt0aWxlY2xhc3N9XHJcbiAgICAgICAgdGlsZXZhbHVlPXt0aWxldmFsdWV9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93LmFsZXJ0KFwiTm8gcGVla2luZyFcIil9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckZpbmlzaFR1cm4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPEZpbmlzaFR1cm5CdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja0ZpbmlzaFR1cm4oKX0gLz47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUmVjYWxsVGlsZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPFRpbGVSZWNhbGxCdXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGlja1RpbGVSZWNhbGwoKX0gLz47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRXhjaGFuZ2VUaWxlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiA8VGlsZUV4Y2hhbmdlQnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tUaWxlRXhjaGFuZ2UoKX0gLz47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUGFzc1BsYXkgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPFBhc3NQbGF5QnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2tQYXNzUGxheSgpfSAvPjtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicGxheWVyVGl0bGVcIj5HVUFSRFM8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnNlY3VyaXR5IHNlY3VyaXR5IHNlY3VyaXR5PC9pPjwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgIHtwcm9wcy5ndGlsZXMubWFwKCh0LCB0aSkgPT5cclxuICAgICAgICAgIHJlbmRlclRpbGUoXHJcbiAgICAgICAgICAgIHByb3BzLndob3NldHVybiA9PT0gXCJHXCIgJiYgcHJvcHMuc2VsZWN0aW9uID09PSB0aVxyXG4gICAgICAgICAgICAgID8gXCJwYlRpbGVPblJhY2tTZWxlY3RlZEdcIlxyXG4gICAgICAgICAgICAgIDogXCJwYlRpbGVPblJhY2tHXCIsXHJcbiAgICAgICAgICAgIHRpLFxyXG4gICAgICAgICAgICBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJHXCIgPyB0IDogXCIqXCJcclxuICAgICAgICAgIClcclxuICAgICAgICApfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiR1wiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiA/IHJlbmRlckZpbmlzaFR1cm4oKSA6IDw+PC8+fVxyXG4gICAgICB7cHJvcHMud2hvc2V0dXJuID09PSBcIkdcIiAmJiBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJHXCIgPyByZW5kZXJSZWNhbGxUaWxlcygpIDogPD48Lz59XHJcbiAgICAgIHtwcm9wcy53aG9zZXR1cm4gPT09IFwiR1wiICYmIHByb3BzLnByaXNvbmVyc09yR3VhcmRzID09PSBcIkdcIiA/IHJlbmRlckV4Y2hhbmdlVGlsZXMoKSA6IDw+PC8+fVxyXG4gICAgICB7cHJvcHMud2hvc2V0dXJuID09PSBcIkdcIiAmJiBwcm9wcy5wcmlzb25lcnNPckd1YXJkcyA9PT0gXCJHXCIgPyByZW5kZXJQYXNzUGxheSgpIDogPD48Lz59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9