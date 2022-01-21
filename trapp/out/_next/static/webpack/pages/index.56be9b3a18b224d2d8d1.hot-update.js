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
    alert(event.key);
    event.preventDefault();

    if (checking) {
      return; // No modes while checking solution
    }

    if (puzzleSolved) {
      return; // Puzzle already solved
    }

    switch (event.keyCode) {
      case 37:
        retreatPosition();
        break;

      case 38:
        if (selected.row > 1) {
          let newSelected = {
            row: selected.row - 1,
            col: selected.col
          };
          setSelected(newSelected);
        }

        break;

      case 39:
        advancePosition();
        break;

      case 40:
        if (selected.row < numRows - 2) {
          let newSelected = {
            row: selected.row + 1,
            col: selected.col
          };
          setSelected(newSelected);
        }

        break;

      default:
        handleInputLetter(event.key);
        break;
    }
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
      advancePosition();
    }

    if (retreatSelection) {
      retreatPosition();
    }

    if (rowArray.filter(r => {
      return !r.filledin;
    }).length === 0) {
      // All letters are filled in
      setFilledin(true);
    }

    setBoard(rowArray);
  };

  const advancePosition = () => {
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

  const retreatPosition = () => {
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
          lineNumber: 251,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 13
    }, undefined), loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trEmphasis",
      children: "Creating puzzle, please be patient..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 25
    }, undefined), !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 257,
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
                lineNumber: 266,
                columnNumber: 45
              }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: cell.letter
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 268,
                columnNumber: 45
              }, undefined)
            }, `BoardCell.${rowIndex}.${colIndex}`, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 37
            }, undefined))
          }, `BoardRow.${rowIndex}`, false, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 29
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: [!loading && !checking && !puzzleSolved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "trParagraph",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Next Letter:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 278,
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
            lineNumber: 279,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 64
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Change one letter at a time to get from ", firstWord, " to ", lastWord, "."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Each interim word must be a valid word."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton",
          onClick: () => {
            toggleShowSolution();
          },
          children: `${showSolution ? 'HIDE SOLUTION' : 'SHOW A SOLUTION'}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 285,
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
            lineNumber: 289,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 288,
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
            lineNumber: 294,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 38
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 26
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 247,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9ycGhvL21vcnBoby5qcyJdLCJuYW1lcyI6WyJNb3JwaG8iLCJzZXRXaGVyZXRvIiwibnVtUm93cyIsIm51bUNvbHMiLCJiYXNldXJsIiwiY3NzUHJlc2V0TGV0dGVyIiwiY3NzU29sdXRpb25MZXR0ZXIiLCJjc3NOb0xldHRlciIsImNzc1NlbGVjdGVkQ2VsbCIsImNzc0xldHRlck9uUGFydGlhbFJvdyIsImNzc0xldHRlck9uRnVsbFJvdyIsImNzc0J1dHRlcmZseSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJjaGVja2luZyIsInNldENoZWNraW5nIiwiZmlsbGVkaW4iLCJzZXRGaWxsZWRpbiIsInNob3dTb2x1dGlvbiIsInNldFNob3dTb2x1dGlvbiIsInB1enpsZVNvbHZlZCIsInNldFB1enpsZVNvbHZlZCIsImZpcnN0V29yZCIsInNldEZpcnN0V29yZCIsImxhc3RXb3JkIiwic2V0TGFzdFdvcmQiLCJib2FyZCIsInNldEJvYXJkIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInJvdyIsImNvbCIsInVzZUVmZmVjdCIsInNldEluaXRpYWxCb2FyZCIsInJvd0FycmF5IiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwibm90ZXMiLCJsZW5ndGgiLCJyb3dJbmRleCIsInJvd1dvcmQiLCJwdXp6bGUiLCJ0b1VwcGVyQ2FzZSIsInJvd0xldHRlcnMiLCJBcnJheSIsImZyb20iLCJyb3dGaWxsZWRJbiIsImNvbEFycmF5IiwiY29sSW5kZXgiLCJjZWxsIiwibGV0dGVyIiwic29sdXRpb24iLCJjbGFzc05hbWUiLCJwdXNoIiwiaGFuZGxlU2VsZWN0aW9uIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwiYWxlcnQiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImtleUNvZGUiLCJyZXRyZWF0UG9zaXRpb24iLCJuZXdTZWxlY3RlZCIsImFkdmFuY2VQb3NpdGlvbiIsImhhbmRsZUlucHV0TGV0dGVyIiwibGV0dGVydGVzdCIsImFkdmFuY2VTZWxlY3Rpb24iLCJyZXRyZWF0U2VsZWN0aW9uIiwibWF0Y2giLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJmaWx0ZXIiLCJjaSIsInIiLCJ0b2dnbGVTaG93U29sdXRpb24iLCJjaGVja1NvbHV0aW9uIiwicmVzdWx0Iiwic3RhcnRXb3JkIiwicHJldldvcmQiLCJjdXJyV29yZCIsInZhbGlkTmV4dE1vcnBoIiwiaXNXb3JkVmFsaWQiLCJyZXF1aXJlZERpZmZMZXR0ZXJDb3VudCIsInByZXZpb3VzV29yZCIsImN1cnJlbnRXb3JkIiwic3RhcnRMZXR0ZXJzIiwicHJldmlvdXNMZXR0ZXJzIiwiY3VycmVudExldHRlcnMiLCJkaWZmRnJvbVN0YXJ0Q291bnQiLCJkaWZmRnJvbVByZXZpb3VzQ291bnQiLCJpIiwid29yZCIsInRvTG93ZXJDYXNlIiwiamRhdGEiLCJleGlzdHMiLCJlIiwibWFwIiwiYm9hcmRSb3ciLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBa0I7QUFBQTs7QUFDN0IsUUFBTUMsT0FBTyxHQUFHLENBQWhCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHLENBQWhCO0FBQ0EsUUFBTUMsT0FBTyxHQUFJLEtBQUQsR0FBb0UsdUJBQXBFLEdBQThGLENBQTlHO0FBQ0EsUUFBTUMsZUFBZSxHQUFHLGtCQUF4QjtBQUNBLFFBQU1DLGlCQUFpQixHQUFHLG9CQUExQjtBQUNBLFFBQU1DLFdBQVcsR0FBRyxvQkFBcEI7QUFDQSxRQUFNQyxlQUFlLEdBQUcscUJBQXhCO0FBQ0EsUUFBTUMscUJBQXFCLEdBQUcsd0NBQTlCO0FBQ0EsUUFBTUMsa0JBQWtCLEdBQUcsb0NBQTNCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHLG9CQUFyQjtBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsK0NBQVEsQ0FBQyxJQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCRiwrQ0FBUSxDQUFDLEtBQUQsQ0FBeEMsQ0FaNkIsQ0FZb0I7O0FBQ2pELFFBQU07QUFBQSxPQUFDRyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkosK0NBQVEsQ0FBQyxLQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDTiwrQ0FBUSxDQUFDLEtBQUQsQ0FBaEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ08sWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NSLCtDQUFRLENBQUMsS0FBRCxDQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDUyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QlYsK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNXLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCWiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ2EsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JkLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDZSxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQmhCLCtDQUFRLENBQUM7QUFBQ2lCLE9BQUcsRUFBQyxDQUFMO0FBQVFDLE9BQUcsRUFBQztBQUFaLEdBQUQsQ0FBeEMsQ0FuQjZCLENBbUI2Qjs7QUFDMURDLGtEQUFTLENBQUMsTUFBTTtBQUNaQyxtQkFBZTtBQUNsQixHQUZRLEVBRVAsRUFGTyxDQUFUOztBQUdBLFFBQU1BLGVBQWUsR0FBRyxZQUFXO0FBQUU7QUFDakNyQixjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FHLGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUksbUJBQWUsQ0FBQyxLQUFELENBQWY7QUFDQUYsZUFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBSSxtQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNBLFFBQUlhLFFBQVEsR0FBRyxFQUFmO0FBQ0EsUUFBSUMsR0FBRyxHQUFJLEdBQUVoQyxPQUFRLDZCQUE0QkQsT0FBUSxFQUF6RDtBQUNBLFVBQU1rQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDRixHQUFELENBQTVCO0FBQ0EsVUFBTUcsSUFBSSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBVCxFQUFuQjs7QUFDQSxRQUFJLENBQUNELElBQUksQ0FBQ0UsS0FBTixJQUFlRixJQUFJLENBQUNFLEtBQUwsQ0FBV0MsTUFBWCxLQUFzQixDQUF6QyxFQUE0QztBQUFFO0FBQzFDLFdBQUssSUFBSUMsUUFBUSxHQUFHLENBQXBCLEVBQXVCQSxRQUFRLEdBQUd6QyxPQUFsQyxFQUEyQ3lDLFFBQVEsRUFBbkQsRUFBdUQ7QUFDbkQsY0FBTUMsT0FBTyxHQUFHTCxJQUFJLENBQUNNLE1BQUwsQ0FBWUYsUUFBWixFQUFzQkcsV0FBdEIsRUFBaEI7O0FBQ0EsWUFBSUgsUUFBUSxLQUFLLENBQWpCLEVBQW9CO0FBQ2hCbkIsc0JBQVksQ0FBQ29CLE9BQUQsQ0FBWjtBQUNILFNBRkQsTUFFTyxJQUFJRCxRQUFRLEtBQUt6QyxPQUFPLEdBQUcsQ0FBM0IsRUFBOEI7QUFDakN3QixxQkFBVyxDQUFDa0IsT0FBRCxDQUFYO0FBQ0g7O0FBQ0QsY0FBTUcsVUFBVSxHQUFHLENBQUMsR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVdMLE9BQVgsQ0FBSixDQUFuQjtBQUNBLFlBQUlNLFdBQVcsR0FBR1AsUUFBUSxLQUFLLENBQWIsSUFBa0JBLFFBQVEsS0FBS3pDLE9BQU8sR0FBRyxDQUEzRDtBQUNBLFlBQUlpRCxRQUFRLEdBQUcsRUFBZjs7QUFDQSxhQUFLLElBQUlDLFFBQVEsR0FBRyxDQUFwQixFQUF1QkEsUUFBUSxHQUFHakQsT0FBbEMsRUFBMkNpRCxRQUFRLEVBQW5ELEVBQXVEO0FBQ25ELGNBQUlDLElBQUksR0FBRztBQUFDQyxrQkFBTSxFQUFDLEdBQVI7QUFBWUMsb0JBQVEsRUFBQ1IsVUFBVSxDQUFDSyxRQUFELENBQS9CO0FBQTBDSSxxQkFBUyxFQUFDO0FBQXBELFdBQVg7O0FBQ0EsY0FBSWIsUUFBUSxLQUFLLENBQWIsSUFBa0JBLFFBQVEsS0FBS3pDLE9BQU8sR0FBRyxDQUE3QyxFQUFnRDtBQUM1Q21ELGdCQUFJLENBQUNDLE1BQUwsR0FBY1AsVUFBVSxDQUFDSyxRQUFELENBQXhCO0FBQ0FDLGdCQUFJLENBQUNHLFNBQUwsR0FBaUJuRCxlQUFqQjtBQUNILFdBSEQsTUFHTztBQUNIZ0QsZ0JBQUksQ0FBQ0MsTUFBTCxHQUFjLEdBQWQ7QUFDQUQsZ0JBQUksQ0FBQ0csU0FBTCxHQUFpQmpELFdBQWpCO0FBQ0g7O0FBQ0Q0QyxrQkFBUSxDQUFDTSxJQUFULENBQWNKLElBQWQ7QUFDSDs7QUFDRGxCLGdCQUFRLENBQUNzQixJQUFULENBQWM7QUFBQ3hDLGtCQUFRLEVBQUNpQyxXQUFWO0FBQXVCQyxrQkFBUSxFQUFDQTtBQUFoQyxTQUFkO0FBQ0g7QUFDSjs7QUFDRHZCLFlBQVEsQ0FBQ08sUUFBRCxDQUFSO0FBQ0FMLGVBQVcsQ0FBQztBQUFDQyxTQUFHLEVBQUMsQ0FBTDtBQUFPQyxTQUFHLEVBQUM7QUFBWCxLQUFELENBQVg7QUFDQW5CLGNBQVUsQ0FBQyxLQUFELENBQVY7QUFDSCxHQXRDRDs7QUF3Q0EsUUFBTTZDLGVBQWUsR0FBRyxDQUFDZixRQUFELEVBQVdTLFFBQVgsS0FBd0I7QUFDNUMsUUFBSVQsUUFBUSxHQUFHLENBQVgsSUFBZ0JBLFFBQVEsSUFBSXpDLE9BQU8sR0FBRyxDQUExQyxFQUE2QztBQUN6QztBQUNIOztBQUNELFFBQUlrRCxRQUFRLEdBQUcsQ0FBWCxJQUFnQlQsUUFBUSxJQUFJeEMsT0FBaEMsRUFBeUM7QUFDckM7QUFDSDs7QUFDRDJCLGVBQVcsQ0FBQztBQUFDQyxTQUFHLEVBQUNZLFFBQUw7QUFBY1gsU0FBRyxFQUFDb0I7QUFBbEIsS0FBRCxDQUFYO0FBQ0gsR0FSRDs7QUFVQSxRQUFNTyxhQUFhLEdBQUlDLEtBQUQsSUFBVztBQUM3QkMsU0FBSyxDQUFDRCxLQUFLLENBQUNFLEdBQVAsQ0FBTDtBQUNBRixTQUFLLENBQUNHLGNBQU47O0FBQ0EsUUFBSWhELFFBQUosRUFBYztBQUNWLGFBRFUsQ0FDRjtBQUNYOztBQUNELFFBQUlNLFlBQUosRUFBa0I7QUFDZCxhQURjLENBQ047QUFDWDs7QUFDRCxZQUFRdUMsS0FBSyxDQUFDSSxPQUFkO0FBQ0ksV0FBSyxFQUFMO0FBQ0lDLHVCQUFlO0FBQ2Y7O0FBQ0osV0FBSyxFQUFMO0FBQ0ksWUFBSXBDLFFBQVEsQ0FBQ0UsR0FBVCxHQUFlLENBQW5CLEVBQXNCO0FBQ2xCLGNBQUltQyxXQUFXLEdBQUc7QUFBQ25DLGVBQUcsRUFBRUYsUUFBUSxDQUFDRSxHQUFULEdBQWUsQ0FBckI7QUFBd0JDLGVBQUcsRUFBRUgsUUFBUSxDQUFDRztBQUF0QyxXQUFsQjtBQUNBRixxQkFBVyxDQUFDb0MsV0FBRCxDQUFYO0FBQ0g7O0FBQ0Q7O0FBQ0osV0FBSyxFQUFMO0FBQ0lDLHVCQUFlO0FBQ2Y7O0FBQ0osV0FBSyxFQUFMO0FBQ0ksWUFBSXRDLFFBQVEsQ0FBQ0UsR0FBVCxHQUFlN0IsT0FBTyxHQUFHLENBQTdCLEVBQWdDO0FBQzVCLGNBQUlnRSxXQUFXLEdBQUc7QUFBQ25DLGVBQUcsRUFBRUYsUUFBUSxDQUFDRSxHQUFULEdBQWUsQ0FBckI7QUFBd0JDLGVBQUcsRUFBRUgsUUFBUSxDQUFDRztBQUF0QyxXQUFsQjtBQUNBRixxQkFBVyxDQUFDb0MsV0FBRCxDQUFYO0FBQ0g7O0FBQ0Q7O0FBQ0o7QUFDSUUseUJBQWlCLENBQUNSLEtBQUssQ0FBQ0UsR0FBUCxDQUFqQjtBQUNBO0FBckJSO0FBdUJILEdBaENEOztBQWtDQSxRQUFNTSxpQkFBaUIsR0FBSWQsTUFBRCxJQUFZO0FBQ2xDLFFBQUlYLFFBQVEsR0FBR2QsUUFBUSxDQUFDRSxHQUF4QjtBQUNBLFFBQUlxQixRQUFRLEdBQUd2QixRQUFRLENBQUNHLEdBQXhCOztBQUNBLFFBQUlXLFFBQVEsR0FBRyxDQUFYLElBQWdCQSxRQUFRLElBQUl6QyxPQUFPLEdBQUcsQ0FBMUMsRUFBNkM7QUFDekM7QUFDSDs7QUFDRCxRQUFJa0QsUUFBUSxHQUFHLENBQVgsSUFBZ0JULFFBQVEsSUFBSXhDLE9BQWhDLEVBQXlDO0FBQ3JDO0FBQ0g7O0FBQ0QsUUFBSWtFLFVBQVUsR0FBRyxjQUFqQixDQVRrQyxDQVNEOztBQUNqQyxRQUFJQyxnQkFBZ0IsR0FBRyxJQUF2QjtBQUNBLFFBQUlDLGdCQUFnQixHQUFHLEtBQXZCOztBQUNBLFFBQUlqQixNQUFNLENBQUNrQixLQUFQLENBQWFILFVBQWIsQ0FBSixFQUE4QjtBQUMxQmYsWUFBTSxHQUFHQSxNQUFNLENBQUNSLFdBQVAsRUFBVDtBQUNIOztBQUNELFFBQUlRLE1BQU0sS0FBSyxXQUFmLEVBQTRCO0FBQ3hCQSxZQUFNLEdBQUcsR0FBVDtBQUNBaUIsc0JBQWdCLEdBQUcsSUFBbkI7QUFDSDs7QUFDRCxRQUFJakIsTUFBTSxLQUFLLFFBQWYsRUFBeUI7QUFDckJBLFlBQU0sR0FBRyxHQUFUO0FBQ0FnQixzQkFBZ0IsR0FBRyxLQUFuQjtBQUNIOztBQUNELFFBQUloQixNQUFNLEtBQUssRUFBZixFQUFtQjtBQUNmO0FBQ0g7O0FBQ0QsUUFBSW5CLFFBQVEsR0FBR3NDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNBQUwsQ0FBZWhELEtBQWYsQ0FBWCxDQUFmO0FBQ0FRLFlBQVEsQ0FBQ1EsUUFBRCxDQUFSLENBQW1CUSxRQUFuQixDQUE0QkMsUUFBNUIsRUFBc0NFLE1BQXRDLEdBQStDQSxNQUEvQztBQUNBbkIsWUFBUSxDQUFDUSxRQUFELENBQVIsQ0FBbUIxQixRQUFuQixHQUErQmtCLFFBQVEsQ0FBQ1EsUUFBRCxDQUFSLENBQW1CUSxRQUFuQixDQUE0QnlCLE1BQTVCLENBQW9DdkIsSUFBRCxJQUFVO0FBQUMsYUFBT0EsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQXZCO0FBQTRCLEtBQTFFLEVBQTRFWixNQUE1RSxLQUF1RixDQUF0SDs7QUFDQSxTQUFLLElBQUltQyxFQUFFLEdBQUcsQ0FBZCxFQUFpQkEsRUFBRSxHQUFHMUUsT0FBdEIsRUFBK0IwRSxFQUFFLEVBQWpDLEVBQXFDO0FBQ2pDLFVBQUkxQyxRQUFRLENBQUNRLFFBQUQsQ0FBUixDQUFtQlEsUUFBbkIsQ0FBNEIwQixFQUE1QixFQUFnQ3ZCLE1BQWhDLEtBQTJDLEdBQS9DLEVBQW9EO0FBQ2hEbkIsZ0JBQVEsQ0FBQ1EsUUFBRCxDQUFSLENBQW1CUSxRQUFuQixDQUE0QjBCLEVBQTVCLEVBQWdDckIsU0FBaEMsR0FBNENqRCxXQUE1QztBQUNILE9BRkQsTUFFTztBQUNINEIsZ0JBQVEsQ0FBQ1EsUUFBRCxDQUFSLENBQW1CUSxRQUFuQixDQUE0QjBCLEVBQTVCLEVBQWdDckIsU0FBaEMsR0FBNENyQixRQUFRLENBQUNRLFFBQUQsQ0FBUixDQUFtQjFCLFFBQW5CLEdBQThCUCxrQkFBOUIsR0FBbURELHFCQUEvRjtBQUNIO0FBQ0o7O0FBQ0QsUUFBSTZELGdCQUFKLEVBQXNCO0FBQ2xCSCxxQkFBZTtBQUNsQjs7QUFDRCxRQUFJSSxnQkFBSixFQUFzQjtBQUNsQk4scUJBQWU7QUFDbEI7O0FBQ0QsUUFBSTlCLFFBQVEsQ0FBQ3lDLE1BQVQsQ0FBZ0JFLENBQUMsSUFBSTtBQUFDLGFBQU8sQ0FBQ0EsQ0FBQyxDQUFDN0QsUUFBVjtBQUFvQixLQUExQyxFQUE0Q3lCLE1BQTVDLEtBQXVELENBQTNELEVBQThEO0FBQzFEO0FBQ0F4QixpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNIOztBQUNEVSxZQUFRLENBQUNPLFFBQUQsQ0FBUjtBQUNILEdBL0NEOztBQWlEQSxRQUFNZ0MsZUFBZSxHQUFHLE1BQU07QUFDMUIsUUFBSUQsV0FBVyxHQUFHO0FBQUNuQyxTQUFHLEVBQUMsQ0FBTDtBQUFPQyxTQUFHLEVBQUM7QUFBWCxLQUFsQjs7QUFDQSxRQUFJb0IsUUFBUSxHQUFHLENBQVgsR0FBZWpELE9BQW5CLEVBQTRCO0FBQ3hCK0QsaUJBQVcsQ0FBQ25DLEdBQVosR0FBa0JZLFFBQWxCO0FBQ0F1QixpQkFBVyxDQUFDbEMsR0FBWixHQUFrQm9CLFFBQVEsR0FBRyxDQUE3QjtBQUNILEtBSEQsTUFHTyxJQUFJVCxRQUFRLEdBQUcsQ0FBWCxHQUFlekMsT0FBTyxHQUFHLENBQTdCLEVBQWdDO0FBQ25DZ0UsaUJBQVcsQ0FBQ25DLEdBQVosR0FBa0JZLFFBQVEsR0FBRyxDQUE3QjtBQUNBdUIsaUJBQVcsQ0FBQ2xDLEdBQVosR0FBa0IsQ0FBbEI7QUFDSDs7QUFDREYsZUFBVyxDQUFDb0MsV0FBRCxDQUFYO0FBQ0gsR0FWRDs7QUFZQSxRQUFNRCxlQUFlLEdBQUcsTUFBTTtBQUMxQixRQUFJQyxXQUFXLEdBQUc7QUFBQ25DLFNBQUcsRUFBQzdCLE9BQU8sR0FBQyxDQUFiO0FBQWU4QixTQUFHLEVBQUM3QixPQUFPLEdBQUM7QUFBM0IsS0FBbEI7O0FBQ0EsUUFBSWlELFFBQVEsR0FBRyxDQUFYLEdBQWUsQ0FBQyxDQUFwQixFQUF1QjtBQUNuQmMsaUJBQVcsQ0FBQ25DLEdBQVosR0FBa0JZLFFBQWxCO0FBQ0F1QixpQkFBVyxDQUFDbEMsR0FBWixHQUFrQm9CLFFBQVEsR0FBRyxDQUE3QjtBQUNILEtBSEQsTUFHTyxJQUFJVCxRQUFRLEdBQUcsQ0FBWCxHQUFlLENBQW5CLEVBQXNCO0FBQ3pCdUIsaUJBQVcsQ0FBQ25DLEdBQVosR0FBa0JZLFFBQVEsR0FBRyxDQUE3QjtBQUNBdUIsaUJBQVcsQ0FBQ2xDLEdBQVosR0FBa0I3QixPQUFPLEdBQUcsQ0FBNUI7QUFDSDs7QUFDRDJCLGVBQVcsQ0FBQ29DLFdBQUQsQ0FBWDtBQUNILEdBVkQ7O0FBWUEsUUFBTWEsa0JBQWtCLEdBQUcsTUFBTTtBQUM3QjNELG1CQUFlLENBQUMsQ0FBQ0QsWUFBRixDQUFmO0FBQ0gsR0FGRDs7QUFJQSxRQUFNNkQsYUFBYSxHQUFHLFlBQVc7QUFDN0JoRSxlQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0EsUUFBSWlFLE1BQU0sR0FBRyxJQUFiO0FBQ0EsUUFBSUMsU0FBUyxHQUFHLEVBQWhCOztBQUNBLFNBQUssSUFBSTlCLFFBQVEsR0FBRyxDQUFwQixFQUF1QkEsUUFBUSxHQUFHakQsT0FBbEMsRUFBMkNpRCxRQUFRLEVBQW5ELEVBQXVEO0FBQ25EOEIsZUFBUyxHQUFHQSxTQUFTLEdBQUd2RCxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVN3QixRQUFULENBQWtCQyxRQUFsQixFQUE0QkUsTUFBcEQ7QUFDSDs7QUFDRCxTQUFJLElBQUlYLFFBQVEsR0FBRyxDQUFuQixFQUFzQnNDLE1BQU0sSUFBSXRDLFFBQVEsR0FBR3pDLE9BQTNDLEVBQW9EeUMsUUFBUSxFQUE1RCxFQUFnRTtBQUM1RCxVQUFJd0MsUUFBUSxHQUFHLEVBQWY7QUFDQSxVQUFJQyxRQUFRLEdBQUcsRUFBZjs7QUFDQSxXQUFLLElBQUloQyxRQUFRLEdBQUcsQ0FBcEIsRUFBdUJBLFFBQVEsR0FBR2pELE9BQWxDLEVBQTJDaUQsUUFBUSxFQUFuRCxFQUF1RDtBQUNuRCtCLGdCQUFRLEdBQUdBLFFBQVEsR0FBR3hELEtBQUssQ0FBQ2dCLFFBQVEsR0FBQyxDQUFWLENBQUwsQ0FBa0JRLFFBQWxCLENBQTJCQyxRQUEzQixFQUFxQ0UsTUFBM0Q7QUFDQThCLGdCQUFRLEdBQUdBLFFBQVEsR0FBR3pELEtBQUssQ0FBQ2dCLFFBQUQsQ0FBTCxDQUFnQlEsUUFBaEIsQ0FBeUJDLFFBQXpCLEVBQW1DRSxNQUF6RDtBQUNIOztBQUNELFVBQUksQ0FBQytCLGNBQWMsQ0FBQ0gsU0FBRCxFQUFZdkMsUUFBWixFQUFzQndDLFFBQXRCLEVBQWdDQyxRQUFoQyxDQUFuQixFQUE4RDtBQUMxRHZCLGFBQUssQ0FBRSxHQUFFc0IsUUFBUyxPQUFNQyxRQUFTLHNCQUE1QixDQUFMO0FBQ0FILGNBQU0sR0FBRyxLQUFUO0FBQ0g7O0FBQ0QsVUFBSUEsTUFBTSxJQUFJdEMsUUFBUSxLQUFLekMsT0FBTyxHQUFFLENBQWhDLElBQXFDLEVBQUUsTUFBTW9GLFdBQVcsQ0FBQ0YsUUFBRCxDQUFuQixDQUF6QyxFQUF3RTtBQUNwRXZCLGFBQUssQ0FBRSxHQUFFdUIsUUFBUyxlQUFiLENBQUw7QUFDQUgsY0FBTSxHQUFHLEtBQVQ7QUFDSDtBQUNKOztBQUNEakUsZUFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBTSxtQkFBZSxDQUFDMkQsTUFBRCxDQUFmOztBQUNBLFFBQUlBLE1BQUosRUFBWTtBQUNScEIsV0FBSyxDQUFDLFVBQUQsQ0FBTDtBQUNIO0FBQ0osR0E1QkQ7O0FBOEJBLFFBQU13QixjQUFjLEdBQUcsQ0FBQ0gsU0FBRCxFQUFZSyx1QkFBWixFQUFxQ0MsWUFBckMsRUFBbURDLFdBQW5ELEtBQW1FO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFJQyxZQUFZLEdBQUcxQyxLQUFLLENBQUNDLElBQU4sQ0FBV2lDLFNBQVgsQ0FBbkI7QUFDQSxRQUFJUyxlQUFlLEdBQUczQyxLQUFLLENBQUNDLElBQU4sQ0FBV3VDLFlBQVgsQ0FBdEI7QUFDQSxRQUFJSSxjQUFjLEdBQUc1QyxLQUFLLENBQUNDLElBQU4sQ0FBV3dDLFdBQVgsQ0FBckI7QUFDQSxRQUFJSSxrQkFBa0IsR0FBRyxDQUF6QjtBQUNBLFFBQUlDLHFCQUFxQixHQUFHLENBQTVCOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsY0FBYyxDQUFDbEQsTUFBbkMsRUFBMkNxRCxDQUFDLEVBQTVDLEVBQWdEO0FBQzlDLFVBQUlILGNBQWMsQ0FBQ0csQ0FBRCxDQUFkLEtBQXNCTCxZQUFZLENBQUNLLENBQUQsQ0FBdEMsRUFBMkM7QUFDekNGLDBCQUFrQjtBQUNuQjs7QUFDRCxVQUFJRCxjQUFjLENBQUNHLENBQUQsQ0FBZCxLQUFzQkosZUFBZSxDQUFDSSxDQUFELENBQXpDLEVBQThDO0FBQzVDRCw2QkFBcUI7QUFDdEI7QUFDRjs7QUFDRCxXQUFRRCxrQkFBa0IsS0FBS04sdUJBQXZCLElBQWtETyxxQkFBcUIsS0FBSyxDQUFwRjtBQUNELEdBcEJIOztBQXNCQSxpQkFBZVIsV0FBZixDQUEyQlUsSUFBM0IsRUFBaUM7QUFDN0IsUUFBSTVELEdBQUcsR0FBSSxHQUFFaEMsT0FBUSxvQkFBbUI0RixJQUFJLENBQUNDLFdBQUwsRUFBbUIsRUFBM0Q7QUFDQSxVQUFNNUQsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0YsR0FBRCxDQUE1QjtBQUNBLFVBQU04RCxLQUFLLEdBQUcsTUFBTTdELFFBQVEsQ0FBQ0csSUFBVCxFQUFwQjtBQUNBLFdBQU8wRCxLQUFLLENBQUNDLE1BQWI7QUFDSDs7QUFFRCxzQkFDSTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQThCLGFBQVMsRUFBR0MsQ0FBRCxJQUFPO0FBQUN6QyxtQkFBYSxDQUFDeUMsQ0FBRCxDQUFiO0FBQWtCLEtBQW5FO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLHdDQUVJO0FBQVEsaUJBQVMsRUFBQyxVQUFsQjtBQUE2QixlQUFPLEVBQUUsTUFBTTtBQUFDbkcsb0JBQVUsQ0FBQyxNQUFELENBQVY7QUFBb0IsU0FBakU7QUFBQSwrQkFDSTtBQUFHLG1CQUFTLEVBQUMsZ0JBQWI7QUFBOEIseUJBQVksU0FBMUM7QUFBb0QsZUFBSyxFQUFDLE1BQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFPS1csT0FBTyxpQkFBSTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBoQixFQVFLLENBQUNBLE9BQUQsaUJBQVk7QUFBQSw4QkFDVDtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFBLG9CQUNLZSxLQUFLLENBQUMwRSxHQUFOLENBQVUsQ0FBQ0MsUUFBRCxFQUFXM0QsUUFBWCxrQkFDUDtBQUFBLHNCQUNLMkQsUUFBUSxDQUFDbkQsUUFBVCxDQUFrQmtELEdBQWxCLENBQXNCLENBQUNoRCxJQUFELEVBQU9ELFFBQVAsa0JBQ25CO0FBQ0EscUJBQU8sRUFBRSxNQUFNO0FBQUNNLCtCQUFlLENBQUNmLFFBQUQsRUFBVVMsUUFBVixDQUFmO0FBQW9DLGVBRHBEO0FBRUEsdUJBQVMsRUFBRyxjQUFhL0IsWUFBWSxHQUFHVixZQUFILEdBQWtCUSxZQUFZLEdBQUdiLGlCQUFILEdBQXVCK0MsSUFBSSxDQUFDRyxTQUFMLElBQWtCYixRQUFRLEtBQUtkLFFBQVEsQ0FBQ0UsR0FBdEIsSUFBNkJxQixRQUFRLEtBQUt2QixRQUFRLENBQUNHLEdBQW5ELEdBQXlEeEIsZUFBekQsR0FBMkUsRUFBN0YsQ0FBaUcsRUFGM0w7QUFBQSx3QkFHS1csWUFBWSxnQkFDVDtBQUFBLDBCQUFPa0MsSUFBSSxDQUFDRTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRFMsZ0JBR1Q7QUFBQSwwQkFBT0YsSUFBSSxDQUFDQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOUixlQUFVLGFBQVlYLFFBQVMsSUFBR1MsUUFBUyxFQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURIO0FBREwsYUFBVSxZQUFXVCxRQUFTLEVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUyxlQXFCVDtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBLG1CQUNLLENBQUMvQixPQUFELElBQVksQ0FBQ0csUUFBYixJQUF5QixDQUFDTSxZQUExQixpQkFBMEM7QUFBSyxtQkFBUyxFQUFDLGFBQWY7QUFBQSxrQ0FDdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRHVDLGVBRXZDO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLGdCQUFJLEVBQUMsZUFBeEI7QUFBd0MsaUJBQUssRUFBQyxFQUE5QztBQUNJLG9CQUFRLEVBQUcrRSxDQUFELElBQU87QUFBQ2hDLCtCQUFpQixDQUFDZ0MsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLEtBQVYsQ0FBakI7QUFBbUM7QUFEekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGdUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUQvQyxlQU9JO0FBQUEsaUVBQTRDakYsU0FBNUMsVUFBMkRFLFFBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQSixlQVFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJKLGVBU0k7QUFBUSxtQkFBUyxFQUFDLFVBQWxCO0FBQTZCLGlCQUFPLEVBQUUsTUFBTTtBQUFDc0QsOEJBQWtCO0FBQUksV0FBbkU7QUFBQSxvQkFDTSxHQUFFNUQsWUFBWSxHQUFHLGVBQUgsR0FBcUIsaUJBQWtCO0FBRDNEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEosRUFZSyxDQUFDRSxZQUFELElBQWlCSixRQUFqQixpQkFBNkI7QUFBSyxtQkFBUyxFQUFDLGFBQWY7QUFBQSxpQ0FDMUI7QUFBUSxxQkFBUyxFQUFDLFVBQWxCO0FBQTZCLG1CQUFPLEVBQUUsTUFBTTtBQUFDK0QsMkJBQWE7QUFBSSxhQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUQwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVpsQyxFQWlCSzNELFlBQVksaUJBQUk7QUFBSyxtQkFBUyxFQUFDLGFBQWY7QUFBQSxpQ0FDYjtBQUFRLHFCQUFTLEVBQUMsVUFBbEI7QUFBNkIsbUJBQU8sRUFBRSxNQUFNO0FBQUNhLDZCQUFlO0FBQUksYUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEYTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWpCckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXJCUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBd0RILENBM1NEOztHQUFNbEMsTTs7S0FBQUEsTTtBQTZTTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41NmJlOWIzYTE4YjIyNGQyZDhkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IE1vcnBobyA9ICh7c2V0V2hlcmV0b30pID0+IHtcclxuICAgIGNvbnN0IG51bVJvd3MgPSA2O1xyXG4gICAgY29uc3QgbnVtQ29scyA9IDU7XHJcbiAgICBjb25zdCBiYXNldXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbSc7XHJcbiAgICBjb25zdCBjc3NQcmVzZXRMZXR0ZXIgPSBcIm1vcnBob0NlbGxTdGF0aWNcIjtcclxuICAgIGNvbnN0IGNzc1NvbHV0aW9uTGV0dGVyID0gXCJtb3JwaG9DZWxsU29sdXRpb25cIjtcclxuICAgIGNvbnN0IGNzc05vTGV0dGVyID0gXCJtb3JwaG9DZWxsTm9MZXR0ZXJcIjtcclxuICAgIGNvbnN0IGNzc1NlbGVjdGVkQ2VsbCA9IFwiIG1vcnBob0NlbGxTZWxlY3RlZFwiO1xyXG4gICAgY29uc3QgY3NzTGV0dGVyT25QYXJ0aWFsUm93ID0gXCJtb3JwaG9DZWxsTGV0dGVyT25QYXJ0aWFsbHlGaWxsZWRJblJvd1wiO1xyXG4gICAgY29uc3QgY3NzTGV0dGVyT25GdWxsUm93ID0gXCJtb3JwaG9DZWxsTGV0dGVyT25GdWxseUZpbGxlZEluUm93XCI7XHJcbiAgICBjb25zdCBjc3NCdXR0ZXJmbHkgPSBcIm1vcnBob0NlbGxTb2x1dGlvblwiO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbY2hlY2tpbmcsIHNldENoZWNraW5nXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gU2V0IHdoZW4gY2hlY2tpbmcgc29sdXRpb24gdG8gcHJldmVudCBmdXJ0aGVyIGFsdGVyYXRpb25zXHJcbiAgICBjb25zdCBbZmlsbGVkaW4sIHNldEZpbGxlZGluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93U29sdXRpb24sIHNldFNob3dTb2x1dGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcHV6emxlU29sdmVkLCBzZXRQdXp6bGVTb2x2ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2ZpcnN0V29yZCwgc2V0Rmlyc3RXb3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtsYXN0V29yZCwgc2V0TGFzdFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2JvYXJkLCBzZXRCb2FyZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKHtyb3c6MSwgY29sOjB9KTsgLy8gTmF0dXJhbCBwbGFjZSB0byBzdGFydCBlbnRlcmluZyBsZXR0ZXJzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldEluaXRpYWxCb2FyZCgpO1xyXG4gICAgfSxbXSk7XHJcbiAgICBjb25zdCBzZXRJbml0aWFsQm9hcmQgPSBhc3luYygpID0+IHsgLy8gSW5pdGlhbCBib2FyZCBvZiBnaXZlbiBzaXplXHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBzZXRDaGVja2luZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0U2hvd1NvbHV0aW9uKGZhbHNlKTtcclxuICAgICAgICBzZXRGaWxsZWRpbihmYWxzZSk7XHJcbiAgICAgICAgc2V0UHV6emxlU29sdmVkKGZhbHNlKTtcclxuICAgICAgICBsZXQgcm93QXJyYXkgPSBbXTtcclxuICAgICAgICBsZXQgdXJsID0gYCR7YmFzZXVybH0vRU5BQkxFMks/bW9ycGhvPXRydWUmbGVuPSR7bnVtQ29sc31gO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGlmICghZGF0YS5ub3RlcyB8fCBkYXRhLm5vdGVzLmxlbmd0aCA9PT0gMCkgeyAvLyBPayByZXN1bHRcclxuICAgICAgICAgICAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IG51bVJvd3M7IHJvd0luZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd1dvcmQgPSBkYXRhLnB1enpsZVtyb3dJbmRleF0udG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIGlmIChyb3dJbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZpcnN0V29yZChyb3dXb3JkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocm93SW5kZXggPT09IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGFzdFdvcmQocm93V29yZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3dMZXR0ZXJzID0gWy4uLkFycmF5LmZyb20ocm93V29yZCldO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvd0ZpbGxlZEluID0gcm93SW5kZXggPT09IDAgfHwgcm93SW5kZXggPT09IG51bVJvd3MgLSAxO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbEFycmF5ID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgbnVtQ29sczsgY29sSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsID0ge2xldHRlcjonPycsc29sdXRpb246cm93TGV0dGVyc1tjb2xJbmRleF0sY2xhc3NOYW1lOic/J307XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvd0luZGV4ID09PSAwIHx8IHJvd0luZGV4ID09PSBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmxldHRlciA9IHJvd0xldHRlcnNbY29sSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9IGNzc1ByZXNldExldHRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmxldHRlciA9ICc/JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBjc3NOb0xldHRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sQXJyYXkucHVzaChjZWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJvd0FycmF5LnB1c2goe2ZpbGxlZGluOnJvd0ZpbGxlZEluLCBjb2xBcnJheTpjb2xBcnJheX0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEJvYXJkKHJvd0FycmF5KTtcclxuICAgICAgICBzZXRTZWxlY3RlZCh7cm93OjEsY29sOjB9KTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3Rpb24gPSAocm93SW5kZXgsIGNvbEluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKHJvd0luZGV4IDwgMSB8fCByb3dJbmRleCA+PSBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2xJbmRleCA8IDAgfHwgcm93SW5kZXggPj0gbnVtQ29scykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGVkKHtyb3c6cm93SW5kZXgsY29sOmNvbEluZGV4fSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGFsZXJ0KGV2ZW50LmtleSk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoY2hlY2tpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBObyBtb2RlcyB3aGlsZSBjaGVja2luZyBzb2x1dGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHV6emxlU29sdmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gUHV6emxlIGFscmVhZHkgc29sdmVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIDM3OlxyXG4gICAgICAgICAgICAgICAgcmV0cmVhdFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzODpcclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZC5yb3cgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1NlbGVjdGVkID0ge3Jvdzogc2VsZWN0ZWQucm93IC0gMSwgY29sOiBzZWxlY3RlZC5jb2x9O1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKG5ld1NlbGVjdGVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM5OlxyXG4gICAgICAgICAgICAgICAgYWR2YW5jZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0MDpcclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZC5yb3cgPCBudW1Sb3dzIC0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6IHNlbGVjdGVkLnJvdyArIDEsIGNvbDogc2VsZWN0ZWQuY29sfTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0TGV0dGVyKGV2ZW50LmtleSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRMZXR0ZXIgPSAobGV0dGVyKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gc2VsZWN0ZWQucm93O1xyXG4gICAgICAgIGxldCBjb2xJbmRleCA9IHNlbGVjdGVkLmNvbDtcclxuICAgICAgICBpZiAocm93SW5kZXggPCAxIHx8IHJvd0luZGV4ID49IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbEluZGV4IDwgMCB8fCByb3dJbmRleCA+PSBudW1Db2xzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxldHRlcnRlc3QgPSAvXltBLVphLXpcXD9dJC87IC8vIHNpbmdsZSBsZXR0ZXIgb3IgcXVlc3Rpb24gbWFyayBrZXkgcHJlc3NlZFxyXG4gICAgICAgIGxldCBhZHZhbmNlU2VsZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICBsZXQgcmV0cmVhdFNlbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChsZXR0ZXIubWF0Y2gobGV0dGVydGVzdCkpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiQmFja3NwYWNlXCIpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gXCI/XCI7XHJcbiAgICAgICAgICAgIHJldHJlYXRTZWxlY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIkRlbGV0ZVwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IFwiP1wiO1xyXG4gICAgICAgICAgICBhZHZhbmNlU2VsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcm93QXJyYXkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGJvYXJkKSk7XHJcbiAgICAgICAgcm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXIgPSBsZXR0ZXI7XHJcbiAgICAgICAgcm93QXJyYXlbcm93SW5kZXhdLmZpbGxlZGluID0gKHJvd0FycmF5W3Jvd0luZGV4XS5jb2xBcnJheS5maWx0ZXIoKGNlbGwpID0+IHtyZXR1cm4gY2VsbC5sZXR0ZXIgPT09IFwiP1wiO30pLmxlbmd0aCA9PT0gMCk7XHJcbiAgICAgICAgZm9yIChsZXQgY2kgPSAwOyBjaSA8IG51bUNvbHM7IGNpKyspIHtcclxuICAgICAgICAgICAgaWYgKHJvd0FycmF5W3Jvd0luZGV4XS5jb2xBcnJheVtjaV0ubGV0dGVyID09PSBcIj9cIikge1xyXG4gICAgICAgICAgICAgICAgcm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5W2NpXS5jbGFzc05hbWUgPSBjc3NOb0xldHRlcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJvd0FycmF5W3Jvd0luZGV4XS5jb2xBcnJheVtjaV0uY2xhc3NOYW1lID0gcm93QXJyYXlbcm93SW5kZXhdLmZpbGxlZGluID8gY3NzTGV0dGVyT25GdWxsUm93IDogY3NzTGV0dGVyT25QYXJ0aWFsUm93O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhZHZhbmNlU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGFkdmFuY2VQb3NpdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmV0cmVhdFNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICByZXRyZWF0UG9zaXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvd0FycmF5LmZpbHRlcihyID0+IHtyZXR1cm4gIXIuZmlsbGVkaW47fSkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIEFsbCBsZXR0ZXJzIGFyZSBmaWxsZWQgaW5cclxuICAgICAgICAgICAgc2V0RmlsbGVkaW4odHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEJvYXJkKHJvd0FycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZHZhbmNlUG9zaXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGVkID0ge3JvdzoxLGNvbDowfTtcclxuICAgICAgICBpZiAoY29sSW5kZXggKyAxIDwgbnVtQ29scykge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleDtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXggKyAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocm93SW5kZXggKyAxIDwgbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gcm93SW5kZXggKyAxO1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0cmVhdFBvc2l0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6bnVtUm93cy0yLGNvbDpudW1Db2xzLTF9O1xyXG4gICAgICAgIGlmIChjb2xJbmRleCAtIDEgPiAtMSkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleDtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXggLSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocm93SW5kZXggLSAxID4gMCkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleCAtIDE7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IG51bUNvbHMgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlU2hvd1NvbHV0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dTb2x1dGlvbighc2hvd1NvbHV0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVja1NvbHV0aW9uID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgc2V0Q2hlY2tpbmcodHJ1ZSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgbGV0IHN0YXJ0V29yZCA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IG51bUNvbHM7IGNvbEluZGV4KyspIHtcclxuICAgICAgICAgICAgc3RhcnRXb3JkID0gc3RhcnRXb3JkICsgYm9hcmRbMF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCByb3dJbmRleCA9IDE7IHJlc3VsdCAmJiByb3dJbmRleCA8IG51bVJvd3M7IHJvd0luZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IHByZXZXb3JkID0gXCJcIjtcclxuICAgICAgICAgICAgbGV0IGN1cnJXb3JkID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IG51bUNvbHM7IGNvbEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIHByZXZXb3JkID0gcHJldldvcmQgKyBib2FyZFtyb3dJbmRleC0xXS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgY3VycldvcmQgPSBjdXJyV29yZCArIGJvYXJkW3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdmFsaWROZXh0TW9ycGgoc3RhcnRXb3JkLCByb3dJbmRleCwgcHJldldvcmQsIGN1cnJXb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYCR7cHJldldvcmR9IHRvICR7Y3VycldvcmR9IGlzIG5vdCBhIHZhbGlkIG1vdmVgKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcm93SW5kZXggIT09IG51bVJvd3MgLTEgJiYgISBhd2FpdCBpc1dvcmRWYWxpZChjdXJyV29yZCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGAke2N1cnJXb3JkfSBpcyBub3QgdmFsaWRgKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldENoZWNraW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRQdXp6bGVTb2x2ZWQocmVzdWx0KTtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiU3VjY2VzcyFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZhbGlkTmV4dE1vcnBoID0gKHN0YXJ0V29yZCwgcmVxdWlyZWREaWZmTGV0dGVyQ291bnQsIHByZXZpb3VzV29yZCwgY3VycmVudFdvcmQpID0+IHtcclxuICAgICAgICAvLyBTdGFydCB3b3JkIGlzIHJvdyBpbmRleCAwXHJcbiAgICAgICAgLy8gV29yZCBhdCByb3cgaW5kZXggMSBtdXN0IGhhdmUgMSBsZXR0ZXIgc3dhcFxyXG4gICAgICAgIC8vIFdvcmQgYXQgcm93IGluZGV4IDIgbXVzdCBoYXZlIDIgbGV0dGVyIHN3YXBzIHJlbGF0aXZlIHRvIHRoZSBzdGFydCB3b3JkLCBhbmQgMSByZWxhdGl2ZSB0byBwcmV2aW91cyB3b3JkXHJcbiAgICAgICAgLy8gV29yZCBhdCByb3cgaW5kZXggMyBtdXN0IGhhdmUgMyBsZXR0ZXIgc3dhcHMgcmVsYXRpdmUgdG8gdGhlIHN0YXJ0IHdvcmQsIGFuZCAxIHJlbGF0aXZlIHRvIHByZXZpb3VzIHdvcmRcclxuICAgICAgICAvLyBFdGMuIFNvIHBhc3Mgcm93IGluZGV4IHRvIHJlcXVpcmVkRGlmZkxldHRlckNvdW50LlxyXG4gICAgICAgIGxldCBzdGFydExldHRlcnMgPSBBcnJheS5mcm9tKHN0YXJ0V29yZCk7XHJcbiAgICAgICAgbGV0IHByZXZpb3VzTGV0dGVycyA9IEFycmF5LmZyb20ocHJldmlvdXNXb3JkKTtcclxuICAgICAgICBsZXQgY3VycmVudExldHRlcnMgPSBBcnJheS5mcm9tKGN1cnJlbnRXb3JkKTtcclxuICAgICAgICBsZXQgZGlmZkZyb21TdGFydENvdW50ID0gMDtcclxuICAgICAgICBsZXQgZGlmZkZyb21QcmV2aW91c0NvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAoY3VycmVudExldHRlcnNbaV0gIT09IHN0YXJ0TGV0dGVyc1tpXSkge1xyXG4gICAgICAgICAgICBkaWZmRnJvbVN0YXJ0Q291bnQrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChjdXJyZW50TGV0dGVyc1tpXSAhPT0gcHJldmlvdXNMZXR0ZXJzW2ldKSB7XHJcbiAgICAgICAgICAgIGRpZmZGcm9tUHJldmlvdXNDb3VudCsrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKGRpZmZGcm9tU3RhcnRDb3VudCA9PT0gcmVxdWlyZWREaWZmTGV0dGVyQ291bnQgJiYgZGlmZkZyb21QcmV2aW91c0NvdW50ID09PSAxKTtcclxuICAgICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGlzV29yZFZhbGlkKHdvcmQpIHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7YmFzZXVybH0vRU5BQkxFMks/ZXhpc3RzPSR7d29yZC50b0xvd2VyQ2FzZSgpfWA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGpkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBqZGF0YS5leGlzdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiIG9uS2V5RG93bj17KGUpID0+IHtoYW5kbGVLZXlEb3duKGUpO319PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIE1vcnBob1xyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7bG9hZGluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cInRyRW1waGFzaXNcIj5DcmVhdGluZyBwdXp6bGUsIHBsZWFzZSBiZSBwYXRpZW50Li4uPC9kaXY+fVxyXG4gICAgICAgICAgICB7IWxvYWRpbmcgJiYgPGRpdj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQvPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JvYXJkLm1hcCgoYm9hcmRSb3csIHJvd0luZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgQm9hcmRSb3cuJHtyb3dJbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym9hcmRSb3cuY29sQXJyYXkubWFwKChjZWxsLCBjb2xJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtgQm9hcmRDZWxsLiR7cm93SW5kZXh9LiR7Y29sSW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge2hhbmRsZVNlbGVjdGlvbihyb3dJbmRleCxjb2xJbmRleCk7fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbW9ycGhvQ2VsbCAke3B1enpsZVNvbHZlZCA/IGNzc0J1dHRlcmZseSA6IHNob3dTb2x1dGlvbiA/IGNzc1NvbHV0aW9uTGV0dGVyIDogY2VsbC5jbGFzc05hbWUgKyAocm93SW5kZXggPT09IHNlbGVjdGVkLnJvdyAmJiBjb2xJbmRleCA9PT0gc2VsZWN0ZWQuY29sID8gY3NzU2VsZWN0ZWRDZWxsIDogXCJcIil9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd1NvbHV0aW9uID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2VsbC5zb2x1dGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NlbGwubGV0dGVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHshbG9hZGluZyAmJiAhY2hlY2tpbmcgJiYgIXB1enpsZVNvbHZlZCAmJiA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk5leHQgTGV0dGVyOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImdldG5leHRsZXR0ZXJcIiB2YWx1ZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtoYW5kbGVJbnB1dExldHRlcihlLnRhcmdldC52YWx1ZSk7fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Q2hhbmdlIG9uZSBsZXR0ZXIgYXQgYSB0aW1lIHRvIGdldCBmcm9tIHtmaXJzdFdvcmR9IHRvIHtsYXN0V29yZH0uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkVhY2ggaW50ZXJpbSB3b3JkIG11c3QgYmUgYSB2YWxpZCB3b3JkLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3RvZ2dsZVNob3dTb2x1dGlvbigpO319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YCR7c2hvd1NvbHV0aW9uID8gJ0hJREUgU09MVVRJT04nIDogJ1NIT1cgQSBTT0xVVElPTid9YH1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7IXB1enpsZVNvbHZlZCAmJiBmaWxsZWRpbiAmJiA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7Y2hlY2tTb2x1dGlvbigpO319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU1VCTUlUIFlPVVIgU09MVVRJT05cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIHtwdXp6bGVTb2x2ZWQgJiYgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldEluaXRpYWxCb2FyZCgpO319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR0VORVJBVEUgQU5PVEhFUiBQVVpaTEVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9ycGhvOyJdLCJzb3VyY2VSb290IjoiIn0=