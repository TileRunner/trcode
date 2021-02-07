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


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\pb\\prisonbreak2.js";


const escapehatches = ["0-0", "0-7", "0-14", "7-0", "7-14", "14-0", "14-7", "14-14"]; // coords of escape hatches

const initialtiles = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z', '?', '?']; // initial tile pool

function PrisonBreak() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Game, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, this);
}
_c = PrisonBreak;

function Square(props) {
  // squareusedby, ri, ci, c, onClick
  // need squareusedby to pick css className corresponding to who played the tile on the square
  // need ri, ci to display alternating characters on unused squares
  // need c to represent which tile is on the square, if any
  // need onClick to handle square click at a higher level
  const usedbyclass = props.squareusedby === "P" ? "pbSquareUsedByPrisoners" : "pbSquareUsedByGuards";
  const tdclass = props.c !== "." ? usedbyclass : props.ri === 7 && props.ci === 7 ? "pbSquareCenterSquare" : (props.ri === 0 || props.ri === 7 || props.ri === 14) && (props.ci === 0 || props.ci === 7 || props.ci === 14) ? "pbSquareEscapeHatch" : props.ri % 2 === props.ci % 2 ? "pbSquare" : "pbSquare2";
  const tdvalue = props.c !== "." ? props.c : tdclass === "pbSquareCenterSquare" ? "✰" : tdclass === "pbSquareEscapeHatch" ? "💫" : props.ri % 2 === props.ci % 2 ? "⎔" : "✦";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: tdclass,
        onClick: props.onClick,
        children: tdvalue
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, this);
}

_c2 = Square;

class Board extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  renderSquare(ri, ci, c, squareusedby) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Square, {
        c: c,
        ci: ci,
        ri: ri,
        squareusedby: squareusedby,
        onClick: () => this.props.onClick(ri, ci)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this)
    }, `Square${ri}-${ci}`, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this);
  }

  renderRow(ri) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
      className: "row pbRow",
      children: this.props.squares[ri].map((c, ci) => this.renderSquare(ri, ci, c, this.props.usedby[ri][ci]))
    }, `BoardRow${ri}`, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, this);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      className: "pbBoard",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: this.props.squares.map((r, ri) => this.renderRow(ri))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, this);
  }

}

class Game extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    let tiles = [...initialtiles];
    let ptiles = [];
    let gtiles = [];

    while (ptiles.length < 7) {
      let rand = Math.floor(Math.random() * tiles.length);
      ptiles.push(tiles[rand]);
      tiles.splice(rand, 1);
      rand = Math.floor(Math.random() * tiles.length);
      gtiles.push(tiles[rand]);
      tiles.splice(rand, 1);
    }

    ptiles.sort();
    gtiles.sort();
    let squares = Array(15).fill(Array(15).fill('.'));
    let usedby = Array(15).fill(Array(15).fill(''));
    this.state = {
      squares: squares,
      // squares on the game board
      usedby: usedby,
      // who put a tile on a square
      tiles: tiles,
      selection: -1,
      // which tile from the tile rack in play is selected
      ptiles: ptiles,
      // prisoners tiles
      gtiles: gtiles,
      // guards tiles
      whoseturn: 'P',
      // prisoners play first
      currentcoords: [],
      // coords of play currently being made to support tile recall and play validation
      rescues: 0,
      // number of prisoners rescued
      snapshot: {
        // for reverting to start of move for tile recall or exchange logic
        squares: [...squares],
        usedby: [...usedby],
        ptiles: [...ptiles],
        gtiles: [...gtiles]
      }
    };
  }

  handleBoardSquareClick(ri, ci) {
    console.log("click on " + ri + ", " + ci);
    let selection = this.state.selection;
    let squares = this.state.squares;
    let squarevalue = squares[ri][ci];
    let whoseturn = this.state.whoseturn;
    let ptiles = this.state.ptiles;
    let gtiles = this.state.gtiles;
    let usedby = this.state.usedby;
    let currentcoords = this.state.currentcoords;
    let coord = String(ri) + "-" + String(ci);
    let cci = currentcoords.indexOf(coord);

    if (selection > -1 && squarevalue === ".") {
      // tile is selected from rack and clicked square is not used yet
      let newRow = [...squares[ri]];
      newRow[ci] = whoseturn === 'P' ? ptiles[selection] : gtiles[selection];
      squares[ri] = [...newRow];
      whoseturn === 'P' ? ptiles.splice(selection, 1) : gtiles.splice(selection, 1);
      let newUsedbyRow = [...usedby[ri]];
      newUsedbyRow[ci] = whoseturn;
      usedby[ri] = [...newUsedbyRow];
      selection = -1;
      this.setState({
        squares: squares,
        usedby: usedby,
        ptiles: ptiles,
        gtiles: gtiles,
        selection: selection,
        currentcoords: [...currentcoords, coord]
      });
    } else if (squarevalue !== "." && cci > -1) {
      // clicked square has a tile on it from the current move in progress
      // Assuming some good will from the users to click a tile they played
      if (whoseturn === 'P' && ptiles.length < 7 || whoseturn === 'G' && gtiles.length < 7) {
        whoseturn === 'P' ? ptiles.push(squarevalue) : gtiles.push(squarevalue);
        let newRow = [...squares[ri]];
        newRow[ci] = ".";
        squares[ri] = [...newRow];
        let newUsedbyRow = [...usedby[ri]];
        newUsedbyRow[ci] = "";
        usedby[ri] = [...newUsedbyRow];
        selection = whoseturn === 'P' ? ptiles.length - 1 : gtiles.length - 1;
        currentcoords.splice(cci, 1);
        this.setState({
          squares: squares,
          usedby: usedby,
          ptiles: ptiles,
          gtiles: gtiles,
          selection: selection,
          currentcoords: currentcoords
        });
      }
    }
  }

  handlePrisonerTileClick(tileindex) {
    // the index of ptiles
    if (this.state.whoseturn === 'P') {
      this.setState({
        selection: tileindex
      });
    } else {
      alert('It is not your turn');
    }
  }

  handleGuardTileClick(tileindex) {
    // the index of gtiles
    if (this.state.whoseturn === 'G') {
      this.setState({
        selection: tileindex
      });
    } else {
      alert('It is not your turn');
    }
  }

  endPrisonersTurn() {
    let rescues = this.state.rescues;

    for (var i = 0; i < this.state.currentcoords.length; i++) {
      if (escapehatches.indexOf(this.state.currentcoords[i]) > -1) {
        rescues++;
      }
    }

    let ptiles = [...this.state.ptiles];
    let tiles = [...this.state.tiles];

    while (ptiles.length < 7 && tiles.length > 0) {
      let rand = Math.floor(Math.random() * tiles.length);
      ptiles.push(tiles[rand]);
      tiles.splice(rand, 1);
    }

    ptiles.sort();
    let squares = this.state.squares;
    let usedby = this.state.usedby;
    let gtiles = this.state.gtiles;
    this.setState({
      whoseturn: 'G',
      selection: -1,
      currentcoords: [],
      rescues: rescues,
      ptiles: ptiles,
      tiles: tiles,
      snapshot: {
        squares: [...squares],
        usedby: [...usedby],
        ptiles: [...ptiles],
        gtiles: [...gtiles]
      }
    });
  }

  endGuardsTurn() {
    let gtiles = [...this.state.gtiles];
    let tiles = [...this.state.tiles];

    while (gtiles.length < 7 && tiles.length > 0) {
      let rand = Math.floor(Math.random() * tiles.length);
      gtiles.push(tiles[rand]);
      tiles.splice(rand, 1);
    }

    gtiles.sort();
    let snapsquares = [...this.state.squares];
    let snapusedby = [...this.state.usedby];
    let snapptiles = [...this.state.ptiles];
    let snapgtiles = [...gtiles];
    this.setState({
      whoseturn: 'P',
      selection: -1,
      currentcoords: [],
      gtiles: gtiles,
      tiles: tiles,
      snapshot: {
        squares: snapsquares,
        usedby: snapusedby,
        ptiles: snapptiles,
        gtiles: snapgtiles
      }
    });
  }

  recallTiles() {
    let squares = [...this.state.snapshot.squares];
    let usedby = [...this.state.snapshot.usedby];
    let ptiles = [...this.state.snapshot.ptiles];
    let gtiles = [...this.state.snapshot.gtiles];
    console.log("Tile recall " + ptiles.toString() + " : " + gtiles.toString());
    this.setState({
      selection: -1,
      currentcoords: [],
      squares: squares,
      usedby: usedby,
      ptiles: ptiles,
      gtiles: gtiles
    });
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: "container-fluid prisonbreak",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-11 pbtitle",
          children: "Prison Break"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-1 pbhomelink",
          "data-toggle": "tooltip",
          title: "Home",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: '../../',
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "\uD83C\uDFE0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2 pbPrisoners",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Prisoners, {
            ptiles: this.state.ptiles,
            whoseturn: this.state.whoseturn,
            selection: this.state.selection,
            onClick: ti => this.handlePrisonerTileClick(ti),
            onClickFinishTurn: () => this.endPrisonersTurn(),
            onClickTileRecall: () => this.recallTiles(),
            rescues: this.state.rescues
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 272,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-6",
          align: "center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {
            squares: this.state.squares,
            usedby: this.state.usedby,
            onClick: (ri, ci) => this.handleBoardSquareClick(ri, ci)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2 pbGuards",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Guards, {
            gtiles: this.state.gtiles,
            whoseturn: this.state.whoseturn,
            selection: this.state.selection,
            onClick: ti => this.handleGuardTileClick(ti),
            onClickFinishTurn: () => this.endGuardsTurn(),
            onClickTileRecall: () => this.recallTiles()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Tiles, {
            tiles: this.state.tiles
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 13
    }, this);
  }

}

function Tiles(props) {
  // there is a better way ^^^
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pbTilepool",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "TILE POOL"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 13
    }, this), props.tiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [ti > 0 && t !== props.tiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pbTilepoolDivider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 58
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbTilepoolTile",
        children: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 21
      }, this)]
    }, `tile${ti}`, true, {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 17
    }, this))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 311,
    columnNumber: 9
  }, this);
}

_c3 = Tiles;

function RackTile(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
    className: props.tileclass,
    onClick: props.onClick,
    children: props.tilevalue
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 325,
    columnNumber: 9
  }, this);
}

_c4 = RackTile;

function FinishTurnButton(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "pbFinishTurn",
    onClick: props.onClick,
    children: "Finish Turn"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 333,
    columnNumber: 9
  }, this);
}

_c5 = FinishTurnButton;

function TileRecallButton(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "pbRecallTiles",
    onClick: props.onClick,
    children: "Recall Tiles"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 341,
    columnNumber: 9
  }, this);
}

_c6 = TileRecallButton;

