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

  const callForPuzzle = async () => {
    let data = {};

    try {
      let url = `${baseurl}/ENABLE2K?transmogrify=true&numMoves=${numMoves}`;
      const response = await fetch(url);
      data = await response.json();
    } catch (error) {
      data.notes = ["Problem with the server. Sorry about that."];
      console.log(error);
    }

    setPuzzle(data);
    setWords([]);
    setNextWord('');
    setSolved(false);
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
      lineNumber: 62,
      columnNumber: 9
    }, undefined), numMovesArray.map(n => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: `tm_${n === numMoves ? 'numMovesSelected' : 'numMovesUnselected'}`,
      onClick: () => {
        setNumMoves(n);
      },
      children: n
    }, `chooseNumMoves${n}`, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
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
        lineNumber: 71,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 30
  }, undefined);

  const PuzzleSection = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "tm_puzzleDiv",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: puzzle.startWord
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "to"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: puzzle.targetWord
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "Target:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: puzzle.numMoves
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "moves"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 27
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
              lineNumber: 89,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 21
          }, undefined), words.map((w, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: w
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 50
            }, undefined)
          }, `userWord${i}`, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 25
          }, undefined)), !solved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: "..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 37
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 33
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: puzzle.targetWord
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }, undefined), solved ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "tm_congrats",
      children: ["\uD83D\uDC4F\uD83C\uDFFD Solved in ", words.length + 1, " moves \uD83D\uDC4F\uD83C\uDFFD"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "morphoKeyboard",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "morphoKeyrow1",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('Q');
            },
            className: "morphoKey",
            children: "Q"
          }, "keyQ", false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('W');
            },
            className: "morphoKey",
            children: "W"
          }, "keyW", false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('E');
            },
            className: "morphoKey",
            children: "E"
          }, "keyE", false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('R');
            },
            className: "morphoKey",
            children: "R"
          }, "keyR", false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('T');
            },
            className: "morphoKey",
            children: "T"
          }, "keyT", false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('Y');
            },
            className: "morphoKey",
            children: "Y"
          }, "keyY", false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('U');
            },
            className: "morphoKey",
            children: "U"
          }, "keyU", false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('I');
            },
            className: "morphoKey",
            children: "I"
          }, "keyI", false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('O');
            },
            className: "morphoKey",
            children: "O"
          }, "keyO", false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('P');
            },
            className: "morphoKey",
            children: "P"
          }, "keyP", false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "morphoKeyrow2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('A');
            },
            className: "morphoKey",
            children: "A"
          }, "keyA", false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('S');
            },
            className: "morphoKey",
            children: "S"
          }, "keyS", false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('D');
            },
            className: "morphoKey",
            children: "D"
          }, "keyD", false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('F');
            },
            className: "morphoKey",
            children: "F"
          }, "keyF", false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('G');
            },
            className: "morphoKey",
            children: "G"
          }, "keyG", false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('H');
            },
            className: "morphoKey",
            children: "H"
          }, "keyH", false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('J');
            },
            className: "morphoKey",
            children: "J"
          }, "keyJ", false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('K');
            },
            className: "morphoKey",
            children: "K"
          }, "keyK", false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('L');
            },
            className: "morphoKey",
            children: "L"
          }, "keyL", false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "morphoKeyrow3",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('Z');
            },
            className: "morphoKey",
            children: "Z"
          }, "keyZ", false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('X');
            },
            className: "morphoKey",
            children: "X"
          }, "keyX", false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('C');
            },
            className: "morphoKey",
            children: "C"
          }, "keyC", false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('V');
            },
            className: "morphoKey",
            children: "V"
          }, "keyV", false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('B');
            },
            className: "morphoKey",
            children: "B"
          }, "keyB", false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('N');
            },
            className: "morphoKey",
            children: "N"
          }, "keyN", false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('M');
            },
            className: "morphoKey",
            children: "M"
          }, "keyM", false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.BrowserView, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
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
            lineNumber: 141,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            onClick: acceptNextWord,
            children: "GO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "tm_lastbuttons",
        children: [words.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "tm_undo",
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
          lineNumber: 150,
          columnNumber: 21
        }, undefined), words.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "tm_reset",
          onClick: () => {
            setWords([]);
            setNextWord('');
          },
          "data-toggle": "tooltip",
          title: "Remove all enter words",
          children: "RESET"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "tm_help",
          onClick: () => {
            alert('Valid next word options:\nSwap one letter, e.g. CAT to COT\nDrop one letter, e.g. SWIG to WIG\nInsert one letter, e.g. MAT to MATH, or HIP to WHIP\nAnagram, e.g. ACT to CAT');
          },
          "data-toggle": "tooltip",
          title: "Show instructions",
          children: "HELP"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 85,
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
          lineNumber: 175,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: GameStartSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 21
        }, undefined), puzzle && puzzle.startWord && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: PuzzleSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 56
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 52
        }, undefined), puzzle && puzzle.startWord && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: SolutionSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 56
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 52
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: puzzle && puzzle.notes && puzzle.notes.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trDanger",
        children: puzzle.notes.map((n, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: n
        }, `note${i}`, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 171,
    columnNumber: 9
  }, undefined);
};

