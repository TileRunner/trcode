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
    0: validNextDownWords,
    1: setValidNextDownWords
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Valid next words in down direction

  const {
    0: upWords,
    1: setUpWords
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Users words going up from the target word

  const {
    0: validNextUpWords,
    1: setValidNextUpWords
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Valid next words in up direction

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
    let validDownWords = [];
    let validUpWords = [];
    let newSolving = false;

    try {
      let url = `${baseurl}/ENABLE2K?transmogrify=true&numMoves=${numMoves}`;
      const response = await fetch(url);
      data = await response.json();
      validDownWords = await (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_3__.getTransmogrifyValidNextWords)(data.startWord);
      validUpWords = await (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_3__.getTransmogrifyValidNextWords)(data.targetWord);
      newSolving = true;
    } catch (error) {
      data.notes = ["Problem with the server. Sorry about that."];
      console.log(error);
    }

    setPuzzle(data);
    setDownWords([]);
    setValidNextDownWords(validDownWords);
    setUpWords([]);
    setValidNextUpWords(validUpWords);
    setNextWord('');
    setSolved(false);
    setSolving(newSolving);
  };

  const quitThisPuzzle = () => {
    setSolving(false);
  };

  const handleKeyDown = async event => {
    if (event.key === "F12") {
      return;
    }

    if (event.key === "Enter") {
      acceptNextWord(event);
      return;
    }

    event.preventDefault();
    let k = event.key.toUpperCase();

    if (k === "BACKSPACE") {
      handleDeleteLetter();
    } else if (/^[A-Z]$/.test(k)) {
      // Is a letter
      handleInputLetter(k);
    }
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
    let newWord = nextWord; // upper case

    if (validMove(prevWord, newWord)) {
      if (!(await (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_3__.isWordValid)(newWord))) {
        alert(`${newWord} is not a valid word`);
      } else {
        let wordBelowNewWord = upWords.length === 0 ? puzzle.targetWord : upWords[0];
        let newDownWords = [...downWords];
        newDownWords.push(newWord);

        if (validMove(newWord, wordBelowNewWord)) {
          setDownWords(newDownWords);
          setNextWord('');
          setSolved(true);
        } else {
          let validNextWords = await (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_3__.getTransmogrifyValidNextWords)(newWord); // lower case valid next words

          setValidNextDownWords(validNextWords);
          setDownWords(newDownWords);
          setNextWord('');
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

          if (validMove(newWord, wordAboveNewWord)) {
            setUpWords(newUpWords);
            setNextWord('');
            setSolved(true);
          } else {
            let validNextWords = await (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_3__.getTransmogrifyValidNextWords)(newWord); // lower case valid next words

            setValidNextUpWords(validNextWords);
            setUpWords(newUpWords);
            setNextWord('');
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
      lineNumber: 151,
      columnNumber: 9
    }, undefined), numMovesArray.map(n => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: `tm_${n === numMoves ? 'numMovesSelected' : 'numMovesUnselected'}`,
      onClick: () => {
        setNumMoves(n);
      },
      children: n
    }, `chooseNumMoves${n}`, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
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
        lineNumber: 160,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 150,
    columnNumber: 30
  }, undefined);

  const PuzzleSection = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "tm_puzzleDiv",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: puzzle.startWord
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "to"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: puzzle.targetWord
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "Target:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: puzzle.numMoves
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "moves"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 165,
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
      lineNumber: 175,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 174,
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
          lineNumber: 183,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
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
          lineNumber: 186,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('W');
          },
          className: "ckv1 W"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('E');
          },
          className: "ckv1 E"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('R');
          },
          className: "ckv1 R"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('T');
          },
          className: "ckv1 T"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('Y');
          },
          className: "ckv1 Y"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('U');
          },
          className: "ckv1 U"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('I');
          },
          className: "ckv1 I"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('O');
          },
          className: "ckv1 O"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('P');
          },
          className: "ckv1 P"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 185,
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
          lineNumber: 198,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('S');
          },
          className: "ckv1 S"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('D');
          },
          className: "ckv1 D"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('F');
          },
          className: "ckv1 F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('G');
          },
          className: "ckv1 G"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('H');
          },
          className: "ckv1 H"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('J');
          },
          className: "ckv1 J"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('K');
          },
          className: "ckv1 K"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('L');
          },
          className: "ckv1 L"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 197,
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
          lineNumber: 209,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('X');
          },
          className: "ckv1 X"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('C');
          },
          className: "ckv1 C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('V');
          },
          className: "ckv1 V"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('B');
          },
          className: "ckv1 B"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('N');
          },
          className: "ckv1 N"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('M');
          },
          className: "ckv1 M"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            nextWord.length > 0 && handleDeleteLetter();
          },
          class: "ckv1 Backspace"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 17
      }, undefined), SubmitWordDiv]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 181,
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
          lineNumber: 223,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 222,
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
          lineNumber: 226,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('W');
          },
          children: "W"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('E');
          },
          children: "E"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('R');
          },
          children: "R"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('T');
          },
          children: "T"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('Y');
          },
          children: "Y"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('U');
          },
          children: "U"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('I');
          },
          children: "I"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('O');
          },
          children: "O"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('P');
          },
          children: "P"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 225,
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
          lineNumber: 238,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('S');
          },
          children: "S"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('D');
          },
          children: "D"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('F');
          },
          children: "F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('G');
          },
          children: "G"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('H');
          },
          children: "H"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('J');
          },
          children: "J"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('K');
          },
          children: "K"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('L');
          },
          children: "L"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 237,
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
          lineNumber: 249,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('X');
          },
          children: "X"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('C');
          },
          children: "C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('V');
          },
          children: "V"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('B');
          },
          children: "B"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('N');
          },
          children: "N"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('M');
          },
          children: "M"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            nextWord.length > 0 && handleDeleteLetter();
          },
          class: "tm_Backspace"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 17
      }, undefined), SubmitWordDiv]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 221,
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
          lineNumber: 263,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 262,
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
          lineNumber: 266,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('W');
          },
          className: "ckv3 W"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('E');
          },
          className: "ckv3 E"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('R');
          },
          className: "ckv3 R"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('T');
          },
          className: "ckv3 T"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('Y');
          },
          className: "ckv3 Y"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('U');
          },
          className: "ckv3 U"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('I');
          },
          className: "ckv3 I"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('O');
          },
          className: "ckv3 O"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('P');
          },
          className: "ckv3 P"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 265,
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
          lineNumber: 278,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('S');
          },
          className: "ckv3 S"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('D');
          },
          className: "ckv3 D"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('F');
          },
          className: "ckv3 F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('G');
          },
          className: "ckv3 G"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('H');
          },
          className: "ckv3 H"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('J');
          },
          className: "ckv3 J"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('K');
          },
          className: "ckv3 K"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('L');
          },
          className: "ckv3 L"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 277,
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
          lineNumber: 289,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('X');
          },
          className: "ckv3 X"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('C');
          },
          className: "ckv3 C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('V');
          },
          className: "ckv3 V"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('B');
          },
          className: "ckv3 B"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('N');
          },
          className: "ckv3 N"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            handleInputLetter('M');
          },
          className: "ckv3 M"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => {
            nextWord.length > 0 && handleDeleteLetter();
          },
          class: "ckv3 Backspace"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 17
      }, undefined), SubmitWordDiv]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 179,
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
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "tm_arrow",
                children: "\u21A7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 307,
                columnNumber: 29
              }, undefined), puzzle.startWord]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 307,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 306,
            columnNumber: 21
          }, undefined), downWords.map((w, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "tm_arrow",
                children: "\u21A7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 311,
                columnNumber: 33
              }, undefined), w]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 29
            }, undefined)
          }, `userDownWord${i}`, false, {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 25
          }, undefined)), !solved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "tm_nextword",
                onClick: () => {
                  alert(`Valid down words:\n${validNextDownWords.join(', ')}\nValid up words:\n${validNextUpWords.join(', ')}`);
                },
                children: ["\xA0", nextWord, "\xA0"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 316,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 315,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 314,
            columnNumber: 33
          }, undefined), upWords.map((w, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: [w, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "tm_arrow",
                children: "\u21A5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 323,
                columnNumber: 36
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 323,
              columnNumber: 29
            }, undefined)
          }, `userUpWord${i}`, false, {
            fileName: _jsxFileName,
            lineNumber: 322,
            columnNumber: 25
          }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: [puzzle.targetWord, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "tm_arrow",
                children: "\u21A5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 327,
                columnNumber: 48
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 327,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 326,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 44
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 9
    }, undefined), puzzle && puzzle.startWord && !solved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Valid down words:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 13
      }, undefined), validDownWords.map((w, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          setNextWord(w.toUpperCase());
          acceptNextWord();
        },
        children: [w, "&npsp;"]
      }, `validdownword${i}`, true, {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 17
      }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Valid up words:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 13
      }, undefined), validUpWords.map((w, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          setNextWord(w.toUpperCase());
          acceptNextWord();
        },
        children: [w, "&npsp;"]
      }, `validupword${i}`, true, {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 17
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 51
    }, undefined), solved ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "tm_congrats",
      children: ["\uD83D\uDC4F\uD83C\uDFFD Solved in ", downWords.length + upWords.length + 1, " moves \uD83D\uDC4F\uD83C\uDFFD"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 351,
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
          lineNumber: 357,
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
          lineNumber: 362,
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
          lineNumber: 367,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 302,
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
        lineNumber: 377,
        columnNumber: 13
      }, undefined), "Shows insert counts/letters"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "swapCount",
        children: "\xA02\xA0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 13
      }, undefined), "Shows swaps counts/letters"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "anagramCount",
        children: "3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 13
      }, undefined), "Shows anagram counts/words"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: "Click to toggle between count and info"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: "The black dot represents a drop"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: ["Click the ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "closemebutton"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 23
      }, undefined), " to remove your word"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 376,
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
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 385,
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
    }, `hintdownword${gi}${g}`, false, {
      fileName: _jsxFileName,
      lineNumber: 388,
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
    }, `hintupword${gi}${g}`, false, {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 13
    }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wi_showinfo__WEBPACK_IMPORTED_MODULE_4__.default, {
      word: puzzle.targetWord,
      showInserts: "Y",
      showSwaps: "Y",
      showAnagrams: "Y",
      showDrops: "Y",
      removeEntry: () => {},
      entryIndex: -1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 384,
    columnNumber: 25
  }, undefined);

  const MainSection = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
      children: [(solved || !solving) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: GameStartSection
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 400,
          columnNumber: 42
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 400,
        columnNumber: 38
      }, undefined), puzzle && puzzle.startWord && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: PuzzleSection
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 401,
          columnNumber: 48
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 401,
        columnNumber: 44
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: SolutionSection
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 402,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 398,
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
          lineNumber: 410,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 409,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 13
    }, undefined), react_device_detect__WEBPACK_IMPORTED_MODULE_2__.isMobile ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [MainSection, puzzle && puzzle.startWord && !solved && HintSection, puzzle && puzzle.startWord && !solved && ExplainHints]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 13
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        onKeyDown: e => {
          handleKeyDown(e);
        },
        tabIndex: -1,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "aligntop",
              children: [MainSection, puzzle && puzzle.startWord && !solved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: "If your computer keyboard is not responding,"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 427,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: "click the transmogrify picture and try again."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 428,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 426,
                columnNumber: 75
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 424,
              columnNumber: 29
            }, undefined), puzzle && puzzle.startWord && !solved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "aligntop",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "tm_hintsheader",
                children: "Hints"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 432,
                columnNumber: 33
              }, undefined), HintSection]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 431,
              columnNumber: 71
            }, undefined), puzzle && puzzle.startWord && !solved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "aligntop",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "tm_hintsheader",
                children: "Hints Explanation"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 438,
                columnNumber: 29
              }, undefined), ExplainHints]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 437,
              columnNumber: 71
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 423,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 422,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: puzzle && puzzle.notes && puzzle.notes.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trDanger",
        children: puzzle.notes.map((n, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: n
        }, `note${i}`, false, {
          fileName: _jsxFileName,
          lineNumber: 452,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 450,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 406,
    columnNumber: 9
  }, undefined);
};

