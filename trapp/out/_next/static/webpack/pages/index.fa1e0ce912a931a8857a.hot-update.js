self["webpackHotUpdate_N_E"]("pages/index",{

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
/* harmony import */ var _pb_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pb/board */ "./pages/pb/board.js");
/* harmony import */ var _pb_unseenTilesSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pb/unseenTilesSection */ "./pages/pb/unseenTilesSection.js");
/* harmony import */ var _pb_movesSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pb/movesSection */ "./pages/pb/movesSection.js");
/* harmony import */ var _pb_rescuesSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pb/rescuesSection */ "./pages/pb/rescuesSection.js");
/* harmony import */ var _pb_chatSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pb/chatSection */ "./pages/pb/chatSection.js");
/* harmony import */ var _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/pb/prisonBreakConstants */ "./lib/pb/prisonBreakConstants.js");
/* harmony import */ var _lib_pb_buildExamineDataFromApidata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/pb/buildExamineDataFromApidata */ "./lib/pb/buildExamineDataFromApidata.js");
/* harmony import */ var _lib_scrollToBottom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/scrollToBottom */ "./lib/scrollToBottom.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\pb\\examine.js",
    _s = $RefreshSig$();

 //import Link from "next/link";








 // I am setting up a default skeleton so the build does not try reference properties of undefined objects

