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
    set: false,
    lenMin: 2,
    lenMax: 8,
    mode: 'easy'
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
      lineNumber: 33,
      columnNumber: 16
    }, this);
  }

  function handleUpdatedGuess(guessword) {
    if (guessword.length === secretWord.length) {
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
    let copyText = "Word Mastermind\n";

    for (let s = 0; s < history.length; s++) {
      const si = history[s];
      copyText = `${copyText}Set ${s + 1}: ${si.numguesses} guesses\n`;

      for (let r = 0; r < si.rounds.length; r++) {
        const ri = si.rounds[r];
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
        lineNumber: 131,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Guesses this word: ", guesses.length]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Guesses this set: ", setGuessCount]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 13
      }, undefined), setSolveCounts.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "No completed sets yet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Guesses for completed sets: ", setSolveCounts.map(num => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [num, " "]
        }, num.toString(), true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 76
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 17
      }, undefined), gameOptions.mode === 'easy' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "wmEasyModeLetter wmCorrectLetterCorrectPosition",
            children: "C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 50
          }, undefined), "orrect position"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 47
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "wmEasyModeLetter wmCorrectLetterWrongPosition",
            children: "I"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 20
          }, undefined), "ncorrect position"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "wmEasyModeLetter wmWrongLetter",
            children: "W"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 20
          }, undefined), "rong letter"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 17
        }, undefined)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 129,
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
        lineNumber: 151,
        columnNumber: 13
      }, undefined), secretWord === '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Loading ..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }, undefined) : solved ? promptForPlayAgain : promptForGuess, solved ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }, undefined) : guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "AlignCenter",
        children: "Start guessing"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 21
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "AlignCenter",
        children: "Keep guessing"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }, undefined), guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "trParagraph",
      children: "No guesses yet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }, undefined) : displayGuesses]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 144,
    columnNumber: 22
  }, undefined);

  const GuessInfo = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "Outertable",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "wmGuessInfoDiv",
      children: "Guess info:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 173,
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
      lineNumber: 178,
      columnNumber: 13
    }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "wmGuessInfoDiv",
      children: "Explanation:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "trParagraph",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "insertCount",
          children: "\xA01\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 17
        }, undefined), "Shows insert counts/letters"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "swapCount",
          children: "\xA02\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 17
        }, undefined), "Shows swaps counts/letters"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "anagramCount",
          children: "3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 17
        }, undefined), "Shows anagram counts/words"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Click to toggle between count and info"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["Click the ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "closemebutton"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 27
        }, undefined), " to remove your word"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 172,
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
            lineNumber: 195,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col",
            children: MainInfo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        children: GuessInfo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 191,
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
        lineNumber: 204,
        columnNumber: 13
      }, undefined), showInitialInfo && InitialInfo]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 9
    }, undefined), MainInfo]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 202,
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
          lineNumber: 216,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 13
    }, undefined), !gameOptions.set ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wmoptions__WEBPACK_IMPORTED_MODULE_5__.default, {
      setGameOptions: setGameOptions
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 13
    }, undefined) : react_device_detect__WEBPACK_IMPORTED_MODULE_3__.isMobile ? MobileLayout : BrowserLayout]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 212,
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
        lineNumber: 229,
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
        lineNumber: 230,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          copyToClipboard();
        },
        children: "Clipboard"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 228,
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
      lineNumber: 252,
      columnNumber: 13
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "form-group trParagraph",
      children: [guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "First guess:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 21
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Next guess:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 265,
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
        lineNumber: 267,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 261,
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
              lineNumber: 284,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Correct Letter"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 285,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Correct Position"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: guesses.map((g, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: g
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "AlignCenter",
              children: calcCorrectLetterCount(g)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 293,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "AlignCenter",
              children: calcCorrectPositionCount(g)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 25
            }, this)]
          }, `mode0guess${i}`, true, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 21
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 281,
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
              lineNumber: 305,
              columnNumber: 25
            }, this))
          }, 'easymodeguessletters', false, {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 38
          }, this), guesses.map((g, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: g.split('').map((l, j) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              class: calcMode1css(g, j),
              children: l
            }, `mode1guess${i}letter${j}`, false, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 29
            }, this))
          }, `mode1guess${i}`, false, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 21
          }, this))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 280,
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

