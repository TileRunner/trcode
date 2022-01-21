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
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Next Letter:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "getnextletter",
            value: "",
            onChange: e => {
              handleInputLetter(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 277,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Change one letter at a time to get from ", firstWord, " to ", lastWord, "."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Each interim word must be a valid word."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "morphoKeyboard",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => {
                handleInputLetter('A');
              },
              className: "morphKey",
              children: "A"
            }, "keyA", false, {
              fileName: _jsxFileName,
              lineNumber: 283,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 282,
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
            lineNumber: 288,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "trButton",
            onClick: () => {
              setInitialBoard();
            },
            children: "GENERATE ANOTHER PUZZLE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 289,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 25
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton",
          onClick: () => {
            toggleShowSolution();
          },
          children: `${showSolution ? 'HIDE SOLUTION' : 'SHOW A SOLUTION'}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 294,
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
            lineNumber: 299,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 298,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9ycGhvL21vcnBoby5qcyJdLCJuYW1lcyI6WyJNb3JwaG8iLCJzZXRXaGVyZXRvIiwibnVtUm93cyIsIm51bUNvbHMiLCJiYXNldXJsIiwiY3NzUHJlc2V0TGV0dGVyIiwiY3NzTm9MZXR0ZXIiLCJjc3NTZWxlY3RlZENlbGwiLCJjc3NMYXJ2YSIsImNzc0NvY29vbiIsImNzc0J1dHRlcmZseSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJjaGVja2luZyIsInNldENoZWNraW5nIiwiZmlsbGVkaW4iLCJzZXRGaWxsZWRpbiIsInNob3dTb2x1dGlvbiIsInNldFNob3dTb2x1dGlvbiIsInB1enpsZVNvbHZlZCIsInNldFB1enpsZVNvbHZlZCIsImZpcnN0V29yZCIsInNldEZpcnN0V29yZCIsImxhc3RXb3JkIiwic2V0TGFzdFdvcmQiLCJib2FyZCIsInNldEJvYXJkIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInJvdyIsImNvbCIsInVzZUVmZmVjdCIsInNldEluaXRpYWxCb2FyZCIsInJvd0FycmF5IiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwibm90ZXMiLCJsZW5ndGgiLCJyb3dJbmRleCIsInJvd1dvcmQiLCJwdXp6bGUiLCJ0b1VwcGVyQ2FzZSIsInJvd0xldHRlcnMiLCJBcnJheSIsImZyb20iLCJyb3dGaWxsZWRJbiIsImNvbEFycmF5IiwiY29sSW5kZXgiLCJjZWxsIiwibGV0dGVyIiwic29sdXRpb24iLCJjbGFzc05hbWUiLCJwdXNoIiwiaGFuZGxlU2VsZWN0aW9uIiwiaGFuZGxlS2V5RG93biIsImV2ZW50Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVJbnB1dExldHRlciIsImNoZWNrU29sdXRpb24iLCJsZXR0ZXJ0ZXN0IiwibW92ZURpcmVjdGlvbiIsIm1hdGNoIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZmlsdGVyIiwiY2kiLCJtb3ZlVXAiLCJtb3ZlRG93biIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0IiwiciIsIm5ld1NlbGVjdGVkIiwidG9nZ2xlU2hvd1NvbHV0aW9uIiwicmVzdWx0IiwicHJldldvcmQiLCJjdXJyV29yZCIsImNvdW50U3dhcHMiLCJhbGVydCIsImlzV29yZFZhbGlkIiwiZSIsIm1hcCIsImJvYXJkUm93IiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWtCO0FBQUE7O0FBQzdCLFFBQU1DLE9BQU8sR0FBRyxDQUFoQjtBQUNBLFFBQU1DLE9BQU8sR0FBRyxDQUFoQjtBQUNBLFFBQU1DLE9BQU8sR0FBSSxLQUFELEdBQW9FLHVCQUFwRSxHQUE4RixDQUE5RztBQUNBLFFBQU1DLGVBQWUsR0FBRyxrQkFBeEI7QUFDQSxRQUFNQyxXQUFXLEdBQUcsb0JBQXBCO0FBQ0EsUUFBTUMsZUFBZSxHQUFHLHFCQUF4QjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxpQkFBakI7QUFDQSxRQUFNQyxTQUFTLEdBQUcsa0JBQWxCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHLHFCQUFyQjtBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsK0NBQVEsQ0FBQyxJQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCRiwrQ0FBUSxDQUFDLEtBQUQsQ0FBeEMsQ0FYNkIsQ0FXb0I7O0FBQ2pELFFBQU07QUFBQSxPQUFDRyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkosK0NBQVEsQ0FBQyxLQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDTiwrQ0FBUSxDQUFDLEtBQUQsQ0FBaEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ08sWUFBRDtBQUFBLE9BQWVDO0FB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aVROLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQzOTc5YzUxMjZjMjU0OTJlMzg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb3VudFN3YXBzLCBpc1dvcmRWYWxpZCB9IGZyb20gJy4uLy4uL2xpYi93b3JkZnVuY3Rpb25zJztcclxuXHJcbmNvbnN0IE1vcnBobyA9ICh7c2V0V2hlcmV0b30pID0+IHtcclxuICAgIGNvbnN0IG51bVJvd3MgPSA2O1xyXG4gICAgY29uc3QgbnVtQ29scyA9IDU7XHJcbiAgICBjb25zdCBiYXNldXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbSc7XHJcbiAgICBjb25zdCBjc3NQcmVzZXRMZXR0ZXIgPSBcIm1vcnBob0NlbGxTdGF0aWNcIjtcclxuICAgIGNvbnN0IGNzc05vTGV0dGVyID0gXCJtb3JwaG9DZWxsTm9MZXR0ZXJcIjtcclxuICAgIGNvbnN0IGNzc1NlbGVjdGVkQ2VsbCA9IFwiIG1vcnBob0NlbGxTZWxlY3RlZFwiO1xyXG4gICAgY29uc3QgY3NzTGFydmEgPSBcIm1vcnBob0NlbGxMYXJ2YVwiO1xyXG4gICAgY29uc3QgY3NzQ29jb29uID0gXCJtb3JwaG9DZWxsQ29jb29uXCI7XHJcbiAgICBjb25zdCBjc3NCdXR0ZXJmbHkgPSBcIm1vcnBob0NlbGxCdXR0ZXJmbHlcIjtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2NoZWNraW5nLCBzZXRDaGVja2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIFNldCB3aGVuIGNoZWNraW5nIHNvbHV0aW9uIHRvIHByZXZlbnQgZnVydGhlciBhbHRlcmF0aW9uc1xyXG4gICAgY29uc3QgW2ZpbGxlZGluLCBzZXRGaWxsZWRpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd1NvbHV0aW9uLCBzZXRTaG93U29sdXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3B1enpsZVNvbHZlZCwgc2V0UHV6emxlU29sdmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtmaXJzdFdvcmQsIHNldEZpcnN0V29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbGFzdFdvcmQsIHNldExhc3RXb3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtib2FyZCwgc2V0Qm9hcmRdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSh7cm93OjEsIGNvbDowfSk7IC8vIE5hdHVyYWwgcGxhY2UgdG8gc3RhcnQgZW50ZXJpbmcgbGV0dGVyc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRJbml0aWFsQm9hcmQoKTtcclxuICAgIH0sW10pO1xyXG4gICAgY29uc3Qgc2V0SW5pdGlhbEJvYXJkID0gYXN5bmMoKSA9PiB7IC8vIEluaXRpYWwgYm9hcmQgb2YgZ2l2ZW4gc2l6ZVxyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgc2V0Q2hlY2tpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldFNob3dTb2x1dGlvbihmYWxzZSk7XHJcbiAgICAgICAgc2V0RmlsbGVkaW4oZmFsc2UpO1xyXG4gICAgICAgIHNldFB1enpsZVNvbHZlZChmYWxzZSk7XHJcbiAgICAgICAgbGV0IHJvd0FycmF5ID0gW107XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2Jhc2V1cmx9L0VOQUJMRTJLP21vcnBobz10cnVlJmxlbj0ke251bUNvbHN9YDtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBpZiAoIWRhdGEubm90ZXMgfHwgZGF0YS5ub3Rlcy5sZW5ndGggPT09IDApIHsgLy8gT2sgcmVzdWx0XHJcbiAgICAgICAgICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBudW1Sb3dzOyByb3dJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3dXb3JkID0gZGF0YS5wdXp6bGVbcm93SW5kZXhdLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93SW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRGaXJzdFdvcmQocm93V29yZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvd0luZGV4ID09PSBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExhc3RXb3JkKHJvd1dvcmQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93TGV0dGVycyA9IFsuLi5BcnJheS5mcm9tKHJvd1dvcmQpXTtcclxuICAgICAgICAgICAgICAgIGxldCByb3dGaWxsZWRJbiA9IHJvd0luZGV4ID09PSAwIHx8IHJvd0luZGV4ID09PSBudW1Sb3dzIC0gMTtcclxuICAgICAgICAgICAgICAgIGxldCBjb2xBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IG51bUNvbHM7IGNvbEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IHtsZXR0ZXI6Jz8nLHNvbHV0aW9uOnJvd0xldHRlcnNbY29sSW5kZXhdLGNsYXNzTmFtZTonPyd9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3dJbmRleCA9PT0gMCB8fCByb3dJbmRleCA9PT0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5sZXR0ZXIgPSByb3dMZXR0ZXJzW2NvbEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBjc3NQcmVzZXRMZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5sZXR0ZXIgPSAnPyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gY3NzTm9MZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbEFycmF5LnB1c2goY2VsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByb3dBcnJheS5wdXNoKHtmaWxsZWRpbjpyb3dGaWxsZWRJbiwgY29sQXJyYXk6Y29sQXJyYXl9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRCb2FyZChyb3dBcnJheSk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQoe3JvdzoxLGNvbDowfSk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0aW9uID0gKHJvd0luZGV4LCBjb2xJbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChyb3dJbmRleCA8IDEgfHwgcm93SW5kZXggPj0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sSW5kZXggPCAwIHx8IHJvd0luZGV4ID49IG51bUNvbHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZCh7cm93OnJvd0luZGV4LGNvbDpjb2xJbmRleH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkYxMlwiKSB7cmV0dXJuO31cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChjaGVja2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIE5vIG1vZGVzIHdoaWxlIGNoZWNraW5nIHNvbHV0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwdXp6bGVTb2x2ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBQdXp6bGUgYWxyZWFkeSBzb2x2ZWRcclxuICAgICAgICB9XHJcbiAgICAgICAgaGFuZGxlSW5wdXRMZXR0ZXIoZXZlbnQua2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dExldHRlciA9IChsZXR0ZXIpID0+IHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGlmIChyb3dJbmRleCA8IDEgfHwgcm93SW5kZXggPj0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sSW5kZXggPCAwIHx8IHJvd0luZGV4ID49IG51bUNvbHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmlsbGVkaW4gJiYgbGV0dGVyID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgY2hlY2tTb2x1dGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsZXR0ZXJ0ZXN0ID0gL15bQS1aYS16XFw/XSQvOyAvLyBzaW5nbGUgbGV0dGVyIG9yIHF1ZXN0aW9uIG1hcmsga2V5IHByZXNzZWRcclxuICAgICAgICBsZXQgbW92ZURpcmVjdGlvbiA9IFwiclwiOyAvLyBEZWZhdWx0XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJCYWNrc3BhY2VcIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBcIj9cIjtcclxuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA9IFwibFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIkRlbGV0ZVwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IFwiP1wiO1xyXG4gICAgICAgICAgICBtb3ZlRGlyZWN0aW9uID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJBcnJvd1VwXCIpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gYm9hcmRbcm93SW5kZXhdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXI7XHJcbiAgICAgICAgICAgIG1vdmVEaXJlY3Rpb24gPSBcInVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJBcnJvd0Rvd25cIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBib2FyZFtyb3dJbmRleF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA9IFwiZFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIkFycm93TGVmdFwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IGJvYXJkW3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICBtb3ZlRGlyZWN0aW9uID0gXCJsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiQXJyb3dSaWdodFwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IGJvYXJkW3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICBtb3ZlRGlyZWN0aW9uID0gXCJyXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIubWF0Y2gobGV0dGVydGVzdCkpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJvd0FycmF5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShib2FyZCkpO1xyXG4gICAgICAgIHJvd0FycmF5W3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyID0gbGV0dGVyO1xyXG4gICAgICAgIHJvd0FycmF5W3Jvd0luZGV4XS5maWxsZWRpbiA9IChyb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXkuZmlsdGVyKChjZWxsKSA9PiB7cmV0dXJuIGNlbGwubGV0dGVyID09PSBcIj9cIjt9KS5sZW5ndGggPT09IDApO1xyXG4gICAgICAgIGZvciAobGV0IGNpID0gMDsgY2kgPCBudW1Db2xzOyBjaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChyb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXlbY2ldLmxldHRlciA9PT0gXCI/XCIpIHtcclxuICAgICAgICAgICAgICAgIHJvd0FycmF5W3Jvd0luZGV4XS5jb2xBcnJheVtjaV0uY2xhc3NOYW1lID0gY3NzTm9MZXR0ZXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXlbY2ldLmNsYXNzTmFtZSA9IHJvd0FycmF5W3Jvd0luZGV4XS5maWxsZWRpbiA/IGNzc0NvY29vbiA6IGNzc0xhcnZhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb3ZlRGlyZWN0aW9uID09PSBcInVcIikge1xyXG4gICAgICAgICAgICBtb3ZlVXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vdmVEaXJlY3Rpb24gPT09IFwiZFwiKSB7XHJcbiAgICAgICAgICAgIG1vdmVEb3duKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb3ZlRGlyZWN0aW9uID09PSBcInJcIikge1xyXG4gICAgICAgICAgICBtb3ZlUmlnaHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vdmVEaXJlY3Rpb24gPT09IFwibFwiKSB7XHJcbiAgICAgICAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyb3dBcnJheS5maWx0ZXIociA9PiB7cmV0dXJuICFyLmZpbGxlZGluO30pLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAvLyBBbGwgbGV0dGVycyBhcmUgZmlsbGVkIGluXHJcbiAgICAgICAgICAgIHNldEZpbGxlZGluKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRCb2FyZChyb3dBcnJheSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW92ZVVwID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCByb3dJbmRleCA9IHNlbGVjdGVkLnJvdztcclxuICAgICAgICBsZXQgY29sSW5kZXggPSBzZWxlY3RlZC5jb2w7XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGVkID0ge3Jvdzpyb3dJbmRleCxjb2w6Y29sSW5kZXh9O1xyXG4gICAgICAgIGlmIChyb3dJbmRleCAtIDEgPiAwKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4IC0gMTtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gbnVtUm93cyAtIDI7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IGNvbEluZGV4IC0gMSA+IC0xID8gY29sSW5kZXggLSAxIDogbnVtQ29scyAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGVkKG5ld1NlbGVjdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb3ZlRG93biA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6cm93SW5kZXgsY29sOmNvbEluZGV4fTtcclxuICAgICAgICBpZiAocm93SW5kZXggKyAxIDwgbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gcm93SW5kZXggKyAxO1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSAxO1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleCArIDEgPCBudW1Db2xzID8gY29sSW5kZXggKyAxIDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vdmVSaWdodCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6MSxjb2w6MH07XHJcbiAgICAgICAgaWYgKGNvbEluZGV4ICsgMSA8IG51bUNvbHMpIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gcm93SW5kZXg7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IGNvbEluZGV4ICsgMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJvd0luZGV4ICsgMSA8IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4ICsgMTtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vdmVMZWZ0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCByb3dJbmRleCA9IHNlbGVjdGVkLnJvdztcclxuICAgICAgICBsZXQgY29sSW5kZXggPSBzZWxlY3RlZC5jb2w7XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGVkID0ge3JvdzpudW1Sb3dzLTIsY29sOm51bUNvbHMtMX07XHJcbiAgICAgICAgaWYgKGNvbEluZGV4IC0gMSA+IC0xKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4O1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleCAtIDE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyb3dJbmRleCAtIDEgPiAwKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4IC0gMTtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gbnVtQ29scyAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGVkKG5ld1NlbGVjdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2dnbGVTaG93U29sdXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd1NvbHV0aW9uKCFzaG93U29sdXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoZWNrU29sdXRpb24gPSBhc3luYygpID0+IHtcclxuICAgICAgICBzZXRDaGVja2luZyh0cnVlKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICBmb3IobGV0IHJvd0luZGV4ID0gMTsgcmVzdWx0ICYmIHJvd0luZGV4IDwgbnVtUm93czsgcm93SW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgcHJldldvcmQgPSBcIlwiO1xyXG4gICAgICAgICAgICBsZXQgY3VycldvcmQgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgbnVtQ29sczsgY29sSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgcHJldldvcmQgPSBwcmV2V29yZCArIGJvYXJkW3Jvd0luZGV4LTFdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICBjdXJyV29yZCA9IGN1cnJXb3JkICsgYm9hcmRbcm93SW5kZXhdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvdW50U3dhcHMocHJldldvcmQsIGN1cnJXb3JkKSAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYCR7cHJldldvcmR9IHRvICR7Y3VycldvcmR9IGlzIG5vdCBhIHZhbGlkIG1vdmVgKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcm93SW5kZXggIT09IG51bVJvd3MgLTEgJiYgISBhd2FpdCBpc1dvcmRWYWxpZChjdXJyV29yZCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGAke2N1cnJXb3JkfSBpcyBub3QgdmFsaWRgKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldENoZWNraW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRQdXp6bGVTb2x2ZWQocmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJCYWNrZ3JvdW5kXCIgb25LZXlEb3duPXsoZSkgPT4ge2hhbmRsZUtleURvd24oZSk7fX0gdGFiaW5kZXg9ey0xfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBNb3JwaG9cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2xvYWRpbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJ0ckVtcGhhc2lzXCI+Q3JlYXRpbmcgcHV6emxlLCBwbGVhc2UgYmUgcGF0aWVudC4uLjwvZGl2Pn1cclxuICAgICAgICAgICAgeyFsb2FkaW5nICYmIDxkaXYgY2xhc3NOYW1lPXtwdXp6bGVTb2x2ZWQgPyBcIm1vcnBob1NvbHZlZERpdlwiIDogXCJtb3JwaG9EaXZcIn0+XHJcbiAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICB7Ym9hcmQubWFwKChib2FyZFJvdywgcm93SW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgQm9hcmRSb3cuJHtyb3dJbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JvYXJkUm93LmNvbEFycmF5Lm1hcCgoY2VsbCwgY29sSW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2BCb2FyZENlbGwuJHtyb3dJbmRleH0uJHtjb2xJbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge2hhbmRsZVNlbGVjdGlvbihyb3dJbmRleCxjb2xJbmRleCk7fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbCBtb3JwaG9DZWxsICR7c2hvd1NvbHV0aW9uID8gY3NzUHJlc2V0TGV0dGVyIDogcHV6emxlU29sdmVkID8gY3NzQnV0dGVyZmx5IDogY2VsbC5jbGFzc05hbWUgKyAocm93SW5kZXggPT09IHNlbGVjdGVkLnJvdyAmJiBjb2xJbmRleCA9PT0gc2VsZWN0ZWQuY29sID8gY3NzU2VsZWN0ZWRDZWxsIDogXCJcIil9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dTb2x1dGlvbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjZWxsLnNvbHV0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjZWxsLmxldHRlcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgICAgICAgICB7IWxvYWRpbmcgJiYgIWNoZWNraW5nICYmICFwdXp6bGVTb2x2ZWQgJiYgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TmV4dCBMZXR0ZXI6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZ2V0bmV4dGxldHRlclwiIHZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKGUudGFyZ2V0LnZhbHVlKTt9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5DaGFuZ2Ugb25lIGxldHRlciBhdCBhIHRpbWUgdG8gZ2V0IGZyb20ge2ZpcnN0V29yZH0gdG8ge2xhc3RXb3JkfS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVhY2ggaW50ZXJpbSB3b3JkIG11c3QgYmUgYSB2YWxpZCB3b3JkLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3JwaG9LZXlib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJrZXlBXCIgb25DbGljaz17KCkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKCdBJyk7fX0gY2xhc3NOYW1lPVwibW9ycGhLZXlcIj5BPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICB7cHV6emxlU29sdmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ckVtcGhhc2lzXCI+U3VjY2VzcyE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRJbml0aWFsQm9hcmQoKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHRU5FUkFURSBBTk9USEVSIFBVWlpMRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHt0b2dnbGVTaG93U29sdXRpb24oKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtzaG93U29sdXRpb24gPyAnSElERSBTT0xVVElPTicgOiAnU0hPVyBBIFNPTFVUSU9OJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyFwdXp6bGVTb2x2ZWQgJiYgZmlsbGVkaW4gJiYgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtjaGVja1NvbHV0aW9uKCk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTVUJNSVQgWU9VUiBTT0xVVElPTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3JwaG87Il0sInNvdXJjZVJvb3QiOiIifQ==