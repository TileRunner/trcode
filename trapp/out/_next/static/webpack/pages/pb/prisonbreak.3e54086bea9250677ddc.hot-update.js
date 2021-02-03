webpackHotUpdate_N_E("pages/pb/prisonbreak",{

/***/ "./pages/pb/prisonbreak.js":
/*!*********************************!*\
  !*** ./pages/pb/prisonbreak.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\pb\\prisonbreak.js",
    _s = $RefreshSig$();



function handler(req, res) {
  _s();

  const {
    0: squares,
    1: setSquares
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Array(15).fill(Array(15).fill('?')));
  const {
    0: tiles,
    1: setTiles
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z', '?', '?']);
  const {
    0: selection,
    1: setSelection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(-1);
  const {
    0: ptiles,
    1: setPtiles
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: gtiles,
    1: setGtiles
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: whoseturn,
    1: setWhoseturn
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('P');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Game, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);

  function Game() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: "container-fluid",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-12",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "wmtitle Mastermind",
            children: "Prison Break"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Prisoners, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-6",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Board, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Tiles, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Guards, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-1",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: '../../',
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "wmlink",
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this);
  }

  function Board() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      className: "pbBoard",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: squares.map((r, ri) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BoardRow, {
            r: r,
            ri: ri
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 29
          }, this)
        }, `BoardRow${ri}`, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this);
  }

  function BoardRow(props) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
      className: "row pbRow",
      children: props.r.map((c, ci) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Square, {
          c: c,
          ci: ci,
          ri: props.ri
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 25
        }, this)
      }, `Square${props.ri}-${ci}`, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, this);
  }

  function Square(props) {
    const tdclass = props.c !== "?" ? "pbSquareUsed" : props.ri === 7 && props.ci === 7 ? "pbSquareCenterSquare" : (props.ri === 0 || props.ri === 7 || props.ri === 14) && (props.ci === 0 || props.ci === 7 || props.ci === 14) ? "pbSquareEscapeHatch" : "pbSquare";
    const tdvalue = props.c !== "?" ? props.c : tdclass === "pbSquareCenterSquare" ? "✰" : tdclass === "pbSquareEscapeHatch" ? "💫" : "⎔";
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: tdclass,
          onClick: function () {
            if (selection > -1 && props.c === "?") {
              let newSquares = [...squares];
              let newRow = [...newSquares[props.ri]];
              newRow[props.ci] = whoseturn === 'P' ? ptiles[selection] : gtiles[selection];
              newSquares[props.ri] = [...newRow];
              let newTiles = whoseturn === 'P' ? [...ptiles] : [...gtiles];
              newTiles.splice(selection, 1);
              setSquares(newSquares);
              whoseturn === 'P' ? setPtiles(newTiles) : setGtiles(newTiles);
            }
          },
          children: tdvalue
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }, this);
  }

  function Tiles() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pbTilepool",
      children: tiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: [ti > 0 && tiles[ti] !== tiles[ti - 1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 64
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: t
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 25
        }, this)]
      }, `tile${ti}`, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }, this);
  }

  function Prisoners() {
    if (whoseturn === 'P' && ptiles.length < 7 && tiles.length > 0) {
      let rand = Math.floor(Math.random() * tiles.length);
      let newPtiles = [...ptiles, tiles[rand]];
      let newTiles = [...tiles];
      newTiles.splice(rand, 1);
      setPtiles(newPtiles);
      setTiles(newTiles);
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "PRISONERS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "pbTilepool",
        children: ptiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function () {
              whoseturn === 'P' ? setSelection(ti) : alert('It is not your turn');
            },
            children: t
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 29
          }, this)
        }, `ptile${ti}`, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }, this), whoseturn === 'P' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function () {
          setWhoseturn('G');
        },
        children: "Finish Turn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }, this);
  }

  function Guards() {
    if (whoseturn === 'G' && gtiles.length < 7 && tiles.length > 0) {
      let rand = Math.floor(Math.random() * tiles.length);
      let newGtiles = [...gtiles, tiles[rand]];
      let newTiles = [...tiles];
      newTiles.splice(rand, 1);
      setTiles(newTiles);
      setGtiles(newGtiles);
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "GUARDS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "pbTilepool",
        children: gtiles.map((t, ti) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function () {
              whosetuen === 'G' ? setSelection(ti) : alert('It is not your turn');
            },
            children: t
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 29
          }, this)
        }, `gtile${ti}`, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }, this), whoseturn === 'G' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function () {
          setWhoseturn('P');
        },
        children: "Finish Turn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }, this);
  }
}

_s(handler, "Z3nKpYgrGSBu/GP/+jHaiP1E5ZY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvcHJpc29uYnJlYWsuanMiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsInNxdWFyZXMiLCJzZXRTcXVhcmVzIiwidXNlU3RhdGUiLCJBcnJheSIsImZpbGwiLCJ0aWxlcyIsInNldFRpbGVzIiwic2VsZWN0aW9uIiwic2V0U2VsZWN0aW9uIiwicHRpbGVzIiwic2V0UHRpbGVzIiwiZ3RpbGVzIiwic2V0R3RpbGVzIiwid2hvc2V0dXJuIiwic2V0V2hvc2V0dXJuIiwiR2FtZSIsIkJvYXJkIiwibWFwIiwiciIsInJpIiwiQm9hcmRSb3ciLCJwcm9wcyIsImMiLCJjaSIsIlNxdWFyZSIsInRkY2xhc3MiLCJ0ZHZhbHVlIiwibmV3U3F1YXJlcyIsIm5ld1JvdyIsIm5ld1RpbGVzIiwic3BsaWNlIiwiVGlsZXMiLCJ0IiwidGkiLCJQcmlzb25lcnMiLCJsZW5ndGgiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibmV3UHRpbGVzIiwiYWxlcnQiLCJHdWFyZHMiLCJuZXdHdGlsZXMiLCJ3aG9zZXR1ZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQkMsR0FBdEIsRUFBNEI7QUFBQTs7QUFDdkMsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDQyxLQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLElBQVYsQ0FBZUQsS0FBSyxDQUFDLEVBQUQsQ0FBTCxDQUFVQyxJQUFWLENBQWUsR0FBZixDQUFmLENBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JKLHNEQUFRLENBQUMsQ0FBQyxHQUFELEVBQUssR0FBTCxFQUFTLEdBQVQsRUFBYSxHQUFiLEVBQWlCLEdBQWpCLEVBQXFCLEdBQXJCLEVBQXlCLEdBQXpCLEVBQTZCLEdBQTdCLEVBQWlDLEdBQWpDLEVBQXFDLEdBQXJDLEVBQXlDLEdBQXpDLEVBQTZDLEdBQTdDLEVBQWlELEdBQWpELEVBQXFELEdBQXJELEVBQXlELEdBQXpELEVBQTZELEdBQTdELEVBQWlFLEdBQWpFLEVBQXFFLEdBQXJFLEVBQXlFLEdBQXpFLEVBQTZFLEdBQTdFLEVBQWlGLEdBQWpGLEVBQXFGLEdBQXJGLEVBQXlGLEdBQXpGLEVBQTZGLEdBQTdGLEVBQWlHLEdBQWpHLEVBQXFHLEdBQXJHLEVBQXlHLEdBQXpHLEVBQTZHLEdBQTdHLEVBQWlILEdBQWpILEVBQXFILEdBQXJILEVBQXlILEdBQXpILEVBQTZILEdBQTdILEVBQWlJLEdBQWpJLEVBQXFJLEdBQXJJLEVBQXlJLEdBQXpJLEVBQTZJLEdBQTdJLEVBQWlKLEdBQWpKLEVBQXFKLEdBQXJKLEVBQXlKLEdBQXpKLEVBQTZKLEdBQTdKLEVBQWlLLEdBQWpLLEVBQXFLLEdBQXJLLEVBQXlLLEdBQXpLLEVBQTZLLEdBQTdLLEVBQWlMLEdBQWpMLEVBQXFMLEdBQXJMLEVBQXlMLEdBQXpMLEVBQTZMLEdBQTdMLEVBQWlNLEdBQWpNLEVBQXFNLEdBQXJNLEVBQXlNLEdBQXpNLEVBQTZNLEdBQTdNLEVBQWlOLEdBQWpOLEVBQXFOLEdBQXJOLEVBQXlOLEdBQXpOLEVBQTZOLEdBQTdOLEVBQWlPLEdBQWpPLEVBQXFPLEdBQXJPLEVBQXlPLEdBQXpPLEVBQTZPLEdBQTdPLEVBQWlQLEdBQWpQLEVBQXFQLEdBQXJQLEVBQXlQLEdBQXpQLEVBQTZQLEdBQTdQLEVBQWlRLEdBQWpRLEVBQXFRLEdBQXJRLEVBQXlRLEdBQXpRLEVBQTZRLEdBQTdRLEVBQWlSLEdBQWpSLEVBQXFSLEdBQXJSLEVBQXlSLEdBQXpSLEVBQTZSLEdBQTdSLEVBQWlTLEdBQWpTLEVBQXFTLEdBQXJTLEVBQXlTLEdBQXpTLEVBQTZTLEdBQTdTLEVBQWlULEdBQWpULEVBQXFULEdBQXJULEVBQXlULEdBQXpULEVBQTZULEdBQTdULEVBQWlVLEdBQWpVLEVBQXFV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QWdCTSxJQUFoQixFQUFxQixDQUFyQjtBQUNBOUIsY0FBUSxDQUFDdUIsUUFBRCxDQUFSO0FBQ0FqQixlQUFTLENBQUMrQixTQUFELENBQVQ7QUFDSDs7QUFDRCx3QkFDSTtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFHLGlCQUFTLEVBQUMsWUFBYjtBQUFBLGtCQUNLaEMsTUFBTSxDQUFDTSxHQUFQLENBQVcsQ0FBQ2UsQ0FBRCxFQUFHQyxFQUFILGtCQUNSO0FBQUEsaUNBQ0k7QUFDSSxtQkFBTyxFQUFFLFlBQVc7QUFDaEJXLHVCQUFTLEtBQUssR0FBZCxHQUFvQnBDLFlBQVksQ0FBQ3lCLEVBQUQsQ0FBaEMsR0FBdUNRLEtBQUssQ0FBQyxxQkFBRCxDQUE1QztBQUNILGFBSEw7QUFBQSxzQkFLS1Q7QUFMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosV0FBWSxRQUFPQyxFQUFHLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosRUFlS3BCLFNBQVMsS0FBSyxHQUFkLGdCQUNHO0FBQ0EsZUFBTyxFQUFFLFlBQVc7QUFDaEJDLHNCQUFZLENBQUMsR0FBRCxDQUFaO0FBQ0gsU0FIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURILGdCQVFHLHVKQXZCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQTRCSDtBQUNKOztHQTdMdUJqQixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BiL3ByaXNvbmJyZWFrLjNlNTQwODZiZWE5MjUwNjc3ZGRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpICB7XHJcbiAgICBjb25zdCBbc3F1YXJlcywgc2V0U3F1YXJlc10gPSB1c2VTdGF0ZShBcnJheSgxNSkuZmlsbChBcnJheSgxNSkuZmlsbCgnPycpKSlcclxuICAgIGNvbnN0IFt0aWxlcywgc2V0VGlsZXNdID0gdXNlU3RhdGUoWydBJywnQScsJ0EnLCdBJywnQScsJ0EnLCdBJywnQScsJ0EnLCdCJywnQicsJ0MnLCdDJywnQycsJ0QnLCdEJywnRCcsJ0QnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdFJywnRScsJ0UnLCdGJywnRicsJ0cnLCdHJywnRycsJ0gnLCdIJywnSScsJ0knLCdJJywnSScsJ0knLCdJJywnSScsJ0knLCdJJywnSicsJ0snLCdMJywnTCcsJ0wnLCdMJywnTScsJ00nLCdOJywnTicsJ04nLCdOJywnTicsJ04nLCdPJywnTycsJ08nLCdPJywnTycsJ08nLCdPJywnTycsJ1AnLCdQJywnUScsJ1InLCdSJywnUicsJ1InLCdSJywnUicsJ1MnLCdTJywnUycsJ1MnLCdUJywnVCcsJ1QnLCdUJywnVCcsJ1QnLCdVJywnVScsJ1UnLCdVJywnVicsJ1YnLCdXJywnVycsJ1gnLCdZJywnWScsJ1onLCc/JywnPyddKVxyXG4gICAgY29uc3QgW3NlbGVjdGlvbiwgc2V0U2VsZWN0aW9uXSA9IHVzZVN0YXRlKC0xKVxyXG4gICAgY29uc3QgW3B0aWxlcywgc2V0UHRpbGVzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2d0aWxlcywgc2V0R3RpbGVzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3dob3NldHVybiwgc2V0V2hvc2V0dXJuXSA9IHVzZVN0YXRlKCdQJylcclxuICAgIHJldHVybihcclxuICAgICAgICA8R2FtZS8+XHJcbiAgICApXHJcblxyXG4gICAgZnVuY3Rpb24gR2FtZSgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid210aXRsZSBNYXN0ZXJtaW5kXCI+UHJpc29uIEJyZWFrPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJpc29uZXJzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGlsZXMgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEd1YXJkcyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycuLi8uLi8nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndtbGlua1wiPkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQm9hcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInBiQm9hcmRcIj5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7c3F1YXJlcy5tYXAoKHIscmkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2BCb2FyZFJvdyR7cml9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRSb3cgcj17cn0gcmk9e3JpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEJvYXJkUm93KHByb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInJvdyBwYlJvd1wiPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnIubWFwKChjLGNpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2BTcXVhcmUke3Byb3BzLnJpfS0ke2NpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3F1YXJlIGM9e2N9IGNpPXtjaX0gcmk9e3Byb3BzLnJpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gU3F1YXJlKHByb3BzKSB7XHJcbiAgICAgICAgY29uc3QgdGRjbGFzcyA9IHByb3BzLmMgIT09IFwiP1wiID8gXCJwYlNxdWFyZVVzZWRcIiA6IHByb3BzLnJpID09PSA3ICYmIHByb3BzLmNpID09PSA3ID8gXCJwYlNxdWFyZUNlbnRlclNxdWFyZVwiIDogKHByb3BzLnJpID09PSAwIHx8IHByb3BzLnJpID09PSA3IHx8IHByb3BzLnJpID09PSAxNCkgJiYgKHByb3BzLmNpID09PSAwIHx8IHByb3BzLmNpID09PSA3IHx8IHByb3BzLmNpID09PSAxNCkgPyBcInBiU3F1YXJlRXNjYXBlSGF0Y2hcIiA6IFwicGJTcXVhcmVcIlxyXG4gICAgICAgIGNvbnN0IHRkdmFsdWUgPSBwcm9wcy5jICE9PSBcIj9cIiA/IHByb3BzLmMgOiB0ZGNsYXNzID09PSBcInBiU3F1YXJlQ2VudGVyU3F1YXJlXCIgPyBcIuKcsFwiIDogdGRjbGFzcyA9PT0gXCJwYlNxdWFyZUVzY2FwZUhhdGNoXCIgPyBcIvCfkqtcIiA6IFwi4o6UXCJcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT17dGRjbGFzc31cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbiA+IC0xICYmIHByb3BzLmMgPT09IFwiP1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3U3F1YXJlcyA9IFsuLi5zcXVhcmVzXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1JvdyA9IFsuLi5uZXdTcXVhcmVzW3Byb3BzLnJpXV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Jvd1twcm9wcy5jaV0gPSB3aG9zZXR1cm4gPT09ICdQJyA/IHB0aWxlc1tzZWxlY3Rpb25dIDogZ3RpbGVzW3NlbGVjdGlvbl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NxdWFyZXNbcHJvcHMucmldID0gWy4uLm5ld1Jvd11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdUaWxlcyA9IHdob3NldHVybiA9PT0gJ1AnID8gWy4uLnB0aWxlc10gOiBbLi4uZ3RpbGVzXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGlsZXMuc3BsaWNlKHNlbGVjdGlvbiwgMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNxdWFyZXMobmV3U3F1YXJlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdob3NldHVybiA9PT0gJ1AnID8gc2V0UHRpbGVzKG5ld1RpbGVzKSA6IHNldEd0aWxlcyhuZXdUaWxlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGR2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBUaWxlcygpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYlRpbGVwb29sXCI+XHJcbiAgICAgICAgICAgICAgICB7dGlsZXMubWFwKCh0LHRpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtgdGlsZSR7dGl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aSA+IDAgJiYgdGlsZXNbdGldICE9PSB0aWxlc1t0aS0xXSA/IDxicj48L2JyPiA6IDw+PC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFByaXNvbmVycygpIHtcclxuICAgICAgICBpZiAod2hvc2V0dXJuID09PSAnUCcgJiYgcHRpbGVzLmxlbmd0aCA8IDcgJiYgdGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRpbGVzLmxlbmd0aClcclxuICAgICAgICAgICAgbGV0IG5ld1B0aWxlcyA9IFsuLi5wdGlsZXMsIHRpbGVzW3JhbmRdXVxyXG4gICAgICAgICAgICBsZXQgbmV3VGlsZXMgPSBbLi4udGlsZXNdXHJcbiAgICAgICAgICAgIG5ld1RpbGVzLnNwbGljZShyYW5kLDEpXHJcbiAgICAgICAgICAgIHNldFB0aWxlcyhuZXdQdGlsZXMpXHJcbiAgICAgICAgICAgIHNldFRpbGVzKG5ld1RpbGVzKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+UFJJU09ORVJTPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGJUaWxlcG9vbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwdGlsZXMubWFwKCh0LHRpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YHB0aWxlJHt0aX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hvc2V0dXJuID09PSAnUCcgPyBzZXRTZWxlY3Rpb24odGkpIDogYWxlcnQoJ0l0IGlzIG5vdCB5b3VyIHR1cm4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAge3dob3NldHVybiA9PT0gJ1AnID9cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFdob3NldHVybignRycpXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbmlzaCBUdXJuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBHdWFyZHMoKSB7XHJcbiAgICAgICAgaWYgKHdob3NldHVybiA9PT0gJ0cnICYmIGd0aWxlcy5sZW5ndGggPCA3ICYmIHRpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aWxlcy5sZW5ndGgpXHJcbiAgICAgICAgICAgIGxldCBuZXdHdGlsZXMgPSBbLi4uZ3RpbGVzLCB0aWxlc1tyYW5kXV1cclxuICAgICAgICAgICAgbGV0IG5ld1RpbGVzID0gWy4uLnRpbGVzXVxyXG4gICAgICAgICAgICBuZXdUaWxlcy5zcGxpY2UocmFuZCwxKVxyXG4gICAgICAgICAgICBzZXRUaWxlcyhuZXdUaWxlcylcclxuICAgICAgICAgICAgc2V0R3RpbGVzKG5ld0d0aWxlcylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPkdVQVJEUzwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBiVGlsZXBvb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Z3RpbGVzLm1hcCgodCx0aSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2BndGlsZSR7dGl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdob3NldHVlbiA9PT0gJ0cnID8gc2V0U2VsZWN0aW9uKHRpKSA6IGFsZXJ0KCdJdCBpcyBub3QgeW91ciB0dXJuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIHt3aG9zZXR1cm4gPT09ICdHJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRXaG9zZXR1cm4oJ1AnKVxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGaW5pc2ggVHVyblxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9