_s(WordMastermind, "fkPYq9k/MQcjzTGW6B9J8A2nS8Y=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vbWFzdGVybWluZC5qcyJdLCJuYW1lcyI6WyJXb3JkTWFzdGVybWluZCIsInNldFdoZXJldG8iLCJnYW1lT3B0aW9ucyIsInNldEdhbWVPcHRpb25zIiwidXNlU3RhdGUiLCJzZXQiLCJsZW5NaW4iLCJsZW5NYXgiLCJtb2RlIiwiaGlzdG9yeSIsInNldEhpc3RvcnkiLCJrZXlib2FyZFZlcnNpb24iLCJzZXRLZXlib2FyZFZlcnNpb24iLCJzZXRTb2x2ZUNvdW50cyIsInNldFNldFNvbHZlQ291bnRzIiwic2V0R3Vlc3NDb3VudCIsInNldFNldEd1ZXNzQ291bnQiLCJzZWNyZXRXb3JkIiwic2V0U2VjcmV0V29yZCIsInNlY3JldERpc3BsYXkiLCJzZXRTZWNyZXREaXNwbGF5IiwiZ3Vlc3MiLCJzZXRHdWVzcyIsImd1ZXNzZXMiLCJzZXRHdWVzc2VzIiwic29sdmVkIiwic2V0U29sdmVkIiwic2hvd0luaXRpYWxJbmZvIiwic2V0U2hvd0luaXRpYWxJbmZvIiwiZGl2VW5kZXJLZXlib2FyZCIsInNob3dEaXZVbmRlcktleWJvYXJkIiwiZGlzcGxheUd1ZXNzZXMiLCJzaG93R3Vlc3Nlc1RhYmxlIiwicHJvbXB0Rm9yR3Vlc3MiLCJzaG93R3Vlc3NQcm9tcHQiLCJwcm9tcHRGb3JQbGF5QWdhaW4iLCJzaG93UGxheUFnYWluUHJvbXB0IiwiaGlkZWhpbnRzIiwic2V0SGlkZWhpbnRzIiwiaGFuZGxlSW5wdXRMZXR0ZXIiLCJsZXR0ZXIiLCJoYW5kbGVVcGRhdGVkR3Vlc3MiLCJoYW5kbGVEZWxldGVMZXR0ZXIiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJndWVzc3dvcmQiLCJhZGRHdWVzc1RvSGlzdG9yeSIsIm5ld1NldEd1ZXNzQ291bnQiLCJhZGRSb3VuZFRvSGlzdG9yeSIsIm5ld3NlY3JldHdvcmQiLCJuZXdoaXN0b3J5IiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwibmV3cm91bmQiLCJuZXdzZXQiLCJyb3VuZHMiLCJudW1ndWVzc2VzIiwicHVzaCIsImN1cnJzZXQiLCJjdXJycm91bmQiLCJndWVzc0xldHRlcnMiLCJBcnJheSIsImZyb20iLCJsZXR0ZXJpbmZvIiwiaSIsImd1ZXNzbGV0dGVyIiwibGV0dGVyUmVzdWx0IiwiY2FsY0xldHRlclJlc3VsdCIsInJlc3VsdCIsIm5ld2d1ZXNzIiwic29sdmVzIiwiY29weVRvQ2xpcGJvYXJkIiwiY29weVRleHQiLCJzIiwic2kiLCJyIiwicmkiLCJnIiwiZ2kiLCJsIiwibGkiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJhbGVydCIsImhpbnRzaGlkZGVuIiwiY2hlY2t3b3JkIiwiaW5kZXgiLCJoaWRld29yZCIsInJlbW92ZUVudHJ5IiwibmV3aGlkZWhpbnRzIiwiSW5pdGlhbEluZm8iLCJtYXAiLCJudW0iLCJ0b1N0cmluZyIsIk1haW5JbmZvIiwicGlja1JhbmRvbVdvcmQiLCJHdWVzc0luZm8iLCJCcm93c2VyTGF5b3V0IiwiTW9iaWxlTGF5b3V0IiwiaXNNb2JpbGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0b1VwcGVyQ2FzZSIsInJlcGxhY2UiLCJjYWxjQ29ycmVjdExldHRlckNvdW50IiwiY2FsY0NvcnJlY3RQb3NpdGlvbkNvdW50Iiwic3BsaXQiLCJjc3NFYXN5TW9kZUxldHRlclNpemUiLCJqIiwiY2FsY01vZGUxY3NzIiwibmV3bGVuIiwiYmFzZXVybCIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsInRleHQiLCJyYW5kb213b3JkIiwiZ3Vlc3NsZXR0ZXJzIiwibiIsImFscGhhYmV0IiwieCIsInkiLCJndWVzc0xldHRlckluZGV4IiwiaW5kZXhPZiIsIm5leHRqc3RhcnQiLCJqZm91bmQiLCJzaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxjQUFjLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBa0I7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QVYsRUFBNEI7QUFDeEIsdUJBQU8sR0FBUDtBQUNIOztBQUNERyxvQkFBTSxHQUFHLElBQVQ7QUFDQUQsd0JBQVUsR0FBR2pCLENBQUMsR0FBRyxDQUFqQjtBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBQ0o7O0FBQ0QsV0FBTyxHQUFQO0FBQ0g7O0FBQ0QsV0FBU0MsWUFBVCxDQUFzQm5ELFlBQXRCLEVBQW1DaUUsZ0JBQW5DLEVBQXFEO0FBQ2pELFFBQUlJLElBQUksR0FBR3BCLHFCQUFxQixFQUFoQztBQUNBLFFBQUkzQyxZQUFZLEdBQUdDLGdCQUFnQixDQUFDUCxZQUFELEVBQWVpRSxnQkFBZixDQUFuQzs7QUFDQSxRQUFJM0QsWUFBWSxLQUFLLEdBQXJCLEVBQTBCO0FBQUMsYUFBTyxxREFBcUQrRCxJQUE1RDtBQUFrRTs7QUFDN0YsUUFBSS9ELFlBQVksS0FBSyxHQUFyQixFQUEwQjtBQUFDLGFBQU8sbURBQW1EK0QsSUFBMUQ7QUFBZ0U7O0FBQzNGLFdBQU8sb0NBQW9DQSxJQUEzQztBQUNIOztBQUNELFdBQVNwQixxQkFBVCxHQUFpQztBQUM3QixXQUFRN0YsVUFBVSxJQUFJQSxVQUFVLENBQUMwQixNQUFYLEdBQW9CLENBQWxDLEdBQXNDLE9BQXRDLEdBQWdELFFBQXhEO0FBQ0g7QUFDSixDQTdZRDs7R0FBTTNDLGM7O0tBQUFBLGM7QUErWU4sK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmEzZThiN2FiZDk3ZGU3Y2QwZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNob3dpbmZvIGZyb20gJy4uL3dpL3Nob3dpbmZvJ1xyXG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnXHJcbmltcG9ydCBTaG93Q3VzdG9tS2V5Ym9hcmQgZnJvbSAnLi4vc2hvd0N1c3RvbUtleWJvYXJkJztcclxuaW1wb3J0IEdldFdNT3B0aW9ucyBmcm9tICcuL3dtb3B0aW9ucyc7XHJcbmNvbnN0IFdvcmRNYXN0ZXJtaW5kID0gKHtzZXRXaGVyZXRvfSkgPT4ge1xyXG4gICAgY29uc3QgW2dhbWVPcHRpb25zLCBzZXRHYW1lT3B0aW9uc10gPSB1c2VTdGF0ZSh7c2V0OmZhbHNlLCBsZW5NaW46MiwgbGVuTWF4OjgsIG1vZGU6ICdlYXN5J30pO1xyXG4gICAgY29uc3QgW2hpc3RvcnksIHNldEhpc3RvcnldID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2tleWJvYXJkVmVyc2lvbiwgc2V0S2V5Ym9hcmRWZXJzaW9uXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3NldFNvbHZlQ291bnRzLCBzZXRTZXRTb2x2ZUNvdW50c10gPSB1c2VTdGF0ZShbXSk7IC8vIGhvdyBtYW55IGd1ZXNzZXMgdG8gc29sdmUgZWFjaCBzZXRcclxuICAgIGNvbnN0IFtzZXRHdWVzc0NvdW50LCBzZXRTZXRHdWVzc0NvdW50XSA9IHVzZVN0YXRlKDApOyAvLyB0b3RhbCBndWVzcyBjb3VudCBmb3IgdGhlIG1pbi1tYXggd29yZCBsZW4gc2V0XHJcbiAgICBjb25zdCBbc2VjcmV0V29yZCwgc2V0U2VjcmV0V29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VjcmV0RGlzcGxheSwgc2V0U2VjcmV0RGlzcGxheV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZ3Vlc3MsIHNldEd1ZXNzXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtndWVzc2VzLCBzZXRHdWVzc2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzb2x2ZWQsIHNldFNvbHZlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd0luaXRpYWxJbmZvLCBzZXRTaG93SW5pdGlhbEluZm9dID0gdXNlU3RhdGUodHJ1ZSk7IC8vIHNldCBpbmZvLCBlYXN5IG1vZGUgaW5mb1xyXG4gICAgY29uc3QgZGl2VW5kZXJLZXlib2FyZCA9IHNob3dEaXZVbmRlcktleWJvYXJkKCk7XHJcbiAgICBjb25zdCBkaXNwbGF5R3Vlc3NlcyA9IHNob3dHdWVzc2VzVGFibGUoKTtcclxuICAgIGNvbnN0IHByb21wdEZvckd1ZXNzID0gc2hvd0d1ZXNzUHJvbXB0KCk7XHJcbiAgICBjb25zdCBwcm9tcHRGb3JQbGF5QWdhaW4gPSBzaG93UGxheUFnYWluUHJvbXB0KCk7XHJcbiAgICBjb25zdCBbaGlkZWhpbnRzLCBzZXRIaWRlaGludHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUlucHV0TGV0dGVyKGxldHRlcikge1xyXG4gICAgICAgIGhhbmRsZVVwZGF0ZWRHdWVzcyhndWVzcyArIGxldHRlcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVEZWxldGVMZXR0ZXIoKSB7XHJcbiAgICAgICAgaWYgKGd1ZXNzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc2V0R3Vlc3MoZ3Vlc3Muc3Vic3RyaW5nKDAsZ3Vlc3MubGVuZ3RoLTEpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzaG93RGl2VW5kZXJLZXlib2FyZCgpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ3bVdvcmRVbmRlcktleWJvYXJkXCI+Jm5ic3A7e2d1ZXNzfSZuYnNwOzwvZGl2PjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVVwZGF0ZWRHdWVzcyhndWVzc3dvcmQpIHtcclxuICAgICAgICBpZiAoZ3Vlc3N3b3JkLmxlbmd0aCA9PT0gc2VjcmV0V29yZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYWRkR3Vlc3NUb0hpc3RvcnkoZ3Vlc3N3b3JkKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3U2V0R3Vlc3NDb3VudCA9IHNldEd1ZXNzQ291bnQgKyAxO1xyXG4gICAgICAgICAgICBzZXRTZXRHdWVzc0NvdW50KG5ld1NldEd1ZXNzQ291bnQpO1xyXG4gICAgICAgICAgICBzZXRHdWVzc2VzKFtndWVzc3dvcmQsIC4uLmd1ZXNzZXNdKTtcclxuICAgICAgICAgICAgc2V0R3Vlc3MoJycpO1xyXG4gICAgICAgICAgICBpZiAoZ3Vlc3N3b3JkID09PSBzZWNyZXRXb3JkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZXRTb2x2ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VjcmV0V29yZC5sZW5ndGggPT09IGdhbWVPcHRpb25zLmxlbk1heCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNldFNvbHZlQ291bnRzKFsuLi5zZXRTb2x2ZUNvdW50cywgbmV3U2V0R3Vlc3NDb3VudF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0R3Vlc3MoZ3Vlc3N3b3JkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhZGRSb3VuZFRvSGlzdG9yeShuZXdzZWNyZXR3b3JkKSB7XHJcbiAgICAgICAgLy8gaGlzdG9yeSBhcnJheSBieSBzZXQsIG5ldyBzZXRzIGF0IGxhc3QgcG9zaXRpb25cclxuICAgICAgICAvLyBlYWNoIHNldCBpcyBhbiBhcnJheSBvZiByb3VuZHMgKG1pbiB0byBtYXggbGVuZ3RoKVxyXG4gICAgICAgIC8vIGVhY2ggcm91bmQgaGFzIHNlY3JldCB3b3JkIGFuZCBndWVzcyBpbmZvXHJcbiAgICAgICAgbGV0IG5ld2hpc3RvcnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGhpc3RvcnkpKTtcclxuICAgICAgICBsZXQgbmV3cm91bmQgPSB7c2VjcmV0V29yZDogbmV3c2VjcmV0d29yZCwgZ3Vlc3NlczogW10sIHNvbHZlZDogZmFsc2V9O1xyXG4gICAgICAgIGlmIChuZXdzZWNyZXR3b3JkLmxlbmd0aCA9PT0gZ2FtZU9wdGlvbnMubGVuTWluKSB7IC8vIG5ldyBzZXRcclxuICAgICAgICAgICAgbGV0IG5ld3NldCA9IHtyb3VuZHM6IFtuZXdyb3VuZF0sIG51bWd1ZXNzZXM6IDB9O1xyXG4gICAgICAgICAgICBuZXdoaXN0b3J5LnB1c2gobmV3c2V0KTtcclxuICAgICAgICB9IGVsc2UgeyAvLyBleGlzdGluZyBzZXRcclxuICAgICAgICAgICAgbGV0IGN1cnJzZXQgPSBuZXdoaXN0b3J5W25ld2hpc3RvcnkubGVuZ3RoLTFdO1xyXG4gICAgICAgICAgICBjdXJyc2V0LnJvdW5kcy5wdXNoKG5ld3JvdW5kKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SGlzdG9yeShuZXdoaXN0b3J5KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFkZEd1ZXNzVG9IaXN0b3J5KGd1ZXNzd29yZCkge1xyXG4gICAgICAgIGxldCBuZXdoaXN0b3J5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShoaXN0b3J5KSk7XHJcbiAgICAgICAgbGV0IGN1cnJzZXQgPSBuZXdoaXN0b3J5W25ld2hpc3RvcnkubGVuZ3RoLTFdO1xyXG4gICAgICAgIGxldCBjdXJycm91bmQgPSBjdXJyc2V0LnJvdW5kc1tjdXJyc2V0LnJvdW5kcy5sZW5ndGgtMV07XHJcbiAgICAgICAgbGV0IGd1ZXNzTGV0dGVycyA9IEFycmF5LmZyb20oZ3Vlc3N3b3JkKTtcclxuICAgICAgICBsZXQgbGV0dGVyaW5mbyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3Vlc3NMZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGd1ZXNzbGV0dGVyID0gZ3Vlc3NMZXR0ZXJzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBsZXR0ZXJSZXN1bHQgPSBjYWxjTGV0dGVyUmVzdWx0KGd1ZXNzTGV0dGVycywgaSk7IC8vIEMsIEksIG9yIFdcclxuICAgICAgICAgICAgbGV0dGVyaW5mby5wdXNoKHtsZXR0ZXI6IGd1ZXNzbGV0dGVyLCByZXN1bHQ6IGxldHRlclJlc3VsdH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbmV3Z3Vlc3MgPSB7Z3Vlc3M6IGd1ZXNzd29yZCwgbGV0dGVyaW5mbzogbGV0dGVyaW5mbywgc29sdmVzOiBndWVzc3dvcmQgPT09IHNlY3JldFdvcmR9O1xyXG4gICAgICAgIGN1cnJzZXQubnVtZ3Vlc3NlcysrO1xyXG4gICAgICAgIGN1cnJyb3VuZC5zb2x2ZWQgPSBuZXdndWVzcy5zb2x2ZXM7XHJcbiAgICAgICAgY3VycnJvdW5kLmd1ZXNzZXMucHVzaChuZXdndWVzcyk7XHJcbiAgICAgICAgc2V0SGlzdG9yeShuZXdoaXN0b3J5KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNvcHlUb0NsaXBib2FyZCgpIHtcclxuICAgICAgICBsZXQgY29weVRleHQgPSBcIldvcmQgTWFzdGVybWluZFxcblwiO1xyXG4gICAgICAgIGZvciAobGV0IHMgPSAwOyBzIDwgaGlzdG9yeS5sZW5ndGg7IHMrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzaSA9IGhpc3Rvcnlbc107XHJcbiAgICAgICAgICAgIGNvcHlUZXh0ID0gYCR7Y29weVRleHR9U2V0ICR7cysxfTogJHtzaS5udW1ndWVzc2VzfSBndWVzc2VzXFxuYFxyXG4gICAgICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHNpLnJvdW5kcy5sZW5ndGg7IHIrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmkgPSBzaS5yb3VuZHNbcl07XHJcbiAgICAgICAgICAgICAgICBjb3B5VGV4dCA9IGAke2NvcHlUZXh0fVJvdW5kICR7cisxfTogJHtyaS5ndWVzc2VzLmxlbmd0aH0gZ3Vlc3Nlc1xcbmA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBnID0gMDsgZyA8IHJpLmd1ZXNzZXMubGVuZ3RoOyBnKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnaSA9IHJpLmd1ZXNzZXNbZ107XHJcbiAgICAgICAgICAgICAgICAgICAgY29weVRleHQgKz0gYCR7Z2kuZ3Vlc3N9OlxcbmA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbCA9IDA7IGwgPCBnaS5sZXR0ZXJpbmZvLmxlbmd0aDsgbCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpID0gZ2kubGV0dGVyaW5mb1tsXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpLnJlc3VsdCA9PT0gJ0MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3B5VGV4dCA9IGNvcHlUZXh0ICsgXCLwn5+pXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGkucmVzdWx0ID09PSAnSScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlUZXh0ID0gY29weVRleHQgKyBcIvCfn6hcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlUZXh0ID0gY29weVRleHQgKyBcIuKsnFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvcHlUZXh0ID0gY29weVRleHQgKyBcIlxcblwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvcHlUZXh0KTtcclxuICAgICAgICBhbGVydChcIkNsaXBib2FyZCB1cGRhdGVkXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGludHNoaWRkZW4oY2hlY2t3b3JkKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGhpZGVoaW50cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgaGlkZXdvcmQgPSBoaWRlaGludHNbaW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoaGlkZXdvcmQgPT09IGNoZWNrd29yZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRW50cnkoaW5kZXgpIHtcclxuICAgICAgICBpZiAoIWhpbnRzaGlkZGVuKGd1ZXNzZXNbaW5kZXhdKSkge1xyXG4gICAgICAgICAgICBsZXQgbmV3aGlkZWhpbnRzID0gWy4uLmhpZGVoaW50c107XHJcbiAgICAgICAgICAgIG5ld2hpZGVoaW50cy5wdXNoKGd1ZXNzZXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgc2V0SGlkZWhpbnRzKG5ld2hpZGVoaW50cyk7ICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBJbml0aWFsSW5mbyA9IDxkaXYgY2xhc3NOYW1lPVwiT3V0ZXJ0YWJsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGggQWxpZ25MZWZ0XCI+XHJcbiAgICAgICAgICAgIDxwPntnYW1lT3B0aW9ucy5sZW5NaW59LXtnYW1lT3B0aW9ucy5sZW5NYXh9IGxldHRlciB3b3JkcyBwZXIgc2V0LjwvcD5cclxuICAgICAgICAgICAgPHA+R3Vlc3NlcyB0aGlzIHdvcmQ6IHtndWVzc2VzLmxlbmd0aH08L3A+XHJcbiAgICAgICAgICAgIDxwPkd1ZXNzZXMgdGhpcyBzZXQ6IHtzZXRHdWVzc0NvdW50fTwvcD5cclxuICAgICAgICAgICAge3NldFNvbHZlQ291bnRzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICA8cD5ObyBjb21wbGV0ZWQgc2V0cyB5ZXQ8L3A+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8cD5HdWVzc2VzIGZvciBjb21wbGV0ZWQgc2V0czoge3NldFNvbHZlQ291bnRzLm1hcChudW0gPT4gKDxzcGFuIGtleT17bnVtLnRvU3RyaW5nKCl9PntudW19IDwvc3Bhbj4pKX08L3A+fVxyXG4gICAgICAgICAgICB7Z2FtZU9wdGlvbnMubW9kZSA9PT0gJ2Vhc3knICYmIDw+PHA+PHNwYW4gY2xhc3NOYW1lPVwid21FYXN5TW9kZUxldHRlciB3bUNvcnJlY3RMZXR0ZXJDb3JyZWN0UG9zaXRpb25cIj5DPC9zcGFuPm9ycmVjdCBwb3NpdGlvbjwvcD5cclxuICAgICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cIndtRWFzeU1vZGVMZXR0ZXIgd21Db3JyZWN0TGV0dGVyV3JvbmdQb3NpdGlvblwiPkk8L3NwYW4+bmNvcnJlY3QgcG9zaXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ3bUVhc3lNb2RlTGV0dGVyIHdtV3JvbmdMZXR0ZXJcIj5XPC9zcGFuPnJvbmcgbGV0dGVyPC9wPlxyXG4gICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbiAgICBjb25zdCBNYWluSW5mbyA9IDxkaXYgY2xhc3NOYW1lPVwiT3V0ZXJ0YWJsZVwiPlxyXG4gICAgICAgIHsvKiBJZiBJIGRvbid0IGNoZWNrIGdhbWVPcHRpb25zLnNldCB0aGVuIGl0IHdpbGwgY2FsbCBwaWNrUmFuZG9tV29yZFxyXG4gICAgICAgICAgIGV2ZW4gd2hlbiB0aGUgb3B0aW9ucyBhcmUgbm90IHNldCBhbmQgdGhpcyBpcyBub3QgY2FsbGVkIGJ5IG15XHJcbiAgICAgICAgICAgY29kZS4gSXQgbXVzdCBiZSBzb21lIGtpbmQgb2YgcHJlLXJlbmRlcmluZy5cclxuICAgICAgICAgKi99XHJcbiAgICAgICAge2dhbWVPcHRpb25zLnNldCAmJiBzZWNyZXRXb3JkID09PSAnJyA/IHBpY2tSYW5kb21Xb3JkKCkgOiAnJ31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgIDxoMz5TZWNyZXQgV29yZDoge3NvbHZlZCA/IHNlY3JldFdvcmQgOiBzZWNyZXREaXNwbGF5fTwvaDM+XHJcbiAgICAgICAgICAgIHtzZWNyZXRXb3JkID09PSAnJyA/XHJcbiAgICAgICAgICAgICAgICA8aDE+TG9hZGluZyAuLi48L2gxPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgc29sdmVkID9cclxuICAgICAgICAgICAgICAgICAgICBwcm9tcHRGb3JQbGF5QWdhaW5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbXB0Rm9yR3Vlc3N9XHJcbiAgICAgICAgICAgIHtzb2x2ZWQgP1xyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICBndWVzc2VzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiQWxpZ25DZW50ZXJcIj5TdGFydCBndWVzc2luZzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiQWxpZ25DZW50ZXJcIj5LZWVwIGd1ZXNzaW5nPC9wPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7Z3Vlc3Nlcy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPk5vIGd1ZXNzZXMgeWV0PC9wPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIGRpc3BsYXlHdWVzc2VzfVxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgR3Vlc3NJbmZvID0gPGRpdiBjbGFzc05hbWU9XCJPdXRlcnRhYmxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3bUd1ZXNzSW5mb0RpdlwiPlxyXG4gICAgICAgICAgICBHdWVzcyBpbmZvOlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtndWVzc2VzLm1hcCgoZywgZ2kpID0+IChcclxuICAgICAgICAgICAgIWhpbnRzaGlkZGVuKGcpICYmXHJcbiAgICAgICAgICAgIDxTaG93aW5mbyBrZXk9e2Ake2d1ZXNzZXMubGVuZ3RoIC0gZ2l9LiR7Z31gfSB3b3JkPXtnfSBzaG93SW5zZXJ0cz1cIk5cIiBzaG93U3dhcHM9XCJZXCIgc2hvd0FuYWdyYW1zPVwiWVwiIHNob3dEcm9wcz1cIk5cIiByZW1vdmVFbnRyeT17cmVtb3ZlRW50cnl9IGVudHJ5SW5kZXg9e2dpfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid21HdWVzc0luZm9EaXZcIj5cclxuICAgICAgICAgICAgRXhwbGFuYXRpb246XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJpbnNlcnRDb3VudFwiPiZuYnNwOzEmbmJzcDs8L3NwYW4+U2hvd3MgaW5zZXJ0IGNvdW50cy9sZXR0ZXJzPC9saT5cclxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cInN3YXBDb3VudFwiPiZuYnNwOzImbmJzcDs8L3NwYW4+U2hvd3Mgc3dhcHMgY291bnRzL2xldHRlcnM8L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiYW5hZ3JhbUNvdW50XCI+Mzwvc3Bhbj5TaG93cyBhbmFncmFtIGNvdW50cy93b3JkczwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5DbGljayB0byB0b2dnbGUgYmV0d2VlbiBjb3VudCBhbmQgaW5mbzwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5DbGljayB0aGUgPHNwYW4gY2xhc3NOYW1lPVwiY2xvc2VtZWJ1dHRvblwiPjwvc3Bhbj4gdG8gcmVtb3ZlIHlvdXIgd29yZDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IEJyb3dzZXJMYXlvdXQgPSA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj57SW5pdGlhbEluZm99PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj57TWFpbkluZm99PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+e0d1ZXNzSW5mb308L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IE1vYmlsZUxheW91dCA9IDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHsgc2V0U2hvd0luaXRpYWxJbmZvKCFzaG93SW5pdGlhbEluZm8pOyB9IH0+XHJcbiAgICAgICAgICAgICAgICB7c2hvd0luaXRpYWxJbmZvID8gXCJIaWRlXCIgOiBcIlNob3dcIn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIHtzaG93SW5pdGlhbEluZm8gJiYgSW5pdGlhbEluZm99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge01haW5JbmZvfVxyXG4gICAgPC9kaXY+O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIFdvcmQgTWFzdGVybWluZFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHshZ2FtZU9wdGlvbnMuc2V0ID9cclxuICAgICAgICAgICAgPEdldFdNT3B0aW9ucyBzZXRHYW1lT3B0aW9ucz17c2V0R2FtZU9wdGlvbnN9Lz5cclxuICAgICAgICA6XHJcbiAgICAgICAgICAgIGlzTW9iaWxlID8gTW9iaWxlTGF5b3V0IDogQnJvd3NlckxheW91dFxyXG4gICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd1BsYXlBZ2FpblByb21wdCgpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidG1Db25ncmF0c1wiPvCfkY/wn4+9IFNvbHZlZCBpbiB7Z3Vlc3Nlcy5sZW5ndGh9IG1vdmVzISDwn5GP8J+PvTwvaDQ+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBwaWNrUmFuZG9tV29yZCgpO1xyXG4gICAgICAgICAgICAgICAgc2V0R3Vlc3MoJycpO1xyXG4gICAgICAgICAgICAgICAgc2V0R3Vlc3NlcyhbXSk7XHJcbiAgICAgICAgICAgICAgICBzZXRIaWRlaGludHMoW10pO1xyXG4gICAgICAgICAgICAgICAgc2V0U29sdmVkKGZhbHNlKTtcclxuICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzZWNyZXRXb3JkLmxlbmd0aCA9PT0gZ2FtZU9wdGlvbnMubGVuTWF4ID8gXCJTdGFydCBBbm90aGVyIFNldCFcIiA6IFwiU3RhcnQgTmV4dCBXb3JkXCJ9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge2NvcHlUb0NsaXBib2FyZCgpO319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENsaXBib2FyZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dHdWVzc1Byb21wdCgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIGlzTW9iaWxlID9cclxuICAgICAgICAgICAgPFNob3dDdXN0b21LZXlib2FyZFxyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmRWZXJzaW9uPXtrZXlib2FyZFZlcnNpb259XHJcbiAgICAgICAgICAgICAgICBzZXRLZXlib2FyZFZlcnNpb249e3NldEtleWJvYXJkVmVyc2lvbn1cclxuICAgICAgICAgICAgICAgIGlucHV0V29yZD17Z3Vlc3N9XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dExldHRlcj17aGFuZGxlSW5wdXRMZXR0ZXJ9XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGVMZXR0ZXI9e2hhbmRsZURlbGV0ZUxldHRlcn1cclxuICAgICAgICAgICAgICAgIGRpdlVuZGVyS2V5Ym9hcmQ9e2RpdlVuZGVyS2V5Ym9hcmR9XHJcbiAgICAgICAgICAgID48L1Nob3dDdXN0b21LZXlib2FyZD4gICAgICAgIFxyXG4gICAgICAgIDpcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICB7Z3Vlc3Nlcy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5GaXJzdCBndWVzczo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TmV4dCBndWVzczo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImd1ZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Z3Vlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3Vlc3N3b3JkID0gZS50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKS5yZXBsYWNlKCAvXFxXL2cgLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVVwZGF0ZWRHdWVzcyhndWVzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgfSB9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0d1ZXNzZXNUYWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj57Z2FtZU9wdGlvbnMubW9kZSA9PT0gJ2hhcmQnID9cclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidHJUYWJsZVwiPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkd1ZXNzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+Q29ycmVjdCBMZXR0ZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Db3JyZWN0IFBvc2l0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHtndWVzc2VzLm1hcCgoZyxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YG1vZGUwZ3Vlc3Mke2l9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Z308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiQWxpZ25DZW50ZXJcIj57Y2FsY0NvcnJlY3RMZXR0ZXJDb3VudChnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiQWxpZ25DZW50ZXJcIj57Y2FsY0NvcnJlY3RQb3NpdGlvbkNvdW50KGcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA6XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRyVGFibGVcIj5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgeyFzb2x2ZWQgJiYgZ3Vlc3MgJiYgPHRyIGtleT0nZWFzeW1vZGVndWVzc2xldHRlcnMnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtndWVzcy5zcGxpdChcIlwiKS5tYXAoKGwsaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtgZ3Vlc3NsZXR0ZXIke2l9YH0gY2xhc3NOYW1lPXtgd21FYXN5TW9kZUxldHRlciAke2Nzc0Vhc3lNb2RlTGV0dGVyU2l6ZSgpfWB9PntsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3RyPn1cclxuICAgICAgICAgICAgICAgIHtndWVzc2VzLm1hcCgoZyxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YG1vZGUxZ3Vlc3Mke2l9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtnLnNwbGl0KCcnKS5tYXAoKGwsaikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17YG1vZGUxZ3Vlc3Mke2l9bGV0dGVyJHtqfWB9IGNsYXNzPXtjYWxjTW9kZTFjc3MoZyxqKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICB9PC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBpY2tSYW5kb21Xb3JkKCkge1xyXG4gICAgICAgIGNvbnN0IG5ld2xlbiA9XHJcbiAgICAgICAgICAgIHNlY3JldFdvcmQgP1xyXG4gICAgICAgICAgICAgICAgc2VjcmV0V29yZC5sZW5ndGggPCBnYW1lT3B0aW9ucy5sZW5NaW4gP1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVPcHRpb25zLmxlbk1pblxyXG4gICAgICAgICAgICAgICAgOiBzZWNyZXRXb3JkLmxlbmd0aCA+PSBnYW1lT3B0aW9ucy5sZW5NYXggP1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVPcHRpb25zLmxlbk1pblxyXG4gICAgICAgICAgICAgICAgOiBzZWNyZXRXb3JkLmxlbmd0aCArIDFcclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgZ2FtZU9wdGlvbnMubGVuTWluO1xyXG4gICAgICAgIGlmIChuZXdsZW4gPT09IGdhbWVPcHRpb25zLmxlbk1pbiAmJiBzZXRHdWVzc0NvdW50ICE9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0U2V0R3Vlc3NDb3VudCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYmFzZXVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FTkFCTEUySz9yYW5kb209JyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbS9FTkFCTEUySz9yYW5kb209J1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGJhc2V1cmwgKyBuZXdsZW4udG9TdHJpbmcoKTtcclxuICAgICAgICBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpLnRoZW4odGV4dCA9PiB7XHJcbiAgICAgICAgICAgIGxldCByYW5kb213b3JkPUpTT04ucGFyc2UodGV4dCkudG9VcHBlckNhc2UoKTsgLy8gSXQgaXMganVzdCBhIHdvcmQgaW4gZG91YmxlIHF1b3RlcyBidXQgaXQgaXMganNvbiBub25ldGhlbGVzc1xyXG4gICAgICAgICAgICBzZXRTZWNyZXRXb3JkKHJhbmRvbXdvcmQpO1xyXG4gICAgICAgICAgICBzZXRTZWNyZXREaXNwbGF5KHJhbmRvbXdvcmQuc3BsaXQoXCJcIikubWFwKCgpPT4oXCIqXCIpKSk7XHJcbiAgICAgICAgICAgIGFkZFJvdW5kVG9IaXN0b3J5KHJhbmRvbXdvcmQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2FsY0NvcnJlY3RMZXR0ZXJDb3VudChndWVzc2xldHRlcnMpIHtcclxuICAgICAgICBsZXQgbiA9IDBcclxuICAgICAgICBjb25zdCBhbHBoYWJldCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWidcclxuICAgICAgICBmb3IobGV0IGxldHRlciBvZiBhbHBoYWJldCkge1xyXG4gICAgICAgICAgICBsZXQgeCA9IHNlY3JldFdvcmQuc3BsaXQobGV0dGVyKS5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIGxldCB5ID0gZ3Vlc3NsZXR0ZXJzLnNwbGl0KGxldHRlcikubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICBuID0gbiArICh4IDwgeSA/IHggOiB5KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGNDb3JyZWN0UG9zaXRpb25Db3VudChndWVzc2xldHRlcnMpIHtcclxuICAgICAgICBsZXQgbiA9IDBcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTxzZWNyZXRXb3JkLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIG4gPSBuICsgKHNlY3JldFdvcmRbaV0gPT09IGd1ZXNzbGV0dGVyc1tpXSA/IDEgOiAwKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGNMZXR0ZXJSZXN1bHQoZ3Vlc3NMZXR0ZXJzLCBndWVzc0xldHRlckluZGV4KSB7XHJcbiAgICAgICAgbGV0IGxldHRlciA9IGd1ZXNzTGV0dGVyc1tndWVzc0xldHRlckluZGV4XTtcclxuICAgICAgICAvLyBnIGlzIHRoZSB3aG9lIGd1ZXNzLCBqIGlzIHRoZSBsZXR0ZXIgaW5kZXggZm9yIHdoaWNoIHdlIHdhbnQgdGhlIGNzcyBzdHlsZSBuYW1lXHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gc2VjcmV0V29yZFtndWVzc0xldHRlckluZGV4XSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJDXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWNyZXRXb3JkLmluZGV4T2YobGV0dGVyKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIC8vIHRoZSBndWVzcyBsZXR0ZXIgaXMgaW4gdGhlIHNlY3JldCB3b3JkIGFuZCBpcyBub3QgaW4gdGhlIHJpZ2h0IHNwb3RcclxuICAgICAgICAgICAgLy8gaGFzIGl0IGFscmVhZHkgYmVlbiBjb3VudGVkIGVhcmxpZXIgdGhvdWdoP1xyXG4gICAgICAgICAgICAvLyB3aWxsIGl0IGJlIGNvdW50ZWQgbGF0ZXIgYXMgY29ycmVjdCBsZXR0ZXIgY29ycmVjdCBzcG90P1xyXG4gICAgICAgICAgICBsZXQgbmV4dGpzdGFydCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VjcmV0V29yZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlY3JldFdvcmRbaV0gPT09IGxldHRlciAmJiBndWVzc0xldHRlcnNbaV0gIT09IGxldHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBqZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSBuZXh0anN0YXJ0OyAhamZvdW5kICYmIGogPCBzZWNyZXRXb3JkLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChndWVzc0xldHRlcnNbal0gPT09IGxldHRlciAmJiBzZWNyZXRXb3JkW2pdICE9PSBsZXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID09PSBndWVzc0xldHRlckluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiSVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgamZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRqc3RhcnQgPSBqICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJXXCI7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjYWxjTW9kZTFjc3MoZ3Vlc3NMZXR0ZXJzLGd1ZXNzTGV0dGVySW5kZXgpIHtcclxuICAgICAgICBsZXQgc2l6ZSA9IGNzc0Vhc3lNb2RlTGV0dGVyU2l6ZSgpO1xyXG4gICAgICAgIGxldCBsZXR0ZXJSZXN1bHQgPSBjYWxjTGV0dGVyUmVzdWx0KGd1ZXNzTGV0dGVycywgZ3Vlc3NMZXR0ZXJJbmRleCk7XHJcbiAgICAgICAgaWYgKGxldHRlclJlc3VsdCA9PT0gJ0MnKSB7cmV0dXJuIFwid21FYXN5TW9kZUxldHRlciB3bUNvcnJlY3RMZXR0ZXJDb3JyZWN0UG9zaXRpb24gXCIgKyBzaXplO31cclxuICAgICAgICBpZiAobGV0dGVyUmVzdWx0ID09PSAnSScpIHtyZXR1cm4gXCJ3bUVhc3lNb2RlTGV0dGVyIHdtQ29ycmVjdExldHRlcldyb25nUG9zaXRpb24gXCIgKyBzaXplO31cclxuICAgICAgICByZXR1cm4gXCJ3bUVhc3lNb2RlTGV0dGVyIHdtV3JvbmdMZXR0ZXIgXCIgKyBzaXplO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3NzRWFzeU1vZGVMZXR0ZXJTaXplKCkge1xyXG4gICAgICAgIHJldHVybiAoc2VjcmV0V29yZCAmJiBzZWNyZXRXb3JkLmxlbmd0aCA+IDggPyAnc21hbGwnIDogJ25vcm1hbCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JkTWFzdGVybWluZDsiXSwic291cmNlUm9vdCI6IiJ9