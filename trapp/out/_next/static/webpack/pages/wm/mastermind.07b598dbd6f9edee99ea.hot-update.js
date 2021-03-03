webpackHotUpdate_N_E("pages/wm/mastermind",{

/***/ "./pages/wm/mastermind.js":
/*!********************************!*\
  !*** ./pages/wm/mastermind.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wi_showinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wi/showinfo */ "./pages/wi/showinfo.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-device-detect */ "../node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\wm\\mastermind.js",
    _s = $RefreshSig$();





function handler(req, res) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Game, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

function Game() {
  _s();

  const {
    0: setSolveCounts,
    1: setSetSolveCounts
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // how many guesses to solve each set

  const {
    0: setGuessCount,
    1: setSetGuessCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0); // total guess count for the 2-8 letter set

  const {
    0: secretWord,
    1: setSecretWord
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: secretDisplay,
    1: setSecretDisplay
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: guess,
    1: setGuess
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: guesses,
    1: setGuesses
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: solved,
    1: setSolved
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const displayGuesses = showGuessesTable();
  const promptForGuess = showGuessPrompt();
  const promptForPlayAgain = showPlayAgainPrompt();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "Mastermind",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: "container-fluid",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-11 wmtitle",
          children: ["Word Mastermind", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            class: "material-icons",
            children: "psychology"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-1 wmhomelink",
          "data-toggle": "tooltip",
          title: "Home",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: '../../',
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "\uD83C\uDFE0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-11",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "wmp",
            children: "Cycle through 2-8 letter words per set."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-lg-8",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "col-lg-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "Outertable",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  className: "wmh3 AlignLeft",
                  children: ["Guesses this word: ", guesses.length]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  className: "wmh3 AlignLeft",
                  children: ["Guesses this set: ", setGuessCount]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 37
                }, this), setSolveCounts.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "AlignLeft",
                  children: "No completed sets yet"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 41
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "AlignLeft",
                  children: ["Guesses for completed sets: ", setSolveCounts.map(num => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: [num, " "]
                  }, num.toString(), true, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 122
                  }, this))]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "col-lg-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "Outertable",
                children: [secretWord === '' ? pickRandomWord() : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  className: "wmh3",
                  children: ["Secret Word: ", solved ? secretWord : secretDisplay]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 37
                }, this), secretWord === '' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "wmh1",
                  children: "Loading ..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 41
                }, this) : solved ? promptForPlayAgain : promptForGuess, solved ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 41
                }, this) : guesses.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "wmp",
                  children: "Start guessing"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 45
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "wmp",
                  children: "Keep guessing"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 45
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_device_detect__WEBPACK_IMPORTED_MODULE_4__["BrowserView"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "row",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                class: "col-lg-12",
                children: guesses.map(g => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_wi_showinfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  word: g,
                  showInserts: "N",
                  showSwaps: "Y",
                  showAnagrams: "Y",
                  showDrops: "N"
                }, g, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 41
                }, this))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-lg-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "Outertable",
            children: guesses.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "No guesses yet"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 33
            }, this) : displayGuesses
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, this);

  function showPlayAgainPrompt() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "wmh2",
        children: ["Solved in ", guesses.length, " moves!"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "wmbutton",
        onClick: function () {
          pickRandomWord();
          setGuess('');
          setGuesses([]);
          setSolved(false);
        },
        children: secretWord.length === 8 ? "Start Another Set!" : "Start Next Word"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 16
    }, this);
  }

  function showGuessPrompt() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "form-group",
      children: [guesses.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "wmlabel",
        children: "First guess:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "wmlabel",
        children: "Next guess:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        className: "form-control",
        name: "guess",
        value: guess,
        onChange: e => {
          const guessword = e.target.value.toUpperCase().replace(/\W/g, '');

          if (guessword.length === secretWord.length) {
            const newSetGuessCount = setGuessCount + 1;
            setSetGuessCount(newSetGuessCount);
            setGuesses([guessword, ...guesses]);
            setGuess('');

            if (guessword === secretWord) {
              setSolved(true);

              if (secretWord.length === 8) {
                setSetSolveCounts([...setSolveCounts, newSetGuessCount]);
              }
            }
          } else {
            setGuess(guessword);
          }
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 16
    }, this);
  }

  function showGuessesTable() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      className: "Guesstable",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            className: "wmth",
            children: "Guess"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            className: "wmth",
            children: "Correct Letter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            className: "wmth",
            children: "Correct Position"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: guesses.map(g => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            className: "wmtd",
            children: g
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            className: "wmtd AlignCenter",
            children: calcCorrectLetterCount(g)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            className: "wmtd AlignCenter",
            children: calcCorrectPositionCount(g)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 16
    }, this);
  }

  function pickRandomWord() {
    const newlen = secretWord ? secretWord.length < 2 ? 2 : secretWord.length > 7 ? 2 : secretWord.length + 1 : 2;

    if (newlen === 2 && setGuessCount !== 0) {
      setSetGuessCount(0);
    }

    const url = 'https://words-scrabble.herokuapp.com/api/random/' + newlen.toString();
    fetch(url).then(res => res.text()).then(text => {
      setSecretWord(text);
      setSecretDisplay(text.split("").map(element => "*"));
    });
  }

  function calcCorrectLetterCount(guessletters) {
    let n = 0;
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let letter of alphabet) {
      let x = secretWord.split(letter).length - 1;
      let y = guessletters.split(letter).length - 1;
      n = n + (x < y ? x : y);
    }

    return n;
  }

  function calcCorrectPositionCount(guessletters) {
    let n = 0;

    for (var i = 0; i < secretWord.length; ++i) {
      n = n + (secretWord[i] === guessletters[i] ? 1 : 0);
    }

    return n;
  }
}

