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
/* harmony import */ var _showanagrams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showanagrams */ "./pages/wi/showanagrams.js");



var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\wi\\showinfo.js",
    _s = $RefreshSig$();



function Showinfo(props) {
  _s();

  const {
    0: info,
    1: setInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: loaded,
    1: setLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  console.log(props.word + loaded);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const apiCall = async () => {
      let response = await fetch('https://words-scrabble.herokuapp.com/api/info/' + props.word);
      let data = await response.text();
      console.log("data=" + data);
      let jdata = JSON.parse(data);
      setInfo(jdata);
      setLoaded(true);
    };

    apiCall();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("html", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("body", {
      className: "wibody",
      children: loaded ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
              children: [props.showInserts === "Y" ? displayInsertsRow(info.inserts) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), props.showSwaps === "Y" ? displaySwapsRow() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), displayWordRow(), props.showDrops === "Y" ? displayDropsRow(info.drops) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                className: "divider",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "\xA0"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 49
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading ..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);

  function displayInsertsRow(inserts) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
      children: inserts.map(i => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [i === '' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 25
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "insertCount",
          "data-toggle": "tooltip",
          title: i,
          children: i.length
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, this)]
      }, void 0, true))
    }, props.word, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this);
  }

  function displaySwapsRow() {
    var _info$swaps;

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
      children: (_info$swaps = info.swaps) === null || _info$swaps === void 0 ? void 0 : _info$swaps.map((s, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [props.showInserts === 'N' || info.inserts[index] === '' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 25
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "balloonstring",
          children: "|"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 25
        }, this), s === '' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 25
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "swapCount",
          "data-toggle": "tooltip",
          title: s,
          children: s.length
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 25
        }, this)]
      }, void 0, true))
    }, props.word, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, this);
  }

  function displayWordRow() {
    var _props$word;

    const key1 = props.word;
    const key2 = props.word + '2';
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
      className: "displayWordRow",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        className: "insertCountSpacer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }, this), (_props$word = props.word) === null || _props$word === void 0 ? void 0 : _props$word.split("").map((l, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: info.valid === "Y" ? "letter" : "letterInvalidWord",
          children: l
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "facevalue",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("sub", {
            children: letterValue(l)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 43
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 17
        }, this)]
      }, void 0, true)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: props.showAnagrams === "Y" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_showanagrams__WEBPACK_IMPORTED_MODULE_2__["default"], {
          word: props.word,
          anagrams: info.anagrams
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 17
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
      }, key1, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: info.valid === 'Y' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "wordIsValid",
          children: "Valid word"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "wordIsNotValid",
          children: "Not a recognized word"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, this)
      }, key2, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, this);
  }

  function displayDropsRow(drops) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
      className: "dropRow",
      children: drops.map(d => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 17
        }, this), d === "Y" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          className: "dropIndicator",
          "data-toggle": "tooltip",
          title: "You can drop this letter",
          children: "\u2022"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 21
        }, this)]
      }, void 0, true))
    }, props.word, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
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