_s(Transmogrify, "ixsnl/iIxPALoTt6WzQflAzPPAk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG0vdG0uanMiXSwibmFtZXMiOlsiVHJhbnNtb2dyaWZ5Iiwic2V0V2hlcmV0byIsIm51bU1vdmVzIiwic2V0TnVtTW92ZXMiLCJ1c2VTdGF0ZSIsImJhc2V1cmwiLCJudW1Nb3Zlc0FycmF5IiwicHV6emxlIiwic2V0UHV6emxlIiwibmV4dFdvcmQiLCJzZXROZXh0V29yZCIsIndvcmRzIiwic2V0V29yZHMiLCJzb2x2ZWQiLCJzZXRTb2x2ZWQiLCJjYWxsRm9yUHV6emxlIiwiZGF0YSIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZXJyb3IiLCJub3RlcyIsImNvbnNvbGUiLCJsb2ciLCJhY2NlcHROZXh0V29yZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByZXZXb3JkIiwibGVuZ3RoIiwic3RhcnRXb3JkIiwibmV3V29yZCIsInZhbGlkTW92ZSIsImlzV29yZFZhbGlkIiwiYWxlcnQiLCJsYXN0V29yZCIsInRhcmdldFdvcmQiLCJuZXdXb3JkcyIsInB1c2giLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJhcmVBbmFncmFtcyIsImNvdW50U3dhcHMiLCJpc0Ryb3AiLCJHYW1lU3RhcnRTZWN0aW9uIiwibWFwIiwibiIsIlB1enpsZVNlY3Rpb24iLCJTb2x1dGlvblNlY3Rpb24iLCJ3IiwiaSIsImhhbmRsZUlucHV0TGV0dGVyIiwidGFyZ2V0IiwidmFsdWUiLCJrZXlDb2RlIiwicG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFlBQVksR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFrQjtBQUFBOztBQUNuQyxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLCtDQUFRLENBQUMsQ0FBRCxDQUF4QztBQUNBLFFBQU1DLE9BQU8sR0FBSSxLQUFELEdBQW9FLHVCQUFwRSxHQUE4RixDQUE5RztBQUNB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Y2svcGFnZXMvaW5kZXguNzA5NGY1MmMxYjUzYThiNTVjMzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJyb3dzZXJWaWV3LCBNb2JpbGVPbmx5VmlldyB9IGZyb20gXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCI7XHJcbmltcG9ydCB7IGNvdW50U3dhcHMsIGFyZUFuYWdyYW1zLCBpc0Ryb3AsIGlzV29yZFZhbGlkIH0gZnJvbSAnLi4vLi4vbGliL3dvcmRmdW5jdGlvbnMnO1xyXG5cclxuY29uc3QgVHJhbnNtb2dyaWZ5ID0gKHtzZXRXaGVyZXRvfSkgPT4ge1xyXG4gICAgY29uc3QgW251bU1vdmVzLCBzZXROdW1Nb3Zlc10gPSB1c2VTdGF0ZSgyKTtcclxuICAgIGNvbnN0IGJhc2V1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tJztcclxuICAgIGNvbnN0IG51bU1vdmVzQXJyYXkgPSBbMiwzLDQsNSw2LDcsOCw5XTtcclxuICAgIGNvbnN0IFtwdXp6bGUsIHNldFB1enpsZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbbmV4dFdvcmQsIHNldE5leHRXb3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt3b3Jkcywgc2V0V29yZHNdID0gdXNlU3RhdGUoW10pOyAvLyBVc2VycyB3b3Jkc1xyXG4gICAgY29uc3QgW3NvbHZlZCwgc2V0U29sdmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNhbGxGb3JQdXp6bGUgPSBhc3luYygpID0+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSBgJHtiYXNldXJsfS9FTkFCTEUySz90cmFuc21vZ3JpZnk9dHJ1ZSZudW1Nb3Zlcz0ke251bU1vdmVzfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICAgICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgZGF0YS5ub3RlcyA9IFtcIlByb2JsZW0gd2l0aCB0aGUgc2VydmVyLiBTb3JyeSBhYm91dCB0aGF0LlwiXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRQdXp6bGUoZGF0YSk7XHJcbiAgICAgICAgc2V0V29yZHMoW10pO1xyXG4gICAgICAgIHNldE5leHRXb3JkKCcnKTtcclxuICAgICAgICBzZXRTb2x2ZWQoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYWNjZXB0TmV4dFdvcmQgPSBhc3luYyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBwcmV2V29yZCA9ICh3b3Jkcy5sZW5ndGggPT09IDAgPyBwdXp6bGUuc3RhcnRXb3JkIDogd29yZHNbd29yZHMubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgIGxldCBuZXdXb3JkID0gbmV4dFdvcmQ7XHJcbiAgICAgICAgaWYgKHZhbGlkTW92ZShuZXdXb3JkLCBwcmV2V29yZCkpIHtcclxuICAgICAgICAgICAgaWYgKCFhd2FpdCBpc1dvcmRWYWxpZChuZXdXb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYCR7bmV3V29yZH0gaXMgbm90IGEgdmFsaWQgd29yZGApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxhc3RXb3JkID0gcHV6emxlLnRhcmdldFdvcmQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3V29yZHMgPSBbLi4ud29yZHNdO1xyXG4gICAgICAgICAgICAgICAgbmV3V29yZHMucHVzaChuZXdXb3JkKTtcclxuICAgICAgICAgICAgICAgIHNldFdvcmRzKG5ld1dvcmRzKTtcclxuICAgICAgICAgICAgICAgIHNldE5leHRXb3JkKCcnKTsgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRNb3ZlKG5ld1dvcmQsIGxhc3RXb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNvbHZlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdPbmx5IGFuYWdyYW1zLCBkcm9wcywgc3dhcHMgYW5kIGluc2VydHMgYWxsb3dlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB2YWxpZE1vdmUgPSAocHJldldvcmQ9XCJcIiwgbmV3V29yZD1cIlwiKSA9PiB7XHJcbiAgICAgICAgcHJldldvcmQgPSBwcmV2V29yZC50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBuZXdXb3JkID0gbmV3V29yZC50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAocHJldldvcmQgPT09IG5ld1dvcmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKGFyZUFuYWdyYW1zKHByZXZXb3JkLCBuZXdXb3JkKVxyXG4gICAgICAgICAgICB8fCBjb3VudFN3YXBzKHByZXZXb3JkLCBuZXdXb3JkKSA9PT0gMVxyXG4gICAgICAgICAgICB8fCBpc0Ryb3AocHJldldvcmQsIG5ld1dvcmQpXHJcbiAgICAgICAgICAgIHx8IGlzRHJvcChuZXdXb3JkLCBwcmV2V29yZClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgR2FtZVN0YXJ0U2VjdGlvbiA9IDxkaXYgY2xhc3NOYW1lPVwidG1fbnVtTW92ZXNEaXZcIj5cclxuICAgICAgICA8aDM+TnVtYmVyIE9mIE1vdmVzPC9oMz5cclxuICAgICAgICB7bnVtTW92ZXNBcnJheS5tYXAoKG4pID0+IChcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2B0bV8ke24gPT09IG51bU1vdmVzID8gJ251bU1vdmVzU2VsZWN0ZWQnIDogJ251bU1vdmVzVW5zZWxlY3RlZCd9YH1cclxuICAgICAgICAgICAgICAgIGtleT17YGNob29zZU51bU1vdmVzJHtufWB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldE51bU1vdmVzKG4pOyB9IH1cclxuICAgICAgICAgICAgPntufVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRtX3N0YXJ0UHV6emxlRGl2XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwic3RhcnRQdXp6bGVcIiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHsgY2FsbEZvclB1enpsZSgpOyB9IH0+XHJcbiAgICAgICAgICAgICAgICBTdGFydCBQdXp6bGVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbiAgICBjb25zdCBQdXp6bGVTZWN0aW9uID0gPGRpdiBjbGFzc05hbWU9XCJ0bV9wdXp6bGVEaXZcIj5cclxuICAgICAgICA8c3Bhbj57cHV6emxlLnN0YXJ0V29yZH08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+dG88L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+e3B1enpsZS50YXJnZXRXb3JkfTwvc3Bhbj5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxzcGFuPlRhcmdldDo8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+e3B1enpsZS5udW1Nb3Zlc308L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+bW92ZXM8L3NwYW4+XHJcbiAgICA8L2Rpdj47XHJcbiAgICBjb25zdCBTb2x1dGlvblNlY3Rpb24gPSA8ZGl2IGNsYXNzTmFtZT1cInRtX3NvbHV0aW9uT3V0ZXJEaXZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRtX3NvbHV0aW9uRGl2XCI+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPntwdXp6bGUuc3RhcnRXb3JkfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICB7d29yZHMubWFwKCh3LGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YHVzZXJXb3JkJHtpfWB9Pjx0ZD57d308L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgeyFzb2x2ZWQgJiYgPHRyPjx0ZD4uLi48L3RkPjwvdHI+fVxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+e3B1enpsZS50YXJnZXRXb3JkfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3NvbHZlZCA/XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRtX2NvbmdyYXRzXCI+8J+Rj/Cfj70gU29sdmVkIGluIHt3b3Jkcy5sZW5ndGggKyAxfSBtb3ZlcyDwn5GP8J+PvTwvcD5cclxuICAgICAgICA6XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPE1vYmlsZU9ubHlWaWV3PiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vcnBob0tleWJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9ycGhvS2V5cm93MVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlRXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdRJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+UTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlXXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdXJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+VzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlFXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdFJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+RTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlSXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdSJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+UjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlUXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdUJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+VDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlZXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdZJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+WTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlVXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdVJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+VTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlJXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdJJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+STwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlPXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdPJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+TzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlQXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdQJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+UDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3JwaG9LZXlyb3cyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUFcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0EnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5BPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVNcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1MnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5TPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleURcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0QnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5EPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUZcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0YnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5GPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUdcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0cnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5HPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUhcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0gnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5IPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUpcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0onKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5KPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUtcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0snKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5LPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUxcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0wnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5MPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vcnBob0tleXJvdzNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5WlwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignWicpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlo8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5WFwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignWCcpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlg8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5Q1wiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignQycpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPkM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5VlwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignVicpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlY8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5QlwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignQicpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPkI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5TlwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignTicpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPk48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5TVwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignTScpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPk08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPC9Nb2JpbGVPbmx5Vmlldz4gKi99XHJcbiAgICAgICAgICAgICAgICA8QnJvd3NlclZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidG1fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOZXh0IFdvcmQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17bmV4dFdvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtzZXROZXh0V29yZChlLnRhcmdldC52YWx1ZSk7fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiB7ZS5rZXlDb2RlID09PSAxMyAmJiBhY2NlcHROZXh0V29yZDt9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e2FjY2VwdE5leHRXb3JkfT5HTzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvQnJvd3NlclZpZXc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRtX2xhc3RidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3dvcmRzLmxlbmd0aCA+IDAgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0bV91bmRvXCIgb25DbGljaz17KCkgPT4ge2xldCBuZXdXb3JkcyA9IFsuLi53b3Jkc107IG5ld1dvcmRzLnBvcCgpOyBzZXRXb3JkcyhuZXdXb3Jkcyk7fX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlJlbW92ZSBsYXN0IGVudGVyZWQgd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBVTkRPXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgIHt3b3Jkcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0bV9yZXNldFwiIG9uQ2xpY2s9eygpID0+IHtzZXRXb3JkcyhbXSk7IHNldE5leHRXb3JkKCcnKTt9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiUmVtb3ZlIGFsbCBlbnRlciB3b3Jkc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSRVNFVFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRtX2hlbHBcIiBvbkNsaWNrPXsoKSA9PiB7YWxlcnQoJ1ZhbGlkIG5leHQgd29yZCBvcHRpb25zOlxcblN3YXAgb25lIGxldHRlciwgZS5nLiBDQVQgdG8gQ09UXFxuRHJvcCBvbmUgbGV0dGVyLCBlLmcuIFNXSUcgdG8gV0lHXFxuSW5zZXJ0IG9uZSBsZXR0ZXIsIGUuZy4gTUFUIHRvIE1BVEgsIG9yIEhJUCB0byBXSElQXFxuQW5hZ3JhbSwgZS5nLiBBQ1QgdG8gQ0FUJyk7fX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlNob3cgaW5zdHJ1Y3Rpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhFTFBcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBUcmFuc21vZ3JpZnlcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+e0dhbWVTdGFydFNlY3Rpb259PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwdXp6bGUgJiYgcHV6emxlLnN0YXJ0V29yZCAmJiA8dHI+PHRkPntQdXp6bGVTZWN0aW9ufTwvdGQ+PC90cj59XHJcbiAgICAgICAgICAgICAgICAgICAge3B1enpsZSAmJiBwdXp6bGUuc3RhcnRXb3JkICYmIDx0cj48dGQ+e1NvbHV0aW9uU2VjdGlvbn08L3RkPjwvdHI+fVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtwdXp6bGUgJiYgcHV6emxlLm5vdGVzICYmIHB1enpsZS5ub3Rlcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyRGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3B1enpsZS5ub3Rlcy5tYXAoKG4saSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2Bub3RlJHtpfWB9PntufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYW5zbW9ncmlmeTsiXSwic291cmNlUm9vdCI6IiJ9