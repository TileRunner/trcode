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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vd21vcHRpb25zLmpzIl0sIm5hbWVzIjpbIkdldFdNT3B0aW9ucyIsInNldEdhbWVPcHRpb25zIiwibGVuQWxsb3dlZEFycmF5IiwibW9kZSIsInNldE1vZGUiLCJ1c2VTdGF0ZSIsImxlbk1pbiIsInNldExlbk1pbiIsImxlbk1heCIsInNldExlbk1heCIsImNsaXBydWxlIiwic2V0Q2xpcHJ1bGUiLCJoYW5kbGVTdGFydFB1enpsZSIsIm5ld0dhbWVPcHRpb25zIiwic2V0IiwibWFwIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBc0I7QUFBQTs7QUFDdkMsUUFBTUMsZUFBZSxHQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsTUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkYsK0NBQVEsQ0FBQyxDQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCSiwrQ0FBUSxDQUFDLENBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJOLCtDQUFRLENBQUMsT0FBRCxDQUF4Qzs7QUFDQSxRQUFNTyxpQkFBaUIsR0FBRyxNQUFNO0FBQzVCLFFBQUlDLGNBQWMsR0FBRztBQUFDQyxTQUFHLEVBQUUsSUFBTjtBQUFZWCxVQUFJLEVBQUVBO0FBQWxCLEtBQXJCOztBQUNBLFFBQUlHLE1BQU0sR0FBR0UsTUFBYixFQUFxQjtBQUNqQkss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QWYsR0FBa0Msa0JBQXJEO0FBRUksZUFBTyxFQUFFLE1BQU07QUFBRUMsbUJBQVMsQ0FBQ08sQ0FBRCxDQUFUO0FBQWUsU0FGcEM7QUFBQSxrQkFHRUE7QUFIRixTQUNVLGVBQWNBLENBQUUsRUFEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESCxDQVZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmSyxlQWlDTDtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBLDZCQUNJO0FBQTBCLGlCQUFTLEVBQUMsVUFBcEM7QUFBK0MsZUFBTyxFQUFFLE1BQU07QUFBRUosMkJBQWlCO0FBQUssU0FBdEY7QUFBQTtBQUFBLFNBQVksYUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQ0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVQ7QUF1Q0gsQ0F4REQ7O0dBQU1aLFk7O0tBQUFBLFk7QUEwRE4sK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzgzYzE3MGRlMjlkMGQyOTM3MzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgR2V0V01PcHRpb25zID0gKHtzZXRHYW1lT3B0aW9uc30pID0+IHtcclxuICAgIGNvbnN0IGxlbkFsbG93ZWRBcnJheSA9IFsyLDMsNCw1LDYsNyw4LDldO1xyXG4gICAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUoJ2Vhc3knKTtcclxuICAgIGNvbnN0IFtsZW5NaW4sIHNldExlbk1pbl0gPSB1c2VTdGF0ZSg1KTtcclxuICAgIGNvbnN0IFtsZW5NYXgsIHNldExlbk1heF0gPSB1c2VTdGF0ZSg4KTtcclxuICAgIGNvbnN0IFtjbGlwcnVsZSwgc2V0Q2xpcHJ1bGVdID0gdXNlU3RhdGUoJ3JvdW5kJyk7XHJcbiAgICBjb25zdCBoYW5kbGVTdGFydFB1enpsZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgbmV3R2FtZU9wdGlvbnMgPSB7c2V0OiB0cnVlLCBtb2RlOiBtb2RlfTtcclxuICAgICAgICBpZiAobGVuTWluID4gbGVuTWF4KSB7XHJcbiAgICAgICAgICAgIG5ld0dhbWVPcHRpb25zLmxlbk1heCA9IGxlbk1pbjtcclxuICAgICAgICAgICAgbmV3R2FtZU9wdGlvbnMubGVuTWluID0gbGVuTWF4O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld0dhbWVPcHRpb25zLmxlbk1pbiA9IGxlbk1pbjtcclxuICAgICAgICAgICAgbmV3R2FtZU9wdGlvbnMubGVuTWF4ID0gbGVuTWF4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRHYW1lT3B0aW9ucyhuZXdHYW1lT3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCA8ZGl2IGNsYXNzTmFtZT1cIndtR2V0T3B0aW9uc0RpdlwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJBbGlnbkNlbnRlclwiPkRpZmZpY3VsdHk8L2gzPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT0nYnV0dG9ubW9kZWVhc3knIGNsYXNzTmFtZT17bW9kZSA9PT0gJ2Vhc3knID8gJ3dtUmFkaW9PbicgOiAnd21SYWRpb09mZid9IG9uQ2xpY2s9eygpID0+IHtzZXRNb2RlKCdlYXN5Jyk7fX0vPlxyXG4gICAgICAgICAgICA8c3BhbiBrZXk9J2xhYmVsbW9kZWVhc3knIGNsYXNzTmFtZT1cIndtUmFkaW9MYWJlbFwiPkVhc3k8L3NwYW4+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PSdidXR0b25tb2RlaGFyZCcgY2xhc3NOYW1lPXttb2RlID09PSAnaGFyZCcgPyAnd21SYWRpb09uJyA6ICd3bVJhZGlvT2ZmJ30gb25DbGljaz17KCkgPT4ge3NldE1vZGUoJ2hhcmQnKTt9fS8+XHJcbiAgICAgICAgICAgIDxzcGFuIGtleT0nbGFiZWxtb2RlaGFyZCcgY2xhc3NOYW1lPVwid21SYWRpb0xhYmVsXCI+SGFyZDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiQWxpZ25DZW50ZXJcIj5DbGlwYm9hcmQgQ2FwdHVyZTwvaDM+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PSdidXR0b25jbGlwcm91bmQnIGNsYXNzTmFtZT17Y2xpcHJ1bGUgPT09ICdyb3VuZCcgPyAnd21SYWRpb09uJyA6ICd3bVJhZGlvT2ZmJ30gb25DbGljaz17KCkgPT4ge3NldENsaXBydWxlKCdyb3VuZCcpO319Lz5cclxuICAgICAgICAgICAgPHNwYW4ga2V5PSdsYWJlbGNsaXByb3VuZCcgY2xhc3NOYW1lPVwid21SYWRpb0xhYmVsXCI+Um91bmQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PSdidXR0b25jbGlwc2V0JyBjbGFzc05hbWU9e2NsaXBydWxlID09PSAnc2V0JyA/ICd3bVJhZGlvT24nIDogJ3dtUmFkaW9PZmYnfSBvbkNsaWNrPXsoKSA9PiB7c2V0Q2xpcHJ1bGUoJ3NldCcpO319Lz5cclxuICAgICAgICAgICAgPHNwYW4ga2V5PSdsYWJlbGNsaXBzZXQnIGNsYXNzTmFtZT1cIndtUmFkaW9MYWJlbFwiPlNldDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndtX2xlbkRpdlwiPlxyXG4gICAgICAgICAgICA8aDM+U3RhcnQgYXQgbGVuZ3RoOjwvaDM+XHJcbiAgICAgICAgICAgIHtsZW5BbGxvd2VkQXJyYXkubWFwKChuKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17biA9PT0gbGVuTWluID8gJ3dtX2xlblNlbGVjdGVkJyA6ICd3bV9sZW5VbnNlbGVjdGVkJ31cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2BjaG9vc2VMZW5NaW4ke259YH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldExlbk1pbihuKTsgfSB9XHJcbiAgICAgICAgICAgICAgICA+e259XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxoMz5FbmQgYXQgbGVuZ3RoOjwvaDM+XHJcbiAgICAgICAgICAgIHtsZW5BbGxvd2VkQXJyYXkubWFwKChuKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17biA9PT0gbGVuTWF4ID8gJ3dtX2xlblNlbGVjdGVkJyA6ICd3bV9sZW5VbnNlbGVjdGVkJ31cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2BjaG9vc2VMZW5NYXgke259YH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldExlbk1heChuKTsgfSB9XHJcbiAgICAgICAgICAgICAgICA+e259XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3bV9zdGFydFB1enpsZURpdlwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cInN0YXJ0UHV6emxlXCIgY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZVN0YXJ0UHV6emxlKCk7IH0gfT5cclxuICAgICAgICAgICAgICAgIFN0YXJ0IFB1enpsZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2Pik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdldFdNT3B0aW9uczsiXSwic291cmNlUm9vdCI6IiJ9