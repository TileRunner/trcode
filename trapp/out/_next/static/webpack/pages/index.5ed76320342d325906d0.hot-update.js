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
        lineNumber: 140,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Guesses this word: ", guesses.length]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Guesses this set: ", setGuessCount]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 13
      }, undefined), setSolveCounts.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "No completed sets yet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 17
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Guesses for completed sets: ", setSolveCounts.map(num => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [num, " "]
        }, num.toString(), true, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 76
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }, undefined), gameOptions.mode === 'easy' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "wmEasyModeLetter wmCorrectLetterCorrectPosition",
            children: "C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 50
          }, undefined), "orrect position"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 47
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "wmEasyModeLetter wmCorrectLetterWrongPosition",
            children: "I"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 20
          }, undefined), "ncorrect position"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "wmEasyModeLetter wmWrongLetter",
            children: "W"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 20
          }, undefined), "rong letter"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 17
        }, undefined)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 138,
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
        lineNumber: 160,
        columnNumber: 13
      }, undefined), secretWord === '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Loading ..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 17
      }, undefined) : solved ? promptForPlayAgain : promptForGuess, solved ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 17
      }, undefined) : guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "AlignCenter",
        children: "Start guessing"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 21
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "AlignCenter",
        children: "Keep guessing"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }, undefined), guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "trParagraph",
      children: "No guesses yet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }, undefined) : displayGuesses]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 153,
    columnNumber: 22
  }, undefined);

  const GuessInfo = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "Outertable",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "wmGuessInfoDiv",
      children: "Guess info:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
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
      lineNumber: 187,
      columnNumber: 13
    }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "wmGuessInfoDiv",
      children: "Explanation:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "trParagraph",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "insertCount",
          children: "\xA01\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 17
        }, undefined), "Shows insert counts/letters"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "swapCount",
          children: "\xA02\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 17
        }, undefined), "Shows swaps counts/letters"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "anagramCount",
          children: "3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 17
        }, undefined), "Shows anagram counts/words"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Click to toggle between count and info"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["Click the ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "closemebutton"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 27
        }, undefined), " to remove your word"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 181,
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
            lineNumber: 204,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col",
            children: MainInfo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        children: GuessInfo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 200,
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
        lineNumber: 213,
        columnNumber: 13
      }, undefined), showInitialInfo && InitialInfo]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 9
    }, undefined), MainInfo]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 211,
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
          lineNumber: 225,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 13
    }, undefined), !gameOptions.set ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wmoptions__WEBPACK_IMPORTED_MODULE_5__.default, {
      setGameOptions: setGameOptions
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 13
    }, undefined) : react_device_detect__WEBPACK_IMPORTED_MODULE_3__.isMobile ? MobileLayout : BrowserLayout]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 221,
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
        lineNumber: 238,
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
        lineNumber: 239,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          copyToClipboard();
        },
        children: "Clipboard"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 237,
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
      lineNumber: 261,
      columnNumber: 13
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "form-group trParagraph",
      children: [guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "First guess:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 21
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Next guess:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 274,
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
        lineNumber: 276,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 270,
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
              lineNumber: 293,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Correct Letter"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Correct Position"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: guesses.map((g, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: g
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "AlignCenter",
              children: calcCorrectLetterCount(g)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 302,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "AlignCenter",
              children: calcCorrectPositionCount(g)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 303,
              columnNumber: 25
            }, this)]
          }, `mode0guess${i}`, true, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 21
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 290,
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
              lineNumber: 314,
              columnNumber: 25
            }, this))
          }, 'easymodeguessletters', false, {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 38
          }, this), guesses.map((g, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: g.split('').map((l, j) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              class: calcMode1css(g, j),
              children: l
            }, `mode1guess${i}letter${j}`, false, {
              fileName: _jsxFileName,
              lineNumber: 320,
              columnNumber: 29
            }, this))
          }, `mode1guess${i}`, false, {
            fileName: _jsxFileName,
            lineNumber: 318,
            columnNumber: 21
          }, this))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 289,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vbWFzdGVybWluZC5qcyJdLCJuYW1lcyI6WyJXb3JkTWFzdGVybWluZCIsInNldFdoZXJldG8iLCJnYW1lT3B0aW9ucyIsInNldEdhbWVPcHRpb25zIiwidXNlU3RhdGUiLCJzZXQiLCJoaXN0b3J5Iiwic2V0SGlzdG9yeSIsImtleWJvYXJkVmVyc2lvbiIsInNldEtleWJvYXJkVmVyc2lvbiIsInNldFNvbHZlQ291bnRzIiwic2V0U2V0U29sdmVDb3VudHMiLCJzZXRHdWVzc0NvdW50Iiwic2V0U2V0R3Vlc3NDb3VudCIsInNlY3JldFdvcmQiLCJzZXRTZWNyZXRXb3JkIiwic2VjcmV0RGlzcGxheSIsInNldFNlY3JldERpc3BsYXkiLCJndWVzcyIsInNldEd1ZXNzIiwiZ3Vlc3NlcyIsInNldEd1ZXNzZXMiLCJzb2x2ZWQiLCJzZXRTb2x2ZWQiLCJzaG93SW5pdGlhbEluZm8iLCJzZXRTaG93SW5pdGlhbEluZm8iLCJkaXZVbmRlcktleWJvYXJkIiwic2hvd0RpdlVuZGVyS2V5Ym9hcmQiLCJkaXNwbGF5R3Vlc3NlcyIsInNob3dHdWVzc2VzVGFibGUiLCJwcm9tcHRGb3JHdWVzcyIsInNob3dHdWVzc1Byb21wdCIsInByb21wdEZvclBsYXlBZ2FpbiIsInNob3dQbGF5QWdhaW5Qcm9tcHQiLCJoaWRlaGludHMiLCJzZXRIaWRlaGludHMiLCJoYW5kbGVJbnB1dExldHRlciIsImxldHRlciIsImhhbmRsZVVwZGF0ZWRHdWVzcyIsImhhbmRsZURlbGV0ZUxldHRlciIsImxlbmd0aCIsInN1YnN0cmluZyIsImd1ZXNzd29yZCIsImFkZEd1ZXNzVG9IaXN0b3J5IiwibmV3U2V0R3Vlc3NDb3VudCIsImxlbk1heCIsImFkZFJvdW5kVG9IaXN0b3J5IiwibmV3c2VjcmV0d29yZCIsIm5ld2hpc3RvcnkiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJuZXdyb3VuZCIsImxlbk1pbiIsIm5ld3NldCIsInJvdW5kcyIsIm51bWd1ZXNzZXMiLCJwdXNoIiwiY3VycnNldCIsImN1cnJyb3VuZCIsImd1ZXNzTGV0dGVycyIsIkFycmF5IiwiZnJvbSIsImxldHRlcmluZm8iLCJpIiwiZ3Vlc3NsZXR0ZXIiLCJsZXR0ZXJSZXN1bHQiLCJjYWxjTGV0dGVyUmVzdWx0IiwicmVzdWx0IiwibmV3Z3Vlc3MiLCJzb2x2ZXMiLCJjb3B5VG9DbGlwYm9hcmQiLCJjbGlwcnVsZSIsImNvcHlUZXh0IiwicyIsInNpIiwiciIsInJpIiwiZyIsImdpIiwibCIsImxpIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiYWxlcnQiLCJoaW50c2hpZGRlbiIsImNoZWNrd29yZCIsImluZGV4IiwiaGlkZXdvcmQiLCJyZW1vdmVFbnRyeSIsIm5ld2hpZGVoaW50cyIsIkluaXRpYWxJbmZvIiwibWFwIiwibnVtIiwidG9TdHJpbmciLCJtb2RlIiwiTWFpbkluZm8iLCJwaWNrUmFuZG9tV29yZCIsIkd1ZXNzSW5mbyIsIkJyb3dzZXJMYXlvdXQiLCJNb2JpbGVMYXlvdXQiLCJpc01vYmlsZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvVXBwZXJDYXNlIiwicmVwbGFjZSIsImNhbGNDb3JyZWN0TGV0dGVyQ291bnQiLCJjYWxjQ29ycmVjdFBvc2l0aW9uQ291bnQiLCJzcGxpdCIsImNzc0Vhc3lNb2RlTGV0dGVyU2l6ZSIsImoiLCJjYWxjTW9kZTFjc3MiLCJuZXdsZW4iLCJiYXNldXJsIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwidGV4dCIsInJhbmRvbXdvcmQiLCJndWVzc2xldHRlcnMiLCJuIiwiYWxwaGFiZXQiLCJ4IiwieSIsImd1ZXNzTGV0dGVySW5kZXgiLCJpbmRleE9mIiwibmV4dGpzdGFydCIsImpmb3VuZCIsInNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1BLGNBQWMsR0FBRyxDQUFDO0FBQUNDO0FBQUQs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ZWJwYWNrL3BhZ2VzL2luZGV4LjVlZDc2MzIwMzQyZDMyNTkwNmQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaG93aW5mbyBmcm9tICcuLi93aS9zaG93aW5mbydcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0J1xyXG5pbXBvcnQgU2hvd0N1c3RvbUtleWJvYXJkIGZyb20gJy4uL3Nob3dDdXN0b21LZXlib2FyZCc7XHJcbmltcG9ydCBHZXRXTU9wdGlvbnMgZnJvbSAnLi93bW9wdGlvbnMnO1xyXG5jb25zdCBXb3JkTWFzdGVybWluZCA9ICh7c2V0V2hlcmV0b30pID0+IHtcclxuICAgIGNvbnN0IFtnYW1lT3B0aW9ucywgc2V0R2FtZU9wdGlvbnNdID0gdXNlU3RhdGUoe3NldDpmYWxzZX0pO1xyXG4gICAgY29uc3QgW2hpc3RvcnksIHNldEhpc3RvcnldID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2tleWJvYXJkVmVyc2lvbiwgc2V0S2V5Ym9hcmRWZXJzaW9uXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3NldFNvbHZlQ291bnRzLCBzZXRTZXRTb2x2ZUNvdW50c10gPSB1c2VTdGF0ZShbXSk7IC8vIGhvdyBtYW55IGd1ZXNzZXMgdG8gc29sdmUgZWFjaCBzZXRcclxuICAgIGNvbnN0IFtzZXRHdWVzc0NvdW50LCBzZXRTZXRHdWVzc0NvdW50XSA9IHVzZVN0YXRlKDApOyAvLyB0b3RhbCBndWVzcyBjb3VudCBmb3IgdGhlIG1pbi1tYXggd29yZCBsZW4gc2V0XHJcbiAgICBjb25zdCBbc2VjcmV0V29yZCwgc2V0U2VjcmV0V29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VjcmV0RGlzcGxheSwgc2V0U2VjcmV0RGlzcGxheV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZ3Vlc3MsIHNldEd1ZXNzXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtndWVzc2VzLCBzZXRHdWVzc2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzb2x2ZWQsIHNldFNvbHZlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd0luaXRpYWxJbmZvLCBzZXRTaG93SW5pdGlhbEluZm9dID0gdXNlU3RhdGUodHJ1ZSk7IC8vIHNldCBpbmZvLCBlYXN5IG1vZGUgaW5mb1xyXG4gICAgY29uc3QgZGl2VW5kZXJLZXlib2FyZCA9IHNob3dEaXZVbmRlcktleWJvYXJkKCk7XHJcbiAgICBjb25zdCBkaXNwbGF5R3Vlc3NlcyA9IHNob3dHdWVzc2VzVGFibGUoKTtcclxuICAgIGNvbnN0IHByb21wdEZvckd1ZXNzID0gc2hvd0d1ZXNzUHJvbXB0KCk7XHJcbiAgICBjb25zdCBwcm9tcHRGb3JQbGF5QWdhaW4gPSBzaG93UGxheUFnYWluUHJvbXB0KCk7XHJcbiAgICBjb25zdCBbaGlkZWhpbnRzLCBzZXRIaWRlaGludHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUlucHV0TGV0dGVyKGxldHRlcikge1xyXG4gICAgICAgIGhhbmRsZVVwZGF0ZWRHdWVzcyhndWVzcyArIGxldHRlcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVEZWxldGVMZXR0ZXIoKSB7XHJcbiAgICAgICAgaWYgKGd1ZXNzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc2V0R3Vlc3MoZ3Vlc3Muc3Vic3RyaW5nKDAsZ3Vlc3MubGVuZ3RoLTEpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzaG93RGl2VW5kZXJLZXlib2FyZCgpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ3bVdvcmRVbmRlcktleWJvYXJkXCI+Jm5ic3A7e2d1ZXNzfSZuYnNwOzwvZGl2PjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVVwZGF0ZWRHdWVzcyhndWVzc3dvcmQpIHtcclxuICAgICAgICBpZiAoZ3Vlc3N3b3JkLmxlbmd0aCA9PT0gc2VjcmV0V29yZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYWRkR3Vlc3NUb0hpc3RvcnkoZ3Vlc3N3b3JkKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3U2V0R3Vlc3NDb3VudCA9IHNldEd1ZXNzQ291bnQgKyAxO1xyXG4gICAgICAgICAgICBzZXRTZXRHdWVzc0NvdW50KG5ld1NldEd1ZXNzQ291bnQpO1xyXG4gICAgICAgICAgICBzZXRHdWVzc2VzKFtndWVzc3dvcmQsIC4uLmd1ZXNzZXNdKTtcclxuICAgICAgICAgICAgc2V0R3Vlc3MoJycpO1xyXG4gICAgICAgICAgICBpZiAoZ3Vlc3N3b3JkID09PSBzZWNyZXRXb3JkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZXRTb2x2ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VjcmV0V29yZC5sZW5ndGggPT09IGdhbWVPcHRpb25zLmxlbk1heCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNldFNvbHZlQ291bnRzKFsuLi5zZXRTb2x2ZUNvdW50cywgbmV3U2V0R3Vlc3NDb3VudF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0R3Vlc3MoZ3Vlc3N3b3JkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhZGRSb3VuZFRvSGlzdG9yeShuZXdzZWNyZXR3b3JkKSB7XHJcbiAgICAgICAgLy8gaGlzdG9yeSBhcnJheSBieSBzZXQsIG5ldyBzZXRzIGF0IGxhc3QgcG9zaXRpb25cclxuICAgICAgICAvLyBlYWNoIHNldCBpcyBhbiBhcnJheSBvZiByb3VuZHMgKG1pbiB0byBtYXggbGVuZ3RoKVxyXG4gICAgICAgIC8vIGVhY2ggcm91bmQgaGFzIHNlY3JldCB3b3JkIGFuZCBndWVzcyBpbmZvXHJcbiAgICAgICAgbGV0IG5ld2hpc3RvcnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGhpc3RvcnkpKTtcclxuICAgICAgICBsZXQgbmV3cm91bmQgPSB7c2VjcmV0V29yZDogbmV3c2VjcmV0d29yZCwgZ3Vlc3NlczogW10sIHNvbHZlZDogZmFsc2V9O1xyXG4gICAgICAgIGlmIChuZXdzZWNyZXR3b3JkLmxlbmd0aCA9PT0gZ2FtZU9wdGlvbnMubGVuTWluKSB7IC8vIG5ldyBzZXRcclxuICAgICAgICAgICAgbGV0IG5ld3NldCA9IHtyb3VuZHM6IFtuZXdyb3VuZF0sIG51bWd1ZXNzZXM6IDB9O1xyXG4gICAgICAgICAgICBuZXdoaXN0b3J5LnB1c2gobmV3c2V0KTtcclxuICAgICAgICB9IGVsc2UgeyAvLyBleGlzdGluZyBzZXRcclxuICAgICAgICAgICAgbGV0IGN1cnJzZXQgPSBuZXdoaXN0b3J5W25ld2hpc3RvcnkubGVuZ3RoLTFdO1xyXG4gICAgICAgICAgICBjdXJyc2V0LnJvdW5kcy5wdXNoKG5ld3JvdW5kKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SGlzdG9yeShuZXdoaXN0b3J5KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFkZEd1ZXNzVG9IaXN0b3J5KGd1ZXNzd29yZCkge1xyXG4gICAgICAgIGxldCBuZXdoaXN0b3J5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShoaXN0b3J5KSk7XHJcbiAgICAgICAgbGV0IGN1cnJzZXQgPSBuZXdoaXN0b3J5W25ld2hpc3RvcnkubGVuZ3RoLTFdO1xyXG4gICAgICAgIGxldCBjdXJycm91bmQgPSBjdXJyc2V0LnJvdW5kc1tjdXJyc2V0LnJvdW5kcy5sZW5ndGgtMV07XHJcbiAgICAgICAgbGV0IGd1ZXNzTGV0dGVycyA9IEFycmF5LmZyb20oZ3Vlc3N3b3JkKTtcclxuICAgICAgICBsZXQgbGV0dGVyaW5mbyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3Vlc3NMZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGd1ZXNzbGV0dGVyID0gZ3Vlc3NMZXR0ZXJzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBsZXR0ZXJSZXN1bHQgPSBjYWxjTGV0dGVyUmVzdWx0KGd1ZXNzTGV0dGVycywgaSk7IC8vIEMsIEksIG9yIFdcclxuICAgICAgICAgICAgbGV0dGVyaW5mby5wdXNoKHtsZXR0ZXI6IGd1ZXNzbGV0dGVyLCByZXN1bHQ6IGxldHRlclJlc3VsdH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbmV3Z3Vlc3MgPSB7Z3Vlc3M6IGd1ZXNzd29yZCwgbGV0dGVyaW5mbzogbGV0dGVyaW5mbywgc29sdmVzOiBndWVzc3dvcmQgPT09IHNlY3JldFdvcmR9O1xyXG4gICAgICAgIGN1cnJzZXQubnVtZ3Vlc3NlcysrO1xyXG4gICAgICAgIGN1cnJyb3VuZC5zb2x2ZWQgPSBuZXdndWVzcy5zb2x2ZXM7XHJcbiAgICAgICAgY3VycnJvdW5kLmd1ZXNzZXMucHVzaChuZXdndWVzcyk7XHJcbiAgICAgICAgc2V0SGlzdG9yeShuZXdoaXN0b3J5KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNvcHlUb0NsaXBib2FyZCgpIHtcclxuICAgICAgICBpZiAoIWdhbWVPcHRpb25zLmNsaXBydWxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvcHlUZXh0ID0gXCJXb3JkIE1hc3Rlcm1pbmRcXG5odHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbS9cXG5cIjtcclxuICAgICAgICBmb3IgKGxldCBzID0gMDsgcyA8IGhpc3RvcnkubGVuZ3RoOyBzKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgc2kgPSBoaXN0b3J5W3NdO1xyXG4gICAgICAgICAgICBpZiAoZ2FtZU9wdGlvbnMuY2xpcHJ1bGUgPT09ICdhbGwnIHx8IHMgPT09IGhpc3RvcnkubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdhbWVPcHRpb25zLmNsaXBydWxlICE9PSAncm91bmQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29weVRleHQgKz0gYFNldCAke3MrMX06ICR7c2kubnVtZ3Vlc3Nlc30gZ3Vlc3Nlc1xcbmBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgc2kucm91bmRzLmxlbmd0aDsgcisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmkgPSBzaS5yb3VuZHNbcl07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVPcHRpb25zLmNsaXBydWxlICE9PSAncm91bmQnIHx8IHIgPT09IHNpLnJvdW5kcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlUZXh0ID0gYCR7Y29weVRleHR9Um91bmQgJHtyKzF9OiAke3JpLmd1ZXNzZXMubGVuZ3RofSBndWVzc2VzXFxuYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZyA9IDA7IGcgPCByaS5ndWVzc2VzLmxlbmd0aDsgZysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnaSA9IHJpLmd1ZXNzZXNbZ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3B5VGV4dCArPSBgJHtnaS5ndWVzc306XFxuYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGwgPSAwOyBsIDwgZ2kubGV0dGVyaW5mby5sZW5ndGg7IGwrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpID0gZ2kubGV0dGVyaW5mb1tsXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGkucmVzdWx0ID09PSAnQycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29weVRleHQgPSBjb3B5VGV4dCArIFwi8J+fqVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGkucmVzdWx0ID09PSAnSScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29weVRleHQgPSBjb3B5VGV4dCArIFwi8J+fqFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlUZXh0ID0gY29weVRleHQgKyBcIuKsnFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlUZXh0ID0gY29weVRleHQgKyBcIlxcblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvcHlUZXh0KTtcclxuICAgICAgICBhbGVydChcIkNsaXBib2FyZCB1cGRhdGVkXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGludHNoaWRkZW4oY2hlY2t3b3JkKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGhpZGVoaW50cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgaGlkZXdvcmQgPSBoaWRlaGludHNbaW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoaGlkZXdvcmQgPT09IGNoZWNrd29yZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRW50cnkoaW5kZXgpIHtcclxuICAgICAgICBpZiAoIWhpbnRzaGlkZGVuKGd1ZXNzZXNbaW5kZXhdKSkge1xyXG4gICAgICAgICAgICBsZXQgbmV3aGlkZWhpbnRzID0gWy4uLmhpZGVoaW50c107XHJcbiAgICAgICAgICAgIG5ld2hpZGVoaW50cy5wdXNoKGd1ZXNzZXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgc2V0SGlkZWhpbnRzKG5ld2hpZGVoaW50cyk7ICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBJbml0aWFsSW5mbyA9IDxkaXYgY2xhc3NOYW1lPVwiT3V0ZXJ0YWJsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGggQWxpZ25MZWZ0XCI+XHJcbiAgICAgICAgICAgIDxwPntnYW1lT3B0aW9ucy5sZW5NaW59LXtnYW1lT3B0aW9ucy5sZW5NYXh9IGxldHRlciB3b3JkcyBwZXIgc2V0LjwvcD5cclxuICAgICAgICAgICAgPHA+R3Vlc3NlcyB0aGlzIHdvcmQ6IHtndWVzc2VzLmxlbmd0aH08L3A+XHJcbiAgICAgICAgICAgIDxwPkd1ZXNzZXMgdGhpcyBzZXQ6IHtzZXRHdWVzc0NvdW50fTwvcD5cclxuICAgICAgICAgICAge3NldFNvbHZlQ291bnRzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICA8cD5ObyBjb21wbGV0ZWQgc2V0cyB5ZXQ8L3A+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8cD5HdWVzc2VzIGZvciBjb21wbGV0ZWQgc2V0czoge3NldFNvbHZlQ291bnRzLm1hcChudW0gPT4gKDxzcGFuIGtleT17bnVtLnRvU3RyaW5nKCl9PntudW19IDwvc3Bhbj4pKX08L3A+fVxyXG4gICAgICAgICAgICB7Z2FtZU9wdGlvbnMubW9kZSA9PT0gJ2Vhc3knICYmIDw+PHA+PHNwYW4gY2xhc3NOYW1lPVwid21FYXN5TW9kZUxldHRlciB3bUNvcnJlY3RMZXR0ZXJDb3JyZWN0UG9zaXRpb25cIj5DPC9zcGFuPm9ycmVjdCBwb3NpdGlvbjwvcD5cclxuICAgICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cIndtRWFzeU1vZGVMZXR0ZXIgd21Db3JyZWN0TGV0dGVyV3JvbmdQb3NpdGlvblwiPkk8L3NwYW4+bmNvcnJlY3QgcG9zaXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ3bUVhc3lNb2RlTGV0dGVyIHdtV3JvbmdMZXR0ZXJcIj5XPC9zcGFuPnJvbmcgbGV0dGVyPC9wPlxyXG4gICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbiAgICBjb25zdCBNYWluSW5mbyA9IDxkaXYgY2xhc3NOYW1lPVwiT3V0ZXJ0YWJsZVwiPlxyXG4gICAgICAgIHsvKiBJZiBJIGRvbid0IGNoZWNrIGdhbWVPcHRpb25zLnNldCB0aGVuIGl0IHdpbGwgY2FsbCBwaWNrUmFuZG9tV29yZFxyXG4gICAgICAgICAgIGV2ZW4gd2hlbiB0aGUgb3B0aW9ucyBhcmUgbm90IHNldCBhbmQgdGhpcyBpcyBub3QgY2FsbGVkIGJ5IG15XHJcbiAgICAgICAgICAgY29kZS4gSXQgbXVzdCBiZSBzb21lIGtpbmQgb2YgcHJlLXJlbmRlcmluZy5cclxuICAgICAgICAgKi99XHJcbiAgICAgICAge2dhbWVPcHRpb25zLnNldCAmJiBzZWNyZXRXb3JkID09PSAnJyA/IHBpY2tSYW5kb21Xb3JkKCkgOiAnJ31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgIDxoMz5TZWNyZXQgV29yZDoge3NvbHZlZCA/IHNlY3JldFdvcmQgOiBzZWNyZXREaXNwbGF5fTwvaDM+XHJcbiAgICAgICAgICAgIHtzZWNyZXRXb3JkID09PSAnJyA/XHJcbiAgICAgICAgICAgICAgICA8aDE+TG9hZGluZyAuLi48L2gxPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgc29sdmVkID9cclxuICAgICAgICAgICAgICAgICAgICBwcm9tcHRGb3JQbGF5QWdhaW5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbXB0Rm9yR3Vlc3N9XHJcbiAgICAgICAgICAgIHtzb2x2ZWQgP1xyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICBndWVzc2VzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiQWxpZ25DZW50ZXJcIj5TdGFydCBndWVzc2luZzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiQWxpZ25DZW50ZXJcIj5LZWVwIGd1ZXNzaW5nPC9wPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7Z3Vlc3Nlcy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPk5vIGd1ZXNzZXMgeWV0PC9wPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIGRpc3BsYXlHdWVzc2VzfVxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgR3Vlc3NJbmZvID0gPGRpdiBjbGFzc05hbWU9XCJPdXRlcnRhYmxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3bUd1ZXNzSW5mb0RpdlwiPlxyXG4gICAgICAgICAgICBHdWVzcyBpbmZvOlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtndWVzc2VzLm1hcCgoZywgZ2kpID0+IChcclxuICAgICAgICAgICAgIWhpbnRzaGlkZGVuKGcpICYmXHJcbiAgICAgICAgICAgIDxTaG93aW5mbyBrZXk9e2Ake2d1ZXNzZXMubGVuZ3RoIC0gZ2l9LiR7Z31gfSB3b3JkPXtnfSBzaG93SW5zZXJ0cz1cIk5cIiBzaG93U3dhcHM9XCJZXCIgc2hvd0FuYWdyYW1zPVwiWVwiIHNob3dEcm9wcz1cIk5cIiByZW1vdmVFbnRyeT17cmVtb3ZlRW50cnl9IGVudHJ5SW5kZXg9e2dpfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid21HdWVzc0luZm9EaXZcIj5cclxuICAgICAgICAgICAgRXhwbGFuYXRpb246XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJpbnNlcnRDb3VudFwiPiZuYnNwOzEmbmJzcDs8L3NwYW4+U2hvd3MgaW5zZXJ0IGNvdW50cy9sZXR0ZXJzPC9saT5cclxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cInN3YXBDb3VudFwiPiZuYnNwOzImbmJzcDs8L3NwYW4+U2hvd3Mgc3dhcHMgY291bnRzL2xldHRlcnM8L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiYW5hZ3JhbUNvdW50XCI+Mzwvc3Bhbj5TaG93cyBhbmFncmFtIGNvdW50cy93b3JkczwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5DbGljayB0byB0b2dnbGUgYmV0d2VlbiBjb3VudCBhbmQgaW5mbzwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5DbGljayB0aGUgPHNwYW4gY2xhc3NOYW1lPVwiY2xvc2VtZWJ1dHRvblwiPjwvc3Bhbj4gdG8gcmVtb3ZlIHlvdXIgd29yZDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IEJyb3dzZXJMYXlvdXQgPSA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj57SW5pdGlhbEluZm99PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj57TWFpbkluZm99PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+e0d1ZXNzSW5mb308L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IE1vYmlsZUxheW91dCA9IDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHsgc2V0U2hvd0luaXRpYWxJbmZvKCFzaG93SW5pdGlhbEluZm8pOyB9IH0+XHJcbiAgICAgICAgICAgICAgICB7c2hvd0luaXRpYWxJbmZvID8gXCJIaWRlXCIgOiBcIlNob3dcIn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIHtzaG93SW5pdGlhbEluZm8gJiYgSW5pdGlhbEluZm99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge01haW5JbmZvfVxyXG4gICAgPC9kaXY+O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIFdvcmQgTWFzdGVybWluZFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHshZ2FtZU9wdGlvbnMuc2V0ID9cclxuICAgICAgICAgICAgPEdldFdNT3B0aW9ucyBzZXRHYW1lT3B0aW9ucz17c2V0R2FtZU9wdGlvbnN9Lz5cclxuICAgICAgICA6XHJcbiAgICAgICAgICAgIGlzTW9iaWxlID8gTW9iaWxlTGF5b3V0IDogQnJvd3NlckxheW91dFxyXG4gICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd1BsYXlBZ2FpblByb21wdCgpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidG1Db25ncmF0c1wiPvCfkY/wn4+9IFNvbHZlZCBpbiB7Z3Vlc3Nlcy5sZW5ndGh9IG1vdmVzISDwn5GP8J+PvTwvaDQ+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBwaWNrUmFuZG9tV29yZCgpO1xyXG4gICAgICAgICAgICAgICAgc2V0R3Vlc3MoJycpO1xyXG4gICAgICAgICAgICAgICAgc2V0R3Vlc3NlcyhbXSk7XHJcbiAgICAgICAgICAgICAgICBzZXRIaWRlaGludHMoW10pO1xyXG4gICAgICAgICAgICAgICAgc2V0U29sdmVkKGZhbHNlKTtcclxuICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzZWNyZXRXb3JkLmxlbmd0aCA9PT0gZ2FtZU9wdGlvbnMubGVuTWF4ID8gXCJTdGFydCBBbm90aGVyIFNldCFcIiA6IFwiU3RhcnQgTmV4dCBXb3JkXCJ9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge2NvcHlUb0NsaXBib2FyZCgpO319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENsaXBib2FyZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dHdWVzc1Byb21wdCgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIGlzTW9iaWxlID9cclxuICAgICAgICAgICAgPFNob3dDdXN0b21LZXlib2FyZFxyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmRWZXJzaW9uPXtrZXlib2FyZFZlcnNpb259XHJcbiAgICAgICAgICAgICAgICBzZXRLZXlib2FyZFZlcnNpb249e3NldEtleWJvYXJkVmVyc2lvbn1cclxuICAgICAgICAgICAgICAgIGlucHV0V29yZD17Z3Vlc3N9XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dExldHRlcj17aGFuZGxlSW5wdXRMZXR0ZXJ9XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGVMZXR0ZXI9e2hhbmRsZURlbGV0ZUxldHRlcn1cclxuICAgICAgICAgICAgICAgIGRpdlVuZGVyS2V5Ym9hcmQ9e2RpdlVuZGVyS2V5Ym9hcmR9XHJcbiAgICAgICAgICAgID48L1Nob3dDdXN0b21LZXlib2FyZD4gICAgICAgIFxyXG4gICAgICAgIDpcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICB7Z3Vlc3Nlcy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5GaXJzdCBndWVzczo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TmV4dCBndWVzczo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImd1ZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Z3Vlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3Vlc3N3b3JkID0gZS50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKS5yZXBsYWNlKCAvXFxXL2cgLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVVwZGF0ZWRHdWVzcyhndWVzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgfSB9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0d1ZXNzZXNUYWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj57Z2FtZU9wdGlvbnMubW9kZSA9PT0gJ2hhcmQnID9cclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidHJUYWJsZVwiPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkd1ZXNzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+Q29ycmVjdCBMZXR0ZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Db3JyZWN0IFBvc2l0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHtndWVzc2VzLm1hcCgoZyxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YG1vZGUwZ3Vlc3Mke2l9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Z308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiQWxpZ25DZW50ZXJcIj57Y2FsY0NvcnJlY3RMZXR0ZXJDb3VudChnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiQWxpZ25DZW50ZXJcIj57Y2FsY0NvcnJlY3RQb3NpdGlvbkNvdW50KGcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA6XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRyVGFibGVcIj5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgeyFzb2x2ZWQgJiYgZ3Vlc3MgJiYgPHRyIGtleT0nZWFzeW1vZGVndWVzc2xldHRlcnMnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtndWVzcy5zcGxpdChcIlwiKS5tYXAoKGwsaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtgZ3Vlc3NsZXR0ZXIke2l9YH0gY2xhc3NOYW1lPXtgd21FYXN5TW9kZUxldHRlciAke2Nzc0Vhc3lNb2RlTGV0dGVyU2l6ZSgpfWB9PntsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3RyPn1cclxuICAgICAgICAgICAgICAgIHtndWVzc2VzLm1hcCgoZyxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YG1vZGUxZ3Vlc3Mke2l9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtnLnNwbGl0KCcnKS5tYXAoKGwsaikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17YG1vZGUxZ3Vlc3Mke2l9bGV0dGVyJHtqfWB9IGNsYXNzPXtjYWxjTW9kZTFjc3MoZyxqKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICB9PC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBpY2tSYW5kb21Xb3JkKCkge1xyXG4gICAgICAgIGNvbnN0IG5ld2xlbiA9XHJcbiAgICAgICAgICAgIHNlY3JldFdvcmQgP1xyXG4gICAgICAgICAgICAgICAgc2VjcmV0V29yZC5sZW5ndGggPCBnYW1lT3B0aW9ucy5sZW5NaW4gP1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVPcHRpb25zLmxlbk1pblxyXG4gICAgICAgICAgICAgICAgOiBzZWNyZXRXb3JkLmxlbmd0aCA+PSBnYW1lT3B0aW9ucy5sZW5NYXggP1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVPcHRpb25zLmxlbk1pblxyXG4gICAgICAgICAgICAgICAgOiBzZWNyZXRXb3JkLmxlbmd0aCArIDFcclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgZ2FtZU9wdGlvbnMubGVuTWluO1xyXG4gICAgICAgIGlmIChuZXdsZW4gPT09IGdhbWVPcHRpb25zLmxlbk1pbiAmJiBzZXRHdWVzc0NvdW50ICE9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0U2V0R3Vlc3NDb3VudCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYmFzZXVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FTkFCTEUySz9yYW5kb209JyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbS9FTkFCTEUySz9yYW5kb209J1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGJhc2V1cmwgKyBuZXdsZW4udG9TdHJpbmcoKTtcclxuICAgICAgICBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpLnRoZW4odGV4dCA9PiB7XHJcbiAgICAgICAgICAgIGxldCByYW5kb213b3JkPUpTT04ucGFyc2UodGV4dCkudG9VcHBlckNhc2UoKTsgLy8gSXQgaXMganVzdCBhIHdvcmQgaW4gZG91YmxlIHF1b3RlcyBidXQgaXQgaXMganNvbiBub25ldGhlbGVzc1xyXG4gICAgICAgICAgICBzZXRTZWNyZXRXb3JkKHJhbmRvbXdvcmQpO1xyXG4gICAgICAgICAgICBzZXRTZWNyZXREaXNwbGF5KHJhbmRvbXdvcmQuc3BsaXQoXCJcIikubWFwKCgpPT4oXCIqXCIpKSk7XHJcbiAgICAgICAgICAgIGFkZFJvdW5kVG9IaXN0b3J5KHJhbmRvbXdvcmQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2FsY0NvcnJlY3RMZXR0ZXJDb3VudChndWVzc2xldHRlcnMpIHtcclxuICAgICAgICBsZXQgbiA9IDBcclxuICAgICAgICBjb25zdCBhbHBoYWJldCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWidcclxuICAgICAgICBmb3IobGV0IGxldHRlciBvZiBhbHBoYWJldCkge1xyXG4gICAgICAgICAgICBsZXQgeCA9IHNlY3JldFdvcmQuc3BsaXQobGV0dGVyKS5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIGxldCB5ID0gZ3Vlc3NsZXR0ZXJzLnNwbGl0KGxldHRlcikubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICBuID0gbiArICh4IDwgeSA/IHggOiB5KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGNDb3JyZWN0UG9zaXRpb25Db3VudChndWVzc2xldHRlcnMpIHtcclxuICAgICAgICBsZXQgbiA9IDBcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTxzZWNyZXRXb3JkLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIG4gPSBuICsgKHNlY3JldFdvcmRbaV0gPT09IGd1ZXNzbGV0dGVyc1tpXSA/IDEgOiAwKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGNMZXR0ZXJSZXN1bHQoZ3Vlc3NMZXR0ZXJzLCBndWVzc0xldHRlckluZGV4KSB7XHJcbiAgICAgICAgbGV0IGxldHRlciA9IGd1ZXNzTGV0dGVyc1tndWVzc0xldHRlckluZGV4XTtcclxuICAgICAgICAvLyBnIGlzIHRoZSB3aG9lIGd1ZXNzLCBqIGlzIHRoZSBsZXR0ZXIgaW5kZXggZm9yIHdoaWNoIHdlIHdhbnQgdGhlIGNzcyBzdHlsZSBuYW1lXHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gc2VjcmV0V29yZFtndWVzc0xldHRlckluZGV4XSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJDXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWNyZXRXb3JkLmluZGV4T2YobGV0dGVyKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIC8vIHRoZSBndWVzcyBsZXR0ZXIgaXMgaW4gdGhlIHNlY3JldCB3b3JkIGFuZCBpcyBub3QgaW4gdGhlIHJpZ2h0IHNwb3RcclxuICAgICAgICAgICAgLy8gaGFzIGl0IGFscmVhZHkgYmVlbiBjb3VudGVkIGVhcmxpZXIgdGhvdWdoP1xyXG4gICAgICAgICAgICAvLyB3aWxsIGl0IGJlIGNvdW50ZWQgbGF0ZXIgYXMgY29ycmVjdCBsZXR0ZXIgY29ycmVjdCBzcG90P1xyXG4gICAgICAgICAgICBsZXQgbmV4dGpzdGFydCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VjcmV0V29yZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlY3JldFdvcmRbaV0gPT09IGxldHRlciAmJiBndWVzc0xldHRlcnNbaV0gIT09IGxldHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBqZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSBuZXh0anN0YXJ0OyAhamZvdW5kICYmIGogPCBzZWNyZXRXb3JkLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChndWVzc0xldHRlcnNbal0gPT09IGxldHRlciAmJiBzZWNyZXRXb3JkW2pdICE9PSBsZXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID09PSBndWVzc0xldHRlckluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiSVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgamZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRqc3RhcnQgPSBqICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJXXCI7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjYWxjTW9kZTFjc3MoZ3Vlc3NMZXR0ZXJzLGd1ZXNzTGV0dGVySW5kZXgpIHtcclxuICAgICAgICBsZXQgc2l6ZSA9IGNzc0Vhc3lNb2RlTGV0dGVyU2l6ZSgpO1xyXG4gICAgICAgIGxldCBsZXR0ZXJSZXN1bHQgPSBjYWxjTGV0dGVyUmVzdWx0KGd1ZXNzTGV0dGVycywgZ3Vlc3NMZXR0ZXJJbmRleCk7XHJcbiAgICAgICAgaWYgKGxldHRlclJlc3VsdCA9PT0gJ0MnKSB7cmV0dXJuIFwid21FYXN5TW9kZUxldHRlciB3bUNvcnJlY3RMZXR0ZXJDb3JyZWN0UG9zaXRpb24gXCIgKyBzaXplO31cclxuICAgICAgICBpZiAobGV0dGVyUmVzdWx0ID09PSAnSScpIHtyZXR1cm4gXCJ3bUVhc3lNb2RlTGV0dGVyIHdtQ29ycmVjdExldHRlcldyb25nUG9zaXRpb24gXCIgKyBzaXplO31cclxuICAgICAgICByZXR1cm4gXCJ3bUVhc3lNb2RlTGV0dGVyIHdtV3JvbmdMZXR0ZXIgXCIgKyBzaXplO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3NzRWFzeU1vZGVMZXR0ZXJTaXplKCkge1xyXG4gICAgICAgIHJldHVybiAoc2VjcmV0V29yZCAmJiBzZWNyZXRXb3JkLmxlbmd0aCA+IDggPyAnc21hbGwnIDogJ25vcm1hbCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JkTWFzdGVybWluZDsiXSwic291cmNlUm9vdCI6IiJ9