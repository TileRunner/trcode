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
          lineNumber: 67,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-topleft w3-black topBarCorner commonFontFamily",
        children: ["Game id: ", gameid]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-bottomleft w3-orange topBarCorner commonFontFamily",
        children: ["Prisoners: ", examineData.pname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
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
              lineNumber: 77,
              columnNumber: 18
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-bottomright w3-orange topBarCorner commonFontFamily",
        children: ["Guards: ", examineData.gname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col pbTileAndMovesOuter",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_unseenTilesSection__WEBPACK_IMPORTED_MODULE_4__.default, {
          tiles: examineData.snapshots[snapshotIndex].tiles,
          othertiles: [] // Examiners see both racks so nothing to exclude from tilebag as unseen

        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_movesSection__WEBPACK_IMPORTED_MODULE_5__.default, {
          moves: examineData.moves
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
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
              lineNumber: 94,
              columnNumber: 44
            }, undefined), "\xA0", _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TITLE_PRISONERS, "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_ICON_PRISONERS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 139
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbTilerack",
            children: [examineData.snapshots[snapshotIndex].whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TYPE_PRISONERS && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "w3-green w3-round",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "material-icons",
                children: "arrow_right"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 131
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 95
            }, undefined), examineData.snapshots[snapshotIndex].ptiles.map((t, ti) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExaminerTileRack, {
              participant: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TYPE_PRISONERS,
              tilevalue: t,
              tileindex: ti
            }, `ObserverPrisonersRackTile${ti}`, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 21
            }, undefined))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbPlayerTitle",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_ICON_GUARDS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 44
            }, undefined), "\xA0", _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TITLE_GUARDS, "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_ICON_GUARDS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 133
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbTilerack",
            children: [examineData.snapshots[snapshotIndex].whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TYPE_GUARDS && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "w3-green w3-round",
              onClick: nextMove,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "material-icons",
                children: "arrow_right"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 19
            }, undefined), examineData.snapshots[snapshotIndex].gtiles.map((t, ti) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExaminerTileRack, {
              participant: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TYPE_GUARDS,
              tilevalue: t,
              tileindex: ti
            }, `ObserverGuardsRackTile${ti}`, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 21
            }, undefined))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
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
            lineNumber: 126,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_rescuesSection__WEBPACK_IMPORTED_MODULE_6__.default, {
          rescues: examineData.snapshots[snapshotIndex].rescues
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
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
              lineNumber: 141,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "w3-black w3-round",
            onClick: prevMove,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: "arrow_left"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "pbActionButton",
            onClick: nextMove,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: "arrow_right"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "w3-black w3-round",
            onClick: fastForward,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: "fast_forward"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
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
      lineNumber: 168,
      columnNumber: 11
    }, undefined)
  }, props.tileindex, false, {
    fileName: _jsxFileName,
    lineNumber: 164,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvZXhhbWluZS5qcyJdLCJuYW1lcyI6WyJFeGFtaW5lIiwiY2xpZW50Iiwid3NtZXNzYWdlIiwiZ2FtZWlkIiwic25hcHNob3RJbmRleCIsInNldFNuYXBzaG90SW5kZXgiLCJ1c2VTdGF0ZSIsImV4YW1pbmVEYXRhIiwic2V0RXhhbWluZURhdGEiLCJwbmFtZSIsImduYW1lIiwibW92ZXMiLCJzbmFwc2hvdHMiLCJ0aWxlcyIsInB0aWxlcyIsImd0aWxlcyIsInJlc2N1ZXMiLCJ3aG9zZXR1cm4iLCJ1c2VFZmZlY3QiLCJzZW5kIiwidHlwZSIsInNlbmRlciIsImMiLCJmdW5jIiwibXNnIiwicHJvY2Vzc0dhbWVNZXNzYWdlIiwibWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiSlNPTiIsInBhcnNlIiwiZWQiLCJidWlsZEV4YW1pbmVEYXRhRnJvbUFwaWRhdGEiLCJhcGlkYXRhIiwiZmFzdFJld2luZCIsIm5leHRNb3ZlIiwibGVuZ3RoIiwibmV4dFNuYXBzaG90SW5kZXgiLCJwcmV2TW92ZSIsInByZXZTbmFwc2hvdEluZGV4IiwiZmFzdEZvcndhcmQiLCJuZXdTbmFwc2hvdEluZGV4IiwiUEFSVFlfSUNPTl9QUklTT05FUlMiLCJtYXAiLCJ0IiwidGkiLCJQQVJUWV9JQ09OX0dVQVJEUyIsInNxdWFyZUFycmF5IiwiRXhhbWluZXJUaWxlUmFjayIsInByb3BzIiwic2VsZWN0ZWRVbnNlbGVjdGVkIiwidU5vdFUiLCJ0aWxldmFsdWUiLCJ0aWxlY2xhc3MiLCJwYXJ0aWNpcGFudCIsInRpbGVpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsTUFBTUEsT0FBTyxHQUFHLENBQUM7QUFBRUMsUUFBRjtBQUFVQyxXQUFWO0FBQXFCQztBQUFyQixDQUFELEtBQW1DO0FBQUE7O0FBQy9DLFFBQU07QUFB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QUFBQTtBQUFBO0FBQUEsdUJBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBOEZILENBbEpEOztHQUFNdkMsTzs7S0FBQUEsTzs7QUFvSk4sTUFBTStDLGdCQUFnQixHQUFJQyxLQUFELElBQVc7QUFDbEMsUUFBTUMsa0JBQWtCLEdBQUcsYUFBM0I7QUFDQSxRQUFNQyxLQUFLLEdBQUdGLEtBQUssQ0FBQ0csU0FBTixLQUFvQixHQUFwQixHQUEwQixJQUExQixHQUFpQyxFQUEvQztBQUNBLFFBQU1DLFNBQVMsR0FBRyxrQkFBa0JILGtCQUFsQixHQUF1Q0MsS0FBdkMsR0FBK0NGLEtBQUssQ0FBQ0ssV0FBdkU7QUFDQSxzQkFDSTtBQUVJLGFBQVMsRUFBRUQsU0FGZjtBQUFBLDJCQUlJO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsZ0JBQW1DSixLQUFLLENBQUNHO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSixLQUNTSCxLQUFLLENBQUNNLFNBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBUUQsQ0FaRDs7TUFBTVAsZ0I7QUFjTiwrREFBZS9DLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGIvcHJpc29uYnJlYWsuZTIzOGJkYjQwM2RlZjNhMzNhZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEJvYXJkIGZyb20gJy4uL3BiL2JvYXJkJztcclxuaW1wb3J0IFNob3dVbnNlZW5UaWxlcyBmcm9tICcuLi9wYi91bnNlZW5UaWxlc1NlY3Rpb24nO1xyXG5pbXBvcnQgU2hvd01vdmVzIGZyb20gJy4uL3BiL21vdmVzU2VjdGlvbic7XHJcbmltcG9ydCBTaG93UmVzY3VlcyBmcm9tICcuLi9wYi9yZXNjdWVzU2VjdGlvbic7XHJcbmltcG9ydCAqIGFzIGMgZnJvbSAnLi4vLi4vbGliL3BiL3ByaXNvbkJyZWFrQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgYnVpbGRFeGFtaW5lRGF0YUZyb21BcGlkYXRhIH0gZnJvbSBcIi4uLy4uL2xpYi9wYi9idWlsZEV4YW1pbmVEYXRhRnJvbUFwaWRhdGFcIjtcclxuXHJcbi8vIEkgYW0gc2V0dGluZyB1cCBhIGRlZmF1bHQgc2tlbGV0b24gc28gdGhlIGJ1aWxkIGRvZXMgbm90IHRyeSByZWZlcmVuY2UgcHJvcGVydGllcyBvZiB1bmRlZmluZWQgb2JqZWN0c1xyXG5jb25zdCBFeGFtaW5lID0gKHsgY2xpZW50LCB3c21lc3NhZ2UsIGdhbWVpZCB9KSA9PiB7XHJcbiAgICBjb25zdCBbc25hcHNob3RJbmRleCwgc2V0U25hcHNob3RJbmRleF0gPSB1c2VTdGF0ZSgwKTsgLy8gU3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgZmlyc3Qgc25hcHNob3QgKHRpbGVzIHBpY2tlZCwgbm8gbW92ZXMgbWFkZSlcclxuICAgIGNvbnN0IFtleGFtaW5lRGF0YSwgc2V0RXhhbWluZURhdGFdID0gdXNlU3RhdGUoe3BuYW1lOiAndGJkJywgZ25hbWU6ICd0YmQnLCBtb3ZlczogW10sIHNuYXBzaG90czpbe3RpbGVzOiBbXSwgcHRpbGVzOiBbXSwgZ3RpbGVzOiBbXSwgcmVzY3VlczogMCwgd2hvc2V0dXJuOiAnUCd9XX0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IC8vIFRoaXMgY29kZSBleGVjdXRlcyB0aGUgZmlyc3QgdGltZSBFeGFtaW5lciBpcyB1c2VkIG9ubHlcclxuICAgICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgICAgIHNlbmRlcjogYy5QQVJUWV9UWVBFX0VYQU1JTkVSLFxyXG4gICAgICAgICAgICAgIGZ1bmM6IFwic3RhcnRFeGFtaW5pbmdcIiAvLyB0aGlzIHdpbGwgbWFrZSBzZXJ2ZXIgc2VuZCB1cyB0aGUgZ2FtZSBkYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfSwgW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgbXNnID0gd3NtZXNzYWdlO1xyXG4gICAgICAgIGlmIChtc2cgIT09ICcnKSBwcm9jZXNzR2FtZU1lc3NhZ2UobXNnKTsgICAgICBcclxuICAgIH0sW3dzbWVzc2FnZV0pXHJcbiAgXHJcbiAgICBmdW5jdGlvbiBwcm9jZXNzR2FtZU1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICAgIGxldCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmdhbWVpZCA9PT0gZ2FtZWlkICYmIG1lc3NhZ2VEYXRhLnR5cGUgPT09IFwicGJcIikgeyAvLyBUaGlzIGluc3RhbmNlIG9mIGEgcHJpc29uIGJyZWFrIGdhbWVcclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwicHJvdmlkZWdhbWVkYXRhXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlZCA9IGJ1aWxkRXhhbWluZURhdGFGcm9tQXBpZGF0YShtZXNzYWdlRGF0YS5hcGlkYXRhKTtcclxuICAgICAgICAgICAgICAgIHNldEV4YW1pbmVEYXRhKGVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmYXN0UmV3aW5kID0gKCkgPT4ge1xyXG4gICAgICBzZXRTbmFwc2hvdEluZGV4KDApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgbmV4dE1vdmUgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChzbmFwc2hvdEluZGV4ICsgMSA8IGV4YW1pbmVEYXRhLnNuYXBzaG90cy5sZW5ndGgpIHtcclxuICAgICAgICBsZXQgbmV4dFNuYXBzaG90SW5kZXggPSBzbmFwc2hvdEluZGV4ICsgMTtcclxuICAgICAgICBzZXRTbmFwc2hvdEluZGV4KG5leHRTbmFwc2hvdEluZGV4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBwcmV2TW92ZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHNuYXBzaG90SW5kZXggLSAxID4gLTEpIHtcclxuICAgICAgICBsZXQgcHJldlNuYXBzaG90SW5kZXggPSBzbmFwc2hvdEluZGV4IC0gMTtcclxuICAgICAgICBzZXRTbmFwc2hvdEluZGV4KHByZXZTbmFwc2hvdEluZGV4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZhc3RGb3J3YXJkID0gKCkgPT4ge1xyXG4gICAgICBsZXQgbmV3U25hcHNob3RJbmRleCA9IGV4YW1pbmVEYXRhLnNuYXBzaG90cy5sZW5ndGggLSAxO1xyXG4gICAgICBzZXRTbmFwc2hvdEluZGV4KG5ld1NuYXBzaG90SW5kZXgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaXNvbmJyZWFrXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWNvbnRhaW5lciB3My10ZWFsIHRvcEJhckhlaWdodFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LW1pZGRsZVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXlIZWFkaW5nRm9udFwiPlByaXNvbiBCcmVhazwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS10b3BsZWZ0IHczLWJsYWNrIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIEdhbWUgaWQ6IHtnYW1laWR9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1ib3R0b21sZWZ0IHczLW9yYW5nZSB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICBQcmlzb25lcnM6IHsgZXhhbWluZURhdGEucG5hbWUgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktdG9wcmlnaHQgdzMtYmxhY2sgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIuLi8uLi9cIn0+XHJcbiAgICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktYm90dG9tcmlnaHQgdzMtb3JhbmdlIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIEd1YXJkczogeyBleGFtaW5lRGF0YS5nbmFtZSB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGJUaWxlQW5kTW92ZXNPdXRlclwiPlxyXG4gICAgICAgICAgICAgIDxTaG93VW5zZWVuVGlsZXNcclxuICAgICAgICAgICAgICAgIHRpbGVzPXtleGFtaW5lRGF0YS5zbmFwc2hvdHNbc25hcHNob3RJbmRleF0udGlsZXN9XHJcbiAgICAgICAgICAgICAgICBvdGhlcnRpbGVzPXsgW10gfSAvLyBFeGFtaW5lcnMgc2VlIGJvdGggcmFja3Mgc28gbm90aGluZyB0byBleGNsdWRlIGZyb20gdGlsZWJhZyBhcyB1bnNlZW5cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFNob3dNb3ZlcyBtb3Zlcz17ZXhhbWluZURhdGEubW92ZXN9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGJQbGF5ZXJPdXRlclNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlBsYXllcklubmVyU2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUGxheWVyVGl0bGVcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntjLlBBUlRZX0lDT05fUFJJU09ORVJTfTwvaT4mbmJzcDt7Yy5QQVJUWV9USVRMRV9QUklTT05FUlN9Jm5ic3A7PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57Yy5QQVJUWV9JQ09OX1BSSVNPTkVSU308L2k+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgICAgICAgICAge2V4YW1pbmVEYXRhLnNuYXBzaG90c1tzbmFwc2hvdEluZGV4XS53aG9zZXR1cm4gPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgJiYgPHNwYW4gY2xhc3NOYW1lPVwidzMtZ3JlZW4gdzMtcm91bmRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFycm93X3JpZ2h0PC9pPjwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICB7ZXhhbWluZURhdGEuc25hcHNob3RzW3NuYXBzaG90SW5kZXhdLnB0aWxlcy5tYXAoKHQsIHRpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxFeGFtaW5lclRpbGVSYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YE9ic2VydmVyUHJpc29uZXJzUmFja1RpbGUke3RpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50PXtjLlBBUlRZX1RZUEVfUFJJU09ORVJTfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxldmFsdWU9e3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVpbmRleD17dGl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUGxheWVyVGl0bGVcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntjLlBBUlRZX0lDT05fR1VBUkRTfTwvaT4mbmJzcDt7Yy5QQVJUWV9USVRMRV9HVUFSRFN9Jm5ic3A7PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57Yy5QQVJUWV9JQ09OX0dVQVJEU308L2k+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgICAgICAgICAge2V4YW1pbmVEYXRhLnNuYXBzaG90c1tzbmFwc2hvdEluZGV4XS53aG9zZXR1cm4gPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMgJiZcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1ncmVlbiB3My1yb3VuZFwiIG9uQ2xpY2s9e25leHRNb3ZlfT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFycm93X3JpZ2h0PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtleGFtaW5lRGF0YS5zbmFwc2hvdHNbc25hcHNob3RJbmRleF0uZ3RpbGVzLm1hcCgodCwgdGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEV4YW1pbmVyVGlsZVJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgT2JzZXJ2ZXJHdWFyZHNSYWNrVGlsZSR7dGl9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnQ9e2MuUEFSVFlfVFlQRV9HVUFSRFN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGV2YWx1ZT17dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZWluZGV4PXt0aX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgICAgICAgc3F1YXJlQXJyYXk9e2V4YW1pbmVEYXRhLnNuYXBzaG90c1tzbmFwc2hvdEluZGV4XS5zcXVhcmVBcnJheX1cclxuICAgICAgICAgICAgICAgICAgcmNkPXtbLTEsLTEsYy5ESVJfTk9ORV19XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgPFNob3dSZXNjdWVzIHJlc2N1ZXM9e2V4YW1pbmVEYXRhLnNuYXBzaG90c1tzbmFwc2hvdEluZGV4XS5yZXNjdWVzfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWNvbnRhaW5lciB3My10ZWFsIHRvcEJhckhlaWdodFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LW1pZGRsZSBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInczLWJsYWNrIHczLXJvdW5kXCIgb25DbGljaz17ZmFzdFJld2luZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZmFzdF9yZXdpbmQ8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYmxhY2sgdzMtcm91bmRcIiBvbkNsaWNrPXtwcmV2TW92ZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+YXJyb3dfbGVmdDwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYkFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9e25leHRNb3ZlfT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hcnJvd19yaWdodDwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1ibGFjayB3My1yb3VuZFwiIG9uQ2xpY2s9e2Zhc3RGb3J3YXJkfT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5mYXN0X2ZvcndhcmQ8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgRXhhbWluZXJUaWxlUmFjayA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkVW5zZWxlY3RlZCA9IFwiVW5zZWxlY3RlZCBcIjtcclxuICBjb25zdCB1Tm90VSA9IHByb3BzLnRpbGV2YWx1ZSA9PT0gXCJRXCIgPyBcInUgXCIgOiBcIlwiO1xyXG4gIGNvbnN0IHRpbGVjbGFzcyA9IFwicGJUaWxlT25SYWNrIFwiICsgc2VsZWN0ZWRVbnNlbGVjdGVkICsgdU5vdFUgKyBwcm9wcy5wYXJ0aWNpcGFudDtcclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgICBrZXk9e3Byb3BzLnRpbGVpbmRleH1cclxuICAgICAgICAgIGNsYXNzTmFtZT17dGlsZWNsYXNzfVxyXG4gICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZU9uUmFja1RleHRcIj57cHJvcHMudGlsZXZhbHVlfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeGFtaW5lOyJdLCJzb3VyY2VSb290IjoiIn0=