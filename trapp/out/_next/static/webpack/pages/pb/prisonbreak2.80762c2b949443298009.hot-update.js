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
        squares: [...squares],
        usedby: [...usedby],
        ptiles: [...ptiles],
        gtiles: [...gtiles]
      }
    });
  }

  recallTiles() {
    let squares = this.state.snapshot.squares;
    let usedby = this.state.snapshot.usedby;
    let ptiles = this.state.snapshot.ptiles;
    let gtiles = this.state.snapshot.gtiles;
    console.log("Tile recall " + ptiles.toString() + " : " + gtiles.toString());
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
          lineNumber: 259,
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
              lineNumber: 264,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 258,
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
            lineNumber: 270,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
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
            lineNumber: 281,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
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
            lineNumber: 288,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Tiles, {
            tiles: this.state.tiles
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 257,
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
      lineNumber: 310,
      columnNumber: 13
    }, this), props.tiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [ti > 0 && t !== props.tiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pbTilepoolDivider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 58
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbTilepoolTile",
        children: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 21
      }, this)]
    }, `tile${ti}`, true, {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 17
    }, this))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 309,
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
    lineNumber: 323,
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
    lineNumber: 331,
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
    lineNumber: 339,
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
      lineNumber: 347,
      columnNumber: 13
    }, this);
  }

  renderFinishTurn() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
      onClick: () => this.props.onClickFinishTurn()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 13
    }, this);
  }

  renderRecallTiles() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
      onClick: () => this.props.onClickTileRecall()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 359,
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
        lineNumber: 368,
        columnNumber: 21
      }, this)
    }, value + String(index), false, {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 17
    }, this));
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "PRISONERS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "pbTilerack",
        children: this.props.ptiles.map((t, ti) => this.renderTile(this.props.whoseturn === 'P' && this.props.selection === ti ? "pbTileOnRackSelectedP" : "pbTileOnRackP", ti, t))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 17
      }, this), this.props.whoseturn === 'P' ? this.renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), this.props.whoseturn === 'P' ? this.renderRecallTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Rescues made: ", this.props.rescues, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 399,
          columnNumber: 21
        }, this), this.renderFreedPrisoners(this.props.rescues)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 397,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 380,
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
      lineNumber: 409,
      columnNumber: 13
    }, this);
  }

  renderFinishTurn() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
      onClick: () => this.props.onClickFinishTurn()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 13
    }, this);
  }

  renderRecallTiles() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
      onClick: () => this.props.onClickTileRecall()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 13
    }, this);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "GUARDS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 428,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "pbTilerack",
        children: this.props.gtiles.map((t, ti) => this.renderTile(this.props.whoseturn === 'G' && this.props.selection === ti ? "pbTileOnRackSelectedG" : "pbTileOnRackG", ti, t))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 429,
        columnNumber: 17
      }, this), this.props.whoseturn === 'G' ? this.renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), this.props.whoseturn === 'G' ? this.renderRecallTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 427,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsyLmpzIl0sIm5hbWVzIjpbImVzY2FwZWhhdGNoZXMiLCJpbml0aWFsdGlsZXMiLCJQcmlzb25CcmVhayIsIlNxdWFyZSIsInByb3BzIiwidXNlZGJ5Y2xhc3MiLCJzcXVhcmV1c2VkYnkiLCJ0ZGNsYXNzIiwiYyIsInJpIiwiY2kiLCJ0ZHZhbHVlIiwib25DbGljayIsIkJvYXJkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXJTcXVhcmUiLCJyZW5kZXJSb3ciLCJzcXVhcmVzIiwibWFwIiwidXNlZGJ5IiwicmVuZGVyIiwiciIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsInRpbGVzIiwicHRpbGVzIiwiZ3RpbGVzIiwibGVuZ3RoIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzcGxpY2UiLCJzb3J0IiwiQXJyYXkiLCJmaWxsIiwic3RhdGUiLCJzZWxlY3Rpb24iLCJ3aG9zZXR1cm4iLCJjdXJyZW50Y29vcmRzIiwicmVzY3VlcyIsInNuYXBzaG90IiwiaGFuZGxlQm9hcmRTcXVhcmVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJzcXVhcmV2YWx1ZSIsImNvb3JkIiwiU3RyaW5nIiwiY2NpIiwiaW5kZXhPZiIsIm5ld1JvdyIsIm5ld1VzZWRieVJvdyIsInNldFN0YXRlIiwiaGFuZGxlUHJpc29uZXJUaWxlQ2xpY2siLCJ0aWxlaW5kZXgiLCJhbGVydCIsImhhbmRsZUd1YXJkVGlsZUNsaWNrIiwiZW5kUHJpc29uZXJzVHVybiIsImkiLCJlbmRHdWFyZHNUdXJuIiwicmVjYWxsVGlsZXMiLCJ0b1N0cmluZyIsInRpIiwiVGlsZXMiLCJ0IiwiUmFja1RpbGUiLCJ0aWxlY2xhc3MiLCJ0aWxldmFsdWUiLCJGaW5pc2hUdXJuQnV0dG9uIiwiVGlsZVJlY2FsbEJ1dHRvbiIsIlByaXNvbmVycyIsInJlbmRlclRpbGUiLCJyZW5kZXJGaW5pc2hUdXJuIiwib25DbGlja0ZpbmlzaFR1cm4iLCJyZW5kZXJSZWNhbGxUaWxlcyIsIm9uQ2xpY2tUaWxlUmVjYWxsIiwicmVuZGVyRnJlZWRQcmlzb25lcnMiLCJjb3VudCIsImR1bWIiLCJ2YWx1ZSIsImluZGV4IiwiR3VhcmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsYUFBYSxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxNQUFmLEVBQXVCLEtBQXZCLEVBQThCLE1BQTlCLEVBQXNDLE1BQXRDLEVBQThDLE1BQTlDLEVBQXNELE9BQXRELENBQXRCLEMsQ0FBcUY7O0FBQ3JGLE1BQU1DLFlBQVksR0FBRyxDQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVMsR0FBVCxFQUFhLEdBQWIsRUFBaUIsR0FBakIsRUFBcUIsR0FBckIsRUFBeUIsR0FBekIsRUFBNkIsR0FBN0IsRUFBaUMsR0FBakMsRUFDcEIsR0FEb0IsRUFDaEIsR0FEZ0IsRUFDWixHQURZLEVBQ1IsR0FEUSxFQUNKLEdBREksRUFDQSxHQURBLEVBQ0ksR0FESixFQUNRLEdBRFIsRUFDWSxHQURaLEVBQ2dCLEdBRGhCLEVBQ29CLEdBRHBCLEVBQ3dCLEdBRHhCLEVBQzRCLEdBRDVCLEVBQ2dDLEdBRGhDLEVBQ29DLEdBRHBDLEVBQ3dDLEdBRHhDLEVBQzRDLEdBRDVDLEVBQ2dELEdBRGhELEVBQ29ELEdBRHBELEVBQ3dELEdBRHhELEVBRXBCLEdBRm9CLEVBRWhCLEdBRmdCLEVBRVosR0FGWSxFQUVSLEdBRlEsRUFFSixHQUZJLEVBRUEsR0FGQSxFQUVJLEdBRkosRUFFUSxHQUZSLEVBRVksR0FGWixFQUVnQixHQUZoQixFQUVvQixHQUZwQixFQUV3QixHQUZ4QixFQUU0QixHQUY1QixFQUVnQyxHQUZoQyxFQUVvQyxHQUZwQyxFQUV3QyxHQUZ4QyxFQUU0QyxHQUY1QyxFQUVnRCxHQUZoRCxFQUVvRCxHQUZwRCxFQUV3RCxHQUZ4RCxFQUU0RCxHQUY1RCxFQUVnRSxHQUZoRSxFQUdwQixHQUhvQixFQUdoQixH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QUF3RixlQUF4RyxFQUF5SEEsRUFBekgsRUFBNkhFLENBQTdILENBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosRUFPSyxLQUFLOUQsS0FBTCxDQUFXb0MsU0FBWCxLQUF5QixHQUF6QixHQUNHLEtBQUtrQyxnQkFBTCxFQURILGdCQUdHLHVKQVZSLEVBWUssS0FBS3RFLEtBQUwsQ0FBV29DLFNBQVgsS0FBeUIsR0FBekIsR0FDRyxLQUFLb0MsaUJBQUwsRUFESCxnQkFHRyx1SkFmUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQW9CSDs7QUF4Q2dDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BiL3ByaXNvbmJyZWFrMi44MDc2MmMyYjk0OTQ0MzI5ODAwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IGVzY2FwZWhhdGNoZXMgPSBbXCIwLTBcIiwgXCIwLTdcIiwgXCIwLTE0XCIsIFwiNy0wXCIsIFwiNy0xNFwiLCBcIjE0LTBcIiwgXCIxNC03XCIsIFwiMTQtMTRcIl0gLy8gY29vcmRzIG9mIGVzY2FwZSBoYXRjaGVzXHJcbmNvbnN0IGluaXRpYWx0aWxlcyA9IFsnQScsJ0EnLCdBJywnQScsJ0EnLCdBJywnQScsJ0EnLCdBJ1xyXG4sJ0InLCdCJywnQycsJ0MnLCdEJywnRCcsJ0QnLCdEJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJ1xyXG4sJ0YnLCdGJywnRycsJ0cnLCdHJywnSCcsJ0gnLCdJJywnSScsJ0knLCdJJywnSScsJ0knLCdJJywnSScsJ0knLCdKJywnSycsJ0wnLCdMJywnTCcsJ0wnXHJcbiwnTScsJ00nLCdOJywnTicsJ04nLCdOJywnTicsJ04nLCdPJywnTycsJ08nLCdPJywnTycsJ08nLCdPJywnTycsJ1AnLCdQJywnUSdcclxuLCdSJywnUicsJ1InLCdSJywnUicsJ1InLCdTJywnUycsJ1MnLCdTJywnVCcsJ1QnLCdUJywnVCcsJ1QnLCdUJywnVScsJ1UnLCdVJywnVScsJ1YnLCdWJ1xyXG4sJ1cnLCdXJywnWCcsJ1knLCdZJywnWicsJz8nLCc/J10gLy8gaW5pdGlhbCB0aWxlIHBvb2xcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaXNvbkJyZWFrKCkge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxHYW1lIC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNxdWFyZShwcm9wcykgeyAvLyBzcXVhcmV1c2VkYnksIHJpLCBjaSwgYywgb25DbGlja1xyXG4gICAgLy8gbmVlZCBzcXVhcmV1c2VkYnkgdG8gcGljayBjc3MgY2xhc3NOYW1lIGNvcnJlc3BvbmRpbmcgdG8gd2hvIHBsYXllZCB0aGUgdGlsZSBvbiB0aGUgc3F1YXJlXHJcbiAgICAvLyBuZWVkIHJpLCBjaSB0byBkaXNwbGF5IGFsdGVybmF0aW5nIGNoYXJhY3RlcnMgb24gdW51c2VkIHNxdWFyZXNcclxuICAgIC8vIG5lZWQgYyB0byByZXByZXNlbnQgd2hpY2ggdGlsZSBpcyBvbiB0aGUgc3F1YXJlLCBpZiBhbnlcclxuICAgIC8vIG5lZWQgb25DbGljayB0byBoYW5kbGUgc3F1YXJlIGNsaWNrIGF0IGEgaGlnaGVyIGxldmVsXHJcbiAgICBjb25zdCB1c2VkYnljbGFzcyA9IHByb3BzLnNxdWFyZXVzZWRieSA9PT0gXCJQXCIgPyBcInBiU3F1YXJlVXNlZEJ5UHJpc29uZXJzXCIgOiBcInBiU3F1YXJlVXNlZEJ5R3VhcmRzXCJcclxuICAgIGNvbnN0IHRkY2xhc3MgPSBwcm9wcy5jICE9PSBcIi5cIiA/IHVzZWRieWNsYXNzIDogcHJvcHMucmkgPT09IDcgJiYgcHJvcHMuY2kgPT09IDcgPyBcInBiU3F1YXJlQ2VudGVyU3F1YXJlXCIgOiAocHJvcHMucmkgPT09IDAgfHwgcHJvcHMucmkgPT09IDcgfHwgcHJvcHMucmkgPT09IDE0KSAmJiAocHJvcHMuY2kgPT09IDAgfHwgcHJvcHMuY2kgPT09IDcgfHwgcHJvcHMuY2kgPT09IDE0KSA/IFwicGJTcXVhcmVFc2NhcGVIYXRjaFwiIDogcHJvcHMucmkgJSAyID09PSBwcm9wcy5jaSAlIDIgPyBcInBiU3F1YXJlXCIgOiBcInBiU3F1YXJlMlwiXHJcbiAgICBjb25zdCB0ZHZhbHVlID0gcHJvcHMuYyAhPT0gXCIuXCIgPyBwcm9wcy5jIDogdGRjbGFzcyA9PT0gXCJwYlNxdWFyZUNlbnRlclNxdWFyZVwiID8gXCLinLBcIiA6IHRkY2xhc3MgPT09IFwicGJTcXVhcmVFc2NhcGVIYXRjaFwiID8gXCLwn5KrXCIgOiBwcm9wcy5yaSAlIDIgPT09IHByb3BzLmNpICUgMiA/IFwi4o6UXCIgOiBcIuKcplwiXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt0ZGNsYXNzfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGR2YWx1ZX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jbGFzcyBCb2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXJTcXVhcmUocmksIGNpLCBjLCBzcXVhcmV1c2VkYnkpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17YFNxdWFyZSR7cml9LSR7Y2l9YH0+XHJcbiAgICAgICAgICAgICAgICA8U3F1YXJlIGM9e2N9IGNpPXtjaX0gcmk9e3JpfSBzcXVhcmV1c2VkYnk9e3NxdWFyZXVzZWRieX0gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkNsaWNrKHJpLCBjaSl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJSb3cocmkpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtgQm9hcmRSb3cke3JpfWB9IGNsYXNzTmFtZT1cInJvdyBwYlJvd1wiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc3F1YXJlc1tyaV0ubWFwKChjLGNpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJTcXVhcmUocmksIGNpLCBjLCAodGhpcy5wcm9wcy51c2VkYnlbcmldKVtjaV0pXHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJwYkJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc3F1YXJlcy5tYXAoKHIscmkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJSb3cocmkpXHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIClcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEdhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgbGV0IHRpbGVzID0gWy4uLmluaXRpYWx0aWxlc11cclxuICAgICAgICBsZXQgcHRpbGVzID0gW11cclxuICAgICAgICBsZXQgZ3RpbGVzID0gW11cclxuICAgICAgICB3aGlsZSAocHRpbGVzLmxlbmd0aCA8IDcpIHtcclxuICAgICAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aWxlcy5sZW5ndGgpXHJcbiAgICAgICAgICAgIHB0aWxlcy5wdXNoKHRpbGVzW3JhbmRdKVxyXG4gICAgICAgICAgICB0aWxlcy5zcGxpY2UocmFuZCwxKSAgIFxyXG4gICAgICAgICAgICByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGlsZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICBndGlsZXMucHVzaCh0aWxlc1tyYW5kXSlcclxuICAgICAgICAgICAgdGlsZXMuc3BsaWNlKHJhbmQsMSkgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgcHRpbGVzLnNvcnQoKVxyXG4gICAgICAgIGd0aWxlcy5zb3J0KClcclxuICAgICAgICBsZXQgc3F1YXJlcyA9IEFycmF5KDE1KS5maWxsKEFycmF5KDE1KS5maWxsKCcuJykpXHJcbiAgICAgICAgbGV0IHVzZWRieSA9IEFycmF5KDE1KS5maWxsKEFycmF5KDE1KS5maWxsKCcnKSlcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLCAvLyBzcXVhcmVzIG9uIHRoZSBnYW1lIGJvYXJkXHJcbiAgICAgICAgICAgIHVzZWRieTogdXNlZGJ5LCAgLy8gd2hvIHB1dCBhIHRpbGUgb24gYSBzcXVhcmVcclxuICAgICAgICAgICAgdGlsZXM6IHRpbGVzLFxyXG4gICAgICAgICAgICBzZWxlY3Rpb246IC0xLCAvLyB3aGljaCB0aWxlIGZyb20gdGhlIHRpbGUgcmFjayBpbiBwbGF5IGlzIHNlbGVjdGVkXHJcbiAgICAgICAgICAgIHB0aWxlczogcHRpbGVzLCAvLyBwcmlzb25lcnMgdGlsZXNcclxuICAgICAgICAgICAgZ3RpbGVzOiBndGlsZXMsIC8vIGd1YXJkcyB0aWxlc1xyXG4gICAgICAgICAgICB3aG9zZXR1cm46ICdQJywgLy8gcHJpc29uZXJzIHBsYXkgZmlyc3RcclxuICAgICAgICAgICAgY3VycmVudGNvb3JkczogW10sIC8vIGNvb3JkcyBvZiBwbGF5IGN1cnJlbnRseSBiZWluZyBtYWRlIHRvIHN1cHBvcnQgdGlsZSByZWNhbGwgYW5kIHBsYXkgdmFsaWRhdGlvblxyXG4gICAgICAgICAgICByZXNjdWVzOiAwLCAvLyBudW1iZXIgb2YgcHJpc29uZXJzIHJlc2N1ZWRcclxuICAgICAgICAgICAgc25hcHNob3Q6IHsgLy8gZm9yIHJldmVydGluZyB0byBzdGFydCBvZiBtb3ZlIGZvciB0aWxlIHJlY2FsbCBvciBleGNoYW5nZSBsb2dpY1xyXG4gICAgICAgICAgICAgICAgc3F1YXJlczogWy4uLnNxdWFyZXNdLFxyXG4gICAgICAgICAgICAgICAgdXNlZGJ5OiBbLi4udXNlZGJ5XSxcclxuICAgICAgICAgICAgICAgIHB0aWxlczogWy4uLnB0aWxlc10sXHJcbiAgICAgICAgICAgICAgICBndGlsZXM6IFsuLi5ndGlsZXNdXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJpLCBjaSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2sgb24gXCIgKyByaSArIFwiLCBcIiArIGNpKVxyXG4gICAgICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnN0YXRlLnNlbGVjdGlvblxyXG4gICAgICAgIGxldCBzcXVhcmVzID0gdGhpcy5zdGF0ZS5zcXVhcmVzXHJcbiAgICAgICAgbGV0IHNxdWFyZXZhbHVlID0gKHNxdWFyZXNbcmldKVtjaV1cclxuICAgICAgICBsZXQgd2hvc2V0dXJuID0gdGhpcy5zdGF0ZS53aG9zZXR1cm5cclxuICAgICAgICBsZXQgcHRpbGVzID0gdGhpcy5zdGF0ZS5wdGlsZXNcclxuICAgICAgICBsZXQgZ3RpbGVzID0gdGhpcy5zdGF0ZS5ndGlsZXNcclxuICAgICAgICBsZXQgdXNlZGJ5ID0gdGhpcy5zdGF0ZS51c2VkYnlcclxuICAgICAgICBsZXQgY3VycmVudGNvb3JkcyA9IHRoaXMuc3RhdGUuY3VycmVudGNvb3Jkc1xyXG4gICAgICAgIGxldCBjb29yZCA9IFN0cmluZyhyaSkgKyBcIi1cIiArIFN0cmluZyhjaSk7XHJcbiAgICAgICAgbGV0IGNjaSA9IGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZClcclxuICAgICAgICBpZiAoc2VsZWN0aW9uID4gLTEgJiYgc3F1YXJldmFsdWUgPT09IFwiLlwiKSB7IC8vIHRpbGUgaXMgc2VsZWN0ZWQgZnJvbSByYWNrIGFuZCBjbGlja2VkIHNxdWFyZSBpcyBub3QgdXNlZCB5ZXRcclxuICAgICAgICAgICAgbGV0IG5ld1JvdyA9IFsuLi5zcXVhcmVzW3JpXV1cclxuICAgICAgICAgICAgbmV3Um93W2NpXSA9IHdob3NldHVybiA9PT0gJ1AnID8gcHRpbGVzW3NlbGVjdGlvbl0gOiBndGlsZXNbc2VsZWN0aW9uXVxyXG4gICAgICAgICAgICBzcXVhcmVzW3JpXSA9IFsuLi5uZXdSb3ddXHJcbiAgICAgICAgICAgIHdob3NldHVybiA9PT0gJ1AnID8gcHRpbGVzLnNwbGljZShzZWxlY3Rpb24sIDEpIDogZ3RpbGVzLnNwbGljZShzZWxlY3Rpb24sMSlcclxuICAgICAgICAgICAgbGV0IG5ld1VzZWRieVJvdyA9IFsuLi51c2VkYnlbcmldXVxyXG4gICAgICAgICAgICBuZXdVc2VkYnlSb3dbY2ldID0gd2hvc2V0dXJuXHJcbiAgICAgICAgICAgIHVzZWRieVtyaV0gPSBbLi4ubmV3VXNlZGJ5Um93XVxyXG4gICAgICAgICAgICBzZWxlY3Rpb24gPSAtMVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsXHJcbiAgICAgICAgICAgICAgICB1c2VkYnk6IHVzZWRieSxcclxuICAgICAgICAgICAgICAgIHB0aWxlczogcHRpbGVzLFxyXG4gICAgICAgICAgICAgICAgZ3RpbGVzOiBndGlsZXMsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb246IHNlbGVjdGlvbixcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRjb29yZHM6IFsuLi5jdXJyZW50Y29vcmRzLCBjb29yZF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzcXVhcmV2YWx1ZSAhPT0gXCIuXCIgJiYgY2NpID4gLTEpIHsgLy8gY2xpY2tlZCBzcXVhcmUgaGFzIGEgdGlsZSBvbiBpdCBmcm9tIHRoZSBjdXJyZW50IG1vdmUgaW4gcHJvZ3Jlc3NcclxuICAgICAgICAgICAgLy8gQXNzdW1pbmcgc29tZSBnb29kIHdpbGwgZnJvbSB0aGUgdXNlcnMgdG8gY2xpY2sgYSB0aWxlIHRoZXkgcGxheWVkXHJcbiAgICAgICAgICAgIGlmICgod2hvc2V0dXJuID09PSAnUCcgJiYgcHRpbGVzLmxlbmd0aCA8IDcpIHx8ICh3aG9zZXR1cm4gPT09ICdHJyAmJiBndGlsZXMubGVuZ3RoIDwgNykpIHtcclxuICAgICAgICAgICAgICAgIHdob3NldHVybiA9PT0gJ1AnID8gcHRpbGVzLnB1c2goc3F1YXJldmFsdWUpIDogZ3RpbGVzLnB1c2goc3F1YXJldmFsdWUpXHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3Um93ID0gWy4uLnNxdWFyZXNbcmldXVxyXG4gICAgICAgICAgICAgICAgbmV3Um93W2NpXSA9IFwiLlwiXHJcbiAgICAgICAgICAgICAgICBzcXVhcmVzW3JpXSA9IFsuLi5uZXdSb3ddXHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3VXNlZGJ5Um93ID0gWy4uLnVzZWRieVtyaV1dXHJcbiAgICAgICAgICAgICAgICBuZXdVc2VkYnlSb3dbY2ldID0gXCJcIlxyXG4gICAgICAgICAgICAgICAgdXNlZGJ5W3JpXSA9IFsuLi5uZXdVc2VkYnlSb3ddXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24gPSB3aG9zZXR1cm4gPT09ICdQJyA/IHB0aWxlcy5sZW5ndGggLSAxIDogZ3RpbGVzLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRjb29yZHMuc3BsaWNlKGNjaSwxKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlczogc3F1YXJlcyxcclxuICAgICAgICAgICAgICAgICAgICB1c2VkYnk6IHVzZWRieSxcclxuICAgICAgICAgICAgICAgICAgICBwdGlsZXM6IHB0aWxlcyxcclxuICAgICAgICAgICAgICAgICAgICBndGlsZXM6IGd0aWxlcyxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb246IHNlbGVjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Y29vcmRzOiBjdXJyZW50Y29vcmRzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQcmlzb25lclRpbGVDbGljayh0aWxlaW5kZXgpIHsgLy8gdGhlIGluZGV4IG9mIHB0aWxlc1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLndob3NldHVybiA9PT0gJ1AnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uOiB0aWxlaW5kZXhcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnSXQgaXMgbm90IHlvdXIgdHVybicpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUd1YXJkVGlsZUNsaWNrKHRpbGVpbmRleCkgeyAvLyB0aGUgaW5kZXggb2YgZ3RpbGVzXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUud2hvc2V0dXJuID09PSAnRycpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb246IHRpbGVpbmRleFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdJdCBpcyBub3QgeW91ciB0dXJuJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZW5kUHJpc29uZXJzVHVybigpIHtcclxuICAgICAgICBsZXQgcmVzY3VlcyA9IHRoaXMuc3RhdGUucmVzY3Vlc1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5jdXJyZW50Y29vcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlc2NhcGVoYXRjaGVzLmluZGV4T2YodGhpcy5zdGF0ZS5jdXJyZW50Y29vcmRzW2ldKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXNjdWVzKytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcHRpbGVzID0gWy4uLnRoaXMuc3RhdGUucHRpbGVzXVxyXG4gICAgICAgIGxldCB0aWxlcyA9IFsuLi50aGlzLnN0YXRlLnRpbGVzXVxyXG4gICAgICAgIHdoaWxlIChwdGlsZXMubGVuZ3RoIDwgNyAmJiB0aWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGlsZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICBwdGlsZXMucHVzaCh0aWxlc1tyYW5kXSlcclxuICAgICAgICAgICAgdGlsZXMuc3BsaWNlKHJhbmQsMSkgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgcHRpbGVzLnNvcnQoKVxyXG4gICAgICAgIGxldCBzcXVhcmVzID0gdGhpcy5zdGF0ZS5zcXVhcmVzXHJcbiAgICAgICAgbGV0IHVzZWRieSA9IHRoaXMuc3RhdGUudXNlZGJ5XHJcbiAgICAgICAgbGV0IGd0aWxlcyA9IHRoaXMuc3RhdGUuZ3RpbGVzXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHdob3NldHVybjogJ0cnLFxyXG4gICAgICAgICAgICBzZWxlY3Rpb246IC0xLFxyXG4gICAgICAgICAgICBjdXJyZW50Y29vcmRzOiBbXSxcclxuICAgICAgICAgICAgcmVzY3VlczogcmVzY3VlcyxcclxuICAgICAgICAgICAgcHRpbGVzOiBwdGlsZXMsXHJcbiAgICAgICAgICAgIHRpbGVzOiB0aWxlcyxcclxuICAgICAgICAgICAgc25hcHNob3Q6IHsgXHJcbiAgICAgICAgICAgICAgICBzcXVhcmVzOiBbLi4uc3F1YXJlc10sXHJcbiAgICAgICAgICAgICAgICB1c2VkYnk6IFsuLi51c2VkYnldLFxyXG4gICAgICAgICAgICAgICAgcHRpbGVzOiBbLi4ucHRpbGVzXSxcclxuICAgICAgICAgICAgICAgIGd0aWxlczogWy4uLmd0aWxlc11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBlbmRHdWFyZHNUdXJuKCkge1xyXG4gICAgICAgIGxldCBndGlsZXMgPSBbLi4udGhpcy5zdGF0ZS5ndGlsZXNdXHJcbiAgICAgICAgbGV0IHRpbGVzID0gWy4uLnRoaXMuc3RhdGUudGlsZXNdXHJcbiAgICAgICAgd2hpbGUgKGd0aWxlcy5sZW5ndGggPCA3ICYmIHRpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aWxlcy5sZW5ndGgpXHJcbiAgICAgICAgICAgIGd0aWxlcy5wdXNoKHRpbGVzW3JhbmRdKVxyXG4gICAgICAgICAgICB0aWxlcy5zcGxpY2UocmFuZCwxKSAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBndGlsZXMuc29ydCgpXHJcbiAgICAgICAgbGV0IHNxdWFyZXMgPSB0aGlzLnN0YXRlLnNxdWFyZXNcclxuICAgICAgICBsZXQgdXNlZGJ5ID0gdGhpcy5zdGF0ZS51c2VkYnlcclxuICAgICAgICBsZXQgcHRpbGVzID0gdGhpcy5zdGF0ZS5wdGlsZXNcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgd2hvc2V0dXJuOiAnUCcsXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbjogLTEsXHJcbiAgICAgICAgICAgIGN1cnJlbnRjb29yZHM6IFtdLFxyXG4gICAgICAgICAgICBndGlsZXM6IGd0aWxlcyxcclxuICAgICAgICAgICAgdGlsZXM6IHRpbGVzLFxyXG4gICAgICAgICAgICBzbmFwc2hvdDogeyBcclxuICAgICAgICAgICAgICAgIHNxdWFyZXM6IFsuLi5zcXVhcmVzXSxcclxuICAgICAgICAgICAgICAgIHVzZWRieTogWy4uLnVzZWRieV0sXHJcbiAgICAgICAgICAgICAgICBwdGlsZXM6IFsuLi5wdGlsZXNdLFxyXG4gICAgICAgICAgICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZWNhbGxUaWxlcygpIHtcclxuICAgICAgICBsZXQgc3F1YXJlcyA9IHRoaXMuc3RhdGUuc25hcHNob3Quc3F1YXJlc1xyXG4gICAgICAgIGxldCB1c2VkYnkgPSB0aGlzLnN0YXRlLnNuYXBzaG90LnVzZWRieVxyXG4gICAgICAgIGxldCBwdGlsZXMgPSB0aGlzLnN0YXRlLnNuYXBzaG90LnB0aWxlc1xyXG4gICAgICAgIGxldCBndGlsZXMgPSB0aGlzLnN0YXRlLnNuYXBzaG90Lmd0aWxlc1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGlsZSByZWNhbGwgXCIgKyBwdGlsZXMudG9TdHJpbmcoKSArIFwiIDogXCIgKyBndGlsZXMudG9TdHJpbmcoKSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VsZWN0aW9uOiAtMSxcclxuICAgICAgICAgICAgc3F1YXJlczogc3F1YXJlcyxcclxuICAgICAgICAgICAgdXNlZGJ5OiB1c2VkYnksXHJcbiAgICAgICAgICAgIHB0aWxlczogcHRpbGVzLFxyXG4gICAgICAgICAgICBndGlsZXM6IGd0aWxlc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgcHJpc29uYnJlYWtcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTExIHBidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJpc29uIEJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIHBiaG9tZWxpbmtcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy4uLy4uLyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+8J+PoDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yIHBiUHJpc29uZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcmlzb25lcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB0aWxlcz17dGhpcy5zdGF0ZS5wdGlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aG9zZXR1cm49e3RoaXMuc3RhdGUud2hvc2V0dXJufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uPXt0aGlzLnN0YXRlLnNlbGVjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyh0aSkgPT4gdGhpcy5oYW5kbGVQcmlzb25lclRpbGVDbGljayh0aSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrRmluaXNoVHVybj17KCkgPT4gdGhpcy5lbmRQcmlzb25lcnNUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrVGlsZVJlY2FsbD17KCkgPT4gdGhpcy5yZWNhbGxUaWxlcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzY3Vlcz17dGhpcy5zdGF0ZS5yZXNjdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlcz17dGhpcy5zdGF0ZS5zcXVhcmVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlZGJ5PXt0aGlzLnN0YXRlLnVzZWRieX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhyaSwgY2kpID0+IHRoaXMuaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyaSwgY2kpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTIgcGJHdWFyZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEd1YXJkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3RpbGVzPXt0aGlzLnN0YXRlLmd0aWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdob3NldHVybj17dGhpcy5zdGF0ZS53aG9zZXR1cm59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb249e3RoaXMuc3RhdGUuc2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KHRpKSA9PiB0aGlzLmhhbmRsZUd1YXJkVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tGaW5pc2hUdXJuPXsoKSA9PiB0aGlzLmVuZEd1YXJkc1R1cm4oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tUaWxlUmVjYWxsPXsoKSA9PiB0aGlzLnJlY2FsbFRpbGVzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaWxlcyB0aWxlcz17dGhpcy5zdGF0ZS50aWxlc30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7ICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBUaWxlcyhwcm9wcykge1xyXG4gICAgLy8gdGhlcmUgaXMgYSBiZXR0ZXIgd2F5IF5eXlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXBvb2xcIj5cclxuICAgICAgICAgICAgPGgzPlRJTEUgUE9PTDwvaDM+XHJcbiAgICAgICAgICAgIHtwcm9wcy50aWxlcy5tYXAoKHQsdGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YHRpbGUke3RpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aSA+IDAgJiYgdCAhPT0gcHJvcHMudGlsZXNbdGktMV0gPyA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXBvb2xEaXZpZGVyXCI+PC9kaXY+IDogPD48Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJUaWxlcG9vbFRpbGVcIj57dH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBSYWNrVGlsZShwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dGQgY2xhc3NOYW1lPXtwcm9wcy50aWxlY2xhc3N9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICB7cHJvcHMudGlsZXZhbHVlfVxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICApICAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBGaW5pc2hUdXJuQnV0dG9uKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgICAgIEZpbmlzaCBUdXJuXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRpbGVSZWNhbGxCdXR0b24ocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAgUmVjYWxsIFRpbGVzXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbn1cclxuY2xhc3MgUHJpc29uZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlclRpbGUodGlsZWNsYXNzLCB0aWxlaW5kZXgsIHRpbGV2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSYWNrVGlsZSBrZXk9e3RpbGVjbGFzcyArIFN0cmluZyh0aWxlaW5kZXgpfSB0aWxlY2xhc3M9e3RpbGVjbGFzc30gdGlsZXZhbHVlPXt0aWxldmFsdWV9IG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DbGljayh0aWxlaW5kZXgpfS8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJGaW5pc2hUdXJuKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGaW5pc2hUdXJuQnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DbGlja0ZpbmlzaFR1cm4oKX0vPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUmVjYWxsVGlsZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRpbGVSZWNhbGxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkNsaWNrVGlsZVJlY2FsbCgpfS8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJGcmVlZFByaXNvbmVycyhjb3VudCkge1xyXG4gICAgICAgIGxldCBkdW1iID0gQXJyYXkoY291bnQpLmZpbGwoJ25vbnNlbnNlJylcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBkdW1iLm1hcCgodmFsdWUsaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17dmFsdWUgKyBTdHJpbmcoaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9icmVha2ZyZWUucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiSSdtIGZyZWUhIEknbSBmcmVlIVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPlBSSVNPTkVSUzwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBiVGlsZXJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5wdGlsZXMubWFwKCh0LHRpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVGlsZSh0aGlzLnByb3BzLndob3NldHVybiA9PT0gJ1AnICYmIHRoaXMucHJvcHMuc2VsZWN0aW9uID09PSB0aSA/IFwicGJUaWxlT25SYWNrU2VsZWN0ZWRQXCIgOiBcInBiVGlsZU9uUmFja1BcIiwgdGksIHQpXHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy53aG9zZXR1cm4gPT09ICdQJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJGaW5pc2hUdXJuKClcclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLndob3NldHVybiA9PT0gJ1AnID9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclJlY2FsbFRpbGVzKClcclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIFJlc2N1ZXMgbWFkZToge3RoaXMucHJvcHMucmVzY3Vlc31cclxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJGcmVlZFByaXNvbmVycyh0aGlzLnByb3BzLnJlc2N1ZXMpfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuY2xhc3MgR3VhcmRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlclRpbGUodGlsZWNsYXNzLCB0aWxlaW5kZXgsIHRpbGV2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSYWNrVGlsZSBrZXk9e3RpbGVjbGFzcyArIFN0cmluZyh0aWxlaW5kZXgpfSB0aWxlY2xhc3M9e3RpbGVjbGFzc30gdGlsZXZhbHVlPXt0aWxldmFsdWV9IG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DbGljayh0aWxlaW5kZXgpfS8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJGaW5pc2hUdXJuKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGaW5pc2hUdXJuQnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DbGlja0ZpbmlzaFR1cm4oKX0vPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUmVjYWxsVGlsZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRpbGVSZWNhbGxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkNsaWNrVGlsZVJlY2FsbCgpfS8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPkdVQVJEUzwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBiVGlsZXJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5ndGlsZXMubWFwKCh0LHRpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVGlsZSh0aGlzLnByb3BzLndob3NldHVybiA9PT0gJ0cnICYmIHRoaXMucHJvcHMuc2VsZWN0aW9uID09PSB0aSA/IFwicGJUaWxlT25SYWNrU2VsZWN0ZWRHXCIgOiBcInBiVGlsZU9uUmFja0dcIiwgdGksIHQpXHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy53aG9zZXR1cm4gPT09ICdHJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJGaW5pc2hUdXJuKClcclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLndob3NldHVybiA9PT0gJ0cnID9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclJlY2FsbFRpbGVzKClcclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==