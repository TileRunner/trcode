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
    0: cliprule,
    1: setCliprule
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('round');

  const handleStartPuzzle = () => {
    let newGameOptions = {
      set: true,
      mode: mode
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
    className: "wmGetOptionsDiv",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "AlignCenter",
        "data-toggle": "tooltip",
        title: "Easy mode shows which letters are correct or in the wrong place. Hard mode shows counts only.",
        children: "Difficulty"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: mode === 'easy' ? 'wmRadioOn' : 'wmRadioOff',
        onClick: () => {
          setMode('easy');
        }
      }, 'buttonmodeeasy', false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "wmRadioLabel",
        children: "Easy"
      }, 'labelmodeeasy', false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: mode === 'hard' ? 'wmRadioOn' : 'wmRadioOff',
        onClick: () => {
          setMode('hard');
        }
      }, 'buttonmodehard', false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "wmRadioLabel",
        children: "Hard"
      }, 'labelmodehard', false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "AlignCenter",
        children: "Clipboard Capture"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: cliprule === 'round' ? 'wmRadioOn' : 'wmRadioOff',
        onClick: () => {
          setCliprule('round');
        }
      }, 'buttonclipround', false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "wmRadioLabel",
        children: "Round"
      }, 'labelclipround', false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: cliprule === 'set' ? 'wmRadioOn' : 'wmRadioOff',
        onClick: () => {
          setCliprule('set');
        }
      }, 'buttonclipset', false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "wmRadioLabel",
        children: "Set"
      }, 'labelclipset', false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "wm_lenDiv",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Start at length:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }, undefined), lenAllowedArray.map(n => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: n === lenMin ? 'wm_lenSelected' : 'wm_lenUnselected',
        onClick: () => {
          setLenMin(n);
        },
        children: n
      }, `chooseLenMin${n}`, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "End at length:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, undefined), lenAllowedArray.map(n => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: n === lenMax ? 'wm_lenSelected' : 'wm_lenUnselected',
        onClick: () => {
          setLenMax(n);
        },
        children: n
      }, `chooseLenMax${n}`, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
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
        lineNumber: 54,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 14
  }, undefined);
};

