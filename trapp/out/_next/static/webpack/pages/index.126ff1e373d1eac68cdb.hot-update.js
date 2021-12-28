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
          className: "trButton",
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
          lineNumber: 36,
          columnNumber: 21
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
          lineNumber: 37,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
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
          lineNumber: 61,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
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
          lineNumber: 83,
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
        lineNumber: 100,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2kvd29yZGluZm8uanMiXSwibmFtZXMiOlsiV29yZEluZm8iLCJzZXRXaGVyZXRvIiwid29yZCIsInNldFdvcmQiLCJ1c2VTdGF0ZSIsIndvcmRzIiwic2V0V29yZHMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJ0ZXh0IiwiamRhdGEiLCJKU09OIiwicGFyc2UiLCJuZXd3b3JkcyIsImFuYWdyYW1zIiwibWFwIiwidyIsInZhbGlkIiwicHVzaCIsInRvVXBwZXJDYXNlIiwic29ydCIsInRvTG9jYWxlTG93ZXJDYXNlIiwicmVnZXhtYXRjaGVzIiwiY291bnQiLCJhbGVydCIsInZhbGlkYXRlIiwidG9Mb3dlckNhc2UiLCJ3aSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWtCO0FBQUE7O0FBQy9CLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDJDQUVJO0FBQVEsaUJBQVMsRUFBQyxVQUFsQjtBQUE2QixlQUFPLEVBQUUsTUFBTTtBQUFDSCxvQkFBVSxDQUFDLE1BQUQsQ0FBVjtBQUFvQixTQUFqRTtBQUFBLCtCQUNJO0FBQUcsbUJBQVMsRUFBQyxnQkFBYjtBQUE4Qix5QkFBWSxTQUExQztBQUFvRCxlQUFLLEVBQUMsTUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFB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QyxHQUFqRTtBQUFxRSxpQkFBUyxFQUFDLEdBQS9FO0FBQW1GLG9CQUFZLEVBQUMsR0FBaEc7QUFBb0csaUJBQVMsRUFBQztBQUE5RyxTQUFnQixHQUFFaEIsS0FBSyxDQUFDNEIsTUFBTixHQUFlRCxFQUFHLElBQUdYLENBQUUsRUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBa0dILENBckdEOztHQUFNckIsUTs7S0FBQUEsUTtBQXVHTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMjZmZjFlMzczZDFlYWM2OGNkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2hvd2luZm8gZnJvbSAnLi9zaG93aW5mbydcclxuXHJcbmNvbnN0IFdvcmRJbmZvID0gKHtzZXRXaGVyZXRvfSkgPT4ge1xyXG4gICAgY29uc3QgW3dvcmQsIHNldFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3dvcmRzLCBzZXRXb3Jkc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJCYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgV29yZCBJbmZvXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+V29yZDombmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZXR0ZXJJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V29yZChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD4mbmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhY2NlcHRXb3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmRzKFt3b3JkLCAuLi53b3Jkc10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V29yZCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHZXQgV29yZCBJbmZvXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiZuYnNwOzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImFjY2VwdEFscGhhZ3JhbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VOQUJMRTJLP2xldHRlcnM9JyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbS9FTkFCTEUySz9sZXR0ZXJzPSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICdodHRwczovL3dvcmRzLXNjcmFiYmxlLmhlcm9rdWFwcC5jb20vYXBpL2luZm8vJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2godXJsICsgd29yZCkudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFscGhhZ3JhbSByZXNwb25zZSBkYXRhPVwiICsgdGV4dCArIFwiLiBOT0RFX0VOViBoZXJlIGlzIFwiICsgcHJvY2Vzcy5lbnYuTk9ERV9FTlYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpkYXRhID0gSlNPTi5wYXJzZSh0ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXd3b3JkcyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgamRhdGEuYW5hZ3JhbXMubWFwKCh3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld3dvcmRzID1bLi4ubmV3d29yZHMsIHddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoamRhdGEudmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3d29yZHMucHVzaCh3b3JkLnRvVXBwZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld3dvcmRzLnNvcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmQoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmRzKFsuLi5uZXd3b3JkcywgLi4ud29yZHNdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdldCBBbmFncmFtc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD4mbmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhY2NlcHRSZWdleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VOQUJMRTJLP3JlZ2V4PScgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20vRU5BQkxFMks/cmVnZXg9J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2godXJsICsgd29yZC50b0xvY2FsZUxvd2VyQ2FzZSgpKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVnZXggcmVzcG9uc2UgZGF0YT1cIiArIHRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpkYXRhID0gSlNPTi5wYXJzZSh0ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmQoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXd3b3JkcyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgamRhdGEucmVnZXhtYXRjaGVzLm1hcCgodykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXd3b3JkcyA9Wy4uLm5ld3dvcmRzLCB3XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V29yZHMoWy4uLm5ld3dvcmRzLCAuLi53b3Jkc10pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpkYXRhLmNvdW50ID4gNTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1RvbyBtYW55IHJlc3VsdHMsIG9ubHkgNTAgdGFrZW4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHZXQgUmVnZXggTWF0Y2hlc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD4mbmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiA8YnV0dG9uIGlkPVwidmFsaWRhdGVXb3Jkc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FTkFCTEUySz92YWxpZGF0ZT0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsaWRhdGUgPSB3b3JkLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKHVybCArIHZhbGlkYXRlKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwidmFsaWRhdGUgcmVzcG9uc2U9XCIgKyB0ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRlc3QgdmFsaWRhdGUgY2FsbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICAgICAge3dvcmRzLm1hcCgodyx3aSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIHcgPT09ICcnID8gPD48Lz4gOlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaG93aW5mbyBrZXk9e2Ake3dvcmRzLmxlbmd0aCAtIHdpfS4ke3d9YH0gd29yZD17d30gc2hvd0luc2VydHM9XCJZXCIgc2hvd1N3YXBzPVwiWVwiIHNob3dBbmFncmFtcz1cIllcIiBzaG93RHJvcHM9XCJZXCIvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmRJbmZvOyJdLCJzb3VyY2VSb290IjoiIn0=