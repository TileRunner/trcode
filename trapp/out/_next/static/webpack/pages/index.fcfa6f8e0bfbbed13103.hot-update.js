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
      lineNumber: 26,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      for: "mode0",
      children: "Easy"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
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
      lineNumber: 28,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      for: "mode1",
      children: "Hard"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
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
        lineNumber: 31,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
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
      lineNumber: 43,
      columnNumber: 16
    }, this);
  }

  function handleUpdatedGuess(guessword) {
    if (guessword.length === secretWord.length) {
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
        lineNumber: 80,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Guesses this word: ", guesses.length]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Guesses this set: ", setGuessCount]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }, undefined), setSolveCounts.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "No completed sets yet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Guesses for completed sets: ", setSolveCounts.map(num => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [num, " "]
        }, num.toString(), true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 76
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, undefined), gameMode === 'easy' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "wmEasyModeLetter wmCorrectLetterCorrectPosition",
            children: "C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 42
          }, undefined), "orrect position"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 39
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "wmEasyModeLetter wmCorrectLetterWrongPosition",
            children: "I"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 20
          }, undefined), "ncorrect position"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "wmEasyModeLetter wmWrongLetter",
            children: "W"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 20
          }, undefined), "rong letter"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 17
        }, undefined)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
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
        lineNumber: 96,
        columnNumber: 13
      }, undefined), secretWord === '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Loading ..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, undefined) : solved ? promptForPlayAgain : promptForGuess, solved ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }, undefined) : guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "AlignCenter",
        children: "Start guessing"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "AlignCenter",
        children: "Keep guessing"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }, undefined), guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "trParagraph",
      children: "No guesses yet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }, undefined) : displayGuesses]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 22
  }, undefined);

  const GuessInfo = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "Outertable",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "wmModeOptionForm",
      children: "Guess info:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
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
      lineNumber: 123,
      columnNumber: 13
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 23
  }, undefined);

  const BrowserLayout = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container-fluid",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: ShowModeOptions
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
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
            lineNumber: 133,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col",
            children: MainInfo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        children: GuessInfo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 126,
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
        lineNumber: 143,
        columnNumber: 13
      }, undefined), showInitialInfo && InitialInfo]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }, undefined), MainInfo]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 140,
    columnNumber: 26
  }, undefined);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trBackground",
    children: react_device_detect__WEBPACK_IMPORTED_MODULE_3__.isMobile ? MobileLayout : BrowserLayout
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 151,
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
        lineNumber: 158,
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
        lineNumber: 159,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 157,
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
      lineNumber: 176,
      columnNumber: 13
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "form-group trParagraph",
      children: [guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "First guess:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 21
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Next guess:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 189,
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
        lineNumber: 191,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 185,
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
              lineNumber: 207,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Correct Letter"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Correct Position"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: guesses.map((g, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: g
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "AlignCenter",
              children: calcCorrectLetterCount(g)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "AlignCenter",
              children: calcCorrectPositionCount(g)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 25
            }, this)]
          }, `mode0guess${i}`, true, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 21
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 204,
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
              lineNumber: 229,
              columnNumber: 29
            }, this))
          }, `mode1guess${i}`, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 21
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 203,
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

  function calcMode1css(guessLetters, guessLetterIndex) {
    let letter = guessLetters[guessLetterIndex]; // g is the whoe guess, j is the letter index for which we want the css style name

    if (letter === secretWord[guessLetterIndex]) {
      return "wmEasyModeLetter wmCorrectLetterCorrectPosition";
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
                return "wmEasyModeLetter wmCorrectLetterWrongPosition";
              }

              jfound = true;
              nextjstart = j + 1;
            }
          }
        }
      }
    }

    return "wmEasyModeLetter wmWrongLetter";
  }
};

