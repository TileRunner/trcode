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
        rowArray[rowIndex].colArray[ci].className = rowArray[rowIndex].filledin ? cssLetterOnFullRow : cssLetterOnPartialRow;
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
      setSelected(newSelected);
    }
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
      setSelected(newSelected);
    }
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
          lineNumber: 278,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 13
    }, undefined), loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trEmphasis",
      children: "Creating puzzle, please be patient..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 25
    }, undefined), !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
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
                lineNumber: 293,
                columnNumber: 45
              }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: cell.letter
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 295,
                columnNumber: 45
              }, undefined)
            }, `BoardCell.${rowIndex}.${colIndex}`, false, {
              fileName: _jsxFileName,
              lineNumber: 289,
              columnNumber: 37
            }, undefined))
          }, `BoardRow.${rowIndex}`, false, {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 29
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: [!loading && !checking && !puzzleSolved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "trParagraph",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Next Letter:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 305,
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
            lineNumber: 306,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 64
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Change one letter at a time to get from ", firstWord, " to ", lastWord, "."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Each interim word must be a valid word."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "trButton",
          onClick: () => {
            toggleShowSolution();
          },
          children: `${showSolution ? 'HIDE SOLUTION' : 'SHOW A SOLUTION'}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 312,
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
            lineNumber: 316,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 315,
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
            lineNumber: 321,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 38
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 26
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 274,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9ycGhvL21vcnBoby5qcyJdLCJuYW1lcyI6WyJNb3JwaG8iLCJzZXRXaGVyZXRvIiwibnVtUm93cyIsIm51bUNvbHMiLCJiYXNldXJsIiwiY3NzUHJlc2V0TGV0dGVyIiwiY3NzU29sdXRpb25MZXR0ZXIiLCJjc3NOb0xldHRlciIsImNzc1NlbGVjdGVkQ2VsbCIsImNzc0xldHRlck9uUGFydGlhbFJvdyIsImNzc0xldHRlck9uRnVsbFJvdyIsImNzc0J1dHRlcmZseSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJjaGVja2luZyIsInNldENoZWNraW5nIiwiZmlsbGVkaW4iLCJzZXRGaWxsZWRpbiIsInNob3dTb2x1dGlvbiIsInNldFNob3dTb2x1dGlvbiIsInB1enpsZVNvbHZlZCIsInNldFB1enpsZVNvbHZlZCIsImZpcnN0V29yZCIsInNldEZpcnN0V29yZCIsImxhc3RXb3JkIiwic2V0TGFzdFdvcmQiLCJib2FyZCIsInNldEJvYXJkIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInJvdyIsImNvbCIsInVzZUVmZmVjdCIsInNldEluaXRpYWxCb2FyZCIsInJvd0FycmF5IiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwibm90ZXMiLCJsZW5ndGgiLCJyb3dJbmRleCIsInJvd1dvcmQiLCJwdXp6bGUiLCJ0b1VwcGVyQ2FzZSIsInJvd0xldHRlcnMiLCJBcnJheSIsImZyb20iLCJyb3dGaWxsZWRJbiIsImNvbEFycmF5IiwiY29sSW5kZXgiLCJjZWxsIiwibGV0dGVyIiwic29sdXRpb24iLCJjbGFzc05hbWUiLCJwdXNoIiwiaGFuZGxlU2VsZWN0aW9uIiwiaGFuZGxlS2V5RG93biIsImV2ZW50Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVJbnB1dExldHRlciIsImxldHRlcnRlc3QiLCJtb3ZlRGlyZWN0aW9uIiwibWF0Y2giLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJmaWx0ZXIiLCJjaSIsIm1vdmVVcCIsIm1vdmVEb3duIiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJyIiwibmV3U2VsZWN0ZWQiLCJ0b2dnbGVTaG93U29sdXRpb24iLCJjaGVja1NvbHV0aW9uIiwicmVzdWx0Iiwic3RhcnRXb3JkIiwicHJldldvcmQiLCJjdXJyV29yZCIsInZhbGlkTmV4dE1vcnBoIiwiYWxlcnQiLCJpc1dvcmRWYWxpZCIsInJlcXVpcmVkRGlmZkxldHRlckNvdW50IiwicHJldmlvdXNXb3JkIiwiY3VycmVudFdvcmQiLCJzdGFydExldHRlcnMiLCJwcmV2aW91c0xldHRlcnMiLCJjdXJyZW50TGV0dGVycyIsImRpZmZGcm9tU3RhcnRDb3VudCIsImRpZmZGcm9tUHJldmlvdXNDb3VudCIsImkiLCJ3b3JkIiwidG9Mb3dlckNhc2UiLCJqZGF0YSIsImV4aXN0cyIsImUiLCJtYXAiLCJib2FyZFJvdyIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFrQjtBQUFBOztBQUM3QixRQUFNQyxPQUFPLEdBQUcsQ0FBaEI7QUFDQSxRQUFNQyxPQUFPLEdBQUcsQ0FBaEI7QUFDQSxRQUFNQyxPQUFPLEdBQUksS0FBRCxHQUFvRSx1QkFBcEUsR0FBOEYsQ0FBOUc7QUFDQSxRQUFNQyxlQUFlLEdBQUcsa0JBQXhCO0FBQ0EsUUFBTUMsaUJBQWlCLEdBQUcsb0JBQTFCO0FBQ0EsUUFBTUMsV0FBVyxHQUFHLG9CQUFwQjtBQUNBLFFBQU1DLGVBQWUsR0FBRyxxQkFBeEI7QUFDQSxRQUFNQyxxQkFBcUIsR0FBRyx3Q0FBOUI7QUFDQSxRQUFNQyxrQkFBa0IsR0FBRyxvQ0FBM0I7QUFDQSxRQUFNQyxZQUFZLEdBQUcsb0JBQXJCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQywrQ0FBUSxDQUFD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QUF3VU4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2U0NWI2NzYxMzc3OGY1MTkyYTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBNb3JwaG8gPSAoe3NldFdoZXJldG99KSA9PiB7XHJcbiAgICBjb25zdCBudW1Sb3dzID0gNjtcclxuICAgIGNvbnN0IG51bUNvbHMgPSA1O1xyXG4gICAgY29uc3QgYmFzZXVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCcgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20nO1xyXG4gICAgY29uc3QgY3NzUHJlc2V0TGV0dGVyID0gXCJtb3JwaG9DZWxsU3RhdGljXCI7XHJcbiAgICBjb25zdCBjc3NTb2x1dGlvbkxldHRlciA9IFwibW9ycGhvQ2VsbFNvbHV0aW9uXCI7XHJcbiAgICBjb25zdCBjc3NOb0xldHRlciA9IFwibW9ycGhvQ2VsbE5vTGV0dGVyXCI7XHJcbiAgICBjb25zdCBjc3NTZWxlY3RlZENlbGwgPSBcIiBtb3JwaG9DZWxsU2VsZWN0ZWRcIjtcclxuICAgIGNvbnN0IGNzc0xldHRlck9uUGFydGlhbFJvdyA9IFwibW9ycGhvQ2VsbExldHRlck9uUGFydGlhbGx5RmlsbGVkSW5Sb3dcIjtcclxuICAgIGNvbnN0IGNzc0xldHRlck9uRnVsbFJvdyA9IFwibW9ycGhvQ2VsbExldHRlck9uRnVsbHlGaWxsZWRJblJvd1wiO1xyXG4gICAgY29uc3QgY3NzQnV0dGVyZmx5ID0gXCJtb3JwaG9DZWxsU29sdXRpb25cIjtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2NoZWNraW5nLCBzZXRDaGVja2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIFNldCB3aGVuIGNoZWNraW5nIHNvbHV0aW9uIHRvIHByZXZlbnQgZnVydGhlciBhbHRlcmF0aW9uc1xyXG4gICAgY29uc3QgW2ZpbGxlZGluLCBzZXRGaWxsZWRpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd1NvbHV0aW9uLCBzZXRTaG93U29sdXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3B1enpsZVNvbHZlZCwgc2V0UHV6emxlU29sdmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtmaXJzdFdvcmQsIHNldEZpcnN0V29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbGFzdFdvcmQsIHNldExhc3RXb3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtib2FyZCwgc2V0Qm9hcmRdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSh7cm93OjEsIGNvbDowfSk7IC8vIE5hdHVyYWwgcGxhY2UgdG8gc3RhcnQgZW50ZXJpbmcgbGV0dGVyc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRJbml0aWFsQm9hcmQoKTtcclxuICAgIH0sW10pO1xyXG4gICAgY29uc3Qgc2V0SW5pdGlhbEJvYXJkID0gYXN5bmMoKSA9PiB7IC8vIEluaXRpYWwgYm9hcmQgb2YgZ2l2ZW4gc2l6ZVxyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgc2V0Q2hlY2tpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldFNob3dTb2x1dGlvbihmYWxzZSk7XHJcbiAgICAgICAgc2V0RmlsbGVkaW4oZmFsc2UpO1xyXG4gICAgICAgIHNldFB1enpsZVNvbHZlZChmYWxzZSk7XHJcbiAgICAgICAgbGV0IHJvd0FycmF5ID0gW107XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2Jhc2V1cmx9L0VOQUJMRTJLP21vcnBobz10cnVlJmxlbj0ke251bUNvbHN9YDtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBpZiAoIWRhdGEubm90ZXMgfHwgZGF0YS5ub3Rlcy5sZW5ndGggPT09IDApIHsgLy8gT2sgcmVzdWx0XHJcbiAgICAgICAgICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBudW1Sb3dzOyByb3dJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3dXb3JkID0gZGF0YS5wdXp6bGVbcm93SW5kZXhdLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93SW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRGaXJzdFdvcmQocm93V29yZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvd0luZGV4ID09PSBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExhc3RXb3JkKHJvd1dvcmQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93TGV0dGVycyA9IFsuLi5BcnJheS5mcm9tKHJvd1dvcmQpXTtcclxuICAgICAgICAgICAgICAgIGxldCByb3dGaWxsZWRJbiA9IHJvd0luZGV4ID09PSAwIHx8IHJvd0luZGV4ID09PSBudW1Sb3dzIC0gMTtcclxuICAgICAgICAgICAgICAgIGxldCBjb2xBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IG51bUNvbHM7IGNvbEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IHtsZXR0ZXI6Jz8nLHNvbHV0aW9uOnJvd0xldHRlcnNbY29sSW5kZXhdLGNsYXNzTmFtZTonPyd9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3dJbmRleCA9PT0gMCB8fCByb3dJbmRleCA9PT0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5sZXR0ZXIgPSByb3dMZXR0ZXJzW2NvbEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBjc3NQcmVzZXRMZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5sZXR0ZXIgPSAnPyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gY3NzTm9MZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbEFycmF5LnB1c2goY2VsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByb3dBcnJheS5wdXNoKHtmaWxsZWRpbjpyb3dGaWxsZWRJbiwgY29sQXJyYXk6Y29sQXJyYXl9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRCb2FyZChyb3dBcnJheSk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQoe3JvdzoxLGNvbDowfSk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0aW9uID0gKHJvd0luZGV4LCBjb2xJbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChyb3dJbmRleCA8IDEgfHwgcm93SW5kZXggPj0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sSW5kZXggPCAwIHx8IHJvd0luZGV4ID49IG51bUNvbHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZCh7cm93OnJvd0luZGV4LGNvbDpjb2xJbmRleH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkYxMlwiKSB7cmV0dXJuO31cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChjaGVja2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIE5vIG1vZGVzIHdoaWxlIGNoZWNraW5nIHNvbHV0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwdXp6bGVTb2x2ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBQdXp6bGUgYWxyZWFkeSBzb2x2ZWRcclxuICAgICAgICB9XHJcbiAgICAgICAgaGFuZGxlSW5wdXRMZXR0ZXIoZXZlbnQua2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dExldHRlciA9IChsZXR0ZXIpID0+IHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGlmIChyb3dJbmRleCA8IDEgfHwgcm93SW5kZXggPj0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sSW5kZXggPCAwIHx8IHJvd0luZGV4ID49IG51bUNvbHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbGV0dGVydGVzdCA9IC9eW0EtWmEtelxcP10kLzsgLy8gc2luZ2xlIGxldHRlciBvciBxdWVzdGlvbiBtYXJrIGtleSBwcmVzc2VkXHJcbiAgICAgICAgbGV0IG1vdmVEaXJlY3Rpb24gPSBcInJcIjsgLy8gRGVmYXVsdFxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiQmFja3NwYWNlXCIpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gXCI/XCI7XHJcbiAgICAgICAgICAgIG1vdmVEaXJlY3Rpb24gPSBcImxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJEZWxldGVcIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBcIj9cIjtcclxuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiQXJyb3dVcFwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IGJvYXJkW3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICBtb3ZlRGlyZWN0aW9uID0gXCJ1XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiQXJyb3dEb3duXCIpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gYm9hcmRbcm93SW5kZXhdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXI7XHJcbiAgICAgICAgICAgIG1vdmVEaXJlY3Rpb24gPSBcImRcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJBcnJvd0xlZnRcIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBib2FyZFtyb3dJbmRleF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA9IFwibFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIkFycm93UmlnaHRcIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBib2FyZFtyb3dJbmRleF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA9IFwiclwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyLm1hdGNoKGxldHRlcnRlc3QpKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IGxldHRlci50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByb3dBcnJheSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYm9hcmQpKTtcclxuICAgICAgICByb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlciA9IGxldHRlcjtcclxuICAgICAgICByb3dBcnJheVtyb3dJbmRleF0uZmlsbGVkaW4gPSAocm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5LmZpbHRlcigoY2VsbCkgPT4ge3JldHVybiBjZWxsLmxldHRlciA9PT0gXCI/XCI7fSkubGVuZ3RoID09PSAwKTtcclxuICAgICAgICBmb3IgKGxldCBjaSA9IDA7IGNpIDwgbnVtQ29sczsgY2krKykge1xyXG4gICAgICAgICAgICBpZiAocm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5W2NpXS5sZXR0ZXIgPT09IFwiP1wiKSB7XHJcbiAgICAgICAgICAgICAgICByb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXlbY2ldLmNsYXNzTmFtZSA9IGNzc05vTGV0dGVyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5W2NpXS5jbGFzc05hbWUgPSByb3dBcnJheVtyb3dJbmRleF0uZmlsbGVkaW4gPyBjc3NMZXR0ZXJPbkZ1bGxSb3cgOiBjc3NMZXR0ZXJPblBhcnRpYWxSb3c7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vdmVEaXJlY3Rpb24gPT09IFwidVwiKSB7XHJcbiAgICAgICAgICAgIG1vdmVVcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobW92ZURpcmVjdGlvbiA9PT0gXCJkXCIpIHtcclxuICAgICAgICAgICAgbW92ZURvd24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vdmVEaXJlY3Rpb24gPT09IFwiclwiKSB7XHJcbiAgICAgICAgICAgIG1vdmVSaWdodCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobW92ZURpcmVjdGlvbiA9PT0gXCJsXCIpIHtcclxuICAgICAgICAgICAgbW92ZUxlZnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvd0FycmF5LmZpbHRlcihyID0+IHtyZXR1cm4gIXIuZmlsbGVkaW47fSkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIEFsbCBsZXR0ZXJzIGFyZSBmaWxsZWQgaW5cclxuICAgICAgICAgICAgc2V0RmlsbGVkaW4odHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEJvYXJkKHJvd0FycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb3ZlVXAgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gc2VsZWN0ZWQucm93O1xyXG4gICAgICAgIGxldCBjb2xJbmRleCA9IHNlbGVjdGVkLmNvbDtcclxuICAgICAgICBsZXQgbmV3U2VsZWN0ZWQgPSB7cm93OnJvd0luZGV4LGNvbDpjb2xJbmRleH07XHJcbiAgICAgICAgaWYgKHJvd0luZGV4IC0gMSA+IDApIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gcm93SW5kZXggLSAxO1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleDtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb3ZlRG93biA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6cm93SW5kZXgsY29sOmNvbEluZGV4fTtcclxuICAgICAgICBpZiAocm93SW5kZXggKyAxIDwgbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gcm93SW5kZXggKyAxO1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleDtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb3ZlUmlnaHQgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gc2VsZWN0ZWQucm93O1xyXG4gICAgICAgIGxldCBjb2xJbmRleCA9IHNlbGVjdGVkLmNvbDtcclxuICAgICAgICBsZXQgbmV3U2VsZWN0ZWQgPSB7cm93OjEsY29sOjB9O1xyXG4gICAgICAgIGlmIChjb2xJbmRleCArIDEgPCBudW1Db2xzKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4O1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleCArIDE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyb3dJbmRleCArIDEgPCBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleCArIDE7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGVkKG5ld1NlbGVjdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb3ZlTGVmdCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6bnVtUm93cy0yLGNvbDpudW1Db2xzLTF9O1xyXG4gICAgICAgIGlmIChjb2xJbmRleCAtIDEgPiAtMSkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleDtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXggLSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocm93SW5kZXggLSAxID4gMCkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleCAtIDE7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IG51bUNvbHMgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlU2hvd1NvbHV0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dTb2x1dGlvbighc2hvd1NvbHV0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVja1NvbHV0aW9uID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgc2V0Q2hlY2tpbmcodHJ1ZSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgbGV0IHN0YXJ0V29yZCA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IG51bUNvbHM7IGNvbEluZGV4KyspIHtcclxuICAgICAgICAgICAgc3RhcnRXb3JkID0gc3RhcnRXb3JkICsgYm9hcmRbMF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCByb3dJbmRleCA9IDE7IHJlc3VsdCAmJiByb3dJbmRleCA8IG51bVJvd3M7IHJvd0luZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IHByZXZXb3JkID0gXCJcIjtcclxuICAgICAgICAgICAgbGV0IGN1cnJXb3JkID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IG51bUNvbHM7IGNvbEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIHByZXZXb3JkID0gcHJldldvcmQgKyBib2FyZFtyb3dJbmRleC0xXS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgY3VycldvcmQgPSBjdXJyV29yZCArIGJvYXJkW3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdmFsaWROZXh0TW9ycGgoc3RhcnRXb3JkLCByb3dJbmRleCwgcHJldldvcmQsIGN1cnJXb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYCR7cHJldldvcmR9IHRvICR7Y3VycldvcmR9IGlzIG5vdCBhIHZhbGlkIG1vdmVgKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcm93SW5kZXggIT09IG51bVJvd3MgLTEgJiYgISBhd2FpdCBpc1dvcmRWYWxpZChjdXJyV29yZCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGAke2N1cnJXb3JkfSBpcyBub3QgdmFsaWRgKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldENoZWNraW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRQdXp6bGVTb2x2ZWQocmVzdWx0KTtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiU3VjY2VzcyFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZhbGlkTmV4dE1vcnBoID0gKHN0YXJ0V29yZCwgcmVxdWlyZWREaWZmTGV0dGVyQ291bnQsIHByZXZpb3VzV29yZCwgY3VycmVudFdvcmQpID0+IHtcclxuICAgICAgICAvLyBTdGFydCB3b3JkIGlzIHJvdyBpbmRleCAwXHJcbiAgICAgICAgLy8gV29yZCBhdCByb3cgaW5kZXggMSBtdXN0IGhhdmUgMSBsZXR0ZXIgc3dhcFxyXG4gICAgICAgIC8vIFdvcmQgYXQgcm93IGluZGV4IDIgbXVzdCBoYXZlIDIgbGV0dGVyIHN3YXBzIHJlbGF0aXZlIHRvIHRoZSBzdGFydCB3b3JkLCBhbmQgMSByZWxhdGl2ZSB0byBwcmV2aW91cyB3b3JkXHJcbiAgICAgICAgLy8gV29yZCBhdCByb3cgaW5kZXggMyBtdXN0IGhhdmUgMyBsZXR0ZXIgc3dhcHMgcmVsYXRpdmUgdG8gdGhlIHN0YXJ0IHdvcmQsIGFuZCAxIHJlbGF0aXZlIHRvIHByZXZpb3VzIHdvcmRcclxuICAgICAgICAvLyBFdGMuIFNvIHBhc3Mgcm93IGluZGV4IHRvIHJlcXVpcmVkRGlmZkxldHRlckNvdW50LlxyXG4gICAgICAgIGxldCBzdGFydExldHRlcnMgPSBBcnJheS5mcm9tKHN0YXJ0V29yZCk7XHJcbiAgICAgICAgbGV0IHByZXZpb3VzTGV0dGVycyA9IEFycmF5LmZyb20ocHJldmlvdXNXb3JkKTtcclxuICAgICAgICBsZXQgY3VycmVudExldHRlcnMgPSBBcnJheS5mcm9tKGN1cnJlbnRXb3JkKTtcclxuICAgICAgICBsZXQgZGlmZkZyb21TdGFydENvdW50ID0gMDtcclxuICAgICAgICBsZXQgZGlmZkZyb21QcmV2aW91c0NvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAoY3VycmVudExldHRlcnNbaV0gIT09IHN0YXJ0TGV0dGVyc1tpXSkge1xyXG4gICAgICAgICAgICBkaWZmRnJvbVN0YXJ0Q291bnQrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChjdXJyZW50TGV0dGVyc1tpXSAhPT0gcHJldmlvdXNMZXR0ZXJzW2ldKSB7XHJcbiAgICAgICAgICAgIGRpZmZGcm9tUHJldmlvdXNDb3VudCsrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKGRpZmZGcm9tU3RhcnRDb3VudCA9PT0gcmVxdWlyZWREaWZmTGV0dGVyQ291bnQgJiYgZGlmZkZyb21QcmV2aW91c0NvdW50ID09PSAxKTtcclxuICAgICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGlzV29yZFZhbGlkKHdvcmQpIHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7YmFzZXVybH0vRU5BQkxFMks/ZXhpc3RzPSR7d29yZC50b0xvd2VyQ2FzZSgpfWA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGpkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBqZGF0YS5leGlzdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiIG9uS2V5RG93bj17KGUpID0+IHtoYW5kbGVLZXlEb3duKGUpO319IHRhYmluZGV4PXstMX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgTW9ycGhvXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nICYmIDxkaXYgY2xhc3NOYW1lPVwidHJFbXBoYXNpc1wiPkNyZWF0aW5nIHB1enpsZSwgcGxlYXNlIGJlIHBhdGllbnQuLi48L2Rpdj59XHJcbiAgICAgICAgICAgIHshbG9hZGluZyAmJiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Ym9hcmQubWFwKChib2FyZFJvdywgcm93SW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2BCb2FyZFJvdy4ke3Jvd0luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib2FyZFJvdy5jb2xBcnJheS5tYXAoKGNlbGwsIGNvbEluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2BCb2FyZENlbGwuJHtyb3dJbmRleH0uJHtjb2xJbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlU2VsZWN0aW9uKHJvd0luZGV4LGNvbEluZGV4KTt9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Btb3JwaG9DZWxsICR7cHV6emxlU29sdmVkID8gY3NzQnV0dGVyZmx5IDogc2hvd1NvbHV0aW9uID8gY3NzU29sdXRpb25MZXR0ZXIgOiBjZWxsLmNsYXNzTmFtZSArIChyb3dJbmRleCA9PT0gc2VsZWN0ZWQucm93ICYmIGNvbEluZGV4ID09PSBzZWxlY3RlZC5jb2wgPyBjc3NTZWxlY3RlZENlbGwgOiBcIlwiKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93U29sdXRpb24gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjZWxsLnNvbHV0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2VsbC5sZXR0ZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeyFsb2FkaW5nICYmICFjaGVja2luZyAmJiAhcHV6emxlU29sdmVkICYmIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TmV4dCBMZXR0ZXI6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZ2V0bmV4dGxldHRlclwiIHZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge2hhbmRsZUlucHV0TGV0dGVyKGUudGFyZ2V0LnZhbHVlKTt9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICA8cD5DaGFuZ2Ugb25lIGxldHRlciBhdCBhIHRpbWUgdG8gZ2V0IGZyb20ge2ZpcnN0V29yZH0gdG8ge2xhc3RXb3JkfS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+RWFjaCBpbnRlcmltIHdvcmQgbXVzdCBiZSBhIHZhbGlkIHdvcmQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7dG9nZ2xlU2hvd1NvbHV0aW9uKCk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtzaG93U29sdXRpb24gPyAnSElERSBTT0xVVElPTicgOiAnU0hPVyBBIFNPTFVUSU9OJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHshcHV6emxlU29sdmVkICYmIGZpbGxlZGluICYmIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtjaGVja1NvbHV0aW9uKCk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTVUJNSVQgWU9VUiBTT0xVVElPTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAge3B1enpsZVNvbHZlZCAmJiA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0SW5pdGlhbEJvYXJkKCk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHRU5FUkFURSBBTk9USEVSIFBVWlpMRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3JwaG87Il0sInNvdXJjZVJvb3QiOiIifQ==