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
          lineNumber: 248,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 13
    }, undefined), loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trEmphasis",
      children: "Creating puzzle, please be patient..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 251,
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
              lineNumber: 261,
              columnNumber: 37
            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: cell.letter
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 37
            }, undefined)
          }, `BoardCell.${rowIndex}.${colIndex}`, false, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 29
          }, undefined))
        }, `BoardRow.${rowIndex}`, false, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 21
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: [!loading && !checking && !puzzleSolved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Next Letter:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 272,
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
            lineNumber: 273,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
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
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 64
        }, undefined), puzzleSolved ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "trEmphasis",
            children: "Success!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "trButton",
            onClick: () => {
              setInitialBoard();
            },
            children: "GENERATE ANOTHER PUZZLE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 282,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 25
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton",
          onClick: () => {
            toggleShowSolution();
          },
          children: `${showSolution ? 'HIDE SOLUTION' : 'SHOW A SOLUTION'}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 287,
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
            lineNumber: 292,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 51
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 26
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 244,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9ycGhvL21vcnBoby5qcyJdLCJuYW1lcyI6WyJNb3JwaG8iLCJzZXRXaGVyZXRvIiwibnVtUm93cyIsIm51bUNvbHMiLCJiYXNldXJsIiwiY3NzUHJlc2V0TGV0dGVyIiwiY3NzTm9MZXR0ZXIiLCJjc3NTZWxlY3RlZENlbGwiLCJjc3NMYXJ2YSIsImNzc0NvY29vbiIsImNzc0J1dHRlcmZseSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJjaGVja2luZyIsInNldENoZWNraW5nIiwiZmlsbGVkaW4iLCJzZXRGaWxsZWRpbiIsInNob3dTb2x1dGlvbiIsInNldFNob3dTb2x1dGlvbiIsInB1enpsZVNvbHZlZCIsInNldFB1enpsZVNvbHZlZCIsImZpcnN0V29yZCIsInNldEZpcnN0V29yZCIsImxhc3RXb3JkIiwic2V0TGFzdFdvcmQiLCJib2FyZCIsInNldEJvYXJkIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInJvdyIsImNvbCIsInVzZUVmZmVjdCIsInNldEluaXRpYWxCb2FyZCIsInJvd0FycmF5IiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwibm90ZXMiLCJsZW5ndGgiLCJyb3dJbmRleCIsInJvd1dvcmQiLCJwdXp6bGUiLCJ0b1VwcGVyQ2FzZSIsInJvd0xldHRlcnMiLCJBcnJheSIsImZyb20iLCJyb3dGaWxsZWRJbiIsImNvbEFycmF5IiwiY29sSW5kZXgiLCJjZWxsIiwibGV0dGVyIiwic29sdXRpb24iLCJjbGFzc05hbWUiLCJwdXNoIiwiaGFuZGxlU2VsZWN0aW9uIiwiaGFuZGxlS2V5RG93biIsImV2ZW50Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVJbnB1dExldHRlciIsImxldHRlcnRlc3QiLCJtb3ZlRGlyZWN0aW9uIiwibWF0Y2giLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJmaWx0ZXIiLCJjaSIsIm1vdmVVcCIsIm1vdmVEb3duIiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJyIiwibmV3U2VsZWN0ZWQiLCJ0b2dnbGVTaG93U29sdXRpb24iLCJjaGVja1NvbHV0aW9uIiwicmVzdWx0IiwicHJldldvcmQiLCJjdXJyV29yZCIsImNvdW50U3dhcHMiLCJhbGVydCIsImlzV29yZFZhbGlkIiwiZSIsIm1hcCIsImJvYXJkUm93IiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWtCO0FBQUE7O0FBQzdCLFFBQU1DLE9BQU8sR0FBRyxDQUFoQjtBQUNBLFFBQU1DLE9BQU8sR0FBRyxDQUFoQjtBQUNBLFFBQU1DLE9BQU8sR0FBSSxLQUFELEdBQW9FLHVCQUFwRSxHQUE4RixDQUE5RztBQUNBLFFBQU1DLGVBQWUsR0FBRyxrQkFBeEI7QUFDQSxRQUFNQyxXQUFXLEdBQUcsb0JBQXBCO0FBQ0EsUUFBTUMsZUFBZSxHQUFHLHFCQUF4QjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxpQkFBakI7QUFDQSxRQUFNQyxTQUFTLEdBQUcsa0JBQWxCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHLHFCQUFyQjtBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsK0NBQVEsQ0FBQyxJQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCRiwrQ0FBUSxDQUFDLEtBQUQsQ0FBeEMsQ0FYNkIsQ0FXb0I7O0FBQ2pELFFBQU07QUFBQSxPQUFDRyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkosK0NBQVEsQ0FBQyxLQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDTiwrQ0FBUSxDQUFDLEtBQUQsQ0FBaEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ08sWUFBRDtBQUFBLE9BQWVDO0FB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSTtBQUFRLHFCQUFTLEVBQUMsVUFBbEI7QUFBNkIsbUJBQU8sRUFBRSxNQUFNO0FBQUNhLDZCQUFlO0FBQUksYUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURTLGdCQVFUO0FBQVEsbUJBQVMsRUFBQyxVQUFsQjtBQUE2QixpQkFBTyxFQUFFLE1BQU07QUFBQzRDLDhCQUFrQjtBQUFJLFdBQW5FO0FBQUEsb0JBQ00sR0FBRTNELFlBQVksR0FBRyxlQUFILEdBQXFCLGlCQUFrQjtBQUQzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWpCUixFQXFCSyxDQUFDRSxZQUFELElBQWlCSixRQUFqQixpQkFBNkI7QUFBQSxpQ0FDMUI7QUFBUSxxQkFBUyxFQUFDLFVBQWxCO0FBQTZCLG1CQUFPLEVBQUUsTUFBTTtBQUFDOEQsMkJBQWE7QUFBSSxhQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUQwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXJCbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWxCUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBeURILENBeFNEOztHQUFNOUUsTTs7S0FBQUEsTTtBQTBTTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jY2U5NDdjZDJkYzYwODUxM2I0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY291bnRTd2FwcywgaXNXb3JkVmFsaWQgfSBmcm9tICcuLi8uLi9saWIvd29yZGZ1bmN0aW9ucyc7XHJcblxyXG5jb25zdCBNb3JwaG8gPSAoe3NldFdoZXJldG99KSA9PiB7XHJcbiAgICBjb25zdCBudW1Sb3dzID0gNjtcclxuICAgIGNvbnN0IG51bUNvbHMgPSA1O1xyXG4gICAgY29uc3QgYmFzZXVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCcgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20nO1xyXG4gICAgY29uc3QgY3NzUHJlc2V0TGV0dGVyID0gXCJtb3JwaG9DZWxsU3RhdGljXCI7XHJcbiAgICBjb25zdCBjc3NOb0xldHRlciA9IFwibW9ycGhvQ2VsbE5vTGV0dGVyXCI7XHJcbiAgICBjb25zdCBjc3NTZWxlY3RlZENlbGwgPSBcIiBtb3JwaG9DZWxsU2VsZWN0ZWRcIjtcclxuICAgIGNvbnN0IGNzc0xhcnZhID0gXCJtb3JwaG9DZWxsTGFydmFcIjtcclxuICAgIGNvbnN0IGNzc0NvY29vbiA9IFwibW9ycGhvQ2VsbENvY29vblwiO1xyXG4gICAgY29uc3QgY3NzQnV0dGVyZmx5ID0gXCJtb3JwaG9DZWxsQnV0dGVyZmx5XCI7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtjaGVja2luZywgc2V0Q2hlY2tpbmddID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBTZXQgd2hlbiBjaGVja2luZyBzb2x1dGlvbiB0byBwcmV2ZW50IGZ1cnRoZXIgYWx0ZXJhdGlvbnNcclxuICAgIGNvbnN0IFtmaWxsZWRpbiwgc2V0RmlsbGVkaW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dTb2x1dGlvbiwgc2V0U2hvd1NvbHV0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwdXp6bGVTb2x2ZWQsIHNldFB1enpsZVNvbHZlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZmlyc3RXb3JkLCBzZXRGaXJzdFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2xhc3RXb3JkLCBzZXRMYXN0V29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbYm9hcmQsIHNldEJvYXJkXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoe3JvdzoxLCBjb2w6MH0pOyAvLyBOYXR1cmFsIHBsYWNlIHRvIHN0YXJ0IGVudGVyaW5nIGxldHRlcnNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SW5pdGlhbEJvYXJkKCk7XHJcbiAgICB9LFtdKTtcclxuICAgIGNvbnN0IHNldEluaXRpYWxCb2FyZCA9IGFzeW5jKCkgPT4geyAvLyBJbml0aWFsIGJvYXJkIG9mIGdpdmVuIHNpemVcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHNldENoZWNraW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRTaG93U29sdXRpb24oZmFsc2UpO1xyXG4gICAgICAgIHNldEZpbGxlZGluKGZhbHNlKTtcclxuICAgICAgICBzZXRQdXp6bGVTb2x2ZWQoZmFsc2UpO1xyXG4gICAgICAgIGxldCByb3dBcnJheSA9IFtdO1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHtiYXNldXJsfS9FTkFCTEUySz9tb3JwaG89dHJ1ZSZsZW49JHtudW1Db2xzfWA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgaWYgKCFkYXRhLm5vdGVzIHx8IGRhdGEubm90ZXMubGVuZ3RoID09PSAwKSB7IC8vIE9rIHJlc3VsdFxyXG4gICAgICAgICAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgbnVtUm93czsgcm93SW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93V29yZCA9IGRhdGEucHV6emxlW3Jvd0luZGV4XS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvd0luZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Rmlyc3RXb3JkKHJvd1dvcmQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyb3dJbmRleCA9PT0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMYXN0V29yZChyb3dXb3JkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd0xldHRlcnMgPSBbLi4uQXJyYXkuZnJvbShyb3dXb3JkKV07XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93RmlsbGVkSW4gPSByb3dJbmRleCA9PT0gMCB8fCByb3dJbmRleCA9PT0gbnVtUm93cyAtIDE7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBudW1Db2xzOyBjb2xJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGwgPSB7bGV0dGVyOic/Jyxzb2x1dGlvbjpyb3dMZXR0ZXJzW2NvbEluZGV4XSxjbGFzc05hbWU6Jz8nfTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocm93SW5kZXggPT09IDAgfHwgcm93SW5kZXggPT09IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwubGV0dGVyID0gcm93TGV0dGVyc1tjb2xJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gY3NzUHJlc2V0TGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwubGV0dGVyID0gJz8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9IGNzc05vTGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb2xBcnJheS5wdXNoKGNlbGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcm93QXJyYXkucHVzaCh7ZmlsbGVkaW46cm93RmlsbGVkSW4sIGNvbEFycmF5OmNvbEFycmF5fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Qm9hcmQocm93QXJyYXkpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkKHtyb3c6MSxjb2w6MH0pO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdGlvbiA9IChyb3dJbmRleCwgY29sSW5kZXgpID0+IHtcclxuICAgICAgICBpZiAocm93SW5kZXggPCAxIHx8IHJvd0luZGV4ID49IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbEluZGV4IDwgMCB8fCByb3dJbmRleCA+PSBudW1Db2xzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQoe3Jvdzpyb3dJbmRleCxjb2w6Y29sSW5kZXh9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJGMTJcIikge3JldHVybjt9XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoY2hlY2tpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBObyBtb2RlcyB3aGlsZSBjaGVja2luZyBzb2x1dGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHV6emxlU29sdmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gUHV6emxlIGFscmVhZHkgc29sdmVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhhbmRsZUlucHV0TGV0dGVyKGV2ZW50LmtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRMZXR0ZXIgPSAobGV0dGVyKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gc2VsZWN0ZWQucm93O1xyXG4gICAgICAgIGxldCBjb2xJbmRleCA9IHNlbGVjdGVkLmNvbDtcclxuICAgICAgICBpZiAocm93SW5kZXggPCAxIHx8IHJvd0luZGV4ID49IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbEluZGV4IDwgMCB8fCByb3dJbmRleCA+PSBudW1Db2xzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxldHRlcnRlc3QgPSAvXltBLVphLXpcXD9dJC87IC8vIHNpbmdsZSBsZXR0ZXIgb3IgcXVlc3Rpb24gbWFyayBrZXkgcHJlc3NlZFxyXG4gICAgICAgIGxldCBtb3ZlRGlyZWN0aW9uID0gXCJyXCI7IC8vIERlZmF1bHRcclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIkJhY2tzcGFjZVwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IFwiP1wiO1xyXG4gICAgICAgICAgICBtb3ZlRGlyZWN0aW9uID0gXCJsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiRGVsZXRlXCIpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gXCI/XCI7XHJcbiAgICAgICAgICAgIG1vdmVEaXJlY3Rpb24gPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIkFycm93VXBcIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBib2FyZFtyb3dJbmRleF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA9IFwidVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIkFycm93RG93blwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IGJvYXJkW3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICBtb3ZlRGlyZWN0aW9uID0gXCJkXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiQXJyb3dMZWZ0XCIpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gYm9hcmRbcm93SW5kZXhdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXI7XHJcbiAgICAgICAgICAgIG1vdmVEaXJlY3Rpb24gPSBcImxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gYm9hcmRbcm93SW5kZXhdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXI7XHJcbiAgICAgICAgICAgIG1vdmVEaXJlY3Rpb24gPSBcInJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlci5tYXRjaChsZXR0ZXJ0ZXN0KSkge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBsZXR0ZXIudG9VcHBlckNhc2UoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcm93QXJyYXkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGJvYXJkKSk7XHJcbiAgICAgICAgcm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXIgPSBsZXR0ZXI7XHJcbiAgICAgICAgcm93QXJyYXlbcm93SW5kZXhdLmZpbGxlZGluID0gKHJvd0FycmF5W3Jvd0luZGV4XS5jb2xBcnJheS5maWx0ZXIoKGNlbGwpID0+IHtyZXR1cm4gY2VsbC5sZXR0ZXIgPT09IFwiP1wiO30pLmxlbmd0aCA9PT0gMCk7XHJcbiAgICAgICAgZm9yIChsZXQgY2kgPSAwOyBjaSA8IG51bUNvbHM7IGNpKyspIHtcclxuICAgICAgICAgICAgaWYgKHJvd0FycmF5W3Jvd0luZGV4XS5jb2xBcnJheVtjaV0ubGV0dGVyID09PSBcIj9cIikge1xyXG4gICAgICAgICAgICAgICAgcm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5W2NpXS5jbGFzc05hbWUgPSBjc3NOb0xldHRlcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJvd0FycmF5W3Jvd0luZGV4XS5jb2xBcnJheVtjaV0uY2xhc3NOYW1lID0gcm93QXJyYXlbcm93SW5kZXhdLmZpbGxlZGluID8gY3NzQ29jb29uIDogY3NzTGFydmE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vdmVEaXJlY3Rpb24gPT09IFwidVwiKSB7XHJcbiAgICAgICAgICAgIG1vdmVVcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobW92ZURpcmVjdGlvbiA9PT0gXCJkXCIpIHtcclxuICAgICAgICAgICAgbW92ZURvd24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vdmVEaXJlY3Rpb24gPT09IFwiclwiKSB7XHJcbiAgICAgICAgICAgIG1vdmVSaWdodCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobW92ZURpcmVjdGlvbiA9PT0gXCJsXCIpIHtcclxuICAgICAgICAgICAgbW92ZUxlZnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvd0FycmF5LmZpbHRlcihyID0+IHtyZXR1cm4gIXIuZmlsbGVkaW47fSkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIEFsbCBsZXR0ZXJzIGFyZSBmaWxsZWQgaW5cclxuICAgICAgICAgICAgc2V0RmlsbGVkaW4odHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEJvYXJkKHJvd0FycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb3ZlVXAgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gc2VsZWN0ZWQucm93O1xyXG4gICAgICAgIGxldCBjb2xJbmRleCA9IHNlbGVjdGVkLmNvbDtcclxuICAgICAgICBsZXQgbmV3U2VsZWN0ZWQgPSB7cm93OnJvd0luZGV4LGNvbDpjb2xJbmRleH07XHJcbiAgICAgICAgaWYgKHJvd0luZGV4IC0gMSA+IDApIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gcm93SW5kZXggLSAxO1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSBudW1Sb3dzIC0gMjtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXggLSAxID4gLTEgPyBjb2xJbmRleCAtIDEgOiBudW1Db2xzIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vdmVEb3duID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCByb3dJbmRleCA9IHNlbGVjdGVkLnJvdztcclxuICAgICAgICBsZXQgY29sSW5kZXggPSBzZWxlY3RlZC5jb2w7XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGVkID0ge3Jvdzpyb3dJbmRleCxjb2w6Y29sSW5kZXh9O1xyXG4gICAgICAgIGlmIChyb3dJbmRleCArIDEgPCBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleCArIDE7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IGNvbEluZGV4O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IDE7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IGNvbEluZGV4ICsgMSA8IG51bUNvbHMgPyBjb2xJbmRleCArIDEgOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW92ZVJpZ2h0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCByb3dJbmRleCA9IHNlbGVjdGVkLnJvdztcclxuICAgICAgICBsZXQgY29sSW5kZXggPSBzZWxlY3RlZC5jb2w7XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGVkID0ge3JvdzoxLGNvbDowfTtcclxuICAgICAgICBpZiAoY29sSW5kZXggKyAxIDwgbnVtQ29scykge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleDtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXggKyAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocm93SW5kZXggKyAxIDwgbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gcm93SW5kZXggKyAxO1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW92ZUxlZnQgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gc2VsZWN0ZWQucm93O1xyXG4gICAgICAgIGxldCBjb2xJbmRleCA9IHNlbGVjdGVkLmNvbDtcclxuICAgICAgICBsZXQgbmV3U2VsZWN0ZWQgPSB7cm93Om51bVJvd3MtMixjb2w6bnVtQ29scy0xfTtcclxuICAgICAgICBpZiAoY29sSW5kZXggLSAxID4gLTEpIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gcm93SW5kZXg7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IGNvbEluZGV4IC0gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJvd0luZGV4IC0gMSA+IDApIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gcm93SW5kZXggLSAxO1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBudW1Db2xzIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVNob3dTb2x1dGlvbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG93U29sdXRpb24oIXNob3dTb2x1dGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hlY2tTb2x1dGlvbiA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIHNldENoZWNraW5nKHRydWUpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgIGZvcihsZXQgcm93SW5kZXggPSAxOyByZXN1bHQgJiYgcm93SW5kZXggPCBudW1Sb3dzOyByb3dJbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwcmV2V29yZCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGxldCBjdXJyV29yZCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBudW1Db2xzOyBjb2xJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2V29yZCA9IHByZXZXb3JkICsgYm9hcmRbcm93SW5kZXgtMV0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICAgICAgICAgIGN1cnJXb3JkID0gY3VycldvcmQgKyBib2FyZFtyb3dJbmRleF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY291bnRTd2FwcyhwcmV2V29yZCwgY3VycldvcmQpICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChgJHtwcmV2V29yZH0gdG8gJHtjdXJyV29yZH0gaXMgbm90IGEgdmFsaWQgbW92ZWApO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByb3dJbmRleCAhPT0gbnVtUm93cyAtMSAmJiAhIGF3YWl0IGlzV29yZFZhbGlkKGN1cnJXb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYCR7Y3VycldvcmR9IGlzIG5vdCB2YWxpZGApO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q2hlY2tpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldFB1enpsZVNvbHZlZChyZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckJhY2tncm91bmRcIiBvbktleURvd249eyhlKSA9PiB7aGFuZGxlS2V5RG93bihlKTt9fSB0YWJpbmRleD17LTF9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIE1vcnBob1xyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7bG9hZGluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cInRyRW1waGFzaXNcIj5DcmVhdGluZyBwdXp6bGUsIHBsZWFzZSBiZSBwYXRpZW50Li4uPC9kaXY+fVxyXG4gICAgICAgICAgICB7IWxvYWRpbmcgJiYgPGRpdiBjbGFzc05hbWU9e3B1enpsZVNvbHZlZCA/IFwibW9ycGhvU29sdmVkRGl2XCIgOiBcIm1vcnBob0RpdlwifT5cclxuICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIHtib2FyZC5tYXAoKGJvYXJkUm93LCByb3dJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2BCb2FyZFJvdy4ke3Jvd0luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Ym9hcmRSb3cuY29sQXJyYXkubWFwKChjZWxsLCBjb2xJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17YEJvYXJkQ2VsbC4ke3Jvd0luZGV4fS4ke2NvbEluZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlU2VsZWN0aW9uKHJvd0luZGV4LGNvbEluZGV4KTt9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29sIG1vcnBob0NlbGwgJHtzaG93U29sdXRpb24gPyBjc3NQcmVzZXRMZXR0ZXIgOiBwdXp6bGVTb2x2ZWQgPyBjc3NCdXR0ZXJmbHkgOiBjZWxsLmNsYXNzTmFtZSArIChyb3dJbmRleCA9PT0gc2VsZWN0ZWQucm93ICYmIGNvbEluZGV4ID09PSBzZWxlY3RlZC5jb2wgPyBjc3NTZWxlY3RlZENlbGwgOiBcIlwiKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd1NvbHV0aW9uID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NlbGwuc29sdXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NlbGwubGV0dGVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHshbG9hZGluZyAmJiAhY2hlY2tpbmcgJiYgIXB1enpsZVNvbHZlZCAmJiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5OZXh0IExldHRlcjo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJnZXRuZXh0bGV0dGVyXCIgdmFsdWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoZS50YXJnZXQudmFsdWUpO319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNoYW5nZSBvbmUgbGV0dGVyIGF0IGEgdGltZSB0byBnZXQgZnJvbSB7Zmlyc3RXb3JkfSB0byB7bGFzdFdvcmR9LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RWFjaCBpbnRlcmltIHdvcmQgbXVzdCBiZSBhIHZhbGlkIHdvcmQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICB7cHV6emxlU29sdmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ckVtcGhhc2lzXCI+U3VjY2VzcyE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRJbml0aWFsQm9hcmQoKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHRU5FUkFURSBBTk9USEVSIFBVWlpMRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHt0b2dnbGVTaG93U29sdXRpb24oKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtzaG93U29sdXRpb24gPyAnSElERSBTT0xVVElPTicgOiAnU0hPVyBBIFNPTFVUSU9OJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyFwdXp6bGVTb2x2ZWQgJiYgZmlsbGVkaW4gJiYgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtjaGVja1NvbHV0aW9uKCk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTVUJNSVQgWU9VUiBTT0xVVElPTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3JwaG87Il0sInNvdXJjZVJvb3QiOiIifQ==