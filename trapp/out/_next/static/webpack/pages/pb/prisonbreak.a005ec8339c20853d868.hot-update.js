webpackHotUpdate_N_E("pages/pb/prisonbreak",{

/***/ "./lib/pbconstants.js":
/*!****************************!*\
  !*** ./lib/pbconstants.js ***!
  \****************************/
/*! exports provided: BOARD_COL_HEADERS, BOARD_ROW_HEADERS, SQUARE_UNUSED, PARTY_TYPE_UNDETERMINED, PARTY_TYPE_PRISONERS, PARTY_TYPE_GUARDS, PARTY_TYPE_OBSERVER, WHOSE_TURN_PRISONERS, WHOSE_TURN_GUARDS, WHOSE_TURN_GAMEOVER, PARTY_ICON_PRISONERS, PARTY_ICON_GUARDS, PARTY_TITLE_PRISONERS, PARTY_TITLE_GUARDS, MOVE_TYPE_PLAY, MOVE_TYPE_SWAP, MOVE_TYPE_PASS, DIR_RIGHT, DIR_DOWN, DIR_NONE */
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
const DIR_NONE = '';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BiY29uc3RhbnRzLmpzIl0sIm5hbWVzIjpbIkJPQVJEX0NPTF9IRUFERVJTIiwiQk9BUkRfUk9XX0hFQURFUlMiLCJTUVVBUkVfVU5VU0VEIiwiUEFSVFlfVFlQRV9VTkRFVEVSTUlORUQiLCJQQVJUWV9UWVBFX1BSSVNPTkVSUyIsIlBBUlRZX1RZUEVfR1VBUkRTIiwiUEFSVFlfVFlQRV9PQlNFUlZFUiIsIldIT1NFX1RVUk5fUFJJU09ORVJTIiwiV0hPU0VfVFVSTl9HVUFSRFMiLCJXSE9TRV9UVVJOX0dBTUVPVkVSIiwiUEFSVFlfSUNPTl9QUklTT05FUlMiLCJQQVJUWV9JQ09OX0dVQVJEUyIsIlBBUlRZX1RJVExFX1BSSVNPTkVSUyIsIlBBUlRZX1RJVExFX0dVQVJEUyIsIk1PVkVfVFlQRV9QTEFZIiwiTU9WRV9UWVBFX1NXQVAiLCJNT1ZFX1RZUEVfUEFTUyIsIkRJUl9SSUdIVCIsIkRJUl9ET1dOIiwiRElSX05PTkUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxpQkFBaUIsR0FBRyxDQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVMsR0FBVCxFQUFhLEdBQWIsRUFBaUIsR0FBakIsRUFBcUIsR0FBckIsRUFBeUIsR0FBekIsRUFBNkIsR0FBN0IsRUFBaUMsR0FBakMsRUFBcUMsR0FBckMsRUFBeUMsR0FBekMsRUFBNkMsR0FBN0MsRUFBaUQsR0FBakQsRUFBcUQsR0FBckQsRUFBeUQsR0FBekQsQ0FBMUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxDQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVMsR0FBVCxFQUFhLEdBQWIsRUFBaUIsR0FBakIsRUFBcUIsR0FBckIsRUFBeUIsR0FBekIsRUFBNkIsR0FBN0IsRUFBaUMsR0FBakMsRUFBcUMsSUFBckMsRUFBMEMsSUFBMUMsRUFBK0MsSUFBL0MsRUFBb0QsSUFBcEQsRUFBeUQsSUFBekQsRUFBOEQsSUFBOUQsQ0FBMUI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsR0FBdEIsQyxDQUNQOztBQUNPLE1BQU1DLHVCQUF1QixHQUFHLEdBQWhDLEMsQ0FBcUM7O0FBQ3JDLE1BQU1DLG9CQUFvQixHQUFHLEdBQTdCLEMsQ0FBa0M7O0FBQ2xDLE1BQU1DLGlCQUFpQixHQUFHLEdBQTFCLEMsQ0FBK0I7O0FBQy9CLE1BQU1DLG1CQUFtQixHQUFHLEdBQTVCLEMsQ0FBaUM7QUFDeEM7O0FBQ08sTUFBTUMsb0JBQW9CLEdBQUdILG9CQUE3QjtBQUNBLE1BQU1JLGlCQUFpQixHQUFHSCxpQkFBMUI7QUFDQSxNQUFNSSxtQkFBbUIsR0FBRyxHQUE1QixDLENBQ1A7O0FBQ08sTUFBTUMsb0JBQW9CLEdBQUcsWUFBN0I7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxVQUExQixDLENBQ1A7O0FBQ08sTUFBTUMscUJBQXFCLEdBQUcsV0FBOUI7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxRQUEzQixDLENBQ1A7O0FBQ08sTUFBTUMsY0FBYyxHQUFHLE1BQXZCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLE1BQXZCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLE1BQXZCLEMsQ0FDUDs7QUFDTyxNQUFNQyxTQUFTLEdBQUcsR0FBbEI7QUFDQSxNQUFNQyxRQUFRLEdBQUcsR0FBakI7QUFDQSxNQUFNQyxRQUFRLEdBQUcsRUFBakIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGIvcHJpc29uYnJlYWsuYTAwNWVjODMzOWMyMDg1M2Q4NjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBCT0FSRF9DT0xfSEVBREVSUyA9IFsnQScsJ0InLCdDJywnRCcsJ0UnLCdGJywnRycsJ0gnLCdJJywnSicsJ0snLCdMJywnTScsJ04nLCdPJ107XHJcbmV4cG9ydCBjb25zdCBCT0FSRF9ST1dfSEVBREVSUyA9IFsnMScsJzInLCczJywnNCcsJzUnLCc2JywnNycsJzgnLCc5JywnMTAnLCcxMScsJzEyJywnMTMnLCcxNCcsJzE1J107XHJcbmV4cG9ydCBjb25zdCBTUVVBUkVfVU5VU0VEID0gXCIuXCI7XHJcbi8vIFR5cGVzIG9mIHBhcnRpY2lwYW50XHJcbmV4cG9ydCBjb25zdCBQQVJUWV9UWVBFX1VOREVURVJNSU5FRCA9ICdVJzsgLy8gTm90IGRldGVybWluZWQgeWV0XHJcbmV4cG9ydCBjb25zdCBQQVJUWV9UWVBFX1BSSVNPTkVSUyA9ICdQJzsgLy8gUGxheWVyIHJlcHJlc2VudGluZyBwcmlzb25lcnNcclxuZXhwb3J0IGNvbnN0IFBBUlRZX1RZUEVfR1VBUkRTID0gJ0cnOyAvLyBQbGF5ZXIgcmVwcmVzZW50aW5nIGd1YXJkc1xyXG5leHBvcnQgY29uc3QgUEFSVFlfVFlQRV9PQlNFUlZFUiA9ICdPJzsgLy8gT2JzZXJ2ZXIgKG5vdCBpbXBsZW1lbnRlZCB5ZXQpXHJcbi8vIFdob3NlIHR1cm5cclxuZXhwb3J0IGNvbnN0IFdIT1NFX1RVUk5fUFJJU09ORVJTID0gUEFSVFlfVFlQRV9QUklTT05FUlM7XHJcbmV4cG9ydCBjb25zdCBXSE9TRV9UVVJOX0dVQVJEUyA9IFBBUlRZX1RZUEVfR1VBUkRTO1xyXG5leHBvcnQgY29uc3QgV0hPU0VfVFVSTl9HQU1FT1ZFUiA9ICdYJztcclxuLy8gUGFydGljaXBhbnQgbWF0ZXJpYWwtaWNvbnMgbmFtZVxyXG5leHBvcnQgY29uc3QgUEFSVFlfSUNPTl9QUklTT05FUlMgPSAncnVuX2NpcmNsZSc7XHJcbmV4cG9ydCBjb25zdCBQQVJUWV9JQ09OX0dVQVJEUyA9ICdzZWN1cml0eSc7XHJcbi8vIFBhcnRpY2lwYW50IHRpdGxlXHJcbmV4cG9ydCBjb25zdCBQQVJUWV9USVRMRV9QUklTT05FUlMgPSAnUFJJU09ORVJTJztcclxuZXhwb3J0IGNvbnN0IFBBUlRZX1RJVExFX0dVQVJEUyA9ICdHVUFSRFMnO1xyXG4vLyBUeXBlcyBvZiBtb3ZlXHJcbmV4cG9ydCBjb25zdCBNT1ZFX1RZUEVfUExBWSA9ICdQTEFZJztcclxuZXhwb3J0IGNvbnN0IE1PVkVfVFlQRV9TV0FQID0gJ1NXQVAnO1xyXG5leHBvcnQgY29uc3QgTU9WRV9UWVBFX1BBU1MgPSAnUEFTUyc7XHJcbi8vIERpcmVjdGlvbnMgKGZvciB0aGUgYXJyb3cgb24gdGhlIGJvYXJkIHRvIHNpZ25pZnkgd29yZCBwbGF5IGRpcmVjdGlvbilcclxuZXhwb3J0IGNvbnN0IERJUl9SSUdIVCA9ICdyJztcclxuZXhwb3J0IGNvbnN0IERJUl9ET1dOID0gJ2QnO1xyXG5leHBvcnQgY29uc3QgRElSX05PTkUgPSAnJztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==