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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form-inline",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: "Word:\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          className: "letterInput",
          name: "word",
          value: word,
          onChange: e => {
            setWord(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          id: "acceptWord",
          onClick: function () {
            setWords([word, ...words]);
            setWord('');
          },
          children: "Get Word Info"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          id: "acceptAlphagram",
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
          lineNumber: 36,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          id: "acceptRegex",
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
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, undefined),  true && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          id: "validateWords",
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
          lineNumber: 80,
          columnNumber: 64
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trParagraph",
      children: words.map((w, wi) => w === '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_showinfo__WEBPACK_IMPORTED_MODULE_2__.default, {
        word: w,
        showInserts: "Y",
        showSwaps: "Y",
        showAnagrams: "Y",
        showDrops: "Y"
      }, `${words.length - wi}.${w}`, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }, undefined)]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2kvd29yZGluZm8uanMiXSwibmFtZXMiOlsiV29yZEluZm8iLCJzZXRXaGVyZXRvIiwid29yZCIsInNldFdvcmQiLCJ1c2VTdGF0ZSIsIndvcmRzIiwic2V0V29yZHMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJ0ZXh0IiwiamRhdGEiLCJKU09OIiwicGFyc2UiLCJuZXd3b3JkcyIsImFuYWdyYW1zIiwibWFwIiwidyIsInZhbGlkIiwicHVzaCIsInRvVXBwZXJDYXNlIiwic29ydCIsInRvTG9jYWxlTG93ZXJDYXNlIiwicmVnZXhtYXRjaGVzIiwiY291bnQiLCJhbGVydCIsInZhbGlkYXRlIiwidG9Mb3dlckNhc2UiLCJ3aSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWtCO0FBQUE7O0FBQy9CLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDJDQUVJO0FBQVEsaUJBQVMsRUFBQyxVQUFsQjtBQUE2QixlQUFPLEVBQUUsTUFBTTtBQUFDSCxvQkFBVSxDQUFDLE1BQUQsQ0FBVjtBQUFvQixTQUFqRTtBQUFBLCtCQUNJO0FBQUcsbUJBQVMsRUFBQyxnQkFBYjtBQUE4Qix5QkFBWSxTQUExQztBQUFvRCxlQUFLLEVBQUMsTUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFB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RWhCLEtBQUssQ0FBQzRCLE1BQU4sR0FBZUQsRUFBRyxJQUFHWCxDQUFFLEVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQThGSCxDQWpHRDs7R0FBTXJCLFE7O0tBQUFBLFE7QUFtR04sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGNkNjI1OWFhOGU2M2M1MDAwYjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNob3dpbmZvIGZyb20gJy4vc2hvd2luZm8nXHJcblxyXG5jb25zdCBXb3JkSW5mbyA9ICh7c2V0V2hlcmV0b30pID0+IHtcclxuICAgIGNvbnN0IFt3b3JkLCBzZXRXb3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt3b3Jkcywgc2V0V29yZHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIFdvcmQgSW5mb1xyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPldvcmQ6Jm5ic3A7PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGV0dGVySW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwid29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmQoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Jm5ic3A7PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYWNjZXB0V29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V29yZHMoW3dvcmQsIC4uLndvcmRzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXb3JkKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdldCBXb3JkIEluZm9cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Jm5ic3A7PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYWNjZXB0QWxwaGFncmFtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VOQUJMRTJLP2xldHRlcnM9JyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbS9FTkFCTEUySz9sZXR0ZXJzPSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICdodHRwczovL3dvcmRzLXNjcmFiYmxlLmhlcm9rdWFwcC5jb20vYXBpL2luZm8vJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2godXJsICsgd29yZCkudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFscGhhZ3JhbSByZXNwb25zZSBkYXRhPVwiICsgdGV4dCArIFwiLiBOT0RFX0VOViBoZXJlIGlzIFwiICsgcHJvY2Vzcy5lbnYuTk9ERV9FTlYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpkYXRhID0gSlNPTi5wYXJzZSh0ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXd3b3JkcyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgamRhdGEuYW5hZ3JhbXMubWFwKCh3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld3dvcmRzID1bLi4ubmV3d29yZHMsIHddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoamRhdGEudmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3d29yZHMucHVzaCh3b3JkLnRvVXBwZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld3dvcmRzLnNvcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmQoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmRzKFsuLi5uZXd3b3JkcywgLi4ud29yZHNdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdldCBBbmFncmFtc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD4mbmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhY2NlcHRSZWdleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FTkFCTEUySz9yZWdleD0nIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tL0VOQUJMRTJLP3JlZ2V4PSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKHVybCArIHdvcmQudG9Mb2NhbGVMb3dlckNhc2UoKSkudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlZ2V4IHJlc3BvbnNlIGRhdGE9XCIgKyB0ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBqZGF0YSA9IEpTT04ucGFyc2UodGV4dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXb3JkKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3d29yZHMgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpkYXRhLnJlZ2V4bWF0Y2hlcy5tYXAoKHcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3d29yZHMgPVsuLi5uZXd3b3Jkcywgd11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmRzKFsuLi5uZXd3b3JkcywgLi4ud29yZHNdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqZGF0YS5jb3VudCA+IDUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdUb28gbWFueSByZXN1bHRzLCBvbmx5IDUwIHRha2VuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR2V0IFJlZ2V4IE1hdGNoZXNcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Jm5ic3A7PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgPGJ1dHRvbiBpZD1cInZhbGlkYXRlV29yZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VOQUJMRTJLP3ZhbGlkYXRlPSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWxpZGF0ZSA9IHdvcmQudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2godXJsICsgdmFsaWRhdGUpLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpLnRoZW4odGV4dCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJ2YWxpZGF0ZSByZXNwb25zZT1cIiArIHRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGVzdCB2YWxpZGF0ZSBjYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICB7d29yZHMubWFwKCh3LHdpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdyA9PT0gJycgPyA8PjwvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgPFNob3dpbmZvIGtleT17YCR7d29yZHMubGVuZ3RoIC0gd2l9LiR7d31gfSB3b3JkPXt3fSBzaG93SW5zZXJ0cz1cIllcIiBzaG93U3dhcHM9XCJZXCIgc2hvd0FuYWdyYW1zPVwiWVwiIHNob3dEcm9wcz1cIllcIi8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29yZEluZm87Il0sInNvdXJjZVJvb3QiOiIifQ==