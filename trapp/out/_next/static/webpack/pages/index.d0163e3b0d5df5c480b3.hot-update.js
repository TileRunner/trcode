self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/tm/tm.js":
/*!************************!*\
  !*** ./pages/tm/tm.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_wordfunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/wordfunctions */ "./lib/wordfunctions.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\tm\\tm.js",
    _s = $RefreshSig$();




const Transmogrify = ({
  setWhereto
}) => {
  _s();

  const {
    0: numMoves,
    1: setNumMoves
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2);
  const baseurl =  true ? 'http://localhost:5000' : 0;
  const numMovesArray = [2, 3, 4, 5, 6, 7, 8, 9];
  const {
    0: puzzle,
    1: setPuzzle
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const {
    0: nextWord,
    1: setNextWord
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: words,
    1: setWords
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Users words

  const {
    0: solved,
    1: setSolved
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const callForPuzzle = async () => {
    let data = {};

    try {
      let url = `${baseurl}/ENABLE2K?transmogrify=true&numMoves=${numMoves}`;
      const response = await fetch(url);
      data = await response.json();
    } catch (error) {
      data.notes = ["Problem with the server. Sorry about that."];
      console.log(error);
    }

    setPuzzle(data);
    setWords([]);
    setNextWord('');
    setSolved(false);
  };

  const acceptNextWord = async e => {
    e.preventDefault();
    let prevWord = words.length === 0 ? puzzle.startWord : words[words.length - 1];
    let newWord = nextWord.trim();

    if (validMove(newWord, prevWord)) {
      if (!(await (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_2__.isWordValid)(newWord))) {
        alert(`${newWord} is not a valid word`);
      } else {
        let lastWord = puzzle.targetWord;
        let newWords = [...words];
        newWords.push(newWord);
        setWords(newWords);
        setNextWord('');

        if (validMove(newWord, lastWord)) {
          setSolved(true);
        }
      }
    } else {
      alert('Only anagrams, drops, swaps and inserts allowed.');
    }
  };

  const validMove = (prevWord = "", newWord = "") => {
    if (prevWord === newWord) {
      return false;
    }

    return (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_2__.areAnagrams)(prevWord, newWord) || (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_2__.countSwaps)(prevWord, newWord) === 1 || (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_2__.isDrop)(prevWord, newWord) || (0,_lib_wordfunctions__WEBPACK_IMPORTED_MODULE_2__.isDrop)(newWord, prevWord);
  };

  const GameStartSection = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "tm_numMovesDiv",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "Number Of Moves"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }, undefined), numMovesArray.map(n => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: `tm_${n === numMoves ? 'numMovesSelected' : 'numMovesUnselected'}`,
      onClick: () => {
        setNumMoves(n);
      },
      children: n
    }, `chooseNumMoves${n}`, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "tm_startPuzzleDiv",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          callForPuzzle();
        },
        children: "Start Puzzle"
      }, "startPuzzle", false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 30
  }, undefined);

  const PuzzleSection = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "tm_puzzleDiv",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: puzzle.startWord
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "to"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: puzzle.targetWord
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "Target:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: puzzle.numMoves
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "moves"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 27
  }, undefined);

  const SolutionSection = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "tm_solutionOuterDiv",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "tm_solutionDiv",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: puzzle.startWord
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 21
          }, undefined), words.map((w, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: w
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 50
            }, undefined)
          }, `userWord${i}`, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }, undefined)), !solved && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: "..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 37
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 33
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: puzzle.targetWord
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }, undefined), solved ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "tm_congrats",
      children: ["\uD83D\uDC4F\uD83C\uDFFD Solved in ", words.length + 1, " moves \uD83D\uDC4F\uD83C\uDFFD"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        children: ["Next Word:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          value: nextWord,
          onChange: e => {
            setNextWord(e.target.value);
          },
          onKeyPress: e => {
            e.keyCode === 13 && acceptNextWord;
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          onClick: acceptNextWord,
          children: "GO"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "tm_lastbuttons",
        children: [words.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "tm_undo",
          onClick: () => {
            let newWords = [...words];
            newWords.pop();
            setWords(newWords);
          },
          children: "UNDO"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 42
        }, undefined), words.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "tm_reset",
          onClick: () => {
            setWords([]);
            setNextWord('');
          },
          children: "RESET"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 42
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "tm_help",
          onClick: () => {
            alert('Valid next word options:\nSwap one letter, e.g. CAT to COT\nDrop one letter, e.g. SWIG to WIG\nInsert one letter, e.g. MAT to MATH, or HIP to WHIP\nAnagram, e.g. ACT to CAT');
          },
          children: "HELP"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 29
  }, undefined);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trBackground",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trTitle",
      children: ["Transmogrify", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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
          lineNumber: 120,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: GameStartSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 21
        }, undefined), puzzle && puzzle.startWord && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: PuzzleSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 56
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 52
        }, undefined), puzzle && puzzle.startWord && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: SolutionSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 56
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 52
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: puzzle && puzzle.notes && puzzle.notes.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trDanger",
        children: puzzle.notes.map((n, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: n
        }, `note${i}`, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 9
  }, undefined);
};

