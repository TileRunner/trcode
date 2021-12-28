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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _showinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showinfo */ "./pages/wi/showinfo.js");
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
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-11 wititle",
        children: ["Word Info", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "material-icons",
          children: "help_outline"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-1 wihomelink",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "w3-button",
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
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-sm-8",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-inline",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            children: "Word:\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            children: "\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            children: "\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
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
            lineNumber: 43,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            children: "\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
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
            lineNumber: 66,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            children: "\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
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
            lineNumber: 87,
            columnNumber: 68
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-sm-4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-sm-8",
        children: words.map((w, wi) => w === '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_showinfo__WEBPACK_IMPORTED_MODULE_3__.default, {
          word: w,
          showInserts: "Y",
          showSwaps: "Y",
          showAnagrams: "Y",
          showDrops: "Y"
        }, `${words.length - wi}.${w}`, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-sm-4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2kvd29yZGluZm8uanMiXSwibmFtZXMiOlsiV29yZEluZm8iLCJzZXRXaGVyZXRvIiwid29yZCIsInNldFdvcmQiLCJ1c2VTdGF0ZSIsIndvcmRzIiwic2V0V29yZHMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJ0ZXh0IiwiamRhdGEiLCJKU09OIiwicGFyc2UiLCJuZXd3b3JkcyIsImFuYWdyYW1zIiwibWFwIiwidyIsInZhbGlkIiwicHVzaCIsInRvVXBwZXJDYXNlIiwic29ydCIsInRvTG9jYWxlTG93ZXJDYXNlIiwicmVnZXhtYXRjaGVzIiwiY291bnQiLCJhbGVydCIsInZhbGlkYXRlIiwidG9Mb3dlckNhc2UiLCJ3aSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFrQjtBQUFBOztBQUMvQixRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkYsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSw2Q0FFSTtBQUFHLG1CQUFTLEVBQUMsZ0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBS0k7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUEsK0JBQ0k7QUFBUSxtQkFBUyxFQUFDLFdBQWxCO0FBQThCLGlCQUFPLEVB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBL0VKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaSixlQTZGSTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQSxrQkFDS1QsS0FBSyxDQUFDZSxHQUFOLENBQVUsQ0FBQ0MsQ0FBRCxFQUFHVyxFQUFILEtBQ1BYLENBQUMsS0FBSyxFQUFOLGdCQUFXLDZJQUFYLGdCQUNBLDhEQUFDLDhDQUFEO0FBQTRDLGNBQUksRUFBRUEsQ0FBbEQ7QUFBcUQscUJBQVcsRUFBQyxHQUFqRTtBQUFxRSxtQkFBUyxFQUFDLEdBQS9FO0FBQW1GLHNCQUFZLEVBQUMsR0FBaEc7QUFBb0csbUJBQVMsRUFBQztBQUE5RyxXQUFnQixHQUFFaEIsS0FBSyxDQUFDNEIsTUFBTixHQUFlRCxFQUFHLElBQUdYLENBQUUsRUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFPSTtBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3Rko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUF5R0gsQ0E1R0Q7O0dBQU1yQixROztLQUFBQSxRO0FBOEdOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM2MmE2YTU0MGU4YzY2MGFlMDBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFNob3dpbmZvIGZyb20gJy4vc2hvd2luZm8nXHJcblxyXG5jb25zdCBXb3JkSW5mbyA9ICh7c2V0V2hlcmV0b30pID0+IHtcclxuICAgIGNvbnN0IFt3b3JkLCBzZXRXb3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt3b3Jkcywgc2V0V29yZHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTEgd2l0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFdvcmQgSW5mb1xyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+aGVscF9vdXRsaW5lPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xIHdpaG9tZWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInczLWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtzZXRXaGVyZXRvKCdtZW51Jyk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Xb3JkOiZuYnNwOzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGV0dGVySW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIndvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXb3JkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiZuYnNwOzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhY2NlcHRXb3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmRzKFt3b3JkLCAuLi53b3Jkc10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmQoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2V0IFdvcmQgSW5mb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiZuYnNwOzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhY2NlcHRBbHBoYWdyYW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FTkFCTEUySz9sZXR0ZXJzPScgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20vRU5BQkxFMks/bGV0dGVycz0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gJ2h0dHBzOi8vd29yZHMtc2NyYWJibGUuaGVyb2t1YXBwLmNvbS9hcGkvaW5mby8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2godXJsICsgd29yZCkudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJhbHBoYWdyYW0gcmVzcG9uc2UgZGF0YT1cIiArIHRleHQgKyBcIi4gTk9ERV9FTlYgaGVyZSBpcyBcIiArIHByb2Nlc3MuZW52Lk5PREVfRU5WKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgamRhdGEgPSBKU09OLnBhcnNlKHRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXd3b3JkcyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpkYXRhLmFuYWdyYW1zLm1hcCgodykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3d29yZHMgPVsuLi5uZXd3b3Jkcywgd11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpkYXRhLnZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXd3b3Jkcy5wdXNoKHdvcmQudG9VcHBlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXd3b3Jkcy5zb3J0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V29yZCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmRzKFsuLi5uZXd3b3JkcywgLi4ud29yZHNdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXQgQW5hZ3JhbXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4mbmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYWNjZXB0UmVnZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FTkFCTEUySz9yZWdleD0nIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tL0VOQUJMRTJLP3JlZ2V4PSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaCh1cmwgKyB3b3JkLnRvTG9jYWxlTG93ZXJDYXNlKCkpLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpLnRoZW4odGV4dCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVnZXggcmVzcG9uc2UgZGF0YT1cIiArIHRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBqZGF0YSA9IEpTT04ucGFyc2UodGV4dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V29yZCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXd3b3JkcyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpkYXRhLnJlZ2V4bWF0Y2hlcy5tYXAoKHcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld3dvcmRzID1bLi4ubmV3d29yZHMsIHddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmRzKFsuLi5uZXd3b3JkcywgLi4ud29yZHNdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoamRhdGEuY291bnQgPiA1MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1RvbyBtYW55IHJlc3VsdHMsIG9ubHkgNTAgdGFrZW4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldCBSZWdleCBNYXRjaGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Jm5ic3A7PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIDxidXR0b24gaWQ9XCJ2YWxpZGF0ZVdvcmRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VOQUJMRTJLP3ZhbGlkYXRlPSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsaWRhdGUgPSB3b3JkLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaCh1cmwgKyB2YWxpZGF0ZSkudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJ2YWxpZGF0ZSByZXNwb25zZT1cIiArIHRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlc3QgdmFsaWRhdGUgY2FsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3dvcmRzLm1hcCgodyx3aSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ID09PSAnJyA/IDw+PC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNob3dpbmZvIGtleT17YCR7d29yZHMubGVuZ3RoIC0gd2l9LiR7d31gfSB3b3JkPXt3fSBzaG93SW5zZXJ0cz1cIllcIiBzaG93U3dhcHM9XCJZXCIgc2hvd0FuYWdyYW1zPVwiWVwiIHNob3dEcm9wcz1cIllcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29yZEluZm87Il0sInNvdXJjZVJvb3QiOiIifQ==