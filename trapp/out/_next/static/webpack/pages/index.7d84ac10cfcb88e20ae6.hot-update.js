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
/* harmony import */ var _showCustomKeyboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../showCustomKeyboard */ "./pages/showCustomKeyboard.js");
/* harmony import */ var _wmoptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wmoptions */ "./pages/wm/wmoptions.js");
/* harmony import */ var _lib_wordfunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/wordfunctions */ "./lib/wordfunctions.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\wm\\mastermind.js",
    _s = $RefreshSig$();








const WordMastermind = ({
  setWhereto
}) => {
  _s();

  const {
    0: gameOptions,
    1: setGameOptions
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    set: false
  });
  const {
    0: history,
    1: setHistory
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: keyboardVersion,
    1: setKeyboardVersion
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
  const {
    0: setSolveCounts,
    1: setSetSolveCounts
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // how many guesses to solve each set

  const {
    0: setGuessCount,
    1: setSetGuessCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // total guess count for the min-max word len set

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
    0: showInitialInfo,
    1: setShowInitialInfo
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // set info, easy mode info

  const divUnderKeyboard = showDivUnderKeyboard();
  const displayGuesses = showGuessesTable();
  const promptForGuess = showGuessPrompt();
  const promptForPlayAgain = showPlayAgainPrompt();
  const {
    0: hidehints,
    1: setHidehints
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);

  function handleInputLetter(letter) {
    handleUpdatedGuess(guess + letter);
  }

  function handleDeleteLetter() {
    if (guess.length > 0) {
      setGuess(guess.substring(0, guess.length - 1));
    }
  }

  function showDivUnderKeyboard() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "wmWordUnderKeyboard",
      children: ["\xA0", guess, "\xA0"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 16
    }, this);
  }

  async function handleUpdatedGuess(guessword) {
    if (guessword.length === secretWord.length) {
      if (gameOptions.validOnly) {
        let isvalid = await (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_6__.isWordValid)(guessword);

        if (!isvalid) {
          alert(`Sorry, ${guessword} is not in my word list.`);
          return;
        }
      }

      addGuessToHistory(guessword);
      const newSetGuessCount = setGuessCount + 1;
      setSetGuessCount(newSetGuessCount);
      setGuesses([guessword, ...guesses]);
      setGuess('');

      if (guessword === secretWord) {
        setSolved(true);

        if (secretWord.length === gameOptions.lenMax) {
          setSetSolveCounts([...setSolveCounts, newSetGuessCount]);
        }
      }
    } else {
      setGuess(guessword);
    }
  }

  function addRoundToHistory(newsecretword) {
    // history array by set, new sets at last position
    // each set is an array of rounds (min to max length)
    // each round has secret word and guess info
    let newhistory = JSON.parse(JSON.stringify(history));
    let newround = {
      secretWord: newsecretword,
      guesses: [],
      solved: false
    };

    if (newsecretword.length === gameOptions.lenMin) {
      // new set
      let newset = {
        rounds: [newround],
        numguesses: 0
      };
      newhistory.push(newset);
    } else {
      // existing set
      let currset = newhistory[newhistory.length - 1];
      currset.rounds.push(newround);
    }

    setHistory(newhistory);
  }

  function addGuessToHistory(guessword) {
    let newhistory = JSON.parse(JSON.stringify(history));
    let currset = newhistory[newhistory.length - 1];
    let currround = currset.rounds[currset.rounds.length - 1];
    let guessLetters = Array.from(guessword);
    let letterinfo = [];

    for (let i = 0; i < guessLetters.length; i++) {
      const guessletter = guessLetters[i];
      const letterResult = calcLetterResult(guessLetters, i); // C, I, or W

      letterinfo.push({
        letter: guessletter,
        result: letterResult
      });
    }

    let newguess = {
      guess: guessword,
      letterinfo: letterinfo,
      solves: guessword === secretWord
    };
    currset.numguesses++;
    currround.solved = newguess.solves;
    currround.guesses.push(newguess);
    setHistory(newhistory);
  }

  function copyToClipboard() {
    if (!gameOptions.cliprule) {
      return;
    }

    let copyText = "Word Mastermind\nhttps://tilerunner.herokuapp.com/\n";

    for (let s = 0; s < history.length; s++) {
      const si = history[s];

      if (gameOptions.cliprule === 'all' || s === history.length - 1) {
        if (gameOptions.cliprule !== 'round') {
          copyText += `Set ${s + 1}: ${si.numguesses} guesses\n`;
        }

        for (let r = 0; r < si.rounds.length; r++) {
          const ri = si.rounds[r];

          if (gameOptions.cliprule !== 'round' || r === si.rounds.length - 1) {
            copyText = `${copyText}Round ${r + 1}: ${ri.guesses.length} guesses\n`;

            for (let g = 0; g < ri.guesses.length; g++) {
              const gi = ri.guesses[g];
              copyText += `${gi.guess}:\n`;

              for (let l = 0; l < gi.letterinfo.length; l++) {
                const li = gi.letterinfo[l];

                if (li.result === 'C') {
                  copyText = copyText + "🟩";
                } else if (li.result === 'I') {
                  copyText = copyText + "🟨";
                } else {
                  copyText = copyText + "⬜";
                }
              }

              copyText = copyText + "\n";
            }
          }
        }
      }
    }

    navigator.clipboard.writeText(copyText);
    alert("Clipboard updated");
  }

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

  const InitialInfo = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "Outertable",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trParagraph AlignLeft",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: [gameOptions.lenMin, "-", gameOptions.lenMax, " letter words per set."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Guesses this word: ", guesses.length]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Guesses this set: ", setGuessCount]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 13
      }, undefined), setSolveCounts.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "No completed sets yet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Guesses for completed sets: ", setSolveCounts.map(num => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [num, " "]
        }, num.toString(), true, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 76
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
      }, undefined), gameOptions.mode === 'easy' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "wmEasyModeLetter wmCorrectLetterCorrectPosition",
            children: "C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 50
          }, undefined), "orrect position"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 47
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "wmEasyModeLetter wmCorrectLetterWrongPosition",
            children: "I"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 20
          }, undefined), "ncorrect position"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "wmEasyModeLetter wmWrongLetter",
            children: "W"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 20
          }, undefined), "rong letter"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 17
        }, undefined)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 146,
    columnNumber: 25
  }, undefined);

  const MainInfo = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "Outertable",
    children: [gameOptions.set && secretWord === '' ? pickRandomWord() : '', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trParagraph",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: ["Secret Word: ", solved ? secretWord : secretDisplay]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 13
      }, undefined), secretWord === '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Loading ..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 17
      }, undefined) : solved ? promptForPlayAgain : promptForGuess, solved ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 17
      }, undefined) : guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "AlignCenter",
        children: "Start guessing"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 21
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "AlignCenter",
        children: "Keep guessing"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }, undefined), guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "trParagraph",
      children: "No guesses yet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }, undefined) : displayGuesses]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 161,
    columnNumber: 22
  }, undefined);

  const GuessInfo = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "Outertable",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "wmGuessInfoDiv",
      children: "Guess info:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 9
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
      lineNumber: 195,
      columnNumber: 13
    }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "wmGuessInfoDiv",
      children: "Explanation:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "trParagraph",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "insertCount",
          children: "\xA01\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 17
        }, undefined), "Shows insert counts/letters"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "swapCount",
          children: "\xA02\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 17
        }, undefined), "Shows swaps counts/letters"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "anagramCount",
          children: "3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 17
        }, undefined), "Shows anagram counts/words"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Click to toggle between count and info"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["Click the ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "closemebutton"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 27
        }, undefined), " to remove your word"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 189,
    columnNumber: 23
  }, undefined);

  const BrowserLayout = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container-fluid",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-lg-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col",
            children: InitialInfo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col",
            children: MainInfo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        children: GuessInfo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 208,
    columnNumber: 27
  }, undefined);

  const MobileLayout = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          setShowInitialInfo(!showInitialInfo);
        },
        children: showInitialInfo ? "Hide" : "Show"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 13
      }, undefined), showInitialInfo && InitialInfo]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 9
    }, undefined), MainInfo]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 219,
    columnNumber: 26
  }, undefined);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trBackground",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
          lineNumber: 233,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 13
    }, undefined), !gameOptions.set ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wmoptions__WEBPACK_IMPORTED_MODULE_5__.default, {
      setGameOptions: setGameOptions
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 13
    }, undefined) : react_device_detect__WEBPACK_IMPORTED_MODULE_3__.isMobile ? MobileLayout : BrowserLayout]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 229,
    columnNumber: 9
  }, undefined);

  function showPlayAgainPrompt() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trParagraph",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        className: "tmCongrats",
        children: ["\uD83D\uDC4F\uD83C\uDFFD Solved in ", guesses.length, " moves! \uD83D\uDC4F\uD83C\uDFFD"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 246,
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
        children: secretWord.length === gameOptions.lenMax ? "Start Another Set!" : "Start Next Word"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          copyToClipboard();
        },
        children: "Clipboard"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 16
    }, this);
  }

  function showGuessPrompt() {
    return react_device_detect__WEBPACK_IMPORTED_MODULE_3__.isMobile ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_showCustomKeyboard__WEBPACK_IMPORTED_MODULE_4__.default, {
      keyboardVersion: keyboardVersion,
      setKeyboardVersion: setKeyboardVersion,
      inputWord: guess,
      handleInputLetter: handleInputLetter,
      handleDeleteLetter: handleDeleteLetter,
      divUnderKeyboard: divUnderKeyboard
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 13
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "form-group trParagraph",
      children: [guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "First guess:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 21
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Next guess:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        className: "form-control",
        name: "guess",
        value: guess,
        autoComplete: "new-password",
        onChange: e => {
          const guessword = e.target.value.toUpperCase().replace(/\W/g, '');
          handleUpdatedGuess(guessword);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 13
    }, this);
  }

  function showGuessesTable() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: gameOptions.mode === 'hard' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "trTable",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Guess"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Correct Letter"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 302,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Correct Position"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 303,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: guesses.map((g, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: g
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 309,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "AlignCenter",
              children: calcCorrectLetterCount(g)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 310,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "AlignCenter",
              children: calcCorrectPositionCount(g)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 25
            }, this)]
          }, `mode0guess${i}`, true, {
            fileName: _jsxFileName,
            lineNumber: 308,
            columnNumber: 21
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 9
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "trTable",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: [!solved && guess && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: guess.split("").map((l, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: `wmEasyModeLetter ${cssEasyModeLetterSize()}`,
              children: l
            }, `guessletter${i}`, false, {
              fileName: _jsxFileName,
              lineNumber: 322,
              columnNumber: 25
            }, this))
          }, 'easymodeguessletters', false, {
            fileName: _jsxFileName,
            lineNumber: 320,
            columnNumber: 38
          }, this), guesses.map((g, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: g.split('').map((l, j) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              class: calcMode1css(g, j),
              children: l
            }, `mode1guess${i}letter${j}`, false, {
              fileName: _jsxFileName,
              lineNumber: 328,
              columnNumber: 29
            }, this))
          }, `mode1guess${i}`, false, {
            fileName: _jsxFileName,
            lineNumber: 326,
            columnNumber: 21
          }, this))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 16
    }, this);
  }

  function pickRandomWord() {
    const newlen = secretWord ? secretWord.length < gameOptions.lenMin ? gameOptions.lenMin : secretWord.length >= gameOptions.lenMax ? gameOptions.lenMin : secretWord.length + 1 : gameOptions.lenMin;

    if (newlen === gameOptions.lenMin && setGuessCount !== 0) {
      setSetGuessCount(0);
    }

    const baseurl =  true ? 'http://localhost:5000/ENABLE2K?random=' : 0;
    const url = baseurl + newlen.toString();
    fetch(url).then(res => res.text()).then(text => {
      let randomword = JSON.parse(text).toUpperCase(); // It is just a word in double quotes but it is json nonetheless

      setSecretWord(randomword);
      setSecretDisplay(randomword.split("").map(() => "*"));
      addRoundToHistory(randomword);
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

  function calcLetterResult(guessLetters, guessLetterIndex) {
    let letter = guessLetters[guessLetterIndex]; // g is the whoe guess, j is the letter index for which we want the css style name

    if (letter === secretWord[guessLetterIndex]) {
      return "C";
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
                return "I";
              }

              jfound = true;
              nextjstart = j + 1;
            }
          }
        }
      }
    }

    return "W";
  }

  function calcMode1css(guessLetters, guessLetterIndex) {
    let size = cssEasyModeLetterSize();
    let letterResult = calcLetterResult(guessLetters, guessLetterIndex);

    if (letterResult === 'C') {
      return "wmEasyModeLetter wmCorrectLetterCorrectPosition " + size;
    }

    if (letterResult === 'I') {
      return "wmEasyModeLetter wmCorrectLetterWrongPosition " + size;
    }

    return "wmEasyModeLetter wmWrongLetter " + size;
  }

  function cssEasyModeLetterSize() {
    return secretWord && secretWord.length > 8 ? 'small' : 'normal';
  }
};