_s(Transmogrify, "snEAlfnpOCLuV8ryJKWaOa1OO94=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG0vdG0uanMiXSwibmFtZXMiOlsiVHJhbnNtb2dyaWZ5Iiwic2V0V2hlcmV0byIsImtleWJvYXJkVmVyc2lvbiIsInNldEtleWJvYXJkVmVyc2lvbiIsInVzZVN0YXRlIiwibnVtTW92ZXMiLCJzZXROdW1Nb3ZlcyIsImJhc2V1cmwiLCJudW1Nb3Zlc0FycmF5IiwicHV6emxlIiwic2V0UHV6emxlIiwibmV4dFdvcmQiLCJzZXROZXh0V29yZCIsImRvd25Xb3JkcyIsInNldERvd25Xb3JkcyIsInZhbGlkTmV4dERvd25Xb3JkcyIsInNldFZhbGlkTmV4dERvd25Xb3JkcyIsInVwV29yZHMiLCJzZXRVcFdvcmRzIiwidmFsaWROZXh0VXBXb3JkcyIsInNldFZhbGlkTmV4dFVwV29yZHMiLCJzb2x2ZWQiLCJzZXRTb2x2ZWQiLCJzb2x2aW5nIiwic2V0U29sdmluZyIsImNhbGxGb3JQdXp6bGUiLCJkYXRhIiwidmFsaWREb3duV29yZHMiLCJ2YWxpZFVwV29yZHMiLCJuZXdTb2x2aW5nIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJnZXRUcmFuc21vZ3JpZnlWYWxpZE5leHRXb3JkcyIsInN0YXJ0V29yZCIsInRhcmdldFdvcmQiLCJlcnJvciIsIm5vdGVzIiwiY29uc29sZSIsImxvZyIsInF1aXRUaGlzUHV6emxlIiwiaGFuZGxlS2V5RG93biIsImV2ZW50Iiwia2V5IiwiYWNjZXB0TmV4dFdvcmQiLCJwcmV2ZW50RGVmYXVsdCIsImsiLCJ0b1VwcGVyQ2FzZSIsImhhbmRsZURlbGV0ZUxldHRlciIsInRlc3QiLCJoYW5kbGVJbnB1dExldHRlciIsImxldHRlciIsInNvZmFyIiwibGVuZ3RoIiwiQXJyYXkiLCJmcm9tIiwicG9wIiwibmV3c29mYXIiLCJqb2luIiwiZSIsInByZXZXb3JkIiwibmV3V29yZCIsInZhbGlkTW92ZSIsImlzV29yZFZhbGlkIiwiYWxlcnQiLCJ3b3JkQmVsb3dOZXdXb3JkIiwibmV3RG93bldvcmRzIiwicHVzaCIsInZhbGlkTmV4dFdvcmRzIiwid29yZEFib3ZlTmV3V29yZCIsIm5ld1VwV29yZHMiLCJyZW1vdmVEb3duV29yZHMiLCJ3aSIsIm5ld1dvcmRzIiwic3BsaWNlIiwicmVtb3ZlVXBXb3JkcyIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsImFyZUFuYWdyYW1zIiwiY291bnRTd2FwcyIsImlzRHJvcCIsIkdhbWVTdGFydFNlY3Rpb24iLCJtYXAiLCJuIiwiUHV6emxlU2VjdGlvbiIsIlN1Ym1pdFdvcmREaXYiLCJTaG93S2V5Ym9hcmQiLCJTb2x1dGlvblNlY3Rpb24iLCJ3IiwiaSIsIkV4cGxhaW5IaW50cyIsIkhpbnRTZWN0aW9uIiwiZyIsImdpIiwiTWFpblNlY3Rpb24iLCJpc01vYmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBa0I7QUFBQTs7QUFDbkMsUUFBTTtBQUFBLE9BQUNDLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBd0NDLCtDQUFRLENBQUMsTUFBRCxDQUF0RDtBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkYsK0NBQVEsQ0FBQyxDQUFELENBQXhDO0FBQ0EsUUFBTUcsT0FBTyxHQUFJLEtBQUQsR0FBb0UsdUJBQXBFLEdBQThGLENBQTlHO0FBQ0EsUUFBTUMsYUFBYSxHQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FBdEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JOLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUNBLFFBQU07QUFBQSxPQUFDTyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQlIsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNTLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCViwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUMsQ0FQbUMsQ0FPYTs7QUFDaEQsUUFBTTtBQUFBLE9BQUNXLGtCQUFEO0FBQUEsT0FBcUJDO0FBQXJCLE1BQThDWiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUQsQ0FSbUMsQ0FRK0I7O0FBQ2xFLFFBQU07QUFBQSxPQUFDYSxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QmQsK0NBQVEsQ0FBQyxFQUFELENBQXRDLENBVG1DLENBU1M7O0FBQzVDLFFBQU07QUFBQSxPQUFDZSxnQkFBRDtBQUFBLE9BQW1CQztBQUFuQixNQUEwQ2hCLCtDQUFRLENBQUMsRUFBRCxDQUF4RCxDQVZtQyxDQVUyQjs7QUFDOUQsUUFBTTtBQUFBLE9BQUNpQixNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQmxCLCtDQUFRLENBQUMsS0FBRCxDQUFwQztBQUNBLFFBQU07QUFBQSxPQUFDbUIsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JwQiwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7O0FBQ0EsUUFBTXFCLGFBQWEsR0FBRyxZQUFXO0FBQzdCLFFBQUlDLElBQUksR0FBRyxFQUFYO0FBQ0EsUUFBSUMsY0FBYyxHQUFHLEVBQXJCO0FBQ0EsUUFBSUMsWUFBWSxHQUFHLEVBQW5CO0FBQ0EsUUFBSUMsVUFBVSxHQUFHLEtBQWpCOztBQUNBLFFBQUk7QUFDQSxVQUFJQyxHQUFHLEdBQUksR0FBRXZCLE9BQVEsd0NBQXVDRixRQUFTLEVBQXJFO0FBQ0EsWUFBTTBCLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUQsQ0FBNUI7QUFDQUosVUFBSSxHQUFHLE1BQU1LLFFBQVEsQ0FBQ0UsSUFBVCxFQUFiO0FBQ0FOLG9CQUFjLEdBQUcsTUFBTU8saUZBQTZCLENBQUNSLElBQUksQ0FBQ1MsU0FBTixDQUFwRDtBQUNBUCxrQkFBWSxHQUFHLE1BQU1NLGlGQUE2QixDQUFDUixJQUFJLENBQUNVLFVBQU4sQ0FBbEQ7QUFDQVAsZ0JBQVUsR0FBRyxJQUFiO0FBQ0gsS0FQRCxDQU9FLE9BQU9RLEtBQVAsRUFBYztBQUNaWCxVQUFJLENBQUNZLEtBQUwsR0FBYSxDQUFDLDRDQUFELENBQWI7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDSDs7QUFDRDNCLGFBQVMsQ0FBQ2dCLElBQUQsQ0FBVDtBQUNBWixnQkFBWSxDQUFDLEVBQUQsQ0FBWjtBQUNBRSx5QkFBcUIsQ0FBQ1csY0FBRCxDQUFyQjtBQUNBVCxjQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0FFLHVCQUFtQixDQUFDUSxZQUFELENBQW5CO0FBQ0FoQixlQUFXLENBQUMsRUFBRCxDQUFYO0FBQ0FVLGFBQVMsQ0FBQyxLQUFELENBQVQ7QUFDQUUsY0FBVSxDQUFDSyxVQUFELENBQVY7QUFDSCxHQXhCRDs7QUF5QkEsUUFBTVksY0FBYyxHQUFHLE1BQU07QUFDekJqQixjQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0gsR0FGRDs7QUFHQSxRQUFNa0IsYUFBYSxHQUFHLE1BQU1DLEtBQU4sSUFBZ0I7QUFDbEMsUUFBSUEsS0FBSyxDQUFDQyxHQUFOLEtBQWMsS0FBbEIsRUFBeUI7QUFBQztBQUFROztBQUNsQyxRQUFJRCxLQUFLLENBQUNDLEdBQU4sS0FBYyxPQUFsQixFQUEyQjtBQUN2QkMsb0JBQWMsQ0FBQ0YsS0FBRCxDQUFkO0FBQ0E7QUFDSDs7QUFDREEsU0FBSyxDQUFDRyxjQUFOO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHSixLQUFLLENBQUNDLEdBQU4sQ0FBVUksV0FBVixFQUFSOztBQUNBLFFBQUlELENBQUMsS0FBSyxXQUFWLEVBQXVCO0FBQ25CRSx3QkFBa0I7QUFDckIsS0FGRCxNQUVPLElBQUksVUFBVUMsSUFBVixDQUFlSCxDQUFmLENBQUosRUFBdUI7QUFBRTtBQUM1QkksdUJBQWlCLENBQUNKLENBQUQsQ0FBakI7QUFDSDtBQUNKLEdBYkQ7O0FBY0EsUUFBTUksaUJBQWlCLEdBQUlDLE1BQUQsSUFBWTtBQUNsQyxRQUFJQyxLQUFLLEdBQUcxQyxRQUFRLEdBQUd5QyxNQUF2QjtBQUNBeEMsZUFBVyxDQUFDeUMsS0FBRCxDQUFYO0FBQ0gsR0FIRDs7QUFJQSxRQUFNSixrQkFBa0IsR0FBRyxNQUFNO0FBQzdCLFFBQUl0QyxRQUFRLENBQUMyQyxNQUFULEdBQWtCLENBQXRCLEVBQXlCO0FBQ3JCLFVBQUlELEtBQUssR0FBR0UsS0FBSyxDQUFDQyxJQUFOLENBQVc3QyxRQUFYLENBQVo7QUFDQTBDLFdBQUssQ0FBQ0ksR0FBTjtBQUNBLFVBQUlDLFFBQVEsR0FBR0wsS0FBSyxDQUFDTSxJQUFOLENBQVcsRUFBWCxDQUFmO0FBQ0EvQyxpQkFBVyxDQUFDOEMsUUFBRCxDQUFYO0FBQ0g7QUFDSixHQVBEOztBQVFBLFFBQU1iLGNBQWMsR0FBRyxNQUFNZSxDQUFOLElBQVk7QUFDL0JBLEtBQUMsQ0FBQ2QsY0FBRjs7QUFDQSxRQUFJbkMsUUFBUSxDQUFDMkMsTUFBVCxLQUFvQixDQUF4QixFQUEyQjtBQUN2QjtBQUNILEtBSjhCLENBSy9COzs7QUFDQSxRQUFJTyxRQUFRLEdBQUloRCxTQUFTLENBQUN5QyxNQUFWLEtBQXFCLENBQXJCLEdBQXlCN0MsTUFBTSxDQUFDMEIsU0FBaEMsR0FBNEN0QixTQUFTLENBQUNBLFNBQVMsQ0FBQ3lDLE1BQVYsR0FBbUIsQ0FBcEIsQ0FBckU7QUFDQSxRQUFJUSxPQUFPLEdBQUduRCxRQUFkLENBUCtCLENBT1A7O0FBQ3hCLFFBQUlvRCxTQUFTLENBQUNGLFFBQUQsRUFBV0MsT0FBWCxDQUFiLEVBQWtDO0FBQzlCLFVBQUksRUFBQyxNQUFNRSwrREFBVyxDQUFDRixPQUFELENBQWxCLENBQUosRUFBaUM7QUFDN0JHLGFBQUssQ0FBRSxHQUFFSCxPQUFRLHNCQUFaLENBQUw7QUFDSCxPQUZELE1BRU87QUFDSCxZQUFJSSxnQkFBZ0IsR0FBSWpELE9BQU8sQ0FBQ3FDLE1BQVIsS0FBbUIsQ0FBbkIsR0FBdUI3QyxNQUFNLENBQUMyQixVQUE5QixHQUEyQ25CLE9BQU8sQ0FBQyxDQUFELENBQTFFO0FBQ0EsWUFBSWtELFlBQVksR0FBRyxDQUFDLEdBQUd0RCxTQUFKLENBQW5CO0FBQ0FzRCxvQkFBWSxDQUFDQyxJQUFiLENBQWtCTixPQUFsQjs7QUFDQSxZQUFJQyxTQUFTLENBQUNELE9BQUQsRUFBVUksZ0JBQVYsQ0FBYixFQUEwQztBQUN0Q3BELHNCQUFZLENBQUNxRCxZQUFELENBQVo7QUFDQXZELHFCQUFXLENBQUMsRUFBRCxDQUFYO0FBQ0FVLG1CQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0gsU0FKRCxNQUlPO0FBQ0gsY0FBSStDLGNBQWMsR0FBRyxNQUFNbkMsaUZBQTZCLENBQUM0QixPQUFELENBQXhELENBREcsQ0FDZ0U7O0FBQ25FOUMsK0JBQXFCLENBQUNxRCxjQUFELENBQXJCO0FBQ0F2RCxzQkFBWSxDQUFDcUQsWUFBRCxDQUFaO0FBQ0F2RCxxQkFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNIO0FBQ0o7QUFDSixLQWxCRCxNQWtCTztBQUNIO0FBQ0FpRCxjQUFRLEdBQUk1QyxPQUFPLENBQUNxQyxNQUFSLEtBQW1CLENBQW5CLEdBQXVCN0MsTUFBTSxDQUFDMkIsVUFBOUIsR0FBMkNuQixPQUFPLENBQUMsQ0FBRCxDQUE5RDs7QUFDQSxVQUFJOEMsU0FBUyxDQUFDRixRQUFELEVBQVdDLE9BQVgsQ0FBYixFQUFrQztBQUM5QixZQUFJLEVBQUMsTUFBTUUsK0RBQVcsQ0FBQ0YsT0FBRCxDQUFsQixDQUFKLEVBQWlDO0FBQzdCRyxlQUFLLENBQUUsR0FBRUgsT0FBUSxzQkFBWixDQUFMO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsY0FBSVEsZ0JBQWdCLEdBQUl6RCxTQUFTLENBQUN5QyxNQUFWLEtBQXFCLENBQXJCLEdBQXlCN0MsTUFBTSxDQUFDMEIsU0FBaEMsR0FBNEN0QixTQUFTLENBQUNBLFNBQVMsQ0FBQ3lDLE1BQVYsR0FBaUIsQ0FBbEIsQ0FBN0U7QUFDQSxjQUFJaUIsVUFBVSxHQUFHLENBQUNULE9BQUQsRUFBUyxHQUFHN0MsT0FBWixDQUFqQjs7QUFDQSxjQUFJOEMsU0FBUyxDQUFDRCxPQUFELEVBQVVRLGdCQUFWLENBQWIsRUFBMEM7QUFDdENwRCxzQkFBVSxDQUFDcUQsVUFBRCxDQUFWO0FBQ0EzRCx1QkFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNBVSxxQkFBUyxDQUFDLElBQUQsQ0FBVDtBQUNILFdBSkQsTUFJTztBQUNILGdCQUFJK0MsY0FBYyxHQUFHLE1BQU1uQyxpRkFBNkIsQ0FBQzRCLE9BQUQsQ0FBeEQsQ0FERyxDQUNnRTs7QUFDbkUxQywrQkFBbUIsQ0FBQ2lELGNBQUQsQ0FBbkI7QUFDQW5ELHNCQUFVLENBQUNxRCxVQUFELENBQVY7QUFDQTNELHVCQUFXLENBQUMsRUFBRCxDQUFYO0FBQ0g7QUFDSjtBQUNKLE9BakJELE1BaUJPO0FBQ0hxRCxhQUFLLENBQUMsa0RBQUQsQ0FBTDtBQUNIO0FBQ0o7QUFDSixHQWxERDs7QUFtREEsUUFBTU8sZUFBZSxHQUFHQyxFQUFELElBQVE7QUFDM0IsUUFBSUEsRUFBRSxHQUFHNUQsU0FBUyxDQUFDeUMsTUFBbkIsRUFBMkI7QUFDdkIsVUFBSW9CLFFBQVEsR0FBRyxDQUFDLEdBQUc3RCxTQUFKLENBQWY7QUFDQTZELGNBQVEsQ0FBQ0MsTUFBVCxDQUFnQkYsRUFBaEI7QUFDQTNELGtCQUFZLENBQUM0RCxRQUFELENBQVo7QUFDSDtBQUNKLEdBTkQ7O0FBT0EsUUFBTUUsYUFBYSxHQUFHSCxFQUFELElBQVE7QUFDekIsUUFBSUEsRUFBRSxHQUFHeEQsT0FBTyxDQUFDcUMsTUFBakIsRUFBeUI7QUFDckIsVUFBSWlCLFVBQVUsR0FBRyxDQUFDLEdBQUd0RCxPQUFKLENBQWpCO0FBQ0FzRCxnQkFBVSxDQUFDSSxNQUFYLENBQWtCLENBQWxCLEVBQW9CRixFQUFFLEdBQUMsQ0FBdkI7QUFDQXZELGdCQUFVLENBQUNxRCxVQUFELENBQVY7QUFDSDtBQUNKLEdBTkQ7O0FBT0EsUUFBTVIsU0FBUyxHQUFHLENBQUNGLFFBQVEsR0FBQyxFQUFWLEVBQWNDLE9BQU8sR0FBQyxFQUF0QixLQUE2QjtBQUMzQ0QsWUFBUSxHQUFHQSxRQUFRLENBQUNnQixJQUFULEdBQWdCQyxXQUFoQixFQUFYO0FBQ0FoQixXQUFPLEdBQUdBLE9BQU8sQ0FBQ2UsSUFBUixHQUFlQyxXQUFmLEVBQVY7O0FBQ0EsUUFBSWpCLFFBQVEsS0FBS0MsT0FBakIsRUFBMEI7QUFDdEIsYUFBTyxLQUFQO0FBQ0g7O0FBQ0QsV0FBUWlCLCtEQUFXLENBQUNsQixRQUFELEVBQVdDLE9BQVgsQ0FBWCxJQUNEa0IsOERBQVUsQ0FBQ25CLFFBQUQsRUFBV0MsT0FBWCxDQUFWLEtBQWtDLENBRGpDLElBRURtQiwwREFBTSxDQUFDcEIsUUFBRCxFQUFXQyxPQUFYLENBRkwsSUFHRG1CLDBEQUFNLENBQUNuQixPQUFELEVBQVVELFFBQVYsQ0FIYjtBQUtILEdBWEQ7O0FBWUEsUUFBTXFCLGdCQUFnQixnQkFBRztBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBLDRCQUNyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEcUIsRUFFcEIxRSxhQUFhLENBQUMyRSxHQUFkLENBQW1CQyxDQUFELGlCQUNmO0FBQVEsZUFBUyxFQUFHLE1BQUtBLENBQUMsS0FBSy9FLFFBQU4sR0FBaUIsa0JBQWpCLEdBQXNDLG9CQUFxQixFQUFwRjtBQUVJLGFBQU8sRUFBRSxNQUFNO0FBQUVDLG1CQUFXLENBQUM4RSxDQUFELENBQVg7QUFBaUIsT0FGdEM7QUFBQSxnQkFHRUE7QUFIRixPQUNVLGlCQUFnQkEsQ0FBRSxFQUQ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURILENBRm9CLGVBU3JCO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsNkJBQ0k7QUFBMEIsaUJBQVMsRUFBQyxVQUFwQztBQUErQyxlQUFPLEVBQUUsTUFBTTtBQUFFM0QsdUJBQWE7QUFBSyxTQUFsRjtBQUFBO0FBQUEsU0FBWSxhQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBekI7O0FBZUEsUUFBTTRELGFBQWEsZ0JBQUc7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBLDRCQUNsQjtBQUFBLGdCQUFPNUUsTUFBTSxDQUFDMEI7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURrQixlQUVsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGa0IsZUFHbEI7QUFBQSxnQkFBTzFCLE1BQU0sQ0FBQzJCO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIa0IsZUFJbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKa0IsZUFLbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTGtCLGVBTWxCO0FBQUEsZ0JBQU8zQixNQUFNLENBQUNKO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOa0IsZUFPbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUGtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF0Qjs7QUFTQSxRQUFNaUYsYUFBYSxnQkFBRztBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUEsMkJBQ2xCO0FBQW9CLGFBQU8sRUFBRXpDLGNBQTdCO0FBQTZDLGVBQVMsRUFBRyxZQUFXbEMsUUFBUSxDQUFDMkMsTUFBVCxHQUFrQixDQUFsQixHQUFzQixFQUF0QixHQUEyQixVQUFXLEVBQTFHO0FBQUE7QUFBQSxPQUFZLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURrQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXRCOztBQUtBLFFBQU1pQyxZQUFZLGdCQUFHO0FBQUEsY0FDaEJyRixlQUFlLEtBQUssTUFBcEIsZ0JBQ0c7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLCtCQUNJO0FBQXlCLGlCQUFPLEVBQUUsTUFBTTtBQUFDQyw4QkFBa0IsQ0FBQyxNQUFELENBQWxCO0FBQTRCLFdBQXJFO0FBQUE7QUFBQSxXQUFZLFlBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFJSTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLGdDQUNJO0FBQU0saUJBQU8sRUFBRSxNQUFNO0FBQUVnRCw2QkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFdBQWhEO0FBQW1ELG1CQUFTLEVBQUM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQU0saUJBQU8sRUFBRSxNQUFNO0FBQUVBLDZCQUFpQixDQUFDLEdBQUQsQ0FBakI7QUFBeUIsV0FBaEQ7QUFBbUQsbUJBQVMsRUFBQztBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLGVBR0k7QUFBTSxpQkFBTyxFQUFFLE1BQU07QUFBRUEsNkJBQWlCLENBQUMsR0FBRCxDQUFqQjtBQUF5QixXQUFoRDtBQUFtRCxtQkFBUyxFQUFDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEosZUFJSTtBQUFNLGlCQUFPLEVBQUUsTUFBTTtBQUFFQSw2QkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFdBQWhEO0FBQW1ELG1CQUFTLEVBQUM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSixlQUtJO0FBQU0saUJBQU8sRUFBRSxNQUFNO0FBQUVBLDZCQUFpQixDQUFDLEdBQUQsQ0FBakI7QUFBeUIsV0FBaEQ7QUFBbUQsbUJBQVMsRUFBQztBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKLGVBTUk7QUFBTSxpQkFBTyxFQUFFLE1BQU07QUFBRUEsNkJBQWlCLENBQUMsR0FBRCxDQUFqQjtBQUF5QixXQUFoRDtBQUFtRCxtQkFBUyxFQUFDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkosZUFPSTtBQUFNLGlCQUFPLEVBQUUsTUFBTTtBQUFFQSw2QkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFdBQWhEO0FBQW1ELG1CQUFTLEVBQUM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQSixlQVFJO0FBQU0saUJBQU8sRUFBRSxNQUFNO0FBQUVBLDZCQUFpQixDQUFDLEdBQUQsQ0FBakI7QUFBeUIsV0FBaEQ7QUFBbUQsbUJBQVMsRUFBQztBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJKLGVBU0k7QUFBTSxpQkFBTyxFQUFFLE1BQU07QUFBRUEsNkJBQWlCLENBQUMsR0FBRCxDQUFqQjtBQUF5QixXQUFoRDtBQUFtRCxtQkFBUyxFQUFDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEosZUFVSTtBQUFNLGlCQUFPLEVBQUUsTUFBTTtBQUFFQSw2QkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFdBQWhEO0FBQW1ELG1CQUFTLEVBQUM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkosZUFnQkk7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQSxnQ0FDSTtBQUFNLGlCQUFPLEVBQUUsTUFBTTtBQUFFQSw2QkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFdBQWhEO0FBQW1ELG1CQUFTLEVBQUM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQU0saUJBQU8sRUFBRSxNQUFNO0FBQUVBLDZCQUFpQixDQUFDLEdBQUQsQ0FBakI7QUFBeUIsV0FBaEQ7QUFBbUQsbUJBQVMsRUFBQztBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLGVBR0k7QUFBTSxpQkFBTyxFQUFFLE1BQU07QUFBRUEsNkJBQWlCLENBQUMsR0FBRCxDQUFqQjtBQUF5QixXQUFoRDtBQUFtRCxtQkFBUyxFQUFDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEosZUFJSTtBQUFNLGlCQUFPLEVBQUUsTUFBTTtBQUFFQSw2QkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFdBQWhEO0FBQW1ELG1CQUFTLEVBQUM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSixlQUtJO0FBQU0saUJBQU8sRUFBRSxNQUFNO0FBQUVBLDZCQUFpQixDQUFDLEdBQUQsQ0FBakI7QUFBeUIsV0FBaEQ7QUFBbUQsbUJBQVMsRUFBQztBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKLGVBTUk7QUFBTSxpQkFBTyxFQUFFLE1BQU07QUFBRUEsNkJBQWlCLENBQUMsR0FBRCxDQUFqQjtBQUF5QixXQUFoRDtBQUFtRCxtQkFBUyxFQUFDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkosZUFPSTtBQUFNLGlCQUFPLEVBQUUsTUFBTTtBQUFFQSw2QkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFdBQWhEO0FBQW1ELG1CQUFTLEVBQUM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQSixlQVFJO0FBQU0saUJBQU8sRUFBRSxNQUFNO0FBQUVBLDZCQUFpQixDQUFDLEdBQUQsQ0FBakI7QUFBeUIsV0FBaEQ7QUFBbUQsbUJBQVMsRUFBQztBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJKLGVBU0k7QUFBTSxpQkFBTyxFQUFFLE1BQU07QUFBRUEsNkJBQWlCLENBQUMsR0FBRCxDQUFqQjtBQUF5QixXQUFoRDtBQUFtRCxtQkFBUyxFQUFDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhCSixlQTJCSTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLGdDQUNJO0FBQU0saUJBQU8sRUFBRSxNQUFNO0FBQUVBLDZCQUFpQixDQUFDLEdBQUQsQ0FBakI7QUFBeUIsV0FBaEQ7QUFBbUQsbUJBQVMsRUFBQztBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBTSxpQkFBTyxFQUFFLE1BQU07QUFBRUEsNkJBQWlCLENBQUMsR0FBRCxDQUFqQjtBQUF5QixXQUFoRDtBQUFtRCxtQkFBUyxFQUFDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosZUFHSTtBQUFNLGlCQUFPLEVBQUUsTUFBTTtBQUFFQSw2QkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFdBQWhEO0FBQW1ELG1CQUFTLEVBQUM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISixlQUlJO0FBQU0saUJBQU8sRUFBRSxNQUFNO0FBQUVBLDZCQUFpQixDQUFDLEdBQUQsQ0FBakI7QUFBeUIsV0FBaEQ7QUFBbUQsbUJBQVMsRUFBQztBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKLGVBS0k7QUFBTSxpQkFBTyxFQUFFLE1BQU07QUFBRUEsNkJBQWlCLENBQUMsR0FBRCxDQUFqQjtBQUF5QixXQUFoRDtBQUFtRCxtQkFBUyxFQUFDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEosZUFNSTtBQUFNLGlCQUFPLEVBQUUsTUFBTTtBQUFFQSw2QkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFdBQWhEO0FBQW1ELG1CQUFTLEVBQUM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFOSixlQU9JO0FBQU0saUJBQU8sRUFBRSxNQUFNO0FBQUVBLDZCQUFpQixDQUFDLEdBQUQsQ0FBakI7QUFBeUIsV0FBaEQ7QUFBbUQsbUJBQVMsRUFBQztBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBKLGVBUUk7QUFBTSxpQkFBTyxFQUFFLE1BQU07QUFBRXhDLG9CQUFRLENBQUMyQyxNQUFULEdBQWtCLENBQWxCLElBQXVCTCxrQkFBa0IsRUFBekM7QUFBOEMsV0FBckU7QUFBd0UsZUFBSyxFQUFDO0FBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTNCSixFQXFDS3FDLGFBckNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESCxHQXdDQ3BGLGVBQWUsS0FBSyxNQUFwQixnQkFDRTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUEsK0JBQ0k7QUFBeUIsaUJBQU8sRUFBRSxNQUFNO0FBQUNDLDhCQUFrQixDQUFDLE1BQUQsQ0FBbEI7QUFBNEIsV0FBckU7QUFBQTtBQUFBLFdBQVksWUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUlJO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUEsZ0NBQ0k7QUFBTSxpQkFBTyxFQUFFLE1BQU07QUFBRWdELDZCQUFpQixDQUFDLEdBQUQsQ0FBakI7QUFBeUIsV0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFNLGlCQUFPLEVBQUUsTUFBTTtBQUFFQSw2QkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFdBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLGVBR0k7QUFBTSxpQkFBTyxFQUFFLE1BQU07QUFBRUEsNkJBQWlCLENBQUMsR0FBRCxDQUFqQjtBQUF5QixXQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISixlQUlJO0FBQU0saUJBQU8sRUFBRSxNQUFNO0FBQUVBLDZCQUFpQixDQUFDLEdBQUQsQ0FBakI7QUFBeUIsV0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkosZUFLSTtBQUFNLGlCQUFPLEVBQUUsTUFBTTtBQUFFQSw2QkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFdBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKLGVBTUk7QUFBTSxpQkFBTyxFQUFFLE1BQU07QUFBRUEsNkJBQWlCLENBQUMsR0FBRCxDQUFqQjtBQUF5QixXQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFOSixlQU9JO0FBQU0saUJBQU8sRUFBRSxNQUFNO0FBQUVBLDZCQUFpQixDQUFDLEdBQUQsQ0FBakI7QUFBeUIsV0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEosZUFRSTtBQUFNLGlCQUFPLEVBQUUsTUFBTTtBQUFFQSw2QkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFdBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJKLGVBU0k7QUFBTSxpQkFBTyxFQUFFLE1BQU07QUFBRUEsNkJBQWlCLENBQUMsR0FBRCxDQUFqQjtBQUF5QixXQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFUSixlQVVJO0FBQU0saUJBQU8sRUFBRSxNQUFNO0FBQUVBLDZCQUFpQixDQUFDLEdBQUQsQ0FBakI7QUFBeUIsV0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLGVBZ0JJO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUEsZ0NBQ0k7QUFBTSxpQkFBTyxFQUFFLE1BQU07QUFBRUEsNkJBQWlCLENBQUMsR0FBRCxDQUFqQjtBQUF5QixXQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQU0saUJBQU8sRUFBRSxNQUFNO0FBQUVBLDZCQUFpQixDQUFDLEdBQUQsQ0FBakI7QUFBeUIsV0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosZUFHSTtBQUFNLGlCQUFPLEVBQUUsTUFBTTtBQUFFQSw2QkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFdBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhKLGVBSUk7QUFBTSxpQkFBTyxFQUFFLE1BQU07QUFBRUEsNkJBQWlCLENBQUMsR0FBRCxDQUFqQjtBQUF5QixXQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSixlQUtJO0FBQU0saUJBQU8sRUFBRSxNQUFNO0FBQUVBLDZCQUFpQixDQUFDLEdBQUQsQ0FBakI7QUFBeUIsV0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEosZUFNSTtBQUFNLGlCQUFPLEVBQUUsTUFBTTtBQUFFQSw2QkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFdBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5KLGVBT0k7QUFBTSxpQkFBTyxFQUFFLE1BQU07QUFBRUEsNkJBQWlCLENBQUMsR0FBRCxDQUFqQjtBQUF5QixXQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQSixlQVFJO0FBQU0saUJBQU8sRUFBRSxNQUFNO0FBQUVBLDZCQUFpQixDQUFDLEdBQUQsQ0FBakI7QUFBeUIsV0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkosZUFTSTtBQUFNLGlCQUFPLEVBQUUsTUFBTTtBQUFFQSw2QkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFdBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQkosZUEyQkk7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQSxnQ0FDSTtBQUFNLGlCQUFPLEVBQUUsTUFBTTtBQUFFQSw2QkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFdBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBTSxpQkFBTyxFQUFFLE1BQU07QUFBRUEsNkJBQWlCLENBQUMsR0FBRCxDQUFqQjtBQUF5QixXQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixlQUdJO0FBQU0saUJBQU8sRUFBRSxNQUFNO0FBQUVBLDZCQUFpQixDQUFDLEdBQUQsQ0FBakI7QUFBeUIsV0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEosZUFJSTtBQUFNLGlCQUFPLEVBQUUsTUFBTTtBQUFFQSw2QkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFdBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKLGVBS0k7QUFBTSxpQkFBTyxFQUFFLE1BQU07QUFBRUEsNkJBQWlCLENBQUMsR0FBRCxDQUFqQjtBQUF5QixXQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMSixlQU1JO0FBQU0saUJBQU8sRUFBRSxNQUFNO0FBQUVBLDZCQUFpQixDQUFDLEdBQUQsQ0FBakI7QUFBeUIsV0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkosZUFPSTtBQUFNLGlCQUFPLEVBQUUsTUFBTTtBQUFFQSw2QkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFdBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBKLGVBUUk7QUFBTSxpQkFBTyxFQUFFLE1BQU07QUFBRXhDLG9CQUFRLENBQUMyQyxNQUFULEdBQWtCLENBQWxCLElBQXVCTCxrQkFBa0IsRUFBekM7QUFBOEMsV0FBckU7QUFBd0UsZUFBSyxFQUFDO0FBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTNCSixFQXFDS3FDLGFBckNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixnQkF5Q0U7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLCtCQUNJO0FBQXlCLGlCQUFPLEVBQUUsTUFBTTtBQUFDbkYsOEJBQWtCLENBQUMsTUFBRCxDQUFsQjtBQUE0QixXQUFyRTtBQUFBO0FBQUEsV0FBWSxZQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBSUk7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQSxnQ0FDSTtBQUFNLGlCQUFPLEVBQUUsTUFBTTtBQUFFZ0QsNkJBQWlCLENBQUMsR0FBRCxDQUFqQjtBQUF5QixXQUFoRDtBQUFtRCxtQkFBUyxFQUFDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFNLGlCQUFPLEVBQUUsTUFBTTtBQUFFQSw2QkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFdBQWhEO0FBQW1ELG1CQUFTLEVBQUM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixlQUdJO0FBQU0saUJBQU8sRUFBRSxNQUFNO0FBQUVBLDZCQUFpQixDQUFDLEdBQUQsQ0FBakI7QUFBeUIsV0FBaEQ7QUFBbUQsbUJBQVMsRUFBQztBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhKLGVBSUk7QUFBTSxpQkFBTyxFQUFFLE1BQU07QUFBRUEsNkJBQWlCLENBQUMsR0FBRCxDQUFqQjtBQUF5QixXQUFoRDtBQUFtRCxtQkFBUyxFQUFDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkosZUFLSTtBQUFNLGlCQUFPLEVBQUUsTUFBTTtBQUFFQSw2QkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFdBQWhEO0FBQW1ELG1CQUFTLEVBQUM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMSixlQU1JO0FBQU0saUJBQU8sRUFBRSxNQUFNO0FBQUVBLDZCQUFpQixDQUFDLEdBQUQsQ0FBakI7QUFBeUIsV0FBaEQ7QUFBbUQsbUJBQVMsRUFBQztBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5KLGVBT0k7QUFBTSxpQkFBTyxFQUFFLE1BQU07QUFBRUEsNkJBQWlCLENBQUMsR0FBRCxDQUFqQjtBQUF5QixXQUFoRDtBQUFtRCxtQkFBUyxFQUFDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEosZUFRSTtBQUFNLGlCQUFPLEVBQUUsTUFBTTtBQUFFQSw2QkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFdBQWhEO0FBQW1ELG1CQUFTLEVBQUM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSSixlQVNJO0FBQU0saUJBQU8sRUFBRSxNQUFNO0FBQUVBLDZCQUFpQixDQUFDLEdBQUQsQ0FBakI7QUFBeUIsV0FBaEQ7QUFBbUQsbUJBQVMsRUFBQztBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRKLGVBVUk7QUFBTSxpQkFBTyxFQUFFLE1BQU07QUFBRUEsNkJBQWlCLENBQUMsR0FBRCxDQUFqQjtBQUF5QixXQUFoRDtBQUFtRCxtQkFBUyxFQUFDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLGVBZ0JJO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUEsZ0NBQ0k7QUFBTSxpQkFBTyxFQUFFLE1BQU07QUFBRUEsNkJBQWlCLENBQUMsR0FBRCxDQUFqQjtBQUF5QixXQUFoRDtBQUFtRCxtQkFBUyxFQUFDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFNLGlCQUFPLEVBQUUsTUFBTTtBQUFFQSw2QkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFdBQWhEO0FBQW1ELG1CQUFTLEVBQUM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixlQUdJO0FBQU0saUJBQU8sRUFBRSxNQUFNO0FBQUVBLDZCQUFpQixDQUFDLEdBQUQsQ0FBakI7QUFBeUIsV0FBaEQ7QUFBbUQsbUJBQVMsRUFBQztBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhKLGVBSUk7QUFBTSxpQkFBTyxFQUFFLE1BQU07QUFBRUEsNkJBQWlCLENBQUMsR0FBRCxDQUFqQjtBQUF5QixXQUFoRDtBQUFtRCxtQkFBUyxFQUFDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkosZUFLSTtBQUFNLGlCQUFPLEVBQUUsTUFBTTtBQUFFQSw2QkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFdBQWhEO0FBQW1ELG1CQUFTLEVBQUM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMSixlQU1JO0FBQU0saUJBQU8sRUFBRSxNQUFNO0FBQUVBLDZCQUFpQixDQUFDLEdBQUQsQ0FBakI7QUFBeUIsV0FBaEQ7QUFBbUQsbUJBQVMsRUFBQztBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5KLGVBT0k7QUFBTSxpQkFBTyxFQUFFLE1BQU07QUFBRUEsNkJBQWlCLENBQUMsR0FBRCxDQUFqQjtBQUF5QixXQUFoRDtBQUFtRCxtQkFBUyxFQUFDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEosZUFRSTtBQUFNLGlCQUFPLEVBQUUsTUFBTTtBQUFFQSw2QkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFdBQWhEO0FBQW1ELG1CQUFTLEVBQUM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSSixlQVNJO0FBQU0saUJBQU8sRUFBRSxNQUFNO0FBQUVBLDZCQUFpQixDQUFDLEdBQUQsQ0FBakI7QUFBeUIsV0FBaEQ7QUFBbUQsbUJBQVMsRUFBQztBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQkosZUEyQkk7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQSxnQ0FDSTtBQUFNLGlCQUFPLEVBQUUsTUFBTTtBQUFFQSw2QkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFdBQWhEO0FBQW1ELG1CQUFTLEVBQUM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQU0saUJBQU8sRUFBRSxNQUFNO0FBQUVBLDZCQUFpQixDQUFDLEdBQUQsQ0FBakI7QUFBeUIsV0FBaEQ7QUFBbUQsbUJBQVMsRUFBQztBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLGVBR0k7QUFBTSxpQkFBTyxFQUFFLE1BQU07QUFBRUEsNkJBQWlCLENBQUMsR0FBRCxDQUFqQjtBQUF5QixXQUFoRDtBQUFtRCxtQkFBUyxFQUFDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEosZUFJSTtBQUFNLGlCQUFPLEVBQUUsTUFBTTtBQUFFQSw2QkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFdBQWhEO0FBQW1ELG1CQUFTLEVBQUM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSixlQUtJO0FBQU0saUJBQU8sRUFBRSxNQUFNO0FBQUVBLDZCQUFpQixDQUFDLEdBQUQsQ0FBakI7QUFBeUIsV0FBaEQ7QUFBbUQsbUJBQVMsRUFBQztBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKLGVBTUk7QUFBTSxpQkFBTyxFQUFFLE1BQU07QUFBRUEsNkJBQWlCLENBQUMsR0FBRCxDQUFqQjtBQUF5QixXQUFoRDtBQUFtRCxtQkFBUyxFQUFDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkosZUFPSTtBQUFNLGlCQUFPLEVBQUUsTUFBTTtBQUFFQSw2QkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFdBQWhEO0FBQW1ELG1CQUFTLEVBQUM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQSixlQVFJO0FBQU0saUJBQU8sRUFBRSxNQUFNO0FBQUV4QyxvQkFBUSxDQUFDMkMsTUFBVCxHQUFrQixDQUFsQixJQUF1Qkwsa0JBQWtCLEVBQXpDO0FBQThDLFdBQXJFO0FBQXdFLGVBQUssRUFBQztBQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkEzQkosRUFxQ0txQyxhQXJDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFsRmE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFyQjs7QUEySEEsUUFBTUUsZUFBZSxnQkFBRztBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBLDRCQUNwQjtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBLGdCQUNLL0UsTUFBTSxJQUFJQSxNQUFNLENBQUMwQixTQUFqQixpQkFBOEI7QUFBQSwrQkFDM0I7QUFBQSxrQ0FDSTtBQUFBLG1DQUNJO0FBQUEsc0NBQUk7QUFBTSx5QkFBUyxFQUFDLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFKLEVBQXdDMUIsTUFBTSxDQUFDMEIsU0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixFQUlLdEIsU0FBUyxDQUFDc0UsR0FBVixDQUFjLENBQUNNLENBQUQsRUFBR0MsQ0FBSCxrQkFDWDtBQUFBLG1DQUNJO0FBQUEsc0NBQUk7QUFBTSx5QkFBUyxFQUFDLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFKLEVBQXdDRCxDQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixhQUFVLGVBQWNDLENBQUUsRUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESCxDQUpMLEVBU0ssQ0FBQ3JFLE1BQUQsaUJBQVc7QUFBQSxtQ0FDUjtBQUFBLHFDQUNJO0FBQU0seUJBQVMsRUFBQyxhQUFoQjtBQUNDLHVCQUFPLEVBQUUsTUFBTTtBQUFDNEMsdUJBQUssQ0FBRSxzQkFBcUJsRCxrQkFBa0IsQ0FBQzRDLElBQW5CLENBQXdCLElBQXhCLENBQThCLHNCQUFxQnhDLGdCQUFnQixDQUFDd0MsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBNEIsRUFBdEcsQ0FBTDtBQUErRyxpQkFEaEk7QUFBQSxtQ0FFUWhELFFBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURRO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVGhCLEVBZ0JLTSxPQUFPLENBQUNrRSxHQUFSLENBQVksQ0FBQ00sQ0FBRCxFQUFHQyxDQUFILGtCQUNUO0FBQUEsbUNBQ0k7QUFBQSx5QkFBS0QsQ0FBTCxlQUFPO0FBQU0seUJBQVMsRUFBQyxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixhQUFVLGFBQVlDLENBQUUsRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESCxDQWhCTCxlQXFCSTtBQUFBLG1DQUNJO0FBQUEseUJBQUtqRixNQUFNLENBQUMyQixVQUFaLGVBQXVCO0FBQU0seUJBQVMsRUFBQyxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRDJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEb0IsRUE4Qm5CM0IsTUFBTSxJQUFJQSxNQUFNLENBQUMwQixTQUFqQixJQUE4QixDQUFDZCxNQUEvQixpQkFBeUM7QUFBQSw4QkFDdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHNDLEVBRXJDTSxjQUFjLENBQUN3RCxHQUFmLENBQW1CLENBQUNNLENBQUQsRUFBR0MsQ0FBSCxrQkFDaEI7QUFDQSxlQUFPLEVBQUUsTUFBTTtBQUNYOUUscUJBQVcsQ0FBQzZFLENBQUMsQ0FBQ3pDLFdBQUYsRUFBRCxDQUFYO0FBQ0FILHdCQUFjO0FBQ2pCLFNBSkQ7QUFBQSxtQkFJSTRDLENBSko7QUFBQSxTQUFZLGdCQUFlQyxDQUFFLEVBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREgsQ0FGcUMsZUFTdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVHNDLEVBVXJDOUQsWUFBWSxDQUFDdUQsR0FBYixDQUFpQixDQUFDTSxDQUFELEVBQUdDLENBQUgsa0JBQ2Q7QUFDQSxlQUFPLEVBQUUsTUFBTTtBQUNYOUUscUJBQVcsQ0FBQzZFLENBQUMsQ0FBQ3pDLFdBQUYsRUFBRCxDQUFYO0FBQ0FILHdCQUFjO0FBQ2pCLFNBSkQ7QUFBQSxtQkFJSTRDLENBSko7QUFBQSxTQUFZLGNBQWFDLENBQUUsRUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESCxDQVZxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUJ0QixFQWdEbkJyRSxNQUFNLGdCQUNIO0FBQUcsZUFBUyxFQUFDLGFBQWI7QUFBQSx3REFBMkNSLFNBQVMsQ0FBQ3lDLE1BQVYsR0FBbUJyQyxPQUFPLENBQUNxQyxNQUEzQixHQUFvQyxDQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREcsZ0JBR0g7QUFBQSxpQkFDS2lDLFlBREwsZUFFSTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSxtQkFDSzFFLFNBQVMsQ0FBQ3lDLE1BQVYsR0FBbUJyQyxPQUFPLENBQUNxQyxNQUEzQixHQUFvQyxDQUFwQyxpQkFDRDtBQUFRLGlCQUFPLEVBQUUsTUFBTTtBQUFDeEMsd0JBQVksQ0FBQyxFQUFELENBQVo7QUFBa0JJLHNCQUFVLENBQUMsRUFBRCxDQUFWO0FBQWdCTix1QkFBVyxDQUFDLEVBQUQsQ0FBWDtBQUFpQixXQUEzRTtBQUNBLHlCQUFZLFNBRFo7QUFDc0IsZUFBSyxFQUFDLHdCQUQ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixlQU9JO0FBQVEsaUJBQU8sRUFBRSxNQUFNO0FBQUNxRCxpQkFBSyxDQUFDLDhLQUFELENBQUw7QUFBdUwsV0FBL007QUFDQSx5QkFBWSxTQURaO0FBQ3NCLGVBQUssRUFBQyxtQkFENUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEosZUFZSTtBQUFRLG1CQUFTLEVBQUMsU0FBbEI7QUFBNEIsaUJBQU8sRUFBRSxNQUFNO0FBQUN4QiwwQkFBYztBQUFJLFdBQTlEO0FBQ0EseUJBQVksU0FEWjtBQUNzQixlQUFLLEVBQUMsMENBRDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkRnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBeEI7O0FBMEVBLFFBQU1rRCxZQUFZLGdCQUFHO0FBQUksYUFBUyxFQUFDLGFBQWQ7QUFBQSw0QkFDakI7QUFBQSw4QkFBSTtBQUFNLGlCQUFTLEVBQUMsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURpQixlQUVqQjtBQUFBLDhCQUFJO0FBQU0saUJBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRmlCLGVBR2pCO0FBQUEsOEJBQUk7QUFBTSxpQkFBUyxFQUFDLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIaUIsZUFJakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSmlCLGVBS2pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxpQixlQU1qQjtBQUFBLDRDQUFjO0FBQU0saUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXJCOztBQVFBLFFBQU1DLFdBQVcsZ0JBQUc7QUFBQSw0QkFDaEIsOERBQUMsaURBQUQ7QUFBVSxVQUFJLEVBQUVuRixNQUFNLENBQUMwQixTQUF2QjtBQUFrQyxpQkFBVyxFQUFDLEdBQTlDO0FBQWtELGVBQVMsRUFBQyxHQUE1RDtBQUFnRSxrQkFBWSxFQUFDLEdBQTdFO0FBQWlGLGVBQVMsRUFBQyxHQUEzRjtBQUNLLGlCQUFXLEVBQUUsTUFBTSxDQUFFLENBRDFCO0FBQzRCLGdCQUFVLEVBQUUsQ0FBQztBQUR6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURnQixFQUdmdEIsU0FBUyxDQUFDc0UsR0FBVixDQUFjLENBQUNVLENBQUQsRUFBR0MsRUFBSCxrQkFDWCw4REFBQyxpREFBRDtBQUF3QyxVQUFJLEVBQUVELENBQTlDO0FBQWlELGlCQUFXLEVBQUMsR0FBN0Q7QUFBaUUsZUFBUyxFQUFDLEdBQTNFO0FBQStFLGtCQUFZLEVBQUMsR0FBNUY7QUFBZ0csZUFBUyxFQUFDLEdBQTFHO0FBQ0MsaUJBQVcsRUFBRSxNQUFNO0FBQUNyQix1QkFBZSxDQUFDc0IsRUFBRCxDQUFmO0FBQXFCLE9BRDFDO0FBQzRDLGdCQUFVLEVBQUVBLEVBQUUsR0FBQztBQUQzRCxPQUFnQixlQUFjQSxFQUFHLEdBQUVELENBQUUsRUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESCxDQUhlLEVBT2Y1RSxPQUFPLENBQUNrRSxHQUFSLENBQVksQ0FBQ1UsQ0FBRCxFQUFHQyxFQUFILGtCQUNULDhEQUFDLGlEQUFEO0FBQXNDLFVBQUksRUFBRUQsQ0FBNUM7QUFBK0MsaUJBQVcsRUFBQyxHQUEzRDtBQUErRCxlQUFTLEVBQUMsR0FBekU7QUFBNkUsa0JBQVksRUFBQyxHQUExRjtBQUE4RixlQUFTLEVBQUMsR0FBeEc7QUFDQyxpQkFBVyxFQUFFLE1BQU07QUFBQ2pCLHFCQUFhLENBQUNrQixFQUFELENBQWI7QUFBbUIsT0FEeEM7QUFDMEMsZ0JBQVUsRUFBRUEsRUFBRSxHQUFDO0FBRHpELE9BQWdCLGFBQVlBLEVBQUcsR0FBRUQsQ0FBRSxFQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURILENBUGUsZUFXaEIsOERBQUMsaURBQUQ7QUFBVSxVQUFJLEVBQUVwRixNQUFNLENBQUMyQixVQUF2QjtBQUFtQyxpQkFBVyxFQUFDLEdBQS9DO0FBQW1ELGVBQVMsRUFBQyxHQUE3RDtBQUFpRSxrQkFBWSxFQUFDLEdBQTlFO0FBQWtGLGVBQVMsRUFBQyxHQUE1RjtBQUNLLGlCQUFXLEVBQUUsTUFBTSxDQUFFLENBRDFCO0FBQzRCLGdCQUFVLEVBQUUsQ0FBQztBQUR6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBcEI7O0FBY0EsUUFBTTJELFdBQVcsZ0JBQUc7QUFBQSwyQkFDaEI7QUFBQSxpQkFDSyxDQUFDMUUsTUFBTSxJQUFJLENBQUNFLE9BQVosa0JBQXdCO0FBQUEsK0JBQUk7QUFBQSxvQkFBSzJEO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRDdCLEVBRUt6RSxNQUFNLElBQUlBLE1BQU0sQ0FBQzBCLFNBQWpCLGlCQUE4QjtBQUFBLCtCQUFJO0FBQUEsb0JBQUtrRDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZuQyxlQUdJO0FBQUEsK0JBQUk7QUFBQSxvQkFBS0c7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFwQjs7QUFPQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDhDQUVJO0FBQVEsaUJBQVMsRUFBQyxVQUFsQjtBQUE2QixlQUFPLEVBQUUsTUFBTTtBQUFDdkYsb0JBQVUsQ0FBQyxNQUFELENBQVY7QUFBb0IsU0FBakU7QUFBQSwrQkFDSTtBQUFHLG1CQUFTLEVBQUMsZ0JBQWI7QUFBOEIseUJBQVksU0FBMUM7QUFBb0QsZUFBSyxFQUFDLE1BQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFPSytGLHlEQUFRLGdCQUNUO0FBQUEsaUJBQ0tELFdBREwsRUFFS3RGLE1BQU0sSUFBSUEsTUFBTSxDQUFDMEIsU0FBakIsSUFBOEIsQ0FBQ2QsTUFBL0IsSUFBeUN1RSxXQUY5QyxFQUdLbkYsTUFBTSxJQUFJQSxNQUFNLENBQUMwQixTQUFqQixJQUE4QixDQUFDZCxNQUEvQixJQUF5Q3NFLFlBSDlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUyxnQkFPVDtBQUFBLDZCQUNJO0FBQU8saUJBQVMsRUFBRy9CLENBQUQsSUFBTztBQUFFbEIsdUJBQWEsQ0FBQ2tCLENBQUQsQ0FBYjtBQUFtQixTQUE5QztBQUFpRCxnQkFBUSxFQUFFLENBQUMsQ0FBNUQ7QUFBQSwrQkFDSTtBQUFBLGlDQUNJO0FBQUEsb0NBQ0k7QUFBSSx1QkFBUyxFQUFDLFVBQWQ7QUFBQSx5QkFDS21DLFdBREwsRUFFS3RGLE1BQU0sSUFBSUEsTUFBTSxDQUFDMEIsU0FBakIsSUFBOEIsQ0FBQ2QsTUFBL0IsaUJBQXlDO0FBQUEsd0NBQ3RDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURzQyxlQUV0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFGc0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUY5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosRUFRS1osTUFBTSxJQUFJQSxNQUFNLENBQUMwQixTQUFqQixJQUE4QixDQUFDZCxNQUEvQixpQkFBeUM7QUFBSSx1QkFBUyxFQUFDLFVBQWQ7QUFBQSxzQ0FDdEM7QUFBSyx5QkFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURzQyxFQUlyQ3VFLFdBSnFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFSOUMsRUFjS25GLE1BQU0sSUFBSUEsTUFBTSxDQUFDMEIsU0FBakIsSUFBOEIsQ0FBQ2QsTUFBL0IsaUJBQXlDO0FBQUksdUJBQVMsRUFBQyxVQUFkO0FBQUEsc0NBQzFDO0FBQUsseUJBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFEMEMsRUFJckNzRSxZQUpxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBZDlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkSixlQTBDSTtBQUFBLGdCQUNLbEYsTUFBTSxJQUFJQSxNQUFNLENBQUM2QixLQUFqQixJQUEwQjdCLE1BQU0sQ0FBQzZCLEtBQVAsQ0FBYWdCLE1BQWIsR0FBc0IsQ0FBaEQsaUJBQ0Q7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQSxrQkFDSzdDLE1BQU0sQ0FBQzZCLEtBQVAsQ0FBYTZDLEdBQWIsQ0FBaUIsQ0FBQ0MsQ0FBRCxFQUFHTSxDQUFILGtCQUNkO0FBQUEsb0JBQXFCTjtBQUFyQixXQUFTLE9BQU1NLENBQUUsRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXNESCxDQXJjRDs7R0FBTTFGLFk7O0tBQUFBLFk7QUF1Y04sK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWNjZDdlYzQ0YzUzNmZlNDZhZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSBcInJlYWN0LWRldmljZS1kZXRlY3RcIjtcclxuaW1wb3J0IHsgY291bnRTd2FwcywgYXJlQW5hZ3JhbXMsIGlzRHJvcCwgaXNXb3JkVmFsaWQsIGdldFRyYW5zbW9ncmlmeVZhbGlkTmV4dFdvcmRzIH0gZnJvbSAnLi4vLi4vbGliL3dvcmRmdW5jdGlvbnMnO1xyXG5pbXBvcnQgU2hvd2luZm8gZnJvbSAnLi4vd2kvc2hvd2luZm8nXHJcblxyXG5jb25zdCBUcmFuc21vZ3JpZnkgPSAoe3NldFdoZXJldG99KSA9PiB7XHJcbiAgICBjb25zdCBba2V5Ym9hcmRWZXJzaW9uLCBzZXRLZXlib2FyZFZlcnNpb25dID0gdXNlU3RhdGUoJ2NrdjEnKTtcclxuICAgIGNvbnN0IFtudW1Nb3Zlcywgc2V0TnVtTW92ZXNdID0gdXNlU3RhdGUoMik7XHJcbiAgICBjb25zdCBiYXNldXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbSc7XHJcbiAgICBjb25zdCBudW1Nb3Zlc0FycmF5ID0gWzIsMyw0LDUsNiw3LDgsOV07XHJcbiAgICBjb25zdCBbcHV6emxlLCBzZXRQdXp6bGVdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW25leHRXb3JkLCBzZXROZXh0V29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZG93bldvcmRzLCBzZXREb3duV29yZHNdID0gdXNlU3RhdGUoW10pOyAvLyBVc2VycyB3b3JkcyBnb2luZyBkb3duIGZyb20gdGhlIHN0YXJ0IHdvcmRcclxuICAgIGNvbnN0IFt2YWxpZE5leHREb3duV29yZHMsIHNldFZhbGlkTmV4dERvd25Xb3Jkc10gPSB1c2VTdGF0ZShbXSk7IC8vIFZhbGlkIG5leHQgd29yZHMgaW4gZG93biBkaXJlY3Rpb25cclxuICAgIGNvbnN0IFt1cFdvcmRzLCBzZXRVcFdvcmRzXSA9IHVzZVN0YXRlKFtdKTsgLy8gVXNlcnMgd29yZHMgZ29pbmcgdXAgZnJvbSB0aGUgdGFyZ2V0IHdvcmRcclxuICAgIGNvbnN0IFt2YWxpZE5leHRVcFdvcmRzLCBzZXRWYWxpZE5leHRVcFdvcmRzXSA9IHVzZVN0YXRlKFtdKTsgLy8gVmFsaWQgbmV4dCB3b3JkcyBpbiB1cCBkaXJlY3Rpb25cclxuICAgIGNvbnN0IFtzb2x2ZWQsIHNldFNvbHZlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc29sdmluZywgc2V0U29sdmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBjYWxsRm9yUHV6emxlID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcclxuICAgICAgICBsZXQgdmFsaWREb3duV29yZHMgPSBbXTtcclxuICAgICAgICBsZXQgdmFsaWRVcFdvcmRzID0gW107XHJcbiAgICAgICAgbGV0IG5ld1NvbHZpbmcgPSBmYWxzZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gYCR7YmFzZXVybH0vRU5BQkxFMks/dHJhbnNtb2dyaWZ5PXRydWUmbnVtTW92ZXM9JHtudW1Nb3Zlc31gO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgICAgIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIHZhbGlkRG93bldvcmRzID0gYXdhaXQgZ2V0VHJhbnNtb2dyaWZ5VmFsaWROZXh0V29yZHMoZGF0YS5zdGFydFdvcmQpO1xyXG4gICAgICAgICAgICB2YWxpZFVwV29yZHMgPSBhd2FpdCBnZXRUcmFuc21vZ3JpZnlWYWxpZE5leHRXb3JkcyhkYXRhLnRhcmdldFdvcmQpO1xyXG4gICAgICAgICAgICBuZXdTb2x2aW5nID0gdHJ1ZTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBkYXRhLm5vdGVzID0gW1wiUHJvYmxlbSB3aXRoIHRoZSBzZXJ2ZXIuIFNvcnJ5IGFib3V0IHRoYXQuXCJdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFB1enpsZShkYXRhKTtcclxuICAgICAgICBzZXREb3duV29yZHMoW10pO1xyXG4gICAgICAgIHNldFZhbGlkTmV4dERvd25Xb3Jkcyh2YWxpZERvd25Xb3Jkcyk7XHJcbiAgICAgICAgc2V0VXBXb3JkcyhbXSk7XHJcbiAgICAgICAgc2V0VmFsaWROZXh0VXBXb3Jkcyh2YWxpZFVwV29yZHMpO1xyXG4gICAgICAgIHNldE5leHRXb3JkKCcnKTtcclxuICAgICAgICBzZXRTb2x2ZWQoZmFsc2UpO1xyXG4gICAgICAgIHNldFNvbHZpbmcobmV3U29sdmluZyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBxdWl0VGhpc1B1enpsZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRTb2x2aW5nKGZhbHNlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSBhc3luYyhldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRjEyXCIpIHtyZXR1cm47fVxyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICBhY2NlcHROZXh0V29yZChldmVudCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgayA9IGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChrID09PSBcIkJBQ0tTUEFDRVwiKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZURlbGV0ZUxldHRlcigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoL15bQS1aXSQvLnRlc3QoaykpIHsgLy8gSXMgYSBsZXR0ZXJcclxuICAgICAgICAgICAgaGFuZGxlSW5wdXRMZXR0ZXIoayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRMZXR0ZXIgPSAobGV0dGVyKSA9PiB7XHJcbiAgICAgICAgbGV0IHNvZmFyID0gbmV4dFdvcmQgKyBsZXR0ZXI7XHJcbiAgICAgICAgc2V0TmV4dFdvcmQoc29mYXIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlTGV0dGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChuZXh0V29yZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBzb2ZhciA9IEFycmF5LmZyb20obmV4dFdvcmQpO1xyXG4gICAgICAgICAgICBzb2Zhci5wb3AoKTtcclxuICAgICAgICAgICAgbGV0IG5ld3NvZmFyID0gc29mYXIuam9pbignJyk7XHJcbiAgICAgICAgICAgIHNldE5leHRXb3JkKG5ld3NvZmFyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBhY2NlcHROZXh0V29yZCA9IGFzeW5jKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKG5leHRXb3JkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElzIHRoZSB3b3JkIHZhbGlkIGluIHRoZSBkb3duIGRpcmVjdGlvbj9cclxuICAgICAgICBsZXQgcHJldldvcmQgPSAoZG93bldvcmRzLmxlbmd0aCA9PT0gMCA/IHB1enpsZS5zdGFydFdvcmQgOiBkb3duV29yZHNbZG93bldvcmRzLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICBsZXQgbmV3V29yZCA9IG5leHRXb3JkOyAvLyB1cHBlciBjYXNlXHJcbiAgICAgICAgaWYgKHZhbGlkTW92ZShwcmV2V29yZCwgbmV3V29yZCkpIHtcclxuICAgICAgICAgICAgaWYgKCFhd2FpdCBpc1dvcmRWYWxpZChuZXdXb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYCR7bmV3V29yZH0gaXMgbm90IGEgdmFsaWQgd29yZGApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHdvcmRCZWxvd05ld1dvcmQgPSAodXBXb3Jkcy5sZW5ndGggPT09IDAgPyBwdXp6bGUudGFyZ2V0V29yZCA6IHVwV29yZHNbMF0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0Rvd25Xb3JkcyA9IFsuLi5kb3duV29yZHNdO1xyXG4gICAgICAgICAgICAgICAgbmV3RG93bldvcmRzLnB1c2gobmV3V29yZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRNb3ZlKG5ld1dvcmQsIHdvcmRCZWxvd05ld1dvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RG93bldvcmRzKG5ld0Rvd25Xb3Jkcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TmV4dFdvcmQoJycpOyAgICBcclxuICAgICAgICAgICAgICAgICAgICBzZXRTb2x2ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWxpZE5leHRXb3JkcyA9IGF3YWl0IGdldFRyYW5zbW9ncmlmeVZhbGlkTmV4dFdvcmRzKG5ld1dvcmQpOyAvLyBsb3dlciBjYXNlIHZhbGlkIG5leHQgd29yZHNcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWxpZE5leHREb3duV29yZHModmFsaWROZXh0V29yZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERvd25Xb3JkcyhuZXdEb3duV29yZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE5leHRXb3JkKCcnKTsgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBJcyB0aGUgd29yZCB2YWxpZCBpbiB0aGUgdXAgZGlyZWN0aW9uP1xyXG4gICAgICAgICAgICBwcmV2V29yZCA9ICh1cFdvcmRzLmxlbmd0aCA9PT0gMCA/IHB1enpsZS50YXJnZXRXb3JkIDogdXBXb3Jkc1swXSk7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZE1vdmUocHJldldvcmQsIG5ld1dvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWF3YWl0IGlzV29yZFZhbGlkKG5ld1dvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoYCR7bmV3V29yZH0gaXMgbm90IGEgdmFsaWQgd29yZGApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgd29yZEFib3ZlTmV3V29yZCA9IChkb3duV29yZHMubGVuZ3RoID09PSAwID8gcHV6emxlLnN0YXJ0V29yZCA6IGRvd25Xb3Jkc1tkb3duV29yZHMubGVuZ3RoLTFdKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VXBXb3JkcyA9IFtuZXdXb3JkLC4uLnVwV29yZHNdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZE1vdmUobmV3V29yZCwgd29yZEFib3ZlTmV3V29yZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXBXb3JkcyhuZXdVcFdvcmRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmV4dFdvcmQoJycpOyAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29sdmVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWxpZE5leHRXb3JkcyA9IGF3YWl0IGdldFRyYW5zbW9ncmlmeVZhbGlkTmV4dFdvcmRzKG5ld1dvcmQpOyAvLyBsb3dlciBjYXNlIHZhbGlkIG5leHQgd29yZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsaWROZXh0VXBXb3Jkcyh2YWxpZE5leHRXb3Jkcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFVwV29yZHMobmV3VXBXb3Jkcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE5leHRXb3JkKCcnKTsgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnT25seSBhbmFncmFtcywgZHJvcHMsIHN3YXBzIGFuZCBpbnNlcnRzIGFsbG93ZWQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCByZW1vdmVEb3duV29yZHMgPSh3aSkgPT4ge1xyXG4gICAgICAgIGlmICh3aSA8IGRvd25Xb3Jkcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGV0IG5ld1dvcmRzID0gWy4uLmRvd25Xb3Jkc107XHJcbiAgICAgICAgICAgIG5ld1dvcmRzLnNwbGljZSh3aSk7XHJcbiAgICAgICAgICAgIHNldERvd25Xb3JkcyhuZXdXb3Jkcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVtb3ZlVXBXb3JkcyA9KHdpKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpIDwgdXBXb3Jkcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGV0IG5ld1VwV29yZHMgPSBbLi4udXBXb3Jkc107XHJcbiAgICAgICAgICAgIG5ld1VwV29yZHMuc3BsaWNlKDAsd2krMSk7XHJcbiAgICAgICAgICAgIHNldFVwV29yZHMobmV3VXBXb3Jkcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdmFsaWRNb3ZlID0gKHByZXZXb3JkPVwiXCIsIG5ld1dvcmQ9XCJcIikgPT4ge1xyXG4gICAgICAgIHByZXZXb3JkID0gcHJldldvcmQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgbmV3V29yZCA9IG5ld1dvcmQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKHByZXZXb3JkID09PSBuZXdXb3JkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChhcmVBbmFncmFtcyhwcmV2V29yZCwgbmV3V29yZClcclxuICAgICAgICAgICAgfHwgY291bnRTd2FwcyhwcmV2V29yZCwgbmV3V29yZCkgPT09IDFcclxuICAgICAgICAgICAgfHwgaXNEcm9wKHByZXZXb3JkLCBuZXdXb3JkKVxyXG4gICAgICAgICAgICB8fCBpc0Ryb3AobmV3V29yZCwgcHJldldvcmQpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IEdhbWVTdGFydFNlY3Rpb24gPSA8ZGl2IGNsYXNzTmFtZT1cInRtX251bU1vdmVzRGl2XCI+XHJcbiAgICAgICAgPGgzPk51bWJlciBPZiBNb3ZlczwvaDM+XHJcbiAgICAgICAge251bU1vdmVzQXJyYXkubWFwKChuKSA9PiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgdG1fJHtuID09PSBudW1Nb3ZlcyA/ICdudW1Nb3Zlc1NlbGVjdGVkJyA6ICdudW1Nb3Zlc1Vuc2VsZWN0ZWQnfWB9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2BjaG9vc2VOdW1Nb3ZlcyR7bn1gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXROdW1Nb3ZlcyhuKTsgfSB9XHJcbiAgICAgICAgICAgID57bn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bV9zdGFydFB1enpsZURpdlwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cInN0YXJ0UHV6emxlXCIgY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7IGNhbGxGb3JQdXp6bGUoKTsgfSB9PlxyXG4gICAgICAgICAgICAgICAgU3RhcnQgUHV6emxlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgUHV6emxlU2VjdGlvbiA9IDxkaXYgY2xhc3NOYW1lPVwidG1fcHV6emxlRGl2XCI+XHJcbiAgICAgICAgPHNwYW4+e3B1enpsZS5zdGFydFdvcmR9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPnRvPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPntwdXp6bGUudGFyZ2V0V29yZH08L3NwYW4+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8c3Bhbj5UYXJnZXQ6PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPntwdXp6bGUubnVtTW92ZXN9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPm1vdmVzPC9zcGFuPlxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgU3VibWl0V29yZERpdiA9IDxkaXYgY2xhc3NOYW1lPVwidG1fS2V5R29EaXZcIj5cclxuICAgICAgICA8YnV0dG9uIGtleT1cImtleUdvXCIgb25DbGljaz17YWNjZXB0TmV4dFdvcmR9IGNsYXNzTmFtZT17YHRtX0tleUdvICR7bmV4dFdvcmQubGVuZ3RoID4gMCA/IFwiXCIgOiBcImRpc2FibGVkXCJ9YH0+XHJcbiAgICAgICAgICAgIFNVQk1JVCBXT1JEXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj47XHJcbiAgICBjb25zdCBTaG93S2V5Ym9hcmQgPSA8ZGl2PlxyXG4gICAgICAgIHtrZXlib2FyZFZlcnNpb24gPT09ICdja3YxJyA/XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tS2V5Ym9hcmRWMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hrYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwic3dpdGNoYmt2MVwiIG9uQ2xpY2s9eygpID0+IHtzZXRLZXlib2FyZFZlcnNpb24oJ2NrdjInKTt9fT5zd2l0Y2gga2V5Ym9hcmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJja3YxUm93MVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1EnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgUVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdXJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIFdcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignRScpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBFXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1InKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgUlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdUJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIFRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignWScpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBZXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1UnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgVVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdJJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIElcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignTycpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBPXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1AnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgUFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJja3YxUm93MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0EnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgQVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdTJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIFNcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignRCcpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBEXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0YnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgRlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdHJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIEdcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignSCcpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBIXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0onKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgSlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdLJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIEtcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignTCcpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBMXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNrdjFSb3czXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignWicpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBaXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1gnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgWFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdDJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIENcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignVicpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBWXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0InKTsgfSB9IGNsYXNzTmFtZT1cImNrdjEgQlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdOJyk7IH0gfSBjbGFzc05hbWU9XCJja3YxIE5cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignTScpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MSBNXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgbmV4dFdvcmQubGVuZ3RoID4gMCAmJiBoYW5kbGVEZWxldGVMZXR0ZXIoKTsgfSB9IGNsYXNzPVwiY2t2MSBCYWNrc3BhY2VcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtTdWJtaXRXb3JkRGl2fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA6IGtleWJvYXJkVmVyc2lvbiA9PT0gJ2NrdjInID9cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21LZXlib2FyZFYyIFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hrYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwic3dpdGNoYmt2MlwiIG9uQ2xpY2s9eygpID0+IHtzZXRLZXlib2FyZFZlcnNpb24oJ2NrdjMnKTt9fT5zd2l0Y2gga2V5Ym9hcmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJja3YyUm93MVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1EnKTsgfSB9PlE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignVycpOyB9IH0+Vzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdFJyk7IH0gfT5FPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1InKTsgfSB9PlI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignVCcpOyB9IH0+VDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdZJyk7IH0gfT5ZPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1UnKTsgfSB9PlU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignSScpOyB9IH0+STwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdPJyk7IH0gfT5PPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1AnKTsgfSB9PlA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2t2MlJvdzJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdBJyk7IH0gfT5BPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1MnKTsgfSB9PlM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignRCcpOyB9IH0+RDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdGJyk7IH0gfT5GPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0cnKTsgfSB9Pkc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignSCcpOyB9IH0+SDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdKJyk7IH0gfT5KPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0snKTsgfSB9Pks8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignTCcpOyB9IH0+TDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJja3YyUm93M1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1onKTsgfSB9Plo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignWCcpOyB9IH0+WDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdDJyk7IH0gfT5DPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1YnKTsgfSB9PlY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignQicpOyB9IH0+Qjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdOJyk7IH0gfT5OPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ00nKTsgfSB9Pk08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBuZXh0V29yZC5sZW5ndGggPiAwICYmIGhhbmRsZURlbGV0ZUxldHRlcigpOyB9IH0gY2xhc3M9XCJ0bV9CYWNrc3BhY2VcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtTdWJtaXRXb3JkRGl2fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA6XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tS2V5Ym9hcmRWM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hrYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwic3dpdGNoYmt2M1wiIG9uQ2xpY2s9eygpID0+IHtzZXRLZXlib2FyZFZlcnNpb24oJ2NrdjEnKTt9fT5zd2l0Y2gga2V5Ym9hcmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJja3YzUm93MVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1EnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjMgUVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdXJyk7IH0gfSBjbGFzc05hbWU9XCJja3YzIFdcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignRScpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MyBFXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1InKTsgfSB9IGNsYXNzTmFtZT1cImNrdjMgUlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdUJyk7IH0gfSBjbGFzc05hbWU9XCJja3YzIFRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignWScpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MyBZXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1UnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjMgVVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdJJyk7IH0gfSBjbGFzc05hbWU9XCJja3YzIElcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignTycpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MyBPXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1AnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjMgUFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJja3YzUm93MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0EnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjMgQVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdTJyk7IH0gfSBjbGFzc05hbWU9XCJja3YzIFNcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignRCcpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MyBEXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0YnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjMgRlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdHJyk7IH0gfSBjbGFzc05hbWU9XCJja3YzIEdcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignSCcpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MyBIXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0onKTsgfSB9IGNsYXNzTmFtZT1cImNrdjMgSlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdLJyk7IH0gfSBjbGFzc05hbWU9XCJja3YzIEtcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignTCcpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MyBMXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNrdjNSb3czXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignWicpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MyBaXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1gnKTsgfSB9IGNsYXNzTmFtZT1cImNrdjMgWFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdDJyk7IH0gfSBjbGFzc05hbWU9XCJja3YzIENcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignVicpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MyBWXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0InKTsgfSB9IGNsYXNzTmFtZT1cImNrdjMgQlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdOJyk7IH0gfSBjbGFzc05hbWU9XCJja3YzIE5cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignTScpOyB9IH0gY2xhc3NOYW1lPVwiY2t2MyBNXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgbmV4dFdvcmQubGVuZ3RoID4gMCAmJiBoYW5kbGVEZWxldGVMZXR0ZXIoKTsgfSB9IGNsYXNzPVwiY2t2MyBCYWNrc3BhY2VcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtTdWJtaXRXb3JkRGl2fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICA8L2Rpdj47XHJcbiAgICBjb25zdCBTb2x1dGlvblNlY3Rpb24gPSA8ZGl2IGNsYXNzTmFtZT1cInRtX3NvbHV0aW9uT3V0ZXJEaXZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRtX3NvbHV0aW9uRGl2XCI+XHJcbiAgICAgICAgICAgIHtwdXp6bGUgJiYgcHV6emxlLnN0YXJ0V29yZCAmJiA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHNwYW4gY2xhc3NOYW1lPVwidG1fYXJyb3dcIj7ihqc8L3NwYW4+e3B1enpsZS5zdGFydFdvcmR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkb3duV29yZHMubWFwKCh3LGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YHVzZXJEb3duV29yZCR7aX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBjbGFzc05hbWU9XCJ0bV9hcnJvd1wiPuKGpzwvc3Bhbj57d308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIHshc29sdmVkICYmIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG1fbmV4dHdvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHthbGVydChgVmFsaWQgZG93biB3b3JkczpcXG4ke3ZhbGlkTmV4dERvd25Xb3Jkcy5qb2luKCcsICcpfVxcblZhbGlkIHVwIHdvcmRzOlxcbiR7dmFsaWROZXh0VXBXb3Jkcy5qb2luKCcsICcpfWApO319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+Jm5ic3A7e25leHRXb3JkfSZuYnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPn1cclxuICAgICAgICAgICAgICAgICAgICB7dXBXb3Jkcy5tYXAoKHcsaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgdXNlclVwV29yZCR7aX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57d308c3BhbiBjbGFzc05hbWU9XCJ0bV9hcnJvd1wiPuKGpTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwdXp6bGUudGFyZ2V0V29yZH08c3BhbiBjbGFzc05hbWU9XCJ0bV9hcnJvd1wiPuKGpTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7cHV6emxlICYmIHB1enpsZS5zdGFydFdvcmQgJiYgIXNvbHZlZCAmJiA8ZGl2PlxyXG4gICAgICAgICAgICA8cD5WYWxpZCBkb3duIHdvcmRzOjwvcD5cclxuICAgICAgICAgICAge3ZhbGlkRG93bldvcmRzLm1hcCgodyxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2B2YWxpZGRvd253b3JkJHtpfWB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TmV4dFdvcmQody50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBhY2NlcHROZXh0V29yZCgpO1xyXG4gICAgICAgICAgICAgICAgfX0+e3d9Jm5wc3A7PC9zcGFuPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPHA+VmFsaWQgdXAgd29yZHM6PC9wPlxyXG4gICAgICAgICAgICB7dmFsaWRVcFdvcmRzLm1hcCgodyxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2B2YWxpZHVwd29yZCR7aX1gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE5leHRXb3JkKHcudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0TmV4dFdvcmQoKTtcclxuICAgICAgICAgICAgICAgIH19Pnt3fSZucHNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIHtzb2x2ZWQgP1xyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0bV9jb25ncmF0c1wiPvCfkY/wn4+9IFNvbHZlZCBpbiB7ZG93bldvcmRzLmxlbmd0aCArIHVwV29yZHMubGVuZ3RoICsgMX0gbW92ZXMg8J+Rj/Cfj708L3A+XHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge1Nob3dLZXlib2FyZH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG1fbGFzdGJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZG93bldvcmRzLmxlbmd0aCArIHVwV29yZHMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge3NldERvd25Xb3JkcyhbXSk7IHNldFVwV29yZHMoW10pOyBzZXROZXh0V29yZCgnJyk7fX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlJlbW92ZSBhbGwgZW50ZXIgd29yZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUkVTRVRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7YWxlcnQoJ1ZhbGlkIG5leHQgd29yZCBvcHRpb25zOlxcblN3YXAgb25lIGxldHRlciwgZS5nLiBDQVQgdG8gQ09UXFxuRHJvcCBvbmUgbGV0dGVyLCBlLmcuIFNXSUcgdG8gV0lHXFxuSW5zZXJ0IG9uZSBsZXR0ZXIsIGUuZy4gTUFUIHRvIE1BVEgsIG9yIEhJUCB0byBXSElQXFxuQW5hZ3JhbSwgZS5nLiBBQ1QgdG8gQ0FUJyk7fX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlNob3cgaW5zdHJ1Y3Rpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhFTFBcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRtX3F1aXRcIiBvbkNsaWNrPXsoKSA9PiB7cXVpdFRoaXNQdXp6bGUoKTt9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiUXVpdCB0aGlzIHB1enpsZS4gWW91IGNhbiBzdGFydCBhbm90aGVyLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRVUlUXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgRXhwbGFpbkhpbnRzID0gPHVsIGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImluc2VydENvdW50XCI+Jm5ic3A7MSZuYnNwOzwvc3Bhbj5TaG93cyBpbnNlcnQgY291bnRzL2xldHRlcnM8L2xpPlxyXG4gICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJzd2FwQ291bnRcIj4mbmJzcDsyJm5ic3A7PC9zcGFuPlNob3dzIHN3YXBzIGNvdW50cy9sZXR0ZXJzPC9saT5cclxuICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiYW5hZ3JhbUNvdW50XCI+Mzwvc3Bhbj5TaG93cyBhbmFncmFtIGNvdW50cy93b3JkczwvbGk+XHJcbiAgICAgICAgPGxpPkNsaWNrIHRvIHRvZ2dsZSBiZXR3ZWVuIGNvdW50IGFuZCBpbmZvPC9saT5cclxuICAgICAgICA8bGk+VGhlIGJsYWNrIGRvdCByZXByZXNlbnRzIGEgZHJvcDwvbGk+XHJcbiAgICAgICAgPGxpPkNsaWNrIHRoZSA8c3BhbiBjbGFzc05hbWU9XCJjbG9zZW1lYnV0dG9uXCI+PC9zcGFuPiB0byByZW1vdmUgeW91ciB3b3JkPC9saT5cclxuICAgIDwvdWw+O1xyXG4gICAgY29uc3QgSGludFNlY3Rpb24gPSA8ZGl2PlxyXG4gICAgICAgIDxTaG93aW5mbyB3b3JkPXtwdXp6bGUuc3RhcnRXb3JkfSBzaG93SW5zZXJ0cz1cIllcIiBzaG93U3dhcHM9XCJZXCIgc2hvd0FuYWdyYW1zPVwiWVwiIHNob3dEcm9wcz1cIllcIlxyXG4gICAgICAgICAgICAgcmVtb3ZlRW50cnk9eygpID0+IHt9fSBlbnRyeUluZGV4PXstMX0vPlxyXG4gICAgICAgIHtkb3duV29yZHMubWFwKChnLGdpKSA9PiAoXHJcbiAgICAgICAgICAgIDxTaG93aW5mbyBrZXk9e2BoaW50ZG93bndvcmQke2dpfSR7Z31gfSB3b3JkPXtnfSBzaG93SW5zZXJ0cz1cIllcIiBzaG93U3dhcHM9XCJZXCIgc2hvd0FuYWdyYW1zPVwiWVwiIHNob3dEcm9wcz1cIllcIlxyXG4gICAgICAgICAgICAgcmVtb3ZlRW50cnk9eygpID0+IHtyZW1vdmVEb3duV29yZHMoZ2kpO319IGVudHJ5SW5kZXg9e2dpKzF9Lz5cclxuICAgICAgICApKX1cclxuICAgICAgICB7dXBXb3Jkcy5tYXAoKGcsZ2kpID0+IChcclxuICAgICAgICAgICAgPFNob3dpbmZvIGtleT17YGhpbnR1cHdvcmQke2dpfSR7Z31gfSB3b3JkPXtnfSBzaG93SW5zZXJ0cz1cIllcIiBzaG93U3dhcHM9XCJZXCIgc2hvd0FuYWdyYW1zPVwiWVwiIHNob3dEcm9wcz1cIllcIlxyXG4gICAgICAgICAgICAgcmVtb3ZlRW50cnk9eygpID0+IHtyZW1vdmVVcFdvcmRzKGdpKTt9fSBlbnRyeUluZGV4PXtnaSsxfS8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPFNob3dpbmZvIHdvcmQ9e3B1enpsZS50YXJnZXRXb3JkfSBzaG93SW5zZXJ0cz1cIllcIiBzaG93U3dhcHM9XCJZXCIgc2hvd0FuYWdyYW1zPVwiWVwiIHNob3dEcm9wcz1cIllcIlxyXG4gICAgICAgICAgICAgcmVtb3ZlRW50cnk9eygpID0+IHt9fSBlbnRyeUluZGV4PXstMX0vPlxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgTWFpblNlY3Rpb24gPSA8dGFibGU+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7KHNvbHZlZCB8fCAhc29sdmluZykgJiYgPHRyPjx0ZD57R2FtZVN0YXJ0U2VjdGlvbn08L3RkPjwvdHI+fVxyXG4gICAgICAgICAgICB7cHV6emxlICYmIHB1enpsZS5zdGFydFdvcmQgJiYgPHRyPjx0ZD57UHV6emxlU2VjdGlvbn08L3RkPjwvdHI+fVxyXG4gICAgICAgICAgICA8dHI+PHRkPntTb2x1dGlvblNlY3Rpb259PC90ZD48L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPjtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBUcmFuc21vZ3JpZnlcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2lzTW9iaWxlID9cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtNYWluU2VjdGlvbn1cclxuICAgICAgICAgICAgICAgIHtwdXp6bGUgJiYgcHV6emxlLnN0YXJ0V29yZCAmJiAhc29sdmVkICYmIEhpbnRTZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAge3B1enpsZSAmJiBwdXp6bGUuc3RhcnRXb3JkICYmICFzb2x2ZWQgJiYgRXhwbGFpbkhpbnRzfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIG9uS2V5RG93bj17KGUpID0+IHsgaGFuZGxlS2V5RG93bihlKTsgfSB9IHRhYkluZGV4PXstMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYWxpZ250b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7TWFpblNlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3B1enpsZSAmJiBwdXp6bGUuc3RhcnRXb3JkICYmICFzb2x2ZWQgJiYgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SWYgeW91ciBjb21wdXRlciBrZXlib2FyZCBpcyBub3QgcmVzcG9uZGluZyw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPmNsaWNrIHRoZSB0cmFuc21vZ3JpZnkgcGljdHVyZSBhbmQgdHJ5IGFnYWluLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3B1enpsZSAmJiBwdXp6bGUuc3RhcnRXb3JkICYmICFzb2x2ZWQgJiYgPHRkIGNsYXNzTmFtZT1cImFsaWdudG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bV9oaW50c2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtIaW50U2VjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3B1enpsZSAmJiBwdXp6bGUuc3RhcnRXb3JkICYmICFzb2x2ZWQgJiYgPHRkIGNsYXNzTmFtZT1cImFsaWdudG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRtX2hpbnRzaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpbnRzIEV4cGxhbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0V4cGxhaW5IaW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3B1enpsZSAmJiBwdXp6bGUubm90ZXMgJiYgcHV6emxlLm5vdGVzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJEYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHV6emxlLm5vdGVzLm1hcCgobixpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17YG5vdGUke2l9YH0+e259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJhbnNtb2dyaWZ5OyJdLCJzb3VyY2VSb290IjoiIn0=