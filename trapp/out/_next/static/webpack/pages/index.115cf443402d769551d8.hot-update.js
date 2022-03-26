self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/wm/wmoptions.js":
/*!*******************************!*\
  !*** ./pages/wm/wmoptions.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\wm\\wmoptions.js",
    _s = $RefreshSig$();



const GetWMOptions = ({
  setGameOptions
}) => {
  _s();

  const lenAllowedArray = [3, 4, 5, 6, 7, 8, 9];
  const {
    0: mode,
    1: setMode
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('easy');
  const {
    0: lenMin,
    1: setLenMin
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);
  const {
    0: lenMax,
    1: setLenMax
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(8);
  const {
    0: showHeader,
    1: setShowHeader
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // whether to show "Word Mastermin" and link in clipboard capture

  const {
    0: cliprule,
    1: setCliprule
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('round');
  const {
    0: validOnly,
    1: setValidOnly
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // whether guesses must be valid words

  const {
    0: theme,
    1: setTheme
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2); // Array index for themes

  const themes = [{
    c: "😎",
    i: "🤨",
    w: "😒"
  }, {
    c: "🟩",
    i: "🟨",
    w: "⬜"
  }, {
    c: "✅",
    i: "🔁",
    w: "❌"
  }];

  const handleStartPuzzle = () => {
    let newGameOptions = {
      set: true,
      mode: mode,
      validOnly: validOnly,
      cliprule: cliprule,
      ciw: themes[theme]
    };

    if (lenMin > lenMax) {
      newGameOptions.lenMax = lenMin;
      newGameOptions.lenMin = lenMax;
    } else {
      newGameOptions.lenMin = lenMin;
      newGameOptions.lenMax = lenMax;
    }

    setGameOptions(newGameOptions);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trOptionsDiv",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: validOnly ? "trCheckbox On" : "trCheckbox",
      "data-toggle": "tooltip",
      title: "Whether guess must be valid words",
      onClick: () => {
        setValidOnly(!validOnly);
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Guesses must be valid words"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: mode === 'easy' ? "trCheckbox On" : "trCheckbox",
      "data-toggle": "tooltip",
      title: "Color coding shows which letters are correct or in the wrong place. Otherwise show counts only.",
      onClick: () => {
        setMode(mode === 'easy' ? 'hard' : 'easy');
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Color code the guess letters"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: showHeader ? "trCheckbox On" : "trCheckbox",
      onClick: () => {
        setShowHeader(!showHeader);
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Title and link in clipboard"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "wm_cliptable",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                className: "AlignCenter",
                children: ["Capture", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  onClick: () => alert("Set clipboard feature to capture the guesses for just the round, just the set, or all sets."),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "material-icons trInfoIcon",
                    children: "info"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 37
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 33
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 25
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                className: "AlignCenter",
                children: "Emoji Theme"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: cliprule === 'round' ? 'trRadio On' : 'trRadio',
                onClick: () => {
                  setCliprule('round');
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  children: "Round"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 33
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 25
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: theme === 0 ? 'trRadio On' : 'trRadio',
                onClick: () => {
                  setTheme(0);
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  children: [themes[0].c, themes[0].i, themes[0].w]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 33
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: cliprule === 'set' ? 'trRadio On' : 'trRadio',
                onClick: () => {
                  setCliprule('set');
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  children: "Set"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 33
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 25
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: theme === 1 ? 'trRadio On' : 'trRadio',
                onClick: () => {
                  setTheme(1);
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  children: [themes[1].c, themes[1].i, themes[1].w]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 33
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: cliprule === 'all' ? 'trRadio On' : 'trRadio',
                onClick: () => {
                  setCliprule('all');
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  children: "All"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 33
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 25
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: theme === 2 ? 'trRadio On' : 'trRadio',
                onClick: () => {
                  setTheme(2);
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  children: [themes[2].c, themes[2].i, themes[2].w]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 33
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "wm_lenDiv",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: "Start Length"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 13
      }, undefined), lenAllowedArray.map(n => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: n === lenMin ? 'wm_lenSelected' : 'wm_lenUnselected',
        onClick: () => {
          setLenMin(n);
        },
        children: n
      }, `chooseLenMin${n}`, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: "End Length"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }, undefined), lenAllowedArray.map(n => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: n === lenMax ? 'wm_lenSelected' : 'wm_lenUnselected',
        onClick: () => {
          setLenMax(n);
        },
        children: n
      }, `chooseLenMax${n}`, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "wm_startPuzzleDiv",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          handleStartPuzzle();
        },
        children: "Start Puzzle"
      }, "startPuzzle", false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 14
  }, undefined);
};

_s(GetWMOptions, "8L/bcpXiZUwEagJ6CpAha01blUY=");

_c = GetWMOptions;
/* harmony default export */ __webpack_exports__["default"] = (GetWMOptions);

