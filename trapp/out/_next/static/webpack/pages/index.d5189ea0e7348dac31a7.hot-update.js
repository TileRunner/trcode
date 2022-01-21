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
  const cssSolutionLetter = "morphoCellSolution";
  const cssNoLetter = "morphoCellNoLetter";
  const cssSelectedCell = " morphoCellSelected";
  const cssLetterOnPartialRow = "morphoCellLetterOnPartiallyFilledInRow";
  const cssLetterOnFullRow = "morphoCellLetterOnFullyFilledInRow";
  const cssButterfly = "morphoCellSolution";
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
    event.preventDefault();

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

    let letter = "";
    let lettertest = /^[A-Za-z\?]$/; // single letter or question mark key pressed

    let advanceSelection = true;
    let retreatSelection = false;

    if (event.key.match(lettertest)) {
      letter = event.key.toUpperCase();
    }

    if (event.key === "Backspace") {
      letter = "?";
      retreatSelection = true;
    }

    if (event.key === "Delete") {
      letter = "?";
      advanceSelection = false;
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
        rowArray[rowIndex].colArray[ci].className = rowArray[rowIndex].filledin ? cssLetterOnFullRow : cssLetterOnPartialRow;
      }
    }

    if (advanceSelection) {
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
    }

    if (retreatSelection) {
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
    }

    if (rowArray.filter(r => {
      return !r.filledin;
    }).length === 0) {
      // All letters are filled in
      setFilledin(true);
    }

    setBoard(rowArray);
  };

  const toggleShowSolution = () => {
    setShowSolution(!showSolution);
  };

  const checkSolution = async () => {
    setChecking(true);
    let result = true;
    let startWord = "";

    for (let colIndex = 0; colIndex < numCols; colIndex++) {
      startWord = startWord + board[0].colArray[colIndex].letter;
    }

    for (let rowIndex = 1; result && rowIndex < numRows; rowIndex++) {
      let prevWord = "";
      let currWord = "";

      for (let colIndex = 0; colIndex < numCols; colIndex++) {
        prevWord = prevWord + board[rowIndex - 1].colArray[colIndex].letter;
        currWord = currWord + board[rowIndex].colArray[colIndex].letter;
      }

      if (!validNextMorph(startWord, rowIndex, prevWord, currWord)) {
        alert(`${prevWord} to ${currWord} is not a valid move`);
        result = false;
      }

      if (result && rowIndex !== numRows - 1 && !(await isWordValid(currWord))) {
        alert(`${currWord} is not valid`);
        result = false;
      }
    }

    setChecking(false);
    setPuzzleSolved(result);

    if (result) {
      alert("Success!");
    }
  };

  const validNextMorph = (startWord, requiredDiffLetterCount, previousWord, currentWord) => {
    // Start word is row index 0
    // Word at row index 1 must have 1 letter swap
    // Word at row index 2 must have 2 letter swaps relative to the start word, and 1 relative to previous word
    // Word at row index 3 must have 3 letter swaps relative to the start word, and 1 relative to previous word
    // Etc. So pass row index to requiredDiffLetterCount.
    let startLetters = Array.from(startWord);
    let previousLetters = Array.from(previousWord);
    let currentLetters = Array.from(currentWord);
    let diffFromStartCount = 0;
    let diffFromPreviousCount = 0;

    for (let i = 0; i < currentLetters.length; i++) {
      if (currentLetters[i] !== startLetters[i]) {
        diffFromStartCount++;
      }

      if (currentLetters[i] !== previousLetters[i]) {
        diffFromPreviousCount++;
      }
    }

    return diffFromStartCount === requiredDiffLetterCount && diffFromPreviousCount === 1;
  };

  async function isWordValid(word) {
    let url = `${baseurl}/ENABLE2K?exists=${word.toLowerCase()}`;
    const response = await fetch(url);
    const jdata = await response.json();
    return jdata.exists;
  }

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
          lineNumber: 217,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 13
    }, undefined), loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trEmphasis",
      children: "Creating puzzle, please be patient..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 25
    }, undefined), !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: board.map((boardRow, rowIndex) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: boardRow.colArray.map((cell, colIndex) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              onClick: () => {
                handleSelection(rowIndex, colIndex);
              },
              className: `morphoCell ${puzzleSolved ? cssButterfly : showSolution ? cssSolutionLetter : cell.className + (rowIndex === selected.row && colIndex === selected.col ? cssSelectedCell : "")}`,
              children: showSolution ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: cell.solution
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 45
              }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: cell.letter
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 234,
                columnNumber: 45
              }, undefined)
            }, `BoardCell.${rowIndex}.${colIndex}`, false, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 37
            }, undefined))
          }, `BoardRow.${rowIndex}`, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 29
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Change one letter at a time to get from ", firstWord, " to ", lastWord, "."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Each interim word must be a valid word."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton",
          onClick: () => {
            toggleShowSolution();
          },
          children: `${showSolution ? 'HIDE SOLUTION' : 'SHOW A SOLUTION'}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 21
        }, undefined), !puzzleSolved && filledin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "trParagraph",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "trButton",
            onClick: () => {
              checkSolution();
            },
            children: "SUBMIT YOUR SOLUTION"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 51
        }, undefined), puzzleSolved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "trParagraph",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "trButton",
            onClick: () => {
              setInitialBoard();
            },
            children: "GENERATE ANOTHER PUZZLE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 254,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 38
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 26
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 213,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9ycGhvL21vcnBoby5qcyJdLCJuYW1lcyI6WyJNb3JwaG8iLCJzZXRXaGVyZXRvIiwibnVtUm93cyIsIm51bUNvbHMiLCJiYXNldXJsIiwiY3NzUHJlc2V0TGV0dGVyIiwiY3NzU29sdXRpb25MZXR0ZXIiLCJjc3NOb0xldHRlciIsImNzc1NlbGVjdGVkQ2VsbCIsImNzc0xldHRlck9uUGFydGlhbFJvdyIsImNzc0xldHRlck9uRnVsbFJvdyIsImNzc0J1dHRlcmZseSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJjaGVja2luZyIsInNldENoZWNraW5nIiwiZmlsbGVkaW4iLCJzZXRGaWxsZWRpbiIsInNob3dTb2x1dGlvbiIsInNldFNob3dTb2x1dGlvbiIsInB1enpsZVNvbHZlZCIsInNldFB1enpsZVNvbHZlZCIsImZpcnN0V29yZCIsInNldEZpcnN0V29yZCIsImxhc3RXb3JkIiwic2V0TGFzdFdvcmQiLCJib2FyZCIsInNldEJvYXJkIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInJvdyIsImNvbCIsInVzZUVmZmVjdCIsInNldEluaXRpYWxCb2FyZCIsInJvd0FycmF5IiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwibm90ZXMiLCJsZW5ndGgiLCJyb3dJbmRleCIsInJvd1dvcmQiLCJwdXp6bGUiLCJ0b1VwcGVyQ2FzZSIsInJvd0xldHRlcnMiLCJBcnJheSIsImZyb20iLCJyb3dGaWxsZWRJbiIsImNvbEFycmF5IiwiY29sSW5kZXgiLCJjZWxsIiwibGV0dGVyIiwic29sdXRpb24iLCJjbGFzc05hbWUiLCJwdXNoIiwiaGFuZGxlU2VsZWN0aW9uIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJsZXR0ZXJ0ZXN0IiwiYWR2YW5jZVNlbGVjdGlvbiIsInJldHJlYXRTZWxlY3Rpb24iLCJrZXkiLCJtYXRjaCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImZpbHRlciIsImNpIiwibmV3U2VsZWN0ZWQiLCJyIiwidG9nZ2xlU2hvd1NvbHV0aW9uIiwiY2hlY2tTb2x1dGlvbiIsInJlc3VsdCIsInN0YXJ0V29yZCIsInByZXZXb3JkIiwiY3VycldvcmQiLCJ2YWxpZE5leHRNb3JwaCIsImFsZXJ0IiwiaXNXb3JkVmFsaWQiLCJyZXF1aXJlZERpZmZMZXR0ZXJDb3VudCIsInByZXZpb3VzV29yZCIsImN1cnJlbnRXb3JkIiwic3RhcnRMZXR0ZXJzIiwicHJldmlvdXNMZXR0ZXJzIiwiY3VycmVudExldHRlcnMiLCJkaWZmRnJvbVN0YXJ0Q291bnQiLCJkaWZmRnJvbVByZXZpb3VzQ291bnQiLCJpIiwid29yZCIsInRvTG93ZXJDYXNlIiwiamRhdGEiLCJleGlzdHMiLCJlIiwibWFwIiwiYm9hcmRSb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWtCO0FBQUE7O0FBQzdCLFFBQU1DLE9BQU8sR0FBRyxDQUFoQjtBQUNBLFFBQU1DLE9BQU8sR0FBRyxDQUFoQjtBQUNBLFFBQU1DLE9BQU8sR0FBSSxLQUFELEdBQW9FLHVCQUFwRSxHQUE4RixDQUE5RztBQUNBLFFBQU1DLGVBQWUsR0FBRyxrQkFBeEI7QUFDQSxRQUFNQyxpQkFBaUIsR0FBRyxvQkFBMUI7QUFDQSxRQUFNQyxXQUFXLEdBQUcsb0JBQXBCO0FBQ0EsUUFBTUMsZUFBZSxHQUFHLHFCQUF4QjtBQUNBLFFBQU1DLHFCQUFxQixHQUFHLHdDQUE5QjtBQUNBLFFBQU1DLGtCQUFrQixHQUFHLG9DQUEzQjtBQUNBLFFBQU1DLFlBQVksR0FBRyxvQkFBckI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLCtDQUFRLENBQUMsSUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEw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QUFrQjtBQUQzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhKLEVBTUssQ0FBQ0UsWUFBRCxJQUFpQkosUUFBakIsaUJBQTZCO0FBQUssbUJBQVMsRUFBQyxhQUFmO0FBQUEsaUNBQzFCO0FBQVEscUJBQVMsRUFBQyxVQUFsQjtBQUE2QixtQkFBTyxFQUFFLE1BQU07QUFBQzBELDJCQUFhO0FBQUksYUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEMEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFObEMsRUFXS3RELFlBQVksaUJBQUk7QUFBSyxtQkFBUyxFQUFDLGFBQWY7QUFBQSxpQ0FDYjtBQUFRLHFCQUFTLEVBQUMsVUFBbEI7QUFBNkIsbUJBQU8sRUFBRSxNQUFNO0FBQUNhLDZCQUFlO0FBQUksYUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEYTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBckJTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFrREgsQ0FuUUQ7O0dBQU1sQyxNOztLQUFBQSxNO0FBcVFOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ1MTg5ZWEwZTczNDhkYWMzMWE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTW9ycGhvID0gKHtzZXRXaGVyZXRvfSkgPT4ge1xyXG4gICAgY29uc3QgbnVtUm93cyA9IDY7XHJcbiAgICBjb25zdCBudW1Db2xzID0gNTtcclxuICAgIGNvbnN0IGJhc2V1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tJztcclxuICAgIGNvbnN0IGNzc1ByZXNldExldHRlciA9IFwibW9ycGhvQ2VsbFN0YXRpY1wiO1xyXG4gICAgY29uc3QgY3NzU29sdXRpb25MZXR0ZXIgPSBcIm1vcnBob0NlbGxTb2x1dGlvblwiO1xyXG4gICAgY29uc3QgY3NzTm9MZXR0ZXIgPSBcIm1vcnBob0NlbGxOb0xldHRlclwiO1xyXG4gICAgY29uc3QgY3NzU2VsZWN0ZWRDZWxsID0gXCIgbW9ycGhvQ2VsbFNlbGVjdGVkXCI7XHJcbiAgICBjb25zdCBjc3NMZXR0ZXJPblBhcnRpYWxSb3cgPSBcIm1vcnBob0NlbGxMZXR0ZXJPblBhcnRpYWxseUZpbGxlZEluUm93XCI7XHJcbiAgICBjb25zdCBjc3NMZXR0ZXJPbkZ1bGxSb3cgPSBcIm1vcnBob0NlbGxMZXR0ZXJPbkZ1bGx5RmlsbGVkSW5Sb3dcIjtcclxuICAgIGNvbnN0IGNzc0J1dHRlcmZseSA9IFwibW9ycGhvQ2VsbFNvbHV0aW9uXCI7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtjaGVja2luZywgc2V0Q2hlY2tpbmddID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBTZXQgd2hlbiBjaGVja2luZyBzb2x1dGlvbiB0byBwcmV2ZW50IGZ1cnRoZXIgYWx0ZXJhdGlvbnNcclxuICAgIGNvbnN0IFtmaWxsZWRpbiwgc2V0RmlsbGVkaW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dTb2x1dGlvbiwgc2V0U2hvd1NvbHV0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwdXp6bGVTb2x2ZWQsIHNldFB1enpsZVNvbHZlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZmlyc3RXb3JkLCBzZXRGaXJzdFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2xhc3RXb3JkLCBzZXRMYXN0V29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbYm9hcmQsIHNldEJvYXJkXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoe3JvdzoxLCBjb2w6MH0pOyAvLyBOYXR1cmFsIHBsYWNlIHRvIHN0YXJ0IGVudGVyaW5nIGxldHRlcnNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SW5pdGlhbEJvYXJkKCk7XHJcbiAgICB9LFtdKTtcclxuICAgIGNvbnN0IHNldEluaXRpYWxCb2FyZCA9IGFzeW5jKCkgPT4geyAvLyBJbml0aWFsIGJvYXJkIG9mIGdpdmVuIHNpemVcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHNldENoZWNraW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRTaG93U29sdXRpb24oZmFsc2UpO1xyXG4gICAgICAgIHNldEZpbGxlZGluKGZhbHNlKTtcclxuICAgICAgICBzZXRQdXp6bGVTb2x2ZWQoZmFsc2UpO1xyXG4gICAgICAgIGxldCByb3dBcnJheSA9IFtdO1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHtiYXNldXJsfS9FTkFCTEUySz9tb3JwaG89dHJ1ZSZsZW49JHtudW1Db2xzfWA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgaWYgKCFkYXRhLm5vdGVzIHx8IGRhdGEubm90ZXMubGVuZ3RoID09PSAwKSB7IC8vIE9rIHJlc3VsdFxyXG4gICAgICAgICAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgbnVtUm93czsgcm93SW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93V29yZCA9IGRhdGEucHV6emxlW3Jvd0luZGV4XS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvd0luZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Rmlyc3RXb3JkKHJvd1dvcmQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyb3dJbmRleCA9PT0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMYXN0V29yZChyb3dXb3JkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd0xldHRlcnMgPSBbLi4uQXJyYXkuZnJvbShyb3dXb3JkKV07XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93RmlsbGVkSW4gPSByb3dJbmRleCA9PT0gMCB8fCByb3dJbmRleCA9PT0gbnVtUm93cyAtIDE7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBudW1Db2xzOyBjb2xJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGwgPSB7bGV0dGVyOic/Jyxzb2x1dGlvbjpyb3dMZXR0ZXJzW2NvbEluZGV4XSxjbGFzc05hbWU6Jz8nfTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocm93SW5kZXggPT09IDAgfHwgcm93SW5kZXggPT09IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwubGV0dGVyID0gcm93TGV0dGVyc1tjb2xJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gY3NzUHJlc2V0TGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwubGV0dGVyID0gJz8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9IGNzc05vTGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb2xBcnJheS5wdXNoKGNlbGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcm93QXJyYXkucHVzaCh7ZmlsbGVkaW46cm93RmlsbGVkSW4sIGNvbEFycmF5OmNvbEFycmF5fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Qm9hcmQocm93QXJyYXkpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkKHtyb3c6MSxjb2w6MH0pO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdGlvbiA9IChyb3dJbmRleCwgY29sSW5kZXgpID0+IHtcclxuICAgICAgICBpZiAocm93SW5kZXggPCAxIHx8IHJvd0luZGV4ID49IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbEluZGV4IDwgMCB8fCByb3dJbmRleCA+PSBudW1Db2xzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQoe3Jvdzpyb3dJbmRleCxjb2w6Y29sSW5kZXh9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoY2hlY2tpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBObyBtb2RlcyB3aGlsZSBjaGVja2luZyBzb2x1dGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHV6emxlU29sdmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gUHV6emxlIGFscmVhZHkgc29sdmVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByb3dJbmRleCA9IHNlbGVjdGVkLnJvdztcclxuICAgICAgICBsZXQgY29sSW5kZXggPSBzZWxlY3RlZC5jb2w7XHJcbiAgICAgICAgaWYgKHJvd0luZGV4IDwgMSB8fCByb3dJbmRleCA+PSBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2xJbmRleCA8IDAgfHwgcm93SW5kZXggPj0gbnVtQ29scykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsZXR0ZXIgPSBcIlwiO1xyXG4gICAgICAgIGxldCBsZXR0ZXJ0ZXN0ID0gL15bQS1aYS16XFw/XSQvOyAvLyBzaW5nbGUgbGV0dGVyIG9yIHF1ZXN0aW9uIG1hcmsga2V5IHByZXNzZWRcclxuICAgICAgICBsZXQgYWR2YW5jZVNlbGVjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgbGV0IHJldHJlYXRTZWxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICBpZiAoZXZlbnQua2V5Lm1hdGNoKGxldHRlcnRlc3QpKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkJhY2tzcGFjZVwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IFwiP1wiO1xyXG4gICAgICAgICAgICByZXRyZWF0U2VsZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJEZWxldGVcIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBcIj9cIjtcclxuICAgICAgICAgICAgYWR2YW5jZVNlbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJvd0FycmF5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShib2FyZCkpO1xyXG4gICAgICAgIHJvd0FycmF5W3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyID0gbGV0dGVyO1xyXG4gICAgICAgIHJvd0FycmF5W3Jvd0luZGV4XS5maWxsZWRpbiA9IChyb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXkuZmlsdGVyKChjZWxsKSA9PiB7cmV0dXJuIGNlbGwubGV0dGVyID09PSBcIj9cIjt9KS5sZW5ndGggPT09IDApO1xyXG4gICAgICAgIGZvciAobGV0IGNpID0gMDsgY2kgPCBudW1Db2xzOyBjaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChyb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXlbY2ldLmxldHRlciA9PT0gXCI/XCIpIHtcclxuICAgICAgICAgICAgICAgIHJvd0FycmF5W3Jvd0luZGV4XS5jb2xBcnJheVtjaV0uY2xhc3NOYW1lID0gY3NzTm9MZXR0ZXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXlbY2ldLmNsYXNzTmFtZSA9IHJvd0FycmF5W3Jvd0luZGV4XS5maWxsZWRpbiA/IGNzc0xldHRlck9uRnVsbFJvdyA6IGNzc0xldHRlck9uUGFydGlhbFJvdztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWR2YW5jZVNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICBsZXQgbmV3U2VsZWN0ZWQgPSB7cm93OjEsY29sOjB9O1xyXG4gICAgICAgICAgICBpZiAoY29sSW5kZXggKyAxIDwgbnVtQ29scykge1xyXG4gICAgICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gcm93SW5kZXg7XHJcbiAgICAgICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleCArIDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocm93SW5kZXggKyAxIDwgbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmV0cmVhdFNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICBsZXQgbmV3U2VsZWN0ZWQgPSB7cm93Om51bVJvd3MtMixjb2w6bnVtQ29scy0xfTtcclxuICAgICAgICAgICAgaWYgKGNvbEluZGV4IC0gMSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleDtcclxuICAgICAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IGNvbEluZGV4IC0gMTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyb3dJbmRleCAtIDEgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleCAtIDE7XHJcbiAgICAgICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBudW1Db2xzIC0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyb3dBcnJheS5maWx0ZXIociA9PiB7cmV0dXJuICFyLmZpbGxlZGluO30pLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAvLyBBbGwgbGV0dGVycyBhcmUgZmlsbGVkIGluXHJcbiAgICAgICAgICAgIHNldEZpbGxlZGluKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRCb2FyZChyb3dBcnJheSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlU2hvd1NvbHV0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dTb2x1dGlvbighc2hvd1NvbHV0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVja1NvbHV0aW9uID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgc2V0Q2hlY2tpbmcodHJ1ZSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgbGV0IHN0YXJ0V29yZCA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IG51bUNvbHM7IGNvbEluZGV4KyspIHtcclxuICAgICAgICAgICAgc3RhcnRXb3JkID0gc3RhcnRXb3JkICsgYm9hcmRbMF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCByb3dJbmRleCA9IDE7IHJlc3VsdCAmJiByb3dJbmRleCA8IG51bVJvd3M7IHJvd0luZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IHByZXZXb3JkID0gXCJcIjtcclxuICAgICAgICAgICAgbGV0IGN1cnJXb3JkID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IG51bUNvbHM7IGNvbEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIHByZXZXb3JkID0gcHJldldvcmQgKyBib2FyZFtyb3dJbmRleC0xXS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgY3VycldvcmQgPSBjdXJyV29yZCArIGJvYXJkW3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdmFsaWROZXh0TW9ycGgoc3RhcnRXb3JkLCByb3dJbmRleCwgcHJldldvcmQsIGN1cnJXb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYCR7cHJldldvcmR9IHRvICR7Y3VycldvcmR9IGlzIG5vdCBhIHZhbGlkIG1vdmVgKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcm93SW5kZXggIT09IG51bVJvd3MgLTEgJiYgISBhd2FpdCBpc1dvcmRWYWxpZChjdXJyV29yZCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGAke2N1cnJXb3JkfSBpcyBub3QgdmFsaWRgKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldENoZWNraW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRQdXp6bGVTb2x2ZWQocmVzdWx0KTtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiU3VjY2VzcyFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZhbGlkTmV4dE1vcnBoID0gKHN0YXJ0V29yZCwgcmVxdWlyZWREaWZmTGV0dGVyQ291bnQsIHByZXZpb3VzV29yZCwgY3VycmVudFdvcmQpID0+IHtcclxuICAgICAgICAvLyBTdGFydCB3b3JkIGlzIHJvdyBpbmRleCAwXHJcbiAgICAgICAgLy8gV29yZCBhdCByb3cgaW5kZXggMSBtdXN0IGhhdmUgMSBsZXR0ZXIgc3dhcFxyXG4gICAgICAgIC8vIFdvcmQgYXQgcm93IGluZGV4IDIgbXVzdCBoYXZlIDIgbGV0dGVyIHN3YXBzIHJlbGF0aXZlIHRvIHRoZSBzdGFydCB3b3JkLCBhbmQgMSByZWxhdGl2ZSB0byBwcmV2aW91cyB3b3JkXHJcbiAgICAgICAgLy8gV29yZCBhdCByb3cgaW5kZXggMyBtdXN0IGhhdmUgMyBsZXR0ZXIgc3dhcHMgcmVsYXRpdmUgdG8gdGhlIHN0YXJ0IHdvcmQsIGFuZCAxIHJlbGF0aXZlIHRvIHByZXZpb3VzIHdvcmRcclxuICAgICAgICAvLyBFdGMuIFNvIHBhc3Mgcm93IGluZGV4IHRvIHJlcXVpcmVkRGlmZkxldHRlckNvdW50LlxyXG4gICAgICAgIGxldCBzdGFydExldHRlcnMgPSBBcnJheS5mcm9tKHN0YXJ0V29yZCk7XHJcbiAgICAgICAgbGV0IHByZXZpb3VzTGV0dGVycyA9IEFycmF5LmZyb20ocHJldmlvdXNXb3JkKTtcclxuICAgICAgICBsZXQgY3VycmVudExldHRlcnMgPSBBcnJheS5mcm9tKGN1cnJlbnRXb3JkKTtcclxuICAgICAgICBsZXQgZGlmZkZyb21TdGFydENvdW50ID0gMDtcclxuICAgICAgICBsZXQgZGlmZkZyb21QcmV2aW91c0NvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAoY3VycmVudExldHRlcnNbaV0gIT09IHN0YXJ0TGV0dGVyc1tpXSkge1xyXG4gICAgICAgICAgICBkaWZmRnJvbVN0YXJ0Q291bnQrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChjdXJyZW50TGV0dGVyc1tpXSAhPT0gcHJldmlvdXNMZXR0ZXJzW2ldKSB7XHJcbiAgICAgICAgICAgIGRpZmZGcm9tUHJldmlvdXNDb3VudCsrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKGRpZmZGcm9tU3RhcnRDb3VudCA9PT0gcmVxdWlyZWREaWZmTGV0dGVyQ291bnQgJiYgZGlmZkZyb21QcmV2aW91c0NvdW50ID09PSAxKTtcclxuICAgICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGlzV29yZFZhbGlkKHdvcmQpIHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7YmFzZXVybH0vRU5BQkxFMks/ZXhpc3RzPSR7d29yZC50b0xvd2VyQ2FzZSgpfWA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGpkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBqZGF0YS5leGlzdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiIG9uS2V5RG93bj17KGUpID0+IHtoYW5kbGVLZXlEb3duKGUpO319IHRhYmluZGV4PXstMX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgTW9ycGhvXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nICYmIDxkaXYgY2xhc3NOYW1lPVwidHJFbXBoYXNpc1wiPkNyZWF0aW5nIHB1enpsZSwgcGxlYXNlIGJlIHBhdGllbnQuLi48L2Rpdj59XHJcbiAgICAgICAgICAgIHshbG9hZGluZyAmJiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Ym9hcmQubWFwKChib2FyZFJvdywgcm93SW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2BCb2FyZFJvdy4ke3Jvd0luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib2FyZFJvdy5jb2xBcnJheS5tYXAoKGNlbGwsIGNvbEluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2BCb2FyZENlbGwuJHtyb3dJbmRleH0uJHtjb2xJbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlU2VsZWN0aW9uKHJvd0luZGV4LGNvbEluZGV4KTt9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Btb3JwaG9DZWxsICR7cHV6emxlU29sdmVkID8gY3NzQnV0dGVyZmx5IDogc2hvd1NvbHV0aW9uID8gY3NzU29sdXRpb25MZXR0ZXIgOiBjZWxsLmNsYXNzTmFtZSArIChyb3dJbmRleCA9PT0gc2VsZWN0ZWQucm93ICYmIGNvbEluZGV4ID09PSBzZWxlY3RlZC5jb2wgPyBjc3NTZWxlY3RlZENlbGwgOiBcIlwiKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93U29sdXRpb24gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjZWxsLnNvbHV0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2VsbC5sZXR0ZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Q2hhbmdlIG9uZSBsZXR0ZXIgYXQgYSB0aW1lIHRvIGdldCBmcm9tIHtmaXJzdFdvcmR9IHRvIHtsYXN0V29yZH0uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkVhY2ggaW50ZXJpbSB3b3JkIG11c3QgYmUgYSB2YWxpZCB3b3JkLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3RvZ2dsZVNob3dTb2x1dGlvbigpO319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YCR7c2hvd1NvbHV0aW9uID8gJ0hJREUgU09MVVRJT04nIDogJ1NIT1cgQSBTT0xVVElPTid9YH1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7IXB1enpsZVNvbHZlZCAmJiBmaWxsZWRpbiAmJiA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7Y2hlY2tTb2x1dGlvbigpO319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU1VCTUlUIFlPVVIgU09MVVRJT05cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIHtwdXp6bGVTb2x2ZWQgJiYgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldEluaXRpYWxCb2FyZCgpO319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR0VORVJBVEUgQU5PVEhFUiBQVVpaTEVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9ycGhvOyJdLCJzb3VyY2VSb290IjoiIn0=