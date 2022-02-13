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
    0: words,
    1: setWords
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Users words

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
    setWords([]);
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
    let prevWord = words.length === 0 ? puzzle.startWord : words[words.length - 1];
    let newWord = nextWord;

    if (validMove(newWord, prevWord)) {
      if (!(await (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_3__.isWordValid)(newWord))) {
        alert(`${newWord} is not a valid word`);
      } else {
        let lastWord = puzzle.targetWord;
        let newWords = [...words];
        newWords.push(newWord);
        setWords(newWords);
        setNextWord('');

        if (validMove(newWord, lastWord)) {
          setSolved(true);
        }
      }
    } else {
      alert('Only anagrams, drops, swaps and inserts allowed.');
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
      lineNumber: 82,
      columnNumber: 9
    }, undefined), numMovesArray.map(n => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: `tm_${n === numMoves ? 'numMovesSelected' : 'numMovesUnselected'}`,
      onClick: () => {
        setNumMoves(n);
      },
      children: n
    }, `chooseNumMoves${n}`, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
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
        lineNumber: 91,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 30
  }, undefined);

  const PuzzleSection = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "tm_puzzleDiv",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: puzzle.startWord
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "to"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: puzzle.targetWord
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "Target:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: puzzle.numMoves
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "moves"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 96,
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
          lineNumber: 109,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
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
          lineNumber: 112,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('W');
          },
          className: "ckv1 W"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('E');
          },
          className: "ckv1 E"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('R');
          },
          className: "ckv1 R"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('T');
          },
          className: "ckv1 T"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('Y');
          },
          className: "ckv1 Y"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('U');
          },
          className: "ckv1 U"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('I');
          },
          className: "ckv1 I"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('O');
          },
          className: "ckv1 O"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('P');
          },
          className: "ckv1 P"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
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
          lineNumber: 124,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('S');
          },
          className: "ckv1 S"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('D');
          },
          className: "ckv1 D"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('F');
          },
          className: "ckv1 F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('G');
          },
          className: "ckv1 G"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('H');
          },
          className: "ckv1 H"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('J');
          },
          className: "ckv1 J"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('K');
          },
          className: "ckv1 K"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('L');
          },
          className: "ckv1 L"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
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
          lineNumber: 135,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('X');
          },
          className: "ckv1 X"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('C');
          },
          className: "ckv1 C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('V');
          },
          className: "ckv1 V"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('B');
          },
          className: "ckv1 B"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('N');
          },
          className: "ckv1 N"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('M');
          },
          className: "ckv1 M"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            nextWord.length > 0 && handleDeleteLetter();
          },
          class: "tm_Backspace"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 17
      }, undefined), nextWord.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "tm_KeyGoDiv",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: acceptNextWord,
          className: "tm_KeyGo",
          children: "SUBMIT WORD"
        }, "keyGo", false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 50
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "customKeyboardV2 ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "switchkb",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: () => {
            setKeyboardVersion('ckv1');
          },
          children: "switch keyboard"
        }, "switchbkv2", false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
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
          lineNumber: 154,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('W');
          },
          children: "W"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('E');
          },
          children: "E"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('R');
          },
          children: "R"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('T');
          },
          children: "T"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('Y');
          },
          children: "Y"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('U');
          },
          children: "U"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('I');
          },
          children: "I"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('O');
          },
          children: "O"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('P');
          },
          children: "P"
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
        className: "ckv2Row2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('A');
          },
          children: "A"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('S');
          },
          children: "S"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('D');
          },
          children: "D"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('F');
          },
          children: "F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('G');
          },
          children: "G"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('H');
          },
          children: "H"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('J');
          },
          children: "J"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('K');
          },
          children: "K"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('L');
          },
          children: "L"
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
        className: "ckv2Row3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('Z');
          },
          children: "Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('X');
          },
          children: "X"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('C');
          },
          children: "C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('V');
          },
          children: "V"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('B');
          },
          children: "B"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('N');
          },
          children: "N"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('M');
          },
          children: "M"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            nextWord.length > 0 && handleDeleteLetter();
          },
          class: "tm_Backspace"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 17
      }, undefined), nextWord.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "tm_KeyGoDiv",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: acceptNextWord,
          className: "tm_KeyGo",
          children: "SUBMIT WORD"
        }, "keyGo", false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 50
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 26
  }, undefined);

  const SolutionSection = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "tm_solutionOuterDiv",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "tm_solutionDiv",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: puzzle.startWord
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 21
          }, undefined), words.map((w, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: w
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 50
            }, undefined)
          }, `userWord${i}`, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 25
          }, undefined)), !solved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: "..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 37
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 33
          }, undefined), !solved && nextWord.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "tm_KeyedWord container",
            children: Array.from(nextWord).map((l, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: l
            }, `nxwd${i}`, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 33
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 25
          }, undefined), !solved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: "..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 37
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 33
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: puzzle.targetWord
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }, undefined), solved ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "tm_congrats",
      children: ["\uD83D\uDC4F\uD83C\uDFFD Solved in ", words.length + 1, " moves \uD83D\uDC4F\uD83C\uDFFD"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 13
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.MobileOnlyView, {
        children: ShowKeyboard
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.BrowserView, {
        children: [ShowKeyboard, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          className: "tm_form",
          children: ["Next Word:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            value: nextWord,
            onChange: e => {
              setNextWord(e.target.value);
            },
            onKeyPress: e => {
              e.keyCode === 13 && acceptNextWord;
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            onClick: acceptNextWord,
            children: "SUBMIT"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "tm_lastbuttons",
        children: [words.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: () => {
            let newWords = [...words];
            newWords.pop();
            setWords(newWords);
          },
          "data-toggle": "tooltip",
          title: "Remove last entered word",
          children: "UNDO"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 21
        }, undefined), words.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: () => {
            setWords([]);
            setNextWord('');
          },
          "data-toggle": "tooltip",
          title: "Remove all enter words",
          children: "RESET"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 239,
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
          lineNumber: 244,
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
          lineNumber: 249,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 192,
    columnNumber: 29
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
          lineNumber: 263,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: [(solved || !solving) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: GameStartSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 268,
            columnNumber: 50
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 46
        }, undefined), puzzle && puzzle.startWord && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: PuzzleSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 56
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 52
        }, undefined), puzzle && puzzle.startWord && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: SolutionSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 270,
            columnNumber: 56
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 52
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: puzzle && puzzle.notes && puzzle.notes.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trDanger",
        children: puzzle.notes.map((n, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: n
        }, `note${i}`, false, {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 259,
    columnNumber: 9
  }, undefined);
};

_s(Transmogrify, "i/mvFKmqELGOpZePql3Tix7yxEE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG0vdG0uanMiXSwibmFtZXMiOlsiVHJhbnNtb2dyaWZ5Iiwic2V0V2hlcmV0byIsImtleWJvYXJkVmVyc2lvbiIsInNldEtleWJvYXJkVmVyc2lvbiIsInVzZVN0YXRlIiwibnVtTW92ZXMiLCJzZXROdW1Nb3ZlcyIsImJhc2V1cmwiLCJudW1Nb3Zlc0FycmF5IiwicHV6emxlIiwic2V0UHV6emxlIiwibmV4dFdvcmQiLCJzZXROZXh0V29yZCIsIndvcmRzIiwic2V0V29yZHMiLCJzb2x2ZWQiLCJzZXRTb2x2ZWQiLCJzb2x2aW5nIiwic2V0U29sdmluZyIsImNhbGxGb3JQdXp6bGUiLCJkYXRhIiwibmV3U29sdmluZyIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZXJyb3IiLCJub3RlcyIsImNvbnNvbGUiLCJsb2ciLCJxdWl0VGhpc1B1enpsZSIsImhhbmRsZUlucHV0TGV0dGVyIiwibGV0dGVyIiwic29mYXIiLCJoYW5kbGVEZWxldGVMZXR0ZXIiLCJsZW5ndGgiLCJBcnJheSIsImZyb20iLCJwb3AiLCJuZXdzb2ZhciIsImpvaW4iLCJhY2NlcHROZXh0V29yZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByZXZXb3JkIiwic3RhcnRXb3JkIiwibmV3V29yZCIsInZhbGlkTW92ZSIsImlzV29yZFZhbGlkIiwiYWxlcnQiLCJsYXN0V29yZCIsInRhcmdldFdvcmQiLCJuZXdXb3JkcyIsInB1c2giLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJhcmVBbmFncmFtcyIsImNvdW50U3dhcHMiLCJpc0Ryb3AiLCJHYW1lU3RhcnRTZWN0aW9uIiwibWFwIiwibiIsIlB1enpsZVNlY3Rpb24iLCJTaG93S2V5Ym9hcmQiLCJTb2x1dGlvblNlY3Rpb24iLCJ3IiwiaSIsImwiLCJ0YXJnZXQiLCJ2YWx1ZSIsImtleUNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7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QU0sQ0FBQ2tCLEtBQWpCLElBQTBCbEIsTUFBTSxDQUFDa0IsS0FBUCxDQUFhUSxNQUFiLEdBQXNCLENBQWhELGlCQUNEO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUEsa0JBQ0sxQixNQUFNLENBQUNrQixLQUFQLENBQWFpQyxHQUFiLENBQWlCLENBQUNDLENBQUQsRUFBR0ssQ0FBSCxrQkFDZDtBQUFBLG9CQUFxQkw7QUFBckIsV0FBUyxPQUFNSyxDQUFFLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQTBCSCxDQXZSRDs7R0FBTWxFLFk7O0tBQUFBLFk7QUF5Uk4sK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2Y3MWMxNGMxNmY3NDgyYzZkYzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJyb3dzZXJWaWV3LCBNb2JpbGVPbmx5VmlldyB9IGZyb20gXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCI7XHJcbmltcG9ydCB7IGNvdW50U3dhcHMsIGFyZUFuYWdyYW1zLCBpc0Ryb3AsIGlzV29yZFZhbGlkIH0gZnJvbSAnLi4vLi4vbGliL3dvcmRmdW5jdGlvbnMnO1xyXG5cclxuY29uc3QgVHJhbnNtb2dyaWZ5ID0gKHtzZXRXaGVyZXRvfSkgPT4ge1xyXG4gICAgY29uc3QgW2tleWJvYXJkVmVyc2lvbiwgc2V0S2V5Ym9hcmRWZXJzaW9uXSA9IHVzZVN0YXRlKCdja3YxJyk7XHJcbiAgICBjb25zdCBbbnVtTW92ZXMsIHNldE51bU1vdmVzXSA9IHVzZVN0YXRlKDIpO1xyXG4gICAgY29uc3QgYmFzZXVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCcgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20nO1xyXG4gICAgY29uc3QgbnVtTW92ZXNBcnJheSA9IFsyLDMsNCw1LDYsNyw4LDldO1xyXG4gICAgY29uc3QgW3B1enpsZSwgc2V0UHV6emxlXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtuZXh0V29yZCwgc2V0TmV4dFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3dvcmRzLCBzZXRXb3Jkc10gPSB1c2VTdGF0ZShbXSk7IC8vIFVzZXJzIHdvcmRzXHJcbiAgICBjb25zdCBbc29sdmVkLCBzZXRTb2x2ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3NvbHZpbmcsIHNldFNvbHZpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2FsbEZvclB1enpsZSA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIGxldCBkYXRhID0ge307XHJcbiAgICAgICAgbGV0IG5ld1NvbHZpbmcgPSBmYWxzZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gYCR7YmFzZXVybH0vRU5BQkxFMks/dHJhbnNtb2dyaWZ5PXRydWUmbnVtTW92ZXM9JHtudW1Nb3Zlc31gO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgICAgIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBuZXdTb2x2aW5nID0gdHJ1ZTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBkYXRhLm5vdGVzID0gW1wiUHJvYmxlbSB3aXRoIHRoZSBzZXJ2ZXIuIFNvcnJ5IGFib3V0IHRoYXQuXCJdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFB1enpsZShkYXRhKTtcclxuICAgICAgICBzZXRXb3JkcyhbXSk7XHJcbiAgICAgICAgc2V0TmV4dFdvcmQoJycpO1xyXG4gICAgICAgIHNldFNvbHZlZChmYWxzZSk7XHJcbiAgICAgICAgc2V0U29sdmluZyhuZXdTb2x2aW5nKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHF1aXRUaGlzUHV6emxlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNvbHZpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRMZXR0ZXIgPSAobGV0dGVyKSA9PiB7XHJcbiAgICAgICAgbGV0IHNvZmFyID0gbmV4dFdvcmQgKyBsZXR0ZXI7XHJcbiAgICAgICAgc2V0TmV4dFdvcmQoc29mYXIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlTGV0dGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChuZXh0V29yZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBzb2ZhciA9IEFycmF5LmZyb20obmV4dFdvcmQpO1xyXG4gICAgICAgICAgICBzb2Zhci5wb3AoKTtcclxuICAgICAgICAgICAgbGV0IG5ld3NvZmFyID0gc29mYXIuam9pbignJyk7XHJcbiAgICAgICAgICAgIHNldE5leHRXb3JkKG5ld3NvZmFyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBhY2NlcHROZXh0V29yZCA9IGFzeW5jKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IHByZXZXb3JkID0gKHdvcmRzLmxlbmd0aCA9PT0gMCA/IHB1enpsZS5zdGFydFdvcmQgOiB3b3Jkc1t3b3Jkcy5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgbGV0IG5ld1dvcmQgPSBuZXh0V29yZDtcclxuICAgICAgICBpZiAodmFsaWRNb3ZlKG5ld1dvcmQsIHByZXZXb3JkKSkge1xyXG4gICAgICAgICAgICBpZiAoIWF3YWl0IGlzV29yZFZhbGlkKG5ld1dvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChgJHtuZXdXb3JkfSBpcyBub3QgYSB2YWxpZCB3b3JkYCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGFzdFdvcmQgPSBwdXp6bGUudGFyZ2V0V29yZDtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdXb3JkcyA9IFsuLi53b3Jkc107XHJcbiAgICAgICAgICAgICAgICBuZXdXb3Jkcy5wdXNoKG5ld1dvcmQpO1xyXG4gICAgICAgICAgICAgICAgc2V0V29yZHMobmV3V29yZHMpO1xyXG4gICAgICAgICAgICAgICAgc2V0TmV4dFdvcmQoJycpOyAgICBcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZE1vdmUobmV3V29yZCwgbGFzdFdvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U29sdmVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ09ubHkgYW5hZ3JhbXMsIGRyb3BzLCBzd2FwcyBhbmQgaW5zZXJ0cyBhbGxvd2VkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHZhbGlkTW92ZSA9IChwcmV2V29yZD1cIlwiLCBuZXdXb3JkPVwiXCIpID0+IHtcclxuICAgICAgICBwcmV2V29yZCA9IHByZXZXb3JkLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIG5ld1dvcmQgPSBuZXdXb3JkLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChwcmV2V29yZCA9PT0gbmV3V29yZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoYXJlQW5hZ3JhbXMocHJldldvcmQsIG5ld1dvcmQpXHJcbiAgICAgICAgICAgIHx8IGNvdW50U3dhcHMocHJldldvcmQsIG5ld1dvcmQpID09PSAxXHJcbiAgICAgICAgICAgIHx8IGlzRHJvcChwcmV2V29yZCwgbmV3V29yZClcclxuICAgICAgICAgICAgfHwgaXNEcm9wKG5ld1dvcmQsIHByZXZXb3JkKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBHYW1lU3RhcnRTZWN0aW9uID0gPGRpdiBjbGFzc05hbWU9XCJ0bV9udW1Nb3Zlc0RpdlwiPlxyXG4gICAgICAgIDxoMz5OdW1iZXIgT2YgTW92ZXM8L2gzPlxyXG4gICAgICAgIHtudW1Nb3Zlc0FycmF5Lm1hcCgobikgPT4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YHRtXyR7biA9PT0gbnVtTW92ZXMgPyAnbnVtTW92ZXNTZWxlY3RlZCcgOiAnbnVtTW92ZXNVbnNlbGVjdGVkJ31gfVxyXG4gICAgICAgICAgICAgICAga2V5PXtgY2hvb3NlTnVtTW92ZXMke259YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0TnVtTW92ZXMobik7IH0gfVxyXG4gICAgICAgICAgICA+e259XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG1fc3RhcnRQdXp6bGVEaXZcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJzdGFydFB1enpsZVwiIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4geyBjYWxsRm9yUHV6emxlKCk7IH0gfT5cclxuICAgICAgICAgICAgICAgIFN0YXJ0IFB1enpsZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IFB1enpsZVNlY3Rpb24gPSA8ZGl2IGNsYXNzTmFtZT1cInRtX3B1enpsZURpdlwiPlxyXG4gICAgICAgIDxzcGFuPntwdXp6bGUuc3RhcnRXb3JkfTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj50bzwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj57cHV6emxlLnRhcmdldFdvcmR9PC9zcGFuPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPHNwYW4+VGFyZ2V0Ojwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj57cHV6emxlLm51bU1vdmVzfTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5tb3Zlczwvc3Bhbj5cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IFNob3dLZXlib2FyZCA9IDxkaXY+XHJcbiAgICAgICAge2tleWJvYXJkVmVyc2lvbiA9PT0gJ2NrdjEnID9cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21LZXlib2FyZFYxXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaGtiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJzd2l0Y2hia3YxXCIgb25DbGljaz17KCkgPT4ge3NldEtleWJvYXJkVmVyc2lvbignY2t2MicpO319PnN3aXRjaCBrZXlib2FyZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNrdjFSb3cxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignUScpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBRXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1cnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgV1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdFJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIEVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignUicpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBSXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1QnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgVFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdZJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIFlcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignVScpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBVXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0knKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgSVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdPJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIE9cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignUCcpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBQXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNrdjFSb3cyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignQScpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBBXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1MnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgU1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdEJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIERcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignRicpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBGXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0cnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgR1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdIJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIEhcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignSicpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBKXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0snKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgS1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdMJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIExcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2t2MVJvdzNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdaJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIFpcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignWCcpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBYXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0MnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgQ1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdWJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIFZcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignQicpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBCXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ04nKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgTlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdNJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIE1cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBuZXh0V29yZC5sZW5ndGggPiAwICYmIGhhbmRsZURlbGV0ZUxldHRlcigpOyB9IH0gY2xhc3M9XCJ0bV9CYWNrc3BhY2VcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtuZXh0V29yZC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bV9LZXlHb0RpdlwiPjxidXR0b24ga2V5PVwia2V5R29cIiBvbkNsaWNrPXthY2NlcHROZXh0V29yZH0gY2xhc3NOYW1lPVwidG1fS2V5R29cIj5TVUJNSVQgV09SRDwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA6IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbUtleWJvYXJkVjIgXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaGtiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJzd2l0Y2hia3YyXCIgb25DbGljaz17KCkgPT4ge3NldEtleWJvYXJkVmVyc2lvbignY2t2MScpO319PnN3aXRjaCBrZXlib2FyZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNrdjJSb3cxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignUScpOyB9IH0+UTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdXJyk7IH0gfT5XPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0UnKTsgfSB9PkU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignUicpOyB9IH0+Ujwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdUJyk7IH0gfT5UPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1knKTsgfSB9Plk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignVScpOyB9IH0+VTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdJJyk7IH0gfT5JPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ08nKTsgfSB9Pk88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignUCcpOyB9IH0+UDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJja3YyUm93MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0EnKTsgfSB9PkE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignUycpOyB9IH0+Uzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdEJyk7IH0gfT5EPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0YnKTsgfSB9PkY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignRycpOyB9IH0+Rzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdIJyk7IH0gfT5IPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0onKTsgfSB9Pko8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignSycpOyB9IH0+Szwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdMJyk7IH0gfT5MPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNrdjJSb3czXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignWicpOyB9IH0+Wjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdYJyk7IH0gfT5YPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0MnKTsgfSB9PkM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignVicpOyB9IH0+Vjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdCJyk7IH0gfT5CPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ04nKTsgfSB9Pk48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignTScpOyB9IH0+TTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IG5leHRXb3JkLmxlbmd0aCA+IDAgJiYgaGFuZGxlRGVsZXRlTGV0dGVyKCk7IH0gfSBjbGFzcz1cInRtX0JhY2tzcGFjZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge25leHRXb3JkLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRtX0tleUdvRGl2XCI+PGJ1dHRvbiBrZXk9XCJrZXlHb1wiIG9uQ2xpY2s9e2FjY2VwdE5leHRXb3JkfSBjbGFzc05hbWU9XCJ0bV9LZXlHb1wiPlNVQk1JVCBXT1JEPC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IFNvbHV0aW9uU2VjdGlvbiA9IDxkaXYgY2xhc3NOYW1lPVwidG1fc29sdXRpb25PdXRlckRpdlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG1fc29sdXRpb25EaXZcIj5cclxuICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+e3B1enpsZS5zdGFydFdvcmR9PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIHt3b3Jkcy5tYXAoKHcsaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgdXNlcldvcmQke2l9YH0+PHRkPnt3fTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICB7IXNvbHZlZCAmJiA8dHI+PHRkPi4uLjwvdGQ+PC90cj59XHJcbiAgICAgICAgICAgICAgICAgICAgeyFzb2x2ZWQgJiYgbmV4dFdvcmQubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRtX0tleWVkV29yZCBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtBcnJheS5mcm9tKG5leHRXb3JkKS5tYXAoKGwsaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YG54d2Qke2l9YH0+e2x9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7IXNvbHZlZCAmJiA8dHI+PHRkPi4uLjwvdGQ+PC90cj59XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD57cHV6emxlLnRhcmdldFdvcmR9PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7c29sdmVkID9cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidG1fY29uZ3JhdHNcIj7wn5GP8J+PvSBTb2x2ZWQgaW4ge3dvcmRzLmxlbmd0aCArIDF9IG1vdmVzIPCfkY/wn4+9PC9wPlxyXG4gICAgICAgIDpcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxNb2JpbGVPbmx5Vmlldz5cclxuICAgICAgICAgICAgICAgICAgICB7U2hvd0tleWJvYXJkfVxyXG4gICAgICAgICAgICAgICAgPC9Nb2JpbGVPbmx5Vmlldz5cclxuICAgICAgICAgICAgICAgIDxCcm93c2VyVmlldz5cclxuICAgICAgICAgICAgICAgICAgICB7U2hvd0tleWJvYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInRtX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTmV4dCBXb3JkOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e25leHRXb3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0TmV4dFdvcmQoZS50YXJnZXQudmFsdWUpO319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXsoZSkgPT4ge2Uua2V5Q29kZSA9PT0gMTMgJiYgYWNjZXB0TmV4dFdvcmQ7fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXthY2NlcHROZXh0V29yZH0+U1VCTUlUPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9Ccm93c2VyVmlldz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG1fbGFzdGJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7d29yZHMubGVuZ3RoID4gMCAmJiBcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtsZXQgbmV3V29yZHMgPSBbLi4ud29yZHNdOyBuZXdXb3Jkcy5wb3AoKTsgc2V0V29yZHMobmV3V29yZHMpO319XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJSZW1vdmUgbGFzdCBlbnRlcmVkIHdvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVU5ET1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICB7d29yZHMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge3NldFdvcmRzKFtdKTsgc2V0TmV4dFdvcmQoJycpO319XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJSZW1vdmUgYWxsIGVudGVyIHdvcmRzXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJFU0VUXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge2FsZXJ0KCdWYWxpZCBuZXh0IHdvcmQgb3B0aW9uczpcXG5Td2FwIG9uZSBsZXR0ZXIsIGUuZy4gQ0FUIHRvIENPVFxcbkRyb3Agb25lIGxldHRlciwgZS5nLiBTV0lHIHRvIFdJR1xcbkluc2VydCBvbmUgbGV0dGVyLCBlLmcuIE1BVCB0byBNQVRILCBvciBISVAgdG8gV0hJUFxcbkFuYWdyYW0sIGUuZy4gQUNUIHRvIENBVCcpO319XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJTaG93IGluc3RydWN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBIRUxQXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0bV9xdWl0XCIgb25DbGljaz17KCkgPT4ge3F1aXRUaGlzUHV6emxlKCk7fX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlF1aXQgdGhpcyBwdXp6bGUuIFlvdSBjYW4gc3RhcnQgYW5vdGhlci5cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUVVJVFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIFRyYW5zbW9ncmlmeVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhzb2x2ZWQgfHwgIXNvbHZpbmcpICYmIDx0cj48dGQ+e0dhbWVTdGFydFNlY3Rpb259PC90ZD48L3RyPn1cclxuICAgICAgICAgICAgICAgICAgICB7cHV6emxlICYmIHB1enpsZS5zdGFydFdvcmQgJiYgPHRyPjx0ZD57UHV6emxlU2VjdGlvbn08L3RkPjwvdHI+fVxyXG4gICAgICAgICAgICAgICAgICAgIHtwdXp6bGUgJiYgcHV6emxlLnN0YXJ0V29yZCAmJiA8dHI+PHRkPntTb2x1dGlvblNlY3Rpb259PC90ZD48L3RyPn1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7cHV6emxlICYmIHB1enpsZS5ub3RlcyAmJiBwdXp6bGUubm90ZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwdXp6bGUubm90ZXMubWFwKChuLGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtgbm90ZSR7aX1gfT57bn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmFuc21vZ3JpZnk7Il0sInNvdXJjZVJvb3QiOiIifQ==