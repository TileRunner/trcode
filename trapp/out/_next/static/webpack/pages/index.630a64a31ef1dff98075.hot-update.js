self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/morpho/morpho.js":
/*!********************************!*\
  !*** ./pages/morpho/morpho.js ***!
  \********************************/
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


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\morpho\\morpho.js",
    _s = $RefreshSig$();





const Morpho = ({
  setWhereto
}) => {
  _s();

  const {
    0: numRows,
    1: setNumRows
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(6);
  const {
    0: numCols,
    1: setNumCols
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);
  const {
    0: nextNumCols,
    1: setNextNumCols
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);
  const baseurl =  true ? 'http://localhost:5000' : 0;
  const cssPresetLetter = "morphoCellStatic";
  const cssNoLetter = "morphoCellNoLetter";
  const cssSelectedCell = " morphoCellSelected";
  const cssLarva = "morphoCellLarva";
  const cssCocoon = "morphoCellCocoon";
  const cssButterfly = "morphoCellButterfly";
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: checking,
    1: setChecking
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Set when checking solution to prevent further alterations

  const {
    0: filledin,
    1: setFilledin
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: showSolution,
    1: setShowSolution
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: puzzleSolved,
    1: setPuzzleSolved
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: firstWord,
    1: setFirstWord
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: lastWord,
    1: setLastWord
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: board,
    1: setBoard
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: selected,
    1: setSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    row: 1,
    col: 0
  }); // Natural place to start entering letters

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setInitialBoard(nextNumCols);
  }, []);

  const setInitialBoard = async wordLength => {
    // Initial board of given size
    let numberOfRows = wordLength + 1;
    let numberOfCols = wordLength;
    setLoading(true);
    setChecking(false);
    setShowSolution(false);
    setFilledin(false);
    setPuzzleSolved(false);
    setNumCols(wordLength);
    setNumRows(wordLength + 1);
    let rowArray = [];
    let url = `${baseurl}/ENABLE2K?morpho=true&len=${wordLength}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data.notes || data.notes.length === 0) {
      // Ok result
      for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
        const rowWord = data.puzzle[rowIndex].toUpperCase();

        if (rowIndex === 0) {
          setFirstWord(rowWord);
        } else if (rowIndex === numberOfRows - 1) {
          setLastWord(rowWord);
        }

        const rowLetters = [...Array.from(rowWord)];
        let rowFilledIn = rowIndex === 0 || rowIndex === numberOfRows - 1;
        let colArray = [];

        for (let colIndex = 0; colIndex < numberOfCols; colIndex++) {
          let cell = {
            letter: '?',
            solution: rowLetters[colIndex],
            className: '?'
          };

          if (rowIndex === 0 || rowIndex === numberOfRows - 1) {
            cell.letter = rowLetters[colIndex];
            cell.className = cssPresetLetter;
          } else {
            cell.letter = '?';
            cell.className = cssNoLetter;
          }

          colArray.push(cell);
        }

        rowArray.push({
          filledin: rowFilledIn,
          colArray: colArray
        });
      }

      setBoard(rowArray);
      setSelected({
        row: 1,
        col: 0
      });
      setLoading(false);
    } else {
      alert(`Problem generating puzzle: ${data.notes}\nBest to click Home then rechoose Morpho.`);
    }
  };

  const handleSelection = (rowIndex, colIndex) => {
    if (checking) {
      return; // No modes while checking solution
    }

    if (puzzleSolved) {
      return; // Puzzle already solved
    }

    if (colIndex < 0 || colIndex >= numCols) {
      return;
    }

    if (rowIndex === numRows - 1 && selected.row > 0 && selected.row < numRows - 1) {
      // If they click on a bottom row tile then copy it up and copy down the rest of the row
      let newBoard = JSON.parse(JSON.stringify(board));

      for (let ci = 0; ci < numCols; ci++) {
        if (ci === colIndex) {
          // This is the column they clicked on
          newBoard[selected.row].colArray[ci].letter = newBoard[numRows - 1].colArray[ci].letter;
        } else {
          newBoard[selected.row].colArray[ci].letter = newBoard[selected.row - 1].colArray[ci].letter;
        }

        newBoard[selected.row].colArray[ci].className = cssCocoon;
      }

      newBoard[selected.row].filledin = true;
      let newSelected = {
        row: selected.row + 1,
        col: 0
      };
      setSelected(newSelected);
      setBoard(newBoard);

      if (newBoard.filter(r => {
        return !r.filledin;
      }).length === 0) {
        // All letters are filled in
        setFilledin(true);
      }

      return;
    }

    if (rowIndex < 1 || rowIndex >= numRows - 1) {
      return;
    }

    setSelected({
      row: rowIndex,
      col: colIndex
    });
  };

  const handleKeyDown = event => {
    if (event.key === "F12") {
      return;
    }

    event.preventDefault();

    if (checking) {
      return; // No modes while checking solution
    }

    if (puzzleSolved) {
      return; // Puzzle already solved
    }

    handleInputLetter(event.key);
  };

  const copyDownLetter = () => {
    if (checking) {
      return; // No modes while checking solution
    }

    if (puzzleSolved) {
      return; // Puzzle already solved
    }

    let rowIndex = selected.row;
    let colIndex = selected.col;

    if (rowIndex < 1 || rowIndex >= numRows - 1) {
      return;
    }

    if (colIndex < 0 || rowIndex >= numCols) {
      return;
    }

    handleInputLetter(board[rowIndex - 1].colArray[colIndex].letter);
  };

  const copyUpLetter = () => {
    if (checking) {
      return; // No modes while checking solution
    }

    if (puzzleSolved) {
      return; // Puzzle already solved
    }

    let rowIndex = selected.row;
    let colIndex = selected.col;

    if (rowIndex < 1 || rowIndex >= numRows - 1) {
      return;
    }

    if (colIndex < 0 || rowIndex >= numCols) {
      return;
    }

    handleInputLetter(board[numRows - 1].colArray[colIndex].letter);
  };

  const handleInputLetter = letter => {
    let rowIndex = selected.row;
    let colIndex = selected.col;

    if (rowIndex < 1 || rowIndex >= numRows - 1) {
      return;
    }

    if (colIndex < 0 || rowIndex >= numCols) {
      return;
    }

    if (filledin && letter === "Enter") {
      checkSolution();
      return;
    }

    let lettertest = /^[A-Za-z\?]$/; // single letter or question mark key pressed

    let moveDirection = "r"; // Default

    if (letter === "Backspace") {
      letter = "?";
      moveDirection = "l";
    }

    if (letter === "Delete") {
      letter = "?";
      moveDirection = "";
    }

    if (letter === "ArrowUp") {
      letter = board[rowIndex].colArray[colIndex].letter;
      moveDirection = "u";
    }

    if (letter === "ArrowDown") {
      letter = board[rowIndex].colArray[colIndex].letter;
      moveDirection = "d";
    }

    if (letter === "ArrowLeft") {
      letter = board[rowIndex].colArray[colIndex].letter;
      moveDirection = "l";
    }

    if (letter === "ArrowRight") {
      letter = board[rowIndex].colArray[colIndex].letter;
      moveDirection = "r";
    }

    if (letter.match(lettertest)) {
      letter = letter.toUpperCase();
    } else {
      return;
    }

    if (letter === "") {
      return;
    }

    let rowArray = JSON.parse(JSON.stringify(board));
    rowArray[rowIndex].colArray[colIndex].letter = letter;
    rowArray[rowIndex].filledin = rowArray[rowIndex].colArray.filter(cell => {
      return cell.letter === "?";
    }).length === 0;

    for (let ci = 0; ci < numCols; ci++) {
      if (rowArray[rowIndex].colArray[ci].letter === "?") {
        rowArray[rowIndex].colArray[ci].className = cssNoLetter;
      } else {
        rowArray[rowIndex].colArray[ci].className = rowArray[rowIndex].filledin ? cssCocoon : cssLarva;
      }
    }

    if (moveDirection === "u") {
      moveUp();
    }

    if (moveDirection === "d") {
      moveDown();
    }

    if (moveDirection === "r") {
      moveRight();
    }

    if (moveDirection === "l") {
      moveLeft();
    }

    if (rowArray.filter(r => {
      return !r.filledin;
    }).length === 0) {
      // All letters are filled in
      setFilledin(true);
    }

    setBoard(rowArray);
  };

  const moveUp = () => {
    let rowIndex = selected.row;
    let colIndex = selected.col;
    let newSelected = {
      row: rowIndex,
      col: colIndex
    };

    if (rowIndex - 1 > 0) {
      newSelected.row = rowIndex - 1;
      newSelected.col = colIndex;
    } else {
      newSelected.row = numRows - 2;
      newSelected.col = colIndex - 1 > -1 ? colIndex - 1 : numCols - 1;
    }

    setSelected(newSelected);
  };

  const moveDown = () => {
    let rowIndex = selected.row;
    let colIndex = selected.col;
    let newSelected = {
      row: rowIndex,
      col: colIndex
    };

    if (rowIndex + 1 < numRows - 1) {
      newSelected.row = rowIndex + 1;
      newSelected.col = colIndex;
    } else {
      newSelected.row = 1;
      newSelected.col = colIndex + 1 < numCols ? colIndex + 1 : 0;
    }

    setSelected(newSelected);
  };

  const moveRight = () => {
    let rowIndex = selected.row;
    let colIndex = selected.col;
    let newSelected = {
      row: 1,
      col: 0
    };

    if (colIndex + 1 < numCols) {
      newSelected.row = rowIndex;
      newSelected.col = colIndex + 1;
    } else if (rowIndex + 1 < numRows - 1) {
      newSelected.row = rowIndex + 1;
      newSelected.col = 0;
    }

    setSelected(newSelected);
  };

  const moveLeft = () => {
    let rowIndex = selected.row;
    let colIndex = selected.col;
    let newSelected = {
      row: numRows - 2,
      col: numCols - 1
    };

    if (colIndex - 1 > -1) {
      newSelected.row = rowIndex;
      newSelected.col = colIndex - 1;
    } else if (rowIndex - 1 > 0) {
      newSelected.row = rowIndex - 1;
      newSelected.col = numCols - 1;
    }

    setSelected(newSelected);
  };

  const toggleShowSolution = () => {
    setShowSolution(!showSolution);
  };

  const checkSolution = async () => {
    setChecking(true);
    let result = true;

    for (let rowIndex = 1; result && rowIndex < numRows; rowIndex++) {
      let prevWord = "";
      let currWord = "";

      for (let colIndex = 0; colIndex < numCols; colIndex++) {
        prevWord = prevWord + board[rowIndex - 1].colArray[colIndex].letter;
        currWord = currWord + board[rowIndex].colArray[colIndex].letter;
      }

      if ((0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_3__.countSwaps)(prevWord, currWord) !== 1) {
        alert(`${prevWord} to ${currWord} is not a valid move`);
        result = false;
      }

      if (result && rowIndex !== numRows - 1 && !(await (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_3__.isWordValid)(currWord))) {
        alert(`${currWord} is not valid`);
        result = false;
      }
    }

    setChecking(false);
    setPuzzleSolved(result);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trBackground",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trTitle",
      children: ["Morpho", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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
          lineNumber: 324,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 13
    }, undefined), loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trEmphasis",
      children: "Creating puzzle, please be patient..."
    }, "pleasewait", false, {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 25
    }, undefined), !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: puzzleSolved ? `morphoSolvedDiv l${numCols}` : "morphoDiv",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        onKeyDown: e => {
          handleKeyDown(e);
        },
        tabIndex: -1,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: board.map((boardRow, rowIndex) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: boardRow.colArray.map((cell, colIndex) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              onClick: () => {
                handleSelection(rowIndex, colIndex);
              },
              className: `col morphoCell ${showSolution ? cssPresetLetter : puzzleSolved ? cssButterfly : cell.className + (rowIndex === selected.row && colIndex === selected.col ? cssSelectedCell : "")}`,
              children: showSolution ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: cell.solution
              }, `BoardCellS.${rowIndex}.${colIndex}`, false, {
                fileName: _jsxFileName,
                lineNumber: 338,
                columnNumber: 37
              }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: cell.letter
              }, `BoardCellL.${rowIndex}.${colIndex}`, false, {
                fileName: _jsxFileName,
                lineNumber: 340,
                columnNumber: 37
              }, undefined)
            }, `BoardCell.${rowIndex}.${colIndex}`, false, {
              fileName: _jsxFileName,
              lineNumber: 334,
              columnNumber: 29
            }, undefined))
          }, `BoardRow.${rowIndex}`, false, {
            fileName: _jsxFileName,
            lineNumber: 332,
            columnNumber: 21
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 78
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: [!loading && !checking && !puzzleSolved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "morphoKeyboard",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "morphoKeyrow4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: () => {
                  copyDownLetter();
                },
                className: "morphoCopydownKey",
                children: "COPY DOWN"
              }, "keyCopydown", false, {
                fileName: _jsxFileName,
                lineNumber: 383,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: () => {
                  copyUpLetter();
                },
                className: "morphoCopyupKey",
                children: "COPY UP"
              }, "keyCopyup", false, {
                fileName: _jsxFileName,
                lineNumber: 384,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 382,
              columnNumber: 29
            }, undefined), !puzzleSolved && filledin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "morphoKeyrow4",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                className: "trButton",
                onClick: () => {
                  checkSolution();
                },
                children: "SUBMIT YOUR SOLUTION"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 387,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 386,
              columnNumber: 59
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 349,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Change one letter at a time to get from ", firstWord, " to ", lastWord, ". Each interim word must be a valid word."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 392,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "COPY DOWN copies a letter down from the row above. COPY UP copies a letter up from the bottom row."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 394,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Click a letter on the bottom row to use it as the swap on the selected row."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 396,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 64
        }, undefined), puzzleSolved ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            className: "trEmphasis",
            children: "Success!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 400,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.MobileOnlyView, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "trButton",
              onClick: () => {
                setInitialBoard(nextNumCols);
              },
              children: ["GENERATE ", nextNumCols, " LETTER PUZZLE"]
            }, "genMobile", true, {
              fileName: _jsxFileName,
              lineNumber: 402,
              columnNumber: 33
            }, undefined), nextNumCols < 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "morphoPuzzleSizeKey",
              onClick: () => {
                setNextNumCols(nextNumCols + 1);
              },
              children: "+"
            }, "longerPuzzleMobile", false, {
              fileName: _jsxFileName,
              lineNumber: 407,
              columnNumber: 53
            }, undefined), nextNumCols > 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "morphoPuzzleSizeKey",
              onClick: () => {
                setNextNumCols(nextNumCols - 1);
              },
              children: "-"
            }, "shorterPuzzleMobile", false, {
              fileName: _jsxFileName,
              lineNumber: 410,
              columnNumber: 53
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 401,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.BrowserView, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "trButton",
              onClick: () => {
                setInitialBoard(nextNumCols);
              },
              children: ["GENERATE ", nextNumCols, " LETTER PUZZLE"]
            }, "genBrowser", true, {
              fileName: _jsxFileName,
              lineNumber: 415,
              columnNumber: 33
            }, undefined), nextNumCols < 7 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "morphoPuzzleSizeKey",
              onClick: () => {
                setNextNumCols(nextNumCols + 1);
              },
              children: "+"
            }, "longerPuzzle", false, {
              fileName: _jsxFileName,
              lineNumber: 420,
              columnNumber: 53
            }, undefined), nextNumCols > 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "morphoPuzzleSizeKey",
              onClick: () => {
                setNextNumCols(nextNumCols - 1);
              },
              children: "-"
            }, "shorterPuzzle", false, {
              fileName: _jsxFileName,
              lineNumber: 423,
              columnNumber: 53
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 414,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 399,
          columnNumber: 25
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton",
          onClick: () => {
            toggleShowSolution();
          },
          children: `${showSolution ? 'HIDE SOLUTION' : 'SHOW A SOLUTION'}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 429,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 17
      }, undefined)]
    }, "showboard", true, {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 26
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 320,
    columnNumber: 9
  }, undefined);
};

