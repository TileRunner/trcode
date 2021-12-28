self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/wi/showAnagramsForOneWord.js":
/*!********************************************!*\
  !*** ./pages/wi/showAnagramsForOneWord.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\wi\\showAnagramsForOneWord.js",
    _s = $RefreshSig$();



const ShowAnagramsForOneWord = ({
  anagrams = []
}) => {
  _s();

  const {
    0: flag,
    1: setFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // true=show count, false=show anagrams

  return anagrams.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : flag ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    className: "anagramCount",
    "data-toggle": "tooltip",
    title: anagrams,
    onClick: () => {
      setFlag(!flag);
    },
    children: anagrams.length
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 13
  }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    className: "anagramCount",
    "data-toggle": "tooltip",
    title: anagrams.length,
    onClick: () => {
      setFlag(!flag);
    },
    children: anagrams
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 13
  }, undefined);
};

_s(ShowAnagramsForOneWord, "dJmjEfD7K4XJxFJixWG4ORFdA7k=");

_c = ShowAnagramsForOneWord;
/* harmony default export */ __webpack_exports__["default"] = (ShowAnagramsForOneWord);

var _c;

$RefreshReg$(_c, "ShowAnagramsForOneWord");

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


/***/ }),

/***/ "./pages/wi/showinfo.js":
/*!******************************!*\
  !*** ./pages/wi/showinfo.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Showinfo; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _showInsertsForOnePosition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showInsertsForOnePosition */ "./pages/wi/showInsertsForOnePosition.js");
/* harmony import */ var _showSwapsForOnePosition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showSwapsForOnePosition */ "./pages/wi/showSwapsForOnePosition.js");
/* harmony import */ var _showAnagramsForOneWord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./showAnagramsForOneWord */ "./pages/wi/showAnagramsForOneWord.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\wi\\showinfo.js",
    _s = $RefreshSig$();





