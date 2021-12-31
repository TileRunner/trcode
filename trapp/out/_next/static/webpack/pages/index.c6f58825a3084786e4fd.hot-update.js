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
      showDrops: "Y"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2kvd29yZGluZm8uanMiXSwibmFtZXMiOlsiV29yZEluZm8iLCJzZXRXaGVyZXRvIiwid29yZCIsInNldFdvcmQiLCJ1c2VTdGF0ZSIsIndvcmRzIiwic2V0V29yZHMiLCJyZW1vdmVFbnRyeSIsImluZGV4IiwibmV3d29yZHMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzcGxpY2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJ0ZXh0IiwiamRhdGEiLCJhbmFncmFtcyIsIm1hcCIsInciLCJ2YWxpZCIsInB1c2giLCJ0b1VwcGVyQ2FzZSIsInNvcnQiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsInJlZ2V4bWF0Y2hlcyIsImNvdW50IiwiYWxlcnQiLCJ2YWxpZGF0ZSIsInRvTG93ZXJDYXNlIiwid2kiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFrQjtBQUFBOztBQUMvQixRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkYsK0NBQVEsQ0FBQyxFQUFELENBQWxDOztBQUNBLFdBQVNHLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQ3hCLFFBQUlDLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlUCxLQUFmLENBQVgsQ0FBZixDQUR3QixDQUMwQjs7QUFDbERJLFlBQVEsQ0FBQ0ksTUFBVCxDQUFnQkwsS0FBaEIsRUFBc0IsQ0FBdEI7QUFDQUYsWUFBUSxDQUFDRyxRQUFELENBQVI7QUFDSDs7QUFDRCxzQkFDSTtBQUFLLGFBQVMs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LGlCQVBKLEVBc0ZLaEIsS0FBSyxDQUFDbUIsR0FBTixDQUFVLENBQUNDLENBQUQsRUFBR1csRUFBSCxLQUNQWCxDQUFDLEtBQUssRUFBTixnQkFBVyw2SUFBWCxnQkFDQSw4REFBQyw4Q0FBRDtBQUE0QyxVQUFJLEVBQUVBLENBQWxEO0FBQXFELGlCQUFXLEVBQUMsR0FBakU7QUFBcUUsZUFBUyxFQUFDLEdBQS9FO0FBQW1GLGtCQUFZLEVBQUMsR0FBaEc7QUFBb0csZUFBUyxFQUFDO0FBQTlHLE9BQWdCLEdBQUVwQixLQUFLLENBQUNnQyxNQUFOLEdBQWVELEVBQUcsSUFBR1gsQ0FBRSxFQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZILENBdEZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBNkZILENBckdEOztHQUFNekIsUTs7S0FBQUEsUTtBQXVHTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jNmY1ODgyNWEzMDg0Nzg2ZTRmZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2hvd2luZm8gZnJvbSAnLi9zaG93aW5mbydcclxuXHJcbmNvbnN0IFdvcmRJbmZvID0gKHtzZXRXaGVyZXRvfSkgPT4ge1xyXG4gICAgY29uc3QgW3dvcmQsIHNldFdvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3dvcmRzLCBzZXRXb3Jkc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBmdW5jdGlvbiByZW1vdmVFbnRyeShpbmRleCkge1xyXG4gICAgICAgIGxldCBuZXd3b3JkcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkod29yZHMpKTsgLy8gVGhpcyBkZWFscyB3aXRoIGFueSBkZXB0aCBpc3N1ZXMgdXNpbmcgWy4uLndvcmRzXVxyXG4gICAgICAgIG5ld3dvcmRzLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICBzZXRXb3JkcyhuZXd3b3Jkcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJCYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgV29yZCBJbmZvXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyQnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3NldFdoZXJldG8oJ21lbnUnKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJQYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Xb3JkOiZuYnNwOzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwid29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmQoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+Jm5ic3A7PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhY2NlcHRXb3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmRzKFt3b3JkLCAuLi53b3Jkc10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRXb3JkKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEdldCBXb3JkIEluZm9cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPiZuYnNwOzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYWNjZXB0QWxwaGFncmFtXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvRU5BQkxFMks/bGV0dGVycz0nIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tL0VOQUJMRTJLP2xldHRlcnM9J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAnaHR0cHM6Ly93b3Jkcy1zY3JhYmJsZS5oZXJva3VhcHAuY29tL2FwaS9pbmZvLydcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2godXJsICsgd29yZCkudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYWxwaGFncmFtIHJlc3BvbnNlIGRhdGE9XCIgKyB0ZXh0ICsgXCIuIE5PREVfRU5WIGhlcmUgaXMgXCIgKyBwcm9jZXNzLmVudi5OT0RFX0VOVilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBqZGF0YSA9IEpTT04ucGFyc2UodGV4dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXd3b3JkcyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqZGF0YS5hbmFncmFtcy5tYXAoKHcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXd3b3JkcyA9Wy4uLm5ld3dvcmRzLCB3XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqZGF0YS52YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld3dvcmRzLnB1c2god29yZC50b1VwcGVyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3d29yZHMuc29ydCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXb3JkKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmRzKFsuLi5uZXd3b3JkcywgLi4ud29yZHNdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgR2V0IEFuYWdyYW1zXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD4mbmJzcDs8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImFjY2VwdFJlZ2V4XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ckJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvRU5BQkxFMks/cmVnZXg9JyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbS9FTkFCTEUySz9yZWdleD0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKHVybCArIHdvcmQudG9Mb2NhbGVMb3dlckNhc2UoKSkudGhlbihyZXMgPT4gcmVzLnRleHQoKSkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVnZXggcmVzcG9uc2UgZGF0YT1cIiArIHRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgamRhdGEgPSBKU09OLnBhcnNlKHRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXb3JkKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXd3b3JkcyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqZGF0YS5yZWdleG1hdGNoZXMubWFwKCh3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3d29yZHMgPVsuLi5uZXd3b3Jkcywgd11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXb3JkcyhbLi4ubmV3d29yZHMsIC4uLndvcmRzXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqZGF0YS5jb3VudCA+IDUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1RvbyBtYW55IHJlc3VsdHMsIG9ubHkgNTAgdGFrZW4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgR2V0IFJlZ2V4IE1hdGNoZXNcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPiZuYnNwOzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgPGJ1dHRvbiBpZD1cInZhbGlkYXRlV29yZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvRU5BQkxFMks/dmFsaWRhdGU9J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsaWRhdGUgPSB3b3JkLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2godXJsICsgdmFsaWRhdGUpLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpLnRoZW4odGV4dCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcInZhbGlkYXRlIHJlc3BvbnNlPVwiICsgdGV4dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFRlc3QgdmFsaWRhdGUgY2FsbFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3dvcmRzLm1hcCgodyx3aSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgdyA9PT0gJycgPyA8PjwvPiA6XHJcbiAgICAgICAgICAgICAgICA8U2hvd2luZm8ga2V5PXtgJHt3b3Jkcy5sZW5ndGggLSB3aX0uJHt3fWB9IHdvcmQ9e3d9IHNob3dJbnNlcnRzPVwiWVwiIHNob3dTd2Fwcz1cIllcIiBzaG93QW5hZ3JhbXM9XCJZXCIgc2hvd0Ryb3BzPVwiWVwiLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29yZEluZm87Il0sInNvdXJjZVJvb3QiOiIifQ==