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
/* harmony import */ var _lib_wordfunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/wordfunctions */ "./lib/wordfunctions.js");
/* harmony import */ var _wi_showinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wi/showinfo */ "./pages/wi/showinfo.js");
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
      if (!(await (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_2__.isWordValid)(newWord))) {
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

    return (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_2__.areAnagrams)(prevWord, newWord) || (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_2__.countSwaps)(prevWord, newWord) === 1 || (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_2__.isDrop)(prevWord, newWord) || (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_2__.isDrop)(newWord, prevWord);
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
          }, undefined), !solved && nextWord.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: nextWord
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 60
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 56
          }, undefined), !solved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: "..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 37
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 33
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: puzzle.targetWord
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
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
      lineNumber: 208,
      columnNumber: 13
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [ShowKeyboard, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
          lineNumber: 214,
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
          lineNumber: 220,
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
          lineNumber: 225,
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
          lineNumber: 230,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 192,
    columnNumber: 29
  }, undefined);

  const HintSection = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wi_showinfo__WEBPACK_IMPORTED_MODULE_3__.default, {
      word: puzzle.startWord,
      showInserts: "Y",
      showSwaps: "Y",
      showAnagrams: "Y",
      showDrops: "Y",
      removeEntry: () => {},
      entryIndex: 0
    }, `hint0`, false, {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 9
    }, undefined), words.map((g, gi) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wi_showinfo__WEBPACK_IMPORTED_MODULE_3__.default, {
      word: g,
      showInserts: "Y",
      showSwaps: "Y",
      showAnagrams: "Y",
      showDrops: "Y",
      removeEntry: () => {
        let newWords = [...words];
        newWords.pop();
        setWords(newWords);
      },
      entryIndex: gi + 1
    }, `hint${gi + 1}`, false, {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 13
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 239,
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
          lineNumber: 252,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: [(solved || !solving) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: GameStartSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 50
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 46
        }, undefined), puzzle && puzzle.startWord && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: PuzzleSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 56
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 52
        }, undefined), puzzle && puzzle.startWord && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: SolutionSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 56
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 52
        }, undefined), puzzle && puzzle.startWord && !solved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: HintSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 67
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 63
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: puzzle && puzzle.notes && puzzle.notes.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trDanger",
        children: puzzle.notes.map((n, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: n
        }, `note${i}`, false, {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 248,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG0vdG0uanMiXSwibmFtZXMiOlsiVHJhbnNtb2dyaWZ5Iiwic2V0V2hlcmV0byIsImtleWJvYXJkVmVyc2lvbiIsInNldEtleWJvYXJkVmVyc2lvbiIsInVzZVN0YXRlIiwibnVtTW92ZXMiLCJzZXROdW1Nb3ZlcyIsImJhc2V1cmwiLCJudW1Nb3Zlc0FycmF5IiwicHV6emxlIiwic2V0UHV6emxlIiwibmV4dFdvcmQiLCJzZXROZXh0V29yZCIsIndvcmRzIiwic2V0V29yZHMiLCJzb2x2ZWQiLCJzZXRTb2x2ZWQiLCJzb2x2aW5nIiwic2V0U29sdmluZyIsImNhbGxGb3JQdXp6bGUiLCJkYXRhIiwibmV3U29sdmluZyIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZXJyb3IiLCJub3RlcyIsImNvbnNvbGUiLCJsb2ciLCJxdWl0VGhpc1B1enpsZSIsImhhbmRsZUlucHV0TGV0dGVyIiwibGV0dGVyIiwic29mYXIiLCJoYW5kbGVEZWxldGVMZXR0ZXIiLCJsZW5ndGgiLCJBcnJheSIsImZyb20iLCJwb3AiLCJuZXdzb2ZhciIsImpvaW4iLCJhY2NlcHROZXh0V29yZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByZXZXb3JkIiwic3RhcnRXb3JkIiwibmV3V29yZCIsInZhbGlkTW92ZSIsImlzV29yZFZhbGlkIiwiYWxlcnQiLCJsYXN0V29yZCIsInRhcmdldFdvcmQiLCJuZXdXb3JkcyIsInB1c2giLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJhcmVBbmFncmFtcyIsImNvdW50U3dhcHMiLCJpc0Ryb3AiLCJHYW1lU3RhcnRTZWN0aW9uIiwibWFwIiwibiIsIlB1enpsZVNlY3Rpb24iLCJTaG93S2V5Ym9hcmQiLCJTb2x1dGlvblNlY3Rpb24iLCJ3IiwiaSIsIkhpbnRTZWN0aW9uIiwiZyIsImdpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1B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QU0sSUFBSUEsTUFBTSxDQUFDb0MsU0FBakIsSUFBOEIsQ0FBQzlCLE1BQS9CLGlCQUF5QztBQUFBLGlDQUFJO0FBQUEsc0JBQUtvRDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUo5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBKLGVBZUk7QUFBQSxnQkFDSzFELE1BQU0sSUFBSUEsTUFBTSxDQUFDa0IsS0FBakIsSUFBMEJsQixNQUFNLENBQUNrQixLQUFQLENBQWFRLE1BQWIsR0FBc0IsQ0FBaEQsaUJBQ0Q7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQSxrQkFDSzFCLE1BQU0sQ0FBQ2tCLEtBQVAsQ0FBYWlDLEdBQWIsQ0FBaUIsQ0FBQ0MsQ0FBRCxFQUFHSyxDQUFILGtCQUNkO0FBQUEsb0JBQXFCTDtBQUFyQixXQUFTLE9BQU1LLENBQUUsRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBMkJILENBN1FEOztHQUFNbEUsWTs7S0FBQUEsWTtBQStRTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMWY2NWI1ZDUwNGEwMTFmY2Q3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY291bnRTd2FwcywgYXJlQW5hZ3JhbXMsIGlzRHJvcCwgaXNXb3JkVmFsaWQgfSBmcm9tICcuLi8uLi9saWIvd29yZGZ1bmN0aW9ucyc7XHJcbmltcG9ydCBTaG93aW5mbyBmcm9tICcuLi93aS9zaG93aW5mbydcclxuXHJcbmNvbnN0IFRyYW5zbW9ncmlmeSA9ICh7c2V0V2hlcmV0b30pID0+IHtcclxuICAgIGNvbnN0IFtrZXlib2FyZFZlcnNpb24sIHNldEtleWJvYXJkVmVyc2lvbl0gPSB1c2VTdGF0ZSgnY2t2MScpO1xyXG4gICAgY29uc3QgW251bU1vdmVzLCBzZXROdW1Nb3Zlc10gPSB1c2VTdGF0ZSgyKTtcclxuICAgIGNvbnN0IGJhc2V1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tJztcclxuICAgIGNvbnN0IG51bU1vdmVzQXJyYXkgPSBbMiwzLDQsNSw2LDcsOCw5XTtcclxuICAgIGNvbnN0IFtwdXp6bGUsIHNldFB1enpsZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbbmV4dFdvcmQsIHNldE5leHRXb3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt3b3Jkcywgc2V0V29yZHNdID0gdXNlU3RhdGUoW10pOyAvLyBVc2VycyB3b3Jkc1xyXG4gICAgY29uc3QgW3NvbHZlZCwgc2V0U29sdmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzb2x2aW5nLCBzZXRTb2x2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNhbGxGb3JQdXp6bGUgPSBhc3luYygpID0+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgICAgIGxldCBuZXdTb2x2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHVybCA9IGAke2Jhc2V1cmx9L0VOQUJMRTJLP3RyYW5zbW9ncmlmeT10cnVlJm51bU1vdmVzPSR7bnVtTW92ZXN9YDtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgICAgICBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgbmV3U29sdmluZyA9IHRydWU7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgZGF0YS5ub3RlcyA9IFtcIlByb2JsZW0gd2l0aCB0aGUgc2VydmVyLiBTb3JyeSBhYm91dCB0aGF0LlwiXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRQdXp6bGUoZGF0YSk7XHJcbiAgICAgICAgc2V0V29yZHMoW10pO1xyXG4gICAgICAgIHNldE5leHRXb3JkKCcnKTtcclxuICAgICAgICBzZXRTb2x2ZWQoZmFsc2UpO1xyXG4gICAgICAgIHNldFNvbHZpbmcobmV3U29sdmluZyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBxdWl0VGhpc1B1enpsZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRTb2x2aW5nKGZhbHNlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUlucHV0TGV0dGVyID0gKGxldHRlcikgPT4ge1xyXG4gICAgICAgIGxldCBzb2ZhciA9IG5leHRXb3JkICsgbGV0dGVyO1xyXG4gICAgICAgIHNldE5leHRXb3JkKHNvZmFyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZUxldHRlciA9ICgpID0+IHtcclxuICAgICAgICBpZiAobmV4dFdvcmQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgc29mYXIgPSBBcnJheS5mcm9tKG5leHRXb3JkKTtcclxuICAgICAgICAgICAgc29mYXIucG9wKCk7XHJcbiAgICAgICAgICAgIGxldCBuZXdzb2ZhciA9IHNvZmFyLmpvaW4oJycpO1xyXG4gICAgICAgICAgICBzZXROZXh0V29yZChuZXdzb2Zhcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgYWNjZXB0TmV4dFdvcmQgPSBhc3luYyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBwcmV2V29yZCA9ICh3b3Jkcy5sZW5ndGggPT09IDAgPyBwdXp6bGUuc3RhcnRXb3JkIDogd29yZHNbd29yZHMubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgIGxldCBuZXdXb3JkID0gbmV4dFdvcmQ7XHJcbiAgICAgICAgaWYgKHZhbGlkTW92ZShuZXdXb3JkLCBwcmV2V29yZCkpIHtcclxuICAgICAgICAgICAgaWYgKCFhd2FpdCBpc1dvcmRWYWxpZChuZXdXb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYCR7bmV3V29yZH0gaXMgbm90IGEgdmFsaWQgd29yZGApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxhc3RXb3JkID0gcHV6emxlLnRhcmdldFdvcmQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3V29yZHMgPSBbLi4ud29yZHNdO1xyXG4gICAgICAgICAgICAgICAgbmV3V29yZHMucHVzaChuZXdXb3JkKTtcclxuICAgICAgICAgICAgICAgIHNldFdvcmRzKG5ld1dvcmRzKTtcclxuICAgICAgICAgICAgICAgIHNldE5leHRXb3JkKCcnKTsgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRNb3ZlKG5ld1dvcmQsIGxhc3RXb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNvbHZlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdPbmx5IGFuYWdyYW1zLCBkcm9wcywgc3dhcHMgYW5kIGluc2VydHMgYWxsb3dlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB2YWxpZE1vdmUgPSAocHJldldvcmQ9XCJcIiwgbmV3V29yZD1cIlwiKSA9PiB7XHJcbiAgICAgICAgcHJldldvcmQgPSBwcmV2V29yZC50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBuZXdXb3JkID0gbmV3V29yZC50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAocHJldldvcmQgPT09IG5ld1dvcmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKGFyZUFuYWdyYW1zKHByZXZXb3JkLCBuZXdXb3JkKVxyXG4gICAgICAgICAgICB8fCBjb3VudFN3YXBzKHByZXZXb3JkLCBuZXdXb3JkKSA9PT0gMVxyXG4gICAgICAgICAgICB8fCBpc0Ryb3AocHJldldvcmQsIG5ld1dvcmQpXHJcbiAgICAgICAgICAgIHx8IGlzRHJvcChuZXdXb3JkLCBwcmV2V29yZClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgR2FtZVN0YXJ0U2VjdGlvbiA9IDxkaXYgY2xhc3NOYW1lPVwidG1fbnVtTW92ZXNEaXZcIj5cclxuICAgICAgICA8aDM+TnVtYmVyIE9mIE1vdmVzPC9oMz5cclxuICAgICAgICB7bnVtTW92ZXNBcnJheS5tYXAoKG4pID0+IChcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2B0bV8ke24gPT09IG51bU1vdmVzID8gJ251bU1vdmVzU2VsZWN0ZWQnIDogJ251bU1vdmVzVW5zZWxlY3RlZCd9YH1cclxuICAgICAgICAgICAgICAgIGtleT17YGNob29zZU51bU1vdmVzJHtufWB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldE51bU1vdmVzKG4pOyB9IH1cclxuICAgICAgICAgICAgPntufVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRtX3N0YXJ0UHV6emxlRGl2XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwic3RhcnRQdXp6bGVcIiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHsgY2FsbEZvclB1enpsZSgpOyB9IH0+XHJcbiAgICAgICAgICAgICAgICBTdGFydCBQdXp6bGVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbiAgICBjb25zdCBQdXp6bGVTZWN0aW9uID0gPGRpdiBjbGFzc05hbWU9XCJ0bV9wdXp6bGVEaXZcIj5cclxuICAgICAgICA8c3Bhbj57cHV6emxlLnN0YXJ0V29yZH08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+dG88L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+e3B1enpsZS50YXJnZXRXb3JkfTwvc3Bhbj5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxzcGFuPlRhcmdldDo8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+e3B1enpsZS5udW1Nb3Zlc308L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+bW92ZXM8L3NwYW4+XHJcbiAgICA8L2Rpdj47XHJcbiAgICBjb25zdCBTaG93S2V5Ym9hcmQgPSA8ZGl2PlxyXG4gICAgICAgIHtrZXlib2FyZFZlcnNpb24gPT09ICdja3YxJyA/XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tS2V5Ym9hcmRWMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hrYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwic3dpdGNoYmt2MVwiIG9uQ2xpY2s9eygpID0+IHtzZXRLZXlib2FyZFZlcnNpb24oJ2NrdjInKTt9fT5zd2l0Y2gga2V5Ym9hcmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJja3YxUm93MVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1EnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgUVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdXJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIFdcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignRScpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBFXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1InKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgUlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdUJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIFRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignWScpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBZXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1UnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgVVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdJJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIElcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignTycpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBPXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1AnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgUFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJja3YxUm93MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0EnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgQVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdTJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIFNcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignRCcpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBEXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0YnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgRlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdHJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIEdcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignSCcpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBIXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0onKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgSlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdLJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIEtcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignTCcpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBMXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNrdjFSb3czXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignWicpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBaXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1gnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgWFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdDJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIENcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignVicpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBWXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0InKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgQlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdOJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIE5cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignTScpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBNXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgbmV4dFdvcmQubGVuZ3RoID4gMCAmJiBoYW5kbGVEZWxldGVMZXR0ZXIoKTsgfSB9IGNsYXNzPVwidG1fQmFja3NwYWNlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7bmV4dFdvcmQubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG1fS2V5R29EaXZcIj48YnV0dG9uIGtleT1cImtleUdvXCIgb25DbGljaz17YWNjZXB0TmV4dFdvcmR9IGNsYXNzTmFtZT1cInRtX0tleUdvXCI+U1VCTUlUIFdPUkQ8L2J1dHRvbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIH0gICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgOiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21LZXlib2FyZFYyIFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hrYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwic3dpdGNoYmt2MlwiIG9uQ2xpY2s9eygpID0+IHtzZXRLZXlib2FyZFZlcnNpb24oJ2NrdjEnKTt9fT5zd2l0Y2gga2V5Ym9hcmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJja3YyUm93MVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1EnKTsgfSB9PlE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignVycpOyB9IH0+Vzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdFJyk7IH0gfT5FPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1InKTsgfSB9PlI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignVCcpOyB9IH0+VDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdZJyk7IH0gfT5ZPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1UnKTsgfSB9PlU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignSScpOyB9IH0+STwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdPJyk7IH0gfT5PPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1AnKTsgfSB9PlA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2t2MlJvdzJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdBJyk7IH0gfT5BPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1MnKTsgfSB9PlM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignRCcpOyB9IH0+RDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdGJyk7IH0gfT5GPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0cnKTsgfSB9Pkc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignSCcpOyB9IH0+SDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdKJyk7IH0gfT5KPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0snKTsgfSB9Pks8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignTCcpOyB9IH0+TDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJja3YyUm93M1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1onKTsgfSB9Plo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignWCcpOyB9IH0+WDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdDJyk7IH0gfT5DPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1YnKTsgfSB9PlY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignQicpOyB9IH0+Qjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdOJyk7IH0gfT5OPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ00nKTsgfSB9Pk08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBuZXh0V29yZC5sZW5ndGggPiAwICYmIGhhbmRsZURlbGV0ZUxldHRlcigpOyB9IH0gY2xhc3M9XCJ0bV9CYWNrc3BhY2VcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtuZXh0V29yZC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bV9LZXlHb0RpdlwiPjxidXR0b24ga2V5PVwia2V5R29cIiBvbkNsaWNrPXthY2NlcHROZXh0V29yZH0gY2xhc3NOYW1lPVwidG1fS2V5R29cIj5TVUJNSVQgV09SRDwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICA8L2Rpdj47XHJcbiAgICBjb25zdCBTb2x1dGlvblNlY3Rpb24gPSA8ZGl2IGNsYXNzTmFtZT1cInRtX3NvbHV0aW9uT3V0ZXJEaXZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRtX3NvbHV0aW9uRGl2XCI+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPntwdXp6bGUuc3RhcnRXb3JkfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICB7d29yZHMubWFwKCh3LGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YHVzZXJXb3JkJHtpfWB9Pjx0ZD57d308L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgeyFzb2x2ZWQgJiYgPHRyPjx0ZD4uLi48L3RkPjwvdHI+fVxyXG4gICAgICAgICAgICAgICAgICAgIHshc29sdmVkICYmIG5leHRXb3JkLmxlbmd0aCA+IDAgJiYgPHRyPjx0ZD57bmV4dFdvcmR9PC90ZD48L3RyPn1cclxuICAgICAgICAgICAgICAgICAgICB7IXNvbHZlZCAmJiA8dHI+PHRkPi4uLjwvdGQ+PC90cj59XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD57cHV6emxlLnRhcmdldFdvcmR9PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7c29sdmVkID9cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidG1fY29uZ3JhdHNcIj7wn5GP8J+PvSBTb2x2ZWQgaW4ge3dvcmRzLmxlbmd0aCArIDF9IG1vdmVzIPCfkY/wn4+9PC9wPlxyXG4gICAgICAgIDpcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtTaG93S2V5Ym9hcmR9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRtX2xhc3RidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3dvcmRzLmxlbmd0aCA+IDAgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7bGV0IG5ld1dvcmRzID0gWy4uLndvcmRzXTsgbmV3V29yZHMucG9wKCk7IHNldFdvcmRzKG5ld1dvcmRzKTt9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiUmVtb3ZlIGxhc3QgZW50ZXJlZCB3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVORE9cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAge3dvcmRzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtzZXRXb3JkcyhbXSk7IHNldE5leHRXb3JkKCcnKTt9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiUmVtb3ZlIGFsbCBlbnRlciB3b3Jkc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSRVNFVFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHthbGVydCgnVmFsaWQgbmV4dCB3b3JkIG9wdGlvbnM6XFxuU3dhcCBvbmUgbGV0dGVyLCBlLmcuIENBVCB0byBDT1RcXG5Ecm9wIG9uZSBsZXR0ZXIsIGUuZy4gU1dJRyB0byBXSUdcXG5JbnNlcnQgb25lIGxldHRlciwgZS5nLiBNQVQgdG8gTUFUSCwgb3IgSElQIHRvIFdISVBcXG5BbmFncmFtLCBlLmcuIEFDVCB0byBDQVQnKTt9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiU2hvdyBpbnN0cnVjdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSEVMUFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidG1fcXVpdFwiIG9uQ2xpY2s9eygpID0+IHtxdWl0VGhpc1B1enpsZSgpO319XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJRdWl0IHRoaXMgcHV6emxlLiBZb3UgY2FuIHN0YXJ0IGFub3RoZXIuXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFFVSVRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICAgIGNvbnN0IEhpbnRTZWN0aW9uID0gPGRpdj5cclxuICAgICAgICA8U2hvd2luZm8ga2V5PXtgaGludDBgfSB3b3JkPXtwdXp6bGUuc3RhcnRXb3JkfSBzaG93SW5zZXJ0cz1cIllcIiBzaG93U3dhcHM9XCJZXCIgc2hvd0FuYWdyYW1zPVwiWVwiIHNob3dEcm9wcz1cIllcIlxyXG4gICAgICAgICAgICAgcmVtb3ZlRW50cnk9eygpID0+IHt9fSBlbnRyeUluZGV4PXswfS8+XHJcbiAgICAgICAge3dvcmRzLm1hcCgoZyxnaSkgPT4gKFxyXG4gICAgICAgICAgICA8U2hvd2luZm8ga2V5PXtgaGludCR7Z2krMX1gfSB3b3JkPXtnfSBzaG93SW5zZXJ0cz1cIllcIiBzaG93U3dhcHM9XCJZXCIgc2hvd0FuYWdyYW1zPVwiWVwiIHNob3dEcm9wcz1cIllcIlxyXG4gICAgICAgICAgICAgcmVtb3ZlRW50cnk9eygpID0+IHtsZXQgbmV3V29yZHMgPSBbLi4ud29yZHNdOyBuZXdXb3Jkcy5wb3AoKTsgc2V0V29yZHMobmV3V29yZHMpO319IGVudHJ5SW5kZXg9e2dpKzF9Lz5cclxuICAgICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIFRyYW5zbW9ncmlmeVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhzb2x2ZWQgfHwgIXNvbHZpbmcpICYmIDx0cj48dGQ+e0dhbWVTdGFydFNlY3Rpb259PC90ZD48L3RyPn1cclxuICAgICAgICAgICAgICAgICAgICB7cHV6emxlICYmIHB1enpsZS5zdGFydFdvcmQgJiYgPHRyPjx0ZD57UHV6emxlU2VjdGlvbn08L3RkPjwvdHI+fVxyXG4gICAgICAgICAgICAgICAgICAgIHtwdXp6bGUgJiYgcHV6emxlLnN0YXJ0V29yZCAmJiA8dHI+PHRkPntTb2x1dGlvblNlY3Rpb259PC90ZD48L3RyPn1cclxuICAgICAgICAgICAgICAgICAgICB7cHV6emxlICYmIHB1enpsZS5zdGFydFdvcmQgJiYgIXNvbHZlZCAmJiA8dHI+PHRkPntIaW50U2VjdGlvbn08L3RkPjwvdHI+fVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtwdXp6bGUgJiYgcHV6emxlLm5vdGVzICYmIHB1enpsZS5ub3Rlcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyRGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3B1enpsZS5ub3Rlcy5tYXAoKG4saSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2Bub3RlJHtpfWB9PntufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYW5zbW9ncmlmeTsiXSwic291cmNlUm9vdCI6IiJ9