_s(Morpho, "J+Nf/3N/RIMuYNcI5VSelmbmMkw=");

_c = Morpho;
/* harmony default export */ __webpack_exports__["default"] = (Morpho);

var _c;

$RefreshReg$(_c, "Morpho");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9ycGhvL21vcnBoby5qcyJdLCJuYW1lcyI6WyJNb3JwaG8iLCJzZXRXaGVyZXRvIiwibnVtUm93cyIsInNldE51bVJvd3MiLCJ1c2VTdGF0ZSIsIm51bUNvbHMiLCJzZXROdW1Db2xzIiwibmV4dE51bUNvbHMiLCJzZXROZXh0TnVtQ29scyIsImJhc2V1cmwiLCJjc3NQcmVzZXRMZXR0ZXIiLCJjc3NOb0xldHRlciIsImNzc1NlbGVjdGVkQ2VsbCIsImNzc0xhcnZhIiwiY3NzQ29jb29uIiwiY3NzQnV0dGVyZmx5IiwibG9hZGluZyIsInNldExvYWRpbmciLCJjaGVja2luZyIsInNldENoZWNraW5nIiwiZmlsbGVkaW4iLCJzZXRGaWxsZWRpbiIsInNob3dTb2x1dGlvbiIsInNldFNob3dTb2x1dGlvbiIsInB1enpsZVNvbHZlZCIsInNldFB1enpsZVNvbHZlZCIsImZpcnN0V29yZCIsInNldEZpcnN0V29yZCIsImxhc3RXb3JkIiwic2V0TGFzdFdvcmQiLCJib2FyZCIsInNldEJvYXJkIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInJvdyIsImNvbCIsInVzZUVmZmVjdCIsInNldEluaXRpYWxCb2FyZCIsIndvcmRMZW5ndGgiLCJudW1iZXJPZlJvd3MiLCJudW1iZXJPZkNvbHMiLCJyb3dBcnJheSIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIm5vdGVzIiwibGVuZ3RoIiwicm93SW5kZXgiLCJyb3dXb3JkIiwicHV6emxlIiwidG9VcHBlckNhc2UiLCJyb3dMZXR0ZXJzIiwiQXJyYXkiLCJmcm9tIiwicm93RmlsbGVkSW4iLCJjb2xBcnJheSIsImNvbEluZGV4IiwiY2VsbCIsImxldHRlciIsInNvbHV0aW9uIiwiY2xhc3NOYW1lIiwicHVzaCIsImFsZXJ0IiwiaGFuZGxlU2VsZWN0aW9uIiwibmV3Qm9hcmQiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJjaSIsIm5ld1NlbGVjdGVkIiwiZmlsdGVyIiwiciIsImhhbmRsZUtleURvd24iLCJldmVudCIsImtleSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlSW5wdXRMZXR0ZXIiLCJjb3B5RG93bkxldHRlciIsImNvcHlVcExldHRlciIsImNoZWNrU29sdXRpb24iLCJsZXR0ZXJ0ZXN0IiwibW92ZURpcmVjdGlvbiIsIm1hdGNoIiwibW92ZVVwIiwibW92ZURvd24iLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsInRvZ2dsZVNob3dTb2x1dGlvbiIsInJlc3VsdCIsInByZXZXb3JkIiwiY3VycldvcmQiLCJjb3VudFN3YXBzIiwiaXNXb3JkVmFsaWQiLCJlIiwibWFwIiwiYm9hcmRSb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWtCO0FBQUE7O0FBQzdCLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsK0NBQVEsQ0FBQyxDQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCRiwrQ0FBUSxDQUFDLENBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NKLCtDQUFRLENBQUMsQ0FBRCxDQUE5QztBQUNBLFFBQU1LLE9BQU8sR0FBSSxLQUFELEdBQW9FLHVCQUFwRSxHQUE4RixDQUE5RztBQUNBLFFBQU1DLGVBQWUsR0FBRyxrQkFBeEI7QUFDQSxRQUFNQyxXQUFXLEdBQUcsb0JBQXBCO0FBQ0EsUUFBTUMsZUFBZSxHQUFHLHFCQUF4QjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxpQkFBakI7QUFDQSxRQUFNQyxTQUFTLEdBQUcsa0JBQWxCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHLHFCQUFyQjtBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3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QkErQlQ7QUFBUSxtQkFBUyxFQUFDLFVBQWxCO0FBQTZCLGlCQUFPLEVBQUUsTUFBTTtBQUFDa0YsOEJBQWtCO0FBQUksV0FBbkU7QUFBQSxvQkFDTSxHQUFFbkUsWUFBWSxHQUFHLGVBQUgsR0FBcUIsaUJBQWtCO0FBRDNEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbEZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuQlM7QUFBQSxPQUFTLFdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFzSEgsQ0FoYkQ7O0dBQU10QixNOztLQUFBQSxNO0FBa2JOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYzMGE2NGEzMWVmMWRmZjk4MDc1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCcm93c2VyVmlldywgTW9iaWxlT25seVZpZXcgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0JztcclxuaW1wb3J0IHsgY291bnRTd2FwcywgaXNXb3JkVmFsaWQgfSBmcm9tICcuLi8uLi9saWIvd29yZGZ1bmN0aW9ucyc7XHJcblxyXG5jb25zdCBNb3JwaG8gPSAoe3NldFdoZXJldG99KSA9PiB7XHJcbiAgICBjb25zdCBbbnVtUm93cywgc2V0TnVtUm93c10gPSB1c2VTdGF0ZSg2KTtcclxuICAgIGNvbnN0IFtudW1Db2xzLCBzZXROdW1Db2xzXSA9IHVzZVN0YXRlKDUpO1xyXG4gICAgY29uc3QgW25leHROdW1Db2xzLCBzZXROZXh0TnVtQ29sc10gPSB1c2VTdGF0ZSg1KTtcclxuICAgIGNvbnN0IGJhc2V1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tJztcclxuICAgIGNvbnN0IGNzc1ByZXNldExldHRlciA9IFwibW9ycGhvQ2VsbFN0YXRpY1wiO1xyXG4gICAgY29uc3QgY3NzTm9MZXR0ZXIgPSBcIm1vcnBob0NlbGxOb0xldHRlclwiO1xyXG4gICAgY29uc3QgY3NzU2VsZWN0ZWRDZWxsID0gXCIgbW9ycGhvQ2VsbFNlbGVjdGVkXCI7XHJcbiAgICBjb25zdCBjc3NMYXJ2YSA9IFwibW9ycGhvQ2VsbExhcnZhXCI7XHJcbiAgICBjb25zdCBjc3NDb2Nvb24gPSBcIm1vcnBob0NlbGxDb2Nvb25cIjtcclxuICAgIGNvbnN0IGNzc0J1dHRlcmZseSA9IFwibW9ycGhvQ2VsbEJ1dHRlcmZseVwiO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbY2hlY2tpbmcsIHNldENoZWNraW5nXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gU2V0IHdoZW4gY2hlY2tpbmcgc29sdXRpb24gdG8gcHJldmVudCBmdXJ0aGVyIGFsdGVyYXRpb25zXHJcbiAgICBjb25zdCBbZmlsbGVkaW4sIHNldEZpbGxlZGluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93U29sdXRpb24sIHNldFNob3dTb2x1dGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcHV6emxlU29sdmVkLCBzZXRQdXp6bGVTb2x2ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2ZpcnN0V29yZCwgc2V0Rmlyc3RXb3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtsYXN0V29yZCwgc2V0TGFzdFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2JvYXJkLCBzZXRCb2FyZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKHtyb3c6MSwgY29sOjB9KTsgLy8gTmF0dXJhbCBwbGFjZSB0byBzdGFydCBlbnRlcmluZyBsZXR0ZXJzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldEluaXRpYWxCb2FyZChuZXh0TnVtQ29scyk7XHJcbiAgICB9LFtdKTtcclxuICAgIGNvbnN0IHNldEluaXRpYWxCb2FyZCA9IGFzeW5jKHdvcmRMZW5ndGgpID0+IHsgLy8gSW5pdGlhbCBib2FyZCBvZiBnaXZlbiBzaXplXHJcbiAgICAgICAgbGV0IG51bWJlck9mUm93cyA9IHdvcmRMZW5ndGggKyAxO1xyXG4gICAgICAgIGxldCBudW1iZXJPZkNvbHMgPSB3b3JkTGVuZ3RoO1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgc2V0Q2hlY2tpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldFNob3dTb2x1dGlvbihmYWxzZSk7XHJcbiAgICAgICAgc2V0RmlsbGVkaW4oZmFsc2UpO1xyXG4gICAgICAgIHNldFB1enpsZVNvbHZlZChmYWxzZSk7XHJcbiAgICAgICAgc2V0TnVtQ29scyh3b3JkTGVuZ3RoKTtcclxuICAgICAgICBzZXROdW1Sb3dzKHdvcmRMZW5ndGgrMSk7XHJcbiAgICAgICAgbGV0IHJvd0FycmF5ID0gW107XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2Jhc2V1cmx9L0VOQUJMRTJLP21vcnBobz10cnVlJmxlbj0ke3dvcmRMZW5ndGh9YDtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBpZiAoIWRhdGEubm90ZXMgfHwgZGF0YS5ub3Rlcy5sZW5ndGggPT09IDApIHsgLy8gT2sgcmVzdWx0XHJcbiAgICAgICAgICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBudW1iZXJPZlJvd3M7IHJvd0luZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd1dvcmQgPSBkYXRhLnB1enpsZVtyb3dJbmRleF0udG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIGlmIChyb3dJbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZpcnN0V29yZChyb3dXb3JkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocm93SW5kZXggPT09IG51bWJlck9mUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMYXN0V29yZChyb3dXb3JkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd0xldHRlcnMgPSBbLi4uQXJyYXkuZnJvbShyb3dXb3JkKV07XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93RmlsbGVkSW4gPSByb3dJbmRleCA9PT0gMCB8fCByb3dJbmRleCA9PT0gbnVtYmVyT2ZSb3dzIC0gMTtcclxuICAgICAgICAgICAgICAgIGxldCBjb2xBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IG51bWJlck9mQ29sczsgY29sSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsID0ge2xldHRlcjonPycsc29sdXRpb246cm93TGV0dGVyc1tjb2xJbmRleF0sY2xhc3NOYW1lOic/J307XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvd0luZGV4ID09PSAwIHx8IHJvd0luZGV4ID09PSBudW1iZXJPZlJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwubGV0dGVyID0gcm93TGV0dGVyc1tjb2xJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gY3NzUHJlc2V0TGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwubGV0dGVyID0gJz8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9IGNzc05vTGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb2xBcnJheS5wdXNoKGNlbGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcm93QXJyYXkucHVzaCh7ZmlsbGVkaW46cm93RmlsbGVkSW4sIGNvbEFycmF5OmNvbEFycmF5fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0Qm9hcmQocm93QXJyYXkpO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZCh7cm93OjEsY29sOjB9KTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoYFByb2JsZW0gZ2VuZXJhdGluZyBwdXp6bGU6ICR7ZGF0YS5ub3Rlc31cXG5CZXN0IHRvIGNsaWNrIEhvbWUgdGhlbiByZWNob29zZSBNb3JwaG8uYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdGlvbiA9IChyb3dJbmRleCwgY29sSW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoY2hlY2tpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBObyBtb2RlcyB3aGlsZSBjaGVja2luZyBzb2x1dGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHV6emxlU29sdmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gUHV6emxlIGFscmVhZHkgc29sdmVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2xJbmRleCA8IDAgfHwgY29sSW5kZXggPj0gbnVtQ29scykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyb3dJbmRleCA9PT0gbnVtUm93cyAtIDEgJiYgc2VsZWN0ZWQucm93ID4gMCAmJiBzZWxlY3RlZC5yb3cgPCBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICAvLyBJZiB0aGV5IGNsaWNrIG9uIGEgYm90dG9tIHJvdyB0aWxlIHRoZW4gY29weSBpdCB1cCBhbmQgY29weSBkb3duIHRoZSByZXN0IG9mIHRoZSByb3dcclxuICAgICAgICAgICAgbGV0IG5ld0JvYXJkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShib2FyZCkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjaSA9IDA7IGNpIDwgbnVtQ29sczsgY2krKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNpID09PSBjb2xJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgdGhlIGNvbHVtbiB0aGV5IGNsaWNrZWQgb25cclxuICAgICAgICAgICAgICAgICAgICBuZXdCb2FyZFtzZWxlY3RlZC5yb3ddLmNvbEFycmF5W2NpXS5sZXR0ZXIgPSBuZXdCb2FyZFtudW1Sb3dzLTFdLmNvbEFycmF5W2NpXS5sZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0JvYXJkW3NlbGVjdGVkLnJvd10uY29sQXJyYXlbY2ldLmxldHRlciA9IG5ld0JvYXJkW3NlbGVjdGVkLnJvdyAtIDFdLmNvbEFycmF5W2NpXS5sZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuZXdCb2FyZFtzZWxlY3RlZC5yb3ddLmNvbEFycmF5W2NpXS5jbGFzc05hbWUgPSBjc3NDb2Nvb247ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV3Qm9hcmRbc2VsZWN0ZWQucm93XS5maWxsZWRpbiA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6c2VsZWN0ZWQucm93KzEsY29sOjB9O1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIHNldEJvYXJkKG5ld0JvYXJkKTtcclxuICAgICAgICAgICAgaWYgKG5ld0JvYXJkLmZpbHRlcihyID0+IHtyZXR1cm4gIXIuZmlsbGVkaW47fSkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBbGwgbGV0dGVycyBhcmUgZmlsbGVkIGluXHJcbiAgICAgICAgICAgICAgICBzZXRGaWxsZWRpbih0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocm93SW5kZXggPCAxIHx8IHJvd0luZGV4ID49IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQoe3Jvdzpyb3dJbmRleCxjb2w6Y29sSW5kZXh9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJGMTJcIikge3JldHVybjt9XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoY2hlY2tpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBObyBtb2RlcyB3aGlsZSBjaGVja2luZyBzb2x1dGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHV6emxlU29sdmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gUHV6emxlIGFscmVhZHkgc29sdmVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhhbmRsZUlucHV0TGV0dGVyKGV2ZW50LmtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29weURvd25MZXR0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNoZWNraW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gTm8gbW9kZXMgd2hpbGUgY2hlY2tpbmcgc29sdXRpb25cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHB1enpsZVNvbHZlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIFB1enpsZSBhbHJlYWR5IHNvbHZlZFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGlmIChyb3dJbmRleCA8IDEgfHwgcm93SW5kZXggPj0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sSW5kZXggPCAwIHx8IHJvd0luZGV4ID49IG51bUNvbHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoYW5kbGVJbnB1dExldHRlcihib2FyZFtyb3dJbmRleC0xXS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgY29weVVwTGV0dGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChjaGVja2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIE5vIG1vZGVzIHdoaWxlIGNoZWNraW5nIHNvbHV0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwdXp6bGVTb2x2ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBQdXp6bGUgYWxyZWFkeSBzb2x2ZWRcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gc2VsZWN0ZWQucm93O1xyXG4gICAgICAgIGxldCBjb2xJbmRleCA9IHNlbGVjdGVkLmNvbDtcclxuICAgICAgICBpZiAocm93SW5kZXggPCAxIHx8IHJvd0luZGV4ID49IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbEluZGV4IDwgMCB8fCByb3dJbmRleCA+PSBudW1Db2xzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGFuZGxlSW5wdXRMZXR0ZXIoYm9hcmRbbnVtUm93cy0xXS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRMZXR0ZXIgPSAobGV0dGVyKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gc2VsZWN0ZWQucm93O1xyXG4gICAgICAgIGxldCBjb2xJbmRleCA9IHNlbGVjdGVkLmNvbDtcclxuICAgICAgICBpZiAocm93SW5kZXggPCAxIHx8IHJvd0luZGV4ID49IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbEluZGV4IDwgMCB8fCByb3dJbmRleCA+PSBudW1Db2xzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpbGxlZGluICYmIGxldHRlciA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIGNoZWNrU29sdXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbGV0dGVydGVzdCA9IC9eW0EtWmEtelxcP10kLzsgLy8gc2luZ2xlIGxldHRlciBvciBxdWVzdGlvbiBtYXJrIGtleSBwcmVzc2VkXHJcbiAgICAgICAgbGV0IG1vdmVEaXJlY3Rpb24gPSBcInJcIjsgLy8gRGVmYXVsdFxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiQmFja3NwYWNlXCIpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gXCI/XCI7XHJcbiAgICAgICAgICAgIG1vdmVEaXJlY3Rpb24gPSBcImxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJEZWxldGVcIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBcIj9cIjtcclxuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiQXJyb3dVcFwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IGJvYXJkW3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICBtb3ZlRGlyZWN0aW9uID0gXCJ1XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiQXJyb3dEb3duXCIpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gYm9hcmRbcm93SW5kZXhdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXI7XHJcbiAgICAgICAgICAgIG1vdmVEaXJlY3Rpb24gPSBcImRcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJBcnJvd0xlZnRcIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBib2FyZFtyb3dJbmRleF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA9IFwibFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIkFycm93UmlnaHRcIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBib2FyZFtyb3dJbmRleF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA9IFwiclwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyLm1hdGNoKGxldHRlcnRlc3QpKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IGxldHRlci50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByb3dBcnJheSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYm9hcmQpKTtcclxuICAgICAgICByb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlciA9IGxldHRlcjtcclxuICAgICAgICByb3dBcnJheVtyb3dJbmRleF0uZmlsbGVkaW4gPSAocm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5LmZpbHRlcigoY2VsbCkgPT4ge3JldHVybiBjZWxsLmxldHRlciA9PT0gXCI/XCI7fSkubGVuZ3RoID09PSAwKTtcclxuICAgICAgICBmb3IgKGxldCBjaSA9IDA7IGNpIDwgbnVtQ29sczsgY2krKykge1xyXG4gICAgICAgICAgICBpZiAocm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5W2NpXS5sZXR0ZXIgPT09IFwiP1wiKSB7XHJcbiAgICAgICAgICAgICAgICByb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXlbY2ldLmNsYXNzTmFtZSA9IGNzc05vTGV0dGVyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5W2NpXS5jbGFzc05hbWUgPSByb3dBcnJheVtyb3dJbmRleF0uZmlsbGVkaW4gPyBjc3NDb2Nvb24gOiBjc3NMYXJ2YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobW92ZURpcmVjdGlvbiA9PT0gXCJ1XCIpIHtcclxuICAgICAgICAgICAgbW92ZVVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb3ZlRGlyZWN0aW9uID09PSBcImRcIikge1xyXG4gICAgICAgICAgICBtb3ZlRG93bigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobW92ZURpcmVjdGlvbiA9PT0gXCJyXCIpIHtcclxuICAgICAgICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb3ZlRGlyZWN0aW9uID09PSBcImxcIikge1xyXG4gICAgICAgICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocm93QXJyYXkuZmlsdGVyKHIgPT4ge3JldHVybiAhci5maWxsZWRpbjt9KS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgLy8gQWxsIGxldHRlcnMgYXJlIGZpbGxlZCBpblxyXG4gICAgICAgICAgICBzZXRGaWxsZWRpbih0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Qm9hcmQocm93QXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vdmVVcCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6cm93SW5kZXgsY29sOmNvbEluZGV4fTtcclxuICAgICAgICBpZiAocm93SW5kZXggLSAxID4gMCkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleCAtIDE7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IGNvbEluZGV4O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IG51bVJvd3MgLSAyO1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleCAtIDEgPiAtMSA/IGNvbEluZGV4IC0gMSA6IG51bUNvbHMgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW92ZURvd24gPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gc2VsZWN0ZWQucm93O1xyXG4gICAgICAgIGxldCBjb2xJbmRleCA9IHNlbGVjdGVkLmNvbDtcclxuICAgICAgICBsZXQgbmV3U2VsZWN0ZWQgPSB7cm93OnJvd0luZGV4LGNvbDpjb2xJbmRleH07XHJcbiAgICAgICAgaWYgKHJvd0luZGV4ICsgMSA8IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4ICsgMTtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gMTtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXggKyAxIDwgbnVtQ29scyA/IGNvbEluZGV4ICsgMSA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGVkKG5ld1NlbGVjdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb3ZlUmlnaHQgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gc2VsZWN0ZWQucm93O1xyXG4gICAgICAgIGxldCBjb2xJbmRleCA9IHNlbGVjdGVkLmNvbDtcclxuICAgICAgICBsZXQgbmV3U2VsZWN0ZWQgPSB7cm93OjEsY29sOjB9O1xyXG4gICAgICAgIGlmIChjb2xJbmRleCArIDEgPCBudW1Db2xzKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4O1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleCArIDE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyb3dJbmRleCArIDEgPCBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleCArIDE7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGVkKG5ld1NlbGVjdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb3ZlTGVmdCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6bnVtUm93cy0yLGNvbDpudW1Db2xzLTF9O1xyXG4gICAgICAgIGlmIChjb2xJbmRleCAtIDEgPiAtMSkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleDtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXggLSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocm93SW5kZXggLSAxID4gMCkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleCAtIDE7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IG51bUNvbHMgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlU2hvd1NvbHV0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dTb2x1dGlvbighc2hvd1NvbHV0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVja1NvbHV0aW9uID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgc2V0Q2hlY2tpbmcodHJ1ZSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgZm9yKGxldCByb3dJbmRleCA9IDE7IHJlc3VsdCAmJiByb3dJbmRleCA8IG51bVJvd3M7IHJvd0luZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IHByZXZXb3JkID0gXCJcIjtcclxuICAgICAgICAgICAgbGV0IGN1cnJXb3JkID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IG51bUNvbHM7IGNvbEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIHByZXZXb3JkID0gcHJldldvcmQgKyBib2FyZFtyb3dJbmRleC0xXS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgY3VycldvcmQgPSBjdXJyV29yZCArIGJvYXJkW3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb3VudFN3YXBzKHByZXZXb3JkLCBjdXJyV29yZCkgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGAke3ByZXZXb3JkfSB0byAke2N1cnJXb3JkfSBpcyBub3QgYSB2YWxpZCBtb3ZlYCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJvd0luZGV4ICE9PSBudW1Sb3dzIC0xICYmICEgYXdhaXQgaXNXb3JkVmFsaWQoY3VycldvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChgJHtjdXJyV29yZH0gaXMgbm90IHZhbGlkYCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDaGVja2luZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0UHV6emxlU29sdmVkKHJlc3VsdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIE1vcnBob1xyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7bG9hZGluZyAmJiA8ZGl2IGtleT1cInBsZWFzZXdhaXRcIiBjbGFzc05hbWU9XCJ0ckVtcGhhc2lzXCI+Q3JlYXRpbmcgcHV6emxlLCBwbGVhc2UgYmUgcGF0aWVudC4uLjwvZGl2Pn1cclxuICAgICAgICAgICAgeyFsb2FkaW5nICYmIDxkaXYga2V5PVwic2hvd2JvYXJkXCIgY2xhc3NOYW1lPXtwdXp6bGVTb2x2ZWQgPyBgbW9ycGhvU29sdmVkRGl2IGwke251bUNvbHN9YCA6IFwibW9ycGhvRGl2XCJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSAgb25LZXlEb3duPXsoZSkgPT4ge2hhbmRsZUtleURvd24oZSk7fX0gdGFiSW5kZXg9ey0xfT48dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7Ym9hcmQubWFwKChib2FyZFJvdywgcm93SW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgQm9hcmRSb3cuJHtyb3dJbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JvYXJkUm93LmNvbEFycmF5Lm1hcCgoY2VsbCwgY29sSW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2BCb2FyZENlbGwuJHtyb3dJbmRleH0uJHtjb2xJbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge2hhbmRsZVNlbGVjdGlvbihyb3dJbmRleCxjb2xJbmRleCk7fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbCBtb3JwaG9DZWxsICR7c2hvd1NvbHV0aW9uID8gY3NzUHJlc2V0TGV0dGVyIDogcHV6emxlU29sdmVkID8gY3NzQnV0dGVyZmx5IDogY2VsbC5jbGFzc05hbWUgKyAocm93SW5kZXggPT09IHNlbGVjdGVkLnJvdyAmJiBjb2xJbmRleCA9PT0gc2VsZWN0ZWQuY29sID8gY3NzU2VsZWN0ZWRDZWxsIDogXCJcIil9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dTb2x1dGlvbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YEJvYXJkQ2VsbFMuJHtyb3dJbmRleH0uJHtjb2xJbmRleH1gfT57Y2VsbC5zb2x1dGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2BCb2FyZENlbGxMLiR7cm93SW5kZXh9LiR7Y29sSW5kZXh9YH0+e2NlbGwubGV0dGVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PjwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeyFsb2FkaW5nICYmICFjaGVja2luZyAmJiAhcHV6emxlU29sdmVkICYmIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9ycGhvS2V5Ym9hcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm1vcnBob0tleXJvdzFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVFcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1EnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5RPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlXXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdXJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+VzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5RVwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignRScpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPkU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVJcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1InKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5SPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlUXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdUJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+VDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5WVwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignWScpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVVcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1UnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5VPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlJXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdJJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+STwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5T1wiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignTycpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPk88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVBcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1AnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5QPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9ycGhvS2V5cm93MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5QVwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignQScpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPkE8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVNcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1MnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5TPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlEXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdEJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+RDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5RlwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignRicpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPkY8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUdcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0cnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5HPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlIXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdIJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+SDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5SlwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignSicpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPko8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUtcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0snKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5LPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlMXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdMJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+TDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vcnBob0tleXJvdzNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVpcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1onKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5aPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlYXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdYJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+WDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5Q1wiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignQycpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPkM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVZcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1YnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5WPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlCXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdCJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+QjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5TlwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignTicpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPk48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleU1cIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ00nKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5NPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vcnBob0tleXJvdzRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUNvcHlkb3duXCIgb25DbGljaz17KCkgPT4ge2NvcHlEb3duTGV0dGVyKCk7fX0gY2xhc3NOYW1lPVwibW9ycGhvQ29weWRvd25LZXlcIj5DT1BZIERPV048L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUNvcHl1cFwiIG9uQ2xpY2s9eygpID0+IHtjb3B5VXBMZXR0ZXIoKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9Db3B5dXBLZXlcIj5DT1BZIFVQPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshcHV6emxlU29sdmVkICYmIGZpbGxlZGluICYmIDxkaXYgY2xhc3NOYW1lPVwibW9ycGhvS2V5cm93NFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7Y2hlY2tTb2x1dGlvbigpO319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTVUJNSVQgWU9VUiBTT0xVVElPTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2hhbmdlIG9uZSBsZXR0ZXIgYXQgYSB0aW1lIHRvIGdldCBmcm9tIHtmaXJzdFdvcmR9IHRvIHtsYXN0V29yZH0uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVhY2ggaW50ZXJpbSB3b3JkIG11c3QgYmUgYSB2YWxpZCB3b3JkLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q09QWSBET1dOIGNvcGllcyBhIGxldHRlciBkb3duIGZyb20gdGhlIHJvdyBhYm92ZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ09QWSBVUCBjb3BpZXMgYSBsZXR0ZXIgdXAgZnJvbSB0aGUgYm90dG9tIHJvdy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNsaWNrIGEgbGV0dGVyIG9uIHRoZSBib3R0b20gcm93IHRvIHVzZSBpdCBhcyB0aGUgc3dhcCBvbiB0aGUgc2VsZWN0ZWQgcm93LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAge3B1enpsZVNvbHZlZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidHJFbXBoYXNpc1wiPlN1Y2Nlc3MhPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2JpbGVPbmx5Vmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImdlbk1vYmlsZVwiIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbml0aWFsQm9hcmQobmV4dE51bUNvbHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHRU5FUkFURSB7bmV4dE51bUNvbHN9IExFVFRFUiBQVVpaTEVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV4dE51bUNvbHMgPCA1ICYmIDxidXR0b24ga2V5PVwibG9uZ2VyUHV6emxlTW9iaWxlXCIgY2xhc3NOYW1lPVwibW9ycGhvUHV6emxlU2l6ZUtleVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmV4dE51bUNvbHMobmV4dE51bUNvbHMrMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+KzwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV4dE51bUNvbHMgPiAzICYmIDxidXR0b24ga2V5PVwic2hvcnRlclB1enpsZU1vYmlsZVwiIGNsYXNzTmFtZT1cIm1vcnBob1B1enpsZVNpemVLZXlcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5leHROdW1Db2xzKG5leHROdW1Db2xzLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Pi08L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01vYmlsZU9ubHlWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJyb3dzZXJWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwiZ2VuQnJvd3NlclwiIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbml0aWFsQm9hcmQobmV4dE51bUNvbHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR0VORVJBVEUge25leHROdW1Db2xzfSBMRVRURVIgUFVaWkxFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25leHROdW1Db2xzIDwgNyAmJiA8YnV0dG9uIGtleT1cImxvbmdlclB1enpsZVwiIGNsYXNzTmFtZT1cIm1vcnBob1B1enpsZVNpemVLZXlcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5leHROdW1Db2xzKG5leHROdW1Db2xzKzEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Pis8L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25leHROdW1Db2xzID4gMyAmJiA8YnV0dG9uIGtleT1cInNob3J0ZXJQdXp6bGVcIiBjbGFzc05hbWU9XCJtb3JwaG9QdXp6bGVTaXplS2V5XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROZXh0TnVtQ29scyhuZXh0TnVtQ29scy0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT4tPC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ccm93c2VyVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3RvZ2dsZVNob3dTb2x1dGlvbigpO319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake3Nob3dTb2x1dGlvbiA/ICdISURFIFNPTFVUSU9OJyA6ICdTSE9XIEEgU09MVVRJT04nfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vcnBobzsiXSwic291cmNlUm9vdCI6IiJ9