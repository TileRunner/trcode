self["webpackHotUpdate_N_E"]("pages/wi/wordinfo",{

/***/ "./pages/wi/showinfo.js":
/*!******************************!*\
  !*** ./pages/wi/showinfo.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Showinfo; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\wi\\showinfo.js",
    _s = $RefreshSig$();


function Showinfo(props) {
  _s();

  const {
    0: info,
    1: setInfo
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: loaded,
    1: setLoaded
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const apiCall = async () => {
      let url =  true ? 'http://localhost:5000/ENABLE2K?letters=' : 0; //  'https://words-scrabble.herokuapp.com/api/info/'
      // let response = await fetch('https://words-scrabble.herokuapp.com/api/info/' + props.word)

      let response = await fetch(url + props.word);
      let jdata = await response.json();
      setInfo(jdata);
      setLoaded(true);
    };

    apiCall();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "wibody",
    children: loaded ?
    /*#__PURE__*/
    // <table>
    // <tr>
    //     <td>
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: [props.showInserts === "Y" ? displayInsertsRow(info.inserts) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false), props.showSwaps === "Y" ? displaySwapsRow(info.swaps) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false), displayWordRow(), props.showDrops === "Y" ? displayDropsRow(info.drops) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          className: "divider",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            colSpan: props.word.length + props.word.length + 3,
            children: "\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 49
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 28
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }, this) //     </td>
    // </tr>
    // </table>
    :
    /*#__PURE__*/
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Loading ..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, this);

  function displayInsertsRow(inserts) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: `Inserts: ${inserts}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this)
    }, `inserts.${props.word}`, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this);
  }

  function displaySwapsRow(swaps) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: `Swaps: ${swaps}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this)
    }, `swaps.${props.word}`, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this);
  }

  function displayWordRow() {
    var _props$word;

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      className: "displayWordRow",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: [(_props$word = props.word) === null || _props$word === void 0 ? void 0 : _props$word.split("").map((l, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: info.valid ? "letter" : "letterInvalidWord",
            children: l
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "facevalue",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("sub", {
              children: letterValue(l)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 45
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 17
          }, this)]
        }, void 0, true)), props.showAnagrams === "Y" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: info.anagrams.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "anagramCount",
            "data-toggle": "tooltip",
            title: info.anagrams,
            children: info.anagrams.length
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 17
          }, this)
        }, info.anagrams, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }, this), info.valid ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "wordIsValid",
          children: "Valid word"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "wordIsNotValid",
          children: "Not a recognized word"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }, this)
    }, `word.${props.word}`, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, this);
  }

  function displayDropsRow(drops) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      className: "dropRow",
      children: drops.map(d => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 17
        }, this), d === "Y" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "dropIndicator",
          "data-toggle": "tooltip",
          title: "You can drop this letter",
          children: "\u2022"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }, this)]
      }, void 0, true))
    }, `drops.${props.word}`, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2kvc2hvd2luZm8uanMiXSwibmFtZXMiOlsiU2hvd2luZm8iLCJwcm9wcyIsImluZm8iLCJzZXRJbmZvIiwidXNlU3RhdGUiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJ1c2VFZmZlY3QiLCJhcGlDYWxsIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsIndvcmQiLCJqZGF0YSIsImpzb24iLCJzaG93SW5zZXJ0cyIsImRpc3BsYXlJbnNlcnRzUm93IiwiaW5zZXJ0cyIsInNob3dTd2FwcyIsImRpc3BsYXlTd2Fwc1JvdyIsInN3YXBzIiwiZGlzcGxheVdvcmRSb3ciLCJzaG93RHJvcHMiLCJkaXNwbGF5RHJvcHNSb3ciLCJkcm9wcyIsImxlbmd0aCIsInNwbGl0IiwibWFwIiwibCIsImluZGV4IiwidmFsaWQiLCJsZXR0ZXJWYWx1ZSIsInNob3dBbmFncmFtcyIsImFuYWdyYW1zIiwiZCIsImxldHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxRQUFULENBQW1CQyxLQUFuQixFQUEyQjtBQUFBOztBQUN0QyxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkYsK0NBQVEsQ0FBQyxLQUFELENBQXBDO0FBQ0FHLGtEQUFTLENBQUMsTUFBSTtBQUNWLFVBQU1DLE9BQU8sR0FBRyxZQUFVO0FBQ3RCLFVBQUlDLEdBQUcsR0FBSSxLQUFELEdBQW9FLHlDQUFwRSxHQUFnSCxDQUExSCxDQURzQixDQUV0QjtBQUNBOztBQUNBLFVBQUlDLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUcsR0FBR1IsS0FBSyxDQUFDVyxJQUFiLENBQTFCO0FBQ0EsVUFBSUMsS0FBSyxHQUFHLE1BQU1ILFFBQVEsQ0FBQ0ksSUFB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QUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sQ0FBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sQ0FBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sQ0FBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssR0FBTDtBQUNJLGVBQU8sQ0FBUDs7QUFDSixXQUFLLEdBQUw7QUFDSSxlQUFPLEVBQVA7O0FBQ0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxFQUFQO0FBaENSOztBQWtDQSxXQUFPLENBQVA7QUFDSDtBQUNKOztHQXhJdUJuQyxROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dpL3dvcmRpbmZvLjZmMWU2Mjk1NDZiMDFhYWNjZmU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaG93aW5mbyggcHJvcHMgKSB7XHJcbiAgICBjb25zdCBbaW5mbywgc2V0SW5mb10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IGFwaUNhbGwgPSBhc3luYyAoKT0+e1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gKCFwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VOQUJMRTJLP2xldHRlcnM9JyA6ICdodHRwczovL3RpbGVydW5uZXIuaGVyb2t1YXBwLmNvbS9FTkFCTEUySz9sZXR0ZXJzPSdcclxuICAgICAgICAgICAgLy8gICdodHRwczovL3dvcmRzLXNjcmFiYmxlLmhlcm9rdWFwcC5jb20vYXBpL2luZm8vJ1xyXG4gICAgICAgICAgICAvLyBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly93b3Jkcy1zY3JhYmJsZS5oZXJva3VhcHAuY29tL2FwaS9pbmZvLycgKyBwcm9wcy53b3JkKVxyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBwcm9wcy53b3JkKVxyXG4gICAgICAgICAgICBsZXQgamRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICAgICAgc2V0SW5mbyhqZGF0YSlcclxuICAgICAgICAgICAgc2V0TG9hZGVkKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFwaUNhbGwoKVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lib2R5XCI+XHJcbiAgICAgICAgICAgIHtsb2FkZWQgP1xyXG4gICAgICAgICAgICAgICAgLy8gPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgLy8gPHRyPlxyXG4gICAgICAgICAgICAgICAgLy8gICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGU+PHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd0luc2VydHMgPT09IFwiWVwiID8gZGlzcGxheUluc2VydHNSb3coaW5mby5pbnNlcnRzKSA6IDw+PC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd1N3YXBzID09PSBcIllcIiA/IGRpc3BsYXlTd2Fwc1JvdyhpbmZvLnN3YXBzKSA6IDw+PC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGlzcGxheVdvcmRSb3coKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3dEcm9wcyA9PT0gXCJZXCIgPyBkaXNwbGF5RHJvcHNSb3coaW5mby5kcm9wcykgOiA8PjwvPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJkaXZpZGVyXCI+PHRkIGNvbFNwYW49e3Byb3BzLndvcmQubGVuZ3RoICsgcHJvcHMud29yZC5sZW5ndGggKyAzfT4mbmJzcDs8L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT48L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgLy8gICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAvLyA8L3RyPlxyXG4gICAgICAgICAgICAgICAgLy8gPC90YWJsZT5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPHA+TG9hZGluZyAuLi48L3A+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheUluc2VydHNSb3coaW5zZXJ0cykge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHRyIGtleT17YGluc2VydHMuJHtwcm9wcy53b3JkfWB9PlxyXG4gICAgICAgICAgICAgICAgPHRkPntgSW5zZXJ0czogJHtpbnNlcnRzfWB9PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5U3dhcHNSb3coc3dhcHMpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2Bzd2Fwcy4ke3Byb3BzLndvcmR9YH0+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2BTd2FwczogJHtzd2Fwc31gfTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlXb3JkUm93KCkge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImRpc3BsYXlXb3JkUm93XCIga2V5PXtgd29yZC4ke3Byb3BzLndvcmR9YH0+XHJcbiAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAge3Byb3BzLndvcmQ/LnNwbGl0KFwiXCIpLm1hcCgobCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2luZm8udmFsaWQgPyBcImxldHRlclwiIDogXCJsZXR0ZXJJbnZhbGlkV29yZFwifT57bH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYWNldmFsdWVcIj48c3ViPntsZXR0ZXJWYWx1ZShsKX08L3N1Yj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIHtwcm9wcy5zaG93QW5hZ3JhbXMgPT09IFwiWVwiICYmXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZm8uYW5hZ3JhbXN9PlxyXG4gICAgICAgICAgICAgICAge2luZm8uYW5hZ3JhbXMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbmFncmFtQ291bnRcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT17aW5mby5hbmFncmFtc30+e2luZm8uYW5hZ3JhbXMubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7aW5mby52YWxpZCA/XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3b3JkSXNWYWxpZFwiPlZhbGlkIHdvcmQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndvcmRJc05vdFZhbGlkXCI+Tm90IGEgcmVjb2duaXplZCB3b3JkPC9zcGFuPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlEcm9wc1Jvdyhkcm9wcykge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHRyIGtleT17YGRyb3BzLiR7cHJvcHMud29yZH1gfSBjbGFzc05hbWU9XCJkcm9wUm93XCI+XHJcbiAgICAgICAgICAgIHtkcm9wcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICB7ZCA9PT0gXCJZXCIgP1xyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkcm9wSW5kaWNhdG9yXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJZb3UgY2FuIGRyb3AgdGhpcyBsZXR0ZXJcIj4mYnVsbDs8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsZXR0ZXJWYWx1ZShsZXR0ZXIpIHtcclxuICAgICAgICBzd2l0Y2gobGV0dGVyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ0QnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDIpO1xyXG4gICAgICAgICAgICBjYXNlICdHJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigyKTtcclxuICAgICAgICAgICAgY2FzZSAnQic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMyk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0MnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDMpO1xyXG4gICAgICAgICAgICBjYXNlICdNJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigzKTtcclxuICAgICAgICAgICAgY2FzZSAnUCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMyk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0YnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDQpO1xyXG4gICAgICAgICAgICBjYXNlICdIJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig0KTtcclxuICAgICAgICAgICAgY2FzZSAnVic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oNCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ1cnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDQpO1xyXG4gICAgICAgICAgICBjYXNlICdZJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig0KTtcclxuICAgICAgICAgICAgY2FzZSAnSyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oNSk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0onOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDgpO1xyXG4gICAgICAgICAgICBjYXNlICdYJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig4KTtcclxuICAgICAgICAgICAgY2FzZSAnUSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMTApO1xyXG4gICAgICAgICAgICBjYXNlICdaJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybigxKTtcclxuICAgIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==