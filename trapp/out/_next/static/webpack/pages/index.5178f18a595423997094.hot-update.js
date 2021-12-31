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
          onClick: () => removeEntry(entryIndex),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2kvc2hvd2luZm8uanMiXSwibmFtZXMiOlsiU2hvd2luZm8iLCJwcm9wcyIsImluZm8iLCJzZXRJbmZvIiwidXNlU3RhdGUiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJ1c2VFZmZlY3QiLCJhcGlDYWxsIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsIndvcmQiLCJqZGF0YSIsImpzb24iLCJzaG93SW5zZXJ0cyIsImluc2VydHMiLCJsZW5ndGgiLCJkaXNwbGF5SW5zZXJ0c1JvdyIsInNob3dTd2FwcyIsInN3YXBzIiwiZGlzcGxheVN3YXBzUm93IiwiZGlzcGxheVdvcmRSb3ciLCJyZW1vdmVFbnRyeSIsImVudHJ5SW5kZXgiLCJzaG93RHJvcHMiLCJkcm9wcyIsImRpc3BsYXlEcm9wc1JvdyIsIm1hcCIsImkiLCJpbmRleCIsInN3YXBzMiIsInMiLCJrZXkxIiwia2V5MiIsImtleTMiLCJ0b1VwcGVyQ2FzZSIsInNwbGl0IiwibCIsInNob3dBbmFncmFtcyIsImFuYWdyYW1zIiwidmFsaWQiLCJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsQ0FBbUJDLEtBQW5CLEVBQTJCO0FBQUE7O0FBQ3RDLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCRiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEM7QUFDQUcsa0RBQVMsQ0FBQyxNQUFJO0FBQ1YsVUFBTUMsT0FBTyxHQUFHLFlBQVU7QUFDdEIsVUFBSUMsR0FBRyxHQUFJLEtBQUQsR0FBb0UseUNBQXBFLEdBQWdILENBQTFILENBRHNCLENBRXRCO0FBQ0E7O0FBQ0EsVUFBSUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0Ys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LFFBQU9sQyxLQUFLLENBQUNXLElBQUssRUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBMEJIOztBQUVELFdBQVNlLGVBQVQsQ0FBeUJELEtBQXpCLEVBQWdDO0FBQzVCLHdCQUNJO0FBQWdDLGVBQVMsRUFBQyxTQUExQztBQUFBLGdCQUNDQSxLQUFLLENBQUNFLEdBQU4sQ0FBVWMsQ0FBQyxpQkFDUjtBQUFBLGdDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsRUFFQ0EsQ0FBQyxLQUFLLEdBQU4sZ0JBQ0c7QUFBSSxtQkFBUyxFQUFDLGVBQWQ7QUFBOEIseUJBQVksU0FBMUM7QUFBb0QsZUFBSyxFQUFDLDBCQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESCxnQkFHRztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKO0FBQUEsc0JBREg7QUFERCxPQUFVLFNBQVF6QyxLQUFLLENBQUNXLElBQUssRUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBY0g7QUFFSjs7R0FoSHVCWixROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUxNzhmMThhNTk1NDIzOTk3MDk0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2hvd0luc2VydHNGb3JPbmVQb3NpdGlvbiBmcm9tICcuL3Nob3dJbnNlcnRzRm9yT25lUG9zaXRpb24nO1xyXG5pbXBvcnQgU2hvd1N3YXBzRm9yT25lUG9zaXRpb24gZnJvbSAnLi9zaG93U3dhcHNGb3JPbmVQb3NpdGlvbic7XHJcbmltcG9ydCBTaG93QW5hZ3JhbXNGb3JPbmVXb3JkIGZyb20gJy4vc2hvd0FuYWdyYW1zRm9yT25lV29yZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaG93aW5mbyggcHJvcHMgKSB7XHJcbiAgICBjb25zdCBbaW5mbywgc2V0SW5mb10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IGFwaUNhbGwgPSBhc3luYyAoKT0+e1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VOQUJMRTJLP2xldHRlcnM9JyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbS9FTkFCTEUySz9sZXR0ZXJzPSdcclxuICAgICAgICAgICAgLy8gICdodHRwczovL3dvcmRzLXNjcmFiYmxlLmhlcm9rdWFwcC5jb20vYXBpL2luZm8vJ1xyXG4gICAgICAgICAgICAvLyBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly93b3Jkcy1zY3JhYmJsZS5oZXJva3VhcHAuY29tL2FwaS9pbmZvLycgKyBwcm9wcy53b3JkKVxyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBwcm9wcy53b3JkKVxyXG4gICAgICAgICAgICBsZXQgamRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICAgICAgc2V0SW5mbyhqZGF0YSlcclxuICAgICAgICAgICAgc2V0TG9hZGVkKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFwaUNhbGwoKVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIGxvYWRlZCA/XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0clRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3dJbnNlcnRzID09PSBcIllcIiAmJiBpbmZvLmluc2VydHMubGVuZ3RoID4gMCAmJiBkaXNwbGF5SW5zZXJ0c1JvdyhpbmZvLmluc2VydHMpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93U3dhcHMgPT09IFwiWVwiICYmIGluZm8uc3dhcHMubGVuZ3RoID4gMCAmJiBkaXNwbGF5U3dhcHNSb3coaW5mby5zd2Fwcyl9XHJcbiAgICAgICAgICAgICAgICAgICAge2Rpc3BsYXlXb3JkUm93KHByb3BzLnJlbW92ZUVudHJ5LCBwcm9wcy5lbnRyeUluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd0Ryb3BzID09PSBcIllcIiAmJiBpbmZvLmRyb3BzLmxlbmd0aCA+IDAgJiYgZGlzcGxheURyb3BzUm93KGluZm8uZHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA6XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJFbXBoYXNpc1wiPkxvYWRpbmcgLi4uPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApO1xyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlJbnNlcnRzUm93KGluc2VydHMpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2BpbnNlcnRzUm93LiR7cHJvcHMud29yZH1gfT5cclxuICAgICAgICAgICAgICAgIHtpbnNlcnRzLm1hcCgoaSxpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaG93SW5zZXJ0c0Zvck9uZVBvc2l0aW9uIGluc2VydExldHRlcnM9e2l9IGtleT17YGluc2VydHNCYWxsb24uJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TaG93SW5zZXJ0c0Zvck9uZVBvc2l0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlTd2Fwc1Jvdyhzd2Fwcykge1xyXG4gICAgICAgIGNvbnN0IHN3YXBzMiA9IFsuLi5zd2FwcywgJyddXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtgc3dhcHMuJHtwcm9wcy53b3JkfWB9PlxyXG4gICAgICAgICAgICB7c3dhcHMyPy5tYXAoKHMsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93SW5zZXJ0cyA9PT0gJ04nIHx8IGluZm8uaW5zZXJ0c1tpbmRleF0gPT09ICcnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImluc2VydENvdW50U3BhY2VyXCI+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJiYWxsb29uc3RyaW5nXCI+4p67PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPFNob3dTd2Fwc0Zvck9uZVBvc2l0aW9uIHN3YXBMZXR0ZXJzPXtzfSBrZXk9e2Bzd2Fwc0JhbGxvbi4ke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2hvd1N3YXBzRm9yT25lUG9zaXRpb24+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlXb3JkUm93KHJlbW92ZUVudHJ5LCBlbnRyeUluZGV4KSB7XHJcbiAgICAgICAgY29uc3Qga2V5MSA9IHByb3BzLndvcmQ7XHJcbiAgICAgICAgY29uc3Qga2V5MiA9IHByb3BzLndvcmQgKyAnMic7XHJcbiAgICAgICAgY29uc3Qga2V5MyA9IHByb3BzLndvcmQgKyAnMyc7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtgd29yZC4ke3Byb3BzLndvcmR9YH0+XHJcbiAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy53b3JkPy50b1VwcGVyQ2FzZSgpLnNwbGl0KFwiXCIpLm1hcChsID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2x9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2tleTF9PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnNob3dBbmFncmFtcyA9PT0gXCJZXCIgJiYgaW5mby5hbmFncmFtcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmZvLmFuYWdyYW1zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNob3dBbmFncmFtc0Zvck9uZVdvcmQgYW5hZ3JhbXM9e2luZm8uYW5hZ3JhbXN9PjwvU2hvd0FuYWdyYW1zRm9yT25lV29yZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGtleT17a2V5Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAge2luZm8udmFsaWQgIT09ICdZJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ckRhbmdlclwiPkludmFsaWQgd29yZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGtleT17a2V5M30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjbG9zZU1lXCIgb25DbGljaz17KCkgPT4gcmVtb3ZlRW50cnkoZW50cnlJbmRleCl9PiZuYnNwOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheURyb3BzUm93KGRyb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtgZHJvcHMuJHtwcm9wcy53b3JkfWB9IGNsYXNzTmFtZT1cImRyb3BSb3dcIj5cclxuICAgICAgICAgICAge2Ryb3BzLm1hcChkID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgIHtkID09PSBcIllcIiA/XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImRyb3BJbmRpY2F0b3JcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIllvdSBjYW4gZHJvcCB0aGlzIGxldHRlclwiPiZidWxsOzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==