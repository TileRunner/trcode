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
            children: [examineData.snapshots[snapshotIndex].whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TYPE_PRISONERS && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "w3-black w3-round",
              onClick: nextMove,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "material-icons",
                children: "arrow_right"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 17
            }, undefined), examineData.snapshots[snapshotIndex].ptiles.map((t, ti) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExaminerTileRack, {
              participant: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TYPE_PRISONERS,
              tilevalue: t,
              tileindex: ti
            }, `ObserverPrisonersRackTile${ti}`, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 19
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
              lineNumber: 110,
              columnNumber: 44
            }, undefined), "\xA0", _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TITLE_GUARDS, "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_ICON_GUARDS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 133
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
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
                lineNumber: 114,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 19
            }, undefined), examineData.snapshots[snapshotIndex].gtiles.map((t, ti) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExaminerTileRack, {
              participant: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TYPE_GUARDS,
              tilevalue: t,
              tileindex: ti
            }, `ObserverGuardsRackTile${ti}`, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 21
            }, undefined))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
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
            lineNumber: 130,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_rescuesSection__WEBPACK_IMPORTED_MODULE_6__.default, {
          rescues: examineData.snapshots[snapshotIndex].rescues
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
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
              lineNumber: 145,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "w3-black w3-round",
            onClick: prevMove,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: "arrow_left"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "w3-black w3-round",
            onClick: nextMove,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: "arrow_right"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "w3-black w3-round",
            onClick: fastForward,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: "fast_forward"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
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
      lineNumber: 172,
      columnNumber: 11
    }, undefined)
  }, props.tileindex, false, {
    fileName: _jsxFileName,
    lineNumber: 168,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvZXhhbWluZS5qcyJdLCJuYW1lcyI6WyJFeGFtaW5lIiwiY2xpZW50Iiwid3NtZXNzYWdlIiwiZ2FtZWlkIiwic25hcHNob3RJbmRleCIsInNldFNuYXBzaG90SW5kZXgiLCJ1c2VTdGF0ZSIsImV4YW1pbmVEYXRhIiwic2V0RXhhbWluZURhdGEiLCJwbmFtZSIsImduYW1lIiwibW92ZXMiLCJzbmFwc2hvdHMiLCJ0aWxlcyIsInB0aWxlcyIsImd0aWxlcyIsInJlc2N1ZXMiLCJ3aG9zZXR1cm4iLCJ1c2VFZmZlY3QiLCJzZW5kIiwidHlwZSIsInNlbmRlciIsImMiLCJmdW5jIiwibXNnIiwicHJvY2Vzc0dhbWVNZXNzYWdlIiwibWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiSlNPTiIsInBhcnNlIiwiZWQiLCJidWlsZEV4YW1pbmVEYXRhRnJvbUFwaWRhdGEiLCJhcGlkYXRhIiwiZmFzdFJld2luZCIsIm5leHRNb3ZlIiwibGVuZ3RoIiwibmV4dFNuYXBzaG90SW5kZXgiLCJwcmV2TW92ZSIsInByZXZTbmFwc2hvdEluZGV4IiwiZmFzdEZvcndhcmQiLCJuZXdTbmFwc2hvdEluZGV4IiwiUEFSVFlfSUNPTl9QUklTT05FUlMiLCJtYXAiLCJ0IiwidGkiLCJQQVJUWV9JQ09OX0dVQVJEUyIsInNxdWFyZUFycmF5IiwiRXhhbWluZXJUaWxlUmFjayIsInByb3BzIiwic2VsZWN0ZWRVbnNlbGVjdGVkIiwidU5vdFUiLCJ0aWxldmFsdWUiLCJ0aWxlY2xhc3MiLCJwYXJ0aWNpcGFudCIsInRpbGVpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsTUFBTUEsT0FBTyxHQUFHLENBQUM7QUFBRUMsUUFBRjtBQUFVQyxXQUFWO0FBQXFCQztBQUFyQixDQUFELEtBQW1DO0FBQUE7O0FBQy9DLFFBQU07QUFB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QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWtHSCxDQXRKRDs7R0FBTXZDLE87O0tBQUFBLE87O0FBd0pOLE1BQU0rQyxnQkFBZ0IsR0FBSUMsS0FBRCxJQUFXO0FBQ2xDLFFBQU1DLGtCQUFrQixHQUFHLGFBQTNCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHRixLQUFLLENBQUNHLFNBQU4sS0FBb0IsR0FBcEIsR0FBMEIsSUFBMUIsR0FBaUMsRUFBL0M7QUFDQSxRQUFNQyxTQUFTLEdBQUcsa0JBQWtCSCxrQkFBbEIsR0FBdUNDLEtBQXZDLEdBQStDRixLQUFLLENBQUNLLFdBQXZFO0FBQ0Esc0JBQ0k7QUFFSSxhQUFTLEVBQUVELFNBRmY7QUFBQSwyQkFJSTtBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBLGdCQUFtQ0osS0FBSyxDQUFDRztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkosS0FDU0gsS0FBSyxDQUFDTSxTQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVFELENBWkQ7O01BQU1QLGdCO0FBY04sK0RBQWUvQyxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BiL3ByaXNvbmJyZWFrLjM5MWYxNzk1YzUwZTk3MDU4NzVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBCb2FyZCBmcm9tICcuLi9wYi9ib2FyZCc7XHJcbmltcG9ydCBTaG93VW5zZWVuVGlsZXMgZnJvbSAnLi4vcGIvdW5zZWVuVGlsZXNTZWN0aW9uJztcclxuaW1wb3J0IFNob3dNb3ZlcyBmcm9tICcuLi9wYi9tb3Zlc1NlY3Rpb24nO1xyXG5pbXBvcnQgU2hvd1Jlc2N1ZXMgZnJvbSAnLi4vcGIvcmVzY3Vlc1NlY3Rpb24nO1xyXG5pbXBvcnQgKiBhcyBjIGZyb20gJy4uLy4uL2xpYi9wYi9wcmlzb25CcmVha0NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGJ1aWxkRXhhbWluZURhdGFGcm9tQXBpZGF0YSB9IGZyb20gXCIuLi8uLi9saWIvcGIvYnVpbGRFeGFtaW5lRGF0YUZyb21BcGlkYXRhXCI7XHJcblxyXG4vLyBJIGFtIHNldHRpbmcgdXAgYSBkZWZhdWx0IHNrZWxldG9uIHNvIHRoZSBidWlsZCBkb2VzIG5vdCB0cnkgcmVmZXJlbmNlIHByb3BlcnRpZXMgb2YgdW5kZWZpbmVkIG9iamVjdHNcclxuY29uc3QgRXhhbWluZSA9ICh7IGNsaWVudCwgd3NtZXNzYWdlLCBnYW1laWQgfSkgPT4ge1xyXG4gICAgY29uc3QgW3NuYXBzaG90SW5kZXgsIHNldFNuYXBzaG90SW5kZXhdID0gdXNlU3RhdGUoMCk7IC8vIFN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGZpcnN0IHNuYXBzaG90ICh0aWxlcyBwaWNrZWQsIG5vIG1vdmVzIG1hZGUpXHJcbiAgICBjb25zdCBbZXhhbWluZURhdGEsIHNldEV4YW1pbmVEYXRhXSA9IHVzZVN0YXRlKHtwbmFtZTogJ3RiZCcsIGduYW1lOiAndGJkJywgbW92ZXM6IFtdLCBzbmFwc2hvdHM6W3t0aWxlczogW10sIHB0aWxlczogW10sIGd0aWxlczogW10sIHJlc2N1ZXM6IDAsIHdob3NldHVybjogJ1AnfV19KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyAvLyBUaGlzIGNvZGUgZXhlY3V0ZXMgdGhlIGZpcnN0IHRpbWUgRXhhbWluZXIgaXMgdXNlZCBvbmx5XHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgICAgICBzZW5kZXI6IGMuUEFSVFlfVFlQRV9FWEFNSU5FUixcclxuICAgICAgICAgICAgICBmdW5jOiBcInN0YXJ0RXhhbWluaW5nXCIgLy8gdGhpcyB3aWxsIG1ha2Ugc2VydmVyIHNlbmQgdXMgdGhlIGdhbWUgZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH0sIFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IG1zZyA9IHdzbWVzc2FnZTtcclxuICAgICAgICBpZiAobXNnICE9PSAnJykgcHJvY2Vzc0dhbWVNZXNzYWdlKG1zZyk7ICAgICAgXHJcbiAgICB9LFt3c21lc3NhZ2VdKVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0dhbWVNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5nYW1laWQgPT09IGdhbWVpZCAmJiBtZXNzYWdlRGF0YS50eXBlID09PSBcInBiXCIpIHsgLy8gVGhpcyBpbnN0YW5jZSBvZiBhIHByaXNvbiBicmVhayBnYW1lXHJcbiAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInByb3ZpZGVnYW1lZGF0YVwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWQgPSBidWlsZEV4YW1pbmVEYXRhRnJvbUFwaWRhdGEobWVzc2FnZURhdGEuYXBpZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRFeGFtaW5lRGF0YShlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmFzdFJld2luZCA9ICgpID0+IHtcclxuICAgICAgc2V0U25hcHNob3RJbmRleCgwKTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IG5leHRNb3ZlID0gKCkgPT4ge1xyXG4gICAgICBpZiAoc25hcHNob3RJbmRleCArIDEgPCBleGFtaW5lRGF0YS5zbmFwc2hvdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgbGV0IG5leHRTbmFwc2hvdEluZGV4ID0gc25hcHNob3RJbmRleCArIDE7XHJcbiAgICAgICAgc2V0U25hcHNob3RJbmRleChuZXh0U25hcHNob3RJbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgcHJldk1vdmUgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChzbmFwc2hvdEluZGV4IC0gMSA+IC0xKSB7XHJcbiAgICAgICAgbGV0IHByZXZTbmFwc2hvdEluZGV4ID0gc25hcHNob3RJbmRleCAtIDE7XHJcbiAgICAgICAgc2V0U25hcHNob3RJbmRleChwcmV2U25hcHNob3RJbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmYXN0Rm9yd2FyZCA9ICgpID0+IHtcclxuICAgICAgbGV0IG5ld1NuYXBzaG90SW5kZXggPSBleGFtaW5lRGF0YS5zbmFwc2hvdHMubGVuZ3RoIC0gMTtcclxuICAgICAgc2V0U25hcHNob3RJbmRleChuZXdTbmFwc2hvdEluZGV4KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmlzb25icmVha1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1jb250YWluZXIgdzMtdGVhbCB0b3BCYXJIZWlnaHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1taWRkbGVcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm15SGVhZGluZ0ZvbnRcIj5Qcmlzb24gQnJlYWs8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktdG9wbGVmdCB3My1ibGFjayB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICBHYW1lIGlkOiB7Z2FtZWlkfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktYm90dG9tbGVmdCB3My1vcmFuZ2UgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgUHJpc29uZXJzOiB7IGV4YW1pbmVEYXRhLnBuYW1lIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LXRvcHJpZ2h0IHczLWJsYWNrIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiLi4vLi4vXCJ9PlxyXG4gICAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT48L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWJvdHRvbXJpZ2h0IHczLW9yYW5nZSB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICBHdWFyZHM6IHsgZXhhbWluZURhdGEuZ25hbWUgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBiVGlsZUFuZE1vdmVzT3V0ZXJcIj5cclxuICAgICAgICAgICAgICA8U2hvd1Vuc2VlblRpbGVzXHJcbiAgICAgICAgICAgICAgICB0aWxlcz17ZXhhbWluZURhdGEuc25hcHNob3RzW3NuYXBzaG90SW5kZXhdLnRpbGVzfVxyXG4gICAgICAgICAgICAgICAgb3RoZXJ0aWxlcz17IFtdIH0gLy8gRXhhbWluZXJzIHNlZSBib3RoIHJhY2tzIHNvIG5vdGhpbmcgdG8gZXhjbHVkZSBmcm9tIHRpbGViYWcgYXMgdW5zZWVuXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxTaG93TW92ZXMgbW92ZXM9e2V4YW1pbmVEYXRhLm1vdmVzfS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBiUGxheWVyT3V0ZXJTZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJQbGF5ZXJJbm5lclNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlBsYXllclRpdGxlXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57Yy5QQVJUWV9JQ09OX1BSSVNPTkVSU308L2k+Jm5ic3A7e2MuUEFSVFlfVElUTEVfUFJJU09ORVJTfSZuYnNwOzxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+e2MuUEFSVFlfSUNPTl9QUklTT05FUlN9PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXJhY2tcIj5cclxuICAgICAgICAgICAgICB7ZXhhbWluZURhdGEuc25hcHNob3RzW3NuYXBzaG90SW5kZXhdLndob3NldHVybiA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyAmJlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1ibGFjayB3My1yb3VuZFwiIG9uQ2xpY2s9e25leHRNb3ZlfT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hcnJvd19yaWdodDwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB7ZXhhbWluZURhdGEuc25hcHNob3RzW3NuYXBzaG90SW5kZXhdLnB0aWxlcy5tYXAoKHQsIHRpKSA9PlxyXG4gICAgICAgICAgICAgICAgICA8RXhhbWluZXJUaWxlUmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtgT2JzZXJ2ZXJQcmlzb25lcnNSYWNrVGlsZSR7dGl9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50PXtjLlBBUlRZX1RZUEVfUFJJU09ORVJTfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGlsZXZhbHVlPXt0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGlsZWluZGV4PXt0aX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlBsYXllclRpdGxlXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57Yy5QQVJUWV9JQ09OX0dVQVJEU308L2k+Jm5ic3A7e2MuUEFSVFlfVElUTEVfR1VBUkRTfSZuYnNwOzxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+e2MuUEFSVFlfSUNPTl9HVUFSRFN9PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZXJhY2tcIj5cclxuICAgICAgICAgICAgICAgIHtleGFtaW5lRGF0YS5zbmFwc2hvdHNbc25hcHNob3RJbmRleF0ud2hvc2V0dXJuID09PSBjLlBBUlRZX1RZUEVfR1VBUkRTICYmXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYmxhY2sgdzMtcm91bmRcIiBvbkNsaWNrPXtuZXh0TW92ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hcnJvd19yaWdodDwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7ZXhhbWluZURhdGEuc25hcHNob3RzW3NuYXBzaG90SW5kZXhdLmd0aWxlcy5tYXAoKHQsIHRpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxFeGFtaW5lclRpbGVSYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YE9ic2VydmVyR3VhcmRzUmFja1RpbGUke3RpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50PXtjLlBBUlRZX1RZUEVfR1VBUkRTfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxldmFsdWU9e3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVpbmRleD17dGl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICAgIHNxdWFyZUFycmF5PXtleGFtaW5lRGF0YS5zbmFwc2hvdHNbc25hcHNob3RJbmRleF0uc3F1YXJlQXJyYXl9XHJcbiAgICAgICAgICAgICAgICAgIHJjZD17Wy0xLC0xLGMuRElSX05PTkVdfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7fX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDxTaG93UmVzY3VlcyByZXNjdWVzPXtleGFtaW5lRGF0YS5zbmFwc2hvdHNbc25hcHNob3RJbmRleF0ucmVzY3Vlc30gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1jb250YWluZXIgdzMtdGVhbCB0b3BCYXJIZWlnaHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1taWRkbGUgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1ibGFjayB3My1yb3VuZFwiIG9uQ2xpY2s9e2Zhc3RSZXdpbmR9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmZhc3RfcmV3aW5kPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInczLWJsYWNrIHczLXJvdW5kXCIgb25DbGljaz17cHJldk1vdmV9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFycm93X2xlZnQ8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYmxhY2sgdzMtcm91bmRcIiBvbkNsaWNrPXtuZXh0TW92ZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+YXJyb3dfcmlnaHQ8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYmxhY2sgdzMtcm91bmRcIiBvbkNsaWNrPXtmYXN0Rm9yd2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZmFzdF9mb3J3YXJkPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IEV4YW1pbmVyVGlsZVJhY2sgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBzZWxlY3RlZFVuc2VsZWN0ZWQgPSBcIlVuc2VsZWN0ZWQgXCI7XHJcbiAgY29uc3QgdU5vdFUgPSBwcm9wcy50aWxldmFsdWUgPT09IFwiUVwiID8gXCJ1IFwiIDogXCJcIjtcclxuICBjb25zdCB0aWxlY2xhc3MgPSBcInBiVGlsZU9uUmFjayBcIiArIHNlbGVjdGVkVW5zZWxlY3RlZCArIHVOb3RVICsgcHJvcHMucGFydGljaXBhbnQ7XHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgICAga2V5PXtwcm9wcy50aWxlaW5kZXh9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3RpbGVjbGFzc31cclxuICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVPblJhY2tUZXh0XCI+e3Byb3BzLnRpbGV2YWx1ZX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhhbWluZTsiXSwic291cmNlUm9vdCI6IiJ9