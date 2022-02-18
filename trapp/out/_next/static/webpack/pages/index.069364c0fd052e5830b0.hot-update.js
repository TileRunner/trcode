self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/tm/tm.js":
/*!************************!*\
  !*** ./pages/tm/tm.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var _lib_wordfunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/wordfunctions */ "./lib/wordfunctions.js");
/* harmony import */ var _wi_showinfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wi/showinfo */ "./pages/wi/showinfo.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\tm\\tm.js",
    _s = $RefreshSig$();






const Transmogrify = ({
  setWhereto
}) => {
  _s();

  const {
    0: keyboardVersion,
    1: setKeyboardVersion
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('ckv1');
  const {
    0: numMoves,
    1: setNumMoves
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2);
  const baseurl =  true ? 'http://localhost:5000' : 0;
  const numMovesArray = [2, 3, 4, 5, 6, 7, 8, 9];
  const {
    0: puzzle,
    1: setPuzzle
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const {
    0: nextWord,
    1: setNextWord
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: downWords,
    1: setDownWords
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Users words going down from the start word

  const {
    0: upWords,
    1: setUpWords
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Users words going up from the target word

  const {
    0: solved,
    1: setSolved
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: solving,
    1: setSolving
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const callForPuzzle = async () => {
    let data = {};
    let newSolving = false;

    try {
      let url = `${baseurl}/ENABLE2K?transmogrify=true&numMoves=${numMoves}`;
      const response = await fetch(url);
      data = await response.json();
      newSolving = true;
    } catch (error) {
      data.notes = ["Problem with the server. Sorry about that."];
      console.log(error);
    }

    setPuzzle(data);
    setDownWords([]);
    setUpWords([]);
    setNextWord('');
    setSolved(false);
    setSolving(newSolving);
  };

  const quitThisPuzzle = () => {
    setSolving(false);
  };

  const handleInputLetter = letter => {
    let sofar = nextWord + letter;
    setNextWord(sofar);
  };

  const handleDeleteLetter = () => {
    if (nextWord.length > 0) {
      let sofar = Array.from(nextWord);
      sofar.pop();
      let newsofar = sofar.join('');
      setNextWord(newsofar);
    }
  };

  const acceptNextWord = async e => {
    e.preventDefault();

    if (nextWord.length === 0) {
      return;
    } // Is the word valid in the down direction?


    let prevWord = downWords.length === 0 ? puzzle.startWord : downWords[downWords.length - 1];
    let newWord = nextWord;

    if (validMove(prevWord, newWord)) {
      if (!(await (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_3__.isWordValid)(newWord))) {
        alert(`${newWord} is not a valid word`);
      } else {
        let wordBelowNewWord = upWords.length === 0 ? puzzle.targetWord : upWords[0];
        let newDownWords = [...downWords];
        newDownWords.push(newWord);
        setDownWords(newDownWords);
        setNextWord('');

        if (validMove(newWord, wordBelowNewWord)) {
          setSolved(true);
        }
      }
    } else {
      // Is the word valid in the up direction?
      prevWord = upWords.length === 0 ? puzzle.targetWord : upWords[0];

      if (validMove(prevWord, newWord)) {
        if (!(await (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_3__.isWordValid)(newWord))) {
          alert(`${newWord} is not a valid word`);
        } else {
          let wordAboveNewWord = downWords.length === 0 ? puzzle.startWord : downWords[downWords.length - 1];
          let newUpWords = [newWord, ...upWords];
          setUpWords(newUpWords);
          setNextWord('');

          if (validMove(newWord, wordAboveNewWord)) {
            setSolved(true);
          }
        }
      } else {
        alert('Only anagrams, drops, swaps and inserts allowed.');
      }
    }
  };

  const removeDownWords = wi => {
    if (wi < downWords.length) {
      let newWords = [...downWords];
      newWords.splice(wi);
      setDownWords(newWords);
    }
  };

  const removeUpWords = wi => {
    if (wi < upWords.length) {
      let newUpWords = [...upWords];
      newUpWords.splice(0, wi + 1);
      setUpWords(newUpWords);
    }
  };

  const validMove = (prevWord = "", newWord = "") => {
    prevWord = prevWord.trim().toLowerCase();
    newWord = newWord.trim().toLowerCase();

    if (prevWord === newWord) {
      return false;
    }

    return (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_3__.areAnagrams)(prevWord, newWord) || (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_3__.countSwaps)(prevWord, newWord) === 1 || (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_3__.isDrop)(prevWord, newWord) || (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_3__.isDrop)(newWord, prevWord);
  };

  const GameStartSection = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "tm_numMovesDiv",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "Number Of Moves"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }, undefined), numMovesArray.map(n => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: `tm_${n === numMoves ? 'numMovesSelected' : 'numMovesUnselected'}`,
      onClick: () => {
        setNumMoves(n);
      },
      children: n
    }, `chooseNumMoves${n}`, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "tm_startPuzzleDiv",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          callForPuzzle();
        },
        children: "Start Puzzle"
      }, "startPuzzle", false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 30
  }, undefined);

  const PuzzleSection = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "tm_puzzleDiv",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: puzzle.startWord
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "to"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: puzzle.targetWord
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "Target:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: puzzle.numMoves
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "moves"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 133,
    columnNumber: 27
  }, undefined);

  const SubmitWordDiv = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "tm_KeyGoDiv",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: acceptNextWord,
      className: `tm_KeyGo ${nextWord.length > 0 ? "" : "disabled"}`,
      children: "SUBMIT WORD"
    }, "keyGo", false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 142,
    columnNumber: 27
  }, undefined);

  const ShowKeyboard = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: keyboardVersion === 'ckv1' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "customKeyboardV1",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "switchkb",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: () => {
            setKeyboardVersion('ckv2');
          },
          children: "switch keyboard"
        }, "switchbkv1", false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ckv1Row1",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('Q');
          },
          className: "ckv1 Q"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('W');
          },
          className: "ckv1 W"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('E');
          },
          className: "ckv1 E"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('R');
          },
          className: "ckv1 R"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('T');
          },
          className: "ckv1 T"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('Y');
          },
          className: "ckv1 Y"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('U');
          },
          className: "ckv1 U"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('I');
          },
          className: "ckv1 I"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('O');
          },
          className: "ckv1 O"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('P');
          },
          className: "ckv1 P"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ckv1Row2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('A');
          },
          className: "ckv1 A"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('S');
          },
          className: "ckv1 S"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('D');
          },
          className: "ckv1 D"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('F');
          },
          className: "ckv1 F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('G');
          },
          className: "ckv1 G"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('H');
          },
          className: "ckv1 H"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('J');
          },
          className: "ckv1 J"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('K');
          },
          className: "ckv1 K"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('L');
          },
          className: "ckv1 L"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ckv1Row3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('Z');
          },
          className: "ckv1 Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('X');
          },
          className: "ckv1 X"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('C');
          },
          className: "ckv1 C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('V');
          },
          className: "ckv1 V"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('B');
          },
          className: "ckv1 B"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('N');
          },
          className: "ckv1 N"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('M');
          },
          className: "ckv1 M"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            nextWord.length > 0 && handleDeleteLetter();
          },
          class: "ckv1 Backspace"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 17
      }, undefined), SubmitWordDiv]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }, undefined) : keyboardVersion === 'ckv2' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "customKeyboardV2 ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "switchkb",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: () => {
            setKeyboardVersion('ckv3');
          },
          children: "switch keyboard"
        }, "switchbkv2", false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ckv2Row1",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('Q');
          },
          children: "Q"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('W');
          },
          children: "W"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('E');
          },
          children: "E"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('R');
          },
          children: "R"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('T');
          },
          children: "T"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('Y');
          },
          children: "Y"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('U');
          },
          children: "U"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('I');
          },
          children: "I"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('O');
          },
          children: "O"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('P');
          },
          children: "P"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ckv2Row2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('A');
          },
          children: "A"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('S');
          },
          children: "S"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('D');
          },
          children: "D"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('F');
          },
          children: "F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('G');
          },
          children: "G"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('H');
          },
          children: "H"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('J');
          },
          children: "J"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('K');
          },
          children: "K"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('L');
          },
          children: "L"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ckv2Row3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('Z');
          },
          children: "Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('X');
          },
          children: "X"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('C');
          },
          children: "C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('V');
          },
          children: "V"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('B');
          },
          children: "B"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('N');
          },
          children: "N"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('M');
          },
          children: "M"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            nextWord.length > 0 && handleDeleteLetter();
          },
          class: "tm_Backspace"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 17
      }, undefined), SubmitWordDiv]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "customKeyboardV3",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "switchkb",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: () => {
            setKeyboardVersion('ckv1');
          },
          children: "switch keyboard"
        }, "switchbkv3", false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ckv3Row1",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('Q');
          },
          className: "ckv3 Q"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('W');
          },
          className: "ckv3 W"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('E');
          },
          className: "ckv3 E"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('R');
          },
          className: "ckv3 R"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('T');
          },
          className: "ckv3 T"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('Y');
          },
          className: "ckv3 Y"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('U');
          },
          className: "ckv3 U"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('I');
          },
          className: "ckv3 I"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('O');
          },
          className: "ckv3 O"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('P');
          },
          className: "ckv3 P"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ckv3Row2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('A');
          },
          className: "ckv3 A"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('S');
          },
          className: "ckv3 S"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('D');
          },
          className: "ckv3 D"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('F');
          },
          className: "ckv3 F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('G');
          },
          className: "ckv3 G"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('H');
          },
          className: "ckv3 H"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('J');
          },
          className: "ckv3 J"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('K');
          },
          className: "ckv3 K"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('L');
          },
          className: "ckv3 L"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ckv3Row3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('Z');
          },
          className: "ckv3 Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('X');
          },
          className: "ckv3 X"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('C');
          },
          className: "ckv3 C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('V');
          },
          className: "ckv3 V"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('B');
          },
          className: "ckv3 B"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('N');
          },
          className: "ckv3 N"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('M');
          },
          className: "ckv3 M"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            nextWord.length > 0 && handleDeleteLetter();
          },
          class: "ckv3 Backspace"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 17
      }, undefined), SubmitWordDiv]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 147,
    columnNumber: 26
  }, undefined);

  const SolutionSection = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "tm_solutionOuterDiv",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "tm_solutionDiv",
      children: puzzle && puzzle.startWord && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: puzzle.startWord
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 274,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 21
          }, undefined), downWords.map((w, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "tm_arrow",
                children: "\u21A7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 276,
                columnNumber: 58
              }, undefined), w]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 276,
              columnNumber: 54
            }, undefined)
          }, `userDownWord${i}`, false, {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 25
          }, undefined)), !solved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "tm_nextword",
                children: ["\xA0", nextWord, "\xA0"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 278,
                columnNumber: 41
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 278,
              columnNumber: 37
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 33
          }, undefined), upWords.map((w, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: [w, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "tm_arrow",
                children: "\u21A5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 280,
                columnNumber: 59
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 280,
              columnNumber: 52
            }, undefined)
          }, `userUpWord${i}`, false, {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 25
          }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: puzzle.targetWord
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 282,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 44
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 9
    }, undefined), solved ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "tm_congrats",
      children: ["\uD83D\uDC4F\uD83C\uDFFD Solved in ", downWords.length + upWords.length + 1, " moves \uD83D\uDC4F\uD83C\uDFFD"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 13
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [ShowKeyboard, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "tm_lastbuttons",
        children: [downWords.length + upWords.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: () => {
            setDownWords([]);
            setUpWords([]);
            setNextWord('');
          },
          "data-toggle": "tooltip",
          title: "Remove all enter words",
          children: "RESET"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: () => {
            alert('Valid next word options:\nSwap one letter, e.g. CAT to COT\nDrop one letter, e.g. SWIG to WIG\nInsert one letter, e.g. MAT to MATH, or HIP to WHIP\nAnagram, e.g. ACT to CAT');
          },
          "data-toggle": "tooltip",
          title: "Show instructions",
          children: "HELP"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "tm_quit",
          onClick: () => {
            quitThisPuzzle();
          },
          "data-toggle": "tooltip",
          title: "Quit this puzzle. You can start another.",
          children: "QUIT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 270,
    columnNumber: 29
  }, undefined);

  const ExplainHints = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
    className: "trParagraph",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "insertCount",
        children: "\xA01\xA0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 13
      }, undefined), "Shows insert counts/letters"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "swapCount",
        children: "\xA02\xA0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 13
      }, undefined), "Shows swaps counts/letters"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "anagramCount",
        children: "3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 13
      }, undefined), "Shows anagram counts/words"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: "Click to toggle between count and info"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: "The black dot represents a drop"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: ["Click the ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "closemebutton"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 23
      }, undefined), " to remove"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 312,
    columnNumber: 26
  }, undefined);

  const HintSection = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wi_showinfo__WEBPACK_IMPORTED_MODULE_4__.default, {
      word: puzzle.startWord,
      showInserts: "Y",
      showSwaps: "Y",
      showAnagrams: "Y",
      showDrops: "Y",
      removeEntry: () => {},
      entryIndex: -1
    }, `hintstartword${puzzle.startWord}`, false, {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 9
    }, undefined), downWords.map((g, gi) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wi_showinfo__WEBPACK_IMPORTED_MODULE_4__.default, {
      word: g,
      showInserts: "Y",
      showSwaps: "Y",
      showAnagrams: "Y",
      showDrops: "Y",
      removeEntry: () => {
        removeDownWords(gi);
      },
      entryIndex: gi + 1
    }, `hintdownword${g}`, false, {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 13
    }, undefined)), upWords.map((g, gi) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wi_showinfo__WEBPACK_IMPORTED_MODULE_4__.default, {
      word: g,
      showInserts: "Y",
      showSwaps: "Y",
      showAnagrams: "Y",
      showDrops: "Y",
      removeEntry: () => {
        removeUpWords(gi);
      },
      entryIndex: gi + 1
    }, `hintupword${g}`, false, {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 13
    }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wi_showinfo__WEBPACK_IMPORTED_MODULE_4__.default, {
      word: puzzle.targetWord,
      showInserts: "Y",
      showSwaps: "Y",
      showAnagrams: "Y",
      showDrops: "Y",
      removeEntry: () => {},
      entryIndex: -1
    }, `hinttargetword${puzzle.targetWord}`, false, {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 320,
    columnNumber: 25
  }, undefined);

  const MainSection = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
      children: [(solved || !solving) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: GameStartSection
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 42
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 38
      }, undefined), puzzle && puzzle.startWord && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: PuzzleSection
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 48
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 44
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: SolutionSection
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 334,
    columnNumber: 25
  }, undefined);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trBackground",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trTitle",
      children: ["Transmogrify", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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
          lineNumber: 346,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.BrowserView, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: MainSection
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 353,
              columnNumber: 29
            }, undefined), puzzle && puzzle.startWord && !solved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "aligntop",
              children: HintSection
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 354,
              columnNumber: 71
            }, undefined), puzzle && puzzle.startWord && !solved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "aligntop",
              children: ExplainHints
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 355,
              columnNumber: 71
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 352,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.MobileOnlyView, {
      children: [MainSection, puzzle && puzzle.startWord && !solved && {
        HintSection
      }, puzzle && puzzle.startWord && !solved && ExplainHints]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: puzzle && puzzle.notes && puzzle.notes.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trDanger",
        children: puzzle.notes.map((n, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: n
        }, `note${i}`, false, {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 367,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 342,
    columnNumber: 9
  }, undefined);
};

