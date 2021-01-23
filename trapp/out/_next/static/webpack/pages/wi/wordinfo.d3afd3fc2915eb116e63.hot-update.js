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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        width: "5px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }, this), word.split("").map((l, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "letter",
          children: l
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "facevalue",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("sub", {
            children: letterValue(l)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 43
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 17
        }, this)]
      }, void 0, true)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: props.showAnagrams === "Y" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_showanagrams__WEBPACK_IMPORTED_MODULE_3__["default"], {
          word: word
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 17
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_showvalidity__WEBPACK_IMPORTED_MODULE_4__["default"], {
          word: word
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2kvc2hvd2luZm8uanMiXSwibmFtZXMiOlsiU2hvd2luZm8iLCJwcm9wcyIsImluc2VydHMiLCJkcm9wcyIsInNob3dJbnNlcnRzIiwiZGlzcGxheUluc2VydHNSb3ciLCJzaG93U3dhcHMiLCJ3b3JkIiwiZGlzcGxheVdvcmRSb3ciLCJzaG93RHJvcHMiLCJkaXNwbGF5RHJvcHNSb3ciLCJtYXAiLCJpIiwic3BsaXQiLCJkIiwibCIsImluZGV4IiwibGV0dGVyVmFsdWUiLCJzaG93QW5hZ3JhbXMiLCJsZXR0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsQ0FBbUJDLEtBQW5CLEVBQTJCO0FBQ3RDO0FBQ0EsTUFBSUMsT0FBTyxHQUFHLENBQUMsRUFBRCxFQUFJLEVBQUosRUFBTyxLQUFQLEVBQWEsRUFBYixFQUFnQixFQUFoQixFQUFtQixFQUFuQixFQUFzQixFQUF0QixFQUF5QixLQUF6QixDQUFkO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixDQUFaO0FBRUEsc0JBQ0k7QUFBQSwyQkFDQTtBQUFNLGVBQVMsRUFBQyxRQUFoQjtBQUFBLDZCQUNBO0FBQUEsK0JBQ0E7QUFBQSxpQ0FDSTtBQUFBLG1DQUNBO0FBQUEseUJBQ0tGLEtBQUssQ0FBQ0csV0FBTixLQUFzQixHQUF0QixHQUE0QkMsaUJBQWlCLENBQUNILE9BQUQsQ0FBN0MsZ0JBQXlELHVKQUQ5RCxFQUVLRCxLQUFLLENBQUNLLFNBQU4sS0FBb0IsR0FBcEIsZ0JBQTBCLHFFQUFDLGtEQUFEO0FBQVcsb0JBQUksRUFBRUwsS0FBSyxDQUFDTTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUExQixnQkFBMkQsdUpBRmhFLEVBR0tDLGNBQWMs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SixXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sQ0FBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sQ0FBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sQ0FBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sRUFBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLEVBQVA7QUFoQ1I7O0FBa0NBLFdBQU8sQ0FBUDtBQUNIO0FBQ0o7S0F6SHVCbkIsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93aS93b3JkaW5mby5kM2FmZDNmYzI5MTVlYjExNmU2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2hvd3N3YXBzIGZyb20gJy4vc2hvd3N3YXBzJ1xyXG5pbXBvcnQgU2hvd2FuYWdyYW1zIGZyb20gJy4vc2hvd2FuYWdyYW1zJ1xyXG5pbXBvcnQgU2hvd3ZhbGlkaXR5IGZyb20gJy4vc2hvd3ZhbGlkaXR5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hvd2luZm8oIHByb3BzICkge1xyXG4gICAgLy8gVGhlc2UgbmVlZCB0byBiZSBvYnRhaW5lZCBmcm9tIGFwaSB3aGVuIGF2YWlsYWJsZVxyXG4gICAgbGV0IGluc2VydHMgPSBbJycsJycsJzE6QScsJycsJycsJycsJycsJzE6UyddO1xyXG4gICAgbGV0IGRyb3BzID0gWzEsMCwwLDAsMCwwLDBdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGh0bWw+XHJcbiAgICAgICAgPGJvZHkgY2xhc3NOYW1lPVwid2lib2R5XCI+XHJcbiAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd0luc2VydHMgPT09IFwiWVwiID8gZGlzcGxheUluc2VydHNSb3coaW5zZXJ0cykgOiA8PjwvPn1cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93U3dhcHMgPT09IFwiWVwiID8gPFNob3dzd2FwcyB3b3JkPXtwcm9wcy53b3JkfS8+IDogPD48Lz59XHJcbiAgICAgICAgICAgICAgICB7ZGlzcGxheVdvcmRSb3cocHJvcHMud29yZCl9XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd0Ryb3BzID09PSBcIllcIiA/IGRpc3BsYXlEcm9wc1Jvdyhkcm9wcykgOiA8PjwvPiB9XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvYm9keT5cclxuICAgICAgICA8L2h0bWw+ICAgICAgICBcclxuICAgICk7XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheUluc2VydHNSb3coaW5zZXJ0cykge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICB7aW5zZXJ0cy5tYXAoaSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpID09PSAnJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImluc2VydENvdW50XCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9e2kuc3BsaXQoJzonKVsxXX0+e2kuc3BsaXQoJzonKVswXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlEcm9wc1Jvdyhkcm9wcykge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICB7ZHJvcHMubWFwKGQgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAge2QgPT09IDEgP1xyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImRyb3BJbmRpY2F0b3JcIj4mYnVsbDs8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5V29yZFJvdyh3b3JkKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjVweFwiPjwvdGQ+XHJcbiAgICAgICAgICAgIHt3b3JkLnNwbGl0KFwiXCIpLm1hcCgobCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGV0dGVyXCI+e2x9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmYWNldmFsdWVcIj48c3ViPntsZXR0ZXJWYWx1ZShsKX08L3N1Yj48L3RkPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgIHtwcm9wcy5zaG93QW5hZ3JhbXMgPT09IFwiWVwiID9cclxuICAgICAgICAgICAgICAgIDxTaG93YW5hZ3JhbXMgd29yZD17d29yZH0gLz5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8U2hvd3ZhbGlkaXR5IHdvcmQ9e3dvcmR9IC8+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxldHRlclZhbHVlKGxldHRlcikge1xyXG4gICAgICAgIHN3aXRjaChsZXR0ZXIpIHtcclxuICAgICAgICAgICAgY2FzZSAnRCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMik7XHJcbiAgICAgICAgICAgIGNhc2UgJ0cnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDIpO1xyXG4gICAgICAgICAgICBjYXNlICdCJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigzKTtcclxuICAgICAgICAgICAgY2FzZSAnQyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMyk7XHJcbiAgICAgICAgICAgIGNhc2UgJ00nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDMpO1xyXG4gICAgICAgICAgICBjYXNlICdQJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigzKTtcclxuICAgICAgICAgICAgY2FzZSAnRic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oNCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0gnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDQpO1xyXG4gICAgICAgICAgICBjYXNlICdWJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig0KTtcclxuICAgICAgICAgICAgY2FzZSAnVyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oNCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ1knOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDQpO1xyXG4gICAgICAgICAgICBjYXNlICdLJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig1KTtcclxuICAgICAgICAgICAgY2FzZSAnSic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oOCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ1gnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDgpO1xyXG4gICAgICAgICAgICBjYXNlICdRJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigxMCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ1onOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDEwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuKDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9