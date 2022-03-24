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
      className: showHeader ? "trCheckbox On" : "trCheckbox",
      onClick: () => {
        setShowHeader(!showHeader);
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Show title and site link in clipboard"
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
      lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vd21vcHRpb25zLmpzIl0sIm5hbWVzIjpbIkdldFdNT3B0aW9ucyIsInNldEdhbWVPcHRpb25zIiwibGVuQWxsb3dlZEFycmF5IiwibW9kZSIsInNldE1vZGUiLCJ1c2VTdGF0ZSIsImxlbk1pbiIsInNldExlbk1pbiIsImxlbk1heCIsInNldExlbk1heCIsInNob3dIZWFkZXIiLCJzZXRTaG93SGVhZGVyIiwiY2xpcHJ1bGUiLCJzZXRDbGlwcnVsZSIsInZhbGlkT25seSIsInNldFZhbGlkT25seSIsInRoZW1lIiwic2V0VGhlbWUiLCJ0aGVtZXMiLCJjIiwiaSIsInciLCJoYW5kbGVTdGFydFB1enpsZSIsIm5ld0dhbWVPcHRpb25zIiwic2V0IiwiY2l3IiwibWFwIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBc0I7QUFBQTs7QUFDdkMsUUFBTUMsZUFBZSxHQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsTUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkYsK0NBQVEsQ0FBQyxDQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCSiwrQ0FBUSxDQUFDLENBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJOLCtDQUFRLENBQUMsSUFBRCxDQUE1QyxDQUx1QyxDQUthOztBQUNwRCxRQUFNO0FBQUEsT0FBQ08sUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJSLCtDQUFRLENBQUMsT0FBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDUyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QlYsK0NBQVEsQ0FBQyxJQUFELENBQTFDLENBUHVDLENBT1c7O0FBQ2xELFFBQU07QUFBQSxPQUFDVyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQlosK0NBQVEsQ0FBQyxDQUFELENBQWxDLENBUnVDLENBUUE7O0FBQ3ZDLFFBQU1hLE1BQU0sR0FBRyxDQUNYO0FBQUNDLEtBQUMsRUFBQyxJQUFIO0FBQVFDLEtBQUMsRUFBQyxJQUFWO0FBQWVDLEtBQUMsRUFBQztBQUFqQixHQURXLEVBRVg7QUFBQ0YsS0FBQyxFQUFDLElBQUg7QUFBUUMsS0FBQyxFQUFDLElBQVY7QUFBZUMsS0FBQyxFQUFDO0FBQWpCLEdBRlcsRUFHWDtBQUFDRixLQUFDLEVBQUMsR0FBSDtBQUFPQyxLQUFDLEVBQUMsSUFBVDtBQUFjQyxLQUFDLEVBQUM7QUFBaEIsR0FIVyxDQUFmOztBQUtBLFFBQU1DLGlCQUFpQixHQUFHLE1BQU07QUFDNUIsUUFBSUMsY0FBYyxHQUFHO0FBQUNDLFNBQUcsRUFBRSxJQUFOO0FBQVlyQixVQUFJLEVBQUVBLElBQWxCO0FBQXdCVyxlQUFTLEVBQUVBLFNBQW5DO0FBQThDRixjQUFRLEVBQUVBLFFBQXhEO0FBQWtFYSxTQUFHLEVBQUVQLE1BQU0sQ0FBQ0YsS0FBRDtBQUE3RSxLQUFyQjs7QUFDQSxRQUFJVixNQUFNLEdBQUdFLE1BQWIsRUFBcUI7QUFDakJlLG9CQUFjLENBQUNmLE1BQWYsR0FBd0JGLE1BQXhCO0FBQ0FpQixvQkFBYyxDQUFDakIsTUFBZixHQUF3QkUsTUFBeEI7QUFDSCxLQUhELE1BR087QUFDSGUsb0JBQWMsQ0FBQ2pCLE1BQWYsR0FBd0JBLE1BQXhCO0FBQ0FpQixvQkFBYyxDQUFDZixNQUFmLEdBQXdCQSxNQUF4QjtBQUNIOztBQUNEUCxrQkFBYyxDQUFDc0IsY0FBRCxDQUFkO0FBQ0gsR0FWRDs7QUFXQSxzQkFBUztBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUEsNEJBQ0w7QUFBSyxlQUFTLEVBQUVULFNBQVMsR0FBRyxlQUFILEdBQXFCLFlBQTlDO0FBQ0sscUJBQVksU0FEakI7QUFDMkIsV0FBSyxFQUFDLG1DQURqQztBQUVLLGFBQU8sRUFBRSxNQUFNO0FBQUNDLG9CQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQTBCLE9BRi9DO0FBQUEsNkJBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURLLGVBT0w7QUFBSyxlQUFTLEVBQUVYLElBQUksS0FBSyxNQUFULEdBQWtCLGVBQWxCLEdBQW9DLFlBQXBEO0FBQ0sscUJBQVksU0FEakI7QUFDMkIsV0FBSyxFQUFDLGlHQURqQztBQUVLLGFBQU8sRUFBRSxNQUFNO0FBQUNDLGVBQU8sQ0FBQ0QsSUFBSSxLQUFLLE1BQVQsR0FBa0IsTUFBbEIsR0FBMkIsTUFBNUIsQ0FBUDtBQUE0QyxPQUZqRTtBQUFBLDZCQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSyxlQWFMO0FBQUssZUFBUyxFQUFFTyxVQUFVLEdBQUcsZUFBSCxHQUFxQixZQUEvQztBQUNJLGFBQU8sRUFBRSxNQUFNO0FBQUNDLHFCQUFhLENBQUMsQ0FBQ0QsVUFBRixDQUFiO0FBQTRCLE9BRGhEO0FBQUEsNkJBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJLLGVBa0JMO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFDLGFBQWQ7QUFBNEIsdUJBQVksU0FBeEM7QUFBa0QsYUFBSyxFQUFDLDZGQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQVEsaUJBQVMsRUFBRUUsUUFBUSxLQUFLLE9BQWIsR0FBdUIsa0JBQXZCLEdBQTRDLG1CQUEvRDtBQUFvRixlQUFPLEVBQUUsTUFBTTtBQUFDQyxxQkFBVyxDQUFDLE9BQUQsQ0FBWDtBQUFzQjtBQUExSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBR0k7QUFBTSxpQkFBUyxFQUFDLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQUlJO0FBQVEsaUJBQVMsRUFBRUQsUUFBUSxLQUFLLEtBQWIsR0FBcUIsa0JBQXJCLEdBQTBDLG1CQUE3RDtBQUFrRixlQUFPLEVBQUUsTUFBTTtBQUFDQyxxQkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUFvQjtBQUF0SDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLGVBS0k7QUFBTSxpQkFBUyxFQUFDLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixlQU1JO0FBQVEsaUJBQVMsRUFBRUQsUUFBUSxLQUFLLEtBQWIsR0FBcUIsa0JBQXJCLEdBQTBDLG1CQUE3RDtBQUFrRixlQUFPLEVBQUUsTUFBTTtBQUFDQyxxQkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUFvQjtBQUF0SDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KLGVBT0k7QUFBTSxpQkFBUyxFQUFDLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQSixlQVFJO0FBQUksaUJBQVMsRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJKLGVBU0k7QUFBUSxpQkFBUyxFQUFFRyxLQUFLLEtBQUssQ0FBVixHQUFjLGtCQUFkLEdBQW1DLG1CQUF0RDtBQUEyRSxlQUFPLEVBQUUsTUFBTTtBQUFDQyxrQkFBUSxDQUFDLENBQUQsQ0FBUjtBQUFhO0FBQXhHO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEosZUFVSTtBQUFNLGlCQUFTLEVBQUMscUJBQWhCO0FBQUEsbUJBQXVDQyxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVDLENBQWpELEVBQW9ERCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVFLENBQTlELEVBQWlFRixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVHLENBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWSixlQVdJO0FBQVEsaUJBQVMsRUFBRUwsS0FBSyxLQUFLLENBQVYsR0FBYyxrQkFBZCxHQUFtQyxtQkFBdEQ7QUFBMkUsZUFBTyxFQUFFLE1BQU07QUFBQ0Msa0JBQVEsQ0FBQyxDQUFELENBQVI7QUFBYTtBQUF4RztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhKLGVBWUk7QUFBTSxpQkFBUyxFQUFDLHFCQUFoQjtBQUFBLG1CQUF1Q0MsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVQyxDQUFqRCxFQUFvREQsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVRSxDQUE5RCxFQUFpRUYsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVRyxDQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWkosZUFhSTtBQUFRLGlCQUFTLEVBQUVMLEtBQUssS0FBSyxDQUFWLEdBQWMsa0JBQWQsR0FBbUMsbUJBQXREO0FBQTJFLGVBQU8sRUFBRSxNQUFNO0FBQUNDLGtCQUFRLENBQUMsQ0FBRCxDQUFSO0FBQWE7QUFBeEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFiSixlQWNJO0FBQU0saUJBQVMsRUFBQyxxQkFBaEI7QUFBQSxtQkFBdUNDLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUMsQ0FBakQsRUFBb0RELE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUUsQ0FBOUQsRUFBaUVGLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUcsQ0FBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQkssZUFrQ0w7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLEVBRUtuQixlQUFlLENBQUN3QixHQUFoQixDQUFxQkMsQ0FBRCxpQkFDakI7QUFBUSxpQkFBUyxFQUFFQSxDQUFDLEtBQUtyQixNQUFOLEdBQWUsZ0JBQWYsR0FBa0Msa0JBQXJEO0FBRUksZUFBTyxFQUFFLE1BQU07QUFBRUMsbUJBQVMsQ0FBQ29CLENBQUQsQ0FBVDtBQUFlLFNBRnBDO0FBQUEsa0JBR0VBO0FBSEYsU0FDVSxlQUFjQSxDQUFFLEVBRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREgsQ0FGTCxlQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRKLEVBVUt6QixlQUFlLENBQUN3QixHQUFoQixDQUFxQkMsQ0FBRCxpQkFDakI7QUFBUSxpQkFBUyxFQUFFQSxDQUFDLEtBQUtuQixNQUFOLEdBQWUsZ0JBQWYsR0FBa0Msa0JBQXJEO0FBRUksZUFBTyxFQUFFLE1BQU07QUFBRUMsbUJBQVMsQ0FBQ2tCLENBQUQsQ0FBVDtBQUFlLFNBRnBDO0FBQUEsa0JBR0VBO0FBSEYsU0FDVSxlQUFjQSxDQUFFLEVBRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREgsQ0FWTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbENLLGVBb0RMO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsNkJBQ0k7QUFBMEIsaUJBQVMsRUFBQyxVQUFwQztBQUErQyxlQUFPLEVBQUUsTUFBTTtBQUFFTCwyQkFBaUI7QUFBSyxTQUF0RjtBQUFBO0FBQUEsU0FBWSxhQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBESztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVDtBQTBESCxDQW5GRDs7R0FBTXRCLFk7O0tBQUFBLFk7QUFxRk4sK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTZhYzQ0ZDMwZDZkNTAxYjI5ZGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgR2V0V01PcHRpb25zID0gKHtzZXRHYW1lT3B0aW9uc30pID0+IHtcclxuICAgIGNvbnN0IGxlbkFsbG93ZWRBcnJheSA9IFsyLDMsNCw1LDYsNyw4LDldO1xyXG4gICAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUoJ2Vhc3knKTtcclxuICAgIGNvbnN0IFtsZW5NaW4sIHNldExlbk1pbl0gPSB1c2VTdGF0ZSg1KTtcclxuICAgIGNvbnN0IFtsZW5NYXgsIHNldExlbk1heF0gPSB1c2VTdGF0ZSg4KTtcclxuICAgIGNvbnN0IFtzaG93SGVhZGVyLCBzZXRTaG93SGVhZGVyXSA9IHVzZVN0YXRlKHRydWUpOyAvLyB3aGV0aGVyIHRvIHNob3cgXCJXb3JkIE1hc3Rlcm1pblwiIGFuZCBsaW5rIGluIGNsaXBib2FyZCBjYXB0dXJlXHJcbiAgICBjb25zdCBbY2xpcHJ1bGUsIHNldENsaXBydWxlXSA9IHVzZVN0YXRlKCdyb3VuZCcpO1xyXG4gICAgY29uc3QgW3ZhbGlkT25seSwgc2V0VmFsaWRPbmx5XSA9IHVzZVN0YXRlKHRydWUpOyAvLyB3aGV0aGVyIGd1ZXNzZXMgbXVzdCBiZSB2YWxpZCB3b3Jkc1xyXG4gICAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSgwKTsgLy8gQXJyYXkgaW5kZXggZm9yIHRoZW1lc1xyXG4gICAgY29uc3QgdGhlbWVzID0gW1xyXG4gICAgICAgIHtjOlwi8J+YjlwiLGk6XCLwn6SoXCIsdzpcIvCfmJJcIn0sXHJcbiAgICAgICAge2M6XCLwn5+pXCIsaTpcIvCfn6hcIix3Olwi4qycXCJ9LFxyXG4gICAgICAgIHtjOlwi4pyFXCIsaTpcIvCflIFcIix3Olwi4p2MXCJ9XHJcbiAgICBdO1xyXG4gICAgY29uc3QgaGFuZGxlU3RhcnRQdXp6bGUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld0dhbWVPcHRpb25zID0ge3NldDogdHJ1ZSwgbW9kZTogbW9kZSwgdmFsaWRPbmx5OiB2YWxpZE9ubHksIGNsaXBydWxlOiBjbGlwcnVsZSwgY2l3OiB0aGVtZXNbdGhlbWVdfTtcclxuICAgICAgICBpZiAobGVuTWluID4gbGVuTWF4KSB7XHJcbiAgICAgICAgICAgIG5ld0dhbWVPcHRpb25zLmxlbk1heCA9IGxlbk1pbjtcclxuICAgICAgICAgICAgbmV3R2FtZU9wdGlvbnMubGVuTWluID0gbGVuTWF4O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld0dhbWVPcHRpb25zLmxlbk1pbiA9IGxlbk1pbjtcclxuICAgICAgICAgICAgbmV3R2FtZU9wdGlvbnMubGVuTWF4ID0gbGVuTWF4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRHYW1lT3B0aW9ucyhuZXdHYW1lT3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCA8ZGl2IGNsYXNzTmFtZT1cInRyT3B0aW9uc0RpdlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt2YWxpZE9ubHkgPyBcInRyQ2hlY2tib3ggT25cIiA6IFwidHJDaGVja2JveFwifVxyXG4gICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJXaGV0aGVyIGd1ZXNzIG11c3QgYmUgdmFsaWQgd29yZHNcIlxyXG4gICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFZhbGlkT25seSghdmFsaWRPbmx5KTt9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGxhYmVsPkd1ZXNzZXMgbXVzdCBiZSB2YWxpZCB3b3JkczwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21vZGUgPT09ICdlYXN5JyA/IFwidHJDaGVja2JveCBPblwiIDogXCJ0ckNoZWNrYm94XCJ9XHJcbiAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkNvbG9yIGNvZGluZyBzaG93cyB3aGljaCBsZXR0ZXJzIGFyZSBjb3JyZWN0IG9yIGluIHRoZSB3cm9uZyBwbGFjZS4gT3RoZXJ3aXNlIHNob3cgY291bnRzIG9ubHkuXCJcclxuICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRNb2RlKG1vZGUgPT09ICdlYXN5JyA/ICdoYXJkJyA6ICdlYXN5Jyk7fX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxsYWJlbD5Db2xvciBjb2RlIHRoZSBndWVzcyBsZXR0ZXJzPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2hvd0hlYWRlciA/IFwidHJDaGVja2JveCBPblwiIDogXCJ0ckNoZWNrYm94XCJ9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRTaG93SGVhZGVyKCFzaG93SGVhZGVyKTt9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGxhYmVsPlNob3cgdGl0bGUgYW5kIHNpdGUgbGluayBpbiBjbGlwYm9hcmQ8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJBbGlnbkNlbnRlclwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiU2V0IGNsaXBib2FyZCBmZWF0dXJlIHRvIGNhcHR1cmUgdGhlIGd1ZXNzZXMgZm9yIGp1c3QgdGhlIHJvdW5kLCBqdXN0IHRoZSBzZXQsIG9yIGFsbCBzZXRzLlwiPkNsaXBib2FyZCBDYXB0dXJlPC9oND5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsaXBydWxlID09PSAncm91bmQnID8gJ3RyT3B0aW9uc1JhZGlvT24nIDogJ3RyT3B0aW9uc1JhZGlvT2ZmJ30gb25DbGljaz17KCkgPT4ge3NldENsaXBydWxlKCdyb3VuZCcpO319Lz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJPcHRpb25zUmFkaW9MYWJlbFwiPlJvdW5kPC9zcGFuPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xpcHJ1bGUgPT09ICdzZXQnID8gJ3RyT3B0aW9uc1JhZGlvT24nIDogJ3RyT3B0aW9uc1JhZGlvT2ZmJ30gb25DbGljaz17KCkgPT4ge3NldENsaXBydWxlKCdzZXQnKTt9fS8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyT3B0aW9uc1JhZGlvTGFiZWxcIj5TZXQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGlwcnVsZSA9PT0gJ2FsbCcgPyAndHJPcHRpb25zUmFkaW9PbicgOiAndHJPcHRpb25zUmFkaW9PZmYnfSBvbkNsaWNrPXsoKSA9PiB7c2V0Q2xpcHJ1bGUoJ2FsbCcpO319Lz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJPcHRpb25zUmFkaW9MYWJlbFwiPkFsbDwvc3Bhbj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCI+RW1vamkgVGhlbWU8L2g0PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGhlbWUgPT09IDAgPyAndHJPcHRpb25zUmFkaW9PbicgOiAndHJPcHRpb25zUmFkaW9PZmYnfSBvbkNsaWNrPXsoKSA9PiB7c2V0VGhlbWUoMCk7fX0vPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ck9wdGlvbnNSYWRpb0xhYmVsXCI+e3RoZW1lc1swXS5jfXt0aGVtZXNbMF0uaX17dGhlbWVzWzBdLnd9PC9zcGFuPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGhlbWUgPT09IDEgPyAndHJPcHRpb25zUmFkaW9PbicgOiAndHJPcHRpb25zUmFkaW9PZmYnfSBvbkNsaWNrPXsoKSA9PiB7c2V0VGhlbWUoMSk7fX0vPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ck9wdGlvbnNSYWRpb0xhYmVsXCI+e3RoZW1lc1sxXS5jfXt0aGVtZXNbMV0uaX17dGhlbWVzWzFdLnd9PC9zcGFuPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGhlbWUgPT09IDIgPyAndHJPcHRpb25zUmFkaW9PbicgOiAndHJPcHRpb25zUmFkaW9PZmYnfSBvbkNsaWNrPXsoKSA9PiB7c2V0VGhlbWUoMik7fX0vPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ck9wdGlvbnNSYWRpb0xhYmVsXCI+e3RoZW1lc1syXS5jfXt0aGVtZXNbMl0uaX17dGhlbWVzWzJdLnd9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid21fbGVuRGl2XCI+XHJcbiAgICAgICAgICAgIDxoMz5TdGFydCBMZW5ndGg8L2gzPlxyXG4gICAgICAgICAgICB7bGVuQWxsb3dlZEFycmF5Lm1hcCgobikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e24gPT09IGxlbk1pbiA/ICd3bV9sZW5TZWxlY3RlZCcgOiAnd21fbGVuVW5zZWxlY3RlZCd9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtgY2hvb3NlTGVuTWluJHtufWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRMZW5NaW4obik7IH0gfVxyXG4gICAgICAgICAgICAgICAgPntufVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8aDM+RW5kIExlbmd0aDwvaDM+XHJcbiAgICAgICAgICAgIHtsZW5BbGxvd2VkQXJyYXkubWFwKChuKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17biA9PT0gbGVuTWF4ID8gJ3dtX2xlblNlbGVjdGVkJyA6ICd3bV9sZW5VbnNlbGVjdGVkJ31cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2BjaG9vc2VMZW5NYXgke259YH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldExlbk1heChuKTsgfSB9XHJcbiAgICAgICAgICAgICAgICA+e259XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3bV9zdGFydFB1enpsZURpdlwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cInN0YXJ0UHV6emxlXCIgY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZVN0YXJ0UHV6emxlKCk7IH0gfT5cclxuICAgICAgICAgICAgICAgIFN0YXJ0IFB1enpsZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2Pik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdldFdNT3B0aW9uczsiXSwic291cmNlUm9vdCI6IiJ9