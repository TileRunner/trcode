self["webpackHotUpdate_N_E"]("pages/pb/prisonbreak",{

/***/ "./pages/pb/examine.js":
/*!*****************************!*\
  !*** ./pages/pb/examine.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pb_board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pb/board */ "./pages/pb/board.js");
/* harmony import */ var _pb_unseenTilesSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pb/unseenTilesSection */ "./pages/pb/unseenTilesSection.js");
/* harmony import */ var _pb_movesSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pb/movesSection */ "./pages/pb/movesSection.js");
/* harmony import */ var _pb_rescuesSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pb/rescuesSection */ "./pages/pb/rescuesSection.js");
/* harmony import */ var _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/pb/prisonBreakConstants */ "./lib/pb/prisonBreakConstants.js");
/* harmony import */ var _lib_pb_buildExamineDataFromApidata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/pb/buildExamineDataFromApidata */ "./lib/pb/buildExamineDataFromApidata.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\pb\\examine.js",
    _s = $RefreshSig$();








 // I am setting up a default skeleton so the build does not try reference properties of undefined objects

const Examine = ({
  client,
  wsmessage,
  gameid
}) => {
  _s();

  const {
    0: snapshotIndex,
    1: setSnapshotIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // Start at the end of the first snapshot (tiles picked, no moves made)

  const {
    0: examineData,
    1: setExamineData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    pname: 'tbd',
    gname: 'tbd',
    moves: [],
    snapshots: [{
      tiles: [],
      ptiles: [],
      gtiles: [],
      rescues: 0,
      whoseturn: 'P'
    }]
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // This code executes the first time Examiner is used only
    client.send({
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      sender: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TYPE_EXAMINER,
      func: "startExamining" // this will make server send us the game data

    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let msg = wsmessage;
    if (msg !== '') processGameMessage(msg);
  }, [wsmessage]);

  function processGameMessage(message) {
    let messageData = JSON.parse(message);

    if (messageData.gameid === gameid && messageData.type === "pb") {
      // This instance of a prison break game
      if (messageData.func === "providegamedata") {
        let ed = (0,_lib_pb_buildExamineDataFromApidata__WEBPACK_IMPORTED_MODULE_8__.buildExamineDataFromApidata)(messageData.apidata);
        setExamineData(ed);
      }
    }
  }

  const fastRewind = () => {
    setSnapshotIndex(0);
  };

  const nextMove = () => {
    if (snapshotIndex + 1 < examineData.snapshots.length) {
      let nextSnapshotIndex = snapshotIndex + 1;
      setSnapshotIndex(nextSnapshotIndex);
    }
  };

  const prevMove = () => {
    if (snapshotIndex - 1 > -1) {
      let prevSnapshotIndex = snapshotIndex - 1;
      setSnapshotIndex(prevSnapshotIndex);
    }
  };

  const fastForward = () => {
    let newSnapshotIndex = examineData.snapshots.length - 1;
    setSnapshotIndex(newSnapshotIndex);
  };

  const isPrisonersTurn = () => {
    return examineData.snapshots[snapshotIndex].whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.WHOSE_TURN_PRISONERS;
  };

  const isGuardsTurn = () => {
    return examineData.snapshots[snapshotIndex].whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.WHOSE_TURN_GUARDS;
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "prisonbreak",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-display-container w3-teal topBarHeight",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-middle",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "myHeadingFont",
          children: "Prison Break"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-topleft w3-black topBarCorner commonFontFamily",
        children: ["Game id: ", gameid]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-bottomleft w3-orange topBarCorner commonFontFamily",
        children: ["Prisoners: ", examineData.pname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-topright w3-black topBarCorner commonFontFamily",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "../../",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              "data-toggle": "tooltip",
              title: "Home",
              children: "home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 18
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-bottomright w3-orange topBarCorner commonFontFamily",
        children: ["Guards: ", examineData.gname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col pbTileAndMovesOuter",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_unseenTilesSection__WEBPACK_IMPORTED_MODULE_4__.default, {
          tiles: examineData.snapshots[snapshotIndex].tiles,
          othertiles: isPrisonersTurn() ? examineData.snapshots[snapshotIndex].gtiles : isGuardsTurn() ? examineData.snapshots[snapshotIndex].ptiles : []
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_movesSection__WEBPACK_IMPORTED_MODULE_5__.default, {
          moves: examineData.moves.slice(0, snapshotIndex)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col pbPlayerOuterSection",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "pbPlayerInnerSection",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbPlayerTitle",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_ICON_PRISONERS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 44
            }, undefined), "\xA0", _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TITLE_PRISONERS, "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_ICON_PRISONERS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 139
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbTilerack",
            children: [examineData.snapshots[snapshotIndex].whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TYPE_PRISONERS && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "w3-black",
              onClick: nextMove,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "material-icons",
                children: "arrow_right"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 17
            }, undefined), examineData.snapshots[snapshotIndex].ptiles.map((t, ti) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExaminerTileRack, {
              participant: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TYPE_PRISONERS,
              tilevalue: isGuardsTurn() ? '*' : t,
              tileindex: ti
            }, `ObserverPrisonersRackTile${ti}`, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 19
            }, undefined))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbPlayerTitle",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_ICON_GUARDS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 44
            }, undefined), "\xA0", _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TITLE_GUARDS, "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_ICON_GUARDS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 133
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbTilerack",
            children: [examineData.snapshots[snapshotIndex].whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TYPE_GUARDS && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "w3-black w3-round",
              onClick: nextMove,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "material-icons",
                children: "arrow_right"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 19
            }, undefined), examineData.snapshots[snapshotIndex].gtiles.map((t, ti) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExaminerTileRack, {
              participant: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TYPE_GUARDS,
              tilevalue: isPrisonersTurn() ? '*' : t,
              tileindex: ti
            }, `ObserverGuardsRackTile${ti}`, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 21
            }, undefined))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_board__WEBPACK_IMPORTED_MODULE_3__.default, {
            squareArray: examineData.snapshots[snapshotIndex].squareArray,
            rcd: [-1, -1, _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.DIR_NONE],
            onClick: () => {}
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_rescuesSection__WEBPACK_IMPORTED_MODULE_6__.default, {
          rescues: examineData.snapshots[snapshotIndex].rescues
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-display-container w3-teal topBarHeight",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-middle commonFontFamily",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "w3-black w3-round",
            onClick: fastRewind,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: "fast_rewind"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "w3-black w3-round",
            onClick: prevMove,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: "arrow_left"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "w3-black w3-round",
            onClick: nextMove,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: "arrow_right"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "w3-black w3-round",
            onClick: fastForward,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: "fast_forward"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 7
  }, undefined);
};