_s(WordMastermind, "HmNau2gBBYej/LM1+7ubJxTU8E4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vbWFzdGVybWluZC5qcyJdLCJuYW1lcyI6WyJXb3JkTWFzdGVybWluZCIsInNldFdoZXJldG8iLCJrZXlib2FyZFZlcnNpb24iLCJzZXRLZXlib2FyZFZlcnNpb24iLCJ1c2VTdGF0ZSIsInNldFNvbHZlQ291bnRzIiwic2V0U2V0U29sdmVDb3VudHMiLCJzZXRHdWVzc0NvdW50Iiwic2V0U2V0R3Vlc3NDb3VudCIsInNlY3JldFdvcmQiLCJzZXRTZWNyZXRXb3JkIiwic2VjcmV0RGlzcGxheSIsInNldFNlY3JldERpc3BsYXkiLCJndWVzcyIsInNldEd1ZXNzIiwiZ3Vlc3NlcyIsInNldEd1ZXNzZXMiLCJzb2x2ZWQiLCJzZXRTb2x2ZWQiLCJnYW1lTW9kZSIsInNldEdhbWVNb2RlIiwic2hvd0luaXRpYWxJbmZvIiwic2V0U2hvd0luaXRpYWxJbmZvIiwiZGl2VW5kZXJLZXlib2FyZCIsInNob3dEaXZVbmRlcktleWJvYXJkIiwiZGlzcGxheUd1ZXNzZXMiLCJzaG93R3Vlc3Nlc1RhYmxlIiwicHJvbXB0Rm9yR3Vlc3MiLCJzaG93R3Vlc3NQcm9tcHQiLCJwcm9tcHRGb3JQbGF5QWdhaW4iLCJzaG93UGxheUFnYWluUHJvbXB0IiwiaGlkZWhpbnRzIiwic2V0SGlkZWhpbnRzIiwiaGFuZGxlTW9kZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlNob3dNb2RlT3B0aW9ucyIsImhhbmRsZUlucHV0TGV0dGVyIiwibGV0dGVyIiwiaGFuZGxlVXBkYXRlZEd1ZXNzIiwiaGFuZGxlRGVsZXRlTGV0dGVyIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiZ3Vlc3N3b3JkIiwibmV3U2V0R3Vlc3NDb3VudCIsImhpbnRzaGlkZGVuIiwiY2hlY2t3b3JkIiwiaW5kZXgiLCJoaWRld29yZCIsInJlbW92ZUVudHJ5IiwibmV3aGlkZWhpbnRzIiwicHVzaCIsIkluaXRpYWxJbmZvIiwibWFwIiwibnVtIiwidG9TdHJpbmciLCJNYWluSW5mbyIsInBpY2tSYW5kb21Xb3JkIiwiR3Vlc3NJbmZvIiwiZyIsImdpIiwiQnJvd3NlckxheW91dCIsIk1vYmlsZUxheW91dCIsImlzTW9iaWxlIiwidG9VcHBlckNhc2UiLCJyZXBsYWNlIiwiaSIsImNhbGNDb3JyZWN0TGV0dGVyQ291bnQiLCJjYWxjQ29ycmVjdFBvc2l0aW9uQ291bnQiLCJzcGxpdCIsImwiLCJqIiwiY2FsY01vZGUxY3NzIiwibmV3bGVuIiwiYmFzZXVybCIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsInRleHQiLCJyYW5kb213b3JkIiwiSlNPTiIsInBhcnNlIiwiZ3Vlc3NsZXR0ZXJzIiwibiIsImFscGhhYmV0IiwieCIsInkiLCJndWVzc0xldHRlcnMiLCJndWVzc0xldHRlckluZGV4IiwiaW5kZXhPZiIsIm5leHRqc3RhcnQiLCJqZm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLGNBQWMsR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFrQjtBQUFBOztBQUNyQyxRQUFNO0FBQUEsT0FBQ0MsZUFBRDtBQUFBLE9BQWtCQztBQUFsQixNQUF3Q0MsK0NBQVEsQ0FBQyxDQUFELENBQXREO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBc0NGLCtDQUFRLENBQUMsRUFBRCxDQUFwRCxDQUZxQyxDQUVxQjs7QUFDMUQsUUFBTTtBQUFBLE9BQUNHLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NKLCtDQUFRLENBQUMsQ0FBRCxDQUFsRCxDQUhxQyxDQUdrQjs7QUFDdkQsUUFBTTtBQUFBLE9BQUNLLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFDQSxRQUFNO0FBQUEsT0FBQ08sYUFBRDtBQUFBLE9BQWdCQztBQUFoQixNQUFvQ1IsK0NBQVEsQ0FBQyxFQUFELENBQWxEO0FBQ0EsUUFB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QUFJakYsVUFBVSxDQUFDa0YsT0FBWCxDQUFtQnBELE1BQW5CLElBQTZCLENBQUMsQ0FBbEMsRUFBcUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsVUFBSXFELFVBQVUsR0FBRyxDQUFqQjs7QUFDQSxXQUFLLElBQUl6QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHMUQsVUFBVSxDQUFDaUMsTUFBL0IsRUFBdUN5QixDQUFDLEVBQXhDLEVBQTRDO0FBQ3hDLFlBQUkxRCxVQUFVLENBQUMwRCxDQUFELENBQVYsS0FBa0I1QixNQUFsQixJQUE0QmtELFlBQVksQ0FBQ3RCLENBQUQsQ0FBWixLQUFvQjVCLE1BQXBELEVBQTREO0FBQ3hELGNBQUlzRCxNQUFNLEdBQUcsS0FBYjs7QUFDQSxlQUFJLElBQUlyQixDQUFDLEdBQUdvQixVQUFaLEVBQXdCLENBQUNDLE1BQUQsSUFBV3JCLENBQUMsR0FBRy9ELFVBQVUsQ0FBQ2lDLE1BQWxELEVBQTBEOEIsQ0FBQyxFQUEzRCxFQUErRDtBQUMzRCxnQkFBSWlCLFlBQVksQ0FBQ2pCLENBQUQsQ0FBWixLQUFvQmpDLE1BQXBCLElBQThCOUIsVUFBVSxDQUFDK0QsQ0FBRCxDQUFWLEtBQWtCakMsTUFBcEQsRUFBNEQ7QUFDeEQsa0JBQUlpQyxDQUFDLEtBQUtrQixnQkFBVixFQUE0QjtBQUN4Qix1QkFBTywrQ0FBUDtBQUNIOztBQUNERyxvQkFBTSxHQUFHLElBQVQ7QUFDQUQsd0JBQVUsR0FBR3BCLENBQUMsR0FBRyxDQUFqQjtBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBQ0o7O0FBQ0QsV0FBTyxnQ0FBUDtBQUNIO0FBQ0osQ0F4U0Q7O0dBQU14RSxjOztLQUFBQSxjO0FBMFNOLCtEQUFlQSxjQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZjZmE2ZjhlMGJmYmJlZDEzMTAzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaG93aW5mbyBmcm9tICcuLi93aS9zaG93aW5mbydcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0J1xyXG5pbXBvcnQgU2hvd0N1c3RvbUtleWJvYXJkIGZyb20gJy4uL3Nob3dDdXN0b21LZXlib2FyZCc7XHJcblxyXG5jb25zdCBXb3JkTWFzdGVybWluZCA9ICh7c2V0V2hlcmV0b30pID0+IHtcclxuICAgIGNvbnN0IFtrZXlib2FyZFZlcnNpb24sIHNldEtleWJvYXJkVmVyc2lvbl0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtzZXRTb2x2ZUNvdW50cywgc2V0U2V0U29sdmVDb3VudHNdID0gdXNlU3RhdGUoW10pOyAvLyBob3cgbWFueSBndWVzc2VzIHRvIHNvbHZlIGVhY2ggc2V0XHJcbiAgICBjb25zdCBbc2V0R3Vlc3NDb3VudCwgc2V0U2V0R3Vlc3NDb3VudF0gPSB1c2VTdGF0ZSgwKTsgLy8gdG90YWwgZ3Vlc3MgY291bnQgZm9yIHRoZSAyLTggbGV0dGVyIHNldFxyXG4gICAgY29uc3QgW3NlY3JldFdvcmQsIHNldFNlY3JldFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlY3JldERpc3BsYXksIHNldFNlY3JldERpc3BsYXldID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2d1ZXNzLCBzZXRHdWVzc10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZ3Vlc3Nlcywgc2V0R3Vlc3Nlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc29sdmVkLCBzZXRTb2x2ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2dhbWVNb2RlLCBzZXRHYW1lTW9kZV0gPSB1c2VTdGF0ZSgnZWFzeScpO1xyXG4gICAgY29uc3QgW3Nob3dJbml0aWFsSW5mbywgc2V0U2hvd0luaXRpYWxJbmZvXSA9IHVzZVN0YXRlKHRydWUpOyAvLyBzZXQgaW5mbywgZWFzeSBtb2RlIGluZm9cclxuICAgIGNvbnN0IGRpdlVuZGVyS2V5Ym9hcmQgPSBzaG93RGl2VW5kZXJLZXlib2FyZCgpO1xyXG4gICAgY29uc3QgZGlzcGxheUd1ZXNzZXMgPSBzaG93R3Vlc3Nlc1RhYmxlKCk7XHJcbiAgICBjb25zdCBwcm9tcHRGb3JHdWVzcyA9IHNob3dHdWVzc1Byb21wdCgpO1xyXG4gICAgY29uc3QgcHJvbXB0Rm9yUGxheUFnYWluID0gc2hvd1BsYXlBZ2FpblByb21wdCgpO1xyXG4gICAgY29uc3QgW2hpZGVoaW50cywgc2V0SGlkZWhpbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IGhhbmRsZU1vZGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldEdhbWVNb2RlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IFNob3dNb2RlT3B0aW9ucyA9IDxmb3JtIGNsYXNzTmFtZT1cIndtTW9kZU9wdGlvbkZvcm1cIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJlYXN5XCIgY2hlY2tlZD17Z2FtZU1vZGUgPT09ICdlYXN5J30gaWQ9XCJtb2RlMFwiIG9uQ2hhbmdlPXsoZSkgPT4ge2hhbmRsZU1vZGVDaGFuZ2UoZSk7fX0gbmFtZT1cIm1vZGVcIi8+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cIm1vZGUwXCI+RWFzeTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiaGFyZFwiIGNoZWNrZWQ9e2dhbWVNb2RlID09PSAnaGFyZCd9IGlkPVwibW9kZTFcIiBvbkNoYW5nZT17KGUpID0+IHtoYW5kbGVNb2RlQ2hhbmdlKGUpO319IG5hbWU9XCJtb2RlXCIvPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJtb2RlMVwiPkhhcmQ8L2xhYmVsPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7IHNldFdoZXJldG8oJ21lbnUnKTsgfSB9PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+O1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlSW5wdXRMZXR0ZXIobGV0dGVyKSB7XHJcbiAgICAgICAgaGFuZGxlVXBkYXRlZEd1ZXNzKGd1ZXNzICsgbGV0dGVyKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZURlbGV0ZUxldHRlcigpIHtcclxuICAgICAgICBpZiAoZ3Vlc3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzZXRHdWVzcyhndWVzcy5zdWJzdHJpbmcoMCxndWVzcy5sZW5ndGgtMSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNob3dEaXZVbmRlcktleWJvYXJkKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIndtV29yZFVuZGVyS2V5Ym9hcmRcIj4mbmJzcDt7Z3Vlc3N9Jm5ic3A7PC9kaXY+O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVXBkYXRlZEd1ZXNzKGd1ZXNzd29yZCkge1xyXG4gICAgICAgIGlmIChndWVzc3dvcmQubGVuZ3RoID09PSBzZWNyZXRXb3JkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdTZXRHdWVzc0NvdW50ID0gc2V0R3Vlc3NDb3VudCArIDE7XHJcbiAgICAgICAgICAgIHNldFNldEd1ZXNzQ291bnQobmV3U2V0R3Vlc3NDb3VudCk7XHJcbiAgICAgICAgICAgIHNldEd1ZXNzZXMoW2d1ZXNzd29yZCwgLi4uZ3Vlc3Nlc10pO1xyXG4gICAgICAgICAgICBzZXRHdWVzcygnJyk7XHJcbiAgICAgICAgICAgIGlmIChndWVzc3dvcmQgPT09IHNlY3JldFdvcmQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNldFNvbHZlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWNyZXRXb3JkLmxlbmd0aCA9PT0gOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNldFNvbHZlQ291bnRzKFsuLi5zZXRTb2x2ZUNvdW50cywgbmV3U2V0R3Vlc3NDb3VudF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0R3Vlc3MoZ3Vlc3N3b3JkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoaW50c2hpZGRlbihjaGVja3dvcmQpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaGlkZWhpbnRzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBoaWRld29yZCA9IGhpZGVoaW50c1tpbmRleF07XHJcbiAgICAgICAgICAgIGlmIChoaWRld29yZCA9PT0gY2hlY2t3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVFbnRyeShpbmRleCkge1xyXG4gICAgICAgIGlmICghaGludHNoaWRkZW4oZ3Vlc3Nlc1tpbmRleF0pKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdoaWRlaGludHMgPSBbLi4uaGlkZWhpbnRzXTtcclxuICAgICAgICAgICAgbmV3aGlkZWhpbnRzLnB1c2goZ3Vlc3Nlc1tpbmRleF0pO1xyXG4gICAgICAgICAgICBzZXRIaWRlaGludHMobmV3aGlkZWhpbnRzKTsgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IEluaXRpYWxJbmZvID0gPGRpdiBjbGFzc05hbWU9XCJPdXRlcnRhYmxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaCBBbGlnbkxlZnRcIj5cclxuICAgICAgICAgICAgPHA+Mi04IGxldHRlciB3b3JkcyBwZXIgc2V0LjwvcD5cclxuICAgICAgICAgICAgPHA+R3Vlc3NlcyB0aGlzIHdvcmQ6IHtndWVzc2VzLmxlbmd0aH08L3A+XHJcbiAgICAgICAgICAgIDxwPkd1ZXNzZXMgdGhpcyBzZXQ6IHtzZXRHdWVzc0NvdW50fTwvcD5cclxuICAgICAgICAgICAge3NldFNvbHZlQ291bnRzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICA8cD5ObyBjb21wbGV0ZWQgc2V0cyB5ZXQ8L3A+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8cD5HdWVzc2VzIGZvciBjb21wbGV0ZWQgc2V0czoge3NldFNvbHZlQ291bnRzLm1hcChudW0gPT4gKDxzcGFuIGtleT17bnVtLnRvU3RyaW5nKCl9PntudW19IDwvc3Bhbj4pKX08L3A+fVxyXG4gICAgICAgICAgICB7Z2FtZU1vZGUgPT09ICdlYXN5JyAmJiA8PjxwPjxzcGFuIGNsYXNzTmFtZT1cIndtRWFzeU1vZGVMZXR0ZXIgd21Db3JyZWN0TGV0dGVyQ29ycmVjdFBvc2l0aW9uXCI+Qzwvc3Bhbj5vcnJlY3QgcG9zaXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ3bUVhc3lNb2RlTGV0dGVyIHdtQ29ycmVjdExldHRlcldyb25nUG9zaXRpb25cIj5JPC9zcGFuPm5jb3JyZWN0IHBvc2l0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwid21FYXN5TW9kZUxldHRlciB3bVdyb25nTGV0dGVyXCI+Vzwvc3Bhbj5yb25nIGxldHRlcjwvcD5cclxuICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgTWFpbkluZm8gPSA8ZGl2IGNsYXNzTmFtZT1cIk91dGVydGFibGVcIj5cclxuICAgICAgICB7c2VjcmV0V29yZCA9PT0gJycgPyBwaWNrUmFuZG9tV29yZCgpIDogJyd9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICA8aDM+U2VjcmV0IFdvcmQ6IHtzb2x2ZWQgPyBzZWNyZXRXb3JkIDogc2VjcmV0RGlzcGxheX08L2gzPlxyXG4gICAgICAgICAgICB7c2VjcmV0V29yZCA9PT0gJycgP1xyXG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmcgLi4uPC9oMT5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIHNvbHZlZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbXB0Rm9yUGxheUFnYWluXHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIHByb21wdEZvckd1ZXNzfVxyXG4gICAgICAgICAgICB7c29sdmVkID9cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgZ3Vlc3Nlcy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCI+U3RhcnQgZ3Vlc3Npbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCI+S2VlcCBndWVzc2luZzwvcD59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2d1ZXNzZXMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5ObyBndWVzc2VzIHlldDwvcD5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICBkaXNwbGF5R3Vlc3Nlc31cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IEd1ZXNzSW5mbyA9IDxkaXYgY2xhc3NOYW1lPVwiT3V0ZXJ0YWJsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid21Nb2RlT3B0aW9uRm9ybVwiPlxyXG4gICAgICAgICAgICBHdWVzcyBpbmZvOlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtndWVzc2VzLm1hcCgoZywgZ2kpID0+IChcclxuICAgICAgICAgICAgIWhpbnRzaGlkZGVuKGcpICYmXHJcbiAgICAgICAgICAgIDxTaG93aW5mbyBrZXk9e2Ake2d1ZXNzZXMubGVuZ3RoIC0gZ2l9LiR7Z31gfSB3b3JkPXtnfSBzaG93SW5zZXJ0cz1cIk5cIiBzaG93U3dhcHM9XCJZXCIgc2hvd0FuYWdyYW1zPVwiWVwiIHNob3dEcm9wcz1cIk5cIiByZW1vdmVFbnRyeT17cmVtb3ZlRW50cnl9IGVudHJ5SW5kZXg9e2dpfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgQnJvd3NlckxheW91dCA9IDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAge1Nob3dNb2RlT3B0aW9uc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+e0luaXRpYWxJbmZvfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+e01haW5JbmZvfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPntHdWVzc0luZm99PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbiAgICBjb25zdCBNb2JpbGVMYXlvdXQgPSA8ZGl2PlxyXG4gICAgICAgIHtTaG93TW9kZU9wdGlvbnN9XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHsgc2V0U2hvd0luaXRpYWxJbmZvKCFzaG93SW5pdGlhbEluZm8pOyB9IH0+XHJcbiAgICAgICAgICAgICAgICB7c2hvd0luaXRpYWxJbmZvID8gXCJIaWRlXCIgOiBcIlNob3dcIn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIHtzaG93SW5pdGlhbEluZm8gJiYgSW5pdGlhbEluZm99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge01haW5JbmZvfVxyXG4gICAgPC9kaXY+O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICB7IGlzTW9iaWxlID8gTW9iaWxlTGF5b3V0IDogQnJvd3NlckxheW91dCB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dQbGF5QWdhaW5Qcm9tcHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRtQ29uZ3JhdHNcIj7wn5GP8J+PvSBTb2x2ZWQgaW4ge2d1ZXNzZXMubGVuZ3RofSBtb3ZlcyEg8J+Rj/Cfj708L2g0PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcGlja1JhbmRvbVdvcmQoKTtcclxuICAgICAgICAgICAgICAgIHNldEd1ZXNzKCcnKTtcclxuICAgICAgICAgICAgICAgIHNldEd1ZXNzZXMoW10pO1xyXG4gICAgICAgICAgICAgICAgc2V0SGlkZWhpbnRzKFtdKTtcclxuICAgICAgICAgICAgICAgIHNldFNvbHZlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c2VjcmV0V29yZC5sZW5ndGggPT09IDggPyBcIlN0YXJ0IEFub3RoZXIgU2V0IVwiIDogXCJTdGFydCBOZXh0IFdvcmRcIn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93R3Vlc3NQcm9tcHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICBpc01vYmlsZSA/XHJcbiAgICAgICAgICAgIDxTaG93Q3VzdG9tS2V5Ym9hcmRcclxuICAgICAgICAgICAgICAgIGtleWJvYXJkVmVyc2lvbj17a2V5Ym9hcmRWZXJzaW9ufVxyXG4gICAgICAgICAgICAgICAgc2V0S2V5Ym9hcmRWZXJzaW9uPXtzZXRLZXlib2FyZFZlcnNpb259XHJcbiAgICAgICAgICAgICAgICBpbnB1dFdvcmQ9e2d1ZXNzfVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRMZXR0ZXI9e2hhbmRsZUlucHV0TGV0dGVyfVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlTGV0dGVyPXtoYW5kbGVEZWxldGVMZXR0ZXJ9XHJcbiAgICAgICAgICAgICAgICBkaXZVbmRlcktleWJvYXJkPXtkaXZVbmRlcktleWJvYXJkfVxyXG4gICAgICAgICAgICA+PC9TaG93Q3VzdG9tS2V5Ym9hcmQ+ICAgICAgICBcclxuICAgICAgICA6XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCB0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICAgICAge2d1ZXNzZXMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Rmlyc3QgZ3Vlc3M6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5leHQgZ3Vlc3M6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJndWVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2d1ZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBndWVzc3dvcmQgPSBlLnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoIC9cXFcvZyAsICcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVXBkYXRlZEd1ZXNzKGd1ZXNzd29yZCk7XHJcbiAgICAgICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93R3Vlc3Nlc1RhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PntnYW1lTW9kZSA9PT0gJ2hhcmQnID9cclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidHJUYWJsZVwiPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkd1ZXNzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+Q29ycmVjdCBMZXR0ZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Db3JyZWN0IFBvc2l0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHtndWVzc2VzLm1hcCgoZyxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YG1vZGUwZ3Vlc3Mke2l9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Z308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiQWxpZ25DZW50ZXJcIj57Y2FsY0NvcnJlY3RMZXR0ZXJDb3VudChnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiQWxpZ25DZW50ZXJcIj57Y2FsY0NvcnJlY3RQb3NpdGlvbkNvdW50KGcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA6XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRyVGFibGVcIj5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge2d1ZXNzZXMubWFwKChnLGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgbW9kZTFndWVzcyR7aX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2cuc3BsaXQoJycpLm1hcCgobCxqKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtgbW9kZTFndWVzcyR7aX1sZXR0ZXIke2p9YH0gY2xhc3M9e2NhbGNNb2RlMWNzcyhnLGopfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIH08L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGlja1JhbmRvbVdvcmQoKSB7XHJcbiAgICAgICAgY29uc3QgbmV3bGVuID0gc2VjcmV0V29yZCA/IHNlY3JldFdvcmQubGVuZ3RoIDwgMiA/IDIgOiBzZWNyZXRXb3JkLmxlbmd0aCA+IDcgPyAyIDogc2VjcmV0V29yZC5sZW5ndGggKyAxIDogMjtcclxuICAgICAgICBpZiAobmV3bGVuID09PSAyICYmIHNldEd1ZXNzQ291bnQgIT09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXRTZXRHdWVzc0NvdW50KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBiYXNldXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VOQUJMRTJLP3JhbmRvbT0nIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tL0VOQUJMRTJLP3JhbmRvbT0nXHJcbiAgICAgICAgY29uc3QgdXJsID0gYmFzZXVybCArIG5ld2xlbi50b1N0cmluZygpO1xyXG4gICAgICAgIGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgICAgICAgbGV0IHJhbmRvbXdvcmQ9SlNPTi5wYXJzZSh0ZXh0KS50b1VwcGVyQ2FzZSgpOyAvLyBJdCBpcyBqdXN0IGEgd29yZCBpbiBkb3VibGUgcXVvdGVzIGJ1dCBpdCBpcyBqc29uIG5vbmV0aGVsZXNzXHJcbiAgICAgICAgICAgIHNldFNlY3JldFdvcmQocmFuZG9td29yZCk7XHJcbiAgICAgICAgICAgIHNldFNlY3JldERpc3BsYXkocmFuZG9td29yZC5zcGxpdChcIlwiKS5tYXAoKCk9PihcIipcIikpKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGNDb3JyZWN0TGV0dGVyQ291bnQoZ3Vlc3NsZXR0ZXJzKSB7XHJcbiAgICAgICAgbGV0IG4gPSAwXHJcbiAgICAgICAgY29uc3QgYWxwaGFiZXQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonXHJcbiAgICAgICAgZm9yKGxldCBsZXR0ZXIgb2YgYWxwaGFiZXQpIHtcclxuICAgICAgICAgICAgbGV0IHggPSBzZWNyZXRXb3JkLnNwbGl0KGxldHRlcikubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICBsZXQgeSA9IGd1ZXNzbGV0dGVycy5zcGxpdChsZXR0ZXIpLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgbiA9IG4gKyAoeCA8IHkgPyB4IDogeSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjQ29ycmVjdFBvc2l0aW9uQ291bnQoZ3Vlc3NsZXR0ZXJzKSB7XHJcbiAgICAgICAgbGV0IG4gPSAwXHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8c2VjcmV0V29yZC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBuID0gbiArIChzZWNyZXRXb3JkW2ldID09PSBndWVzc2xldHRlcnNbaV0gPyAxIDogMClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjTW9kZTFjc3MoZ3Vlc3NMZXR0ZXJzLGd1ZXNzTGV0dGVySW5kZXgpIHtcclxuICAgICAgICBsZXQgbGV0dGVyID0gZ3Vlc3NMZXR0ZXJzW2d1ZXNzTGV0dGVySW5kZXhdO1xyXG4gICAgICAgIC8vIGcgaXMgdGhlIHdob2UgZ3Vlc3MsIGogaXMgdGhlIGxldHRlciBpbmRleCBmb3Igd2hpY2ggd2Ugd2FudCB0aGUgY3NzIHN0eWxlIG5hbWVcclxuICAgICAgICBpZiAobGV0dGVyID09PSBzZWNyZXRXb3JkW2d1ZXNzTGV0dGVySW5kZXhdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIndtRWFzeU1vZGVMZXR0ZXIgd21Db3JyZWN0TGV0dGVyQ29ycmVjdFBvc2l0aW9uXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWNyZXRXb3JkLmluZGV4T2YobGV0dGVyKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIC8vIHRoZSBndWVzcyBsZXR0ZXIgaXMgaW4gdGhlIHNlY3JldCB3b3JkIGFuZCBpcyBub3QgaW4gdGhlIHJpZ2h0IHNwb3RcclxuICAgICAgICAgICAgLy8gaGFzIGl0IGFscmVhZHkgYmVlbiBjb3VudGVkIGVhcmxpZXIgdGhvdWdoP1xyXG4gICAgICAgICAgICAvLyB3aWxsIGl0IGJlIGNvdW50ZWQgbGF0ZXIgYXMgY29ycmVjdCBsZXR0ZXIgY29ycmVjdCBzcG90P1xyXG4gICAgICAgICAgICBsZXQgbmV4dGpzdGFydCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VjcmV0V29yZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlY3JldFdvcmRbaV0gPT09IGxldHRlciAmJiBndWVzc0xldHRlcnNbaV0gIT09IGxldHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBqZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSBuZXh0anN0YXJ0OyAhamZvdW5kICYmIGogPCBzZWNyZXRXb3JkLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChndWVzc0xldHRlcnNbal0gPT09IGxldHRlciAmJiBzZWNyZXRXb3JkW2pdICE9PSBsZXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID09PSBndWVzc0xldHRlckluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwid21FYXN5TW9kZUxldHRlciB3bUNvcnJlY3RMZXR0ZXJXcm9uZ1Bvc2l0aW9uXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dGpzdGFydCA9IGogKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIndtRWFzeU1vZGVMZXR0ZXIgd21Xcm9uZ0xldHRlclwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JkTWFzdGVybWluZDsiXSwic291cmNlUm9vdCI6IiJ9