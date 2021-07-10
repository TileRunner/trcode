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
      console.log(`swaps=${JSON.stringify(jdata.swaps)}`);
      jdata.swaps = convertSwaps(jdata.swaps, props.word);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2kvc2hvd2luZm8uanMiXSwibmFtZXMiOlsiU2hvd2luZm8iLCJwcm9wcyIsImluZm8iLCJzZXRJbmZvIiwidXNlU3RhdGUiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJ1c2VFZmZlY3QiLCJhcGlDYWxsIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsIndvcmQiLCJqZGF0YSIsImpzb24iLCJkcm9wcyIsImNvbnZlcnREcm9wcyIsImluc2VydHMiLCJjb252ZXJ0SW5zZXJ0cyIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5Iiwic3dhcHMiLCJjb252ZXJ0U3dhcHMiLCJkcm9waW5mbyIsImluZGV4IiwibGVuZ3RoIiwieW4iLCJpbmRleDIiLCJwdXNoIiwiaW5zZXJ0aW5mbyIsImxldHRlcnMiLCJmb3JFYWNoIiwiaSIsImxldHRlciIsImEiLCJzcGxpdCIsInMiLCJzb3J0Iiwiam9pbiIsInN3YXBpbmZvIiwic2hvd0luc2VydHMiLCJkaXNwbGF5SW5zZXJ0c1JvdyIsInNob3dTd2FwcyIsImRpc3BsYXlTd2Fwc1JvdyIsImRpc3BsYXlXb3JkUm93Iiwic2hvd0Ryb3BzIiwiZGlzcGxheURyb3BzUm93IiwibWFwIiwic3dhcHMyIiwia2V5MSIsImtleTIiLCJ0b1VwcGVyQ2FzZSIsImwiLCJ2YWxpZCIsImxldHRlclZhbHVlIiwic2hvd0FuYWdyYW1zIiwiYW5hZ3JhbXMiLCJkIiwiZGlzcGxheUFuYWdyYW1zUm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFFBQVQsQ0FBbUJDLEtBQW5CLEVBQTJCO0FBQUE7O0FBQ3RDLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCRiwrQ0FBUSxDQUFD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SixXQUFLLEdBQUw7QUFDSSxlQUFPLEVBQVA7QUFoQ1I7O0FBa0NBLFdBQU8sQ0FBUDtBQUNIO0FBQ0o7O0dBek51Qm5DLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd20vbWFzdGVybWluZC40MGU5Y2E0Yjg2NDg2YWE5MTZmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hvd2luZm8oIHByb3BzICkge1xyXG4gICAgY29uc3QgW2luZm8sIHNldEluZm9dID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCBhcGlDYWxsID0gYXN5bmMgKCk9PntcclxuICAgICAgICAgICAgbGV0IHVybCA9ICghcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FTkFCTEUySz9sZXR0ZXJzPScgOiAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20vRU5BQkxFMks/bGV0dGVycz0nXHJcbiAgICAgICAgICAgIC8vICAnaHR0cHM6Ly93b3Jkcy1zY3JhYmJsZS5oZXJva3VhcHAuY29tL2FwaS9pbmZvLydcclxuICAgICAgICAgICAgLy8gbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vd29yZHMtc2NyYWJibGUuaGVyb2t1YXBwLmNvbS9hcGkvaW5mby8nICsgcHJvcHMud29yZClcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgcHJvcHMud29yZClcclxuICAgICAgICAgICAgbGV0IGpkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgIGpkYXRhLmRyb3BzID0gY29udmVydERyb3BzKGpkYXRhLmRyb3BzLCBwcm9wcy53b3JkKVxyXG4gICAgICAgICAgICBqZGF0YS5pbnNlcnRzID0gY29udmVydEluc2VydHMoamRhdGEuaW5zZXJ0cywgcHJvcHMud29yZClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHN3YXBzPSR7SlNPTi5zdHJpbmdpZnkoamRhdGEuc3dhcHMpfWApXHJcbiAgICAgICAgICAgIGpkYXRhLnN3YXBzID0gY29udmVydFN3YXBzKGpkYXRhLnN3YXBzLCBwcm9wcy53b3JkKVxyXG4gICAgICAgICAgICBzZXRJbmZvKGpkYXRhKVxyXG4gICAgICAgICAgICBzZXRMb2FkZWQodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgYXBpQ2FsbCgpXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbnZlcnREcm9wcyhkcm9wcywgd29yZCkge1xyXG4gICAgICAgIGxldCBkcm9waW5mbyA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHdvcmQubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCB5biA9ICdOJ1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleDIgPSAwOyBpbmRleDIgPCBkcm9wcy5sZW5ndGg7IGluZGV4MisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZHJvcHNbaW5kZXgyXS5pbmRleCA9PT0gaW5kZXgpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgeW4gPSAnWSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkcm9waW5mby5wdXNoKHluKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZHJvcGluZm9cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb252ZXJ0SW5zZXJ0cyhpbnNlcnRzLCB3b3JkKSB7XHJcbiAgICAgICAgbGV0IGluc2VydGluZm8gPSBbXVxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPD0gd29yZC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IGxldHRlcnMgPSAnJ1xyXG4gICAgICAgICAgICBpbnNlcnRzLmZvckVhY2goaSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaS5pbmRleCA9PT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXJzID0gbGV0dGVycyArIGkubGV0dGVyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgYSA9IGxldHRlcnMuc3BsaXQoJycpXHJcbiAgICAgICAgICAgIGxldCBzID0gYS5zb3J0KClcclxuICAgICAgICAgICAgaW5zZXJ0aW5mby5wdXNoKHMuam9pbignJykpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbnNlcnRpbmZvXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY29udmVydFN3YXBzKHN3YXBzLCB3b3JkKSB7XHJcbiAgICAgICAgbGV0IHN3YXBpbmZvID0gW11cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgd29yZC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IGxldHRlcnMgPSAnJ1xyXG4gICAgICAgICAgICBzd2Fwcy5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkuaW5kZXggPT09IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVycyA9IGxldHRlcnMgKyBpLmxldHRlclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IGEgPSBsZXR0ZXJzLnNwbGl0KCcnKVxyXG4gICAgICAgICAgICBsZXQgcyA9IGEuc29ydCgpXHJcbiAgICAgICAgICAgIHN3YXBpbmZvLnB1c2gocy5qb2luKCcnKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN3YXBpbmZvXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpYm9keVwiPlxyXG4gICAgICAgICAgICB7bG9hZGVkID9cclxuICAgICAgICAgICAgICAgIDx0YWJsZT48dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3dJbnNlcnRzID09PSBcIllcIiAmJiBpbmZvLmluc2VydHMubGVuZ3RoID4gMCAmJiBkaXNwbGF5SW5zZXJ0c1JvdyhpbmZvLmluc2VydHMpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93U3dhcHMgPT09IFwiWVwiICYmIGluZm8uc3dhcHMubGVuZ3RoID4gMCAmJiBkaXNwbGF5U3dhcHNSb3coaW5mby5zd2Fwcyl9XHJcbiAgICAgICAgICAgICAgICAgICAge2Rpc3BsYXlXb3JkUm93KCl9XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3dEcm9wcyA9PT0gXCJZXCIgJiYgaW5mby5kcm9wcy5sZW5ndGggPiAwICYmIGRpc3BsYXlEcm9wc1JvdyhpbmZvLmRyb3BzKX1cclxuICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiZGl2aWRlclwiPjx0ZCBjb2xTcGFuPXtwcm9wcy53b3JkLmxlbmd0aCArIHByb3BzLndvcmQubGVuZ3RoICsgM30+Jm5ic3A7PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT48L3RhYmxlPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8cD5Mb2FkaW5nIC4uLjwvcD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5SW5zZXJ0c1JvdyhpbnNlcnRzKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtgaW5zZXJ0cy4ke3Byb3BzLndvcmR9YH0+XHJcbiAgICAgICAgICAgICAgICB7aW5zZXJ0cy5tYXAoaSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2kgPT09ICcnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImluc2VydENvdW50XCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9e2l9PntpLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5U3dhcHNSb3coc3dhcHMpIHtcclxuICAgICAgICBjb25zdCBzd2FwczIgPSBbLi4uc3dhcHMsICcnXVxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHRyIGtleT17YHN3YXBzLiR7cHJvcHMud29yZH1gfT5cclxuICAgICAgICAgICAge3N3YXBzMj8ubWFwKChzLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd0luc2VydHMgPT09ICdOJyB8fCBpbmZvLmluc2VydHNbaW5kZXhdID09PSAnJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJpbnNlcnRDb3VudFNwYWNlclwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYmFsbG9vbnN0cmluZ1wiPuKeuzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtzID09PSAnJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJzd2FwQ291bnRcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT17c30+e3MubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheVdvcmRSb3coKSB7XHJcbiAgICAgICAgY29uc3Qga2V5MSA9IHByb3BzLndvcmQ7XHJcbiAgICAgICAgY29uc3Qga2V5MiA9IHByb3BzLndvcmQgKyAnMic7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiZGlzcGxheVdvcmRSb3dcIiBrZXk9e2B3b3JkLiR7cHJvcHMud29yZH1gfT5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJpbnNlcnRDb3VudFNwYWNlclwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMud29yZD8udG9VcHBlckNhc2UoKS5zcGxpdChcIlwiKS5tYXAoKGwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17aW5mby52YWxpZCA/IFwibGV0dGVyXCIgOiBcImxldHRlckludmFsaWRXb3JkXCJ9PntsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmYWNldmFsdWVcIj48c3ViPntsZXR0ZXJWYWx1ZShsKX08L3N1Yj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8dGQga2V5PXtrZXkxfT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93QW5hZ3JhbXMgPT09IFwiWVwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmZvLmFuYWdyYW1zfT5cclxuICAgICAgICAgICAgICAgICAgICB7aW5mby5hbmFncmFtcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFuYWdyYW1Db3VudFwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPXtpbmZvLmFuYWdyYW1zfT57aW5mby5hbmFncmFtcy5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGtleT17a2V5Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAge2luZm8udmFsaWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3b3JkSXNWYWxpZFwiPlZhbGlkIHdvcmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3b3JkSXNOb3RWYWxpZFwiPk5vdCBhIHJlY29nbml6ZWQgd29yZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5RHJvcHNSb3coZHJvcHMpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2Bkcm9wcy4ke3Byb3BzLndvcmR9YH0gY2xhc3NOYW1lPVwiZHJvcFJvd1wiPlxyXG4gICAgICAgICAgICB7ZHJvcHMubWFwKGQgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAge2QgPT09IFwiWVwiID9cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZHJvcEluZGljYXRvclwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiWW91IGNhbiBkcm9wIHRoaXMgbGV0dGVyXCI+JmJ1bGw7PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheUFuYWdyYW1zUm93KGFuYWdyYW1zKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtgYW5hZ3JhbXMuJHtwcm9wcy53b3JkfWB9PlxyXG4gICAgICAgICAgICAgICAgPHRkPntgQW5hZ3JhbXM6ICR7YW5hZ3JhbXN9YH08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsZXR0ZXJWYWx1ZShsZXR0ZXIpIHtcclxuICAgICAgICBzd2l0Y2gobGV0dGVyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ0QnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDIpO1xyXG4gICAgICAgICAgICBjYXNlICdHJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigyKTtcclxuICAgICAgICAgICAgY2FzZSAnQic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMyk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0MnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDMpO1xyXG4gICAgICAgICAgICBjYXNlICdNJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigzKTtcclxuICAgICAgICAgICAgY2FzZSAnUCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMyk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0YnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDQpO1xyXG4gICAgICAgICAgICBjYXNlICdIJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig0KTtcclxuICAgICAgICAgICAgY2FzZSAnVic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oNCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ1cnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDQpO1xyXG4gICAgICAgICAgICBjYXNlICdZJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig0KTtcclxuICAgICAgICAgICAgY2FzZSAnSyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oNSk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0onOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDgpO1xyXG4gICAgICAgICAgICBjYXNlICdYJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig4KTtcclxuICAgICAgICAgICAgY2FzZSAnUSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMTApO1xyXG4gICAgICAgICAgICBjYXNlICdaJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybigxKTtcclxuICAgIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==