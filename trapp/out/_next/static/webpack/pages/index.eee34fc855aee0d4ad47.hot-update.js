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

    if (result) {
      alert("Success!");
    }
  }; // async function isWordValid(word) {
  //     let url = `${baseurl}/ENABLE2K?exists=${word.toLowerCase()}`;
  //     const response = await fetch(url);
  //     const jdata = await response.json();
  //     return jdata.exists;
  // }


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
          lineNumber: 258,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 13
    }, undefined), loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trEmphasis",
      children: "Creating puzzle, please be patient..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 261,
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
              lineNumber: 271,
              columnNumber: 37
            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: cell.letter
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 273,
              columnNumber: 37
            }, undefined)
          }, `BoardCell.${rowIndex}.${colIndex}`, false, {
            fileName: _jsxFileName,
            lineNumber: 267,
            columnNumber: 29
          }, undefined))
        }, `BoardRow.${rowIndex}`, false, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 21
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trParagraph",
        children: [!loading && !checking && !puzzleSolved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Next Letter:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 282,
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
            lineNumber: 283,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Change one letter at a time to get from ", firstWord, " to ", lastWord, "."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Each interim word must be a valid word."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 64
        }, undefined), puzzleSolved ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "trEmphasis",
          children: "Success!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 290,
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
        }, undefined), puzzleSolved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "trButton",
            onClick: () => {
              setInitialBoard();
            },
            children: "GENERATE ANOTHER PUZZLE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 304,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 38
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 26
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 254,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9ycGhvL21vcnBoby5qcyJdLCJuYW1lcyI6WyJNb3JwaG8iLCJzZXRXaGVyZXRvIiwibnVtUm93cyIsIm51bUNvbHMiLCJiYXNldXJsIiwiY3NzUHJlc2V0TGV0dGVyIiwiY3NzTm9MZXR0ZXIiLCJjc3NTZWxlY3RlZENlbGwiLCJjc3NMYXJ2YSIsImNzc0NvY29vbiIsImNzc0J1dHRlcmZseSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJjaGVja2luZyIsInNldENoZWNraW5nIiwiZmlsbGVkaW4iLCJzZXRGaWxsZWRpbiIsInNob3dTb2x1dGlvbiIsInNldFNob3dTb2x1dGlvbiIsInB1enpsZVNvbHZlZCIsInNldFB1enpsZVNvbHZlZCIsImZpcnN0V29yZCIsInNldEZpcnN0V29yZCIsImxhc3RXb3JkIiwic2V0TGFzdFdvcmQiLCJib2FyZCIsInNldEJvYXJkIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInJvdyIsImNvbCIsInVzZUVmZmVjdCIsInNldEluaXRpYWxCb2FyZCIsInJvd0FycmF5IiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwibm90ZXMiLCJsZW5ndGgiLCJyb3dJbmRleCIsInJvd1dvcmQiLCJwdXp6bGUiLCJ0b1VwcGVyQ2FzZSIsInJvd0xldHRlcnMiLCJBcnJheSIsImZyb20iLCJyb3dGaWxsZWRJbiIsImNvbEFycmF5IiwiY29sSW5kZXgiLCJjZWxsIiwibGV0dGVyIiwic29sdXRpb24iLCJjbGFzc05hbWUiLCJwdXNoIiwiaGFuZGxlU2VsZWN0aW9uIiwiaGFuZGxlS2V5RG93biIsImV2ZW50Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVJbnB1dExldHRlciIsImxldHRlcnRlc3QiLCJtb3ZlRGlyZWN0aW9uIiwibWF0Y2giLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJmaWx0ZXIiLCJjaSIsIm1vdmVVcCIsIm1vdmVEb3duIiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJyIiwibmV3U2VsZWN0ZWQiLCJ0b2dnbGVTaG93U29sdXRpb24iLCJjaGVja1NvbHV0aW9uIiwicmVzdWx0IiwicHJldldvcmQiLCJjdXJyV29yZCIsImNvdW50U3dhcHMiLCJhbGVydCIsImlzV29yZFZhbGlkIiwiZSIsIm1hcCIsImJvYXJkUm93IiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWtCO0FBQUE7O0FBQzdCLFFBQU1DLE9BQU8sR0FBRyxDQUFoQjtBQUNBLFFBQU1DLE9BQU8sR0FBRyxDQUFoQjtBQUNBLFFBQU1DLE9BQU8sR0FBSSxLQUFELEdBQW9FLHVCQUFwRSxHQUE4RixDQUE5RztBQUNBLFFBQU1DLGVBQWUsR0FBRyxrQkFBeEI7QUFDQSxRQUFNQyxXQUFXLEdBQUcsb0JBQXBCO0FBQ0EsUUFBTUMsZUFBZSxHQUFHLHFCQUF4QjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxpQkFBakI7QUFDQSxRQUFNQyxTQUFTLEdBQUcsa0JBQWxCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHLHFCQUFyQjtBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsK0NBQVEsQ0FBQyxJQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCRiwrQ0FBUSxDQUFDLEtBQUQsQ0FBeEMsQ0FYNkIsQ0FXb0I7O0FBQ2pELFFBQU07QUFBQSxPQUFDRyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkosK0NBQVEsQ0FBQyxLQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDTiwrQ0FBUSxDQUFDLEtBQUQsQ0FBaEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ08sWUFBRDtBQUFBLE9BQWVDO0FB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QU51QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRC9DLEVBU0tKLFlBQVksZ0JBQ1Q7QUFBSyxtQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFMsZ0JBS1Q7QUFBUSxtQkFBUyxFQUFDLFVBQWxCO0FBQTZCLGlCQUFPLEVBQUUsTUFBTTtBQUFDeUQsOEJBQWtCO0FBQUksV0FBbkU7QUFBQSxvQkFDTSxHQUFFM0QsWUFBWSxHQUFHLGVBQUgsR0FBcUIsaUJBQWtCO0FBRDNEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBZFIsRUFrQkssQ0FBQ0UsWUFBRCxJQUFpQkosUUFBakIsaUJBQTZCO0FBQUEsaUNBQzFCO0FBQVEscUJBQVMsRUFBQyxVQUFsQjtBQUE2QixtQkFBTyxFQUFFLE1BQU07QUFBQzhELDJCQUFhO0FBQUksYUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEMEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFsQmxDLEVBdUJLMUQsWUFBWSxpQkFBSTtBQUFBLGlDQUNiO0FBQVEscUJBQVMsRUFBQyxVQUFsQjtBQUE2QixtQkFBTyxFQUFFLE1BQU07QUFBQ2EsNkJBQWU7QUFBSSxhQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURhO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBdkJyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbEJTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUEyREgsQ0FwVEQ7O0dBQU1qQyxNOztLQUFBQSxNO0FBc1ROLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVlZTM0ZmM4NTVhZWUwZDRhZDQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb3VudFN3YXBzLCBpc1dvcmRWYWxpZCB9IGZyb20gJy4uLy4uL2xpYi93b3JkZnVuY3Rpb25zJztcclxuXHJcbmNvbnN0IE1vcnBobyA9ICh7c2V0V2hlcmV0b30pID0+IHtcclxuICAgIGNvbnN0IG51bVJvd3MgPSA2O1xyXG4gICAgY29uc3QgbnVtQ29scyA9IDU7XHJcbiAgICBjb25zdCBiYXNldXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbSc7XHJcbiAgICBjb25zdCBjc3NQcmVzZXRMZXR0ZXIgPSBcIm1vcnBob0NlbGxTdGF0aWNcIjtcclxuICAgIGNvbnN0IGNzc05vTGV0dGVyID0gXCJtb3JwaG9DZWxsTm9MZXR0ZXJcIjtcclxuICAgIGNvbnN0IGNzc1NlbGVjdGVkQ2VsbCA9IFwiIG1vcnBob0NlbGxTZWxlY3RlZFwiO1xyXG4gICAgY29uc3QgY3NzTGFydmEgPSBcIm1vcnBob0NlbGxMYXJ2YVwiO1xyXG4gICAgY29uc3QgY3NzQ29jb29uID0gXCJtb3JwaG9DZWxsQ29jb29uXCI7XHJcbiAgICBjb25zdCBjc3NCdXR0ZXJmbHkgPSBcIm1vcnBob0NlbGxCdXR0ZXJmbHlcIjtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2NoZWNraW5nLCBzZXRDaGVja2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIFNldCB3aGVuIGNoZWNraW5nIHNvbHV0aW9uIHRvIHByZXZlbnQgZnVydGhlciBhbHRlcmF0aW9uc1xyXG4gICAgY29uc3QgW2ZpbGxlZGluLCBzZXRGaWxsZWRpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd1NvbHV0aW9uLCBzZXRTaG93U29sdXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3B1enpsZVNvbHZlZCwgc2V0UHV6emxlU29sdmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtmaXJzdFdvcmQsIHNldEZpcnN0V29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbGFzdFdvcmQsIHNldExhc3RXb3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtib2FyZCwgc2V0Qm9hcmRdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSh7cm93OjEsIGNvbDowfSk7IC8vIE5hdHVyYWwgcGxhY2UgdG8gc3RhcnQgZW50ZXJpbmcgbGV0dGVyc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRJbml0aWFsQm9hcmQoKTtcclxuICAgIH0sW10pO1xyXG4gICAgY29uc3Qgc2V0SW5pdGlhbEJvYXJkID0gYXN5bmMoKSA9PiB7IC8vIEluaXRpYWwgYm9hcmQgb2YgZ2l2ZW4gc2l6ZVxyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgc2V0Q2hlY2tpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldFNob3dTb2x1dGlvbihmYWxzZSk7XHJcbiAgICAgICAgc2V0RmlsbGVkaW4oZmFsc2UpO1xyXG4gICAgICAgIHNldFB1enpsZVNvbHZlZChmYWxzZSk7XHJcbiAgICAgICAgbGV0IHJvd0FycmF5ID0gW107XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2Jhc2V1cmx9L0VOQUJMRTJLP21vcnBobz10cnVlJmxlbj0ke251bUNvbHN9YDtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBpZiAoIWRhdGEubm90ZXMgfHwgZGF0YS5ub3Rlcy5sZW5ndGggPT09IDApIHsgLy8gT2sgcmVzdWx0XHJcbiAgICAgICAgICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBudW1Sb3dzOyByb3dJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3dXb3JkID0gZGF0YS5wdXp6bGVbcm93SW5kZXhdLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93SW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRGaXJzdFdvcmQocm93V29yZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvd0luZGV4ID09PSBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExhc3RXb3JkKHJvd1dvcmQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93TGV0dGVycyA9IFsuLi5BcnJheS5mcm9tKHJvd1dvcmQpXTtcclxuICAgICAgICAgICAgICAgIGxldCByb3dGaWxsZWRJbiA9IHJvd0luZGV4ID09PSAwIHx8IHJvd0luZGV4ID09PSBudW1Sb3dzIC0gMTtcclxuICAgICAgICAgICAgICAgIGxldCBjb2xBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IG51bUNvbHM7IGNvbEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IHtsZXR0ZXI6Jz8nLHNvbHV0aW9uOnJvd0xldHRlcnNbY29sSW5kZXhdLGNsYXNzTmFtZTonPyd9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3dJbmRleCA9PT0gMCB8fCByb3dJbmRleCA9PT0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5sZXR0ZXIgPSByb3dMZXR0ZXJzW2NvbEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBjc3NQcmVzZXRMZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5sZXR0ZXIgPSAnPyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gY3NzTm9MZXR0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbEFycmF5LnB1c2goY2VsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByb3dBcnJheS5wdXNoKHtmaWxsZWRpbjpyb3dGaWxsZWRJbiwgY29sQXJyYXk6Y29sQXJyYXl9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRCb2FyZChyb3dBcnJheSk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQoe3JvdzoxLGNvbDowfSk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0aW9uID0gKHJvd0luZGV4LCBjb2xJbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChyb3dJbmRleCA8IDEgfHwgcm93SW5kZXggPj0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sSW5kZXggPCAwIHx8IHJvd0luZGV4ID49IG51bUNvbHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZCh7cm93OnJvd0luZGV4LGNvbDpjb2xJbmRleH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkYxMlwiKSB7cmV0dXJuO31cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChjaGVja2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIE5vIG1vZGVzIHdoaWxlIGNoZWNraW5nIHNvbHV0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwdXp6bGVTb2x2ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBQdXp6bGUgYWxyZWFkeSBzb2x2ZWRcclxuICAgICAgICB9XHJcbiAgICAgICAgaGFuZGxlSW5wdXRMZXR0ZXIoZXZlbnQua2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dExldHRlciA9IChsZXR0ZXIpID0+IHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGlmIChyb3dJbmRleCA8IDEgfHwgcm93SW5kZXggPj0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sSW5kZXggPCAwIHx8IHJvd0luZGV4ID49IG51bUNvbHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbGV0dGVydGVzdCA9IC9eW0EtWmEtelxcP10kLzsgLy8gc2luZ2xlIGxldHRlciBvciBxdWVzdGlvbiBtYXJrIGtleSBwcmVzc2VkXHJcbiAgICAgICAgbGV0IG1vdmVEaXJlY3Rpb24gPSBcInJcIjsgLy8gRGVmYXVsdFxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiQmFja3NwYWNlXCIpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gXCI/XCI7XHJcbiAgICAgICAgICAgIG1vdmVEaXJlY3Rpb24gPSBcImxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJEZWxldGVcIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBcIj9cIjtcclxuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiQXJyb3dVcFwiKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IGJvYXJkW3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICBtb3ZlRGlyZWN0aW9uID0gXCJ1XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT09IFwiQXJyb3dEb3duXCIpIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gYm9hcmRbcm93SW5kZXhdLmNvbEFycmF5W2NvbEluZGV4XS5sZXR0ZXI7XHJcbiAgICAgICAgICAgIG1vdmVEaXJlY3Rpb24gPSBcImRcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJBcnJvd0xlZnRcIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBib2FyZFtyb3dJbmRleF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA9IFwibFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyID09PSBcIkFycm93UmlnaHRcIikge1xyXG4gICAgICAgICAgICBsZXR0ZXIgPSBib2FyZFtyb3dJbmRleF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlcjtcclxuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA9IFwiclwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV0dGVyLm1hdGNoKGxldHRlcnRlc3QpKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IGxldHRlci50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldHRlciA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByb3dBcnJheSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYm9hcmQpKTtcclxuICAgICAgICByb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXlbY29sSW5kZXhdLmxldHRlciA9IGxldHRlcjtcclxuICAgICAgICByb3dBcnJheVtyb3dJbmRleF0uZmlsbGVkaW4gPSAocm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5LmZpbHRlcigoY2VsbCkgPT4ge3JldHVybiBjZWxsLmxldHRlciA9PT0gXCI/XCI7fSkubGVuZ3RoID09PSAwKTtcclxuICAgICAgICBmb3IgKGxldCBjaSA9IDA7IGNpIDwgbnVtQ29sczsgY2krKykge1xyXG4gICAgICAgICAgICBpZiAocm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5W2NpXS5sZXR0ZXIgPT09IFwiP1wiKSB7XHJcbiAgICAgICAgICAgICAgICByb3dBcnJheVtyb3dJbmRleF0uY29sQXJyYXlbY2ldLmNsYXNzTmFtZSA9IGNzc05vTGV0dGVyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcm93QXJyYXlbcm93SW5kZXhdLmNvbEFycmF5W2NpXS5jbGFzc05hbWUgPSByb3dBcnJheVtyb3dJbmRleF0uZmlsbGVkaW4gPyBjc3NDb2Nvb24gOiBjc3NMYXJ2YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobW92ZURpcmVjdGlvbiA9PT0gXCJ1XCIpIHtcclxuICAgICAgICAgICAgbW92ZVVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb3ZlRGlyZWN0aW9uID09PSBcImRcIikge1xyXG4gICAgICAgICAgICBtb3ZlRG93bigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobW92ZURpcmVjdGlvbiA9PT0gXCJyXCIpIHtcclxuICAgICAgICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb3ZlRGlyZWN0aW9uID09PSBcImxcIikge1xyXG4gICAgICAgICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocm93QXJyYXkuZmlsdGVyKHIgPT4ge3JldHVybiAhci5maWxsZWRpbjt9KS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgLy8gQWxsIGxldHRlcnMgYXJlIGZpbGxlZCBpblxyXG4gICAgICAgICAgICBzZXRGaWxsZWRpbih0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Qm9hcmQocm93QXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vdmVVcCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6cm93SW5kZXgsY29sOmNvbEluZGV4fTtcclxuICAgICAgICBpZiAocm93SW5kZXggLSAxID4gMCkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleCAtIDE7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IGNvbEluZGV4O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IG51bVJvd3MgLSAyO1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleCAtIDEgPiAtMSA/IGNvbEluZGV4IC0gMSA6IG51bUNvbHMgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW92ZURvd24gPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gc2VsZWN0ZWQucm93O1xyXG4gICAgICAgIGxldCBjb2xJbmRleCA9IHNlbGVjdGVkLmNvbDtcclxuICAgICAgICBsZXQgbmV3U2VsZWN0ZWQgPSB7cm93OnJvd0luZGV4LGNvbDpjb2xJbmRleH07XHJcbiAgICAgICAgaWYgKHJvd0luZGV4ICsgMSA8IG51bVJvd3MgLSAxKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4ICsgMTtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucm93ID0gMTtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXggKyAxIDwgbnVtQ29scyA/IGNvbEluZGV4ICsgMSA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGVkKG5ld1NlbGVjdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb3ZlUmlnaHQgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gc2VsZWN0ZWQucm93O1xyXG4gICAgICAgIGxldCBjb2xJbmRleCA9IHNlbGVjdGVkLmNvbDtcclxuICAgICAgICBsZXQgbmV3U2VsZWN0ZWQgPSB7cm93OjEsY29sOjB9O1xyXG4gICAgICAgIGlmIChjb2xJbmRleCArIDEgPCBudW1Db2xzKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLnJvdyA9IHJvd0luZGV4O1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5jb2wgPSBjb2xJbmRleCArIDE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyb3dJbmRleCArIDEgPCBudW1Sb3dzIC0gMSkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleCArIDE7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGVkKG5ld1NlbGVjdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb3ZlTGVmdCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBzZWxlY3RlZC5yb3c7XHJcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gc2VsZWN0ZWQuY29sO1xyXG4gICAgICAgIGxldCBuZXdTZWxlY3RlZCA9IHtyb3c6bnVtUm93cy0yLGNvbDpudW1Db2xzLTF9O1xyXG4gICAgICAgIGlmIChjb2xJbmRleCAtIDEgPiAtMSkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleDtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQuY29sID0gY29sSW5kZXggLSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocm93SW5kZXggLSAxID4gMCkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5yb3cgPSByb3dJbmRleCAtIDE7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkLmNvbCA9IG51bUNvbHMgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlU2hvd1NvbHV0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dTb2x1dGlvbighc2hvd1NvbHV0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVja1NvbHV0aW9uID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgc2V0Q2hlY2tpbmcodHJ1ZSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgZm9yKGxldCByb3dJbmRleCA9IDE7IHJlc3VsdCAmJiByb3dJbmRleCA8IG51bVJvd3M7IHJvd0luZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IHByZXZXb3JkID0gXCJcIjtcclxuICAgICAgICAgICAgbGV0IGN1cnJXb3JkID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IG51bUNvbHM7IGNvbEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIHByZXZXb3JkID0gcHJldldvcmQgKyBib2FyZFtyb3dJbmRleC0xXS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICAgICAgY3VycldvcmQgPSBjdXJyV29yZCArIGJvYXJkW3Jvd0luZGV4XS5jb2xBcnJheVtjb2xJbmRleF0ubGV0dGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb3VudFN3YXBzKHByZXZXb3JkLCBjdXJyV29yZCkgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGAke3ByZXZXb3JkfSB0byAke2N1cnJXb3JkfSBpcyBub3QgYSB2YWxpZCBtb3ZlYCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJvd0luZGV4ICE9PSBudW1Sb3dzIC0xICYmICEgYXdhaXQgaXNXb3JkVmFsaWQoY3VycldvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChgJHtjdXJyV29yZH0gaXMgbm90IHZhbGlkYCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDaGVja2luZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0UHV6emxlU29sdmVkKHJlc3VsdCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBhbGVydChcIlN1Y2Nlc3MhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBhc3luYyBmdW5jdGlvbiBpc1dvcmRWYWxpZCh3b3JkKSB7XHJcbiAgICAvLyAgICAgbGV0IHVybCA9IGAke2Jhc2V1cmx9L0VOQUJMRTJLP2V4aXN0cz0ke3dvcmQudG9Mb3dlckNhc2UoKX1gO1xyXG4gICAgLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIC8vICAgICBjb25zdCBqZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIC8vICAgICByZXR1cm4gamRhdGEuZXhpc3RzO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckJhY2tncm91bmRcIiBvbktleURvd249eyhlKSA9PiB7aGFuZGxlS2V5RG93bihlKTt9fSB0YWJpbmRleD17LTF9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIE1vcnBob1xyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7bG9hZGluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cInRyRW1waGFzaXNcIj5DcmVhdGluZyBwdXp6bGUsIHBsZWFzZSBiZSBwYXRpZW50Li4uPC9kaXY+fVxyXG4gICAgICAgICAgICB7IWxvYWRpbmcgJiYgPGRpdiBjbGFzc05hbWU9e3B1enpsZVNvbHZlZCA/IFwibW9ycGhvU29sdmVkRGl2XCIgOiBcIm1vcnBob0RpdlwifT5cclxuICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIHtib2FyZC5tYXAoKGJvYXJkUm93LCByb3dJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2BCb2FyZFJvdy4ke3Jvd0luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Ym9hcmRSb3cuY29sQXJyYXkubWFwKChjZWxsLCBjb2xJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17YEJvYXJkQ2VsbC4ke3Jvd0luZGV4fS4ke2NvbEluZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlU2VsZWN0aW9uKHJvd0luZGV4LGNvbEluZGV4KTt9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29sIG1vcnBob0NlbGwgJHtzaG93U29sdXRpb24gPyBjc3NQcmVzZXRMZXR0ZXIgOiBwdXp6bGVTb2x2ZWQgPyBjc3NCdXR0ZXJmbHkgOiBjZWxsLmNsYXNzTmFtZSArIChyb3dJbmRleCA9PT0gc2VsZWN0ZWQucm93ICYmIGNvbEluZGV4ID09PSBzZWxlY3RlZC5jb2wgPyBjc3NTZWxlY3RlZENlbGwgOiBcIlwiKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd1NvbHV0aW9uID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NlbGwuc29sdXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NlbGwubGV0dGVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHshbG9hZGluZyAmJiAhY2hlY2tpbmcgJiYgIXB1enpsZVNvbHZlZCAmJiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5OZXh0IExldHRlcjo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJnZXRuZXh0bGV0dGVyXCIgdmFsdWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7aGFuZGxlSW5wdXRMZXR0ZXIoZS50YXJnZXQudmFsdWUpO319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNoYW5nZSBvbmUgbGV0dGVyIGF0IGEgdGltZSB0byBnZXQgZnJvbSB7Zmlyc3RXb3JkfSB0byB7bGFzdFdvcmR9LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RWFjaCBpbnRlcmltIHdvcmQgbXVzdCBiZSBhIHZhbGlkIHdvcmQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICB7cHV6emxlU29sdmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckVtcGhhc2lzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWNjZXNzIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7dG9nZ2xlU2hvd1NvbHV0aW9uKCk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7c2hvd1NvbHV0aW9uID8gJ0hJREUgU09MVVRJT04nIDogJ1NIT1cgQSBTT0xVVElPTid9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHshcHV6emxlU29sdmVkICYmIGZpbGxlZGluICYmIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7Y2hlY2tTb2x1dGlvbigpO319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU1VCTUlUIFlPVVIgU09MVVRJT05cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIHtwdXp6bGVTb2x2ZWQgJiYgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRJbml0aWFsQm9hcmQoKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdFTkVSQVRFIEFOT1RIRVIgUFVaWkxFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vcnBobzsiXSwic291cmNlUm9vdCI6IiJ9