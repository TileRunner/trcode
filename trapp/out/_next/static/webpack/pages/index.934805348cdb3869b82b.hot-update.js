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
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\wm\\mastermind.js",
    _s = $RefreshSig$();






const WordMastermind = ({
  setWhereto
}) => {
  _s();

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
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('easy');
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

  const handleModeChange = e => {
    setGameMode(e.target.value);
  };

  const ShowModeOptions = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    className: "wmModeOptionForm",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "radio",
      value: "easy",
      checked: gameMode === 'easy',
      id: "mode0",
      onChange: e => {
        handleModeChange(e);
      },
      name: "mode"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      for: "mode0",
      children: "Easy"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "radio",
      value: "hard",
      checked: gameMode === 'hard',
      id: "mode1",
      onChange: e => {
        handleModeChange(e);
      },
      name: "mode"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      for: "mode1",
      children: "Hard"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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
        lineNumber: 32,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 29
  }, undefined);

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
      lineNumber: 44,
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

        if (secretWord.length === 8) {
          setSetSolveCounts([...setSolveCounts, newSetGuessCount]);
        }
      }
    } else {
      setGuess(guessword);
    }
  }

  function addRoundToHistory(newsecretword) {
    // history array by set, new sets at last position
    // each set is an array of rounds (2-8 letter secret words, so 7 rounds)
    // each round has secret word and guess info
    let newhistory = JSON.parse(JSON.stringify(history));
    let newround = {
      secretWord: newsecretword,
      guesses: [],
      solved: false
    };

    if (newsecretword.length === 2) {
      // new set
      let newset = {
        rounds: [newround]
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
    currround.solved = newguess.solves;
    currround.guesses.push(newguess);
    setHistory(newhistory);
  }

  function copyToClipboard() {
    let copyText = "Word Mastermind\n";

    for (let s = 0; s < history.length; s++) {
      const si = history[s];
      copyText = `${copyText}>Set ${s}:\n`;

      for (let r = 0; r < si.rounds.length; r++) {
        const ri = si.rounds[r];
        copyText = `${copyText}>>Round ${r}, ${ri.secretWord}:\n`;

        for (let g = 0; g < ri.guesses.length; g++) {
          const gi = ri.guesses[g];
          copyText = `${copyText}>>>Guess ${g}, ${gi.guess}: `;

          for (let l = 0; l < gi.letterinfo.length; l++) {
            const li = gi.letterinfo[l];

            if (li.result === 'C') {
              copyText = copyText + "🟩";
            } else if (li.result === 'I') {
              copyText = copyText + "🟨";
            } else {
              copyText = copyText + "⬛";
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
        children: "2-8 letter words per set."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Guesses this word: ", guesses.length]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Guesses this set: ", setGuessCount]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 13
      }, undefined), setSolveCounts.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "No completed sets yet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Guesses for completed sets: ", setSolveCounts.map(num => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [num, " "]
        }, num.toString(), true, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 76
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }, undefined), gameMode === 'easy' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "wmEasyModeLetter wmCorrectLetterCorrectPosition",
            children: "C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 42
          }, undefined), "orrect position"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 39
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "wmEasyModeLetter wmCorrectLetterWrongPosition",
            children: "I"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 20
          }, undefined), "ncorrect position"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "wmEasyModeLetter wmWrongLetter",
            children: "W"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 20
          }, undefined), "rong letter"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 17
        }, undefined)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 139,
    columnNumber: 25
  }, undefined);

  const MainInfo = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "Outertable",
    children: [secretWord === '' ? pickRandomWord() : '', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trParagraph",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: ["Secret Word: ", solved ? secretWord : secretDisplay]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 13
      }, undefined), secretWord === '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Loading ..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 17
      }, undefined) : solved ? promptForPlayAgain : promptForGuess, solved ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }, undefined) : guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "AlignCenter",
        children: "Start guessing"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 21
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "AlignCenter",
        children: "Keep guessing"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }, undefined), guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "trParagraph",
      children: "No guesses yet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }, undefined) : displayGuesses]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 154,
    columnNumber: 22
  }, undefined);

  const GuessInfo = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "Outertable",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "wmModeOptionForm",
      children: "Guess info:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
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
      lineNumber: 184,
      columnNumber: 13
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 178,
    columnNumber: 23
  }, undefined);

  const BrowserLayout = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container-fluid",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: ShowModeOptions
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
            lineNumber: 194,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col",
            children: MainInfo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        children: GuessInfo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 187,
    columnNumber: 27
  }, undefined);

  const MobileLayout = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [ShowModeOptions, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
    lineNumber: 201,
    columnNumber: 26
  }, undefined);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trBackground",
    children: react_device_detect__WEBPACK_IMPORTED_MODULE_3__.isMobile ? MobileLayout : BrowserLayout
  }, void 0, false, {
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
        lineNumber: 219,
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
        lineNumber: 220,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          copyToClipboard();
        },
        children: "Clipboard"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 218,
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
      lineNumber: 242,
      columnNumber: 13
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "form-group trParagraph",
      children: [guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "First guess:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 21
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Next guess:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 255,
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
        lineNumber: 257,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 13
    }, this);
  }

  function showGuessesTable() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: gameMode === 'hard' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "trTable",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Guess"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 273,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Correct Letter"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 274,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Correct Position"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 275,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 272,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: guesses.map((g, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: g
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 281,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "AlignCenter",
              children: calcCorrectLetterCount(g)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "AlignCenter",
              children: calcCorrectPositionCount(g)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 283,
              columnNumber: 25
            }, this)]
          }, `mode0guess${i}`, true, {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 21
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 270,
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
              lineNumber: 295,
              columnNumber: 29
            }, this))
          }, `mode1guess${i}`, false, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 21
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 269,
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
    let letterResult = calcLetterResult(guessLetters, guessLetterIndex);

    if (letterResult === 'C') {
      return "wmEasyModeLetter wmCorrectLetterCorrectPosition";
    }

    if (letterResult === 'I') {
      return "wmEasyModeLetter wmCorrectLetterWrongPosition";
    }

    return "wmEasyModeLetter wmWrongLetter";
  }
};

