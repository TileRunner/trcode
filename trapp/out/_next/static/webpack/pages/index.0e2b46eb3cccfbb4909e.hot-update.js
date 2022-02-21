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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\sc\\clubPlayer.js",
    _s = $RefreshSig$();



const ClubPlayerList = ({
  clubGames = [],
  clubName = ''
}) => {
  _s();

  const {
    0: playerTotals,
    1: setPlayerTotals
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let totals = getTotals();
    setPlayerTotals(totals);
  });
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

    totals.sort(function (a, b) {
      return a.Wins > b.Wins ? -1 : 1;
    });
    return totals;
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "trBackground",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "trSubtitle",
      children: ["Club Players: ", clubName]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: myTableSize,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: myTableScroll,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
          className: "trTable",
          border: "1",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Rank"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Player"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Wins"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Spread"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Losses"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "For"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Against"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
            children: playerTotals.map((total, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "equispaced textright",
                children: index + 1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                children: total.Name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "textcenter",
                children: total.Wins
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "equispaced textright",
                children: total.For - total.Against
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "textcenter",
                children: total.Losses
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "equispaced textright",
                children: total.For
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "equispaced textright",
                children: total.Against
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 33
              }, undefined)]
            }, `total.${total.Name}`, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 29
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 13
  }, undefined);
};

