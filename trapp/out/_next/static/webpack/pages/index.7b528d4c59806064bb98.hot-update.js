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

  const resetEnteredWords = async () => {
    let validDownWords = await (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_3__.getTransmogrifyValidNextWords)(puzzle.startWord);
    let validUpWords = await (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_3__.getTransmogrifyValidNextWords)(puzzle.targetWord);
    setDownWords([]);
    setValidNextDownWords(validDownWords);
    setUpWords([]);
    setValidNextUpWords(validUpWords);
    setNextWord('');
  };

  const quitThisPuzzle = () => {
    setSolving(false);
  };

  const handleKeyDown = async event => {
    if (event.key === "F12") {
      return;
    }

    if (event.key === "Enter") {
      acceptNextWordAsEvent(event);
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

  const acceptNextWordAsEvent = async e => {
    e.preventDefault();

    if (nextWord.length === 0) {
      return;
    }

    await acceptTheNextWord(nextWord);
  };

  const acceptThisWord = async w => {
    let newNextWord = w.toUpperCase();
    setNextWord(newNextWord);
    await acceptTheNextWord(newNextWord);
  };

  const acceptTheNextWord = async newWord => {
    // Is the word valid in the down direction?
    let prevWord = downWords.length === 0 ? puzzle.startWord : downWords[downWords.length - 1];
    newWord = newWord.toUpperCase();

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

  const removeDownWords = async wi => {
    if (wi < downWords.length) {
      let newDownWords = [...downWords];
      newDownWords.splice(wi);
      let fromWord = newDownWords.length === 0 ? puzzle.startWord : newDownWords[newDownWords.length - 1];
      let validDownWords = await (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_3__.getTransmogrifyValidNextWords)(fromWord);
      setDownWords(newDownWords);
      setValidNextDownWords(validDownWords);
    }
  };

  const removeUpWords = async wi => {
    if (wi < upWords.length) {
      let newUpWords = [...upWords];
      newUpWords.splice(0, wi + 1);
      let fromWord = newUpWords.length === 0 ? puzzle.targetWord : newUpWords[newUpWords.length - 1];
      let validUpWords = await (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_3__.getTransmogrifyValidNextWords)(fromWord);
      setUpWords(newUpWords);
      setValidNextUpWords(validUpWords);
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
      lineNumber: 173,
      columnNumber: 9
    }, undefined), numMovesArray.map(n => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: `tm_${n === numMoves ? 'numMovesSelected' : 'numMovesUnselected'}`,
      onClick: () => {
        setNumMoves(n);
      },
      children: n
    }, `chooseNumMoves${n}`, false, {
      fileName: _jsxFileName,
      lineNumber: 175,
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
        lineNumber: 182,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 172,
    columnNumber: 30
  }, undefined);

  const PuzzleSection = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "tm_puzzleDiv",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: puzzle.startWord
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "to"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: puzzle.targetWord
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "Target:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: puzzle.numMoves
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "moves"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 187,
    columnNumber: 27
  }, undefined);

  const SubmitWordDiv = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "tm_KeyGoDiv",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: acceptNextWordAsEvent,
      className: `tm_KeyGo ${nextWord.length > 0 ? "" : "disabled"}`,
      children: "SUBMIT WORD"
    }, "keyGo", false, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 196,
    columnNumber: 27
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
                lineNumber: 206,
                columnNumber: 29
              }, undefined), puzzle.startWord]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 21
          }, undefined), downWords.map((w, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "tm_arrow",
                children: "\u21A7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 33
              }, undefined), w]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 29
            }, undefined)
          }, `userDownWord${i}`, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 25
          }, undefined)), !solved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "tm_nextword",
                children: ["\xA0", nextWord, "\xA0"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 215,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 33
          }, undefined), upWords.map((w, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: [w, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "tm_arrow",
                children: "\u21A5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 36
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 29
            }, undefined)
          }, `userUpWord${i}`, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 25
          }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: [puzzle.targetWord, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "tm_arrow",
                children: "\u21A5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 224,
                columnNumber: 48
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 44
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 9
    }, undefined), puzzle && puzzle.startWord && !solved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "tm_validwordsdiv",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Valid down words"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 13
      }, undefined), validNextDownWords.map((w, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          acceptThisWord(w);
        },
        children: [w, i + 1 === validNextDownWords.length ? '' : ',', "\xA0"]
      }, `validdownword${i}`, true, {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 17
      }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Valid up words"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 13
      }, undefined), validNextUpWords.map((w, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: () => {
          acceptThisWord(w);
        },
        children: [w, i + 1 === validNextUpWords.length ? '' : ',', "\xA0"]
      }, `validupword${i}`, true, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 17
      }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Click Your Chosen Next Word"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 51
    }, undefined), solved ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "tm_congrats",
      children: ["\uD83D\uDC4F\uD83C\uDFFD Solved in ", downWords.length + upWords.length + 1, " moves \uD83D\uDC4F\uD83C\uDFFD"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 13
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "tm_lastbuttons",
        children: [downWords.length + upWords.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: () => {
            resetEnteredWords();
          },
          "data-toggle": "tooltip",
          title: "Remove all enter words",
          children: "RESET"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 252,
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
          lineNumber: 257,
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
          lineNumber: 262,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 201,
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
        lineNumber: 272,
        columnNumber: 13
      }, undefined), "Shows insert counts/letters"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "swapCount",
        children: "\xA02\xA0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 13
      }, undefined), "Shows swaps counts/letters"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "anagramCount",
        children: "3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 13
      }, undefined), "Shows anagram counts/words"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: "Click to toggle between count and info"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: "The black dot represents a drop"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: ["Click the ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "closemebutton"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 23
      }, undefined), " to remove your word"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 271,
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
      lineNumber: 280,
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
      lineNumber: 283,
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
      lineNumber: 287,
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
      lineNumber: 290,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 279,
    columnNumber: 25
  }, undefined);

  const MainSection = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
      children: [(solved || !solving) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: GameStartSection
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 42
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 38
      }, undefined), puzzle && puzzle.startWord && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: PuzzleSection
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 48
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 44
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: SolutionSection
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 293,
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
          lineNumber: 305,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 13
    }, undefined), react_device_detect__WEBPACK_IMPORTED_MODULE_2__.isMobile ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: MainSection
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 309,
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
              children: MainSection
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 317,
              columnNumber: 29
            }, undefined), puzzle && puzzle.startWord && !solved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "aligntop",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "tm_hintsheader",
                children: "Word Info"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 321,
                columnNumber: 33
              }, undefined), HintSection]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 320,
              columnNumber: 71
            }, undefined), puzzle && puzzle.startWord && !solved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              className: "aligntop",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "tm_hintsheader",
                children: "Word Info Explanation"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 327,
                columnNumber: 29
              }, undefined), ExplainHints]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 326,
              columnNumber: 71
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: puzzle && puzzle.notes && puzzle.notes.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trDanger",
        children: puzzle.notes.map((n, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: n
        }, `note${i}`, false, {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 301,
    columnNumber: 9
  }, undefined);
};

