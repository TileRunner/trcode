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
        squares,
        usedby,
        ptiles,
        gtiles
      } // for reverting to start of move for tile recall or exchange logic

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
        squares,
        usedby,
        ptiles,
        gtiles
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
    let squares = this.state.squares;
    let usedby = this.state.usedby;
    let ptiles = this.state.ptiles;
    this.setState({
      whoseturn: 'P',
      selection: -1,
      currentcoords: [],
      gtiles: gtiles,
      tiles: tiles,
      snapshot: {
        squares,
        usedby,
        ptiles,
        gtiles
      }
    });
  }

  recallTiles() {
    console.log("Tile recall " + ptiles.toString() + " : " + gtiles.toString());
    let squares = this.state.snapshot.squares;
    let usedby = this.state.snapshot.usedby;
    let ptiles = this.state.snapshot.ptiles;
    let gtiles = this.state.snapshot.gtiles;
    this.setState({
      selection: -1,
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
          lineNumber: 244,
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
              lineNumber: 249,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 243,
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
            lineNumber: 255,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 254,
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
            lineNumber: 266,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 265,
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
            lineNumber: 273,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Tiles, {
            tiles: this.state.tiles
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 242,
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
      lineNumber: 295,
      columnNumber: 13
    }, this), props.tiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [ti > 0 && t !== props.tiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pbTilepoolDivider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 58
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbTilepoolTile",
        children: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 21
      }, this)]
    }, `tile${ti}`, true, {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 17
    }, this))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 294,
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
    lineNumber: 308,
    columnNumber: 9
  }, this);
}

_c4 = RackTile;

function FinishTurnButton(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    onClick: props.onClick,
    children: "Finish Turn"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 316,
    columnNumber: 9
  }, this);
}

_c5 = FinishTurnButton;