class Prisoners extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  renderTile(tileclass, tileindex, tilevalue) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
      tileclass: tileclass,
      tilevalue: tilevalue,
      onClick: () => this.props.onClick(tileindex)
    }, tileclass + String(tileindex), false, {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 13
    }, this);
  }

  renderFinishTurn() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
      onClick: () => this.props.onClickFinishTurn()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 13
    }, this);
  }

  renderRecallTiles() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
      onClick: () => this.props.onClickTileRecall()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 13
    }, this);
  }

  renderFreedPrisoners(count) {
    let dumb = Array(count).fill('nonsense');
    return dumb.map((value, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/breakfree.png",
        alt: "I'm free! I'm free!",
        width: "100",
        height: "100"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 21
      }, this)
    }, value + String(index), false, {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 17
    }, this));
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "PRISONERS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "pbTilerack",
        children: this.props.ptiles.map((t, ti) => this.renderTile(this.props.whoseturn === 'P' && this.props.selection === ti ? "pbTileOnRackSelectedP" : "pbTileOnRackP", ti, t))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 17
      }, this), this.props.whoseturn === 'P' ? this.renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), this.props.whoseturn === 'P' ? this.renderRecallTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Rescues made: ", this.props.rescues, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 401,
          columnNumber: 21
        }, this), this.renderFreedPrisoners(this.props.rescues)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 399,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 13
    }, this);
  }

}

