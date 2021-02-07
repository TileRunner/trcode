webpackHotUpdate_N_E("pages/pb/prisonbreak2",{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./node_modules/next/dist/client/image.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/to-base-64.js":
false,

/***/ "./node_modules/next/dist/next-server/server/image-config.js":
false,

/***/ "./node_modules/next/image.js":
false,

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
    this.state = {
      squares: Array(15).fill(Array(15).fill('.')),
      // squares on the game board
      usedby: Array(15).fill(Array(15).fill('')),
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

  pickPrisonersTiles() {
    let ptiles = [...this.state.ptiles];
    let tiles = [...this.state.tiles];

    while (ptiles.length < 7 && tiles.length > 0) {
      let rand = Math.floor(Math.random() * tiles.length);
      ptiles.push(tiles[rand]);
      tiles.splice(rand, 1);
    }

    ptiles.sort();
    this.setState({
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

    gtiles.sort();
    this.setState({
      gtiles: gtiles,
      tiles: tiles
    });
  }

  endPrisonersTurn() {
    console.log("winning coords " + escapehatches.toString());
    console.log("current coords " + this.state.currentcoords.toString());
    let rescues = this.state.rescues;

    for (var i = 0; i < this.state.currentcoords.length; i++) {
      if (escapehatches.indexOf(this.state.currentcoords[i]) > -1) {
        rescues++;
      }
    }

    this.setState({
      whoseturn: 'G',
      selection: -1,
      currentcoords: [],
      rescues: rescues
    });
    this.pickPrisonersTiles();
  }

  endGuardsTurn() {
    this.setState({
      whoseturn: 'P',
      selection: -1,
      currentcoords: []
    });
    this.pickGuardsTiles();
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
          lineNumber: 231,
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
              lineNumber: 236,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 230,
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
            rescues: this.state.rescues
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 241,
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
            lineNumber: 252,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2 pbGuards",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Guards, {
            gtiles: this.state.gtiles,
            whoseturn: this.state.whoseturn,
            selection: this.state.selection,
            onClick: ti => this.handleGuardTileClick(ti),
            onClickFinishTurn: () => this.endGuardsTurn()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Tiles, {
            tiles: this.state.tiles
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 268,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 229,
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
      lineNumber: 280,
      columnNumber: 13
    }, this), props.tiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [ti > 0 && t !== props.tiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pbTilepoolDivider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 58
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "pbTilepoolTile",
        children: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 21
      }, this)]
    }, `tile${ti}`, true, {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 17
    }, this))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 279,
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
    lineNumber: 293,
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
    lineNumber: 301,
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
    }, tileclass + String(tileindex), false, {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 13
    }, this);
  }

  renderFinishTurn() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
      onClick: () => this.props.onClickFinishTurn()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 316,
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
        lineNumber: 325,
        columnNumber: 21
      }, this)
    }, value + String(index), false, {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 17
    }, this));
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "PRISONERS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "pbTilerack",
        children: this.props.ptiles.map((t, ti) => this.renderTile(this.props.whoseturn === 'P' && this.props.selection === ti ? "pbTileOnRackSelectedP" : "pbTileOnRackP", ti, t))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 17
      }, this), this.props.whoseturn === 'P' ? this.renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Rescues made: ", this.props.rescues, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 21
        }, this), this.renderFreedPrisoners(this.props.rescues)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 337,
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
      lineNumber: 361,
      columnNumber: 13
    }, this);
  }

  renderFinishTurn() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FinishTurnButton, {
      onClick: () => this.props.onClickFinishTurn()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 13
    }, this);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "GUARDS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 374,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "pbTilerack",
        children: this.props.gtiles.map((t, ti) => this.renderTile(this.props.whoseturn === 'G' && this.props.selection === ti ? "pbTileOnRackSelectedG" : "pbTileOnRackG", ti, t))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 375,
        columnNumber: 17
      }, this), this.props.whoseturn === 'G' ? this.renderFinishTurn() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 373,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsyLmpzIl0sIm5hbWVzIjpbImVzY2FwZWhhdGNoZXMiLCJpbml0aWFsdGlsZXMiLCJQcmlzb25CcmVhayIsIlNxdWFyZSIsInByb3BzIiwidXNlZGJ5Y2xhc3MiLCJzcXVhcmV1c2VkYnkiLCJ0ZGNsYXNzIiwiYyIsInJpIiwiY2kiLCJ0ZHZhbHVlIiwib25DbGljayIsIkJvYXJkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXJTcXVhcmUiLCJyZW5kZXJSb3ciLCJzcXVhcmVzIiwibWFwIiwidXNlZGJ5IiwicmVuZGVyIiwiciIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsInRpbGVzIiwicHRpbGVzIiwiZ3RpbGVzIiwibGVuZ3RoIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJzcGxpY2UiLCJzb3J0Iiwic3RhdGUiLCJBcnJheSIsImZpbGwiLCJzZWxlY3Rpb24iLCJ3aG9zZXR1cm4iLCJjdXJyZW50Y29vcmRzIiwicmVzY3VlcyIsImhhbmRsZUJvYXJkU3F1YXJlQ2xpY2siLCJjb25zb2xlIiwibG9nIiwic3F1YXJldmFsdWUiLCJjb29yZCIsIlN0cmluZyIsImNjaSIsImluZGV4T2YiLCJuZXdSb3ciLCJuZXdVc2VkYnlSb3ciLCJzZXRTdGF0ZSIsImhhbmRsZVByaXNvbmVyVGlsZUNsaWNrIiwidGlsZWluZGV4IiwiYWxlcnQiLCJoYW5kbGVHdWFyZFRpbGVDbGljayIsInBpY2tQcmlzb25lcnNUaWxlcyIsInBpY2tHdWFyZHNUaWxlcyIsImVuZFByaXNvbmVyc1R1cm4iLCJ0b1N0cmluZyIsImkiLCJlbmRHdWFyZHNUdXJuIiwidGkiLCJUaWxlcyIsInQiLCJSYWNrVGlsZSIsInRpbGVjbGFzcyIsInRpbGV2YWx1ZSIsIkZpbmlzaFR1cm5CdXR0b24iLCJQcmlzb25lcnMiLCJyZW5kZXJUaWxlIiwicmVuZGVyRmluaXNoVHVybiIsIm9uQ2xpY2tGaW5pc2hUdXJuIiwicmVuZGVyRnJlZWRQcmlzb25lcnMiLCJjb3VudCIsImR1bWIiLCJ2YWx1ZSIsImluZGV4IiwiR3VhcmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsYUFBYSxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxNQUFmLEVBQXVCLEtBQXZCLEVBQThCLE1BQTlCLEVBQXNDLE1BQXRDLEVBQThDLE1BQTlDLEVBQXNELE9BQXRELENBQXRCLEMsQ0FBcUY7O0FBQ3JGLE1BQU1DLFlBQVksR0FBRyxDQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVMsR0FBVCxFQUFhLEdBQWIsRUFBaUIsR0FBakIsRUFBcUIsR0FBckIsRUFBeUIsR0FBekIsRUFBNkIsR0FBN0IsRUFBaUMsR0FBakMsRUFDcEIsR0FEb0IsRUFDaEIsR0FEZ0IsRUFDWixHQURZLEVBQ1IsR0FEUSxFQUNKLEdBREksRUFDQSxHQURBLEVBQ0ksR0FESixFQUNRLEdBRFIsRUFDWSxHQURaLEVBQ2dCLEdBRGhCLEVBQ29CLEdBRHBCLEVBQ3dCLEdBRHhCLEVBQzRCLEdBRDVCLEVBQ2dDLEdBRGhDLEVBQ29DLEdBRHBDLEVBQ3dDLEdBRHhDLEVBQzRDLEdBRDVDLEVBQ2dELEdBRGhELEVBQ29ELEdBRHBELEVBQ3dELEdBRHhELEVBRXBCLEdBRm9CLEVBRWhCLEdBRmdCLEVBRVosR0FGWSxFQUVSLEdBRlEsRUFFSixHQUZJLEVBRUEsR0FGQSxFQUVJLEdBRkosRUFFUSxHQUZSLEVBRVksR0FGWixFQUVnQixHQUZoQixFQUVvQixHQUZwQixFQUV3QixHQUZ4QixFQUU0QixHQUY1QixFQUVnQyxHQUZoQyxFQUVvQyxHQUZwQyxFQUV3QyxHQUZ4QyxFQUU0QyxHQUY1QyxFQUVnRCxHQUZoRCxFQUVvRCxHQUZwRCxFQUV3RCxHQUZ4RCxFQUU0RCxHQUY1RCxFQUVnRSxHQUZoRSxFQUdwQixH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QVMsRUFBQyxZQUFiO0FBQUEsa0JBQ0ssS0FBS2pCLEtBQUwsQ0FBV3VCLE1BQVgsQ0FBa0JSLEdBQWxCLENBQXNCLENBQUMrQyxDQUFELEVBQUdGLEVBQUgsS0FDbkIsS0FBS1EsVUFBTCxDQUFnQixLQUFLcEUsS0FBTCxDQUFXb0MsU0FBWCxLQUF5QixHQUF6QixJQUFnQyxLQUFLcEMsS0FBTCxDQUFXbUMsU0FBWCxLQUF5QnlCLEVBQXpELEdBQThELHVCQUE5RCxHQUF3RixlQUF4RyxFQUF5SEEsRUFBekgsRUFBNkhFLENBQTdILENBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosRUFPSyxLQUFLOUQsS0FBTCxDQUFXb0MsU0FBWCxLQUF5QixHQUF6QixHQUNHLEtBQUtpQyxnQkFBTCxFQURILGdCQUdHLHVKQVZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBZUg7O0FBN0JnQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYi9wcmlzb25icmVhazIuY2MxMGRjNDM0NmQ3YjM3YzdmOTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBlc2NhcGVoYXRjaGVzID0gW1wiMC0wXCIsIFwiMC03XCIsIFwiMC0xNFwiLCBcIjctMFwiLCBcIjctMTRcIiwgXCIxNC0wXCIsIFwiMTQtN1wiLCBcIjE0LTE0XCJdIC8vIGNvb3JkcyBvZiBlc2NhcGUgaGF0Y2hlc1xyXG5jb25zdCBpbml0aWFsdGlsZXMgPSBbJ0EnLCdBJywnQScsJ0EnLCdBJywnQScsJ0EnLCdBJywnQSdcclxuLCdCJywnQicsJ0MnLCdDJywnRCcsJ0QnLCdEJywnRCcsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRSdcclxuLCdGJywnRicsJ0cnLCdHJywnRycsJ0gnLCdIJywnSScsJ0knLCdJJywnSScsJ0knLCdJJywnSScsJ0knLCdJJywnSicsJ0snLCdMJywnTCcsJ0wnLCdMJ1xyXG4sJ00nLCdNJywnTicsJ04nLCdOJywnTicsJ04nLCdOJywnTycsJ08nLCdPJywnTycsJ08nLCdPJywnTycsJ08nLCdQJywnUCcsJ1EnXHJcbiwnUicsJ1InLCdSJywnUicsJ1InLCdSJywnUycsJ1MnLCdTJywnUycsJ1QnLCdUJywnVCcsJ1QnLCdUJywnVCcsJ1UnLCdVJywnVScsJ1UnLCdWJywnVidcclxuLCdXJywnVycsJ1gnLCdZJywnWScsJ1onLCc/JywnPyddIC8vIGluaXRpYWwgdGlsZSBwb29sXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmlzb25CcmVhaygpIHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8R2FtZSAvPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBTcXVhcmUocHJvcHMpIHsgLy8gc3F1YXJldXNlZGJ5LCByaSwgY2ksIGMsIG9uQ2xpY2tcclxuICAgIC8vIG5lZWQgc3F1YXJldXNlZGJ5IHRvIHBpY2sgY3NzIGNsYXNzTmFtZSBjb3JyZXNwb25kaW5nIHRvIHdobyBwbGF5ZWQgdGhlIHRpbGUgb24gdGhlIHNxdWFyZVxyXG4gICAgLy8gbmVlZCByaSwgY2kgdG8gZGlzcGxheSBhbHRlcm5hdGluZyBjaGFyYWN0ZXJzIG9uIHVudXNlZCBzcXVhcmVzXHJcbiAgICAvLyBuZWVkIGMgdG8gcmVwcmVzZW50IHdoaWNoIHRpbGUgaXMgb24gdGhlIHNxdWFyZSwgaWYgYW55XHJcbiAgICAvLyBuZWVkIG9uQ2xpY2sgdG8gaGFuZGxlIHNxdWFyZSBjbGljayBhdCBhIGhpZ2hlciBsZXZlbFxyXG4gICAgY29uc3QgdXNlZGJ5Y2xhc3MgPSBwcm9wcy5zcXVhcmV1c2VkYnkgPT09IFwiUFwiID8gXCJwYlNxdWFyZVVzZWRCeVByaXNvbmVyc1wiIDogXCJwYlNxdWFyZVVzZWRCeUd1YXJkc1wiXHJcbiAgICBjb25zdCB0ZGNsYXNzID0gcHJvcHMuYyAhPT0gXCIuXCIgPyB1c2VkYnljbGFzcyA6IHByb3BzLnJpID09PSA3ICYmIHByb3BzLmNpID09PSA3ID8gXCJwYlNxdWFyZUNlbnRlclNxdWFyZVwiIDogKHByb3BzLnJpID09PSAwIHx8IHByb3BzLnJpID09PSA3IHx8IHByb3BzLnJpID09PSAxNCkgJiYgKHByb3BzLmNpID09PSAwIHx8IHByb3BzLmNpID09PSA3IHx8IHByb3BzLmNpID09PSAxNCkgPyBcInBiU3F1YXJlRXNjYXBlSGF0Y2hcIiA6IHByb3BzLnJpICUgMiA9PT0gcHJvcHMuY2kgJSAyID8gXCJwYlNxdWFyZVwiIDogXCJwYlNxdWFyZTJcIlxyXG4gICAgY29uc3QgdGR2YWx1ZSA9IHByb3BzLmMgIT09IFwiLlwiID8gcHJvcHMuYyA6IHRkY2xhc3MgPT09IFwicGJTcXVhcmVDZW50ZXJTcXVhcmVcIiA/IFwi4pywXCIgOiB0ZGNsYXNzID09PSBcInBiU3F1YXJlRXNjYXBlSGF0Y2hcIiA/IFwi8J+Sq1wiIDogcHJvcHMucmkgJSAyID09PSBwcm9wcy5jaSAlIDIgPyBcIuKOlFwiIDogXCLinKZcIlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGRjbGFzc30gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAge3RkdmFsdWV9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY2xhc3MgQm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyU3F1YXJlKHJpLCBjaSwgYywgc3F1YXJldXNlZGJ5KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2BTcXVhcmUke3JpfS0ke2NpfWB9PlxyXG4gICAgICAgICAgICAgICAgPFNxdWFyZSBjPXtjfSBjaT17Y2l9IHJpPXtyaX0gc3F1YXJldXNlZGJ5PXtzcXVhcmV1c2VkYnl9IG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DbGljayhyaSwgY2kpfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyUm93KHJpKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRyIGtleT17YEJvYXJkUm93JHtyaX1gfSBjbGFzc05hbWU9XCJyb3cgcGJSb3dcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNxdWFyZXNbcmldLm1hcCgoYyxjaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyU3F1YXJlKHJpLCBjaSwgYywgKHRoaXMucHJvcHMudXNlZGJ5W3JpXSlbY2ldKVxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwicGJCb2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNxdWFyZXMubWFwKChyLHJpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUm93KHJpKVxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICApXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBHYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIGxldCB0aWxlcyA9IFsuLi5pbml0aWFsdGlsZXNdXHJcbiAgICAgICAgbGV0IHB0aWxlcyA9IFtdXHJcbiAgICAgICAgbGV0IGd0aWxlcyA9IFtdXHJcbiAgICAgICAgd2hpbGUgKHB0aWxlcy5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGlsZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICBwdGlsZXMucHVzaCh0aWxlc1tyYW5kXSlcclxuICAgICAgICAgICAgdGlsZXMuc3BsaWNlKHJhbmQsMSkgICBcclxuICAgICAgICAgICAgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRpbGVzLmxlbmd0aClcclxuICAgICAgICAgICAgZ3RpbGVzLnB1c2godGlsZXNbcmFuZF0pXHJcbiAgICAgICAgICAgIHRpbGVzLnNwbGljZShyYW5kLDEpICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB0aWxlcy5zb3J0KClcclxuICAgICAgICBndGlsZXMuc29ydCgpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc3F1YXJlczogQXJyYXkoMTUpLmZpbGwoQXJyYXkoMTUpLmZpbGwoJy4nKSksIC8vIHNxdWFyZXMgb24gdGhlIGdhbWUgYm9hcmRcclxuICAgICAgICAgICAgdXNlZGJ5OiBBcnJheSgxNSkuZmlsbChBcnJheSgxNSkuZmlsbCgnJykpLCAgLy8gd2hvIHB1dCBhIHRpbGUgb24gYSBzcXVhcmVcclxuICAgICAgICAgICAgdGlsZXM6IHRpbGVzLFxyXG4gICAgICAgICAgICBzZWxlY3Rpb246IC0xLCAvLyB3aGljaCB0aWxlIGZyb20gdGhlIHRpbGUgcmFjayBpbiBwbGF5IGlzIHNlbGVjdGVkXHJcbiAgICAgICAgICAgIHB0aWxlczogcHRpbGVzLCAvLyBwcmlzb25lcnMgdGlsZXNcclxuICAgICAgICAgICAgZ3RpbGVzOiBndGlsZXMsIC8vIGd1YXJkcyB0aWxlc1xyXG4gICAgICAgICAgICB3aG9zZXR1cm46ICdQJywgLy8gcHJpc29uZXJzIHBsYXkgZmlyc3RcclxuICAgICAgICAgICAgY3VycmVudGNvb3JkczogW10sIC8vIGNvb3JkcyBvZiBwbGF5IGN1cnJlbnRseSBiZWluZyBtYWRlIHRvIHN1cHBvcnQgdGlsZSByZWNhbGwgYW5kIHBsYXkgdmFsaWRhdGlvblxyXG4gICAgICAgICAgICByZXNjdWVzOiAwIC8vIG51bWJlciBvZiBwcmlzb25lcnMgcmVzY3VlZFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyaSwgY2kpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrIG9uIFwiICsgcmkgKyBcIiwgXCIgKyBjaSlcclxuICAgICAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zdGF0ZS5zZWxlY3Rpb25cclxuICAgICAgICBsZXQgc3F1YXJlcyA9IHRoaXMuc3RhdGUuc3F1YXJlc1xyXG4gICAgICAgIGxldCBzcXVhcmV2YWx1ZSA9IChzcXVhcmVzW3JpXSlbY2ldXHJcbiAgICAgICAgbGV0IHdob3NldHVybiA9IHRoaXMuc3RhdGUud2hvc2V0dXJuXHJcbiAgICAgICAgbGV0IHB0aWxlcyA9IHRoaXMuc3RhdGUucHRpbGVzXHJcbiAgICAgICAgbGV0IGd0aWxlcyA9IHRoaXMuc3RhdGUuZ3RpbGVzXHJcbiAgICAgICAgbGV0IHVzZWRieSA9IHRoaXMuc3RhdGUudXNlZGJ5XHJcbiAgICAgICAgbGV0IGN1cnJlbnRjb29yZHMgPSB0aGlzLnN0YXRlLmN1cnJlbnRjb29yZHNcclxuICAgICAgICBsZXQgY29vcmQgPSBTdHJpbmcocmkpICsgXCItXCIgKyBTdHJpbmcoY2kpO1xyXG4gICAgICAgIGxldCBjY2kgPSBjdXJyZW50Y29vcmRzLmluZGV4T2YoY29vcmQpXHJcbiAgICAgICAgaWYgKHNlbGVjdGlvbiA+IC0xICYmIHNxdWFyZXZhbHVlID09PSBcIi5cIikgeyAvLyB0aWxlIGlzIHNlbGVjdGVkIGZyb20gcmFjayBhbmQgY2xpY2tlZCBzcXVhcmUgaXMgbm90IHVzZWQgeWV0XHJcbiAgICAgICAgICAgIGxldCBuZXdSb3cgPSBbLi4uc3F1YXJlc1tyaV1dXHJcbiAgICAgICAgICAgIG5ld1Jvd1tjaV0gPSB3aG9zZXR1cm4gPT09ICdQJyA/IHB0aWxlc1tzZWxlY3Rpb25dIDogZ3RpbGVzW3NlbGVjdGlvbl1cclxuICAgICAgICAgICAgc3F1YXJlc1tyaV0gPSBbLi4ubmV3Um93XVxyXG4gICAgICAgICAgICB3aG9zZXR1cm4gPT09ICdQJyA/IHB0aWxlcy5zcGxpY2Uoc2VsZWN0aW9uLCAxKSA6IGd0aWxlcy5zcGxpY2Uoc2VsZWN0aW9uLDEpXHJcbiAgICAgICAgICAgIGxldCBuZXdVc2VkYnlSb3cgPSBbLi4udXNlZGJ5W3JpXV1cclxuICAgICAgICAgICAgbmV3VXNlZGJ5Um93W2NpXSA9IHdob3NldHVyblxyXG4gICAgICAgICAgICB1c2VkYnlbcmldID0gWy4uLm5ld1VzZWRieVJvd11cclxuICAgICAgICAgICAgc2VsZWN0aW9uID0gLTFcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzcXVhcmVzOiBzcXVhcmVzLFxyXG4gICAgICAgICAgICAgICAgdXNlZGJ5OiB1c2VkYnksXHJcbiAgICAgICAgICAgICAgICBwdGlsZXM6IHB0aWxlcyxcclxuICAgICAgICAgICAgICAgIGd0aWxlczogZ3RpbGVzLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uOiBzZWxlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Y29vcmRzOiBbLi4uY3VycmVudGNvb3JkcywgY29vcmRdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc3F1YXJldmFsdWUgIT09IFwiLlwiICYmIGNjaSA+IC0xKSB7IC8vIGNsaWNrZWQgc3F1YXJlIGhhcyBhIHRpbGUgb24gaXQgZnJvbSB0aGUgY3VycmVudCBtb3ZlIGluIHByb2dyZXNzXHJcbiAgICAgICAgICAgIC8vIEFzc3VtaW5nIHNvbWUgZ29vZCB3aWxsIGZyb20gdGhlIHVzZXJzIHRvIGNsaWNrIGEgdGlsZSB0aGV5IHBsYXllZFxyXG4gICAgICAgICAgICBpZiAoKHdob3NldHVybiA9PT0gJ1AnICYmIHB0aWxlcy5sZW5ndGggPCA3KSB8fCAod2hvc2V0dXJuID09PSAnRycgJiYgZ3RpbGVzLmxlbmd0aCA8IDcpKSB7XHJcbiAgICAgICAgICAgICAgICB3aG9zZXR1cm4gPT09ICdQJyA/IHB0aWxlcy5wdXNoKHNxdWFyZXZhbHVlKSA6IGd0aWxlcy5wdXNoKHNxdWFyZXZhbHVlKVxyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1JvdyA9IFsuLi5zcXVhcmVzW3JpXV1cclxuICAgICAgICAgICAgICAgIG5ld1Jvd1tjaV0gPSBcIi5cIlxyXG4gICAgICAgICAgICAgICAgc3F1YXJlc1tyaV0gPSBbLi4ubmV3Um93XVxyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1VzZWRieVJvdyA9IFsuLi51c2VkYnlbcmldXVxyXG4gICAgICAgICAgICAgICAgbmV3VXNlZGJ5Um93W2NpXSA9IFwiXCJcclxuICAgICAgICAgICAgICAgIHVzZWRieVtyaV0gPSBbLi4ubmV3VXNlZGJ5Um93XVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uID0gd2hvc2V0dXJuID09PSAnUCcgPyBwdGlsZXMubGVuZ3RoIC0gMSA6IGd0aWxlcy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Y29vcmRzLnNwbGljZShjY2ksMSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZXM6IHNxdWFyZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlZGJ5OiB1c2VkYnksXHJcbiAgICAgICAgICAgICAgICAgICAgcHRpbGVzOiBwdGlsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3RpbGVzOiBndGlsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uOiBzZWxlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGNvb3JkczogY3VycmVudGNvb3Jkc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUHJpc29uZXJUaWxlQ2xpY2sodGlsZWluZGV4KSB7IC8vIHRoZSBpbmRleCBvZiBwdGlsZXNcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS53aG9zZXR1cm4gPT09ICdQJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbjogdGlsZWluZGV4XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ0l0IGlzIG5vdCB5b3VyIHR1cm4nKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVHdWFyZFRpbGVDbGljayh0aWxlaW5kZXgpIHsgLy8gdGhlIGluZGV4IG9mIGd0aWxlc1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLndob3NldHVybiA9PT0gJ0cnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uOiB0aWxlaW5kZXhcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnSXQgaXMgbm90IHlvdXIgdHVybicpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBpY2tQcmlzb25lcnNUaWxlcygpIHtcclxuICAgICAgICBsZXQgcHRpbGVzID0gWy4uLnRoaXMuc3RhdGUucHRpbGVzXVxyXG4gICAgICAgIGxldCB0aWxlcyA9IFsuLi50aGlzLnN0YXRlLnRpbGVzXVxyXG4gICAgICAgIHdoaWxlIChwdGlsZXMubGVuZ3RoIDwgNyAmJiB0aWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGlsZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICBwdGlsZXMucHVzaCh0aWxlc1tyYW5kXSlcclxuICAgICAgICAgICAgdGlsZXMuc3BsaWNlKHJhbmQsMSkgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgcHRpbGVzLnNvcnQoKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwdGlsZXM6IHB0aWxlcyxcclxuICAgICAgICAgICAgdGlsZXM6IHRpbGVzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHBpY2tHdWFyZHNUaWxlcygpIHtcclxuICAgICAgICBsZXQgZ3RpbGVzID0gWy4uLnRoaXMuc3RhdGUuZ3RpbGVzXVxyXG4gICAgICAgIGxldCB0aWxlcyA9IFsuLi50aGlzLnN0YXRlLnRpbGVzXVxyXG4gICAgICAgIHdoaWxlIChndGlsZXMubGVuZ3RoIDwgNyAmJiB0aWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGlsZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICBndGlsZXMucHVzaCh0aWxlc1tyYW5kXSlcclxuICAgICAgICAgICAgdGlsZXMuc3BsaWNlKHJhbmQsMSkgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZ3RpbGVzLnNvcnQoKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBndGlsZXM6IGd0aWxlcyxcclxuICAgICAgICAgICAgdGlsZXM6IHRpbGVzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBlbmRQcmlzb25lcnNUdXJuKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwid2lubmluZyBjb29yZHMgXCIgKyBlc2NhcGVoYXRjaGVzLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50IGNvb3JkcyBcIiArIHRoaXMuc3RhdGUuY3VycmVudGNvb3Jkcy50b1N0cmluZygpKVxyXG4gICAgICAgIGxldCByZXNjdWVzID0gdGhpcy5zdGF0ZS5yZXNjdWVzXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLmN1cnJlbnRjb29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGVzY2FwZWhhdGNoZXMuaW5kZXhPZih0aGlzLnN0YXRlLmN1cnJlbnRjb29yZHNbaV0pID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJlc2N1ZXMrK1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB3aG9zZXR1cm46ICdHJyxcclxuICAgICAgICAgICAgc2VsZWN0aW9uOiAtMSxcclxuICAgICAgICAgICAgY3VycmVudGNvb3JkczogW10sXHJcbiAgICAgICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXNcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMucGlja1ByaXNvbmVyc1RpbGVzKClcclxuICAgIH1cclxuICAgIGVuZEd1YXJkc1R1cm4oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHdob3NldHVybjogJ1AnLFxyXG4gICAgICAgICAgICBzZWxlY3Rpb246IC0xLFxyXG4gICAgICAgICAgICBjdXJyZW50Y29vcmRzOiBbXVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5waWNrR3VhcmRzVGlsZXMoKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIHByaXNvbmJyZWFrXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMSBwYnRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByaXNvbiBCcmVha1xyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBwYmhvbWVsaW5rXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycuLi8uLi8nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPvCfj6A8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMiBwYlByaXNvbmVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJpc29uZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdGlsZXM9e3RoaXMuc3RhdGUucHRpbGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hvc2V0dXJuPXt0aGlzLnN0YXRlLndob3NldHVybn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17dGhpcy5zdGF0ZS5zZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsodGkpID0+IHRoaXMuaGFuZGxlUHJpc29uZXJUaWxlQ2xpY2sodGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja0ZpbmlzaFR1cm49eygpID0+IHRoaXMuZW5kUHJpc29uZXJzVHVybigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzY3Vlcz17dGhpcy5zdGF0ZS5yZXNjdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlcz17dGhpcy5zdGF0ZS5zcXVhcmVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlZGJ5PXt0aGlzLnN0YXRlLnVzZWRieX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhyaSwgY2kpID0+IHRoaXMuaGFuZGxlQm9hcmRTcXVhcmVDbGljayhyaSwgY2kpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTIgcGJHdWFyZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEd1YXJkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3RpbGVzPXt0aGlzLnN0YXRlLmd0aWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdob3NldHVybj17dGhpcy5zdGF0ZS53aG9zZXR1cm59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb249e3RoaXMuc3RhdGUuc2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KHRpKSA9PiB0aGlzLmhhbmRsZUd1YXJkVGlsZUNsaWNrKHRpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tGaW5pc2hUdXJuPXsoKSA9PiB0aGlzLmVuZEd1YXJkc1R1cm4oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRpbGVzIHRpbGVzPXt0aGlzLnN0YXRlLnRpbGVzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTsgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRpbGVzKHByb3BzKSB7XHJcbiAgICAvLyB0aGVyZSBpcyBhIGJldHRlciB3YXkgXl5eXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcG9vbFwiPlxyXG4gICAgICAgICAgICA8aDM+VElMRSBQT09MPC9oMz5cclxuICAgICAgICAgICAge3Byb3BzLnRpbGVzLm1hcCgodCx0aSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtgdGlsZSR7dGl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RpID4gMCAmJiB0ICE9PSBwcm9wcy50aWxlc1t0aS0xXSA/IDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcG9vbERpdmlkZXJcIj48L2Rpdj4gOiA8PjwvPn1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYlRpbGVwb29sVGlsZVwiPnt0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJhY2tUaWxlKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx0ZCBjbGFzc05hbWU9e3Byb3BzLnRpbGVjbGFzc30gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgICAgIHtwcm9wcy50aWxldmFsdWV9XHJcbiAgICAgICAgPC90ZD5cclxuICAgICkgICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEZpbmlzaFR1cm5CdXR0b24ocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAgRmluaXNoIFR1cm5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIClcclxufVxyXG5cclxuY2xhc3MgUHJpc29uZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlclRpbGUodGlsZWNsYXNzLCB0aWxlaW5kZXgsIHRpbGV2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSYWNrVGlsZSBrZXk9e3RpbGVjbGFzcyArIFN0cmluZyh0aWxlaW5kZXgpfSB0aWxlY2xhc3M9e3RpbGVjbGFzc30gdGlsZXZhbHVlPXt0aWxldmFsdWV9IG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DbGljayh0aWxlaW5kZXgpfS8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJGaW5pc2hUdXJuKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGaW5pc2hUdXJuQnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DbGlja0ZpbmlzaFR1cm4oKX0vPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRnJlZWRQcmlzb25lcnMoY291bnQpIHtcclxuICAgICAgICBsZXQgZHVtYiA9IEFycmF5KGNvdW50KS5maWxsKCdub25zZW5zZScpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgZHVtYi5tYXAoKHZhbHVlLGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e3ZhbHVlICsgU3RyaW5nKGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYnJlYWtmcmVlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkknbSBmcmVlISBJJ20gZnJlZSFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5QUklTT05FUlM8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYlRpbGVyYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucHRpbGVzLm1hcCgodCx0aSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRpbGUodGhpcy5wcm9wcy53aG9zZXR1cm4gPT09ICdQJyAmJiB0aGlzLnByb3BzLnNlbGVjdGlvbiA9PT0gdGkgPyBcInBiVGlsZU9uUmFja1NlbGVjdGVkUFwiIDogXCJwYlRpbGVPblJhY2tQXCIsIHRpLCB0KVxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMud2hvc2V0dXJuID09PSAnUCcgP1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyRmluaXNoVHVybigpXHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBSZXNjdWVzIG1hZGU6IHt0aGlzLnByb3BzLnJlc2N1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRnJlZWRQcmlzb25lcnModGhpcy5wcm9wcy5yZXNjdWVzKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmNsYXNzIEd1YXJkcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXJUaWxlKHRpbGVjbGFzcywgdGlsZWluZGV4LCB0aWxldmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UmFja1RpbGUga2V5PXt0aWxlY2xhc3MgKyBTdHJpbmcodGlsZWluZGV4KX0gdGlsZWNsYXNzPXt0aWxlY2xhc3N9IHRpbGV2YWx1ZT17dGlsZXZhbHVlfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQ2xpY2sodGlsZWluZGV4KX0vPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRmluaXNoVHVybigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8RmluaXNoVHVybkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQ2xpY2tGaW5pc2hUdXJuKCl9Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+R1VBUkRTPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmd0aWxlcy5tYXAoKHQsdGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUaWxlKHRoaXMucHJvcHMud2hvc2V0dXJuID09PSAnRycgJiYgdGhpcy5wcm9wcy5zZWxlY3Rpb24gPT09IHRpID8gXCJwYlRpbGVPblJhY2tTZWxlY3RlZEdcIiA6IFwicGJUaWxlT25SYWNrR1wiLCB0aSwgdClcclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLndob3NldHVybiA9PT0gJ0cnID9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckZpbmlzaFR1cm4oKVxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9