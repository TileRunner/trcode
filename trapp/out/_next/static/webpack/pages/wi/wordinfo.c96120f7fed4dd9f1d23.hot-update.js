webpackHotUpdate_N_E("pages/wi/wordinfo",{

/***/ "./pages/wi/wordinfo.js":
/*!******************************!*\
  !*** ./pages/wi/wordinfo.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _showinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showinfo */ "./pages/wi/showinfo.js");



var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\wi\\wordinfo.js",
    _s = $RefreshSig$();




function handler(req, res) {
  _s();

  const {
    0: word,
    1: setWord
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: words,
    1: setWords
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    class: "container-fluid",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "col-11 wititle",
        children: ["Word Info", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "material-icons",
          children: "help_outline"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "col-1 wihomelink",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "../../",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "material-icons",
              "data-toggle": "tooltip",
              title: "Home",
              children: "home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 28
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "col-sm-8",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-inline",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "Word:\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "letterInput",
            name: "word",
            value: word,
            onChange: e => {
              setWord(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            id: "acceptWord",
            onClick: function () {
              setWords([word, ...words]);
              setWord('');
            },
            children: "Get Word Info"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            id: "acceptAlphagram",
            onClick: function () {
              let url =  true ? 'http://localhost:3000/api/words?alphagram=' : undefined;
              fetch(url + word).then(res => res.text()).then(text => {
                console.log("alphagram response data=" + text + ". NODE_ENV here is " + "development");
                let jdata = JSON.parse(text);
                let newwords = [];
                jdata.anagrams.map(w => {
                  newwords = [...newwords, w];
                });

                if (false) {}

                newwords.sort();
                setWord('');
                setWords([...newwords, ...words]);
              });
            },
            children: "Get Anagrams"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, this),  true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              id: "acceptRegex",
              onClick: function () {
                let url = 'http://localhost:3000/api/words?regex=';
                fetch(url + word).then(res => res.text()).then(text => {
                  console.log("regex response data=" + text);
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
              lineNumber: 72,
              columnNumber: 33
            }, this)]
          }, void 0, true) : /*#__PURE__*/undefined]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "col-sm-4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "col-sm-8",
        children: words.map(w => w === '' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_showinfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
          word: w,
          showInserts: "Y",
          showSwaps: "Y",
          showAnagrams: "Y",
          showDrops: "Y"
        }, w, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "col-sm-4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

_s(handler, "wbZJ7Ik0FkR8e34V1AWsiRmLJ2s=");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2kvd29yZGluZm8uanMiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsIndvcmQiLCJzZXRXb3JkIiwidXNlU3RhdGUiLCJ3b3JkcyIsInNldFdvcmRzIiwiZSIsInRhcmdldCIsInZhbHVlIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwidGV4dCIsImNvbnNvbGUiLCJsb2ciLCJqZGF0YSIsIkpTT04iLCJwYXJzZSIsIm5ld3dvcmRzIiwiYW5hZ3JhbXMiLCJtYXAiLCJ3Iiwic29ydCIsInJlZ2V4bWF0Y2hlcyIsImNvdW50IiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQkMsR0FBdEIsRUFBNEI7QUFBQTs7QUFDdkMsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JGLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLHNCQUNJO0FBQUssU0FBSyxFQUFDLGlCQUFYO0FBQUEsNEJBQ0k7QUFBSyxXQUFLLEVBQUMsS0FBWDtBQUFBLDhCQUNJO0FBQUssYUFBSyxFQUFDLGdCQUFYO0FBQUEsNkNBRUk7QUFBRyxtQkFBUyxFQUFDLGdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBS0k7QUFBSyxhQUFLLEVBQUMsa0JBQVg7QUFBQSwrQkFDSSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBRSxRQUFaO0FBQUEsaUNBQ0k7QUFBQSxtQ0FBRztBQUFHLHVCQUFTLEVBQUMsZ0JBQWI7QUFBOEIsNkJBQVksU0FBMUM7QUFBb0QsbUJBQUssRUFBQyxNQUExRDtB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QUFBQTtBQUFBO0FBQUEsVUFESjtBQXVHSDs7R0ExR3VCdkIsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93aS93b3JkaW5mby5jOTYxMjBmN2ZlZDRkZDlmMWQyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBTaG93aW5mbyBmcm9tICcuL3Nob3dpbmZvJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykgIHtcclxuICAgIGNvbnN0IFt3b3JkLCBzZXRXb3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt3b3Jkcywgc2V0V29yZHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTEgd2l0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFdvcmQgSW5mb1xyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+aGVscF9vdXRsaW5lPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgd2lob21lbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiLi4vLi4vXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+V29yZDombmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxldHRlcklucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V29yZChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4mbmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYWNjZXB0V29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXb3Jkcyhbd29yZCwgLi4ud29yZHNdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXb3JkKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldCBXb3JkIEluZm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4mbmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYWNjZXB0QWxwaGFncmFtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvd29yZHM/YWxwaGFncmFtPScgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdodHRwczovL3dvcmRzLXNjcmFiYmxlLmhlcm9rdWFwcC5jb20vYXBpL2luZm8vJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKHVybCArIHdvcmQpLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpLnRoZW4odGV4dCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWxwaGFncmFtIHJlc3BvbnNlIGRhdGE9XCIgKyB0ZXh0ICsgXCIuIE5PREVfRU5WIGhlcmUgaXMgXCIgKyBwcm9jZXNzLmVudi5OT0RFX0VOVilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpkYXRhID0gSlNPTi5wYXJzZSh0ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3d29yZHMgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqZGF0YS5hbmFncmFtcy5tYXAoKHcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld3dvcmRzID1bLi4ubmV3d29yZHMsIHddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqZGF0YS52YWxpZCA9PT0gJ1knKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3d29yZHMgPSBbd29yZC50b1VwcGVyQ2FzZSgpLCAuLi5uZXd3b3Jkc11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXd3b3Jkcy5zb3J0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V29yZCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmRzKFsuLi5uZXd3b3JkcywgLi4ud29yZHNdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXQgQW5hZ3JhbXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4mbmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhY2NlcHRSZWdleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3dvcmRzP3JlZ2V4PSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKHVybCArIHdvcmQpLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpLnRoZW4odGV4dCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZWdleCByZXNwb25zZSBkYXRhPVwiICsgdGV4dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgamRhdGEgPSBKU09OLnBhcnNlKHRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V29yZCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld3dvcmRzID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqZGF0YS5yZWdleG1hdGNoZXMubWFwKCh3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld3dvcmRzID1bLi4ubmV3d29yZHMsIHddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXb3JkcyhbLi4ubmV3d29yZHMsIC4uLndvcmRzXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoamRhdGEuY291bnQgPiA1MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnVG9vIG1hbnkgcmVzdWx0cywgb25seSA1MCB0YWtlbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldCBSZWdleCBNYXRjaGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLThcIj5cclxuICAgICAgICAgICAgICAgICAgICB7d29yZHMubWFwKCh3KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHcgPT09ICcnID8gPD48Lz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2hvd2luZm8ga2V5PXt3fSB3b3JkPXt3fSBzaG93SW5zZXJ0cz1cIllcIiBzaG93U3dhcHM9XCJZXCIgc2hvd0FuYWdyYW1zPVwiWVwiIHNob3dEcm9wcz1cIllcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9