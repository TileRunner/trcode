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
/* harmony import */ var _wi_showinfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wi/showinfo */ "./pages/wi/showinfo.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
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
  const {
    0: gameMode,
    1: setGameMode
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // 0=show counts only, 1=show which are right spot and wrong spot

  const displayGuesses = showGuessesTable();
  const promptForGuess = showGuessPrompt();
  const promptForPlayAgain = showPlayAgainPrompt();
  const {
    0: hidehints,
    1: setHidehints
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);

  function hintshidden(checkword) {
    for (let index = 0; index < hidehints.length; index++) {
      const hideword = hidehints[index];

      if (hideword === checkword) {
        return true;
      }
    }

    return false;
  }

  function removeEntry(index) {
    if (!hintshidden(guesses[index])) {
      let newhidehints = [...hidehints];
      newhidehints.push(guesses[index]);
      setHidehints(newhidehints);
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trBackground",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container-fluid",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "trTitle",
          children: ["Word Mastermind", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "trButton",
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
              lineNumber: 41,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: ["Mode:\xA0", gameMode === 0 ? "Normal" : "Easy", "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton",
          onClick: () => {
            setGameMode(1 - gameMode);
          },
          children: gameMode === 0 ? "Go to easy mode" : "Go to normal mode"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "trParagraph row",
          children: "Cycle through 2-8 letter words per set."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-lg-6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "Outertable",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "trParagraph AlignLeft",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: ["Guesses this word: ", guesses.length]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 41
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: ["Guesses this set: ", setGuessCount]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 41
                  }, undefined), setSolveCounts.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: "No completed sets yet"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 45
                  }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: ["Guesses for completed sets: ", setSolveCounts.map(num => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      children: [num, " "]
                    }, num.toString(), true, {
                      fileName: _jsxFileName,
                      lineNumber: 63,
                      columnNumber: 104
                    }, undefined))]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 45
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 37
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-lg-6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "Outertable",
                children: [secretWord === '' ? pickRandomWord() : '', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "trParagraph",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                    children: ["Secret Word: ", solved ? secretWord : secretDisplay]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 72,
                    columnNumber: 41
                  }, undefined), secretWord === '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                    children: "Loading ..."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 45
                  }, undefined) : solved ? promptForPlayAgain : promptForGuess, solved ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 45
                  }, undefined) : guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    className: "AlignCenter",
                    children: "Start guessing"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 49
                  }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    className: "AlignCenter",
                    children: "Keep guessing"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 49
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 37
                }, undefined), guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "trParagraph",
                  children: "No guesses yet"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 41
                }, undefined) : displayGuesses]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_3__.BrowserView, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col",
            children: [guesses.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "trSubtitle",
              children: "Guess info:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 33
            }, undefined), guesses.map((g, gi) => !hintshidden(g) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wi_showinfo__WEBPACK_IMPORTED_MODULE_2__.default, {
              word: g,
              showInserts: "N",
              showSwaps: "Y",
              showAnagrams: "Y",
              showDrops: "N",
              removeEntry: removeEntry,
              entryIndex: gi
            }, `${guesses.length - gi}.${g}`, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 37
            }, undefined))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, undefined);

  function showPlayAgainPrompt() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trParagraph",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "trEmphasis",
        children: ["Solved in ", guesses.length, " moves!"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: function () {
          pickRandomWord();
          setGuess('');
          setGuesses([]);
          setHidehints([]);
          setSolved(false);
        },
        children: secretWord.length === 8 ? "Start Another Set!" : "Start Next Word"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 16
    }, this);
  }

  function showGuessPrompt() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "form-group trParagraph",
      children: [guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "First guess:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 17
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Next guess:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
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
        lineNumber: 141,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 16
    }, this);
  }

  function showGuessesTable() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: gameMode === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "trTable",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Guess"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Correct Letter"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Correct Position"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: guesses.map((g, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: g
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "AlignCenter",
              children: calcCorrectLetterCount(g)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "AlignCenter",
              children: calcCorrectPositionCount(g)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 25
            }, this)]
          }, `mode0guess${i}`, true, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 21
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "trTable",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: guesses.map((g, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: g.split('').map((l, j) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              class: calcMode1css(g, j),
              children: l
            }, `mode1guess${i}letter${j}`, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 29
            }, this))
          }, `mode1guess${i}`, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 21
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
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

  function calcMode1css(guessLetters, guessLetterIndex) {
    let letter = guessLetters[guessLetterIndex]; // g is the whoe guess, j is the letter index for which we want the css style name

    if (letter === secretWord[guessLetterIndex]) {
      return "wmEasyModeLetter wmCorrectLetterCorrectPosition";
    }

    if (secretWord.indexOf(letter) > -1) {
      // the guess letter is in the secret word and is not in the right spot
      // has it already been counted earlier though?
      // will it be counted later as correct letter correct spot?
      let nextjstart = 0;

      for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === letter && guessLetters[i] !== letter) {
          let jfound = false;

          for (let j = nextjstart; !jfound && j < secretWord.length; j++) {
            if (guessLetters[j] === letter && secretWord[j] !== letter) {
              if (j === guessLetterIndex) {
                return "wmEasyModeLetter wmCorrectLetterWrongPosition";
              }

              jfound = true;
              nextjstart = j + 1;
            }
          }
        }
      }
    }

    return "wmEasyModeLetter wmWrongLetter";
  }
};

