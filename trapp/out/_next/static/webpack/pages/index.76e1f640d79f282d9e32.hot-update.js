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
      }, undefined), words.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "tm_undo",
        onClick: () => {
          let newWords = [...words];
          newWords.pop();
          setWords(newWords);
        },
        children: "UNDO"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 38
      }, undefined), words.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "tm_reset",
        onClick: () => {
          setWords([]);
          setNextWord('');
        },
        children: "RESET"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 38
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "tm_help",
        onClick: () => {
          alert(['Valid next word options:', 'Swap one letter, e.g. CAT to COT', 'Drop one letter, e.g. SWIG to WIG', 'Insert one letter, e.g. MAT to MATH, or HIP to WHIP', 'Anagram, e.g. ACT to CAT']);
        },
        children: "HELP"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
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
          lineNumber: 118,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: GameStartSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 21
        }, undefined), puzzle && puzzle.startWord && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: PuzzleSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 56
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 52
        }, undefined), puzzle && puzzle.startWord && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: SolutionSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 56
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 52
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: puzzle && puzzle.notes && puzzle.notes.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "trDanger",
        children: puzzle.notes.map((n, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: n
        }, `note${i}`, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 114,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG0vdG0uanMiXSwibmFtZXMiOlsiVHJhbnNtb2dyaWZ5Iiwic2V0V2hlcmV0byIsIm51bU1vdmVzIiwic2V0TnVtTW92ZXMiLCJ1c2VTdGF0ZSIsImJhc2V1cmwiLCJudW1Nb3Zlc0FycmF5IiwicHV6emxlIiwic2V0UHV6emxlIiwibmV4dFdvcmQiLCJzZXROZXh0V29yZCIsIndvcmRzIiwic2V0V29yZHMiLCJzb2x2ZWQiLCJzZXRTb2x2ZWQiLCJjYWxsRm9yUHV6emxlIiwiZGF0YSIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZXJyb3IiLCJub3RlcyIsImNvbnNvbGUiLCJsb2ciLCJhY2NlcHROZXh0V29yZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByZXZXb3JkIiwibGVuZ3RoIiwic3RhcnRXb3JkIiwibmV3V29yZCIsInRyaW0iLCJ2YWxpZE1vdmUiLCJpc1dvcmRWYWxpZCIsImFsZXJ0IiwibGFzdFdvcmQiLCJ0YXJnZXRXb3JkIiwibmV3V29yZHMiLCJwdXNoIiwiYXJlQW5hZ3JhbXMiLCJjb3VudFN3YXBzIiwiaXNEcm9wIiwiR2FtZVN0YXJ0U2VjdGlvbiIsIm1hcCIsIm4iLCJQdXp6bGVTZWN0aW9uIiwiU29sdXRpb25TZWN0aW9uIiwidyIsImkiLCJ0YXJnZXQiLCJ2YWx1ZSIsImtleUNvZGUiLCJwb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWtCO0FBQUE7O0FBQ25DLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsK0NBQVEsQ0FBQyxDQUFELENBQXhDO0FBQ0EsUUFBTUMsT0FBTyxHQUFJLEtBQUQsR0FBb0UsdUJBQXBFLEdBQThGLENBQTlHO0FBQ0EsUUFBTUMsYUFBYSxHQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFB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Q0FBQ2UsS0FBUCxDQUFhTyxNQUFiLEdBQXNCLENBQWhELGlCQUNEO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUEsa0JBQ0t0QixNQUFNLENBQUNlLEtBQVAsQ0FBYXNCLEdBQWIsQ0FBaUIsQ0FBQ0MsQ0FBRCxFQUFHSSxDQUFILGtCQUNkO0FBQUEsb0JBQXFCSjtBQUFyQixXQUFTLE9BQU1JLENBQUUsRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBMEJILENBdklEOztHQUFNakQsWTs7S0FBQUEsWTtBQXlJTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NmUxZjY0MGQ3OWYyODJkOWUzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY291bnRTd2FwcywgYXJlQW5hZ3JhbXMsIGlzRHJvcCwgaXNXb3JkVmFsaWQgfSBmcm9tICcuLi8uLi9saWIvd29yZGZ1bmN0aW9ucyc7XHJcblxyXG5jb25zdCBUcmFuc21vZ3JpZnkgPSAoe3NldFdoZXJldG99KSA9PiB7XHJcbiAgICBjb25zdCBbbnVtTW92ZXMsIHNldE51bU1vdmVzXSA9IHVzZVN0YXRlKDIpO1xyXG4gICAgY29uc3QgYmFzZXVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCcgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20nO1xyXG4gICAgY29uc3QgbnVtTW92ZXNBcnJheSA9IFsyLDMsNCw1LDYsNyw4LDldO1xyXG4gICAgY29uc3QgW3B1enpsZSwgc2V0UHV6emxlXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtuZXh0V29yZCwgc2V0TmV4dFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3dvcmRzLCBzZXRXb3Jkc10gPSB1c2VTdGF0ZShbXSk7IC8vIFVzZXJzIHdvcmRzXHJcbiAgICBjb25zdCBbc29sdmVkLCBzZXRTb2x2ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2FsbEZvclB1enpsZSA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIGxldCBkYXRhID0ge307XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHVybCA9IGAke2Jhc2V1cmx9L0VOQUJMRTJLP3RyYW5zbW9ncmlmeT10cnVlJm51bU1vdmVzPSR7bnVtTW92ZXN9YDtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgICAgICBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBkYXRhLm5vdGVzID0gW1wiUHJvYmxlbSB3aXRoIHRoZSBzZXJ2ZXIuIFNvcnJ5IGFib3V0IHRoYXQuXCJdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFB1enpsZShkYXRhKTtcclxuICAgICAgICBzZXRXb3JkcyhbXSk7XHJcbiAgICAgICAgc2V0TmV4dFdvcmQoJycpO1xyXG4gICAgICAgIHNldFNvbHZlZChmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhY2NlcHROZXh0V29yZCA9IGFzeW5jKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IHByZXZXb3JkID0gKHdvcmRzLmxlbmd0aCA9PT0gMCA/IHB1enpsZS5zdGFydFdvcmQgOiB3b3Jkc1t3b3Jkcy5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgbGV0IG5ld1dvcmQgPSBuZXh0V29yZC50cmltKCk7XHJcbiAgICAgICAgaWYgKHZhbGlkTW92ZShuZXdXb3JkLCBwcmV2V29yZCkpIHtcclxuICAgICAgICAgICAgaWYgKCFhd2FpdCBpc1dvcmRWYWxpZChuZXdXb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYCR7bmV3V29yZH0gaXMgbm90IGEgdmFsaWQgd29yZGApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxhc3RXb3JkID0gcHV6emxlLnRhcmdldFdvcmQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3V29yZHMgPSBbLi4ud29yZHNdO1xyXG4gICAgICAgICAgICAgICAgbmV3V29yZHMucHVzaChuZXdXb3JkKTtcclxuICAgICAgICAgICAgICAgIHNldFdvcmRzKG5ld1dvcmRzKTtcclxuICAgICAgICAgICAgICAgIHNldE5leHRXb3JkKCcnKTsgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRNb3ZlKG5ld1dvcmQsIGxhc3RXb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNvbHZlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdPbmx5IGFuYWdyYW1zLCBkcm9wcywgc3dhcHMgYW5kIGluc2VydHMgYWxsb3dlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB2YWxpZE1vdmUgPSAocHJldldvcmQ9XCJcIiwgbmV3V29yZD1cIlwiKSA9PiB7XHJcbiAgICAgICAgaWYgKHByZXZXb3JkID09PSBuZXdXb3JkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChhcmVBbmFncmFtcyhwcmV2V29yZCwgbmV3V29yZClcclxuICAgICAgICAgICAgfHwgY291bnRTd2FwcyhwcmV2V29yZCwgbmV3V29yZCkgPT09IDFcclxuICAgICAgICAgICAgfHwgaXNEcm9wKHByZXZXb3JkLCBuZXdXb3JkKVxyXG4gICAgICAgICAgICB8fCBpc0Ryb3AobmV3V29yZCwgcHJldldvcmQpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IEdhbWVTdGFydFNlY3Rpb24gPSA8ZGl2IGNsYXNzTmFtZT1cInRtX251bU1vdmVzRGl2XCI+XHJcbiAgICAgICAgPGgzPk51bWJlciBPZiBNb3ZlczwvaDM+XHJcbiAgICAgICAge251bU1vdmVzQXJyYXkubWFwKChuKSA9PiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgdG1fJHtuID09PSBudW1Nb3ZlcyA/ICdudW1Nb3Zlc1NlbGVjdGVkJyA6ICdudW1Nb3Zlc1Vuc2VsZWN0ZWQnfWB9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2BjaG9vc2VOdW1Nb3ZlcyR7bn1gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXROdW1Nb3ZlcyhuKTsgfSB9XHJcbiAgICAgICAgICAgID57bn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bV9zdGFydFB1enpsZURpdlwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cInN0YXJ0UHV6emxlXCIgY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7IGNhbGxGb3JQdXp6bGUoKTsgfSB9PlxyXG4gICAgICAgICAgICAgICAgU3RhcnQgUHV6emxlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgUHV6emxlU2VjdGlvbiA9IDxkaXYgY2xhc3NOYW1lPVwidG1fcHV6emxlRGl2XCI+XHJcbiAgICAgICAgPHNwYW4+e3B1enpsZS5zdGFydFdvcmR9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPnRvPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPntwdXp6bGUudGFyZ2V0V29yZH08L3NwYW4+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8c3Bhbj5UYXJnZXQ6PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPntwdXp6bGUubnVtTW92ZXN9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPm1vdmVzPC9zcGFuPlxyXG4gICAgPC9kaXY+O1xyXG4gICAgY29uc3QgU29sdXRpb25TZWN0aW9uID0gPGRpdiBjbGFzc05hbWU9XCJ0bV9zb2x1dGlvbk91dGVyRGl2XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bV9zb2x1dGlvbkRpdlwiPlxyXG4gICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD57cHV6emxlLnN0YXJ0V29yZH08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAge3dvcmRzLm1hcCgodyxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2B1c2VyV29yZCR7aX1gfT48dGQ+e3d9PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIHshc29sdmVkICYmIDx0cj48dGQ+Li4uPC90ZD48L3RyPn1cclxuICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPntwdXp6bGUudGFyZ2V0V29yZH08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtzb2x2ZWQgP1xyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0bV9jb25ncmF0c1wiPvCfkY/wn4+9IFNvbHZlZCBpbiB7d29yZHMubGVuZ3RoICsgMX0gbW92ZXMg8J+Rj/Cfj708L3A+XHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgTmV4dCBXb3JkOlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17bmV4dFdvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3NldE5leHRXb3JkKGUudGFyZ2V0LnZhbHVlKTt9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXsoZSkgPT4ge2Uua2V5Q29kZSA9PT0gMTMgJiYgYWNjZXB0TmV4dFdvcmQ7fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17YWNjZXB0TmV4dFdvcmR9PkdPPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICB7d29yZHMubGVuZ3RoID4gMCAmJiA8YnV0dG9uIGNsYXNzTmFtZT1cInRtX3VuZG9cIiBvbkNsaWNrPXsoKSA9PiB7bGV0IG5ld1dvcmRzID0gWy4uLndvcmRzXTsgbmV3V29yZHMucG9wKCk7IHNldFdvcmRzKG5ld1dvcmRzKTt9fT5VTkRPPC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAge3dvcmRzLmxlbmd0aCA+IDAgJiYgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0bV9yZXNldFwiIG9uQ2xpY2s9eygpID0+IHtzZXRXb3JkcyhbXSk7IHNldE5leHRXb3JkKCcnKTt9fT5SRVNFVDwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidG1faGVscFwiIG9uQ2xpY2s9eygpID0+IHthbGVydChbJ1ZhbGlkIG5leHQgd29yZCBvcHRpb25zOicsJ1N3YXAgb25lIGxldHRlciwgZS5nLiBDQVQgdG8gQ09UJywnRHJvcCBvbmUgbGV0dGVyLCBlLmcuIFNXSUcgdG8gV0lHJywgJ0luc2VydCBvbmUgbGV0dGVyLCBlLmcuIE1BVCB0byBNQVRILCBvciBISVAgdG8gV0hJUCcsICdBbmFncmFtLCBlLmcuIEFDVCB0byBDQVQnXSk7fX0+SEVMUDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBUcmFuc21vZ3JpZnlcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+e0dhbWVTdGFydFNlY3Rpb259PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwdXp6bGUgJiYgcHV6emxlLnN0YXJ0V29yZCAmJiA8dHI+PHRkPntQdXp6bGVTZWN0aW9ufTwvdGQ+PC90cj59XHJcbiAgICAgICAgICAgICAgICAgICAge3B1enpsZSAmJiBwdXp6bGUuc3RhcnRXb3JkICYmIDx0cj48dGQ+e1NvbHV0aW9uU2VjdGlvbn08L3RkPjwvdHI+fVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtwdXp6bGUgJiYgcHV6emxlLm5vdGVzICYmIHB1enpsZS5ub3Rlcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyRGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3B1enpsZS5ub3Rlcy5tYXAoKG4saSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2Bub3RlJHtpfWB9PntufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYW5zbW9ncmlmeTsiXSwic291cmNlUm9vdCI6IiJ9