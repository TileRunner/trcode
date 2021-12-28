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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, this), (_props$word = props.word) === null || _props$word === void 0 ? void 0 : _props$word.toUpperCase().split("").map(l => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2kvc2hvd2luZm8uanMiXSwibmFtZXMiOlsiU2hvd2luZm8iLCJwcm9wcyIsImluZm8iLCJzZXRJbmZvIiwidXNlU3RhdGUiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJ1c2VFZmZlY3QiLCJhcGlDYWxsIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsIndvcmQiLCJqZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInN3YXBzIiwic2hvd0luc2VydHMiLCJpbnNlcnRzIiwibGVuZ3RoIiwiZGlzcGxheUluc2VydHNSb3ciLCJzaG93U3dhcHMiLCJkaXNwbGF5U3dhcHNSb3ciLCJkaXNwbGF5V29yZFJvdyIsInNob3dEcm9wcyIsImRyb3BzIiwiZGlzcGxheURyb3BzUm93IiwibWFwIiwiaSIsImluZGV4Iiwic3dhcHMyIiwicyIsImtleTEiLCJrZXkyIiwidG9VcHBlckNhc2UiLCJzcGxpdCIsImwiLCJ2YWxpZCIsInNob3dBbmFncmFtcyIsImFuYWdyYW1zIiwiZCIsImRpc3BsYXlBbmFncmFtc1JvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULENBQW1CQyxLQUFuQixFQUEyQjtBQUFBOztBQUN0QyxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkYsK0NBQVEsQ0FBQyxLQUFELENBQXBDO0FBQ0FHLGtEQUFTLENBQUMsTUFBSTtBQUNWLFVBQU1DLE9BQU8sR0FBRyxZQUFVO0FBQ3RCLFVBQUlDLEdBQUcsR0FBSSxLQUFELEdBQW9FLHlDQUFwRSxHQUFnSCxDQUExSCxDQURzQixDQUV0QjtBQUNBOztBQUNBLFVBQUlDLFFBQVEsR0FBRyxN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ZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU4ZjcxNTliNWI1OWMwMWQyMWQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2hvd0luc2VydHNGb3JPbmVQb3NpdGlvbiBmcm9tICcuL3Nob3dJbnNlcnRzRm9yT25lUG9zaXRpb24nO1xyXG5pbXBvcnQgU2hvd1N3YXBzRm9yT25lUG9zaXRpb24gZnJvbSAnLi9zaG93U3dhcHNGb3JPbmVQb3NpdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaG93aW5mbyggcHJvcHMgKSB7XHJcbiAgICBjb25zdCBbaW5mbywgc2V0SW5mb10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IGFwaUNhbGwgPSBhc3luYyAoKT0+e1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VOQUJMRTJLP2xldHRlcnM9JyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbS9FTkFCTEUySz9sZXR0ZXJzPSdcclxuICAgICAgICAgICAgLy8gICdodHRwczovL3dvcmRzLXNjcmFiYmxlLmhlcm9rdWFwcC5jb20vYXBpL2luZm8vJ1xyXG4gICAgICAgICAgICAvLyBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly93b3Jkcy1zY3JhYmJsZS5oZXJva3VhcHAuY29tL2FwaS9pbmZvLycgKyBwcm9wcy53b3JkKVxyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBwcm9wcy53b3JkKVxyXG4gICAgICAgICAgICBsZXQgamRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHN3YXBzPSR7SlNPTi5zdHJpbmdpZnkoamRhdGEuc3dhcHMpfWApXHJcbiAgICAgICAgICAgIHNldEluZm8oamRhdGEpXHJcbiAgICAgICAgICAgIHNldExvYWRlZCh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBhcGlDYWxsKClcclxuICAgIH0sW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBsb2FkZWQgP1xyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidHJUYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93SW5zZXJ0cyA9PT0gXCJZXCIgJiYgaW5mby5pbnNlcnRzLmxlbmd0aCA+IDAgJiYgZGlzcGxheUluc2VydHNSb3coaW5mby5pbnNlcnRzKX1cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd1N3YXBzID09PSBcIllcIiAmJiBpbmZvLnN3YXBzLmxlbmd0aCA+IDAgJiYgZGlzcGxheVN3YXBzUm93KGluZm8uc3dhcHMpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtkaXNwbGF5V29yZFJvdygpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93RHJvcHMgPT09IFwiWVwiICYmIGluZm8uZHJvcHMubGVuZ3RoID4gMCAmJiBkaXNwbGF5RHJvcHNSb3coaW5mby5kcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImRpdmlkZXJcIj48dGQgY29sU3Bhbj17cHJvcHMud29yZC5sZW5ndGggKyBwcm9wcy53b3JkLmxlbmd0aCArIDN9PiZuYnNwOzwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyRW1waGFzaXNcIj5Mb2FkaW5nIC4uLjwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKTtcclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5SW5zZXJ0c1JvdyhpbnNlcnRzKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtgaW5zZXJ0c1Jvdy4ke3Byb3BzLndvcmR9YH0+XHJcbiAgICAgICAgICAgICAgICB7aW5zZXJ0cy5tYXAoKGksaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2hvd0luc2VydHNGb3JPbmVQb3NpdGlvbiBpbnNlcnRMZXR0ZXJzPXtpfSBrZXk9e2BpbnNlcnRzQmFsbG9uLiR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2hvd0luc2VydHNGb3JPbmVQb3NpdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5U3dhcHNSb3coc3dhcHMpIHtcclxuICAgICAgICBjb25zdCBzd2FwczIgPSBbLi4uc3dhcHMsICcnXVxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHRyIGtleT17YHN3YXBzLiR7cHJvcHMud29yZH1gfT5cclxuICAgICAgICAgICAge3N3YXBzMj8ubWFwKChzLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd0luc2VydHMgPT09ICdOJyB8fCBpbmZvLmluc2VydHNbaW5kZXhdID09PSAnJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJpbnNlcnRDb3VudFNwYWNlclwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYmFsbG9vbnN0cmluZ1wiPuKeuzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxTaG93U3dhcHNGb3JPbmVQb3NpdGlvbiBzd2FwTGV0dGVycz17c30ga2V5PXtgc3dhcHNCYWxsb24uJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Nob3dTd2Fwc0Zvck9uZVBvc2l0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5V29yZFJvdygpIHtcclxuICAgICAgICBjb25zdCBrZXkxID0gcHJvcHMud29yZDtcclxuICAgICAgICBjb25zdCBrZXkyID0gcHJvcHMud29yZCArICcyJztcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJkaXNwbGF5V29yZFJvd1wiIGtleT17YHdvcmQuJHtwcm9wcy53b3JkfWB9PlxyXG4gICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMud29yZD8udG9VcHBlckNhc2UoKS5zcGxpdChcIlwiKS5tYXAobCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17aW5mby52YWxpZCA/IFwibGV0dGVyXCIgOiBcImxldHRlckludmFsaWRXb3JkXCJ9PntsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8dGQga2V5PXtrZXkxfT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93QW5hZ3JhbXMgPT09IFwiWVwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmZvLmFuYWdyYW1zfT5cclxuICAgICAgICAgICAgICAgICAgICB7aW5mby5hbmFncmFtcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFuYWdyYW1Db3VudFwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPXtpbmZvLmFuYWdyYW1zfT57aW5mby5hbmFncmFtcy5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGtleT17a2V5Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAge2luZm8udmFsaWQgPT09ICdZJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndvcmRJc1ZhbGlkXCI+VmFsaWQgd29yZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndvcmRJc05vdFZhbGlkXCI+Tm90IGEgcmVjb2duaXplZCB3b3JkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlEcm9wc1Jvdyhkcm9wcykge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHRyIGtleT17YGRyb3BzLiR7cHJvcHMud29yZH1gfSBjbGFzc05hbWU9XCJkcm9wUm93XCI+XHJcbiAgICAgICAgICAgIHtkcm9wcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICB7ZCA9PT0gXCJZXCIgP1xyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkcm9wSW5kaWNhdG9yXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJZb3UgY2FuIGRyb3AgdGhpcyBsZXR0ZXJcIj4mYnVsbDs8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5QW5hZ3JhbXNSb3coYW5hZ3JhbXMpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2BhbmFncmFtcy4ke3Byb3BzLndvcmR9YH0+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2BBbmFncmFtczogJHthbmFncmFtc31gfTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==