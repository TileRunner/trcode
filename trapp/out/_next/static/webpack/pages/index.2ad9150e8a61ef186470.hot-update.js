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
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2);
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
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // set info, easy mode info

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
    return gameOptions.mode === 'hard' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "wmWordUnderKeyboard",
      children: ["\xA0", guess, "\xA0"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 47
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

    let copyText = gameOptions.showHeader ? "Word Mastermind\nhttps://tilerunner.herokuapp.com/\n" : "";

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
                  copyText = copyText + gameOptions.ciw.c;
                } else if (li.result === 'I') {
                  copyText = copyText + gameOptions.ciw.i;
                } else {
                  copyText = copyText + gameOptions.ciw.w;
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
    }, undefined), !guesses && !guess ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
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
        children: showInitialInfo ? "Hide Info" : "Show Info"
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

_s(WordMastermind, "zvv9rYHLnBpnh6QRCKGFoPkjqJA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vbWFzdGVybWluZC5qcyJdLCJuYW1lcyI6WyJXb3JkTWFzdGVybWluZCIsInNldFdoZXJldG8iLCJnYW1lT3B0aW9ucyIsInNldEdhbWVPcHRpb25zIiwidXNlU3RhdGUiLCJzZXQiLCJoaXN0b3J5Iiwic2V0SGlzdG9yeSIsImtleWJvYXJkVmVyc2lvbiIsInNldEtleWJvYXJkVmVyc2lvbiIsInNldFNvbHZlQ291bnRzIiwic2V0U2V0U29sdmVDb3VudHMiLCJzZXRHdWVzc0NvdW50Iiwic2V0U2V0R3Vlc3NDb3VudCIsInNlY3JldFdvcmQiLCJzZXRTZWNyZXRXb3JkIiwic2VjcmV0RGlzcGxheSIsInNldFNlY3JldERpc3BsYXkiLCJndWVzcyIsInNldEd1ZXNzIiwiZ3Vlc3NlcyIsInNldEd1ZXNzZXMiLCJzb2x2ZWQiLCJzZXRTb2x2ZWQiLCJzaG93SW5pdGlhbEluZm8iLCJzZXRTaG93SW5pdGlhbEluZm8iLCJkaXZVbmRlcktleWJvYXJkIiwic2hvd0RpdlVuZGVyS2V5Ym9hcmQiLCJkaXNwbGF5R3Vlc3NlcyIsInNob3dHdWVzc2VzVGFibGUiLCJwcm9tcHRGb3JHdWVzcyIsInNob3dHdWVzc1Byb21wdCIsInByb21wdEZvclBsYXlBZ2FpbiIsInNob3dQbGF5QWdhaW5Qcm9tcHQiLCJoaWRlaGludHMiLCJzZXRIaWRlaGludHMiLCJoYW5kbGVJbnB1dExldHRlciIsImxldHRlciIsImhhbmRsZVVwZGF0ZWRHdWVzcyIsImhhbmRsZURlbGV0ZUxldHRlciIsImxlbmd0aCIsInN1YnN0cmluZyIsIm1vZGUiLCJndWVzc3dvcmQiLCJ2YWxpZE9ubHkiLCJpc3ZhbGlkIiwiaXNXb3JkVmFsaWQiLCJhbGVydCIsImFkZEd1ZXNzVG9IaXN0b3J5IiwibmV3U2V0R3Vlc3NDb3VudCIsImxlbk1heCIsImFkZFJvdW5kVG9IaXN0b3J5IiwibmV3c2VjcmV0d29yZCIsIm5ld2hpc3RvcnkiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJuZXdyb3VuZCIsImxlbk1pbiIsIm5ld3NldCIsInJvdW5kcyIsIm51bWd1ZXNzZXMiLCJwdXNoIiwiY3VycnNldCIsImN1cnJyb3VuZCIsImd1ZXNzTGV0dGVycyIsIkFycmF5IiwiZnJvbSIsImxldHRlcmluZm8iLCJpIiwiZ3Vlc3NsZXR0ZXIiLCJsZXR0ZXJSZXN1bHQiLCJjYWxjTGV0dGVyUmVzdWx0IiwicmVzdWx0IiwibmV3Z3Vlc3MiLCJzb2x2ZXMiLCJjb3B5VG9DbGlwYm9hcmQiLCJjbGlwcnVsZSIsImNvcHlUZXh0Iiwic2hvd0hlYWRlciIsInMiLCJzaSIsInIiLCJyaSIsImciLCJnaSIsImwiLCJsaSIsImNpdyIsImMiLCJ3IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiaGludHNoaWRkZW4iLCJjaGVja3dvcmQiLCJpbmRleCIsImhpZGV3b3JkIiwicmVtb3ZlRW50cnkiLCJuZXdoaWRlaGludHMiLCJJbml0aWFsSW5mbyIsIm1hcCIsIm51bSIsInRvU3RyaW5nIiwiTWFpbkluZm8iLCJwaWNrUmFuZG9tV29yZCIsIkd1ZXNzSW5mbyIsIkJyb3dzZXJMYXlvdXQiLCJNb2JpbGVMYXlvdXQiLCJpc01vYmlsZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvVXBwZXJDYXNlIiwicmVwbGFjZSIsImNhbGNDb3JyZWN0TGV0dGVyQ291bnQiLCJjYWxjQ29ycmVjdFBvc2l0aW9uQ291bnQiLCJzcGxpdCIsImNzc0Vhc3lNb2RlTGV0dGVyU2l6ZSIsImoiLCJjYWxjTW9kZTFjc3MiLCJuZXdsZW4iLCJiYXNldXJsIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwidGV4dCIsInJhbmRvbXdvcmQiLCJndWVzc2xldHRlcnMiLCJuIiwiYWxwaGFiZXQiLCJ4IiwieSIsImd1ZXNzTGV0dGVySW5kZXgiLCJpbmRleE9mIiwibmV4dGpzdGFydCIsImpmb3VuZCIsInNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QixFQUFoQztBQUNBLFFBQUkvQyxZQUFZLEdBQUdDLGdCQUFnQixDQUFDUCxZQUFELEVBQWVxRSxnQkFBZixDQUFuQzs7QUFDQSxRQUFJL0QsWUFBWSxLQUFLLEdBQXJCLEVBQTBCO0FBQUMsYUFBTyxxREFBcURtRSxJQUE1RDtBQUFrRTs7QUFDN0YsUUFBSW5FLFlBQVksS0FBSyxHQUFyQixFQUEwQjtBQUFDLGFBQU8sbURBQW1EbUUsSUFBMUQ7QUFBZ0U7O0FBQzNGLFdBQU8sb0NBQW9DQSxJQUEzQztBQUNIOztBQUNELFdBQVNwQixxQkFBVCxHQUFpQztBQUM3QixXQUFReEcsVUFBVSxJQUFJQSxVQUFVLENBQUMwQixNQUFYLEdBQW9CLENBQWxDLEdBQXNDLE9BQXRDLEdBQWdELFFBQXhEO0FBQ0g7QUFDSixDQTdaRDs7R0FBTXhDLGM7O0tBQUFBLGM7QUErWk4sK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmFkOTE1MGU4YTYxZWYxODY0NzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNob3dpbmZvIGZyb20gJy4uL3dpL3Nob3dpbmZvJ1xyXG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnXHJcbmltcG9ydCBTaG93Q3VzdG9tS2V5Ym9hcmQgZnJvbSAnLi4vc2hvd0N1c3RvbUtleWJvYXJkJztcclxuaW1wb3J0IEdldFdNT3B0aW9ucyBmcm9tICcuL3dtb3B0aW9ucyc7XHJcbmltcG9ydCB7IGlzV29yZFZhbGlkIH0gZnJvbSAnLi4vLi4vbGliL3dvcmRmdW5jdGlvbnMnO1xyXG5jb25zdCBXb3JkTWFzdGVybWluZCA9ICh7c2V0V2hlcmV0b30pID0+IHtcclxuICAgIGNvbnN0IFtnYW1lT3B0aW9ucywgc2V0R2FtZU9wdGlvbnNdID0gdXNlU3RhdGUoe3NldDpmYWxzZX0pO1xyXG4gICAgY29uc3QgW2hpc3RvcnksIHNldEhpc3RvcnldID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2tleWJvYXJkVmVyc2lvbiwgc2V0S2V5Ym9hcmRWZXJzaW9uXSA9IHVzZVN0YXRlKDIpO1xyXG4gICAgY29uc3QgW3NldFNvbHZlQ291bnRzLCBzZXRTZXRTb2x2ZUNvdW50c10gPSB1c2VTdGF0ZShbXSk7IC8vIGhvdyBtYW55IGd1ZXNzZXMgdG8gc29sdmUgZWFjaCBzZXRcclxuICAgIGNvbnN0IFtzZXRHdWVzc0NvdW50LCBzZXRTZXRHdWVzc0NvdW50XSA9IHVzZVN0YXRlKDApOyAvLyB0b3RhbCBndWVzcyBjb3VudCBmb3IgdGhlIG1pbi1tYXggd29yZCBsZW4gc2V0XHJcbiAgICBjb25zdCBbc2VjcmV0V29yZCwgc2V0U2VjcmV0V29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VjcmV0RGlzcGxheSwgc2V0U2VjcmV0RGlzcGxheV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZ3Vlc3MsIHNldEd1ZXNzXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtndWVzc2VzLCBzZXRHdWVzc2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzb2x2ZWQsIHNldFNvbHZlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd0luaXRpYWxJbmZvLCBzZXRTaG93SW5pdGlhbEluZm9dID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBzZXQgaW5mbywgZWFzeSBtb2RlIGluZm9cclxuICAgIGNvbnN0IGRpdlVuZGVyS2V5Ym9hcmQgPSBzaG93RGl2VW5kZXJLZXlib2FyZCgpO1xyXG4gICAgY29uc3QgZGlzcGxheUd1ZXNzZXMgPSBzaG93R3Vlc3Nlc1RhYmxlKCk7XHJcbiAgICBjb25zdCBwcm9tcHRGb3JHdWVzcyA9IHNob3dHdWVzc1Byb21wdCgpO1xyXG4gICAgY29uc3QgcHJvbXB0Rm9yUGxheUFnYWluID0gc2hvd1BsYXlBZ2FpblByb21wdCgpO1xyXG4gICAgY29uc3QgW2hpZGVoaW50cywgc2V0SGlkZWhpbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJbnB1dExldHRlcihsZXR0ZXIpIHtcclxuICAgICAgICBoYW5kbGVVcGRhdGVkR3Vlc3MoZ3Vlc3MgKyBsZXR0ZXIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRGVsZXRlTGV0dGVyKCkge1xyXG4gICAgICAgIGlmIChndWVzcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNldEd1ZXNzKGd1ZXNzLnN1YnN0cmluZygwLGd1ZXNzLmxlbmd0aC0xKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2hvd0RpdlVuZGVyS2V5Ym9hcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdhbWVPcHRpb25zLm1vZGUgPT09ICdoYXJkJyAmJiA8ZGl2IGNsYXNzTmFtZT1cIndtV29yZFVuZGVyS2V5Ym9hcmRcIj4mbmJzcDt7Z3Vlc3N9Jm5ic3A7PC9kaXY+O1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlVXBkYXRlZEd1ZXNzKGd1ZXNzd29yZCkge1xyXG4gICAgICAgIGlmIChndWVzc3dvcmQubGVuZ3RoID09PSBzZWNyZXRXb3JkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZU9wdGlvbnMudmFsaWRPbmx5KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXN2YWxpZCA9IGF3YWl0IGlzV29yZFZhbGlkKGd1ZXNzd29yZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzdmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChgU29ycnksICR7Z3Vlc3N3b3JkfSBpcyBub3QgaW4gbXkgd29yZCBsaXN0LmApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhZGRHdWVzc1RvSGlzdG9yeShndWVzc3dvcmQpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdTZXRHdWVzc0NvdW50ID0gc2V0R3Vlc3NDb3VudCArIDE7XHJcbiAgICAgICAgICAgIHNldFNldEd1ZXNzQ291bnQobmV3U2V0R3Vlc3NDb3VudCk7XHJcbiAgICAgICAgICAgIHNldEd1ZXNzZXMoW2d1ZXNzd29yZCwgLi4uZ3Vlc3Nlc10pO1xyXG4gICAgICAgICAgICBzZXRHdWVzcygnJyk7XHJcbiAgICAgICAgICAgIGlmIChndWVzc3dvcmQgPT09IHNlY3JldFdvcmQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNldFNvbHZlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWNyZXRXb3JkLmxlbmd0aCA9PT0gZ2FtZU9wdGlvbnMubGVuTWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2V0U29sdmVDb3VudHMoWy4uLnNldFNvbHZlQ291bnRzLCBuZXdTZXRHdWVzc0NvdW50XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRHdWVzcyhndWVzc3dvcmQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFkZFJvdW5kVG9IaXN0b3J5KG5ld3NlY3JldHdvcmQpIHtcclxuICAgICAgICAvLyBoaXN0b3J5IGFycmF5IGJ5IHNldCwgbmV3IHNldHMgYXQgbGFzdCBwb3NpdGlvblxyXG4gICAgICAgIC8vIGVhY2ggc2V0IGlzIGFuIGFycmF5IG9mIHJvdW5kcyAobWluIHRvIG1heCBsZW5ndGgpXHJcbiAgICAgICAgLy8gZWFjaCByb3VuZCBoYXMgc2VjcmV0IHdvcmQgYW5kIGd1ZXNzIGluZm9cclxuICAgICAgICBsZXQgbmV3aGlzdG9yeSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaGlzdG9yeSkpO1xyXG4gICAgICAgIGxldCBuZXdyb3VuZCA9IHtzZWNyZXRXb3JkOiBuZXdzZWNyZXR3b3JkLCBndWVzc2VzOiBbXSwgc29sdmVkOiBmYWxzZX07XHJcbiAgICAgICAgaWYgKG5ld3NlY3JldHdvcmQubGVuZ3RoID09PSBnYW1lT3B0aW9ucy5sZW5NaW4pIHsgLy8gbmV3IHNldFxyXG4gICAgICAgICAgICBsZXQgbmV3c2V0ID0ge3JvdW5kczogW25ld3JvdW5kXSwgbnVtZ3Vlc3NlczogMH07XHJcbiAgICAgICAgICAgIG5ld2hpc3RvcnkucHVzaChuZXdzZXQpO1xyXG4gICAgICAgIH0gZWxzZSB7IC8vIGV4aXN0aW5nIHNldFxyXG4gICAgICAgICAgICBsZXQgY3VycnNldCA9IG5ld2hpc3RvcnlbbmV3aGlzdG9yeS5sZW5ndGgtMV07XHJcbiAgICAgICAgICAgIGN1cnJzZXQucm91bmRzLnB1c2gobmV3cm91bmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRIaXN0b3J5KG5ld2hpc3RvcnkpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWRkR3Vlc3NUb0hpc3RvcnkoZ3Vlc3N3b3JkKSB7XHJcbiAgICAgICAgbGV0IG5ld2hpc3RvcnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGhpc3RvcnkpKTtcclxuICAgICAgICBsZXQgY3VycnNldCA9IG5ld2hpc3RvcnlbbmV3aGlzdG9yeS5sZW5ndGgtMV07XHJcbiAgICAgICAgbGV0IGN1cnJyb3VuZCA9IGN1cnJzZXQucm91bmRzW2N1cnJzZXQucm91bmRzLmxlbmd0aC0xXTtcclxuICAgICAgICBsZXQgZ3Vlc3NMZXR0ZXJzID0gQXJyYXkuZnJvbShndWVzc3dvcmQpO1xyXG4gICAgICAgIGxldCBsZXR0ZXJpbmZvID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBndWVzc0xldHRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZ3Vlc3NsZXR0ZXIgPSBndWVzc0xldHRlcnNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGxldHRlclJlc3VsdCA9IGNhbGNMZXR0ZXJSZXN1bHQoZ3Vlc3NMZXR0ZXJzLCBpKTsgLy8gQywgSSwgb3IgV1xyXG4gICAgICAgICAgICBsZXR0ZXJpbmZvLnB1c2goe2xldHRlcjogZ3Vlc3NsZXR0ZXIsIHJlc3VsdDogbGV0dGVyUmVzdWx0fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBuZXdndWVzcyA9IHtndWVzczogZ3Vlc3N3b3JkLCBsZXR0ZXJpbmZvOiBsZXR0ZXJpbmZvLCBzb2x2ZXM6IGd1ZXNzd29yZCA9PT0gc2VjcmV0V29yZH07XHJcbiAgICAgICAgY3VycnNldC5udW1ndWVzc2VzKys7XHJcbiAgICAgICAgY3VycnJvdW5kLnNvbHZlZCA9IG5ld2d1ZXNzLnNvbHZlcztcclxuICAgICAgICBjdXJycm91bmQuZ3Vlc3Nlcy5wdXNoKG5ld2d1ZXNzKTtcclxuICAgICAgICBzZXRIaXN0b3J5KG5ld2hpc3RvcnkpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY29weVRvQ2xpcGJvYXJkKCkge1xyXG4gICAgICAgIGlmICghZ2FtZU9wdGlvbnMuY2xpcHJ1bGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY29weVRleHQgPSBnYW1lT3B0aW9ucy5zaG93SGVhZGVyID8gXCJXb3JkIE1hc3Rlcm1pbmRcXG5odHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbS9cXG5cIiA6IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgcyA9IDA7IHMgPCBoaXN0b3J5Lmxlbmd0aDsgcysrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpID0gaGlzdG9yeVtzXTtcclxuICAgICAgICAgICAgaWYgKGdhbWVPcHRpb25zLmNsaXBydWxlID09PSAnYWxsJyB8fCBzID09PSBoaXN0b3J5Lmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChnYW1lT3B0aW9ucy5jbGlwcnVsZSAhPT0gJ3JvdW5kJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvcHlUZXh0ICs9IGBTZXQgJHtzKzF9OiAke3NpLm51bWd1ZXNzZXN9IGd1ZXNzZXNcXG5gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHNpLnJvdW5kcy5sZW5ndGg7IHIrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJpID0gc2kucm91bmRzW3JdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lT3B0aW9ucy5jbGlwcnVsZSAhPT0gJ3JvdW5kJyB8fCByID09PSBzaS5yb3VuZHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3B5VGV4dCA9IGAke2NvcHlUZXh0fVJvdW5kICR7cisxfTogJHtyaS5ndWVzc2VzLmxlbmd0aH0gZ3Vlc3Nlc1xcbmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGcgPSAwOyBnIDwgcmkuZ3Vlc3Nlcy5sZW5ndGg7IGcrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2kgPSByaS5ndWVzc2VzW2ddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29weVRleHQgKz0gYCR7Z2kuZ3Vlc3N9OlxcbmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBsID0gMDsgbCA8IGdpLmxldHRlcmluZm8ubGVuZ3RoOyBsKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaSA9IGdpLmxldHRlcmluZm9bbF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpLnJlc3VsdCA9PT0gJ0MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlUZXh0ID0gY29weVRleHQgKyBnYW1lT3B0aW9ucy5jaXcuYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxpLnJlc3VsdCA9PT0gJ0knKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlUZXh0ID0gY29weVRleHQgKyBnYW1lT3B0aW9ucy5jaXcuaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3B5VGV4dCA9IGNvcHlUZXh0ICsgZ2FtZU9wdGlvbnMuY2l3Lnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29weVRleHQgPSBjb3B5VGV4dCArIFwiXFxuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29weVRleHQpO1xyXG4gICAgICAgIGFsZXJ0KFwiQ2xpcGJvYXJkIHVwZGF0ZWRcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoaW50c2hpZGRlbihjaGVja3dvcmQpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaGlkZWhpbnRzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBoaWRld29yZCA9IGhpZGVoaW50c1tpbmRleF07XHJcbiAgICAgICAgICAgIGlmIChoaWRld29yZCA9PT0gY2hlY2t3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVFbnRyeShpbmRleCkge1xyXG4gICAgICAgIGlmICghaGludHNoaWRkZW4oZ3Vlc3Nlc1tpbmRleF0pKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdoaWRlaGludHMgPSBbLi4uaGlkZWhpbnRzXTtcclxuICAgICAgICAgICAgbmV3aGlkZWhpbnRzLnB1c2goZ3Vlc3Nlc1tpbmRleF0pO1xyXG4gICAgICAgICAgICBzZXRIaWRlaGludHMobmV3aGlkZWhpbnRzKTsgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IEluaXRpYWxJbmZvID0gPGRpdiBjbGFzc05hbWU9XCJPdXRlcnRhYmxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaCBBbGlnbkxlZnRcIj5cclxuICAgICAgICAgICAgPHA+e2dhbWVPcHRpb25zLmxlbk1pbn0te2dhbWVPcHRpb25zLmxlbk1heH0gbGV0dGVyIHdvcmRzIHBlciBzZXQuPC9wPlxyXG4gICAgICAgICAgICA8cD5HdWVzc2VzIHRoaXMgd29yZDoge2d1ZXNzZXMubGVuZ3RofTwvcD5cclxuICAgICAgICAgICAgPHA+R3Vlc3NlcyB0aGlzIHNldDoge3NldEd1ZXNzQ291bnR9PC9wPlxyXG4gICAgICAgICAgICB7c2V0U29sdmVDb3VudHMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgIDxwPk5vIGNvbXBsZXRlZCBzZXRzIHlldDwvcD5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDxwPkd1ZXNzZXMgZm9yIGNvbXBsZXRlZCBzZXRzOiB7c2V0U29sdmVDb3VudHMubWFwKG51bSA9PiAoPHNwYW4ga2V5PXtudW0udG9TdHJpbmcoKX0+e251bX0gPC9zcGFuPikpfTwvcD59XHJcbiAgICAgICAgICAgIHtnYW1lT3B0aW9ucy5tb2RlID09PSAnZWFzeScgJiYgPD48cD48c3BhbiBjbGFzc05hbWU9XCJ3bUVhc3lNb2RlTGV0dGVyIHdtQ29ycmVjdExldHRlckNvcnJlY3RQb3NpdGlvblwiPkM8L3NwYW4+b3JyZWN0IHBvc2l0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwid21FYXN5TW9kZUxldHRlciB3bUNvcnJlY3RMZXR0ZXJXcm9uZ1Bvc2l0aW9uXCI+STwvc3Bhbj5uY29ycmVjdCBwb3NpdGlvbjwvcD5cclxuICAgICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cIndtRWFzeU1vZGVMZXR0ZXIgd21Xcm9uZ0xldHRlclwiPlc8L3NwYW4+cm9uZyBsZXR0ZXI8L3A+XHJcbiAgICAgICAgICAgIDwvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IE1haW5JbmZvID0gPGRpdiBjbGFzc05hbWU9XCJPdXRlcnRhYmxlXCI+XHJcbiAgICAgICAgey8qIElmIEkgZG9uJ3QgY2hlY2sgZ2FtZU9wdGlvbnMuc2V0IHRoZW4gaXQgd2lsbCBjYWxsIHBpY2tSYW5kb21Xb3JkXHJcbiAgICAgICAgICAgZXZlbiB3aGVuIHRoZSBvcHRpb25zIGFyZSBub3Qgc2V0IGFuZCB0aGlzIGlzIG5vdCBjYWxsZWQgYnkgbXlcclxuICAgICAgICAgICBjb2RlLiBJdCBtdXN0IGJlIHNvbWUga2luZCBvZiBwcmUtcmVuZGVyaW5nLlxyXG4gICAgICAgICAqL31cclxuICAgICAgICB7Z2FtZU9wdGlvbnMuc2V0ICYmIHNlY3JldFdvcmQgPT09ICcnID8gcGlja1JhbmRvbVdvcmQoKSA6ICcnfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgPGgzPlNlY3JldCBXb3JkOiB7c29sdmVkID8gc2VjcmV0V29yZCA6IHNlY3JldERpc3BsYXl9PC9oMz5cclxuICAgICAgICAgICAge3NlY3JldFdvcmQgPT09ICcnID9cclxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nIC4uLjwvaDE+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICBzb2x2ZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21wdEZvclBsYXlBZ2FpblxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICBwcm9tcHRGb3JHdWVzc31cclxuICAgICAgICAgICAge3NvbHZlZCA/XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIGd1ZXNzZXMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJBbGlnbkNlbnRlclwiPlN0YXJ0IGd1ZXNzaW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJBbGlnbkNlbnRlclwiPktlZXAgZ3Vlc3Npbmc8L3A+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHshZ3Vlc3NlcyAmJiAhZ3Vlc3MgP1xyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPk5vIGd1ZXNzZXMgeWV0PC9wPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIGRpc3BsYXlHdWVzc2VzfVxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgR3Vlc3NJbmZvID0gPGRpdiBjbGFzc05hbWU9XCJPdXRlcnRhYmxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3bUd1ZXNzSW5mb0RpdlwiPlxyXG4gICAgICAgICAgICBHdWVzcyBpbmZvOlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtndWVzc2VzLm1hcCgoZywgZ2kpID0+IChcclxuICAgICAgICAgICAgIWhpbnRzaGlkZGVuKGcpICYmXHJcbiAgICAgICAgICAgIDxTaG93aW5mbyBrZXk9e2Ake2d1ZXNzZXMubGVuZ3RoIC0gZ2l9LiR7Z31gfSB3b3JkPXtnfSBzaG93SW5zZXJ0cz1cIk5cIiBzaG93U3dhcHM9XCJZXCIgc2hvd0FuYWdyYW1zPVwiWVwiIHNob3dEcm9wcz1cIk5cIiByZW1vdmVFbnRyeT17cmVtb3ZlRW50cnl9IGVudHJ5SW5kZXg9e2dpfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid21HdWVzc0luZm9EaXZcIj5cclxuICAgICAgICAgICAgRXhwbGFuYXRpb246XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJpbnNlcnRDb3VudFwiPiZuYnNwOzEmbmJzcDs8L3NwYW4+U2hvd3MgaW5zZXJ0IGNvdW50cy9sZXR0ZXJzPC9saT5cclxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cInN3YXBDb3VudFwiPiZuYnNwOzImbmJzcDs8L3NwYW4+U2hvd3Mgc3dhcHMgY291bnRzL2xldHRlcnM8L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiYW5hZ3JhbUNvdW50XCI+Mzwvc3Bhbj5TaG93cyBhbmFncmFtIGNvdW50cy93b3JkczwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5DbGljayB0byB0b2dnbGUgYmV0d2VlbiBjb3VudCBhbmQgaW5mbzwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5DbGljayB0aGUgPHNwYW4gY2xhc3NOYW1lPVwiY2xvc2VtZWJ1dHRvblwiPjwvc3Bhbj4gdG8gcmVtb3ZlIHlvdXIgd29yZDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IEJyb3dzZXJMYXlvdXQgPSA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj57SW5pdGlhbEluZm99PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj57TWFpbkluZm99PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+e0d1ZXNzSW5mb308L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IE1vYmlsZUxheW91dCA9IDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHsgc2V0U2hvd0luaXRpYWxJbmZvKCFzaG93SW5pdGlhbEluZm8pOyB9IH0+XHJcbiAgICAgICAgICAgICAgICB7c2hvd0luaXRpYWxJbmZvID8gXCJIaWRlIEluZm9cIiA6IFwiU2hvdyBJbmZvXCJ9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7c2hvd0luaXRpYWxJbmZvICYmIEluaXRpYWxJbmZvfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtNYWluSW5mb31cclxuICAgIDwvZGl2PjtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBXb3JkIE1hc3Rlcm1pbmRcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7IWdhbWVPcHRpb25zLnNldCA/XHJcbiAgICAgICAgICAgIDxHZXRXTU9wdGlvbnMgc2V0R2FtZU9wdGlvbnM9e3NldEdhbWVPcHRpb25zfS8+XHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICBpc01vYmlsZSA/IE1vYmlsZUxheW91dCA6IEJyb3dzZXJMYXlvdXRcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dQbGF5QWdhaW5Qcm9tcHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRtQ29uZ3JhdHNcIj7wn5GP8J+PvSBTb2x2ZWQgaW4ge2d1ZXNzZXMubGVuZ3RofSBtb3ZlcyEg8J+Rj/Cfj708L2g0PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcGlja1JhbmRvbVdvcmQoKTtcclxuICAgICAgICAgICAgICAgIHNldEd1ZXNzKCcnKTtcclxuICAgICAgICAgICAgICAgIHNldEd1ZXNzZXMoW10pO1xyXG4gICAgICAgICAgICAgICAgc2V0SGlkZWhpbnRzKFtdKTtcclxuICAgICAgICAgICAgICAgIHNldFNvbHZlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c2VjcmV0V29yZC5sZW5ndGggPT09IGdhbWVPcHRpb25zLmxlbk1heCA/IFwiU3RhcnQgQW5vdGhlciBTZXQhXCIgOiBcIlN0YXJ0IE5leHQgV29yZFwifVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtjb3B5VG9DbGlwYm9hcmQoKTt9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDbGlwYm9hcmRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93R3Vlc3NQcm9tcHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICBpc01vYmlsZSA/XHJcbiAgICAgICAgICAgIDxTaG93Q3VzdG9tS2V5Ym9hcmRcclxuICAgICAgICAgICAgICAgIGtleWJvYXJkVmVyc2lvbj17a2V5Ym9hcmRWZXJzaW9ufVxyXG4gICAgICAgICAgICAgICAgc2V0S2V5Ym9hcmRWZXJzaW9uPXtzZXRLZXlib2FyZFZlcnNpb259XHJcbiAgICAgICAgICAgICAgICBpbnB1dFdvcmQ9e2d1ZXNzfVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRMZXR0ZXI9e2hhbmRsZUlucHV0TGV0dGVyfVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlTGV0dGVyPXtoYW5kbGVEZWxldGVMZXR0ZXJ9XHJcbiAgICAgICAgICAgICAgICBkaXZVbmRlcktleWJvYXJkPXtkaXZVbmRlcktleWJvYXJkfVxyXG4gICAgICAgICAgICA+PC9TaG93Q3VzdG9tS2V5Ym9hcmQ+ICAgICAgICBcclxuICAgICAgICA6XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCB0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICAgICAge2d1ZXNzZXMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Rmlyc3QgZ3Vlc3M6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5leHQgZ3Vlc3M6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJndWVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2d1ZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGd1ZXNzd29yZCA9IGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCkucmVwbGFjZSggL1xcVy9nICwgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVVcGRhdGVkR3Vlc3MoZ3Vlc3N3b3JkKTtcclxuICAgICAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dHdWVzc2VzVGFibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+e2dhbWVPcHRpb25zLm1vZGUgPT09ICdoYXJkJyA/XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRyVGFibGVcIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5HdWVzczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkNvcnJlY3QgTGV0dGVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+Q29ycmVjdCBQb3NpdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7Z3Vlc3Nlcy5tYXAoKGcsaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2Btb2RlMGd1ZXNzJHtpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2d9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCI+e2NhbGNDb3JyZWN0TGV0dGVyQ291bnQoZyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCI+e2NhbGNDb3JyZWN0UG9zaXRpb25Db3VudChnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0clRhYmxlXCI+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHshc29sdmVkICYmIGd1ZXNzICYmIDx0ciBrZXk9J2Vhc3ltb2RlZ3Vlc3NsZXR0ZXJzJz5cclxuICAgICAgICAgICAgICAgICAgICB7Z3Vlc3Muc3BsaXQoXCJcIikubWFwKChsLGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17YGd1ZXNzbGV0dGVyJHtpfWB9IGNsYXNzTmFtZT17YHdtRWFzeU1vZGVMZXR0ZXIgJHtjc3NFYXN5TW9kZUxldHRlclNpemUoKX1gfT57bH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90cj59XHJcbiAgICAgICAgICAgICAgICB7Z3Vlc3Nlcy5tYXAoKGcsaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2Btb2RlMWd1ZXNzJHtpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Zy5zcGxpdCgnJykubWFwKChsLGopID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2Btb2RlMWd1ZXNzJHtpfWxldHRlciR7an1gfSBjbGFzcz17Y2FsY01vZGUxY3NzKGcsail9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgfTwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwaWNrUmFuZG9tV29yZCgpIHtcclxuICAgICAgICBjb25zdCBuZXdsZW4gPVxyXG4gICAgICAgICAgICBzZWNyZXRXb3JkID9cclxuICAgICAgICAgICAgICAgIHNlY3JldFdvcmQubGVuZ3RoIDwgZ2FtZU9wdGlvbnMubGVuTWluID9cclxuICAgICAgICAgICAgICAgICAgICBnYW1lT3B0aW9ucy5sZW5NaW5cclxuICAgICAgICAgICAgICAgIDogc2VjcmV0V29yZC5sZW5ndGggPj0gZ2FtZU9wdGlvbnMubGVuTWF4ID9cclxuICAgICAgICAgICAgICAgICAgICBnYW1lT3B0aW9ucy5sZW5NaW5cclxuICAgICAgICAgICAgICAgIDogc2VjcmV0V29yZC5sZW5ndGggKyAxXHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIGdhbWVPcHRpb25zLmxlbk1pbjtcclxuICAgICAgICBpZiAobmV3bGVuID09PSBnYW1lT3B0aW9ucy5sZW5NaW4gJiYgc2V0R3Vlc3NDb3VudCAhPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNldFNldEd1ZXNzQ291bnQoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJhc2V1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvRU5BQkxFMks/cmFuZG9tPScgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20vRU5BQkxFMks/cmFuZG9tPSdcclxuICAgICAgICBjb25zdCB1cmwgPSBiYXNldXJsICsgbmV3bGVuLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9td29yZD1KU09OLnBhcnNlKHRleHQpLnRvVXBwZXJDYXNlKCk7IC8vIEl0IGlzIGp1c3QgYSB3b3JkIGluIGRvdWJsZSBxdW90ZXMgYnV0IGl0IGlzIGpzb24gbm9uZXRoZWxlc3NcclxuICAgICAgICAgICAgc2V0U2VjcmV0V29yZChyYW5kb213b3JkKTtcclxuICAgICAgICAgICAgc2V0U2VjcmV0RGlzcGxheShyYW5kb213b3JkLnNwbGl0KFwiXCIpLm1hcCgoKT0+KFwiKlwiKSkpO1xyXG4gICAgICAgICAgICBhZGRSb3VuZFRvSGlzdG9yeShyYW5kb213b3JkKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGNDb3JyZWN0TGV0dGVyQ291bnQoZ3Vlc3NsZXR0ZXJzKSB7XHJcbiAgICAgICAgbGV0IG4gPSAwXHJcbiAgICAgICAgY29uc3QgYWxwaGFiZXQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonXHJcbiAgICAgICAgZm9yKGxldCBsZXR0ZXIgb2YgYWxwaGFiZXQpIHtcclxuICAgICAgICAgICAgbGV0IHggPSBzZWNyZXRXb3JkLnNwbGl0KGxldHRlcikubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICBsZXQgeSA9IGd1ZXNzbGV0dGVycy5zcGxpdChsZXR0ZXIpLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgbiA9IG4gKyAoeCA8IHkgPyB4IDogeSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjQ29ycmVjdFBvc2l0aW9uQ291bnQoZ3Vlc3NsZXR0ZXJzKSB7XHJcbiAgICAgICAgbGV0IG4gPSAwXHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8c2VjcmV0V29yZC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBuID0gbiArIChzZWNyZXRXb3JkW2ldID09PSBndWVzc2xldHRlcnNbaV0gPyAxIDogMClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjTGV0dGVyUmVzdWx0KGd1ZXNzTGV0dGVycywgZ3Vlc3NMZXR0ZXJJbmRleCkge1xyXG4gICAgICAgIGxldCBsZXR0ZXIgPSBndWVzc0xldHRlcnNbZ3Vlc3NMZXR0ZXJJbmRleF07XHJcbiAgICAgICAgLy8gZyBpcyB0aGUgd2hvZSBndWVzcywgaiBpcyB0aGUgbGV0dGVyIGluZGV4IGZvciB3aGljaCB3ZSB3YW50IHRoZSBjc3Mgc3R5bGUgbmFtZVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IHNlY3JldFdvcmRbZ3Vlc3NMZXR0ZXJJbmRleF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiQ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VjcmV0V29yZC5pbmRleE9mKGxldHRlcikgPiAtMSkge1xyXG4gICAgICAgICAgICAvLyB0aGUgZ3Vlc3MgbGV0dGVyIGlzIGluIHRoZSBzZWNyZXQgd29yZCBhbmQgaXMgbm90IGluIHRoZSByaWdodCBzcG90XHJcbiAgICAgICAgICAgIC8vIGhhcyBpdCBhbHJlYWR5IGJlZW4gY291bnRlZCBlYXJsaWVyIHRob3VnaD9cclxuICAgICAgICAgICAgLy8gd2lsbCBpdCBiZSBjb3VudGVkIGxhdGVyIGFzIGNvcnJlY3QgbGV0dGVyIGNvcnJlY3Qgc3BvdD9cclxuICAgICAgICAgICAgbGV0IG5leHRqc3RhcnQgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlY3JldFdvcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZWNyZXRXb3JkW2ldID09PSBsZXR0ZXIgJiYgZ3Vlc3NMZXR0ZXJzW2ldICE9PSBsZXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgamZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqID0gbmV4dGpzdGFydDsgIWpmb3VuZCAmJiBqIDwgc2VjcmV0V29yZC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3Vlc3NMZXR0ZXJzW2pdID09PSBsZXR0ZXIgJiYgc2VjcmV0V29yZFtqXSAhPT0gbGV0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gZ3Vlc3NMZXR0ZXJJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIklcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0anN0YXJ0ID0gaiArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiV1wiO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2FsY01vZGUxY3NzKGd1ZXNzTGV0dGVycyxndWVzc0xldHRlckluZGV4KSB7XHJcbiAgICAgICAgbGV0IHNpemUgPSBjc3NFYXN5TW9kZUxldHRlclNpemUoKTtcclxuICAgICAgICBsZXQgbGV0dGVyUmVzdWx0ID0gY2FsY0xldHRlclJlc3VsdChndWVzc0xldHRlcnMsIGd1ZXNzTGV0dGVySW5kZXgpO1xyXG4gICAgICAgIGlmIChsZXR0ZXJSZXN1bHQgPT09ICdDJykge3JldHVybiBcIndtRWFzeU1vZGVMZXR0ZXIgd21Db3JyZWN0TGV0dGVyQ29ycmVjdFBvc2l0aW9uIFwiICsgc2l6ZTt9XHJcbiAgICAgICAgaWYgKGxldHRlclJlc3VsdCA9PT0gJ0knKSB7cmV0dXJuIFwid21FYXN5TW9kZUxldHRlciB3bUNvcnJlY3RMZXR0ZXJXcm9uZ1Bvc2l0aW9uIFwiICsgc2l6ZTt9XHJcbiAgICAgICAgcmV0dXJuIFwid21FYXN5TW9kZUxldHRlciB3bVdyb25nTGV0dGVyIFwiICsgc2l6ZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNzc0Vhc3lNb2RlTGV0dGVyU2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4gKHNlY3JldFdvcmQgJiYgc2VjcmV0V29yZC5sZW5ndGggPiA4ID8gJ3NtYWxsJyA6ICdub3JtYWwnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29yZE1hc3Rlcm1pbmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==