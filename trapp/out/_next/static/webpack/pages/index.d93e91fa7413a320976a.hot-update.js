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

    let advanceSelection = true;
    let retreatSelection = false;

    if (letter.match(lettertest)) {
      letter = letter.toUpperCase();
    }

    if (letter === "Backspace") {
      letter = "?";
      retreatSelection = true;
    }

    if (letter === "Delete") {
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
          lineNumber: 220,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 13
    }, undefined), loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trEmphasis",
      children: "Creating puzzle, please be patient..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 25
    }, undefined), !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 226,
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
                lineNumber: 235,
                columnNumber: 45
              }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: cell.letter
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 45
              }, undefined)
            }, `BoardCell.${rowIndex}.${colIndex}`, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 37
            }, undefined))
          }, `BoardRow.${rowIndex}`, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 29
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: [!loading && !checking && !puzzleSolved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          name: "getnextletter",
          value: "",
          onChange: e => {
            handleInputLetter(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Change one letter at a time to get from ", firstWord, " to ", lastWord, "."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Each interim word must be a valid word."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton",
          onClick: () => {
            toggleShowSolution();
          },
          children: `${showSolution ? 'HIDE SOLUTION' : 'SHOW A SOLUTION'}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 253,
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
            lineNumber: 257,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 256,
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
            lineNumber: 262,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 38
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 26
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 216,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9ycGhvL21vcnBoby5qcyJdLCJuYW1lcyI6WyJNb3JwaG8iLCJzZXRXaGVyZXRvIiwibnVtUm93cyIsIm51bUNvbHMiLCJiYXNldXJsIiwiY3NzUHJlc2V0TGV0dGVyIiwiY3NzU29sdXRpb25MZXR0ZXIiLCJjc3NOb0xldHRlciIsImNzc1NlbGVjdGVkQ2VsbCIsImNzc0xldHRlck9uUGFydGlhbFJvdyIsImNzc0xldHRlck9uRnVsbFJvdyIsImNzc0J1dHRlcmZseSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJjaGVja2luZyIsInNldENoZWNraW5nIiwiZmlsbGVkaW4iLCJzZXRGaWxsZWRpbiIsInNob3dTb2x1dGlvbiIsInNldFNob3dTb2x1dGlvbiIsInB1enpsZVNvbHZlZCIsInNldFB1enpsZVNvbHZlZCIsImZpcnN0V29yZCIsInNldEZpcnN0V29yZCIsImxhc3RXb3JkIiwic2V0TGFzdFdvcmQiLCJib2FyZCIsInNldEJvYXJkIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInJvdyIsImNvbCIsInVzZUVmZmVjdCIsInNldEluaXRpYWxCb2FyZCIsInJvd0FycmF5IiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwibm90ZXMiLCJsZW5ndGgiLCJyb3dJbmRleCIsInJvd1dvcmQiLCJwdXp6bGUiLCJ0b1VwcGVyQ2FzZSIsInJvd0xldHRlcnMiLCJBcnJheSIsImZyb20iLCJyb3dGaWxsZWRJbiIsImNvbEFycmF5IiwiY29sSW5kZXgiLCJjZWxsIiwibGV0dGVyIiwic29sdXRpb24iLCJjbGFzc05hbWUiLCJwdXNoIiwiaGFuZGxlU2VsZWN0aW9uIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVJbnB1dExldHRlciIsImtleSIsImxldHRlcnRlc3QiLCJhZHZhbmNlU2VsZWN0aW9uIiwicmV0cmVhdFNlbGVjdGlvbiIsIm1hdGNoIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZmlsdGVyIiwiY2kiLCJuZXdTZWxlY3RlZCIsInIiLCJ0b2dnbGVTaG93U29sdXRpb24iLCJjaGVja1NvbHV0aW9uIiwicmVzdWx0Iiwic3RhcnRXb3JkIiwicHJldldvcmQiLCJjdXJyV29yZCIsInZhbGlkTmV4dE1vcnBoIiwiYWxlcnQiLCJpc1dvcmRWYWxpZCIsInJlcXVpcmVkRGlmZkxldHRlckNvdW50IiwicHJldmlvdXNXb3JkIiwiY3VycmVudFdvcmQiLCJzdGFydExldHRlcnMiLCJwcmV2aW91c0xldHRlcnMiLCJjdXJyZW50TGV0dGVycyIsImRpZmZGcm9tU3RhcnRDb3VudCIsImRpZmZGcm9tUHJldmlvdXNDb3VudCIsImkiLCJ3b3JkIiwidG9Mb3dlckNhc2UiLCJqZGF0YSIsImV4aXN0cyIsImUiLCJtYXAiLCJib2FyZFJvdyIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFrQjtBQUFBOztBQUM3QixRQUFNQyxPQUFPLEdBQUcsQ0FBaEI7QUFDQSxRQUFNQyxPQUFPLEdBQUcsQ0FBaEI7QUFDQSxRQUFNQyxPQUFPLEdBQUksS0FBRCxHQUFvRSx1QkFBcEUsR0FBOEYsQ0FBOUc7QUFDQSxRQUFNQyxlQUFlLEdBQUcsa0JBQXhCO0FBQ0EsUUFBTUMsaUJBQWlCLEdBQUcsb0JBQTFCO0FBQ0EsUUFBTUMsV0FBVyxHQUFHLG9CQUFwQjtBQUNBLFFBQU1DLGVBQWUsR0FBRyxxQkFBeEI7QUFDQSxRQUFNQyxxQkFBcUIsR0FBRyx3Q0FBOUI7QUFDQSxRQUFNQyxrQkFBa0IsR0FBRyxvQ0FBM0I7QUFDQSxRQUFNQyxZQUFZLEdBQUcsb0JBQXJCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQywrQ0FBUSxDQUFDLElBQUQsQ0FBdEM7QUFDQSxRQUFN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QUFBbUM7QUFEekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGUixlQU1JO0FBQUEsaUVBQTRDOUUsU0FBNUMsVUFBMkRFLFFBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFOSixlQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBKLGVBUUk7QUFBUSxtQkFBUyxFQUFDLFVBQWxCO0FBQTZCLGlCQUFPLEVBQUUsTUFBTTtBQUFDa0QsOEJBQWtCO0FBQUksV0FBbkU7QUFBQSxvQkFDTSxHQUFFeEQsWUFBWSxHQUFHLGVBQUgsR0FBcUIsaUJBQWtCO0FBRDNEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkosRUFXSyxDQUFDRSxZQUFELElBQWlCSixRQUFqQixpQkFBNkI7QUFBSyxtQkFBUyxFQUFDLGFBQWY7QUFBQSxpQ0FDMUI7QUFBUSxxQkFBUyxFQUFDLFVBQWxCO0FBQTZCLG1CQUFPLEVBQUUsTUFBTTtBQUFDMkQsMkJBQWE7QUFBSSxhQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUQwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhsQyxFQWdCS3ZELFlBQVksaUJBQUk7QUFBSyxtQkFBUyxFQUFDLGFBQWY7QUFBQSxpQ0FDYjtBQUFRLHFCQUFTLEVBQUMsVUFBbEI7QUFBNkIsbUJBQU8sRUFBRSxNQUFNO0FBQUNhLDZCQUFlO0FBQUksYUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEYTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWhCckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXJCUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBdURILENBM1FEOztHQUFNbEMsTTs7S0FBQUEsTTtBQTZRTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kOTNlOTFmYTc0MTNhMzIwOTc2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IE1vcnBobyA9ICh7c2V0V2hlcmV0b30pID0+IHtcclxuICAgIGNvbnN0IG51bVJvd3MgPSA2O1xyXG4gICAgY29uc3QgbnVtQ29scyA9IDU7XHJcbiAgICBjb25zdCBiYXNldXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbSc7XHJcbiAgICBjb25zdCBjc3NQcmVzZXRMZXR0ZXIgPSBcIm1vcnBob0NlbGxTdGF0aWNcIjtcclxuICAgIGNvbnN0IGNzc1NvbHV0aW9uTGV0dGVyID0gXCJtb3JwaG9DZWxsU29sdXRpb25cIjtcclxuICAgIGNvbnN0IGNzc05vTGV0dGVyID0gXCJtb3JwaG9DZWxsTm9MZXR0ZXJcIjtcclxuICAgIGNvbnN0IGNzc1NlbGVjdGVkQ2VsbCA9IFwiIG1vcnBob0NlbGxTZWxlY3RlZFwiO1xyXG4gICAgY29uc3QgY3NzTGV0dGVyT25QYXJ0aWFsUm93ID0gXCJtb3JwaG9DZWxsTGV0dGVyT25QYXJ0aWFsbHlGaWxsZWRJblJvd1wiO1xyXG4gICAgY29uc3QgY3NzTGV0dGVyT25GdWxsUm93ID0gXCJtb3JwaG9DZWxsTGV0dGVyT25GdWxseUZpbGxlZEluUm93XCI7XHJcbiAgICBjb25zdCBjc3NCdXR0ZXJmbHkgPSBcIm1vcnBob0NlbGxTb2x1dGlvblwiO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbY2hlY2tpbmcsIHNldENoZWNraW5nXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gU2V0IHdoZW4gY2hlY2tpbmcgc29sdXRpb24gdG8gcHJldmVudCBmdXJ0aGVyIGFsdGVyYXRpb25zXHJcbiAgICBjb25zdCBbZmlsbGVkaW4sIHNldEZpbGxlZGluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93U29sdXRpb24sIHNldFNob3dTb2x1dGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcHV6emxlU29sdmVkLCBzZXRQdXp6bGVTb2x2ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2ZpcnN0V29yZCwgc2V0Rmlyc3RXb3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtsYXN0V29yZCwgc2V0TGFzdFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2JvYXJkLCBzZXRCb2FyZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKHtyb3c6MSwgY29sOjB9KTsgLy8gTmF0dXJhbCBwbGFjZSB0byBzdGFydCBlbnRlcmluZyBsZXR0ZXJzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldEluaXRpYWxCb2FyZCgpO1xyXG4gICAgfSxbXSk7XHJcbiAgICBjb25zdCBzZXRJbml0aWFsQm9hcmQgPSBhc3luYygpID0+IHsgLy8gSW5pdGlhbCBib2FyZCBvZiBnaXZlbiBzaXplXHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBzZXRDaGVja2luZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0U2hvd1NvbHV0aW9uKGZhbHNlKTtcclxuICAgICAgICBzZXRGaWxsZWRpbihmYWxzZSk7XHJcbiAgICAgICAgc2V0UHV6emxlU29sdmVkKGZhbHNlKTtcclxuICAgICAgICBsZXQgcm93QXJyYXkgPSBbXTtcclxuICAgICAgICBsZXQgdXJsID0gYCR7YmFzZXVybH0vRU5BQkxFMks/bW9ycGhvPXRydWUmbGVuPSR7bnVtQ29sc31gO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGlmICghZGF0YS5ub3RlcyB8fCBkYXRhLm5vdGVzLmxlbmd0aCA9PT0gMCkgeyAvLyBPayByZXN1bHRcclxuICAgICAgICAgICAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IG51bVJvd3M7IHJvd0luZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd1dvcmQgPSBkYXRhLnB1enpsZVtyb3dJbmRleF0udG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIGlmIChyb3dJbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZpcnN0V29yZChyb3dXb3JkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocm93SW5kZXggPT09IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGFzdFdvcmQocm93V29yZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3dMZXR0ZXJzID0gWy4uLkFycmF5LmZyb20ocm93V29yZCldO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvd0ZpbGxlZEluID0gcm93SW5kZXggPT09IDAgfHwgcm93SW5kZXggPT09IG51bVJvd3MgLSAxO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbEFycmF5ID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgbnVtQ29sczsgY29sSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsID0ge2xldHRlcjonPycsc29sdXRpb246cm93TGV0dGVyc1tjb2xJbmRleF0sY2xhc3NOYW1lOic/J307XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvd0luZGV4ID09PSAwIHx8IHJvd0luZGV4ID09PSBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmxldHRlciA9IHJvd0xldHRlcnNbY29sSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9IGNzc1ByZXNldExldHRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmxldHRlciA9ICc/JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBjc3NOb0xldHRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sQXJyYXkucHVzaChjZWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJvd0FycmF5LnB1c2goe2ZpbGxlZGluOnJvd0ZpbGxlZEluLCBjb2xBcnJheTpjb2xBcnJheX0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEJvYXJkKHJvd0FycmF5KTtcclxuICAgICAgICBzZXRTZWxlY3RlZCh7cm93OjEsY29sOjB9KTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3Rpb24gPSAocm93SW5kZXgsIGNvbEluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKHJvd0luZGV4IDwgMSB8fCByb3dJbmRleCA+PSBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2xJbmRleCA8IDAgfHwgcm93SW5kZXggPj0gbnVtQ29scykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGVkKHtyb3c6cm93SW5kZXgsY29sOmNvbEluZGV4fSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKGNoZWNraW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gTm8gbW9kZXMgd2hpbGUgY2hlY2tpbmcgc29sdXRpb25cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHB1enpsZVNvbHZlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIFB1enpsZSBhbHJlYWR5IHNvbHZlZFxyXG4gICAgICAgIH1cclxuICAgICAgICBoYW5kbGVJbnB1dExldHRlcihldmVudC5rZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUlucHV0TGV0dGVyID0gKGxldHRlcikgPT4ge1xyXG4gICAgICAgIGxldCByb3dJbmRleCA9IHNlbGVjdGVkLnJvdztcclxuICAgICAgICBsZXQgY29sSW5kZXggPSBzZWxlY3RlZC5jb2w7XHJcbiAgICAgICAgaWYgKHJvd0luZGV4IDwgMSB8fCByb3dJbmRleCA+PSBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2xJbmRleCA8IDAgfHwgcm93SW5kZXggPj0gbnVtQ29scykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsZXR0ZXJ0ZXN0ID0gL15bQS1aYS16XFw/XSQvOyAvLyBzaW5nbGUgbGV0dGVyIG9yIHF1ZXN0aW9uIG1hcmsga2V5IHByZXNzZWRcclxuICAgICAgICBsZXQgYWR2YW5jZVNlbGVjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgbGV0IHJldHJlYXRTZWxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICBpZiAobGV0dGVyLm1hdGNoKGxldHRlcnRlc3QpKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IGxldHRlci50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIkJhY2tzcGFjZVwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IFwiP1wiO1xyXG4gICAgICAgICAgICByZXRyZWF0U2VsZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJEZWxldGVcIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBcIj9cIjtcclxuICAgICAgICAgICAgYWR2YW5jZVNlbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJvd0FycmF5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShib2FyZCkpO1xyXG4gICAgICAgIHJvd0FycmF5W3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyID0gbGV0dGVyO1xyXG4gICAgICAgIHJvd0FycmF5W3Jvd0luZGV4XS5maWxsZWRpbiA9IChyb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXkuZmlsdGVyKChjZWxsKSA9PiB7cmV0dXJuIGNlbGwubGV0dGVyID09PSBcIj9cIjt9KS5sZW5ndGggPT09IDApO1xyXG4gICAgICAgIGZvciAobGV0IGNpID0gMDsgY2kgPCBudW1Db2xzOyBjaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChyb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXlbY2ldLmxldHRlciA9PT0gXCI/XCIpIHtcclxuICAgICAgICAgICAgICAgIHJvd0FycmF5W3Jvd0luZGV4XS5jb2xBcnJheVtjaV0uY2xhc3NOYW1lID0gY3NzTm9MZXR0ZXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXlbY2ldLmNsYXNzTmFtZSA9IHJvd0FycmF5W3Jvd0luZGV4XS5maWxsZWRpbiA/IGNzc0xldHRlck9uRnVsbFJvdyA6IGNzc0xldHRlck9uUGFydGlhbFJvdztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWR2YW5jZVNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICBsZXQgbmV3U2VsZWN0ZWQgPSB7cm93OjEsY29sOjB9O1xyXG4gICAgICAgICAgICBpZiAoY29sSW5kZXggKyAxIDwgbnVtQ29scykge1xyXG4gICAgICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gcm93SW5kZXg7XHJcbiAgICAgICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleCArIDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocm93SW5kZXggKyAxIDwgbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmV0cmVhdFNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICBsZXQgbmV3U2VsZWN0ZWQgPSB7cm93Om51bVJvd3MtMixjb2w6bnVtQ29scy0xfTtcclxuICAgICAgICAgICAgaWYgKGNvbEluZGV4IC0gMSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleDtcclxuICAgICAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IGNvbEluZGV4IC0gMTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyb3dJbmRleCAtIDEgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleCAtIDE7XHJcbiAgICAgICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBudW1Db2xzIC0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyb3dBcnJheS5maWx0ZXIociA9PiB7cmV0dXJuICFyLmZpbGxlZGluO30pLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAvLyBBbGwgbGV0dGVycyBhcmUgZmlsbGVkIGluXHJcbiAgICAgICAgICAgIHNldEZpbGxlZGluKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRCb2FyZChyb3dBcnJheSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlU2hvd1NvbHV0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dTb2x1dGlvbighc2hvd1NvbHV0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVja1NvbHV0aW9uID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgc2V0Q2hlY2tpbmcodHJ1ZSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgbGV0IHN0YXJ0V29yZCA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IG51bUNvbHM7IGNvbEluZGV4KyspIHtcclxuICAgICAgICAgICAgc3RhcnRXb3JkID0gc3RhcnRXb3JkICsgYm9hcmRbMF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCByb3dJbmRleCA9IDE7IHJlc3VsdCAmJiByb3dJbmRleCA8IG51bVJvd3M7IHJvd0luZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IHByZXZXb3JkID0gXCJcIjtcclxuICAgICAgICAgICAgbGV0IGN1cnJXb3JkID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IG51bUNvbHM7IGNvbEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIHByZXZXb3JkID0gcHJldldvcmQgKyBib2FyZFtyb3dJbmRleC0xXS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgY3VycldvcmQgPSBjdXJyV29yZCArIGJvYXJkW3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdmFsaWROZXh0TW9ycGgoc3RhcnRXb3JkLCByb3dJbmRleCwgcHJldldvcmQsIGN1cnJXb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYCR7cHJldldvcmR9IHRvICR7Y3VycldvcmR9IGlzIG5vdCBhIHZhbGlkIG1vdmVgKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcm93SW5kZXggIT09IG51bVJvd3MgLTEgJiYgISBhd2FpdCBpc1dvcmRWYWxpZChjdXJyV29yZCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGAke2N1cnJXb3JkfSBpcyBub3QgdmFsaWRgKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldENoZWNraW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRQdXp6bGVTb2x2ZWQocmVzdWx0KTtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiU3VjY2VzcyFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZhbGlkTmV4dE1vcnBoID0gKHN0YXJ0V29yZCwgcmVxdWlyZWREaWZmTGV0dGVyQ291bnQsIHByZXZpb3VzV29yZCwgY3VycmVudFdvcmQpID0+IHtcclxuICAgICAgICAvLyBTdGFydCB3b3JkIGlzIHJvdyBpbmRleCAwXHJcbiAgICAgICAgLy8gV29yZCBhdCByb3cgaW5kZXggMSBtdXN0IGhhdmUgMSBsZXR0ZXIgc3dhcFxyXG4gICAgICAgIC8vIFdvcmQgYXQgcm93IGluZGV4IDIgbXVzdCBoYXZlIDIgbGV0dGVyIHN3YXBzIHJlbGF0aXZlIHRvIHRoZSBzdGFydCB3b3JkLCBhbmQgMSByZWxhdGl2ZSB0byBwcmV2aW91cyB3b3JkXHJcbiAgICAgICAgLy8gV29yZCBhdCByb3cgaW5kZXggMyBtdXN0IGhhdmUgMyBsZXR0ZXIgc3dhcHMgcmVsYXRpdmUgdG8gdGhlIHN0YXJ0IHdvcmQsIGFuZCAxIHJlbGF0aXZlIHRvIHByZXZpb3VzIHdvcmRcclxuICAgICAgICAvLyBFdGMuIFNvIHBhc3Mgcm93IGluZGV4IHRvIHJlcXVpcmVkRGlmZkxldHRlckNvdW50LlxyXG4gICAgICAgIGxldCBzdGFydExldHRlcnMgPSBBcnJheS5mcm9tKHN0YXJ0V29yZCk7XHJcbiAgICAgICAgbGV0IHByZXZpb3VzTGV0dGVycyA9IEFycmF5LmZyb20ocHJldmlvdXNXb3JkKTtcclxuICAgICAgICBsZXQgY3VycmVudExldHRlcnMgPSBBcnJheS5mcm9tKGN1cnJlbnRXb3JkKTtcclxuICAgICAgICBsZXQgZGlmZkZyb21TdGFydENvdW50ID0gMDtcclxuICAgICAgICBsZXQgZGlmZkZyb21QcmV2aW91c0NvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAoY3VycmVudExldHRlcnNbaV0gIT09IHN0YXJ0TGV0dGVyc1tpXSkge1xyXG4gICAgICAgICAgICBkaWZmRnJvbVN0YXJ0Q291bnQrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChjdXJyZW50TGV0dGVyc1tpXSAhPT0gcHJldmlvdXNMZXR0ZXJzW2ldKSB7XHJcbiAgICAgICAgICAgIGRpZmZGcm9tUHJldmlvdXNDb3VudCsrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKGRpZmZGcm9tU3RhcnRDb3VudCA9PT0gcmVxdWlyZWREaWZmTGV0dGVyQ291bnQgJiYgZGlmZkZyb21QcmV2aW91c0NvdW50ID09PSAxKTtcclxuICAgICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGlzV29yZFZhbGlkKHdvcmQpIHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7YmFzZXVybH0vRU5BQkxFMks/ZXhpc3RzPSR7d29yZC50b0xvd2VyQ2FzZSgpfWA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGpkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBqZGF0YS5leGlzdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiIG9uS2V5RG93bj17KGUpID0+IHtoYW5kbGVLZXlEb3duKGUpO319PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIE1vcnBob1xyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7bG9hZGluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cInRyRW1waGFzaXNcIj5DcmVhdGluZyBwdXp6bGUsIHBsZWFzZSBiZSBwYXRpZW50Li4uPC9kaXY+fVxyXG4gICAgICAgICAgICB7IWxvYWRpbmcgJiYgPGRpdj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQvPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JvYXJkLm1hcCgoYm9hcmRSb3csIHJvd0luZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgQm9hcmRSb3cuJHtyb3dJbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym9hcmRSb3cuY29sQXJyYXkubWFwKChjZWxsLCBjb2xJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtgQm9hcmRDZWxsLiR7cm93SW5kZXh9LiR7Y29sSW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge2hhbmRsZVNlbGVjdGlvbihyb3dJbmRleCxjb2xJbmRleCk7fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbW9ycGhvQ2VsbCAke3B1enpsZVNvbHZlZCA/IGNzc0J1dHRlcmZseSA6IHNob3dTb2x1dGlvbiA/IGNzc1NvbHV0aW9uTGV0dGVyIDogY2VsbC5jbGFzc05hbWUgKyAocm93SW5kZXggPT09IHNlbGVjdGVkLnJvdyAmJiBjb2xJbmRleCA9PT0gc2VsZWN0ZWQuY29sID8gY3NzU2VsZWN0ZWRDZWxsIDogXCJcIil9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd1NvbHV0aW9uID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2VsbC5zb2x1dGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NlbGwubGV0dGVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHshbG9hZGluZyAmJiAhY2hlY2tpbmcgJiYgIXB1enpsZVNvbHZlZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZ2V0bmV4dGxldHRlclwiIHZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKGUudGFyZ2V0LnZhbHVlKTt9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8cD5DaGFuZ2Ugb25lIGxldHRlciBhdCBhIHRpbWUgdG8gZ2V0IGZyb20ge2ZpcnN0V29yZH0gdG8ge2xhc3RXb3JkfS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+RWFjaCBpbnRlcmltIHdvcmQgbXVzdCBiZSBhIHZhbGlkIHdvcmQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7dG9nZ2xlU2hvd1NvbHV0aW9uKCk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtzaG93U29sdXRpb24gPyAnSElERSBTT0xVVElPTicgOiAnU0hPVyBBIFNPTFVUSU9OJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHshcHV6emxlU29sdmVkICYmIGZpbGxlZGluICYmIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtjaGVja1NvbHV0aW9uKCk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTVUJNSVQgWU9VUiBTT0xVVElPTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAge3B1enpsZVNvbHZlZCAmJiA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0SW5pdGlhbEJvYXJkKCk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHRU5FUkFURSBBTk9USEVSIFBVWlpMRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3JwaG87Il0sInNvdXJjZVJvb3QiOiIifQ==