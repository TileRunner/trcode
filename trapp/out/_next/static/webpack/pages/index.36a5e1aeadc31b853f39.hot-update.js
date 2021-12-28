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
      children: [props.showInserts === "Y" && info.inserts.length > 0 && displayInsertsRow(info.inserts), props.showSwaps === "Y" && info.swaps.length > 0 && displaySwapsRow(info.swaps), displayWordRow(), props.showDrops === "Y" && info.drops.length > 0 && displayDropsRow(info.drops)]
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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, this), (_props$word = props.word) === null || _props$word === void 0 ? void 0 : _props$word.toUpperCase().split("").map(l => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          children: l
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 25
        }, this)]
      }, void 0, true)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: props.showAnagrams === "Y" && info.anagrams.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_showAnagramsForOneWord__WEBPACK_IMPORTED_MODULE_4__.default, {
            anagrams: info.anagrams
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
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
        children: info.valid !== 'Y' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "trDanger",
          children: "Not a recognized word"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 25
        }, this)
      }, key2, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
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
          lineNumber: 103,
          columnNumber: 17
        }, this), d === "Y" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "dropIndicator",
          "data-toggle": "tooltip",
          title: "You can drop this letter",
          children: "\u2022"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, this)]
      }, void 0, true))
    }, `drops.${props.word}`, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2kvc2hvd2luZm8uanMiXSwibmFtZXMiOlsiU2hvd2luZm8iLCJwcm9wcyIsImluZm8iLCJzZXRJbmZvIiwidXNlU3RhdGUiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJ1c2VFZmZlY3QiLCJhcGlDYWxsIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsIndvcmQiLCJqZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInN3YXBzIiwic2hvd0luc2VydHMiLCJpbnNlcnRzIiwibGVuZ3RoIiwiZGlzcGxheUluc2VydHNSb3ciLCJzaG93U3dhcHMiLCJkaXNwbGF5U3dhcHNSb3ciLCJkaXNwbGF5V29yZFJvdyIsInNob3dEcm9wcyIsImRyb3BzIiwiZGlzcGxheURyb3BzUm93IiwibWFwIiwiaSIsImluZGV4Iiwic3dhcHMyIiwicyIsImtleTEiLCJrZXkyIiwidG9VcHBlckNhc2UiLCJzcGxpdCIsImwiLCJzaG93QW5hZ3JhbXMiLCJhbmFncmFtcyIsInZhbGlkIiwiZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULENBQW1CQyxLQUFuQixFQUEyQjtBQUFBOztBQUN0QyxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkYsK0NBQVEsQ0FBQyxLQUFELENBQXBDO0FBQ0FHLGtEQUFTLENBQUMsTUFBSTtBQUNWLFVBQU1DLE9BQU8sR0FBRyxZQUFVO0FBQ3RCLFVBQUlDLEdBQUcsR0FBSSxLQUFELEdBQW9FLHlDQUFwRSxHQUFnSCxDQUExSCxDQURzQixDQUV0QjtBQUNBOztBQUNBLFVBQUlDLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNG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QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxFQUVDQSxDQUFDLEtBQUssR0FBTixnQkFDRztBQUFJLG1CQUFTLEVBQUMsZUFBZDtBQUE4Qix5QkFBWSxTQUExQztBQUFvRCxlQUFLLEVBQUMsMEJBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURILGdCQUdHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEo7QUFBQSxzQkFESDtBQURELE9BQVUsU0FBUTFDLEtBQUssQ0FBQ1csSUFBSyxFQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFjSDtBQUVKOztHQTdHdUJaLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzZhNWUxYWVhZGMzMWI4NTNmMzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaG93SW5zZXJ0c0Zvck9uZVBvc2l0aW9uIGZyb20gJy4vc2hvd0luc2VydHNGb3JPbmVQb3NpdGlvbic7XHJcbmltcG9ydCBTaG93U3dhcHNGb3JPbmVQb3NpdGlvbiBmcm9tICcuL3Nob3dTd2Fwc0Zvck9uZVBvc2l0aW9uJztcclxuaW1wb3J0IFNob3dBbmFncmFtc0Zvck9uZVdvcmQgZnJvbSAnLi9zaG93QW5hZ3JhbXNGb3JPbmVXb3JkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3dpbmZvKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IFtpbmZvLCBzZXRJbmZvXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3QgYXBpQ2FsbCA9IGFzeW5jICgpPT57XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvRU5BQkxFMks/bGV0dGVycz0nIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tL0VOQUJMRTJLP2xldHRlcnM9J1xyXG4gICAgICAgICAgICAvLyAgJ2h0dHBzOi8vd29yZHMtc2NyYWJibGUuaGVyb2t1YXBwLmNvbS9hcGkvaW5mby8nXHJcbiAgICAgICAgICAgIC8vIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3dvcmRzLXNjcmFiYmxlLmhlcm9rdWFwcC5jb20vYXBpL2luZm8vJyArIHByb3BzLndvcmQpXHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIHByb3BzLndvcmQpXHJcbiAgICAgICAgICAgIGxldCBqZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc3dhcHM9JHtKU09OLnN0cmluZ2lmeShqZGF0YS5zd2Fwcyl9YClcclxuICAgICAgICAgICAgc2V0SW5mbyhqZGF0YSlcclxuICAgICAgICAgICAgc2V0TG9hZGVkKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFwaUNhbGwoKVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIGxvYWRlZCA/XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0clRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3dJbnNlcnRzID09PSBcIllcIiAmJiBpbmZvLmluc2VydHMubGVuZ3RoID4gMCAmJiBkaXNwbGF5SW5zZXJ0c1JvdyhpbmZvLmluc2VydHMpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93U3dhcHMgPT09IFwiWVwiICYmIGluZm8uc3dhcHMubGVuZ3RoID4gMCAmJiBkaXNwbGF5U3dhcHNSb3coaW5mby5zd2Fwcyl9XHJcbiAgICAgICAgICAgICAgICAgICAge2Rpc3BsYXlXb3JkUm93KCl9XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3dEcm9wcyA9PT0gXCJZXCIgJiYgaW5mby5kcm9wcy5sZW5ndGggPiAwICYmIGRpc3BsYXlEcm9wc1JvdyhpbmZvLmRyb3BzKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyRW1waGFzaXNcIj5Mb2FkaW5nIC4uLjwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKTtcclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5SW5zZXJ0c1JvdyhpbnNlcnRzKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtgaW5zZXJ0c1Jvdy4ke3Byb3BzLndvcmR9YH0+XHJcbiAgICAgICAgICAgICAgICB7aW5zZXJ0cy5tYXAoKGksaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2hvd0luc2VydHNGb3JPbmVQb3NpdGlvbiBpbnNlcnRMZXR0ZXJzPXtpfSBrZXk9e2BpbnNlcnRzQmFsbG9uLiR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2hvd0luc2VydHNGb3JPbmVQb3NpdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5U3dhcHNSb3coc3dhcHMpIHtcclxuICAgICAgICBjb25zdCBzd2FwczIgPSBbLi4uc3dhcHMsICcnXVxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHRyIGtleT17YHN3YXBzLiR7cHJvcHMud29yZH1gfT5cclxuICAgICAgICAgICAge3N3YXBzMj8ubWFwKChzLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd0luc2VydHMgPT09ICdOJyB8fCBpbmZvLmluc2VydHNbaW5kZXhdID09PSAnJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJpbnNlcnRDb3VudFNwYWNlclwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYmFsbG9vbnN0cmluZ1wiPuKeuzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxTaG93U3dhcHNGb3JPbmVQb3NpdGlvbiBzd2FwTGV0dGVycz17c30ga2V5PXtgc3dhcHNCYWxsb24uJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Nob3dTd2Fwc0Zvck9uZVBvc2l0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5V29yZFJvdygpIHtcclxuICAgICAgICBjb25zdCBrZXkxID0gcHJvcHMud29yZDtcclxuICAgICAgICBjb25zdCBrZXkyID0gcHJvcHMud29yZCArICcyJztcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2B3b3JkLiR7cHJvcHMud29yZH1gfT5cclxuICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLndvcmQ/LnRvVXBwZXJDYXNlKCkuc3BsaXQoXCJcIikubWFwKGwgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPHRkIGtleT17a2V5MX0+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd0FuYWdyYW1zID09PSBcIllcIiAmJiBpbmZvLmFuYWdyYW1zLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZm8uYW5hZ3JhbXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2hvd0FuYWdyYW1zRm9yT25lV29yZCBhbmFncmFtcz17aW5mby5hbmFncmFtc30+PC9TaG93QW5hZ3JhbXNGb3JPbmVXb3JkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQga2V5PXtrZXkyfT5cclxuICAgICAgICAgICAgICAgICAgICB7aW5mby52YWxpZCAhPT0gJ1knICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyRGFuZ2VyXCI+Tm90IGEgcmVjb2duaXplZCB3b3JkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlEcm9wc1Jvdyhkcm9wcykge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHRyIGtleT17YGRyb3BzLiR7cHJvcHMud29yZH1gfSBjbGFzc05hbWU9XCJkcm9wUm93XCI+XHJcbiAgICAgICAgICAgIHtkcm9wcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICB7ZCA9PT0gXCJZXCIgP1xyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkcm9wSW5kaWNhdG9yXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJZb3UgY2FuIGRyb3AgdGhpcyBsZXR0ZXJcIj4mYnVsbDs8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=