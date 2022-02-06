self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./lib/wordfunctions.js":
/*!******************************!*\
  !*** ./lib/wordfunctions.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countSwaps": function() { return /* binding */ countSwaps; },
/* harmony export */   "areAnagrams": function() { return /* binding */ areAnagrams; },
/* harmony export */   "isDrop": function() { return /* binding */ isDrop; },
/* harmony export */   "isWordValid": function() { return /* binding */ isWordValid; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
const baseurl =  true ? 'http://localhost:5000' : 0;
/**
 * Determine how many swaps between two words of equal length.
 * @param {string} word1 A word
 * @param {string} word2 Another word of the same length
 * @returns The number of positions at which the letter is different between the two words, -1 if unequal length words.
 */

function countSwaps(word1 = "", word2 = "") {
  let result = 0;
  let letters1 = Array.from(word1);
  let letters2 = Array.from(word2);

  if (letters1.length === letters2.length) {
    for (let i = 0; i < letters1.length; i++) {
      const l1 = letters1[i];

      if (letters1[i] !== letters2[i]) {
        result++;
      }
    }
  } else {
    result = -1;
  }

  return result;
}
/**
 * Determine whether two words are anagrams.
 * @param {string} word1 A word
 * @param {string} word2 Another word
 * @returns Whether the two words are anagrams, case insensitive.
 */

function areAnagrams(word1 = "", word2 = "") {
  return Array.from(word1).sort().join('').toLowerCase() === Array.from(word2).sort().join('').toLowerCase();
}
/**
 * Determine where dropping any one letter from the longer word forms the shorter word
 * @param {string} longword The longer word
 * @param {string} shortword The shorter word
 * @returns {bool} Whether you can drop a letter from the longer word to get the shorter word, case insensitive
 */

function isDrop(longword = "", shortword = "") {
  if (longword.length !== shortword.length + 1) {
    return false; // Must be 1 fewer letter to be a drop
  }

  let lw = longword.toLowerCase();
  let sw = shortword.toLowerCase();

  for (let i = 0; i < lw.length; i++) {
    let cw = Array.from(lw);
    cw.splice(i, 1);

    if (cw.join('') === sw) {
      return true;
    }
  }

  return false;
}
/**
 * Determine whether a word is in the ENABLE2K lexicon
 * @param {string} word A word
 * @returns Whether the word is in the ENABLE2K lexicon
 * @async
 */

async function isWordValid(word) {
  let url = `${baseurl}/ENABLE2K?exists=${word.toLowerCase()}`;
  const response = await fetch(url);
  const jdata = await response.json();
  return jdata.exists;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3dvcmRmdW5jdGlvbnMuanMiXSwibmFtZXMiOlsiYmFzZXVybCIsImNvdW50U3dhcHMiLCJ3b3JkMSIsIndvcmQyIiwicmVzdWx0IiwibGV0dGVyczEiLCJBcnJheSIsImZyb20iLCJsZXR0ZXJzMiIsImxlbmd0aCIsImkiLCJsMSIsImFyZUFuYWdyYW1zIiwic29ydCIsImpvaW4iLCJ0b0xvd2VyQ2FzZSIsImlzRHJvcCIsImxvbmd3b3JkIiwic2hvcnR3b3JkIiwibHciLCJzdyIsImN3Iiwic3BsaWNlIiwiaXNXb3JkVmFsaWQiLCJ3b3JkIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImpkYXRhIiwianNvbiIsImV4aXN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxPQUFPLEdBQUksS0FBRCxHQUFvRSx1QkFBcEUsR0FBOEYsQ0FBOUc7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU0MsVUFBVCxDQUFvQkMsS0FBSyxHQUFDLEVBQTFCLEVBQThCQyxLQUFLLEdBQUMsRUFBcEMsRUFBd0M7QUFDM0MsTUFBSUMsTUFBTSxHQUFHLENBQWI7QUFDQSxNQUFJQyxRQUFRLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXTCxLQUFYLENBQWY7QUFDQSxNQUFJTSxRQUFRLEdBQUdGLEtBQUssQ0FBQ0MsSUFBTixDQUFXSixLQUFYLENBQWY7O0FBQ0EsTUFBSUUsUUFBUSxDQUFDSSxNQUFULEtBQW9CRCxRQUFRLENBQUNDLE1BQWpDLEVBQXlDO0FBQ3JDLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0wsUUFBUSxDQUFDSSxNQUE3QixFQUFxQ0MsQ0FBQyxFQUF0QyxFQUEwQztBQUN0QyxZQUFNQyxFQUFFLEdBQUdOLFFBQVEsQ0FBQ0ssQ0FBRCxDQUFuQjs7QUFDQSxVQUFJTCxRQUFRLENBQUNLLENBQUQsQ0FBUixLQUFnQkYsUUFBUSxDQUFDRSxDQUFELENBQTVCLEVBQWlDO0FBQzdCTixjQUFNO0FBQ1Q7QUFDSjtBQUNKLEdBUEQsTUFPTztBQUNIQSxVQUFNLEdBQUcsQ0FBQyxDQUFWO0FBQ0g7O0FBQ0QsU0FBT0EsTUFBUDtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNRLFdBQVQsQ0FBcUJWLEtBQUssR0FBQyxFQUEzQixFQUErQkMsS0FBSyxHQUFDLEVBQXJDLEVBQXlDO0FBQzVDLFNBQU9HLEtBQUssQ0FBQ0MsSUFBTixDQUFXTCxLQUFYLEVBQWtCVyxJQUFsQixHQUF5QkMsSUFBekIsQ0FBOEIsRUFBOUIsRUFBa0NDLFdBQWxDLE9BQW9EVCxLQUFLLENBQUNDLElBQU4sQ0FBV0osS0FBWCxFQUFrQlUsSUFBbEIsR0FBeUJDLElBQXpCLENBQThCLEVBQTlCLEVBQWtDQyxXQUFsQyxFQUEzRDtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNDLE1BQVQsQ0FBZ0JDLFFBQVEsR0FBQyxFQUF6QixFQUE2QkMsU0FBUyxHQUFDLEVBQXZDLEVBQTJDO0FBQzlDLE1BQUlELFFBQVEsQ0FBQ1IsTUFBVCxLQUFvQlMsU0FBUyxDQUFDVCxNQUFWLEdBQW1CLENBQTNDLEVBQThDO0FBQzFDLFdBQU8sS0FBUCxDQUQwQyxDQUM1QjtBQUNqQjs7QUFDRCxNQUFJVSxFQUFFLEdBQUdGLFFBQVEsQ0FBQ0YsV0FBVCxFQUFUO0FBQ0EsTUFBSUssRUFBRSxHQUFHRixTQUFTLENBQUNILFdBQVYsRUFBVDs7QUFDQSxPQUFLLElBQUlMLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdTLEVBQUUsQ0FBQ1YsTUFBdkIsRUFBK0JDLENBQUMsRUFBaEMsRUFBb0M7QUFDaEMsUUFBSVcsRUFBRSxHQUFHZixLQUFLLENBQUNDLElBQU4sQ0FBV1ksRUFBWCxDQUFUO0FBQ0FFLE1BQUUsQ0FBQ0MsTUFBSCxDQUFVWixDQUFWLEVBQVksQ0FBWjs7QUFDQSxRQUFJVyxFQUFFLENBQUNQLElBQUgsQ0FBUSxFQUFSLE1BQWdCTSxFQUFwQixFQUF3QjtBQUNwQixhQUFPLElBQVA7QUFDSDtBQUNKOztBQUNELFNBQU8sS0FBUDtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLGVBQWVHLFdBQWYsQ0FBMkJDLElBQTNCLEVBQWlDO0FBQ3BDLE1BQUlDLEdBQUcsR0FBSSxHQUFFekIsT0FBUSxvQkFBbUJ3QixJQUFJLENBQUNULFdBQUwsRUFBbUIsRUFBM0Q7QUFDQSxRQUFNVyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDRixHQUFELENBQTVCO0FBQ0EsUUFBTUcsS0FBSyxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBVCxFQUFwQjtBQUNBLFNBQU9ELEtBQUssQ0FBQ0UsTUFBYjtBQUNIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ4NDIxMzA0MDc3YWQ5YWIxYWEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBiYXNldXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbSc7XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lIGhvdyBtYW55IHN3YXBzIGJldHdlZW4gdHdvIHdvcmRzIG9mIGVxdWFsIGxlbmd0aC5cclxuICogQHBhcmFtIHtzdHJpbmd9IHdvcmQxIEEgd29yZFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gd29yZDIgQW5vdGhlciB3b3JkIG9mIHRoZSBzYW1lIGxlbmd0aFxyXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIHBvc2l0aW9ucyBhdCB3aGljaCB0aGUgbGV0dGVyIGlzIGRpZmZlcmVudCBiZXR3ZWVuIHRoZSB0d28gd29yZHMsIC0xIGlmIHVuZXF1YWwgbGVuZ3RoIHdvcmRzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50U3dhcHMod29yZDE9XCJcIiwgd29yZDI9XCJcIikge1xyXG4gICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICBsZXQgbGV0dGVyczEgPSBBcnJheS5mcm9tKHdvcmQxKTtcclxuICAgIGxldCBsZXR0ZXJzMiA9IEFycmF5LmZyb20od29yZDIpO1xyXG4gICAgaWYgKGxldHRlcnMxLmxlbmd0aCA9PT0gbGV0dGVyczIubGVuZ3RoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZXR0ZXJzMS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBsMSA9IGxldHRlcnMxW2ldO1xyXG4gICAgICAgICAgICBpZiAobGV0dGVyczFbaV0gIT09IGxldHRlcnMyW2ldKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0ID0gLTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdHdvIHdvcmRzIGFyZSBhbmFncmFtcy5cclxuICogQHBhcmFtIHtzdHJpbmd9IHdvcmQxIEEgd29yZFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gd29yZDIgQW5vdGhlciB3b3JkXHJcbiAqIEByZXR1cm5zIFdoZXRoZXIgdGhlIHR3byB3b3JkcyBhcmUgYW5hZ3JhbXMsIGNhc2UgaW5zZW5zaXRpdmUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXJlQW5hZ3JhbXMod29yZDE9XCJcIiwgd29yZDI9XCJcIikge1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20od29yZDEpLnNvcnQoKS5qb2luKCcnKS50b0xvd2VyQ2FzZSgpID09PSBBcnJheS5mcm9tKHdvcmQyKS5zb3J0KCkuam9pbignJykudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZSB3aGVyZSBkcm9wcGluZyBhbnkgb25lIGxldHRlciBmcm9tIHRoZSBsb25nZXIgd29yZCBmb3JtcyB0aGUgc2hvcnRlciB3b3JkXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb25nd29yZCBUaGUgbG9uZ2VyIHdvcmRcclxuICogQHBhcmFtIHtzdHJpbmd9IHNob3J0d29yZCBUaGUgc2hvcnRlciB3b3JkXHJcbiAqIEByZXR1cm5zIHtib29sfSBXaGV0aGVyIHlvdSBjYW4gZHJvcCBhIGxldHRlciBmcm9tIHRoZSBsb25nZXIgd29yZCB0byBnZXQgdGhlIHNob3J0ZXIgd29yZCwgY2FzZSBpbnNlbnNpdGl2ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRHJvcChsb25nd29yZD1cIlwiLCBzaG9ydHdvcmQ9XCJcIikge1xyXG4gICAgaWYgKGxvbmd3b3JkLmxlbmd0aCAhPT0gc2hvcnR3b3JkLmxlbmd0aCArIDEpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIE11c3QgYmUgMSBmZXdlciBsZXR0ZXIgdG8gYmUgYSBkcm9wXHJcbiAgICB9XHJcbiAgICBsZXQgbHcgPSBsb25nd29yZC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgbGV0IHN3ID0gc2hvcnR3b3JkLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGx3Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGN3ID0gQXJyYXkuZnJvbShsdyk7XHJcbiAgICAgICAgY3cuc3BsaWNlKGksMSk7XHJcbiAgICAgICAgaWYgKGN3LmpvaW4oJycpID09PSBzdykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgd2hldGhlciBhIHdvcmQgaXMgaW4gdGhlIEVOQUJMRTJLIGxleGljb25cclxuICogQHBhcmFtIHtzdHJpbmd9IHdvcmQgQSB3b3JkXHJcbiAqIEByZXR1cm5zIFdoZXRoZXIgdGhlIHdvcmQgaXMgaW4gdGhlIEVOQUJMRTJLIGxleGljb25cclxuICogQGFzeW5jXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNXb3JkVmFsaWQod29yZCkge1xyXG4gICAgbGV0IHVybCA9IGAke2Jhc2V1cmx9L0VOQUJMRTJLP2V4aXN0cz0ke3dvcmQudG9Mb3dlckNhc2UoKX1gO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QgamRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gamRhdGEuZXhpc3RzO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=