_s(GetWMOptions, "O2CvdSEXm6GM8GxhYgtdlaSF+oY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vd21vcHRpb25zLmpzIl0sIm5hbWVzIjpbIkdldFdNT3B0aW9ucyIsInNldEdhbWVPcHRpb25zIiwibGVuQWxsb3dlZEFycmF5IiwibW9kZSIsInNldE1vZGUiLCJ1c2VTdGF0ZSIsImxlbk1pbiIsInNldExlbk1pbiIsImxlbk1heCIsInNldExlbk1heCIsImNsaXBydWxlIiwic2V0Q2xpcHJ1bGUiLCJoYW5kbGVTdGFydFB1enpsZSIsIm5ld0dhbWVPcHRpb25zIiwic2V0IiwibWFwIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBc0I7QUFBQTs7QUFDdkMsUUFBTUMsZUFBZSxHQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsTUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkYsK0NBQVEsQ0FBQyxDQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCSiwrQ0FBUSxDQUFDLENBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJOLCtDQUFRLENBQUMsT0FBRCxDQUF4Qzs7QUFDQSxRQUFNTyxpQkFBaUIsR0FBRyxNQUFNO0FBQzVCLFFBQUlDLGNBQWMsR0FBRztBQUFDQyxTQUFHLEVBQUUsSUFBTjtBQUFZWCxVQUFJLEVBQUVBO0FBQWxCLEtBQXJCOztBQUNBLFFBQUlHLE1BQU0sR0FBR0UsTUFBYixFQUFxQjtBQUNqQkss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QUFBUSxpQkFBUyxFQUFFQSxDQUFDLEtBQUtSLE1BQU4sR0FBZSxnQkFBZixHQUFrQyxrQkFBckQ7QUFFSSxlQUFPLEVBQUUsTUFBTTtBQUFFQyxtQkFBUyxDQUFDTyxDQUFELENBQVQ7QUFBZSxTQUZwQztBQUFBLGtCQUdFQTtBQUhGLFNBQ1UsZUFBY0EsQ0FBRSxFQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURILENBVkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWZLLGVBaUNMO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsNkJBQ0k7QUFBMEIsaUJBQVMsRUFBQyxVQUFwQztBQUErQyxlQUFPLEVBQUUsTUFBTTtBQUFFSiwyQkFBaUI7QUFBSyxTQUF0RjtBQUFBO0FBQUEsU0FBWSxhQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpDSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVDtBQXVDSCxDQXhERDs7R0FBTVosWTs7S0FBQUEsWTtBQTBETiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MTkxZmY4MWYyNGNhMWE2MGUwYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBHZXRXTU9wdGlvbnMgPSAoe3NldEdhbWVPcHRpb25zfSkgPT4ge1xyXG4gICAgY29uc3QgbGVuQWxsb3dlZEFycmF5ID0gWzIsMyw0LDUsNiw3LDgsOV07XHJcbiAgICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZSgnZWFzeScpO1xyXG4gICAgY29uc3QgW2xlbk1pbiwgc2V0TGVuTWluXSA9IHVzZVN0YXRlKDUpO1xyXG4gICAgY29uc3QgW2xlbk1heCwgc2V0TGVuTWF4XSA9IHVzZVN0YXRlKDgpO1xyXG4gICAgY29uc3QgW2NsaXBydWxlLCBzZXRDbGlwcnVsZV0gPSB1c2VTdGF0ZSgncm91bmQnKTtcclxuICAgIGNvbnN0IGhhbmRsZVN0YXJ0UHV6emxlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBuZXdHYW1lT3B0aW9ucyA9IHtzZXQ6IHRydWUsIG1vZGU6IG1vZGV9O1xyXG4gICAgICAgIGlmIChsZW5NaW4gPiBsZW5NYXgpIHtcclxuICAgICAgICAgICAgbmV3R2FtZU9wdGlvbnMubGVuTWF4ID0gbGVuTWluO1xyXG4gICAgICAgICAgICBuZXdHYW1lT3B0aW9ucy5sZW5NaW4gPSBsZW5NYXg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3R2FtZU9wdGlvbnMubGVuTWluID0gbGVuTWluO1xyXG4gICAgICAgICAgICBuZXdHYW1lT3B0aW9ucy5sZW5NYXggPSBsZW5NYXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEdhbWVPcHRpb25zKG5ld0dhbWVPcHRpb25zKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoIDxkaXYgY2xhc3NOYW1lPVwid21HZXRPcHRpb25zRGl2XCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJFYXN5IG1vZGUgc2hvd3Mgd2hpY2ggbGV0dGVycyBhcmUgY29ycmVjdCBvciBpbiB0aGUgd3JvbmcgcGxhY2UuIEhhcmQgbW9kZSBzaG93cyBjb3VudHMgb25seS5cIj5EaWZmaWN1bHR5PC9oMz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9J2J1dHRvbm1vZGVlYXN5JyBjbGFzc05hbWU9e21vZGUgPT09ICdlYXN5JyA/ICd3bVJhZGlvT24nIDogJ3dtUmFkaW9PZmYnfSBvbkNsaWNrPXsoKSA9PiB7c2V0TW9kZSgnZWFzeScpO319Lz5cclxuICAgICAgICAgICAgPHNwYW4ga2V5PSdsYWJlbG1vZGVlYXN5JyBjbGFzc05hbWU9XCJ3bVJhZGlvTGFiZWxcIj5FYXN5PC9zcGFuPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT0nYnV0dG9ubW9kZWhhcmQnIGNsYXNzTmFtZT17bW9kZSA9PT0gJ2hhcmQnID8gJ3dtUmFkaW9PbicgOiAnd21SYWRpb09mZid9IG9uQ2xpY2s9eygpID0+IHtzZXRNb2RlKCdoYXJkJyk7fX0vPlxyXG4gICAgICAgICAgICA8c3BhbiBrZXk9J2xhYmVsbW9kZWhhcmQnIGNsYXNzTmFtZT1cIndtUmFkaW9MYWJlbFwiPkhhcmQ8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCI+Q2xpcGJvYXJkIENhcHR1cmU8L2gzPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT0nYnV0dG9uY2xpcHJvdW5kJyBjbGFzc05hbWU9e2NsaXBydWxlID09PSAncm91bmQnID8gJ3dtUmFkaW9PbicgOiAnd21SYWRpb09mZid9IG9uQ2xpY2s9eygpID0+IHtzZXRDbGlwcnVsZSgncm91bmQnKTt9fS8+XHJcbiAgICAgICAgICAgIDxzcGFuIGtleT0nbGFiZWxjbGlwcm91bmQnIGNsYXNzTmFtZT1cIndtUmFkaW9MYWJlbFwiPlJvdW5kPC9zcGFuPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT0nYnV0dG9uY2xpcHNldCcgY2xhc3NOYW1lPXtjbGlwcnVsZSA9PT0gJ3NldCcgPyAnd21SYWRpb09uJyA6ICd3bVJhZGlvT2ZmJ30gb25DbGljaz17KCkgPT4ge3NldENsaXBydWxlKCdzZXQnKTt9fS8+XHJcbiAgICAgICAgICAgIDxzcGFuIGtleT0nbGFiZWxjbGlwc2V0JyBjbGFzc05hbWU9XCJ3bVJhZGlvTGFiZWxcIj5TZXQ8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3bV9sZW5EaXZcIj5cclxuICAgICAgICAgICAgPGgzPlN0YXJ0IGF0IGxlbmd0aDo8L2gzPlxyXG4gICAgICAgICAgICB7bGVuQWxsb3dlZEFycmF5Lm1hcCgobikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e24gPT09IGxlbk1pbiA/ICd3bV9sZW5TZWxlY3RlZCcgOiAnd21fbGVuVW5zZWxlY3RlZCd9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtgY2hvb3NlTGVuTWluJHtufWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRMZW5NaW4obik7IH0gfVxyXG4gICAgICAgICAgICAgICAgPntufVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8aDM+RW5kIGF0IGxlbmd0aDo8L2gzPlxyXG4gICAgICAgICAgICB7bGVuQWxsb3dlZEFycmF5Lm1hcCgobikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e24gPT09IGxlbk1heCA/ICd3bV9sZW5TZWxlY3RlZCcgOiAnd21fbGVuVW5zZWxlY3RlZCd9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtgY2hvb3NlTGVuTWF4JHtufWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRMZW5NYXgobik7IH0gfVxyXG4gICAgICAgICAgICAgICAgPntufVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid21fc3RhcnRQdXp6bGVEaXZcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJzdGFydFB1enpsZVwiIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4geyBoYW5kbGVTdGFydFB1enpsZSgpOyB9IH0+XHJcbiAgICAgICAgICAgICAgICBTdGFydCBQdXp6bGVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZXRXTU9wdGlvbnM7Il0sInNvdXJjZVJvb3QiOiIifQ==