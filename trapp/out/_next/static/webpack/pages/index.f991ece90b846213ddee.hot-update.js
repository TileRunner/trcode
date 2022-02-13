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
    }, `hint${puzzle.startWord}`, false, {
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
    }, `hint${g}`, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG0vdG0uanMiXSwibmFtZXMiOlsiVHJhbnNtb2dyaWZ5Iiwic2V0V2hlcmV0byIsImtleWJvYXJkVmVyc2lvbiIsInNldEtleWJvYXJkVmVyc2lvbiIsInVzZVN0YXRlIiwibnVtTW92ZXMiLCJzZXROdW1Nb3ZlcyIsImJhc2V1cmwiLCJudW1Nb3Zlc0FycmF5IiwicHV6emxlIiwic2V0UHV6emxlIiwibmV4dFdvcmQiLCJzZXROZXh0V29yZCIsIndvcmRzIiwic2V0V29yZHMiLCJzb2x2ZWQiLCJzZXRTb2x2ZWQiLCJzb2x2aW5nIiwic2V0U29sdmluZyIsImNhbGxGb3JQdXp6bGUiLCJkYXRhIiwibmV3U29sdmluZyIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZXJyb3IiLCJub3RlcyIsImNvbnNvbGUiLCJsb2ciLCJxdWl0VGhpc1B1enpsZSIsImhhbmRsZUlucHV0TGV0dGVyIiwibGV0dGVyIiwic29mYXIiLCJoYW5kbGVEZWxldGVMZXR0ZXIiLCJsZW5ndGgiLCJBcnJheSIsImZyb20iLCJwb3AiLCJuZXdzb2ZhciIsImpvaW4iLCJhY2NlcHROZXh0V29yZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByZXZXb3JkIiwic3RhcnRXb3JkIiwibmV3V29yZCIsInZhbGlkTW92ZSIsImlzV29yZFZhbGlkIiwiYWxlcnQiLCJsYXN0V29yZCIsInRhcmdldFdvcmQiLCJuZXdXb3JkcyIsInB1c2giLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJhcmVBbmFncmFtcyIsImNvdW50U3dhcHMiLCJpc0Ryb3AiLCJHYW1lU3RhcnRTZWN0aW9uIiwibWFwIiwibiIsIlB1enpsZVNlY3Rpb24iLCJTaG93S2V5Ym9hcmQiLCJTb2x1dGlvblNlY3Rpb24iLCJ3IiwiaSIsIkhpbnRTZWN0aW9uIiwiZyIsImdpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1B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QUhuQyxFQUlLdkQsTUFBTSxJQUFJQSxNQUFNLENBQUNvQyxTQUFqQixJQUE4QixDQUFDOUIsTUFBL0IsaUJBQXlDO0FBQUEsaUNBQUk7QUFBQSxzQkFBS29EO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSjlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEosZUFlSTtBQUFBLGdCQUNLMUQsTUFBTSxJQUFJQSxNQUFNLENBQUNrQixLQUFqQixJQUEwQmxCLE1BQU0sQ0FBQ2tCLEtBQVAsQ0FBYVEsTUFBYixHQUFzQixDQUFoRCxpQkFDRDtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLGtCQUNLMUIsTUFBTSxDQUFDa0IsS0FBUCxDQUFhaUMsR0FBYixDQUFpQixDQUFDQyxDQUFELEVBQUdLLENBQUgsa0JBQ2Q7QUFBQSxvQkFBcUJMO0FBQXJCLFdBQVMsT0FBTUssQ0FBRSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUEyQkgsQ0E3UUQ7O0dBQU1sRSxZOztLQUFBQSxZO0FBK1FOLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY5OTFlY2U5MGI4NDYyMTNkZGVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb3VudFN3YXBzLCBhcmVBbmFncmFtcywgaXNEcm9wLCBpc1dvcmRWYWxpZCB9IGZyb20gJy4uLy4uL2xpYi93b3JkZnVuY3Rpb25zJztcclxuaW1wb3J0IFNob3dpbmZvIGZyb20gJy4uL3dpL3Nob3dpbmZvJ1xyXG5cclxuY29uc3QgVHJhbnNtb2dyaWZ5ID0gKHtzZXRXaGVyZXRvfSkgPT4ge1xyXG4gICAgY29uc3QgW2tleWJvYXJkVmVyc2lvbiwgc2V0S2V5Ym9hcmRWZXJzaW9uXSA9IHVzZVN0YXRlKCdja3YxJyk7XHJcbiAgICBjb25zdCBbbnVtTW92ZXMsIHNldE51bU1vdmVzXSA9IHVzZVN0YXRlKDIpO1xyXG4gICAgY29uc3QgYmFzZXVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCcgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20nO1xyXG4gICAgY29uc3QgbnVtTW92ZXNBcnJheSA9IFsyLDMsNCw1LDYsNyw4LDldO1xyXG4gICAgY29uc3QgW3B1enpsZSwgc2V0UHV6emxlXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtuZXh0V29yZCwgc2V0TmV4dFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3dvcmRzLCBzZXRXb3Jkc10gPSB1c2VTdGF0ZShbXSk7IC8vIFVzZXJzIHdvcmRzXHJcbiAgICBjb25zdCBbc29sdmVkLCBzZXRTb2x2ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3NvbHZpbmcsIHNldFNvbHZpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2FsbEZvclB1enpsZSA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIGxldCBkYXRhID0ge307XHJcbiAgICAgICAgbGV0IG5ld1NvbHZpbmcgPSBmYWxzZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gYCR7YmFzZXVybH0vRU5BQkxFMks/dHJhbnNtb2dyaWZ5PXRydWUmbnVtTW92ZXM9JHtudW1Nb3Zlc31gO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgICAgIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBuZXdTb2x2aW5nID0gdHJ1ZTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBkYXRhLm5vdGVzID0gW1wiUHJvYmxlbSB3aXRoIHRoZSBzZXJ2ZXIuIFNvcnJ5IGFib3V0IHRoYXQuXCJdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFB1enpsZShkYXRhKTtcclxuICAgICAgICBzZXRXb3JkcyhbXSk7XHJcbiAgICAgICAgc2V0TmV4dFdvcmQoJycpO1xyXG4gICAgICAgIHNldFNvbHZlZChmYWxzZSk7XHJcbiAgICAgICAgc2V0U29sdmluZyhuZXdTb2x2aW5nKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHF1aXRUaGlzUHV6emxlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNvbHZpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRMZXR0ZXIgPSAobGV0dGVyKSA9PiB7XHJcbiAgICAgICAgbGV0IHNvZmFyID0gbmV4dFdvcmQgKyBsZXR0ZXI7XHJcbiAgICAgICAgc2V0TmV4dFdvcmQoc29mYXIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlTGV0dGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChuZXh0V29yZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBzb2ZhciA9IEFycmF5LmZyb20obmV4dFdvcmQpO1xyXG4gICAgICAgICAgICBzb2Zhci5wb3AoKTtcclxuICAgICAgICAgICAgbGV0IG5ld3NvZmFyID0gc29mYXIuam9pbignJyk7XHJcbiAgICAgICAgICAgIHNldE5leHRXb3JkKG5ld3NvZmFyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBhY2NlcHROZXh0V29yZCA9IGFzeW5jKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IHByZXZXb3JkID0gKHdvcmRzLmxlbmd0aCA9PT0gMCA/IHB1enpsZS5zdGFydFdvcmQgOiB3b3Jkc1t3b3Jkcy5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgbGV0IG5ld1dvcmQgPSBuZXh0V29yZDtcclxuICAgICAgICBpZiAodmFsaWRNb3ZlKG5ld1dvcmQsIHByZXZXb3JkKSkge1xyXG4gICAgICAgICAgICBpZiAoIWF3YWl0IGlzV29yZFZhbGlkKG5ld1dvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChgJHtuZXdXb3JkfSBpcyBub3QgYSB2YWxpZCB3b3JkYCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGFzdFdvcmQgPSBwdXp6bGUudGFyZ2V0V29yZDtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdXb3JkcyA9IFsuLi53b3Jkc107XHJcbiAgICAgICAgICAgICAgICBuZXdXb3Jkcy5wdXNoKG5ld1dvcmQpO1xyXG4gICAgICAgICAgICAgICAgc2V0V29yZHMobmV3V29yZHMpO1xyXG4gICAgICAgICAgICAgICAgc2V0TmV4dFdvcmQoJycpOyAgICBcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZE1vdmUobmV3V29yZCwgbGFzdFdvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U29sdmVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ09ubHkgYW5hZ3JhbXMsIGRyb3BzLCBzd2FwcyBhbmQgaW5zZXJ0cyBhbGxvd2VkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHZhbGlkTW92ZSA9IChwcmV2V29yZD1cIlwiLCBuZXdXb3JkPVwiXCIpID0+IHtcclxuICAgICAgICBwcmV2V29yZCA9IHByZXZXb3JkLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIG5ld1dvcmQgPSBuZXdXb3JkLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChwcmV2V29yZCA9PT0gbmV3V29yZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoYXJlQW5hZ3JhbXMocHJldldvcmQsIG5ld1dvcmQpXHJcbiAgICAgICAgICAgIHx8IGNvdW50U3dhcHMocHJldldvcmQsIG5ld1dvcmQpID09PSAxXHJcbiAgICAgICAgICAgIHx8IGlzRHJvcChwcmV2V29yZCwgbmV3V29yZClcclxuICAgICAgICAgICAgfHwgaXNEcm9wKG5ld1dvcmQsIHByZXZXb3JkKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBHYW1lU3RhcnRTZWN0aW9uID0gPGRpdiBjbGFzc05hbWU9XCJ0bV9udW1Nb3Zlc0RpdlwiPlxyXG4gICAgICAgIDxoMz5OdW1iZXIgT2YgTW92ZXM8L2gzPlxyXG4gICAgICAgIHtudW1Nb3Zlc0FycmF5Lm1hcCgobikgPT4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YHRtXyR7biA9PT0gbnVtTW92ZXMgPyAnbnVtTW92ZXNTZWxlY3RlZCcgOiAnbnVtTW92ZXNVbnNlbGVjdGVkJ31gfVxyXG4gICAgICAgICAgICAgICAga2V5PXtgY2hvb3NlTnVtTW92ZXMke259YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0TnVtTW92ZXMobik7IH0gfVxyXG4gICAgICAgICAgICA+e259XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG1fc3RhcnRQdXp6bGVEaXZcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJzdGFydFB1enpsZVwiIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4geyBjYWxsRm9yUHV6emxlKCk7IH0gfT5cclxuICAgICAgICAgICAgICAgIFN0YXJ0IFB1enpsZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IFB1enpsZVNlY3Rpb24gPSA8ZGl2IGNsYXNzTmFtZT1cInRtX3B1enpsZURpdlwiPlxyXG4gICAgICAgIDxzcGFuPntwdXp6bGUuc3RhcnRXb3JkfTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj50bzwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj57cHV6emxlLnRhcmdldFdvcmR9PC9zcGFuPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPHNwYW4+VGFyZ2V0Ojwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj57cHV6emxlLm51bU1vdmVzfTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5tb3Zlczwvc3Bhbj5cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IFNob3dLZXlib2FyZCA9IDxkaXY+XHJcbiAgICAgICAge2tleWJvYXJkVmVyc2lvbiA9PT0gJ2NrdjEnID9cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21LZXlib2FyZFYxXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaGtiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJzd2l0Y2hia3YxXCIgb25DbGljaz17KCkgPT4ge3NldEtleWJvYXJkVmVyc2lvbignY2t2MicpO319PnN3aXRjaCBrZXlib2FyZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNrdjFSb3cxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignUScpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBRXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1cnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgV1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdFJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIEVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignUicpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBSXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1QnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgVFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdZJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIFlcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignVScpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBVXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0knKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgSVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdPJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIE9cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignUCcpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBQXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNrdjFSb3cyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignQScpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBBXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1MnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgU1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdEJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIERcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignRicpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBGXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0cnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgR1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdIJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIEhcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignSicpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBKXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0snKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgS1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdMJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIExcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2t2MVJvdzNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdaJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIFpcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignWCcpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBYXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0MnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgQ1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdWJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIFZcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignQicpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBCXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ04nKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgTlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdNJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIE1cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBuZXh0V29yZC5sZW5ndGggPiAwICYmIGhhbmRsZURlbGV0ZUxldHRlcigpOyB9IH0gY2xhc3M9XCJ0bV9CYWNrc3BhY2VcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtuZXh0V29yZC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bV9LZXlHb0RpdlwiPjxidXR0b24ga2V5PVwia2V5R29cIiBvbkNsaWNrPXthY2NlcHROZXh0V29yZH0gY2xhc3NOYW1lPVwidG1fS2V5R29cIj5TVUJNSVQgV09SRDwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA6IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbUtleWJvYXJkVjIgXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaGtiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJzd2l0Y2hia3YyXCIgb25DbGljaz17KCkgPT4ge3NldEtleWJvYXJkVmVyc2lvbignY2t2MScpO319PnN3aXRjaCBrZXlib2FyZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNrdjJSb3cxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignUScpOyB9IH0+UTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdXJyk7IH0gfT5XPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0UnKTsgfSB9PkU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignUicpOyB9IH0+Ujwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdUJyk7IH0gfT5UPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1knKTsgfSB9Plk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignVScpOyB9IH0+VTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdJJyk7IH0gfT5JPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ08nKTsgfSB9Pk88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignUCcpOyB9IH0+UDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJja3YyUm93MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0EnKTsgfSB9PkE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignUycpOyB9IH0+Uzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdEJyk7IH0gfT5EPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0YnKTsgfSB9PkY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignRycpOyB9IH0+Rzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdIJyk7IH0gfT5IPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0onKTsgfSB9Pko8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignSycpOyB9IH0+Szwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdMJyk7IH0gfT5MPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNrdjJSb3czXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignWicpOyB9IH0+Wjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdYJyk7IH0gfT5YPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0MnKTsgfSB9PkM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignVicpOyB9IH0+Vjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdCJyk7IH0gfT5CPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ04nKTsgfSB9Pk48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignTScpOyB9IH0+TTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IG5leHRXb3JkLmxlbmd0aCA+IDAgJiYgaGFuZGxlRGVsZXRlTGV0dGVyKCk7IH0gfSBjbGFzcz1cInRtX0JhY2tzcGFjZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge25leHRXb3JkLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRtX0tleUdvRGl2XCI+PGJ1dHRvbiBrZXk9XCJrZXlHb1wiIG9uQ2xpY2s9e2FjY2VwdE5leHRXb3JkfSBjbGFzc05hbWU9XCJ0bV9LZXlHb1wiPlNVQk1JVCBXT1JEPC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IFNvbHV0aW9uU2VjdGlvbiA9IDxkaXYgY2xhc3NOYW1lPVwidG1fc29sdXRpb25PdXRlckRpdlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG1fc29sdXRpb25EaXZcIj5cclxuICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+e3B1enpsZS5zdGFydFdvcmR9PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIHt3b3Jkcy5tYXAoKHcsaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgdXNlcldvcmQke2l9YH0+PHRkPnt3fTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICB7IXNvbHZlZCAmJiA8dHI+PHRkPi4uLjwvdGQ+PC90cj59XHJcbiAgICAgICAgICAgICAgICAgICAgeyFzb2x2ZWQgJiYgbmV4dFdvcmQubGVuZ3RoID4gMCAmJiA8dHI+PHRkPntuZXh0V29yZH08L3RkPjwvdHI+fVxyXG4gICAgICAgICAgICAgICAgICAgIHshc29sdmVkICYmIDx0cj48dGQ+Li4uPC90ZD48L3RyPn1cclxuICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPntwdXp6bGUudGFyZ2V0V29yZH08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtzb2x2ZWQgP1xyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0bV9jb25ncmF0c1wiPvCfkY/wn4+9IFNvbHZlZCBpbiB7d29yZHMubGVuZ3RoICsgMX0gbW92ZXMg8J+Rj/Cfj708L3A+XHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge1Nob3dLZXlib2FyZH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG1fbGFzdGJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7d29yZHMubGVuZ3RoID4gMCAmJiBcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtsZXQgbmV3V29yZHMgPSBbLi4ud29yZHNdOyBuZXdXb3Jkcy5wb3AoKTsgc2V0V29yZHMobmV3V29yZHMpO319XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJSZW1vdmUgbGFzdCBlbnRlcmVkIHdvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVU5ET1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICB7d29yZHMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge3NldFdvcmRzKFtdKTsgc2V0TmV4dFdvcmQoJycpO319XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJSZW1vdmUgYWxsIGVudGVyIHdvcmRzXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJFU0VUXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge2FsZXJ0KCdWYWxpZCBuZXh0IHdvcmQgb3B0aW9uczpcXG5Td2FwIG9uZSBsZXR0ZXIsIGUuZy4gQ0FUIHRvIENPVFxcbkRyb3Agb25lIGxldHRlciwgZS5nLiBTV0lHIHRvIFdJR1xcbkluc2VydCBvbmUgbGV0dGVyLCBlLmcuIE1BVCB0byBNQVRILCBvciBISVAgdG8gV0hJUFxcbkFuYWdyYW0sIGUuZy4gQUNUIHRvIENBVCcpO319XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJTaG93IGluc3RydWN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBIRUxQXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0bV9xdWl0XCIgb25DbGljaz17KCkgPT4ge3F1aXRUaGlzUHV6emxlKCk7fX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlF1aXQgdGhpcyBwdXp6bGUuIFlvdSBjYW4gc3RhcnQgYW5vdGhlci5cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUVVJVFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICAgY29uc3QgSGludFNlY3Rpb24gPSA8ZGl2PlxyXG4gICAgICAgIDxTaG93aW5mbyBrZXk9e2BoaW50JHtwdXp6bGUuc3RhcnRXb3JkfWB9IHdvcmQ9e3B1enpsZS5zdGFydFdvcmR9IHNob3dJbnNlcnRzPVwiWVwiIHNob3dTd2Fwcz1cIllcIiBzaG93QW5hZ3JhbXM9XCJZXCIgc2hvd0Ryb3BzPVwiWVwiXHJcbiAgICAgICAgICAgICByZW1vdmVFbnRyeT17KCkgPT4ge319IGVudHJ5SW5kZXg9ezB9Lz5cclxuICAgICAgICB7d29yZHMubWFwKChnLGdpKSA9PiAoXHJcbiAgICAgICAgICAgIDxTaG93aW5mbyBrZXk9e2BoaW50JHtnfWB9IHdvcmQ9e2d9IHNob3dJbnNlcnRzPVwiWVwiIHNob3dTd2Fwcz1cIllcIiBzaG93QW5hZ3JhbXM9XCJZXCIgc2hvd0Ryb3BzPVwiWVwiXHJcbiAgICAgICAgICAgICByZW1vdmVFbnRyeT17KCkgPT4ge2xldCBuZXdXb3JkcyA9IFsuLi53b3Jkc107IG5ld1dvcmRzLnBvcCgpOyBzZXRXb3JkcyhuZXdXb3Jkcyk7fX0gZW50cnlJbmRleD17Z2krMX0vPlxyXG4gICAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJCYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgVHJhbnNtb2dyaWZ5XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7KHNvbHZlZCB8fCAhc29sdmluZykgJiYgPHRyPjx0ZD57R2FtZVN0YXJ0U2VjdGlvbn08L3RkPjwvdHI+fVxyXG4gICAgICAgICAgICAgICAgICAgIHtwdXp6bGUgJiYgcHV6emxlLnN0YXJ0V29yZCAmJiA8dHI+PHRkPntQdXp6bGVTZWN0aW9ufTwvdGQ+PC90cj59XHJcbiAgICAgICAgICAgICAgICAgICAge3B1enpsZSAmJiBwdXp6bGUuc3RhcnRXb3JkICYmIDx0cj48dGQ+e1NvbHV0aW9uU2VjdGlvbn08L3RkPjwvdHI+fVxyXG4gICAgICAgICAgICAgICAgICAgIHtwdXp6bGUgJiYgcHV6emxlLnN0YXJ0V29yZCAmJiAhc29sdmVkICYmIDx0cj48dGQ+e0hpbnRTZWN0aW9ufTwvdGQ+PC90cj59XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3B1enpsZSAmJiBwdXp6bGUubm90ZXMgJiYgcHV6emxlLm5vdGVzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJEYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHV6emxlLm5vdGVzLm1hcCgobixpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17YG5vdGUke2l9YH0+e259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJhbnNtb2dyaWZ5OyJdLCJzb3VyY2VSb290IjoiIn0=