_s(Examine, "JL/83gXZ/X/6VL0UltuVLYSw0JM=");

_c = Examine;

const ExaminerTileRack = props => {
  const selectedUnselected = "Unselected ";
  const uNotU = props.tilevalue === "Q" ? "u " : "";
  const tileclass = "pbTileOnRack " + selectedUnselected + uNotU + props.participant;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: tileclass,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "pbTileOnRackText",
      children: props.tilevalue
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 11
    }, undefined)
  }, props.tileindex, false, {
    fileName: _jsxFileName,
    lineNumber: 178,
    columnNumber: 7
  }, undefined);
};

_c2 = ExaminerTileRack;
/* harmony default export */ __webpack_exports__["default"] = (Examine);

var _c, _c2;

$RefreshReg$(_c, "Examine");
$RefreshReg$(_c2, "ExaminerTileRack");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvZXhhbWluZS5qcyJdLCJuYW1lcyI6WyJFeGFtaW5lIiwiY2xpZW50Iiwid3NtZXNzYWdlIiwiZ2FtZWlkIiwic25hcHNob3RJbmRleCIsInNldFNuYXBzaG90SW5kZXgiLCJ1c2VTdGF0ZSIsImV4YW1pbmVEYXRhIiwic2V0RXhhbWluZURhdGEiLCJwbmFtZSIsImduYW1lIiwibW92ZXMiLCJzbmFwc2hvdHMiLCJ0aWxlcyIsInB0aWxlcyIsImd0aWxlcyIsInJlc2N1ZXMiLCJ3aG9zZXR1cm4iLCJ1c2VFZmZlY3QiLCJzZW5kIiwidHlwZSIsInNlbmRlciIsImMiLCJmdW5jIiwibXNnIiwicHJvY2Vzc0dhbWVNZXNzYWdlIiwibWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiSlNPTiIsInBhcnNlIiwiZWQiLCJidWlsZEV4YW1pbmVEYXRhRnJvbUFwaWRhdGEiLCJhcGlkYXRhIiwiZmFzdFJld2luZCIsIm5leHRNb3ZlIiwibGVuZ3RoIiwibmV4dFNuYXBzaG90SW5kZXgiLCJwcmV2TW92ZSIsInByZXZTbmFwc2hvdEluZGV4IiwiZmFzdEZvcndhcmQiLCJuZXdTbmFwc2hvdEluZGV4IiwiaXNQcmlzb25lcnNUdXJuIiwiaXNHdWFyZHNUdXJuIiwic2xpY2UiLCJQQVJUWV9JQ09OX1BSSVNPTkVSUyIsIm1hcCIsInQiLCJ0aSIsIlBBUlRZX0lDT05fR1VBUkRTIiwic3F1YXJlQXJyYXkiLCJFeGFtaW5lclRpbGVSYWNrIiwicHJvcHMiLCJzZWxlY3RlZFVuc2VsZWN0ZWQiLCJ1Tm90VSIsInRpbGV2YWx1ZSIsInRpbGVjbGFzcyIsInBhcnRpY2lwYW50IiwidGlsZWluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxNQUFNQSxPQUFPLEdBQUcsQ0FBQztBQUFFQyxRQUFGO0FBQVVDLFdBQVY7QUFB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QUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBLGdCQUFtQ0osS0FBSyxDQUFDRztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkosS0FDU0gsS0FBSyxDQUFDTSxTQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVFELENBWkQ7O01BQU1QLGdCO0FBY04sK0RBQWVsRCxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BiL3ByaXNvbmJyZWFrLjJiNzk3ZThkNjNiYjdkMGU3OWExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBCb2FyZCBmcm9tICcuLi9wYi9ib2FyZCc7XHJcbmltcG9ydCBTaG93VW5zZWVuVGlsZXMgZnJvbSAnLi4vcGIvdW5zZWVuVGlsZXNTZWN0aW9uJztcclxuaW1wb3J0IFNob3dNb3ZlcyBmcm9tICcuLi9wYi9tb3Zlc1NlY3Rpb24nO1xyXG5pbXBvcnQgU2hvd1Jlc2N1ZXMgZnJvbSAnLi4vcGIvcmVzY3Vlc1NlY3Rpb24nO1xyXG5pbXBvcnQgKiBhcyBjIGZyb20gJy4uLy4uL2xpYi9wYi9wcmlzb25CcmVha0NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGJ1aWxkRXhhbWluZURhdGFGcm9tQXBpZGF0YSB9IGZyb20gXCIuLi8uLi9saWIvcGIvYnVpbGRFeGFtaW5lRGF0YUZyb21BcGlkYXRhXCI7XHJcblxyXG4vLyBJIGFtIHNldHRpbmcgdXAgYSBkZWZhdWx0IHNrZWxldG9uIHNvIHRoZSBidWlsZCBkb2VzIG5vdCB0cnkgcmVmZXJlbmNlIHByb3BlcnRpZXMgb2YgdW5kZWZpbmVkIG9iamVjdHNcclxuY29uc3QgRXhhbWluZSA9ICh7IGNsaWVudCwgd3NtZXNzYWdlLCBnYW1laWQgfSkgPT4ge1xyXG4gICAgY29uc3QgW3NuYXBzaG90SW5kZXgsIHNldFNuYXBzaG90SW5kZXhdID0gdXNlU3RhdGUoMCk7IC8vIFN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGZpcnN0IHNuYXBzaG90ICh0aWxlcyBwaWNrZWQsIG5vIG1vdmVzIG1hZGUpXHJcbiAgICBjb25zdCBbZXhhbWluZURhdGEsIHNldEV4YW1pbmVEYXRhXSA9IHVzZVN0YXRlKHtwbmFtZTogJ3RiZCcsIGduYW1lOiAndGJkJywgbW92ZXM6IFtdLCBzbmFwc2hvdHM6W3t0aWxlczogW10sIHB0aWxlczogW10sIGd0aWxlczogW10sIHJlc2N1ZXM6IDAsIHdob3NldHVybjogJ1AnfV19KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyAvLyBUaGlzIGNvZGUgZXhlY3V0ZXMgdGhlIGZpcnN0IHRpbWUgRXhhbWluZXIgaXMgdXNlZCBvbmx5XHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgICAgICBzZW5kZXI6IGMuUEFSVFlfVFlQRV9FWEFNSU5FUixcclxuICAgICAgICAgICAgICBmdW5jOiBcInN0YXJ0RXhhbWluaW5nXCIgLy8gdGhpcyB3aWxsIG1ha2Ugc2VydmVyIHNlbmQgdXMgdGhlIGdhbWUgZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH0sIFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IG1zZyA9IHdzbWVzc2FnZTtcclxuICAgICAgICBpZiAobXNnICE9PSAnJykgcHJvY2Vzc0dhbWVNZXNzYWdlKG1zZyk7ICAgICAgXHJcbiAgICB9LFt3c21lc3NhZ2VdKVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0dhbWVNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5nYW1laWQgPT09IGdhbWVpZCAmJiBtZXNzYWdlRGF0YS50eXBlID09PSBcInBiXCIpIHsgLy8gVGhpcyBpbnN0YW5jZSBvZiBhIHByaXNvbiBicmVhayBnYW1lXHJcbiAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInByb3ZpZGVnYW1lZGF0YVwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWQgPSBidWlsZEV4YW1pbmVEYXRhRnJvbUFwaWRhdGEobWVzc2FnZURhdGEuYXBpZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRFeGFtaW5lRGF0YShlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmFzdFJld2luZCA9ICgpID0+IHtcclxuICAgICAgc2V0U25hcHNob3RJbmRleCgwKTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IG5leHRNb3ZlID0gKCkgPT4ge1xyXG4gICAgICBpZiAoc25hcHNob3RJbmRleCArIDEgPCBleGFtaW5lRGF0YS5zbmFwc2hvdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgbGV0IG5leHRTbmFwc2hvdEluZGV4ID0gc25hcHNob3RJbmRleCArIDE7XHJcbiAgICAgICAgc2V0U25hcHNob3RJbmRleChuZXh0U25hcHNob3RJbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgcHJldk1vdmUgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChzbmFwc2hvdEluZGV4IC0gMSA+IC0xKSB7XHJcbiAgICAgICAgbGV0IHByZXZTbmFwc2hvdEluZGV4ID0gc25hcHNob3RJbmRleCAtIDE7XHJcbiAgICAgICAgc2V0U25hcHNob3RJbmRleChwcmV2U25hcHNob3RJbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmYXN0Rm9yd2FyZCA9ICgpID0+IHtcclxuICAgICAgbGV0IG5ld1NuYXBzaG90SW5kZXggPSBleGFtaW5lRGF0YS5zbmFwc2hvdHMubGVuZ3RoIC0gMTtcclxuICAgICAgc2V0U25hcHNob3RJbmRleChuZXdTbmFwc2hvdEluZGV4KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgaXNQcmlzb25lcnNUdXJuID0gKCkgPT4ge1xyXG4gICAgICByZXR1cm4gKGV4YW1pbmVEYXRhLnNuYXBzaG90c1tzbmFwc2hvdEluZGV4XS53aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlzR3VhcmRzVHVybiA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIChleGFtaW5lRGF0YS5zbmFwc2hvdHNbc25hcHNob3RJbmRleF0ud2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fR1VBUkRTKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaXNvbmJyZWFrXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWNvbnRhaW5lciB3My10ZWFsIHRvcEJhckhlaWdodFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LW1pZGRsZVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXlIZWFkaW5nRm9udFwiPlByaXNvbiBCcmVhazwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS10b3BsZWZ0IHczLWJsYWNrIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIEdhbWUgaWQ6IHtnYW1laWR9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1ib3R0b21sZWZ0IHczLW9yYW5nZSB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICBQcmlzb25lcnM6IHsgZXhhbWluZURhdGEucG5hbWUgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktdG9wcmlnaHQgdzMtYmxhY2sgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIuLi8uLi9cIn0+XHJcbiAgICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktYm90dG9tcmlnaHQgdzMtb3JhbmdlIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIEd1YXJkczogeyBleGFtaW5lRGF0YS5nbmFtZSB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGJUaWxlQW5kTW92ZXNPdXRlclwiPlxyXG4gICAgICAgICAgICAgIDxTaG93VW5zZWVuVGlsZXNcclxuICAgICAgICAgICAgICAgIHRpbGVzPXtleGFtaW5lRGF0YS5zbmFwc2hvdHNbc25hcHNob3RJbmRleF0udGlsZXN9XHJcbiAgICAgICAgICAgICAgICBvdGhlcnRpbGVzPXsgaXNQcmlzb25lcnNUdXJuKCkgPyBleGFtaW5lRGF0YS5zbmFwc2hvdHNbc25hcHNob3RJbmRleF0uZ3RpbGVzXHJcbiAgICAgICAgICAgICAgICA6IGlzR3VhcmRzVHVybigpID8gZXhhbWluZURhdGEuc25hcHNob3RzW3NuYXBzaG90SW5kZXhdLnB0aWxlc1xyXG4gICAgICAgICAgICAgICAgOiBbXSB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxTaG93TW92ZXMgbW92ZXM9e2V4YW1pbmVEYXRhLm1vdmVzLnNsaWNlKDAsc25hcHNob3RJbmRleCl9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGJQbGF5ZXJPdXRlclNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlBsYXllcklubmVyU2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUGxheWVyVGl0bGVcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntjLlBBUlRZX0lDT05fUFJJU09ORVJTfTwvaT4mbmJzcDt7Yy5QQVJUWV9USVRMRV9QUklTT05FUlN9Jm5ic3A7PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57Yy5QQVJUWV9JQ09OX1BSSVNPTkVSU308L2k+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgICAgICAgIHtleGFtaW5lRGF0YS5zbmFwc2hvdHNbc25hcHNob3RJbmRleF0ud2hvc2V0dXJuID09PSBjLlBBUlRZX1RZUEVfUFJJU09ORVJTICYmXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInczLWJsYWNrXCIgb25DbGljaz17bmV4dE1vdmV9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFycm93X3JpZ2h0PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHtleGFtaW5lRGF0YS5zbmFwc2hvdHNbc25hcHNob3RJbmRleF0ucHRpbGVzLm1hcCgodCwgdGkpID0+XHJcbiAgICAgICAgICAgICAgICAgIDxFeGFtaW5lclRpbGVSYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BPYnNlcnZlclByaXNvbmVyc1JhY2tUaWxlJHt0aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnQ9e2MuUEFSVFlfVFlQRV9QUklTT05FUlN9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aWxldmFsdWU9eyBpc0d1YXJkc1R1cm4oKSA/ICcqJyA6IHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aWxlaW5kZXg9e3RpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUGxheWVyVGl0bGVcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntjLlBBUlRZX0lDT05fR1VBUkRTfTwvaT4mbmJzcDt7Yy5QQVJUWV9USVRMRV9HVUFSRFN9Jm5ic3A7PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57Yy5QQVJUWV9JQ09OX0dVQVJEU308L2k+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgICAgICAgICAge2V4YW1pbmVEYXRhLnNuYXBzaG90c1tzbmFwc2hvdEluZGV4XS53aG9zZXR1cm4gPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMgJiZcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1ibGFjayB3My1yb3VuZFwiIG9uQ2xpY2s9e25leHRNb3ZlfT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFycm93X3JpZ2h0PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtleGFtaW5lRGF0YS5zbmFwc2hvdHNbc25hcHNob3RJbmRleF0uZ3RpbGVzLm1hcCgodCwgdGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEV4YW1pbmVyVGlsZVJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgT2JzZXJ2ZXJHdWFyZHNSYWNrVGlsZSR7dGl9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnQ9e2MuUEFSVFlfVFlQRV9HVUFSRFN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGV2YWx1ZT17aXNQcmlzb25lcnNUdXJuKCkgPyAnKicgOiB0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlaW5kZXg9e3RpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICAgICAgICBzcXVhcmVBcnJheT17ZXhhbWluZURhdGEuc25hcHNob3RzW3NuYXBzaG90SW5kZXhdLnNxdWFyZUFycmF5fVxyXG4gICAgICAgICAgICAgICAgICByY2Q9e1stMSwtMSxjLkRJUl9OT05FXX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge319XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICA8U2hvd1Jlc2N1ZXMgcmVzY3Vlcz17ZXhhbWluZURhdGEuc25hcHNob3RzW3NuYXBzaG90SW5kZXhdLnJlc2N1ZXN9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktY29udGFpbmVyIHczLXRlYWwgdG9wQmFySGVpZ2h0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktbWlkZGxlIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYmxhY2sgdzMtcm91bmRcIiBvbkNsaWNrPXtmYXN0UmV3aW5kfT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5mYXN0X3Jld2luZDwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1ibGFjayB3My1yb3VuZFwiIG9uQ2xpY2s9e3ByZXZNb3ZlfT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hcnJvd19sZWZ0PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInczLWJsYWNrIHczLXJvdW5kXCIgb25DbGljaz17bmV4dE1vdmV9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFycm93X3JpZ2h0PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInczLWJsYWNrIHczLXJvdW5kXCIgb25DbGljaz17ZmFzdEZvcndhcmR9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmZhc3RfZm9yd2FyZDwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBFeGFtaW5lclRpbGVSYWNrID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRVbnNlbGVjdGVkID0gXCJVbnNlbGVjdGVkIFwiO1xyXG4gIGNvbnN0IHVOb3RVID0gcHJvcHMudGlsZXZhbHVlID09PSBcIlFcIiA/IFwidSBcIiA6IFwiXCI7XHJcbiAgY29uc3QgdGlsZWNsYXNzID0gXCJwYlRpbGVPblJhY2sgXCIgKyBzZWxlY3RlZFVuc2VsZWN0ZWQgKyB1Tm90VSArIHByb3BzLnBhcnRpY2lwYW50O1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICAgIGtleT17cHJvcHMudGlsZWluZGV4fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXt0aWxlY2xhc3N9XHJcbiAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlT25SYWNrVGV4dFwiPntwcm9wcy50aWxldmFsdWV9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4YW1pbmU7Il0sInNvdXJjZVJvb3QiOiIifQ==