webpackHotUpdate_N_E("pages/pb/prisonbreak",{

/***/ "./pages/pb/lobby.js":
/*!***************************!*\
  !*** ./pages/pb/lobby.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pb_chatSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pb/chatSection */ "./pages/pb/chatSection.js");
/* harmony import */ var _lib_pbconstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/pbconstants */ "./lib/pbconstants.js");


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\pb\\lobby.js",
    _s = $RefreshSig$();





const buttonClassName = 'w3-button w3-border w3-blue w3-hover-black w3-round';
const availableActionNone = 0;
const availableActionStart = 1;
const availableActionJoin = 2;
const availableActionReconnect = 3;

const Lobby = ({
  client,
  setIsrejoin,
  wsmessage,
  gameid,
  setGameid,
  nickname,
  setNickname,
  setParticipant,
  racksize,
  setRacksize // Option for rack size

}) => {
  _s();

  const {
    0: gamelist,
    1: setGamelist
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // Game info by game id

  const {
    0: chatmsgs,
    1: setChatmsgs
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let msg = wsmessage;
    if (msg !== '') processLobbyMessage(msg);
  }, [wsmessage]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    scrollToBottom("ScrollableChat");
  }, [chatmsgs]);

  function processLobbyMessage(message) {
    let messageData = JSON.parse(message);

    if (messageData.func === "chat") {
      let newChatmsgs = [...chatmsgs, {
        from: messageData.nickname,
        msg: messageData.sendmsg
      }];
      setChatmsgs(newChatmsgs);
      return;
    }

    let sendergameid = messageData.gameid;
    let sendernickname = messageData.nickname;
    let wt = messageData.whoseturn;
    let rs = messageData.racksize;

    if (sendergameid && sendergameid.length > 0 && rs && wt && wt.length > 0) {
      let anyUpdates = false;
      let senderPG = messageData.sender;
      let newGamelist = [...gamelist];
      let gi = getGamelistIndex(sendergameid);
      let newPlayingP = senderPG === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_4__["PARTY_TYPE_PRISONERS"] ? true : gi > -1 ? gamelist[gi].playingP : false;
      let newPlayingG = senderPG === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_4__["PARTY_TYPE_GUARDS"] ? true : gi > -1 ? gamelist[gi].playingG : false;
      let newRacksize = rs;
      let newgamestatus = "Unknown";

      if (wt === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_4__["WHOSE_TURN_GAMEOVER"]) {
        newgamestatus = "Game over";
      } else if (wt === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_4__["WHOSE_TURN_PRISONERS"]) {
        newgamestatus = "Prisoners turn";
      } else if (wt === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_4__["WHOSE_TURN_GUARDS"]) {
        newgamestatus = "Guards turn";
      }

      let newgamedata = {
        gameid: sendergameid,
        nicknameP: senderPG === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_4__["PARTY_TYPE_PRISONERS"] ? sendernickname : gi > -1 ? gamelist[gi].nicknameP : "",
        nicknameG: senderPG === _lib_pbconstants__WEBPACK_IMPORTED_MODULE_4__["PARTY_TYPE_GUARDS"] ? sendernickname : gi > -1 ? gamelist[gi].nicknameG : "",
        gamestatus: newgamestatus,
        playingP: newPlayingP,
        playingG: newPlayingG,
        racksize: newRacksize
      };

      if (gi < 0) {
        // Game not in list yet, put it in the list
        anyUpdates = true;
        newGamelist = [...newGamelist, newgamedata];
      } else {
        // Game is in the list, check for needed updates
        let oldgamedata = gamelist[gi];

        if (oldgamedata.nicknameP !== newgamedata.nicknameP || oldgamedata.nicknameG !== newgamedata.nicknameG || oldgamedata.gamestatus !== newgamedata.gamestatus || oldgamedata.playingP !== newgamedata.playingP || oldgamedata.playingG !== newgamedata.playingG || oldgamedata.racksize !== newgamedata.racksize) {
          anyUpdates = true;
          newGamelist[gi] = newgamedata;
        }
      }

      if (anyUpdates) {
        setGamelist(newGamelist);
      }
    }
  }

  function getGamelistIndex(gid) {
    for (var i = 0; i < gamelist.length; ++i) {
      if (gamelist[i].gameid === gid) {
        return i;
      }
    }

    return -1;
  }

  function isPlayingP(gid) {
    let gi = getGamelistIndex(gid);
    return gi < 0 ? false : gamelist[gi].playingP;
  }

  function availableActionP(gd) {
    if (nickname.length === 0 || gd.gamestatus === "Game over") {
      return availableActionNone;
    }

    if (!gd.playingP) {
      return availableActionStart;
    }

    if (gd.nicknameP === nickname) {
      return availableActionReconnect;
    }

    return availableActionNone;
  }

  function availableActionG(gd) {
    if (nickname.length === 0 || gd.gamestatus === "Game over") {
      return availableActionNone;
    }

    if (!gd.playingG) {
      return availableActionJoin;
    }

    if (gd.nicknameG === nickname) {
      return availableActionReconnect;
    }

    return availableActionNone;
  }

  function selectRackSize(newRacksize) {
    setRacksize(newRacksize);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-container w3-teal w3-bar",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "w3-bar-item w3-centre myHeadingFont",
        children: "Prison Break Lobby"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-bar-item w3-right",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "../../",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "material-icons",
              "data-toggle": "tooltip",
              title: "Home",
              children: "home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 18
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-container w3-cell",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-bar",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w3-bar-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                children: "Nickname:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w3-bar-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              className: "w3-input w3-border w3-blue myCommonFont",
              type: "text",
              name: "nickname",
              value: nickname,
              onChange: e => {
                setNickname(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-bar",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w3-bar-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "pbPlayerTitle",
                children: ["PRISONERS", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "material-icons",
                  children: "arrow_right"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 64
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 23
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w3-bar-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                children: "Game ID:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 23
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w3-bar-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              className: "w3-input w3-border w3-blue myCommonFont",
              type: "text",
              name: "gameid",
              value: gameid,
              onChange: e => {
                setGameid(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w3-bar-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                children: "Rack Size:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 23
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w3-bar-item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              id: "selectracksize4",
              className: racksize === 4 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize",
              onClick: () => selectRackSize(4),
              "data-toggle": "tooltip",
              title: "4 letter racks, 9 x 9 board",
              autoFocus: true,
              children: "4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              id: "selectracksize5",
              className: racksize === 5 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize",
              onClick: () => selectRackSize(5),
              "data-toggle": "tooltip",
              title: "5 letter racks, 11 x 11 board",
              children: "5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              id: "selectracksize6",
              className: racksize === 6 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize",
              onClick: () => selectRackSize(6),
              "data-toggle": "tooltip",
              title: "6 letter racks, 13 x 13 board",
              children: "6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              id: "selectracksize7",
              className: racksize === 7 ? "pbLobbyRackSizeSelected" : "pbLobbyRackSize",
              onClick: () => selectRackSize(7),
              "data-toggle": "tooltip",
              title: "7 letter racks, 15 x 15 board",
              children: "7"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "pbLobbyCellBlockInfo",
              children: [racksize, " letter racks, ", racksize * 2 + 1, " x ", racksize * 2 + 1, " board."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w3-bar-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              id: "startgame",
              className: buttonClassName,
              onClick: function () {
                if (nickname.length === 0) {
                  window.alert("Please enter nickname before starting a game");
                } else if (gameid.length > 0) {
                  if (isPlayingP(gameid)) {
                    window.alert("Prisoners already playing that game");
                  } else {
                    setParticipant(_lib_pbconstants__WEBPACK_IMPORTED_MODULE_4__["PARTY_TYPE_PRISONERS"]);
                  }
                } else {
                  window.alert("Please enter Game ID before starting a game");
                }
              },
              children: "Start Game"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-bar",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w3-bar-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "pbPlayerTitle",
                children: ["GUARDS", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "material-icons",
                  children: "arrow_right"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 59
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w3-bar-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "myCommonFont",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Find and click the \"Join Game\" button for your game."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 48
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-bar",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w3-bar-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "material-icons w3-right",
                children: "report_problem"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w3-bar-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              className: "myCommonFont",
              children: "If you lost connection, find and click the \"Reconnect\" button for your game id."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w3-container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w3-bar",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w3-bar-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "myCommonFont",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                children: "Game list:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 231,
                columnNumber: 46
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w3-bar-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
              className: "w3-table-all w3-card-4",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  className: "w3-blue h4 myCommonFont",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    className: "w3-border-right",
                    children: "Game ID"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 237,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    className: "w3-border-right",
                    children: "Prisoners"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 238,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    className: "w3-border-right",
                    children: "Guards"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 239,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    className: "w3-border-right",
                    children: "Rack Size"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 240,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    children: "Game Status"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 241,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 236,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                children: gamelist.map((value, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  className: "myCommonFont w3-hover-green",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: "w3-border-right",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                      children: value.gameid
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 247,
                      columnNumber: 57
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 247,
                    columnNumber: 25
                  }, undefined), availableActionP(value) === availableActionNone ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    id: `PrisonersNoAction${index}`,
                    className: "w3-border-right",
                    children: "No action available"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 249,
                    columnNumber: 27
                  }, undefined) : availableActionP(value) === availableActionReconnect ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    id: `PrisonersRejoin${index}`,
                    className: "w3-border-right",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      className: "w3-button w3-red w3-round w3-hover-black",
                      onClick: function () {
                        setIsrejoin(true);
                        setGameid(value.gameid);
                        setParticipant(_lib_pbconstants__WEBPACK_IMPORTED_MODULE_4__["PARTY_TYPE_PRISONERS"]);
                        setRacksize(value.racksize);
                      },
                      children: "Reconnect"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 252,
                      columnNumber: 29
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 251,
                    columnNumber: 27
                  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    id: `PrisonersStart${index}`,
                    className: "w3-border-right",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      className: buttonClassName,
                      onClick: function () {
                        setGameid(value.gameid);
                        setParticipant(_lib_pbconstants__WEBPACK_IMPORTED_MODULE_4__["PARTY_TYPE_PRISONERS"]);
                      },
                      children: "Start Game"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 265,
                      columnNumber: 29
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 264,
                    columnNumber: 27
                  }, undefined), availableActionG(value) === availableActionNone ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    id: `GuardsNoAction${index}`,
                    className: "w3-border-right",
                    children: "No action available"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 276,
                    columnNumber: 27
                  }, undefined) : availableActionG(value) === availableActionReconnect ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    id: `GuardsRejoin${index}`,
                    className: "w3-border-right",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      className: buttonClassName,
                      onClick: function () {
                        setIsrejoin(true);
                        setGameid(value.gameid);
                        setParticipant(_lib_pbconstants__WEBPACK_IMPORTED_MODULE_4__["PARTY_TYPE_GUARDS"]);
                        setRacksize(value.racksize);
                      },
                      children: "Reconnect"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 279,
                      columnNumber: 29
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 278,
                    columnNumber: 27
                  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    id: `GuardsJoin${index}`,
                    className: "w3-border-right",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      className: buttonClassName,
                      onClick: function () {
                        setGameid(value.gameid);
                        setParticipant(_lib_pbconstants__WEBPACK_IMPORTED_MODULE_4__["PARTY_TYPE_GUARDS"]);
                        setRacksize(value.racksize);
                      },
                      children: "Join Game"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 292,
                      columnNumber: 29
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 291,
                    columnNumber: 27
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    id: `RackSize${index}`,
                    className: "w3-center w3-border-right",
                    children: value.racksize
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 303,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    id: `GameStatus${index}`,
                    children: value.gamestatus
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 306,
                    columnNumber: 25
                  }, undefined)]
                }, `OtherGame${index}`, true, {
                  fileName: _jsxFileName,
                  lineNumber: 246,
                  columnNumber: 23
                }, undefined))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-container w3-cell",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pb_chatSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
        client: client,
        nickname: nickname,
        msgs: chatmsgs,
        setMsgs: setChatmsgs
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w3-container w3-teal",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Have fun!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 7
  }, undefined);
};

