webpackHotUpdate_N_E("pages/pb/prisonbreak",{

/***/ "./lib/pbcommon.js":
/*!*************************!*\
  !*** ./lib/pbcommon.js ***!
  \*************************/
/*! exports provided: BOARD_COL_HEADERS, BOARD_ROW_HEADERS, SQUARE_UNUSED, PARTY_TYPE_UNDETERMINED, PARTY_TYPE_PRISONERS, PARTY_TYPE_GUARDS, PARTY_TYPE_OBSERVER, WHOSE_TURN_PRISONERS, WHOSE_TURN_GUARDS, WHOSE_TURN_GAMEOVER, PARTY_ICON_PRISONERS, PARTY_ICON_GUARDS, PARTY_TITLE_PRISONERS, PARTY_TITLE_GUARDS, MOVE_TYPE_PLAY, MOVE_TYPE_SWAP, MOVE_TYPE_PASS, DIR_RIGHT, DIR_DOWN, DIR_NONE, USED_BY_PRISONERS, USED_BY_GUARDS, USED_BY_NONE, JOKE_ARRAY, PING_INTERVAL, TILEBAG4, TILEBAG5, TILEBAG6, TILEBAG7, SQUARE_TYPE_ESCAPE_HATCH, SQUARE_TYPE_CENTRE, SQUARE_TYPE_STYLE1, SQUARE_TYPE_STYLE2, LETTER_NONE, InitialSquareArray, AnyUnusedEscapeHatches */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOKE_ARRAY", function() { return JOKE_ARRAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PING_INTERVAL", function() { return PING_INTERVAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILEBAG4", function() { return TILEBAG4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILEBAG5", function() { return TILEBAG5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILEBAG6", function() { return TILEBAG6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILEBAG7", function() { return TILEBAG7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SQUARE_TYPE_ESCAPE_HATCH", function() { return SQUARE_TYPE_ESCAPE_HATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SQUARE_TYPE_CENTRE", function() { return SQUARE_TYPE_CENTRE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SQUARE_TYPE_STYLE1", function() { return SQUARE_TYPE_STYLE1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SQUARE_TYPE_STYLE2", function() { return SQUARE_TYPE_STYLE2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LETTER_NONE", function() { return LETTER_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialSquareArray", function() { return InitialSquareArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnyUnusedEscapeHatches", function() { return AnyUnusedEscapeHatches; });
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
const USED_BY_NONE = ''; // Jokes about prison

const JOKE_ARRAY = ['Escapee: "I' + "'m free! I'm free!" + '". Little kid: "I' + "'m four! I'm four!" + '"', 'Two peanuts were walking down a back alley. One was a salted.', "The psychic dwarf escaped! There's a small medium at large!", 'What do you call a vegetable who has escaped prison? An escapea!', "The prisoners fave punctuation is a period. It marks the end of a sentence!", "Prison is only one word, but to robbers it's a whole sentence."];
const PING_INTERVAL = 20000; // when waiting for opponent ping every this many milliseconds

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

function InitialSquareArray(racksize) {
  // Initial square array for given rack size
  let size = racksize * 2 + 1;
  let sqa = Array(size);

  for (var row = 0; row < size; ++row) {
    let newrow = Array(size);

    for (var col = 0; col < size; ++col) {
      let newcol = {
        row: row,
        col: col,
        type: SQUARE_TYPE_STYLE2,
        usedby: USED_BY_NONE,
        letter: LETTER_NONE
      };

      if (row === racksize && col === racksize) {
        newcol.type = SQUARE_TYPE_CENTRE;
      } else if (row % racksize === 0 && col % racksize === 0) {
        newcol.type = SQUARE_TYPE_ESCAPE_HATCH;
      } else if (row % 2 === col % 2) {
        newcol.type = SQUARE_TYPE_STYLE1;
      }

      newrow[col] = newcol;
    }

    sqa[row] = [...newrow];
  }

  return sqa;
}
_c = InitialSquareArray;
function AnyUnusedEscapeHatches(squareArray = []) {
  // Used to check for game over due to no more escapes possible
  let racksize = (squareArray.length - 1) / 2;
  alert(racksize);
  let edge = racksize * 2;
  let middle = racksize;
  let anyLeft = true;

  try {
    if (squareArray[0][0].usedby !== USED_BY_NONE && squareArray[0][middle].usedby !== USED_BY_NONE && squareArray[0][edge].usedby !== USED_BY_NONE && squareArray[middle][0].usedby !== USED_BY_NONE && squareArray[middle][edge].usedby !== USED_BY_NONE && squareArray[edge][0].usedby !== USED_BY_NONE && squareArray[edge][middle].usedby !== USED_BY_NONE && squareArray[edge][edge].usedby !== USED_BY_NONE) {
      anyLeft = false;
      ; // No escape hatches left
    }
  } catch (e) {
    alert(`Something weird in AnyUnusedEscapeHatches, racksize=${racksize}`);
    console.log(e);
  }

  return anyLeft;
}
_c2 = AnyUnusedEscapeHatches;

var _c, _c2;

$RefreshReg$(_c, "InitialSquareArray");
$RefreshReg$(_c2, "AnyUnusedEscapeHatches");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BiY29tbW9uLmpzIl0sIm5hbWVzIjpbIkJPQVJEX0NPTF9IRUFERVJTIiwiQk9BUkRfUk9XX0hFQURFUlMiLCJTUVVBUkVfVU5VU0VEIiwiUEFSVFlfVFlQRV9VTkRFVEVSTUlORUQiLCJQQVJUWV9UWVBFX1BSSVNPTkVSUyIsIlBBUlRZX1RZUEVfR1VBUkRTIiwiUEFSVFlfVFlQRV9PQlNFUlZFUiIsIldIT1NFX1RVUk5fUFJJU09ORVJTIiwiV0hPU0VfVFVSTl9HVUFSRFMiLCJXSE9TRV9UVVJOX0dBTUVPVkVSIiwiUEFSVFlfSUNPTl9QUklTT05FUlMiLCJQQVJUWV9JQ09OX0dVQVJEUyIsIlBBUlRZX1RJVExFX1BSSVNPTkVSUyIsIlBBUlRZX1RJVExFX0dVQVJEUyIsIk1PVkVfVFlQRV9QTEFZIiwiTU9WRV9UWVBFX1NXQVAiLCJNT1ZFX1RZUEVfUEFTUyIsIkRJUl9SSUdIVCIsIkRJUl9ET1dOIiwiRElSX05PTkUiLCJVU0VEX0JZX1BSSVNPTkVSUyIsIlVTRURfQllfR1VBUkRTIiwiVVNFRF9CWV9OT05FIiwiSk9LRV9BUlJBWSIsIlBJTkdfSU5URVJWQUwiLCJUSUxFQkFHNCIsIlRJTEVCQUc1IiwiVElMRUJBRzYiLCJUSUxFQkFHNyIsIlNRVUFSRV9UWVBFX0VTQ0FQRV9IQVRDSCIsIlNRVUFSRV9UWVBFX0NFTlRSRSIsIlNRVUFSRV9UWVBFX1NUWUxFMSIsIlNRVUFSRV9UWVBFX1NUWUxFMiIsIkxFVFRFUl9OT05FIiwiSW5pdGlhbFNxdWFyZUFycmF5IiwicmFja3NpemUiLCJzaXplIiwic3FhIiwiQXJyYXkiLCJyb3ciLCJuZXdyb3ciLCJjb2wiLCJuZXdjb2wiLCJ0eXBlIiwidXNlZGJ5IiwibGV0dGVyIiwiQW55VW51c2VkRXNjYXBlSGF0Y2hlcyIsInNxdWFyZUFycmF5IiwibGVuZ3RoIiwiYWxlcnQiLCJlZGdlIiwibWlkZGxlIiwiYW55TGVmdCIsImUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBp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QkgsTUFBbEIsS0FBbUN0QixZQUFuQyxJQUNGeUIsV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlSSxNQUFmLEVBQXVCUCxNQUF2QixLQUFxQ3RCLFlBRG5DLElBRUZ5QixXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWVHLElBQWYsRUFBcUJOLE1BQXJCLEtBQXFDdEIsWUFGbkMsSUFHRnlCLFdBQVcsQ0FBQ0ksTUFBRCxDQUFYLENBQW9CLENBQXBCLEVBQXVCUCxNQUF2QixLQUFxQ3RCLFlBSG5DLElBSUZ5QixXQUFXLENBQUNJLE1BQUQsQ0FBWCxDQUFvQkQsSUFBcEIsRUFBMEJOLE1BQTFCLEtBQXFDdEIsWUFKbkMsSUFLRnlCLFdBQVcsQ0FBQ0csSUFBRCxDQUFYLENBQWtCLENBQWxCLEVBQXFCTixNQUFyQixLQUFxQ3RCLFlBTG5DLElBTUZ5QixXQUFXLENBQUNHLElBQUQsQ0FBWCxDQUFrQkMsTUFBbEIsRUFBMEJQLE1BQTFCLEtBQXFDdEIsWUFObkMsSUFPRnlCLFdBQVcsQ0FBQ0csSUFBRCxDQUFYLENBQWtCQSxJQUFsQixFQUF3Qk4sTUFBeEIsS0FBcUN0QixZQVB2QyxFQU9xRDtBQUNqRDhCLGFBQU8sR0FBRyxLQUFWO0FBQWdCLE9BRGlDLENBQy9CO0FBQ3JCO0FBQ0YsR0FYRCxDQVlBLE9BQU1DLENBQU4sRUFBUztBQUNQSixTQUFLLENBQUUsdURBQXNEZCxRQUFTLEVBQWpFLENBQUw7QUFDQW1CLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0Q7O0FBQ0QsU0FBT0QsT0FBUDtBQUNEO01BdkJlTixzQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYi9wcmlzb25icmVhay5jNThiZjI5NjNjZTQ2MzFmOTc3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEJPQVJEX0NPTF9IRUFERVJTID0gWydBJywnQicsJ0MnLCdEJywnRScsJ0YnLCdHJywnSCcsJ0knLCdKJywnSycsJ0wnLCdNJywnTicsJ08nXTtcclxuZXhwb3J0IGNvbnN0IEJPQVJEX1JPV19IRUFERVJTID0gWycxJywnMicsJzMnLCc0JywnNScsJzYnLCc3JywnOCcsJzknLCcxMCcsJzExJywnMTInLCcxMycsJzE0JywnMTUnXTtcclxuZXhwb3J0IGNvbnN0IFNRVUFSRV9VTlVTRUQgPSBcIi5cIjtcclxuLy8gVHlwZXMgb2YgcGFydGljaXBhbnRcclxuZXhwb3J0IGNvbnN0IFBBUlRZX1RZUEVfVU5ERVRFUk1JTkVEID0gJ1UnOyAvLyBOb3QgZGV0ZXJtaW5lZCB5ZXRcclxuZXhwb3J0IGNvbnN0IFBBUlRZX1RZUEVfUFJJU09ORVJTID0gJ1AnOyAvLyBQbGF5ZXIgcmVwcmVzZW50aW5nIHByaXNvbmVyc1xyXG5leHBvcnQgY29uc3QgUEFSVFlfVFlQRV9HVUFSRFMgPSAnRyc7IC8vIFBsYXllciByZXByZXNlbnRpbmcgZ3VhcmRzXHJcbmV4cG9ydCBjb25zdCBQQVJUWV9UWVBFX09CU0VSVkVSID0gJ08nOyAvLyBPYnNlcnZlciAobm90IGltcGxlbWVudGVkIHlldClcclxuLy8gV2hvc2UgdHVyblxyXG5leHBvcnQgY29uc3QgV0hPU0VfVFVSTl9QUklTT05FUlMgPSBQQVJUWV9UWVBFX1BSSVNPTkVSUztcclxuZXhwb3J0IGNvbnN0IFdIT1NFX1RVUk5fR1VBUkRTID0gUEFSVFlfVFlQRV9HVUFSRFM7XHJcbmV4cG9ydCBjb25zdCBXSE9TRV9UVVJOX0dBTUVPVkVSID0gJ1gnO1xyXG4vLyBQYXJ0aWNpcGFudCBtYXRlcmlhbC1pY29ucyBuYW1lXHJcbmV4cG9ydCBjb25zdCBQQVJUWV9JQ09OX1BSSVNPTkVSUyA9ICdydW5fY2lyY2xlJztcclxuZXhwb3J0IGNvbnN0IFBBUlRZX0lDT05fR1VBUkRTID0gJ3NlY3VyaXR5JztcclxuLy8gUGFydGljaXBhbnQgdGl0bGVcclxuZXhwb3J0IGNvbnN0IFBBUlRZX1RJVExFX1BSSVNPTkVSUyA9ICdQUklTT05FUlMnO1xyXG5leHBvcnQgY29uc3QgUEFSVFlfVElUTEVfR1VBUkRTID0gJ0dVQVJEUyc7XHJcbi8vIFR5cGVzIG9mIG1vdmVcclxuZXhwb3J0IGNvbnN0IE1PVkVfVFlQRV9QTEFZID0gJ1BMQVknO1xyXG5leHBvcnQgY29uc3QgTU9WRV9UWVBFX1NXQVAgPSAnU1dBUCc7XHJcbmV4cG9ydCBjb25zdCBNT1ZFX1RZUEVfUEFTUyA9ICdQQVNTJztcclxuLy8gRGlyZWN0aW9ucyAoZm9yIHRoZSBhcnJvdyBvbiB0aGUgYm9hcmQgdG8gc2lnbmlmeSB3b3JkIHBsYXkgZGlyZWN0aW9uKVxyXG5leHBvcnQgY29uc3QgRElSX1JJR0hUID0gJ3InO1xyXG5leHBvcnQgY29uc3QgRElSX0RPV04gPSAnZCc7XHJcbmV4cG9ydCBjb25zdCBESVJfTk9ORSA9ICcnO1xyXG4vLyBVc2VkIGJ5IChmb3Igc3BlY2lmeWluZyB3aG8gYSBzcXVhcmUgaXMgdXNlZCBieSwgaS5lLiBoYXMgYSB0aWxlIG9uIHRoYXQgc3F1YXJlKVxyXG5leHBvcnQgY29uc3QgVVNFRF9CWV9QUklTT05FUlMgPSBQQVJUWV9UWVBFX1BSSVNPTkVSUztcclxuZXhwb3J0IGNvbnN0IFVTRURfQllfR1VBUkRTID0gUEFSVFlfVFlQRV9HVUFSRFM7XHJcbmV4cG9ydCBjb25zdCBVU0VEX0JZX05PTkUgPSAnJztcclxuLy8gSm9rZXMgYWJvdXQgcHJpc29uXHJcbmV4cG9ydCBjb25zdCBKT0tFX0FSUkFZID0gW1xyXG4gICAgJ0VzY2FwZWU6IFwiSScgKyBcIidtIGZyZWUhIEknbSBmcmVlIVwiICsgJ1wiLiBMaXR0bGUga2lkOiBcIkknKyBcIidtIGZvdXIhIEknbSBmb3VyIVwiICsgJ1wiJyxcclxuICAgICdUd28gcGVhbnV0cyB3ZXJlIHdhbGtpbmcgZG93biBhIGJhY2sgYWxsZXkuIE9uZSB3YXMgYSBzYWx0ZWQuJyxcclxuICAgIFwiVGhlIHBzeWNoaWMgZHdhcmYgZXNjYXBlZCEgVGhlcmUncyBhIHNtYWxsIG1lZGl1bSBhdCBsYXJnZSFcIixcclxuICAgICdXaGF0IGRvIHlvdSBjYWxsIGEgdmVnZXRhYmxlIHdobyBoYXMgZXNjYXBlZCBwcmlzb24/IEFuIGVzY2FwZWEhJyxcclxuICAgIFwiVGhlIHByaXNvbmVycyBmYXZlIHB1bmN0dWF0aW9uIGlzIGEgcGVyaW9kLiBJdCBtYXJrcyB0aGUgZW5kIG9mIGEgc2VudGVuY2UhXCIsXHJcbiAgICBcIlByaXNvbiBpcyBvbmx5IG9uZSB3b3JkLCBidXQgdG8gcm9iYmVycyBpdCdzIGEgd2hvbGUgc2VudGVuY2UuXCJcclxuICBdO1xyXG5leHBvcnQgY29uc3QgUElOR19JTlRFUlZBTCA9IDIwMDAwOyAvLyB3aGVuIHdhaXRpbmcgZm9yIG9wcG9uZW50IHBpbmcgZXZlcnkgdGhpcyBtYW55IG1pbGxpc2Vjb25kc1xyXG5leHBvcnQgY29uc3QgVElMRUJBRzQgPSBbXHJcbiAgICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsXHJcbiAgICBcIkJcIixcclxuICAgIFwiQ1wiLFxyXG4gICAgXCJEXCIsXHJcbiAgICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIixcclxuICAgIFwiRlwiLFxyXG4gICAgXCJHXCIsXHJcbiAgICBcIkhcIixcclxuICAgIFwiSVwiLCAgXCJJXCIsICBcIklcIixcclxuICAgIFwiSlwiLFxyXG4gICAgXCJLXCIsXHJcbiAgICBcIkxcIixcclxuICAgIFwiTVwiLFxyXG4gICAgXCJOXCIsICBcIk5cIixcclxuICAgIFwiT1wiLCAgXCJPXCIsICBcIk9cIixcclxuICAgIFwiUFwiLFxyXG4gICAgXCJRXCIsXHJcbiAgICBcIlJcIiwgIFwiUlwiLFxyXG4gICAgXCJTXCIsXHJcbiAgICBcIlRcIiwgIFwiVFwiLFxyXG4gICAgXCJVXCIsXHJcbiAgICBcIlZcIixcclxuICAgIFwiV1wiLFxyXG4gICAgXCJYXCIsXHJcbiAgICBcIllcIixcclxuICAgIFwiWlwiLFxyXG4gICAgXCI/XCIsICBcIj9cIixcclxuICBdOyAvLyBpbml0aWFsIHRpbGUgcG9vbCBmb3IgNCBsZXR0ZXIgcmFjayBtb2RlXHJcbiAgZXhwb3J0IGNvbnN0IFRJTEVCQUc1ID0gW1xyXG4gICAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIixcclxuICAgIFwiQlwiLFxyXG4gICAgXCJDXCIsXHJcbiAgICBcIkRcIiwgIFwiRFwiLFxyXG4gICAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLFxyXG4gICAgXCJGXCIsXHJcbiAgICBcIkdcIixcclxuICAgIFwiSFwiLFxyXG4gICAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIixcclxuICAgIFwiSlwiLFxyXG4gICAgXCJLXCIsXHJcbiAgICBcIkxcIiwgIFwiTFwiLFxyXG4gICAgXCJNXCIsXHJcbiAgICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsXHJcbiAgICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIixcclxuICAgIFwiUFwiLFxyXG4gICAgXCJRXCIsXHJcbiAgICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsXHJcbiAgICBcIlNcIiwgIFwiU1wiLFxyXG4gICAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLFxyXG4gICAgXCJVXCIsXHJcbiAgICBcIlZcIixcclxuICAgIFwiV1wiLFxyXG4gICAgXCJYXCIsXHJcbiAgICBcIllcIixcclxuICAgIFwiWlwiLFxyXG4gICAgXCI/XCIsICBcIj9cIixcclxuICBdOyAvLyBpbml0aWFsIHRpbGUgcG9vbCBmb3IgNSBsZXR0ZXIgcmFjayBtb2RlXHJcbiAgZXhwb3J0IGNvbnN0IFRJTEVCQUc2ID0gW1xyXG4gICAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsXHJcbiAgICBcIkJcIiwgIFwiQlwiLFxyXG4gICAgXCJDXCIsICBcIkNcIixcclxuICAgIFwiRFwiLCAgXCJEXCIsICBcIkRcIixcclxuICAgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIixcclxuICAgIFwiRlwiLFxyXG4gICAgXCJHXCIsICBcIkdcIixcclxuICAgIFwiSFwiLCAgXCJIXCIsXHJcbiAgICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIixcclxuICAgIFwiSlwiLFxyXG4gICAgXCJLXCIsXHJcbiAgICBcIkxcIiwgIFwiTFwiLCAgXCJMXCIsXHJcbiAgICBcIk1cIiwgIFwiTVwiLFxyXG4gICAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsXHJcbiAgICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsXHJcbiAgICBcIlBcIiwgIFwiUFwiLFxyXG4gICAgXCJRXCIsXHJcbiAgICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLFxyXG4gICAgXCJTXCIsICBcIlNcIiwgIFwiU1wiLFxyXG4gICAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsXHJcbiAgICBcIlVcIiwgIFwiVVwiLCAgXCJVXCIsXHJcbiAgICBcIlZcIixcclxuICAgIFwiV1wiLFxyXG4gICAgXCJYXCIsXHJcbiAgICBcIllcIixcclxuICAgIFwiWlwiLFxyXG4gICAgXCI/XCIsICBcIj9cIixcclxuICBdOyAvLyBpbml0aWFsIHRpbGUgcG9vbCBmb3IgNiBsZXR0ZXIgcmFjayBtb2RlXHJcbiAgZXhwb3J0IGNvbnN0IFRJTEVCQUc3ID0gW1xyXG4gICAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLFxyXG4gICAgXCJCXCIsICBcIkJcIixcclxuICAgIFwiQ1wiLCAgXCJDXCIsXHJcbiAgICBcIkRcIiwgIFwiRFwiLCAgXCJEXCIsICBcIkRcIixcclxuICAgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIixcclxuICAgIFwiRlwiLCAgXCJGXCIsXHJcbiAgICBcIkdcIiwgIFwiR1wiLCAgXCJHXCIsXHJcbiAgICBcIkhcIiwgIFwiSFwiLFxyXG4gICAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLFxyXG4gICAgXCJKXCIsXHJcbiAgICBcIktcIixcclxuICAgIFwiTFwiLCAgXCJMXCIsICBcIkxcIiwgIFwiTFwiLFxyXG4gICAgXCJNXCIsICBcIk1cIixcclxuICAgIFwiTlwiLCAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsICBcIk5cIixcclxuICAgIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsXHJcbiAgICBcIlBcIiwgIFwiUFwiLFxyXG4gICAgXCJRXCIsXHJcbiAgICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsXHJcbiAgICBcIlNcIiwgIFwiU1wiLCAgXCJTXCIsICBcIlNcIixcclxuICAgIFwiVFwiLCAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsICBcIlRcIixcclxuICAgIFwiVVwiLCAgXCJVXCIsICBcIlVcIiwgIFwiVVwiLFxyXG4gICAgXCJWXCIsICBcIlZcIixcclxuICAgIFwiV1wiLCAgXCJXXCIsXHJcbiAgICBcIlhcIixcclxuICAgIFwiWVwiLCAgXCJZXCIsXHJcbiAgICBcIlpcIixcclxuICAgIFwiP1wiLCAgXCI/XCIsXHJcbiAgXTsgLy8gaW5pdGlhbCB0aWxlIHBvb2wgZm9yIDcgbGV0dGVyIHJhY2sgbW9kZVxyXG4vLyBUeXBlcyBvZiBzcXVhcmUuIFRoZXNlIG1hdGNoIGNzcyBjbGFzcyBuYW1lcy5cclxuZXhwb3J0IGNvbnN0IFNRVUFSRV9UWVBFX0VTQ0FQRV9IQVRDSCA9ICdFc2NhcGVIYXRjaCc7IC8vIE9uZSBvZiB0aGUgZXNjYXBlIGhhdGNoIHNxdWFyZXNcclxuZXhwb3J0IGNvbnN0IFNRVUFSRV9UWVBFX0NFTlRSRSA9ICdDZW50ZXJTcXVhcmUnOyAvLyBUaGUgY2VudHJlIHNxdWFyZVxyXG5leHBvcnQgY29uc3QgU1FVQVJFX1RZUEVfU1RZTEUxID0gJ3N0eWxlMSc7IC8vIFRoZSB1bnVzZWQgbm9uLXNwZWNpYWwgc3F1YXJlcyBhbHRlcm5hdGUgc3R5bGVcclxuZXhwb3J0IGNvbnN0IFNRVUFSRV9UWVBFX1NUWUxFMiA9ICdzdHlsZTInOyAvLyBUaGUgdW51c2VkIG5vbi1zcGVjaWFsIHNxdWFyZXMgYWx0ZXJuYXRlIHN0eWxlXHJcbmV4cG9ydCBjb25zdCBMRVRURVJfTk9ORSA9ICcnOyAvLyBObyBsZXR0ZXJcclxuZXhwb3J0IGZ1bmN0aW9uIEluaXRpYWxTcXVhcmVBcnJheShyYWNrc2l6ZSkgeyAvLyBJbml0aWFsIHNxdWFyZSBhcnJheSBmb3IgZ2l2ZW4gcmFjayBzaXplXHJcbiAgICBsZXQgc2l6ZSA9IChyYWNrc2l6ZSAqIDIpICsgMTtcclxuICAgIGxldCBzcWEgPSBBcnJheShzaXplKTtcclxuICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHNpemU7ICsrcm93KSB7XHJcbiAgICAgICAgbGV0IG5ld3JvdyA9IEFycmF5KHNpemUpO1xyXG4gICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IHNpemU7ICsrY29sKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdjb2wgPSB7cm93OiByb3csIGNvbDogY29sLCB0eXBlOiBTUVVBUkVfVFlQRV9TVFlMRTIsIHVzZWRieTogVVNFRF9CWV9OT05FLCBsZXR0ZXI6IExFVFRFUl9OT05FfTtcclxuICAgICAgICAgICAgaWYgKChyb3cgPT09IHJhY2tzaXplKSAmJiAoY29sID09PSByYWNrc2l6ZSkpIHtcclxuICAgICAgICAgICAgICAgIG5ld2NvbC50eXBlID0gU1FVQVJFX1RZUEVfQ0VOVFJFO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKChyb3cgJSByYWNrc2l6ZSA9PT0gMCkgJiYgKGNvbCAlIHJhY2tzaXplID09PSAwKSkge1xyXG4gICAgICAgICAgICAgICAgbmV3Y29sLnR5cGUgPSBTUVVBUkVfVFlQRV9FU0NBUEVfSEFUQ0g7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocm93ICUgMiA9PT0gY29sICUgMikge1xyXG4gICAgICAgICAgICAgICAgbmV3Y29sLnR5cGUgPSBTUVVBUkVfVFlQRV9TVFlMRTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV3cm93W2NvbF0gPSBuZXdjb2w7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNxYVtyb3ddID0gWy4uLm5ld3Jvd107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3FhO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBBbnlVbnVzZWRFc2NhcGVIYXRjaGVzKHNxdWFyZUFycmF5PVtdKSB7IC8vIFVzZWQgdG8gY2hlY2sgZm9yIGdhbWUgb3ZlciBkdWUgdG8gbm8gbW9yZSBlc2NhcGVzIHBvc3NpYmxlXHJcbiAgbGV0IHJhY2tzaXplID0gKHNxdWFyZUFycmF5Lmxlbmd0aCAtIDEpIC8gMjtcclxuICBhbGVydChyYWNrc2l6ZSk7XHJcbiAgbGV0IGVkZ2UgPSByYWNrc2l6ZSAqIDI7XHJcbiAgbGV0IG1pZGRsZSA9IHJhY2tzaXplO1xyXG4gIGxldCBhbnlMZWZ0ID0gdHJ1ZTtcclxuICB0cnkge1xyXG4gICAgaWYgKHNxdWFyZUFycmF5WzBdWzBdLnVzZWRieSAgICAgICAhPT0gVVNFRF9CWV9OT05FICYmXHJcbiAgICAgIHNxdWFyZUFycmF5WzBdW21pZGRsZV0udXNlZGJ5ICAgICE9PSBVU0VEX0JZX05PTkUgJiZcclxuICAgICAgc3F1YXJlQXJyYXlbMF1bZWRnZV0udXNlZGJ5ICAgICAgIT09IFVTRURfQllfTk9ORSAmJlxyXG4gICAgICBzcXVhcmVBcnJheVttaWRkbGVdWzBdLnVzZWRieSAgICAhPT0gVVNFRF9CWV9OT05FICYmXHJcbiAgICAgIHNxdWFyZUFycmF5W21pZGRsZV1bZWRnZV0udXNlZGJ5ICE9PSBVU0VEX0JZX05PTkUgJiZcclxuICAgICAgc3F1YXJlQXJyYXlbZWRnZV1bMF0udXNlZGJ5ICAgICAgIT09IFVTRURfQllfTk9ORSAmJlxyXG4gICAgICBzcXVhcmVBcnJheVtlZGdlXVttaWRkbGVdLnVzZWRieSAhPT0gVVNFRF9CWV9OT05FICYmXHJcbiAgICAgIHNxdWFyZUFycmF5W2VkZ2VdW2VkZ2VdLnVzZWRieSAgICE9PSBVU0VEX0JZX05PTkUpIHtcclxuICAgICAgICBhbnlMZWZ0ID0gZmFsc2U7OyAvLyBObyBlc2NhcGUgaGF0Y2hlcyBsZWZ0XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNhdGNoKGUpIHtcclxuICAgIGFsZXJ0KGBTb21ldGhpbmcgd2VpcmQgaW4gQW55VW51c2VkRXNjYXBlSGF0Y2hlcywgcmFja3NpemU9JHtyYWNrc2l6ZX1gKVxyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgfVxyXG4gIHJldHVybiBhbnlMZWZ0O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==