var _c;

$RefreshReg$(_c, "GetWMOptions");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vd21vcHRpb25zLmpzIl0sIm5hbWVzIjpbIkdldFdNT3B0aW9ucyIsInNldEdhbWVPcHRpb25zIiwibGVuQWxsb3dlZEFycmF5IiwibW9kZSIsInNldE1vZGUiLCJ1c2VTdGF0ZSIsImxlbk1pbiIsInNldExlbk1pbiIsImxlbk1heCIsInNldExlbk1heCIsInNob3dIZWFkZXIiLCJzZXRTaG93SGVhZGVyIiwiY2xpcHJ1bGUiLCJzZXRDbGlwcnVsZSIsInZhbGlkT25seSIsInNldFZhbGlkT25seSIsInRoZW1lIiwic2V0VGhlbWUiLCJ0aGVtZXMiLCJjIiwiaSIsInciLCJoYW5kbGVTdGFydFB1enpsZSIsIm5ld0dhbWVPcHRpb25zIiwic2V0IiwiY2l3IiwiYWxlcnQiLCJtYXAiLCJuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFlBQVksR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFzQjtBQUFBOztBQUN2QyxRQUFNQyxlQUFlLEdBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLENBQXhCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQywrQ0FBUSxDQUFDLE1BQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JGLCtDQUFRLENBQUMsQ0FBRCxDQUFwQztBQUNBLFFBQU07QUFBQSxPQUFDRyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkosK0NBQVEsQ0FBQyxDQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCTiwrQ0FBUSxDQUFDLElBQUQsQ0FBNUMsQ0FMdUMsQ0FLYTs7QUFDcEQsUUFBTTtBQUFBLE9BQUNPLFFBQUQ7QUFB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QVMsQ0FBQ21CLENBQUQsQ0FBVDtBQUFlLFNBRnBDO0FBQUEsa0JBR0VBO0FBSEYsU0FDVSxlQUFjQSxDQUFFLEVBRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREgsQ0FWTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0VLLGVBNkZMO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsNkJBQ0k7QUFBMEIsaUJBQVMsRUFBQyxVQUFwQztBQUErQyxlQUFPLEVBQUUsTUFBTTtBQUFFTiwyQkFBaUI7QUFBSyxTQUF0RjtBQUFBO0FBQUEsU0FBWSxhQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdGSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVDtBQW1HSCxDQTVIRDs7R0FBTXRCLFk7O0tBQUFBLFk7QUE4SE4sK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTE1Y2Y0NDM0MDJkNzY5NTUxZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgR2V0V01PcHRpb25zID0gKHtzZXRHYW1lT3B0aW9uc30pID0+IHtcclxuICAgIGNvbnN0IGxlbkFsbG93ZWRBcnJheSA9IFszLDQsNSw2LDcsOCw5XTtcclxuICAgIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKCdlYXN5Jyk7XHJcbiAgICBjb25zdCBbbGVuTWluLCBzZXRMZW5NaW5dID0gdXNlU3RhdGUoNSk7XHJcbiAgICBjb25zdCBbbGVuTWF4LCBzZXRMZW5NYXhdID0gdXNlU3RhdGUoOCk7XHJcbiAgICBjb25zdCBbc2hvd0hlYWRlciwgc2V0U2hvd0hlYWRlcl0gPSB1c2VTdGF0ZSh0cnVlKTsgLy8gd2hldGhlciB0byBzaG93IFwiV29yZCBNYXN0ZXJtaW5cIiBhbmQgbGluayBpbiBjbGlwYm9hcmQgY2FwdHVyZVxyXG4gICAgY29uc3QgW2NsaXBydWxlLCBzZXRDbGlwcnVsZV0gPSB1c2VTdGF0ZSgncm91bmQnKTtcclxuICAgIGNvbnN0IFt2YWxpZE9ubHksIHNldFZhbGlkT25seV0gPSB1c2VTdGF0ZSh0cnVlKTsgLy8gd2hldGhlciBndWVzc2VzIG11c3QgYmUgdmFsaWQgd29yZHNcclxuICAgIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoMik7IC8vIEFycmF5IGluZGV4IGZvciB0aGVtZXNcclxuICAgIGNvbnN0IHRoZW1lcyA9IFtcclxuICAgICAgICB7YzpcIvCfmI5cIixpOlwi8J+kqFwiLHc6XCLwn5iSXCJ9LFxyXG4gICAgICAgIHtjOlwi8J+fqVwiLGk6XCLwn5+oXCIsdzpcIuKsnFwifSxcclxuICAgICAgICB7YzpcIuKchVwiLGk6XCLwn5SBXCIsdzpcIuKdjFwifVxyXG4gICAgXTtcclxuICAgIGNvbnN0IGhhbmRsZVN0YXJ0UHV6emxlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBuZXdHYW1lT3B0aW9ucyA9IHtzZXQ6IHRydWUsIG1vZGU6IG1vZGUsIHZhbGlkT25seTogdmFsaWRPbmx5LCBjbGlwcnVsZTogY2xpcHJ1bGUsIGNpdzogdGhlbWVzW3RoZW1lXX07XHJcbiAgICAgICAgaWYgKGxlbk1pbiA+IGxlbk1heCkge1xyXG4gICAgICAgICAgICBuZXdHYW1lT3B0aW9ucy5sZW5NYXggPSBsZW5NaW47XHJcbiAgICAgICAgICAgIG5ld0dhbWVPcHRpb25zLmxlbk1pbiA9IGxlbk1heDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdHYW1lT3B0aW9ucy5sZW5NaW4gPSBsZW5NaW47XHJcbiAgICAgICAgICAgIG5ld0dhbWVPcHRpb25zLmxlbk1heCA9IGxlbk1heDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0R2FtZU9wdGlvbnMobmV3R2FtZU9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICggPGRpdiBjbGFzc05hbWU9XCJ0ck9wdGlvbnNEaXZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dmFsaWRPbmx5ID8gXCJ0ckNoZWNrYm94IE9uXCIgOiBcInRyQ2hlY2tib3hcIn1cclxuICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiV2hldGhlciBndWVzcyBtdXN0IGJlIHZhbGlkIHdvcmRzXCJcclxuICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRWYWxpZE9ubHkoIXZhbGlkT25seSk7fX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxsYWJlbD5HdWVzc2VzIG11c3QgYmUgdmFsaWQgd29yZHM8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttb2RlID09PSAnZWFzeScgPyBcInRyQ2hlY2tib3ggT25cIiA6IFwidHJDaGVja2JveFwifVxyXG4gICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJDb2xvciBjb2Rpbmcgc2hvd3Mgd2hpY2ggbGV0dGVycyBhcmUgY29ycmVjdCBvciBpbiB0aGUgd3JvbmcgcGxhY2UuIE90aGVyd2lzZSBzaG93IGNvdW50cyBvbmx5LlwiXHJcbiAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0TW9kZShtb2RlID09PSAnZWFzeScgPyAnaGFyZCcgOiAnZWFzeScpO319XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8bGFiZWw+Q29sb3IgY29kZSB0aGUgZ3Vlc3MgbGV0dGVyczwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Nob3dIZWFkZXIgPyBcInRyQ2hlY2tib3ggT25cIiA6IFwidHJDaGVja2JveFwifVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd0hlYWRlcighc2hvd0hlYWRlcik7fX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxsYWJlbD5UaXRsZSBhbmQgbGluayBpbiBjbGlwYm9hcmQ8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid21fY2xpcHRhYmxlXCI+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJBbGlnbkNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhcHR1cmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBhbGVydChcIlNldCBjbGlwYm9hcmQgZmVhdHVyZSB0byBjYXB0dXJlIHRoZSBndWVzc2VzIGZvciBqdXN0IHRoZSByb3VuZCwganVzdCB0aGUgc2V0LCBvciBhbGwgc2V0cy5cIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyB0ckluZm9JY29uXCI+aW5mbzwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiQWxpZ25DZW50ZXJcIj5FbW9qaSBUaGVtZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsaXBydWxlID09PSAncm91bmQnID8gJ3RyUmFkaW8gT24nIDogJ3RyUmFkaW8nfSBvbkNsaWNrPXsoKSA9PiB7c2V0Q2xpcHJ1bGUoJ3JvdW5kJyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlJvdW5kPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoZW1lID09PSAwID8gJ3RyUmFkaW8gT24nIDogJ3RyUmFkaW8nfSBvbkNsaWNrPXsoKSA9PiB7c2V0VGhlbWUoMCk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt0aGVtZXNbMF0uY317dGhlbWVzWzBdLml9e3RoZW1lc1swXS53fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGlwcnVsZSA9PT0gJ3NldCcgPyAndHJSYWRpbyBPbicgOiAndHJSYWRpbyd9IG9uQ2xpY2s9eygpID0+IHtzZXRDbGlwcnVsZSgnc2V0Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNldDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGVtZSA9PT0gMSA/ICd0clJhZGlvIE9uJyA6ICd0clJhZGlvJ30gb25DbGljaz17KCkgPT4ge3NldFRoZW1lKDEpO319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57dGhlbWVzWzFdLmN9e3RoZW1lc1sxXS5pfXt0aGVtZXNbMV0ud308L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xpcHJ1bGUgPT09ICdhbGwnID8gJ3RyUmFkaW8gT24nIDogJ3RyUmFkaW8nfSBvbkNsaWNrPXsoKSA9PiB7c2V0Q2xpcHJ1bGUoJ2FsbCcpO319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BbGw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhlbWUgPT09IDIgPyAndHJSYWRpbyBPbicgOiAndHJSYWRpbyd9IG9uQ2xpY2s9eygpID0+IHtzZXRUaGVtZSgyKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3RoZW1lc1syXS5jfXt0aGVtZXNbMl0uaX17dGhlbWVzWzJdLnd9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid21fbGVuRGl2XCI+XHJcbiAgICAgICAgICAgIDxoND5TdGFydCBMZW5ndGg8L2g0PlxyXG4gICAgICAgICAgICB7bGVuQWxsb3dlZEFycmF5Lm1hcCgobikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e24gPT09IGxlbk1pbiA/ICd3bV9sZW5TZWxlY3RlZCcgOiAnd21fbGVuVW5zZWxlY3RlZCd9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtgY2hvb3NlTGVuTWluJHtufWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRMZW5NaW4obik7IH0gfVxyXG4gICAgICAgICAgICAgICAgPntufVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8aDQ+RW5kIExlbmd0aDwvaDQ+XHJcbiAgICAgICAgICAgIHtsZW5BbGxvd2VkQXJyYXkubWFwKChuKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17biA9PT0gbGVuTWF4ID8gJ3dtX2xlblNlbGVjdGVkJyA6ICd3bV9sZW5VbnNlbGVjdGVkJ31cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2BjaG9vc2VMZW5NYXgke259YH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldExlbk1heChuKTsgfSB9XHJcbiAgICAgICAgICAgICAgICA+e259XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3bV9zdGFydFB1enpsZURpdlwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cInN0YXJ0UHV6emxlXCIgY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZVN0YXJ0UHV6emxlKCk7IH0gfT5cclxuICAgICAgICAgICAgICAgIFN0YXJ0IFB1enpsZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2Pik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdldFdNT3B0aW9uczsiXSwic291cmNlUm9vdCI6IiJ9