_s(Game, "NabVkXGlhLxVM+JyoD8/3W2c5qA=");

_c = Game;

var _c;

$RefreshReg$(_c, "Game");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vbWFzdGVybWluZC5qcyJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwiR2FtZSIsInNldFNvbHZlQ291bnRzIiwic2V0U2V0U29sdmVDb3VudHMiLCJ1c2VTdGF0ZSIsInNldEd1ZXNzQ291bnQiLCJzZXRTZXRHdWVzc0NvdW50Iiwic2VjcmV0V29yZCIsInNldFNlY3JldFdvcmQiLCJzZWNyZXREaXNwbGF5Iiwic2V0U2VjcmV0RGlzcGxheSIsImd1ZXNzIiwic2V0R3Vlc3MiLCJndWVzc2VzIiwic2V0R3Vlc3NlcyIsInNvbHZlZCIsInNldFNvbHZlZCIsImRpc3BsYXlHdWVzc2VzIiwic2hvd0d1ZXNzZXNUYWJsZSIsInByb21wdEZvckd1ZXNzIiwic2hvd0d1ZXNzUHJvbXB0IiwicHJvbXB0Rm9yUGxheUFnYWluIiwic2hvd1BsYXlBZ2FpblByb21wdCIsImxlbmd0aCIsIm1hcCIsIm51bSIsInRvU3RyaW5nIiwicGlja1JhbmRvbVdvcmQiLCJnIiwiZSIsImd1ZXNzd29yZCIsInRhcmdldCIsInZhbHVlIiwidG9VcHBlckNhc2UiLCJyZXBsYWNlIiwibmV3U2V0R3Vlc3NDb3VudCIsImNhbGNDb3JyZWN0TGV0dGVyQ291bnQiLCJjYWxjQ29ycmVjdFBvc2l0aW9uQ291bnQiLCJuZXdsZW4iLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJ0ZXh0Iiwic3BsaXQiLCJlbGVtZW50IiwiZ3Vlc3NsZXR0ZXJzIiwibiIsImFscGhhYmV0IiwibGV0dGVyIiwieCIsInkiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0JDLEdBQXRCLEVBQTRCO0FBQ3ZDLHNCQUNJLHFFQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBR0g7O0FBRUQsU0FBU0MsSUFBVCxHQUFnQjtB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TDtBQUNIOztBQUNELFdBQU9KLENBQVA7QUFDSDs7QUFFRCxXQUFTVCx3QkFBVCxDQUFrQ1EsWUFBbEMsRUFBZ0Q7QUFDNUMsUUFBSUMsQ0FBQyxHQUFHLENBQVI7O0FBQ0EsU0FBSSxJQUFJSyxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUM1QyxVQUFVLENBQUNnQixNQUExQixFQUFrQyxFQUFFNEIsQ0FBcEMsRUFBdUM7QUFDbkNMLE9BQUMsR0FBR0EsQ0FBQyxJQUFJdkMsVUFBVSxDQUFDNEMsQ0FBRCxDQUFWLEtBQWtCTixZQUFZLENBQUNNLENBQUQsQ0FBOUIsR0FBb0MsQ0FBcEMsR0FBd0MsQ0FBNUMsQ0FBTDtBQUNIOztBQUNELFdBQU9MLENBQVA7QUFDSDtBQUNKOztHQS9MUTdDLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd20vbWFzdGVybWluZC4wN2I1OThkYmQ2ZjllZGVlOTllYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBTaG93aW5mbyBmcm9tICcuLi93aS9zaG93aW5mbydcclxuaW1wb3J0IHtCcm93c2VyVmlld30gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpICB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHYW1lIC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBHYW1lKCkge1xyXG4gICAgY29uc3QgW3NldFNvbHZlQ291bnRzLCBzZXRTZXRTb2x2ZUNvdW50c10gPSB1c2VTdGF0ZShbXSkgLy8gaG93IG1hbnkgZ3Vlc3NlcyB0byBzb2x2ZSBlYWNoIHNldFxyXG4gICAgY29uc3QgW3NldEd1ZXNzQ291bnQsIHNldFNldEd1ZXNzQ291bnRdID0gdXNlU3RhdGUoMCkgLy8gdG90YWwgZ3Vlc3MgY291bnQgZm9yIHRoZSAyLTggbGV0dGVyIHNldFxyXG4gICAgY29uc3QgW3NlY3JldFdvcmQsIHNldFNlY3JldFdvcmRdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc2VjcmV0RGlzcGxheSwgc2V0U2VjcmV0RGlzcGxheV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtndWVzcywgc2V0R3Vlc3NdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbZ3Vlc3Nlcywgc2V0R3Vlc3Nlc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtzb2x2ZWQsIHNldFNvbHZlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IGRpc3BsYXlHdWVzc2VzID0gc2hvd0d1ZXNzZXNUYWJsZSgpO1xyXG4gICAgY29uc3QgcHJvbXB0Rm9yR3Vlc3MgPSBzaG93R3Vlc3NQcm9tcHQoKTtcclxuICAgIGNvbnN0IHByb21wdEZvclBsYXlBZ2FpbiA9IHNob3dQbGF5QWdhaW5Qcm9tcHQoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNYXN0ZXJtaW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTExIHdtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV29yZCBNYXN0ZXJtaW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5wc3ljaG9sb2d5PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSB3bWhvbWVsaW5rXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycuLi8uLi8nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPvCfj6A8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwid21wXCI+Q3ljbGUgdGhyb3VnaCAyLTggbGV0dGVyIHdvcmRzIHBlciBzZXQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiT3V0ZXJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwid21oMyBBbGlnbkxlZnRcIj5HdWVzc2VzIHRoaXMgd29yZDoge2d1ZXNzZXMubGVuZ3RofTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ3bWgzIEFsaWduTGVmdFwiPkd1ZXNzZXMgdGhpcyBzZXQ6IHtzZXRHdWVzc0NvdW50fTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXRTb2x2ZUNvdW50cy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiQWxpZ25MZWZ0XCI+Tm8gY29tcGxldGVkIHNldHMgeWV0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJBbGlnbkxlZnRcIj5HdWVzc2VzIGZvciBjb21wbGV0ZWQgc2V0czoge3NldFNvbHZlQ291bnRzLm1hcChudW0gPT4gKDxzcGFuIGtleT17bnVtLnRvU3RyaW5nKCl9PntudW19IDwvc3Bhbj4pKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJPdXRlcnRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWNyZXRXb3JkID09PSAnJyA/IHBpY2tSYW5kb21Xb3JkKCkgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIndtaDNcIj5TZWNyZXQgV29yZDoge3NvbHZlZCA/IHNlY3JldFdvcmQgOiBzZWNyZXREaXNwbGF5fTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWNyZXRXb3JkID09PSAnJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid21oMVwiPkxvYWRpbmcgLi4uPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29sdmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHRGb3JQbGF5QWdhaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHRGb3JHdWVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzb2x2ZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWVzc2VzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwid21wXCI+U3RhcnQgZ3Vlc3Npbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndtcFwiPktlZXAgZ3Vlc3Npbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJyb3dzZXJWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2d1ZXNzZXMubWFwKGcgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNob3dpbmZvIGtleT17Z30gd29yZD17Z30gc2hvd0luc2VydHM9XCJOXCIgc2hvd1N3YXBzPVwiWVwiIHNob3dBbmFncmFtcz1cIllcIiBzaG93RHJvcHM9XCJOXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Jyb3dzZXJWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk91dGVydGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtndWVzc2VzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Tm8gZ3Vlc3NlcyB5ZXQ8L3A+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5R3Vlc3Nlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd1BsYXlBZ2FpblByb21wdCgpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIndtaDJcIj5Tb2x2ZWQgaW4ge2d1ZXNzZXMubGVuZ3RofSBtb3ZlcyE8L2gyPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIndtYnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcGlja1JhbmRvbVdvcmQoKTtcclxuICAgICAgICAgICAgICAgIHNldEd1ZXNzKCcnKTtcclxuICAgICAgICAgICAgICAgIHNldEd1ZXNzZXMoW10pO1xyXG4gICAgICAgICAgICAgICAgc2V0U29sdmVkKGZhbHNlKTtcclxuICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzZWNyZXRXb3JkLmxlbmd0aCA9PT0gOCA/IFwiU3RhcnQgQW5vdGhlciBTZXQhXCIgOiBcIlN0YXJ0IE5leHQgV29yZFwifVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dHdWVzc1Byb21wdCgpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIHtndWVzc2VzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwid21sYWJlbFwiPkZpcnN0IGd1ZXNzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwid21sYWJlbFwiPk5leHQgZ3Vlc3M6PC9sYWJlbD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJndWVzc1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Z3Vlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBndWVzc3dvcmQgPSBlLnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoIC9cXFcvZyAsICcnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ3Vlc3N3b3JkLmxlbmd0aCA9PT0gc2VjcmV0V29yZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U2V0R3Vlc3NDb3VudCA9IHNldEd1ZXNzQ291bnQgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTZXRHdWVzc0NvdW50KG5ld1NldEd1ZXNzQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRHdWVzc2VzKFtndWVzc3dvcmQsIC4uLmd1ZXNzZXNdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0R3Vlc3MoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3Vlc3N3b3JkID09PSBzZWNyZXRXb3JkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTb2x2ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VjcmV0V29yZC5sZW5ndGggPT09IDgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZXRTb2x2ZUNvdW50cyhbLi4uc2V0U29sdmVDb3VudHMsIG5ld1NldEd1ZXNzQ291bnRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEd1ZXNzKGd1ZXNzd29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0d1ZXNzZXNUYWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gPHRhYmxlIGNsYXNzTmFtZT1cIkd1ZXNzdGFibGVcIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ3bXRoXCI+R3Vlc3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ3bXRoXCI+Q29ycmVjdCBMZXR0ZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ3bXRoXCI+Q29ycmVjdCBQb3NpdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7Z3Vlc3Nlcy5tYXAoKGcpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3bXRkXCI+e2d9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIndtdGQgQWxpZ25DZW50ZXJcIj57Y2FsY0NvcnJlY3RMZXR0ZXJDb3VudChnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwid210ZCBBbGlnbkNlbnRlclwiPntjYWxjQ29ycmVjdFBvc2l0aW9uQ291bnQoZyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwaWNrUmFuZG9tV29yZCgpIHtcclxuICAgICAgICBjb25zdCBuZXdsZW4gPSBzZWNyZXRXb3JkID8gc2VjcmV0V29yZC5sZW5ndGggPCAyID8gMiA6IHNlY3JldFdvcmQubGVuZ3RoID4gNyA/IDIgOiBzZWNyZXRXb3JkLmxlbmd0aCArIDEgOiAyO1xyXG4gICAgICAgIGlmIChuZXdsZW4gPT09IDIgJiYgc2V0R3Vlc3NDb3VudCAhPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNldFNldEd1ZXNzQ291bnQoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL3dvcmRzLXNjcmFiYmxlLmhlcm9rdWFwcC5jb20vYXBpL3JhbmRvbS8nICsgbmV3bGVuLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xyXG4gICAgICAgICAgICBzZXRTZWNyZXRXb3JkKHRleHQpO1xyXG4gICAgICAgICAgICBzZXRTZWNyZXREaXNwbGF5KHRleHQuc3BsaXQoXCJcIikubWFwKGVsZW1lbnQ9PihcIipcIikpKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGNDb3JyZWN0TGV0dGVyQ291bnQoZ3Vlc3NsZXR0ZXJzKSB7XHJcbiAgICAgICAgbGV0IG4gPSAwXHJcbiAgICAgICAgY29uc3QgYWxwaGFiZXQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonXHJcbiAgICAgICAgZm9yKGxldCBsZXR0ZXIgb2YgYWxwaGFiZXQpIHtcclxuICAgICAgICAgICAgbGV0IHggPSBzZWNyZXRXb3JkLnNwbGl0KGxldHRlcikubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICBsZXQgeSA9IGd1ZXNzbGV0dGVycy5zcGxpdChsZXR0ZXIpLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgbiA9IG4gKyAoeCA8IHkgPyB4IDogeSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjQ29ycmVjdFBvc2l0aW9uQ291bnQoZ3Vlc3NsZXR0ZXJzKSB7XHJcbiAgICAgICAgbGV0IG4gPSAwXHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8c2VjcmV0V29yZC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBuID0gbiArIChzZWNyZXRXb3JkW2ldID09PSBndWVzc2xldHRlcnNbaV0gPyAxIDogMClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=