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
                lineNumber: 280,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: () => {
                  handleInputLetter('W');
                },
                className: "morphoKey",
                children: "W"
              }, "keyW", false, {
                fileName: _jsxFileName,
                lineNumber: 281,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: () => {
                  handleInputLetter('E');
                },
                className: "morphoKey",
                children: "E"
              }, "keyE", false, {
                fileName: _jsxFileName,
                lineNumber: 282,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: () => {
                  handleInputLetter('R');
                },
                className: "morphoKey",
                children: "R"
              }, "keyR", false, {
                fileName: _jsxFileName,
                lineNumber: 283,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: () => {
                  handleInputLetter('T');
                },
                className: "morphoKey",
                children: "T"
              }, "keyT", false, {
                fileName: _jsxFileName,
                lineNumber: 284,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: () => {
                  handleInputLetter('Y');
                },
                className: "morphoKey",
                children: "Y"
              }, "keyY", false, {
                fileName: _jsxFileName,
                lineNumber: 285,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: () => {
                  handleInputLetter('U');
                },
                className: "morphoKey",
                children: "U"
              }, "keyU", false, {
                fileName: _jsxFileName,
                lineNumber: 286,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: () => {
                  handleInputLetter('I');
                },
                className: "morphoKey",
                children: "I"
              }, "keyI", false, {
                fileName: _jsxFileName,
                lineNumber: 287,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: () => {
                  handleInputLetter('O');
                },
                className: "morphoKey",
                children: "O"
              }, "keyO", false, {
                fileName: _jsxFileName,
                lineNumber: 288,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: () => {
                  handleInputLetter('P');
                },
                className: "morphoKey",
                children: "P"
              }, "keyP", false, {
                fileName: _jsxFileName,
                lineNumber: 289,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 29
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
                lineNumber: 292,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: () => {
                  handleInputLetter('S');
                },
                className: "morphoKey",
                children: "S"
              }, "keyS", false, {
                fileName: _jsxFileName,
                lineNumber: 293,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: () => {
                  handleInputLetter('D');
                },
                className: "morphoKey",
                children: "D"
              }, "keyD", false, {
                fileName: _jsxFileName,
                lineNumber: 294,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: () => {
                  handleInputLetter('F');
                },
                className: "morphoKey",
                children: "F"
              }, "keyF", false, {
                fileName: _jsxFileName,
                lineNumber: 295,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: () => {
                  handleInputLetter('G');
                },
                className: "morphoKey",
                children: "G"
              }, "keyG", false, {
                fileName: _jsxFileName,
                lineNumber: 296,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: () => {
                  handleInputLetter('H');
                },
                className: "morphoKey",
                children: "H"
              }, "keyH", false, {
                fileName: _jsxFileName,
                lineNumber: 297,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: () => {
                  handleInputLetter('J');
                },
                className: "morphoKey",
                children: "J"
              }, "keyJ", false, {
                fileName: _jsxFileName,
                lineNumber: 298,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: () => {
                  handleInputLetter('K');
                },
                className: "morphoKey",
                children: "K"
              }, "keyK", false, {
                fileName: _jsxFileName,
                lineNumber: 299,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: () => {
                  handleInputLetter('L');
                },
                className: "morphoKey",
                children: "L"
              }, "keyL", false, {
                fileName: _jsxFileName,
                lineNumber: 300,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 29
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
                lineNumber: 303,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: () => {
                  handleInputLetter('X');
                },
                className: "morphoKey",
                children: "X"
              }, "keyX", false, {
                fileName: _jsxFileName,
                lineNumber: 304,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: () => {
                  handleInputLetter('C');
                },
                className: "morphoKey",
                children: "C"
              }, "keyC", false, {
                fileName: _jsxFileName,
                lineNumber: 305,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: () => {
                  handleInputLetter('V');
                },
                className: "morphoKey",
                children: "V"
              }, "keyV", false, {
                fileName: _jsxFileName,
                lineNumber: 306,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: () => {
                  handleInputLetter('B');
                },
                className: "morphoKey",
                children: "B"
              }, "keyB", false, {
                fileName: _jsxFileName,
                lineNumber: 307,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: () => {
                  handleInputLetter('N');
                },
                className: "morphoKey",
                children: "N"
              }, "keyN", false, {
                fileName: _jsxFileName,
                lineNumber: 308,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: () => {
                  handleInputLetter('M');
                },
                className: "morphoKey",
                children: "M"
              }, "keyM", false, {
                fileName: _jsxFileName,
                lineNumber: 309,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 302,
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
            lineNumber: 315,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "trButton",
            onClick: () => {
              setInitialBoard();
            },
            children: "GENERATE ANOTHER PUZZLE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 25
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton",
          onClick: () => {
            toggleShowSolution();
          },
          children: `${showSolution ? 'HIDE SOLUTION' : 'SHOW A SOLUTION'}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 321,
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
            lineNumber: 326,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 325,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9ycGhvL21vcnBoby5qcyJdLCJuYW1lcyI6WyJNb3JwaG8iLCJzZXRXaGVyZXRvIiwibnVtUm93cyIsIm51bUNvbHMiLCJiYXNldXJsIiwiY3NzUHJlc2V0TGV0dGVyIiwiY3NzTm9MZXR0ZXIiLCJjc3NTZWxlY3RlZENlbGwiLCJjc3NMYXJ2YSIsImNzc0NvY29vbiIsImNzc0J1dHRlcmZseSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJjaGVja2luZyIsInNldENoZWNraW5nIiwiZmlsbGVkaW4iLCJzZXRGaWxsZWRpbiIsInNob3dTb2x1dGlvbiIsInNldFNob3dTb2x1dGlvbiIsInB1enpsZVNvbHZlZCIsInNldFB1enpsZVNvbHZlZCIsImZpcnN0V29yZCIsInNldEZpcnN0V29yZCIsImxhc3RXb3JkIiwic2V0TGFzdFdvcmQiLCJib2FyZCIsInNldEJvYXJkIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInJvdyIsImNvbCIsInVzZUVmZmVjdCIsInNldEluaXRpYWxCb2FyZCIsInJvd0FycmF5IiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwibm90ZXMiLCJsZW5ndGgiLCJyb3dJbmRleCIsInJvd1dvcmQiLCJwdXp6bGUiLCJ0b1VwcGVyQ2FzZSIsInJvd0xldHRlcnMiLCJBcnJheSIsImZyb20iLCJyb3dGaWxsZWRJbiIsImNvbEFycmF5IiwiY29sSW5kZXgiLCJjZWxsIiwibGV0dGVyIiwic29sdXRpb24iLCJjbGFzc05hbWUiLCJwdXNoIiwiaGFuZGxlU2VsZWN0aW9uIiwiaGFuZGxlS2V5RG93biIsImV2ZW50Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVJbnB1dExldHRlciIsImNoZWNrU29sdXRpb24iLCJsZXR0ZXJ0ZXN0IiwibW92ZURpcmVjdGlvbiIsIm1hdGNoIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZmlsdGVyIiwiY2kiLCJtb3ZlVXAiLCJtb3ZlRG93biIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0IiwiciIsIm5ld1NlbGVjdGVkIiwidG9nZ2xlU2hvd1NvbHV0aW9uIiwicmVzdWx0IiwicHJldldvcmQiLCJjdXJyV29yZCIsImNvdW50U3dhcHMiLCJhbGVydCIsImlzV29yZFZhbGlkIiwiZSIsIm1hcCIsImJvYXJkUm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFrQjtBQUFBOztBQUM3QixRQUFNQyxPQUFPLEdBQUcsQ0FBaEI7QUFDQSxRQUFNQyxPQUFPLEdBQUcsQ0FBaEI7QUFDQSxRQUFNQyxPQUFPLEdBQUksS0FBRCxHQUFvRSx1QkFBcEUsR0FBOEYsQ0FBOUc7QUFDQSxRQUFNQyxlQUFlLEdBQUcsa0JBQXhCO0FBQ0EsUUFBTUMsV0FBVyxHQUFHLG9CQUFwQjtBQUNBLFFBQU1DLGVBQWUsR0FBRyxxQkFBeEI7QUFDQSxRQUFNQyxRQUFRLEdBQUcsaUJBQWpCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHLGtCQUFsQjtBQUNBLFFBQU1DLFlBQVksR0FBRyxxQkFBckI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLCtDQUFRLENBQUMsSUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkYsK0NBQVEsQ0FBQyxLQUFELENBQXhDLENBWDZCLENBV29COztBQUNqRCxRQUFNO0FBQUEsT0FBQ0csUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJKLCtDQUFRLENBQUMsS0FBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDSyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ04sK0NBQVEsQ0FBQyxLQUFELENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNPLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDUiwrQ0FBUSxD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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUQvQyxFQXVDSzFDLFlBQVksZ0JBQ1Q7QUFBQSxrQ0FDSTtBQUFJLHFCQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQVEscUJBQVMsRUFBQyxVQUFsQjtBQUE2QixtQkFBTyxFQUFFLE1BQU07QUFBQ2EsNkJBQWU7QUFBSSxhQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFMsZ0JBUVQ7QUFBUSxtQkFBUyxFQUFDLFVBQWxCO0FBQTZCLGlCQUFPLEVBQUUsTUFBTTtBQUFDNkMsOEJBQWtCO0FBQUksV0FBbkU7QUFBQSxvQkFDTSxHQUFFNUQsWUFBWSxHQUFHLGVBQUgsR0FBcUIsaUJBQWtCO0FBRDNEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBL0NSLEVBbURLLENBQUNFLFlBQUQsSUFBaUJKLFFBQWpCLGlCQUE2QjtBQUFBLGlDQUMxQjtBQUFRLHFCQUFTLEVBQUMsVUFBbEI7QUFBNkIsbUJBQU8sRUFBRSxNQUFNO0FBQUMrQywyQkFBYTtBQUFJLGFBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRDBCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbkRsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbEJTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUF1RkgsQ0ExVUQ7O0dBQU0vRCxNOztLQUFBQSxNO0FBNFVOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkwMGU1YTQ3MzZkMGMxYzhlMzljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb3VudFN3YXBzLCBpc1dvcmRWYWxpZCB9IGZyb20gJy4uLy4uL2xpYi93b3JkZnVuY3Rpb25zJztcclxuXHJcbmNvbnN0IE1vcnBobyA9ICh7c2V0V2hlcmV0b30pID0+IHtcclxuICAgIGNvbnN0IG51bVJvd3MgPSA2O1xyXG4gICAgY29uc3QgbnVtQ29scyA9IDU7XHJcbiAgICBjb25zdCBiYXNldXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbSc7XHJcbiAgICBjb25zdCBjc3NQcmVzZXRMZXR0ZXIgPSBcIm1vcnBob0NlbGxTdGF0aWNcIjtcclxuICAgIGNvbnN0IGNzc05vTGV0dGVyID0gXCJtb3JwaG9DZWxsTm9MZXR0ZXJcIjtcclxuICAgIGNvbnN0IGNzc1NlbGVjdGVkQ2VsbCA9IFwiIG1vcnBob0NlbGxTZWxlY3RlZFwiO1xyXG4gICAgY29uc3QgY3NzTGFydmEgPSBcIm1vcnBob0NlbGxMYXJ2YVwiO1xyXG4gICAgY29uc3QgY3NzQ29jb29uID0gXCJtb3JwaG9DZWxsQ29jb29uXCI7XHJcbiAgICBjb25zdCBjc3NCdXR0ZXJmbHkgPSBcIm1vcnBob0NlbGxCdXR0ZXJmbHlcIjtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2NoZWNraW5nLCBzZXRDaGVja2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIFNldCB3aGVuIGNoZWNraW5nIHNvbHV0aW9uIHRvIHByZXZlbnQgZnVydGhlciBhbHRlcmF0aW9uc1xyXG4gICAgY29uc3QgW2ZpbGxlZGluLCBzZXRGaWxsZWRpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd1NvbHV0aW9uLCBzZXRTaG93U29sdXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3B1enpsZVNvbHZlZCwgc2V0UHV6emxlU29sdmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtmaXJzdFdvcmQsIHNldEZpcnN0V29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbGFzdFdvcmQsIHNldExhc3RXb3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtib2FyZCwgc2V0Qm9hcmRdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSh7cm93OjEsIGNvbDowfSk7IC8vIE5hdHVyYWwgcGxhY2UgdG8gc3RhcnQgZW50ZXJpbmcgbGV0dGVyc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRJbml0aWFsQm9hcmQoKTtcclxuICAgIH0sW10pO1xyXG4gICAgY29uc3Qgc2V0SW5pdGlhbEJvYXJkID0gYXN5bmMoKSA9PiB7IC8vIEluaXRpYWwgYm9hcmQgb2YgZ2l2ZW4gc2l6ZVxyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgc2V0Q2hlY2tpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldFNob3dTb2x1dGlvbihmYWxzZSk7XHJcbiAgICAgICAgc2V0RmlsbGVkaW4oZmFsc2UpO1xyXG4gICAgICAgIHNldFB1enpsZVNvbHZlZChmYWxzZSk7XHJcbiAgICAgICAgbGV0IHJvd0FycmF5ID0gW107XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2Jhc2V1cmx9L0VOQUJMRTJLP21vcnBobz10cnVlJmxlbj0ke251bUNvbHN9YDtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBpZiAoIWRhdGEubm90ZXMgfHwgZGF0YS5ub3Rlcy5sZW5ndGggPT09IDApIHsgLy8gT2sgcmVzdWx0XHJcbiAgICAgICAgICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBudW1Sb3dzOyByb3dJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3dXb3JkID0gZGF0YS5wdXp6bGVbcm93SW5kZXhdLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93SW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRGaXJzdFdvcmQocm93V29yZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvd0luZGV4ID09PSBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExhc3RXb3JkKHJvd1dvcmQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93TGV0dGVycyA9IFsuLi5BcnJheS5mcm9tKHJvd1dvcmQpXTtcclxuICAgICAgICAgICAgICAgIGxldCByb3dGaWxsZWRJbiA9IHJvd0luZGV4ID09PSAwIHx8IHJvd0luZGV4ID09PSBudW1Sb3dzIC0gMTtcclxuICAgICAgICAgICAgICAgIGxldCBjb2xBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IG51bUNvbHM7IGNvbEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IHtsZXR0ZXI6Jz8nLHNvbHV0aW9uOnJvd0xldHRlcnNbY29sSW5kZXhdLGNsYXNzTmFtZTonPyd9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3dJbmRleCA9PT0gMCB8fCByb3dJbmRleCA9PT0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5sZXR0ZXIgPSByb3dMZXR0ZXJzW2NvbEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBjc3NQcmVzZXRMZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5sZXR0ZXIgPSAnPyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gY3NzTm9MZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbEFycmF5LnB1c2goY2VsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByb3dBcnJheS5wdXNoKHtmaWxsZWRpbjpyb3dGaWxsZWRJbiwgY29sQXJyYXk6Y29sQXJyYXl9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRCb2FyZChyb3dBcnJheSk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQoe3JvdzoxLGNvbDowfSk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0aW9uID0gKHJvd0luZGV4LCBjb2xJbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChyb3dJbmRleCA8IDEgfHwgcm93SW5kZXggPj0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sSW5kZXggPCAwIHx8IHJvd0luZGV4ID49IG51bUNvbHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZCh7cm93OnJvd0luZGV4LGNvbDpjb2xJbmRleH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkYxMlwiKSB7cmV0dXJuO31cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChjaGVja2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIE5vIG1vZGVzIHdoaWxlIGNoZWNraW5nIHNvbHV0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwdXp6bGVTb2x2ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBQdXp6bGUgYWxyZWFkeSBzb2x2ZWRcclxuICAgICAgICB9XHJcbiAgICAgICAgaGFuZGxlSW5wdXRMZXR0ZXIoZXZlbnQua2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dExldHRlciA9IChsZXR0ZXIpID0+IHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGlmIChyb3dJbmRleCA8IDEgfHwgcm93SW5kZXggPj0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sSW5kZXggPCAwIHx8IHJvd0luZGV4ID49IG51bUNvbHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmlsbGVkaW4gJiYgbGV0dGVyID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgY2hlY2tTb2x1dGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsZXR0ZXJ0ZXN0ID0gL15bQS1aYS16XFw/XSQvOyAvLyBzaW5nbGUgbGV0dGVyIG9yIHF1ZXN0aW9uIG1hcmsga2V5IHByZXNzZWRcclxuICAgICAgICBsZXQgbW92ZURpcmVjdGlvbiA9IFwiclwiOyAvLyBEZWZhdWx0XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJCYWNrc3BhY2VcIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBcIj9cIjtcclxuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA9IFwibFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIkRlbGV0ZVwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IFwiP1wiO1xyXG4gICAgICAgICAgICBtb3ZlRGlyZWN0aW9uID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJBcnJvd1VwXCIpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gYm9hcmRbcm93SW5kZXhdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXI7XHJcbiAgICAgICAgICAgIG1vdmVEaXJlY3Rpb24gPSBcInVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJBcnJvd0Rvd25cIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBib2FyZFtyb3dJbmRleF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA9IFwiZFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIkFycm93TGVmdFwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IGJvYXJkW3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICBtb3ZlRGlyZWN0aW9uID0gXCJsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiQXJyb3dSaWdodFwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IGJvYXJkW3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICBtb3ZlRGlyZWN0aW9uID0gXCJyXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIubWF0Y2gobGV0dGVydGVzdCkpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJvd0FycmF5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShib2FyZCkpO1xyXG4gICAgICAgIHJvd0FycmF5W3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyID0gbGV0dGVyO1xyXG4gICAgICAgIHJvd0FycmF5W3Jvd0luZGV4XS5maWxsZWRpbiA9IChyb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXkuZmlsdGVyKChjZWxsKSA9PiB7cmV0dXJuIGNlbGwubGV0dGVyID09PSBcIj9cIjt9KS5sZW5ndGggPT09IDApO1xyXG4gICAgICAgIGZvciAobGV0IGNpID0gMDsgY2kgPCBudW1Db2xzOyBjaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChyb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXlbY2ldLmxldHRlciA9PT0gXCI/XCIpIHtcclxuICAgICAgICAgICAgICAgIHJvd0FycmF5W3Jvd0luZGV4XS5jb2xBcnJheVtjaV0uY2xhc3NOYW1lID0gY3NzTm9MZXR0ZXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXlbY2ldLmNsYXNzTmFtZSA9IHJvd0FycmF5W3Jvd0luZGV4XS5maWxsZWRpbiA/IGNzc0NvY29vbiA6IGNzc0xhcnZhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb3ZlRGlyZWN0aW9uID09PSBcInVcIikge1xyXG4gICAgICAgICAgICBtb3ZlVXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vdmVEaXJlY3Rpb24gPT09IFwiZFwiKSB7XHJcbiAgICAgICAgICAgIG1vdmVEb3duKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb3ZlRGlyZWN0aW9uID09PSBcInJcIikge1xyXG4gICAgICAgICAgICBtb3ZlUmlnaHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vdmVEaXJlY3Rpb24gPT09IFwibFwiKSB7XHJcbiAgICAgICAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyb3dBcnJheS5maWx0ZXIociA9PiB7cmV0dXJuICFyLmZpbGxlZGluO30pLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAvLyBBbGwgbGV0dGVycyBhcmUgZmlsbGVkIGluXHJcbiAgICAgICAgICAgIHNldEZpbGxlZGluKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRCb2FyZChyb3dBcnJheSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW92ZVVwID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCByb3dJbmRleCA9IHNlbGVjdGVkLnJvdztcclxuICAgICAgICBsZXQgY29sSW5kZXggPSBzZWxlY3RlZC5jb2w7XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGVkID0ge3Jvdzpyb3dJbmRleCxjb2w6Y29sSW5kZXh9O1xyXG4gICAgICAgIGlmIChyb3dJbmRleCAtIDEgPiAwKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4IC0gMTtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gbnVtUm93cyAtIDI7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IGNvbEluZGV4IC0gMSA+IC0xID8gY29sSW5kZXggLSAxIDogbnVtQ29scyAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGVkKG5ld1NlbGVjdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb3ZlRG93biA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6cm93SW5kZXgsY29sOmNvbEluZGV4fTtcclxuICAgICAgICBpZiAocm93SW5kZXggKyAxIDwgbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gcm93SW5kZXggKyAxO1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSAxO1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleCArIDEgPCBudW1Db2xzID8gY29sSW5kZXggKyAxIDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vdmVSaWdodCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6MSxjb2w6MH07XHJcbiAgICAgICAgaWYgKGNvbEluZGV4ICsgMSA8IG51bUNvbHMpIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gcm93SW5kZXg7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IGNvbEluZGV4ICsgMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJvd0luZGV4ICsgMSA8IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4ICsgMTtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vdmVMZWZ0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCByb3dJbmRleCA9IHNlbGVjdGVkLnJvdztcclxuICAgICAgICBsZXQgY29sSW5kZXggPSBzZWxlY3RlZC5jb2w7XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGVkID0ge3JvdzpudW1Sb3dzLTIsY29sOm51bUNvbHMtMX07XHJcbiAgICAgICAgaWYgKGNvbEluZGV4IC0gMSA+IC0xKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4O1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleCAtIDE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyb3dJbmRleCAtIDEgPiAwKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4IC0gMTtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gbnVtQ29scyAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGVkKG5ld1NlbGVjdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2dnbGVTaG93U29sdXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd1NvbHV0aW9uKCFzaG93U29sdXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoZWNrU29sdXRpb24gPSBhc3luYygpID0+IHtcclxuICAgICAgICBzZXRDaGVja2luZyh0cnVlKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICBmb3IobGV0IHJvd0luZGV4ID0gMTsgcmVzdWx0ICYmIHJvd0luZGV4IDwgbnVtUm93czsgcm93SW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgcHJldldvcmQgPSBcIlwiO1xyXG4gICAgICAgICAgICBsZXQgY3VycldvcmQgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgbnVtQ29sczsgY29sSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgcHJldldvcmQgPSBwcmV2V29yZCArIGJvYXJkW3Jvd0luZGV4LTFdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICBjdXJyV29yZCA9IGN1cnJXb3JkICsgYm9hcmRbcm93SW5kZXhdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvdW50U3dhcHMocHJldldvcmQsIGN1cnJXb3JkKSAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYCR7cHJldldvcmR9IHRvICR7Y3VycldvcmR9IGlzIG5vdCBhIHZhbGlkIG1vdmVgKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcm93SW5kZXggIT09IG51bVJvd3MgLTEgJiYgISBhd2FpdCBpc1dvcmRWYWxpZChjdXJyV29yZCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGAke2N1cnJXb3JkfSBpcyBub3QgdmFsaWRgKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldENoZWNraW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRQdXp6bGVTb2x2ZWQocmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJCYWNrZ3JvdW5kXCIgb25LZXlEb3duPXsoZSkgPT4ge2hhbmRsZUtleURvd24oZSk7fX0gdGFiaW5kZXg9ey0xfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBNb3JwaG9cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2xvYWRpbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJ0ckVtcGhhc2lzXCI+Q3JlYXRpbmcgcHV6emxlLCBwbGVhc2UgYmUgcGF0aWVudC4uLjwvZGl2Pn1cclxuICAgICAgICAgICAgeyFsb2FkaW5nICYmIDxkaXYgY2xhc3NOYW1lPXtwdXp6bGVTb2x2ZWQgPyBcIm1vcnBob1NvbHZlZERpdlwiIDogXCJtb3JwaG9EaXZcIn0+XHJcbiAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICB7Ym9hcmQubWFwKChib2FyZFJvdywgcm93SW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgQm9hcmRSb3cuJHtyb3dJbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JvYXJkUm93LmNvbEFycmF5Lm1hcCgoY2VsbCwgY29sSW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2BCb2FyZENlbGwuJHtyb3dJbmRleH0uJHtjb2xJbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge2hhbmRsZVNlbGVjdGlvbihyb3dJbmRleCxjb2xJbmRleCk7fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbCBtb3JwaG9DZWxsICR7c2hvd1NvbHV0aW9uID8gY3NzUHJlc2V0TGV0dGVyIDogcHV6emxlU29sdmVkID8gY3NzQnV0dGVyZmx5IDogY2VsbC5jbGFzc05hbWUgKyAocm93SW5kZXggPT09IHNlbGVjdGVkLnJvdyAmJiBjb2xJbmRleCA9PT0gc2VsZWN0ZWQuY29sID8gY3NzU2VsZWN0ZWRDZWxsIDogXCJcIil9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dTb2x1dGlvbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjZWxsLnNvbHV0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjZWxsLmxldHRlcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgICAgICAgICB7IWxvYWRpbmcgJiYgIWNoZWNraW5nICYmICFwdXp6bGVTb2x2ZWQgJiYgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2hhbmdlIG9uZSBsZXR0ZXIgYXQgYSB0aW1lIHRvIGdldCBmcm9tIHtmaXJzdFdvcmR9IHRvIHtsYXN0V29yZH0uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5FYWNoIGludGVyaW0gd29yZCBtdXN0IGJlIGEgdmFsaWQgd29yZC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9ycGhvS2V5Ym9hcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9ycGhvS2V5cm93MVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5UVwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignUScpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlE8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVdcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1cnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5XPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlFXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdFJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+RTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5UlwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignUicpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVRcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1QnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5UPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlZXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdZJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+WTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5VVwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignVScpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUlcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0knKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5JPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlPXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdPJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+TzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5UFwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignUCcpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3JwaG9LZXlyb3cyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlBXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdBJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+QTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5U1wiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignUycpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleURcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0QnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5EPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlGXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdGJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+RjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5R1wiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignRycpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPkc8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUhcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0gnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5IPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlKXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdKJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+SjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5S1wiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignSycpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPks8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUxcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0wnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5MPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9ycGhvS2V5cm93M1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5WlwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignWicpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlo8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVhcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1gnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5YPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlDXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdDJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+QzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5VlwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignVicpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlY8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUJcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0InKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5CPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlOXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdOJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+TjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5TVwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignTScpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPk08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAge3B1enpsZVNvbHZlZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidHJFbXBoYXNpc1wiPlN1Y2Nlc3MhPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0SW5pdGlhbEJvYXJkKCk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR0VORVJBVEUgQU5PVEhFUiBQVVpaTEVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7dG9nZ2xlU2hvd1NvbHV0aW9uKCk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7c2hvd1NvbHV0aW9uID8gJ0hJREUgU09MVVRJT04nIDogJ1NIT1cgQSBTT0xVVElPTid9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHshcHV6emxlU29sdmVkICYmIGZpbGxlZGluICYmIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7Y2hlY2tTb2x1dGlvbigpO319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU1VCTUlUIFlPVVIgU09MVVRJT05cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9ycGhvOyJdLCJzb3VyY2VSb290IjoiIn0=