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
            copyText = copyText + li.result;
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
        lineNumber: 135,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Guesses this word: ", guesses.length]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Guesses this set: ", setGuessCount]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 13
      }, undefined), setSolveCounts.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "No completed sets yet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Guesses for completed sets: ", setSolveCounts.map(num => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [num, " "]
        }, num.toString(), true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 76
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 17
      }, undefined), gameMode === 'easy' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "wmEasyModeLetter wmCorrectLetterCorrectPosition",
            children: "C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 42
          }, undefined), "orrect position"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 39
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "wmEasyModeLetter wmCorrectLetterWrongPosition",
            children: "I"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 20
          }, undefined), "ncorrect position"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "wmEasyModeLetter wmWrongLetter",
            children: "W"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 20
          }, undefined), "rong letter"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 17
        }, undefined)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 133,
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
    lineNumber: 148,
    columnNumber: 22
  }, undefined);

  const GuessInfo = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "Outertable",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "wmModeOptionForm",
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
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 172,
    columnNumber: 23
  }, undefined);

  const BrowserLayout = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container-fluid",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: ShowModeOptions
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
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
            lineNumber: 188,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col",
            children: MainInfo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        children: GuessInfo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 181,
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
        lineNumber: 198,
        columnNumber: 13
      }, undefined), showInitialInfo && InitialInfo]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }, undefined), MainInfo]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 195,
    columnNumber: 26
  }, undefined);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trBackground",
    children: react_device_detect__WEBPACK_IMPORTED_MODULE_3__.isMobile ? MobileLayout : BrowserLayout
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 206,
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
        lineNumber: 213,
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
        lineNumber: 214,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          copyToClipboard();
        },
        children: "Clipboard"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 212,
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
      lineNumber: 236,
      columnNumber: 13
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "form-group trParagraph",
      children: [guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "First guess:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 21
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Next guess:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 249,
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
        lineNumber: 251,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 245,
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
              lineNumber: 267,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Correct Letter"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Correct Position"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 269,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: guesses.map((g, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: g
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 275,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "AlignCenter",
              children: calcCorrectLetterCount(g)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 276,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "AlignCenter",
              children: calcCorrectPositionCount(g)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 25
            }, this)]
          }, `mode0guess${i}`, true, {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 21
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 264,
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
              lineNumber: 289,
              columnNumber: 29
            }, this))
          }, `mode1guess${i}`, false, {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 21
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 263,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vbWFzdGVybWluZC5qcyJdLCJuYW1lcyI6WyJXb3JkTWFzdGVybWluZCIsInNldFdoZXJldG8iLCJoaXN0b3J5Iiwic2V0SGlzdG9yeSIsInVzZVN0YXRlIiwia2V5Ym9hcmRWZXJzaW9uIiwic2V0S2V5Ym9hcmRWZXJzaW9uIiwic2V0U29sdmVDb3VudHMiLCJzZXRTZXRTb2x2ZUNvdW50cyIsInNldEd1ZXNzQ291bnQiLCJzZXRTZXRHdWVzc0NvdW50Iiwic2VjcmV0V29yZCIsInNldFNlY3JldFdvcmQiLCJzZWNyZXREaXNwbGF5Iiwic2V0U2VjcmV0RGlzcGxheSIsImd1ZXNzIiwic2V0R3Vlc3MiLCJndWVzc2VzIiwic2V0R3Vlc3NlcyIsInNvbHZlZCIsInNldFNvbHZlZCIsImdhbWVNb2RlIiwic2V0R2FtZU1vZGUiLCJzaG93SW5pdGlhbEluZm8iLCJzZXRTaG93SW5pdGlhbEluZm8iLCJkaXZVbmRlcktleWJvYXJkIiwic2hvd0RpdlVuZGVyS2V5Ym9hcmQiLCJkaXNwbGF5R3Vlc3NlcyIsInNob3dHdWVzc2VzVGFibGUiLCJwcm9tcHRGb3JHdWVzcyIsInNob3dHdWVzc1Byb21wdCIsInByb21wdEZvclBsYXlBZ2FpbiIsInNob3dQbGF5QWdhaW5Qcm9tcHQiLCJoaWRlaGludHMiLCJzZXRIaWRlaGludHMiLCJoYW5kbGVNb2RlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiU2hvd01vZGVPcHRpb25zIiwiaGFuZGxlSW5wdXRMZXR0ZXIiLCJsZXR0ZXIiLCJoYW5kbGVVcGRhdGVkR3Vlc3MiLCJoYW5kbGVEZWxldGVMZXR0ZXIiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJndWVzc3dvcmQiLCJhZGRHdWVzc1RvSGlzdG9yeSIsIm5ld1NldEd1ZXNzQ291bnQiLCJhZGRSb3VuZFRvSGlzdG9yeSIsIm5ld3NlY3JldHdvcmQiLCJuZXdoaXN0b3J5IiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwibmV3cm91bmQiLCJuZXdzZXQiLCJyb3VuZHMiLCJwdXNoIiwiY3VycnNldCIsImN1cnJyb3VuZCIsImd1ZXNzTGV0dGVycyIsIkFycmF5IiwiZnJvbSIsImxldHRlcmluZm8iLCJpIiwiZ3Vlc3NsZXR0ZXIiLCJsZXR0ZXJSZXN1bHQiLCJjYWxjTGV0dGVyUmVzdWx0IiwicmVzdWx0IiwibmV3Z3Vlc3MiLCJzb2x2ZXMiLCJjb3B5VG9DbGlwYm9hcmQiLCJjb3B5VGV4dCIsInMiLCJzaSIsInIiLCJyaSIsImciLCJnaSIsImwiLCJsaSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImFsZXJ0IiwiaGludHNoaWRkZW4iLCJjaGVja3dvcmQiLCJpbmRleCIsImhpZGV3b3JkIiwicmVtb3ZlRW50cnkiLCJuZXdoaWRlaGludHMiLCJJbml0aWFsSW5mbyIsIm1hcCIsIm51bSIsInRvU3RyaW5nIiwiTWFpbkluZm8iLCJwaWNrUmFuZG9tV29yZCIsIkd1ZXNzSW5mbyIsIkJyb3dzZXJMYXlvdXQiLCJNb2JpbGVMYXlvdXQiLCJpc01vYmlsZSIsInRvVXBwZXJDYXNlIiwicmVwbGFjZSIsImNhbGNDb3JyZWN0TGV0dGVyQ291bnQiLCJjYWxjQ29ycmVjdFBvc2l0aW9uQ291bnQiLCJzcGxpdCIsImoiLCJjYWxjTW9kZTFjc3MiLCJuZXdsZW4iLCJiYXNldXJsIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwidGV4dCIsInJhbmRvbXdvcmQiLCJndWVzc2xldHRlcnMiLCJuIiwiYWxwaGFiZXQiLCJ4IiwieSIsImd1ZXNzTGV0dGVySW5kZXgiLCJpbmRleE9mIiwibmV4dGpzdGFydCIsImpmb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsY0FBYyxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWtCO0FBQUE7O0FBQ3JDLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixN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QXBCLElBQThCOUIsVUFBVSxDQUFDZ0csQ0FBRCxDQUFWLEtBQWtCbEUsTUFBcEQsRUFBNEQ7QUFDeEQsa0JBQUlrRSxDQUFDLEtBQUtlLGdCQUFWLEVBQTRCO0FBQ3hCLHVCQUFPLEdBQVA7QUFDSDs7QUFDREcsb0JBQU0sR0FBRyxJQUFUO0FBQ0FELHdCQUFVLEdBQUdqQixDQUFDLEdBQUcsQ0FBakI7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQUNKOztBQUNELFdBQU8sR0FBUDtBQUNIOztBQUNELFdBQVNDLFlBQVQsQ0FBc0IvQyxZQUF0QixFQUFtQzZELGdCQUFuQyxFQUFxRDtBQUNqRCxRQUFJdkQsWUFBWSxHQUFHQyxnQkFBZ0IsQ0FBQ1AsWUFBRCxFQUFlNkQsZ0JBQWYsQ0FBbkM7O0FBQ0EsUUFBSXZELFlBQVksS0FBSyxHQUFyQixFQUEwQjtBQUFDLGFBQU8saURBQVA7QUFBMEQ7O0FBQ3JGLFFBQUlBLFlBQVksS0FBSyxHQUFyQixFQUEwQjtBQUFDLGFBQU8sK0NBQVA7QUFBd0Q7O0FBQ25GLFdBQU8sZ0NBQVA7QUFDSDtBQUNKLENBM1dEOztHQUFNbkUsYzs7S0FBQUEsYztBQTZXTiwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZjVjYTkxYWNmZTgzY2YwNzNhNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2hvd2luZm8gZnJvbSAnLi4vd2kvc2hvd2luZm8nXHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCdcclxuaW1wb3J0IFNob3dDdXN0b21LZXlib2FyZCBmcm9tICcuLi9zaG93Q3VzdG9tS2V5Ym9hcmQnO1xyXG5cclxuY29uc3QgV29yZE1hc3Rlcm1pbmQgPSAoe3NldFdoZXJldG99KSA9PiB7XHJcbiAgICBjb25zdCBbaGlzdG9yeSwgc2V0SGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBba2V5Ym9hcmRWZXJzaW9uLCBzZXRLZXlib2FyZFZlcnNpb25dID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbc2V0U29sdmVDb3VudHMsIHNldFNldFNvbHZlQ291bnRzXSA9IHVzZVN0YXRlKFtdKTsgLy8gaG93IG1hbnkgZ3Vlc3NlcyB0byBzb2x2ZSBlYWNoIHNldFxyXG4gICAgY29uc3QgW3NldEd1ZXNzQ291bnQsIHNldFNldEd1ZXNzQ291bnRdID0gdXNlU3RhdGUoMCk7IC8vIHRvdGFsIGd1ZXNzIGNvdW50IGZvciB0aGUgMi04IGxldHRlciBzZXRcclxuICAgIGNvbnN0IFtzZWNyZXRXb3JkLCBzZXRTZWNyZXRXb3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWNyZXREaXNwbGF5LCBzZXRTZWNyZXREaXNwbGF5XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtndWVzcywgc2V0R3Vlc3NdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2d1ZXNzZXMsIHNldEd1ZXNzZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NvbHZlZCwgc2V0U29sdmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtnYW1lTW9kZSwgc2V0R2FtZU1vZGVdID0gdXNlU3RhdGUoJ2Vhc3knKTtcclxuICAgIGNvbnN0IFtzaG93SW5pdGlhbEluZm8sIHNldFNob3dJbml0aWFsSW5mb10gPSB1c2VTdGF0ZSh0cnVlKTsgLy8gc2V0IGluZm8sIGVhc3kgbW9kZSBpbmZvXHJcbiAgICBjb25zdCBkaXZVbmRlcktleWJvYXJkID0gc2hvd0RpdlVuZGVyS2V5Ym9hcmQoKTtcclxuICAgIGNvbnN0IGRpc3BsYXlHdWVzc2VzID0gc2hvd0d1ZXNzZXNUYWJsZSgpO1xyXG4gICAgY29uc3QgcHJvbXB0Rm9yR3Vlc3MgPSBzaG93R3Vlc3NQcm9tcHQoKTtcclxuICAgIGNvbnN0IHByb21wdEZvclBsYXlBZ2FpbiA9IHNob3dQbGF5QWdhaW5Qcm9tcHQoKTtcclxuICAgIGNvbnN0IFtoaWRlaGludHMsIHNldEhpZGVoaW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBoYW5kbGVNb2RlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBzZXRHYW1lTW9kZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBTaG93TW9kZU9wdGlvbnMgPSA8Zm9ybSBjbGFzc05hbWU9XCJ3bU1vZGVPcHRpb25Gb3JtXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiZWFzeVwiIGNoZWNrZWQ9e2dhbWVNb2RlID09PSAnZWFzeSd9IGlkPVwibW9kZTBcIiBvbkNoYW5nZT17KGUpID0+IHtoYW5kbGVNb2RlQ2hhbmdlKGUpO319IG5hbWU9XCJtb2RlXCIvPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJtb2RlMFwiPkVhc3k8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cImhhcmRcIiBjaGVja2VkPXtnYW1lTW9kZSA9PT0gJ2hhcmQnfSBpZD1cIm1vZGUxXCIgb25DaGFuZ2U9eyhlKSA9PiB7aGFuZGxlTW9kZUNoYW5nZShlKTt9fSBuYW1lPVwibW9kZVwiLz5cclxuICAgICAgICA8bGFiZWwgZm9yPVwibW9kZTFcIj5IYXJkPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4geyBzZXRXaGVyZXRvKCdtZW51Jyk7IH0gfT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPjtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUlucHV0TGV0dGVyKGxldHRlcikge1xyXG4gICAgICAgIGhhbmRsZVVwZGF0ZWRHdWVzcyhndWVzcyArIGxldHRlcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVEZWxldGVMZXR0ZXIoKSB7XHJcbiAgICAgICAgaWYgKGd1ZXNzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc2V0R3Vlc3MoZ3Vlc3Muc3Vic3RyaW5nKDAsZ3Vlc3MubGVuZ3RoLTEpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzaG93RGl2VW5kZXJLZXlib2FyZCgpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ3bVdvcmRVbmRlcktleWJvYXJkXCI+Jm5ic3A7e2d1ZXNzfSZuYnNwOzwvZGl2PjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVVwZGF0ZWRHdWVzcyhndWVzc3dvcmQpIHtcclxuICAgICAgICBpZiAoZ3Vlc3N3b3JkLmxlbmd0aCA9PT0gc2VjcmV0V29yZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYWRkR3Vlc3NUb0hpc3RvcnkoZ3Vlc3N3b3JkKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3U2V0R3Vlc3NDb3VudCA9IHNldEd1ZXNzQ291bnQgKyAxO1xyXG4gICAgICAgICAgICBzZXRTZXRHdWVzc0NvdW50KG5ld1NldEd1ZXNzQ291bnQpO1xyXG4gICAgICAgICAgICBzZXRHdWVzc2VzKFtndWVzc3dvcmQsIC4uLmd1ZXNzZXNdKTtcclxuICAgICAgICAgICAgc2V0R3Vlc3MoJycpO1xyXG4gICAgICAgICAgICBpZiAoZ3Vlc3N3b3JkID09PSBzZWNyZXRXb3JkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZXRTb2x2ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VjcmV0V29yZC5sZW5ndGggPT09IDgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTZXRTb2x2ZUNvdW50cyhbLi4uc2V0U29sdmVDb3VudHMsIG5ld1NldEd1ZXNzQ291bnRdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEd1ZXNzKGd1ZXNzd29yZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWRkUm91bmRUb0hpc3RvcnkobmV3c2VjcmV0d29yZCkge1xyXG4gICAgICAgIC8vIGhpc3RvcnkgYXJyYXkgYnkgc2V0LCBuZXcgc2V0cyBhdCBsYXN0IHBvc2l0aW9uXHJcbiAgICAgICAgLy8gZWFjaCBzZXQgaXMgYW4gYXJyYXkgb2Ygcm91bmRzICgyLTggbGV0dGVyIHNlY3JldCB3b3Jkcywgc28gNyByb3VuZHMpXHJcbiAgICAgICAgLy8gZWFjaCByb3VuZCBoYXMgc2VjcmV0IHdvcmQgYW5kIGd1ZXNzIGluZm9cclxuICAgICAgICBsZXQgbmV3aGlzdG9yeSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaGlzdG9yeSkpO1xyXG4gICAgICAgIGxldCBuZXdyb3VuZCA9IHtzZWNyZXRXb3JkOiBuZXdzZWNyZXR3b3JkLCBndWVzc2VzOiBbXSwgc29sdmVkOiBmYWxzZX07XHJcbiAgICAgICAgaWYgKG5ld3NlY3JldHdvcmQubGVuZ3RoID09PSAyKSB7IC8vIG5ldyBzZXRcclxuICAgICAgICAgICAgbGV0IG5ld3NldCA9IHtyb3VuZHM6IFtuZXdyb3VuZF19O1xyXG4gICAgICAgICAgICBuZXdoaXN0b3J5LnB1c2gobmV3c2V0KTtcclxuICAgICAgICB9IGVsc2UgeyAvLyBleGlzdGluZyBzZXRcclxuICAgICAgICAgICAgbGV0IGN1cnJzZXQgPSBuZXdoaXN0b3J5W25ld2hpc3RvcnkubGVuZ3RoLTFdO1xyXG4gICAgICAgICAgICBjdXJyc2V0LnJvdW5kcy5wdXNoKG5ld3JvdW5kKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SGlzdG9yeShuZXdoaXN0b3J5KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFkZEd1ZXNzVG9IaXN0b3J5KGd1ZXNzd29yZCkge1xyXG4gICAgICAgIGxldCBuZXdoaXN0b3J5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShoaXN0b3J5KSk7XHJcbiAgICAgICAgbGV0IGN1cnJzZXQgPSBuZXdoaXN0b3J5W25ld2hpc3RvcnkubGVuZ3RoLTFdO1xyXG4gICAgICAgIGxldCBjdXJycm91bmQgPSBjdXJyc2V0LnJvdW5kc1tjdXJyc2V0LnJvdW5kcy5sZW5ndGgtMV07XHJcbiAgICAgICAgbGV0IGd1ZXNzTGV0dGVycyA9IEFycmF5LmZyb20oZ3Vlc3N3b3JkKTtcclxuICAgICAgICBsZXQgbGV0dGVyaW5mbyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3Vlc3NMZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGd1ZXNzbGV0dGVyID0gZ3Vlc3NMZXR0ZXJzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBsZXR0ZXJSZXN1bHQgPSBjYWxjTGV0dGVyUmVzdWx0KGd1ZXNzTGV0dGVycywgaSk7IC8vIEMsIEksIG9yIFdcclxuICAgICAgICAgICAgbGV0dGVyaW5mby5wdXNoKHtsZXR0ZXI6IGd1ZXNzbGV0dGVyLCByZXN1bHQ6IGxldHRlclJlc3VsdH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbmV3Z3Vlc3MgPSB7Z3Vlc3M6IGd1ZXNzd29yZCwgbGV0dGVyaW5mbzogbGV0dGVyaW5mbywgc29sdmVzOiBndWVzc3dvcmQgPT09IHNlY3JldFdvcmR9O1xyXG4gICAgICAgIGN1cnJyb3VuZC5zb2x2ZWQgPSBuZXdndWVzcy5zb2x2ZXM7XHJcbiAgICAgICAgY3VycnJvdW5kLmd1ZXNzZXMucHVzaChuZXdndWVzcyk7XHJcbiAgICAgICAgc2V0SGlzdG9yeShuZXdoaXN0b3J5KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNvcHlUb0NsaXBib2FyZCgpIHtcclxuICAgICAgICBsZXQgY29weVRleHQgPSBcIldvcmQgTWFzdGVybWluZFxcblwiO1xyXG4gICAgICAgIGZvciAobGV0IHMgPSAwOyBzIDwgaGlzdG9yeS5sZW5ndGg7IHMrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzaSA9IGhpc3Rvcnlbc107XHJcbiAgICAgICAgICAgIGNvcHlUZXh0ID0gYCR7Y29weVRleHR9PlNldCAke3N9OlxcbmBcclxuICAgICAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCBzaS5yb3VuZHMubGVuZ3RoOyByKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJpID0gc2kucm91bmRzW3JdO1xyXG4gICAgICAgICAgICAgICAgY29weVRleHQgPSBgJHtjb3B5VGV4dH0+PlJvdW5kICR7cn0sICR7cmkuc2VjcmV0V29yZH06XFxuYDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGcgPSAwOyBnIDwgcmkuZ3Vlc3Nlcy5sZW5ndGg7IGcrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdpID0gcmkuZ3Vlc3Nlc1tnXTtcclxuICAgICAgICAgICAgICAgICAgICBjb3B5VGV4dCA9IGAke2NvcHlUZXh0fT4+Pkd1ZXNzICR7Z30sICR7Z2kuZ3Vlc3N9OiBgO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGwgPSAwOyBsIDwgZ2kubGV0dGVyaW5mby5sZW5ndGg7IGwrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaSA9IGdpLmxldHRlcmluZm9bbF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlUZXh0ID0gY29weVRleHQgKyBsaS5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvcHlUZXh0ID0gY29weVRleHQgKyBcIlxcblwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvcHlUZXh0KTtcclxuICAgICAgICBhbGVydChcIkNsaXBib2FyZCB1cGRhdGVkXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGludHNoaWRkZW4oY2hlY2t3b3JkKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGhpZGVoaW50cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgaGlkZXdvcmQgPSBoaWRlaGludHNbaW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoaGlkZXdvcmQgPT09IGNoZWNrd29yZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRW50cnkoaW5kZXgpIHtcclxuICAgICAgICBpZiAoIWhpbnRzaGlkZGVuKGd1ZXNzZXNbaW5kZXhdKSkge1xyXG4gICAgICAgICAgICBsZXQgbmV3aGlkZWhpbnRzID0gWy4uLmhpZGVoaW50c107XHJcbiAgICAgICAgICAgIG5ld2hpZGVoaW50cy5wdXNoKGd1ZXNzZXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgc2V0SGlkZWhpbnRzKG5ld2hpZGVoaW50cyk7ICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBJbml0aWFsSW5mbyA9IDxkaXYgY2xhc3NOYW1lPVwiT3V0ZXJ0YWJsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGggQWxpZ25MZWZ0XCI+XHJcbiAgICAgICAgICAgIDxwPjItOCBsZXR0ZXIgd29yZHMgcGVyIHNldC48L3A+XHJcbiAgICAgICAgICAgIDxwPkd1ZXNzZXMgdGhpcyB3b3JkOiB7Z3Vlc3Nlcy5sZW5ndGh9PC9wPlxyXG4gICAgICAgICAgICA8cD5HdWVzc2VzIHRoaXMgc2V0OiB7c2V0R3Vlc3NDb3VudH08L3A+XHJcbiAgICAgICAgICAgIHtzZXRTb2x2ZUNvdW50cy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgPHA+Tm8gY29tcGxldGVkIHNldHMgeWV0PC9wPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPHA+R3Vlc3NlcyBmb3IgY29tcGxldGVkIHNldHM6IHtzZXRTb2x2ZUNvdW50cy5tYXAobnVtID0+ICg8c3BhbiBrZXk9e251bS50b1N0cmluZygpfT57bnVtfSA8L3NwYW4+KSl9PC9wPn1cclxuICAgICAgICAgICAge2dhbWVNb2RlID09PSAnZWFzeScgJiYgPD48cD48c3BhbiBjbGFzc05hbWU9XCJ3bUVhc3lNb2RlTGV0dGVyIHdtQ29ycmVjdExldHRlckNvcnJlY3RQb3NpdGlvblwiPkM8L3NwYW4+b3JyZWN0IHBvc2l0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwid21FYXN5TW9kZUxldHRlciB3bUNvcnJlY3RMZXR0ZXJXcm9uZ1Bvc2l0aW9uXCI+STwvc3Bhbj5uY29ycmVjdCBwb3NpdGlvbjwvcD5cclxuICAgICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cIndtRWFzeU1vZGVMZXR0ZXIgd21Xcm9uZ0xldHRlclwiPlc8L3NwYW4+cm9uZyBsZXR0ZXI8L3A+XHJcbiAgICAgICAgICAgIDwvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IE1haW5JbmZvID0gPGRpdiBjbGFzc05hbWU9XCJPdXRlcnRhYmxlXCI+XHJcbiAgICAgICAge3NlY3JldFdvcmQgPT09ICcnID8gcGlja1JhbmRvbVdvcmQoKSA6ICcnfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgPGgzPlNlY3JldCBXb3JkOiB7c29sdmVkID8gc2VjcmV0V29yZCA6IHNlY3JldERpc3BsYXl9PC9oMz5cclxuICAgICAgICAgICAge3NlY3JldFdvcmQgPT09ICcnID9cclxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nIC4uLjwvaDE+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICBzb2x2ZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21wdEZvclBsYXlBZ2FpblxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICBwcm9tcHRGb3JHdWVzc31cclxuICAgICAgICAgICAge3NvbHZlZCA/XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIGd1ZXNzZXMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJBbGlnbkNlbnRlclwiPlN0YXJ0IGd1ZXNzaW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJBbGlnbkNlbnRlclwiPktlZXAgZ3Vlc3Npbmc8L3A+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtndWVzc2VzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+Tm8gZ3Vlc3NlcyB5ZXQ8L3A+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgZGlzcGxheUd1ZXNzZXN9XHJcbiAgICA8L2Rpdj47XHJcbiAgICBjb25zdCBHdWVzc0luZm8gPSA8ZGl2IGNsYXNzTmFtZT1cIk91dGVydGFibGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndtTW9kZU9wdGlvbkZvcm1cIj5cclxuICAgICAgICAgICAgR3Vlc3MgaW5mbzpcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7Z3Vlc3Nlcy5tYXAoKGcsIGdpKSA9PiAoXHJcbiAgICAgICAgICAgICFoaW50c2hpZGRlbihnKSAmJlxyXG4gICAgICAgICAgICA8U2hvd2luZm8ga2V5PXtgJHtndWVzc2VzLmxlbmd0aCAtIGdpfS4ke2d9YH0gd29yZD17Z30gc2hvd0luc2VydHM9XCJOXCIgc2hvd1N3YXBzPVwiWVwiIHNob3dBbmFncmFtcz1cIllcIiBzaG93RHJvcHM9XCJOXCIgcmVtb3ZlRW50cnk9e3JlbW92ZUVudHJ5fSBlbnRyeUluZGV4PXtnaX0gLz5cclxuICAgICAgICApKX1cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IEJyb3dzZXJMYXlvdXQgPSA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIHtTaG93TW9kZU9wdGlvbnN9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPntJbml0aWFsSW5mb308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPntNYWluSW5mb308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj57R3Vlc3NJbmZvfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgTW9iaWxlTGF5b3V0ID0gPGRpdj5cclxuICAgICAgICB7U2hvd01vZGVPcHRpb25zfVxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7IHNldFNob3dJbml0aWFsSW5mbyghc2hvd0luaXRpYWxJbmZvKTsgfSB9PlxyXG4gICAgICAgICAgICAgICAge3Nob3dJbml0aWFsSW5mbyA/IFwiSGlkZVwiIDogXCJTaG93XCJ9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7c2hvd0luaXRpYWxJbmZvICYmIEluaXRpYWxJbmZvfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtNYWluSW5mb31cclxuICAgIDwvZGl2PjtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgeyBpc01vYmlsZSA/IE1vYmlsZUxheW91dCA6IEJyb3dzZXJMYXlvdXQgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzaG93UGxheUFnYWluUHJvbXB0KCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0bUNvbmdyYXRzXCI+8J+Rj/Cfj70gU29sdmVkIGluIHtndWVzc2VzLmxlbmd0aH0gbW92ZXMhIPCfkY/wn4+9PC9oND5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHBpY2tSYW5kb21Xb3JkKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRHdWVzcygnJyk7XHJcbiAgICAgICAgICAgICAgICBzZXRHdWVzc2VzKFtdKTtcclxuICAgICAgICAgICAgICAgIHNldEhpZGVoaW50cyhbXSk7XHJcbiAgICAgICAgICAgICAgICBzZXRTb2x2ZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3NlY3JldFdvcmQubGVuZ3RoID09PSA4ID8gXCJTdGFydCBBbm90aGVyIFNldCFcIiA6IFwiU3RhcnQgTmV4dCBXb3JkXCJ9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge2NvcHlUb0NsaXBib2FyZCgpO319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENsaXBib2FyZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dHdWVzc1Byb21wdCgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIGlzTW9iaWxlID9cclxuICAgICAgICAgICAgPFNob3dDdXN0b21LZXlib2FyZFxyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmRWZXJzaW9uPXtrZXlib2FyZFZlcnNpb259XHJcbiAgICAgICAgICAgICAgICBzZXRLZXlib2FyZFZlcnNpb249e3NldEtleWJvYXJkVmVyc2lvbn1cclxuICAgICAgICAgICAgICAgIGlucHV0V29yZD17Z3Vlc3N9XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dExldHRlcj17aGFuZGxlSW5wdXRMZXR0ZXJ9XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGVMZXR0ZXI9e2hhbmRsZURlbGV0ZUxldHRlcn1cclxuICAgICAgICAgICAgICAgIGRpdlVuZGVyS2V5Ym9hcmQ9e2RpdlVuZGVyS2V5Ym9hcmR9XHJcbiAgICAgICAgICAgID48L1Nob3dDdXN0b21LZXlib2FyZD4gICAgICAgIFxyXG4gICAgICAgIDpcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICB7Z3Vlc3Nlcy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5GaXJzdCBndWVzczo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TmV4dCBndWVzczo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImd1ZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Z3Vlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGd1ZXNzd29yZCA9IGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCkucmVwbGFjZSggL1xcVy9nICwgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVVcGRhdGVkR3Vlc3MoZ3Vlc3N3b3JkKTtcclxuICAgICAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dHdWVzc2VzVGFibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+e2dhbWVNb2RlID09PSAnaGFyZCcgP1xyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0clRhYmxlXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+R3Vlc3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Db3JyZWN0IExldHRlcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkNvcnJlY3QgUG9zaXRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge2d1ZXNzZXMubWFwKChnLGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgbW9kZTBndWVzcyR7aX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJBbGlnbkNlbnRlclwiPntjYWxjQ29ycmVjdExldHRlckNvdW50KGcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJBbGlnbkNlbnRlclwiPntjYWxjQ29ycmVjdFBvc2l0aW9uQ291bnQoZyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDpcclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidHJUYWJsZVwiPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7Z3Vlc3Nlcy5tYXAoKGcsaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2Btb2RlMWd1ZXNzJHtpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Zy5zcGxpdCgnJykubWFwKChsLGopID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2Btb2RlMWd1ZXNzJHtpfWxldHRlciR7an1gfSBjbGFzcz17Y2FsY01vZGUxY3NzKGcsail9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgfTwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwaWNrUmFuZG9tV29yZCgpIHtcclxuICAgICAgICBjb25zdCBuZXdsZW4gPSBzZWNyZXRXb3JkID8gc2VjcmV0V29yZC5sZW5ndGggPCAyID8gMiA6IHNlY3JldFdvcmQubGVuZ3RoID4gNyA/IDIgOiBzZWNyZXRXb3JkLmxlbmd0aCArIDEgOiAyO1xyXG4gICAgICAgIGlmIChuZXdsZW4gPT09IDIgJiYgc2V0R3Vlc3NDb3VudCAhPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNldFNldEd1ZXNzQ291bnQoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJhc2V1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvRU5BQkxFMks/cmFuZG9tPScgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20vRU5BQkxFMks/cmFuZG9tPSdcclxuICAgICAgICBjb25zdCB1cmwgPSBiYXNldXJsICsgbmV3bGVuLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9td29yZD1KU09OLnBhcnNlKHRleHQpLnRvVXBwZXJDYXNlKCk7IC8vIEl0IGlzIGp1c3QgYSB3b3JkIGluIGRvdWJsZSBxdW90ZXMgYnV0IGl0IGlzIGpzb24gbm9uZXRoZWxlc3NcclxuICAgICAgICAgICAgc2V0U2VjcmV0V29yZChyYW5kb213b3JkKTtcclxuICAgICAgICAgICAgc2V0U2VjcmV0RGlzcGxheShyYW5kb213b3JkLnNwbGl0KFwiXCIpLm1hcCgoKT0+KFwiKlwiKSkpO1xyXG4gICAgICAgICAgICBhZGRSb3VuZFRvSGlzdG9yeShyYW5kb213b3JkKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGNDb3JyZWN0TGV0dGVyQ291bnQoZ3Vlc3NsZXR0ZXJzKSB7XHJcbiAgICAgICAgbGV0IG4gPSAwXHJcbiAgICAgICAgY29uc3QgYWxwaGFiZXQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonXHJcbiAgICAgICAgZm9yKGxldCBsZXR0ZXIgb2YgYWxwaGFiZXQpIHtcclxuICAgICAgICAgICAgbGV0IHggPSBzZWNyZXRXb3JkLnNwbGl0KGxldHRlcikubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICBsZXQgeSA9IGd1ZXNzbGV0dGVycy5zcGxpdChsZXR0ZXIpLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgbiA9IG4gKyAoeCA8IHkgPyB4IDogeSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjQ29ycmVjdFBvc2l0aW9uQ291bnQoZ3Vlc3NsZXR0ZXJzKSB7XHJcbiAgICAgICAgbGV0IG4gPSAwXHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8c2VjcmV0V29yZC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBuID0gbiArIChzZWNyZXRXb3JkW2ldID09PSBndWVzc2xldHRlcnNbaV0gPyAxIDogMClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjTGV0dGVyUmVzdWx0KGd1ZXNzTGV0dGVycywgZ3Vlc3NMZXR0ZXJJbmRleCkge1xyXG4gICAgICAgIGxldCBsZXR0ZXIgPSBndWVzc0xldHRlcnNbZ3Vlc3NMZXR0ZXJJbmRleF07XHJcbiAgICAgICAgLy8gZyBpcyB0aGUgd2hvZSBndWVzcywgaiBpcyB0aGUgbGV0dGVyIGluZGV4IGZvciB3aGljaCB3ZSB3YW50IHRoZSBjc3Mgc3R5bGUgbmFtZVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IHNlY3JldFdvcmRbZ3Vlc3NMZXR0ZXJJbmRleF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiQ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VjcmV0V29yZC5pbmRleE9mKGxldHRlcikgPiAtMSkge1xyXG4gICAgICAgICAgICAvLyB0aGUgZ3Vlc3MgbGV0dGVyIGlzIGluIHRoZSBzZWNyZXQgd29yZCBhbmQgaXMgbm90IGluIHRoZSByaWdodCBzcG90XHJcbiAgICAgICAgICAgIC8vIGhhcyBpdCBhbHJlYWR5IGJlZW4gY291bnRlZCBlYXJsaWVyIHRob3VnaD9cclxuICAgICAgICAgICAgLy8gd2lsbCBpdCBiZSBjb3VudGVkIGxhdGVyIGFzIGNvcnJlY3QgbGV0dGVyIGNvcnJlY3Qgc3BvdD9cclxuICAgICAgICAgICAgbGV0IG5leHRqc3RhcnQgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlY3JldFdvcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZWNyZXRXb3JkW2ldID09PSBsZXR0ZXIgJiYgZ3Vlc3NMZXR0ZXJzW2ldICE9PSBsZXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgamZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqID0gbmV4dGpzdGFydDsgIWpmb3VuZCAmJiBqIDwgc2VjcmV0V29yZC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3Vlc3NMZXR0ZXJzW2pdID09PSBsZXR0ZXIgJiYgc2VjcmV0V29yZFtqXSAhPT0gbGV0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gZ3Vlc3NMZXR0ZXJJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIklcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0anN0YXJ0ID0gaiArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiV1wiO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2FsY01vZGUxY3NzKGd1ZXNzTGV0dGVycyxndWVzc0xldHRlckluZGV4KSB7XHJcbiAgICAgICAgbGV0IGxldHRlclJlc3VsdCA9IGNhbGNMZXR0ZXJSZXN1bHQoZ3Vlc3NMZXR0ZXJzLCBndWVzc0xldHRlckluZGV4KTtcclxuICAgICAgICBpZiAobGV0dGVyUmVzdWx0ID09PSAnQycpIHtyZXR1cm4gXCJ3bUVhc3lNb2RlTGV0dGVyIHdtQ29ycmVjdExldHRlckNvcnJlY3RQb3NpdGlvblwiO31cclxuICAgICAgICBpZiAobGV0dGVyUmVzdWx0ID09PSAnSScpIHtyZXR1cm4gXCJ3bUVhc3lNb2RlTGV0dGVyIHdtQ29ycmVjdExldHRlcldyb25nUG9zaXRpb25cIjt9XHJcbiAgICAgICAgcmV0dXJuIFwid21FYXN5TW9kZUxldHRlciB3bVdyb25nTGV0dGVyXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmRNYXN0ZXJtaW5kOyJdLCJzb3VyY2VSb290IjoiIn0=