_s(ClubPlayerList, "ZUsRwlFb0FCy4FyjrEGrDnZQKEM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2MvY2x1YlBsYXllci5qcyJdLCJuYW1lcyI6WyJDbHViUGxheWVyTGlzdCIsImNsdWJHYW1lcyIsImNsdWJOYW1lIiwicGxheWVyVG90YWxzIiwic2V0UGxheWVyVG90YWxzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ0b3RhbHMiLCJnZXRUb3RhbHMiLCJteVRhYmxlU2l6ZSIsImhlaWdodCIsIndpZHRoIiwibXlUYWJsZVNjcm9sbCIsIm92ZXJmbG93WSIsImluZGV4IiwibGVuZ3RoIiwiZ2FtZSIsImZvdW5kUGxheWVyIiwiZm91bmRPcHBvbmVudCIsImluZGV4MiIsInRvdGFsIiwiTmFtZSIsIlBsYXllck5hbWUiLCJGb3IiLCJQbGF5ZXJTY29yZSIsIkFnYWluc3QiLCJPcHBvbmVudFNjb3JlIiwiV2lucyIsIkxvc3NlcyIsIk9wcG9uZW50TmFtZSIsInB1c2giLCJzb3J0IiwiYSIsImIiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsY0FBYyxHQUFHLENBQUM7QUFBQ0MsV0FBUyxHQUFDLEVBQVg7QUFBZUMsVUFBUSxHQUFDO0FBQXhCLENBQUQsS0FBaUM7QUFBQTs7QUFDcEQsUUFBTTtBQUFBLE9BQUNDLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDQywrQ0FBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFDQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ1osUUFBSUMsTUFBTSxHQUFHQyxTQUFTLEVBQXRCO0FBQ0FKLG1CQUFlLENBQUNHLE1BQUQsQ0FBZjtBQUNILEdBSFEsQ0FBVDtBQUlBLFFBQU1FLFdBQVcsR0FBRztBQUNoQkMsVUFBTSxFQUFFLE9BRFE7QUFFaEJDLFNBQUssRUFBRTtBQUZTLEdBQXBCO0FBSUEsUUFBTUMsYUFBYSxHQUFHO0FBQ2xCRixVQUFNLEVBQUUsTUFEVTtBQUVsQkcsYUFBUyxFQUFFO0FBRk8sR0FBdEI7O0FBSUEsUUFBTUwsU0FBUyxHQUFHLE1BQU07QUFDcEIsUUFBSUQsTUFBTSxHQUFHLEVBQWI7O0FBQ0EsU0FBSyxJQUFJTyxLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUssR0FBR2IsU0FBUyxDQUFDYyxNQUF0QyxFQUE4Q0QsS0FBSyxFQUFuRCxFQUF1RDtBQUNuRCxZQUFNRSxJQUFJLEdBQUdmLFNBQVMsQ0FBQ2EsS0FBRCxDQUF0QjtBQUNBLFVBQUlHLFdBQVcsR0FBRyxLQUFsQjtBQUNBLFVBQUlDLGFBQWEsR0FBRyxLQUFwQjs7QUFDQSxXQUFLLElBQUlDLE1BQU0sR0FBRyxDQUFsQixFQUFxQkEsTUFBTSxHQUFHWixNQUFNLENBQUNRLE1BQXJDLEVBQTZDSSxNQUFNLEVBQW5ELEVBQXVEO0FBQ25ELGNBQU1DLEtBQUssR0FBR2IsTUFBTSxDQUFDWSxNQUFELENBQXBCOztBQUNBLFlBQUlDLEtBQUssQ0FBQ0MsSUFBTixLQUFlTCxJQUFJLENBQUNNLFVBQXhCLEVBQW9DO0FBQ2hDTCxxQkFBVyxHQUFHLElBQWQ7QUFDQUcsZUFBSyxDQUFDRyxHQUFOLEdBQVlILEtBQUssQ0FBQ0csR0FBTixHQUFZUCxJQUFJLENBQUNRLFdBQTdCO0FBQ0FKLGVBQUssQ0FBQ0ssT0FBTixHQUFnQkwsS0FBSyxDQUFDSyxPQUFOLEdBQWdCVCxJQUFJLENBQUNVLGFBQXJDOztBQUNBLGNBQUlWLElBQUksQ0FBQ1EsV0FBTCxHQUFtQlIsSUFBSSxDQUFDVSxhQUE1QixFQUEyQztBQUN2Q04saUJBQUssQ0FBQ08sSUFBTixHQUFhUCxLQUFLLENBQUNPLElBQU4sR0FBYSxDQUExQjtBQUNIOztBQUNELGNBQUlYLElBQUksQ0FBQ1EsV0FBTCxHQUFtQlIsSUFBSSxDQUFDVSxhQUE1QixFQUEyQztBQUN2Q04saUJBQUssQ0FBQ1EsTUFBTixHQUFlUixLQUFLLENBQUNRLE1BQU4sR0FBZSxDQUE5QjtBQUNIOztBQUNELGNBQUlaLElBQUksQ0FBQ1EsV0FBTCxLQUFxQlIsSUFBSSxDQUFDVSxhQUE5QixFQUE2QztBQUN6Q04saUJBQUssQ0FBQ08sSUFBTixHQUFhUCxLQUFLLENBQUNPLElBQU4sR0FBYSxHQUExQjtBQUNBUCxpQkFBSyxDQUFDUSxNQUFOLEdBQWVSLEtBQUssQ0FBQ1EsTUFBTixHQUFlLEdBQTlCO0FBQ0g7QUFDSjs7QUFDRCxZQUFJUixLQUFLLENBQUNDLElBQU4sS0FBZUwsSUFBSSxDQUFDYSxZQUF4QixFQUFzQztBQUNsQ1gsdUJBQWEsR0FBRyxJQUFoQjtBQUNBRSxlQUFLLENBQUNLLE9BQU4sR0FBZ0JMLEtBQUssQ0FBQ0ssT0FBTixHQUFnQlQsSUFBSSxDQUFDUSxXQUFyQztBQUNBSixlQUFLLENBQUNHLEdBQU4sR0FBWUgsS0FBSyxDQUFDRyxHQUFOLEdBQVlQLElBQUksQ0FBQ1UsYUFBN0I7O0FBQ0EsY0FBSVYsSUFBSSxDQUFDUSxXQUFMLEdBQW1CUixJQUFJLENBQUNVLGFBQTVCLEVBQTJDO0FBQ3ZDTixpQkFBSyxDQUFDTyxJQUFOLEdBQWFQLEtBQUssQ0FBQ08sSUFBTixHQUFhLENBQTFCO0FBQ0g7O0FBQ0QsY0FBSVgsSUFBSSxDQUFDUSxXQUFMLEdBQW1CUixJQUFJLENBQUNVLGFBQTVCLEVBQTJDO0FBQ3ZDTixpQkFBSyxDQUFDUSxNQUFOLEdBQWVSLEtBQUssQ0FBQ1EsTUFBTixHQUFlLENBQTlCO0FBQ0g7O0FBQ0QsY0FBSVosSUFBSSxDQUFDUSxXQUFMLEtBQXFCUixJQUFJLENBQUNVLGFBQTlCLEVBQTZDO0FBQ3pDTixpQkFBSyxDQUFDTyxJQUFOLEdBQWFQLEtBQUssQ0FBQ08sSUFBTixHQUFhLEdBQTFCO0FBQ0FQLGlCQUFLLENBQUNRLE1BQU4sR0FBZVIsS0FBSyxDQUFDUSxNQUFOLEdBQWUsR0FBOUI7QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsVUFBSSxDQUFDWCxXQUFMLEVBQWtCO0FBQ2QsWUFBSUcsS0FBSyxHQUFHO0FBQ1JDLGNBQUksRUFBRUwsSUFBSSxDQUFDTSxVQURIO0FBRVJDLGFBQUcsRUFBRVAsSUFBSSxDQUFDUSxXQUZGO0FBR1JDLGlCQUFPLEVBQUVULElBQUksQ0FBQ1UsYUFITjtBQUlSQyxjQUFJLEVBQUVYLElBQUksQ0FBQ1EsV0FBTCxHQUFtQlIsSUFBSSxDQUFDVSxhQUF4QixHQUF3QyxDQUF4QyxHQUE0Q1YsSUFBSSxDQUFDUSxXQUFMLEdBQW1CUixJQUFJLENBQUNVLGFBQXhCLEdBQXdDLENBQXhDLEdBQTRDLEdBSnRGO0FBS1JFLGdCQUFNLEVBQUVaLElBQUksQ0FBQ1EsV0FBTCxHQUFtQlIsSUFBSSxDQUFDVSxhQUF4QixHQUF3QyxDQUF4QyxHQUE0Q1YsSUFBSSxDQUFDUSxXQUFMLEdBQW1CUixJQUFJLENBQUNVLGFBQXhCLEdBQXdDLENBQXhDLEdBQTRDO0FBTHhGLFNBQVo7QUFPQW5CLGNBQU0sQ0FBQ3VCLElBQVAsQ0FBWVYsS0FBWjtBQUNIOztBQUNELFVBQUksQ0FBQ0YsYUFBTCxFQUFvQjtBQUNoQixZQUFJRSxLQUFLLEdBQUc7QUFDUkMsY0FBSSxFQUFFTCxJQUFJLENBQUNhLFlBREg7QUFFUk4sYUFBRyxFQUFFUCxJQUFJLENBQUNVLGFBRkY7QUFHUkQsaUJBQU8sRUFBRVQsSUFBSSxDQUFDUSxXQUhOO0FBSVJHLGNBQUksRUFBRVgsSUFBSSxDQUFDUSxXQUFMLEdBQW1CUixJQUFJLENBQUNVLGFBQXhCLEdBQXdDLENBQXhDLEdBQTRDVixJQUFJLENBQUNRLFdBQUwsR0FBbUJSLElBQUksQ0FBQ1UsYUFBeEIsR0FBd0MsQ0FBeEMsR0FBNEMsR0FKdEY7QUFLUkUsZ0JBQU0sRUFBRVosSUFBSSxDQUFDUSxXQUFMLEdBQW1CUixJQUFJLENBQUNVLGFBQXhCLEdBQXdDLENBQXhDLEdBQTRDVixJQUFJLENBQUNRLFdBQUwsR0FBbUJSLElBQUksQ0FBQ1UsYUFBeEIsR0FBd0MsQ0FBeEMsR0FBNEM7QUFMeEYsU0FBWjtBQU9BbkIsY0FBTSxDQUFDdUIsSUFBUCxDQUFZVixLQUFaO0FBQ0g7QUFDSjs7QUFDRGIsVUFBTSxDQUFDd0IsSUFBUCxDQUFZLFVBQVNDLENBQVQsRUFBV0MsQ0FBWCxFQUFjO0FBQUMsYUFBT0QsQ0FBQyxDQUFDTCxJQUFGLEdBQVNNLENBQUMsQ0FBQ04sSUFBWCxHQUFrQixDQUFDLENBQW5CLEdBQXVCLENBQTlCO0FBQWlDLEtBQTVEO0FBQ0EsV0FBT3BCLE1BQVA7QUFDSCxHQTlERDs7QUErREEsc0JBQVE7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBLDRCQUNKO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSxtQ0FDbUJMLFFBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESSxlQUlKO0FBQUssV0FBSyxFQUFFTyxXQUFaO0FBQUEsNkJBQ0k7QUFBSyxhQUFLLEVBQUVHLGFBQVo7QUFBQSwrQkFDSTtBQUFPLG1CQUFTLEVBQUMsU0FBakI7QUFBMkIsZ0JBQU0sRUFBQyxHQUFsQztBQUFBLGtDQUNJO0FBQUEsbUNBQ0k7QUFBQSxzQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSEosZUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFKSixlQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUxKLGVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTkosZUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBWUk7QUFBQSxzQkFDS1QsWUFBWSxDQUFDK0IsR0FBYixDQUFpQixDQUFDZCxLQUFELEVBQVFOLEtBQVIsa0JBQ2Q7QUFBQSxzQ0FDSTtBQUFJLHlCQUFTLEVBQUMsc0JBQWQ7QUFBQSwwQkFBc0NBLEtBQUssR0FBQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBRUk7QUFBQSwwQkFBS00sS0FBSyxDQUFDQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkosZUFHSTtBQUFJLHlCQUFTLEVBQUMsWUFBZDtBQUFBLDBCQUE0QkQsS0FBSyxDQUFDTztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUhKLGVBSUk7QUFBSSx5QkFBUyxFQUFDLHNCQUFkO0FBQUEsMEJBQXNDUCxLQUFLLENBQUNHLEdBQU4sR0FBWUgsS0FBSyxDQUFDSztBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpKLGVBS0k7QUFBSSx5QkFBUyxFQUFDLFlBQWQ7QUFBQSwwQkFBNEJMLEtBQUssQ0FBQ1E7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFMSixlQU1JO0FBQUkseUJBQVMsRUFBQyxzQkFBZDtBQUFBLDBCQUFzQ1IsS0FBSyxDQUFDRztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQU5KLGVBT0k7QUFBSSx5QkFBUyxFQUFDLHNCQUFkO0FBQUEsMEJBQXNDSCxLQUFLLENBQUNLO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBUEo7QUFBQSxlQUFVLFNBQVFMLEtBQUssQ0FBQ0MsSUFBSyxFQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUjtBQW9DSCxDQWpIRDs7R0FBTXJCLGM7O0tBQUFBLGM7QUFtSE4sK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGUyYjQ2ZWIzY2NjZmJiNDkwOWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENsdWJQbGF5ZXJMaXN0ID0gKHtjbHViR2FtZXM9W10sIGNsdWJOYW1lPScnfSkgPT4ge1xyXG4gICAgY29uc3QgW3BsYXllclRvdGFscywgc2V0UGxheWVyVG90YWxzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRvdGFscyA9IGdldFRvdGFscygpO1xyXG4gICAgICAgIHNldFBsYXllclRvdGFscyh0b3RhbHMpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBteVRhYmxlU2l6ZSA9IHtcclxuICAgICAgICBoZWlnaHQ6ICc4MDBweCcsXHJcbiAgICAgICAgd2lkdGg6ICdmaXQtY29udGVudCdcclxuICAgIH07XHJcbiAgICBjb25zdCBteVRhYmxlU2Nyb2xsID0ge1xyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIG92ZXJmbG93WTogJ2F1dG8nXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2V0VG90YWxzID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0b3RhbHMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2x1YkdhbWVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBnYW1lID0gY2x1YkdhbWVzW2luZGV4XTtcclxuICAgICAgICAgICAgbGV0IGZvdW5kUGxheWVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBmb3VuZE9wcG9uZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4MiA9IDA7IGluZGV4MiA8IHRvdGFscy5sZW5ndGg7IGluZGV4MisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbCA9IHRvdGFsc1tpbmRleDJdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRvdGFsLk5hbWUgPT09IGdhbWUuUGxheWVyTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kUGxheWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbC5Gb3IgPSB0b3RhbC5Gb3IgKyBnYW1lLlBsYXllclNjb3JlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsLkFnYWluc3QgPSB0b3RhbC5BZ2FpbnN0ICsgZ2FtZS5PcHBvbmVudFNjb3JlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLlBsYXllclNjb3JlID4gZ2FtZS5PcHBvbmVudFNjb3JlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsLldpbnMgPSB0b3RhbC5XaW5zICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUuUGxheWVyU2NvcmUgPCBnYW1lLk9wcG9uZW50U2NvcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWwuTG9zc2VzID0gdG90YWwuTG9zc2VzICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUuUGxheWVyU2NvcmUgPT09IGdhbWUuT3Bwb25lbnRTY29yZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbC5XaW5zID0gdG90YWwuV2lucyArIDAuNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWwuTG9zc2VzID0gdG90YWwuTG9zc2VzICsgMC41O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0b3RhbC5OYW1lID09PSBnYW1lLk9wcG9uZW50TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kT3Bwb25lbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsLkFnYWluc3QgPSB0b3RhbC5BZ2FpbnN0ICsgZ2FtZS5QbGF5ZXJTY29yZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbC5Gb3IgPSB0b3RhbC5Gb3IgKyBnYW1lLk9wcG9uZW50U2NvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUuUGxheWVyU2NvcmUgPCBnYW1lLk9wcG9uZW50U2NvcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWwuV2lucyA9IHRvdGFsLldpbnMgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5QbGF5ZXJTY29yZSA+IGdhbWUuT3Bwb25lbnRTY29yZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbC5Mb3NzZXMgPSB0b3RhbC5Mb3NzZXMgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5QbGF5ZXJTY29yZSA9PT0gZ2FtZS5PcHBvbmVudFNjb3JlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsLldpbnMgPSB0b3RhbC5XaW5zICsgMC41O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbC5Mb3NzZXMgPSB0b3RhbC5Mb3NzZXMgKyAwLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZm91bmRQbGF5ZXIpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b3RhbCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBOYW1lOiBnYW1lLlBsYXllck5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgRm9yOiBnYW1lLlBsYXllclNjb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgIEFnYWluc3Q6IGdhbWUuT3Bwb25lbnRTY29yZSxcclxuICAgICAgICAgICAgICAgICAgICBXaW5zOiBnYW1lLlBsYXllclNjb3JlID4gZ2FtZS5PcHBvbmVudFNjb3JlID8gMSA6IGdhbWUuUGxheWVyU2NvcmUgPCBnYW1lLk9wcG9uZW50U2NvcmUgPyAwIDogMC41LFxyXG4gICAgICAgICAgICAgICAgICAgIExvc3NlczogZ2FtZS5QbGF5ZXJTY29yZSA8IGdhbWUuT3Bwb25lbnRTY29yZSA/IDEgOiBnYW1lLlBsYXllclNjb3JlID4gZ2FtZS5PcHBvbmVudFNjb3JlID8gMCA6IDAuNSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0b3RhbHMucHVzaCh0b3RhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFmb3VuZE9wcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG90YWwgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTmFtZTogZ2FtZS5PcHBvbmVudE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgRm9yOiBnYW1lLk9wcG9uZW50U2NvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgQWdhaW5zdDogZ2FtZS5QbGF5ZXJTY29yZSxcclxuICAgICAgICAgICAgICAgICAgICBXaW5zOiBnYW1lLlBsYXllclNjb3JlIDwgZ2FtZS5PcHBvbmVudFNjb3JlID8gMSA6IGdhbWUuUGxheWVyU2NvcmUgPiBnYW1lLk9wcG9uZW50U2NvcmUgPyAwIDogMC41LFxyXG4gICAgICAgICAgICAgICAgICAgIExvc3NlczogZ2FtZS5QbGF5ZXJTY29yZSA+IGdhbWUuT3Bwb25lbnRTY29yZSA/IDEgOiBnYW1lLlBsYXllclNjb3JlIDwgZ2FtZS5PcHBvbmVudFNjb3JlID8gMCA6IDAuNSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0b3RhbHMucHVzaCh0b3RhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdG90YWxzLnNvcnQoZnVuY3Rpb24oYSxiKSB7cmV0dXJuIGEuV2lucyA+IGIuV2lucyA/IC0xIDogMTt9KTtcclxuICAgICAgICByZXR1cm4gdG90YWxzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInRyQmFja2dyb3VuZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJTdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgICBDbHViIFBsYXllcnM6IHtjbHViTmFtZX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXtteVRhYmxlU2l6ZX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e215VGFibGVTY3JvbGx9PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRyVGFibGVcIiBib3JkZXI9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmFuazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UGxheWVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5XaW5zPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TcHJlYWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkxvc3NlczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Rm9yPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BZ2FpbnN0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3BsYXllclRvdGFscy5tYXAoKHRvdGFsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YHRvdGFsLiR7dG90YWwuTmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZXF1aXNwYWNlZCB0ZXh0cmlnaHRcIj57aW5kZXgrMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dG90YWwuTmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0Y2VudGVyXCI+e3RvdGFsLldpbnN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZXF1aXNwYWNlZCB0ZXh0cmlnaHRcIj57dG90YWwuRm9yIC0gdG90YWwuQWdhaW5zdH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0Y2VudGVyXCI+e3RvdGFsLkxvc3Nlc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJlcXVpc3BhY2VkIHRleHRyaWdodFwiPnt0b3RhbC5Gb3J9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZXF1aXNwYWNlZCB0ZXh0cmlnaHRcIj57dG90YWwuQWdhaW5zdH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbHViUGxheWVyTGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==