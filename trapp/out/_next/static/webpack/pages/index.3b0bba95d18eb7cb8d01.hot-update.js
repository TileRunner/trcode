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
    0: starting,
    1: setStarting
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
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

  const setInitialBoard = async wordLength => {
    // Initial board of given size
    let numberOfRows = wordLength + 1;
    let numberOfCols = wordLength;
    setStarting(false);
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

  const promptForPuzzleGeneration = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.MobileOnlyView, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          setInitialBoard(nextNumCols);
        },
        children: ["GENERATE ", nextNumCols, " LETTER PUZZLE"]
      }, "genMobile", true, {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 13
      }, undefined), nextNumCols < 5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "morphoPuzzleSizeKey",
        onClick: () => {
          setNextNumCols(nextNumCols + 1);
        },
        children: "+"
      }, "longerPuzzleMobile", false, {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 33
      }, undefined), nextNumCols > 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "morphoPuzzleSizeKey",
        onClick: () => {
          setNextNumCols(nextNumCols - 1);
        },
        children: "-"
      }, "shorterPuzzleMobile", false, {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 33
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_2__.BrowserView, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          setInitialBoard(nextNumCols);
        },
        children: ["GENERATE ", nextNumCols, " LETTER PUZZLE"]
      }, "genBrowser", true, {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 13
      }, undefined), nextNumCols < 7 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "morphoPuzzleSizeKey",
        onClick: () => {
          setNextNumCols(nextNumCols + 1);
        },
        children: "+"
      }, "longerPuzzle", false, {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 33
      }, undefined), nextNumCols > 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "morphoPuzzleSizeKey",
        onClick: () => {
          setNextNumCols(nextNumCols - 1);
        },
        children: "-"
      }, "shorterPuzzle", false, {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 33
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 318,
    columnNumber: 39
  }, undefined);

  const renderThePuzzle = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
              lineNumber: 356,
              columnNumber: 33
            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: cell.letter
            }, `BoardCellL.${rowIndex}.${colIndex}`, false, {
              fileName: _jsxFileName,
              lineNumber: 358,
              columnNumber: 33
            }, undefined)
          }, `BoardCell.${rowIndex}.${colIndex}`, false, {
            fileName: _jsxFileName,
            lineNumber: 352,
            columnNumber: 25
          }, undefined))
        }, `BoardRow.${rowIndex}`, false, {
          fileName: _jsxFileName,
          lineNumber: 350,
          columnNumber: 17
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 72
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 9
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
              lineNumber: 400,
              columnNumber: 25
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                copyUpLetter();
              },
              className: "morphoCopyupKey",
              children: "COPY UP"
            }, "keyCopyup", false, {
              fileName: _jsxFileName,
              lineNumber: 401,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 399,
            columnNumber: 21
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
              lineNumber: 404,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 403,
            columnNumber: 51
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 366,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Change one letter at a time to get from ", firstWord, " to ", lastWord, ". Each interim word must be a valid word."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "COPY DOWN copies a letter down from the row above. COPY UP copies a letter up from the bottom row."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Click a letter on the bottom row to use it as the swap on the selected row."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 413,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 56
      }, undefined), puzzleSolved ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "trEmphasis",
          children: "Success!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 417,
          columnNumber: 21
        }, undefined), promptForPuzzleGeneration]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 17
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          toggleShowSolution();
        },
        children: `${showSolution ? 'HIDE SOLUTION' : 'SHOW A SOLUTION'}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 9
    }, undefined)]
  }, "showboard", true, {
    fileName: _jsxFileName,
    lineNumber: 347,
    columnNumber: 29
  }, undefined);

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
          lineNumber: 432,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 431,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 13
    }, undefined), starting ? promptForPuzzleGeneration : loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trEmphasis",
      children: "Creating puzzle, please be patient..."
    }, "pleasewait", false, {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 17
    }, undefined) : renderThePuzzle]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 428,
    columnNumber: 9
  }, undefined);
};

_s(Morpho, "q0iOQhHu7IuqBIn9jbwsM6P+eMs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9ycGhvL21vcnBoby5qcyJdLCJuYW1lcyI6WyJNb3JwaG8iLCJzZXRXaGVyZXRvIiwic3RhcnRpbmciLCJzZXRTdGFydGluZyIsInVzZVN0YXRlIiwibnVtUm93cyIsInNldE51bVJvd3MiLCJudW1Db2xzIiwic2V0TnVtQ29scyIsIm5leHROdW1Db2xzIiwic2V0TmV4dE51bUNvbHMiLCJiYXNldXJsIiwiY3NzUHJlc2V0TGV0dGVyIiwiY3NzTm9MZXR0ZXIiLCJjc3NTZWxlY3RlZENlbGwiLCJjc3NMYXJ2YSIsImNzc0NvY29vbiIsImNzc0J1dHRlcmZseSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY2hlY2tpbmciLCJzZXRDaGVja2luZyIsImZpbGxlZGluIiwic2V0RmlsbGVkaW4iLCJzaG93U29sdXRpb24iLCJzZXRTaG93U29sdXRpb24iLCJwdXp6bGVTb2x2ZWQiLCJzZXRQdXp6bGVTb2x2ZWQiLCJmaXJzdFdvcmQiLCJzZXRGaXJzdFdvcmQiLCJsYXN0V29yZCIsInNldExhc3RXb3JkIiwiYm9hcmQiLCJzZXRCb2FyZCIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJyb3ciLCJjb2wiLCJzZXRJbml0aWFsQm9hcmQiLCJ3b3JkTGVuZ3RoIiwibnVtYmVyT2ZSb3dzIiwibnVtYmVyT2ZDb2xzIiwicm93QXJyYXkiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJub3RlcyIsImxlbmd0aCIsInJvd0luZGV4Iiwicm93V29yZCIsInB1enpsZSIsInRvVXBwZXJDYXNlIiwicm93TGV0dGVycyIsIkFycmF5IiwiZnJvbSIsInJvd0ZpbGxlZEluIiwiY29sQXJyYXkiLCJjb2xJbmRleCIsImNlbGwiLCJsZXR0ZXIiLCJzb2x1dGlvbiIsImNsYXNzTmFtZSIsInB1c2giLCJhbGVydCIsImhhbmRsZVNlbGVjdGlvbiIsIm5ld0JvYXJkIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiY2kiLCJuZXdTZWxlY3RlZCIsImZpbHRlciIsInIiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUlucHV0TGV0dGVyIiwiY29weURvd25MZXR0ZXIiLCJjb3B5VXBMZXR0ZXIiLCJjaGVja1NvbHV0aW9uIiwibGV0dGVydGVzdCIsIm1vdmVEaXJlY3Rpb24iLCJtYXRjaCIsIm1vdmVVcCIsIm1vdmVEb3duIiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJ0b2dnbGVTaG93U29sdXRpb24iLCJyZXN1bHQiLCJwcmV2V29yZCIsImN1cnJXb3JkIiwiY291bnRTd2FwcyIsImlzV29yZFZhbGlkIiwicHJvbXB0Rm9yUHV6emxlR2VuZXJhdGlvbiIsInJlbmRlclRoZVB1enpsZSIsImUiLCJtYXAiLCJib2FyZFJvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBa0I7QUFBQTs7QUFDN0IsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQywrQ0FBUSxDQUFDLElBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLCtDQUFRLENBQUMsQ0FBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDRyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkosK0NBQVEsQ0FBQyxDQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDTiwrQ0FBUSxDQUFDLENBQUQsQ0FBOUM7QUFDQSxRQUFNTyxPQUFPLEdBQUksS0FBRCxHQUFvRSx1QkFBcEUsR0FBOEYsQ0FBOUc7QUFDQSxRQUFNQyxlQUFlLEdBQUcsa0JBQXhCO0FBQ0EsUUFBTUMsV0FBVyxHQUFHLG9CQUFwQjtBQUNBLFFBQU1DLGVBQWUsR0FBRyxxQkFBeEI7QUFDQSxRQUFNQyxRQUFRLEdBQUcsaUJBQWpCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHLGtCQUFsQjtBQUNBLFFBQU1DLFlBQVksR0FBRyxxQkFBckI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JmLCtDQUFRLENBQUMsSUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDZ0IsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJqQiwrQ0FBUSxDQUFDLEtBQUQsQ0FBeEMsQ0FiNkIsQ0Fhb0I7O0FBQ2pELFFBQU07QUFBQSxPQUFDa0IsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJuQiwrQ0FBUSxDQUFDLEtBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ29CLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDckIsK0NBQVEsQ0FBQyxLQUFELENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNzQixZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ3ZCLCtDQUFRLENBQUMsS0FBRCxDQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDd0IsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJ6QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQzBCLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCM0IsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUM0QixLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQjdCLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDOEIsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEIvQiwrQ0FBUSxDQUFDO0FBQUNnQyxPQUFHLEVBQUMsQ0FBTDtBQUFRQyxPQUFHLEVBQUM7QUFBWixHQUFELENBQXhDLENBcEI2QixDQW9CNkI7O0FBQzFELFFBQU1DLGVBQWUsR0FBRyxNQUFNQyxVQUFOLElBQXFCO0FBQUU7QUFDM0MsUUFBSUMsWUFBWSxHQUFHRCxVQUFVLEdBQUcsQ0FBaEM7QUFDQSxRQUFJRSxZQUFZLEdBQUdGLFVBQW5CO0FBQ0FwQyxlQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FnQixjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FFLGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUksbUJBQWUsQ0FBQyxLQUFELENBQWY7QUFDQUYsZUFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBSSxtQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNBbkIsY0FBVSxDQUFDK0IsVUFBRCxDQUFWO0FBQ0FqQyxjQUFVLENBQUNpQyxVQUFVLEdBQUMsQ0FBWixDQUFWO0FBQ0EsUUFBSUcsUUFBUSxHQUFHLEVBQWY7QUFDQSxRQUFJQyxHQUFHLEdBQUksR0FBRWhDLE9BQVEsNkJBQTRCNEIsVUFBVyxFQUE1RDtBQUNBLFVBQU1LLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUQsQ0FBNUI7QUFDQSxVQUFNRyxJQUFJLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFULEVBQW5COztBQUNBLFFBQUksQ0FBQ0QsSUFBSSxDQUFDRSxLQUFOLElBQWVGLElBQUksQ0FBQ0UsS0FBTCxDQUFXQyxNQUFYLEtBQXNCLENBQXpDLEVBQTRDO0FBQUU7QUFDMUMsV0FBSyxJQUFJQyxRQUFRLEdBQUcsQ0FBcEIsRUFBdUJBLFFBQVEsR0FBR1YsWUFBbEMsRUFBZ0RVLFFBQVEsRUFBeEQsRUFBNEQ7QUFDeEQsY0FBTUMsT0FBTyxHQUFHTCxJQUFJLENBQUNNLE1BQUwsQ0FBWUYsUUFBWixFQUFzQkcsV0FBdEIsRUFBaEI7O0FBQ0EsWUFBSUgsUUFBUSxLQUFLLENBQWpCLEVBQW9CO0FBQ2hCckIsc0JBQVksQ0FBQ3NCLE9BQUQsQ0FBWjtBQUNILFNBRkQsTUFFTyxJQUFJRCxRQUFRLEtBQUtWLFlBQVksR0FBRyxDQUFoQyxFQUFtQztBQUN0Q1QscUJBQVcsQ0FBQ29CLE9BQUQsQ0FBWDtBQUNIOztBQUNELGNBQU1HLFVBQVUsR0FBRyxDQUFDLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXTCxPQUFYLENBQUosQ0FBbkI7QUFDQSxZQUFJTSxXQUFXLEdBQUdQLFFBQVEsS0FBSyxDQUFiLElBQWtCQSxRQUFRLEtBQUtWLFlBQVksR0FBRyxDQUFoRTtBQUNBLFlBQUlrQixRQUFRLEdBQUcsRUFBZjs7QUFDQSxhQUFLLElBQUlDLFFBQVEsR0FBRyxDQUFwQixFQUF1QkEsUUFBUSxHQUFHbEIsWUFBbEMsRUFBZ0RrQixRQUFRLEVBQXhELEVBQTREO0FBQ3hELGNBQUlDLElBQUksR0FBRztBQUFDQyxrQkFBTSxFQUFDLEdBQVI7QUFBWUMsb0JBQVEsRUFBQ1IsVUFBVSxDQUFDSyxRQUFELENBQS9CO0FBQTBDSSxxQkFBUyxFQUFDO0FBQXBELFdBQVg7O0FBQ0EsY0FBSWIsUUFBUSxLQUFLLENBQWIsSUFBa0JBLFFBQVEsS0FBS1YsWUFBWSxHQUFHLENBQWxELEVBQXFEO0FBQ2pEb0IsZ0JBQUksQ0FBQ0MsTUFBTCxHQUFjUCxVQUFVLENBQUNLLFFBQUQsQ0FBeEI7QUFDQUMsZ0JBQUksQ0FBQ0csU0FBTCxHQUFpQm5ELGVBQWpCO0FBQ0gsV0FIRCxNQUdPO0FBQ0hnRCxnQkFBSSxDQUFDQyxNQUFMLEdBQWMsR0FBZDtBQUNBRCxnQkFBSSxDQUFDRyxTQUFMLEdBQWlCbEQsV0FBakI7QUFDSDs7QUFDRDZDLGtCQUFRLENBQUNNLElBQVQsQ0FBY0osSUFBZDtBQUNIOztBQUNEbEIsZ0JBQVEsQ0FBQ3NCLElBQVQsQ0FBYztBQUFDMUMsa0JBQVEsRUFBQ21DLFdBQVY7QUFBdUJDLGtCQUFRLEVBQUNBO0FBQWhDLFNBQWQ7QUFDSDs7QUFDRHpCLGNBQVEsQ0FBQ1MsUUFBRCxDQUFSO0FBQ0FQLGlCQUFXLENBQUM7QUFBQ0MsV0FBRyxFQUFDLENBQUw7QUFBT0MsV0FBRyxFQUFDO0FBQVgsT0FBRCxDQUFYO0FBQ0FsQixnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNILEtBM0JELE1BMkJPO0FBQ0g4QyxXQUFLLENBQUUsOEJBQTZCbkIsSUFBSSxDQUFDRSxLQUFNLDRDQUExQyxDQUFMO0FBQ0g7QUFDSixHQTdDRDs7QUErQ0EsUUFBTWtCLGVBQWUsR0FBRyxDQUFDaEIsUUFBRCxFQUFXUyxRQUFYLEtBQXdCO0FBQzVDLFFBQUl2QyxRQUFKLEVBQWM7QUFDVixhQURVLENBQ0Y7QUFDWDs7QUFDRCxRQUFJTSxZQUFKLEVBQWtCO0FBQ2QsYUFEYyxDQUNOO0FBQ1g7O0FBQ0QsUUFBSWlDLFFBQVEsR0FBRyxDQUFYLElBQWdCQSxRQUFRLElBQUlwRCxPQUFoQyxFQUF5QztBQUNyQztBQUNIOztBQUNELFFBQUkyQyxRQUFRLEtBQUs3QyxPQUFPLEdBQUcsQ0FBdkIsSUFBNEI2QixRQUFRLENBQUNFLEdBQVQsR0FBZSxDQUEzQyxJQUFnREYsUUFBUSxDQUFDRSxHQUFULEdBQWUvQixPQUFPLEdBQUcsQ0FBN0UsRUFBZ0Y7QUFDNUU7QUFDQSxVQUFJOEQsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxTQUFMLENBQWV0QyxLQUFmLENBQVgsQ0FBZjs7QUFDQSxXQUFLLElBQUl1QyxFQUFFLEdBQUcsQ0FBZCxFQUFpQkEsRUFBRSxHQUFHaEUsT0FBdEIsRUFBK0JnRSxFQUFFLEVBQWpDLEVBQXFDO0FBQ2pDLFlBQUlBLEVBQUUsS0FBS1osUUFBWCxFQUFxQjtBQUNqQjtBQUNBUSxrQkFBUSxDQUFDakMsUUFBUSxDQUFDRSxHQUFWLENBQVIsQ0FBdUJzQixRQUF2QixDQUFnQ2EsRUFBaEMsRUFBb0NWLE1BQXBDLEdBQTZDTSxRQUFRLENBQUM5RCxPQUFPLEdBQUMsQ0FBVCxDQUFSLENBQW9CcUQsUUFBcEIsQ0FBNkJhLEVBQTdCLEVBQWlDVixNQUE5RTtBQUNILFNBSEQsTUFHTztBQUNITSxrQkFBUSxDQUFDakMsUUFBUSxDQUFDRSxHQUFWLENBQVIsQ0FBdUJzQixRQUF2QixDQUFnQ2EsRUFBaEMsRUFBb0NWLE1BQXBDLEdBQTZDTSxRQUFRLENBQUNqQyxRQUFRLENBQUNFLEdBQVQsR0FBZSxDQUFoQixDQUFSLENBQTJCc0IsUUFBM0IsQ0FBb0NhLEVBQXBDLEVBQXdDVixNQUFyRjtBQUNIOztBQUNETSxnQkFBUSxDQUFDakMsUUFBUSxDQUFDRSxHQUFWLENBQVIsQ0FBdUJzQixRQUF2QixDQUFnQ2EsRUFBaEMsRUFBb0NSLFNBQXBDLEdBQWdEL0MsU0FBaEQ7QUFDSDs7QUFDRG1ELGNBQVEsQ0FBQ2pDLFFBQVEsQ0FBQ0UsR0FBVixDQUFSLENBQXVCZCxRQUF2QixHQUFrQyxJQUFsQztBQUNBLFVBQUlrRCxXQUFXLEdBQUc7QUFBQ3BDLFdBQUcsRUFBQ0YsUUFBUSxDQUFDRSxHQUFULEdBQWEsQ0FBbEI7QUFBb0JDLFdBQUcsRUFBQztBQUF4QixPQUFsQjtBQUNBRixpQkFBVyxDQUFDcUMsV0FBRCxDQUFYO0FBQ0F2QyxjQUFRLENBQUNrQyxRQUFELENBQVI7O0FBQ0EsVUFBSUEsUUFBUSxDQUFDTSxNQUFULENBQWdCQyxDQUFDLElBQUk7QUFBQyxlQUFPLENBQUNBLENBQUMsQ0FBQ3BELFFBQVY7QUFBb0IsT0FBMUMsRUFBNEMyQixNQUE1QyxLQUF1RCxDQUEzRCxFQUE4RDtBQUMxRDtBQUNBMUIsbUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDSDs7QUFDRztBQUNQOztBQUNELFFBQUkyQixRQUFRLEdBQUcsQ0FBWCxJQUFnQkEsUUFBUSxJQUFJN0MsT0FBTyxHQUFHLENBQTFDLEVBQTZDO0FBQ3pDO0FBQ0g7O0FBQ0Q4QixlQUFXLENBQUM7QUFBQ0MsU0FBRyxFQUFDYyxRQUFMO0FBQWNiLFNBQUcsRUFBQ3NCO0FBQWxCLEtBQUQsQ0FBWDtBQUNILEdBcENEOztBQXNDQSxRQUFNZ0IsYUFBYSxHQUFJQyxLQUFELElBQVc7QUFDN0IsUUFBSUEsS0FBSyxDQUFDQyxHQUFOLEtBQWMsS0FBbEIsRUFBeUI7QUFBQztBQUFROztBQUNsQ0QsU0FBSyxDQUFDRSxjQUFOOztBQUNBLFFBQUkxRCxRQUFKLEVBQWM7QUFDVixhQURVLENBQ0Y7QUFDWDs7QUFDRCxRQUFJTSxZQUFKLEVBQWtCO0FBQ2QsYUFEYyxDQUNOO0FBQ1g7O0FBQ0RxRCxxQkFBaUIsQ0FBQ0gsS0FBSyxDQUFDQyxHQUFQLENBQWpCO0FBQ0gsR0FWRDs7QUFZQSxRQUFNRyxjQUFjLEdBQUcsTUFBTTtBQUN6QixRQUFJNUQsUUFBSixFQUFjO0FBQ1YsYUFEVSxDQUNGO0FBQ1g7O0FBQ0QsUUFBSU0sWUFBSixFQUFrQjtBQUNkLGFBRGMsQ0FDTjtBQUNYOztBQUNELFFBQUl3QixRQUFRLEdBQUdoQixRQUFRLENBQUNFLEdBQXhCO0FBQ0EsUUFBSXVCLFFBQVEsR0FBR3pCLFFBQVEsQ0FBQ0csR0FBeEI7O0FBQ0EsUUFBSWEsUUFBUSxHQUFHLENBQVgsSUFBZ0JBLFFBQVEsSUFBSTdDLE9BQU8sR0FBRyxDQUExQyxFQUE2QztBQUN6QztBQUNIOztBQUNELFFBQUlzRCxRQUFRLEdBQUcsQ0FBWCxJQUFnQlQsUUFBUSxJQUFJM0MsT0FBaEMsRUFBeUM7QUFDckM7QUFDSDs7QUFDRHdFLHFCQUFpQixDQUFDL0MsS0FBSyxDQUFDa0IsUUFBUSxHQUFDLENBQVYsQ0FBTCxDQUFrQlEsUUFBbEIsQ0FBMkJDLFFBQTNCLEVBQXFDRSxNQUF0QyxDQUFqQjtBQUNILEdBaEJEOztBQWtCQSxRQUFNb0IsWUFBWSxHQUFHLE1BQU07QUFDdkIsUUFBSTdELFFBQUosRUFBYztBQUNWLGFBRFUsQ0FDRjtBQUNYOztBQUNELFFBQUlNLFlBQUosRUFBa0I7QUFDZCxhQURjLENBQ047QUFDWDs7QUFDRCxRQUFJd0IsUUFBUSxHQUFHaEIsUUFBUSxDQUFDRSxHQUF4QjtBQUNBLFFBQUl1QixRQUFRLEdBQUd6QixRQUFRLENBQUNHLEdBQXhCOztBQUNBLFFBQUlhLFFBQVEsR0FBRyxDQUFYLElBQWdCQSxRQUFRLElBQUk3QyxPQUFPLEdBQUcsQ0FBMUMsRUFBNkM7QUFDekM7QUFDSDs7QUFDRCxRQUFJc0QsUUFBUSxHQUFHLENBQVgsSUFBZ0JULFFBQVEsSUFBSTNDLE9BQWhDLEVBQXlDO0FBQ3JDO0FBQ0g7O0FBQ0R3RSxxQkFBaUIsQ0FBQy9DLEtBQUssQ0FBQzNCLE9BQU8sR0FBQyxDQUFULENBQUwsQ0FBaUJxRCxRQUFqQixDQUEwQkMsUUFBMUIsRUFBb0NFLE1BQXJDLENBQWpCO0FBQ0gsR0FoQkQ7O0FBa0JBLFFBQU1rQixpQkFBaUIsR0FBSWxCLE1BQUQsSUFBWTtBQUNsQyxRQUFJWCxRQUFRLEdBQUdoQixRQUFRLENBQUNFLEdBQXhCO0FBQ0EsUUFBSXVCLFFBQVEsR0FBR3pCLFFBQVEsQ0FBQ0csR0FBeEI7O0FBQ0EsUUFBSWEsUUFBUSxHQUFHLENBQVgsSUFBZ0JBLFFBQVEsSUFBSTdDLE9BQU8sR0FBRyxDQUExQyxFQUE2QztBQUN6QztBQUNIOztBQUNELFFBQUlzRCxRQUFRLEdBQUcsQ0FBWCxJQUFnQlQsUUFBUSxJQUFJM0MsT0FBaEMsRUFBeUM7QUFDckM7QUFDSDs7QUFDRCxRQUFJZSxRQUFRLElBQUl1QyxNQUFNLEtBQUssT0FBM0IsRUFBb0M7QUFDaENxQixtQkFBYTtBQUNiO0FBQ0g7O0FBQ0QsUUFBSUMsVUFBVSxHQUFHLGNBQWpCLENBYmtDLENBYUQ7O0FBQ2pDLFFBQUlDLGFBQWEsR0FBRyxHQUFwQixDQWRrQyxDQWNUOztBQUN6QixRQUFJdkIsTUFBTSxLQUFLLFdBQWYsRUFBNEI7QUFDeEJBLFlBQU0sR0FBRyxHQUFUO0FBQ0F1QixtQkFBYSxHQUFHLEdBQWhCO0FBQ0g7O0FBQ0QsUUFBSXZCLE1BQU0sS0FBSyxRQUFmLEVBQXlCO0FBQ3JCQSxZQUFNLEdBQUcsR0FBVDtBQUNBdUIsbUJBQWEsR0FBRyxFQUFoQjtBQUNIOztBQUNELFFBQUl2QixNQUFNLEtBQUssU0FBZixFQUEwQjtBQUN0QkEsWUFBTSxHQUFHN0IsS0FBSyxDQUFDa0IsUUFBRCxDQUFMLENBQWdCUSxRQUFoQixDQUF5QkMsUUFBekIsRUFBbUNFLE1BQTVDO0FBQ0F1QixtQkFBYSxHQUFHLEdBQWhCO0FBQ0g7O0FBQ0QsUUFBSXZCLE1BQU0sS0FBSyxXQUFmLEVBQTRCO0FBQ3hCQSxZQUFNLEdBQUc3QixLQUFLLENBQUNrQixRQUFELENBQUwsQ0FBZ0JRLFFBQWhCLENBQXlCQyxRQUF6QixFQUFtQ0UsTUFBNUM7QUFDQXVCLG1CQUFhLEdBQUcsR0FBaEI7QUFDSDs7QUFDRCxRQUFJdkIsTUFBTSxLQUFLLFdBQWYsRUFBNEI7QUFDeEJBLFlBQU0sR0FBRzdCLEtBQUssQ0FBQ2tCLFFBQUQsQ0FBTCxDQUFnQlEsUUFBaEIsQ0FBeUJDLFFBQXpCLEVBQW1DRSxNQUE1QztBQUNBdUIsbUJBQWEsR0FBRyxHQUFoQjtBQUNIOztBQUNELFFBQUl2QixNQUFNLEtBQUssWUFBZixFQUE2QjtBQUN6QkEsWUFBTSxHQUFHN0IsS0FBSyxDQUFDa0IsUUFBRCxDQUFMLENBQWdCUSxRQUFoQixDQUF5QkMsUUFBekIsRUFBbUNFLE1BQTVDO0FBQ0F1QixtQkFBYSxHQUFHLEdBQWhCO0FBQ0g7O0FBQ0QsUUFBSXZCLE1BQU0sQ0FBQ3dCLEtBQVAsQ0FBYUYsVUFBYixDQUFKLEVBQThCO0FBQzFCdEIsWUFBTSxHQUFHQSxNQUFNLENBQUNSLFdBQVAsRUFBVDtBQUNILEtBRkQsTUFFTztBQUNIO0FBQ0g7O0FBQ0QsUUFBSVEsTUFBTSxLQUFLLEVBQWYsRUFBbUI7QUFDZjtBQUNIOztBQUNELFFBQUluQixRQUFRLEdBQUcwQixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxTQUFMLENBQWV0QyxLQUFmLENBQVgsQ0FBZjtBQUNBVSxZQUFRLENBQUNRLFFBQUQsQ0FBUixDQUFtQlEsUUFBbkIsQ0FBNEJDLFFBQTVCLEVBQXNDRSxNQUF0QyxHQUErQ0EsTUFBL0M7QUFDQW5CLFlBQVEsQ0FBQ1EsUUFBRCxDQUFSLENBQW1CNUIsUUFBbkIsR0FBK0JvQixRQUFRLENBQUNRLFFBQUQsQ0FBUixDQUFtQlEsUUFBbkIsQ0FBNEJlLE1BQTVCLENBQW9DYixJQUFELElBQVU7QUFBQyxhQUFPQSxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBdkI7QUFBNEIsS0FBMUUsRUFBNEVaLE1BQTVFLEtBQXVGLENBQXRIOztBQUNBLFNBQUssSUFBSXNCLEVBQUUsR0FBRyxDQUFkLEVBQWlCQSxFQUFFLEdBQUdoRSxPQUF0QixFQUErQmdFLEVBQUUsRUFBakMsRUFBcUM7QUFDakMsVUFBSTdCLFFBQVEsQ0FBQ1EsUUFBRCxDQUFSLENBQW1CUSxRQUFuQixDQUE0QmEsRUFBNUIsRUFBZ0NWLE1BQWhDLEtBQTJDLEdBQS9DLEVBQW9EO0FBQ2hEbkIsZ0JBQVEsQ0FBQ1EsUUFBRCxDQUFSLENBQW1CUSxRQUFuQixDQUE0QmEsRUFBNUIsRUFBZ0NSLFNBQWhDLEdBQTRDbEQsV0FBNUM7QUFDSCxPQUZELE1BRU87QUFDSDZCLGdCQUFRLENBQUNRLFFBQUQsQ0FBUixDQUFtQlEsUUFBbkIsQ0FBNEJhLEVBQTVCLEVBQWdDUixTQUFoQyxHQUE0Q3JCLFFBQVEsQ0FBQ1EsUUFBRCxDQUFSLENBQW1CNUIsUUFBbkIsR0FBOEJOLFNBQTlCLEdBQTBDRCxRQUF0RjtBQUNIO0FBQ0o7O0FBQ0QsUUFBSXFFLGFBQWEsS0FBSyxHQUF0QixFQUEyQjtBQUN2QkUsWUFBTTtBQUNUOztBQUNELFFBQUlGLGFBQWEsS0FBSyxHQUF0QixFQUEyQjtBQUN2QkcsY0FBUTtBQUNYOztBQUNELFFBQUlILGFBQWEsS0FBSyxHQUF0QixFQUEyQjtBQUN2QkksZUFBUztBQUNaOztBQUNELFFBQUlKLGFBQWEsS0FBSyxHQUF0QixFQUEyQjtBQUN2QkssY0FBUTtBQUNYOztBQUNELFFBQUkvQyxRQUFRLENBQUMrQixNQUFULENBQWdCQyxDQUFDLElBQUk7QUFBQyxhQUFPLENBQUNBLENBQUMsQ0FBQ3BELFFBQVY7QUFBb0IsS0FBMUMsRUFBNEMyQixNQUE1QyxLQUF1RCxDQUEzRCxFQUE4RDtBQUMxRDtBQUNBMUIsaUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDSDs7QUFDRFUsWUFBUSxDQUFDUyxRQUFELENBQVI7QUFDSCxHQTFFRDs7QUE0RUEsUUFBTTRDLE1BQU0sR0FBRyxNQUFNO0FBQ2pCLFFBQUlwQyxRQUFRLEdBQUdoQixRQUFRLENBQUNFLEdBQXhCO0FBQ0EsUUFBSXVCLFFBQVEsR0FBR3pCLFFBQVEsQ0FBQ0csR0FBeEI7QUFDQSxRQUFJbUMsV0FBVyxHQUFHO0FBQUNwQyxTQUFHLEVBQUNjLFFBQUw7QUFBY2IsU0FBRyxFQUFDc0I7QUFBbEIsS0FBbEI7O0FBQ0EsUUFBSVQsUUFBUSxHQUFHLENBQVgsR0FBZSxDQUFuQixFQUFzQjtBQUNsQnNCLGlCQUFXLENBQUNwQyxHQUFaLEdBQWtCYyxRQUFRLEdBQUcsQ0FBN0I7QUFDQXNCLGlCQUFXLENBQUNuQyxHQUFaLEdBQWtCc0IsUUFBbEI7QUFDSCxLQUhELE1BR087QUFDSGEsaUJBQVcsQ0FBQ3BDLEdBQVosR0FBa0IvQixPQUFPLEdBQUcsQ0FBNUI7QUFDQW1FLGlCQUFXLENBQUNuQyxHQUFaLEdBQWtCc0IsUUFBUSxHQUFHLENBQVgsR0FBZSxDQUFDLENBQWhCLEdBQW9CQSxRQUFRLEdBQUcsQ0FBL0IsR0FBbUNwRCxPQUFPLEdBQUcsQ0FBL0Q7QUFDSDs7QUFDRDRCLGVBQVcsQ0FBQ3FDLFdBQUQsQ0FBWDtBQUNILEdBWkQ7O0FBY0EsUUFBTWUsUUFBUSxHQUFHLE1BQU07QUFDbkIsUUFBSXJDLFFBQVEsR0FBR2hCLFFBQVEsQ0FBQ0UsR0FBeEI7QUFDQSxRQUFJdUIsUUFBUSxHQUFHekIsUUFBUSxDQUFDRyxHQUF4QjtBQUNBLFFBQUltQyxXQUFXLEdBQUc7QUFBQ3BDLFNBQUcsRUFBQ2MsUUFBTDtBQUFjYixTQUFHLEVBQUNzQjtBQUFsQixLQUFsQjs7QUFDQSxRQUFJVCxRQUFRLEdBQUcsQ0FBWCxHQUFlN0MsT0FBTyxHQUFHLENBQTdCLEVBQWdDO0FBQzVCbUUsaUJBQVcsQ0FBQ3BDLEdBQVosR0FBa0JjLFFBQVEsR0FBRyxDQUE3QjtBQUNBc0IsaUJBQVcsQ0FBQ25DLEdBQVosR0FBa0JzQixRQUFsQjtBQUNILEtBSEQsTUFHTztBQUNIYSxpQkFBVyxDQUFDcEMsR0FBWixHQUFrQixDQUFsQjtBQUNBb0MsaUJBQVcsQ0FBQ25DLEdBQVosR0FBa0JzQixRQUFRLEdBQUcsQ0FBWCxHQUFlcEQsT0FBZixHQUF5Qm9ELFFBQVEsR0FBRyxDQUFwQyxHQUF3QyxDQUExRDtBQUNIOztBQUNEeEIsZUFBVyxDQUFDcUMsV0FBRCxDQUFYO0FBQ0gsR0FaRDs7QUFjQSxRQUFNZ0IsU0FBUyxHQUFHLE1BQU07QUFDcEIsUUFBSXRDLFFBQVEsR0FBR2hCLFFBQVEsQ0FBQ0UsR0FBeEI7QUFDQSxRQUFJdUIsUUFBUSxHQUFHekIsUUFBUSxDQUFDRyxHQUF4QjtBQUNBLFFBQUltQyxXQUFXLEdBQUc7QUFBQ3BDLFNBQUcsRUFBQyxDQUFMO0FBQU9DLFNBQUcsRUFBQztBQUFYLEtBQWxCOztBQUNBLFFBQUlzQixRQUFRLEdBQUcsQ0FBWCxHQUFlcEQsT0FBbkIsRUFBNEI7QUFDeEJpRSxpQkFBVyxDQUFDcEMsR0FBWixHQUFrQmMsUUFBbEI7QUFDQXNCLGlCQUFXLENBQUNuQyxHQUFaLEdBQWtCc0IsUUFBUSxHQUFHLENBQTdCO0FBQ0gsS0FIRCxNQUdPLElBQUlULFFBQVEsR0FBRyxDQUFYLEdBQWU3QyxPQUFPLEdBQUcsQ0FBN0IsRUFBZ0M7QUFDbkNtRSxpQkFBVyxDQUFDcEMsR0FBWixHQUFrQmMsUUFBUSxHQUFHLENBQTdCO0FBQ0FzQixpQkFBVyxDQUFDbkMsR0FBWixHQUFrQixDQUFsQjtBQUNIOztBQUNERixlQUFXLENBQUNxQyxXQUFELENBQVg7QUFDSCxHQVpEOztBQWNBLFFBQU1pQixRQUFRLEdBQUcsTUFBTTtBQUNuQixRQUFJdkMsUUFBUSxHQUFHaEIsUUFBUSxDQUFDRSxHQUF4QjtBQUNBLFFBQUl1QixRQUFRLEdBQUd6QixRQUFRLENBQUNHLEdBQXhCO0FBQ0EsUUFBSW1DLFdBQVcsR0FBRztBQUFDcEMsU0FBRyxFQUFDL0IsT0FBTyxHQUFDLENBQWI7QUFBZWdDLFNBQUcsRUFBQzlCLE9BQU8sR0FBQztBQUEzQixLQUFsQjs7QUFDQSxRQUFJb0QsUUFBUSxHQUFHLENBQVgsR0FBZSxDQUFDLENBQXBCLEVBQXVCO0FBQ25CYSxpQkFBVyxDQUFDcEMsR0FBWixHQUFrQmMsUUFBbEI7QUFDQXNCLGlCQUFXLENBQUNuQyxHQUFaLEdBQWtCc0IsUUFBUSxHQUFHLENBQTdCO0FBQ0gsS0FIRCxNQUdPLElBQUlULFFBQVEsR0FBRyxDQUFYLEdBQWUsQ0FBbkIsRUFBc0I7QUFDekJzQixpQkFBVyxDQUFDcEMsR0FBWixHQUFrQmMsUUFBUSxHQUFHLENBQTdCO0FBQ0FzQixpQkFBVyxDQUFDbkMsR0FBWixHQUFrQjlCLE9BQU8sR0FBRyxDQUE1QjtBQUNIOztBQUNENEIsZUFBVyxDQUFDcUMsV0FBRCxDQUFYO0FBQ0gsR0FaRDs7QUFjQSxRQUFNa0Isa0JBQWtCLEdBQUcsTUFBTTtBQUM3QmpFLG1CQUFlLENBQUMsQ0FBQ0QsWUFBRixDQUFmO0FBQ0gsR0FGRDs7QUFJQSxRQUFNMEQsYUFBYSxHQUFHLFlBQVc7QUFDN0I3RCxlQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0EsUUFBSXNFLE1BQU0sR0FBRyxJQUFiOztBQUNBLFNBQUksSUFBSXpDLFFBQVEsR0FBRyxDQUFuQixFQUFzQnlDLE1BQU0sSUFBSXpDLFFBQVEsR0FBRzdDLE9BQTNDLEVBQW9ENkMsUUFBUSxFQUE1RCxFQUFnRTtBQUM1RCxVQUFJMEMsUUFBUSxHQUFHLEVBQWY7QUFDQSxVQUFJQyxRQUFRLEdBQUcsRUFBZjs7QUFDQSxXQUFLLElBQUlsQyxRQUFRLEdBQUcsQ0FBcEIsRUFBdUJBLFFBQVEsR0FBR3BELE9BQWxDLEVBQTJDb0QsUUFBUSxFQUFuRCxFQUF1RDtBQUNuRGlDLGdCQUFRLEdBQUdBLFFBQVEsR0FBRzVELEtBQUssQ0FBQ2tCLFFBQVEsR0FBQyxDQUFWLENBQUwsQ0FBa0JRLFFBQWxCLENBQTJCQyxRQUEzQixFQUFxQ0UsTUFBM0Q7QUFDQWdDLGdCQUFRLEdBQUdBLFFBQVEsR0FBRzdELEtBQUssQ0FBQ2tCLFFBQUQsQ0FBTCxDQUFnQlEsUUFBaEIsQ0FBeUJDLFFBQXpCLEVBQW1DRSxNQUF6RDtBQUNIOztBQUNELFVBQUlpQyw4REFBVSxDQUFDRixRQUFELEVBQVdDLFFBQVgsQ0FBVixLQUFtQyxDQUF2QyxFQUEwQztBQUN0QzVCLGFBQUssQ0FBRSxHQUFFMkIsUUFBUyxPQUFNQyxRQUFTLHNCQUE1QixDQUFMO0FBQ0FGLGNBQU0sR0FBRyxLQUFUO0FBQ0g7O0FBQ0QsVUFBSUEsTUFBTSxJQUFJekMsUUFBUSxLQUFLN0MsT0FBTyxHQUFFLENBQWhDLElBQXFDLEVBQUUsTUFBTTBGLCtEQUFXLENBQUNGLFFBQUQsQ0FBbkIsQ0FBekMsRUFBd0U7QUFDcEU1QixhQUFLLENBQUUsR0FBRTRCLFFBQVMsZUFBYixDQUFMO0FBQ0FGLGNBQU0sR0FBRyxLQUFUO0FBQ0g7QUFDSjs7QUFDRHRFLGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDQU0sbUJBQWUsQ0FBQ2dFLE1BQUQsQ0FBZjtBQUNILEdBckJEOztBQXVCQSxRQUFNSyx5QkFBeUIsZ0JBQUc7QUFBQSw0QkFDOUIsOERBQUMsK0RBQUQ7QUFBQSw4QkFDSTtBQUF3QixpQkFBUyxFQUFDLFVBQWxDO0FBQTZDLGVBQU8sRUFBRSxNQUFNO0FBQ3hEMUQseUJBQWUsQ0FBQzdCLFdBQUQsQ0FBZjtBQUNILFNBRkQ7QUFBQSxnQ0FHY0EsV0FIZDtBQUFBLFNBQVksV0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLEVBTUtBLFdBQVcsR0FBRyxDQUFkLGlCQUFtQjtBQUFpQyxpQkFBUyxFQUFDLHFCQUEzQztBQUFpRSxlQUFPLEVBQUUsTUFBTTtBQUNoR0Msd0JBQWMsQ0FBQ0QsV0FBVyxHQUFHLENBQWYsQ0FBZDtBQUNILFNBRm1CO0FBQUE7QUFBQSxTQUFZLG9CQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTnhCLEVBU0tBLFdBQVcsR0FBRyxDQUFkLGlCQUFtQjtBQUFrQyxpQkFBUyxFQUFDLHFCQUE1QztBQUFrRSxlQUFPLEVBQUUsTUFBTTtBQUNqR0Msd0JBQWMsQ0FBQ0QsV0FBVyxHQUFHLENBQWYsQ0FBZDtBQUNILFNBRm1CO0FBQUE7QUFBQSxTQUFZLHFCQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEOEIsZUFjOUIsOERBQUMsNERBQUQ7QUFBQSw4QkFDSTtBQUF5QixpQkFBUyxFQUFDLFVBQW5DO0FBQThDLGVBQU8sRUFBRSxNQUFNO0FBQ3pENkIseUJBQWUsQ0FBQzdCLFdBQUQsQ0FBZjtBQUNILFNBRkQ7QUFBQSxnQ0FHY0EsV0FIZDtBQUFBLFNBQVksWUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLEVBTUtBLFdBQVcsR0FBRyxDQUFkLGlCQUFtQjtBQUEyQixpQkFBUyxFQUFDLHFCQUFyQztBQUEyRCxlQUFPLEVBQUUsTUFBTTtBQUMxRkMsd0JBQWMsQ0FBQ0QsV0FBVyxHQUFHLENBQWYsQ0FBZDtBQUNILFNBRm1CO0FBQUE7QUFBQSxTQUFZLGNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOeEIsRUFTS0EsV0FBVyxHQUFHLENBQWQsaUJBQW1CO0FBQTRCLGlCQUFTLEVBQUMscUJBQXRDO0FBQTRELGVBQU8sRUFBRSxNQUFNO0FBQzNGQyx3QkFBYyxDQUFDRCxXQUFXLEdBQUcsQ0FBZixDQUFkO0FBQ0gsU0FGbUI7QUFBQTtBQUFBLFNBQVksZUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVR4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZDhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFsQzs7QUE2QkEsUUFBTXdGLGVBQWUsZ0JBQUc7QUFBcUIsYUFBUyxFQUFFdkUsWUFBWSxHQUFJLG9CQUFtQm5CLE9BQVEsRUFBL0IsR0FBbUMsV0FBL0U7QUFBQSw0QkFDcEI7QUFBTyxlQUFTLEVBQUcyRixDQUFELElBQU87QUFBRXZCLHFCQUFhLENBQUN1QixDQUFELENBQWI7QUFBbUIsT0FBOUM7QUFBaUQsY0FBUSxFQUFFLENBQUMsQ0FBNUQ7QUFBQSw2QkFBK0Q7QUFBQSxrQkFDMURsRSxLQUFLLENBQUNtRSxHQUFOLENBQVUsQ0FBQ0MsUUFBRCxFQUFXbEQsUUFBWCxrQkFDUDtBQUFBLG9CQUNLa0QsUUFBUSxDQUFDMUMsUUFBVCxDQUFrQnlDLEdBQWxCLENBQXNCLENBQUN2QyxJQUFELEVBQU9ELFFBQVAsa0JBQ25CO0FBQ0ksbUJBQU8sRUFBRSxNQUFNO0FBQUVPLDZCQUFlLENBQUNoQixRQUFELEVBQVdTLFFBQVgsQ0FBZjtBQUFzQyxhQUQzRDtBQUVJLHFCQUFTLEVBQUcsa0JBQWlCbkMsWUFBWSxHQUFHWixlQUFILEdBQXFCYyxZQUFZLEdBQUdULFlBQUgsR0FBa0IyQyxJQUFJLENBQUNHLFNBQUwsSUFBa0JiLFFBQVEsS0FBS2hCLFFBQVEsQ0FBQ0UsR0FBdEIsSUFBNkJ1QixRQUFRLEtBQUt6QixRQUFRLENBQUNHLEdBQW5ELEdBQXlEdkIsZUFBekQsR0FBMkUsRUFBN0YsQ0FBaUcsRUFGak07QUFBQSxzQkFHS1UsWUFBWSxnQkFDVDtBQUFBLHdCQUFrRG9DLElBQUksQ0FBQ0U7QUFBdkQsZUFBWSxjQUFhWixRQUFTLElBQUdTLFFBQVMsRUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEUyxnQkFHVDtBQUFBLHdCQUFrREMsSUFBSSxDQUFDQztBQUF2RCxlQUFZLGNBQWFYLFFBQVMsSUFBR1MsUUFBUyxFQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTlIsYUFBVSxhQUFZVCxRQUFTLElBQUdTLFFBQVMsRUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESDtBQURMLFdBQVUsWUFBV1QsUUFBUyxFQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURIO0FBRDBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEb0IsZUFpQnBCO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSxpQkFDSyxDQUFDaEMsT0FBRCxJQUFZLENBQUNFLFFBQWIsSUFBeUIsQ0FBQ00sWUFBMUIsaUJBQTBDO0FBQUEsZ0NBQ3ZDO0FBQUssbUJBQVMsRUFBQyxnQkFBZjtBQUFBLGtDQWlDSTtBQUFLLHFCQUFTLEVBQUMsZUFBZjtBQUFBLG9DQUNJO0FBQTBCLHFCQUFPLEVBQUUsTUFBTTtBQUFFc0QsOEJBQWM7QUFBSyxlQUE5RDtBQUFpRSx1QkFBUyxFQUFDLG1CQUEzRTtBQUFBO0FBQUEsZUFBWSxhQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFFSTtBQUF3QixxQkFBTyxFQUFFLE1BQU07QUFBRUMsNEJBQVk7QUFBSyxlQUExRDtBQUE2RCx1QkFBUyxFQUFDLGlCQUF2RTtBQUFBO0FBQUEsZUFBWSxXQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWpDSixFQXFDSyxDQUFDdkQsWUFBRCxJQUFpQkosUUFBakIsaUJBQTZCO0FBQUsscUJBQVMsRUFBQyxlQUFmO0FBQUEsbUNBQzFCO0FBQVEsdUJBQVMsRUFBQyxVQUFsQjtBQUE2QixxQkFBTyxFQUFFLE1BQU07QUFBRTRELDZCQUFhO0FBQUssZUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEMEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFyQ2xDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEdUMsZUE0Q3ZDO0FBQUEsaUVBQTRDdEQsU0FBNUMsVUFBMkRFLFFBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE1Q3VDLGVBOEN2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE5Q3VDLGVBZ0R2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFoRHVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEL0MsRUFtREtKLFlBQVksZ0JBQ1Q7QUFBQSxnQ0FDSTtBQUFJLG1CQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixFQUVLc0UseUJBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURTLGdCQU1UO0FBQVEsaUJBQVMsRUFBQyxVQUFsQjtBQUE2QixlQUFPLEVBQUUsTUFBTTtBQUFFTiw0QkFBa0I7QUFBSyxTQUFyRTtBQUFBLGtCQUNNLEdBQUVsRSxZQUFZLEdBQUcsZUFBSCxHQUFxQixpQkFBa0I7QUFEM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF6RFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpCb0I7QUFBQSxLQUFTLFdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF4Qjs7QUFnRkEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSx3Q0FFSTtBQUFRLGlCQUFTLEVBQUMsVUFBbEI7QUFBNkIsZUFBTyxFQUFFLE1BQU07QUFBQ3ZCLG9CQUFVLENBQUMsTUFBRCxDQUFWO0FBQW9CLFNBQWpFO0FBQUEsK0JBQ0k7QUFBRyxtQkFBUyxFQUFDLGdCQUFiO0FBQThCLHlCQUFZLFNBQTFDO0FBQW9ELGVBQUssRUFBQyxNQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLEVBT0tDLFFBQVEsR0FDTDhGLHlCQURLLEdBR1Q5RSxPQUFPLGdCQUNIO0FBQXNCLGVBQVMsRUFBQyxZQUFoQztBQUFBO0FBQUEsT0FBUyxZQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREcsR0FHSCtFLGVBYlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFrQkgsQ0F4YkQ7O0dBQU1qRyxNOztLQUFBQSxNO0FBMGJOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNiMGJiYTk1ZDE4ZWI3Y2I4ZDAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnJvd3NlclZpZXcsIE1vYmlsZU9ubHlWaWV3IH0gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCc7XHJcbmltcG9ydCB7IGNvdW50U3dhcHMsIGlzV29yZFZhbGlkIH0gZnJvbSAnLi4vLi4vbGliL3dvcmRmdW5jdGlvbnMnO1xyXG5cclxuY29uc3QgTW9ycGhvID0gKHtzZXRXaGVyZXRvfSkgPT4ge1xyXG4gICAgY29uc3QgW3N0YXJ0aW5nLCBzZXRTdGFydGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtudW1Sb3dzLCBzZXROdW1Sb3dzXSA9IHVzZVN0YXRlKDYpO1xyXG4gICAgY29uc3QgW251bUNvbHMsIHNldE51bUNvbHNdID0gdXNlU3RhdGUoNSk7XHJcbiAgICBjb25zdCBbbmV4dE51bUNvbHMsIHNldE5leHROdW1Db2xzXSA9IHVzZVN0YXRlKDUpO1xyXG4gICAgY29uc3QgYmFzZXVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCcgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20nO1xyXG4gICAgY29uc3QgY3NzUHJlc2V0TGV0dGVyID0gXCJtb3JwaG9DZWxsU3RhdGljXCI7XHJcbiAgICBjb25zdCBjc3NOb0xldHRlciA9IFwibW9ycGhvQ2VsbE5vTGV0dGVyXCI7XHJcbiAgICBjb25zdCBjc3NTZWxlY3RlZENlbGwgPSBcIiBtb3JwaG9DZWxsU2VsZWN0ZWRcIjtcclxuICAgIGNvbnN0IGNzc0xhcnZhID0gXCJtb3JwaG9DZWxsTGFydmFcIjtcclxuICAgIGNvbnN0IGNzc0NvY29vbiA9IFwibW9ycGhvQ2VsbENvY29vblwiO1xyXG4gICAgY29uc3QgY3NzQnV0dGVyZmx5ID0gXCJtb3JwaG9DZWxsQnV0dGVyZmx5XCI7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtjaGVja2luZywgc2V0Q2hlY2tpbmddID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBTZXQgd2hlbiBjaGVja2luZyBzb2x1dGlvbiB0byBwcmV2ZW50IGZ1cnRoZXIgYWx0ZXJhdGlvbnNcclxuICAgIGNvbnN0IFtmaWxsZWRpbiwgc2V0RmlsbGVkaW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dTb2x1dGlvbiwgc2V0U2hvd1NvbHV0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwdXp6bGVTb2x2ZWQsIHNldFB1enpsZVNvbHZlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZmlyc3RXb3JkLCBzZXRGaXJzdFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2xhc3RXb3JkLCBzZXRMYXN0V29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbYm9hcmQsIHNldEJvYXJkXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoe3JvdzoxLCBjb2w6MH0pOyAvLyBOYXR1cmFsIHBsYWNlIHRvIHN0YXJ0IGVudGVyaW5nIGxldHRlcnNcclxuICAgIGNvbnN0IHNldEluaXRpYWxCb2FyZCA9IGFzeW5jKHdvcmRMZW5ndGgpID0+IHsgLy8gSW5pdGlhbCBib2FyZCBvZiBnaXZlbiBzaXplXHJcbiAgICAgICAgbGV0IG51bWJlck9mUm93cyA9IHdvcmRMZW5ndGggKyAxO1xyXG4gICAgICAgIGxldCBudW1iZXJPZkNvbHMgPSB3b3JkTGVuZ3RoO1xyXG4gICAgICAgIHNldFN0YXJ0aW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHNldENoZWNraW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRTaG93U29sdXRpb24oZmFsc2UpO1xyXG4gICAgICAgIHNldEZpbGxlZGluKGZhbHNlKTtcclxuICAgICAgICBzZXRQdXp6bGVTb2x2ZWQoZmFsc2UpO1xyXG4gICAgICAgIHNldE51bUNvbHMod29yZExlbmd0aCk7XHJcbiAgICAgICAgc2V0TnVtUm93cyh3b3JkTGVuZ3RoKzEpO1xyXG4gICAgICAgIGxldCByb3dBcnJheSA9IFtdO1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHtiYXNldXJsfS9FTkFCTEUySz9tb3JwaG89dHJ1ZSZsZW49JHt3b3JkTGVuZ3RofWA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgaWYgKCFkYXRhLm5vdGVzIHx8IGRhdGEubm90ZXMubGVuZ3RoID09PSAwKSB7IC8vIE9rIHJlc3VsdFxyXG4gICAgICAgICAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgbnVtYmVyT2ZSb3dzOyByb3dJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3dXb3JkID0gZGF0YS5wdXp6bGVbcm93SW5kZXhdLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93SW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRGaXJzdFdvcmQocm93V29yZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvd0luZGV4ID09PSBudW1iZXJPZlJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGFzdFdvcmQocm93V29yZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3dMZXR0ZXJzID0gWy4uLkFycmF5LmZyb20ocm93V29yZCldO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvd0ZpbGxlZEluID0gcm93SW5kZXggPT09IDAgfHwgcm93SW5kZXggPT09IG51bWJlck9mUm93cyAtIDE7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBudW1iZXJPZkNvbHM7IGNvbEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IHtsZXR0ZXI6Jz8nLHNvbHV0aW9uOnJvd0xldHRlcnNbY29sSW5kZXhdLGNsYXNzTmFtZTonPyd9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3dJbmRleCA9PT0gMCB8fCByb3dJbmRleCA9PT0gbnVtYmVyT2ZSb3dzIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmxldHRlciA9IHJvd0xldHRlcnNbY29sSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9IGNzc1ByZXNldExldHRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmxldHRlciA9ICc/JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBjc3NOb0xldHRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sQXJyYXkucHVzaChjZWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJvd0FycmF5LnB1c2goe2ZpbGxlZGluOnJvd0ZpbGxlZEluLCBjb2xBcnJheTpjb2xBcnJheX0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldEJvYXJkKHJvd0FycmF5KTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWQoe3JvdzoxLGNvbDowfSk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGBQcm9ibGVtIGdlbmVyYXRpbmcgcHV6emxlOiAke2RhdGEubm90ZXN9XFxuQmVzdCB0byBjbGljayBIb21lIHRoZW4gcmVjaG9vc2UgTW9ycGhvLmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3Rpb24gPSAocm93SW5kZXgsIGNvbEluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGNoZWNraW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gTm8gbW9kZXMgd2hpbGUgY2hlY2tpbmcgc29sdXRpb25cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHB1enpsZVNvbHZlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIFB1enpsZSBhbHJlYWR5IHNvbHZlZFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sSW5kZXggPCAwIHx8IGNvbEluZGV4ID49IG51bUNvbHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocm93SW5kZXggPT09IG51bVJvd3MgLSAxICYmIHNlbGVjdGVkLnJvdyA+IDAgJiYgc2VsZWN0ZWQucm93IDwgbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgLy8gSWYgdGhleSBjbGljayBvbiBhIGJvdHRvbSByb3cgdGlsZSB0aGVuIGNvcHkgaXQgdXAgYW5kIGNvcHkgZG93biB0aGUgcmVzdCBvZiB0aGUgcm93XHJcbiAgICAgICAgICAgIGxldCBuZXdCb2FyZCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYm9hcmQpKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgY2kgPSAwOyBjaSA8IG51bUNvbHM7IGNpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaSA9PT0gY29sSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBjb2x1bW4gdGhleSBjbGlja2VkIG9uXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Qm9hcmRbc2VsZWN0ZWQucm93XS5jb2xBcnJheVtjaV0ubGV0dGVyID0gbmV3Qm9hcmRbbnVtUm93cy0xXS5jb2xBcnJheVtjaV0ubGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdCb2FyZFtzZWxlY3RlZC5yb3ddLmNvbEFycmF5W2NpXS5sZXR0ZXIgPSBuZXdCb2FyZFtzZWxlY3RlZC5yb3cgLSAxXS5jb2xBcnJheVtjaV0ubGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmV3Qm9hcmRbc2VsZWN0ZWQucm93XS5jb2xBcnJheVtjaV0uY2xhc3NOYW1lID0gY3NzQ29jb29uOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld0JvYXJkW3NlbGVjdGVkLnJvd10uZmlsbGVkaW4gPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgbmV3U2VsZWN0ZWQgPSB7cm93OnNlbGVjdGVkLnJvdysxLGNvbDowfTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBzZXRCb2FyZChuZXdCb2FyZCk7XHJcbiAgICAgICAgICAgIGlmIChuZXdCb2FyZC5maWx0ZXIociA9PiB7cmV0dXJuICFyLmZpbGxlZGluO30pLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQWxsIGxldHRlcnMgYXJlIGZpbGxlZCBpblxyXG4gICAgICAgICAgICAgICAgc2V0RmlsbGVkaW4odHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvd0luZGV4IDwgMSB8fCByb3dJbmRleCA+PSBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGVkKHtyb3c6cm93SW5kZXgsY29sOmNvbEluZGV4fSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRjEyXCIpIHtyZXR1cm47fVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKGNoZWNraW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gTm8gbW9kZXMgd2hpbGUgY2hlY2tpbmcgc29sdXRpb25cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHB1enpsZVNvbHZlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIFB1enpsZSBhbHJlYWR5IHNvbHZlZFxyXG4gICAgICAgIH1cclxuICAgICAgICBoYW5kbGVJbnB1dExldHRlcihldmVudC5rZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvcHlEb3duTGV0dGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChjaGVja2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIE5vIG1vZGVzIHdoaWxlIGNoZWNraW5nIHNvbHV0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwdXp6bGVTb2x2ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBQdXp6bGUgYWxyZWFkeSBzb2x2ZWRcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gc2VsZWN0ZWQucm93O1xyXG4gICAgICAgIGxldCBjb2xJbmRleCA9IHNlbGVjdGVkLmNvbDtcclxuICAgICAgICBpZiAocm93SW5kZXggPCAxIHx8IHJvd0luZGV4ID49IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbEluZGV4IDwgMCB8fCByb3dJbmRleCA+PSBudW1Db2xzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGFuZGxlSW5wdXRMZXR0ZXIoYm9hcmRbcm93SW5kZXgtMV0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGNvcHlVcExldHRlciA9ICgpID0+IHtcclxuICAgICAgICBpZiAoY2hlY2tpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBObyBtb2RlcyB3aGlsZSBjaGVja2luZyBzb2x1dGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHV6emxlU29sdmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gUHV6emxlIGFscmVhZHkgc29sdmVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByb3dJbmRleCA9IHNlbGVjdGVkLnJvdztcclxuICAgICAgICBsZXQgY29sSW5kZXggPSBzZWxlY3RlZC5jb2w7XHJcbiAgICAgICAgaWYgKHJvd0luZGV4IDwgMSB8fCByb3dJbmRleCA+PSBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2xJbmRleCA8IDAgfHwgcm93SW5kZXggPj0gbnVtQ29scykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhhbmRsZUlucHV0TGV0dGVyKGJvYXJkW251bVJvd3MtMV0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZUlucHV0TGV0dGVyID0gKGxldHRlcikgPT4ge1xyXG4gICAgICAgIGxldCByb3dJbmRleCA9IHNlbGVjdGVkLnJvdztcclxuICAgICAgICBsZXQgY29sSW5kZXggPSBzZWxlY3RlZC5jb2w7XHJcbiAgICAgICAgaWYgKHJvd0luZGV4IDwgMSB8fCByb3dJbmRleCA+PSBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2xJbmRleCA8IDAgfHwgcm93SW5kZXggPj0gbnVtQ29scykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaWxsZWRpbiAmJiBsZXR0ZXIgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICBjaGVja1NvbHV0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxldHRlcnRlc3QgPSAvXltBLVphLXpcXD9dJC87IC8vIHNpbmdsZSBsZXR0ZXIgb3IgcXVlc3Rpb24gbWFyayBrZXkgcHJlc3NlZFxyXG4gICAgICAgIGxldCBtb3ZlRGlyZWN0aW9uID0gXCJyXCI7IC8vIERlZmF1bHRcclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIkJhY2tzcGFjZVwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IFwiP1wiO1xyXG4gICAgICAgICAgICBtb3ZlRGlyZWN0aW9uID0gXCJsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiRGVsZXRlXCIpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gXCI/XCI7XHJcbiAgICAgICAgICAgIG1vdmVEaXJlY3Rpb24gPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIkFycm93VXBcIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBib2FyZFtyb3dJbmRleF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA9IFwidVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIkFycm93RG93blwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IGJvYXJkW3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICBtb3ZlRGlyZWN0aW9uID0gXCJkXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiQXJyb3dMZWZ0XCIpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gYm9hcmRbcm93SW5kZXhdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXI7XHJcbiAgICAgICAgICAgIG1vdmVEaXJlY3Rpb24gPSBcImxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gYm9hcmRbcm93SW5kZXhdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXI7XHJcbiAgICAgICAgICAgIG1vdmVEaXJlY3Rpb24gPSBcInJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlci5tYXRjaChsZXR0ZXJ0ZXN0KSkge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBsZXR0ZXIudG9VcHBlckNhc2UoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcm93QXJyYXkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGJvYXJkKSk7XHJcbiAgICAgICAgcm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXIgPSBsZXR0ZXI7XHJcbiAgICAgICAgcm93QXJyYXlbcm93SW5kZXhdLmZpbGxlZGluID0gKHJvd0FycmF5W3Jvd0luZGV4XS5jb2xBcnJheS5maWx0ZXIoKGNlbGwpID0+IHtyZXR1cm4gY2VsbC5sZXR0ZXIgPT09IFwiP1wiO30pLmxlbmd0aCA9PT0gMCk7XHJcbiAgICAgICAgZm9yIChsZXQgY2kgPSAwOyBjaSA8IG51bUNvbHM7IGNpKyspIHtcclxuICAgICAgICAgICAgaWYgKHJvd0FycmF5W3Jvd0luZGV4XS5jb2xBcnJheVtjaV0ubGV0dGVyID09PSBcIj9cIikge1xyXG4gICAgICAgICAgICAgICAgcm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5W2NpXS5jbGFzc05hbWUgPSBjc3NOb0xldHRlcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJvd0FycmF5W3Jvd0luZGV4XS5jb2xBcnJheVtjaV0uY2xhc3NOYW1lID0gcm93QXJyYXlbcm93SW5kZXhdLmZpbGxlZGluID8gY3NzQ29jb29uIDogY3NzTGFydmE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vdmVEaXJlY3Rpb24gPT09IFwidVwiKSB7XHJcbiAgICAgICAgICAgIG1vdmVVcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobW92ZURpcmVjdGlvbiA9PT0gXCJkXCIpIHtcclxuICAgICAgICAgICAgbW92ZURvd24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vdmVEaXJlY3Rpb24gPT09IFwiclwiKSB7XHJcbiAgICAgICAgICAgIG1vdmVSaWdodCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobW92ZURpcmVjdGlvbiA9PT0gXCJsXCIpIHtcclxuICAgICAgICAgICAgbW92ZUxlZnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvd0FycmF5LmZpbHRlcihyID0+IHtyZXR1cm4gIXIuZmlsbGVkaW47fSkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIEFsbCBsZXR0ZXJzIGFyZSBmaWxsZWQgaW5cclxuICAgICAgICAgICAgc2V0RmlsbGVkaW4odHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEJvYXJkKHJvd0FycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb3ZlVXAgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gc2VsZWN0ZWQucm93O1xyXG4gICAgICAgIGxldCBjb2xJbmRleCA9IHNlbGVjdGVkLmNvbDtcclxuICAgICAgICBsZXQgbmV3U2VsZWN0ZWQgPSB7cm93OnJvd0luZGV4LGNvbDpjb2xJbmRleH07XHJcbiAgICAgICAgaWYgKHJvd0luZGV4IC0gMSA+IDApIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gcm93SW5kZXggLSAxO1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSBudW1Sb3dzIC0gMjtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXggLSAxID4gLTEgPyBjb2xJbmRleCAtIDEgOiBudW1Db2xzIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vdmVEb3duID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCByb3dJbmRleCA9IHNlbGVjdGVkLnJvdztcclxuICAgICAgICBsZXQgY29sSW5kZXggPSBzZWxlY3RlZC5jb2w7XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGVkID0ge3Jvdzpyb3dJbmRleCxjb2w6Y29sSW5kZXh9O1xyXG4gICAgICAgIGlmIChyb3dJbmRleCArIDEgPCBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleCArIDE7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IGNvbEluZGV4O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IDE7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IGNvbEluZGV4ICsgMSA8IG51bUNvbHMgPyBjb2xJbmRleCArIDEgOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW92ZVJpZ2h0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCByb3dJbmRleCA9IHNlbGVjdGVkLnJvdztcclxuICAgICAgICBsZXQgY29sSW5kZXggPSBzZWxlY3RlZC5jb2w7XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGVkID0ge3JvdzoxLGNvbDowfTtcclxuICAgICAgICBpZiAoY29sSW5kZXggKyAxIDwgbnVtQ29scykge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleDtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXggKyAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocm93SW5kZXggKyAxIDwgbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gcm93SW5kZXggKyAxO1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW92ZUxlZnQgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gc2VsZWN0ZWQucm93O1xyXG4gICAgICAgIGxldCBjb2xJbmRleCA9IHNlbGVjdGVkLmNvbDtcclxuICAgICAgICBsZXQgbmV3U2VsZWN0ZWQgPSB7cm93Om51bVJvd3MtMixjb2w6bnVtQ29scy0xfTtcclxuICAgICAgICBpZiAoY29sSW5kZXggLSAxID4gLTEpIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gcm93SW5kZXg7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IGNvbEluZGV4IC0gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJvd0luZGV4IC0gMSA+IDApIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gcm93SW5kZXggLSAxO1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBudW1Db2xzIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVNob3dTb2x1dGlvbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG93U29sdXRpb24oIXNob3dTb2x1dGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hlY2tTb2x1dGlvbiA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIHNldENoZWNraW5nKHRydWUpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgIGZvcihsZXQgcm93SW5kZXggPSAxOyByZXN1bHQgJiYgcm93SW5kZXggPCBudW1Sb3dzOyByb3dJbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwcmV2V29yZCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGxldCBjdXJyV29yZCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBudW1Db2xzOyBjb2xJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2V29yZCA9IHByZXZXb3JkICsgYm9hcmRbcm93SW5kZXgtMV0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICAgICAgICAgIGN1cnJXb3JkID0gY3VycldvcmQgKyBib2FyZFtyb3dJbmRleF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY291bnRTd2FwcyhwcmV2V29yZCwgY3VycldvcmQpICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChgJHtwcmV2V29yZH0gdG8gJHtjdXJyV29yZH0gaXMgbm90IGEgdmFsaWQgbW92ZWApO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByb3dJbmRleCAhPT0gbnVtUm93cyAtMSAmJiAhIGF3YWl0IGlzV29yZFZhbGlkKGN1cnJXb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYCR7Y3VycldvcmR9IGlzIG5vdCB2YWxpZGApO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q2hlY2tpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldFB1enpsZVNvbHZlZChyZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb21wdEZvclB1enpsZUdlbmVyYXRpb24gPSA8ZGl2PlxyXG4gICAgICAgIDxNb2JpbGVPbmx5Vmlldz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJnZW5Nb2JpbGVcIiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEluaXRpYWxCb2FyZChuZXh0TnVtQ29scyk7XHJcbiAgICAgICAgICAgIH0gfT5cclxuICAgICAgICAgICAgICAgIEdFTkVSQVRFIHtuZXh0TnVtQ29sc30gTEVUVEVSIFBVWlpMRVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAge25leHROdW1Db2xzIDwgNSAmJiA8YnV0dG9uIGtleT1cImxvbmdlclB1enpsZU1vYmlsZVwiIGNsYXNzTmFtZT1cIm1vcnBob1B1enpsZVNpemVLZXlcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXROZXh0TnVtQ29scyhuZXh0TnVtQ29scyArIDEpO1xyXG4gICAgICAgICAgICB9IH0+KzwvYnV0dG9uPn1cclxuICAgICAgICAgICAge25leHROdW1Db2xzID4gMyAmJiA8YnV0dG9uIGtleT1cInNob3J0ZXJQdXp6bGVNb2JpbGVcIiBjbGFzc05hbWU9XCJtb3JwaG9QdXp6bGVTaXplS2V5XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TmV4dE51bUNvbHMobmV4dE51bUNvbHMgLSAxKTtcclxuICAgICAgICAgICAgfSB9Pi08L2J1dHRvbj59XHJcbiAgICAgICAgPC9Nb2JpbGVPbmx5Vmlldz5cclxuICAgICAgICA8QnJvd3NlclZpZXc+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwiZ2VuQnJvd3NlclwiIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0SW5pdGlhbEJvYXJkKG5leHROdW1Db2xzKTtcclxuICAgICAgICAgICAgfSB9PlxyXG4gICAgICAgICAgICAgICAgR0VORVJBVEUge25leHROdW1Db2xzfSBMRVRURVIgUFVaWkxFXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7bmV4dE51bUNvbHMgPCA3ICYmIDxidXR0b24ga2V5PVwibG9uZ2VyUHV6emxlXCIgY2xhc3NOYW1lPVwibW9ycGhvUHV6emxlU2l6ZUtleVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldE5leHROdW1Db2xzKG5leHROdW1Db2xzICsgMSk7XHJcbiAgICAgICAgICAgIH0gfT4rPC9idXR0b24+fVxyXG4gICAgICAgICAgICB7bmV4dE51bUNvbHMgPiAzICYmIDxidXR0b24ga2V5PVwic2hvcnRlclB1enpsZVwiIGNsYXNzTmFtZT1cIm1vcnBob1B1enpsZVNpemVLZXlcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXROZXh0TnVtQ29scyhuZXh0TnVtQ29scyAtIDEpO1xyXG4gICAgICAgICAgICB9IH0+LTwvYnV0dG9uPn1cclxuICAgICAgICA8L0Jyb3dzZXJWaWV3PlxyXG4gICAgPC9kaXY+O1xyXG5cclxuICAgIGNvbnN0IHJlbmRlclRoZVB1enpsZSA9IDxkaXYga2V5PVwic2hvd2JvYXJkXCIgY2xhc3NOYW1lPXtwdXp6bGVTb2x2ZWQgPyBgbW9ycGhvU29sdmVkRGl2IGwke251bUNvbHN9YCA6IFwibW9ycGhvRGl2XCJ9PlxyXG4gICAgICAgIDx0YWJsZSBvbktleURvd249eyhlKSA9PiB7IGhhbmRsZUtleURvd24oZSk7IH0gfSB0YWJJbmRleD17LTF9Pjx0Ym9keT5cclxuICAgICAgICAgICAge2JvYXJkLm1hcCgoYm9hcmRSb3csIHJvd0luZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtgQm9hcmRSb3cuJHtyb3dJbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICB7Ym9hcmRSb3cuY29sQXJyYXkubWFwKChjZWxsLCBjb2xJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtgQm9hcmRDZWxsLiR7cm93SW5kZXh9LiR7Y29sSW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlU2VsZWN0aW9uKHJvd0luZGV4LCBjb2xJbmRleCk7IH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29sIG1vcnBob0NlbGwgJHtzaG93U29sdXRpb24gPyBjc3NQcmVzZXRMZXR0ZXIgOiBwdXp6bGVTb2x2ZWQgPyBjc3NCdXR0ZXJmbHkgOiBjZWxsLmNsYXNzTmFtZSArIChyb3dJbmRleCA9PT0gc2VsZWN0ZWQucm93ICYmIGNvbEluZGV4ID09PSBzZWxlY3RlZC5jb2wgPyBjc3NTZWxlY3RlZENlbGwgOiBcIlwiKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93U29sdXRpb24gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YEJvYXJkQ2VsbFMuJHtyb3dJbmRleH0uJHtjb2xJbmRleH1gfT57Y2VsbC5zb2x1dGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YEJvYXJkQ2VsbEwuJHtyb3dJbmRleH0uJHtjb2xJbmRleH1gfT57Y2VsbC5sZXR0ZXJ9PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+PC90YWJsZT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgIHshbG9hZGluZyAmJiAhY2hlY2tpbmcgJiYgIXB1enpsZVNvbHZlZCAmJiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3JwaG9LZXlib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm1vcnBob0tleXJvdzFcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlRXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdRJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+UTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVdcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1cnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5XPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5RVwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignRScpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPkU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlSXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdSJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+UjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVRcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1QnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5UPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5WVwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignWScpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlk8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlVXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdVJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+VTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUlcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0knKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5JPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5T1wiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignTycpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPk88L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlQXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdQJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+UDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9ycGhvS2V5cm93MlwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUFcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0EnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5BPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5U1wiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignUycpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlEXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdEJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+RDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUZcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0YnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5GPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5R1wiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignRycpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPkc8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlIXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdIJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+SDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUpcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0onKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5KPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5S1wiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignSycpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPks8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlMXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdMJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+TDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9ycGhvS2V5cm93M1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVpcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1onKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5aPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5WFwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignWCcpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlg8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlDXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdDJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+QzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVZcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1YnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5WPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5QlwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignQicpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPkI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlOXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdOJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+TjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleU1cIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ00nKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5NPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9ycGhvS2V5cm93NFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUNvcHlkb3duXCIgb25DbGljaz17KCkgPT4geyBjb3B5RG93bkxldHRlcigpOyB9IH0gY2xhc3NOYW1lPVwibW9ycGhvQ29weWRvd25LZXlcIj5DT1BZIERPV048L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlDb3B5dXBcIiBvbkNsaWNrPXsoKSA9PiB7IGNvcHlVcExldHRlcigpOyB9IH0gY2xhc3NOYW1lPVwibW9ycGhvQ29weXVwS2V5XCI+Q09QWSBVUDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHshcHV6emxlU29sdmVkICYmIGZpbGxlZGluICYmIDxkaXYgY2xhc3NOYW1lPVwibW9ycGhvS2V5cm93NFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4geyBjaGVja1NvbHV0aW9uKCk7IH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNVQk1JVCBZT1VSIFNPTFVUSU9OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+Q2hhbmdlIG9uZSBsZXR0ZXIgYXQgYSB0aW1lIHRvIGdldCBmcm9tIHtmaXJzdFdvcmR9IHRvIHtsYXN0V29yZH0uXHJcbiAgICAgICAgICAgICAgICAgICAgRWFjaCBpbnRlcmltIHdvcmQgbXVzdCBiZSBhIHZhbGlkIHdvcmQuPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+Q09QWSBET1dOIGNvcGllcyBhIGxldHRlciBkb3duIGZyb20gdGhlIHJvdyBhYm92ZS5cclxuICAgICAgICAgICAgICAgICAgICBDT1BZIFVQIGNvcGllcyBhIGxldHRlciB1cCBmcm9tIHRoZSBib3R0b20gcm93LjwvcD5cclxuICAgICAgICAgICAgICAgIDxwPkNsaWNrIGEgbGV0dGVyIG9uIHRoZSBib3R0b20gcm93IHRvIHVzZSBpdCBhcyB0aGUgc3dhcCBvbiB0aGUgc2VsZWN0ZWQgcm93LjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICB7cHV6emxlU29sdmVkID9cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRyRW1waGFzaXNcIj5TdWNjZXNzITwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb21wdEZvclB1enpsZUdlbmVyYXRpb259XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7IHRvZ2dsZVNob3dTb2x1dGlvbigpOyB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2Ake3Nob3dTb2x1dGlvbiA/ICdISURFIFNPTFVUSU9OJyA6ICdTSE9XIEEgU09MVVRJT04nfWB9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIE1vcnBob1xyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7c3RhcnRpbmcgP1xyXG4gICAgICAgICAgICAgICAgcHJvbXB0Rm9yUHV6emxlR2VuZXJhdGlvblxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIGxvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJwbGVhc2V3YWl0XCIgY2xhc3NOYW1lPVwidHJFbXBoYXNpc1wiPkNyZWF0aW5nIHB1enpsZSwgcGxlYXNlIGJlIHBhdGllbnQuLi48L2Rpdj5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgcmVuZGVyVGhlUHV6emxlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9ycGhvOyJdLCJzb3VyY2VSb290IjoiIn0=