_s(Transmogrify, "17Nxro08rGJmknbkhGVIUafKp/0=");

_c = Transmogrify;
/* harmony default export */ __webpack_exports__["default"] = (Transmogrify);

var _c;

$RefreshReg$(_c, "Transmogrify");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG0vdG0uanMiXSwibmFtZXMiOlsiVHJhbnNtb2dyaWZ5Iiwic2V0V2hlcmV0byIsImtleWJvYXJkVmVyc2lvbiIsInNldEtleWJvYXJkVmVyc2lvbiIsInVzZVN0YXRlIiwibnVtTW92ZXMiLCJzZXROdW1Nb3ZlcyIsImJhc2V1cmwiLCJudW1Nb3Zlc0FycmF5IiwicHV6emxlIiwic2V0UHV6emxlIiwibmV4dFdvcmQiLCJzZXROZXh0V29yZCIsImRvd25Xb3JkcyIsInNldERvd25Xb3JkcyIsInVwV29yZHMiLCJzZXRVcFdvcmRzIiwic29sdmVkIiwic2V0U29sdmVkIiwic29sdmluZyIsInNldFNvbHZpbmciLCJjYWxsRm9yUHV6emxlIiwiZGF0YSIsIm5ld1NvbHZpbmciLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImVycm9yIiwibm90ZXMiLCJjb25zb2xlIiwibG9nIiwicXVpdFRoaXNQdXp6bGUiLCJoYW5kbGVJbnB1dExldHRlciIsImxldHRlciIsInNvZmFyIiwiaGFuZGxlRGVsZXRlTGV0dGVyIiwibGVuZ3RoIiwiQXJyYXkiLCJmcm9tIiwicG9wIiwibmV3c29mYXIiLCJqb2luIiwiYWNjZXB0TmV4dFdvcmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwcmV2V29yZCIsInN0YXJ0V29yZCIsIm5ld1dvcmQiLCJ2YWxpZE1vdmUiLCJpc1dvcmRWYWxpZCIsImFsZXJ0Iiwid29yZEJlbG93TmV3V29yZCIsInRhcmdldFdvcmQiLCJuZXdEb3duV29yZHMiLCJwdXNoIiwid29yZEFib3ZlTmV3V29yZCIsIm5ld1VwV29yZHMiLCJyZW1vdmVEb3duV29yZHMiLCJ3aSIsIm5ld1dvcmRzIiwic3BsaWNlIiwicmVtb3ZlVXBXb3JkcyIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsImFyZUFuYWdyYW1zIiwiY291bnRTd2FwcyIsImlzRHJvcCIsIkdhbWVTdGFydFNlY3Rpb24iLCJtYXAiLCJuIiwiUHV6emxlU2VjdGlvbiIsIlN1Ym1pdFdvcmREaXYiLCJTaG93S2V5Ym9hcmQiLCJTb2x1dGlvblNlY3Rpb24iLCJ3IiwiaSIsIkV4cGxhaW5IaW50cyIsIkhpbnRTZWN0aW9uIiwiZyIsImdpIiwiTWFpblNlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWtCO0FBQUE7O0FBQ25DLFFBQU07QUFBQSxPQUFDQyxlQUFEO0FBQUEsT0FBa0JDO0FBQWxCLE1BQXdDQywrQ0FBUSxDQUFDLE1BQUQsQ0FBdEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJGLCtDQUFRLENBQUMsQ0FBRCxDQUF4QztBQUNBLFFBQU1HLE9BQU8sR0FBSSxLQUFELEdBQW9FLHVCQUFwRSxHQUE4RixDQUE5RztBQUNBLFFBQU1DLGFBQWEsR0FBRyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBQXRCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ08sUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJSLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDUyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QlYsK0NBQVEsQ0FBQyxFQUFELENBQTFDLENBUG1DLENBT2E7O0FBQ2hELFFBQU07QUFBQSxPQUFDVyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QlosK0NBQVEsQ0FBQyxFQUFELENBQXRDLENBUm1DLENBUVM7O0FBQzVDLFFBQU07QUFBQSxPQUFDYSxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQmQsK0NBQVEs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QkF2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFtQ0gsQ0FsWEQ7O0dBQU01RSxZOztLQUFBQSxZO0FBb1hOLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA2OTM2NGMwZmQwNTJlNTgzMGIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyVmlldywgTW9iaWxlT25seVZpZXcgfSBmcm9tIFwicmVhY3QtZGV2aWNlLWRldGVjdFwiO1xyXG5pbXBvcnQgeyBjb3VudFN3YXBzLCBhcmVBbmFncmFtcywgaXNEcm9wLCBpc1dvcmRWYWxpZCB9IGZyb20gJy4uLy4uL2xpYi93b3JkZnVuY3Rpb25zJztcclxuaW1wb3J0IFNob3dpbmZvIGZyb20gJy4uL3dpL3Nob3dpbmZvJ1xyXG5cclxuY29uc3QgVHJhbnNtb2dyaWZ5ID0gKHtzZXRXaGVyZXRvfSkgPT4ge1xyXG4gICAgY29uc3QgW2tleWJvYXJkVmVyc2lvbiwgc2V0S2V5Ym9hcmRWZXJzaW9uXSA9IHVzZVN0YXRlKCdja3YxJyk7XHJcbiAgICBjb25zdCBbbnVtTW92ZXMsIHNldE51bU1vdmVzXSA9IHVzZVN0YXRlKDIpO1xyXG4gICAgY29uc3QgYmFzZXVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCcgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20nO1xyXG4gICAgY29uc3QgbnVtTW92ZXNBcnJheSA9IFsyLDMsNCw1LDYsNyw4LDldO1xyXG4gICAgY29uc3QgW3B1enpsZSwgc2V0UHV6emxlXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtuZXh0V29yZCwgc2V0TmV4dFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Rvd25Xb3Jkcywgc2V0RG93bldvcmRzXSA9IHVzZVN0YXRlKFtdKTsgLy8gVXNlcnMgd29yZHMgZ29pbmcgZG93biBmcm9tIHRoZSBzdGFydCB3b3JkXHJcbiAgICBjb25zdCBbdXBXb3Jkcywgc2V0VXBXb3Jkc10gPSB1c2VTdGF0ZShbXSk7IC8vIFVzZXJzIHdvcmRzIGdvaW5nIHVwIGZyb20gdGhlIHRhcmdldCB3b3JkXHJcbiAgICBjb25zdCBbc29sdmVkLCBzZXRTb2x2ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3NvbHZpbmcsIHNldFNvbHZpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2FsbEZvclB1enpsZSA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIGxldCBkYXRhID0ge307XHJcbiAgICAgICAgbGV0IG5ld1NvbHZpbmcgPSBmYWxzZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gYCR7YmFzZXVybH0vRU5BQkxFMks/dHJhbnNtb2dyaWZ5PXRydWUmbnVtTW92ZXM9JHtudW1Nb3Zlc31gO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgICAgIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBuZXdTb2x2aW5nID0gdHJ1ZTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBkYXRhLm5vdGVzID0gW1wiUHJvYmxlbSB3aXRoIHRoZSBzZXJ2ZXIuIFNvcnJ5IGFib3V0IHRoYXQuXCJdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFB1enpsZShkYXRhKTtcclxuICAgICAgICBzZXREb3duV29yZHMoW10pO1xyXG4gICAgICAgIHNldFVwV29yZHMoW10pO1xyXG4gICAgICAgIHNldE5leHRXb3JkKCcnKTtcclxuICAgICAgICBzZXRTb2x2ZWQoZmFsc2UpO1xyXG4gICAgICAgIHNldFNvbHZpbmcobmV3U29sdmluZyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBxdWl0VGhpc1B1enpsZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRTb2x2aW5nKGZhbHNlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUlucHV0TGV0dGVyID0gKGxldHRlcikgPT4ge1xyXG4gICAgICAgIGxldCBzb2ZhciA9IG5leHRXb3JkICsgbGV0dGVyO1xyXG4gICAgICAgIHNldE5leHRXb3JkKHNvZmFyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZUxldHRlciA9ICgpID0+IHtcclxuICAgICAgICBpZiAobmV4dFdvcmQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgc29mYXIgPSBBcnJheS5mcm9tKG5leHRXb3JkKTtcclxuICAgICAgICAgICAgc29mYXIucG9wKCk7XHJcbiAgICAgICAgICAgIGxldCBuZXdzb2ZhciA9IHNvZmFyLmpvaW4oJycpO1xyXG4gICAgICAgICAgICBzZXROZXh0V29yZChuZXdzb2Zhcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgYWNjZXB0TmV4dFdvcmQgPSBhc3luYyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChuZXh0V29yZC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJcyB0aGUgd29yZCB2YWxpZCBpbiB0aGUgZG93biBkaXJlY3Rpb24/XHJcbiAgICAgICAgbGV0IHByZXZXb3JkID0gKGRvd25Xb3Jkcy5sZW5ndGggPT09IDAgPyBwdXp6bGUuc3RhcnRXb3JkIDogZG93bldvcmRzW2Rvd25Xb3Jkcy5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgbGV0IG5ld1dvcmQgPSBuZXh0V29yZDtcclxuICAgICAgICBpZiAodmFsaWRNb3ZlKHByZXZXb3JkLCBuZXdXb3JkKSkge1xyXG4gICAgICAgICAgICBpZiAoIWF3YWl0IGlzV29yZFZhbGlkKG5ld1dvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChgJHtuZXdXb3JkfSBpcyBub3QgYSB2YWxpZCB3b3JkYCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd29yZEJlbG93TmV3V29yZCA9ICh1cFdvcmRzLmxlbmd0aCA9PT0gMCA/IHB1enpsZS50YXJnZXRXb3JkIDogdXBXb3Jkc1swXSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3RG93bldvcmRzID0gWy4uLmRvd25Xb3Jkc107XHJcbiAgICAgICAgICAgICAgICBuZXdEb3duV29yZHMucHVzaChuZXdXb3JkKTtcclxuICAgICAgICAgICAgICAgIHNldERvd25Xb3JkcyhuZXdEb3duV29yZHMpO1xyXG4gICAgICAgICAgICAgICAgc2V0TmV4dFdvcmQoJycpOyAgICBcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZE1vdmUobmV3V29yZCwgd29yZEJlbG93TmV3V29yZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTb2x2ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBJcyB0aGUgd29yZCB2YWxpZCBpbiB0aGUgdXAgZGlyZWN0aW9uP1xyXG4gICAgICAgICAgICBwcmV2V29yZCA9ICh1cFdvcmRzLmxlbmd0aCA9PT0gMCA/IHB1enpsZS50YXJnZXRXb3JkIDogdXBXb3Jkc1swXSk7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZE1vdmUocHJldldvcmQsIG5ld1dvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWF3YWl0IGlzV29yZFZhbGlkKG5ld1dvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoYCR7bmV3V29yZH0gaXMgbm90IGEgdmFsaWQgd29yZGApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgd29yZEFib3ZlTmV3V29yZCA9IChkb3duV29yZHMubGVuZ3RoID09PSAwID8gcHV6emxlLnN0YXJ0V29yZCA6IGRvd25Xb3Jkc1tkb3duV29yZHMubGVuZ3RoLTFdKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VXBXb3JkcyA9IFtuZXdXb3JkLC4uLnVwV29yZHNdO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVwV29yZHMobmV3VXBXb3Jkcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TmV4dFdvcmQoJycpOyAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRNb3ZlKG5ld1dvcmQsIHdvcmRBYm92ZU5ld1dvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNvbHZlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnT25seSBhbmFncmFtcywgZHJvcHMsIHN3YXBzIGFuZCBpbnNlcnRzIGFsbG93ZWQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCByZW1vdmVEb3duV29yZHMgPSh3aSkgPT4ge1xyXG4gICAgICAgIGlmICh3aSA8IGRvd25Xb3Jkcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGV0IG5ld1dvcmRzID0gWy4uLmRvd25Xb3Jkc107XHJcbiAgICAgICAgICAgIG5ld1dvcmRzLnNwbGljZSh3aSk7XHJcbiAgICAgICAgICAgIHNldERvd25Xb3JkcyhuZXdXb3Jkcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVtb3ZlVXBXb3JkcyA9KHdpKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpIDwgdXBXb3Jkcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGV0IG5ld1VwV29yZHMgPSBbLi4udXBXb3Jkc107XHJcbiAgICAgICAgICAgIG5ld1VwV29yZHMuc3BsaWNlKDAsd2krMSk7XHJcbiAgICAgICAgICAgIHNldFVwV29yZHMobmV3VXBXb3Jkcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdmFsaWRNb3ZlID0gKHByZXZXb3JkPVwiXCIsIG5ld1dvcmQ9XCJcIikgPT4ge1xyXG4gICAgICAgIHByZXZXb3JkID0gcHJldldvcmQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgbmV3V29yZCA9IG5ld1dvcmQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKHByZXZXb3JkID09PSBuZXdXb3JkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChhcmVBbmFncmFtcyhwcmV2V29yZCwgbmV3V29yZClcclxuICAgICAgICAgICAgfHwgY291bnRTd2FwcyhwcmV2V29yZCwgbmV3V29yZCkgPT09IDFcclxuICAgICAgICAgICAgfHwgaXNEcm9wKHByZXZXb3JkLCBuZXdXb3JkKVxyXG4gICAgICAgICAgICB8fCBpc0Ryb3AobmV3V29yZCwgcHJldldvcmQpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IEdhbWVTdGFydFNlY3Rpb24gPSA8ZGl2IGNsYXNzTmFtZT1cInRtX251bU1vdmVzRGl2XCI+XHJcbiAgICAgICAgPGgzPk51bWJlciBPZiBNb3ZlczwvaDM+XHJcbiAgICAgICAge251bU1vdmVzQXJyYXkubWFwKChuKSA9PiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgdG1fJHtuID09PSBudW1Nb3ZlcyA/ICdudW1Nb3Zlc1NlbGVjdGVkJyA6ICdudW1Nb3Zlc1Vuc2VsZWN0ZWQnfWB9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2BjaG9vc2VOdW1Nb3ZlcyR7bn1gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXROdW1Nb3ZlcyhuKTsgfSB9XHJcbiAgICAgICAgICAgID57bn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bV9zdGFydFB1enpsZURpdlwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cInN0YXJ0UHV6emxlXCIgY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7IGNhbGxGb3JQdXp6bGUoKTsgfSB9PlxyXG4gICAgICAgICAgICAgICAgU3RhcnQgUHV6emxlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgUHV6emxlU2VjdGlvbiA9IDxkaXYgY2xhc3NOYW1lPVwidG1fcHV6emxlRGl2XCI+XHJcbiAgICAgICAgPHNwYW4+e3B1enpsZS5zdGFydFdvcmR9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPnRvPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPntwdXp6bGUudGFyZ2V0V29yZH08L3NwYW4+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8c3Bhbj5UYXJnZXQ6PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPntwdXp6bGUubnVtTW92ZXN9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPm1vdmVzPC9zcGFuPlxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgU3VibWl0V29yZERpdiA9IDxkaXYgY2xhc3NOYW1lPVwidG1fS2V5R29EaXZcIj5cclxuICAgICAgICA8YnV0dG9uIGtleT1cImtleUdvXCIgb25DbGljaz17YWNjZXB0TmV4dFdvcmR9IGNsYXNzTmFtZT17YHRtX0tleUdvICR7bmV4dFdvcmQubGVuZ3RoID4gMCA/IFwiXCIgOiBcImRpc2FibGVkXCJ9YH0+XHJcbiAgICAgICAgICAgIFNVQk1JVCBXT1JEXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj47XHJcbiAgICBjb25zdCBTaG93S2V5Ym9hcmQgPSA8ZGl2PlxyXG4gICAgICAgIHtrZXlib2FyZFZlcnNpb24gPT09ICdja3YxJyA/XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tS2V5Ym9hcmRWMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hrYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwic3dpdGNoYmt2MVwiIG9uQ2xpY2s9eygpID0+IHtzZXRLZXlib2FyZFZlcnNpb24oJ2NrdjInKTt9fT5zd2l0Y2gga2V5Ym9hcmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJja3YxUm93MVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1EnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgUVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdXJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIFdcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignRScpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBFXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1InKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgUlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdUJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIFRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignWScpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBZXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1UnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgVVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdJJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIElcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignTycpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBPXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1AnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgUFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJja3YxUm93MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0EnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgQVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdTJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIFNcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignRCcpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBEXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0YnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgRlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdHJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIEdcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignSCcpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBIXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0onKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgSlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdLJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIEtcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignTCcpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBMXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNrdjFSb3czXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignWicpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBaXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1gnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgWFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdDJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIENcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignVicpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBWXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0InKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgQlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdOJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIE5cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignTScpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBNXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgbmV4dFdvcmQubGVuZ3RoID4gMCAmJiBoYW5kbGVEZWxldGVMZXR0ZXIoKTsgfSB9IGNsYXNzPVwiY2t2MSBCYWNrc3BhY2VcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtTdWJtaXRXb3JkRGl2fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA6IGtleWJvYXJkVmVyc2lvbiA9PT0gJ2NrdjInID9cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21LZXlib2FyZFYyIFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hrYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwic3dpdGNoYmt2MlwiIG9uQ2xpY2s9eygpID0+IHtzZXRLZXlib2FyZFZlcnNpb24oJ2NrdjMnKTt9fT5zd2l0Y2gga2V5Ym9hcmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJja3YyUm93MVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1EnKTsgfSB9PlE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignVycpOyB9IH0+Vzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdFJyk7IH0gfT5FPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1InKTsgfSB9PlI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignVCcpOyB9IH0+VDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdZJyk7IH0gfT5ZPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1UnKTsgfSB9PlU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignSScpOyB9IH0+STwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdPJyk7IH0gfT5PPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1AnKTsgfSB9PlA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2t2MlJvdzJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdBJyk7IH0gfT5BPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1MnKTsgfSB9PlM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignRCcpOyB9IH0+RDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdGJyk7IH0gfT5GPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0cnKTsgfSB9Pkc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignSCcpOyB9IH0+SDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdKJyk7IH0gfT5KPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0snKTsgfSB9Pks8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignTCcpOyB9IH0+TDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJja3YyUm93M1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1onKTsgfSB9Plo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignWCcpOyB9IH0+WDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdDJyk7IH0gfT5DPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1YnKTsgfSB9PlY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignQicpOyB9IH0+Qjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdOJyk7IH0gfT5OPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ00nKTsgfSB9Pk08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBuZXh0V29yZC5sZW5ndGggPiAwICYmIGhhbmRsZURlbGV0ZUxldHRlcigpOyB9IH0gY2xhc3M9XCJ0bV9CYWNrc3BhY2VcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtTdWJtaXRXb3JkRGl2fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA6XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tS2V5Ym9hcmRWM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hrYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwic3dpdGNoYmt2M1wiIG9uQ2xpY2s9eygpID0+IHtzZXRLZXlib2FyZFZlcnNpb24oJ2NrdjEnKTt9fT5zd2l0Y2gga2V5Ym9hcmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJja3YzUm93MVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1EnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjMgUVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdXJyk7IH0gfSBjbGFzc05hbWU9XCJja3YzIFdcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignRScpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MyBFXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1InKTsgfSB9IGNsYXNzTmFtZT1cImNrdjMgUlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdUJyk7IH0gfSBjbGFzc05hbWU9XCJja3YzIFRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignWScpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MyBZXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1UnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjMgVVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdJJyk7IH0gfSBjbGFzc05hbWU9XCJja3YzIElcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignTycpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MyBPXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1AnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjMgUFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJja3YzUm93MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0EnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjMgQVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdTJyk7IH0gfSBjbGFzc05hbWU9XCJja3YzIFNcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignRCcpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MyBEXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0YnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjMgRlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdHJyk7IH0gfSBjbGFzc05hbWU9XCJja3YzIEdcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignSCcpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MyBIXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0onKTsgfSB9IGNsYXNzTmFtZT1cImNrdjMgSlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdLJyk7IH0gfSBjbGFzc05hbWU9XCJja3YzIEtcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignTCcpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MyBMXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNrdjNSb3czXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignWicpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MyBaXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1gnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjMgWFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdDJyk7IH0gfSBjbGFzc05hbWU9XCJja3YzIENcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignVicpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MyBWXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0InKTsgfSB9IGNsYXNzTmFtZT1cImNrdjMgQlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdOJyk7IH0gfSBjbGFzc05hbWU9XCJja3YzIE5cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignTScpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MyBNXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgbmV4dFdvcmQubGVuZ3RoID4gMCAmJiBoYW5kbGVEZWxldGVMZXR0ZXIoKTsgfSB9IGNsYXNzPVwiY2t2MyBCYWNrc3BhY2VcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtTdWJtaXRXb3JkRGl2fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICA8L2Rpdj47XHJcbiAgICBjb25zdCBTb2x1dGlvblNlY3Rpb24gPSA8ZGl2IGNsYXNzTmFtZT1cInRtX3NvbHV0aW9uT3V0ZXJEaXZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRtX3NvbHV0aW9uRGl2XCI+XHJcbiAgICAgICAgICAgIHtwdXp6bGUgJiYgcHV6emxlLnN0YXJ0V29yZCAmJiA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD57cHV6emxlLnN0YXJ0V29yZH08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAge2Rvd25Xb3Jkcy5tYXAoKHcsaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgdXNlckRvd25Xb3JkJHtpfWB9Pjx0ZD48c3BhbiBjbGFzc05hbWU9XCJ0bV9hcnJvd1wiPuKGpzwvc3Bhbj57d308L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgeyFzb2x2ZWQgJiYgPHRyPjx0ZD48c3BhbiBjbGFzc05hbWU9XCJ0bV9uZXh0d29yZFwiPiZuYnNwO3tuZXh0V29yZH0mbmJzcDs8L3NwYW4+PC90ZD48L3RyPn1cclxuICAgICAgICAgICAgICAgICAgICB7dXBXb3Jkcy5tYXAoKHcsaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgdXNlclVwV29yZCR7aX1gfT48dGQ+e3d9PHNwYW4gY2xhc3NOYW1lPVwidG1fYXJyb3dcIj7ihqU8L3NwYW4+PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+e3B1enpsZS50YXJnZXRXb3JkfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtzb2x2ZWQgP1xyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0bV9jb25ncmF0c1wiPvCfkY/wn4+9IFNvbHZlZCBpbiB7ZG93bldvcmRzLmxlbmd0aCArIHVwV29yZHMubGVuZ3RoICsgMX0gbW92ZXMg8J+Rj/Cfj708L3A+XHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge1Nob3dLZXlib2FyZH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG1fbGFzdGJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZG93bldvcmRzLmxlbmd0aCArIHVwV29yZHMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge3NldERvd25Xb3JkcyhbXSk7IHNldFVwV29yZHMoW10pOyBzZXROZXh0V29yZCgnJyk7fX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlJlbW92ZSBhbGwgZW50ZXIgd29yZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUkVTRVRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7YWxlcnQoJ1ZhbGlkIG5leHQgd29yZCBvcHRpb25zOlxcblN3YXAgb25lIGxldHRlciwgZS5nLiBDQVQgdG8gQ09UXFxuRHJvcCBvbmUgbGV0dGVyLCBlLmcuIFNXSUcgdG8gV0lHXFxuSW5zZXJ0IG9uZSBsZXR0ZXIsIGUuZy4gTUFUIHRvIE1BVEgsIG9yIEhJUCB0byBXSElQXFxuQW5hZ3JhbSwgZS5nLiBBQ1QgdG8gQ0FUJyk7fX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlNob3cgaW5zdHJ1Y3Rpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhFTFBcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRtX3F1aXRcIiBvbkNsaWNrPXsoKSA9PiB7cXVpdFRoaXNQdXp6bGUoKTt9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiUXVpdCB0aGlzIHB1enpsZS4gWW91IGNhbiBzdGFydCBhbm90aGVyLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRVUlUXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgICBjb25zdCBFeHBsYWluSGludHMgPSA8dWwgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiaW5zZXJ0Q291bnRcIj4mbmJzcDsxJm5ic3A7PC9zcGFuPlNob3dzIGluc2VydCBjb3VudHMvbGV0dGVyczwvbGk+XHJcbiAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cInN3YXBDb3VudFwiPiZuYnNwOzImbmJzcDs8L3NwYW4+U2hvd3Mgc3dhcHMgY291bnRzL2xldHRlcnM8L2xpPlxyXG4gICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJhbmFncmFtQ291bnRcIj4zPC9zcGFuPlNob3dzIGFuYWdyYW0gY291bnRzL3dvcmRzPC9saT5cclxuICAgICAgICA8bGk+Q2xpY2sgdG8gdG9nZ2xlIGJldHdlZW4gY291bnQgYW5kIGluZm88L2xpPlxyXG4gICAgICAgIDxsaT5UaGUgYmxhY2sgZG90IHJlcHJlc2VudHMgYSBkcm9wPC9saT5cclxuICAgICAgICA8bGk+Q2xpY2sgdGhlIDxzcGFuIGNsYXNzTmFtZT1cImNsb3NlbWVidXR0b25cIj48L3NwYW4+IHRvIHJlbW92ZTwvbGk+XHJcbiAgICA8L3VsPjtcclxuICAgIGNvbnN0IEhpbnRTZWN0aW9uID0gPGRpdj5cclxuICAgICAgICA8U2hvd2luZm8ga2V5PXtgaGludHN0YXJ0d29yZCR7cHV6emxlLnN0YXJ0V29yZH1gfSB3b3JkPXtwdXp6bGUuc3RhcnRXb3JkfSBzaG93SW5zZXJ0cz1cIllcIiBzaG93U3dhcHM9XCJZXCIgc2hvd0FuYWdyYW1zPVwiWVwiIHNob3dEcm9wcz1cIllcIlxyXG4gICAgICAgICAgICAgcmVtb3ZlRW50cnk9eygpID0+IHt9fSBlbnRyeUluZGV4PXstMX0vPlxyXG4gICAgICAgIHtkb3duV29yZHMubWFwKChnLGdpKSA9PiAoXHJcbiAgICAgICAgICAgIDxTaG93aW5mbyBrZXk9e2BoaW50ZG93bndvcmQke2d9YH0gd29yZD17Z30gc2hvd0luc2VydHM9XCJZXCIgc2hvd1N3YXBzPVwiWVwiIHNob3dBbmFncmFtcz1cIllcIiBzaG93RHJvcHM9XCJZXCJcclxuICAgICAgICAgICAgIHJlbW92ZUVudHJ5PXsoKSA9PiB7cmVtb3ZlRG93bldvcmRzKGdpKTt9fSBlbnRyeUluZGV4PXtnaSsxfS8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAge3VwV29yZHMubWFwKChnLGdpKSA9PiAoXHJcbiAgICAgICAgICAgIDxTaG93aW5mbyBrZXk9e2BoaW50dXB3b3JkJHtnfWB9IHdvcmQ9e2d9IHNob3dJbnNlcnRzPVwiWVwiIHNob3dTd2Fwcz1cIllcIiBzaG93QW5hZ3JhbXM9XCJZXCIgc2hvd0Ryb3BzPVwiWVwiXHJcbiAgICAgICAgICAgICByZW1vdmVFbnRyeT17KCkgPT4ge3JlbW92ZVVwV29yZHMoZ2kpO319IGVudHJ5SW5kZXg9e2dpKzF9Lz5cclxuICAgICAgICApKX1cclxuICAgICAgICA8U2hvd2luZm8ga2V5PXtgaGludHRhcmdldHdvcmQke3B1enpsZS50YXJnZXRXb3JkfWB9IHdvcmQ9e3B1enpsZS50YXJnZXRXb3JkfSBzaG93SW5zZXJ0cz1cIllcIiBzaG93U3dhcHM9XCJZXCIgc2hvd0FuYWdyYW1zPVwiWVwiIHNob3dEcm9wcz1cIllcIlxyXG4gICAgICAgICAgICAgcmVtb3ZlRW50cnk9eygpID0+IHt9fSBlbnRyeUluZGV4PXstMX0vPlxyXG4gICAgPC9kaXY+XHJcbiAgICBjb25zdCBNYWluU2VjdGlvbiA9IDx0YWJsZT5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHsoc29sdmVkIHx8ICFzb2x2aW5nKSAmJiA8dHI+PHRkPntHYW1lU3RhcnRTZWN0aW9ufTwvdGQ+PC90cj59XHJcbiAgICAgICAgICAgIHtwdXp6bGUgJiYgcHV6emxlLnN0YXJ0V29yZCAmJiA8dHI+PHRkPntQdXp6bGVTZWN0aW9ufTwvdGQ+PC90cj59XHJcbiAgICAgICAgICAgIDx0cj48dGQ+e1NvbHV0aW9uU2VjdGlvbn08L3RkPjwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgIDwvdGFibGU+O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIFRyYW5zbW9ncmlmeVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8QnJvd3NlclZpZXc+XHJcbiAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e01haW5TZWN0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHV6emxlICYmIHB1enpsZS5zdGFydFdvcmQgJiYgIXNvbHZlZCAmJiA8dGQgY2xhc3NOYW1lPVwiYWxpZ250b3BcIj57SGludFNlY3Rpb259PC90ZD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHV6emxlICYmIHB1enpsZS5zdGFydFdvcmQgJiYgIXNvbHZlZCAmJiA8dGQgY2xhc3NOYW1lPVwiYWxpZ250b3BcIj57RXhwbGFpbkhpbnRzfTwvdGQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L0Jyb3dzZXJWaWV3PlxyXG4gICAgICAgICAgICA8TW9iaWxlT25seVZpZXc+XHJcbiAgICAgICAgICAgICAgICB7TWFpblNlY3Rpb259XHJcbiAgICAgICAgICAgICAgICB7cHV6emxlICYmIHB1enpsZS5zdGFydFdvcmQgJiYgIXNvbHZlZCAmJiB7SGludFNlY3Rpb259fVxyXG4gICAgICAgICAgICAgICAge3B1enpsZSAmJiBwdXp6bGUuc3RhcnRXb3JkICYmICFzb2x2ZWQgJiYgRXhwbGFpbkhpbnRzfVxyXG4gICAgICAgICAgICA8L01vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3B1enpsZSAmJiBwdXp6bGUubm90ZXMgJiYgcHV6emxlLm5vdGVzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJEYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHV6emxlLm5vdGVzLm1hcCgobixpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17YG5vdGUke2l9YH0+e259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJhbnNtb2dyaWZ5OyJdLCJzb3VyY2VSb290IjoiIn0=