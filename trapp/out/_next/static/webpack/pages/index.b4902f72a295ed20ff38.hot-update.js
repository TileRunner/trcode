self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/wi/showSwapsForOnePosition.js":
/*!*********************************************!*\
  !*** ./pages/wi/showSwapsForOnePosition.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\wi\\showSwapsForOnePosition.js",
    _s = $RefreshSig$();



const ShowSwapsForOnePosition = ({
  swapLetters = ''
}) => {
  _s();

  const {
    0: flag,
    1: setFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // true=show count, false=show letters

  return swapLetters === '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 13
  }, undefined) : flag ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
    className: "swapCount",
    "data-toggle": "tooltip",
    title: swapLetters,
    onClick: () => {
      setFlag(!flag);
    },
    children: swapLetters.length
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 13
  }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
    className: "swapCount",
    "data-toggle": "tooltip",
    title: swapLetters.length,
    onClick: () => {
      setFlag(!flag);
    },
    children: swapLetters
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 13
  }, undefined);
};

_s(ShowSwapsForOnePosition, "dJmjEfD7K4XJxFJixWG4ORFdA7k=");

_c = ShowSwapsForOnePosition;
/* harmony default export */ __webpack_exports__["default"] = (ShowSwapsForOnePosition);

var _c;

$RefreshReg$(_c, "ShowSwapsForOnePosition");

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
          lineNumber: 30,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 13
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trEmphasis",
    children: "Loading ..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 13
  }, this);

  function displayInsertsRow(inserts) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: inserts.map((i, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_showInsertsForOnePosition__WEBPACK_IMPORTED_MODULE_2__.default, {
        insertLetters: i
      }, `insertsBallon.${index}`, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }, this))
    }, `insertsRow.${props.word}`, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
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
          lineNumber: 55,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "balloonstring",
          children: "\u27BB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_showSwapsForOnePosition__WEBPACK_IMPORTED_MODULE_3__.default, {
          swapLetters: s
        }, `swapsBallon.${index}`, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, this)]
      }, void 0, true))
    }, `swaps.${props.word}`, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, this);
  }

  function displayWordRow() {
    var _props$word;

    const key1 = props.word;
    const key2 = props.word + '2';
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      className: "displayWordRow",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        className: "insertCountSpacer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, this), (_props$word = props.word) === null || _props$word === void 0 ? void 0 : _props$word.toUpperCase().split("").map((l, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: info.valid ? "letter" : "letterInvalidWord",
          children: l
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "facevalue",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("sub", {
            children: letterValue(l)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 51
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 25
        }, this)]
      }, void 0, true)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: props.showAnagrams === "Y" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: info.anagrams.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "anagramCount",
            "data-toggle": "tooltip",
            title: info.anagrams,
            children: info.anagrams.length
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 25
          }, this)
        }, info.anagrams, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, this)
      }, key1, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: info.valid === 'Y' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "wordIsValid",
          children: "Valid word"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "wordIsNotValid",
          children: "Not a recognized word"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 25
        }, this)
      }, key2, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this)]
    }, `word.${props.word}`, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
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

  function letterValue(letter) {
    switch (letter) {
      case 'D':
        return 2;

      case 'G':
        return 2;

      case 'B':
        return 3;

      case 'C':
        return 3;

      case 'M':
        return 3;

      case 'P':
        return 3;

      case 'F':
        return 4;

      case 'H':
        return 4;

      case 'V':
        return 4;

      case 'W':
        return 4;

      case 'Y':
        return 4;

      case 'K':
        return 5;

      case 'J':
        return 8;

      case 'X':
        return 8;

      case 'Q':
        return 10;

      case 'Z':
        return 10;
    }

    return 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2kvc2hvd1N3YXBzRm9yT25lUG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3dpL3Nob3dpbmZvLmpzIl0sIm5hbWVzIjpbIlNob3dTd2Fwc0Zvck9uZVBvc2l0aW9uIiwic3dhcExldHRlcnMiLCJmbGFnIiwic2V0RmxhZyIsInVzZVN0YXRlIiwibGVuZ3RoIiwiU2hvd2luZm8iLCJwcm9wcyIsImluZm8iLCJzZXRJbmZvIiwibG9hZGVkIiwic2V0TG9hZGVkIiwidXNlRWZmZWN0IiwiYXBpQ2FsbCIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJ3b3JkIiwiamRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJzd2FwcyIsInNob3dJbnNlcnRzIiwiaW5zZXJ0cyIsImRpc3BsYXlJbnNlcnRzUm93Iiwic2hvd1N3YXBzIiwiZGlzcGxheVN3YXBzUm93IiwiZGlzcGxheVdvcmRSb3ciLCJzaG93RHJvcHMiLCJkcm9wcyIsImRpc3BsYXlEcm9wc1JvdyIsIm1hcCIsImkiLCJpbmRleCIsInN3YXBzMiIsInMiLCJrZXkxIiwia2V5MiIsInRvVXBwZXJDYXNlIiwic3BsaXQiLCJsIiwidmFsaWQiLCJsZXR0ZXJWYWx1ZSIsInNob3dBbmFncmFtcyIsImFuYWdyYW1zIiwiZCIsImRpc3BsYXlBbmFncmFtc1JvdyIsImxldHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSx1QkFBdUIsR0FBRyxDQUFDO0FBQzdCQyxhQUFXLEdBQUM7QUFEaUIsQ0FBRCxLQUV0QjtBQUFBOztBQUVOLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQyxJQUFELENBQWhDLENBRk0sQ0FFa0M7O0FBRXhDLFNBQ0lILFdBQVcsS0FBSyxFQUFoQixnQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFB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O0FBS0g7O0FBRUQsV0FBUzRCLFdBQVQsQ0FBcUJLLE1BQXJCLEVBQTZCO0FBQ3pCLFlBQU9BLE1BQVA7QUFDSSxXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sQ0FBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sQ0FBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sQ0FBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sQ0FBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sRUFBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLEVBQVA7QUFoQ1I7O0FBa0NBLFdBQU8sQ0FBUDtBQUNIO0FBQ0o7O0dBNUp1QjVDLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjQ5MDJmNzJhMjk1ZWQyMGZmMzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgU2hvd1N3YXBzRm9yT25lUG9zaXRpb24gPSAoe1xyXG4gICAgc3dhcExldHRlcnM9JydcclxuICAgIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbZmxhZywgc2V0RmxhZ10gPSB1c2VTdGF0ZSh0cnVlKTsgLy8gdHJ1ZT1zaG93IGNvdW50LCBmYWxzZT1zaG93IGxldHRlcnNcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHN3YXBMZXR0ZXJzID09PSAnJyA/XHJcbiAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgIDogZmxhZyA/XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJzd2FwQ291bnRcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtzd2FwTGV0dGVyc31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRGbGFnKCFmbGFnKTt9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c3dhcExldHRlcnMubGVuZ3RofVxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDpcclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInN3YXBDb3VudFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3N3YXBMZXR0ZXJzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRGbGFnKCFmbGFnKTt9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c3dhcExldHRlcnN9XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbil9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvd1N3YXBzRm9yT25lUG9zaXRpb247XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaG93SW5zZXJ0c0Zvck9uZVBvc2l0aW9uIGZyb20gJy4vc2hvd0luc2VydHNGb3JPbmVQb3NpdGlvbic7XHJcbmltcG9ydCBTaG93U3dhcHNGb3JPbmVQb3NpdGlvbiBmcm9tICcuL3Nob3dTd2Fwc0Zvck9uZVBvc2l0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3dpbmZvKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IFtpbmZvLCBzZXRJbmZvXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3QgYXBpQ2FsbCA9IGFzeW5jICgpPT57XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvRU5BQkxFMks/bGV0dGVycz0nIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tL0VOQUJMRTJLP2xldHRlcnM9J1xyXG4gICAgICAgICAgICAvLyAgJ2h0dHBzOi8vd29yZHMtc2NyYWJibGUuaGVyb2t1YXBwLmNvbS9hcGkvaW5mby8nXHJcbiAgICAgICAgICAgIC8vIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3dvcmRzLXNjcmFiYmxlLmhlcm9rdWFwcC5jb20vYXBpL2luZm8vJyArIHByb3BzLndvcmQpXHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIHByb3BzLndvcmQpXHJcbiAgICAgICAgICAgIGxldCBqZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc3dhcHM9JHtKU09OLnN0cmluZ2lmeShqZGF0YS5zd2Fwcyl9YClcclxuICAgICAgICAgICAgc2V0SW5mbyhqZGF0YSlcclxuICAgICAgICAgICAgc2V0TG9hZGVkKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFwaUNhbGwoKVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIGxvYWRlZCA/XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0clRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3dJbnNlcnRzID09PSBcIllcIiAmJiBpbmZvLmluc2VydHMubGVuZ3RoID4gMCAmJiBkaXNwbGF5SW5zZXJ0c1JvdyhpbmZvLmluc2VydHMpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93U3dhcHMgPT09IFwiWVwiICYmIGluZm8uc3dhcHMubGVuZ3RoID4gMCAmJiBkaXNwbGF5U3dhcHNSb3coaW5mby5zd2Fwcyl9XHJcbiAgICAgICAgICAgICAgICAgICAge2Rpc3BsYXlXb3JkUm93KCl9XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3dEcm9wcyA9PT0gXCJZXCIgJiYgaW5mby5kcm9wcy5sZW5ndGggPiAwICYmIGRpc3BsYXlEcm9wc1JvdyhpbmZvLmRyb3BzKX1cclxuICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiZGl2aWRlclwiPjx0ZCBjb2xTcGFuPXtwcm9wcy53b3JkLmxlbmd0aCArIHByb3BzLndvcmQubGVuZ3RoICsgM30+Jm5ic3A7PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA6XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJFbXBoYXNpc1wiPkxvYWRpbmcgLi4uPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApO1xyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlJbnNlcnRzUm93KGluc2VydHMpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2BpbnNlcnRzUm93LiR7cHJvcHMud29yZH1gfT5cclxuICAgICAgICAgICAgICAgIHtpbnNlcnRzLm1hcCgoaSxpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTaG93SW5zZXJ0c0Zvck9uZVBvc2l0aW9uIGluc2VydExldHRlcnM9e2l9IGtleT17YGluc2VydHNCYWxsb24uJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Nob3dJbnNlcnRzRm9yT25lUG9zaXRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5U3dhcHNSb3coc3dhcHMpIHtcclxuICAgICAgICBjb25zdCBzd2FwczIgPSBbLi4uc3dhcHMsICcnXVxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHRyIGtleT17YHN3YXBzLiR7cHJvcHMud29yZH1gfT5cclxuICAgICAgICAgICAge3N3YXBzMj8ubWFwKChzLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd0luc2VydHMgPT09ICdOJyB8fCBpbmZvLmluc2VydHNbaW5kZXhdID09PSAnJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJpbnNlcnRDb3VudFNwYWNlclwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYmFsbG9vbnN0cmluZ1wiPuKeuzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxTaG93U3dhcHNGb3JPbmVQb3NpdGlvbiBzd2FwTGV0dGVycz17c30ga2V5PXtgc3dhcHNCYWxsb24uJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Nob3dTd2Fwc0Zvck9uZVBvc2l0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5V29yZFJvdygpIHtcclxuICAgICAgICBjb25zdCBrZXkxID0gcHJvcHMud29yZDtcclxuICAgICAgICBjb25zdCBrZXkyID0gcHJvcHMud29yZCArICcyJztcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJkaXNwbGF5V29yZFJvd1wiIGtleT17YHdvcmQuJHtwcm9wcy53b3JkfWB9PlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImluc2VydENvdW50U3BhY2VyXCI+PC90ZD5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy53b3JkPy50b1VwcGVyQ2FzZSgpLnNwbGl0KFwiXCIpLm1hcCgobCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtpbmZvLnZhbGlkID8gXCJsZXR0ZXJcIiA6IFwibGV0dGVySW52YWxpZFdvcmRcIn0+e2x9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZhY2V2YWx1ZVwiPjxzdWI+e2xldHRlclZhbHVlKGwpfTwvc3ViPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2tleTF9PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnNob3dBbmFncmFtcyA9PT0gXCJZXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZm8uYW5hZ3JhbXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbmZvLmFuYWdyYW1zLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYW5hZ3JhbUNvdW50XCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9e2luZm8uYW5hZ3JhbXN9PntpbmZvLmFuYWdyYW1zLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQga2V5PXtrZXkyfT5cclxuICAgICAgICAgICAgICAgICAgICB7aW5mby52YWxpZCA9PT0gJ1knID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid29yZElzVmFsaWRcIj5WYWxpZCB3b3JkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid29yZElzTm90VmFsaWRcIj5Ob3QgYSByZWNvZ25pemVkIHdvcmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheURyb3BzUm93KGRyb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtgZHJvcHMuJHtwcm9wcy53b3JkfWB9IGNsYXNzTmFtZT1cImRyb3BSb3dcIj5cclxuICAgICAgICAgICAge2Ryb3BzLm1hcChkID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgIHtkID09PSBcIllcIiA/XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImRyb3BJbmRpY2F0b3JcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIllvdSBjYW4gZHJvcCB0aGlzIGxldHRlclwiPiZidWxsOzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlBbmFncmFtc1JvdyhhbmFncmFtcykge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHRyIGtleT17YGFuYWdyYW1zLiR7cHJvcHMud29yZH1gfT5cclxuICAgICAgICAgICAgICAgIDx0ZD57YEFuYWdyYW1zOiAke2FuYWdyYW1zfWB9PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbGV0dGVyVmFsdWUobGV0dGVyKSB7XHJcbiAgICAgICAgc3dpdGNoKGxldHRlcikge1xyXG4gICAgICAgICAgICBjYXNlICdEJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigyKTtcclxuICAgICAgICAgICAgY2FzZSAnRyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMik7XHJcbiAgICAgICAgICAgIGNhc2UgJ0InOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDMpO1xyXG4gICAgICAgICAgICBjYXNlICdDJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigzKTtcclxuICAgICAgICAgICAgY2FzZSAnTSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMyk7XHJcbiAgICAgICAgICAgIGNhc2UgJ1AnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDMpO1xyXG4gICAgICAgICAgICBjYXNlICdGJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig0KTtcclxuICAgICAgICAgICAgY2FzZSAnSCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oNCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ1YnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDQpO1xyXG4gICAgICAgICAgICBjYXNlICdXJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig0KTtcclxuICAgICAgICAgICAgY2FzZSAnWSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oNCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0snOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDUpO1xyXG4gICAgICAgICAgICBjYXNlICdKJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig4KTtcclxuICAgICAgICAgICAgY2FzZSAnWCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oOCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ1EnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDEwKTtcclxuICAgICAgICAgICAgY2FzZSAnWic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMTApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4oMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=