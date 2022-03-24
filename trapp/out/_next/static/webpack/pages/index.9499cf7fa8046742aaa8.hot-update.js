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
        lineNumber: 32,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
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
        lineNumber: 35,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: cliprule === 'round' ? 'trOptionsRadioOn' : 'trOptionsRadioOff',
        onClick: () => {
          setCliprule('round');
        }
      }, 'buttonclipround', false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "trOptionsRadioLabel",
        children: "Round"
      }, 'labelclipround', false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: cliprule === 'set' ? 'trOptionsRadioOn' : 'trOptionsRadioOff',
        onClick: () => {
          setCliprule('set');
        }
      }, 'buttonclipset', false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "trOptionsRadioLabel",
        children: "Set"
      }, 'labelclipset', false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: cliprule === 'all' ? 'trOptionsRadioOn' : 'trOptionsRadioOff',
        onClick: () => {
          setCliprule('all');
        }
      }, 'buttonclipall', false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "trOptionsRadioLabel",
        children: "All"
      }, 'labelclipall', false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "wm_lenDiv",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Start Length"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, undefined), lenAllowedArray.map(n => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: n === lenMin ? 'wm_lenSelected' : 'wm_lenUnselected',
        onClick: () => {
          setLenMin(n);
        },
        children: n
      }, `chooseLenMin${n}`, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "End Length"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }, undefined), lenAllowedArray.map(n => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: n === lenMax ? 'wm_lenSelected' : 'wm_lenUnselected',
        onClick: () => {
          setLenMax(n);
        },
        children: n
      }, `chooseLenMax${n}`, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
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
        lineNumber: 62,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd20vd21vcHRpb25zLmpzIl0sIm5hbWVzIjpbIkdldFdNT3B0aW9ucyIsInNldEdhbWVPcHRpb25zIiwibGVuQWxsb3dlZEFycmF5IiwibW9kZSIsInNldE1vZGUiLCJ1c2VTdGF0ZSIsImxlbk1pbiIsInNldExlbk1pbiIsImxlbk1heCIsInNldExlbk1heCIsImNsaXBydWxlIiwic2V0Q2xpcHJ1bGUiLCJ2YWxpZE9ubHkiLCJzZXRWYWxpZE9ubHkiLCJoYW5kbGVTdGFydFB1enpsZSIsIm5ld0dhbWVPcHRpb25zIiwic2V0IiwibWFwIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBc0I7QUFBQTs7QUFDdkMsUUFBTUMsZUFBZSxHQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsTUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkYsK0NBQVEsQ0FBQyxDQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCSiwrQ0FBUSxDQUFDLENBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJOLCtDQUFRLENBQUMsT0FBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDTyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QlIsK0NBQVEsQ0FBQyxLQUFELENBQTFDLENBTnVDLENBTVk7O0FBQ25ELFFBQU1TLGlCQUFpQixHQUFHLE1BQU07QUFDNUIsUUFBSUMsY0FBYyxHQUFHO0FBQUNDLFNBQUcsRUFBRSxJQUFOO0FBQVliLFVBQUksRUFBRUEsSUFBbEI7QUFBd0JTLGVBQVMsRUFBRUEsU0FBbkM7QUFBOENGLGNBQVEsRUFBRUE7QUFBeEQsS0FBckI7O0FBQ0EsUUFBSUosTUFBTSxHQUFHRSxNQUFiLEVBQXFCO0FBQ2pCTyxvQkFBYyxDQUFDUCxNQUFmLEdBQXdCRixNQUF4QjtBQUNBUyxvQkFBYyxDQUFDVCxNQUFmLEdBQXdCRSxNQUF4QjtBQUNILEtBSEQsTUFHTztBQUNITyxvQkFBYyxDQUFDVCxNQUFmLEdBQXdCQSxNQUF4QjtBQUNBUyxvQkFBYyxDQUFDUCxNQUFmLEdBQXdCQSxNQUF4QjtBQUNIOztBQUNEUCxrQkFBYyxDQUFDYyxjQUFELENBQWQ7QUFDSCxHQVZEOztBQVdBLHNCQUFTO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQSw0QkFDTDtBQUFLLGVBQVMsRUFBRUgsU0FBUyxHQUFHLGVBQUgsR0FBcUIsWUFBOUM7QUFDSyxxQkFBWSxTQURqQjtBQUMyQixXQUFLLEVBQUMsbUNBRGpDO0FBRUssYUFBTyxFQUFFLE1BQU07QUFBQ0Msb0JBQVksQ0FBQyxDQUFDRCxTQUFGLENBQVo7QUFBMEIsT0FGL0M7QUFBQSw2QkFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREssZUFPTDtBQUFLLGVBQVMsRUFBRVQsSUFBSSxLQUFLLE1BQVQsR0FBa0IsZUFBbEIsR0FBb0MsWUFBcEQ7QUFDSyxxQkFBWSxTQURqQjtBQUMyQixXQUFLLEVBQUMsaUdBRGpDO0FBRUssYUFBTyxFQUFFLE1BQU07QUFBQ0MsZUFBTyxDQUFDRCxJQUFJLEtBQUssTUFBVCxHQUFrQixNQUFsQixHQUEyQixNQUE1QixDQUFQO0FBQTRDLE9BRmpFO0FBQUEsNkJBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBLLGVBYUw7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsYUFBZDtBQUE0Qix1QkFBWSxTQUF4QztBQUFrRCxhQUFLLEVBQUMsNkZBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBOEIsaUJBQVMsRUFBRU8sUUFBUSxLQUFLLE9BQWIsR0FBdUIsa0JBQXZCLEdBQTRDLG1CQUFyRjtBQUEwRyxlQUFPLEVBQUUsTUFBTTtBQUFDQyxxQkFBVyxDQUFDLE9BQUQsQ0FBWDtBQUFzQjtBQUFoSixTQUFZLGlCQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUEyQixpQkFBUyxFQUFDLHFCQUFyQztBQUFBO0FBQUEsU0FBVSxnQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKLGVBSUk7QUFBNEIsaUJBQVMsRUFBRUQsUUFBUSxLQUFLLEtBQWIsR0FBcUIsa0JBQXJCLEdBQTBDLG1CQUFqRjtBQUFzRyxlQUFPLEVBQUUsTUFBTTtBQUFDQyxxQkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUFvQjtBQUExSSxTQUFZLGVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQUtJO0FBQXlCLGlCQUFTLEVBQUMscUJBQW5DO0FBQUE7QUFBQSxTQUFVLGNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixlQU1JO0FBQTRCLGlCQUFTLEVBQUVELFFBQVEsS0FBSyxLQUFiLEdBQXFCLGtCQUFyQixHQUEwQyxtQkFBakY7QUFBc0csZUFBTyxFQUFFLE1BQU07QUFBQ0MscUJBQVcsQ0FBQyxLQUFELENBQVg7QUFBb0I7QUFBMUksU0FBWSxlQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkosZUFPSTtBQUF5QixpQkFBUyxFQUFDLHFCQUFuQztBQUFBO0FBQUEsU0FBVSxjQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJLLGVBc0JMO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixFQUVLVCxlQUFlLENBQUNlLEdBQWhCLENBQXFCQyxDQUFELGlCQUNqQjtBQUFRLGlCQUFTLEVBQUVBLENBQUMsS0FBS1osTUFBTixHQUFlLGdCQUFmLEdBQWtDLGtCQUFyRDtBQUVJLGVBQU8sRUFBRSxNQUFNO0FBQUVDLG1CQUFTLENBQUNXLENBQUQsQ0FBVDtBQUFlLFNBRnBDO0FBQUEsa0JBR0VBO0FBSEYsU0FDVSxlQUFjQSxDQUFFLEVBRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREgsQ0FGTCxlQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRKLEVBVUtoQixlQUFlLENBQUNlLEdBQWhCLENBQXFCQyxDQUFELGlCQUNqQjtBQUFRLGlCQUFTLEVBQUVBLENBQUMsS0FBS1YsTUFBTixHQUFlLGdCQUFmLEdBQWtDLGtCQUFyRDtBQUVJLGVBQU8sRUFBRSxNQUFNO0FBQUVDLG1CQUFTLENBQUNTLENBQUQsQ0FBVDtBQUFlLFNBRnBDO0FBQUEsa0JBR0VBO0FBSEYsU0FDVSxlQUFjQSxDQUFFLEVBRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREgsQ0FWTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdEJLLGVBd0NMO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsNkJBQ0k7QUFBMEIsaUJBQVMsRUFBQyxVQUFwQztBQUErQyxlQUFPLEVBQUUsTUFBTTtBQUFFSiwyQkFBaUI7QUFBSyxTQUF0RjtBQUFBO0FBQUEsU0FBWSxhQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhDSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVDtBQThDSCxDQWhFRDs7R0FBTWQsWTs7S0FBQUEsWTtBQWtFTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45NDk5Y2Y3ZmE4MDQ2NzQyYWFhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBHZXRXTU9wdGlvbnMgPSAoe3NldEdhbWVPcHRpb25zfSkgPT4ge1xyXG4gICAgY29uc3QgbGVuQWxsb3dlZEFycmF5ID0gWzIsMyw0LDUsNiw3LDgsOV07XHJcbiAgICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZSgnZWFzeScpO1xyXG4gICAgY29uc3QgW2xlbk1pbiwgc2V0TGVuTWluXSA9IHVzZVN0YXRlKDUpO1xyXG4gICAgY29uc3QgW2xlbk1heCwgc2V0TGVuTWF4XSA9IHVzZVN0YXRlKDgpO1xyXG4gICAgY29uc3QgW2NsaXBydWxlLCBzZXRDbGlwcnVsZV0gPSB1c2VTdGF0ZSgncm91bmQnKTtcclxuICAgIGNvbnN0IFt2YWxpZE9ubHksIHNldFZhbGlkT25seV0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIHdoZXRoZXIgZ3Vlc3NlcyBtdXN0IGJlIHZhbGlkIHdvcmRzXHJcbiAgICBjb25zdCBoYW5kbGVTdGFydFB1enpsZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgbmV3R2FtZU9wdGlvbnMgPSB7c2V0OiB0cnVlLCBtb2RlOiBtb2RlLCB2YWxpZE9ubHk6IHZhbGlkT25seSwgY2xpcHJ1bGU6IGNsaXBydWxlfTtcclxuICAgICAgICBpZiAobGVuTWluID4gbGVuTWF4KSB7XHJcbiAgICAgICAgICAgIG5ld0dhbWVPcHRpb25zLmxlbk1heCA9IGxlbk1pbjtcclxuICAgICAgICAgICAgbmV3R2FtZU9wdGlvbnMubGVuTWluID0gbGVuTWF4O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld0dhbWVPcHRpb25zLmxlbk1pbiA9IGxlbk1pbjtcclxuICAgICAgICAgICAgbmV3R2FtZU9wdGlvbnMubGVuTWF4ID0gbGVuTWF4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRHYW1lT3B0aW9ucyhuZXdHYW1lT3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCA8ZGl2IGNsYXNzTmFtZT1cInRyT3B0aW9uc0RpdlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt2YWxpZE9ubHkgPyBcInRyQ2hlY2tib3ggT25cIiA6IFwidHJDaGVja2JveFwifVxyXG4gICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJXaGV0aGVyIGd1ZXNzIG11c3QgYmUgdmFsaWQgd29yZHNcIlxyXG4gICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFZhbGlkT25seSghdmFsaWRPbmx5KTt9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGxhYmVsPkd1ZXNzZXMgbXVzdCBiZSB2YWxpZCB3b3JkczwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21vZGUgPT09ICdlYXN5JyA/IFwidHJDaGVja2JveCBPblwiIDogXCJ0ckNoZWNrYm94XCJ9XHJcbiAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkNvbG9yIGNvZGluZyBzaG93cyB3aGljaCBsZXR0ZXJzIGFyZSBjb3JyZWN0IG9yIGluIHRoZSB3cm9uZyBwbGFjZS4gT3RoZXJ3aXNlIHNob3cgY291bnRzIG9ubHkuXCJcclxuICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRNb2RlKG1vZGUgPT09ICdlYXN5JyA/ICdoYXJkJyA6ICdlYXN5Jyk7fX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxsYWJlbD5Db2xvciBjb2RlIHRoZSBndWVzcyBsZXR0ZXJzPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiQWxpZ25DZW50ZXJcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlNldCBjbGlwYm9hcmQgZmVhdHVyZSB0byBjYXB0dXJlIHRoZSBndWVzc2VzIGZvciBqdXN0IHRoZSByb3VuZCwganVzdCB0aGUgc2V0LCBvciBhbGwgc2V0cy5cIj5DbGlwYm9hcmQgQ2FwdHVyZTwvaDM+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PSdidXR0b25jbGlwcm91bmQnIGNsYXNzTmFtZT17Y2xpcHJ1bGUgPT09ICdyb3VuZCcgPyAndHJPcHRpb25zUmFkaW9PbicgOiAndHJPcHRpb25zUmFkaW9PZmYnfSBvbkNsaWNrPXsoKSA9PiB7c2V0Q2xpcHJ1bGUoJ3JvdW5kJyk7fX0vPlxyXG4gICAgICAgICAgICA8c3BhbiBrZXk9J2xhYmVsY2xpcHJvdW5kJyBjbGFzc05hbWU9XCJ0ck9wdGlvbnNSYWRpb0xhYmVsXCI+Um91bmQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDxidXR0b24ga2V5PSdidXR0b25jbGlwc2V0JyBjbGFzc05hbWU9e2NsaXBydWxlID09PSAnc2V0JyA/ICd0ck9wdGlvbnNSYWRpb09uJyA6ICd0ck9wdGlvbnNSYWRpb09mZid9IG9uQ2xpY2s9eygpID0+IHtzZXRDbGlwcnVsZSgnc2V0Jyk7fX0vPlxyXG4gICAgICAgICAgICA8c3BhbiBrZXk9J2xhYmVsY2xpcHNldCcgY2xhc3NOYW1lPVwidHJPcHRpb25zUmFkaW9MYWJlbFwiPlNldDwvc3Bhbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9J2J1dHRvbmNsaXBhbGwnIGNsYXNzTmFtZT17Y2xpcHJ1bGUgPT09ICdhbGwnID8gJ3RyT3B0aW9uc1JhZGlvT24nIDogJ3RyT3B0aW9uc1JhZGlvT2ZmJ30gb25DbGljaz17KCkgPT4ge3NldENsaXBydWxlKCdhbGwnKTt9fS8+XHJcbiAgICAgICAgICAgIDxzcGFuIGtleT0nbGFiZWxjbGlwYWxsJyBjbGFzc05hbWU9XCJ0ck9wdGlvbnNSYWRpb0xhYmVsXCI+QWxsPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid21fbGVuRGl2XCI+XHJcbiAgICAgICAgICAgIDxoMz5TdGFydCBMZW5ndGg8L2gzPlxyXG4gICAgICAgICAgICB7bGVuQWxsb3dlZEFycmF5Lm1hcCgobikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e24gPT09IGxlbk1pbiA/ICd3bV9sZW5TZWxlY3RlZCcgOiAnd21fbGVuVW5zZWxlY3RlZCd9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtgY2hvb3NlTGVuTWluJHtufWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRMZW5NaW4obik7IH0gfVxyXG4gICAgICAgICAgICAgICAgPntufVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8aDM+RW5kIExlbmd0aDwvaDM+XHJcbiAgICAgICAgICAgIHtsZW5BbGxvd2VkQXJyYXkubWFwKChuKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17biA9PT0gbGVuTWF4ID8gJ3dtX2xlblNlbGVjdGVkJyA6ICd3bV9sZW5VbnNlbGVjdGVkJ31cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2BjaG9vc2VMZW5NYXgke259YH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldExlbk1heChuKTsgfSB9XHJcbiAgICAgICAgICAgICAgICA+e259XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3bV9zdGFydFB1enpsZURpdlwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT1cInN0YXJ0UHV6emxlXCIgY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZVN0YXJ0UHV6emxlKCk7IH0gfT5cclxuICAgICAgICAgICAgICAgIFN0YXJ0IFB1enpsZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2Pik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdldFdNT3B0aW9uczsiXSwic291cmNlUm9vdCI6IiJ9