_s(WordMastermind, "DLJ82aqq816wvTpRg5qT+DwzFNE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vbWFzdGVybWluZC5qcyJdLCJuYW1lcyI6WyJXb3JkTWFzdGVybWluZCIsInNldFdoZXJldG8iLCJoaXN0b3J5Iiwic2V0SGlzdG9yeSIsInVzZVN0YXRlIiwia2V5Ym9hcmRWZXJzaW9uIiwic2V0S2V5Ym9hcmRWZXJzaW9uIiwic2V0U29sdmVDb3VudHMiLCJzZXRTZXRTb2x2ZUNvdW50cyIsInNldEd1ZXNzQ291bnQiLCJzZXRTZXRHdWVzc0NvdW50Iiwic2VjcmV0V29yZCIsInNldFNlY3JldFdvcmQiLCJzZWNyZXREaXNwbGF5Iiwic2V0U2VjcmV0RGlzcGxheSIsImd1ZXNzIiwic2V0R3Vlc3MiLCJndWVzc2VzIiwic2V0R3Vlc3NlcyIsInNvbHZlZCIsInNldFNvbHZlZCIsImdhbWVNb2RlIiwic2V0R2FtZU1vZGUiLCJzaG93SW5pdGlhbEluZm8iLCJzZXRTaG93SW5pdGlhbEluZm8iLCJkaXZVbmRlcktleWJvYXJkIiwic2hvd0RpdlVuZGVyS2V5Ym9hcmQiLCJkaXNwbGF5R3Vlc3NlcyIsInNob3dHdWVzc2VzVGFibGUiLCJwcm9tcHRGb3JHdWVzcyIsInNob3dHdWVzc1Byb21wdCIsInByb21wdEZvclBsYXlBZ2FpbiIsInNob3dQbGF5QWdhaW5Qcm9tcHQiLCJoaWRlaGludHMiLCJzZXRIaWRlaGludHMiLCJoYW5kbGVNb2RlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiU2hvd01vZGVPcHRpb25zIiwiaGFuZGxlSW5wdXRMZXR0ZXIiLCJsZXR0ZXIiLCJoYW5kbGVVcGRhdGVkR3Vlc3MiLCJoYW5kbGVEZWxldGVMZXR0ZXIiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJndWVzc3dvcmQiLCJhZGRHdWVzc1RvSGlzdG9yeSIsIm5ld1NldEd1ZXNzQ291bnQiLCJhZGRSb3VuZFRvSGlzdG9yeSIsIm5ld3NlY3JldHdvcmQiLCJuZXdoaXN0b3J5IiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwibmV3cm91bmQiLCJuZXdzZXQiLCJyb3VuZHMiLCJwdXNoIiwiY3VycnNldCIsImN1cnJyb3VuZCIsImd1ZXNzTGV0dGVycyIsIkFycmF5IiwiZnJvbSIsImxldHRlcmluZm8iLCJpIiwiZ3Vlc3NsZXR0ZXIiLCJsZXR0ZXJSZXN1bHQiLCJjYWxjTGV0dGVyUmVzdWx0IiwicmVzdWx0IiwibmV3Z3Vlc3MiLCJzb2x2ZXMiLCJjb3B5VG9DbGlwYm9hcmQiLCJjb3B5VGV4dCIsInMiLCJzaSIsInIiLCJyaSIsImciLCJnaSIsImwiLCJsaSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImFsZXJ0IiwiaGludHNoaWRkZW4iLCJjaGVja3dvcmQiLCJpbmRleCIsImhpZGV3b3JkIiwicmVtb3ZlRW50cnkiLCJuZXdoaWRlaGludHMiLCJJbml0aWFsSW5mbyIsIm1hcCIsIm51bSIsInRvU3RyaW5nIiwiTWFpbkluZm8iLCJwaWNrUmFuZG9tV29yZCIsIkd1ZXNzSW5mbyIsIkJyb3dzZXJMYXlvdXQiLCJNb2JpbGVMYXlvdXQiLCJpc01vYmlsZSIsInRvVXBwZXJDYXNlIiwicmVwbGFjZSIsImNhbGNDb3JyZWN0TGV0dGVyQ291bnQiLCJjYWxjQ29ycmVjdFBvc2l0aW9uQ291bnQiLCJzcGxpdCIsImoiLCJjYWxjTW9kZTFjc3MiLCJuZXdsZW4iLCJiYXNldXJsIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwidGV4dCIsInJhbmRvbXdvcmQiLCJndWVzc2xldHRlcnMiLCJuIiwiYWxwaGFiZXQiLCJ4IiwieSIsImd1ZXNzTGV0dGVySW5kZXgiLCJpbmRleE9mIiwibmV4dGpzdGFydCIsImpmb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsY0FBYyxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWtCO0FBQUE7O0FBQ3JDLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixN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b0YsTUFBTSxHQUFHLEtBQWI7O0FBQ0EsZUFBSSxJQUFJbEIsQ0FBQyxHQUFHaUIsVUFBWixFQUF3QixDQUFDQyxNQUFELElBQVdsQixDQUFDLEdBQUdoRyxVQUFVLENBQUNpQyxNQUFsRCxFQUEwRCtELENBQUMsRUFBM0QsRUFBK0Q7QUFDM0QsZ0JBQUk5QyxZQUFZLENBQUM4QyxDQUFELENBQVosS0FBb0JsRSxNQUFwQixJQUE4QjlCLFVBQVUsQ0FBQ2dHLENBQUQsQ0FBVixLQUFrQmxFLE1BQXBELEVBQTREO0FBQ3hELGtCQUFJa0UsQ0FBQyxLQUFLZSxnQkFBVixFQUE0QjtBQUN4Qix1QkFBTyxHQUFQO0FBQ0g7O0FBQ0RHLG9CQUFNLEdBQUcsSUFBVDtBQUNBRCx3QkFBVSxHQUFHakIsQ0FBQyxHQUFHLENBQWpCO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7QUFDSjs7QUFDRCxXQUFPLEdBQVA7QUFDSDs7QUFDRCxXQUFTQyxZQUFULENBQXNCL0MsWUFBdEIsRUFBbUM2RCxnQkFBbkMsRUFBcUQ7QUFDakQsUUFBSXZELFlBQVksR0FBR0MsZ0JBQWdCLENBQUNQLFlBQUQsRUFBZTZELGdCQUFmLENBQW5DOztBQUNBLFFBQUl2RCxZQUFZLEtBQUssR0FBckIsRUFBMEI7QUFBQyxhQUFPLGlEQUFQO0FBQTBEOztBQUNyRixRQUFJQSxZQUFZLEtBQUssR0FBckIsRUFBMEI7QUFBQyxhQUFPLCtDQUFQO0FBQXdEOztBQUNuRixXQUFPLGdDQUFQO0FBQ0g7QUFDSixDQWpYRDs7R0FBTW5FLGM7O0tBQUFBLGM7QUFtWE4sK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTM0ODA1MzQ4Y2RiMzg2OWI4MmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNob3dpbmZvIGZyb20gJy4uL3dpL3Nob3dpbmZvJ1xyXG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnXHJcbmltcG9ydCBTaG93Q3VzdG9tS2V5Ym9hcmQgZnJvbSAnLi4vc2hvd0N1c3RvbUtleWJvYXJkJztcclxuXHJcbmNvbnN0IFdvcmRNYXN0ZXJtaW5kID0gKHtzZXRXaGVyZXRvfSkgPT4ge1xyXG4gICAgY29uc3QgW2hpc3RvcnksIHNldEhpc3RvcnldID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2tleWJvYXJkVmVyc2lvbiwgc2V0S2V5Ym9hcmRWZXJzaW9uXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3NldFNvbHZlQ291bnRzLCBzZXRTZXRTb2x2ZUNvdW50c10gPSB1c2VTdGF0ZShbXSk7IC8vIGhvdyBtYW55IGd1ZXNzZXMgdG8gc29sdmUgZWFjaCBzZXRcclxuICAgIGNvbnN0IFtzZXRHdWVzc0NvdW50LCBzZXRTZXRHdWVzc0NvdW50XSA9IHVzZVN0YXRlKDApOyAvLyB0b3RhbCBndWVzcyBjb3VudCBmb3IgdGhlIDItOCBsZXR0ZXIgc2V0XHJcbiAgICBjb25zdCBbc2VjcmV0V29yZCwgc2V0U2VjcmV0V29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VjcmV0RGlzcGxheSwgc2V0U2VjcmV0RGlzcGxheV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZ3Vlc3MsIHNldEd1ZXNzXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtndWVzc2VzLCBzZXRHdWVzc2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzb2x2ZWQsIHNldFNvbHZlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZ2FtZU1vZGUsIHNldEdhbWVNb2RlXSA9IHVzZVN0YXRlKCdlYXN5Jyk7XHJcbiAgICBjb25zdCBbc2hvd0luaXRpYWxJbmZvLCBzZXRTaG93SW5pdGlhbEluZm9dID0gdXNlU3RhdGUodHJ1ZSk7IC8vIHNldCBpbmZvLCBlYXN5IG1vZGUgaW5mb1xyXG4gICAgY29uc3QgZGl2VW5kZXJLZXlib2FyZCA9IHNob3dEaXZVbmRlcktleWJvYXJkKCk7XHJcbiAgICBjb25zdCBkaXNwbGF5R3Vlc3NlcyA9IHNob3dHdWVzc2VzVGFibGUoKTtcclxuICAgIGNvbnN0IHByb21wdEZvckd1ZXNzID0gc2hvd0d1ZXNzUHJvbXB0KCk7XHJcbiAgICBjb25zdCBwcm9tcHRGb3JQbGF5QWdhaW4gPSBzaG93UGxheUFnYWluUHJvbXB0KCk7XHJcbiAgICBjb25zdCBbaGlkZWhpbnRzLCBzZXRIaWRlaGludHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgaGFuZGxlTW9kZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0R2FtZU1vZGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgU2hvd01vZGVPcHRpb25zID0gPGZvcm0gY2xhc3NOYW1lPVwid21Nb2RlT3B0aW9uRm9ybVwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cImVhc3lcIiBjaGVja2VkPXtnYW1lTW9kZSA9PT0gJ2Vhc3knfSBpZD1cIm1vZGUwXCIgb25DaGFuZ2U9eyhlKSA9PiB7aGFuZGxlTW9kZUNoYW5nZShlKTt9fSBuYW1lPVwibW9kZVwiLz5cclxuICAgICAgICA8bGFiZWwgZm9yPVwibW9kZTBcIj5FYXN5PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJoYXJkXCIgY2hlY2tlZD17Z2FtZU1vZGUgPT09ICdoYXJkJ30gaWQ9XCJtb2RlMVwiIG9uQ2hhbmdlPXsoZSkgPT4ge2hhbmRsZU1vZGVDaGFuZ2UoZSk7fX0gbmFtZT1cIm1vZGVcIi8+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cIm1vZGUxXCI+SGFyZDwvbGFiZWw+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHsgc2V0V2hlcmV0bygnbWVudScpOyB9IH0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvZm9ybT47XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJbnB1dExldHRlcihsZXR0ZXIpIHtcclxuICAgICAgICBoYW5kbGVVcGRhdGVkR3Vlc3MoZ3Vlc3MgKyBsZXR0ZXIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRGVsZXRlTGV0dGVyKCkge1xyXG4gICAgICAgIGlmIChndWVzcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNldEd1ZXNzKGd1ZXNzLnN1YnN0cmluZygwLGd1ZXNzLmxlbmd0aC0xKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2hvd0RpdlVuZGVyS2V5Ym9hcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwid21Xb3JkVW5kZXJLZXlib2FyZFwiPiZuYnNwO3tndWVzc30mbmJzcDs8L2Rpdj47XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVVcGRhdGVkR3Vlc3MoZ3Vlc3N3b3JkKSB7XHJcbiAgICAgICAgaWYgKGd1ZXNzd29yZC5sZW5ndGggPT09IHNlY3JldFdvcmQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGFkZEd1ZXNzVG9IaXN0b3J5KGd1ZXNzd29yZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1NldEd1ZXNzQ291bnQgPSBzZXRHdWVzc0NvdW50ICsgMTtcclxuICAgICAgICAgICAgc2V0U2V0R3Vlc3NDb3VudChuZXdTZXRHdWVzc0NvdW50KTtcclxuICAgICAgICAgICAgc2V0R3Vlc3NlcyhbZ3Vlc3N3b3JkLCAuLi5ndWVzc2VzXSk7XHJcbiAgICAgICAgICAgIHNldEd1ZXNzKCcnKTtcclxuICAgICAgICAgICAgaWYgKGd1ZXNzd29yZCA9PT0gc2VjcmV0V29yZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2V0U29sdmVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlY3JldFdvcmQubGVuZ3RoID09PSA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2V0U29sdmVDb3VudHMoWy4uLnNldFNvbHZlQ291bnRzLCBuZXdTZXRHdWVzc0NvdW50XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRHdWVzcyhndWVzc3dvcmQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFkZFJvdW5kVG9IaXN0b3J5KG5ld3NlY3JldHdvcmQpIHtcclxuICAgICAgICAvLyBoaXN0b3J5IGFycmF5IGJ5IHNldCwgbmV3IHNldHMgYXQgbGFzdCBwb3NpdGlvblxyXG4gICAgICAgIC8vIGVhY2ggc2V0IGlzIGFuIGFycmF5IG9mIHJvdW5kcyAoMi04IGxldHRlciBzZWNyZXQgd29yZHMsIHNvIDcgcm91bmRzKVxyXG4gICAgICAgIC8vIGVhY2ggcm91bmQgaGFzIHNlY3JldCB3b3JkIGFuZCBndWVzcyBpbmZvXHJcbiAgICAgICAgbGV0IG5ld2hpc3RvcnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGhpc3RvcnkpKTtcclxuICAgICAgICBsZXQgbmV3cm91bmQgPSB7c2VjcmV0V29yZDogbmV3c2VjcmV0d29yZCwgZ3Vlc3NlczogW10sIHNvbHZlZDogZmFsc2V9O1xyXG4gICAgICAgIGlmIChuZXdzZWNyZXR3b3JkLmxlbmd0aCA9PT0gMikgeyAvLyBuZXcgc2V0XHJcbiAgICAgICAgICAgIGxldCBuZXdzZXQgPSB7cm91bmRzOiBbbmV3cm91bmRdfTtcclxuICAgICAgICAgICAgbmV3aGlzdG9yeS5wdXNoKG5ld3NldCk7XHJcbiAgICAgICAgfSBlbHNlIHsgLy8gZXhpc3Rpbmcgc2V0XHJcbiAgICAgICAgICAgIGxldCBjdXJyc2V0ID0gbmV3aGlzdG9yeVtuZXdoaXN0b3J5Lmxlbmd0aC0xXTtcclxuICAgICAgICAgICAgY3VycnNldC5yb3VuZHMucHVzaChuZXdyb3VuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEhpc3RvcnkobmV3aGlzdG9yeSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhZGRHdWVzc1RvSGlzdG9yeShndWVzc3dvcmQpIHtcclxuICAgICAgICBsZXQgbmV3aGlzdG9yeSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaGlzdG9yeSkpO1xyXG4gICAgICAgIGxldCBjdXJyc2V0ID0gbmV3aGlzdG9yeVtuZXdoaXN0b3J5Lmxlbmd0aC0xXTtcclxuICAgICAgICBsZXQgY3VycnJvdW5kID0gY3VycnNldC5yb3VuZHNbY3VycnNldC5yb3VuZHMubGVuZ3RoLTFdO1xyXG4gICAgICAgIGxldCBndWVzc0xldHRlcnMgPSBBcnJheS5mcm9tKGd1ZXNzd29yZCk7XHJcbiAgICAgICAgbGV0IGxldHRlcmluZm8gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGd1ZXNzTGV0dGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBndWVzc2xldHRlciA9IGd1ZXNzTGV0dGVyc1tpXTtcclxuICAgICAgICAgICAgY29uc3QgbGV0dGVyUmVzdWx0ID0gY2FsY0xldHRlclJlc3VsdChndWVzc0xldHRlcnMsIGkpOyAvLyBDLCBJLCBvciBXXHJcbiAgICAgICAgICAgIGxldHRlcmluZm8ucHVzaCh7bGV0dGVyOiBndWVzc2xldHRlciwgcmVzdWx0OiBsZXR0ZXJSZXN1bHR9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5ld2d1ZXNzID0ge2d1ZXNzOiBndWVzc3dvcmQsIGxldHRlcmluZm86IGxldHRlcmluZm8sIHNvbHZlczogZ3Vlc3N3b3JkID09PSBzZWNyZXRXb3JkfTtcclxuICAgICAgICBjdXJycm91bmQuc29sdmVkID0gbmV3Z3Vlc3Muc29sdmVzO1xyXG4gICAgICAgIGN1cnJyb3VuZC5ndWVzc2VzLnB1c2gobmV3Z3Vlc3MpO1xyXG4gICAgICAgIHNldEhpc3RvcnkobmV3aGlzdG9yeSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQoKSB7XHJcbiAgICAgICAgbGV0IGNvcHlUZXh0ID0gXCJXb3JkIE1hc3Rlcm1pbmRcXG5cIjtcclxuICAgICAgICBmb3IgKGxldCBzID0gMDsgcyA8IGhpc3RvcnkubGVuZ3RoOyBzKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgc2kgPSBoaXN0b3J5W3NdO1xyXG4gICAgICAgICAgICBjb3B5VGV4dCA9IGAke2NvcHlUZXh0fT5TZXQgJHtzfTpcXG5gXHJcbiAgICAgICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgc2kucm91bmRzLmxlbmd0aDsgcisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByaSA9IHNpLnJvdW5kc1tyXTtcclxuICAgICAgICAgICAgICAgIGNvcHlUZXh0ID0gYCR7Y29weVRleHR9Pj5Sb3VuZCAke3J9LCAke3JpLnNlY3JldFdvcmR9OlxcbmA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBnID0gMDsgZyA8IHJpLmd1ZXNzZXMubGVuZ3RoOyBnKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnaSA9IHJpLmd1ZXNzZXNbZ107XHJcbiAgICAgICAgICAgICAgICAgICAgY29weVRleHQgPSBgJHtjb3B5VGV4dH0+Pj5HdWVzcyAke2d9LCAke2dpLmd1ZXNzfTogYDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBsID0gMDsgbCA8IGdpLmxldHRlcmluZm8ubGVuZ3RoOyBsKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGkgPSBnaS5sZXR0ZXJpbmZvW2xdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGkucmVzdWx0ID09PSAnQycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlUZXh0ID0gY29weVRleHQgKyBcIvCfn6lcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsaS5yZXN1bHQgPT09ICdJJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29weVRleHQgPSBjb3B5VGV4dCArIFwi8J+fqFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29weVRleHQgPSBjb3B5VGV4dCArIFwi4qybXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29weVRleHQgPSBjb3B5VGV4dCArIFwiXFxuXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29weVRleHQpO1xyXG4gICAgICAgIGFsZXJ0KFwiQ2xpcGJvYXJkIHVwZGF0ZWRcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoaW50c2hpZGRlbihjaGVja3dvcmQpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaGlkZWhpbnRzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBoaWRld29yZCA9IGhpZGVoaW50c1tpbmRleF07XHJcbiAgICAgICAgICAgIGlmIChoaWRld29yZCA9PT0gY2hlY2t3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVFbnRyeShpbmRleCkge1xyXG4gICAgICAgIGlmICghaGludHNoaWRkZW4oZ3Vlc3Nlc1tpbmRleF0pKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdoaWRlaGludHMgPSBbLi4uaGlkZWhpbnRzXTtcclxuICAgICAgICAgICAgbmV3aGlkZWhpbnRzLnB1c2goZ3Vlc3Nlc1tpbmRleF0pO1xyXG4gICAgICAgICAgICBzZXRIaWRlaGludHMobmV3aGlkZWhpbnRzKTsgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IEluaXRpYWxJbmZvID0gPGRpdiBjbGFzc05hbWU9XCJPdXRlcnRhYmxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaCBBbGlnbkxlZnRcIj5cclxuICAgICAgICAgICAgPHA+Mi04IGxldHRlciB3b3JkcyBwZXIgc2V0LjwvcD5cclxuICAgICAgICAgICAgPHA+R3Vlc3NlcyB0aGlzIHdvcmQ6IHtndWVzc2VzLmxlbmd0aH08L3A+XHJcbiAgICAgICAgICAgIDxwPkd1ZXNzZXMgdGhpcyBzZXQ6IHtzZXRHdWVzc0NvdW50fTwvcD5cclxuICAgICAgICAgICAge3NldFNvbHZlQ291bnRzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICA8cD5ObyBjb21wbGV0ZWQgc2V0cyB5ZXQ8L3A+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8cD5HdWVzc2VzIGZvciBjb21wbGV0ZWQgc2V0czoge3NldFNvbHZlQ291bnRzLm1hcChudW0gPT4gKDxzcGFuIGtleT17bnVtLnRvU3RyaW5nKCl9PntudW19IDwvc3Bhbj4pKX08L3A+fVxyXG4gICAgICAgICAgICB7Z2FtZU1vZGUgPT09ICdlYXN5JyAmJiA8PjxwPjxzcGFuIGNsYXNzTmFtZT1cIndtRWFzeU1vZGVMZXR0ZXIgd21Db3JyZWN0TGV0dGVyQ29ycmVjdFBvc2l0aW9uXCI+Qzwvc3Bhbj5vcnJlY3QgcG9zaXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ3bUVhc3lNb2RlTGV0dGVyIHdtQ29ycmVjdExldHRlcldyb25nUG9zaXRpb25cIj5JPC9zcGFuPm5jb3JyZWN0IHBvc2l0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwid21FYXN5TW9kZUxldHRlciB3bVdyb25nTGV0dGVyXCI+Vzwvc3Bhbj5yb25nIGxldHRlcjwvcD5cclxuICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgTWFpbkluZm8gPSA8ZGl2IGNsYXNzTmFtZT1cIk91dGVydGFibGVcIj5cclxuICAgICAgICB7c2VjcmV0V29yZCA9PT0gJycgPyBwaWNrUmFuZG9tV29yZCgpIDogJyd9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICA8aDM+U2VjcmV0IFdvcmQ6IHtzb2x2ZWQgPyBzZWNyZXRXb3JkIDogc2VjcmV0RGlzcGxheX08L2gzPlxyXG4gICAgICAgICAgICB7c2VjcmV0V29yZCA9PT0gJycgP1xyXG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmcgLi4uPC9oMT5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIHNvbHZlZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbXB0Rm9yUGxheUFnYWluXHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIHByb21wdEZvckd1ZXNzfVxyXG4gICAgICAgICAgICB7c29sdmVkID9cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgZ3Vlc3Nlcy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCI+U3RhcnQgZ3Vlc3Npbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCI+S2VlcCBndWVzc2luZzwvcD59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2d1ZXNzZXMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5ObyBndWVzc2VzIHlldDwvcD5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICBkaXNwbGF5R3Vlc3Nlc31cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IEd1ZXNzSW5mbyA9IDxkaXYgY2xhc3NOYW1lPVwiT3V0ZXJ0YWJsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid21Nb2RlT3B0aW9uRm9ybVwiPlxyXG4gICAgICAgICAgICBHdWVzcyBpbmZvOlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtndWVzc2VzLm1hcCgoZywgZ2kpID0+IChcclxuICAgICAgICAgICAgIWhpbnRzaGlkZGVuKGcpICYmXHJcbiAgICAgICAgICAgIDxTaG93aW5mbyBrZXk9e2Ake2d1ZXNzZXMubGVuZ3RoIC0gZ2l9LiR7Z31gfSB3b3JkPXtnfSBzaG93SW5zZXJ0cz1cIk5cIiBzaG93U3dhcHM9XCJZXCIgc2hvd0FuYWdyYW1zPVwiWVwiIHNob3dEcm9wcz1cIk5cIiByZW1vdmVFbnRyeT17cmVtb3ZlRW50cnl9IGVudHJ5SW5kZXg9e2dpfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgQnJvd3NlckxheW91dCA9IDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAge1Nob3dNb2RlT3B0aW9uc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+e0luaXRpYWxJbmZvfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+e01haW5JbmZvfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPntHdWVzc0luZm99PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbiAgICBjb25zdCBNb2JpbGVMYXlvdXQgPSA8ZGl2PlxyXG4gICAgICAgIHtTaG93TW9kZU9wdGlvbnN9XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHsgc2V0U2hvd0luaXRpYWxJbmZvKCFzaG93SW5pdGlhbEluZm8pOyB9IH0+XHJcbiAgICAgICAgICAgICAgICB7c2hvd0luaXRpYWxJbmZvID8gXCJIaWRlXCIgOiBcIlNob3dcIn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIHtzaG93SW5pdGlhbEluZm8gJiYgSW5pdGlhbEluZm99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge01haW5JbmZvfVxyXG4gICAgPC9kaXY+O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICB7IGlzTW9iaWxlID8gTW9iaWxlTGF5b3V0IDogQnJvd3NlckxheW91dCB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dQbGF5QWdhaW5Qcm9tcHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRtQ29uZ3JhdHNcIj7wn5GP8J+PvSBTb2x2ZWQgaW4ge2d1ZXNzZXMubGVuZ3RofSBtb3ZlcyEg8J+Rj/Cfj708L2g0PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcGlja1JhbmRvbVdvcmQoKTtcclxuICAgICAgICAgICAgICAgIHNldEd1ZXNzKCcnKTtcclxuICAgICAgICAgICAgICAgIHNldEd1ZXNzZXMoW10pO1xyXG4gICAgICAgICAgICAgICAgc2V0SGlkZWhpbnRzKFtdKTtcclxuICAgICAgICAgICAgICAgIHNldFNvbHZlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c2VjcmV0V29yZC5sZW5ndGggPT09IDggPyBcIlN0YXJ0IEFub3RoZXIgU2V0IVwiIDogXCJTdGFydCBOZXh0IFdvcmRcIn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7Y29weVRvQ2xpcGJvYXJkKCk7fX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2xpcGJvYXJkXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0d1ZXNzUHJvbXB0KCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgaXNNb2JpbGUgP1xyXG4gICAgICAgICAgICA8U2hvd0N1c3RvbUtleWJvYXJkXHJcbiAgICAgICAgICAgICAgICBrZXlib2FyZFZlcnNpb249e2tleWJvYXJkVmVyc2lvbn1cclxuICAgICAgICAgICAgICAgIHNldEtleWJvYXJkVmVyc2lvbj17c2V0S2V5Ym9hcmRWZXJzaW9ufVxyXG4gICAgICAgICAgICAgICAgaW5wdXRXb3JkPXtndWVzc31cclxuICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0TGV0dGVyPXtoYW5kbGVJbnB1dExldHRlcn1cclxuICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZUxldHRlcj17aGFuZGxlRGVsZXRlTGV0dGVyfVxyXG4gICAgICAgICAgICAgICAgZGl2VW5kZXJLZXlib2FyZD17ZGl2VW5kZXJLZXlib2FyZH1cclxuICAgICAgICAgICAgPjwvU2hvd0N1c3RvbUtleWJvYXJkPiAgICAgICAgXHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgdHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgICAgIHtndWVzc2VzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZpcnN0IGd1ZXNzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OZXh0IGd1ZXNzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ3Vlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtndWVzc31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3Vlc3N3b3JkID0gZS50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKS5yZXBsYWNlKCAvXFxXL2cgLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVVwZGF0ZWRHdWVzcyhndWVzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgfSB9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0d1ZXNzZXNUYWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj57Z2FtZU1vZGUgPT09ICdoYXJkJyA/XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRyVGFibGVcIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5HdWVzczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkNvcnJlY3QgTGV0dGVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+Q29ycmVjdCBQb3NpdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7Z3Vlc3Nlcy5tYXAoKGcsaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2Btb2RlMGd1ZXNzJHtpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2d9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCI+e2NhbGNDb3JyZWN0TGV0dGVyQ291bnQoZyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCI+e2NhbGNDb3JyZWN0UG9zaXRpb25Db3VudChnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0clRhYmxlXCI+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHtndWVzc2VzLm1hcCgoZyxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YG1vZGUxZ3Vlc3Mke2l9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtnLnNwbGl0KCcnKS5tYXAoKGwsaikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17YG1vZGUxZ3Vlc3Mke2l9bGV0dGVyJHtqfWB9IGNsYXNzPXtjYWxjTW9kZTFjc3MoZyxqKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICB9PC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBpY2tSYW5kb21Xb3JkKCkge1xyXG4gICAgICAgIGNvbnN0IG5ld2xlbiA9IHNlY3JldFdvcmQgPyBzZWNyZXRXb3JkLmxlbmd0aCA8IDIgPyAyIDogc2VjcmV0V29yZC5sZW5ndGggPiA3ID8gMiA6IHNlY3JldFdvcmQubGVuZ3RoICsgMSA6IDI7XHJcbiAgICAgICAgaWYgKG5ld2xlbiA9PT0gMiAmJiBzZXRHdWVzc0NvdW50ICE9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0U2V0R3Vlc3NDb3VudCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYmFzZXVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FTkFCTEUySz9yYW5kb209JyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbS9FTkFCTEUySz9yYW5kb209J1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGJhc2V1cmwgKyBuZXdsZW4udG9TdHJpbmcoKTtcclxuICAgICAgICBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpLnRoZW4odGV4dCA9PiB7XHJcbiAgICAgICAgICAgIGxldCByYW5kb213b3JkPUpTT04ucGFyc2UodGV4dCkudG9VcHBlckNhc2UoKTsgLy8gSXQgaXMganVzdCBhIHdvcmQgaW4gZG91YmxlIHF1b3RlcyBidXQgaXQgaXMganNvbiBub25ldGhlbGVzc1xyXG4gICAgICAgICAgICBzZXRTZWNyZXRXb3JkKHJhbmRvbXdvcmQpO1xyXG4gICAgICAgICAgICBzZXRTZWNyZXREaXNwbGF5KHJhbmRvbXdvcmQuc3BsaXQoXCJcIikubWFwKCgpPT4oXCIqXCIpKSk7XHJcbiAgICAgICAgICAgIGFkZFJvdW5kVG9IaXN0b3J5KHJhbmRvbXdvcmQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2FsY0NvcnJlY3RMZXR0ZXJDb3VudChndWVzc2xldHRlcnMpIHtcclxuICAgICAgICBsZXQgbiA9IDBcclxuICAgICAgICBjb25zdCBhbHBoYWJldCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWidcclxuICAgICAgICBmb3IobGV0IGxldHRlciBvZiBhbHBoYWJldCkge1xyXG4gICAgICAgICAgICBsZXQgeCA9IHNlY3JldFdvcmQuc3BsaXQobGV0dGVyKS5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIGxldCB5ID0gZ3Vlc3NsZXR0ZXJzLnNwbGl0KGxldHRlcikubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICBuID0gbiArICh4IDwgeSA/IHggOiB5KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGNDb3JyZWN0UG9zaXRpb25Db3VudChndWVzc2xldHRlcnMpIHtcclxuICAgICAgICBsZXQgbiA9IDBcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTxzZWNyZXRXb3JkLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIG4gPSBuICsgKHNlY3JldFdvcmRbaV0gPT09IGd1ZXNzbGV0dGVyc1tpXSA/IDEgOiAwKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGNMZXR0ZXJSZXN1bHQoZ3Vlc3NMZXR0ZXJzLCBndWVzc0xldHRlckluZGV4KSB7XHJcbiAgICAgICAgbGV0IGxldHRlciA9IGd1ZXNzTGV0dGVyc1tndWVzc0xldHRlckluZGV4XTtcclxuICAgICAgICAvLyBnIGlzIHRoZSB3aG9lIGd1ZXNzLCBqIGlzIHRoZSBsZXR0ZXIgaW5kZXggZm9yIHdoaWNoIHdlIHdhbnQgdGhlIGNzcyBzdHlsZSBuYW1lXHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gc2VjcmV0V29yZFtndWVzc0xldHRlckluZGV4XSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJDXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWNyZXRXb3JkLmluZGV4T2YobGV0dGVyKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIC8vIHRoZSBndWVzcyBsZXR0ZXIgaXMgaW4gdGhlIHNlY3JldCB3b3JkIGFuZCBpcyBub3QgaW4gdGhlIHJpZ2h0IHNwb3RcclxuICAgICAgICAgICAgLy8gaGFzIGl0IGFscmVhZHkgYmVlbiBjb3VudGVkIGVhcmxpZXIgdGhvdWdoP1xyXG4gICAgICAgICAgICAvLyB3aWxsIGl0IGJlIGNvdW50ZWQgbGF0ZXIgYXMgY29ycmVjdCBsZXR0ZXIgY29ycmVjdCBzcG90P1xyXG4gICAgICAgICAgICBsZXQgbmV4dGpzdGFydCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VjcmV0V29yZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlY3JldFdvcmRbaV0gPT09IGxldHRlciAmJiBndWVzc0xldHRlcnNbaV0gIT09IGxldHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBqZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSBuZXh0anN0YXJ0OyAhamZvdW5kICYmIGogPCBzZWNyZXRXb3JkLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChndWVzc0xldHRlcnNbal0gPT09IGxldHRlciAmJiBzZWNyZXRXb3JkW2pdICE9PSBsZXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID09PSBndWVzc0xldHRlckluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiSVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgamZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRqc3RhcnQgPSBqICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJXXCI7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjYWxjTW9kZTFjc3MoZ3Vlc3NMZXR0ZXJzLGd1ZXNzTGV0dGVySW5kZXgpIHtcclxuICAgICAgICBsZXQgbGV0dGVyUmVzdWx0ID0gY2FsY0xldHRlclJlc3VsdChndWVzc0xldHRlcnMsIGd1ZXNzTGV0dGVySW5kZXgpO1xyXG4gICAgICAgIGlmIChsZXR0ZXJSZXN1bHQgPT09ICdDJykge3JldHVybiBcIndtRWFzeU1vZGVMZXR0ZXIgd21Db3JyZWN0TGV0dGVyQ29ycmVjdFBvc2l0aW9uXCI7fVxyXG4gICAgICAgIGlmIChsZXR0ZXJSZXN1bHQgPT09ICdJJykge3JldHVybiBcIndtRWFzeU1vZGVMZXR0ZXIgd21Db3JyZWN0TGV0dGVyV3JvbmdQb3NpdGlvblwiO31cclxuICAgICAgICByZXR1cm4gXCJ3bUVhc3lNb2RlTGV0dGVyIHdtV3JvbmdMZXR0ZXJcIjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29yZE1hc3Rlcm1pbmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==