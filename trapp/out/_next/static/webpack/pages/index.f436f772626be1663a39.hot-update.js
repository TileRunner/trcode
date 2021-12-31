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

  function removeEntry(index) {
    let newwords = JSON.parse(JSON.stringify(words)); // This deals with any depth issues using [...words]

    newwords.splice(index, 1);
    setWords(newwords);
  }

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
          lineNumber: 17,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trParagraph",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Word:\xA0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        name: "word",
        value: word,
        onChange: e => {
          setWord(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "\xA0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
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
        lineNumber: 30,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "\xA0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
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
        lineNumber: 40,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "\xA0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
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
        lineNumber: 64,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "\xA0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
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
        lineNumber: 86,
        columnNumber: 60
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined), words.map((w, wi) => w === '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_showinfo__WEBPACK_IMPORTED_MODULE_2__.default, {
      word: w,
      showInserts: "Y",
      showSwaps: "Y",
      showAnagrams: "Y",
      showDrops: "Y",
      removeEntry: removeEntry,
      wordIndex: wi
    }, `${words.length - wi}.${w}`, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2kvd29yZGluZm8uanMiXSwibmFtZXMiOlsiV29yZEluZm8iLCJzZXRXaGVyZXRvIiwid29yZCIsInNldFdvcmQiLCJ1c2VTdGF0ZSIsIndvcmRzIiwic2V0V29yZHMiLCJyZW1vdmVFbnRyeSIsImluZGV4IiwibmV3d29yZHMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzcGxpY2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJ0ZXh0IiwiamRhdGEiLCJhbmFncmFtcyIsIm1hcCIsInciLCJ2YWxpZCIsInB1c2giLCJ0b1VwcGVyQ2FzZSIsInNvcnQiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsInJlZ2V4bWF0Y2hlcyIsImNvdW50IiwiYWxlcnQiLCJ2YWxpZGF0ZSIsInRvTG93ZXJDYXNlIiwid2kiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFrQjtBQUFBOztBQUMvQixRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkYsK0NBQVEsQ0FBQyxFQUFELENBQWxDOztBQUNBLFdBQVNHLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQ3hCLFFBQUlDLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlUCxLQUFmLENBQVgsQ0FBZixDQUR3QixDQUMwQjs7QUFDbERJLFlBQVEsQ0FBQ0ksTUFBVCxDQUFnQkwsS0FBaEIsRUFBc0IsQ0FBdEI7QUFDQUYsWUFBUSxDQUFDRyxRQUFELENBQVI7QUFDSDs7QUFDRCxzQkFDSTtBQUFLLGFBQVMs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LGlCQVBKLEVBc0ZLaEIsS0FBSyxDQUFDbUIsR0FBTixDQUFVLENBQUNDLENBQUQsRUFBR1csRUFBSCxLQUNQWCxDQUFDLEtBQUssRUFBTixnQkFBVyw2SUFBWCxnQkFDQSw4REFBQyw4Q0FBRDtBQUE0QyxVQUFJLEVBQUVBLENBQWxEO0FBQXFELGlCQUFXLEVBQUMsR0FBakU7QUFBcUUsZUFBUyxFQUFDLEdBQS9FO0FBQW1GLGtCQUFZLEVBQUMsR0FBaEc7QUFBb0csZUFBUyxFQUFDLEdBQTlHO0FBQWtILGlCQUFXLEVBQUVsQixXQUEvSDtBQUE0SSxlQUFTLEVBQUU2QjtBQUF2SixPQUFnQixHQUFFL0IsS0FBSyxDQUFDZ0MsTUFBTixHQUFlRCxFQUFHLElBQUdYLENBQUUsRUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSCxDQXRGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQTZGSCxDQXJHRDs7R0FBTXpCLFE7O0tBQUFBLFE7QUF1R04sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjQzNmY3NzI2MjZiZTE2NjNhMzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNob3dpbmZvIGZyb20gJy4vc2hvd2luZm8nXHJcblxyXG5jb25zdCBXb3JkSW5mbyA9ICh7c2V0V2hlcmV0b30pID0+IHtcclxuICAgIGNvbnN0IFt3b3JkLCBzZXRXb3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt3b3Jkcywgc2V0V29yZHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRW50cnkoaW5kZXgpIHtcclxuICAgICAgICBsZXQgbmV3d29yZHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHdvcmRzKSk7IC8vIFRoaXMgZGVhbHMgd2l0aCBhbnkgZGVwdGggaXNzdWVzIHVzaW5nIFsuLi53b3Jkc11cclxuICAgICAgICBuZXd3b3Jkcy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgc2V0V29yZHMobmV3d29yZHMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIFdvcmQgSW5mb1xyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyUGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+V29yZDombmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIndvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRXb3JkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPiZuYnNwOzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYWNjZXB0V29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRXb3Jkcyhbd29yZCwgLi4ud29yZHNdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0V29yZCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBHZXQgV29yZCBJbmZvXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD4mbmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImFjY2VwdEFscGhhZ3JhbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VOQUJMRTJLP2xldHRlcnM9JyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbS9FTkFCTEUySz9sZXR0ZXJzPSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJ2h0dHBzOi8vd29yZHMtc2NyYWJibGUuaGVyb2t1YXBwLmNvbS9hcGkvaW5mby8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKHVybCArIHdvcmQpLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpLnRoZW4odGV4dCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFscGhhZ3JhbSByZXNwb25zZSBkYXRhPVwiICsgdGV4dCArIFwiLiBOT0RFX0VOViBoZXJlIGlzIFwiICsgcHJvY2Vzcy5lbnYuTk9ERV9FTlYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgamRhdGEgPSBKU09OLnBhcnNlKHRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3d29yZHMgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgamRhdGEuYW5hZ3JhbXMubWFwKCh3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3d29yZHMgPVsuLi5uZXd3b3Jkcywgd11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoamRhdGEudmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXd3b3Jkcy5wdXNoKHdvcmQudG9VcHBlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld3dvcmRzLnNvcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V29yZCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXb3JkcyhbLi4ubmV3d29yZHMsIC4uLndvcmRzXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEdldCBBbmFncmFtc1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+Jm5ic3A7PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhY2NlcHRSZWdleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VOQUJMRTJLP3JlZ2V4PScgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20vRU5BQkxFMks/cmVnZXg9J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaCh1cmwgKyB3b3JkLnRvTG9jYWxlTG93ZXJDYXNlKCkpLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpLnRoZW4odGV4dCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlZ2V4IHJlc3BvbnNlIGRhdGE9XCIgKyB0ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpkYXRhID0gSlNPTi5wYXJzZSh0ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V29yZCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3d29yZHMgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgamRhdGEucmVnZXhtYXRjaGVzLm1hcCgodykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld3dvcmRzID1bLi4ubmV3d29yZHMsIHddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V29yZHMoWy4uLm5ld3dvcmRzLCAuLi53b3Jkc10pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoamRhdGEuY291bnQgPiA1MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdUb28gbWFueSByZXN1bHRzLCBvbmx5IDUwIHRha2VuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEdldCBSZWdleCBNYXRjaGVzXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD4mbmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIDxidXR0b24gaWQ9XCJ2YWxpZGF0ZVdvcmRzXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VOQUJMRTJLP3ZhbGlkYXRlPSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbGlkYXRlID0gd29yZC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKHVybCArIHZhbGlkYXRlKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJ2YWxpZGF0ZSByZXNwb25zZT1cIiArIHRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBUZXN0IHZhbGlkYXRlIGNhbGxcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHt3b3Jkcy5tYXAoKHcsd2kpID0+IChcclxuICAgICAgICAgICAgICAgIHcgPT09ICcnID8gPD48Lz4gOlxyXG4gICAgICAgICAgICAgICAgPFNob3dpbmZvIGtleT17YCR7d29yZHMubGVuZ3RoIC0gd2l9LiR7d31gfSB3b3JkPXt3fSBzaG93SW5zZXJ0cz1cIllcIiBzaG93U3dhcHM9XCJZXCIgc2hvd0FuYWdyYW1zPVwiWVwiIHNob3dEcm9wcz1cIllcIiByZW1vdmVFbnRyeT17cmVtb3ZlRW50cnl9IHdvcmRJbmRleD17d2l9Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29yZEluZm87Il0sInNvdXJjZVJvb3QiOiIifQ==