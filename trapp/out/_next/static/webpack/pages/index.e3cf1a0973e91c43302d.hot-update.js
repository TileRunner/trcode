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
      mode: mode,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vd21vcHRpb25zLmpzIl0sIm5hbWVzIjpbIkdldFdNT3B0aW9ucyIsInNldEdhbWVPcHRpb25zIiwibGVuQWxsb3dlZEFycmF5IiwibW9kZSIsInNldE1vZGUiLCJ1c2VTdGF0ZSIsImxlbk1pbiIsInNldExlbk1pbiIsImxlbk1heCIsInNldExlbk1heCIsImNsaXBydWxlIiwic2V0Q2xpcHJ1bGUiLCJoYW5kbGVTdGFydFB1enpsZSIsIm5ld0dhbWVPcHRpb25zIiwic2V0IiwibWFwIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBc0I7QUFBQTs7QUFDdkMsUUFBTUMsZUFBZSxHQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsTUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkYsK0NBQVEsQ0FBQyxDQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCSiwrQ0FBUSxDQUFDLENBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJOLCtDQUFRLENBQUMsT0FBRCxDQUF4Qzs7QUFDQSxRQUFNTyxpQkFBaUIsR0FBRyxNQUFNO0FBQzVCLFFBQUlDLGNBQWMsR0FBRztBQUFDQyxTQUFHLEVBQUUsSUFBTjtBQUFZWCxVQUFJLEVBQUVBLElBQWxCO0FBQXdCTyxjQUFRLEVBQUVBO0FBQWxDLEtBQXJCOztBQUNBLFFBQUlKLE1BQU0s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QUNhLEdBQWhCLENBQXFCQyxDQUFELGlCQUNqQjtBQUFRLGlCQUFTLEVBQUVBLENBQUMsS0FBS1YsTUFBTixHQUFlLGdCQUFmLEdBQWtDLGtCQUFyRDtBQUVJLGVBQU8sRUFBRSxNQUFNO0FBQUVDLG1CQUFTLENBQUNTLENBQUQsQ0FBVDtBQUFlLFNBRnBDO0FBQUEsa0JBR0VBO0FBSEYsU0FDVSxlQUFjQSxDQUFFLEVBRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREgsQ0FGTCxlQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRKLEVBVUtkLGVBQWUsQ0FBQ2EsR0FBaEIsQ0FBcUJDLENBQUQsaUJBQ2pCO0FBQVEsaUJBQVMsRUFBRUEsQ0FBQyxLQUFLUixNQUFOLEdBQWUsZ0JBQWYsR0FBa0Msa0JBQXJEO0FBRUksZUFBTyxFQUFFLE1BQU07QUFBRUMsbUJBQVMsQ0FBQ08sQ0FBRCxDQUFUO0FBQWUsU0FGcEM7QUFBQSxrQkFHRUE7QUFIRixTQUNVLGVBQWNBLENBQUUsRUFEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESCxDQVZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQkssZUFtQ0w7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQSw2QkFDSTtBQUEwQixpQkFBUyxFQUFDLFVBQXBDO0FBQStDLGVBQU8sRUFBRSxNQUFNO0FBQUVKLDJCQUFpQjtBQUFLLFNBQXRGO0FBQUE7QUFBQSxTQUFZLGFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkNLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFUO0FBeUNILENBMUREOztHQUFNWixZOztLQUFBQSxZO0FBNEROLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUzY2YxYTA5NzNlOTFjNDMzMDJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEdldFdNT3B0aW9ucyA9ICh7c2V0R2FtZU9wdGlvbnN9KSA9PiB7XHJcbiAgICBjb25zdCBsZW5BbGxvd2VkQXJyYXkgPSBbMiwzLDQsNSw2LDcsOCw5XTtcclxuICAgIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKCdlYXN5Jyk7XHJcbiAgICBjb25zdCBbbGVuTWluLCBzZXRMZW5NaW5dID0gdXNlU3RhdGUoNSk7XHJcbiAgICBjb25zdCBbbGVuTWF4LCBzZXRMZW5NYXhdID0gdXNlU3RhdGUoOCk7XHJcbiAgICBjb25zdCBbY2xpcHJ1bGUsIHNldENsaXBydWxlXSA9IHVzZVN0YXRlKCdyb3VuZCcpO1xyXG4gICAgY29uc3QgaGFuZGxlU3RhcnRQdXp6bGUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld0dhbWVPcHRpb25zID0ge3NldDogdHJ1ZSwgbW9kZTogbW9kZSwgY2xpcHJ1bGU6IGNsaXBydWxlfTtcclxuICAgICAgICBpZiAobGVuTWluID4gbGVuTWF4KSB7XHJcbiAgICAgICAgICAgIG5ld0dhbWVPcHRpb25zLmxlbk1heCA9IGxlbk1pbjtcclxuICAgICAgICAgICAgbmV3R2FtZU9wdGlvbnMubGVuTWluID0gbGVuTWF4O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld0dhbWVPcHRpb25zLmxlbk1pbiA9IGxlbk1pbjtcclxuICAgICAgICAgICAgbmV3R2FtZU9wdGlvbnMubGVuTWF4ID0gbGVuTWF4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRHYW1lT3B0aW9ucyhuZXdHYW1lT3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCA8ZGl2IGNsYXNzTmFtZT1cIndtR2V0T3B0aW9uc0RpdlwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJBbGlnbkNlbnRlclwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiRWFzeSBtb2RlIHNob3dzIHdoaWNoIGxldHRlcnMgYXJlIGNvcnJlY3Qgb3IgaW4gdGhlIHdyb25nIHBsYWNlLiBIYXJkIG1vZGUgc2hvd3MgY291bnRzIG9ubHkuXCI+RGlmZmljdWx0eTwvaDM+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PSdidXR0b25tb2RlZWFzeScgY2xhc3NOYW1lPXttb2RlID09PSAnZWFzeScgPyAnd21SYWRpb09uJyA6ICd3bVJhZGlvT2ZmJ30gb25DbGljaz17KCkgPT4ge3NldE1vZGUoJ2Vhc3knKTt9fS8+XHJcbiAgICAgICAgICAgIDxzcGFuIGtleT0nbGFiZWxtb2RlZWFzeScgY2xhc3NOYW1lPVwid21SYWRpb0xhYmVsXCI+RWFzeTwvc3Bhbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9J2J1dHRvbm1vZGVoYXJkJyBjbGFzc05hbWU9e21vZGUgPT09ICdoYXJkJyA/ICd3bVJhZGlvT24nIDogJ3dtUmFkaW9PZmYnfSBvbkNsaWNrPXsoKSA9PiB7c2V0TW9kZSgnaGFyZCcpO319Lz5cclxuICAgICAgICAgICAgPHNwYW4ga2V5PSdsYWJlbG1vZGVoYXJkJyBjbGFzc05hbWU9XCJ3bVJhZGlvTGFiZWxcIj5IYXJkPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJBbGlnbkNlbnRlclwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiU2V0IGNsaXBib2FyZCBmZWF0dXJlIHRvIGNhcHR1cmUgdGhlIGd1ZXNzZXMgZm9yIGp1c3QgdGhlIHJvdW5kLCBqdXN0IHRoZSBzZXQsIG9yIGFsbCBzZXRzLlwiPkNsaXBib2FyZCBDYXB0dXJlPC9oMz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9J2J1dHRvbmNsaXByb3VuZCcgY2xhc3NOYW1lPXtjbGlwcnVsZSA9PT0gJ3JvdW5kJyA/ICd3bVJhZGlvT24nIDogJ3dtUmFkaW9PZmYnfSBvbkNsaWNrPXsoKSA9PiB7c2V0Q2xpcHJ1bGUoJ3JvdW5kJyk7fX0vPlxyXG4gICAgICAgICAgICA8c3BhbiBrZXk9J2xhYmVsY2xpcHJvdW5kJyBjbGFzc05hbWU9XCJ3bVJhZGlvTGFiZWxcIj5Sb3VuZDwvc3Bhbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9J2J1dHRvbmNsaXBzZXQnIGNsYXNzTmFtZT17Y2xpcHJ1bGUgPT09ICdzZXQnID8gJ3dtUmFkaW9PbicgOiAnd21SYWRpb09mZid9IG9uQ2xpY2s9eygpID0+IHtzZXRDbGlwcnVsZSgnc2V0Jyk7fX0vPlxyXG4gICAgICAgICAgICA8c3BhbiBrZXk9J2xhYmVsY2xpcHNldCcgY2xhc3NOYW1lPVwid21SYWRpb0xhYmVsXCI+U2V0PC9zcGFuPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT0nYnV0dG9uY2xpcGFsbCcgY2xhc3NOYW1lPXtjbGlwcnVsZSA9PT0gJ2FsbCcgPyAnd21SYWRpb09uJyA6ICd3bVJhZGlvT2ZmJ30gb25DbGljaz17KCkgPT4ge3NldENsaXBydWxlKCdhbGwnKTt9fS8+XHJcbiAgICAgICAgICAgIDxzcGFuIGtleT0nbGFiZWxjbGlwYWxsJyBjbGFzc05hbWU9XCJ3bVJhZGlvTGFiZWxcIj5BbGw8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3bV9sZW5EaXZcIj5cclxuICAgICAgICAgICAgPGgzPlN0YXJ0IExlbmd0aDwvaDM+XHJcbiAgICAgICAgICAgIHtsZW5BbGxvd2VkQXJyYXkubWFwKChuKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17biA9PT0gbGVuTWluID8gJ3dtX2xlblNlbGVjdGVkJyA6ICd3bV9sZW5VbnNlbGVjdGVkJ31cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2BjaG9vc2VMZW5NaW4ke259YH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldExlbk1pbihuKTsgfSB9XHJcbiAgICAgICAgICAgICAgICA+e259XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxoMz5FbmQgTGVuZ3RoPC9oMz5cclxuICAgICAgICAgICAge2xlbkFsbG93ZWRBcnJheS5tYXAoKG4pID0+IChcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtuID09PSBsZW5NYXggPyAnd21fbGVuU2VsZWN0ZWQnIDogJ3dtX2xlblVuc2VsZWN0ZWQnfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17YGNob29zZUxlbk1heCR7bn1gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0TGVuTWF4KG4pOyB9IH1cclxuICAgICAgICAgICAgICAgID57bn1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndtX3N0YXJ0UHV6emxlRGl2XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PVwic3RhcnRQdXp6bGVcIiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlU3RhcnRQdXp6bGUoKTsgfSB9PlxyXG4gICAgICAgICAgICAgICAgU3RhcnQgUHV6emxlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2V0V01PcHRpb25zOyJdLCJzb3VyY2VSb290IjoiIn0=