self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/sc/clubPlayer.js":
/*!********************************!*\
  !*** ./pages/sc/clubPlayer.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\sc\\clubPlayer.js";

const ClubPlayerList = ({
  clubGames = [],
  clubName = ''
}) => {
  const myTableSize = {
    height: '800px',
    width: 'fit-content'
  };
  const myTableScroll = {
    height: '100%',
    overflowY: 'auto'
  };

  const getTotals = () => {
    let totals = [];

    for (let index = 0; index < clubGames.length; index++) {
      const game = clubGames[index];
      let foundPlayer = false;
      let foundOpponent = false;

      for (let index2 = 0; index2 < totals.length; index2++) {
        const total = totals[index2];

        if (total.Name === game.PlayerName) {
          foundPlayer = true;
          total.For = total.For + game.PlayerScore;
          total.Against = total.Against + game.OpponentScore;

          if (game.PlayerScore > game.OpponentScore) {
            total.Wins = total.Wins + 1;
          }

          if (game.PlayerScore < game.OpponentScore) {
            total.Losses = total.Losses + 1;
          }

          if (game.PlayerScore === game.OpponentScore) {
            total.Wins = total.Wins + 0.5;
            total.Losses = total.Losses + 0.5;
          }
        }

        if (total.Name === game.OpponentName) {
          foundOpponent = true;
          total.Against = total.Against + game.PlayerScore;
          total.For = total.For + game.OpponentScore;

          if (game.PlayerScore < game.OpponentScore) {
            total.Wins = total.Wins + 1;
          }

          if (game.PlayerScore > game.OpponentScore) {
            total.Losses = total.Losses + 1;
          }

          if (game.PlayerScore === game.OpponentScore) {
            total.Wins = total.Wins + 0.5;
            total.Losses = total.Losses + 0.5;
          }
        }
      }

      if (!foundPlayer) {
        let total = {
          Name: game.PlayerName,
          For: game.PlayerScore,
          Against: game.OpponentScore,
          Wins: game.PlayerScore > game.OpponentScore ? 1 : game.PlayerScore < game.OpponentScore ? 0 : 0.5,
          Losses: game.PlayerScore < game.OpponentScore ? 1 : game.PlayerScore > game.OpponentScore ? 0 : 0.5
        };
        totals.push(total);
      }

      if (!foundOpponent) {
        let total = {
          Name: game.OpponentName,
          For: game.OpponentScore,
          Against: game.PlayerScore,
          Wins: game.PlayerScore < game.OpponentScore ? 1 : game.PlayerScore > game.OpponentScore ? 0 : 0.5,
          Losses: game.PlayerScore > game.OpponentScore ? 1 : game.PlayerScore < game.OpponentScore ? 0 : 0.5
        };
        totals.push(total);
      }
    }

    totals.sort((a, b) => a.Wins > b.Wins ? -1 : a.Wins === b.Wins ? b.For - b.Against - a.For + a.Against : a.Losses - b.Losses);
    return totals;
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trBackground",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trSubtitle",
      children: ["Club Players: ", clubName]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: myTableSize,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: myTableScroll,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "trSubtitle",
          children: "Player Totals:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
          className: "trTable",
          border: "1",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Rank"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Player"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Wins"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Spread"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Losses"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "For"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Against"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
            children: getTotals().map((total, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "equispaced textright",
                children: index + 1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                children: total.Name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "textcenter",
                children: total.Wins
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "equispaced textright",
                children: total.For - total.Against
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "textcenter",
                children: total.Losses
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "equispaced textright",
                children: total.For
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "equispaced textright",
                children: total.Against
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 33
              }, undefined)]
            }, `total.${total.Name}`, true, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 29
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 13
  }, undefined);
};

_c = ClubPlayerList;
/* harmony default export */ __webpack_exports__["default"] = (ClubPlayerList);

var _c;

