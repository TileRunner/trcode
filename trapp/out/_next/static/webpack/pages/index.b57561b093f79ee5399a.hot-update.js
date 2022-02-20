self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./lib/scrollToBottom.js":
/*!*******************************!*\
  !*** ./lib/scrollToBottom.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrollToBottom": function() { return /* binding */ scrollToBottom; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
const scrollToBottom = elementid => {
  const theElement = document.getElementById(elementid); // I have optional elements that my useEffect still tries to scroll when absent

  if (theElement) {
    theElement.scrollTop = theElement.scrollHeight;
    alert('scrolled');
  } else {
    alert('did not scroll');
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3Njcm9sbFRvQm90dG9tLmpzIl0sIm5hbWVzIjpbInNjcm9sbFRvQm90dG9tIiwiZWxlbWVudGlkIiwidGhlRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxjQUFjLEdBQUlDLFNBQUQsSUFBZTtBQUN6QyxRQUFNQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QkgsU0FBeEIsQ0FBbkIsQ0FEeUMsQ0FFekM7O0FBQ0EsTUFBSUMsVUFBSixFQUFnQjtBQUNaQSxjQUFVLENBQUNHLFNBQVgsR0FBdUJILFVBQVUsQ0FBQ0ksWUFBbEM7QUFDQUMsU0FBSyxDQUFDLFVBQUQsQ0FBTDtBQUNILEdBSEQsTUFHTztBQUNIQSxTQUFLLENBQUMsZ0JBQUQsQ0FBTDtBQUNIO0FBQ0osQ0FUTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iNTc1NjFiMDkzZjc5ZWU1Mzk5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNjcm9sbFRvQm90dG9tID0gKGVsZW1lbnRpZCkgPT4ge1xyXG4gICAgY29uc3QgdGhlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRpZCk7XHJcbiAgICAvLyBJIGhhdmUgb3B0aW9uYWwgZWxlbWVudHMgdGhhdCBteSB1c2VFZmZlY3Qgc3RpbGwgdHJpZXMgdG8gc2Nyb2xsIHdoZW4gYWJzZW50XHJcbiAgICBpZiAodGhlRWxlbWVudCkge1xyXG4gICAgICAgIHRoZUVsZW1lbnQuc2Nyb2xsVG9wID0gdGhlRWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgYWxlcnQoJ3Njcm9sbGVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KCdkaWQgbm90IHNjcm9sbCcpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=