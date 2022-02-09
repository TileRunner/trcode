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
      lineNumber: 81,
      columnNumber: 9
    }, undefined), numMovesArray.map(n => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: `tm_${n === numMoves ? 'numMovesSelected' : 'numMovesUnselected'}`,
      onClick: () => {
        setNumMoves(n);
      },
      children: n
    }, `chooseNumMoves${n}`, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
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
        lineNumber: 90,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 30
  }, undefined);

  const PuzzleSection = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "tm_puzzleDiv",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: puzzle.startWord
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "to"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: puzzle.targetWord
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "Target:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: puzzle.numMoves
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "moves"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 27
  }, undefined);

  const ShowKeyboard = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    class: "tm_Keyboard",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          handleInputLetter('Q');
        },
        children: "Q"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          handleInputLetter('W');
        },
        children: "W"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          handleInputLetter('E');
        },
        children: "E"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          handleInputLetter('R');
        },
        children: "R"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          handleInputLetter('T');
        },
        children: "T"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          handleInputLetter('Y');
        },
        children: "Y"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          handleInputLetter('U');
        },
        children: "U"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          handleInputLetter('I');
        },
        children: "I"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          handleInputLetter('O');
        },
        children: "O"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          handleInputLetter('P');
        },
        children: "P"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          handleInputLetter('A');
        },
        children: "A"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          handleInputLetter('S');
        },
        children: "S"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          handleInputLetter('D');
        },
        children: "D"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          handleInputLetter('F');
        },
        children: "F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          handleInputLetter('G');
        },
        children: "G"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          handleInputLetter('H');
        },
        children: "H"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          handleInputLetter('J');
        },
        children: "J"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          handleInputLetter('K');
        },
        children: "K"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          handleInputLetter('L');
        },
        children: "L"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          handleInputLetter('Z');
        },
        children: "Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          handleInputLetter('X');
        },
        children: "X"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          handleInputLetter('C');
        },
        children: "C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          handleInputLetter('V');
        },
        children: "V"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          handleInputLetter('B');
        },
        children: "B"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          handleInputLetter('N');
        },
        children: "N"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          handleInputLetter('M');
        },
        children: "M"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          nextWord.length > 0 && handleDeleteLetter();
        },
        class: "tm_Backspace"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }, undefined), nextWord.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "tm_KeyedWord",
      children: nextWord
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }, undefined), nextWord.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "tm_KeyGoDiv",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: acceptNextWord,
        className: "tm_KeyGo",
        children: "SUBMIT WORD"
      }, "keyGo", false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 42
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 104,
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
              lineNumber: 149,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 21
          }, undefined), words.map((w, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: w
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 50
            }, undefined)
          }, `userWord${i}`, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 25
          }, undefined)), !solved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: "..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 37
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 33
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: puzzle.targetWord
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }, undefined), solved ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "tm_congrats",
      children: ["\uD83D\uDC4F\uD83C\uDFFD Solved in ", words.length + 1, " moves \uD83D\uDC4F\uD83C\uDFFD"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.MobileOnlyView, {
        children: ShowKeyboard
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
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
            lineNumber: 169,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            onClick: acceptNextWord,
            children: "SUBMIT"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
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
          lineNumber: 178,
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
          lineNumber: 184,
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
          lineNumber: 189,
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
          lineNumber: 194,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 145,
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
          lineNumber: 208,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: [(solved || !solving) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: GameStartSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 50
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 46
        }, undefined), puzzle && puzzle.startWord && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: PuzzleSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 56
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 52
        }, undefined), puzzle && puzzle.startWord && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: SolutionSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 56
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 52
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: puzzle && puzzle.notes && puzzle.notes.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trDanger",
        children: puzzle.notes.map((n, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: n
        }, `note${i}`, false, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 204,
    columnNumber: 9
  }, undefined);
};

