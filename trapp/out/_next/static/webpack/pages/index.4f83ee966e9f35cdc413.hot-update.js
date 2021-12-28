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
          lineNumber: 25,
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
          lineNumber: 26,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
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
          lineNumber: 36,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
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
          lineNumber: 60,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
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
          lineNumber: 82,
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
        lineNumber: 99,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2kvd29yZGluZm8uanMiXSwibmFtZXMiOlsiV29yZEluZm8iLCJzZXRXaGVyZXRvIiwid29yZCIsInNldFdvcmQiLCJ1c2VTdGF0ZSIsIndvcmRzIiwic2V0V29yZHMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJ0ZXh0IiwiamRhdGEiLCJKU09OIiwicGFyc2UiLCJuZXd3b3JkcyIsImFuYWdyYW1zIiwibWFwIiwidyIsInZhbGlkIiwicHVzaCIsInRvVXBwZXJDYXNlIiwic29ydCIsInRvTG9jYWxlTG93ZXJDYXNlIiwicmVnZXhtYXRjaGVzIiwiY291bnQiLCJhbGVydCIsInZhbGlkYXRlIiwidG9Mb3dlckNhc2UiLCJ3aSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWtCO0FBQUE7O0FBQy9CLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDJDQUVJO0FBQVEsaUJBQVMsRUFBQyxVQUFsQjtBQUE2QixlQUFPLEVBQUUsTUFBTTtBQUFDSCxvQkFBVSxDQUFDLE1BQUQsQ0FBVjtBQUFvQixTQUFqRTtBQUFBLCtCQUNJO0FBQUcsbUJBQVMsRUFBQyxnQkFBYjtBQUE4Qix5QkFBWSxTQUExQztBQUFvRCxlQUFLLEVBQUMsTUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQU9JO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFDSSxjQUFJLEVBQUMsTUFEVDtBQUVJLGVBQUssRUFBRUMsSUFGWDtBQUdJLGtCQUFRLEVBQUdLLENBQUQsSUFBTztBQUNiSixtQkFBTyxDQUFDSSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFQO0FBQ0g7QUFMTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLGVBU0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEosZUFVSTtBQUFRLFlBQUUsRUFBQyxZQUFYO0FBQ0ksbUJBQVMsRUFBQyxVQURkO0FBRUksaUJBQU8sRUFBRSxZQUFXO0FBQ2hCSCxvQkFBUSxDQUFDLENBQUNKLElBQUQsRUFBTyxHQUFHRyxLQUFWLENBQUQsQ0FBUjtBQUNBRixtQkFBTyxDQUFDLEVBQUQsQ0FBUDtBQUNILFdBTEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVkosZUFtQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbkJKLGVBb0JJO0FBQVEsWUFBRSxFQUFDLGlCQUFYO0FBQ0ksbUJBQVMsRUFBQyxVQURkO0FBRUksaUJBQU8sRUFBRSxZQUFXO0FBQ2hCLGdCQUFJTyxHQUFHLEdBQUksS0FBRCxHQUFvRSx5Q0FBcEUsR0FBZ0gsQ0FBMUgsQ0FEZ0IsQ0FFaEI7O0FBQ0FDLGlCQUFLLENBQUNELEdBQUcsR0FBR1IsSUFBUCxDQUFMLENBQWtCVSxJQUFsQixDQUF1QkMsR0FBRyxJQUFJQSxHQUFHLENBQUNDLElBQUosRUFBOUIsRUFBMENGLElBQTFDLENBQStDRSxJQUFJLElBQUk7QUFDbkQ7QUFDQSxrQkFBSUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsSUFBWCxDQUFaO0FBQ0Esa0JBQUlJLFFBQVEsR0FBRyxFQUFmO0FBQ0FILG1CQUFLLENBQUNJLFFBQU4sQ0FBZUMsR0FBZixDQUFvQkMsQ0FBRCxJQUFPO0FBQ3RCSCx3QkFBUSxHQUFFLENBQUMsR0FBR0EsUUFBSixFQUFjRyxDQUFkLENBQVY7QUFDSCxlQUZEOztBQUdBLGtCQUFJTixLQUFLLENBQUNPLEtBQVYsRUFBaUI7QUFDYkosd0JBQVEsQ0FBQ0ssSUFBVCxDQUFjckIsSUFBSSxDQUFDc0IsV0FBTCxFQUFkO0FBQ0g7O0FBQ0ROLHNCQUFRLENBQUNPLElBQVQ7QUFDQXRCLHFCQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0FHLHNCQUFRLENBQUMsQ0FBQyxHQUFHWSxRQUFKLEVBQWMsR0FBR2IsS0FBakIsQ0FBRCxDQUFSO0FBQ0gsYUFiRDtBQWNILFdBbkJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXBCSixlQTJDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkEzQ0osZUE0Q0k7QUFBUSxZQUFFLEVBQUMsYUFBWDtBQUNJLG1CQUFTLEVBQUMsVUFEZDtBQUVJLGlCQUFPLEVBQUUsWUFBVztBQUNoQixnQkFBSUssR0FBRyxHQUFJLEtBQUQsR0FBb0UsdUNBQXBFLEdBQThHLENBQXhIO0FBQ0FDLGlCQUFLLENBQUNELEdBQUcsR0FBR1IsSUFBSSxDQUFDd0IsaUJBQUwsRUFBUCxDQUFMLENBQXNDZCxJQUF0QyxDQUEyQ0MsR0FBRyxJQUFJQSxHQUFHLENBQUNDLElBQUosRUFBbEQsRUFBOERGLElBQTlELENBQW1FRSxJQUFJLElBQUk7QUFDdkU7QUFDQSxrQkFBSUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsSUFBWCxDQUFaO0FBQ0FYLHFCQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0Esa0JBQUllLFFBQVEsR0FBRyxFQUFmO0FBQ0FILG1CQUFLLENBQUNZLFlBQU4sQ0FBbUJQLEdBQW5CLENBQXdCQyxDQUFELElBQU87QUFDMUJILHdCQUFRLEdBQUUsQ0FBQyxHQUFHQSxRQUFKLEVBQWNHLENBQWQsQ0FBVjtBQUNILGVBRkQ7QUFHQWYsc0JBQVEsQ0FBQyxDQUFDLEdBQUdZLFFBQUosRUFBYyxHQUFHYixLQUFqQixDQUFELENBQVI7O0FBQ0Esa0JBQUlVLEtBQUssQ0FBQ2EsS0FBTixHQUFjLEVBQWxCLEVBQXNCO0FBQ2xCQyxxQkFBSyxDQUFDLGlDQUFELENBQUw7QUFDSDtBQUNKLGFBWkQ7QUFhSCxXQWpCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE1Q0osZUFpRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBakVKLEVBa0VLLHNCQUEwQztBQUFRLFlBQUUsRUFBQyxlQUFYO0FBQ3ZDLG1CQUFTLEVBQUMsVUFENkI7QUFFdkMsaUJBQU8sRUFBRSxZQUFXO0FBQ2hCLGdCQUFJbkIsR0FBRyxHQUFHLDBDQUFWO0FBQ0EsZ0JBQUlvQixRQUFRLEdBQUc1QixJQUFJLENBQUM2QixXQUFMLEVBQWY7QUFDQXBCLGlCQUFLLENBQUNELEdBQUcsR0FBR29CLFFBQVAsQ0FBTCxDQUFzQmxCLElBQXRCLENBQTJCQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFsQyxFQUE4Q0YsSUFBOUMsQ0FBbURFLElBQUksSUFBSTtBQUN2RGUsbUJBQUssQ0FBQyx1QkFBdUJmLElBQXhCLENBQUw7QUFDSCxhQUZEO0FBR0gsV0FSc0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbEUvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBKLGVBd0ZJO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSxnQkFDS1QsS0FBSyxDQUFDZSxHQUFOLENBQVUsQ0FBQ0MsQ0FBRCxFQUFHVyxFQUFILEtBQ1BYLENBQUMsS0FBSyxFQUFOLGdCQUFXLDZJQUFYLGdCQUNBLDhEQUFDLDhDQUFEO0FBQTRDLFlBQUksRUFBRUEsQ0FBbEQ7QUFBcUQsbUJBQVcsRUFBQyxHQUFqRTtBQUFxRSxpQkFBUyxFQUFDLEdBQS9FO0FBQW1GLG9CQUFZLEVBQUMsR0FBaEc7QUFBb0csaUJBQVMsRUFBQztBQUE5RyxTQUFnQixHQUFFaEIsS0FBSyxDQUFDNEIsTUFBTixHQUFlRCxFQUFHLElBQUdYLENBQUUsRUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeEZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBaUdILENBcEdEOztHQUFNckIsUTs7S0FBQUEsUTtBQXNHTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ZjgzZWU5NjZlOWYzNWNkYzQxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2hvd2luZm8gZnJvbSAnLi9zaG93aW5mbydcclxuXHJcbmNvbnN0IFdvcmRJbmZvID0gKHtzZXRXaGVyZXRvfSkgPT4ge1xyXG4gICAgY29uc3QgW3dvcmQsIHNldFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3dvcmRzLCBzZXRXb3Jkc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJCYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgV29yZCBJbmZvXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+V29yZDombmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwid29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmQoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Jm5ic3A7PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYWNjZXB0V29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXb3Jkcyhbd29yZCwgLi4ud29yZHNdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmQoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR2V0IFdvcmQgSW5mb1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD4mbmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhY2NlcHRBbHBoYWdyYW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FTkFCTEUySz9sZXR0ZXJzPScgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20vRU5BQkxFMks/bGV0dGVycz0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAnaHR0cHM6Ly93b3Jkcy1zY3JhYmJsZS5oZXJva3VhcHAuY29tL2FwaS9pbmZvLydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKHVybCArIHdvcmQpLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpLnRoZW4odGV4dCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJhbHBoYWdyYW0gcmVzcG9uc2UgZGF0YT1cIiArIHRleHQgKyBcIi4gTk9ERV9FTlYgaGVyZSBpcyBcIiArIHByb2Nlc3MuZW52Lk5PREVfRU5WKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBqZGF0YSA9IEpTT04ucGFyc2UodGV4dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3d29yZHMgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpkYXRhLmFuYWdyYW1zLm1hcCgodykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXd3b3JkcyA9Wy4uLm5ld3dvcmRzLCB3XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpkYXRhLnZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld3dvcmRzLnB1c2god29yZC50b1VwcGVyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXd3b3Jkcy5zb3J0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXb3JkKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXb3JkcyhbLi4ubmV3d29yZHMsIC4uLndvcmRzXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHZXQgQW5hZ3JhbXNcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Jm5ic3A7PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYWNjZXB0UmVnZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FTkFCTEUySz9yZWdleD0nIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tL0VOQUJMRTJLP3JlZ2V4PSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKHVybCArIHdvcmQudG9Mb2NhbGVMb3dlckNhc2UoKSkudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlZ2V4IHJlc3BvbnNlIGRhdGE9XCIgKyB0ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBqZGF0YSA9IEpTT04ucGFyc2UodGV4dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXb3JkKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3d29yZHMgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpkYXRhLnJlZ2V4bWF0Y2hlcy5tYXAoKHcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3d29yZHMgPVsuLi5uZXd3b3Jkcywgd11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmRzKFsuLi5uZXd3b3JkcywgLi4ud29yZHNdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqZGF0YS5jb3VudCA+IDUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdUb28gbWFueSByZXN1bHRzLCBvbmx5IDUwIHRha2VuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR2V0IFJlZ2V4IE1hdGNoZXNcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Jm5ic3A7PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgPGJ1dHRvbiBpZD1cInZhbGlkYXRlV29yZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvRU5BQkxFMks/dmFsaWRhdGU9J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbGlkYXRlID0gd29yZC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaCh1cmwgKyB2YWxpZGF0ZSkudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcInZhbGlkYXRlIHJlc3BvbnNlPVwiICsgdGV4dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXN0IHZhbGlkYXRlIGNhbGxcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgICAgIHt3b3Jkcy5tYXAoKHcsd2kpID0+IChcclxuICAgICAgICAgICAgICAgICAgICB3ID09PSAnJyA/IDw+PC8+IDpcclxuICAgICAgICAgICAgICAgICAgICA8U2hvd2luZm8ga2V5PXtgJHt3b3Jkcy5sZW5ndGggLSB3aX0uJHt3fWB9IHdvcmQ9e3d9IHNob3dJbnNlcnRzPVwiWVwiIHNob3dTd2Fwcz1cIllcIiBzaG93QW5hZ3JhbXM9XCJZXCIgc2hvd0Ryb3BzPVwiWVwiLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JkSW5mbzsiXSwic291cmNlUm9vdCI6IiJ9