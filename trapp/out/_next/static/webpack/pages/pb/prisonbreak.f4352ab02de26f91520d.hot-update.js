self["webpackHotUpdate_N_E"]("pages/pb/prisonbreak",{

/***/ "./lib/pb/buildExamineDataFromApidata.js":
/*!***********************************************!*\
  !*** ./lib/pb/buildExamineDataFromApidata.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildExamineDataFromApidata": function() { return /* binding */ buildExamineDataFromApidata; }
/* harmony export */ });
/* harmony import */ var _prisonBreakConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prisonBreakConstants */ "./lib/pb/prisonBreakConstants.js");
/* harmony import */ var _initialSquareArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialSquareArray */ "./lib/pb/initialSquareArray.js");
/* harmony import */ var _getRowColDirFromPos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getRowColDirFromPos */ "./lib/pb/getRowColDirFromPos.js");
/* module decorator */ module = __webpack_require__.hmd(module);



function buildExamineDataFromApidata(jApiGameData) {
  let snapshots = [];
  let gd = jApiGameData; // game data (json)

  let ptiles = "";
  let gtiles = "";
  let tiles = "";
  let squareArray = (0,_initialSquareArray__WEBPACK_IMPORTED_MODULE_1__.initialSquareArray)(gd.racksize);
  let moves = [];
  let rescues = 0;

  for (let index = 0; index < gd.events.length; index++) {
    const ev = gd.events[index];

    if (ev.ptiles) {
      ptiles = ev.ptiles;
    }

    if (ev.gtiles) {
      gtiles = ev.gtiles;
    }

    if (ev.tiles) {
      tiles = ev.tiles;
    }

    if (ev.type === _prisonBreakConstants__WEBPACK_IMPORTED_MODULE_0__.MOVE_TYPE_PLAY || ev.type === _prisonBreakConstants__WEBPACK_IMPORTED_MODULE_0__.MOVE_TYPE_SWAP || ev.type === _prisonBreakConstants__WEBPACK_IMPORTED_MODULE_0__.MOVE_TYPE_PASS) {
      let move = {
        by: ev.by,
        type: ev.type
      };

      if (ev.type === _prisonBreakConstants__WEBPACK_IMPORTED_MODULE_0__.MOVE_TYPE_PLAY) {
        move.mainword = ev.mainword;
        move.extrawords = ev.extrawords.split(",");
        move.pos = ev.pos;

        if (ev.by === _prisonBreakConstants__WEBPACK_IMPORTED_MODULE_0__.PARTY_TYPE_PRISONERS) {
          rescues = ev.rescues;
        }

        let rcd = (0,_getRowColDirFromPos__WEBPACK_IMPORTED_MODULE_2__.getRowColDirFromPos)(ev.pos);
        let row = rcd.row;
        let col = rcd.col;

        for (let tileindex = 0; tileindex < ev.mainword.length; tileindex++) {
          let squareArrayRow = squareArray[row];
          let squareArrayCell = squareArrayRow[col];

          if (squareArrayCell.usedby === _prisonBreakConstants__WEBPACK_IMPORTED_MODULE_0__.USED_BY_NONE) {
            squareArrayCell.usedby = ev.by;
            squareArrayCell.letter = ev.mainword[tileindex];
          }

          if (rcd.dir === _prisonBreakConstants__WEBPACK_IMPORTED_MODULE_0__.DIR_RIGHT) {
            col++;
          } else {
            row++;
          }
        }
      }

      moves.push(move);
    }

    snapshots.push({
      tiles: tiles.split(""),
      squareArray: JSON.parse(JSON.stringify(squareArray)),
      // Deep copy
      ptiles: ptiles.split(""),
      gtiles: gtiles.split(""),
      rescues: rescues,
      whoseturn: ev.whoseturn
    });
  }

  return {
    pname: gd.pname,
    // prisoners nickname
    gname: gd.gname,
    // guards nickname
    moves: moves,
    // move list
    racksize: gd.racksize,
    // rack size
    snapshots: snapshots // game data after each event

  };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BiL2J1aWxkRXhhbWluZURhdGFGcm9tQXBpZGF0YS5qcyJdLCJuYW1lcyI6WyJidWlsZEV4YW1pbmVEYXRhRnJvbUFwaWRhdGEiLCJqQXBpR2FtZURhdGEiLCJzbmFwc2hvdHMiLCJnZCIsInB0aWxlcyIsImd0aWxlcyIsInRpbGVzIiwic3F1YXJlQXJyYXkiLCJpbml0aWFsU3F1YXJlQXJyYXkiLCJyYWNrc2l6ZSIsIm1vdmVzIiwicmVzY3VlcyIsImluZGV4IiwiZXZlbnRzIiwibGVuZ3RoIiwiZXYiLCJ0eXBlIiwiTU9WRV9UWVBFX1BMQVkiLCJNT1ZFX1RZUEVfU1dBUCIsIk1PVkVfVFlQRV9QQVNTIiwibW92ZSIsImJ5IiwibWFpbndvcmQiLCJleHRyYXdvcmRzIiwic3BsaXQiLCJwb3MiLCJQQVJUWV9UWVBFX1BSSVNPTkVSUyIsInJjZCIsImdldFJvd0NvbERpckZyb21Qb3MiLCJyb3ciLCJjb2wiLCJ0aWxlaW5kZXgiLCJzcXVhcmVBcnJheVJvdyIsInNxdWFyZUFycmF5Q2VsbCIsInVzZWRieSIsIlVTRURfQllfTk9ORSIsImxldHRlciIsImRpciIsIkRJUl9SSUdIVCIsInB1c2giLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJ3aG9zZXR1cm4iLCJwbmFtZSIsImduYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLDJCQUFULENBQXFDQyxZQUFyQyxFQUFtRDtBQUN0RCxNQUFJQyxTQUFTLEdBQUcsRUFBaEI7QUFDQSxNQUFJQyxFQUFFLEdBQUdGLFlBQVQsQ0FGc0QsQ0FFL0I7O0FBQ3ZCLE1BQUlHLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFDQSxNQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBLE1BQUlDLFdBQVcsR0FBR0MsdUVBQWtCLENBQUNMLEVBQUUsQ0FBQ00sUUFBSixDQUFwQztBQUNBLE1BQUlD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QU0sQ0FBQ21CLEtBQVAsQ0FBYSxFQUFiLENBSkc7QUFLWGIsYUFBTyxFQUFFQSxPQUxFO0FBTVhnQyxlQUFTLEVBQUU1QixFQUFFLENBQUM0QjtBQU5ILEtBQWY7QUFRSDs7QUFDRCxTQUFPO0FBQ0hDLFNBQUssRUFBRXpDLEVBQUUsQ0FBQ3lDLEtBRFA7QUFDYztBQUNqQkMsU0FBSyxFQUFFMUMsRUFBRSxDQUFDMEMsS0FGUDtBQUVjO0FBQ2pCbkMsU0FBSyxFQUFFQSxLQUhKO0FBR1c7QUFDZEQsWUFBUSxFQUFFTixFQUFFLENBQUNNLFFBSlY7QUFJb0I7QUFDdkJQLGFBQVMsRUFBRUEsU0FMUixDQUtrQjs7QUFMbEIsR0FBUDtBQU9IIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BiL3ByaXNvbmJyZWFrLmY0MzUyYWIwMmRlMjZmOTE1MjBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBESVJfUklHSFQsIFBBUlRZX1RZUEVfUFJJU09ORVJTLCBVU0VEX0JZX05PTkUsIE1PVkVfVFlQRV9QQVNTLCBNT1ZFX1RZUEVfU1dBUCwgTU9WRV9UWVBFX1BMQVkgfSBmcm9tIFwiLi9wcmlzb25CcmVha0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBpbml0aWFsU3F1YXJlQXJyYXkgfSBmcm9tIFwiLi9pbml0aWFsU3F1YXJlQXJyYXlcIjtcclxuaW1wb3J0IHsgZ2V0Um93Q29sRGlyRnJvbVBvcyB9IGZyb20gXCIuL2dldFJvd0NvbERpckZyb21Qb3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZEV4YW1pbmVEYXRhRnJvbUFwaWRhdGEoakFwaUdhbWVEYXRhKSB7XHJcbiAgICBsZXQgc25hcHNob3RzID0gW107XHJcbiAgICBsZXQgZ2QgPSBqQXBpR2FtZURhdGE7IC8vIGdhbWUgZGF0YSAoanNvbilcclxuICAgIGxldCBwdGlsZXMgPSBcIlwiO1xyXG4gICAgbGV0IGd0aWxlcyA9IFwiXCI7XHJcbiAgICBsZXQgdGlsZXMgPSBcIlwiO1xyXG4gICAgbGV0IHNxdWFyZUFycmF5ID0gaW5pdGlhbFNxdWFyZUFycmF5KGdkLnJhY2tzaXplKTtcclxuICAgIGxldCBtb3ZlcyA9IFtdO1xyXG4gICAgbGV0IHJlc2N1ZXMgPSAwO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGdkLmV2ZW50cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBjb25zdCBldiA9IGdkLmV2ZW50c1tpbmRleF07XHJcbiAgICAgICAgaWYgKGV2LnB0aWxlcykge1xyXG4gICAgICAgICAgICBwdGlsZXMgPSBldi5wdGlsZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldi5ndGlsZXMpIHtcclxuICAgICAgICAgICAgZ3RpbGVzID0gZXYuZ3RpbGVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXYudGlsZXMpIHtcclxuICAgICAgICAgICAgdGlsZXMgPSBldi50aWxlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2LnR5cGUgPT09IE1PVkVfVFlQRV9QTEFZIHx8IGV2LnR5cGUgPT09IE1PVkVfVFlQRV9TV0FQIHx8IGV2LnR5cGUgPT09IE1PVkVfVFlQRV9QQVNTKSB7XHJcbiAgICAgICAgICAgIGxldCBtb3ZlID0ge1xyXG4gICAgICAgICAgICAgICAgYnk6IGV2LmJ5LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogZXYudHlwZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoZXYudHlwZSA9PT0gTU9WRV9UWVBFX1BMQVkpIHtcclxuICAgICAgICAgICAgICAgIG1vdmUubWFpbndvcmQgPSBldi5tYWlud29yZDtcclxuICAgICAgICAgICAgICAgIG1vdmUuZXh0cmF3b3JkcyA9IGV2LmV4dHJhd29yZHMuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICAgICAgbW92ZS5wb3MgPSBldi5wb3M7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXYuYnkgPT09IFBBUlRZX1RZUEVfUFJJU09ORVJTKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzY3VlcyA9IGV2LnJlc2N1ZXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgcmNkID0gZ2V0Um93Q29sRGlyRnJvbVBvcyhldi5wb3MpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IHJjZC5yb3c7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gcmNkLmNvbDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHRpbGVpbmRleCA9IDA7IHRpbGVpbmRleCA8IGV2Lm1haW53b3JkLmxlbmd0aDsgdGlsZWluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3F1YXJlQXJyYXlSb3cgPSBzcXVhcmVBcnJheVtyb3ddO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcXVhcmVBcnJheUNlbGwgPSBzcXVhcmVBcnJheVJvd1tjb2xdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzcXVhcmVBcnJheUNlbGwudXNlZGJ5ID09PSBVU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlQXJyYXlDZWxsLnVzZWRieSA9IGV2LmJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVBcnJheUNlbGwubGV0dGVyID0gZXYubWFpbndvcmRbdGlsZWluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJjZC5kaXIgPT09IERJUl9SSUdIVCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2wrKztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3crKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbW92ZXMucHVzaChtb3ZlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc25hcHNob3RzLnB1c2goe1xyXG4gICAgICAgICAgICB0aWxlczogdGlsZXMuc3BsaXQoXCJcIiksXHJcbiAgICAgICAgICAgIHNxdWFyZUFycmF5OiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNxdWFyZUFycmF5KSksIC8vIERlZXAgY29weVxyXG4gICAgICAgICAgICBwdGlsZXM6IHB0aWxlcy5zcGxpdChcIlwiKSxcclxuICAgICAgICAgICAgZ3RpbGVzOiBndGlsZXMuc3BsaXQoXCJcIiksXHJcbiAgICAgICAgICAgIHJlc2N1ZXM6IHJlc2N1ZXMsXHJcbiAgICAgICAgICAgIHdob3NldHVybjogZXYud2hvc2V0dXJuICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwbmFtZTogZ2QucG5hbWUsIC8vIHByaXNvbmVycyBuaWNrbmFtZVxyXG4gICAgICAgIGduYW1lOiBnZC5nbmFtZSwgLy8gZ3VhcmRzIG5pY2tuYW1lXHJcbiAgICAgICAgbW92ZXM6IG1vdmVzLCAvLyBtb3ZlIGxpc3RcclxuICAgICAgICByYWNrc2l6ZTogZ2QucmFja3NpemUsIC8vIHJhY2sgc2l6ZVxyXG4gICAgICAgIHNuYXBzaG90czogc25hcHNob3RzIC8vIGdhbWUgZGF0YSBhZnRlciBlYWNoIGV2ZW50XHJcbiAgICB9O1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9