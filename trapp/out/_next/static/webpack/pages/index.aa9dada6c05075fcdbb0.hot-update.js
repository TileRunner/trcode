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
      setInfo(jdata);
      setLoaded(true);
    };

    apiCall();
  }, []);
  return loaded ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
    className: "trTable",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
      children: [props.showInserts === "Y" && info.inserts.length > 0 && displayInsertsRow(info.inserts), props.showSwaps === "Y" && info.swaps.length > 0 && displaySwapsRow(info.swaps), displayWordRow(props.removeEntry, props.entryIndex), props.showDrops === "Y" && info.drops.length > 0 && displayDropsRow(info.drops)]
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
    lineNumber: 33,
    columnNumber: 13
  }, this);

  function displayInsertsRow(inserts) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: inserts.map((i, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_showInsertsForOnePosition__WEBPACK_IMPORTED_MODULE_2__.default, {
          insertLetters: i
        }, `insertsBallon.${index}`, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 25
        }, this)]
      }, void 0, true))
    }, `insertsRow.${props.word}`, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
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
          lineNumber: 57,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "balloonstring",
          children: "\u27BB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_showSwapsForOnePosition__WEBPACK_IMPORTED_MODULE_3__.default, {
          swapLetters: s
        }, `swapsBallon.${index}`, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this)]
      }, void 0, true))
    }, `swaps.${props.word}`, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, this);
  }

  function displayWordRow(removeEntry, entryIndex) {
    var _props$word;

    const key1 = props.word;
    const key2 = props.word + '2';
    const key3 = props.word + '3';
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
          children: "Invalid word"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 25
        }, this)
      }, key2, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "closeMe",
          onClick: removeEntry(entryIndex),
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, this)
      }, key3, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
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
          lineNumber: 106,
          columnNumber: 17
        }, this), d === "Y" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "dropIndicator",
          "data-toggle": "tooltip",
          title: "You can drop this letter",
          children: "\u2022"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }, this)]
      }, void 0, true))
    }, `drops.${props.word}`, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2kvc2hvd2luZm8uanMiXSwibmFtZXMiOlsiU2hvd2luZm8iLCJwcm9wcyIsImluZm8iLCJzZXRJbmZvIiwidXNlU3RhdGUiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJ1c2VFZmZlY3QiLCJhcGlDYWxsIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsIndvcmQiLCJqZGF0YSIsImpzb24iLCJzaG93SW5zZXJ0cyIsImluc2VydHMiLCJsZW5ndGgiLCJkaXNwbGF5SW5zZXJ0c1JvdyIsInNob3dTd2FwcyIsInN3YXBzIiwiZGlzcGxheVN3YXBzUm93IiwiZGlzcGxheVdvcmRSb3ciLCJyZW1vdmVFbnRyeSIsImVudHJ5SW5kZXgiLCJzaG93RHJvcHMiLCJkcm9wcyIsImRpc3BsYXlEcm9wc1JvdyIsIm1hcCIsImkiLCJpbmRleCIsInN3YXBzMiIsInMiLCJrZXkxIiwia2V5MiIsImtleTMiLCJ0b1VwcGVyQ2FzZSIsInNwbGl0IiwibCIsInNob3dBbmFncmFtcyIsImFuYWdyYW1zIiwidmFsaWQiLCJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsQ0FBbUJDLEtBQW5CLEVBQTJCO0FBQUE7O0FBQ3RDLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCRiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEM7QUFDQUcsa0RBQVMsQ0FBQyxNQUFJO0FBQ1YsVUFBTUMsT0FBTyxHQUFHLFlBQVU7QUFDdEIsVUFBSUMsR0FBRyxHQUFJLEtBQUQsR0FBb0UseUNBQXBFLEdBQWdILENBQTFILENBRHNCLENBRXRCO0FBQ0E7O0FBQ0EsVUFBSUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0Ys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bEMsS0FBSyxDQUFDVyxJQUFLLEVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQTBCSDs7QUFFRCxXQUFTZSxlQUFULENBQXlCRCxLQUF6QixFQUFnQztBQUM1Qix3QkFDSTtBQUFnQyxlQUFTLEVBQUMsU0FBMUM7QUFBQSxnQkFDQ0EsS0FBSyxDQUFDRSxHQUFOLENBQVVjLENBQUMsaUJBQ1I7QUFBQSxnQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLEVBRUNBLENBQUMsS0FBSyxHQUFOLGdCQUNHO0FBQUksbUJBQVMsRUFBQyxlQUFkO0FBQThCLHlCQUFZLFNBQTFDO0FBQW9ELGVBQUssRUFBQywwQkFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREgsZ0JBR0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSjtBQUFBLHNCQURIO0FBREQsT0FBVSxTQUFRekMsS0FBSyxDQUFDVyxJQUFLLEVBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQWNIO0FBRUo7O0dBaEh1QlosUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hYTlkYWRhNmMwNTA3NWZjZGJiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNob3dJbnNlcnRzRm9yT25lUG9zaXRpb24gZnJvbSAnLi9zaG93SW5zZXJ0c0Zvck9uZVBvc2l0aW9uJztcclxuaW1wb3J0IFNob3dTd2Fwc0Zvck9uZVBvc2l0aW9uIGZyb20gJy4vc2hvd1N3YXBzRm9yT25lUG9zaXRpb24nO1xyXG5pbXBvcnQgU2hvd0FuYWdyYW1zRm9yT25lV29yZCBmcm9tICcuL3Nob3dBbmFncmFtc0Zvck9uZVdvcmQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hvd2luZm8oIHByb3BzICkge1xyXG4gICAgY29uc3QgW2luZm8sIHNldEluZm9dID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCBhcGlDYWxsID0gYXN5bmMgKCk9PntcclxuICAgICAgICAgICAgbGV0IHVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FTkFCTEUySz9sZXR0ZXJzPScgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20vRU5BQkxFMks/bGV0dGVycz0nXHJcbiAgICAgICAgICAgIC8vICAnaHR0cHM6Ly93b3Jkcy1zY3JhYmJsZS5oZXJva3VhcHAuY29tL2FwaS9pbmZvLydcclxuICAgICAgICAgICAgLy8gbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vd29yZHMtc2NyYWJibGUuaGVyb2t1YXBwLmNvbS9hcGkvaW5mby8nICsgcHJvcHMud29yZClcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgcHJvcHMud29yZClcclxuICAgICAgICAgICAgbGV0IGpkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgIHNldEluZm8oamRhdGEpXHJcbiAgICAgICAgICAgIHNldExvYWRlZCh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBhcGlDYWxsKClcclxuICAgIH0sW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBsb2FkZWQgP1xyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidHJUYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93SW5zZXJ0cyA9PT0gXCJZXCIgJiYgaW5mby5pbnNlcnRzLmxlbmd0aCA+IDAgJiYgZGlzcGxheUluc2VydHNSb3coaW5mby5pbnNlcnRzKX1cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd1N3YXBzID09PSBcIllcIiAmJiBpbmZvLnN3YXBzLmxlbmd0aCA+IDAgJiYgZGlzcGxheVN3YXBzUm93KGluZm8uc3dhcHMpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtkaXNwbGF5V29yZFJvdyhwcm9wcy5yZW1vdmVFbnRyeSwgcHJvcHMuZW50cnlJbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3dEcm9wcyA9PT0gXCJZXCIgJiYgaW5mby5kcm9wcy5sZW5ndGggPiAwICYmIGRpc3BsYXlEcm9wc1JvdyhpbmZvLmRyb3BzKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyRW1waGFzaXNcIj5Mb2FkaW5nIC4uLjwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKTtcclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5SW5zZXJ0c1JvdyhpbnNlcnRzKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtgaW5zZXJ0c1Jvdy4ke3Byb3BzLndvcmR9YH0+XHJcbiAgICAgICAgICAgICAgICB7aW5zZXJ0cy5tYXAoKGksaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2hvd0luc2VydHNGb3JPbmVQb3NpdGlvbiBpbnNlcnRMZXR0ZXJzPXtpfSBrZXk9e2BpbnNlcnRzQmFsbG9uLiR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2hvd0luc2VydHNGb3JPbmVQb3NpdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5U3dhcHNSb3coc3dhcHMpIHtcclxuICAgICAgICBjb25zdCBzd2FwczIgPSBbLi4uc3dhcHMsICcnXVxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHRyIGtleT17YHN3YXBzLiR7cHJvcHMud29yZH1gfT5cclxuICAgICAgICAgICAge3N3YXBzMj8ubWFwKChzLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd0luc2VydHMgPT09ICdOJyB8fCBpbmZvLmluc2VydHNbaW5kZXhdID09PSAnJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJpbnNlcnRDb3VudFNwYWNlclwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYmFsbG9vbnN0cmluZ1wiPuKeuzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxTaG93U3dhcHNGb3JPbmVQb3NpdGlvbiBzd2FwTGV0dGVycz17c30ga2V5PXtgc3dhcHNCYWxsb24uJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Nob3dTd2Fwc0Zvck9uZVBvc2l0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5V29yZFJvdyhyZW1vdmVFbnRyeSwgZW50cnlJbmRleCkge1xyXG4gICAgICAgIGNvbnN0IGtleTEgPSBwcm9wcy53b3JkO1xyXG4gICAgICAgIGNvbnN0IGtleTIgPSBwcm9wcy53b3JkICsgJzInO1xyXG4gICAgICAgIGNvbnN0IGtleTMgPSBwcm9wcy53b3JkICsgJzMnO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHRyIGtleT17YHdvcmQuJHtwcm9wcy53b3JkfWB9PlxyXG4gICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMud29yZD8udG9VcHBlckNhc2UoKS5zcGxpdChcIlwiKS5tYXAobCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8dGQga2V5PXtrZXkxfT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93QW5hZ3JhbXMgPT09IFwiWVwiICYmIGluZm8uYW5hZ3JhbXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5mby5hbmFncmFtc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaG93QW5hZ3JhbXNGb3JPbmVXb3JkIGFuYWdyYW1zPXtpbmZvLmFuYWdyYW1zfT48L1Nob3dBbmFncmFtc0Zvck9uZVdvcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2tleTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbmZvLnZhbGlkICE9PSAnWScgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJEYW5nZXJcIj5JbnZhbGlkIHdvcmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2tleTN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2xvc2VNZVwiIG9uQ2xpY2s9e3JlbW92ZUVudHJ5KGVudHJ5SW5kZXgpfT4mbmJzcDs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlEcm9wc1Jvdyhkcm9wcykge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHRyIGtleT17YGRyb3BzLiR7cHJvcHMud29yZH1gfSBjbGFzc05hbWU9XCJkcm9wUm93XCI+XHJcbiAgICAgICAgICAgIHtkcm9wcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICB7ZCA9PT0gXCJZXCIgP1xyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkcm9wSW5kaWNhdG9yXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJZb3UgY2FuIGRyb3AgdGhpcyBsZXR0ZXJcIj4mYnVsbDs8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=