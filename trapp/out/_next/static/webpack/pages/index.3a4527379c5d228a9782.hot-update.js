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
          lineNumber: 250,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 13
    }, undefined), loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trEmphasis",
      children: "Creating puzzle, please be patient..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 25
    }, undefined), !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 256,
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
                lineNumber: 265,
                columnNumber: 45
              }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: cell.letter
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 267,
                columnNumber: 45
              }, undefined)
            }, `BoardCell.${rowIndex}.${colIndex}`, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 37
            }, undefined))
          }, `BoardRow.${rowIndex}`, false, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 29
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: [!loading && !checking && !puzzleSolved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "trParagraph",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Next Letter:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 277,
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
            lineNumber: 278,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 64
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Change one letter at a time to get from ", firstWord, " to ", lastWord, "."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Each interim word must be a valid word."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton",
          onClick: () => {
            toggleShowSolution();
          },
          children: `${showSolution ? 'HIDE SOLUTION' : 'SHOW A SOLUTION'}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
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
            lineNumber: 288,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 287,
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
            lineNumber: 293,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 38
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 26
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 246,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9ycGhvL21vcnBoby5qcyJdLCJuYW1lcyI6WyJNb3JwaG8iLCJzZXRXaGVyZXRvIiwibnVtUm93cyIsIm51bUNvbHMiLCJiYXNldXJsIiwiY3NzUHJlc2V0TGV0dGVyIiwiY3NzU29sdXRpb25MZXR0ZXIiLCJjc3NOb0xldHRlciIsImNzc1NlbGVjdGVkQ2VsbCIsImNzc0xldHRlck9uUGFydGlhbFJvdyIsImNzc0xldHRlck9uRnVsbFJvdyIsImNzc0J1dHRlcmZseSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJjaGVja2luZyIsInNldENoZWNraW5nIiwiZmlsbGVkaW4iLCJzZXRGaWxsZWRpbiIsInNob3dTb2x1dGlvbiIsInNldFNob3dTb2x1dGlvbiIsInB1enpsZVNvbHZlZCIsInNldFB1enpsZVNvbHZlZCIsImZpcnN0V29yZCIsInNldEZpcnN0V29yZCIsImxhc3RXb3JkIiwic2V0TGFzdFdvcmQiLCJib2FyZCIsInNldEJvYXJkIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInJvdyIsImNvbCIsInVzZUVmZmVjdCIsInNldEluaXRpYWxCb2FyZCIsInJvd0FycmF5IiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwibm90ZXMiLCJsZW5ndGgiLCJyb3dJbmRleCIsInJvd1dvcmQiLCJwdXp6bGUiLCJ0b1VwcGVyQ2FzZSIsInJvd0xldHRlcnMiLCJBcnJheSIsImZyb20iLCJyb3dGaWxsZWRJbiIsImNvbEFycmF5IiwiY29sSW5kZXgiLCJjZWxsIiwibGV0dGVyIiwic29sdXRpb24iLCJjbGFzc05hbWUiLCJwdXNoIiwiaGFuZGxlU2VsZWN0aW9uIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJrZXlDb2RlIiwicmV0cmVhdFBvc2l0aW9uIiwibmV3U2VsZWN0ZWQiLCJhZHZhbmNlUG9zaXRpb24iLCJoYW5kbGVJbnB1dExldHRlciIsImtleSIsImxldHRlcnRlc3QiLCJhZHZhbmNlU2VsZWN0aW9uIiwicmV0cmVhdFNlbGVjdGlvbiIsIm1hdGNoIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZmlsdGVyIiwiY2kiLCJyIiwidG9nZ2xlU2hvd1NvbHV0aW9uIiwiY2hlY2tTb2x1dGlvbiIsInJlc3VsdCIsInN0YXJ0V29yZCIsInByZXZXb3JkIiwiY3VycldvcmQiLCJ2YWxpZE5leHRNb3JwaCIsImFsZXJ0IiwiaXNXb3JkVmFsaWQiLCJyZXF1aXJlZERpZmZMZXR0ZXJDb3VudCIsInByZXZpb3VzV29yZCIsImN1cnJlbnRXb3JkIiwic3RhcnRMZXR0ZXJzIiwicHJldmlvdXNMZXR0ZXJzIiwiY3VycmVudExldHRlcnMiLCJkaWZmRnJvbVN0YXJ0Q291bnQiLCJkaWZmRnJvbVByZXZpb3VzQ291bnQiLCJpIiwid29yZCIsInRvTG93ZXJDYXNlIiwiamRhdGEiLCJleGlzdHMiLCJlIiwibWFwIiwiYm9hcmRSb3ciLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBa0I7QUFBQTs7QUFDN0IsUUFBTUMsT0FBTyxHQUFHLENBQWhCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHLENBQWhCO0FBQ0EsUUFBTUMsT0FBTyxHQUFJLEtBQUQsR0FBb0UsdUJBQXBFLEdBQThGLENBQTlHO0FBQ0EsUUFBTUMsZUFBZSxHQUFHLGtCQUF4QjtBQUNBLFFBQU1DLGlCQUFpQixHQUFHLG9CQUExQjtBQUNBLFFBQU1DLFdBQVcsR0FBRyxvQkFBcEI7QUFDQSxRQUFNQyxlQUFlLEdBQUcscUJBQXhCO0FBQ0EsUUFBTUMscUJBQXFCLEdBQUcsd0NBQTlCO0FBQ0EsUUFBTUMsa0JBQWtCLEdBQUcsb0NBQTNCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHLG9CQUFyQjtBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FB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QTtBQUFBLHFCQVBKLGVBUUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkosZUFTSTtBQUFRLG1CQUFTLEVBQUMsVUFBbEI7QUFBNkIsaUJBQU8sRUFBRSxNQUFNO0FBQUNxRCw4QkFBa0I7QUFBSSxXQUFuRTtBQUFBLG9CQUNNLEdBQUUzRCxZQUFZLEdBQUcsZUFBSCxHQUFxQixpQkFBa0I7QUFEM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFUSixFQVlLLENBQUNFLFlBQUQsSUFBaUJKLFFBQWpCLGlCQUE2QjtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBLGlDQUMxQjtBQUFRLHFCQUFTLEVBQUMsVUFBbEI7QUFBNkIsbUJBQU8sRUFBRSxNQUFNO0FBQUM4RCwyQkFBYTtBQUFJLGFBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRDBCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWmxDLEVBaUJLMUQsWUFBWSxpQkFBSTtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBLGlDQUNiO0FBQVEscUJBQVMsRUFBQyxVQUFsQjtBQUE2QixtQkFBTyxFQUFFLE1BQU07QUFBQ2EsNkJBQWU7QUFBSSxhQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURhO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBakJyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBckJTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUF3REgsQ0ExU0Q7O0dBQU1sQyxNOztLQUFBQSxNO0FBNFNOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNhNDUyNzM3OWM1ZDIyOGE5NzgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTW9ycGhvID0gKHtzZXRXaGVyZXRvfSkgPT4ge1xyXG4gICAgY29uc3QgbnVtUm93cyA9IDY7XHJcbiAgICBjb25zdCBudW1Db2xzID0gNTtcclxuICAgIGNvbnN0IGJhc2V1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tJztcclxuICAgIGNvbnN0IGNzc1ByZXNldExldHRlciA9IFwibW9ycGhvQ2VsbFN0YXRpY1wiO1xyXG4gICAgY29uc3QgY3NzU29sdXRpb25MZXR0ZXIgPSBcIm1vcnBob0NlbGxTb2x1dGlvblwiO1xyXG4gICAgY29uc3QgY3NzTm9MZXR0ZXIgPSBcIm1vcnBob0NlbGxOb0xldHRlclwiO1xyXG4gICAgY29uc3QgY3NzU2VsZWN0ZWRDZWxsID0gXCIgbW9ycGhvQ2VsbFNlbGVjdGVkXCI7XHJcbiAgICBjb25zdCBjc3NMZXR0ZXJPblBhcnRpYWxSb3cgPSBcIm1vcnBob0NlbGxMZXR0ZXJPblBhcnRpYWxseUZpbGxlZEluUm93XCI7XHJcbiAgICBjb25zdCBjc3NMZXR0ZXJPbkZ1bGxSb3cgPSBcIm1vcnBob0NlbGxMZXR0ZXJPbkZ1bGx5RmlsbGVkSW5Sb3dcIjtcclxuICAgIGNvbnN0IGNzc0J1dHRlcmZseSA9IFwibW9ycGhvQ2VsbFNvbHV0aW9uXCI7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtjaGVja2luZywgc2V0Q2hlY2tpbmddID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBTZXQgd2hlbiBjaGVja2luZyBzb2x1dGlvbiB0byBwcmV2ZW50IGZ1cnRoZXIgYWx0ZXJhdGlvbnNcclxuICAgIGNvbnN0IFtmaWxsZWRpbiwgc2V0RmlsbGVkaW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dTb2x1dGlvbiwgc2V0U2hvd1NvbHV0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwdXp6bGVTb2x2ZWQsIHNldFB1enpsZVNvbHZlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZmlyc3RXb3JkLCBzZXRGaXJzdFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2xhc3RXb3JkLCBzZXRMYXN0V29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbYm9hcmQsIHNldEJvYXJkXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoe3JvdzoxLCBjb2w6MH0pOyAvLyBOYXR1cmFsIHBsYWNlIHRvIHN0YXJ0IGVudGVyaW5nIGxldHRlcnNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SW5pdGlhbEJvYXJkKCk7XHJcbiAgICB9LFtdKTtcclxuICAgIGNvbnN0IHNldEluaXRpYWxCb2FyZCA9IGFzeW5jKCkgPT4geyAvLyBJbml0aWFsIGJvYXJkIG9mIGdpdmVuIHNpemVcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHNldENoZWNraW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRTaG93U29sdXRpb24oZmFsc2UpO1xyXG4gICAgICAgIHNldEZpbGxlZGluKGZhbHNlKTtcclxuICAgICAgICBzZXRQdXp6bGVTb2x2ZWQoZmFsc2UpO1xyXG4gICAgICAgIGxldCByb3dBcnJheSA9IFtdO1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHtiYXNldXJsfS9FTkFCTEUySz9tb3JwaG89dHJ1ZSZsZW49JHtudW1Db2xzfWA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgaWYgKCFkYXRhLm5vdGVzIHx8IGRhdGEubm90ZXMubGVuZ3RoID09PSAwKSB7IC8vIE9rIHJlc3VsdFxyXG4gICAgICAgICAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgbnVtUm93czsgcm93SW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93V29yZCA9IGRhdGEucHV6emxlW3Jvd0luZGV4XS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvd0luZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Rmlyc3RXb3JkKHJvd1dvcmQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyb3dJbmRleCA9PT0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMYXN0V29yZChyb3dXb3JkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd0xldHRlcnMgPSBbLi4uQXJyYXkuZnJvbShyb3dXb3JkKV07XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93RmlsbGVkSW4gPSByb3dJbmRleCA9PT0gMCB8fCByb3dJbmRleCA9PT0gbnVtUm93cyAtIDE7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBudW1Db2xzOyBjb2xJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGwgPSB7bGV0dGVyOic/Jyxzb2x1dGlvbjpyb3dMZXR0ZXJzW2NvbEluZGV4XSxjbGFzc05hbWU6Jz8nfTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocm93SW5kZXggPT09IDAgfHwgcm93SW5kZXggPT09IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwubGV0dGVyID0gcm93TGV0dGVyc1tjb2xJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gY3NzUHJlc2V0TGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwubGV0dGVyID0gJz8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9IGNzc05vTGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb2xBcnJheS5wdXNoKGNlbGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcm93QXJyYXkucHVzaCh7ZmlsbGVkaW46cm93RmlsbGVkSW4sIGNvbEFycmF5OmNvbEFycmF5fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Qm9hcmQocm93QXJyYXkpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkKHtyb3c6MSxjb2w6MH0pO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdGlvbiA9IChyb3dJbmRleCwgY29sSW5kZXgpID0+IHtcclxuICAgICAgICBpZiAocm93SW5kZXggPCAxIHx8IHJvd0luZGV4ID49IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbEluZGV4IDwgMCB8fCByb3dJbmRleCA+PSBudW1Db2xzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQoe3Jvdzpyb3dJbmRleCxjb2w6Y29sSW5kZXh9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoY2hlY2tpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBObyBtb2RlcyB3aGlsZSBjaGVja2luZyBzb2x1dGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHV6emxlU29sdmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gUHV6emxlIGFscmVhZHkgc29sdmVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIDM3OlxyXG4gICAgICAgICAgICAgICAgcmV0cmVhdFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzODpcclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZC5yb3cgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1NlbGVjdGVkID0ge3Jvdzogc2VsZWN0ZWQucm93IC0gMSwgY29sOiBzZWxlY3RlZC5jb2x9O1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKG5ld1NlbGVjdGVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM5OlxyXG4gICAgICAgICAgICAgICAgYWR2YW5jZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0MDpcclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZC5yb3cgPCBudW1Sb3dzIC0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6IHNlbGVjdGVkLnJvdyArIDEsIGNvbDogc2VsZWN0ZWQuY29sfTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0TGV0dGVyKGV2ZW50LmtleSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRMZXR0ZXIgPSAobGV0dGVyKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gc2VsZWN0ZWQucm93O1xyXG4gICAgICAgIGxldCBjb2xJbmRleCA9IHNlbGVjdGVkLmNvbDtcclxuICAgICAgICBpZiAocm93SW5kZXggPCAxIHx8IHJvd0luZGV4ID49IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbEluZGV4IDwgMCB8fCByb3dJbmRleCA+PSBudW1Db2xzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxldHRlcnRlc3QgPSAvXltBLVphLXpcXD9dJC87IC8vIHNpbmdsZSBsZXR0ZXIgb3IgcXVlc3Rpb24gbWFyayBrZXkgcHJlc3NlZFxyXG4gICAgICAgIGxldCBhZHZhbmNlU2VsZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICBsZXQgcmV0cmVhdFNlbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChsZXR0ZXIubWF0Y2gobGV0dGVydGVzdCkpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiQmFja3NwYWNlXCIpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gXCI/XCI7XHJcbiAgICAgICAgICAgIHJldHJlYXRTZWxlY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIkRlbGV0ZVwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IFwiP1wiO1xyXG4gICAgICAgICAgICBhZHZhbmNlU2VsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcm93QXJyYXkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGJvYXJkKSk7XHJcbiAgICAgICAgcm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXIgPSBsZXR0ZXI7XHJcbiAgICAgICAgcm93QXJyYXlbcm93SW5kZXhdLmZpbGxlZGluID0gKHJvd0FycmF5W3Jvd0luZGV4XS5jb2xBcnJheS5maWx0ZXIoKGNlbGwpID0+IHtyZXR1cm4gY2VsbC5sZXR0ZXIgPT09IFwiP1wiO30pLmxlbmd0aCA9PT0gMCk7XHJcbiAgICAgICAgZm9yIChsZXQgY2kgPSAwOyBjaSA8IG51bUNvbHM7IGNpKyspIHtcclxuICAgICAgICAgICAgaWYgKHJvd0FycmF5W3Jvd0luZGV4XS5jb2xBcnJheVtjaV0ubGV0dGVyID09PSBcIj9cIikge1xyXG4gICAgICAgICAgICAgICAgcm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5W2NpXS5jbGFzc05hbWUgPSBjc3NOb0xldHRlcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJvd0FycmF5W3Jvd0luZGV4XS5jb2xBcnJheVtjaV0uY2xhc3NOYW1lID0gcm93QXJyYXlbcm93SW5kZXhdLmZpbGxlZGluID8gY3NzTGV0dGVyT25GdWxsUm93IDogY3NzTGV0dGVyT25QYXJ0aWFsUm93O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhZHZhbmNlU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGFkdmFuY2VQb3NpdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmV0cmVhdFNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICByZXRyZWF0UG9zaXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvd0FycmF5LmZpbHRlcihyID0+IHtyZXR1cm4gIXIuZmlsbGVkaW47fSkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIEFsbCBsZXR0ZXJzIGFyZSBmaWxsZWQgaW5cclxuICAgICAgICAgICAgc2V0RmlsbGVkaW4odHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEJvYXJkKHJvd0FycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZHZhbmNlUG9zaXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGVkID0ge3JvdzoxLGNvbDowfTtcclxuICAgICAgICBpZiAoY29sSW5kZXggKyAxIDwgbnVtQ29scykge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleDtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXggKyAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocm93SW5kZXggKyAxIDwgbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gcm93SW5kZXggKyAxO1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0cmVhdFBvc2l0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6bnVtUm93cy0yLGNvbDpudW1Db2xzLTF9O1xyXG4gICAgICAgIGlmIChjb2xJbmRleCAtIDEgPiAtMSkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleDtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXggLSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocm93SW5kZXggLSAxID4gMCkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleCAtIDE7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IG51bUNvbHMgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlU2hvd1NvbHV0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dTb2x1dGlvbighc2hvd1NvbHV0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVja1NvbHV0aW9uID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgc2V0Q2hlY2tpbmcodHJ1ZSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgbGV0IHN0YXJ0V29yZCA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IG51bUNvbHM7IGNvbEluZGV4KyspIHtcclxuICAgICAgICAgICAgc3RhcnRXb3JkID0gc3RhcnRXb3JkICsgYm9hcmRbMF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCByb3dJbmRleCA9IDE7IHJlc3VsdCAmJiByb3dJbmRleCA8IG51bVJvd3M7IHJvd0luZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IHByZXZXb3JkID0gXCJcIjtcclxuICAgICAgICAgICAgbGV0IGN1cnJXb3JkID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IG51bUNvbHM7IGNvbEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIHByZXZXb3JkID0gcHJldldvcmQgKyBib2FyZFtyb3dJbmRleC0xXS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgY3VycldvcmQgPSBjdXJyV29yZCArIGJvYXJkW3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdmFsaWROZXh0TW9ycGgoc3RhcnRXb3JkLCByb3dJbmRleCwgcHJldldvcmQsIGN1cnJXb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYCR7cHJldldvcmR9IHRvICR7Y3VycldvcmR9IGlzIG5vdCBhIHZhbGlkIG1vdmVgKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcm93SW5kZXggIT09IG51bVJvd3MgLTEgJiYgISBhd2FpdCBpc1dvcmRWYWxpZChjdXJyV29yZCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGAke2N1cnJXb3JkfSBpcyBub3QgdmFsaWRgKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldENoZWNraW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRQdXp6bGVTb2x2ZWQocmVzdWx0KTtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiU3VjY2VzcyFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZhbGlkTmV4dE1vcnBoID0gKHN0YXJ0V29yZCwgcmVxdWlyZWREaWZmTGV0dGVyQ291bnQsIHByZXZpb3VzV29yZCwgY3VycmVudFdvcmQpID0+IHtcclxuICAgICAgICAvLyBTdGFydCB3b3JkIGlzIHJvdyBpbmRleCAwXHJcbiAgICAgICAgLy8gV29yZCBhdCByb3cgaW5kZXggMSBtdXN0IGhhdmUgMSBsZXR0ZXIgc3dhcFxyXG4gICAgICAgIC8vIFdvcmQgYXQgcm93IGluZGV4IDIgbXVzdCBoYXZlIDIgbGV0dGVyIHN3YXBzIHJlbGF0aXZlIHRvIHRoZSBzdGFydCB3b3JkLCBhbmQgMSByZWxhdGl2ZSB0byBwcmV2aW91cyB3b3JkXHJcbiAgICAgICAgLy8gV29yZCBhdCByb3cgaW5kZXggMyBtdXN0IGhhdmUgMyBsZXR0ZXIgc3dhcHMgcmVsYXRpdmUgdG8gdGhlIHN0YXJ0IHdvcmQsIGFuZCAxIHJlbGF0aXZlIHRvIHByZXZpb3VzIHdvcmRcclxuICAgICAgICAvLyBFdGMuIFNvIHBhc3Mgcm93IGluZGV4IHRvIHJlcXVpcmVkRGlmZkxldHRlckNvdW50LlxyXG4gICAgICAgIGxldCBzdGFydExldHRlcnMgPSBBcnJheS5mcm9tKHN0YXJ0V29yZCk7XHJcbiAgICAgICAgbGV0IHByZXZpb3VzTGV0dGVycyA9IEFycmF5LmZyb20ocHJldmlvdXNXb3JkKTtcclxuICAgICAgICBsZXQgY3VycmVudExldHRlcnMgPSBBcnJheS5mcm9tKGN1cnJlbnRXb3JkKTtcclxuICAgICAgICBsZXQgZGlmZkZyb21TdGFydENvdW50ID0gMDtcclxuICAgICAgICBsZXQgZGlmZkZyb21QcmV2aW91c0NvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAoY3VycmVudExldHRlcnNbaV0gIT09IHN0YXJ0TGV0dGVyc1tpXSkge1xyXG4gICAgICAgICAgICBkaWZmRnJvbVN0YXJ0Q291bnQrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChjdXJyZW50TGV0dGVyc1tpXSAhPT0gcHJldmlvdXNMZXR0ZXJzW2ldKSB7XHJcbiAgICAgICAgICAgIGRpZmZGcm9tUHJldmlvdXNDb3VudCsrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKGRpZmZGcm9tU3RhcnRDb3VudCA9PT0gcmVxdWlyZWREaWZmTGV0dGVyQ291bnQgJiYgZGlmZkZyb21QcmV2aW91c0NvdW50ID09PSAxKTtcclxuICAgICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGlzV29yZFZhbGlkKHdvcmQpIHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7YmFzZXVybH0vRU5BQkxFMks/ZXhpc3RzPSR7d29yZC50b0xvd2VyQ2FzZSgpfWA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGpkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBqZGF0YS5leGlzdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiIG9uS2V5RG93bj17KGUpID0+IHtoYW5kbGVLZXlEb3duKGUpO319PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIE1vcnBob1xyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7bG9hZGluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cInRyRW1waGFzaXNcIj5DcmVhdGluZyBwdXp6bGUsIHBsZWFzZSBiZSBwYXRpZW50Li4uPC9kaXY+fVxyXG4gICAgICAgICAgICB7IWxvYWRpbmcgJiYgPGRpdj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQvPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JvYXJkLm1hcCgoYm9hcmRSb3csIHJvd0luZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgQm9hcmRSb3cuJHtyb3dJbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym9hcmRSb3cuY29sQXJyYXkubWFwKChjZWxsLCBjb2xJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtgQm9hcmRDZWxsLiR7cm93SW5kZXh9LiR7Y29sSW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge2hhbmRsZVNlbGVjdGlvbihyb3dJbmRleCxjb2xJbmRleCk7fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbW9ycGhvQ2VsbCAke3B1enpsZVNvbHZlZCA/IGNzc0J1dHRlcmZseSA6IHNob3dTb2x1dGlvbiA/IGNzc1NvbHV0aW9uTGV0dGVyIDogY2VsbC5jbGFzc05hbWUgKyAocm93SW5kZXggPT09IHNlbGVjdGVkLnJvdyAmJiBjb2xJbmRleCA9PT0gc2VsZWN0ZWQuY29sID8gY3NzU2VsZWN0ZWRDZWxsIDogXCJcIil9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd1NvbHV0aW9uID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2VsbC5zb2x1dGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NlbGwubGV0dGVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHshbG9hZGluZyAmJiAhY2hlY2tpbmcgJiYgIXB1enpsZVNvbHZlZCAmJiA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk5leHQgTGV0dGVyOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImdldG5leHRsZXR0ZXJcIiB2YWx1ZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtoYW5kbGVJbnB1dExldHRlcihlLnRhcmdldC52YWx1ZSk7fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Q2hhbmdlIG9uZSBsZXR0ZXIgYXQgYSB0aW1lIHRvIGdldCBmcm9tIHtmaXJzdFdvcmR9IHRvIHtsYXN0V29yZH0uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkVhY2ggaW50ZXJpbSB3b3JkIG11c3QgYmUgYSB2YWxpZCB3b3JkLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3RvZ2dsZVNob3dTb2x1dGlvbigpO319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YCR7c2hvd1NvbHV0aW9uID8gJ0hJREUgU09MVVRJT04nIDogJ1NIT1cgQSBTT0xVVElPTid9YH1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7IXB1enpsZVNvbHZlZCAmJiBmaWxsZWRpbiAmJiA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7Y2hlY2tTb2x1dGlvbigpO319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU1VCTUlUIFlPVVIgU09MVVRJT05cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIHtwdXp6bGVTb2x2ZWQgJiYgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldEluaXRpYWxCb2FyZCgpO319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR0VORVJBVEUgQU5PVEhFUiBQVVpaTEVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9ycGhvOyJdLCJzb3VyY2VSb290IjoiIn0=