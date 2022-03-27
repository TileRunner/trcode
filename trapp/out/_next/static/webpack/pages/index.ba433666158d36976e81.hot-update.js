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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vbWFzdGVybWluZC5qcyJdLCJuYW1lcyI6WyJXb3JkTWFzdGVybWluZCIsInNldFdoZXJldG8iLCJnYW1lT3B0aW9ucyIsInNldEdhbWVPcHRpb25zIiwidXNlU3RhdGUiLCJzZXQiLCJoaXN0b3J5Iiwic2V0SGlzdG9yeSIsImtleWJvYXJkVmVyc2lvbiIsInNldEtleWJvYXJkVmVyc2lvbiIsInNldFNvbHZlQ291bnRzIiwic2V0U2V0U29sdmVDb3VudHMiLCJzZXRHdWVzc0NvdW50Iiwic2V0U2V0R3Vlc3NDb3VudCIsInNlY3JldFdvcmQiLCJzZXRTZWNyZXRXb3JkIiwic2VjcmV0RGlzcGxheSIsInNldFNlY3JldERpc3BsYXkiLCJndWVzcyIsInNldEd1ZXNzIiwiZ3Vlc3NlcyIsInNldEd1ZXNzZXMiLCJzb2x2ZWQiLCJzZXRTb2x2ZWQiLCJzaG93SW5pdGlhbEluZm8iLCJzZXRTaG93SW5pdGlhbEluZm8iLCJkaXZVbmRlcktleWJvYXJkIiwic2hvd0RpdlVuZGVyS2V5Ym9hcmQiLCJkaXNwbGF5R3Vlc3NlcyIsInNob3dHdWVzc2VzVGFibGUiLCJwcm9tcHRGb3JHdWVzcyIsInNob3dHdWVzc1Byb21wdCIsInByb21wdEZvclBsYXlBZ2FpbiIsInNob3dQbGF5QWdhaW5Qcm9tcHQiLCJoaWRlaGludHMiLCJzZXRIaWRlaGludHMiLCJoYW5kbGVJbnB1dExldHRlciIsImxldHRlciIsImhhbmRsZVVwZGF0ZWRHdWVzcyIsImhhbmRsZURlbGV0ZUxldHRlciIsImxlbmd0aCIsInN1YnN0cmluZyIsIm1vZGUiLCJndWVzc3dvcmQiLCJ2YWxpZE9ubHkiLCJpc3ZhbGlkIiwiaXNXb3JkVmFsaWQiLCJhbGVydCIsImFkZEd1ZXNzVG9IaXN0b3J5IiwibmV3U2V0R3Vlc3NDb3VudCIsImxlbk1heCIsImFkZFJvdW5kVG9IaXN0b3J5IiwibmV3c2VjcmV0d29yZCIsIm5ld2hpc3RvcnkiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJuZXdyb3VuZCIsImxlbk1pbiIsIm5ld3NldCIsInJvdW5kcyIsIm51bWd1ZXNzZXMiLCJwdXNoIiwiY3VycnNldCIsImN1cnJyb3VuZCIsImd1ZXNzTGV0dGVycyIsIkFycmF5IiwiZnJvbSIsImxldHRlcmluZm8iLCJpIiwiZ3Vlc3NsZXR0ZXIiLCJsZXR0ZXJSZXN1bHQiLCJjYWxjTGV0dGVyUmVzdWx0IiwicmVzdWx0IiwibmV3Z3Vlc3MiLCJzb2x2ZXMiLCJjb3B5VG9DbGlwYm9hcmQiLCJjbGlwcnVsZSIsImNvcHlUZXh0Iiwic2hvd0hlYWRlciIsInMiLCJzaSIsInIiLCJyaSIsImciLCJnaSIsImwiLCJsaSIsImNpdyIsImMiLCJ3IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiaGludHNoaWRkZW4iLCJjaGVja3dvcmQiLCJpbmRleCIsImhpZGV3b3JkIiwicmVtb3ZlRW50cnkiLCJuZXdoaWRlaGludHMiLCJJbml0aWFsSW5mbyIsIm1hcCIsIm51bSIsInRvU3RyaW5nIiwiTWFpbkluZm8iLCJwaWNrUmFuZG9tV29yZCIsIkd1ZXNzSW5mbyIsIkJyb3dzZXJMYXlvdXQiLCJNb2JpbGVMYXlvdXQiLCJpc01vYmlsZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvVXBwZXJDYXNlIiwicmVwbGFjZSIsImNhbGNDb3JyZWN0TGV0dGVyQ291bnQiLCJjYWxjQ29ycmVjdFBvc2l0aW9uQ291bnQiLCJzcGxpdCIsImNzc0Vhc3lNb2RlTGV0dGVyU2l6ZSIsImoiLCJjYWxjTW9kZTFjc3MiLCJuZXdsZW4iLCJiYXNldXJsIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwidGV4dCIsInJhbmRvbXdvcmQiLCJndWVzc2xldHRlcnMiLCJuIiwiYWxwaGFiZXQiLCJ4IiwieSIsImd1ZXNzTGV0dGVySW5kZXgiLCJpbmRleE9mIiwibmV4dGpzdGFydCIsImpmb3VuZCIsInNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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M0YsV0FBTyxvQ0FBb0NBLElBQTNDO0FBQ0g7O0FBQ0QsV0FBU3BCLHFCQUFULEdBQWlDO0FBQzdCLFdBQVF4RyxVQUFVLElBQUlBLFVBQVUsQ0FBQzBCLE1BQVgsR0FBb0IsQ0FBbEMsR0FBc0MsT0FBdEMsR0FBZ0QsUUFBeEQ7QUFDSDtBQUNKLENBdFpEOztHQUFNeEMsYzs7S0FBQUEsYztBQXdaTiwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iYTQzMzY2NjE1OGQzNjk3NmU4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2hvd2luZm8gZnJvbSAnLi4vd2kvc2hvd2luZm8nXHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCdcclxuaW1wb3J0IFNob3dDdXN0b21LZXlib2FyZCBmcm9tICcuLi9zaG93Q3VzdG9tS2V5Ym9hcmQnO1xyXG5pbXBvcnQgR2V0V01PcHRpb25zIGZyb20gJy4vd21vcHRpb25zJztcclxuaW1wb3J0IHsgaXNXb3JkVmFsaWQgfSBmcm9tICcuLi8uLi9saWIvd29yZGZ1bmN0aW9ucyc7XHJcbmNvbnN0IFdvcmRNYXN0ZXJtaW5kID0gKHtzZXRXaGVyZXRvfSkgPT4ge1xyXG4gICAgY29uc3QgW2dhbWVPcHRpb25zLCBzZXRHYW1lT3B0aW9uc10gPSB1c2VTdGF0ZSh7c2V0OmZhbHNlfSk7XHJcbiAgICBjb25zdCBbaGlzdG9yeSwgc2V0SGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBba2V5Ym9hcmRWZXJzaW9uLCBzZXRLZXlib2FyZFZlcnNpb25dID0gdXNlU3RhdGUoMik7XHJcbiAgICBjb25zdCBbc2V0U29sdmVDb3VudHMsIHNldFNldFNvbHZlQ291bnRzXSA9IHVzZVN0YXRlKFtdKTsgLy8gaG93IG1hbnkgZ3Vlc3NlcyB0byBzb2x2ZSBlYWNoIHNldFxyXG4gICAgY29uc3QgW3NldEd1ZXNzQ291bnQsIHNldFNldEd1ZXNzQ291bnRdID0gdXNlU3RhdGUoMCk7IC8vIHRvdGFsIGd1ZXNzIGNvdW50IGZvciB0aGUgbWluLW1heCB3b3JkIGxlbiBzZXRcclxuICAgIGNvbnN0IFtzZWNyZXRXb3JkLCBzZXRTZWNyZXRXb3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWNyZXREaXNwbGF5LCBzZXRTZWNyZXREaXNwbGF5XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtndWVzcywgc2V0R3Vlc3NdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2d1ZXNzZXMsIHNldEd1ZXNzZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NvbHZlZCwgc2V0U29sdmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93SW5pdGlhbEluZm8sIHNldFNob3dJbml0aWFsSW5mb10gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIHNldCBpbmZvLCBlYXN5IG1vZGUgaW5mb1xyXG4gICAgY29uc3QgZGl2VW5kZXJLZXlib2FyZCA9IHNob3dEaXZVbmRlcktleWJvYXJkKCk7XHJcbiAgICBjb25zdCBkaXNwbGF5R3Vlc3NlcyA9IHNob3dHdWVzc2VzVGFibGUoKTtcclxuICAgIGNvbnN0IHByb21wdEZvckd1ZXNzID0gc2hvd0d1ZXNzUHJvbXB0KCk7XHJcbiAgICBjb25zdCBwcm9tcHRGb3JQbGF5QWdhaW4gPSBzaG93UGxheUFnYWluUHJvbXB0KCk7XHJcbiAgICBjb25zdCBbaGlkZWhpbnRzLCBzZXRIaWRlaGludHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUlucHV0TGV0dGVyKGxldHRlcikge1xyXG4gICAgICAgIGhhbmRsZVVwZGF0ZWRHdWVzcyhndWVzcyArIGxldHRlcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVEZWxldGVMZXR0ZXIoKSB7XHJcbiAgICAgICAgaWYgKGd1ZXNzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc2V0R3Vlc3MoZ3Vlc3Muc3Vic3RyaW5nKDAsZ3Vlc3MubGVuZ3RoLTEpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzaG93RGl2VW5kZXJLZXlib2FyZCgpIHtcclxuICAgICAgICByZXR1cm4gZ2FtZU9wdGlvbnMubW9kZSA9PT0gJ2hhcmQnICYmIDxkaXYgY2xhc3NOYW1lPVwid21Xb3JkVW5kZXJLZXlib2FyZFwiPiZuYnNwO3tndWVzc30mbmJzcDs8L2Rpdj47XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVVcGRhdGVkR3Vlc3MoZ3Vlc3N3b3JkKSB7XHJcbiAgICAgICAgaWYgKGd1ZXNzd29yZC5sZW5ndGggPT09IHNlY3JldFdvcmQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmIChnYW1lT3B0aW9ucy52YWxpZE9ubHkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpc3ZhbGlkID0gYXdhaXQgaXNXb3JkVmFsaWQoZ3Vlc3N3b3JkKTtcclxuICAgICAgICAgICAgICAgIGlmICghaXN2YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGBTb3JyeSwgJHtndWVzc3dvcmR9IGlzIG5vdCBpbiBteSB3b3JkIGxpc3QuYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFkZEd1ZXNzVG9IaXN0b3J5KGd1ZXNzd29yZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1NldEd1ZXNzQ291bnQgPSBzZXRHdWVzc0NvdW50ICsgMTtcclxuICAgICAgICAgICAgc2V0U2V0R3Vlc3NDb3VudChuZXdTZXRHdWVzc0NvdW50KTtcclxuICAgICAgICAgICAgc2V0R3Vlc3NlcyhbZ3Vlc3N3b3JkLCAuLi5ndWVzc2VzXSk7XHJcbiAgICAgICAgICAgIHNldEd1ZXNzKCcnKTtcclxuICAgICAgICAgICAgaWYgKGd1ZXNzd29yZCA9PT0gc2VjcmV0V29yZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2V0U29sdmVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlY3JldFdvcmQubGVuZ3RoID09PSBnYW1lT3B0aW9ucy5sZW5NYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTZXRTb2x2ZUNvdW50cyhbLi4uc2V0U29sdmVDb3VudHMsIG5ld1NldEd1ZXNzQ291bnRdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEd1ZXNzKGd1ZXNzd29yZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWRkUm91bmRUb0hpc3RvcnkobmV3c2VjcmV0d29yZCkge1xyXG4gICAgICAgIC8vIGhpc3RvcnkgYXJyYXkgYnkgc2V0LCBuZXcgc2V0cyBhdCBsYXN0IHBvc2l0aW9uXHJcbiAgICAgICAgLy8gZWFjaCBzZXQgaXMgYW4gYXJyYXkgb2Ygcm91bmRzIChtaW4gdG8gbWF4IGxlbmd0aClcclxuICAgICAgICAvLyBlYWNoIHJvdW5kIGhhcyBzZWNyZXQgd29yZCBhbmQgZ3Vlc3MgaW5mb1xyXG4gICAgICAgIGxldCBuZXdoaXN0b3J5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShoaXN0b3J5KSk7XHJcbiAgICAgICAgbGV0IG5ld3JvdW5kID0ge3NlY3JldFdvcmQ6IG5ld3NlY3JldHdvcmQsIGd1ZXNzZXM6IFtdLCBzb2x2ZWQ6IGZhbHNlfTtcclxuICAgICAgICBpZiAobmV3c2VjcmV0d29yZC5sZW5ndGggPT09IGdhbWVPcHRpb25zLmxlbk1pbikgeyAvLyBuZXcgc2V0XHJcbiAgICAgICAgICAgIGxldCBuZXdzZXQgPSB7cm91bmRzOiBbbmV3cm91bmRdLCBudW1ndWVzc2VzOiAwfTtcclxuICAgICAgICAgICAgbmV3aGlzdG9yeS5wdXNoKG5ld3NldCk7XHJcbiAgICAgICAgfSBlbHNlIHsgLy8gZXhpc3Rpbmcgc2V0XHJcbiAgICAgICAgICAgIGxldCBjdXJyc2V0ID0gbmV3aGlzdG9yeVtuZXdoaXN0b3J5Lmxlbmd0aC0xXTtcclxuICAgICAgICAgICAgY3VycnNldC5yb3VuZHMucHVzaChuZXdyb3VuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEhpc3RvcnkobmV3aGlzdG9yeSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhZGRHdWVzc1RvSGlzdG9yeShndWVzc3dvcmQpIHtcclxuICAgICAgICBsZXQgbmV3aGlzdG9yeSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaGlzdG9yeSkpO1xyXG4gICAgICAgIGxldCBjdXJyc2V0ID0gbmV3aGlzdG9yeVtuZXdoaXN0b3J5Lmxlbmd0aC0xXTtcclxuICAgICAgICBsZXQgY3VycnJvdW5kID0gY3VycnNldC5yb3VuZHNbY3VycnNldC5yb3VuZHMubGVuZ3RoLTFdO1xyXG4gICAgICAgIGxldCBndWVzc0xldHRlcnMgPSBBcnJheS5mcm9tKGd1ZXNzd29yZCk7XHJcbiAgICAgICAgbGV0IGxldHRlcmluZm8gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGd1ZXNzTGV0dGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBndWVzc2xldHRlciA9IGd1ZXNzTGV0dGVyc1tpXTtcclxuICAgICAgICAgICAgY29uc3QgbGV0dGVyUmVzdWx0ID0gY2FsY0xldHRlclJlc3VsdChndWVzc0xldHRlcnMsIGkpOyAvLyBDLCBJLCBvciBXXHJcbiAgICAgICAgICAgIGxldHRlcmluZm8ucHVzaCh7bGV0dGVyOiBndWVzc2xldHRlciwgcmVzdWx0OiBsZXR0ZXJSZXN1bHR9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5ld2d1ZXNzID0ge2d1ZXNzOiBndWVzc3dvcmQsIGxldHRlcmluZm86IGxldHRlcmluZm8sIHNvbHZlczogZ3Vlc3N3b3JkID09PSBzZWNyZXRXb3JkfTtcclxuICAgICAgICBjdXJyc2V0Lm51bWd1ZXNzZXMrKztcclxuICAgICAgICBjdXJycm91bmQuc29sdmVkID0gbmV3Z3Vlc3Muc29sdmVzO1xyXG4gICAgICAgIGN1cnJyb3VuZC5ndWVzc2VzLnB1c2gobmV3Z3Vlc3MpO1xyXG4gICAgICAgIHNldEhpc3RvcnkobmV3aGlzdG9yeSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQoKSB7XHJcbiAgICAgICAgaWYgKCFnYW1lT3B0aW9ucy5jbGlwcnVsZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjb3B5VGV4dCA9IGdhbWVPcHRpb25zLnNob3dIZWFkZXIgPyBcIldvcmQgTWFzdGVybWluZFxcbmh0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tL1xcblwiIDogXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBzID0gMDsgcyA8IGhpc3RvcnkubGVuZ3RoOyBzKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgc2kgPSBoaXN0b3J5W3NdO1xyXG4gICAgICAgICAgICBpZiAoZ2FtZU9wdGlvbnMuY2xpcHJ1bGUgPT09ICdhbGwnIHx8IHMgPT09IGhpc3RvcnkubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdhbWVPcHRpb25zLmNsaXBydWxlICE9PSAncm91bmQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29weVRleHQgKz0gYFNldCAke3MrMX06ICR7c2kubnVtZ3Vlc3Nlc30gZ3Vlc3Nlc1xcbmBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgc2kucm91bmRzLmxlbmd0aDsgcisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmkgPSBzaS5yb3VuZHNbcl07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVPcHRpb25zLmNsaXBydWxlICE9PSAncm91bmQnIHx8IHIgPT09IHNpLnJvdW5kcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlUZXh0ID0gYCR7Y29weVRleHR9Um91bmQgJHtyKzF9OiAke3JpLmd1ZXNzZXMubGVuZ3RofSBndWVzc2VzXFxuYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZyA9IDA7IGcgPCByaS5ndWVzc2VzLmxlbmd0aDsgZysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnaSA9IHJpLmd1ZXNzZXNbZ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3B5VGV4dCArPSBgJHtnaS5ndWVzc306XFxuYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGwgPSAwOyBsIDwgZ2kubGV0dGVyaW5mby5sZW5ndGg7IGwrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpID0gZ2kubGV0dGVyaW5mb1tsXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGkucmVzdWx0ID09PSAnQycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29weVRleHQgPSBjb3B5VGV4dCArIGdhbWVPcHRpb25zLmNpdy5jO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGkucmVzdWx0ID09PSAnSScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29weVRleHQgPSBjb3B5VGV4dCArIGdhbWVPcHRpb25zLmNpdy5pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlUZXh0ID0gY29weVRleHQgKyBnYW1lT3B0aW9ucy5jaXcudztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3B5VGV4dCA9IGNvcHlUZXh0ICsgXCJcXG5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb3B5VGV4dCk7XHJcbiAgICAgICAgYWxlcnQoXCJDbGlwYm9hcmQgdXBkYXRlZFwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhpbnRzaGlkZGVuKGNoZWNrd29yZCkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBoaWRlaGludHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhpZGV3b3JkID0gaGlkZWhpbnRzW2luZGV4XTtcclxuICAgICAgICAgICAgaWYgKGhpZGV3b3JkID09PSBjaGVja3dvcmQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUVudHJ5KGluZGV4KSB7XHJcbiAgICAgICAgaWYgKCFoaW50c2hpZGRlbihndWVzc2VzW2luZGV4XSkpIHtcclxuICAgICAgICAgICAgbGV0IG5ld2hpZGVoaW50cyA9IFsuLi5oaWRlaGludHNdO1xyXG4gICAgICAgICAgICBuZXdoaWRlaGludHMucHVzaChndWVzc2VzW2luZGV4XSk7XHJcbiAgICAgICAgICAgIHNldEhpZGVoaW50cyhuZXdoaWRlaGludHMpOyAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgSW5pdGlhbEluZm8gPSA8ZGl2IGNsYXNzTmFtZT1cIk91dGVydGFibGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoIEFsaWduTGVmdFwiPlxyXG4gICAgICAgICAgICA8cD57Z2FtZU9wdGlvbnMubGVuTWlufS17Z2FtZU9wdGlvbnMubGVuTWF4fSBsZXR0ZXIgd29yZHMgcGVyIHNldC48L3A+XHJcbiAgICAgICAgICAgIDxwPkd1ZXNzZXMgdGhpcyB3b3JkOiB7Z3Vlc3Nlcy5sZW5ndGh9PC9wPlxyXG4gICAgICAgICAgICA8cD5HdWVzc2VzIHRoaXMgc2V0OiB7c2V0R3Vlc3NDb3VudH08L3A+XHJcbiAgICAgICAgICAgIHtzZXRTb2x2ZUNvdW50cy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgPHA+Tm8gY29tcGxldGVkIHNldHMgeWV0PC9wPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPHA+R3Vlc3NlcyBmb3IgY29tcGxldGVkIHNldHM6IHtzZXRTb2x2ZUNvdW50cy5tYXAobnVtID0+ICg8c3BhbiBrZXk9e251bS50b1N0cmluZygpfT57bnVtfSA8L3NwYW4+KSl9PC9wPn1cclxuICAgICAgICAgICAge2dhbWVPcHRpb25zLm1vZGUgPT09ICdlYXN5JyAmJiA8PjxwPjxzcGFuIGNsYXNzTmFtZT1cIndtRWFzeU1vZGVMZXR0ZXIgd21Db3JyZWN0TGV0dGVyQ29ycmVjdFBvc2l0aW9uXCI+Qzwvc3Bhbj5vcnJlY3QgcG9zaXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ3bUVhc3lNb2RlTGV0dGVyIHdtQ29ycmVjdExldHRlcldyb25nUG9zaXRpb25cIj5JPC9zcGFuPm5jb3JyZWN0IHBvc2l0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwid21FYXN5TW9kZUxldHRlciB3bVdyb25nTGV0dGVyXCI+Vzwvc3Bhbj5yb25nIGxldHRlcjwvcD5cclxuICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgTWFpbkluZm8gPSA8ZGl2IGNsYXNzTmFtZT1cIk91dGVydGFibGVcIj5cclxuICAgICAgICB7LyogSWYgSSBkb24ndCBjaGVjayBnYW1lT3B0aW9ucy5zZXQgdGhlbiBpdCB3aWxsIGNhbGwgcGlja1JhbmRvbVdvcmRcclxuICAgICAgICAgICBldmVuIHdoZW4gdGhlIG9wdGlvbnMgYXJlIG5vdCBzZXQgYW5kIHRoaXMgaXMgbm90IGNhbGxlZCBieSBteVxyXG4gICAgICAgICAgIGNvZGUuIEl0IG11c3QgYmUgc29tZSBraW5kIG9mIHByZS1yZW5kZXJpbmcuXHJcbiAgICAgICAgICovfVxyXG4gICAgICAgIHtnYW1lT3B0aW9ucy5zZXQgJiYgc2VjcmV0V29yZCA9PT0gJycgPyBwaWNrUmFuZG9tV29yZCgpIDogJyd9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICA8aDM+U2VjcmV0IFdvcmQ6IHtzb2x2ZWQgPyBzZWNyZXRXb3JkIDogc2VjcmV0RGlzcGxheX08L2gzPlxyXG4gICAgICAgICAgICB7c2VjcmV0V29yZCA9PT0gJycgP1xyXG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmcgLi4uPC9oMT5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIHNvbHZlZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbXB0Rm9yUGxheUFnYWluXHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIHByb21wdEZvckd1ZXNzfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHshZ3Vlc3NlcyAmJiAhZ3Vlc3MgP1xyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPk5vIGd1ZXNzZXMgeWV0PC9wPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIGRpc3BsYXlHdWVzc2VzfVxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgR3Vlc3NJbmZvID0gPGRpdiBjbGFzc05hbWU9XCJPdXRlcnRhYmxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3bUd1ZXNzSW5mb0RpdlwiPlxyXG4gICAgICAgICAgICBHdWVzcyBpbmZvOlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtndWVzc2VzLm1hcCgoZywgZ2kpID0+IChcclxuICAgICAgICAgICAgIWhpbnRzaGlkZGVuKGcpICYmXHJcbiAgICAgICAgICAgIDxTaG93aW5mbyBrZXk9e2Ake2d1ZXNzZXMubGVuZ3RoIC0gZ2l9LiR7Z31gfSB3b3JkPXtnfSBzaG93SW5zZXJ0cz1cIk5cIiBzaG93U3dhcHM9XCJZXCIgc2hvd0FuYWdyYW1zPVwiWVwiIHNob3dEcm9wcz1cIk5cIiByZW1vdmVFbnRyeT17cmVtb3ZlRW50cnl9IGVudHJ5SW5kZXg9e2dpfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid21HdWVzc0luZm9EaXZcIj5cclxuICAgICAgICAgICAgRXhwbGFuYXRpb246XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJpbnNlcnRDb3VudFwiPiZuYnNwOzEmbmJzcDs8L3NwYW4+U2hvd3MgaW5zZXJ0IGNvdW50cy9sZXR0ZXJzPC9saT5cclxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cInN3YXBDb3VudFwiPiZuYnNwOzImbmJzcDs8L3NwYW4+U2hvd3Mgc3dhcHMgY291bnRzL2xldHRlcnM8L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiYW5hZ3JhbUNvdW50XCI+Mzwvc3Bhbj5TaG93cyBhbmFncmFtIGNvdW50cy93b3JkczwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5DbGljayB0byB0b2dnbGUgYmV0d2VlbiBjb3VudCBhbmQgaW5mbzwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5DbGljayB0aGUgPHNwYW4gY2xhc3NOYW1lPVwiY2xvc2VtZWJ1dHRvblwiPjwvc3Bhbj4gdG8gcmVtb3ZlIHlvdXIgd29yZDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IEJyb3dzZXJMYXlvdXQgPSA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj57SW5pdGlhbEluZm99PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj57TWFpbkluZm99PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+e0d1ZXNzSW5mb308L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IE1vYmlsZUxheW91dCA9IDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHsgc2V0U2hvd0luaXRpYWxJbmZvKCFzaG93SW5pdGlhbEluZm8pOyB9IH0+XHJcbiAgICAgICAgICAgICAgICB7c2hvd0luaXRpYWxJbmZvID8gXCJIaWRlIEluZm9cIiA6IFwiU2hvdyBJbmZvXCJ9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7c2hvd0luaXRpYWxJbmZvICYmIEluaXRpYWxJbmZvfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtNYWluSW5mb31cclxuICAgIDwvZGl2PjtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBXb3JkIE1hc3Rlcm1pbmRcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7IWdhbWVPcHRpb25zLnNldCA/XHJcbiAgICAgICAgICAgIDxHZXRXTU9wdGlvbnMgc2V0R2FtZU9wdGlvbnM9e3NldEdhbWVPcHRpb25zfS8+XHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICBpc01vYmlsZSA/IE1vYmlsZUxheW91dCA6IEJyb3dzZXJMYXlvdXRcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dQbGF5QWdhaW5Qcm9tcHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRtQ29uZ3JhdHNcIj7wn5GP8J+PvSBTb2x2ZWQgaW4ge2d1ZXNzZXMubGVuZ3RofSBtb3ZlcyEg8J+Rj/Cfj708L2g0PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcGlja1JhbmRvbVdvcmQoKTtcclxuICAgICAgICAgICAgICAgIHNldEd1ZXNzKCcnKTtcclxuICAgICAgICAgICAgICAgIHNldEd1ZXNzZXMoW10pO1xyXG4gICAgICAgICAgICAgICAgc2V0SGlkZWhpbnRzKFtdKTtcclxuICAgICAgICAgICAgICAgIHNldFNvbHZlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c2VjcmV0V29yZC5sZW5ndGggPT09IGdhbWVPcHRpb25zLmxlbk1heCA/IFwiU3RhcnQgQW5vdGhlciBTZXQhXCIgOiBcIlN0YXJ0IE5leHQgV29yZFwifVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtjb3B5VG9DbGlwYm9hcmQoKTt9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDbGlwYm9hcmRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93R3Vlc3NQcm9tcHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICBpc01vYmlsZSA/XHJcbiAgICAgICAgICAgIDxTaG93Q3VzdG9tS2V5Ym9hcmRcclxuICAgICAgICAgICAgICAgIGtleWJvYXJkVmVyc2lvbj17a2V5Ym9hcmRWZXJzaW9ufVxyXG4gICAgICAgICAgICAgICAgc2V0S2V5Ym9hcmRWZXJzaW9uPXtzZXRLZXlib2FyZFZlcnNpb259XHJcbiAgICAgICAgICAgICAgICBpbnB1dFdvcmQ9e2d1ZXNzfVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRMZXR0ZXI9e2hhbmRsZUlucHV0TGV0dGVyfVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlTGV0dGVyPXtoYW5kbGVEZWxldGVMZXR0ZXJ9XHJcbiAgICAgICAgICAgICAgICBkaXZVbmRlcktleWJvYXJkPXtkaXZVbmRlcktleWJvYXJkfVxyXG4gICAgICAgICAgICA+PC9TaG93Q3VzdG9tS2V5Ym9hcmQ+ICAgICAgICBcclxuICAgICAgICA6XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCB0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICAgICAge2d1ZXNzZXMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Rmlyc3QgZ3Vlc3M6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5leHQgZ3Vlc3M6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJndWVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2d1ZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGd1ZXNzd29yZCA9IGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCkucmVwbGFjZSggL1xcVy9nICwgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVVcGRhdGVkR3Vlc3MoZ3Vlc3N3b3JkKTtcclxuICAgICAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dHdWVzc2VzVGFibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+e2dhbWVPcHRpb25zLm1vZGUgPT09ICdoYXJkJyA/XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRyVGFibGVcIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5HdWVzczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkNvcnJlY3QgTGV0dGVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+Q29ycmVjdCBQb3NpdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7Z3Vlc3Nlcy5tYXAoKGcsaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2Btb2RlMGd1ZXNzJHtpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2d9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCI+e2NhbGNDb3JyZWN0TGV0dGVyQ291bnQoZyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCI+e2NhbGNDb3JyZWN0UG9zaXRpb25Db3VudChnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0clRhYmxlXCI+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHshc29sdmVkICYmIGd1ZXNzICYmIDx0ciBrZXk9J2Vhc3ltb2RlZ3Vlc3NsZXR0ZXJzJz5cclxuICAgICAgICAgICAgICAgICAgICB7Z3Vlc3Muc3BsaXQoXCJcIikubWFwKChsLGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17YGd1ZXNzbGV0dGVyJHtpfWB9IGNsYXNzTmFtZT17YHdtRWFzeU1vZGVMZXR0ZXIgJHtjc3NFYXN5TW9kZUxldHRlclNpemUoKX1gfT57bH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90cj59XHJcbiAgICAgICAgICAgICAgICB7Z3Vlc3Nlcy5tYXAoKGcsaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2Btb2RlMWd1ZXNzJHtpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Zy5zcGxpdCgnJykubWFwKChsLGopID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2Btb2RlMWd1ZXNzJHtpfWxldHRlciR7an1gfSBjbGFzcz17Y2FsY01vZGUxY3NzKGcsail9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgfTwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwaWNrUmFuZG9tV29yZCgpIHtcclxuICAgICAgICBjb25zdCBuZXdsZW4gPVxyXG4gICAgICAgICAgICBzZWNyZXRXb3JkID9cclxuICAgICAgICAgICAgICAgIHNlY3JldFdvcmQubGVuZ3RoIDwgZ2FtZU9wdGlvbnMubGVuTWluID9cclxuICAgICAgICAgICAgICAgICAgICBnYW1lT3B0aW9ucy5sZW5NaW5cclxuICAgICAgICAgICAgICAgIDogc2VjcmV0V29yZC5sZW5ndGggPj0gZ2FtZU9wdGlvbnMubGVuTWF4ID9cclxuICAgICAgICAgICAgICAgICAgICBnYW1lT3B0aW9ucy5sZW5NaW5cclxuICAgICAgICAgICAgICAgIDogc2VjcmV0V29yZC5sZW5ndGggKyAxXHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIGdhbWVPcHRpb25zLmxlbk1pbjtcclxuICAgICAgICBpZiAobmV3bGVuID09PSBnYW1lT3B0aW9ucy5sZW5NaW4gJiYgc2V0R3Vlc3NDb3VudCAhPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNldFNldEd1ZXNzQ291bnQoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJhc2V1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvRU5BQkxFMks/cmFuZG9tPScgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20vRU5BQkxFMks/cmFuZG9tPSdcclxuICAgICAgICBjb25zdCB1cmwgPSBiYXNldXJsICsgbmV3bGVuLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9td29yZD1KU09OLnBhcnNlKHRleHQpLnRvVXBwZXJDYXNlKCk7IC8vIEl0IGlzIGp1c3QgYSB3b3JkIGluIGRvdWJsZSBxdW90ZXMgYnV0IGl0IGlzIGpzb24gbm9uZXRoZWxlc3NcclxuICAgICAgICAgICAgc2V0U2VjcmV0V29yZChyYW5kb213b3JkKTtcclxuICAgICAgICAgICAgc2V0U2VjcmV0RGlzcGxheShyYW5kb213b3JkLnNwbGl0KFwiXCIpLm1hcCgoKT0+KFwiKlwiKSkpO1xyXG4gICAgICAgICAgICBhZGRSb3VuZFRvSGlzdG9yeShyYW5kb213b3JkKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGNDb3JyZWN0TGV0dGVyQ291bnQoZ3Vlc3NsZXR0ZXJzKSB7XHJcbiAgICAgICAgbGV0IG4gPSAwXHJcbiAgICAgICAgY29uc3QgYWxwaGFiZXQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonXHJcbiAgICAgICAgZm9yKGxldCBsZXR0ZXIgb2YgYWxwaGFiZXQpIHtcclxuICAgICAgICAgICAgbGV0IHggPSBzZWNyZXRXb3JkLnNwbGl0KGxldHRlcikubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICBsZXQgeSA9IGd1ZXNzbGV0dGVycy5zcGxpdChsZXR0ZXIpLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgbiA9IG4gKyAoeCA8IHkgPyB4IDogeSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjQ29ycmVjdFBvc2l0aW9uQ291bnQoZ3Vlc3NsZXR0ZXJzKSB7XHJcbiAgICAgICAgbGV0IG4gPSAwXHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8c2VjcmV0V29yZC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBuID0gbiArIChzZWNyZXRXb3JkW2ldID09PSBndWVzc2xldHRlcnNbaV0gPyAxIDogMClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjTGV0dGVyUmVzdWx0KGd1ZXNzTGV0dGVycywgZ3Vlc3NMZXR0ZXJJbmRleCkge1xyXG4gICAgICAgIGxldCBsZXR0ZXIgPSBndWVzc0xldHRlcnNbZ3Vlc3NMZXR0ZXJJbmRleF07XHJcbiAgICAgICAgLy8gZyBpcyB0aGUgd2hvZSBndWVzcywgaiBpcyB0aGUgbGV0dGVyIGluZGV4IGZvciB3aGljaCB3ZSB3YW50IHRoZSBjc3Mgc3R5bGUgbmFtZVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IHNlY3JldFdvcmRbZ3Vlc3NMZXR0ZXJJbmRleF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiQ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VjcmV0V29yZC5pbmRleE9mKGxldHRlcikgPiAtMSkge1xyXG4gICAgICAgICAgICAvLyB0aGUgZ3Vlc3MgbGV0dGVyIGlzIGluIHRoZSBzZWNyZXQgd29yZCBhbmQgaXMgbm90IGluIHRoZSByaWdodCBzcG90XHJcbiAgICAgICAgICAgIC8vIGhhcyBpdCBhbHJlYWR5IGJlZW4gY291bnRlZCBlYXJsaWVyIHRob3VnaD9cclxuICAgICAgICAgICAgLy8gd2lsbCBpdCBiZSBjb3VudGVkIGxhdGVyIGFzIGNvcnJlY3QgbGV0dGVyIGNvcnJlY3Qgc3BvdD9cclxuICAgICAgICAgICAgbGV0IG5leHRqc3RhcnQgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlY3JldFdvcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZWNyZXRXb3JkW2ldID09PSBsZXR0ZXIgJiYgZ3Vlc3NMZXR0ZXJzW2ldICE9PSBsZXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgamZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqID0gbmV4dGpzdGFydDsgIWpmb3VuZCAmJiBqIDwgc2VjcmV0V29yZC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3Vlc3NMZXR0ZXJzW2pdID09PSBsZXR0ZXIgJiYgc2VjcmV0V29yZFtqXSAhPT0gbGV0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gZ3Vlc3NMZXR0ZXJJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIklcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0anN0YXJ0ID0gaiArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiV1wiO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2FsY01vZGUxY3NzKGd1ZXNzTGV0dGVycyxndWVzc0xldHRlckluZGV4KSB7XHJcbiAgICAgICAgbGV0IHNpemUgPSBjc3NFYXN5TW9kZUxldHRlclNpemUoKTtcclxuICAgICAgICBsZXQgbGV0dGVyUmVzdWx0ID0gY2FsY0xldHRlclJlc3VsdChndWVzc0xldHRlcnMsIGd1ZXNzTGV0dGVySW5kZXgpO1xyXG4gICAgICAgIGlmIChsZXR0ZXJSZXN1bHQgPT09ICdDJykge3JldHVybiBcIndtRWFzeU1vZGVMZXR0ZXIgd21Db3JyZWN0TGV0dGVyQ29ycmVjdFBvc2l0aW9uIFwiICsgc2l6ZTt9XHJcbiAgICAgICAgaWYgKGxldHRlclJlc3VsdCA9PT0gJ0knKSB7cmV0dXJuIFwid21FYXN5TW9kZUxldHRlciB3bUNvcnJlY3RMZXR0ZXJXcm9uZ1Bvc2l0aW9uIFwiICsgc2l6ZTt9XHJcbiAgICAgICAgcmV0dXJuIFwid21FYXN5TW9kZUxldHRlciB3bVdyb25nTGV0dGVyIFwiICsgc2l6ZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNzc0Vhc3lNb2RlTGV0dGVyU2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4gKHNlY3JldFdvcmQgJiYgc2VjcmV0V29yZC5sZW5ndGggPiA4ID8gJ3NtYWxsJyA6ICdub3JtYWwnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29yZE1hc3Rlcm1pbmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==