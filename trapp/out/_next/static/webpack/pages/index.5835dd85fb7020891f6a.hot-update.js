self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./lib/pb/prisonBreakConstants.js":
/*!****************************************!*\
  !*** ./lib/pb/prisonBreakConstants.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BOARD_COL_HEADERS": function() { return /* binding */ BOARD_COL_HEADERS; },
/* harmony export */   "BOARD_ROW_HEADERS": function() { return /* binding */ BOARD_ROW_HEADERS; },
/* harmony export */   "SQUARE_UNUSED": function() { return /* binding */ SQUARE_UNUSED; },
/* harmony export */   "PARTY_TYPE_UNDETERMINED": function() { return /* binding */ PARTY_TYPE_UNDETERMINED; },
/* harmony export */   "PARTY_TYPE_PRISONERS": function() { return /* binding */ PARTY_TYPE_PRISONERS; },
/* harmony export */   "PARTY_TYPE_GUARDS": function() { return /* binding */ PARTY_TYPE_GUARDS; },
/* harmony export */   "PARTY_TYPE_OBSERVER": function() { return /* binding */ PARTY_TYPE_OBSERVER; },
/* harmony export */   "PARTY_TYPE_EXAMINER": function() { return /* binding */ PARTY_TYPE_EXAMINER; },
/* harmony export */   "WHOSE_TURN_PRISONERS": function() { return /* binding */ WHOSE_TURN_PRISONERS; },
/* harmony export */   "WHOSE_TURN_GUARDS": function() { return /* binding */ WHOSE_TURN_GUARDS; },
/* harmony export */   "WHOSE_TURN_GAMEOVER": function() { return /* binding */ WHOSE_TURN_GAMEOVER; },
/* harmony export */   "PARTY_ICON_PRISONERS": function() { return /* binding */ PARTY_ICON_PRISONERS; },
/* harmony export */   "PARTY_ICON_GUARDS": function() { return /* binding */ PARTY_ICON_GUARDS; },
/* harmony export */   "PARTY_TITLE_PRISONERS": function() { return /* binding */ PARTY_TITLE_PRISONERS; },
/* harmony export */   "PARTY_TITLE_GUARDS": function() { return /* binding */ PARTY_TITLE_GUARDS; },
/* harmony export */   "MOVE_TYPE_PLAY": function() { return /* binding */ MOVE_TYPE_PLAY; },
/* harmony export */   "MOVE_TYPE_SWAP": function() { return /* binding */ MOVE_TYPE_SWAP; },
/* harmony export */   "MOVE_TYPE_PASS": function() { return /* binding */ MOVE_TYPE_PASS; },
/* harmony export */   "DIR_RIGHT": function() { return /* binding */ DIR_RIGHT; },
/* harmony export */   "DIR_DOWN": function() { return /* binding */ DIR_DOWN; },
/* harmony export */   "DIR_NONE": function() { return /* binding */ DIR_NONE; },
/* harmony export */   "USED_BY_PRISONERS": function() { return /* binding */ USED_BY_PRISONERS; },
/* harmony export */   "USED_BY_GUARDS": function() { return /* binding */ USED_BY_GUARDS; },
/* harmony export */   "USED_BY_NONE": function() { return /* binding */ USED_BY_NONE; },
/* harmony export */   "JOKE_ARRAY": function() { return /* binding */ JOKE_ARRAY; },
/* harmony export */   "PING_INTERVAL": function() { return /* binding */ PING_INTERVAL; },
/* harmony export */   "TILEBAG4": function() { return /* binding */ TILEBAG4; },
/* harmony export */   "TILEBAG5": function() { return /* binding */ TILEBAG5; },
/* harmony export */   "TILEBAG6": function() { return /* binding */ TILEBAG6; },
/* harmony export */   "TILEBAG7": function() { return /* binding */ TILEBAG7; },
/* harmony export */   "SQUARE_TYPE_ESCAPE_HATCH": function() { return /* binding */ SQUARE_TYPE_ESCAPE_HATCH; },
/* harmony export */   "SQUARE_TYPE_CENTRE": function() { return /* binding */ SQUARE_TYPE_CENTRE; },
/* harmony export */   "SQUARE_TYPE_STYLE1": function() { return /* binding */ SQUARE_TYPE_STYLE1; },
/* harmony export */   "SQUARE_TYPE_STYLE2": function() { return /* binding */ SQUARE_TYPE_STYLE2; },
/* harmony export */   "LETTER_NONE": function() { return /* binding */ LETTER_NONE; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
const BOARD_COL_HEADERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];
const BOARD_ROW_HEADERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
const SQUARE_UNUSED = "."; // Types of participant

