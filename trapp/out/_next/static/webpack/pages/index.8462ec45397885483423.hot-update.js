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
        lineNumber: 26,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "AlignCenter",
        "data-toggle": "tooltip",
        title: "Easy mode shows which letters are correct or in the wrong place. Hard mode shows counts only.",
        children: "Difficulty"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: mode === 'easy' ? 'trOptionsRadioOn' : 'trOptionsRadioOff',
        onClick: () => {
          setMode('easy');
        }
      }, 'buttonmodeeasy', false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "trOptionsRadioLabel",
        children: "Easy"
      }, 'labelmodeeasy', false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: mode === 'hard' ? 'trOptionsRadioOn' : 'trOptionsRadioOff',
        onClick: () => {
          setMode('hard');
        }
      }, 'buttonmodehard', false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "trOptionsRadioLabel",
        children: "Hard"
      }, 'labelmodehard', false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "AlignCenter",
        "data-toggle": "tooltip",
        title: "Set clipboard feature to capture the guesses for just the round, just the set, or all sets.",
        children: "Clipboard Capture"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: cliprule === 'round' ? 'trOptionsRadioOn' : 'trOptionsRadioOff',
        onClick: () => {
          setCliprule('round');
        }
      }, 'buttonclipround', false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "trOptionsRadioLabel",
        children: "Round"
      }, 'labelclipround', false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: cliprule === 'set' ? 'trOptionsRadioOn' : 'trOptionsRadioOff',
        onClick: () => {
          setCliprule('set');
        }
      }, 'buttonclipset', false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "trOptionsRadioLabel",
        children: "Set"
      }, 'labelclipset', false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: cliprule === 'all' ? 'trOptionsRadioOn' : 'trOptionsRadioOff',
        onClick: () => {
          setCliprule('all');
        }
      }, 'buttonclipall', false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "trOptionsRadioLabel",
        children: "All"
      }, 'labelclipall', false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "wm_lenDiv",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Start Length"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, undefined), lenAllowedArray.map(n => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: n === lenMin ? 'wm_lenSelected' : 'wm_lenUnselected',
        onClick: () => {
          setLenMin(n);
        },
        children: n
      }, `chooseLenMin${n}`, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "End Length"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }, undefined), lenAllowedArray.map(n => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: n === lenMax ? 'wm_lenSelected' : 'wm_lenUnselected',
        onClick: () => {
          setLenMax(n);
        },
        children: n
      }, `chooseLenMax${n}`, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
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
        lineNumber: 63,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vd21vcHRpb25zLmpzIl0sIm5hbWVzIjpbIkdldFdNT3B0aW9ucyIsInNldEdhbWVPcHRpb25zIiwibGVuQWxsb3dlZEFycmF5IiwibW9kZSIsInNldE1vZGUiLCJ1c2VTdGF0ZSIsImxlbk1pbiIsInNldExlbk1pbiIsImxlbk1heCIsInNldExlbk1heCIsImNsaXBydWxlIiwic2V0Q2xpcHJ1bGUiLCJ2YWxpZE9ubHkiLCJzZXRWYWxpZE9ubHkiLCJoYW5kbGVTdGFydFB1enpsZSIsIm5ld0dhbWVPcHRpb25zIiwic2V0IiwibWFwIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBc0I7QUFBQTs7QUFDdkMsUUFBTUMsZUFBZSxHQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsTUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkYsK0NBQVEsQ0FBQyxDQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCSiwrQ0FBUSxDQUFDLENBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJOLCtDQUFRLENBQUMsT0FBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDTyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QlIsK0NBQVEsQ0FBQyxLQUFELENBQTFDLENBTnVDLENBTVk7O0FBQ25ELFFBQU1TLGlCQUFpQixHQUFHLE1BQU07QUFD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LGVBQVMsRUFBQyxtQkFBZjtBQUFBLDZCQUNJO0FBQTBCLGlCQUFTLEVBQUMsVUFBcEM7QUFBK0MsZUFBTyxFQUFFLE1BQU07QUFBRUosMkJBQWlCO0FBQUssU0FBdEY7QUFBQTtBQUFBLFNBQVksYUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6Q0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVQ7QUErQ0gsQ0FqRUQ7O0dBQU1kLFk7O0tBQUFBLFk7QUFtRU4sK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODQ2MmVjNDUzOTc4ODU0ODM0MjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgR2V0V01PcHRpb25zID0gKHtzZXRHYW1lT3B0aW9uc30pID0+IHtcclxuICAgIGNvbnN0IGxlbkFsbG93ZWRBcnJheSA9IFsyLDMsNCw1LDYsNyw4LDldO1xyXG4gICAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUoJ2Vhc3knKTtcclxuICAgIGNvbnN0IFtsZW5NaW4sIHNldExlbk1pbl0gPSB1c2VTdGF0ZSg1KTtcclxuICAgIGNvbnN0IFtsZW5NYXgsIHNldExlbk1heF0gPSB1c2VTdGF0ZSg4KTtcclxuICAgIGNvbnN0IFtjbGlwcnVsZSwgc2V0Q2xpcHJ1bGVdID0gdXNlU3RhdGUoJ3JvdW5kJyk7XHJcbiAgICBjb25zdCBbdmFsaWRPbmx5LCBzZXRWYWxpZE9ubHldID0gdXNlU3RhdGUoZmFsc2UpOyAvLyB3aGV0aGVyIGd1ZXNzZXMgbXVzdCBiZSB2YWxpZCB3b3Jkc1xyXG4gICAgY29uc3QgaGFuZGxlU3RhcnRQdXp6bGUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld0dhbWVPcHRpb25zID0ge3NldDogdHJ1ZSwgbW9kZTogbW9kZSwgdmFsaWRPbmx5OiB2YWxpZE9ubHksIGNsaXBydWxlOiBjbGlwcnVsZX07XHJcbiAgICAgICAgaWYgKGxlbk1pbiA+IGxlbk1heCkge1xyXG4gICAgICAgICAgICBuZXdHYW1lT3B0aW9ucy5sZW5NYXggPSBsZW5NaW47XHJcbiAgICAgICAgICAgIG5ld0dhbWVPcHRpb25zLmxlbk1pbiA9IGxlbk1heDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdHYW1lT3B0aW9ucy5sZW5NaW4gPSBsZW5NaW47XHJcbiAgICAgICAgICAgIG5ld0dhbWVPcHRpb25zLmxlbk1heCA9IGxlbk1heDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0R2FtZU9wdGlvbnMobmV3R2FtZU9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICggPGRpdiBjbGFzc05hbWU9XCJ0ck9wdGlvbnNEaXZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dmFsaWRPbmx5ID8gXCJ0ckNoZWNrYm94IE9uXCIgOiBcInRyQ2hlY2tib3hcIn1cclxuICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiV2hldGhlciBndWVzcyBtdXN0IGJlIHZhbGlkIHdvcmRzXCJcclxuICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRWYWxpZE9ubHkoIXZhbGlkT25seSk7fX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxsYWJlbD5HdWVzc2VzIG11c3QgYmUgdmFsaWQgd29yZHM8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJBbGlnbkNlbnRlclwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiRWFzeSBtb2RlIHNob3dzIHdoaWNoIGxldHRlcnMgYXJlIGNvcnJlY3Qgb3IgaW4gdGhlIHdyb25nIHBsYWNlLiBIYXJkIG1vZGUgc2hvd3MgY291bnRzIG9ubHkuXCI+RGlmZmljdWx0eTwvaDM+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PSdidXR0b25tb2RlZWFzeScgY2xhc3NOYW1lPXttb2RlID09PSAnZWFzeScgPyAndHJPcHRpb25zUmFkaW9PbicgOiAndHJPcHRpb25zUmFkaW9PZmYnfSBvbkNsaWNrPXsoKSA9PiB7c2V0TW9kZSgnZWFzeScpO319Lz5cclxuICAgICAgICAgICAgPHNwYW4ga2V5PSdsYWJlbG1vZGVlYXN5JyBjbGFzc05hbWU9XCJ0ck9wdGlvbnNSYWRpb0xhYmVsXCI+RWFzeTwvc3Bhbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9J2J1dHRvbm1vZGVoYXJkJyBjbGFzc05hbWU9e21vZGUgPT09ICdoYXJkJyA/ICd0ck9wdGlvbnNSYWRpb09uJyA6ICd0ck9wdGlvbnNSYWRpb09mZid9IG9uQ2xpY2s9eygpID0+IHtzZXRNb2RlKCdoYXJkJyk7fX0vPlxyXG4gICAgICAgICAgICA8c3BhbiBrZXk9J2xhYmVsbW9kZWhhcmQnIGNsYXNzTmFtZT1cInRyT3B0aW9uc1JhZGlvTGFiZWxcIj5IYXJkPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJBbGlnbkNlbnRlclwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiU2V0IGNsaXBib2FyZCBmZWF0dXJlIHRvIGNhcHR1cmUgdGhlIGd1ZXNzZXMgZm9yIGp1c3QgdGhlIHJvdW5kLCBqdXN0IHRoZSBzZXQsIG9yIGFsbCBzZXRzLlwiPkNsaXBib2FyZCBDYXB0dXJlPC9oMz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9J2J1dHRvbmNsaXByb3VuZCcgY2xhc3NOYW1lPXtjbGlwcnVsZSA9PT0gJ3JvdW5kJyA/ICd0ck9wdGlvbnNSYWRpb09uJyA6ICd0ck9wdGlvbnNSYWRpb09mZid9IG9uQ2xpY2s9eygpID0+IHtzZXRDbGlwcnVsZSgncm91bmQnKTt9fS8+XHJcbiAgICAgICAgICAgIDxzcGFuIGtleT0nbGFiZWxjbGlwcm91bmQnIGNsYXNzTmFtZT1cInRyT3B0aW9uc1JhZGlvTGFiZWxcIj5Sb3VuZDwvc3Bhbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9J2J1dHRvbmNsaXBzZXQnIGNsYXNzTmFtZT17Y2xpcHJ1bGUgPT09ICdzZXQnID8gJ3RyT3B0aW9uc1JhZGlvT24nIDogJ3RyT3B0aW9uc1JhZGlvT2ZmJ30gb25DbGljaz17KCkgPT4ge3NldENsaXBydWxlKCdzZXQnKTt9fS8+XHJcbiAgICAgICAgICAgIDxzcGFuIGtleT0nbGFiZWxjbGlwc2V0JyBjbGFzc05hbWU9XCJ0ck9wdGlvbnNSYWRpb0xhYmVsXCI+U2V0PC9zcGFuPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT0nYnV0dG9uY2xpcGFsbCcgY2xhc3NOYW1lPXtjbGlwcnVsZSA9PT0gJ2FsbCcgPyAndHJPcHRpb25zUmFkaW9PbicgOiAndHJPcHRpb25zUmFkaW9PZmYnfSBvbkNsaWNrPXsoKSA9PiB7c2V0Q2xpcHJ1bGUoJ2FsbCcpO319Lz5cclxuICAgICAgICAgICAgPHNwYW4ga2V5PSdsYWJlbGNsaXBhbGwnIGNsYXNzTmFtZT1cInRyT3B0aW9uc1JhZGlvTGFiZWxcIj5BbGw8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3bV9sZW5EaXZcIj5cclxuICAgICAgICAgICAgPGgzPlN0YXJ0IExlbmd0aDwvaDM+XHJcbiAgICAgICAgICAgIHtsZW5BbGxvd2VkQXJyYXkubWFwKChuKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17biA9PT0gbGVuTWluID8gJ3dtX2xlblNlbGVjdGVkJyA6ICd3bV9sZW5VbnNlbGVjdGVkJ31cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2BjaG9vc2VMZW5NaW4ke259YH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldExlbk1pbihuKTsgfSB9XHJcbiAgICAgICAgICAgICAgICA+e259XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxoMz5FbmQgTGVuZ3RoPC9oMz5cclxuICAgICAgICAgICAge2xlbkFsbG93ZWRBcnJheS5tYXAoKG4pID0+IChcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtuID09PSBsZW5NYXggPyAnd21fbGVuU2VsZWN0ZWQnIDogJ3dtX2xlblVuc2VsZWN0ZWQnfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17YGNob29zZUxlbk1heCR7bn1gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0TGVuTWF4KG4pOyB9IH1cclxuICAgICAgICAgICAgICAgID57bn1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndtX3N0YXJ0UHV6emxlRGl2XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwic3RhcnRQdXp6bGVcIiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlU3RhcnRQdXp6bGUoKTsgfSB9PlxyXG4gICAgICAgICAgICAgICAgU3RhcnQgUHV6emxlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2V0V01PcHRpb25zOyJdLCJzb3VyY2VSb290IjoiIn0=