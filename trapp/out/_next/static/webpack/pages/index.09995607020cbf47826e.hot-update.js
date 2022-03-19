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
  const {
    0: validOnly,
    1: setValidOnly
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // whether guesses must be valid words

  const handleStartPuzzle = () => {
    let newGameOptions = {
      set: true,
      mode: mode,
      validOnly: validOnly,
      cliprule: cliprule
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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "AlignCenter",
        "data-toggle": "tooltip",
        title: "Easy mode shows which letters are correct or in the wrong place. Hard mode shows counts only.",
        children: "Difficulty"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: mode === 'easy' ? 'trOptionsRadioOn' : 'trOptionsRadioOff',
        onClick: () => {
          setMode('easy');
        }
      }, 'buttonmodeeasy', false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "trOptionsRadioLabel",
        children: "Easy"
      }, 'labelmodeeasy', false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: mode === 'hard' ? 'trOptionsRadioOn' : 'trOptionsRadioOff',
        onClick: () => {
          setMode('hard');
        }
      }, 'buttonmodehard', false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "trOptionsRadioLabel",
        children: "Hard"
      }, 'labelmodehard', false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: validOnly ? 'trOptionsCheckboxOn' : 'trOptionsCheckboxOff',
        "data-toggle": "tooltip",
        title: "Whether guess must be valid words",
        onClick: () => {
          setValidOnly(!validOnly);
        }
      }, 'buttonvalidonly', false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "trOptionsCheckboxLabel",
        children: "Guesses must be valid words"
      }, 'labelvalidonly', false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "AlignCenter",
        "data-toggle": "tooltip",
        title: "Set clipboard feature to capture the guesses for just the round, just the set, or all sets.",
        children: "Clipboard Capture"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: cliprule === 'round' ? 'trOptionsRadioOn' : 'trOptionsRadioOff',
        onClick: () => {
          setCliprule('round');
        }
      }, 'buttonclipround', false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "trOptionsRadioLabel",
        children: "Round"
      }, 'labelclipround', false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: cliprule === 'set' ? 'trOptionsRadioOn' : 'trOptionsRadioOff',
        onClick: () => {
          setCliprule('set');
        }
      }, 'buttonclipset', false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "trOptionsRadioLabel",
        children: "Set"
      }, 'labelclipset', false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: cliprule === 'all' ? 'trOptionsRadioOn' : 'trOptionsRadioOff',
        onClick: () => {
          setCliprule('all');
        }
      }, 'buttonclipall', false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "trOptionsRadioLabel",
        children: "All"
      }, 'labelclipall', false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "wm_lenDiv",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Start Length"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, undefined), lenAllowedArray.map(n => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: n === lenMin ? 'wm_lenSelected' : 'wm_lenUnselected',
        onClick: () => {
          setLenMin(n);
        },
        children: n
      }, `chooseLenMin${n}`, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "End Length"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }, undefined), lenAllowedArray.map(n => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: n === lenMax ? 'wm_lenSelected' : 'wm_lenUnselected',
        onClick: () => {
          setLenMax(n);
        },
        children: n
      }, `chooseLenMax${n}`, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
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
        lineNumber: 65,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 14
  }, undefined);
};

