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
/* harmony import */ var _pb_chatSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pb/chatSection */ "./pages/pb/chatSection.js");
/* harmony import */ var _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/pb/prisonBreakConstants */ "./lib/pb/prisonBreakConstants.js");
/* harmony import */ var _lib_pb_buildExamineDataFromApidata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/pb/buildExamineDataFromApidata */ "./lib/pb/buildExamineDataFromApidata.js");
/* harmony import */ var _lib_scrollToBottom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/scrollToBottom */ "./lib/scrollToBottom.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\pb\\examine.js",
    _s = $RefreshSig$();










 // I am setting up a default skeleton so the build does not try reference properties of undefined objects

const Examine = ({
  client,
  wsmessage,
  gameid,
  nickname,
  participant
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
    pname: 'loading...',
    gname: 'loading...',
    moves: [],
    snapshots: [{
      tiles: [],
      ptiles: [],
      gtiles: [],
      rescues: 0,
      whoseturn: 'P'
    }]
  });
  const {
    0: chatmsgs,
    1: setChatmsgs
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // This code executes the first time Examiner is used only
    client.send({
      gameid: gameid,
      // the id for the game
      type: "pb",
      // prisonbreak
      sender: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_EXAMINER,
      func: "startExamining" // this will make server send us the game data

    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let msg = wsmessage;
    if (msg !== '') processGameMessage(msg);
  }, [wsmessage]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_lib_scrollToBottom__WEBPACK_IMPORTED_MODULE_10__.scrollToBottom)("ScrollableChat");
  }, [chatmsgs]);

  function processGameMessage(message) {
    let messageData = JSON.parse(message);

    if (messageData.gameid === gameid && messageData.type === "pb") {
      // This instance of a prison break game
      if (messageData.func === "providegamedata") {
        let ed = (0,_lib_pb_buildExamineDataFromApidata__WEBPACK_IMPORTED_MODULE_9__.buildExamineDataFromApidata)(messageData.apidata);
        setExamineData(ed);
      }

      if (messageData.func === "chat") {
        // Server decided whether this chat was for me
        let newChatmsgs = [...chatmsgs, {
          from: messageData.nickname,
          msg: messageData.sendmsg
        }];
        setChatmsgs(newChatmsgs);
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
    return examineData.snapshots[snapshotIndex].whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.WHOSE_TURN_PRISONERS;
  };

  const isGuardsTurn = () => {
    return examineData.snapshots[snapshotIndex].whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.WHOSE_TURN_GUARDS;
  };

  const handleMoveClick = mi => {
    /* We want to go to the point where the player is about to play the move they clicked.
       The move index is going to be one higher than its event index since start game is not a move.
       So it is like a +1 to get to the corresponding snapshot index, and -1 to get to where player is about to make that move.
     */
    let newSnapshotIndex = mi;

    if (mi + 1 < examineData.snapshots.length) {
      setSnapshotIndex(newSnapshotIndex);
    }
  };

  const handleBoardSquareClick = (ri, ci) => {
    // Find the move where the tile at [ri,ci] was played and jump to that move
    let foundIndex = -1;

    for (let index = 0; index < examineData.snapshots.length; index++) {
      const element = examineData.snapshots[index];

      if (foundIndex === -1 && element.squareArray[ri][ci].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.USED_BY_NONE) {
        console.log(`${index} used [${ri},${ci}] by ${element.squareArray[ri][ci]}`);
        foundIndex = index;
      }
    }

    if (foundIndex !== -1) {
      setSnapshotIndex(foundIndex);
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
          lineNumber: 111,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-topleft w3-black topBarCorner commonFontFamily",
        children: ["Game id: ", gameid]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-bottomleft w3-orange topBarCorner commonFontFamily",
        children: ["Prisoners: ", examineData.pname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
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
              lineNumber: 121,
              columnNumber: 18
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-bottomright w3-orange topBarCorner commonFontFamily",
        children: ["Guards: ", examineData.gname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 109,
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
          lineNumber: 130,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_movesSection__WEBPACK_IMPORTED_MODULE_5__.default, {
          moves: examineData.moves.slice(0, snapshotIndex),
          onmoveclick: mi => handleMoveClick(mi)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col pbPlayerOuterSection",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "pbPlayerInnerSection",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbPlayerTitle",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_ICON_PRISONERS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 44
            }, undefined), "\xA0", _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TITLE_PRISONERS, "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_ICON_PRISONERS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 139
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbTilerack",
            children: [examineData.snapshots[snapshotIndex].whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "pbTilerackArrow",
              onClick: nextMove
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 17
            }, undefined), examineData.snapshots[snapshotIndex].ptiles.map((t, ti) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExaminerTileRack, {
              participant: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_PRISONERS,
              tilevalue: isGuardsTurn() ? '*' : t,
              tileindex: ti
            }, `ObserverPrisonersRackTile${ti}`, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 19
            }, undefined))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbPlayerTitle",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_ICON_GUARDS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 44
            }, undefined), "\xA0", _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TITLE_GUARDS, "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_ICON_GUARDS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 133
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbTilerack",
            children: [examineData.snapshots[snapshotIndex].whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_GUARDS && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "pbTilerackArrow",
              onClick: nextMove
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 19
            }, undefined), examineData.snapshots[snapshotIndex].gtiles.map((t, ti) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExaminerTileRack, {
              participant: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.PARTY_TYPE_GUARDS,
              tilevalue: isPrisonersTurn() ? '*' : t,
              tileindex: ti
            }, `ObserverGuardsRackTile${ti}`, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 21
            }, undefined))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_board__WEBPACK_IMPORTED_MODULE_3__.default, {
            squareArray: examineData.snapshots[snapshotIndex].squareArray,
            rcd: [-1, -1, _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_8__.DIR_NONE],
            onClick: (ri, ci) => handleBoardSquareClick(ri, ci)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_rescuesSection__WEBPACK_IMPORTED_MODULE_6__.default, {
          rescues: examineData.snapshots[snapshotIndex].rescues
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_chatSection__WEBPACK_IMPORTED_MODULE_7__.default, {
          gameid: gameid,
          client: client,
          nickname: nickname,
          msgs: chatmsgs,
          setMsgs: setChatmsgs,
          participant: participant
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 128,
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
              lineNumber: 193,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "w3-black w3-round",
            onClick: prevMove,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: "arrow_left"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "w3-black w3-round",
            onClick: nextMove,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: "arrow_right"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "w3-black w3-round",
            onClick: fastForward,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: "fast_forward"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 7
  }, undefined);
};

