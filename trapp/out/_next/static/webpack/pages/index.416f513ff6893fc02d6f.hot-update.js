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
 * Get the alphagram for the given word, trimmed and converted to lower case.
 * @param {string} word A word that you want the alphagram for, trimmed and converted to lower case.
 * @returns The alphagram
 */

function getAlphagram(word = "") {
  let a = Array.from(word.trim().toLowerCase());
  a.sort();
  let alphagram = a.join('');
  return alphagram;
}
/**
 * Determine how many swaps between two words of equal length, case insensitive.
 * @param {string} word1 A word
 * @param {string} word2 Another word of the same length
 * @returns The number of positions at which the letter is different between the two words, -1 if unequal length words.
 */


function countSwaps(word1 = "", word2 = "") {
  let result = 0;
  let letters1 = Array.from(word1.toLowerCase());
  let letters2 = Array.from(word2.toLowerCase());

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
 * Determine whether two words are anagrams, case insensitive. If they are the same word it will still return true.
 * @param {string} word1 A word
 * @param {string} word2 Another word
 * @returns Whether the two words are anagrams.
 */

function areAnagrams(word1 = "", word2 = "") {
  let alphagram1 = getAlphagram(word1);
  let alphagram2 = getAlphagram(word2);
  return alphagram1 === alphagram2;
}
/**
 * Determine where dropping any one letter from the longer word forms the shorter word, case insensitive
 * @param {string} longword The longer word
 * @param {string} shortword The shorter word
 * @returns {bool} Whether you can drop a letter from the longer word to get the shorter word
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
 * Determine whether a word is in the ENABLE2K lexicon, case insensitive
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3dvcmRmdW5jdGlvbnMuanMiXSwibmFtZXMiOlsiYmFzZXVybCIsImdldEFscGhhZ3JhbSIsIndvcmQiLCJhIiwiQXJyYXkiLCJmcm9tIiwidHJpbSIsInRvTG93ZXJDYXNlIiwic29ydCIsImFscGhhZ3JhbSIsImpvaW4iLCJjb3VudFN3YXBzIiwid29yZDEiLCJ3b3JkMiIsInJlc3VsdCIsImxldHRlcnMxIiwibGV0dGVyczIiLCJsZW5ndGgiLCJpIiwibDEiLCJhcmVBbmFncmFtcyIsImFscGhhZ3JhbTEiLCJhbHBoYWdyYW0yIiwiaXNEcm9wIiwibG9uZ3dvcmQiLCJzaG9ydHdvcmQiLCJsdyIsInN3IiwiY3ciLCJzcGxpY2UiLCJpc1dvcmRWYWxpZCIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJqZGF0YSIsImpzb24iLCJleGlzdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsT0FBTyxHQUFJLEtBQUQsR0FBb0UsdUJBQXBFLEdBQThGLENBQTlHO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQyxZQUFULENBQXNCQyxJQUFJLEdBQUMsRUFBM0IsRUFBK0I7QUFDM0IsTUFBSUMsQ0FBQyxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBV0gsSUFBSSxDQUFDSSxJQUFMLEdBQVlDLFdBQVosRUFBWCxDQUFSO0FBQ0FKLEdBQUMsQ0FBQ0ssSUFBRjtBQUNBLE1BQUlDLFNBQVMsR0FBR04sQ0FBQyxDQUFDTyxJQUFGLENBQU8sRUFBUCxDQUFoQjtBQUNBLFNBQU9ELFNBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0UsVUFBVCxDQUFvQkMsS0FBSyxHQUFDLEVBQTFCLEVBQThCQyxLQUFLLEdBQUMsRUFBcEMsRUFBd0M7QUFDM0MsTUFBSUMsTUFBTSxHQUFHLENBQWI7QUFDQSxNQUFJQyxRQUFRLEdBQUdYLEtBQUssQ0FBQ0MsSUFBTixDQUFXTyxLQUFLLENBQUNMLFdBQU4sRUFBWCxDQUFmO0FBQ0EsTUFBSVMsUUFBUSxHQUFHWixLQUFLLENBQUNDLElBQU4sQ0FBV1EsS0FBSyxDQUFDTixXQUFOLEVBQVgsQ0FBZjs7QUFDQSxNQUFJUSxRQUFRLENBQUNFLE1BQVQsS0FBb0JELFFBQVEsQ0FBQ0MsTUFBakMsRUFBeUM7QUFDckMsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxRQUFRLENBQUNFLE1BQTdCLEVBQXFDQyxDQUFDLEVBQXRDLEVBQTBDO0FBQ3RDLFlBQU1DLEVBQUUsR0FBR0osUUFBUSxDQUFDRyxDQUFELENBQW5COztBQUNBLFVBQUlILFFBQVEsQ0FBQ0csQ0FBRCxDQUFSLEtBQWdCRixRQUFRLENBQUNFLENBQUQsQ0FBNUIsRUFBaUM7QUFDN0JKLGNBQU07QUFDVDtBQUNKO0FBQ0osR0FQRCxNQU9PO0FBQ0hBLFVBQU0sR0FBRyxDQUFDLENBQVY7QUFDSDs7QUFDRCxTQUFPQSxNQUFQO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU00sV0FBVCxDQUFxQlIsS0FBSyxHQUFDLEVBQTNCLEVBQStCQyxLQUFLLEdBQUMsRUFBckMsRUFBeUM7QUFDNUMsTUFBSVEsVUFBVSxHQUFHcEIsWUFBWSxDQUFDVyxLQUFELENBQTdCO0FBQ0EsTUFBSVUsVUFBVSxHQUFHckIsWUFBWSxDQUFDWSxLQUFELENBQTdCO0FBQ0EsU0FBT1EsVUFBVSxLQUFLQyxVQUF0QjtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNDLE1BQVQsQ0FBZ0JDLFFBQVEsR0FBQyxFQUF6QixFQUE2QkMsU0FBUyxHQUFDLEVBQXZDLEVBQTJDO0FBQzlDLE1BQUlELFFBQVEsQ0FBQ1AsTUFBVCxLQUFvQlEsU0FBUyxDQUFDUixNQUFWLEdBQW1CLENBQTNDLEVBQThDO0FBQzFDLFdBQU8sS0FBUCxDQUQwQyxDQUM1QjtBQUNqQjs7QUFDRCxNQUFJUyxFQUFFLEdBQUdGLFFBQVEsQ0FBQ2pCLFdBQVQsRUFBVDtBQUNBLE1BQUlvQixFQUFFLEdBQUdGLFNBQVMsQ0FBQ2xCLFdBQVYsRUFBVDs7QUFDQSxPQUFLLElBQUlXLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdRLEVBQUUsQ0FBQ1QsTUFBdkIsRUFBK0JDLENBQUMsRUFBaEMsRUFBb0M7QUFDaEMsUUFBSVUsRUFBRSxHQUFHeEIsS0FBSyxDQUFDQyxJQUFOLENBQVdxQixFQUFYLENBQVQ7QUFDQUUsTUFBRSxDQUFDQyxNQUFILENBQVVYLENBQVYsRUFBWSxDQUFaOztBQUNBLFFBQUlVLEVBQUUsQ0FBQ2xCLElBQUgsQ0FBUSxFQUFSLE1BQWdCaUIsRUFBcEIsRUFBd0I7QUFDcEIsYUFBTyxJQUFQO0FBQ0g7QUFDSjs7QUFDRCxTQUFPLEtBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxlQUFlRyxXQUFmLENBQTJCNUIsSUFBM0IsRUFBaUM7QUFDcEMsTUFBSTZCLEdBQUcsR0FBSSxHQUFFL0IsT0FBUSxvQkFBbUJFLElBQUksQ0FBQ0ssV0FBTCxFQUFtQixFQUEzRDtBQUNBLFFBQU15QixRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDRixHQUFELENBQTVCO0FBQ0EsUUFBTUcsS0FBSyxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBVCxFQUFwQjtBQUNBLFNBQU9ELEtBQUssQ0FBQ0UsTUFBYjtBQUNIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQxNmY1MTNmZjY4OTNmYzAyZDZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBiYXNldXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbSc7XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBhbHBoYWdyYW0gZm9yIHRoZSBnaXZlbiB3b3JkLCB0cmltbWVkIGFuZCBjb252ZXJ0ZWQgdG8gbG93ZXIgY2FzZS5cclxuICogQHBhcmFtIHtzdHJpbmd9IHdvcmQgQSB3b3JkIHRoYXQgeW91IHdhbnQgdGhlIGFscGhhZ3JhbSBmb3IsIHRyaW1tZWQgYW5kIGNvbnZlcnRlZCB0byBsb3dlciBjYXNlLlxyXG4gKiBAcmV0dXJucyBUaGUgYWxwaGFncmFtXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRBbHBoYWdyYW0od29yZD1cIlwiKSB7XHJcbiAgICBsZXQgYSA9IEFycmF5LmZyb20od29yZC50cmltKCkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICBhLnNvcnQoKTtcclxuICAgIGxldCBhbHBoYWdyYW0gPSBhLmpvaW4oJycpO1xyXG4gICAgcmV0dXJuIGFscGhhZ3JhbTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZSBob3cgbWFueSBzd2FwcyBiZXR3ZWVuIHR3byB3b3JkcyBvZiBlcXVhbCBsZW5ndGgsIGNhc2UgaW5zZW5zaXRpdmUuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB3b3JkMSBBIHdvcmRcclxuICogQHBhcmFtIHtzdHJpbmd9IHdvcmQyIEFub3RoZXIgd29yZCBvZiB0aGUgc2FtZSBsZW5ndGhcclxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBwb3NpdGlvbnMgYXQgd2hpY2ggdGhlIGxldHRlciBpcyBkaWZmZXJlbnQgYmV0d2VlbiB0aGUgdHdvIHdvcmRzLCAtMSBpZiB1bmVxdWFsIGxlbmd0aCB3b3Jkcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudFN3YXBzKHdvcmQxPVwiXCIsIHdvcmQyPVwiXCIpIHtcclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgbGV0IGxldHRlcnMxID0gQXJyYXkuZnJvbSh3b3JkMS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIGxldCBsZXR0ZXJzMiA9IEFycmF5LmZyb20od29yZDIudG9Mb3dlckNhc2UoKSk7XHJcbiAgICBpZiAobGV0dGVyczEubGVuZ3RoID09PSBsZXR0ZXJzMi5sZW5ndGgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxldHRlcnMxLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGwxID0gbGV0dGVyczFbaV07XHJcbiAgICAgICAgICAgIGlmIChsZXR0ZXJzMVtpXSAhPT0gbGV0dGVyczJbaV0pIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHQgPSAtMTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0d28gd29yZHMgYXJlIGFuYWdyYW1zLCBjYXNlIGluc2Vuc2l0aXZlLiBJZiB0aGV5IGFyZSB0aGUgc2FtZSB3b3JkIGl0IHdpbGwgc3RpbGwgcmV0dXJuIHRydWUuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB3b3JkMSBBIHdvcmRcclxuICogQHBhcmFtIHtzdHJpbmd9IHdvcmQyIEFub3RoZXIgd29yZFxyXG4gKiBAcmV0dXJucyBXaGV0aGVyIHRoZSB0d28gd29yZHMgYXJlIGFuYWdyYW1zLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFyZUFuYWdyYW1zKHdvcmQxPVwiXCIsIHdvcmQyPVwiXCIpIHtcclxuICAgIGxldCBhbHBoYWdyYW0xID0gZ2V0QWxwaGFncmFtKHdvcmQxKTtcclxuICAgIGxldCBhbHBoYWdyYW0yID0gZ2V0QWxwaGFncmFtKHdvcmQyKTtcclxuICAgIHJldHVybiBhbHBoYWdyYW0xID09PSBhbHBoYWdyYW0yO1xyXG59XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lIHdoZXJlIGRyb3BwaW5nIGFueSBvbmUgbGV0dGVyIGZyb20gdGhlIGxvbmdlciB3b3JkIGZvcm1zIHRoZSBzaG9ydGVyIHdvcmQsIGNhc2UgaW5zZW5zaXRpdmVcclxuICogQHBhcmFtIHtzdHJpbmd9IGxvbmd3b3JkIFRoZSBsb25nZXIgd29yZFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2hvcnR3b3JkIFRoZSBzaG9ydGVyIHdvcmRcclxuICogQHJldHVybnMge2Jvb2x9IFdoZXRoZXIgeW91IGNhbiBkcm9wIGEgbGV0dGVyIGZyb20gdGhlIGxvbmdlciB3b3JkIHRvIGdldCB0aGUgc2hvcnRlciB3b3JkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNEcm9wKGxvbmd3b3JkPVwiXCIsIHNob3J0d29yZD1cIlwiKSB7XHJcbiAgICBpZiAobG9uZ3dvcmQubGVuZ3RoICE9PSBzaG9ydHdvcmQubGVuZ3RoICsgMSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gTXVzdCBiZSAxIGZld2VyIGxldHRlciB0byBiZSBhIGRyb3BcclxuICAgIH1cclxuICAgIGxldCBsdyA9IGxvbmd3b3JkLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBsZXQgc3cgPSBzaG9ydHdvcmQudG9Mb3dlckNhc2UoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbHcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgY3cgPSBBcnJheS5mcm9tKGx3KTtcclxuICAgICAgICBjdy5zcGxpY2UoaSwxKTtcclxuICAgICAgICBpZiAoY3cuam9pbignJykgPT09IHN3KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZSB3aGV0aGVyIGEgd29yZCBpcyBpbiB0aGUgRU5BQkxFMksgbGV4aWNvbiwgY2FzZSBpbnNlbnNpdGl2ZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gd29yZCBBIHdvcmRcclxuICogQHJldHVybnMgV2hldGhlciB0aGUgd29yZCBpcyBpbiB0aGUgRU5BQkxFMksgbGV4aWNvblxyXG4gKiBAYXN5bmNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc1dvcmRWYWxpZCh3b3JkKSB7XHJcbiAgICBsZXQgdXJsID0gYCR7YmFzZXVybH0vRU5BQkxFMks/ZXhpc3RzPSR7d29yZC50b0xvd2VyQ2FzZSgpfWA7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBjb25zdCBqZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiBqZGF0YS5leGlzdHM7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==