const PARTY_TYPE_UNDETERMINED = 'U'; // Not determined yet

const PARTY_TYPE_PRISONERS = 'P'; // Player representing prisoners

const PARTY_TYPE_GUARDS = 'G'; // Player representing guards

const PARTY_TYPE_OBSERVER = 'O'; // Observer (someone watching a game in progress)

const PARTY_TYPE_EXAMINER = 'E'; // Examiner (someone examing a completed game)
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
const USED_BY_NONE = ''; // Jokes about prison

const JOKE_ARRAY = ['Escapee: "I' + "'m free! I'm free!" + '". Little kid: "I' + "'m four! I'm four!" + '"', 'Two peanuts were walking down a back alley. One was a salted.', "The psychic dwarf escaped! There's a small medium at large!", 'What do you call a vegetable who has escaped prison? An escapea!', "The prisoners fave punctuation is a period. It marks the end of a sentence!", "Prison is only one word, but to robbers it's a whole sentence."];
const PING_INTERVAL = 60000; // when waiting for opponent ping every this many milliseconds

const TILEBAG4 = ["A", "A", "A", "B", "C", "D", "E", "E", "E", "E", "F", "G", "H", "I", "I", "I", "J", "K", "L", "M", "N", "N", "O", "O", "O", "P", "Q", "R", "R", "S", "T", "T", "U", "V", "W", "X", "Y", "Z", "?", "?"]; // initial tile pool for 4 letter rack mode

const TILEBAG5 = ["A", "A", "A", "A", "A", "B", "C", "D", "D", "E", "E", "E", "E", "E", "E", "F", "G", "H", "I", "I", "I", "I", "I", "J", "K", "L", "L", "M", "N", "N", "N", "O", "O", "O", "O", "P", "Q", "R", "R", "R", "S", "S", "T", "T", "T", "U", "V", "W", "X", "Y", "Z", "?", "?"]; // initial tile pool for 5 letter rack mode