$RefreshReg$(_c, "ClubPlayerList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2MvY2x1YlBsYXllci5qcyJdLCJuYW1lcyI6WyJDbHViUGxheWVyTGlzdCIsImNsdWJHYW1lcyIsImNsdWJOYW1lIiwibXlUYWJsZVNpemUiLCJoZWlnaHQiLCJ3aWR0aCIsIm15VGFibGVTY3JvbGwiLCJvdmVyZmxvd1kiLCJnZXRUb3RhbHMiLCJ0b3RhbHMiLCJpbmRleCIsImxlbmd0aCIsImdhbWUiLCJmb3VuZFBsYXllciIsImZvdW5kT3Bwb25lbnQiLCJpbmRleDIiLCJ0b3RhbCIsIk5hbWUiLCJQbGF5ZXJOYW1lIiwiRm9yIiwiUGxheWVyU2NvcmUiLCJBZ2FpbnN0IiwiT3Bwb25lbnRTY29yZSIsIldpbnMiLCJMb3NzZXMiLCJPcHBvbmVudE5hbWUiLCJwdXNoIiwic29ydCIsImEiLCJiIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsY0FBYyxHQUFHLENBQUM7QUFBQ0MsV0FBUyxHQUFDLEVBQVg7QUFBZUMsVUFBUSxHQUFDO0FBQXhCLENBQUQsS0FBaUM7QUFDcEQsUUFBTUMsV0FBVyxHQUFHO0FBQ2hCQyxVQUFNLEVBQUUsT0FEUTtBQUVoQkMsU0FBSyxFQUFFO0FBRlMsR0FBcEI7QUFJQSxRQUFNQyxhQUFhLEdBQUc7QUFDbEJGLFVBQU0sRUFBRSxNQURVO0FBRWxCRyxhQUFTLEVBQUU7QUFGTyxHQUF0Qjs7QUFJQSxRQUFNQyxTQUFTLEdBQUcsTUFBTTtBQUNwQixRQUFJQyxNQUFNLEdBQUcsRUFBYjs7QUFDQSxTQUFLLElBQUlDLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHVCxTQUFTLENBQUNVLE1BQXRDLEVBQThDRCxLQUFLLEVBQW5ELEVBQXVEO0FBQ25ELFlBQU1FLElBQUksR0FBR1gsU0FBUyxDQUFDUyxLQUFELENBQXRCO0FBQ0EsVUFBSUcsV0FBVyxHQUFHLEtBQWxCO0FBQ0EsVUFBSUMsYUFBYSxHQUFHLEtBQXBCOztBQUNBLFdBQUss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QUssQ0FBQ087QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFISixlQUlJO0FBQUkseUJBQVMsRUFBQyxzQkFBZDtBQUFBLDBCQUFzQ1AsS0FBSyxDQUFDRyxHQUFOLEdBQVlILEtBQUssQ0FBQ0s7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFKSixlQUtJO0FBQUkseUJBQVMsRUFBQyxZQUFkO0FBQUEsMEJBQTRCTCxLQUFLLENBQUNRO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTEosZUFNSTtBQUFJLHlCQUFTLEVBQUMsc0JBQWQ7QUFBQSwwQkFBc0NSLEtBQUssQ0FBQ0c7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFOSixlQU9JO0FBQUkseUJBQVMsRUFBQyxzQkFBZDtBQUFBLDBCQUFzQ0gsS0FBSyxDQUFDSztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVBKO0FBQUEsZUFBVSxTQUFRTCxLQUFLLENBQUNDLElBQUssRUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVI7QUFxQ0gsQ0E3R0Q7O0tBQU1qQixjO0FBK0dOLCtEQUFlQSxjQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU3MjUxZjM1NzE5YTViMzE3MTI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDbHViUGxheWVyTGlzdCA9ICh7Y2x1YkdhbWVzPVtdLCBjbHViTmFtZT0nJ30pID0+IHtcclxuICAgIGNvbnN0IG15VGFibGVTaXplID0ge1xyXG4gICAgICAgIGhlaWdodDogJzgwMHB4JyxcclxuICAgICAgICB3aWR0aDogJ2ZpdC1jb250ZW50J1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG15VGFibGVTY3JvbGwgPSB7XHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgb3ZlcmZsb3dZOiAnYXV0bydcclxuICAgIH07XHJcbiAgICBjb25zdCBnZXRUb3RhbHMgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRvdGFscyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjbHViR2FtZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdhbWUgPSBjbHViR2FtZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICBsZXQgZm91bmRQbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IGZvdW5kT3Bwb25lbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXgyID0gMDsgaW5kZXgyIDwgdG90YWxzLmxlbmd0aDsgaW5kZXgyKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gdG90YWxzW2luZGV4Ml07XHJcbiAgICAgICAgICAgICAgICBpZiAodG90YWwuTmFtZSA9PT0gZ2FtZS5QbGF5ZXJOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmRQbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsLkZvciA9IHRvdGFsLkZvciArIGdhbWUuUGxheWVyU2NvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWwuQWdhaW5zdCA9IHRvdGFsLkFnYWluc3QgKyBnYW1lLk9wcG9uZW50U2NvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUuUGxheWVyU2NvcmUgPiBnYW1lLk9wcG9uZW50U2NvcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWwuV2lucyA9IHRvdGFsLldpbnMgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5QbGF5ZXJTY29yZSA8IGdhbWUuT3Bwb25lbnRTY29yZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbC5Mb3NzZXMgPSB0b3RhbC5Mb3NzZXMgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5QbGF5ZXJTY29yZSA9PT0gZ2FtZS5PcHBvbmVudFNjb3JlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsLldpbnMgPSB0b3RhbC5XaW5zICsgMC41O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbC5Mb3NzZXMgPSB0b3RhbC5Mb3NzZXMgKyAwLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRvdGFsLk5hbWUgPT09IGdhbWUuT3Bwb25lbnROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmRPcHBvbmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWwuQWdhaW5zdCA9IHRvdGFsLkFnYWluc3QgKyBnYW1lLlBsYXllclNjb3JlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsLkZvciA9IHRvdGFsLkZvciArIGdhbWUuT3Bwb25lbnRTY29yZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5QbGF5ZXJTY29yZSA8IGdhbWUuT3Bwb25lbnRTY29yZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbC5XaW5zID0gdG90YWwuV2lucyArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLlBsYXllclNjb3JlID4gZ2FtZS5PcHBvbmVudFNjb3JlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsLkxvc3NlcyA9IHRvdGFsLkxvc3NlcyArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLlBsYXllclNjb3JlID09PSBnYW1lLk9wcG9uZW50U2NvcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWwuV2lucyA9IHRvdGFsLldpbnMgKyAwLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsLkxvc3NlcyA9IHRvdGFsLkxvc3NlcyArIDAuNTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFmb3VuZFBsYXllcikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIE5hbWU6IGdhbWUuUGxheWVyTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBGb3I6IGdhbWUuUGxheWVyU2NvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgQWdhaW5zdDogZ2FtZS5PcHBvbmVudFNjb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgIFdpbnM6IGdhbWUuUGxheWVyU2NvcmUgPiBnYW1lLk9wcG9uZW50U2NvcmUgPyAxIDogZ2FtZS5QbGF5ZXJTY29yZSA8IGdhbWUuT3Bwb25lbnRTY29yZSA/IDAgOiAwLjUsXHJcbiAgICAgICAgICAgICAgICAgICAgTG9zc2VzOiBnYW1lLlBsYXllclNjb3JlIDwgZ2FtZS5PcHBvbmVudFNjb3JlID8gMSA6IGdhbWUuUGxheWVyU2NvcmUgPiBnYW1lLk9wcG9uZW50U2NvcmUgPyAwIDogMC41LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRvdGFscy5wdXNoKHRvdGFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWZvdW5kT3Bwb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b3RhbCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBOYW1lOiBnYW1lLk9wcG9uZW50TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBGb3I6IGdhbWUuT3Bwb25lbnRTY29yZSxcclxuICAgICAgICAgICAgICAgICAgICBBZ2FpbnN0OiBnYW1lLlBsYXllclNjb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgIFdpbnM6IGdhbWUuUGxheWVyU2NvcmUgPCBnYW1lLk9wcG9uZW50U2NvcmUgPyAxIDogZ2FtZS5QbGF5ZXJTY29yZSA+IGdhbWUuT3Bwb25lbnRTY29yZSA/IDAgOiAwLjUsXHJcbiAgICAgICAgICAgICAgICAgICAgTG9zc2VzOiBnYW1lLlBsYXllclNjb3JlID4gZ2FtZS5PcHBvbmVudFNjb3JlID8gMSA6IGdhbWUuUGxheWVyU2NvcmUgPCBnYW1lLk9wcG9uZW50U2NvcmUgPyAwIDogMC41LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRvdGFscy5wdXNoKHRvdGFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0b3RhbHMuc29ydCgoYSxiKSA9PiBhLldpbnMgPiBiLldpbnMgPyAtMSA6IGEuV2lucyA9PT0gYi5XaW5zID8gYi5Gb3IgLSBiLkFnYWluc3QgLSBhLkZvciArIGEuQWdhaW5zdCA6IGEuTG9zc2VzIC0gYi5Mb3NzZXMpO1xyXG4gICAgICAgIHJldHVybiB0b3RhbHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwidHJCYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0clN1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgIENsdWIgUGxheWVyczoge2NsdWJOYW1lfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e215VGFibGVTaXplfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17bXlUYWJsZVNjcm9sbH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyU3VidGl0bGVcIj5QbGF5ZXIgVG90YWxzOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRyVGFibGVcIiBib3JkZXI9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmFuazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UGxheWVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5XaW5zPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TcHJlYWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkxvc3NlczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Rm9yPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BZ2FpbnN0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2dldFRvdGFscygpLm1hcCgodG90YWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgdG90YWwuJHt0b3RhbC5OYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJlcXVpc3BhY2VkIHRleHRyaWdodFwiPntpbmRleCsxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0b3RhbC5OYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHRjZW50ZXJcIj57dG90YWwuV2luc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJlcXVpc3BhY2VkIHRleHRyaWdodFwiPnt0b3RhbC5Gb3IgLSB0b3RhbC5BZ2FpbnN0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHRjZW50ZXJcIj57dG90YWwuTG9zc2VzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImVxdWlzcGFjZWQgdGV4dHJpZ2h0XCI+e3RvdGFsLkZvcn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJlcXVpc3BhY2VkIHRleHRyaWdodFwiPnt0b3RhbC5BZ2FpbnN0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsdWJQbGF5ZXJMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9