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
      lineNumber: 74,
      columnNumber: 9
    }, undefined), numMovesArray.map(n => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: `tm_${n === numMoves ? 'numMovesSelected' : 'numMovesUnselected'}`,
      onClick: () => {
        setNumMoves(n);
      },
      children: n
    }, `chooseNumMoves${n}`, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
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
        lineNumber: 83,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 30
  }, undefined);

  const PuzzleSection = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "tm_puzzleDiv",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: puzzle.startWord
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "to"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: puzzle.targetWord
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "Target:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: puzzle.numMoves
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "moves"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 88,
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
              lineNumber: 101,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 21
          }, undefined), words.map((w, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: w
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 50
            }, undefined)
          }, `userWord${i}`, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 25
          }, undefined)), !solved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: "..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 37
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 33
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: puzzle.targetWord
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }, undefined), solved ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "tm_congrats",
      children: ["\uD83D\uDC4F\uD83C\uDFFD Solved in ", words.length + 1, " moves \uD83D\uDC4F\uD83C\uDFFD"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "tm_Keyboard",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "tm_Keyrow1",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('Z');
            },
            className: "tm_Key",
            children: "Z"
          }, "keyZ", false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('A');
            },
            className: "tm_Key",
            children: "A"
          }, "keyA", false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('P');
            },
            className: "tm_Key",
            children: "P"
          }, "keyP", false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('S');
            },
            className: "tm_Key",
            children: "S"
          }, "keyS", false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('Q');
            },
            className: "tm_Key",
            children: "Q"
          }, "keyQ", false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('I');
            },
            className: "tm_Key",
            children: "I"
          }, "keyI", false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('G');
            },
            className: "tm_Key",
            children: "G"
          }, "keyG", false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('Y');
            },
            className: "tm_Key",
            children: "Y"
          }, "keyY", false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('M');
            },
            className: "tm_Key",
            children: "M"
          }, "keyM", false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "tm_Keyrow2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('C');
            },
            className: "tm_Key",
            children: "C"
          }, "keyC", false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('R');
            },
            className: "tm_Key",
            children: "R"
          }, "keyR", false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('W');
            },
            className: "tm_Key",
            children: "W"
          }, "keyW", false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('T');
            },
            className: "tm_Key",
            children: "T"
          }, "keyT", false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('H');
            },
            className: "tm_Key",
            children: "H"
          }, "keyH", false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('V');
            },
            className: "tm_Key",
            children: "V"
          }, "keyV", false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('O');
            },
            className: "tm_Key",
            children: "O"
          }, "keyO", false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('X');
            },
            className: "tm_Key",
            children: "X"
          }, "keyX", false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "tm_Keyrow3",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('F');
            },
            className: "tm_Key",
            children: "F"
          }, "keyF", false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('J');
            },
            className: "tm_Key",
            children: "J"
          }, "keyJ", false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('E');
            },
            className: "tm_Key",
            children: "E"
          }, "keyE", false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('L');
            },
            className: "tm_Key",
            children: "L"
          }, "keyL", false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('D');
            },
            className: "tm_Key",
            children: "D"
          }, "keyD", false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('B');
            },
            className: "tm_Key",
            children: "B"
          }, "keyB", false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('U');
            },
            className: "tm_Key",
            children: "U"
          }, "keyU", false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('N');
            },
            className: "tm_Key",
            children: "N"
          }, "keyN", false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleInputLetter('K');
            },
            className: "tm_Key",
            children: "K"
          }, "keyK", false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 25
        }, undefined), nextWord.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "textcenter",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => {
              handleDeleteLetter();
            },
            className: "tm_KeyBack",
            children: "\u2190"
          }, "keyBack", false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 29
          }, undefined), nextWord, "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: acceptNextWord,
            className: "tm_KeyGo",
            children: "GO"
          }, "keyGo", false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 49
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
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
            lineNumber: 158,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            onClick: acceptNextWord,
            children: "GO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
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
          lineNumber: 167,
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
          lineNumber: 173,
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
          lineNumber: 178,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 97,
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
          lineNumber: 192,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: GameStartSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 21
        }, undefined), puzzle && puzzle.startWord && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: PuzzleSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 56
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 52
        }, undefined), puzzle && puzzle.startWord && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: SolutionSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 56
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 52
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: puzzle && puzzle.notes && puzzle.notes.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trDanger",
        children: puzzle.notes.map((n, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: n
        }, `note${i}`, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 188,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG0vdG0uanMiXSwibmFtZXMiOlsiVHJhbnNtb2dyaWZ5Iiwic2V0V2hlcmV0byIsIm51bU1vdmVzIiwic2V0TnVtTW92ZXMiLCJ1c2VTdGF0ZSIsImJhc2V1cmwiLCJudW1Nb3Zlc0FycmF5IiwicHV6emxlIiwic2V0UHV6emxlIiwibmV4dFdvcmQiLCJzZXROZXh0V29yZCIsIndvcmRzIiwic2V0V29yZHMiLCJzb2x2ZWQiLCJzZXRTb2x2ZWQiLCJjYWxsRm9yUHV6emxlIiwiZGF0YSIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZXJyb3IiLCJub3RlcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVJbnB1dExldHRlciIsImxldHRlciIsInNvZmFyIiwiaGFuZGxlRGVsZXRlTGV0dGVyIiwibGVuZ3RoIiwiQXJyYXkiLCJmcm9tIiwicG9wIiwibmV3c29mYXIiLCJqb2luIiwiYWNjZXB0TmV4dFdvcmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwcmV2V29yZCIsInN0YXJ0V29yZCIsIm5ld1dvcmQiLCJ2YWxpZE1vdmUiLCJpc1dvcmRWYWxpZCIsImFsZXJ0IiwibGFzdFdvcmQiLCJ0YXJnZXRXb3JkIiwibmV3V29yZHMiLCJwdXNoIiwidHJpbSIsInRvTG93ZXJDYXNlIiwiYXJlQW5hZ3JhbXMiLCJjb3VudFN3YXBzIiwiaXNEcm9wIiwiR2FtZVN0YXJ0U2VjdGlvbiIsIm1hcCIsIm4iLCJQdXp6bGVTZWN0aW9uIiwiU29sdXRpb25TZWN0aW9uIiwidyIsImkiLCJ0YXJnZXQiLCJ2YWx1ZSIsImtleUNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWtCO0FBQUE7O0FBQ25DLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsK0NBQVEs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S29EO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosRUFFSzlDLE1BQU0sSUFBSUEsTUFBTSxDQUFDZ0MsU0FBakIsaUJBQThCO0FBQUEsaUNBQUk7QUFBQSxzQkFBS2lCO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRm5DLEVBR0tqRCxNQUFNLElBQUlBLE1BQU0sQ0FBQ2dDLFNBQWpCLGlCQUE4QjtBQUFBLGlDQUFJO0FBQUEsc0JBQUtrQjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBKLGVBY0k7QUFBQSxnQkFDS2xELE1BQU0sSUFBSUEsTUFBTSxDQUFDZSxLQUFqQixJQUEwQmYsTUFBTSxDQUFDZSxLQUFQLENBQWFPLE1BQWIsR0FBc0IsQ0FBaEQsaUJBQ0Q7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQSxrQkFDS3RCLE1BQU0sQ0FBQ2UsS0FBUCxDQUFhZ0MsR0FBYixDQUFpQixDQUFDQyxDQUFELEVBQUdJLENBQUgsa0JBQ2Q7QUFBQSxvQkFBcUJKO0FBQXJCLFdBQVMsT0FBTUksQ0FBRSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUEwQkgsQ0FoTkQ7O0dBQU0zRCxZOztLQUFBQSxZO0FBa05OLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI2YzEzNjI1MTcyODMxZDhlYThhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyVmlldywgTW9iaWxlT25seVZpZXcgfSBmcm9tIFwicmVhY3QtZGV2aWNlLWRldGVjdFwiO1xyXG5pbXBvcnQgeyBjb3VudFN3YXBzLCBhcmVBbmFncmFtcywgaXNEcm9wLCBpc1dvcmRWYWxpZCB9IGZyb20gJy4uLy4uL2xpYi93b3JkZnVuY3Rpb25zJztcclxuXHJcbmNvbnN0IFRyYW5zbW9ncmlmeSA9ICh7c2V0V2hlcmV0b30pID0+IHtcclxuICAgIGNvbnN0IFtudW1Nb3Zlcywgc2V0TnVtTW92ZXNdID0gdXNlU3RhdGUoMik7XHJcbiAgICBjb25zdCBiYXNldXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbSc7XHJcbiAgICBjb25zdCBudW1Nb3Zlc0FycmF5ID0gWzIsMyw0LDUsNiw3LDgsOV07XHJcbiAgICBjb25zdCBbcHV6emxlLCBzZXRQdXp6bGVdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW25leHRXb3JkLCBzZXROZXh0V29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbd29yZHMsIHNldFdvcmRzXSA9IHVzZVN0YXRlKFtdKTsgLy8gVXNlcnMgd29yZHNcclxuICAgIGNvbnN0IFtzb2x2ZWQsIHNldFNvbHZlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBjYWxsRm9yUHV6emxlID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gYCR7YmFzZXVybH0vRU5BQkxFMks/dHJhbnNtb2dyaWZ5PXRydWUmbnVtTW92ZXM9JHtudW1Nb3Zlc31gO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgICAgIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGRhdGEubm90ZXMgPSBbXCJQcm9ibGVtIHdpdGggdGhlIHNlcnZlci4gU29ycnkgYWJvdXQgdGhhdC5cIl07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0UHV6emxlKGRhdGEpO1xyXG4gICAgICAgIHNldFdvcmRzKFtdKTtcclxuICAgICAgICBzZXROZXh0V29yZCgnJyk7XHJcbiAgICAgICAgc2V0U29sdmVkKGZhbHNlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUlucHV0TGV0dGVyID0gKGxldHRlcikgPT4ge1xyXG4gICAgICAgIGxldCBzb2ZhciA9IG5leHRXb3JkICsgbGV0dGVyO1xyXG4gICAgICAgIHNldE5leHRXb3JkKHNvZmFyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZUxldHRlciA9ICgpID0+IHtcclxuICAgICAgICBpZiAobmV4dFdvcmQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgc29mYXIgPSBBcnJheS5mcm9tKG5leHRXb3JkKTtcclxuICAgICAgICAgICAgc29mYXIucG9wKCk7XHJcbiAgICAgICAgICAgIGxldCBuZXdzb2ZhciA9IHNvZmFyLmpvaW4oJycpO1xyXG4gICAgICAgICAgICBzZXROZXh0V29yZChuZXdzb2Zhcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgYWNjZXB0TmV4dFdvcmQgPSBhc3luYyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBwcmV2V29yZCA9ICh3b3Jkcy5sZW5ndGggPT09IDAgPyBwdXp6bGUuc3RhcnRXb3JkIDogd29yZHNbd29yZHMubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgIGxldCBuZXdXb3JkID0gbmV4dFdvcmQ7XHJcbiAgICAgICAgaWYgKHZhbGlkTW92ZShuZXdXb3JkLCBwcmV2V29yZCkpIHtcclxuICAgICAgICAgICAgaWYgKCFhd2FpdCBpc1dvcmRWYWxpZChuZXdXb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYCR7bmV3V29yZH0gaXMgbm90IGEgdmFsaWQgd29yZGApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxhc3RXb3JkID0gcHV6emxlLnRhcmdldFdvcmQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3V29yZHMgPSBbLi4ud29yZHNdO1xyXG4gICAgICAgICAgICAgICAgbmV3V29yZHMucHVzaChuZXdXb3JkKTtcclxuICAgICAgICAgICAgICAgIHNldFdvcmRzKG5ld1dvcmRzKTtcclxuICAgICAgICAgICAgICAgIHNldE5leHRXb3JkKCcnKTsgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRNb3ZlKG5ld1dvcmQsIGxhc3RXb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNvbHZlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdPbmx5IGFuYWdyYW1zLCBkcm9wcywgc3dhcHMgYW5kIGluc2VydHMgYWxsb3dlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB2YWxpZE1vdmUgPSAocHJldldvcmQ9XCJcIiwgbmV3V29yZD1cIlwiKSA9PiB7XHJcbiAgICAgICAgcHJldldvcmQgPSBwcmV2V29yZC50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBuZXdXb3JkID0gbmV3V29yZC50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAocHJldldvcmQgPT09IG5ld1dvcmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKGFyZUFuYWdyYW1zKHByZXZXb3JkLCBuZXdXb3JkKVxyXG4gICAgICAgICAgICB8fCBjb3VudFN3YXBzKHByZXZXb3JkLCBuZXdXb3JkKSA9PT0gMVxyXG4gICAgICAgICAgICB8fCBpc0Ryb3AocHJldldvcmQsIG5ld1dvcmQpXHJcbiAgICAgICAgICAgIHx8IGlzRHJvcChuZXdXb3JkLCBwcmV2V29yZClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgR2FtZVN0YXJ0U2VjdGlvbiA9IDxkaXYgY2xhc3NOYW1lPVwidG1fbnVtTW92ZXNEaXZcIj5cclxuICAgICAgICA8aDM+TnVtYmVyIE9mIE1vdmVzPC9oMz5cclxuICAgICAgICB7bnVtTW92ZXNBcnJheS5tYXAoKG4pID0+IChcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2B0bV8ke24gPT09IG51bU1vdmVzID8gJ251bU1vdmVzU2VsZWN0ZWQnIDogJ251bU1vdmVzVW5zZWxlY3RlZCd9YH1cclxuICAgICAgICAgICAgICAgIGtleT17YGNob29zZU51bU1vdmVzJHtufWB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldE51bU1vdmVzKG4pOyB9IH1cclxuICAgICAgICAgICAgPntufVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRtX3N0YXJ0UHV6emxlRGl2XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwic3RhcnRQdXp6bGVcIiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHsgY2FsbEZvclB1enpsZSgpOyB9IH0+XHJcbiAgICAgICAgICAgICAgICBTdGFydCBQdXp6bGVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbiAgICBjb25zdCBQdXp6bGVTZWN0aW9uID0gPGRpdiBjbGFzc05hbWU9XCJ0bV9wdXp6bGVEaXZcIj5cclxuICAgICAgICA8c3Bhbj57cHV6emxlLnN0YXJ0V29yZH08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+dG88L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+e3B1enpsZS50YXJnZXRXb3JkfTwvc3Bhbj5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxzcGFuPlRhcmdldDo8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+e3B1enpsZS5udW1Nb3Zlc308L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+bW92ZXM8L3NwYW4+XHJcbiAgICA8L2Rpdj47XHJcbiAgICBjb25zdCBTb2x1dGlvblNlY3Rpb24gPSA8ZGl2IGNsYXNzTmFtZT1cInRtX3NvbHV0aW9uT3V0ZXJEaXZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRtX3NvbHV0aW9uRGl2XCI+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPntwdXp6bGUuc3RhcnRXb3JkfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICB7d29yZHMubWFwKCh3LGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YHVzZXJXb3JkJHtpfWB9Pjx0ZD57d308L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgeyFzb2x2ZWQgJiYgPHRyPjx0ZD4uLi48L3RkPjwvdHI+fVxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+e3B1enpsZS50YXJnZXRXb3JkfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3NvbHZlZCA/XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRtX2NvbmdyYXRzXCI+8J+Rj/Cfj70gU29sdmVkIGluIHt3b3Jkcy5sZW5ndGggKyAxfSBtb3ZlcyDwn5GP8J+PvTwvcD5cclxuICAgICAgICA6XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPE1vYmlsZU9ubHlWaWV3PiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRtX0tleWJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG1fS2V5cm93MVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlaXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdaJyk7fX0gY2xhc3NOYW1lPVwidG1fS2V5XCI+WjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlBXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdBJyk7fX0gY2xhc3NOYW1lPVwidG1fS2V5XCI+QTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlQXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdQJyk7fX0gY2xhc3NOYW1lPVwidG1fS2V5XCI+UDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlTXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdTJyk7fX0gY2xhc3NOYW1lPVwidG1fS2V5XCI+UzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlRXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdRJyk7fX0gY2xhc3NOYW1lPVwidG1fS2V5XCI+UTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlJXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdJJyk7fX0gY2xhc3NOYW1lPVwidG1fS2V5XCI+STwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlHXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdHJyk7fX0gY2xhc3NOYW1lPVwidG1fS2V5XCI+RzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlZXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdZJyk7fX0gY2xhc3NOYW1lPVwidG1fS2V5XCI+WTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlNXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdNJyk7fX0gY2xhc3NOYW1lPVwidG1fS2V5XCI+TTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bV9LZXlyb3cyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUNcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0MnKTt9fSBjbGFzc05hbWU9XCJ0bV9LZXlcIj5DPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVJcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1InKTt9fSBjbGFzc05hbWU9XCJ0bV9LZXlcIj5SPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVdcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1cnKTt9fSBjbGFzc05hbWU9XCJ0bV9LZXlcIj5XPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVRcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1QnKTt9fSBjbGFzc05hbWU9XCJ0bV9LZXlcIj5UPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUhcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0gnKTt9fSBjbGFzc05hbWU9XCJ0bV9LZXlcIj5IPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVZcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1YnKTt9fSBjbGFzc05hbWU9XCJ0bV9LZXlcIj5WPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleU9cIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ08nKTt9fSBjbGFzc05hbWU9XCJ0bV9LZXlcIj5PPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVhcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1gnKTt9fSBjbGFzc05hbWU9XCJ0bV9LZXlcIj5YPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRtX0tleXJvdzNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5RlwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignRicpO319IGNsYXNzTmFtZT1cInRtX0tleVwiPkY8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5SlwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignSicpO319IGNsYXNzTmFtZT1cInRtX0tleVwiPko8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5RVwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignRScpO319IGNsYXNzTmFtZT1cInRtX0tleVwiPkU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5TFwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignTCcpO319IGNsYXNzTmFtZT1cInRtX0tleVwiPkw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5RFwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignRCcpO319IGNsYXNzTmFtZT1cInRtX0tleVwiPkQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5QlwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignQicpO319IGNsYXNzTmFtZT1cInRtX0tleVwiPkI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5VVwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignVScpO319IGNsYXNzTmFtZT1cInRtX0tleVwiPlU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5TlwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignTicpO319IGNsYXNzTmFtZT1cInRtX0tleVwiPk48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5S1wiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignSycpO319IGNsYXNzTmFtZT1cInRtX0tleVwiPks8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtuZXh0V29yZC5sZW5ndGggPiAwICYmIDxkaXYgY2xhc3NOYW1lPVwidGV4dGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlCYWNrXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZURlbGV0ZUxldHRlcigpO319IGNsYXNzTmFtZT1cInRtX0tleUJhY2tcIj7ihpA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuZXh0V29yZH0mbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5R29cIiBvbkNsaWNrPXthY2NlcHROZXh0V29yZH0gY2xhc3NOYW1lPVwidG1fS2V5R29cIj5HTzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPC9Nb2JpbGVPbmx5Vmlldz4gKi99XHJcbiAgICAgICAgICAgICAgICA8QnJvd3NlclZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidG1fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOZXh0IFdvcmQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17bmV4dFdvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtzZXROZXh0V29yZChlLnRhcmdldC52YWx1ZSk7fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiB7ZS5rZXlDb2RlID09PSAxMyAmJiBhY2NlcHROZXh0V29yZDt9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e2FjY2VwdE5leHRXb3JkfT5HTzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvQnJvd3NlclZpZXc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRtX2xhc3RidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3dvcmRzLmxlbmd0aCA+IDAgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0bV91bmRvXCIgb25DbGljaz17KCkgPT4ge2xldCBuZXdXb3JkcyA9IFsuLi53b3Jkc107IG5ld1dvcmRzLnBvcCgpOyBzZXRXb3JkcyhuZXdXb3Jkcyk7fX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlJlbW92ZSBsYXN0IGVudGVyZWQgd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBVTkRPXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgIHt3b3Jkcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0bV9yZXNldFwiIG9uQ2xpY2s9eygpID0+IHtzZXRXb3JkcyhbXSk7IHNldE5leHRXb3JkKCcnKTt9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiUmVtb3ZlIGFsbCBlbnRlciB3b3Jkc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSRVNFVFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRtX2hlbHBcIiBvbkNsaWNrPXsoKSA9PiB7YWxlcnQoJ1ZhbGlkIG5leHQgd29yZCBvcHRpb25zOlxcblN3YXAgb25lIGxldHRlciwgZS5nLiBDQVQgdG8gQ09UXFxuRHJvcCBvbmUgbGV0dGVyLCBlLmcuIFNXSUcgdG8gV0lHXFxuSW5zZXJ0IG9uZSBsZXR0ZXIsIGUuZy4gTUFUIHRvIE1BVEgsIG9yIEhJUCB0byBXSElQXFxuQW5hZ3JhbSwgZS5nLiBBQ1QgdG8gQ0FUJyk7fX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlNob3cgaW5zdHJ1Y3Rpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhFTFBcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBUcmFuc21vZ3JpZnlcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+e0dhbWVTdGFydFNlY3Rpb259PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwdXp6bGUgJiYgcHV6emxlLnN0YXJ0V29yZCAmJiA8dHI+PHRkPntQdXp6bGVTZWN0aW9ufTwvdGQ+PC90cj59XHJcbiAgICAgICAgICAgICAgICAgICAge3B1enpsZSAmJiBwdXp6bGUuc3RhcnRXb3JkICYmIDx0cj48dGQ+e1NvbHV0aW9uU2VjdGlvbn08L3RkPjwvdHI+fVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtwdXp6bGUgJiYgcHV6emxlLm5vdGVzICYmIHB1enpsZS5ub3Rlcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyRGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3B1enpsZS5ub3Rlcy5tYXAoKG4saSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2Bub3RlJHtpfWB9PntufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYW5zbW9ncmlmeTsiXSwic291cmNlUm9vdCI6IiJ9