const TILEBAG6 = ["A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "M", "M", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "S", "S", "S", "T", "T", "T", "T", "U", "U", "U", "V", "W", "X", "Y", "Z", "?", "?"]; // initial tile pool for 6 letter rack mode

const TILEBAG7 = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z", "?", "?"]; // initial tile pool for 7 letter rack mode
// Types of square. These match css class names.

const SQUARE_TYPE_ESCAPE_HATCH = 'EscapeHatch'; // One of the escape hatch squares

const SQUARE_TYPE_CENTRE = 'CenterSquare'; // The centre square

const SQUARE_TYPE_STYLE1 = 'style1'; // The unused non-special squares alternate style

const SQUARE_TYPE_STYLE2 = 'style2'; // The unused non-special squares alternate style

const LETTER_NONE = ''; // No letter

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BiL3ByaXNvbkJyZWFrQ29uc3RhbnRzLmpzIl0sIm5hbWVzIjpbIkJPQVJEX0NPTF9IRUFERVJTIiwiQk9BUkRfUk9XX0hFQURFUlMiLCJTUVVBUkVfVU5VU0VEIiwiUEFSVFlfVFlQRV9VTkRFVEVSTUlORUQiLCJQQVJUWV9UWVBFX1BSSVNPTkVSUyIsIlBBUlRZX1RZUEVfR1VBUkRTIiwiUEFSVFlfVFlQRV9PQlNFUlZFUiIsIlBBUlRZX1RZUEVfRVhBTUlORVIiLCJXSE9TRV9UVVJOX1BSSVNPTkVSUyIsIldIT1NFX1RVUk5fR1VBUkRTIiwiV0hPU0VfVFVSTl9HQU1FT1ZFUiIsIlBBUlRZX0lDT05fUFJJU09ORVJTIiwiUEFSVFlfSUNPTl9HVUFSRFMiLCJQQVJUWV9USVRMRV9QUklTT05FUlMiLCJQQVJUWV9USVRMRV9HVUFSRFMiLCJNT1ZFX1RZUEVfUExBWSIsIk1PVkVfVFlQRV9TV0FQIiwiTU9WRV9UWVBFX1BBU1MiLCJESVJfUklHSFQiLCJESVJfRE9XTiIsIkRJUl9OT05FIiwiVVNFRF9CWV9QUklTT05FUlMiLCJVU0VEX0JZX0dVQVJEUyIsIlVTRURfQllfTk9ORSIsIkpPS0VfQVJSQVkiLCJQSU5HX0lOVEVSVkFMIiwiVElMRUJBRzQiLCJUSUxFQkFHNSIsIlRJTEVCQUc2IiwiVElMRUJBRzciLCJTUVVBUkVfVFlQRV9FU0NBUEVfSEFUQ0giLCJTUVVBUkVfVFlQRV9DRU5UUkUiLCJTUVVBUkVfVFlQRV9TVFlMRTEiLCJTUVVBUkVfVFlQRV9TVFlMRTIiLCJMRVRURVJfTk9ORSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTUEsaUJBQWlCLEdBQUcsQ0FBQyxHQUFELEVBQUssR0FBTCxFQUFTLEdBQVQsRUFBYSxHQUFiLEVBQWlCLEdBQWpCLEVBQXFCLEdBQXJCLEVBQXlCLEdBQXpCLEVBQTZCLEdBQTdCLEVBQWlDLEdB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dEIsR0F6QnNCLEVBeUJoQixHQXpCZ0IsRUEwQnRCLEdBMUJzQixFQTJCdEIsR0EzQnNCLEVBMkJoQixHQTNCZ0IsQ0FBakIsQyxDQTRCSjtBQUNMOztBQUNPLE1BQU1DLHdCQUF3QixHQUFHLGFBQWpDLEMsQ0FBZ0Q7O0FBQ2hELE1BQU1DLGtCQUFrQixHQUFHLGNBQTNCLEMsQ0FBMkM7O0FBQzNDLE1BQU1DLGtCQUFrQixHQUFHLFFBQTNCLEMsQ0FBcUM7O0FBQ3JDLE1BQU1DLGtCQUFrQixHQUFHLFFBQTNCLEMsQ0FBcUM7O0FBQ3JDLE1BQU1DLFdBQVcsR0FBRyxFQUFwQixDLENBQXdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU4MzVkZDg1ZmI3MDIwODkxZjZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQk9BUkRfQ09MX0hFQURFUlMgPSBbJ0EnLCdCJywnQycsJ0QnLCdFJywnRicsJ0cnLCdIJywnSScsJ0onLCdLJywnTCcsJ00nLCdOJywnTyddO1xyXG5leHBvcnQgY29uc3QgQk9BUkRfUk9XX0hFQURFUlMgPSBbJzEnLCcyJywnMycsJzQnLCc1JywnNicsJzcnLCc4JywnOScsJzEwJywnMTEnLCcxMicsJzEzJywnMTQnLCcxNSddO1xyXG5leHBvcnQgY29uc3QgU1FVQVJFX1VOVVNFRCA9IFwiLlwiO1xyXG4vLyBUeXBlcyBvZiBwYXJ0aWNpcGFudFxyXG5leHBvcnQgY29uc3QgUEFSVFlfVFlQRV9VTkRFVEVSTUlORUQgPSAnVSc7IC8vIE5vdCBkZXRlcm1pbmVkIHlldFxyXG5leHBvcnQgY29uc3QgUEFSVFlfVFlQRV9QUklTT05FUlMgPSAnUCc7IC8vIFBsYXllciByZXByZXNlbnRpbmcgcHJpc29uZXJzXHJcbmV4cG9ydCBjb25zdCBQQVJUWV9UWVBFX0dVQVJEUyA9ICdHJzsgLy8gUGxheWVyIHJlcHJlc2VudGluZyBndWFyZHNcclxuZXhwb3J0IGNvbnN0IFBBUlRZX1RZUEVfT0JTRVJWRVIgPSAnTyc7IC8vIE9ic2VydmVyIChzb21lb25lIHdhdGNoaW5nIGEgZ2FtZSBpbiBwcm9ncmVzcylcclxuZXhwb3J0IGNvbnN0IFBBUlRZX1RZUEVfRVhBTUlORVIgPSAnRSc7IC8vIEV4YW1pbmVyIChzb21lb25lIGV4YW1pbmcgYSBjb21wbGV0ZWQgZ2FtZSlcclxuLy8gV2hvc2UgdHVyblxyXG5leHBvcnQgY29uc3QgV0hPU0VfVFVSTl9QUklTT05FUlMgPSBQQVJUWV9UWVBFX1BSSVNPTkVSUztcclxuZXhwb3J0IGNvbnN0IFdIT1NFX1RVUk5fR1VBUkRTID0gUEFSVFlfVFlQRV9HVUFSRFM7XHJcbmV4cG9ydCBjb25zdCBXSE9TRV9UVVJOX0dBTUVPVkVSID0gJ1gnO1xyXG4vLyBQYXJ0aWNpcGFudCBtYXRlcmlhbC1pY29ucyBuYW1lXHJcbmV4cG9ydCBjb25zdCBQQVJUWV9JQ09OX1BSSVNPTkVSUyA9ICdydW5fY2lyY2xlJztcclxuZXhwb3J0IGNvbnN0IFBBUlRZX0lDT05fR1VBUkRTID0gJ3NlY3VyaXR5JztcclxuLy8gUGFydGljaXBhbnQgdGl0bGVcclxuZXhwb3J0IGNvbnN0IFBBUlRZX1RJVExFX1BSSVNPTkVSUyA9ICdQUklTT05FUlMnO1xyXG5leHBvcnQgY29uc3QgUEFSVFlfVElUTEVfR1VBUkRTID0gJ0dVQVJEUyc7XHJcbi8vIFR5cGVzIG9mIG1vdmVcclxuZXhwb3J0IGNvbnN0IE1PVkVfVFlQRV9QTEFZID0gJ1BMQVknO1xyXG5leHBvcnQgY29uc3QgTU9WRV9UWVBFX1NXQVAgPSAnU1dBUCc7XHJcbmV4cG9ydCBjb25zdCBNT1ZFX1RZUEVfUEFTUyA9ICdQQVNTJztcclxuLy8gRGlyZWN0aW9ucyAoZm9yIHRoZSBhcnJvdyBvbiB0aGUgYm9hcmQgdG8gc2lnbmlmeSB3b3JkIHBsYXkgZGlyZWN0aW9uKVxyXG5leHBvcnQgY29uc3QgRElSX1JJR0hUID0gJ3InO1xyXG5leHBvcnQgY29uc3QgRElSX0RPV04gPSAnZCc7XHJcbmV4cG9ydCBjb25zdCBESVJfTk9ORSA9ICcnO1xyXG4vLyBVc2VkIGJ5IChmb3Igc3BlY2lmeWluZyB3aG8gYSBzcXVhcmUgaXMgdXNlZCBieSwgaS5lLiBoYXMgYSB0aWxlIG9uIHRoYXQgc3F1YXJlKVxyXG5leHBvcnQgY29uc3QgVVNFRF9CWV9QUklTT05FUlMgPSBQQVJUWV9UWVBFX1BSSVNPTkVSUztcclxuZXhwb3J0IGNvbnN0IFVTRURfQllfR1VBUkRTID0gUEFSVFlfVFlQRV9HVUFSRFM7XHJcbmV4cG9ydCBjb25zdCBVU0VEX0JZX05PTkUgPSAnJztcclxuLy8gSm9rZXMgYWJvdXQgcHJpc29uXHJcbmV4cG9ydCBjb25zdCBKT0tFX0FSUkFZID0gW1xyXG4gICAgJ0VzY2FwZWU6IFwiSScgKyBcIidtIGZyZWUhIEknbSBmcmVlIVwiICsgJ1wiLiBMaXR0bGUga2lkOiBcIkknKyBcIidtIGZvdXIhIEknbSBmb3VyIVwiICsgJ1wiJyxcclxuICAgICdUd28gcGVhbnV0cyB3ZXJlIHdhbGtpbmcgZG93biBhIGJhY2sgYWxsZXkuIE9uZSB3YXMgYSBzYWx0ZWQuJyxcclxuICAgIFwiVGhlIHBzeWNoaWMgZHdhcmYgZXNjYXBlZCEgVGhlcmUncyBhIHNtYWxsIG1lZGl1bSBhdCBsYXJnZSFcIixcclxuICAgICdXaGF0IGRvIHlvdSBjYWxsIGEgdmVnZXRhYmxlIHdobyBoYXMgZXNjYXBlZCBwcmlzb24/IEFuIGVzY2FwZWEhJyxcclxuICAgIFwiVGhlIHByaXNvbmVycyBmYXZlIHB1bmN0dWF0aW9uIGlzIGEgcGVyaW9kLiBJdCBtYXJrcyB0aGUgZW5kIG9mIGEgc2VudGVuY2UhXCIsXHJcbiAgICBcIlByaXNvbiBpcyBvbmx5IG9uZSB3b3JkLCBidXQgdG8gcm9iYmVycyBpdCdzIGEgd2hvbGUgc2VudGVuY2UuXCJcclxuICBdO1xyXG5leHBvcnQgY29uc3QgUElOR19JTlRFUlZBTCA9IDYwMDAwOyAvLyB3aGVuIHdhaXRpbmcgZm9yIG9wcG9uZW50IHBpbmcgZXZlcnkgdGhpcyBtYW55IG1pbGxpc2Vjb25kc1xyXG5leHBvcnQgY29uc3QgVElMRUJBRzQgPSBbXHJcbiAgICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsXHJcbiAgICBcIkJcIixcclxuICAgIFwiQ1wiLFxyXG4gICAgXCJEXCIsXHJcbiAgICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIixcclxuICAgIFwiRlwiLFxyXG4gICAgXCJHXCIsXHJcbiAgICBcIkhcIixcclxuICAgIFwiSVwiLCAgXCJJXCIsICBcIklcIixcclxuICAgIFwiSlwiLFxyXG4gICAgXCJLXCIsXHJcbiAgICBcIkxcIixcclxuICAgIFwiTVwiLFxyXG4gICAgXCJOXCIsICBcIk5cIixcclxuICAgIFwiT1wiLCAgXCJPXCIsICBcIk9cIixcclxuICAgIFwiUFwiLFxyXG4gICAgXCJRXCIsXHJcbiAgICBcIlJcIiwgIFwiUlwiLFxyXG4gICAgXCJTXCIsXHJcbiAgICBcIlRcIiwgIFwiVFwiLFxyXG4gICAgXCJVXCIsXHJcbiAgICBcIlZcIixcclxuICAgIFwiV1wiLFxyXG4gICAgXCJYXCIsXHJcbiAgICBcIllcIixcclxuICAgIFwiWlwiLFxyXG4gICAgXCI/XCIsICBcIj9cIixcclxuICBdOyAvLyBpbml0aWFsIHRpbGUgcG9vbCBmb3IgNCBsZXR0ZXIgcmFjayBtb2RlXHJcbiAgZXhwb3J0IGNvbnN0IFRJTEVCQUc1ID0gW1xyXG4gICAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIixcclxuICAgIFwiQlwiLFxyXG4gICAgXCJDXCIsXHJcbiAgICBcIkRcIiwgIFwiRFwiLFxyXG4gICAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLFxyXG4gICAgXCJGXCIsXHJcbiAgICBcIkdcIixcclxuICAgIFwiSFwiLFxyXG4gICAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIixcclxuICAgIFwiSlwiLFxyXG4gICAgXCJLXCIsXHJcbiAgICBcIkxcIiwgIFwiTFwiLFxyXG4gICAgXCJNXCIsXHJcbiAgICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsXHJcbiAgICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIixcclxuICAgIFwiUFwiLFxyXG4gICAgXCJRXCIsXHJcbiAgICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsXHJcbiAgICBcIlNcIiwgIFwiU1wiLFxyXG4gICAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLFxyXG4gICAgXCJVXCIsXHJcbiAgICBcIlZcIixcclxuICAgIFwiV1wiLFxyXG4gICAgXCJYXCIsXHJcbiAgICBcIllcIixcclxuICAgIFwiWlwiLFxyXG4gICAgXCI/XCIsICBcIj9cIixcclxuICBdOyAvLyBpbml0aWFsIHRpbGUgcG9vbCBmb3IgNSBsZXR0ZXIgcmFjayBtb2RlXHJcbiAgZXhwb3J0IGNvbnN0IFRJTEVCQUc2ID0gW1xyXG4gICAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsXHJcbiAgICBcIkJcIiwgIFwiQlwiLFxyXG4gICAgXCJDXCIsICBcIkNcIixcclxuICAgIFwiRFwiLCAgXCJEXCIsICBcIkRcIixcclxuICAgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIixcclxuICAgIFwiRlwiLFxyXG4gICAgXCJHXCIsICBcIkdcIixcclxuICAgIFwiSFwiLCAgXCJIXCIsXHJcbiAgICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIixcclxuICAgIFwiSlwiLFxyXG4gICAgXCJLXCIsXHJcbiAgICBcIkxcIiwgIFwiTFwiLCAgXCJMXCIsXHJcbiAgICBcIk1cIiwgIFwiTVwiLFxyXG4gICAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsXHJcbiAgICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsXHJcbiAgICBcIlBcIiwgIFwiUFwiLFxyXG4gICAgXCJRXCIsXHJcbiAgICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLFxyXG4gICAgXCJTXCIsICBcIlNcIiwgIFwiU1wiLFxyXG4gICAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsXHJcbiAgICBcIlVcIiwgIFwiVVwiLCAgXCJVXCIsXHJcbiAgICBcIlZcIixcclxuICAgIFwiV1wiLFxyXG4gICAgXCJYXCIsXHJcbiAgICBcIllcIixcclxuICAgIFwiWlwiLFxyXG4gICAgXCI/XCIsICBcIj9cIixcclxuICBdOyAvLyBpbml0aWFsIHRpbGUgcG9vbCBmb3IgNiBsZXR0ZXIgcmFjayBtb2RlXHJcbiAgZXhwb3J0IGNvbnN0IFRJTEVCQUc3ID0gW1xyXG4gICAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLFxyXG4gICAgXCJCXCIsICBcIkJcIixcclxuICAgIFwiQ1wiLCAgXCJDXCIsXHJcbiAgICBcIkRcIiwgIFwiRFwiLCAgXCJEXCIsICBcIkRcIixcclxuICAgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIixcclxuICAgIFwiRlwiLCAgXCJGXCIsXHJcbiAgICBcIkdcIiwgIFwiR1wiLCAgXCJHXCIsXHJcbiAgICBcIkhcIiwgIFwiSFwiLFxyXG4gICAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLFxyXG4gICAgXCJKXCIsXHJcbiAgICBcIktcIixcclxuICAgIFwiTFwiLCAgXCJMXCIsICBcIkxcIiwgIFwiTFwiLFxyXG4gICAgXCJNXCIsICBcIk1cIixcclxuICAgIFwiTlwiLCAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsICBcIk5cIixcclxuICAgIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsXHJcbiAgICBcIlBcIiwgIFwiUFwiLFxyXG4gICAgXCJRXCIsXHJcbiAgICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsXHJcbiAgICBcIlNcIiwgIFwiU1wiLCAgXCJTXCIsICBcIlNcIixcclxuICAgIFwiVFwiLCAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsICBcIlRcIixcclxuICAgIFwiVVwiLCAgXCJVXCIsICBcIlVcIiwgIFwiVVwiLFxyXG4gICAgXCJWXCIsICBcIlZcIixcclxuICAgIFwiV1wiLCAgXCJXXCIsXHJcbiAgICBcIlhcIixcclxuICAgIFwiWVwiLCAgXCJZXCIsXHJcbiAgICBcIlpcIixcclxuICAgIFwiP1wiLCAgXCI/XCIsXHJcbiAgXTsgLy8gaW5pdGlhbCB0aWxlIHBvb2wgZm9yIDcgbGV0dGVyIHJhY2sgbW9kZVxyXG4vLyBUeXBlcyBvZiBzcXVhcmUuIFRoZXNlIG1hdGNoIGNzcyBjbGFzcyBuYW1lcy5cclxuZXhwb3J0IGNvbnN0IFNRVUFSRV9UWVBFX0VTQ0FQRV9IQVRDSCA9ICdFc2NhcGVIYXRjaCc7IC8vIE9uZSBvZiB0aGUgZXNjYXBlIGhhdGNoIHNxdWFyZXNcclxuZXhwb3J0IGNvbnN0IFNRVUFSRV9UWVBFX0NFTlRSRSA9ICdDZW50ZXJTcXVhcmUnOyAvLyBUaGUgY2VudHJlIHNxdWFyZVxyXG5leHBvcnQgY29uc3QgU1FVQVJFX1RZUEVfU1RZTEUxID0gJ3N0eWxlMSc7IC8vIFRoZSB1bnVzZWQgbm9uLXNwZWNpYWwgc3F1YXJlcyBhbHRlcm5hdGUgc3R5bGVcclxuZXhwb3J0IGNvbnN0IFNRVUFSRV9UWVBFX1NUWUxFMiA9ICdzdHlsZTInOyAvLyBUaGUgdW51c2VkIG5vbi1zcGVjaWFsIHNxdWFyZXMgYWx0ZXJuYXRlIHN0eWxlXHJcbmV4cG9ydCBjb25zdCBMRVRURVJfTk9ORSA9ICcnOyAvLyBObyBsZXR0ZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==