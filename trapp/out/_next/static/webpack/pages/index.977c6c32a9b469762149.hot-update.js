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
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // Array index for themes

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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        className: "AlignCenter",
        "data-toggle": "tooltip",
        title: "Set clipboard feature to capture the guesses for just the round, just the set, or all sets.",
        children: "Clipboard Capture"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: showHeader ? "trCheckbox On" : "trCheckbox",
        onClick: () => {
          setShowHeader(!showHeader);
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: "Show title and site link"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: cliprule === 'round' ? 'trOptionsRadioOn' : 'trOptionsRadioOff',
        onClick: () => {
          setCliprule('round');
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "trOptionsRadioLabel",
        children: "Round"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: cliprule === 'set' ? 'trOptionsRadioOn' : 'trOptionsRadioOff',
        onClick: () => {
          setCliprule('set');
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "trOptionsRadioLabel",
        children: "Set"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: cliprule === 'all' ? 'trOptionsRadioOn' : 'trOptionsRadioOff',
        onClick: () => {
          setCliprule('all');
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "trOptionsRadioLabel",
        children: "All"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        className: "AlignCenter",
        children: "Emoji Theme"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: theme === 0 ? 'trOptionsRadioOn' : 'trOptionsRadioOff',
        onClick: () => {
          setTheme(0);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "trOptionsRadioLabel",
        children: [themes[0].c, themes[0].i, themes[0].w]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: theme === 1 ? 'trOptionsRadioOn' : 'trOptionsRadioOff',
        onClick: () => {
          setTheme(1);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "trOptionsRadioLabel",
        children: [themes[1].c, themes[1].i, themes[1].w]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: theme === 2 ? 'trOptionsRadioOn' : 'trOptionsRadioOff',
        onClick: () => {
          setTheme(2);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "trOptionsRadioLabel",
        children: [themes[2].c, themes[2].i, themes[2].w]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "wm_lenDiv",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Start Length"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }, undefined), lenAllowedArray.map(n => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: n === lenMin ? 'wm_lenSelected' : 'wm_lenUnselected',
        onClick: () => {
          setLenMin(n);
        },
        children: n
      }, `chooseLenMin${n}`, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "End Length"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }, undefined), lenAllowedArray.map(n => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: n === lenMax ? 'wm_lenSelected' : 'wm_lenUnselected',
        onClick: () => {
          setLenMax(n);
        },
        children: n
      }, `chooseLenMax${n}`, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
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
        lineNumber: 81,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 14
  }, undefined);
};

_s(GetWMOptions, "zrC++ZCXLyDfEGTbeb5OeW+DtF8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vd21vcHRpb25zLmpzIl0sIm5hbWVzIjpbIkdldFdNT3B0aW9ucyIsInNldEdhbWVPcHRpb25zIiwibGVuQWxsb3dlZEFycmF5IiwibW9kZSIsInNldE1vZGUiLCJ1c2VTdGF0ZSIsImxlbk1pbiIsInNldExlbk1pbiIsImxlbk1heCIsInNldExlbk1heCIsInNob3dIZWFkZXIiLCJzZXRTaG93SGVhZGVyIiwiY2xpcHJ1bGUiLCJzZXRDbGlwcnVsZSIsInZhbGlkT25seSIsInNldFZhbGlkT25seSIsInRoZW1lIiwic2V0VGhlbWUiLCJ0aGVtZXMiLCJjIiwiaSIsInciLCJoYW5kbGVTdGFydFB1enpsZSIsIm5ld0dhbWVPcHRpb25zIiwic2V0IiwiY2l3IiwibWFwIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBc0I7QUFBQTs7QUFDdkMsUUFBTUMsZUFBZSxHQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsTUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkYsK0NBQVEsQ0FBQyxDQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCSiwrQ0FBUSxDQUFDLENBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJOLCtDQUFRLENBQUMsSUFBRCxDQUE1QyxDQUx1QyxDQUthOztBQUNwRCxRQUFNO0FBQUEsT0FBQ08sUUFBRDtB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LGdCQUFmLEdBQWtDLGtCQUFyRDtBQUVJLGVBQU8sRUFBRSxNQUFNO0FBQUVDLG1CQUFTLENBQUNvQixDQUFELENBQVQ7QUFBZSxTQUZwQztBQUFBLGtCQUdFQTtBQUhGLFNBQ1UsZUFBY0EsQ0FBRSxFQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURILENBRkwsZUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFUSixFQVVLekIsZUFBZSxDQUFDd0IsR0FBaEIsQ0FBcUJDLENBQUQsaUJBQ2pCO0FBQVEsaUJBQVMsRUFBRUEsQ0FBQyxLQUFLbkIsTUFBTixHQUFlLGdCQUFmLEdBQWtDLGtCQUFyRDtBQUVJLGVBQU8sRUFBRSxNQUFNO0FBQUVDLG1CQUFTLENBQUNrQixDQUFELENBQVQ7QUFBZSxTQUZwQztBQUFBLGtCQUdFQTtBQUhGLFNBQ1UsZUFBY0EsQ0FBRSxFQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURILENBVkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxDSyxlQW9ETDtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBLDZCQUNJO0FBQTBCLGlCQUFTLEVBQUMsVUFBcEM7QUFBK0MsZUFBTyxFQUFFLE1BQU07QUFBRUwsMkJBQWlCO0FBQUssU0FBdEY7QUFBQTtBQUFBLFNBQVksYUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwREs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVQ7QUEwREgsQ0FuRkQ7O0dBQU10QixZOztLQUFBQSxZO0FBcUZOLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk3N2M2YzMyYTliNDY5NzYyMTQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEdldFdNT3B0aW9ucyA9ICh7c2V0R2FtZU9wdGlvbnN9KSA9PiB7XHJcbiAgICBjb25zdCBsZW5BbGxvd2VkQXJyYXkgPSBbMiwzLDQsNSw2LDcsOCw5XTtcclxuICAgIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKCdlYXN5Jyk7XHJcbiAgICBjb25zdCBbbGVuTWluLCBzZXRMZW5NaW5dID0gdXNlU3RhdGUoNSk7XHJcbiAgICBjb25zdCBbbGVuTWF4LCBzZXRMZW5NYXhdID0gdXNlU3RhdGUoOCk7XHJcbiAgICBjb25zdCBbc2hvd0hlYWRlciwgc2V0U2hvd0hlYWRlcl0gPSB1c2VTdGF0ZSh0cnVlKTsgLy8gd2hldGhlciB0byBzaG93IFwiV29yZCBNYXN0ZXJtaW5cIiBhbmQgbGluayBpbiBjbGlwYm9hcmQgY2FwdHVyZVxyXG4gICAgY29uc3QgW2NsaXBydWxlLCBzZXRDbGlwcnVsZV0gPSB1c2VTdGF0ZSgncm91bmQnKTtcclxuICAgIGNvbnN0IFt2YWxpZE9ubHksIHNldFZhbGlkT25seV0gPSB1c2VTdGF0ZSh0cnVlKTsgLy8gd2hldGhlciBndWVzc2VzIG11c3QgYmUgdmFsaWQgd29yZHNcclxuICAgIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoMCk7IC8vIEFycmF5IGluZGV4IGZvciB0aGVtZXNcclxuICAgIGNvbnN0IHRoZW1lcyA9IFtcclxuICAgICAgICB7YzpcIvCfmI5cIixpOlwi8J+kqFwiLHc6XCLwn5iSXCJ9LFxyXG4gICAgICAgIHtjOlwi8J+fqVwiLGk6XCLwn5+oXCIsdzpcIuKsnFwifSxcclxuICAgICAgICB7YzpcIuKchVwiLGk6XCLwn5SBXCIsdzpcIuKdjFwifVxyXG4gICAgXTtcclxuICAgIGNvbnN0IGhhbmRsZVN0YXJ0UHV6emxlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBuZXdHYW1lT3B0aW9ucyA9IHtzZXQ6IHRydWUsIG1vZGU6IG1vZGUsIHZhbGlkT25seTogdmFsaWRPbmx5LCBjbGlwcnVsZTogY2xpcHJ1bGUsIGNpdzogdGhlbWVzW3RoZW1lXX07XHJcbiAgICAgICAgaWYgKGxlbk1pbiA+IGxlbk1heCkge1xyXG4gICAgICAgICAgICBuZXdHYW1lT3B0aW9ucy5sZW5NYXggPSBsZW5NaW47XHJcbiAgICAgICAgICAgIG5ld0dhbWVPcHRpb25zLmxlbk1pbiA9IGxlbk1heDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdHYW1lT3B0aW9ucy5sZW5NaW4gPSBsZW5NaW47XHJcbiAgICAgICAgICAgIG5ld0dhbWVPcHRpb25zLmxlbk1heCA9IGxlbk1heDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0R2FtZU9wdGlvbnMobmV3R2FtZU9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICggPGRpdiBjbGFzc05hbWU9XCJ0ck9wdGlvbnNEaXZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dmFsaWRPbmx5ID8gXCJ0ckNoZWNrYm94IE9uXCIgOiBcInRyQ2hlY2tib3hcIn1cclxuICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiV2hldGhlciBndWVzcyBtdXN0IGJlIHZhbGlkIHdvcmRzXCJcclxuICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRWYWxpZE9ubHkoIXZhbGlkT25seSk7fX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxsYWJlbD5HdWVzc2VzIG11c3QgYmUgdmFsaWQgd29yZHM8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttb2RlID09PSAnZWFzeScgPyBcInRyQ2hlY2tib3ggT25cIiA6IFwidHJDaGVja2JveFwifVxyXG4gICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJDb2xvciBjb2Rpbmcgc2hvd3Mgd2hpY2ggbGV0dGVycyBhcmUgY29ycmVjdCBvciBpbiB0aGUgd3JvbmcgcGxhY2UuIE90aGVyd2lzZSBzaG93IGNvdW50cyBvbmx5LlwiXHJcbiAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0TW9kZShtb2RlID09PSAnZWFzeScgPyAnaGFyZCcgOiAnZWFzeScpO319XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8bGFiZWw+Q29sb3IgY29kZSB0aGUgZ3Vlc3MgbGV0dGVyczwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJTZXQgY2xpcGJvYXJkIGZlYXR1cmUgdG8gY2FwdHVyZSB0aGUgZ3Vlc3NlcyBmb3IganVzdCB0aGUgcm91bmQsIGp1c3QgdGhlIHNldCwgb3IgYWxsIHNldHMuXCI+Q2xpcGJvYXJkIENhcHR1cmU8L2g0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2hvd0hlYWRlciA/IFwidHJDaGVja2JveCBPblwiIDogXCJ0ckNoZWNrYm94XCJ9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd0hlYWRlcighc2hvd0hlYWRlcik7fX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlNob3cgdGl0bGUgYW5kIHNpdGUgbGluazwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xpcHJ1bGUgPT09ICdyb3VuZCcgPyAndHJPcHRpb25zUmFkaW9PbicgOiAndHJPcHRpb25zUmFkaW9PZmYnfSBvbkNsaWNrPXsoKSA9PiB7c2V0Q2xpcHJ1bGUoJ3JvdW5kJyk7fX0vPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ck9wdGlvbnNSYWRpb0xhYmVsXCI+Um91bmQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGlwcnVsZSA9PT0gJ3NldCcgPyAndHJPcHRpb25zUmFkaW9PbicgOiAndHJPcHRpb25zUmFkaW9PZmYnfSBvbkNsaWNrPXsoKSA9PiB7c2V0Q2xpcHJ1bGUoJ3NldCcpO319Lz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJPcHRpb25zUmFkaW9MYWJlbFwiPlNldDwvc3Bhbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsaXBydWxlID09PSAnYWxsJyA/ICd0ck9wdGlvbnNSYWRpb09uJyA6ICd0ck9wdGlvbnNSYWRpb09mZid9IG9uQ2xpY2s9eygpID0+IHtzZXRDbGlwcnVsZSgnYWxsJyk7fX0vPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ck9wdGlvbnNSYWRpb0xhYmVsXCI+QWxsPC9zcGFuPlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiQWxpZ25DZW50ZXJcIj5FbW9qaSBUaGVtZTwvaDQ+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt0aGVtZSA9PT0gMCA/ICd0ck9wdGlvbnNSYWRpb09uJyA6ICd0ck9wdGlvbnNSYWRpb09mZid9IG9uQ2xpY2s9eygpID0+IHtzZXRUaGVtZSgwKTt9fS8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyT3B0aW9uc1JhZGlvTGFiZWxcIj57dGhlbWVzWzBdLmN9e3RoZW1lc1swXS5pfXt0aGVtZXNbMF0ud308L3NwYW4+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt0aGVtZSA9PT0gMSA/ICd0ck9wdGlvbnNSYWRpb09uJyA6ICd0ck9wdGlvbnNSYWRpb09mZid9IG9uQ2xpY2s9eygpID0+IHtzZXRUaGVtZSgxKTt9fS8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyT3B0aW9uc1JhZGlvTGFiZWxcIj57dGhlbWVzWzFdLmN9e3RoZW1lc1sxXS5pfXt0aGVtZXNbMV0ud308L3NwYW4+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt0aGVtZSA9PT0gMiA/ICd0ck9wdGlvbnNSYWRpb09uJyA6ICd0ck9wdGlvbnNSYWRpb09mZid9IG9uQ2xpY2s9eygpID0+IHtzZXRUaGVtZSgyKTt9fS8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyT3B0aW9uc1JhZGlvTGFiZWxcIj57dGhlbWVzWzJdLmN9e3RoZW1lc1syXS5pfXt0aGVtZXNbMl0ud308L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3bV9sZW5EaXZcIj5cclxuICAgICAgICAgICAgPGgzPlN0YXJ0IExlbmd0aDwvaDM+XHJcbiAgICAgICAgICAgIHtsZW5BbGxvd2VkQXJyYXkubWFwKChuKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17biA9PT0gbGVuTWluID8gJ3dtX2xlblNlbGVjdGVkJyA6ICd3bV9sZW5VbnNlbGVjdGVkJ31cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2BjaG9vc2VMZW5NaW4ke259YH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldExlbk1pbihuKTsgfSB9XHJcbiAgICAgICAgICAgICAgICA+e259XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxoMz5FbmQgTGVuZ3RoPC9oMz5cclxuICAgICAgICAgICAge2xlbkFsbG93ZWRBcnJheS5tYXAoKG4pID0+IChcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtuID09PSBsZW5NYXggPyAnd21fbGVuU2VsZWN0ZWQnIDogJ3dtX2xlblVuc2VsZWN0ZWQnfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17YGNob29zZUxlbk1heCR7bn1gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0TGVuTWF4KG4pOyB9IH1cclxuICAgICAgICAgICAgICAgID57bn1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndtX3N0YXJ0UHV6emxlRGl2XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwic3RhcnRQdXp6bGVcIiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlU3RhcnRQdXp6bGUoKTsgfSB9PlxyXG4gICAgICAgICAgICAgICAgU3RhcnQgUHV6emxlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2V0V01PcHRpb25zOyJdLCJzb3VyY2VSb290IjoiIn0=