_s(Transmogrify, "T0y4LOGwZjC6aeKVBHZIhV3ji2A=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG0vdG0uanMiXSwibmFtZXMiOlsiVHJhbnNtb2dyaWZ5Iiwic2V0V2hlcmV0byIsIm51bU1vdmVzIiwic2V0TnVtTW92ZXMiLCJ1c2VTdGF0ZSIsImJhc2V1cmwiLCJudW1Nb3Zlc0FycmF5IiwicHV6emxlIiwic2V0UHV6emxlIiwibmV4dFdvcmQiLCJzZXROZXh0V29yZCIsIndvcmRzIiwic2V0V29yZHMiLCJzb2x2ZWQiLCJzZXRTb2x2ZWQiLCJzb2x2aW5nIiwic2V0U29sdmluZyIsImNhbGxGb3JQdXp6bGUiLCJkYXRhIiwibmV3U29sdmluZyIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZXJyb3IiLCJub3RlcyIsImNvbnNvbGUiLCJsb2ciLCJxdWl0VGhpc1B1enpsZSIsImhhbmRsZUlucHV0TGV0dGVyIiwibGV0dGVyIiwic29mYXIiLCJoYW5kbGVEZWxldGVMZXR0ZXIiLCJsZW5ndGgiLCJBcnJheSIsImZyb20iLCJwb3AiLCJuZXdzb2ZhciIsImpvaW4iLCJhY2NlcHROZXh0V29yZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByZXZXb3JkIiwic3RhcnRXb3JkIiwibmV3V29yZCIsInZhbGlkTW92ZSIsImlzV29yZFZhbGlkIiwiYWxlcnQiLCJsYXN0V29yZCIsInRhcmdldFdvcmQiLCJuZXdXb3JkcyIsInB1c2giLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJhcmVBbmFncmFtcyIsImNvdW50U3dhcHMiLCJpc0Ryb3AiLCJHYW1lU3RhcnRTZWN0aW9uIiwibWFwIiwibiIsIlB1enpsZVNlY3Rpb24iLCJTaG93S2V5Ym9hcmQiLCJTb2x1dGlvblNlY3Rpb24iLCJ3IiwiaSIsInRhcmdldCIsInZhbHVlIiwia2V5Q29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQs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LGVBT0k7QUFBTSxlQUFPLEVBQUUsTUFBTTtBQUFFQSwyQkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBKLGVBUUk7QUFBTSxlQUFPLEVBQUUsTUFBTTtBQUFFQSwyQkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJKLGVBU0k7QUFBTSxlQUFPLEVBQUUsTUFBTTtBQUFFQSwyQkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiaUIsZUF3QmpCO0FBQUEsOEJBQ0k7QUFBTSxlQUFPLEVBQUUsTUFBTTtBQUFFQSwyQkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBTSxlQUFPLEVBQUUsTUFBTTtBQUFFQSwyQkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBR0k7QUFBTSxlQUFPLEVBQUUsTUFBTTtBQUFFQSwyQkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKLGVBSUk7QUFBTSxlQUFPLEVBQUUsTUFBTTtBQUFFQSwyQkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLGVBS0k7QUFBTSxlQUFPLEVBQUUsTUFBTTtBQUFFQSwyQkFBaUIsQ0FBQyxHQUFELENBQWpCO0FBQXlCLFNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLGVBTUk7QUFBTSxlQUFPLEVBQUUsTUFBTTtBQUFFQSwyQkFBaUIs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QUFBLGdCQUNLdkQsTUFBTSxJQUFJQSxNQUFNLENBQUNrQixLQUFqQixJQUEwQmxCLE1BQU0sQ0FBQ2tCLEtBQVAsQ0FBYVEsTUFBYixHQUFzQixDQUFoRCxpQkFDRDtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLGtCQUNLMUIsTUFBTSxDQUFDa0IsS0FBUCxDQUFhaUMsR0FBYixDQUFpQixDQUFDQyxDQUFELEVBQUdLLENBQUgsa0JBQ2Q7QUFBQSxvQkFBcUJMO0FBQXJCLFdBQVMsT0FBTUssQ0FBRSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUEwQkgsQ0FoT0Q7O0dBQU1oRSxZOztLQUFBQSxZO0FBa09OLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIyMDU1MjA0ODgwYWE3NmE3NDFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyVmlldywgTW9iaWxlT25seVZpZXcgfSBmcm9tIFwicmVhY3QtZGV2aWNlLWRldGVjdFwiO1xyXG5pbXBvcnQgeyBjb3VudFN3YXBzLCBhcmVBbmFncmFtcywgaXNEcm9wLCBpc1dvcmRWYWxpZCB9IGZyb20gJy4uLy4uL2xpYi93b3JkZnVuY3Rpb25zJztcclxuXHJcbmNvbnN0IFRyYW5zbW9ncmlmeSA9ICh7c2V0V2hlcmV0b30pID0+IHtcclxuICAgIGNvbnN0IFtudW1Nb3Zlcywgc2V0TnVtTW92ZXNdID0gdXNlU3RhdGUoMik7XHJcbiAgICBjb25zdCBiYXNldXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbSc7XHJcbiAgICBjb25zdCBudW1Nb3Zlc0FycmF5ID0gWzIsMyw0LDUsNiw3LDgsOV07XHJcbiAgICBjb25zdCBbcHV6emxlLCBzZXRQdXp6bGVdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW25leHRXb3JkLCBzZXROZXh0V29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbd29yZHMsIHNldFdvcmRzXSA9IHVzZVN0YXRlKFtdKTsgLy8gVXNlcnMgd29yZHNcclxuICAgIGNvbnN0IFtzb2x2ZWQsIHNldFNvbHZlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc29sdmluZywgc2V0U29sdmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBjYWxsRm9yUHV6emxlID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcclxuICAgICAgICBsZXQgbmV3U29sdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSBgJHtiYXNldXJsfS9FTkFCTEUySz90cmFuc21vZ3JpZnk9dHJ1ZSZudW1Nb3Zlcz0ke251bU1vdmVzfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICAgICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG5ld1NvbHZpbmcgPSB0cnVlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGRhdGEubm90ZXMgPSBbXCJQcm9ibGVtIHdpdGggdGhlIHNlcnZlci4gU29ycnkgYWJvdXQgdGhhdC5cIl07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0UHV6emxlKGRhdGEpO1xyXG4gICAgICAgIHNldFdvcmRzKFtdKTtcclxuICAgICAgICBzZXROZXh0V29yZCgnJyk7XHJcbiAgICAgICAgc2V0U29sdmVkKGZhbHNlKTtcclxuICAgICAgICBzZXRTb2x2aW5nKG5ld1NvbHZpbmcpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcXVpdFRoaXNQdXp6bGUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U29sdmluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dExldHRlciA9IChsZXR0ZXIpID0+IHtcclxuICAgICAgICBsZXQgc29mYXIgPSBuZXh0V29yZCArIGxldHRlcjtcclxuICAgICAgICBzZXROZXh0V29yZChzb2Zhcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGVMZXR0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG5leHRXb3JkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHNvZmFyID0gQXJyYXkuZnJvbShuZXh0V29yZCk7XHJcbiAgICAgICAgICAgIHNvZmFyLnBvcCgpO1xyXG4gICAgICAgICAgICBsZXQgbmV3c29mYXIgPSBzb2Zhci5qb2luKCcnKTtcclxuICAgICAgICAgICAgc2V0TmV4dFdvcmQobmV3c29mYXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGFjY2VwdE5leHRXb3JkID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgcHJldldvcmQgPSAod29yZHMubGVuZ3RoID09PSAwID8gcHV6emxlLnN0YXJ0V29yZCA6IHdvcmRzW3dvcmRzLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICBsZXQgbmV3V29yZCA9IG5leHRXb3JkO1xyXG4gICAgICAgIGlmICh2YWxpZE1vdmUobmV3V29yZCwgcHJldldvcmQpKSB7XHJcbiAgICAgICAgICAgIGlmICghYXdhaXQgaXNXb3JkVmFsaWQobmV3V29yZCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGAke25ld1dvcmR9IGlzIG5vdCBhIHZhbGlkIHdvcmRgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBsYXN0V29yZCA9IHB1enpsZS50YXJnZXRXb3JkO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1dvcmRzID0gWy4uLndvcmRzXTtcclxuICAgICAgICAgICAgICAgIG5ld1dvcmRzLnB1c2gobmV3V29yZCk7XHJcbiAgICAgICAgICAgICAgICBzZXRXb3JkcyhuZXdXb3Jkcyk7XHJcbiAgICAgICAgICAgICAgICBzZXROZXh0V29yZCgnJyk7ICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkTW92ZShuZXdXb3JkLCBsYXN0V29yZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTb2x2ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnT25seSBhbmFncmFtcywgZHJvcHMsIHN3YXBzIGFuZCBpbnNlcnRzIGFsbG93ZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdmFsaWRNb3ZlID0gKHByZXZXb3JkPVwiXCIsIG5ld1dvcmQ9XCJcIikgPT4ge1xyXG4gICAgICAgIHByZXZXb3JkID0gcHJldldvcmQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgbmV3V29yZCA9IG5ld1dvcmQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKHByZXZXb3JkID09PSBuZXdXb3JkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChhcmVBbmFncmFtcyhwcmV2V29yZCwgbmV3V29yZClcclxuICAgICAgICAgICAgfHwgY291bnRTd2FwcyhwcmV2V29yZCwgbmV3V29yZCkgPT09IDFcclxuICAgICAgICAgICAgfHwgaXNEcm9wKHByZXZXb3JkLCBuZXdXb3JkKVxyXG4gICAgICAgICAgICB8fCBpc0Ryb3AobmV3V29yZCwgcHJldldvcmQpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IEdhbWVTdGFydFNlY3Rpb24gPSA8ZGl2IGNsYXNzTmFtZT1cInRtX251bU1vdmVzRGl2XCI+XHJcbiAgICAgICAgPGgzPk51bWJlciBPZiBNb3ZlczwvaDM+XHJcbiAgICAgICAge251bU1vdmVzQXJyYXkubWFwKChuKSA9PiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgdG1fJHtuID09PSBudW1Nb3ZlcyA/ICdudW1Nb3Zlc1NlbGVjdGVkJyA6ICdudW1Nb3Zlc1Vuc2VsZWN0ZWQnfWB9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2BjaG9vc2VOdW1Nb3ZlcyR7bn1gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXROdW1Nb3ZlcyhuKTsgfSB9XHJcbiAgICAgICAgICAgID57bn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bV9zdGFydFB1enpsZURpdlwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cInN0YXJ0UHV6emxlXCIgY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7IGNhbGxGb3JQdXp6bGUoKTsgfSB9PlxyXG4gICAgICAgICAgICAgICAgU3RhcnQgUHV6emxlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgUHV6emxlU2VjdGlvbiA9IDxkaXYgY2xhc3NOYW1lPVwidG1fcHV6emxlRGl2XCI+XHJcbiAgICAgICAgPHNwYW4+e3B1enpsZS5zdGFydFdvcmR9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPnRvPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPntwdXp6bGUudGFyZ2V0V29yZH08L3NwYW4+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8c3Bhbj5UYXJnZXQ6PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPntwdXp6bGUubnVtTW92ZXN9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPm1vdmVzPC9zcGFuPlxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgU2hvd0tleWJvYXJkID0gPGRpdiBjbGFzcz1cInRtX0tleWJvYXJkXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignUScpOyB9IH0+UTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignVycpOyB9IH0+Vzwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignRScpOyB9IH0+RTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignUicpOyB9IH0+Ujwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignVCcpOyB9IH0+VDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignWScpOyB9IH0+WTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignVScpOyB9IH0+VTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignSScpOyB9IH0+STwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignTycpOyB9IH0+Tzwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4geyBoYW5kbGVJbnB1dExldHRlcignUCcpOyB9IH0+UDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdBJyk7IH0gfT5BPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdTJyk7IH0gfT5TPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdEJyk7IH0gfT5EPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdGJyk7IH0gfT5GPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdHJyk7IH0gfT5HPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdIJyk7IH0gfT5IPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdKJyk7IH0gfT5KPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdLJyk7IH0gfT5LPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUlucHV0TGV0dGVyKCdMJyk7IH0gfT5MPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1onKTsgfSB9Plo8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1gnKTsgfSB9Plg8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0MnKTsgfSB9PkM8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ1YnKTsgfSB9PlY8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ0InKTsgfSB9PkI8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ04nKTsgfSB9Pk48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlSW5wdXRMZXR0ZXIoJ00nKTsgfSB9Pk08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgbmV4dFdvcmQubGVuZ3RoID4gMCAmJiBoYW5kbGVEZWxldGVMZXR0ZXIoKTsgfSB9IGNsYXNzPVwidG1fQmFja3NwYWNlXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtuZXh0V29yZC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG1fS2V5ZWRXb3JkXCI+e25leHRXb3JkfTwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICB7bmV4dFdvcmQubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRtX0tleUdvRGl2XCI+PGJ1dHRvbiBrZXk9XCJrZXlHb1wiIG9uQ2xpY2s9e2FjY2VwdE5leHRXb3JkfSBjbGFzc05hbWU9XCJ0bV9LZXlHb1wiPlNVQk1JVCBXT1JEPC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgU29sdXRpb25TZWN0aW9uID0gPGRpdiBjbGFzc05hbWU9XCJ0bV9zb2x1dGlvbk91dGVyRGl2XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bV9zb2x1dGlvbkRpdlwiPlxyXG4gICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD57cHV6emxlLnN0YXJ0V29yZH08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAge3dvcmRzLm1hcCgodyxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2B1c2VyV29yZCR7aX1gfT48dGQ+e3d9PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIHshc29sdmVkICYmIDx0cj48dGQ+Li4uPC90ZD48L3RyPn1cclxuICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPntwdXp6bGUudGFyZ2V0V29yZH08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtzb2x2ZWQgP1xyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0bV9jb25ncmF0c1wiPvCfkY/wn4+9IFNvbHZlZCBpbiB7d29yZHMubGVuZ3RoICsgMX0gbW92ZXMg8J+Rj/Cfj708L3A+XHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPE1vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgIHtTaG93S2V5Ym9hcmR9XHJcbiAgICAgICAgICAgICAgICA8L01vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgICAgICAgICAgPEJyb3dzZXJWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgIHtTaG93S2V5Ym9hcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidG1fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOZXh0IFdvcmQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17bmV4dFdvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtzZXROZXh0V29yZChlLnRhcmdldC52YWx1ZSk7fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiB7ZS5rZXlDb2RlID09PSAxMyAmJiBhY2NlcHROZXh0V29yZDt9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e2FjY2VwdE5leHRXb3JkfT5TVUJNSVQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L0Jyb3dzZXJWaWV3PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bV9sYXN0YnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt3b3Jkcy5sZW5ndGggPiAwICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge2xldCBuZXdXb3JkcyA9IFsuLi53b3Jkc107IG5ld1dvcmRzLnBvcCgpOyBzZXRXb3JkcyhuZXdXb3Jkcyk7fX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlJlbW92ZSBsYXN0IGVudGVyZWQgd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBVTkRPXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgIHt3b3Jkcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7c2V0V29yZHMoW10pOyBzZXROZXh0V29yZCgnJyk7fX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlJlbW92ZSBhbGwgZW50ZXIgd29yZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUkVTRVRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7YWxlcnQoJ1ZhbGlkIG5leHQgd29yZCBvcHRpb25zOlxcblN3YXAgb25lIGxldHRlciwgZS5nLiBDQVQgdG8gQ09UXFxuRHJvcCBvbmUgbGV0dGVyLCBlLmcuIFNXSUcgdG8gV0lHXFxuSW5zZXJ0IG9uZSBsZXR0ZXIsIGUuZy4gTUFUIHRvIE1BVEgsIG9yIEhJUCB0byBXSElQXFxuQW5hZ3JhbSwgZS5nLiBBQ1QgdG8gQ0FUJyk7fX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlNob3cgaW5zdHJ1Y3Rpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhFTFBcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRtX3F1aXRcIiBvbkNsaWNrPXsoKSA9PiB7cXVpdFRoaXNQdXp6bGUoKTt9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiUXVpdCB0aGlzIHB1enpsZS4gWW91IGNhbiBzdGFydCBhbm90aGVyLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRVUlUXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJCYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgVHJhbnNtb2dyaWZ5XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7KHNvbHZlZCB8fCAhc29sdmluZykgJiYgPHRyPjx0ZD57R2FtZVN0YXJ0U2VjdGlvbn08L3RkPjwvdHI+fVxyXG4gICAgICAgICAgICAgICAgICAgIHtwdXp6bGUgJiYgcHV6emxlLnN0YXJ0V29yZCAmJiA8dHI+PHRkPntQdXp6bGVTZWN0aW9ufTwvdGQ+PC90cj59XHJcbiAgICAgICAgICAgICAgICAgICAge3B1enpsZSAmJiBwdXp6bGUuc3RhcnRXb3JkICYmIDx0cj48dGQ+e1NvbHV0aW9uU2VjdGlvbn08L3RkPjwvdHI+fVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtwdXp6bGUgJiYgcHV6emxlLm5vdGVzICYmIHB1enpsZS5ub3Rlcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyRGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3B1enpsZS5ub3Rlcy5tYXAoKG4saSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2Bub3RlJHtpfWB9PntufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYW5zbW9ncmlmeTsiXSwic291cmNlUm9vdCI6IiJ9