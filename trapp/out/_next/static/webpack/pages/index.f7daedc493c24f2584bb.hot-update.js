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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2kvc2hvd2luZm8uanMiXSwibmFtZXMiOlsiU2hvd2luZm8iLCJwcm9wcyIsImluZm8iLCJzZXRJbmZvIiwidXNlU3RhdGUiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJ1c2VFZmZlY3QiLCJhcGlDYWxsIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsIndvcmQiLCJqZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInN3YXBzIiwic2hvd0luc2VydHMiLCJpbnNlcnRzIiwibGVuZ3RoIiwiZGlzcGxheUluc2VydHNSb3ciLCJzaG93U3dhcHMiLCJkaXNwbGF5U3dhcHNSb3ciLCJkaXNwbGF5V29yZFJvdyIsInNob3dEcm9wcyIsImRyb3BzIiwiZGlzcGxheURyb3BzUm93IiwibWFwIiwiaSIsImluZGV4Iiwic3dhcHMyIiwicyIsImtleTEiLCJrZXkyIiwidG9VcHBlckNhc2UiLCJzcGxpdCIsImwiLCJ2YWxpZCIsInNob3dBbmFncmFtcyIsImFuYWdyYW1zIiwiZCIsImRpc3BsYXlBbmFncmFtc1JvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULENBQW1CQyxLQUFuQixFQUEyQjtBQUFBOztBQUN0QyxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkYsK0NBQVEsQ0FBQyxLQUFELENBQXBDO0FBQ0FHLGtEQUFTLENBQUMsTUFBSTtBQUNWLFVBQU1DLE9BQU8sR0FBRyxZQUFVO0FBQ3RCLFVBQUlDLEdBQUcsR0FBSSxLQUFELEdBQW9FLHlDQUFwRSxHQUFnSCxDQUExSCxDQURzQixDQUV0QjtBQUNBOztBQUNBLFVBQUlDLFFBQVEsR0FBRyxN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SjtBQUtIO0FBRUo7O0dBMUh1QlosUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mN2RhZWRjNDkzYzI0ZjI1ODRiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNob3dJbnNlcnRzRm9yT25lUG9zaXRpb24gZnJvbSAnLi9zaG93SW5zZXJ0c0Zvck9uZVBvc2l0aW9uJztcclxuaW1wb3J0IFNob3dTd2Fwc0Zvck9uZVBvc2l0aW9uIGZyb20gJy4vc2hvd1N3YXBzRm9yT25lUG9zaXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hvd2luZm8oIHByb3BzICkge1xyXG4gICAgY29uc3QgW2luZm8sIHNldEluZm9dID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCBhcGlDYWxsID0gYXN5bmMgKCk9PntcclxuICAgICAgICAgICAgbGV0IHVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FTkFCTEUySz9sZXR0ZXJzPScgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20vRU5BQkxFMks/bGV0dGVycz0nXHJcbiAgICAgICAgICAgIC8vICAnaHR0cHM6Ly93b3Jkcy1zY3JhYmJsZS5oZXJva3VhcHAuY29tL2FwaS9pbmZvLydcclxuICAgICAgICAgICAgLy8gbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vd29yZHMtc2NyYWJibGUuaGVyb2t1YXBwLmNvbS9hcGkvaW5mby8nICsgcHJvcHMud29yZClcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgcHJvcHMud29yZClcclxuICAgICAgICAgICAgbGV0IGpkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzd2Fwcz0ke0pTT04uc3RyaW5naWZ5KGpkYXRhLnN3YXBzKX1gKVxyXG4gICAgICAgICAgICBzZXRJbmZvKGpkYXRhKVxyXG4gICAgICAgICAgICBzZXRMb2FkZWQodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgYXBpQ2FsbCgpXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgbG9hZGVkID9cclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRyVGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd0luc2VydHMgPT09IFwiWVwiICYmIGluZm8uaW5zZXJ0cy5sZW5ndGggPiAwICYmIGRpc3BsYXlJbnNlcnRzUm93KGluZm8uaW5zZXJ0cyl9XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3dTd2FwcyA9PT0gXCJZXCIgJiYgaW5mby5zd2Fwcy5sZW5ndGggPiAwICYmIGRpc3BsYXlTd2Fwc1JvdyhpbmZvLnN3YXBzKX1cclxuICAgICAgICAgICAgICAgICAgICB7ZGlzcGxheVdvcmRSb3coKX1cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd0Ryb3BzID09PSBcIllcIiAmJiBpbmZvLmRyb3BzLmxlbmd0aCA+IDAgJiYgZGlzcGxheURyb3BzUm93KGluZm8uZHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJkaXZpZGVyXCI+PHRkIGNvbFNwYW49e3Byb3BzLndvcmQubGVuZ3RoICsgcHJvcHMud29yZC5sZW5ndGggKyAzfT4mbmJzcDs8L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDpcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckVtcGhhc2lzXCI+TG9hZGluZyAuLi48L2Rpdj5cclxuICAgICAgICBcclxuICAgICk7XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheUluc2VydHNSb3coaW5zZXJ0cykge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHRyIGtleT17YGluc2VydHNSb3cuJHtwcm9wcy53b3JkfWB9PlxyXG4gICAgICAgICAgICAgICAge2luc2VydHMubWFwKChpLGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNob3dJbnNlcnRzRm9yT25lUG9zaXRpb24gaW5zZXJ0TGV0dGVycz17aX0ga2V5PXtgaW5zZXJ0c0JhbGxvbi4ke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Nob3dJbnNlcnRzRm9yT25lUG9zaXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGlzcGxheVN3YXBzUm93KHN3YXBzKSB7XHJcbiAgICAgICAgY29uc3Qgc3dhcHMyID0gWy4uLnN3YXBzLCAnJ11cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2Bzd2Fwcy4ke3Byb3BzLndvcmR9YH0+XHJcbiAgICAgICAgICAgIHtzd2FwczI/Lm1hcCgocywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3dJbnNlcnRzID09PSAnTicgfHwgaW5mby5pbnNlcnRzW2luZGV4XSA9PT0gJycgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiaW5zZXJ0Q291bnRTcGFjZXJcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJhbGxvb25zdHJpbmdcIj7inrs8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8U2hvd1N3YXBzRm9yT25lUG9zaXRpb24gc3dhcExldHRlcnM9e3N9IGtleT17YHN3YXBzQmFsbG9uLiR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TaG93U3dhcHNGb3JPbmVQb3NpdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheVdvcmRSb3coKSB7XHJcbiAgICAgICAgY29uc3Qga2V5MSA9IHByb3BzLndvcmQ7XHJcbiAgICAgICAgY29uc3Qga2V5MiA9IHByb3BzLndvcmQgKyAnMic7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiZGlzcGxheVdvcmRSb3dcIiBrZXk9e2B3b3JkLiR7cHJvcHMud29yZH1gfT5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJpbnNlcnRDb3VudFNwYWNlclwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMud29yZD8udG9VcHBlckNhc2UoKS5zcGxpdChcIlwiKS5tYXAoKGwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17aW5mby52YWxpZCA/IFwibGV0dGVyXCIgOiBcImxldHRlckludmFsaWRXb3JkXCJ9PntsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8dGQga2V5PXtrZXkxfT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93QW5hZ3JhbXMgPT09IFwiWVwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmZvLmFuYWdyYW1zfT5cclxuICAgICAgICAgICAgICAgICAgICB7aW5mby5hbmFncmFtcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFuYWdyYW1Db3VudFwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPXtpbmZvLmFuYWdyYW1zfT57aW5mby5hbmFncmFtcy5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGtleT17a2V5Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAge2luZm8udmFsaWQgPT09ICdZJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndvcmRJc1ZhbGlkXCI+VmFsaWQgd29yZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndvcmRJc05vdFZhbGlkXCI+Tm90IGEgcmVjb2duaXplZCB3b3JkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlEcm9wc1Jvdyhkcm9wcykge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHRyIGtleT17YGRyb3BzLiR7cHJvcHMud29yZH1gfSBjbGFzc05hbWU9XCJkcm9wUm93XCI+XHJcbiAgICAgICAgICAgIHtkcm9wcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICB7ZCA9PT0gXCJZXCIgP1xyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkcm9wSW5kaWNhdG9yXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJZb3UgY2FuIGRyb3AgdGhpcyBsZXR0ZXJcIj4mYnVsbDs8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5QW5hZ3JhbXNSb3coYW5hZ3JhbXMpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2BhbmFncmFtcy4ke3Byb3BzLndvcmR9YH0+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2BBbmFncmFtczogJHthbmFncmFtc31gfTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==