_s(GetWMOptions, "KXJAy4CUvSYjWZgZfrLbEvw2wtI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vd21vcHRpb25zLmpzIl0sIm5hbWVzIjpbIkdldFdNT3B0aW9ucyIsInNldEdhbWVPcHRpb25zIiwibGVuQWxsb3dlZEFycmF5IiwibW9kZSIsInNldE1vZGUiLCJ1c2VTdGF0ZSIsImxlbk1pbiIsInNldExlbk1pbiIsImxlbk1heCIsInNldExlbk1heCIsImNsaXBydWxlIiwic2V0Q2xpcHJ1bGUiLCJ2YWxpZE9ubHkiLCJzZXRWYWxpZE9ubHkiLCJoYW5kbGVTdGFydFB1enpsZSIsIm5ld0dhbWVPcHRpb25zIiwic2V0IiwibWFwIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBc0I7QUFBQTs7QUFDdkMsUUFBTUMsZUFBZSxHQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsTUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkYsK0NBQVEsQ0FBQyxDQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCSiwrQ0FBUSxDQUFDLENBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJOLCtDQUFRLENBQUMsT0FBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDTyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QlIsK0NBQVEsQ0FBQyxLQUFELENBQTFDLENBTnVDLENBTVk7O0FBQ25ELFFBQU1TLGlCQUFpQixHQUFHLE1BQU07QUFD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Y0EsQ0FBRSxFQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURILENBVkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpCSyxlQTJDTDtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBLDZCQUNJO0FBQTBCLGlCQUFTLEVBQUMsVUFBcEM7QUFBK0MsZUFBTyxFQUFFLE1BQU07QUFBRUosMkJBQWlCO0FBQUssU0FBdEY7QUFBQTtBQUFBLFNBQVksYUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzQ0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVQ7QUFpREgsQ0FuRUQ7O0dBQU1kLFk7O0tBQUFBLFk7QUFxRU4sK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDk5OTU2MDcwMjBjYmY0NzgyNmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgR2V0V01PcHRpb25zID0gKHtzZXRHYW1lT3B0aW9uc30pID0+IHtcclxuICAgIGNvbnN0IGxlbkFsbG93ZWRBcnJheSA9IFsyLDMsNCw1LDYsNyw4LDldO1xyXG4gICAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUoJ2Vhc3knKTtcclxuICAgIGNvbnN0IFtsZW5NaW4sIHNldExlbk1pbl0gPSB1c2VTdGF0ZSg1KTtcclxuICAgIGNvbnN0IFtsZW5NYXgsIHNldExlbk1heF0gPSB1c2VTdGF0ZSg4KTtcclxuICAgIGNvbnN0IFtjbGlwcnVsZSwgc2V0Q2xpcHJ1bGVdID0gdXNlU3RhdGUoJ3JvdW5kJyk7XHJcbiAgICBjb25zdCBbdmFsaWRPbmx5LCBzZXRWYWxpZE9ubHldID0gdXNlU3RhdGUoZmFsc2UpOyAvLyB3aGV0aGVyIGd1ZXNzZXMgbXVzdCBiZSB2YWxpZCB3b3Jkc1xyXG4gICAgY29uc3QgaGFuZGxlU3RhcnRQdXp6bGUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld0dhbWVPcHRpb25zID0ge3NldDogdHJ1ZSwgbW9kZTogbW9kZSwgdmFsaWRPbmx5OiB2YWxpZE9ubHksIGNsaXBydWxlOiBjbGlwcnVsZX07XHJcbiAgICAgICAgaWYgKGxlbk1pbiA+IGxlbk1heCkge1xyXG4gICAgICAgICAgICBuZXdHYW1lT3B0aW9ucy5sZW5NYXggPSBsZW5NaW47XHJcbiAgICAgICAgICAgIG5ld0dhbWVPcHRpb25zLmxlbk1pbiA9IGxlbk1heDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdHYW1lT3B0aW9ucy5sZW5NaW4gPSBsZW5NaW47XHJcbiAgICAgICAgICAgIG5ld0dhbWVPcHRpb25zLmxlbk1heCA9IGxlbk1heDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0R2FtZU9wdGlvbnMobmV3R2FtZU9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICggPGRpdiBjbGFzc05hbWU9XCJ0ck9wdGlvbnNEaXZcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiQWxpZ25DZW50ZXJcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkVhc3kgbW9kZSBzaG93cyB3aGljaCBsZXR0ZXJzIGFyZSBjb3JyZWN0IG9yIGluIHRoZSB3cm9uZyBwbGFjZS4gSGFyZCBtb2RlIHNob3dzIGNvdW50cyBvbmx5LlwiPkRpZmZpY3VsdHk8L2gzPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT0nYnV0dG9ubW9kZWVhc3knIGNsYXNzTmFtZT17bW9kZSA9PT0gJ2Vhc3knID8gJ3RyT3B0aW9uc1JhZGlvT24nIDogJ3RyT3B0aW9uc1JhZGlvT2ZmJ30gb25DbGljaz17KCkgPT4ge3NldE1vZGUoJ2Vhc3knKTt9fS8+XHJcbiAgICAgICAgICAgIDxzcGFuIGtleT0nbGFiZWxtb2RlZWFzeScgY2xhc3NOYW1lPVwidHJPcHRpb25zUmFkaW9MYWJlbFwiPkVhc3k8L3NwYW4+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PSdidXR0b25tb2RlaGFyZCcgY2xhc3NOYW1lPXttb2RlID09PSAnaGFyZCcgPyAndHJPcHRpb25zUmFkaW9PbicgOiAndHJPcHRpb25zUmFkaW9PZmYnfSBvbkNsaWNrPXsoKSA9PiB7c2V0TW9kZSgnaGFyZCcpO319Lz5cclxuICAgICAgICAgICAgPHNwYW4ga2V5PSdsYWJlbG1vZGVoYXJkJyBjbGFzc05hbWU9XCJ0ck9wdGlvbnNSYWRpb0xhYmVsXCI+SGFyZDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT0nYnV0dG9udmFsaWRvbmx5J1xyXG4gICAgICAgICAgICAgY2xhc3NOYW1lPXt2YWxpZE9ubHkgPyAndHJPcHRpb25zQ2hlY2tib3hPbicgOiAndHJPcHRpb25zQ2hlY2tib3hPZmYnfVxyXG4gICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJXaGV0aGVyIGd1ZXNzIG11c3QgYmUgdmFsaWQgd29yZHNcIlxyXG4gICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFZhbGlkT25seSghdmFsaWRPbmx5KTt9fVxyXG4gICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHNwYW4ga2V5PSdsYWJlbHZhbGlkb25seScgY2xhc3NOYW1lPSd0ck9wdGlvbnNDaGVja2JveExhYmVsJz5HdWVzc2VzIG11c3QgYmUgdmFsaWQgd29yZHM8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIkFsaWduQ2VudGVyXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJTZXQgY2xpcGJvYXJkIGZlYXR1cmUgdG8gY2FwdHVyZSB0aGUgZ3Vlc3NlcyBmb3IganVzdCB0aGUgcm91bmQsIGp1c3QgdGhlIHNldCwgb3IgYWxsIHNldHMuXCI+Q2xpcGJvYXJkIENhcHR1cmU8L2gzPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT0nYnV0dG9uY2xpcHJvdW5kJyBjbGFzc05hbWU9e2NsaXBydWxlID09PSAncm91bmQnID8gJ3RyT3B0aW9uc1JhZGlvT24nIDogJ3RyT3B0aW9uc1JhZGlvT2ZmJ30gb25DbGljaz17KCkgPT4ge3NldENsaXBydWxlKCdyb3VuZCcpO319Lz5cclxuICAgICAgICAgICAgPHNwYW4ga2V5PSdsYWJlbGNsaXByb3VuZCcgY2xhc3NOYW1lPVwidHJPcHRpb25zUmFkaW9MYWJlbFwiPlJvdW5kPC9zcGFuPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT0nYnV0dG9uY2xpcHNldCcgY2xhc3NOYW1lPXtjbGlwcnVsZSA9PT0gJ3NldCcgPyAndHJPcHRpb25zUmFkaW9PbicgOiAndHJPcHRpb25zUmFkaW9PZmYnfSBvbkNsaWNrPXsoKSA9PiB7c2V0Q2xpcHJ1bGUoJ3NldCcpO319Lz5cclxuICAgICAgICAgICAgPHNwYW4ga2V5PSdsYWJlbGNsaXBzZXQnIGNsYXNzTmFtZT1cInRyT3B0aW9uc1JhZGlvTGFiZWxcIj5TZXQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PSdidXR0b25jbGlwYWxsJyBjbGFzc05hbWU9e2NsaXBydWxlID09PSAnYWxsJyA/ICd0ck9wdGlvbnNSYWRpb09uJyA6ICd0ck9wdGlvbnNSYWRpb09mZid9IG9uQ2xpY2s9eygpID0+IHtzZXRDbGlwcnVsZSgnYWxsJyk7fX0vPlxyXG4gICAgICAgICAgICA8c3BhbiBrZXk9J2xhYmVsY2xpcGFsbCcgY2xhc3NOYW1lPVwidHJPcHRpb25zUmFkaW9MYWJlbFwiPkFsbDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndtX2xlbkRpdlwiPlxyXG4gICAgICAgICAgICA8aDM+U3RhcnQgTGVuZ3RoPC9oMz5cclxuICAgICAgICAgICAge2xlbkFsbG93ZWRBcnJheS5tYXAoKG4pID0+IChcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtuID09PSBsZW5NaW4gPyAnd21fbGVuU2VsZWN0ZWQnIDogJ3dtX2xlblVuc2VsZWN0ZWQnfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17YGNob29zZUxlbk1pbiR7bn1gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0TGVuTWluKG4pOyB9IH1cclxuICAgICAgICAgICAgICAgID57bn1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPGgzPkVuZCBMZW5ndGg8L2gzPlxyXG4gICAgICAgICAgICB7bGVuQWxsb3dlZEFycmF5Lm1hcCgobikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e24gPT09IGxlbk1heCA/ICd3bV9sZW5TZWxlY3RlZCcgOiAnd21fbGVuVW5zZWxlY3RlZCd9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtgY2hvb3NlTGVuTWF4JHtufWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRMZW5NYXgobik7IH0gfVxyXG4gICAgICAgICAgICAgICAgPntufVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid21fc3RhcnRQdXp6bGVEaXZcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJzdGFydFB1enpsZVwiIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4geyBoYW5kbGVTdGFydFB1enpsZSgpOyB9IH0+XHJcbiAgICAgICAgICAgICAgICBTdGFydCBQdXp6bGVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZXRXTU9wdGlvbnM7Il0sInNvdXJjZVJvb3QiOiIifQ==