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

    console.log(event.key);
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

    if (letter === "Backspace") {
      letter = "?";
      retreatSelection = true;
    }

    if (letter === "Delete") {
      letter = "?";
      advanceSelection = false;
    }

    if (letter === "LeftArrow") {
      letter = board[rowIndex].colArray[colIndex].letter;
      retreatSelection = true;
    }

    if (letter === "RightArrow") {
      letter = board[rowIndex].colArray[colIndex].letter;
      advanceSelection = true;
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

  const retreatPosition = () => {
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
          lineNumber: 243,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 13
    }, undefined), loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trEmphasis",
      children: "Creating puzzle, please be patient..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 25
    }, undefined), !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 249,
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
                lineNumber: 258,
                columnNumber: 45
              }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: cell.letter
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 260,
                columnNumber: 45
              }, undefined)
            }, `BoardCell.${rowIndex}.${colIndex}`, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 37
            }, undefined))
          }, `BoardRow.${rowIndex}`, false, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 29
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: [!loading && !checking && !puzzleSolved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "trParagraph",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Next Letter:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 270,
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
            lineNumber: 271,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 64
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Change one letter at a time to get from ", firstWord, " to ", lastWord, "."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Each interim word must be a valid word."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton",
          onClick: () => {
            toggleShowSolution();
          },
          children: `${showSolution ? 'HIDE SOLUTION' : 'SHOW A SOLUTION'}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 277,
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
            lineNumber: 281,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
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
            lineNumber: 286,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 38
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 26
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 239,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9ycGhvL21vcnBoby5qcyJdLCJuYW1lcyI6WyJNb3JwaG8iLCJzZXRXaGVyZXRvIiwibnVtUm93cyIsIm51bUNvbHMiLCJiYXNldXJsIiwiY3NzUHJlc2V0TGV0dGVyIiwiY3NzU29sdXRpb25MZXR0ZXIiLCJjc3NOb0xldHRlciIsImNzc1NlbGVjdGVkQ2VsbCIsImNzc0xldHRlck9uUGFydGlhbFJvdyIsImNzc0xldHRlck9uRnVsbFJvdyIsImNzc0J1dHRlcmZseSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJjaGVja2luZyIsInNldENoZWNraW5nIiwiZmlsbGVkaW4iLCJzZXRGaWxsZWRpbiIsInNob3dTb2x1dGlvbiIsInNldFNob3dTb2x1dGlvbiIsInB1enpsZVNvbHZlZCIsInNldFB1enpsZVNvbHZlZCIsImZpcnN0V29yZCIsInNldEZpcnN0V29yZCIsImxhc3RXb3JkIiwic2V0TGFzdFdvcmQiLCJib2FyZCIsInNldEJvYXJkIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInJvdyIsImNvbCIsInVzZUVmZmVjdCIsInNldEluaXRpYWxCb2FyZCIsInJvd0FycmF5IiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwibm90ZXMiLCJsZW5ndGgiLCJyb3dJbmRleCIsInJvd1dvcmQiLCJwdXp6bGUiLCJ0b1VwcGVyQ2FzZSIsInJvd0xldHRlcnMiLCJBcnJheSIsImZyb20iLCJyb3dGaWxsZWRJbiIsImNvbEFycmF5IiwiY29sSW5kZXgiLCJjZWxsIiwibGV0dGVyIiwic29sdXRpb24iLCJjbGFzc05hbWUiLCJwdXNoIiwiaGFuZGxlU2VsZWN0aW9uIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwia2V5IiwiaGFuZGxlSW5wdXRMZXR0ZXIiLCJsZXR0ZXJ0ZXN0IiwiYWR2YW5jZVNlbGVjdGlvbiIsInJldHJlYXRTZWxlY3Rpb24iLCJtYXRjaCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImZpbHRlciIsImNpIiwiYWR2YW5jZVBvc2l0aW9uIiwicmV0cmVhdFBvc2l0aW9uIiwiciIsIm5ld1NlbGVjdGVkIiwidG9nZ2xlU2hvd1NvbHV0aW9uIiwiY2hlY2tTb2x1dGlvbiIsInJlc3VsdCIsInN0YXJ0V29yZCIsInByZXZXb3JkIiwiY3VycldvcmQiLCJ2YWxpZE5leHRNb3JwaCIsImFsZXJ0IiwiaXNXb3JkVmFsaWQiLCJyZXF1aXJlZERpZmZMZXR0ZXJDb3VudCIsInByZXZpb3VzV29yZCIsImN1cnJlbnRXb3JkIiwic3RhcnRMZXR0ZXJzIiwicHJldmlvdXNMZXR0ZXJzIiwiY3VycmVudExldHRlcnMiLCJkaWZmRnJvbVN0YXJ0Q291bnQiLCJkaWZmRnJvbVByZXZpb3VzQ291bnQiLCJpIiwid29yZCIsInRvTG93ZXJDYXNlIiwiamRhdGEiLCJleGlzdHMiLCJlIiwibWFwIiwiYm9hcmRSb3ciLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBa0I7QUFBQTs7QUFDN0IsUUFBTUMsT0FBTyxHQUFHLENBQWhCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHLENBQWhCO0FBQ0EsUUFBTUMsT0FBTyxHQUFJLEtBQUQsR0FBb0UsdUJBQXBFLEdBQThGLENBQTlHO0FBQ0EsUUFBTUMsZUFBZSxHQUFHLGtCQUF4QjtBQUNBLFFBQU1DLGlCQUFpQixHQUFHLG9CQUExQjtBQUNBLFFBQU1DLFdBQVcsR0FBRyxvQkFBcEI7QUFDQSxRQUFNQyxlQUFlLEdBQUcscUJBQXhCO0FBQ0EsUUFBTUMscUJBQXFCLEdBQUcsd0NBQTlCO0FBQ0EsUUFBTUMsa0JBQWtCLEdBQUcsb0NBQTNCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHLG9CQUFyQjtBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FB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O0FBQUEscUJBUEosZUFRSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSSixlQVNJO0FBQVEsbUJBQVMsRUFBQyxVQUFsQjtBQUE2QixpQkFBTyxFQUFFLE1BQU07QUFBQ3NELDhCQUFrQjtBQUFJLFdBQW5FO0FBQUEsb0JBQ00sR0FBRTVELFlBQVksR0FBRyxlQUFILEdBQXFCLGlCQUFrQjtBQUQzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRKLEVBWUssQ0FBQ0UsWUFBRCxJQUFpQkosUUFBakIsaUJBQTZCO0FBQUssbUJBQVMsRUFBQyxhQUFmO0FBQUEsaUNBQzFCO0FBQVEscUJBQVMsRUFBQyxVQUFsQjtBQUE2QixtQkFBTyxFQUFFLE1BQU07QUFBQytELDJCQUFhO0FBQUksYUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEMEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFabEMsRUFpQkszRCxZQUFZLGlCQUFJO0FBQUssbUJBQVMsRUFBQyxhQUFmO0FBQUEsaUNBQ2I7QUFBUSxxQkFBUyxFQUFDLFVBQWxCO0FBQTZCLG1CQUFPLEVBQUUsTUFBTTtBQUFDYSw2QkFBZTtBQUFJLGFBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqQnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFyQlM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXdESCxDQW5TRDs7R0FBTWxDLE07O0tBQUFBLE07QUFxU04sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzFjNGY4MWQ3ZjA2ZjFjZjIyNDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBNb3JwaG8gPSAoe3NldFdoZXJldG99KSA9PiB7XHJcbiAgICBjb25zdCBudW1Sb3dzID0gNjtcclxuICAgIGNvbnN0IG51bUNvbHMgPSA1O1xyXG4gICAgY29uc3QgYmFzZXVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCcgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20nO1xyXG4gICAgY29uc3QgY3NzUHJlc2V0TGV0dGVyID0gXCJtb3JwaG9DZWxsU3RhdGljXCI7XHJcbiAgICBjb25zdCBjc3NTb2x1dGlvbkxldHRlciA9IFwibW9ycGhvQ2VsbFNvbHV0aW9uXCI7XHJcbiAgICBjb25zdCBjc3NOb0xldHRlciA9IFwibW9ycGhvQ2VsbE5vTGV0dGVyXCI7XHJcbiAgICBjb25zdCBjc3NTZWxlY3RlZENlbGwgPSBcIiBtb3JwaG9DZWxsU2VsZWN0ZWRcIjtcclxuICAgIGNvbnN0IGNzc0xldHRlck9uUGFydGlhbFJvdyA9IFwibW9ycGhvQ2VsbExldHRlck9uUGFydGlhbGx5RmlsbGVkSW5Sb3dcIjtcclxuICAgIGNvbnN0IGNzc0xldHRlck9uRnVsbFJvdyA9IFwibW9ycGhvQ2VsbExldHRlck9uRnVsbHlGaWxsZWRJblJvd1wiO1xyXG4gICAgY29uc3QgY3NzQnV0dGVyZmx5ID0gXCJtb3JwaG9DZWxsU29sdXRpb25cIjtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2NoZWNraW5nLCBzZXRDaGVja2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIFNldCB3aGVuIGNoZWNraW5nIHNvbHV0aW9uIHRvIHByZXZlbnQgZnVydGhlciBhbHRlcmF0aW9uc1xyXG4gICAgY29uc3QgW2ZpbGxlZGluLCBzZXRGaWxsZWRpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd1NvbHV0aW9uLCBzZXRTaG93U29sdXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3B1enpsZVNvbHZlZCwgc2V0UHV6emxlU29sdmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtmaXJzdFdvcmQsIHNldEZpcnN0V29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbGFzdFdvcmQsIHNldExhc3RXb3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtib2FyZCwgc2V0Qm9hcmRdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSh7cm93OjEsIGNvbDowfSk7IC8vIE5hdHVyYWwgcGxhY2UgdG8gc3RhcnQgZW50ZXJpbmcgbGV0dGVyc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRJbml0aWFsQm9hcmQoKTtcclxuICAgIH0sW10pO1xyXG4gICAgY29uc3Qgc2V0SW5pdGlhbEJvYXJkID0gYXN5bmMoKSA9PiB7IC8vIEluaXRpYWwgYm9hcmQgb2YgZ2l2ZW4gc2l6ZVxyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgc2V0Q2hlY2tpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldFNob3dTb2x1dGlvbihmYWxzZSk7XHJcbiAgICAgICAgc2V0RmlsbGVkaW4oZmFsc2UpO1xyXG4gICAgICAgIHNldFB1enpsZVNvbHZlZChmYWxzZSk7XHJcbiAgICAgICAgbGV0IHJvd0FycmF5ID0gW107XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2Jhc2V1cmx9L0VOQUJMRTJLP21vcnBobz10cnVlJmxlbj0ke251bUNvbHN9YDtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBpZiAoIWRhdGEubm90ZXMgfHwgZGF0YS5ub3Rlcy5sZW5ndGggPT09IDApIHsgLy8gT2sgcmVzdWx0XHJcbiAgICAgICAgICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBudW1Sb3dzOyByb3dJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3dXb3JkID0gZGF0YS5wdXp6bGVbcm93SW5kZXhdLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93SW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRGaXJzdFdvcmQocm93V29yZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvd0luZGV4ID09PSBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExhc3RXb3JkKHJvd1dvcmQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93TGV0dGVycyA9IFsuLi5BcnJheS5mcm9tKHJvd1dvcmQpXTtcclxuICAgICAgICAgICAgICAgIGxldCByb3dGaWxsZWRJbiA9IHJvd0luZGV4ID09PSAwIHx8IHJvd0luZGV4ID09PSBudW1Sb3dzIC0gMTtcclxuICAgICAgICAgICAgICAgIGxldCBjb2xBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IG51bUNvbHM7IGNvbEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IHtsZXR0ZXI6Jz8nLHNvbHV0aW9uOnJvd0xldHRlcnNbY29sSW5kZXhdLGNsYXNzTmFtZTonPyd9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3dJbmRleCA9PT0gMCB8fCByb3dJbmRleCA9PT0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5sZXR0ZXIgPSByb3dMZXR0ZXJzW2NvbEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBjc3NQcmVzZXRMZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5sZXR0ZXIgPSAnPyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gY3NzTm9MZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbEFycmF5LnB1c2goY2VsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByb3dBcnJheS5wdXNoKHtmaWxsZWRpbjpyb3dGaWxsZWRJbiwgY29sQXJyYXk6Y29sQXJyYXl9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRCb2FyZChyb3dBcnJheSk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQoe3JvdzoxLGNvbDowfSk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0aW9uID0gKHJvd0luZGV4LCBjb2xJbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChyb3dJbmRleCA8IDEgfHwgcm93SW5kZXggPj0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sSW5kZXggPCAwIHx8IHJvd0luZGV4ID49IG51bUNvbHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZCh7cm93OnJvd0luZGV4LGNvbDpjb2xJbmRleH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChjaGVja2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIE5vIG1vZGVzIHdoaWxlIGNoZWNraW5nIHNvbHV0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwdXp6bGVTb2x2ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBQdXp6bGUgYWxyZWFkeSBzb2x2ZWRcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQua2V5KTtcclxuICAgICAgICBoYW5kbGVJbnB1dExldHRlcihldmVudC5rZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUlucHV0TGV0dGVyID0gKGxldHRlcikgPT4ge1xyXG4gICAgICAgIGxldCByb3dJbmRleCA9IHNlbGVjdGVkLnJvdztcclxuICAgICAgICBsZXQgY29sSW5kZXggPSBzZWxlY3RlZC5jb2w7XHJcbiAgICAgICAgaWYgKHJvd0luZGV4IDwgMSB8fCByb3dJbmRleCA+PSBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2xJbmRleCA8IDAgfHwgcm93SW5kZXggPj0gbnVtQ29scykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsZXR0ZXJ0ZXN0ID0gL15bQS1aYS16XFw/XSQvOyAvLyBzaW5nbGUgbGV0dGVyIG9yIHF1ZXN0aW9uIG1hcmsga2V5IHByZXNzZWRcclxuICAgICAgICBsZXQgYWR2YW5jZVNlbGVjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgbGV0IHJldHJlYXRTZWxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIkJhY2tzcGFjZVwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IFwiP1wiO1xyXG4gICAgICAgICAgICByZXRyZWF0U2VsZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJEZWxldGVcIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBcIj9cIjtcclxuICAgICAgICAgICAgYWR2YW5jZVNlbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIkxlZnRBcnJvd1wiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IGJvYXJkW3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICByZXRyZWF0U2VsZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJSaWdodEFycm93XCIpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gYm9hcmRbcm93SW5kZXhdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXI7XHJcbiAgICAgICAgICAgIGFkdmFuY2VTZWxlY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyLm1hdGNoKGxldHRlcnRlc3QpKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IGxldHRlci50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByb3dBcnJheSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYm9hcmQpKTtcclxuICAgICAgICByb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlciA9IGxldHRlcjtcclxuICAgICAgICByb3dBcnJheVtyb3dJbmRleF0uZmlsbGVkaW4gPSAocm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5LmZpbHRlcigoY2VsbCkgPT4ge3JldHVybiBjZWxsLmxldHRlciA9PT0gXCI/XCI7fSkubGVuZ3RoID09PSAwKTtcclxuICAgICAgICBmb3IgKGxldCBjaSA9IDA7IGNpIDwgbnVtQ29sczsgY2krKykge1xyXG4gICAgICAgICAgICBpZiAocm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5W2NpXS5sZXR0ZXIgPT09IFwiP1wiKSB7XHJcbiAgICAgICAgICAgICAgICByb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXlbY2ldLmNsYXNzTmFtZSA9IGNzc05vTGV0dGVyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5W2NpXS5jbGFzc05hbWUgPSByb3dBcnJheVtyb3dJbmRleF0uZmlsbGVkaW4gPyBjc3NMZXR0ZXJPbkZ1bGxSb3cgOiBjc3NMZXR0ZXJPblBhcnRpYWxSb3c7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFkdmFuY2VTZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgYWR2YW5jZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXRyZWF0U2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHJlYXRQb3NpdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocm93QXJyYXkuZmlsdGVyKHIgPT4ge3JldHVybiAhci5maWxsZWRpbjt9KS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgLy8gQWxsIGxldHRlcnMgYXJlIGZpbGxlZCBpblxyXG4gICAgICAgICAgICBzZXRGaWxsZWRpbih0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Qm9hcmQocm93QXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkdmFuY2VQb3NpdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6MSxjb2w6MH07XHJcbiAgICAgICAgaWYgKGNvbEluZGV4ICsgMSA8IG51bUNvbHMpIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gcm93SW5kZXg7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IGNvbEluZGV4ICsgMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJvd0luZGV4ICsgMSA8IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4ICsgMTtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldHJlYXRQb3NpdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6bnVtUm93cy0yLGNvbDpudW1Db2xzLTF9O1xyXG4gICAgICAgIGlmIChjb2xJbmRleCAtIDEgPiAtMSkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleDtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXggLSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocm93SW5kZXggLSAxID4gMCkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleCAtIDE7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IG51bUNvbHMgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlU2hvd1NvbHV0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dTb2x1dGlvbighc2hvd1NvbHV0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVja1NvbHV0aW9uID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgc2V0Q2hlY2tpbmcodHJ1ZSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgbGV0IHN0YXJ0V29yZCA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IG51bUNvbHM7IGNvbEluZGV4KyspIHtcclxuICAgICAgICAgICAgc3RhcnRXb3JkID0gc3RhcnRXb3JkICsgYm9hcmRbMF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCByb3dJbmRleCA9IDE7IHJlc3VsdCAmJiByb3dJbmRleCA8IG51bVJvd3M7IHJvd0luZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IHByZXZXb3JkID0gXCJcIjtcclxuICAgICAgICAgICAgbGV0IGN1cnJXb3JkID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IG51bUNvbHM7IGNvbEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIHByZXZXb3JkID0gcHJldldvcmQgKyBib2FyZFtyb3dJbmRleC0xXS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgY3VycldvcmQgPSBjdXJyV29yZCArIGJvYXJkW3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdmFsaWROZXh0TW9ycGgoc3RhcnRXb3JkLCByb3dJbmRleCwgcHJldldvcmQsIGN1cnJXb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYCR7cHJldldvcmR9IHRvICR7Y3VycldvcmR9IGlzIG5vdCBhIHZhbGlkIG1vdmVgKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcm93SW5kZXggIT09IG51bVJvd3MgLTEgJiYgISBhd2FpdCBpc1dvcmRWYWxpZChjdXJyV29yZCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGAke2N1cnJXb3JkfSBpcyBub3QgdmFsaWRgKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldENoZWNraW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRQdXp6bGVTb2x2ZWQocmVzdWx0KTtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiU3VjY2VzcyFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZhbGlkTmV4dE1vcnBoID0gKHN0YXJ0V29yZCwgcmVxdWlyZWREaWZmTGV0dGVyQ291bnQsIHByZXZpb3VzV29yZCwgY3VycmVudFdvcmQpID0+IHtcclxuICAgICAgICAvLyBTdGFydCB3b3JkIGlzIHJvdyBpbmRleCAwXHJcbiAgICAgICAgLy8gV29yZCBhdCByb3cgaW5kZXggMSBtdXN0IGhhdmUgMSBsZXR0ZXIgc3dhcFxyXG4gICAgICAgIC8vIFdvcmQgYXQgcm93IGluZGV4IDIgbXVzdCBoYXZlIDIgbGV0dGVyIHN3YXBzIHJlbGF0aXZlIHRvIHRoZSBzdGFydCB3b3JkLCBhbmQgMSByZWxhdGl2ZSB0byBwcmV2aW91cyB3b3JkXHJcbiAgICAgICAgLy8gV29yZCBhdCByb3cgaW5kZXggMyBtdXN0IGhhdmUgMyBsZXR0ZXIgc3dhcHMgcmVsYXRpdmUgdG8gdGhlIHN0YXJ0IHdvcmQsIGFuZCAxIHJlbGF0aXZlIHRvIHByZXZpb3VzIHdvcmRcclxuICAgICAgICAvLyBFdGMuIFNvIHBhc3Mgcm93IGluZGV4IHRvIHJlcXVpcmVkRGlmZkxldHRlckNvdW50LlxyXG4gICAgICAgIGxldCBzdGFydExldHRlcnMgPSBBcnJheS5mcm9tKHN0YXJ0V29yZCk7XHJcbiAgICAgICAgbGV0IHByZXZpb3VzTGV0dGVycyA9IEFycmF5LmZyb20ocHJldmlvdXNXb3JkKTtcclxuICAgICAgICBsZXQgY3VycmVudExldHRlcnMgPSBBcnJheS5mcm9tKGN1cnJlbnRXb3JkKTtcclxuICAgICAgICBsZXQgZGlmZkZyb21TdGFydENvdW50ID0gMDtcclxuICAgICAgICBsZXQgZGlmZkZyb21QcmV2aW91c0NvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAoY3VycmVudExldHRlcnNbaV0gIT09IHN0YXJ0TGV0dGVyc1tpXSkge1xyXG4gICAgICAgICAgICBkaWZmRnJvbVN0YXJ0Q291bnQrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChjdXJyZW50TGV0dGVyc1tpXSAhPT0gcHJldmlvdXNMZXR0ZXJzW2ldKSB7XHJcbiAgICAgICAgICAgIGRpZmZGcm9tUHJldmlvdXNDb3VudCsrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKGRpZmZGcm9tU3RhcnRDb3VudCA9PT0gcmVxdWlyZWREaWZmTGV0dGVyQ291bnQgJiYgZGlmZkZyb21QcmV2aW91c0NvdW50ID09PSAxKTtcclxuICAgICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGlzV29yZFZhbGlkKHdvcmQpIHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7YmFzZXVybH0vRU5BQkxFMks/ZXhpc3RzPSR7d29yZC50b0xvd2VyQ2FzZSgpfWA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGpkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBqZGF0YS5leGlzdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiIG9uS2V5RG93bj17KGUpID0+IHtoYW5kbGVLZXlEb3duKGUpO319IHRhYmluZGV4PXstMX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgTW9ycGhvXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nICYmIDxkaXYgY2xhc3NOYW1lPVwidHJFbXBoYXNpc1wiPkNyZWF0aW5nIHB1enpsZSwgcGxlYXNlIGJlIHBhdGllbnQuLi48L2Rpdj59XHJcbiAgICAgICAgICAgIHshbG9hZGluZyAmJiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Ym9hcmQubWFwKChib2FyZFJvdywgcm93SW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2BCb2FyZFJvdy4ke3Jvd0luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib2FyZFJvdy5jb2xBcnJheS5tYXAoKGNlbGwsIGNvbEluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2BCb2FyZENlbGwuJHtyb3dJbmRleH0uJHtjb2xJbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlU2VsZWN0aW9uKHJvd0luZGV4LGNvbEluZGV4KTt9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Btb3JwaG9DZWxsICR7cHV6emxlU29sdmVkID8gY3NzQnV0dGVyZmx5IDogc2hvd1NvbHV0aW9uID8gY3NzU29sdXRpb25MZXR0ZXIgOiBjZWxsLmNsYXNzTmFtZSArIChyb3dJbmRleCA9PT0gc2VsZWN0ZWQucm93ICYmIGNvbEluZGV4ID09PSBzZWxlY3RlZC5jb2wgPyBjc3NTZWxlY3RlZENlbGwgOiBcIlwiKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93U29sdXRpb24gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjZWxsLnNvbHV0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2VsbC5sZXR0ZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeyFsb2FkaW5nICYmICFjaGVja2luZyAmJiAhcHV6emxlU29sdmVkICYmIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TmV4dCBMZXR0ZXI6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZ2V0bmV4dGxldHRlclwiIHZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKGUudGFyZ2V0LnZhbHVlKTt9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICA8cD5DaGFuZ2Ugb25lIGxldHRlciBhdCBhIHRpbWUgdG8gZ2V0IGZyb20ge2ZpcnN0V29yZH0gdG8ge2xhc3RXb3JkfS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+RWFjaCBpbnRlcmltIHdvcmQgbXVzdCBiZSBhIHZhbGlkIHdvcmQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7dG9nZ2xlU2hvd1NvbHV0aW9uKCk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtzaG93U29sdXRpb24gPyAnSElERSBTT0xVVElPTicgOiAnU0hPVyBBIFNPTFVUSU9OJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHshcHV6emxlU29sdmVkICYmIGZpbGxlZGluICYmIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtjaGVja1NvbHV0aW9uKCk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTVUJNSVQgWU9VUiBTT0xVVElPTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAge3B1enpsZVNvbHZlZCAmJiA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0SW5pdGlhbEJvYXJkKCk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHRU5FUkFURSBBTk9USEVSIFBVWlpMRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3JwaG87Il0sInNvdXJjZVJvb3QiOiIifQ==