self["webpackHotUpdate_N_E"]("pages/wm/mastermind",{

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
      jdata.drops = convertDrops(jdata.drops, props.word);
      jdata.inserts = convertInserts(jdata.inserts, props.word);
      jdata.swaps = convertSwaps(jdata.swaps, props.word);
      console.log(`swaps=${JSON.stringify(jdata.swaps)}`);
      setInfo(jdata);
      setLoaded(true);
    };

    apiCall();
  }, []);

  function convertDrops(drops, word) {
    let dropinfo = [];

    for (let index = 0; index < word.length; index++) {
      let yn = 'N';

      for (let index2 = 0; index2 < drops.length; index2++) {
        if (drops[index2].index === index) {
          yn = 'Y';
        }
      }

      dropinfo.push(yn);
    }

    return dropinfo;
  }

  function convertInserts(inserts, word) {
    let insertinfo = [];

    for (let index = 0; index <= word.length; index++) {
      let letters = '';
      inserts.forEach(i => {
        if (i.index === index) {
          letters = letters + i.letter;
        }
      });
      let a = letters.split('');
      let s = a.sort();
      insertinfo.push(s.join(''));
    }

    return insertinfo;
  }

  function convertSwaps(swaps, word) {
    let swapinfo = [];

    for (let index = 0; index < word.length; index++) {
      let letters = '';
      swaps.forEach(i => {
        if (i.index === index) {
          letters = letters + i.letter;
        }
      });
      let a = letters.split('');
      let s = a.sort();
      swapinfo.push(s.join(''));
    }

    return swapinfo;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "wibody",
    children: loaded ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: [props.showInserts === "Y" && info.inserts.length > 0 && displayInsertsRow(info.inserts), props.showSwaps === "Y" && info.swaps.length > 0 && displaySwapsRow(info.swaps), displayWordRow(), props.showDrops === "Y" && info.drops.length > 0 && displayDropsRow(info.drops), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          className: "divider",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            colSpan: props.word.length + props.word.length + 3,
            children: "\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 45
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 24
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Loading ..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 9
  }, this);

  function displayInsertsRow(inserts) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: inserts.map(i => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [i === '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 29
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "insertCount",
          "data-toggle": "tooltip",
          title: i,
          children: i.length
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 29
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 25
        }, this)]
      }, void 0, true))
    }, `inserts.${props.word}`, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }, this);
  }

  function displaySwapsRow(swaps) {
    const swaps2 = [...swaps, ''];
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: swaps2 === null || swaps2 === void 0 ? void 0 : swaps2.map((s, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [props.showInserts === 'N' || info.inserts[index] === '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "insertCountSpacer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "balloonstring",
          children: "\u27BB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 25
        }, this), s === '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "swapCount",
          "data-toggle": "tooltip",
          title: s,
          children: s.length
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 25
        }, this)]
      }, void 0, true))
    }, `swaps.${props.word}`, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }, this);
  }

  function displayWordRow() {
    var _props$word;

    const key1 = props.word;
    const key2 = props.word + '2';
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      className: "displayWordRow",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        className: "insertCountSpacer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }, this), (_props$word = props.word) === null || _props$word === void 0 ? void 0 : _props$word.toUpperCase().split("").map((l, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: info.valid ? "letter" : "letterInvalidWord",
          children: l
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "facevalue",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("sub", {
            children: letterValue(l)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 51
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 25
        }, this)]
      }, void 0, true)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: props.showAnagrams === "Y" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: info.anagrams.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "anagramCount",
            "data-toggle": "tooltip",
            title: info.anagrams,
            children: info.anagrams.length
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 25
          }, this)
        }, info.anagrams, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 21
        }, this)
      }, key1, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: info.valid ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "wordIsValid",
          children: "Valid word"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "wordIsNotValid",
          children: "Not a recognized word"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 25
        }, this)
      }, key2, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }, this)]
    }, `word.${props.word}`, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }, this);
  }

  function displayDropsRow(drops) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      className: "dropRow",
      children: drops.map(d => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 17
        }, this), d === "Y" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "dropIndicator",
          "data-toggle": "tooltip",
          title: "You can drop this letter",
          children: "\u2022"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 21
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 21
        }, this)]
      }, void 0, true))
    }, `drops.${props.word}`, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }, this);
  }

  function displayAnagramsRow(anagrams) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: `Anagrams: ${anagrams}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 17
      }, this)
    }, `anagrams.${props.word}`, false, {
      fileName: _jsxFileName,
      lineNumber: 177,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2kvc2hvd2luZm8uanMiXSwibmFtZXMiOlsiU2hvd2luZm8iLCJwcm9wcyIsImluZm8iLCJzZXRJbmZvIiwidXNlU3RhdGUiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJ1c2VFZmZlY3QiLCJhcGlDYWxsIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsIndvcmQiLCJqZGF0YSIsImpzb24iLCJkcm9wcyIsImNvbnZlcnREcm9wcyIsImluc2VydHMiLCJjb252ZXJ0SW5zZXJ0cyIsInN3YXBzIiwiY29udmVydFN3YXBzIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJkcm9waW5mbyIsImluZGV4IiwibGVuZ3RoIiwieW4iLCJpbmRleDIiLCJwdXNoIiwiaW5zZXJ0aW5mbyIsImxldHRlcnMiLCJmb3JFYWNoIiwiaSIsImxldHRlciIsImEiLCJzcGxpdCIsInMiLCJzb3J0Iiwiam9pbiIsInN3YXBpbmZvIiwic2hvd0luc2VydHMiLCJkaXNwbGF5SW5zZXJ0c1JvdyIsInNob3dTd2FwcyIsImRpc3BsYXlTd2Fwc1JvdyIsImRpc3BsYXlXb3JkUm93Iiwic2hvd0Ryb3BzIiwiZGlzcGxheURyb3BzUm93IiwibWFwIiwic3dhcHMyIiwia2V5MSIsImtleTIiLCJ0b1VwcGVyQ2FzZSIsImwiLCJ2YWxpZCIsImxldHRlclZhbHVlIiwic2hvd0FuYWdyYW1zIiwiYW5hZ3JhbXMiLCJkIiwiZGlzcGxheUFuYWdyYW1zUm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFFBQVQsQ0FBbUJDLEtBQW5CLEVBQTJCO0FBQUE7O0FBQ3RDLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCRiwrQ0FBUSxDQUFD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Q0osV0FBSyxHQUFMO0FBQ0ksZUFBTyxFQUFQO0FBaENSOztBQWtDQSxXQUFPLENBQVA7QUFDSDtBQUNKOztHQXpOdUJuQyxROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dtL21hc3Rlcm1pbmQuODIzMzMyNmZhMGI1MDM4ZDI1ZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3dpbmZvKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IFtpbmZvLCBzZXRJbmZvXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3QgYXBpQ2FsbCA9IGFzeW5jICgpPT57XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvRU5BQkxFMks/bGV0dGVycz0nIDogJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tL0VOQUJMRTJLP2xldHRlcnM9J1xyXG4gICAgICAgICAgICAvLyAgJ2h0dHBzOi8vd29yZHMtc2NyYWJibGUuaGVyb2t1YXBwLmNvbS9hcGkvaW5mby8nXHJcbiAgICAgICAgICAgIC8vIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3dvcmRzLXNjcmFiYmxlLmhlcm9rdWFwcC5jb20vYXBpL2luZm8vJyArIHByb3BzLndvcmQpXHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIHByb3BzLndvcmQpXHJcbiAgICAgICAgICAgIGxldCBqZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgICBqZGF0YS5kcm9wcyA9IGNvbnZlcnREcm9wcyhqZGF0YS5kcm9wcywgcHJvcHMud29yZClcclxuICAgICAgICAgICAgamRhdGEuaW5zZXJ0cyA9IGNvbnZlcnRJbnNlcnRzKGpkYXRhLmluc2VydHMsIHByb3BzLndvcmQpXHJcbiAgICAgICAgICAgIGpkYXRhLnN3YXBzID0gY29udmVydFN3YXBzKGpkYXRhLnN3YXBzLCBwcm9wcy53b3JkKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc3dhcHM9JHtKU09OLnN0cmluZ2lmeShqZGF0YS5zd2Fwcyl9YClcclxuICAgICAgICAgICAgc2V0SW5mbyhqZGF0YSlcclxuICAgICAgICAgICAgc2V0TG9hZGVkKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFwaUNhbGwoKVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBmdW5jdGlvbiBjb252ZXJ0RHJvcHMoZHJvcHMsIHdvcmQpIHtcclxuICAgICAgICBsZXQgZHJvcGluZm8gPSBbXVxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB3b3JkLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgeW4gPSAnTidcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXgyID0gMDsgaW5kZXgyIDwgZHJvcHMubGVuZ3RoOyBpbmRleDIrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRyb3BzW2luZGV4Ml0uaW5kZXggPT09IGluZGV4KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHluID0gJ1knXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZHJvcGluZm8ucHVzaCh5bilcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRyb3BpbmZvXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY29udmVydEluc2VydHMoaW5zZXJ0cywgd29yZCkge1xyXG4gICAgICAgIGxldCBpbnNlcnRpbmZvID0gW11cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDw9IHdvcmQubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBsZXR0ZXJzID0gJydcclxuICAgICAgICAgICAgaW5zZXJ0cy5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkuaW5kZXggPT09IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVycyA9IGxldHRlcnMgKyBpLmxldHRlclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IGEgPSBsZXR0ZXJzLnNwbGl0KCcnKVxyXG4gICAgICAgICAgICBsZXQgcyA9IGEuc29ydCgpXHJcbiAgICAgICAgICAgIGluc2VydGluZm8ucHVzaChzLmpvaW4oJycpKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW5zZXJ0aW5mb1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbnZlcnRTd2Fwcyhzd2Fwcywgd29yZCkge1xyXG4gICAgICAgIGxldCBzd2FwaW5mbyA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHdvcmQubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBsZXR0ZXJzID0gJydcclxuICAgICAgICAgICAgc3dhcHMuZm9yRWFjaChpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpLmluZGV4ID09PSBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlcnMgPSBsZXR0ZXJzICsgaS5sZXR0ZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxldCBhID0gbGV0dGVycy5zcGxpdCgnJylcclxuICAgICAgICAgICAgbGV0IHMgPSBhLnNvcnQoKVxyXG4gICAgICAgICAgICBzd2FwaW5mby5wdXNoKHMuam9pbignJykpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzd2FwaW5mb1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWJvZHlcIj5cclxuICAgICAgICAgICAge2xvYWRlZCA/XHJcbiAgICAgICAgICAgICAgICA8dGFibGU+PHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93SW5zZXJ0cyA9PT0gXCJZXCIgJiYgaW5mby5pbnNlcnRzLmxlbmd0aCA+IDAgJiYgZGlzcGxheUluc2VydHNSb3coaW5mby5pbnNlcnRzKX1cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd1N3YXBzID09PSBcIllcIiAmJiBpbmZvLnN3YXBzLmxlbmd0aCA+IDAgJiYgZGlzcGxheVN3YXBzUm93KGluZm8uc3dhcHMpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtkaXNwbGF5V29yZFJvdygpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93RHJvcHMgPT09IFwiWVwiICYmIGluZm8uZHJvcHMubGVuZ3RoID4gMCAmJiBkaXNwbGF5RHJvcHNSb3coaW5mby5kcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImRpdmlkZXJcIj48dGQgY29sU3Bhbj17cHJvcHMud29yZC5sZW5ndGggKyBwcm9wcy53b3JkLmxlbmd0aCArIDN9PiZuYnNwOzwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+PC90YWJsZT5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPHA+TG9hZGluZyAuLi48L3A+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheUluc2VydHNSb3coaW5zZXJ0cykge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHRyIGtleT17YGluc2VydHMuJHtwcm9wcy53b3JkfWB9PlxyXG4gICAgICAgICAgICAgICAge2luc2VydHMubWFwKGkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpID09PSAnJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJpbnNlcnRDb3VudFwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPXtpfT57aS5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGlzcGxheVN3YXBzUm93KHN3YXBzKSB7XHJcbiAgICAgICAgY29uc3Qgc3dhcHMyID0gWy4uLnN3YXBzLCAnJ11cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2Bzd2Fwcy4ke3Byb3BzLndvcmR9YH0+XHJcbiAgICAgICAgICAgIHtzd2FwczI/Lm1hcCgocywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3dJbnNlcnRzID09PSAnTicgfHwgaW5mby5pbnNlcnRzW2luZGV4XSA9PT0gJycgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiaW5zZXJ0Q291bnRTcGFjZXJcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJhbGxvb25zdHJpbmdcIj7inrs8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7cyA9PT0gJycgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic3dhcENvdW50XCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9e3N9PntzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlXb3JkUm93KCkge1xyXG4gICAgICAgIGNvbnN0IGtleTEgPSBwcm9wcy53b3JkO1xyXG4gICAgICAgIGNvbnN0IGtleTIgPSBwcm9wcy53b3JkICsgJzInO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImRpc3BsYXlXb3JkUm93XCIga2V5PXtgd29yZC4ke3Byb3BzLndvcmR9YH0+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiaW5zZXJ0Q291bnRTcGFjZXJcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLndvcmQ/LnRvVXBwZXJDYXNlKCkuc3BsaXQoXCJcIikubWFwKChsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2luZm8udmFsaWQgPyBcImxldHRlclwiIDogXCJsZXR0ZXJJbnZhbGlkV29yZFwifT57bH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZmFjZXZhbHVlXCI+PHN1Yj57bGV0dGVyVmFsdWUobCl9PC9zdWI+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPHRkIGtleT17a2V5MX0+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd0FuYWdyYW1zID09PSBcIllcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5mby5hbmFncmFtc30+XHJcbiAgICAgICAgICAgICAgICAgICAge2luZm8uYW5hZ3JhbXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbmFncmFtQ291bnRcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT17aW5mby5hbmFncmFtc30+e2luZm8uYW5hZ3JhbXMubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2tleTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbmZvLnZhbGlkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid29yZElzVmFsaWRcIj5WYWxpZCB3b3JkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid29yZElzTm90VmFsaWRcIj5Ob3QgYSByZWNvZ25pemVkIHdvcmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheURyb3BzUm93KGRyb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtgZHJvcHMuJHtwcm9wcy53b3JkfWB9IGNsYXNzTmFtZT1cImRyb3BSb3dcIj5cclxuICAgICAgICAgICAge2Ryb3BzLm1hcChkID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgIHtkID09PSBcIllcIiA/XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImRyb3BJbmRpY2F0b3JcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIllvdSBjYW4gZHJvcCB0aGlzIGxldHRlclwiPiZidWxsOzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlBbmFncmFtc1JvdyhhbmFncmFtcykge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHRyIGtleT17YGFuYWdyYW1zLiR7cHJvcHMud29yZH1gfT5cclxuICAgICAgICAgICAgICAgIDx0ZD57YEFuYWdyYW1zOiAke2FuYWdyYW1zfWB9PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbGV0dGVyVmFsdWUobGV0dGVyKSB7XHJcbiAgICAgICAgc3dpdGNoKGxldHRlcikge1xyXG4gICAgICAgICAgICBjYXNlICdEJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigyKTtcclxuICAgICAgICAgICAgY2FzZSAnRyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMik7XHJcbiAgICAgICAgICAgIGNhc2UgJ0InOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDMpO1xyXG4gICAgICAgICAgICBjYXNlICdDJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigzKTtcclxuICAgICAgICAgICAgY2FzZSAnTSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMyk7XHJcbiAgICAgICAgICAgIGNhc2UgJ1AnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDMpO1xyXG4gICAgICAgICAgICBjYXNlICdGJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig0KTtcclxuICAgICAgICAgICAgY2FzZSAnSCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oNCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ1YnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDQpO1xyXG4gICAgICAgICAgICBjYXNlICdXJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig0KTtcclxuICAgICAgICAgICAgY2FzZSAnWSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oNCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0snOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDUpO1xyXG4gICAgICAgICAgICBjYXNlICdKJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig4KTtcclxuICAgICAgICAgICAgY2FzZSAnWCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oOCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ1EnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDEwKTtcclxuICAgICAgICAgICAgY2FzZSAnWic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMTApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4oMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=