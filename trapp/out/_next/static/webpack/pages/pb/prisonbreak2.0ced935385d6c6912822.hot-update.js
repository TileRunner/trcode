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
          lineNumber: 260,
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
              lineNumber: 265,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 259,
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
            lineNumber: 271,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
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
            lineNumber: 282,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 281,
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
            lineNumber: 289,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Tiles, {
            tiles: this.state.tiles
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 299,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 258,
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
      lineNumber: 311,
      columnNumber: 13
    }, this), props.tiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [ti > 0 && t !== props.tiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pbTilepoolDivider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 58
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbTilepoolTile",
        children: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 21
      }, this)]
    }, `tile${ti}`, true, {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 17
    }, this))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 310,
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
    lineNumber: 324,
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
    lineNumber: 332,
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
    lineNumber: 340,
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
      lineNumber: 348,
      columnNumber: 13
    }, this);
  }

  renderFinishTurn() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
      onClick: () => this.props.onClickFinishTurn()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 13
    }, this);
  }

  renderRecallTiles() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
      onClick: () => this.props.onClickTileRecall()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 360,
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
        lineNumber: 369,
        columnNumber: 21
      }, this)
    }, value + String(index), false, {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 17
    }, this));
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "PRISONERS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "pbTilerack",
        children: this.props.ptiles.map((t, ti) => this.renderTile(this.props.whoseturn === 'P' && this.props.selection === ti ? "pbTileOnRackSelectedP" : "pbTileOnRackP", ti, t))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 17
      }, this), this.props.whoseturn === 'P' ? this.renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), this.props.whoseturn === 'P' ? this.renderRecallTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Rescues made: ", this.props.rescues, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 400,
          columnNumber: 21
        }, this), this.renderFreedPrisoners(this.props.rescues)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 381,
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
      lineNumber: 410,
      columnNumber: 13
    }, this);
  }

  renderFinishTurn() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
      onClick: () => this.props.onClickFinishTurn()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 13
    }, this);
  }

  renderRecallTiles() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileRecallButton, {
      onClick: () => this.props.onClickTileRecall()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 13
    }, this);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "GUARDS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 429,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "pbTilerack",
        children: this.props.gtiles.map((t, ti) => this.renderTile(this.props.whoseturn === 'G' && this.props.selection === ti ? "pbTileOnRackSelectedG" : "pbTileOnRackG", ti, t))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 17
      }, this), this.props.whoseturn === 'G' ? this.renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), this.props.whoseturn === 'G' ? this.renderRecallTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 428,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsyLmpzIl0sIm5hbWVzIjpbImVzY2FwZWhhdGNoZXMiLCJpbml0aWFsdGlsZXMiLCJQcmlzb25CcmVhayIsIlNxdWFyZSIsInByb3BzIiwidXNlZGJ5Y2xhc3MiLCJzcXVhcmV1c2VkYnkiLCJ0ZGNsYXNzIiwiYyIsInJpIiwiY2kiLCJ0ZHZhbHVlIiwib25DbGljayIsIkJvYXJkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXJTcXVhcmUiLCJyZW5kZXJSb3ciLCJzcXVhcmVzIiwibWFwIiwidXNlZGJ5IiwicmVuZGVyIiwiciIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsInRpbGVzIiwicHRpbGVzIiwiZ3RpbGVzIiwibGVuZ3RoIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzcGxpY2UiLCJzb3J0IiwiQXJyYXkiLCJmaWxsIiwic3RhdGUiLCJzZWxlY3Rpb24iLCJ3aG9zZXR1cm4iLCJjdXJyZW50Y29vcmRzIiwicmVzY3VlcyIsInNuYXBzaG90IiwiaGFuZGxlQm9hcmRTcXVhcmVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJzcXVhcmV2YWx1ZSIsImNvb3JkIiwiU3RyaW5nIiwiY2NpIiwiaW5kZXhPZiIsIm5ld1JvdyIsIm5ld1VzZWRieVJvdyIsInNldFN0YXRlIiwiaGFuZGxlUHJpc29uZXJUaWxlQ2xpY2siLCJ0aWxlaW5kZXgiLCJhbGVydCIsImhhbmRsZUd1YXJkVGlsZUNsaWNrIiwiZW5kUHJpc29uZXJzVHVybiIsImkiLCJlbmRHdWFyZHNUdXJuIiwicmVjYWxsVGlsZXMiLCJ0b1N0cmluZyIsInRpIiwiVGlsZXMiLCJ0IiwiUmFja1RpbGUiLCJ0aWxlY2xhc3MiLCJ0aWxldmFsdWUiLCJGaW5pc2hUdXJuQnV0dG9uIiwiVGlsZVJlY2FsbEJ1dHRvbiIsIlByaXNvbmVycyIsInJlbmRlclRpbGUiLCJyZW5kZXJGaW5pc2hUdXJuIiwib25DbGlja0ZpbmlzaFR1cm4iLCJyZW5kZXJSZWNhbGxUaWxlcyIsIm9uQ2xpY2tUaWxlUmVjYWxsIiwicmVuZGVyRnJlZWRQcmlzb25lcnMiLCJjb3VudCIsImR1bWIiLCJ2YWx1ZSIsImluZGV4IiwiR3VhcmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsYUFBYSxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxNQUFmLEVBQXVCLEtBQXZCLEVBQThCLE1BQTlCLEVBQXNDLE1BQXRDLEVBQThDLE1BQTlDLEVBQXNELE9BQXRELENBQXRCLEMsQ0FBcUY7O0FBQ3JGLE1BQU1DLFlBQVksR0FBRyxDQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVMsR0FBVCxFQUFhLEdBQWIsRUFBaUIsR0FBakIsRUFBcUIsR0FBckIsRUFBeUIsR0FBekIsRUFBNkIsR0FBN0IsRUFBaUMsR0FBakMsRUFDcEIsR0FEb0IsRUFDaEIsR0FEZ0IsRUFDWixHQURZLEVBQ1IsR0FEUSxFQUNKLEdBREksRUFDQSxHQURBLEVBQ0ksR0FESixFQUNRLEdBRFIsRUFDWSxHQURaLEVBQ2dCLEdBRGhCLEVBQ29CLEdBRHBCLEVBQ3dCLEdBRHhCLEVBQzRCLEdBRDVCLEVBQ2dDLEdBRGhDLEVBQ29DLEdBRHBDLEVBQ3dDLEdBRHhDLEVBQzRDLEdBRDVDLEVBQ2dELEdBRGhELEVBQ29ELEdBRHBELEVBQ3dELEdBRHhELEVBRXBCLEdBRm9CLEVBRWhCLEdBRmdCLEVBRVosR0FGWSxFQUVSLEdBRlEsRUFFSixHQUZJLEVBRUEsR0FGQSxFQUVJLEdBRkosRUFFUSxHQUZSLEVBRVksR0FGWixFQUVnQixHQUZoQixFQUVvQixHQUZwQixFQUV3QixHQUZ4QixFQUU0QixHQUY1QixFQUVnQyxHQUZoQyxFQUVvQyxHQUZwQyxFQUV3QyxHQUZ4QyxFQUU0QyxHQUY1QyxFQUVnRCxHQUZoRCxFQUVvRCxHQUZwRCxFQUV3RCxHQUZ4RCxFQUU0RCxHQUY1RCxFQUVnRSxHQUZoRSxFQUdwQixHQUhvQixFQUdoQixH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QixFQUF6RCxHQUE4RCx1QkFBOUQsR0FBd0YsZUFBeEcsRUFBeUhBLEVBQXpILEVBQTZIRSxDQUE3SCxDQURIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLEVBT0ssS0FBSzlELEtBQUwsQ0FBV29DLFNBQVgsS0FBeUIsR0FBekIsR0FDRyxLQUFLa0MsZ0JBQUwsRUFESCxnQkFHRyx1SkFWUixFQVlLLEtBQUt0RSxLQUFMLENBQVdvQyxTQUFYLEtBQXlCLEdBQXpCLEdBQ0csS0FBS29DLGlCQUFMLEVBREgsZ0JBR0csdUpBZlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFvQkg7O0FBeENnQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYi9wcmlzb25icmVhazIuMGNlZDkzNTM4NWQ2YzY5MTI4MjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBlc2NhcGVoYXRjaGVzID0gW1wiMC0wXCIsIFwiMC03XCIsIFwiMC0xNFwiLCBcIjctMFwiLCBcIjctMTRcIiwgXCIxNC0wXCIsIFwiMTQtN1wiLCBcIjE0LTE0XCJdIC8vIGNvb3JkcyBvZiBlc2NhcGUgaGF0Y2hlc1xyXG5jb25zdCBpbml0aWFsdGlsZXMgPSBbJ0EnLCdBJywnQScsJ0EnLCdBJywnQScsJ0EnLCdBJywnQSdcclxuLCdCJywnQicsJ0MnLCdDJywnRCcsJ0QnLCdEJywnRCcsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRSdcclxuLCdGJywnRicsJ0cnLCdHJywnRycsJ0gnLCdIJywnSScsJ0knLCdJJywnSScsJ0knLCdJJywnSScsJ0knLCdJJywnSicsJ0snLCdMJywnTCcsJ0wnLCdMJ1xyXG4sJ00nLCdNJywnTicsJ04nLCdOJywnTicsJ04nLCdOJywnTycsJ08nLCdPJywnTycsJ08nLCdPJywnTycsJ08nLCdQJywnUCcsJ1EnXHJcbiwnUicsJ1InLCdSJywnUicsJ1InLCdSJywnUycsJ1MnLCdTJywnUycsJ1QnLCdUJywnVCcsJ1QnLCdUJywnVCcsJ1UnLCdVJywnVScsJ1UnLCdWJywnVidcclxuLCdXJywnVycsJ1gnLCdZJywnWScsJ1onLCc/JywnPyddIC8vIGluaXRpYWwgdGlsZSBwb29sXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmlzb25CcmVhaygpIHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8R2FtZSAvPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBTcXVhcmUocHJvcHMpIHsgLy8gc3F1YXJldXNlZGJ5LCByaSwgY2ksIGMsIG9uQ2xpY2tcclxuICAgIC8vIG5lZWQgc3F1YXJldXNlZGJ5IHRvIHBpY2sgY3NzIGNsYXNzTmFtZSBjb3JyZXNwb25kaW5nIHRvIHdobyBwbGF5ZWQgdGhlIHRpbGUgb24gdGhlIHNxdWFyZVxyXG4gICAgLy8gbmVlZCByaSwgY2kgdG8gZGlzcGxheSBhbHRlcm5hdGluZyBjaGFyYWN0ZXJzIG9uIHVudXNlZCBzcXVhcmVzXHJcbiAgICAvLyBuZWVkIGMgdG8gcmVwcmVzZW50IHdoaWNoIHRpbGUgaXMgb24gdGhlIHNxdWFyZSwgaWYgYW55XHJcbiAgICAvLyBuZWVkIG9uQ2xpY2sgdG8gaGFuZGxlIHNxdWFyZSBjbGljayBhdCBhIGhpZ2hlciBsZXZlbFxyXG4gICAgY29uc3QgdXNlZGJ5Y2xhc3MgPSBwcm9wcy5zcXVhcmV1c2VkYnkgPT09IFwiUFwiID8gXCJwYlNxdWFyZVVzZWRCeVByaXNvbmVyc1wiIDogXCJwYlNxdWFyZVVzZWRCeUd1YXJkc1wiXHJcbiAgICBjb25zdCB0ZGNsYXNzID0gcHJvcHMuYyAhPT0gXCIuXCIgPyB1c2VkYnljbGFzcyA6IHByb3BzLnJpID09PSA3ICYmIHByb3BzLmNpID09PSA3ID8gXCJwYlNxdWFyZUNlbnRlclNxdWFyZVwiIDogKHByb3BzLnJpID09PSAwIHx8IHByb3BzLnJpID09PSA3IHx8IHByb3BzLnJpID09PSAxNCkgJiYgKHByb3BzLmNpID09PSAwIHx8IHByb3BzLmNpID09PSA3IHx8IHByb3BzLmNpID09PSAxNCkgPyBcInBiU3F1YXJlRXNjYXBlSGF0Y2hcIiA6IHByb3BzLnJpICUgMiA9PT0gcHJvcHMuY2kgJSAyID8gXCJwYlNxdWFyZVwiIDogXCJwYlNxdWFyZTJcIlxyXG4gICAgY29uc3QgdGR2YWx1ZSA9IHByb3BzLmMgIT09IFwiLlwiID8gcHJvcHMuYyA6IHRkY2xhc3MgPT09IFwicGJTcXVhcmVDZW50ZXJTcXVhcmVcIiA/IFwi4pywXCIgOiB0ZGNsYXNzID09PSBcInBiU3F1YXJlRXNjYXBlSGF0Y2hcIiA/IFwi8J+Sq1wiIDogcHJvcHMucmkgJSAyID09PSBwcm9wcy5jaSAlIDIgPyBcIuKOlFwiIDogXCLinKZcIlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGRjbGFzc30gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAge3RkdmFsdWV9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY2xhc3MgQm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyU3F1YXJlKHJpLCBjaSwgYywgc3F1YXJldXNlZGJ5KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2BTcXVhcmUke3JpfS0ke2NpfWB9PlxyXG4gICAgICAgICAgICAgICAgPFNxdWFyZSBjPXtjfSBjaT17Y2l9IHJpPXtyaX0gc3F1YXJldXNlZGJ5PXtzcXVhcmV1c2VkYnl9IG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DbGljayhyaSwgY2kpfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyUm93KHJpKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRyIGtleT17YEJvYXJkUm93JHtyaX1gfSBjbGFzc05hbWU9XCJyb3cgcGJSb3dcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNxdWFyZXNbcmldLm1hcCgoYyxjaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyU3F1YXJlKHJpLCBjaSwgYywgKHRoaXMucHJvcHMudXNlZGJ5W3JpXSlbY2ldKVxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwicGJCb2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNxdWFyZXMubWFwKChyLHJpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUm93KHJpKVxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICApXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBHYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIGxldCB0aWxlcyA9IFsuLi5pbml0aWFsdGlsZXNdXHJcbiAgICAgICAgbGV0IHB0aWxlcyA9IFtdXHJcbiAgICAgICAgbGV0IGd0aWxlcyA9IFtdXHJcbiAgICAgICAgd2hpbGUgKHB0aWxlcy5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGlsZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICBwdGlsZXMucHVzaCh0aWxlc1tyYW5kXSlcclxuICAgICAgICAgICAgdGlsZXMuc3BsaWNlKHJhbmQsMSkgICBcclxuICAgICAgICAgICAgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRpbGVzLmxlbmd0aClcclxuICAgICAgICAgICAgZ3RpbGVzLnB1c2godGlsZXNbcmFuZF0pXHJcbiAgICAgICAgICAgIHRpbGVzLnNwbGljZShyYW5kLDEpICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB0aWxlcy5zb3J0KClcclxuICAgICAgICBndGlsZXMuc29ydCgpXHJcbiAgICAgICAgbGV0IHNxdWFyZXMgPSBBcnJheSgxNSkuZmlsbChBcnJheSgxNSkuZmlsbCgnLicpKVxyXG4gICAgICAgIGxldCB1c2VkYnkgPSBBcnJheSgxNSkuZmlsbChBcnJheSgxNSkuZmlsbCgnJykpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc3F1YXJlczogc3F1YXJlcywgLy8gc3F1YXJlcyBvbiB0aGUgZ2FtZSBib2FyZFxyXG4gICAgICAgICAgICB1c2VkYnk6IHVzZWRieSwgIC8vIHdobyBwdXQgYSB0aWxlIG9uIGEgc3F1YXJlXHJcbiAgICAgICAgICAgIHRpbGVzOiB0aWxlcyxcclxuICAgICAgICAgICAgc2VsZWN0aW9uOiAtMSwgLy8gd2hpY2ggdGlsZSBmcm9tIHRoZSB0aWxlIHJhY2sgaW4gcGxheSBpcyBzZWxlY3RlZFxyXG4gICAgICAgICAgICBwdGlsZXM6IHB0aWxlcywgLy8gcHJpc29uZXJzIHRpbGVzXHJcbiAgICAgICAgICAgIGd0aWxlczogZ3RpbGVzLCAvLyBndWFyZHMgdGlsZXNcclxuICAgICAgICAgICAgd2hvc2V0dXJuOiAnUCcsIC8vIHByaXNvbmVycyBwbGF5IGZpcnN0XHJcbiAgICAgICAgICAgIGN1cnJlbnRjb29yZHM6IFtdLCAvLyBjb29yZHMgb2YgcGxheSBjdXJyZW50bHkgYmVpbmcgbWFkZSB0byBzdXBwb3J0IHRpbGUgcmVjYWxsIGFuZCBwbGF5IHZhbGlkYXRpb25cclxuICAgICAgICAgICAgcmVzY3VlczogMCwgLy8gbnVtYmVyIG9mIHByaXNvbmVycyByZXNjdWVkXHJcbiAgICAgICAgICAgIHNuYXBzaG90OiB7IC8vIGZvciByZXZlcnRpbmcgdG8gc3RhcnQgb2YgbW92ZSBmb3IgdGlsZSByZWNhbGwgb3IgZXhjaGFuZ2UgbG9naWNcclxuICAgICAgICAgICAgICAgIHNxdWFyZXM6IFsuLi5zcXVhcmVzXSxcclxuICAgICAgICAgICAgICAgIHVzZWRieTogWy4uLnVzZWRieV0sXHJcbiAgICAgICAgICAgICAgICBwdGlsZXM6IFsuLi5wdGlsZXNdLFxyXG4gICAgICAgICAgICAgICAgZ3RpbGVzOiBbLi4uZ3RpbGVzXVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyaSwgY2kpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrIG9uIFwiICsgcmkgKyBcIiwgXCIgKyBjaSlcclxuICAgICAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zdGF0ZS5zZWxlY3Rpb25cclxuICAgICAgICBsZXQgc3F1YXJlcyA9IHRoaXMuc3RhdGUuc3F1YXJlc1xyXG4gICAgICAgIGxldCBzcXVhcmV2YWx1ZSA9IChzcXVhcmVzW3JpXSlbY2ldXHJcbiAgICAgICAgbGV0IHdob3NldHVybiA9IHRoaXMuc3RhdGUud2hvc2V0dXJuXHJcbiAgICAgICAgbGV0IHB0aWxlcyA9IHRoaXMuc3RhdGUucHRpbGVzXHJcbiAgICAgICAgbGV0IGd0aWxlcyA9IHRoaXMuc3RhdGUuZ3RpbGVzXHJcbiAgICAgICAgbGV0IHVzZWRieSA9IHRoaXMuc3RhdGUudXNlZGJ5XHJcbiAgICAgICAgbGV0IGN1cnJlbnRjb29yZHMgPSB0aGlzLnN0YXRlLmN1cnJlbnRjb29yZHNcclxuICAgICAgICBsZXQgY29vcmQgPSBTdHJpbmcocmkpICsgXCItXCIgKyBTdHJpbmcoY2kpO1xyXG4gICAgICAgIGxldCBjY2kgPSBjdXJyZW50Y29vcmRzLmluZGV4T2YoY29vcmQpXHJcbiAgICAgICAgaWYgKHNlbGVjdGlvbiA+IC0xICYmIHNxdWFyZXZhbHVlID09PSBcIi5cIikgeyAvLyB0aWxlIGlzIHNlbGVjdGVkIGZyb20gcmFjayBhbmQgY2xpY2tlZCBzcXVhcmUgaXMgbm90IHVzZWQgeWV0XHJcbiAgICAgICAgICAgIGxldCBuZXdSb3cgPSBbLi4uc3F1YXJlc1tyaV1dXHJcbiAgICAgICAgICAgIG5ld1Jvd1tjaV0gPSB3aG9zZXR1cm4gPT09ICdQJyA/IHB0aWxlc1tzZWxlY3Rpb25dIDogZ3RpbGVzW3NlbGVjdGlvbl1cclxuICAgICAgICAgICAgc3F1YXJlc1tyaV0gPSBbLi4ubmV3Um93XVxyXG4gICAgICAgICAgICB3aG9zZXR1cm4gPT09ICdQJyA/IHB0aWxlcy5zcGxpY2Uoc2VsZWN0aW9uLCAxKSA6IGd0aWxlcy5zcGxpY2Uoc2VsZWN0aW9uLDEpXHJcbiAgICAgICAgICAgIGxldCBuZXdVc2VkYnlSb3cgPSBbLi4udXNlZGJ5W3JpXV1cclxuICAgICAgICAgICAgbmV3VXNlZGJ5Um93W2NpXSA9IHdob3NldHVyblxyXG4gICAgICAgICAgICB1c2VkYnlbcmldID0gWy4uLm5ld1VzZWRieVJvd11cclxuICAgICAgICAgICAgc2VsZWN0aW9uID0gLTFcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLFxyXG4gICAgICAgICAgICAgICAgdXNlZGJ5OiB1c2VkYnksXHJcbiAgICAgICAgICAgICAgICBwdGlsZXM6IHB0aWxlcyxcclxuICAgICAgICAgICAgICAgIGd0aWxlczogZ3RpbGVzLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uOiBzZWxlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Y29vcmRzOiBbLi4uY3VycmVudGNvb3JkcywgY29vcmRdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc3F1YXJldmFsdWUgIT09IFwiLlwiICYmIGNjaSA+IC0xKSB7IC8vIGNsaWNrZWQgc3F1YXJlIGhhcyBhIHRpbGUgb24gaXQgZnJvbSB0aGUgY3VycmVudCBtb3ZlIGluIHByb2dyZXNzXHJcbiAgICAgICAgICAgIC8vIEFzc3VtaW5nIHNvbWUgZ29vZCB3aWxsIGZyb20gdGhlIHVzZXJzIHRvIGNsaWNrIGEgdGlsZSB0aGV5IHBsYXllZFxyXG4gICAgICAgICAgICBpZiAoKHdob3NldHVybiA9PT0gJ1AnICYmIHB0aWxlcy5sZW5ndGggPCA3KSB8fCAod2hvc2V0dXJuID09PSAnRycgJiYgZ3RpbGVzLmxlbmd0aCA8IDcpKSB7XHJcbiAgICAgICAgICAgICAgICB3aG9zZXR1cm4gPT09ICdQJyA/IHB0aWxlcy5wdXNoKHNxdWFyZXZhbHVlKSA6IGd0aWxlcy5wdXNoKHNxdWFyZXZhbHVlKVxyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1JvdyA9IFsuLi5zcXVhcmVzW3JpXV1cclxuICAgICAgICAgICAgICAgIG5ld1Jvd1tjaV0gPSBcIi5cIlxyXG4gICAgICAgICAgICAgICAgc3F1YXJlc1tyaV0gPSBbLi4ubmV3Um93XVxyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1VzZWRieVJvdyA9IFsuLi51c2VkYnlbcmldXVxyXG4gICAgICAgICAgICAgICAgbmV3VXNlZGJ5Um93W2NpXSA9IFwiXCJcclxuICAgICAgICAgICAgICAgIHVzZWRieVtyaV0gPSBbLi4ubmV3VXNlZGJ5Um93XVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uID0gd2hvc2V0dXJuID09PSAnUCcgPyBwdGlsZXMubGVuZ3RoIC0gMSA6IGd0aWxlcy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Y29vcmRzLnNwbGljZShjY2ksMSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlZGJ5OiB1c2VkYnksXHJcbiAgICAgICAgICAgICAgICAgICAgcHRpbGVzOiBwdGlsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3RpbGVzOiBndGlsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uOiBzZWxlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGNvb3JkczogY3VycmVudGNvb3Jkc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUHJpc29uZXJUaWxlQ2xpY2sodGlsZWluZGV4KSB7IC8vIHRoZSBpbmRleCBvZiBwdGlsZXNcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS53aG9zZXR1cm4gPT09ICdQJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbjogdGlsZWluZGV4XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ0l0IGlzIG5vdCB5b3VyIHR1cm4nKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVHdWFyZFRpbGVDbGljayh0aWxlaW5kZXgpIHsgLy8gdGhlIGluZGV4IG9mIGd0aWxlc1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLndob3NldHVybiA9PT0gJ0cnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uOiB0aWxlaW5kZXhcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnSXQgaXMgbm90IHlvdXIgdHVybicpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVuZFByaXNvbmVyc1R1cm4oKSB7XHJcbiAgICAgICAgbGV0IHJlc2N1ZXMgPSB0aGlzLnN0YXRlLnJlc2N1ZXNcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RhdGUuY3VycmVudGNvb3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZXNjYXBlaGF0Y2hlcy5pbmRleE9mKHRoaXMuc3RhdGUuY3VycmVudGNvb3Jkc1tpXSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmVzY3VlcysrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHB0aWxlcyA9IFsuLi50aGlzLnN0YXRlLnB0aWxlc11cclxuICAgICAgICBsZXQgdGlsZXMgPSBbLi4udGhpcy5zdGF0ZS50aWxlc11cclxuICAgICAgICB3aGlsZSAocHRpbGVzLmxlbmd0aCA8IDcgJiYgdGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRpbGVzLmxlbmd0aClcclxuICAgICAgICAgICAgcHRpbGVzLnB1c2godGlsZXNbcmFuZF0pXHJcbiAgICAgICAgICAgIHRpbGVzLnNwbGljZShyYW5kLDEpICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB0aWxlcy5zb3J0KClcclxuICAgICAgICBsZXQgc3F1YXJlcyA9IHRoaXMuc3RhdGUuc3F1YXJlc1xyXG4gICAgICAgIGxldCB1c2VkYnkgPSB0aGlzLnN0YXRlLnVzZWRieVxyXG4gICAgICAgIGxldCBndGlsZXMgPSB0aGlzLnN0YXRlLmd0aWxlc1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB3aG9zZXR1cm46ICdHJyxcclxuICAgICAgICAgICAgc2VsZWN0aW9uOiAtMSxcclxuICAgICAgICAgICAgY3VycmVudGNvb3JkczogW10sXHJcbiAgICAgICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXMsXHJcbiAgICAgICAgICAgIHB0aWxlczogcHRpbGVzLFxyXG4gICAgICAgICAgICB0aWxlczogdGlsZXMsXHJcbiAgICAgICAgICAgIHNuYXBzaG90OiB7IFxyXG4gICAgICAgICAgICAgICAgc3F1YXJlczogWy4uLnNxdWFyZXNdLFxyXG4gICAgICAgICAgICAgICAgdXNlZGJ5OiBbLi4udXNlZGJ5XSxcclxuICAgICAgICAgICAgICAgIHB0aWxlczogWy4uLnB0aWxlc10sXHJcbiAgICAgICAgICAgICAgICBndGlsZXM6IFsuLi5ndGlsZXNdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZW5kR3VhcmRzVHVybigpIHtcclxuICAgICAgICBsZXQgZ3RpbGVzID0gWy4uLnRoaXMuc3RhdGUuZ3RpbGVzXVxyXG4gICAgICAgIGxldCB0aWxlcyA9IFsuLi50aGlzLnN0YXRlLnRpbGVzXVxyXG4gICAgICAgIHdoaWxlIChndGlsZXMubGVuZ3RoIDwgNyAmJiB0aWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGlsZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICBndGlsZXMucHVzaCh0aWxlc1tyYW5kXSlcclxuICAgICAgICAgICAgdGlsZXMuc3BsaWNlKHJhbmQsMSkgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZ3RpbGVzLnNvcnQoKVxyXG4gICAgICAgIGxldCBzcXVhcmVzID0gdGhpcy5zdGF0ZS5zcXVhcmVzXHJcbiAgICAgICAgbGV0IHVzZWRieSA9IHRoaXMuc3RhdGUudXNlZGJ5XHJcbiAgICAgICAgbGV0IHB0aWxlcyA9IHRoaXMuc3RhdGUucHRpbGVzXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHdob3NldHVybjogJ1AnLFxyXG4gICAgICAgICAgICBzZWxlY3Rpb246IC0xLFxyXG4gICAgICAgICAgICBjdXJyZW50Y29vcmRzOiBbXSxcclxuICAgICAgICAgICAgZ3RpbGVzOiBndGlsZXMsXHJcbiAgICAgICAgICAgIHRpbGVzOiB0aWxlcyxcclxuICAgICAgICAgICAgc25hcHNob3Q6IHsgXHJcbiAgICAgICAgICAgICAgICBzcXVhcmVzOiBbLi4uc3F1YXJlc10sXHJcbiAgICAgICAgICAgICAgICB1c2VkYnk6IFsuLi51c2VkYnldLFxyXG4gICAgICAgICAgICAgICAgcHRpbGVzOiBbLi4ucHRpbGVzXSxcclxuICAgICAgICAgICAgICAgIGd0aWxlczogWy4uLmd0aWxlc11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVjYWxsVGlsZXMoKSB7XHJcbiAgICAgICAgbGV0IHNxdWFyZXMgPSB0aGlzLnN0YXRlLnNuYXBzaG90LnNxdWFyZXNcclxuICAgICAgICBsZXQgdXNlZGJ5ID0gdGhpcy5zdGF0ZS5zbmFwc2hvdC51c2VkYnlcclxuICAgICAgICBsZXQgcHRpbGVzID0gdGhpcy5zdGF0ZS5zbmFwc2hvdC5wdGlsZXNcclxuICAgICAgICBsZXQgZ3RpbGVzID0gdGhpcy5zdGF0ZS5zbmFwc2hvdC5ndGlsZXNcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRpbGUgcmVjYWxsIFwiICsgcHRpbGVzLnRvU3RyaW5nKCkgKyBcIiA6IFwiICsgZ3RpbGVzLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbjogLTEsXHJcbiAgICAgICAgICAgIGN1cnJlbnRjb29yZHM6IFtdLFxyXG4gICAgICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLFxyXG4gICAgICAgICAgICB1c2VkYnk6IHVzZWRieSxcclxuICAgICAgICAgICAgcHRpbGVzOiBwdGlsZXMsXHJcbiAgICAgICAgICAgIGd0aWxlczogZ3RpbGVzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBwcmlzb25icmVha1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTEgcGJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcmlzb24gQnJlYWtcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgcGJob21lbGlua1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnLi4vLi4vJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7wn4+gPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTIgcGJQcmlzb25lcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByaXNvbmVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHRpbGVzPXt0aGlzLnN0YXRlLnB0aWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdob3NldHVybj17dGhpcy5zdGF0ZS53aG9zZXR1cm59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb249e3RoaXMuc3RhdGUuc2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KHRpKSA9PiB0aGlzLmhhbmRsZVByaXNvbmVyVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tGaW5pc2hUdXJuPXsoKSA9PiB0aGlzLmVuZFByaXNvbmVyc1R1cm4oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tUaWxlUmVjYWxsPXsoKSA9PiB0aGlzLnJlY2FsbFRpbGVzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNjdWVzPXt0aGlzLnN0YXRlLnJlc2N1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzPXt0aGlzLnN0YXRlLnNxdWFyZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VkYnk9e3RoaXMuc3RhdGUudXNlZGJ5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KHJpLCBjaSkgPT4gdGhpcy5oYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJpLCBjaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMiBwYkd1YXJkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3VhcmRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBndGlsZXM9e3RoaXMuc3RhdGUuZ3RpbGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hvc2V0dXJuPXt0aGlzLnN0YXRlLndob3NldHVybn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17dGhpcy5zdGF0ZS5zZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IHRoaXMuaGFuZGxlR3VhcmRUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja0ZpbmlzaFR1cm49eygpID0+IHRoaXMuZW5kR3VhcmRzVHVybigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja1RpbGVSZWNhbGw9eygpID0+IHRoaXMucmVjYWxsVGlsZXMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRpbGVzIHRpbGVzPXt0aGlzLnN0YXRlLnRpbGVzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTsgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRpbGVzKHByb3BzKSB7XHJcbiAgICAvLyB0aGVyZSBpcyBhIGJldHRlciB3YXkgXl5eXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcG9vbFwiPlxyXG4gICAgICAgICAgICA8aDM+VElMRSBQT09MPC9oMz5cclxuICAgICAgICAgICAge3Byb3BzLnRpbGVzLm1hcCgodCx0aSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtgdGlsZSR7dGl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RpID4gMCAmJiB0ICE9PSBwcm9wcy50aWxlc1t0aS0xXSA/IDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcG9vbERpdmlkZXJcIj48L2Rpdj4gOiA8PjwvPn1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYlRpbGVwb29sVGlsZVwiPnt0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJhY2tUaWxlKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx0ZCBjbGFzc05hbWU9e3Byb3BzLnRpbGVjbGFzc30gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgICAgIHtwcm9wcy50aWxldmFsdWV9XHJcbiAgICAgICAgPC90ZD5cclxuICAgICkgICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEZpbmlzaFR1cm5CdXR0b24ocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAgRmluaXNoIFR1cm5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gVGlsZVJlY2FsbEJ1dHRvbihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICBSZWNhbGwgVGlsZXNcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIClcclxufVxyXG5jbGFzcyBQcmlzb25lcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyVGlsZSh0aWxlY2xhc3MsIHRpbGVpbmRleCwgdGlsZXZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJhY2tUaWxlIGtleT17dGlsZWNsYXNzICsgU3RyaW5nKHRpbGVpbmRleCl9IHRpbGVjbGFzcz17dGlsZWNsYXNzfSB0aWxldmFsdWU9e3RpbGV2YWx1ZX0gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkNsaWNrKHRpbGVpbmRleCl9Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckZpbmlzaFR1cm4oKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZpbmlzaFR1cm5CdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkNsaWNrRmluaXNoVHVybigpfS8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJSZWNhbGxUaWxlcygpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VGlsZVJlY2FsbEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQ2xpY2tUaWxlUmVjYWxsKCl9Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckZyZWVkUHJpc29uZXJzKGNvdW50KSB7XHJcbiAgICAgICAgbGV0IGR1bWIgPSBBcnJheShjb3VudCkuZmlsbCgnbm9uc2Vuc2UnKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGR1bWIubWFwKCh2YWx1ZSxpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXt2YWx1ZSArIFN0cmluZyhpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2JyZWFrZnJlZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJJ20gZnJlZSEgSSdtIGZyZWUhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+UFJJU09ORVJTPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnB0aWxlcy5tYXAoKHQsdGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUaWxlKHRoaXMucHJvcHMud2hvc2V0dXJuID09PSAnUCcgJiYgdGhpcy5wcm9wcy5zZWxlY3Rpb24gPT09IHRpID8gXCJwYlRpbGVPblJhY2tTZWxlY3RlZFBcIiA6IFwicGJUaWxlT25SYWNrUFwiLCB0aSwgdClcclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLndob3NldHVybiA9PT0gJ1AnID9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckZpbmlzaFR1cm4oKVxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMud2hvc2V0dXJuID09PSAnUCcgP1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUmVjYWxsVGlsZXMoKVxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVzY3VlcyBtYWRlOiB7dGhpcy5wcm9wcy5yZXNjdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckZyZWVkUHJpc29uZXJzKHRoaXMucHJvcHMucmVzY3Vlcyl9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5jbGFzcyBHdWFyZHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyVGlsZSh0aWxlY2xhc3MsIHRpbGVpbmRleCwgdGlsZXZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJhY2tUaWxlIGtleT17dGlsZWNsYXNzICsgU3RyaW5nKHRpbGVpbmRleCl9IHRpbGVjbGFzcz17dGlsZWNsYXNzfSB0aWxldmFsdWU9e3RpbGV2YWx1ZX0gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkNsaWNrKHRpbGVpbmRleCl9Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckZpbmlzaFR1cm4oKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZpbmlzaFR1cm5CdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkNsaWNrRmluaXNoVHVybigpfS8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJSZWNhbGxUaWxlcygpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VGlsZVJlY2FsbEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQ2xpY2tUaWxlUmVjYWxsKCl9Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+R1VBUkRTPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmd0aWxlcy5tYXAoKHQsdGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUaWxlKHRoaXMucHJvcHMud2hvc2V0dXJuID09PSAnRycgJiYgdGhpcy5wcm9wcy5zZWxlY3Rpb24gPT09IHRpID8gXCJwYlRpbGVPblJhY2tTZWxlY3RlZEdcIiA6IFwicGJUaWxlT25SYWNrR1wiLCB0aSwgdClcclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLndob3NldHVybiA9PT0gJ0cnID9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckZpbmlzaFR1cm4oKVxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMud2hvc2V0dXJuID09PSAnRycgP1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUmVjYWxsVGlsZXMoKVxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9