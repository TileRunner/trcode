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
/* harmony import */ var _lib_wordfunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/wordfunctions */ "./lib/wordfunctions.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\morpho\\morpho.js",
    _s = $RefreshSig$();




const Morpho = ({
  setWhereto
}) => {
  _s();

  const numRows = 6;
  const numCols = 5;
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
    setInitialBoard();
  }, []);

  const setInitialBoard = async () => {
    // Initial board of given size
    setLoading(true);
    setChecking(false);
    setShowSolution(false);
    setFilledin(false);
    setPuzzleSolved(false);
    let rowArray = [];
    let url = `${baseurl}/ENABLE2K?morpho=true&len=${numCols}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data.notes || data.notes.length === 0) {
      // Ok result
      for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
        const rowWord = data.puzzle[rowIndex].toUpperCase();

        if (rowIndex === 0) {
          setFirstWord(rowWord);
        } else if (rowIndex === numRows - 1) {
          setLastWord(rowWord);
        }

        const rowLetters = [...Array.from(rowWord)];
        let rowFilledIn = rowIndex === 0 || rowIndex === numRows - 1;
        let colArray = [];

        for (let colIndex = 0; colIndex < numCols; colIndex++) {
          let cell = {
            letter: '?',
            solution: rowLetters[colIndex],
            className: '?'
          };

          if (rowIndex === 0 || rowIndex === numRows - 1) {
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
    }

    setBoard(rowArray);
    setSelected({
      row: 1,
      col: 0
    });
    setLoading(false);
  };

  const handleSelection = (rowIndex, colIndex) => {
    if (rowIndex < 1 || rowIndex >= numRows - 1) {
      return;
    }

    if (colIndex < 0 || rowIndex >= numCols) {
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

      if ((0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_2__.countSwaps)(prevWord, currWord) !== 1) {
        alert(`${prevWord} to ${currWord} is not a valid move`);
        result = false;
      }

      if (result && rowIndex !== numRows - 1 && !(await (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_2__.isWordValid)(currWord))) {
        alert(`${currWord} is not valid`);
        result = false;
      }
    }

    setChecking(false);
    setPuzzleSolved(result);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trBackground",
    onKeyDown: e => {
      handleKeyDown(e);
    },
    tabindex: -1,
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
    }, undefined), loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trEmphasis",
      children: "Creating puzzle, please be patient..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 25
    }, undefined), !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: puzzleSolved ? "morphoSolvedDiv" : "morphoDiv",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        children: board.map((boardRow, rowIndex) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: boardRow.colArray.map((cell, colIndex) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            onClick: () => {
              handleSelection(rowIndex, colIndex);
            },
            className: `col morphoCell ${showSolution ? cssPresetLetter : puzzleSolved ? cssButterfly : cell.className + (rowIndex === selected.row && colIndex === selected.col ? cssSelectedCell : "")}`,
            children: showSolution ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: cell.solution
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 37
            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: cell.letter
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 37
            }, undefined)
          }, `BoardCell.${rowIndex}.${colIndex}`, false, {
            fileName: _jsxFileName,
            lineNumber: 261,
            columnNumber: 29
          }, undefined))
        }, `BoardRow.${rowIndex}`, false, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 21
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: [!loading && !checking && !puzzleSolved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Change one letter at a time to get from ", firstWord, " to ", lastWord, "."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Each interim word must be a valid word."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 277,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "morphoKeyboard",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                handleInputLetter('A');
              },
              className: "morphoKey",
              children: "A"
            }, "keyA", false, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                handleInputLetter('B');
              },
              className: "morphoKey",
              children: "B"
            }, "keyB", false, {
              fileName: _jsxFileName,
              lineNumber: 280,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                handleInputLetter('C');
              },
              className: "morphoKey",
              children: "C"
            }, "keyC", false, {
              fileName: _jsxFileName,
              lineNumber: 281,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                handleInputLetter('D');
              },
              className: "morphoKey",
              children: "D"
            }, "keyD", false, {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                handleInputLetter('E');
              },
              className: "morphoKey",
              children: "E"
            }, "keyE", false, {
              fileName: _jsxFileName,
              lineNumber: 283,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                handleInputLetter('F');
              },
              className: "morphoKey",
              children: "F"
            }, "keyF", false, {
              fileName: _jsxFileName,
              lineNumber: 284,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                handleInputLetter('G');
              },
              className: "morphoKey",
              children: "G"
            }, "keyG", false, {
              fileName: _jsxFileName,
              lineNumber: 285,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                handleInputLetter('H');
              },
              className: "morphoKey",
              children: "H"
            }, "keyH", false, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                handleInputLetter('I');
              },
              className: "morphoKey",
              children: "I"
            }, "keyI", false, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 288,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                handleInputLetter('J');
              },
              className: "morphoKey",
              children: "J"
            }, "keyJ", false, {
              fileName: _jsxFileName,
              lineNumber: 289,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                handleInputLetter('K');
              },
              className: "morphoKey",
              children: "K"
            }, "keyK", false, {
              fileName: _jsxFileName,
              lineNumber: 290,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                handleInputLetter('L');
              },
              className: "morphoKey",
              children: "L"
            }, "keyL", false, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                handleInputLetter('M');
              },
              className: "morphoKey",
              children: "M"
            }, "keyM", false, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                handleInputLetter('N');
              },
              className: "morphoKey",
              children: "N"
            }, "keyN", false, {
              fileName: _jsxFileName,
              lineNumber: 293,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                handleInputLetter('O');
              },
              className: "morphoKey",
              children: "O"
            }, "keyO", false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                handleInputLetter('P');
              },
              className: "morphoKey",
              children: "P"
            }, "keyP", false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                handleInputLetter('Q');
              },
              className: "morphoKey",
              children: "Q"
            }, "keyQ", false, {
              fileName: _jsxFileName,
              lineNumber: 296,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                handleInputLetter('R');
              },
              className: "morphoKey",
              children: "R"
            }, "keyR", false, {
              fileName: _jsxFileName,
              lineNumber: 297,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                handleInputLetter('S');
              },
              className: "morphoKey",
              children: "S"
            }, "keyS", false, {
              fileName: _jsxFileName,
              lineNumber: 298,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                handleInputLetter('T');
              },
              className: "morphoKey",
              children: "T"
            }, "keyT", false, {
              fileName: _jsxFileName,
              lineNumber: 299,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                handleInputLetter('U');
              },
              className: "morphoKey",
              children: "U"
            }, "keyU", false, {
              fileName: _jsxFileName,
              lineNumber: 300,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                handleInputLetter('V');
              },
              className: "morphoKey",
              children: "V"
            }, "keyV", false, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                handleInputLetter('W');
              },
              className: "morphoKey",
              children: "W"
            }, "keyW", false, {
              fileName: _jsxFileName,
              lineNumber: 302,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                handleInputLetter('X');
              },
              className: "morphoKey",
              children: "X"
            }, "keyX", false, {
              fileName: _jsxFileName,
              lineNumber: 303,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                handleInputLetter('Y');
              },
              className: "morphoKey",
              children: "Y"
            }, "keyY", false, {
              fileName: _jsxFileName,
              lineNumber: 304,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                handleInputLetter('Z');
              },
              className: "morphoKey",
              children: "Z"
            }, "keyZ", false, {
              fileName: _jsxFileName,
              lineNumber: 305,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 64
        }, undefined), puzzleSolved ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "trEmphasis",
            children: "Success!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "trButton",
            onClick: () => {
              setInitialBoard();
            },
            children: "GENERATE ANOTHER PUZZLE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 311,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 25
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton",
          onClick: () => {
            toggleShowSolution();
          },
          children: `${showSolution ? 'HIDE SOLUTION' : 'SHOW A SOLUTION'}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 25
        }, undefined), !puzzleSolved && filledin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "trButton",
            onClick: () => {
              checkSolution();
            },
            children: "SUBMIT YOUR SOLUTION"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 321,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 51
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 26
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 248,
    columnNumber: 9
  }, undefined);
};