_s(Examine, "swFS+pCJ5EjNSKkDNNRaIuALRlg=");

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
      lineNumber: 220,
      columnNumber: 11
    }, undefined)
  }, props.tileindex, false, {
    fileName: _jsxFileName,
    lineNumber: 216,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvZXhhbWluZS5qcyJdLCJuYW1lcyI6WyJFeGFtaW5lIiwiY2xpZW50Iiwid3NtZXNzYWdlIiwiZ2FtZWlkIiwibmlja25hbWUiLCJwYXJ0aWNpcGFudCIsInNuYXBzaG90SW5kZXgiLCJzZXRTbmFwc2hvdEluZGV4IiwidXNlU3RhdGUiLCJleGFtaW5lRGF0YSIsInNldEV4YW1pbmVEYXRhIiwicG5hbWUiLCJnbmFtZSIsIm1vdmVzIiwic25hcHNob3RzIiwidGlsZXMiLCJwdGlsZXMiLCJndGlsZXMiLCJyZXNjdWVzIiwid2hvc2V0dXJuIiwiY2hhdG1zZ3MiLCJzZXRDaGF0bXNncyIsInVzZUVmZmVjdCIsInNlbmQiLCJ0eXBlIiwic2VuZGVyIiwiYyIsImZ1bmMiLCJtc2ciLCJwcm9jZXNzR2FtZU1lc3NhZ2UiLCJzY3JvbGxUb0JvdHRvbSIsIm1lc3NhZ2UiLCJtZXNzYWdlRGF0YSIsIkpTT04iLCJwYXJzZSIsImVkIiwiYnVpbGRFeGFtaW5lRGF0YUZyb21BcGlkYXRhIiwiYXBpZGF0YSIsIm5ld0NoYXRtc2dzIiwiZnJvbSIsInNlbmRtc2ciLCJmYXN0UmV3aW5kIiwibmV4dE1vdmUiLCJsZW5ndGgiLCJuZXh0U25hcHNob3RJbmRleCIsInByZXZNb3ZlIiwicHJldlNuYXBzaG90SW5kZXgiLCJmYXN0Rm9yd2FyZCIsIm5ld1NuYXBzaG90SW5kZXgiLCJpc1ByaXNvbmVyc1R1cm4iLCJpc0d1YXJkc1R1cm4iLCJoYW5kbGVNb3ZlQ2xpY2siLCJtaSIsImhhbmRsZUJvYXJkU3F1YXJlQ2xpY2siLCJyaSIsImNpIiwiZm91bmRJbmRleCIsImluZGV4IiwiZWxlbWVudCIsInNxdWFyZUFycmF5IiwidXNlZGJ5IiwiY29uc29sZSIsImxvZyIsInNsaWNlIiwiUEFSVFlfSUNPTl9QUklTT05FUlMiLCJtYXAiLCJ0IiwidGkiLCJQQVJUWV9JQ09OX0dVQVJEUyIsIkV4YW1pbmVyVGlsZVJhY2siLCJwcm9wcyIsInNlbGVjdGVkVW5zZWxlY3RlZCIsInVOb3RVIiwidGlsZXZhbHVlIiwidGlsZWNsYXNzIiwidGlsZWluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxNQUFNQSxPQUFPLEdBQUcsQ0FBQztBQUFFQyxRQUFGO0FBQVVDLFdBQVY7QUFBcUJDLFFBQXJCO0FBQTZCQyxVQUE3QjtBQUF1Q0M7QUFBdkMsQ0FBRCxLQUEwRDtBQUFBOztBQUN0RSxRQUFNO0FBQUEsT0FBQ0MsYUFBRDtBQUFBLE9BQWdCQztBQUFoQixNQUFvQ0MsK0NBQVEsQ0FBQyxDQUFELENBQWxELENBRHNFLENBQ2Y7O0FBQ3ZELFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0YsK0NBQVEsQ0FBQztBQUFDRyxTQUFLLEVBQUUsWUFBUjtBQUFzQkMsU0FBSyxFQUFFLFlBQTdCO0FBQTJDQyxTQUFLLEVBQUUsRUFBbEQ7QUFBc0RDLGFBQVMsRUFBQyxDQUFDO0FBQUNDLFdBQUssRUFBRSxFQUFSO0FBQVlDLFlBQU0sRUFBRSxFQUFwQjtBQUF3QkMsWUFBTSxFQUFFLEVBQWhDO0FBQW9DQyxhQUFPLEVBQUUsQ0FBN0M7QUFBZ0RDLGVBQVMsRUFBRTtBQUEzRCxLQUFEO0FBQWhFLEdBQUQsQ0FBOUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJiLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUVBYyxrREFBUyxDQUFDLE1BQU07QUFBRTtBQUNkckIsVUFBTSxDQUFDc0IsSUFBUCxDQUNJO0FBQ0VwQixZQUFNLEVBQUVBLE1BRFY7QUFDa0I7QUFDaEJxQixVQUFJLEVBQUUsSUFGUjtBQUVjO0FBQ1pDLFlBQU0sRUFBRUMsNkVBSFY7QUFJRUMsVUFBSSxFQUFFLGdCQUpSLENBSXlCOztBQUp6QixLQURKO0FBUUgsR0FUUSxFQVNOLEVBVE0s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NjBhYWU4MzdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBCb2FyZCBmcm9tICcuLi9wYi9ib2FyZCc7XHJcbmltcG9ydCBTaG93VW5zZWVuVGlsZXMgZnJvbSAnLi4vcGIvdW5zZWVuVGlsZXNTZWN0aW9uJztcclxuaW1wb3J0IFNob3dNb3ZlcyBmcm9tICcuLi9wYi9tb3Zlc1NlY3Rpb24nO1xyXG5pbXBvcnQgU2hvd1Jlc2N1ZXMgZnJvbSAnLi4vcGIvcmVzY3Vlc1NlY3Rpb24nO1xyXG5pbXBvcnQgQ2hhdCBmcm9tICcuLi9wYi9jaGF0U2VjdGlvbic7XHJcbmltcG9ydCAqIGFzIGMgZnJvbSAnLi4vLi4vbGliL3BiL3ByaXNvbkJyZWFrQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgYnVpbGRFeGFtaW5lRGF0YUZyb21BcGlkYXRhIH0gZnJvbSBcIi4uLy4uL2xpYi9wYi9idWlsZEV4YW1pbmVEYXRhRnJvbUFwaWRhdGFcIjtcclxuaW1wb3J0IHsgc2Nyb2xsVG9Cb3R0b20gfSBmcm9tIFwiLi4vLi4vbGliL3Njcm9sbFRvQm90dG9tXCI7XHJcblxyXG4vLyBJIGFtIHNldHRpbmcgdXAgYSBkZWZhdWx0IHNrZWxldG9uIHNvIHRoZSBidWlsZCBkb2VzIG5vdCB0cnkgcmVmZXJlbmNlIHByb3BlcnRpZXMgb2YgdW5kZWZpbmVkIG9iamVjdHNcclxuY29uc3QgRXhhbWluZSA9ICh7IGNsaWVudCwgd3NtZXNzYWdlLCBnYW1laWQsIG5pY2tuYW1lLCBwYXJ0aWNpcGFudCB9KSA9PiB7XHJcbiAgICBjb25zdCBbc25hcHNob3RJbmRleCwgc2V0U25hcHNob3RJbmRleF0gPSB1c2VTdGF0ZSgwKTsgLy8gU3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgZmlyc3Qgc25hcHNob3QgKHRpbGVzIHBpY2tlZCwgbm8gbW92ZXMgbWFkZSlcclxuICAgIGNvbnN0IFtleGFtaW5lRGF0YSwgc2V0RXhhbWluZURhdGFdID0gdXNlU3RhdGUoe3BuYW1lOiAnbG9hZGluZy4uLicsIGduYW1lOiAnbG9hZGluZy4uLicsIG1vdmVzOiBbXSwgc25hcHNob3RzOlt7dGlsZXM6IFtdLCBwdGlsZXM6IFtdLCBndGlsZXM6IFtdLCByZXNjdWVzOiAwLCB3aG9zZXR1cm46ICdQJ31dfSk7XHJcbiAgICBjb25zdCBbY2hhdG1zZ3MsIHNldENoYXRtc2dzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyAvLyBUaGlzIGNvZGUgZXhlY3V0ZXMgdGhlIGZpcnN0IHRpbWUgRXhhbWluZXIgaXMgdXNlZCBvbmx5XHJcbiAgICAgICAgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBnYW1laWQ6IGdhbWVpZCwgLy8gdGhlIGlkIGZvciB0aGUgZ2FtZVxyXG4gICAgICAgICAgICAgIHR5cGU6IFwicGJcIiwgLy8gcHJpc29uYnJlYWtcclxuICAgICAgICAgICAgICBzZW5kZXI6IGMuUEFSVFlfVFlQRV9FWEFNSU5FUixcclxuICAgICAgICAgICAgICBmdW5jOiBcInN0YXJ0RXhhbWluaW5nXCIgLy8gdGhpcyB3aWxsIG1ha2Ugc2VydmVyIHNlbmQgdXMgdGhlIGdhbWUgZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH0sIFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IG1zZyA9IHdzbWVzc2FnZTtcclxuICAgICAgICBpZiAobXNnICE9PSAnJykgcHJvY2Vzc0dhbWVNZXNzYWdlKG1zZyk7ICAgICAgXHJcbiAgICB9LFt3c21lc3NhZ2VdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2Nyb2xsVG9Cb3R0b20oXCJTY3JvbGxhYmxlQ2hhdFwiKTtcclxuICAgIH0sW2NoYXRtc2dzXSlcclxuICBcclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NHYW1lTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgICAgICBpZiAobWVzc2FnZURhdGEuZ2FtZWlkID09PSBnYW1laWQgJiYgbWVzc2FnZURhdGEudHlwZSA9PT0gXCJwYlwiKSB7IC8vIFRoaXMgaW5zdGFuY2Ugb2YgYSBwcmlzb24gYnJlYWsgZ2FtZVxyXG4gICAgICAgICAgICBpZiAobWVzc2FnZURhdGEuZnVuYyA9PT0gXCJwcm92aWRlZ2FtZWRhdGFcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVkID0gYnVpbGRFeGFtaW5lRGF0YUZyb21BcGlkYXRhKG1lc3NhZ2VEYXRhLmFwaWRhdGEpO1xyXG4gICAgICAgICAgICAgICAgc2V0RXhhbWluZURhdGEoZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImNoYXRcIikgeyAvLyBTZXJ2ZXIgZGVjaWRlZCB3aGV0aGVyIHRoaXMgY2hhdCB3YXMgZm9yIG1lXHJcbiAgICAgICAgICAgICAgbGV0IG5ld0NoYXRtc2dzID0gWy4uLmNoYXRtc2dzLCB7ZnJvbTogbWVzc2FnZURhdGEubmlja25hbWUsIG1zZzogbWVzc2FnZURhdGEuc2VuZG1zZ31dO1xyXG4gICAgICAgICAgICAgIHNldENoYXRtc2dzKG5ld0NoYXRtc2dzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmFzdFJld2luZCA9ICgpID0+IHtcclxuICAgICAgc2V0U25hcHNob3RJbmRleCgwKTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IG5leHRNb3ZlID0gKCkgPT4ge1xyXG4gICAgICBpZiAoc25hcHNob3RJbmRleCArIDEgPCBleGFtaW5lRGF0YS5zbmFwc2hvdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgbGV0IG5leHRTbmFwc2hvdEluZGV4ID0gc25hcHNob3RJbmRleCArIDE7XHJcbiAgICAgICAgc2V0U25hcHNob3RJbmRleChuZXh0U25hcHNob3RJbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgcHJldk1vdmUgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChzbmFwc2hvdEluZGV4IC0gMSA+IC0xKSB7XHJcbiAgICAgICAgbGV0IHByZXZTbmFwc2hvdEluZGV4ID0gc25hcHNob3RJbmRleCAtIDE7XHJcbiAgICAgICAgc2V0U25hcHNob3RJbmRleChwcmV2U25hcHNob3RJbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmYXN0Rm9yd2FyZCA9ICgpID0+IHtcclxuICAgICAgbGV0IG5ld1NuYXBzaG90SW5kZXggPSBleGFtaW5lRGF0YS5zbmFwc2hvdHMubGVuZ3RoIC0gMTtcclxuICAgICAgc2V0U25hcHNob3RJbmRleChuZXdTbmFwc2hvdEluZGV4KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgaXNQcmlzb25lcnNUdXJuID0gKCkgPT4ge1xyXG4gICAgICByZXR1cm4gKGV4YW1pbmVEYXRhLnNuYXBzaG90c1tzbmFwc2hvdEluZGV4XS53aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9QUklTT05FUlMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlzR3VhcmRzVHVybiA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIChleGFtaW5lRGF0YS5zbmFwc2hvdHNbc25hcHNob3RJbmRleF0ud2hvc2V0dXJuID09PSBjLldIT1NFX1RVUk5fR1VBUkRTKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb3ZlQ2xpY2sgPSAobWkpID0+IHtcclxuICAgICAgLyogV2Ugd2FudCB0byBnbyB0byB0aGUgcG9pbnQgd2hlcmUgdGhlIHBsYXllciBpcyBhYm91dCB0byBwbGF5IHRoZSBtb3ZlIHRoZXkgY2xpY2tlZC5cclxuICAgICAgICAgVGhlIG1vdmUgaW5kZXggaXMgZ29pbmcgdG8gYmUgb25lIGhpZ2hlciB0aGFuIGl0cyBldmVudCBpbmRleCBzaW5jZSBzdGFydCBnYW1lIGlzIG5vdCBhIG1vdmUuXHJcbiAgICAgICAgIFNvIGl0IGlzIGxpa2UgYSArMSB0byBnZXQgdG8gdGhlIGNvcnJlc3BvbmRpbmcgc25hcHNob3QgaW5kZXgsIGFuZCAtMSB0byBnZXQgdG8gd2hlcmUgcGxheWVyIGlzIGFib3V0IHRvIG1ha2UgdGhhdCBtb3ZlLlxyXG4gICAgICAgKi9cclxuICAgICAgbGV0IG5ld1NuYXBzaG90SW5kZXggPSBtaTtcclxuICAgICAgaWYgKG1pICsgMSA8IGV4YW1pbmVEYXRhLnNuYXBzaG90cy5sZW5ndGgpIHtcclxuICAgICAgICBzZXRTbmFwc2hvdEluZGV4KG5ld1NuYXBzaG90SW5kZXgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQm9hcmRTcXVhcmVDbGljayA9IChyaSwgY2kpID0+IHtcclxuICAgICAgLy8gRmluZCB0aGUgbW92ZSB3aGVyZSB0aGUgdGlsZSBhdCBbcmksY2ldIHdhcyBwbGF5ZWQgYW5kIGp1bXAgdG8gdGhhdCBtb3ZlXHJcbiAgICAgIGxldCBmb3VuZEluZGV4ID0gLTE7XHJcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBleGFtaW5lRGF0YS5zbmFwc2hvdHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGV4YW1pbmVEYXRhLnNuYXBzaG90c1tpbmRleF07XHJcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xICYmIGVsZW1lbnQuc3F1YXJlQXJyYXlbcmldW2NpXS51c2VkYnkgIT09IGMuVVNFRF9CWV9OT05FKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpbmRleH0gdXNlZCBbJHtyaX0sJHtjaX1dIGJ5ICR7ZWxlbWVudC5zcXVhcmVBcnJheVtyaV1bY2ldfWApO1xyXG4gICAgICAgICAgZm91bmRJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICBzZXRTbmFwc2hvdEluZGV4KGZvdW5kSW5kZXgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmlzb25icmVha1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1jb250YWluZXIgdzMtdGVhbCB0b3BCYXJIZWlnaHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1taWRkbGVcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm15SGVhZGluZ0ZvbnRcIj5Qcmlzb24gQnJlYWs8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktdG9wbGVmdCB3My1ibGFjayB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICBHYW1lIGlkOiB7Z2FtZWlkfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktYm90dG9tbGVmdCB3My1vcmFuZ2UgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgUHJpc29uZXJzOiB7IGV4YW1pbmVEYXRhLnBuYW1lIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LXRvcHJpZ2h0IHczLWJsYWNrIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiLi4vLi4vXCJ9PlxyXG4gICAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJIb21lXCI+aG9tZTwvaT48L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWJvdHRvbXJpZ2h0IHczLW9yYW5nZSB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICBHdWFyZHM6IHsgZXhhbWluZURhdGEuZ25hbWUgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBiVGlsZUFuZE1vdmVzT3V0ZXJcIj5cclxuICAgICAgICAgICAgICA8U2hvd1Vuc2VlblRpbGVzXHJcbiAgICAgICAgICAgICAgICB0aWxlcz17ZXhhbWluZURhdGEuc25hcHNob3RzW3NuYXBzaG90SW5kZXhdLnRpbGVzfVxyXG4gICAgICAgICAgICAgICAgb3RoZXJ0aWxlcz17IGlzUHJpc29uZXJzVHVybigpID8gZXhhbWluZURhdGEuc25hcHNob3RzW3NuYXBzaG90SW5kZXhdLmd0aWxlc1xyXG4gICAgICAgICAgICAgICAgOiBpc0d1YXJkc1R1cm4oKSA/IGV4YW1pbmVEYXRhLnNuYXBzaG90c1tzbmFwc2hvdEluZGV4XS5wdGlsZXNcclxuICAgICAgICAgICAgICAgIDogW10gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8U2hvd01vdmVzXHJcbiAgICAgICAgICAgICAgICBtb3Zlcz17ZXhhbWluZURhdGEubW92ZXMuc2xpY2UoMCxzbmFwc2hvdEluZGV4KX1cclxuICAgICAgICAgICAgICAgIG9ubW92ZWNsaWNrPXsobWkpID0+IGhhbmRsZU1vdmVDbGljayhtaSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwYlBsYXllck91dGVyU2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUGxheWVySW5uZXJTZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJQbGF5ZXJUaXRsZVwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+e2MuUEFSVFlfSUNPTl9QUklTT05FUlN9PC9pPiZuYnNwO3tjLlBBUlRZX1RJVExFX1BSSVNPTkVSU30mbmJzcDs8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntjLlBBUlRZX0lDT05fUFJJU09ORVJTfTwvaT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVyYWNrXCI+XHJcbiAgICAgICAgICAgICAge2V4YW1pbmVEYXRhLnNuYXBzaG90c1tzbmFwc2hvdEluZGV4XS53aG9zZXR1cm4gPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcmFja0Fycm93XCIgb25DbGljaz17bmV4dE1vdmV9PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHtleGFtaW5lRGF0YS5zbmFwc2hvdHNbc25hcHNob3RJbmRleF0ucHRpbGVzLm1hcCgodCwgdGkpID0+XHJcbiAgICAgICAgICAgICAgICAgIDxFeGFtaW5lclRpbGVSYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BPYnNlcnZlclByaXNvbmVyc1JhY2tUaWxlJHt0aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnQ9e2MuUEFSVFlfVFlQRV9QUklTT05FUlN9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aWxldmFsdWU9eyBpc0d1YXJkc1R1cm4oKSA/ICcqJyA6IHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aWxlaW5kZXg9e3RpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUGxheWVyVGl0bGVcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntjLlBBUlRZX0lDT05fR1VBUkRTfTwvaT4mbmJzcDt7Yy5QQVJUWV9USVRMRV9HVUFSRFN9Jm5ic3A7PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57Yy5QQVJUWV9JQ09OX0dVQVJEU308L2k+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgICAgICAgICAge2V4YW1pbmVEYXRhLnNuYXBzaG90c1tzbmFwc2hvdEluZGV4XS53aG9zZXR1cm4gPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMgJiZcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVyYWNrQXJyb3dcIiBvbkNsaWNrPXtuZXh0TW92ZX0+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge2V4YW1pbmVEYXRhLnNuYXBzaG90c1tzbmFwc2hvdEluZGV4XS5ndGlsZXMubWFwKCh0LCB0aSkgPT5cclxuICAgICAgICAgICAgICAgICAgICA8RXhhbWluZXJUaWxlUmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BPYnNlcnZlckd1YXJkc1JhY2tUaWxlJHt0aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudD17Yy5QQVJUWV9UWVBFX0dVQVJEU31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZXZhbHVlPXtpc1ByaXNvbmVyc1R1cm4oKSA/ICcqJyA6IHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVpbmRleD17dGl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICAgIHNxdWFyZUFycmF5PXtleGFtaW5lRGF0YS5zbmFwc2hvdHNbc25hcHNob3RJbmRleF0uc3F1YXJlQXJyYXl9XHJcbiAgICAgICAgICAgICAgICAgIHJjZD17Wy0xLC0xLGMuRElSX05PTkVdfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsocmksIGNpKSA9PiBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJpLCBjaSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICA8U2hvd1Jlc2N1ZXMgcmVzY3Vlcz17ZXhhbWluZURhdGEuc25hcHNob3RzW3NuYXBzaG90SW5kZXhdLnJlc2N1ZXN9IC8+XHJcbiAgICAgICAgICAgIDxDaGF0IGdhbWVpZD17Z2FtZWlkfSBjbGllbnQ9e2NsaWVudH0gbmlja25hbWU9e25pY2tuYW1lfSBtc2dzPXtjaGF0bXNnc30gc2V0TXNncz17c2V0Q2hhdG1zZ3N9IHBhcnRpY2lwYW50PXtwYXJ0aWNpcGFudH0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWNvbnRhaW5lciB3My10ZWFsIHRvcEJhckhlaWdodFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LW1pZGRsZSBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInczLWJsYWNrIHczLXJvdW5kXCIgb25DbGljaz17ZmFzdFJld2luZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZmFzdF9yZXdpbmQ8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYmxhY2sgdzMtcm91bmRcIiBvbkNsaWNrPXtwcmV2TW92ZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+YXJyb3dfbGVmdDwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1ibGFjayB3My1yb3VuZFwiIG9uQ2xpY2s9e25leHRNb3ZlfT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hcnJvd19yaWdodDwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1ibGFjayB3My1yb3VuZFwiIG9uQ2xpY2s9e2Zhc3RGb3J3YXJkfT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5mYXN0X2ZvcndhcmQ8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgRXhhbWluZXJUaWxlUmFjayA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkVW5zZWxlY3RlZCA9IFwiVW5zZWxlY3RlZCBcIjtcclxuICBjb25zdCB1Tm90VSA9IHByb3BzLnRpbGV2YWx1ZSA9PT0gXCJRXCIgPyBcInUgXCIgOiBcIlwiO1xyXG4gIGNvbnN0IHRpbGVjbGFzcyA9IFwicGJUaWxlT25SYWNrIFwiICsgc2VsZWN0ZWRVbnNlbGVjdGVkICsgdU5vdFUgKyBwcm9wcy5wYXJ0aWNpcGFudDtcclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgICBrZXk9e3Byb3BzLnRpbGVpbmRleH1cclxuICAgICAgICAgIGNsYXNzTmFtZT17dGlsZWNsYXNzfVxyXG4gICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiVGlsZU9uUmFja1RleHRcIj57cHJvcHMudGlsZXZhbHVlfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeGFtaW5lOyJdLCJzb3VyY2VSb290IjoiIn0=