class Guards extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  renderTile(tileclass, tileindex, tilevalue) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
      tileclass: tileclass,
      tilevalue: tilevalue,
      onClick: () => this.props.onClick(tileindex)
    }, tileclass + String(tileindex), false, {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 13
    }, this);
  }

  renderFinishTurn() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
      onClick: () => this.props.onClickFinishTurn()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 13
    }, this);
  }

  renderRecallTiles() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
      onClick: () => this.props.onClickTileRecall()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 13
    }, this);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "GUARDS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "pbTilerack",
        children: this.props.gtiles.map((t, ti) => this.renderTile(this.props.whoseturn === 'G' && this.props.selection === ti ? "pbTileOnRackSelectedG" : "pbTileOnRackG", ti, t))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 431,
        columnNumber: 17
      }, this), this.props.whoseturn === 'G' ? this.renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), this.props.whoseturn === 'G' ? this.renderRecallTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 13
    }, this);
  }

}

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "PrisonBreak");
$RefreshReg$(_c2, "Square");
$RefreshReg$(_c3, "Tiles");
$RefreshReg$(_c4, "RackTile");
$RefreshReg$(_c5, "FinishTurnButton");
$RefreshReg$(_c6, "TileRecallButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsyLmpzIl0sIm5hbWVzIjpbImVzY2FwZWhhdGNoZXMiLCJpbml0aWFsdGlsZXMiLCJQcmlzb25CcmVhayIsIlNxdWFyZSIsInByb3BzIiwidXNlZGJ5Y2xhc3MiLCJzcXVhcmV1c2VkYnkiLCJ0ZGNsYXNzIiwiYyIsInJpIiwiY2kiLCJ0ZHZhbHVlIiwib25DbGljayIsIkJvYXJkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXJTcXVhcmUiLCJyZW5kZXJSb3ciLCJzcXVhcmVzIiwibWFwIiwidXNlZGJ5IiwicmVuZGVyIiwiciIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsInRpbGVzIiwicHRpbGVzIiwiZ3RpbGVzIiwibGVuZ3RoIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzcGxpY2UiLCJzb3J0IiwiQXJyYXkiLCJmaWxsIiwic3RhdGUiLCJzZWxlY3Rpb24iLCJ3aG9zZXR1cm4iLCJjdXJyZW50Y29vcmRzIiwicmVzY3VlcyIsInNuYXBzaG90IiwiaGFuZGxlQm9hcmRTcXVhcmVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJzcXVhcmV2YWx1ZSIsImNvb3JkIiwiU3RyaW5nIiwiY2NpIiwiaW5kZXhPZiIsIm5ld1JvdyIsIm5ld1VzZWRieVJvdyIsInNldFN0YXRlIiwiaGFuZGxlUHJpc29uZXJUaWxlQ2xpY2siLCJ0aWxlaW5kZXgiLCJhbGVydCIsImhhbmRsZUd1YXJkVGlsZUNsaWNrIiwiZW5kUHJpc29uZXJzVHVybiIsImkiLCJlbmRHdWFyZHNUdXJuIiwic25hcHNxdWFyZXMiLCJzbmFwdXNlZGJ5Iiwic25hcHB0aWxlcyIsInNuYXBndGlsZXMiLCJyZWNhbGxUaWxlcyIsInRvU3RyaW5nIiwidGkiLCJUaWxlcyIsInQiLCJSYWNrVGlsZSIsInRpbGVjbGFzcyIsInRpbGV2YWx1ZSIsIkZpbmlzaFR1cm5CdXR0b24iLCJUaWxlUmVjYWxsQnV0dG9uIiwiUHJpc29uZXJzIiwicmVuZGVyVGlsZSIsInJlbmRlckZpbmlzaFR1cm4iLCJvbkNsaWNrRmluaXNoVHVybiIsInJlbmRlclJlY2FsbFRpbGVzIiwib25DbGlja1RpbGVSZWNhbGwiLCJyZW5kZXJGcmVlZFByaXNvbmVycyIsImNvdW50IiwiZHVtYiIsInZhbHVlIiwiaW5kZXgiLCJHdWFyZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxhQUFhLEdBQUcsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLE1BQWYsRUFBdUIsS0FBdkIsRUFBOEIsTUFBOUIsRUFBc0MsTUFBdEMsRUFBOEMsTUFBOUMsRUFBc0QsT0FBdEQsQ0FBdEIsQyxDQUFxRjs7QUFDckYsTUFBTUMsWUFBWSxHQUFHLENBQUMsR0FBRCxFQUFLLEdBQUwsRUFBUyxHQUFULEVBQWEsR0FBYixFQUFpQixHQUFqQixFQUFxQixHQUFyQixFQUF5QixHQUF6QixFQUE2QixHQUE3QixFQUFpQyxHQUFqQyxFQUNwQixHQURvQixFQUNoQixHQURnQixFQUNaLEdBRFksRUFDUixHQURRLEVBQ0osR0FESSxFQUNBLEdBREEsRUFDSSxHQURKLEVBQ1EsR0FEUixFQUNZLEdBRFosRUFDZ0IsR0FEaEIsRUFDb0IsR0FEcEIsRUFDd0IsR0FEeEIsRUFDNEIsR0FENUIsRUFDZ0MsR0FEaEMsRUFDb0MsR0FEcEMsRUFDd0MsR0FEeEMsRUFDNEMsR0FENUMsRUFDZ0QsR0FEaEQsRUFDb0QsR0FEcEQsRUFDd0QsR0FEeEQsRUFFcEIsR0FGb0IsRUFFaEIsR0FGZ0IsRUFFWixHQUZZLEVBRVIsR0FGUSxFQUVKLEdBRkksRUFFQSxHQUZBLEVBRUksR0FGSixFQUVRLEdBRlIsRUFFWSxHQUZaLEVBRWdCLEdBRmhCLEVBRW9CLEdBRnBCLEVBRXdCLEdBRnhCLEVBRTRCLEdBRjVCLEVBRWdDLEdBRmhDLEVBRW9DLEdBRnBDLEVBRXdDLEdBRnhDLEVBRTRDLEdBRjVDLEVBRWdELEdBRmhELEVBRW9ELEdBRnBELEVBRXdELEdBRnhELEVBRTRELEdBRjVELEVBRWdFLEdBRmhFLEVBR3BCLEdBSG9CLEVBR2hCLEdBSGdCLEVBR1osR0FIWSxFQUdSLEdBSFEsRUFHSixHQUhJLEVBR0EsR0FIQSxFQUdJLEdBSEosRUFHUSxHQUhSLEVBR1ksR0FIWixFQUdnQixHQUhoQixFQUdvQixHQUhwQixFQUd3QixHQUh4QixFQUc0QixHQUg1QixFQUdnQyxHQUhoQyxFQUdvQyxHQUhwQyxFQUd3QyxHQUh4QyxFQUc0QyxHQUg1QyxFQUdnRCxHQUhoRCxFQUdvRCxHQUhwRCxFQUlwQixHQUpvQixFQUloQixHQUpnQixFQUlaLEdBSlksRUFJUixHQUpRLEVBSUosR0FKSSxFQUlBLEdBSkEsRUFJSSxHQUpKLEVBSVEsR0FKUixFQUlZLEdBSlosRUFJZ0IsR0FKaEIsRUFJb0IsR0FKcEIsRUFJd0IsR0FKeEIsRUFJNEIsR0FKNUIsRUFJZ0MsR0FKaEMsRUFJb0MsR0FKcEMsRUFJd0MsR0FKeEMsRUFJNEMsR0FKNUMsRUFJZ0QsR0FKaEQsRUFJb0QsR0FKcEQsRUFJd0QsR0FKeEQsRUFJNEQsR0FKNUQsRUFJZ0UsR0FKaEUsRUFLcEIsR0FMb0IsRUFLaEIsR0FMZ0IsRUFLWixHQUxZLEVBS1IsR0FMUSxFQUtKLEdBTEksRUFLQSxHQUxBLEVBS0ksR0FMSixFQUtRLEdBTFIsQ0FBckIsQyxDQUtrQzs7QUFFbkIsU0FBU0MsV0FBVCxHQUF1QjtBQUNsQyxzQkFDSSxxRUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUdIO0tBSnVCQSxXOztBQU14QixTQUFTQyxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFFO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTUMsV0FBVyxHQUFHRCxLQUFLLENBQUNFLFlBQU4sS0FBdUIsR0FBdkIsR0FBNkIseUJBQTdCLEdBQXlELHNCQUE3RTtBQUNBLFFBQU1DLE9BQU8sR0FBR0gsS0FBSyxDQUFDSSxDQUFOLEtBQVksR0FBWixHQUFrQkgsV0FBbEIsR0FBZ0NELEtBQUssQ0FBQ0ssRUFBTixLQUFhLENBQWIsSUFBa0JMLEtBQUssQ0FBQ00sRUFBTixLQUFhLENBQS9CLEdBQW1DLHNCQUFuQyxHQUE0RCxDQUFDTixLQUFLLENBQUNLLEVBQU4sS0FBYSxDQUFiLElBQWtCTCxLQUFLLENBQUNLLEVBQU4sS0FBYSxDQUEvQixJQUFvQ0wsS0FBSyxDQUFDSyxFQUFOLEtBQWEsRUFBbEQsTUFBMERMLEtBQUssQ0FBQ00sRUFBTixLQUFhLENBQWIsSUFBa0JOLEtBQUssQ0FBQ00sRUFBTixLQUFhLENBQS9CLElBQW9DTixLQUFLLENBQUNNLEVBQU4sS0FBYSxFQUEzRyxJQUFpSCxxQkFBakgsR0FBeUlOLEtBQUssQ0FBQ0ssRUFBTixHQUFXLENBQVgsS0FBaUJMLEtBQUssQ0FBQ00sRUFBTixHQUFXLENBQTVCLEdBQWdDLFVBQWhDLEdBQTZDLFdBQWxTO0FBQ0EsUUFBTUMsT0FBTyxHQUFHUCxLQUFLLENBQUNJLENBQU4sS0FBWSxHQUFaLEdBQWtCSixLQUFLLENBQUNJLENBQXhCLEdBQTRCRCxPQUFPLEtBQUssc0JBQVosR0FBcUMsR0FBckMsR0FBMkNBLE9BQU8sS0FBSyxxQkFBWixHQUFvQyxJQUFwQyxHQUEyQ0gsS0FBSyxDQUFDSyxFQUFOLEdBQVcsQ0FBWCxLQUFpQkwsS0FBSyxDQUFDTSxFQUFOLEdBQVcsQ0FBNUIsR0FBZ0MsR0FBaEMsR0FBc0MsR0FBeEs7QUFDQSxzQkFDSTtBQUFBLDJCQUNJO0FBQUEsNkJBQ0k7QUFBUSxpQkFBUyxFQUFFSCxPQUFuQjtBQUE0QixlQUFPLEVBQUVILEtBQUssQ0FBQ1EsT0FBM0M7QUFBQSxrQkFDS0Q7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVNIOztNQWpCUVIsTTs7QUFtQlQsTUFBTVUsS0FBTixTQUFvQkMsNENBQUssQ0FBQ0MsU0FBMUIsQ0FBb0M7QUFDaENDLGNBQVksQ0FBQ1AsRUFBRCxFQUFLQyxFQUFMLEVBQVNGLENBQVQsRUFBWUYsWUFBWixFQUEwQjtBQUNsQyx3QkFDSTtBQUFBLDZCQUNJLHFFQUFDLE1BQUQ7QUFBUSxTQUFDLEVBQUVFLENBQVg7QUFBYyxVQUFFLEVBQUVFLEVBQWxCO0FBQXNCLFVBQUUsRUFBRUQsRUFBMUI7QUFBOEIsb0JBQVksRUFBRUgsWUFBNUM7QUFBMEQsZUFBTyxFQUFFLE1BQU0sS0FBS0YsS0FBTCxDQUFXUSxPQUFYLENBQW1CSCxFQUFuQixFQUF1QkMsRUFBdkI7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLE9BQVcsU0FBUUQsRUFBRyxJQUFHQyxFQUFHLEVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQUtIOztBQUNETyxXQUFTLENBQUNSLEVBQUQsRUFBSztBQUNWLHdCQUNJO0FBQTBCLGVBQVMsRUFBQyxXQUFwQztBQUFBLGdCQUNLLEtBQUtMLEtBQUwsQ0FBV2MsT0FBWCxDQUFtQlQsRUFBbkIsRUFBdUJVLEdBQXZCLENBQTJCLENBQUNYLENBQUQsRUFBR0UsRUFBSCxLQUN4QixLQUFLTSxZQUFMLENBQWtCUCxFQUFsQixFQUFzQkMsRUFBdEIsRUFBMEJGLENBQTFCLEVBQThCLEtBQUtKLEtBQUwsQ0FBV2dCLE1BQVgsQ0FBa0JYLEVBQWxCLENBQUQsQ0FBd0JDLEVBQXhCLENBQTdCLENBREg7QUFETCxPQUFVLFdBQVVELEVBQUcsRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBT0g7O0FBQ0RZLFFBQU0sR0FBRztBQUNMLHdCQUNJO0FBQU8sZUFBUyxFQUFDLFNBQWpCO0FBQUEsNkJBQ0k7QUFBQSxrQkFDSyxLQUFLakIsS0FBTCxDQUFXYyxPQUFYLENBQW1CQyxHQUFuQixDQUF1QixDQUFDRyxDQUFELEVBQUdiLEVBQUgsS0FDcEIsS0FBS1EsU0FBTCxDQUFlUixFQUFmLENBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBVUg7O0FBNUIrQjs7QUErQnBDLE1BQU1jLElBQU4sU0FBbUJULDRDQUFLLENBQUNDLFNBQXpCLENBQW1DO0FBQy9CUyxhQUFXLENBQUNwQixLQUFELEVBQVE7QUFDZixVQUFNQSxLQUFOO0FBQ0EsUUFBSXFCLEtBQUssR0FBRyxDQUFDLEdBQUd4QixZQUFKLENBQVo7QUFDQSxRQUFJeUIsTUFBTSxHQUFHLEVBQWI7QUFDQSxRQUFJQyxNQUFNLEdBQUcsRUFBYjs7QUFDQSxXQUFPRCxNQUFNLENBQUNFLE1BQVAsR0FBZ0IsQ0FBdkIsRUFBMEI7QUFDdEIsVUFBSUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCUCxLQUFLLENBQUNHLE1BQWpDLENBQVg7QUFDQUYsWUFBTSxDQUFDTyxJQUFQLENBQVlSLEtBQUssQ0FBQ0ksSUFBRCxDQUFqQjtBQUNBSixXQUFLLENBQUNTLE1BQU4sQ0FBYUwsSUFBYixFQUFrQixDQUFsQjtBQUNBQSxVQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JQLEtBQUssQ0FBQ0csTUFBakMsQ0FBUDtBQUNBRCxZQUFNLENBQUNNLElBQVAsQ0FBWVIsS0FBSyxDQUFDSSxJQUFELENBQWpCO0FBQ0FKLFdBQUssQ0FBQ1MsTUFBTixDQUFhTCxJQUFiLEVBQWtCLENBQWxCO0FBQ0g7O0FBQ0RILFVBQU0sQ0FBQ1MsSUFBUDtBQUNBUixVQUFNLENBQUNRLElBQVA7QUFDQSxRQUFJakIsT0FBTyxHQUFHa0IsS0FBSyxDQUFDLEVBQUQsQ0FBTCxDQUFVQyxJQUFWLENBQWVELEtBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsSUFBVixDQUFlLEdBQWYsQ0FBZixDQUFkO0FBQ0EsUUFBSWpCLE1BQU0sR0FBR2dCLEtBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsSUFBVixDQUFlRCxLQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLElBQVYsQ0FBZSxFQUFmLENBQWYsQ0FBYjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNUcEIsYUFBTyxFQUFFQSxPQURBO0FBQ1M7QUFDbEJFLFlBQU0sRUFBRUEsTUFGQztBQUVRO0FBQ2pCSyxXQUFLLEVBQUVBLEtBSEU7QUFJVGMsZUFBUyxFQUFFLENBQUMsQ0FKSDtBQUlNO0FBQ2ZiLFlBQU0sRUFBRUEsTUFMQztBQUtPO0FBQ2hCQyxZQUFNLEVBQUVBLE1BTkM7QUFNTztBQUNoQmEsZUFBUyxFQUFFLEdBUEY7QUFPTztBQUNoQkMsbUJBQWEsRUFBRSxFQVJOO0FBUVU7QUFDbkJDLGFBQU8sRUFBRSxDQVRBO0FBU0c7QUFDWkMsY0FBUSxFQUFFO0FBQUU7QUFDUnpCLGVBQU8sRUFBRSxDQUFDLEdBQUdBLE9BQUosQ0FESDtBQUVORSxjQUFNLEVBQUUsQ0FBQyxHQUFHQSxNQUFKLENBRkY7QUFHTk0sY0FBTSxFQUFFLENBQUMsR0FBR0EsTUFBSixDQUhGO0FBSU5DLGNBQU0sRUFBRSxDQUFDLEdBQUdBLE1BQUo7QUFKRjtBQVZELEtBQWI7QUFpQkg7O0FBRURpQix3QkFBc0IsQ0FBQ25DLEVBQUQsRUFBS0MsRUFBTCxFQUFTO0FBQzNCbUMsV0FBTyxDQUFDQyxHQUFSLENBQVksY0FBY3JDLEVBQWQsR0FBbUIsSUFBbkIsR0FBMEJDLEVBQXRDO0FBQ0EsUUFBSTZCLFNBQVMsR0FBRyxLQUFLRCxLQUFMLENBQVdDLFNBQTNCO0FBQ0EsUUFBSXJCLE9BQU8sR0FBRyxLQUFLb0IsS0FBTCxDQUFXcEIsT0FBekI7QUFDQSxRQUFJNkIsV0FBVyxHQUFJN0IsT0FBTyxDQUFDVCxFQUFELENBQVIsQ0FBY0MsRUFBZCxDQUFsQjtBQUNBLFFBQUk4QixTQUFTLEdBQUcsS0FBS0YsS0FBTCxDQUFXRSxTQUEzQjtBQUNBLFFBQUlkLE1BQU0sR0FBRyxLQUFLWSxLQUFMLENBQVdaLE1BQXhCO0FBQ0EsUUFBSUMsTUFBTSxHQUFHLEtBQUtXLEtBQUwsQ0FBV1gsTUFBeEI7QUFDQSxRQUFJUCxNQUFNLEdBQUcsS0FBS2tCLEtBQUwsQ0FBV2xCLE1BQXhCO0FBQ0EsUUFBSXFCLGFBQWEsR0FBRyxLQUFLSCxLQUFMLENBQVdHLGFBQS9CO0FBQ0EsUUFBSU8sS0FBSyxHQUFHQyxNQUFNLENBQUN4QyxFQUFELENBQU4sR0FBYSxHQUFiLEdBQW1Cd0MsTUFBTSxDQUFDdkMsRUFBRCxDQUFyQztBQUNBLFFBQUl3QyxHQUFHLEdBQUdULGFBQWEsQ0FBQ1UsT0FBZCxDQUFzQkgsS0FBdEIsQ0FBVjs7QUFDQSxRQUFJVCxTQUFTLEdBQUcsQ0FBQyxDQUFiLElBQWtCUSxXQUFXLEtBQUssR0FBdEMsRUFBMkM7QUFBRTtBQUN6QyxVQUFJSyxNQUFNLEdBQUcsQ0FBQyxHQUFHbEMsT0FBTyxDQUFDVCxFQUFELENBQVgsQ0FBYjtBQUNBMkMsWUFBTSxDQUFDMUMsRUFBRCxDQUFOLEdBQWE4QixTQUFTLEtBQUssR0FBZCxHQUFvQmQsTUFBTSxDQUFDYSxTQUFELENBQTFCLEdBQXdDWixNQUFNLENBQUNZLFNBQUQsQ0FBM0Q7QUFDQXJCLGFBQU8sQ0FBQ1QsRUFBRCxDQUFQLEdBQWMsQ0FBQyxHQUFHMkMsTUFBSixDQUFkO0FBQ0FaLGVBQVMsS0FBSyxHQUFkLEdBQW9CZCxNQUFNLENBQUNRLE1BQVAsQ0FBY0ssU0FBZCxFQUF5QixDQUF6QixDQUFwQixHQUFrRFosTUFBTSxDQUFDTyxNQUFQLENBQWNLLFNBQWQsRUFBd0IsQ0FBeEIsQ0FBbEQ7QUFDQSxVQUFJYyxZQUFZLEdBQUcsQ0FBQyxHQUFHakMsTUFBTSxDQUFDWCxFQUFELENBQVYsQ0FBbkI7QUFDQTRDLGtCQUFZLENBQUMzQyxFQUFELENBQVosR0FBbUI4QixTQUFuQjtBQUNBcEIsWUFBTSxDQUFDWCxFQUFELENBQU4sR0FBYSxDQUFDLEdBQUc0QyxZQUFKLENBQWI7QUFDQWQsZUFBUyxHQUFHLENBQUMsQ0FBYjtBQUNBLFdBQUtlLFFBQUwsQ0FBYztBQUNWcEMsZUFBTyxFQUFFQSxPQURDO0FBRVZFLGNBQU0sRUFBRUEsTUFGRTtBQUdWTSxjQUFNLEVBQUVBLE1BSEU7QUFJVkMsY0FBTSxFQUFFQSxNQUpFO0FBS1ZZLGlCQUFTLEVBQUVBLFNBTEQ7QUFNVkUscUJBQWEsRUFBRSxDQUFDLEdBQUdBLGFBQUosRUFBbUJPLEtBQW5CO0FBTkwsT0FBZDtBQVFILEtBakJELE1BaUJPLElBQUlELFdBQVcsS0FBSyxHQUFoQixJQUF1QkcsR0FBRyxHQUFHLENBQUMsQ0FBbEMsRUFBcUM7QUFBRTtBQUMxQztBQUNBLFVBQUtWLFNBQVMsS0FBSyxHQUFkLElBQXFCZCxNQUFNLENBQUNFLE1BQVAsR0FBZ0IsQ0FBdEMsSUFBNkNZLFNBQVMsS0FBSyxHQUFkLElBQXFCYixNQUFNLENBQUNDLE1BQVAsR0FBZ0IsQ0FBdEYsRUFBMEY7QUFDdEZZLGlCQUFTLEtBQUssR0FBZCxHQUFvQmQsTUFBTSxDQUFDTyxJQUFQLENBQVljLFdBQVosQ0FBcEIsR0FBK0NwQixNQUFNLENBQUNNLElBQVAsQ0FBWWMsV0FBWixDQUEvQztBQUNBLFlBQUlLLE1BQU0sR0FBRyxDQUFDLEdBQUdsQyxPQUFPLENBQUNULEVBQUQsQ0FBWCxDQUFiO0FBQ0EyQyxjQUFNLENBQUMxQyxFQUFELENBQU4sR0FBYSxHQUFiO0FBQ0FRLGVBQU8sQ0FBQ1QsRUFBRCxDQUFQLEdBQWMsQ0FBQyxHQUFHMkMsTUFBSixDQUFkO0FBQ0EsWUFBSUMsWUFBWSxHQUFHLENBQUMsR0FBR2pDLE1BQU0sQ0FBQ1gsRUFBRCxDQUFWLENBQW5CO0FBQ0E0QyxvQkFBWSxDQUFDM0MsRUFBRCxDQUFaLEdBQW1CLEVBQW5CO0FBQ0FVLGNBQU0sQ0FBQ1gsRUFBRCxDQUFOLEdBQWEsQ0FBQyxHQUFHNEMsWUFBSixDQUFiO0FBQ0FkLGlCQUFTLEdBQUdDLFNBQVMsS0FBSyxHQUFkLEdBQW9CZCxNQUFNLENBQUNFLE1BQVAsR0FBZ0IsQ0FBcEMsR0FBd0NELE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQixDQUFwRTtBQUNBYSxxQkFBYSxDQUFDUCxNQUFkLENBQXFCZ0IsR0FBckIsRUFBeUIsQ0FBekI7QUFDQSxhQUFLSSxRQUFMLENBQWM7QUFDVnBDLGlCQUFPLEVBQUVBLE9BREM7QUFFVkUsZ0JBQU0sRUFBRUEsTUFGRTtBQUdWTSxnQkFBTSxFQUFFQSxNQUhFO0FBSVZDLGdCQUFNLEVBQUVBLE1BSkU7QUFLVlksbUJBQVMsRUFBRUEsU0FMRDtBQU1WRSx1QkFBYSxFQUFFQTtBQU5MLFNBQWQ7QUFRSDtBQUNKO0FBQ0o7O0FBRURjLHlCQUF1QixDQUFDQyxTQUFELEVBQVk7QUFBRTtBQUNqQyxRQUFJLEtBQUtsQixLQUFMLENBQVdFLFNBQVgsS0FBeUIsR0FBN0IsRUFBa0M7QUFDOUIsV0FBS2MsUUFBTCxDQUFjO0FBQ1ZmLGlCQUFTLEVBQUVpQjtBQURELE9BQWQ7QUFHSCxLQUpELE1BS0s7QUFDREMsV0FBSyxDQUFDLHFCQUFELENBQUw7QUFDSDtBQUNKOztBQUVEQyxzQkFBb0IsQ0FBQ0YsU0FBRCxFQUFZO0FBQUU7QUFDOUIsUUFBSSxLQUFLbEIsS0FBTCxDQUFXRSxTQUFYLEtBQXlCLEdBQTdCLEVBQWtDO0FBQzlCLFdBQUtjLFFBQUwsQ0FBYztBQUNWZixpQkFBUyxFQUFFaUI7QUFERCxPQUFkO0FBR0gsS0FKRCxNQUtLO0FBQ0RDLFdBQUssQ0FBQyxxQkFBRCxDQUFMO0FBQ0g7QUFDSjs7QUFFREUsa0JBQWdCLEdBQUc7QUFDZixRQUFJakIsT0FBTyxHQUFHLEtBQUtKLEtBQUwsQ0FBV0ksT0FBekI7O0FBQ0EsU0FBSyxJQUFJa0IsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLdEIsS0FBTCxDQUFXRyxhQUFYLENBQXlCYixNQUE3QyxFQUFxRGdDLENBQUMsRUFBdEQsRUFBMEQ7QUFDdEQsVUFBSTVELGFBQWEsQ0FBQ21ELE9BQWQsQ0FBc0IsS0FBS2IsS0FBTCxDQUFXRyxhQUFYLENBQXlCbUIsQ0FBekIsQ0FBdEIsSUFBcUQsQ0FBQyxDQUExRCxFQUE2RDtBQUN6RGxCLGVBQU87QUFDVjtBQUNKOztBQUNELFFBQUloQixNQUFNLEdBQUcsQ0FBQyxHQUFHLEtBQUtZLEtBQUwsQ0FBV1osTUFBZixDQUFiO0FBQ0EsUUFBSUQsS0FBSyxHQUFHLENBQUMsR0FBRyxLQUFLYSxLQUFMLENBQVdiLEtBQWYsQ0FBWjs7QUFDQSxXQUFPQyxNQUFNLENBQUNFLE1BQVAsR0FBZ0IsQ0FBaEIsSUFBcUJILEtBQUssQ0FBQ0csTUFBTixHQUFlLENBQTNDLEVBQThDO0FBQzFDLFVBQUlDLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQlAsS0FBSyxDQUFDRyxNQUFqQyxDQUFYO0FBQ0FGLFlBQU0sQ0FBQ08sSUFBUCxDQUFZUixLQUFLLENBQUNJLElBQUQsQ0FBakI7QUFDQUosV0FBSyxDQUFDUyxNQUFOLENBQWFMLElBQWIsRUFBa0IsQ0FBbEI7QUFDSDs7QUFDREgsVUFBTSxDQUFDUyxJQUFQO0FBQ0EsUUFBSWpCLE9BQU8sR0FBRyxLQUFLb0IsS0FBTCxDQUFXcEIsT0FBekI7QUFDQSxRQUFJRSxNQUFNLEdBQUcsS0FBS2tCLEtBQUwsQ0FBV2xCLE1BQXhCO0FBQ0EsUUFBSU8sTUFBTSxHQUFHLEtBQUtXLEtBQUwsQ0FBV1gsTUFBeEI7QUFDQSxTQUFLMkIsUUFBTCxDQUFjO0FBQ1ZkLGVBQVMsRUFBRSxHQUREO0FBRVZELGVBQVMsRUFBRSxDQUFDLENBRkY7QUFHVkUsbUJBQWEsRUFBRSxFQUhMO0FBSVZDLGFBQU8sRUFBRUEsT0FKQztBQUtWaEIsWUFBTSxFQUFFQSxNQUxFO0FBTVZELFdBQUssRUFBRUEsS0FORztBQU9Wa0IsY0FBUSxFQUFFO0FBQ056QixlQUFPLEVBQUUsQ0FBQyxHQUFHQSxPQUFKLENBREg7QUFFTkUsY0FBTSxFQUFFLENBQUMsR0FBR0EsTUFBSixDQUZGO0FBR05NLGNBQU0sRUFBRSxDQUFDLEdBQUdBLE1BQUosQ0FIRjtBQUlOQyxjQUFNLEVBQUUsQ0FBQyxHQUFHQSxNQUFKO0FBSkY7QUFQQSxLQUFkO0FBY0g7O0FBQ0RrQyxlQUFhLEdBQUc7QUFDWixRQUFJbEMsTUFBTSxHQUFHLENBQUMsR0FBRyxLQUFLVyxLQUFMLENBQVdYLE1BQWYsQ0FBYjtBQUNBLFFBQUlGLEtBQUssR0FBRyxDQUFDLEdBQUcsS0FBS2EsS0FBTCxDQUFXYixLQUFmLENBQVo7O0FBQ0EsV0FBT0UsTUFBTSxDQUFDQyxNQUFQLEdBQWdCLENBQWhCLElBQXFCSCxLQUFLLENBQUNHLE1BQU4sR0FBZSxDQUEzQyxFQUE4QztBQUMxQyxVQUFJQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JQLEtBQUssQ0FBQ0csTUFBakMsQ0FBWDtBQUNBRCxZQUFNLENBQUNNLElBQVAsQ0FBWVIsS0FBSyxDQUFDSSxJQUFELENBQWpCO0FBQ0FKLFdBQUssQ0FBQ1MsTUFBTixDQUFhTCxJQUFiLEVBQWtCLENBQWxCO0FBQ0g7O0FBQ0RGLFVBQU0sQ0FBQ1EsSUFBUDtBQUNBLFFBQUkyQixXQUFXLEdBQUcsQ0FBQyxHQUFHLEtBQUt4QixLQUFMLENBQVdwQixPQUFmLENBQWxCO0FBQ0EsUUFBSTZDLFVBQVUsR0FBRyxDQUFDLEdBQUcsS0FBS3pCLEtBQUwsQ0FBV2xCLE1BQWYsQ0FBakI7QUFDQSxRQUFJNEMsVUFBVSxHQUFHLENBQUMsR0FBRyxLQUFLMUIsS0FBTCxDQUFXWixNQUFmLENBQWpCO0FBQ0EsUUFBSXVDLFVBQVUsR0FBRyxDQUFDLEdBQUd0QyxNQUFKLENBQWpCO0FBQ0EsU0FBSzJCLFFBQUwsQ0FBYztBQUNWZCxlQUFTLEVBQUUsR0FERDtBQUVWRCxlQUFTLEVBQUUsQ0FBQyxDQUZGO0FBR1ZFLG1CQUFhLEVBQUUsRUFITDtBQUlWZCxZQUFNLEVBQUVBLE1BSkU7QUFLVkYsV0FBSyxFQUFFQSxLQUxHO0FBTVZrQixjQUFRLEVBQUU7QUFDTnpCLGVBQU8sRUFBRTRDLFdBREg7QUFFTjFDLGNBQU0sRUFBRTJDLFVBRkY7QUFHTnJDLGNBQU0sRUFBRXNDLFVBSEY7QUFJTnJDLGNBQU0sRUFBRXNDO0FBSkY7QUFOQSxLQUFkO0FBYUg7O0FBRURDLGFBQVcsR0FBRztBQUNWLFFBQUloRCxPQUFPLEdBQUcsQ0FBQyxHQUFHLEtBQUtvQixLQUFMLENBQVdLLFFBQVgsQ0FBb0J6QixPQUF4QixDQUFkO0FBQ0EsUUFBSUUsTUFBTSxHQUFHLENBQUMsR0FBRyxLQUFLa0IsS0FBTCxDQUFXSyxRQUFYLENBQW9CdkIsTUFBeEIsQ0FBYjtBQUNBLFFBQUlNLE1BQU0sR0FBRyxDQUFDLEdBQUcsS0FBS1ksS0FBTCxDQUFXSyxRQUFYLENBQW9CakIsTUFBeEIsQ0FBYjtBQUNBLFFBQUlDLE1BQU0sR0FBRyxDQUFDLEdBQUcsS0FBS1csS0FBTCxDQUFXSyxRQUFYLENBQW9CaEIsTUFBeEIsQ0FBYjtBQUNBa0IsV0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQWlCcEIsTUFBTSxDQUFDeUMsUUFBUCxFQUFqQixHQUFxQyxLQUFyQyxHQUE2Q3hDLE1BQU0sQ0FBQ3dDLFFBQVAsRUFBekQ7QUFDQSxTQUFLYixRQUFMLENBQWM7QUFDVmYsZUFBUyxFQUFFLENBQUMsQ0FERjtBQUVWRSxtQkFBYSxFQUFFLEVBRkw7QUFHVnZCLGFBQU8sRUFBRUEsT0FIQztBQUlWRSxZQUFNLEVBQUVBLE1BSkU7QUFLVk0sWUFBTSxFQUFFQSxNQUxFO0FBTVZDLFlBQU0sRUFBRUE7QUFORSxLQUFkO0FBUUg7O0FBRUROLFFBQU0sR0FBRztBQUNMLHdCQUNJO0FBQUssV0FBSyxFQUFDLDZCQUFYO0FBQUEsOEJBQ0k7QUFBSyxhQUFLLEVBQUMsS0FBWDtBQUFBLGdDQUNJO0FBQUssZUFBSyxFQUFDLGdCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBSUk7QUFBSyxlQUFLLEVBQUMsa0JBQVg7QUFBOEIseUJBQVksU0FBMUM7QUFBb0QsZUFBSyxFQUFDLE1BQTFEO0FBQUEsaUNBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFFLFFBQVo7QUFBQSxtQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBV0k7QUFBSyxhQUFLLEVBQUMsS0FBWDtBQUFBLGdDQUNJO0FBQUssZUFBSyxFQUFDLG1CQUFYO0FBQUEsaUNBQ0kscUVBQUMsU0FBRDtBQUNJLGtCQUFNLEVBQUUsS0FBS2lCLEtBQUwsQ0FBV1osTUFEdkI7QUFFSSxxQkFBUyxFQUFFLEtBQUtZLEtBQUwsQ0FBV0UsU0FGMUI7QUFHSSxxQkFBUyxFQUFFLEtBQUtGLEtBQUwsQ0FBV0MsU0FIMUI7QUFJSSxtQkFBTyxFQUFHNkIsRUFBRCxJQUFRLEtBQUtiLHVCQUFMLENBQTZCYSxFQUE3QixDQUpyQjtBQUtJLDZCQUFpQixFQUFFLE1BQU0sS0FBS1QsZ0JBQUwsRUFMN0I7QUFNSSw2QkFBaUIsRUFBRSxNQUFNLEtBQUtPLFdBQUwsRUFON0I7QUFPSSxtQkFBTyxFQUFFLEtBQUs1QixLQUFMLENBQVdJO0FBUHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBWUk7QUFBSyxlQUFLLEVBQUMsT0FBWDtBQUFtQixlQUFLLEVBQUMsUUFBekI7QUFBQSxpQ0FDSSxxRUFBQyxLQUFEO0FBQ0ksbUJBQU8sRUFBRSxLQUFLSixLQUFMLENBQVdwQixPQUR4QjtBQUVJLGtCQUFNLEVBQUUsS0FBS29CLEtBQUwsQ0FBV2xCLE1BRnZCO0FBR0ksbUJBQU8sRUFBRSxDQUFDWCxFQUFELEVBQUtDLEVBQUwsS0FBWSxLQUFLa0Msc0JBQUwsQ0FBNEJuQyxFQUE1QixFQUFnQ0MsRUFBaEM7QUFIekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWkosZUFtQkk7QUFBSyxlQUFLLEVBQUMsZ0JBQVg7QUFBQSxpQ0FDSSxxRUFBQyxNQUFEO0FBQ0ksa0JBQU0sRUFBRSxLQUFLNEIsS0FBTCxDQUFXWCxNQUR2QjtBQUVJLHFCQUFTLEVBQUUsS0FBS1csS0FBTCxDQUFXRSxTQUYxQjtBQUdJLHFCQUFTLEVBQUUsS0FBS0YsS0FBTCxDQUFXQyxTQUgxQjtBQUlJLG1CQUFPLEVBQUc2QixFQUFELElBQVEsS0FBS1Ysb0JBQUwsQ0FBMEJVLEVBQTFCLENBSnJCO0FBS0ksNkJBQWlCLEVBQUUsTUFBTSxLQUFLUCxhQUFMLEVBTDdCO0FBTUksNkJBQWlCLEVBQUUsTUFBTSxLQUFLSyxXQUFMO0FBTjdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5CSixlQTZCSTtBQUFLLGVBQUssRUFBQyxPQUFYO0FBQUEsaUNBQ0kscUVBQUMsS0FBRDtBQUFPLGlCQUFLLEVBQUUsS0FBSzVCLEtBQUwsQ0FBV2I7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBN0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBK0NIOztBQTdPOEI7O0FBZ1BuQyxTQUFTNEMsS0FBVCxDQUFlakUsS0FBZixFQUFzQjtBQUNsQjtBQUNBLHNCQUNJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBRUtBLEtBQUssQ0FBQ3FCLEtBQU4sQ0FBWU4sR0FBWixDQUFnQixDQUFDbUQsQ0FBRCxFQUFHRixFQUFILGtCQUNiO0FBQUEsaUJBQ0tBLEVBQUUsR0FBRyxDQUFMLElBQVVFLENBQUMsS0FBS2xFLEtBQUssQ0FBQ3FCLEtBQU4sQ0FBWTJDLEVBQUUsR0FBQyxDQUFmLENBQWhCLGdCQUFvQztBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQXBDLGdCQUFnRix1SkFEckYsZUFFSTtBQUFNLGlCQUFTLEVBQUMsZ0JBQWhCO0FBQUEsa0JBQWtDRTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQSxPQUFZLE9BQU1GLEVBQUcsRUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURILENBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFXSDs7TUFiUUMsSzs7QUFlVCxTQUFTRSxRQUFULENBQWtCbkUsS0FBbEIsRUFBeUI7QUFDckIsc0JBQ0k7QUFBSSxhQUFTLEVBQUVBLEtBQUssQ0FBQ29FLFNBQXJCO0FBQWdDLFdBQU8sRUFBRXBFLEtBQUssQ0FBQ1EsT0FBL0M7QUFBQSxjQUNLUixLQUFLLENBQUNxRTtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztNQU5RRixROztBQVFULFNBQVNHLGdCQUFULENBQTBCdEUsS0FBMUIsRUFBaUM7QUFDN0Isc0JBQ0k7QUFBUSxhQUFTLEVBQUMsY0FBbEI7QUFBaUMsV0FBTyxFQUFFQSxLQUFLLENBQUNRLE9BQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSDs7TUFOUThELGdCOztBQVFULFNBQVNDLGdCQUFULENBQTBCdkUsS0FBMUIsRUFBaUM7QUFDN0Isc0JBQ0k7QUFBUSxhQUFTLEVBQUMsZUFBbEI7QUFBa0MsV0FBTyxFQUFFQSxLQUFLLENBQUNRLE9BQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSDs7TUFOUStELGdCOztBQU9ULE1BQU1DLFNBQU4sU0FBd0I5RCw0Q0FBSyxDQUFDQyxTQUE5QixDQUF3QztBQUNwQzhELFlBQVUsQ0FBQ0wsU0FBRCxFQUFZaEIsU0FBWixFQUF1QmlCLFNBQXZCLEVBQWtDO0FBQ3hDLHdCQUNJLHFFQUFDLFFBQUQ7QUFBOEMsZUFBUyxFQUFFRCxTQUF6RDtBQUFvRSxlQUFTLEVBQUVDLFNBQS9FO0FBQTBGLGFBQU8sRUFBRSxNQUFNLEtBQUtyRSxLQUFMLENBQVdRLE9BQVgsQ0FBbUI0QyxTQUFuQjtBQUF6RyxPQUFlZ0IsU0FBUyxHQUFHdkIsTUFBTSxDQUFDTyxTQUFELENBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQUdIOztBQUVEc0Isa0JBQWdCLEdBQUc7QUFDZix3QkFDSSxxRUFBQyxnQkFBRDtBQUFrQixhQUFPLEVBQUUsTUFBTSxLQUFLMUUsS0FBTCxDQUFXMkUsaUJBQVg7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBR0g7O0FBRURDLG1CQUFpQixHQUFHO0FBQ2hCLHdCQUNJLHFFQUFDLGdCQUFEO0FBQWtCLGFBQU8sRUFBRSxNQUFNLEtBQUs1RSxLQUFMLENBQVc2RSxpQkFBWDtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFHSDs7QUFFREMsc0JBQW9CLENBQUNDLEtBQUQsRUFBUTtBQUN4QixRQUFJQyxJQUFJLEdBQUdoRCxLQUFLLENBQUMrQyxLQUFELENBQUwsQ0FBYTlDLElBQWIsQ0FBa0IsVUFBbEIsQ0FBWDtBQUNBLFdBQ0krQyxJQUFJLENBQUNqRSxHQUFMLENBQVMsQ0FBQ2tFLEtBQUQsRUFBT0MsS0FBUCxrQkFDTDtBQUFBLDZCQUNJO0FBQ0ksV0FBRyxFQUFDLGdCQURSO0FBRUksV0FBRyxFQUFDLHFCQUZSO0FBR0ksYUFBSyxFQUFDLEtBSFY7QUFJSSxjQUFNLEVBQUM7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosT0FBV0QsS0FBSyxHQUFHcEMsTUFBTSxDQUFDcUMsS0FBRCxDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosQ0FESjtBQVlIOztBQUNEakUsUUFBTSxHQUFHO0FBQ0wsd0JBQ0k7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBRyxpQkFBUyxFQUFDLFlBQWI7QUFBQSxrQkFDSyxLQUFLakIsS0FBTCxDQUFXc0IsTUFBWCxDQUFrQlAsR0FBbEIsQ0FBc0IsQ0FBQ21ELENBQUQsRUFBR0YsRUFBSCxLQUNuQixLQUFLUyxVQUFMLENBQWdCLEtBQUt6RSxLQUFMLENBQVdvQyxTQUFYLEtBQXlCLEdBQXpCLElBQWdDLEtBQUtwQyxLQUFMLENBQVdtQyxTQUFYLEtBQXlCNkIsRUFBekQsR0FBOEQsdUJBQTlELEdBQXdGLGVBQXhHLEVBQXlIQSxFQUF6SCxFQUE2SEUsQ0FBN0gsQ0FESDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixFQU9LLEtBQUtsRSxLQUFMLENBQVdvQyxTQUFYLEtBQXlCLEdBQXpCLEdBQ0csS0FBS3NDLGdCQUFMLEVBREgsZ0JBR0csdUpBVlIsRUFZSyxLQUFLMUUsS0FBTCxDQUFXb0MsU0FBWCxLQUF5QixHQUF6QixHQUNHLEtBQUt3QyxpQkFBTCxFQURILGdCQUdHLHVKQWZSLGVBaUJJO0FBQUEscUNBQ21CLEtBQUs1RSxLQUFMLENBQVdzQyxPQUQ5QixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosRUFHSyxLQUFLd0Msb0JBQUwsQ0FBMEIsS0FBSzlFLEtBQUwsQ0FBV3NDLE9BQXJDLENBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBeUJIOztBQTVEbUM7O0FBOER4QyxNQUFNNkMsTUFBTixTQUFxQnpFLDRDQUFLLENBQUNDLFNBQTNCLENBQXFDO0FBQ2pDOEQsWUFBVSxDQUFDTCxTQUFELEVBQVloQixTQUFaLEVBQXVCaUIsU0FBdkIsRUFBa0M7QUFDeEMsd0JBQ0kscUVBQUMsUUFBRDtBQUE4QyxlQUFTLEVBQUVELFNBQXpEO0FBQW9FLGVBQVMsRUFBRUMsU0FBL0U7QUFBMEYsYUFBTyxFQUFFLE1BQU0sS0FBS3JFLEtBQUwsQ0FBV1EsT0FBWCxDQUFtQjRDLFNBQW5CO0FBQXpHLE9BQWVnQixTQUFTLEdBQUd2QixNQUFNLENBQUNPLFNBQUQsQ0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBR0g7O0FBRURzQixrQkFBZ0IsR0FBRztBQUNmLHdCQUNJLHFFQUFDLGdCQUFEO0FBQWtCLGFBQU8sRUFBRSxNQUFNLEtBQUsxRSxLQUFMLENBQVcyRSxpQkFBWDtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFHSDs7QUFFREMsbUJBQWlCLEdBQUc7QUFDaEIsd0JBQ0kscUVBQUMsZ0JBQUQ7QUFBa0IsYUFBTyxFQUFFLE1BQU0sS0FBSzVFLEtBQUwsQ0FBVzZFLGlCQUFYO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQUdIOztBQUVENUQsUUFBTSxHQUFHO0FBQ0wsd0JBQ0k7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBRyxpQkFBUyxFQUFDLFlBQWI7QUFBQSxrQkFDSyxLQUFLakIsS0FBTCxDQUFXdUIsTUFBWCxDQUFrQlIsR0FBbEIsQ0FBc0IsQ0FBQ21ELENBQUQsRUFBR0YsRUFBSCxLQUNuQixLQUFLUyxVQUFMLENBQWdCLEtBQUt6RSxLQUFMLENBQVdvQyxTQUFYLEtBQXlCLEdBQXpCLElBQWdDLEtBQUtwQyxLQUFMLENBQVdtQyxTQUFYLEtBQXlCNkIsRUFBekQsR0FBOEQsdUJBQTlELEdBQXdGLGVBQXhHLEVBQXlIQSxFQUF6SCxFQUE2SEUsQ0FBN0gsQ0FESDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixFQU9LLEtBQUtsRSxLQUFMLENBQVdvQyxTQUFYLEtBQXlCLEdBQXpCLEdBQ0csS0FBS3NDLGdCQUFMLEVBREgsZ0JBR0csdUpBVlIsRUFZSyxLQUFLMUUsS0FBTCxDQUFXb0MsU0FBWCxLQUF5QixHQUF6QixHQUNHLEtBQUt3QyxpQkFBTCxFQURILGdCQUdHLHVKQWZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBb0JIOztBQXhDZ0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGIvcHJpc29uYnJlYWsyLmRjMjg2NDA3MGYwMzIxNzczODUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgZXNjYXBlaGF0Y2hlcyA9IFtcIjAtMFwiLCBcIjAtN1wiLCBcIjAtMTRcIiwgXCI3LTBcIiwgXCI3LTE0XCIsIFwiMTQtMFwiLCBcIjE0LTdcIiwgXCIxNC0xNFwiXSAvLyBjb29yZHMgb2YgZXNjYXBlIGhhdGNoZXNcclxuY29uc3QgaW5pdGlhbHRpbGVzID0gWydBJywnQScsJ0EnLCdBJywnQScsJ0EnLCdBJywnQScsJ0EnXHJcbiwnQicsJ0InLCdDJywnQycsJ0QnLCdEJywnRCcsJ0QnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnXHJcbiwnRicsJ0YnLCdHJywnRycsJ0cnLCdIJywnSCcsJ0knLCdJJywnSScsJ0knLCdJJywnSScsJ0knLCdJJywnSScsJ0onLCdLJywnTCcsJ0wnLCdMJywnTCdcclxuLCdNJywnTScsJ04nLCdOJywnTicsJ04nLCdOJywnTicsJ08nLCdPJywnTycsJ08nLCdPJywnTycsJ08nLCdPJywnUCcsJ1AnLCdRJ1xyXG4sJ1InLCdSJywnUicsJ1InLCdSJywnUicsJ1MnLCdTJywnUycsJ1MnLCdUJywnVCcsJ1QnLCdUJywnVCcsJ1QnLCdVJywnVScsJ1UnLCdVJywnVicsJ1YnXHJcbiwnVycsJ1cnLCdYJywnWScsJ1knLCdaJywnPycsJz8nXSAvLyBpbml0aWFsIHRpbGUgcG9vbFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpc29uQnJlYWsoKSB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEdhbWUgLz5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gU3F1YXJlKHByb3BzKSB7IC8vIHNxdWFyZXVzZWRieSwgcmksIGNpLCBjLCBvbkNsaWNrXHJcbiAgICAvLyBuZWVkIHNxdWFyZXVzZWRieSB0byBwaWNrIGNzcyBjbGFzc05hbWUgY29ycmVzcG9uZGluZyB0byB3aG8gcGxheWVkIHRoZSB0aWxlIG9uIHRoZSBzcXVhcmVcclxuICAgIC8vIG5lZWQgcmksIGNpIHRvIGRpc3BsYXkgYWx0ZXJuYXRpbmcgY2hhcmFjdGVycyBvbiB1bnVzZWQgc3F1YXJlc1xyXG4gICAgLy8gbmVlZCBjIHRvIHJlcHJlc2VudCB3aGljaCB0aWxlIGlzIG9uIHRoZSBzcXVhcmUsIGlmIGFueVxyXG4gICAgLy8gbmVlZCBvbkNsaWNrIHRvIGhhbmRsZSBzcXVhcmUgY2xpY2sgYXQgYSBoaWdoZXIgbGV2ZWxcclxuICAgIGNvbnN0IHVzZWRieWNsYXNzID0gcHJvcHMuc3F1YXJldXNlZGJ5ID09PSBcIlBcIiA/IFwicGJTcXVhcmVVc2VkQnlQcmlzb25lcnNcIiA6IFwicGJTcXVhcmVVc2VkQnlHdWFyZHNcIlxyXG4gICAgY29uc3QgdGRjbGFzcyA9IHByb3BzLmMgIT09IFwiLlwiID8gdXNlZGJ5Y2xhc3MgOiBwcm9wcy5yaSA9PT0gNyAmJiBwcm9wcy5jaSA9PT0gNyA/IFwicGJTcXVhcmVDZW50ZXJTcXVhcmVcIiA6IChwcm9wcy5yaSA9PT0gMCB8fCBwcm9wcy5yaSA9PT0gNyB8fCBwcm9wcy5yaSA9PT0gMTQpICYmIChwcm9wcy5jaSA9PT0gMCB8fCBwcm9wcy5jaSA9PT0gNyB8fCBwcm9wcy5jaSA9PT0gMTQpID8gXCJwYlNxdWFyZUVzY2FwZUhhdGNoXCIgOiBwcm9wcy5yaSAlIDIgPT09IHByb3BzLmNpICUgMiA/IFwicGJTcXVhcmVcIiA6IFwicGJTcXVhcmUyXCJcclxuICAgIGNvbnN0IHRkdmFsdWUgPSBwcm9wcy5jICE9PSBcIi5cIiA/IHByb3BzLmMgOiB0ZGNsYXNzID09PSBcInBiU3F1YXJlQ2VudGVyU3F1YXJlXCIgPyBcIuKcsFwiIDogdGRjbGFzcyA9PT0gXCJwYlNxdWFyZUVzY2FwZUhhdGNoXCIgPyBcIvCfkqtcIiA6IHByb3BzLnJpICUgMiA9PT0gcHJvcHMuY2kgJSAyID8gXCLijpRcIiA6IFwi4pymXCJcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RkY2xhc3N9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0ZHZhbHVlfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlclNxdWFyZShyaSwgY2ksIGMsIHNxdWFyZXVzZWRieSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtgU3F1YXJlJHtyaX0tJHtjaX1gfT5cclxuICAgICAgICAgICAgICAgIDxTcXVhcmUgYz17Y30gY2k9e2NpfSByaT17cml9IHNxdWFyZXVzZWRieT17c3F1YXJldXNlZGJ5fSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQ2xpY2socmksIGNpKX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHJlbmRlclJvdyhyaSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2BCb2FyZFJvdyR7cml9YH0gY2xhc3NOYW1lPVwicm93IHBiUm93XCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zcXVhcmVzW3JpXS5tYXAoKGMsY2kpID0+IChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclNxdWFyZShyaSwgY2ksIGMsICh0aGlzLnByb3BzLnVzZWRieVtyaV0pW2NpXSlcclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInBiQm9hcmRcIj5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zcXVhcmVzLm1hcCgocixyaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclJvdyhyaSlcclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgR2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBsZXQgdGlsZXMgPSBbLi4uaW5pdGlhbHRpbGVzXVxyXG4gICAgICAgIGxldCBwdGlsZXMgPSBbXVxyXG4gICAgICAgIGxldCBndGlsZXMgPSBbXVxyXG4gICAgICAgIHdoaWxlIChwdGlsZXMubGVuZ3RoIDwgNykge1xyXG4gICAgICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRpbGVzLmxlbmd0aClcclxuICAgICAgICAgICAgcHRpbGVzLnB1c2godGlsZXNbcmFuZF0pXHJcbiAgICAgICAgICAgIHRpbGVzLnNwbGljZShyYW5kLDEpICAgXHJcbiAgICAgICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aWxlcy5sZW5ndGgpXHJcbiAgICAgICAgICAgIGd0aWxlcy5wdXNoKHRpbGVzW3JhbmRdKVxyXG4gICAgICAgICAgICB0aWxlcy5zcGxpY2UocmFuZCwxKSAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBwdGlsZXMuc29ydCgpXHJcbiAgICAgICAgZ3RpbGVzLnNvcnQoKVxyXG4gICAgICAgIGxldCBzcXVhcmVzID0gQXJyYXkoMTUpLmZpbGwoQXJyYXkoMTUpLmZpbGwoJy4nKSlcclxuICAgICAgICBsZXQgdXNlZGJ5ID0gQXJyYXkoMTUpLmZpbGwoQXJyYXkoMTUpLmZpbGwoJycpKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsIC8vIHNxdWFyZXMgb24gdGhlIGdhbWUgYm9hcmRcclxuICAgICAgICAgICAgdXNlZGJ5OiB1c2VkYnksICAvLyB3aG8gcHV0IGEgdGlsZSBvbiBhIHNxdWFyZVxyXG4gICAgICAgICAgICB0aWxlczogdGlsZXMsXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbjogLTEsIC8vIHdoaWNoIHRpbGUgZnJvbSB0aGUgdGlsZSByYWNrIGluIHBsYXkgaXMgc2VsZWN0ZWRcclxuICAgICAgICAgICAgcHRpbGVzOiBwdGlsZXMsIC8vIHByaXNvbmVycyB0aWxlc1xyXG4gICAgICAgICAgICBndGlsZXM6IGd0aWxlcywgLy8gZ3VhcmRzIHRpbGVzXHJcbiAgICAgICAgICAgIHdob3NldHVybjogJ1AnLCAvLyBwcmlzb25lcnMgcGxheSBmaXJzdFxyXG4gICAgICAgICAgICBjdXJyZW50Y29vcmRzOiBbXSwgLy8gY29vcmRzIG9mIHBsYXkgY3VycmVudGx5IGJlaW5nIG1hZGUgdG8gc3VwcG9ydCB0aWxlIHJlY2FsbCBhbmQgcGxheSB2YWxpZGF0aW9uXHJcbiAgICAgICAgICAgIHJlc2N1ZXM6IDAsIC8vIG51bWJlciBvZiBwcmlzb25lcnMgcmVzY3VlZFxyXG4gICAgICAgICAgICBzbmFwc2hvdDogeyAvLyBmb3IgcmV2ZXJ0aW5nIHRvIHN0YXJ0IG9mIG1vdmUgZm9yIHRpbGUgcmVjYWxsIG9yIGV4Y2hhbmdlIGxvZ2ljXHJcbiAgICAgICAgICAgICAgICBzcXVhcmVzOiBbLi4uc3F1YXJlc10sXHJcbiAgICAgICAgICAgICAgICB1c2VkYnk6IFsuLi51c2VkYnldLFxyXG4gICAgICAgICAgICAgICAgcHRpbGVzOiBbLi4ucHRpbGVzXSxcclxuICAgICAgICAgICAgICAgIGd0aWxlczogWy4uLmd0aWxlc11cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socmksIGNpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGljayBvbiBcIiArIHJpICsgXCIsIFwiICsgY2kpXHJcbiAgICAgICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc3RhdGUuc2VsZWN0aW9uXHJcbiAgICAgICAgbGV0IHNxdWFyZXMgPSB0aGlzLnN0YXRlLnNxdWFyZXNcclxuICAgICAgICBsZXQgc3F1YXJldmFsdWUgPSAoc3F1YXJlc1tyaV0pW2NpXVxyXG4gICAgICAgIGxldCB3aG9zZXR1cm4gPSB0aGlzLnN0YXRlLndob3NldHVyblxyXG4gICAgICAgIGxldCBwdGlsZXMgPSB0aGlzLnN0YXRlLnB0aWxlc1xyXG4gICAgICAgIGxldCBndGlsZXMgPSB0aGlzLnN0YXRlLmd0aWxlc1xyXG4gICAgICAgIGxldCB1c2VkYnkgPSB0aGlzLnN0YXRlLnVzZWRieVxyXG4gICAgICAgIGxldCBjdXJyZW50Y29vcmRzID0gdGhpcy5zdGF0ZS5jdXJyZW50Y29vcmRzXHJcbiAgICAgICAgbGV0IGNvb3JkID0gU3RyaW5nKHJpKSArIFwiLVwiICsgU3RyaW5nKGNpKTtcclxuICAgICAgICBsZXQgY2NpID0gY3VycmVudGNvb3Jkcy5pbmRleE9mKGNvb3JkKVxyXG4gICAgICAgIGlmIChzZWxlY3Rpb24gPiAtMSAmJiBzcXVhcmV2YWx1ZSA9PT0gXCIuXCIpIHsgLy8gdGlsZSBpcyBzZWxlY3RlZCBmcm9tIHJhY2sgYW5kIGNsaWNrZWQgc3F1YXJlIGlzIG5vdCB1c2VkIHlldFxyXG4gICAgICAgICAgICBsZXQgbmV3Um93ID0gWy4uLnNxdWFyZXNbcmldXVxyXG4gICAgICAgICAgICBuZXdSb3dbY2ldID0gd2hvc2V0dXJuID09PSAnUCcgPyBwdGlsZXNbc2VsZWN0aW9uXSA6IGd0aWxlc1tzZWxlY3Rpb25dXHJcbiAgICAgICAgICAgIHNxdWFyZXNbcmldID0gWy4uLm5ld1Jvd11cclxuICAgICAgICAgICAgd2hvc2V0dXJuID09PSAnUCcgPyBwdGlsZXMuc3BsaWNlKHNlbGVjdGlvbiwgMSkgOiBndGlsZXMuc3BsaWNlKHNlbGVjdGlvbiwxKVxyXG4gICAgICAgICAgICBsZXQgbmV3VXNlZGJ5Um93ID0gWy4uLnVzZWRieVtyaV1dXHJcbiAgICAgICAgICAgIG5ld1VzZWRieVJvd1tjaV0gPSB3aG9zZXR1cm5cclxuICAgICAgICAgICAgdXNlZGJ5W3JpXSA9IFsuLi5uZXdVc2VkYnlSb3ddXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbiA9IC0xXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc3F1YXJlczogc3F1YXJlcyxcclxuICAgICAgICAgICAgICAgIHVzZWRieTogdXNlZGJ5LFxyXG4gICAgICAgICAgICAgICAgcHRpbGVzOiBwdGlsZXMsXHJcbiAgICAgICAgICAgICAgICBndGlsZXM6IGd0aWxlcyxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbjogc2VsZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudGNvb3JkczogWy4uLmN1cnJlbnRjb29yZHMsIGNvb3JkXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNxdWFyZXZhbHVlICE9PSBcIi5cIiAmJiBjY2kgPiAtMSkgeyAvLyBjbGlja2VkIHNxdWFyZSBoYXMgYSB0aWxlIG9uIGl0IGZyb20gdGhlIGN1cnJlbnQgbW92ZSBpbiBwcm9ncmVzc1xyXG4gICAgICAgICAgICAvLyBBc3N1bWluZyBzb21lIGdvb2Qgd2lsbCBmcm9tIHRoZSB1c2VycyB0byBjbGljayBhIHRpbGUgdGhleSBwbGF5ZWRcclxuICAgICAgICAgICAgaWYgKCh3aG9zZXR1cm4gPT09ICdQJyAmJiBwdGlsZXMubGVuZ3RoIDwgNykgfHwgKHdob3NldHVybiA9PT0gJ0cnICYmIGd0aWxlcy5sZW5ndGggPCA3KSkge1xyXG4gICAgICAgICAgICAgICAgd2hvc2V0dXJuID09PSAnUCcgPyBwdGlsZXMucHVzaChzcXVhcmV2YWx1ZSkgOiBndGlsZXMucHVzaChzcXVhcmV2YWx1ZSlcclxuICAgICAgICAgICAgICAgIGxldCBuZXdSb3cgPSBbLi4uc3F1YXJlc1tyaV1dXHJcbiAgICAgICAgICAgICAgICBuZXdSb3dbY2ldID0gXCIuXCJcclxuICAgICAgICAgICAgICAgIHNxdWFyZXNbcmldID0gWy4uLm5ld1Jvd11cclxuICAgICAgICAgICAgICAgIGxldCBuZXdVc2VkYnlSb3cgPSBbLi4udXNlZGJ5W3JpXV1cclxuICAgICAgICAgICAgICAgIG5ld1VzZWRieVJvd1tjaV0gPSBcIlwiXHJcbiAgICAgICAgICAgICAgICB1c2VkYnlbcmldID0gWy4uLm5ld1VzZWRieVJvd11cclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbiA9IHdob3NldHVybiA9PT0gJ1AnID8gcHRpbGVzLmxlbmd0aCAtIDEgOiBndGlsZXMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgY3VycmVudGNvb3Jkcy5zcGxpY2UoY2NpLDEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZWRieTogdXNlZGJ5LFxyXG4gICAgICAgICAgICAgICAgICAgIHB0aWxlczogcHRpbGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIGd0aWxlczogZ3RpbGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbjogc2VsZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRjb29yZHM6IGN1cnJlbnRjb29yZHNcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVByaXNvbmVyVGlsZUNsaWNrKHRpbGVpbmRleCkgeyAvLyB0aGUgaW5kZXggb2YgcHRpbGVzXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUud2hvc2V0dXJuID09PSAnUCcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb246IHRpbGVpbmRleFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdJdCBpcyBub3QgeW91ciB0dXJuJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlR3VhcmRUaWxlQ2xpY2sodGlsZWluZGV4KSB7IC8vIHRoZSBpbmRleCBvZiBndGlsZXNcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS53aG9zZXR1cm4gPT09ICdHJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbjogdGlsZWluZGV4XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ0l0IGlzIG5vdCB5b3VyIHR1cm4nKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbmRQcmlzb25lcnNUdXJuKCkge1xyXG4gICAgICAgIGxldCByZXNjdWVzID0gdGhpcy5zdGF0ZS5yZXNjdWVzXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLmN1cnJlbnRjb29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGVzY2FwZWhhdGNoZXMuaW5kZXhPZih0aGlzLnN0YXRlLmN1cnJlbnRjb29yZHNbaV0pID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJlc2N1ZXMrK1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwdGlsZXMgPSBbLi4udGhpcy5zdGF0ZS5wdGlsZXNdXHJcbiAgICAgICAgbGV0IHRpbGVzID0gWy4uLnRoaXMuc3RhdGUudGlsZXNdXHJcbiAgICAgICAgd2hpbGUgKHB0aWxlcy5sZW5ndGggPCA3ICYmIHRpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aWxlcy5sZW5ndGgpXHJcbiAgICAgICAgICAgIHB0aWxlcy5wdXNoKHRpbGVzW3JhbmRdKVxyXG4gICAgICAgICAgICB0aWxlcy5zcGxpY2UocmFuZCwxKSAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBwdGlsZXMuc29ydCgpXHJcbiAgICAgICAgbGV0IHNxdWFyZXMgPSB0aGlzLnN0YXRlLnNxdWFyZXNcclxuICAgICAgICBsZXQgdXNlZGJ5ID0gdGhpcy5zdGF0ZS51c2VkYnlcclxuICAgICAgICBsZXQgZ3RpbGVzID0gdGhpcy5zdGF0ZS5ndGlsZXNcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgd2hvc2V0dXJuOiAnRycsXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbjogLTEsXHJcbiAgICAgICAgICAgIGN1cnJlbnRjb29yZHM6IFtdLFxyXG4gICAgICAgICAgICByZXNjdWVzOiByZXNjdWVzLFxyXG4gICAgICAgICAgICBwdGlsZXM6IHB0aWxlcyxcclxuICAgICAgICAgICAgdGlsZXM6IHRpbGVzLFxyXG4gICAgICAgICAgICBzbmFwc2hvdDogeyBcclxuICAgICAgICAgICAgICAgIHNxdWFyZXM6IFsuLi5zcXVhcmVzXSxcclxuICAgICAgICAgICAgICAgIHVzZWRieTogWy4uLnVzZWRieV0sXHJcbiAgICAgICAgICAgICAgICBwdGlsZXM6IFsuLi5wdGlsZXNdLFxyXG4gICAgICAgICAgICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGVuZEd1YXJkc1R1cm4oKSB7XHJcbiAgICAgICAgbGV0IGd0aWxlcyA9IFsuLi50aGlzLnN0YXRlLmd0aWxlc11cclxuICAgICAgICBsZXQgdGlsZXMgPSBbLi4udGhpcy5zdGF0ZS50aWxlc11cclxuICAgICAgICB3aGlsZSAoZ3RpbGVzLmxlbmd0aCA8IDcgJiYgdGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRpbGVzLmxlbmd0aClcclxuICAgICAgICAgICAgZ3RpbGVzLnB1c2godGlsZXNbcmFuZF0pXHJcbiAgICAgICAgICAgIHRpbGVzLnNwbGljZShyYW5kLDEpICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGd0aWxlcy5zb3J0KClcclxuICAgICAgICBsZXQgc25hcHNxdWFyZXMgPSBbLi4udGhpcy5zdGF0ZS5zcXVhcmVzXVxyXG4gICAgICAgIGxldCBzbmFwdXNlZGJ5ID0gWy4uLnRoaXMuc3RhdGUudXNlZGJ5XVxyXG4gICAgICAgIGxldCBzbmFwcHRpbGVzID0gWy4uLnRoaXMuc3RhdGUucHRpbGVzXVxyXG4gICAgICAgIGxldCBzbmFwZ3RpbGVzID0gWy4uLmd0aWxlc11cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgd2hvc2V0dXJuOiAnUCcsXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbjogLTEsXHJcbiAgICAgICAgICAgIGN1cnJlbnRjb29yZHM6IFtdLFxyXG4gICAgICAgICAgICBndGlsZXM6IGd0aWxlcyxcclxuICAgICAgICAgICAgdGlsZXM6IHRpbGVzLFxyXG4gICAgICAgICAgICBzbmFwc2hvdDogeyBcclxuICAgICAgICAgICAgICAgIHNxdWFyZXM6IHNuYXBzcXVhcmVzLFxyXG4gICAgICAgICAgICAgICAgdXNlZGJ5OiBzbmFwdXNlZGJ5LFxyXG4gICAgICAgICAgICAgICAgcHRpbGVzOiBzbmFwcHRpbGVzLFxyXG4gICAgICAgICAgICAgICAgZ3RpbGVzOiBzbmFwZ3RpbGVzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlY2FsbFRpbGVzKCkge1xyXG4gICAgICAgIGxldCBzcXVhcmVzID0gWy4uLnRoaXMuc3RhdGUuc25hcHNob3Quc3F1YXJlc11cclxuICAgICAgICBsZXQgdXNlZGJ5ID0gWy4uLnRoaXMuc3RhdGUuc25hcHNob3QudXNlZGJ5XVxyXG4gICAgICAgIGxldCBwdGlsZXMgPSBbLi4udGhpcy5zdGF0ZS5zbmFwc2hvdC5wdGlsZXNdXHJcbiAgICAgICAgbGV0IGd0aWxlcyA9IFsuLi50aGlzLnN0YXRlLnNuYXBzaG90Lmd0aWxlc11cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRpbGUgcmVjYWxsIFwiICsgcHRpbGVzLnRvU3RyaW5nKCkgKyBcIiA6IFwiICsgZ3RpbGVzLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbjogLTEsXHJcbiAgICAgICAgICAgIGN1cnJlbnRjb29yZHM6IFtdLFxyXG4gICAgICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLFxyXG4gICAgICAgICAgICB1c2VkYnk6IHVzZWRieSxcclxuICAgICAgICAgICAgcHRpbGVzOiBwdGlsZXMsXHJcbiAgICAgICAgICAgIGd0aWxlczogZ3RpbGVzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBwcmlzb25icmVha1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTEgcGJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcmlzb24gQnJlYWtcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgcGJob21lbGlua1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnLi4vLi4vJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7wn4+gPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTIgcGJQcmlzb25lcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByaXNvbmVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHRpbGVzPXt0aGlzLnN0YXRlLnB0aWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdob3NldHVybj17dGhpcy5zdGF0ZS53aG9zZXR1cm59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb249e3RoaXMuc3RhdGUuc2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KHRpKSA9PiB0aGlzLmhhbmRsZVByaXNvbmVyVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tGaW5pc2hUdXJuPXsoKSA9PiB0aGlzLmVuZFByaXNvbmVyc1R1cm4oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tUaWxlUmVjYWxsPXsoKSA9PiB0aGlzLnJlY2FsbFRpbGVzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNjdWVzPXt0aGlzLnN0YXRlLnJlc2N1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzPXt0aGlzLnN0YXRlLnNxdWFyZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VkYnk9e3RoaXMuc3RhdGUudXNlZGJ5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KHJpLCBjaSkgPT4gdGhpcy5oYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJpLCBjaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMiBwYkd1YXJkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3VhcmRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBndGlsZXM9e3RoaXMuc3RhdGUuZ3RpbGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hvc2V0dXJuPXt0aGlzLnN0YXRlLndob3NldHVybn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17dGhpcy5zdGF0ZS5zZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IHRoaXMuaGFuZGxlR3VhcmRUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja0ZpbmlzaFR1cm49eygpID0+IHRoaXMuZW5kR3VhcmRzVHVybigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja1RpbGVSZWNhbGw9eygpID0+IHRoaXMucmVjYWxsVGlsZXMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRpbGVzIHRpbGVzPXt0aGlzLnN0YXRlLnRpbGVzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTsgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRpbGVzKHByb3BzKSB7XHJcbiAgICAvLyB0aGVyZSBpcyBhIGJldHRlciB3YXkgXl5eXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcG9vbFwiPlxyXG4gICAgICAgICAgICA8aDM+VElMRSBQT09MPC9oMz5cclxuICAgICAgICAgICAge3Byb3BzLnRpbGVzLm1hcCgodCx0aSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtgdGlsZSR7dGl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RpID4gMCAmJiB0ICE9PSBwcm9wcy50aWxlc1t0aS0xXSA/IDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcG9vbERpdmlkZXJcIj48L2Rpdj4gOiA8PjwvPn1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYlRpbGVwb29sVGlsZVwiPnt0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJhY2tUaWxlKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx0ZCBjbGFzc05hbWU9e3Byb3BzLnRpbGVjbGFzc30gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgICAgIHtwcm9wcy50aWxldmFsdWV9XHJcbiAgICAgICAgPC90ZD5cclxuICAgICkgICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEZpbmlzaFR1cm5CdXR0b24ocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkZpbmlzaFR1cm5cIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAgRmluaXNoIFR1cm5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gVGlsZVJlY2FsbEJ1dHRvbihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBiUmVjYWxsVGlsZXNcIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAgUmVjYWxsIFRpbGVzXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbn1cclxuY2xhc3MgUHJpc29uZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlclRpbGUodGlsZWNsYXNzLCB0aWxlaW5kZXgsIHRpbGV2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSYWNrVGlsZSBrZXk9e3RpbGVjbGFzcyArIFN0cmluZyh0aWxlaW5kZXgpfSB0aWxlY2xhc3M9e3RpbGVjbGFzc30gdGlsZXZhbHVlPXt0aWxldmFsdWV9IG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DbGljayh0aWxlaW5kZXgpfS8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJGaW5pc2hUdXJuKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGaW5pc2hUdXJuQnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DbGlja0ZpbmlzaFR1cm4oKX0vPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUmVjYWxsVGlsZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRpbGVSZWNhbGxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkNsaWNrVGlsZVJlY2FsbCgpfS8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJGcmVlZFByaXNvbmVycyhjb3VudCkge1xyXG4gICAgICAgIGxldCBkdW1iID0gQXJyYXkoY291bnQpLmZpbGwoJ25vbnNlbnNlJylcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBkdW1iLm1hcCgodmFsdWUsaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17dmFsdWUgKyBTdHJpbmcoaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9icmVha2ZyZWUucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiSSdtIGZyZWUhIEknbSBmcmVlIVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPlBSSVNPTkVSUzwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBiVGlsZXJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5wdGlsZXMubWFwKCh0LHRpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVGlsZSh0aGlzLnByb3BzLndob3NldHVybiA9PT0gJ1AnICYmIHRoaXMucHJvcHMuc2VsZWN0aW9uID09PSB0aSA/IFwicGJUaWxlT25SYWNrU2VsZWN0ZWRQXCIgOiBcInBiVGlsZU9uUmFja1BcIiwgdGksIHQpXHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy53aG9zZXR1cm4gPT09ICdQJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJGaW5pc2hUdXJuKClcclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLndob3NldHVybiA9PT0gJ1AnID9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclJlY2FsbFRpbGVzKClcclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIFJlc2N1ZXMgbWFkZToge3RoaXMucHJvcHMucmVzY3Vlc31cclxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJGcmVlZFByaXNvbmVycyh0aGlzLnByb3BzLnJlc2N1ZXMpfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuY2xhc3MgR3VhcmRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlclRpbGUodGlsZWNsYXNzLCB0aWxlaW5kZXgsIHRpbGV2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSYWNrVGlsZSBrZXk9e3RpbGVjbGFzcyArIFN0cmluZyh0aWxlaW5kZXgpfSB0aWxlY2xhc3M9e3RpbGVjbGFzc30gdGlsZXZhbHVlPXt0aWxldmFsdWV9IG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DbGljayh0aWxlaW5kZXgpfS8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJGaW5pc2hUdXJuKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGaW5pc2hUdXJuQnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DbGlja0ZpbmlzaFR1cm4oKX0vPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUmVjYWxsVGlsZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRpbGVSZWNhbGxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkNsaWNrVGlsZVJlY2FsbCgpfS8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPkdVQVJEUzwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBiVGlsZXJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5ndGlsZXMubWFwKCh0LHRpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVGlsZSh0aGlzLnByb3BzLndob3NldHVybiA9PT0gJ0cnICYmIHRoaXMucHJvcHMuc2VsZWN0aW9uID09PSB0aSA/IFwicGJUaWxlT25SYWNrU2VsZWN0ZWRHXCIgOiBcInBiVGlsZU9uUmFja0dcIiwgdGksIHQpXHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy53aG9zZXR1cm4gPT09ICdHJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJGaW5pc2hUdXJuKClcclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLndob3NldHVybiA9PT0gJ0cnID9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclJlY2FsbFRpbGVzKClcclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==