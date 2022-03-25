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

  const lenAllowedArray = [2, 3, 4, 5, 6, 7, 8, 9];
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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        className: "AlignCenter",
        "data-toggle": "tooltip",
        title: "Set clipboard feature to capture the guesses for just the round, just the set, or all sets.",
        children: "Clipboard Capture"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: cliprule === 'round' ? 'trRadio On' : 'trRadio',
        onClick: () => {
          setCliprule('round');
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: "Round"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: cliprule === 'set' ? 'trRadio On' : 'trRadio',
        onClick: () => {
          setCliprule('set');
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: "Set"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: cliprule === 'all' ? 'trRadio On' : 'trRadio',
        onClick: () => {
          setCliprule('all');
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "trOptionsRadioLabel",
        children: "All"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        className: "AlignCenter",
        children: "Emoji Theme"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: theme === 0 ? 'trRadio On' : 'trRadio',
        onClick: () => {
          setTheme(0);
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: [themes[0].c, themes[0].i, themes[0].w]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: theme === 1 ? 'trRadio On' : 'trRadio',
        onClick: () => {
          setTheme(1);
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: [themes[1].c, themes[1].i, themes[1].w]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: theme === 2 ? 'trRadio On' : 'trRadio',
        onClick: () => {
          setTheme(2);
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: [themes[2].c, themes[2].i, themes[2].w]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "wm_lenDiv",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Start Length"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }, undefined), lenAllowedArray.map(n => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: n === lenMin ? 'wm_lenSelected' : 'wm_lenUnselected',
        onClick: () => {
          setLenMin(n);
        },
        children: n
      }, `chooseLenMin${n}`, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "End Length"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }, undefined), lenAllowedArray.map(n => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: n === lenMax ? 'wm_lenSelected' : 'wm_lenUnselected',
        onClick: () => {
          setLenMax(n);
        },
        children: n
      }, `chooseLenMax${n}`, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
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
        lineNumber: 86,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vd21vcHRpb25zLmpzIl0sIm5hbWVzIjpbIkdldFdNT3B0aW9ucyIsInNldEdhbWVPcHRpb25zIiwibGVuQWxsb3dlZEFycmF5IiwibW9kZSIsInNldE1vZGUiLCJ1c2VTdGF0ZSIsImxlbk1pbiIsInNldExlbk1pbiIsImxlbk1heCIsInNldExlbk1heCIsInNob3dIZWFkZXIiLCJzZXRTaG93SGVhZGVyIiwiY2xpcHJ1bGUiLCJzZXRDbGlwcnVsZSIsInZhbGlkT25seSIsInNldFZhbGlkT25seSIsInRoZW1lIiwic2V0VGhlbWUiLCJ0aGVtZXMiLCJjIiwiaSIsInciLCJoYW5kbGVTdGFydFB1enpsZSIsIm5ld0dhbWVPcHRpb25zIiwic2V0IiwiY2l3IiwibWFwIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBc0I7QUFBQTs7QUFDdkMsUUFBTUMsZUFBZSxHQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsTUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkYsK0NBQVEsQ0FBQyxDQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCSiwrQ0FBUSxDQUFDLENBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJOLCtDQUFRLENBQUMsSUFBRCxDQUE1QyxDQUx1QyxDQUthOztBQUNwRCxRQUFNO0FBQUEsT0FBQ08sUUFBRDtB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QUUsRUFEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESCxDQUZMLGVBU0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEosRUFVS3pCLGVBQWUsQ0FBQ3dCLEdBQWhCLENBQXFCQyxDQUFELGlCQUNqQjtBQUFRLGlCQUFTLEVBQUVBLENBQUMsS0FBS25CLE1BQU4sR0FBZSxnQkFBZixHQUFrQyxrQkFBckQ7QUFFSSxlQUFPLEVBQUUsTUFBTTtBQUFFQyxtQkFBUyxDQUFDa0IsQ0FBRCxDQUFUO0FBQWUsU0FGcEM7QUFBQSxrQkFHRUE7QUFIRixTQUNVLGVBQWNBLENBQUUsRUFEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESCxDQVZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2Q0ssZUF5REw7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQSw2QkFDSTtBQUEwQixpQkFBUyxFQUFDLFVBQXBDO0FBQStDLGVBQU8sRUFBRSxNQUFNO0FBQUVMLDJCQUFpQjtBQUFLLFNBQXRGO0FBQUE7QUFBQSxTQUFZLGFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekRLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFUO0FBK0RILENBeEZEOztHQUFNdEIsWTs7S0FBQUEsWTtBQTBGTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yMzEwMzk4NzU4ZjIwZmRhMTY2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBHZXRXTU9wdGlvbnMgPSAoe3NldEdhbWVPcHRpb25zfSkgPT4ge1xyXG4gICAgY29uc3QgbGVuQWxsb3dlZEFycmF5ID0gWzIsMyw0LDUsNiw3LDgsOV07XHJcbiAgICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZSgnZWFzeScpO1xyXG4gICAgY29uc3QgW2xlbk1pbiwgc2V0TGVuTWluXSA9IHVzZVN0YXRlKDUpO1xyXG4gICAgY29uc3QgW2xlbk1heCwgc2V0TGVuTWF4XSA9IHVzZVN0YXRlKDgpO1xyXG4gICAgY29uc3QgW3Nob3dIZWFkZXIsIHNldFNob3dIZWFkZXJdID0gdXNlU3RhdGUodHJ1ZSk7IC8vIHdoZXRoZXIgdG8gc2hvdyBcIldvcmQgTWFzdGVybWluXCIgYW5kIGxpbmsgaW4gY2xpcGJvYXJkIGNhcHR1cmVcclxuICAgIGNvbnN0IFtjbGlwcnVsZSwgc2V0Q2xpcHJ1bGVdID0gdXNlU3RhdGUoJ3JvdW5kJyk7XHJcbiAgICBjb25zdCBbdmFsaWRPbmx5LCBzZXRWYWxpZE9ubHldID0gdXNlU3RhdGUodHJ1ZSk7IC8vIHdoZXRoZXIgZ3Vlc3NlcyBtdXN0IGJlIHZhbGlkIHdvcmRzXHJcbiAgICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKDIpOyAvLyBBcnJheSBpbmRleCBmb3IgdGhlbWVzXHJcbiAgICBjb25zdCB0aGVtZXMgPSBbXHJcbiAgICAgICAge2M6XCLwn5iOXCIsaTpcIvCfpKhcIix3Olwi8J+YklwifSxcclxuICAgICAgICB7YzpcIvCfn6lcIixpOlwi8J+fqFwiLHc6XCLirJxcIn0sXHJcbiAgICAgICAge2M6XCLinIVcIixpOlwi8J+UgVwiLHc6XCLinYxcIn1cclxuICAgIF07XHJcbiAgICBjb25zdCBoYW5kbGVTdGFydFB1enpsZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgbmV3R2FtZU9wdGlvbnMgPSB7c2V0OiB0cnVlLCBtb2RlOiBtb2RlLCB2YWxpZE9ubHk6IHZhbGlkT25seSwgY2xpcHJ1bGU6IGNsaXBydWxlLCBjaXc6IHRoZW1lc1t0aGVtZV19O1xyXG4gICAgICAgIGlmIChsZW5NaW4gPiBsZW5NYXgpIHtcclxuICAgICAgICAgICAgbmV3R2FtZU9wdGlvbnMubGVuTWF4ID0gbGVuTWluO1xyXG4gICAgICAgICAgICBuZXdHYW1lT3B0aW9ucy5sZW5NaW4gPSBsZW5NYXg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3R2FtZU9wdGlvbnMubGVuTWluID0gbGVuTWluO1xyXG4gICAgICAgICAgICBuZXdHYW1lT3B0aW9ucy5sZW5NYXggPSBsZW5NYXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEdhbWVPcHRpb25zKG5ld0dhbWVPcHRpb25zKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoIDxkaXYgY2xhc3NOYW1lPVwidHJPcHRpb25zRGl2XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3ZhbGlkT25seSA/IFwidHJDaGVja2JveCBPblwiIDogXCJ0ckNoZWNrYm94XCJ9XHJcbiAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIldoZXRoZXIgZ3Vlc3MgbXVzdCBiZSB2YWxpZCB3b3Jkc1wiXHJcbiAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0VmFsaWRPbmx5KCF2YWxpZE9ubHkpO319XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8bGFiZWw+R3Vlc3NlcyBtdXN0IGJlIHZhbGlkIHdvcmRzPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bW9kZSA9PT0gJ2Vhc3knID8gXCJ0ckNoZWNrYm94IE9uXCIgOiBcInRyQ2hlY2tib3hcIn1cclxuICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiQ29sb3IgY29kaW5nIHNob3dzIHdoaWNoIGxldHRlcnMgYXJlIGNvcnJlY3Qgb3IgaW4gdGhlIHdyb25nIHBsYWNlLiBPdGhlcndpc2Ugc2hvdyBjb3VudHMgb25seS5cIlxyXG4gICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldE1vZGUobW9kZSA9PT0gJ2Vhc3knID8gJ2hhcmQnIDogJ2Vhc3knKTt9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGxhYmVsPkNvbG9yIGNvZGUgdGhlIGd1ZXNzIGxldHRlcnM8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzaG93SGVhZGVyID8gXCJ0ckNoZWNrYm94IE9uXCIgOiBcInRyQ2hlY2tib3hcIn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFNob3dIZWFkZXIoIXNob3dIZWFkZXIpO319XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8bGFiZWw+VGl0bGUgYW5kIGxpbmsgaW4gY2xpcGJvYXJkPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiQWxpZ25DZW50ZXJcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlNldCBjbGlwYm9hcmQgZmVhdHVyZSB0byBjYXB0dXJlIHRoZSBndWVzc2VzIGZvciBqdXN0IHRoZSByb3VuZCwganVzdCB0aGUgc2V0LCBvciBhbGwgc2V0cy5cIj5DbGlwYm9hcmQgQ2FwdHVyZTwvaDQ+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xpcHJ1bGUgPT09ICdyb3VuZCcgPyAndHJSYWRpbyBPbicgOiAndHJSYWRpbyd9IG9uQ2xpY2s9eygpID0+IHtzZXRDbGlwcnVsZSgncm91bmQnKTt9fT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Sb3VuZDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGlwcnVsZSA9PT0gJ3NldCcgPyAndHJSYWRpbyBPbicgOiAndHJSYWRpbyd9IG9uQ2xpY2s9eygpID0+IHtzZXRDbGlwcnVsZSgnc2V0Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+U2V0PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xpcHJ1bGUgPT09ICdhbGwnID8gJ3RyUmFkaW8gT24nIDogJ3RyUmFkaW8nfSBvbkNsaWNrPXsoKSA9PiB7c2V0Q2xpcHJ1bGUoJ2FsbCcpO319Lz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJPcHRpb25zUmFkaW9MYWJlbFwiPkFsbDwvc3Bhbj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCI+RW1vamkgVGhlbWU8L2g0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhlbWUgPT09IDAgPyAndHJSYWRpbyBPbicgOiAndHJSYWRpbyd9IG9uQ2xpY2s9eygpID0+IHtzZXRUaGVtZSgwKTt9fT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD57dGhlbWVzWzBdLmN9e3RoZW1lc1swXS5pfXt0aGVtZXNbMF0ud308L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoZW1lID09PSAxID8gJ3RyUmFkaW8gT24nIDogJ3RyUmFkaW8nfSBvbkNsaWNrPXsoKSA9PiB7c2V0VGhlbWUoMSk7fX0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+e3RoZW1lc1sxXS5jfXt0aGVtZXNbMV0uaX17dGhlbWVzWzFdLnd9PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGVtZSA9PT0gMiA/ICd0clJhZGlvIE9uJyA6ICd0clJhZGlvJ30gb25DbGljaz17KCkgPT4ge3NldFRoZW1lKDIpO319PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPnt0aGVtZXNbMl0uY317dGhlbWVzWzJdLml9e3RoZW1lc1syXS53fTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid21fbGVuRGl2XCI+XHJcbiAgICAgICAgICAgIDxoMz5TdGFydCBMZW5ndGg8L2gzPlxyXG4gICAgICAgICAgICB7bGVuQWxsb3dlZEFycmF5Lm1hcCgobikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e24gPT09IGxlbk1pbiA/ICd3bV9sZW5TZWxlY3RlZCcgOiAnd21fbGVuVW5zZWxlY3RlZCd9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtgY2hvb3NlTGVuTWluJHtufWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRMZW5NaW4obik7IH0gfVxyXG4gICAgICAgICAgICAgICAgPntufVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8aDM+RW5kIExlbmd0aDwvaDM+XHJcbiAgICAgICAgICAgIHtsZW5BbGxvd2VkQXJyYXkubWFwKChuKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17biA9PT0gbGVuTWF4ID8gJ3dtX2xlblNlbGVjdGVkJyA6ICd3bV9sZW5VbnNlbGVjdGVkJ31cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2BjaG9vc2VMZW5NYXgke259YH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldExlbk1heChuKTsgfSB9XHJcbiAgICAgICAgICAgICAgICA+e259XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3bV9zdGFydFB1enpsZURpdlwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cInN0YXJ0UHV6emxlXCIgY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZVN0YXJ0UHV6emxlKCk7IH0gfT5cclxuICAgICAgICAgICAgICAgIFN0YXJ0IFB1enpsZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2Pik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdldFdNT3B0aW9uczsiXSwic291cmNlUm9vdCI6IiJ9