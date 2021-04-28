webpackHotUpdate_N_E("pages/pb/prisonbreak",{

/***/ "./lib/pbconstants.js":
/*!****************************!*\
  !*** ./lib/pbconstants.js ***!
  \****************************/
/*! exports provided: BOARD_COL_HEADERS, BOARD_ROW_HEADERS, SQUARE_UNUSED, PARTY_TYPE_UNDETERMINED, PARTY_TYPE_PRISONERS, PARTY_TYPE_GUARDS, PARTY_TYPE_OBSERVER, WHOSE_TURN_PRISONERS, WHOSE_TURN_GUARDS, WHOSE_TURN_GAMEOVER, PARTY_ICON_PRISONERS, PARTY_ICON_GUARDS, PARTY_TITLE_PRISONERS, PARTY_TITLE_GUARDS, MOVE_TYPE_PLAY, MOVE_TYPE_SWAP, MOVE_TYPE_PASS, DIR_RIGHT, DIR_DOWN, DIR_NONE, USED_BY_PRISONERS, USED_BY_GUARDS, USED_BY_NONE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOARD_COL_HEADERS", function() { return BOARD_COL_HEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOARD_ROW_HEADERS", function() { return BOARD_ROW_HEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SQUARE_UNUSED", function() { return SQUARE_UNUSED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTY_TYPE_UNDETERMINED", function() { return PARTY_TYPE_UNDETERMINED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTY_TYPE_PRISONERS", function() { return PARTY_TYPE_PRISONERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTY_TYPE_GUARDS", function() { return PARTY_TYPE_GUARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTY_TYPE_OBSERVER", function() { return PARTY_TYPE_OBSERVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WHOSE_TURN_PRISONERS", function() { return WHOSE_TURN_PRISONERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WHOSE_TURN_GUARDS", function() { return WHOSE_TURN_GUARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WHOSE_TURN_GAMEOVER", function() { return WHOSE_TURN_GAMEOVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTY_ICON_PRISONERS", function() { return PARTY_ICON_PRISONERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTY_ICON_GUARDS", function() { return PARTY_ICON_GUARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTY_TITLE_PRISONERS", function() { return PARTY_TITLE_PRISONERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTY_TITLE_GUARDS", function() { return PARTY_TITLE_GUARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_TYPE_PLAY", function() { return MOVE_TYPE_PLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_TYPE_SWAP", function() { return MOVE_TYPE_SWAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_TYPE_PASS", function() { return MOVE_TYPE_PASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIR_RIGHT", function() { return DIR_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIR_DOWN", function() { return DIR_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIR_NONE", function() { return DIR_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USED_BY_PRISONERS", function() { return USED_BY_PRISONERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USED_BY_GUARDS", function() { return USED_BY_GUARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USED_BY_NONE", function() { return USED_BY_NONE; });
const BOARD_COL_HEADERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];
const BOARD_ROW_HEADERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
const SQUARE_UNUSED = "."; // Types of participant

const PARTY_TYPE_UNDETERMINED = 'U'; // Not determined yet

const PARTY_TYPE_PRISONERS = 'P'; // Player representing prisoners

const PARTY_TYPE_GUARDS = 'G'; // Player representing guards

const PARTY_TYPE_OBSERVER = 'O'; // Observer (not implemented yet)
// Whose turn

const WHOSE_TURN_PRISONERS = PARTY_TYPE_PRISONERS;
const WHOSE_TURN_GUARDS = PARTY_TYPE_GUARDS;
const WHOSE_TURN_GAMEOVER = 'X'; // Participant material-icons name

const PARTY_ICON_PRISONERS = 'run_circle';
const PARTY_ICON_GUARDS = 'security'; // Participant title

const PARTY_TITLE_PRISONERS = 'PRISONERS';
const PARTY_TITLE_GUARDS = 'GUARDS'; // Types of move

const MOVE_TYPE_PLAY = 'PLAY';
const MOVE_TYPE_SWAP = 'SWAP';
const MOVE_TYPE_PASS = 'PASS'; // Directions (for the arrow on the board to signify word play direction)

const DIR_RIGHT = 'r';
const DIR_DOWN = 'd';
const DIR_NONE = ''; // Used by (for specifying who a square is used by, i.e. has a tile on that square)

const USED_BY_PRISONERS = PARTY_TYPE_PRISONERS;
const USED_BY_GUARDS = PARTY_TYPE_GUARDS;
const USED_BY_NONE = '';

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BiY29uc3RhbnRzLmpzIl0sIm5hbWVzIjpbIkJPQVJEX0NPTF9IRUFERVJTIiwiQk9BUkRfUk9XX0hFQURFUlMiLCJTUVVBUkVfVU5VU0VEIiwiUEFSVFlfVFlQRV9VTkRFVEVSTUlORUQiLCJQQVJUWV9UWVBFX1BSSVNPTkVSUyIsIlBBUlRZX1RZUEVfR1VBUkRTIiwiUEFSVFlfVFlQRV9PQlNFUlZFUiIsIldIT1NFX1RVUk5fUFJJU09ORVJTIiwiV0hPU0VfVFVSTl9HVUFSRFMiLCJXSE9TRV9UVVJOX0dBTUVPVkVSIiwiUEFSVFlfSUNPTl9QUklTT05FUlMiLCJQQVJUWV9JQ09OX0dVQVJEUyIsIlBBUlRZX1RJVExFX1BSSVNPTkVSUyIsIlBBUlRZX1RJVExFX0dVQVJEUyIsIk1PVkVfVFlQRV9QTEFZIiwiTU9WRV9UWVBFX1NXQVAiLCJNT1ZFX1RZUEVfUEFTUyIsIkRJUl9SSUdIVCIsIkRJUl9ET1dOIiwiRElSX05PTkUiLCJVU0VEX0JZX1BSSVNPTkVSUyIsIlVTRURfQllfR1VBUkRTIiwiVVNFRF9CWV9OT05FIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUEsaUJBQWlCLEdBQUcsQ0FBQyxHQUFELEVBQUssR0FBTCxFQUFTLEdBQVQsRUFBYSxHQUFiLEVBQWlCLEdBQWpCLEVBQXFCLEdBQXJCLEVBQXlCLEdBQXpCLEVBQTZCLEdBQTdCLEVBQWlDLEdBQWpDLEVBQXFDLEdBQXJDLEVBQXlDLEdBQXpDLEVBQTZDLEdBQTdDLEVBQWlELEdBQWpELEVBQXFELEdBQXJELEVBQXlELEdBQXpELENBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsQ0FBQyxHQUFELEVBQUssR0FBTCxFQUFTLEdBQVQsRUFBYSxHQUFiLEVBQWlCLEdBQWpCLEVBQXFCLEdBQXJCLEVBQXlCLEdBQXpCLEVBQTZCLEdBQTdCLEVBQWlDLEdBQWpDLEVBQXFDLElBQXJDLEVBQTBDLElBQTFDLEVBQStDLElBQS9DLEVBQW9ELElBQXBELEVBQXlELElBQXpELEVBQThELElBQTlELENBQTFCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLEdBQXRCLEMsQ0FDUDs7QUFDTyxNQUFNQyx1QkFBdUIsR0FBRyxHQUFoQyxDLENBQXFDOztBQUNyQyxNQUFNQyxvQkFBb0IsR0FBRyxHQUE3QixDLENBQWtDOztBQUNsQyxNQUFNQyxpQkFBaUIsR0FBRyxHQUExQixDLENBQStCOztBQUMvQixNQUFNQyxtQkFBbUIsR0FBRyxHQUE1QixDLENBQWlDO0FBQ3hDOztBQUNPLE1BQU1DLG9CQUFvQixHQUFHSCxvQkFBN0I7QUFDQSxNQUFNSSxpQkFBaUIsR0FBR0gsaUJBQTFCO0FBQ0EsTUFBTUksbUJBQW1CLEdBQUcsR0FBNUIsQyxDQUNQOztBQUNPLE1BQU1DLG9CQUFvQixHQUFHLFlBQTdCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsVUFBMUIsQyxDQUNQOztBQUNPLE1BQU1DLHFCQUFxQixHQUFHLFdBQTlCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsUUFBM0IsQyxDQUNQOztBQUNPLE1BQU1DLGNBQWMsR0FBRyxNQUF2QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxNQUF2QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxNQUF2QixDLENBQ1A7O0FBQ08sTUFBTUMsU0FBUyxHQUFHLEdBQWxCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLEdBQWpCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLEVBQWpCLEMsQ0FDUDs7QUFDTyxNQUFNQyxpQkFBaUIsR0FBR2hCLG9CQUExQjtBQUNBLE1BQU1pQixjQUFjLEdBQUdoQixpQkFBdkI7QUFDQSxNQUFNaUIsWUFBWSxHQUFHLEVBQXJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BiL3ByaXNvbmJyZWFrLjMwNzI5MzcwODdjNWM5YWE2MTIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQk9BUkRfQ09MX0hFQURFUlMgPSBbJ0EnLCdCJywnQycsJ0QnLCdFJywnRicsJ0cnLCdIJywnSScsJ0onLCdLJywnTCcsJ00nLCdOJywnTyddO1xyXG5leHBvcnQgY29uc3QgQk9BUkRfUk9XX0hFQURFUlMgPSBbJzEnLCcyJywnMycsJzQnLCc1JywnNicsJzcnLCc4JywnOScsJzEwJywnMTEnLCcxMicsJzEzJywnMTQnLCcxNSddO1xyXG5leHBvcnQgY29uc3QgU1FVQVJFX1VOVVNFRCA9IFwiLlwiO1xyXG4vLyBUeXBlcyBvZiBwYXJ0aWNpcGFudFxyXG5leHBvcnQgY29uc3QgUEFSVFlfVFlQRV9VTkRFVEVSTUlORUQgPSAnVSc7IC8vIE5vdCBkZXRlcm1pbmVkIHlldFxyXG5leHBvcnQgY29uc3QgUEFSVFlfVFlQRV9QUklTT05FUlMgPSAnUCc7IC8vIFBsYXllciByZXByZXNlbnRpbmcgcHJpc29uZXJzXHJcbmV4cG9ydCBjb25zdCBQQVJUWV9UWVBFX0dVQVJEUyA9ICdHJzsgLy8gUGxheWVyIHJlcHJlc2VudGluZyBndWFyZHNcclxuZXhwb3J0IGNvbnN0IFBBUlRZX1RZUEVfT0JTRVJWRVIgPSAnTyc7IC8vIE9ic2VydmVyIChub3QgaW1wbGVtZW50ZWQgeWV0KVxyXG4vLyBXaG9zZSB0dXJuXHJcbmV4cG9ydCBjb25zdCBXSE9TRV9UVVJOX1BSSVNPTkVSUyA9IFBBUlRZX1RZUEVfUFJJU09ORVJTO1xyXG5leHBvcnQgY29uc3QgV0hPU0VfVFVSTl9HVUFSRFMgPSBQQVJUWV9UWVBFX0dVQVJEUztcclxuZXhwb3J0IGNvbnN0IFdIT1NFX1RVUk5fR0FNRU9WRVIgPSAnWCc7XHJcbi8vIFBhcnRpY2lwYW50IG1hdGVyaWFsLWljb25zIG5hbWVcclxuZXhwb3J0IGNvbnN0IFBBUlRZX0lDT05fUFJJU09ORVJTID0gJ3J1bl9jaXJjbGUnO1xyXG5leHBvcnQgY29uc3QgUEFSVFlfSUNPTl9HVUFSRFMgPSAnc2VjdXJpdHknO1xyXG4vLyBQYXJ0aWNpcGFudCB0aXRsZVxyXG5leHBvcnQgY29uc3QgUEFSVFlfVElUTEVfUFJJU09ORVJTID0gJ1BSSVNPTkVSUyc7XHJcbmV4cG9ydCBjb25zdCBQQVJUWV9USVRMRV9HVUFSRFMgPSAnR1VBUkRTJztcclxuLy8gVHlwZXMgb2YgbW92ZVxyXG5leHBvcnQgY29uc3QgTU9WRV9UWVBFX1BMQVkgPSAnUExBWSc7XHJcbmV4cG9ydCBjb25zdCBNT1ZFX1RZUEVfU1dBUCA9ICdTV0FQJztcclxuZXhwb3J0IGNvbnN0IE1PVkVfVFlQRV9QQVNTID0gJ1BBU1MnO1xyXG4vLyBEaXJlY3Rpb25zIChmb3IgdGhlIGFycm93IG9uIHRoZSBib2FyZCB0byBzaWduaWZ5IHdvcmQgcGxheSBkaXJlY3Rpb24pXHJcbmV4cG9ydCBjb25zdCBESVJfUklHSFQgPSAncic7XHJcbmV4cG9ydCBjb25zdCBESVJfRE9XTiA9ICdkJztcclxuZXhwb3J0IGNvbnN0IERJUl9OT05FID0gJyc7XHJcbi8vIFVzZWQgYnkgKGZvciBzcGVjaWZ5aW5nIHdobyBhIHNxdWFyZSBpcyB1c2VkIGJ5LCBpLmUuIGhhcyBhIHRpbGUgb24gdGhhdCBzcXVhcmUpXHJcbmV4cG9ydCBjb25zdCBVU0VEX0JZX1BSSVNPTkVSUyA9IFBBUlRZX1RZUEVfUFJJU09ORVJTO1xyXG5leHBvcnQgY29uc3QgVVNFRF9CWV9HVUFSRFMgPSBQQVJUWV9UWVBFX0dVQVJEUztcclxuZXhwb3J0IGNvbnN0IFVTRURfQllfTk9ORSA9ICcnOyJdLCJzb3VyY2VSb290IjoiIn0=