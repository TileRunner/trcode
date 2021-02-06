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


const winningcoords = ["0-0", "0-7", "0-14", "7-0", "7-14", "14-0", "14-7", "14-14"];
function PrisonBreak() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Game, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
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
  const tdclass = props.c !== "." ? usedbyclass : props.ri === 7 && props.ci === 7 ? "pbSquareCenterSquare" : (props.ri === 0 || props.ri === 7 || props.ri === 14) && (props.ci === 0 || props.ci === 7 || props.ci === 14) ? "pbSquareEscapeHatch" : "pbSquare";
  const tdvalue = props.c !== "." ? props.c : tdclass === "pbSquareCenterSquare" ? "✰" : tdclass === "pbSquareEscapeHatch" ? "💫" : props.ri % 2 === props.ci % 2 ? "⎔" : "✦";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: tdclass,
        onClick: props.onClick,
        children: tdvalue
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
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
        lineNumber: 34,
        columnNumber: 17
      }, this)
    }, `Square${ri}-${ci}`, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this);
  }

  renderRow(ri) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
      className: "row pbRow",
      children: this.props.squares[ri].map((c, ci) => this.renderSquare(ri, ci, c, this.props.usedby[ri][ci]))
    }, `BoardRow${ri}`, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
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
        lineNumber: 50,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this);
  }

}

class Game extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(15).fill(Array(15).fill('.')),
      // squares on the game board
      usedby: Array(15).fill(Array(15).fill('')),
      // who put a tile on a square
      tiles: ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z', '?', '?'],
      // initial tile pool
      selection: -1,
      // which tile from the tile rack in play is selected
      ptiles: [],
      // prisoners tiles
      gtiles: [],
      // guards tiles
      whoseturn: 'P',
      // prisoners play first
      picking: true,
      // picking is true while tiles are being picked
      currentcoords: [],
      // coords of play currently being made to support tile recall and play validation
      rescues: 0 // number of prisoners rescued

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

  pickPrisonerTiles() {
    let ptiles = [...this.state.ptiles];
    let tiles = [...this.state.tiles];

    while (ptiles.length < 7 && tiles.length > 0) {
      let rand = Math.floor(Math.random() * tiles.length);
      ptiles.push(tiles[rand]);
      tiles.splice(rand, 1);
    }

    this.setState({
      picking: false,
      ptiles: ptiles,
      tiles: tiles
    });
  }

  pickGuardsTiles() {
    let gtiles = [...this.state.gtiles];
    let tiles = [...this.state.tiles];

    while (gtiles.length < 7 && tiles.length > 0) {
      let rand = Math.floor(Math.random() * tiles.length);
      gtiles.push(tiles[rand]);
      tiles.splice(rand, 1);
    }

    this.setState({
      picking: false,
      gtiles: gtiles,
      tiles: tiles
    });
  }

  endPrisonersTurn() {
    let rescues = this.state.rescues;

    for (var coord in this.state.currentcoords) {
      if (winningcoords.indexOf(coord) > -1) {
        rescues++;
      }
    }

    this.setState({
      whoseturn: 'G',
      picking: true,
      selection: -1,
      currentcoords: [],
      rescues: rescues
    });
  }

  endGuardsTurn() {
    this.setState({
      whoseturn: 'P',
      picking: true,
      selection: -1,
      currentcoords: []
    });
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: "container-fluid prisonbreak",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-12",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "wmtitle Mastermind",
            children: "Prison Break"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2 pbPrisoners",
          children: [this.state.picking && this.state.whoseturn === 'P' && this.state.ptiles.length < 7 && this.state.tiles.length > 0 ? this.pickPrisonerTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Prisoners, {
            ptiles: this.state.ptiles,
            whoseturn: this.state.whoseturn,
            selection: this.state.selection,
            onClick: ti => this.handlePrisonerTileClick(ti),
            onClickFinishTurn: () => this.endPrisonersTurn(),
            rescues: this.state.rescues
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 220,
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
            lineNumber: 236,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2 pbGuards",
          children: [this.state.picking && this.state.whoseturn === 'G' && this.state.gtiles.length < 7 && this.state.tiles.length > 0 ? this.pickGuardsTiles() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Guards, {
            gtiles: this.state.gtiles,
            whoseturn: this.state.whoseturn,
            selection: this.state.selection,
            onClick: ti => this.handleGuardTileClick(ti),
            onClickFinishTurn: () => this.endGuardsTurn()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Tiles, {
            tiles: this.state.tiles
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-1",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: '../../',
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "wmlink",
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 13
    }, this);
  }

}

function Tiles(props) {
  // there is a better way ^^^
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pbTilepool",
    children: props.tiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [ti > 0 && t !== props.tiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pbTilepoolDivider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 58
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbTilepoolTile",
        children: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 21
      }, this)]
    }, `tile${ti}`, true, {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 17
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 275,
    columnNumber: 9
  }, this);
}

