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
              lineNumber: 283,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Correct Letter"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 284,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Correct Position"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 285,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 282,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: guesses.map((g, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: g
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "AlignCenter",
              children: calcCorrectLetterCount(g)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "AlignCenter",
              children: calcCorrectPositionCount(g)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 293,
              columnNumber: 25
            }, this)]
          }, `mode0guess${i}`, true, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 21
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 280,
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
              lineNumber: 304,
              columnNumber: 25
            }, this))
          }, 'easymodeguessletters', false, {
            fileName: _jsxFileName,
            lineNumber: 302,
            columnNumber: 38
          }, this), guesses.map((g, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: g.split('').map((l, j) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              class: calcMode1css(g, j),
              children: l
            }, `mode1guess${i}letter${j}`, false, {
              fileName: _jsxFileName,
              lineNumber: 310,
              columnNumber: 29
            }, this))
          }, `mode1guess${i}`, false, {
            fileName: _jsxFileName,
            lineNumber: 308,
            columnNumber: 21
          }, this))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 279,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vbWFzdGVybWluZC5qcyJdLCJuYW1lcyI6WyJXb3JkTWFzdGVybWluZCIsInNldFdoZXJldG8iLCJnYW1lT3B0aW9ucyIsInNldEdhbWVPcHRpb25zIiwidXNlU3RhdGUiLCJzZXQiLCJsZW5NaW4iLCJsZW5NYXgiLCJtb2RlIiwiaGlzdG9yeSIsInNldEhpc3RvcnkiLCJrZXlib2FyZFZlcnNpb24iLCJzZXRLZXlib2FyZFZlcnNpb24iLCJzZXRTb2x2ZUNvdW50cyIsInNldFNldFNvbHZlQ291bnRzIiwic2V0R3Vlc3NDb3VudCIsInNldFNldEd1ZXNzQ291bnQiLCJzZWNyZXRXb3JkIiwic2V0U2VjcmV0V29yZCIsInNlY3JldERpc3BsYXkiLCJzZXRTZWNyZXREaXNwbGF5IiwiZ3Vlc3MiLCJzZXRHdWVzcyIsImd1ZXNzZXMiLCJzZXRHdWVzc2VzIiwic29sdmVkIiwic2V0U29sdmVkIiwic2hvd0luaXRpYWxJbmZvIiwic2V0U2hvd0luaXRpYWxJbmZvIiwiZGl2VW5kZXJLZXlib2FyZCIsInNob3dEaXZVbmRlcktleWJvYXJkIiwiZGlzcGxheUd1ZXNzZXMiLCJzaG93R3Vlc3Nlc1RhYmxlIiwicHJvbXB0Rm9yR3Vlc3MiLCJzaG93R3Vlc3NQcm9tcHQiLCJwcm9tcHRGb3JQbGF5QWdhaW4iLCJzaG93UGxheUFnYWluUHJvbXB0IiwiaGlkZWhpbnRzIiwic2V0SGlkZWhpbnRzIiwiaGFuZGxlSW5wdXRMZXR0ZXIiLCJsZXR0ZXIiLCJoYW5kbGVVcGRhdGVkR3Vlc3MiLCJoYW5kbGVEZWxldGVMZXR0ZXIiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJndWVzc3dvcmQiLCJhZGRHdWVzc1RvSGlzdG9yeSIsIm5ld1NldEd1ZXNzQ291bnQiLCJhZGRSb3VuZFRvSGlzdG9yeSIsIm5ld3NlY3JldHdvcmQiLCJuZXdoaXN0b3J5IiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwibmV3cm91bmQiLCJuZXdzZXQiLCJyb3VuZHMiLCJudW1ndWVzc2VzIiwicHVzaCIsImN1cnJzZXQiLCJjdXJycm91bmQiLCJndWVzc0xldHRlcnMiLCJBcnJheSIsImZyb20iLCJsZXR0ZXJpbmZvIiwiaSIsImd1ZXNzbGV0dGVyIiwibGV0dGVyUmVzdWx0IiwiY2FsY0xldHRlclJlc3VsdCIsInJlc3VsdCIsIm5ld2d1ZXNzIiwic29sdmVzIiwiY29weVRvQ2xpcGJvYXJkIiwiY29weVRleHQiLCJzIiwic2kiLCJyIiwicmkiLCJnIiwiZ2kiLCJsIiwibGkiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJhbGVydCIsImhpbnRzaGlkZGVuIiwiY2hlY2t3b3JkIiwiaW5kZXgiLCJoaWRld29yZCIsInJlbW92ZUVudHJ5IiwibmV3aGlkZWhpbnRzIiwiSW5pdGlhbEluZm8iLCJtYXAiLCJudW0iLCJ0b1N0cmluZyIsIk1haW5JbmZvIiwicGlja1JhbmRvbVdvcmQiLCJHdWVzc0luZm8iLCJCcm93c2VyTGF5b3V0IiwiTW9iaWxlTGF5b3V0IiwiaXNNb2JpbGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0b1VwcGVyQ2FzZSIsInJlcGxhY2UiLCJjYWxjQ29ycmVjdExldHRlckNvdW50IiwiY2FsY0NvcnJlY3RQb3NpdGlvbkNvdW50Iiwic3BsaXQiLCJjc3NFYXN5TW9kZUxldHRlclNpemUiLCJqIiwiY2FsY01vZGUxY3NzIiwibmV3bGVuIiwiYmFzZXVybCIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsInRleHQiLCJyYW5kb213b3JkIiwiZ3Vlc3NsZXR0ZXJzIiwibiIsImFscGhhYmV0IiwieCIsInkiLCJndWVzc0xldHRlckluZGV4IiwiaW5kZXhPZiIsIm5leHRqc3RhcnQiLCJqZm91bmQiLCJzaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxjQUFjLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBa0I7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QUFQO0FBQ0g7O0FBQ0RHLG9CQUFNLEdBQUcsSUFBVDtBQUNBRCx3QkFBVSxHQUFHakIsQ0FBQyxHQUFHLENBQWpCO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7QUFDSjs7QUFDRCxXQUFPLEdBQVA7QUFDSDs7QUFDRCxXQUFTQyxZQUFULENBQXNCbkQsWUFBdEIsRUFBbUNpRSxnQkFBbkMsRUFBcUQ7QUFDakQsUUFBSUksSUFBSSxHQUFHcEIscUJBQXFCLEVBQWhDO0FBQ0EsUUFBSTNDLFlBQVksR0FBR0MsZ0JBQWdCLENBQUNQLFlBQUQsRUFBZWlFLGdCQUFmLENBQW5DOztBQUNBLFFBQUkzRCxZQUFZLEtBQUssR0FBckIsRUFBMEI7QUFBQyxhQUFPLHFEQUFxRCtELElBQTVEO0FBQWtFOztBQUM3RixRQUFJL0QsWUFBWSxLQUFLLEdBQXJCLEVBQTBCO0FBQUMsYUFBTyxtREFBbUQrRCxJQUExRDtBQUFnRTs7QUFDM0YsV0FBTyxvQ0FBb0NBLElBQTNDO0FBQ0g7O0FBQ0QsV0FBU3BCLHFCQUFULEdBQWlDO0FBQzdCLFdBQVE3RixVQUFVLElBQUlBLFVBQVUsQ0FBQzBCLE1BQVgsR0FBb0IsQ0FBbEMsR0FBc0MsT0FBdEMsR0FBZ0QsUUFBeEQ7QUFDSDtBQUNKLENBNVlEOztHQUFNM0MsYzs7S0FBQUEsYztBQThZTiwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kYTQ1NjZhMDc5NGRmMjBlM2UzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2hvd2luZm8gZnJvbSAnLi4vd2kvc2hvd2luZm8nXHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCdcclxuaW1wb3J0IFNob3dDdXN0b21LZXlib2FyZCBmcm9tICcuLi9zaG93Q3VzdG9tS2V5Ym9hcmQnO1xyXG5pbXBvcnQgR2V0V01PcHRpb25zIGZyb20gJy4vd21vcHRpb25zJztcclxuY29uc3QgV29yZE1hc3Rlcm1pbmQgPSAoe3NldFdoZXJldG99KSA9PiB7XHJcbiAgICBjb25zdCBbZ2FtZU9wdGlvbnMsIHNldEdhbWVPcHRpb25zXSA9IHVzZVN0YXRlKHtzZXQ6ZmFsc2UsIGxlbk1pbjoyLCBsZW5NYXg6OCwgbW9kZTogJ2Vhc3knfSk7XHJcbiAgICBjb25zdCBbaGlzdG9yeSwgc2V0SGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBba2V5Ym9hcmRWZXJzaW9uLCBzZXRLZXlib2FyZFZlcnNpb25dID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbc2V0U29sdmVDb3VudHMsIHNldFNldFNvbHZlQ291bnRzXSA9IHVzZVN0YXRlKFtdKTsgLy8gaG93IG1hbnkgZ3Vlc3NlcyB0byBzb2x2ZSBlYWNoIHNldFxyXG4gICAgY29uc3QgW3NldEd1ZXNzQ291bnQsIHNldFNldEd1ZXNzQ291bnRdID0gdXNlU3RhdGUoMCk7IC8vIHRvdGFsIGd1ZXNzIGNvdW50IGZvciB0aGUgbWluLW1heCB3b3JkIGxlbiBzZXRcclxuICAgIGNvbnN0IFtzZWNyZXRXb3JkLCBzZXRTZWNyZXRXb3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWNyZXREaXNwbGF5LCBzZXRTZWNyZXREaXNwbGF5XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtndWVzcywgc2V0R3Vlc3NdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2d1ZXNzZXMsIHNldEd1ZXNzZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NvbHZlZCwgc2V0U29sdmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93SW5pdGlhbEluZm8sIHNldFNob3dJbml0aWFsSW5mb10gPSB1c2VTdGF0ZSh0cnVlKTsgLy8gc2V0IGluZm8sIGVhc3kgbW9kZSBpbmZvXHJcbiAgICBjb25zdCBkaXZVbmRlcktleWJvYXJkID0gc2hvd0RpdlVuZGVyS2V5Ym9hcmQoKTtcclxuICAgIGNvbnN0IGRpc3BsYXlHdWVzc2VzID0gc2hvd0d1ZXNzZXNUYWJsZSgpO1xyXG4gICAgY29uc3QgcHJvbXB0Rm9yR3Vlc3MgPSBzaG93R3Vlc3NQcm9tcHQoKTtcclxuICAgIGNvbnN0IHByb21wdEZvclBsYXlBZ2FpbiA9IHNob3dQbGF5QWdhaW5Qcm9tcHQoKTtcclxuICAgIGNvbnN0IFtoaWRlaGludHMsIHNldEhpZGVoaW50c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlSW5wdXRMZXR0ZXIobGV0dGVyKSB7XHJcbiAgICAgICAgaGFuZGxlVXBkYXRlZEd1ZXNzKGd1ZXNzICsgbGV0dGVyKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZURlbGV0ZUxldHRlcigpIHtcclxuICAgICAgICBpZiAoZ3Vlc3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzZXRHdWVzcyhndWVzcy5zdWJzdHJpbmcoMCxndWVzcy5sZW5ndGgtMSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNob3dEaXZVbmRlcktleWJvYXJkKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIndtV29yZFVuZGVyS2V5Ym9hcmRcIj4mbmJzcDt7Z3Vlc3N9Jm5ic3A7PC9kaXY+O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVXBkYXRlZEd1ZXNzKGd1ZXNzd29yZCkge1xyXG4gICAgICAgIGlmIChndWVzc3dvcmQubGVuZ3RoID09PSBzZWNyZXRXb3JkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBhZGRHdWVzc1RvSGlzdG9yeShndWVzc3dvcmQpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdTZXRHdWVzc0NvdW50ID0gc2V0R3Vlc3NDb3VudCArIDE7XHJcbiAgICAgICAgICAgIHNldFNldEd1ZXNzQ291bnQobmV3U2V0R3Vlc3NDb3VudCk7XHJcbiAgICAgICAgICAgIHNldEd1ZXNzZXMoW2d1ZXNzd29yZCwgLi4uZ3Vlc3Nlc10pO1xyXG4gICAgICAgICAgICBzZXRHdWVzcygnJyk7XHJcbiAgICAgICAgICAgIGlmIChndWVzc3dvcmQgPT09IHNlY3JldFdvcmQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNldFNvbHZlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWNyZXRXb3JkLmxlbmd0aCA9PT0gZ2FtZU9wdGlvbnMubGVuTWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2V0U29sdmVDb3VudHMoWy4uLnNldFNvbHZlQ291bnRzLCBuZXdTZXRHdWVzc0NvdW50XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRHdWVzcyhndWVzc3dvcmQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFkZFJvdW5kVG9IaXN0b3J5KG5ld3NlY3JldHdvcmQpIHtcclxuICAgICAgICAvLyBoaXN0b3J5IGFycmF5IGJ5IHNldCwgbmV3IHNldHMgYXQgbGFzdCBwb3NpdGlvblxyXG4gICAgICAgIC8vIGVhY2ggc2V0IGlzIGFuIGFycmF5IG9mIHJvdW5kcyAobWluIHRvIG1heCBsZW5ndGgpXHJcbiAgICAgICAgLy8gZWFjaCByb3VuZCBoYXMgc2VjcmV0IHdvcmQgYW5kIGd1ZXNzIGluZm9cclxuICAgICAgICBsZXQgbmV3aGlzdG9yeSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaGlzdG9yeSkpO1xyXG4gICAgICAgIGxldCBuZXdyb3VuZCA9IHtzZWNyZXRXb3JkOiBuZXdzZWNyZXR3b3JkLCBndWVzc2VzOiBbXSwgc29sdmVkOiBmYWxzZX07XHJcbiAgICAgICAgaWYgKG5ld3NlY3JldHdvcmQubGVuZ3RoID09PSBnYW1lT3B0aW9ucy5sZW5NaW4pIHsgLy8gbmV3IHNldFxyXG4gICAgICAgICAgICBsZXQgbmV3c2V0ID0ge3JvdW5kczogW25ld3JvdW5kXSwgbnVtZ3Vlc3NlczogMH07XHJcbiAgICAgICAgICAgIG5ld2hpc3RvcnkucHVzaChuZXdzZXQpO1xyXG4gICAgICAgIH0gZWxzZSB7IC8vIGV4aXN0aW5nIHNldFxyXG4gICAgICAgICAgICBsZXQgY3VycnNldCA9IG5ld2hpc3RvcnlbbmV3aGlzdG9yeS5sZW5ndGgtMV07XHJcbiAgICAgICAgICAgIGN1cnJzZXQucm91bmRzLnB1c2gobmV3cm91bmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRIaXN0b3J5KG5ld2hpc3RvcnkpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWRkR3Vlc3NUb0hpc3RvcnkoZ3Vlc3N3b3JkKSB7XHJcbiAgICAgICAgbGV0IG5ld2hpc3RvcnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGhpc3RvcnkpKTtcclxuICAgICAgICBsZXQgY3VycnNldCA9IG5ld2hpc3RvcnlbbmV3aGlzdG9yeS5sZW5ndGgtMV07XHJcbiAgICAgICAgbGV0IGN1cnJyb3VuZCA9IGN1cnJzZXQucm91bmRzW2N1cnJzZXQucm91bmRzLmxlbmd0aC0xXTtcclxuICAgICAgICBsZXQgZ3Vlc3NMZXR0ZXJzID0gQXJyYXkuZnJvbShndWVzc3dvcmQpO1xyXG4gICAgICAgIGxldCBsZXR0ZXJpbmZvID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBndWVzc0xldHRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZ3Vlc3NsZXR0ZXIgPSBndWVzc0xldHRlcnNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGxldHRlclJlc3VsdCA9IGNhbGNMZXR0ZXJSZXN1bHQoZ3Vlc3NMZXR0ZXJzLCBpKTsgLy8gQywgSSwgb3IgV1xyXG4gICAgICAgICAgICBsZXR0ZXJpbmZvLnB1c2goe2xldHRlcjogZ3Vlc3NsZXR0ZXIsIHJlc3VsdDogbGV0dGVyUmVzdWx0fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBuZXdndWVzcyA9IHtndWVzczogZ3Vlc3N3b3JkLCBsZXR0ZXJpbmZvOiBsZXR0ZXJpbmZvLCBzb2x2ZXM6IGd1ZXNzd29yZCA9PT0gc2VjcmV0V29yZH07XHJcbiAgICAgICAgY3VycnNldC5udW1ndWVzc2VzKys7XHJcbiAgICAgICAgY3VycnJvdW5kLnNvbHZlZCA9IG5ld2d1ZXNzLnNvbHZlcztcclxuICAgICAgICBjdXJycm91bmQuZ3Vlc3Nlcy5wdXNoKG5ld2d1ZXNzKTtcclxuICAgICAgICBzZXRIaXN0b3J5KG5ld2hpc3RvcnkpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY29weVRvQ2xpcGJvYXJkKCkge1xyXG4gICAgICAgIGxldCBjb3B5VGV4dCA9IFwiV29yZCBNYXN0ZXJtaW5kXFxuXCI7XHJcbiAgICAgICAgZm9yIChsZXQgcyA9IDA7IHMgPCBoaXN0b3J5Lmxlbmd0aDsgcysrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpID0gaGlzdG9yeVtzXTtcclxuICAgICAgICAgICAgY29weVRleHQgPSBgJHtjb3B5VGV4dH1TZXQgJHtzKzF9OiAke3NpLm51bWd1ZXNzZXN9IGd1ZXNzZXNcXG5gXHJcbiAgICAgICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgc2kucm91bmRzLmxlbmd0aDsgcisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByaSA9IHNpLnJvdW5kc1tyXTtcclxuICAgICAgICAgICAgICAgIGNvcHlUZXh0ID0gYCR7Y29weVRleHR9Um91bmQgJHtyKzF9OiAke3JpLmd1ZXNzZXMubGVuZ3RofSBndWVzc2VzXFxuYDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGcgPSAwOyBnIDwgcmkuZ3Vlc3Nlcy5sZW5ndGg7IGcrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdpID0gcmkuZ3Vlc3Nlc1tnXTtcclxuICAgICAgICAgICAgICAgICAgICBjb3B5VGV4dCArPSBgJHtnaS5ndWVzc306XFxuYDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBsID0gMDsgbCA8IGdpLmxldHRlcmluZm8ubGVuZ3RoOyBsKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGkgPSBnaS5sZXR0ZXJpbmZvW2xdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGkucmVzdWx0ID09PSAnQycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlUZXh0ID0gY29weVRleHQgKyBcIvCfn6lcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsaS5yZXN1bHQgPT09ICdJJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29weVRleHQgPSBjb3B5VGV4dCArIFwi8J+fqFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29weVRleHQgPSBjb3B5VGV4dCArIFwi4qycXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29weVRleHQgPSBjb3B5VGV4dCArIFwiXFxuXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29weVRleHQpO1xyXG4gICAgICAgIGFsZXJ0KFwiQ2xpcGJvYXJkIHVwZGF0ZWRcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoaW50c2hpZGRlbihjaGVja3dvcmQpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaGlkZWhpbnRzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBoaWRld29yZCA9IGhpZGVoaW50c1tpbmRleF07XHJcbiAgICAgICAgICAgIGlmIChoaWRld29yZCA9PT0gY2hlY2t3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVFbnRyeShpbmRleCkge1xyXG4gICAgICAgIGlmICghaGludHNoaWRkZW4oZ3Vlc3Nlc1tpbmRleF0pKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdoaWRlaGludHMgPSBbLi4uaGlkZWhpbnRzXTtcclxuICAgICAgICAgICAgbmV3aGlkZWhpbnRzLnB1c2goZ3Vlc3Nlc1tpbmRleF0pO1xyXG4gICAgICAgICAgICBzZXRIaWRlaGludHMobmV3aGlkZWhpbnRzKTsgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IEluaXRpYWxJbmZvID0gPGRpdiBjbGFzc05hbWU9XCJPdXRlcnRhYmxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaCBBbGlnbkxlZnRcIj5cclxuICAgICAgICAgICAgPHA+e2dhbWVPcHRpb25zLmxlbk1pbn0te2dhbWVPcHRpb25zLmxlbk1heH0gbGV0dGVyIHdvcmRzIHBlciBzZXQuPC9wPlxyXG4gICAgICAgICAgICA8cD5HdWVzc2VzIHRoaXMgd29yZDoge2d1ZXNzZXMubGVuZ3RofTwvcD5cclxuICAgICAgICAgICAgPHA+R3Vlc3NlcyB0aGlzIHNldDoge3NldEd1ZXNzQ291bnR9PC9wPlxyXG4gICAgICAgICAgICB7c2V0U29sdmVDb3VudHMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgIDxwPk5vIGNvbXBsZXRlZCBzZXRzIHlldDwvcD5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDxwPkd1ZXNzZXMgZm9yIGNvbXBsZXRlZCBzZXRzOiB7c2V0U29sdmVDb3VudHMubWFwKG51bSA9PiAoPHNwYW4ga2V5PXtudW0udG9TdHJpbmcoKX0+e251bX0gPC9zcGFuPikpfTwvcD59XHJcbiAgICAgICAgICAgIHtnYW1lT3B0aW9ucy5tb2RlID09PSAnZWFzeScgJiYgPD48cD48c3BhbiBjbGFzc05hbWU9XCJ3bUVhc3lNb2RlTGV0dGVyIHdtQ29ycmVjdExldHRlckNvcnJlY3RQb3NpdGlvblwiPkM8L3NwYW4+b3JyZWN0IHBvc2l0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwid21FYXN5TW9kZUxldHRlciB3bUNvcnJlY3RMZXR0ZXJXcm9uZ1Bvc2l0aW9uXCI+STwvc3Bhbj5uY29ycmVjdCBwb3NpdGlvbjwvcD5cclxuICAgICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cIndtRWFzeU1vZGVMZXR0ZXIgd21Xcm9uZ0xldHRlclwiPlc8L3NwYW4+cm9uZyBsZXR0ZXI8L3A+XHJcbiAgICAgICAgICAgIDwvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IE1haW5JbmZvID0gPGRpdiBjbGFzc05hbWU9XCJPdXRlcnRhYmxlXCI+XHJcbiAgICAgICAgey8qIElmIEkgZG9uJ3QgY2hlY2sgZ2FtZU9wdGlvbnMuc2V0IHRoZW4gaXQgd2lsbCBjYWxsIHBpY2tSYW5kb21Xb3JkXHJcbiAgICAgICAgICAgZXZlbiB3aGVuIHRoZSBvcHRpb25zIGFyZSBub3Qgc2V0IGFuZCB0aGlzIGlzIG5vdCBjYWxsZWQgYnkgbXlcclxuICAgICAgICAgICBjb2RlLiBJdCBtdXN0IGJlIHNvbWUga2luZCBvZiBwcmUtcmVuZGVyaW5nLlxyXG4gICAgICAgICAqL31cclxuICAgICAgICB7Z2FtZU9wdGlvbnMuc2V0ICYmIHNlY3JldFdvcmQgPT09ICcnID8gcGlja1JhbmRvbVdvcmQoKSA6ICcnfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgPGgzPlNlY3JldCBXb3JkOiB7c29sdmVkID8gc2VjcmV0V29yZCA6IHNlY3JldERpc3BsYXl9PC9oMz5cclxuICAgICAgICAgICAge3NlY3JldFdvcmQgPT09ICcnID9cclxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nIC4uLjwvaDE+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICBzb2x2ZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21wdEZvclBsYXlBZ2FpblxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICBwcm9tcHRGb3JHdWVzc31cclxuICAgICAgICAgICAge3NvbHZlZCA/XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIGd1ZXNzZXMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJBbGlnbkNlbnRlclwiPlN0YXJ0IGd1ZXNzaW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJBbGlnbkNlbnRlclwiPktlZXAgZ3Vlc3Npbmc8L3A+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtndWVzc2VzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+Tm8gZ3Vlc3NlcyB5ZXQ8L3A+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgZGlzcGxheUd1ZXNzZXN9XHJcbiAgICA8L2Rpdj47XHJcbiAgICBjb25zdCBHdWVzc0luZm8gPSA8ZGl2IGNsYXNzTmFtZT1cIk91dGVydGFibGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndtR3Vlc3NJbmZvRGl2XCI+XHJcbiAgICAgICAgICAgIEd1ZXNzIGluZm86XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2d1ZXNzZXMubWFwKChnLCBnaSkgPT4gKFxyXG4gICAgICAgICAgICAhaGludHNoaWRkZW4oZykgJiZcclxuICAgICAgICAgICAgPFNob3dpbmZvIGtleT17YCR7Z3Vlc3Nlcy5sZW5ndGggLSBnaX0uJHtnfWB9IHdvcmQ9e2d9IHNob3dJbnNlcnRzPVwiTlwiIHNob3dTd2Fwcz1cIllcIiBzaG93QW5hZ3JhbXM9XCJZXCIgc2hvd0Ryb3BzPVwiTlwiIHJlbW92ZUVudHJ5PXtyZW1vdmVFbnRyeX0gZW50cnlJbmRleD17Z2l9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3bUd1ZXNzSW5mb0RpdlwiPlxyXG4gICAgICAgICAgICBFeHBsYW5hdGlvbjpcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImluc2VydENvdW50XCI+Jm5ic3A7MSZuYnNwOzwvc3Bhbj5TaG93cyBpbnNlcnQgY291bnRzL2xldHRlcnM8L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwic3dhcENvdW50XCI+Jm5ic3A7MiZuYnNwOzwvc3Bhbj5TaG93cyBzd2FwcyBjb3VudHMvbGV0dGVyczwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJhbmFncmFtQ291bnRcIj4zPC9zcGFuPlNob3dzIGFuYWdyYW0gY291bnRzL3dvcmRzPC9saT5cclxuICAgICAgICAgICAgPGxpPkNsaWNrIHRvIHRvZ2dsZSBiZXR3ZWVuIGNvdW50IGFuZCBpbmZvPC9saT5cclxuICAgICAgICAgICAgPGxpPkNsaWNrIHRoZSA8c3BhbiBjbGFzc05hbWU9XCJjbG9zZW1lYnV0dG9uXCI+PC9zcGFuPiB0byByZW1vdmUgeW91ciB3b3JkPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgQnJvd3NlckxheW91dCA9IDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPntJbml0aWFsSW5mb308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPntNYWluSW5mb308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj57R3Vlc3NJbmZvfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgTW9iaWxlTGF5b3V0ID0gPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4geyBzZXRTaG93SW5pdGlhbEluZm8oIXNob3dJbml0aWFsSW5mbyk7IH0gfT5cclxuICAgICAgICAgICAgICAgIHtzaG93SW5pdGlhbEluZm8gPyBcIkhpZGVcIiA6IFwiU2hvd1wifVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAge3Nob3dJbml0aWFsSW5mbyAmJiBJbml0aWFsSW5mb31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7TWFpbkluZm99XHJcbiAgICA8L2Rpdj47XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJCYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgV29yZCBNYXN0ZXJtaW5kXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgeyFnYW1lT3B0aW9ucy5zZXQgP1xyXG4gICAgICAgICAgICA8R2V0V01PcHRpb25zIHNldEdhbWVPcHRpb25zPXtzZXRHYW1lT3B0aW9uc30vPlxyXG4gICAgICAgIDpcclxuICAgICAgICAgICAgaXNNb2JpbGUgPyBNb2JpbGVMYXlvdXQgOiBCcm93c2VyTGF5b3V0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzaG93UGxheUFnYWluUHJvbXB0KCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0bUNvbmdyYXRzXCI+8J+Rj/Cfj70gU29sdmVkIGluIHtndWVzc2VzLmxlbmd0aH0gbW92ZXMhIPCfkY/wn4+9PC9oND5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHBpY2tSYW5kb21Xb3JkKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRHdWVzcygnJyk7XHJcbiAgICAgICAgICAgICAgICBzZXRHdWVzc2VzKFtdKTtcclxuICAgICAgICAgICAgICAgIHNldEhpZGVoaW50cyhbXSk7XHJcbiAgICAgICAgICAgICAgICBzZXRTb2x2ZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3NlY3JldFdvcmQubGVuZ3RoID09PSBnYW1lT3B0aW9ucy5sZW5NYXggPyBcIlN0YXJ0IEFub3RoZXIgU2V0IVwiIDogXCJTdGFydCBOZXh0IFdvcmRcIn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7Y29weVRvQ2xpcGJvYXJkKCk7fX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2xpcGJvYXJkXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0d1ZXNzUHJvbXB0KCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgaXNNb2JpbGUgP1xyXG4gICAgICAgICAgICA8U2hvd0N1c3RvbUtleWJvYXJkXHJcbiAgICAgICAgICAgICAgICBrZXlib2FyZFZlcnNpb249e2tleWJvYXJkVmVyc2lvbn1cclxuICAgICAgICAgICAgICAgIHNldEtleWJvYXJkVmVyc2lvbj17c2V0S2V5Ym9hcmRWZXJzaW9ufVxyXG4gICAgICAgICAgICAgICAgaW5wdXRXb3JkPXtndWVzc31cclxuICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0TGV0dGVyPXtoYW5kbGVJbnB1dExldHRlcn1cclxuICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZUxldHRlcj17aGFuZGxlRGVsZXRlTGV0dGVyfVxyXG4gICAgICAgICAgICAgICAgZGl2VW5kZXJLZXlib2FyZD17ZGl2VW5kZXJLZXlib2FyZH1cclxuICAgICAgICAgICAgPjwvU2hvd0N1c3RvbUtleWJvYXJkPiAgICAgICAgXHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgdHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgICAgIHtndWVzc2VzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZpcnN0IGd1ZXNzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OZXh0IGd1ZXNzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ3Vlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtndWVzc31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3Vlc3N3b3JkID0gZS50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKS5yZXBsYWNlKCAvXFxXL2cgLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVVwZGF0ZWRHdWVzcyhndWVzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgfSB9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0d1ZXNzZXNUYWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj57Z2FtZU9wdGlvbnMubW9kZSA9PT0gJ2hhcmQnID9cclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidHJUYWJsZVwiPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkd1ZXNzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+Q29ycmVjdCBMZXR0ZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Db3JyZWN0IFBvc2l0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHtndWVzc2VzLm1hcCgoZyxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YG1vZGUwZ3Vlc3Mke2l9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Z308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiQWxpZ25DZW50ZXJcIj57Y2FsY0NvcnJlY3RMZXR0ZXJDb3VudChnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiQWxpZ25DZW50ZXJcIj57Y2FsY0NvcnJlY3RQb3NpdGlvbkNvdW50KGcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA6XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRyVGFibGVcIj5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgeyFzb2x2ZWQgJiYgZ3Vlc3MgJiYgPHRyIGtleT0nZWFzeW1vZGVndWVzc2xldHRlcnMnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtndWVzcy5zcGxpdChcIlwiKS5tYXAoKGwsaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtgZ3Vlc3NsZXR0ZXIke2l9YH0gY2xhc3NOYW1lPXtgd21FYXN5TW9kZUxldHRlciAke2Nzc0Vhc3lNb2RlTGV0dGVyU2l6ZSgpfWB9PntsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3RyPn1cclxuICAgICAgICAgICAgICAgIHtndWVzc2VzLm1hcCgoZyxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YG1vZGUxZ3Vlc3Mke2l9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtnLnNwbGl0KCcnKS5tYXAoKGwsaikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17YG1vZGUxZ3Vlc3Mke2l9bGV0dGVyJHtqfWB9IGNsYXNzPXtjYWxjTW9kZTFjc3MoZyxqKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICB9PC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBpY2tSYW5kb21Xb3JkKCkge1xyXG4gICAgICAgIGNvbnN0IG5ld2xlbiA9XHJcbiAgICAgICAgICAgIHNlY3JldFdvcmQgP1xyXG4gICAgICAgICAgICAgICAgc2VjcmV0V29yZC5sZW5ndGggPCBnYW1lT3B0aW9ucy5sZW5NaW4gP1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVPcHRpb25zLmxlbk1pblxyXG4gICAgICAgICAgICAgICAgOiBzZWNyZXRXb3JkLmxlbmd0aCA+PSBnYW1lT3B0aW9ucy5sZW5NYXggP1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVPcHRpb25zLmxlbk1pblxyXG4gICAgICAgICAgICAgICAgOiBzZWNyZXRXb3JkLmxlbmd0aCArIDFcclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgZ2FtZU9wdGlvbnMubGVuTWluO1xyXG4gICAgICAgIGlmIChuZXdsZW4gPT09IGdhbWVPcHRpb25zLmxlbk1pbiAmJiBzZXRHdWVzc0NvdW50ICE9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0U2V0R3Vlc3NDb3VudCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYmFzZXVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FTkFCTEUySz9yYW5kb209JyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbS9FTkFCTEUySz9yYW5kb209J1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGJhc2V1cmwgKyBuZXdsZW4udG9TdHJpbmcoKTtcclxuICAgICAgICBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpLnRoZW4odGV4dCA9PiB7XHJcbiAgICAgICAgICAgIGxldCByYW5kb213b3JkPUpTT04ucGFyc2UodGV4dCkudG9VcHBlckNhc2UoKTsgLy8gSXQgaXMganVzdCBhIHdvcmQgaW4gZG91YmxlIHF1b3RlcyBidXQgaXQgaXMganNvbiBub25ldGhlbGVzc1xyXG4gICAgICAgICAgICBzZXRTZWNyZXRXb3JkKHJhbmRvbXdvcmQpO1xyXG4gICAgICAgICAgICBzZXRTZWNyZXREaXNwbGF5KHJhbmRvbXdvcmQuc3BsaXQoXCJcIikubWFwKCgpPT4oXCIqXCIpKSk7XHJcbiAgICAgICAgICAgIGFkZFJvdW5kVG9IaXN0b3J5KHJhbmRvbXdvcmQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2FsY0NvcnJlY3RMZXR0ZXJDb3VudChndWVzc2xldHRlcnMpIHtcclxuICAgICAgICBsZXQgbiA9IDBcclxuICAgICAgICBjb25zdCBhbHBoYWJldCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWidcclxuICAgICAgICBmb3IobGV0IGxldHRlciBvZiBhbHBoYWJldCkge1xyXG4gICAgICAgICAgICBsZXQgeCA9IHNlY3JldFdvcmQuc3BsaXQobGV0dGVyKS5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIGxldCB5ID0gZ3Vlc3NsZXR0ZXJzLnNwbGl0KGxldHRlcikubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICBuID0gbiArICh4IDwgeSA/IHggOiB5KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGNDb3JyZWN0UG9zaXRpb25Db3VudChndWVzc2xldHRlcnMpIHtcclxuICAgICAgICBsZXQgbiA9IDBcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTxzZWNyZXRXb3JkLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIG4gPSBuICsgKHNlY3JldFdvcmRbaV0gPT09IGd1ZXNzbGV0dGVyc1tpXSA/IDEgOiAwKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGNMZXR0ZXJSZXN1bHQoZ3Vlc3NMZXR0ZXJzLCBndWVzc0xldHRlckluZGV4KSB7XHJcbiAgICAgICAgbGV0IGxldHRlciA9IGd1ZXNzTGV0dGVyc1tndWVzc0xldHRlckluZGV4XTtcclxuICAgICAgICAvLyBnIGlzIHRoZSB3aG9lIGd1ZXNzLCBqIGlzIHRoZSBsZXR0ZXIgaW5kZXggZm9yIHdoaWNoIHdlIHdhbnQgdGhlIGNzcyBzdHlsZSBuYW1lXHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gc2VjcmV0V29yZFtndWVzc0xldHRlckluZGV4XSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJDXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWNyZXRXb3JkLmluZGV4T2YobGV0dGVyKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIC8vIHRoZSBndWVzcyBsZXR0ZXIgaXMgaW4gdGhlIHNlY3JldCB3b3JkIGFuZCBpcyBub3QgaW4gdGhlIHJpZ2h0IHNwb3RcclxuICAgICAgICAgICAgLy8gaGFzIGl0IGFscmVhZHkgYmVlbiBjb3VudGVkIGVhcmxpZXIgdGhvdWdoP1xyXG4gICAgICAgICAgICAvLyB3aWxsIGl0IGJlIGNvdW50ZWQgbGF0ZXIgYXMgY29ycmVjdCBsZXR0ZXIgY29ycmVjdCBzcG90P1xyXG4gICAgICAgICAgICBsZXQgbmV4dGpzdGFydCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VjcmV0V29yZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlY3JldFdvcmRbaV0gPT09IGxldHRlciAmJiBndWVzc0xldHRlcnNbaV0gIT09IGxldHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBqZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSBuZXh0anN0YXJ0OyAhamZvdW5kICYmIGogPCBzZWNyZXRXb3JkLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChndWVzc0xldHRlcnNbal0gPT09IGxldHRlciAmJiBzZWNyZXRXb3JkW2pdICE9PSBsZXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID09PSBndWVzc0xldHRlckluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiSVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgamZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRqc3RhcnQgPSBqICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJXXCI7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjYWxjTW9kZTFjc3MoZ3Vlc3NMZXR0ZXJzLGd1ZXNzTGV0dGVySW5kZXgpIHtcclxuICAgICAgICBsZXQgc2l6ZSA9IGNzc0Vhc3lNb2RlTGV0dGVyU2l6ZSgpO1xyXG4gICAgICAgIGxldCBsZXR0ZXJSZXN1bHQgPSBjYWxjTGV0dGVyUmVzdWx0KGd1ZXNzTGV0dGVycywgZ3Vlc3NMZXR0ZXJJbmRleCk7XHJcbiAgICAgICAgaWYgKGxldHRlclJlc3VsdCA9PT0gJ0MnKSB7cmV0dXJuIFwid21FYXN5TW9kZUxldHRlciB3bUNvcnJlY3RMZXR0ZXJDb3JyZWN0UG9zaXRpb24gXCIgKyBzaXplO31cclxuICAgICAgICBpZiAobGV0dGVyUmVzdWx0ID09PSAnSScpIHtyZXR1cm4gXCJ3bUVhc3lNb2RlTGV0dGVyIHdtQ29ycmVjdExldHRlcldyb25nUG9zaXRpb24gXCIgKyBzaXplO31cclxuICAgICAgICByZXR1cm4gXCJ3bUVhc3lNb2RlTGV0dGVyIHdtV3JvbmdMZXR0ZXIgXCIgKyBzaXplO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3NzRWFzeU1vZGVMZXR0ZXJTaXplKCkge1xyXG4gICAgICAgIHJldHVybiAoc2VjcmV0V29yZCAmJiBzZWNyZXRXb3JkLmxlbmd0aCA+IDggPyAnc21hbGwnIDogJ25vcm1hbCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JkTWFzdGVybWluZDsiXSwic291cmNlUm9vdCI6IiJ9