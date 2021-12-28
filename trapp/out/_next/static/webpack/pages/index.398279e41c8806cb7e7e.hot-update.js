self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/wi/wordinfo.js":
/*!******************************!*\
  !*** ./pages/wi/wordinfo.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _showinfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showinfo */ "./pages/wi/showinfo.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\wi\\wordinfo.js",
    _s = $RefreshSig$();




const WordInfo = ({
  setWhereto
}) => {
  _s();

  const {
    0: word,
    1: setWord
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: words,
    1: setWords
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trBackground",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trTitle",
      children: ["Word Info", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "trButton",
        onClick: () => {
          setWhereto('menu');
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "material-icons",
          "data-toggle": "tooltip",
          title: "Home",
          children: "home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trParagraph",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Word:\xA0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        name: "word",
        value: word,
        onChange: e => {
          setWord(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "\xA0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        id: "acceptWord",
        className: "trButton",
        onClick: function () {
          setWords([word, ...words]);
          setWord('');
        },
        children: "Get Word Info"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "\xA0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        id: "acceptAlphagram",
        className: "trButton",
        onClick: function () {
          let url =  true ? 'http://localhost:5000/ENABLE2K?letters=' : 0; // 'https://words-scrabble.herokuapp.com/api/info/'

          fetch(url + word).then(res => res.text()).then(text => {
            // console.log("alphagram response data=" + text + ". NODE_ENV here is " + process.env.NODE_ENV)
            let jdata = JSON.parse(text);
            let newwords = [];
            jdata.anagrams.map(w => {
              newwords = [...newwords, w];
            });

            if (jdata.valid) {
              newwords.push(word.toUpperCase());
            }

            newwords.sort();
            setWord('');
            setWords([...newwords, ...words]);
          });
        },
        children: "Get Anagrams"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "\xA0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        id: "acceptRegex",
        className: "trButton",
        onClick: function () {
          let url =  true ? 'http://localhost:5000/ENABLE2K?regex=' : 0;
          fetch(url + word.toLocaleLowerCase()).then(res => res.text()).then(text => {
            // console.log("regex response data=" + text)
            let jdata = JSON.parse(text);
            setWord('');
            let newwords = [];
            jdata.regexmatches.map(w => {
              newwords = [...newwords, w];
            });
            setWords([...newwords, ...words]);

            if (jdata.count > 50) {
              alert('Too many results, only 50 taken');
            }
          });
        },
        children: "Get Regex Matches"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "\xA0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, undefined),  true && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        id: "validateWords",
        className: "trButton",
        onClick: function () {
          let url = 'http://localhost:5000/ENABLE2K?validate=';
          let validate = word.toLowerCase();
          fetch(url + validate).then(res => res.text()).then(text => {
            alert("validate response=" + text);
          });
        },
        children: "Test validate call"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 60
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined), words.map((w, wi) => w === '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_showinfo__WEBPACK_IMPORTED_MODULE_2__.default, {
      word: w,
      showInserts: "Y",
      showSwaps: "Y",
      showAnagrams: "Y",
      showDrops: "Y"
    }, `${words.length - wi}.${w}`, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

_s(WordInfo, "wbZJ7Ik0FkR8e34V1AWsiRmLJ2s=");

_c = WordInfo;
/* harmony default export */ __webpack_exports__["default"] = (WordInfo);

var _c;

$RefreshReg$(_c, "WordInfo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2kvd29yZGluZm8uanMiXSwibmFtZXMiOlsiV29yZEluZm8iLCJzZXRXaGVyZXRvIiwid29yZCIsInNldFdvcmQiLCJ1c2VTdGF0ZSIsIndvcmRzIiwic2V0V29yZHMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJ0ZXh0IiwiamRhdGEiLCJKU09OIiwicGFyc2UiLCJuZXd3b3JkcyIsImFuYWdyYW1zIiwibWFwIiwidyIsInZhbGlkIiwicHVzaCIsInRvVXBwZXJDYXNlIiwic29ydCIsInRvTG9jYWxlTG93ZXJDYXNlIiwicmVnZXhtYXRjaGVzIiwiY291bnQiLCJhbGVydCIsInZhbGlkYXRlIiwidG9Mb3dlckNhc2UiLCJ3aSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWtCO0FBQUE7O0FBQy9CLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDJDQUVJO0FBQVEsaUJBQVMsRUFBQyxVQUFsQjtBQUE2QixlQUFPLEVBQUUsTUFBTTtBQUFDSCxvQkFBVSxDQUFDLE1BQUQsQ0FBVjtBQUFvQixTQUFqRTtBQUFBLCtCQUNJO0FBQUcsbUJBQVMsRUFBQyxnQkFBYjtBQUE4Qix5QkFBWSxTQUExQztBQUFvRCxlQUFLLEVBQUMsTUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFB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WCxDQUFFLEVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkgsQ0F0Rkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUE2RkgsQ0FoR0Q7O0dBQU1yQixROztLQUFBQSxRO0FBa0dOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM5ODI3OWU0MWM4ODA2Y2I3ZTdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaG93aW5mbyBmcm9tICcuL3Nob3dpbmZvJ1xyXG5cclxuY29uc3QgV29yZEluZm8gPSAoe3NldFdoZXJldG99KSA9PiB7XHJcbiAgICBjb25zdCBbd29yZCwgc2V0V29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbd29yZHMsIHNldFdvcmRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ckJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBXb3JkIEluZm9cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPldvcmQ6Jm5ic3A7PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d29yZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0V29yZChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD4mbmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImFjY2VwdFdvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0V29yZHMoW3dvcmQsIC4uLndvcmRzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmQoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgR2V0IFdvcmQgSW5mb1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+Jm5ic3A7PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhY2NlcHRBbHBoYWdyYW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FTkFCTEUySz9sZXR0ZXJzPScgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20vRU5BQkxFMks/bGV0dGVycz0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICdodHRwczovL3dvcmRzLXNjcmFiYmxlLmhlcm9rdWFwcC5jb20vYXBpL2luZm8vJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaCh1cmwgKyB3b3JkKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJhbHBoYWdyYW0gcmVzcG9uc2UgZGF0YT1cIiArIHRleHQgKyBcIi4gTk9ERV9FTlYgaGVyZSBpcyBcIiArIHByb2Nlc3MuZW52Lk5PREVfRU5WKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpkYXRhID0gSlNPTi5wYXJzZSh0ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld3dvcmRzID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpkYXRhLmFuYWdyYW1zLm1hcCgodykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld3dvcmRzID1bLi4ubmV3d29yZHMsIHddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpkYXRhLnZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3d29yZHMucHVzaCh3b3JkLnRvVXBwZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXd3b3Jkcy5zb3J0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmQoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V29yZHMoWy4uLm5ld3dvcmRzLCAuLi53b3Jkc10pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBHZXQgQW5hZ3JhbXNcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPiZuYnNwOzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYWNjZXB0UmVnZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FTkFCTEUySz9yZWdleD0nIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tL0VOQUJMRTJLP3JlZ2V4PSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2godXJsICsgd29yZC50b0xvY2FsZUxvd2VyQ2FzZSgpKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZWdleCByZXNwb25zZSBkYXRhPVwiICsgdGV4dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBqZGF0YSA9IEpTT04ucGFyc2UodGV4dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmQoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld3dvcmRzID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpkYXRhLnJlZ2V4bWF0Y2hlcy5tYXAoKHcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXd3b3JkcyA9Wy4uLm5ld3dvcmRzLCB3XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmRzKFsuLi5uZXd3b3JkcywgLi4ud29yZHNdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpkYXRhLmNvdW50ID4gNTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnVG9vIG1hbnkgcmVzdWx0cywgb25seSA1MCB0YWtlbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBHZXQgUmVnZXggTWF0Y2hlc1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+Jm5ic3A7PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiA8YnV0dG9uIGlkPVwidmFsaWRhdGVXb3Jkc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FTkFCTEUySz92YWxpZGF0ZT0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWxpZGF0ZSA9IHdvcmQudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaCh1cmwgKyB2YWxpZGF0ZSkudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwidmFsaWRhdGUgcmVzcG9uc2U9XCIgKyB0ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgVGVzdCB2YWxpZGF0ZSBjYWxsXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7d29yZHMubWFwKCh3LHdpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICB3ID09PSAnJyA/IDw+PC8+IDpcclxuICAgICAgICAgICAgICAgIDxTaG93aW5mbyBrZXk9e2Ake3dvcmRzLmxlbmd0aCAtIHdpfS4ke3d9YH0gd29yZD17d30gc2hvd0luc2VydHM9XCJZXCIgc2hvd1N3YXBzPVwiWVwiIHNob3dBbmFncmFtcz1cIllcIiBzaG93RHJvcHM9XCJZXCIvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JkSW5mbzsiXSwic291cmNlUm9vdCI6IiJ9