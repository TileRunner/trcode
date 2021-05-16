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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BiY29tbW9uLmpzIl0sIm5hbWVzIjpbIkJPQVJEX0NPTF9IRUFERVJTIiwiQk9BUkRfUk9XX0hFQURFUlMiLCJTUVVBUkVfVU5VU0VEIiwiUEFSVFlfVFlQRV9VTkRFVEVSTUlORUQiLCJQQVJUWV9UWVBFX1BSSVNPTkVSUyIsIlBBUlRZX1RZUEVfR1VBUkRTIiwiUEFSVFlfVFlQRV9PQlNFUlZFUiIsIldIT1NFX1RVUk5fUFJJU09ORVJTIiwiV0hPU0VfVFVSTl9HVUFSRFMiLCJXSE9TRV9UVVJOX0dBTUVPVkVSIiwiUEFSVFlfSUNPTl9QUklTT05FUlMiLCJQQVJUWV9JQ09OX0dVQVJEUyIsIlBBUlRZX1RJVExFX1BSSVNPTkVSUyIsIlBBUlRZX1RJVExFX0dVQVJEUyIsIk1PVkVfVFlQRV9QTEFZIiwiTU9WRV9UWVBFX1NXQVAiLCJNT1ZFX1RZUEVfUEFTUyIsIkRJUl9SSUdIVCIsIkRJUl9ET1dOIiwiRElSX05PTkUiLCJVU0VEX0JZX1BSSVNPTkVSUyIsIlVTRURfQllfR1VBUkRTIiwiVVNFRF9CWV9OT05FIiwiSk9LRV9BUlJBWSIsIlBJTkdfSU5URVJWQUwiLCJUSUxFQkFHNCIsIlRJTEVCQUc1IiwiVElMRUJBRzYiLCJUSUxFQkFHNyIsIlNRVUFSRV9UWVBFX0VTQ0FQRV9IQVRDSCIsIlNRVUFSRV9UWVBFX0NFTlRSRSIsIlNRVUFSRV9UWVBFX1NUWUxFMSIsIlNRVUFSRV9UWVBFX1NUWUxFMiIsIkxFVFRFUl9OT05FIiwiSW5pdGlhbFNxdWFyZUFycmF5IiwicmFja3NpemUiLCJzaXplIiwic3FhIiwiQXJyYXkiLCJyb3ciLCJuZXdyb3ciLCJjb2wiLCJuZXdjb2wiLCJ0eXBlIiwidXNlZGJ5IiwibGV0dGVyIiwiQW55VW51c2VkRXNjYXBlSGF0Y2hlcyIsInNxdWFyZUFycmF5IiwibGVuZ3RoIiwiZWRnZSIsIm1pZGRsZSIsImFueUxlZnQiLCJlIiwiYWxlcnQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBp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LFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZUcsTUFBZixFQUF1Qk4sTUFBdkIsS0FBcUN0QixZQURuQyxJQUVGeUIsV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlRSxJQUFmLEVBQXFCTCxNQUFyQixLQUFxQ3RCLFlBRm5DLElBR0Z5QixXQUFXLENBQUNHLE1BQUQsQ0FBWCxDQUFvQixDQUFwQixFQUF1Qk4sTUFBdkIsS0FBcUN0QixZQUhuQyxJQUlGeUIsV0FBVyxDQUFDRyxNQUFELENBQVgsQ0FBb0JELElBQXBCLEVBQTBCTCxNQUExQixLQUFxQ3RCLFlBSm5DLElBS0Z5QixXQUFXLENBQUNFLElBQUQsQ0FBWCxDQUFrQixDQUFsQixFQUFxQkwsTUFBckIsS0FBcUN0QixZQUxuQyxJQU1GeUIsV0FBVyxDQUFDRSxJQUFELENBQVgsQ0FBa0JDLE1BQWxCLEVBQTBCTixNQUExQixLQUFxQ3RCLFlBTm5DLElBT0Z5QixXQUFXLENBQUNFLElBQUQsQ0FBWCxDQUFrQkEsSUFBbEIsRUFBd0JMLE1BQXhCLEtBQXFDdEIsWUFQdkMsRUFPcUQ7QUFDakQ2QixhQUFPLEdBQUcsS0FBVjtBQUFnQixPQURpQyxDQUMvQjtBQUNyQjtBQUNGLEdBWEQsQ0FZQSxPQUFNQyxDQUFOLEVBQVM7QUFDUEMsU0FBSyxDQUFFLHVEQUFzRGxCLFFBQVMsRUFBakUsQ0FBTDtBQUNBbUIsV0FBTyxDQUFDQyxHQUFSLENBQVlILENBQVo7QUFDRDs7QUFDRCxTQUFPRCxPQUFQO0FBQ0Q7TUF0QmVMLHNCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BiL3ByaXNvbmJyZWFrLjA1NDFkYzViMDgyYjdlMjI0NWYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQk9BUkRfQ09MX0hFQURFUlMgPSBbJ0EnLCdCJywnQycsJ0QnLCdFJywnRicsJ0cnLCdIJywnSScsJ0onLCdLJywnTCcsJ00nLCdOJywnTyddO1xyXG5leHBvcnQgY29uc3QgQk9BUkRfUk9XX0hFQURFUlMgPSBbJzEnLCcyJywnMycsJzQnLCc1JywnNicsJzcnLCc4JywnOScsJzEwJywnMTEnLCcxMicsJzEzJywnMTQnLCcxNSddO1xyXG5leHBvcnQgY29uc3QgU1FVQVJFX1VOVVNFRCA9IFwiLlwiO1xyXG4vLyBUeXBlcyBvZiBwYXJ0aWNpcGFudFxyXG5leHBvcnQgY29uc3QgUEFSVFlfVFlQRV9VTkRFVEVSTUlORUQgPSAnVSc7IC8vIE5vdCBkZXRlcm1pbmVkIHlldFxyXG5leHBvcnQgY29uc3QgUEFSVFlfVFlQRV9QUklTT05FUlMgPSAnUCc7IC8vIFBsYXllciByZXByZXNlbnRpbmcgcHJpc29uZXJzXHJcbmV4cG9ydCBjb25zdCBQQVJUWV9UWVBFX0dVQVJEUyA9ICdHJzsgLy8gUGxheWVyIHJlcHJlc2VudGluZyBndWFyZHNcclxuZXhwb3J0IGNvbnN0IFBBUlRZX1RZUEVfT0JTRVJWRVIgPSAnTyc7IC8vIE9ic2VydmVyIChub3QgaW1wbGVtZW50ZWQgeWV0KVxyXG4vLyBXaG9zZSB0dXJuXHJcbmV4cG9ydCBjb25zdCBXSE9TRV9UVVJOX1BSSVNPTkVSUyA9IFBBUlRZX1RZUEVfUFJJU09ORVJTO1xyXG5leHBvcnQgY29uc3QgV0hPU0VfVFVSTl9HVUFSRFMgPSBQQVJUWV9UWVBFX0dVQVJEUztcclxuZXhwb3J0IGNvbnN0IFdIT1NFX1RVUk5fR0FNRU9WRVIgPSAnWCc7XHJcbi8vIFBhcnRpY2lwYW50IG1hdGVyaWFsLWljb25zIG5hbWVcclxuZXhwb3J0IGNvbnN0IFBBUlRZX0lDT05fUFJJU09ORVJTID0gJ3J1bl9jaXJjbGUnO1xyXG5leHBvcnQgY29uc3QgUEFSVFlfSUNPTl9HVUFSRFMgPSAnc2VjdXJpdHknO1xyXG4vLyBQYXJ0aWNpcGFudCB0aXRsZVxyXG5leHBvcnQgY29uc3QgUEFSVFlfVElUTEVfUFJJU09ORVJTID0gJ1BSSVNPTkVSUyc7XHJcbmV4cG9ydCBjb25zdCBQQVJUWV9USVRMRV9HVUFSRFMgPSAnR1VBUkRTJztcclxuLy8gVHlwZXMgb2YgbW92ZVxyXG5leHBvcnQgY29uc3QgTU9WRV9UWVBFX1BMQVkgPSAnUExBWSc7XHJcbmV4cG9ydCBjb25zdCBNT1ZFX1RZUEVfU1dBUCA9ICdTV0FQJztcclxuZXhwb3J0IGNvbnN0IE1PVkVfVFlQRV9QQVNTID0gJ1BBU1MnO1xyXG4vLyBEaXJlY3Rpb25zIChmb3IgdGhlIGFycm93IG9uIHRoZSBib2FyZCB0byBzaWduaWZ5IHdvcmQgcGxheSBkaXJlY3Rpb24pXHJcbmV4cG9ydCBjb25zdCBESVJfUklHSFQgPSAncic7XHJcbmV4cG9ydCBjb25zdCBESVJfRE9XTiA9ICdkJztcclxuZXhwb3J0IGNvbnN0IERJUl9OT05FID0gJyc7XHJcbi8vIFVzZWQgYnkgKGZvciBzcGVjaWZ5aW5nIHdobyBhIHNxdWFyZSBpcyB1c2VkIGJ5LCBpLmUuIGhhcyBhIHRpbGUgb24gdGhhdCBzcXVhcmUpXHJcbmV4cG9ydCBjb25zdCBVU0VEX0JZX1BSSVNPTkVSUyA9IFBBUlRZX1RZUEVfUFJJU09ORVJTO1xyXG5leHBvcnQgY29uc3QgVVNFRF9CWV9HVUFSRFMgPSBQQVJUWV9UWVBFX0dVQVJEUztcclxuZXhwb3J0IGNvbnN0IFVTRURfQllfTk9ORSA9ICcnO1xyXG4vLyBKb2tlcyBhYm91dCBwcmlzb25cclxuZXhwb3J0IGNvbnN0IEpPS0VfQVJSQVkgPSBbXHJcbiAgICAnRXNjYXBlZTogXCJJJyArIFwiJ20gZnJlZSEgSSdtIGZyZWUhXCIgKyAnXCIuIExpdHRsZSBraWQ6IFwiSScrIFwiJ20gZm91ciEgSSdtIGZvdXIhXCIgKyAnXCInLFxyXG4gICAgJ1R3byBwZWFudXRzIHdlcmUgd2Fsa2luZyBkb3duIGEgYmFjayBhbGxleS4gT25lIHdhcyBhIHNhbHRlZC4nLFxyXG4gICAgXCJUaGUgcHN5Y2hpYyBkd2FyZiBlc2NhcGVkISBUaGVyZSdzIGEgc21hbGwgbWVkaXVtIGF0IGxhcmdlIVwiLFxyXG4gICAgJ1doYXQgZG8geW91IGNhbGwgYSB2ZWdldGFibGUgd2hvIGhhcyBlc2NhcGVkIHByaXNvbj8gQW4gZXNjYXBlYSEnLFxyXG4gICAgXCJUaGUgcHJpc29uZXJzIGZhdmUgcHVuY3R1YXRpb24gaXMgYSBwZXJpb2QuIEl0IG1hcmtzIHRoZSBlbmQgb2YgYSBzZW50ZW5jZSFcIixcclxuICAgIFwiUHJpc29uIGlzIG9ubHkgb25lIHdvcmQsIGJ1dCB0byByb2JiZXJzIGl0J3MgYSB3aG9sZSBzZW50ZW5jZS5cIlxyXG4gIF07XHJcbmV4cG9ydCBjb25zdCBQSU5HX0lOVEVSVkFMID0gMjAwMDA7IC8vIHdoZW4gd2FpdGluZyBmb3Igb3Bwb25lbnQgcGluZyBldmVyeSB0aGlzIG1hbnkgbWlsbGlzZWNvbmRzXHJcbmV4cG9ydCBjb25zdCBUSUxFQkFHNCA9IFtcclxuICAgIFwiQVwiLCAgXCJBXCIsICBcIkFcIixcclxuICAgIFwiQlwiLFxyXG4gICAgXCJDXCIsXHJcbiAgICBcIkRcIixcclxuICAgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLFxyXG4gICAgXCJGXCIsXHJcbiAgICBcIkdcIixcclxuICAgIFwiSFwiLFxyXG4gICAgXCJJXCIsICBcIklcIiwgIFwiSVwiLFxyXG4gICAgXCJKXCIsXHJcbiAgICBcIktcIixcclxuICAgIFwiTFwiLFxyXG4gICAgXCJNXCIsXHJcbiAgICBcIk5cIiwgIFwiTlwiLFxyXG4gICAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLFxyXG4gICAgXCJQXCIsXHJcbiAgICBcIlFcIixcclxuICAgIFwiUlwiLCAgXCJSXCIsXHJcbiAgICBcIlNcIixcclxuICAgIFwiVFwiLCAgXCJUXCIsXHJcbiAgICBcIlVcIixcclxuICAgIFwiVlwiLFxyXG4gICAgXCJXXCIsXHJcbiAgICBcIlhcIixcclxuICAgIFwiWVwiLFxyXG4gICAgXCJaXCIsXHJcbiAgICBcIj9cIiwgIFwiP1wiLFxyXG4gIF07IC8vIGluaXRpYWwgdGlsZSBwb29sIGZvciA0IGxldHRlciByYWNrIG1vZGVcclxuICBleHBvcnQgY29uc3QgVElMRUJBRzUgPSBbXHJcbiAgICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLFxyXG4gICAgXCJCXCIsXHJcbiAgICBcIkNcIixcclxuICAgIFwiRFwiLCAgXCJEXCIsXHJcbiAgICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsXHJcbiAgICBcIkZcIixcclxuICAgIFwiR1wiLFxyXG4gICAgXCJIXCIsXHJcbiAgICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLFxyXG4gICAgXCJKXCIsXHJcbiAgICBcIktcIixcclxuICAgIFwiTFwiLCAgXCJMXCIsXHJcbiAgICBcIk1cIixcclxuICAgIFwiTlwiLCAgXCJOXCIsICBcIk5cIixcclxuICAgIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLFxyXG4gICAgXCJQXCIsXHJcbiAgICBcIlFcIixcclxuICAgIFwiUlwiLCAgXCJSXCIsICBcIlJcIixcclxuICAgIFwiU1wiLCAgXCJTXCIsXHJcbiAgICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsXHJcbiAgICBcIlVcIixcclxuICAgIFwiVlwiLFxyXG4gICAgXCJXXCIsXHJcbiAgICBcIlhcIixcclxuICAgIFwiWVwiLFxyXG4gICAgXCJaXCIsXHJcbiAgICBcIj9cIiwgIFwiP1wiLFxyXG4gIF07IC8vIGluaXRpYWwgdGlsZSBwb29sIGZvciA1IGxldHRlciByYWNrIG1vZGVcclxuICBleHBvcnQgY29uc3QgVElMRUJBRzYgPSBbXHJcbiAgICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIixcclxuICAgIFwiQlwiLCAgXCJCXCIsXHJcbiAgICBcIkNcIiwgIFwiQ1wiLFxyXG4gICAgXCJEXCIsICBcIkRcIiwgIFwiRFwiLFxyXG4gICAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLFxyXG4gICAgXCJGXCIsXHJcbiAgICBcIkdcIiwgIFwiR1wiLFxyXG4gICAgXCJIXCIsICBcIkhcIixcclxuICAgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLFxyXG4gICAgXCJKXCIsXHJcbiAgICBcIktcIixcclxuICAgIFwiTFwiLCAgXCJMXCIsICBcIkxcIixcclxuICAgIFwiTVwiLCAgXCJNXCIsXHJcbiAgICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsICBcIk5cIixcclxuICAgIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIixcclxuICAgIFwiUFwiLCAgXCJQXCIsXHJcbiAgICBcIlFcIixcclxuICAgIFwiUlwiLCAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsXHJcbiAgICBcIlNcIiwgIFwiU1wiLCAgXCJTXCIsXHJcbiAgICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsICBcIlRcIixcclxuICAgIFwiVVwiLCAgXCJVXCIsICBcIlVcIixcclxuICAgIFwiVlwiLFxyXG4gICAgXCJXXCIsXHJcbiAgICBcIlhcIixcclxuICAgIFwiWVwiLFxyXG4gICAgXCJaXCIsXHJcbiAgICBcIj9cIiwgIFwiP1wiLFxyXG4gIF07IC8vIGluaXRpYWwgdGlsZSBwb29sIGZvciA2IGxldHRlciByYWNrIG1vZGVcclxuICBleHBvcnQgY29uc3QgVElMRUJBRzcgPSBbXHJcbiAgICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsICBcIkFcIiwgIFwiQVwiLCAgXCJBXCIsXHJcbiAgICBcIkJcIiwgIFwiQlwiLFxyXG4gICAgXCJDXCIsICBcIkNcIixcclxuICAgIFwiRFwiLCAgXCJEXCIsICBcIkRcIiwgIFwiRFwiLFxyXG4gICAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLCAgXCJFXCIsICBcIkVcIiwgIFwiRVwiLFxyXG4gICAgXCJGXCIsICBcIkZcIixcclxuICAgIFwiR1wiLCAgXCJHXCIsICBcIkdcIixcclxuICAgIFwiSFwiLCAgXCJIXCIsXHJcbiAgICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsICBcIklcIiwgIFwiSVwiLCAgXCJJXCIsXHJcbiAgICBcIkpcIixcclxuICAgIFwiS1wiLFxyXG4gICAgXCJMXCIsICBcIkxcIiwgIFwiTFwiLCAgXCJMXCIsXHJcbiAgICBcIk1cIiwgIFwiTVwiLFxyXG4gICAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLCAgXCJOXCIsICBcIk5cIiwgIFwiTlwiLFxyXG4gICAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIiwgIFwiT1wiLCAgXCJPXCIsICBcIk9cIixcclxuICAgIFwiUFwiLCAgXCJQXCIsXHJcbiAgICBcIlFcIixcclxuICAgIFwiUlwiLCAgXCJSXCIsICBcIlJcIiwgIFwiUlwiLCAgXCJSXCIsICBcIlJcIixcclxuICAgIFwiU1wiLCAgXCJTXCIsICBcIlNcIiwgIFwiU1wiLFxyXG4gICAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLCAgXCJUXCIsICBcIlRcIiwgIFwiVFwiLFxyXG4gICAgXCJVXCIsICBcIlVcIiwgIFwiVVwiLCAgXCJVXCIsXHJcbiAgICBcIlZcIiwgIFwiVlwiLFxyXG4gICAgXCJXXCIsICBcIldcIixcclxuICAgIFwiWFwiLFxyXG4gICAgXCJZXCIsICBcIllcIixcclxuICAgIFwiWlwiLFxyXG4gICAgXCI/XCIsICBcIj9cIixcclxuICBdOyAvLyBpbml0aWFsIHRpbGUgcG9vbCBmb3IgNyBsZXR0ZXIgcmFjayBtb2RlXHJcbi8vIFR5cGVzIG9mIHNxdWFyZS4gVGhlc2UgbWF0Y2ggY3NzIGNsYXNzIG5hbWVzLlxyXG5leHBvcnQgY29uc3QgU1FVQVJFX1RZUEVfRVNDQVBFX0hBVENIID0gJ0VzY2FwZUhhdGNoJzsgLy8gT25lIG9mIHRoZSBlc2NhcGUgaGF0Y2ggc3F1YXJlc1xyXG5leHBvcnQgY29uc3QgU1FVQVJFX1RZUEVfQ0VOVFJFID0gJ0NlbnRlclNxdWFyZSc7IC8vIFRoZSBjZW50cmUgc3F1YXJlXHJcbmV4cG9ydCBjb25zdCBTUVVBUkVfVFlQRV9TVFlMRTEgPSAnc3R5bGUxJzsgLy8gVGhlIHVudXNlZCBub24tc3BlY2lhbCBzcXVhcmVzIGFsdGVybmF0ZSBzdHlsZVxyXG5leHBvcnQgY29uc3QgU1FVQVJFX1RZUEVfU1RZTEUyID0gJ3N0eWxlMic7IC8vIFRoZSB1bnVzZWQgbm9uLXNwZWNpYWwgc3F1YXJlcyBhbHRlcm5hdGUgc3R5bGVcclxuZXhwb3J0IGNvbnN0IExFVFRFUl9OT05FID0gJyc7IC8vIE5vIGxldHRlclxyXG5leHBvcnQgZnVuY3Rpb24gSW5pdGlhbFNxdWFyZUFycmF5KHJhY2tzaXplKSB7IC8vIEluaXRpYWwgc3F1YXJlIGFycmF5IGZvciBnaXZlbiByYWNrIHNpemVcclxuICAgIGxldCBzaXplID0gKHJhY2tzaXplICogMikgKyAxO1xyXG4gICAgbGV0IHNxYSA9IEFycmF5KHNpemUpO1xyXG4gICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgc2l6ZTsgKytyb3cpIHtcclxuICAgICAgICBsZXQgbmV3cm93ID0gQXJyYXkoc2l6ZSk7XHJcbiAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgc2l6ZTsgKytjb2wpIHtcclxuICAgICAgICAgICAgbGV0IG5ld2NvbCA9IHtyb3c6IHJvdywgY29sOiBjb2wsIHR5cGU6IFNRVUFSRV9UWVBFX1NUWUxFMiwgdXNlZGJ5OiBVU0VEX0JZX05PTkUsIGxldHRlcjogTEVUVEVSX05PTkV9O1xyXG4gICAgICAgICAgICBpZiAoKHJvdyA9PT0gcmFja3NpemUpICYmIChjb2wgPT09IHJhY2tzaXplKSkge1xyXG4gICAgICAgICAgICAgICAgbmV3Y29sLnR5cGUgPSBTUVVBUkVfVFlQRV9DRU5UUkU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHJvdyAlIHJhY2tzaXplID09PSAwKSAmJiAoY29sICUgcmFja3NpemUgPT09IDApKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdjb2wudHlwZSA9IFNRVUFSRV9UWVBFX0VTQ0FQRV9IQVRDSDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyb3cgJSAyID09PSBjb2wgJSAyKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdjb2wudHlwZSA9IFNRVUFSRV9UWVBFX1NUWUxFMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXdyb3dbY29sXSA9IG5ld2NvbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3FhW3Jvd10gPSBbLi4ubmV3cm93XTtcclxuICAgIH1cclxuICAgIHJldHVybiBzcWE7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEFueVVudXNlZEVzY2FwZUhhdGNoZXMoc3F1YXJlQXJyYXk9W10pIHsgLy8gVXNlZCB0byBjaGVjayBmb3IgZ2FtZSBvdmVyIGR1ZSB0byBubyBtb3JlIGVzY2FwZXMgcG9zc2libGVcclxuICBsZXQgcmFja3NpemUgPSAoc3F1YXJlQXJyYXkubGVuZ3RoIC0gMSkgLyAyO1xyXG4gIGxldCBlZGdlID0gcmFja3NpemUgKiAyO1xyXG4gIGxldCBtaWRkbGUgPSByYWNrc2l6ZTtcclxuICBsZXQgYW55TGVmdCA9IHRydWU7XHJcbiAgdHJ5IHtcclxuICAgIGlmIChzcXVhcmVBcnJheVswXVswXS51c2VkYnkgICAgICAgIT09IFVTRURfQllfTk9ORSAmJlxyXG4gICAgICBzcXVhcmVBcnJheVswXVttaWRkbGVdLnVzZWRieSAgICAhPT0gVVNFRF9CWV9OT05FICYmXHJcbiAgICAgIHNxdWFyZUFycmF5WzBdW2VkZ2VdLnVzZWRieSAgICAgICE9PSBVU0VEX0JZX05PTkUgJiZcclxuICAgICAgc3F1YXJlQXJyYXlbbWlkZGxlXVswXS51c2VkYnkgICAgIT09IFVTRURfQllfTk9ORSAmJlxyXG4gICAgICBzcXVhcmVBcnJheVttaWRkbGVdW2VkZ2VdLnVzZWRieSAhPT0gVVNFRF9CWV9OT05FICYmXHJcbiAgICAgIHNxdWFyZUFycmF5W2VkZ2VdWzBdLnVzZWRieSAgICAgICE9PSBVU0VEX0JZX05PTkUgJiZcclxuICAgICAgc3F1YXJlQXJyYXlbZWRnZV1bbWlkZGxlXS51c2VkYnkgIT09IFVTRURfQllfTk9ORSAmJlxyXG4gICAgICBzcXVhcmVBcnJheVtlZGdlXVtlZGdlXS51c2VkYnkgICAhPT0gVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgYW55TGVmdCA9IGZhbHNlOzsgLy8gTm8gZXNjYXBlIGhhdGNoZXMgbGVmdFxyXG4gICAgfVxyXG4gIH1cclxuICBjYXRjaChlKSB7XHJcbiAgICBhbGVydChgU29tZXRoaW5nIHdlaXJkIGluIEFueVVudXNlZEVzY2FwZUhhdGNoZXMsIHJhY2tzaXplPSR7cmFja3NpemV9YClcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gIH1cclxuICByZXR1cm4gYW55TGVmdDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=