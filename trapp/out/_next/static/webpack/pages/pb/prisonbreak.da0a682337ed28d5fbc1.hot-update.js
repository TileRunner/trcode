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
          lineNumber: 62,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-topleft w3-black topBarCorner commonFontFamily",
        children: ["Game id: ", gameid]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-bottomleft w3-orange topBarCorner commonFontFamily",
        children: ["Prisoners: ", examineData.pname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
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
              lineNumber: 72,
              columnNumber: 18
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-bottomright w3-orange topBarCorner commonFontFamily",
        children: ["Guards: ", examineData.gname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
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
          lineNumber: 81,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_movesSection__WEBPACK_IMPORTED_MODULE_5__.default, {
          moves: examineData.moves
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
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
              lineNumber: 89,
              columnNumber: 44
            }, undefined), "\xA0", _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TITLE_PRISONERS, "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_ICON_PRISONERS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 139
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
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
                lineNumber: 91,
                columnNumber: 131
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 95
            }, undefined), examineData.snapshots[snapshotIndex].ptiles.map((t, ti) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExaminerTileRack, {
              participant: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TYPE_PRISONERS,
              tilevalue: t,
              tileindex: ti
            }, `ObserverPrisonersRackTile${ti}`, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 21
            }, undefined))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbPlayerTitle",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_ICON_GUARDS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 44
            }, undefined), "\xA0", _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TITLE_GUARDS, "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_ICON_GUARDS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 133
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
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
                lineNumber: 105,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 19
            }, undefined), examineData.snapshots[snapshotIndex].gtiles.map((t, ti) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExaminerTileRack, {
              participant: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TYPE_GUARDS,
              tilevalue: t,
              tileindex: ti
            }, `ObserverGuardsRackTile${ti}`, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 21
            }, undefined))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
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
            lineNumber: 121,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_rescuesSection__WEBPACK_IMPORTED_MODULE_6__.default, {
          rescues: examineData.snapshots[snapshotIndex].rescues
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
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
              lineNumber: 136,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 19
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "w3-black w3-round",
            onClick: prevMove,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: "arrow_left"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "pbActionButton",
            onClick: nextMove,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "pbActionButtonText",
              children: ["\xA0Next\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "material-icons",
                children: "arrow_right"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 74
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
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
      lineNumber: 160,
      columnNumber: 11
    }, undefined)
  }, props.tileindex, false, {
    fileName: _jsxFileName,
    lineNumber: 156,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvZXhhbWluZS5qcyJdLCJuYW1lcyI6WyJFeGFtaW5lIiwiY2xpZW50Iiwid3NtZXNzYWdlIiwiZ2FtZWlkIiwic25hcHNob3RJbmRleCIsInNldFNuYXBzaG90SW5kZXgiLCJ1c2VTdGF0ZSIsImV4YW1pbmVEYXRhIiwic2V0RXhhbWluZURhdGEiLCJwbmFtZSIsImduYW1lIiwibW92ZXMiLCJzbmFwc2hvdHMiLCJ0aWxlcyIsInB0aWxlcyIsImd0aWxlcyIsInJlc2N1ZXMiLCJ3aG9zZXR1cm4iLCJ1c2VFZmZlY3QiLCJzZW5kIiwidHlwZSIsInNlbmRlciIsImMiLCJmdW5jIiwibXNnIiwicHJvY2Vzc0dhbWVNZXNzYWdlIiwibWVzc2FnZSIsIm1lc3NhZ2VEYXRhIiwiSlNPTiIsInBhcnNlIiwiZWQiLCJidWlsZEV4YW1pbmVEYXRhRnJvbUFwaWRhdGEiLCJhcGlkYXRhIiwiZmFzdFJld2luZCIsIm5leHRNb3ZlIiwibGVuZ3RoIiwibmV4dFNuYXBzaG90SW5kZXgiLCJwcmV2TW92ZSIsInByZXZTbmFwc2hvdEluZGV4IiwiUEFSVFlfSUNPTl9QUklTT05FUlMiLCJtYXAiLCJ0IiwidGkiLCJQQVJUWV9JQ09OX0dVQVJEUyIsInNxdWFyZUFycmF5IiwiRXhhbWluZXJUaWxlUmFjayIsInByb3BzIiwic2VsZWN0ZWRVbnNlbGVjdGVkIiwidU5vdFUiLCJ0aWxldmFsdWUiLCJ0aWxlY2xhc3MiLCJwYXJ0aWNpcGFudCIsInRpbGVpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsTUFBTUEsT0FBTyxHQUFHLENBQUM7QUFBRUMsUUFBRjtBQUFVQyxXQUFWO0FBQXFCQztBQUFyQixDQUFELEtBQW1DO0FBQUE7O0FBQy9DLFFBQU07QUFBQSxPQUFDQyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1B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R0YsS0FBSyxDQUFDRyxTQUFOLEtBQW9CLEdBQXBCLEdBQTBCLElBQTFCLEdBQWlDLEVBQS9DO0FBQ0EsUUFBTUMsU0FBUyxHQUFHLGtCQUFrQkgsa0JBQWxCLEdBQXVDQyxLQUF2QyxHQUErQ0YsS0FBSyxDQUFDSyxXQUF2RTtBQUNBLHNCQUNJO0FBRUksYUFBUyxFQUFFRCxTQUZmO0FBQUEsMkJBSUk7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQSxnQkFBbUNKLEtBQUssQ0FBQ0c7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKLEtBQ1NILEtBQUssQ0FBQ00sU0FEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFRRCxDQVpEOztNQUFNUCxnQjtBQWNOLCtEQUFlN0MsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYi9wcmlzb25icmVhay5kYTBhNjgyMzM3ZWQyOGQ1ZmJjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi4vcGIvYm9hcmQnO1xyXG5pbXBvcnQgU2hvd1Vuc2VlblRpbGVzIGZyb20gJy4uL3BiL3Vuc2VlblRpbGVzU2VjdGlvbic7XHJcbmltcG9ydCBTaG93TW92ZXMgZnJvbSAnLi4vcGIvbW92ZXNTZWN0aW9uJztcclxuaW1wb3J0IFNob3dSZXNjdWVzIGZyb20gJy4uL3BiL3Jlc2N1ZXNTZWN0aW9uJztcclxuaW1wb3J0ICogYXMgYyBmcm9tICcuLi8uLi9saWIvcGIvcHJpc29uQnJlYWtDb25zdGFudHMnO1xyXG5pbXBvcnQgeyBidWlsZEV4YW1pbmVEYXRhRnJvbUFwaWRhdGEgfSBmcm9tIFwiLi4vLi4vbGliL3BiL2J1aWxkRXhhbWluZURhdGFGcm9tQXBpZGF0YVwiO1xyXG5cclxuLy8gSSBhbSBzZXR0aW5nIHVwIGEgZGVmYXVsdCBza2VsZXRvbiBzbyB0aGUgYnVpbGQgZG9lcyBub3QgdHJ5IHJlZmVyZW5jZSBwcm9wZXJ0aWVzIG9mIHVuZGVmaW5lZCBvYmplY3RzXHJcbmNvbnN0IEV4YW1pbmUgPSAoeyBjbGllbnQsIHdzbWVzc2FnZSwgZ2FtZWlkIH0pID0+IHtcclxuICAgIGNvbnN0IFtzbmFwc2hvdEluZGV4LCBzZXRTbmFwc2hvdEluZGV4XSA9IHVzZVN0YXRlKDApOyAvLyBTdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBmaXJzdCBzbmFwc2hvdCAodGlsZXMgcGlja2VkLCBubyBtb3ZlcyBtYWRlKVxyXG4gICAgY29uc3QgW2V4YW1pbmVEYXRhLCBzZXRFeGFtaW5lRGF0YV0gPSB1c2VTdGF0ZSh7cG5hbWU6ICd0YmQnLCBnbmFtZTogJ3RiZCcsIG1vdmVzOiBbXSwgc25hcHNob3RzOlt7dGlsZXM6IFtdLCBwdGlsZXM6IFtdLCBndGlsZXM6IFtdLCByZXNjdWVzOiAwLCB3aG9zZXR1cm46ICdQJ31dfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgLy8gVGhpcyBjb2RlIGV4ZWN1dGVzIHRoZSBmaXJzdCB0aW1lIEV4YW1pbmVyIGlzIHVzZWQgb25seVxyXG4gICAgICAgIGNsaWVudC5zZW5kKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZ2FtZWlkOiBnYW1laWQsIC8vIHRoZSBpZCBmb3IgdGhlIGdhbWVcclxuICAgICAgICAgICAgICB0eXBlOiBcInBiXCIsIC8vIHByaXNvbmJyZWFrXHJcbiAgICAgICAgICAgICAgc2VuZGVyOiBjLlBBUlRZX1RZUEVfRVhBTUlORVIsXHJcbiAgICAgICAgICAgICAgZnVuYzogXCJzdGFydEV4YW1pbmluZ1wiIC8vIHRoaXMgd2lsbCBtYWtlIHNlcnZlciBzZW5kIHVzIHRoZSBnYW1lIGRhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBtc2cgPSB3c21lc3NhZ2U7XHJcbiAgICAgICAgaWYgKG1zZyAhPT0gJycpIHByb2Nlc3NHYW1lTWVzc2FnZShtc2cpOyAgICAgIFxyXG4gICAgfSxbd3NtZXNzYWdlXSlcclxuICBcclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NHYW1lTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZ2FtZWlkID09PSBnYW1laWQgJiYgbWVzc2FnZURhdGEudHlwZSA9PT0gXCJwYlwiKSB7IC8vIFRoaXMgaW5zdGFuY2Ugb2YgYSBwcmlzb24gYnJlYWsgZ2FtZVxyXG4gICAgICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJwcm92aWRlZ2FtZWRhdGFcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVkID0gYnVpbGRFeGFtaW5lRGF0YUZyb21BcGlkYXRhKG1lc3NhZ2VEYXRhLmFwaWRhdGEpO1xyXG4gICAgICAgICAgICAgICAgc2V0RXhhbWluZURhdGEoZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZhc3RSZXdpbmQgPSAoKSA9PiB7XHJcbiAgICAgIHNldFNuYXBzaG90SW5kZXgoMCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBuZXh0TW92ZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoc25hcHNob3RJbmRleCArIDEgPCBleGFtaW5lRGF0YS5zbmFwc2hvdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXh0U25hcHNob3RJbmRleCA9IHNuYXBzaG90SW5kZXggKyAxO1xyXG4gICAgICAgICAgICBzZXRTbmFwc2hvdEluZGV4KG5leHRTbmFwc2hvdEluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHByZXZNb3ZlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChzbmFwc2hvdEluZGV4IC0gMSA+IC0xKSB7XHJcbiAgICAgICAgICAgIGxldCBwcmV2U25hcHNob3RJbmRleCA9IHNuYXBzaG90SW5kZXggLSAxO1xyXG4gICAgICAgICAgICBzZXRTbmFwc2hvdEluZGV4KHByZXZTbmFwc2hvdEluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpc29uYnJlYWtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktY29udGFpbmVyIHczLXRlYWwgdG9wQmFySGVpZ2h0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktbWlkZGxlXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJteUhlYWRpbmdGb250XCI+UHJpc29uIEJyZWFrPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LXRvcGxlZnQgdzMtYmxhY2sgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgR2FtZSBpZDoge2dhbWVpZH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWJvdHRvbWxlZnQgdzMtb3JhbmdlIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIFByaXNvbmVyczogeyBleGFtaW5lRGF0YS5wbmFtZSB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS10b3ByaWdodCB3My1ibGFjayB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi4uLy4uL1wifT5cclxuICAgICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1ib3R0b21yaWdodCB3My1vcmFuZ2UgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgR3VhcmRzOiB7IGV4YW1pbmVEYXRhLmduYW1lIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwYlRpbGVBbmRNb3Zlc091dGVyXCI+XHJcbiAgICAgICAgICAgICAgPFNob3dVbnNlZW5UaWxlc1xyXG4gICAgICAgICAgICAgICAgdGlsZXM9e2V4YW1pbmVEYXRhLnNuYXBzaG90c1tzbmFwc2hvdEluZGV4XS50aWxlc31cclxuICAgICAgICAgICAgICAgIG90aGVydGlsZXM9eyBbXSB9IC8vIEV4YW1pbmVycyBzZWUgYm90aCByYWNrcyBzbyBub3RoaW5nIHRvIGV4Y2x1ZGUgZnJvbSB0aWxlYmFnIGFzIHVuc2VlblxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8U2hvd01vdmVzIG1vdmVzPXtleGFtaW5lRGF0YS5tb3Zlc30vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwYlBsYXllck91dGVyU2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUGxheWVySW5uZXJTZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJQbGF5ZXJUaXRsZVwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+e2MuUEFSVFlfSUNPTl9QUklTT05FUlN9PC9pPiZuYnNwO3tjLlBBUlRZX1RJVExFX1BSSVNPTkVSU30mbmJzcDs8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntjLlBBUlRZX0lDT05fUFJJU09ORVJTfTwvaT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVyYWNrXCI+XHJcbiAgICAgICAgICAgICAgICB7ZXhhbWluZURhdGEuc25hcHNob3RzW3NuYXBzaG90SW5kZXhdLndob3NldHVybiA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyAmJiA8c3BhbiBjbGFzc05hbWU9XCJ3My1ncmVlbiB3My1yb3VuZFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+YXJyb3dfcmlnaHQ8L2k+PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgIHtleGFtaW5lRGF0YS5zbmFwc2hvdHNbc25hcHNob3RJbmRleF0ucHRpbGVzLm1hcCgodCwgdGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEV4YW1pbmVyVGlsZVJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgT2JzZXJ2ZXJQcmlzb25lcnNSYWNrVGlsZSR7dGl9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnQ9e2MuUEFSVFlfVFlQRV9QUklTT05FUlN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGV2YWx1ZT17dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZWluZGV4PXt0aX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJQbGF5ZXJUaXRsZVwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+e2MuUEFSVFlfSUNPTl9HVUFSRFN9PC9pPiZuYnNwO3tjLlBBUlRZX1RJVExFX0dVQVJEU30mbmJzcDs8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntjLlBBUlRZX0lDT05fR1VBUkRTfTwvaT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVyYWNrXCI+XHJcbiAgICAgICAgICAgICAgICB7ZXhhbWluZURhdGEuc25hcHNob3RzW3NuYXBzaG90SW5kZXhdLndob3NldHVybiA9PT0gYy5QQVJUWV9UWVBFX0dVQVJEUyAmJlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInczLWdyZWVuIHczLXJvdW5kXCIgb25DbGljaz17bmV4dE1vdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+YXJyb3dfcmlnaHQ8L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge2V4YW1pbmVEYXRhLnNuYXBzaG90c1tzbmFwc2hvdEluZGV4XS5ndGlsZXMubWFwKCh0LCB0aSkgPT5cclxuICAgICAgICAgICAgICAgICAgICA8RXhhbWluZXJUaWxlUmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BPYnNlcnZlckd1YXJkc1JhY2tUaWxlJHt0aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudD17Yy5QQVJUWV9UWVBFX0dVQVJEU31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZXZhbHVlPXt0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlaW5kZXg9e3RpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICAgICAgICBzcXVhcmVBcnJheT17ZXhhbWluZURhdGEuc25hcHNob3RzW3NuYXBzaG90SW5kZXhdLnNxdWFyZUFycmF5fVxyXG4gICAgICAgICAgICAgICAgICByY2Q9e1stMSwtMSxjLkRJUl9OT05FXX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge319XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICA8U2hvd1Jlc2N1ZXMgcmVzY3Vlcz17ZXhhbWluZURhdGEuc25hcHNob3RzW3NuYXBzaG90SW5kZXhdLnJlc2N1ZXN9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktY29udGFpbmVyIHczLXRlYWwgdG9wQmFySGVpZ2h0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktbWlkZGxlIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1ibGFjayB3My1yb3VuZFwiIG9uQ2xpY2s9e2Zhc3RSZXdpbmR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZmFzdF9yZXdpbmQ8L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1ibGFjayB3My1yb3VuZFwiIG9uQ2xpY2s9e3ByZXZNb3ZlfT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFycm93X2xlZnQ8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25cIiBvbkNsaWNrPXtuZXh0TW92ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGJBY3Rpb25CdXR0b25UZXh0XCI+Jm5ic3A7TmV4dCZuYnNwOzxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+YXJyb3dfcmlnaHQ8L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IEV4YW1pbmVyVGlsZVJhY2sgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBzZWxlY3RlZFVuc2VsZWN0ZWQgPSBcIlVuc2VsZWN0ZWQgXCI7XHJcbiAgY29uc3QgdU5vdFUgPSBwcm9wcy50aWxldmFsdWUgPT09IFwiUVwiID8gXCJ1IFwiIDogXCJcIjtcclxuICBjb25zdCB0aWxlY2xhc3MgPSBcInBiVGlsZU9uUmFjayBcIiArIHNlbGVjdGVkVW5zZWxlY3RlZCArIHVOb3RVICsgcHJvcHMucGFydGljaXBhbnQ7XHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgICAga2V5PXtwcm9wcy50aWxlaW5kZXh9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3RpbGVjbGFzc31cclxuICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVPblJhY2tUZXh0XCI+e3Byb3BzLnRpbGV2YWx1ZX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhhbWluZTsiXSwic291cmNlUm9vdCI6IiJ9