_s(Morpho, "vQKOgBERZvmI4yrqFLmtQTnwPG8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9ycGhvL21vcnBoby5qcyJdLCJuYW1lcyI6WyJNb3JwaG8iLCJzZXRXaGVyZXRvIiwibnVtUm93cyIsIm51bUNvbHMiLCJiYXNldXJsIiwiY3NzUHJlc2V0TGV0dGVyIiwiY3NzTm9MZXR0ZXIiLCJjc3NTZWxlY3RlZENlbGwiLCJjc3NMYXJ2YSIsImNzc0NvY29vbiIsImNzc0J1dHRlcmZseSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJjaGVja2luZyIsInNldENoZWNraW5nIiwiZmlsbGVkaW4iLCJzZXRGaWxsZWRpbiIsInNob3dTb2x1dGlvbiIsInNldFNob3dTb2x1dGlvbiIsInB1enpsZVNvbHZlZCIsInNldFB1enpsZVNvbHZlZCIsImZpcnN0V29yZCIsInNldEZpcnN0V29yZCIsImxhc3RXb3JkIiwic2V0TGFzdFdvcmQiLCJib2FyZCIsInNldEJvYXJkIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInJvdyIsImNvbCIsInVzZUVmZmVjdCIsInNldEluaXRpYWxCb2FyZCIsInJvd0FycmF5IiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwibm90ZXMiLCJsZW5ndGgiLCJyb3dJbmRleCIsInJvd1dvcmQiLCJwdXp6bGUiLCJ0b1VwcGVyQ2FzZSIsInJvd0xldHRlcnMiLCJBcnJheSIsImZyb20iLCJyb3dGaWxsZWRJbiIsImNvbEFycmF5IiwiY29sSW5kZXgiLCJjZWxsIiwibGV0dGVyIiwic29sdXRpb24iLCJjbGFzc05hbWUiLCJwdXNoIiwiaGFuZGxlU2VsZWN0aW9uIiwiaGFuZGxlS2V5RG93biIsImV2ZW50Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVJbnB1dExldHRlciIsImNoZWNrU29sdXRpb24iLCJsZXR0ZXJ0ZXN0IiwibW92ZURpcmVjdGlvbiIsIm1hdGNoIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZmlsdGVyIiwiY2kiLCJtb3ZlVXAiLCJtb3ZlRG93biIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0IiwiciIsIm5ld1NlbGVjdGVkIiwidG9nZ2xlU2hvd1NvbHV0aW9uIiwicmVzdWx0IiwicHJldldvcmQiLCJjdXJyV29yZCIsImNvdW50U3dhcHMiLCJhbGVydCIsImlzV29yZFZhbGlkIiwiZSIsIm1hcCIsImJvYXJkUm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFrQjtBQUFBOztBQUM3QixRQUFNQyxPQUFPLEdBQUcsQ0FBaEI7QUFDQSxRQUFNQyxPQUFPLEdBQUcsQ0FBaEI7QUFDQSxRQUFNQyxPQUFPLEdBQUksS0FBRCxHQUFvRSx1QkFBcEUsR0FBOEYsQ0FBOUc7QUFDQSxRQUFNQyxlQUFlLEdBQUcsa0JBQXhCO0FBQ0EsUUFBTUMsV0FBVyxHQUFHLG9CQUFwQjtBQUNBLFFBQU1DLGVBQWUsR0FBRyxxQkFBeEI7QUFDQSxRQUFNQyxRQUFRLEdBQUcsaUJBQWpCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHLGtCQUFsQjtBQUNBLFFBQU1DLFlBQVksR0FBRyxxQkFBckI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLCtDQUFRLENBQUMsSUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkYsK0NBQVEsQ0FBQyxLQUFELENBQXhDLENBWDZCLENBV29COztBQUNqRCxRQUFNO0FBQUEsT0FBQ0csUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJKLCtDQUFRLENBQUMsS0FBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDSyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ04sK0NBQVEsQ0FBQyxLQUFELENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNPLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDUiwrQ0FBUSxD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aEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURTLGdCQVFUO0FBQVEsbUJBQVMsRUFBQyxVQUFsQjtBQUE2QixpQkFBTyxFQUFFLE1BQU07QUFBQzZDLDhCQUFrQjtBQUFJLFdBQW5FO0FBQUEsb0JBQ00sR0FBRTVELFlBQVksR0FBRyxlQUFILEdBQXFCLGlCQUFrQjtBQUQzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTFDUixFQThDSyxDQUFDRSxZQUFELElBQWlCSixRQUFqQixpQkFBNkI7QUFBQSxpQ0FDMUI7QUFBUSxxQkFBUyxFQUFDLFVBQWxCO0FBQTZCLG1CQUFPLEVBQUUsTUFBTTtBQUFDK0MsMkJBQWE7QUFBSSxhQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUQwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTlDbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWxCUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBa0ZILENBclVEOztHQUFNL0QsTTs7S0FBQUEsTTtBQXVVTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MDI0NjZlYzIyN2IzMmQxYzhlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY291bnRTd2FwcywgaXNXb3JkVmFsaWQgfSBmcm9tICcuLi8uLi9saWIvd29yZGZ1bmN0aW9ucyc7XHJcblxyXG5jb25zdCBNb3JwaG8gPSAoe3NldFdoZXJldG99KSA9PiB7XHJcbiAgICBjb25zdCBudW1Sb3dzID0gNjtcclxuICAgIGNvbnN0IG51bUNvbHMgPSA1O1xyXG4gICAgY29uc3QgYmFzZXVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCcgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20nO1xyXG4gICAgY29uc3QgY3NzUHJlc2V0TGV0dGVyID0gXCJtb3JwaG9DZWxsU3RhdGljXCI7XHJcbiAgICBjb25zdCBjc3NOb0xldHRlciA9IFwibW9ycGhvQ2VsbE5vTGV0dGVyXCI7XHJcbiAgICBjb25zdCBjc3NTZWxlY3RlZENlbGwgPSBcIiBtb3JwaG9DZWxsU2VsZWN0ZWRcIjtcclxuICAgIGNvbnN0IGNzc0xhcnZhID0gXCJtb3JwaG9DZWxsTGFydmFcIjtcclxuICAgIGNvbnN0IGNzc0NvY29vbiA9IFwibW9ycGhvQ2VsbENvY29vblwiO1xyXG4gICAgY29uc3QgY3NzQnV0dGVyZmx5ID0gXCJtb3JwaG9DZWxsQnV0dGVyZmx5XCI7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtjaGVja2luZywgc2V0Q2hlY2tpbmddID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBTZXQgd2hlbiBjaGVja2luZyBzb2x1dGlvbiB0byBwcmV2ZW50IGZ1cnRoZXIgYWx0ZXJhdGlvbnNcclxuICAgIGNvbnN0IFtmaWxsZWRpbiwgc2V0RmlsbGVkaW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dTb2x1dGlvbiwgc2V0U2hvd1NvbHV0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwdXp6bGVTb2x2ZWQsIHNldFB1enpsZVNvbHZlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZmlyc3RXb3JkLCBzZXRGaXJzdFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2xhc3RXb3JkLCBzZXRMYXN0V29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbYm9hcmQsIHNldEJvYXJkXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoe3JvdzoxLCBjb2w6MH0pOyAvLyBOYXR1cmFsIHBsYWNlIHRvIHN0YXJ0IGVudGVyaW5nIGxldHRlcnNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SW5pdGlhbEJvYXJkKCk7XHJcbiAgICB9LFtdKTtcclxuICAgIGNvbnN0IHNldEluaXRpYWxCb2FyZCA9IGFzeW5jKCkgPT4geyAvLyBJbml0aWFsIGJvYXJkIG9mIGdpdmVuIHNpemVcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHNldENoZWNraW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRTaG93U29sdXRpb24oZmFsc2UpO1xyXG4gICAgICAgIHNldEZpbGxlZGluKGZhbHNlKTtcclxuICAgICAgICBzZXRQdXp6bGVTb2x2ZWQoZmFsc2UpO1xyXG4gICAgICAgIGxldCByb3dBcnJheSA9IFtdO1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHtiYXNldXJsfS9FTkFCTEUySz9tb3JwaG89dHJ1ZSZsZW49JHtudW1Db2xzfWA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgaWYgKCFkYXRhLm5vdGVzIHx8IGRhdGEubm90ZXMubGVuZ3RoID09PSAwKSB7IC8vIE9rIHJlc3VsdFxyXG4gICAgICAgICAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgbnVtUm93czsgcm93SW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93V29yZCA9IGRhdGEucHV6emxlW3Jvd0luZGV4XS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvd0luZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Rmlyc3RXb3JkKHJvd1dvcmQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyb3dJbmRleCA9PT0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMYXN0V29yZChyb3dXb3JkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd0xldHRlcnMgPSBbLi4uQXJyYXkuZnJvbShyb3dXb3JkKV07XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93RmlsbGVkSW4gPSByb3dJbmRleCA9PT0gMCB8fCByb3dJbmRleCA9PT0gbnVtUm93cyAtIDE7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBudW1Db2xzOyBjb2xJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGwgPSB7bGV0dGVyOic/Jyxzb2x1dGlvbjpyb3dMZXR0ZXJzW2NvbEluZGV4XSxjbGFzc05hbWU6Jz8nfTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocm93SW5kZXggPT09IDAgfHwgcm93SW5kZXggPT09IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwubGV0dGVyID0gcm93TGV0dGVyc1tjb2xJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gY3NzUHJlc2V0TGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwubGV0dGVyID0gJz8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9IGNzc05vTGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb2xBcnJheS5wdXNoKGNlbGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcm93QXJyYXkucHVzaCh7ZmlsbGVkaW46cm93RmlsbGVkSW4sIGNvbEFycmF5OmNvbEFycmF5fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Qm9hcmQocm93QXJyYXkpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkKHtyb3c6MSxjb2w6MH0pO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdGlvbiA9IChyb3dJbmRleCwgY29sSW5kZXgpID0+IHtcclxuICAgICAgICBpZiAocm93SW5kZXggPCAxIHx8IHJvd0luZGV4ID49IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbEluZGV4IDwgMCB8fCByb3dJbmRleCA+PSBudW1Db2xzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQoe3Jvdzpyb3dJbmRleCxjb2w6Y29sSW5kZXh9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJGMTJcIikge3JldHVybjt9XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoY2hlY2tpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBObyBtb2RlcyB3aGlsZSBjaGVja2luZyBzb2x1dGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHV6emxlU29sdmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gUHV6emxlIGFscmVhZHkgc29sdmVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhhbmRsZUlucHV0TGV0dGVyKGV2ZW50LmtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRMZXR0ZXIgPSAobGV0dGVyKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gc2VsZWN0ZWQucm93O1xyXG4gICAgICAgIGxldCBjb2xJbmRleCA9IHNlbGVjdGVkLmNvbDtcclxuICAgICAgICBpZiAocm93SW5kZXggPCAxIHx8IHJvd0luZGV4ID49IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbEluZGV4IDwgMCB8fCByb3dJbmRleCA+PSBudW1Db2xzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpbGxlZGluICYmIGxldHRlciA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIGNoZWNrU29sdXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbGV0dGVydGVzdCA9IC9eW0EtWmEtelxcP10kLzsgLy8gc2luZ2xlIGxldHRlciBvciBxdWVzdGlvbiBtYXJrIGtleSBwcmVzc2VkXHJcbiAgICAgICAgbGV0IG1vdmVEaXJlY3Rpb24gPSBcInJcIjsgLy8gRGVmYXVsdFxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiQmFja3NwYWNlXCIpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gXCI/XCI7XHJcbiAgICAgICAgICAgIG1vdmVEaXJlY3Rpb24gPSBcImxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJEZWxldGVcIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBcIj9cIjtcclxuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiQXJyb3dVcFwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IGJvYXJkW3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICBtb3ZlRGlyZWN0aW9uID0gXCJ1XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiQXJyb3dEb3duXCIpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gYm9hcmRbcm93SW5kZXhdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXI7XHJcbiAgICAgICAgICAgIG1vdmVEaXJlY3Rpb24gPSBcImRcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJBcnJvd0xlZnRcIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBib2FyZFtyb3dJbmRleF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA9IFwibFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIkFycm93UmlnaHRcIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBib2FyZFtyb3dJbmRleF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA9IFwiclwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyLm1hdGNoKGxldHRlcnRlc3QpKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IGxldHRlci50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByb3dBcnJheSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYm9hcmQpKTtcclxuICAgICAgICByb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlciA9IGxldHRlcjtcclxuICAgICAgICByb3dBcnJheVtyb3dJbmRleF0uZmlsbGVkaW4gPSAocm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5LmZpbHRlcigoY2VsbCkgPT4ge3JldHVybiBjZWxsLmxldHRlciA9PT0gXCI/XCI7fSkubGVuZ3RoID09PSAwKTtcclxuICAgICAgICBmb3IgKGxldCBjaSA9IDA7IGNpIDwgbnVtQ29sczsgY2krKykge1xyXG4gICAgICAgICAgICBpZiAocm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5W2NpXS5sZXR0ZXIgPT09IFwiP1wiKSB7XHJcbiAgICAgICAgICAgICAgICByb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXlbY2ldLmNsYXNzTmFtZSA9IGNzc05vTGV0dGVyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5W2NpXS5jbGFzc05hbWUgPSByb3dBcnJheVtyb3dJbmRleF0uZmlsbGVkaW4gPyBjc3NDb2Nvb24gOiBjc3NMYXJ2YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobW92ZURpcmVjdGlvbiA9PT0gXCJ1XCIpIHtcclxuICAgICAgICAgICAgbW92ZVVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb3ZlRGlyZWN0aW9uID09PSBcImRcIikge1xyXG4gICAgICAgICAgICBtb3ZlRG93bigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobW92ZURpcmVjdGlvbiA9PT0gXCJyXCIpIHtcclxuICAgICAgICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb3ZlRGlyZWN0aW9uID09PSBcImxcIikge1xyXG4gICAgICAgICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocm93QXJyYXkuZmlsdGVyKHIgPT4ge3JldHVybiAhci5maWxsZWRpbjt9KS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgLy8gQWxsIGxldHRlcnMgYXJlIGZpbGxlZCBpblxyXG4gICAgICAgICAgICBzZXRGaWxsZWRpbih0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Qm9hcmQocm93QXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vdmVVcCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6cm93SW5kZXgsY29sOmNvbEluZGV4fTtcclxuICAgICAgICBpZiAocm93SW5kZXggLSAxID4gMCkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleCAtIDE7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IGNvbEluZGV4O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IG51bVJvd3MgLSAyO1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleCAtIDEgPiAtMSA/IGNvbEluZGV4IC0gMSA6IG51bUNvbHMgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW92ZURvd24gPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gc2VsZWN0ZWQucm93O1xyXG4gICAgICAgIGxldCBjb2xJbmRleCA9IHNlbGVjdGVkLmNvbDtcclxuICAgICAgICBsZXQgbmV3U2VsZWN0ZWQgPSB7cm93OnJvd0luZGV4LGNvbDpjb2xJbmRleH07XHJcbiAgICAgICAgaWYgKHJvd0luZGV4ICsgMSA8IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4ICsgMTtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gMTtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXggKyAxIDwgbnVtQ29scyA/IGNvbEluZGV4ICsgMSA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGVkKG5ld1NlbGVjdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb3ZlUmlnaHQgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gc2VsZWN0ZWQucm93O1xyXG4gICAgICAgIGxldCBjb2xJbmRleCA9IHNlbGVjdGVkLmNvbDtcclxuICAgICAgICBsZXQgbmV3U2VsZWN0ZWQgPSB7cm93OjEsY29sOjB9O1xyXG4gICAgICAgIGlmIChjb2xJbmRleCArIDEgPCBudW1Db2xzKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4O1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleCArIDE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyb3dJbmRleCArIDEgPCBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleCArIDE7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGVkKG5ld1NlbGVjdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb3ZlTGVmdCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6bnVtUm93cy0yLGNvbDpudW1Db2xzLTF9O1xyXG4gICAgICAgIGlmIChjb2xJbmRleCAtIDEgPiAtMSkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleDtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXggLSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocm93SW5kZXggLSAxID4gMCkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleCAtIDE7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IG51bUNvbHMgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlU2hvd1NvbHV0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dTb2x1dGlvbighc2hvd1NvbHV0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVja1NvbHV0aW9uID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgc2V0Q2hlY2tpbmcodHJ1ZSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgZm9yKGxldCByb3dJbmRleCA9IDE7IHJlc3VsdCAmJiByb3dJbmRleCA8IG51bVJvd3M7IHJvd0luZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IHByZXZXb3JkID0gXCJcIjtcclxuICAgICAgICAgICAgbGV0IGN1cnJXb3JkID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IG51bUNvbHM7IGNvbEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIHByZXZXb3JkID0gcHJldldvcmQgKyBib2FyZFtyb3dJbmRleC0xXS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgY3VycldvcmQgPSBjdXJyV29yZCArIGJvYXJkW3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb3VudFN3YXBzKHByZXZXb3JkLCBjdXJyV29yZCkgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGAke3ByZXZXb3JkfSB0byAke2N1cnJXb3JkfSBpcyBub3QgYSB2YWxpZCBtb3ZlYCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJvd0luZGV4ICE9PSBudW1Sb3dzIC0xICYmICEgYXdhaXQgaXNXb3JkVmFsaWQoY3VycldvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChgJHtjdXJyV29yZH0gaXMgbm90IHZhbGlkYCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDaGVja2luZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0UHV6emxlU29sdmVkKHJlc3VsdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiIG9uS2V5RG93bj17KGUpID0+IHtoYW5kbGVLZXlEb3duKGUpO319IHRhYmluZGV4PXstMX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgTW9ycGhvXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nICYmIDxkaXYgY2xhc3NOYW1lPVwidHJFbXBoYXNpc1wiPkNyZWF0aW5nIHB1enpsZSwgcGxlYXNlIGJlIHBhdGllbnQuLi48L2Rpdj59XHJcbiAgICAgICAgICAgIHshbG9hZGluZyAmJiA8ZGl2IGNsYXNzTmFtZT17cHV6emxlU29sdmVkID8gXCJtb3JwaG9Tb2x2ZWREaXZcIiA6IFwibW9ycGhvRGl2XCJ9PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAge2JvYXJkLm1hcCgoYm9hcmRSb3csIHJvd0luZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YEJvYXJkUm93LiR7cm93SW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtib2FyZFJvdy5jb2xBcnJheS5tYXAoKGNlbGwsIGNvbEluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtgQm9hcmRDZWxsLiR7cm93SW5kZXh9LiR7Y29sSW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVTZWxlY3Rpb24ocm93SW5kZXgsY29sSW5kZXgpO319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bjb2wgbW9ycGhvQ2VsbCAke3Nob3dTb2x1dGlvbiA/IGNzc1ByZXNldExldHRlciA6IHB1enpsZVNvbHZlZCA/IGNzc0J1dHRlcmZseSA6IGNlbGwuY2xhc3NOYW1lICsgKHJvd0luZGV4ID09PSBzZWxlY3RlZC5yb3cgJiYgY29sSW5kZXggPT09IHNlbGVjdGVkLmNvbCA/IGNzc1NlbGVjdGVkQ2VsbCA6IFwiXCIpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93U29sdXRpb24gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2VsbC5zb2x1dGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2VsbC5sZXR0ZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeyFsb2FkaW5nICYmICFjaGVja2luZyAmJiAhcHV6emxlU29sdmVkICYmIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNoYW5nZSBvbmUgbGV0dGVyIGF0IGEgdGltZSB0byBnZXQgZnJvbSB7Zmlyc3RXb3JkfSB0byB7bGFzdFdvcmR9LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RWFjaCBpbnRlcmltIHdvcmQgbXVzdCBiZSBhIHZhbGlkIHdvcmQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vcnBob0tleWJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUFcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0EnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5BPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUJcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0InKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5CPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUNcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0MnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5DPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleURcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0QnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5EPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUVcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0UnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5FPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUZcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0YnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5GPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUdcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0cnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5HPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUhcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0gnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5IPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUlcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0knKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5JPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlKXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdKJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+SjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlLXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdLJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+SzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlMXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdMJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+TDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlNXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdNJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+TTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlOXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdOJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+TjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlPXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdPJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+TzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlQXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdQJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+UDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlRXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdRJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+UTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlSXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdSJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+UjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlTXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdTJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+UzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlUXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdUJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+VDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlVXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdVJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+VTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlWXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdWJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+VjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlXXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdXJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+VzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlYXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdYJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+WDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlZXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdZJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+WTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlaXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdaJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+WjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAge3B1enpsZVNvbHZlZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidHJFbXBoYXNpc1wiPlN1Y2Nlc3MhPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0SW5pdGlhbEJvYXJkKCk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR0VORVJBVEUgQU5PVEhFUiBQVVpaTEVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7dG9nZ2xlU2hvd1NvbHV0aW9uKCk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7c2hvd1NvbHV0aW9uID8gJ0hJREUgU09MVVRJT04nIDogJ1NIT1cgQSBTT0xVVElPTid9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHshcHV6emxlU29sdmVkICYmIGZpbGxlZGluICYmIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7Y2hlY2tTb2x1dGlvbigpO319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU1VCTUlUIFlPVVIgU09MVVRJT05cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9ycGhvOyJdLCJzb3VyY2VSb290IjoiIn0=