_s(Showinfo, "ePQZhHBb6If+/U6XHS5UTnWfhHM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2kvc2hvd2luZm8uanMiXSwibmFtZXMiOlsiU2hvd2luZm8iLCJwcm9wcyIsImluZm8iLCJzZXRJbmZvIiwidXNlU3RhdGUiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJjb25zb2xlIiwibG9nIiwid29yZCIsInVzZUVmZmVjdCIsImFwaUNhbGwiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsInRleHQiLCJqZGF0YSIsIkpTT04iLCJwYXJzZSIsInNob3dJbnNlcnRzIiwiZGlzcGxheUluc2VydHNSb3ciLCJpbnNlcnRzIiwic2hvd1N3YXBzIiwiZGlzcGxheVN3YXBzUm93IiwiZGlzcGxheVdvcmRSb3ciLCJzaG93RHJvcHMiLCJkaXNwbGF5RHJvcHNSb3ciLCJkcm9wcyIsIm1hcCIsImkiLCJsZW5ndGgiLCJzd2FwcyIsInMiLCJpbmRleCIsImtleTEiLCJrZXkyIiwic3BsaXQiLCJsIiwidmFsaWQiLCJsZXR0ZXJWYWx1ZSIsInNob3dBbmFncmFtcyIsImFuYWdyYW1zIiwiZCIsImxldHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxDQUFtQkMsS0FBbkIsRUFBMkI7QUFBQTs7QUFDdEMsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JGLHNEQUFRLENBQUMsS0FBRCxDQUFwQztBQUNBRyxTQUFPLENBQUNDLEdBQVIsQ0FBYVAsS0FBSyxDQUFDUSxJQUFOLEdBQWFKLE1BQTFCO0FBQ0FLLHlEQUFTLENBQUMsTUFBSTtBQUNWLFVBQU1DLE9BQU8sR0FBRyxZQUFVO0FBQ3RCLFVBQUlDLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsbURBQW1EWixLQUFLLENBQUNRLElBQTFELENBQTFC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R0FBTDtBQUNJLGVBQU8sQ0FBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sQ0FBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxFQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sRUFBUDtBQWhDUjs7QUFrQ0EsV0FBTyxDQUFQO0FBQ0g7QUFDSjs7R0FwS3VCM0MsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93aS93b3JkaW5mby4zMWU0OTlhNmM4ZTgyODYwM2FlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2hvd2FuYWdyYW1zIGZyb20gJy4vc2hvd2FuYWdyYW1zJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hvd2luZm8oIHByb3BzICkge1xyXG4gICAgY29uc3QgW2luZm8sIHNldEluZm9dID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zb2xlLmxvZyggcHJvcHMud29yZCArIGxvYWRlZCApXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCBhcGlDYWxsID0gYXN5bmMgKCk9PntcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vd29yZHMtc2NyYWJibGUuaGVyb2t1YXBwLmNvbS9hcGkvaW5mby8nICsgcHJvcHMud29yZClcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhPVwiICsgZGF0YSlcclxuICAgICAgICAgICAgbGV0IGpkYXRhID0gSlNPTi5wYXJzZShkYXRhKVxyXG4gICAgICAgICAgICBzZXRJbmZvKGpkYXRhKVxyXG4gICAgICAgICAgICBzZXRMb2FkZWQodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgYXBpQ2FsbCgpXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGh0bWw+XHJcbiAgICAgICAgPGJvZHkgY2xhc3NOYW1lPVwid2lib2R5XCI+XHJcbiAgICAgICAgICAgIHtsb2FkZWQgP1xyXG4gICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93SW5zZXJ0cyA9PT0gXCJZXCIgPyBkaXNwbGF5SW5zZXJ0c1JvdyhpbmZvLmluc2VydHMpIDogPD48Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93U3dhcHMgPT09IFwiWVwiID8gZGlzcGxheVN3YXBzUm93KCkgOiA8PjwvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Rpc3BsYXlXb3JkUm93KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93RHJvcHMgPT09IFwiWVwiID8gZGlzcGxheURyb3BzUm93KGluZm8uZHJvcHMpIDogPD48Lz4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiZGl2aWRlclwiPjx0ZD4mbmJzcDs8L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDxwPkxvYWRpbmcgLi4uPC9wPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9ib2R5PlxyXG4gICAgICAgIDwvaHRtbD4gICAgICAgIFxyXG4gICAgKTtcclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5SW5zZXJ0c1JvdyhpbnNlcnRzKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtwcm9wcy53b3JkfT5cclxuICAgICAgICAgICAge2luc2VydHMubWFwKGkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICB7aSA9PT0gJycgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiaW5zZXJ0Q291bnRcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT17aX0+e2kubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5U3dhcHNSb3coKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtwcm9wcy53b3JkfT5cclxuICAgICAgICAgICAge2luZm8uc3dhcHM/Lm1hcCgocywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3dJbnNlcnRzID09PSAnTicgfHwgaW5mby5pbnNlcnRzW2luZGV4XSA9PT0gJycgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJiYWxsb29uc3RyaW5nXCI+fDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtzID09PSAnJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJzd2FwQ291bnRcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT17c30+e3MubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5V29yZFJvdygpIHtcclxuICAgICAgICBjb25zdCBrZXkxID0gcHJvcHMud29yZDtcclxuICAgICAgICBjb25zdCBrZXkyID0gcHJvcHMud29yZCArICcyJztcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJkaXNwbGF5V29yZFJvd1wiPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiaW5zZXJ0Q291bnRTcGFjZXJcIj48L3RkPlxyXG4gICAgICAgICAgICB7cHJvcHMud29yZD8uc3BsaXQoXCJcIikubWFwKChsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2luZm8udmFsaWQgPT09IFwiWVwiID8gXCJsZXR0ZXJcIiA6IFwibGV0dGVySW52YWxpZFdvcmRcIn0+e2x9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmYWNldmFsdWVcIj48c3ViPntsZXR0ZXJWYWx1ZShsKX08L3N1Yj48L3RkPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8dGQga2V5PXtrZXkxfT5cclxuICAgICAgICAgICAge3Byb3BzLnNob3dBbmFncmFtcyA9PT0gXCJZXCIgP1xyXG4gICAgICAgICAgICAgICAgPFNob3dhbmFncmFtcyB3b3JkPXtwcm9wcy53b3JkfSBhbmFncmFtcz17aW5mby5hbmFncmFtc30gLz5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8dGQga2V5PXtrZXkyfT5cclxuICAgICAgICAgICAgICAgIHtpbmZvLnZhbGlkID09PSAnWScgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndvcmRJc1ZhbGlkXCI+VmFsaWQgd29yZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3b3JkSXNOb3RWYWxpZFwiPk5vdCBhIHJlY29nbml6ZWQgd29yZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheURyb3BzUm93KGRyb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtwcm9wcy53b3JkfSBjbGFzc05hbWU9XCJkcm9wUm93XCI+XHJcbiAgICAgICAgICAgIHtkcm9wcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICB7ZCA9PT0gXCJZXCIgP1xyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkcm9wSW5kaWNhdG9yXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJZb3UgY2FuIGRyb3AgdGhpcyBsZXR0ZXJcIj4mYnVsbDs8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsZXR0ZXJWYWx1ZShsZXR0ZXIpIHtcclxuICAgICAgICBzd2l0Y2gobGV0dGVyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ0QnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDIpO1xyXG4gICAgICAgICAgICBjYXNlICdHJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigyKTtcclxuICAgICAgICAgICAgY2FzZSAnQic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMyk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0MnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDMpO1xyXG4gICAgICAgICAgICBjYXNlICdNJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigzKTtcclxuICAgICAgICAgICAgY2FzZSAnUCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMyk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0YnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDQpO1xyXG4gICAgICAgICAgICBjYXNlICdIJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig0KTtcclxuICAgICAgICAgICAgY2FzZSAnVic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oNCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ1cnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDQpO1xyXG4gICAgICAgICAgICBjYXNlICdZJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig0KTtcclxuICAgICAgICAgICAgY2FzZSAnSyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oNSk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0onOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDgpO1xyXG4gICAgICAgICAgICBjYXNlICdYJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig4KTtcclxuICAgICAgICAgICAgY2FzZSAnUSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMTApO1xyXG4gICAgICAgICAgICBjYXNlICdaJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybigxKTtcclxuICAgIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==