function Showinfo(props) {
  _s();

  const {
    0: info,
    1: setInfo
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: loaded,
    1: setLoaded
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const apiCall = async () => {
      let url =  true ? 'http://localhost:5000/ENABLE2K?letters=' : 0; //  'https://words-scrabble.herokuapp.com/api/info/'
      // let response = await fetch('https://words-scrabble.herokuapp.com/api/info/' + props.word)

      let response = await fetch(url + props.word);
      let jdata = await response.json();
      console.log(`swaps=${JSON.stringify(jdata.swaps)}`);
      setInfo(jdata);
      setLoaded(true);
    };

    apiCall();
  }, []);
  return loaded ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
    className: "trTable",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
      children: [props.showInserts === "Y" && info.inserts.length > 0 && displayInsertsRow(info.inserts), props.showSwaps === "Y" && info.swaps.length > 0 && displaySwapsRow(info.swaps), displayWordRow(), props.showDrops === "Y" && info.drops.length > 0 && displayDropsRow(info.drops), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        className: "divider",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          colSpan: props.word.length + props.word.length + 3,
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 13
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trEmphasis",
    children: "Loading ..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 13
  }, this);

  function displayInsertsRow(inserts) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: inserts.map((i, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_showInsertsForOnePosition__WEBPACK_IMPORTED_MODULE_2__.default, {
          insertLetters: i
        }, `insertsBallon.${index}`, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 25
        }, this)]
      }, void 0, true))
    }, `insertsRow.${props.word}`, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this);
  }

  function displaySwapsRow(swaps) {
    const swaps2 = [...swaps, ''];
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: swaps2 === null || swaps2 === void 0 ? void 0 : swaps2.map((s, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [props.showInserts === 'N' || info.inserts[index] === '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "insertCountSpacer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "balloonstring",
          children: "\u27BB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_showSwapsForOnePosition__WEBPACK_IMPORTED_MODULE_3__.default, {
          swapLetters: s
        }, `swapsBallon.${index}`, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, this)]
      }, void 0, true))
    }, `swaps.${props.word}`, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, this);
  }

  function displayWordRow() {
    var _props$word;

    const key1 = props.word;
    const key2 = props.word + '2';
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, this), (_props$word = props.word) === null || _props$word === void 0 ? void 0 : _props$word.toUpperCase().split("").map(l => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: l
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 25
        }, this)]
      }, void 0, true)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: props.showAnagrams === "Y" && info.anagrams.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_showAnagramsForOneWord__WEBPACK_IMPORTED_MODULE_4__.default, {
            anagrams: info.anagrams
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, this)
        }, info.anagrams, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, this)
      }, key1, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: info.valid !== 'Y' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "trDanger",
          children: "Not a recognized word"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 25
        }, this)
      }, key2, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, this)]
    }, `word.${props.word}`, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, this);
  }

  function displayDropsRow(drops) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      className: "dropRow",
      children: drops.map(d => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 17
        }, this), d === "Y" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "dropIndicator",
          "data-toggle": "tooltip",
          title: "You can drop this letter",
          children: "\u2022"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 21
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, this)]
      }, void 0, true))
    }, `drops.${props.word}`, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }, this);
  }

  function displayAnagramsRow(anagrams) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: `Anagrams: ${anagrams}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }, this)
    }, `anagrams.${props.word}`, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }, this);
  }
}

_s(Showinfo, "ePQZhHBb6If+/U6XHS5UTnWfhHM=");

_c = Showinfo;

var _c;

$RefreshReg$(_c, "Showinfo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2kvc2hvd0FuYWdyYW1zRm9yT25lV29yZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2kvc2hvd2luZm8uanMiXSwibmFtZXMiOlsiU2hvd0FuYWdyYW1zRm9yT25lV29yZCIsImFuYWdyYW1zIiwiZmxhZyIsInNldEZsYWciLCJ1c2VTdGF0ZSIsImxlbmd0aCIsIlNob3dpbmZvIiwicHJvcHMiLCJpbmZvIiwic2V0SW5mbyIsImxvYWRlZCIsInNldExvYWRlZCIsInVzZUVmZmVjdCIsImFwaUNhbGwiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwid29yZCIsImpkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5Iiwic3dhcHMiLCJzaG93SW5zZXJ0cyIsImluc2VydHMiLCJkaXNwbGF5SW5zZXJ0c1JvdyIsInNob3dTd2FwcyIsImRpc3BsYXlTd2Fwc1JvdyIsImRpc3BsYXlXb3JkUm93Iiwic2hvd0Ryb3BzIiwiZHJvcHMiLCJkaXNwbGF5RHJvcHNSb3ciLCJtYXAiLCJpIiwiaW5kZXgiLCJzd2FwczIiLCJzIiwia2V5MSIsImtleTIiLCJ0b1VwcGVyQ2FzZSIsInNwbGl0IiwibCIsInNob3dBbmFncmFtcyIsInZhbGlkIiwiZCIsImRpc3BsYXlBbmFncmFtc1JvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsc0JBQXNCLEdBQUcsQ0FBQztBQUM1QkMsVUFBUSxHQUFDO0FBRG1CLENBQUQsS0FFckI7QUFBQTs7QUFFTixRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsSUFBRCxDQUFoQyxDQUZNLENBRWtDOztBQUV4QyxTQUNJSCxRQUFRLENBQUNJLE1BQVQsS0FBb0IsQ0FBcEIsZ0JBQ0ksNklBREosR0FFRUgsSUFBSSxnQkFDRjtBQUFNLGFBQVMsRUFBQyxjQUFoQjtBQUNJLG1CQUFZLFNBRGhCO0FBRUksU0FBSyxFQUFFRCxRQUZYO0FBR0ksV0FBTyxFQUFFLE1BQU07QUFBQ0UsYUFBTyxDQUFDLENBQUNELElBQUYsQ0FBUDtBQUFnQixLQUhwQztBQUFBLGNBS0tELFFBQVEsQ0FBQ0k7QUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREUsZ0JBU0Y7QUFBTSxhQUFTLEVBQUMsY0FBaEI7QUFDSSxtQkFBWSxTQURoQjtBQUVJLFNBQUssRUFBRUosUUFBUSxDQUFDSSxNQUZwQjtBQUdJLFdBQU8sRUFBRSxNQUFNO0FBQUNGLGFBQU8sQ0FBQyxDQUFDRCxJQUFGLENBQVA7QUFBZ0IsS0FIcEM7QUFBQSxjQUtLRDtBQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaUjtBQW1CRixDQXpCRjs7R0FBTUQsc0I7O0tBQUFBLHNCO0FBMkJOLCtEQUFlQSxzQkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTTSxRQUFULENBQW1CQyxLQUFuQixFQUEyQjtBQUFBOztBQUN0QyxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JMLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDTSxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQlAsK0NBQVEsQ0FBQyxLQUFELENBQXBDO0FBQ0FRLGtEQUFTLENBQUMsTUFBSTtBQUNWLFVBQU1DLE9BQU8sR0FBRyxZQUFVO0FBQ3RCLFVBQUlDLEdBQUcsR0FBSSxLQUFELEdBQW9FLHlDQUFwRSxHQUFnSCxDQUExSCxDQURzQixDQUV0QjtBQUNBOztBQUNBLFVBQUlDLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUcsR0FBR1AsS0FBSyxDQUFDVSxJQUFiLENBQTFCO0FBQ0EsVUFBSUMsS0FBSyxHQUFHLE1BQU1ILFFBQVEsQ0FBQ0ksSUFBVCxFQUFsQjtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBYSxTQUFRQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsS0FBSyxDQUFDTSxLQUFyQixDQUE0QixFQUFqRDtBQUNBZixhQUFPLENBQUNTLEtBQUQsQ0FBUDtBQUNBUCxlQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0gsS0FURDs7QUFVQUUsV0FBTztBQUNWLEdBWlEsRUFZUCxFQVpPLENBQVQ7QUFjQSxTQUNJSCxNQUFNLGdCQUNGO0FBQU8sYUFBUyxFQUFDLFNBQWpCO0FBQUEsMkJBQ0k7QUFBQSxpQkFDS0gsS0FBSyxDQUFDa0IsV0FBTixLQUFzQixHQUF0QixJQUE2QmpCLElBQUksQ0FBQ2tCLE9BQUwsQ0FBYXJCLE1BQWIsR0FBc0IsQ0FBbkQsSUFBd0RzQixpQkFBaUIsQ0FBQ25CLElBQUksQ0FBQ2tCLE9BQU4sQ0FEOUUsRUFFS25CLEtBQUssQ0FBQ3FCLFNBQU4sS0FBb0IsR0FBcEIsSUFBMkJwQixJQUFJLENBQUNnQixLQUFMLENBQVduQixNQUFYLEdBQW9CLENBQS9DLElBQW9Ed0IsZUFBZSxDQUFDckIsSUFBSSxDQUFDZ0IsS0FBTixDQUZ4RSxFQUdLTSxjQUFjLEVBSG5CLEVBSUt2QixLQUFLLENBQUN3QixTQUFOLEtBQW9CLEdBQXBCLElBQTJCdkIsSUFBSSxDQUFDd0IsS0FBTCxDQUFXM0IsTUFBWCxHQUFvQixDQUEvQyxJQUFvRDRCLGVBQWUsQ0FBQ3pCLElBQUksQ0FBQ3dCLEtBQU4sQ0FKeEUsZUFLSTtBQUFJLGlCQUFTLEVBQUMsU0FBZDtBQUFBLCtCQUF3QjtBQUFJLGlCQUFPLEVBQUV6QixLQUFLLENBQUNVLElBQU4sQ0FBV1osTUFBWCxHQUFvQkUsS0FBSyxDQUFDVSxJQUFOLENBQVdaLE1BQS9CLEdBQXdDLENBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREUsZ0JBV0Y7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVpSOztBQWdCQSxXQUFTc0IsaUJBQVQsQ0FBMkJELE9BQTNCLEVBQW9DO0FBQ2hDLHdCQUNJO0FBQUEsZ0JBQ0tBLE9BQU8sQ0FBQ1EsR0FBUixDQUFZLENBQUNDLENBQUQsRUFBR0MsS0FBSCxrQkFDVDtBQUFBLGdDQUNJLDhEQUFDLCtEQUFEO0FBQTJCLHVCQUFhLEVBQUVEO0FBQTFDLFdBQW1ELGlCQUFnQkMsS0FBTSxFQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISjtBQUFBLHNCQURIO0FBREwsT0FBVSxjQUFhN0IsS0FBSyxDQUFDVSxJQUFLLEVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQVdIOztBQUNELFdBQVNZLGVBQVQsQ0FBeUJMLEtBQXpCLEVBQWdDO0FBQzVCLFVBQU1hLE1BQU0sR0FBRyxDQUFDLEdBQUdiLEtBQUosRUFBVyxFQUFYLENBQWY7QUFDQSx3QkFDSTtBQUFBLGdCQUNDYSxNQURELGFBQ0NBLE1BREQsdUJBQ0NBLE1BQU0sQ0FBRUgsR0FBUixDQUFZLENBQUNJLENBQUQsRUFBSUYsS0FBSixrQkFDVDtBQUFBLG1CQUNLN0IsS0FBSyxDQUFDa0IsV0FBTixLQUFzQixHQUF0QixJQUE2QmpCLElBQUksQ0FBQ2tCLE9BQUwsQ0FBYVUsS0FBYixNQUF3QixFQUFyRCxnQkFDRztBQUFJLG1CQUFTLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURILGdCQUdHO0FBQUksbUJBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpSLGVBTUksOERBQUMsNkRBQUQ7QUFBeUIscUJBQVcsRUFBRUU7QUFBdEMsV0FBK0MsZUFBY0YsS0FBTSxFQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KO0FBQUEsc0JBREg7QUFERCxPQUFVLFNBQVE3QixLQUFLLENBQUNVLElBQUssRUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBZUg7O0FBRUQsV0FBU2EsY0FBVCxHQUEwQjtBQUFBOztBQUN0QixVQUFNUyxJQUFJLEdBQUdoQyxLQUFLLENBQUNVLElBQW5CO0FBQ0EsVUFBTXVCLElBQUksR0FBR2pDLEtBQUssQ0FBQ1UsSUFBTixHQUFhLEdBQTFCO0FBQ0Esd0JBQ0k7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosaUJBRUtWLEtBQUssQ0FBQ1UsSUFGWCxnREFFSyxZQUFZd0IsV0FBWixHQUEwQkMsS0FBMUIsQ0FBZ0MsRUFBaEMsRUFBb0NSLEdBQXBDLENBQXdDUyxDQUFDLGlCQUN0QztBQUFBLGdDQUNJO0FBQUEsb0JBQUtBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQSxzQkFESCxDQUZMLGVBUUk7QUFBQSxrQkFDQ3BDLEtBQUssQ0FBQ3FDLFlBQU4sS0FBdUIsR0FBdkIsSUFBOEJwQyxJQUFJLENBQUNQLFFBQUwsQ0FBY0ksTUFBZCxHQUF1QixDQUFyRCxpQkFDRztBQUFBLGlDQUNJLDhEQUFDLDREQUFEO0FBQXdCLG9CQUFRLEVBQUVHLElBQUksQ0FBQ1A7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFdBQVdPLElBQUksQ0FBQ1AsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKLFNBQVNzQyxJQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSixlQWVJO0FBQUEsa0JBQ0svQixJQUFJLENBQUNxQyxLQUFMLEtBQWUsR0FBZixpQkFDRztBQUFNLG1CQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGUixTQUFTTCxJQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmSjtBQUFBLE9BQVUsUUFBT2pDLEtBQUssQ0FBQ1UsSUFBSyxFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUF1Qkg7O0FBRUQsV0FBU2dCLGVBQVQsQ0FBeUJELEtBQXpCLEVBQWdDO0FBQzVCLHdCQUNJO0FBQWdDLGVBQVMsRUFBQyxTQUExQztBQUFBLGdCQUNDQSxLQUFLLENBQUNFLEdBQU4sQ0FBVVksQ0FBQyxpQkFDUjtBQUFBLGdDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsRUFFQ0EsQ0FBQyxLQUFLLEdBQU4sZ0JBQ0c7QUFBSSxtQkFBUyxFQUFDLGVBQWQ7QUFBOEIseUJBQVksU0FBMUM7QUFBb0QsZUFBSyxFQUFDLDBCQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESCxnQkFHRztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKO0FBQUEsc0JBREg7QUFERCxPQUFVLFNBQVF2QyxLQUFLLENBQUNVLElBQUssRUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBY0g7O0FBRUQsV0FBUzhCLGtCQUFULENBQTRCOUMsUUFBNUIsRUFBc0M7QUFDbEMsd0JBQ0k7QUFBQSw2QkFDSTtBQUFBLGtCQUFNLGFBQVlBLFFBQVM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLE9BQVUsWUFBV00sS0FBSyxDQUFDVSxJQUFLLEVBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQUtIO0FBRUo7O0dBdEh1QlgsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hNWEzYWM2ZDZkNzUwOTYzODU0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBTaG93QW5hZ3JhbXNGb3JPbmVXb3JkID0gKHtcclxuICAgIGFuYWdyYW1zPVtdXHJcbiAgICB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2ZsYWcsIHNldEZsYWddID0gdXNlU3RhdGUodHJ1ZSk7IC8vIHRydWU9c2hvdyBjb3VudCwgZmFsc2U9c2hvdyBhbmFncmFtc1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgYW5hZ3JhbXMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICA6IGZsYWcgP1xyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbmFncmFtQ291bnRcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJcclxuICAgICAgICAgICAgICAgIHRpdGxlPXthbmFncmFtc31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRGbGFnKCFmbGFnKTt9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7YW5hZ3JhbXMubGVuZ3RofVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbmFncmFtQ291bnRcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJcclxuICAgICAgICAgICAgICAgIHRpdGxlPXthbmFncmFtcy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0RmxhZyghZmxhZyk7fX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2FuYWdyYW1zfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbil9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvd0FuYWdyYW1zRm9yT25lV29yZDtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNob3dJbnNlcnRzRm9yT25lUG9zaXRpb24gZnJvbSAnLi9zaG93SW5zZXJ0c0Zvck9uZVBvc2l0aW9uJztcclxuaW1wb3J0IFNob3dTd2Fwc0Zvck9uZVBvc2l0aW9uIGZyb20gJy4vc2hvd1N3YXBzRm9yT25lUG9zaXRpb24nO1xyXG5pbXBvcnQgU2hvd0FuYWdyYW1zRm9yT25lV29yZCBmcm9tICcuL3Nob3dBbmFncmFtc0Zvck9uZVdvcmQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hvd2luZm8oIHByb3BzICkge1xyXG4gICAgY29uc3QgW2luZm8sIHNldEluZm9dID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCBhcGlDYWxsID0gYXN5bmMgKCk9PntcclxuICAgICAgICAgICAgbGV0IHVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FTkFCTEUySz9sZXR0ZXJzPScgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20vRU5BQkxFMks/bGV0dGVycz0nXHJcbiAgICAgICAgICAgIC8vICAnaHR0cHM6Ly93b3Jkcy1zY3JhYmJsZS5oZXJva3VhcHAuY29tL2FwaS9pbmZvLydcclxuICAgICAgICAgICAgLy8gbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vd29yZHMtc2NyYWJibGUuaGVyb2t1YXBwLmNvbS9hcGkvaW5mby8nICsgcHJvcHMud29yZClcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgcHJvcHMud29yZClcclxuICAgICAgICAgICAgbGV0IGpkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzd2Fwcz0ke0pTT04uc3RyaW5naWZ5KGpkYXRhLnN3YXBzKX1gKVxyXG4gICAgICAgICAgICBzZXRJbmZvKGpkYXRhKVxyXG4gICAgICAgICAgICBzZXRMb2FkZWQodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgYXBpQ2FsbCgpXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgbG9hZGVkID9cclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRyVGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd0luc2VydHMgPT09IFwiWVwiICYmIGluZm8uaW5zZXJ0cy5sZW5ndGggPiAwICYmIGRpc3BsYXlJbnNlcnRzUm93KGluZm8uaW5zZXJ0cyl9XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3dTd2FwcyA9PT0gXCJZXCIgJiYgaW5mby5zd2Fwcy5sZW5ndGggPiAwICYmIGRpc3BsYXlTd2Fwc1JvdyhpbmZvLnN3YXBzKX1cclxuICAgICAgICAgICAgICAgICAgICB7ZGlzcGxheVdvcmRSb3coKX1cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd0Ryb3BzID09PSBcIllcIiAmJiBpbmZvLmRyb3BzLmxlbmd0aCA+IDAgJiYgZGlzcGxheURyb3BzUm93KGluZm8uZHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJkaXZpZGVyXCI+PHRkIGNvbFNwYW49e3Byb3BzLndvcmQubGVuZ3RoICsgcHJvcHMud29yZC5sZW5ndGggKyAzfT4mbmJzcDs8L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDpcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckVtcGhhc2lzXCI+TG9hZGluZyAuLi48L2Rpdj5cclxuICAgICAgICBcclxuICAgICk7XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheUluc2VydHNSb3coaW5zZXJ0cykge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHRyIGtleT17YGluc2VydHNSb3cuJHtwcm9wcy53b3JkfWB9PlxyXG4gICAgICAgICAgICAgICAge2luc2VydHMubWFwKChpLGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNob3dJbnNlcnRzRm9yT25lUG9zaXRpb24gaW5zZXJ0TGV0dGVycz17aX0ga2V5PXtgaW5zZXJ0c0JhbGxvbi4ke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Nob3dJbnNlcnRzRm9yT25lUG9zaXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGlzcGxheVN3YXBzUm93KHN3YXBzKSB7XHJcbiAgICAgICAgY29uc3Qgc3dhcHMyID0gWy4uLnN3YXBzLCAnJ11cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2Bzd2Fwcy4ke3Byb3BzLndvcmR9YH0+XHJcbiAgICAgICAgICAgIHtzd2FwczI/Lm1hcCgocywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3dJbnNlcnRzID09PSAnTicgfHwgaW5mby5pbnNlcnRzW2luZGV4XSA9PT0gJycgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiaW5zZXJ0Q291bnRTcGFjZXJcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJhbGxvb25zdHJpbmdcIj7inrs8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8U2hvd1N3YXBzRm9yT25lUG9zaXRpb24gc3dhcExldHRlcnM9e3N9IGtleT17YHN3YXBzQmFsbG9uLiR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TaG93U3dhcHNGb3JPbmVQb3NpdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheVdvcmRSb3coKSB7XHJcbiAgICAgICAgY29uc3Qga2V5MSA9IHByb3BzLndvcmQ7XHJcbiAgICAgICAgY29uc3Qga2V5MiA9IHByb3BzLndvcmQgKyAnMic7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtgd29yZC4ke3Byb3BzLndvcmR9YH0+XHJcbiAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy53b3JkPy50b1VwcGVyQ2FzZSgpLnNwbGl0KFwiXCIpLm1hcChsID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2x9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2tleTF9PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnNob3dBbmFncmFtcyA9PT0gXCJZXCIgJiYgaW5mby5hbmFncmFtcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmZvLmFuYWdyYW1zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNob3dBbmFncmFtc0Zvck9uZVdvcmQgYW5hZ3JhbXM9e2luZm8uYW5hZ3JhbXN9PjwvU2hvd0FuYWdyYW1zRm9yT25lV29yZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGtleT17a2V5Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAge2luZm8udmFsaWQgIT09ICdZJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ckRhbmdlclwiPk5vdCBhIHJlY29nbml6ZWQgd29yZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5RHJvcHNSb3coZHJvcHMpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2Bkcm9wcy4ke3Byb3BzLndvcmR9YH0gY2xhc3NOYW1lPVwiZHJvcFJvd1wiPlxyXG4gICAgICAgICAgICB7ZHJvcHMubWFwKGQgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAge2QgPT09IFwiWVwiID9cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZHJvcEluZGljYXRvclwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiWW91IGNhbiBkcm9wIHRoaXMgbGV0dGVyXCI+JmJ1bGw7PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheUFuYWdyYW1zUm93KGFuYWdyYW1zKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtgYW5hZ3JhbXMuJHtwcm9wcy53b3JkfWB9PlxyXG4gICAgICAgICAgICAgICAgPHRkPntgQW5hZ3JhbXM6ICR7YW5hZ3JhbXN9YH08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=