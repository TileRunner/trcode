webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-device-detect */ "../node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\index.js",
    _s = $RefreshSig$();

 // import styles from '../styles/Home.module.css'




function Home() {
  _s();

  const {
    0: descWm,
    1: setDescWm
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false); // describe word mastermind

  const {
    0: descWi,
    1: setDescWi
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false); // describe word info

  const {
    0: descPb,
    1: setDescPb
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false); // describe prison break

  const toggleDescWm = () => {
    setDescWm(!descWm);
  };

  const toggleDescWi = () => {
    setDescWi(!descWi);
  };

  const toggleDescPb = () => {
    setDescPb(!descPb);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Tile Runner App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "My coded stuff"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: `/wm/mastermind`,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: ["Word Mastermind", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              class: "material-icons",
              children: "psychology"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        id: "toggleDescribeWm",
        className: descWm ? "mybutton" : "mymaterialicon",
        onClick: () => toggleDescWm(),
        children: descWm ? "Hide info" : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "material-icons",
          children: "help_outline"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 37
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, this), descWm ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Word Mastermind Information"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Word Mastermind is a single player code cracking game."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "The computer picks a random word."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "You enter guesses until you guess correctly."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "The computer tells you how many letters are correct and how many are in the correct position."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_device_detect__WEBPACK_IMPORTED_MODULE_3__["BrowserView"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: "The computer shows you word info for guessed words."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "The computer will start with length 2, and add 1 each round up to length 8. Then it starts a new set back at 2."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "Due to licensing restrictions, this uses a 'common English lexicon' developed by some word game enthusiasts."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: `/wi/wordinfo`,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: ["Word Info", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              class: "material-icons",
              children: "biotech"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        id: "toggleDescribeWi",
        className: descWi ? "mybutton" : "mymaterialicon",
        onClick: () => toggleDescWi(),
        children: descWi ? "Hide info" : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "material-icons",
          children: "help_outline"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 37
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }, this), descWi ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Word Info Information"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Enter search criteria and get information on the matching words."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "Anagrams - words that use the exact same letters."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "Inserts - words that can be made by inserting a single letter."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "Drops - words that can be made by dropping a single letter."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "Swaps - words that can be made by swapping a single letter."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "Due to licensing restrictions, this uses a 'common English lexicon' developed by some word game enthusiasts."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 13
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_device_detect__WEBPACK_IMPORTED_MODULE_3__["BrowserView"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: `/pb/prisonbreak2`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: ["Prison Break (under construction)", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              class: "material-icons",
              children: "fingerprint lock_clock carpenter lock_open run_circle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 49
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          id: "toggleDescribePb",
          className: descPb ? "mybutton" : "mymaterialicon",
          onClick: () => toggleDescPb(),
          children: descPb ? "Hide info" : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "material-icons",
            children: "help_outline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 37
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, this), descPb ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              children: "Prison Break Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Prison Break is a two player crossword style game."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: "You play two games, one as the Prisoners and one as the Guards. Whoever frees the most prisoners wins."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: "When playing as the Prisoners, go to the lobby and enter a game id and start a new game. Tell your opponent the game id."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: "When playing as the Guards, go to the lobby and enter the game id that your opponent gave you and join the game."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: "Prisoners always play first."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: "The first word played must touch the centre square."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: "To free a prisoner, the Prisoners must play a tile on one of the special \uD83D\uDCAB squares."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: "When a blank is played it does not have to remain as the same letter throughout the game."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: "A player may continue to make words when the opponent rack is empty (there is no point for Guards to do so)."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: "The game ends when both players agree it ends."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: "Due to licensing restrictions, this game does not validate words against any lexicon."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

_s(Home, "zULIHV+4wxLeaVTiJn81tmPeVL4=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRlc2NXbSIsInNldERlc2NXbSIsInVzZVN0YXRlIiwiZGVzY1dpIiwic2V0RGVzY1dpIiwiZGVzY1BiIiwic2V0RGVzY1BiIiwidG9nZ2xlRGVzY1dtIiwidG9nZ2xlRGVzY1dpIiwidG9nZ2xlRGVzY1BiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUM3QixRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLHNEQUFRLENBQUMsS0FBRCxDQUFwQyxDQUQ2QixDQUNnQjs7QUFDN0MsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCRixzREFBUSxDQUFDLEtBQUQsQ0FBcEMsQ0FGNkIsQ0FFZ0I7O0FBQzdDLFFBQU07QUFBQSxPQUFDRyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkosc0RBQVEsQ0FBQyxLQUFELENBQXBDLENBSDZCLENBR2dCOztBQUU3QyxRQUFNSyxZQUFZLEdBQUcsTUFBTTtBQUN6Qk4sYUFBUyxDQUFDLENBQUNELE1BQUYsQ0FBVDtBQUNELEdBRkQ7O0FBSUEsUUFBTVEsWUFBWSxHQUFHLE1BQU07QUFDekJKLGFBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQVQ7QUFDRCxHQUZEOztBQUlBLFFBQU1NLFlBQVksR0FBRyxNQUFNO0FBQ3pCSCxhQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFUO0FBQ0QsR0FGRDs7QUFHQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURLLGdCQXdCTCx1SkFqQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBIRDs7R0ExSXVCTixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNlNTllNjczODY0NjMwZGIyMWQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge0Jyb3dzZXJWaWV3fSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtkZXNjV20sIHNldERlc2NXbV0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIGRlc2NyaWJlIHdvcmQgbWFzdGVybWluZFxyXG4gIGNvbnN0IFtkZXNjV2ksIHNldERlc2NXaV0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIGRlc2NyaWJlIHdvcmQgaW5mb1xyXG4gIGNvbnN0IFtkZXNjUGIsIHNldERlc2NQYl0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIGRlc2NyaWJlIHByaXNvbiBicmVha1xyXG5cclxuICBjb25zdCB0b2dnbGVEZXNjV20gPSAoKSA9PiB7XHJcbiAgICBzZXREZXNjV20oIWRlc2NXbSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2dnbGVEZXNjV2kgPSAoKSA9PiB7XHJcbiAgICBzZXREZXNjV2koIWRlc2NXaSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2dnbGVEZXNjUGIgPSAoKSA9PiB7XHJcbiAgICBzZXREZXNjUGIoIWRlc2NQYik7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+VGlsZSBSdW5uZXIgQXBwPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8aDE+TXkgY29kZWQgc3R1ZmY8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8TGluayBocmVmPXtgL3dtL21hc3Rlcm1pbmRgfT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8aDI+V29yZCBNYXN0ZXJtaW5kXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnBzeWNob2xvZ3k8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cInRvZ2dsZURlc2NyaWJlV21cIiBjbGFzc05hbWU9e2Rlc2NXbSA/IFwibXlidXR0b25cIiA6IFwibXltYXRlcmlhbGljb25cIn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlRGVzY1dtKCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtkZXNjV20gPyBcIkhpZGUgaW5mb1wiIDogPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5oZWxwX291dGxpbmU8L2k+fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICB7ZGVzY1dtID9cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPldvcmQgTWFzdGVybWluZCBJbmZvcm1hdGlvbjwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxwPldvcmQgTWFzdGVybWluZCBpcyBhIHNpbmdsZSBwbGF5ZXIgY29kZSBjcmFja2luZyBnYW1lLjwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+VGhlIGNvbXB1dGVyIHBpY2tzIGEgcmFuZG9tIHdvcmQuPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPllvdSBlbnRlciBndWVzc2VzIHVudGlsIHlvdSBndWVzcyBjb3JyZWN0bHkuPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlRoZSBjb21wdXRlciB0ZWxscyB5b3UgaG93IG1hbnkgbGV0dGVycyBhcmUgY29ycmVjdCBhbmQgaG93IG1hbnkgYXJlIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxCcm93c2VyVmlldz5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+VGhlIGNvbXB1dGVyIHNob3dzIHlvdSB3b3JkIGluZm8gZm9yIGd1ZXNzZWQgd29yZHMuPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC9Ccm93c2VyVmlldz5cclxuICAgICAgICAgICAgICAgICAgPGxpPlRoZSBjb21wdXRlciB3aWxsIHN0YXJ0IHdpdGggbGVuZ3RoIDIsIGFuZCBhZGQgMSBlYWNoIHJvdW5kIHVwIHRvIGxlbmd0aCA4LiBUaGVuIGl0IHN0YXJ0cyBhIG5ldyBzZXQgYmFjayBhdCAyLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5EdWUgdG8gbGljZW5zaW5nIHJlc3RyaWN0aW9ucywgdGhpcyB1c2VzIGEgJ2NvbW1vbiBFbmdsaXNoIGxleGljb24nIGRldmVsb3BlZCBieSBzb21lIHdvcmQgZ2FtZSBlbnRodXNpYXN0cy48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2Avd2kvd29yZGluZm9gfT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8aDI+V29yZCBJbmZvXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmJpb3RlY2g8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cInRvZ2dsZURlc2NyaWJlV2lcIiBjbGFzc05hbWU9e2Rlc2NXaSA/IFwibXlidXR0b25cIiA6IFwibXltYXRlcmlhbGljb25cIn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlRGVzY1dpKCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtkZXNjV2kgPyBcIkhpZGUgaW5mb1wiIDogPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5oZWxwX291dGxpbmU8L2k+fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICB7ZGVzY1dpID9cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPldvcmQgSW5mbyBJbmZvcm1hdGlvbjwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxwPkVudGVyIHNlYXJjaCBjcml0ZXJpYSBhbmQgZ2V0IGluZm9ybWF0aW9uIG9uIHRoZSBtYXRjaGluZyB3b3Jkcy48L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGxpPkFuYWdyYW1zIC0gd29yZHMgdGhhdCB1c2UgdGhlIGV4YWN0IHNhbWUgbGV0dGVycy48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+SW5zZXJ0cyAtIHdvcmRzIHRoYXQgY2FuIGJlIG1hZGUgYnkgaW5zZXJ0aW5nIGEgc2luZ2xlIGxldHRlci48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+RHJvcHMgLSB3b3JkcyB0aGF0IGNhbiBiZSBtYWRlIGJ5IGRyb3BwaW5nIGEgc2luZ2xlIGxldHRlci48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+U3dhcHMgLSB3b3JkcyB0aGF0IGNhbiBiZSBtYWRlIGJ5IHN3YXBwaW5nIGEgc2luZ2xlIGxldHRlci48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+RHVlIHRvIGxpY2Vuc2luZyByZXN0cmljdGlvbnMsIHRoaXMgdXNlcyBhICdjb21tb24gRW5nbGlzaCBsZXhpY29uJyBkZXZlbG9wZWQgYnkgc29tZSB3b3JkIGdhbWUgZW50aHVzaWFzdHMuPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEJyb3dzZXJWaWV3PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtgL3BiL3ByaXNvbmJyZWFrMmB9PlxyXG4gICAgICAgICAgICA8YT5Qcmlzb24gQnJlYWsgKHVuZGVyIGNvbnN0cnVjdGlvbik8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmluZ2VycHJpbnQgbG9ja19jbG9jayBjYXJwZW50ZXIgbG9ja19vcGVuIHJ1bl9jaXJjbGU8L3NwYW4+PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cInRvZ2dsZURlc2NyaWJlUGJcIiBjbGFzc05hbWU9e2Rlc2NQYiA/IFwibXlidXR0b25cIiA6IFwibXltYXRlcmlhbGljb25cIn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlRGVzY1BiKCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtkZXNjUGIgPyBcIkhpZGUgaW5mb1wiIDogPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5oZWxwX291dGxpbmU8L2k+fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICB7ZGVzY1BiID9cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPlByaXNvbiBCcmVhayBJbmZvcm1hdGlvbjwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxwPlByaXNvbiBCcmVhayBpcyBhIHR3byBwbGF5ZXIgY3Jvc3N3b3JkIHN0eWxlIGdhbWUuPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5Zb3UgcGxheSB0d28gZ2FtZXMsIG9uZSBhcyB0aGUgUHJpc29uZXJzIGFuZCBvbmUgYXMgdGhlIEd1YXJkcy4gV2hvZXZlciBmcmVlcyB0aGUgbW9zdCBwcmlzb25lcnMgd2lucy48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+V2hlbiBwbGF5aW5nIGFzIHRoZSBQcmlzb25lcnMsIGdvIHRvIHRoZSBsb2JieSBhbmQgZW50ZXIgYSBnYW1lIGlkIGFuZCBzdGFydCBhIG5ldyBnYW1lLiBUZWxsIHlvdXIgb3Bwb25lbnQgdGhlIGdhbWUgaWQuPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPldoZW4gcGxheWluZyBhcyB0aGUgR3VhcmRzLCBnbyB0byB0aGUgbG9iYnkgYW5kIGVudGVyIHRoZSBnYW1lIGlkIHRoYXQgeW91ciBvcHBvbmVudCBnYXZlIHlvdSBhbmQgam9pbiB0aGUgZ2FtZS48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+UHJpc29uZXJzIGFsd2F5cyBwbGF5IGZpcnN0LjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5UaGUgZmlyc3Qgd29yZCBwbGF5ZWQgbXVzdCB0b3VjaCB0aGUgY2VudHJlIHNxdWFyZS48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+VG8gZnJlZSBhIHByaXNvbmVyLCB0aGUgUHJpc29uZXJzIG11c3QgcGxheSBhIHRpbGUgb24gb25lIG9mIHRoZSBzcGVjaWFsIPCfkqsgc3F1YXJlcy48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+V2hlbiBhIGJsYW5rIGlzIHBsYXllZCBpdCBkb2VzIG5vdCBoYXZlIHRvIHJlbWFpbiBhcyB0aGUgc2FtZSBsZXR0ZXIgdGhyb3VnaG91dCB0aGUgZ2FtZS48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+QSBwbGF5ZXIgbWF5IGNvbnRpbnVlIHRvIG1ha2Ugd29yZHMgd2hlbiB0aGUgb3Bwb25lbnQgcmFjayBpcyBlbXB0eSAodGhlcmUgaXMgbm8gcG9pbnQgZm9yIEd1YXJkcyB0byBkbyBzbykuPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlRoZSBnYW1lIGVuZHMgd2hlbiBib3RoIHBsYXllcnMgYWdyZWUgaXQgZW5kcy48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+RHVlIHRvIGxpY2Vuc2luZyByZXN0cmljdGlvbnMsIHRoaXMgZ2FtZSBkb2VzIG5vdCB2YWxpZGF0ZSB3b3JkcyBhZ2FpbnN0IGFueSBsZXhpY29uLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDpcclxuICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Ccm93c2VyVmlldz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9