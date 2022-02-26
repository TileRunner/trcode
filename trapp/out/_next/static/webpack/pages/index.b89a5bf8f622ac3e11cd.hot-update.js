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
        children: [gameMode === 0 ? "Normal mode" : "Easy mode", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-lg-8",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_3__.BrowserView, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "row",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "col-lg-12",
                children: [guesses.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "trSubtitle",
                  children: "Guess info:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 41
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
                  lineNumber: 112,
                  columnNumber: 45
                }, undefined))]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
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
        lineNumber: 125,
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
        lineNumber: 126,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 124,
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
        lineNumber: 143,
        columnNumber: 17
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Next guess:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
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
        lineNumber: 147,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 141,
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
              lineNumber: 176,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Correct Letter"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Correct Position"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: guesses.map((g, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: g
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "AlignCenter",
              children: calcCorrectLetterCount(g)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "AlignCenter",
              children: calcCorrectPositionCount(g)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 25
            }, this)]
          }, `mode0guess${i}`, true, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 21
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 173,
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
              lineNumber: 198,
              columnNumber: 29
            }, this))
          }, `mode1guess${i}`, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 21
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vbWFzdGVybWluZC5qcyJdLCJuYW1lcyI6WyJXb3JkTWFzdGVybWluZCIsInNldFdoZXJldG8iLCJzZXRTb2x2ZUNvdW50cyIsInNldFNldFNvbHZlQ291bnRzIiwidXNlU3RhdGUiLCJzZXRHdWVzc0NvdW50Iiwic2V0U2V0R3Vlc3NDb3VudCIsInNlY3JldFdvcmQiLCJzZXRTZWNyZXRXb3JkIiwic2VjcmV0RGlzcGxheSIsInNldFNlY3JldERpc3BsYXkiLCJndWVzcyIsInNldEd1ZXNzIiwiZ3Vlc3NlcyIsInNldEd1ZXNzZXMiLCJzb2x2ZWQiLCJzZXRTb2x2ZWQiLCJnYW1lTW9kZSIsInNldEdhbWVNb2RlIiwiZGlzcGxheUd1ZXNzZXMiLCJzaG93R3Vlc3Nlc1RhYmxlIiwicHJvbXB0Rm9yR3Vlc3MiLCJzaG93R3Vlc3NQcm9tcHQiLCJwcm9tcHRGb3JQbGF5QWdhaW4iLCJzaG93UGxheUFnYWluUHJvbXB0IiwiaGlkZWhpbnRzIiwic2V0SGlkZWhpbnRzIiwiaGludHNoaWRkZW4iLCJjaGVja3dvcmQiLCJpbmRleCIsImxlbmd0aCIsImhpZGV3b3JkIiwicmVtb3ZlRW50cnkiLCJuZXdoaWRlaGludHMiLCJwdXNoIiwibWFwIiwibnVtIiwidG9TdHJpbmciLCJwaWNrUmFuZG9tV29yZCIsImciLCJnaSIsImUiLCJndWVzc3dvcmQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvVXBwZXJDYXNlIiwicmVwbGFjZSIsIm5ld1NldEd1ZXNzQ291bnQiLCJpIiwiY2FsY0NvcnJlY3RMZXR0ZXJDb3VudCIsImNhbGNDb3JyZWN0UG9zaXRpb25Db3VudCIsInNwbGl0IiwibCIsImoiLCJjYWxjTW9kZTFjc3MiLCJuZXdsZW4iLCJiYXNldXJsIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwidGV4dCIsInJhbmRvbXdvcmQiLCJKU09OIiwicGFyc2UiLCJndWVzc2xldHRlcnMiLCJuIiwiYWxwaGFiZXQiLCJsZXR0ZXIiLCJ4IiwieSIsImd1ZXNzTGV0dGVycyIsImd1ZXNzTGV0dGVySW5kZXgiLCJpbmRleE9mIiwibmV4dGpzdGFydCIsImpmb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxjQUFjLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBa0I7QUFBQTs7QUFDckMsUUFBTTtBQUFBLE9BQUNDLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBc0NDLCtDQUFRLENBQUMsRUFBRCxDQUFwRCxDQURxQyxDQUNxQjs7QUFDMUQsUUFBTTtBQUFBLE9BQUNDLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NGLCtDQUFRLENBQUMsQ0FBRCxDQUFsRCxDQUZxQyxDQUVrQjs7QUFDdkQsUUFBTTtBQUFBLE9BQUNHLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCSiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssYUFBRDtBQUFBLE9BQWdCQztBQUFoQixNQUFvQ04sK0NBQVEsQ0FBQyxFQUFELENBQWxEO0FBQ0EsUUFBTTtBQUFBLE9BQUNPLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CUiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ1MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JWLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDVyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQlosK0NBQVEsQ0FBQyxLQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNhLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCZCwrQ0FBUSxDQUFDLENBQUQsQ0FBeEMsQ0FScUMsQ0FRUTs7QUFDN0MsUUFBTWUsY0FBYyxHQUFHQyxnQkFBZ0IsRUFBdkM7QUFDQSxRQUFNQyxjQUFjLEdBQUdDLGVBQWUsRUFBdEM7QUFDQSxRQUFNQyxrQkFBa0IsR0FBR0MsbUJBQW1CLEVB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QUFDLEdBQUc5QyxVQUFVLENBQUN1QixNQUFsRCxFQUEwRHVCLENBQUMsRUFBM0QsRUFBK0Q7QUFDM0QsZ0JBQUlrQixZQUFZLENBQUNsQixDQUFELENBQVosS0FBb0JlLE1BQXBCLElBQThCN0QsVUFBVSxDQUFDOEMsQ0FBRCxDQUFWLEtBQWtCZSxNQUFwRCxFQUE0RDtBQUN4RCxrQkFBSWYsQ0FBQyxLQUFLbUIsZ0JBQVYsRUFBNEI7QUFDeEIsdUJBQU8sK0NBQVA7QUFDSDs7QUFDREcsb0JBQU0sR0FBRyxJQUFUO0FBQ0FELHdCQUFVLEdBQUdyQixDQUFDLEdBQUcsQ0FBakI7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQUNKOztBQUNELFdBQU8sZ0NBQVA7QUFDSDtBQUNKLENBMVFEOztHQUFNckQsYzs7S0FBQUEsYztBQTRRTiwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iODlhNWJmOGY2MjJhYzNlMTFjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2hvd2luZm8gZnJvbSAnLi4vd2kvc2hvd2luZm8nXHJcbmltcG9ydCB7QnJvd3NlclZpZXd9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnXHJcblxyXG5jb25zdCBXb3JkTWFzdGVybWluZCA9ICh7c2V0V2hlcmV0b30pID0+IHtcclxuICAgIGNvbnN0IFtzZXRTb2x2ZUNvdW50cywgc2V0U2V0U29sdmVDb3VudHNdID0gdXNlU3RhdGUoW10pOyAvLyBob3cgbWFueSBndWVzc2VzIHRvIHNvbHZlIGVhY2ggc2V0XHJcbiAgICBjb25zdCBbc2V0R3Vlc3NDb3VudCwgc2V0U2V0R3Vlc3NDb3VudF0gPSB1c2VTdGF0ZSgwKTsgLy8gdG90YWwgZ3Vlc3MgY291bnQgZm9yIHRoZSAyLTggbGV0dGVyIHNldFxyXG4gICAgY29uc3QgW3NlY3JldFdvcmQsIHNldFNlY3JldFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlY3JldERpc3BsYXksIHNldFNlY3JldERpc3BsYXldID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2d1ZXNzLCBzZXRHdWVzc10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZ3Vlc3Nlcywgc2V0R3Vlc3Nlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc29sdmVkLCBzZXRTb2x2ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2dhbWVNb2RlLCBzZXRHYW1lTW9kZV0gPSB1c2VTdGF0ZSgwKTsgLy8gMD1zaG93IGNvdW50cyBvbmx5LCAxPXNob3cgd2hpY2ggYXJlIHJpZ2h0IHNwb3QgYW5kIHdyb25nIHNwb3RcclxuICAgIGNvbnN0IGRpc3BsYXlHdWVzc2VzID0gc2hvd0d1ZXNzZXNUYWJsZSgpO1xyXG4gICAgY29uc3QgcHJvbXB0Rm9yR3Vlc3MgPSBzaG93R3Vlc3NQcm9tcHQoKTtcclxuICAgIGNvbnN0IHByb21wdEZvclBsYXlBZ2FpbiA9IHNob3dQbGF5QWdhaW5Qcm9tcHQoKTtcclxuICAgIGNvbnN0IFtoaWRlaGludHMsIHNldEhpZGVoaW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBmdW5jdGlvbiBoaW50c2hpZGRlbihjaGVja3dvcmQpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaGlkZWhpbnRzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBoaWRld29yZCA9IGhpZGVoaW50c1tpbmRleF07XHJcbiAgICAgICAgICAgIGlmIChoaWRld29yZCA9PT0gY2hlY2t3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVFbnRyeShpbmRleCkge1xyXG4gICAgICAgIGlmICghaGludHNoaWRkZW4oZ3Vlc3Nlc1tpbmRleF0pKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdoaWRlaGludHMgPSBbLi4uaGlkZWhpbnRzXTtcclxuICAgICAgICAgICAgbmV3aGlkZWhpbnRzLnB1c2goZ3Vlc3Nlc1tpbmRleF0pO1xyXG4gICAgICAgICAgICBzZXRIaWRlaGludHMobmV3aGlkZWhpbnRzKTsgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdvcmQgTWFzdGVybWluZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2dhbWVNb2RlID09PSAwID8gXCJOb3JtYWwgbW9kZVwiIDogXCJFYXN5IG1vZGVcIn1cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldEdhbWVNb2RlKDEtZ2FtZU1vZGUpO319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Z2FtZU1vZGUgPT09IDAgPyBcIkdvIHRvIGVhc3kgbW9kZVwiIDogXCJHbyB0byBub3JtYWwgbW9kZVwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTExXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+Q3ljbGUgdGhyb3VnaCAyLTggbGV0dGVyIHdvcmRzIHBlciBzZXQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk91dGVydGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaCBBbGlnbkxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkd1ZXNzZXMgdGhpcyB3b3JkOiB7Z3Vlc3Nlcy5sZW5ndGh9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+R3Vlc3NlcyB0aGlzIHNldDoge3NldEd1ZXNzQ291bnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NldFNvbHZlQ291bnRzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Tm8gY29tcGxldGVkIHNldHMgeWV0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkd1ZXNzZXMgZm9yIGNvbXBsZXRlZCBzZXRzOiB7c2V0U29sdmVDb3VudHMubWFwKG51bSA9PiAoPHNwYW4ga2V5PXtudW0udG9TdHJpbmcoKX0+e251bX0gPC9zcGFuPikpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk91dGVydGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlY3JldFdvcmQgPT09ICcnID8gcGlja1JhbmRvbVdvcmQoKSA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+U2VjcmV0IFdvcmQ6IHtzb2x2ZWQgPyBzZWNyZXRXb3JkIDogc2VjcmV0RGlzcGxheX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlY3JldFdvcmQgPT09ICcnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+TG9hZGluZyAuLi48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbHZlZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdEZvclBsYXlBZ2FpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbXB0Rm9yR3Vlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzb2x2ZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWVzc2VzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCI+U3RhcnQgZ3Vlc3Npbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiQWxpZ25DZW50ZXJcIj5LZWVwIGd1ZXNzaW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2d1ZXNzZXMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+Tm8gZ3Vlc3NlcyB5ZXQ8L3A+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUd1ZXNzZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnJvd3NlclZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtndWVzc2VzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJTdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEd1ZXNzIGluZm86XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z3Vlc3Nlcy5tYXAoKGcsZ2kpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFoaW50c2hpZGRlbihnKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG93aW5mbyBrZXk9e2Ake2d1ZXNzZXMubGVuZ3RoIC0gZ2l9LiR7Z31gfSB3b3JkPXtnfSBzaG93SW5zZXJ0cz1cIk5cIiBzaG93U3dhcHM9XCJZXCIgc2hvd0FuYWdyYW1zPVwiWVwiIHNob3dEcm9wcz1cIk5cIiByZW1vdmVFbnRyeT17cmVtb3ZlRW50cnl9IGVudHJ5SW5kZXg9e2dpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnJvd3NlclZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dQbGF5QWdhaW5Qcm9tcHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRyRW1waGFzaXNcIj5Tb2x2ZWQgaW4ge2d1ZXNzZXMubGVuZ3RofSBtb3ZlcyE8L2gyPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcGlja1JhbmRvbVdvcmQoKTtcclxuICAgICAgICAgICAgICAgIHNldEd1ZXNzKCcnKTtcclxuICAgICAgICAgICAgICAgIHNldEd1ZXNzZXMoW10pO1xyXG4gICAgICAgICAgICAgICAgc2V0SGlkZWhpbnRzKFtdKTtcclxuICAgICAgICAgICAgICAgIHNldFNvbHZlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c2VjcmV0V29yZC5sZW5ndGggPT09IDggPyBcIlN0YXJ0IEFub3RoZXIgU2V0IVwiIDogXCJTdGFydCBOZXh0IFdvcmRcIn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93R3Vlc3NQcm9tcHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCB0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICB7Z3Vlc3Nlcy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkZpcnN0IGd1ZXNzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+TmV4dCBndWVzczo8L2xhYmVsPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImd1ZXNzXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtndWVzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGd1ZXNzd29yZCA9IGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCkucmVwbGFjZSggL1xcVy9nICwgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChndWVzc3dvcmQubGVuZ3RoID09PSBzZWNyZXRXb3JkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTZXRHdWVzc0NvdW50ID0gc2V0R3Vlc3NDb3VudCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNldEd1ZXNzQ291bnQobmV3U2V0R3Vlc3NDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEd1ZXNzZXMoW2d1ZXNzd29yZCwgLi4uZ3Vlc3Nlc10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRHdWVzcygnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChndWVzc3dvcmQgPT09IHNlY3JldFdvcmQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNvbHZlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWNyZXRXb3JkLmxlbmd0aCA9PT0gOCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNldFNvbHZlQ291bnRzKFsuLi5zZXRTb2x2ZUNvdW50cywgbmV3U2V0R3Vlc3NDb3VudF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0R3Vlc3MoZ3Vlc3N3b3JkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93R3Vlc3Nlc1RhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PntnYW1lTW9kZSA9PT0gMCA/XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRyVGFibGVcIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5HdWVzczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkNvcnJlY3QgTGV0dGVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+Q29ycmVjdCBQb3NpdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7Z3Vlc3Nlcy5tYXAoKGcsaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2Btb2RlMGd1ZXNzJHtpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2d9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCI+e2NhbGNDb3JyZWN0TGV0dGVyQ291bnQoZyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCI+e2NhbGNDb3JyZWN0UG9zaXRpb25Db3VudChnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0clRhYmxlXCI+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHtndWVzc2VzLm1hcCgoZyxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YG1vZGUxZ3Vlc3Mke2l9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtnLnNwbGl0KCcnKS5tYXAoKGwsaikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17YG1vZGUxZ3Vlc3Mke2l9bGV0dGVyJHtqfWB9IGNsYXNzPXtjYWxjTW9kZTFjc3MoZyxqKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICB9PC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBpY2tSYW5kb21Xb3JkKCkge1xyXG4gICAgICAgIGNvbnN0IG5ld2xlbiA9IHNlY3JldFdvcmQgPyBzZWNyZXRXb3JkLmxlbmd0aCA8IDIgPyAyIDogc2VjcmV0V29yZC5sZW5ndGggPiA3ID8gMiA6IHNlY3JldFdvcmQubGVuZ3RoICsgMSA6IDI7XHJcbiAgICAgICAgaWYgKG5ld2xlbiA9PT0gMiAmJiBzZXRHdWVzc0NvdW50ICE9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0U2V0R3Vlc3NDb3VudCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYmFzZXVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FTkFCTEUySz9yYW5kb209JyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbS9FTkFCTEUySz9yYW5kb209J1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGJhc2V1cmwgKyBuZXdsZW4udG9TdHJpbmcoKTtcclxuICAgICAgICBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpLnRoZW4odGV4dCA9PiB7XHJcbiAgICAgICAgICAgIGxldCByYW5kb213b3JkPUpTT04ucGFyc2UodGV4dCkudG9VcHBlckNhc2UoKTsgLy8gSXQgaXMganVzdCBhIHdvcmQgaW4gZG91YmxlIHF1b3RlcyBidXQgaXQgaXMganNvbiBub25ldGhlbGVzc1xyXG4gICAgICAgICAgICBzZXRTZWNyZXRXb3JkKHJhbmRvbXdvcmQpO1xyXG4gICAgICAgICAgICBzZXRTZWNyZXREaXNwbGF5KHJhbmRvbXdvcmQuc3BsaXQoXCJcIikubWFwKCgpPT4oXCIqXCIpKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjQ29ycmVjdExldHRlckNvdW50KGd1ZXNzbGV0dGVycykge1xyXG4gICAgICAgIGxldCBuID0gMFxyXG4gICAgICAgIGNvbnN0IGFscGhhYmV0ID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJ1xyXG4gICAgICAgIGZvcihsZXQgbGV0dGVyIG9mIGFscGhhYmV0KSB7XHJcbiAgICAgICAgICAgIGxldCB4ID0gc2VjcmV0V29yZC5zcGxpdChsZXR0ZXIpLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgbGV0IHkgPSBndWVzc2xldHRlcnMuc3BsaXQobGV0dGVyKS5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIG4gPSBuICsgKHggPCB5ID8geCA6IHkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2FsY0NvcnJlY3RQb3NpdGlvbkNvdW50KGd1ZXNzbGV0dGVycykge1xyXG4gICAgICAgIGxldCBuID0gMFxyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPHNlY3JldFdvcmQubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbiA9IG4gKyAoc2VjcmV0V29yZFtpXSA9PT0gZ3Vlc3NsZXR0ZXJzW2ldID8gMSA6IDApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2FsY01vZGUxY3NzKGd1ZXNzTGV0dGVycyxndWVzc0xldHRlckluZGV4KSB7XHJcbiAgICAgICAgbGV0IGxldHRlciA9IGd1ZXNzTGV0dGVyc1tndWVzc0xldHRlckluZGV4XTtcclxuICAgICAgICAvLyBnIGlzIHRoZSB3aG9lIGd1ZXNzLCBqIGlzIHRoZSBsZXR0ZXIgaW5kZXggZm9yIHdoaWNoIHdlIHdhbnQgdGhlIGNzcyBzdHlsZSBuYW1lXHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gc2VjcmV0V29yZFtndWVzc0xldHRlckluZGV4XSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJ3bUVhc3lNb2RlTGV0dGVyIHdtQ29ycmVjdExldHRlckNvcnJlY3RQb3NpdGlvblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VjcmV0V29yZC5pbmRleE9mKGxldHRlcikgPiAtMSkge1xyXG4gICAgICAgICAgICAvLyB0aGUgZ3Vlc3MgbGV0dGVyIGlzIGluIHRoZSBzZWNyZXQgd29yZCBhbmQgaXMgbm90IGluIHRoZSByaWdodCBzcG90XHJcbiAgICAgICAgICAgIC8vIGhhcyBpdCBhbHJlYWR5IGJlZW4gY291bnRlZCBlYXJsaWVyIHRob3VnaD9cclxuICAgICAgICAgICAgLy8gd2lsbCBpdCBiZSBjb3VudGVkIGxhdGVyIGFzIGNvcnJlY3QgbGV0dGVyIGNvcnJlY3Qgc3BvdD9cclxuICAgICAgICAgICAgbGV0IG5leHRqc3RhcnQgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlY3JldFdvcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZWNyZXRXb3JkW2ldID09PSBsZXR0ZXIgJiYgZ3Vlc3NMZXR0ZXJzW2ldICE9PSBsZXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgamZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqID0gbmV4dGpzdGFydDsgIWpmb3VuZCAmJiBqIDwgc2VjcmV0V29yZC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3Vlc3NMZXR0ZXJzW2pdID09PSBsZXR0ZXIgJiYgc2VjcmV0V29yZFtqXSAhPT0gbGV0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gZ3Vlc3NMZXR0ZXJJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIndtRWFzeU1vZGVMZXR0ZXIgd21Db3JyZWN0TGV0dGVyV3JvbmdQb3NpdGlvblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgamZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRqc3RhcnQgPSBqICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJ3bUVhc3lNb2RlTGV0dGVyIHdtV3JvbmdMZXR0ZXJcIjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29yZE1hc3Rlcm1pbmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==