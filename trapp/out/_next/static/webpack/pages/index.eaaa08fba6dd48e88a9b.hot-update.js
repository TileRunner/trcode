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

      let newSelected = {
        row: selected.row + 1,
        col: 0
      };
      setSelected(newSelected);
      setBoard(newBoard);
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
    tabIndex: -1,
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
          lineNumber: 293,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 13
    }, undefined), loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trEmphasis",
      children: "Creating puzzle, please be patient..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 25
    }, undefined), !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: puzzleSolved ? "morphoSolvedDiv" : "morphoDiv",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
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
                lineNumber: 306,
                columnNumber: 37
              }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: cell.letter
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 308,
                columnNumber: 37
              }, undefined)
            }, `BoardCell.${rowIndex}.${colIndex}`, false, {
              fileName: _jsxFileName,
              lineNumber: 302,
              columnNumber: 29
            }, undefined))
          }, `BoardRow.${rowIndex}`, false, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 21
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 24
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 298,
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
                lineNumber: 351,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: () => {
                  copyUpLetter();
                },
                className: "morphoCopyupKey",
                children: "COPY UP"
              }, "keyCopyup", false, {
                fileName: _jsxFileName,
                lineNumber: 352,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 350,
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
                lineNumber: 355,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 354,
              columnNumber: 59
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 317,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Change one letter at a time to get from ", firstWord, " to ", lastWord, ". Each interim word must be a valid word."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 360,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "COPY DOWN copies a letter down from the row above. COPY UP copies a letter up from the bottom row."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 362,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Click a letter on the bottom row to use it as the swap on the selected row."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 364,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 64
        }, undefined), puzzleSolved ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "trEmphasis",
            children: "Success!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 368,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "trButton",
            onClick: () => {
              setInitialBoard();
            },
            children: "GENERATE ANOTHER PUZZLE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 369,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 25
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton",
          onClick: () => {
            toggleShowSolution();
          },
          children: `${showSolution ? 'HIDE SOLUTION' : 'SHOW A SOLUTION'}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 26
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 289,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9ycGhvL21vcnBoby5qcyJdLCJuYW1lcyI6WyJNb3JwaG8iLCJzZXRXaGVyZXRvIiwibnVtUm93cyIsIm51bUNvbHMiLCJiYXNldXJsIiwiY3NzUHJlc2V0TGV0dGVyIiwiY3NzTm9MZXR0ZXIiLCJjc3NTZWxlY3RlZENlbGwiLCJjc3NMYXJ2YSIsImNzc0NvY29vbiIsImNzc0J1dHRlcmZseSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJjaGVja2luZyIsInNldENoZWNraW5nIiwiZmlsbGVkaW4iLCJzZXRGaWxsZWRpbiIsInNob3dTb2x1dGlvbiIsInNldFNob3dTb2x1dGlvbiIsInB1enpsZVNvbHZlZCIsInNldFB1enpsZVNvbHZlZCIsImZpcnN0V29yZCIsInNldEZpcnN0V29yZCIsImxhc3RXb3JkIiwic2V0TGFzdFdvcmQiLCJib2FyZCIsInNldEJvYXJkIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInJvdyIsImNvbCIsInVzZUVmZmVjdCIsInNldEluaXRpYWxCb2FyZCIsInJvd0FycmF5IiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwibm90ZXMiLCJsZW5ndGgiLCJyb3dJbmRleCIsInJvd1dvcmQiLCJwdXp6bGUiLCJ0b1VwcGVyQ2FzZSIsInJvd0xldHRlcnMiLCJBcnJheSIsImZyb20iLCJyb3dGaWxsZWRJbiIsImNvbEFycmF5IiwiY29sSW5kZXgiLCJjZWxsIiwibGV0dGVyIiwic29sdXRpb24iLCJjbGFzc05hbWUiLCJwdXNoIiwiaGFuZGxlU2VsZWN0aW9uIiwibmV3Qm9hcmQiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJjaSIsIm5ld1NlbGVjdGVkIiwiaGFuZGxlS2V5RG93biIsImV2ZW50Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVJbnB1dExldHRlciIsImNvcHlEb3duTGV0dGVyIiwiY29weVVwTGV0dGVyIiwiY2hlY2tTb2x1dGlvbiIsImxldHRlcnRlc3QiLCJtb3ZlRGlyZWN0aW9uIiwibWF0Y2giLCJmaWx0ZXIiLCJtb3ZlVXAiLCJtb3ZlRG93biIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0IiwiciIsInRvZ2dsZVNob3dTb2x1dGlvbiIsInJlc3VsdCIsInByZXZXb3JkIiwiY3VycldvcmQiLCJjb3VudFN3YXBzIiwiYWxlcnQiLCJpc1dvcmRWYWxpZCIsImUiLCJtYXAiLCJib2FyZFJvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBa0I7QUFBQTs7QUFDN0IsUUFBTUMsT0FBTyxHQUFHLENBQWhCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHLENBQWhCO0FBQ0EsUUFBTUMsT0FBTyxHQUFJLEtBQUQsR0FBb0UsdUJBQXBFLEdBQThGLENBQTlHO0FBQ0EsUUFBTUMsZUFBZSxHQUFHLGtCQUF4QjtBQUNBLFFBQU1DLFdBQVcsR0FBRyxvQkFBcEI7QUFDQSxRQUFNQyxlQUFlLEdBQUcscUJBQXhCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLGlCQUFqQjtBQUNBLFFBQU1DLFNBQVMsR0FBRyxrQkFBbEI7QUFDQSxRQUFNQyxZQUFZLEdBQUcscUJBQXJCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQywrQ0FBUSxDQUFDLElBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJGLCtDQUFRLENBQUMsS0FBRCxDQUF4QyxDQVg2QixDQVdvQjs7QUFDakQsUUFBTTtBQUFBLE9BQUNHLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCSiwrQ0FBUSxDQUFDLEtBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NOLCtDQUFRLENBQUMsS0FBRCxDQUFoRDtBQUNBLFFBQU07QUFB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OiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lYWFhMDhmYmE2ZGQ0OGU4OGE5Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY291bnRTd2FwcywgaXNXb3JkVmFsaWQgfSBmcm9tICcuLi8uLi9saWIvd29yZGZ1bmN0aW9ucyc7XHJcblxyXG5jb25zdCBNb3JwaG8gPSAoe3NldFdoZXJldG99KSA9PiB7XHJcbiAgICBjb25zdCBudW1Sb3dzID0gNjtcclxuICAgIGNvbnN0IG51bUNvbHMgPSA1O1xyXG4gICAgY29uc3QgYmFzZXVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCcgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20nO1xyXG4gICAgY29uc3QgY3NzUHJlc2V0TGV0dGVyID0gXCJtb3JwaG9DZWxsU3RhdGljXCI7XHJcbiAgICBjb25zdCBjc3NOb0xldHRlciA9IFwibW9ycGhvQ2VsbE5vTGV0dGVyXCI7XHJcbiAgICBjb25zdCBjc3NTZWxlY3RlZENlbGwgPSBcIiBtb3JwaG9DZWxsU2VsZWN0ZWRcIjtcclxuICAgIGNvbnN0IGNzc0xhcnZhID0gXCJtb3JwaG9DZWxsTGFydmFcIjtcclxuICAgIGNvbnN0IGNzc0NvY29vbiA9IFwibW9ycGhvQ2VsbENvY29vblwiO1xyXG4gICAgY29uc3QgY3NzQnV0dGVyZmx5ID0gXCJtb3JwaG9DZWxsQnV0dGVyZmx5XCI7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtjaGVja2luZywgc2V0Q2hlY2tpbmddID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBTZXQgd2hlbiBjaGVja2luZyBzb2x1dGlvbiB0byBwcmV2ZW50IGZ1cnRoZXIgYWx0ZXJhdGlvbnNcclxuICAgIGNvbnN0IFtmaWxsZWRpbiwgc2V0RmlsbGVkaW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dTb2x1dGlvbiwgc2V0U2hvd1NvbHV0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwdXp6bGVTb2x2ZWQsIHNldFB1enpsZVNvbHZlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZmlyc3RXb3JkLCBzZXRGaXJzdFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2xhc3RXb3JkLCBzZXRMYXN0V29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbYm9hcmQsIHNldEJvYXJkXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoe3JvdzoxLCBjb2w6MH0pOyAvLyBOYXR1cmFsIHBsYWNlIHRvIHN0YXJ0IGVudGVyaW5nIGxldHRlcnNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SW5pdGlhbEJvYXJkKCk7XHJcbiAgICB9LFtdKTtcclxuICAgIGNvbnN0IHNldEluaXRpYWxCb2FyZCA9IGFzeW5jKCkgPT4geyAvLyBJbml0aWFsIGJvYXJkIG9mIGdpdmVuIHNpemVcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHNldENoZWNraW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRTaG93U29sdXRpb24oZmFsc2UpO1xyXG4gICAgICAgIHNldEZpbGxlZGluKGZhbHNlKTtcclxuICAgICAgICBzZXRQdXp6bGVTb2x2ZWQoZmFsc2UpO1xyXG4gICAgICAgIGxldCByb3dBcnJheSA9IFtdO1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHtiYXNldXJsfS9FTkFCTEUySz9tb3JwaG89dHJ1ZSZsZW49JHtudW1Db2xzfWA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgaWYgKCFkYXRhLm5vdGVzIHx8IGRhdGEubm90ZXMubGVuZ3RoID09PSAwKSB7IC8vIE9rIHJlc3VsdFxyXG4gICAgICAgICAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgbnVtUm93czsgcm93SW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93V29yZCA9IGRhdGEucHV6emxlW3Jvd0luZGV4XS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvd0luZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Rmlyc3RXb3JkKHJvd1dvcmQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyb3dJbmRleCA9PT0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMYXN0V29yZChyb3dXb3JkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd0xldHRlcnMgPSBbLi4uQXJyYXkuZnJvbShyb3dXb3JkKV07XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93RmlsbGVkSW4gPSByb3dJbmRleCA9PT0gMCB8fCByb3dJbmRleCA9PT0gbnVtUm93cyAtIDE7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBudW1Db2xzOyBjb2xJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGwgPSB7bGV0dGVyOic/Jyxzb2x1dGlvbjpyb3dMZXR0ZXJzW2NvbEluZGV4XSxjbGFzc05hbWU6Jz8nfTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocm93SW5kZXggPT09IDAgfHwgcm93SW5kZXggPT09IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwubGV0dGVyID0gcm93TGV0dGVyc1tjb2xJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gY3NzUHJlc2V0TGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwubGV0dGVyID0gJz8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9IGNzc05vTGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb2xBcnJheS5wdXNoKGNlbGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcm93QXJyYXkucHVzaCh7ZmlsbGVkaW46cm93RmlsbGVkSW4sIGNvbEFycmF5OmNvbEFycmF5fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Qm9hcmQocm93QXJyYXkpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkKHtyb3c6MSxjb2w6MH0pO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdGlvbiA9IChyb3dJbmRleCwgY29sSW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoY29sSW5kZXggPCAwIHx8IGNvbEluZGV4ID49IG51bUNvbHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocm93SW5kZXggPT09IG51bVJvd3MgLSAxICYmIHNlbGVjdGVkLnJvdyA+IDAgJiYgc2VsZWN0ZWQucm93IDwgbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgLy8gSWYgdGhleSBjbGljayBvbiBhIGJvdHRvbSByb3cgdGlsZSB0aGVuIGNvcHkgaXQgdXAgYW5kIGNvcHkgZG93biB0aGUgcmVzdCBvZiB0aGUgcm93XHJcbiAgICAgICAgICAgIGxldCBuZXdCb2FyZCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYm9hcmQpKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgY2kgPSAwOyBjaSA8IG51bUNvbHM7IGNpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaSA9PT0gY29sSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBjb2x1bW4gdGhleSBjbGlja2VkIG9uXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Qm9hcmRbc2VsZWN0ZWQucm93XS5jb2xBcnJheVtjaV0ubGV0dGVyID0gbmV3Qm9hcmRbbnVtUm93cy0xXS5jb2xBcnJheVtjaV0ubGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdCb2FyZFtzZWxlY3RlZC5yb3ddLmNvbEFycmF5W2NpXS5sZXR0ZXIgPSBuZXdCb2FyZFtzZWxlY3RlZC5yb3cgLSAxXS5jb2xBcnJheVtjaV0ubGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmV3Qm9hcmRbc2VsZWN0ZWQucm93XS5jb2xBcnJheVtjaV0uY2xhc3NOYW1lID0gY3NzQ29jb29uOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6c2VsZWN0ZWQucm93KzEsY29sOjB9O1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIHNldEJvYXJkKG5ld0JvYXJkKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocm93SW5kZXggPCAxIHx8IHJvd0luZGV4ID49IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQoe3Jvdzpyb3dJbmRleCxjb2w6Y29sSW5kZXh9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJGMTJcIikge3JldHVybjt9XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoY2hlY2tpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBObyBtb2RlcyB3aGlsZSBjaGVja2luZyBzb2x1dGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHV6emxlU29sdmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gUHV6emxlIGFscmVhZHkgc29sdmVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhhbmRsZUlucHV0TGV0dGVyKGV2ZW50LmtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29weURvd25MZXR0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gc2VsZWN0ZWQucm93O1xyXG4gICAgICAgIGxldCBjb2xJbmRleCA9IHNlbGVjdGVkLmNvbDtcclxuICAgICAgICBpZiAocm93SW5kZXggPCAxIHx8IHJvd0luZGV4ID49IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbEluZGV4IDwgMCB8fCByb3dJbmRleCA+PSBudW1Db2xzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGFuZGxlSW5wdXRMZXR0ZXIoYm9hcmRbcm93SW5kZXgtMV0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGNvcHlVcExldHRlciA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGlmIChyb3dJbmRleCA8IDEgfHwgcm93SW5kZXggPj0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sSW5kZXggPCAwIHx8IHJvd0luZGV4ID49IG51bUNvbHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoYW5kbGVJbnB1dExldHRlcihib2FyZFtudW1Sb3dzLTFdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dExldHRlciA9IChsZXR0ZXIpID0+IHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGlmIChyb3dJbmRleCA8IDEgfHwgcm93SW5kZXggPj0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sSW5kZXggPCAwIHx8IHJvd0luZGV4ID49IG51bUNvbHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmlsbGVkaW4gJiYgbGV0dGVyID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgY2hlY2tTb2x1dGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsZXR0ZXJ0ZXN0ID0gL15bQS1aYS16XFw/XSQvOyAvLyBzaW5nbGUgbGV0dGVyIG9yIHF1ZXN0aW9uIG1hcmsga2V5IHByZXNzZWRcclxuICAgICAgICBsZXQgbW92ZURpcmVjdGlvbiA9IFwiclwiOyAvLyBEZWZhdWx0XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJCYWNrc3BhY2VcIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBcIj9cIjtcclxuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA9IFwibFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIkRlbGV0ZVwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IFwiP1wiO1xyXG4gICAgICAgICAgICBtb3ZlRGlyZWN0aW9uID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJBcnJvd1VwXCIpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gYm9hcmRbcm93SW5kZXhdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXI7XHJcbiAgICAgICAgICAgIG1vdmVEaXJlY3Rpb24gPSBcInVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJBcnJvd0Rvd25cIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBib2FyZFtyb3dJbmRleF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA9IFwiZFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIkFycm93TGVmdFwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IGJvYXJkW3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICBtb3ZlRGlyZWN0aW9uID0gXCJsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiQXJyb3dSaWdodFwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IGJvYXJkW3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICBtb3ZlRGlyZWN0aW9uID0gXCJyXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIubWF0Y2gobGV0dGVydGVzdCkpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJvd0FycmF5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShib2FyZCkpO1xyXG4gICAgICAgIHJvd0FycmF5W3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyID0gbGV0dGVyO1xyXG4gICAgICAgIHJvd0FycmF5W3Jvd0luZGV4XS5maWxsZWRpbiA9IChyb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXkuZmlsdGVyKChjZWxsKSA9PiB7cmV0dXJuIGNlbGwubGV0dGVyID09PSBcIj9cIjt9KS5sZW5ndGggPT09IDApO1xyXG4gICAgICAgIGZvciAobGV0IGNpID0gMDsgY2kgPCBudW1Db2xzOyBjaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChyb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXlbY2ldLmxldHRlciA9PT0gXCI/XCIpIHtcclxuICAgICAgICAgICAgICAgIHJvd0FycmF5W3Jvd0luZGV4XS5jb2xBcnJheVtjaV0uY2xhc3NOYW1lID0gY3NzTm9MZXR0ZXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXlbY2ldLmNsYXNzTmFtZSA9IHJvd0FycmF5W3Jvd0luZGV4XS5maWxsZWRpbiA/IGNzc0NvY29vbiA6IGNzc0xhcnZhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb3ZlRGlyZWN0aW9uID09PSBcInVcIikge1xyXG4gICAgICAgICAgICBtb3ZlVXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vdmVEaXJlY3Rpb24gPT09IFwiZFwiKSB7XHJcbiAgICAgICAgICAgIG1vdmVEb3duKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb3ZlRGlyZWN0aW9uID09PSBcInJcIikge1xyXG4gICAgICAgICAgICBtb3ZlUmlnaHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vdmVEaXJlY3Rpb24gPT09IFwibFwiKSB7XHJcbiAgICAgICAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyb3dBcnJheS5maWx0ZXIociA9PiB7cmV0dXJuICFyLmZpbGxlZGluO30pLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAvLyBBbGwgbGV0dGVycyBhcmUgZmlsbGVkIGluXHJcbiAgICAgICAgICAgIHNldEZpbGxlZGluKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRCb2FyZChyb3dBcnJheSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW92ZVVwID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCByb3dJbmRleCA9IHNlbGVjdGVkLnJvdztcclxuICAgICAgICBsZXQgY29sSW5kZXggPSBzZWxlY3RlZC5jb2w7XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGVkID0ge3Jvdzpyb3dJbmRleCxjb2w6Y29sSW5kZXh9O1xyXG4gICAgICAgIGlmIChyb3dJbmRleCAtIDEgPiAwKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4IC0gMTtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gbnVtUm93cyAtIDI7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IGNvbEluZGV4IC0gMSA+IC0xID8gY29sSW5kZXggLSAxIDogbnVtQ29scyAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGVkKG5ld1NlbGVjdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb3ZlRG93biA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6cm93SW5kZXgsY29sOmNvbEluZGV4fTtcclxuICAgICAgICBpZiAocm93SW5kZXggKyAxIDwgbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gcm93SW5kZXggKyAxO1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSAxO1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleCArIDEgPCBudW1Db2xzID8gY29sSW5kZXggKyAxIDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vdmVSaWdodCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6MSxjb2w6MH07XHJcbiAgICAgICAgaWYgKGNvbEluZGV4ICsgMSA8IG51bUNvbHMpIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gcm93SW5kZXg7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IGNvbEluZGV4ICsgMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJvd0luZGV4ICsgMSA8IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4ICsgMTtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vdmVMZWZ0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCByb3dJbmRleCA9IHNlbGVjdGVkLnJvdztcclxuICAgICAgICBsZXQgY29sSW5kZXggPSBzZWxlY3RlZC5jb2w7XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGVkID0ge3JvdzpudW1Sb3dzLTIsY29sOm51bUNvbHMtMX07XHJcbiAgICAgICAgaWYgKGNvbEluZGV4IC0gMSA+IC0xKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4O1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleCAtIDE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyb3dJbmRleCAtIDEgPiAwKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4IC0gMTtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gbnVtQ29scyAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGVkKG5ld1NlbGVjdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2dnbGVTaG93U29sdXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd1NvbHV0aW9uKCFzaG93U29sdXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoZWNrU29sdXRpb24gPSBhc3luYygpID0+IHtcclxuICAgICAgICBzZXRDaGVja2luZyh0cnVlKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICBmb3IobGV0IHJvd0luZGV4ID0gMTsgcmVzdWx0ICYmIHJvd0luZGV4IDwgbnVtUm93czsgcm93SW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgcHJldldvcmQgPSBcIlwiO1xyXG4gICAgICAgICAgICBsZXQgY3VycldvcmQgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgbnVtQ29sczsgY29sSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgcHJldldvcmQgPSBwcmV2V29yZCArIGJvYXJkW3Jvd0luZGV4LTFdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICBjdXJyV29yZCA9IGN1cnJXb3JkICsgYm9hcmRbcm93SW5kZXhdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvdW50U3dhcHMocHJldldvcmQsIGN1cnJXb3JkKSAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYCR7cHJldldvcmR9IHRvICR7Y3VycldvcmR9IGlzIG5vdCBhIHZhbGlkIG1vdmVgKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcm93SW5kZXggIT09IG51bVJvd3MgLTEgJiYgISBhd2FpdCBpc1dvcmRWYWxpZChjdXJyV29yZCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGAke2N1cnJXb3JkfSBpcyBub3QgdmFsaWRgKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldENoZWNraW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRQdXp6bGVTb2x2ZWQocmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJCYWNrZ3JvdW5kXCIgb25LZXlEb3duPXsoZSkgPT4ge2hhbmRsZUtleURvd24oZSk7fX0gdGFiSW5kZXg9ey0xfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBNb3JwaG9cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2xvYWRpbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJ0ckVtcGhhc2lzXCI+Q3JlYXRpbmcgcHV6emxlLCBwbGVhc2UgYmUgcGF0aWVudC4uLjwvZGl2Pn1cclxuICAgICAgICAgICAgeyFsb2FkaW5nICYmIDxkaXYgY2xhc3NOYW1lPXtwdXp6bGVTb2x2ZWQgPyBcIm1vcnBob1NvbHZlZERpdlwiIDogXCJtb3JwaG9EaXZcIn0+XHJcbiAgICAgICAgICAgICAgICA8dGFibGU+PHRib2R5PlxyXG4gICAgICAgICAgICAgICAge2JvYXJkLm1hcCgoYm9hcmRSb3csIHJvd0luZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YEJvYXJkUm93LiR7cm93SW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtib2FyZFJvdy5jb2xBcnJheS5tYXAoKGNlbGwsIGNvbEluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtgQm9hcmRDZWxsLiR7cm93SW5kZXh9LiR7Y29sSW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVTZWxlY3Rpb24ocm93SW5kZXgsY29sSW5kZXgpO319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bjb2wgbW9ycGhvQ2VsbCAke3Nob3dTb2x1dGlvbiA/IGNzc1ByZXNldExldHRlciA6IHB1enpsZVNvbHZlZCA/IGNzc0J1dHRlcmZseSA6IGNlbGwuY2xhc3NOYW1lICsgKHJvd0luZGV4ID09PSBzZWxlY3RlZC5yb3cgJiYgY29sSW5kZXggPT09IHNlbGVjdGVkLmNvbCA/IGNzc1NlbGVjdGVkQ2VsbCA6IFwiXCIpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93U29sdXRpb24gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2VsbC5zb2x1dGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2VsbC5sZXR0ZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+PC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgICAgICAgICB7IWxvYWRpbmcgJiYgIWNoZWNraW5nICYmICFwdXp6bGVTb2x2ZWQgJiYgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3JwaG9LZXlib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibW9ycGhvS2V5cm93MVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5UVwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignUScpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlE8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVdcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1cnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5XPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlFXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdFJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+RTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5UlwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignUicpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVRcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1QnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5UPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlZXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdZJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+WTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5VVwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignVScpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUlcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0knKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5JPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlPXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdPJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+TzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5UFwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignUCcpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3JwaG9LZXlyb3cyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlBXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdBJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+QTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5U1wiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignUycpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleURcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0QnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5EPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlGXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdGJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+RjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5R1wiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignRycpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPkc8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUhcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0gnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5IPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlKXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdKJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+SjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5S1wiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignSycpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPks8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUxcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0wnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5MPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9ycGhvS2V5cm93M1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5WlwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignWicpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlo8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleVhcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ1gnKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5YPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlDXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdDJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+QzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5VlwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignVicpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPlY8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImtleUJcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoJ0InKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9LZXlcIj5CPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlOXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdOJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhvS2V5XCI+TjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5TVwiIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVJbnB1dExldHRlcignTScpO319IGNsYXNzTmFtZT1cIm1vcnBob0tleVwiPk08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9ycGhvS2V5cm93NFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5Q29weWRvd25cIiBvbkNsaWNrPXsoKSA9PiB7Y29weURvd25MZXR0ZXIoKTt9fSBjbGFzc05hbWU9XCJtb3JwaG9Db3B5ZG93bktleVwiPkNPUFkgRE9XTjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwia2V5Q29weXVwXCIgb25DbGljaz17KCkgPT4ge2NvcHlVcExldHRlcigpO319IGNsYXNzTmFtZT1cIm1vcnBob0NvcHl1cEtleVwiPkNPUFkgVVA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFwdXp6bGVTb2x2ZWQgJiYgZmlsbGVkaW4gJiYgPGRpdiBjbGFzc05hbWU9XCJtb3JwaG9LZXlyb3c0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtjaGVja1NvbHV0aW9uKCk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNVQk1JVCBZT1VSIFNPTFVUSU9OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5DaGFuZ2Ugb25lIGxldHRlciBhdCBhIHRpbWUgdG8gZ2V0IGZyb20ge2ZpcnN0V29yZH0gdG8ge2xhc3RXb3JkfS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRWFjaCBpbnRlcmltIHdvcmQgbXVzdCBiZSBhIHZhbGlkIHdvcmQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5DT1BZIERPV04gY29waWVzIGEgbGV0dGVyIGRvd24gZnJvbSB0aGUgcm93IGFib3ZlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDT1BZIFVQIGNvcGllcyBhIGxldHRlciB1cCBmcm9tIHRoZSBib3R0b20gcm93LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2xpY2sgYSBsZXR0ZXIgb24gdGhlIGJvdHRvbSByb3cgdG8gdXNlIGl0IGFzIHRoZSBzd2FwIG9uIHRoZSBzZWxlY3RlZCByb3cuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICB7cHV6emxlU29sdmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ckVtcGhhc2lzXCI+U3VjY2VzcyE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRJbml0aWFsQm9hcmQoKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHRU5FUkFURSBBTk9USEVSIFBVWlpMRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHt0b2dnbGVTaG93U29sdXRpb24oKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtzaG93U29sdXRpb24gPyAnSElERSBTT0xVVElPTicgOiAnU0hPVyBBIFNPTFVUSU9OJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3JwaG87Il0sInNvdXJjZVJvb3QiOiIifQ==