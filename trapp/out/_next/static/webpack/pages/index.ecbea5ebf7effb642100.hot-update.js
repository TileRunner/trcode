self["webpackHotUpdate_N_E"]("pages/index",{

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
      children: inserts.map((i, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_showInsertsForOnePosition__WEBPACK_IMPORTED_MODULE_2__.default, {
          insertLetters: i
        }, `insertsBallon.${index}`, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 25
        }, this)]
      }, void 0, true))
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
          lineNumber: 58,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "balloonstring",
          children: "\u27BB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_showSwapsForOnePosition__WEBPACK_IMPORTED_MODULE_3__.default, {
          swapLetters: s
        }, `swapsBallon.${index}`, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, this)]
      }, void 0, true))
    }, `swaps.${props.word}`, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
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
        lineNumber: 75,
        columnNumber: 17
      }, this), (_props$word = props.word) === null || _props$word === void 0 ? void 0 : _props$word.toUpperCase().split("").map((l, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: info.valid ? "letter" : "letterInvalidWord",
          children: l
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "facevalue",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("sub", {
            children: letterValue(l)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 51
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
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
            lineNumber: 86,
            columnNumber: 25
          }, this)
        }, info.anagrams, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, this)
      }, key1, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: info.valid === 'Y' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "wordIsValid",
          children: "Valid word"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "wordIsNotValid",
          children: "Not a recognized word"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 25
        }, this)
      }, key2, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, this)]
    }, `word.${props.word}`, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, this);
  }

  function displayDropsRow(drops) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      className: "dropRow",
      children: drops.map(d => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 17
        }, this), d === "Y" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "dropIndicator",
          "data-toggle": "tooltip",
          title: "You can drop this letter",
          children: "\u2022"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, this)]
      }, void 0, true))
    }, `drops.${props.word}`, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }, this);
  }

  function displayAnagramsRow(anagrams) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: `Anagrams: ${anagrams}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }, this)
    }, `anagrams.${props.word}`, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2kvc2hvd2luZm8uanMiXSwibmFtZXMiOlsiU2hvd2luZm8iLCJwcm9wcyIsImluZm8iLCJzZXRJbmZvIiwidXNlU3RhdGUiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJ1c2VFZmZlY3QiLCJhcGlDYWxsIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsIndvcmQiLCJqZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInN3YXBzIiwic2hvd0luc2VydHMiLCJpbnNlcnRzIiwibGVuZ3RoIiwiZGlzcGxheUluc2VydHNSb3ciLCJzaG93U3dhcHMiLCJkaXNwbGF5U3dhcHNSb3ciLCJkaXNwbGF5V29yZFJvdyIsInNob3dEcm9wcyIsImRyb3BzIiwiZGlzcGxheURyb3BzUm93IiwibWFwIiwiaSIsImluZGV4Iiwic3dhcHMyIiwicyIsImtleTEiLCJrZXkyIiwidG9VcHBlckNhc2UiLCJzcGxpdCIsImwiLCJ2YWxpZCIsImxldHRlclZhbHVlIiwic2hvd0FuYWdyYW1zIiwiYW5hZ3JhbXMiLCJkIiwiZGlzcGxheUFuYWdyYW1zUm93IiwibGV0dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsQ0FBbUJDLEtBQW5CLEVBQTJCO0FBQUE7O0FBQ3RDLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCRiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEM7QUFDQUcsa0RBQVMsQ0FBQyxNQUFJO0FBQ1YsVUFBTUMsT0FBTyxHQUFHLFlBQVU7QUFDdEIsVUFBSUMsR0FBRyxHQUFJLEtBQUQsR0FBb0UseUNBQXBFLEdBQWdILENBQTFILENBRHNCLENBRXRCO0FBQ0E7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NkJBQ0k7QUFBQSxrQkFBTSxhQUFZQSxRQUFTO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixPQUFVLFlBQVcxQyxLQUFLLENBQUNXLElBQUssRUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBS0g7O0FBRUQsV0FBUzZCLFdBQVQsQ0FBcUJLLE1BQXJCLEVBQTZCO0FBQ3pCLFlBQU9BLE1BQVA7QUFDSSxXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sQ0FBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sQ0FBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sQ0FBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sQ0FBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sRUFBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLEVBQVA7QUFoQ1I7O0FBa0NBLFdBQU8sQ0FBUDtBQUNIO0FBQ0o7O0dBL0p1QjlDLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWNiZWE1ZWJmN2VmZmI2NDIxMDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaG93SW5zZXJ0c0Zvck9uZVBvc2l0aW9uIGZyb20gJy4vc2hvd0luc2VydHNGb3JPbmVQb3NpdGlvbic7XHJcbmltcG9ydCBTaG93U3dhcHNGb3JPbmVQb3NpdGlvbiBmcm9tICcuL3Nob3dTd2Fwc0Zvck9uZVBvc2l0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3dpbmZvKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IFtpbmZvLCBzZXRJbmZvXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3QgYXBpQ2FsbCA9IGFzeW5jICgpPT57XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvRU5BQkxFMks/bGV0dGVycz0nIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tL0VOQUJMRTJLP2xldHRlcnM9J1xyXG4gICAgICAgICAgICAvLyAgJ2h0dHBzOi8vd29yZHMtc2NyYWJibGUuaGVyb2t1YXBwLmNvbS9hcGkvaW5mby8nXHJcbiAgICAgICAgICAgIC8vIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3dvcmRzLXNjcmFiYmxlLmhlcm9rdWFwcC5jb20vYXBpL2luZm8vJyArIHByb3BzLndvcmQpXHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIHByb3BzLndvcmQpXHJcbiAgICAgICAgICAgIGxldCBqZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc3dhcHM9JHtKU09OLnN0cmluZ2lmeShqZGF0YS5zd2Fwcyl9YClcclxuICAgICAgICAgICAgc2V0SW5mbyhqZGF0YSlcclxuICAgICAgICAgICAgc2V0TG9hZGVkKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFwaUNhbGwoKVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIGxvYWRlZCA/XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0clRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3dJbnNlcnRzID09PSBcIllcIiAmJiBpbmZvLmluc2VydHMubGVuZ3RoID4gMCAmJiBkaXNwbGF5SW5zZXJ0c1JvdyhpbmZvLmluc2VydHMpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93U3dhcHMgPT09IFwiWVwiICYmIGluZm8uc3dhcHMubGVuZ3RoID4gMCAmJiBkaXNwbGF5U3dhcHNSb3coaW5mby5zd2Fwcyl9XHJcbiAgICAgICAgICAgICAgICAgICAge2Rpc3BsYXlXb3JkUm93KCl9XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3dEcm9wcyA9PT0gXCJZXCIgJiYgaW5mby5kcm9wcy5sZW5ndGggPiAwICYmIGRpc3BsYXlEcm9wc1JvdyhpbmZvLmRyb3BzKX1cclxuICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiZGl2aWRlclwiPjx0ZCBjb2xTcGFuPXtwcm9wcy53b3JkLmxlbmd0aCArIHByb3BzLndvcmQubGVuZ3RoICsgM30+Jm5ic3A7PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA6XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJFbXBoYXNpc1wiPkxvYWRpbmcgLi4uPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApO1xyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlJbnNlcnRzUm93KGluc2VydHMpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2BpbnNlcnRzUm93LiR7cHJvcHMud29yZH1gfT5cclxuICAgICAgICAgICAgICAgIHtpbnNlcnRzLm1hcCgoaSxpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaG93SW5zZXJ0c0Zvck9uZVBvc2l0aW9uIGluc2VydExldHRlcnM9e2l9IGtleT17YGluc2VydHNCYWxsb24uJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TaG93SW5zZXJ0c0Zvck9uZVBvc2l0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlTd2Fwc1Jvdyhzd2Fwcykge1xyXG4gICAgICAgIGNvbnN0IHN3YXBzMiA9IFsuLi5zd2FwcywgJyddXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtgc3dhcHMuJHtwcm9wcy53b3JkfWB9PlxyXG4gICAgICAgICAgICB7c3dhcHMyPy5tYXAoKHMsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93SW5zZXJ0cyA9PT0gJ04nIHx8IGluZm8uaW5zZXJ0c1tpbmRleF0gPT09ICcnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImluc2VydENvdW50U3BhY2VyXCI+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJiYWxsb29uc3RyaW5nXCI+4p67PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPFNob3dTd2Fwc0Zvck9uZVBvc2l0aW9uIHN3YXBMZXR0ZXJzPXtzfSBrZXk9e2Bzd2Fwc0JhbGxvbi4ke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2hvd1N3YXBzRm9yT25lUG9zaXRpb24+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlXb3JkUm93KCkge1xyXG4gICAgICAgIGNvbnN0IGtleTEgPSBwcm9wcy53b3JkO1xyXG4gICAgICAgIGNvbnN0IGtleTIgPSBwcm9wcy53b3JkICsgJzInO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImRpc3BsYXlXb3JkUm93XCIga2V5PXtgd29yZC4ke3Byb3BzLndvcmR9YH0+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiaW5zZXJ0Q291bnRTcGFjZXJcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLndvcmQ/LnRvVXBwZXJDYXNlKCkuc3BsaXQoXCJcIikubWFwKChsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2luZm8udmFsaWQgPyBcImxldHRlclwiIDogXCJsZXR0ZXJJbnZhbGlkV29yZFwifT57bH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZmFjZXZhbHVlXCI+PHN1Yj57bGV0dGVyVmFsdWUobCl9PC9zdWI+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPHRkIGtleT17a2V5MX0+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd0FuYWdyYW1zID09PSBcIllcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5mby5hbmFncmFtc30+XHJcbiAgICAgICAgICAgICAgICAgICAge2luZm8uYW5hZ3JhbXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbmFncmFtQ291bnRcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT17aW5mby5hbmFncmFtc30+e2luZm8uYW5hZ3JhbXMubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2tleTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbmZvLnZhbGlkID09PSAnWScgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3b3JkSXNWYWxpZFwiPlZhbGlkIHdvcmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3b3JkSXNOb3RWYWxpZFwiPk5vdCBhIHJlY29nbml6ZWQgd29yZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5RHJvcHNSb3coZHJvcHMpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2Bkcm9wcy4ke3Byb3BzLndvcmR9YH0gY2xhc3NOYW1lPVwiZHJvcFJvd1wiPlxyXG4gICAgICAgICAgICB7ZHJvcHMubWFwKGQgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAge2QgPT09IFwiWVwiID9cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZHJvcEluZGljYXRvclwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiWW91IGNhbiBkcm9wIHRoaXMgbGV0dGVyXCI+JmJ1bGw7PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheUFuYWdyYW1zUm93KGFuYWdyYW1zKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtgYW5hZ3JhbXMuJHtwcm9wcy53b3JkfWB9PlxyXG4gICAgICAgICAgICAgICAgPHRkPntgQW5hZ3JhbXM6ICR7YW5hZ3JhbXN9YH08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsZXR0ZXJWYWx1ZShsZXR0ZXIpIHtcclxuICAgICAgICBzd2l0Y2gobGV0dGVyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ0QnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDIpO1xyXG4gICAgICAgICAgICBjYXNlICdHJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigyKTtcclxuICAgICAgICAgICAgY2FzZSAnQic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMyk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0MnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDMpO1xyXG4gICAgICAgICAgICBjYXNlICdNJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigzKTtcclxuICAgICAgICAgICAgY2FzZSAnUCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMyk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0YnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDQpO1xyXG4gICAgICAgICAgICBjYXNlICdIJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig0KTtcclxuICAgICAgICAgICAgY2FzZSAnVic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oNCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ1cnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDQpO1xyXG4gICAgICAgICAgICBjYXNlICdZJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig0KTtcclxuICAgICAgICAgICAgY2FzZSAnSyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oNSk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0onOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDgpO1xyXG4gICAgICAgICAgICBjYXNlICdYJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig4KTtcclxuICAgICAgICAgICAgY2FzZSAnUSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMTApO1xyXG4gICAgICAgICAgICBjYXNlICdaJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybigxKTtcclxuICAgIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==