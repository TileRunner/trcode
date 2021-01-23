webpackHotUpdate_N_E("pages/wi/wordinfo",{

/***/ "./pages/wi/showinfo.js":
/*!******************************!*\
  !*** ./pages/wi/showinfo.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Showinfo; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _showswaps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showswaps */ "./pages/wi/showswaps.js");
/* harmony import */ var _showanagrams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showanagrams */ "./pages/wi/showanagrams.js");
/* harmony import */ var _showvalidity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./showvalidity */ "./pages/wi/showvalidity.js");


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\wi\\showinfo.js";




function Showinfo(props) {
  // These need to be obtained from api when available
  let inserts = ['', '', '1:A', '', '', '', '', '1:S'];
  let drops = [1, 0, 0, 0, 0, 0, 0];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("html", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("body", {
      className: "wibody",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
              children: [props.showInserts === "Y" ? displayInsertsRow(inserts) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.showSwaps === "Y" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_showswaps__WEBPACK_IMPORTED_MODULE_2__["default"], {
                word: props.word
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 44
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), displayWordRow(props.word), props.showDrops === "Y" ? displayDropsRow(drops) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);

  function displayInsertsRow(inserts) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
      children: inserts.map(i => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [i === '' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 25
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          class: "insertCount",
          "data-toggle": "tooltip",
          title: i.split(':')[1],
          children: i.split(':')[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this)]
      }, void 0, true))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this);
  }

  function displayDropsRow(drops) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
      children: drops.map(d => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }, this), d === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          class: "dropIndicator",
          children: "\u2022"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this)]
      }, void 0, true))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this);
  }

  function displayWordRow(word) {
    const key1 = word;
    const key2 = word + '2';
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        width: "5px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }, this), word.split("").map((l, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "letter",
          children: l
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "facevalue",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("sub", {
            children: letterValue(l)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 43
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }, this)]
      }, void 0, true)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: props.showAnagrams === "Y" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_showanagrams__WEBPACK_IMPORTED_MODULE_3__["default"], {
          word: word
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
      }, key1, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_showvalidity__WEBPACK_IMPORTED_MODULE_4__["default"], {
          word: word
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }, this)
      }, key2, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, this);
  }

  function letterValue(letter) {
    switch (letter) {
      case 'D':
        return 2;

      case 'G':
        return 2;

      case 'B':
        return 3;

      case 'C':
        return 3;

      case 'M':
        return 3;

      case 'P':
        return 3;

      case 'F':
        return 4;

      case 'H':
        return 4;

      case 'V':
        return 4;

      case 'W':
        return 4;

      case 'Y':
        return 4;

      case 'K':
        return 5;

      case 'J':
        return 8;

      case 'X':
        return 8;

      case 'Q':
        return 10;

      case 'Z':
        return 10;
    }

    return 1;
  }
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2kvc2hvd2luZm8uanMiXSwibmFtZXMiOlsiU2hvd2luZm8iLCJwcm9wcyIsImluc2VydHMiLCJkcm9wcyIsInNob3dJbnNlcnRzIiwiZGlzcGxheUluc2VydHNSb3ciLCJzaG93U3dhcHMiLCJ3b3JkIiwiZGlzcGxheVdvcmRSb3ciLCJzaG93RHJvcHMiLCJkaXNwbGF5RHJvcHNSb3ciLCJtYXAiLCJpIiwic3BsaXQiLCJkIiwia2V5MSIsImtleTIiLCJsIiwiaW5kZXgiLCJsZXR0ZXJWYWx1ZSIsInNob3dBbmFncmFtcyIsImxldHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxDQUFtQkMsS0FBbkIsRUFBMkI7QUFDdEM7QUFDQSxNQUFJQyxPQUFPLEdBQUcsQ0FBQyxFQUFELEVBQUksRUFBSixFQUFPLEtBQVAsRUFBYSxFQUFiLEVBQWdCLEVBQWhCLEVBQW1CLEVBQW5CLEVBQXNCLEVBQXRCLEVBQXlCLEtBQXpCLENBQWQ7QUFDQSxNQUFJQyxLQUFLLEdBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLENBQVo7QUFFQSxzQkFDSTtBQUFBLDJCQUNBO0FBQU0sZUFBUyxFQUFDLFFBQWhCO0FBQUEsNkJBQ0E7QUFBQSwrQkFDQTtBQUFBLGlDQUNJO0FBQUEsbUNBQ0E7QUFBQSx5QkFDS0YsS0FBSyxDQUFDRyxXQUFOLEtBQXNCLEdBQXRCLEdBQTRCQyxpQkFBaUIsQ0FBQ0gsT0FBRCxDQUE3QyxnQkFBeUQsdUpBRDlELEVBRUtELEtBQUssQ0FBQ0ssU0FBTixLQUFvQixHQUFwQixnQkFBMEIscUVBQUMsa0RBQUQ7QUFBVyxvQkFBSSxFQUFFTCxLQUFLLENBQUNNO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQTFCLGdCQUEyRCx1SkFG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LE1BQVA7QUFDSSxXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sQ0FBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sQ0FBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sQ0FBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sQ0FBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sRUFBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLEVBQVA7QUFoQ1I7O0FBa0NBLFdBQU8sQ0FBUDtBQUNIO0FBQ0o7S0EzSHVCckIsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93aS93b3JkaW5mby4xZGZiNzEzZGMxOTRmZjVmMGE3NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2hvd3N3YXBzIGZyb20gJy4vc2hvd3N3YXBzJ1xyXG5pbXBvcnQgU2hvd2FuYWdyYW1zIGZyb20gJy4vc2hvd2FuYWdyYW1zJ1xyXG5pbXBvcnQgU2hvd3ZhbGlkaXR5IGZyb20gJy4vc2hvd3ZhbGlkaXR5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hvd2luZm8oIHByb3BzICkge1xyXG4gICAgLy8gVGhlc2UgbmVlZCB0byBiZSBvYnRhaW5lZCBmcm9tIGFwaSB3aGVuIGF2YWlsYWJsZVxyXG4gICAgbGV0IGluc2VydHMgPSBbJycsJycsJzE6QScsJycsJycsJycsJycsJzE6UyddO1xyXG4gICAgbGV0IGRyb3BzID0gWzEsMCwwLDAsMCwwLDBdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGh0bWw+XHJcbiAgICAgICAgPGJvZHkgY2xhc3NOYW1lPVwid2lib2R5XCI+XHJcbiAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd0luc2VydHMgPT09IFwiWVwiID8gZGlzcGxheUluc2VydHNSb3coaW5zZXJ0cykgOiA8PjwvPn1cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93U3dhcHMgPT09IFwiWVwiID8gPFNob3dzd2FwcyB3b3JkPXtwcm9wcy53b3JkfS8+IDogPD48Lz59XHJcbiAgICAgICAgICAgICAgICB7ZGlzcGxheVdvcmRSb3cocHJvcHMud29yZCl9XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd0Ryb3BzID09PSBcIllcIiA/IGRpc3BsYXlEcm9wc1Jvdyhkcm9wcykgOiA8PjwvPiB9XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvYm9keT5cclxuICAgICAgICA8L2h0bWw+ICAgICAgICBcclxuICAgICk7XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheUluc2VydHNSb3coaW5zZXJ0cykge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICB7aW5zZXJ0cy5tYXAoaSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpID09PSAnJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImluc2VydENvdW50XCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9e2kuc3BsaXQoJzonKVsxXX0+e2kuc3BsaXQoJzonKVswXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlEcm9wc1Jvdyhkcm9wcykge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICB7ZHJvcHMubWFwKGQgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAge2QgPT09IDEgP1xyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImRyb3BJbmRpY2F0b3JcIj4mYnVsbDs8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5V29yZFJvdyh3b3JkKSB7XHJcbiAgICAgICAgY29uc3Qga2V5MSA9IHdvcmQ7XHJcbiAgICAgICAgY29uc3Qga2V5MiA9IHdvcmQgKyAnMic7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjVweFwiPjwvdGQ+XHJcbiAgICAgICAgICAgIHt3b3JkLnNwbGl0KFwiXCIpLm1hcCgobCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGV0dGVyXCI+e2x9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmYWNldmFsdWVcIj48c3ViPntsZXR0ZXJWYWx1ZShsKX08L3N1Yj48L3RkPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8dGQga2V5PXtrZXkxfT5cclxuICAgICAgICAgICAge3Byb3BzLnNob3dBbmFncmFtcyA9PT0gXCJZXCIgP1xyXG4gICAgICAgICAgICAgICAgPFNob3dhbmFncmFtcyB3b3JkPXt3b3JkfSAvPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBrZXk9e2tleTJ9PlxyXG4gICAgICAgICAgICAgICAgPFNob3d2YWxpZGl0eSB3b3JkPXt3b3JkfSAvPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsZXR0ZXJWYWx1ZShsZXR0ZXIpIHtcclxuICAgICAgICBzd2l0Y2gobGV0dGVyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ0QnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDIpO1xyXG4gICAgICAgICAgICBjYXNlICdHJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigyKTtcclxuICAgICAgICAgICAgY2FzZSAnQic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMyk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0MnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDMpO1xyXG4gICAgICAgICAgICBjYXNlICdNJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigzKTtcclxuICAgICAgICAgICAgY2FzZSAnUCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMyk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0YnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDQpO1xyXG4gICAgICAgICAgICBjYXNlICdIJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig0KTtcclxuICAgICAgICAgICAgY2FzZSAnVic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oNCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ1cnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDQpO1xyXG4gICAgICAgICAgICBjYXNlICdZJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig0KTtcclxuICAgICAgICAgICAgY2FzZSAnSyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oNSk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0onOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDgpO1xyXG4gICAgICAgICAgICBjYXNlICdYJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig4KTtcclxuICAgICAgICAgICAgY2FzZSAnUSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMTApO1xyXG4gICAgICAgICAgICBjYXNlICdaJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybigxKTtcclxuICAgIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==