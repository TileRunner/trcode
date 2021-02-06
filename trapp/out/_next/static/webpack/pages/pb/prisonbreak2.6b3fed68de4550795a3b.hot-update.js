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
    console.log("winning coords " + winningcoords.toString());
    console.log("current coords " + this.state.currentcoords.toString());
    let rescues = this.state.rescues;

    for (var i = 0; i < this.state.currentcoords.length; i++) {
      if (winningcoords.indexOf(this.state.currentcoords[i]) > -1) {
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
            lineNumber: 218,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
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
            lineNumber: 228,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 222,
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
            lineNumber: 238,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 237,
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
            lineNumber: 250,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Tiles, {
            tiles: this.state.tiles
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 221,
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
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 215,
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
        lineNumber: 280,
        columnNumber: 58
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbTilepoolTile",
        children: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 21
      }, this)]
    }, `tile${ti}`, true, {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 17
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 277,
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
      lineNumber: 291,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 290,
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
    lineNumber: 300,
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
      lineNumber: 309,
      columnNumber: 13
    }, this);
  }

  renderFinishTurn() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
      onClick: () => this.props.onClickFinishTurn()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 13
    }, this);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "PRISONERS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "pbTilerack",
        children: this.props.ptiles.map((t, ti) => this.renderTile(this.props.whoseturn === 'P' && this.props.selection === ti ? "pbTileOnRackSelectedP" : "pbTileOnRackP", ti, t))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 17
      }, this), this.props.whoseturn === 'P' ? this.renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Rescues made: ", this.props.rescues]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 321,
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
      lineNumber: 343,
      columnNumber: 13
    }, this);
  }

  renderFinishTurn() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
      onClick: () => this.props.onClickFinishTurn()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 13
    }, this);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "GUARDS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "pbTilerack",
        children: this.props.gtiles.map((t, ti) => this.renderTile(this.props.whoseturn === 'G' && this.props.selection === ti ? "pbTileOnRackSelectedG" : "pbTileOnRackG", ti, t))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 17
      }, this), this.props.whoseturn === 'G' ? this.renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 355,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsyLmpzIl0sIm5hbWVzIjpbIndpbm5pbmdjb29yZHMiLCJQcmlzb25CcmVhayIsIlNxdWFyZSIsInByb3BzIiwidXNlZGJ5Y2xhc3MiLCJzcXVhcmV1c2VkYnkiLCJ0ZGNsYXNzIiwiYyIsInJpIiwiY2kiLCJ0ZHZhbHVlIiwib25DbGljayIsIkJvYXJkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXJTcXVhcmUiLCJyZW5kZXJSb3ciLCJzcXVhcmVzIiwibWFwIiwidXNlZGJ5IiwicmVuZGVyIiwiciIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsInN0YXRlIiwiQXJyYXkiLCJmaWxsIiwidGlsZXMiLCJzZWxlY3Rpb24iLCJwdGlsZXMiLCJndGlsZXMiLCJ3aG9zZXR1cm4iLCJwaWNraW5nIiwiY3VycmVudGNvb3JkcyIsInJlc2N1ZXMiLCJoYW5kbGVCb2FyZFNxdWFyZUNsaWNrIiwiY29uc29sZSIsImxvZyIsInNxdWFyZXZhbHVlIiwiY29vcmQiLCJTdHJpbmciLCJjY2kiLCJpbmRleE9mIiwibmV3Um93Iiwic3BsaWNlIiwibmV3VXNlZGJ5Um93Iiwic2V0U3RhdGUiLCJsZW5ndGgiLCJwdXNoIiwiaGFuZGxlUHJpc29uZXJUaWxlQ2xpY2siLCJ0aWxlaW5kZXgiLCJhbGVydCIsImhhbmRsZUd1YXJkVGlsZUNsaWNrIiwicGlja1ByaXNvbmVyVGlsZXMiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicGlja0d1YXJkc1RpbGVzIiwiZW5kUHJpc29uZXJzVHVybiIsInRvU3RyaW5nIiwiaSIsImVuZEd1YXJkc1R1cm4iLCJ0aSIsIlRpbGVzIiwidCIsIlJhY2tUaWxlIiwidGlsZWNsYXNzIiwidGlsZXZhbHVlIiwiRmluaXNoVHVybkJ1dHRvbiIsIlByaXNvbmVycyIsInJlbmRlclRpbGUiLCJyZW5kZXJGaW5pc2hUdXJuIiwib25DbGlja0ZpbmlzaFR1cm4iLCJHdWFyZHMi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LE1BQU0sS0FBS3JFLEtBQUwsQ0FBV3NFLGlCQUFYO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQUdIOztBQUVEckQsUUFBTSxHQUFHO0FBQ0wsd0JBQ0k7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBRyxpQkFBUyxFQUFDLFlBQWI7QUFBQSxrQkFDSyxLQUFLakIsS0FBTCxDQUFXMkIsTUFBWCxDQUFrQlosR0FBbEIsQ0FBc0IsQ0FBQytDLENBQUQsRUFBR0YsRUFBSCxLQUNuQixLQUFLUSxVQUFMLENBQWdCLEtBQUtwRSxLQUFMLENBQVc0QixTQUFYLEtBQXlCLEdBQXpCLElBQWdDLEtBQUs1QixLQUFMLENBQVd5QixTQUFYLEtBQXlCbUMsRUFBekQsR0FBOEQsdUJBQTlELEdBQXdGLGVBQXhHLEVBQXlIQSxFQUF6SCxFQUE2SEUsQ0FBN0gsQ0FESDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixFQU9LLEtBQUs5RCxLQUFMLENBQVc0QixTQUFYLEtBQXlCLEdBQXpCLEdBQ0csS0FBS3lDLGdCQUFMLEVBREgsZ0JBR0csdUpBVlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFlSDs7QUE3QmdDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BiL3ByaXNvbmJyZWFrMi42YjNmZWQ2OGRlNDU1MDc5NWEzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuY29uc3Qgd2lubmluZ2Nvb3JkcyA9IFtcIjAtMFwiLCBcIjAtN1wiLCBcIjAtMTRcIiwgXCI3LTBcIiwgXCI3LTE0XCIsIFwiMTQtMFwiLCBcIjE0LTdcIiwgXCIxNC0xNFwiXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpc29uQnJlYWsoKSB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEdhbWUgLz5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gU3F1YXJlKHByb3BzKSB7IC8vIHNxdWFyZXVzZWRieSwgcmksIGNpLCBjLCBvbkNsaWNrXHJcbiAgICAvLyBuZWVkIHNxdWFyZXVzZWRieSB0byBwaWNrIGNzcyBjbGFzc05hbWUgY29ycmVzcG9uZGluZyB0byB3aG8gcGxheWVkIHRoZSB0aWxlIG9uIHRoZSBzcXVhcmVcclxuICAgIC8vIG5lZWQgcmksIGNpIHRvIGRpc3BsYXkgYWx0ZXJuYXRpbmcgY2hhcmFjdGVycyBvbiB1bnVzZWQgc3F1YXJlc1xyXG4gICAgLy8gbmVlZCBjIHRvIHJlcHJlc2VudCB3aGljaCB0aWxlIGlzIG9uIHRoZSBzcXVhcmUsIGlmIGFueVxyXG4gICAgLy8gbmVlZCBvbkNsaWNrIHRvIGhhbmRsZSBzcXVhcmUgY2xpY2sgYXQgYSBoaWdoZXIgbGV2ZWxcclxuICAgIGNvbnN0IHVzZWRieWNsYXNzID0gcHJvcHMuc3F1YXJldXNlZGJ5ID09PSBcIlBcIiA/IFwicGJTcXVhcmVVc2VkQnlQcmlzb25lcnNcIiA6IFwicGJTcXVhcmVVc2VkQnlHdWFyZHNcIlxyXG4gICAgY29uc3QgdGRjbGFzcyA9IHByb3BzLmMgIT09IFwiLlwiID8gdXNlZGJ5Y2xhc3MgOiBwcm9wcy5yaSA9PT0gNyAmJiBwcm9wcy5jaSA9PT0gNyA/IFwicGJTcXVhcmVDZW50ZXJTcXVhcmVcIiA6IChwcm9wcy5yaSA9PT0gMCB8fCBwcm9wcy5yaSA9PT0gNyB8fCBwcm9wcy5yaSA9PT0gMTQpICYmIChwcm9wcy5jaSA9PT0gMCB8fCBwcm9wcy5jaSA9PT0gNyB8fCBwcm9wcy5jaSA9PT0gMTQpID8gXCJwYlNxdWFyZUVzY2FwZUhhdGNoXCIgOiBcInBiU3F1YXJlXCJcclxuICAgIGNvbnN0IHRkdmFsdWUgPSBwcm9wcy5jICE9PSBcIi5cIiA/IHByb3BzLmMgOiB0ZGNsYXNzID09PSBcInBiU3F1YXJlQ2VudGVyU3F1YXJlXCIgPyBcIuKcsFwiIDogdGRjbGFzcyA9PT0gXCJwYlNxdWFyZUVzY2FwZUhhdGNoXCIgPyBcIvCfkqtcIiA6IHByb3BzLnJpICUgMiA9PT0gcHJvcHMuY2kgJSAyID8gXCLijpRcIiA6IFwi4pymXCJcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RkY2xhc3N9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0ZHZhbHVlfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlclNxdWFyZShyaSwgY2ksIGMsIHNxdWFyZXVzZWRieSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtgU3F1YXJlJHtyaX0tJHtjaX1gfT5cclxuICAgICAgICAgICAgICAgIDxTcXVhcmUgYz17Y30gY2k9e2NpfSByaT17cml9IHNxdWFyZXVzZWRieT17c3F1YXJldXNlZGJ5fSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQ2xpY2socmksIGNpKX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHJlbmRlclJvdyhyaSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2BCb2FyZFJvdyR7cml9YH0gY2xhc3NOYW1lPVwicm93IHBiUm93XCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zcXVhcmVzW3JpXS5tYXAoKGMsY2kpID0+IChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclNxdWFyZShyaSwgY2ksIGMsICh0aGlzLnByb3BzLnVzZWRieVtyaV0pW2NpXSlcclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInBiQm9hcmRcIj5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zcXVhcmVzLm1hcCgocixyaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclJvdyhyaSlcclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgR2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzcXVhcmVzOiBBcnJheSgxNSkuZmlsbChBcnJheSgxNSkuZmlsbCgnLicpKSwgLy8gc3F1YXJlcyBvbiB0aGUgZ2FtZSBib2FyZFxyXG4gICAgICAgICAgICB1c2VkYnk6IEFycmF5KDE1KS5maWxsKEFycmF5KDE1KS5maWxsKCcnKSksICAvLyB3aG8gcHV0IGEgdGlsZSBvbiBhIHNxdWFyZVxyXG4gICAgICAgICAgICB0aWxlczogWydBJywnQScsJ0EnLCdBJywnQScsJ0EnLCdBJywnQScsJ0EnXHJcbiAgICAgICAgICAgICAgICAsJ0InLCdCJywnQycsJ0MnLCdEJywnRCcsJ0QnLCdEJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJ1xyXG4gICAgICAgICAgICAgICAgLCdGJywnRicsJ0cnLCdHJywnRycsJ0gnLCdIJywnSScsJ0knLCdJJywnSScsJ0knLCdJJywnSScsJ0knLCdJJywnSicsJ0snLCdMJywnTCcsJ0wnLCdMJ1xyXG4gICAgICAgICAgICAgICAgLCdNJywnTScsJ04nLCdOJywnTicsJ04nLCdOJywnTicsJ08nLCdPJywnTycsJ08nLCdPJywnTycsJ08nLCdPJywnUCcsJ1AnLCdRJ1xyXG4gICAgICAgICAgICAgICAgLCdSJywnUicsJ1InLCdSJywnUicsJ1InLCdTJywnUycsJ1MnLCdTJywnVCcsJ1QnLCdUJywnVCcsJ1QnLCdUJywnVScsJ1UnLCdVJywnVScsJ1YnLCdWJ1xyXG4gICAgICAgICAgICAgICAgLCdXJywnVycsJ1gnLCdZJywnWScsJ1onLCc/JywnPyddLCAvLyBpbml0aWFsIHRpbGUgcG9vbFxyXG4gICAgICAgICAgICBzZWxlY3Rpb246IC0xLCAvLyB3aGljaCB0aWxlIGZyb20gdGhlIHRpbGUgcmFjayBpbiBwbGF5IGlzIHNlbGVjdGVkXHJcbiAgICAgICAgICAgIHB0aWxlczogW10sIC8vIHByaXNvbmVycyB0aWxlc1xyXG4gICAgICAgICAgICBndGlsZXM6IFtdLCAvLyBndWFyZHMgdGlsZXNcclxuICAgICAgICAgICAgd2hvc2V0dXJuOiAnUCcsIC8vIHByaXNvbmVycyBwbGF5IGZpcnN0XHJcbiAgICAgICAgICAgIHBpY2tpbmc6IHRydWUsIC8vIHBpY2tpbmcgaXMgdHJ1ZSB3aGlsZSB0aWxlcyBhcmUgYmVpbmcgcGlja2VkXHJcbiAgICAgICAgICAgIGN1cnJlbnRjb29yZHM6IFtdLCAvLyBjb29yZHMgb2YgcGxheSBjdXJyZW50bHkgYmVpbmcgbWFkZSB0byBzdXBwb3J0IHRpbGUgcmVjYWxsIGFuZCBwbGF5IHZhbGlkYXRpb25cclxuICAgICAgICAgICAgcmVzY3VlczogMCAvLyBudW1iZXIgb2YgcHJpc29uZXJzIHJlc2N1ZWRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUJvYXJkU3F1YXJlQ2xpY2socmksIGNpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGljayBvbiBcIiArIHJpICsgXCIsIFwiICsgY2kpXHJcbiAgICAgICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc3RhdGUuc2VsZWN0aW9uXHJcbiAgICAgICAgbGV0IHNxdWFyZXMgPSB0aGlzLnN0YXRlLnNxdWFyZXNcclxuICAgICAgICBsZXQgc3F1YXJldmFsdWUgPSAoc3F1YXJlc1tyaV0pW2NpXVxyXG4gICAgICAgIGxldCB3aG9zZXR1cm4gPSB0aGlzLnN0YXRlLndob3NldHVyblxyXG4gICAgICAgIGxldCBwdGlsZXMgPSB0aGlzLnN0YXRlLnB0aWxlc1xyXG4gICAgICAgIGxldCBndGlsZXMgPSB0aGlzLnN0YXRlLmd0aWxlc1xyXG4gICAgICAgIGxldCB1c2VkYnkgPSB0aGlzLnN0YXRlLnVzZWRieVxyXG4gICAgICAgIGxldCBjdXJyZW50Y29vcmRzID0gdGhpcy5zdGF0ZS5jdXJyZW50Y29vcmRzXHJcbiAgICAgICAgbGV0IGNvb3JkID0gU3RyaW5nKHJpKSArIFwiLVwiICsgU3RyaW5nKGNpKTtcclxuICAgICAgICBsZXQgY2NpID0gY3VycmVudGNvb3Jkcy5pbmRleE9mKGNvb3JkKVxyXG4gICAgICAgIGlmIChzZWxlY3Rpb24gPiAtMSAmJiBzcXVhcmV2YWx1ZSA9PT0gXCIuXCIpIHsgLy8gdGlsZSBpcyBzZWxlY3RlZCBmcm9tIHJhY2sgYW5kIGNsaWNrZWQgc3F1YXJlIGlzIG5vdCB1c2VkIHlldFxyXG4gICAgICAgICAgICBsZXQgbmV3Um93ID0gWy4uLnNxdWFyZXNbcmldXVxyXG4gICAgICAgICAgICBuZXdSb3dbY2ldID0gd2hvc2V0dXJuID09PSAnUCcgPyBwdGlsZXNbc2VsZWN0aW9uXSA6IGd0aWxlc1tzZWxlY3Rpb25dXHJcbiAgICAgICAgICAgIHNxdWFyZXNbcmldID0gWy4uLm5ld1Jvd11cclxuICAgICAgICAgICAgd2hvc2V0dXJuID09PSAnUCcgPyBwdGlsZXMuc3BsaWNlKHNlbGVjdGlvbiwgMSkgOiBndGlsZXMuc3BsaWNlKHNlbGVjdGlvbiwxKVxyXG4gICAgICAgICAgICBsZXQgbmV3VXNlZGJ5Um93ID0gWy4uLnVzZWRieVtyaV1dXHJcbiAgICAgICAgICAgIG5ld1VzZWRieVJvd1tjaV0gPSB3aG9zZXR1cm5cclxuICAgICAgICAgICAgdXNlZGJ5W3JpXSA9IFsuLi5uZXdVc2VkYnlSb3ddXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbiA9IC0xXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc3F1YXJlczogc3F1YXJlcyxcclxuICAgICAgICAgICAgICAgIHVzZWRieTogdXNlZGJ5LFxyXG4gICAgICAgICAgICAgICAgcHRpbGVzOiBwdGlsZXMsXHJcbiAgICAgICAgICAgICAgICBndGlsZXM6IGd0aWxlcyxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbjogc2VsZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudGNvb3JkczogWy4uLmN1cnJlbnRjb29yZHMsIGNvb3JkXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNxdWFyZXZhbHVlICE9PSBcIi5cIiAmJiBjY2kgPiAtMSkgeyAvLyBjbGlja2VkIHNxdWFyZSBoYXMgYSB0aWxlIG9uIGl0IGZyb20gdGhlIGN1cnJlbnQgbW92ZSBpbiBwcm9ncmVzc1xyXG4gICAgICAgICAgICAvLyBBc3N1bWluZyBzb21lIGdvb2Qgd2lsbCBmcm9tIHRoZSB1c2VycyB0byBjbGljayBhIHRpbGUgdGhleSBwbGF5ZWRcclxuICAgICAgICAgICAgaWYgKCh3aG9zZXR1cm4gPT09ICdQJyAmJiBwdGlsZXMubGVuZ3RoIDwgNykgfHwgKHdob3NldHVybiA9PT0gJ0cnICYmIGd0aWxlcy5sZW5ndGggPCA3KSkge1xyXG4gICAgICAgICAgICAgICAgd2hvc2V0dXJuID09PSAnUCcgPyBwdGlsZXMucHVzaChzcXVhcmV2YWx1ZSkgOiBndGlsZXMucHVzaChzcXVhcmV2YWx1ZSlcclxuICAgICAgICAgICAgICAgIGxldCBuZXdSb3cgPSBbLi4uc3F1YXJlc1tyaV1dXHJcbiAgICAgICAgICAgICAgICBuZXdSb3dbY2ldID0gXCIuXCJcclxuICAgICAgICAgICAgICAgIHNxdWFyZXNbcmldID0gWy4uLm5ld1Jvd11cclxuICAgICAgICAgICAgICAgIGxldCBuZXdVc2VkYnlSb3cgPSBbLi4udXNlZGJ5W3JpXV1cclxuICAgICAgICAgICAgICAgIG5ld1VzZWRieVJvd1tjaV0gPSBcIlwiXHJcbiAgICAgICAgICAgICAgICB1c2VkYnlbcmldID0gWy4uLm5ld1VzZWRieVJvd11cclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbiA9IHdob3NldHVybiA9PT0gJ1AnID8gcHRpbGVzLmxlbmd0aCAtIDEgOiBndGlsZXMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgY3VycmVudGNvb3Jkcy5zcGxpY2UoY2NpLDEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZWRieTogdXNlZGJ5LFxyXG4gICAgICAgICAgICAgICAgICAgIHB0aWxlczogcHRpbGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIGd0aWxlczogZ3RpbGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbjogc2VsZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRjb29yZHM6IGN1cnJlbnRjb29yZHNcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVByaXNvbmVyVGlsZUNsaWNrKHRpbGVpbmRleCkgeyAvLyB0aGUgaW5kZXggb2YgcHRpbGVzXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUud2hvc2V0dXJuID09PSAnUCcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb246IHRpbGVpbmRleFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdJdCBpcyBub3QgeW91ciB0dXJuJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlR3VhcmRUaWxlQ2xpY2sodGlsZWluZGV4KSB7IC8vIHRoZSBpbmRleCBvZiBndGlsZXNcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS53aG9zZXR1cm4gPT09ICdHJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbjogdGlsZWluZGV4XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ0l0IGlzIG5vdCB5b3VyIHR1cm4nKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwaWNrUHJpc29uZXJUaWxlcygpIHtcclxuICAgICAgICBsZXQgcHRpbGVzID0gWy4uLnRoaXMuc3RhdGUucHRpbGVzXVxyXG4gICAgICAgIGxldCB0aWxlcyA9IFsuLi50aGlzLnN0YXRlLnRpbGVzXVxyXG4gICAgICAgIHdoaWxlIChwdGlsZXMubGVuZ3RoIDwgNyAmJiB0aWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGlsZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICBwdGlsZXMucHVzaCh0aWxlc1tyYW5kXSlcclxuICAgICAgICAgICAgdGlsZXMuc3BsaWNlKHJhbmQsMSkgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHBpY2tpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBwdGlsZXM6IHB0aWxlcyxcclxuICAgICAgICAgICAgdGlsZXM6IHRpbGVzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHBpY2tHdWFyZHNUaWxlcygpIHtcclxuICAgICAgICBsZXQgZ3RpbGVzID0gWy4uLnRoaXMuc3RhdGUuZ3RpbGVzXVxyXG4gICAgICAgIGxldCB0aWxlcyA9IFsuLi50aGlzLnN0YXRlLnRpbGVzXVxyXG4gICAgICAgIHdoaWxlIChndGlsZXMubGVuZ3RoIDwgNyAmJiB0aWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGlsZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICBndGlsZXMucHVzaCh0aWxlc1tyYW5kXSlcclxuICAgICAgICAgICAgdGlsZXMuc3BsaWNlKHJhbmQsMSkgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHBpY2tpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBndGlsZXM6IGd0aWxlcyxcclxuICAgICAgICAgICAgdGlsZXM6IHRpbGVzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBlbmRQcmlzb25lcnNUdXJuKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwid2lubmluZyBjb29yZHMgXCIgKyB3aW5uaW5nY29vcmRzLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50IGNvb3JkcyBcIiArIHRoaXMuc3RhdGUuY3VycmVudGNvb3Jkcy50b1N0cmluZygpKVxyXG4gICAgICAgIGxldCByZXNjdWVzID0gdGhpcy5zdGF0ZS5yZXNjdWVzXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLmN1cnJlbnRjb29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHdpbm5pbmdjb29yZHMuaW5kZXhPZih0aGlzLnN0YXRlLmN1cnJlbnRjb29yZHNbaV0pID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJlc2N1ZXMrK1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB3aG9zZXR1cm46ICdHJyxcclxuICAgICAgICAgICAgcGlja2luZzogdHJ1ZSxcclxuICAgICAgICAgICAgc2VsZWN0aW9uOiAtMSxcclxuICAgICAgICAgICAgY3VycmVudGNvb3JkczogW10sXHJcbiAgICAgICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZW5kR3VhcmRzVHVybigpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgd2hvc2V0dXJuOiAnUCcsXHJcbiAgICAgICAgICAgIHBpY2tpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbjogLTEsXHJcbiAgICAgICAgICAgIGN1cnJlbnRjb29yZHM6IFtdXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBwcmlzb25icmVha1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndtdGl0bGUgTWFzdGVybWluZFwiPlByaXNvbiBCcmVhazwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTIgcGJQcmlzb25lcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucGlja2luZyAmJiB0aGlzLnN0YXRlLndob3NldHVybiA9PT0gJ1AnICYmIHRoaXMuc3RhdGUucHRpbGVzLmxlbmd0aCA8IDcgJiYgdGhpcy5zdGF0ZS50aWxlcy5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGlja1ByaXNvbmVyVGlsZXMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJpc29uZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdGlsZXM9e3RoaXMuc3RhdGUucHRpbGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hvc2V0dXJuPXt0aGlzLnN0YXRlLndob3NldHVybn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17dGhpcy5zdGF0ZS5zZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IHRoaXMuaGFuZGxlUHJpc29uZXJUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja0ZpbmlzaFR1cm49eygpID0+IHRoaXMuZW5kUHJpc29uZXJzVHVybigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzY3Vlcz17dGhpcy5zdGF0ZS5yZXNjdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlcz17dGhpcy5zdGF0ZS5zcXVhcmVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlZGJ5PXt0aGlzLnN0YXRlLnVzZWRieX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhyaSwgY2kpID0+IHRoaXMuaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyaSwgY2kpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTIgcGJHdWFyZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucGlja2luZyAmJiB0aGlzLnN0YXRlLndob3NldHVybiA9PT0gJ0cnICYmIHRoaXMuc3RhdGUuZ3RpbGVzLmxlbmd0aCA8IDcgJiYgdGhpcy5zdGF0ZS50aWxlcy5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGlja0d1YXJkc1RpbGVzKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEd1YXJkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3RpbGVzPXt0aGlzLnN0YXRlLmd0aWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdob3NldHVybj17dGhpcy5zdGF0ZS53aG9zZXR1cm59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb249e3RoaXMuc3RhdGUuc2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KHRpKSA9PiB0aGlzLmhhbmRsZUd1YXJkVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tGaW5pc2hUdXJuPXsoKSA9PiB0aGlzLmVuZEd1YXJkc1R1cm4oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRpbGVzIHRpbGVzPXt0aGlzLnN0YXRlLnRpbGVzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy4uLy4uLyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwid21saW5rXCI+SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7ICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBUaWxlcyhwcm9wcykge1xyXG4gICAgLy8gdGhlcmUgaXMgYSBiZXR0ZXIgd2F5IF5eXlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXBvb2xcIj5cclxuICAgICAgICAgICAge3Byb3BzLnRpbGVzLm1hcCgodCx0aSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtgdGlsZSR7dGl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RpID4gMCAmJiB0ICE9PSBwcm9wcy50aWxlc1t0aS0xXSA/IDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcG9vbERpdmlkZXJcIj48L2Rpdj4gOiA8PjwvPn1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYlRpbGVwb29sVGlsZVwiPnt0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJhY2tUaWxlKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3Byb3BzLnRpbGVjbGFzc30gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMudGlsZXZhbHVlfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgKSAgICBcclxufVxyXG5cclxuZnVuY3Rpb24gRmluaXNoVHVybkJ1dHRvbihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICBGaW5pc2ggVHVyblxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5jbGFzcyBQcmlzb25lcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyVGlsZSh0aWxlY2xhc3MsIHRpbGVpbmRleCwgdGlsZXZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJhY2tUaWxlIHRpbGVjbGFzcz17dGlsZWNsYXNzfSB0aWxldmFsdWU9e3RpbGV2YWx1ZX0gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkNsaWNrKHRpbGVpbmRleCl9Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckZpbmlzaFR1cm4oKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZpbmlzaFR1cm5CdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkNsaWNrRmluaXNoVHVybigpfS8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPlBSSVNPTkVSUzwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBiVGlsZXJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5wdGlsZXMubWFwKCh0LHRpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVGlsZSh0aGlzLnByb3BzLndob3NldHVybiA9PT0gJ1AnICYmIHRoaXMucHJvcHMuc2VsZWN0aW9uID09PSB0aSA/IFwicGJUaWxlT25SYWNrU2VsZWN0ZWRQXCIgOiBcInBiVGlsZU9uUmFja1BcIiwgdGksIHQpXHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy53aG9zZXR1cm4gPT09ICdQJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJGaW5pc2hUdXJuKClcclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIFJlc2N1ZXMgbWFkZToge3RoaXMucHJvcHMucmVzY3Vlc31cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmNsYXNzIEd1YXJkcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXJUaWxlKHRpbGVjbGFzcywgdGlsZWluZGV4LCB0aWxldmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UmFja1RpbGUgdGlsZWNsYXNzPXt0aWxlY2xhc3N9IHRpbGV2YWx1ZT17dGlsZXZhbHVlfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQ2xpY2sodGlsZWluZGV4KX0vPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRmluaXNoVHVybigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8RmluaXNoVHVybkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQ2xpY2tGaW5pc2hUdXJuKCl9Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+R1VBUkRTPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmd0aWxlcy5tYXAoKHQsdGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUaWxlKHRoaXMucHJvcHMud2hvc2V0dXJuID09PSAnRycgJiYgdGhpcy5wcm9wcy5zZWxlY3Rpb24gPT09IHRpID8gXCJwYlRpbGVPblJhY2tTZWxlY3RlZEdcIiA6IFwicGJUaWxlT25SYWNrR1wiLCB0aSwgdClcclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLndob3NldHVybiA9PT0gJ0cnID9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckZpbmlzaFR1cm4oKVxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==