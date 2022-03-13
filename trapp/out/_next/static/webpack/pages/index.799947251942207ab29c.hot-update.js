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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: mode === 'easy' ? 'wmRadioOn' : 'wmRadioOff',
      onClick: () => {
        setMode('easy');
      }
    }, 'buttonmodeeasy', false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: "wmRadioLabel",
      children: "Easy"
    }, 'labelmodeeasy', false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: mode === 'hard' ? 'wmRadioOn' : 'wmRadioOff',
      onClick: () => {
        setMode('hard');
      }
    }, 'buttonmodehard', false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: "wmRadioLabel",
      children: "Hard"
    }, 'labelmodehard', false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Clipboard capture:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: cliprule === 'round' ? 'wmRadioOn' : 'wmRadioOff',
        onClick: () => {
          setCliprule('round');
        }
      }, 'buttonclipround', false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "wmRadioLabel",
        children: "Round"
      }, 'labelclipround', false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: cliprule === 'set' ? 'wmRadioOn' : 'wmRadioOff',
        onClick: () => {
          setCliprule('set');
        }
      }, 'buttonclipset', false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "wmRadioLabel",
        children: "Set"
      }, 'labelclipset', false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "wm_lenDiv",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "AlignCentre",
        children: "Start at length:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, undefined), lenAllowedArray.map(n => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: n === lenMin ? 'wm_lenSelected' : 'wm_lenUnselected',
        onClick: () => {
          setLenMin(n);
        },
        children: n
      }, `chooseLenMin${n}`, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "End at length:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, undefined), lenAllowedArray.map(n => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: n === lenMax ? 'wm_lenSelected' : 'wm_lenUnselected',
        onClick: () => {
          setLenMax(n);
        },
        children: n
      }, `chooseLenMax${n}`, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
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
        lineNumber: 51,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vd21vcHRpb25zLmpzIl0sIm5hbWVzIjpbIkdldFdNT3B0aW9ucyIsInNldEdhbWVPcHRpb25zIiwibGVuQWxsb3dlZEFycmF5IiwibW9kZSIsInNldE1vZGUiLCJ1c2VTdGF0ZSIsImxlbk1pbiIsInNldExlbk1pbiIsImxlbk1heCIsInNldExlbk1heCIsImNsaXBydWxlIiwic2V0Q2xpcHJ1bGUiLCJoYW5kbGVTdGFydFB1enpsZSIsIm5ld0dhbWVPcHRpb25zIiwic2V0IiwibWFwIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBc0I7QUFBQTs7QUFDdkMsUUFBTUMsZUFBZSxHQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsTUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkYsK0NBQVEsQ0FBQyxDQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCSiwrQ0FBUSxDQUFDLENBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJOLCtDQUFRLENBQUMsT0FBRCxDQUF4Qzs7QUFDQSxRQUFNTyxpQkFBaUIsR0FBRyxNQUFNO0FBQzVCLFFBQUlDLGNBQWMsR0FBRztBQUFDQyxTQUFHLEVBQUUsSUFBTjtBQUFZWCxVQUFJLEVBQUVBO0FBQWxCLEtBQXJCOztBQUNBLFFBQUlHLE1BQU0sR0FBR0UsTUFBYixFQUFxQjtBQUNqQkss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RDFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREgsQ0FWTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkssZUE4Qkw7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQSw2QkFDSTtBQUEwQixpQkFBUyxFQUFDLFVBQXBDO0FBQStDLGVBQU8sRUFBRSxNQUFNO0FBQUVKLDJCQUFpQjtBQUFLLFNBQXRGO0FBQUE7QUFBQSxTQUFZLGFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUJLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFUO0FBb0NILENBckREOztHQUFNWixZOztLQUFBQSxZO0FBdUROLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc5OTk0NzI1MTk0MjIwN2FiMjljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEdldFdNT3B0aW9ucyA9ICh7c2V0R2FtZU9wdGlvbnN9KSA9PiB7XHJcbiAgICBjb25zdCBsZW5BbGxvd2VkQXJyYXkgPSBbMiwzLDQsNSw2LDcsOCw5XTtcclxuICAgIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKCdlYXN5Jyk7XHJcbiAgICBjb25zdCBbbGVuTWluLCBzZXRMZW5NaW5dID0gdXNlU3RhdGUoNSk7XHJcbiAgICBjb25zdCBbbGVuTWF4LCBzZXRMZW5NYXhdID0gdXNlU3RhdGUoOCk7XHJcbiAgICBjb25zdCBbY2xpcHJ1bGUsIHNldENsaXBydWxlXSA9IHVzZVN0YXRlKCdyb3VuZCcpO1xyXG4gICAgY29uc3QgaGFuZGxlU3RhcnRQdXp6bGUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld0dhbWVPcHRpb25zID0ge3NldDogdHJ1ZSwgbW9kZTogbW9kZX07XHJcbiAgICAgICAgaWYgKGxlbk1pbiA+IGxlbk1heCkge1xyXG4gICAgICAgICAgICBuZXdHYW1lT3B0aW9ucy5sZW5NYXggPSBsZW5NaW47XHJcbiAgICAgICAgICAgIG5ld0dhbWVPcHRpb25zLmxlbk1pbiA9IGxlbk1heDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdHYW1lT3B0aW9ucy5sZW5NaW4gPSBsZW5NaW47XHJcbiAgICAgICAgICAgIG5ld0dhbWVPcHRpb25zLmxlbk1heCA9IGxlbk1heDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0R2FtZU9wdGlvbnMobmV3R2FtZU9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICggPGRpdiBjbGFzc05hbWU9XCJ3bUdldE9wdGlvbnNEaXZcIj5cclxuICAgICAgICA8YnV0dG9uIGtleT0nYnV0dG9ubW9kZWVhc3knIGNsYXNzTmFtZT17bW9kZSA9PT0gJ2Vhc3knID8gJ3dtUmFkaW9PbicgOiAnd21SYWRpb09mZid9IG9uQ2xpY2s9eygpID0+IHtzZXRNb2RlKCdlYXN5Jyk7fX0vPlxyXG4gICAgICAgIDxzcGFuIGtleT0nbGFiZWxtb2RlZWFzeScgY2xhc3NOYW1lPVwid21SYWRpb0xhYmVsXCI+RWFzeTwvc3Bhbj5cclxuICAgICAgICA8YnV0dG9uIGtleT0nYnV0dG9ubW9kZWhhcmQnIGNsYXNzTmFtZT17bW9kZSA9PT0gJ2hhcmQnID8gJ3dtUmFkaW9PbicgOiAnd21SYWRpb09mZid9IG9uQ2xpY2s9eygpID0+IHtzZXRNb2RlKCdoYXJkJyk7fX0vPlxyXG4gICAgICAgIDxzcGFuIGtleT0nbGFiZWxtb2RlaGFyZCcgY2xhc3NOYW1lPVwid21SYWRpb0xhYmVsXCI+SGFyZDwvc3Bhbj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDM+Q2xpcGJvYXJkIGNhcHR1cmU6PC9oMz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9J2J1dHRvbmNsaXByb3VuZCcgY2xhc3NOYW1lPXtjbGlwcnVsZSA9PT0gJ3JvdW5kJyA/ICd3bVJhZGlvT24nIDogJ3dtUmFkaW9PZmYnfSBvbkNsaWNrPXsoKSA9PiB7c2V0Q2xpcHJ1bGUoJ3JvdW5kJyk7fX0vPlxyXG4gICAgICAgICAgICA8c3BhbiBrZXk9J2xhYmVsY2xpcHJvdW5kJyBjbGFzc05hbWU9XCJ3bVJhZGlvTGFiZWxcIj5Sb3VuZDwvc3Bhbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9J2J1dHRvbmNsaXBzZXQnIGNsYXNzTmFtZT17Y2xpcHJ1bGUgPT09ICdzZXQnID8gJ3dtUmFkaW9PbicgOiAnd21SYWRpb09mZid9IG9uQ2xpY2s9eygpID0+IHtzZXRDbGlwcnVsZSgnc2V0Jyk7fX0vPlxyXG4gICAgICAgICAgICA8c3BhbiBrZXk9J2xhYmVsY2xpcHNldCcgY2xhc3NOYW1lPVwid21SYWRpb0xhYmVsXCI+U2V0PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid21fbGVuRGl2XCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJBbGlnbkNlbnRyZVwiPlN0YXJ0IGF0IGxlbmd0aDo8L2gzPlxyXG4gICAgICAgICAgICB7bGVuQWxsb3dlZEFycmF5Lm1hcCgobikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e24gPT09IGxlbk1pbiA/ICd3bV9sZW5TZWxlY3RlZCcgOiAnd21fbGVuVW5zZWxlY3RlZCd9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtgY2hvb3NlTGVuTWluJHtufWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRMZW5NaW4obik7IH0gfVxyXG4gICAgICAgICAgICAgICAgPntufVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8aDM+RW5kIGF0IGxlbmd0aDo8L2gzPlxyXG4gICAgICAgICAgICB7bGVuQWxsb3dlZEFycmF5Lm1hcCgobikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e24gPT09IGxlbk1heCA/ICd3bV9sZW5TZWxlY3RlZCcgOiAnd21fbGVuVW5zZWxlY3RlZCd9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtgY2hvb3NlTGVuTWF4JHtufWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRMZW5NYXgobik7IH0gfVxyXG4gICAgICAgICAgICAgICAgPntufVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid21fc3RhcnRQdXp6bGVEaXZcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJzdGFydFB1enpsZVwiIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4geyBoYW5kbGVTdGFydFB1enpsZSgpOyB9IH0+XHJcbiAgICAgICAgICAgICAgICBTdGFydCBQdXp6bGVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZXRXTU9wdGlvbnM7Il0sInNvdXJjZVJvb3QiOiIifQ==