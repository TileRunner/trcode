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
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-11",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "trParagraph",
            children: "Cycle through 2-8 letter words per set."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
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
                    lineNumber: 62,
                    columnNumber: 41
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: ["Guesses this set: ", setGuessCount]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 41
                  }, undefined), setSolveCounts.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: "No completed sets yet"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 45
                  }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: ["Guesses for completed sets: ", setSolveCounts.map(num => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      children: [num, " "]
                    }, num.toString(), true, {
                      fileName: _jsxFileName,
                      lineNumber: 67,
                      columnNumber: 104
                    }, undefined))]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 45
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 37
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
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
                    lineNumber: 76,
                    columnNumber: 41
                  }, undefined), secretWord === '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                    children: "Loading ..."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 45
                  }, undefined) : solved ? promptForPlayAgain : promptForGuess, solved ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 45
                  }, undefined) : guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    className: "AlignCenter",
                    children: "Start guessing"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 49
                  }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    className: "AlignCenter",
                    children: "Keep guessing"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 49
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 37
                }, undefined), guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "trParagraph",
                  children: "No guesses yet"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 41
                }, undefined) : displayGuesses]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_3__.BrowserView, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "trSubtitle",
              children: "Guess info:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 29
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
              lineNumber: 110,
              columnNumber: 37
            }, undefined))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
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
        lineNumber: 121,
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
        lineNumber: 122,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
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
        lineNumber: 139,
        columnNumber: 17
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Next guess:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
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
        lineNumber: 143,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 137,
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
              lineNumber: 172,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Correct Letter"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Correct Position"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: guesses.map((g, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: g
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "AlignCenter",
              children: calcCorrectLetterCount(g)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "AlignCenter",
              children: calcCorrectPositionCount(g)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 25
            }, this)]
          }, `mode0guess${i}`, true, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 21
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 169,
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
              lineNumber: 194,
              columnNumber: 29
            }, this))
          }, `mode1guess${i}`, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 21
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vbWFzdGVybWluZC5qcyJdLCJuYW1lcyI6WyJXb3JkTWFzdGVybWluZCIsInNldFdoZXJldG8iLCJzZXRTb2x2ZUNvdW50cyIsInNldFNldFNvbHZlQ291bnRzIiwidXNlU3RhdGUiLCJzZXRHdWVzc0NvdW50Iiwic2V0U2V0R3Vlc3NDb3VudCIsInNlY3JldFdvcmQiLCJzZXRTZWNyZXRXb3JkIiwic2VjcmV0RGlzcGxheSIsInNldFNlY3JldERpc3BsYXkiLCJndWVzcyIsInNldEd1ZXNzIiwiZ3Vlc3NlcyIsInNldEd1ZXNzZXMiLCJzb2x2ZWQiLCJzZXRTb2x2ZWQiLCJnYW1lTW9kZSIsInNldEdhbWVNb2RlIiwiZGlzcGxheUd1ZXNzZXMiLCJzaG93R3Vlc3Nlc1RhYmxlIiwicHJvbXB0Rm9yR3Vlc3MiLCJzaG93R3Vlc3NQcm9tcHQiLCJwcm9tcHRGb3JQbGF5QWdhaW4iLCJzaG93UGxheUFnYWluUHJvbXB0IiwiaGlkZWhpbnRzIiwic2V0SGlkZWhpbnRzIiwiaGludHNoaWRkZW4iLCJjaGVja3dvcmQiLCJpbmRleCIsImxlbmd0aCIsImhpZGV3b3JkIiwicmVtb3ZlRW50cnkiLCJuZXdoaWRlaGludHMiLCJwdXNoIiwibWFwIiwibnVtIiwidG9TdHJpbmciLCJwaWNrUmFuZG9tV29yZCIsImciLCJnaSIsImUiLCJndWVzc3dvcmQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvVXBwZXJDYXNlIiwicmVwbGFjZSIsIm5ld1NldEd1ZXNzQ291bnQiLCJpIiwiY2FsY0NvcnJlY3RMZXR0ZXJDb3VudCIsImNhbGNDb3JyZWN0UG9zaXRpb25Db3VudCIsInNwbGl0IiwibCIsImoiLCJjYWxjTW9kZTFjc3MiLCJuZXdsZW4iLCJiYXNldXJsIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwidGV4dCIsInJhbmRvbXdvcmQiLCJKU09OIiwicGFyc2UiLCJndWVzc2xldHRlcnMiLCJuIiwiYWxwaGFiZXQiLCJsZXR0ZXIiLCJ4IiwieSIsImd1ZXNzTGV0dGVycyIsImd1ZXNzTGV0dGVySW5kZXgiLCJpbmRleE9mIiwibmV4dGpzdGFydCIsImpmb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxjQUFjLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBa0I7QUFBQTs7QUFDckMsUUFBTTtBQUFBLE9BQUNDLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBc0NDLCtDQUFRLENBQUMsRUFBRCxDQUFwRCxDQURxQyxDQUNxQjs7QUFDMUQsUUFBTTtBQUFBLE9BQUNDLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NGLCtDQUFRLENBQUMsQ0FBRCxDQUFsRCxDQUZxQyxDQUVrQjs7QUFDdkQsUUFBTTtBQUFBLE9BQUNHLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCSiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssYUFBRDtBQUFBLE9BQWdCQztBQUFoQixNQUFvQ04sK0NBQVEsQ0FBQyxFQUFELENBQWxEO0FBQ0EsUUFBTTtBQUFBLE9BQUNPLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CUiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ1MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JWLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDVyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQlosK0NBQVEsQ0FBQyxLQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNhLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCZCwrQ0FBUSxDQUFDLENBQUQsQ0FBeEMsQ0FScUMsQ0FRUTs7QUFDN0MsUUFBTWUsY0FBYyxHQUFHQyxnQkFBZ0IsRUFBdkM7QUFDQSxRQUFNQyxjQUFjLEdBQUdDLGVBQWUsRUFBdEM7QUFDQSxRQUFNQyxrQkFBa0IsR0FBR0MsbUJBQW1CLEVB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b0JlLE1BQXBCLElBQThCN0QsVUFBVSxDQUFDOEMsQ0FBRCxDQUFWLEtBQWtCZSxNQUFwRCxFQUE0RDtBQUN4RCxrQkFBSWYsQ0FBQyxLQUFLbUIsZ0JBQVYsRUFBNEI7QUFDeEIsdUJBQU8sK0NBQVA7QUFDSDs7QUFDREcsb0JBQU0sR0FBRyxJQUFUO0FBQ0FELHdCQUFVLEdBQUdyQixDQUFDLEdBQUcsQ0FBakI7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQUNKOztBQUNELFdBQU8sZ0NBQVA7QUFDSDtBQUNKLENBdFFEOztHQUFNckQsYzs7S0FBQUEsYztBQXdRTiwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yYzhmMWZiZDI4YzFlNDU1ZjEyOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2hvd2luZm8gZnJvbSAnLi4vd2kvc2hvd2luZm8nXHJcbmltcG9ydCB7QnJvd3NlclZpZXd9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnXHJcblxyXG5jb25zdCBXb3JkTWFzdGVybWluZCA9ICh7c2V0V2hlcmV0b30pID0+IHtcclxuICAgIGNvbnN0IFtzZXRTb2x2ZUNvdW50cywgc2V0U2V0U29sdmVDb3VudHNdID0gdXNlU3RhdGUoW10pOyAvLyBob3cgbWFueSBndWVzc2VzIHRvIHNvbHZlIGVhY2ggc2V0XHJcbiAgICBjb25zdCBbc2V0R3Vlc3NDb3VudCwgc2V0U2V0R3Vlc3NDb3VudF0gPSB1c2VTdGF0ZSgwKTsgLy8gdG90YWwgZ3Vlc3MgY291bnQgZm9yIHRoZSAyLTggbGV0dGVyIHNldFxyXG4gICAgY29uc3QgW3NlY3JldFdvcmQsIHNldFNlY3JldFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlY3JldERpc3BsYXksIHNldFNlY3JldERpc3BsYXldID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2d1ZXNzLCBzZXRHdWVzc10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZ3Vlc3Nlcywgc2V0R3Vlc3Nlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc29sdmVkLCBzZXRTb2x2ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2dhbWVNb2RlLCBzZXRHYW1lTW9kZV0gPSB1c2VTdGF0ZSgwKTsgLy8gMD1zaG93IGNvdW50cyBvbmx5LCAxPXNob3cgd2hpY2ggYXJlIHJpZ2h0IHNwb3QgYW5kIHdyb25nIHNwb3RcclxuICAgIGNvbnN0IGRpc3BsYXlHdWVzc2VzID0gc2hvd0d1ZXNzZXNUYWJsZSgpO1xyXG4gICAgY29uc3QgcHJvbXB0Rm9yR3Vlc3MgPSBzaG93R3Vlc3NQcm9tcHQoKTtcclxuICAgIGNvbnN0IHByb21wdEZvclBsYXlBZ2FpbiA9IHNob3dQbGF5QWdhaW5Qcm9tcHQoKTtcclxuICAgIGNvbnN0IFtoaWRlaGludHMsIHNldEhpZGVoaW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBmdW5jdGlvbiBoaW50c2hpZGRlbihjaGVja3dvcmQpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaGlkZWhpbnRzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBoaWRld29yZCA9IGhpZGVoaW50c1tpbmRleF07XHJcbiAgICAgICAgICAgIGlmIChoaWRld29yZCA9PT0gY2hlY2t3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVFbnRyeShpbmRleCkge1xyXG4gICAgICAgIGlmICghaGludHNoaWRkZW4oZ3Vlc3Nlc1tpbmRleF0pKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdoaWRlaGludHMgPSBbLi4uaGlkZWhpbnRzXTtcclxuICAgICAgICAgICAgbmV3aGlkZWhpbnRzLnB1c2goZ3Vlc3Nlc1tpbmRleF0pO1xyXG4gICAgICAgICAgICBzZXRIaWRlaGludHMobmV3aGlkZWhpbnRzKTsgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdvcmQgTWFzdGVybWluZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTW9kZTombmJzcDt7Z2FtZU1vZGUgPT09IDAgPyBcIk5vcm1hbFwiIDogXCJFYXN5XCJ9Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRHYW1lTW9kZSgxLWdhbWVNb2RlKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2dhbWVNb2RlID09PSAwID8gXCJHbyB0byBlYXN5IG1vZGVcIiA6IFwiR28gdG8gbm9ybWFsIG1vZGVcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPkN5Y2xlIHRocm91Z2ggMi04IGxldHRlciB3b3JkcyBwZXIgc2V0LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiT3V0ZXJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoIEFsaWduTGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+R3Vlc3NlcyB0aGlzIHdvcmQ6IHtndWVzc2VzLmxlbmd0aH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5HdWVzc2VzIHRoaXMgc2V0OiB7c2V0R3Vlc3NDb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2V0U29sdmVDb3VudHMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5ObyBjb21wbGV0ZWQgc2V0cyB5ZXQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+R3Vlc3NlcyBmb3IgY29tcGxldGVkIHNldHM6IHtzZXRTb2x2ZUNvdW50cy5tYXAobnVtID0+ICg8c3BhbiBrZXk9e251bS50b1N0cmluZygpfT57bnVtfSA8L3NwYW4+KSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiT3V0ZXJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VjcmV0V29yZCA9PT0gJycgPyBwaWNrUmFuZG9tV29yZCgpIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TZWNyZXQgV29yZDoge3NvbHZlZCA/IHNlY3JldFdvcmQgOiBzZWNyZXREaXNwbGF5fTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VjcmV0V29yZCA9PT0gJycgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nIC4uLjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29sdmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbXB0Rm9yUGxheUFnYWluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHRGb3JHdWVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NvbHZlZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1ZXNzZXMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiQWxpZ25DZW50ZXJcIj5TdGFydCBndWVzc2luZzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJBbGlnbkNlbnRlclwiPktlZXAgZ3Vlc3Npbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z3Vlc3Nlcy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5ObyBndWVzc2VzIHlldDwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5R3Vlc3Nlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJyb3dzZXJWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clN1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR3Vlc3MgaW5mbzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2d1ZXNzZXMubWFwKChnLGdpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWhpbnRzaGlkZGVuKGcpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG93aW5mbyBrZXk9e2Ake2d1ZXNzZXMubGVuZ3RoIC0gZ2l9LiR7Z31gfSB3b3JkPXtnfSBzaG93SW5zZXJ0cz1cIk5cIiBzaG93U3dhcHM9XCJZXCIgc2hvd0FuYWdyYW1zPVwiWVwiIHNob3dEcm9wcz1cIk5cIiByZW1vdmVFbnRyeT17cmVtb3ZlRW50cnl9IGVudHJ5SW5kZXg9e2dpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ccm93c2VyVmlldz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd1BsYXlBZ2FpblByb21wdCgpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidHJFbXBoYXNpc1wiPlNvbHZlZCBpbiB7Z3Vlc3Nlcy5sZW5ndGh9IG1vdmVzITwvaDI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBwaWNrUmFuZG9tV29yZCgpO1xyXG4gICAgICAgICAgICAgICAgc2V0R3Vlc3MoJycpO1xyXG4gICAgICAgICAgICAgICAgc2V0R3Vlc3NlcyhbXSk7XHJcbiAgICAgICAgICAgICAgICBzZXRIaWRlaGludHMoW10pO1xyXG4gICAgICAgICAgICAgICAgc2V0U29sdmVkKGZhbHNlKTtcclxuICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzZWNyZXRXb3JkLmxlbmd0aCA9PT0gOCA/IFwiU3RhcnQgQW5vdGhlciBTZXQhXCIgOiBcIlN0YXJ0IE5leHQgV29yZFwifVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dHdWVzc1Byb21wdCgpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgIHtndWVzc2VzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+Rmlyc3QgZ3Vlc3M6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDxsYWJlbD5OZXh0IGd1ZXNzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZ3Vlc3NcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2d1ZXNzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3Vlc3N3b3JkID0gZS50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKS5yZXBsYWNlKCAvXFxXL2cgLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGd1ZXNzd29yZC5sZW5ndGggPT09IHNlY3JldFdvcmQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NldEd1ZXNzQ291bnQgPSBzZXRHdWVzc0NvdW50ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2V0R3Vlc3NDb3VudChuZXdTZXRHdWVzc0NvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0R3Vlc3NlcyhbZ3Vlc3N3b3JkLCAuLi5ndWVzc2VzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEd1ZXNzKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGd1ZXNzd29yZCA9PT0gc2VjcmV0V29yZClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29sdmVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlY3JldFdvcmQubGVuZ3RoID09PSA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2V0U29sdmVDb3VudHMoWy4uLnNldFNvbHZlQ291bnRzLCBuZXdTZXRHdWVzc0NvdW50XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRHdWVzcyhndWVzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSB9IC8+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dHdWVzc2VzVGFibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+e2dhbWVNb2RlID09PSAwID9cclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidHJUYWJsZVwiPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkd1ZXNzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+Q29ycmVjdCBMZXR0ZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Db3JyZWN0IFBvc2l0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHtndWVzc2VzLm1hcCgoZyxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YG1vZGUwZ3Vlc3Mke2l9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Z308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiQWxpZ25DZW50ZXJcIj57Y2FsY0NvcnJlY3RMZXR0ZXJDb3VudChnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiQWxpZ25DZW50ZXJcIj57Y2FsY0NvcnJlY3RQb3NpdGlvbkNvdW50KGcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA6XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRyVGFibGVcIj5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge2d1ZXNzZXMubWFwKChnLGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgbW9kZTFndWVzcyR7aX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2cuc3BsaXQoJycpLm1hcCgobCxqKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtgbW9kZTFndWVzcyR7aX1sZXR0ZXIke2p9YH0gY2xhc3M9e2NhbGNNb2RlMWNzcyhnLGopfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIH08L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGlja1JhbmRvbVdvcmQoKSB7XHJcbiAgICAgICAgY29uc3QgbmV3bGVuID0gc2VjcmV0V29yZCA/IHNlY3JldFdvcmQubGVuZ3RoIDwgMiA/IDIgOiBzZWNyZXRXb3JkLmxlbmd0aCA+IDcgPyAyIDogc2VjcmV0V29yZC5sZW5ndGggKyAxIDogMjtcclxuICAgICAgICBpZiAobmV3bGVuID09PSAyICYmIHNldEd1ZXNzQ291bnQgIT09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXRTZXRHdWVzc0NvdW50KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBiYXNldXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VOQUJMRTJLP3JhbmRvbT0nIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tL0VOQUJMRTJLP3JhbmRvbT0nXHJcbiAgICAgICAgY29uc3QgdXJsID0gYmFzZXVybCArIG5ld2xlbi50b1N0cmluZygpO1xyXG4gICAgICAgIGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgICAgICAgbGV0IHJhbmRvbXdvcmQ9SlNPTi5wYXJzZSh0ZXh0KS50b1VwcGVyQ2FzZSgpOyAvLyBJdCBpcyBqdXN0IGEgd29yZCBpbiBkb3VibGUgcXVvdGVzIGJ1dCBpdCBpcyBqc29uIG5vbmV0aGVsZXNzXHJcbiAgICAgICAgICAgIHNldFNlY3JldFdvcmQocmFuZG9td29yZCk7XHJcbiAgICAgICAgICAgIHNldFNlY3JldERpc3BsYXkocmFuZG9td29yZC5zcGxpdChcIlwiKS5tYXAoKCk9PihcIipcIikpKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGNDb3JyZWN0TGV0dGVyQ291bnQoZ3Vlc3NsZXR0ZXJzKSB7XHJcbiAgICAgICAgbGV0IG4gPSAwXHJcbiAgICAgICAgY29uc3QgYWxwaGFiZXQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonXHJcbiAgICAgICAgZm9yKGxldCBsZXR0ZXIgb2YgYWxwaGFiZXQpIHtcclxuICAgICAgICAgICAgbGV0IHggPSBzZWNyZXRXb3JkLnNwbGl0KGxldHRlcikubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICBsZXQgeSA9IGd1ZXNzbGV0dGVycy5zcGxpdChsZXR0ZXIpLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgbiA9IG4gKyAoeCA8IHkgPyB4IDogeSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjQ29ycmVjdFBvc2l0aW9uQ291bnQoZ3Vlc3NsZXR0ZXJzKSB7XHJcbiAgICAgICAgbGV0IG4gPSAwXHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8c2VjcmV0V29yZC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBuID0gbiArIChzZWNyZXRXb3JkW2ldID09PSBndWVzc2xldHRlcnNbaV0gPyAxIDogMClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjTW9kZTFjc3MoZ3Vlc3NMZXR0ZXJzLGd1ZXNzTGV0dGVySW5kZXgpIHtcclxuICAgICAgICBsZXQgbGV0dGVyID0gZ3Vlc3NMZXR0ZXJzW2d1ZXNzTGV0dGVySW5kZXhdO1xyXG4gICAgICAgIC8vIGcgaXMgdGhlIHdob2UgZ3Vlc3MsIGogaXMgdGhlIGxldHRlciBpbmRleCBmb3Igd2hpY2ggd2Ugd2FudCB0aGUgY3NzIHN0eWxlIG5hbWVcclxuICAgICAgICBpZiAobGV0dGVyID09PSBzZWNyZXRXb3JkW2d1ZXNzTGV0dGVySW5kZXhdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIndtRWFzeU1vZGVMZXR0ZXIgd21Db3JyZWN0TGV0dGVyQ29ycmVjdFBvc2l0aW9uXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWNyZXRXb3JkLmluZGV4T2YobGV0dGVyKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIC8vIHRoZSBndWVzcyBsZXR0ZXIgaXMgaW4gdGhlIHNlY3JldCB3b3JkIGFuZCBpcyBub3QgaW4gdGhlIHJpZ2h0IHNwb3RcclxuICAgICAgICAgICAgLy8gaGFzIGl0IGFscmVhZHkgYmVlbiBjb3VudGVkIGVhcmxpZXIgdGhvdWdoP1xyXG4gICAgICAgICAgICAvLyB3aWxsIGl0IGJlIGNvdW50ZWQgbGF0ZXIgYXMgY29ycmVjdCBsZXR0ZXIgY29ycmVjdCBzcG90P1xyXG4gICAgICAgICAgICBsZXQgbmV4dGpzdGFydCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VjcmV0V29yZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlY3JldFdvcmRbaV0gPT09IGxldHRlciAmJiBndWVzc0xldHRlcnNbaV0gIT09IGxldHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBqZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSBuZXh0anN0YXJ0OyAhamZvdW5kICYmIGogPCBzZWNyZXRXb3JkLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChndWVzc0xldHRlcnNbal0gPT09IGxldHRlciAmJiBzZWNyZXRXb3JkW2pdICE9PSBsZXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID09PSBndWVzc0xldHRlckluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwid21FYXN5TW9kZUxldHRlciB3bUNvcnJlY3RMZXR0ZXJXcm9uZ1Bvc2l0aW9uXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dGpzdGFydCA9IGogKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIndtRWFzeU1vZGVMZXR0ZXIgd21Xcm9uZ0xldHRlclwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JkTWFzdGVybWluZDsiXSwic291cmNlUm9vdCI6IiJ9