_s(Lobby, "zseng7CV3m9Wt0DcQEV601TG+Fw=");

_c = Lobby;

const scrollToBottom = elementid => {
  const theElement = document.getElementById(elementid);
  theElement.scrollTop = theElement.scrollHeight;
};

/* harmony default export */ __webpack_exports__["default"] = (Lobby);

var _c;

$RefreshReg$(_c, "Lobby");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGIvbG9iYnkuanMiXSwibmFtZXMiOlsiYnV0dG9uQ2xhc3NOYW1lIiwiYXZhaWxhYmxlQWN0aW9uTm9uZSIsImF2YWlsYWJsZUFjdGlvblN0YXJ0IiwiYXZhaWxhYmxlQWN0aW9uSm9pbiIsImF2YWlsYWJsZUFjdGlvblJlY29ubmVjdCIsIkxvYmJ5IiwiY2xpZW50Iiwic2V0SXNyZWpvaW4iLCJ3c21lc3NhZ2UiLCJnYW1laWQiLCJzZXRHYW1laWQiLCJuaWNrbmFtZSIsInNldE5pY2tuYW1lIiwic2V0UGFydGljaXBhbnQiLCJyYWNrc2l6ZSIsInNldFJhY2tzaXplIiwiZ2FtZWxpc3QiLCJzZXRHYW1lbGlzdCIsInVzZVN0YXRlIiwiY2hhdG1zZ3MiLCJzZXRDaGF0bXNncyIsInVzZUVmZmVjdCIsIm1zZyIsInByb2Nlc3NMb2JieU1lc3NhZ2UiLCJzY3JvbGxUb0JvdHRvbSIsIm1lc3NhZ2UiLCJtZXNzYWdlRGF0YSIsIkpTT04iLCJwYXJzZSIsImZ1bmMiLCJuZXdDaGF0bXNncyIsImZyb20iLCJzZW5kbXNnIiwic2VuZGVyZ2FtZWlkIiwic2VuZGVybmlja25hbWUiLCJ3dCIsIndob3NldHVybiIsInJzIiwibGVuZ3RoIiwiYW55VXBkYXRlcyIsInNlbmRlclBHIiwic2VuZGVyIiwibmV3R2FtZWxpc3QiLCJnaSIsImdldEdhbWVsaXN0SW5kZXgiLCJuZXdQbGF5aW5nUCIsImMiLCJwbGF5aW5nUCIsIm5ld1BsYXlpbmdHIiwicGxheWluZ0ciLCJuZXdSYWNrc2l6ZSIsIm5ld2dhbWVzdGF0dXMiLCJuZXdnYW1lZGF0YSIsIm5pY2tuYW1lUCIsIm5pY2tuYW1lRyIsImdhbWVzdGF0dXMiLCJvbGRnYW1lZGF0YSIsImdpZCIsImkiLCJpc1BsYXlpbmdQIiwiYXZhaWxhYmxlQWN0aW9uUCIsImdkIiwiYXZhaWxhYmxlQWN0aW9uRyIsInNlbGVjdFJhY2tTaXplIiwiZSIsInRhcmdldCIsInZhbHVlIiwid2luZG93IiwiYWxlcnQiLCJtYXAiLCJpbmRleCIsImVsZW1lbnRpZCIsInRoZUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGVBQWUsR0FBRyxxREFBeEI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxDQUE1QjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHLENBQTdCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcsQ0FBNUI7QUFDQSxNQUFNQyx3QkFBd0IsR0FBRyxDQUFqQzs7QUFFQSxNQUFNQyxLQUFLLEdBQUcsQ0FBQztBQUFDQyxRQUFEO0FBQVNDLGFBQVQ7QUFBc0JDLFdBQXRCO0FBQWlDQyxRQUFqQztBQUF5Q0MsV0FBekM7QUFBb0RDLFVBQXBEO0FBQThEQyxhQUE5RDtBQUEyRUMsZ0JBQTNFO0FBQ1RDLFVBRFM7QUFDQ0MsYUFERCxDQUNhOztBQURiLENBQUQsS0FFSjtBQUFBOztBQUNOLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQyxFQUFELENBQXhDLENBRE0sQ0FDdUM7O0FBQzdDLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkYsc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBRUFHLHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUlDLEdBQUcsR0FBR2QsU0FBVjtBQUNBLFFBQUljLEdBQUcsS0FBSyxFQUFaLEVBQWdCQyxtQkFBbUIsQ0FBQ0QsR0FBRCxDQUFuQjtBQUNqQixHQUhRLEVBR1AsQ0FBQ2QsU0FBRCxDQUhPLENBQVQ7QUFJQWEseURBQVMsQ0FBQyxNQUFNO0FBQ2RHLGtCQUFjLENBQUMsZ0JBQUQsQ0FBZDtBQUNELEdBRlEsRUFFUCxDQUFDTCxRQUFELENBRk8sQ0FBVDs7QUFJQSxXQUFTSSxtQkFBVCxDQUE2QkUsT0FBN0Is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QUE7QUFBQTtBQUFBLGlCQTNNRixlQThNRTtBQUFLLGVBQVMsRUFBQyxzQkFBZjtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5TUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFvTkQsQ0F6VEg7O0dBQU1mLEs7O0tBQUFBLEs7O0FBMlROLE1BQU1tQixjQUFjLEdBQUkrQyxTQUFELElBQWU7QUFDcEMsUUFBTUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JILFNBQXhCLENBQW5CO0FBQ0FDLFlBQVUsQ0FBQ0csU0FBWCxHQUF1QkgsVUFBVSxDQUFDSSxZQUFsQztBQUNELENBSEQ7O0FBS2V2RSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYi9wcmlzb25icmVhay4zNmRiYTMwZTY4Nzk3MWEzM2UzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQ2hhdCBmcm9tICcuLi9wYi9jaGF0U2VjdGlvbic7XHJcbmltcG9ydCAqIGFzIGMgZnJvbSAnLi4vLi4vbGliL3BiY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IGJ1dHRvbkNsYXNzTmFtZSA9ICd3My1idXR0b24gdzMtYm9yZGVyIHczLWJsdWUgdzMtaG92ZXItYmxhY2sgdzMtcm91bmQnO1xyXG5jb25zdCBhdmFpbGFibGVBY3Rpb25Ob25lID0gMDtcclxuY29uc3QgYXZhaWxhYmxlQWN0aW9uU3RhcnQgPSAxO1xyXG5jb25zdCBhdmFpbGFibGVBY3Rpb25Kb2luID0gMjtcclxuY29uc3QgYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0ID0gMztcclxuXHJcbmNvbnN0IExvYmJ5ID0gKHtjbGllbnQsIHNldElzcmVqb2luLCB3c21lc3NhZ2UsIGdhbWVpZCwgc2V0R2FtZWlkLCBuaWNrbmFtZSwgc2V0Tmlja25hbWUsIHNldFBhcnRpY2lwYW50XHJcbiAgICAsIHJhY2tzaXplLCBzZXRSYWNrc2l6ZSAvLyBPcHRpb24gZm9yIHJhY2sgc2l6ZVxyXG4gICAgfSkgPT4ge1xyXG4gICAgY29uc3QgW2dhbWVsaXN0LCBzZXRHYW1lbGlzdF0gPSB1c2VTdGF0ZShbXSkgLy8gR2FtZSBpbmZvIGJ5IGdhbWUgaWRcclxuICAgIGNvbnN0IFtjaGF0bXNncywgc2V0Q2hhdG1zZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgbGV0IG1zZyA9IHdzbWVzc2FnZTtcclxuICAgICAgaWYgKG1zZyAhPT0gJycpIHByb2Nlc3NMb2JieU1lc3NhZ2UobXNnKTtcclxuICAgIH0sW3dzbWVzc2FnZV0pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzY3JvbGxUb0JvdHRvbShcIlNjcm9sbGFibGVDaGF0XCIpO1xyXG4gICAgfSxbY2hhdG1zZ3NdKVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0xvYmJ5TWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgIGxldCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICAgIGlmIChtZXNzYWdlRGF0YS5mdW5jID09PSBcImNoYXRcIikge1xyXG4gICAgICAgIGxldCBuZXdDaGF0bXNncyA9IFsuLi5jaGF0bXNncywge2Zyb206IG1lc3NhZ2VEYXRhLm5pY2tuYW1lLCBtc2c6IG1lc3NhZ2VEYXRhLnNlbmRtc2d9XTtcclxuICAgICAgICBzZXRDaGF0bXNncyhuZXdDaGF0bXNncyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBzZW5kZXJnYW1laWQgPSBtZXNzYWdlRGF0YS5nYW1laWQ7XHJcbiAgICAgIGxldCBzZW5kZXJuaWNrbmFtZSA9IG1lc3NhZ2VEYXRhLm5pY2tuYW1lO1xyXG4gICAgICBsZXQgd3QgPSBtZXNzYWdlRGF0YS53aG9zZXR1cm47XHJcbiAgICAgIGxldCBycyA9IG1lc3NhZ2VEYXRhLnJhY2tzaXplO1xyXG4gICAgICBpZiAoc2VuZGVyZ2FtZWlkICYmIHNlbmRlcmdhbWVpZC5sZW5ndGggPiAwICYmIHJzICYmIHd0ICYmIHd0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgYW55VXBkYXRlcyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBzZW5kZXJQRyA9IG1lc3NhZ2VEYXRhLnNlbmRlcjtcclxuICAgICAgICBsZXQgbmV3R2FtZWxpc3QgPSBbLi4uZ2FtZWxpc3RdO1xyXG4gICAgICAgIGxldCBnaSA9IGdldEdhbWVsaXN0SW5kZXgoc2VuZGVyZ2FtZWlkKTtcclxuICAgICAgICBsZXQgbmV3UGxheWluZ1AgPSBzZW5kZXJQRyA9PT0gYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyA/IHRydWUgOiBnaSA+IC0xID8gZ2FtZWxpc3RbZ2ldLnBsYXlpbmdQIDogZmFsc2U7XHJcbiAgICAgICAgbGV0IG5ld1BsYXlpbmdHID0gc2VuZGVyUEcgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMgPyB0cnVlIDogZ2kgPiAtMSA/IGdhbWVsaXN0W2dpXS5wbGF5aW5nRyA6IGZhbHNlO1xyXG4gICAgICAgIGxldCBuZXdSYWNrc2l6ZSA9IHJzO1xyXG5cclxuICAgICAgICBsZXQgbmV3Z2FtZXN0YXR1cyA9IFwiVW5rbm93blwiO1xyXG4gICAgICAgIGlmICh3dCA9PT0gYy5XSE9TRV9UVVJOX0dBTUVPVkVSKSB7XHJcbiAgICAgICAgICBuZXdnYW1lc3RhdHVzID0gXCJHYW1lIG92ZXJcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHd0ID09PSBjLldIT1NFX1RVUk5fUFJJU09ORVJTKSB7XHJcbiAgICAgICAgICBuZXdnYW1lc3RhdHVzID0gXCJQcmlzb25lcnMgdHVyblwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAod3QgPT09IGMuV0hPU0VfVFVSTl9HVUFSRFMpIHtcclxuICAgICAgICAgIG5ld2dhbWVzdGF0dXMgPSBcIkd1YXJkcyB0dXJuXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbmV3Z2FtZWRhdGEgPSB7XHJcbiAgICAgICAgICBnYW1laWQ6IHNlbmRlcmdhbWVpZCxcclxuICAgICAgICAgIG5pY2tuYW1lUDogc2VuZGVyUEcgPT09IGMuUEFSVFlfVFlQRV9QUklTT05FUlMgPyBzZW5kZXJuaWNrbmFtZSA6IGdpID4gLTEgPyBnYW1lbGlzdFtnaV0ubmlja25hbWVQIDogXCJcIixcclxuICAgICAgICAgIG5pY2tuYW1lRzogc2VuZGVyUEcgPT09IGMuUEFSVFlfVFlQRV9HVUFSRFMgPyBzZW5kZXJuaWNrbmFtZSA6IGdpID4gLTEgPyBnYW1lbGlzdFtnaV0ubmlja25hbWVHIDogXCJcIixcclxuICAgICAgICAgIGdhbWVzdGF0dXM6IG5ld2dhbWVzdGF0dXMsXHJcbiAgICAgICAgICBwbGF5aW5nUDogbmV3UGxheWluZ1AsXHJcbiAgICAgICAgICBwbGF5aW5nRzogbmV3UGxheWluZ0csXHJcbiAgICAgICAgICByYWNrc2l6ZTogbmV3UmFja3NpemVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdpIDwgMCkgeyAvLyBHYW1lIG5vdCBpbiBsaXN0IHlldCwgcHV0IGl0IGluIHRoZSBsaXN0XHJcbiAgICAgICAgICBhbnlVcGRhdGVzID0gdHJ1ZTtcclxuICAgICAgICAgIG5ld0dhbWVsaXN0ID0gWy4uLm5ld0dhbWVsaXN0LCBuZXdnYW1lZGF0YV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgeyAvLyBHYW1lIGlzIGluIHRoZSBsaXN0LCBjaGVjayBmb3IgbmVlZGVkIHVwZGF0ZXNcclxuICAgICAgICAgIGxldCBvbGRnYW1lZGF0YSA9IGdhbWVsaXN0W2dpXTtcclxuICAgICAgICAgIGlmIChvbGRnYW1lZGF0YS5uaWNrbmFtZVAgIT09IG5ld2dhbWVkYXRhLm5pY2tuYW1lUCB8fFxyXG4gICAgICAgICAgICAgIG9sZGdhbWVkYXRhLm5pY2tuYW1lRyAhPT0gbmV3Z2FtZWRhdGEubmlja25hbWVHIHx8XHJcbiAgICAgICAgICAgICAgb2xkZ2FtZWRhdGEuZ2FtZXN0YXR1cyAhPT0gbmV3Z2FtZWRhdGEuZ2FtZXN0YXR1cyB8fFxyXG4gICAgICAgICAgICAgIG9sZGdhbWVkYXRhLnBsYXlpbmdQICE9PSBuZXdnYW1lZGF0YS5wbGF5aW5nUCB8fFxyXG4gICAgICAgICAgICAgIG9sZGdhbWVkYXRhLnBsYXlpbmdHICE9PSBuZXdnYW1lZGF0YS5wbGF5aW5nRyB8fFxyXG4gICAgICAgICAgICAgIG9sZGdhbWVkYXRhLnJhY2tzaXplICE9PSBuZXdnYW1lZGF0YS5yYWNrc2l6ZVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICBhbnlVcGRhdGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBuZXdHYW1lbGlzdFtnaV0gPSBuZXdnYW1lZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYW55VXBkYXRlcykge1xyXG4gICAgICAgICAgc2V0R2FtZWxpc3QobmV3R2FtZWxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSAgXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRHYW1lbGlzdEluZGV4KGdpZCkge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdhbWVsaXN0Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgaWYgKGdhbWVsaXN0W2ldLmdhbWVpZCA9PT0gZ2lkKSB7XHJcbiAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNQbGF5aW5nUChnaWQpIHtcclxuICAgICAgbGV0IGdpID0gZ2V0R2FtZWxpc3RJbmRleChnaWQpO1xyXG4gICAgICByZXR1cm4gZ2kgPCAwID8gZmFsc2UgOiBnYW1lbGlzdFtnaV0ucGxheWluZ1A7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhdmFpbGFibGVBY3Rpb25QKGdkKSB7XHJcbiAgICAgIGlmIChuaWNrbmFtZS5sZW5ndGggPT09IDAgfHwgZ2QuZ2FtZXN0YXR1cyA9PT0gXCJHYW1lIG92ZXJcIikgeyByZXR1cm4gYXZhaWxhYmxlQWN0aW9uTm9uZTsgfVxyXG4gICAgICBpZiAoIWdkLnBsYXlpbmdQKSB7IHJldHVybiBhdmFpbGFibGVBY3Rpb25TdGFydDsgfVxyXG4gICAgICBpZiAoZ2Qubmlja25hbWVQID09PSBuaWNrbmFtZSkgeyByZXR1cm4gYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0OyB9XHJcbiAgICAgIHJldHVybiBhdmFpbGFibGVBY3Rpb25Ob25lO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXZhaWxhYmxlQWN0aW9uRyhnZCkge1xyXG4gICAgICBpZiAobmlja25hbWUubGVuZ3RoID09PSAwIHx8IGdkLmdhbWVzdGF0dXMgPT09IFwiR2FtZSBvdmVyXCIpIHsgcmV0dXJuIGF2YWlsYWJsZUFjdGlvbk5vbmU7IH1cclxuICAgICAgaWYgKCFnZC5wbGF5aW5nRykgeyByZXR1cm4gYXZhaWxhYmxlQWN0aW9uSm9pbjsgfVxyXG4gICAgICBpZiAoZ2Qubmlja25hbWVHID09PSBuaWNrbmFtZSkgeyByZXR1cm4gYXZhaWxhYmxlQWN0aW9uUmVjb25uZWN0OyB9XHJcbiAgICAgIHJldHVybiBhdmFpbGFibGVBY3Rpb25Ob25lO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2VsZWN0UmFja1NpemUobmV3UmFja3NpemUpIHtcclxuICAgICAgc2V0UmFja3NpemUobmV3UmFja3NpemUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My10ZWFsIHczLWJhclwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInczLWJhci1pdGVtIHczLWNlbnRyZSBteUhlYWRpbmdGb250XCI+UHJpc29uIEJyZWFrIExvYmJ5PC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW0gdzMtcmlnaHRcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIuLi8uLi9cIn0+XHJcbiAgICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIkhvbWVcIj5ob21lPC9pPjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXIgdzMtY2VsbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+PGI+Tmlja25hbWU6PC9iPjwvaDI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInczLWlucHV0IHczLWJvcmRlciB3My1ibHVlIG15Q29tbW9uRm9udFwiIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5pY2tuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e25pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXROaWNrbmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIH0gfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPGgyPjxzcGFuIGNsYXNzTmFtZT1cInBiUGxheWVyVGl0bGVcIj5QUklTT05FUlM8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFycm93X3JpZ2h0PC9pPjwvc3Bhbj48L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj48Yj5HYW1lIElEOjwvYj48L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3My1pbnB1dCB3My1ib3JkZXIgdzMtYmx1ZSBteUNvbW1vbkZvbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2FtZWlkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Z2FtZWlkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDI+PGI+UmFjayBTaXplOjwvYj48L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZWxlY3RyYWNrc2l6ZTRcIiBjbGFzc05hbWU9e3JhY2tzaXplID09PSA0ID8gXCJwYkxvYmJ5UmFja1NpemVTZWxlY3RlZFwiIDogXCJwYkxvYmJ5UmFja1NpemVcIn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RSYWNrU2l6ZSg0KX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIjQgbGV0dGVyIHJhY2tzLCA5IHggOSBib2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA0XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic2VsZWN0cmFja3NpemU1XCIgY2xhc3NOYW1lPXtyYWNrc2l6ZSA9PT0gNSA/IFwicGJMb2JieVJhY2tTaXplU2VsZWN0ZWRcIiA6IFwicGJMb2JieVJhY2tTaXplXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0UmFja1NpemUoNSl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCI1IGxldHRlciByYWNrcywgMTEgeCAxMSBib2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA1XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic2VsZWN0cmFja3NpemU2XCIgY2xhc3NOYW1lPXtyYWNrc2l6ZSA9PT0gNiA/IFwicGJMb2JieVJhY2tTaXplU2VsZWN0ZWRcIiA6IFwicGJMb2JieVJhY2tTaXplXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0UmFja1NpemUoNil9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCI2IGxldHRlciByYWNrcywgMTMgeCAxMyBib2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA2XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic2VsZWN0cmFja3NpemU3XCIgY2xhc3NOYW1lPXtyYWNrc2l6ZSA9PT0gNyA/IFwicGJMb2JieVJhY2tTaXplU2VsZWN0ZWRcIiA6IFwicGJMb2JieVJhY2tTaXplXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0UmFja1NpemUoNyl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCI3IGxldHRlciByYWNrcywgMTUgeCAxNSBib2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA3XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYkxvYmJ5Q2VsbEJsb2NrSW5mb1wiPntyYWNrc2l6ZX0gbGV0dGVyIHJhY2tzLCB7cmFja3NpemUqMisxfSB4IHtyYWNrc2l6ZSoyKzF9IGJvYXJkLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdGFydGdhbWVcIiBjbGFzc05hbWU9e2J1dHRvbkNsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAobmlja25hbWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIlBsZWFzZSBlbnRlciBuaWNrbmFtZSBiZWZvcmUgc3RhcnRpbmcgYSBnYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChnYW1laWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNQbGF5aW5nUChnYW1laWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiUHJpc29uZXJzIGFscmVhZHkgcGxheWluZyB0aGF0IGdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFydGljaXBhbnQoYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIlBsZWFzZSBlbnRlciBHYW1lIElEIGJlZm9yZSBzdGFydGluZyBhIGdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTdGFydCBHYW1lXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxoMj48c3BhbiBjbGFzc05hbWU9XCJwYlBsYXllclRpdGxlXCI+R1VBUkRTPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hcnJvd19yaWdodDwvaT48L3NwYW4+PC9oMj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteUNvbW1vbkZvbnRcIj48aDI+RmluZCBhbmQgY2xpY2sgdGhlIFwiSm9pbiBHYW1lXCIgYnV0dG9uIGZvciB5b3VyIGdhbWUuPC9oMj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxoMT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyB3My1yaWdodFwiPnJlcG9ydF9wcm9ibGVtPC9pPjwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm15Q29tbW9uRm9udFwiPklmIHlvdSBsb3N0IGNvbm5lY3Rpb24sIGZpbmQgYW5kIGNsaWNrIHRoZSBcIlJlY29ubmVjdFwiIGJ1dHRvbiBmb3IgeW91ciBnYW1lIGlkLjwvaDM+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJteUNvbW1vbkZvbnRcIj48Yj5HYW1lIGxpc3Q6PC9iPjwvaDI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInczLXRhYmxlLWFsbCB3My1jYXJkLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJ3My1ibHVlIGg0IG15Q29tbW9uRm9udFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPkdhbWUgSUQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPlByaXNvbmVyczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+R3VhcmRzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5SYWNrIFNpemU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPkdhbWUgU3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge2dhbWVsaXN0Lm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgT3RoZXJHYW1lJHtpbmRleH1gfSBjbGFzc05hbWU9XCJteUNvbW1vbkZvbnQgdzMtaG92ZXItZ3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPjxiPnt2YWx1ZS5nYW1laWR9PC9iPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthdmFpbGFibGVBY3Rpb25QKHZhbHVlKSA9PT0gYXZhaWxhYmxlQWN0aW9uTm9uZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgUHJpc29uZXJzTm9BY3Rpb24ke2luZGV4fWB9IGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPk5vIGFjdGlvbiBhdmFpbGFibGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGF2YWlsYWJsZUFjdGlvblAodmFsdWUpID09PSBhdmFpbGFibGVBY3Rpb25SZWNvbm5lY3QgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YFByaXNvbmVyc1Jlam9pbiR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInczLWJ1dHRvbiB3My1yZWQgdzMtcm91bmQgdzMtaG92ZXItYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNyZWpvaW4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKHZhbHVlLmdhbWVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFydGljaXBhbnQoYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmFja3NpemUodmFsdWUucmFja3NpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVjb25uZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BQcmlzb25lcnNTdGFydCR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKHZhbHVlLmdhbWVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFydGljaXBhbnQoYy5QQVJUWV9UWVBFX1BSSVNPTkVSUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydCBHYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthdmFpbGFibGVBY3Rpb25HKHZhbHVlKSA9PT0gYXZhaWxhYmxlQWN0aW9uTm9uZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgR3VhcmRzTm9BY3Rpb24ke2luZGV4fWB9IGNsYXNzTmFtZT1cInczLWJvcmRlci1yaWdodFwiPk5vIGFjdGlvbiBhdmFpbGFibGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGF2YWlsYWJsZUFjdGlvbkcodmFsdWUpID09PSBhdmFpbGFibGVBY3Rpb25SZWNvbm5lY3QgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YEd1YXJkc1Jlam9pbiR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidzMtYm9yZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNyZWpvaW4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FtZWlkKHZhbHVlLmdhbWVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFydGljaXBhbnQoYy5QQVJUWV9UWVBFX0dVQVJEUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmFja3NpemUodmFsdWUucmFja3NpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVjb25uZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9e2BHdWFyZHNKb2luJHtpbmRleH1gfSBjbGFzc05hbWU9XCJ3My1ib3JkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtidXR0b25DbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRHYW1laWQodmFsdWUuZ2FtZWlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQYXJ0aWNpcGFudChjLlBBUlRZX1RZUEVfR1VBUkRTKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSYWNrc2l6ZSh2YWx1ZS5yYWNrc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKb2luIEdhbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPXtgUmFja1NpemUke2luZGV4fWB9IGNsYXNzTmFtZT1cInczLWNlbnRlciB3My1ib3JkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUucmFja3NpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD17YEdhbWVTdGF0dXMke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS5nYW1lc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXIgdzMtY2VsbFwiPlxyXG4gICAgICAgICAgPENoYXQgY2xpZW50PXtjbGllbnR9IG5pY2tuYW1lPXtuaWNrbmFtZX0gbXNncz17Y2hhdG1zZ3N9IHNldE1zZ3M9e3NldENoYXRtc2dzfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb250YWluZXIgdzMtdGVhbFwiPlxyXG4gICAgICAgICAgPGgxPkhhdmUgZnVuITwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuY29uc3Qgc2Nyb2xsVG9Cb3R0b20gPSAoZWxlbWVudGlkKSA9PiB7XHJcbiAgY29uc3QgdGhlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRpZCk7XHJcbiAgdGhlRWxlbWVudC5zY3JvbGxUb3AgPSB0aGVFbGVtZW50LnNjcm9sbEhlaWdodDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9iYnk7ICAiXSwic291cmNlUm9vdCI6IiJ9