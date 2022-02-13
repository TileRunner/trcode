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
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "switchkb",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG0vdG0uanMiXSwibmFtZXMiOlsiVHJhbnNtb2dyaWZ5Iiwic2V0V2hlcmV0byIsImtleWJvYXJkVmVyc2lvbiIsInNldEtleWJvYXJkVmVyc2lvbiIsInVzZVN0YXRlIiwibnVtTW92ZXMiLCJzZXROdW1Nb3ZlcyIsImJhc2V1cmwiLCJudW1Nb3Zlc0FycmF5IiwicHV6emxlIiwic2V0UHV6emxlIiwibmV4dFdvcmQiLCJzZXROZXh0V29yZCIsIndvcmRzIiwic2V0V29yZHMiLCJzb2x2ZWQiLCJzZXRTb2x2ZWQiLCJzb2x2aW5nIiwic2V0U29sdmluZyIsImNhbGxGb3JQdXp6bGUiLCJkYXRhIiwibmV3U29sdmluZyIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZXJyb3IiLCJub3RlcyIsImNvbnNvbGUiLCJsb2ciLCJxdWl0VGhpc1B1enpsZSIsImhhbmRsZUlucHV0TGV0dGVyIiwibGV0dGVyIiwic29mYXIiLCJoYW5kbGVEZWxldGVMZXR0ZXIiLCJsZW5ndGgiLCJBcnJheSIsImZyb20iLCJwb3AiLCJuZXdzb2ZhciIsImpvaW4iLCJhY2NlcHROZXh0V29yZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByZXZXb3JkIiwic3RhcnRXb3JkIiwibmV3V29yZCIsInZhbGlkTW92ZSIsImlzV29yZFZhbGlkIiwiYWxlcnQiLCJsYXN0V29yZCIsInRhcmdldFdvcmQiLCJuZXdXb3JkcyIsInB1c2giLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJhcmVBbmFncmFtcyIsImNvdW50U3dhcHMiLCJpc0Ryb3AiLCJHYW1lU3RhcnRTZWN0aW9uIiwibWFwIiwibiIsIlB1enpsZVNlY3Rpb24iLCJTaG93S2V5Ym9hcmQiLCJTb2x1dGlvblNlY3Rpb24iLCJ3IiwiaSIsImwiLCJ0YXJnZXQiLCJ2YWx1ZSIsImtleUNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7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TUFBTSxDQUFDa0IsS0FBakIsSUFBMEJsQixNQUFNLENBQUNrQixLQUFQLENBQWFRLE1BQWIsR0FBc0IsQ0FBaEQsaUJBQ0Q7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQSxrQkFDSzFCLE1BQU0sQ0FBQ2tCLEtBQVAsQ0FBYWlDLEdBQWIsQ0FBaUIsQ0FBQ0MsQ0FBRCxFQUFHSyxDQUFILGtCQUNkO0FBQUEsb0JBQXFCTDtBQUFyQixXQUFTLE9BQU1LLENBQUUsRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBMEJILENBdlJEOztHQUFNbEUsWTs7S0FBQUEsWTtBQXlSTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mYjk4MzI0MmE1YmYyYmNiMDYxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnJvd3NlclZpZXcsIE1vYmlsZU9ubHlWaWV3IH0gZnJvbSBcInJlYWN0LWRldmljZS1kZXRlY3RcIjtcclxuaW1wb3J0IHsgY291bnRTd2FwcywgYXJlQW5hZ3JhbXMsIGlzRHJvcCwgaXNXb3JkVmFsaWQgfSBmcm9tICcuLi8uLi9saWIvd29yZGZ1bmN0aW9ucyc7XHJcblxyXG5jb25zdCBUcmFuc21vZ3JpZnkgPSAoe3NldFdoZXJldG99KSA9PiB7XHJcbiAgICBjb25zdCBba2V5Ym9hcmRWZXJzaW9uLCBzZXRLZXlib2FyZFZlcnNpb25dID0gdXNlU3RhdGUoJ2NrdjEnKTtcclxuICAgIGNvbnN0IFtudW1Nb3Zlcywgc2V0TnVtTW92ZXNdID0gdXNlU3RhdGUoMik7XHJcbiAgICBjb25zdCBiYXNldXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbSc7XHJcbiAgICBjb25zdCBudW1Nb3Zlc0FycmF5ID0gWzIsMyw0LDUsNiw3LDgsOV07XHJcbiAgICBjb25zdCBbcHV6emxlLCBzZXRQdXp6bGVdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW25leHRXb3JkLCBzZXROZXh0V29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbd29yZHMsIHNldFdvcmRzXSA9IHVzZVN0YXRlKFtdKTsgLy8gVXNlcnMgd29yZHNcclxuICAgIGNvbnN0IFtzb2x2ZWQsIHNldFNvbHZlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc29sdmluZywgc2V0U29sdmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBjYWxsRm9yUHV6emxlID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcclxuICAgICAgICBsZXQgbmV3U29sdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSBgJHtiYXNldXJsfS9FTkFCTEUySz90cmFuc21vZ3JpZnk9dHJ1ZSZudW1Nb3Zlcz0ke251bU1vdmVzfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICAgICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG5ld1NvbHZpbmcgPSB0cnVlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGRhdGEubm90ZXMgPSBbXCJQcm9ibGVtIHdpdGggdGhlIHNlcnZlci4gU29ycnkgYWJvdXQgdGhhdC5cIl07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0UHV6emxlKGRhdGEpO1xyXG4gICAgICAgIHNldFdvcmRzKFtdKTtcclxuICAgICAgICBzZXROZXh0V29yZCgnJyk7XHJcbiAgICAgICAgc2V0U29sdmVkKGZhbHNlKTtcclxuICAgICAgICBzZXRTb2x2aW5nKG5ld1NvbHZpbmcpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcXVpdFRoaXNQdXp6bGUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U29sdmluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dExldHRlciA9IChsZXR0ZXIpID0+IHtcclxuICAgICAgICBsZXQgc29mYXIgPSBuZXh0V29yZCArIGxldHRlcjtcclxuICAgICAgICBzZXROZXh0V29yZChzb2Zhcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGVMZXR0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG5leHRXb3JkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHNvZmFyID0gQXJyYXkuZnJvbShuZXh0V29yZCk7XHJcbiAgICAgICAgICAgIHNvZmFyLnBvcCgpO1xyXG4gICAgICAgICAgICBsZXQgbmV3c29mYXIgPSBzb2Zhci5qb2luKCcnKTtcclxuICAgICAgICAgICAgc2V0TmV4dFdvcmQobmV3c29mYXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGFjY2VwdE5leHRXb3JkID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgcHJldldvcmQgPSAod29yZHMubGVuZ3RoID09PSAwID8gcHV6emxlLnN0YXJ0V29yZCA6IHdvcmRzW3dvcmRzLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICBsZXQgbmV3V29yZCA9IG5leHRXb3JkO1xyXG4gICAgICAgIGlmICh2YWxpZE1vdmUobmV3V29yZCwgcHJldldvcmQpKSB7XHJcbiAgICAgICAgICAgIGlmICghYXdhaXQgaXNXb3JkVmFsaWQobmV3V29yZCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGAke25ld1dvcmR9IGlzIG5vdCBhIHZhbGlkIHdvcmRgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBsYXN0V29yZCA9IHB1enpsZS50YXJnZXRXb3JkO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1dvcmRzID0gWy4uLndvcmRzXTtcclxuICAgICAgICAgICAgICAgIG5ld1dvcmRzLnB1c2gobmV3V29yZCk7XHJcbiAgICAgICAgICAgICAgICBzZXRXb3JkcyhuZXdXb3Jkcyk7XHJcbiAgICAgICAgICAgICAgICBzZXROZXh0V29yZCgnJyk7ICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkTW92ZShuZXdXb3JkLCBsYXN0V29yZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTb2x2ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnT25seSBhbmFncmFtcywgZHJvcHMsIHN3YXBzIGFuZCBpbnNlcnRzIGFsbG93ZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdmFsaWRNb3ZlID0gKHByZXZXb3JkPVwiXCIsIG5ld1dvcmQ9XCJcIikgPT4ge1xyXG4gICAgICAgIHByZXZXb3JkID0gcHJldldvcmQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgbmV3V29yZCA9IG5ld1dvcmQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKHByZXZXb3JkID09PSBuZXdXb3JkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChhcmVBbmFncmFtcyhwcmV2V29yZCwgbmV3V29yZClcclxuICAgICAgICAgICAgfHwgY291bnRTd2FwcyhwcmV2V29yZCwgbmV3V29yZCkgPT09IDFcclxuICAgICAgICAgICAgfHwgaXNEcm9wKHByZXZXb3JkLCBuZXdXb3JkKVxyXG4gICAgICAgICAgICB8fCBpc0Ryb3AobmV3V29yZCwgcHJldldvcmQpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IEdhbWVTdGFydFNlY3Rpb24gPSA8ZGl2IGNsYXNzTmFtZT1cInRtX251bU1vdmVzRGl2XCI+XHJcbiAgICAgICAgPGgzPk51bWJlciBPZiBNb3ZlczwvaDM+XHJcbiAgICAgICAge251bU1vdmVzQXJyYXkubWFwKChuKSA9PiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgdG1fJHtuID09PSBudW1Nb3ZlcyA/ICdudW1Nb3Zlc1NlbGVjdGVkJyA6ICdudW1Nb3Zlc1Vuc2VsZWN0ZWQnfWB9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2BjaG9vc2VOdW1Nb3ZlcyR7bn1gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXROdW1Nb3ZlcyhuKTsgfSB9XHJcbiAgICAgICAgICAgID57bn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bV9zdGFydFB1enpsZURpdlwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cInN0YXJ0UHV6emxlXCIgY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7IGNhbGxGb3JQdXp6bGUoKTsgfSB9PlxyXG4gICAgICAgICAgICAgICAgU3RhcnQgUHV6emxlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgUHV6emxlU2VjdGlvbiA9IDxkaXYgY2xhc3NOYW1lPVwidG1fcHV6emxlRGl2XCI+XHJcbiAgICAgICAgPHNwYW4+e3B1enpsZS5zdGFydFdvcmR9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPnRvPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPntwdXp6bGUudGFyZ2V0V29yZH08L3NwYW4+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8c3Bhbj5UYXJnZXQ6PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPntwdXp6bGUubnVtTW92ZXN9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPm1vdmVzPC9zcGFuPlxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgU2hvd0tleWJvYXJkID0gPGRpdj5cclxuICAgICAgICB7a2V5Ym9hcmRWZXJzaW9uID09PSAnY2t2MScgP1xyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbUtleWJvYXJkVjFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoa2JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cInN3aXRjaGJrdjFcIiBvbkNsaWNrPXsoKSA9PiB7c2V0S2V5Ym9hcmRWZXJzaW9uKCdja3YyJyk7fX0+c3dpdGNoIGtleWJvYXJkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2t2MVJvdzFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdRJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIFFcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignVycpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBXXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0UnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgRVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdSJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIFJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignVCcpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBUXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1knKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgWVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdVJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIFVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignSScpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBJXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ08nKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgT1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdQJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIFBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2t2MVJvdzJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdBJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIEFcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignUycpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBTXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0QnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgRFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdGJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIEZcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignRycpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBHXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0gnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgSFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdKJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIEpcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignSycpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBLXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0wnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgTFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJja3YxUm93M1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1onKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgWlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdYJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIFhcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignQycpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBDXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1YnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgVlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdCJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIEJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignTicpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBOXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ00nKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgTVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IG5leHRXb3JkLmxlbmd0aCA+IDAgJiYgaGFuZGxlRGVsZXRlTGV0dGVyKCk7IH0gfSBjbGFzcz1cInRtX0JhY2tzcGFjZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge25leHRXb3JkLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRtX0tleUdvRGl2XCI+PGJ1dHRvbiBrZXk9XCJrZXlHb1wiIG9uQ2xpY2s9e2FjY2VwdE5leHRXb3JkfSBjbGFzc05hbWU9XCJ0bV9LZXlHb1wiPlNVQk1JVCBXT1JEPC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDogXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tS2V5Ym9hcmRWMiBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJzd2l0Y2hia3YyXCIgY2xhc3NOYW1lPVwic3dpdGNoa2JcIiBvbkNsaWNrPXsoKSA9PiB7c2V0S2V5Ym9hcmRWZXJzaW9uKCdja3YxJyk7fX0+c3dpdGNoIGtleWJvYXJkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2t2MlJvdzFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdRJyk7IH0gfT5RPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1cnKTsgfSB9Plc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignRScpOyB9IH0+RTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdSJyk7IH0gfT5SPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1QnKTsgfSB9PlQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignWScpOyB9IH0+WTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdVJyk7IH0gfT5VPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0knKTsgfSB9Pkk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignTycpOyB9IH0+Tzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdQJyk7IH0gfT5QPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNrdjJSb3cyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignQScpOyB9IH0+QTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdTJyk7IH0gfT5TPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0QnKTsgfSB9PkQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignRicpOyB9IH0+Rjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdHJyk7IH0gfT5HPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0gnKTsgfSB9Pkg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignSicpOyB9IH0+Sjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdLJyk7IH0gfT5LPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0wnKTsgfSB9Pkw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2t2MlJvdzNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdaJyk7IH0gfT5aPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1gnKTsgfSB9Plg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignQycpOyB9IH0+Qzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdWJyk7IH0gfT5WPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0InKTsgfSB9PkI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignTicpOyB9IH0+Tjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdNJyk7IH0gfT5NPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgbmV4dFdvcmQubGVuZ3RoID4gMCAmJiBoYW5kbGVEZWxldGVMZXR0ZXIoKTsgfSB9IGNsYXNzPVwidG1fQmFja3NwYWNlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7bmV4dFdvcmQubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG1fS2V5R29EaXZcIj48YnV0dG9uIGtleT1cImtleUdvXCIgb25DbGljaz17YWNjZXB0TmV4dFdvcmR9IGNsYXNzTmFtZT1cInRtX0tleUdvXCI+U1VCTUlUIFdPUkQ8L2J1dHRvbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgU29sdXRpb25TZWN0aW9uID0gPGRpdiBjbGFzc05hbWU9XCJ0bV9zb2x1dGlvbk91dGVyRGl2XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bV9zb2x1dGlvbkRpdlwiPlxyXG4gICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD57cHV6emxlLnN0YXJ0V29yZH08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAge3dvcmRzLm1hcCgodyxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2B1c2VyV29yZCR7aX1gfT48dGQ+e3d9PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIHshc29sdmVkICYmIDx0cj48dGQ+Li4uPC90ZD48L3RyPn1cclxuICAgICAgICAgICAgICAgICAgICB7IXNvbHZlZCAmJiBuZXh0V29yZC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG1fS2V5ZWRXb3JkIGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0FycmF5LmZyb20obmV4dFdvcmQpLm1hcCgobCxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtgbnh3ZCR7aX1gfT57bH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHshc29sdmVkICYmIDx0cj48dGQ+Li4uPC90ZD48L3RyPn1cclxuICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPntwdXp6bGUudGFyZ2V0V29yZH08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtzb2x2ZWQgP1xyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0bV9jb25ncmF0c1wiPvCfkY/wn4+9IFNvbHZlZCBpbiB7d29yZHMubGVuZ3RoICsgMX0gbW92ZXMg8J+Rj/Cfj708L3A+XHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPE1vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgIHtTaG93S2V5Ym9hcmR9XHJcbiAgICAgICAgICAgICAgICA8L01vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgICAgICAgICAgPEJyb3dzZXJWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgIHtTaG93S2V5Ym9hcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidG1fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOZXh0IFdvcmQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17bmV4dFdvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtzZXROZXh0V29yZChlLnRhcmdldC52YWx1ZSk7fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiB7ZS5rZXlDb2RlID09PSAxMyAmJiBhY2NlcHROZXh0V29yZDt9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e2FjY2VwdE5leHRXb3JkfT5TVUJNSVQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L0Jyb3dzZXJWaWV3PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bV9sYXN0YnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt3b3Jkcy5sZW5ndGggPiAwICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge2xldCBuZXdXb3JkcyA9IFsuLi53b3Jkc107IG5ld1dvcmRzLnBvcCgpOyBzZXRXb3JkcyhuZXdXb3Jkcyk7fX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlJlbW92ZSBsYXN0IGVudGVyZWQgd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBVTkRPXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgIHt3b3Jkcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7c2V0V29yZHMoW10pOyBzZXROZXh0V29yZCgnJyk7fX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlJlbW92ZSBhbGwgZW50ZXIgd29yZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUkVTRVRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7YWxlcnQoJ1ZhbGlkIG5leHQgd29yZCBvcHRpb25zOlxcblN3YXAgb25lIGxldHRlciwgZS5nLiBDQVQgdG8gQ09UXFxuRHJvcCBvbmUgbGV0dGVyLCBlLmcuIFNXSUcgdG8gV0lHXFxuSW5zZXJ0IG9uZSBsZXR0ZXIsIGUuZy4gTUFUIHRvIE1BVEgsIG9yIEhJUCB0byBXSElQXFxuQW5hZ3JhbSwgZS5nLiBBQ1QgdG8gQ0FUJyk7fX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlNob3cgaW5zdHJ1Y3Rpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhFTFBcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRtX3F1aXRcIiBvbkNsaWNrPXsoKSA9PiB7cXVpdFRoaXNQdXp6bGUoKTt9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiUXVpdCB0aGlzIHB1enpsZS4gWW91IGNhbiBzdGFydCBhbm90aGVyLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRVUlUXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJCYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgVHJhbnNtb2dyaWZ5XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7KHNvbHZlZCB8fCAhc29sdmluZykgJiYgPHRyPjx0ZD57R2FtZVN0YXJ0U2VjdGlvbn08L3RkPjwvdHI+fVxyXG4gICAgICAgICAgICAgICAgICAgIHtwdXp6bGUgJiYgcHV6emxlLnN0YXJ0V29yZCAmJiA8dHI+PHRkPntQdXp6bGVTZWN0aW9ufTwvdGQ+PC90cj59XHJcbiAgICAgICAgICAgICAgICAgICAge3B1enpsZSAmJiBwdXp6bGUuc3RhcnRXb3JkICYmIDx0cj48dGQ+e1NvbHV0aW9uU2VjdGlvbn08L3RkPjwvdHI+fVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtwdXp6bGUgJiYgcHV6emxlLm5vdGVzICYmIHB1enpsZS5ub3Rlcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyRGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3B1enpsZS5ub3Rlcy5tYXAoKG4saSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2Bub3RlJHtpfWB9PntufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYW5zbW9ncmlmeTsiXSwic291cmNlUm9vdCI6IiJ9