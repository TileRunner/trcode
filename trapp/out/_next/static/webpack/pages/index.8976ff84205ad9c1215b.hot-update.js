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
        "data-toggle": "tooltip",
        title: "Set clipboard feature to capture the guesses for just the round, just the set, or all sets.",
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
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: cliprule === 'all' ? 'wmRadioOn' : 'wmRadioOff',
        onClick: () => {
          setCliprule('all');
        }
      }, 'buttonclipall', false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "wmRadioLabel",
        children: "All"
      }, 'labelclipall', false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "wm_lenDiv",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Start Length"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }, undefined), lenAllowedArray.map(n => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: n === lenMin ? 'wm_lenSelected' : 'wm_lenUnselected',
        onClick: () => {
          setLenMin(n);
        },
        children: n
      }, `chooseLenMin${n}`, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "End Length"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, undefined), lenAllowedArray.map(n => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: n === lenMax ? 'wm_lenSelected' : 'wm_lenUnselected',
        onClick: () => {
          setLenMax(n);
        },
        children: n
      }, `chooseLenMax${n}`, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
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
        lineNumber: 56,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vd21vcHRpb25zLmpzIl0sIm5hbWVzIjpbIkdldFdNT3B0aW9ucyIsInNldEdhbWVPcHRpb25zIiwibGVuQWxsb3dlZEFycmF5IiwibW9kZSIsInNldE1vZGUiLCJ1c2VTdGF0ZSIsImxlbk1pbiIsInNldExlbk1pbiIsImxlbk1heCIsInNldExlbk1heCIsImNsaXBydWxlIiwic2V0Q2xpcHJ1bGUiLCJoYW5kbGVTdGFydFB1enpsZSIsIm5ld0dhbWVPcHRpb25zIiwic2V0IiwibWFwIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBc0I7QUFBQTs7QUFDdkMsUUFBTUMsZUFBZSxHQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsTUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkYsK0NBQVEsQ0FBQyxDQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCSiwrQ0FBUSxDQUFDLENBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJOLCtDQUFRLENBQUMsT0FBRCxDQUF4Qzs7QUFDQSxRQUFNTyxpQkFBaUIsR0FBRyxNQUFNO0FBQzVCLFFBQUlDLGNBQWMsR0FBRztBQUFDQyxTQUFHLEVBQUUsSUFBTjtBQUFZWCxVQUFJLEVBQUVBO0FBQWxCLEtBQXJCOztBQUNBLFFBQUlHLE1BQU0sR0FBR0UsTUFBYixFQUFxQjtBQUNqQkss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QUNqQjtBQUFRLGlCQUFTLEVBQUVBLENBQUMsS0FBS1YsTUFBTixHQUFlLGdCQUFmLEdBQWtDLGtCQUFyRDtBQUVJLGVBQU8sRUFBRSxNQUFNO0FBQUVDLG1CQUFTLENBQUNTLENBQUQsQ0FBVDtBQUFlLFNBRnBDO0FBQUEsa0JBR0VBO0FBSEYsU0FDVSxlQUFjQSxDQUFFLEVBRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREgsQ0FGTCxlQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRKLEVBVUtkLGVBQWUsQ0FBQ2EsR0FBaEIsQ0FBcUJDLENBQUQsaUJBQ2pCO0FBQVEsaUJBQVMsRUFBRUEsQ0FBQyxLQUFLUixNQUFOLEdBQWUsZ0JBQWYsR0FBa0Msa0JBQXJEO0FBRUksZUFBTyxFQUFFLE1BQU07QUFBRUMsbUJBQVMsQ0FBQ08sQ0FBRCxDQUFUO0FBQWUsU0FGcEM7QUFBQSxrQkFHRUE7QUFIRixTQUNVLGVBQWNBLENBQUUsRUFEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESCxDQVZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQkssZUFtQ0w7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQSw2QkFDSTtBQUEwQixpQkFBUyxFQUFDLFVBQXBDO0FBQStDLGVBQU8sRUFBRSxNQUFNO0FBQUVKLDJCQUFpQjtBQUFLLFNBQXRGO0FBQUE7QUFBQSxTQUFZLGFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkNLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFUO0FBeUNILENBMUREOztHQUFNWixZOztLQUFBQSxZO0FBNEROLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg5NzZmZjg0MjA1YWQ5YzEyMTViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEdldFdNT3B0aW9ucyA9ICh7c2V0R2FtZU9wdGlvbnN9KSA9PiB7XHJcbiAgICBjb25zdCBsZW5BbGxvd2VkQXJyYXkgPSBbMiwzLDQsNSw2LDcsOCw5XTtcclxuICAgIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKCdlYXN5Jyk7XHJcbiAgICBjb25zdCBbbGVuTWluLCBzZXRMZW5NaW5dID0gdXNlU3RhdGUoNSk7XHJcbiAgICBjb25zdCBbbGVuTWF4LCBzZXRMZW5NYXhdID0gdXNlU3RhdGUoOCk7XHJcbiAgICBjb25zdCBbY2xpcHJ1bGUsIHNldENsaXBydWxlXSA9IHVzZVN0YXRlKCdyb3VuZCcpO1xyXG4gICAgY29uc3QgaGFuZGxlU3RhcnRQdXp6bGUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld0dhbWVPcHRpb25zID0ge3NldDogdHJ1ZSwgbW9kZTogbW9kZX07XHJcbiAgICAgICAgaWYgKGxlbk1pbiA+IGxlbk1heCkge1xyXG4gICAgICAgICAgICBuZXdHYW1lT3B0aW9ucy5sZW5NYXggPSBsZW5NaW47XHJcbiAgICAgICAgICAgIG5ld0dhbWVPcHRpb25zLmxlbk1pbiA9IGxlbk1heDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdHYW1lT3B0aW9ucy5sZW5NaW4gPSBsZW5NaW47XHJcbiAgICAgICAgICAgIG5ld0dhbWVPcHRpb25zLmxlbk1heCA9IGxlbk1heDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0R2FtZU9wdGlvbnMobmV3R2FtZU9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICggPGRpdiBjbGFzc05hbWU9XCJ3bUdldE9wdGlvbnNEaXZcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiQWxpZ25DZW50ZXJcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkVhc3kgbW9kZSBzaG93cyB3aGljaCBsZXR0ZXJzIGFyZSBjb3JyZWN0IG9yIGluIHRoZSB3cm9uZyBwbGFjZS4gSGFyZCBtb2RlIHNob3dzIGNvdW50cyBvbmx5LlwiPkRpZmZpY3VsdHk8L2gzPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT0nYnV0dG9ubW9kZWVhc3knIGNsYXNzTmFtZT17bW9kZSA9PT0gJ2Vhc3knID8gJ3dtUmFkaW9PbicgOiAnd21SYWRpb09mZid9IG9uQ2xpY2s9eygpID0+IHtzZXRNb2RlKCdlYXN5Jyk7fX0vPlxyXG4gICAgICAgICAgICA8c3BhbiBrZXk9J2xhYmVsbW9kZWVhc3knIGNsYXNzTmFtZT1cIndtUmFkaW9MYWJlbFwiPkVhc3k8L3NwYW4+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PSdidXR0b25tb2RlaGFyZCcgY2xhc3NOYW1lPXttb2RlID09PSAnaGFyZCcgPyAnd21SYWRpb09uJyA6ICd3bVJhZGlvT2ZmJ30gb25DbGljaz17KCkgPT4ge3NldE1vZGUoJ2hhcmQnKTt9fS8+XHJcbiAgICAgICAgICAgIDxzcGFuIGtleT0nbGFiZWxtb2RlaGFyZCcgY2xhc3NOYW1lPVwid21SYWRpb0xhYmVsXCI+SGFyZDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiQWxpZ25DZW50ZXJcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlNldCBjbGlwYm9hcmQgZmVhdHVyZSB0byBjYXB0dXJlIHRoZSBndWVzc2VzIGZvciBqdXN0IHRoZSByb3VuZCwganVzdCB0aGUgc2V0LCBvciBhbGwgc2V0cy5cIj5DbGlwYm9hcmQgQ2FwdHVyZTwvaDM+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PSdidXR0b25jbGlwcm91bmQnIGNsYXNzTmFtZT17Y2xpcHJ1bGUgPT09ICdyb3VuZCcgPyAnd21SYWRpb09uJyA6ICd3bVJhZGlvT2ZmJ30gb25DbGljaz17KCkgPT4ge3NldENsaXBydWxlKCdyb3VuZCcpO319Lz5cclxuICAgICAgICAgICAgPHNwYW4ga2V5PSdsYWJlbGNsaXByb3VuZCcgY2xhc3NOYW1lPVwid21SYWRpb0xhYmVsXCI+Um91bmQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PSdidXR0b25jbGlwc2V0JyBjbGFzc05hbWU9e2NsaXBydWxlID09PSAnc2V0JyA/ICd3bVJhZGlvT24nIDogJ3dtUmFkaW9PZmYnfSBvbkNsaWNrPXsoKSA9PiB7c2V0Q2xpcHJ1bGUoJ3NldCcpO319Lz5cclxuICAgICAgICAgICAgPHNwYW4ga2V5PSdsYWJlbGNsaXBzZXQnIGNsYXNzTmFtZT1cIndtUmFkaW9MYWJlbFwiPlNldDwvc3Bhbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9J2J1dHRvbmNsaXBhbGwnIGNsYXNzTmFtZT17Y2xpcHJ1bGUgPT09ICdhbGwnID8gJ3dtUmFkaW9PbicgOiAnd21SYWRpb09mZid9IG9uQ2xpY2s9eygpID0+IHtzZXRDbGlwcnVsZSgnYWxsJyk7fX0vPlxyXG4gICAgICAgICAgICA8c3BhbiBrZXk9J2xhYmVsY2xpcGFsbCcgY2xhc3NOYW1lPVwid21SYWRpb0xhYmVsXCI+QWxsPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid21fbGVuRGl2XCI+XHJcbiAgICAgICAgICAgIDxoMz5TdGFydCBMZW5ndGg8L2gzPlxyXG4gICAgICAgICAgICB7bGVuQWxsb3dlZEFycmF5Lm1hcCgobikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e24gPT09IGxlbk1pbiA/ICd3bV9sZW5TZWxlY3RlZCcgOiAnd21fbGVuVW5zZWxlY3RlZCd9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtgY2hvb3NlTGVuTWluJHtufWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRMZW5NaW4obik7IH0gfVxyXG4gICAgICAgICAgICAgICAgPntufVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8aDM+RW5kIExlbmd0aDwvaDM+XHJcbiAgICAgICAgICAgIHtsZW5BbGxvd2VkQXJyYXkubWFwKChuKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17biA9PT0gbGVuTWF4ID8gJ3dtX2xlblNlbGVjdGVkJyA6ICd3bV9sZW5VbnNlbGVjdGVkJ31cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2BjaG9vc2VMZW5NYXgke259YH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldExlbk1heChuKTsgfSB9XHJcbiAgICAgICAgICAgICAgICA+e259XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3bV9zdGFydFB1enpsZURpdlwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cInN0YXJ0UHV6emxlXCIgY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZVN0YXJ0UHV6emxlKCk7IH0gfT5cclxuICAgICAgICAgICAgICAgIFN0YXJ0IFB1enpsZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2Pik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdldFdNT3B0aW9uczsiXSwic291cmNlUm9vdCI6IiJ9