_s(Transmogrify, "Mqz3G8hfMm5bX09WcOfmv4eFg4Q=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG0vdG0uanMiXSwibmFtZXMiOlsiVHJhbnNtb2dyaWZ5Iiwic2V0V2hlcmV0byIsIm51bU1vdmVzIiwic2V0TnVtTW92ZXMiLCJ1c2VTdGF0ZSIsImJhc2V1cmwiLCJudW1Nb3Zlc0FycmF5IiwicHV6emxlIiwic2V0UHV6emxlIiwibmV4dFdvcmQiLCJzZXROZXh0V29yZCIsImRvd25Xb3JkcyIsInNldERvd25Xb3JkcyIsInZhbGlkTmV4dERvd25Xb3JkcyIsInNldFZhbGlkTmV4dERvd25Xb3JkcyIsInVwV29yZHMiLCJzZXRVcFdvcmRzIiwidmFsaWROZXh0VXBXb3JkcyIsInNldFZhbGlkTmV4dFVwV29yZHMiLCJzb2x2ZWQiLCJzZXRTb2x2ZWQiLCJzb2x2aW5nIiwic2V0U29sdmluZyIsImNhbGxGb3JQdXp6bGUiLCJkYXRhIiwidmFsaWREb3duV29yZHMiLCJ2YWxpZFVwV29yZHMiLCJuZXdTb2x2aW5nIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJnZXRUcmFuc21vZ3JpZnlWYWxpZE5leHRXb3JkcyIsInN0YXJ0V29yZCIsInRhcmdldFdvcmQiLCJlcnJvciIsIm5vdGVzIiwiY29uc29sZSIsImxvZyIsInJlc2V0RW50ZXJlZFdvcmRzIiwicXVpdFRoaXNQdXp6bGUiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJrZXkiLCJhY2NlcHROZXh0V29yZEFzRXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImsiLCJ0b1VwcGVyQ2FzZSIsImhhbmRsZURlbGV0ZUxldHRlciIsInRlc3QiLCJoYW5kbGVJbnB1dExldHRlciIsImxldHRlciIsInNvZmFyIiwibGVuZ3RoIiwiQXJyYXkiLCJmcm9tIiwicG9wIiwibmV3c29mYXIiLCJqb2luIiwiZSIsImFjY2VwdFRoZU5leHRXb3JkIiwiYWNjZXB0VGhpc1dvcmQiLCJ3IiwibmV3TmV4dFdvcmQiLCJuZXdXb3JkIiwicHJldldvcmQiLCJ2YWxpZE1vdmUiLCJpc1dvcmRWYWxpZCIsImFsZXJ0Iiwid29yZEJlbG93TmV3V29yZCIsIm5ld0Rvd25Xb3JkcyIsInB1c2giLCJ2YWxpZE5leHRXb3JkcyIsIndvcmRBYm92ZU5ld1dvcmQiLCJuZXdVcFdvcmRzIiwicmVtb3ZlRG93bldvcmRzIiwid2kiLCJzcGxpY2UiLCJmcm9tV29yZCIsInJlbW92ZVVwV29yZHMiLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJhcmVBbmFncmFtcyIsImNvdW50U3dhcHMiLCJpc0Ryb3AiLCJHYW1lU3RhcnRTZWN0aW9uIiwibWFwIiwibiIsIlB1enpsZVNlY3Rpb24iLCJTdWJtaXRXb3JkRGl2IiwiU29sdXRpb25TZWN0aW9uIiwiaSIsIkV4cGxhaW5IaW50cyIsIkhpbnRTZWN0aW9uIiwiZyIsImdpIiwiTWFpblNlY3Rpb24iLCJpc01vYmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBa0I7QUFBQTs7QUFDbkMsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQywrQ0FBUSxDQUFDLENBQUQsQ0FBeEM7QUFDQSxRQUFNQyxPQUFPLEdBQUksS0FBRCxHQUFvRSx1QkFBcEUsR0FBOEYsQ0FBOUc7QUFDQSxRQUFNQyxhQUFhLEdBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUF0QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkosK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ08sU0FBRDtBQUFBLE9BQVlDO0FB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LjdiNTI4ZDRjNTk4MDYwNjRiYjk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCI7XHJcbmltcG9ydCB7IGNvdW50U3dhcHMsIGFyZUFuYWdyYW1zLCBpc0Ryb3AsIGlzV29yZFZhbGlkLCBnZXRUcmFuc21vZ3JpZnlWYWxpZE5leHRXb3JkcyB9IGZyb20gJy4uLy4uL2xpYi93b3JkZnVuY3Rpb25zJztcclxuaW1wb3J0IFNob3dpbmZvIGZyb20gJy4uL3dpL3Nob3dpbmZvJ1xyXG5cclxuY29uc3QgVHJhbnNtb2dyaWZ5ID0gKHtzZXRXaGVyZXRvfSkgPT4ge1xyXG4gICAgY29uc3QgW251bU1vdmVzLCBzZXROdW1Nb3Zlc10gPSB1c2VTdGF0ZSgyKTtcclxuICAgIGNvbnN0IGJhc2V1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tJztcclxuICAgIGNvbnN0IG51bU1vdmVzQXJyYXkgPSBbMiwzLDQsNSw2LDcsOCw5XTtcclxuICAgIGNvbnN0IFtwdXp6bGUsIHNldFB1enpsZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbbmV4dFdvcmQsIHNldE5leHRXb3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtkb3duV29yZHMsIHNldERvd25Xb3Jkc10gPSB1c2VTdGF0ZShbXSk7IC8vIFVzZXJzIHdvcmRzIGdvaW5nIGRvd24gZnJvbSB0aGUgc3RhcnQgd29yZFxyXG4gICAgY29uc3QgW3ZhbGlkTmV4dERvd25Xb3Jkcywgc2V0VmFsaWROZXh0RG93bldvcmRzXSA9IHVzZVN0YXRlKFtdKTsgLy8gVmFsaWQgbmV4dCB3b3JkcyBpbiBkb3duIGRpcmVjdGlvblxyXG4gICAgY29uc3QgW3VwV29yZHMsIHNldFVwV29yZHNdID0gdXNlU3RhdGUoW10pOyAvLyBVc2VycyB3b3JkcyBnb2luZyB1cCBmcm9tIHRoZSB0YXJnZXQgd29yZFxyXG4gICAgY29uc3QgW3ZhbGlkTmV4dFVwV29yZHMsIHNldFZhbGlkTmV4dFVwV29yZHNdID0gdXNlU3RhdGUoW10pOyAvLyBWYWxpZCBuZXh0IHdvcmRzIGluIHVwIGRpcmVjdGlvblxyXG4gICAgY29uc3QgW3NvbHZlZCwgc2V0U29sdmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzb2x2aW5nLCBzZXRTb2x2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNhbGxGb3JQdXp6bGUgPSBhc3luYygpID0+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgICAgIGxldCB2YWxpZERvd25Xb3JkcyA9IFtdO1xyXG4gICAgICAgIGxldCB2YWxpZFVwV29yZHMgPSBbXTtcclxuICAgICAgICBsZXQgbmV3U29sdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSBgJHtiYXNldXJsfS9FTkFCTEUySz90cmFuc21vZ3JpZnk9dHJ1ZSZudW1Nb3Zlcz0ke251bU1vdmVzfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICAgICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgdmFsaWREb3duV29yZHMgPSBhd2FpdCBnZXRUcmFuc21vZ3JpZnlWYWxpZE5leHRXb3JkcyhkYXRhLnN0YXJ0V29yZCk7XHJcbiAgICAgICAgICAgIHZhbGlkVXBXb3JkcyA9IGF3YWl0IGdldFRyYW5zbW9ncmlmeVZhbGlkTmV4dFdvcmRzKGRhdGEudGFyZ2V0V29yZCk7XHJcbiAgICAgICAgICAgIG5ld1NvbHZpbmcgPSB0cnVlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGRhdGEubm90ZXMgPSBbXCJQcm9ibGVtIHdpdGggdGhlIHNlcnZlci4gU29ycnkgYWJvdXQgdGhhdC5cIl07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0UHV6emxlKGRhdGEpO1xyXG4gICAgICAgIHNldERvd25Xb3JkcyhbXSk7XHJcbiAgICAgICAgc2V0VmFsaWROZXh0RG93bldvcmRzKHZhbGlkRG93bldvcmRzKTtcclxuICAgICAgICBzZXRVcFdvcmRzKFtdKTtcclxuICAgICAgICBzZXRWYWxpZE5leHRVcFdvcmRzKHZhbGlkVXBXb3Jkcyk7XHJcbiAgICAgICAgc2V0TmV4dFdvcmQoJycpO1xyXG4gICAgICAgIHNldFNvbHZlZChmYWxzZSk7XHJcbiAgICAgICAgc2V0U29sdmluZyhuZXdTb2x2aW5nKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc2V0RW50ZXJlZFdvcmRzID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgbGV0IHZhbGlkRG93bldvcmRzID0gYXdhaXQgZ2V0VHJhbnNtb2dyaWZ5VmFsaWROZXh0V29yZHMocHV6emxlLnN0YXJ0V29yZCk7XHJcbiAgICAgICAgbGV0IHZhbGlkVXBXb3JkcyA9IGF3YWl0IGdldFRyYW5zbW9ncmlmeVZhbGlkTmV4dFdvcmRzKHB1enpsZS50YXJnZXRXb3JkKTtcclxuICAgICAgICBzZXREb3duV29yZHMoW10pO1xyXG4gICAgICAgIHNldFZhbGlkTmV4dERvd25Xb3Jkcyh2YWxpZERvd25Xb3Jkcyk7XHJcbiAgICAgICAgc2V0VXBXb3JkcyhbXSk7XHJcbiAgICAgICAgc2V0VmFsaWROZXh0VXBXb3Jkcyh2YWxpZFVwV29yZHMpO1xyXG4gICAgICAgIHNldE5leHRXb3JkKCcnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHF1aXRUaGlzUHV6emxlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNvbHZpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IGFzeW5jKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJGMTJcIikge3JldHVybjt9XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIGFjY2VwdE5leHRXb3JkQXNFdmVudChldmVudCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgayA9IGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChrID09PSBcIkJBQ0tTUEFDRVwiKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZURlbGV0ZUxldHRlcigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoL15bQS1aXSQvLnRlc3QoaykpIHsgLy8gSXMgYSBsZXR0ZXJcclxuICAgICAgICAgICAgaGFuZGxlSW5wdXRMZXR0ZXIoayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRMZXR0ZXIgPSAobGV0dGVyKSA9PiB7XHJcbiAgICAgICAgbGV0IHNvZmFyID0gbmV4dFdvcmQgKyBsZXR0ZXI7XHJcbiAgICAgICAgc2V0TmV4dFdvcmQoc29mYXIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlTGV0dGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChuZXh0V29yZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBzb2ZhciA9IEFycmF5LmZyb20obmV4dFdvcmQpO1xyXG4gICAgICAgICAgICBzb2Zhci5wb3AoKTtcclxuICAgICAgICAgICAgbGV0IG5ld3NvZmFyID0gc29mYXIuam9pbignJyk7XHJcbiAgICAgICAgICAgIHNldE5leHRXb3JkKG5ld3NvZmFyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBhY2NlcHROZXh0V29yZEFzRXZlbnQgPSBhc3luYyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChuZXh0V29yZC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBhY2NlcHRUaGVOZXh0V29yZChuZXh0V29yZCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhY2NlcHRUaGlzV29yZCA9IGFzeW5jKHcpID0+IHtcclxuICAgICAgICBsZXQgbmV3TmV4dFdvcmQgPSB3LnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgc2V0TmV4dFdvcmQobmV3TmV4dFdvcmQpO1xyXG4gICAgICAgIGF3YWl0IGFjY2VwdFRoZU5leHRXb3JkKG5ld05leHRXb3JkKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGFjY2VwdFRoZU5leHRXb3JkID0gYXN5bmMobmV3V29yZCkgPT4ge1xyXG4gICAgICAgIC8vIElzIHRoZSB3b3JkIHZhbGlkIGluIHRoZSBkb3duIGRpcmVjdGlvbj9cclxuICAgICAgICBsZXQgcHJldldvcmQgPSAoZG93bldvcmRzLmxlbmd0aCA9PT0gMCA/IHB1enpsZS5zdGFydFdvcmQgOiBkb3duV29yZHNbZG93bldvcmRzLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICBuZXdXb3JkID0gbmV3V29yZC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIGlmICh2YWxpZE1vdmUocHJldldvcmQsIG5ld1dvcmQpKSB7XHJcbiAgICAgICAgICAgIGlmICghYXdhaXQgaXNXb3JkVmFsaWQobmV3V29yZCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGAke25ld1dvcmR9IGlzIG5vdCBhIHZhbGlkIHdvcmRgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCB3b3JkQmVsb3dOZXdXb3JkID0gKHVwV29yZHMubGVuZ3RoID09PSAwID8gcHV6emxlLnRhcmdldFdvcmQgOiB1cFdvcmRzWzBdKTtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdEb3duV29yZHMgPSBbLi4uZG93bldvcmRzXTtcclxuICAgICAgICAgICAgICAgIG5ld0Rvd25Xb3Jkcy5wdXNoKG5ld1dvcmQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkTW92ZShuZXdXb3JkLCB3b3JkQmVsb3dOZXdXb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERvd25Xb3JkcyhuZXdEb3duV29yZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE5leHRXb3JkKCcnKTsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U29sdmVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsaWROZXh0V29yZHMgPSBhd2FpdCBnZXRUcmFuc21vZ3JpZnlWYWxpZE5leHRXb3JkcyhuZXdXb3JkKTsgLy8gbG93ZXIgY2FzZSB2YWxpZCBuZXh0IHdvcmRzXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsaWROZXh0RG93bldvcmRzKHZhbGlkTmV4dFdvcmRzKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXREb3duV29yZHMobmV3RG93bldvcmRzKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXROZXh0V29yZCgnJyk7ICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gSXMgdGhlIHdvcmQgdmFsaWQgaW4gdGhlIHVwIGRpcmVjdGlvbj9cclxuICAgICAgICAgICAgcHJldldvcmQgPSAodXBXb3Jkcy5sZW5ndGggPT09IDAgPyBwdXp6bGUudGFyZ2V0V29yZCA6IHVwV29yZHNbMF0pO1xyXG4gICAgICAgICAgICBpZiAodmFsaWRNb3ZlKHByZXZXb3JkLCBuZXdXb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhd2FpdCBpc1dvcmRWYWxpZChuZXdXb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGAke25ld1dvcmR9IGlzIG5vdCBhIHZhbGlkIHdvcmRgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdvcmRBYm92ZU5ld1dvcmQgPSAoZG93bldvcmRzLmxlbmd0aCA9PT0gMCA/IHB1enpsZS5zdGFydFdvcmQgOiBkb3duV29yZHNbZG93bldvcmRzLmxlbmd0aC0xXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1VwV29yZHMgPSBbbmV3V29yZCwuLi51cFdvcmRzXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRNb3ZlKG5ld1dvcmQsIHdvcmRBYm92ZU5ld1dvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFVwV29yZHMobmV3VXBXb3Jkcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE5leHRXb3JkKCcnKTsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNvbHZlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsaWROZXh0V29yZHMgPSBhd2FpdCBnZXRUcmFuc21vZ3JpZnlWYWxpZE5leHRXb3JkcyhuZXdXb3JkKTsgLy8gbG93ZXIgY2FzZSB2YWxpZCBuZXh0IHdvcmRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbGlkTmV4dFVwV29yZHModmFsaWROZXh0V29yZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVcFdvcmRzKG5ld1VwV29yZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXROZXh0V29yZCgnJyk7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ09ubHkgYW5hZ3JhbXMsIGRyb3BzLCBzd2FwcyBhbmQgaW5zZXJ0cyBhbGxvd2VkLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVtb3ZlRG93bldvcmRzID0gYXN5bmMod2kpID0+IHtcclxuICAgICAgICBpZiAod2kgPCBkb3duV29yZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdEb3duV29yZHMgPSBbLi4uZG93bldvcmRzXTtcclxuICAgICAgICAgICAgbmV3RG93bldvcmRzLnNwbGljZSh3aSk7XHJcbiAgICAgICAgICAgIGxldCBmcm9tV29yZCA9IG5ld0Rvd25Xb3Jkcy5sZW5ndGggPT09IDAgPyBwdXp6bGUuc3RhcnRXb3JkIDogbmV3RG93bldvcmRzW25ld0Rvd25Xb3Jkcy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgbGV0IHZhbGlkRG93bldvcmRzID0gYXdhaXQgZ2V0VHJhbnNtb2dyaWZ5VmFsaWROZXh0V29yZHMoZnJvbVdvcmQpO1xyXG4gICAgICAgICAgICBzZXREb3duV29yZHMobmV3RG93bldvcmRzKTtcclxuICAgICAgICAgICAgc2V0VmFsaWROZXh0RG93bldvcmRzKHZhbGlkRG93bldvcmRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCByZW1vdmVVcFdvcmRzID0gYXN5bmMod2kpID0+IHtcclxuICAgICAgICBpZiAod2kgPCB1cFdvcmRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsZXQgbmV3VXBXb3JkcyA9IFsuLi51cFdvcmRzXTtcclxuICAgICAgICAgICAgbmV3VXBXb3Jkcy5zcGxpY2UoMCx3aSsxKTtcclxuICAgICAgICAgICAgbGV0IGZyb21Xb3JkID0gbmV3VXBXb3Jkcy5sZW5ndGggPT09IDAgPyBwdXp6bGUudGFyZ2V0V29yZCA6IG5ld1VwV29yZHNbbmV3VXBXb3Jkcy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgbGV0IHZhbGlkVXBXb3JkcyA9IGF3YWl0IGdldFRyYW5zbW9ncmlmeVZhbGlkTmV4dFdvcmRzKGZyb21Xb3JkKTtcclxuICAgICAgICAgICAgc2V0VXBXb3JkcyhuZXdVcFdvcmRzKTtcclxuICAgICAgICAgICAgc2V0VmFsaWROZXh0VXBXb3Jkcyh2YWxpZFVwV29yZHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHZhbGlkTW92ZSA9IChwcmV2V29yZD1cIlwiLCBuZXdXb3JkPVwiXCIpID0+IHtcclxuICAgICAgICBwcmV2V29yZCA9IHByZXZXb3JkLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIG5ld1dvcmQgPSBuZXdXb3JkLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChwcmV2V29yZCA9PT0gbmV3V29yZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoYXJlQW5hZ3JhbXMocHJldldvcmQsIG5ld1dvcmQpXHJcbiAgICAgICAgICAgIHx8IGNvdW50U3dhcHMocHJldldvcmQsIG5ld1dvcmQpID09PSAxXHJcbiAgICAgICAgICAgIHx8IGlzRHJvcChwcmV2V29yZCwgbmV3V29yZClcclxuICAgICAgICAgICAgfHwgaXNEcm9wKG5ld1dvcmQsIHByZXZXb3JkKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBHYW1lU3RhcnRTZWN0aW9uID0gPGRpdiBjbGFzc05hbWU9XCJ0bV9udW1Nb3Zlc0RpdlwiPlxyXG4gICAgICAgIDxoMz5OdW1iZXIgT2YgTW92ZXM8L2gzPlxyXG4gICAgICAgIHtudW1Nb3Zlc0FycmF5Lm1hcCgobikgPT4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YHRtXyR7biA9PT0gbnVtTW92ZXMgPyAnbnVtTW92ZXNTZWxlY3RlZCcgOiAnbnVtTW92ZXNVbnNlbGVjdGVkJ31gfVxyXG4gICAgICAgICAgICAgICAga2V5PXtgY2hvb3NlTnVtTW92ZXMke259YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0TnVtTW92ZXMobik7IH0gfVxyXG4gICAgICAgICAgICA+e259XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG1fc3RhcnRQdXp6bGVEaXZcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJzdGFydFB1enpsZVwiIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4geyBjYWxsRm9yUHV6emxlKCk7IH0gfT5cclxuICAgICAgICAgICAgICAgIFN0YXJ0IFB1enpsZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IFB1enpsZVNlY3Rpb24gPSA8ZGl2IGNsYXNzTmFtZT1cInRtX3B1enpsZURpdlwiPlxyXG4gICAgICAgIDxzcGFuPntwdXp6bGUuc3RhcnRXb3JkfTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj50bzwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj57cHV6emxlLnRhcmdldFdvcmR9PC9zcGFuPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPHNwYW4+VGFyZ2V0Ojwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj57cHV6emxlLm51bU1vdmVzfTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5tb3Zlczwvc3Bhbj5cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IFN1Ym1pdFdvcmREaXYgPSA8ZGl2IGNsYXNzTmFtZT1cInRtX0tleUdvRGl2XCI+XHJcbiAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlHb1wiIG9uQ2xpY2s9e2FjY2VwdE5leHRXb3JkQXNFdmVudH0gY2xhc3NOYW1lPXtgdG1fS2V5R28gJHtuZXh0V29yZC5sZW5ndGggPiAwID8gXCJcIiA6IFwiZGlzYWJsZWRcIn1gfT5cclxuICAgICAgICAgICAgU1VCTUlUIFdPUkRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IFNvbHV0aW9uU2VjdGlvbiA9IDxkaXYgY2xhc3NOYW1lPVwidG1fc29sdXRpb25PdXRlckRpdlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG1fc29sdXRpb25EaXZcIj5cclxuICAgICAgICAgICAge3B1enpsZSAmJiBwdXp6bGUuc3RhcnRXb3JkICYmIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBjbGFzc05hbWU9XCJ0bV9hcnJvd1wiPuKGpzwvc3Bhbj57cHV6emxlLnN0YXJ0V29yZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAge2Rvd25Xb3Jkcy5tYXAoKHcsaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgdXNlckRvd25Xb3JkJHtpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxzcGFuIGNsYXNzTmFtZT1cInRtX2Fycm93XCI+4oanPC9zcGFuPnt3fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgeyFzb2x2ZWQgJiYgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0bV9uZXh0d29yZFwiPiZuYnNwO3tuZXh0V29yZH0mbmJzcDs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj59XHJcbiAgICAgICAgICAgICAgICAgICAge3VwV29yZHMubWFwKCh3LGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YHVzZXJVcFdvcmQke2l9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3d9PHNwYW4gY2xhc3NOYW1lPVwidG1fYXJyb3dcIj7ihqU8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHV6emxlLnRhcmdldFdvcmR9PHNwYW4gY2xhc3NOYW1lPVwidG1fYXJyb3dcIj7ihqU8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3B1enpsZSAmJiBwdXp6bGUuc3RhcnRXb3JkICYmICFzb2x2ZWQgJiYgPGRpdiBjbGFzc05hbWU9XCJ0bV92YWxpZHdvcmRzZGl2XCI+XHJcbiAgICAgICAgICAgIDxwPlZhbGlkIGRvd24gd29yZHM8L3A+XHJcbiAgICAgICAgICAgIHt2YWxpZE5leHREb3duV29yZHMubWFwKCh3LGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YHZhbGlkZG93bndvcmQke2l9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhY2NlcHRUaGlzV29yZCh3KTtcclxuICAgICAgICAgICAgICAgIH19Pnt3fXtpICsgMSA9PT0gdmFsaWROZXh0RG93bldvcmRzLmxlbmd0aCA/ICcnIDogJywnfSZuYnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxwPlZhbGlkIHVwIHdvcmRzPC9wPlxyXG4gICAgICAgICAgICB7dmFsaWROZXh0VXBXb3Jkcy5tYXAoKHcsaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtgdmFsaWR1cHdvcmQke2l9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhY2NlcHRUaGlzV29yZCh3KTtcclxuICAgICAgICAgICAgICAgIH19Pnt3fXtpICsgMSA9PT0gdmFsaWROZXh0VXBXb3Jkcy5sZW5ndGggPyAnJyA6ICcsJ30mbmJzcDs8L3NwYW4+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8cD5DbGljayBZb3VyIENob3NlbiBOZXh0IFdvcmQ8L3A+XHJcbiAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIHtzb2x2ZWQgP1xyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0bV9jb25ncmF0c1wiPvCfkY/wn4+9IFNvbHZlZCBpbiB7ZG93bldvcmRzLmxlbmd0aCArIHVwV29yZHMubGVuZ3RoICsgMX0gbW92ZXMg8J+Rj/Cfj708L3A+XHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bV9sYXN0YnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkb3duV29yZHMubGVuZ3RoICsgdXBXb3Jkcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7cmVzZXRFbnRlcmVkV29yZHMoKTt9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiUmVtb3ZlIGFsbCBlbnRlciB3b3Jkc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSRVNFVFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHthbGVydCgnVmFsaWQgbmV4dCB3b3JkIG9wdGlvbnM6XFxuU3dhcCBvbmUgbGV0dGVyLCBlLmcuIENBVCB0byBDT1RcXG5Ecm9wIG9uZSBsZXR0ZXIsIGUuZy4gU1dJRyB0byBXSUdcXG5JbnNlcnQgb25lIGxldHRlciwgZS5nLiBNQVQgdG8gTUFUSCwgb3IgSElQIHRvIFdISVBcXG5BbmFncmFtLCBlLmcuIEFDVCB0byBDQVQnKTt9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiU2hvdyBpbnN0cnVjdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSEVMUFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidG1fcXVpdFwiIG9uQ2xpY2s9eygpID0+IHtxdWl0VGhpc1B1enpsZSgpO319XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJRdWl0IHRoaXMgcHV6emxlLiBZb3UgY2FuIHN0YXJ0IGFub3RoZXIuXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFFVSVRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICA8L2Rpdj47XHJcbiAgICBjb25zdCBFeHBsYWluSGludHMgPSA8dWwgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiaW5zZXJ0Q291bnRcIj4mbmJzcDsxJm5ic3A7PC9zcGFuPlNob3dzIGluc2VydCBjb3VudHMvbGV0dGVyczwvbGk+XHJcbiAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cInN3YXBDb3VudFwiPiZuYnNwOzImbmJzcDs8L3NwYW4+U2hvd3Mgc3dhcHMgY291bnRzL2xldHRlcnM8L2xpPlxyXG4gICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJhbmFncmFtQ291bnRcIj4zPC9zcGFuPlNob3dzIGFuYWdyYW0gY291bnRzL3dvcmRzPC9saT5cclxuICAgICAgICA8bGk+Q2xpY2sgdG8gdG9nZ2xlIGJldHdlZW4gY291bnQgYW5kIGluZm88L2xpPlxyXG4gICAgICAgIDxsaT5UaGUgYmxhY2sgZG90IHJlcHJlc2VudHMgYSBkcm9wPC9saT5cclxuICAgICAgICA8bGk+Q2xpY2sgdGhlIDxzcGFuIGNsYXNzTmFtZT1cImNsb3NlbWVidXR0b25cIj48L3NwYW4+IHRvIHJlbW92ZSB5b3VyIHdvcmQ8L2xpPlxyXG4gICAgPC91bD47XHJcbiAgICBjb25zdCBIaW50U2VjdGlvbiA9IDxkaXY+XHJcbiAgICAgICAgPFNob3dpbmZvIHdvcmQ9e3B1enpsZS5zdGFydFdvcmR9IHNob3dJbnNlcnRzPVwiWVwiIHNob3dTd2Fwcz1cIllcIiBzaG93QW5hZ3JhbXM9XCJZXCIgc2hvd0Ryb3BzPVwiWVwiXHJcbiAgICAgICAgICAgICByZW1vdmVFbnRyeT17KCkgPT4ge319IGVudHJ5SW5kZXg9ey0xfS8+XHJcbiAgICAgICAge2Rvd25Xb3Jkcy5tYXAoKGcsZ2kpID0+IChcclxuICAgICAgICAgICAgPFNob3dpbmZvIGtleT17YGhpbnRkb3dud29yZCR7Z2l9JHtnfWB9IHdvcmQ9e2d9IHNob3dJbnNlcnRzPVwiWVwiIHNob3dTd2Fwcz1cIllcIiBzaG93QW5hZ3JhbXM9XCJZXCIgc2hvd0Ryb3BzPVwiWVwiXHJcbiAgICAgICAgICAgICByZW1vdmVFbnRyeT17KCkgPT4ge3JlbW92ZURvd25Xb3JkcyhnaSk7fX0gZW50cnlJbmRleD17Z2krMX0vPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIHt1cFdvcmRzLm1hcCgoZyxnaSkgPT4gKFxyXG4gICAgICAgICAgICA8U2hvd2luZm8ga2V5PXtgaGludHVwd29yZCR7Z2l9JHtnfWB9IHdvcmQ9e2d9IHNob3dJbnNlcnRzPVwiWVwiIHNob3dTd2Fwcz1cIllcIiBzaG93QW5hZ3JhbXM9XCJZXCIgc2hvd0Ryb3BzPVwiWVwiXHJcbiAgICAgICAgICAgICByZW1vdmVFbnRyeT17KCkgPT4ge3JlbW92ZVVwV29yZHMoZ2kpO319IGVudHJ5SW5kZXg9e2dpKzF9Lz5cclxuICAgICAgICApKX1cclxuICAgICAgICA8U2hvd2luZm8gd29yZD17cHV6emxlLnRhcmdldFdvcmR9IHNob3dJbnNlcnRzPVwiWVwiIHNob3dTd2Fwcz1cIllcIiBzaG93QW5hZ3JhbXM9XCJZXCIgc2hvd0Ryb3BzPVwiWVwiXHJcbiAgICAgICAgICAgICByZW1vdmVFbnRyeT17KCkgPT4ge319IGVudHJ5SW5kZXg9ey0xfS8+XHJcbiAgICA8L2Rpdj47XHJcbiAgICBjb25zdCBNYWluU2VjdGlvbiA9IDx0YWJsZT5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHsoc29sdmVkIHx8ICFzb2x2aW5nKSAmJiA8dHI+PHRkPntHYW1lU3RhcnRTZWN0aW9ufTwvdGQ+PC90cj59XHJcbiAgICAgICAgICAgIHtwdXp6bGUgJiYgcHV6emxlLnN0YXJ0V29yZCAmJiA8dHI+PHRkPntQdXp6bGVTZWN0aW9ufTwvdGQ+PC90cj59XHJcbiAgICAgICAgICAgIDx0cj48dGQ+e1NvbHV0aW9uU2VjdGlvbn08L3RkPjwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgIDwvdGFibGU+O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIFRyYW5zbW9ncmlmeVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7aXNNb2JpbGUgP1xyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge01haW5TZWN0aW9ufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIG9uS2V5RG93bj17KGUpID0+IHsgaGFuZGxlS2V5RG93bihlKTsgfSB9IHRhYkluZGV4PXstMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYWxpZ250b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7TWFpblNlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3B1enpsZSAmJiBwdXp6bGUuc3RhcnRXb3JkICYmICFzb2x2ZWQgJiYgPHRkIGNsYXNzTmFtZT1cImFsaWdudG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bV9oaW50c2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXb3JkIEluZm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7SGludFNlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwdXp6bGUgJiYgcHV6emxlLnN0YXJ0V29yZCAmJiAhc29sdmVkICYmIDx0ZCBjbGFzc05hbWU9XCJhbGlnbnRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bV9oaW50c2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXb3JkIEluZm8gRXhwbGFuYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXhwbGFpbkhpbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7cHV6emxlICYmIHB1enpsZS5ub3RlcyAmJiBwdXp6bGUubm90ZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwdXp6bGUubm90ZXMubWFwKChuLGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtgbm90ZSR7aX1gfT57bn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmFuc21vZ3JpZnk7Il0sInNvdXJjZVJvb3QiOiIifQ==