_s(Transmogrify, "ixsnl/iIxPALoTt6WzQflAzPPAk=");

_c = Transmogrify;
/* harmony default export */ __webpack_exports__["default"] = (Transmogrify);

var _c;

$RefreshReg$(_c, "Transmogrify");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG0vdG0uanMiXSwibmFtZXMiOlsiVHJhbnNtb2dyaWZ5Iiwic2V0V2hlcmV0byIsIm51bU1vdmVzIiwic2V0TnVtTW92ZXMiLCJ1c2VTdGF0ZSIsImJhc2V1cmwiLCJudW1Nb3Zlc0FycmF5IiwicHV6emxlIiwic2V0UHV6emxlIiwibmV4dFdvcmQiLCJzZXROZXh0V29yZCIsIndvcmRzIiwic2V0V29yZHMiLCJzb2x2ZWQiLCJzZXRTb2x2ZWQiLCJjYWxsRm9yUHV6emxlIiwiZGF0YSIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZXJyb3IiLCJub3RlcyIsImNvbnNvbGUiLCJsb2ciLCJhY2NlcHROZXh0V29yZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByZXZXb3JkIiwibGVuZ3RoIiwic3RhcnRXb3JkIiwibmV3V29yZCIsInRyaW0iLCJ2YWxpZE1vdmUiLCJpc1dvcmRWYWxpZCIsImFsZXJ0IiwibGFzdFdvcmQiLCJ0YXJnZXRXb3JkIiwibmV3V29yZHMiLCJwdXNoIiwiYXJlQW5hZ3JhbXMiLCJjb3VudFN3YXBzIiwiaXNEcm9wIiwiR2FtZVN0YXJ0U2VjdGlvbiIsIm1hcCIsIm4iLCJQdXp6bGVTZWN0aW9uIiwiU29sdXRpb25TZWN0aW9uIiwidyIsImkiLCJ0YXJnZXQiLCJ2YWx1ZSIsImtleUNvZGUiLCJwb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWtCO0FBQUE7O0FBQ25DLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsK0NBQVEsQ0FBQyxDQUFELENBQXhDO0FBQ0EsUUFBTUMsT0FBTyxHQUFJLEtBQUQsR0FBb0UsdUJBQXBFLEdBQThGLENBQTlHO0FBQ0EsUUFBTUMsYUFBYSxHQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFB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ZixNQUFNLENBQUNlLEtBQVAsQ0FBYU8sTUFBYixHQUFzQixDQUFoRCxpQkFDRDtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLGtCQUNLdEIsTUFBTSxDQUFDZSxLQUFQLENBQWFzQixHQUFiLENBQWlCLENBQUNDLENBQUQsRUFBR0ksQ0FBSCxrQkFDZDtBQUFBLG9CQUFxQko7QUFBckIsV0FBUyxPQUFNSSxDQUFFLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQTBCSCxDQXpJRDs7R0FBTWpELFk7O0tBQUFBLFk7QUEySU4sK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDAxNjNlM2IwZDVkZjVjNDgwYjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvdW50U3dhcHMsIGFyZUFuYWdyYW1zLCBpc0Ryb3AsIGlzV29yZFZhbGlkIH0gZnJvbSAnLi4vLi4vbGliL3dvcmRmdW5jdGlvbnMnO1xyXG5cclxuY29uc3QgVHJhbnNtb2dyaWZ5ID0gKHtzZXRXaGVyZXRvfSkgPT4ge1xyXG4gICAgY29uc3QgW251bU1vdmVzLCBzZXROdW1Nb3Zlc10gPSB1c2VTdGF0ZSgyKTtcclxuICAgIGNvbnN0IGJhc2V1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tJztcclxuICAgIGNvbnN0IG51bU1vdmVzQXJyYXkgPSBbMiwzLDQsNSw2LDcsOCw5XTtcclxuICAgIGNvbnN0IFtwdXp6bGUsIHNldFB1enpsZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbbmV4dFdvcmQsIHNldE5leHRXb3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt3b3Jkcywgc2V0V29yZHNdID0gdXNlU3RhdGUoW10pOyAvLyBVc2VycyB3b3Jkc1xyXG4gICAgY29uc3QgW3NvbHZlZCwgc2V0U29sdmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNhbGxGb3JQdXp6bGUgPSBhc3luYygpID0+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSBgJHtiYXNldXJsfS9FTkFCTEUySz90cmFuc21vZ3JpZnk9dHJ1ZSZudW1Nb3Zlcz0ke251bU1vdmVzfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICAgICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgZGF0YS5ub3RlcyA9IFtcIlByb2JsZW0gd2l0aCB0aGUgc2VydmVyLiBTb3JyeSBhYm91dCB0aGF0LlwiXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRQdXp6bGUoZGF0YSk7XHJcbiAgICAgICAgc2V0V29yZHMoW10pO1xyXG4gICAgICAgIHNldE5leHRXb3JkKCcnKTtcclxuICAgICAgICBzZXRTb2x2ZWQoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYWNjZXB0TmV4dFdvcmQgPSBhc3luYyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBwcmV2V29yZCA9ICh3b3Jkcy5sZW5ndGggPT09IDAgPyBwdXp6bGUuc3RhcnRXb3JkIDogd29yZHNbd29yZHMubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgIGxldCBuZXdXb3JkID0gbmV4dFdvcmQudHJpbSgpO1xyXG4gICAgICAgIGlmICh2YWxpZE1vdmUobmV3V29yZCwgcHJldldvcmQpKSB7XHJcbiAgICAgICAgICAgIGlmICghYXdhaXQgaXNXb3JkVmFsaWQobmV3V29yZCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGAke25ld1dvcmR9IGlzIG5vdCBhIHZhbGlkIHdvcmRgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBsYXN0V29yZCA9IHB1enpsZS50YXJnZXRXb3JkO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1dvcmRzID0gWy4uLndvcmRzXTtcclxuICAgICAgICAgICAgICAgIG5ld1dvcmRzLnB1c2gobmV3V29yZCk7XHJcbiAgICAgICAgICAgICAgICBzZXRXb3JkcyhuZXdXb3Jkcyk7XHJcbiAgICAgICAgICAgICAgICBzZXROZXh0V29yZCgnJyk7ICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkTW92ZShuZXdXb3JkLCBsYXN0V29yZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTb2x2ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnT25seSBhbmFncmFtcywgZHJvcHMsIHN3YXBzIGFuZCBpbnNlcnRzIGFsbG93ZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdmFsaWRNb3ZlID0gKHByZXZXb3JkPVwiXCIsIG5ld1dvcmQ9XCJcIikgPT4ge1xyXG4gICAgICAgIGlmIChwcmV2V29yZCA9PT0gbmV3V29yZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoYXJlQW5hZ3JhbXMocHJldldvcmQsIG5ld1dvcmQpXHJcbiAgICAgICAgICAgIHx8IGNvdW50U3dhcHMocHJldldvcmQsIG5ld1dvcmQpID09PSAxXHJcbiAgICAgICAgICAgIHx8IGlzRHJvcChwcmV2V29yZCwgbmV3V29yZClcclxuICAgICAgICAgICAgfHwgaXNEcm9wKG5ld1dvcmQsIHByZXZXb3JkKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBHYW1lU3RhcnRTZWN0aW9uID0gPGRpdiBjbGFzc05hbWU9XCJ0bV9udW1Nb3Zlc0RpdlwiPlxyXG4gICAgICAgIDxoMz5OdW1iZXIgT2YgTW92ZXM8L2gzPlxyXG4gICAgICAgIHtudW1Nb3Zlc0FycmF5Lm1hcCgobikgPT4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YHRtXyR7biA9PT0gbnVtTW92ZXMgPyAnbnVtTW92ZXNTZWxlY3RlZCcgOiAnbnVtTW92ZXNVbnNlbGVjdGVkJ31gfVxyXG4gICAgICAgICAgICAgICAga2V5PXtgY2hvb3NlTnVtTW92ZXMke259YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0TnVtTW92ZXMobik7IH0gfVxyXG4gICAgICAgICAgICA+e259XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG1fc3RhcnRQdXp6bGVEaXZcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJzdGFydFB1enpsZVwiIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4geyBjYWxsRm9yUHV6emxlKCk7IH0gfT5cclxuICAgICAgICAgICAgICAgIFN0YXJ0IFB1enpsZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IFB1enpsZVNlY3Rpb24gPSA8ZGl2IGNsYXNzTmFtZT1cInRtX3B1enpsZURpdlwiPlxyXG4gICAgICAgIDxzcGFuPntwdXp6bGUuc3RhcnRXb3JkfTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj50bzwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj57cHV6emxlLnRhcmdldFdvcmR9PC9zcGFuPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPHNwYW4+VGFyZ2V0Ojwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj57cHV6emxlLm51bU1vdmVzfTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5tb3Zlczwvc3Bhbj5cclxuICAgIDwvZGl2PjtcclxuICAgIGNvbnN0IFNvbHV0aW9uU2VjdGlvbiA9IDxkaXYgY2xhc3NOYW1lPVwidG1fc29sdXRpb25PdXRlckRpdlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG1fc29sdXRpb25EaXZcIj5cclxuICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+e3B1enpsZS5zdGFydFdvcmR9PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIHt3b3Jkcy5tYXAoKHcsaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgdXNlcldvcmQke2l9YH0+PHRkPnt3fTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICB7IXNvbHZlZCAmJiA8dHI+PHRkPi4uLjwvdGQ+PC90cj59XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD57cHV6emxlLnRhcmdldFdvcmR9PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7c29sdmVkID9cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidG1fY29uZ3JhdHNcIj7wn5GP8J+PvSBTb2x2ZWQgaW4ge3dvcmRzLmxlbmd0aCArIDF9IG1vdmVzIPCfkY/wn4+9PC9wPlxyXG4gICAgICAgIDpcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIE5leHQgV29yZDpcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e25leHRXb3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtzZXROZXh0V29yZChlLnRhcmdldC52YWx1ZSk7fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IHtlLmtleUNvZGUgPT09IDEzICYmIGFjY2VwdE5leHRXb3JkO319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e2FjY2VwdE5leHRXb3JkfT5HTzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bV9sYXN0YnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt3b3Jkcy5sZW5ndGggPiAwICYmIDxidXR0b24gY2xhc3NOYW1lPVwidG1fdW5kb1wiIG9uQ2xpY2s9eygpID0+IHtsZXQgbmV3V29yZHMgPSBbLi4ud29yZHNdOyBuZXdXb3Jkcy5wb3AoKTsgc2V0V29yZHMobmV3V29yZHMpO319PlVORE88L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAge3dvcmRzLmxlbmd0aCA+IDAgJiYgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0bV9yZXNldFwiIG9uQ2xpY2s9eygpID0+IHtzZXRXb3JkcyhbXSk7IHNldE5leHRXb3JkKCcnKTt9fT5SRVNFVDwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRtX2hlbHBcIiBvbkNsaWNrPXsoKSA9PiB7YWxlcnQoJ1ZhbGlkIG5leHQgd29yZCBvcHRpb25zOlxcblN3YXAgb25lIGxldHRlciwgZS5nLiBDQVQgdG8gQ09UXFxuRHJvcCBvbmUgbGV0dGVyLCBlLmcuIFNXSUcgdG8gV0lHXFxuSW5zZXJ0IG9uZSBsZXR0ZXIsIGUuZy4gTUFUIHRvIE1BVEgsIG9yIEhJUCB0byBXSElQXFxuQW5hZ3JhbSwgZS5nLiBBQ1QgdG8gQ0FUJyk7fX0+SEVMUDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIFRyYW5zbW9ncmlmeVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD57R2FtZVN0YXJ0U2VjdGlvbn08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAge3B1enpsZSAmJiBwdXp6bGUuc3RhcnRXb3JkICYmIDx0cj48dGQ+e1B1enpsZVNlY3Rpb259PC90ZD48L3RyPn1cclxuICAgICAgICAgICAgICAgICAgICB7cHV6emxlICYmIHB1enpsZS5zdGFydFdvcmQgJiYgPHRyPjx0ZD57U29sdXRpb25TZWN0aW9ufTwvdGQ+PC90cj59XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3B1enpsZSAmJiBwdXp6bGUubm90ZXMgJiYgcHV6emxlLm5vdGVzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJEYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHV6emxlLm5vdGVzLm1hcCgobixpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17YG5vdGUke2l9YH0+e259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJhbnNtb2dyaWZ5OyJdLCJzb3VyY2VSb290IjoiIn0=