_s(WordMastermind, "3oTnp6uJPfW1Jm8IcNk89qHYLlY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vbWFzdGVybWluZC5qcyJdLCJuYW1lcyI6WyJXb3JkTWFzdGVybWluZCIsInNldFdoZXJldG8iLCJnYW1lT3B0aW9ucyIsInNldEdhbWVPcHRpb25zIiwidXNlU3RhdGUiLCJzZXQiLCJoaXN0b3J5Iiwic2V0SGlzdG9yeSIsImtleWJvYXJkVmVyc2lvbiIsInNldEtleWJvYXJkVmVyc2lvbiIsInNldFNvbHZlQ291bnRzIiwic2V0U2V0U29sdmVDb3VudHMiLCJzZXRHdWVzc0NvdW50Iiwic2V0U2V0R3Vlc3NDb3VudCIsInNlY3JldFdvcmQiLCJzZXRTZWNyZXRXb3JkIiwic2VjcmV0RGlzcGxheSIsInNldFNlY3JldERpc3BsYXkiLCJndWVzcyIsInNldEd1ZXNzIiwiZ3Vlc3NlcyIsInNldEd1ZXNzZXMiLCJzb2x2ZWQiLCJzZXRTb2x2ZWQiLCJzaG93SW5pdGlhbEluZm8iLCJzZXRTaG93SW5pdGlhbEluZm8iLCJkaXZVbmRlcktleWJvYXJkIiwic2hvd0RpdlVuZGVyS2V5Ym9hcmQiLCJkaXNwbGF5R3Vlc3NlcyIsInNob3dHdWVzc2VzVGFibGUiLCJwcm9tcHRGb3JHdWVzcyIsInNob3dHdWVzc1Byb21wdCIsInByb21wdEZvclBsYXlBZ2FpbiIsInNob3dQbGF5QWdhaW5Qcm9tcHQiLCJoaWRlaGludHMiLCJzZXRIaWRlaGludHMiLCJoYW5kbGVJbnB1dExldHRlciIsImxldHRlciIsImhhbmRsZVVwZGF0ZWRHdWVzcyIsImhhbmRsZURlbGV0ZUxldHRlciIsImxlbmd0aCIsInN1YnN0cmluZyIsImd1ZXNzd29yZCIsInZhbGlkT25seSIsImlzdmFsaWQiLCJpc1dvcmRWYWxpZCIsImFsZXJ0IiwiYWRkR3Vlc3NUb0hpc3RvcnkiLCJuZXdTZXRHdWVzc0NvdW50IiwibGVuTWF4IiwiYWRkUm91bmRUb0hpc3RvcnkiLCJuZXdzZWNyZXR3b3JkIiwibmV3aGlzdG9yeSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIm5ld3JvdW5kIiwibGVuTWluIiwibmV3c2V0Iiwicm91bmRzIiwibnVtZ3Vlc3NlcyIsInB1c2giLCJjdXJyc2V0IiwiY3VycnJvdW5kIiwiZ3Vlc3NMZXR0ZXJzIiwiQXJyYXkiLCJmcm9tIiwibGV0dGVyaW5mbyIsImkiLCJndWVzc2xldHRlciIsImxldHRlclJlc3VsdCIsImNhbGNMZXR0ZXJSZXN1bHQiLCJyZXN1bHQiLCJuZXdndWVzcyIsInNvbHZlcyIsImNvcHlUb0NsaXBib2FyZCIsImNsaXBydWxlIiwiY29weVRleHQiLCJzIiwic2kiLCJyIiwicmkiLCJnIiwiZ2kiLCJsIiwibGkiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJoaW50c2hpZGRlbiIsImNoZWNrd29yZCIsImluZGV4IiwiaGlkZXdvcmQiLCJyZW1vdmVFbnRyeSIsIm5ld2hpZGVoaW50cyIsIkluaXRpYWxJbmZvIiwibWFwIiwibnVtIiwidG9TdHJpbmciLCJtb2RlIiwiTWFpbkluZm8iLCJwaWNrUmFuZG9tV29yZCIsIkd1ZXNzSW5mbyIsIkJyb3dzZXJMYXlvdXQiLCJNb2JpbGVMYXlvdXQiLCJpc01vYmlsZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvVXBwZXJDYXNlIiwicmVwbGFjZSIsImNhbGNDb3JyZWN0TGV0dGVyQ291bnQiLCJjYWxjQ29ycmVjdFBvc2l0aW9uQ291bnQiLCJzcGxpdCIsImNzc0Vhc3lNb2RlTGV0dGVyU2l6ZSIsImoiLCJjYWxjTW9kZTFjc3MiLCJuZXdsZW4iLCJiYXNldXJsIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwidGV4dCIsInJhbmRvbXdvcmQiLCJndWVzc2xldHRlcnMiLCJuIiwiYWxwaGFiZXQiLCJ4IiwieSIsImd1ZXNzTGV0dGVySW5kZXgiLCJpbmRleE9mIiwibmV4dGpzdGFydCIsImpmb3VuZCIsInNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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RGdFLElBQTFEO0FBQWdFOztBQUMzRixXQUFPLG9DQUFvQ0EsSUFBM0M7QUFDSDs7QUFDRCxXQUFTcEIscUJBQVQsR0FBaUM7QUFDN0IsV0FBUXBHLFVBQVUsSUFBSUEsVUFBVSxDQUFDMEIsTUFBWCxHQUFvQixDQUFsQyxHQUFzQyxPQUF0QyxHQUFnRCxRQUF4RDtBQUNIO0FBQ0osQ0E3WkQ7O0dBQU14QyxjOztLQUFBQSxjO0FBK1pOLCtEQUFlQSxjQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdkODRhYzEwY2ZjYjg4ZTIwYWU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaG93aW5mbyBmcm9tICcuLi93aS9zaG93aW5mbydcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0J1xyXG5pbXBvcnQgU2hvd0N1c3RvbUtleWJvYXJkIGZyb20gJy4uL3Nob3dDdXN0b21LZXlib2FyZCc7XHJcbmltcG9ydCBHZXRXTU9wdGlvbnMgZnJvbSAnLi93bW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBpc1dvcmRWYWxpZCB9IGZyb20gJy4uLy4uL2xpYi93b3JkZnVuY3Rpb25zJztcclxuY29uc3QgV29yZE1hc3Rlcm1pbmQgPSAoe3NldFdoZXJldG99KSA9PiB7XHJcbiAgICBjb25zdCBbZ2FtZU9wdGlvbnMsIHNldEdhbWVPcHRpb25zXSA9IHVzZVN0YXRlKHtzZXQ6ZmFsc2V9KTtcclxuICAgIGNvbnN0IFtoaXN0b3J5LCBzZXRIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtrZXlib2FyZFZlcnNpb24sIHNldEtleWJvYXJkVmVyc2lvbl0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtzZXRTb2x2ZUNvdW50cywgc2V0U2V0U29sdmVDb3VudHNdID0gdXNlU3RhdGUoW10pOyAvLyBob3cgbWFueSBndWVzc2VzIHRvIHNvbHZlIGVhY2ggc2V0XHJcbiAgICBjb25zdCBbc2V0R3Vlc3NDb3VudCwgc2V0U2V0R3Vlc3NDb3VudF0gPSB1c2VTdGF0ZSgwKTsgLy8gdG90YWwgZ3Vlc3MgY291bnQgZm9yIHRoZSBtaW4tbWF4IHdvcmQgbGVuIHNldFxyXG4gICAgY29uc3QgW3NlY3JldFdvcmQsIHNldFNlY3JldFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlY3JldERpc3BsYXksIHNldFNlY3JldERpc3BsYXldID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2d1ZXNzLCBzZXRHdWVzc10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZ3Vlc3Nlcywgc2V0R3Vlc3Nlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc29sdmVkLCBzZXRTb2x2ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dJbml0aWFsSW5mbywgc2V0U2hvd0luaXRpYWxJbmZvXSA9IHVzZVN0YXRlKHRydWUpOyAvLyBzZXQgaW5mbywgZWFzeSBtb2RlIGluZm9cclxuICAgIGNvbnN0IGRpdlVuZGVyS2V5Ym9hcmQgPSBzaG93RGl2VW5kZXJLZXlib2FyZCgpO1xyXG4gICAgY29uc3QgZGlzcGxheUd1ZXNzZXMgPSBzaG93R3Vlc3Nlc1RhYmxlKCk7XHJcbiAgICBjb25zdCBwcm9tcHRGb3JHdWVzcyA9IHNob3dHdWVzc1Byb21wdCgpO1xyXG4gICAgY29uc3QgcHJvbXB0Rm9yUGxheUFnYWluID0gc2hvd1BsYXlBZ2FpblByb21wdCgpO1xyXG4gICAgY29uc3QgW2hpZGVoaW50cywgc2V0SGlkZWhpbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJbnB1dExldHRlcihsZXR0ZXIpIHtcclxuICAgICAgICBoYW5kbGVVcGRhdGVkR3Vlc3MoZ3Vlc3MgKyBsZXR0ZXIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRGVsZXRlTGV0dGVyKCkge1xyXG4gICAgICAgIGlmIChndWVzcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNldEd1ZXNzKGd1ZXNzLnN1YnN0cmluZygwLGd1ZXNzLmxlbmd0aC0xKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2hvd0RpdlVuZGVyS2V5Ym9hcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwid21Xb3JkVW5kZXJLZXlib2FyZFwiPiZuYnNwO3tndWVzc30mbmJzcDs8L2Rpdj47XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVVcGRhdGVkR3Vlc3MoZ3Vlc3N3b3JkKSB7XHJcbiAgICAgICAgaWYgKGd1ZXNzd29yZC5sZW5ndGggPT09IHNlY3JldFdvcmQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmIChnYW1lT3B0aW9ucy52YWxpZE9ubHkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpc3ZhbGlkID0gYXdhaXQgaXNXb3JkVmFsaWQoZ3Vlc3N3b3JkKTtcclxuICAgICAgICAgICAgICAgIGlmICghaXN2YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGBTb3JyeSwgJHtndWVzc3dvcmR9IGlzIG5vdCBpbiBteSB3b3JkIGxpc3QuYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFkZEd1ZXNzVG9IaXN0b3J5KGd1ZXNzd29yZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1NldEd1ZXNzQ291bnQgPSBzZXRHdWVzc0NvdW50ICsgMTtcclxuICAgICAgICAgICAgc2V0U2V0R3Vlc3NDb3VudChuZXdTZXRHdWVzc0NvdW50KTtcclxuICAgICAgICAgICAgc2V0R3Vlc3NlcyhbZ3Vlc3N3b3JkLCAuLi5ndWVzc2VzXSk7XHJcbiAgICAgICAgICAgIHNldEd1ZXNzKCcnKTtcclxuICAgICAgICAgICAgaWYgKGd1ZXNzd29yZCA9PT0gc2VjcmV0V29yZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2V0U29sdmVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlY3JldFdvcmQubGVuZ3RoID09PSBnYW1lT3B0aW9ucy5sZW5NYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTZXRTb2x2ZUNvdW50cyhbLi4uc2V0U29sdmVDb3VudHMsIG5ld1NldEd1ZXNzQ291bnRdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEd1ZXNzKGd1ZXNzd29yZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWRkUm91bmRUb0hpc3RvcnkobmV3c2VjcmV0d29yZCkge1xyXG4gICAgICAgIC8vIGhpc3RvcnkgYXJyYXkgYnkgc2V0LCBuZXcgc2V0cyBhdCBsYXN0IHBvc2l0aW9uXHJcbiAgICAgICAgLy8gZWFjaCBzZXQgaXMgYW4gYXJyYXkgb2Ygcm91bmRzIChtaW4gdG8gbWF4IGxlbmd0aClcclxuICAgICAgICAvLyBlYWNoIHJvdW5kIGhhcyBzZWNyZXQgd29yZCBhbmQgZ3Vlc3MgaW5mb1xyXG4gICAgICAgIGxldCBuZXdoaXN0b3J5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShoaXN0b3J5KSk7XHJcbiAgICAgICAgbGV0IG5ld3JvdW5kID0ge3NlY3JldFdvcmQ6IG5ld3NlY3JldHdvcmQsIGd1ZXNzZXM6IFtdLCBzb2x2ZWQ6IGZhbHNlfTtcclxuICAgICAgICBpZiAobmV3c2VjcmV0d29yZC5sZW5ndGggPT09IGdhbWVPcHRpb25zLmxlbk1pbikgeyAvLyBuZXcgc2V0XHJcbiAgICAgICAgICAgIGxldCBuZXdzZXQgPSB7cm91bmRzOiBbbmV3cm91bmRdLCBudW1ndWVzc2VzOiAwfTtcclxuICAgICAgICAgICAgbmV3aGlzdG9yeS5wdXNoKG5ld3NldCk7XHJcbiAgICAgICAgfSBlbHNlIHsgLy8gZXhpc3Rpbmcgc2V0XHJcbiAgICAgICAgICAgIGxldCBjdXJyc2V0ID0gbmV3aGlzdG9yeVtuZXdoaXN0b3J5Lmxlbmd0aC0xXTtcclxuICAgICAgICAgICAgY3VycnNldC5yb3VuZHMucHVzaChuZXdyb3VuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEhpc3RvcnkobmV3aGlzdG9yeSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhZGRHdWVzc1RvSGlzdG9yeShndWVzc3dvcmQpIHtcclxuICAgICAgICBsZXQgbmV3aGlzdG9yeSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaGlzdG9yeSkpO1xyXG4gICAgICAgIGxldCBjdXJyc2V0ID0gbmV3aGlzdG9yeVtuZXdoaXN0b3J5Lmxlbmd0aC0xXTtcclxuICAgICAgICBsZXQgY3VycnJvdW5kID0gY3VycnNldC5yb3VuZHNbY3VycnNldC5yb3VuZHMubGVuZ3RoLTFdO1xyXG4gICAgICAgIGxldCBndWVzc0xldHRlcnMgPSBBcnJheS5mcm9tKGd1ZXNzd29yZCk7XHJcbiAgICAgICAgbGV0IGxldHRlcmluZm8gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGd1ZXNzTGV0dGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBndWVzc2xldHRlciA9IGd1ZXNzTGV0dGVyc1tpXTtcclxuICAgICAgICAgICAgY29uc3QgbGV0dGVyUmVzdWx0ID0gY2FsY0xldHRlclJlc3VsdChndWVzc0xldHRlcnMsIGkpOyAvLyBDLCBJLCBvciBXXHJcbiAgICAgICAgICAgIGxldHRlcmluZm8ucHVzaCh7bGV0dGVyOiBndWVzc2xldHRlciwgcmVzdWx0OiBsZXR0ZXJSZXN1bHR9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5ld2d1ZXNzID0ge2d1ZXNzOiBndWVzc3dvcmQsIGxldHRlcmluZm86IGxldHRlcmluZm8sIHNvbHZlczogZ3Vlc3N3b3JkID09PSBzZWNyZXRXb3JkfTtcclxuICAgICAgICBjdXJyc2V0Lm51bWd1ZXNzZXMrKztcclxuICAgICAgICBjdXJycm91bmQuc29sdmVkID0gbmV3Z3Vlc3Muc29sdmVzO1xyXG4gICAgICAgIGN1cnJyb3VuZC5ndWVzc2VzLnB1c2gobmV3Z3Vlc3MpO1xyXG4gICAgICAgIHNldEhpc3RvcnkobmV3aGlzdG9yeSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQoKSB7XHJcbiAgICAgICAgaWYgKCFnYW1lT3B0aW9ucy5jbGlwcnVsZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjb3B5VGV4dCA9IFwiV29yZCBNYXN0ZXJtaW5kXFxuaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20vXFxuXCI7XHJcbiAgICAgICAgZm9yIChsZXQgcyA9IDA7IHMgPCBoaXN0b3J5Lmxlbmd0aDsgcysrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpID0gaGlzdG9yeVtzXTtcclxuICAgICAgICAgICAgaWYgKGdhbWVPcHRpb25zLmNsaXBydWxlID09PSAnYWxsJyB8fCBzID09PSBoaXN0b3J5Lmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChnYW1lT3B0aW9ucy5jbGlwcnVsZSAhPT0gJ3JvdW5kJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvcHlUZXh0ICs9IGBTZXQgJHtzKzF9OiAke3NpLm51bWd1ZXNzZXN9IGd1ZXNzZXNcXG5gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHNpLnJvdW5kcy5sZW5ndGg7IHIrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJpID0gc2kucm91bmRzW3JdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT3B0aW9ucy5jbGlwcnVsZSAhPT0gJ3JvdW5kJyB8fCByID09PSBzaS5yb3VuZHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3B5VGV4dCA9IGAke2NvcHlUZXh0fVJvdW5kICR7cisxfTogJHtyaS5ndWVzc2VzLmxlbmd0aH0gZ3Vlc3Nlc1xcbmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGcgPSAwOyBnIDwgcmkuZ3Vlc3Nlcy5sZW5ndGg7IGcrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2kgPSByaS5ndWVzc2VzW2ddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29weVRleHQgKz0gYCR7Z2kuZ3Vlc3N9OlxcbmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBsID0gMDsgbCA8IGdpLmxldHRlcmluZm8ubGVuZ3RoOyBsKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaSA9IGdpLmxldHRlcmluZm9bbF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpLnJlc3VsdCA9PT0gJ0MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlUZXh0ID0gY29weVRleHQgKyBcIvCfn6lcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxpLnJlc3VsdCA9PT0gJ0knKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlUZXh0ID0gY29weVRleHQgKyBcIvCfn6hcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3B5VGV4dCA9IGNvcHlUZXh0ICsgXCLirJxcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3B5VGV4dCA9IGNvcHlUZXh0ICsgXCJcXG5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb3B5VGV4dCk7XHJcbiAgICAgICAgYWxlcnQoXCJDbGlwYm9hcmQgdXBkYXRlZFwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhpbnRzaGlkZGVuKGNoZWNrd29yZCkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBoaWRlaGludHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhpZGV3b3JkID0gaGlkZWhpbnRzW2luZGV4XTtcclxuICAgICAgICAgICAgaWYgKGhpZGV3b3JkID09PSBjaGVja3dvcmQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUVudHJ5KGluZGV4KSB7XHJcbiAgICAgICAgaWYgKCFoaW50c2hpZGRlbihndWVzc2VzW2luZGV4XSkpIHtcclxuICAgICAgICAgICAgbGV0IG5ld2hpZGVoaW50cyA9IFsuLi5oaWRlaGludHNdO1xyXG4gICAgICAgICAgICBuZXdoaWRlaGludHMucHVzaChndWVzc2VzW2luZGV4XSk7XHJcbiAgICAgICAgICAgIHNldEhpZGVoaW50cyhuZXdoaWRlaGludHMpOyAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgSW5pdGlhbEluZm8gPSA8ZGl2IGNsYXNzTmFtZT1cIk91dGVydGFibGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoIEFsaWduTGVmdFwiPlxyXG4gICAgICAgICAgICA8cD57Z2FtZU9wdGlvbnMubGVuTWlufS17Z2FtZU9wdGlvbnMubGVuTWF4fSBsZXR0ZXIgd29yZHMgcGVyIHNldC48L3A+XHJcbiAgICAgICAgICAgIDxwPkd1ZXNzZXMgdGhpcyB3b3JkOiB7Z3Vlc3Nlcy5sZW5ndGh9PC9wPlxyXG4gICAgICAgICAgICA8cD5HdWVzc2VzIHRoaXMgc2V0OiB7c2V0R3Vlc3NDb3VudH08L3A+XHJcbiAgICAgICAgICAgIHtzZXRTb2x2ZUNvdW50cy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgPHA+Tm8gY29tcGxldGVkIHNldHMgeWV0PC9wPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPHA+R3Vlc3NlcyBmb3IgY29tcGxldGVkIHNldHM6IHtzZXRTb2x2ZUNvdW50cy5tYXAobnVtID0+ICg8c3BhbiBrZXk9e251bS50b1N0cmluZygpfT57bnVtfSA8L3NwYW4+KSl9PC9wPn1cclxuICAgICAgICAgICAge2dhbWVPcHRpb25zLm1vZGUgPT09ICdlYXN5JyAmJiA8PjxwPjxzcGFuIGNsYXNzTmFtZT1cIndtRWFzeU1vZGVMZXR0ZXIgd21Db3JyZWN0TGV0dGVyQ29ycmVjdFBvc2l0aW9uXCI+Qzwvc3Bhbj5vcnJlY3QgcG9zaXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ3bUVhc3lNb2RlTGV0dGVyIHdtQ29ycmVjdExldHRlcldyb25nUG9zaXRpb25cIj5JPC9zcGFuPm5jb3JyZWN0IHBvc2l0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwid21FYXN5TW9kZUxldHRlciB3bVdyb25nTGV0dGVyXCI+Vzwvc3Bhbj5yb25nIGxldHRlcjwvcD5cclxuICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgTWFpbkluZm8gPSA8ZGl2IGNsYXNzTmFtZT1cIk91dGVydGFibGVcIj5cclxuICAgICAgICB7LyogSWYgSSBkb24ndCBjaGVjayBnYW1lT3B0aW9ucy5zZXQgdGhlbiBpdCB3aWxsIGNhbGwgcGlja1JhbmRvbVdvcmRcclxuICAgICAgICAgICBldmVuIHdoZW4gdGhlIG9wdGlvbnMgYXJlIG5vdCBzZXQgYW5kIHRoaXMgaXMgbm90IGNhbGxlZCBieSBteVxyXG4gICAgICAgICAgIGNvZGUuIEl0IG11c3QgYmUgc29tZSBraW5kIG9mIHByZS1yZW5kZXJpbmcuXHJcbiAgICAgICAgICovfVxyXG4gICAgICAgIHtnYW1lT3B0aW9ucy5zZXQgJiYgc2VjcmV0V29yZCA9PT0gJycgPyBwaWNrUmFuZG9tV29yZCgpIDogJyd9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICA8aDM+U2VjcmV0IFdvcmQ6IHtzb2x2ZWQgPyBzZWNyZXRXb3JkIDogc2VjcmV0RGlzcGxheX08L2gzPlxyXG4gICAgICAgICAgICB7c2VjcmV0V29yZCA9PT0gJycgP1xyXG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmcgLi4uPC9oMT5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIHNvbHZlZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbXB0Rm9yUGxheUFnYWluXHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIHByb21wdEZvckd1ZXNzfVxyXG4gICAgICAgICAgICB7c29sdmVkID9cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgZ3Vlc3Nlcy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCI+U3RhcnQgZ3Vlc3Npbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCI+S2VlcCBndWVzc2luZzwvcD59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2d1ZXNzZXMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5ObyBndWVzc2VzIHlldDwvcD5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICBkaXNwbGF5R3Vlc3Nlc31cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IEd1ZXNzSW5mbyA9IDxkaXYgY2xhc3NOYW1lPVwiT3V0ZXJ0YWJsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid21HdWVzc0luZm9EaXZcIj5cclxuICAgICAgICAgICAgR3Vlc3MgaW5mbzpcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7Z3Vlc3Nlcy5tYXAoKGcsIGdpKSA9PiAoXHJcbiAgICAgICAgICAgICFoaW50c2hpZGRlbihnKSAmJlxyXG4gICAgICAgICAgICA8U2hvd2luZm8ga2V5PXtgJHtndWVzc2VzLmxlbmd0aCAtIGdpfS4ke2d9YH0gd29yZD17Z30gc2hvd0luc2VydHM9XCJOXCIgc2hvd1N3YXBzPVwiWVwiIHNob3dBbmFncmFtcz1cIllcIiBzaG93RHJvcHM9XCJOXCIgcmVtb3ZlRW50cnk9e3JlbW92ZUVudHJ5fSBlbnRyeUluZGV4PXtnaX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndtR3Vlc3NJbmZvRGl2XCI+XHJcbiAgICAgICAgICAgIEV4cGxhbmF0aW9uOlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiaW5zZXJ0Q291bnRcIj4mbmJzcDsxJm5ic3A7PC9zcGFuPlNob3dzIGluc2VydCBjb3VudHMvbGV0dGVyczwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJzd2FwQ291bnRcIj4mbmJzcDsyJm5ic3A7PC9zcGFuPlNob3dzIHN3YXBzIGNvdW50cy9sZXR0ZXJzPC9saT5cclxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImFuYWdyYW1Db3VudFwiPjM8L3NwYW4+U2hvd3MgYW5hZ3JhbSBjb3VudHMvd29yZHM8L2xpPlxyXG4gICAgICAgICAgICA8bGk+Q2xpY2sgdG8gdG9nZ2xlIGJldHdlZW4gY291bnQgYW5kIGluZm88L2xpPlxyXG4gICAgICAgICAgICA8bGk+Q2xpY2sgdGhlIDxzcGFuIGNsYXNzTmFtZT1cImNsb3NlbWVidXR0b25cIj48L3NwYW4+IHRvIHJlbW92ZSB5b3VyIHdvcmQ8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj47XHJcbiAgICBjb25zdCBCcm93c2VyTGF5b3V0ID0gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+e0luaXRpYWxJbmZvfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+e01haW5JbmZvfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPntHdWVzc0luZm99PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbiAgICBjb25zdCBNb2JpbGVMYXlvdXQgPSA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7IHNldFNob3dJbml0aWFsSW5mbyghc2hvd0luaXRpYWxJbmZvKTsgfSB9PlxyXG4gICAgICAgICAgICAgICAge3Nob3dJbml0aWFsSW5mbyA/IFwiSGlkZVwiIDogXCJTaG93XCJ9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7c2hvd0luaXRpYWxJbmZvICYmIEluaXRpYWxJbmZvfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtNYWluSW5mb31cclxuICAgIDwvZGl2PjtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBXb3JkIE1hc3Rlcm1pbmRcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7IWdhbWVPcHRpb25zLnNldCA/XHJcbiAgICAgICAgICAgIDxHZXRXTU9wdGlvbnMgc2V0R2FtZU9wdGlvbnM9e3NldEdhbWVPcHRpb25zfS8+XHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICBpc01vYmlsZSA/IE1vYmlsZUxheW91dCA6IEJyb3dzZXJMYXlvdXRcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dQbGF5QWdhaW5Qcm9tcHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRtQ29uZ3JhdHNcIj7wn5GP8J+PvSBTb2x2ZWQgaW4ge2d1ZXNzZXMubGVuZ3RofSBtb3ZlcyEg8J+Rj/Cfj708L2g0PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcGlja1JhbmRvbVdvcmQoKTtcclxuICAgICAgICAgICAgICAgIHNldEd1ZXNzKCcnKTtcclxuICAgICAgICAgICAgICAgIHNldEd1ZXNzZXMoW10pO1xyXG4gICAgICAgICAgICAgICAgc2V0SGlkZWhpbnRzKFtdKTtcclxuICAgICAgICAgICAgICAgIHNldFNvbHZlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c2VjcmV0V29yZC5sZW5ndGggPT09IGdhbWVPcHRpb25zLmxlbk1heCA/IFwiU3RhcnQgQW5vdGhlciBTZXQhXCIgOiBcIlN0YXJ0IE5leHQgV29yZFwifVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtjb3B5VG9DbGlwYm9hcmQoKTt9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDbGlwYm9hcmRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93R3Vlc3NQcm9tcHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICBpc01vYmlsZSA/XHJcbiAgICAgICAgICAgIDxTaG93Q3VzdG9tS2V5Ym9hcmRcclxuICAgICAgICAgICAgICAgIGtleWJvYXJkVmVyc2lvbj17a2V5Ym9hcmRWZXJzaW9ufVxyXG4gICAgICAgICAgICAgICAgc2V0S2V5Ym9hcmRWZXJzaW9uPXtzZXRLZXlib2FyZFZlcnNpb259XHJcbiAgICAgICAgICAgICAgICBpbnB1dFdvcmQ9e2d1ZXNzfVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRMZXR0ZXI9e2hhbmRsZUlucHV0TGV0dGVyfVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlTGV0dGVyPXtoYW5kbGVEZWxldGVMZXR0ZXJ9XHJcbiAgICAgICAgICAgICAgICBkaXZVbmRlcktleWJvYXJkPXtkaXZVbmRlcktleWJvYXJkfVxyXG4gICAgICAgICAgICA+PC9TaG93Q3VzdG9tS2V5Ym9hcmQ+ICAgICAgICBcclxuICAgICAgICA6XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCB0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICAgICAge2d1ZXNzZXMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Rmlyc3QgZ3Vlc3M6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5leHQgZ3Vlc3M6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJndWVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2d1ZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGd1ZXNzd29yZCA9IGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCkucmVwbGFjZSggL1xcVy9nICwgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVVcGRhdGVkR3Vlc3MoZ3Vlc3N3b3JkKTtcclxuICAgICAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dHdWVzc2VzVGFibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+e2dhbWVPcHRpb25zLm1vZGUgPT09ICdoYXJkJyA/XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRyVGFibGVcIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5HdWVzczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkNvcnJlY3QgTGV0dGVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+Q29ycmVjdCBQb3NpdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7Z3Vlc3Nlcy5tYXAoKGcsaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2Btb2RlMGd1ZXNzJHtpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2d9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCI+e2NhbGNDb3JyZWN0TGV0dGVyQ291bnQoZyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCI+e2NhbGNDb3JyZWN0UG9zaXRpb25Db3VudChnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0clRhYmxlXCI+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHshc29sdmVkICYmIGd1ZXNzICYmIDx0ciBrZXk9J2Vhc3ltb2RlZ3Vlc3NsZXR0ZXJzJz5cclxuICAgICAgICAgICAgICAgICAgICB7Z3Vlc3Muc3BsaXQoXCJcIikubWFwKChsLGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17YGd1ZXNzbGV0dGVyJHtpfWB9IGNsYXNzTmFtZT17YHdtRWFzeU1vZGVMZXR0ZXIgJHtjc3NFYXN5TW9kZUxldHRlclNpemUoKX1gfT57bH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90cj59XHJcbiAgICAgICAgICAgICAgICB7Z3Vlc3Nlcy5tYXAoKGcsaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2Btb2RlMWd1ZXNzJHtpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Zy5zcGxpdCgnJykubWFwKChsLGopID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2Btb2RlMWd1ZXNzJHtpfWxldHRlciR7an1gfSBjbGFzcz17Y2FsY01vZGUxY3NzKGcsail9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgfTwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwaWNrUmFuZG9tV29yZCgpIHtcclxuICAgICAgICBjb25zdCBuZXdsZW4gPVxyXG4gICAgICAgICAgICBzZWNyZXRXb3JkID9cclxuICAgICAgICAgICAgICAgIHNlY3JldFdvcmQubGVuZ3RoIDwgZ2FtZU9wdGlvbnMubGVuTWluID9cclxuICAgICAgICAgICAgICAgICAgICBnYW1lT3B0aW9ucy5sZW5NaW5cclxuICAgICAgICAgICAgICAgIDogc2VjcmV0V29yZC5sZW5ndGggPj0gZ2FtZU9wdGlvbnMubGVuTWF4ID9cclxuICAgICAgICAgICAgICAgICAgICBnYW1lT3B0aW9ucy5sZW5NaW5cclxuICAgICAgICAgICAgICAgIDogc2VjcmV0V29yZC5sZW5ndGggKyAxXHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIGdhbWVPcHRpb25zLmxlbk1pbjtcclxuICAgICAgICBpZiAobmV3bGVuID09PSBnYW1lT3B0aW9ucy5sZW5NaW4gJiYgc2V0R3Vlc3NDb3VudCAhPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNldFNldEd1ZXNzQ291bnQoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJhc2V1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvRU5BQkxFMks/cmFuZG9tPScgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20vRU5BQkxFMks/cmFuZG9tPSdcclxuICAgICAgICBjb25zdCB1cmwgPSBiYXNldXJsICsgbmV3bGVuLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9td29yZD1KU09OLnBhcnNlKHRleHQpLnRvVXBwZXJDYXNlKCk7IC8vIEl0IGlzIGp1c3QgYSB3b3JkIGluIGRvdWJsZSBxdW90ZXMgYnV0IGl0IGlzIGpzb24gbm9uZXRoZWxlc3NcclxuICAgICAgICAgICAgc2V0U2VjcmV0V29yZChyYW5kb213b3JkKTtcclxuICAgICAgICAgICAgc2V0U2VjcmV0RGlzcGxheShyYW5kb213b3JkLnNwbGl0KFwiXCIpLm1hcCgoKT0+KFwiKlwiKSkpO1xyXG4gICAgICAgICAgICBhZGRSb3VuZFRvSGlzdG9yeShyYW5kb213b3JkKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGNDb3JyZWN0TGV0dGVyQ291bnQoZ3Vlc3NsZXR0ZXJzKSB7XHJcbiAgICAgICAgbGV0IG4gPSAwXHJcbiAgICAgICAgY29uc3QgYWxwaGFiZXQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonXHJcbiAgICAgICAgZm9yKGxldCBsZXR0ZXIgb2YgYWxwaGFiZXQpIHtcclxuICAgICAgICAgICAgbGV0IHggPSBzZWNyZXRXb3JkLnNwbGl0KGxldHRlcikubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICBsZXQgeSA9IGd1ZXNzbGV0dGVycy5zcGxpdChsZXR0ZXIpLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgbiA9IG4gKyAoeCA8IHkgPyB4IDogeSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjQ29ycmVjdFBvc2l0aW9uQ291bnQoZ3Vlc3NsZXR0ZXJzKSB7XHJcbiAgICAgICAgbGV0IG4gPSAwXHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8c2VjcmV0V29yZC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBuID0gbiArIChzZWNyZXRXb3JkW2ldID09PSBndWVzc2xldHRlcnNbaV0gPyAxIDogMClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjTGV0dGVyUmVzdWx0KGd1ZXNzTGV0dGVycywgZ3Vlc3NMZXR0ZXJJbmRleCkge1xyXG4gICAgICAgIGxldCBsZXR0ZXIgPSBndWVzc0xldHRlcnNbZ3Vlc3NMZXR0ZXJJbmRleF07XHJcbiAgICAgICAgLy8gZyBpcyB0aGUgd2hvZSBndWVzcywgaiBpcyB0aGUgbGV0dGVyIGluZGV4IGZvciB3aGljaCB3ZSB3YW50IHRoZSBjc3Mgc3R5bGUgbmFtZVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IHNlY3JldFdvcmRbZ3Vlc3NMZXR0ZXJJbmRleF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiQ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VjcmV0V29yZC5pbmRleE9mKGxldHRlcikgPiAtMSkge1xyXG4gICAgICAgICAgICAvLyB0aGUgZ3Vlc3MgbGV0dGVyIGlzIGluIHRoZSBzZWNyZXQgd29yZCBhbmQgaXMgbm90IGluIHRoZSByaWdodCBzcG90XHJcbiAgICAgICAgICAgIC8vIGhhcyBpdCBhbHJlYWR5IGJlZW4gY291bnRlZCBlYXJsaWVyIHRob3VnaD9cclxuICAgICAgICAgICAgLy8gd2lsbCBpdCBiZSBjb3VudGVkIGxhdGVyIGFzIGNvcnJlY3QgbGV0dGVyIGNvcnJlY3Qgc3BvdD9cclxuICAgICAgICAgICAgbGV0IG5leHRqc3RhcnQgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlY3JldFdvcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZWNyZXRXb3JkW2ldID09PSBsZXR0ZXIgJiYgZ3Vlc3NMZXR0ZXJzW2ldICE9PSBsZXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgamZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqID0gbmV4dGpzdGFydDsgIWpmb3VuZCAmJiBqIDwgc2VjcmV0V29yZC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3Vlc3NMZXR0ZXJzW2pdID09PSBsZXR0ZXIgJiYgc2VjcmV0V29yZFtqXSAhPT0gbGV0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gZ3Vlc3NMZXR0ZXJJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIklcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0anN0YXJ0ID0gaiArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiV1wiO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2FsY01vZGUxY3NzKGd1ZXNzTGV0dGVycyxndWVzc0xldHRlckluZGV4KSB7XHJcbiAgICAgICAgbGV0IHNpemUgPSBjc3NFYXN5TW9kZUxldHRlclNpemUoKTtcclxuICAgICAgICBsZXQgbGV0dGVyUmVzdWx0ID0gY2FsY0xldHRlclJlc3VsdChndWVzc0xldHRlcnMsIGd1ZXNzTGV0dGVySW5kZXgpO1xyXG4gICAgICAgIGlmIChsZXR0ZXJSZXN1bHQgPT09ICdDJykge3JldHVybiBcIndtRWFzeU1vZGVMZXR0ZXIgd21Db3JyZWN0TGV0dGVyQ29ycmVjdFBvc2l0aW9uIFwiICsgc2l6ZTt9XHJcbiAgICAgICAgaWYgKGxldHRlclJlc3VsdCA9PT0gJ0knKSB7cmV0dXJuIFwid21FYXN5TW9kZUxldHRlciB3bUNvcnJlY3RMZXR0ZXJXcm9uZ1Bvc2l0aW9uIFwiICsgc2l6ZTt9XHJcbiAgICAgICAgcmV0dXJuIFwid21FYXN5TW9kZUxldHRlciB3bVdyb25nTGV0dGVyIFwiICsgc2l6ZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNzc0Vhc3lNb2RlTGV0dGVyU2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4gKHNlY3JldFdvcmQgJiYgc2VjcmV0V29yZC5sZW5ndGggPiA4ID8gJ3NtYWxsJyA6ICdub3JtYWwnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29yZE1hc3Rlcm1pbmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==