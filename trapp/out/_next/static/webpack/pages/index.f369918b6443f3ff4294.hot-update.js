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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vbWFzdGVybWluZC5qcyJdLCJuYW1lcyI6WyJXb3JkTWFzdGVybWluZCIsInNldFdoZXJldG8iLCJnYW1lT3B0aW9ucyIsInNldEdhbWVPcHRpb25zIiwidXNlU3RhdGUiLCJzZXQiLCJoaXN0b3J5Iiwic2V0SGlzdG9yeSIsImtleWJvYXJkVmVyc2lvbiIsInNldEtleWJvYXJkVmVyc2lvbiIsInNldFNvbHZlQ291bnRzIiwic2V0U2V0U29sdmVDb3VudHMiLCJzZXRHdWVzc0NvdW50Iiwic2V0U2V0R3Vlc3NDb3VudCIsInNlY3JldFdvcmQiLCJzZXRTZWNyZXRXb3JkIiwic2VjcmV0RGlzcGxheSIsInNldFNlY3JldERpc3BsYXkiLCJndWVzcyIsInNldEd1ZXNzIiwiZ3Vlc3NlcyIsInNldEd1ZXNzZXMiLCJzb2x2ZWQiLCJzZXRTb2x2ZWQiLCJzaG93SW5pdGlhbEluZm8iLCJzZXRTaG93SW5pdGlhbEluZm8iLCJkaXZVbmRlcktleWJvYXJkIiwic2hvd0RpdlVuZGVyS2V5Ym9hcmQiLCJkaXNwbGF5R3Vlc3NlcyIsInNob3dHdWVzc2VzVGFibGUiLCJwcm9tcHRGb3JHdWVzcyIsInNob3dHdWVzc1Byb21wdCIsInByb21wdEZvclBsYXlBZ2FpbiIsInNob3dQbGF5QWdhaW5Qcm9tcHQiLCJoaWRlaGludHMiLCJzZXRIaWRlaGludHMiLCJoYW5kbGVJbnB1dExldHRlciIsImxldHRlciIsImhhbmRsZVVwZGF0ZWRHdWVzcyIsImhhbmRsZURlbGV0ZUxldHRlciIsImxlbmd0aCIsInN1YnN0cmluZyIsImd1ZXNzd29yZCIsImFkZEd1ZXNzVG9IaXN0b3J5IiwibmV3U2V0R3Vlc3NDb3VudCIsImxlbk1heCIsImFkZFJvdW5kVG9IaXN0b3J5IiwibmV3c2VjcmV0d29yZCIsIm5ld2hpc3RvcnkiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJuZXdyb3VuZCIsImxlbk1pbiIsIm5ld3NldCIsInJvdW5kcyIsIm51bWd1ZXNzZXMiLCJwdXNoIiwiY3VycnNldCIsImN1cnJyb3VuZCIsImd1ZXNzTGV0dGVycyIsIkFycmF5IiwiZnJvbSIsImxldHRlcmluZm8iLCJpIiwiZ3Vlc3NsZXR0ZXIiLCJsZXR0ZXJSZXN1bHQiLCJjYWxjTGV0dGVyUmVzdWx0IiwicmVzdWx0IiwibmV3Z3Vlc3MiLCJzb2x2ZXMiLCJjb3B5VG9DbGlwYm9hcmQiLCJjb3B5VGV4dCIsInMiLCJzaSIsInIiLCJyaSIsImciLCJnaSIsImwiLCJsaSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImFsZXJ0IiwiaGludHNoaWRkZW4iLCJjaGVja3dvcmQiLCJpbmRleCIsImhpZGV3b3JkIiwicmVtb3ZlRW50cnkiLCJuZXdoaWRlaGludHMiLCJJbml0aWFsSW5mbyIsIm1hcCIsIm51bSIsInRvU3RyaW5nIiwibW9kZSIsIk1haW5JbmZvIiwicGlja1JhbmRvbVdvcmQiLCJHdWVzc0luZm8iLCJCcm93c2VyTGF5b3V0IiwiTW9iaWxlTGF5b3V0IiwiaXNNb2JpbGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0b1VwcGVyQ2FzZSIsInJlcGxhY2UiLCJjYWxjQ29ycmVjdExldHRlckNvdW50IiwiY2FsY0NvcnJlY3RQb3NpdGlvbkNvdW50Iiwic3BsaXQiLCJjc3NFYXN5TW9kZUxldHRlclNpemUiLCJqIiwiY2FsY01vZGUxY3NzIiwibmV3bGVuIiwiYmFzZXVybCIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsInRleHQiLCJyYW5kb213b3JkIiwiZ3Vlc3NsZXR0ZXJzIiwibiIsImFscGhhYmV0IiwieCIsInkiLCJndWVzc0xldHRlckluZGV4IiwiaW5kZXhPZiIsIm5leHRqc3RhcnQiLCJqZm91bmQiLCJzaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxjQUFjLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBa0I7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VDtBQUNBRCx3QkFBVSxHQUFHakIsQ0FBQyxHQUFHLENBQWpCO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7QUFDSjs7QUFDRCxXQUFPLEdBQVA7QUFDSDs7QUFDRCxXQUFTQyxZQUFULENBQXNCcEQsWUFBdEIsRUFBbUNrRSxnQkFBbkMsRUFBcUQ7QUFDakQsUUFBSUksSUFBSSxHQUFHcEIscUJBQXFCLEVBQWhDO0FBQ0EsUUFBSTVDLFlBQVksR0FBR0MsZ0JBQWdCLENBQUNQLFlBQUQsRUFBZWtFLGdCQUFmLENBQW5DOztBQUNBLFFBQUk1RCxZQUFZLEtBQUssR0FBckIsRUFBMEI7QUFBQyxhQUFPLHFEQUFxRGdFLElBQTVEO0FBQWtFOztBQUM3RixRQUFJaEUsWUFBWSxLQUFLLEdBQXJCLEVBQTBCO0FBQUMsYUFBTyxtREFBbURnRSxJQUExRDtBQUFnRTs7QUFDM0YsV0FBTyxvQ0FBb0NBLElBQTNDO0FBQ0g7O0FBQ0QsV0FBU3BCLHFCQUFULEdBQWlDO0FBQzdCLFdBQVFoRyxVQUFVLElBQUlBLFVBQVUsQ0FBQzBCLE1BQVgsR0FBb0IsQ0FBbEMsR0FBc0MsT0FBdEMsR0FBZ0QsUUFBeEQ7QUFDSDtBQUNKLENBN1lEOztHQUFNeEMsYzs7S0FBQUEsYztBQStZTiwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMzY5OTE4YjY0NDNmM2ZmNDI5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2hvd2luZm8gZnJvbSAnLi4vd2kvc2hvd2luZm8nXHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCdcclxuaW1wb3J0IFNob3dDdXN0b21LZXlib2FyZCBmcm9tICcuLi9zaG93Q3VzdG9tS2V5Ym9hcmQnO1xyXG5pbXBvcnQgR2V0V01PcHRpb25zIGZyb20gJy4vd21vcHRpb25zJztcclxuY29uc3QgV29yZE1hc3Rlcm1pbmQgPSAoe3NldFdoZXJldG99KSA9PiB7XHJcbiAgICBjb25zdCBbZ2FtZU9wdGlvbnMsIHNldEdhbWVPcHRpb25zXSA9IHVzZVN0YXRlKHtzZXQ6ZmFsc2V9KTtcclxuICAgIGNvbnN0IFtoaXN0b3J5LCBzZXRIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtrZXlib2FyZFZlcnNpb24sIHNldEtleWJvYXJkVmVyc2lvbl0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtzZXRTb2x2ZUNvdW50cywgc2V0U2V0U29sdmVDb3VudHNdID0gdXNlU3RhdGUoW10pOyAvLyBob3cgbWFueSBndWVzc2VzIHRvIHNvbHZlIGVhY2ggc2V0XHJcbiAgICBjb25zdCBbc2V0R3Vlc3NDb3VudCwgc2V0U2V0R3Vlc3NDb3VudF0gPSB1c2VTdGF0ZSgwKTsgLy8gdG90YWwgZ3Vlc3MgY291bnQgZm9yIHRoZSBtaW4tbWF4IHdvcmQgbGVuIHNldFxyXG4gICAgY29uc3QgW3NlY3JldFdvcmQsIHNldFNlY3JldFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlY3JldERpc3BsYXksIHNldFNlY3JldERpc3BsYXldID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2d1ZXNzLCBzZXRHdWVzc10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZ3Vlc3Nlcywgc2V0R3Vlc3Nlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc29sdmVkLCBzZXRTb2x2ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dJbml0aWFsSW5mbywgc2V0U2hvd0luaXRpYWxJbmZvXSA9IHVzZVN0YXRlKHRydWUpOyAvLyBzZXQgaW5mbywgZWFzeSBtb2RlIGluZm9cclxuICAgIGNvbnN0IGRpdlVuZGVyS2V5Ym9hcmQgPSBzaG93RGl2VW5kZXJLZXlib2FyZCgpO1xyXG4gICAgY29uc3QgZGlzcGxheUd1ZXNzZXMgPSBzaG93R3Vlc3Nlc1RhYmxlKCk7XHJcbiAgICBjb25zdCBwcm9tcHRGb3JHdWVzcyA9IHNob3dHdWVzc1Byb21wdCgpO1xyXG4gICAgY29uc3QgcHJvbXB0Rm9yUGxheUFnYWluID0gc2hvd1BsYXlBZ2FpblByb21wdCgpO1xyXG4gICAgY29uc3QgW2hpZGVoaW50cywgc2V0SGlkZWhpbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJbnB1dExldHRlcihsZXR0ZXIpIHtcclxuICAgICAgICBoYW5kbGVVcGRhdGVkR3Vlc3MoZ3Vlc3MgKyBsZXR0ZXIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRGVsZXRlTGV0dGVyKCkge1xyXG4gICAgICAgIGlmIChndWVzcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNldEd1ZXNzKGd1ZXNzLnN1YnN0cmluZygwLGd1ZXNzLmxlbmd0aC0xKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2hvd0RpdlVuZGVyS2V5Ym9hcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwid21Xb3JkVW5kZXJLZXlib2FyZFwiPiZuYnNwO3tndWVzc30mbmJzcDs8L2Rpdj47XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVVcGRhdGVkR3Vlc3MoZ3Vlc3N3b3JkKSB7XHJcbiAgICAgICAgaWYgKGd1ZXNzd29yZC5sZW5ndGggPT09IHNlY3JldFdvcmQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGFkZEd1ZXNzVG9IaXN0b3J5KGd1ZXNzd29yZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1NldEd1ZXNzQ291bnQgPSBzZXRHdWVzc0NvdW50ICsgMTtcclxuICAgICAgICAgICAgc2V0U2V0R3Vlc3NDb3VudChuZXdTZXRHdWVzc0NvdW50KTtcclxuICAgICAgICAgICAgc2V0R3Vlc3NlcyhbZ3Vlc3N3b3JkLCAuLi5ndWVzc2VzXSk7XHJcbiAgICAgICAgICAgIHNldEd1ZXNzKCcnKTtcclxuICAgICAgICAgICAgaWYgKGd1ZXNzd29yZCA9PT0gc2VjcmV0V29yZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2V0U29sdmVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlY3JldFdvcmQubGVuZ3RoID09PSBnYW1lT3B0aW9ucy5sZW5NYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTZXRTb2x2ZUNvdW50cyhbLi4uc2V0U29sdmVDb3VudHMsIG5ld1NldEd1ZXNzQ291bnRdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEd1ZXNzKGd1ZXNzd29yZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWRkUm91bmRUb0hpc3RvcnkobmV3c2VjcmV0d29yZCkge1xyXG4gICAgICAgIC8vIGhpc3RvcnkgYXJyYXkgYnkgc2V0LCBuZXcgc2V0cyBhdCBsYXN0IHBvc2l0aW9uXHJcbiAgICAgICAgLy8gZWFjaCBzZXQgaXMgYW4gYXJyYXkgb2Ygcm91bmRzIChtaW4gdG8gbWF4IGxlbmd0aClcclxuICAgICAgICAvLyBlYWNoIHJvdW5kIGhhcyBzZWNyZXQgd29yZCBhbmQgZ3Vlc3MgaW5mb1xyXG4gICAgICAgIGxldCBuZXdoaXN0b3J5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShoaXN0b3J5KSk7XHJcbiAgICAgICAgbGV0IG5ld3JvdW5kID0ge3NlY3JldFdvcmQ6IG5ld3NlY3JldHdvcmQsIGd1ZXNzZXM6IFtdLCBzb2x2ZWQ6IGZhbHNlfTtcclxuICAgICAgICBpZiAobmV3c2VjcmV0d29yZC5sZW5ndGggPT09IGdhbWVPcHRpb25zLmxlbk1pbikgeyAvLyBuZXcgc2V0XHJcbiAgICAgICAgICAgIGxldCBuZXdzZXQgPSB7cm91bmRzOiBbbmV3cm91bmRdLCBudW1ndWVzc2VzOiAwfTtcclxuICAgICAgICAgICAgbmV3aGlzdG9yeS5wdXNoKG5ld3NldCk7XHJcbiAgICAgICAgfSBlbHNlIHsgLy8gZXhpc3Rpbmcgc2V0XHJcbiAgICAgICAgICAgIGxldCBjdXJyc2V0ID0gbmV3aGlzdG9yeVtuZXdoaXN0b3J5Lmxlbmd0aC0xXTtcclxuICAgICAgICAgICAgY3VycnNldC5yb3VuZHMucHVzaChuZXdyb3VuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEhpc3RvcnkobmV3aGlzdG9yeSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhZGRHdWVzc1RvSGlzdG9yeShndWVzc3dvcmQpIHtcclxuICAgICAgICBsZXQgbmV3aGlzdG9yeSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaGlzdG9yeSkpO1xyXG4gICAgICAgIGxldCBjdXJyc2V0ID0gbmV3aGlzdG9yeVtuZXdoaXN0b3J5Lmxlbmd0aC0xXTtcclxuICAgICAgICBsZXQgY3VycnJvdW5kID0gY3VycnNldC5yb3VuZHNbY3VycnNldC5yb3VuZHMubGVuZ3RoLTFdO1xyXG4gICAgICAgIGxldCBndWVzc0xldHRlcnMgPSBBcnJheS5mcm9tKGd1ZXNzd29yZCk7XHJcbiAgICAgICAgbGV0IGxldHRlcmluZm8gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGd1ZXNzTGV0dGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBndWVzc2xldHRlciA9IGd1ZXNzTGV0dGVyc1tpXTtcclxuICAgICAgICAgICAgY29uc3QgbGV0dGVyUmVzdWx0ID0gY2FsY0xldHRlclJlc3VsdChndWVzc0xldHRlcnMsIGkpOyAvLyBDLCBJLCBvciBXXHJcbiAgICAgICAgICAgIGxldHRlcmluZm8ucHVzaCh7bGV0dGVyOiBndWVzc2xldHRlciwgcmVzdWx0OiBsZXR0ZXJSZXN1bHR9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5ld2d1ZXNzID0ge2d1ZXNzOiBndWVzc3dvcmQsIGxldHRlcmluZm86IGxldHRlcmluZm8sIHNvbHZlczogZ3Vlc3N3b3JkID09PSBzZWNyZXRXb3JkfTtcclxuICAgICAgICBjdXJyc2V0Lm51bWd1ZXNzZXMrKztcclxuICAgICAgICBjdXJycm91bmQuc29sdmVkID0gbmV3Z3Vlc3Muc29sdmVzO1xyXG4gICAgICAgIGN1cnJyb3VuZC5ndWVzc2VzLnB1c2gobmV3Z3Vlc3MpO1xyXG4gICAgICAgIHNldEhpc3RvcnkobmV3aGlzdG9yeSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQoKSB7XHJcbiAgICAgICAgbGV0IGNvcHlUZXh0ID0gXCJXb3JkIE1hc3Rlcm1pbmRcXG5cIjtcclxuICAgICAgICBmb3IgKGxldCBzID0gMDsgcyA8IGhpc3RvcnkubGVuZ3RoOyBzKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgc2kgPSBoaXN0b3J5W3NdO1xyXG4gICAgICAgICAgICBjb3B5VGV4dCA9IGAke2NvcHlUZXh0fVNldCAke3MrMX06ICR7c2kubnVtZ3Vlc3Nlc30gZ3Vlc3Nlc1xcbmBcclxuICAgICAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCBzaS5yb3VuZHMubGVuZ3RoOyByKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJpID0gc2kucm91bmRzW3JdO1xyXG4gICAgICAgICAgICAgICAgY29weVRleHQgPSBgJHtjb3B5VGV4dH1Sb3VuZCAke3IrMX06ICR7cmkuZ3Vlc3Nlcy5sZW5ndGh9IGd1ZXNzZXNcXG5gO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZyA9IDA7IGcgPCByaS5ndWVzc2VzLmxlbmd0aDsgZysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2kgPSByaS5ndWVzc2VzW2ddO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvcHlUZXh0ICs9IGAke2dpLmd1ZXNzfTpcXG5gO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGwgPSAwOyBsIDwgZ2kubGV0dGVyaW5mby5sZW5ndGg7IGwrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaSA9IGdpLmxldHRlcmluZm9bbF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaS5yZXN1bHQgPT09ICdDJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29weVRleHQgPSBjb3B5VGV4dCArIFwi8J+fqVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxpLnJlc3VsdCA9PT0gJ0knKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3B5VGV4dCA9IGNvcHlUZXh0ICsgXCLwn5+oXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3B5VGV4dCA9IGNvcHlUZXh0ICsgXCLirJxcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb3B5VGV4dCA9IGNvcHlUZXh0ICsgXCJcXG5cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb3B5VGV4dCk7XHJcbiAgICAgICAgYWxlcnQoXCJDbGlwYm9hcmQgdXBkYXRlZFwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhpbnRzaGlkZGVuKGNoZWNrd29yZCkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBoaWRlaGludHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhpZGV3b3JkID0gaGlkZWhpbnRzW2luZGV4XTtcclxuICAgICAgICAgICAgaWYgKGhpZGV3b3JkID09PSBjaGVja3dvcmQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUVudHJ5KGluZGV4KSB7XHJcbiAgICAgICAgaWYgKCFoaW50c2hpZGRlbihndWVzc2VzW2luZGV4XSkpIHtcclxuICAgICAgICAgICAgbGV0IG5ld2hpZGVoaW50cyA9IFsuLi5oaWRlaGludHNdO1xyXG4gICAgICAgICAgICBuZXdoaWRlaGludHMucHVzaChndWVzc2VzW2luZGV4XSk7XHJcbiAgICAgICAgICAgIHNldEhpZGVoaW50cyhuZXdoaWRlaGludHMpOyAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgSW5pdGlhbEluZm8gPSA8ZGl2IGNsYXNzTmFtZT1cIk91dGVydGFibGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoIEFsaWduTGVmdFwiPlxyXG4gICAgICAgICAgICA8cD57Z2FtZU9wdGlvbnMubGVuTWlufS17Z2FtZU9wdGlvbnMubGVuTWF4fSBsZXR0ZXIgd29yZHMgcGVyIHNldC48L3A+XHJcbiAgICAgICAgICAgIDxwPkd1ZXNzZXMgdGhpcyB3b3JkOiB7Z3Vlc3Nlcy5sZW5ndGh9PC9wPlxyXG4gICAgICAgICAgICA8cD5HdWVzc2VzIHRoaXMgc2V0OiB7c2V0R3Vlc3NDb3VudH08L3A+XHJcbiAgICAgICAgICAgIHtzZXRTb2x2ZUNvdW50cy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgPHA+Tm8gY29tcGxldGVkIHNldHMgeWV0PC9wPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPHA+R3Vlc3NlcyBmb3IgY29tcGxldGVkIHNldHM6IHtzZXRTb2x2ZUNvdW50cy5tYXAobnVtID0+ICg8c3BhbiBrZXk9e251bS50b1N0cmluZygpfT57bnVtfSA8L3NwYW4+KSl9PC9wPn1cclxuICAgICAgICAgICAge2dhbWVPcHRpb25zLm1vZGUgPT09ICdlYXN5JyAmJiA8PjxwPjxzcGFuIGNsYXNzTmFtZT1cIndtRWFzeU1vZGVMZXR0ZXIgd21Db3JyZWN0TGV0dGVyQ29ycmVjdFBvc2l0aW9uXCI+Qzwvc3Bhbj5vcnJlY3QgcG9zaXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ3bUVhc3lNb2RlTGV0dGVyIHdtQ29ycmVjdExldHRlcldyb25nUG9zaXRpb25cIj5JPC9zcGFuPm5jb3JyZWN0IHBvc2l0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwid21FYXN5TW9kZUxldHRlciB3bVdyb25nTGV0dGVyXCI+Vzwvc3Bhbj5yb25nIGxldHRlcjwvcD5cclxuICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgTWFpbkluZm8gPSA8ZGl2IGNsYXNzTmFtZT1cIk91dGVydGFibGVcIj5cclxuICAgICAgICB7LyogSWYgSSBkb24ndCBjaGVjayBnYW1lT3B0aW9ucy5zZXQgdGhlbiBpdCB3aWxsIGNhbGwgcGlja1JhbmRvbVdvcmRcclxuICAgICAgICAgICBldmVuIHdoZW4gdGhlIG9wdGlvbnMgYXJlIG5vdCBzZXQgYW5kIHRoaXMgaXMgbm90IGNhbGxlZCBieSBteVxyXG4gICAgICAgICAgIGNvZGUuIEl0IG11c3QgYmUgc29tZSBraW5kIG9mIHByZS1yZW5kZXJpbmcuXHJcbiAgICAgICAgICovfVxyXG4gICAgICAgIHtnYW1lT3B0aW9ucy5zZXQgJiYgc2VjcmV0V29yZCA9PT0gJycgPyBwaWNrUmFuZG9tV29yZCgpIDogJyd9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICA8aDM+U2VjcmV0IFdvcmQ6IHtzb2x2ZWQgPyBzZWNyZXRXb3JkIDogc2VjcmV0RGlzcGxheX08L2gzPlxyXG4gICAgICAgICAgICB7c2VjcmV0V29yZCA9PT0gJycgP1xyXG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmcgLi4uPC9oMT5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIHNvbHZlZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbXB0Rm9yUGxheUFnYWluXHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIHByb21wdEZvckd1ZXNzfVxyXG4gICAgICAgICAgICB7c29sdmVkID9cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgZ3Vlc3Nlcy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCI+U3RhcnQgZ3Vlc3Npbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCI+S2VlcCBndWVzc2luZzwvcD59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2d1ZXNzZXMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5ObyBndWVzc2VzIHlldDwvcD5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICBkaXNwbGF5R3Vlc3Nlc31cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IEd1ZXNzSW5mbyA9IDxkaXYgY2xhc3NOYW1lPVwiT3V0ZXJ0YWJsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid21HdWVzc0luZm9EaXZcIj5cclxuICAgICAgICAgICAgR3Vlc3MgaW5mbzpcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7Z3Vlc3Nlcy5tYXAoKGcsIGdpKSA9PiAoXHJcbiAgICAgICAgICAgICFoaW50c2hpZGRlbihnKSAmJlxyXG4gICAgICAgICAgICA8U2hvd2luZm8ga2V5PXtgJHtndWVzc2VzLmxlbmd0aCAtIGdpfS4ke2d9YH0gd29yZD17Z30gc2hvd0luc2VydHM9XCJOXCIgc2hvd1N3YXBzPVwiWVwiIHNob3dBbmFncmFtcz1cIllcIiBzaG93RHJvcHM9XCJOXCIgcmVtb3ZlRW50cnk9e3JlbW92ZUVudHJ5fSBlbnRyeUluZGV4PXtnaX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndtR3Vlc3NJbmZvRGl2XCI+XHJcbiAgICAgICAgICAgIEV4cGxhbmF0aW9uOlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiaW5zZXJ0Q291bnRcIj4mbmJzcDsxJm5ic3A7PC9zcGFuPlNob3dzIGluc2VydCBjb3VudHMvbGV0dGVyczwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJzd2FwQ291bnRcIj4mbmJzcDsyJm5ic3A7PC9zcGFuPlNob3dzIHN3YXBzIGNvdW50cy9sZXR0ZXJzPC9saT5cclxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImFuYWdyYW1Db3VudFwiPjM8L3NwYW4+U2hvd3MgYW5hZ3JhbSBjb3VudHMvd29yZHM8L2xpPlxyXG4gICAgICAgICAgICA8bGk+Q2xpY2sgdG8gdG9nZ2xlIGJldHdlZW4gY291bnQgYW5kIGluZm88L2xpPlxyXG4gICAgICAgICAgICA8bGk+Q2xpY2sgdGhlIDxzcGFuIGNsYXNzTmFtZT1cImNsb3NlbWVidXR0b25cIj48L3NwYW4+IHRvIHJlbW92ZSB5b3VyIHdvcmQ8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj47XHJcbiAgICBjb25zdCBCcm93c2VyTGF5b3V0ID0gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+e0luaXRpYWxJbmZvfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+e01haW5JbmZvfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPntHdWVzc0luZm99PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbiAgICBjb25zdCBNb2JpbGVMYXlvdXQgPSA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7IHNldFNob3dJbml0aWFsSW5mbyghc2hvd0luaXRpYWxJbmZvKTsgfSB9PlxyXG4gICAgICAgICAgICAgICAge3Nob3dJbml0aWFsSW5mbyA/IFwiSGlkZVwiIDogXCJTaG93XCJ9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7c2hvd0luaXRpYWxJbmZvICYmIEluaXRpYWxJbmZvfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtNYWluSW5mb31cclxuICAgIDwvZGl2PjtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBXb3JkIE1hc3Rlcm1pbmRcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7IWdhbWVPcHRpb25zLnNldCA/XHJcbiAgICAgICAgICAgIDxHZXRXTU9wdGlvbnMgc2V0R2FtZU9wdGlvbnM9e3NldEdhbWVPcHRpb25zfS8+XHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICBpc01vYmlsZSA/IE1vYmlsZUxheW91dCA6IEJyb3dzZXJMYXlvdXRcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dQbGF5QWdhaW5Qcm9tcHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRtQ29uZ3JhdHNcIj7wn5GP8J+PvSBTb2x2ZWQgaW4ge2d1ZXNzZXMubGVuZ3RofSBtb3ZlcyEg8J+Rj/Cfj708L2g0PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcGlja1JhbmRvbVdvcmQoKTtcclxuICAgICAgICAgICAgICAgIHNldEd1ZXNzKCcnKTtcclxuICAgICAgICAgICAgICAgIHNldEd1ZXNzZXMoW10pO1xyXG4gICAgICAgICAgICAgICAgc2V0SGlkZWhpbnRzKFtdKTtcclxuICAgICAgICAgICAgICAgIHNldFNvbHZlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c2VjcmV0V29yZC5sZW5ndGggPT09IGdhbWVPcHRpb25zLmxlbk1heCA/IFwiU3RhcnQgQW5vdGhlciBTZXQhXCIgOiBcIlN0YXJ0IE5leHQgV29yZFwifVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtjb3B5VG9DbGlwYm9hcmQoKTt9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDbGlwYm9hcmRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93R3Vlc3NQcm9tcHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICBpc01vYmlsZSA/XHJcbiAgICAgICAgICAgIDxTaG93Q3VzdG9tS2V5Ym9hcmRcclxuICAgICAgICAgICAgICAgIGtleWJvYXJkVmVyc2lvbj17a2V5Ym9hcmRWZXJzaW9ufVxyXG4gICAgICAgICAgICAgICAgc2V0S2V5Ym9hcmRWZXJzaW9uPXtzZXRLZXlib2FyZFZlcnNpb259XHJcbiAgICAgICAgICAgICAgICBpbnB1dFdvcmQ9e2d1ZXNzfVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRMZXR0ZXI9e2hhbmRsZUlucHV0TGV0dGVyfVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlTGV0dGVyPXtoYW5kbGVEZWxldGVMZXR0ZXJ9XHJcbiAgICAgICAgICAgICAgICBkaXZVbmRlcktleWJvYXJkPXtkaXZVbmRlcktleWJvYXJkfVxyXG4gICAgICAgICAgICA+PC9TaG93Q3VzdG9tS2V5Ym9hcmQ+ICAgICAgICBcclxuICAgICAgICA6XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCB0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICAgICAge2d1ZXNzZXMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Rmlyc3QgZ3Vlc3M6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5leHQgZ3Vlc3M6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJndWVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2d1ZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGd1ZXNzd29yZCA9IGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCkucmVwbGFjZSggL1xcVy9nICwgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVVcGRhdGVkR3Vlc3MoZ3Vlc3N3b3JkKTtcclxuICAgICAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dHdWVzc2VzVGFibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+e2dhbWVPcHRpb25zLm1vZGUgPT09ICdoYXJkJyA/XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRyVGFibGVcIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5HdWVzczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkNvcnJlY3QgTGV0dGVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+Q29ycmVjdCBQb3NpdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7Z3Vlc3Nlcy5tYXAoKGcsaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2Btb2RlMGd1ZXNzJHtpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2d9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCI+e2NhbGNDb3JyZWN0TGV0dGVyQ291bnQoZyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCI+e2NhbGNDb3JyZWN0UG9zaXRpb25Db3VudChnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0clRhYmxlXCI+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHshc29sdmVkICYmIGd1ZXNzICYmIDx0ciBrZXk9J2Vhc3ltb2RlZ3Vlc3NsZXR0ZXJzJz5cclxuICAgICAgICAgICAgICAgICAgICB7Z3Vlc3Muc3BsaXQoXCJcIikubWFwKChsLGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17YGd1ZXNzbGV0dGVyJHtpfWB9IGNsYXNzTmFtZT17YHdtRWFzeU1vZGVMZXR0ZXIgJHtjc3NFYXN5TW9kZUxldHRlclNpemUoKX1gfT57bH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90cj59XHJcbiAgICAgICAgICAgICAgICB7Z3Vlc3Nlcy5tYXAoKGcsaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2Btb2RlMWd1ZXNzJHtpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Zy5zcGxpdCgnJykubWFwKChsLGopID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2Btb2RlMWd1ZXNzJHtpfWxldHRlciR7an1gfSBjbGFzcz17Y2FsY01vZGUxY3NzKGcsail9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgfTwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwaWNrUmFuZG9tV29yZCgpIHtcclxuICAgICAgICBjb25zdCBuZXdsZW4gPVxyXG4gICAgICAgICAgICBzZWNyZXRXb3JkID9cclxuICAgICAgICAgICAgICAgIHNlY3JldFdvcmQubGVuZ3RoIDwgZ2FtZU9wdGlvbnMubGVuTWluID9cclxuICAgICAgICAgICAgICAgICAgICBnYW1lT3B0aW9ucy5sZW5NaW5cclxuICAgICAgICAgICAgICAgIDogc2VjcmV0V29yZC5sZW5ndGggPj0gZ2FtZU9wdGlvbnMubGVuTWF4ID9cclxuICAgICAgICAgICAgICAgICAgICBnYW1lT3B0aW9ucy5sZW5NaW5cclxuICAgICAgICAgICAgICAgIDogc2VjcmV0V29yZC5sZW5ndGggKyAxXHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIGdhbWVPcHRpb25zLmxlbk1pbjtcclxuICAgICAgICBpZiAobmV3bGVuID09PSBnYW1lT3B0aW9ucy5sZW5NaW4gJiYgc2V0R3Vlc3NDb3VudCAhPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNldFNldEd1ZXNzQ291bnQoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJhc2V1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvRU5BQkxFMks/cmFuZG9tPScgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20vRU5BQkxFMks/cmFuZG9tPSdcclxuICAgICAgICBjb25zdCB1cmwgPSBiYXNldXJsICsgbmV3bGVuLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9td29yZD1KU09OLnBhcnNlKHRleHQpLnRvVXBwZXJDYXNlKCk7IC8vIEl0IGlzIGp1c3QgYSB3b3JkIGluIGRvdWJsZSBxdW90ZXMgYnV0IGl0IGlzIGpzb24gbm9uZXRoZWxlc3NcclxuICAgICAgICAgICAgc2V0U2VjcmV0V29yZChyYW5kb213b3JkKTtcclxuICAgICAgICAgICAgc2V0U2VjcmV0RGlzcGxheShyYW5kb213b3JkLnNwbGl0KFwiXCIpLm1hcCgoKT0+KFwiKlwiKSkpO1xyXG4gICAgICAgICAgICBhZGRSb3VuZFRvSGlzdG9yeShyYW5kb213b3JkKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGNDb3JyZWN0TGV0dGVyQ291bnQoZ3Vlc3NsZXR0ZXJzKSB7XHJcbiAgICAgICAgbGV0IG4gPSAwXHJcbiAgICAgICAgY29uc3QgYWxwaGFiZXQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonXHJcbiAgICAgICAgZm9yKGxldCBsZXR0ZXIgb2YgYWxwaGFiZXQpIHtcclxuICAgICAgICAgICAgbGV0IHggPSBzZWNyZXRXb3JkLnNwbGl0KGxldHRlcikubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICBsZXQgeSA9IGd1ZXNzbGV0dGVycy5zcGxpdChsZXR0ZXIpLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgbiA9IG4gKyAoeCA8IHkgPyB4IDogeSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjQ29ycmVjdFBvc2l0aW9uQ291bnQoZ3Vlc3NsZXR0ZXJzKSB7XHJcbiAgICAgICAgbGV0IG4gPSAwXHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8c2VjcmV0V29yZC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBuID0gbiArIChzZWNyZXRXb3JkW2ldID09PSBndWVzc2xldHRlcnNbaV0gPyAxIDogMClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjTGV0dGVyUmVzdWx0KGd1ZXNzTGV0dGVycywgZ3Vlc3NMZXR0ZXJJbmRleCkge1xyXG4gICAgICAgIGxldCBsZXR0ZXIgPSBndWVzc0xldHRlcnNbZ3Vlc3NMZXR0ZXJJbmRleF07XHJcbiAgICAgICAgLy8gZyBpcyB0aGUgd2hvZSBndWVzcywgaiBpcyB0aGUgbGV0dGVyIGluZGV4IGZvciB3aGljaCB3ZSB3YW50IHRoZSBjc3Mgc3R5bGUgbmFtZVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IHNlY3JldFdvcmRbZ3Vlc3NMZXR0ZXJJbmRleF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiQ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VjcmV0V29yZC5pbmRleE9mKGxldHRlcikgPiAtMSkge1xyXG4gICAgICAgICAgICAvLyB0aGUgZ3Vlc3MgbGV0dGVyIGlzIGluIHRoZSBzZWNyZXQgd29yZCBhbmQgaXMgbm90IGluIHRoZSByaWdodCBzcG90XHJcbiAgICAgICAgICAgIC8vIGhhcyBpdCBhbHJlYWR5IGJlZW4gY291bnRlZCBlYXJsaWVyIHRob3VnaD9cclxuICAgICAgICAgICAgLy8gd2lsbCBpdCBiZSBjb3VudGVkIGxhdGVyIGFzIGNvcnJlY3QgbGV0dGVyIGNvcnJlY3Qgc3BvdD9cclxuICAgICAgICAgICAgbGV0IG5leHRqc3RhcnQgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlY3JldFdvcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZWNyZXRXb3JkW2ldID09PSBsZXR0ZXIgJiYgZ3Vlc3NMZXR0ZXJzW2ldICE9PSBsZXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgamZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqID0gbmV4dGpzdGFydDsgIWpmb3VuZCAmJiBqIDwgc2VjcmV0V29yZC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3Vlc3NMZXR0ZXJzW2pdID09PSBsZXR0ZXIgJiYgc2VjcmV0V29yZFtqXSAhPT0gbGV0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gZ3Vlc3NMZXR0ZXJJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIklcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0anN0YXJ0ID0gaiArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiV1wiO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2FsY01vZGUxY3NzKGd1ZXNzTGV0dGVycyxndWVzc0xldHRlckluZGV4KSB7XHJcbiAgICAgICAgbGV0IHNpemUgPSBjc3NFYXN5TW9kZUxldHRlclNpemUoKTtcclxuICAgICAgICBsZXQgbGV0dGVyUmVzdWx0ID0gY2FsY0xldHRlclJlc3VsdChndWVzc0xldHRlcnMsIGd1ZXNzTGV0dGVySW5kZXgpO1xyXG4gICAgICAgIGlmIChsZXR0ZXJSZXN1bHQgPT09ICdDJykge3JldHVybiBcIndtRWFzeU1vZGVMZXR0ZXIgd21Db3JyZWN0TGV0dGVyQ29ycmVjdFBvc2l0aW9uIFwiICsgc2l6ZTt9XHJcbiAgICAgICAgaWYgKGxldHRlclJlc3VsdCA9PT0gJ0knKSB7cmV0dXJuIFwid21FYXN5TW9kZUxldHRlciB3bUNvcnJlY3RMZXR0ZXJXcm9uZ1Bvc2l0aW9uIFwiICsgc2l6ZTt9XHJcbiAgICAgICAgcmV0dXJuIFwid21FYXN5TW9kZUxldHRlciB3bVdyb25nTGV0dGVyIFwiICsgc2l6ZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNzc0Vhc3lNb2RlTGV0dGVyU2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4gKHNlY3JldFdvcmQgJiYgc2VjcmV0V29yZC5sZW5ndGggPiA4ID8gJ3NtYWxsJyA6ICdub3JtYWwnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29yZE1hc3Rlcm1pbmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==