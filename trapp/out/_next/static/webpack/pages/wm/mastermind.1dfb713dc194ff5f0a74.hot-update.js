webpackHotUpdate_N_E("pages/wm/mastermind",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2kvc2hvd2luZm8uanMiXSwibmFtZXMiOlsiU2hvd2luZm8iLCJwcm9wcyIsImluc2VydHMiLCJkcm9wcyIsInNob3dJbnNlcnRzIiwiZGlzcGxheUluc2VydHNSb3ciLCJzaG93U3dhcHMiLCJ3b3JkIiwiZGlzcGxheVdvcmRSb3ciLCJzaG93RHJvcHMiLCJkaXNwbGF5RHJvcHNSb3ciLCJtYXAiLCJpIiwic3BsaXQiLCJkIiwia2V5MSIsImtleTIiLCJsIiwiaW5kZXgiLCJsZXR0ZXJWYWx1ZSIsInNob3dBbmFncmFtcyIsImxldHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxDQUFtQkMsS0FBbkIsRUFBMkI7QUFDdEM7QUFDQSxNQUFJQyxPQUFPLEdBQUcsQ0FBQyxFQUFELEVBQUksRUFBSixFQUFPLEtBQVAsRUFBYSxFQUFiLEVBQWdCLEVBQWhCLEVBQW1CLEVBQW5CLEVBQXNCLEVBQXRCLEVBQXlCLEtBQXpCLENBQWQ7QUFDQSxNQUFJQyxLQUFLLEdBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLENBQVo7QUFFQSxzQkFDSTtBQUFBLDJCQUNBO0FBQU0sZUFBUyxFQUFDLFFBQWhCO0FBQUEsNkJBQ0E7QUFBQSwrQkFDQTtBQUFBLGlDQUNJO0FBQUEsbUNBQ0E7QUFBQSx5QkFDS0YsS0FBSyxDQUFDRyxXQUFOLEtBQXNCLEdBQXRCLEdBQTRCQyxpQkFBaUIsQ0FBQ0gsT0FBRCxDQUE3QyxnQkFBeUQsdUpBRDlELEVBRUtELEtBQUssQ0FBQ0ssU0FBTixLQUFvQixHQUFwQixnQkFBMEIscUVBQUMsa0RBQUQ7QUFBVyxvQkFBSSxFQUFFTCxLQUFLLENBQUNNO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQTFCLGdCQUEyRCx1SkFGaEUsRUFHS0MsY0FBYyxDQUFDUCxLQUFLLENBQUNNLElBQVAsQ0FIbkIsRUFJS04sS0FBSyxDQUFDUSxTQUFOLEtBQW9CLEdBQXBCLEdBQTBCQyxlQUFlLENBQUNQLEtBQUQsQ0FBekMsZ0JBQW1ELHVKQUp4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKOztBQW1CQSxXQUFTRSxpQkFBVCxDQUEyQkgsT0FBM0IsRUFBb0M7QUFDaEMsd0JBQ0k7QUFBQSxnQkFDQ0EsT0FBTyxDQUFDUyxHQUFSLENBQVlDLENBQUMsaUJBQ1Y7QUFBQSxtQkFDS0EsQ0FBQyxLQUFLLEVBQU4sZ0JBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESCxnQkFHRztBQUFJLGVBQUssRUFBQyxhQUFWO0FBQXdCLHlCQUFZLFNBQXBDO0FBQThDLGVBQUssRUFBRUEsQ0FBQyxDQUFDQyxLQUFGLENBQVEsR0FBUixFQUFhLENBQWIsQ0FBckQ7QUFBQSxvQkFBdUVELENBQUMsQ0FBQ0MsS0FBRixDQUFRLEdBQVIsRUFBYSxDQUFiO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSlIsZUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBKO0FBQUEsc0JBREg7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFlSDs7QUFFRCxXQUFTSCxlQUFULENBQXlCUCxLQUF6QixFQUFnQztBQUM1Qix3QkFDSTtBQUFBLGdCQUNDQSxLQUFLLENBQUNRLEdBQU4sQ0FBVUcsQ0FBQyxpQkFDUjtBQUFBLGdDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsRUFFQ0EsQ0FBQyxLQUFLLENBQU4sZ0JBQ0c7QUFBSSxlQUFLLEVBQUMsZUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESCxnQkFHRztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKO0FBQUEsc0JBREg7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFjSDs7QUFFRCxXQUFTTixjQUFULENBQXdCRCxJQUF4QixFQUE4QjtBQUMxQixVQUFNUSxJQUFJLEdBQUdSLElBQWI7QUFDQSxVQUFNUyxJQUFJLEdBQUdULElBQUksR0FBRyxHQUFwQjtBQUNBLHdCQUNJO0FBQUEsOEJBQ0E7QUFBSSxhQUFLLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsRUFFQ0EsSUFBSSxDQUFDTSxLQUFMLENBQVcsRUFBWCxFQUFlRixHQUFmLENBQW1CLENBQUNNLENBQUQsRUFBSUMsS0FBSixrQkFDaEI7QUFBQSxnQ0FDQTtBQUFJLG1CQUFTLEVBQUMsUUFBZDtBQUFBLG9CQUF3QkQ7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxlQUVBO0FBQUksbUJBQVMsRUFBQyxXQUFkO0FBQUEsaUNBQTBCO0FBQUEsc0JBQU1FLFdBQVcsQ0FBQ0YsQ0FBRDtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkE7QUFBQSxzQkFESCxDQUZELGVBUUE7QUFBQSxrQkFDQ2hCLEtBQUssQ0FBQ21CLFlBQU4sS0FBdUIsR0FBdkIsZ0JBQ0cscUVBQUMscURBQUQ7QUFBYyxjQUFJLEVBQUViO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREgsZ0JBR0Q7QUFKQSxTQUFTUSxJQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSQSxlQWdCQTtBQUFBLCtCQUNJLHFFQUFDLHFEQUFEO0FBQWMsY0FBSSxFQUFFUjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosU0FBU1MsSUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBc0JIOztBQUVELFdBQVNHLFdBQVQsQ0FBcUJFLE1BQXJCLEVBQTZCO0FBQ3pCLFlBQU9BLE1BQVA7QUFDSSxXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sQ0FBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sQ0FBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sQ0FBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sQ0FBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sRUFBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLEVBQVA7QUFoQ1I7O0FBa0NBLFdBQU8sQ0FBUDtBQUNIO0FBQ0o7S0EzSHVCckIsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93bS9tYXN0ZXJtaW5kLjFkZmI3MTNkYzE5NGZmNWYwYTc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTaG93c3dhcHMgZnJvbSAnLi9zaG93c3dhcHMnXHJcbmltcG9ydCBTaG93YW5hZ3JhbXMgZnJvbSAnLi9zaG93YW5hZ3JhbXMnXHJcbmltcG9ydCBTaG93dmFsaWRpdHkgZnJvbSAnLi9zaG93dmFsaWRpdHknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaG93aW5mbyggcHJvcHMgKSB7XHJcbiAgICAvLyBUaGVzZSBuZWVkIHRvIGJlIG9idGFpbmVkIGZyb20gYXBpIHdoZW4gYXZhaWxhYmxlXHJcbiAgICBsZXQgaW5zZXJ0cyA9IFsnJywnJywnMTpBJywnJywnJywnJywnJywnMTpTJ107XHJcbiAgICBsZXQgZHJvcHMgPSBbMSwwLDAsMCwwLDAsMF07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aHRtbD5cclxuICAgICAgICA8Ym9keSBjbGFzc05hbWU9XCJ3aWJvZHlcIj5cclxuICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93SW5zZXJ0cyA9PT0gXCJZXCIgPyBkaXNwbGF5SW5zZXJ0c1JvdyhpbnNlcnRzKSA6IDw+PC8+fVxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnNob3dTd2FwcyA9PT0gXCJZXCIgPyA8U2hvd3N3YXBzIHdvcmQ9e3Byb3BzLndvcmR9Lz4gOiA8PjwvPn1cclxuICAgICAgICAgICAgICAgIHtkaXNwbGF5V29yZFJvdyhwcm9wcy53b3JkKX1cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93RHJvcHMgPT09IFwiWVwiID8gZGlzcGxheURyb3BzUm93KGRyb3BzKSA6IDw+PC8+IH1cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9ib2R5PlxyXG4gICAgICAgIDwvaHRtbD4gICAgICAgIFxyXG4gICAgKTtcclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5SW5zZXJ0c1JvdyhpbnNlcnRzKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIHtpbnNlcnRzLm1hcChpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAge2kgPT09ICcnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiaW5zZXJ0Q291bnRcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT17aS5zcGxpdCgnOicpWzFdfT57aS5zcGxpdCgnOicpWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheURyb3BzUm93KGRyb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIHtkcm9wcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICB7ZCA9PT0gMSA/XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiZHJvcEluZGljYXRvclwiPiZidWxsOzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlXb3JkUm93KHdvcmQpIHtcclxuICAgICAgICBjb25zdCBrZXkxID0gd29yZDtcclxuICAgICAgICBjb25zdCBrZXkyID0gd29yZCArICcyJztcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkIHdpZHRoPVwiNXB4XCI+PC90ZD5cclxuICAgICAgICAgICAge3dvcmQuc3BsaXQoXCJcIikubWFwKChsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsZXR0ZXJcIj57bH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZhY2V2YWx1ZVwiPjxzdWI+e2xldHRlclZhbHVlKGwpfTwvc3ViPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDx0ZCBrZXk9e2tleTF9PlxyXG4gICAgICAgICAgICB7cHJvcHMuc2hvd0FuYWdyYW1zID09PSBcIllcIiA/XHJcbiAgICAgICAgICAgICAgICA8U2hvd2FuYWdyYW1zIHdvcmQ9e3dvcmR9IC8+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPHRkIGtleT17a2V5Mn0+XHJcbiAgICAgICAgICAgICAgICA8U2hvd3ZhbGlkaXR5IHdvcmQ9e3dvcmR9IC8+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxldHRlclZhbHVlKGxldHRlcikge1xyXG4gICAgICAgIHN3aXRjaChsZXR0ZXIpIHtcclxuICAgICAgICAgICAgY2FzZSAnRCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMik7XHJcbiAgICAgICAgICAgIGNhc2UgJ0cnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDIpO1xyXG4gICAgICAgICAgICBjYXNlICdCJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigzKTtcclxuICAgICAgICAgICAgY2FzZSAnQyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMyk7XHJcbiAgICAgICAgICAgIGNhc2UgJ00nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDMpO1xyXG4gICAgICAgICAgICBjYXNlICdQJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigzKTtcclxuICAgICAgICAgICAgY2FzZSAnRic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oNCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0gnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDQpO1xyXG4gICAgICAgICAgICBjYXNlICdWJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig0KTtcclxuICAgICAgICAgICAgY2FzZSAnVyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oNCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ1knOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDQpO1xyXG4gICAgICAgICAgICBjYXNlICdLJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig1KTtcclxuICAgICAgICAgICAgY2FzZSAnSic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oOCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ1gnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDgpO1xyXG4gICAgICAgICAgICBjYXNlICdRJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigxMCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ1onOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDEwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuKDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9