_c3 = Tiles;

function RackTile(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: props.tileclass,
      onClick: props.onClick,
      children: props.tilevalue
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 288,
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
    lineNumber: 298,
    columnNumber: 9
  }, this);
}

_c5 = FinishTurnButton;

class Prisoners extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  renderTile(tileclass, tileindex, tilevalue) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RackTile, {
      tileclass: tileclass,
      tilevalue: tilevalue,
      onClick: () => this.props.onClick(tileindex)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 13
    }, this);
  }

  renderFinishTurn() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
      onClick: () => this.props.onClickFinishTurn()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 13
    }, this);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "PRISONERS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "pbTilerack",
        children: this.props.ptiles.map((t, ti) => this.renderTile(this.props.whoseturn === 'P' && this.props.selection === ti ? "pbTileOnRackSelectedP" : "pbTileOnRackP", ti, t))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 17
      }, this), this.props.whoseturn === 'P' ? this.renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Rescues made: ", this.props.rescues]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 319,
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
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 13
    }, this);
  }

  renderFinishTurn() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
      onClick: () => this.props.onClickFinishTurn()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 13
    }, this);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "GUARDS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 354,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "pbTilerack",
        children: this.props.gtiles.map((t, ti) => this.renderTile(this.props.whoseturn === 'G' && this.props.selection === ti ? "pbTileOnRackSelectedG" : "pbTileOnRackG", ti, t))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 17
      }, this), this.props.whoseturn === 'G' ? this.renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 13
    }, this);
  }

}

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "PrisonBreak");
$RefreshReg$(_c2, "Square");
$RefreshReg$(_c3, "Tiles");
$RefreshReg$(_c4, "RackTile");
$RefreshReg$(_c5, "FinishTurnButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsyLmpzIl0sIm5hbWVzIjpbIndpbm5pbmdjb29yZHMiLCJQcmlzb25CcmVhayIsIlNxdWFyZSIsInByb3BzIiwidXNlZGJ5Y2xhc3MiLCJzcXVhcmV1c2VkYnkiLCJ0ZGNsYXNzIiwiYyIsInJpIiwiY2kiLCJ0ZHZhbHVlIiwib25DbGljayIsIkJvYXJkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXJTcXVhcmUiLCJyZW5kZXJSb3ciLCJzcXVhcmVzIiwibWFwIiwidXNlZGJ5IiwicmVuZGVyIiwiciIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsInN0YXRlIiwiQXJyYXkiLCJmaWxsIiwidGlsZXMiLCJzZWxlY3Rpb24iLCJwdGlsZXMiLCJndGlsZXMiLCJ3aG9zZXR1cm4iLCJwaWNraW5nIiwiY3VycmVudGNvb3JkcyIsInJlc2N1ZXMiLCJoYW5kbGVCb2FyZFNxdWFyZUNsaWNrIiwiY29uc29sZSIsImxvZyIsInNxdWFyZXZhbHVlIiwiY29vcmQiLCJTdHJpbmciLCJjY2kiLCJpbmRleE9mIiwibmV3Um93Iiwic3BsaWNlIiwibmV3VXNlZGJ5Um93Iiwic2V0U3RhdGUiLCJsZW5ndGgiLCJwdXNoIiwiaGFuZGxlUHJpc29uZXJUaWxlQ2xpY2siLCJ0aWxlaW5kZXgiLCJhbGVydCIsImhhbmRsZUd1YXJkVGlsZUNsaWNrIiwicGlja1ByaXNvbmVyVGlsZXMiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicGlja0d1YXJkc1RpbGVzIiwiZW5kUHJpc29uZXJzVHVybiIsImVuZEd1YXJkc1R1cm4iLCJ0aSIsIlRpbGVzIiwidCIsIlJhY2tUaWxlIiwidGlsZWNsYXNzIiwidGlsZXZhbHVlIiwiRmluaXNoVHVybkJ1dHRvbiIsIlByaXNvbmVycyIsInJlbmRlclRpbGUiLCJyZW5kZXJGaW5pc2hUdXJuIiwib25DbGlja0ZpbmlzaFR1cm4iLCJHdWFyZHMiXSwibWFwcGluZ3MiOiI7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S0FDbkIsS0FBS1EsVUFBTCxDQUFnQixLQUFLbEUsS0FBTCxDQUFXNEIsU0FBWCxLQUF5QixHQUF6QixJQUFnQyxLQUFLNUIsS0FBTCxDQUFXeUIsU0FBWCxLQUF5QmlDLEVBQXpELEdBQThELHVCQUE5RCxHQUF3RixlQUF4RyxFQUF5SEEsRUFBekgsRUFBNkhFLENBQTdILENBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosRUFPSyxLQUFLNUQsS0FBTCxDQUFXNEIsU0FBWCxLQUF5QixHQUF6QixHQUNHLEtBQUt1QyxnQkFBTCxFQURILGdCQUdHLHVKQVZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBZUg7O0FBN0JnQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYi9wcmlzb25icmVhazIuOGFmNTAwMzA4YjJlOWFiYzMwMGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmNvbnN0IHdpbm5pbmdjb29yZHMgPSBbXCIwLTBcIiwgXCIwLTdcIiwgXCIwLTE0XCIsIFwiNy0wXCIsIFwiNy0xNFwiLCBcIjE0LTBcIiwgXCIxNC03XCIsIFwiMTQtMTRcIl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaXNvbkJyZWFrKCkge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxHYW1lIC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNxdWFyZShwcm9wcykgeyAvLyBzcXVhcmV1c2VkYnksIHJpLCBjaSwgYywgb25DbGlja1xyXG4gICAgLy8gbmVlZCBzcXVhcmV1c2VkYnkgdG8gcGljayBjc3MgY2xhc3NOYW1lIGNvcnJlc3BvbmRpbmcgdG8gd2hvIHBsYXllZCB0aGUgdGlsZSBvbiB0aGUgc3F1YXJlXHJcbiAgICAvLyBuZWVkIHJpLCBjaSB0byBkaXNwbGF5IGFsdGVybmF0aW5nIGNoYXJhY3RlcnMgb24gdW51c2VkIHNxdWFyZXNcclxuICAgIC8vIG5lZWQgYyB0byByZXByZXNlbnQgd2hpY2ggdGlsZSBpcyBvbiB0aGUgc3F1YXJlLCBpZiBhbnlcclxuICAgIC8vIG5lZWQgb25DbGljayB0byBoYW5kbGUgc3F1YXJlIGNsaWNrIGF0IGEgaGlnaGVyIGxldmVsXHJcbiAgICBjb25zdCB1c2VkYnljbGFzcyA9IHByb3BzLnNxdWFyZXVzZWRieSA9PT0gXCJQXCIgPyBcInBiU3F1YXJlVXNlZEJ5UHJpc29uZXJzXCIgOiBcInBiU3F1YXJlVXNlZEJ5R3VhcmRzXCJcclxuICAgIGNvbnN0IHRkY2xhc3MgPSBwcm9wcy5jICE9PSBcIi5cIiA/IHVzZWRieWNsYXNzIDogcHJvcHMucmkgPT09IDcgJiYgcHJvcHMuY2kgPT09IDcgPyBcInBiU3F1YXJlQ2VudGVyU3F1YXJlXCIgOiAocHJvcHMucmkgPT09IDAgfHwgcHJvcHMucmkgPT09IDcgfHwgcHJvcHMucmkgPT09IDE0KSAmJiAocHJvcHMuY2kgPT09IDAgfHwgcHJvcHMuY2kgPT09IDcgfHwgcHJvcHMuY2kgPT09IDE0KSA/IFwicGJTcXVhcmVFc2NhcGVIYXRjaFwiIDogXCJwYlNxdWFyZVwiXHJcbiAgICBjb25zdCB0ZHZhbHVlID0gcHJvcHMuYyAhPT0gXCIuXCIgPyBwcm9wcy5jIDogdGRjbGFzcyA9PT0gXCJwYlNxdWFyZUNlbnRlclNxdWFyZVwiID8gXCLinLBcIiA6IHRkY2xhc3MgPT09IFwicGJTcXVhcmVFc2NhcGVIYXRjaFwiID8gXCLwn5KrXCIgOiBwcm9wcy5yaSAlIDIgPT09IHByb3BzLmNpICUgMiA/IFwi4o6UXCIgOiBcIuKcplwiXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt0ZGNsYXNzfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGR2YWx1ZX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jbGFzcyBCb2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXJTcXVhcmUocmksIGNpLCBjLCBzcXVhcmV1c2VkYnkpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17YFNxdWFyZSR7cml9LSR7Y2l9YH0+XHJcbiAgICAgICAgICAgICAgICA8U3F1YXJlIGM9e2N9IGNpPXtjaX0gcmk9e3JpfSBzcXVhcmV1c2VkYnk9e3NxdWFyZXVzZWRieX0gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkNsaWNrKHJpLCBjaSl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJSb3cocmkpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtgQm9hcmRSb3cke3JpfWB9IGNsYXNzTmFtZT1cInJvdyBwYlJvd1wiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc3F1YXJlc1tyaV0ubWFwKChjLGNpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJTcXVhcmUocmksIGNpLCBjLCAodGhpcy5wcm9wcy51c2VkYnlbcmldKVtjaV0pXHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJwYkJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc3F1YXJlcy5tYXAoKHIscmkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJSb3cocmkpXHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIClcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEdhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc3F1YXJlczogQXJyYXkoMTUpLmZpbGwoQXJyYXkoMTUpLmZpbGwoJy4nKSksIC8vIHNxdWFyZXMgb24gdGhlIGdhbWUgYm9hcmRcclxuICAgICAgICAgICAgdXNlZGJ5OiBBcnJheSgxNSkuZmlsbChBcnJheSgxNSkuZmlsbCgnJykpLCAgLy8gd2hvIHB1dCBhIHRpbGUgb24gYSBzcXVhcmVcclxuICAgICAgICAgICAgdGlsZXM6IFsnQScsJ0EnLCdBJywnQScsJ0EnLCdBJywnQScsJ0EnLCdBJ1xyXG4gICAgICAgICAgICAgICAgLCdCJywnQicsJ0MnLCdDJywnRCcsJ0QnLCdEJywnRCcsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRSdcclxuICAgICAgICAgICAgICAgICwnRicsJ0YnLCdHJywnRycsJ0cnLCdIJywnSCcsJ0knLCdJJywnSScsJ0knLCdJJywnSScsJ0knLCdJJywnSScsJ0onLCdLJywnTCcsJ0wnLCdMJywnTCdcclxuICAgICAgICAgICAgICAgICwnTScsJ00nLCdOJywnTicsJ04nLCdOJywnTicsJ04nLCdPJywnTycsJ08nLCdPJywnTycsJ08nLCdPJywnTycsJ1AnLCdQJywnUSdcclxuICAgICAgICAgICAgICAgICwnUicsJ1InLCdSJywnUicsJ1InLCdSJywnUycsJ1MnLCdTJywnUycsJ1QnLCdUJywnVCcsJ1QnLCdUJywnVCcsJ1UnLCdVJywnVScsJ1UnLCdWJywnVidcclxuICAgICAgICAgICAgICAgICwnVycsJ1cnLCdYJywnWScsJ1knLCdaJywnPycsJz8nXSwgLy8gaW5pdGlhbCB0aWxlIHBvb2xcclxuICAgICAgICAgICAgc2VsZWN0aW9uOiAtMSwgLy8gd2hpY2ggdGlsZSBmcm9tIHRoZSB0aWxlIHJhY2sgaW4gcGxheSBpcyBzZWxlY3RlZFxyXG4gICAgICAgICAgICBwdGlsZXM6IFtdLCAvLyBwcmlzb25lcnMgdGlsZXNcclxuICAgICAgICAgICAgZ3RpbGVzOiBbXSwgLy8gZ3VhcmRzIHRpbGVzXHJcbiAgICAgICAgICAgIHdob3NldHVybjogJ1AnLCAvLyBwcmlzb25lcnMgcGxheSBmaXJzdFxyXG4gICAgICAgICAgICBwaWNraW5nOiB0cnVlLCAvLyBwaWNraW5nIGlzIHRydWUgd2hpbGUgdGlsZXMgYXJlIGJlaW5nIHBpY2tlZFxyXG4gICAgICAgICAgICBjdXJyZW50Y29vcmRzOiBbXSwgLy8gY29vcmRzIG9mIHBsYXkgY3VycmVudGx5IGJlaW5nIG1hZGUgdG8gc3VwcG9ydCB0aWxlIHJlY2FsbCBhbmQgcGxheSB2YWxpZGF0aW9uXHJcbiAgICAgICAgICAgIHJlc2N1ZXM6IDAgLy8gbnVtYmVyIG9mIHByaXNvbmVycyByZXNjdWVkXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJpLCBjaSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2sgb24gXCIgKyByaSArIFwiLCBcIiArIGNpKVxyXG4gICAgICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnN0YXRlLnNlbGVjdGlvblxyXG4gICAgICAgIGxldCBzcXVhcmVzID0gdGhpcy5zdGF0ZS5zcXVhcmVzXHJcbiAgICAgICAgbGV0IHNxdWFyZXZhbHVlID0gKHNxdWFyZXNbcmldKVtjaV1cclxuICAgICAgICBsZXQgd2hvc2V0dXJuID0gdGhpcy5zdGF0ZS53aG9zZXR1cm5cclxuICAgICAgICBsZXQgcHRpbGVzID0gdGhpcy5zdGF0ZS5wdGlsZXNcclxuICAgICAgICBsZXQgZ3RpbGVzID0gdGhpcy5zdGF0ZS5ndGlsZXNcclxuICAgICAgICBsZXQgdXNlZGJ5ID0gdGhpcy5zdGF0ZS51c2VkYnlcclxuICAgICAgICBsZXQgY3VycmVudGNvb3JkcyA9IHRoaXMuc3RhdGUuY3VycmVudGNvb3Jkc1xyXG4gICAgICAgIGxldCBjb29yZCA9IFN0cmluZyhyaSkgKyBcIi1cIiArIFN0cmluZyhjaSk7XHJcbiAgICAgICAgbGV0IGNjaSA9IGN1cnJlbnRjb29yZHMuaW5kZXhPZihjb29yZClcclxuICAgICAgICBpZiAoc2VsZWN0aW9uID4gLTEgJiYgc3F1YXJldmFsdWUgPT09IFwiLlwiKSB7IC8vIHRpbGUgaXMgc2VsZWN0ZWQgZnJvbSByYWNrIGFuZCBjbGlja2VkIHNxdWFyZSBpcyBub3QgdXNlZCB5ZXRcclxuICAgICAgICAgICAgbGV0IG5ld1JvdyA9IFsuLi5zcXVhcmVzW3JpXV1cclxuICAgICAgICAgICAgbmV3Um93W2NpXSA9IHdob3NldHVybiA9PT0gJ1AnID8gcHRpbGVzW3NlbGVjdGlvbl0gOiBndGlsZXNbc2VsZWN0aW9uXVxyXG4gICAgICAgICAgICBzcXVhcmVzW3JpXSA9IFsuLi5uZXdSb3ddXHJcbiAgICAgICAgICAgIHdob3NldHVybiA9PT0gJ1AnID8gcHRpbGVzLnNwbGljZShzZWxlY3Rpb24sIDEpIDogZ3RpbGVzLnNwbGljZShzZWxlY3Rpb24sMSlcclxuICAgICAgICAgICAgbGV0IG5ld1VzZWRieVJvdyA9IFsuLi51c2VkYnlbcmldXVxyXG4gICAgICAgICAgICBuZXdVc2VkYnlSb3dbY2ldID0gd2hvc2V0dXJuXHJcbiAgICAgICAgICAgIHVzZWRieVtyaV0gPSBbLi4ubmV3VXNlZGJ5Um93XVxyXG4gICAgICAgICAgICBzZWxlY3Rpb24gPSAtMVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsXHJcbiAgICAgICAgICAgICAgICB1c2VkYnk6IHVzZWRieSxcclxuICAgICAgICAgICAgICAgIHB0aWxlczogcHRpbGVzLFxyXG4gICAgICAgICAgICAgICAgZ3RpbGVzOiBndGlsZXMsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb246IHNlbGVjdGlvbixcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRjb29yZHM6IFsuLi5jdXJyZW50Y29vcmRzLCBjb29yZF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzcXVhcmV2YWx1ZSAhPT0gXCIuXCIgJiYgY2NpID4gLTEpIHsgLy8gY2xpY2tlZCBzcXVhcmUgaGFzIGEgdGlsZSBvbiBpdCBmcm9tIHRoZSBjdXJyZW50IG1vdmUgaW4gcHJvZ3Jlc3NcclxuICAgICAgICAgICAgLy8gQXNzdW1pbmcgc29tZSBnb29kIHdpbGwgZnJvbSB0aGUgdXNlcnMgdG8gY2xpY2sgYSB0aWxlIHRoZXkgcGxheWVkXHJcbiAgICAgICAgICAgIGlmICgod2hvc2V0dXJuID09PSAnUCcgJiYgcHRpbGVzLmxlbmd0aCA8IDcpIHx8ICh3aG9zZXR1cm4gPT09ICdHJyAmJiBndGlsZXMubGVuZ3RoIDwgNykpIHtcclxuICAgICAgICAgICAgICAgIHdob3NldHVybiA9PT0gJ1AnID8gcHRpbGVzLnB1c2goc3F1YXJldmFsdWUpIDogZ3RpbGVzLnB1c2goc3F1YXJldmFsdWUpXHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3Um93ID0gWy4uLnNxdWFyZXNbcmldXVxyXG4gICAgICAgICAgICAgICAgbmV3Um93W2NpXSA9IFwiLlwiXHJcbiAgICAgICAgICAgICAgICBzcXVhcmVzW3JpXSA9IFsuLi5uZXdSb3ddXHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3VXNlZGJ5Um93ID0gWy4uLnVzZWRieVtyaV1dXHJcbiAgICAgICAgICAgICAgICBuZXdVc2VkYnlSb3dbY2ldID0gXCJcIlxyXG4gICAgICAgICAgICAgICAgdXNlZGJ5W3JpXSA9IFsuLi5uZXdVc2VkYnlSb3ddXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24gPSB3aG9zZXR1cm4gPT09ICdQJyA/IHB0aWxlcy5sZW5ndGggLSAxIDogZ3RpbGVzLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRjb29yZHMuc3BsaWNlKGNjaSwxKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlczogc3F1YXJlcyxcclxuICAgICAgICAgICAgICAgICAgICB1c2VkYnk6IHVzZWRieSxcclxuICAgICAgICAgICAgICAgICAgICBwdGlsZXM6IHB0aWxlcyxcclxuICAgICAgICAgICAgICAgICAgICBndGlsZXM6IGd0aWxlcyxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb246IHNlbGVjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Y29vcmRzOiBjdXJyZW50Y29vcmRzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQcmlzb25lclRpbGVDbGljayh0aWxlaW5kZXgpIHsgLy8gdGhlIGluZGV4IG9mIHB0aWxlc1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLndob3NldHVybiA9PT0gJ1AnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uOiB0aWxlaW5kZXhcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnSXQgaXMgbm90IHlvdXIgdHVybicpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUd1YXJkVGlsZUNsaWNrKHRpbGVpbmRleCkgeyAvLyB0aGUgaW5kZXggb2YgZ3RpbGVzXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUud2hvc2V0dXJuID09PSAnRycpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb246IHRpbGVpbmRleFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdJdCBpcyBub3QgeW91ciB0dXJuJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGlja1ByaXNvbmVyVGlsZXMoKSB7XHJcbiAgICAgICAgbGV0IHB0aWxlcyA9IFsuLi50aGlzLnN0YXRlLnB0aWxlc11cclxuICAgICAgICBsZXQgdGlsZXMgPSBbLi4udGhpcy5zdGF0ZS50aWxlc11cclxuICAgICAgICB3aGlsZSAocHRpbGVzLmxlbmd0aCA8IDcgJiYgdGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRpbGVzLmxlbmd0aClcclxuICAgICAgICAgICAgcHRpbGVzLnB1c2godGlsZXNbcmFuZF0pXHJcbiAgICAgICAgICAgIHRpbGVzLnNwbGljZShyYW5kLDEpICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwaWNraW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgcHRpbGVzOiBwdGlsZXMsXHJcbiAgICAgICAgICAgIHRpbGVzOiB0aWxlc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwaWNrR3VhcmRzVGlsZXMoKSB7XHJcbiAgICAgICAgbGV0IGd0aWxlcyA9IFsuLi50aGlzLnN0YXRlLmd0aWxlc11cclxuICAgICAgICBsZXQgdGlsZXMgPSBbLi4udGhpcy5zdGF0ZS50aWxlc11cclxuICAgICAgICB3aGlsZSAoZ3RpbGVzLmxlbmd0aCA8IDcgJiYgdGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRpbGVzLmxlbmd0aClcclxuICAgICAgICAgICAgZ3RpbGVzLnB1c2godGlsZXNbcmFuZF0pXHJcbiAgICAgICAgICAgIHRpbGVzLnNwbGljZShyYW5kLDEpICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwaWNraW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgZ3RpbGVzOiBndGlsZXMsXHJcbiAgICAgICAgICAgIHRpbGVzOiB0aWxlc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZW5kUHJpc29uZXJzVHVybigpIHtcclxuICAgICAgICBsZXQgcmVzY3VlcyA9IHRoaXMuc3RhdGUucmVzY3Vlc1xyXG4gICAgICAgIGZvciAodmFyIGNvb3JkIGluIHRoaXMuc3RhdGUuY3VycmVudGNvb3Jkcykge1xyXG4gICAgICAgICAgICBpZiAod2lubmluZ2Nvb3Jkcy5pbmRleE9mKGNvb3JkKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXNjdWVzKytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgd2hvc2V0dXJuOiAnRycsXHJcbiAgICAgICAgICAgIHBpY2tpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbjogLTEsXHJcbiAgICAgICAgICAgIGN1cnJlbnRjb29yZHM6IFtdLFxyXG4gICAgICAgICAgICByZXNjdWVzOiByZXNjdWVzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGVuZEd1YXJkc1R1cm4oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHdob3NldHVybjogJ1AnLFxyXG4gICAgICAgICAgICBwaWNraW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBzZWxlY3Rpb246IC0xLFxyXG4gICAgICAgICAgICBjdXJyZW50Y29vcmRzOiBbXVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgcHJpc29uYnJlYWtcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3bXRpdGxlIE1hc3Rlcm1pbmRcIj5Qcmlzb24gQnJlYWs8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yIHBiUHJpc29uZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnBpY2tpbmcgJiYgdGhpcy5zdGF0ZS53aG9zZXR1cm4gPT09ICdQJyAmJiB0aGlzLnN0YXRlLnB0aWxlcy5sZW5ndGggPCA3ICYmIHRoaXMuc3RhdGUudGlsZXMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY2tQcmlzb25lclRpbGVzKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByaXNvbmVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHRpbGVzPXt0aGlzLnN0YXRlLnB0aWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdob3NldHVybj17dGhpcy5zdGF0ZS53aG9zZXR1cm59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb249e3RoaXMuc3RhdGUuc2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KHRpKSA9PiB0aGlzLmhhbmRsZVByaXNvbmVyVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tGaW5pc2hUdXJuPXsoKSA9PiB0aGlzLmVuZFByaXNvbmVyc1R1cm4oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2N1ZXM9e3RoaXMuc3RhdGUucmVzY3Vlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZXM9e3RoaXMuc3RhdGUuc3F1YXJlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZWRieT17dGhpcy5zdGF0ZS51c2VkYnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsocmksIGNpKSA9PiB0aGlzLmhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socmksIGNpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yIHBiR3VhcmRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnBpY2tpbmcgJiYgdGhpcy5zdGF0ZS53aG9zZXR1cm4gPT09ICdHJyAmJiB0aGlzLnN0YXRlLmd0aWxlcy5sZW5ndGggPCA3ICYmIHRoaXMuc3RhdGUudGlsZXMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY2tHdWFyZHNUaWxlcygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHdWFyZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd0aWxlcz17dGhpcy5zdGF0ZS5ndGlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aG9zZXR1cm49e3RoaXMuc3RhdGUud2hvc2V0dXJufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uPXt0aGlzLnN0YXRlLnNlbGVjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyh0aSkgPT4gdGhpcy5oYW5kbGVHdWFyZFRpbGVDbGljayh0aSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrRmluaXNoVHVybj17KCkgPT4gdGhpcy5lbmRHdWFyZHNUdXJuKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaWxlcyB0aWxlcz17dGhpcy5zdGF0ZS50aWxlc30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycuLi8uLi8nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndtbGlua1wiPkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApOyAgICBcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gVGlsZXMocHJvcHMpIHtcclxuICAgIC8vIHRoZXJlIGlzIGEgYmV0dGVyIHdheSBeXl5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVwb29sXCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy50aWxlcy5tYXAoKHQsdGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YHRpbGUke3RpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aSA+IDAgJiYgdCAhPT0gcHJvcHMudGlsZXNbdGktMV0gPyA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXBvb2xEaXZpZGVyXCI+PC9kaXY+IDogPD48Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJUaWxlcG9vbFRpbGVcIj57dH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBSYWNrVGlsZShwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtwcm9wcy50aWxlY2xhc3N9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnRpbGV2YWx1ZX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICkgICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEZpbmlzaFR1cm5CdXR0b24ocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAgRmluaXNoIFR1cm5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIClcclxufVxyXG5cclxuY2xhc3MgUHJpc29uZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlclRpbGUodGlsZWNsYXNzLCB0aWxlaW5kZXgsIHRpbGV2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSYWNrVGlsZSB0aWxlY2xhc3M9e3RpbGVjbGFzc30gdGlsZXZhbHVlPXt0aWxldmFsdWV9IG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DbGljayh0aWxlaW5kZXgpfS8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJGaW5pc2hUdXJuKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGaW5pc2hUdXJuQnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DbGlja0ZpbmlzaFR1cm4oKX0vPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5QUklTT05FUlM8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYlRpbGVyYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucHRpbGVzLm1hcCgodCx0aSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRpbGUodGhpcy5wcm9wcy53aG9zZXR1cm4gPT09ICdQJyAmJiB0aGlzLnByb3BzLnNlbGVjdGlvbiA9PT0gdGkgPyBcInBiVGlsZU9uUmFja1NlbGVjdGVkUFwiIDogXCJwYlRpbGVPblJhY2tQXCIsIHRpLCB0KVxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMud2hvc2V0dXJuID09PSAnUCcgP1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyRmluaXNoVHVybigpXHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBSZXNjdWVzIG1hZGU6IHt0aGlzLnByb3BzLnJlc2N1ZXN9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5jbGFzcyBHdWFyZHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyVGlsZSh0aWxlY2xhc3MsIHRpbGVpbmRleCwgdGlsZXZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJhY2tUaWxlIHRpbGVjbGFzcz17dGlsZWNsYXNzfSB0aWxldmFsdWU9e3RpbGV2YWx1ZX0gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkNsaWNrKHRpbGVpbmRleCl9Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckZpbmlzaFR1cm4oKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZpbmlzaFR1cm5CdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkNsaWNrRmluaXNoVHVybigpfS8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPkdVQVJEUzwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBiVGlsZXJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5ndGlsZXMubWFwKCh0LHRpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVGlsZSh0aGlzLnByb3BzLndob3NldHVybiA9PT0gJ0cnICYmIHRoaXMucHJvcHMuc2VsZWN0aW9uID09PSB0aSA/IFwicGJUaWxlT25SYWNrU2VsZWN0ZWRHXCIgOiBcInBiVGlsZU9uUmFja0dcIiwgdGksIHQpXHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy53aG9zZXR1cm4gPT09ICdHJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJGaW5pc2hUdXJuKClcclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=