const Examine = ({
  setWhereto,
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
      sender: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TYPE_EXAMINER,
      func: "startExamining" // this will make server send us the game data

    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let msg = wsmessage;
    if (msg !== '') processGameMessage(msg);
  }, [wsmessage]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_lib_scrollToBottom__WEBPACK_IMPORTED_MODULE_9__.scrollToBottom)("ScrollableChat");
  }, [chatmsgs]);

  function processGameMessage(message) {
    let messageData = JSON.parse(message);

    if (messageData.gameid === gameid && messageData.type === "pb") {
      // This instance of a prison break game
      if (messageData.func === "providegamedata") {
        let ed = (0,_lib_pb_buildExamineDataFromApidata__WEBPACK_IMPORTED_MODULE_8__.buildExamineDataFromApidata)(messageData.apidata);
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
    return examineData.snapshots[snapshotIndex].whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.WHOSE_TURN_PRISONERS;
  };

  const isGuardsTurn = () => {
    return examineData.snapshots[snapshotIndex].whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.WHOSE_TURN_GUARDS;
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
    // Find the move where the tile at [ri][ci] was played and jump to where that move was about to be played
    let foundIndex = -1;

    for (let index = 0; index < examineData.snapshots.length; index++) {
      const element = examineData.snapshots[index];

      if (foundIndex === -1 && element.squareArray[ri][ci].usedby !== _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.USED_BY_NONE) {
        foundIndex = index;
      }
    }

    if (foundIndex > 0) {
      setSnapshotIndex(foundIndex - 1); // Go to the move before tile was played so they see the rack it was played from
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
          lineNumber: 110,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-topleft w3-black topBarCorner commonFontFamily",
        children: ["Game id: ", gameid]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-bottomleft w3-orange topBarCorner commonFontFamily",
        children: ["Prisoners: ", examineData.pname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-topright w3-black topBarCorner commonFontFamily",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "w3-button",
          onClick: () => {
            setWhereto('menu');
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "material-icons",
            "data-toggle": "tooltip",
            title: "Home",
            children: "home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-bottomright w3-orange topBarCorner commonFontFamily",
        children: ["Guards: ", examineData.gname]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col pbTileAndMovesOuter",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_unseenTilesSection__WEBPACK_IMPORTED_MODULE_3__.default, {
          tiles: examineData.snapshots[snapshotIndex].tiles,
          othertiles: isPrisonersTurn() ? examineData.snapshots[snapshotIndex].gtiles : isGuardsTurn() ? examineData.snapshots[snapshotIndex].ptiles : []
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_movesSection__WEBPACK_IMPORTED_MODULE_4__.default, {
          moves: examineData.moves.slice(0, snapshotIndex),
          onmoveclick: mi => handleMoveClick(mi)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
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
              lineNumber: 142,
              columnNumber: 44
            }, undefined), "\xA0", _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TITLE_PRISONERS, "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_ICON_PRISONERS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 139
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbTilerack",
            children: [examineData.snapshots[snapshotIndex].whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TYPE_PRISONERS && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "pbTilerackArrow",
              onClick: nextMove
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 17
            }, undefined), examineData.snapshots[snapshotIndex].ptiles.map((t, ti) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExaminerTileRack, {
              participant: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TYPE_PRISONERS,
              tilevalue: isGuardsTurn() ? '*' : t,
              tileindex: ti
            }, `ObserverPrisonersRackTile${ti}`, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 19
            }, undefined))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbPlayerTitle",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_ICON_GUARDS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 44
            }, undefined), "\xA0", _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TITLE_GUARDS, "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_ICON_GUARDS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 133
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pbTilerack",
            children: [examineData.snapshots[snapshotIndex].whoseturn === _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TYPE_GUARDS && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "pbTilerackArrow",
              onClick: nextMove
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 19
            }, undefined), examineData.snapshots[snapshotIndex].gtiles.map((t, ti) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExaminerTileRack, {
              participant: _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.PARTY_TYPE_GUARDS,
              tilevalue: isPrisonersTurn() ? '*' : t,
              tileindex: ti
            }, `ObserverGuardsRackTile${ti}`, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 21
            }, undefined))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_board__WEBPACK_IMPORTED_MODULE_2__.default, {
            squareArray: examineData.snapshots[snapshotIndex].squareArray,
            rcd: [-1, -1, _lib_pb_prisonBreakConstants__WEBPACK_IMPORTED_MODULE_7__.DIR_NONE],
            onClick: (ri, ci) => handleBoardSquareClick(ri, ci)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_rescuesSection__WEBPACK_IMPORTED_MODULE_5__.default, {
          rescues: examineData.snapshots[snapshotIndex].rescues
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pb_chatSection__WEBPACK_IMPORTED_MODULE_6__.default, {
          gameid: gameid,
          client: client,
          nickname: nickname,
          msgs: chatmsgs,
          setMsgs: setChatmsgs,
          participant: participant
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w3-display-container w3-teal examineFooterHeight",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-middle commonFontFamily",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [snapshotIndex > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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
          }, undefined), snapshotIndex > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "w3-black w3-round",
            onClick: prevMove,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: "arrow_left"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 17
          }, undefined), snapshotIndex < examineData.snapshots.length - 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "w3-black w3-round",
            onClick: nextMove,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: "arrow_right"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 17
          }, undefined), snapshotIndex < examineData.snapshots.length - 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "w3-black w3-round",
            onClick: fastForward,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "material-icons",
              children: "fast_forward"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-topleft commonFontFamily",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\xA0Click on a move in the move list to jump to where it was played"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-bottomleft commonFontFamily",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\xA0Click on a tile on the board to jump to where it was played"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w3-display-topright commonFontFamily",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "pbTilerack",
          children: ["Click on the ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "pbTilerackArrowInFooter",
            children: " "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 54
          }, undefined), " by the rack to advance one move\xA0"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 107,
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
      lineNumber: 236,
      columnNumber: 11
    }, undefined)
  }, props.tileindex, false, {
    fileName: _jsxFileName,
    lineNumber: 232,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvZXhhbWluZS5qcyJdLCJuYW1lcyI6WyJFeGFtaW5lIiwic2V0V2hlcmV0byIsImNsaWVudCIsIndzbWVzc2FnZSIsImdhbWVpZCIsIm5pY2tuYW1lIiwicGFydGljaXBhbnQiLCJzbmFwc2hvdEluZGV4Iiwic2V0U25hcHNob3RJbmRleCIsInVzZVN0YXRlIiwiZXhhbWluZURhdGEiLCJzZXRFeGFtaW5lRGF0YSIsInBuYW1lIiwiZ25hbWUiLCJtb3ZlcyIsInNuYXBzaG90cyIsInRpbGVzIiwicHRpbGVzIiwiZ3RpbGVzIiwicmVzY3VlcyIsIndob3NldHVybiIsImNoYXRtc2dzIiwic2V0Q2hhdG1zZ3MiLCJ1c2VFZmZlY3QiLCJzZW5kIiwidHlwZSIsInNlbmRlciIsImMiLCJmdW5jIiwibXNnIiwicHJvY2Vzc0dhbWVNZXNzYWdlIiwic2Nyb2xsVG9Cb3R0b20iLCJtZXNzYWdlIiwibWVzc2FnZURhdGEiLCJKU09OIiwicGFyc2UiLCJlZCIsImJ1aWxkRXhhbWluZURhdGFGcm9tQXBpZGF0YSIsImFwaWRhdGEiLCJuZXdDaGF0bXNncyIsImZyb20iLCJzZW5kbXNnIiwiZmFzdFJld2luZCIsIm5leHRNb3ZlIiwibGVuZ3RoIiwibmV4dFNuYXBzaG90SW5kZXgiLCJwcmV2TW92ZSIsInByZXZTbmFwc2hvdEluZGV4IiwiZmFzdEZvcndhcmQiLCJuZXdTbmFwc2hvdEluZGV4IiwiaXNQcmlzb25lcnNUdXJuIiwiaXNHdWFyZHNUdXJuIiwiaGFuZGxlTW92ZUNsaWNrIiwibWkiLCJoYW5kbGVCb2FyZFNxdWFyZUNsaWNrIiwicmkiLCJjaSIsImZvdW5kSW5kZXgiLCJpbmRleCIsImVsZW1lbnQiLCJzcXVhcmVBcnJheSIsInVzZWRieSIsInNsaWNlIiwiUEFSVFlfSUNPTl9QUklTT05FUlMiLCJtYXAiLCJ0IiwidGkiLCJQQVJUWV9JQ09OX0dVQVJEUyIsIkV4YW1pbmVyVGlsZVJhY2siLCJwcm9wcyIsInNl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O0tBQUFBLE87O0FBc05OLE1BQU1vRSxnQkFBZ0IsR0FBSUMsS0FBRCxJQUFXO0FBQ2xDLFFBQU1DLGtCQUFrQixHQUFHLGFBQTNCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHRixLQUFLLENBQUNHLFNBQU4sS0FBb0IsR0FBcEIsR0FBMEIsSUFBMUIsR0FBaUMsRUFBL0M7QUFDQSxRQUFNQyxTQUFTLEdBQUcsa0JBQWtCSCxrQkFBbEIsR0FBdUNDLEtBQXZDLEdBQStDRixLQUFLLENBQUMvRCxXQUF2RTtBQUNBLHNCQUNJO0FBRUksYUFBUyxFQUFFbUUsU0FGZjtBQUFBLDJCQUlJO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsZ0JBQW1DSixLQUFLLENBQUNHO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSixLQUNTSCxLQUFLLENBQUNLLFNBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBUUQsQ0FaRDs7TUFBTU4sZ0I7QUFjTiwrREFBZXBFLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmExZTBjZTkxMmE5MzFhODg1N2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi4vcGIvYm9hcmQnO1xyXG5pbXBvcnQgU2hvd1Vuc2VlblRpbGVzIGZyb20gJy4uL3BiL3Vuc2VlblRpbGVzU2VjdGlvbic7XHJcbmltcG9ydCBTaG93TW92ZXMgZnJvbSAnLi4vcGIvbW92ZXNTZWN0aW9uJztcclxuaW1wb3J0IFNob3dSZXNjdWVzIGZyb20gJy4uL3BiL3Jlc2N1ZXNTZWN0aW9uJztcclxuaW1wb3J0IENoYXQgZnJvbSAnLi4vcGIvY2hhdFNlY3Rpb24nO1xyXG5pbXBvcnQgKiBhcyBjIGZyb20gJy4uLy4uL2xpYi9wYi9wcmlzb25CcmVha0NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGJ1aWxkRXhhbWluZURhdGFGcm9tQXBpZGF0YSB9IGZyb20gXCIuLi8uLi9saWIvcGIvYnVpbGRFeGFtaW5lRGF0YUZyb21BcGlkYXRhXCI7XHJcbmltcG9ydCB7IHNjcm9sbFRvQm90dG9tIH0gZnJvbSBcIi4uLy4uL2xpYi9zY3JvbGxUb0JvdHRvbVwiO1xyXG5cclxuLy8gSSBhbSBzZXR0aW5nIHVwIGEgZGVmYXVsdCBza2VsZXRvbiBzbyB0aGUgYnVpbGQgZG9lcyBub3QgdHJ5IHJlZmVyZW5jZSBwcm9wZXJ0aWVzIG9mIHVuZGVmaW5lZCBvYmplY3RzXHJcbmNvbnN0IEV4YW1pbmUgPSAoe3NldFdoZXJldG8sIGNsaWVudCwgd3NtZXNzYWdlLCBnYW1laWQsIG5pY2tuYW1lLCBwYXJ0aWNpcGFudH0pID0+IHtcclxuICAgIGNvbnN0IFtzbmFwc2hvdEluZGV4LCBzZXRTbmFwc2hvdEluZGV4XSA9IHVzZVN0YXRlKDApOyAvLyBTdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBmaXJzdCBzbmFwc2hvdCAodGlsZXMgcGlja2VkLCBubyBtb3ZlcyBtYWRlKVxyXG4gICAgY29uc3QgW2V4YW1pbmVEYXRhLCBzZXRFeGFtaW5lRGF0YV0gPSB1c2VTdGF0ZSh7cG5hbWU6ICdsb2FkaW5nLi4uJywgZ25hbWU6ICdsb2FkaW5nLi4uJywgbW92ZXM6IFtdLCBzbmFwc2hvdHM6W3t0aWxlczogW10sIHB0aWxlczogW10sIGd0aWxlczogW10sIHJlc2N1ZXM6IDAsIHdob3NldHVybjogJ1AnfV19KTtcclxuICAgIGNvbnN0IFtjaGF0bXNncywgc2V0Q2hhdG1zZ3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IC8vIFRoaXMgY29kZSBleGVjdXRlcyB0aGUgZmlyc3QgdGltZSBFeGFtaW5lciBpcyB1c2VkIG9ubHlcclxuICAgICAgICBjbGllbnQuc2VuZChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLCAvLyB0aGUgaWQgZm9yIHRoZSBnYW1lXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJwYlwiLCAvLyBwcmlzb25icmVha1xyXG4gICAgICAgICAgICAgIHNlbmRlcjogYy5QQVJUWV9UWVBFX0VYQU1JTkVSLFxyXG4gICAgICAgICAgICAgIGZ1bmM6IFwic3RhcnRFeGFtaW5pbmdcIiAvLyB0aGlzIHdpbGwgbWFrZSBzZXJ2ZXIgc2VuZCB1cyB0aGUgZ2FtZSBkYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfSwgW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgbXNnID0gd3NtZXNzYWdlO1xyXG4gICAgICAgIGlmIChtc2cgIT09ICcnKSBwcm9jZXNzR2FtZU1lc3NhZ2UobXNnKTsgICAgICBcclxuICAgIH0sW3dzbWVzc2FnZV0pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzY3JvbGxUb0JvdHRvbShcIlNjcm9sbGFibGVDaGF0XCIpO1xyXG4gICAgfSxbY2hhdG1zZ3NdKVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0dhbWVNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICBsZXQgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgICAgIGlmIChtZXNzYWdlRGF0YS5nYW1laWQgPT09IGdhbWVpZCAmJiBtZXNzYWdlRGF0YS50eXBlID09PSBcInBiXCIpIHsgLy8gVGhpcyBpbnN0YW5jZSBvZiBhIHByaXNvbiBicmVhayBnYW1lXHJcbiAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcInByb3ZpZGVnYW1lZGF0YVwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWQgPSBidWlsZEV4YW1pbmVEYXRhRnJvbUFwaWRhdGEobWVzc2FnZURhdGEuYXBpZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRFeGFtaW5lRGF0YShlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLmZ1bmMgPT09IFwiY2hhdFwiKSB7IC8vIFNlcnZlciBkZWNpZGVkIHdoZXRoZXIgdGhpcyBjaGF0IHdhcyBmb3IgbWVcclxuICAgICAgICAgICAgICBsZXQgbmV3Q2hhdG1zZ3MgPSBbLi4uY2hhdG1zZ3MsIHtmcm9tOiBtZXNzYWdlRGF0YS5uaWNrbmFtZSwgbXNnOiBtZXNzYWdlRGF0YS5zZW5kbXNnfV07XHJcbiAgICAgICAgICAgICAgc2V0Q2hhdG1zZ3MobmV3Q2hhdG1zZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmYXN0UmV3aW5kID0gKCkgPT4ge1xyXG4gICAgICBzZXRTbmFwc2hvdEluZGV4KDApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgbmV4dE1vdmUgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChzbmFwc2hvdEluZGV4ICsgMSA8IGV4YW1pbmVEYXRhLnNuYXBzaG90cy5sZW5ndGgpIHtcclxuICAgICAgICBsZXQgbmV4dFNuYXBzaG90SW5kZXggPSBzbmFwc2hvdEluZGV4ICsgMTtcclxuICAgICAgICBzZXRTbmFwc2hvdEluZGV4KG5leHRTbmFwc2hvdEluZGV4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBwcmV2TW92ZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHNuYXBzaG90SW5kZXggLSAxID4gLTEpIHtcclxuICAgICAgICBsZXQgcHJldlNuYXBzaG90SW5kZXggPSBzbmFwc2hvdEluZGV4IC0gMTtcclxuICAgICAgICBzZXRTbmFwc2hvdEluZGV4KHByZXZTbmFwc2hvdEluZGV4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZhc3RGb3J3YXJkID0gKCkgPT4ge1xyXG4gICAgICBsZXQgbmV3U25hcHNob3RJbmRleCA9IGV4YW1pbmVEYXRhLnNuYXBzaG90cy5sZW5ndGggLSAxO1xyXG4gICAgICBzZXRTbmFwc2hvdEluZGV4KG5ld1NuYXBzaG90SW5kZXgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBpc1ByaXNvbmVyc1R1cm4gPSAoKSA9PiB7XHJcbiAgICAgIHJldHVybiAoZXhhbWluZURhdGEuc25hcHNob3RzW3NuYXBzaG90SW5kZXhdLndob3NldHVybiA9PT0gYy5XSE9TRV9UVVJOX1BSSVNPTkVSUyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaXNHdWFyZHNUdXJuID0gKCkgPT4ge1xyXG4gICAgICByZXR1cm4gKGV4YW1pbmVEYXRhLnNuYXBzaG90c1tzbmFwc2hvdEluZGV4XS53aG9zZXR1cm4gPT09IGMuV0hPU0VfVFVSTl9HVUFSRFMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdmVDbGljayA9IChtaSkgPT4ge1xyXG4gICAgICAvKiBXZSB3YW50IHRvIGdvIHRvIHRoZSBwb2ludCB3aGVyZSB0aGUgcGxheWVyIGlzIGFib3V0IHRvIHBsYXkgdGhlIG1vdmUgdGhleSBjbGlja2VkLlxyXG4gICAgICAgICBUaGUgbW92ZSBpbmRleCBpcyBnb2luZyB0byBiZSBvbmUgaGlnaGVyIHRoYW4gaXRzIGV2ZW50IGluZGV4IHNpbmNlIHN0YXJ0IGdhbWUgaXMgbm90IGEgbW92ZS5cclxuICAgICAgICAgU28gaXQgaXMgbGlrZSBhICsxIHRvIGdldCB0byB0aGUgY29ycmVzcG9uZGluZyBzbmFwc2hvdCBpbmRleCwgYW5kIC0xIHRvIGdldCB0byB3aGVyZSBwbGF5ZXIgaXMgYWJvdXQgdG8gbWFrZSB0aGF0IG1vdmUuXHJcbiAgICAgICAqL1xyXG4gICAgICBsZXQgbmV3U25hcHNob3RJbmRleCA9IG1pO1xyXG4gICAgICBpZiAobWkgKyAxIDwgZXhhbWluZURhdGEuc25hcHNob3RzLmxlbmd0aCkge1xyXG4gICAgICAgIHNldFNuYXBzaG90SW5kZXgobmV3U25hcHNob3RJbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrID0gKHJpLCBjaSkgPT4ge1xyXG4gICAgICAvLyBGaW5kIHRoZSBtb3ZlIHdoZXJlIHRoZSB0aWxlIGF0IFtyaV1bY2ldIHdhcyBwbGF5ZWQgYW5kIGp1bXAgdG8gd2hlcmUgdGhhdCBtb3ZlIHdhcyBhYm91dCB0byBiZSBwbGF5ZWRcclxuICAgICAgbGV0IGZvdW5kSW5kZXggPSAtMTtcclxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGV4YW1pbmVEYXRhLnNuYXBzaG90cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZXhhbWluZURhdGEuc25hcHNob3RzW2luZGV4XTtcclxuICAgICAgICBpZiAoZm91bmRJbmRleCA9PT0gLTEgJiYgZWxlbWVudC5zcXVhcmVBcnJheVtyaV1bY2ldLnVzZWRieSAhPT0gYy5VU0VEX0JZX05PTkUpIHtcclxuICAgICAgICAgIGZvdW5kSW5kZXggPSBpbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZvdW5kSW5kZXggPiAwKSB7XHJcbiAgICAgICAgc2V0U25hcHNob3RJbmRleChmb3VuZEluZGV4IC0gMSk7IC8vIEdvIHRvIHRoZSBtb3ZlIGJlZm9yZSB0aWxlIHdhcyBwbGF5ZWQgc28gdGhleSBzZWUgdGhlIHJhY2sgaXQgd2FzIHBsYXllZCBmcm9tXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaXNvbmJyZWFrXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWNvbnRhaW5lciB3My10ZWFsIHRvcEJhckhlaWdodFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LW1pZGRsZVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXlIZWFkaW5nRm9udFwiPlByaXNvbiBCcmVhazwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS10b3BsZWZ0IHczLWJsYWNrIHRvcEJhckNvcm5lciBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIEdhbWUgaWQ6IHtnYW1laWR9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1ib3R0b21sZWZ0IHczLW9yYW5nZSB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICBQcmlzb25lcnM6IHsgZXhhbWluZURhdGEucG5hbWUgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktdG9wcmlnaHQgdzMtYmxhY2sgdG9wQmFyQ29ybmVyIGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7c2V0V2hlcmV0bygnbWVudScpO319PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWJvdHRvbXJpZ2h0IHczLW9yYW5nZSB0b3BCYXJDb3JuZXIgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICBHdWFyZHM6IHsgZXhhbWluZURhdGEuZ25hbWUgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBiVGlsZUFuZE1vdmVzT3V0ZXJcIj5cclxuICAgICAgICAgICAgICA8U2hvd1Vuc2VlblRpbGVzXHJcbiAgICAgICAgICAgICAgICB0aWxlcz17ZXhhbWluZURhdGEuc25hcHNob3RzW3NuYXBzaG90SW5kZXhdLnRpbGVzfVxyXG4gICAgICAgICAgICAgICAgb3RoZXJ0aWxlcz17IGlzUHJpc29uZXJzVHVybigpID8gZXhhbWluZURhdGEuc25hcHNob3RzW3NuYXBzaG90SW5kZXhdLmd0aWxlc1xyXG4gICAgICAgICAgICAgICAgOiBpc0d1YXJkc1R1cm4oKSA/IGV4YW1pbmVEYXRhLnNuYXBzaG90c1tzbmFwc2hvdEluZGV4XS5wdGlsZXNcclxuICAgICAgICAgICAgICAgIDogW10gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8U2hvd01vdmVzXHJcbiAgICAgICAgICAgICAgICBtb3Zlcz17ZXhhbWluZURhdGEubW92ZXMuc2xpY2UoMCxzbmFwc2hvdEluZGV4KX1cclxuICAgICAgICAgICAgICAgIG9ubW92ZWNsaWNrPXsobWkpID0+IGhhbmRsZU1vdmVDbGljayhtaSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwYlBsYXllck91dGVyU2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUGxheWVySW5uZXJTZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJQbGF5ZXJUaXRsZVwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+e2MuUEFSVFlfSUNPTl9QUklTT05FUlN9PC9pPiZuYnNwO3tjLlBBUlRZX1RJVExFX1BSSVNPTkVSU30mbmJzcDs8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntjLlBBUlRZX0lDT05fUFJJU09ORVJTfTwvaT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVyYWNrXCI+XHJcbiAgICAgICAgICAgICAge2V4YW1pbmVEYXRhLnNuYXBzaG90c1tzbmFwc2hvdEluZGV4XS53aG9zZXR1cm4gPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcmFja0Fycm93XCIgb25DbGljaz17bmV4dE1vdmV9PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHtleGFtaW5lRGF0YS5zbmFwc2hvdHNbc25hcHNob3RJbmRleF0ucHRpbGVzLm1hcCgodCwgdGkpID0+XHJcbiAgICAgICAgICAgICAgICAgIDxFeGFtaW5lclRpbGVSYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BPYnNlcnZlclByaXNvbmVyc1JhY2tUaWxlJHt0aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnQ9e2MuUEFSVFlfVFlQRV9QUklTT05FUlN9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aWxldmFsdWU9eyBpc0d1YXJkc1R1cm4oKSA/ICcqJyA6IHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aWxlaW5kZXg9e3RpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiUGxheWVyVGl0bGVcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPntjLlBBUlRZX0lDT05fR1VBUkRTfTwvaT4mbmJzcDt7Yy5QQVJUWV9USVRMRV9HVUFSRFN9Jm5ic3A7PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj57Yy5QQVJUWV9JQ09OX0dVQVJEU308L2k+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGJUaWxlcmFja1wiPlxyXG4gICAgICAgICAgICAgICAge2V4YW1pbmVEYXRhLnNuYXBzaG90c1tzbmFwc2hvdEluZGV4XS53aG9zZXR1cm4gPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMgJiZcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVyYWNrQXJyb3dcIiBvbkNsaWNrPXtuZXh0TW92ZX0+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge2V4YW1pbmVEYXRhLnNuYXBzaG90c1tzbmFwc2hvdEluZGV4XS5ndGlsZXMubWFwKCh0LCB0aSkgPT5cclxuICAgICAgICAgICAgICAgICAgICA8RXhhbWluZXJUaWxlUmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BPYnNlcnZlckd1YXJkc1JhY2tUaWxlJHt0aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudD17Yy5QQVJUWV9UWVBFX0dVQVJEU31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZXZhbHVlPXtpc1ByaXNvbmVyc1R1cm4oKSA/ICcqJyA6IHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVpbmRleD17dGl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICAgIHNxdWFyZUFycmF5PXtleGFtaW5lRGF0YS5zbmFwc2hvdHNbc25hcHNob3RJbmRleF0uc3F1YXJlQXJyYXl9XHJcbiAgICAgICAgICAgICAgICAgIHJjZD17Wy0xLC0xLGMuRElSX05PTkVdfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsocmksIGNpKSA9PiBoYW5kbGVCb2FyZFNxdWFyZUNsaWNrKHJpLCBjaSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICA8U2hvd1Jlc2N1ZXMgcmVzY3Vlcz17ZXhhbWluZURhdGEuc25hcHNob3RzW3NuYXBzaG90SW5kZXhdLnJlc2N1ZXN9IC8+XHJcbiAgICAgICAgICAgIDxDaGF0IGdhbWVpZD17Z2FtZWlkfSBjbGllbnQ9e2NsaWVudH0gbmlja25hbWU9e25pY2tuYW1lfSBtc2dzPXtjaGF0bXNnc30gc2V0TXNncz17c2V0Q2hhdG1zZ3N9IHBhcnRpY2lwYW50PXtwYXJ0aWNpcGFudH0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWNvbnRhaW5lciB3My10ZWFsIGV4YW1pbmVGb290ZXJIZWlnaHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtZGlzcGxheS1taWRkbGUgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHtzbmFwc2hvdEluZGV4ID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1ibGFjayB3My1yb3VuZFwiIG9uQ2xpY2s9e2Zhc3RSZXdpbmR9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmZhc3RfcmV3aW5kPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHtzbmFwc2hvdEluZGV4ID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1ibGFjayB3My1yb3VuZFwiIG9uQ2xpY2s9e3ByZXZNb3ZlfT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hcnJvd19sZWZ0PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHtzbmFwc2hvdEluZGV4IDwgZXhhbWluZURhdGEuc25hcHNob3RzLmxlbmd0aCAtIDEgJiZcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidzMtYmxhY2sgdzMtcm91bmRcIiBvbkNsaWNrPXtuZXh0TW92ZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+YXJyb3dfcmlnaHQ8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAge3NuYXBzaG90SW5kZXggPCBleGFtaW5lRGF0YS5zbmFwc2hvdHMubGVuZ3RoIC0gMSAmJlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1ibGFjayB3My1yb3VuZFwiIG9uQ2xpY2s9e2Zhc3RGb3J3YXJkfT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5mYXN0X2ZvcndhcmQ8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWRpc3BsYXktdG9wbGVmdCBjb21tb25Gb250RmFtaWx5XCI+XHJcbiAgICAgICAgICAgIDxwPiZuYnNwO0NsaWNrIG9uIGEgbW92ZSBpbiB0aGUgbW92ZSBsaXN0IHRvIGp1bXAgdG8gd2hlcmUgaXQgd2FzIHBsYXllZDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LWJvdHRvbWxlZnQgY29tbW9uRm9udEZhbWlseVwiPlxyXG4gICAgICAgICAgICA8cD4mbmJzcDtDbGljayBvbiBhIHRpbGUgb24gdGhlIGJvYXJkIHRvIGp1bXAgdG8gd2hlcmUgaXQgd2FzIHBsYXllZDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1kaXNwbGF5LXRvcHJpZ2h0IGNvbW1vbkZvbnRGYW1pbHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVyYWNrXCI+Q2xpY2sgb24gdGhlIDxzcGFuIGNsYXNzTmFtZT1cInBiVGlsZXJhY2tBcnJvd0luRm9vdGVyXCI+IDwvc3Bhbj4gYnkgdGhlIHJhY2sgdG8gYWR2YW5jZSBvbmUgbW92ZSZuYnNwOzwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IEV4YW1pbmVyVGlsZVJhY2sgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBzZWxlY3RlZFVuc2VsZWN0ZWQgPSBcIlVuc2VsZWN0ZWQgXCI7XHJcbiAgY29uc3QgdU5vdFUgPSBwcm9wcy50aWxldmFsdWUgPT09IFwiUVwiID8gXCJ1IFwiIDogXCJcIjtcclxuICBjb25zdCB0aWxlY2xhc3MgPSBcInBiVGlsZU9uUmFjayBcIiArIHNlbGVjdGVkVW5zZWxlY3RlZCArIHVOb3RVICsgcHJvcHMucGFydGljaXBhbnQ7XHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgICAga2V5PXtwcm9wcy50aWxlaW5kZXh9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3RpbGVjbGFzc31cclxuICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYlRpbGVPblJhY2tUZXh0XCI+e3Byb3BzLnRpbGV2YWx1ZX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhhbWluZTsiXSwic291cmNlUm9vdCI6IiJ9