_s(WordMastermind, "mLkMnCiDxBej29DrKBx6RNpNWK0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vbWFzdGVybWluZC5qcyJdLCJuYW1lcyI6WyJXb3JkTWFzdGVybWluZCIsInNldFdoZXJldG8iLCJzZXRTb2x2ZUNvdW50cyIsInNldFNldFNvbHZlQ291bnRzIiwidXNlU3RhdGUiLCJzZXRHdWVzc0NvdW50Iiwic2V0U2V0R3Vlc3NDb3VudCIsInNlY3JldFdvcmQiLCJzZXRTZWNyZXRXb3JkIiwic2VjcmV0RGlzcGxheSIsInNldFNlY3JldERpc3BsYXkiLCJndWVzcyIsInNldEd1ZXNzIiwiZ3Vlc3NlcyIsInNldEd1ZXNzZXMiLCJzb2x2ZWQiLCJzZXRTb2x2ZWQiLCJnYW1lTW9kZSIsInNldEdhbWVNb2RlIiwiZGlzcGxheUd1ZXNzZXMiLCJzaG93R3Vlc3Nlc1RhYmxlIiwicHJvbXB0Rm9yR3Vlc3MiLCJzaG93R3Vlc3NQcm9tcHQiLCJwcm9tcHRGb3JQbGF5QWdhaW4iLCJzaG93UGxheUFnYWluUHJvbXB0IiwiaGlkZWhpbnRzIiwic2V0SGlkZWhpbnRzIiwiaGludHNoaWRkZW4iLCJjaGVja3dvcmQiLCJpbmRleCIsImxlbmd0aCIsImhpZGV3b3JkIiwicmVtb3ZlRW50cnkiLCJuZXdoaWRlaGludHMiLCJwdXNoIiwibWFwIiwibnVtIiwidG9TdHJpbmciLCJwaWNrUmFuZG9tV29yZCIsImciLCJnaSIsImUiLCJndWVzc3dvcmQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvVXBwZXJDYXNlIiwicmVwbGFjZSIsIm5ld1NldEd1ZXNzQ291bnQiLCJpIiwiY2FsY0NvcnJlY3RMZXR0ZXJDb3VudCIsImNhbGNDb3JyZWN0UG9zaXRpb25Db3VudCIsInNwbGl0IiwibCIsImoiLCJjYWxjTW9kZTFjc3MiLCJuZXdsZW4iLCJiYXNldXJsIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwidGV4dCIsInJhbmRvbXdvcmQiLCJKU09OIiwicGFyc2UiLCJndWVzc2xldHRlcnMiLCJuIiwiYWxwaGFiZXQiLCJsZXR0ZXIiLCJ4IiwieSIsImd1ZXNzTGV0dGVycyIsImd1ZXNzTGV0dGVySW5kZXgiLCJpbmRleE9mIiwibmV4dGpzdGFydCIsImpmb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxjQUFjLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBa0I7QUFBQTs7QUFDckMsUUFBTTtBQUFBLE9BQUNDLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBc0NDLCtDQUFRLENBQUMsRUFBRCxDQUFwRCxDQURxQyxDQUNxQjs7QUFDMUQsUUFBTTtBQUFBLE9BQUNDLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NGLCtDQUFRLENBQUMsQ0FBRCxDQUFsRCxDQUZxQyxDQUVrQjs7QUFDdkQsUUFBTTtBQUFBLE9BQUNHLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCSiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssYUFBRDtBQUFBLE9BQWdCQztBQUFoQixNQUFvQ04sK0NBQVEsQ0FBQyxFQUFELENBQWxEO0FBQ0EsUUFBTTtBQUFBLE9BQUNPLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CUiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ1MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JWLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDVyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQlosK0NBQVEsQ0FBQyxLQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNhLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCZCwrQ0FBUSxDQUFDLENBQUQsQ0FBeEMsQ0FScUMsQ0FRUTs7QUFDN0MsUUFBTWUsY0FBYyxHQUFHQyxnQkFBZ0IsRUFBdkM7QUFDQSxRQUFNQyxjQUFjLEdBQUdDLGVBQWUsRUFBdEM7QUFDQSxRQUFNQyxrQkFBa0IsR0FBR0MsbUJBQW1CLEVB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LEtBQUttQixnQkFBVixFQUE0QjtBQUN4Qix1QkFBTywrQ0FBUDtBQUNIOztBQUNERyxvQkFBTSxHQUFHLElBQVQ7QUFDQUQsd0JBQVUsR0FBR3JCLENBQUMsR0FBRyxDQUFqQjtBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBQ0o7O0FBQ0QsV0FBTyxnQ0FBUDtBQUNIO0FBQ0osQ0FwUUQ7O0dBQU1yRCxjOztLQUFBQSxjO0FBc1FOLCtEQUFlQSxjQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVkMzg1NTIzNjMwYTk1NDhjMjViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaG93aW5mbyBmcm9tICcuLi93aS9zaG93aW5mbydcclxuaW1wb3J0IHtCcm93c2VyVmlld30gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCdcclxuXHJcbmNvbnN0IFdvcmRNYXN0ZXJtaW5kID0gKHtzZXRXaGVyZXRvfSkgPT4ge1xyXG4gICAgY29uc3QgW3NldFNvbHZlQ291bnRzLCBzZXRTZXRTb2x2ZUNvdW50c10gPSB1c2VTdGF0ZShbXSk7IC8vIGhvdyBtYW55IGd1ZXNzZXMgdG8gc29sdmUgZWFjaCBzZXRcclxuICAgIGNvbnN0IFtzZXRHdWVzc0NvdW50LCBzZXRTZXRHdWVzc0NvdW50XSA9IHVzZVN0YXRlKDApOyAvLyB0b3RhbCBndWVzcyBjb3VudCBmb3IgdGhlIDItOCBsZXR0ZXIgc2V0XHJcbiAgICBjb25zdCBbc2VjcmV0V29yZCwgc2V0U2VjcmV0V29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VjcmV0RGlzcGxheSwgc2V0U2VjcmV0RGlzcGxheV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZ3Vlc3MsIHNldEd1ZXNzXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtndWVzc2VzLCBzZXRHdWVzc2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzb2x2ZWQsIHNldFNvbHZlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZ2FtZU1vZGUsIHNldEdhbWVNb2RlXSA9IHVzZVN0YXRlKDApOyAvLyAwPXNob3cgY291bnRzIG9ubHksIDE9c2hvdyB3aGljaCBhcmUgcmlnaHQgc3BvdCBhbmQgd3Jvbmcgc3BvdFxyXG4gICAgY29uc3QgZGlzcGxheUd1ZXNzZXMgPSBzaG93R3Vlc3Nlc1RhYmxlKCk7XHJcbiAgICBjb25zdCBwcm9tcHRGb3JHdWVzcyA9IHNob3dHdWVzc1Byb21wdCgpO1xyXG4gICAgY29uc3QgcHJvbXB0Rm9yUGxheUFnYWluID0gc2hvd1BsYXlBZ2FpblByb21wdCgpO1xyXG4gICAgY29uc3QgW2hpZGVoaW50cywgc2V0SGlkZWhpbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGZ1bmN0aW9uIGhpbnRzaGlkZGVuKGNoZWNrd29yZCkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBoaWRlaGludHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhpZGV3b3JkID0gaGlkZWhpbnRzW2luZGV4XTtcclxuICAgICAgICAgICAgaWYgKGhpZGV3b3JkID09PSBjaGVja3dvcmQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUVudHJ5KGluZGV4KSB7XHJcbiAgICAgICAgaWYgKCFoaW50c2hpZGRlbihndWVzc2VzW2luZGV4XSkpIHtcclxuICAgICAgICAgICAgbGV0IG5ld2hpZGVoaW50cyA9IFsuLi5oaWRlaGludHNdO1xyXG4gICAgICAgICAgICBuZXdoaWRlaGludHMucHVzaChndWVzc2VzW2luZGV4XSk7XHJcbiAgICAgICAgICAgIHNldEhpZGVoaW50cyhuZXdoaWRlaGludHMpOyAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV29yZCBNYXN0ZXJtaW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICBNb2RlOiZuYnNwO3tnYW1lTW9kZSA9PT0gMCA/IFwiTm9ybWFsXCIgOiBcIkVhc3lcIn0mbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldEdhbWVNb2RlKDEtZ2FtZU1vZGUpO319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Z2FtZU1vZGUgPT09IDAgPyBcIkdvIHRvIGVhc3kgbW9kZVwiIDogXCJHbyB0byBub3JtYWwgbW9kZVwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGggcm93XCI+Q3ljbGUgdGhyb3VnaCAyLTggbGV0dGVyIHdvcmRzIHBlciBzZXQuPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk91dGVydGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaCBBbGlnbkxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkd1ZXNzZXMgdGhpcyB3b3JkOiB7Z3Vlc3Nlcy5sZW5ndGh9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+R3Vlc3NlcyB0aGlzIHNldDoge3NldEd1ZXNzQ291bnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NldFNvbHZlQ291bnRzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Tm8gY29tcGxldGVkIHNldHMgeWV0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkd1ZXNzZXMgZm9yIGNvbXBsZXRlZCBzZXRzOiB7c2V0U29sdmVDb3VudHMubWFwKG51bSA9PiAoPHNwYW4ga2V5PXtudW0udG9TdHJpbmcoKX0+e251bX0gPC9zcGFuPikpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk91dGVydGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlY3JldFdvcmQgPT09ICcnID8gcGlja1JhbmRvbVdvcmQoKSA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+U2VjcmV0IFdvcmQ6IHtzb2x2ZWQgPyBzZWNyZXRXb3JkIDogc2VjcmV0RGlzcGxheX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlY3JldFdvcmQgPT09ICcnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+TG9hZGluZyAuLi48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbHZlZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdEZvclBsYXlBZ2FpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbXB0Rm9yR3Vlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzb2x2ZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWVzc2VzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCI+U3RhcnQgZ3Vlc3Npbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiQWxpZ25DZW50ZXJcIj5LZWVwIGd1ZXNzaW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2d1ZXNzZXMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+Tm8gZ3Vlc3NlcyB5ZXQ8L3A+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUd1ZXNzZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCcm93c2VyVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtndWVzc2VzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyU3VidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR3Vlc3MgaW5mbzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtndWVzc2VzLm1hcCgoZyxnaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFoaW50c2hpZGRlbihnKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hvd2luZm8ga2V5PXtgJHtndWVzc2VzLmxlbmd0aCAtIGdpfS4ke2d9YH0gd29yZD17Z30gc2hvd0luc2VydHM9XCJOXCIgc2hvd1N3YXBzPVwiWVwiIHNob3dBbmFncmFtcz1cIllcIiBzaG93RHJvcHM9XCJOXCIgcmVtb3ZlRW50cnk9e3JlbW92ZUVudHJ5fSBlbnRyeUluZGV4PXtnaX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnJvd3NlclZpZXc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dQbGF5QWdhaW5Qcm9tcHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRyRW1waGFzaXNcIj5Tb2x2ZWQgaW4ge2d1ZXNzZXMubGVuZ3RofSBtb3ZlcyE8L2gyPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcGlja1JhbmRvbVdvcmQoKTtcclxuICAgICAgICAgICAgICAgIHNldEd1ZXNzKCcnKTtcclxuICAgICAgICAgICAgICAgIHNldEd1ZXNzZXMoW10pO1xyXG4gICAgICAgICAgICAgICAgc2V0SGlkZWhpbnRzKFtdKTtcclxuICAgICAgICAgICAgICAgIHNldFNvbHZlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c2VjcmV0V29yZC5sZW5ndGggPT09IDggPyBcIlN0YXJ0IEFub3RoZXIgU2V0IVwiIDogXCJTdGFydCBOZXh0IFdvcmRcIn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93R3Vlc3NQcm9tcHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCB0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICB7Z3Vlc3Nlcy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkZpcnN0IGd1ZXNzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+TmV4dCBndWVzczo8L2xhYmVsPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImd1ZXNzXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtndWVzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGd1ZXNzd29yZCA9IGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCkucmVwbGFjZSggL1xcVy9nICwgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChndWVzc3dvcmQubGVuZ3RoID09PSBzZWNyZXRXb3JkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTZXRHdWVzc0NvdW50ID0gc2V0R3Vlc3NDb3VudCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNldEd1ZXNzQ291bnQobmV3U2V0R3Vlc3NDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEd1ZXNzZXMoW2d1ZXNzd29yZCwgLi4uZ3Vlc3Nlc10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRHdWVzcygnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChndWVzc3dvcmQgPT09IHNlY3JldFdvcmQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNvbHZlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWNyZXRXb3JkLmxlbmd0aCA9PT0gOCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNldFNvbHZlQ291bnRzKFsuLi5zZXRTb2x2ZUNvdW50cywgbmV3U2V0R3Vlc3NDb3VudF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0R3Vlc3MoZ3Vlc3N3b3JkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93R3Vlc3Nlc1RhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PntnYW1lTW9kZSA9PT0gMCA/XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRyVGFibGVcIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5HdWVzczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkNvcnJlY3QgTGV0dGVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+Q29ycmVjdCBQb3NpdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7Z3Vlc3Nlcy5tYXAoKGcsaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2Btb2RlMGd1ZXNzJHtpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2d9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCI+e2NhbGNDb3JyZWN0TGV0dGVyQ291bnQoZyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCI+e2NhbGNDb3JyZWN0UG9zaXRpb25Db3VudChnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0clRhYmxlXCI+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHtndWVzc2VzLm1hcCgoZyxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YG1vZGUxZ3Vlc3Mke2l9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtnLnNwbGl0KCcnKS5tYXAoKGwsaikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17YG1vZGUxZ3Vlc3Mke2l9bGV0dGVyJHtqfWB9IGNsYXNzPXtjYWxjTW9kZTFjc3MoZyxqKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICB9PC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBpY2tSYW5kb21Xb3JkKCkge1xyXG4gICAgICAgIGNvbnN0IG5ld2xlbiA9IHNlY3JldFdvcmQgPyBzZWNyZXRXb3JkLmxlbmd0aCA8IDIgPyAyIDogc2VjcmV0V29yZC5sZW5ndGggPiA3ID8gMiA6IHNlY3JldFdvcmQubGVuZ3RoICsgMSA6IDI7XHJcbiAgICAgICAgaWYgKG5ld2xlbiA9PT0gMiAmJiBzZXRHdWVzc0NvdW50ICE9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0U2V0R3Vlc3NDb3VudCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYmFzZXVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FTkFCTEUySz9yYW5kb209JyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbS9FTkFCTEUySz9yYW5kb209J1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGJhc2V1cmwgKyBuZXdsZW4udG9TdHJpbmcoKTtcclxuICAgICAgICBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpLnRoZW4odGV4dCA9PiB7XHJcbiAgICAgICAgICAgIGxldCByYW5kb213b3JkPUpTT04ucGFyc2UodGV4dCkudG9VcHBlckNhc2UoKTsgLy8gSXQgaXMganVzdCBhIHdvcmQgaW4gZG91YmxlIHF1b3RlcyBidXQgaXQgaXMganNvbiBub25ldGhlbGVzc1xyXG4gICAgICAgICAgICBzZXRTZWNyZXRXb3JkKHJhbmRvbXdvcmQpO1xyXG4gICAgICAgICAgICBzZXRTZWNyZXREaXNwbGF5KHJhbmRvbXdvcmQuc3BsaXQoXCJcIikubWFwKCgpPT4oXCIqXCIpKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjQ29ycmVjdExldHRlckNvdW50KGd1ZXNzbGV0dGVycykge1xyXG4gICAgICAgIGxldCBuID0gMFxyXG4gICAgICAgIGNvbnN0IGFscGhhYmV0ID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJ1xyXG4gICAgICAgIGZvcihsZXQgbGV0dGVyIG9mIGFscGhhYmV0KSB7XHJcbiAgICAgICAgICAgIGxldCB4ID0gc2VjcmV0V29yZC5zcGxpdChsZXR0ZXIpLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgbGV0IHkgPSBndWVzc2xldHRlcnMuc3BsaXQobGV0dGVyKS5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIG4gPSBuICsgKHggPCB5ID8geCA6IHkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2FsY0NvcnJlY3RQb3NpdGlvbkNvdW50KGd1ZXNzbGV0dGVycykge1xyXG4gICAgICAgIGxldCBuID0gMFxyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPHNlY3JldFdvcmQubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbiA9IG4gKyAoc2VjcmV0V29yZFtpXSA9PT0gZ3Vlc3NsZXR0ZXJzW2ldID8gMSA6IDApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2FsY01vZGUxY3NzKGd1ZXNzTGV0dGVycyxndWVzc0xldHRlckluZGV4KSB7XHJcbiAgICAgICAgbGV0IGxldHRlciA9IGd1ZXNzTGV0dGVyc1tndWVzc0xldHRlckluZGV4XTtcclxuICAgICAgICAvLyBnIGlzIHRoZSB3aG9lIGd1ZXNzLCBqIGlzIHRoZSBsZXR0ZXIgaW5kZXggZm9yIHdoaWNoIHdlIHdhbnQgdGhlIGNzcyBzdHlsZSBuYW1lXHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gc2VjcmV0V29yZFtndWVzc0xldHRlckluZGV4XSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJ3bUVhc3lNb2RlTGV0dGVyIHdtQ29ycmVjdExldHRlckNvcnJlY3RQb3NpdGlvblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VjcmV0V29yZC5pbmRleE9mKGxldHRlcikgPiAtMSkge1xyXG4gICAgICAgICAgICAvLyB0aGUgZ3Vlc3MgbGV0dGVyIGlzIGluIHRoZSBzZWNyZXQgd29yZCBhbmQgaXMgbm90IGluIHRoZSByaWdodCBzcG90XHJcbiAgICAgICAgICAgIC8vIGhhcyBpdCBhbHJlYWR5IGJlZW4gY291bnRlZCBlYXJsaWVyIHRob3VnaD9cclxuICAgICAgICAgICAgLy8gd2lsbCBpdCBiZSBjb3VudGVkIGxhdGVyIGFzIGNvcnJlY3QgbGV0dGVyIGNvcnJlY3Qgc3BvdD9cclxuICAgICAgICAgICAgbGV0IG5leHRqc3RhcnQgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlY3JldFdvcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZWNyZXRXb3JkW2ldID09PSBsZXR0ZXIgJiYgZ3Vlc3NMZXR0ZXJzW2ldICE9PSBsZXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgamZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqID0gbmV4dGpzdGFydDsgIWpmb3VuZCAmJiBqIDwgc2VjcmV0V29yZC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3Vlc3NMZXR0ZXJzW2pdID09PSBsZXR0ZXIgJiYgc2VjcmV0V29yZFtqXSAhPT0gbGV0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gZ3Vlc3NMZXR0ZXJJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIndtRWFzeU1vZGVMZXR0ZXIgd21Db3JyZWN0TGV0dGVyV3JvbmdQb3NpdGlvblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgamZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRqc3RhcnQgPSBqICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJ3bUVhc3lNb2RlTGV0dGVyIHdtV3JvbmdMZXR0ZXJcIjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29yZE1hc3Rlcm1pbmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==