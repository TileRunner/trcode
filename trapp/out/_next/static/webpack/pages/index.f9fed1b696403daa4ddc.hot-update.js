self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/wm/mastermind.js":
/*!********************************!*\
  !*** ./pages/wm/mastermind.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wi_showinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wi/showinfo */ "./pages/wi/showinfo.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\wm\\mastermind.js",
    _s = $RefreshSig$();






const WordMastermind = ({
  setWhereto
}) => {
  _s();

  const {
    0: setSolveCounts,
    1: setSetSolveCounts
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // how many guesses to solve each set

  const {
    0: setGuessCount,
    1: setSetGuessCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // total guess count for the 2-8 letter set

  const {
    0: secretWord,
    1: setSecretWord
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: secretDisplay,
    1: setSecretDisplay
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: guess,
    1: setGuess
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: guesses,
    1: setGuesses
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: solved,
    1: setSolved
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const displayGuesses = showGuessesTable();
  const promptForGuess = showGuessPrompt();
  const promptForPlayAgain = showPlayAgainPrompt();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "Mastermind",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container-fluid",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-11 trTitle",
          children: ["Word Mastermind", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "material-icons",
            children: "psychology"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-1 wmhomelink",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "w3-button",
            onClick: () => {
              setWhereto('menu');
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              "data-toggle": "tooltip",
              title: "Home",
              children: "home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-11",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "wmp",
            children: "Cycle through 2-8 letter words per set."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-lg-8",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-lg-6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "Outertable",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                  className: "wmh3 AlignLeft",
                  children: ["Guesses this word: ", guesses.length]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                  className: "wmh3 AlignLeft",
                  children: ["Guesses this set: ", setGuessCount]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 37
                }, undefined), setSolveCounts.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "AlignLeft",
                  children: "No completed sets yet"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 41
                }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "AlignLeft",
                  children: ["Guesses for completed sets: ", setSolveCounts.map(num => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: [num, " "]
                  }, num.toString(), true, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 122
                  }, undefined))]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 41
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-lg-6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "Outertable",
                children: [secretWord === '' ? pickRandomWord() : '', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                  className: "wmh3",
                  children: ["Secret Word: ", solved ? secretWord : secretDisplay]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 37
                }, undefined), secretWord === '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                  className: "wmh1",
                  children: "Loading ..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 41
                }, undefined) : solved ? promptForPlayAgain : promptForGuess, solved ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 41
                }, undefined) : guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "wmp",
                  children: "Start guessing"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 45
                }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "wmp",
                  children: "Keep guessing"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 45
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_4__.BrowserView, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "row",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "col-lg-12",
                children: guesses.map((g, gi) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wi_showinfo__WEBPACK_IMPORTED_MODULE_3__.default, {
                  word: g,
                  showInserts: "N",
                  showSwaps: "Y",
                  showAnagrams: "Y",
                  showDrops: "N"
                }, `${guesses.length - gi}.${g}`, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 41
                }, undefined))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-lg-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "Outertable",
            children: guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: "No guesses yet"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 33
            }, undefined) : displayGuesses
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, undefined);

  function showPlayAgainPrompt() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "wmh2",
        children: ["Solved in ", guesses.length, " moves!"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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
        lineNumber: 100,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 16
    }, this);
  }

  function showGuessPrompt() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "form-group",
      children: [guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        className: "wmlabel",
        children: "First guess:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        className: "wmlabel",
        children: "Next guess:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
        lineNumber: 120,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 16
    }, this);
  }

  function showGuessesTable() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      className: "Guesstable",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            className: "wmth",
            children: "Guess"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            className: "wmth",
            children: "Correct Letter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            className: "wmth",
            children: "Correct Position"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: guesses.map(g => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "wmtd",
            children: g
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "wmtd AlignCenter",
            children: calcCorrectLetterCount(g)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "wmtd AlignCenter",
            children: calcCorrectPositionCount(g)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 21
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 16
    }, this);
  }

  function pickRandomWord() {
    const newlen = secretWord ? secretWord.length < 2 ? 2 : secretWord.length > 7 ? 2 : secretWord.length + 1 : 2;

    if (newlen === 2 && setGuessCount !== 0) {
      setSetGuessCount(0);
    }

    const baseurl =  true ? 'http://localhost:5000/ENABLE2K?random=' : 0;
    const url = baseurl + newlen.toString();
    fetch(url).then(res => res.text()).then(text => {
      let randomword = JSON.parse(text).toUpperCase(); // It is just a word in double quotes but it is json nonetheless

      setSecretWord(randomword);
      setSecretDisplay(randomword.split("").map(() => "*"));
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
};

_s(WordMastermind, "NabVkXGlhLxVM+JyoD8/3W2c5qA=");

_c = WordMastermind;
/* harmony default export */ __webpack_exports__["default"] = (WordMastermind);

var _c;

$RefreshReg$(_c, "WordMastermind");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vbWFzdGVybWluZC5qcyJdLCJuYW1lcyI6WyJXb3JkTWFzdGVybWluZCIsInNldFdoZXJldG8iLCJzZXRTb2x2ZUNvdW50cyIsInNldFNldFNvbHZlQ291bnRzIiwidXNlU3RhdGUiLCJzZXRHdWVzc0NvdW50Iiwic2V0U2V0R3Vlc3NDb3VudCIsInNlY3JldFdvcmQiLCJzZXRTZWNyZXRXb3JkIiwic2VjcmV0RGlzcGxheSIsInNldFNlY3JldERpc3BsYXkiLCJndWVzcyIsInNldEd1ZXNzIiwiZ3Vlc3NlcyIsInNldEd1ZXNzZXMiLCJzb2x2ZWQiLCJzZXRTb2x2ZWQiLCJkaXNwbGF5R3Vlc3NlcyIsInNob3dHdWVzc2VzVGFibGUiLCJwcm9tcHRGb3JHdWVzcyIsInNob3dHdWVzc1Byb21wdCIsInByb21wdEZvclBsYXlBZ2FpbiIsInNob3dQbGF5QWdhaW5Qcm9tcHQiLCJsZW5ndGgiLCJtYXAiLCJudW0iLCJ0b1N0cmluZyIsInBpY2tSYW5kb21Xb3JkIiwiZyIsImdpIiwiZSIsImd1ZXNzd29yZCIsInRhcmdldCIsInZhbHVlIiwidG9VcHBlckNhc2UiLCJyZXBsYWNlIiwibmV3U2V0R3Vlc3NDb3VudCIsImNhbGNDb3JyZWN0TGV0dGVyQ291bnQiLCJjYWxjQ29ycmVjdFBvc2l0aW9uQ291bnQiLCJuZXdsZW4iLCJiYXNldXJsIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwidGV4dCIsInJhbmRvbXdvcmQiLCJKU09OIiwicGFyc2UiLCJzcGxpdCIsImd1ZXNzbGV0dGVycyIsIm4iLCJhbHBoYWJldCIsImxldHRlciIsIngiLCJ5IiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsY0FBYyxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWtCO0FBQUE7O0FBQ3JDLFFBQU07QUFBQSxPQUFDQyxjQUFEO0FBQUEs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QWtCRCxRQUFsQixFQUE0QjtBQUN4QixVQUFJRSxDQUFDLEdBQUcvQyxVQUFVLENBQUMwQyxLQUFYLENBQWlCSSxNQUFqQixFQUF5QjlCLE1BQXpCLEdBQWtDLENBQTFDO0FBQ0EsVUFBSWdDLENBQUMsR0FBR0wsWUFBWSxDQUFDRCxLQUFiLENBQW1CSSxNQUFuQixFQUEyQjlCLE1BQTNCLEdBQW9DLENBQTVDO0FBQ0E0QixPQUFDLEdBQUdBLENBQUMsSUFBSUcsQ0FBQyxHQUFHQyxDQUFKLEdBQVFELENBQVIsR0FBWUMsQ0FBaEIsQ0FBTDtBQUNIOztBQUNELFdBQU9KLENBQVA7QUFDSDs7QUFFRCxXQUFTYix3QkFBVCxDQUFrQ1ksWUFBbEMsRUFBZ0Q7QUFDNUMsUUFBSUMsQ0FBQyxHQUFHLENBQVI7O0FBQ0EsU0FBSSxJQUFJSyxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUNqRCxVQUFVLENBQUNnQixNQUExQixFQUFrQyxFQUFFaUMsQ0FBcEMsRUFBdUM7QUFDbkNMLE9BQUMsR0FBR0EsQ0FBQyxJQUFJNUMsVUFBVSxDQUFDaUQsQ0FBRCxDQUFWLEtBQWtCTixZQUFZLENBQUNNLENBQUQsQ0FBOUIsR0FBb0MsQ0FBcEMsR0FBd0MsQ0FBNUMsQ0FBTDtBQUNIOztBQUNELFdBQU9MLENBQVA7QUFDSDtBQUNKLENBak1EOztHQUFNbkQsYzs7S0FBQUEsYztBQW1NTiwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mOWZlZDFiNjk2NDAzZGFhNGRkYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBTaG93aW5mbyBmcm9tICcuLi93aS9zaG93aW5mbydcclxuaW1wb3J0IHtCcm93c2VyVmlld30gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCdcclxuXHJcbmNvbnN0IFdvcmRNYXN0ZXJtaW5kID0gKHtzZXRXaGVyZXRvfSkgPT4ge1xyXG4gICAgY29uc3QgW3NldFNvbHZlQ291bnRzLCBzZXRTZXRTb2x2ZUNvdW50c10gPSB1c2VTdGF0ZShbXSkgLy8gaG93IG1hbnkgZ3Vlc3NlcyB0byBzb2x2ZSBlYWNoIHNldFxyXG4gICAgY29uc3QgW3NldEd1ZXNzQ291bnQsIHNldFNldEd1ZXNzQ291bnRdID0gdXNlU3RhdGUoMCkgLy8gdG90YWwgZ3Vlc3MgY291bnQgZm9yIHRoZSAyLTggbGV0dGVyIHNldFxyXG4gICAgY29uc3QgW3NlY3JldFdvcmQsIHNldFNlY3JldFdvcmRdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc2VjcmV0RGlzcGxheSwgc2V0U2VjcmV0RGlzcGxheV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtndWVzcywgc2V0R3Vlc3NdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbZ3Vlc3Nlcywgc2V0R3Vlc3Nlc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtzb2x2ZWQsIHNldFNvbHZlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IGRpc3BsYXlHdWVzc2VzID0gc2hvd0d1ZXNzZXNUYWJsZSgpO1xyXG4gICAgY29uc3QgcHJvbXB0Rm9yR3Vlc3MgPSBzaG93R3Vlc3NQcm9tcHQoKTtcclxuICAgIGNvbnN0IHByb21wdEZvclBsYXlBZ2FpbiA9IHNob3dQbGF5QWdhaW5Qcm9tcHQoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNYXN0ZXJtaW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTExIHRyVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV29yZCBNYXN0ZXJtaW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cHN5Y2hvbG9neTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xIHdtaG9tZWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3bXBcIj5DeWNsZSB0aHJvdWdoIDItOCBsZXR0ZXIgd29yZHMgcGVyIHNldC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiT3V0ZXJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwid21oMyBBbGlnbkxlZnRcIj5HdWVzc2VzIHRoaXMgd29yZDoge2d1ZXNzZXMubGVuZ3RofTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ3bWgzIEFsaWduTGVmdFwiPkd1ZXNzZXMgdGhpcyBzZXQ6IHtzZXRHdWVzc0NvdW50fTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXRTb2x2ZUNvdW50cy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiQWxpZ25MZWZ0XCI+Tm8gY29tcGxldGVkIHNldHMgeWV0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJBbGlnbkxlZnRcIj5HdWVzc2VzIGZvciBjb21wbGV0ZWQgc2V0czoge3NldFNvbHZlQ291bnRzLm1hcChudW0gPT4gKDxzcGFuIGtleT17bnVtLnRvU3RyaW5nKCl9PntudW19IDwvc3Bhbj4pKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiT3V0ZXJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VjcmV0V29yZCA9PT0gJycgPyBwaWNrUmFuZG9tV29yZCgpIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ3bWgzXCI+U2VjcmV0IFdvcmQ6IHtzb2x2ZWQgPyBzZWNyZXRXb3JkIDogc2VjcmV0RGlzcGxheX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VjcmV0V29yZCA9PT0gJycgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndtaDFcIj5Mb2FkaW5nIC4uLjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbHZlZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbXB0Rm9yUGxheUFnYWluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbXB0Rm9yR3Vlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c29sdmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3Vlc3Nlcy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndtcFwiPlN0YXJ0IGd1ZXNzaW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3bXBcIj5LZWVwIGd1ZXNzaW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCcm93c2VyVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2d1ZXNzZXMubWFwKChnLGdpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hvd2luZm8ga2V5PXtgJHtndWVzc2VzLmxlbmd0aCAtIGdpfS4ke2d9YH0gd29yZD17Z30gc2hvd0luc2VydHM9XCJOXCIgc2hvd1N3YXBzPVwiWVwiIHNob3dBbmFncmFtcz1cIllcIiBzaG93RHJvcHM9XCJOXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Jyb3dzZXJWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJPdXRlcnRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z3Vlc3Nlcy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5vIGd1ZXNzZXMgeWV0PC9wPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUd1ZXNzZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dQbGF5QWdhaW5Qcm9tcHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ3bWgyXCI+U29sdmVkIGluIHtndWVzc2VzLmxlbmd0aH0gbW92ZXMhPC9oMj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3bWJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHBpY2tSYW5kb21Xb3JkKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRHdWVzcygnJyk7XHJcbiAgICAgICAgICAgICAgICBzZXRHdWVzc2VzKFtdKTtcclxuICAgICAgICAgICAgICAgIHNldFNvbHZlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c2VjcmV0V29yZC5sZW5ndGggPT09IDggPyBcIlN0YXJ0IEFub3RoZXIgU2V0IVwiIDogXCJTdGFydCBOZXh0IFdvcmRcIn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93R3Vlc3NQcm9tcHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICB7Z3Vlc3Nlcy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIndtbGFiZWxcIj5GaXJzdCBndWVzczo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIndtbGFiZWxcIj5OZXh0IGd1ZXNzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZ3Vlc3NcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2d1ZXNzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3Vlc3N3b3JkID0gZS50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKS5yZXBsYWNlKCAvXFxXL2cgLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGd1ZXNzd29yZC5sZW5ndGggPT09IHNlY3JldFdvcmQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NldEd1ZXNzQ291bnQgPSBzZXRHdWVzc0NvdW50ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2V0R3Vlc3NDb3VudChuZXdTZXRHdWVzc0NvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0R3Vlc3NlcyhbZ3Vlc3N3b3JkLCAuLi5ndWVzc2VzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEd1ZXNzKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGd1ZXNzd29yZCA9PT0gc2VjcmV0V29yZClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29sdmVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlY3JldFdvcmQubGVuZ3RoID09PSA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2V0U29sdmVDb3VudHMoWy4uLnNldFNvbHZlQ291bnRzLCBuZXdTZXRHdWVzc0NvdW50XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRHdWVzcyhndWVzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSB9IC8+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dHdWVzc2VzVGFibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIDx0YWJsZSBjbGFzc05hbWU9XCJHdWVzc3RhYmxlXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwid210aFwiPkd1ZXNzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwid210aFwiPkNvcnJlY3QgTGV0dGVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwid210aFwiPkNvcnJlY3QgUG9zaXRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge2d1ZXNzZXMubWFwKChnKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwid210ZFwiPntnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3bXRkIEFsaWduQ2VudGVyXCI+e2NhbGNDb3JyZWN0TGV0dGVyQ291bnQoZyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIndtdGQgQWxpZ25DZW50ZXJcIj57Y2FsY0NvcnJlY3RQb3NpdGlvbkNvdW50KGcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT47XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGlja1JhbmRvbVdvcmQoKSB7XHJcbiAgICAgICAgY29uc3QgbmV3bGVuID0gc2VjcmV0V29yZCA/IHNlY3JldFdvcmQubGVuZ3RoIDwgMiA/IDIgOiBzZWNyZXRXb3JkLmxlbmd0aCA+IDcgPyAyIDogc2VjcmV0V29yZC5sZW5ndGggKyAxIDogMjtcclxuICAgICAgICBpZiAobmV3bGVuID09PSAyICYmIHNldEd1ZXNzQ291bnQgIT09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXRTZXRHdWVzc0NvdW50KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBiYXNldXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VOQUJMRTJLP3JhbmRvbT0nIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tL0VOQUJMRTJLP3JhbmRvbT0nXHJcbiAgICAgICAgY29uc3QgdXJsID0gYmFzZXVybCArIG5ld2xlbi50b1N0cmluZygpO1xyXG4gICAgICAgIGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgICAgICAgbGV0IHJhbmRvbXdvcmQ9SlNPTi5wYXJzZSh0ZXh0KS50b1VwcGVyQ2FzZSgpOyAvLyBJdCBpcyBqdXN0IGEgd29yZCBpbiBkb3VibGUgcXVvdGVzIGJ1dCBpdCBpcyBqc29uIG5vbmV0aGVsZXNzXHJcbiAgICAgICAgICAgIHNldFNlY3JldFdvcmQocmFuZG9td29yZCk7XHJcbiAgICAgICAgICAgIHNldFNlY3JldERpc3BsYXkocmFuZG9td29yZC5zcGxpdChcIlwiKS5tYXAoKCk9PihcIipcIikpKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGNDb3JyZWN0TGV0dGVyQ291bnQoZ3Vlc3NsZXR0ZXJzKSB7XHJcbiAgICAgICAgbGV0IG4gPSAwXHJcbiAgICAgICAgY29uc3QgYWxwaGFiZXQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonXHJcbiAgICAgICAgZm9yKGxldCBsZXR0ZXIgb2YgYWxwaGFiZXQpIHtcclxuICAgICAgICAgICAgbGV0IHggPSBzZWNyZXRXb3JkLnNwbGl0KGxldHRlcikubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICBsZXQgeSA9IGd1ZXNzbGV0dGVycy5zcGxpdChsZXR0ZXIpLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgbiA9IG4gKyAoeCA8IHkgPyB4IDogeSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjQ29ycmVjdFBvc2l0aW9uQ291bnQoZ3Vlc3NsZXR0ZXJzKSB7XHJcbiAgICAgICAgbGV0IG4gPSAwXHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8c2VjcmV0V29yZC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBuID0gbiArIChzZWNyZXRXb3JkW2ldID09PSBndWVzc2xldHRlcnNbaV0gPyAxIDogMClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29yZE1hc3Rlcm1pbmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==