function TileRecallButton(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    onClick: props.onClick,
    children: "Recall Tiles"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 324,
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
      lineNumber: 332,
      columnNumber: 13
    }, this);
  }

  renderFinishTurn() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
      onClick: () => this.props.onClickFinishTurn()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 13
    }, this);
  }

  renderRecallTiles() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
      onClick: () => this.props.onClickTileRecall()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 344,
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
        lineNumber: 353,
        columnNumber: 21
      }, this)
    }, value + String(index), false, {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 17
    }, this));
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "PRISONERS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "pbTilerack",
        children: this.props.ptiles.map((t, ti) => this.renderTile(this.props.whoseturn === 'P' && this.props.selection === ti ? "pbTileOnRackSelectedP" : "pbTileOnRackP", ti, t))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 367,
        columnNumber: 17
      }, this), this.props.whoseturn === 'P' ? this.renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), this.props.whoseturn === 'P' ? this.renderRecallTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Rescues made: ", this.props.rescues, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 384,
          columnNumber: 21
        }, this), this.renderFreedPrisoners(this.props.rescues)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 365,
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
      lineNumber: 394,
      columnNumber: 13
    }, this);
  }

  renderFinishTurn() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
      onClick: () => this.props.onClickFinishTurn()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 13
    }, this);
  }

  renderRecallTiles() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
      onClick: () => this.props.onClickTileRecall()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 13
    }, this);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "GUARDS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 413,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "pbTilerack",
        children: this.props.gtiles.map((t, ti) => this.renderTile(this.props.whoseturn === 'G' && this.props.selection === ti ? "pbTileOnRackSelectedG" : "pbTileOnRackG", ti, t))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 414,
        columnNumber: 17
      }, this), this.props.whoseturn === 'G' ? this.renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), this.props.whoseturn === 'G' ? this.renderRecallTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 412,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsyLmpzIl0sIm5hbWVzIjpbImVzY2FwZWhhdGNoZXMiLCJpbml0aWFsdGlsZXMiLCJQcmlzb25CcmVhayIsIlNxdWFyZSIsInByb3BzIiwidXNlZGJ5Y2xhc3MiLCJzcXVhcmV1c2VkYnkiLCJ0ZGNsYXNzIiwiYyIsInJpIiwiY2kiLCJ0ZHZhbHVlIiwib25DbGljayIsIkJvYXJkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXJTcXVhcmUiLCJyZW5kZXJSb3ciLCJzcXVhcmVzIiwibWFwIiwidXNlZGJ5IiwicmVuZGVyIiwiciIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsInRpbGVzIiwicHRpbGVzIiwiZ3RpbGVzIiwibGVuZ3RoIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzcGxpY2UiLCJzb3J0IiwiQXJyYXkiLCJmaWxsIiwic3RhdGUiLCJzZWxlY3Rpb24iLCJ3aG9zZXR1cm4iLCJjdXJyZW50Y29vcmRzIiwicmVzY3VlcyIsInNuYXBzaG90IiwiaGFuZGxlQm9hcmRTcXVhcmVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJzcXVhcmV2YWx1ZSIsImNvb3JkIiwiU3RyaW5nIiwiY2NpIiwiaW5kZXhPZiIsIm5ld1JvdyIsIm5ld1VzZWRieVJvdyIsInNldFN0YXRlIiwiaGFuZGxlUHJpc29uZXJUaWxlQ2xpY2siLCJ0aWxlaW5kZXgiLCJhbGVydCIsImhhbmRsZUd1YXJkVGlsZUNsaWNrIiwiZW5kUHJpc29uZXJzVHVybiIsImkiLCJlbmRHdWFyZHNUdXJuIiwicmVjYWxsVGlsZXMiLCJ0b1N0cmluZyIsInRpIiwiVGlsZXMiLCJ0IiwiUmFja1RpbGUiLCJ0aWxlY2xhc3MiLCJ0aWxldmFsdWUiLCJGaW5pc2hUdXJuQnV0dG9uIiwiVGlsZVJlY2FsbEJ1dHRvbiIsIlByaXNvbmVycyIsInJlbmRlclRpbGUiLCJyZW5kZXJGaW5pc2hUdXJuIiwib25DbGlja0ZpbmlzaFR1cm4iLCJyZW5kZXJSZWNhbGxUaWxlcyIsIm9uQ2xpY2tUaWxlUmVjYWxsIiwicmVuZGVyRnJlZWRQcmlzb25lcnMiLCJjb3VudCIsImR1bWIiLCJ2YWx1ZSIsImluZGV4IiwiR3VhcmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsYUFBYSxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxNQUFmLEVBQXVCLEtBQXZCLEVBQThCLE1BQTlCLEVBQXNDLE1BQXRDLEVBQThDLE1BQTlDLEVBQXNELE9BQXRELENBQXRCLEMsQ0FBcUY7O0FBQ3JGLE1BQU1DLFlBQVksR0FBRyxDQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVMsR0FBVCxFQUFhLEdBQWIsRUFBaUIsR0FBakIsRUFBcUIsR0FBckIsRUFBeUIsR0FBekIsRUFBNkIsR0FBN0IsRUFBaUMsR0FBakMsRUFDcEIsR0FEb0IsRUFDaEIsR0FEZ0IsRUFDWixHQURZLEVBQ1IsR0FEUSxFQUNKLEdBREksRUFDQSxHQURBLEVBQ0ksR0FESixFQUNRLEdBRFIsRUFDWSxHQURaLEVBQ2dCLEdBRGhCLEVBQ29CLEdBRHBCLEVBQ3dCLEdBRHhCLEVBQzRCLEdBRDVCLEVBQ2dDLEdBRGhDLEVBQ29DLEdBRHBDLEVBQ3dDLEdBRHhDLEVBQzRDLEdBRDVDLEVBQ2dELEdBRGhELEVBQ29ELEdBRHBELEVBQ3dELEdBRHhELEVBRXBCLEdBRm9CLEVBRWhCLEdBRmdCLEVBRVosR0FGWSxFQUVSLEdBRlEsRUFFSixHQUZJLEVBRUEsR0FGQSxFQUVJLEdBRkosRUFFUSxHQUZSLEVBRVksR0FGWixFQUVnQixHQUZoQixFQUVvQixHQUZwQixFQUV3QixHQUZ4QixFQUU0QixHQUY1QixFQUVnQyxHQUZoQyxFQUVvQyxHQUZwQyxFQUV3QyxHQUZ4QyxFQUU0QyxHQUY1QyxFQUVnRCxHQUZoRCxFQUVvRCxHQUZwRCxFQUV3RCxHQUZ4RCxFQUU0RCxHQUY1RCxFQUVnRSxHQUZoRSxFQUdwQixHQUhvQixFQUdoQixH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cGFnZXMvcGIvcHJpc29uYnJlYWsyLjQ4NjllMGIxNzIzZjY2NTU5MWUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgZXNjYXBlaGF0Y2hlcyA9IFtcIjAtMFwiLCBcIjAtN1wiLCBcIjAtMTRcIiwgXCI3LTBcIiwgXCI3LTE0XCIsIFwiMTQtMFwiLCBcIjE0LTdcIiwgXCIxNC0xNFwiXSAvLyBjb29yZHMgb2YgZXNjYXBlIGhhdGNoZXNcclxuY29uc3QgaW5pdGlhbHRpbGVzID0gWydBJywnQScsJ0EnLCdBJywnQScsJ0EnLCdBJywnQScsJ0EnXHJcbiwnQicsJ0InLCdDJywnQycsJ0QnLCdEJywnRCcsJ0QnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnXHJcbiwnRicsJ0YnLCdHJywnRycsJ0cnLCdIJywnSCcsJ0knLCdJJywnSScsJ0knLCdJJywnSScsJ0knLCdJJywnSScsJ0onLCdLJywnTCcsJ0wnLCdMJywnTCdcclxuLCdNJywnTScsJ04nLCdOJywnTicsJ04nLCdOJywnTicsJ08nLCdPJywnTycsJ08nLCdPJywnTycsJ08nLCdPJywnUCcsJ1AnLCdRJ1xyXG4sJ1InLCdSJywnUicsJ1InLCdSJywnUicsJ1MnLCdTJywnUycsJ1MnLCdUJywnVCcsJ1QnLCdUJywnVCcsJ1QnLCdVJywnVScsJ1UnLCdVJywnVicsJ1YnXHJcbiwnVycsJ1cnLCdYJywnWScsJ1knLCdaJywnPycsJz8nXSAvLyBpbml0aWFsIHRpbGUgcG9vbFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpc29uQnJlYWsoKSB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEdhbWUgLz5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gU3F1YXJlKHByb3BzKSB7IC8vIHNxdWFyZXVzZWRieSwgcmksIGNpLCBjLCBvbkNsaWNrXHJcbiAgICAvLyBuZWVkIHNxdWFyZXVzZWRieSB0byBwaWNrIGNzcyBjbGFzc05hbWUgY29ycmVzcG9uZGluZyB0byB3aG8gcGxheWVkIHRoZSB0aWxlIG9uIHRoZSBzcXVhcmVcclxuICAgIC8vIG5lZWQgcmksIGNpIHRvIGRpc3BsYXkgYWx0ZXJuYXRpbmcgY2hhcmFjdGVycyBvbiB1bnVzZWQgc3F1YXJlc1xyXG4gICAgLy8gbmVlZCBjIHRvIHJlcHJlc2VudCB3aGljaCB0aWxlIGlzIG9uIHRoZSBzcXVhcmUsIGlmIGFueVxyXG4gICAgLy8gbmVlZCBvbkNsaWNrIHRvIGhhbmRsZSBzcXVhcmUgY2xpY2sgYXQgYSBoaWdoZXIgbGV2ZWxcclxuICAgIGNvbnN0IHVzZWRieWNsYXNzID0gcHJvcHMuc3F1YXJldXNlZGJ5ID09PSBcIlBcIiA/IFwicGJTcXVhcmVVc2VkQnlQcmlzb25lcnNcIiA6IFwicGJTcXVhcmVVc2VkQnlHdWFyZHNcIlxyXG4gICAgY29uc3QgdGRjbGFzcyA9IHByb3BzLmMgIT09IFwiLlwiID8gdXNlZGJ5Y2xhc3MgOiBwcm9wcy5yaSA9PT0gNyAmJiBwcm9wcy5jaSA9PT0gNyA/IFwicGJTcXVhcmVDZW50ZXJTcXVhcmVcIiA6IChwcm9wcy5yaSA9PT0gMCB8fCBwcm9wcy5yaSA9PT0gNyB8fCBwcm9wcy5yaSA9PT0gMTQpICYmIChwcm9wcy5jaSA9PT0gMCB8fCBwcm9wcy5jaSA9PT0gNyB8fCBwcm9wcy5jaSA9PT0gMTQpID8gXCJwYlNxdWFyZUVzY2FwZUhhdGNoXCIgOiBwcm9wcy5yaSAlIDIgPT09IHByb3BzLmNpICUgMiA/IFwicGJTcXVhcmVcIiA6IFwicGJTcXVhcmUyXCJcclxuICAgIGNvbnN0IHRkdmFsdWUgPSBwcm9wcy5jICE9PSBcIi5cIiA/IHByb3BzLmMgOiB0ZGNsYXNzID09PSBcInBiU3F1YXJlQ2VudGVyU3F1YXJlXCIgPyBcIuKcsFwiIDogdGRjbGFzcyA9PT0gXCJwYlNxdWFyZUVzY2FwZUhhdGNoXCIgPyBcIvCfkqtcIiA6IHByb3BzLnJpICUgMiA9PT0gcHJvcHMuY2kgJSAyID8gXCLijpRcIiA6IFwi4pymXCJcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RkY2xhc3N9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0ZHZhbHVlfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlclNxdWFyZShyaSwgY2ksIGMsIHNxdWFyZXVzZWRieSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtgU3F1YXJlJHtyaX0tJHtjaX1gfT5cclxuICAgICAgICAgICAgICAgIDxTcXVhcmUgYz17Y30gY2k9e2NpfSByaT17cml9IHNxdWFyZXVzZWRieT17c3F1YXJldXNlZGJ5fSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQ2xpY2socmksIGNpKX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHJlbmRlclJvdyhyaSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2BCb2FyZFJvdyR7cml9YH0gY2xhc3NOYW1lPVwicm93IHBiUm93XCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zcXVhcmVzW3JpXS5tYXAoKGMsY2kpID0+IChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclNxdWFyZShyaSwgY2ksIGMsICh0aGlzLnByb3BzLnVzZWRieVtyaV0pW2NpXSlcclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInBiQm9hcmRcIj5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zcXVhcmVzLm1hcCgocixyaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclJvdyhyaSlcclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgR2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBsZXQgdGlsZXMgPSBbLi4uaW5pdGlhbHRpbGVzXVxyXG4gICAgICAgIGxldCBwdGlsZXMgPSBbXVxyXG4gICAgICAgIGxldCBndGlsZXMgPSBbXVxyXG4gICAgICAgIHdoaWxlIChwdGlsZXMubGVuZ3RoIDwgNykge1xyXG4gICAgICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRpbGVzLmxlbmd0aClcclxuICAgICAgICAgICAgcHRpbGVzLnB1c2godGlsZXNbcmFuZF0pXHJcbiAgICAgICAgICAgIHRpbGVzLnNwbGljZShyYW5kLDEpICAgXHJcbiAgICAgICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aWxlcy5sZW5ndGgpXHJcbiAgICAgICAgICAgIGd0aWxlcy5wdXNoKHRpbGVzW3JhbmRdKVxyXG4gICAgICAgICAgICB0aWxlcy5zcGxpY2UocmFuZCwxKSAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBwdGlsZXMuc29ydCgpXHJcbiAgICAgICAgZ3RpbGVzLnNvcnQoKVxyXG4gICAgICAgIGxldCBzcXVhcmVzID0gQXJyYXkoMTUpLmZpbGwoQXJyYXkoMTUpLmZpbGwoJy4nKSlcclxuICAgICAgICBsZXQgdXNlZGJ5ID0gQXJyYXkoMTUpLmZpbGwoQXJyYXkoMTUpLmZpbGwoJycpKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsIC8vIHNxdWFyZXMgb24gdGhlIGdhbWUgYm9hcmRcclxuICAgICAgICAgICAgdXNlZGJ5OiB1c2VkYnksICAvLyB3aG8gcHV0IGEgdGlsZSBvbiBhIHNxdWFyZVxyXG4gICAgICAgICAgICB0aWxlczogdGlsZXMsXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbjogLTEsIC8vIHdoaWNoIHRpbGUgZnJvbSB0aGUgdGlsZSByYWNrIGluIHBsYXkgaXMgc2VsZWN0ZWRcclxuICAgICAgICAgICAgcHRpbGVzOiBwdGlsZXMsIC8vIHByaXNvbmVycyB0aWxlc1xyXG4gICAgICAgICAgICBndGlsZXM6IGd0aWxlcywgLy8gZ3VhcmRzIHRpbGVzXHJcbiAgICAgICAgICAgIHdob3NldHVybjogJ1AnLCAvLyBwcmlzb25lcnMgcGxheSBmaXJzdFxyXG4gICAgICAgICAgICBjdXJyZW50Y29vcmRzOiBbXSwgLy8gY29vcmRzIG9mIHBsYXkgY3VycmVudGx5IGJlaW5nIG1hZGUgdG8gc3VwcG9ydCB0aWxlIHJlY2FsbCBhbmQgcGxheSB2YWxpZGF0aW9uXHJcbiAgICAgICAgICAgIHJlc2N1ZXM6IDAsIC8vIG51bWJlciBvZiBwcmlzb25lcnMgcmVzY3VlZFxyXG4gICAgICAgICAgICBzbmFwc2hvdDogeyBzcXVhcmVzLCB1c2VkYnksIHB0aWxlcywgZ3RpbGVzIH0gLy8gZm9yIHJldmVydGluZyB0byBzdGFydCBvZiBtb3ZlIGZvciB0aWxlIHJlY2FsbCBvciBleGNoYW5nZSBsb2dpY1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyaSwgY2kpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrIG9uIFwiICsgcmkgKyBcIiwgXCIgKyBjaSlcclxuICAgICAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zdGF0ZS5zZWxlY3Rpb25cclxuICAgICAgICBsZXQgc3F1YXJlcyA9IHRoaXMuc3RhdGUuc3F1YXJlc1xyXG4gICAgICAgIGxldCBzcXVhcmV2YWx1ZSA9IChzcXVhcmVzW3JpXSlbY2ldXHJcbiAgICAgICAgbGV0IHdob3NldHVybiA9IHRoaXMuc3RhdGUud2hvc2V0dXJuXHJcbiAgICAgICAgbGV0IHB0aWxlcyA9IHRoaXMuc3RhdGUucHRpbGVzXHJcbiAgICAgICAgbGV0IGd0aWxlcyA9IHRoaXMuc3RhdGUuZ3RpbGVzXHJcbiAgICAgICAgbGV0IHVzZWRieSA9IHRoaXMuc3RhdGUudXNlZGJ5XHJcbiAgICAgICAgbGV0IGN1cnJlbnRjb29yZHMgPSB0aGlzLnN0YXRlLmN1cnJlbnRjb29yZHNcclxuICAgICAgICBsZXQgY29vcmQgPSBTdHJpbmcocmkpICsgXCItXCIgKyBTdHJpbmcoY2kpO1xyXG4gICAgICAgIGxldCBjY2kgPSBjdXJyZW50Y29vcmRzLmluZGV4T2YoY29vcmQpXHJcbiAgICAgICAgaWYgKHNlbGVjdGlvbiA+IC0xICYmIHNxdWFyZXZhbHVlID09PSBcIi5cIikgeyAvLyB0aWxlIGlzIHNlbGVjdGVkIGZyb20gcmFjayBhbmQgY2xpY2tlZCBzcXVhcmUgaXMgbm90IHVzZWQgeWV0XHJcbiAgICAgICAgICAgIGxldCBuZXdSb3cgPSBbLi4uc3F1YXJlc1tyaV1dXHJcbiAgICAgICAgICAgIG5ld1Jvd1tjaV0gPSB3aG9zZXR1cm4gPT09ICdQJyA/IHB0aWxlc1tzZWxlY3Rpb25dIDogZ3RpbGVzW3NlbGVjdGlvbl1cclxuICAgICAgICAgICAgc3F1YXJlc1tyaV0gPSBbLi4ubmV3Um93XVxyXG4gICAgICAgICAgICB3aG9zZXR1cm4gPT09ICdQJyA/IHB0aWxlcy5zcGxpY2Uoc2VsZWN0aW9uLCAxKSA6IGd0aWxlcy5zcGxpY2Uoc2VsZWN0aW9uLDEpXHJcbiAgICAgICAgICAgIGxldCBuZXdVc2VkYnlSb3cgPSBbLi4udXNlZGJ5W3JpXV1cclxuICAgICAgICAgICAgbmV3VXNlZGJ5Um93W2NpXSA9IHdob3NldHVyblxyXG4gICAgICAgICAgICB1c2VkYnlbcmldID0gWy4uLm5ld1VzZWRieVJvd11cclxuICAgICAgICAgICAgc2VsZWN0aW9uID0gLTFcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLFxyXG4gICAgICAgICAgICAgICAgdXNlZGJ5OiB1c2VkYnksXHJcbiAgICAgICAgICAgICAgICBwdGlsZXM6IHB0aWxlcyxcclxuICAgICAgICAgICAgICAgIGd0aWxlczogZ3RpbGVzLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uOiBzZWxlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Y29vcmRzOiBbLi4uY3VycmVudGNvb3JkcywgY29vcmRdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc3F1YXJldmFsdWUgIT09IFwiLlwiICYmIGNjaSA+IC0xKSB7IC8vIGNsaWNrZWQgc3F1YXJlIGhhcyBhIHRpbGUgb24gaXQgZnJvbSB0aGUgY3VycmVudCBtb3ZlIGluIHByb2dyZXNzXHJcbiAgICAgICAgICAgIC8vIEFzc3VtaW5nIHNvbWUgZ29vZCB3aWxsIGZyb20gdGhlIHVzZXJzIHRvIGNsaWNrIGEgdGlsZSB0aGV5IHBsYXllZFxyXG4gICAgICAgICAgICBpZiAoKHdob3NldHVybiA9PT0gJ1AnICYmIHB0aWxlcy5sZW5ndGggPCA3KSB8fCAod2hvc2V0dXJuID09PSAnRycgJiYgZ3RpbGVzLmxlbmd0aCA8IDcpKSB7XHJcbiAgICAgICAgICAgICAgICB3aG9zZXR1cm4gPT09ICdQJyA/IHB0aWxlcy5wdXNoKHNxdWFyZXZhbHVlKSA6IGd0aWxlcy5wdXNoKHNxdWFyZXZhbHVlKVxyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1JvdyA9IFsuLi5zcXVhcmVzW3JpXV1cclxuICAgICAgICAgICAgICAgIG5ld1Jvd1tjaV0gPSBcIi5cIlxyXG4gICAgICAgICAgICAgICAgc3F1YXJlc1tyaV0gPSBbLi4ubmV3Um93XVxyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1VzZWRieVJvdyA9IFsuLi51c2VkYnlbcmldXVxyXG4gICAgICAgICAgICAgICAgbmV3VXNlZGJ5Um93W2NpXSA9IFwiXCJcclxuICAgICAgICAgICAgICAgIHVzZWRieVtyaV0gPSBbLi4ubmV3VXNlZGJ5Um93XVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uID0gd2hvc2V0dXJuID09PSAnUCcgPyBwdGlsZXMubGVuZ3RoIC0gMSA6IGd0aWxlcy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Y29vcmRzLnNwbGljZShjY2ksMSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlZGJ5OiB1c2VkYnksXHJcbiAgICAgICAgICAgICAgICAgICAgcHRpbGVzOiBwdGlsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3RpbGVzOiBndGlsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uOiBzZWxlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGNvb3JkczogY3VycmVudGNvb3Jkc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUHJpc29uZXJUaWxlQ2xpY2sodGlsZWluZGV4KSB7IC8vIHRoZSBpbmRleCBvZiBwdGlsZXNcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS53aG9zZXR1cm4gPT09ICdQJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbjogdGlsZWluZGV4XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ0l0IGlzIG5vdCB5b3VyIHR1cm4nKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVHdWFyZFRpbGVDbGljayh0aWxlaW5kZXgpIHsgLy8gdGhlIGluZGV4IG9mIGd0aWxlc1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLndob3NldHVybiA9PT0gJ0cnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uOiB0aWxlaW5kZXhcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnSXQgaXMgbm90IHlvdXIgdHVybicpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVuZFByaXNvbmVyc1R1cm4oKSB7XHJcbiAgICAgICAgbGV0IHJlc2N1ZXMgPSB0aGlzLnN0YXRlLnJlc2N1ZXNcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RhdGUuY3VycmVudGNvb3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZXNjYXBlaGF0Y2hlcy5pbmRleE9mKHRoaXMuc3RhdGUuY3VycmVudGNvb3Jkc1tpXSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmVzY3VlcysrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHB0aWxlcyA9IFsuLi50aGlzLnN0YXRlLnB0aWxlc11cclxuICAgICAgICBsZXQgdGlsZXMgPSBbLi4udGhpcy5zdGF0ZS50aWxlc11cclxuICAgICAgICB3aGlsZSAocHRpbGVzLmxlbmd0aCA8IDcgJiYgdGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRpbGVzLmxlbmd0aClcclxuICAgICAgICAgICAgcHRpbGVzLnB1c2godGlsZXNbcmFuZF0pXHJcbiAgICAgICAgICAgIHRpbGVzLnNwbGljZShyYW5kLDEpICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB0aWxlcy5zb3J0KClcclxuICAgICAgICBsZXQgc3F1YXJlcyA9IHRoaXMuc3RhdGUuc3F1YXJlc1xyXG4gICAgICAgIGxldCB1c2VkYnkgPSB0aGlzLnN0YXRlLnVzZWRieVxyXG4gICAgICAgIGxldCBndGlsZXMgPSB0aGlzLnN0YXRlLmd0aWxlc1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB3aG9zZXR1cm46ICdHJyxcclxuICAgICAgICAgICAgc2VsZWN0aW9uOiAtMSxcclxuICAgICAgICAgICAgY3VycmVudGNvb3JkczogW10sXHJcbiAgICAgICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXMsXHJcbiAgICAgICAgICAgIHB0aWxlczogcHRpbGVzLFxyXG4gICAgICAgICAgICB0aWxlczogdGlsZXMsXHJcbiAgICAgICAgICAgIHNuYXBzaG90OiB7IHNxdWFyZXMsIHVzZWRieSwgcHRpbGVzLCBndGlsZXMgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBlbmRHdWFyZHNUdXJuKCkge1xyXG4gICAgICAgIGxldCBndGlsZXMgPSBbLi4udGhpcy5zdGF0ZS5ndGlsZXNdXHJcbiAgICAgICAgbGV0IHRpbGVzID0gWy4uLnRoaXMuc3RhdGUudGlsZXNdXHJcbiAgICAgICAgd2hpbGUgKGd0aWxlcy5sZW5ndGggPCA3ICYmIHRpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aWxlcy5sZW5ndGgpXHJcbiAgICAgICAgICAgIGd0aWxlcy5wdXNoKHRpbGVzW3JhbmRdKVxyXG4gICAgICAgICAgICB0aWxlcy5zcGxpY2UocmFuZCwxKSAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBndGlsZXMuc29ydCgpXHJcbiAgICAgICAgbGV0IHNxdWFyZXMgPSB0aGlzLnN0YXRlLnNxdWFyZXNcclxuICAgICAgICBsZXQgdXNlZGJ5ID0gdGhpcy5zdGF0ZS51c2VkYnlcclxuICAgICAgICBsZXQgcHRpbGVzID0gdGhpcy5zdGF0ZS5wdGlsZXNcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgd2hvc2V0dXJuOiAnUCcsXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbjogLTEsXHJcbiAgICAgICAgICAgIGN1cnJlbnRjb29yZHM6IFtdLFxyXG4gICAgICAgICAgICBndGlsZXM6IGd0aWxlcyxcclxuICAgICAgICAgICAgdGlsZXM6IHRpbGVzLFxyXG4gICAgICAgICAgICBzbmFwc2hvdDogeyBzcXVhcmVzLCB1c2VkYnksIHB0aWxlcywgZ3RpbGVzIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlY2FsbFRpbGVzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGlsZSByZWNhbGwgXCIgKyBwdGlsZXMudG9TdHJpbmcoKSArIFwiIDogXCIgKyBndGlsZXMudG9TdHJpbmcoKSlcclxuICAgICAgICBsZXQgc3F1YXJlcyA9IHRoaXMuc3RhdGUuc25hcHNob3Quc3F1YXJlc1xyXG4gICAgICAgIGxldCB1c2VkYnkgPSB0aGlzLnN0YXRlLnNuYXBzaG90LnVzZWRieVxyXG4gICAgICAgIGxldCBwdGlsZXMgPSB0aGlzLnN0YXRlLnNuYXBzaG90LnB0aWxlc1xyXG4gICAgICAgIGxldCBndGlsZXMgPSB0aGlzLnN0YXRlLnNuYXBzaG90Lmd0aWxlc1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3Rpb246IC0xLFxyXG4gICAgICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLFxyXG4gICAgICAgICAgICB1c2VkYnk6IHVzZWRieSxcclxuICAgICAgICAgICAgcHRpbGVzOiBwdGlsZXMsXHJcbiAgICAgICAgICAgIGd0aWxlczogZ3RpbGVzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBwcmlzb25icmVha1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTEgcGJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcmlzb24gQnJlYWtcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgcGJob21lbGlua1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnLi4vLi4vJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7wn4+gPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTIgcGJQcmlzb25lcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByaXNvbmVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHRpbGVzPXt0aGlzLnN0YXRlLnB0aWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdob3NldHVybj17dGhpcy5zdGF0ZS53aG9zZXR1cm59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb249e3RoaXMuc3RhdGUuc2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KHRpKSA9PiB0aGlzLmhhbmRsZVByaXNvbmVyVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tGaW5pc2hUdXJuPXsoKSA9PiB0aGlzLmVuZFByaXNvbmVyc1R1cm4oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tUaWxlUmVjYWxsPXsoKSA9PiB0aGlzLnJlY2FsbFRpbGVzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNjdWVzPXt0aGlzLnN0YXRlLnJlc2N1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzPXt0aGlzLnN0YXRlLnNxdWFyZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VkYnk9e3RoaXMuc3RhdGUudXNlZGJ5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KHJpLCBjaSkgPT4gdGhpcy5oYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJpLCBjaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMiBwYkd1YXJkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3VhcmRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBndGlsZXM9e3RoaXMuc3RhdGUuZ3RpbGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hvc2V0dXJuPXt0aGlzLnN0YXRlLndob3NldHVybn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17dGhpcy5zdGF0ZS5zZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IHRoaXMuaGFuZGxlR3VhcmRUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja0ZpbmlzaFR1cm49eygpID0+IHRoaXMuZW5kR3VhcmRzVHVybigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja1RpbGVSZWNhbGw9eygpID0+IHRoaXMucmVjYWxsVGlsZXMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRpbGVzIHRpbGVzPXt0aGlzLnN0YXRlLnRpbGVzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTsgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRpbGVzKHByb3BzKSB7XHJcbiAgICAvLyB0aGVyZSBpcyBhIGJldHRlciB3YXkgXl5eXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcG9vbFwiPlxyXG4gICAgICAgICAgICA8aDM+VElMRSBQT09MPC9oMz5cclxuICAgICAgICAgICAge3Byb3BzLnRpbGVzLm1hcCgodCx0aSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtgdGlsZSR7dGl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RpID4gMCAmJiB0ICE9PSBwcm9wcy50aWxlc1t0aS0xXSA/IDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcG9vbERpdmlkZXJcIj48L2Rpdj4gOiA8PjwvPn1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYlRpbGVwb29sVGlsZVwiPnt0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJhY2tUaWxlKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx0ZCBjbGFzc05hbWU9e3Byb3BzLnRpbGVjbGFzc30gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgICAgIHtwcm9wcy50aWxldmFsdWV9XHJcbiAgICAgICAgPC90ZD5cclxuICAgICkgICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEZpbmlzaFR1cm5CdXR0b24ocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAgRmluaXNoIFR1cm5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gVGlsZVJlY2FsbEJ1dHRvbihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICBSZWNhbGwgVGlsZXNcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIClcclxufVxyXG5jbGFzcyBQcmlzb25lcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyVGlsZSh0aWxlY2xhc3MsIHRpbGVpbmRleCwgdGlsZXZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJhY2tUaWxlIGtleT17dGlsZWNsYXNzICsgU3RyaW5nKHRpbGVpbmRleCl9IHRpbGVjbGFzcz17dGlsZWNsYXNzfSB0aWxldmFsdWU9e3RpbGV2YWx1ZX0gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkNsaWNrKHRpbGVpbmRleCl9Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckZpbmlzaFR1cm4oKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZpbmlzaFR1cm5CdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkNsaWNrRmluaXNoVHVybigpfS8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJSZWNhbGxUaWxlcygpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VGlsZVJlY2FsbEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQ2xpY2tUaWxlUmVjYWxsKCl9Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckZyZWVkUHJpc29uZXJzKGNvdW50KSB7XHJcbiAgICAgICAgbGV0IGR1bWIgPSBBcnJheShjb3VudCkuZmlsbCgnbm9uc2Vuc2UnKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGR1bWIubWFwKCh2YWx1ZSxpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXt2YWx1ZSArIFN0cmluZyhpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2JyZWFrZnJlZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJJ20gZnJlZSEgSSdtIGZyZWUhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+UFJJU09ORVJTPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnB0aWxlcy5tYXAoKHQsdGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUaWxlKHRoaXMucHJvcHMud2hvc2V0dXJuID09PSAnUCcgJiYgdGhpcy5wcm9wcy5zZWxlY3Rpb24gPT09IHRpID8gXCJwYlRpbGVPblJhY2tTZWxlY3RlZFBcIiA6IFwicGJUaWxlT25SYWNrUFwiLCB0aSwgdClcclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLndob3NldHVybiA9PT0gJ1AnID9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckZpbmlzaFR1cm4oKVxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMud2hvc2V0dXJuID09PSAnUCcgP1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUmVjYWxsVGlsZXMoKVxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVzY3VlcyBtYWRlOiB7dGhpcy5wcm9wcy5yZXNjdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckZyZWVkUHJpc29uZXJzKHRoaXMucHJvcHMucmVzY3Vlcyl9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5jbGFzcyBHdWFyZHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyVGlsZSh0aWxlY2xhc3MsIHRpbGVpbmRleCwgdGlsZXZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJhY2tUaWxlIGtleT17dGlsZWNsYXNzICsgU3RyaW5nKHRpbGVpbmRleCl9IHRpbGVjbGFzcz17dGlsZWNsYXNzfSB0aWxldmFsdWU9e3RpbGV2YWx1ZX0gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkNsaWNrKHRpbGVpbmRleCl9Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckZpbmlzaFR1cm4oKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZpbmlzaFR1cm5CdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkNsaWNrRmluaXNoVHVybigpfS8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJSZWNhbGxUaWxlcygpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VGlsZVJlY2FsbEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQ2xpY2tUaWxlUmVjYWxsKCl9Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+R1VBUkRTPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmd0aWxlcy5tYXAoKHQsdGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUaWxlKHRoaXMucHJvcHMud2hvc2V0dXJuID09PSAnRycgJiYgdGhpcy5wcm9wcy5zZWxlY3Rpb24gPT09IHRpID8gXCJwYlRpbGVPblJhY2tTZWxlY3RlZEdcIiA6IFwicGJUaWxlT25SYWNrR1wiLCB0aSwgdClcclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLndob3NldHVybiA9PT0gJ0cnID9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckZpbmlzaFR1cm4oKVxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMud2hvc2V0dXJuID09PSAnRycgP1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUmVjYWxsVGlsZXMoKVxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9