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
        children: solved ? `Secret Word: ${secretWord}` : secretDisplay
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 13
      }, undefined), secretWord === '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Loading ..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 17
      }, undefined) : solved ? promptForPlayAgain : promptForGuess]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }, undefined), !guesses && !guess ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "trParagraph",
      children: "No guesses yet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 178,
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
      lineNumber: 183,
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
      lineNumber: 188,
      columnNumber: 13
    }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "wmGuessInfoDiv",
      children: "Explanation:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "trParagraph",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "insertCount",
          children: "\xA01\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 17
        }, undefined), "Shows insert counts/letters"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "swapCount",
          children: "\xA02\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 17
        }, undefined), "Shows swaps counts/letters"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "anagramCount",
          children: "3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 17
        }, undefined), "Shows anagram counts/words"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Click to toggle between count and info"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: ["Click the ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "closemebutton"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 27
        }, undefined), " to remove your word"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 182,
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
            lineNumber: 205,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col",
            children: MainInfo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        children: GuessInfo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 201,
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
        lineNumber: 214,
        columnNumber: 13
      }, undefined), showInitialInfo && InitialInfo]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 9
    }, undefined), MainInfo]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 212,
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
          lineNumber: 226,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 13
    }, undefined), !gameOptions.set ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wmoptions__WEBPACK_IMPORTED_MODULE_5__.default, {
      setGameOptions: setGameOptions
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 13
    }, undefined) : react_device_detect__WEBPACK_IMPORTED_MODULE_3__.isMobile ? MobileLayout : BrowserLayout]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 222,
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
        lineNumber: 239,
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
        lineNumber: 240,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          copyToClipboard();
        },
        children: "Clipboard"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 238,
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
      lineNumber: 262,
      columnNumber: 13
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "form-group trParagraph",
      children: [guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "First guess:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 21
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Next guess:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 275,
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
        lineNumber: 277,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 271,
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
              lineNumber: 294,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Correct Letter"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Correct Position"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 296,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: guesses.map((g, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: g
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 302,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "AlignCenter",
              children: calcCorrectLetterCount(g)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 303,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "AlignCenter",
              children: calcCorrectPositionCount(g)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 304,
              columnNumber: 25
            }, this)]
          }, `mode0guess${i}`, true, {
            fileName: _jsxFileName,
            lineNumber: 301,
            columnNumber: 21
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 291,
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
              lineNumber: 315,
              columnNumber: 25
            }, this))
          }, 'easymodeguessletters', false, {
            fileName: _jsxFileName,
            lineNumber: 313,
            columnNumber: 38
          }, this), guesses.map((g, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: g.split('').map((l, j) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              class: calcMode1css(g, j),
              children: l
            }, `mode1guess${i}letter${j}`, false, {
              fileName: _jsxFileName,
              lineNumber: 321,
              columnNumber: 29
            }, this))
          }, `mode1guess${i}`, false, {
            fileName: _jsxFileName,
            lineNumber: 319,
            columnNumber: 21
          }, this))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 290,
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
      setSecretDisplay(`Guess the ${randomword.length} letter word:`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vbWFzdGVybWluZC5qcyJdLCJuYW1lcyI6WyJXb3JkTWFzdGVybWluZCIsInNldFdoZXJldG8iLCJnYW1lT3B0aW9ucyIsInNldEdhbWVPcHRpb25zIiwidXNlU3RhdGUiLCJzZXQiLCJoaXN0b3J5Iiwic2V0SGlzdG9yeSIsImtleWJvYXJkVmVyc2lvbiIsInNldEtleWJvYXJkVmVyc2lvbiIsInNldFNvbHZlQ291bnRzIiwic2V0U2V0U29sdmVDb3VudHMiLCJzZXRHdWVzc0NvdW50Iiwic2V0U2V0R3Vlc3NDb3VudCIsInNlY3JldFdvcmQiLCJzZXRTZWNyZXRXb3JkIiwic2VjcmV0RGlzcGxheSIsInNldFNlY3JldERpc3BsYXkiLCJndWVzcyIsInNldEd1ZXNzIiwiZ3Vlc3NlcyIsInNldEd1ZXNzZXMiLCJzb2x2ZWQiLCJzZXRTb2x2ZWQiLCJzaG93SW5pdGlhbEluZm8iLCJzZXRTaG93SW5pdGlhbEluZm8iLCJkaXZVbmRlcktleWJvYXJkIiwic2hvd0RpdlVuZGVyS2V5Ym9hcmQiLCJkaXNwbGF5R3Vlc3NlcyIsInNob3dHdWVzc2VzVGFibGUiLCJwcm9tcHRGb3JHdWVzcyIsInNob3dHdWVzc1Byb21wdCIsInByb21wdEZvclBsYXlBZ2FpbiIsInNob3dQbGF5QWdhaW5Qcm9tcHQiLCJoaWRlaGludHMiLCJzZXRIaWRlaGludHMiLCJoYW5kbGVJbnB1dExldHRlciIsImxldHRlciIsImhhbmRsZVVwZGF0ZWRHdWVzcyIsImhhbmRsZURlbGV0ZUxldHRlciIsImxlbmd0aCIsInN1YnN0cmluZyIsIm1vZGUiLCJndWVzc3dvcmQiLCJ2YWxpZE9ubHkiLCJpc3ZhbGlkIiwiaXNXb3JkVmFsaWQiLCJhbGVydCIsImFkZEd1ZXNzVG9IaXN0b3J5IiwibmV3U2V0R3Vlc3NDb3VudCIsImxlbk1heCIsImFkZFJvdW5kVG9IaXN0b3J5IiwibmV3c2VjcmV0d29yZCIsIm5ld2hpc3RvcnkiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJuZXdyb3VuZCIsImxlbk1pbiIsIm5ld3NldCIsInJvdW5kcyIsIm51bWd1ZXNzZXMiLCJwdXNoIiwiY3VycnNldCIsImN1cnJyb3VuZCIsImd1ZXNzTGV0dGVycyIsIkFycmF5IiwiZnJvbSIsImxldHRlcmluZm8iLCJpIiwiZ3Vlc3NsZXR0ZXIiLCJsZXR0ZXJSZXN1bHQiLCJjYWxjTGV0dGVyUmVzdWx0IiwicmVzdWx0IiwibmV3Z3Vlc3MiLCJzb2x2ZXMiLCJjb3B5VG9DbGlwYm9hcmQiLCJjbGlwcnVsZSIsImNvcHlUZXh0Iiwic2hvd0hlYWRlciIsInMiLCJzaSIsInIiLCJyaSIsImciLCJnaSIsImwiLCJsaSIsImNpdyIsImMiLCJ3IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiaGludHNoaWRkZW4iLCJjaGVja3dvcmQiLCJpbmRleCIsImhpZGV3b3JkIiwicmVtb3ZlRW50cnkiLCJuZXdoaWRlaGludHMiLCJJbml0aWFsSW5mbyIsIm1hcCIsIm51bSIsInRvU3RyaW5nIiwiTWFpbkluZm8iLCJwaWNrUmFuZG9tV29yZCIsIkd1ZXNzSW5mbyIsIkJyb3dzZXJMYXlvdXQiLCJNb2JpbGVMYXlvdXQiLCJpc01vYmlsZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvVXBwZXJDYXNlIiwicmVwbGFjZSIsImNhbGNDb3JyZWN0TGV0dGVyQ291bnQiLCJjYWxjQ29ycmVjdFBvc2l0aW9uQ291bnQiLCJzcGxpdCIsImNzc0Vhc3lNb2RlTGV0dGVyU2l6ZSIsImoiLCJjYWxjTW9kZTFjc3MiLCJuZXdsZW4iLCJiYXNldXJsIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwidGV4dCIsInJhbmRvbXdvcmQiLCJndWVzc2xldHRlcnMiLCJuIiwiYWxwaGFiZXQiLCJ4IiwieSIsImd1ZXNzTGV0dGVySW5kZXgiLCJpbmRleE9mIiwibmV4dGpzdGFydCIsImpmb3VuZCIsInNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1BLGNBQWMsR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFrQjtBQUFBOztBQUNyQyxRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NDLCtDQUFRLENBQUM7QUFBQ0MsT0FBRyxFQUFDO0FBQUwsR0FBRCxDQUE5QztBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkgsK0NBQVEsQ0FBQyxFQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNJLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBd0NMLCtDQUFRLENBQUMsQ0FBRCxDQUF0RDtBQUNBLFFBQU07QUFBQSxPQUFDTSxjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXNDUCwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEQsQ0FKcUMsQ0FJcUI7O0FBQzFELFFBQU07QUFBQSxPQUFDUSxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DVCwrQ0FBUSxDQUFDLENBQUQsQ0FBbEQsQ0FMcUMsQ0FLa0I7O0FBQ3ZELFFBQU07QUFBQSxPQUFDVSxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QlgsK0NBQVEsQ0FBQyxFQUFELENBQTVDO0FBQ0EsUUFBTTtBQUFBLE9BQUNZLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NiLCtDQUFRLENBQUMsRUFBRCxDQUFsRDtBQUNBLFFBQU07QUFBQSxPQUFDYyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQmYsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNnQixPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QmpCLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDa0IsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JuQiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ29CLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBd0NyQiwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEQsQ0FYcUMsQ0FXMEI7O0FBQy9ELFFBQU1zQixnQkFBZ0IsR0FBR0Msb0JBQW9CLEVBQTdDO0FBQ0EsUUFBTUMsY0FBYyxHQUFHQyxnQkFBZ0IsRUFBdkM7QUFDQSxRQUFNQyxjQUFjLEdBQUdDLGVBQWUsRUFBdEM7QUFDQSxRQUFNQyxrQkFBa0IsR0FBR0MsbUJBQW1CLEVBQTlDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCL0IsK0NBQVEsQ0FBQyxFQUFELENBQTFDOztBQUVBLFdBQVNnQyxpQkFBVCxDQUEyQkMsTUFBM0IsRUFBbUM7QUFDL0JDLHNCQUFrQixDQUFDcEIsS0FBSyxHQUFHbUIsTUFBVCxDQUFsQjtBQUNIOztBQUNELFdBQVNFLGtCQUFULEdBQThCO0FBQzFCLFFBQUlyQixLQUFLLENBQUNzQixNQUFOLEdBQWUsQ0FBbkIsRUFBc0I7QUFDbEJyQixjQUFRLENBQUNELEtBQUssQ0FBQ3VCLFNBQU4sQ0FBZ0IsQ0FBaEIsRUFBa0J2QixLQUFLLENBQUNzQixNQUFOLEdBQWEsQ0FBL0IsQ0FBRCxDQUFSO0FBQ0g7QUFDSjs7QUFDRCxXQUFTYixvQkFBVCxHQUFnQztBQUM1QixXQUFPekIsV0FBVyxDQUFDd0MsSUFBWixLQUFxQixNQUFyQixpQkFBK0I7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQSx5QkFBNEN4QixLQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdEM7QUFDSDs7QUFDRCxpQkFBZW9CLGtCQUFmLENBQWtDSyxTQUFsQyxFQUE2QztBQUN6QyxRQUFJQSxTQUFTLENBQUNILE1BQVYsS0FBcUIxQixVQUFVLENBQUMwQixNQUFwQyxFQUE0QztBQUN4QyxVQUFJdEMsV0FBVyxDQUFDMEMsU0FBaEIsRUFBMkI7QUFDdkIsWUFBSUMsT0FBTyxHQUFHLE1BQU1DLCtEQUFXLENBQUNILFNBQUQsQ0FBL0I7O0FBQ0EsWUFBSSxDQUFDRSxPQUFMLEVBQWM7QUFDVkUsZUFBSyxDQUFFLFVBQVNKLFNBQVUsMEJBQXJCLENBQUw7QUFDQTtBQUNIO0FBQ0o7O0FBQ0RLLHVCQUFpQixDQUFDTCxTQUFELENBQWpCO0FBQ0EsWUFBTU0sZ0JBQWdCLEdBQUdyQyxhQUFhLEdBQUcsQ0FBekM7QUFDQUMsc0JBQWdCLENBQUNvQyxnQkFBRCxDQUFoQjtBQUNBNUIsZ0JBQVUsQ0FBQyxDQUFDc0IsU0FBRCxFQUFZLEdBQUd2QixPQUFmLENBQUQsQ0FBVjtBQUNBRCxjQUFRLENBQUMsRUFBRCxDQUFSOztBQUNBLFVBQUl3QixTQUFTLEtBQUs3QixVQUFsQixFQUNBO0FBQ0lTLGlCQUFTLENBQUMsSUFBRCxDQUFUOztBQUNBLFlBQUlULFVBQVUsQ0FBQzBCLE1BQVgsS0FBc0J0QyxXQUFXLENBQUNnRCxNQUF0QyxFQUE4QztBQUMxQ3ZDLDJCQUFpQixDQUFDLENBQUMsR0FBR0QsY0FBSixFQUFvQnVDLGdCQUFwQixDQUFELENBQWpCO0FBQ0g7QUFDSjtBQUNKLEtBcEJELE1Bb0JPO0FBQ0g5QixjQUFRLENBQUN3QixTQUFELENBQVI7QUFDSDtBQUNKOztBQUNELFdBQVNRLGlCQUFULENBQTJCQyxhQUEzQixFQUEwQztBQUN0QztBQUNBO0FBQ0E7QUFDQSxRQUFJQyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNBQUwsQ0FBZWxELE9BQWYsQ0FBWCxDQUFqQjtBQUNBLFFBQUltRCxRQUFRLEdBQUc7QUFBQzNDLGdCQUFVLEVBQUVzQyxhQUFiO0FBQTRCaEMsYUFBTyxFQUFFLEVBQXJDO0FBQXlDRSxZQUFNLEVBQUU7QUFBakQsS0FBZjs7QUFDQSxRQUFJOEIsYUFBYSxDQUFDWixNQUFkLEtBQXlCdEMsV0FBVyxDQUFDd0QsTUFBekMsRUFBaUQ7QUFBRTtBQUMvQyxVQUFJQyxNQUFNLEdBQUc7QUFBQ0MsY0FBTSxFQUFFLENBQUNILFFBQUQsQ0FBVDtBQUFxQkksa0JBQVUsRUFBRTtBQUFqQyxPQUFiO0FBQ0FSLGdCQUFVLENBQUNTLElBQVgsQ0FBZ0JILE1BQWhCO0FBQ0gsS0FIRCxNQUdPO0FBQUU7QUFDTCxVQUFJSSxPQUFPLEdBQUdWLFVBQVUsQ0FBQ0EsVUFBVSxDQUFDYixNQUFYLEdBQWtCLENBQW5CLENBQXhCO0FBQ0F1QixhQUFPLENBQUNILE1BQVIsQ0FBZUUsSUFBZixDQUFvQkwsUUFBcEI7QUFDSDs7QUFDRGxELGNBQVUsQ0FBQzhDLFVBQUQsQ0FBVjtBQUNIOztBQUNELFdBQVNMLGlCQUFULENBQTJCTCxTQUEzQixFQUFzQztBQUNsQyxRQUFJVSxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNBQUwsQ0FBZWxELE9BQWYsQ0FBWCxDQUFqQjtBQUNBLFFBQUl5RCxPQUFPLEdBQUdWLFVBQVUsQ0FBQ0EsVUFBVSxDQUFDYixNQUFYLEdBQWtCLENBQW5CLENBQXhCO0FBQ0EsUUFBSXdCLFNBQVMsR0FBR0QsT0FBTyxDQUFDSCxNQUFSLENBQWVHLE9BQU8sQ0FBQ0gsTUFBUixDQUFlcEIsTUFBZixHQUFzQixDQUFyQyxDQUFoQjtBQUNBLFFBQUl5QixZQUFZLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXeEIsU0FBWCxDQUFuQjtBQUNBLFFBQUl5QixVQUFVLEdBQUcsRUFBakI7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixZQUFZLENBQUN6QixNQUFqQyxFQUF5QzZCLENBQUMsRUFBMUMsRUFBOEM7QUFDMUMsWUFBTUMsV0FBVyxHQUFHTCxZQUFZLENBQUNJLENBQUQsQ0FBaEM7QUFDQSxZQUFNRSxZQUFZLEdBQUdDLGdCQUFnQixDQUFDUCxZQUFELEVBQWVJLENBQWYsQ0FBckMsQ0FGMEMsQ0FFYzs7QUFDeERELGdCQUFVLENBQUNOLElBQVgsQ0FBZ0I7QUFBQ3pCLGNBQU0sRUFBRWlDLFdBQVQ7QUFBc0JHLGNBQU0sRUFBRUY7QUFBOUIsT0FBaEI7QUFDSDs7QUFDRCxRQUFJRyxRQUFRLEdBQUc7QUFBQ3hELFdBQUssRUFBRXlCLFNBQVI7QUFBbUJ5QixnQkFBVSxFQUFFQSxVQUEvQjtBQUEyQ08sWUFBTSxFQUFFaEMsU0FBUyxLQUFLN0I7QUFBakUsS0FBZjtBQUNBaUQsV0FBTyxDQUFDRixVQUFSO0FBQ0FHLGFBQVMsQ0FBQzFDLE1BQVYsR0FBbUJvRCxRQUFRLENBQUNDLE1BQTVCO0FBQ0FYLGFBQVMsQ0FBQzVDLE9BQVYsQ0FBa0IwQyxJQUFsQixDQUF1QlksUUFBdkI7QUFDQW5FLGNBQVUsQ0FBQzhDLFVBQUQsQ0FBVjtBQUNIOztBQUNELFdBQVN1QixlQUFULEdBQTJCO0FBQ3ZCLFFBQUksQ0FBQzFFLFdBQVcsQ0FBQzJFLFFBQWpCLEVBQTJCO0FBQ3ZCO0FBQ0g7O0FBQ0QsUUFBSUMsUUFBUSxHQUFHNUUsV0FBVyxDQUFDNkUsVUFBWixHQUF5QixzREFBekIsR0FBa0YsRUFBakc7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHMUUsT0FBTyxDQUFDa0MsTUFBNUIsRUFBb0N3QyxDQUFDLEVBQXJDLEVBQXlDO0FBQ3JDLFlBQU1DLEVBQUUsR0FBRzNFLE9BQU8sQ0FBQzBFLENBQUQsQ0FBbEI7O0FBQ0EsVUFBSTlFLFdBQVcsQ0FBQzJFLFFBQVosS0FBeUIsS0FBekIsSUFBa0NHLENBQUMsS0FBSzFFLE9BQU8sQ0FBQ2tDLE1BQVIsR0FBaUIsQ0FBN0QsRUFBZ0U7QUFDNUQsWUFBSXRDLFdBQVcsQ0FBQzJFLFFBQVosS0FBeUIsT0FBN0IsRUFBc0M7QUFDbENDLGtCQUFRLElBQUssT0FBTUUsQ0FBQyxHQUFDLENBQUUsS0FBSUMsRUFBRSxDQUFDcEIsVUFBVyxZQUF6QztBQUNIOztBQUNELGFBQUssSUFBSXFCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELEVBQUUsQ0FBQ3JCLE1BQUgsQ0FBVXBCLE1BQTlCLEVBQXNDMEMsQ0FBQyxFQUF2QyxFQUEyQztBQUN2QyxnQkFBTUMsRUFBRSxHQUFHRixFQUFFLENBQUNyQixNQUFILENBQVVzQixDQUFWLENBQVg7O0FBQ0EsY0FBSWhGLFdBQVcsQ0FBQzJFLFFBQVosS0FBeUIsT0FBekIsSUFBb0NLLENBQUMsS0FBS0QsRUFBRSxDQUFDckIsTUFBSCxDQUFVcEIsTUFBVixHQUFtQixDQUFqRSxFQUFvRTtBQUNoRXNDLG9CQUFRLEdBQUksR0FBRUEsUUFBUyxTQUFRSSxDQUFDLEdBQUMsQ0FBRSxLQUFJQyxFQUFFLENBQUMvRCxPQUFILENBQVdvQixNQUFPLFlBQXpEOztBQUNBLGlCQUFLLElBQUk0QyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxFQUFFLENBQUMvRCxPQUFILENBQVdvQixNQUEvQixFQUF1QzRDLENBQUMsRUFBeEMsRUFBNEM7QUFDeEMsb0JBQU1DLEVBQUUsR0FBR0YsRUFBRSxDQUFDL0QsT0FBSCxDQUFXZ0UsQ0FBWCxDQUFYO0FBQ0FOLHNCQUFRLElBQUssR0FBRU8sRUFBRSxDQUFDbkUsS0FBTSxLQUF4Qjs7QUFDQSxtQkFBSyxJQUFJb0UsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsRUFBRSxDQUFDakIsVUFBSCxDQUFjNUIsTUFBbEMsRUFBMEM4QyxDQUFDLEVBQTNDLEVBQStDO0FBQzNDLHNCQUFNQyxFQUFFLEdBQUdGLEVBQUUsQ0FBQ2pCLFVBQUgsQ0FBY2tCLENBQWQsQ0FBWDs7QUFDQSxvQkFBSUMsRUFBRSxDQUFDZCxNQUFILEtBQWMsR0FBbEIsRUFBdUI7QUFDbkJLLDBCQUFRLEdBQUdBLFFBQVEsR0FBRzVFLFdBQVcsQ0FBQ3NGLEdBQVosQ0FBZ0JDLENBQXRDO0FBQ0gsaUJBRkQsTUFFTyxJQUFJRixFQUFFLENBQUNkLE1BQUgsS0FBYyxHQUFsQixFQUF1QjtBQUMxQkssMEJBQVEsR0FBR0EsUUFBUSxHQUFHNUUsV0FBVyxDQUFDc0YsR0FBWixDQUFnQm5CLENBQXRDO0FBQ0gsaUJBRk0sTUFFQTtBQUNIUywwQkFBUSxHQUFHQSxRQUFRLEdBQUc1RSxXQUFXLENBQUNzRixHQUFaLENBQWdCRSxDQUF0QztBQUNIO0FBQ0o7O0FBQ0RaLHNCQUFRLEdBQUdBLFFBQVEsR0FBRyxJQUF0QjtBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBQ0o7O0FBQ0RhLGFBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsU0FBcEIsQ0FBOEJmLFFBQTlCO0FBQ0EvQixTQUFLLENBQUMsbUJBQUQsQ0FBTDtBQUNIOztBQUNELFdBQVMrQyxXQUFULENBQXFCQyxTQUFyQixFQUFnQztBQUM1QixTQUFLLElBQUlDLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHOUQsU0FBUyxDQUFDTSxNQUF0QyxFQUE4Q3dELEtBQUssRUFBbkQsRUFBdUQ7QUFDbkQsWUFBTUMsUUFBUSxHQUFHL0QsU0FBUyxDQUFDOEQsS0FBRCxDQUExQjs7QUFDQSxVQUFJQyxRQUFRLEtBQUtGLFNBQWpCLEVBQTRCO0FBQ3hCLGVBQU8sSUFBUDtBQUNIO0FBQ0o7O0FBQ0QsV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsV0FBU0csV0FBVCxDQUFxQkYsS0FBckIsRUFBNEI7QUFDeEIsUUFBSSxDQUFDRixXQUFXLENBQUMxRSxPQUFPLENBQUM0RSxLQUFELENBQVIsQ0FBaEIsRUFBa0M7QUFDOUIsVUFBSUcsWUFBWSxHQUFHLENBQUMsR0FBR2pFLFNBQUosQ0FBbkI7QUFDQWlFLGtCQUFZLENBQUNyQyxJQUFiLENBQWtCMUMsT0FBTyxDQUFDNEUsS0FBRCxDQUF6QjtBQUNBN0Qsa0JBQVksQ0FBQ2dFLFlBQUQsQ0FBWjtBQUNIO0FBQ0o7O0FBQ0QsUUFBTUMsV0FBVyxnQkFBRztBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUEsMkJBQ2hCO0FBQUssZUFBUyxFQUFDLHVCQUFmO0FBQUEsOEJBQ0k7QUFBQSxtQkFBSWxHLFdBQVcsQ0FBQ3dELE1BQWhCLE9BQXlCeEQsV0FBVyxDQUFDZ0QsTUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQSwwQ0FBdUI5QixPQUFPLENBQUNvQixNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUFBLHlDQUFzQjVCLGFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixFQUlLRixjQUFjLENBQUM4QixNQUFmLEtBQTBCLENBQTFCLGdCQUNHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURILGdCQUdHO0FBQUEsbURBQWdDOUIsY0FBYyxDQUFDMkYsR0FBZixDQUFtQkMsR0FBRyxpQkFBSztBQUFBLHFCQUE0QkEsR0FBNUI7QUFBQSxXQUFXQSxHQUFHLENBQUNDLFFBQUosRUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUEzQixDQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUFIsRUFRS3JHLFdBQVcsQ0FBQ3dDLElBQVosS0FBcUIsTUFBckIsaUJBQStCO0FBQUEsZ0NBQUU7QUFBQSxrQ0FBRztBQUFNLHFCQUFTLEVBQUMsaURBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBRixlQUM1QjtBQUFBLGtDQUFHO0FBQU0scUJBQVMsRUFBQywrQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUQ0QixlQUU1QjtBQUFBLGtDQUFHO0FBQU0scUJBQVMsRUFBQyxnQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUY0QjtBQUFBLHNCQVJwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFwQjs7QUFlQSxRQUFNOEQsUUFBUSxnQkFBRztBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUEsZUFLWnRHLFdBQVcsQ0FBQ0csR0FBWixJQUFtQlMsVUFBVSxLQUFLLEVBQWxDLEdBQXVDMkYsY0FBYyxFQUFyRCxHQUEwRCxFQUw5QyxlQU1iO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSw4QkFDSTtBQUFBLGtCQUFLbkYsTUFBTSxHQUFJLGdCQUFlUixVQUFXLEVBQTlCLEdBQWtDRTtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLEVBRUtGLFVBQVUsS0FBSyxFQUFmLGdCQUNHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURILEdBR0dRLE1BQU0sR0FDRlUsa0JBREUsR0FHRkYsY0FSWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTmEsRUFnQlosQ0FBQ1YsT0FBRCxJQUFZLENBQUNGLEtBQWIsZ0JBQ0c7QUFBRyxlQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESCxHQUdHVSxjQW5CUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBakI7O0FBcUJBLFFBQU04RSxTQUFTLGdCQUFHO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQSw0QkFDZDtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYyxFQUlidEYsT0FBTyxDQUFDaUYsR0FBUixDQUFZLENBQUNqQixDQUFELEVBQUlDLEVBQUosS0FDVCxDQUFDUyxXQUFXLENBQUNWLENBQUQsQ0FBWixpQkFDQSw4REFBQyxpREFBRDtBQUE4QyxVQUFJLEVBQUVBLENBQXBEO0FBQXVELGlCQUFXLEVBQUMsR0FBbkU7QUFBdUUsZUFBUyxFQUFDLEdBQWpGO0FBQXFGLGtCQUFZLEVBQUMsR0FBbEc7QUFBc0csZUFBUyxFQUFDLEdBQWhIO0FBQW9ILGlCQUFXLEVBQUVjLFdBQWpJO0FBQThJLGdCQUFVLEVBQUViO0FBQTFKLE9BQWdCLEdBQUVqRSxPQUFPLENBQUNvQixNQUFSLEdBQWlCNkMsRUFBRyxJQUFHRCxDQUFFLEVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkgsQ0FKYSxlQVFkO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJjLGVBV2Q7QUFBSSxlQUFTLEVBQUMsYUFBZDtBQUFBLDhCQUNJO0FBQUEsZ0NBQUk7QUFBTSxtQkFBUyxFQUFDLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUEsZ0NBQUk7QUFBTSxtQkFBUyxFQUFDLFdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUdJO0FBQUEsZ0NBQUk7QUFBTSxtQkFBUyxFQUFDLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLGVBS0k7QUFBQSw4Q0FBYztBQUFNLG1CQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFsQjs7QUFtQkEsUUFBTXVCLGFBQWEsZ0JBQUc7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQSwyQkFDbEI7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLEtBQWY7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUMsS0FBZjtBQUFBLHNCQUFzQlA7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQUsscUJBQVMsRUFBQyxLQUFmO0FBQUEsc0JBQXNCSTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFPSTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGtCQUFzQkU7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEa0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF0Qjs7QUFXQSxRQUFNRSxZQUFZLGdCQUFHO0FBQUEsNEJBQ2pCO0FBQUEsOEJBQ0k7QUFBUSxpQkFBUyxFQUFDLFVBQWxCO0FBQTZCLGVBQU8sRUFBRSxNQUFNO0FBQUVuRiw0QkFBa0IsQ0FBQyxDQUFDRCxlQUFGLENBQWxCO0FBQXVDLFNBQXJGO0FBQUEsa0JBQ0tBLGVBQWUsR0FBRyxXQUFILEdBQWlCO0FBRHJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosRUFJS0EsZUFBZSxJQUFJNEUsV0FKeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURpQixFQU9oQkksUUFQZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXJCOztBQVNBLHNCQUNJO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQUEsaURBRUk7QUFBUSxpQkFBUyxFQUFDLFVBQWxCO0FBQTZCLGVBQU8sRUFBRSxNQUFNO0FBQUN2RyxvQkFBVSxDQUFDLE1BQUQsQ0FBVjtBQUFvQixTQUFqRTtBQUFBLCtCQUNJO0FBQUcsbUJBQVMsRUFBQyxnQkFBYjtBQUE4Qix5QkFBWSxTQUExQztBQUFvRCxlQUFLLEVBQUMsTUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQU9DLENBQUNDLFdBQVcsQ0FBQ0csR0FBYixnQkFDRyw4REFBQywrQ0FBRDtBQUFjLG9CQUFjLEVBQUVGO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREgsR0FHRzBHLHlEQUFRLEdBQUdELFlBQUgsR0FBa0JELGFBVjlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKOztBQWdCQSxXQUFTMUUsbUJBQVQsR0FBK0I7QUFDM0Isd0JBQU87QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLDhCQUNIO0FBQUksaUJBQVMsRUFBQyxZQUFkO0FBQUEsMERBQTJDYixPQUFPLENBQUNvQixNQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERyxlQUVIO0FBQVEsaUJBQVMsRUFBQyxVQUFsQjtBQUNBLGVBQU8sRUFBRSxZQUFZO0FBQ2pCaUUsd0JBQWM7QUFDZHRGLGtCQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0FFLG9CQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0FjLHNCQUFZLENBQUMsRUFBRCxDQUFaO0FBQ0FaLG1CQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0gsU0FQRDtBQUFBLGtCQVNLVCxVQUFVLENBQUMwQixNQUFYLEtBQXNCdEMsV0FBVyxDQUFDZ0QsTUFBbEMsR0FBMkMsb0JBQTNDLEdBQWtFO0FBVHZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRyxlQWFIO0FBQVEsaUJBQVMsRUFBQyxVQUFsQjtBQUNBLGVBQU8sRUFBRSxNQUFNO0FBQUMwQix5QkFBZTtBQUFJLFNBRG5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFtQkg7O0FBRUQsV0FBUzdDLGVBQVQsR0FBMkI7QUFDdkIsV0FDQThFLHlEQUFRLGdCQUNKLDhEQUFDLHdEQUFEO0FBQ0kscUJBQWUsRUFBRXJHLGVBRHJCO0FBRUksd0JBQWtCLEVBQUVDLGtCQUZ4QjtBQUdJLGVBQVMsRUFBRVMsS0FIZjtBQUlJLHVCQUFpQixFQUFFa0IsaUJBSnZCO0FBS0ksd0JBQWtCLEVBQUVHLGtCQUx4QjtBQU1JLHNCQUFnQixFQUFFYjtBQU50QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREksZ0JBVUo7QUFBSyxlQUFTLEVBQUMsd0JBQWY7QUFBQSxpQkFDS04sT0FBTyxDQUFDb0IsTUFBUixLQUFtQixDQUFuQixnQkFDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURILGdCQUdHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSlIsZUFNSTtBQUFPLGlCQUFTLEVBQUMsY0FBakI7QUFDSSxZQUFJLEVBQUMsT0FEVDtBQUVJLGFBQUssRUFBRXRCLEtBRlg7QUFHSSxvQkFBWSxFQUFDLGNBSGpCO0FBSUksZ0JBQVEsRUFBRzRGLENBQUQsSUFBTztBQUNiLGdCQUFNbkUsU0FBUyxHQUFHbUUsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsQ0FBZUMsV0FBZixHQUE2QkMsT0FBN0IsQ0FBc0MsS0FBdEMsRUFBOEMsRUFBOUMsQ0FBbEI7QUFDQTVFLDRCQUFrQixDQUFDSyxTQUFELENBQWxCO0FBQ1A7QUFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEo7QUEyQkg7O0FBRUQsV0FBU2QsZ0JBQVQsR0FBNEI7QUFDeEIsd0JBQU87QUFBQSxnQkFBTTNCLFdBQVcsQ0FBQ3dDLElBQVosS0FBcUIsTUFBckIsZ0JBQ2I7QUFBTyxpQkFBUyxFQUFDLFNBQWpCO0FBQUEsZ0NBQ0k7QUFBQSxpQ0FDSTtBQUFBLG9DQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBUUk7QUFBQSxvQkFDS3RCLE9BQU8sQ0FBQ2lGLEdBQVIsQ0FBWSxDQUFDakIsQ0FBRCxFQUFHZixDQUFILGtCQUNUO0FBQUEsb0NBQ0k7QUFBQSx3QkFBS2U7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBSSx1QkFBUyxFQUFDLGFBQWQ7QUFBQSx3QkFBNkIrQixzQkFBc0IsQ0FBQy9CLENBQUQ7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSixlQUdJO0FBQUksdUJBQVMsRUFBQyxhQUFkO0FBQUEsd0JBQTZCZ0Msd0JBQXdCLENBQUNoQyxDQUFEO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEo7QUFBQSxhQUFVLGFBQVlmLENBQUUsRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRGEsZ0JBcUJiO0FBQU8saUJBQVMsRUFBQyxTQUFqQjtBQUFBLCtCQUNJO0FBQUEscUJBQ0ssQ0FBQy9DLE1BQUQsSUFBV0osS0FBWCxpQkFBb0I7QUFBQSxzQkFDaEJBLEtBQUssQ0FBQ21HLEtBQU4sQ0FBWSxFQUFaLEVBQWdCaEIsR0FBaEIsQ0FBb0IsQ0FBQ2YsQ0FBRCxFQUFHakIsQ0FBSCxrQkFDakI7QUFBNEIsdUJBQVMsRUFBRyxvQkFBbUJpRCxxQkFBcUIsRUFBRyxFQUFuRjtBQUFBLHdCQUF1RmhDO0FBQXZGLGVBQVUsY0FBYWpCLENBQUUsRUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESDtBQURnQixhQUFRLHNCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRHpCLEVBTUtqRCxPQUFPLENBQUNpRixHQUFSLENBQVksQ0FBQ2pCLENBQUQsRUFBR2YsQ0FBSCxrQkFDVDtBQUFBLHNCQUNLZSxDQUFDLENBQUNpQyxLQUFGLENBQVEsRUFBUixFQUFZaEIsR0FBWixDQUFnQixDQUFDZixDQUFELEVBQUdpQyxDQUFILGtCQUNiO0FBQXFDLG1CQUFLLEVBQUVDLFlBQVksQ0FBQ3BDLENBQUQsRUFBR21DLENBQUgsQ0FBeEQ7QUFBQSx3QkFDS2pDO0FBREwsZUFBVSxhQUFZakIsQ0FBRSxTQUFRa0QsQ0FBRSxFQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURIO0FBREwsYUFBVSxhQUFZbEQsQ0FBRSxFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURILENBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXJCTztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUF3Q0g7O0FBRUQsV0FBU29DLGNBQVQsR0FBMEI7QUFDdEIsVUFBTWdCLE1BQU0sR0FDUjNHLFVBQVUsR0FDTkEsVUFBVSxDQUFDMEIsTUFBWCxHQUFvQnRDLFdBQVcsQ0FBQ3dELE1BQWhDLEdBQ0l4RCxXQUFXLENBQUN3RCxNQURoQixHQUVFNUMsVUFBVSxDQUFDMEIsTUFBWCxJQUFxQnRDLFdBQVcsQ0FBQ2dELE1BQWpDLEdBQ0VoRCxXQUFXLENBQUN3RCxNQURkLEdBRUE1QyxVQUFVLENBQUMwQixNQUFYLEdBQW9CLENBTGhCLEdBT050QyxXQUFXLENBQUN3RCxNQVJwQjs7QUFTQSxRQUFJK0QsTUFBTSxLQUFLdkgsV0FBVyxDQUFDd0QsTUFBdkIsSUFBaUM5QyxhQUFhLEtBQUssQ0FBdkQsRUFDQTtBQUNJQyxzQkFBZ0IsQ0FBQyxDQUFELENBQWhCO0FBQ0g7O0FBQ0QsVUFBTTZHLE9BQU8sR0FBSSxLQUFELEdBQW9FLHdDQUFwRSxHQUErRyxDQUEvSDtBQUNBLFVBQU1DLEdBQUcsR0FBR0QsT0FBTyxHQUFHRCxNQUFNLENBQUNsQixRQUFQLEVBQXRCO0FBQ0FxQixTQUFLLENBQUNELEdBQUQsQ0FBTCxDQUFXRSxJQUFYLENBQWdCQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUF2QixFQUFtQ0YsSUFBbkMsQ0FBd0NFLElBQUksSUFBSTtBQUM1QyxVQUFJQyxVQUFVLEdBQUMxRSxJQUFJLENBQUNDLEtBQUwsQ0FBV3dFLElBQVgsRUFBaUJkLFdBQWpCLEVBQWYsQ0FENEMsQ0FDRzs7QUFDL0NsRyxtQkFBYSxDQUFDaUgsVUFBRCxDQUFiO0FBQ0EvRyxzQkFBZ0IsQ0FBRSxhQUFZK0csVUFBVSxDQUFDeEYsTUFBTyxlQUFoQyxDQUFoQjtBQUNBVyx1QkFBaUIsQ0FBQzZFLFVBQUQsQ0FBakI7QUFDSCxLQUxEO0FBTUg7O0FBRUQsV0FBU2Isc0JBQVQsQ0FBZ0NjLFlBQWhDLEVBQThDO0FBQzFDLFFBQUlDLENBQUMsR0FBRyxDQUFSO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLDRCQUFqQjs7QUFDQSxTQUFJLElBQUk5RixNQUFSLElBQWtCOEYsUUFBbEIsRUFBNEI7QUFDeEIsVUFBSUMsQ0FBQyxHQUFHdEgsVUFBVSxDQUFDdUcsS0FBWCxDQUFpQmhGLE1BQWpCLEVBQXlCRyxNQUF6QixHQUFrQyxDQUExQztBQUNBLFVBQUk2RixDQUFDLEdBQUdKLFlBQVksQ0FBQ1osS0FBYixDQUFtQmhGLE1BQW5CLEVBQTJCRyxNQUEzQixHQUFvQyxDQUE1QztBQUNBMEYsT0FBQyxHQUFHQSxDQUFDLElBQUlFLENBQUMsR0FBR0MsQ0FBSixHQUFRRCxDQUFSLEdBQVlDLENBQWhCLENBQUw7QUFDSDs7QUFDRCxXQUFPSCxDQUFQO0FBQ0g7O0FBRUQsV0FBU2Qsd0JBQVQsQ0FBa0NhLFlBQWxDLEVBQWdEO0FBQzVDLFFBQUlDLENBQUMsR0FBRyxDQUFSOztBQUNBLFNBQUksSUFBSTdELENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ3ZELFVBQVUsQ0FBQzBCLE1BQTFCLEVBQWtDLEVBQUU2QixDQUFwQyxFQUF1QztBQUNuQzZELE9BQUMsR0FBR0EsQ0FBQyxJQUFJcEgsVUFBVSxDQUFDdUQsQ0FBRCxDQUFWLEtBQWtCNEQsWUFBWSxDQUFDNUQsQ0FBRCxDQUE5QixHQUFvQyxDQUFwQyxHQUF3QyxDQUE1QyxDQUFMO0FBQ0g7O0FBQ0QsV0FBTzZELENBQVA7QUFDSDs7QUFFRCxXQUFTMUQsZ0JBQVQsQ0FBMEJQLFlBQTFCLEVBQXdDcUUsZ0JBQXhDLEVBQTBEO0FBQ3RELFFBQUlqRyxNQUFNLEdBQUc0QixZQUFZLENBQUNxRSxnQkFBRCxDQUF6QixDQURzRCxDQUV0RDs7QUFDQSxRQUFJakcsTUFBTSxLQUFLdkIsVUFBVSxDQUFDd0gsZ0JBQUQsQ0FBekIsRUFBNkM7QUFDekMsYUFBTyxHQUFQO0FBQ0g7O0FBQ0QsUUFBSXhILFVBQVUsQ0FBQ3lILE9BQVgsQ0FBbUJsRyxNQUFuQixJQUE2QixDQUFDLENBQWxDLEVBQXFDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLFVBQUltRyxVQUFVLEdBQUcsQ0FBakI7O0FBQ0EsV0FBSyxJQUFJbkUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3ZELFVBQVUsQ0FBQzBCLE1BQS9CLEVBQXVDNkIsQ0FBQyxFQUF4QyxFQUE0QztBQUN4QyxZQUFJdkQsVUFBVSxDQUFDdUQsQ0FBRCxDQUFWLEtBQWtCaEMsTUFBbEIsSUFBNEI0QixZQUFZLENBQUNJLENBQUQsQ0FBWixLQUFvQmhDLE1BQXBELEVBQTREO0FBQ3hELGNBQUlvRyxNQUFNLEdBQUcsS0FBYjs7QUFDQSxlQUFJLElBQUlsQixDQUFDLEdBQUdpQixVQUFaLEVBQXdCLENBQUNDLE1BQUQsSUFBV2xCLENBQUMsR0FBR3pHLFVBQVUsQ0FBQzBCLE1BQWxELEVBQTBEK0UsQ0FBQyxFQUEzRCxFQUErRDtBQUMzRCxnQkFBSXRELFlBQVksQ0FBQ3NELENBQUQsQ0FBWixLQUFvQmxGLE1BQXBCLElBQThCdkIsVUFBVSxDQUFDeUcsQ0FBRCxDQUFWLEtBQWtCbEYsTUFBcEQsRUFBNEQ7QUFDeEQsa0JBQUlrRixDQUFDLEtBQUtlLGdCQUFWLEVBQTRCO0FBQ3hCLHVCQUFPLEdBQVA7QUFDSDs7QUFDREcsb0JBQU0sR0FBRyxJQUFUO0FBQ0FELHdCQUFVLEdBQUdqQixDQUFDLEdBQUcsQ0FBakI7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQUNKOztBQUNELFdBQU8sR0FBUDtBQUNIOztBQUNELFdBQVNDLFlBQVQsQ0FBc0J2RCxZQUF0QixFQUFtQ3FFLGdCQUFuQyxFQUFxRDtBQUNqRCxRQUFJSSxJQUFJLEdBQUdwQixxQkFBcUIsRUFBaEM7QUFDQSxRQUFJL0MsWUFBWSxHQUFHQyxnQkFBZ0IsQ0FBQ1AsWUFBRCxFQUFlcUUsZ0JBQWYsQ0FBbkM7O0FBQ0EsUUFBSS9ELFlBQVksS0FBSyxHQUFyQixFQUEwQjtBQUFDLGFBQU8scURBQXFEbUUsSUFBNUQ7QUFBa0U7O0FBQzdGLFFBQUluRSxZQUFZLEtBQUssR0FBckIsRUFBMEI7QUFBQyxhQUFPLG1EQUFtRG1FLElBQTFEO0FBQWdFOztBQUMzRixXQUFPLG9DQUFvQ0EsSUFBM0M7QUFDSDs7QUFDRCxXQUFTcEIscUJBQVQsR0FBaUM7QUFDN0IsV0FBUXhHLFVBQVUsSUFBSUEsVUFBVSxDQUFDMEIsTUFBWCxHQUFvQixDQUFsQyxHQUFzQyxPQUF0QyxHQUFnRCxRQUF4RDtBQUNIO0FBQ0osQ0F0WkQ7O0dBQU14QyxjOztLQUFBQSxjO0FBd1pOLCtEQUFlQSxjQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA4MjBkNWVhNTk0MWQ4YjZkMTk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaG93aW5mbyBmcm9tICcuLi93aS9zaG93aW5mbydcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0J1xyXG5pbXBvcnQgU2hvd0N1c3RvbUtleWJvYXJkIGZyb20gJy4uL3Nob3dDdXN0b21LZXlib2FyZCc7XHJcbmltcG9ydCBHZXRXTU9wdGlvbnMgZnJvbSAnLi93bW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBpc1dvcmRWYWxpZCB9IGZyb20gJy4uLy4uL2xpYi93b3JkZnVuY3Rpb25zJztcclxuY29uc3QgV29yZE1hc3Rlcm1pbmQgPSAoe3NldFdoZXJldG99KSA9PiB7XHJcbiAgICBjb25zdCBbZ2FtZU9wdGlvbnMsIHNldEdhbWVPcHRpb25zXSA9IHVzZVN0YXRlKHtzZXQ6ZmFsc2V9KTtcclxuICAgIGNvbnN0IFtoaXN0b3J5LCBzZXRIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtrZXlib2FyZFZlcnNpb24sIHNldEtleWJvYXJkVmVyc2lvbl0gPSB1c2VTdGF0ZSgyKTtcclxuICAgIGNvbnN0IFtzZXRTb2x2ZUNvdW50cywgc2V0U2V0U29sdmVDb3VudHNdID0gdXNlU3RhdGUoW10pOyAvLyBob3cgbWFueSBndWVzc2VzIHRvIHNvbHZlIGVhY2ggc2V0XHJcbiAgICBjb25zdCBbc2V0R3Vlc3NDb3VudCwgc2V0U2V0R3Vlc3NDb3VudF0gPSB1c2VTdGF0ZSgwKTsgLy8gdG90YWwgZ3Vlc3MgY291bnQgZm9yIHRoZSBtaW4tbWF4IHdvcmQgbGVuIHNldFxyXG4gICAgY29uc3QgW3NlY3JldFdvcmQsIHNldFNlY3JldFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlY3JldERpc3BsYXksIHNldFNlY3JldERpc3BsYXldID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2d1ZXNzLCBzZXRHdWVzc10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZ3Vlc3Nlcywgc2V0R3Vlc3Nlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc29sdmVkLCBzZXRTb2x2ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dJbml0aWFsSW5mbywgc2V0U2hvd0luaXRpYWxJbmZvXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gc2V0IGluZm8sIGVhc3kgbW9kZSBpbmZvXHJcbiAgICBjb25zdCBkaXZVbmRlcktleWJvYXJkID0gc2hvd0RpdlVuZGVyS2V5Ym9hcmQoKTtcclxuICAgIGNvbnN0IGRpc3BsYXlHdWVzc2VzID0gc2hvd0d1ZXNzZXNUYWJsZSgpO1xyXG4gICAgY29uc3QgcHJvbXB0Rm9yR3Vlc3MgPSBzaG93R3Vlc3NQcm9tcHQoKTtcclxuICAgIGNvbnN0IHByb21wdEZvclBsYXlBZ2FpbiA9IHNob3dQbGF5QWdhaW5Qcm9tcHQoKTtcclxuICAgIGNvbnN0IFtoaWRlaGludHMsIHNldEhpZGVoaW50c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlSW5wdXRMZXR0ZXIobGV0dGVyKSB7XHJcbiAgICAgICAgaGFuZGxlVXBkYXRlZEd1ZXNzKGd1ZXNzICsgbGV0dGVyKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZURlbGV0ZUxldHRlcigpIHtcclxuICAgICAgICBpZiAoZ3Vlc3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzZXRHdWVzcyhndWVzcy5zdWJzdHJpbmcoMCxndWVzcy5sZW5ndGgtMSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNob3dEaXZVbmRlcktleWJvYXJkKCkge1xyXG4gICAgICAgIHJldHVybiBnYW1lT3B0aW9ucy5tb2RlID09PSAnaGFyZCcgJiYgPGRpdiBjbGFzc05hbWU9XCJ3bVdvcmRVbmRlcktleWJvYXJkXCI+Jm5ic3A7e2d1ZXNzfSZuYnNwOzwvZGl2PjtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVVwZGF0ZWRHdWVzcyhndWVzc3dvcmQpIHtcclxuICAgICAgICBpZiAoZ3Vlc3N3b3JkLmxlbmd0aCA9PT0gc2VjcmV0V29yZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgaWYgKGdhbWVPcHRpb25zLnZhbGlkT25seSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzdmFsaWQgPSBhd2FpdCBpc1dvcmRWYWxpZChndWVzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc3ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoYFNvcnJ5LCAke2d1ZXNzd29yZH0gaXMgbm90IGluIG15IHdvcmQgbGlzdC5gKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWRkR3Vlc3NUb0hpc3RvcnkoZ3Vlc3N3b3JkKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3U2V0R3Vlc3NDb3VudCA9IHNldEd1ZXNzQ291bnQgKyAxO1xyXG4gICAgICAgICAgICBzZXRTZXRHdWVzc0NvdW50KG5ld1NldEd1ZXNzQ291bnQpO1xyXG4gICAgICAgICAgICBzZXRHdWVzc2VzKFtndWVzc3dvcmQsIC4uLmd1ZXNzZXNdKTtcclxuICAgICAgICAgICAgc2V0R3Vlc3MoJycpO1xyXG4gICAgICAgICAgICBpZiAoZ3Vlc3N3b3JkID09PSBzZWNyZXRXb3JkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZXRTb2x2ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VjcmV0V29yZC5sZW5ndGggPT09IGdhbWVPcHRpb25zLmxlbk1heCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNldFNvbHZlQ291bnRzKFsuLi5zZXRTb2x2ZUNvdW50cywgbmV3U2V0R3Vlc3NDb3VudF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0R3Vlc3MoZ3Vlc3N3b3JkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhZGRSb3VuZFRvSGlzdG9yeShuZXdzZWNyZXR3b3JkKSB7XHJcbiAgICAgICAgLy8gaGlzdG9yeSBhcnJheSBieSBzZXQsIG5ldyBzZXRzIGF0IGxhc3QgcG9zaXRpb25cclxuICAgICAgICAvLyBlYWNoIHNldCBpcyBhbiBhcnJheSBvZiByb3VuZHMgKG1pbiB0byBtYXggbGVuZ3RoKVxyXG4gICAgICAgIC8vIGVhY2ggcm91bmQgaGFzIHNlY3JldCB3b3JkIGFuZCBndWVzcyBpbmZvXHJcbiAgICAgICAgbGV0IG5ld2hpc3RvcnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGhpc3RvcnkpKTtcclxuICAgICAgICBsZXQgbmV3cm91bmQgPSB7c2VjcmV0V29yZDogbmV3c2VjcmV0d29yZCwgZ3Vlc3NlczogW10sIHNvbHZlZDogZmFsc2V9O1xyXG4gICAgICAgIGlmIChuZXdzZWNyZXR3b3JkLmxlbmd0aCA9PT0gZ2FtZU9wdGlvbnMubGVuTWluKSB7IC8vIG5ldyBzZXRcclxuICAgICAgICAgICAgbGV0IG5ld3NldCA9IHtyb3VuZHM6IFtuZXdyb3VuZF0sIG51bWd1ZXNzZXM6IDB9O1xyXG4gICAgICAgICAgICBuZXdoaXN0b3J5LnB1c2gobmV3c2V0KTtcclxuICAgICAgICB9IGVsc2UgeyAvLyBleGlzdGluZyBzZXRcclxuICAgICAgICAgICAgbGV0IGN1cnJzZXQgPSBuZXdoaXN0b3J5W25ld2hpc3RvcnkubGVuZ3RoLTFdO1xyXG4gICAgICAgICAgICBjdXJyc2V0LnJvdW5kcy5wdXNoKG5ld3JvdW5kKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SGlzdG9yeShuZXdoaXN0b3J5KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFkZEd1ZXNzVG9IaXN0b3J5KGd1ZXNzd29yZCkge1xyXG4gICAgICAgIGxldCBuZXdoaXN0b3J5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShoaXN0b3J5KSk7XHJcbiAgICAgICAgbGV0IGN1cnJzZXQgPSBuZXdoaXN0b3J5W25ld2hpc3RvcnkubGVuZ3RoLTFdO1xyXG4gICAgICAgIGxldCBjdXJycm91bmQgPSBjdXJyc2V0LnJvdW5kc1tjdXJyc2V0LnJvdW5kcy5sZW5ndGgtMV07XHJcbiAgICAgICAgbGV0IGd1ZXNzTGV0dGVycyA9IEFycmF5LmZyb20oZ3Vlc3N3b3JkKTtcclxuICAgICAgICBsZXQgbGV0dGVyaW5mbyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3Vlc3NMZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGd1ZXNzbGV0dGVyID0gZ3Vlc3NMZXR0ZXJzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBsZXR0ZXJSZXN1bHQgPSBjYWxjTGV0dGVyUmVzdWx0KGd1ZXNzTGV0dGVycywgaSk7IC8vIEMsIEksIG9yIFdcclxuICAgICAgICAgICAgbGV0dGVyaW5mby5wdXNoKHtsZXR0ZXI6IGd1ZXNzbGV0dGVyLCByZXN1bHQ6IGxldHRlclJlc3VsdH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbmV3Z3Vlc3MgPSB7Z3Vlc3M6IGd1ZXNzd29yZCwgbGV0dGVyaW5mbzogbGV0dGVyaW5mbywgc29sdmVzOiBndWVzc3dvcmQgPT09IHNlY3JldFdvcmR9O1xyXG4gICAgICAgIGN1cnJzZXQubnVtZ3Vlc3NlcysrO1xyXG4gICAgICAgIGN1cnJyb3VuZC5zb2x2ZWQgPSBuZXdndWVzcy5zb2x2ZXM7XHJcbiAgICAgICAgY3VycnJvdW5kLmd1ZXNzZXMucHVzaChuZXdndWVzcyk7XHJcbiAgICAgICAgc2V0SGlzdG9yeShuZXdoaXN0b3J5KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNvcHlUb0NsaXBib2FyZCgpIHtcclxuICAgICAgICBpZiAoIWdhbWVPcHRpb25zLmNsaXBydWxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvcHlUZXh0ID0gZ2FtZU9wdGlvbnMuc2hvd0hlYWRlciA/IFwiV29yZCBNYXN0ZXJtaW5kXFxuaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20vXFxuXCIgOiBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IHMgPSAwOyBzIDwgaGlzdG9yeS5sZW5ndGg7IHMrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzaSA9IGhpc3Rvcnlbc107XHJcbiAgICAgICAgICAgIGlmIChnYW1lT3B0aW9ucy5jbGlwcnVsZSA9PT0gJ2FsbCcgfHwgcyA9PT0gaGlzdG9yeS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZU9wdGlvbnMuY2xpcHJ1bGUgIT09ICdyb3VuZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3B5VGV4dCArPSBgU2V0ICR7cysxfTogJHtzaS5udW1ndWVzc2VzfSBndWVzc2VzXFxuYFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCBzaS5yb3VuZHMubGVuZ3RoOyByKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByaSA9IHNpLnJvdW5kc1tyXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU9wdGlvbnMuY2xpcHJ1bGUgIT09ICdyb3VuZCcgfHwgciA9PT0gc2kucm91bmRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29weVRleHQgPSBgJHtjb3B5VGV4dH1Sb3VuZCAke3IrMX06ICR7cmkuZ3Vlc3Nlcy5sZW5ndGh9IGd1ZXNzZXNcXG5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBnID0gMDsgZyA8IHJpLmd1ZXNzZXMubGVuZ3RoOyBnKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdpID0gcmkuZ3Vlc3Nlc1tnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlUZXh0ICs9IGAke2dpLmd1ZXNzfTpcXG5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbCA9IDA7IGwgPCBnaS5sZXR0ZXJpbmZvLmxlbmd0aDsgbCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGkgPSBnaS5sZXR0ZXJpbmZvW2xdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaS5yZXN1bHQgPT09ICdDJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3B5VGV4dCA9IGNvcHlUZXh0ICsgZ2FtZU9wdGlvbnMuY2l3LmM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsaS5yZXN1bHQgPT09ICdJJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3B5VGV4dCA9IGNvcHlUZXh0ICsgZ2FtZU9wdGlvbnMuY2l3Lmk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29weVRleHQgPSBjb3B5VGV4dCArIGdhbWVPcHRpb25zLmNpdy53O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlUZXh0ID0gY29weVRleHQgKyBcIlxcblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvcHlUZXh0KTtcclxuICAgICAgICBhbGVydChcIkNsaXBib2FyZCB1cGRhdGVkXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGludHNoaWRkZW4oY2hlY2t3b3JkKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGhpZGVoaW50cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgaGlkZXdvcmQgPSBoaWRlaGludHNbaW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoaGlkZXdvcmQgPT09IGNoZWNrd29yZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRW50cnkoaW5kZXgpIHtcclxuICAgICAgICBpZiAoIWhpbnRzaGlkZGVuKGd1ZXNzZXNbaW5kZXhdKSkge1xyXG4gICAgICAgICAgICBsZXQgbmV3aGlkZWhpbnRzID0gWy4uLmhpZGVoaW50c107XHJcbiAgICAgICAgICAgIG5ld2hpZGVoaW50cy5wdXNoKGd1ZXNzZXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgc2V0SGlkZWhpbnRzKG5ld2hpZGVoaW50cyk7ICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBJbml0aWFsSW5mbyA9IDxkaXYgY2xhc3NOYW1lPVwiT3V0ZXJ0YWJsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGggQWxpZ25MZWZ0XCI+XHJcbiAgICAgICAgICAgIDxwPntnYW1lT3B0aW9ucy5sZW5NaW59LXtnYW1lT3B0aW9ucy5sZW5NYXh9IGxldHRlciB3b3JkcyBwZXIgc2V0LjwvcD5cclxuICAgICAgICAgICAgPHA+R3Vlc3NlcyB0aGlzIHdvcmQ6IHtndWVzc2VzLmxlbmd0aH08L3A+XHJcbiAgICAgICAgICAgIDxwPkd1ZXNzZXMgdGhpcyBzZXQ6IHtzZXRHdWVzc0NvdW50fTwvcD5cclxuICAgICAgICAgICAge3NldFNvbHZlQ291bnRzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICA8cD5ObyBjb21wbGV0ZWQgc2V0cyB5ZXQ8L3A+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8cD5HdWVzc2VzIGZvciBjb21wbGV0ZWQgc2V0czoge3NldFNvbHZlQ291bnRzLm1hcChudW0gPT4gKDxzcGFuIGtleT17bnVtLnRvU3RyaW5nKCl9PntudW19IDwvc3Bhbj4pKX08L3A+fVxyXG4gICAgICAgICAgICB7Z2FtZU9wdGlvbnMubW9kZSA9PT0gJ2Vhc3knICYmIDw+PHA+PHNwYW4gY2xhc3NOYW1lPVwid21FYXN5TW9kZUxldHRlciB3bUNvcnJlY3RMZXR0ZXJDb3JyZWN0UG9zaXRpb25cIj5DPC9zcGFuPm9ycmVjdCBwb3NpdGlvbjwvcD5cclxuICAgICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cIndtRWFzeU1vZGVMZXR0ZXIgd21Db3JyZWN0TGV0dGVyV3JvbmdQb3NpdGlvblwiPkk8L3NwYW4+bmNvcnJlY3QgcG9zaXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ3bUVhc3lNb2RlTGV0dGVyIHdtV3JvbmdMZXR0ZXJcIj5XPC9zcGFuPnJvbmcgbGV0dGVyPC9wPlxyXG4gICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbiAgICBjb25zdCBNYWluSW5mbyA9IDxkaXYgY2xhc3NOYW1lPVwiT3V0ZXJ0YWJsZVwiPlxyXG4gICAgICAgIHsvKiBJZiBJIGRvbid0IGNoZWNrIGdhbWVPcHRpb25zLnNldCB0aGVuIGl0IHdpbGwgY2FsbCBwaWNrUmFuZG9tV29yZFxyXG4gICAgICAgICAgIGV2ZW4gd2hlbiB0aGUgb3B0aW9ucyBhcmUgbm90IHNldCBhbmQgdGhpcyBpcyBub3QgY2FsbGVkIGJ5IG15XHJcbiAgICAgICAgICAgY29kZS4gSXQgbXVzdCBiZSBzb21lIGtpbmQgb2YgcHJlLXJlbmRlcmluZy5cclxuICAgICAgICAgKi99XHJcbiAgICAgICAge2dhbWVPcHRpb25zLnNldCAmJiBzZWNyZXRXb3JkID09PSAnJyA/IHBpY2tSYW5kb21Xb3JkKCkgOiAnJ31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgIDxoMz57c29sdmVkID8gYFNlY3JldCBXb3JkOiAke3NlY3JldFdvcmR9YCA6IHNlY3JldERpc3BsYXl9PC9oMz5cclxuICAgICAgICAgICAge3NlY3JldFdvcmQgPT09ICcnID9cclxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nIC4uLjwvaDE+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICBzb2x2ZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21wdEZvclBsYXlBZ2FpblxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICBwcm9tcHRGb3JHdWVzc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7IWd1ZXNzZXMgJiYgIWd1ZXNzID9cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5ObyBndWVzc2VzIHlldDwvcD5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICBkaXNwbGF5R3Vlc3Nlc31cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IEd1ZXNzSW5mbyA9IDxkaXYgY2xhc3NOYW1lPVwiT3V0ZXJ0YWJsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid21HdWVzc0luZm9EaXZcIj5cclxuICAgICAgICAgICAgR3Vlc3MgaW5mbzpcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7Z3Vlc3Nlcy5tYXAoKGcsIGdpKSA9PiAoXHJcbiAgICAgICAgICAgICFoaW50c2hpZGRlbihnKSAmJlxyXG4gICAgICAgICAgICA8U2hvd2luZm8ga2V5PXtgJHtndWVzc2VzLmxlbmd0aCAtIGdpfS4ke2d9YH0gd29yZD17Z30gc2hvd0luc2VydHM9XCJOXCIgc2hvd1N3YXBzPVwiWVwiIHNob3dBbmFncmFtcz1cIllcIiBzaG93RHJvcHM9XCJOXCIgcmVtb3ZlRW50cnk9e3JlbW92ZUVudHJ5fSBlbnRyeUluZGV4PXtnaX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndtR3Vlc3NJbmZvRGl2XCI+XHJcbiAgICAgICAgICAgIEV4cGxhbmF0aW9uOlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiaW5zZXJ0Q291bnRcIj4mbmJzcDsxJm5ic3A7PC9zcGFuPlNob3dzIGluc2VydCBjb3VudHMvbGV0dGVyczwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJzd2FwQ291bnRcIj4mbmJzcDsyJm5ic3A7PC9zcGFuPlNob3dzIHN3YXBzIGNvdW50cy9sZXR0ZXJzPC9saT5cclxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImFuYWdyYW1Db3VudFwiPjM8L3NwYW4+U2hvd3MgYW5hZ3JhbSBjb3VudHMvd29yZHM8L2xpPlxyXG4gICAgICAgICAgICA8bGk+Q2xpY2sgdG8gdG9nZ2xlIGJldHdlZW4gY291bnQgYW5kIGluZm88L2xpPlxyXG4gICAgICAgICAgICA8bGk+Q2xpY2sgdGhlIDxzcGFuIGNsYXNzTmFtZT1cImNsb3NlbWVidXR0b25cIj48L3NwYW4+IHRvIHJlbW92ZSB5b3VyIHdvcmQ8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj47XHJcbiAgICBjb25zdCBCcm93c2VyTGF5b3V0ID0gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+e0luaXRpYWxJbmZvfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+e01haW5JbmZvfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPntHdWVzc0luZm99PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbiAgICBjb25zdCBNb2JpbGVMYXlvdXQgPSA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7IHNldFNob3dJbml0aWFsSW5mbyghc2hvd0luaXRpYWxJbmZvKTsgfSB9PlxyXG4gICAgICAgICAgICAgICAge3Nob3dJbml0aWFsSW5mbyA/IFwiSGlkZSBJbmZvXCIgOiBcIlNob3cgSW5mb1wifVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAge3Nob3dJbml0aWFsSW5mbyAmJiBJbml0aWFsSW5mb31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7TWFpbkluZm99XHJcbiAgICA8L2Rpdj47XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJCYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgV29yZCBNYXN0ZXJtaW5kXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgeyFnYW1lT3B0aW9ucy5zZXQgP1xyXG4gICAgICAgICAgICA8R2V0V01PcHRpb25zIHNldEdhbWVPcHRpb25zPXtzZXRHYW1lT3B0aW9uc30vPlxyXG4gICAgICAgIDpcclxuICAgICAgICAgICAgaXNNb2JpbGUgPyBNb2JpbGVMYXlvdXQgOiBCcm93c2VyTGF5b3V0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzaG93UGxheUFnYWluUHJvbXB0KCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0bUNvbmdyYXRzXCI+8J+Rj/Cfj70gU29sdmVkIGluIHtndWVzc2VzLmxlbmd0aH0gbW92ZXMhIPCfkY/wn4+9PC9oND5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHBpY2tSYW5kb21Xb3JkKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRHdWVzcygnJyk7XHJcbiAgICAgICAgICAgICAgICBzZXRHdWVzc2VzKFtdKTtcclxuICAgICAgICAgICAgICAgIHNldEhpZGVoaW50cyhbXSk7XHJcbiAgICAgICAgICAgICAgICBzZXRTb2x2ZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3NlY3JldFdvcmQubGVuZ3RoID09PSBnYW1lT3B0aW9ucy5sZW5NYXggPyBcIlN0YXJ0IEFub3RoZXIgU2V0IVwiIDogXCJTdGFydCBOZXh0IFdvcmRcIn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7Y29weVRvQ2xpcGJvYXJkKCk7fX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2xpcGJvYXJkXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0d1ZXNzUHJvbXB0KCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgaXNNb2JpbGUgP1xyXG4gICAgICAgICAgICA8U2hvd0N1c3RvbUtleWJvYXJkXHJcbiAgICAgICAgICAgICAgICBrZXlib2FyZFZlcnNpb249e2tleWJvYXJkVmVyc2lvbn1cclxuICAgICAgICAgICAgICAgIHNldEtleWJvYXJkVmVyc2lvbj17c2V0S2V5Ym9hcmRWZXJzaW9ufVxyXG4gICAgICAgICAgICAgICAgaW5wdXRXb3JkPXtndWVzc31cclxuICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0TGV0dGVyPXtoYW5kbGVJbnB1dExldHRlcn1cclxuICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZUxldHRlcj17aGFuZGxlRGVsZXRlTGV0dGVyfVxyXG4gICAgICAgICAgICAgICAgZGl2VW5kZXJLZXlib2FyZD17ZGl2VW5kZXJLZXlib2FyZH1cclxuICAgICAgICAgICAgPjwvU2hvd0N1c3RvbUtleWJvYXJkPiAgICAgICAgXHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgdHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgICAgIHtndWVzc2VzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZpcnN0IGd1ZXNzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OZXh0IGd1ZXNzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ3Vlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtndWVzc31cclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJuZXctcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBndWVzc3dvcmQgPSBlLnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoIC9cXFcvZyAsICcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVXBkYXRlZEd1ZXNzKGd1ZXNzd29yZCk7XHJcbiAgICAgICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93R3Vlc3Nlc1RhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PntnYW1lT3B0aW9ucy5tb2RlID09PSAnaGFyZCcgP1xyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0clRhYmxlXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+R3Vlc3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Db3JyZWN0IExldHRlcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkNvcnJlY3QgUG9zaXRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge2d1ZXNzZXMubWFwKChnLGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgbW9kZTBndWVzcyR7aX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJBbGlnbkNlbnRlclwiPntjYWxjQ29ycmVjdExldHRlckNvdW50KGcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJBbGlnbkNlbnRlclwiPntjYWxjQ29ycmVjdFBvc2l0aW9uQ291bnQoZyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDpcclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidHJUYWJsZVwiPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7IXNvbHZlZCAmJiBndWVzcyAmJiA8dHIga2V5PSdlYXN5bW9kZWd1ZXNzbGV0dGVycyc+XHJcbiAgICAgICAgICAgICAgICAgICAge2d1ZXNzLnNwbGl0KFwiXCIpLm1hcCgobCxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2BndWVzc2xldHRlciR7aX1gfSBjbGFzc05hbWU9e2B3bUVhc3lNb2RlTGV0dGVyICR7Y3NzRWFzeU1vZGVMZXR0ZXJTaXplKCl9YH0+e2x9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdHI+fVxyXG4gICAgICAgICAgICAgICAge2d1ZXNzZXMubWFwKChnLGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgbW9kZTFndWVzcyR7aX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2cuc3BsaXQoJycpLm1hcCgobCxqKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtgbW9kZTFndWVzcyR7aX1sZXR0ZXIke2p9YH0gY2xhc3M9e2NhbGNNb2RlMWNzcyhnLGopfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIH08L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGlja1JhbmRvbVdvcmQoKSB7XHJcbiAgICAgICAgY29uc3QgbmV3bGVuID1cclxuICAgICAgICAgICAgc2VjcmV0V29yZCA/XHJcbiAgICAgICAgICAgICAgICBzZWNyZXRXb3JkLmxlbmd0aCA8IGdhbWVPcHRpb25zLmxlbk1pbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU9wdGlvbnMubGVuTWluXHJcbiAgICAgICAgICAgICAgICA6IHNlY3JldFdvcmQubGVuZ3RoID49IGdhbWVPcHRpb25zLmxlbk1heCA/XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU9wdGlvbnMubGVuTWluXHJcbiAgICAgICAgICAgICAgICA6IHNlY3JldFdvcmQubGVuZ3RoICsgMVxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICBnYW1lT3B0aW9ucy5sZW5NaW47XHJcbiAgICAgICAgaWYgKG5ld2xlbiA9PT0gZ2FtZU9wdGlvbnMubGVuTWluICYmIHNldEd1ZXNzQ291bnQgIT09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXRTZXRHdWVzc0NvdW50KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBiYXNldXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VOQUJMRTJLP3JhbmRvbT0nIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tL0VOQUJMRTJLP3JhbmRvbT0nXHJcbiAgICAgICAgY29uc3QgdXJsID0gYmFzZXVybCArIG5ld2xlbi50b1N0cmluZygpO1xyXG4gICAgICAgIGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgICAgICAgbGV0IHJhbmRvbXdvcmQ9SlNPTi5wYXJzZSh0ZXh0KS50b1VwcGVyQ2FzZSgpOyAvLyBJdCBpcyBqdXN0IGEgd29yZCBpbiBkb3VibGUgcXVvdGVzIGJ1dCBpdCBpcyBqc29uIG5vbmV0aGVsZXNzXHJcbiAgICAgICAgICAgIHNldFNlY3JldFdvcmQocmFuZG9td29yZCk7XHJcbiAgICAgICAgICAgIHNldFNlY3JldERpc3BsYXkoYEd1ZXNzIHRoZSAke3JhbmRvbXdvcmQubGVuZ3RofSBsZXR0ZXIgd29yZDpgKTtcclxuICAgICAgICAgICAgYWRkUm91bmRUb0hpc3RvcnkocmFuZG9td29yZCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjQ29ycmVjdExldHRlckNvdW50KGd1ZXNzbGV0dGVycykge1xyXG4gICAgICAgIGxldCBuID0gMFxyXG4gICAgICAgIGNvbnN0IGFscGhhYmV0ID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJ1xyXG4gICAgICAgIGZvcihsZXQgbGV0dGVyIG9mIGFscGhhYmV0KSB7XHJcbiAgICAgICAgICAgIGxldCB4ID0gc2VjcmV0V29yZC5zcGxpdChsZXR0ZXIpLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgbGV0IHkgPSBndWVzc2xldHRlcnMuc3BsaXQobGV0dGVyKS5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIG4gPSBuICsgKHggPCB5ID8geCA6IHkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2FsY0NvcnJlY3RQb3NpdGlvbkNvdW50KGd1ZXNzbGV0dGVycykge1xyXG4gICAgICAgIGxldCBuID0gMFxyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPHNlY3JldFdvcmQubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbiA9IG4gKyAoc2VjcmV0V29yZFtpXSA9PT0gZ3Vlc3NsZXR0ZXJzW2ldID8gMSA6IDApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2FsY0xldHRlclJlc3VsdChndWVzc0xldHRlcnMsIGd1ZXNzTGV0dGVySW5kZXgpIHtcclxuICAgICAgICBsZXQgbGV0dGVyID0gZ3Vlc3NMZXR0ZXJzW2d1ZXNzTGV0dGVySW5kZXhdO1xyXG4gICAgICAgIC8vIGcgaXMgdGhlIHdob2UgZ3Vlc3MsIGogaXMgdGhlIGxldHRlciBpbmRleCBmb3Igd2hpY2ggd2Ugd2FudCB0aGUgY3NzIHN0eWxlIG5hbWVcclxuICAgICAgICBpZiAobGV0dGVyID09PSBzZWNyZXRXb3JkW2d1ZXNzTGV0dGVySW5kZXhdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkNcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlY3JldFdvcmQuaW5kZXhPZihsZXR0ZXIpID4gLTEpIHtcclxuICAgICAgICAgICAgLy8gdGhlIGd1ZXNzIGxldHRlciBpcyBpbiB0aGUgc2VjcmV0IHdvcmQgYW5kIGlzIG5vdCBpbiB0aGUgcmlnaHQgc3BvdFxyXG4gICAgICAgICAgICAvLyBoYXMgaXQgYWxyZWFkeSBiZWVuIGNvdW50ZWQgZWFybGllciB0aG91Z2g/XHJcbiAgICAgICAgICAgIC8vIHdpbGwgaXQgYmUgY291bnRlZCBsYXRlciBhcyBjb3JyZWN0IGxldHRlciBjb3JyZWN0IHNwb3Q/XHJcbiAgICAgICAgICAgIGxldCBuZXh0anN0YXJ0ID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWNyZXRXb3JkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VjcmV0V29yZFtpXSA9PT0gbGV0dGVyICYmIGd1ZXNzTGV0dGVyc1tpXSAhPT0gbGV0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGpmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IG5leHRqc3RhcnQ7ICFqZm91bmQgJiYgaiA8IHNlY3JldFdvcmQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGd1ZXNzTGV0dGVyc1tqXSA9PT0gbGV0dGVyICYmIHNlY3JldFdvcmRbal0gIT09IGxldHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPT09IGd1ZXNzTGV0dGVySW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dGpzdGFydCA9IGogKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIldcIjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNhbGNNb2RlMWNzcyhndWVzc0xldHRlcnMsZ3Vlc3NMZXR0ZXJJbmRleCkge1xyXG4gICAgICAgIGxldCBzaXplID0gY3NzRWFzeU1vZGVMZXR0ZXJTaXplKCk7XHJcbiAgICAgICAgbGV0IGxldHRlclJlc3VsdCA9IGNhbGNMZXR0ZXJSZXN1bHQoZ3Vlc3NMZXR0ZXJzLCBndWVzc0xldHRlckluZGV4KTtcclxuICAgICAgICBpZiAobGV0dGVyUmVzdWx0ID09PSAnQycpIHtyZXR1cm4gXCJ3bUVhc3lNb2RlTGV0dGVyIHdtQ29ycmVjdExldHRlckNvcnJlY3RQb3NpdGlvbiBcIiArIHNpemU7fVxyXG4gICAgICAgIGlmIChsZXR0ZXJSZXN1bHQgPT09ICdJJykge3JldHVybiBcIndtRWFzeU1vZGVMZXR0ZXIgd21Db3JyZWN0TGV0dGVyV3JvbmdQb3NpdGlvbiBcIiArIHNpemU7fVxyXG4gICAgICAgIHJldHVybiBcIndtRWFzeU1vZGVMZXR0ZXIgd21Xcm9uZ0xldHRlciBcIiArIHNpemU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjc3NFYXN5TW9kZUxldHRlclNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIChzZWNyZXRXb3JkICYmIHNlY3JldFdvcmQubGVuZ3RoID4gOCA/ICdzbWFsbCcgOiAnbm9ybWFsJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmRNYXN0ZXJtaW5kOyJdLCJzb3VyY2VSb290IjoiIn0=